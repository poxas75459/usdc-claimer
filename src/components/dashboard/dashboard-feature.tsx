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
    "5DxmTcyWU9N3HSSXHJukArtN6Ys1bqzwkVmsUdxVV9oWLP2jw7G5VX82AiJonPaeg5d29SYz6mQ26trVM6JTEz2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYJuJ8zqyernomsD2exKL2zjWK7mfNxekp67HwyNkhAvBPrJa2Vw7GHb5GGC3darjgCUjrRYUpD4HAe6aMoJ7Hx",
  "key1": "2PXsq3UvJ2JFXirU6EQW3QCrXcuEwXHy7SpSZGqx4A2rCpM9kbaMT13Zi2UzbhtCm65u2KBWaPxFcVRw7r8K6KjL",
  "key2": "2hhzB7cEmrduzAQQmT22tvDMNRo9K4TbyKFLtWvuJLTkcgkBWfd5APgRW4BrvxT3uyCDhCiAXAxBDqbVntbSFuiv",
  "key3": "2UBMb1kjw9ngFqLj6ZfhVGecMdrznrk1GxcmXRRucBGEmTRi5s53cWkHRJmHYkbYxcNrTS4MUXWatwrtepQmu1Q2",
  "key4": "53QyZfmniqgJEfQqK4Xhzmf3EBeL4PubTuTHRE4oYFJckwcDs9B9hkWBo95EZyM8WRHSPY7vphXNxJxJ3Uyegmv9",
  "key5": "nWDcmmie5Cs5jc5esAbqZRcLJmWGQ4QinXaRcskojcW8nXuyXrkbRGXTeQGPLzgx4fGzsZNWZ1jwbHicmt1SZJR",
  "key6": "48T1BtZiDhv4eNPAasvdV7KAW913QS7aCtqDxZMehGgUxWxRdPuJcMymevNwKFd5fMxRz8Mt9TYFSrSeLANCmMXm",
  "key7": "66AFBt61VNeEEo1vNfY54dT2989XCH3eWDqFgkKdaKUvZAiLBAtJ2DSpWVsoYj2SojYB3htK5wi9CoFUMPGGTmJN",
  "key8": "2WHEn4GwhbfJnyqCBeYJScNC2Z6Muaioi1hBsefa6ePdz3vZmvP3ZXqFhvjrMxDMMFpMheCYJsfFU3LYvHpXZxWy",
  "key9": "3JiySGmc6qzqUTeuT16smK5bD3RNHYYJEKUFnqpSATrcUvV6rQAJ4oDznbaZL7haEb52EfLmd27AWbHQMRzHVsuY",
  "key10": "5YeapRF9xhj66nWNu7wJtrQdqBNsrspNCtmUAd1vvmCZ5qX3AZitKYEdEatV4PGEpAH7Aeqf6bBaEeadqNAMsA1T",
  "key11": "3NRWA61LDo7L58Ga67nPGgZrD4cfS87ZivFfDiKUYN9JPLA5dCiJPfhvV7H46zmFK73Q9H7bzgLtTS4PbbWXMbhJ",
  "key12": "3UB4uuqjv2xBCv6V8baPN1eh9hbySDsZmhdio5cd2Fb2C2gx4Wk9bGKhk8UgRS4HP5RPe3yU22bDMBc6q8biEDcU",
  "key13": "4yP6UDNu8sznQPQ56KgKz89YXQQqERLTAozCkC5oj2hymQQnj5YhR9D9wSQUuj6vL3Sb4nz2sbV2DCueToDko8ik",
  "key14": "4d25545UwY6uNcEKvnuR9DdsrGm4ALYjv1eFxX7rmsfAsVTZSGhnMrHvLNowH6yxhCHLmVNsP6CsMKxkTTyMY2hJ",
  "key15": "aWLrvLM1TfENNoFfQaibXFsn4YsJWFeyLnfbcNVmCASX19Ji6LJCkTho58BktzvNyAepsiZYjNhJLND8PfuyKxq",
  "key16": "4fod3Uf3ffzJAPdRAscN8jZCBDjj7PjbQYkMUG8Da2AEmT4X3StNEfjHj3uBdRCyZYju6MfnrqhLZLd19aXiNMsb",
  "key17": "5T87M2xYn2Udm2zKsq9NYmqSisN235aXppq3yqfGtjd4Zapd7yeLwaQ9doLhQqEbEeCYZy9WwFuzSP1e98CdhsKs",
  "key18": "22MkJnd5qwYoBVtPBQ4kuaYPiQjRdmr6ZdAxzLgnNp3afzzi6NDU7nT3LVrDMe92DYeurD8eYh3TsxGPsKLDYWzP",
  "key19": "f2CXYrzMeVK7CUjFu5fHG5X39XjsZFzwBPwb85eCzijC35CV7j9rAfkBHFWvMHQdrwS6yhJ4AUDoHCCyMJ9cq6H",
  "key20": "qHQR2GUtVaXwefLbYGeYQLP9ca9NNHm7LAGNPLLmKcZELKTRQ5PnatKuToEdo2dssUBYP9ghYmDoGNmSFiqxcqS",
  "key21": "5TWGzn7MX4cDtSaBoYehpuemejS53WQdLV9gsS7Ty3tYhfLjyVxBPgqwRKyPGCpfuyDhEGUQp4QXzHChfN1nMGrZ",
  "key22": "5khu44QoAGxquhtyAmrRgQzr7sorFjVrXpsf6oHiAVXyGjMKxg7Rq9WApjpzocBavUJQug9fiPySaMKCvaqBrfrk",
  "key23": "j2RcsJaEoi6X5a2oBsRTbNqwqx1ierwXf6W2FZpUihHqEd3JV9eN3hCLhgMWRyXPqweSGLWQHzvPkPwMRjmdTMv",
  "key24": "4VTd26pmCD4RJjsQERsZZ28TR9yoCoB1bEJwRmB447Qqy4NqSFbrCcQ5fbDbN4C4vngyKPFx3jKHGEwB3PZ4xgrr",
  "key25": "23P8RppGuq7FVzvWuBdWofaWusrhZeXDUHPLnMtcYd7kNXhUCWLvdxDR9TTmujSWZ8YusHFFdiwCmficPX63US3A",
  "key26": "5P4EtYFJMVHsvvtfCvXBoyUhEMECs7qTiX9ncpVhGsZGBmBWCrmk22DjRgTb3hQxqaGtHdKFZhgocCj52ePJQPw1",
  "key27": "4mrRGpRqsbLbbnTG384WpxUAQnMepJz2iHi49991q323qbb6GohFTDEPiKB45JCVU7gJ4FaLTDTrcLKk1AmReeeu",
  "key28": "vyRfGSGSLhqU7knxExVLvCfAkwUY55fqm6Ku6wNtj34196ELkpxPTFCcx8BzwrRJFtBkLS1fwydvgKLqsL4FfoC",
  "key29": "2vQ4C4WB3RBKL1f6FTrbyJxZKbkZ3RM4qg1bWnPgYt3ssFks2qfreaJz2rAqGPX3pkx7wG8qBaw8vv8X683VQFA7",
  "key30": "sD4qJrjR7UQpRpKSrKqavm3aX25zwoGs9jpLmZqFbfuDcfYSZ7eXXG8aXFcskszHYwy3UcCpBNTLnyvkw3fGHhg",
  "key31": "3pBQ5zJjCCjYRMc6MLRAJHXRmCdXGu35MzEYnkcoyN9YEjvnZfU7NyRMg5rSDukbqWt4dA6N4y5EzR2MXyFoFLRw",
  "key32": "4H6xzadEzCTfWscU95CYobvvD35nPGLTaZ1K8AHDFAUhhHxcF7HXWuQpgvkGWkjKbwX5xQ8Pc6cDg1xWgSaUCJEV",
  "key33": "QazrjiBuqhxvtHjFiScJycoiQVWVBFo67QQwoYmbat99Tpjbe4ELS21sMWMtxtTrc31F7FUrpcJQpum2m7T8wzm",
  "key34": "672pZzeLjwoTibvtLuxfgPVK5YCcjupYHU8gomqbCRHXzvMJPPjtWPujyZp2JkV9cT3qgUkkLJ4cz5A7Z3WtdqUM",
  "key35": "24RhGB23E3GxRpqymSsQ1VDb2uhbXuieMwmBJB6C2U77fYSUhaSetXA7iu5op24PyhqP7e1iADE16Wm8SwZcUBg3",
  "key36": "2EPc4Hd6zEc43cUiy491ponfJe57tbTkw1uGvMYTWcDop85spwkw5oXGzS9nJG76cxaJCB6Yfg9Do6x912NN9uwB",
  "key37": "2u2j5RCvRCEwK1zqLLF8q9A4VepYGhDEYisuxFkGhLJd7odAZRupVs9f7XNMDUF5km3J2qXuqvyfYnv26ndRgKsU",
  "key38": "4YUdu5XZRx648ngscTC1nCXFA8eVDrAreXHWLxPgG1dLt21x6Tfo5e28U3AcnjiTnTpVniBHN1TnJ5v7CmYAHUYh"
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
