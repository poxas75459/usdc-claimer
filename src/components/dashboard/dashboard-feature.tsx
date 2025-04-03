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
    "2PUmdhxB6MRh35QdCwxmnfJBGCta6ei9zMYbZbuwUAf8Ao7vvEXdD5tdtsiNc4Ppo1tnzw8UT9SPJZFreM3naGkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4N77t4GHn4AKoqdS1DuiephVwru2NQTHUmX1MUmRfYhXAKhVHbZFSfsJj4h44wLi81E2h6P23ewqgAHrVvjwvt",
  "key1": "4afuZpY5QEhevAG3xxsG3QMbqd2DGaMPz7Bgmjv7bNuYWibXpozR42Y3z79Ku9dqhAg6Tb7BjZi5EwrHqREg6Q5L",
  "key2": "5vneHXWHsZ1evJ34SLXwvLpACXAmEepwJcDJiJBjR5mkUzrhKQLNcjbCvnXnd8b52CAnYxchfHhmG3epqo7eRYLL",
  "key3": "3vkK3dXK5oxdzumBZwskMTHqcDziQa2i8FcW6yMr2UxezhMuS9Av5wj7biaqAi5w3DgnHSK5emUChCGrfk6o9Z1L",
  "key4": "44gxgoYNyf1jVC1vaQ13qGykZDZX8Jgo5mmQcS7rZdRVLZWAjxGiqb4HgpwgrJNmBowi1zoYpeSgbhngcXv81g1c",
  "key5": "4qEtChmTtkKyeyrDyW48uAmLJFBaGaKXysxjSLLpCxWCkMFSmm5sBHN9dLKY4seyjFcyJVfes713ZTXAbV1KHCkX",
  "key6": "5LwhhsrAgh7SQegtDoBpyfkSjTTuW8amyKgtG5yyDxLnoEXAD4uPnwFU1xFTq6WSJicZzKWcNeFWwWP9Kcmc5GY7",
  "key7": "2m48LH69XUUebfADSV9P54oXucXngKeddVSn44cVAM6thatJVQcFfWtnrC168VzLsQWZaZchoyb4HxkqK6zbSVgt",
  "key8": "2Sd2o3YG1RjcW6ztnLB1v7PALFqf8RtADG5tCeNMJZQbsELRqY4udUKfuzGujQL8TxsrbuWcMycTZgtWVm511z6H",
  "key9": "3ZxZqkpnWtS38K6imCeXgMnAZcCHpovJVyL5DQ858U7Ln4QNGXyKfLeaqYe3VPaabG2hbfZMQieec29fF62C55w6",
  "key10": "5fgddPPf8u7SMWhDbmLCgmc6Yf1RUg4fmfpffgokFtQQzBPZDdj9rN7u2n8nHQfPCY9NbpnZmLzcwf1D18vWDqoS",
  "key11": "2xHZYtCNR13hJu9JB9Vco6UjdFr7zjas5EiA7jHxHiVjvzQsoxsuVLovM4YHfJZhJXAV9TyuePLhWo1haLTQyAwE",
  "key12": "BVdArbCN2itzYqeaDBewuLjuePtdvTYKokQGT7GP5DJFm6BMYPjGapss1xbw1UETzQQm5wGJpAaJ7FmyehmHBSk",
  "key13": "3j6MfZR7YSLMhMgY2CfBV1uthSetNzrNWwJjdzen5n8MPu9dDn7br35RpZZRdTPBsefrQED3f6CxncRDyMEzTieP",
  "key14": "37djPXGDAiHWtUxRzQJqsxvCbMKbmRD7vv8cVCzdb4dPiHGHrnNsnX1mge2rXtqvuNpKdwMCUH1yB7wqMgMLk5Dy",
  "key15": "47PBcPT66sLciDtaJAYjYw7dW1RjSSE6NAUUyD8qz9QQQSg2fUXMBR1XwAntvxg3ZQyYFj7YssMZj4VnAwKLY7sm",
  "key16": "5zChybkzikY8MukksdfZtxqR1iH4kVcJh4hiChn4W7GxavpeD6SSzFHpaycuHUvTeRZGUyxbcsN8T3rGL6RuTVGt",
  "key17": "47L4VLNnQgPTWU8DiDDjPYQ2mzYde5TA1k4okaWRbLk6hEWDWB5AGYVVahpMTYC4hSqCojdatq9zy3X9Fty5KsFT",
  "key18": "6fjf2rTeb4B8PvhAY4egBDn2JT8FQWkVmYSfBdHA6pkjZ7x842VNXCAcrirayZfFnBJPFXByqEngdzYVkuhNKh1",
  "key19": "23u42Y3A3bGtNM2iZ8fz1U3HwNeMKe1Sikkeyqpoc2xsY7pAvsz6tggFHW6Yw5e9YkzxXRwUyHzRfgTeZeuNuvjU",
  "key20": "N96XmHSJSnJqkXrA1E9xDiaADgbqYKKNamTGEnZKoJAQwaLjeYnffW2xWipbbpGEmkz9hGqbKBXGbf2CvdiW4gb",
  "key21": "31LjS8dKCha7XWdRoXb6nVYbtJEFSJziHBCt6L1x8PX4iGwXCQ3d2Hz8G63QewVfhaEbHsGvCvngr5mgwFf8Qtti",
  "key22": "5h3Hz3xiyZ8VmV9HtdWSq5xiKYemdf626k5RJhRxC5vMChk1W5ob1LWcrgDg9iyGkJaLVz7LoHaKKEdqF5WWd9Ea",
  "key23": "W3YfPRqH9n2M4Bd1PRZrw2J79oVCZ49pPohYBkp2nAqmqmVNbTeHqavJ5djqmf9qhJe9xnxuzxdJvQRrhGtrYuA",
  "key24": "3P6wHUWsKZskx9ebymbV2d1PJuCuHAAEdiEmuFMcGJn4wTVh3NQtRFqMZrz5GRQRPKAh5jE2r7JN7Xu96rPKwrtP",
  "key25": "5UdaJSfD5p3EUDae9QnVqDu3TGt2LTxVfp5xR8qc9SAVgyHutKbrmqLKv1r95jFZLpfHy2fo4VynPYxdFJrNQrtX",
  "key26": "7T7a2dooS41oVGempgkaRoxQgU6WKvNtR8rCKdTY5jpXsbLHFCe5fUBiRJLu6UTVKcJgVTBhfGeshy2GbKrCPsH",
  "key27": "YHjWpZWBEhefU2Sgp3mcAmQBbnGWvFgVSLRDuoFP4xeg2CzoPg9pu7nwkZ5JvPHz5YTuhyu5E1cR6MDuJAGoHHR",
  "key28": "67gDYQddM19b92MBvGpNUeNGhvrUA5wFQYBPpCmkELeYBsJRMokpqbAYYoYVnHZvgCEEjeciEnsJ8Yi6x6v9B2xR",
  "key29": "3Ld22cBKXNX2zhurti5sjtAE9paJB5BJtbKDAEfzACEhKTRCgqN2giNu5Kw3L2h8k8B25M6vxiLeGdJFVmgG5pGJ",
  "key30": "2cqD77VQz2jDqnhBrfnLjxkWKGJm878T6zn9awngsRj4NTQDsNvNNf4x9faD9B2czvwntvJBmgABtimV84B6RBFE",
  "key31": "2ZSJFubXmXCdSKAHq6HY6qKKp7c5dGsRijcMafxiTveEBvK4rTM2fHvap1fEkvsRgRJJRxgYf4WBV8WgQRuo11HZ",
  "key32": "4VjDczB6NQ5DyAiNNAR2SBKd47vZFCi4NKk62hTJsAQAPCdEU7cvkFY8q9uDjmVHCyfc1t5WhJYZUBXJ93NLNy4Q",
  "key33": "3sjLaPmscZmXTwnirPgmhn7GVZkQryKu1BRaesm3sx5Xfh9mFVAHWsQwJDazssEQMQ9Up3aJV34oPgNnty5XYqKY",
  "key34": "5ym7w97gULuZmi3WBbfpkQ2sevWEDSjMPTmhW4tF6DNEkTnWrKR7ozPzc1uv7M7f5HzpYUntB3AiR5i7z9fHq62K",
  "key35": "oUvA3nv3dAMT6NAe8c8vsiUbCXWcJW7p8vUM8KNzp5oXCEeGdY48wpHqqdLdDEqDqQCAnKuWwmBnJNHHbFyqrJH",
  "key36": "3nRPGPkTHZw1cLwYXsfvfdUCqwAkJMcX1TE9xWtpLBEwJY6dwASDpVP3VHtAW9a8d3kycNuAc4a4m21egxpYD8RL",
  "key37": "5J4N65Fxx9cCcHnYduwtvAhmA8g3TUiKvjLvHYJcR6QeqkuDdkNceaxKoVNMnhzgwb6UVJCa3yczPSa5EALPCdma",
  "key38": "2iFMjbayKGcJL7dBpqcEAvMVcyeFqba4XRicf7M5DXZYjkk6V3KP38r4WigjV8Gvzz51groJwJkRuBc5d4kjn3CF",
  "key39": "5pvfjMTH8Rzv9oZFULLR8WzUfSbACYdwCJSyRJxfgeyMm1Vt62SAWkPJZxEqCrddZLwm58kpSRqQ1pJBdo6wrB7x",
  "key40": "5JeSXpKVULXEJqbPAoY1tkGfkSCuj2Gtguye7srW4XJuoutXyif9vC7aVGUJBu3B4GVBYedCefhkcqy8yNvTgK6b",
  "key41": "4cb5xuMkyKm4wmMqVj12cDWpCzCevRYgERjDTmcy8HzgXH38mUsrps34kPZEXdjgYNKsbQKdAgzVAtstTY5PK7hB",
  "key42": "4t1tJxh9mnP9ZYeuV5h2sng8Bx8LS72gQQRWR3Cnr9Hoxo88yzVtuiLpWn2SBrMZhXcqUhyjqZvW1HChTGVha1fi"
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
