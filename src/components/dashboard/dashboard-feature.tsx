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
    "29kpaytaoQX1AwvwMopNsdtK1HRELFmwXHvq8NJPuFYztJN76yVNRStqtNTmSwHeGBT2faJ95AJTuufvzEo8fhPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjwusP9Z1Sn3qK3kM2cUNotoNprmUbjWxLQQHniYxuSrQA3oyu8KJvH1TndFGUzvZCrTuVeVE5TTjHcnJ8qTucT",
  "key1": "3VWDiXHGESXxa4iQqRPqNe67zgSDs4bwAPppKTrdJC8d5hYeeYSjMKR1UTPiNpnWnQNmfowSEPPJUwibFw3gzAwS",
  "key2": "4qvCymuUbwzuLovrHd3vVShWxvGR9LJU6RA3dYu8krz6jR2wLmB3jkZkFsgiWRcF3KUTjLbrv5G4FReZ9ToC4Zzj",
  "key3": "4oTosruiCyfA1F7LDSPYbbcrSvvCE3wrJMrtFPd6YwDsyS3PQxuy9xzmVrxwDB8wDoT2txSQXEGrhxJJr3joYN9X",
  "key4": "58z7PQpymZfBeA8XRTvMdAx7dYA9Mi64QQpGU4NfVdeTv2iKnYsxwUT3sW8sjMNCWhU4fEPqYWyyvyYtBNArTxWt",
  "key5": "2CivjeKn5B7qQ9obhojWi6PBF3aSEXHDVBSqzaw11QBJdyrUpxyUTqm7wvztoWEFaM4nQRBPiRBhmo27JMaVCC5D",
  "key6": "5fh51xk146i3P45aCQbn7WBTKErBzggWgsWPfCssw9mSUyF26wbX2zgCJi6SVn4PBP6t5b4t5KdP7zzvzCNZSgWG",
  "key7": "5CHYAJMr1F7DUzgbcUzmchSAcJ3PFbrnmZdB1oJnaZyizZUyYUXVDPs2mBTcS5oMdwsi5oZeTqe12G9YDRcTj9Nv",
  "key8": "4vbN6cDrmjvPaZtRSDXM3cPDYkuYU5csBGs1Mi83DqPbQxrKvMa5f4QzNtW7sB52Tx84JoKM5nZVeAxgMY9HFaK4",
  "key9": "3dN7bDHFhxYQdnfFbUjvwkdWJySUUc72AhGUPurwNS3MBhhhGY43UCr2oAbacfQmx8ehfP9WhKk8b1mM6MCm7VTf",
  "key10": "2PZRKEXLPC4X4AiVE5twPfSw7r517TT8viVXhJnLF4zr5QyAbsvfbuF1phSKvnXn7nyj5udsrwUjPWnmTKYM48gA",
  "key11": "2yYw6VkWpc3tuxJydkjTYzTkDQtnHFpxr9kuYLh6K4xBFcWaw3bkRD5pUVBcbbuy8pxTgH2XZheFNwoxD7dW2eNx",
  "key12": "aHuX3dPNCsovLNXx5zMcUPtrPN829H1LNvKDLw3drF74EABnH9UVj4qVgTemURo8FUBn2241seH8omXwPa511j2",
  "key13": "5Jv33d3oVXfJR1YBnQRCDcAcFSd35b4SMurGTbwygWdnhhEiy19GAxEQcZRuoWWGNWQPHy942yg6sUdM4uXpbnRZ",
  "key14": "5Mk679GeRdDM9VctEcKiFuXrs3Az48HRxfeWBpoXh35pp25QgMukwvH98uLRbmiCNhyqEq68TbTupTGzsoXzUd2A",
  "key15": "4swdzY475mCGmSRCKd2aoLYfeXPSXx3rz8hnugDj9VUu1cXvq9FSna5Wc2g6fsh1trKz2cH4ntpFkxV2GhTf3pZw",
  "key16": "4Bpsu1pD6xoddJbd3ZXukqziVta55obdDhzEc8KBdvVp5M8QF8P1GZkuSPYykt4xZs2VdTskmiCPUePGBwrrxTsu",
  "key17": "2NLtTnbK2uKVV8jenzxXZheLKUJ11pE4yBN4TvfZYw2zSsBS6Pt9iN6mTcNcAAqrMDH6E1NqaZqjBzTDCnEUeufR",
  "key18": "398FCJJeiCv3PKqVPABVnGzHaKJfQevN6JuTuBfL7cj3FvqSbX8QcwhveNz3vaQbfYFHtfwB82zySuzbka7GmCY8",
  "key19": "3vcj4KHnhYnXhvhj1EFKUMYDqxdm8PUieAkcRQetEJXpGqEtp8sZGZ8oahNuoHSg3uchx1A2bfqpKXRZkLAXfU65",
  "key20": "3LJcVRpwYcCj1XrEry7AECWVxKCVsBHmMehMEzwSk5dVTvscGK82UNcbUVqiedm2pnTNDu6fyZZmv1KnHGntUGPA",
  "key21": "3PFNpeqifg1vzouw1NWdFywZJixbnj6ZYPdas9YxhpduDa7827xUAWX8emHrjAX3U5zfYSj7py4iRZKXR73P7fDJ",
  "key22": "2PiT6ECPoNSte2DoNEFsZRKWzfjqHr6ygU354U2G9A6kwNq9GGziPi4LxUh5UqRc7hJjDkLz5exEfF6fD91JL45o",
  "key23": "5jDPn1q7wcQUUQC3SgZifWWEoAqJmwaakPEyFbHmqSCDKc75wAbdYmkXQW5fE9aVgjVe6EkmBH3CbsfpZHzpyvNY",
  "key24": "3jNJ2LcF89vGBXrYvYhwqSJbQNuAHE4skMKJFNVaczkTQ9esxxu786oBJ4XStmb6xFGgzjSndqsZPJ9ga2eR8Udg",
  "key25": "29jW2v61GhWKCGg2Gh8cPYkzaNB4ZWie6c7N63yHmtTioDnnGGg77qYKo1W89G1BRpij2wsM5bv2zqMdmjQWyQoD",
  "key26": "MCfyaZ3ysg7Mj5Lim5UxWisDYaLbuNgz8kZw1GmUv7hbtHmoMc8fvaaoTXNrtmnMnRHUWhCXm6ygr1xVXULXXqi",
  "key27": "2oXya95tVzNy5bkjWwKme7t7s6mYKNL2xfu1PxfqqHBfm1dRdQg6ykMrGRysDNcHjziK1PSJesJHA5hFXorZUnfr",
  "key28": "3iCNCFiefbzBRQLKiofrQZo7n6XA2uu8hSjsBSctqcLncMobJmHVATwbBwseVPK7dboVA2xYUNKXcxBZAXkCKBR2",
  "key29": "5XxJUKP9vbSUcUzfFzqq1CJXs9u3z2ACgmb7ST4SY73fPqGDwtxEdk4sKXE8tNix5kutTcGP5TFJ1sTXP6uJjMFe",
  "key30": "469VvwmHLfBd3wM3GzXULYU6qkeQiFQurjziCpARCSsVQ5cbcQEmbnjJf5ZeVqurxddcbtzoG6Ve68MELi3d5D4V",
  "key31": "2N6YdT6sTDa8jKGuFYQEvHgaqN3NAcdmDS9RpPug5URNbJ8Gu31CNA6AJ4EkZ3kApdzrZQsRi5LDJ94FFRsQHXRk",
  "key32": "4wKBmnuGZPeg3xgAK4B3NLDvPavDtRj29uicpvXACuwfA4PLDttTYpvWm3H31MDFLtLDXpXQ3TkF4QJnkkNh7nzP",
  "key33": "TFRdGj48ombjQRoGBRKyVJ1inuoBnrRTjakE4rDJFJaam9eTo7yUd4iPR2DRxLSh6QAayJRtGsFZnMyna92vk3o",
  "key34": "5BVZcWBhZpDLCJBBJA19yZBPbonmSa5mkfkS1rsMUvzCJKnqSbqSDgDsWorkjAhNtJRPW7N1UUHz6yrYYGhpy7pq",
  "key35": "UevBN1BD8X5vNJoWyzpMFhCS5GPMrzJJKb6nekfahxwy6dvzeT82ZxrCfTW8PdmZfHrEEd2zNSNaxxT5MSLspQ7",
  "key36": "5noW5kYsWp6W7TfoVAEfhWDPpWkQ1ypjjb2oJEzmSMS6xESGMVNDcqPzrakzjqYPikpF6on2ebUzkPmiBWBTxaDF",
  "key37": "5DN3YqvYaE8CEPw54xaQRWhfWkSAKmku1DwF7LiC6ysxYW1qm8xoQb8HNtVqGnTkPPzXfHcHQryUWFRKdys3hUfh",
  "key38": "58m1tKQcmVhFnvB9VawW4Utqpt64G9Dy1WEmF161Y2JyoaE8Fdwp6W2snR6cHefKs4CCN7saEpBGfdiSgc4Yvd9G",
  "key39": "4STcopW3a5wF7D17RGAvNyg1gWanhBa2PEoeZWDDi1A7ZkSUsy4KyMMV6Xy9yCn3gVTskUfABfxdHkYQ19fj4GwB",
  "key40": "5ZSi27RyKg5XpH5bQbG8Nt2MGq72K5pQRK5vppikGMkEDiSRKCnkrQbtnwHhuWHzRvvcsDA83Rww4euTgH34jzM5",
  "key41": "5kpuMP2LhjRhe82ty61kddebsqad2xWFQ5EiJNJ9tsNBoZ8whPeu4TVcjPkYnc1yTbHVhTwwvFwkigR4HEcCahyD",
  "key42": "5BvFwTJ6YjkpuGKnYUn7A7Kv5akHVx9TWfR6GdN1q6nzmD7ayuwPSzmxpakYwdmmHykdXjT1p38Y2KBDfQtVjdWo",
  "key43": "4GJaMGAcxH9yESGLALNRNW7jt3UUt47tidfRetmzThwg98v1kPdq5xMW2K1A64RsSDbw6cHXJvKqbkBygnHkxhuS"
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
