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
    "2HYmJgMCQEbLVKCNG5uFiFfmWFgn8twHoJ7BXrf7UWvQUFQW1WaVDB3ComWykP9NYNXSLywJ69nd7omGa6biGpRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yP6WKNspWuMuPjDeSjZG4GhRsy2rcWjQHtmTfKLzttoGnCKuAcgdEomY4zXy6PN7jvxRHwhjEecen8QRTbBXRyX",
  "key1": "PK51gErRpYUQsKyBfD3aR1oT4xoeA5gKBraHmUdifCf49Mo6XRFWcs2Ka1hPqrEyDjbPQcdZHaDPSerXqhWZuBF",
  "key2": "2QZopJQApLdXoKRCr9hZeG3EEQqZ3DG7xNqrfNK5YNdf8kCc6Yuokt4Kxki1PPPrZ755WrvK4HvWVoDnTazvxLqV",
  "key3": "4DS9uN9DmXgb3zKW8vqtQ3a5dooz8kbq3f2MmCxxW6wvLTuhEPqfKSvM3yuXGrbFmVJSRoa2i5t4mvTZyk8DD374",
  "key4": "58pqqtsrhNjiXx9DCzG7D19thyj7aPfTtvGSsi1J67JMVLZG1GVuBq665d2D762RYynn8AqoxsnfjBWrdrEQ1ovt",
  "key5": "oxbpMDoTYHw67wv6CkrJDgHD8Mzi9QzHYQattaJ7jhxSku1pqSJyfUtJiuiDnnpHjT9gFMp94jkj6wL9Jrt4rJg",
  "key6": "58BKj4TnfFSXoSvGnE65aJgKKvvVmw2aucYowBAeF2XAhJijzWAF1EsFSyc2guvDRoTRvrqUxDTkPQaVt5DxkhXJ",
  "key7": "3RxgWfVakd1uYobJVkwKENXDcYXGSWKYvNX2pktaY7yDvnzk78oskjcTSzQygx3Rg4yVALZNXK1iQjGTiPrmMEqj",
  "key8": "4ZrPUdwrmVmb9qqbjgaf22TCEMXJzW8D5QUKr3xpJ22uJNAn91ajXG8L9RuiMA4pj3tduHv8YjteGLRGU5uT2j73",
  "key9": "5wERMtXxxNqH9qAKYXFaFFbuuEY3nbv3udgb92YaAtYjKdJ4Pc6feyyeDKwNwonWH1b8y26DPLh6MtZGLuKzSGBT",
  "key10": "5xph7zDGeHwU1XUvx5Agh9iwtAMh8DfDUybh2RL8VT8BQByieSoNRqQyU2wzsxUYWppt6S5XTmNYKmv9tLCVm1Cc",
  "key11": "4caShFW7ZNqqhp9pMdq2Y9Nn6JbRR7TqUWYeUtUcKcN1d73Ni24JZRatWtP9NTNEE4YqP79Q3euJUrd8y6vvSkz6",
  "key12": "c9MHSywWd8CvmsUfdws8By9w9RtsDzQS655TB5V66GxUVXD6Qj9z3AXnXLjds5Tbw4kZVzaox6W95WRZhaNAU28",
  "key13": "26Q7m8wb5XPpXvA9UuXDzhqF54BXQ5DydyxGQtUhjexvmvHeoTyqahASVzFQ6wetQrst88pkmypeApjHwP2RNCYC",
  "key14": "2Mj6AWCaM8oN9jMpLkcmVn67rU2dae4F7qotXvP6UnSD1Fcj3d6GdXJ8sQPAkdS2ngvfxphsrbcT8ras1FzNUHJP",
  "key15": "a7JGfyKgVBHvMdDM1mQb7JczcZphLDTUMGnopkzFm61SxmKJXU23LgxCJiVD63R4LahqGQEKUV5HXtoDu4AmQHq",
  "key16": "427Srg7CwcE1BUHvQz1ZcWudXvBYHUFKtpCx66Ad3k4GJFa5z9YGxd17GLKXFmmgAZHmeNh3xUBujdGoH6h7rr7N",
  "key17": "2ZhbjSPefecujbHUVkLpxn8PYpJUCi11rxP9Q7CHsHBpL2VLkmzG1BsyNhKzNuKa7awLzgLdtdi5rbQFV3qVMkL4",
  "key18": "sLff15Yik22kr6z8yf5MXUBJ6433JamqKrn4D86euCcjXv8JWCFXn3Lk1U4FXEx7DoEPgniAePYJ5wGmK4hws1n",
  "key19": "3EGctBnrsUnDiofuGVxucY4vb7ATMuV2wntU5Rf2UHhmDVkuAev8VWHQFCvzgXndFFwuyzL5trEuxMgj4AudHSqX",
  "key20": "2RfXCTrsSHhMW3pfPuNPjkDvhzzXaLF5M1LsQbpeQdtPNCKmA4pG1SMo353bzhkwZ1F7K4qYQQR1uSMHBSLjsykg",
  "key21": "EkBRXGj8NQ6CJCWNYRQ1ZWQe7rms8vRczDt4VmdBcTZrGmMKTP7Py8Lo9kaWvKvgGjfYz8hatyhbEEUvM861ZK9",
  "key22": "4gV7symFmCGxEJLUpegHn2XnRggLPMM8h1njtYC4jgC3ZngCa8rXcaSYd7RsxD4TWuhXqfvJ3a2CrZ8u1AKsudBK",
  "key23": "3cSfo2jgLsUWq8YnngwNuWW2P96LtMjNFPeD36kyBLYrMsF72DRmJctWkuYgdqV5Sy5HG8cz2WDJpfJy762kQYja",
  "key24": "YQ475kuUp7jn1BP4qU4Bo8AEjqSZg9mp5xw38ao8uXtNK6wR5ecyJhPdMU9t2YPANptUcx8WdMTYJDXK8XY2AEE",
  "key25": "2y97oMPzgD5e3j5Fq5Q2WLUqhLYTDKcvSQCAir5e3iTAztwdWBz4RmoL1sJ6A4BddetuQRUBG223ooSZj7Rmc5S1",
  "key26": "3aPqoBfsr36qSVdQMZiMquy1x6bqT1UvUBAwR13ShXCQzNBYpLd6bRpjSpvJVQcHfTz4oWqGjEns4YkJ4bwPgb38",
  "key27": "3hwC8RSUs7VbtQCajfXo1ASDww7xZmS7phNeU43HzQKtpNngvBtZFJurfJde6UwE8CTdz3r8dDjup7EucuVPS1ez",
  "key28": "RkSG8bXGiY6uq5GjbEPbBa4YaUj23x8Q3FKDUVwgQ5K5LVWqoJbkVC6U5Rwb2kxsrFNL3mLYr8ntZfLY8subE2C",
  "key29": "2H96n5C6mS7ym55nQ2nCYzUbRFu2eXkknFUiB1Bs5LqUHGFHeHfGbabjerFd5eTc2ykPmpX9nVfQK1bihR6xjNvP",
  "key30": "iBYaETxKoPUVDU3fjxVEJDAQEFxNuo9eUKuKEhqPaxwYEKjTptT2LBwhd2gpvpsW77xS7s9WDG7WnTXhufphcGf",
  "key31": "2GbkyzRkhGp3MUiByQkreW9KVMnh1Ks2ymwZt6VqrfQzwa8kw2f26LS57U3vPEymtsHokSMxVj2yGgYjVxTMAoip",
  "key32": "48N4fdnK7NNftpsgnkdUeXtqwXmARcaKogQQfEDji24v5rUoeZcHsazxGtt8hBmK4nLBSa3MSFfpLnK6JgqkQY3N",
  "key33": "BpN95NQ2GRc2BMdp2HMJ5enWGwSLRbzijZezzUDgVPkiwRM3zWFS5zMFL5HPZMxRUruTpAAhUQEc3wDpsufYKXX",
  "key34": "5Ge89gw9ru4Uexv5KfFo8ieFpGjYihHnfbPn2G7ewcXve3vzG8e9dKMBQz5kWgGFmYwmvkiqhDdLYXZj9yYSbzKg",
  "key35": "5YASR2eDzYiRiWim3yd9waQbkLroYDzLG3MCD5u8ht3Taj1dn5vRbyeVE8MtSQaMz3qEBB1FGPiNGos8uFEX2tRP",
  "key36": "4arT4QYMGkgzh9iQWNBzCDt9iViNp3aYAMYZmMMdz1UTEHfDJRFqAhf6SMJaQA7z8cNeWcJp6hmnesypBPKB77xQ",
  "key37": "8yXz6eeNp4sqrncLy4seyCBvaw7c2wTxCYTRi14gzCM4MwyVwCHmZZ4D3S57fbn5aNukT1TNDsAVmWw4UDxKWnW",
  "key38": "2q94V1KH7RazZAngiSa2w9RPfeTrVn7puKNNthcRiRkbPfa1DaGf5mUeJuXrp2aHReu8EQ1FQ2xLpAzSQiydG3WD",
  "key39": "o4VFEzDUan2QcbhWM3neakAg1wjRZS1mmsem2HismocxqvUhZPyw5ZADrcCgqgb6LhNFzdBt5cNtcPpqGg7c3AS",
  "key40": "4JqnaPSY2yVUiYz4vye9tzGz8wP2dNdJpARLxnYh2PVc72ZP2vTxyUXk2P49HJS1DF9EVaUdURagFxqwVqetvcjr",
  "key41": "5JBLcnTCJynavot3cvHV6VX9EcxjnWZZZtSyEtjPNqqRJirfEUYZyuY97dLhfTGvvVgvQ4nfZwnf1293Betqmw79",
  "key42": "3bDnYxaDbRJrQyXR6waCqNGXY69t2Ezxt9iTuF3bYFsN9e3ug45CKABcC1yj8XPc6mPhUY8hd3W6r3MyX6uamv4K",
  "key43": "42zNPxRUVyWuekpPCH7KwMKeJuR3pt6zfGSJgo7HLW17LF1GSrZy6zP7XKUVTDard6jyEwrWkCfAEeT22G5LBBpg",
  "key44": "64Rnk1nCGzwGws59S9VnQnmhmmPC6JSvK6tXzs2yxKbTgnvxPcqGW1UR6nGqGsmBwFzGC3sfEuKCjU4LjfYJHMKs",
  "key45": "2rcceHtULhtYDxNaU7LqKADAbokNXuKJa1qnHvr6yMEhcySmBSWGvWKAGp1Fn1FWaDRoCuCuFpHxtLegwBEwwRs3",
  "key46": "3KiaiUMpwW1hEmDCtfdfYZ9J94YjjQWBj9ZvsveWKdxZ4XyxpN3KRWUybc9Pw2PRytP6zw5D3WYTMXwoju5UczZv"
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
