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
    "tM4fCd17axE6ueJwu7u8Hb9wf19jkY4XTu5W1am77zDT5MCjcor3vq8RXQ48YDifP8Av6ojMcpvkebmZinLUrSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r3NchD5eehWdhaMWyFfXuvCdW6sE3z5GLVL3hC3myKEMEGknvh4tK2c6FF1KhgtV45rsaaD8kJRTRR87nGEZTS1",
  "key1": "277aXfSfbtrAFVEM4beRaeDCjns8p28U5QrpNNJjJxPRA7bU8JFegi1H3zDForGQvQLDrY2kTkwEARJBi5tLRSEG",
  "key2": "4Eh7AfZXzMUYichVzE3v1xSZWogCf3h4PU7jL9finGTXTHEvCqBTzb7jTmrYpbg892vH1Rd1MLRML5dQ9tdQaweg",
  "key3": "25x8YEYDioKTXjSiZCCTBb6MXRL5tG5fCTw3LXEUdfXtg9okzJkspGU425kP1yU6qayXkczwzMe7hBWv5xxr7Zue",
  "key4": "45wnTsFX7z5swgdxA2NfNgPZvrn1XiTpCCfrBd3y5tJtKjMR3nqEVuoK7PAwzuH8KSWcheAG1ADSsATgK2asJKbg",
  "key5": "4cqH4gyrAyLDmy2ffNB8woQza3czAX5xwq3EbMFqaR4emQoQxBQHKbYkvWu3NDxDD19QA7geDeeWEnJUL4Aqwq6i",
  "key6": "61ke7a1JLXMWjEvdGGDg3FGoKRbSa3E2pbuhBAnUsrjj7jtfUpS3aRPRnKSPhu2Vhsqvmht4WdLMempHZ8jKUGn3",
  "key7": "3Mfuz5GmQPf6MDwnTkHXQ8Bwrxuoq6ZxiCUNBc29KGxdzXaquHTFCKBQNW85aJSG47ASNLX3KmR25QSRAhYKSqbQ",
  "key8": "64BxzzEqnmq7otwRWiWoc3VUwH2q9oEVnCGgwDc5qNss6jExs4a7p3dRmbiDJAEnof6rzLVFh8YHxsgTZdsM3pMN",
  "key9": "V7sNo5f4ujjXsRDbjwdov3PnoBtSVpYdyADCSxTviRRDnQXzcAg2LZ1vBuNEujyCvRPTAVKzyvFKahZegSAJBMN",
  "key10": "2MPvSsAyadU3j2JPkV7syQfmPEX3jnGuX6HYSwBABQwoJYHwpefi5oc2C8vYNNWxjBLTQ8z8QVyakYHFKm7Liowp",
  "key11": "2dvuxgQbKWagvQffrgAnpSGQ4PS1tZnd3Qt8sLL1Bz1j9quCpb76a9Xi1ANHPQBV8tCyGFdhnLEaMczagWtkGexi",
  "key12": "5spCKGhz9ba7BnY6BqzmaSYyY2bCCLaz26BRy6KYYXzFqPnaWfmFuby9NZ7Nb76R16E8HhEz1ZS7w1SfjXb6vTZt",
  "key13": "3df3gLyDQXsq8rS5FkZBfvAwkzZjp7BFnjWhzv37gVTxFR5GztoiYKRSRU12PwHdBUywUYHi7PgFWtVxshD1j8RY",
  "key14": "3juCuQgdr1STDhnN8RPKt3ywQwG5ajdQ978pcuLnLfvHYCYZ2qE9rijTDWB8Zgyb5dxmMgBVNPsQgN3eRGWfio4u",
  "key15": "2r2mgBLc3BaW4MnWMF1Gs9dKJXTH7gVpWA351Z7Lub4h2qEHeDtcKSKDoyUV6nU9QV6cPfqSJTnR64Kx9NvvCT5g",
  "key16": "3J1v6oyFuVyhGuPMamRuEqhDyFBbzJpJP6Waj8oHF9P977crBPCGdv6CVKpTfQY4mVvhcPwgUKsEKRQUt9ibsC2C",
  "key17": "4LNxLbHwqRJus2u9DQZgh3iohd9pG45FcazwTKH2L4o2W488gt73rDivtNH2Uuw2WddNhzweNNZ5wxhWPH9eR8Zw",
  "key18": "3VtbJ89CR1oiFPxpqfBaYAPeHmRxvNhr2b4GWDSVNMcPV1MYgzkAm2NMZJ4zXWZHfyqXc58tAjT95312yb4BQzvg",
  "key19": "3mcronztzfDrGdNwQpDe138xhwqcULuHmQuWFoxtsCHKG7KeXbvQkK5dY7sfaDVb7YuEPQPTSqeFeebeBiHGGKEs",
  "key20": "mF1Aho3WC41UrEZepFEg5p8ZhCE2rWp7DGRhbsEXB6To7unq5ykSwQ2zqUjefiAA6Er1nW3bZEhUCW4oLAMRSrA",
  "key21": "t9f9NkcVPeceTwLdbFiEJbCXjAJgzLerYxHiXrrTGSaW2gHG54NEfFpw2qceXu1UZ9XP9KqygLKJrpACzgBu7nq",
  "key22": "4cDqDCGn55dbwFYAwBTTVikiRTqpKuovTmUmtjU6V75MwkAaSHYV14Z775P1zHpNBpoS6MM2myKzsCg6rHzcRDTE",
  "key23": "31rc4VWNXqnpK38gTovtEmJuYkcwaaLuv93FHxGtYdETCK4hkPkkCyDYyQUF3CYdiM4KDf6rSBfEArkBtfw1n6wX",
  "key24": "3UHB8f4yraVvGcQ7W1x1ayH5TVaAzK21cUD28SVZCz6wFRJpMikiDXuPon4Du8pDvT2mAJsVaYu3pg7Xc7i4mApn",
  "key25": "XEG6KBjRPvv1swmfScrjtxbBCfYmyLyvorjF4duwGyaUv3sw3STqyRY7iTFT5FrDrDNZJ3Ydk8GGAp2U331AczK",
  "key26": "5znNdGA9xse9GBL6pdCVmkUQ5KrCSVbqaR4bb8bgn9i8Q3Trdr9ykcwYbmCByVNwoGjWHGFAijUBzYUs4Koregnc",
  "key27": "5pzRhPvMMo1LsKu7DChFhJsyy4a31sfGk2KtEg4vUexnL1QfZ8c5S3sfW47NefrJEC9uizey2F71dMtHGncP9p8H",
  "key28": "4jv1LBiLovs8FxVLhjRJ9WecurFn7WGokThSVCcHRbn9NdwRiAPEjhGhGcB9JmXsofCSrK5Yh1mDcCMRaxxx34qP",
  "key29": "4e1CbQCbkWWGuPqWp1pAc6onMHbVUDZVJW9FP5qBrpKGp5BoTFN7Pgr9hz5zJACqNJGY6hKuDjKcvKL25BncZ4Kr",
  "key30": "2vcX7gsxXZ8Z44Nfk5ZoPAPP79M3PbfXmjPT71YiJDvc3go3t1AmQy5f84NKo1FQqoi8P3y4rPiT4iJCDhShQVvf",
  "key31": "4JjHJVfogS5YEHf2YdJ9bspFveAmwa6wsBaVjk1omJGoK7toh4xdFjYoMYwfFVF7jr34M7kMNx6snVjxJY9mCX9Z",
  "key32": "5Azpb7JR5JA9aMfBJZJZ3VF9KVd8onsiEcoPBWJUsXeC8YLMw4VhbfqhSDwbUG3MgYcegHU12yzRF2DCgFoUN19L",
  "key33": "2GzNEEar2NCiwBWWmcmLbMsdAx25onrWvFCGv3Mbd7vjBhjSAynD2J3LfqoWuPc2mo895V5yLu43niN3YPXEEx3Q",
  "key34": "2WvGEMMhG7R9LDu4m6drpLT1iAksZgTybNZwpKmmpmewp1xmzskudTewYmfdTyrXr3JEwp538vpaSQDsf81G2JHv",
  "key35": "3oDTJ8MMkjxuGn47TYMApTFHkiurYnvZ7zS9vVWVjbptR8fkA2d8Ky5vWNY8igPqmvwUhdtbch4dxDrabdAj3jdf",
  "key36": "5MovdXot6NzmcHTeX2Ao9SzbVYLyA7t77izDstZxU9JtPAfDFEKLfHwdpmPxRw5YuxUS549vWDnkzKnV3hAyhU6N",
  "key37": "detZmgjVqEHQS8QP2hACrhQWDDi6twnN4UfUKP7iCzjf7BQiDXpFagX8KtzpHAG2DereCcb5zVNv7XjFp1q2bTp",
  "key38": "5UbvpSBGhM24omaKxefrkfYanEofCQ9aaVrwqPESJ3An2mZvzzkrKWoQuzWGTR4D74F8zAZ3rV6BwHR7xvG5WAu7",
  "key39": "3DzVvY5qiMCRToaNRtMjC8mMhqjPngiubf3pTZDffCpGtk94ZzPxQMCSCZ4XKVhBtaesSXbF6WyvGntN9E7K5XGp",
  "key40": "454iBuzLTRnGdL5KygyC73toDRMvBx7My4hsRc9K4LhKzqHy2Jd8X1vyYRX8shqxu3zcHm6mabVG7gbRKqG8z6R5",
  "key41": "5ybCNfrHMaPBobsyaTT5ton8Cb4y32WawFtKwNGWfh8xYMb5yZ9BNpb4WLUi6aiaKs6oGxwoYe8x2ZsFi9TxaSyK",
  "key42": "4tJF425mtmPKAGxJEAc5cGu2XymYuQhShwvGhQUEs8XJVxMbwBQdqFnC7Jc6mDjKEXY9wwTu95JBMe9JYuBxSK8Q",
  "key43": "61ujuqWSbvQ5gSfHZxLPyA4AGN2xRsVCSgq6BKc2edXbtjx2oeWewY4icESgXBYpGA353odRkdFg7etrahb77ict",
  "key44": "4bY8E3EWGFXKtTckRrSPVcnmJXSgGiUr5HFWzfX5B8DfvgSk6A9XsnRM7565nqPSNPebvTEEYKdb36QHdhHCwxck",
  "key45": "2qJ41VXY5BBjNY5zHaxMv4TB2QocCUEPS5KkxtKjSGnH8oscsdRsvqF8Vjq7JiLv7FEbt7ypC3xUq5n6NDNe2Azb"
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
