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
    "5MGur5Si91ViahFC9uQtKWreeeH1bhoLtPYfAWcX4mMsvoGkETydwF15np8txFiuwbYnBC73XgbYeeMegaihaFCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKeYvbiyBnT6YfhYXf2BdrxhHHSPJyYC1Y69spN4TEghNV5VDRGQfhm8mm1LhWbKeBfrd7Ue6nji1YwFX3ERCAf",
  "key1": "4hHTPicYTm2L3cQW1uVRdUZFXxH3DccAJjb6FAFtP2vC1aYkthpJunZwW8bG1SAFm1Dd7gnr3jtri7cN1pKCEr3k",
  "key2": "4Vx9FhDX6sfinN2GzayxwmcLvoi9FsDY5mz2vR4vcSdks2ZUp2pqiWnCoABeGq4ymhNcfzmmzgS5TU6bf2q6EtxE",
  "key3": "2vai1o9dueqe1qL6T34pHVWnPx4QNtZWdTwdZXZCbWHx8xHWzCneCytnt1P5GQUm5MXHsLP7yrRpNtMva45LquMJ",
  "key4": "61nTKLcpY7ZtCW3AsgqrC3CNfQ94tdWGoQdUoXqcspnF6W9xRazbWCQDb87z5ffXYjNLuofznjt43qNe74yjsb9W",
  "key5": "33eU9zc9googheRrSZsrZwccCx1CPaH5KanVK2h2caMaPHPCn84LdssfMhZmVxBisavaTXhrKTgg2GR51D7miSEu",
  "key6": "454qjMXVLLbmLo9DH3rxshNaWjjU6wy4zd1bRh6P2AzgczoWdrhUyCH6Knc94RwdAcuTEa1Wsxa5VYgG7SHE9A7R",
  "key7": "3ZN2iw4jS4JmDH8dhvtP4w5YQJ9asfYMmENPsz7dt73yLxR2v5GALWRTxd5LFU2NV4pwHFJDKXkALawnSrZXUz5F",
  "key8": "2jygWEv5gZPgJ8dipWg4YCLSERzKd9UBowqBnVdzbduUXHnEAYSJjj7Thn1tz9NSD6HrTpBKzgcPX17P8ynaC6rp",
  "key9": "37L6SQDRRJFxARPu21KXzNLSyrzHizimRU5xsKK8JcUMHA2vE85UAMdJsSLa3ZmUqdS6AHgzBHzs47VbZqGSsM3A",
  "key10": "2uTRwBeFNMwZrwJb9X6biGcFaBAExHTbHUhz3EQuEk9ZETG4e9Y8686KYkTRy2kegz9M9ajEAKipM1Yo2KSRhdRk",
  "key11": "YmyBZ4uMUrcX98VHq3Y7U15HajLLunudp2mEcikfMU14LwVAdxCsgJZKUiUffG2vZfRkexxkoLqegNDoaLx3vM7",
  "key12": "2MfkGkxWAjzRJFn8ptMiWquDTRHMcrzGzjao5PJrX62Nf36neZKJrnZW5KuNMv59ZN9zWc2pjQo8gHhnrSybNf2S",
  "key13": "5WxcxchZ26QfBYKqswVpFEjxWiQ535Qfbc8cDhH2yq9PApPNnCDYT1hJCKs8Nr53oRr6fn5km2vTJt7eVqbWxjPo",
  "key14": "qmpCUF9WbkzXDCxucZ57fN3gZDPQbeQd3AfGUesLWF6RUKeZZqNZZ3h76vj293Ji4gMj436aeBJkZFECDYg2MKn",
  "key15": "236Rzm3j5c9UoxpStUbDAMzd2EztmDGNLCACc7pHEhFQ7WjoAiQRsynCe1SVDNwttiAxRjFkHxMQyxXhpYzab41W",
  "key16": "4XG1HfDgjKeTnwsmnaSaqv1bDvqpVwZjDUyjz8XYirTv4DBfssVdEfkEN9ZqdcydgGEPJrStJti1BSBKfmzgPD8J",
  "key17": "4vfvWbZjzfQaBkTqvV5waHeKVQjuD8cnXNuchqEs54nFMS8VVm7tYw4t3YKZjVY68kfroRu7xNYGgBCD9acMRtYF",
  "key18": "5DZqvwz1CGXFz25EawdWzTuXcrDXoAoPnhYGTUi7kXmG7ArBKsHENPD42Rd6LLzmrdkR36GGmogcSy6qt3CaCsJw",
  "key19": "5M5pGfuy1qjNBWMRbLogMbuzLVyQTh1ef2JKiNMMzYWxo3kD5543FtkGAQqBABctSoDrkcDcSvBDssDRzuV6oMjb",
  "key20": "3nhPaSSqLkz4H674idmfiZ5WE5dZisKRaZFrjfCKXs84C45DoffQzUcoVE1ApygWnPmXpVFgKyETsh1r7RjqgoQi",
  "key21": "397acntwn4h3r6GG1jbKA73JLDi5ofarG4YYB3bWhYGuwU6qWKyUhMcsQyQMPTdbSpzigJEXUxuhq8NaNCLff7my",
  "key22": "34L9v1oQkb1MbWNpoKueXFWuoCjvC7WQYqY2KZu7DboJs1EX1Z5MGdBFHao5SQDvysCvVptvom26kjCbzsMzupL4",
  "key23": "65cKLhaiBGvh5oAWVRgrneq1tBRLwVDmF4AQwVNhsfkqMU97FZwYWDAsfXym8uZNYKrndgiaiWvhpnnqTDdRqXmJ",
  "key24": "2kZoHzmubYkPAYaekVmGBPZLUg5tDKjAumjgwAseJMGtNWXk57sPnY2gDAFeHYfqZ897yHBcqsWrCDPCBhgHdysy",
  "key25": "4yHBVFzUEQ1kbRJNPFg3pE4tvW3PrqVyEeDzgpirEMu1DzFubhypDvHru1ixNJJUTjyvd2gGvSisxAxEVxWe2F6v",
  "key26": "n2gQKScJ8iavZqHeAdH3d84KnDWvLDqJCBk4rD3ofhB3fN51KREKSy2TwCgFTfPhPnRfnJXcFd6v9RvSQwZxWkw",
  "key27": "4QnwJ9xVH1UREBKAZcg6eeWJFpBj8jTJgwKGGda1m4sguBaaB3EMGMTgvEj1YuGPdrZn39NwhByQLQ9EHPF4oc39",
  "key28": "4pQNx9zUvbSueubZAeQoJt4v348H7ZmpDLqdmmmKq8Dy5KJLoZ3k7cUwqWp3nsjULSnzvCEy4qAV5newdNJbdZ43",
  "key29": "2eJZHqW6nFn2xGLRwoA7rfzVbTNFwz7Cq5xNEgmx14mDub4D1fSdUmu7CHtztJppy39J6KhmYsFKQ6YZ8kG92ru9",
  "key30": "24Mp3tVrDZuFAbNm7ELyBwejjxdFHa9tpbiTw7QkrrZjbF4eLUr7U1V8AmNrEwYLZwjVrALzFG9pPDYzqfip5qwZ",
  "key31": "VJz7h1wcxULe4AuYqidkHqYL5pMEqBSXbifUbq4d5oTbCjykFu989ggUnPyiZmTdGkUCG3vLA3jVYd7sQTcfPLR",
  "key32": "2L45iLygVNKVx8myymarrVEnv7gzvMpiQ3NAuMpYsvjPXSCyHEvu5tKEQfR2ZDQnUzDQG9TJfE5DDh4jHHRPgVk6",
  "key33": "EWSMwxh6webETWNJBGDnmmUmmjydtq4oa3QeKHRZdAimarbDNv7XagFHpN5jmwGZsHwnjRA4YvxHH54CqTDT829",
  "key34": "45TXeQXSC3SowpGRZtS46MyVe1xtW2XGGFZzySSkCLV5G3kDY4C23T5WFRWHi5THvVPAY5pCYH8ps5S5uAeVbfhf",
  "key35": "32p31CBZdNoqBAvuxs9NijNf6PS9kGxG3Hc891kKz4tv2qgHsPE9HJfq7TfvYzBokYkCV38gryi2s9K1TYtoHVBT",
  "key36": "5ixREVdAzcJA1BegSsH8oZpmNo3pgZCK7aEeR86kpyomMueqJXiqBioQf2qqGg8NLx51a4D7vzNJWvoKY4dGBQUi",
  "key37": "34ZMdgrndtL95woKtj2pTcsv6mKt4VWbrfozrFyZ9PxtDS22AE82CcmngUqi8gXZDKuvUnUYR3nYfnKANLfQGGmt",
  "key38": "4DoeYBGPYQvjqboKC86FhLcXjpTm8fs2FuJZSoQFgnsKwewLWoR4xec6qnXb4KTAyRXyJV25oncPPD4KPa3ZQ63c",
  "key39": "2CHS4F9hSX7nrhTVkgTvUqudwf71HU26HSL2ftyjnVKYfQhFs9LchrNQ9RyFS2PETwc1S4tyLG3B49bhwEvPZUUU",
  "key40": "4xv3j2f5VGkXjH9baPhbLEJe6Q7gy18p1sh1VRFJVjNdQY2f1i4KJCP8LXCwmLgb7KqCzsRg8W4YrteDUs9SAt8c",
  "key41": "2jgw8zuL45VtU2LXotq1cFvSgsiHyGRbS9TyTmQrBRygmiBeAc9VDaDCzpQrDeGFdkHL7E2naer8fpPnib1XJYvt",
  "key42": "MBddo4HYFqq6SMTSeHirRzsrX97S9Eadjr4o7piL1rgojBR2C2MDWzX4dNgUk2DERPe8mYmaQkQHTuo6WSYQd5j",
  "key43": "4GZcbg25sdoNzPnoahANfhy1XySDB56Ba1uXF27bRTiMRh5wQaxC25h1gN1Zaa1BKvigCuirRXoy9MUs22A233uJ",
  "key44": "3RRcQdXAT4PmkKt2TN4CVFriYdesgSfsWtrvo8vpt7tHWSeQVjPAqAvshfkdKJUBKY7Wusr1kUy23jjgSREk65Zd"
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
