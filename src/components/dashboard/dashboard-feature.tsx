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
    "3ncVwZP1p5hWUM5ccup5FjV3mnzJipUhFU3nh5Dph2ER1E4KaNKMwKrBPZELpYDEH7gyRM6doGEXaEvakd4sGNjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUxpcLmwwpzUNpiK8FSimEXnfcw9YLJAaVZUnz4Cf8YuYy37T9deP81mK2MaQRaSSmhZRaPwzgLgvBp3zkDENrF",
  "key1": "oomhLNEXWgH7NSoCnJC5XdJqqt1zaCiGdH5yT3QnQYUB3L1Uxko831Yd3Yf1zctfRxDFxuSLG1Bm9iYKtvMCsAf",
  "key2": "4tULDvVAbe8BnG95b7SphuWeX87JdpoyMCPBSB8ZrgBgxhZpAaRYGQqDvqFc9kB9N4qFdu5X1uCBCwAdQAGEsKCw",
  "key3": "D94znQ9c8ytzChJ5Tz5jA6psYvVxknCfea7TRZqMUp8c2PdcxyognWqGxkeL2q6igxxHE6Bb7WVq1LhGGAM6cie",
  "key4": "2H8aviXypa1YfE56ayU32mCi1Q8guhxEeDQAe7rN5q9T9TzzpNoQkxYaoMBRikvJq8Cpmkc2UmZvyNtt28U6Revg",
  "key5": "3SPwJoK6CspY1x4CiitT4GjdNNaEYLSXXZypvVDBFmVNsuwinUXfQhoTJPU22n1ceMLPfHM4SxdCsdpHQi9otiqS",
  "key6": "ZSnfDQRvcqGPxjpiMUHeG7Z7W53ADabnE5v4kL86XJWxG45m15JG9omCiYyS1La53sCxUrpZ3rYqf4hGzpSSwh3",
  "key7": "4EyUhRyhnYvrgaTmm9XKAHvbRBCK2xyZ6iSWD7R6pMSx8TuHxim4K8wVPrtcCfMzELkY47QFuG6SJASm5GUT8TYq",
  "key8": "4ufFnGhD44dgqZ4RnibqDyWGQ8onx2hhDRwn2eHo9Tfxcfp7Q5g3G47rKjT7yYqbjTLcBwJZJ9qP93fHx7PDBVSK",
  "key9": "2wZZJUF51qg6QUk7EBVp8rVWWu3AaA3ubN7AZW8ozdbdMYJYFXVqsjgnpFDTQp3RQbp9hRF81EHKotUJQdSvytQY",
  "key10": "3YD7QzASbbE6CSzQiuinBnjqoDk3jvrMAoHtAUmgNydX6DF5xiGpD6REEv8NxpjFRqBetvAAPh2dwmGvpfLjMMwK",
  "key11": "4CRCErJdqcDVvRwzduXxLLCtehifbXTJnaw9fDvYi5Htu8QfSK9WE1BEGk7GBn9GYtxEGLJhaakumZfNdDrqtYgw",
  "key12": "5SAEuQiXz6KnwLTyNPX5rtriX3Jg1GmAYVSJvFTi1aZTkM4xFmDDrHKB6h2KmG87smRi119oQ8B2omQ2zW8dvCAh",
  "key13": "4eJjkr8kUEAg86xPUibB6HtYzrYSime3auDyZEAVAy8Nff1LxXVNqX3mV99j5GZDhHo5QoPDr7dHgYjeeoqG9HdV",
  "key14": "58zAtCB2Xi9hMNvwCpLCZVFnGJCwwji3kQUX952qCY5dcqkH4dMx73A9Qp4WdKJs5YfuA9FGgiGr9zjVnSwuRaR5",
  "key15": "UgcSYv8rkGuHXS36KidodHr3tcj9i1APkKenGDz7Pfj5Q7HZRvmDyE7yD72mreieYi97quGNzpEhbwYWCi42X7N",
  "key16": "3JPNMFk1eae5DXtd65jHTqVaarDncR3qR89jndGdmryjzbB89HibRKRo2ARicgA3Hj7q4bTGpETC8vskkwk4ead",
  "key17": "3NcofMM1KPNNFDzf8xbxZLh5zz1ULSvFWU2UqiTceatjMsF7QGh4m8GLCUpRpqjdeoT2swTBhm6nnNUw9hHvcZoa",
  "key18": "26at8Vrebr2oFw5nz83fAjyoQSxVtS4wAmCChC2g1uAoLKqSmvrXZXgWTn9ufkTfHsTJPdtUvYibosNYsxFtMC3p",
  "key19": "3YpfPZDwQUDVvvwiCsxSin1ukj78HHvJTAqgo4oQvkUYAk9c72gFyHD5Hetw7TqsPWBhRf43NthAyYABCPEX6k42",
  "key20": "4aEBnfunMyG6LrLrrW9xJmhs4yLuFrW8YcBCECEHhmcsNcsntehZ3oXcuxJ1iZnZxfZjQc9j7gETsvDvS1utG1sP",
  "key21": "26Ta1tzoaVp6qcR8iDKkMA9TohdyQC1UJjkHueZK4zJ9yTUcWzN4e7MopNNJZJshM7cKL5Lp8CKnpTA8FyC4ujT1",
  "key22": "4gMCwCiobRucxY6TPkVbZfC9cPmYGAQBcZM4xoyQz7qpsZrTM32tNwa1q1xoj6tCwY4JMJSCjB3u84w5QMfYWSsC",
  "key23": "wz28vQJj1TZb8uzLks89Y8wQSgHpVE8m3iAj7bQn6W3g4byBMXcbkrqRzFC5BjrvAmjam6SxoaWQnvbRcDJLuAU",
  "key24": "63JeVzCmEaDNuozU4yxnSyd81pnq8xkb8HoeFExhtrmi2Aczg29H1u9h8FAa1ycfCyefUptS6jo4zEv2nb17PuG7",
  "key25": "63g4a162ZdcBWjBRhFQBghwuGRgFQJc1LDYvDTmbzDPx1xeLPoeuvu5iLa1RJsjW3HJ1FenchX62aUAh6bmoeQ4j",
  "key26": "D1nxokeBBQ2E3qpv9yDh236R77exyXdrP73VN1sUZw8x5yefoLGrn7JJ4Jax4Uv9vvYfrTjnePnwnALnjJpH5wi",
  "key27": "5KXa4rdyrfxbpjeXgGcpUXeobz3e8ykat7Q2VBQxA4Mso9dRyntnAVbZthyq9nerApgpN4gTK6QimVHxN2Hashxc",
  "key28": "3wE3QUDY78fCq1pi8CeJFVAVp9cMopYs9QwsmxKTBiEKYu4AN5UMPCy8uwMX7YG4oJJpjQx6jRKKX7ARoT9hNcnW",
  "key29": "eXn9YMhzpaAm63CeWR9uZPHaykryD3gCCnjgnq7BHrCSsLekbsiUmB1UvqUTYJV9rcjn593nmZeL8tiq1kjngry",
  "key30": "gNyV7EGkcUqzSiahixQAKKmvDELtFJebRjhxv34MsmGsMmAohwdQNuVPKX6SHzT52r2eNTj1AxyykdH4KEi1nDW",
  "key31": "3mdyysbvkhD5sRwWNyUq83to7o8Gmtp7Y1VhtbSBa71Kj3HuLa1KqPnQd85E5yp1scNNVTTRnrGtv84wLKi1L1d7",
  "key32": "HRawk5gzUXbAv4TeN5Kn79A2Y2aM4JtujJmtCquYR14pkpDm7qbjncq3xPHN1DRxZVhPVr5U1GxnkWjp48Lm6E1",
  "key33": "5fsW92Fy6ASrRAaSKd5RkWnHw2y8oSWkodhEi7frLZjqVn783dB97wZMBNq2s2SDSK8Cs3RLM8k5kty7eg6r8We4"
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
