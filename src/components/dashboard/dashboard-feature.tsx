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
    "5kd8SN7ZLMb4KwzfeKjYFtLxj6RvqLPJnddRxF7PFsBKwx6Lk1TdEV5cSA8KQDtFZCUoTwv3ktUrwNEZF1qKXRfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEwGCTViJ5FXiP4HkpWqscKugV1ZL3sZPodqxtrPzDPPgjpyRCWbJC9QhSmfyj3sngGt6NyxiWZwxen3cme6Bwm",
  "key1": "51z3Gp6tZyCBMmWCbJWaBTy3VzbQLqag3v3kXhPCmoduHQ1cv3E29Boy7sKtWDPLVmCr9mmghVC2D9EWr3JMpqyJ",
  "key2": "5ZrdhBFUDeAVEhGQWao45HPrfDLV8RKw3NwUvy3XEhZyYJR43wmWYMkEhxuoTmZ4qgnouCUdovD8Rv9sCorGqMfC",
  "key3": "5NYiigebGt9mSUgTi5JTM7wxDKWNn7mquh7oHmnoL7ppeKtyVqm5RWx3s17Y8BNTqZ3gpJnNPgUCYjhLAdpKsfga",
  "key4": "5shvx5CLD3rDRhXdw8vZyQ5QxGW2mhQT9AaHg9y3QF2kZAGRuVd9k8DEjz1Z2YLHRUw6W4G3M96ue3rLMGNLUmgD",
  "key5": "2z7Z8s12bSb7m6jfPQaX7fHknDdP85oCaGm7d1JMvV7Ph3eabJEwka7fi5qiZ4XgXDjX2Ubk7TRLgij8ogYo7NDt",
  "key6": "3ykxeC68xWa1UgRJ6DawtpiA6zxhUAZnTYco5LMb5DgCwPmXe1EzdrT9VjEXLMrj492CfTUsdBhnHa1Ae2ZRCNo1",
  "key7": "3FgGoomoKw3LKST8VKSC8ghyQYnKF9UyLqvizCeuKPtF492HXQaywzmFEz1ZDbDBaFWGe4sEhhebZgP9h5rPLPy9",
  "key8": "422PhBeurtQrafNKhVp6dzHPB66aW8mjNYnQGHCopFxnqZvdXHo9CLHJqNrXeKmorWuctSU9F2FvA2F7f2BXuZSi",
  "key9": "5b8jFBABdmnn3eC2JTXK8jz7xNmkSfCxvoGJVv9GS2WcrAPPRp3iRLhtMeHoZSudFdCVSrfq26xJrXhgKM9poG7E",
  "key10": "Wn5eeym1UyC98wcDuhQDmJ2k2c4nvSotG6itkKqwNzWCSerPGyTzZfHUsTyz4LLnqGkSLaEMdBQPiGJP7n66wHG",
  "key11": "evhXZ2nGWYYuEeB8Hd5U3bvgUVxay5tP51UUrw7MjS2tVCDvyU7wPmAqzC2qpzTRekvZB5QPFw8B3za8JUG4XbW",
  "key12": "5k6qA5RAYY4uXKoUuZqd3TQmibZSRzwNF5eUA5jriA6mvy18QKrwcqTCgyX199D1oUAdzp9dch8KfQXfE8C3ktfj",
  "key13": "5gv9jBqToAhmWTsZxWiaXa3zSDCmwJqCyg6NUDScDA7ybsAzUEmjWdFJK6SJiDWJr8omrjjvcZHA5ffqk9U6G1Fz",
  "key14": "2VL7hhyMtZ8Q8sHNZRR2oK4z35Ybb8T6xYdzNyodkBEHB65gtgjqxb5CHdWPN1c48vqCCMbokD538dcAoREXudQ",
  "key15": "2kKShwHjjspRpG3BCDgjoRzq3ht2yfnUb9fNExBjQBJw6NBakcVJ3B3sJ1ZDeiUujLNXvSGktW2dH2E4afUod2G9",
  "key16": "2Pg5HSt7zKvBZ28xFs6DugtQ8uoPMGcQYS62kpQ17kSCmaY4yvUQHQYgeYJLkBgWbbMYcFn8Eg4Grw8H5Bgd3z1n",
  "key17": "5ev4XWjqSytXxiE4Z73tAgu814am3ogwAE3VmaZPfku5vbXrSsVq26aqvaum9utDmiETjGa2KGcLWFCwerQQN7ys",
  "key18": "2DPEbjFCotZXCS48e9329s9gjVVGXxMhhxDpLR4s3ht9ywGGf4RdnM3ioRRBVaHuZKMxNYpQZVHs5RsieP6xyfkx",
  "key19": "3LUTEKzmrqunanFBYQqahUVKmPzSZ66cQbt1QmMDgKPpfddbCAQjoVQUxQh3wYP13sCtmVjR78oprn57S3Ne7Pvk",
  "key20": "4tV9eYsydbQBP3FhDMJDAWdKcWwqZygNdqB9ez1mVuxm2FTyL4ty8oF7DRndjEmrWnocY4y6PTExTP439UL56ubv",
  "key21": "3rT1Lvb2WSQm66EJ2T5oPnJi16HSUud9vmdyqYcdcUqimoH731EujcB3NujscHwJQ7Gyqs4Y99UR1MCNJ4cVEi8t",
  "key22": "4BqS3oyEiazegueEe1pCoFhA6ujHaVtvHb79HnUpUgGZNC7W4R7fmt7yDZxYAa5WBpfq49f8fRPvTkBZagMxfnEi",
  "key23": "3CVsAWxerLTYa55A7ESFn2h4tVyTUxSjo5xVj8d5vDLb3a9P9WiHuXgtkoczPyykMVAKNUQj9Nm7hJgCryuJmz3",
  "key24": "3fACc3551FcgBbBNuHX83dL3zNgVfXSvgqMLt34yCwDUtz3XtZYok62kaM4XSyALifLsBKT2aaf6gXaEzn2xjPaY",
  "key25": "3V5u9KJAWDe3LHgyu8Hw5q5NX75MBVvHByjZMK6MDrXioTYaPcpU56UT6XVsMYYQRDGgvQpSCAeQ66yCvrA1PBaq",
  "key26": "4YFGwGUXuqRbLdW4Nqig3NxQ5YgKDqTtgdixUGc3rpHw6sDq9EuC5esug5QvacBfuw3MyFxqRcGVrYYFebaRscYN",
  "key27": "3wXyTnQGpXaJ6PKmnuA3DAQD3mVJRKiRtMcR3eHs1VuLD6FcpMme5jFptJ7o7cWnhTZz33P42sr4YKjWeY2oeVE8",
  "key28": "3yb3ayheYPVRDUyaXPyE7q3PVUfnTmFSkXXk7e14h4CUgarreLsfBHqXUwxGNv75yeMbSff6pDs2sYhEh56TmQ3",
  "key29": "4vRh3wf4dU5wU9J2rzr5Ea8goFMPnsb8LV3FdBw23cmExydAt1KDAjKm7LrAUsCx7uzeYzUqRLjd9N7Yzvc59f6p",
  "key30": "3fNaHhX8YXiEt5Vk9FDvVvRgXLMMxWJFmCMjJs7R5SzXqLQs9muPE5TtwQVuCakixV281q745833ttviykeqUvae",
  "key31": "3xLz9SiQagKJ8J4tJqWfMXqhLxA6k3nrNHAFU5vKwXLwP8p27WsPJSWcJZptXSM5SWFhUD1PpDiBYRMmzFBh4AEQ",
  "key32": "4MD8cGsaRpPC6LRZ5STbHh7R1WgecRtBEi7xhj3ewQLEqgfYxZ1CACKX2EyWjMZ4pYwj1QFUbYnrVk3ZC7PeZ7kz",
  "key33": "48vbHrFph3LYzRtBqqtXj73F2xuqVmqG6NbekoChXdK6RpEPS7AEqWRqf5p8PydvyyNLcsJmZckxPfUcSf521F1f",
  "key34": "4UzU7dHuph9vB1fcKojTNt3Z5jP2HN6tuU3miWQogn7ZVdCEBXctq2XBnykonHtbQznSfiMy7LrHWHoZTKViLPzp",
  "key35": "21Lr1YPDzxaW7R41rs8RpwtRGLjWuvBTFDCTHbqpiUCdPbwtJAJo4EN5wB5JrPTR9kTnDDqC7GkPpz9nWnnfLkob"
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
