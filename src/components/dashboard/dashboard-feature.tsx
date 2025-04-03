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
    "33HKrALrcDNhycdU3K96JJdZpPAk7naAzYKT1LuGMVcPkh5Zhqd4XeJrE7oBKf7dEWHcv7kqKupQXXHzCfr841bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbGdYg7XHZ9dBHR3UPQueKXfhVUpmdkXRkQw4vmxMovHcw6BX4jHSUVmZVtb557QR74fXrtXRUc7G69o3RZqYYQ",
  "key1": "4yYP2dnBhGM76Lks8mUMSypFhj3T15vpSwz9fZnPzv8vjvnBQYqcaWtQ4f6YA529rpNKU2vGC5PoRoLMqvNT6Hyh",
  "key2": "nnvztt6kx1xb37xm9KVsPioZtYTevsuPzc8f74XyMjskto7p9q2RyiGGndTDDWCyheVF1uhGk6ekQER6DbgAQsQ",
  "key3": "4kiSFui7fSaHw55R7ZGEj4KL8E68dhivnoLTbYZhA8kBp79sbh4pbqEWif1QJe9p9GfoKnW2FmRJF1CtfS9nqNZo",
  "key4": "61YVHbpyVnHh14dC3VqCdwzvRKv9Z4WFZQGLJGvowEL2KpGKro2VtjKcUWQ8zAozi5sx8e6qi72zpmcwzaxau5h7",
  "key5": "4xj45bDGYwBpwLFycYukrYczqXB8KWEXDVMczrngz9KryfD5c7HkjA1Chbt5K6Gi95Esb2U4725TTRqoNN2K7c6w",
  "key6": "4Y8QdMFccnqQPMT2HdsxtL8JDHC9rCsxQ6aMkMZc3aNpKxiGNq3wvwyZZCSq74GK3GLa18See7hhB2YvumXeBJrd",
  "key7": "4zfC6vNxErQKvP56f46tnRhCSAov1UmN6APysNkEn3nvGJY4cuAe4qbv7oagGejHByuDityxCQSngGx5pN71UqTZ",
  "key8": "2HrmxHgHD7gwaUmGdPi1DZoaskVJEqzY8iX71PFs8QZMK3W6TFUamWmHEw5MrheFAPFpnwcFK4gKdCtnWe7TGWxG",
  "key9": "3ddCtgGWwcTm8MdeBWhvbEM5ihet8sGmUUhJiHeTJT75rH6t4YWhvU9ECtnUc4UVZ19MJy9ePyCT38eGbeshpTet",
  "key10": "2sFS9uhf2QHWNoZFikBwQZvrCDefnU3mYah4CF8gUE572BEurVHtKh5YscNam2jKVGbUNCVsgFZYUsaH4xHMLmo6",
  "key11": "33aFfVUTjrLfY4rB6J8PdJG8aWo57SXrGKbVvY4h2sWzkp5PYNW59LWbPCZPEKAZkzj8QLQJt9Q9TboLfWJBggrh",
  "key12": "5vECi7VsLP9FnedX73R5t4FpzXGu7UcYYypfr8A2Jb2MCNqUA1auf48f2bUCxm8H6RnKG7TeVA4tnD6WJJcgdsE8",
  "key13": "5me47WwcmrmprnDPZY6zUrixQdPh3VBZKE9GoDmGPHudEbjQReGSxwjnbJtYLeo8zw3NEDHY5YZnAN4xGuGjBPZg",
  "key14": "2MReokX6WnmDs8pVHDvB7AmsKYNWxwUmAVngGSNfo8yaYVKsS1n27r5NLbYFsosPqQUHeiocCxYsWedutTTD2p3m",
  "key15": "3MjKzYSzYqJdqsjaF3pCksy8VFJukAJsoWUfa9n2NUx3vpB92MfTh6td5i21p1F3bf7uoiBjCZKfz5LPEt3b6ANW",
  "key16": "3oCzGKQhkMSdgpfwdQud4N8J1wLYcaGxQfxUtbERq5NGf3Ca5BJsWnvMS8RKxGEjccuwU2sYBuRAw4T58ovwTkcd",
  "key17": "3F3fQZrN2PJrFrMjad3GFx1hCmfhTS8bTzJYhuJGZK4X7QYpfMyXF6ev8yJQXbkx97y2m7cBVg79WJaAo22GUjoH",
  "key18": "3AUANEjm52zc9Hz5ikUQQmutFzqTJTC32SKJRyueWRjqNCcMHeAYk7fSzV3DPDDvcyEvq9oT5Jb4MYDePfFShDsh",
  "key19": "658PFoSzsJiCfENTPus1ymvbFLa4XbynbJRzHdv2bvveB6fyMVqTDmaUDtQdgzg8fJZSyyTWHQF4C7XVt7cAHTBU",
  "key20": "45dtwzCpYprzSTriubVwiWPyewceRUcNm5dDcM1HaDdBNVTUHWBkyMASRcZXJkEHGFR1mDSUZXKaatL6b9ud1erm",
  "key21": "3ugY417Vn7U1KDECSiqprFSEeJPeGg7Fx5hovXhwdvWRVyJKW5JFzGQ89NK41US8pEFDV1qX5nrkXwmii66uzEqx",
  "key22": "4NdVMqfcifkUDiAX3cLTQ4vgvHTidvd1yMDySn6V1WPySfeRJL5qb5qKcNYKTtRJPwUeqWwc826p9TCaQMPjHQF8",
  "key23": "2gbosW6xq88nHFykspyru9u9TaQ3q2ESvjTu7mejkAQA4KZkhNniQP3uzA4noEH71XQCH5iDMyGJaWSFwDpe2jnm",
  "key24": "5UQHqC6FkbtKJZMw5SKMhVbWQhtiADFvi1SDX7zk8nJcexkJjvBEuKU3N3bQdC2YLsjKGDo3gDUezaMLu655anj1",
  "key25": "1Q7u5tiXq1LF8Awx6k24CVE6TmwpwtpASfxZaqHfHjAFzZRUo9b9FroXqzdPAr6pw2ZcmiZw6J7yNvjas2tKv6N",
  "key26": "c7dEMNZyDZs359tbEmAhMmhLjkggL9LTQBtHzuMiUZGTsSPtXqTB2UuFtFUHwk7Z6ALDhBpkSoZC7cWtcJTasgN",
  "key27": "2N4Bq7mFhLRT8jc6wsxRRZmnp8741jnAdkffVRQ9cGEnErpnJfEEAySwNRax23j5dsXeWkE3itMDnsRmTkLKbowx",
  "key28": "3ahLi4PLaHUFCJFbF9pdvyP3EDxKFVUsR4JeXbMHx5vfm99h5xZBTowQsGR9hSq9wDgrq92qwxzz9pWmiHn5ArKq",
  "key29": "42ArHCQcmY9ztLrHsCiM1xjvhKi327c3rWNoVrmgYLrC2pzYshr8isfGvFxWX5qLFFMwmxvnmkWn67uYVWbhhXQi",
  "key30": "5hdkXyiuVMZt55tGts3oSN1RiLUyK1CQmVaHSbL9HwfgigtbvivvneSLSWoMu8D9Fk563Ftg1c5iKYS4iXnHU1Sk",
  "key31": "5dwG3AmNk27rhdyE3wwFqPLWUmE7w8FU823sis4j5XLmpqViUcq6inPThhN9BCo3A19Wej4XaRGGFKuTZjse2FSc",
  "key32": "5jZWkJnz1gjXeg4nYqoYQPwiP1o8JWtcogLUZo8pj5LVGa2K6DcN4tCJ8opkBnDxYeHc6Jrm7znNU8UsiPqpTjAL"
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
