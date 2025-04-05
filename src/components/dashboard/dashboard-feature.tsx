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
    "5Ejmr4NuYZ1Bkq9wxAxnZ2Yj4E5JTtgEtMUQMGshwrCKYUTQ5Mtou3RzfjjJR9YcTzp6FwttrVd7RsyYcTqDFyiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUSBDVhNyi9QEGwrZhXkCv1CGkmjnYeGCaX6RxwT7qZMdskHC61ouaGDFwZ3LDFfTJKY6Xu9adjMszFjmUgBnH3",
  "key1": "41KCkb6JRppLRJgLDfU1wqemRpab7pRz1y8YbYoiGBtd87zAr1AKB85rD9nAtnf6sDH5cpCqa2fQETkyJnor12XL",
  "key2": "3CkNXHHVN7BRXYv52DVpPRpMJQfUYZwwRWa6qJMsDGML1Atupkc1A7gvKVKWChk1WYwaTARQQs7JwSThY6dxrmL6",
  "key3": "3G64bwZfuNj8jPLy2DbDPUBv2UWHTTrX6iqfaPDH67nme6EYrQjEFB4H2sgbB16iiaMFvWgdgsgL46rNeTSCfWcy",
  "key4": "YQtjyprdBySfaP9YiwkB8H3F76Q2Hp1xhsnW19vPze5zoS4EXBKwNZERiiG3sfAMLc5sbvNjuCY1F5RMcPoCZA8",
  "key5": "2siscUseH1AqLZKHhbpsbsbQpQpGWTuWmiGgEWdotLyc9srT9AxpGL2B8cVTkgMZmKQ8CcKhmMxXcsWQrZoN2gVv",
  "key6": "pQomiRtZ4Ukhkscmenk1ZuZytnbL2US5i1XKqHuEKfCmEr5afkAPUjjjfnDndUDMCJcjCuC52jgPpEabuTeDnkE",
  "key7": "4amwLiJ6DfCsJyksmzeDCNqaPTcEwWTbhH7BWiRLwxYFhkV9PP3H1ECuCGagMQhCHhs4KYroRRDgZFzUJq4AfZpT",
  "key8": "5geQi71Hj2VJyQhqASTY3hyYzmr5TyUpa5adnUBVSg2ajskdd2jVFpWkpkh7h6TpeidjzRURwLDhpQvEyok6oYbq",
  "key9": "5ryh5yhso6HQrgLbeho3gc3SYkaxABV9yH5hBpvWdo4FLmTmFxbJngqXyk914aHNRx6hjmRfPqL32EwJQQ7iwBu6",
  "key10": "5jQrFxFe9D5G2Ge2rVy9P7XtM7T4DXvKUpsLXQkbHHef8enpJAAcJQReZRpVEJKiuHy2atLYmpUc8Yp8jg9K7oS8",
  "key11": "e9rGTBvRuwtMzQfhPj35fwjW1tDPYK4J23zczCiu8npUajSuaJ4NDpLFEw3m3eRM2fYbUPEPpDXr2LVDevrGB5W",
  "key12": "tWS5vK4gK6a5FiZwbvycrDZuDNgr217RYVdaaUqi9iFWbryx5JZFe7WfEVYDaJqnhWFF3LZsRQWkTsu6k9N9WVc",
  "key13": "25ms4aDj7cge3qrsgrcnJ3o1fQQSSduDaCGYgBQ3a7JuQFY1V7RQ2TmbiPSJaQfC3Z22GRTCyagvHRWc88frma6Z",
  "key14": "2NgzFt7nvQVCz6ef9JecTrLaysk2D9fRNktG71nXhxRF8tjEHw6c9anNZupiUHishphdVHXvHw5gC96meM2b4RN3",
  "key15": "3NR9HPghvzeP3RSf44zcaEoxyuS4NvaEir1ikP751r85eQ3Bvk17iVqFj8DyuEsuEG1qcPnSAuJYZDVxhQ94VoF8",
  "key16": "5NzfNSeebZ3m9BwMG2A76K9vkWaHMRGkaPhuFK5xqYconBgBsCQj4yGxyveNk7Mmb81jEhsCCZ4uWc3ALmAZZTH4",
  "key17": "3RurFnSQDC7J7Yb7yyXDbbLAc1aHkDse1sjF1uft22vo69SP7Ug4GFTdHQCpQfxQ1iunydvw93kesdiPFr37kAdZ",
  "key18": "5m6JnKfACqxoGH7B6suQb8Zgh1rCNnigje3dsCNGTqeKRqdsL8TV9sx7QTSTLHauQBmw5QFHkrWo2ihEkrEvtgEM",
  "key19": "4MZkTGrN5PA2LLgQoxTqfFdYPqEB9iMxqJApYHZtbHE3ok6wAtQkWGyK3RvjWaxZA3y4NJmtXr1akKHnxDsqVwbE",
  "key20": "632a9C4KKLvTP9oxFZR4wSgQ9etLGM2sea6uRkw5nnNADosnozJM7UpDLeW7emZd8GurkFSeEgtKQjGoqWE5XLDM",
  "key21": "5bJBvREPuJMiaRBXa7gySJBYmivHbynEdf7fza7LTFJBCvkhxzfaS8mxAz2toKtnmj84pN26kSLwnb2cW2josQts",
  "key22": "2F9fFZaS2YdDctV1KpVT6T2vqDtzY9HvKGUH6WSmP9zSpnGQMH2fGJistFzRVRTUDzNSE47Sui2PupHm1xFJBqkF",
  "key23": "3tZgkpHS9CXort6Uho3VGnW87tGHhhZWsurN2bC9eUktEeKN37Sd4WQwa4vXEHGq6qK32uqdKmATmsQRrwSRukun",
  "key24": "5YV9aNthFoCtrqnZcQFoubsTxYdjrKe8jq8T7o5BCdBJVuvx54fdEPzDusroWNNDH4N6J5EW6Titw7izUjw8Y6Pw",
  "key25": "4HKR44SfeJBvmdQKcdqFctkJEYN8BWahhbvckRDoEKSbpewExFwoZs9uCVAzUU7o7tSUzkVdguCo3L3CdeuRbeaV",
  "key26": "BKx5k1qC5ZR3ZkACDLngnCtGkJ3jgaLHFB8Md2r8D7c2fPy1iD5axcgtWj5MfYn5z9AZhpvyYBS7dAmM1jS1G9x",
  "key27": "3NfaQqj4BrLngyGkvohEonpFheE6u3BD58bA8H6DRh5YCkqHRbywirm7aWAwvwVPsexvXFKK7dDQJKXEfG6S2tqw",
  "key28": "3nP9SW8fXmPQ274tdEpUa9jX1DtmgmUpAXLPDwp4XSBaork5ngjpDMujbBXQpL7TnKhF4nuocb9CfPBL2B8KvJzG",
  "key29": "49nSmNqkmEeHtqBF4LBQNTUSPJY94ZfAjkzDdkwFGo1dWaAxJarm5jsVAdLN7WXepVRFSdVeYqJxyB2pQXn3bTXv",
  "key30": "5W9ZdaGCA89t3VHKF4w1Hd4E48NLUTu9TBKUGRyqU1bwhjGAgkDc5r3ey6DTM6eXQ12PfFwDqdrcq4Un8gLyTVfc",
  "key31": "53pvyXjMdft7cywAQYcJmeQx1E3RLuxgBktMawYNN2AdkW7hcSBTDMoUmUBUoNFnhrTtPsyaH8oKEftkxbMQ5FbC",
  "key32": "46msLEC6ZQQW34sgHP4foPEuPBQFQH6u9z33mztiDYNkHA21SPuMjmmhUaFv84hvNa8zx9sqkY6y4FCmK7wYtAxe",
  "key33": "3ffJeCR1ie9jQHmz7xw7HvpKzdVwrAyf5G7n2ostjRqPW44vkPv2CV9RVzMXDvjBRUsb3chr36kbMB6zP7y8XKmE",
  "key34": "2CCjkDKD7dFueAfynYa2383nCiUCoDi2L6U923rhmubaF88P6bxyukahZVJPDwRqpAz1T3RE5XvzjAu5N9rbGD9w",
  "key35": "2oYShdfcNrdmbVVVgp83Z8nJUWzEdDDakVGGssewdwLSmkiGUpdncoaEW3K45c6mBencV64JwDRuRyeWsrV1hCHj",
  "key36": "CfumY5G15omquWSfFhT8akPZ8vkVL4hGL6danYAswRj1XgZ5Ld2zm3QRSsvhPwhpGDjtrbEdaptHZ8qNC33K8yt",
  "key37": "39eRFCE2uM3pP8QkXnJuM5mKjkR5xZk63XsMYi7L4pKKA9UTaSv4baKGd8r2typ3GZouSdeWec7Nb7tYZMsK1hJe",
  "key38": "5QokYXWeurthFzpzaiGGkrCfogy9XYJ94FyBJ4XKTLvcVoyyFabQ6JnUNkjEiYVPCQ9xku1qwnEoL6WZnxBw3gRF",
  "key39": "3RQjHZHYuDZDwHrKswR2JD2j1Da2CdHE8nPYHZQBCYEKXVZC6UJw1d9Ma8rH7rG6YfP1BhZxzr1YdxwjZ2dpw4QD",
  "key40": "4tnKQwWKR2ofxD7EWXv5h26k7Ue9pVF39LTz2sZdSeySPghQL15UUjpZ14LXj2f35fCDSHGByujaHxSndr4654S3",
  "key41": "3qCfkRnRaedpXBmd21oAEmEFpeBky7r8XYSYCLaXtaJSPqJFcrqyiS8WYAh7gjj6APdqDDjmEhDGrZLow1DcyMsq",
  "key42": "4paoV7BcUnfCgVTVJ8dBQp1yYbKW4zjC5iNWsEJwXhBJwDkvrExwZi8aTAFtL7Xwnx8nUtsBQF2cN8nZuQ3EkFhk",
  "key43": "5PH9TPj2fY88CnMWj8LzzKbwTGNovN8mYbcjFcueffeawd1HuVJQ9VvrYiNT3CZqX2LZNADLB1W5U1dApqYf5P5j"
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
