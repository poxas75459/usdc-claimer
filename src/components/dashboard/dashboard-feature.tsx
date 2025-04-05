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
    "3AbLb6XXQs5w6qD6BdACSF6po5qvqpCTtvtKXsNW8GGxmg9nPhnFmsxfMuh41aPWgRFoFVYkx81nNMtNubSZRvCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McpTkBtLGereBxoSkHwZX7WrBduvBthxioUkdu885s1K5moXT2dYfVi5A96wSLKxJkNyMLgf5fWP2DkPdJ13rHv",
  "key1": "4uNLu6eSV8NA2XjfBN62M2sKtor27DKTUDZzsb11g2HiiRAcpKdFatMVcypk4Eys3FMfGbaenKRXwyZ87S1YYysJ",
  "key2": "3o4JfZkPjGLzrxHiDAo8FZSKr1hRadjc7tRRG4dr3rr4bTKWvtPotcsAihfGfR3p59W6e628VbcNH4UdNdRRmUDA",
  "key3": "2Tha8tmhEmp8YnhdvYJS5VS6B97f2BLwibmVsGVe1HfPRSY7fxjZxm9SfyyXED8XjLSLECckWyXD4YvdaXLUjHie",
  "key4": "2kY6ztvgC2foEdc3T3ivxySrRTiqyByAkeTNTUxj6GP7kQ9GqASLD8yG5x7oGHbeQVQDqTgU6vt7pnyUDs9REL2p",
  "key5": "29RUL2mRYbn8n7P3ebVqXRioKHRnp6ABRvikwLkQe15DHjtKiUBLL6erJFVhsWhmWfsArQZkDChTWTGwUDaHHbEH",
  "key6": "49jbym9qypjNKMMZc6gcjQJ6XM56T8CtqztCs3i4Y43mF1c1cf8xyZ4tmc9SjEiirgsuBBXiBbgAYErg2jp9Rawh",
  "key7": "4pF9y5cHNU8tZTXVP34cX7kND1F5QiZtrvdoWbV9zrnCGHEZYSXdGgBCyJwHTc6aSVQv4W6usXu68eJQ7eLeqUqL",
  "key8": "cFBPp1btn1AjGU6gm4Jj4CXKGzK48P3NU64onYAnBjKuyqA4AmTDWq7kS2EcJc4hDbvd8wq7zbUPk3kAZRTbswi",
  "key9": "5BEkYsRkYt77AXcH6x8W4AUrWoMoFYqyZ387Z6scNayHAhEKU5b216mYdn6MPDrgT5DK6BYXdpdavEVsTehfTQK6",
  "key10": "dcLFJq2mMXrsWy8fGCwJSBAvULEmfLiF8t9mXg7uhwnkovx5eXbsMb9QKzs4o71ZcNnqkxJdpVVMUAxc4W5tDMT",
  "key11": "32kWqT1jT797bA9mJh39NzDMqi4bLEVgAFEtXg7aGZrEr2HHCTb1bid56rRMCNGegRum3E9q9ypay8vi7kiFCs5Z",
  "key12": "4QXStGfCSCbkvGEhfezuqX7qaV8ydYg48Hdd8w2oe4gb7jtMyn16MPxDm7t2Px5joKc5SwZbqFvXQGRSAYdcDSkW",
  "key13": "4nsJjqskZG2zc19s6j18SnBYaTr94d13fShep1B8Nof5aFw5auAvjGizN1mvwwxReW29EinGKQL8GAuWJZW53e8f",
  "key14": "46MkyhLCJkDTa7gLdJgbD4sdBw86CdonhXgCyiXwH3ncEdThbxXRpwcxhcTUWBcLvsdeEZKDwydWXD8e8afGve6J",
  "key15": "Bf3ZLRNGMnsiW5GUedXCjQzyFBf8C7ub8ZwRsZ1u6ndmxEn1GQoRNT5HYFbgwhnj63PGgZnWN7VCENoCfEwX8j1",
  "key16": "3NtEehtdxqcwHTPLNZP5B1FmNvaUStUeZKYJRpgnyHfZz15K34bCkxUYyeQfvgnixzz6E3199MssjAefoCmZUHsg",
  "key17": "2WqRPj4G5iMMtv21s2W7GX7aLXvYXDjsVSGk5zSVPCPbmGZPC8yxDuNKXLNLSKERUE5Uc5TGiNd9F2itXdArrjtb",
  "key18": "4quG4n6BApGN7afCWkVQ1jt3fFy8owy68QqrfEEDx6C8Xm2mF9v5SLb5zrKBX6gE9BYa2QshCQSWRfVbJNKhSQXC",
  "key19": "5vNG4Nm62mPVreNU57JVX9xpDbtWE9wsbCffAvRPZRoCUSuGUtjChoHD8E3jnrgPXNzb1tk84EVBgfwMCcFSoq36",
  "key20": "4YoNzVwgEXveKxjtXd2nGLdodQ1qirm4jPQpwBHZsciiTmj18ALJkzYFz9T5Yr4LMvEabFH5jT5BzzMXTVi4p9U7",
  "key21": "5sy1sGkpiefe3WRkb6YY6dWvn8esvrSCcmZEDLhAuM7921yFFhJL1a7ZSYzNj22x5QA6ELP8GtCy1nMdkMWDE8AG",
  "key22": "vZWYpvaiJDgMgpB6i4KuK7s54YxEfEZuwaWgtmrXLeFD51oKYBKCbu48Fbawn3kGDfcpHdPArVfeSSkoC5wYEGf",
  "key23": "5gfCtVbvnjmKJ74Zqyt6c3hvUiJH3Nu5uCNXpMY2RQK99ap8cQbNTLGo8QX5BEy6eq9MKhZx44VfDu48BTJUEdzC",
  "key24": "5N1iLPfaMBALjXqDMkCjSBJQZt2b178Q3Utstxin2eyWPebwyS654V9m7C1sDou4JsA9AHwFBpV3ErPh3zHcutx9",
  "key25": "5W2uJUnZNU6xH1gGcpCxRevkxiMYYvWFT4ydWjXUPkWYBbqykNvJnDmF3cWtomxLrekqfdW7Ux7xANP4eASoDKb3"
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
