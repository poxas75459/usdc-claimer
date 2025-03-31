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
    "4vxtn35QtBMvvfLgVpcp3j1JSZcaqhh9bFKxcsP9H7CoNMriNv42JNDx5LwNphqxrXzBKnSm7bLBo9SRG66ZNmgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63S56ZLmgQcjgbkfw6q37VaM9p3S4NG6jrSRGwNTQLxPsMNRwRzQMHHSpQikkreQ4Jci1NNvNNUJEMaMNKDJfoeT",
  "key1": "59RBTXgsZMi4R8QPWKurUtvKjGSe4DFPx6zkfPFBDqVu6acoNGuQwMSaWUBZLCUV4yTXLphtundk2S99TKz6x5Kf",
  "key2": "3eQ2Jc5Sem7ZetMLjWib7oyDC2LxmRdc2XhSZQ3iXvzuUUQGvyt5YChjjK6DYuSWuj3YucdengccU5MX2wa6oT1n",
  "key3": "52oj1bxAGTqYoXKS3Qu3r6PbvCcksN6Kh9r2UAUM6JtgfX4fqZvvBoDXy1261fjQBqV7gnJ5u9Q9xpw2stDjqXJ1",
  "key4": "3yds5eJKnwGA4Fx6GPdSDf79zJpHocsRkBqbmzdQsMgrbBSv2ER9iMKzeQw37hsups9NzmpfF21CusY2ANumBbca",
  "key5": "23DMJ7nYKD5qrahgCCdypEhvAgituSKD5jEmkp8HEXSZS6cjqgk6G995J61LK1Wf8hsmLaeSo1d6WmcLyQzmEFFE",
  "key6": "5UXj2PimoUKfmQCunaceG6otG8n9STo6DyNU3qC2ZhbnAfJZJbNAaLHMssHkBFaDgAEz6faCbpVMtcHzVNQTFdnZ",
  "key7": "328YiaBYpoAXHJSUQQPKbVwwjvkxHyq9X32fFjYAn2mcnJDn5C3jSY8EZopp8VBiULoZ55k1UzXHcKed1W3SxydY",
  "key8": "RDwG3xyjAK4EHvCqfs8AXJMYwQZ7zRTWfycN8XniyPk5tk1YwvRZCGkiLcjztuPek5eVxGT5PgGAMWbq1fYL7KT",
  "key9": "fF72RTMdhNoDAsvx1MnA5dm9NUwSCBLbd2nYhNCYftCLanuNM2coWjQAAYgLKyoxZTg14gicxRzNDeTuCRJhieA",
  "key10": "2RKRVwpswMbwbXqP3cKu613pvAsMkWFZruvZXx96K7vbrQoitBjMi3F9suyaGThwTU17SLZaBaBHm1mW7zz9svjy",
  "key11": "3p6wryhqVMQRYx8nKqYLt8omV9vK2SAHoQqRAB8eL4FfB1aAWq3Mx1CTRExGSHFT4A34oxQ9LFfqhWg5vAg56Epv",
  "key12": "3sMR3DRVM8DSgqeqnP6JYbehpK8pTTzeLMihYR6EMaJ3UpSkRqiduWEbEzDjbyUn9SZJ7gyPLgX316gRReJiYfrS",
  "key13": "4CTDcRHPzTjRwULEXDLpmkohtMrf6nSnDCCy6VNZ78Qkn5d9Msrr6YnRFpdCnan9Lqe5N6pjbbW7dWHyCfYZqs7i",
  "key14": "4S21vpaG9WtMdZyKmQqaXkvhj41HZekUQ69jV4JDKXcMtetRM4yJFikg3Gn69krgtaY4xLTojspDDH7Rv79j8Zaq",
  "key15": "CDmMD3nZH5jUSd6GkuUXrV5MQd4LU5wAivUHZz686D2D73EpS9TdDNNup8u7TZFJV4zP5n5zDkHnLLUH5BAHe9p",
  "key16": "2eXe8Fi2edwycBtRfDsC9VaQpBES4FPjJ72e2xnKHn5nTDKxE2Tf6t1cMz5rLSuwp5LhrxXXaMNrcfkbC4kW6DJJ",
  "key17": "4ufMBA4sNTLG1Ey7LmbdNumCFMGsJqaPe7XK2Sy4DH1EVsmLdbqcE4pCZBXdWnRb2CTUeoNrhTP15bZLPgewgCMC",
  "key18": "2SMBwXpMnMXicCK4D2ybcw7eYQS8cYXJZ5gvLP7Kr2RQby2XPi5H7XrrudMAitZHma2u9MUjHwJspCMAaN4Din8w",
  "key19": "25RvLR4DYjPfAVXgQeCzYAmJrnbf1oLFWf6NKhJ6v9vHtnPRbHjzCkCWHyadcJ2rPXt5Aim1Vy7WXGiF9ZWoUzpy",
  "key20": "4SAKxhpuGeWw7CbMhfgqodkJy2DMTMB4ESS1acH1GtRjYCAv1fhSY4dZkDR9Y5W5gbG84r6WC3aPmtPAz3hN2Xwp",
  "key21": "4MGr4DTVe8DWBFk5RWczjUGBrvvjKxCYc81QsrfbFNsVSP6FLbG4SGEusFS6SYx6aaCJnucvQYWV5nqP8aDbV19W",
  "key22": "3JJhAYGgW1syn9BM67aEQyxeGE36ADPQuRFm8vcboCoQRRNwRH6wUD81fFRZNGoF9gD2qTXAi4n6WnjgDrHEkQug",
  "key23": "2iii9eiR9nQ6Ae9QnpTZxRMnpRiZGaanzyrTYjTUhTkokDG5NBMkg6JNyLo9nw9Lt9NLDxvNqssT5GVNMNG3siz6",
  "key24": "3enVF6Tjm3TnpaaRJkNbKZj6cXKBuPwXcWQMwCvT75JpEbWKjbCHQFf61keir2ZLG8dTNJbTo9hXCLNN3JvSX8ZX",
  "key25": "2G9napVkA7fhDiZGuoF4vhperZMJ7b7SHTzK9aaX7jDGmTQVA9jZF2L2x8ZCmt5aRMjPgviAiXrqtLPHifyZjRNP",
  "key26": "qHyKN8z1WqSAf1damRz7t11styyjacSuLWZDAekwkWfWd2QeUWxtJo3cBBsCgLL1mADTpimJMiDL1bt3HEtKynh",
  "key27": "41r8T9A6pz56z2rsvXUamZpdnZyYM86tubTbyZ513Aqd4djuHFntEaCmaY7R7cU4Fa15eXUcWwNAQVPckW6xKZ14",
  "key28": "3nqrvc6BH1FADG99N9S1FQwNvQFQ7mvkvoHa6U3Mz5K2LEJ9NkP8RJcrh753kCxrzWKSF5nGUx8MDZhQrBQP5gcH",
  "key29": "3j6cqWSZFeevjxFLhLvWur9uxkf3NefuUCtjywwL1Pk7oGix7SnKKkbPksrvuvUsszZdLWAVfoKWCSdjrtXsUwdv",
  "key30": "5gWDz2fUfSSZv8yMnSY53iCNLMXpGjUZ5diVK6zwfBEsMAE8rM7sc9yrisBjDJM2xkKyN1DimS7utfLThY89rE6j",
  "key31": "4LQWMtAMeggLi8GxQsJT1dtdWbYW43iWoqjp5ibqdDFCdqGH5vpaEBCNBMdQTu1Pexc8sbmHe9ujdNYuCt9V3KUW",
  "key32": "2HRCfMqKU3UrDw9Fpq4KKt2ZYFJ713nmAGSK6oD3GLpRfAuNnuo9gJLKvLxK8iP9jJmhRN7AjdThagpQfbV25an1",
  "key33": "4CY7rU83RZLLYi2nihtbD3LLKvCApCPiKdS83S8sSEJH4SERidq8efHA6RPZLrT2mnZjqvGvvDijCjMiuMZ8aDSE",
  "key34": "hyWNgLAwf51SYgo7AWGThrdKQKpRLJuUwGvm1gSogyj1gXtuuzzmHV8Y84frApPnug5qWPdj4mvWEtfoQr9Mfw3",
  "key35": "4sHhgYJPCTXrQC2r2joxdcxFxHWnMUUjYJ1bxgXGQvKv3hMmMhCNQsY1UHLizrap7nfXJZ5TGZkn2C3GBJ5XBEJg",
  "key36": "5imFyLqVwDfFVC33prwFnNhxuz9h5Zzt3yo69EGBpVJHecmp6hgd3yTdDjM57vcdyes7AFxpAJLW8DXZ2pAAaQAk",
  "key37": "c2CUwB6XW2K9dvx2QownQJQ8Fgsf4uzPUZg5YytfSKMP4K9szSfM5eVvC9mqTxaR31R1hbNbPoyw7ecbo1KAzvK",
  "key38": "4mRhbfdYAFuwMUqoRS6z6x2uo2vSe2XzkHzsonmY4S5Jut5ppW2fXR4FHNjcPcPTntRGv7wjMqA8Uos7ayUBqi1W",
  "key39": "5TbJfe36tmnDi7MbXTLSrS9YgMUYqoD3h9nnbnvR2JocYaSEuLTCCfghe7BKsoRfFrNbWZcViWdZAvxvJ31BhBdb",
  "key40": "A6PmrJsMaYh76F6ueRhHnwBPFDJf8buog3oT7VfVp4LeErdWriBAfSj1eKonmSS2zVPXHb9g8ELXCznGMGSjHgS",
  "key41": "3GPKaJU4cza2QKX6UowVhmedZYLCCv9pWh3HyLDAKTUn48UsTBEsRctqYPWA4yM8AgFDcRUk1ZeVrw4iENpuMERU",
  "key42": "rQ7rXzBh9TsTsLqfcCLGbhQq1BJCERpgDig2y3cnyXStNMw5mX9W5c7PkZ2q2XNYo7xHvBghfagAyB2EqpK9bLK",
  "key43": "2io7mQj6uUxT8JYYu67TpydARPrmfgpyFvA4gjF5s5JqwcPURQ6AahuRgR9zkbQp42iagv3SGUgH4o2GwkgBiyEa",
  "key44": "5d5QnKhEBogNe4Tj3ThxMJyMpgeCzf5X2WKJ4rz7Sgvp1PkaLZSYfFjwWTNM8oJFJ3NH5zmYn43MyhDXsjAiRiAo"
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
