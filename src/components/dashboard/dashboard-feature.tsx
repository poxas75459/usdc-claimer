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
    "5qv3gGdJEZUKeW1Jmm8Mt8rbzWdYbPVrB6e2CdzEkF4J5EAwg1DTvYt3o4xaFc57Woj1jj1WGNnmXvq9UJNJbJdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vD5NuZvtDnhHHZJggpsgmhAiTPeszFDWnN2f9fHwGqxJfFdsmZNRuuuGHH8s5t4U8xWKVS1dfcqgHLxYcgKZYVj",
  "key1": "ZX4dDVxNRuG5WR6UBQoYCHqxjt4TA4L7Dpdu2pxExSMN83EPsbtkiv5h5t2YXr15yR82v6XzayH7QAtCfZokAUa",
  "key2": "3jpBch3aJXLQrDKjYyH1qHCwvSL1MR5C7ZMo4fwN5huvjHKWNKWwfwiSBoqr4k3PCcaNKuuPwF8PbTWmRdjmFaGP",
  "key3": "46vJL7LMi2uaLJ8qQcN88PitFyGeSsw88k2wj6vhpMcSDRx8JQVBCoiDLY1w6Zt6qVxn3D4yPXBRQyW2QzS4SAPN",
  "key4": "2iGAjmzbMh9HvLiYk2URfTXnD3QfUJvpgRErXJZR4ForeHipyRpNasm7y3VDWtuDx4KKzZ3CrqkfcFzGmYisNQyz",
  "key5": "3Kx5dP9fy2BejjSy6V3Aw33YD79nWX5Ehoya2LzfiXC8mf31qTC5cv46t8eiLqsEhXU3Qbzehccn3tmBG1CYaLJD",
  "key6": "552TzexTMVFS5rGMFVUN3N6a8Ciff9wdw6h3Mi6Ha6g1LYvov25CCsE8azzPGXzhgW4dqk43Lm3ZEPvpvX56MLwv",
  "key7": "4DmEzoJyEfVFrKi8fjmqDaiEaqcfk44AT6NLv1QSsYHgvBMXBa4uJxmmkmQepdshTkXVwchSMfp74baVmxuzMtB6",
  "key8": "4baoYCkfSkGk29Xfb1hHSTHANWDpyed6DpvXaz4u8m7bpXtitviVi374kDxwcBzZCVfsCHtumiRw5tRVVzwhJCA7",
  "key9": "D6uVC8KJDnw3QJ7gVkUGBT8jURhsSGMkTEPS6yYbVTD4ycnzLa2KN1fqYBpXtGMaGHCh85hHw25DVEEmk5gcXPn",
  "key10": "5yrM9814qYRNr5UpUtmpXeTxfYNhhWk8g6L5AEAmaG1a39kTBaVtKVsA3CpqJniUZuv4o3ocDXZipJLDsdxmd6vm",
  "key11": "3jBEy3pzLERj9V953romhmpYE3XTtBjSrr1PbLcah9vzNw76nnLqKkzbCLtFj8dER3YVjw5iREoj6o2siN39FKCt",
  "key12": "4AjqfL9jGwEYmqoSD3rmrEw1f52U3FnLnaSfnxR6AtTo5qtqNbEypcoGyBzxU4nKxQVv39nP39H2QioovddzYzmV",
  "key13": "592arJdhjLGpLHLwisQyifNrW1iWJahdhnuKcinb629CopCwBRMK5N6X7stmkkUwZtH4sEaTCHBqr3vcxibVzjgK",
  "key14": "ezDByDsT4HspuJPQZ78a4f14Q1DysePCVb5a3h9mRPucEDCbn6C3UhtKS2xjMboED2cP4XkXfixXAvuZckNBth8",
  "key15": "vTmx6VDugd9heGFTQXfJvHNxr4emcvsMqyPGW6psRDkb3gZbD9JTsbZf6ZMQwFcQtHojxiqmePXBHyjWdNQGiBd",
  "key16": "UfpL84PafNhoPvfnn5GL6dEig1fbuir3DCJrfVWgmd9PfZAWJgdrGdnDSWPejKVJnxs54UhwdQ7i7CGCrM3Gicf",
  "key17": "62851DoxYdv422affT7nwswFWqAoxcGkWjTKUL37ifeeoLfpcvWsT3LE4Rtv4gh4MjwXab2nx7qhecPSYxozUrWn",
  "key18": "4gXRdrHEkjNBFwqYWrZKZxGRahTp72Sg5iFKwrxsmrFZyfuojC345bDJTPeT9e5C1xokQWMCyN8hapeYnKPViL4P",
  "key19": "4brTT8EhVyH4EvsuRPiJFt98Ksh4FcHsBXzNwQzLscoTMiFpit3NecsAVk3LR37Y4JLUB5SPMYzPULPk4dTWEQRN",
  "key20": "nqaN2Wu9WnAVQkdRjKZYC9Q7wA2c2oZTvZq5i56gFEU7qkZiz9gFmMyKEmQJQKGqmVzC2r9ajQAxCpikaUu2WUK",
  "key21": "5KZb4eqJ8rbhoj1FSF6zCCxiVQ4CdV9tQgispAww8HTjoThofV71nLWw4CK6oZNy6mDJ7c8RjD824sXxEfpEwU3k",
  "key22": "3zVVzk9fzYNdXFEHNEYpUD3ZcBt7GE9aCwnoiuvt9i4hxjuorHMQF9e4yHHzFbe1MEMUhfh4oJrGECs8LXi7ozXm",
  "key23": "4UhXTaxpXZcSGF1HSMEHjouw5T4gTpxjBvGvKV7a7FYYLX21KVcsGzhZ4EVGpXcaqQeDYf4H2U4R2FyhjNevM2Nj",
  "key24": "3ssVbzY2X2xg4uKaLamBWQwYX6PSyCkKpMebSV3ic8P1wnWgADwdx2k1G9u9ip59oBdwWdaPTpeUNnneMSVYEDdJ",
  "key25": "4qtpqqcfTwgSXkWc3gB8yQVcKuTYomZFvnty5KAFV2JvxSjWuHXUBRam4zygmH2mguuXEoTcjByp5QSZtVu6ACre",
  "key26": "5b1XXmmfJdEtNiTmRLpFrnrLbCvdFPPATm2hxZYsDeKbRXFEcSptKvKxhjaovs7fpzJWZfQ4vPCLzkhYUThjB1qB",
  "key27": "biZxQhr3JFYfbYchwVUq2bvQFG2oFowSNuoXFNf4eVtPFWiVVriQqcYmZmtPD84PNE8VyHDPC8BGuvTty56T9Vo"
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
