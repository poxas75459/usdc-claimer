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
    "5fPTDmLeoLfV1dFpCtY7Hi81X29Zscp7p1jr8ZySfk1NQvGNPXGWR9q9aqRr3n6NCRhvqmPP7KCJjyvoyyJfY5Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJeLov7WATQy8pb1JKbjzFw2gEgSPmneEgFXXoA3wAj3Hh5EbqLnP4K5k6PoD94CNfLaoydSsDH3Nc9kZB6AhyE",
  "key1": "4fhAVNvrW3MTTUnAaj1bJQsZKdKdK4ojMnnft3TPXrF2DUnvy3YURPgN4FyWqEhpLRdYKuM2NPmcr8RtTK8qnkmz",
  "key2": "R5mLfwJ4Q5BmZ2di6eY46EYqXeBfCwoJwRJAjwiDpyLj4cke6GHwnFRjjAaMyBEfQ8RqoCmk5cJQSB2CJh3naxC",
  "key3": "3UxbWiu4W2uEd7rhdW8QpuPahf56JuggBTG4sEt7f9muScMgi9EaMVchd93guSogrkMmkkN7CSFffbQDbNJF6J9R",
  "key4": "1RWrz7cnnPRcJVNp6vswLhXJmYTieR57GcTnWcXqGLd9bk3QYjcqHxADEQoNTv4v7d69JeHZuQnwtuSiiqVaRue",
  "key5": "4pAcSNd7MMwDnCv3jS7zCbqRjiCPtQwUaVHcqQzEyGPU1BJQ7gjgniQ3d3FuwtBQZz8NnbwxULfrtPby2176cySr",
  "key6": "3t2pvSVuijFYgufTpoj9VhY8DHrvMKrvYSBWcPQvCoi5x6xXhKUVFeS79Re1ybeqrMsD77rxgyrzLFx8r64bwo19",
  "key7": "2QEguGLX7XEYNiFsqHtty1jpPhhkZRgtR2WkTxqsiJ2VbQavusBavx8jFLhe7utHL6tfs2iXu8iTdxA7pjqWeWf3",
  "key8": "67C2cF7QJfJSs9nahVm7by8zFS4zVPbATW7WirsNFujSKkZtBjo98kbPDAYvDCZXYRcpubV1Dz4xWgLiJBL3Dskq",
  "key9": "5miXxFM6UAW6RDV2e9ExRQNmF9g7T22bG93CzVe3cuX5uwmcA8M6PUgZiLGiDK527uM4BYmE4es7AsqEQbg4voiq",
  "key10": "QFdrJDxfv241h3X4HBFVYCyNVU5U7Hm2eknNkJ9buEeqeGYNCx9jDThJ64NSK6ULf2PzWGvvaq3kVfQrEn89Rxe",
  "key11": "3jELYQGazvajCTNiFsZSqQ3WthZ4MZZoKs5jUNLZx4G83WBcvRbCbGphJ1wSRP4hQW3FWtXoMqjgzpm6UWG9y1co",
  "key12": "zgth8Dmgfd7Qa6eeNxjvKTVfZxeHBwye2HL5ZjUvqxjh24UtbztquUcjXqHb1z2vtXCTQY6fe9QnNBHjbibBYHW",
  "key13": "4Vx58ZbF2vmUJ3Eq4435wuVDh4mQ7GArYiWjFcjDGwwPCtNSrvzxK7NDrXd7skj6ELv3JC9ACerbVWCWHcY89XvQ",
  "key14": "48wLsXs7Ktie9dQCjS1j1nYCzeULB9ZdgH8c1NfBEVdPrP7gMPfrLGSbewpzh1WS3sbgS4wwj2XimLm3gxmheko3",
  "key15": "N9bUD68NGDa9zNkuJmXHybBH4PuwGtPVVoyWT6KGZRzJ2pzCkW9kti7TJ6dTZ1iD5qrsVM42smyZJuWkvsgAPE2",
  "key16": "2mbtvtB7gik9ofrKZ2B11bswLroFAabD5aSwWq1v5gtVvW7UeRSFW8ZRroPtomrskRsSw2YCPFCkvZfY9rtjgJE7",
  "key17": "h445v5HzsQnQmd8KQQmLLMhytNw6zGGxQzW6J12u1QiDjwQAJGEbAWqV9nDviFb6gv3WXz9uXNjJDvM1xC5UTmx",
  "key18": "4oX7FSYSrpaXSwzGvF1jr9yT2iM1CRuhFLcGTP4qRacNggBRqXJuAUFuUGqjTevjHwGwkpeVGeZdnt7MAorY8nst",
  "key19": "4Grza1WikwqktVdZaBxa7w6zNyuyKkawf1kezjKDAwpLyMuLuXPv6Vk32b2D5FbktEBEi4wj8wZyZPegiwHyU3rC",
  "key20": "h65z7P78F3jrLC4tY5yrwou8eKcHrsE5drSXEiMzX1ekv9YKV3eRfF2uaQo6fU5eq2YWryU3xdCN6BdpUnmuJxZ",
  "key21": "61t8TGj4spAuPYTnFdo26xxTXkGWztNckFWQRu7HjXeRwRVJSUZ2CfwtgHNqKNJgTzUr8SkWkcviV1ze3JqtL2nH",
  "key22": "597jkRqtCseTvB6wCzfqNkuZr3LND4Aima3HxWWxnozmADn69px8scq27LnmSjzGFMDiE7WFnUPbdz4S2CYb3fPS",
  "key23": "2hyy9nU4L7B2Vw8F1d1wKBuGZNtZVzYUuhDZFq7pRkwxYjqtQ6QaHQB35bbtJ3r2vGNwNvtPSmk5n8p4ShnZr6U5",
  "key24": "4kZXL537pzk5hhjFrvAHrdGEMCX7yckXMzijHRuzgPNpBLXwgM4XjsrzqznwE9dqkqcjsRvXF3jwGHcMZ3PG5n2L",
  "key25": "4GQ9ChoVu39FCHKChTbGoKnRTZcPYYCnnmvQXYDMFHuCTcXGhj1ALhhgTaCij8Xvg93AHDDods2nv69vM6yPHE9T",
  "key26": "3xRaMCAw1JoNQppDty8UDfgPDhuN4M2ty4Tv1o4DWqiigjZUfT5xw7WjuJykKBbvh1PNSZsAWrMKpZWKD84Sbmgv",
  "key27": "4anCtsaabJYevxoujDj9guhTaVQFMN7BEbdofFtzvqNSQJRyFtA3a6fGrkiF3Zhh2WVK4vdJWZw4pdSauydskdre",
  "key28": "rt2FSg3BkKehP7turbTRT91fWPMECZRCFf1o6GkDX8bGnMqh7Jav6yJuNvd91Qh3iwTfk6k2jc1npxBvg7C3oao",
  "key29": "2sQC1j1SW2QWw9mbcsehsWV4S9u3y7Shvc6PknchRm2rwiypeur4ZGhF3JXBGNEtD1Bzz3MZ6W83KrYY6JBw1Wkr",
  "key30": "7FM4iECqnpNQ2S9p9BfFChCAQiuU1fDJqnbURHpD8oP5zUvQKzhsjBFa42SKezN1w99e7EPbnWwX3qnSGi1kmZn",
  "key31": "329AkVszsg4XQAD9e3kCXJ2bAZNzsiozwJ2Qja9rtdMNSRthYX3b9f4P27NmJg6Ty6oC4g5pDp8QsgCmtA7g4kFh",
  "key32": "5kuJzbbibsp6BDeHr9kiLtB5Cs3ZeGdoKu7QjQzBM8ihxuce69KigNBRuBo1vAGZEaHzthyMGUb9VGz5AoVe7uBy",
  "key33": "4qz13hwQrHQXejymeKFSiNzuZahC3YMaghSx7FG4uU3uGdxAMpzCDmicxfGeyv8EuF4VnkX7NHLuRmSk2BzZ5wBs",
  "key34": "3WfBFdQ9qAfFQ4Q4aosQXKMivV7H8T7UdpivoDSfqbAcqBdHtszo1HosnpfCtBb8QiZnCpdAK6VaAtxU6ypvombA"
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
