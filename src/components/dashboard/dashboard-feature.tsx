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
    "3ikxTMLCdXBrcgCTp8VEzrhNhwz7iK89vPKRggBYmc8gh7tkk6Gcy18NbPD3bg9ZFNECJnBdT5CRFQNjyNcm79Mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ua5rNjZQ97WgWi5NscrK8WqzusAm6fMZCeMLK63agJfKz1PipPHeMTsDaKSVKETdtjKzzsQJ1mtMvPdSxXjuqha",
  "key1": "5dzMVv8nWPgmRuyAewLCuNb75Lkxia3aek4wHmMUdNGd5E4V2wdLfikj5yYVm5BwzbcYNEt6jRqSUxXbyyCkXLda",
  "key2": "2jdQUjq5Jw1p8sT8yLKKjvQ8DoqvsG8Vsm9b6ckz5SEt3t8vqZF1HoTRs7ehiFMGpKvi1KP8FCvF4eX1RnZzMWJ4",
  "key3": "2tvUVhCEKHFsLvbb91eZjRpoqscvR5pYuSjxiyFFBP5CPH75WihgytxFUu52mfQ9QhDJi63ddfa9G4ecF5HpRYFJ",
  "key4": "4KvHVFQzJrCkdupnBeUzHHxo9iHA3AYNWo64yi5GK3KHaNDAEXbdxFvXgYLKs1HsJjm1zXuEMFQDCSJsbCA1FHnt",
  "key5": "4YeGihWxpceKwwej7wSJo2fMHSZ66BAPhXZ4e4hUmAykFExUcTmGXYJe9zZee1dcLU81bx37gyN9LvPxF9ffN4A6",
  "key6": "4zWLdrXBJoJ3oKDtkumGNsn2G5P1H8GmsaqVxR61M99ap6JsAqQP1Y1tAhhsNXCJxPMT1TRYUYXtYECYUt6U4uYd",
  "key7": "2hGbJLykyoJ96NjPdrwSVH5FXVkbxY1s4oBM9uKYj88xkfVdQwYUbmyQXBZs4F4LSpNiDidrdQM6mxnnJ7wTwLKH",
  "key8": "2qpK9Vg19WWGvnNf9kWZBXGchRNbqh8oiSugMEqqSyji92B1ziaegdEE7sfwzgsMKj17LX21LXVYfdsLxXyDBdHs",
  "key9": "2Uyyu3dWFi7iavUYYjAKYWHVfzwr4gEJKNMBwyJcdVxrErgZDayr2oaKVM3fcTYe1fhF1mLxbbuXgFNNvTmB6MTd",
  "key10": "4iyE6B7GYuygG9XDzqtVncRSNwFc16rTtG3uqKGSNV7MS3gDHnB51DyuPTBp5NX4d8qcfyBd6UkDY3EyPKeNSTwE",
  "key11": "4UcQDsX3pvasD9k5f4rWmyCRjjgTDpbVEnfroSZ5gFZzYzMStdPRBrWMk6WkDbQcnTeZsDFkyyU9vq3utkHsKSzp",
  "key12": "4u9efJU33vvKJpJNFFMYxsphSgpeHZcKN6cDLdFZ6U75Eomt1N8fVBWFY3sh1sHw3izU2owpmqhxsHtxASeZAskU",
  "key13": "2V1kYqh8yZ1MrJtNkuDacty82FxZnphgyd58Z9REeMD2npAPzaPwbYe9jQbL6LWajMbSsY1K8Bwu2Tyn5LvewoXJ",
  "key14": "5EffE2tL3jzquTfDJwu3rtGb7N5i4KgciQF5afwjCdwh1nXCnbwAJLqgjgQcGZwGYhJMCK2RFAk46W9sZbDhosSc",
  "key15": "2fknn54754zBj5tJiFRsk19sFsMw2ei1q11JooANdbBwCtoKmqEF19fBPp27jmseXWB2VxePBDg1kEWuLGgTY2oG",
  "key16": "nxPmdGLQ19qadZL6K39RvGYKjnBcnaei5YK7BABvDMgnYiYSjos9c2ag24NtmTYxjyqPRivsEdNvinrwdtiXoqr",
  "key17": "2KZZCo2LDQGV3CNi5UVi9ttpLT1Dj8inoiH7u2PQT74UsdHcrv3T139RJ7cZBhmzbtLuwzMSJduwVb2AFtHzHykn",
  "key18": "3b6qyVyT4eQV2UPSGEkLbsaw2vogptCJ4BjGx9A4iopQ1iTLGd85AeFc2ucDed4nvGB4iU2MjEUWHKdq2xWC3NpG",
  "key19": "5V7RFiunxr2VwDMuUQMmgceeiEPTEtKrV6QNChsPGHT7MdGoMwY31gePa8xFEsDhkbw87TCRBvL1tdmgw6SVDfHH",
  "key20": "5CHzjeEDJzvJcsM16jWJ9gm2v1dvAM3kA9gZhtGgcSUcgwuBgWZvPLgPyhSXoGtiDFupxbqi9ngPf7FhPzE2JuK2",
  "key21": "2eJCshVdS5AqhcNHSPSHcnvkBhWyPc3z9Ni2o6Uf6j8g4LV8Ns9VXi2QshShENQLrdYnepbLwJK4ewAdDcdGp6jF",
  "key22": "59jP5fnZxtvBhXVMNdHvsu2dBTvVwAZjgGtQfaoeZu8buvqXksNdKLQdR2tFqqqCw3u9f4DcZRpWpf2DyruMkGCs",
  "key23": "3k3HRq4x29FJbA9oLrHmVHZxZ2qeumBVjBsx6xSqZsSKpVWZVJaRKQhYYrK95UhzQg69RxtNBC8ZndqNqeAQDfpn",
  "key24": "4zEmwrdjPWP1BaC52nrEDtUoBvkfynKK1ndQN9XEahA3XcspgFUyw4RpmqHnAgNaC5EthbUQVHqTVdfEGWF8Z8eP",
  "key25": "5SfAyDBpoCVYEE5DBsZmxLcrwztRDoJP7EPtn7zvqWMVY4FQ7oRMUTEP7tQe6iWNCPWZS9k2skq6LuMZUHRSfEfa",
  "key26": "3kyx36vJYkxfHGTaiKR7FumQZzuLPe38ozLC8W6zE71tGpG3Ea8SUDza4WSRCNnwp2vi3nbxcGi1pjuXBFQMw7jy"
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
