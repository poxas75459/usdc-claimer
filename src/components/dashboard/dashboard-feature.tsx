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
    "5dPbpxMC4tukvr5JkxNHbvJvv24GiW2ABdvXD6GbwNnH26U8GpfR8ocRrmnDtvJgbCipxdQfBz2oHTXm7g4a7QB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qwqxwoyM6BfNJ4bE2Tx9DcDCYno3QWQjfCmzmw2ZJHDmEmAZfGYFLJa7GBYfjsQtL2QjN5zKTC5Ep9pwhN497kG",
  "key1": "5fVNHhC1QC1ymYK8mWmoUcbBRTRhWos8i5cC3NbDdL2JLhtUwnFvwRrYVKPezo5Zh4vzHEGJQw1BbiwkkLq6cydJ",
  "key2": "352XoTM4isy9RmNLMhtYYfY4qtnv1asRKVAMXbauyaDCnFoLB2zgn3NfhprJQzTgpusttuXw8f3NFyChX6YPBZ4a",
  "key3": "3bnqtPwMA7nNQSpXaeJsnMyH3zztySs7RPvHcqX2JjxoLHH2kKiBxWzo4MXr3JuKbFWcaWboAK2cXSrVR321PsL2",
  "key4": "8SQZgSohPL1aXnEWXBQBXoqg3ZSXiqsX1bNbZhZndV3PnPKppS72MUA9eQFcnv9kukscYiJ6b2cE3seGx5P9KPx",
  "key5": "3K1x8oCKCQJ5wWp9nKa6rQ9fcFiZ1scriM1C9PS9dwPehHskEteufaxafzokeVKaDsfRjAWLmwgi2XfgxSe1B5TS",
  "key6": "122AfbCdEwczSgvwPmANJUVRDkQU2UE5f37afJDJB4c73FCjNBN8Z3gC7xGEPDZnX1ZmTJsfFHbBWte9BpLYmcEE",
  "key7": "427TTkH5R8EffAoX8BSxZySNb7zRCZhSxnDUFDQVbciTtj964tCaqjzkCdHwE3ws7yKKEt7qB3Mh2AdcjQSAo2bA",
  "key8": "3WNbVJGHDSzn4HXjeFdJu8pkyoPgA18TfyqcACabGdG1WaukDGnmAg6gYDdt81yXKrtyHbkcx5zQdUVnTLuH2o6y",
  "key9": "623QHVKymgPQTd5PZaiQUnox1PPkpLzikCMxbQz9eSJoL333PWQqCTzMmKyxw6qsVmGt79xnEro6URYz9QpXAvL4",
  "key10": "3pLw9YJdhcPJLw66VNe4MoR42n9D2fynRoSeArQyp13sq3BPkcAEf5hhpqi7ygomEv9aezh4gZp2qZWHBywv4CJf",
  "key11": "2DR7MkqDPsSkKBXFRpgzcctQhVVc9Y4xEKPUdJwDimSssPXUy8BsPNpBsChVYPd89vynmkDwenEuDovrSaYhk1pc",
  "key12": "3LmeMFg9LfP53YpaBkSGoMuCTWZ3aw9UB49opYxatrysKpiELxtsKUorsp7iRz7rLLDFxjsnYccPU4XSqCoddptP",
  "key13": "5D2DzMHxiMhTp66d2UBJiFzy3EXAg86a281HkR3gZj58oRrZpYMqAc36sZp5RvpnZUdxsc1r7x6a2bmxCYVRzWo1",
  "key14": "4vu3jwzFPPj4oPhMkKpjzEs1WspxZPxpwGrPwEUackg141iP4z6CJ5HoCgewLxVHkdJ7JB87uye1UWeAtM8tq3vF",
  "key15": "2iabiT9fwecnmWiqTAyP8kiFiEXy3VXPMWcDjB782i7TaJ49eD5hqr17EW5gZeYFMZLMzmp85XbK2QH59Rs1Y9wo",
  "key16": "Vy2UZCP158Syj5eVur42AbF8fGwoDFQ76jAyhgD9LjhX69a9YjhgH437UyGGZnxBQMo3yorCoSkJqeQFAwcw7Et",
  "key17": "3qbcnJiTFum4hRXfckE48AV6HzUbqiNw5fY9g4FqyAMGZBR5Uym5uBzfzWgVhfQWWYgW2hLEmK9hdbznCFjcEaRm",
  "key18": "4r9VnG5zYepB9Jr6HqmWZwjnHdo5KuE2nQoD7EoK5cw8h8VDaYcbyfEx88zhy3PtRvweg9yWvzgfrCBVESZPqDWD",
  "key19": "2CgrDZ9NezXPRTmtK3bbmwL1THrQJVnkoFBxNpso23uEgMMyWqXoAGkeP3bL1reLEujHAXujs6wjnFh95ndpHcmi",
  "key20": "kDH1c4wMV8Q3yRAa5zQpFX81Ag3fmwNU2QG9zvoMoA55BVDgcWrtuKbsmyfZSdVSdZfhGHFTbA1gup2zXrS73W8",
  "key21": "2goLhB8jMKSWGwZCWewr8Xmy7qc74hHibrCYMcecPtti1wb1UAUuuRxfedKwjECNGTPX2vs9fRLYG7XoSkCR4pCt",
  "key22": "d8jvWSZJxamxqxTWgvd2B9cP5NGvUzr67mBBKgrgMn2g5k7Zb4r1jAM5SMg4W7iZe4HKD8FoKWP9etbNE36nVBk",
  "key23": "4QsQSQ7Rw7bJNLcw8qjPxkZqrgQFKGc56gzbrrLjmSXt76Lxab4rr4HpmHiSgb5H5hpPB7qBJcsiLXf2gtUFFJYA",
  "key24": "2uV4RoiKXhWhiMkvD2Gtq2vFSrzUBfLyqc5W4nZ28NhWtjBYkqcb9u5yN22qCqjtMzX1L8af1BQ3U2pLWLTsErSa",
  "key25": "5BRTvCZh4Y2yRSdMPXSqSkECZNm4yrm1111gHMhSxyEm5wS8LT9wAskWCcaAxyHhWHSYdXj5tQTzrCMMsPqQF1My",
  "key26": "4QHkSwr6HELiYqPaRLfeYx8Mqg1pnn9VZinKvS3zQSCavw6MQJTC15Dnm1YuLhmb877nkRtZaveTcHycw5NPbipJ",
  "key27": "2ugU94KFPkMfLkfLtQyDgu1HyXTSjMi22qRmnTpr8QVmcchoVoVR42b9opf9bvvdsJa47XEq9Ngjt8wY7CZJiJzt",
  "key28": "RPsXKUQVhcmFJKnkHUHtufd1JzbssEgE8vVB6i49jC1ResrqdwxHwJgU6UpKcVRSeoUarTrvPPVvuov53B5jGrQ",
  "key29": "4UsfJqgL1EriguWEED4FeoPvLxXkwa2S1AnkqRboQw66f7HRq98JtoEMPJXrDHUjzpqnYMCHe43mQbMBgQZkXjJK",
  "key30": "5fzL9uTYvYCSqhAYoA64jgoinNyUfoKhS1an2ZAr3RssN3xFBvixbhSvGpPG3JmuSykzqnu8aTMG4AXz5Z6uXmsA",
  "key31": "5sgUFL6pzK29gDKbCx1vp5gMkkTn9DazTMrmBjJ57GYJZMhrwnuvHrLt3ftkXrhrFcWqRFZRVNZGaoiE3ueNnp3H",
  "key32": "4aFAaEzz1wJGKUDFzzGHAU1fG6ZEf4Jxv1767CWJh8B1GnRoUDpnpjmmDW2dexVx3h1nhYPCjkFTqe1pdg1JYvHx",
  "key33": "3wYpZPZoxhXrGJetSwhJyQfs7NPeSgcWMa8hLqswBgxSEGDiAFBSEoRwVs3YDqPj7RmYWfctbyyZQFgmaPk3A3zn"
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
