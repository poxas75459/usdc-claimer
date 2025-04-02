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
    "4U78ADieQpGUvXwWeg3wt56SnF4KCFr4JoppeQ7gbRPEzCA7DuSDsRyzgMsQbBJbJiCUDNwT2GnJHCmgmds9LNtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7CF4CZMk1SBeGNXwySLrjW9JXFk5zE3e3AMWGVeSZFDFSNENHLnvPireuXGtPqsKgDdMtM1vg1rjcvRkeDox3A",
  "key1": "jftFriMNpJ8sQzSVA2sfyhfAPz1M5LKRf9inFpCbj6H9MG1e3q7WgpZ7BdhFt2mNMmj5i8hBiRVm6MvXcS3JwsN",
  "key2": "tbPQozbqRGXg6q8YQLbPrFcDSBdixXdkf8zDR99gxoWeN6bQxVycJ32oTpGZNNjQUzoCoBKEbnryHHq1Z3YqYWL",
  "key3": "3aME7y9gmKycM2MEYH8aGtMT1mPVbA9dMXnQoc6e5uKF5DWwSsWoRjSJHuaG1efDBDBYmgkDp17ea5H1Lp7zv9jw",
  "key4": "43p8Rq3PTjHewRJ55guRmTr4UEsoNCGHLUZzScWwZqfMid457v8NticAmJr8wbjJ43jGqm4tZ6Sadw3qTNW8egW7",
  "key5": "3UuAdaZkS7yztdoQGS1WdtQaw8S56r627fhwxhoihvm8KFiYW6XMek6GLF3oUAvq2g3R2zpmFJGDeKNuNw9swJNd",
  "key6": "599PcXCgWg9hdiv4R2nKDSJHmXcjkiojWnC5efEMfh5b6btDmyBFGzgHvUovZBWEQEn4g9n9rpEFCBU3HYXb9b6D",
  "key7": "5abNEpG7z4cxDWu19EazpnSzx86dNmva9Whnrm5QJd3J1vkL6RQb6Bf9pSDS5Rn2cgDS1azaQsYwwvCQ5FeWCaXd",
  "key8": "293YLFVZn8Au43qJVHdnfzoB8tB41x4SdeWjfL5SLAHBwXAvgfMnLjkdZMaF6kxfCvhPBHrZ8FVo3dtv8pTaBhSz",
  "key9": "67QyJVw1spjsBGuSU8jEp2d8uQZrSE5hjVakarWCj4LCqSpePXL8KBcRehTM7T1fWgXKpbAKK4SPJgU8XuCbuEAN",
  "key10": "5AUdZXyFQm3LczArgWRN7KBunVDR1yyMEKuyX1FQwwkJrBUTPy8scrJHBL6ZeyhFPAdpGjrxshHehoRQMuYSDm1y",
  "key11": "5AZdJ7VBLTLN2uwsKWFSfrcgJi7kBD5bm7Kpdj1CXSp2w8G13w6d39FaoHWP1kiAs1SqhGhHbCb8Zrqnx7naJnF4",
  "key12": "2ERMPrnVgm165duZ2c1nRyj9XcnC7bhGEc87KinZvYDbuZeq2r4Yygh1VYD28NsrayZbWFtZt4cnXSqehim2yvpG",
  "key13": "3E4UJs2ccjnx2ErMDQ5PiBAWs9MysnYtPHuaJuA6ay1PPzqDRRQAqLX7cdMtXZuvbsu3oDfi857fW3Zssv7soxCb",
  "key14": "49CLi9i2FAUWWJj4DzgnpAEabxuJ2ctL5qE7x5H1krRKKDTX2c79bXCVx3i1PU7PRyHffXbaJY6UdFdG2bFq9zZK",
  "key15": "5GtsnnnEAMV8M8JnaW9UEcZ69VotUNTAgRj1Wk7MmDEoJerJKxh7en7HJ4TzMYH6c9iE9qX4mcPvaLDrF1MP5cVx",
  "key16": "nWSiFg15Jqs2FE7Aohc9vqkQMtzpoajn8yBLDuWzwgnSE8AwjxDcwSBsqfEPjc2P1XrRynhSfMR7JUC2uV6WuWE",
  "key17": "qwAvL7msn8riRkKi33NrQXg2UdyGXk2qCJiWZfwcw3jqM9Ws64xqpELr4ddESQbZcK31RkZPrmP2EsicP5UxfpE",
  "key18": "3WU4f3xjPftyJJAPC3PNHkKPQFQbxNLabinpozh9axf56qvbTKY9DSnfjv6ft3N9vH7Ay5dWNHNQu85YUeTnjWxa",
  "key19": "3heU7GGG9iWYtUdqz2sZsM6LARF2umDEVfikbicvfpx9ChB45CJh5hahN29QjLLNTGRhM1NaoQgz2sVTZwCftcDL",
  "key20": "53T4zaYPYmC5UTD7DoA4n6tTYv35ttpwsGP44BWwVZduwV9xNiVUaQA7uDBNNqxeNd1b2HcMLus6B6ctpmSMzXrD",
  "key21": "4qufDvWSC8Mghh2QozJWaDFHAFTJMtVvELdrjhRpP5Z9F68BJKdWsYzrrDwXrVftvoaqcUqUKAjPnMPksCGCuK7C",
  "key22": "4eooxcTjzqT5v1yszDehLnQSJsyunCybk2pqkk9JrYmGkL4cfgBj3q6RiZTM5gm2Q2WxUfnSBU1ps2ie8yoJzzyT",
  "key23": "3ryiq8s59MomwrANq9VViT2HpGpwRYXyLuDFDuJ8adRRENBwb41TiH4zCt9wtWufdW3HkWYhao5dCukKwG8ZLU1m",
  "key24": "2iHdYNs4RugKyoZmmsQp4SEEfy33sfz3t5RGSuLiCguUpfcdDSfqm3rjK6WoRZFwiEt71YG6ytdRuZFe9Kbgd6Zn",
  "key25": "46e4G4jbAjHSv6x2VXQ4Y9Lad6J5cYMZZk3REaQzkfyHArkkxFJCTS3SG6AGcFhn2Y3Y6xh8MFWpYo1DGBnAXqHA",
  "key26": "4fGubC6adgi1NspfdpwzmfJttBqBBUQjPmejuRLREtnWyaU7L1sHkEnAz6Lh8rY5niWrMzjMPdZZw1vhohUjxL64",
  "key27": "4gd9avnazYCukBd1fsM1qpnTUi1hayHqPWMwjrpnFdArfCXfN2d1JKRGg3gPBSuwCEEYeQn19WAPBFzANPYd8AqW"
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
