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
    "5UswPrqWrbYZu1tXgSiC7ShZ5tAJYwcLL31HJLXU4z56nAMu16DAcs9FC3KLQSd2eXvfkNjsYXuLy5KFBTGkEoum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y1D1Xb5umzjERjajzBCWSuSESRq1zVjv1tM2eSApKJx5cTHR7c8bX3YwsUfrW3KvWfdhib8ujSeLjB7KdySXvXV",
  "key1": "291wtZShYoHyNozyNGUdCWHXLFcZbfqPZ35zbxvQCpfUqDm2WwJb6zqkDo9pzumd1XSBv7Lha2EYLhfiB23qnUHQ",
  "key2": "ZMrgjuj8o5DETkKQrYdQSr7mSBZFkbUHYdQyH56cePH2qNRaRbfUcjkG2FJ6dmbqeD4jR9PrDUQUUSAagQotm1i",
  "key3": "2debPSzX2cCLduuhNHh43wRUYLzp994JvjSuK4Xi1NNdbQHC2jMNTcH8qUwgGEszNtrgKxREV7T7aa9qStfwQpuo",
  "key4": "4gUg3bd23GBE7CjeKsqQwKTnRKKMYUnCMYtgfjysj11KZGz4219UrRMaQg1Bpei6cuDLJtTgfaR36UQVnQ6FPcfM",
  "key5": "2owQocxFk5XZMhFYdg1jrwuQqDiiLABhm3JLgvumQLDgoUNSdR8ae7VNtuvWABSbVvsEUdi25eA3ENhxmh1cRosS",
  "key6": "5bJz9MrBbzour3B6ymq6cmTkby5S8fbfAsqS3A3UiEiEigfr5KUii6dAtXk1Fa4XzLU8PSv9JeRgx5bLEtha83Cp",
  "key7": "4XfcNous6cuiGgXRi27jij5L33roSSQKgwVJ4AXevgift9DgwFYjqzisqMVSBAgxRxRi2JPw2eCg3YAy5AiAV48e",
  "key8": "48Ujskmz5kEVQ6mXR76XNKVd8zV1Z3BLp1NMnTD9qeLhkKXzDxBdHqDKL5XFRuikCUJhpFkgB6rxxPy2h1quUi1F",
  "key9": "67pkrm4mgWvCki9r8J86nEZXJbn8SNyat36JEHuenRJNEzFzVK8gZtmou7KPBcKCu3F2cekejd65d7DibhNeLavV",
  "key10": "66GTsVZqVk8nBzLEN3J6wWLcVvwnzmeutgsiNoF68eWcmB1XuCK3kZ7aGvAkjMvAoycWmRK8sHCSq6w8fftkxBGp",
  "key11": "5WK5WmCbMsaQYNYxfBEHGy4afNAErTYuNkDDUyumC7EpgMUi3n5qfEj7XGNzj2RR6yQkArFahoHjF2RPr75XJNbo",
  "key12": "3nNJNqg23Yz9oYKiS36svUveveXAYq8F5fVZMmEJg1bt3rD8QQPFQRF2hcbfCdor2p397fA8BrnGXZdZpL4TojXJ",
  "key13": "5pDDwi4c8su4Gijyn8aFNrtckDfrvfZPSUvHuRqszKcVNF4LtNXCfWMcnBYScZ71JD28JvHyof79DgfzccjzAyhS",
  "key14": "22LEmufK7WZfkfodDw1PkEbz6uVY9gtbLuejCsXuEpW3Bo1yMrViMReu4ceGsSX2Vc7TXpywqDWonFjGGX8zda9w",
  "key15": "65MmELTRMtwF16keKhysU3MY5VMpM2tUnAm4sawtNYb2A84LYGwJiD1W79iVFDY5Rc2s2rkKtdA4uGPoetxMEUW9",
  "key16": "4HQntgatvARQLffHfKAY3cPt1ipg6yEPBJWT5zai1t9xjREsXudehYFNmDFcZFE9z94BDQHp7XGhhguhaJ8wasS1",
  "key17": "JeQfGTzWPrdvQ915a2diWGquNAfjhkPMJpSF1zjPKxKCfT9jncE1zqguZLkGvg2jTyYNjB291sYQXDP2aze5wnf",
  "key18": "2pGc9CpiFZCdHwfbuK8srdqawiNCag7G3MF6Fk2ZL5fsVxsTFx5cKGK3wdqdD95wRmmjzGgb1oL8MLw3GNuJFR3E",
  "key19": "YyYTXJkRrnTJUxGHzmGR1V1DNqgn8SMXjNjW55mTkZ9gmWvHg7y4YiUVrSpXR9fw1VqjMN3WHBzDoyJ1kjBFJ6M",
  "key20": "3SZsMhkm8oJLJQy9kts9U5eQeHUcFRhQsRx8CWBbDMrMt5mzK7tgeJTRHXcCcMt1dBHSkpitMDyEM7fPGtTVAwxa",
  "key21": "2djyDNzPpDRA5BqENWC6RAbZBiLqYG7XTsktXdbG6cZFD56Ue4W5aBKkH4FeExqhdC4htNbWv3ZAyggvNZBQ9XwV",
  "key22": "3You2WeJFCoHQUpSFbBXywprTDd7Fon3Sm5hgpP7UptyiQ1g7z2C63Zy27pbEoCkKf75ZXwcTBmiNamB7g6g8dWe",
  "key23": "3N1wTm6ULpwRAu8q8eXLsFUnV9io69jFvKHm25WACRVgUXVu5NnBf4cy9Ka1xAKpTuHTL9c2icjmDyh5wgDTjMJm",
  "key24": "3QfGHzMSxW9VBiuLSZbuVAnV1dbLmhg7NCafHC2MZgfH1yW5zG6A8b59FYjodqA7oJx1gJniupGMPVXW6cbKNCbi",
  "key25": "29zEQqHtwYRp6Xfi3j5RQn4oJFyKz4KoFV7h75QZKxXnz77ir8vurixH2Xq9kCSqckagiRM1oGDGemVJbMBpzAVn",
  "key26": "4QbSvgxSXRVqbnuhsFNYr6xuXnMYWUcZfWxtDWZADVXjwcKv5wkPjdck9VgkZeq3n5cfwka4U6DPxrnwNN5cNeop",
  "key27": "2dfW5fyQCUakeowSKw4AsgkxWKZUcj4QK6Pef4EWHw5gyPrXy7X5zd54birQ7ufGCt3ttCnhqN8cFijcAhGigxE",
  "key28": "67jCuvBck2XEL4ueMymoNc2qnWNKZ49BkJu3G3ctyYeVUrR3NLPCm6Pcd2zrksRfCsfd2bZCQ9iD1uSGGKMV1azx",
  "key29": "4oTFpCpiRXrdSTTc9dMJWFoA9QNszdps9ijwAzuwyRWSKju7c7H5w8UURxu14FmaV7YddyYgGJojdB7dwyerWtuD",
  "key30": "3wdUV186afTz55kMhPG8KhmhC5xWgdmGDhJarBqqNZcUoPw91nZehReKBmCmT7eByV7V1BVTPkBRznq7b6efCAin",
  "key31": "2aaC366uTUWJdzAnB152NAmMfVkw7tPTssFVimArFG1ELRf8bhyKmzp9UqCqhhQc3g9ykjnPJdddnfkecdL6KAoS",
  "key32": "5sXewG7n39XRTXTy54oSG79t9NaxSgA2R8mUE5E7ysyr5UNa7YpcHFcze7V5BZKRTjTSUE7AqoPgJE1nZjG3157n",
  "key33": "5iCaVtRsMC8SpgKpcD2Mxjzubz5gdaeryd2jSAcTwY185xdE3i8Lzx24UdtaBRDVZaMG9DULkwx2uvttLt4GtWbt",
  "key34": "36zzyYk4iXvdWmHiCMj7fLukYwvMumWB72TdwHpspusvHoQiH9PNwU7rQcWd4a8cTFgouQZRfXpfyzyeTrfRePY7",
  "key35": "4yddY4SsPK3XfDkfwex5zuJ9fDuMExCPuEXCKsv4QNsb5ZnxU5nJaUwWTTCxpTzqFt2yw38HxXopvfdso62vVZNM",
  "key36": "5bo4toVUwXt5XETQsbJ1vEfvcWRzLXHhooSQbNcS3haWL1sfkT4t3AUT4p6CdCC7bGkwbsARWhjdWq8LKZjdQ7gJ"
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
