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
    "2nGuGARtFEc4bGQxGECqMhCA87uWW1n3WbRGPkuZ3HomBbBcV9uQC39nf8w5rmjoR9p6KCE1SfR4TtHR6ZBsz481"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrhixkHBqb6JHoEAe1hJRbM6vREo5oQ7nQMk7mxRU5ma1WxawvzwViVXxiJwzjunVQdFokqXbTPzh8VHTzfzizq",
  "key1": "4jhtngPkpFAsiCpcg2nX9ceDMGzdqVPxPBjNXnoqcL723K9W4FUyAZyWEEXdKt3Azub6NKAH2rdfJX3W1wLByP8R",
  "key2": "3QU5jNX3PzFqk6Pb2e6PLVmfWWHGqWEvweRCsZhJ3iFWqkSwyF6skQznwnvoNgrNZXy1aLhiT6qQeFbVLA7KedWa",
  "key3": "61T1GySrfPp1uVz1XAjCPorKexuH5xQ8E3MpXHxbp75QeEqNoQHojdSMcpoDPyGBv1fDTFpB2G14kBaZ35zWDZTs",
  "key4": "277MGBfGUDKBuXXxUuk3GN6LnCwHb7maaWtLRBYGakYdnpnomMheijaEpW4beYm3C7R6SMqziuLSRBTUf64oL8cE",
  "key5": "knTTNi3WB6ET6UNRk7GsGogaqKVvUhSevWENXcDc5TZLaW1ZKSLfv7wja4WFpuWE8Ei1Vj7cZdYuTs9PmazYfr1",
  "key6": "4zr3ArWGEruzHWykLznc9B6M1nGfii2BuTWoxFd4RePEEdciXKFfviG4jLfQHjoAMFR9Cx8jUsySxm2tRvkHunum",
  "key7": "gktQ5MUkMjX3Tbd3siY3AAHtdyfqsD9kTh7e3L7mHG2sxkZ69D9Qncbtx6WtiAaiRFj2DqQkvy4BpXXrTq1Kffd",
  "key8": "3RJkj5UgsoWSVAKW32EGH8nnLKVaHDoZW4bPJJ87rjm7Xyx7AV5CiRni2Qr2cSB1peKDY6ThrmaaY1Zk5iHW5sGk",
  "key9": "3yLAmRAysAH4hbQSP239PwQNNcFa8MBVdg6mDFzpJQzDhSdajCQ17uCJpvPQdkwuXeF3WBMcjve8itHXK58121kf",
  "key10": "3a9DM8XpU5S8Jt74eqsrorub8Jky9PEsoDEfAxqGngnLfMCXi36hgsG9ZK4PBouTbabcjpiqWZHBGKrWvdFoAXR8",
  "key11": "8A5yqi9PgYyCKkwvNsYA4JjDjdXrwTeARe4zfkmKFabtn9YxwiCskMEkTTZvdD6nKUbSho2w7YZoiTtNQoW7JHF",
  "key12": "3GJcbyZRfq3GtmyNeiFuwBLjyY56uMM5SbsxuSyVVJ2hfCgyd8jNaq1aY1Vu6pKkHKff96gvtWTKqeXwRRefNRB2",
  "key13": "2XWSPfyAL8dSp9GdVBMJ4zAZRThtGtHkt16NzR5AeyxEeM9TmPhYZDZjdsGL6YtYFErNozvyD5i2QvAKMp3ofc6Y",
  "key14": "Mh3uz3fno9YCUDjCxAD3cgu8zFBMMcfm3pqLW6BW5ZC2Esw56NxV9WvRN2GyGUYaCyZNp5KfQt5oncCYBcy3F8G",
  "key15": "5ocy4aMke1hYQDW9GWEjU52L4unt8TMYNuGjK5KFaJQCdWiKUTx1gyr84xTbo4Gfc8dHtv1izZNVZbsfQsCqFvpV",
  "key16": "BHXQ4ndHQASBigKhVVPFBrreXPefKkwras7uofTe2B46aBqvpFmTrdYTimZc8oKw8FqBNyjTtAqyaHudbpyGYZn",
  "key17": "2YTq8yMCqZP6fayCNbMUnhQjm8fpY7zmecGySs3PBf7s6y4KbSo3APu5US5GAJtSoZHEztX3YzfKw48icLcUZV58",
  "key18": "45zcA6s4Up8pW31AWwmJXWS2Y3DEpY6quoTCPXk4P6QcunYNiDv61d7WhsEVh6PdkGSuTmks7kA61V7GR9q7JLNn",
  "key19": "ndcjDxvCq9kZBsEAnXqQk5fA5KQr8z5esfY9GuFXUnMiNWLCKoM4y6N4RUKyBj2KdgydsBjgmVVkBECPL9hhvGZ",
  "key20": "GQ95PkDzyYxNAPP6F4Cv7zQWJe1Uc8u4oCn6eQe4kx4JZZw1SyrBvex7kVQ2XMajN15g9UFf1v8ELrQWNhSytEz",
  "key21": "52jMRHvJzcjpfmirzRZAGbu5RPuu2BtX5ebdfjYNNUo7WyhM3hRZH1xohZWjUu8fEF1rzAk64SuZWvEoYu8qi5jy",
  "key22": "4y2aAUkCJJ4PfAQNb2m9VFJMz4g9F6CiapNvwEnfcAiWBqk62eNeyDueGMPL6u3Tifj46WnsYUBoncrmfPQoZm3c",
  "key23": "578X9QkrG2JSGBmAq1kAQLg3L15uhBa9nJGCRWZe5q5owGRbUE5os4LbbrU6UhoBUNLNW8y3dHkK3wFXtEa9cw9s",
  "key24": "4YWtiapQHktGYwLxM22v3XaU1jtKSgkH2kMKxfMHeoUYx116HgwhccXCCxNtw33LP8BJ4PuQaypryC7fcxiKQbnL",
  "key25": "5PDxQ7TaTQ7srMJm4WJDieZL1mH81KkzyXg9Dxs5S45aoDJUEHhyntcjG7KB1YLQ6qEHPpR14ANYMaT4Voho2RCs",
  "key26": "5GvCk4RBYrKKAKALdo8bxL6XyTfj7hHD7L3LkUbJGWCk6uK1c122VN4Pxdcvdc5Ya3KdJ7yidW9t9f9j9LVmAeAU",
  "key27": "5j7rPSgfVioh5L5KKHyTEDPVdTk4Mcm7SnFVtpt3EJW4ufKFvpJhTGMxbwWvwNYg6en2kYnz8WznGQqPwYqegTVN",
  "key28": "5o5vsVuKHhZ2Zgj1UXbTf3fEcjsKttPTUQTY3bwoHNYdnz4wmsmXyMHJa4ssUB2FMYc5XobHZ7fwCrzkvyDqBisc",
  "key29": "YpteLjwCxJVF4PC1CHLw2wma5xky9hDPE8KUxanVeP5c5nX5rnXsKXBwDDBBj5W2PRpHwCbwXT7Y6yVwRWmhJip",
  "key30": "42R1qj5p1cvUJYZRySAePJzTQhHqQNjqeAdD7dDjLczeGJ2oB9kftZTSNTVUBmRYiWawzWd8AstayRhxRAp9QkYw",
  "key31": "Ypiemi2qQCSUHyPqYpcmPWhQ21jxioNH4VtfpiHbbZudAZmvTVVgLyuzrRB4tNVn9MvGQsT2Q8vAvarrfdS8NqB",
  "key32": "3YUj5yPGDioNotnfAuXgBgAS6ta8tVUa4DFYgSYTHZsovtJowrcTtRooHCfPgNRpdYUKnWshFR1UVHPfhpiQ9h53",
  "key33": "2CVy6JtEiTt7NM9F8x6DTRdzyAAsQ6cAAmSj1baVaYcq26wPEY6rUPAnEZruAomdeXX4TyTqrTVJgj24Uc5iwGTQ"
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
