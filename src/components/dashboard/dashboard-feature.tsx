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
    "2jjj4qDkBLc1evVg5qrVQXzW3SoMLegnTTVNi5iGV6S7uGHzw3ESp72hBqx4SLHESioSjfdqafKWvHx91XyCzYPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxbTtBVSELAqjEgNVwN3iGhqJ8GERcLVyYuLwHxuAZodMDQU6rZrhR52Q49mnVCj4EXMHDr5S7KYP1owCG8SrUY",
  "key1": "37p8PupaLnEK8Me5N4dKy6nC7CGXXuGpNh3uC2sasKk1XJd6MEpF8DuAp6J8tV3F7NRhH9nZWSSVeKxPYcFzsUdF",
  "key2": "4s4BvnhGDJmoAmyjTqWWw33PoKMtBzsfpAHdBdZKqjnV1gxmRFyhBQy4QinDpiog5cYydBEW8guAUkDAkQs82HTn",
  "key3": "EnNTGaDxHm7Xyxn9KcpE3j3zrAKfuWBVyFhWXNXmMEyYJLupn5zUa66PQqGcQYGZkEWH4PHu6RZoNRGMLhXnfu9",
  "key4": "V4vPxQbbs8gcuCZU8F7yd3XwwLBkiU4eCHd6LGyzXRTWZG2eXtM1fyV8GQ2DFq2ryr3PguEZrvtNe32UPENnKFP",
  "key5": "8ykKWX3ooABtEoWhUSRp4F5zzfMrpPdNkju1S9wzmCH3ZokMAtkCPeJqavZ3GpSCKeEZQ38Zk6dJFtCExbyeTWr",
  "key6": "3PBCvk1okAGrXJQzbKsT1SFLQYAUX3cJzvEhRHh4yMBZoP9XC42r4pkQoLhUZJvYKfLDULYifKjZcKQSmpS3qZFD",
  "key7": "53xE9pAAJAcRdPw1RPv43jXuFgQa7eKk9h15HiEffgUmjz3BmahkxaRChj5EEXxRrWG8raP54TjfBYY6Rh9osnLi",
  "key8": "3C4sxkM2Szc5ohdKauMC15MPJ1DQsj52LSyycMkucG6BtxMymVWCHjgaPqqPEe4r4WnoqGLwvLeZ6Wsx3EV71FJP",
  "key9": "3jP5SDAFNZzc6ZbsEAp9nH7hapHcHJB6iSubVdKYybBDiPqvyzCaL8jhBfejLhVp1UmmWxB6a85qHhzbCUyQpHSR",
  "key10": "3Dm5MNeStJSs4rMT3LkAQiHnk2iAVkmUtR8j838ib2BcyfxtN9gJhSWMHRRGhuYg7h7WMWWqRXBmeAVN4WvHRVfm",
  "key11": "5HS2jxWkMai454LWDpLTeB7f1QPA4NGVpQYaSJE6oqNzwjiYyXo6KDLhrA4isACLZABGsLBPoED5DJHZcAWG4Ha5",
  "key12": "6122XNepS6aqBUyqob7arnFT7AD428wePnJKqVy4DYcFWKNrTh3grKR7E23sNjM5r5WCep2mHKhhjhTALpT951hx",
  "key13": "31sMKCoT9gLRqfowi5TSECKNobitdTu4S4CUuabeA54N1gzeTBeN63ZzCWm6ExZVUFD8dspr5KkJknyCgEE3eYg1",
  "key14": "4yRHzfGrGtQL9wU1rMAv3DyKXZ5uxxNGccjKhuAkpw9W8Qc4DPEKhJSAEZUH78ZL6V63FsfX8ZYhYdwrEdBUfRLc",
  "key15": "cYENZoxhCpqggUKuu88pbHqufNGyJ1MX4y4VFPj84R79eMv5Ztdo4vdQXpymk4csTL5Pc8dEMWwQe1M3sBjtBzg",
  "key16": "3Zj68z4WQWuHz87gX6KaHhLZB8HYu2VdSaXHnKsVdhuyip6KoQiK3L5YCvM9zEMTeezvUg67oxVTgm9qLbuSp6yf",
  "key17": "3xbSgWhJtinjSMEytybHSWAPxBmzz61M9YrVpM3dW92fp2jjakTv4DY33Z8Tir1HizQuGhYR2ZHV92UdeBkEnphL",
  "key18": "5LSE7ipTy23wjvsnwvrx34iYJrDd8wVJYFkFjTU6qLFjXzE4fCgaxT4iYcnw31hq65Vf5FYJmG78feHAzoLez2HT",
  "key19": "4mqRLP35PSHwxgpGvWywCVpRrEweQhEhje3VeiVMHLtDkMePRnWamM7e78EcWe5qDZFHkqTSKFJTp9niFLBhPgFD",
  "key20": "51GEZNJE6zH3XYGPyAkFXoubq4ttYLDm95dD5jgFYwqGoFPWQpdMdND7hsGsDpweUUEkyP1xfa7MsiYxinCcmenw",
  "key21": "43kxZQwxSTrF7cdjNhFF7MfSbjYNZk15PcNGZ6VUqG4qfMRpvDPJFe8XxBonAHvgGMBPwMqGCP8bfeM7GwfL8wHU",
  "key22": "6389qm8W3J2ohr8bg3doogJ3fj3tQnpSTaYP7BA1TTGRW6JiKuCxKnrEnK5BXiYqFiPT2ywN9sjzaacj1HcAfdvg",
  "key23": "2kMFKacPsmWPFYtUDeYEhorgf1ungkh9H819HEzEvGxxFofz8VF6AKSQwa8Zv6Wqe9V9rShBQAJvp85xVAjRffrs",
  "key24": "3oSnH6h6xx41fwyy5pybfyVmSnQrLrkjmLXQG64p8vJwwthipihHPPkE6nAhnX2eUcDSaxjiXvTWczrbSBLygEza",
  "key25": "wNoGfRygqU53YkAhzX2uzcmeiQTptFvEHBdsjjgTMUSGGqZN4rNjtP2zjm4ondSEF1EiZa1dJ9XJc4rcZu8D2jc",
  "key26": "52nBXfuMsygMQ9tfz96XU39uxB18hgNnVGb63jcZYPQ3cMbdFgVikVtdwaT6eU5L4nAm4LCz3yaYj8gZ49A5kTbc",
  "key27": "NYopKfiMA4VvQHJUXoJf1J5u3NyhC9MV5NpR2XvVt3ooESTmTreZxRAS3EoixrnJ61xvQCiYjt641aLQbDqp958",
  "key28": "51EUiFKF2D1EiDYgwKq94ezGWj19S8KmgUa63GvqM9Cy9jYeAP6hy2f3UdS3TTHxbTvujaDYVz8NB3thEp8Bk2Ck",
  "key29": "5yD9VkZfZwBF7QR3mCekdfgq9KdqZs7YJvzRBvkpzTwe8vxi7Pn5sjUC9TJGFK7EvsD6rn5SEcnwKRtzhngfpNAh",
  "key30": "poDGU4nwSMWXD6GV4MH36vuJszSTSjjGyQ2GxqK5vagxPce85KnoiXhHCvDzryGnqPNfy9q67VJ8XYJEzCDYf4Q",
  "key31": "3oSLhaCjNtZm7YxaRRs7qEbnAQaBYhLWkEnGZ8wB9XTZbhPg1TPA48jmxaas57GwSGfNS8ne981nnyryCzHcoekQ"
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
