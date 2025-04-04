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
    "2uZv9e5QBt7PUJGYeHfpDjTQrdVjG2xVSdsJfhHgNo9gpoKfNaovzbKavHAFDULrtC3A66KrLedtbcNUdTxn18hy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BiTzS4qQhvXRCx3u7fJBgdYrexTckNu66bFpqQA3YYeZHeiL9TSS2QLenAATuxvXzv3Dox9fmKJUpUfK6oBkGSf",
  "key1": "41eJYz84KwRsAAX9TGjX5GnztXWwnHjzpD416Kr2qFqmRKhPCwrrpzyADdedi22yviNdmjq5DpbUPxkmdQKWbuCG",
  "key2": "3ebMcCBcoTkUwJBy5qUkjbv1dmwzr8DA35ZyuS8JNmRp77jUA3rRHsjnyQMaX9TgfyhD4SZcwee1EHo6oEWhkQVA",
  "key3": "yzRvhhNi6Jaof5EcoyyzcyJxtgVkzzxmUe7ZNbHqD6Ro1tXzUm8kxBCFZHC2Y3Z6L9zVkH7ibbg6GaTAbiSSYCU",
  "key4": "2fA3fmEdBw3y2rj9oLFwaMi2JYYsTjEYM5u14gDJVU7FwsgUHShghCtjZKx8qW51Xst1VaLr4NNKLGaHvCtyPxAZ",
  "key5": "4GYUFeWeE9rLABRvvP77UknRgHfhPRmoiEXc5LGtC1HEGUsw7UBLB6uFFqaVv4Lw1aWC2LTGBFpLsLuBGBn6q8gq",
  "key6": "5mM6pejykYYa4PxGxyVDhK1jHmMYMyBrhs6iugycBcHxpjoafbdy59KZqefDStj7EuZepp7xswrYyjdcCxS15D1U",
  "key7": "4wPUX6NAy5kSpBWfsApBfn7eW3CDnE3kGyeRYpBCqUfMNF11X6Th4cPPiWbw6SrN8QoLrT4rq8XJ7SHh3j67jRzQ",
  "key8": "5gqLtUuGddxg7H85iWEnwH4D5k92B884Dq47G4zA9E7uT6YyNPqBqHEy3ZEfzUBndAX7Nt4kE4qKJsQ9FDPEbffm",
  "key9": "chnEo5Leo7riuL4eJQiyYsm5GDXXeY32PAEv1U1Y5SyLLTeGSgD9dxMqMgeys16EFGKQZp46rr2wAxZmeWgwc7t",
  "key10": "MZ2YEBkUsLkksrdtqo5HADN6JqwDK1UnZFcAdjXxnJsWSJGtTdmYihhPTNm746nw6DUq17qqDASenzJTEtu8sSJ",
  "key11": "3VQDiTdaD6q8fX2UyCNSiNpqQR2RLTNKZYupCfTQ4Vhj7VVdkFSiJaPvXr5zV4fymge6HuhxicGqwWaqrjfpCf4w",
  "key12": "2KoMDgnPNfC1W2rBTVUxLumcjBY37BFDKTzPp6AxmpY5bwBi91LsyNnY5LwngzCKWqWwHCTj9McGHj5wk67eBh7o",
  "key13": "5m1WgPe45SuqS6PH5AE8p892ULFMXWZMeANTgiWbpy9HJY4H2Fu3YyxLE4548DGCjGpBUM4gpPjQKFDvqpSYw6Ci",
  "key14": "38Ug4oRd8ofxRGXScbpqaBNZSUN1sfWvkQm5hGfAyxk8zk48vDePFexGfdBSwtvBe1LCwDjUrfYBnW5c97ZvYM3C",
  "key15": "5e2JkvgRY6FZy2dnydvGG3oMeP97nyzvQBhXugzkfDbCktWt6saAMriaeHS8XwvTL2GfKf5h6QzFC5ssrerjwPV5",
  "key16": "4U7FPZtk1ujSVzJekDci6yWuEw8qRk9MRfUk5MkCpt1P7fQoL2fTmkMjEzQZZAkSu7VGeS1JgoiTM318bDKbfpyk",
  "key17": "5i27eQmdUjZQ7cDFLbiWg4sGLYyWAFC54rFpqg1haWDP3i5ekdapns8okqVoqYmKiFoWq5Lhsn81LBzKnQJZ8aCQ",
  "key18": "qq1eU9UG3yjaGH1Q2J8XB2U2FX3Jt4uCKyVxSJM1hhxk1G7nQtoVZnptwSxyBts2KhVyENTwm9tDRZsfqrMjzCG",
  "key19": "4R7mUn4BnvFvNXovUxp333mDGnumWW7aV2CTvGSp95GJtbiXfq5PiTh3oLuLKyffFaASn3oSbhFztKR44xjVuS6W",
  "key20": "2SJhUaCfacV68YM4rNjFEZBDZ2QLEKRdgnzAEYmGjVyMJnUGE4wasD39Zc7b5eKFdQdyN11BPSgWXuFAzh6JFqwW",
  "key21": "2cAt7oF4ULPSRj3McQjeEWhvFkf9AMUqW2NX6CK61YdmV1BKEuHpduowrCo17WBzeJ7wDaXP1bwyS6Qcj1pHyfz8",
  "key22": "4aC7Vkn189Jxgc2Kk15vpmoDKJn5GjPXfq2Kgb9FJap6S3r85Bx2wrnA4MswDufvt5rwKbUJckAWMVDyMD2UwXNF",
  "key23": "21ECt5oyseuz7hYyZJbdo2wLpb4dF4ehw9drJxjEw87GdjAsmzuPo8WVckWoSxJD5ucJVbjp28AHox5WiUwgyDm2",
  "key24": "2peDAxWHKJPhLHPRMGAJGAX1WSXtsVGys3modrTa9ZZzbXXHjGmX8nk6G4WEVrbdQEAF23hZgZgsS7RDprb9H7oF",
  "key25": "4sY96T5vuX8czijtPkJFn51Mga1rYaFKhhU28QfGa9DCD7T2PkhG8xgt6LABiYtJ382UEMyZEsKQQztXPCcpA3jz"
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
