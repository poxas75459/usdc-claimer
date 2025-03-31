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
    "5pNNe2HdQKGuPagXBuVE8zi2vAoLr4Ap6dp1Uddu8oj64dh3i1i6yRgSAPH3brwKU9CFiM76ozHziMKzLeGcvpzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDpqdEg5988KSTiH53vJJCEZG75X5jdoBubxddxGQGef2RWDUewPxH9VZoBXwT3vAR7cVed7yLtXjvb5XGQBkh6",
  "key1": "4VsoiX1DkHztoz7mdfLWpLJNkSBi3LzcsWFQdAiV72aRDf9FguYJgKgd42Q3rGys5rDZv9Rr9NVpXnUQdvW8QtFk",
  "key2": "HepR24REx1M7MXJY9nSNxknPfcraWAWWrksKbY7dZiLF8bGrfQp3GE5U7MQqRxQA7eaNm5Fp9aWfrxps91pgbXM",
  "key3": "5AxPMtGwTmgSNBAMabVxPoeyMQsD2NHXmrJVuEgKMCifqZ13BBChnwM4zH7zthEuXMBXMLe9LWXF2qqHjfbgUjzT",
  "key4": "3R4No4MmHRv4WDV1zQsKuw2wuMYDsMevX7PskExsE2Q1LnaovckAzfMjMmJ9cuMGpvNkzFKf92ZCBtnA3jbTo6Vb",
  "key5": "3dcpzETnDoH3xWkGym9mJSPzyDsz2nbTegA9dGxqwdWRRD2TLGa9qwDUaQdhUnPdXV9pQ4m3WYHhHb2NK4F7h77s",
  "key6": "ts52JTb6aY1JdYJWvpMyCHXMaAok3VgtVP79v1S3Ki3gAAHzt4pXepmBiLaRZi6wqbALvHqqMKhQQQjhe7WinT3",
  "key7": "2Kc1FkJpNf8NunHQrsuDbBZ5boj7p6QdsRF7Ss6aJXEcyhrst8JT8aLy2sjhyfwbdhqKMhENmYngiNf7NUtSvRFj",
  "key8": "4MtFu21Vzg8H1iEZ6YwhuxmbAAZMJup8j7YyVmMdwV7WfBxAmr3Esm3zKLxVnTgvUdNwZiP9kmWC4Q5sLy3kCiT6",
  "key9": "2LzU975wL1Rj5ockQAT7QVi7Ho4HYiXtRQoSwx5PzqYHtAoRzUfzz3k3CggpvVt8pQytreQeoUWu23pU1pJAf5p",
  "key10": "4WxytJudH3nPCLq6dGqVzTvnSEzjQiWs7pRV2X7upzLv8LQfCYiiBRG5HNjMEVszpQM31AvTBvkbBziiRFrU3XGy",
  "key11": "QyAsFzzesUN5BkJVeMJRiLCvcT5XmUfjBW16YJKqtyKZwLK2jg4Kn6RPy5U5Y5YYLX9G1QQCR44cpnCJPf5b3co",
  "key12": "41mQknpepEFBen7aBbULMEJ8neUviJE1F2KMzPkW2rYjqJk4HcAmEprrTe8UMVkMdv87dd2o78rWnezSbfSh7kn8",
  "key13": "5i3WK9W8BJh2HzZyYJb4dDXtb2uVxfzwNeTBqf6SqE2cEEU3MtwHXU4Af76vF6qELTYcy4Khr3JqPG14jyxySwur",
  "key14": "5E9zXjpXwDXowmGyjgyPEfh3ekBzsg8HzpcTzRdtrrtCWAgGph1GEKtfnr55FewdFNo1Vh9fXwbUKDA7FDxF2HuN",
  "key15": "63zuSonzfi2K1a2YyWQar5RvfX7dbjZnoWbPSnVMSXuCkFUouY56vv84v7LMa28cWZJbbhMsuo7dvcSr15KhMfi2",
  "key16": "Th8aUJ7XeAVrWhnv52tVonfmjuCHxEq12XrEJopK7b5Q6EwvHqy4QyQvUXV4CCgGuhgjQ9XH1AHSeU1fAowBeCc",
  "key17": "46HJTNSxd7XdatKfPxFypP8f9XGXK2NAxR7dvj1hgvGaghNf2nnLKtB73bLbFZzu7QsQfYbirFQs4C2y2ReXsfaT",
  "key18": "5vd3VkwaiTBZw3D3zfobyzifzkT7U9p3twL7iL9WyvJs8hemifNpX3sMbC5DA3YTNiv4J43w79MXyiAJVgsAUbVY",
  "key19": "48YezJugBvXAVfSvmYiPD4ZxXTaEcb5X9TJpVJgM4wZSWM8w4ybQiwvDvxmdnu6JzKNGaMf7bBhbMsdAe8PpeZQ9",
  "key20": "4J5CShumLzEkGAT9YD9BmdNDJkTA9GKynxvRhCQhXNhJaAzKb8xBfV8XXk6jbLEXhyTCmLjKLiK32v27uNmBr7hu",
  "key21": "5xVDP3SeuFGAx4czteiM2z1FJDLDxvdmYoYN5FaE39Arq8NPmBzr3KKaWjtRuFU6dDvLQfD7MRaEjrR7erRGLffX",
  "key22": "4sqz5uL3YTtBMHBen4xnitfbaBTSpMM7y5nuVPCPXYTFNeTbPyBoxz86BUxz5Fep9PmZENNrJEFa2k3iQ4qzTc4G",
  "key23": "49FYW2NpUPVLxkM8bxxodxXvrq24nt1Dg8nEQWjeBdWF45PdSmiTUcZHsw9c9p4SihiyfmoP6UJYfDZY2a5Ru8pR",
  "key24": "64Ns65F6ypamTBhSJJVtWbjaWgW2jpYutDZpnfkhmCYWyLhpZiRgSJCthXjaumDibsF5YUH5dbgpKeG6KRiDuca6",
  "key25": "323aGFasYdGRbFF1umxBcjv6saY8pJtERT5kthDqudnb9Zu71xaqdaX8ZTBE4w1ViySYy9yghYp33vQz2jh1hS5o",
  "key26": "3Pa34rFBWm72qM1yMhfyPtSVQ8PgWQtsTjNC3WzhQWbyogrX3QLSgFSjCniZ9zsYnexXLn3tPyRFnEPGfttWSaGq",
  "key27": "3ESVA8UVMop7xLLvHur66E4zXNQ7rzawbkZsguFb4sZZ5nrQqpyjddnDt3S2rUdhAHybnRZbMKQkFSFut7GWSqWQ",
  "key28": "5uc5TSY4a62U8dZZyBX7U3MgCwJnFM6PBu9TZZvAfAQjYYW3sBvwT7fMhgfmxSnFwJph3LsW1XrHVoDjXYYXrJwn"
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
