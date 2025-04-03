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
    "CBnyGvmy697sd3GvY4dzHQDGMb5PSDTQKGpbNhVEFY87DP5fwQzj3HLxQqXMiQzb1D8j3mL1tkuYyFss2DgLyYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ua1tnm2T3c1SrCchMftnLBAVFHznjrSwRrZh6d3tnTPXSazFWJi6koZw3eTAMJWBQ9EdNFNbjSBhU1eyS5cvjq",
  "key1": "xvYXA5wX8zi874xADmoL3Vv2PydM55xryHvVdGtsv1UMfD75qxF9sa9RBkLHhuq6eU7PZctmegEvTNoDUeqbGfB",
  "key2": "2uCXoNtyMEestjM7XaxUU8dB2hXcnXpBAxwTMbgQeLwRQ4dA3PJ95kiEetGwUa2ghFiF5vv3vqn5AFM1d7H9hstZ",
  "key3": "3EZReQPckY7hVoWLuHaDL7KnXtw39jgZpxqvPFTHyvMtMEpsCgAdijckw1NRNUGcFrfth92EEcJNbNzWYdLkSKYq",
  "key4": "2BK9a3JHJ3uKADDaVtF6BB3HHC4KVXx2KEccPP6EKCy1goVC1VxZZ6qf6n1jqLQSkZr9CicuzSmYBFWGfC4Y9bqJ",
  "key5": "46nHXWipABUXAr7RcBuXRjVLbD43t1MRBHywGjBMuGwphyFvRL4mKGYc845ns87pvwUtFGD62vaXGMyD9zt6V2UL",
  "key6": "ux2kGsX8cfEsMp3qxqiggyXUc2bcGHeorFj5eTb8kjAzaqu2u7VFhQHeyWwiWZBQsgUULxwhW7f9oL7nJNHT9wN",
  "key7": "4hVGLQoFpDLR9L3h5vXAi4Z46jCHMdN2gVtdDTwfWZox8zZX9LAAP1VP2N24Y3ctrt4hYaC8zrqyySXkvpNUr2D2",
  "key8": "28VGeYajwbg6XPtwyp5Zn3sbbFwBq2LE8Nxsu8WesUJpWuPYQEz5NxEip3PMU7TmqMRPfcix3dzVsuy61AFRRRnu",
  "key9": "2frTp4MynPKo5Krc4noGwN4NhwJmHUbj7rA4qYFxTyJfhcZTRRNaikxw8qsaY5QuRVhP1uL6UmU4pjoYWNuvUhan",
  "key10": "HbzR5d86Die6jEENVbkeYe5LbBN5gSWRzmUQz3kj75VmEgJjPt8v41DPhhrrTofp8QojtrBDGJBxWevhr1zPUqQ",
  "key11": "3cof66ZmKiCkb5dcNuQaNgidsZAcDsBhUxSw1zCftJwrwsDiPmRAxS8GiX2Fmip5pG7pJw29BZzhPgxe63iQVWts",
  "key12": "2u9iZPHTdL7JmchoM1RVsCTkb4xxXQwHgi5Lh2JiLswoCkdi41FNsggAxNG8tAMFAk1TJ2n46EosfaK964J7xuhG",
  "key13": "3TqGStZA47j79JN2xH6f9SwrLEHoaLTXvyXvx6FLdcZG4n7o6faCWf2JapLBo9G5AS8W2XSgxJUbq7Aua39VMk1",
  "key14": "VHRarU6AtsxRns9SGv4BJMDbNhBne88rZ8jKixZjY6uYTtVLudtzEjzcLy5e6Vv84FQ7anTZStxH5EYwDqt6CFW",
  "key15": "1wiZnMZtSYFFjjGkuC5UorLd6ppSHMezJcSvQUP6Dxgw7UXxEn4tPQ6rwuLrEHu6R7fGRMHfbe8Lxtu3vXmTLst",
  "key16": "5ptCvj7ekZFpEC3u7Ec4BkFXhJgsBK8TNnNT55rUsCFesvuDuGrRdNaqDjewPYiuysNbUbsKrKX6oa9HnhXoGkWX",
  "key17": "3Gj5EcUP36FKyfC6f7V7tPqXVTTownDKBLtKc6LkXmkb3C3Dj4UZE6xkceg5piReCBgkuWgFKfyBFpT9KPrCHdwC",
  "key18": "4CYkHaSKDqmTDRnKWCFuyu1owCUVbhYxjaezgjVk4os6wt339p92AWgPgFtYZs8s9YXNReKWB75oEwPj3XKEEVan",
  "key19": "eeboMix1mh57DKw24UQiKbPa4dgfVncZX9mmj6Vf7zEBA4P9j5aDrG32HwgFBQwc6MzgigTSgUxUafpraPNVLuT",
  "key20": "45K1RuVkYEbdxCpHZYRAoyHjtjhxBfuJgYKV3aNPTxpSJJmzErYYNVW3duaH5cktdbsf5pgmzFrGWB8EERpYKD1K",
  "key21": "5LxKvZfNw5FhbyDdpbjshwcSH1DyUrrUCvsNjiGUbRrWzZYzjKuEHDaEhcEtbbQ3kXFTuURHBC3kRp9c6YBSA57T",
  "key22": "4e4eVmqE7aUy9YkPtAReKid4sV4XAWuGoQ7gh32xzHvdui9je2DBpxWrDc3LiPtF92pncZmmqDkBgMzHZcPHZqhv",
  "key23": "5tmnCCLQz3JfqkL9MjguEibVMh3aWHHcB8mo1gyKWKwKRJ1aWa6aqtVYxgoPnC5iMDkb2gHdcnjS2MjCLnaXRCx3",
  "key24": "3qfrKdp87uxSN6HzMSin7tMoWkZGyAwEoTVUfiDAn8UAsj9a1mo9kXBytpQdBG78oTFKTCqJ7a1XXG2f2VuGbQbM",
  "key25": "5x4ATmr618EYjmZ4zpPQ6TEhMefiExc6PWGQdUgnHR9gCanY4TxpnuaSb6349rvdfCFrr7uhkiKRcfsYX5XT1mQp",
  "key26": "2YGuZaQ2Y6Zt7tPD3QPBvutJFUWgGFoCa1MRZRW7xs9o9otW68sbTS7S257pjNrCt1KYcqNpDdpAJHe3L3LqaML7",
  "key27": "37vuzeqEmChQJEqHvG5NAn7iGUT2pyzEKhnCuaTXmcsb1fDJTsEUYTK5CoyGR5QLBHaSKnvM9mVApMmYEu6xbUQz",
  "key28": "53sYUcMJ2zLWMZj5oE3rtnu8PqnLZtJTA7g7RjrNhoVkCsmRZWYYtFGwAab8Xo6KtEuPWLcrWUr1SeKESfq4ubd2"
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
