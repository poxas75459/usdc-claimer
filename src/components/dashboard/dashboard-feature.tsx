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
    "492XcBnqtHeB8DZVeJR9BfvVe45ZRHPNbDwvuRu2Y95s199xYKmxiJu433wvY5fWFFyCEG28qMHzMENahTaMibLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67mVgzpKhgVDJL1eL8aXEdFVAobmAqahxPHdbegXKS9LX528HGQtQAQfF2tiEvtCF7Yzb7pnPi9FzbBn6RAAWE5n",
  "key1": "3pErcCduLVWZArxGygWkumeuX2rJ1XCBf225pSZ95QJp4bePA42bPvxAsbESCG3Ab1cb1zJb6ZMwS2w9M7hS8tak",
  "key2": "3Hd8shegBKQAY5yZiFBnTX9rCRTZLnpzFzqGn9NgQM12NF17t3NAdiVtu511h1QLRTEWQBJpbJzSAXkUAQQUTLcL",
  "key3": "5U8QrbBqbTwQqd9phWb2TRP9w3TuC35ReRQTst9ssNMr9aVH7Dj9VFM8RKPzNF94ehJeAwLoNpmUZcMAy2TyTEoK",
  "key4": "31pQcEFxz9fFwkkWkio19BofPq4YwF3PkTXmcYutp8QYQvoW6wQCrRaV7miGPsWG9mBdhDk48J52wEcfZzXDiyFe",
  "key5": "4rG43WJMMxGY3AdfrSAzbece5Pw2f3bPfjrcYSdYvvjyvo6ZiJGGDKni5oRkzycTG7ZGW1wn31cC5BNyWEZsUadx",
  "key6": "r8vZ3J2rruv9HQr4F3ip3Zpug6FLFcPeqdWZ8qGVwrmrpR7nDiCuYvgMnqjiUEsPCc5z7ZzPrMysxYHBxbmg2E7",
  "key7": "5ELsEXnek2uQNMdiY1U9ckTGWJ5zPB4DAzu7AaHWshbfLEJCJAMtCZhmimzdULeLp4sj3iqNKFuQgV6qpRAnFMRR",
  "key8": "4DNxtVynKHfvHFJfj9aiygMtqTa7r28sPZES36BBPyXX8eHY4eD8iCKqa8KCrRJnqkbC2YDcqaQVkvoZJLNfmT1H",
  "key9": "5nQHdWsnkWasvLRZ38UbJfLasm9HkkMeQtiLUrZhjzZTSVSZQAdvpMxPNab6VniFBSPe81UEWsCtRPezaZuav4wJ",
  "key10": "udhuUgKZHjRF6BK7wvE8dG3uenhEgsK79ydcPcqwQvZWEvUHzUniZxpimQZyUsocfVEh7RSPXHw1sakQEu5t8Dz",
  "key11": "2Y39DQpfX7V2VokJdTcUC4psQY8gZiPz33dNAjehxPsgzTpAebvLbuBKvJzhJBEgFuSWmoLPW3EyyAw7Q4ob141J",
  "key12": "3WfzmMAcckCqijU5UcL8WAHpBbzVMktFRgxqcDXDzP8seBhQEFhdCmk63CWkfYsTWwkCqiz5bwud6ujxhGqNnrWi",
  "key13": "D41CudULLJryHVUeUFwWeeon9cLVX3DHTvYQxvsDJk2iT5EBHRJ786QbPryugdpKJeThJ1QR6GthUkMonuasNNq",
  "key14": "2aT16Nz7VSjAhVF7VpgMTqjBwaiAwmZJmeLhVhJgv4xvZqYHqJvaBMbwTTakgAFE8K4vKrLfnmqpoZXscDu8FcvS",
  "key15": "5CKhHY2ovP5D7Q13tR3J2kEaesCMXrGREL2c4756puiYH75UeTuqLYVcouJiyVsZN7ouuRdKgUYLJwmy9LA4CQ6e",
  "key16": "Z4VN5LpthcKSLKa3AE5bHwNoWNFBpWQ4knx9kp4FfakrNoQoA2EhomvQxMSYjjLMTyR32TKd6UQx1RNP3J6UETJ",
  "key17": "5u49YWipZsE2ATwN4Hqw1PfVyGpumc8WAKQ9gDxkspAJbw8SyU8ZjsAUVgB6vFFe9PV9tkBJvw3ra1adUEBvD3jT",
  "key18": "4ES3veJPGWdda3sPZfkGoXYjLFeo5pvugqvVR5nAbUGLMUXRMT8KXoD54i1QvehNq2ktSn1Lk54XU9Aojj1h6FMh",
  "key19": "25fpgsKYM5QJTopTjBgUgQzcoqnusLQoQM6S36zULss2Rjb5vy1iB9BFtecRqnUd9cTMeekSncnMeSp81BGGLiiz",
  "key20": "452ZugB4cJ3Rwzu6fzVcx8jaeTsreC9uCwYRXJFpj5cvWyxWsKL2KuEDDwzeVRP6RwixmuuSrg4W3zhwd33XnHZE",
  "key21": "V5yyLFxmPCpvQBMphK5xqExKe3UYSj2MrPTrFDso98DeNcfpD2DN6cvkWKjSRuq2YUAGjk4ADBUg2o8FsCQWkUK",
  "key22": "5UXeGEoLj3WYPdLcRtvRSf7Fnf8o5m7hL9iaVseUmppQagESAxxNhE3S98mqqszsK3YcJJ2cgFYhCb6HNAnN2gQd",
  "key23": "4UVg8a7bEZpamHHh9ZYhH8tRdE9GCYRGQfPbozdqyyS4ozqTbLNS5EPjUPcfJJiT6RP6vSQDBFqnmXKBe7BRNWKC",
  "key24": "4pr1Zkza3qWoSaP1BG2Y9NW5SgM4u3JhZGdrVgtvUffwBCqmoja7foLTpLLjZ7R9tPrZxuN6SQ4bhi2k5dM9LXZq",
  "key25": "639a4LU3tfrBDqwXA51nhLaKAnmZ9CA4NotWLnTCC77ZnzscnGgHLPsZK6FbYJPZahLajPA6kmAv6Fnfa7XCrXnV",
  "key26": "2a9SQre3Z3L7BTy8jgkk8bY2s1C4m9SsmkrCXcNxTdagK4eGh3okaF3LD2gcvEBhCktzvhTX5Pu6wB2rGP7VVHfA",
  "key27": "32A4uLRu7S4ZqFnbK3SFavx6wWFvmGLdQWbRkwvPxnaPaDRmjT4DvJmJh2h6xoT4asXw4UTuUNkfzkJtpurSjwsw",
  "key28": "5aKuP1BLdhmQmt8Ba1KPJr7FbLxXx1a126qJnZ2ss2kSyFgsCT2Tm5oKqkJ6tQ2KoTvjEQmDmUjJzui321HFgu2L",
  "key29": "2yZcKjsKQCqrvjDw1WX7UKbgHjuHPqWNWXX3zdMj14r9vQWy2UwZjfSL5AiA76P8SS233Mt7NxUyZVWWpYrPAs6i",
  "key30": "2AttYP5pEnUPCgzwg22cCZGVfdFrf7BGCedmbcjC8xYfm5HcYmsZJ6wbWxGEbtViVuS25tCuruwkhkM92wkRuJQV",
  "key31": "SnmNYdjGJ8fKry7YqxPEu4oJFPb939Q3tUj8kpyNVzHWZp6HJWf3H1Ewnxw5bfRSfqdMmJvjf8pAKxFBm8R9TGa",
  "key32": "EPSCmZ3cDS3T5o6fhqiDxjhztAdRy3FR5ZHUs9XZUH655rAvMgXkCFmErnZ64XLBjDkjYrmnrgM6JDghKa6NZNW",
  "key33": "2ER5WfhVriB64hiTUW3ZXBrB3W2RfadiqiW4ghVJvfMvFcahAdAabX7uFA4pm5fYeBzFUEjuqyHM3yFfxcLT1qKp",
  "key34": "5bKTtYfdsYBLepwcGisDoiCrLHtMyyUnZkEuVTAP6dbnXzNck9yjQyuDPdEHaFHgJRAQPhFwxisKWDqN3XQmxQrq",
  "key35": "5JBWhwXC9aqWfMUEiD8kS9UP2zuXYU7JHYU8RnH57Ssk8aNXpwPxEaamT67WfyDQ5av4jeyM348N8QPcpeedyw6n",
  "key36": "62N897fm6Hi57WvCkZSjKVQac7WnreNR4QpopMgK2VTUmP6PmUEAeK5A4QwLNsJZrbs2CBVAkquXLRqB2ig4x6T",
  "key37": "4E43gfnFm7o8DhjAhydpKccZkYmQGgJ5FRwtE8XKQmR86JNAcEpk5UBX9UWvzfAWyxYpVbj2BaNr6DqnJ8oBujRq"
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
