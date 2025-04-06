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
    "HYde8gnjeYmAjMn1CpWeWwyUbF63ppbMFnaeKkb1qR2WtP5UEyyoz2Mis2esQWN2hAhHrxxPf996Jnqgj2d1g79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWhHb4Ytn1sKFjCLLwiTDmFGGMjNWkER2LAUpe4AjUcjqdqQSd6r4G3kQbN636WBBsVDnwWLdu2XjC29h8wBHBs",
  "key1": "47W8pztnwchsGWwkkB2NhAeEF3mRX9TBjKKwge81oisV5PqGycCU3WoTqSavQKRthyU5hEaDd7qDWBQ8hLFmPBiQ",
  "key2": "4Zg2HMMMwhQ3dfgR7C8GjFV3zwuQuMdxCJSshDmzqSHVmCrLP2VeP9ikCn26UGtXmJV8FuZPzNwBEzAm3duW7Ebe",
  "key3": "2ZjxNSHdAKrJgGQyeVEVFqbnXd4iL3HSj9YSPfXchtj1cggphamtBUMfcX7nQe1fzkum1FLy6n1BQdU7xeNgvupE",
  "key4": "Nf5MkE8FdkkhxFeQYtHSipUjbdDqJntf3d5QdeVqCkJQ19gi6t7MigXKKNf2cW57SGGbCPhz4kj9KzY5TJZEJ4z",
  "key5": "5T7Rc8RTUiEAcQWBviP9hGcctcfZRSKogayBH6WkQDYC7HMHvA6FkYkSLf1TTojbQeA4jbvYB9vxbrPvtywjSwFm",
  "key6": "4FRMchjGeJkKjamheAFSaLuhZamPSBMArowbTYTPsRstQLv1qehDNwKynEr5KVdD7undXcmUYZq82xUK4v7s8woX",
  "key7": "QR1vwRUFjYpXREB8EzyQL1pE2DURtnKiW4YV5TdCxBkcoSTKL2a2cBY4eQaE6ZPnjaABWPje7ZVhXXTvdZqkJVC",
  "key8": "2qyBiTPCk3F2jpjAs3L4tmBb4AE3TPrLYAB1uTDcw5h443pPZGFCvTZbpCriKgThVc4CW4u3ahyTY2nXcegWL2o4",
  "key9": "3hrBUEGqfscsDAsQZy89QVym9uU5qinePYfTLATL445SA1msCUfVEy9hSSLwy8471sM4rsX44iLzHdVfWdHejrss",
  "key10": "6ZWD4Sd4zXcw6tc8Dy3DjwBLosr13K7UFDpnVtZ5KAcKomXSGwEMB4tFayNZG4h9zSqfmnGyGoTtqU9xqMCSzbj",
  "key11": "5iSo7VP38ibjxQsJ5yFktc3gjMnQGrLzPd2ypTdXJJNf8FzYuU1ukzCQCLJDXk1Le8Z1fRKeFwJAKResum1E8oZk",
  "key12": "4iQVgybp6B6X1K5F4VZRGrXDvKeDMe3x23KuL8f5YmufmyYk7pq8J7QLZKHLHE4GNwqXERr9o7cDDVtV3SNMzN7Z",
  "key13": "4U1pAvcBoQSKiLmY8YNx8Vr4Dt92AwjRb3HgnGXcUW98xVVxW8SkiPV6Vd8Rz1Le67M22qxJLGxNg3VvVmjcHEFN",
  "key14": "5qzRmoCvktKmREyqeVcnQMuuqKCJCb6qzbdsAMBmXrjzV56KeYusLVZfZ3bqLaZ4CUwVgShJSaHocymb4Q6VVsFB",
  "key15": "5kuzqF7i98CcPdpdvx3YFTHxekG692pvr28CNWhjYzYtVXpjBKRJobD46wq74nMH3kv6oBp3JyyPbESNVu641sWd",
  "key16": "3QSqYuaZHDJYngqDjUYWVdtCh73zswgs2EkZ483T7x8ZG9S5VAsFDY3CXXiqyEehXQp6K6j72KJ3E7qZ6XKbgzcM",
  "key17": "3VdvDNHyaFD8cp3bGBRYEuxQFcQewAbzgeiUNxvqcz1YmEgrhjczSThqZJetigGdRiSUFLoVRNrSqwKNWzETPdSC",
  "key18": "2HYULnjjD6W7Kn8QcAaZRnnywUaARgKTNKip4Mqugq4xqsJVjtPpyxTj8eV5uhqkHeh1AR4hGWh8SxMMPs1zmgbX",
  "key19": "2EoswiVe4e1GQawXksgwdnHCXrQ8e3PdKjLfReua4qeFP27XMCQh8NZvfDxWgTfCqRFceU5L5P3ZXHAp3SZDv5Dt",
  "key20": "3qqZae8DrMUDkNPqK1vUQSuHu3N3UGKW5ET4GYEkt36Z9fP8YbyhoZSaRQcMS3d1n2xfE7FCHnSePQS8QFX9dUEB",
  "key21": "4duJjDVWyGazEQdKALt2JhR1yLYY4wKYWtgoem3rRQCuTJLV7zHUutgkh1sfiL1QZWAH7ZGe9hYS3yYAxYdgA4XB",
  "key22": "4LGgUm8uJKJgQHKCidWFD6kNS3fCwKaRx87AznHmrAmirsgB3Dw8KXMe4V4kmytz9izXP8UZtW3LqiHqDPuobirR",
  "key23": "5daiE6C6i5uXVXJo5r1oiVuV6ojXQqvPQ5VpGhxXX6aGF7ToLfEfmYoxW5LaTXMQH6U4zv5VD2zBDkvMUcQh93XB",
  "key24": "2dLkxXtGNid5632tqJu5JqCYMzVwMH1HU12YsvG8XuiSFEh6LPxvzVUUSx8CupUDjKLDMYGTbKYgFrn2WX5vrh9K",
  "key25": "5pwcSEbb5UurNkTV9WvScnMAxmYfPdTzEYqnN92qXQtuNLkxkupLiADKnuXBVXRTzaDpMSqUpdWckZVuud5Md8An",
  "key26": "64fegGDNx5UDaaXiuZ4hKk4N6xpAeX3LpRZzLS6xYN7iFEpeyjWukJ8TweUYKE6yyQJVgQPUiXCF9EG6P2qSBuzP",
  "key27": "5L4F5BWhre1pb7UKMXkkkjyt4pK339WGK3N2V7R2qpQJYj2r3vqVXWxYg96KGVZHhGT8bMA9NaL9YamDot3XRKm3",
  "key28": "655BMgKqJAXdrMvi3a1WtbWZguwkaB6saGWvWfR5s87kNzoiN5Y2VRg682gT3djxoiZLW5eme1XybSxuLWHvKPVY",
  "key29": "3QCyadfi6i1myWmgsAhqxiEc3ExZzHpnSTDe6kpGuab3DPVcX8tQpT2sPtE4BkL4tpdAwQJpH4qXMfyFZUVBLfn7",
  "key30": "2piV4BqtiDVTubo6saNMRQ3EW4JAPxcgWWZDCMbTf5ocSe3uSoKWrFR143W4HjM7VGWc6euzSn9c8qxQbMd586hi",
  "key31": "3xtA2g8qyeAyNoYqiXvC7kkkXqMh1YqnYaYiRhW6c2UJ6FUobzApTKz5wWWKGJASUHEmpA8CZoCANPF8cqdjswnz",
  "key32": "63AdbBp7KJy8CXTzMfYyKAUXfzAAhyCxy9ue1d6EUH7K4nHKrvFutqSunpASAACxikwQrUAj3fzXGrHYvW5iJS7m"
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
