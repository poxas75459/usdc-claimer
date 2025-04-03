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
    "3JTmoWhnD8YX77gxXTnXET5DUddDifvwjRBGNwGTv22VY5H8gL3QhezuQRCBSR5iPWijGR59ZKR4PU4136N7hkY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NzLr5DAu3oEdZeqQLpHFCLY55X7V7Z2Z6VjCw4HNEfz7SEwCKpHBPMYTShAwcBjgDwEp9VzUxGpeNXHQPTsTKz",
  "key1": "wbjbfUpeXGQF6Vy6YBtEjGW5PppMRpzLqHyP7rTCjHXcKWPUZEttc4nakVWUs1cKyjz3WYrru7FxrJCgcnLu3rv",
  "key2": "2jDYy7AgrwDLaubuCvx2QmhsKAsdwJhZ7r4951YeZFagM9rMTchVvFLy9uwCPbKEzsHhkS9p6ykTMqCnrNi4bi8K",
  "key3": "2zmXxWEJQcYvgjkxovaamAGKwG2RrPDvkbSDWyeT6CkF3fJdht3RxTpd6rxAXQFqKgyyHDMrfKWFoZ9oxmkavpb2",
  "key4": "26FrdEP6K93ND6xHQejvt9UduQvN9UXeH7EMVnzaZeKw4XANCJTUuLP2BLzjUo7LxZTu5AUNMcqd3CHEMMzNatZU",
  "key5": "5rDpuKT9hTzcT3ZQtqF6swkKL24aiqk5qTxFCmVe2n1bS8xdUJvm2BtVaqMcn3ciH2tjRbRbFsG4jin939D9NMmj",
  "key6": "36hiRT5L8aRL5oy4Ds9swn6Eco1houX1z5eD9EvpgVFWwwqcqdQ4NjM3VGudZAUreae2v5WgFJ83csZLKrTxRr7A",
  "key7": "5Uhs2zacAznb5Lxapb9SSU6C87gVrkxjBu6RDoaQVERarvYNVW7WXrJ7QPHtoLYnQzqZS5SaZAVH5q5H41saWe8s",
  "key8": "5zgwHyyw7rwRCvt7X8LT7ZiF7LDvhfzQwFuPGSC3HFGUV7szBXRJmykfZnsES6wmoz9PqtGxqCKzHgoz2zm6EzVE",
  "key9": "5jKFYyNQCEAX3iYEXhgJn5swxQPQRbUSK3dZbWAdXfuZKZM9AisDtPpRqTv9MF8bbJUasto7Mjj4k8EfcJX57FMv",
  "key10": "3bMgVMco7VkzcMq8uododXocYx9MaE5brtdj5QMesHubMkJfBCu5M3VKBDWdHUuMZ6m8os1JeSnCAsxB1fdNX8U",
  "key11": "pVoymi3JgX9TC9RHvDBjn9FUPdokxcXSVcUFksqrw193uBzz4kZgfY2eJxjGqyyHMCwnGWDmvLqZFjoeG2tWtAh",
  "key12": "D3zyR56vt5CdhrqPXM51vqGQ8e1rNUbfSAunWYj97D8RPdqv9yNyjNxekDAxfVpmr4sYDWVNx2FppvmKEGMnP4M",
  "key13": "3sPpTvw8BGQ4i8ej2ALxsbyFYPWksDs3tfPW6XUjPexgzutQb4hN3bCjLtgGPsc7pUt4QemMfq2cf6MFYW9t7q9R",
  "key14": "CzKTNQ3mTge22WiNLkMry9iohNiVmtHVkEDE61rafNksGZ6EUBcdx7dvsjRqRWyNz7nrJ4RAwHXCFYaaRUZhwE5",
  "key15": "4zUCQL62RLuzbrkE32HSeCjuwVb9bWetQ2vpyXZv8q14pcUwQodrsCynfxcGkZAmExvAzok82BULvQFDrt2A5AQo",
  "key16": "64RPfGtaEiM5RUnwhzK2pazEXTcBcMFukaKfuX5fbHygMVgsML6g8EirjSnWbpWJ1KWnf34efFdrpAKmeHZiJgxo",
  "key17": "3SMTJQ4XskWraxMippbzuDgwD5oupxkVJWiyFvonXrzR7x2pjasJiNEhFr6oa2eYo9zQk4KF8fejnYKhSFHRbDKC",
  "key18": "3issnZdRnhGebcRkPJioud9U2CyMR6qxCcEQ9GbjGBA9c1ABDDLAiwxhK2xJw64ywtNVuLpzTkiZCryinqUkk4U2",
  "key19": "4i2BKV4yXm4CmzkkvWw8fWgHJPHxoV1mAFm22oFPTVfz38yCWmbEe1spPTtcjA6J9sVNhkFq14oq7jpjFEMZx687",
  "key20": "2zQtQNTEkZqdyL1c8218i1CnB2zNJKiQqEXm94PgP9DoQjYLVAP6w5DQArGz5ztXHyb9LRnb94hmimCBXnp1tqVd",
  "key21": "4QjWDg32ZxrD2WhfXP16q28e1Bv6kV8j91u4YTFcnMJuduKWTXLYPPzZkJdus2U1w6ZsTr4TR5tbpD8WLpMcxww",
  "key22": "4wdhyF9m5M7X33xyGo1huALY6MjsnZe54Yh5P37S1rbfX3VuNVpgukv41d1YXBz52YjiqimnsPFFaJy3WchC3Sr9",
  "key23": "5Ya1imEbeH3YDyTGkzizxReu3q32UJj6NaBbT3B6grRjm9hT7gzV7EpY1Nvt2pwnUBrJ9KTESU9wFj9MVdAQETPC",
  "key24": "5z1H5xyPnz9qB3tb5xoahi3NHojgfkcf7cDY5QJVC64FNYwQbkXuqUABSBJYjVwcDsU9Tush1KXkg25oRzoLfavi"
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
