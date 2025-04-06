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
    "4SfaTL9JfM9sxGmUCPCuqKtJXZ5xYZvn4a7RUqkDytHNC8LeN6jJx2yZ8DLKGc1RsQnzvmH2AMuY7veALhmBsJKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHJgGR9B6tZ5VnkB7VRaxnpjjBqNHutG9T9ai5HUCesYvhw6tLwmrWXH6fsPfYFFiMnEBQJWwSu2xcyThe6Jmza",
  "key1": "3Ev2DcJnPddicdJKzwEwDZyBT2Zwa4Xv8bx2dTzffPvJwSWHtcBWRnCPcyFNvfKGkdVpajYGWJ9L413wRrWhhDb5",
  "key2": "2v7JY8tkxi5Lp1kG8beY8ii7hB7VeMCzDRYpdFMnrnCUDxxM3b6fwupKh2G24yfAdiScuMXgS3REqePwcGDqDxQe",
  "key3": "2po4QZ8CvSQZBkVbFEBn12mJRQkr4UGwJxbcSwfeuUT3tTAo7zxsirRW4TYMfrWwKuT9mq32KRTyFf2doRyV3986",
  "key4": "kieHo25LPC679ChX2JCeNBTvvVQdnM5TmXv4z1ZfLXfEhK3btsM59ET6FaMhJcuqgF4tr6e1L8H1BT218LzRo6n",
  "key5": "5joSkMR227XvhMRRao1C4KVNNBfXRXXN3SrTcm3yCXjZZcKq9DizEhJqZtUfCMFPB8bkZEm37dtHivRb9hYmxjKN",
  "key6": "4cDvU9hK9NT5Xpyk12wBfYMCLCJD8onsv4Sv4iTBCfLcxemruuVqRwL85jadUj3MujNrDXGt71oVk2DtUHPCA2uV",
  "key7": "3N4xQPGe7ohtnUqoYTPbAKbwV1s1TFPF6wqgzbcCmwPw9gSsHuj5ZEqbvo97coxkjE2ngxJZ12rkLjC5MNkYQ1Xb",
  "key8": "2DXhW8JXA61xYx1NZzVoCEjjMWyY1u41kd4spgxauzpzUhfV8LHnG7SExKRU97rSuHmyJ8L1h17qhGF5cRW8ZC2v",
  "key9": "2m3sWcF6ysrNQ9LiDeTKrLahTRzxji9wzZfsVTwrypxTFPWXmT5fuL2m5qmh9aqtRVrjhhmV2N9zBnw28pEnAgJk",
  "key10": "3Dw3jw7cnXdDPUHkvWZvHwgnKnwSCnyX4KvrqF6GrCWt8JVhRy1Mi8DRU6uHU9EuWvynwgmse36Vs5gU45ceuoYp",
  "key11": "61DGKsxjuUfJkuWZq5oEyVtDtByjVYAudWK1gFUNFL3EqyRYgE9SeW4KccTYzEerkEqKDwAo95ED94Z8DKNtQrVn",
  "key12": "4MuqtZTCpH9ZUBXXqougPXRJap3kByXKJTnoJHrLkRcjiE6Qnfa2iaXUWMydZA9gpe4RnKsDgaQycWbd9AKgmjTt",
  "key13": "31qHPpfM2L8PKjPE4AGpfUK8jNJjNiUxThReyqVVKaLWFGmkmKm6KqxMqQ9L6QZT1VHL85gCvNMXtTpDgycHLHui",
  "key14": "3vQj11Uffo5w35fCZ4PP67AUeiByCxdeJpMz5RhAggZqh8PfUpUnAiabTAN5M4pVYjB5Fja7fA6zm8gCF5fLbfa9",
  "key15": "27sMJ6DdgwA2Q6Ww8tymDXAraMBrEV4TFBKaPgQcwcjSZHSXFeQYehsiAAgG3RX75iFz7oKRCjVeXQ3QUJDUTvhe",
  "key16": "4rDLEgcFVQhWF4nGKrxTrY8xZ2bZmWgvWNr1vpukgKvpjBsWLg6ACC3XaDyDYMxYQ2MYLEsnx7bKsxKd2H17x7zK",
  "key17": "33BJEGKvjLxLoXzwF5d7xVU8fpuPjyv197kNQ4RAJcDohWuZTCU382pDGvxGx8V3XAEXA497msjzwPJiRzrR5kRd",
  "key18": "X8YtVUgRjhnFWUdWkiyeJH5E9HLcehPdB5oQNbe7kvDY76Cg4wf41RqbSF6ZbbuwxgE1wNAkM1qApnSqPEV6z58",
  "key19": "5kefYTtPKEL1PARRmmyTLNEoXJfMSu2azkDRwPrUB3ir6oAFKw5a8Z5hqcFwncfcRot9auFdsGCccQ8jNbnFqMcU",
  "key20": "462aGCrx2tyhfUqZm1KjTZHrEjyR8Qs6uc9QgjgBvzSdDohDr6i5Hn2RFMW8BcRXPi7yRipCYRus1qTwuF6uXH3j",
  "key21": "2aTCc8r2b8oRRYWGY2sKWVzrpGfceuYWSKZxGPF9jzP4ktvZL3jboMi1X8kK66RedVy9t1UEYDaS92k5EJ8ngsEn",
  "key22": "4iSg5MGNhNxdyy1RgJZ1Uqw62P1cTvtMMsoWQSTEdovZmTx5NL86xzJuysd3zDjEeFJb3nc8xZTBsGj254iXbdaB",
  "key23": "5SciiYbBwnTpw5cUEYj5g3GbdPWqM5mGu4W6d9VCgSDig2r4tRpoZ8ddW55VpHRBjjCPcmuRieYpR7dsw2NdTL1s",
  "key24": "26rC6zSdqgpBKeg2hrCrZFA2HF6FkdYwNZUSgmt9r9zTQZji3LXnADm7xP9NYLiP4vJ16CoofruNz5VGRRNPJxV6",
  "key25": "4zP2iFoqVErzw5GUVEYfY1WUY5HiHaZraZ7XFy4P65ARakb24oi8AQqST6CQr6Wr4fiy5qSGfiz1Lkma5BFCW4Hp",
  "key26": "4P7uKgytFi3NKh1GPQ511wVvpRciUHkEE9AK7YVK2FDoCMZ9bsSNpuwM6Ytm7m2DVM2zLp9YamTMR997mChskrpe",
  "key27": "5oyfZ9SFQ4cH33UunSL1845HSP8M1MYSuPCkwspS6M35RGMk2u5t1vVC6PjVdidG6DSjAuZRYbRYivjXZtMa1ZEa",
  "key28": "YqUPD29TcX5dRo7vitErW3yUtnY4YV45qXDWTicfTr7YpdhrZ2iDwR352jij9S2P4e2PueVQnj7y4LqLpu9ctUn",
  "key29": "4R5R4EXWzdyhXTQDksCjKWC9wpZ46RfCMruCorjw3L6ocGBgkex2NcTVPcAWWw865BQZc5DtFVYieczuUgMTMtt9",
  "key30": "53o1iJSM5iLrqn85AoCbitsAutPZ6gXrF72saLtYcGmAEKkKCdT8nh2AR8uykzH6saqqhtD3rvtfxUWiKLaTvZUK",
  "key31": "2PtbqL4qaE9dtNU66fbEpTuF9Xq7pmhUL5m13NNtJhD9MKUeheXWDVdC7Z6WBGTrjsFuh8WbvTuTRZUcH8Xd5yta",
  "key32": "5v4SN9bvUxAnXgHo7J9pXBxT7jdXLhBqfBYvoZTunosJD3VmeJ1rYVeQ9ZbiioVbuvhu16fFPnSPQssh5b9PWEwV",
  "key33": "4FPpLHTE3wXutuGpjWGELrsToN4JTsYRfTyVhRLdfiZeEc1jfCKo5trfLTN4pdeBR3wajWYCJqAPrExScVhc86FK",
  "key34": "4CPkjTg7kLbeTcdgTENEuTTwnXsa45efPffEixpGcXPeng9ZhotykF2i6u7AyJ5QuZUbYAjhj9VYiatpyUjG4G9Z",
  "key35": "5Sf5TL8KGiMgaNFxfPfuLYt5TnVahhkeLxS8ZK23rf46cRQAXH8Yw6h6XL7eeThetnBQbfE2jZayTRiaphki8wC2",
  "key36": "4Uo4svybpCLdyptFcST17yuEPjhyjp8ojDSwUF45TBgp8QwtiFNPhxcuC8UaD3cin71KD8fmGY4sjCcBv6BisdbP"
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
