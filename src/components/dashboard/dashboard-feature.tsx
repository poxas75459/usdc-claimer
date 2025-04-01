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
    "3wgRWiKURxJuFbjZvdFFetD97B1BqTu3iuCpHgJRET2GAg3AzX5o3ZRSe2NK19b93o3tvU6LPCnAajmLxfLvzrns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwiPVt8BJqdfugFaes1r95SCGRDFjbTiXnpJR1VZTtrQSrjhtyBC47wnkwUtxBdwMswuosYc9cUdopje15tK9tC",
  "key1": "3kW3dAhQcKiq1LWrahf9EgV7bW6D1TrE8XsTBj2Sj5oFFLXxg7nLKAzqPBkynxu3sg4Ffhto6rCeCri4A9N6gs8U",
  "key2": "5opN9vk6JwES4ffysknqQseJWEj5Scdee1oi9Yc5PZmwWUHZMAcAw2NdQhHWjsyzxBHeGy8TqUcmDrUtMxjkvvc7",
  "key3": "XWw8NwQ1E2XZH7H12RAVZC6iqtdVxzCdpCnrCQ3mQWnihfzPNZbwwEfrGA8wxLTog5sjjZgg1mpouht42R5CgML",
  "key4": "28RiWBWRs9jUj4fosf8GqTjkuq7V4wrfnsw4zdMJtZQBcqu2eh2AHjeaG6CxsL4kHyEM9d34PQAW1Snhb3TJRZyv",
  "key5": "5sB6EERNghfbGZXBSAPVMD9Umg8VsiL6UtiMwdKKQw28gE1YgHmE1pwhCvf9Eh2beossk9oQWcyUxBoy3HNy5BTn",
  "key6": "4jLPJVDU7LFBBtvzFaqj7VZwx3Skjqk9s8drgXrKsRkgcoytKxrqwYHH26GamGT5DfNE11WroAQEvK4CqNtajsJf",
  "key7": "3y2KAQkp69eZquFQj5f5BWFHDtxPneD5oK1gX1gBBeExwiUjd8DZn8GpPctqAk95aGKpmDrLHhtYBPQfk4bDPa13",
  "key8": "5BYmt3PZMQWYZF1VxZun1pGK3ha1brW2hRcAFk2dz6pF5odtLYWAW4LsbMkJFmMSYSmbDVJYLNJq3J2sQfWYLK4j",
  "key9": "eFhzwyXKjLig9P76nzPNBh3FHuJvWzXpHyGjn2DPWERUNQvTJ9CZFfV4x6cqo4QvomcfheuceBqxppbdJ1tRxuo",
  "key10": "4HfAxzELAyNCnwTAP8XcJB5vk1uP66f5MdYPkrkQNZBLZ6gi12Vz2zsXJ7ZN2SmSjuci7QpdppvLytumZLNh3Vm7",
  "key11": "3SDwETVXGSMxYrKgV6tg1uhjP9XmrogAp2VNXFtWCriUfbbw6ncK5AnKUj3gr7uh29ueXZo3EiAJqgnyjK5v2qa3",
  "key12": "qUnePCquXSLbnaosAm3YUFTxwEYAypcrXE1dTDxFkYfhLq7ZHGw3NAaAftuBgz6hdpCwQdp3ZcJfBihqV7A8LZf",
  "key13": "21bXHhPHGbuLZZ4MULMmYimgNjr3Njg7DkagsBNbZo7KdxvF4wXAfR29qQNTymKKpxiTUi5XRCc6po2Zr1ZcU6Aq",
  "key14": "57wUdt8WykQqSeyoXGheFTAiK2nRJRQUJYrdGVEHU5EDLqvdkRnGMY583QXphtPTHnFDBwfaniGByFcw6jhHWbW5",
  "key15": "2VeTWP74um6XHh762xps53qkvqPgGWeSXN2Rw4NpyZgwQ4NUt6Wp8AsX5vLCTuSxYvCFuGrg2YW1zmXPKYe1XSp7",
  "key16": "4sz5WJj2pUZ79YAsStiiNb4gdFk9ETQ1jhVTmqh98S2ZLymc6QG3AFcbAGKFiqqmGPKqKVFB8QtakATk2kLC2zQL",
  "key17": "4KncVKRkiQrcxciWnKvVTi5L7i1AkQNeKeYST4ZXB9sHm4pd99eG1Yt5qeuAspgnRdntvSMDpMZK486pPpiYgUmo",
  "key18": "3AXo87BLyGryHzAzFzBNvc3nEDNEhZN8VXEgJQgcJQxXbpBTHmTgvyxLLeMNrWJZWaWf1oonDmadZhX8qieRULQz",
  "key19": "on7d8L9rj3LgESFD5QxAAu7YCLpzPe9y4KUj7EpiaACnPhW7e8rfVErL4QtyL85w7apkq8eC41ioq7mXvp1CyZ7",
  "key20": "4VQ5gpafJuqwesHjWuLqgaBPHSKZX9YrQwJWCr7M51Vw8qfQketqaYTV4bsb4aaEj27f3CrAaked1uZb7S8V74mH",
  "key21": "3MMGkzT8JSFmrDVsrBsN19zcKuanjoC5juz54WoujR4agpV4V1xrrJz5T7jaWBMjp6ufZCgVwo4a8xt82K1pJkjW",
  "key22": "5K9cTMPgRx5ZVqgL8uKKe3JaQRWkdYoMFp7iY7uQHsbX9PnY8brYv1TScgPNp5QbYHyRG27kFTjQ2qichzrj51Wd",
  "key23": "zCaVdyNDiN5EXqWUyuw7nVKjk48btX1GZ2tvMZYE6sazW5TVMajRfV8GHcAkQbtKm1PDTjrZFugZN5dnPmyFMCc",
  "key24": "2hqkbxWnePUEsxn1iRABC3REbZZ9DkmatR1fBa6eWn1Ej4rD2yiKzaLY7n2b7r7cSLCR8CPpe5F5m7DCyNTb6eyA",
  "key25": "5XDbwQdSkRaTJfbipV6oHxrsAAtAuixVPnUdHqWeLAmjm6SzuQ3zKqfkESNTM9DQsJ8qvdAtiVw4E1FR2gMTZek1",
  "key26": "5Ju4TuKKQY3Z9HLUiddMvz7Hm8x7DPz43ZDrAMzm3VFBU1qrLE96HHJxEdpVhkJywYmXn5YNgFbXcjiB6QZEaA9g",
  "key27": "4Yh4djwT8GY3WiagqDmXZguseTAiFBNfBCXziQJE1EBhpHUsAmZRQZ6Y557GqHceXCpXchoXkmfxZABT3gcSxkUD",
  "key28": "4cA2bn6XgSwWR5D8Ta7YdreY1ekwSnXA7YnHeNmWwbuUMqnwM9xFG1hQ8y68U1gbmsbnWudmjfaUCZhRcAXT97CD",
  "key29": "4Ca4yYd72vqRLvae5pFDpWsb3BYuoSb7x4PfP3rdvkT6AWX4ffevRXfk1tiNSgijKYHEy3q4zrCBxyy5YZJfehFq",
  "key30": "21HiPVZu4P9UywPMLK1QYQ2NwgjFRd3hTZcDnpznjxXd5NRz5FQPREeNHMKtt2hhqqwd92EHTHiGD4ep7SWPVijp",
  "key31": "2xvNEmu5XfgbTT6iiZu14AeKMUN1EuziJoydzi6wAWWg4dybokQo3eHwtAeQaPFFWYhxgoGg5y8s9E7ojCbTUfP5",
  "key32": "3Ja4oybfDm2BUGqazvERahkMzWJBnf3BuuB7AsB2mgFCCHNHevZbqEKYc7Ur6z7HHecFNpLvSLYTP8AitwznRazQ",
  "key33": "2VqUDXSHzT1yfWUnmLurDVPbcQqQEXKvYSx7Lx8Vz5SqU14RGrK8WJKMYQCAbinwWKHGxKMnnhXg25PQmUjDEHjG",
  "key34": "4QRxz2xd5VcBrahW1wCHLKidPhiudvWCsoG7fbjKf6iwwHQfsthfFWPLGPzyZ6aAZ2dK1LGReZqY8WSVfwDwvWoo",
  "key35": "2Yk6ZhjusbrQV6jKEMRgU2qqRZNEhKYxcYXxGmahdv5dyQDSUntPSg3S27WtqvxCHtp3q19Ju7SfJJy3Z5kt6xPr",
  "key36": "2vyjtmvghHwAsFEo3z3giyXQ7oM7KDGkXLnu5nTdC5gPz1C89ohiLLBNHyj8G2eQW4AQHu2dApxFLqDBjBSb6nkh",
  "key37": "5E4XkbFfiDpqxQPZM1ay1fDFRyts6pTnjQ3HLpgZWsgLaa2Erw2cxupMciNaRNuDB7C4ex8k9bHfPzeAQTJtnToT",
  "key38": "3HdsnMjxymULj3BxnEcfNdUaVsSUgqvNFYznyksAPnjViugt4rVyTLytgqA7BQCChnAZZz5JrGUZmwztwTLxhUTK",
  "key39": "3ak7eTfBXu52AEWX3v1aU83cY3TGLmDy8FNbCPKEbgrg5tWn2PH9yYAaQGGsUyHJxDPhEZgFBuGjMZisX3gUM6LQ",
  "key40": "3JGrwJ6sMQGFYvcvZERiL5jK4vfKumQ3uhV1ErWTvdrWSXXDVD39xCnquup7pcUfU9RWxXgGY6uR1aXna826vxWH",
  "key41": "4V9bCB467aQPYDyC6CAsqTXKm7Hh9jFjZzAXjeP7TeTANkL7KChfqnykHj2UGDcfDtPLRNYWNts9kVGxpKyk4W8Z",
  "key42": "54BmrRUwicZiHNy1BMT2adg56VXAWwTHrjqtU74WeVomHEfcprQhdweXMWoZJAfLbhESBjgX8raa8AZwNxBUYDAN"
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
