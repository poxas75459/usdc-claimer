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
    "3UzJ3K4QuxWwTVXwoaJp9QRSkvDWrwpy8MmwjystjhZjqkKzxmrwTyL3VnAuR33ZPpro5nbKhdXH3SkkJb3Cj7HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMU1yB6TavWtGrwjZVRL8JW3QLL5w8Cr7Z4vC6ztZfTw8FKJM13dvyBzCJXbUaRCykrPNzZk5bjyRTAxhfvBnGr",
  "key1": "KifrBDtV79NKyTBy7GnDFpwCrLEXu5UbP3iPtjueHYUsL7ybcjGrUYgxwsH4BbwLYiEfdzMeGDSSuFPzWLotkSH",
  "key2": "5mwgauQ6CeZtCGBM2L7NYK7bpJtBQK8zBU9FyF35SRwChqWhdpFq57TbEj9KdELm5dKDW5uW54C3XBLxrBLoGPSi",
  "key3": "62bKL7UwEejzdkq7koyPJ98cHvDAHa8LazgRGs9n3Hk6kTo1WHAeqxXobNoi6RtrH8VbgBppaPqnKSdJt5kPoqaq",
  "key4": "25skmPpHg2arj4gkbMdtEt98LRN4pjjUA96eyMqVw76PfgsYQbTWsj9kwb5DL5adDSvN9H8Xmrz8yGbowrJyscKF",
  "key5": "dZvbudYMWJ8DhcFPeNMyLX3uKCvSTcSRxFWYfBSvQaSMzFBaZ1VDeTezAaYer6GSwsBzDzhPEZDcWSSi9vuFBLh",
  "key6": "i2qUa77fJzdEjAQz7CLAioXgHDBAq8aFfWZwnkmBWbhjKEucX5bi9oosMNWz5RaX4uNLHeMcw57pJFRnJyZKNW8",
  "key7": "FEn93ASMzs4Hhkr5rtTjVU6DgnvUPzLuHuX5xmrsHQkkyop8DdNLyFhciUjBKfkmvGqDh6dNB9go7CwrKXcZkDP",
  "key8": "5oWmAAChxyaFJAZ8pBXMNH5Fha5EHPQg4VwRjWCXk43kj23G3QXJs6jACoryP5FiHDyzwyYh1CNnUd7peTz3DBdw",
  "key9": "ho6B9fkUzM8fEP3S1N4QDJB68VLZU8onrxtRUFztzShbPBsoUeyVEoNk1EbRcoTPjSm9o2JRsW6meUSTJBijMjE",
  "key10": "FvqVkYGLZ4n9ZaNzWLqK6jxMVFWrHpc64xA5rFgdVcLr3bxaGDikbszgT56hsYbAta7KdhPsr6G7dJUUbaui4PW",
  "key11": "49WQetjzH6jyoEd3ShiNSFqMqHR7iWvBDyKCYEDFMZat2DxXH33CyMnR38yd6sRvxACPpZxL9ZmYw9MVYZ8WQpjM",
  "key12": "3o3wWEmqbZf31xefo7zfzmEgD6ekfeigdkcH9JNojA22kT5kpZdzfbUGXvYoeT7ruWTnXRQExXGi2q5dDeCSejSK",
  "key13": "2tVHw5oF9EAWuhqepxkQNvScabM3oL3jcDJHrdAbKAhV874fDDSPPtqDFPdT4RVKyUucePngEn8yn4Tdj5wQb2t2",
  "key14": "38NcUBwA5bAQZwkZzfp8CHC1AzmeAzqb2zdcAj7XpsDFVunCVNz8fuedASxv7k19MhZ5iEqqcQaEq4zAuwP26H9Y",
  "key15": "25aazkXdy96bu5qjE8oG8Ww1sZYCLvfteEQro8D15KHZtDJDyKRMb8jCKk24sz7sdVcDuz8HyoAh8EZWKeygKxDa",
  "key16": "3YFmkGqXrmCXWmgxLSRk2n87jhAfTyuBZNsd88BVtryFrkxcWcmCQWyUGnwVhZKad6wLxgLDsG38qjaPWQ2rUk5Y",
  "key17": "4LU9Q5YV8QfqTBKejs9DRsAoqkzqQGyRpVqTvMy1GbNKmjpNwtdV9uoBkRVrYUMDGD4W1EHqKsXJdohqkijRbFhB",
  "key18": "3fdWA3XbgHsj69DfNhfHYXwiHEoGqYdhAiuk6Mismc8voWVAgxqT4nr36CCyHF8ah5Fj14bUdJjjCW4gSQR6LCQ5",
  "key19": "xKdDpbiuCHp1emJKhwUQDq8ZunUbc6UUfHcQWwpxbWwnZTct67eigNRKkJn4JrhFQLiqCt9Ne2cMK8tyPHikoDq",
  "key20": "TDpLwA6sgxRXdKz3PK6nogLdPecHmxgeB9MqCPzaNAkpXB1rzvFR6AYg1HfZvDd8YkPoTGViZwWPB5sEwSUs2fD",
  "key21": "53f1tbcmoScDB82hvqrBVQxQZv6sxxZNLPQ3xUKtxx8etCE9CNEfbWyvEX6jg284RaKkhoi87HQkhVSy56NBYKo6",
  "key22": "3EKXdANUx85ZQVQnCsYnhGxQSHnt1FjMuqtFQJg9MjwUXWPt1RSeRopEmJjfn9MTLA476kXukpuJkvEKgGNfLHra",
  "key23": "3gipk5bUTaCRKQhDVq7mAUX2qd5XX3bjDUgbJBjU3gKXuFJ8HhJsk3rcd9jQ7yuJDEM8vTWRfWhp3hX9bZ23dBn2",
  "key24": "gr8QnYQf9JV5gNuik9UnMgpREfq2gr35iUtqMCAmrdbv9Pq55sisNiKbraq74t83RLVzTTdtS8AtPp14eo85yeW",
  "key25": "2ogK4NY1FJDXvsmegcNAkkkHBHiywt7jZCuG1SyfdJ6GJ1LGudViSBkcnScQXXxhqr79xUDPE7ALe1V4evLPHLMH",
  "key26": "2KH2kL5U5z7cj3GwqvMfd88Zhr4MygM9H5jbqe88UdsgBZ6fWNwrQrQXpYv9VnVRnrz8mJjVDZT9uJ6vwc6atnST",
  "key27": "27bpwda55vi8sa8dvvk2S5CCiw7TFmymdS5KtNvacuzX6tbJ4H2aAxPqmniBkEyHR76N8ParxRuPKtDnXtkZk9Yj",
  "key28": "5gwosbyRagYHCJKuAVnmgDGFWhQoxux1o116ZWMRNxV8Jsm6n3UpMQNSDpnMEpDtVREP6LPyK7Y7Qc1vTnxgAcBU",
  "key29": "2rspVAEWR7iiHQj9SXLrJFX2J8tfVwYPpDsANjBWdWhL8WNZajhtNE5gzTiXRs9BBx48349WvdMGx9nJXv1rGLzo",
  "key30": "4GzpSAUWkppUpE2NThnuYdDkP8kdnECsFyEM5sDk3F9t1QPwXQjBVsyweGCVi8iVaeyWPDntUry5gUWHkWGdeD5v",
  "key31": "3zg26adf3Sdagct93Ge4bMNouUAP4a5dKpSR9aKQ4zdCsAtT9gHRYatvPTmpzHqaqGi671MZKmxD2PjCYXLBE2oh",
  "key32": "2xjzEZPus5pkqo8BXAaZchwfuamfJ5oBGVnUHAtwstsAf94xo6nnhNX8MMzNzF7jmQczKjAMBzmbToH1VH9YFnLm",
  "key33": "4MCD8Pv3a4YKUA9Rw3z12hmPRXzMCCuNp7NkrhW3MjAUcfQwC8mnw1ZNhQA8HCiubz321jHgWLqp1MFKBg9WHmw2",
  "key34": "4G6CBkvug7uKhaQdiyJQ2P8Q6yNpiBCbrAofMNeVJnAiQhDpn6KyjJCdNU7kzy4evvFDCF4jxziGXLvdxfQnoALh",
  "key35": "5wmVud5CkSPguuBDjhbJ7PmLQru5tK8SwTL7gWEZLXL9Y3288BDMs1a1PuAJ4KdEtQ7W9fs7vEAfi5YUh9uGmSih",
  "key36": "3mAC27BRC9nRhGeQQkFBLvH3udiZLQ2ki4cWsMjL9RQAPfqqdcvte88VNFsvYaEvtJnWq442stfAC6yLkbN5aXwY",
  "key37": "Gb8Pkax5hUc8De1zqYmKY8rDW3EnfacMJjKJgiEJcxjXb6wT67wvNMq8thPn46fdUhNn3iUDR5M74TqeubrQN9C",
  "key38": "47FimXU1mk7gUE8Eekz8b17HYQGyPG3EgyJsYKGj423KyBp3DfWFU282WyQobSxY5Sfc92uSB9PdrmVD7JPBKXA6",
  "key39": "5V4Dj1PM3vmyV8uH9HuS5AD7w3UAQe9JWbnS7cGuH129f3nx5J5DVfuurEScDHyUoFSLw1UaKoRLiA3Sj3mRXsEE",
  "key40": "5Qxdjbp6RjyEiLvDM5bzha9qZ3ki8BZ8iWzTdatW7jWqUX7D7KKFdCFC2JNrJPrtvqD2xQZQdi95WFpKXHPpXPY5",
  "key41": "29paf118QGKtJqsFYHcBDLs5esn7zBCh7u7sMFB5CNcmpEqH6niYQVaATCk3zSgrx447tTRrKo5TCsaYCkDBYCrg",
  "key42": "5WNUmsyAjjkE7PjN4iUSmZj7T5qPBTjx7hQ3xaCCwstN163U7q7qtjdABUkFrGeMsFNGjxZmNDi1fwvBw2N8QkRU",
  "key43": "5mtpYhs2723648vuBdrqMyEpoJDNb5D6suycw3M2MpBQX8HntLCvzG1amKzJZkYvGLr1dA9ATJixKwD25CHxRPde",
  "key44": "41tm3ABifkm8vvnsvvdypkxZPA3sJzPMT9sUPs8wPsSX3fA6cYN5QC6B3NDLCe77JhBtZFNZurUTzuHvLXBQ2eNu",
  "key45": "3zsHdYC38yZutsVYhV4JTUFrXeGGta99Zv22u5Cgdxk8Nvqj6RMNAQWDZSYFNvSZL2FXtrVxm6ijWtubNXfUvqK3"
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
