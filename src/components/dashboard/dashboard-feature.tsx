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
    "4DdfC3qzTWHfuEdQd7nfs3FdfBrH55wbtks5cug1jbrvE2Bp9unV11vKvvjUyrCdmDkBSZuJXMUTUid3SeW9Vt1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459pguuDzTafGQPfasg5nRGDg3GRU5upkinq7ed37rLgwTiRvbBuAXYFT2fQZ6f5Dew4oVWP7uAKEngUdiFS8R58",
  "key1": "2q5hgKxeEpB2YEV5nVuKdreayCGgPQRMNb9W8PTLHJk63DQ9Wx47ZHjbmeu2U8uneCr75uJB8wum37n6TGRMzMUE",
  "key2": "TGP1BGyDPgoEGzNkJxgZXgQWE1bA2TubdxtiypS1WK9SGnhVRLCGne9RddPTuid9GqABRDvsa8gZM9M4QjSbueE",
  "key3": "4LUV6uFgXdqodqrvvoJhiQrVhBnpzyoJy7xCti6czApgJ2LnafekiwEA5ZBLTYt9w4yeK2kdt2C137VViVAYG4hv",
  "key4": "55nkbgU6GYmMjAJR2CZVYUwZ8DtKTNDYXXz7dr51Totp3ZBFKs1m7HBj5PJALwSQqaEaMLxjy3zYPgA6XbrKAGf5",
  "key5": "DRnEnD7Cy9jMPSQFz23v6n76c2kVa3aTUWHBAp4Svmt4zmgV7mQrSkQKAJdUwcdfdyCGtc4xH3X2CM2N6DtWNKE",
  "key6": "2iLJaQ4T1TnE2CvsyNrBFSWcgWuKHJcbgE7mCE53bT1v63aoYkhbApbbtafKDzxEiCfknZ6YAmRjxm2huaG3m1mo",
  "key7": "2YPWuULm6zakD7izgyv55wkErLFANj7nr3SCJQom8YyLk4iNrgdNkcXA2oESbfAb9WgKhTB2FdkLEaYGKhzWKMMq",
  "key8": "29w2r21mtoUBXqHUJt4B5FLh7TAH59mjFZvFDGTSsVm3M71tEbRXxuSrr5xGcpg8p3A3K2oonJixGoJhovUFkpG5",
  "key9": "556Sw3VxHFtWeR6MDprUnYfJhp5H2pp6KV5czzMGNB7KQpmcmW7Q4CKzBw4ztuT8uGAGxTBH16RJt4qwPhDbTjWd",
  "key10": "3yQW594y1E1gM53xiAyeJtuFKQHznaycqbeybxyfnQhtjVfhcf7KAFgRzRgBc7saobdgUs6W9DdBhsuJ7eGTNf8u",
  "key11": "5upKgNVH2WGbGynPzB2yB6ERhRzatyeNqboczJDchj4wfUowUoqYXkycP2aN7DewwmmiAeXSbbT2hFzPsJTvQniZ",
  "key12": "2impcV3gdMEiDiaYtFe4UmJbq6TYqHMG3CP7VGn6GuaBypyYTGHyLkSxJjnX4N11n44v2Ewubt4MQmF7DRAhgQGk",
  "key13": "624abZgdwPzXUepLZXj6xDdT7yqk6PUcPxazxpnBL3VbQ7prJxG2CjgwL7cCFT7zHPwnZcTZU5RjUGA71py6kaXb",
  "key14": "MQSqv4S2CYWoxP8uF47jF75YtwDgN3T2JXJbiTSnnsqPJt3QkJ99dYknU7tQZGyjfFWmxTEFmit7J7j9kwqfzTJ",
  "key15": "5brcFaNfnDK6mvvSY4gigTYgf3xkVi8TJQ2aWF1bRxeRZFfcX5yamfyVn4yTayFwNgHDsuFveX4BTbPZpXijLQLb",
  "key16": "2fu2hT5cbdD9A826f5vZdbkF23ck9Mo8w1CZfFHfWhopB69sXRqvWK45pGnioJGBCbaupU39D28XPYzu58pdgaSZ",
  "key17": "2y8YYPLPyuaad2S4qdNzy1atda3a23sZxmtXEQFffo8URhgvqhEXHnbXYu4VFgTTMTGQ1wyTn4hySY3WWPJVyD2y",
  "key18": "4DSnyYDY5ey9fsum5eYmoEv2pXWWJMah1yxdpQF4k4KwTAjPeWEAQjGu736kLmZVikJ2UtTAifbeP8dH6qkba6xS",
  "key19": "3mvEXnCZ5KTLtfAYtC9mcicWDMYBXfevKPRTQt2quy9ZrmsZGqfhXo1iULEXEgDDXtaPrxDXeaaL56dfAefGhWYR",
  "key20": "mCerz6dFTEAUWxHBH8AjU1fBLN8sHH3pbAejUw74RXiH9VHMyobo6jc3vKCWH47T6m8zQa9QWn8VnL6edaJeaTP",
  "key21": "yrEDjAH9i5hrT6Xwnd1H6YV7s43sbtM49HAvgUhBwdaiTbAmseFmxMcwu4BKQ39ooaEGGStL6AzQMnf3MsHsr2C",
  "key22": "63R7fBmHW1tGsPiH8djsZneAsAZuujagTZn7yauorQKqea7mwqk3eRLJimB6fTjzAkZE4VMfJmofznAFbE3ActwL",
  "key23": "3gXMoQFpFmDdkbuES3suuhMW9fADqzgRu3FfMKcWPFVk4yakxMjVu3gZG7fhcy4tUK3G1wHCzLRucNgXCpvMgrhm",
  "key24": "4Ktdxi1xXSMLfXiat6jY6oyfWneJEJgVZ6sREpZNYstSiUHC5a86dcfsYBBqZs4nWMFUrgJC1TM2H3cZUfEeocta",
  "key25": "5gLtX8Loah95iHpDrek7v6yWNHZE9xuVhLYzJTc1cX6v7vBzteoFyHV7nbNcNn3oLzcwSrw7XEJjGMkfYQJAT5D4",
  "key26": "5tWWyc5nRJBb1p9qF1ED6axbw6oXLo68xXhmnT3pSUUAx7WnTXW9q7xVqWnPhAHSfRErLc65xxgFZ2gC51BRKDuZ",
  "key27": "3MxX7L6fKL9HDHZsBjbuJPakXwttd8ETpRorCY97RQgnZ7BcVgfZrD94mhBdBGrfdo8fzpZZtt8Pr4yK4vz95Ywe",
  "key28": "4ouJY43B2gnhnem1Aioqt1WRPcjtPTjpXtQKwV5GpquC1xeQfRFt5vSNokuQQE3F7jEPPcWXcK2w2czdAJTbDoXx",
  "key29": "vHnjUnLmM4HnhxPgXh953d7NFrXhVnddKTDBd9EpWuTobRodwz5NqVjGxo6TAP4ad7GFzFCGyHTg4XqVPEN7m5R",
  "key30": "4rfhFzYdKYitKb7uXqk3srrewo2jBxjRx44mMCVNRcG4txjocGiqfD9KcDfNmXMeYeykciRSKLMDbT42WKki8Uk2",
  "key31": "4osKHBMi5U1D6AxjNc5f6U8kJkEUc38fEtbo5kWK6KvF3FXkN9Tg8i4TsfHFfik1pNV7ac327gVJ56DDCm77KEHd",
  "key32": "4xGsbo1kMXsXUXaTmoEk14LiXiSSDPgtDdRRfzKzPFi8YjTXEMk4qGh72hfkmwyZhrXXUWx4w7Rfmyhkb4ASoiJL",
  "key33": "4EZsTqWoqLGZeMGJPzyihpqj7meJoB1Zp28NGrXuZSWRBTqig2a8U94KoUyuFsqhpLPLYskAWMpv1ApMzzowXisd",
  "key34": "epv4ragm4xqEjFDRwGkigf3GDYyQTokyUrBfY64gYPHu47NtmVd4yCeYQDZgZR1nStpfMatXdVj2pGauSUiwaX9",
  "key35": "2GaUr77hkCUedFFbgjNUqf9iTfX2WnB8XDcSsJgctWr9qs7dWjWcwrMCFVKvMtgniWKg9F6oEUSyE8rUSyVdN1Zc",
  "key36": "2nnoRFDA1PdGfXkDzYKBsR1hnCG7ExfowxvcupLNyRdMvfPYd3zSdQVmwBPAnm5RYDuX7BTWHv9mLPMr2bW5oqFa",
  "key37": "YYuXfTtAjg58b41hkdhenXstS9CstBj6oKk9vZ63nir1uqooL8jdtQngX6aZKpQpRUgRib8rp949yeZ9gZVazTw",
  "key38": "3VWPCtVQprKev2dirrgjYGYxz3TXbEHaFQBHsfR5NdMHQGmQAZdwhtH76jBDhyYxhKMLdtc7NkjDgt5q2BsYX1jN",
  "key39": "2jpVo1pAzcctLNimSdiBNL1oGBNJsPUqiNKug7oxt2C1UwkMv5MgMFYkhTJu7sEEWmQSb6Sk6ezDXxQya417Kvh4",
  "key40": "4AN5E8jP59FFeHbkXAkXn2gPEeViL7wN4skA7u7EJj1ha3tegQjR5AqeYDxdGsJGKppnGyeoKsB8iDmaNGiU8TB4",
  "key41": "5dddT8ukz2pEvLVP62iFtWbDmnXVRQ7pwECsVSDafVRqBBfMyjAMwEat7JnCr7hG7Dfvc2uV5gcZ1yxyQM6tixFV",
  "key42": "7F4BoPDu8BPXvjWTBAkuyV8QwHiCCQDCLZXt2Pv1eV6RdzRg14Y3aevzHsTGDAJM9y2DD9nKUhMVjZW5PYA6KmJ",
  "key43": "67HgwD74YxBzTz9nEG6nksKXQEKbJUmPAGMT9Ly46mxJYRTvMtZvWpWJhe2xvWwrydJJqHGZzu5BuGjDZZRyom5F",
  "key44": "5DMWMkMvt2PD7ZZRydEVa53uMGJLwDGnbAPnPMs7y7DkqeKzC7MCDXKGbfG5zgF2Nxc3Jd5XVuSnRV5SFmzWxdbF",
  "key45": "3FZ98c5gpudJp71Yw2NU9tiSVYYaK4t6T356L4QtXW2LKKFL43p1qvWvkdNJnsLXcvwjVEy5c8F9VvuL8y9uPjyH",
  "key46": "48yeNLNyXTMPN5hg3gkJDo4pgTZbp4WeYAcfydUKL32FnXrSCNNaMKTre9LzVLTYwmkQ9gXoAM36Fi3e3URyN3ZC",
  "key47": "5JmvWxZ7UXbRLwfzw5Y8deLAGipjtLBMdSWV5R3wQbecDV3cH9qdY4G4KFngB1A9AS4NkgcUVSERDnxPAcMSmYjJ",
  "key48": "4z76TQdwbx6ANcZchGXDXoiY9daDk7KqdFfZUfGYpe4aXEjQZ6iRGSzrbBKDvtB5BzzJGwBArU9H9kJyKqyuogzP",
  "key49": "3LTNNkFvsCX4k9ieTyGiCesTKHzuC8ghe1kuxaPxUaD6t7Rrshzrz9BtobbqK6ko77yYW5EhrJ19HKx8rSD2v8MD"
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
