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
    "29yeWk9FrmbN7MXc38GXyDyjTX31W4iiKSqj2eQhTNvM1F4DbQnEXDSbRfkmnXM1oeyxTjnLMGvwyXTdNBQSfG8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sftyeJK3cYfGmDYKCmFSeJi9tZcWmJK313xbEvocXzxZXV3g56Cyd9YXQbS9naxXCUK1XFmNc7Udsx3c1N5hLX",
  "key1": "2FAvbahZW5i6ur2QHzV7c8n9sfDDaDbxkaij2JvhTtDJnMVw2g8WLJqM8XNuriaLQKxDbrBmNJSByxxyQdY7o9yP",
  "key2": "3srZytK8rJJogR8oFC7aPB8rqGQxUMXASdzb9gKnVrfLsywZmg7fQ157x2DBo8QkerigCfkNvoCPDwThSJgvuf6Y",
  "key3": "CTTyrLmqDyMjGD3bdqQMinqHy1eFhR7eVmoaXkb46cq9biThUK1pesCtr7Wf6Qfd1vbtboTUm6cMWKuUbH8iUsR",
  "key4": "xYAuzc8yz1q1xsBiqmBhV4eXmeMhRGwnKdqg4RwvA7eg1zgeuPjeDyqQtp3zS8KXNq5AJRue6J4Wk2yy4Qe7XoY",
  "key5": "4d4Lq6kf29WYs4PWwyoEocALmQfDWBkBUC3ypHaZEk5L5kk1uNw7bShrjbzaWF4ZakAjMJKSCzTBkmbcoF9QZu8",
  "key6": "2jyoq7Uyy31huRSS4jGCPUaNBrjGzhWjd4nj2KtXe7kwnQbmJGbBu9uPn7ukjUJbUQ7UtZHpM7det7HPC51o3NqQ",
  "key7": "63oMgV4PCWZqnmxsNC2J3dzLvH6dTZdtaPSmKyzHrVJtnkzVusvu8i5XZ8VFunHfejPSKjNCkwfkt7wicotbq1Pn",
  "key8": "2YvzYVbyfHs1ZfWj2sF8pAqFbSdKqNfABHGJyNLj5xECRUoyjASPqR4Btf1tN5Y4pzZzAnz9qj6jLQfJd4fmfn2r",
  "key9": "5WiQvaXv9GZjH1uJ3nMeBoMS9G4WLsLkGi4CAfzJaxs8stpY6o2ZqfKQ7LzUumyXkHHcfPHT8a6PdaxPMyLuVx4k",
  "key10": "3FRqE7uoNEF9JMLNmYYLbRbnZYnkLaDcZSW5AG7xp3Hg9QPvSmfwv5DM3wLaonecZbXiHTuRSQ9g2ScDNvQfTwcY",
  "key11": "2iDab5EV3oiNNeYGwNYHRSUXPX8HsD9JfETMa9dceE8jqvFaFpqrsMDmm1sNqJVSzjnjDwuT2NNsAtLehn5SnrTb",
  "key12": "4iPgHvqH7GKToYEvnyZfBiyzRXJ3WmDf9hKh3CjqzRmgiXhpyiqqdetqCwH6XYauVz7hq6orAD4K4NPRukTkTgZ9",
  "key13": "3UfXTMP8g4iXUWVnTrCAnmTNTjRCHELG1L1BUENAEZWkx4QWpLCeFoktxTboJps6TW668qdmNzg99cw4whyN1XWQ",
  "key14": "SjgKeDhJfUCgtYxzVPGmUTPHVYEsiogcPxDX3M5Y65Gaz5ec83JohfrG7ZgeYYV2477f7ee5VECsuJzfTqn9TtS",
  "key15": "2EBBX6hWA5xwTHd5fae3uPeAVBoNsLVGEPnMLqRzBd4DUzvFcNKcdJc3xQutecVjmUpLKZDhd7FYzrsi9sjuJP3",
  "key16": "3Z4n8hSp6LNzmm774S1m1yoxKxt68wj1AGcCtMVLHiyAyf31CB2dF6o7MAYJNgVDbAeTnEytTEYAah7YCU6s8TaL",
  "key17": "3QosxBjDuG8UFyZSSPknRW6VtFXNvP7MJVBD6pSupF7Hm8TdPXZoVj1ZKjxvxomhXCu58B6dcCWtYtoHyN3eStaJ",
  "key18": "EDst8CwHvEcfv2EGArP5uBto7GXw7DeNvpEZgYvkEGGNXunL2kGH777eX5ykXK6LxmyrBawzbhbuczwGR9qt6Gr",
  "key19": "46CTFeDr3pkGHnQ5PpMfH9YvodrWE4zSsUt1zfd1kddQmCLYkcCKZnagUYuU7R4HcVjCZBasyWsZuwkKk6dCPMyh",
  "key20": "4roMYuwp6VXi5LU8YjSVjzuNnQ67k5S52iiBhpzshm5YVDtBeRHRSK4uZUn4bzeCn9eCq5NnwGCJrAg7feFUgXnP",
  "key21": "4YCPHziFXsuGnPzMapQr5fVfqSJegb1aJxpxakUdDVhAsUUfFGUX19CVGc9SAm459jgZ58iqKuy7wj7RrLqesmrh",
  "key22": "5eWYwQXXrDvt3iivo1GU3mPLNhMwPvSx5CprUNZxYWKbx7HvhjcNDyxmWkWFSwbRGxF4q3aX7wQamp7MqGf1WqQ3",
  "key23": "47hreAZMpyQUc4GnqTkQ6vs39LckvZ6mb48p7R8T8anZae2THBwE24qkemiaeip2CAJUKqFNVpTtMAaWPvBGtbT7",
  "key24": "2QMr7P69x9eBGZZfsfSvA1PssprukNgyTXPoP86esqh3dKmZermWeTGPvZK2G2kXb3pWzyCpEg1rrYgzkVGaPNDE",
  "key25": "557tJRV54XCWwey8UWqvBAa5EuUmJHYmjN8xZPKrFruwSDJ1Qo6Kq24uHRAH4AkbPQtp26mmAmnsQesopXuES48d",
  "key26": "LoAt6Pk2e5P9FCjMxkNvNVKFriz1n5MjcDywUjDQcCFLvLdHUduurx2VP3ygoFPWsp3EJKfDcyj2tzVLAVdB2wK",
  "key27": "2ah5d4vNME4bornLXngs48Q7PrqSww4vi4iVUjSTw6VWQsjfXUerHVjFyizkgoJrtKUfGCgQ5kKwWx8S1wFpUf2R",
  "key28": "5qZ6CUbM9C3ZNJvntgLv5FXZUKKStUkdepwB1YjYfpRUWrurFVhNTe6FabWn5YrppdB85rkyghKsTuJYpDK1R1Le",
  "key29": "4c6GCpx2GBzzZzX8YVtATXG9js9v6pm1H8TGccdHeZkvDP62xHbBKeyxfdxHe2rf4r5YH29iEN3RjjXRJ99JAwMy",
  "key30": "5vZsHnPXBkMoYjDqcJicjk1hY7LCsPbqz8P9AW7T6aBzuyaJW4seZFacd7UyVS6VrVbckuMSpfmUhjBf7yXunRmR"
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
