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
    "21x4UsYizuy58SYr69vfv65FXwqTzcq5fJae3ZzttQQR6y4CBTUXoQTBp2fM46Jd23iLibyhFonsmkpExQv4EpLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1wh5V3wLC17wWRXaAApSsJM48E1yopXGF7tpHbXxi1pPaMLLqN5WyJkAwEanTcWVNX7S5Uhqf5jwu7SUqqmh75",
  "key1": "5V5zvCCTHXKBRRbJQk8dD9MEZqwqZSAayricZowAgWs6uLRumr2B9jMzGTzXtXwsYGYj3WzXXnD3VraBx7QKadPh",
  "key2": "5dnLyEvBmwNExKz1pLA2ZvycqEsVyDCLMQeoJVQy5feLPFwBDFhG58TTztLn8VTn8cHCuSJpXojDPthAaHnMWvyJ",
  "key3": "5znKT6GHho3t6vftJoSxSfBSFNTXxG8swxWtoRmLubySCt2tDEmfJ9E7Vt77bJSXufGQE3JujvR2Nvwnqpx8Fdi4",
  "key4": "54v33i8WPvg18ULBhwr4EkV92NZT4jhQRGyRfNxnNChbDUpVUMYT83V5ebKTUXEWN3bG4XPsryEh9pjdUq2rz5Tp",
  "key5": "3rc139DEhfKUjQqF4WtXi6ka8AVrm6m499wCdnDibaXnp29zXSxQ41b4GFnX8pHZUyDsfvbyNnCPA4Rp3qeg8n73",
  "key6": "SbhuaVo2oNtczxJD4M9ZkfZQ6Ms43wxWLnqPx6zZf3WpwpCHLdYJ55Z5ma6JiVL2Jtt36cvXqvQi8uFYMxtQckE",
  "key7": "q4ZFQDminsXvqN96aK55yWie7QGsQ6FTMSkqwYfLCpApjRZqEcnoLUK2zfaQTLgkrWCVyCTAD4Lc9A41CSVBwW3",
  "key8": "5nx1NAjVZEJdsgbGFUpVA7EQCnVoRfqhJ22tHnCJvTUVxuWSj25vHpfeMudA1KmWmcidJePtnDwSdW9wfCKL9rj5",
  "key9": "92oHzKShtcP4M8ndutQ8aAU46uCegqQUxkzB152Jh8gsSQQ18yR6o28YscLPoKNLpVcfacuF3mQwybknSLo88aU",
  "key10": "4zc8Qug3J5Qom8763p1HihfsmGd8osRYyFTGZTXs672W421UmcVW88sH3fuVrZ7fQtLYSCK3PUDmgAFpxUdn78yr",
  "key11": "3b3uYT5FHfVkMDgQKCcTHwLGs7c6h6WduBF71yiPfn1XPqG6qDTactfmuQfHNBoot7nNLkCbdQFGcxSQqcJLhUo6",
  "key12": "2DVKHmMe1K9J1sjL5XLJ8b6X6PYcofiLQAbyhEP8Z35U1F7Qpg9AyoY8gopEqT4jLR5XacQvK4L3bkVdvywgF2ZH",
  "key13": "V9d3chYRn31iqfqa9oN6kvLfS1xur51EfvyiRWyeDccwVNeRXaUpDHbHbSHC3q6FNTQQ8fcjvGe5m8C4xHK9wSb",
  "key14": "4KtccPZ2gV4jY6m6jK4e6mQ7HDhRbagSYQsxKYQYX5zYHswzaMnyYgNj6E89P8KfKDQ9tmVQYVaaJ7w3S6zrj1Xt",
  "key15": "S1pNAVxgtFW5QwUnd6bhQpSCQRyzDmeYkXUdfhpwTVtw5aoRHH16S3TWocKE1acMjmEj3ZYYFTaJzBUgS1AapSs",
  "key16": "NTNMvaqTgXM58pEpVYXMt8bSR6DQPKXWPmz2yEMAiBGFmCosTFuvTsAiAWrfK6ik4g7Cdtvxqm3Sg9FujcHop9k",
  "key17": "23YfTbxgzZjXY1VJf6dR829JDwtiUGWggUaBGnBbqidMUE8CweZTrafB7myjQ4ktM6ZjqFFcizvvQRfR9vYVYxTM",
  "key18": "5vPgMWVAWsaKJcdR4LxTstj4VGSL1fuRsSXxrqH7Z3Mu6rkBLbRXNCnKfAnUCnzovaqyHdhTowWL5QcfP35GTR2i",
  "key19": "3fh6MgCre9fYSuw6VGcNHHoLLd3eaA9kmgxZu3FFG8MV4eDMFJstp1HHeUbX1J77mVMtELSQxwoEC3seTcux8WbS",
  "key20": "5FHidALCgyPMtnKcSSPPuGdSZ5qCcbQ1CNjzjrK4aBNKyFxhKBxbMvH7A7xndvSqPYq1L17p8Pet9YQ4yc8nPZ1y",
  "key21": "26RVZ4d4C7TZphvaXWVfb9PxeAmRNPg1551pPSmG3o6pmNZ7YgEzBNjA72APbryyftnrMS5QiuTLEHjcfw17aAWe",
  "key22": "CNQ44QGtSBWifsopdGfPAZ2ZD9JhRMkchyZBwTUESJB2aPC9Fe1xwFQHF1ooF2CXgcbaYS27RP8SE5nFkjaWbLE",
  "key23": "5X3WKMGhmctUoFZfzFv7ty88ZMahcLf5t5k4rhWTMXN6TGWLhVMzvGpR3UipgWNvzs5AJreuY9GAw82u6kkMcRej",
  "key24": "4MuqPVfCw3hddUxfhMujQq8vfSSbxTzDXrnikrpcagdkn9dAtmPW89jiuMTbgGb2esDjgsKQdH9HXAN7r32fFMYF",
  "key25": "5odSHMReTctyaTiJfGm7dyRFHRX1Ae97yeSKpAXJmdzNosJHZQ3VnTLjqKwxry5yCvXUKz8ZP8oovBUE8eNptRiT",
  "key26": "3A6CyPeSG6cS8syJiVv5eH8chBzgvH3oYFYaJ1yHWmBKgz62e2J9HyLzat6DYeiPuerPSkXTyxyj5oqfAQp8jqkA",
  "key27": "5nPYfe5TmsKeCU2sxR7LUwKwtSPjy6tEingdWpHMWKz1V1J6kmkQvxSvT7xWuy2dYrWkgpR6SZwr4TuhVB9CJAv9",
  "key28": "ExSyT4xx8iZHAd7TdVKnwhFsbabrW11gg2AqkL3M5Tq6pB7aGSBVuxNChuoRvBU66jHnp5ex8vuW4FBwWA2oED8",
  "key29": "317mbQEMXxdSiivU1hpUEWmwXSWfQBhyiLBVrpyhSyPZYng57bZxpA1zGNPc2uMBf6Z9o2U4Z7JhREg7EMvTXyfr",
  "key30": "3zKZxCDDFwZxSm8o7qnD8EZmHes8a7G9Vh6huxhDDsoZ2ePRaoZ6nXyTFeRpTuvTWA5z75zaJjcJjJw2KLWCwvxs",
  "key31": "4TC9nL2wLo88o98FmhAV4genAaTSYuxfhU9knNYSpTgCPE3gnaSuHUxo59kkZfCrGNRJjQw8YrP5p5R2YQ5SjTb5",
  "key32": "3HnsfqJMGYeMppECJ2GCzM3Pro2RwZbFoRCo2t4Pqetf9WZY5n9RC47VQKhwSmW5aeP4aqgxVkNz3hpVxvNEHGUv"
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
