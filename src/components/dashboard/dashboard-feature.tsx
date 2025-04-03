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
    "4Jz14EchFSjUnMELrrpPA6PiL4MFFw3xfbCJd4NJzngSqB2GThFGLAPssi5Xc4evn7B963TWdRSTzgRFTDizeyD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49caqwyCZpfsmn97NBR9PXuVWgCk6zaUff2qeA6mVC4QDTqjKuvGffzHRaBnyHeqc2nnaoJiHVfaabYK8PuJK12N",
  "key1": "zr1CWudvk2PFnSTuwwaqtMhnMCbboEpXR99vr9xX3peVZimuoJq8oeb28z5hjbJt7Xzt2zRjcVH1jwsZaxpnHwv",
  "key2": "2fB7Gq1TZMoQuiVCTYBqNKwzKoHS81XTZqm2chmLfruvEY1SDUmBf7VnhXWduPgufKtbnJWNy43dwC9iTbUbvWHf",
  "key3": "4oHFvU9KHRNrbsaxPwGx46PHJG1mmYw52XaP9MtztZEkdzHGELyxGbWF5BCxyFwgZfWpdxyva1udC3tyY2panDkG",
  "key4": "5yRgtPgrJyFKp7ppaVPfZQi3Bhkhpih3A4kPDjA6a1SpTDm7ZQ3QVu75z9CKC2vy1ynakHXFPJj3Rrc2wDgXv6Bm",
  "key5": "2oxAVtjUfFfBNrD8JQsf6DaPFSBs2VYKg2UUxYDsSPr2pBxX3f5WQEtncehZx4Yq78FpkZhTZZVgKqKFQiXSiGtz",
  "key6": "2Vtbv2A6nrxgPdAGT48APMoikcTjvK7m2Tm2rzRySy3hLxBrquzJ3dfzBsEfKeEfDH9LhtLnytXSgVXPDeBmmjr9",
  "key7": "54jGuRcLzASiTrurGzG8dtjKA1Fa6wMYm66q2JHMguGzeQ4Z8F8Tmu7LeTu2iLpQUcVNkizvTRrsYsyFkAK9rdWn",
  "key8": "321MrqH12UPG1X1uQ1C4JFNjbQ9jJtKV9eSqXNV66DeWtRvVCKaYDNe8hT8e1dCqyoKvxFHFUmHjfci1VVL8PudY",
  "key9": "38SSkmhppGDFRWH8hAjCvt3ASFRoFi8y9dMfYDs6JQwju9JR2kJFnzscj4uhAyrEpS29XUQhNJVQAWKY1DCiTp7u",
  "key10": "4CwmX8jBzxT6NQ4RkZuPLn2LLjgN2YuxKB6EsjykraB72bVTi62u5E2zLektFH9Escf9UDrZms1KyLvjxUYMLF6L",
  "key11": "2TFfxVZrQSsS6qQZ9eEUvnmUAkTAvb4Ezydha4yRoACyYuAUJjHQwB1NzMgGbCA7wbKcmXUzDpsQyw3F4FWrEQs7",
  "key12": "5p7g6EjjGFdWFcyrFSvjM4K7eyMde1aj7rerjxYAmdZqxy3umceJZKs9xqKGStBWhR99G2mebH57iGvcrYz5mGGa",
  "key13": "5LhQqwtp91tJjukGMdHqri5rVP4GvQYkqssVXkhiUyJZnLN7zXNrraWcG1aAPwy9i24eHQrawDxHuYFs6s2HUyr6",
  "key14": "5dyfo4TomUdGBmVietqNzpzJCJmtdJToB1D9Nmv8oiLJHy2MJjEdVP22PtMmy7HdAAGJvFu8azw4QHRSfFVcDeSL",
  "key15": "3Ef3YFeHt5gomwehBgcbEP22s6csX2BMM9dfgYW3w1LrzcUuKsqcHVa46wR531cFy6fCPPWWTkDtSgfHN3Kok24H",
  "key16": "44UnhZrCRANn8CjthQP5UMFS2a2TfTq2b4RWD7CRiM5XgTpwYncZ5WrAfjfmeMe1r59Cv25mxdg2BuYPsn8nvVbf",
  "key17": "2UHY8fwNpG5LrG6H24ZMQ9EaaBNYQv2zH7X9h7jUy8J9fSQPpuw2Zciinh6JQTowU4NwHVqJLm8t1xyCaeGehSVT",
  "key18": "3CpQQqwDLgbnmtMEqEZkCb9MRYc9WuV444nDyCrzAQN3pq5MbDKiGW4jf6VytovGegDrDx24YJfUmoKJt9yL1wYy",
  "key19": "2DvZKLXpJyPfMJcois13dvxLhR632TU1UNLBW3RNFc3vuQZ3DYj6iD4GUU6JtxMY85X3HfsKY4MmHZyggHAPVNL1",
  "key20": "3MnaMhLYQGrihWZpNKb2JcqkknV8mbq1ikAn59ePD7bSiHDXEUVwDMnKL2cKqmrA4z1bnQbzhpcdx8t514sQ4u4g",
  "key21": "D6WuJFGsHXPcK4KBGKvBXYdAubJUMkA6y4AxfNrHjofZ7wpfiyaB8A6mcre8SGqdXRkaUki2ipCjWJhKDWR8Fy3",
  "key22": "2MkHwCw68YmSH8jPVqAh5TWeVJYfhjhhDS5me18gX6xszFr9C5tPoha8b6LiRFoDCF88YNbyoDZ78mQMwUPc12fZ",
  "key23": "3DzNg9L22mTjcj54kmLtT1YZwGtT6sWGnPgpPBbXoqZr1eD5xj9VYSrDjrV2VP6rsHgQgigrEJofeHb5B1efp2Pn",
  "key24": "fyfBWKNywnUUQig7zv36wX2myFtwuXYeh6JHWhS2ugCfGVKS4kBcdQKrqmeq9CVcSNtAaUs3UyKZVwHLZ2dLMj2",
  "key25": "62HhBQqYJv55ntxQdAaDTcY9a7ssExfAdtVYN9dCUwSnoczRwww8BG49miK54RwWjEUoit2SP7S4BLaS7TpND2QC",
  "key26": "5QphF4CaXq2c4miKMXpks6SGN79ebAawLLLg8KPnVrwFJwUX4GHcfTsgQ1oByuVUeRtM8Vqnzn4PMaQ8gRx3UDkt",
  "key27": "5AVgpKARBqy9Vs7CL5jpqUdTrF3kej6vHuejFxMr2cJdyFtvtthfUGB2hHikn7zosE8itsda9mPxgLcSdHoTZaeq",
  "key28": "3ZhsfJFizHhiCjF94WVgAVkgW2zkFq5W8mYe3FBhq7rVhpeem5xpt1VYeC5isywcJq2P7AP2m5eN2jiwscn5AQnA",
  "key29": "4w82nCPuPjQtSZe7LYd9FnV8KjwBa8LhnyP4JFQjUoU28x8TkCMuC9Q1g6R65LV5sJoaySc45oTmHMCMYBRzRpxV",
  "key30": "4B5pSvtcRLuZoF8ZmuJUyq4qfcdwJWvyKdDgdgbEyFJdg33UmXj9rvh1BdutvSdoc7Do38xZ8CtT92rvKuDkhute"
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
