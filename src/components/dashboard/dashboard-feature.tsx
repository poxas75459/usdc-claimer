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
    "4sRxUWvkqEHGz3qZCvqayB7yHogY4d13q97NX8Pm9hdViNuFqN4Ua9PNJ8thhp45CH2xUkYRzXkQnX7JM6G4S4Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrhtXnows9etf4HR8eW6F76UXQVUz4G7MBsJhLmLkkpzvn6uTpU9CJ78Q7cAYy24tg95FqWiV2K9o9Xw3mA8kSY",
  "key1": "5pUUersjdPX8g7Fu9eDQdTBbM3ezkTEQdZdRse1E2MdcGESvA9Jd3DaNK1Qf2bLJwM9HaQa4rUsrZcEkBkhHGsBm",
  "key2": "3kxs47SC4aF41FvZqHExfrk26yoWXn1AvTiLihW7UoMh4cuhJEd97QmyvVjNaFdQcxcWadkfAr1KbUT9TkBoaeg3",
  "key3": "5qMmjh6eXTxBzpe4ZRi7cB6T8DtRZ9FxFFJ5MuBY2HQqJuvuh6sQKfk2jnoQkmwnt87jsFiXjppRqke8NJP8vdiL",
  "key4": "48RfA3JeUhZbprrAjn9QRDS2vSfnQfCpAfkroCBbXynjX53Agbvq9ZmzD6atbpJUV2M9enGzDYPodZjdpeY8JzVk",
  "key5": "4EhHt4uk4Dm5wyLvqzJF1kJCakw7RXjz6ycbiW3WAXMvA6mvqwxQK6obXx6cKi5MzbTdsf7KfbjEn9NZM6y7mfVT",
  "key6": "5YbSLw47txU3v1rmMiMCfb3fsBwZ7KTXhdDAnGpMumAUYJG4fBhm8GB97WdgNpQbq7rBvejq2mWYsNAe19wqxGUB",
  "key7": "2JAzxxcLMyhBBLzUKFTcYSqeNSWKArRVTJoXD7y9rRF7ZwrnoK7Lh9QBMnc34vtZ7seEUXCDLi7YEieoeYHYTVa5",
  "key8": "4DgD9zrm8EhPdpQ2BqDsWqx1FNfxShzDWiqKHTD24CyJhVrxermvUYsNbeVTQSpad1p93NxjbHa3MmtAvNUfDV3e",
  "key9": "2qtVhQ6hQV7mYRC1Veegx5btLbCK8d54DEJ3i9hCssUDtPvnVzxdnQieU6bUekRiYN9urnYfYheHZ8YZtguuNhnz",
  "key10": "3urDgqzUk5H3ajKiU5uSRgHZcwpt4dqDTpTLEXaXT57hgwLtsZXfMnDvJpvdSkZuzKFg3SSSCjpS8UzWCfe1uWGT",
  "key11": "5Sa9YTmFG7DW1149YkQfWsYoppsYbPUhpDHJBYZzfPnqZeH6WA7pdr35cT78WnW8WGcyuHqbVxpELdsgjTdz742f",
  "key12": "2x17Cc85YSpAnSURtW1TwLi1M8s43sUHPLdFHUo4tnVDTTcDLtLnowgNC33EMAhKK7aBTHU7SzhyJJhfzChrF5gx",
  "key13": "4E7oXfqLWreMTJ6S7KRux2U7jFUisPLXksPYg16rUDFYFMb8LEFizpqRkir6FjfnCJyyqLZ2URFkaZair5jPLp1S",
  "key14": "5qHVJGtPCQDWPSFedAURoPNy6XPwn4tkphdvEXruyXDUFJGvExBZMTXFmyC54YNNMQy8RPDqmiW8Mjke2SMFvR69",
  "key15": "om8azPz4at4FTijfvFQWhva631a2gRMQcek7eaWC5H6DsmAKm7eWBLUq8wEw8jabSDM75T7y2BpwjfkaUSuu4nv",
  "key16": "5atYs127DTpdVK3hd9iRYYLrJ7y6UjW3XeEDrc9t1faf5CijeUdWWeKj24aqhPQG3rgUEsk5FfvPXRzG3KNEsmXK",
  "key17": "gSEbX8aMLdzyqYYpHP8Q9dYe8dCEUZrwvYZ63U53J1oYjWBbwGkg2SP2fdMfS1u343zgVqVaQ9kd3xB9wcWeYUS",
  "key18": "tW5zaWGiWDSEhzxQnrrLmRbGJkN8M7miBje3xQX6jp3sLiCutK8yPWridRCCyD17ijwkPAW56R8CrUP4oprJBXd",
  "key19": "61ATtf1AhzfHPhq73KCQeA9yrqhBjpV368yqWiutJWwUssGFgxuFzdsuY5UpnM6amrGWPRMoCoEwJTXjSQ6auax5",
  "key20": "2v1PgPJBJu31eqDC39Wrs36a7x5gRaqb9bWh2WrDnL9iqABJjY9QDkaSeTXHyR72h7uCjZVHZKVj2QY6CbhVqGeR",
  "key21": "25GgzjK6oeoxByYz8ukKE6BHoG71j86Z7qK5yhzz856FeMQcNwhvU2KWiDzSZedFCRZZzNBFcd1jYpEXhM6R8VBL",
  "key22": "2UN2jsLvVWN1HdaLo3odFg3KaCiwXUsJpuAxyWME1TB471gCMHaWXsGJzh518hDCZEDWCrBZTcUXnhWAG8v8nQL2",
  "key23": "53spZwLbqmuCsdkLRZFuB7BZUFb1TWZRpq6Lw39nu1gPcJyaFmA9BwYEsHwZ9WzLnyg1nAKZ8wGkqoRXY6C2cjmB",
  "key24": "2AMxKN1Pni9irVGw7Hqz4guuKmT4EbySAcxfpFH55pYgiWHTapST91b9MU5bFpRW29Drg5anJg8NAydEqcV8B7vr",
  "key25": "5ceKbbRmjhNsg2jTGvBEoPntyWq2kGxMic2ANDNkeRd93xxG7jRZnpkHuvsidTXxfnbaWzJT7MJa9nYvNWdax7gT",
  "key26": "JasipkiLEZ1axYHYaKukH1C93uedrW3GZ8M87JoqAN4Nanoh3jYDN5D1EyEXbXjVjx9h2vxqXiLQsVd5gkufnmJ",
  "key27": "3GGibVBnRQRBU37WLSuw3SCQC8VHHch9QHgPZqBCjBkR5Rrqn47iy3qLowfnrbrp52AbKgd8WKbrTW2o3Pzr2fdz",
  "key28": "5u939F1qRuSWzofSYbDcAAn3Ud1RKnmpK6VekMJYn9AKMHz5c6pLjtPaQTQTjN4Co1jJE96zUzwALPADQMiQGz4f",
  "key29": "tqjbGApvsmyxxf8vRTKeW2q5pYdzqN4ZFTZ86dgdTJKRCwKqzX2A9cg5utuatYP4p8vToRMB5w8HdRmenyk5mh5",
  "key30": "3v9iDtrivgzxf15EL9esh6otm751pcoZYD12NXxBwfVm1z6UKuq52wYC8qNUGYfmiYB1aL3iJWchcWMthaNpi492",
  "key31": "26H2McGAnUytZVWUdsR5RhWx4AEJTqYbjeuFoJoobv9hmGZLhsM8BxW26Ap9Z5LBLH6k7AT4ex5PyMDE7J5eTdGm",
  "key32": "4R4aHmVySBvtXSbSiR42gKHayr2npNqJzaT7tMMH8AKptwEQtsVtFoE15ZFm5sB9fACce8gxSNpFj46fBsfBEkYj",
  "key33": "4yd7qAFCM8FDLejM7vGdW5wFWLPqRcivviYTEgRSg9KbteqSXaV3RaNUiGwohBXAT29V3v9Bf79nnGntJo4pJzm4",
  "key34": "YudVSTFvdRFeuEpwgzRLDcChBuuRj7PgwJizqePFmmfEBeor7srMT9WSAtFTRpwTBXBYUowsu2LqY7crULqdJwL",
  "key35": "3HY5tqQ9JsMov5o3kepifaJqodHpPKxfie2dtPzqbHsUtS9dUEiY3f4AEc7qYQPGh1aXbcVthmZHPFJPHAe6H58U",
  "key36": "5eV4KgEpw83acn6SKRkwcyXm2Ek6VvgruQSdd7Aa6AkTa7PbrfqhpJrpEeTgTcLrHY9MYDyZD7XNuR7TGmLSgVhv",
  "key37": "4ETPSX5qaxes5MoEqPZg35EXA1fw8kjXVbAgrWgpirXEef6z6aaZu2BMULAsDuV9SHV4fxMyfEPMRmXodq3H1FmX",
  "key38": "4jx7Lu6hNNjBJDxBfuapxDFwMEFPA9fJEBn31gphvGCv311423Xq3JfuZMEHbAFGzeXiYFmN5eCgpVacnAMQLunj",
  "key39": "5VJYthnreamdN6yoE9aFENgzhQ9uPyumxaUMQv3htwSAyChVEv9ftDssXk8Cpwz6CFpdFAsJgtt417V4KTbTYxmX",
  "key40": "23M2XBdLNDxCRs1i6fX3AqM9EaygMy12vr8fVDphGUvdDwkB7rG84KPRStzJPmQ24ERRxD49i2jajC8WsvcdLKVm",
  "key41": "EJHrY4Go2HPC8wssZLxfSsKfwTThiQfL1bS9KfJ83mjiPKWTjgSWHf2JFxSxpYseoYfHta5aHsWgqbLPGMWBMvc",
  "key42": "Khq9Xjo7f5QU9YugKNc61ethKCubzoUgTSh7xkbeLfZiK3LXEMFK8VusHzE4EVgReb4qD2hWEKxMKMuLd6JR4bP",
  "key43": "5PgspN3JNHM2vh5e26epJELwHCwnAW2MRCRsC82Dt17gnqJCzS2LUPXms2MNge2s66R2kN1iPjvEJe35cNZC4BAx",
  "key44": "CD7zphRtvMVyEJRhbUHGF1WzuFADSbGntLngseujs2eD34DDepXg9hnugvkMcAKf5eAwPtT6LnKUuocnvkByLPq",
  "key45": "4kkpJe6ATrPxQvkK1NjH4SvrbvSKuzc35ES8sk575aVZtnNE5Tr5AJKTLf2apCmKnHscBgmHqGTCUxYxS24qCw8p",
  "key46": "5vHWmNtwnSwRRu83DSmSbYZehto9fbdBo4mGumKoGQmSDcbphBDR4MVuDPZbqc87krcshpHQACm8R9VtUwRWs9dd",
  "key47": "5zzygaJA4s91Eod9kUEAsFGzUBX7TME7MjSXzXMQJJr9gD9meUsYk1o1fsMMFKiTxEjFX99jxno8wj71Ke5ojT4c",
  "key48": "5NGgFwNLi6y6Um6gM2k8fkKzeeM8vHv5VwU7ZTsQn62LKRYDAEUrmFc1gc2DP6CskPP1XCGHgGQiozwoLKFiuQ4k"
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
