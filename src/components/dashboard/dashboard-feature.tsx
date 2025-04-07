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
    "3sgBiiurF1eB2PNG4wT4NUZFKE4CfQkydCwyHniTijPFW912UUr34HWGKcbm5CPhwpziou1yDLns3fzb1c911Y2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kXBBGjgMrL7LmD4usJSTmj8FbkpQgApAa7DGye67xtRznCgczHabjWZqzn5Kj2riEVeBEnzeC97v58y2xmvKgNQ",
  "key1": "27Q4CKkrGkVXSq9ZaEiErLGHgfSDduGmB9tgcPey2kQATdMCvkhwfRL7wekejHRfhVgrCqkZo9fbfQ5npXyTmABJ",
  "key2": "4QQcbTXDq7E2fYa6mAXRG8QANUkMHVK124kvdezBHFAYd1GsUbD2om2xEwDideEtSYJ5HTifPAC8PX9ANg4QLBoE",
  "key3": "46iEJ8AHVBxmHKcFo5RdBKwAXJjPKfYqpSQWJQXnkH6KBD81gbsvXSFdednjiBiuKJtc8mrFMa4CWE4qXkPMQLWj",
  "key4": "3u4HVnH9XqaPRpJTwqTLXuggLw6JH8VsFmPRbBiNh7hhwnmZcBbtNiKcMMSzCtZJoDPnZv7HtvXwex4wKLiVPhjn",
  "key5": "3eT6DvK2P41ir5qzCx5Yvjb8nU22wvraYK8EA6EcmVjBnURdsCJ9xn1nFjqqfxqQs5XgiEZ1VzxrjeW2gJvUYMyh",
  "key6": "29MpqwRjtxbXe9wvsX1nJV19Gjc4MJNB8XCfuZwcEkRD8YTZxkaBrjxjpGG8urUqitqgJaJzF6YWcnFBbhet9ZPM",
  "key7": "SLjDj5931qUPaCAjB1HrGz4Hs6LCv73hdMYAweW5ZAnJxNf62vETH84f9cAyS6NPwEMEgrVxZCXCAfvjXc8PkNj",
  "key8": "3gsuczitnYFmgJLaPC2DPeqmxzSbrwyjzaGMEm6tYkfb9QzWsWo4pdsZtrfufPg9DvsLZHnMZ8LbunMT6ZiaYoeE",
  "key9": "cWEXqQRY5jDibyesEWHiwv4R86CdoaL9osxDBnjmfWx58kVnxoMasqGkqgU2LZVGsytmweuf2AtGdPFS6L7NjYF",
  "key10": "YWb6GkAMQh3bCTESGsfAJ2tX4LabWjQE4bbur4LSeS29ggjBZ1BpfXwLAEzguJVV9QW8cg9EusBKWfGCLHjEwuM",
  "key11": "3DcaVSmyoWU8dGCqBo2iW6ZkbMi4EcWVyCLLrYm2rPckQJeXehfZxBpbTaNdLvAie4zakMeAnsyDvkU5cbuu6cM9",
  "key12": "36unj1csNQAqbfUS5LuXwXkXYZX9PF4DjsawHYCBgvA2M17uie1Vk42HD92JqnD1MrH9Yn2aEcBCVT6PFDKprmDu",
  "key13": "4Vo7wxdAR5u2VQUShkDUtPEvYbtiwe265QYsUw95JvuCyfb6qTtNHWwZ5i3ob9PMkKpXyQzV4hvs4mVqYjgSbeKW",
  "key14": "S162ktYXc9kfpb6nPo2qN3BYfxZJ1fD4kxPnQJ8YpgdU6mdW7jGmRavB9ns1YCohSJhXhJ3SVYDkhG5uwVN8Zy2",
  "key15": "3Fsku4PmHM89aKHgCaTstjz7GQrKJxkhX38XCThs2Kgf1EgtGMWhwP8w5Z9R9CNhLzQKUxtvjRRfLkqj1dk5odzh",
  "key16": "AtQB3yERyufxeD4tPCGidD4tVC7DpuCtFg3pnYzcnXog1XBoVcjsaCWwiS7SnJgUTrdKTQ9AHjTjZNQM248YTUN",
  "key17": "5jfvUjcYcD1zqFJNZNKrGN5RJu3JVzGeoVA2zEgdk7CfSESntY35M7Yz6oGabfHse8hThoTUyBxpZhD12Lce13h6",
  "key18": "2h691jUJQe7NxPreYaeosY2ENd7BqeoKTbjj87jLjF9x2HnXsTkmhJ94HRv3e9nDtA86bxZdJ1fBKdXo3B5YusKw",
  "key19": "2ZqExuWN7mz7e4QhSNbkoakqLKvQdSTuJjjdzLZfMaHBJxyWDhPLx8yijBsKEQDYBrr367kp5BDMFYXzibEwE1JV",
  "key20": "4FeUc6MpbyN5vjDfdzGbSysginewxPQ5gAiEK7DbSDuDdAnhoy72VPvDZqc3anrWNsZn5Ac3uAT4mHSh1Sn5etXf",
  "key21": "41er2oFKkya4tEUBda2nDLnz4wcaVsTocnDAKmneeAL2vvuggTjN8ZwPJkCMWznjVNUzPNSgmtqSyTN51WuFJ9Uw",
  "key22": "2Q1Z6arh7BH4UDyxm3F43je7db6LeZvwvWeXHmsTr6p5ribUYxRxbR8LddwRsN9Sr2rRZ8RbBXbzFCBDFj2bRTGf",
  "key23": "5gbh7FzdF3yHW7gmEhckaWL4dk1vamA8Zrn1pdqqtyFcYEmdFLersT64K5ZQMSgC8om3tiUGYHkXqKS9uLpobv9V",
  "key24": "2CUbhwVgxnPG582NcJBJJg1mWiYou9hD1FhbHxoTQ3vrvNL4dWoo9XyQAgLZRW8jptGLbViUGpfmLHy3vXPxUq4f",
  "key25": "2P5xU9rSwvHTGBQMg8E2TEdDzZxKYXFUf7emQVUEGuWqJt6LrmfmTgFUGofd8C71Qxg3E8DRu1B4qcUREcjPgFPj",
  "key26": "3BiY2ySveWfNikGhjUa82mQVncY9zNaUKQihModpSC74ka1anqyDm4T3bgXYeHh18keD8UUo6qM388j4WG5Xf8xt",
  "key27": "5aaCw8zVxrngWVwimGMVyzeSuc6Vs7HfydtmbJnZSYReqTYvG6UKpV8J7io2TpBU7qiL9oBjLTo8Wb9MStbkVVwH",
  "key28": "3nxg6tJQbCVv8ys5STqMsanPYuMkZEUCUGB6AoFaFYEbvChSpi95J9sH73gGycDvjXMv1qu7jgyWiaMyUUYRR33Q",
  "key29": "4E8sZpYvAo1tU6SvcP644bTiKz4CKYpq2iyJBaag2EQAZQUP7rTZ5crdbXGtKemoDbipL3wed9j42P4ctPJ4Tww1",
  "key30": "biDN49Er5jkCz1g1MmHUPorKjBWS8DVAmuBL1xUZXdypUqamvbxMJX5uSUj6hvhytQ8LWvRbnsJ8GUKB9brwCfC",
  "key31": "4jyjvSYDup43STdmCyPyi5yrWwNUXUwwUu1XDTFSJES5Ai1CdNDgpuX8pBqjHZZtPy7yDMU7Wbe8FKMUvb7r6sgM",
  "key32": "2bb4t5zgM8apsVe41mrvhgMg5uKBncsUwbiMQ4W8GmbL1nKbuSdgavjGsUJiL6m7tXHyyQRCRPuRwCBP3ECj89wG"
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
