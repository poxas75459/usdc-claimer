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
    "4HHNaEACZrRNddm7BVyS2kok67LYtrDoRobjqbXqAEHvTg7R1NNDD9WXJrv6GEq45VjD74oBBbmBMds23ufvN8A1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWRNg5xvYRA317DDidgZLHwj2qb6fnEy4oLsuxPxZQSxRTqc1KMVvwcc7b4ZVCNiqFsTioUdeaiwupR4ypL2CrR",
  "key1": "4YwagncNxPeA8ju8dvxCfgzLAKJe9Gy49ENvwnzrqBSry2Ey56kJGtKSKMzUU1jaHfkzAiv3TkGeCUWdwjE1gwVk",
  "key2": "35h6QAYTpQWqg2NfG4mD2hyV2RAgevGfjenbqUzghfazWq8h5ndpCwSfcyJrkxE6hBpFEDZBeSET1zb3s8hbQeWy",
  "key3": "2BbBfSjEdNxrkF6WqtEST8Mp7U3smLh9VnxUVLq8vWuV1d4n13jw4GFRXUbq8u4zPTCqRUcV3GRQS5pTikmPjjgG",
  "key4": "5Xhx482DhHpRVGFGjhwY5L3XRyKgtVurHQJZMwKBmx5F2AF2DpZ9GsARp1CQ8YvgMxs9pzmCkp9V6DqqcZobuhZe",
  "key5": "4qfTEMnhQpuwNm3kYbFk9rYD71ukU4uJkYbNEVmmpLjnaMJLVfFvTHUrmSYZwHQX5xsWheq5aQgMwHfazc46P1hp",
  "key6": "iNCaENntAckFaNANWfwFYaXSJtXN7AoZdB1krQuLuQhmTzcdgs52UVMsgdrfhJhpRKQK3qkumkiKnk8nAFfJrnt",
  "key7": "5tgYV6s25Jvrh1BvH4dzPXpqQhh6bwRk6B3YSWYXrbGgP8QXEeuTfva2gbX8druBzyEWGqTcArBjqPiQ5ibfzkH2",
  "key8": "5dywSszdjpfXCwx4dFFMjS49naU6bmD8VL811LqrLpTk24fUq6kmMb4UMLeDseEzBjyYHnNmr7Q1QHCCjNb9D8Dn",
  "key9": "57BmxxZs8CgCm1mZKCf191Q8ECAzzZWTwypefU34sFFJdKjKvdMzpKfTPizTmpyWt7NE2xGLU97niiaJQppjwKw2",
  "key10": "38SxPxtMQmWyJZs4EYWSzWq3Aeao5EbnRxkGWeozLWSZvu5aetrEsdLYivYqf29k7fu3a6fwdfbQq1d41ytjyq3n",
  "key11": "ye4oAAmipr4VcSqmGoNnrVe1eUsf1Gh8LtgtNJGCJddbSEoELtLgBJryQ6qdjm2bsNjPNpP2euEb7obGmUba6Wq",
  "key12": "5FHtH1pz71NkryT7C26wsr3GrPpQksPTZeVryXrh2Y2X8NcE32zi3DaLGPexW8Wa15pGGk6z2LtkawDNYret8jcE",
  "key13": "eTGmE7ibq6rovGtds9QWQyN6A7LMErwQPduwncvX5aWZ2GLJJZsLiXQB2k7rkses8EgeTy5J5bU4ijweGeJmRr4",
  "key14": "2nAyMsQboX1MU3MsW9WtNcCL7NoRZ87qkAwk56b9GP4ud94jQ85PVYcGJboJsvYb8Vi9cyTVDJfjydRshTJ71AtN",
  "key15": "2qvsFknLuQ7skLS9GGSSK5MhsBuVhsF46VzkwBezPhwFLBCm2zz912ssDkq6ajoAqhxJtEPXKhLMf834dn4ziX48",
  "key16": "54EMwaMVU2pnVqkJ7QXm8oh4oJbodytuLPbkP2vjKMi4f2XV5GjxiLbsfxLKkNFoReQiiFyGmTm3ZtHjv5bXBTwx",
  "key17": "643yXsE3zPdsnGq5DLH97rFScAvFbX7fPscP3JWqZRUUf1NhZrEe3R2affPwRBAU9SjVVwfeXEQjFtAM5BtDy6gh",
  "key18": "56E6whYFrSjBYP1RLru8DLDigaA2iiBJ6Jqu9g8H1wbtemtsjX7Ev34cqZ3YAc5K5212A4uK5mNLkGhTtTLD125z",
  "key19": "4eErYBjU2RHjqPbnoZcvGDP4CkNkrRf3PaYqZsLk5DdDiYkgutjfsEKzjqryFreScf4Wko1QKnwhBUvZcxRVuVEX",
  "key20": "4y4ZLqseTRnwQRQ5xUBgtZFLj5a4xaUjjAotdojZVvDMZmvrEj31wrMU8ofAVAgz6e9nUNTMHM6JD8hzMtKqPwER",
  "key21": "5D6ZYDK8D9kALcv9W9vxrRqjcEPzCwHuXYBQL38irR4RCJjg8XzHJtesTPwcGWqTCKa5JnQg6FTnD2ehrHcAvoxq",
  "key22": "4jziBRdt1n1d6hHR6FMfFvmymQ4CFuERAB9cbkYQXA6JC9F2WoDJVZE7wWbAqvVcTddpwvDVf3d5zJBtWgrHm8r6",
  "key23": "2hP6cR58TsxizYxzQzfLgG5srfh9EwZVsUMhC6CJ5y3TYFYxDxokNUMSTkgQ6YUcGBTtwk83tWgqdDn8476NNKeq",
  "key24": "5qxAiCEv7gvfZWzoL73yVLDpzoCfKbWm6LT95LTuv4D83WvmbUfuTaveTv4BCrVAKCLUfzt93fW644PwRTVFcNpL",
  "key25": "434TwjwWEaH4wyT7ihThCGqKZ1sYNWCKSnE4EUs9SeT9TS4iUzmMnQxs4wyL1y2R25g17PxweNTkBdeSg6dQKBbn",
  "key26": "5C6FxXXbKvDC3ZtjNYrAkXMtSxJp8LMVQparG6Bzo9xfDDGtZXevaWPAuap6Xt8xGFoQEVeAGty8kTazC1JgA4GL",
  "key27": "4pLU52DMiYbmNEh7BBvfSunYHrmc4DkwqemqcTwH4vdZaPmHs2MTabsxg5dVUm9efSgrcAL8PFpbLE5YZaAxzmfs",
  "key28": "ZuRfmfbuVNokvAby7qH4tzdhTtiSsYg5W8rdWigpZzeVSeU9xxBwARe5FLW4j4oKrx51nx7vyTdt35GrXAn37hU",
  "key29": "2HYHFN9xtRfWeiRtrobjP9Jk3M21kMj5ETH1bDEkWgHEAoSDTLwAPu8p4VjmAyeVfn9WoKhA2z4EmDbHk28UMyDb"
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
