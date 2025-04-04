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
    "4xTYqW42WNZDvg1kCZ7NWKW4eY3jkTiHsqDkHzJVEc2eBvkcJDDt3HGTRCW9jWZSudzRdKMpMuVE45i2juf8kR4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZxsX1tMDT3Zduu4Fd8z2jaxgCRMKBqsEEcYUZ4K1yfFK5kv84pifrJEvcjeiRznDb8LHiEM4fGzGCaXTU1oKxe",
  "key1": "2fqfjj3HSt2zS5aAA1WssdZHkbmd4NVeptHdqmP6WLLuwz2GSkTa8FqpYb3VWSEwJRDdEXiSYqcDqoQtTjUutiKU",
  "key2": "26Vfi3YosfXgufYZv85XquPRTtpjjbt1Ube5pLpUtXxmu8Ms6QhvoTgLCadR3Jg9dgY5mSFWarVRzwp8KxRFRR5R",
  "key3": "2P5MG9g6hSbi1Q2jRxVFVzRAaUZoHr1A2m3kqD7B6Y1v2duH85buixVR6PteRgDaP6VZKNw82VZFVFLrdYgv6GFL",
  "key4": "5SwttXdGApQJCNNHf7KpmE8qhZnQDSAXWcTkJF3SazkSZDGbESPVBogS8TURxs7z5jqaVkjvcNhYXDT8xwWG1AHN",
  "key5": "6434yNgdayKJR6bxCKxsfY17wLja4nYmDzS14fmamtFjRSsdpAzVYmjSgLSMggphZ2Myo3cDy9BtPoZZUuyzGzH9",
  "key6": "2aPLFjnUULtWefuoDEuTrPZZNxJGWCcLK7cF9DfkXPfeFetbvTpnW5DQC1LEtCsP6jmPyZfq81XoeweKkeWEndLa",
  "key7": "5V7ZkTWckT224pKk6wy9PfaE1fSMhURuhQEz4UKoxXoWA89P59Lg1aFHovWETwBmg3ajqMkn3Enroh2Buss1h7Kr",
  "key8": "5wigxxN2VKZjhCUabGwQimKV8Yx86Q4E9p53KvC8KLaRJ8Wh2nGYjCrDZFJYeme7Kqf6u6HbSAiEifuKoydnPao5",
  "key9": "4euZahA6k7JSAWM9ugnfJqV2NhRjQqbkcMVnmiUXEKeUv6xPWZ136JPpMi9v4bJsLYPmXHxDyWeDMUNcdL935iGC",
  "key10": "sGpwGKL64ANTVXPeT8ujcgVLMi4zgXAJyo11PGCXudfQJatXW6V6HSJch1DMRjfi9jytk6PfL8kRDeuvGSXRhJE",
  "key11": "2cVKv74tCFcSfbxV7rDUntqEYre3nSnmah9sjynUnkH814P5fqN2ZXrgV5G2PU8fN3T7EfFRefSHvoPpv3ezgXLu",
  "key12": "33uEpMxwZHvrgmNSepAKQAeGbRpyUgu8jEFEMEWy5h8PdFHMHL1xDw9j3gx432hv9VxCxRNnakuSvu2e5hftXStn",
  "key13": "47V2us4bHXnNQ3rYEBsxmZZzkm8Wnvyxd6eR2UVqn9RxMR49RXzGRfkAmvK5wYpMK5JNTVPxch18y845PfDen6kc",
  "key14": "2NBpiC1ysRDZz4ViGXHDELpQdTTEin8rFZLVH7iBmSFDedXHJ72PwXPAzEQnY5sxqgPUvcVgAUe2SgUvAHYXz1gv",
  "key15": "g9CFYgKDXA2ANrdss5iwjb51LeDMfKDKWiShP6cW8aSfCNoSUZxA1zBBF4LDyENTSaXq6GwdNr43DAnGggBNueT",
  "key16": "5QRU5znhxDDKNXADL8G745aeNsMerKxNGeBuqDDywofKxNf94e8dZKJ1DeQoQP8DroDh5uxAV9VGZVV5rxYYn2g4",
  "key17": "4G5LRC78B1asEgRETxkBXMCUP2uEGmTaEGrwkys8kTd2mU54sEFQZRZ9fWt9ysekzvworR3mKNHXCrTjPcF2K5iu",
  "key18": "4CM2HNL76SF7ZNhsdscFK2ktdzCCeeoKbbMB6DrBPh6xWR5hzT8FwgodmuVo9Uhfiq84vhoeSLRKUuPaaPNsYCFK",
  "key19": "33sR2fk8RRxr5QgeegZj9G2oL9SKTMqgbx3FMeqUVuXHkrvb4FS12DbTWBegXyKe4SkonvQQw5WR3sBcV6r1E6wW",
  "key20": "2JMtDVEiVwyMSMmEp39M7Ff4tPQXxkK45FB9ai4rWtcQhuD62eVpvrJ3TU6PHetitSsKTT9WNJrDpPkkPJZKynEY",
  "key21": "3sduUQZzdBCdzX4Si3iUvmj4u787Q4rSQCWBT9nVTZjz3kYHkfUf4WQGfCXHY64J9VhX9k9Jz6K6DAdfkbcQTbEb",
  "key22": "oPD4Xh4EHcCCV4pLreE9gKBJZuPqWKpv7uCoTHjieb7RyWYcpXmMwq6QnHD3spphEQfx4jfBV2MvcxEWqNVmj5z",
  "key23": "55Ks35Md4sAjfTmNn4vEtsvK5fwY5M6DKcJsSaGzfyW5cNUXYpXguaXrEJoq17wQu5iUaT8s474pwvRMGKxfj6Jz",
  "key24": "2FSw76ys22R8UBmjoDzr8DnhnAXVq8paXwK7PxQEXq7ZoZGXLR1oqDjL6Pbfqust56bayvNUBw8GpGbHXS37giQc",
  "key25": "3oGuPCZhEVZQmFnhSV73cENdoKTfGCyL5wtFquGraj9FShPMpk9duWugsRHTukUG4TRdiziUzaihWYAisRpsiQQa",
  "key26": "5tLi9dnDswsmojqZ5Gtmf1GkuqDcPupYPRrmN9d941EZQjNoYzLUSMig4an1geDNiCWfytbqCh9vufoC68djTsQe",
  "key27": "2zzvvbWdMSGUBhsctFpwdXc2LKYBprEQyHFyroGoGsTA5hqeReFNpUZWzu7YqSAca2ytVmHyTBtB3j39cTRPbfwg",
  "key28": "e5bf5NSLGGptxt7p2At3VrJuPc3sMStZah9AffLynUH9vHFXoAQnBDnb2rHfzjcK95jwb2YKmsAj7Kcw1fceyGb",
  "key29": "48doCsfbvvgcjT7qhZzpXe7gkPc7SrvgUi4e2mm7m6nZQmQv17o4MSD5JnsjKwGwaPkH33UZrxn8ZEGYCxfY2ifU"
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
