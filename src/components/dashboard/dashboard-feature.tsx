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
    "5uw5wFvdV3P2wx2FVn4AmRtd9XN3wi49ZBLdii8UvcMMA189L6EjExVem7YhYTyu3rW5xT5cCkci618VMydwjYK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q9xvU6jrPj8FULJ36VPuPaQwyDPgQRPxcr1WgLyqT1dJY3P2JNihBtVeFB3TZTwxBion1CLoeGiacDWJh8BDZs6",
  "key1": "3538WF74BPCQKctjr8TmzPjUZRjbBAsyKuUsoDjENu5YEUJawSuJyRtUmJbPdHD98qMDktmqhcX8Nm46PCGP3MFG",
  "key2": "ShjUJQsPJCrJXeofp3WhGgZCgRnVwTEmFmphyUaSLEL6SkWrgT1LM6Nf9iog1WYsbCsgck2ub6JRNxLRo2Qwhtr",
  "key3": "5G1LpWk1rR8QFkH2QbwNSzVhpZubDGDXz3GMbSpX3yjA8SwxQwsZ5rCqKwzWx3h3eQEwErCwSKf5XYFVEufyj5hf",
  "key4": "wJ184nSzMrKaquAM1ycLgBofqtJBfi2C9bPBv2WWGv3K1ZrMqmHjTC15iPxHcxPy1fVVX4Rh4cLb1Srj5Uv1auh",
  "key5": "2vs1kd33H1hzAFQDeytNgGpHmjMbde8UdxTzqA2psQob5Qtt72RbHgj961TdAT5kU1hG81EB1ftawn1TA8wGaRv6",
  "key6": "4N5eGqBXciBCGteQFPpptv5fWZ8JeGkqH66SSTpjmCaXEvVqLpVqNRERPXQyBVpyTZSBzQ4sXvVz1Gat5JfV95aX",
  "key7": "2gDsmdxz2A3wBAEAi5n69uCnqnST3nqHPu22CeAx5QxKLfZrSvczNptvxz3X2YGJ6uWMvRR4Zsy2XnVThRm8pZu5",
  "key8": "2E12oH1TzAv1GQzbVx7REhecmY5RX6avXME3YRxJv5mjRR9B9bDMMWraN6uQNNKsFjiv43CLdHvZokQ1dCBDDWP8",
  "key9": "2RURo8jpmcCXxaT33dKBFmh8j9YrBfbdEzVbpwXGccnAuWATEhyEtagB2cMi4B1nyU2rX51n7jV6vBLvKikUmb4D",
  "key10": "4itWtvci1XYouRULeTMqCWwwomEKzbeyCqxKG1pu1MyYZi7BsLi4LJcWdoFn9X6aAMppyHN5jWLPGqDcKfYxSW7r",
  "key11": "65apQHEaD8hP2AiCB6KsmTcfTEsRjMVoPaLJvAH1aHhZMf6QvLkzrkwux4vNWmA3qdHYJKxnQcnDEB4dPaJwzabR",
  "key12": "2tpRMHhZ7itheuVtVvnvAeGYUGbUgk16JZJHEQtuF3MK9Udr6eDb7b4jTXPxg9uGM8NcZMv9wUCo45CUviCN78SE",
  "key13": "3pUYcaj7xQfDhuBW5ydK14ZQZ4nvdXniB1oeKtbKUeMu7wdSxpAHit84TYx1GohvFyntGaYFqCdUu7bPnYur8GEp",
  "key14": "3i7aXigfemQrjonWST8cZKq5o3LPsBHhB4QWpmTbuRb94aKwVRhcf4gbiXbQhLvHjafW455VsrTX9bahRPFb83Rd",
  "key15": "4ZR2Q92aeNiSa9x49Cwi2iPz89nH1cWoa7Vi1HRKYpsdvim4h3NMZzKNgUkD16R2FBTsQQ4Ud8Kk1DeiUsqMTRZC",
  "key16": "JweLVRGe98V2MKWefpvYWFj2EVrAmD7h2Wu1rWJkgb31hzdtZygEHiiXmcTCJT8R9ZkZWhbi6VD5KyxQGPYqc3B",
  "key17": "3cCDxWyvnhEC9tDgjXGQoWzDbX7TcVHca6pX5zQtBUNTUn1XafxMizThBdY1XsLhTCyPzmHiG9ydy5mtc6zijZoP",
  "key18": "2pJgUW6cq7nPEsMXd1UE5QJCeAby77WphzjR57A5h3FF1tv636YKnCoKeVZg9Snn1D1vLMcngXiZRakE7NDhqYHA",
  "key19": "5rMKpN2i2K2HzXfXjyEFnGXhxdYTsAjB8TTLMqsjfq4cURW2Qd8GknJXrb2YLZiDNixsb14JpAo1PMiwxYXAaeum",
  "key20": "2yXXc6pw5PteqyHY8NgD1nNPe3VRHuJTmpEBtwof3JjbvF4BCLqgWzCFVS8nN75BNp8o3B21Z7CceAFvmW11MvQU",
  "key21": "4Eo9Ufhmx4k4Ghtx8y9KkoMDinsdWRr9kT9TGTWHyQuEZiivxMne92QLj4SgcqNLagxxQC6sWzubGtWWimMyZidq",
  "key22": "3haRW36QVY9uvz45Gjp3DyxXjjQKFeJSLnSyr82B6zoRhyRnZGiUfa9rvM3zmLaGGNSDQubo6sbPLJ2TdAtYz7qT",
  "key23": "3Sxdi5v6XLd5wmHU24JbQ7hHRx4fnyEh2oyZg6tDyXHrb9irmKpWtCdsvuY9tcEGwW4KRqNFmCQGqAW4AUrF1WM8",
  "key24": "47K3CM99yqeCfgcyWF5cjwsBydFH5Eg6LTbemKFXwTUu1wJYX6GUj1U7wiBMaWseXg9eSvQSng7Ydca4MxcHN2jQ"
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
