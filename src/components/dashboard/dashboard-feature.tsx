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
    "2k5CQtcJFty9UWjqtCCQPnVRSy5BsRyad2qgSSboAE6afejKBYw6CEHEAkHsNgfhZcFKEPDwVvi1PLFwT5Jj6k9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FjN8vGCro3MiYBiGuyJeQbwKvkCFq83ts6BbokFQarnbrEbkrzmW96JsDRvv7QcTbNHXdh1md8imY499NEmAHy",
  "key1": "43cL9rUgaeLVNLnSw53teTjLwfM1VZNpj4LHkyd3nYrXg8n11e5m2rLUBkB7ADuS9JQtD2A2Q7hNujA2yzJobz5c",
  "key2": "2qGLyP3Mi6dm8Qt5d9XsXz1k4cptL5mBuuoEP8uhwKcfCDc5Z1Xm9YsyC1wTq5hQ3w4JSKaRhjk6gFMJpvKsKqnk",
  "key3": "dFs6my2s457Ahmxsunfzd7X63iath422QeeztGies5rF4fM7xz3nYUPRk9iDMpo5xMuLWvTP7znBYCZaAGC12Lv",
  "key4": "2Lx7qa92xkkmv1HBqGn7nhUZAtWk39DM4kndC5wRhvzD3XN6mC3MDfDtMJrtjE525p5QbkDVoU6ptejGUeTq5eFe",
  "key5": "42X6FyzkW5KSM2am4M8WLNCAVxKtGWvHz94kChX9mB4rV5GgWXXHnNDn6Pk6E5z1Cxu66z75M3CtmthVnEre17Yx",
  "key6": "3Dy8UZopkSdgzPuw11AMJrQgS5NwXgEPthhb568jnDrjVoybh1axrkC6gmHZGJ3742qvhT4zt4A9PmPNY6rKEjVp",
  "key7": "43F6oncikxD2kLQoWHSVhPDNpuWjQopvnraWzM38BjgbJMp5GS89GJjF5mMTmHF8mabgArutcQQAESoMhv8A1nxi",
  "key8": "57EV6uK7CmLVRGEkuf9oM6XPyTPUypFAx3PRZofBBpLrqwrprBbeczyG374JcDFARaM64KvDJ3vKpNwaCwsk4JyG",
  "key9": "2yhxPwkisxzcxYwFdJUJqzxvYgxFnfJNgv2DEMvun278HcDg4JuDgjD581yBwMW27vXUS369zCg7UmcnfmjZioHq",
  "key10": "415wGrpvC9Qi4dm949DcB244PNpJ1cedWiKR3duMcHnURLT2gqViABuQjXJfFShvrxbEjJ1aNs8xiaZApoTJCZ1e",
  "key11": "4kayZetHNsMgDk83oNFwe2MuNB7WYy7rk6EQfL2w7zGxtTT1dCG9zBg4MATpfdxEQrAt3cTJSogJAdH5SJx6yTBt",
  "key12": "55G7hEQV1S5NaKHAJfowziaQwY9L4YWSaYCv9aAgd94P4vo8mzYn9HJBBveoj172uEDc2S7LVLkeX38JvEDk8zix",
  "key13": "4ggyF8sMHtMvhMqMUhXbV4HxaQbXmsk5ztKDzvc3kjYH9iw1NvQkiKD4XaGpVJbEVnP6WTNPFaqccTkgmYBKdyMx",
  "key14": "3FTURRhh5vmy9x3rRHQzYZ46mmLD3jhjRKnRNM7Ga6Nte84BvGf3hWA1fAXVDrQ5AESwtVtLyEqZ1nHc16JenCBZ",
  "key15": "35vpJHU6g4ppaP8huYLbsi8XwocG28h9ZJfrN5JhRU6NfyrfPZBdgWeEYmia9EaTQ8txKPhrbxN1B1mEwewUt4cf",
  "key16": "672rXBJdaTdcjQamy6bDMqKRom35ADAorGREXD7NhxpwFRqgNdN4CdeS8qsShobm223soXtf38nHzmR4wxmqFMBM",
  "key17": "62xLckdiBKqF1f4jNFiMZra5zokmC7hk7ou25AmJvAGhmX1321WpSaz4zcmXNBVHjqD3NfD4HeFTuXUyHAVidotQ",
  "key18": "3CAj8ySfd5uXCGrQcSk4nxtH5TQMaHxxiVYpkpXPTgRKE5KUbc3EWxRDwSVYY19do61bPhGkBF9k3zG7snTQLyvK",
  "key19": "4u8zNfSBN38snAHLuBMxPHCd9qtZJ8QGw9pXags3f3ndkT3haq5woqC7Pemw4jWy4vDLt7ZANSUA7JN4KYNpJZUp",
  "key20": "3NYyLakEKRyEWZYzCfo1ChzktVQwpcWwDBga9UqHJqEuRuAbpq5tGPkbMDW4yMikSgBvqJGq5pXx8eM3pDcqyva8",
  "key21": "2ZVv6axkdZvAkAVE3q5EMmC3RvDYJiMKKh8iN8qnexvqgXkaBzrW9GkHiZUSs6DkeTpB31yATWL7qXUZiqmmACyn",
  "key22": "41euvF21hdFauKnGAFbjj2ehf83RmPp8pPWckEFXaBhNpqcfwJtEE4fK5wRYKQy1XXdgGuyoWvCvL6srQzWcY6uq",
  "key23": "5Z33cHvFie8h946Lx7UFYHvxJu24XZ29oxhhP8wRzzVb3S3gkvJqkv882hZV2TnUgBFmSd3a5LrhFa5Vcy8qt35e",
  "key24": "d6SfKUyUHh4bHXMrx1curwRg5jro1a5mpHQKDWbbPJLeg8Yakuvgb8WorMnnHrVYTVV7ZkpDyRFbzYN6ixawZNf",
  "key25": "37kUnR1N5wHxmWnzCvK4itvqjYg26BShHzTHMfnuWtrd1tjUDHAw2eXwZ5v25aJ6fAzPrbxgDEom1MUZpNN8Yz25",
  "key26": "3RnyESPHt14USrMLrExYGkV2CfA5w53kfd6PrhZMdsj3Pz7MFs8njxhWoZC43sDBVUvcbGEVAGHG85SwmCKrRNfd",
  "key27": "2uJbYcNmWu3q5SDth24yxEZS7bQMwqzD5H1ahE1zjYWf8xsDdwpsKDGCpZoBLgpqESXCazpbXfq4kPnHE6hnpXFA",
  "key28": "2ZAcPsLS1SpBzv9RHYMwbr2zNVFxjCnL31ibuxY3pdU8TsBDDuRgd2ivBmsDwEQi2bEgGN2ikgZFB25K7HsLmMRf",
  "key29": "ofp2m1ev2v3RkG5d3G5tp1adp2Lc9s93BgN5XVv5fZpbZRTSc5pRQCJLqXiTkXgAC4o3rnQoUpEa75pyhYKmyg6",
  "key30": "2rTkp45wjdziyCoB9gxfiDdBzWsQxataRPmTd8HbYDYTWqtQKi9YjGHDQVQM9cisHd8DQzk8K4mjTpn2dCKbpUre",
  "key31": "2SfSr82uUsW2SLbi9gTpyw4Z4u6bUWZUV8ecyfYeuw1eoc514gsPFY7SXTdRK9ni13fwaBopJwdzoHeu44nrs9Ve",
  "key32": "4xYnCqEYz5dF3hdbGUsRju5VG3pUXuF8nveyjx7VaDL5oAZKgZ9QsTv2vtjSohnzC3wfM7PhMNRNXFL82x6zNuoa",
  "key33": "5E98xXKSkukFRqkm3q9KFBzWJVRTKmr9TmJ78s4EDDvP4htgW5JBbJcLWGZRWp8voLdUZ2tRHJzJG5abCGkxtuxE",
  "key34": "5HWGdV5xmdiEHeQnywWfbSfRLn3qYHRn6gimjkjLPdyy7MafZdLh5FzFMhumchiB1nyAEdvzocdyQfDNo6h2uNTD",
  "key35": "JWfQYsJUnvZLqcB9vPgUAXzsiJwQ23RLyi5Efdew1EnXWeh3LVL1P3y6LK9cbQYL4UXSCMWoBxi5u2kUWDs1s43",
  "key36": "2qN8KqT2Jt2mKd7i18tGB7LDkZ8qnvbrrVbGT6bg4KPf3oqdqPDDWkN31gaEfpxrdJJF8Xt3iqQFbB7NvTYM5Z3d"
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
