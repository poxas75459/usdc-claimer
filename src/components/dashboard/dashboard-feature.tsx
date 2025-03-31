/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3LP8jM3CizY2apHZ2SoiPmDTGyPBhVxCXZ6eBDQKmPpUbqh2vC1VuVa5nrNPmTgF2fTaC13LLaX24SvzGvn1ehRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ufoApE1zR6VVQQESZVhWB2D5EUJCXsfowZKXbXk22fRJLSyS57LuUyULm6TpGnFQ3kt6Aw6DtgXsEwTg4UfzUy",
  "key1": "YvNiXcfV2Sqp3f5ksbHWkuhPPBQZaBKBG5byEsJDdmBK7NLp3SdXrN6sXCdyTbuZ3cuBobeZtu1mLzC4WPDoW2e",
  "key2": "5z5msnUaWKcqPCUc5iddvjowtNbXo1GBGRPPHd3Zzk8vBPJ7BkL55coxhU8k2phLUXraVfFRHEdmrZSJDCQxPcCm",
  "key3": "5p2sNmGBjKyKLibUtCDfV6KhLEPxDebakPJYJ2siFMZc2DokKYEMvms8LdkffY8Zt2mQzqjHBWzvkjxuj99AovGy",
  "key4": "5AEVozXvbK2NyQeXV8srvmfskJRPriZPsBbCBZbVf8zki1DeuUEZdATt33od2mBRSBfu7eNauTVpxKjmVHnpxhwk",
  "key5": "4DsRB7h6Cu9QVs1YAMQscXVYDWvtpQEEUTjchay3czfMKS8oYXxs1v8Bv77C7YhNLHsk9sDSfTZpLtPZH7AEQmxS",
  "key6": "2YbghjTJ3T2kLkSkkrsy2rnDHjXJy67sZQSgnTAc2hZqSiZ9Cc2rvtKq9PGN1hfEhJv3wnwadbWf7t6fJE1aQgj6",
  "key7": "3FgnLyyD8fQf7nVtj7h2nvM8PhXJBKkmDEnELxvYopqHsdf8EGzYJKRPyQDfsNqXZJL5fyqUGMhWqizcrQM55dEx",
  "key8": "2fLugn8bPnpDCwdTUPDcAY78LScYJX7U7B8c9oS6mHKiiRH2Gx6cfhubR2T5RWoY7r8DB3wFQTHPcE6SZ6zSdsHA",
  "key9": "PgRJraXrmWK1BHkLCLSu7Z4C1RKiVh6qyyh1uDc3YEcUup1W7eUB4WEnd3XepNgTgVhnNbbWZDP7tzFDx4fAM2C",
  "key10": "3P2MGUbLGMFf2PeSncUWVM4NotSsbwtHfGMt39QoHsTLufU8CNcLbh6hJzLpTYr2Xz5ULjuhaSgA9HNqDSfs3cu1",
  "key11": "3iaSnMbh3JB6REQpdMsb9M1THy5oVS5jqceBTCrrWJKi3tFTMMXRoyAVZQhr574XZXRFKeNvyZdkaFd8HafZVqNm",
  "key12": "4pi7iPX9Np73XAgh271wkmKZHNUDCG6gUtdSrXoLUDTPpFafqHrrQouJvJivPzZq1ZWdx32rutdyNEFAfqVSzXRF",
  "key13": "7HGZFAJJVY1Jx1eBEoGpF3YLygdjgVsLoonwfQ8reg8myjUNhqdnSTs7FjGUWtduzvEtEMvsouQP3RtaiyiZGsH",
  "key14": "q5okZZB2P7Yd2AboEWhgiPPaHqr1mGKqg9VyKEd6G3ZBAqDSGhKs62wkPCtyFSxnC7hQYfECUc2JVc4DYZdLmaA",
  "key15": "2GzA6uaPnyP3QrsSjD9U1z1PQpLngVyFRcqBFDBCVsiSaQ5SENzBYrJqGYPkNfERSsApJHCCNkTuhQQD9TSGpjz1",
  "key16": "3CYcTKYzN57jV4ahXYuv5ATw7wqnGifpSfNVXaw3kXBhSmKvjibivMcFVoyZDxGFZsKdxtXzzr6rByevdR19ywoN",
  "key17": "5tvaPr79EHRdTzrvwPfWbaL2pCWbzbdhUgobRUcTsk9LWmcoTdKYY72EkccydbnFj2RE5rcHkrAF21bM61qprm9d",
  "key18": "4nuZiDa19oJEwDjtUS5TdZocNDVDCsQSxC5UjAfHenf3MNfBqLFLqumarkgQvVuyHjLJADJeYM6k8smjTUCpXsFt",
  "key19": "5fzVNPD5ip8LJF4FELBSdpEpGsEo6h8zFw2fm7XBGF3rSQTKD8KaQ8epjSUy9iRNFFQ7mg8xUhwxeu3BRCDBUbN1",
  "key20": "5jxViqpMeDmFL24FrYGubxZP3i7g9mbGvAHVhapsKEwS9B35CustE8XTApCkcWrp35ACWYNqiPzHDt394325FjdF",
  "key21": "5zREiqHd9ArVjmjH2Kh6yJvLmquZupJnK6AE7eZouXZDGeu3m8qbJB7taYNEyJCfwmMxM2yExga3hCz7fVbDmkTR",
  "key22": "28VhFMXe8HYE1d8TPMATAfrZ1inoCyHBV9CsAAm3K4k55Z8sATTJZAfU4Rk95hRtctQaPJ3HYyzGNq6LCNUhbqtQ",
  "key23": "szhRg9qAjqvCNAT6Bqa7aqcBQGg1P3gybei8dvDJxKj47HHZUMD2jLR8Dx5V4n8Xfcc8pJPhhfvj48Ks1G5fDfb",
  "key24": "KB1ERfaBQ5bdJJtiyLNuoGSDLSkNaguJBwPFD6KKbT1k4CqVjw3ZPyEazZyHdAzmEMZJefTmsK6jEvTcBB9nwww",
  "key25": "31suasChwNAVoTbrcbQ1sywafnFsqPe5VXVTeSWVPa6p78mUQMFZCugZLPLiZsY4zmzHrzURy2XvQxAkaR59jUe4",
  "key26": "Rtco1JU12btqP7tuKDgz4LgeYKFd8eLQjt27vXdMMqTJSeSdnVGp5J3n8J3icBa8RqyXti3BX4t6ubAXgdaH3BG",
  "key27": "RcHBHVojhvRVKSMKXFJPj5y1x1iem2ozgLBzWECxV3KTFDyriAk6hbBrUiqVX4HcfqXZt5PwkSyi4NUNsKiXeUH",
  "key28": "2F71arNXWhASoZm7a3uYFVFiLte7m2YkhXwyGtKj9px9eg7sKQvqd8MYxFQFWFS2SaEhHzjCKDYZpEDXGLj6SQcf",
  "key29": "3a61cnN8PkJsLQ77oJPGWYvKrWgpqffd4nFYCsv6p3fppf3vQVJAAEGxRqyuUFAoAnZ1SdvrMXZRPwosWU6eV1ci",
  "key30": "2amxAMzbA8H1PRtDGZt9m2yxEMrQ4CDsto9bad6yZvALkc3TomANgYtwatpmq9uhgAhn7LMN4HmdJRxpRGmsdi8p",
  "key31": "4784Gy1FXqbSe7mp7rVwUdMsUGoy84YUGtAZd9hpvUVUMyqnTiseA969XxCPBVmYUmuS3GcH4n9xFqLnndLucvqV",
  "key32": "wdeVevkaKjReUQtGQ3kPD4JnEEVo4MCKQnnvQrEceZrKfkcsWfX9T392qDNP9au7dMzjAc9FY2YLDYqMZk2x59U",
  "key33": "4BU4aDcuwjZKwyC9yWChAsYwAMaRBrL8g7xnZrDMNEpsXEQUZp5bd268zAvPJeursijAL4DhyDi9L3GfPvh1rHN3",
  "key34": "4dtPkziTE84Qz7HYD77rKNmnjs7hyCzmUmkysbHhoxF51cZFLPo3zrY2hXvsyRCSfCsVWmUKGA7PnvkUjSjPVcDc",
  "key35": "5P9i73uiKDD47Bv1hRHXkTo8o6PBZjdUGmo5XfM5FYbjZj4dDJMn73fSJfKarsBGSxRGgumtJFCxKCVi6ZKWFGg9",
  "key36": "5BuKXUd7M1si66sJzttGopYaaDiNeoMHvFQEqRpvWPoF4hP7BUcdqaBjaX4EPjRpx4xM2JgJDZp5ByctHVnfX5Uw",
  "key37": "2NsLyFhQVxe5FccggfCZrWEVZFEZvHzumKhocHBnfTfmpiZdKF7WhfBjhxobwbzfqB2K2wtMDb93dHoRYSEp9CJP",
  "key38": "Z8TtaB6v4mFozxFMnFRqoZhjHucr4uZeDsQC7UfWQCnNvqtKH8kHcxv2GHFHZWxHunohAZQ5rUZ7dULkRqmgr49",
  "key39": "4gUTCYHQZiQ6sAfCrExrRYq8ETWJcRfoUWcj8a7XnbprGuByHXYQmHWMn71KW9PzmvjKfKhVZ4CHKSvjzVrKH4tG",
  "key40": "3osb6t9FoXDgTj54PyWgUo2bWAYDy9WQwVVZkqAxqKLAUUZjjXEixMTScMkXQ1A6SUKGcRkHDSdazqpf86BogD5h",
  "key41": "61ojBKYuHrwyTGM1FPt24sNEvEKVKo5m9cT8YeHDNQrsCnDmuxDxtbpdauZ8CWVdd5ue8CiphzBmcXCecWFhJa4j",
  "key42": "MwLZ72p26CjW5ZWGLs13HEXEvZR2RzLjjrmcBBmFErTPaapetmPtWuvjiCdTmzzFvR4ReQPi8JjPxGjakf8Vnh6",
  "key43": "4qqDbuDj7A9NibkeHetAicfBKw1Ebfj1w6NWn9kvr2NBzEh5XYsLjW5k5ENkWnxGdYbdiiGJ5XmkSBktrHmLRTTh",
  "key44": "46xnnx9eFnjAnBJyMzwcp63MsrpS5pLUVWs4zqAm9rEH8zEfpWspTxSdafXvRzejUXHxcymEcs2heDVGroZc2t7W",
  "key45": "2KYbJaUG78GF9FxDRCnxkduumSFW3wsf7A2oLpn2UcaQmpJ2hhEExCqFpaHMhHXwMDjK5yyHYjk3yPdmtznnLYdf",
  "key46": "jUAJ9YvFbvbU5XExwTxDtkn9PBgaRPgULHKWULU5q7uR2va478xmyA7numJmFHpz6VjSMe3AN2jB2DDMVo8wAb8",
  "key47": "5zF316epqgQcRdVcp272LGa7MLjSmf83guiZ6R7GAY93fZeYLnL7Z4Ttbvk95Ee3Scg26pYdXNzYXjrtK1DdpSpc",
  "key48": "4Vmn18tutZwxmnGhkGCHkF9cx6zgjnNZaS8Vx492wnvzfTGSFfM6QHwJYnCC9nRJwxC5ycW3tVAXFY9VeRDCJ2WZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
