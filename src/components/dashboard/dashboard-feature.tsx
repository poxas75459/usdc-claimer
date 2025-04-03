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
    "nhtKnSvhnB7akJxgVRJorAACrGADpen489mniwSouTXyHAqquHnd42ZBc2bKVt878HYSaUPoxvfpSSeZpuPgnTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZsxdxmNE5DaaxvXXnsEwaauHuacoscLG3gUonMBnLDCRK6EHegSCg6gbu8oquasjF9J6bvzfbFMBbCC5Sjqvxp",
  "key1": "2uhtFqT8WyNCnSSxigjreihMiV87bpTjysRgmJ1C38M87nGcJSiTc2cuMeZ3pn6BovUkzvmzGfAMq2eVqSwcb7Pf",
  "key2": "61KCGiGc75agZCUxKPQcLDEwRCMCKtAmp9Xj6LbxZDDtr1ReVUEMm5JBmZ5YKnn4cQpGrV7BDL6oFfX6gZewSvXb",
  "key3": "5jwuB32fHSsx3dSo2ML1M6dHf2J7R8mnJ8MWSWTyJhR3VDuDMiYFniU3JFRiYYHV8fqM1fc8J2nUmhQduAHA9pZ7",
  "key4": "386Zk3LLShzrByh6NdrYvkGMhpWL5vgJL4ZHC9QKmMhnxP3DBssrNtLDSVe5ecELgDRky3xxofKfSdvasm8peA4h",
  "key5": "3ycxBAe3RnaCQS9FTXd2ELnqbq9ZDXa1obVvy7ZH8zRZkmtbKjdZuTaWH621WFkn1WxeMYsL4oQKLwPCEadQVaoT",
  "key6": "2VQLRQPjt6UzQJo9nPENNdWsT6HaVfsPsN6vYkyatJhy5xfwNPoWHQAnp5x6rz5cyYZAkehbmgAxNoA6Ec4xPpbb",
  "key7": "47Nrm5ttGc8LwT7KuQTRsvB2cXbFFuuNUGvqEfrcQCXFqjRNWMCt3oqGPhDRTNvzxizgRykNxKYrwxWhLiutmoKb",
  "key8": "3tnbc7g5RdfAKF1LKt66RSQDbWTS2oHsPABUFuKcwjRLcjYaEMNAGKMcKcgjAwtjWzPmEZHkt5S9535e6nUWRWxj",
  "key9": "4e5gkUjw325rAZbZYxbSwUfYjYBKS3mJApCHTCot5yXW1JpepU2PFQBi2S1hwUJVqmDh2jFsr1kLk463ikhvWpdH",
  "key10": "3tizxvtSJHS6KvXA24FgG2qkDxWTALuPAhGcDPwgEBQDd79WFnTffe7Go3bLj3YBEPnXNtS3Q8HHg9hYD7gTBmLd",
  "key11": "9suFpuFn4ccBRgV1dqEb8KBKxZSr7WTG5P6VDVKCFYqoS4nMHz6aVnKYN9QovnxPfhM88rsJGf56MSHCGdQKqLH",
  "key12": "4nk5F3NDhFh3Ly7XGdFjJkE4VkT4tzcgZzKh561vApWBit1sKNYtagDr8o7in2L8GCKH2CZMSJGLQsXXA32Tiz8V",
  "key13": "26igskGk7c2sT1EjGc2krH1uyQHh6xsdmzvTF4R1XrRTNZsjkEFk6N43xH2hL8aYmiHzSuDPeF29ukzZio78crJu",
  "key14": "4YW5jDU6faPACivFEK7Tt7nHYE8fmCQggnRoe28iRGzQMsvZF5zQqVgvpMxoMpeYaQo9ZgmDy8nGCDvBTKRqqKZK",
  "key15": "5PtmeJbGYbrdbCwNjKHJNkufoodyQFmDNHSUc5jT7errQjt26T1fWEUP64nAaNEumanTwp88hAD7gkWf7XzMG5a1",
  "key16": "4AXNb2THAXzSUYFbuWy6uQFoHCbMXFVbRgKyjEAM6K2dKqHxUnYQMs6b6wnUbZuzQgU5bQH7KNPgnfa8wwA9f1Yg",
  "key17": "4Kdf4A88Xx4ZrwdG97aUNG8pzT9t7TzF5osrKG6VtNyBoeoP8Gb3m8a9ZwZkWJnAbFY1gKAmdNWL5dMoRhxHssS9",
  "key18": "1zJwaYHYT9FgXj3yMzjGyKCnHkUwh5jzGrKgUe8Wne78rqsRBubjx3kUo2PEPe5ukpbyAi3dNP7BcBQdFCkZcNp",
  "key19": "3N9ooNThuJr6rHxhKmmnqzUYvWqMMaeRY7KzSDyNu1tNVxEZRcDNL2QQhuyqTBPDB8Lg5TtFBraVWYJarVhJViX6",
  "key20": "2riutLYmbVCps4Qg8N41ueHf1cWTBT22M3q1q2NLL2rLZJz8QJVPr1BVaQpNSUrDvHdYinZgHwskhJiGqX2nwPQF",
  "key21": "2FsL28NRZWQDqEaRRvnq7AJpcU85XBu4EZz2y3PvxZbrbrgYpWEQxFBNp8TLbuWPNqRrohdArNTBuRp8jUCSXeB9",
  "key22": "6416wJ2ZRvENCYNowHWZVKXhvw8pJkn9pXwrCLJsNg9nw77ez7e46viqVfnRDqFjwrUhkua7nYuDVE12rQQM9Qof",
  "key23": "61mMpow1VuNDi6owupgHFuKFma4C544xkgA4Vb2fwPfNx8BPeHMZrBD6goGUExUkjPHdGtjEuirRGTi6NDaMjdXQ",
  "key24": "3Tr9i442FF9mywGj7R82h9ZAHyd8C1AU1miEpvQfeer8QKupc5kBztpdwgT5JCFAm2oZU5YNYsahjwsQfWwwgMtU",
  "key25": "4aSxQwfxnYQShNYJPepjd7wJVTsB1mxoZvQs6pNqYzaAhEYMQKf96jPjBnr1dR7Hdka38ganp3B2e4J37hf4orKt",
  "key26": "3uqtza5Pg1UyYHHGweLZEae2mmj2M4SHk8zP9Ef4RH5J4iW4kCrEPAva3mw4cDv3cQ1tChjzSrh2ApeV519KVxQX",
  "key27": "21zBdGvLysZBnSaPy3SggySpJJMH5R6fp6jNu9gqfPu7HYuMqM3yFC26ReJrC4RGQJMSHC4R6irUqc2sx4TWKEwJ",
  "key28": "YnHvAkyMFTeBU56AteLLy7qpr1LiAr9j5RGRxHBvPxWz5FFof3ZwoffnJ5PpXQqG43pQiuqpi7iWBAwFad5E1di",
  "key29": "5aeYn1U62qufDX9QyaE7kkMetNRs7RB7u1pm4dRUWNedKhxjUVNQLQN2hPrnZVRjwdadsMCDNX4ycQAVZedqAzGH",
  "key30": "3m7JCMJzWTA5bJDh8CyZTg75g9bBFtoAFnegXWWonZMDXt3abPLRUdtqyG49fcvDJDHyRAwPTbH1kNYqhbaCbwTN",
  "key31": "5WhuFTLL8Z2iVXaYKXjHkQRRfJXJ7UhYYiWPeqRBWDQdkGYBdiTpY7pyUy9PEAfQnRBWsCSi45sExySfyQRAmFhj",
  "key32": "4AbdvmPvdTM1sLWLerhJdbSD6VAyUSkFGHF1LyTo1uPWFZGeF4pcgPEhxALgv3zH1sruVkMoa5GEQ6dEyNTV377y",
  "key33": "4veZYfRMfW3VdDpmJymcv9rJmLXHZ4Woztuz23CAG9RU5wzUM3h5LGfnmTdF4SJq5kgfAdPehkeSaH3k37YSkVhS",
  "key34": "4BkSh9CCmQ5afyqiqJngR2qvxChEYgEpPULCgaEnwwqHKWwGdgon9j2W3w2dLfpuhAWoYqAJwL4XsMam1GSchTtR",
  "key35": "c9PNChAzi9bf537EC4rxR9smqHX25W5GgejWV1RNPtdP2RUkNRjYidsCrx6wLvenvfBEZk21s24mdDm3HYywKX9",
  "key36": "3KJiEhmsvjKq3Y4hxPtPHJ3Ek8ATWjuYRwB4Zdp141oWUAcambyiehQvp8br51kqbzV1N8dTXAkLvhZeLxXWFEva",
  "key37": "jLVwyQ5LAgrzhAep4GaH2qZ3MyYf4H2w1xJjKmhrD8QvDKLc5kY11FxJ2WpzWjGrMCNPwWNJgJwphdZ7DxmVUuP",
  "key38": "4VEMxqUKyVzqP5noyXvymMh5WQrbSaHBNX4QtT26D3LPMErXk3T8x9ZSbHDbesCSVABoRwdsjBYWj6Uq2Db8GSmw",
  "key39": "5mtmXZzai3z8zQnCNinsbbTHg1RCWBZcDD9cZKqZnq6BMLdAAedb3aqvhJkoKBkocfv9pMDzGjcozA72AthtGxup"
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
