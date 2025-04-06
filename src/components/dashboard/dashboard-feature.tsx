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
    "4PZT3bgg7vw6CBCwxsEqyZ9v31PH77Br1sRMjpM2KoEmGkAKMMWDRstysYDBBQCaKLZG2Ekn11vQGH2vfoe1amNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eT2aGsjSGc4wFg8XEWQD86qd6zG58VZoTTApZYtFJKojdRRDRvee1vL1x9Mryo74CHfGTW3kXjNhZ3m7DNfTvT2",
  "key1": "5T6mvUznPWh8u7Cs3cGiSwUJHMFdq2d75tdbyEnXVcnT7h97NBX1ULLFtazgbXC6jWRP3YFbAAtCoZW2faKPWUN6",
  "key2": "5vHRD6PgseURr5yzqw31gkgbay4Wkab7AqKzAt6HznyFzRgTfq4mRPykjXFHgVZdJZWpzaP7UdpLH3r6ZiCA1G3w",
  "key3": "2NuJE76aMhJQW2xXpywRa8rDx7G5vRDfHCXidpQtrFVWXeHYzmrcjteLcfCG3QL4t5yHmLajkduyNE5e5pXwWATK",
  "key4": "zXDVfprMQRDDjwMXeoueNk5KYGoUdfB8MqzqVLfiNu5aLsj2gwxehK4c9HhARj7eyDdREd4kKrmVqfJkvvzXwXu",
  "key5": "3ag5fFeBcXWgPbWVX3xz6jvPN9LpG2Hf52NPfEiAuVJG2C9ycGHE5qBtgby4P2YZAHPamMyBHMQB9nRnp3XSqYig",
  "key6": "2sgBejDppfAYiXgJ8Zat83DmmJW5hzDEbrbCp68wcC8KeEtKQHrZw1ep4fYzbzLvYDkHKnMfjdMCXhgWqAEMTdkS",
  "key7": "53qUasDWqgoAvfdkkH4cWGHfeAprXhxDsUZuNRSPdQZXjvatXGBnxfY4PxkVF9sxbo7AdaTKKkCXUg54mdoW9xG4",
  "key8": "4Suenevrept8d1jvFL232DvReDLxtJWHerp9BvrbhgBRgbd6Di1vmy7axuJc9MkcKG254zRM1hNTDZrtNERnzSkc",
  "key9": "5n3zAkA3VP17T69pJV6y12wwnjRrhbzthskva7B5tuLa5XqAggvTdvvxwQYVuNWyhkJkptn43utYq9GxnYmYEB1G",
  "key10": "2LEqxuFGFQuBBrZGUxcrhCxsfGFCsEgPYzc8gTEnhfydRpEpfdVypijjmRdhafARYWNf2AeQiwAnrTdKDgxcqFqL",
  "key11": "4fYDuiKsFxqA5yD3mLXT31e3ffgoEEnMQ9J3KZDpEpKpxWsGr4oFqV52HNaAQJEdwkt2RHxwUGR6csXw6F1pYrtz",
  "key12": "417dxFuXf61oLU2URM3NsZb5g5gj31eQpHjFc7AhxopvkeiVCJFGHPjXLLrRH621Jaa5wusv1ULUw2CN2HvQG3ng",
  "key13": "2mTob45PWXZBZm2Vv3Vu272waiRgJmfyJ4jikNHL51KwVFSFMmZeZ3WQDewuZqBvxpajF97AbQwrWnAUsmjyz8r7",
  "key14": "4LNu4L65hJgYh8MnGxs4LYVoaJKr1V8SgMmtMxeDwp8aE3ufaWgX7ff6XRvTnrVWMfG3KHuEo4WvLoXzu974WKfu",
  "key15": "4BVeKVjvAfamXnQAKJdrVtpCRwsSzov4VnWAz4t3WMxTrSCdefNQjhHy8Cq7n39tEtR1DBK9RGZPr9PTtofqQkJc",
  "key16": "2Ebin9FQ2iL8d6unkkNK6tbPQEQgvti7ngWZk7TLUF65eymw5CPh7KnRb6dk4yxFXYT9gUvEwNP9KaPrqiafntCi",
  "key17": "5XAtCuz9ToLFDbvZ2s9vg3FzFkHVNuxv7LSRejVxtZZ74fBmVeEfaGy85HyaLx7axocmNNm5HCQeKnm7M15bWXwb",
  "key18": "5KmEyYfnHacXSgcQew9FqVuCde5ZUsxWo2Dtyh4iq4YDUW1KXi9QRWUtYuFTx6kKqHoAC7KsiqsBK1rHfyHG3aZV",
  "key19": "6x5cGz8nKWToEvJSJ7R4gvGmGU5QF4hW95gDQiXW46X9EpG1gm7DB51N9tMQ5G8FEXSu2DKsqenKwbV49wty7oY",
  "key20": "2HBSW28YB4JWbhMhKVNcXtYNmnQGAS1eyNPQ1ULcwbNSPrGLixXay1hwiJatU2AEwudN1ixRnsfMCLbkqP6qN7kS",
  "key21": "5omGWspiFB57R9vk74HRM7qEfVMNu5Y1yt46X1sbLknRLM1S99DRW5X3qfMf97qaeBbDS2Ns491djLaBzsYKpmEe",
  "key22": "3tE7jumUMXD5JfyG5FcF3paFCRyjdXiZeA6WiPqbAkgWhCcSBZ4yKQMSCWr7Rc3oWZos9E1d5tqfzGHMy9M4Ped",
  "key23": "4wdFDqzcGAKtbJoBC83HPji8keASqUGEYDDhhcjN55srGs5Qdajq7eZm5RXWrqvqgypvBF9L7Pgj6eqivBmDxFVd",
  "key24": "52aZL62JHAB7uh9h7zigjK7TCxRDK63z5kTYa4T5bP5vU7GkTWNtNag3s4Fodf4L7XjivtwAAdv3etR5itgWFssj",
  "key25": "gMtNzU1P9tdv9CEDPG3qX6WSHArX888PstyQAkN2ACc3h7ZHvozKrtUceYxdUViumSEaN1yPN51DyUTZ6HWZnvi",
  "key26": "4yLVz6jfPjARzuV25hL65i26LHzqMMwpSPF5nxuPZi79CxjwUMm6inpVVQ72hseY3B8SjazkFWjTAbAxcoWJMtTo",
  "key27": "4NeDD9gzHDVaqJkcApuXNxmpMrwdLRapYmp1EQGcuHB3R8xhf6phdgN35AvZiEw6JCeZZ2MYx9aVJyaoG3GcBvbd",
  "key28": "3w9XnESc6Kew5a2YfroYiLaAEgLeRaKb2rvtzwf3HxKfiHMyjhbnU1o649QooyvYgUtcCkq5EizVCpkLMQM27Xba"
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
