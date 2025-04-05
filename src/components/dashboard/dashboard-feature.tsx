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
    "2MfUXmqpj96nUsbtmhVnZ6G17TAxgNkHxedr55bJP2oNhteUPnGtQiPx5f4VveDRqBaBZKNoiCH8XdS5tRnXkRh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miWYvs2PWmxKFdYpnFQ5S61f7e9FTFJd6dLexcRyorevgrr3QQEEnTkq5kDfoRNgJFjfcHpr794wCf97yZniKpv",
  "key1": "idjdzXYqq9uARiMx8aAEAYkoxCDcgGYXgTjT71dWiwn1Sy6jsJSxCi1Ygcr8FSn9K2xzXfzhVmpNdTYgSevkWUi",
  "key2": "KjNfb6vH6u9rZc7JmY7rdGzruZkXHR8taT6rK5c19mBvNHVTAQ4YPgsRyetSLSkJWJaCZmBV8FBMBbbA7dFgdZj",
  "key3": "2TvQtzxFHeWn4AaCDgqTfciSVq1PC4FG9KjbwDvm7VB2HSjgdEy5V8W1DeoZy3oeogQNPdxVn7Qo7kHrRJdYaVQL",
  "key4": "2V1JRZcYMw1hcY7p7N2X34PQbiqWKDjmm2qm53KMgDWHiFHetkDG9e9oU8fayCtH7wCxDoZNJ2dZpzSP2oah5MC8",
  "key5": "4jz4g8dBmCuxs2YLSRvi4fvNtZdWMn3Yc3dKenmQQP5HjSh4puZMad116sCfg127yMcpDVdpwz9Sp3B6gadCjS8E",
  "key6": "3JiNywfZUtzMff7xfCQ4YnGQxdUdbugNpKEy2ybsD7iJpZo7jRhWzkmQuLg4oWj7MRymud6nb6cQzqq3X74EWrcg",
  "key7": "4SUaRv6ABNgKm2PRJ5KhFvDvCy2Hc24Cyo613jUJsjFth959row28nwxBhEJzq4SS8Y7FR5nzRiK5qfAwb7WSqLi",
  "key8": "2kMc5Y52ec7fbwJEBWcy2qPJTzLgW3qbYB6F1mP776vYuvvGMXP3b6yaNqBhWfaaZX32sFk7sMAw7td2NTi8jghM",
  "key9": "59atB6JuQXQ6ucE788vQeccXP18put4RUbpwojuNYYgfnyi3Da5qAiFFWSP2THgZ5KLDTLkG311MwFU2XABR9tQa",
  "key10": "2aRepAvanKQCK7Hzv1z2tuNDoEcgVAYqBrhz6GwVgUmXhdh4Ls9kjLoLxKnAgCiGQN2FNcj66j5jJ9BN8vwfo7rY",
  "key11": "5A3ttN2F31kcFrakNSGsrJ6sUxa6EWwkgoUc26hUpu7E5AmwMtAtdfDWVsdY2QRFBBFbyQG3JNG97qLxkckjeJRu",
  "key12": "3dcWh6GG4rGmi6yQvuD4LepJD21N5oXTCE2jbrevLpoBJ5pP5A5wmNYzXNUKcpiw5zNf3z1CVq5jy5d4AF4XrYby",
  "key13": "D6SDKYiWfTyJMuV1E74Gb4sZusKxx54Wxxwo7ReAr419RKjKuVUetamWmjdGHs8Exoyr1HNic8EkQvgA37A1u1r",
  "key14": "3F1LhmoxW9p7rqQtPY6ggdFjPedhTfGJx3fVJGQQPGKprXEdkRJY7zpVhCrST3YuaYQix98BUdq1VUqAqiuXySV9",
  "key15": "4SYqpqVp9oMT5wXV3HHbdKBhR3H667vzYCJpCW97Gk8tL2uz2GjG2pjkif3B4Raqjox6fh4cohRgFp4bH5tAN4w4",
  "key16": "25Wshz2DY11qTvG46DkQMAjdgq6vFUFEMTW16fs7953haQp1zGiBTY7DGLWVq7B5fZBfuWEYqBKFqUE2yPj7g6dU",
  "key17": "3JRNm2SNfVTMzKm8KfYgr7JpvvyZEfe58oS12zWLdCKWUed9DmWtHAdDAfkuKDmJv8BPjnCvsqae54opUz8bD8Nj",
  "key18": "55TNmM9AjpD6RUAsH7Kf51zcNYUKgU5nYH5shdymRZRQ3fdjHDSMWLeky9kbXE4NLG1JxHFYTp1ApgQsuBKg1sHa",
  "key19": "4M2gY8CmG9mBxW4rJi8SoLg4bCS4QHTjMqydqZSwKdXBNEC4XpBbRQwZQEXXnupXiJKQcRUKiCZ9WxKFbg6DJN87",
  "key20": "2nU784SNW2H9aUQTg3gyHhHdbCbpuytmaYL9wW7nWdurKb8LX7BE2w2z6EB5q2auCu8dmt78pyLeddcCDcU9P17C",
  "key21": "5FPVa1UpGxDMihVMeFdV37jxsyTyZxbLzDsa7f7gDZh4Vyv1yAbtuuTgMgUDaUSodioQ3u8HvHtuWXLmgUJWTe4b",
  "key22": "2tLERKCtLZfPLUgLz9NJiq8K1XQVc5tznYB9sPeEoP6nh6RSwEJMJR9GjnrxG51FSwUiJZY2AyMjLutATKUBMR3m",
  "key23": "28sWwfsbFCuVjtQEPmNb7zjkHhAV7v5YUzJzsczn11BNqswNELmktG3hSQ2GymUaECnUXC2THPP3hducjkfpuDoN",
  "key24": "ijRdRVD7AWEGsMU3suSdWBpedF1Jf27GJM3krm1NHYkKWoKdVK8WFyvcYGne5DhFXNggQ79tevDELY29WujWwoG"
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
