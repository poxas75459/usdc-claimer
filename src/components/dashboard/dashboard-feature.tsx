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
    "3o2jk6r773jv9zRYcDBhagie5WgxG2yirjy8KBzTjvstseAuz6nnHTrKXR9dUQtrYaT6e3LydLNHz5V9NJRDZK7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRf5reooA73RtWAA5uxeQjhCJwQAM4FwLaonBmdp4mAE4FEDQ9g9Qvtpn9Jg3DWPNvHxbtiHTPXjhkXmNMVcLjL",
  "key1": "TAamqVGM6yeUFUBQVx2FWexFnjbuQd4dAxjBQ9Hcx4465y3CvhXMUJyNHxdQAxad9sa6FZZBK4S3hQDBeMakNcZ",
  "key2": "5qiXkj6cuhVX5pxf6iifZQBYAYHQFNjnApDndzzQ16Vwa3XJvXFEeRW5a1GyLZfEcM3JocyY7mb3hR63eyqKS4gn",
  "key3": "47Yc4zGzrxbTiHYnvbEhppTnFRknPyeVtyKsj1qwb7QiHF4dJfQvcL61aZG868vhFjygVXdNNnSDtSUjgrYkYKg5",
  "key4": "55w1H2bhbb9vRLonrQG9ACSxgptyL5Ue7rxtkCNoR5LV7PjNnaEg1zYk4N2LaJfwpJETaMeWtHzHfXM1dxBDqcXK",
  "key5": "4xyfrnjkVqFu4k48VB7phFm8p7Z23TFtTttF3qMcKgtu6QUV52PfRkaKYGm6HK9TM16vHnHLBMkosKywpTgbeSsf",
  "key6": "64UVPE4NrG3pNyhhe9UwMe4E9699crbF4fZofR5DcdEvfxxj9PxfEECBu8KRkgtntGKHajsQMUDojykg7X23JTub",
  "key7": "3Z6vMfDqFTCWUXqCy2dKtRBMTLB2dwzVCWVSnYiDD3mH1MDBENqjaUG5Tj5GDBq4FYXSMaSvsJWPpzWnuPdpJcW6",
  "key8": "41ugGETTqiFkuEZsx1JqW7A8ZJ6izjARhDrAw3UefWFVQjm6DrgS6Ji6mw5gbTzfnybVg4Lt9WW2x9KSU2A8AT49",
  "key9": "65G4G4r5tDQU1izLVDpy6kXKGnQbAVatxsnSukuSGoxYvHreJTVTBKDnRJy77ETPTwc3RivB4hkXw5pBfRfV5ov",
  "key10": "3rySd7xq7aCv1FJDmDCzuDs3a51VzeqFnKvUF35wbnnyk4dUciTJgCaoHQS4LQgoryr8XEDgvuGCLZJn2cKf98P2",
  "key11": "25JLcdbmkm3NWqPSsCFgF4rPhfANL5FapnfvDiG6i9XwE78zXPcuCaQ9yyHWt54X9VjRqKiASVEKH1uCcEXKdXi9",
  "key12": "5Y41k8e5GwjuyT3ZFpLzJxHx8noGRhvRHZoTEHZSA3YFWfEPnH6MeL8dHCfuqfQax8T6aLfaCvpakt2pPo8j7h9d",
  "key13": "2bCq2xxwWkqisqERLmb5jnRTGB3EoLmkRF6hifbdrdwqTWYZJL7ZiSto9ExedDrHSzd2YxBAEpHXdYATGXv4dHCp",
  "key14": "2YnfcsWhszCVV5waff6rzGCz4ypnnhMvwXSDtQsR3oEybEo8WimvhgzEaVf8L6fwGaEsvrBgmosCDCcsmUpbNi4m",
  "key15": "63Ro6vpDJ2RjbyeK34uNk6DH7w366xGbFqZyVZVK578pM4WqPyqwh8RYac27ZFYLyHDETnwdDeYUfYQZwtSvczhU",
  "key16": "2cauArf1gZfRA4PcxDGx5gJEHDcBsNLCVNKSU4VNu6gUANesJpLoMs3cXTBvuRdFziA3XGXP8W7wLqJRA1TdeU6x",
  "key17": "3nJyui5jJC31CypQq8dfdrj1LXCNCbVdnoqAKENyGH9TZCpfcJTXWovp6uzhn5ei2gjQPCZTYG5t86uWSH8mhEh3",
  "key18": "NJrLm1bVDC8Y3pR4zwv6v7yYaEMYycFSn8aBUWGhecmm1s7DzHx2ZXGpappBxD6BkUg7EB8WjsD44vjJUghWnu6",
  "key19": "4E8piSYPHHYi7ABEpfbTdneCaabynLTsK4iHbYCMQDqWP1f93iskUhnZCbFg8XuKBZ8rHVKGTT6pP5i9ngKzMzCc",
  "key20": "5rz1waKCD3o1cBcGMJ4DS3DYSzVhg4ZqHgqty7aFHAicZB7qw3rxG5pnwfCu4qSnVCwV18FiocL9Ld3WtUXZPt3R",
  "key21": "39iR44MjmrXLpCNmwfvNgxgpacMgYKhgxqfSeQyCiEGhVAjgsemFHPYoAZqtytkgSqNu5gncsCyuzAjEPVTncA2S",
  "key22": "F6TGNq3MyJBR48Kt3YAs8N8pTpm5VheDGs2uRj5joctLG8K2zdK2U1DqdaC7tuA3esbTfZ4vtaFEoRC2DX8eji3",
  "key23": "PXBPQ3NBxQT6hFyAgY218PAnTewqaoqCDAenjPqVWfcZk646aUoYFDTecC7GoenzbEvxQTq2ZtasmwfwUhUXmP3",
  "key24": "2CSGkt8XdyYQ8gF5c3drhuooztDGaFBH1gxQ7uj3MmUB1qzHQ1K5CLqTKYVN4BGkJ7emxfUyo6szZupeBWTAq5av",
  "key25": "FbUEJ5PHhWVsSsH5dsFzVWtkAGZg2WANkGgZmqo9HzphkDRXVFMQP1TzW2d7AfNbTCQBPGDb1hFZXMKPvHcVWL3",
  "key26": "2bi99QVdzQoJjQfzyXorGK1BuZA7WfGckJPBNYbpvPSAdpaPc5e2Sc1srHxuN7eGhwGC4ZjGtGsiKLUiVNdrox3L",
  "key27": "8fXsw4fBwsTh5iLyYJFUi7SQdcVjfXgoZ5EU8cgbwzVw3J5iBeB8QKsLdQ4viVWLBz3vAn5t6891QiXN9CrKBPZ",
  "key28": "A1wcGLWFTXYwsFuBy3zb49cJPxPWV37YEfpfzu288abqP8teL12e8CDQYwrnnZYniAHkDpy53ugKJw6SsuCsdjc",
  "key29": "21YTDX3FganXQsoCiHfUVRBrDwDCqg3m21PUzE3CLxQwDGiDxSQkVUjeZHkyCjpDzMJnSVCoqQxAeNUerszZM8S5"
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
