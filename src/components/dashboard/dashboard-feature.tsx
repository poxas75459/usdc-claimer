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
    "5T1pHmeoNSQiD7itd5rP1wDczHApjTEpYLGLGLVug7Qcvw9nqt35ygxV29mB8XLDTrvPjn9t6fYKu2KnpUbtD5eT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22TnJJnSWC3rqiVaJLq4diXv7p3msLTiRp7ZwUQcL4R7YuZCF8fAJetixB3UFT5pUDQKFdfkH46sCPChnPQPV8mV",
  "key1": "4pBoTgQVGZknzUoukKTRMmwUckkrxet5qM3qKDsJer21rEWZoGWcXm9n9yawWcivwi2hMnQLMAGTBS3PtyNtBvFZ",
  "key2": "2Fe4XyYSnbAJ3R99qFRhk6MiHWhxJ5i4oDEB7G7eFuUmkfsidf4dJUqWSnwVUaHkSVfTx5LkkdM1iYsJ6n6vTVab",
  "key3": "RXbYVYdEUvkWQKUayqh7febeS9wcJqP4UaZrHECDVGWZWNRkmRN8bqPQ8em5qm6bmCremGxBMjeq2hSBrx3QZou",
  "key4": "5oTNauKzYfdA4wZNg7oPkp96tvQ3Zh7pkExn826psb1GKSwETRTWaW9VNpmJwZ7ZDGdGTc3K3nZU8uUXfwzK911h",
  "key5": "rnSiTdAv8sRhp8SxLr7eM6Gn9MeVfJDtBZsf1sFZUXNmXk5JVs4ziRZv3EcqAJ3EKaBS6LxuiKxknqYhqiBspbu",
  "key6": "4mGLiFTEJWR89dWX8oxLKy7Ck6Xrf1QS4D9QNDmKNgCuXHutVR4EL4ACWLF4t1snLfovTcSp8ZwTVNGnwz52qB8d",
  "key7": "5xCU5e3xmQNvmr76Q7beNYj7GQcFbbyFsEYXzt8o32YAxKv5hiUndo2Q2KqX4j4brT5kSsCRG5pNqqQUea8TvMSx",
  "key8": "hoqjARGZcCwJriUUXS8Ahu9TowUBq6UPj84wSUdp3TavS8mfSCz6fsTG51uDEPvngkEju69MRLkHGY5AoDGH5a4",
  "key9": "3p8y5MLGM3zLGPmpEJzMCkvPK4c3G95P3UYDy8WoNz9sNwuRNFbWh7UvYMSrbJs6JktiCD2is7gEr7fza5Du3Rxv",
  "key10": "4nNZCshQE2erstPgctgu4X7RumvETFznqzWJJjxHAaLyCQKM7xThHApVgvNdcQTPtNWYVbuRoEwUKFEuJZU6RASy",
  "key11": "2WYv6kWqpdXMyEhpPtbGxVYYA8DD9gbjVPvUrJY4FVcqmhA3Mi16xhW6tfymxbNdV6JTLAb78Yx2qud6XPWyXrXb",
  "key12": "2Xo77iN12jWUbN1vuBDZpKJRn2hTxFja5dsHjiDej7Nbk7rHW66xMrfCzqJMQqBMWfRrtJR3wA84QPbiHbgy3gQm",
  "key13": "5KLwRsNaGzaTzYx7djWY6h64h9FhQBQa5tqZk6G7KdMeDeFp73Sqf1Fy9qw32eMP5pM4tZGwqqeiu4Y2v72CWz9p",
  "key14": "5N6AuuojcteRoXk2kbtbaNNXB54UfmfmiF5o8ErZrS88Bd9j1o12n5gLJNzcniVKbNkJuSR4GaTc6KKBkpNFKZkF",
  "key15": "5BdC3EcHKMVHbx9GUY4bnoLb8fJT5eTrn6zhwFBbmHdvA6vdQncZXADN4VXMombKXGCcexA8i6DWrcfFoZbYuDXQ",
  "key16": "2YQtbLcUWd6dHCoqHpUn4L9XRDGWmL1qMD1VdFR6GTzesMvYVqCDgmVjvJRtcqMnpHTcrn7zB5mxu2uosMfffZgf",
  "key17": "2rAHWEFHSYxoBb2r7m95StzHmhZPnBeQfkcbfSypHmNZ4rVssYBS5PE22Dt82smzPNYExNeMSjT3k7RLXwJxGpBT",
  "key18": "2MrLqoVUk8R8HTHHxxFFgQQLjgMR4TwTcWMbJnknzWD8bDX3KS1vTHg2v8LM4C7Sh9b8VLJpBzMqF5U25wyLBi3z",
  "key19": "3P9g4HvYVT9nMCBoBdnATMDC3UzQr48oufGG6sSRyT9ymzMxtqhJbEDkDn534rcvH8MYtdCHtWU5314RXi4Uxuzq",
  "key20": "3zytAFXw7jtayWkWM3zNrrHo3rvJXSqtqVapCJiWYJ7DFPY7pswhXC4zudNJ8N5JyZYT4nJ2mhKyB32mRZpbgXS1",
  "key21": "3mPBPpgcNCEZYAT8BBx5fJYp4mNz1FsmTj4NmUfK7YbQ8GdiWohL4ayoRf8CBWBfMHNPHe4ZNWjNxQdEbQwSsAVb",
  "key22": "XzhizbYYi97VUs9fnxGCawtC57Ln9waEhgjPG2BE2k9m2DEhKHgapNW1RJhkpRA2zRMr9MYxpL93eidmkPjrbfg",
  "key23": "SvXRfG4fAk1ho9cy2GStS4xi7TRTGdVybqmZLCijSXfKFxvC1oypYFEtTs332fVBdgrQcs2i4HaaxAVhjk1nsD8",
  "key24": "5hcxnT2MDSx34jCcZH4rK5KXPhY4g5YP9ARuP9htXzTemYYfeA3XyedofZkXHSjgodgTuPn67JQFoAgGVGRq9Mgh",
  "key25": "WUTvnqkeEipQuZxPDPMh4scfubAarUr5ofoJJb7ZnRTpBsFufzyZ2UUUP4ihQywErz5GCjLZRN5fyTkRmERpuiq",
  "key26": "2e1ACZQbutGoLd7yUtAxiPtNz4ZQjEhFf7593kBPMvwXDDBZoQpos7CjHsZHopVNHKCAq97cNYosAJA5PitoG5aF",
  "key27": "3oR3GtWG2kYMdxToG4RgCvscwU3iZeWELtWpRCGyeZ2Hxtd8VRSYSjqGkCi42EFsYJf8k4GcUTwPed7NH6Kp15wR",
  "key28": "3pHt5N3pcSnmkQ9kg7XzuUexWnMnPUpaFTQ58hF7mYUsKz9GptLENGknQqzYFPabzou5cLVCjsKxG7CVRrf6SifH",
  "key29": "61iWZ4qxJQYc4EnospvQRbrGZ1w3MsLiGJb1KcRkpm2Ldti3uZmQstmtZEEFkuNG7Ke2xXbp9QSVPSY4DprAo6ke",
  "key30": "PT1yQWvESoZWVgGLVYsXGbQAwascG8XiDS29qi4PzCTe9oAHC11K2QsAXmZ7YQKQA41qb86Wnhc8osg562bnB1G",
  "key31": "4VsBJqkTkNrxvmBUJZWX82YMPJcCGoeCgVkPeqphvM1b7roKWQo6j4CtCzMvvt9GCtRweuoAET4aHSL6Q8iYP1Xb"
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
