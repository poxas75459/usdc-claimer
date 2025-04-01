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
    "nkG58VMyDxcbx9auuXJs9hjrKT7VZXAH87EUn1rtZsDoQajfXMSqh6dNMdF8LEQaj6jd2D4pxR5ux8cV1evqsaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqRiqeVEYVPgbmsF9Jeb8q8KC4zGAEMTCUh1BrhQPHM75bee51iz3BGV2hao2Ss2rPv6yky3u3LvyiK3RU6TUsZ",
  "key1": "2utfpSPXqD8ZxEkAg6BcyVd9ZpQEurSgoN3oE85RbYefCHaUJccQRJZvk5H1CeqkEwRs12vD5ChvAhYtV6VrvJny",
  "key2": "3FBeA7dYxHxUXkFGiaPo54i25S2KfEkM3xPD94wb4QzaUeWdmZ7mPi5KiChae2gVBhCFm3Jbdj3kHwwq14iZcHGg",
  "key3": "2MsW7CY1yU8BoZNMgWhfLpwxzGSnUPsPQgSZd26SChzPFUk422dg49d1krygPgrYMLbqcBkDNKMparSrwKsS1SL5",
  "key4": "5HA6TzjND4mWjU3qAr6d59xabAQkCVKfZHdZbyozWhf7UY5eRM6NJorEPPS5i3Vu8orVi9NxN8H7YEnJAqL6yAe3",
  "key5": "k9iEw5eHtkRXpBgosicPenvwt9e67PX4TbtuwiiCMuToUg7FMNoA5SuvjXUgfFUED84Qy3X6THBBkefJiaicmGZ",
  "key6": "4W24w7KvESBsaFJ9CsQ5r1261JUDDYK5r9wUoACeYsMoPP1zxtupBp4r2D1fxJi6c8iWqNYRzVjxWPtXdAkmZPUJ",
  "key7": "cVE1JStSrXxp6iNPJvHjs3KCPiokQzP8rKLXvvoMyGpnWWJnAGFkRf2ckBBhStBq17GEkHchYQzkmjgoTz9ytam",
  "key8": "3XNZhxTMjkQK7bEWusinaxSymirHVGY9vPmbxKjf4cfEKyMCqHpPY9tNVMkUgSQHjbkNg4byRGAUQgUZ9rYY1HYs",
  "key9": "8ErX6YSfRMN46ay2HTTFUBifGsatiHDvEKYCxgWxqheWkeCSxxhsUJKneWz8GBfbxEUXEDrMSKzzuV2CJYq5z6i",
  "key10": "4Gji47LsvZ7ModyNHrRknvyGmZURTSd2NcEu89SFLAkpU1nkngHovZEFzoGP2yLd6pAFa8mXPPf9se4PzZzbAqsU",
  "key11": "5wiVwByQyBR4KNTpTZWwkzek8SNX4nVbBthmPV4fStLWQUXk7dFjcgeALQDu2FijaucHjeAGckqhXHNUSjwDH68c",
  "key12": "2vR9DkvSnhhjeMx5s1n4xxEAmFy5Eh4PYNiRkPRH21kDFuhgTfMGfwvyYbZW5FdQZ7GZwVmuwQZ5DPiGHDnzg9Hg",
  "key13": "5RLV1Pr33B3m83581QtXaBYmDCLWpbvRTbvCwHtopocsX8scFctLjcZUK9GRa5XXcggxM64WhbdknjEDAV11TSxb",
  "key14": "3VCvT8TGCMdZfiuykVqFcopDzQVqTcWqgH3DAa8wwTUfrS13RHEYQPk9QqpUJir77GscUPrPe7VgmTbchmYSZoz8",
  "key15": "5JaVfNzDoHtXDv6WMNXoNSStKfvQMW88yPxvkUuB6iciLCbhgoYgChVQddTkT5PH7FkbBSUp1EZF2FWLDVHFWBzx",
  "key16": "39muMPr7c1qZfN86SMDyKySFZ7aFsMe58VoxWLSWcqoU8nV8m2fsPpV7YJvYyDQN2fZ8JNwUYaw6i8oBQ3z9U9dE",
  "key17": "5TPawMQyvqRUdmwf7UrvvcdBra7BqoxHrMdTzk3bf99oCHPw3KfHumYhbT2Agwm28uANXqXkDa1W89LAWM44HxNy",
  "key18": "2XGUB3AJR7KX6k5BCEJn1mSAgEnNqKa9gSTdoeVzTmqqXqrwgCAeM1brxuMWPwpoNjZ46xJShY32X7enSFFJsP5e",
  "key19": "5V3nmpfn8hSvZcuZa26PoKfhqTP1fMv2amMZ9UeyuG9iBne2Z5Y1sTmvM4XfuYozqv2jxG8JtKZ98k5iZWQbxGMk",
  "key20": "3N7PE2Mq7QsMTvHpJveH3TzRrnTBEEjCHxwAiWv6cj7NAPSZBTahimHvAbPJdLJ3PUZBmYi33VSRt12mmdyuSJ1N",
  "key21": "9iugU9Bhgb2diCxHq78f54sY9wAJFxyhWB3rWYxWEMXDKbY3k8HA3r7AGMQZEQ7Ys7MG7zf6dZK516YrJtdAKgt",
  "key22": "5dWJcZqxHtpRxFnCyGxoVShKFVubUfby88GH2Sytj5zNUthMoNb2VAsgSr7d5fqAxCqixVemk8ZxyYLuX6EfZZ6m",
  "key23": "4SLjnWF93mrLzvSUodHtwSSaCKwRJ3oTQh94BeBEz8cYZUod4pj7DgThGzUso4UijArp5iLw23FE9NVyQ4dNfr3k",
  "key24": "4bLKzybYnSpoWMkmDkuRR7PG131LAGCLm8JzV93oWVtTd8CbvyuoXpwAxvXKhUy6FRWpvJLdwWmZDzApWYXqE3S",
  "key25": "5MH3R4BU8fuPQNDyKHmKLzJ43HXDxPWto9wFCBzR25AdondX9LSLNFLSwuHniwc3H7NAzFuaYiyRoyikC8uB7cfX",
  "key26": "i9UfrbwnPmmmQA4oe5Zf6b4sZ6n7DGBCMojaTuaFFrngUVqphbxcBjYZpm1g8JagBecvhDRxLhB7tTPWVHjimT2",
  "key27": "5QAGJWmKnTPS7r4kzNjhBMhMKwpLW36jfrU8HUWg1MZVDTHjfPLtSpKL3WunGMyLDVFQB37sokPQDDwYzvAonzD5",
  "key28": "3vicYQhyy9JzvEFUqhoF8VRo1BU1muTEfTVfyPMEoCQfbhK8JrCy7SgwDcbEXEmZxymJMZaJu5jb5y2usLTok6zp",
  "key29": "Z1rw84tpr1PnnvNk64CUQUrvnq38B76BYUsCXTfrU324LtCTFKbttbFpHjJHRCdGUbTdshvGaqzpQfQ3jqu6NfK",
  "key30": "5uYZa4twKsfEvVV6wdmWbXRwxTCqcd4L6qTWe3fjLdQZBTJk3kRATgsx4gFrFQw5yf8smM75djuZLeW3tjwMBU2A"
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
