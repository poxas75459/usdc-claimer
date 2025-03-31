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
    "2hPMKwcjmu6nC8eYKUVM7Mm4AYY3jrM94ZEy7zGzPkKcyqeN38CshSGEmsa1pK4nE1avbjFu7UVoMrP1G68TD3cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LuLFhLA4EzPFYXbt5RGthbnXunLodptRuAyaoEJHdkzupFQvQ752kW2iGiopRszQMZaHL3kC9btjtQjsNCDFK3g",
  "key1": "3rJP7wwZXhRSSUqQsvz3hWR7b8B3J6HbAqLtcH3Fqbp625YUgPeizNB1M5HJC1AzEGTZv12X3SXMwKYKNfLz3uur",
  "key2": "34EHup6ohi2sFG1TSw2pr7XdDe2LXpFxTwm2i9zGjoaCY9hngRygCEg39ExhPNnCnUQBTJDY8uqYb3bvyhftT7ag",
  "key3": "Sc72ZnFNwFqoz3XtWCBm51dkKV4UJRiXy44NAfhDsXrBqkXJe8vJB7yUFw8E3hhJ7i9XfM5xuyJRayp3gaymMpw",
  "key4": "25kxu35QrPk45yRrtAgx5FCdBrTsinqZw3DCiaU2kP2YiV9CGeuHLgf3VcMLpZrTSFsMowJvRmLYZR8LwY2KQ6cS",
  "key5": "3nDpqEc4WbgjB9xQSV55kNVHkZiVhmuCPFtaSXuxctkoV8o59vBjkNzXiLaVSoeU4YHChp5C8riBc2ipkqrHUwiP",
  "key6": "3ZvPBDMV2P9w8LgCEuY2FpeTp2pV9ntCGyLNBjQpRcnQLvEwBBYTgM2Dg9crjGguawKezwj7iQ22ekzfMwVctzu8",
  "key7": "4DNxESa3EPGtBmoiamVmohDe34GXNc5onyHttNX6kNoswTudNLeajuwTJ1JGxf7nQTa3dwn7bQbPTcpkebi1xQWg",
  "key8": "5UWZHCsBrnY9hdRazFq8Mik82X7PubzM9GB1TPui6xdWStJj2Bi7Qr1LmCBfFZw9bk9VLRMu6sUXbbVnQvXt4seW",
  "key9": "3DNtdcKd34L6tXPLByTzwEqYMCfRfsS9egxpzo4vAz7MCy4CPpvfFLJv1XgsgQ631mSP6QBBEzw9rxZq18Cyggqb",
  "key10": "4cJM4xBA87VS8woaT1spdYGYbrtTnvRP8qAA5jvH3yddC8sPdfes4jdvoZArtqWT95rmhfFneYWXmAFs8gAu6sgc",
  "key11": "23gBsYBLsCuRtXPCRmaViAUTCZwhDpqCDiP4aMZbjKpcxVTpGwWn3oAhb7DiTkk4M5W8N1QhqJa9rVYERQY7KqpG",
  "key12": "cjZRAfXL18qgU9kAmV27QaeYXj3Wsk4AHrdDKuBeXKjPNDFeDcn8K8kSkU2uQ9TfhBkqzkk6mvQmq8aVatrgm6i",
  "key13": "3K9jUs89Fc67sCMRYhXw1voMYD3QDou8uPCQzSUvzY3gxbNvCHSp3T7Jfw6XSm15HCwZb38Chtf2XFbhWRmbgpz4",
  "key14": "Xi8bkiFwj6YNNGNPHyjq3aNqgEM5yJTTWyEGQwo8Z7ua2aJkr9AQrba5YkPFHJ6sJRJzv692z4cdLAdZGu9WVan",
  "key15": "2qQNT4828AbXyy9gPgfe7K43cnL1niCqNMoUBxtz7LCJxXdutVw3CN1mxWRcgzwiWkiW6BqkX1qcb48m8UfPPd1M",
  "key16": "5w4GJamjXTV8Xr5JZHH7j2HDtCFjg7jK6qZa2aFxcK6wgt3ebjHCESqnkbnivwBkqDNFNYhpkwTu7zLQypQfiBZt",
  "key17": "3EAknamsvfDYfFZZ7d3zjeoPE3hLiUZPVxoHcCnjF3p91x6n7gTLw2eUavr43K7NtiimsWDb4JxPgBjsD65E3EPv",
  "key18": "5rp6UHVoNxvfSqZZ83knSSm7cwkBTGk1qSx45S5GDJbvGrr3jGRn3sT1y4Xms5bJQVfU7fHG9T3gg9dmdejs519n",
  "key19": "2gQe1hQFcJ5AjuZQVehbbd2pmmA5zEsBPcJb7WF17B9uLKMgtA33MPzX9CAW1ca11PPjTTCCoTvQmRoQtP13e81o",
  "key20": "2gG8mbrGZS1VP2hHdKsMdubB8gZ8Ji3ube77Ap4YZ6JEv4mcEhL5cDC9RT2GmZ4pxQz5AoyYe3iTYJCG9DauPjJm",
  "key21": "2BqChFfrq7znCbW62DFy51jza5srkMYsnTEiXKw3f5xDtZDBWDRvosPbvaSHoZq9FGbfwMnpVxGd2M2Jsi3wkyia",
  "key22": "4sHG6Zg6xyyPrqaz8y8MW99BGvhXvzUoHKFPntMi9cZBvxhKSSWg7WQcEm72FD3bGoD1iiVUuN5rc4cAWXULw4R4",
  "key23": "J3n2crn5Ro94fWfzTayP3MJLC37wnDa6p5YECMJLxhNrunXnNRG3DN51b7hsWtNd1JY8AQH44beJmXKfrUc9op6",
  "key24": "2z2ozp7Khab2nAm8heP26zhnGnmRMLGFpZ3wb9rKFWTy3nRu5g44hStwNBC3iPXyzhznV7DQwzwZ24MzqHAnVSuH",
  "key25": "64ystVnSooWmEqKNcQgmCpWfEZdZCpY96WqnZq2GTCJvFq3oCtgq4KA18a1DamxQzpA2JVpRr4RmeyZhHTd7PATW",
  "key26": "3ag9YNpQWCYBsYTuUjHNkcZW11MPJzq2A6mqdaARshGQj2WmbCbhzu4mbtt2yWC3aZY5fCmKqA4R73jKxuPqZUYf",
  "key27": "2DtbxAprmebegnZ6ELxf5wvs7bMCpWXL3YEQY5uijSe4y3u93K38fmS89XUUPcnnnkvVRWvpDRYs1yNJnsuQooSc",
  "key28": "2xkALVtbtgcba9aEqyDbqcAbJ5WzEeGxaar9YBajNpdQfS4dj9EK7ZqNKpg7Ng5UzT4nrsr5Bgz7iBsaPeWrGpr1"
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
