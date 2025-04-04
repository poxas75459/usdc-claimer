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
    "3yfi7Pc99UPeiaztLs6VXWhdhiK9UuQuCDtyRhsUx7Gfp5NHxJgrQ27KWH65TjYRyCzfqeSzvgDaDyvJpDUadnWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L18x6QexpQy4JM8Hg7whFZj1v5nHXapVnZ25eDsBusZNiLgYmVkfqH14eFKapru3R6uM3rHiE7GGzTFa4JwcMkD",
  "key1": "Bzdme9hoYfob9yAtJ9KBX5ZYDUCVkHdYQBVec6WCP7soGvLjRMJGAXjtSfS8NbEtGz8aQdz4LEzjpDD74vCxQA4",
  "key2": "DwEErDpdDtNKvcf57LRKgWwr8WLkxpD31ops2M8e7jWBPcQJu4HUVpTVrZUGqohVH2isQyt4g91nLEo22sf3sMx",
  "key3": "3qevgFRu3WRJmU2n4Tsm4d2or56erDv36SPtrL9P7k3VbYfg2UqLdJ1U7csurmfVxYhPCuMnbeVZGxqx9uDxRnRs",
  "key4": "2a9rKvwDUF6VSM19K5AGukKLbcBk8KJd6L8gzXQymCLgCqUTDpmv4Ei5P2ku4jPKGFRqcSKYWAcVuqdfnhzpNmSd",
  "key5": "3QLmtYmmnsP1PFTuntTtfuXY7ixPnm3PyDugezv3SbPftX2cP8heXQ3buZgP2y5Q7vCzVjq3wh4jUs91PAYWDzgq",
  "key6": "2juLUFVDf3bp1r2HVanUTfi3fbnj6NJohqWqSAS3pQpfwiWdcEdu4YqmGmR4mx7z76YWR3V7ZsT8eNpc7Z86AizM",
  "key7": "2gVC4TNSTVmY7QAQbftuF3GWTGEyUWMzCCjywTFa7yFAiW8hgVjQLM1ptfg8fcmg7YfrpXXHWnjk2rs7ZyxTu1Kh",
  "key8": "54Ck1yC8kjkb8p9vrhiURJYQ9D8b8pvZN8N4APZhPZuL5HLfmGRKK9B3JtsaWHFwZ1byqwungD1Rew1nuGro8X4Y",
  "key9": "2xfANs1v9yZW1X67MUL7syGZGNe55ZRzXpcCuWnZzYb77TDsjwSmi8X5s8M9X1bsh3ooxHC9iLfLHYs99bkW5Bp",
  "key10": "4SicgisHmTvQhm7CzpHQ3oxGFRs3jSr8gtWFJbWyusTgEpBPrMYfqpv74G8gw2mDfhrXWnzWFgrZVytMJKJN8GyE",
  "key11": "23mWjBXj71XXb5iiN6WJ7jX3fZq5ZPzABZ4KCWca2dnqCJyYa7Kj1pCjoMHwS4T68TxPMiBedEkRDngxB1QxwpSH",
  "key12": "cqqbMmN3mtxPymz7LKYsjL9NLE7MKXwpC6DZiBhYj1MeACkM8sUZbxyuMgBzEL8hXKym4MfLf5Wf7Q5UE4aYQDv",
  "key13": "CUuV8rnoYmGchiD6LyiaJ5gpD1g3x3ku2j9HFmoM3DuwAw521mB76tbjmhJnXfoAoPkxxmxQCYxRgd113onsgPd",
  "key14": "3TdoPSJcdSup4Y1juLwyFnegV7KCuURtLHiSZ4JE1Ex8WL3BrW1vD1pVEp3ZSMpb1hnJtmtHfXsvLbjqyo5WZbf3",
  "key15": "51dNhcBZeFLnPMbPx4sRdBqBRNiKQpPLgwPDjzMMJrRzB2utCMacaQLuQ2cEqkBxoxthkxeEsXpz4t2mVLq8UZN8",
  "key16": "3Kvs3w5wgXxZGBUB2GoDNZ7rf799a4beaJdPo2JmedpY66pV7ahdvj8PAJkwp4AiEP493eMZnGNZUV3BsUFvtNFS",
  "key17": "4FYyTvJCyFiAs5pU8jgQQMKPT56pMogmtrHUwgc8JUEaDsCoFJm1TWp16LQkEHZf7jctko2yyzc99ZsTC1LbPNTQ",
  "key18": "4zh1oTqicbAzYQosRw2Q8vg55h2oWbxjQ4GN88EKjB4SHgk9h2qj4euF6ccUps2vSgPQjyXaCZKvzpp7UppHFZtR",
  "key19": "59aqaDBZSipdvg5ayKpcvHTPEzBYEgbrfoLXpLjJyH5hChvbVL2CJR4w9VprvpiDzRgWV3Rp5jZqE9wEWYz4CXJ2",
  "key20": "49rJBxN4FL8vEhJkgphz9ELCzhHqqsVmfwJCvAgGuR8XbcqPyFLxpW8cZa82LUMrPbb8DpusxeigDLPv5PmXMhD5",
  "key21": "4J33nZe98cAvKCj6vnxn8EvPzganUK199Mk9nx84aW9BFfhqSRMndC798P4buax7MFWDrjZfkzQgbLRCMztp6u4a",
  "key22": "3dV933JujwXDjJSmrvo2JByN2EdUfiDVjGuSLyGRmJr7vimb2RU6WMLUZUk72aviKemE1UFSyti4rZHq6vm1rTtL",
  "key23": "2jhPDUpTF86XHr1zmeuGPwZprf3YGqxKZ3HfkTp17NsSSuEuffN3cFYVrifw8NGv1VzEkcZ1vyogeyYxNyYnraZH",
  "key24": "3jtFE6sqWk961H5KbVaM43m4MgTWUxeaH465TymsAL1dG6ddibnLFkGY4wgEKcUU38tNSChfAH13kbMZsMTFQFcP",
  "key25": "2xX1cwNqPf8Sv1eqJ5uRW3LqYXsvsHfh7326mRJYZaXMuSbYM8kE5DhMazyRmytB19L1hvic3qcAHjcJ3Q5Htuyc",
  "key26": "KD2ebcTyr38LVwyjGAKrZMV7gdD2pxaBN2PqZvFNVGoD439b9ZAE7HSDpEbXkRStd6LawRULMKYYnaGUGbMyJDT",
  "key27": "4HyzGoHvvECNfWT96mA3fKBQTTek4pmT5tPAfjs2ZHZvSPawHaFAcu9KteCL6kmVGC2EMbf69BZ3TtYSJt6Gow4z",
  "key28": "3hc3cK1qYQAij5BGefzcEynSiQ5MFA5y4Lp6gHDVL3dMf4zhLhRUWzWLGo3mfVvjkerUL99jmMn3bK5ToRaXe9zd",
  "key29": "38MF7K31xnxFy1LRssdogJhpKSy9uLqRatFktgZhVaH85XCiKa1rG36psvuWF2LUwWihpqk84zSE8YXCAYGrXGyq",
  "key30": "4xXa7hUxeSpsfMpZ1c78aRSuDASEBfp8VoQfwhBgVJXwCpDyADiExLtJbkLyWG65yKPfZd2dy7zWAZvkL8MbvkrU",
  "key31": "2B7pBXYz8GByosUoVzav91eF1aP7aNL6fs2w81wybB9HG2dL8cUgSHU7QtqqEQrM5rPo1qWUrREu1PoancxQPnhe",
  "key32": "ryZL5TqMWvFu5Xp7TVUBMdSWnvAd8RiDJaPACRtaKa6sVFh8LBgbnXYHWFWuVx256uXKhs3cxsBoPqrNWZdTgzX",
  "key33": "4iV9vtDhDv2bcH7afXjqJQ9r6UyWAh2h1jRojFabgHTxJxHL1rMyTJRGysTf9oms3rAycygkvJWB9xuEBTroPhyX",
  "key34": "63yTSqGUMbgyftFtoGT1wgV2QN8HQY5AWuJ3QyiHFw4A83Crvzc1BLYLLUU6mGxSiPDe9bxVUE4eCbNNUwhnyLWo",
  "key35": "4tjuKLuUAMtcbPZFDZB1zLnqX88h5b7XUudAECMReq5t2T69rSPQxuefV87uUQRPctWLq6DkEZF5E3vQWHdh24qT",
  "key36": "3EzyEANy7WhubP9ggjLkrJ4GFAArXzdAi4D6LuPh4HdPBECkEVowwfpRxU7U3GizebNbtsyRN3X4J6RcprBp8uFw",
  "key37": "523ZwcXwEabmTHWbMFaiLiEY8dWva6MQyAgJMRaKxQrsEXVYC3VfAF1uKaduXrndNEW9mU2MkqkZPSTtAScVp16S",
  "key38": "4xhqrhcUufSM3esmKCVHUrebBPwaEJtg9brSDaTCECtV9U5YWfcVv4ESLJiW9cdeTykxubSyaXjqxXCwwpC9QiyQ"
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
