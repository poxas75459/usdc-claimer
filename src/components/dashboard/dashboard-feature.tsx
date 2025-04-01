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
    "AKgShJFKzeJBJVSRL5fxdGseNdDWAGrz7GscBYWgDsFbCbKjQS2KYXirswizjHPqyMmAMz51VeZZ4gEnqorpyUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdPJqYaECu5kgQ4LEbNTZic52uWo7X2ofTRH1oeCK9wpnDL56EhGNFiWTHKKXrGGushZ78cetwXW7pxwTmBEZ8n",
  "key1": "5mnna3yA2hTqXpDcjag8ivdgD3psYBF9VEYc9XF4pWyBNXuVY9Wc73NkfiC465kTKiDbhYKGdModgkGSke6bzB68",
  "key2": "3EdW95opMDoykQkrdZE1T7nr2DJtfndAacjTdHc7MwE34fD4tCyw48JFRiRKdkMausrbv5e6DYqJUKqQyb2vKBbw",
  "key3": "T3Uv3T24puDmZUX2X7j4zvKxNom5gzfyvCGodC1BAbdevtxwsuv1jMfdTt8BKzQ5kmr5GjUxJrm9u5pXxGE8hxn",
  "key4": "5ruBKR87VUQzU22EXBxb698bGJHfYaUbFPQEjRfMtivX5Aj72m4CTXffF3ySo7rNNfQDURhCh671HFGLJsDv5PB",
  "key5": "3Zs4hofiqjELjUGLmCARUYHbmDALGjvVwXKSJUe93VquT6zjkSg7HB6stYnDnZhaffEsDokfvkdgP2LmvgMu32Xe",
  "key6": "3QVFbBtkfgA9udQsnyk91PkjWnA6cddZrVEDywYAyaUYqJ7Ygmqkqpk5EWp5bKBdVaDkdutPEnWdpMXcFFwWjTAp",
  "key7": "4sySURgf3qDh4XQQprzMQnHTpjScvBsQXu3nKwRxEQd2GZ2VuSckLKWX7uiDHkvv8bqpNnGgTYqXWMYb3WYtky5h",
  "key8": "gXqHMK7APxvQcYHGzxgsxWc1XJfgMVbV9o7py37MU6vGYHCYwpX6LnwcGaKKFzoDniRSWqC4fWyfUDx546UA1Uy",
  "key9": "56vrNm44aKVmGsLXvS17MAiFiJmrCPea1isenEUfjAGikTkLN3qf4jnoqJmMCLxh2RDAfRBvjfg4HrGgo7SMrk4J",
  "key10": "TfENmLM5b8TECS7fjgdsGjbwJB8W7j3xQb7FQ29Sy1DLTyndrEqwm5DtovuvsproA9pMmdSkVSsyPtnUXZxEnN3",
  "key11": "2hzKG2uPuS4ADZegyFhFXhT5LeobQi3p5CyxtpquzmnrkHAVyk8rrg1nxxpL8hbk3vVikW9KoYQCBw5BzrpWb2A4",
  "key12": "3dppAXiDpJY6ZLQjF7VvyfZLgAZ2Cd7T1LwvxM7w4cQoEFb1yZMJhs8aEj4jKkyWHpKbq5REfsvLjkPHGR6eacxF",
  "key13": "263ojuqQi5iJjUYB187jKYnSqMoiC7a8tvwKGJXtKxqYJAaPaSrRToZLnAN1i9KQAfNQZLYyBE7dFMMUvuEeehcU",
  "key14": "3k2x5cZeTFQqtWh7rzbVp83dKcWgMUe8YJB27R1778AJmCFRxn8uN1X2eMAZNzvgALWyv23dDaYjExPe6sL49tNG",
  "key15": "2qtRjheF6D1exWc2iyKsKohgzP5i6wnTQKrVHAmt5g2WpeJ9ts8153AxHCnAhckBMCyJnZ7ELdrfzfKxy4NqyN6j",
  "key16": "3gxARf7BPJkFm3q58DFVc2NbCqBrqAEFkL5nLacqDCzYng5K6YMBNnDHntUTx8rs1GPBYzwbFvmLTjUC8oDJspQB",
  "key17": "5LYft2swsnuZtcEtYcDfhMCQpi3dz1feeox9zjydLZUv9KhtyAHDDxhkgp5Hmspo5Vc5sUyvGsuoBe2jimtbmmRj",
  "key18": "4Q27SWpwTUyrxW5rn8Hm145GUhkY8wqRndGrVue5rFaPRDgNY18j8wFTKxZr8dwBetCRjJfvd2qAZtru9UiPLVkx",
  "key19": "32PxT4DUvZeztBjYXRXnQXVGPZTu4gW4VnaQb5L2zsFQ9ws8rMcgNPWVh4VKTw311mYWUSMvEsdwdq7AfTykQcz",
  "key20": "NXgZndPyphqQJyJJzXpXpyRxcceUcqgouoG3tF7vpHFEZsQsMZ5QMqwwAowtDCMHn8BLG2a8k2hu9rBecFcghLR",
  "key21": "3AAXsC2DWf9LmC3zt4NvDM2g4c8CrxYSehMNfpVWc28dxRKobEWQzuBsbv9g8tp8o2ZS2Se2hp6dkZmJHFYViiRF",
  "key22": "2jWKVuETABaVvRRM3ZhxmTVMBUF6YPXvbGrQ8uUvPZ6faaMWqPk3cBE63XHrbvwb2CqmAV4GmQCBSBknPhb3PguB",
  "key23": "4ixRQzwc7CD1cR4iLmpfizHNHGjZwMDGqJyaZzbuQbM9WTPVMyh4XSsUWGCbgg5TXWVag97Yf1RvAhRoEAGhKKsE",
  "key24": "4FMR11ABhvYzDaf2iAjanXYkWbdhWKBchG1wodcHDvvZYHAE8QrmDProCArS2SMsLE9e29NnBwLmz1oEV4DV5BAr",
  "key25": "3iWkLcrgRYemLxgEGAuPVe7tn3A57y5WpnXcyheZR14mKXHihUx2XJeW8CSSAuMcuE9hQEgup7Vzcimt29BWdCje"
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
