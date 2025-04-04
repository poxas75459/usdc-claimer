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
    "2bnJbK5iELXXSp7JkEUUwRa4oZRGGLePR6faFEC9UMwEhBQYgrMkdkRRHVupBSpKnAXv8BBMSuoXGzs2anBTu3fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rsTa5nS8YvwKjXK6AaSbKZziqWiCYjc6C4jUazFLsju49KwHN63p6e8JjVi6n3SMABQKZParKm5u8brV9W6emAU",
  "key1": "2U2ELJFvnPn6gNeRQsh1LSxZixn5NqZJvbRrw2wBr1gs4XiXudnVjWzHHLryuDNnCbDPC4K7aE27ejXX5GEX69j4",
  "key2": "2CjmnjMVtADfjZiP1NqBQkvbYi7asfAK9TpCVhyxCxJh9m4DnL6KtWD2mkZ9dZPEoa9LaTt1TB455uNQAbBEe9W7",
  "key3": "EPNvdJ9CQ5djNDKNkLa4BaErsKYYk3igKtzbkqvp2wKR5da1qmAuy3zL7FRq7hwoZnhcoHX3Fry4Ge6fuucE29z",
  "key4": "2QuSQEeHACm6Ucsb3FmkN4GnQxk8DHoBGTsJHxVr4W2EBEHffuy8fAQ9i7UHTRe6GXwGHikJfSNwiFvhwJG3Lm3j",
  "key5": "ZvHK8KiZY6ShxtuwRHc9jhhU2pN2c29pdYBmJxocugMqodZKKiVA27N3yZtNX3cUoHnHq9qKpLc4GMkSsn1T4rR",
  "key6": "2pWhVVp4WjH7J6TmxkTykCRBjwPYdLKmhHofoXL3p7uramGWUVwER1fE8QPyCc5Rbd7MWA8KZTNpJryv2zYaQe2P",
  "key7": "8Hq9NxkyPzm6xKCbWry4Rx63mqtFZoJEzSbndpvZ92K2Yce4WnzZ7L6hyk5pX2HGJwxrwqgox7C1BHAiALJKxgX",
  "key8": "2MRLThtPd5vz2HkcBv5rRmEvgwkd22huWCr67pF2XS8QKgTQZPcfBpEy96i949XJbRxoT5hhH9P9wsrNuRpDJkFt",
  "key9": "NWSUAt17sWcQav1EtwTwxNzLajpxHEmfNm8ayD95Lewp4t7a6NkC4A4kdcx6pW1xTkrhuuT86oz3rZBabm8YmUJ",
  "key10": "2xmtv6t3j7y2HTkooqvrJU8Qqz5RQo9Nu2pfkc6UoT4uizAskw5ZGALBr1E2eXZa3fsRWnMkHQSVaAkK3JEcgDgn",
  "key11": "2xhjHf8bT7FxhRrFWxnt6SYavvUwU8VmRe3zDSGQ3TrjL3aTNZMWzmuGyCmLScAA9ZHpZAroxc3ipfZVjZcGpn4b",
  "key12": "ZUbtL34qA6cUHxwhzNNTUgGjcomN2My3wZdK2PvAKgyqSqEgEeBDRti1ZXRteQ4QQL7beaVeGzbuX2HpsShRCja",
  "key13": "3vtTnJwmzPsEM2TEvJaZGZNU1KYSXo9yoAcECEoGnetQdP3cTRhieA9pjodvcBmUydAc5Cv3uzrH3zAYKo2b2QXC",
  "key14": "4daNnj8UdSxrcf2XFuYtTSumaxozuP9RYP85uo54j9oBy7BkcHD2cShomtApTxfYnKiSiNX7R1QEmjpBSEgE6TMY",
  "key15": "2Ae4mLb2C8SAsDLm2KfFjWS1EWJREXwQ3c9WzM6QZPNWNnkCPrpVqGp5V8rGWmwAyVXPQw4PxLVBPWqZg379qZ4",
  "key16": "22ZoeP44R4ogmVFfa353dyXZY66XdkuWFTcDygvBXDEEf6rMEB1fopjHatPt52aq9ry8BRdvM88BkvCuJRQWJWYH",
  "key17": "3d5TJ2Hw2sFsVYCG5eR7fPKwTkq35HN9G5uFsecePmeU692WgVyRYzNkrLnEvu6FgEn5zdwJcRwi4K2cKiP6QRwa",
  "key18": "47WA8iKkUd8WNoYnPfvxtk4U1KMoy12LUkpAJwpDgkegD4fzD3ZD1x5EeTpeLWiMVtKA5XEox1NUFuK6KisoM8pg",
  "key19": "oD2YstUhYbP6bHyF4bHKhNVKpDUPRjfdSQC9dvW9SYAyPujSBgpns8vVfC5o6qAHwG8DBvyF8tYLWB7UppxTWgE",
  "key20": "FrR68BvdRYz5XaLwZN9EAhTWgAvJeEsEP7eaywJ9QxH3knbgzrC35WrHUiLtA2TsTGpLWvm8j6o3KhZ3ToPimRQ",
  "key21": "2YFZ9BZ3qZHVCh3rmoXDze4NhvzE7LYcV6dA3MjC9yXc4tR8PGsrGAW6jhZic1CCNY3kLYrjehg8DqUjtzJhMN2c",
  "key22": "uFZHvN5g2v4vCUtw6u63rwU54E7Wg5GdMWWxdBXA1SyqLauBwkMGQhN7A3sv3rSzTANMXH5UuJPkXbiHKC8kaDv",
  "key23": "5UUsgfrreeFMuh5dCnsF4qyoKqZFLyYELauVRKV9EpKxpswnYyJGQjWKv4WsnTpAnvLhNbG6pvQmnYvHoeE6TPDh",
  "key24": "4em8CmbYmKXfixDh455JQNcLVmGL9XvqTVmTvt473BZ4XVu9i7Wdn4tQ6xPzeFYZTG3Mt3bGn5RUa5EvzUjP2GQo",
  "key25": "3HjkUhX3WtHhaNznHSMhkxbp7DHbDZH2FtxhkxtLQHg17gqxariXwHVeBb1FNjxg9kgdpgb7VjUJCKHj4Fui69UV",
  "key26": "2yZ6N4Dhygs6jvi7wPF94nXS41djfCiACvcpPYdxBZcme44Gj48GxNr8PQVr84vTw7JPxNi6XseB9o8PpAQD5x3v",
  "key27": "YmGk9FDZxqWbzn7fJodEYRQobJDrSP1R7S1WQgYpthrjXG3R3Gq3drxS2WE8VLHT7iYUie3JqjwAEKxf5sSbcfv",
  "key28": "3aCUS4pAHu1zpijNNY3mjvUuYSMgswREpL1VZTTDKBHqcRVerZ4UuqYDycJe4CJBPuYvpB8FfgKfEiY6HLuPnDD7",
  "key29": "2dyWQVEubrtHWu6m7a657gWBPWLKnGQ1D2rF84a1Qp5REuwgcmfLkxwxnoxtPdRw29PLnYg7vVN7VVejbZ2TdP1X",
  "key30": "3NWJSK2W6EhPzLMnVxeqN1TDYCcV2KY3D6X3zf7tHkfMrQyKS6rmN6EDjbW7CCQEEKPKnCd8u2GcDa1cfQZhRMhE",
  "key31": "6f973HFDE3mtgNwZmKBSRoL8WjKBD8ZJ6iku3n4xrmJseuneYk2tHAj5oksdQf38xwfD3y3LWjyxWhmB2gsoMAQ",
  "key32": "4ivEhxLvLJGxJ7NZqsPRW37ZsUG6mLzJSxEseCH85fsT7cXkiANuwqu12x7kkFpfmpnKvvXrFe2NwKrag5TLxP1B",
  "key33": "2WwU3vkNTqL3HNY2kcJjz3jFLCrukzoUx7zsxuaRouR5iU1571W6tSt3Hfby3ivHCoEdzXMpTX42U4miTs3i75MX",
  "key34": "596ncGosvnyoBd5rzrWQ7vQBPEz8jmKETVndTeDfrngRAjVh5Gvihiu64nDweZoa99V7LwoCjX7yp4JDUxGoGfhh",
  "key35": "hgYfM9fwto651Eh1xuRRfbfvGUrzo6VDLPwNzqr23YTPt4Tu1Pvh8orogzk7MgJuNSiRjMZPeNnocno6Xct2EHn"
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
