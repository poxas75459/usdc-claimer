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
    "3zMWro5Txa8pvodQi5WnzwHCD4zL3H9q9TpgmeRCsxw6Sdttkr4eT2TKk7fY7W6LCuP8tFMVENmQarChxeYVEh7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1TJnYkyEXRevxYotHbk3HnkgHfhRssk6ynQydQzEfyR3643TKzE69FvXm85Wt43mgXD9GBxToRvvcwU1nriXsg",
  "key1": "2Sb2VauoZfHbtSP8fmU7u2GC43RUPvifCztkK1VXUghZapBYNxRh7yJ9mxysp5huYPHwupT94g2vqn3G4LgwK6ar",
  "key2": "2Agk2WPrppQAVUVS8Zca9PFWBKKALyFUpK342ZdbdaXpY3KnZoPbjPPk3p2tvKB9HU82JZMkwDvTzbcjBFypP7CN",
  "key3": "4Y9pcCEiwNXpZjoqdgfwb7DS6A6E2urPCmW2cMAfmWBHnjJFBb5pSiuSyZLiXSM3LC6nP9CZMbwGyjF24oN9s6pH",
  "key4": "4qrZPam4BGfzpxUe4fncw8s75Cv3tPbjUCNEK83t1XBmTUt9BqX6dHFbZozK3fHDZZoSjeWZiWcz8HAUJxP8kErd",
  "key5": "2Ww4anm1UKQo1ZAVjYxXhS5tFbToKdoR5HQm83rZP5zyLd7q7CWgGBpxqAZYpTCB3nVY8Dt3azYGhk1MGpspnPFJ",
  "key6": "5pKq2q3fv34k7jW23mvKn1coSgnoDDTQnYbodydELMZF6xd5vtCF4uTWzacW9Z1ZKYVsPTwzGBiQYFWGhYgDHLKd",
  "key7": "hnfpVh92BK8Fvof1ukceqKAQvsg2TPUAZT3Ro7kn2xrFe7iYkUerPCQyBQZLmumtHizjyLq6CMgcLCRp2cPEUW4",
  "key8": "46EL6e7vAnksiCDVJ2yMrBbTw1V874g3WLsN9435j4RAVx5uqnmKmoJ7HpfrAYPdDM2C5CKmpaQ7tqu1AJcwybpm",
  "key9": "qUwqEU2NGMvDQLkLQVpuyh4DMJchXu3CVuranvJaG1uXcid726JjXxYouxMveXK95y4tin3QuCKVuiD8j1AW7fe",
  "key10": "2KdKXEWfsWufVHTNRWernStBd8sXsSXUsEY82mwnkrFsFUHAri2oY4PaEXRpsQRRUXUDmR1imVdRqS6VAeLEJh4m",
  "key11": "4CFNUqiQ8upSAWaGZWpkZT3MUbtpqpFjMRqF5DixrnKZ2F5wHpdZMjwHSRrZrEyNqChV24WffzpqpUky1kCdVvN8",
  "key12": "zHHcCxBx5gtRNnvCCG9HRYKeGVs66qJzX8a9wzDBTKf4UdmZVKMAZ6Hc45WyvDqjLp9NiW6gA92Tr9zPuQPowCz",
  "key13": "5mhf1EyLZ8B9X1AWEKQdwpVxfkpcy7bHZvQLfo9f1rYyYPBweQ5Wsq69XUe1KpNVYYPkPNxa5pNPJQZdkMpQWpef",
  "key14": "3q9mvGdtGA1U8PvUbE9KJurSWL3aSrPVxymA4smfpj483MJ8mvApV6gyEfFJS9AJsUfGt5eCxZ1FXYVC8FALZEbs",
  "key15": "5gSbYpZturoDscx8dVTkZ4fFqT2X77yeUfgmipxBcj5ZrAJwRB5pbchgxbwurQgnuzPVNRp9wAtdRt8gXs5x8Myw",
  "key16": "5hRYZbd22dK373cLgWq7pTGrCAc4xfUQWat4xvM3HkyS6nXogrQnkCAJRr8yuj4c6TREaRsG8nWXedaxKRhDyZXk",
  "key17": "5bXAQgq3pk4wwUf4bDvRrQmE4hvuYEG86KEYc6cxcZvGj1vcwweFReUeM9Q3k9EaPFnVZVJro8LrbYYRJ3iHHdfR",
  "key18": "595qEuAuKJfT9CLcjvCdD7FA1TpbkkhDtDoZfJ2yjhyj4KnZP7Z8sbXhWJnSZxNqRoT6kekJkT8FbMKnExLB2uNa",
  "key19": "5Ff5EvScMWKkiKcrEHVPyFybgVvrN1GffzQqSBmtaLA8rDwoeqKf98nfbAk1W8vPM2Hnf6YRVywJvGqdLhRBx7Pj",
  "key20": "4eHwaK4URVR71SaAc6LYbBXh21W5bh783QfEgvXrjr7wNz5nSprb6KhWD2KiQ1pCBQsTvSZvFLTRx9fGRBNXjg33",
  "key21": "dHwVJDrxuHGSCYwjKrtK5BZLWCJAHSGuKTdDfMLYVahQnSP3S2tct5EKFCuaRnpHapA9oMFdtTNA9qRkEBine9U",
  "key22": "29UqSwf5U8qPPMoTZeAz3q2b9YhZKY6Rcqvm4EVzFCSFnQVeq1CatkC2uuDcGeBqy5ZHNA2EMqEELUT8LV9r4beA",
  "key23": "witCTaxDhNf14zPiXmHxhCpbCXJJdjJn1JNBzjzLyHVk2SqHiJ2oqoWjNyveVvQwXSCEb35YDnry1yCyp5ASBu4",
  "key24": "2vrN7dgpmg6PvCaYWzKrYGBf6oJbAPiQs5m86HjP341XjPpVhDpAKZ2JgR4BcnDm3UQPkuq64MrDBVqoeKLNjzfk",
  "key25": "3MX6seqJW96kmXBvGdwDCU8GunGv8BsuP4YJ3ZkAuy9TwwBcwGLGVtp9yZRjyoWNShYvyUjPJLw2sYM1RohdMqKw",
  "key26": "2V117RnG9VSbik1Euron7hCHZttHDU1eY4CCmDana1EhmvPCqamTv4TmpBoFeSjdEACqap9YyfwKt4QLr2eRimxK",
  "key27": "5SrxaCqqvva6kW4LBqjoLLwsrz8ePy9EfMNzouTPuy5fpbQzvRcvBytxf8dAFdJAM61EgQgx5xawY1KnHRNjq5vv",
  "key28": "492Fvenx7aCn3JEYYoaDVzhNAgbaTxx5XhM18h53PgG7M7gYwecQVh9kjxpWEk6S3V2q2DPfxp2hRcWHYvP5BGdh",
  "key29": "4TrbqRzuYefaZqnCL4XsR76YuXoEkjdqHviFBv1t9nQHSEeGTCUJpSUApNbHR67RWwzGkY8126rRfw62Q3ajQ5Mp",
  "key30": "2Bu3fJpANgKxaNNsKhUcjdWV1uC43HUA6eRAxKpgqtSipRKV9wMEcU3io8LCj5KCKLtJgieiRGK2FSpJ3ZyLSESc"
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
