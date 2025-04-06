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
    "46NZP5uTGKPxH2K1AaLWPMBHADKufahgtGcxmGYNRiRYwhF8LcGKitFP43459dYkXmAj9Gg339fcn4ZvQeNtpi5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9AWv52TAi5yLzFBBXUXnADtVKjhRzrf36swKxPqTxsM4XEjsdP4FdDbu9PqbW9fV96vBP5vfKGC6Y9PAqni7N5",
  "key1": "4qFLhNHeBm67imopPC8Gsg8CKWoe2kkegX24U9qoQzy5by7HRdYBENJnCSFNT3V1a5sPhFpqfz2kXdXMwfYDV7eQ",
  "key2": "4Xpd2dSeH11CK4tjghfx6zNEUibjwP44XLYuQArz7zCWDLEgBRXjHFYBKCqdFRtAyQ2mqH2tUDqpcD6nZYX5pHrk",
  "key3": "5X9adr2Y4mxxpKY4jr5gDYEgnx2umWGPWu8qeCWm2SrwLFoJNk21e3PQFMPCLADeiNYMvdyPbXXKx4yBDbKfEdZr",
  "key4": "T2QDfxmyD8Z14QgsqBYAkGvq9iACD7ygc8k6P1tGZYR7iPJcnUtvmZpiU7DiHAvYgpSSTGJbdtwiT76Tu5pMVgu",
  "key5": "5goDpk4f1HuqyhGdfNNgwkKkuBmBUaxKyLrkcyu16adAKeBTtLAxHaqfHpY8Qdxpnpsiu3pR9MGLoGAnrweXSaL3",
  "key6": "2iSBm6KBEuR8RjtMgsHMTLEN69iiAGNghVYAwdAT162cvPgQ49fAJQyaQCpxFgR2wEXvfR87R5R8z5UTY1UGDBZC",
  "key7": "5LxPee4vNxvZS3KEnt7qVaxJzrmUai3fZignFdqrTM2WhNvFpjAUwMQ9Yi1v69reB7qDvbnEq1mfVXoQNa1smv2P",
  "key8": "NUWfUnerT7eACC797rXK6cHqC6NGBzUH1xJtMpwsidk9iiQ8JzgvLrsYyA9KLDCuBpXsQDShGMznKCuw25AuXMz",
  "key9": "3tkmruU9wySHuBXx9H6d7swyHhU768dS4c3hh8K86uH3QvsPfG1DK66HaDTocjruKWmV5RwKAx9HLqy5K2Dw9oZ5",
  "key10": "2jYBJMpFWGsFDX3GCaEgTRL1YHma6SZqXc1yGRLas37zQ8LCYD22ph2SVx3evS1yGuY3DiMmLFpjANYyCPcpkMvM",
  "key11": "5eJyXN8dpb5snUtepESa92WnzV4wZEoz3vEHrkUZbywJGFaRk7Nasn4cRei6svzyMwMMnegWAPwN55MNdSsdJiMt",
  "key12": "2rMxDhKi7gQFZG1PDqkbBhW46uquZ1p5Emh4sJPAqwrb3rAMW2FqLyTV8aRd67DKsxu9ySyZhbaNynm9QGGtXDs4",
  "key13": "2R67EhgmoNa5ohemgQizsfYQYWAaiQ5kaGr1R38iy18hoheVk7piSsNsiys4BqRKtycXC1szP7CTHbfFNzDG4r7d",
  "key14": "2n2ZRjpaNhDRkWVRgtL3YuxJWKephyUETZ2daAZoP4hTpRzZuu4jPeaufbAfpBNvoCz2yoJTu4QgBFqsc1PaQbU1",
  "key15": "3uxJXor4d7RZ65KagnkwD1cmE7o7us1EFpD8qNzskcyrWViJDCBy6ZezfzBtpwJoyZPqLjNPunNEFUqCFvrNvV8e",
  "key16": "55bTpaVKRmfExBp48KRg3JnWfAPXAYxEEcn8HaRjQcFTvGApWnJjfStidoruTTScgDP5pWy9Dk3T8yhpNv9EBbXn",
  "key17": "bdPcqxvvH9xKV1LKtgwSbSX1C5yNw18MMWhR61af2JUKR9tYW1Wg7MiSAn7rBS2ykq8i6JBHhU5jRiMcUV2GiiA",
  "key18": "3rwMaKFMCJhVB33mq6wFmmNy5JG5u6DYdYbLdQUZy7uZe64WXWsEtg3mgCbYWNApuiBYMw6avDMK9bat755s8dsy",
  "key19": "qJJTUbX18Be7utMcYHb8dW9d8HLvXyvVRH182mJektbxEaATczAggZB5a3ZBYcqjtsgRzczD9WuGMMvrqt8qP5k",
  "key20": "3Zh9RsvLFzoB1MGeTua5BgMpgYCXp9bWu6WGXRmWyHLc3F5buvwz9ytJ2Dmju2pqD2EThC58uC8k9cWV2r9DHpas",
  "key21": "3fyVBucFDzaHHwpuWA4zpsY5ojVzU6XvAzBERALtvL8zgEzuyDDncoV1toezxQc89mV7KoveJTUYatq3CShD5fL9",
  "key22": "5sHr4G8vL5vjK9c5JZvRY2DhCe7PSd4ZL152NZPfDmSQ1MCJzGzXaXTXy3mAtwaPCEeDMKohU1BjLykxd3xw1H3f",
  "key23": "5cidNKQSYAccz1VRGUutKx6PzuCk5mzZrBgKL3Lc1nE7qWa7C33mtzkGYV9ouijuwbhSNYnr1cdSj6EFXVpYjwHU",
  "key24": "3ug4ZGLrzKPrAbWeCVPxwmWqbMXvST1AggyJwX5qBk2HNFhHinmHoZncUB2p5cHbVDLpX6QUpXgHALLf8uNJhupB",
  "key25": "bn2J2qu5Zj3skgibZL12LGyQjGJiT6WxyzV6WQdfSYwaR7Fig5S9cN9Nd81WxVDhexH3gDTSFhsR1MGaSxrRohF",
  "key26": "4XuMJQDeiHEfr3C2BwWzaawhJQWTQCJvYeZuSg8C2umqpTJ4QDUx6SrGxAaPbdooQLFxz9y682t39vhErbzZk7cB",
  "key27": "3oZ7duRherhYrssyRTVJKgHeQ5iARkXD9o2YQhwnr71iRcz5AYbrdZwATxQjniWww3r9jxejZp2spjQ7M2ig2kna",
  "key28": "RDnFKWWDRkcK11Cb2862jqq4mpKafLQL3c2G4TJQjZggrtfgEV1Da1UV9QvpN6vPEZEPod7VNiKYpd8ddN6iNRR",
  "key29": "5o5DhptFVrQECrrpEjDgjCypGAC6SgsAGtp1ZsKtubbnfh6VFHcg2v3ygud7HR93ndD1CbjeVeSgVXgAx1y3kQwT",
  "key30": "5pxEkuDqwdtam3jAHBLoxVcQXAQ6p3rUug36gnnCWCvrk8uww7ZaZfXD5itzHY2M8Umh7k7hqUw5GQb2BHDrUwde",
  "key31": "ErD6pehAc1ZknVDQ7gvWy6xwMzmuNdEK5P1LyMRwrLttyqJV25mx481jmjBj3CcCnXb7s6fhFR6KuUFB2JrUGvz",
  "key32": "tw6j7VGBbrHxhkgzWfSRZAkUbdRf8KhPoerhHN9K4TknrfcupVLUxuT8fR569yaCHRegdGiAAb1yJ3SPDupyx8o",
  "key33": "2zTD8js17g7R1X2QzFoayr8ht2jUMpNU91GPq3vHEstTsH1YKa2vsQd5HNisHVSZ2mHG8UpJV8EvqTe1Yw5BbBBB"
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
