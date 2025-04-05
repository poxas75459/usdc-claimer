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
    "545E9YpsPVju3BBPxpaYmy7LcepKk21wSWGqGUAxaYpErius5mBEEZL1qRhKamWBrwasLdpGFqKZRetrPn2oZrvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyKpgAgvyPfpFSczwPsenrb1yquVr7fSgZZWxBbGK3vgaFWmt8A58rCuF4h21YyZu5vj7ssdW5QZoye1wDxZAde",
  "key1": "4Ni2La7MFkS7ht73gfB3vakEpR88A91rxPma3VL8nVRS6UBerdSP1NH2VYKYSnw7wnkDHsk9mR2dNxEr78MkaDZm",
  "key2": "PfLg5YbcWGs6dhoJSwsWN44Banhtd2HDepVdC8en8TGJEi6ufx2oPTvGzxFbsqDo2hiZoGoLfWsG2m8BcUv55gk",
  "key3": "47LCr9AAoiCrLJXquupiQVGdWuF4B8zV4PHqX4jtBLdAQMNTmgCeq8RPWFifWLos6EgLUy1unYHWn4xEz2UDa6Ux",
  "key4": "5uWBsnYUMtFxepnxQqvU56myxu9fTmvSFbK9osYMo8GsyqU98VUbVr71eQrngZqp4D2je7wCY2ZbVEgtNaZKvX4j",
  "key5": "4cJAmvR7YmYjKiwyDZq56H5SNkBwdKbE61592pX8xz8Mht2t9FT45A2krUCdu3J77K9SyDMe28K2rkSD5EhTzava",
  "key6": "edcKb7nk14FVGKdfiWnkSkd9dqcLYDb1Q8KZBPs3UAfKEAbPWskY87HsRAyqHPPWKTLBgr9L2sEjmxBc6ZVnapJ",
  "key7": "2rZhw8St43tYcnuwyCtpWZL2XEjyahjf4r9sLiWKcAoHaQ8gHLjMEqaMTHwf7qe4r39BgBBRY29ZEUKQAJymPToy",
  "key8": "5JyiNwmuKFBSqWMEzseG6V5ksfRrM2UpKVKwYgfkphFRJY723RhWE1NY4HkhvGFgoxeEn9FgMW6MPT8mcFX9bXNU",
  "key9": "2uwbqpsixkCzNAnaE3sNBj1rv5boKqJ1aJCnjoJsE3SQvy3TfnwATrhtwyg2NyDuzRd7ie5CM7KH1F7bD1RHiEuD",
  "key10": "2qjEB8Z14RU2tVh1ffxuWC6LxQMGdKH7S2nx3JjjqhFzVxQZffL7agLj7q2FuSqEGhVnGFBWRfvmnYZXhdvfgCzT",
  "key11": "58Y7Cs4becRuekLxyrniUfMDB3fa1o5jCjMvFye6EfJ7TD4woVHxY2nn3xDZr3MQ52Y3ypuzswEzKdVUDhKDnN6X",
  "key12": "4Qai2RwzS2qRWhGaecvWfRD1d2Y6DuxKdNSiAYmRnth9wUkx65quyPVr512hP9Ykkb1bSDHxyqgeaiqQHZEvs1dj",
  "key13": "52KgNLneC2EgLxPJpkGEWSMLYq7Y4Q2TgNHiva96UrRpiFoMb38ws1cDRjXT9oWjuuLxt1mbpqwyMV3zdbtxBezj",
  "key14": "2gJx3tZBANhZv5yCSRRsxdYMhfHkRK9A5T138TRP14eq8M6S6LSmGMTkg7zddRkqv1zXhgvkkuGViHLbP2ueF1Eu",
  "key15": "4LZ34na7G89YaNmsjdXAVpsXcN2KWJhKmrpoXDBV8Awu5xZf8RZDWPW6fdZWfvgh8PwjsAoBduFtsssaTRtL3upr",
  "key16": "K9Vnc5sq4o8XyA46Hea1AG4oM2RWBHasQDXX294a3fsGVxQ1rwYBUVGPSk7CnRv71wCaGJPkZiNfvffXb9j1nMA",
  "key17": "5AyzNMe6iwCJ57oTuxVudd7J1W5fTgttkbcg9o8XejfZXqM2bKTczHMnb3ykQKQYTiV92tbKQLsosCcXB8q2jQou",
  "key18": "k8K5hMJtEABzS4pgodGY84zuG8uKFsHhPNThPiBAvSPjFDxD1aCt8FsycduP9M4pnisZydafi29VvntCPXTKV9g",
  "key19": "5xM8Eef77KLUfj9dXZ1SfczZLnDqPmzWBuXfCffFie1HLTgyWqUzhPSUetCgwG3n4CbaDfpAX6wbRpgXtTrvRhsL",
  "key20": "rzpbNjaXYPFpSUXF4XpMy8f6mSJLPwqKLoMiEawgYdTpRHWytt547bh9Mp9jL2GzLacVNzp5U6E6iMNwK8AaN7a",
  "key21": "2wJvSwsnmXjnZHMfcyfaFAVJpgq9EecwvRDyWasS9GhC9NH4uhwXuCU8wLzsSJfMFiVGZiPkijp3K7AbA1wf38Q6",
  "key22": "2ywuwLULs6FfxJWebfEDP8U7qhe3QFoiEEHgtUbevPcN4dUHjeJUyVqdkUvgijGUWowGZzr5v3MonXTx5FcrvpPV",
  "key23": "2Fi5SsN4tWjb4mpG2gKYb78SY1MBChcKuoN8E8RPnyUc7dzyJP5ygr3aAJwVzorHVZS59wz6zqGwvLTvFpsf76vV",
  "key24": "5NKTBPwVDqynKcZ1etwhDwvnPRiYHrxwyX84pGye5cxXsDWuXMbuzZhiZDPZX5d2XdzVqCtaH8xR88ESwYciD8KD",
  "key25": "QaAU731aFQ4Bhf7Vmg7sATt1f5fN9cqRhCZ7NknVS9H8xB9uQvevWGvU6hnvwVMiN8UXwv97beyps49kY6QupNE",
  "key26": "2FctpV8tY8bpUe6prQKaVE99ueiAaMER9tiE7rSJvDVmqx4JN3p1kKofDQQjQYcVugXZSJRdAp5g3kk7X5wwadHq",
  "key27": "WtkoTQpH2VHLi6eYLBhbYaMiTez1RDdGAMHK3GqQBVy7VuWNvFCYzjKxvy43dNFFzbipBy4qoJdGhTDbEKGeYmy",
  "key28": "5pcgTx1nN3kLhAZ9MnvuGg2SLVSnkzUQqj9kaH5pbLWpsHJjcjujxDQDfBsZo36PcAbAHBkj1n2BBGWxQ8scU3Q8",
  "key29": "rmoQKxLqtqU4RqMzuTAE7F9vQVAvjddKVMmxeu9XxUaFwxfabbE5VK8N4vD5oYMGYMV9fBuYKNyb2kMDFtcn8oP",
  "key30": "3Z3ADvH2wEWjqKcL4nPLhDKoB6uJnxTLDfuKN4ut9QtgKs44HPZMG5bCrfcpc9ysfKFT4UCdBJMfQCr9igFrEZDo",
  "key31": "27i3mmEUS1JFbqFVoWmvusfqvmbdk6VbTq3cUoV7Ckt6n3nea29NEhq7J8seUNvpN4drrHR4FYYnf5wtVGxm29UD",
  "key32": "8pBp4QDZL9zetSuqzLxoGf8PW1tbVpM7QaSQS57CwHXeBTnJdWGHkL1HYPqdNvUXRu3hmCfFZk3w6UcdKe1dgp3",
  "key33": "3tHyZ5oFeQVhKkEiNjmNLoo3K9hrrjoxMGG7L35HPACgMH8Vkaqa4zV1BprPcgQSbnkRqUD2X7YiwxrwP9Ce91DZ",
  "key34": "4vWvtrUF3R4LdxFJiBMk2KVz7ApH7CmVb5YABSr1YnRYuQ3mXxAZgE5uPZVGkfpyNViNtQvAbXJsRF69WwD3sDhq",
  "key35": "4ok7mp4nYwfQNkVEabWokHDGYKhVq8u4Rz8TJVSsQUSup9VAob6yeU3ppg2yMqLN9fPJYq3ooqgb2ggRABG3mgbk",
  "key36": "4XCb9ZQsbHcCwyFWvrwWa3qS8VLF8WRWryk5br4Dsvn7Xg5GWmguS3tmjn4uxzJHrcr8874shoBoUCw8uUunF7fs",
  "key37": "3N5BEC5BBGRdrPU8AXjsfwZYLfR2zpPiA5H4YB5GrnxsxRwfagtrsX5jvVxjJ23kREFFHTAm2pF7vgBHQRsa9Pzc",
  "key38": "65jaAah4obBw727SzPkaJCZmcydN7K1dPJGn35skC9MGzG5zdSsejCbcd54tkb7Qt3a4dvisnvVw1cCDjKsL3AuN"
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
