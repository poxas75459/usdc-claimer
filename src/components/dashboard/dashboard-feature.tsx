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
    "5ioXvE7o29LM8rcNeaPDpFh3nFw8PXtUTTk3QiuC9gGvfgAfzAV5Ndzc7HnZ43u33YsfxRSeEgGpZWpDjkWHTk7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVUpbdsrQb2cxKefhdZoKkjuYij5FYrq96H8uR8oP2XX7X4VBuPkdnML7FCCc3WcGMibj7zzhJHEQ9CCfaMwW7B",
  "key1": "2NfxobM9GQMWj7jkjvDmeJSrTeUYVWNfWH49BNNtwdUjxUHt63CvikNhasikJSzVBwSccBf9epYuKGUEp7MZaE8C",
  "key2": "jGgnjAJNMqnC6g5qDdaPTUCggMZKaNML4g1GNU28SUVWgTh7t9es38DsdvbLni8ibbQzZzbWtFRUvwwr5yCGYCu",
  "key3": "3XjW8hVrXvPvchwBBNifkZoqkBYauMiy5Rb1pNP8SVfNypeNphxhRyxinosnLr7iSNAztCNRwpUxPC9hYK47zCaT",
  "key4": "37UGTTthwG2PTAFphvQG5xSkn813BDZKFG292uDaX5XRe19jQnR9zz5cXxn8BhqqUQ4yK2zyscJtuXfrG8Rth13V",
  "key5": "5s8Ea5uFsbcNfTD8Me29Ehq6G446WtZ66fadjurqsDGyqEUZPvmAujAX5YpFRn27WzfkZsHwu7k2Wm1Xmw5Z6P6E",
  "key6": "bfQ52gSovqQ2Qqd6wBNvoXMfwWxeWSHxxWMvGjvgY1FRJhomQAvSfNyFrXqdzpAnwgUgR93WCvqvcmVd7zPgH5n",
  "key7": "2jgEYodWT9CvvPf4uN6VeKwk2QpTM1UnTH3j2QnLFQVnv7MrzVuLctREtSAWe83AvRfc39G7mcrf9cdoG5Ab4Num",
  "key8": "2ZJzVjZdctYr7mj54pwRhgHsh2tFLiaQVT9vmyvQt31cDZhsxdsJKeLsbXpLVdVbjnh5y1Kst25prwdjspBJmznm",
  "key9": "CcaqXkZxsyNrk7uc9HP7foLL1mZs4wMLyZsE4enjAzxpnVKMyxoQizKBUy1vqU4JBorCCoZAJ3ChoavJ3ymcbAA",
  "key10": "2hakk1oCHMkgCgHLFuB72FRKQYBzEPWiegc6v6iFbbnbpcmj8vvVrgudG5MNAfV2FrNxZFqbpSF19tinfLvbW8hZ",
  "key11": "k8K2SdnK3i1EFdhL2TdkmSjT29Upb98g9512p3tH67RsEgTvnF9Aq3cucNfiRZnWqxQKtBRvXZqgLLLdM8GALHm",
  "key12": "5WqGbpEpfd73gHTZjpxhXtYfbHDUULWKuouYp3cgCHRj5DVnBzqaVcFM3GpjWqx2KjUSGAvVPSia8C316tuRgMyv",
  "key13": "4WM6Aftx1Zdzn4Z7VfUPaG7jiC5aVYqTegyWxBVYKqhZLawwEZGbH12868hcrvSJFbwK14DFacmsAnukFzg5raCD",
  "key14": "2MHSfvTfSGHgJKWgw9NxhoVCZtbANHKQL5M8PDbLdEyjDUWoH6y5QVb9BvBJjLDfezLdtHMcC7Q1z8FyimZXXenB",
  "key15": "24K4f1vmaet9ZDzjrqmUDRUChgHnLGa59Nw7NbUxc7LNDcNDKnoVHaKcXLiJo4akMzUUg7Qxk9ZtSQTmUBjmjoVi",
  "key16": "n4uNtGodeDiJbTxL5wqu3wFnnhYw4RvSPdnqZBhD8LDc38RBTnSNSCjxKCdpzcY7TTbs1QuauvK947cT6PTjKdE",
  "key17": "Y7VrFK4UErk4wdQVGasL781BmVj8xweUsMmQX64psfYoPPf5RSdRsqg1PZ93esmGYfpdumo89GrLx8sEiRgUeY9",
  "key18": "2ofc7Lj6uhADrhvrimQFfxmDvCeVzT4FFzvgNVHvXiU38ges5XnV8uwkzBf4sQ8JMuuNXpjP6ThorEdL6MiDuwMd",
  "key19": "611uCAVibLQAJiRLHwVKhsGkbCrJTxqnqhbcsRfFLFYhVP77RTFoy3gWJtCnVuCjoJiGZSTcMzf89egj8zfp8sNw",
  "key20": "2wvw4tjGybUSPi3Ccy7o7sggKkhWC9DpRVddPUunMU3dkHwmfWqwXe81YNzR4oXty57K7a7oCGPx1M7WJMZjF2Rc",
  "key21": "4tAdhGwR5ZvkVmJ3M8tWSvfvPS5vFyZv6G9uv5DK1kUyBcza3UWYX9MKtSYxYyT5pd282JbvYdWExfBahMZHJEv3",
  "key22": "3r4uFA9mK86UCJX1MryNU5wEYV3kFySYAgqbb8cK5Mqnnz9TL9HduoeyDATQRRaxtQV7MKRzS1TpsAgmGfHUJFhz",
  "key23": "5xPxdxDgLZVifCCB5P1fHY8DAsvB9D7M3a6T4UhVC6Eg416ZFVnYXv6gEq597eLXnhprS2gSEAcPw3JyxYXHEcjh",
  "key24": "4foHLwHqRgBskCp8FW3WCc4SaLNDoycu5AP5J7z9DR2mdp2YQev4Wkn7DQxvw8d11AGgics8MntUcNyX8C2t4kph",
  "key25": "5E84AgZ6n3PdC9rX2LQ3189NsYzvTS9g5ZWxriYwPJGV6Vacz6Cxr82gGVFvUtMJxtmNiFeRy1P3b937aidP13JB",
  "key26": "42omNaho3haXvvcAdRzGwjmc6Ldwct9bSR44yExT4cVLjTChbAxwNXEgzzXVXCxYpAoxu6U7fkukGuFAoaH3cUtt",
  "key27": "5benNEhWcXBknSWF4fxgARY5w82f99fnzsYJfH1aRBrBdMv4LdC4ErAGTyuzon5mzShzERHtT6TeFDkXSYfw3GYU",
  "key28": "2Y44ydDQ5N7QGdagGhZSVH2MsinAhjXpVHBsw5msnN4wyxq9bpoLk9jLax1jVq8iS12zL1etLodZTmxU2j78dJaW",
  "key29": "o9Y3f5vTCmXEJk9jG25dVuV3bNBZqEsa74oCiwwaY5UrXfvVpvjbfS5riUEy8A2gyS8UaqgufdxrM9Kw2BtaBxf",
  "key30": "5nFTZv63YaC8SLQUZbtJ7dJPzgQ1SZzUpmhaR5jqRusgPPjwtPLvpVSJ41P3cxziTDg1uU4U4k6zYbw5BfXTxmd1",
  "key31": "36d7zNUXWhFfepcR2g5LPxRAuJ2GCtCH8iyKaaXSYNCr2k5UwA73aWSSFAupEXu2dH4UzeWHBbzDf2GzDpjaJ449",
  "key32": "ucQkJm5uJRFzshuhNc8wnCwRcApCeaDfRvDfBMenXBcfPPcfUC8YnhGuJo1S3rq1f17CAH6TEiH24JNqcguZ5qj",
  "key33": "3rfyBsHHk1xrXQFEgCCWx98wWxqyH8p6CDo6fnBdeiWb8qNwF519wTZxVuyzZUrBAaxoWrf1wUdWJqZh8RZyiTiG",
  "key34": "D5YDT4g8a1Lw4MmAWtgm8d7xT583prVipwiDZb65FesjBEGu4sX76prcfYdCXoWUPVctMTCptXMKmSfLd3z8gFj",
  "key35": "5giW19qXRmYUHAq3ZWYThVWZWs3j4udunb8VkuSoTBckX3PA1fLEm8qgNm9p3VGPSVVrJL1Ns2xamRjjT4Mxi89x",
  "key36": "KCknnN33saiCj8oXiEfCeyEnK34Mw2LvwBHhAHAPDyyDc1hSHwhC4jaJqMa4FRzdgfQneHvRD9eMZy4nHUow3nR",
  "key37": "25vvSwa5QBvze3UVjzoTkB3ozQ6KeTd6Z1DzA813gWox6TrGiphMFfXL14TuRNUvHsBnGaSoTPegxAWgXZbDyADZ",
  "key38": "2jpdoCaSvoTKvDBK2UK95kQE4hvH3Box9JAAwV3Nw4PSvbRpPqysxtpGYFJDd8iCum6UWJdwaE8PVbHgKaYnP39m",
  "key39": "4Nxt3kCkAprwo8nb2McyFM1gNZNwYyYtmKCuD8qG7keMaxxLSbrenNBug1fd9LzR7V8xw4oMgoMqa433T6Ab2Ucj"
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
