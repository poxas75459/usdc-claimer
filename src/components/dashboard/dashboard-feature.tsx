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
    "4Njhvy8HZiZcRAjNTnSrNyHe3jkPBkWkGC5ZYsRAcRmyDPESUnkM1w1TufUq7TRUv8PnSLh8wouNaNehbMemh4yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2LiBmRadQwrp3rKbKqAAs1h62ryFiYSjh4Ym5rd8buYWno1fXbhcMHBrMuSjJN2UJN3qTf8SyNH7okZDHauP8E",
  "key1": "4KG3RevJZz4EhiwXLEA9A7enhA2vTBRgEQitpXiUfXBiZcoWeT8nDLc9xLh5uithPe3ncnruzHbUUiDGev5P58pd",
  "key2": "31CJhZgLijbxRZL5cpxqJo4M7RZoTZiXakermoxoNgXNWbkFMxy9nJAPZmsHKBmUzhrBYmpXhivozM5i9R4viggN",
  "key3": "4YQ3Azk8RXieVawkUAfYm631psC2obRAcQ59tkw16n6Gh8GYV7J3EcHPa2abUPZsvvvqpH12gYN6MBXoVsbTsGnZ",
  "key4": "4auuNbBrjqwutiAWchpSFkQammAXYSGidfTxqhUggnqV18kLg2bBHpdnzK8GtcoJiBDuqUR9cZfNH9AxiYDSHNex",
  "key5": "57JY7Db3aUSz41zDKqkJWAf1devLqh8rVkcPLgs2ZQXJ12yrocahTbAd4MvRADdLyW3imcbiQoBY8hYWE66cXZVh",
  "key6": "43PmrzDjuKGTDWQPYjy9PhxryTTMkYegABoXZB5tVpUnBNkHWDKWwvR4qXW8UtGfkhunFumfsM5KNzJc8oTxdoFT",
  "key7": "3FRkoCUDFGo7wFmA7BzRsTQVkCrvF6T1tQzMoTz169VQTbmsYgwG1WSYgsZa2i32phuzGjtQxBdGEzM6FRHAW9SQ",
  "key8": "42fjEZJKUUZDzDCT5ouNQRqCMpKdKxKq7bjp5dJfm9X78WjHoUFZg8BibTaq7M7snsrGGGRb2AQcuAf5pbWJfjCT",
  "key9": "5Y69LBBLjeNz2DGcw83F8eZahZnzEmnDQvcM1mpQs7pgjJ4hz6ah2fi5MMXERMTy6sMvbJpTTyMUMiLHZfFbz9xn",
  "key10": "46MAg3HCL5sYcwMkXanCYtZT2WGH9ak4gKbXEzzBi4N5k494YTvMZHwve99JQvzTf51kGXGn8fdFYMd5CK1gUQnA",
  "key11": "2Ht8xBKFp7YP1erqEmfsP3RLZHY2FycjDnFw7rVQ64hMaYgo8jWrzWV38HcyzZhPnGdmfTxpTzNAjL3t4mZEbmz3",
  "key12": "5fDKj4Q1u9fEohASu7F3Fteq4pkW1aSVdmhmMP9JwzqHbTCnoMa3uqCsNVCrKQc4bDrGmgg685GWEVYoUroSRE3T",
  "key13": "48HDveYq8FsRcKtxjxw3biYkLJUjq9Yfzr7GRbPLpBg71kSQQx5RaR9xLkxhcMp3eP4NhAw4YZDYEQRQ1Dx6U2TF",
  "key14": "LiECcUDcST43w5tUd5SNAy9fUXcZQdm9gYpxobEj54AaLWuc1omgDyhSqW4y1yT5RR5gCaBvEZzwW8HXhFG55Md",
  "key15": "yzEQVLQaaDqfYUMsLN4ujuBbj3eySoTDGk9htTRq1uD6qhjw9foPSTSfJFGnePZxWu3HJURGTvnUHfT5CmqCj8V",
  "key16": "2iB5JjgFgFEvH6WYg87ioZ3w11y61xy69iMeqApUaun3K6ZtFfhAmfeGVkcPqdhGz4MhJatnWZKu1c9Z9vz1FtPJ",
  "key17": "3td8Gk4H1hEwZ5ENUmCwtC8Mxigjbyx6mHjf9nS4jshfmZhoCt1njvDYT6XzYm9cNKyU6ZS9gwwTTqHGDTm6GCeM",
  "key18": "3drrMAsZ44rZ9oLmoDUDM1YdKSAPk9vWt75KMxvDHGYjjLRKVQbMx5DAgCi8Ze2YHDYo12WNDDjNpMrkqJGSypGM",
  "key19": "wpz9ehknbzpymhJSMEsdqbuEs36be17cv59hhu1sfeGaBWuK4QpnnzS1voUbi2Dr6bHRUnXi1bUjWuMxo9DoKQ8",
  "key20": "47rb6qpkanaeuYTCsTRi1ULUPb8FNstufHdxjHU8uvPxFi8wzhmiuXy1su2gkk1ZH5h7JcXeDwrjFAAgGF3T5e2p",
  "key21": "mx9Fh4HLAWxkWhefpZ7MHUJGquchGYF7iqJZppYirLu9haZJ5NXTSYmCYe2BT9YFa5KujGfJjXHa3KejCzdBBca",
  "key22": "3JNGBZi2ojAf41RyJBDXYBZNH8JGc2tSThvHnP5Fh8WRsMYQWbEW2CEJYWv3nMcWvvTi5RHLecUtd2gzjnzuMQ7D",
  "key23": "2rSETzVyxAofuw7HaUSsa3NUZ32L455qAZh71j5zt6uH8oZ3TiLjPxWs5MR9AwjZR5KLhyCsWVXfB2EXFD2RYLkG",
  "key24": "5VRCdfjaPRJx8rdcR5ZQkFFCXSjJ213w91o4S5svwUpXHz6o6jQZfJAWDcjnxCfQixaBQJv67fMVF1rRKQJTx2sY",
  "key25": "ipMR9MkkpSK9WxUvJXw56cuHTRH4diCNMCunohyz9ADK35gE4uMyxDfTroywhcpXp8ct2gY6rqK69Whqo4b7Bno",
  "key26": "4AwY7wBAeiPNdua1JuaHG2b58LqmyrRPBByz7wfYerfS9tRrg8itiJzoBb7cF8ChFor7nJXX1Mi9aJ6hQKzbpcFX",
  "key27": "ryTvuisvAkFJZi4cFhYrVKdLrei7L1wLaxMCxhBTfm3DSdqoZkjQ5ZuDeWrx8EoBGuxiN48BH2Twq7arGc2w1T1",
  "key28": "4HwV2aXVDpasQn8j9fH53yWeraYeDcYXezzdjDPBkw8FpKsDBhZdB5xCvNBziqdYenB5AyHYHNLRPmbSJrT84XQh",
  "key29": "aeUcREZQpRSVgie6rSgftdk5yuyi7NLjvuRJoVEeiDCZaiou2BPkQ8bAbeXNx6hyK8VeJNFfBeCjwWM84Tdqa86",
  "key30": "3JpGQENtnADVJjPz1YNDxH22WPtVTxMLhSYUo9D9ioNcobgSd27VQZr7ZrGvcrBmJCGSuUcPS6MbFm39yQRXyPmN",
  "key31": "33tNUKA4wTgybGCYts69VTukXD3DJPbqvahj8RZYSF7W284qeePc5jKUfzVvabr6H4KtR65uP6PxSRTUMCsydJfW",
  "key32": "3X4FphAp8AFQsATE6nLuo2MLMADgnsqKTXzmM2rebLN8es7VitVsPAWUfNWVCTRkwz61hF683L5qcKaDxq8fozB4",
  "key33": "66PCwhAyunmHXMRebpZ9A6B8BhhQAn821EVnrN9wMNFKYsxRH3c9uV5m448TXHRwX3B2xCLEDeBW3Sce1ubeeXcx",
  "key34": "55qNkJeFWy6SWEdkqY6VA3QbfGasjkk41r4Y7Bn2REUGYt7zaUXmYbsFNJPLs54ZS9QEWg8CQ5mWVsJTF5KP3F7f",
  "key35": "2mFRXmHs5B9wdDXUKVsj9ZZz2UamWYpqqhHKhC8u6ryQ55761D6QcZxHP3Y7FZFmHaPuC1rZ1p4HDZu1D5a5LYLu",
  "key36": "EfcDA1M79HzcoU9Vkn5kDwA5EQcCVtR9DTFnmGfpgiB7e3QZeRYQihwbWNf3ZCSa3jAz3Zoy7Kinx59QD7msk1M",
  "key37": "4k7wbz1nrS9W1UiY5aXki5WDSk4b2xJ8DszCei6ogatSFx73k2h9fvjGAiGQVEgEJ7Tkrumj3Fr8cE6An3UKWGWw",
  "key38": "3DfW57oDpJAvhKgGS6BFXfSQegoFjYtu1ak5UVPVY4RmRDra5iRHXD9w6TvJbYtnkdSfWGUxer6BsX6bWwJ7BZkx",
  "key39": "5zf4KPxax5b69H4LmVx4aS35kSDcJrZ9Wcmc7JJgL2yBEAiXSN15NCMnBTiD1cLv2eibpx3yopKVLh1RghrL9cLd",
  "key40": "XFdW7CVL3NegdJoGDzmGiStQ14y2f2Ukq3be8XHp14v1Pk7dEvLBnruNi9xRbQ1S6amjdyatYDkHzthtUyYiZkz",
  "key41": "5xomL1tDUEvsy2CNxpM3LjbAvdQLRZZUjZB9Yy5AHhiaiwc6x4o1Q526G3meeQtFvNvLvp4yy7gs5gK2eARk3qjn",
  "key42": "2EWgG2YMAEQstaeRrCU9HJNufiYPXUEVeyr6ACuktx21DDZVZGPWXk19PEX5o8BXk7q6esrtvchpwi5rD8U5Ng9v",
  "key43": "5P8UyWYUK68adorTuH5BiLmTnbKPHuXzc39PES1W3KkE4cE45BqrWUmFNcT1cGq2Fq7ca72enWHmea5xkH6UJgdp",
  "key44": "3AM9WY2JtRLJFFd61sNjc4tuXMFeXKcS7vbn9JbJL4uZTgZzjkSL5BjFqwmygg8V1J39sSmf2uiprTTKGa2RJT9M",
  "key45": "2kvBxu2t4uGrcpUXQh4wRaKXijx6tjx4nuscmooaf5B9pk2TX4FECHPEFUZYHhMLgx9sio88AJE7jfpE2ZXKMGdw",
  "key46": "4SAx3Huag5sc9aHoprMbuPXcdGYJFaxXS53WepL6T6Um1DrCVt5VnwxK15QRegvm5SqdUZavust7QxdhbKW19Hhz",
  "key47": "4124r9tVePjxX5DGBTqWNv9NUpeDw5N77VCnQgJ3rUo8ieKZPXsNB8SnEiRer49jkieXggDyNWFvbjMuQBEK89gg",
  "key48": "3WX7eKXEBuaSncuvCRozxmF23epQLmxqdrX6pHJ8YbSsdn9Qtm8kPs7VSiXxQEWKk4wKrzyrd3ix1AB9tKyhC7H8"
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
