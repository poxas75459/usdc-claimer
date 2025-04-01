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
    "5TKwZq22fzjZAYkzjQdQovQAS3pDXP2gQY5gDSqfDoTVn1mPhxtXPPKZhd8b2ZAxo18FtM14vB5UjSoBuwxSib7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C87VVn1JcVWK6UEAy4a7BbkCvfS6qnc3cGzQcxkWmwokQo8WFdnCFNHiwzezwyivfWFTRBLftJRjyqRRE2Wufex",
  "key1": "4YrNsYnTuJKvqWgJDYfuxeJPepMNAC5f967cDc8sTcogboozBeW8GzPkfwqLASXHRr8b5bKwR1AUs3KaaHYyRMDc",
  "key2": "3WkK3rYC1oAF5YQNg3uG38rVRU2sotVQFAMGDgFh2kNQDcP5VaYTAJtnxVgNGLbp883UmEnqTZasqn5UgcKYzeXQ",
  "key3": "4Yh1ybbgfvqJL5NE4XGLtZMPQmzbeKj5F3xFUwSFgta1RHzVoZHGMdY4WEm4heWH6YQq6UgtmgUWLdYxAh1GDZrb",
  "key4": "9mvLR1QNHdo8SfHGYsis4eSAvfNZB2KdWiZkXXazqPVDXeYioR4dLhLo7e8d4MoStcUAbftDLSZVi4y5k5ZDigy",
  "key5": "4iGdZH1tprv8yYE5HJAjATUhtoK1AD77LxPYkdu7zfJZScuDxV2aJeBBrpwQz8s4hKdUg6txFyKpA9xNyhgH6Auv",
  "key6": "5gbZTUng4tEEvoM4obKoWiFUtaoBjVJFg57Z5TxhPiXYS8AsHWQWAu8ehzdQb9mi7eduShMqUHCS2My7ZhEv9fHu",
  "key7": "5zuqnr6FEVYkMJHgh4sVCJ1P5NnDhPCmxpR8fR4gDiKTvRndWX1ydHr3taJJPgimcR3GTxYnvJn6YuACjzcS7erb",
  "key8": "YQR413dg3s69S8UW37k7C4zFQ18HswFf7GXUWNBxPaFwoVgSqKSMLXQUCfzFMXLwVrxJZ6cfYDwsFwdxBMUsch9",
  "key9": "2SYcDhFs265LGgt9HAFmj8BBpJKn7kxtRWYzuEvqzd7ZfgeZo8Tu6WRe5myLYNHyGZ5uUgdikH9k2HQcW6KiMwK",
  "key10": "2px6zpg3iiQmUQX3dHDhRFScWgkE9p3zdq8gTZED8SyZ9QN8EqVgQJLPjAD1xALguPydGwDN7q1tgAtM58oEb1qr",
  "key11": "41YEG1RsQHLDjaFdURV9JFqrEVnjBhdmePUiucAqB5czVev1af76ssq8GQ6ATyKkSuwF3nK1aPHAVtvC6M4bW2HA",
  "key12": "3U72XzWVuWMoWJGBuRnJJyEkbiVfACLCJy5sbw9dDUNzR15yuy8fq1KrjnAh2fk9m2n3fHc1yVz6Y8mpPN2Wm8KV",
  "key13": "3DTWYTc28VHeF6N5eG527UoU2RQ1BDGMLXnh4fJg79Son6W6LCSzpoR7bV2EjpbkzgQgFqxquUXAkBLq2sggTxoL",
  "key14": "4L7V5UKL44Wk5SonMmfsCPZGULK6Qu6j1LDdR9xBMNPs1ZqpjNdSDjJ83cHNvaMuEqXBmgUBs4Xw1AoCF1PNFYZh",
  "key15": "3QL3H4NNPEzyi968CsJTp3xKhEDmMGyBK2RuKjz28NPmG2uETzhd5LEvBVqisEBbKZ3ob1GzTM2tSjrhnxPnzxQq",
  "key16": "54VaG7Rza4tdrTC5in9Fs2nS8dXE4fH3VB3bhLW3rDQ8YKviu8G8m71SxEya8AvMuYMn26FDdd45ZEf7d3Gr6gUF",
  "key17": "4P9VKboJiQworcUnwNgs9iQvtv7okZ37rxok7WbNegL5uzbGepbkWg1NxxUd23RdH59UyMQDpo4qtYQyEnZSwgbZ",
  "key18": "dLdsF7XkB75qPQrGa27CviqMWUWuqJcEnJqSBH7ryrDek3QPrEkRteekK77xh8FgUjoEquYzWYVpFNsi3HRRY3C",
  "key19": "4DC5TQ3ZzeoADQcFS8SH2tzNyfePhJUYsYMB4hXvnH3GPUw7x6HbKMvFXB5gPK7vjHZyGKBdWiUnDYAchqMYNw9Z",
  "key20": "5qHz48xZb8d8wfbeXiCmkQYbQS7vhkMqXNCTrkUvLxD7M6edwD7dnx1R4GGR3S9VRnsCGZRA54EhBRcaqn79ZLwU",
  "key21": "3t96roY9nEsCzSDrnNxtW1MBRWbAG31DDcRAo9GbzAV3JbcCpXy3r9t8tMYzTxmmNn7p82h8wRrLB9GH5TXR2eUZ",
  "key22": "3eQKs964mrfrXPtec5AGHwDm3fLiBp6sKmsscUEP2sjkyzq7o4Djg1jxUaD9D7VTApxfB7wuURaNdUW5mpULc9zh",
  "key23": "2R4uLuHVybe6aM8jKnpp92uZEdEAFXfVRDPtM5a4r6PQLopyFDFU5X22haauufxR97RqQ7eVxjeZ8PEoG3KyEEo3",
  "key24": "f34WgAoy8sQCYwjkDYxYSyjq5eYpRz8Uo1uxxHQXmXhXkzMszL64KNyLakGY1nVRiWAQgb8jnRRdBBkoJRVkgG9",
  "key25": "5dzGZmd6PT9PTpXJbUYnHinv2VyspfY37DBA12C5FcdW2zKTUwfbHm7NYdezu6ds9tvteqcNrU1v6ePdz1iwRXXE",
  "key26": "5Y52sEkeVKuRd3nij7M7apzWKojCjp3V56ZTVngUSyBWJbwxcTagTk7DCrKcSX6UygQcnmb9Zbikgtd7aZ8Hgoro",
  "key27": "jEJUSYGv6f2ho8PzKq2eUvho5nMvBYCAjacL88767xruooJkFaek7kjxXKSHtpAXLK2AY8fGrwe1yKhgnUpyS1N",
  "key28": "4kA7GeXc7HXXctoSk5SQFGjLQj9gdhK1FiFJDZotpcBWenFQg4u3KiJEg4GXESN5wKyCBWsR9s53upFSvKnVHtbg",
  "key29": "59JYgzZL7wZNEF6TDiA3Fva1KDHKf9xC2Rk1zcPA9k4h8zknyUBgLeXmvvxYXSt3NCx8nMF86gaezVg7FydqcyYX",
  "key30": "5E3XAjdRjnnDfLAtYWhkHuPqWiw16ounzkrjPRahn6JiVrghvuZApCaSdTNN4KniWegzd6vtEJzgj6KAfW6dyoV6",
  "key31": "zpAW1mecxy9hjr2n9VQyXzCc2Rauo7a463Jj6DJZqTRXqPGA2MKZeJHBR9Usxiah1o6UDR5tVvXL4mxVVtAhLJv",
  "key32": "5YErg6teR5Wr9Jy1MWEsjJMkuLEJtrmrjZxiAPGQtQTURDfzfFmYTY6C88ondbQUWmnwvGYjFXzY1y7xUotubCGK",
  "key33": "5mx3WXhBSG1dqmP9vFDSjwCrEafa27q5tuB5djTg1ehD6oj1jXsoJaRQNP34j28Afda4BxT73DPQ8V38bJPg35h4",
  "key34": "uF8pmECeHGQgDGpkHo2AW5scg9ZsbYfmkDAPM5cgPicSCYNf6j2xqtm8QTzHxygLWd7tZHoh3hZeWb1dwLs99Cs",
  "key35": "5kdxy3SKLgtEB2Mfqs4vouMRQoUVWnvoQgfmyStkNBZQVk5czqzPC2rG9V4b4gyP6s8poi8M22SqQWPm8rgAgYeG",
  "key36": "jwTTfKa7bCMyawEHJvN3hw4AcA8fcwhrJ6imLomu1knPXjsYMKbvZ4AtyrxwSMJQ3mpu68EEntWGo5ArK3oXdSh",
  "key37": "2Gzh4qUWMDuhR6Thj3uAt7i41ZduSdUQEMyQy8rpHkzHZGrdnF7YzZsgw8smpsYQvPdSZn3JUvp1GJhWzvxX22iB",
  "key38": "3iMXmKFq6qFVhMubCKQshBTTs3wMdoGeLREvcrF7ZeTDbjqEQ5yuoVLrVRS8BWFaei7RnjE35J8P63wE21PaXJ9V",
  "key39": "3ZoqEPZiCGrhEHfKmQWHJmM8k8RAoyLKJjWtupHnYhUBW5nFX3YSdc7o5qEfj5PkDt5DTMuah6kQYqjYZKVGCYKZ",
  "key40": "5PNj5D4pkMLUctdBPaqZ7vDmBidRFwo7ysvGzVnmQcGzBH3Py5gFVhsPFRFwJGVRK5FujP5PkwHmTW7nikzjzESJ",
  "key41": "53a4sEXVHqfbkFcCSoiiagjs98avaF7fS1fB8fQN3Hd7FB5u6VSpNHy9xFbJTcGknDhUJ8FQRPU4LS6eMi3r8T4q",
  "key42": "DVm36hyL2LsmLMRRvhyLYYfHv2Xym9FoEQuD8P8zPCNRkGtqgCsqr7oUStugFUogVMNJm7AmBvgCcQFkeZD5h2R",
  "key43": "5qKB8YTT25b27XjXmQGze1niz6PXsAXbF6CyuytMH5Bc4VX5S897zREiJ76uhtNozuXeqBhfKGJmM7bgYifurbiC",
  "key44": "2cgHZZGLuLxLepadWUrVELWUjZQk5REAGxkJduntKbpotHdMDLCo4AzptUCrqZRpjErJRyK1u9Zpgq8Y5iqddapc",
  "key45": "53qMYrsTLcBt72ddX9xYi8Rew1WV5aediMVSS5EmAj1Q4dS6bmCzi14MEKsdgXu6fmFjyqPHsbKsiK6G9rwA3W1M",
  "key46": "3njzfSfh1xCgct2cRFchmsDLcd5cwzzHrm3vJzaGiivQWS6mYbHKxyjh87dLQjbJ995pmhgbMHy1x4YjKT5xG2mq",
  "key47": "2Fdm2rZYDFJNcpUX81imEJVXuF4JZpyi95QEEuaB6dnD3BVWGT7fLxDWqdbP1XWpfgS8ybYYwyXwWJ45MHLQQ9V",
  "key48": "4ZPMEZaCqbmdXRevv9o1MC1TKP4c8Joh8We4mWPb1nmGT5iMAoY8ur1KKZNX9Zk1WiNEU8NKEDjMv6utxETGMhbM",
  "key49": "XNx8n3T35iyRGXpKRABb4qQUrSiso9jZcova7jtriAV8QptMgdytL5mYB4p4Jts8M6GDkXkkyjU7yhL7BG28vvv"
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
