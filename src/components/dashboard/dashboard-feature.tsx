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
    "5G2Jbo15z6mhmo6EwUNx1Q6SooRepKbokXkzHN9S7LNFuZp8FUcaKFhGjx4BEK2wooQdFVxGn8joHRXBWExoohEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPdM33AyKMxa3oSzjVkHj77x3kM8em3ygamC8niMeHw3yhH5rpbJWGGNwqE9wRzqJWc15x8Htrk4NdS19ZG3QdN",
  "key1": "2sUs7jAvscvVaX2z7i5dS4yJW7g1uCLqF4PTJrXTA2xAkETFoDJGqC8h3xft9ntfDJhvh3sR4hVr332cxt1bPKGo",
  "key2": "3aZTjLhEXdonLB9m4zBH3kpcBhafdzRkKWi9uSsShWcZYLg2iPDNxZW38Z422iK6Hye1L8tzbHq2hUHe3jHbqt4j",
  "key3": "3R6QEThhBw8YB1s8eBh9qX89ttVwDYQ8ApsDDTEcESVttJkRCjRifZtNWpWwMDG3yLaXUghfk14EQY6nETgij31g",
  "key4": "3ZbFSCnWi8TyhkHRLnXz5nvSgaFsZZUchv7X6YwbZK2SZtdj9G6tY2A5phJkhU8SfTxDu6VwmZvr68VnQLyT8qBq",
  "key5": "uXfhX7V2163Ps9vG4uBngdf6mPs6XTQ2fXMyhccqtY7Zbc7AdQFcUQ7vjqQz6RBMu9uA1sD1bn7tPdsFq1ak9bw",
  "key6": "4iozpiLXZxfDwHRT1h8uddwfHSLTp33GdhBvBLGK1JadcWMUBHLWA2DhiNGHMGjMMjC96CFJLPAspig7GstFEfGN",
  "key7": "3Z4ZspTox7iaHU1uoGibST3YSKrmPpBZVjVa8nxSgF9VHFjvRzU3wqgqPvscD1PSxFUS3Jd4Co15ohgfV8GkCYmx",
  "key8": "52Z67ePUWowKSbw45XcA9Ez3g9iBDxY4GW93W81Q3NwrTageiR86DLtc2Xk2HvaePHuNRJ9rRvLYsBBjEitn8fSp",
  "key9": "4zwiWn9hT3zaijtHKaHY4jgXZPppQ8tW2t3Xoan78FqDRood9eNfD9rVUemP84PrtM666ykyN1GvGAro9aFoXJHi",
  "key10": "9kfHpjmCPRUC9Zdq2ar2aba6ULVnjvCFkFw4iLGGAtSFq13FypwENeLadqhAKZTzjgqjpsCrtv7Qw9dBhemqWHZ",
  "key11": "n9yBiG6NsKqSteSK7Gr5Vu18AZvLXLZhfmZHX9Fk4snfwRaPJkqb89wKsSacpfN64SYi6KucDqWzE1zzJdJYq8W",
  "key12": "7YPoUrkUFJcEZrAkwP1NRW8cMVLMR8BWK6sxq7pEL7UWUQ8gsjcuAjBo2Lh15Pj3TNetR8NFhEZZ6UNH8Serh2N",
  "key13": "5vqsA9yK382uy8GSfNfsFXzLUCqsy5ZVP9r2z4nYQLuZNKrjUcNgZTsXfbqkZiP2wp7qvGefRTJBMxogAhxed5ry",
  "key14": "4LoVPzFUSRK94mT5Ce17M2V71pcpMWQBhjPaJePhJ7DT7zzybnLoRSzN6B6yoNKdwj8dkoojrQrad15YTsU9PBhL",
  "key15": "4KuVc9gXdUPVVkgnhiqhqhDHMhKYwyf5y3MpUh3h2rXDS1Xrn6sYph81dLSy7FNwXXmjfrgAGXZAWs44WSvfyx6Z",
  "key16": "Vc4rPUnEvp7eYTAdcvNdX8nvtKMptVToqzJTuRaHRwFWmyQCwPhLiBjYNQ7QBAr7kJTD9mVToTeZFfLQfqZ3Ecv",
  "key17": "51qHkU3AqY2LEoSAwG9nbEuEAy9rTR34zyTNpiZ8Gc9KXxA6kUHFZtBt4QYWJ7N2Ve7LYx4pkQ4Wv919AuPyUnGE",
  "key18": "EKHFE9GxrJ39hQB5q4usg3RixQB1Edm6HbavTiRQBQ2FbBX8XAjSt5HPqWga5Emcbr1QFR14CFnC1v99f7tDhjm",
  "key19": "59Wi8Szhjp25SB1MV7L9PXJG34dSb6VQaqwtuFu9kJxTMv42BUjdvzS4HVqZid62go1PJFZgkzTbh4Jqo7LDDgfF",
  "key20": "2PFzPg97CYVhuRBuHCpEcjCCjDF52ccMJuKVpqb8hvBGzzi6LC4LWdSXiUiLAzLCzmipnpGDRmxDtZbQEUArDVii",
  "key21": "3n8wMeAKH42Fk2MEYrZcrMAZRi9MU4M4STdNBmz2m5eroCC1KkEWr2m8MG9Cvzwihhy8H7eg9Yi7rcBfbDUiZk5R",
  "key22": "3BgRa7hXBwEWPh2a6KNJzEtvCdNERzzziAjccjEMkLercP3HYvJB3mgnL4AV8BR7wCB9NdXgf3vDuWogibHwxRME",
  "key23": "4zSKhpbUjPQLuzhp3y4x8mpRpTaDVpoP5LmCTiHXeiZHPXvVxYD5bcXUaPcYofxiPcfTQgn1mbSnChhy8kvYFtzv",
  "key24": "3oeuNve6VimJq1WEm9XQVpdJoVGhRoFk6ySbVdqnQU5mGfFow69CtDBcRUpgGyJatxn2FCM6P3ro95Juuz8Pj3dN",
  "key25": "5vCKhd3gPq1Z8e5bREQmvgY1NpuxWHToyBd5APDHdq83NLoLjSXrq6ducPs4xwBn2q7MdR719Eezw6zuYkhg6pTs",
  "key26": "AQUAGgzuTbL5LEY132FfLBw1ZT5oUVbA6TRM75iuCKeAdGcNCvf19qvbeia1cxM7Xc8jQrvouzEhVGUs2vcfLSe",
  "key27": "5fTUd8aqBPSSYsYJRP1AoeWW2A1VmJXmL3gnX51uM5XrHZ7Y5CEnujHTT5bM7qpKUmL73mTJpDspueAKSUAMDsJN",
  "key28": "4GxrDo3QHNwN7gorkj1NjZhp6VfEiSLsGq1NmtLxCUuMo9xmdXNuQKkr3aPc6JJ8JfLrUkVC9mfkebbWkRbVDpx",
  "key29": "1vcSbe1bwRG3KqZkVXo3AnypbPYGQfUDvG8hD8zm5dQQ8QcerPzArj8gzMtxYtrPJXVN8ApQMwAfEtH8aqkJmCh",
  "key30": "3y7YciZZ2RCAu6mdxDP9cTgDbWrV1MJzNHGXRUPcfF497CHNA6hawUvmoSmNjwiunqKsr3V1Lyp816L5XTE1BKe1",
  "key31": "2t1n7yUUmTS5XDLSAaEqeobbPXUvobHcFeS4C3ZXjcCesbSMXtnVTJGctb6WVrnokfAA3HSFugRz5AmAd8X988sy",
  "key32": "4BDh1C7YdfcCQNyJwLjYe3wzLZMyQ1WTuBBTPpR8x5uV1d9tTSKNdTT9QzvTcVrWapVC5CmGUjPm2w2aUyyeDmXG",
  "key33": "3a2SKoi9rMUYwC6nppvpzfiaTjSStwbX7AM12NfwiguR9ffnHvrjnKo5XZsMSxAJktSMn4X1re46zNPgA6RCkUhv",
  "key34": "4Cch41mVg4GSVLoXEpJ3ihkybeBybBLKA5axcmEz1Sjf7tTe6Rz1j5ihe2GQEXB48KKGAz1ZVtMsVYEKwycyitUn",
  "key35": "4ryLjD4mwbjPZJJ881Qr34PCvp9fp11s9WET3wnagj3QoQnvGgYAgEKipwhCqgdzQyBqoNkrmK4xwRYz8fCZbLvh",
  "key36": "47gXWvxL5ZzM3rn1ykJqxEAkx9u38NY9Grb8CSWHnhRS5juQWfKjqtjpJxmATingu3TQHQqvsMMhvWdgAZ5Q9jmB",
  "key37": "2y8kvtv2VSeJbq9xDB1qy7f827EP9bUqHLVA64tvUht4xoTfnqECqqFspYJUPbuHQVn2Ha37LKQCYtRJpRQoEoU8",
  "key38": "47a22rPbF819Biq7DzKi62HyWxFnPazzJiytveWNvJAf4fjoY8GPBD3pzP2U27C8qCFfK8nmnGBRCZmTmpKMjaeu",
  "key39": "2yBuYpYunMsVoXG3AKvHjhHLdD6mqq12VULfqVpZ7eTwqJ7YYbmGsFyQtUeAopQmRSnHkWHRh67NNnxKQ1uiwbwe",
  "key40": "THxQA9KACJTWJiRmJpjxPV6GkgJJdNZP7Y8uhGGiEHaGMXKDzZ4jnhwudD7rDrkQ1feD8uC3BgYn27ckJSmw65w"
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
