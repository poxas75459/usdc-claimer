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
    "3PuYHEYPcmbQnz83ZpjsXkXuAJtkWfGKGDt1ah6uTBr1yxCDjhj8fcRef5waHzR78C3c2Htu53p4QJTgc84NyHNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2wrHJeosp21i21JfE6ZACS4juVkrjbBW642D8BDNQ4WAyYqTHD1K7jCj3SXW7QVrcNuxbAdUWZpw1SNqvEWAFW",
  "key1": "3MZnFUioGboV7Kt8Pkhuv2oWtAFL7grv9CG1NMkpL1LDPdczsUXdCF9Gh7H5ofUcm2Pq8ZYGiJT6uiiA8VvNuZ6g",
  "key2": "4qaagHtKwssxZmXReJYFGfmEmJ5hJgyNB1qsn93SQnrD7i9VCtzEpF1RAomXieo58y9RjC5JHNZtCV1cXras7Lq3",
  "key3": "54bKC44hBUjp27GtQkufrnCvmusTuia7hUN69FVCuj1SCpLUt9dXphEexDq5jhprDZN29jgqTm9zREp4aRqKwXoc",
  "key4": "rv2xmXkUgicBYaGpzkCXTaXAGLCAy12ntk9vuKuRagvSD7J84yriwDgCZmtrVRY11T1PhNknqPxkhNygzrNu7F8",
  "key5": "4PKUuVeg6c2wkVtcfvCjYCPMLFjrqXUXep7Rak4sYCM8fJeWFeZ6mdxRGwA6F2wxyZs53JFyDesoh2rZYW294mdM",
  "key6": "268K3kFK1FKJspuT5jJpEMmvjHSpcMxBUtdoYxcPj32HusvFKPnDHDtS8q1hGSh3783Mz7SLvnWaL4gV28q4LXHD",
  "key7": "3QStYo5bRSF9SVV2ZBqLZMMLB2v7Rd2y8mJG2CaZZnStUcoFPBwZ1WKK6bGcdotawCFSaf4o1vWR5cJvjwypRPph",
  "key8": "4yeGs71UQsVtkfUZScsmUA53QoMnfqnKjUn59zuGRw3xX7ub9nQMXLa3KiQAPcVrSijYY3Lm9kkGzKEpBj7U2B5g",
  "key9": "4SPqmwf1qMRsGnPoVrovaz9LNh97BAxNkQtBon4YKtzTJ9TUbQheZW6N615Z2dB8JgJGYyqe7sBbKStC7ij4RYDn",
  "key10": "3ABp7fYm9QXomDsnYWbQUYRGEyH6sHB8eSF6RXg8gAoySyrDKS5G3mo5kTFhHfSebpVgU6HdG1xmdagXEyAYrmLJ",
  "key11": "3Fcj5wQ288MsimXh5BMTXFgv9sxn1Rsx9CGMd5uu8xys9uuxfS3Gm6PUd1NJXpchCg8qPWC4ZSQYXdp6q1D2uJsZ",
  "key12": "3AocRMy6FyVXvjKnvDm8yRLGEeMyoPbYEpBWe9DS7s4uBRKKGUxSxfdAp3JaWn6DQb8dwGJLWAcPstjzxz8QiujB",
  "key13": "5tk7AunTVgeG1qcbE9HpnBQ1oi1JGDRbDgF2MRMevqnBGWgbyehxNeBf4nkvpohYM6e3REEeX2MZ1yhdJLjBSRdQ",
  "key14": "4NhweEhSMbWktHSkRF76VLSvg8Ht9X1E7BhCSKKUTpiDG2ef7VXxvmw8Kf5yNCrQJwaL454X8mEdDKooSSCQYxFw",
  "key15": "2VnDG9cfXDBVXzkkMoBSU31MNHczp2S1kRAF6MxJdax2xdnLFqkn27T9XYanQBbtJctYndVFXS7DEDFNTpyJMeLL",
  "key16": "34Yxz4d6mz8SdAiBGSwgPgPZWksWTDZTztLxwii3rNvXEJ8zD3ow1xNV8o6NyYBDNZFDxf48fNQZRqAGm5NGcPkb",
  "key17": "2ZwkNaG8ToHeaHqvombaft35v8XqxbuMtzjASuHdUicHMGWUEfY2AJvxNbA7xCDsyTKFvLmJ5JbSoZtVXsacGd2h",
  "key18": "5nn3qnbCnziAY8N6x27VXXvUJRB3v5zPkP94fU5MEozAgvNfYDbzaN6KR6mZ9bHFyxtHCQr1ZfkhWNzVXaGWmLjz",
  "key19": "4CumrjdcEEHr6Du9t7w2K2y2Npf1g5CB9UnoMstrYuARod9mRPA33TobUXNoUhG91W7SwaKr8r8Us6TmRY1ZFitG",
  "key20": "4mLWVTgxK7C3rVQSXnEjUJNnJfvJNMTs4TeozRCcQireSkA5meB8QysHziLuokKJzwsVJhnsGN4rreNUVAUjq9Az",
  "key21": "4wDyCtdnQHummVqEUsXHpBPxQp1RRjG9tNotsKFfdFY7m4ffPKf4XayFKhjH7evpBfgoU67VAHSUxR5t1AVe3dYf",
  "key22": "3TsUyCadWh3UiKdAcWYjzVAufQ8vmUsJN6gNQf8KsVatGB5HuhggXJ3KfUZURFRhkkXjNp9KT2SZo8r12sgjatTk",
  "key23": "5bLPWGcHYRCakr9b8iJRu9eXoYJCG2f1pWQMLSMDJCGcq2WoiFLg1xx9RfwQcPs2qZbJrXpBFKbKGGtZ73UY2M9H",
  "key24": "4e6TqtuD8bpYWrUFLqJtYrLBnSm61HkKSJiryjqiDskR9J5bRaxKwtZ3TgEsEYRLgeZcGhDmZPdfLzphgEBGBKjg"
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
