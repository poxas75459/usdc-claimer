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
    "o6EU1cw8BpBHaU5Y7qZmqwFoWnrnRj88514dYBF6Uou3QqdzJ1aeMUAX44TsXapG1xCjhFRgPN44GyYaFwv2g6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dtdwssz9oVaQgGXdDJ76sFTNJ9pkRFP7UmnERJLR4HXGvrzSE5wmgk4z3aHueKPdg6uq55aFEYU3r2ehAo4F1MG",
  "key1": "XQu1VsRex7optRtSxwgZcuL4hHo6tCLK6W8aGTFwqEmECEaYmgyhkLnnA364KDD3shgxaVfpju3tV1b7inbcaKg",
  "key2": "3J7s92VvS84yyBqowMA8TpQ3eXoJ6t5HmiicwWMSR6DangQNUcRw2qedDJdZpHr4zfSmVXTVoBhVeq6ixJfbUmAh",
  "key3": "3HPLVUGApbWeZCMVLRBZHqMNyDeQ48JgU3w4WzJL6r5vQ4xhATfKfzNKSmCXqR5uGMKaVNXUCzxwtLH7LAyQLyuG",
  "key4": "2qVDMK8WCJZpV7HoMvn4BoXUUnehAyMrVLRPm8YfRmH5h36aHPaaBefTr81yhLKwdrdcUya5veu36UeDKaELk5E7",
  "key5": "3hF8qo8Jix5MBUpoeeqBsrpXZApcJrF44QUJ2oBn763voGYoU96CddxqzXGTNfk9US5ULw9ELZprKGs1KFtFsryZ",
  "key6": "5s5R4KyX8JDCV9LAq8BS18m6WJ7ubtKju6mgceZdTwy5DczpmnypxyZTDFjcAi1micKV8LCiCgSSZiXQSBJfz34s",
  "key7": "4JDv1Y7741dC3Sgoi3hgy2bEXfDnKoYPWhpDoHSMKMjjboLtGQcH7X1yJAMLEuo2edjiQce1DB3oUWUKS8A4FdJ4",
  "key8": "21wvoMFATyXQok8XodCTDQMHfquY3FfQTkyVKsoJofPDhsdSEu7hWNDygBFWwTgfn6gLZAfus7yh5wPjWNwUYa4g",
  "key9": "2ZkmoP8DZULZbND12urf4ofnR1Y5vyS1kWwiG1Vqj6t4zLeX3UPkpXJ1dmoqSBLJR2W9ELA8mpPFjJmnBJL9fCS6",
  "key10": "23qHMp5c4DT9rwkYCqevuAG7CisZD68SbSFLkhQjRq833CvYwTFMgvz44kthgd49Zp4YApHDL2fedaMW6ZpNvGRH",
  "key11": "26x3Kmwg1LQ7K43p3ydQWJyeUGSMhboBBN1VHZJcux17SpxUCwWydoZx737oCnPQiMmB8DaqF8HMnAvMa4isJFaM",
  "key12": "4wE68Ed1SQj1mZ8bwqvhGgQWyQpwNpjdzufDsCkWw6mgvqkqWr3gShn65sZ8dYfcqST1RJufFMZu4kkznFY5F7wT",
  "key13": "3PDwZwGCmHetvkgguv2EH5fzwFV6NrDQQ658uaAdw23nFJeQf8fksCmew9eHupHuvfghhK1o4BLFjJv4VVXVH2Re",
  "key14": "2v2bUr79KJCi94aYq3bXHN7SUZfL6phG2BhvoHP63ydTZrcjpUjwYci6QdXnLdVKem41Z89b9ghYpwzEursb3sTz",
  "key15": "gS5burD5wcxpb7d9j3KqTwm4ZB8h9yzdAPQATbw4XZ177v7jVRQiDH9wzaTxCRDu2dpL9JbWQqJeFqYKax6eax2",
  "key16": "2GSojabbJVvYFg2QrchzJaurWb3WJjzRYiYNMDfuPQf4t1vkXJs8G1MmnCqsoyqoRvdtBe69i36xhvNwfUe62qmw",
  "key17": "5H5tvKnERYSqznDp2FTXcUBLgiMMLBve2Njps5sYqLc8DJ3mfHxMnGR1Shr2LU7UM2RXy5yXsGc8ThYuoaRZDQaN",
  "key18": "52NnHp4FfRgCq6Euq6RtXHPBCheJKHUfBEmUAHZbMa7Ldm3gzbiaBZ98Pt8FBhAuRV6xKyNyTh1uuaZebmGqXxiZ",
  "key19": "5cN1jfMdKnRwuVxV234DgD4Wobk9nq3fkchfWcCaXKsBKXjbb1stRaBdwRyPkd3B95cmNK3G78WWQm7TshRRWSXa",
  "key20": "3JB8fmiA2b5wRZAMM6bpRvZs9wAK2CjnWLpmwtXXPUsFsw1Hs8hGX95ATnZB4UtVmUAbDPjjbowDu3zGtWuSadYX",
  "key21": "58sxkCXjkq7uWscLV8Tw83eymaWMjqDrArpwn3ujrLdLrf8n3ceVgyuph1E8ZJMoBS3sqs2FA83hu4SrvbZAN447",
  "key22": "2hkPjzSD743yeC6sw1VkmtM3wbj4h2pTPwQymYE2dN5KJdFxZ13tcA2Hk5h3BWB4jndbzk6uQvwGXqnb1Vk46ccW",
  "key23": "2DFUsUNMT3gW2NeDfAfxUxjmttApSL7Djv9AsmmNTSwvF4rWnuEJaa4KSfjnhM4rq5KtHqezWdM2TcDpss3qofHX",
  "key24": "569qdfVwSAjPSQaehjkVdseVLwBEfYVmy8moUtdufpZvGDqqXPwtx6y1i1UAfDUsTpJ6NAdsPxDtj9s7H7Vv1bwg",
  "key25": "3yurLCxA2vyZ36qkUp9v7adjp8QkXkojxPoMxrtQ1yU4ZK81GDWtXv1dnFejLAQAsBnRDxHoaCBpPHgLnxZ9vUxA",
  "key26": "5EP1cKjUpLmwTPWrCgNZTjmEkAx9ofqMoRsUU5oL6d7m2qhKD7YDADtT9gpLVc5Lfpxn1pDDbLgg5bGUCjzhWhiu",
  "key27": "3hGWtimQvtpPkjou7HydsLTNNFqeYCEHVZ5V7XU8GFZ1gZZbqpoMob72pqPBbz9zdVVvt12uvw1xwxNXXVoBvyUz",
  "key28": "5SSxaezRzymYKCkW594Jy2xKgEraJznZi2q5Rmhd8DrL7RYPisUoY5kDFi9y12HUdE8M167QFz4GmSbP9Y3xLJwt",
  "key29": "36d9C8sE2snqj7kGeC5oN3t1BoBNeCcC6uS4veEHSS8UHAdvp4q6frNn9ybn1mqDGDLBHzTMyqjBxaFA5WTZouAc",
  "key30": "2zoTNMj3MA1WXj1NsrmAc4pv5YArs3b9NTV63mJHFRVKAwREod6V9SN1YKQftw9bfFRF5rsSWqepWQdFE7RZ1h97",
  "key31": "3B4TXnDecUfHPjFA9XrcpDhYwPXi8Cn8spsJmPQb6cFenTkxC1qrjxbWVTGNqVE5rxGHUnRYQrinVNMNJp6Mih2V",
  "key32": "58cBnfcVSup49yCFVkunbWHWY4KjUwG8Geayn9gBjpZHE57VbxCCyjdanHKt2o4Az5F6AUBKUhxdfqnbVRnERcLW",
  "key33": "jUHD6VK1YqnXBUT7hKwRappPCvPyPh3oNNuoxQS1g3z1gLXETLvhwLsiRGWFL5kGLEgPBGrkamNLi5tMSYTpoZP",
  "key34": "3HMiexHFqHsWK2oE9F92F5sFZ8Et92nSgvu3GLxrF15EqZJbEkLSjvo4JtB4Vc53wMMFCjqpyptihSKukYEF9uoe",
  "key35": "4ATXSQtRJQwMPoxWDmLzZ3C2egWyGj5zcFYKnUXy3a4JF8ffbjYWNaFvn82yqbWBNrgsv8xZqt2tHsnv9Ce8XHCT",
  "key36": "5xJU2g2tzGYrL8HGEjJRop7gmZMDkA7xvL9GMxicXuQdDHQNshQ2aUSfh39mddLWNT7vha1RKU4YrUkMGV157ZB9",
  "key37": "3QEyVUYsa59Mco2iQpcyCVnWHgjcN2k2QwQ3kUvtHaVQLVqGRUc2AaFRYGTJmBB4619AuXx2cdwzUY8M8bsnUeXK",
  "key38": "4qxwvqZmYF28wetfhjhVeHeMagSaho3zJAQZinAh9RQJEDtfTtTrUYHV1e9R3aXKuXi6NwARPFfj9fdWiJMKX1TQ",
  "key39": "5oFgvWjxGqZDgwELNZPXtPNzUagWLXaUsDVWDBPNbBtkksmmmQ8GX9zjaeQbRYG76EzfKVjZiev68Fb7PCEh7qiU",
  "key40": "3mHHUgbLqw7Rq2ZDHyLk3idVUhp2Nmpsw1AtipGiRCed7jmgfaVzn6cWrtLc2y8zYV2K8bBJLNDiroxZK8oBFVzU",
  "key41": "4f4FBEdzf73L3Vtjnujja8foDvNqsKWfYJb9NXcvzFXeB7bdvjp7cj35C18MbSEfnpYJLMH2CuJ17esRLce7YbQm"
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
