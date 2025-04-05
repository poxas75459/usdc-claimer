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
    "iVvPocvR8zjZX1NSsUz5feC6TrFDkvZ3ndsFJ6mb2wsTm5jMiMKu2jtpgYMwd9MCsNY9PDZp3oQPgxfeScTxa73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ii64oNUhuiGp3q9sKoL3FG4hkKGYewocnS6VTkNtPxBuVD1jwxyQZ8HtCRmE9bD1qYWDji8dCXtZbEA5i5R2994",
  "key1": "5GLaiScLwXhP5WqJtV4jL2ageheoYKRP5vQBTqDRJW3L2ncQ4w55TGe7JZgQP6AvDKwBMzneiPTVJV5WobJZ9fGo",
  "key2": "5ysaAz9GcUemGZ9JzMNAZUA9U5bLBdAyjm8bE6fCAfM2jfX9cCC4SpQg3k7iNVPnnDveLTpEz8RejWdi6tFbKSqz",
  "key3": "GjkS57ofxxWVVgqnoMsLr6wUcRqGPw3fMXxBSFW7DQGAJiSEHLsT9FaDRkbT8gRh949RFF18LQUgMgbqgVtsnqy",
  "key4": "4HZFjP3oqexUkBmaJxncL81WJRvxpqRMPgMkoDpwrZRc3ZSRYE5R5VQf5TmzU7W9T8Uevi6He3sgh2CmUfNNrw13",
  "key5": "4qDm2VYx2cwZE2hDgNNrPpUmScVGkN87n7Y2Rds9trA8muQxjVy9j6eSqadewNfztPQsZhESugLFf2Rob9aWRJEJ",
  "key6": "4GSf5iCm7Ge4Y2aZZQmevQ1XbFyyDP2Mc7jAYy5m7REidNbGCqXZ5uNXQkGjGySUVibmrf793utYDAuzTmdNibyj",
  "key7": "2KJiMxq8oUfBjHwUvNFGYt742iLyvJSWndTN8DupbCDvmYskwSD21bYf6nzkQRRY9Jo6CwPSNS3RCKWtMr8cTfeG",
  "key8": "3LjxT4QnmBuoRMa7dGfLfjBPtHo2Jcr73djNEpU5seLCVJ74cuN5ZzGsjMrnCrAa8z6r8GXmXNLUpo9LUEXCUju",
  "key9": "4dFDE8oKN9Y7w9PLxLxP7zya5a4mzJQZjLBR9XgpLBzht7LYd8qp6V7v72RRzGAMejsNyg1wuVqDwphFempjKUfw",
  "key10": "YSEEFDP8tpxyUR7q19oE6zmBu1nzifjGdWDLkU7EdMK9zsTmvxaFCDhToj3XKWf42HPb9Zp2RXjBnprJDYH13XB",
  "key11": "2z4wBCDvzqB5PGb16CvyAvi2BCNnBorwxUbpwZvEzpeN9vMNemFx3UMj4QuCqc2bBswFrRW5ojTUoVL6ZGwLY1zJ",
  "key12": "4cBLWicGUmpRjdyMu6gMScE3XmvSBNwqdypLiiWSSjYRRTmYroskkdh27TXXhNBhxyErDbgwV73uYSDDpTbr4jtZ",
  "key13": "3ikXjwUXZVKLkMbrvm9mqSjET5HMc61bH3BNqEAokXfyeg3GozkAx8B72YFj17z77gyRAXrSvvHVLXiV3wCvLDBn",
  "key14": "5wESnv9fTBF8mNy3FpExhKzsTZPBZ79R1oqjRnf8TDTeNqwXuZwwoFr2EZv19AEekNnz5mFD66UHXyeLRr79MdVQ",
  "key15": "4DDix2uAoPYAzm5TYHZEWDKBFQvdMbNN1PRkMZiAAhkf29PwN9gHha9xpehzBiXVV6jGPLErmKh3aAEwo1qepZL9",
  "key16": "3JhaEwvfBJSKVGeq3aBQmd8KVWEL8ZFkjvTJP9GwEKHjQLDRQs2K8AcqayrY5S67jhU3K32XoqWJQ7gfQZQiH6R4",
  "key17": "SWXvMkbtvQQUSEDjEf6mVRitkmAeEErnnXdWsSJhzx6X3PkXR1cpuu2UMmD2VKrBAebLt9t3nPeipnjjStFHuyb",
  "key18": "p7oydEMnQvEV83iSPtPR1jAU89f87X6CYeX9JmsSH3F9MESoHTYM22qFtGbuJeYBpEX7CbQSaBz413x2Q3KC5pw",
  "key19": "2agEDfJjjMqZFMSpyKYXznzy9Nd3SX45ohQNQmum8fWdWLtz4C9P1C1w1CokD5zRVBjJsVTCidkkAzEG2QdZDKWe",
  "key20": "EAuhHigyKFNEcbwgYKjs9LHn8KxoHSwXyZPCJARdF9jFeeBbkNC1x3khrLToEz6jMPEGXaJPSzcxJFNYLpVVDp6",
  "key21": "UaEqTNEP6ZMhqUrS5CdN8ph9vL4t7EqQURT89wHs9jKMGYUspSAtDaPjtvzmwsjpdMua5Ng86yrXmdcaQB82Pyo",
  "key22": "49yM5PVeXpMS3bLUQym7K7Tmuv8zanYpQgZhbVsxMKKGe8tv9cZZpPfBVF828GY6TPUkWht2ZZQKpzFnBNAXqeQC",
  "key23": "2FrrH5xU7ByT8XDsQrRjkktKCCEq37nfrKLfmHjSAaajKLz7DCjoQ3dLvvBm7f4guJRN1RumctpDgX3pkRDnVk4t",
  "key24": "kTQJn8NjzDK3SjdyizCz7Vr5PdSmXxe6Ff6j4PkbtJprFUwJY5kg7NECFJgwJtB7yqS14jnjbBDBU4kWjqrN6Ah",
  "key25": "5eEzeVqtyBDmoQKMwR7HbzgStMxcgtPD9C56PrXoUyEqy5pbvY3aZNcspb2bPCqpzTRS9daYxdyRN525hZsMwGh3",
  "key26": "4VhmZGLPLLHJiH9fHfe11mgGynCtUK5kR8hT6DHqC5TRtbjyG5nb65WYdnTUkLDoct2Dr4Lm2McYwCoa24BtueYr",
  "key27": "7K9rS7Cw2qZq5JVQHw9gJ9UogGdiASQwhFLnkJMVqsAHMVtE2i1P8V7D3ExGPoiVV5Bk3wxvcjKoSKjFh3oYBDJ",
  "key28": "rWmAUr7jzyLjiYNfkrqdF4fmtmCEp6kTznYsjw1mpnhJbh7NCEE5pQv17BvsCzrBoX715pzNFZsBXS5iWaR8drS",
  "key29": "3bEQeucmDx3cELwDaxxWcdyu7vwEiePaVRth8RniZADAcHY2jDo4KjFLDk2sjchAun82TmKVX6ABi9T2NP3BWNfJ",
  "key30": "4SVucvVw2sStEAhKQyoGPi7gWjNwCgNZSYUtgj4TLsYEZ61HNjvH8oy1iqn9V8Aa2KuS729N1Cy799U9bYgDmvUy"
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
