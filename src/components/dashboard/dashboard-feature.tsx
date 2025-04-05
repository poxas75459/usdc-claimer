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
    "4fDoVEpDAdWFCirqBCWuACt1BPvnyFd9g2CMUaMLz591PuacNqe4epsEvzztemvevbCyEzfBbqsUWVg5q3chH74s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45egJfQxgTFhHYm9Kcw59wsVjbWKrGa2dqCGjUbGAyfGj1gDMdzi4B68pHKFT5uGZDKSj1dT3ar2eModt5wL6Zff",
  "key1": "8Hrh2XPd7qv4KFCVGNa35ATzgC19xYEQdkyYqzq7nVHazcqTPgykxcW4yR7LNG48bJ9FMYya5ZQq8fFQrmHucTw",
  "key2": "4g1XMN4Lk7fRV9Pp3sAeJdKeS8Dtr7HonXMNb56vKwWBpApFCwyXFGmLcbwMry5S97w8kGxkqbumwy9gMMKhNx4Y",
  "key3": "5nADsHvsCpdgAWCaDY1JveGUoa3oE6BB3dHkT8iS5fPSbi2xEWfwiCbAeUBkckcb6t6qaSqrie2LeKf5zkQwkYgU",
  "key4": "5bsqLNCpit5HntzcuC4Cxkp2DuJFjM8nsakEFVmukdKLZQx9PZd7FwfTA7SHgRhaoRF7qgxzgiPsJLLMLrw8Vdmq",
  "key5": "3trVDiXXw8GJRf562Svsp8LRJWy9bVrZJRK4rGjMRziodmoHX7QaPMTDN7DSpaVUq9QeSZTk8TR61Jkfv2zLj9dX",
  "key6": "5VLK6xfPduxjz18KDxUbjPzyWzst13krXzmJepmgNtcJUaw337HZYbaBusLH4PMCRLijXAHzVJPU8Ma6tvW4xGrU",
  "key7": "3tAXwcNzWm8Hw2N1zpBj8P2MBCRZAzxRxEfEoHhZZUKKPJDSkG9cZxYwrqYEt8d3DymDVC2dkxrDgxSgvdieNGsr",
  "key8": "21dU1cmCXBefp1XCtegUKFfFmREtLBgqXMBaGP4qeDudAzeNNJyZhGJuETPczXtpvDSj7osNVB5tmqtVuPXvNAUR",
  "key9": "5oNpGLjMtzJuF6c7i9p34TPPLVczcTDGmFhne54iHBsHD4vYthPCvXSa7C9BG2hY3v5ANcpXUjCYLN7WrQMiBhb2",
  "key10": "5TBKZuKrbYsC3pHnqQJFrS5nuAx75uFZRdzPNvQ1JqjMm6QcgrDAbog74sLQxNP8R4etfynQtDLgycJXw65ADZDN",
  "key11": "4PUjzn3LFYbRvM1ezmqFjAyW9RGswZxUEwhi5v4AoExyq8y57ScEjebDEE3adRqJX3vNaU1kQP4yVYi1GrZr8geA",
  "key12": "2ksregZo4v1XFe4Zyrxj4ARSqKihcuQqYh8DAryApeWuyhLZpVPwgJbVHS6hQjAactgZKmb42V4Aqi3o2kh4iDpe",
  "key13": "6gooZNMFTadBnniSQmYmvcA9NAjG4GoEbMNS9kTTuzZrrYSHiACieW72wJftYv4Uvm1bTofyHMhxLRHFVaG4smj",
  "key14": "3Gotf7p7d8vS8ZqUJSg3KRXj95wztCrNZfeY7GupXvv9bZSce4om849vHuLapmyQtEQLCehVPZ4DbSsGC6mHXXK1",
  "key15": "2SZYWjVi4rtzmEgZ5hin3yrWsrHyPbitHx1WA3jvyd3QsKFyipDxFoCP4PjJ3bQ7GQw1zSg7fcKnQ6vsJMsa1ZJu",
  "key16": "NwGJEmu9a985Eavsro3aCZnvVkAHFAMrjJmMcgjQk7bdAo1dnwQ3Wh3KwKN4BRPJxQ99Sud6cybVfyHPHZmHpxB",
  "key17": "4eM4opRbZnfrR1jNoNTfaLZxtbhjKPnyMrBQDiDrTAvhh16hrJLtQrTRk65qSmjugYFyS4udFwFUkZ82nCeQemfH",
  "key18": "5a4bn4JjotfZoV8G9yGvRzat1EuLnSAnuPJbJFCJyejBvBJDxFqLJwHsWXQBP9Kwm3CfEtf1x5YQLs8gXqPZiYVZ",
  "key19": "3AraFjDjXzAiDaoUjEqNisccp4BPJ5Wv54KmQexKbZ9pAvHvVrLsU87QQBi7BLCH742zN3EAeq937FWz79b778Cj",
  "key20": "4JVJkEMSz5rWAzgMkgbfnn6RkkoHGWLJMn9Z2EbnR7kYQ6QFiCVvrmpmD2z62RWXSAWspWXcNYrBb9VaTt1Gc1Uo",
  "key21": "2HiG3evhLcskVnUwpbs9qobDM3DG5rSVpTGFzGV154rhPYkZ8z5SW7oP3qgYLFVnj2y9Eub7fjgtwvJV6SsbstKC",
  "key22": "C9iSPpNokTc3xRAKx5XAo94KaKGMPsQ1qzqBjPnYSisMdzWfnDYkuyhDVGe8PsPbPgPjtVY3aitA1dCvKvUjoy2",
  "key23": "38NHp8qVSRj9ncsVzcVe7qrS3rJuZtPT2gqiAiYxFHtKD6uVFziiMXMQfam7wT89pJK8NEkjQqG7J3bX1j81vc4a",
  "key24": "3PKbKWSEWwvN43ZEnAu3p9jXZUXLwtewQagEW1Pj8pskuKsUADjbnygA95RSVr4grFZ5NHPn1ufWeuB9u1iHCw3z",
  "key25": "5FHJPrwBNABLR7Rnjp4BKzDX2jbCs4YET2FyGkLm851T6tPLWhpr3EYeqio3kpGEmo3PsxiioRkNEhhZzSg5vWM",
  "key26": "Et1ybHdoh4oLq1hcQReyqSgDWULaTdUU6X1wMmdmZYrUh2PqUwnUKQuJafCiifCxsiioybgK31E1heZRHrjcrMV"
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
