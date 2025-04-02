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
    "3NDi3imBpFv1d5sCxr9fKSyBFRWch2BBMD22XEcesHswvuUTrGExPSKohqmY8z2cs6HQExwsaoAh8JH7MoYRg4YU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GG7y3gqd5XEs3rtWBTLUb6QfYraM3rcL2k85aErkYe7taNpVUiM8FMn5nTCeDAuwPdSFRLzsDyizE8ord4ydb2L",
  "key1": "38bScXcXwH32AJotUuH9ekMy1CjzxdkdvvsUiAc9jVu8Swb3S2QY5HnXxWbu4deaE7ZJ1WfeUn1EWxZE3YtJpn1E",
  "key2": "5qVsd8Hf2jdnY81bFmTt8YwrbZ5dWbzMay2jDgbm5rj7uEHTtUk5vezZLS5rAuNeM8Bpi4jsNerkLsSRF7YmTYr4",
  "key3": "4L5QExCJaUxXDZaGP6EF4vDiTKDZBbJhqsH2fvKL7dgSpnVaDG7KccVeT1iDWNSmR2t28gFNu2z3LCenXhQKd52g",
  "key4": "4AVyC8iQwmikGVzU7CBHE9iGyjZf7Ho3cgG4FDQttJoaLANsSfcmCU69FXsq4WeDcwCucV6ZLNt1oS6R9WgaF9QL",
  "key5": "McVQPS9XyTSXqVJmVtsnV5TC61WPqVBRytNnmKAzs1Dit71fneP4mXSwfDvRkp831di9svghT9w8jcfKAXpm68V",
  "key6": "25XyXeo3rRuYGbKjLNp72RsyWckedaEXkiRo6SPpP7AQMhQQysB9fkz3M3oJh2NYMhAemo56HhcGiCQyDfWvW96A",
  "key7": "3t5D3kTjBdcTstQK4EXd8jbXwbzZCkj9f9RHMXdvAEdyztdNesgD4h5ZbdmYVmsHmSYkiRihf9LofVxyjoTjBfDC",
  "key8": "CJALgeWh5prPvMorjifpxiry8tKXSnQRVcaj2GvK36Qi7DzZBmFpmyQAvHSmKfzKQsUdxwpswUvfEXtagbHHeCe",
  "key9": "48MG5XpnLbdVVjEYRQrYXFuC9WsXSycL5gCAoZTuigf4NUD9h8FygggF55CJZkNb8SxxEtJXKNoZkEhc6n1mzFqn",
  "key10": "Juz8AG2J4tMEsGTJp6ZnYwUFQPRcUmqxwynBmLhv3Pj7RfFutdZLc9zAazsbw7LMJ8v4a8rxs4bUboG1Ztei9LP",
  "key11": "5gYaqi37cipNUqgxtnrW7kVVxj92JPGfeohj5yDL4W9icgckqCZnRcsxDTiaUSsk34sFimru17ZqYxR67xPjhEN2",
  "key12": "5FJvkkJJKUpVpsgNx3uatGPQAtLdhPTBVt2MAmqp7x9n3u5JzUd7kPLorXXGYc6YMGUbfLQUJrWNiSBjFTedKbV2",
  "key13": "5jtZ5LmKnEomcmr97KVkhJQ4zWL3BvRogKtUHre7suuzHEQKbcW3CqTSKD27vbm3SZwu1rjdyHon34jhAZ4jvrcG",
  "key14": "5DS63Cp9Dg3CUTxU23L2jCwwS1rXWfSyu94M6LeqsdPwrbJA1UvXM9XoFXudbmYRusmX48VQWYHDJktoy3TntHVW",
  "key15": "5fZa6GFuPzdAjTSmrnc3j9xtJPTzADK1GoUCpdiFBqr1wPMg39132KJcu7XXhV38WQgJRWTViKJ8tBVUnmtwkFDy",
  "key16": "4K4eeZAWW1ieZhLfadJ5WVJ2J7NyXfaW7DPLBsYVswFggWjpUUN9MYNikTkNzPCxRRSnV4qN5Cft79bcA54uoEgq",
  "key17": "1xf7C7G3o1NGUWKgEPYRfb1wT6GNL4kxfMULFNRXXtUhPnMBbeCArjzC1owMgodYat9K8Yu5vPsyWpGLHZsPPat",
  "key18": "6SfdeYEBFtpJ4KtAGf4fEcF5MADrv6a4iVDCwsAbNGxkpZdqbdrqwacwZGC8iHb2TpGYQt4oMy6ZPFjT2WCAetc",
  "key19": "yDzeSpvnmcHVeZwMs361o62fSaCGMdWT6dTNoq5VDkFE3SXp6bJU2ENDdy3keTUCbcQaaLzVUWMqRgWpbu1cLNj",
  "key20": "5D7HNzoAJAZZtDRJ4pUroCkf83angz8cpCbM35YeS8JyLbZ36kaCfvGAGanwRexmMhhs3ZBaH7LV4XHqqfUBRXGs",
  "key21": "32MPHRrX91VhiBhC6qBmLmzQx6HuGTLfACj6Yk5aAh9cdNgXcv9TjUGrMRzhgVYhvLidzz5fov9812qsfXFiyAt1",
  "key22": "3SSpJE7An1uzy4fuV8A7R9KXcecZ5ibDVzVavmfSskddHiVjLuemf82nSsTiSsY5fwDo1ikuPRgc2MNx6p63CBVW",
  "key23": "5ThjNpg2QJ76zckJMpRov4zyMejiyxMDUEzbJJ7KmS9Dv5gtufCnSENjPkQXqLN8BbaqSDfFdxiM6Y6uue2is5or",
  "key24": "27mscDH9VhWDgJDwF5GT6hgfUtGhnALRob8EeTcDu28JPacTLdsEKFptgfphRZpLgBvNtAMf5K6PUWLweRprbHEV",
  "key25": "246aDkU6yEuUMbHNsJZre72EDitrUYLHC4qJcmMos1kHci7Qvnmy6vfGsgTR8RphC4SBmxxTye3cs31RCYyuAbA3",
  "key26": "2ZwDwUnNyXpJNmPTjNNNaCTFZwgNXV3Qr6Hn5nneLvkWDJ1jZ8dY9cn7NgE3pU8GNSKjGSQmnMkKBLo358NJAnBJ",
  "key27": "tLikNtd8CL3eRnQszayHkQtY6taChkPBVZcRKcT79KbaH5ssVxggHLDg2XWFiAjwBhurL37HqMb5z4HSHXySDQj",
  "key28": "5kBdoqGEBtqZXhdJykgtVr8LXwfZimYg7f4U9teAEZvoYFKct3wEdkk2Bju2cJf2Gcxp2Xb3QqsuneKv14Axtqb5",
  "key29": "qFBbJX3gyUz8fnSQhEQSf89BsEeyQUSBc8KjjBT5nk4vJJuXsoNB1NTk1qJfjfsY9S1p6dGwNGidToBu44eaLH5",
  "key30": "5tJQY5nJt5WhsYxDPxLqJ1qP5Kbg6GZJBXmhQPsdqrcLqiUPVcPo6UPDKYagPnE7Swjjexc4hujtcVjQZFwpyMEj",
  "key31": "3ECyxNm7yNBrU5ymreGSL5qgALWF9xCPxkdRzYvhXTBZyMiJm1dN6NRr1DkJLiVxsxQpYKJXYbnZx6Zh5iFUhp5f",
  "key32": "32xDB74ko5i9pZ4anetsttNUiopPxj3NrzARCMp5ehHnZvZoRd8chUkYMz59DfFx6n1tRgGsNXnvWLURC5MKxyDk",
  "key33": "4JqN7doKR8NN9w6FasuairRGLUsXpRUG34idaPEfRWkYZsrj19ZR49wBSndMrFKG7uckCWc4qJGNpb28Y3ZmK32g",
  "key34": "5A2dJtuetneR6HwzJTa7KqKc35fgamuDg28C9wNukk99DQZts2AEWQfqknspvftCrYNWmjx3CQwRnYn962ELGEi4"
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
