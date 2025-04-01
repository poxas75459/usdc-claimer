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
    "5oGo7EfgkjeoomfW4a8p5fa2JNvCbvmNp85vL895NmCwqbgKi9vXkYXHcLrGqkEffjDFZQsBUw1q9SAU7KiTagFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YCuUgj3FmukiP6wBNbUYWXN3atFiLp5PU8FfJ6vn973SQoY5vnVCx3FBPU3ctvmWCXcpdkwUh9Hx6vTbNiokv7n",
  "key1": "AhKhaJZtPqS3NuX7mHrycAGt16nkKWdPCE8C5mDCYVdHaihgYo5cFyYdXoNCHWLZ1Ukv4FRE8wTqxm8LpVJmLhj",
  "key2": "2vccVAYH1gyuhK5R17nmHwTEFJ2C37wjFBu7yYmU7PbGw3STJ3eY6VpHNZRchuGPQ1TQFpsBm63o7DmvYHnrdoRp",
  "key3": "4Rdz2ogj5xMmRozgQgnkFxPSbVbXyjGiSNhy5e2Xtejx9CuM3nyQZxdvUJvSi2JyKm4AYJd2kweNkskWFAAMLWGz",
  "key4": "5AKhPKJihJTSJ24g4u5LJCsoyJDNBWGbYrLvqBBb4yMKpvmpKRvdc5hsvVUZKehWStzNNR6x3YZ6YtRgnjkpfWkH",
  "key5": "384USUy2HQyeEVArJWWYCbaFaG9EHVeazksTejbFHLUvFPAV4HoQFL7nz2rQzaZ5J2ntdBkURmWjvQNgFj5JDc2L",
  "key6": "2dCKXcTQ1hzpepGxV3PTXJkpodxnQ2zVdWRkGCfTUTtGFpbRhgtCj4PFhcXrzZvqo9ksFrBPqAcZ6Fc6WDn7FatR",
  "key7": "2MKApN7jpVfdvadMQg36wzLGHFzFxJYs94Uxnx2TyE29tcbxbkqoWtHuJx44o717roiUfkyLnfx5dWw4PxMS73Hm",
  "key8": "K2nTSyBiLMP4Ti5tuDPWZpmaHrFw5rARcAz6MuEAq5hV3pYeabbRATUzeCCxMeaHRbB6Q2ustZSavCgnNcKdJZm",
  "key9": "4WsJqVRbcwoR5C4T7pFKW5bXWVofsv4zxuZnbp5BC8k2KEVSeJpyzUjQJkJk8VoQE4DWpbfmT5tu2KEhbrhrcQPQ",
  "key10": "2kcpuRQjxSj9JE4Mr1HoCLuKbKbiy7ELrg6mRhKZg5zxnAQi6wbFTMXT6AdrpaYmC1LLVUbLAXTBdwwZiDMGkLBf",
  "key11": "4WGDecDGYBiDWrksuwW3pFP1FQ5miaMGuRYVq42n6wnB9w13zz3Xwfuy16uXbQuE3j4gL8RrwNpjV6fHwbfozHAs",
  "key12": "2HHKrntzYc7NPK9tcQEArQjXGEpSzuycekCviRxphX3kkuK4Nqf2u7CAn6LcTu1tjjZLtyntAYkA25uX3pTpjQTc",
  "key13": "tg1acWxKW7qn7r3rSeduMQZVyBvNK89ugtdNgJVhRb7wNb3BcxqBudL3LQ8vHpWviV9R9J3DU1AvRMbAdtX89sT",
  "key14": "29meWGv133pqAifpMpbEfBq8LfWZ782RqyFkGahKDnpfwAghfFiRPVXfzWE1fKJHidVR362xxQ4fgHwEcSC2ch7d",
  "key15": "3rYf56meYTTVPX5V88c3rcgzogMCHCfHnr17nfD6JrXsSeb5XRdCRQuEaVnzN4nFV8xLLWpMsQhtUmRrLS7d9FpM",
  "key16": "3ryGs8jxcy77sR8oL1VMAp5Q6uwdH11oAKFnGnu2M7BQ9PcAdm2QkkWWQieNkENFHca3aYr7LqV5gMFDsdoETLC2",
  "key17": "49JSHFDkWdtdYWTqMPqNCxzSi6x37wFJUybpxYcHUwouG3MpWXUnYb6Mxvd5XiyYw169DLn7BjZHhndXHL6aLsZ7",
  "key18": "UWdE7TZ67bwHLYGVBW42MfHA8C76mxGhJVqSPijasR1bhx3tzKK6XnrJY5EBai1JJHLFE8W1bF9cFmviDzzZcht",
  "key19": "2QKtYFuXJFWLJGnB9oLA3ZeCTouUZNiYgGKpUJbvyGZT4PHhnwed1vK9TYzFc9Qj8bZ5mHBwHe1dTFpeNDDKDNcS",
  "key20": "2TftH7Wuzr9uDAaJ9YrRsgCZoB1rwmowS4cYyXwTisjmVaiY9tyBcMqVEn7vKwhYPDtj1oTLNpqkQZabUPoVLS3q",
  "key21": "4SUa2q1v5aUGmkxYQaVVWepYwtttmXCPzfuhGk4LupmLSL7wRBP5oBZsLoNGfJh9dpvAS9362rnFuPJckqV7arRU",
  "key22": "3n7sBz9RmKMPE1C4iMLKvVXShw84y2a2ZCtJ3yetnASgsfcMk8DVZJzH5E5shERFWc7thmhXUppaXVtjcKvVEY6p",
  "key23": "4c2kkr93hVvJrAYn3nmMBmufRKi4K9vasK884N4gb6F8so7odmuTspjFhJUau6sp95L2AuPqGADR7VXTNMa7YMiD",
  "key24": "QprcyYcMcmYfXzHUiEyibhdzF3KEBjkHvJfPENrwgHP68JXPKDzQgcWxsvhcqq3dNjtDcUB5TH9ELKRnbDRju1p",
  "key25": "2a7NUkuaSJWhRpv3vBz2E7QCjp7f1raLowuVr2eyJ9TBd3kf1GvawPYAjCNMdBg9dw5z59H5TDNQdr6fLbfkjSyb",
  "key26": "4E98GFVPahoFbwZC8ZYesAeALJwnwgyUgDPQTRuiNG9WxL9fqbqWb8decHaYX5jiuG8GLZWHPtecdTUcsZjnagxZ",
  "key27": "3AsJ6Ah91xh2DnWGzr6DQFR5gNCusQZszXKdx4i8kA5vvHJrL3t3godeTYUwLMpdYhZsTyq8gF4Dk1KvQ7KbWekt",
  "key28": "35ysk6fztNXnEJdkTTewJejjSxAeY6wjH5cEqqtpa9b3xhBVRcuQnB6X9JghA6YmuAnXMsmsqba76ycW5WhC69Rp",
  "key29": "VbgyGyoVmspzsvzaCZYyAkgrt4RxrfMSxGhSibkXahroSfammdR6FtMQQq86NF8ofWuZpzHtqA3Kbjwkv18cBh9",
  "key30": "3CqNAuhqa2XucvucLx9XjaSwcTNeYxuCvCWCATmerQ4bUuL5WR8hFZ1Wh3ePn8DdbEyDjcnyk48UihPrZEuaE8CX"
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
