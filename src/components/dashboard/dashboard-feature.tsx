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
    "A7s9fUbqrtGoM89q7JQ7robQuUdiLRvJ3CUGK8xUG2mvxzxLXdzm7SDnnVk2BGhbujzCidaBwSPa85tFczbqjQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwQFaVDHpDUojcU71BEVig6LcK2LHPLxtvmiqpTXQSTLAzaVAgNDWmHxU5DnVydrpExtTiyrKHpKhxYVAdhay6j",
  "key1": "3CRnXPe4rTa7u3jcLgtaAaJwVutn4QWaiSsDa6k9vHMLo2QgYaAT13bvckcLqs2gAs764McjFDQnRooA3H4oLFQS",
  "key2": "3Sd8tYx7AGf6RFp5uVLJpZqNLFLMWgBLWrB71YkEHzBqHUnFv2ZnaxjA8BCCcgWr6Z4bBx4R4YRAA6FZD7SHxM2u",
  "key3": "44UNmzpuMDvZzvRDgMHy7zPpuKh7CBsguFrCq6igjwPcmYbTxA2gcedSafErfcnkCXpvjSjvD9CbT9qL4EKq2QWm",
  "key4": "WVLfo4HzBXrs35HoQT52HXG11LGNZNYWigQswEFxWLuK4awJYr9VM19ka6FnxUtQJcQJfnGQzT3pfkiw6aRFfa9",
  "key5": "4VteXUmY57PFbDJaAKYzieh3g5GAyffPa8BG9ee54o2B7MCnh29rViBDEAmZrHKwfFFc4T6Nz54W3N7XNWxtXXa6",
  "key6": "4C2ULEiYgkMJwEWN78DJ5eK9TQsqhkt5Tmi3kG4wkf6GdKgJ5URf4LivG4Voow9XqamZtXHmYbyYq59E9MJoL6Km",
  "key7": "41corhWssJhTMCjZt3DtrvtLQK83ZqPFLEb5bxm6grdpC6TYjLiJSsSF6aTNPvJXbgoT38LHK3ASrAwhjLv4uQn1",
  "key8": "53sbzHsTNZAp4xKdZCTJGShVwQS4eDZY9wXTq5NRmEHKroHYx57twHKdRmJxtacGSFzi4CDM9YM8itxM68ywizho",
  "key9": "4JQvCZHYeo4hB94Eio4Cm8bRZJj7egf9BQH3rACvmXZ92CwX27w2WHoGgzzVYQYuFAiwrRCfQ8CRXftZzjaY9QUf",
  "key10": "8tCaidrgG5ycK9trCBjYbEaZQ3JouUSqCYmgempfnjXYgE3VK5oCGAwfibcXy4dvc2dwtdVFJxdRECfQvACWynn",
  "key11": "36d56BrxfFfRAQkrcuk6SzMEwh9a7F8n9ChL11qKvmbbwkc366wCpe4NXJfDTZyJjgmN9JoWW49MbmhT1ppypViQ",
  "key12": "ND8xkYa2E3eJLrt7euD4b6Z8LAi4ChggAh9ZJiDnVnA3xHW5QuryHWw3y2dVRZ9NZaSTRNCe7VQAHFPXeMYsaTC",
  "key13": "5cAx33XEUfBRm2FVA5dBaVsHVzXNWsahHeWvjXd5cUnWekaB3xtycXaDXWbsoCW779brdyoQZeSLPK7U6CL9MCHf",
  "key14": "4mCGZu2HgtUpXc5abxuELVRgpwMtjC9yMz8yUPP7yM7oXjnsC4xCcBWEE7j9WPtKhGTY1Je9WJQpVXuWdGi9JKiU",
  "key15": "iikAptRrKNdSqH3G8VzcU1RmHebDGTGGBsGUDnJsAWc2Kvvbj5CxxWmez1vtCXg5EQ1Dc2foip8wf1QzFdrqoS6",
  "key16": "4MEPeBNLiCnGTwb3gsqcMV6UUcsdzbtaDJS1hHoUYGhVpCtFbiobtiVZikXToHnXuAcVTKgxSpaNRpWDAvB7pSq6",
  "key17": "3VCvgfLQ454UFP6pnVYN8kPqccmei94Wp2fgnj1wNtqwGYjLPC2PmURjp46Qz9w2hRgUro48dE2ztT6msgPcB8Qx",
  "key18": "4H9mLJarNzD2wREaKY8yTKUQS4kNR4NcVNmwwdZcbuQFJ2NvmYs5XYQJfmsVy924Ped4B6889LcF99yYpgrLikC6",
  "key19": "2vxczvb8akbUxjW2qThJHMHifjYG4faPLFkSLEg1muL5ddq5mNbaLToxiZYZLhtwgAH1ctmqbJpXVnFub6Wgydvu",
  "key20": "26fXdKxrYqER5HavBocvUZeW4Rn8Uu4qD9pxTG7KrUQcc9ba9LLGCttCHUGpTqmmac3W1hJB5hYgmi2zGZVA3XHy",
  "key21": "2jMnzdpMbwTV7rYPCxwuMjHATPqUJqWEGAk9Yc7VRmZnyVoAnh79befTfb8EgbPRLc7W8bi7scFULfiBctr8zjB",
  "key22": "vaRjbQZDHptf6zT2aZSxwZ714dUXk5PZYtZBcbPy9kSXhtGPMGZTUGD1DCrzncvbvtCk4gzNoy5WdwhjkYKWDJG",
  "key23": "p7QCy2XMKMX64sa9xoVt7Uv9bjcg25xkR1UCgY9W3RL42p9i9LBGG91rdM7i8kjW8dmHDGU7aSy7A78SH3ijc8J",
  "key24": "oUSpaoXT1sJwQhAgJxWshVV3zrGBzkbrpzJF55JvcPvT6Siq7WNWHCxNGGEfw6ugTqYF9osUN4nRVuRWayrwrTU",
  "key25": "2HqZT9UU79diGCVjUMZnnKF3tGAfxrov5W6KLoVgyeJYKiyP7Q975ktP2xo4gNDHrifaubP8BUEYGyz654CdLGHv",
  "key26": "5XhPg9bfaFZqtPURiGXyc4V4uKbh6qv1cVTrLFUKhv1PFEFNnrG3GpzhyLDHGqTgcShvD5GfnFMva5VyTor4ExiS",
  "key27": "5F3iFn1PA5zdkRVyZkcHuw75Ubt8r8TyEAvFvqGyyUU9SCNGwQSDmP92hD1LFmnLMR6zqnPEDkVxngRV4TYQzQvD",
  "key28": "3mpyuoNpEfqZC7onfWS5cFsZLkMKFsEn8GJaUzWYZk5tyWsPhYYxbVGQAeSBbnn2fScxj21eYrKP4ZoDaJr4mV8t",
  "key29": "2xmYRqpUppkXVWZu6ALTYUueHwP6AVXrG2h8ZZoj5QoNxnydipCpeSVZULetcLGLJHyr9gcgdjDfkjbSDJwCJX7P",
  "key30": "3ewibqBsdYaAY3Be3fgyNC7QSpwogByjNWSfJeNjCaXSwASgZKMbNgoqGv8jyBguqXZsaNBU5V66fpT9WiTF5qVq",
  "key31": "Jaf4cvvriFpQ1gcayTLNBSpJkULP2AhJifta3fThH9n7mf7yGhC56ftRk1CJDpDCsfJUZh25NytiPVCjVxNunKP",
  "key32": "5Vek5L3LTnGUixHCYdJjiKx4bQTwDAPNFKgSjmJTLMDq6UVfmnSrfsmguQNfGnWBKWtmEqn3mJvBBggqQwGvrGVq",
  "key33": "2QRBDxy8wRiSZUr97KexGucRz61xui7XmwFVpwdPzG6WWJxxcbXZAFaKWtzZPqVHKbW2RjvYkLDDtysuBqiAv3vg",
  "key34": "2ASSMu5zY6VQfhWfz4Aoe53SYN9A5tTJHpp6ZZXuAR69bB7qKyuhzAV1taPBb5YFxyyMh54HJGKP1ks42jjkhJyL",
  "key35": "3Gjuwjv4EzmU5gEWDJ8x6if1F9eYWmq8317RELsMfQWJsgrJLaZEUHSFrNTZPDBFdCv63KraKAHcKeBvQSqnr9gn",
  "key36": "5113hQXyFWXfpC4VNLa1odk9soqxziFGUetaxT9i1XAvcZxp9YwDvcuJTkVWUB4BMwr92Q8194xXz17mpo8S4usR"
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
