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
    "2tcrU12GLGKgffPtbJ4xsWBXTamhkxBtFNJGw3zkCMhygQNGyzrMSJkyJ3Dw1cSmww9JSWojBApfkxupdhJFjpQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xf3yrhNE2NbzjDPSBYvdYDmfYZZr5ACbf663aMmVEp3KLyeiqWBP6rgMXRtK4oFd1v54fq3bQsB2S6qHTsVPyzB",
  "key1": "5ACpKsnmgckAXPzrCu7MU2M4PSPAPiAPA3YxjCgRFJditxKRfvxn3EMPS3mR6qKeuUT8dGtBL73UnjXBbBUdRHtP",
  "key2": "65yEb94e1aHvhHfoXUQ65e9cpvBEuPoBqVJPHrL9ZkAC4r2sxQoqXbsuzBBTcJZGdpcDckKKTgdNftajgdfo76F8",
  "key3": "27SUjtDzuGkNaErXUd8djXRFFfSAwDfq9UQr2g95g5bqEiLFjyHQjJxo4JUTqwXWXtUUGZmny6t3RFqaEP9ESEoK",
  "key4": "2C5JWUrjUPq8JZ6ViCuKz5Rw3JmKGs9Xn4WjiX4cwKkCGTxJMdVosfb8TD7cj8o6RYZAT7Jm4rmZBAWoP3ZWtQj5",
  "key5": "3vkDSYSWVo4fkuuKZNe6HdGSk1k1LNhrveLEXsV5dBcFAPZ5838UQT32Jzix3w7RxXhYrB8zaVaNeauoK5Zy5R4H",
  "key6": "4QUkcePsoB8aqZ2qHpLw7xX54wCKZqyDWs1gZ7pQajWtuDDCxVcxheV97UHNRbSzhR9gWJv1x5fyYnaDtYkJn7ih",
  "key7": "5dw266QVNu16kQ2DJ89QTN4xbFgvq3jdjCeQ9aXRCDs8HFvANaB637HMaD2HvS2F7jPLVFLBRF9Juot6bGpSkeXZ",
  "key8": "5iK3P7w7bs5pjBJP4Vcu9DGxxk3xiZ2EXzPBzaevQX6cp1fbuHCFQ99xBUWJMWLDeReUe5tkLh19hfHBjBEuK1Aa",
  "key9": "2rcE6ShRW7rZR9jKBeHsuE4JPxKRZFeT3sj1v1vRCVB8ksYYY35M6MD1shj6bmCFrheUuP9VbDcsghBJVNAVf81t",
  "key10": "54ezKMoPGf3rXogidzXBVFuN7XfyeyjaT9Me53oUYoYDhHPfHqX9TbyLZxAKHXyYx8qVToiuSPeWRH45deqTxW6J",
  "key11": "jNrot1bAem29o7y7NMR2hk9R4SHrYaQvmMEE6ENND53g4Uppt3Ye3RvXtT6zPj4xj1qcGTCB8uKzqCx71fvuVZe",
  "key12": "3Fudkce49KDAUSTLvmW2EHahNUkck7uGWacjBmkMdYj4GqWV2wb8NkLqyurrMitYNtsJVx5rF2KKYP3Toje77JHh",
  "key13": "txsxyAeFU2gz7e3ic2kmfCqiLynqvnLZNEPJCrpdG1ZqKoZ1k1MWTgcPKbd6iBBXnT4jXGmxpFMmzUeZMHkhy5H",
  "key14": "9JJ8hivmVZPvXg8DYmiRpiND7GUKoVAr1myNxvayeWYPbCndUVkTqqUr1UM2RPXcZQLnkrADk2riMkuFQQKceUa",
  "key15": "3Vix6R9Ee8miyvW9eycBzZwcmszFu9rz4BmKK2eQan93WNHqW84SAw7wXvLbzhDCbx71D7rzbAWvHt27vGm7SyoL",
  "key16": "27rE854p26ZJuH75hDR4gkK8wSfutjLAurX6TMtvTc5us99vJJ19yMuyNYXWqn4o6ruShQbENDKS1uZ46xhzxWW5",
  "key17": "2c9NFp783dkvHQ8eQtMctN6XiQoFCNmDeKab1yNX1KYUrJHh9Hb1ooYgmqwSLRRxHsTTDkeFFJhudHeSUzNs12q7",
  "key18": "bNm3KekZLDGaAkdyF3snjtYZJ2gwTW7Rsczd75xT8M1TwBWM69B3VobkgZPCZwFG12tFJNwFjnyzRW7W4NtX8ri",
  "key19": "3RYNWGBN1CwjHWaBadZccJh2jinXzkcFCuEjcuWxFQb4i53E15eGVGe9R9hUuRxnWxDm7xggQKae1Wjr5Mj4MRjm",
  "key20": "4FYW3LLAWkjibSnN3EYRCKmr47oJFw9WGwSHhDds49VNiuvbBg1oF8nzNBnw98VGUXBusc9VsHCQ53WYuEZhJSJh",
  "key21": "2THpKHn4rqQZnaxNKFcb2QgwvPF5MYKFSVVm8y7iqECxVojL5XwJfPRsuqD3KynRRBxt9BToxyy1cGsmXsvFFdF5",
  "key22": "NePdYe87oR2aFA4cXBSj345FDNK1SxNAsXTGYGtydrYPdegEBE98fAdEoeEdyWDZdn6T5jkiR5zdudrUoY37vC4",
  "key23": "5hASvAhudpNevVCB5SGsbWvpkyDS5Nyw3Wp7AtXbfh94a3tozG4D5p26DH8rbp3cLYzJhvp58mks8RFBTS6kCLtP",
  "key24": "oafvtw3MHr9Z4o9Uhm1aSqB6xyjgQDWEBcTdMeBZSYXCzCPuh5XYpXNKLqdAt8xSmMnunZtDRnuVmB1ccEcKB9w",
  "key25": "4vASuCB9Aoz5eJ4ffUWwLaDii8uxYrjQA8s2dSBsisKeyTUZYdDYKvL36hnjiHcQYnhpqdnBcmaUw7QpTZkdw2Lo",
  "key26": "5hNUWgGvk35aPu9Qf7NAJMcsLRczf7W8ezXRXrhuz7SN93iWKGDd6hipnNu82ZFJpML4oBdzFN7pfNDeMxM25Va5",
  "key27": "2uSHcT6jHHHy6A2Lqhb3yv2QXqt1GNMRR9Urj2S59PXirFoonRzjdMeGpaV35xrCzVJg17Z5FoVpbnRSDepsDJgT",
  "key28": "5K9hyqdUGxKoCC687Qm4UWtje9yttWsB25H4uQsWhuvV4bEDsd66rKU4S3e9UNxYz7JF2mxBHhzdRYK15JF4QrP3",
  "key29": "5zmYiLbbHmGnSRQq9c1jbVgvd9C6bx7yFmZuf3diutGySF1C2y9LAnbHd7RcmtXjNi2SRRed4uH3eWsg1LedEjLK",
  "key30": "5vrwQY1H1jfaKW8RUbpGf6vtiS2ruaM28PxV4StmcmS3zR2chCvXHUM8nu3fpLQJfvyCytZUTPeRGcG2Yx5uBRNW",
  "key31": "5VH2aSgDRmHG7zKXgHuRk3P5eXPayeMyebftziKSBrtqyZDLcvVonjGzBFZ5LDxVEcKCGxA8Uiv816bqcgYeveoU",
  "key32": "4jHh57SNzfLyM9kkBnh2D3mQWvwpqQ14ApsmLnGzhcuMJt2KhMhdQLSyUVqCaKFWuP4qbQdaqsSYhNcQFgrJ2rmg",
  "key33": "3WpcwuVppR4X2ENZWE5x14BR8fjcYfbv2Uadw55v6Y2TW4xhJuBVapK3PgrKfyn6VXABjAkcBnaNCdfXxbRLivSx",
  "key34": "4DmZ8FPsBuRdLm1GdQvgG7wUaRLjHGjhUM4tccxSPWqGd63JcpRyQVJiErMydt4GRw8GMUKCoeRN4xP7bvPWpbn9",
  "key35": "3XtTurgu6QYfqFU6hwYhidP4oha6AYRsWvi56pNj7SMAxjbNosnQDG4fWk64SwungLYaKp2dbbn1ktfJ7CidcfJu",
  "key36": "3HGQHkzNjjvvk7ka9qY8YhKWuGWAMaTJV82iNjh1279rns86v7P2TfVnXAChv9fPxCHecoVuNHGwFFHLrUojnyu4",
  "key37": "tEnjUE6RyP1iE7ivxzUu8aPtf6VVN777iHiba1s97prWpn3yWZxe4zvzzByrK5Dr8Yaye5vsdBgXDVrf2TwtHYh",
  "key38": "iTcE88khiSkB5U6q5S3kWQSNvtPADkyiuhnQ3eqMCq1oWTxAQjxbFaKCxUW6K8KkZVPJc4qi2uUYgncgFccCtmh",
  "key39": "5VgVB9huqun3MCt3vL9R6CBeUgrt46T3AjFSLoYK16cCkkzu6FokxuHqr8LwKqAmrDfwKYh4BBZhdoNGEYZnXMW9",
  "key40": "e7zJMk8oWshPbNZt4MVs8rxVR3Qag6Q7wMPqXYM1EDtRLCANRfrLzudoBnzi911EQ6sSRfavM6i95tqW1rWENdT",
  "key41": "c9LW9f2fS439kJfizgkLA5FZunaBcYRi1g7GYbput8CTeA757iREgiDHyzRQCgqGLimc2wr8grAYcpa3xvZk3v5",
  "key42": "3ALa17LtYfvdwrVABPTZrN1C5M4ZDHwUaFVoANBPFhwYKYfncAkRuVRLubAd59wmxuCvTEaPX2foAWt1CPqYz7gx",
  "key43": "5MwXseZVx27sXsrW82JfNABSSGFzE51AbYEjUJpBGwoAHi8T5hDg5nYnozuiroNPBvLiFPds2WedLwWNdW5sb3kx"
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
