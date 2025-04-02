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
    "2bQ6zqxzJWT6YwRt5BYqZKss7pdnba3ftaQjBgGhNYz7fmYhh64ixdA7uGNZoUtSCUq7Bq3nuEq81ndrPr7nSagE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aMpE19sxnn9nB1mshvt7Bm4WFMCDB5ERy1CudFP8z5kyjx3DtUFjkdcBNfkWbchCmMJaxEDk6xveVpUVCa61HkE",
  "key1": "5XXGBdCkvunAUtewddFbskG6tJAH3CMrC1UqPjQRfiqtndVJTY4CBQ6oCKCHqV588pFsK2Ycg6LQzSRD8jj1GmSr",
  "key2": "3GRNLATmuFjHLTMkchQqzTxEVWVBSuwSPDgbnrj2HvTn689F8Sxfi3ZteTywQoEM7YbY6SEs6yWakncp5vi1XDUa",
  "key3": "4zhXcQQxvhsP4LjaATemKELq8Ea1gyGdHKYia9kyRygSkMdwBSph4mZuuCFi7Kua8kR3wvCsa2XcyQa34kZ25pX2",
  "key4": "2SigDQGnTshc9SbakE9A5gNQUbBmK9b3VWiPRUwBdLt6sRpAvMrk7bbty1HhrYR9g4VbcwDRE2ygepgfS7U1GrY7",
  "key5": "4mZJdZPvhi1vaqbAnoVT46w1QzFchn6w4D2uU9nXP1Dgy6AruF3wivfZUAZtgRzQNnbLMXFbovyAs2n5CrttNnTr",
  "key6": "2VjnoxD6zcFK29wwZT8j9XxYW9X39JDrKgbDJ6mja3HhaAPCBJtgMvKq3nXHEuQv4AFocZA3ZVcUL8XbewqwySja",
  "key7": "2z2RcGnuaPzfzenEptmLheW7BGy5JZr8VkQe32fth97fREuHycYzh2hUmcZXuqPzGn6SrX96NvnFTPtKC3Cn8w4T",
  "key8": "28BfciPwpBAWx94bYxb5rg5ZeNtfGFEuTRTK1rG2u6J3Q8kytfPeuSKVEeeBPZ6oT8aeqvDaQWqTP1Apxx2SfRvB",
  "key9": "3AVDPCRgUHYySj74DtpyeZsvi85MUL6huRhzAh4SCPp9TShCryxz6U8v73qUxhPQFjxnT77xWRKfUta4EH7zAkS9",
  "key10": "2HNNHQJiFsr5FAawUK5EyWz8TGKLBJghQ9kAhHJpnbCw95bVUFmPmq365vCCmR8T8CTQSnvYezDpZTEc27434jxd",
  "key11": "649tcXUgJ2ytcpoKPERnqmoYHdeye8FkGLtFBvUWdsifNcMU72zq3yebEMZxbBcqLNdTaaL8BUDztbs3eLmiGKK",
  "key12": "2yew9R46cvRCKDdPfweaXM2AesK9a48FkR9pDTYoCKbqiyvbQkxEGGBpJAm8GcLQFmL6gBTGYNnod3AMtW6rDg3M",
  "key13": "2QPMxKbLt4HjCtAzuzxmzWPHNm2PHfhMRXMHehSuMjWWpfJ5g9LgBEMggsxsCiG1YwQSQ6JEuBQaKnmcaNiYVZHW",
  "key14": "46xn4PEdzJd5Vmhp4mXWdaYeJy1hRaYgMWUBT5qvoBkdRNUCho7bK1Qq54RN4zAWa1hcQKMYF9p8Cfg9UgtDqJCJ",
  "key15": "4DpeMKnN3i1mi4tNmiXQ7xSjWFiRouR4UG1nAqVaXBTYguAntMT9BBCyYPsVxHfZeU6sGVtftfjc7pqqZZRy8ub2",
  "key16": "4HogtbZgHRU2BdhfApcowAwYrypUmByACU1qXutQ3RLTzRS8NSSLfo7UzGVnDc4PLsmY1j8CJqDQApHoYk1r3C2e",
  "key17": "3sAkifDkvgGCuMMVjefmCV91rzK8arn4BYcvS9g9YgXjzoS2emfHDgx9dZkvHJdY4raKXJWB1NfK1RxY9UwGzMdv",
  "key18": "2n5H5AU49vQzdKDK6NLJnjnvUyHQvRkdQ3XBf5HBwgC9nKPFBg5t234kzN31NvsXdDjTigaHSYQF4iqrXvpLfJmJ",
  "key19": "3u93nRkjDt5mfdiZRcCPX3EstPJft1VQwWjPd5MvK22WZ2n8QcZRTtwpbpLC3ZbmGpsnuCyGPZfc7uVHJft7HRud",
  "key20": "4xmPEY79b8V1cDrK9Lgfb11zK8p7sX6ndkDuT9LW2H22TxhzMAzEBj9WZLuQHEUydhCJ1LVDPQ4ErdrzUCofKmsp",
  "key21": "7SXAkEDCTzEf3LgXhRFr6mSvef1gYSttX2WWN7RuDcHwv19WFzXM2q3GsaMzw3N1VZLPHttrb86FE6Bpr36Zg2N",
  "key22": "2qNE6JrjrmvEp2ZFyW3zEkEFAvMLAxJaHB8u3AQFaASu3voSuJvoRyoCdi3nV6n3wBBv6uYc6B4WYNdNz6mCDxVz",
  "key23": "55BQrdgL3mfQPkHQhuqvZGH4odcNRaViMa7Yye3LS8zGJhDaWZ3qFvQ5GJrd16W9JFwdpnv6gaznguWCWAbX5JU9",
  "key24": "uXa9xY4Q1MYeuXP5Vs9xDLs1EPExzdu5AKW9XX3BvZRPMfRKwcRWe3ZinyBauy1RAXVXCGx4rgbXrLEyFeVsRAz"
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
