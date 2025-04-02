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
    "5BqFY29L6hkEKLeB9j1bBm4W7JToXuKajKLjPYUjXqTvdA5ek2Ca6GqjAMfURCuJKnxLqiZ4D4KxMGvw56Jsxwds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxB5tU6snKJmZUnfCCmKGrhUSXMVHMqB95p6a36FXEJtJbYSEn247aBNkiZt5CiPdGkiqMhRQdjVSN7DuQMPb1t",
  "key1": "2Zo2rZCsfRn2r9EJw3qjZA9c7iFXQBcShLogKKim3Fr95HCNYtyiSvYBZG4qheg93V4dhRzg3rmUTMzpz6FKoLQA",
  "key2": "3KASMZsStAATBDvDzeB67SWitvAQGGcFtEMrfJ8KU4XoJ4xfMsrt4bWm4Grue7XGNF2Q1H7dkdUK32kKnRy6cQnm",
  "key3": "2b5RoxNf1fNCYuBicC9zzzCoyVsgTseXWQ6rMa4GTx1sMoKvqn7qg3vDbsVovekZg9U7vt3YHL8sFnfUvEBWGM7L",
  "key4": "3pBsh67cQnZ7YVSyCE76sK25F1UtfiwuemfQdFiGhCCmj4BjbFoP7c9DJmKdQzPaakXgTLai29NLTrBEZJd6p2YL",
  "key5": "2fCegrH9MB6QSFLdXr38BStEbAKvzZCMw3U3hVBBtNNqecEHvcmKDm9z1rFKzKv3kUTzpyMmv7SqKxeVdZMhwaYu",
  "key6": "31hQEpjjSYj6USsSVKswN9Tyq6oVXDeN9WosR2pFkNKfz9njUyv2QhTNgVuEMFmDPKZrdymbSJfyiY3bocMtXPhy",
  "key7": "4Qt6SqcCbbn94XYs8V9ZSCKkyWWZAS9XghvWBHUpHyQ2ewB4hDQWaqaRSx1vapeMVivDsijNL2Sw6wCRfbAU75V3",
  "key8": "3eWMwAtXNcBzEdKxwbMYWUQ1wEDpMddawm4CKhykWW5zPVHd6SfCHw4DX2uHBMjEYQ6ALSCzyq4MnhvSWqEFkwxX",
  "key9": "44Da7aip27fzgsAXinNYssJ4R8V4gEKBpHkTR6cRgYew8s89eaQgVeyMeajEfWb6eDpG5WuMqzdPjLv4G5fdKfRz",
  "key10": "4PihHrBVpBHkvhLWbcmjvD6HamP7oikysw9iYRhGMkrXUvevQdhfZBCDVHfo9qCyf8XsY472nDY5E33QKzJSNqgo",
  "key11": "3PjZ5uEEP9bd8xLPJ7poShZP7Xa4FsB99PggGXDt3yHTVRQUkF6emyd3uh16pruRQA5SVdKTzXuq9YHMNWY9bGu3",
  "key12": "3Kamyoa51FKR631esEaRTA6Ke4FQsKhFkgvyJUNu5CbGCAd7jgRLcVZcM4s9e8J7tpwKh59EsZ4oQNxoyR9jdB9h",
  "key13": "5TRf3RKYYCMUGf8yHJzL3ohzCby45meg9g7KvnRR1a64D1axvkjzFN1z485BgfNvpveQjsHPzyv8TqwfifXu666Z",
  "key14": "SDtmrfJuiCDeyxpYbKFbCmwipQFifN7F22uGGdC1BBaaugwhHVWHYSMMCRnuQWFTPLy954EQNgpYAFNamYQHFzq",
  "key15": "RssaXBSswb6fTT8R7DWCPHrPrrznNQ2Mn6yqnCseh1VePyt85ucffQA4vtww5DY8dS28BdmWBt5wxUXQFNpCUhy",
  "key16": "2nS5NU3L8xV8MJhfwkYUzwyBbUxrw1tdPsjDDnMkAqDZVQyLxq4NETSmxJrWCJpasJQfPx71bBXusyxW7hJDdz7Q",
  "key17": "5XgdNey3dvjUMEbakTJsGvhGJKgswDpM8gsmWyGVCwGfqjp7zWQLnUzXsVPwqTWv96HtSmm9rkQA5gMrKvWrJjAQ",
  "key18": "3Z4NUykTJKUxqNTKDNwjigC8VWhU4zSnJNe7zXUYX8DEJuUXLi8SvMFdoqdxX1VPJ7Q1zMxHFPG7fR3woWBroJaQ",
  "key19": "2fB1BinbpSqeMi41CV13M13qXmkjpUs4p8jPBB2jgY4pmqMwQHmZxMP4HtFZKaB5KzQhzbLJz7TEWihk3mc4kqt2",
  "key20": "2cByN3oaGJ4DiT4ovPnwaP2JVoR2cFv4uGxufzevUMH3Rgv2TgFABjxchHnAetQL1Y5XTd1y2QrZTb2r8maBfL1",
  "key21": "2vogiJ8Q88bNgGokpynMJsxLyq2hgmd4yvkSC4gxQc8SWdajkcM2fNhkSusQ9XDh1tCuLXYzVC76UCJi73QWrTt2",
  "key22": "4R3hhCU8wJn6fx3hUMQ8aRdUgZDqhsK5QyBm8M1N3zeCZQ6GwLUH4636Pv7PSvUMr1uN5FfqPZMdNq8C73hU1tD6",
  "key23": "2DexoQh1EBA3F6XT3NoqvEzwX94o1BRvyZPbWjR1XE9UVtX5MQb13jYch9qS668K3CRakiMksdf6pAV1UY7xExsR",
  "key24": "2wvEAUGyFp311496tHPRfL2kvNs7ofKAocDGPA8vKH43LihpbB23gTd2eCgWUwn4EtXWJg7eu1niFLe5hMJrs521",
  "key25": "4WrtUTwHSa16p1F1tQ4bJ1GD8KDjfxUTSNuvy16pTD4tQg3uQXoKC1gp5NFAe5zHt2s2i5my2vJzGCwRsdkr2YZN"
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
