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
    "4xzL8uc5yBni8Lrm6zR7G7ed8HRBmPRfFZjiHsEX6w4y8u1gJpxRuBCEb2662J4sLkVmyzamtyyMENeMuRBaRb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YSiqBzH31K6ZVMMd8xFuj9YL5gkGGLYu5KWDnUr5JJyE6Fy68x4cpgNwP5pZe71gUPHoZt4vnVjQFC4L6381vLd",
  "key1": "zoUVZxe65b5PE96BGpRsDUP21awxSPsrjja5QqwafJTbxCpvX3cREyGEJTp6sxjjAdZWLGtGQ8KPWvqJwGRyKEZ",
  "key2": "Ln9ZLnNjXWHtvCpq2g6oTrVtqKyPgcgn8Kif9wsTJmu4xhijRiZGetcLdxaAwwLzTZQ4nyASdLjJHApbmpFv1Ft",
  "key3": "2Ze9gmmNVEqTXR4RZ7rFExi6Ms99CbENp2hF9HHwg5DagYY86gkBdf2TpwhF1H3BDGTGnknSvH24TSpdicJdoL9L",
  "key4": "2QWR2cw3kJF1xf2WtGTU8EZnDMZbaRR9uVRpLwcXYSKRpTYH3guCTy3CSAZ8sLYmiBwfGzQYo9qjmT7uWzPKM2PV",
  "key5": "wWqLqxogHnAiy3XUhyRf8F8jhuNcfe3kJM7TTmQdQGNrX524wny5pxKWzPYxnTMEddkjMDhgqothCvj1LYpL3Af",
  "key6": "5e7NZnKNekWMrXMAcaSDey3np8p7CU1g2y469u71ffveamJHgYcBbjAHgghketNcH5PURcCsdRHG8UXDJsAasDGh",
  "key7": "2Rr9Zqhy1qJor97KWb4SgjJHVZoLB5Wox1CxsHNXzwzembtrMQw5xkrrhswEyFGTc86XqvbsQ5SDabvZGpNjZgrq",
  "key8": "5FcRBbLgknyCVxNT46qzZXFa41NnexkAC2G5T8T3kNargsAGwNLPffj5fSk3GqpcKRJwDreZhFMpJ6sCx4ktbWNr",
  "key9": "3ayYtvu353WS6ZHpUk83WGNJ7vecEJNcUDUtYo5YbheDHN5Gx7ukANH6PmYTMB3iNbNMrytLH5B9eSPuRvcwUa9n",
  "key10": "52tQRnYTcZgmweATHD8QgmkQfTy1t9i4AxSofJBjAfpBBbbq9KNktRRqCN9Y5h9S6FJktDEwEJZH16evTSoCogyW",
  "key11": "3E87cw6qtKJveC2AH8ewMLaQb9bCUyVgL8LwsypxeVGocngi1xfvWgmHUZFRbaK2gi5w9HZMx2gpyC66o2Y8T6wi",
  "key12": "2hskucrNJBt3B1Q9oy41qQgDc2ph14m8ZhPNv5pKZSWwKWX6YUrTFti1Ee6Uaymw5xUXCQyiVoMMkEr2Ec8EtVDW",
  "key13": "3VLcABHvyEp8VtjCnugzjuvbuspkSLemnTePUUDNZ3617EBFx825jvJ9EoZa6qxvdnLizbppw8vKwQFcjU5vb7Zc",
  "key14": "dAMy6R1jfDttxSF9DgMPZY6kfyqNXDjHe1p8a3UafqjVy5ruGUS3Ez4YQJpHSoYmJ2Rw8x91SKbymFF1SMu4sCQ",
  "key15": "3Df4kDFW55YLccv2zdnxABHziyNo9wfzmyT3ySS9LBpYpX9QXDj298kkDMyCe5NFPJoBcTNdueacz4v9YbrouLva",
  "key16": "3t55KEbzUEYU1qn3aVWKJZee1mFwgKUfAwZLKfYJtqetrvEftVkMYkzrNUbjsCz9uyYrp6SRTSvZxAF8qfKwEUac",
  "key17": "2JKrY4FraSC5GHRXuDhwLNVFdtGuaEXVamjZx3Q7GikkyDHV2ee5ZWbcjhSmgXV8stVfeBY2S9cd335Hggz5teWH",
  "key18": "2GRQujpvZTJcQja2RG1UJrSPPnw8K4816C4cxX5t2PFYhm5tDLRhcidq2mLGnmY8HEL14C3nK7pN334x9EsScqen",
  "key19": "5keXFiY7AG9GoU2m8iZK1mvAPMZxwuxyk3X4QcGC2YExvwhRirEypPdX1o1e4qYc4qwBbcRp3rmAUEYMHjJng9Wn",
  "key20": "2QYhMiUJNekWEkmFLACu3YRmtAi5ymCFk7yqDfHfHgeP62EusmEizDZ1vRzpFheozRd15615hoSH2UjvkUZk4sTE",
  "key21": "2mSzCv4ZAJszp1hxAia88M9GXCT5FqKhooCt6jEVPsBVWAG7w5dHSDdwj5vbZJ2QS9ypXoAHszNKrJdBstyoaPPx",
  "key22": "3hjS3LekfjCtU385KoiFkT5X64aUC8xMxeupqNXXL57Lmd8n3aZ5T95iyhih92dBEVzSsSY46Q82FsVSZgbNTTyZ",
  "key23": "5WexKi7U9GnF1SPbJ7bcEXNM1g1wrJUyBv3qdSkLZEAg1tS3rRiEkV3wwW26Kv2KbyF4WAQZtWSgcopbeFhWh3uZ",
  "key24": "4NQjTbWMV2KxUA8SB6VuDQnapTySM1T5NSKFQ3NBj8r2yscf7HmQbvQG2ELY3AajM8tB1ntGRmSrNVAc3SQiviHQ",
  "key25": "2mFDQ1GQ4aKFy3WLtTEYX64HaWsVcjQTMtkA2dobiDns9CaMMW4WPyPY94CociP6vat8rfCBDhkQMHrtTa6SD6XB",
  "key26": "2HLnayCvCexW9Ym4pzkQpbW8UnWd8YvsswkbUDwbEWLjLVUZH9ePkDup7hJmpWwZ2q9rY4WXT9sw9dV6Lg4yqa6b",
  "key27": "2nsdBZdHgrmuapAMUcZVWD3XVAAzoUiAH4YJXedwGS38aEuShvjJnih8gLFQMxB77dRFeKjmLAUx2nSy6ZXCfjHT",
  "key28": "29WYAvV81EkXs51RucAmzgSNnYrcyzeYBwg6mWgzmVhcE84gtegokH78vcKKYVQtFrFnWPnw2ZCYhRCx86v84qdb",
  "key29": "2qUoRfkfjxqrdzGJrgkdBS1qDT7ehCnqDUYttLSdHejYYXWU8Pj3oSV3PJgcUF1XPBkFhhVhC4pZKYWw3rLstYL1",
  "key30": "5eBGi9QDJjY1v5b4ohb5anggKkPB6QGPQHbf2Uhz4R8Pm4g2r4m666pV4wi4ByLsWxnWy8jyhRJeYnZpep8kQz83",
  "key31": "5DA13Cknt7uCVfJNz54BxvLS6dWm76xeTEwDqvbGbUjRcq1289n7GnGXxh4Ps9Y8uHbP99oKMd1kVVkRYBnjhxyn",
  "key32": "4aMSV4GrPr4JMs9cfsCdmkBkW7n1zaRyvnNrPWfLSMNtFiASKDvovFNwvSoHJZB4Vac2L7LpdiirzhFLzThg4SHz",
  "key33": "3Chfbs7J8bwnpZoiogngbwa7wyr71FyfUEz8PdhXUNpG23BxSJQVAg9S2X7mwFbsA64g1hBGoyah3hyQ5H5jTz8R",
  "key34": "5anWUYPy4rAznQk3prz8EQxZzVAVvThrGk4rbeLJvWdhGEL9D1ix21dMt8VembbwZuEk2xgMX64Va9DVc11cLfXk",
  "key35": "4s3zefb2uX87vqwxwzBtexukTtsRtwvPiGysT8ReTQeqkQjDYLm7Bw2BHxuudiUytR6MNFEZSoj2Cef79o2UZgLA",
  "key36": "23Jd7PYupsKNVTR9dD3DzWryoQLYvdG89fd3M9RqzG9mXKPKhLvZv5JEhvSaDLyQc8C3LAmRFMJxVoAnH7EXS5qC",
  "key37": "4tRQw21Fahvow3ZT2H9KrLqZaczK8n2GdHTiPg7p1Qf256vQnj42fLCKZ6gPMCVmFxNeCLLvSRWXjf5XtNgJXvnQ",
  "key38": "5aVVeTKKjH2HTKiMMKSEdqfk4HRd9wEknEzrCkKJHtD5sPhjvGUxwEzNiq8ghBaKQfPh3kVXDSiiAgwfSesA1TkF",
  "key39": "2vzcVKeM8KtwaVDVUmw9icXUJAyCWFGRUf1sJrk5zrki3WqsS2dWP2mxe4Le8KY4Ejgh8sugpbWGwFKXGB9WFvRU",
  "key40": "3WJ1UV7sCDa2MbEkpqyevRxW5E6A5wob4CC5GKDrVjNxWs57ZYikxZYdAoE2sKvryPQjoggYD8NfNgswnVDiL5ZJ",
  "key41": "478kFFQmrwoQubexhKBgyz5Art1uuNcLsiLqY7GvvGbjJG2zwAN4ADKGnkxEmJ7crkCJeD1uDDZDuQSgJ7SN9D6e",
  "key42": "3ZSg8BfHs5PtFtXB2Z6kgpKUeju34Gp7Rw6T54xUPyqqCihnTZMuhvtdVf717vVMmc5LjWn72VkqG43qXw5D6r94",
  "key43": "AA89K7Pp6WXqA9SXURVpFvr8eAUGcDkNabqdCrikBXaKkgMXvpFt6kjzGcnDCEcS8VzSFCS1KcEqXmvjFanDKDM",
  "key44": "2Skuc3RoAQuxmByBhJXdcYgkHt9BvUcPEwkUoVikzPgwTdutfYeZVLntdtagdDutjyZBMjndHpXfNqF316MBdd9v",
  "key45": "DyH2W3F7TCfRjWP3Avc9mP3R5S3MSXKiHhpVCahbEqfsbrZZ5tHfCp7MjQZSjZRBLDreQycHqZaYjfXzEqWwTvW",
  "key46": "tAo4rZAmjbKZYD99JvxzGXSbaGzCDgSo7ZJ4snVmFKev5gYzSUMohLeh6LG3pPHcRmqPyhedh7fMKyyYDT6SCDY",
  "key47": "4ucQAboRnWAMHmKn4jfQT7p7JEZqSuXRVnoVAYHGueYzj5Y3vptuF115whjuhjCQUhgyuSZziJL2ZrP9cuEnYbGt",
  "key48": "2Zcq6Ds1VBYzfeDs8jcVSkFgHChAFiaW7Ukf8oWw8fxMxhF2TeHJMoRHsn1RiSfrZpJGB5ukFpNFjFfGVdAy14C8"
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
