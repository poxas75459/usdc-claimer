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
    "33h46oQMscS4sM8eeFNEF8Phuj8rQQUvWVxz6btNuNkyHJyPm3gFDRDHGa859Xnj3QwyTck6PzYo7LssBKAzDbLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wotgtyvfQCQYY1G78H5EwEU9ZVv9zzMWB6tjX9AjNkLQXaAv8TAxGe6QpPJ3DGXoUgQcTuBSLXxBd7Z6pWQmaFd",
  "key1": "4JUGTe51HY2rtZPa6YLCrNfG1EJGadkBA4UNSkAFNBZxpq1WupPcn6GeaMZqJ4zc2gQd4cLdKfohD8TdWcwnxb1o",
  "key2": "yVtvQzxLhGs2ec4iW77fTUCZmpGkGGwsoiGKBKA1JT5nhaWb8QHFajKw5jJynk1vduHSUZws72pkZfShGct6RVL",
  "key3": "K1CBQEEo2gpBP4PuCKoaKPMeh1qNQXGMKowJficZapEAWHvShCB6qSMUZpnzEkDY43Ksg8tNLXYzNy4LAMjmvqG",
  "key4": "2oebmM8i6JfeFWoAi5zbFtQtckzDzhZ1MBBcvEdtUhDfymRoq3KWSr788FfZvpiJ9Lp2TnsFNYRwAkX7avEkJxti",
  "key5": "5uo51abjKhXRwMWitY1n8dLC1BvkyMoYrPxET4uvAuU54AjU2ZfVGdpgTPzLoAsjvnZ528WFcWmVLkUkYjWJDXTk",
  "key6": "5Hz63NqJRLb8xj7axj8cAnGA7eXNmiSJmfAE2rLWCHognBkG5ri3pxkA4fmXEhNLvfooNEWTRzpSaJShyK8D7ZhP",
  "key7": "3fGLgKDEPizQU8sS9y4zbuvFYJc6ENLrm6daYnUKKUuedLHfHHQtiziety23FiM7jYeJ5v8QJwiTxAw4HHZU9u1Y",
  "key8": "HS1irLGwmGYjgZhHp4fGKwkscj1W1r2M4J5bk8wi8j73sZG1Kf29XV9esKbTwoWcEXWF3hfC8PwSXvruRzcyxyC",
  "key9": "4Gm8dmHvnSibEd3G1zh754AuWSimkznmD4g6BqxzhPDm77ewctuYHWWAPYPcqxZ7zKHa1NrHv3CHQ5PrM9p7D5xW",
  "key10": "3L4wwaduZ7L6br8hBbHfTq1yZmBAe7G47xtUeaTj3UVCWZ3deiCYN4Gjuf1ndUzY1ena7k6ujcucJk24SAXpDYvJ",
  "key11": "4y6g1SAsqPSMaQ7aggixJUiuLyGzJnw7zizhBR2rjpUgh75fHyyWpzkVZgYzWiPUeD2GsCj7jJkTZ59Gzp7BKGtg",
  "key12": "4Te2yVdahTL2FuoeZivqcf2ZEayz9sFMGBo24r7RrnpuzusZwBt5tTgX9sDnFZtsM6YpTc53eomLCk5WaoX7p6zh",
  "key13": "5mSkiwrYruofq6DWDkXLJJL7cBb9YFofUv9WNwqT85tQxn34ix8YZArp8rgojgX47xGtrUXdEDX6ZbuLxfqcL3ED",
  "key14": "3j22W634fK6tnVEULU8nwwaqht5XmCXfvR96UvqQVmgCHp1NCwxLMJNZrd2VATVSrAn6sSVS47cEWERS8SZNsFH3",
  "key15": "4taoa86KWRBvC6micKYkWvPMjexgzTvoECZNnksWxEwVZscJfmYsDYi5TYpZA7YDwd4TCq1dsYADavWMvF39SPAV",
  "key16": "3zRND6HfvUNUNsQ8VKNR1uLKceuT72At9CDSiAx2L25hovJEeWJCoEfKUnzbeHEKWvwsN4oLxsm3nZxA4DvNGQGc",
  "key17": "C1mQ3bNC6c4z3239rNJgLkoudWddo1qV3nk3yGEDwPXR22YsCWjYuFdrdxeWgyGXsmUJ2svhep8tZx6SFAaXx1R",
  "key18": "288j7nZTjXhygNiUSmhkbzsAxLXcT4CaiTtDrh4PrdmeYvDDkXewARXsupxGijjjWRV9ooKh3TbBpAyx6ttdcUzu",
  "key19": "4keRdjxt8FYGXb3QVStbX7LHDHoVvxrKTAE5QwgwW8g6t8HFB4GmuxLizLbUZuwHgntXD7YAMqnUvqQxCvvdahU",
  "key20": "3FFutKb2BjHnzYYUqe3WcfoJYhQb38MRLqdwxCN16BTFsGotGABcftuR4TbWvr65fazqT5Q4nEtoP6eXWwo7h1yB",
  "key21": "2RvBdrutjpPbrGE6Tymi6RQxxEgATMRAPWx3g766SSARKbpTw71EKffkWGJrcP5HxgHVmbPjSDCJuE8mHuNGd1Rn",
  "key22": "9p4EqhHSB1fyzTRhtRYrrA1WSXBuvqeDMfcVgTJHHnapdyNFhyrajQLeLqpQGw11xw4zWmZnu5d6WVqC64WXu8t",
  "key23": "5Qt28hxhBqd7pnJHsq1CAx6ApFuBTfzL67jeMmPuaQQJK1GsV4poKU9ywypkHNttj6NRkBEERQkq6Z8V1mPcK4Ft",
  "key24": "41bTewHtuwQtUCmc8AJo4xbC8tsaikLqNUSHn8dujmVgWEx1zp6uCuUbKF5px47SKFCej94WjkSPw7r3MQnwPW6",
  "key25": "4eMDPUkD7WxTVvb5LQWeixAcfG2TbKYGSZW4baCzXJpoiJFMbHAEk4i86PGj3rHQ1adqrwVevCYovBXbGa3GhNzG",
  "key26": "SjZGbtQQwj65XWW2FGp28eoHA6HhRbxWnw1LZ2QnorxN4CZe3x9ZmiYvcRebfzaKKit22nvh7UAs3kvVbL5NvFb",
  "key27": "viL424HCyEPZkdCgWb1BrKtPWCW13PUVZfVVDz5YhhvavEo74KatXtbGyLrdXaV6XuNaWnaY3LNxdGi2WP6yZDE",
  "key28": "3bVDbwCnvWaGgjNg2SXNGPeYLpgQXdp7WV7XWQjL4SQgfHzvH2yrNYzNYqrPqamhekGUtfzMGEsRv863U1W7irMJ",
  "key29": "3MhM7VskGvZkSh7ToZRbtJVc4tZ6ocaHTzSrNEbzPTzTCShRKvhUk5UUxGoYKTfWGWovaJzhLUKwMmDy3xNBxc8B",
  "key30": "344bczppvXsXjHeXfut8gppxgsCrVxhfATyVV2Przc1ziacEHMqrx6LY6tnLdGNPdXSGvh6QyPNL9ujNhk5AG5no",
  "key31": "5nnM14Fdq8KbWUQKJmBTTCaY4W2XQkHwegtCgXpLxsGGvwKgE8t4JELTypbFuEbsfRgs8hHumuKEmNEwJat6Y5iL",
  "key32": "4DdZ9W1FuznwS2w9wmGv7wmNgn9VxuDBUrmMsgmBfyhUWxjnYWNVVtG2EGhYUfCYr4atYSsLRcEmrGr8vFwV62EA",
  "key33": "2ZV1UauupaWc1gDggQSNXopRBUoRxad7Bue9QENuvxPZ9X1R4DyXHrXJtojBHzZu7tXEehjvG64Tq2T4w6tApEfe",
  "key34": "XjGxv3f6HfSNHL4aVbudWobMENJAGktq9ewRpTb9SKo8tpNZdZMdY5cR7Tv1J7mQhLaitCjRMzL15E1HqcgfHoU",
  "key35": "3f8R5W6eFfQ26TbrJWJmL2BuYZuuXeZQTMS57EZDC1THcvnpnWoUU9RekCsyTWwBun7KtgBdTn2pKQJQ6KJ1DbKB",
  "key36": "3ZUCdNew6Z2wFT3ABndg2uBL7zcVMjMgS38Eg81HrkJTfMZdy7ydZmU1mF8qCw94tPh3deKL9WpdSp86d3gDsiWU",
  "key37": "4ML5Yzx3j97LzigBPq5aunxBA2VXcZqYC9xXqW9hPCD1R76YTv4HwTb2LVGcYNNTFyfTYDWxyPoGwYXhDWcZSTdP",
  "key38": "3jgNWVNkLuX6NWsevniHoz86uqDDvZtX4S5suFvmthccMvf8ithMASjTFiWrNthAiRJCLxEzs33inesWLBguKgep",
  "key39": "xZmJ6v4NMzZuFxGbsi7oYq1KZBjUnohUZ6mbu5SxXSCThGFk3jBPdsAdSN6TCS9i74zvmrAwTyUqoyYxjrjByPL",
  "key40": "vbqSmqEsGr9PHdcLULxEE1Xtsz8Z2R6GFN5VjZRs6TXybjntiomp7HHTpaLJhZgQLXTBAiPjLYTJ8fcyouW7fyj",
  "key41": "4Jc4ryx6sFxytsHf3sek9eWZRNRaVtYFPjj52xr5ye1NvRNZGoDM9SeevtGWSXmyKAB1vcjk1Zk8ePpbDtLD732b",
  "key42": "4zjEBXzrg9QSnoX6dtTmXzKjY3yxb7vQLoA3gaY3HCNuVFGzQHtcX9MNMs9mdsJLuDNgBF7qcfMz371FYwY42f8n",
  "key43": "437m5Sa4ZnCJ4ToZwZriWZWnzq8N78DjH9sR7XEYFhvZVDuf3nm9WU8YsBsZMMUEEQoa9aTXDz1nc6gN7iXLWDQ1",
  "key44": "2V8v1RTbwmGY5EKPfi1nTejK2ekqfU8nQYKokcdqtHCctSaNF8qtc4wyTkP8t1VE7FBHpSAURBq9yMCn21iXYEuH"
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
