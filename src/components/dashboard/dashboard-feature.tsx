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
    "5SjXMpDxPCXx8oLGDquK3s4N5BNjYbzHAH65ixn2cq95e5vmigySeshBoTM8op6E439hDPdkM8WM1RGDvgWukjrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKQgWrePi2b7TV4ogtu6arArzjnScCwWBjzqyYHeaDmkUEcfbkAuWBWCf533MuqsKXA3V9rJsMHm9UVD1oDiPGJ",
  "key1": "4gFgaRjqabU27Yh3zKEb8Z6SwLVcHdqLkj68JbAWGYmz7CsQpWXkh6f83FJetWeWW2yqDwf5x3C4aeyrArU6MLSp",
  "key2": "5TcBj7ibQm71NDWr5F1jjuc4kMMisLMgktrqQcK34cFpB6a7nsUd97hwZCPaNTEG83TMUtAgB7bVbXQcxggzjWMc",
  "key3": "4bdhqX4ZTMRinbMgDqRVpfLZ8w1nuvA3Bn27XZaur9x9jBS1Q5CGiFyUb8rJ5D5Tpz7WWmsvezZ541ZP2v12kqGT",
  "key4": "5wQ9K93QXo6Az9iCB3hdt2B7KQMG24XHEAT3qvrcNJnFVVfGZdDKQuyTsQ8jgRNFzgwS4QJ44RvEfdvrV3o5WPqy",
  "key5": "355nBqV7TgQP5DRmcj9ekhXZTpxo9WwKppnMCp4KqJNf4X85Vw1cuPivMRtkNwZ6oGKHKgsuv7r97JME6KWB9LP",
  "key6": "41JHj1t87j9K1ah9qDsAmssfXLbLN1vMfr93q8Dz598hD3VzvBvNx9pMUSamCxdgksvL5GJVBzYzzfTvTFt4ei9F",
  "key7": "3EYDTgSG9HVQYZhWdiazC2mSNkFoKLRdRy5wh7Q13sj2ANVQwApSRNwciGg7gthd1J9Zg8oRQjszNrvfCZUCMATM",
  "key8": "31qPXUYUCaMDB6gtk2x6WonyKjnk1mWqsbvneft7m8SJhK3vLdxDQNgxzbdiZJcmRUD1ezX7xAPwLQMhEADWHMeQ",
  "key9": "2yahJ2ojdRub34qnESmWkJtNZAFCoeaYR571wauwRVdQQMNv4m3Swft2Z83c5nR6G5V4fJLznFiptQKvtRPtKziH",
  "key10": "2NbHnxpS5hZzbxS9KuqimrvNzMNszrRMAU5eGFdSHri4NPvX7ag4359Y4VxztXZKhAYDFFF8HhFKGhaGe96QN6Y9",
  "key11": "82fHyuhPcEGZAwmJoGnfaXPAcMq74Pf6ZUXuw1qeYB6s4RuTnAE2krSmev3VANz5v6jbcvTHwgRohdKJaqpwvPc",
  "key12": "3XuD4MQPEFeVS7WExUtiE7Q1G8b3VARF7nywRbayKTt6GgKa9bDK3U7sSnu6AeAAmfwNsHFnnXXVtVL4CZ2W2VP1",
  "key13": "3LeFkkYXuEVXka5Ju3p8kqpoYdRMYV932kF2rW3bHm1ZseRMgDRmjjerMpoYVdkfrgJ7q2FV3Str1vk5eHSYKG9W",
  "key14": "2YXdsXUmPn48toDKHg8zrxoYVXoQCB2qvWgp4PibrdYzmPfZDJpJAjdJBY3CWT8esM5rZDVFU5P8MjiyjndtfZxf",
  "key15": "2iNQYhaKZJdqq97Xa5TpYb2pgsDun6c9Qpi9BPEtkCGqNrVtrMie5UVt8dZ6WiZoK6vPpBLMABaqPFB1Ls8HnG8",
  "key16": "5nE71x4zpNL2vHv76mobh2egxTW6RG7UJ4hoDKHkwPyCqbbHtrFYBV7oUy8derBNafHzZJGzpFe4nZUoVzoEPTNo",
  "key17": "25Xw7QFHj8d6MTMTpz6u8F6AGSHz7JdcqqAcX1WNzGmt3jJkh6Qhffu2sHkC2RsdTvJ2hoS9L3St7seGsqkoYSgg",
  "key18": "3jNo4b87zNawWfaANJWKuD9D9ZkG62i66ajJXLd87UcJpzDjdtUFvYXakCTz5gNL24xMypFuDRa5UtyDJQnZMcS9",
  "key19": "4EjuMKTte7Le7KhfxYLLZRXkacMrFEry1PPJRZJUnVJnzHdjBEJGaJQ2JWCy3YrT1GFgnX8VHCkFTwXwi6hx2N9D",
  "key20": "S9ubwkX1Zx3aYutRD5uB1wworkxpuT1ZwYm9xdxZ8uHx3mwsDVAg5145PCwxteG6s76VX6LdWmx8kYxoMGuqEQj",
  "key21": "3gPiL6y6W2zbeom2MD2giehQQkHDeZ6sno7Qurk5wM7tkm9tQi98eiPxMeTwNtyeCyfjGanHqoSt5f8uafJjyW6g",
  "key22": "4Y4iXe4HnRU93mFmW7MYeDRT4CEdPhjBZqxo6E4mMYDFtv8mgsHK2Mf5tH55oFW8YJCjyTB2U4JRLD1CGqZK4VtE",
  "key23": "3GtAh6Jb7HCa4UQkz5yFhYjk8sFXXMn1pqo7emqJym9U3KSJZdXg6CohEN1nuZuvkpE9okjvVF34LBS3xpqVrzms",
  "key24": "5LoaXauYBHFJFDUHpLEqMQmMWHsPsE83arv3MpPwKVe4UbfD6Y2cFB3PLqbDzq4tZMUnoLv6ULS5ekYpFpBwqgda",
  "key25": "5VK69KTBwxJU2czaBv3BkF4mJQyCVLFqY2iwNUuXBUep67sWoH2y6LrcV5encUBVEYSWnZ6U6CDYH3846LQJqVGT",
  "key26": "2CtzfF7H1Wf9NmujgXai6axMwku4NiX3hE4a8PzYb78fVmGqLWLiNJ2MrHtDsJJFhjLCsMbodYxuY7mTSDYosxxr",
  "key27": "wTsox4m4rPva1c1TCRr3uvVZoLu8J7jP9Qqa7FJMH8HSoETZbhKfmzpFmofs5v3RcDR4KLyjBN7VFQTQc1Lur2W",
  "key28": "5v6gniEGeu4Phh4Cbomcy2YGsejoKLBSADy75GMTf4weYkzdyhjwoygSu9tUdmfVtSKbGgQripsRUjNu1yNo3FiQ",
  "key29": "3f9mrsk4t28WC53ntfdsCA47Lra8zda67xJRLvY5SP8unfBwamdQnU3VuY5YzZ6aUB4cg84oTqQagsRvMLZBrMJJ",
  "key30": "5BVyob62k7oP6zdp5hG9nT7ay3bNMMwhEGtHNkM6ogsXxqS3q7DDdKbnuEDyRtuDkH4epjLQisxFeNnt4HyrYVsP",
  "key31": "3axJ7uBBrKPTT7aAZx2YhU2z8X4HLDiaCuVKaaB8LRqQiJgJxpoWfgDZcvyDVvWMn95J7z9r1ooDSgW9vKh1jN7J",
  "key32": "dJo6uiRaPpLRCwiCoBExxbvGyXmTbHBFSEkKC1WiyEtV5AXBmbaLgrXd23T3ZutioUgLsNzGZ2wBQu4JjBYFTkX",
  "key33": "4dSjEFzhf2Ez75pJ26zAB794NfZFMd3PiPnGaprFhpS7WHjEtbo6WzVKp8FSkSRipXTf16HhJ48wQdYXzwQ2jVUQ",
  "key34": "27aeR3xU7qW6gdRVMjXzv54KHHKEJaXpRJA8CP4vrv8sQLXxv2rHtMj3woVSExeXJbKjys9giDqzpt7azM8ND5aa",
  "key35": "WDSc1T2XHzEAhV8k3poh5JFCoWHfYboWJ1ugK3CGvafuMF3cbMQGFXEzbZKGdftEVDph2omQBMy9AZPmhkayCy6",
  "key36": "4H2PHzsKXDXMbtsHvkpDH4FzvPFQkF8oyWVLsG3pEo4SsKmamUpxCx3prTjTkJq2pPqzbY4jozLbVjBNSqeba27C",
  "key37": "4nJAwPk6tejXqwwmvfQhSdJUptS6w7LmRTn2V8EZR9LRTZ66uP5EVhx85AgNGGc2UFzHba56zqVLEeD179rDUt1w",
  "key38": "33SKDNv4SXgZJkWzsxaGDEfe2oV3TZZEuABFCeriKaWowYsEs9w3wLzeWy99U16Vv1LezNr1jMDht5CB2Ft8HRUL"
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
