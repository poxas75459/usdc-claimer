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
    "5JHdBLJ3PF3pMgumphZMNhxNFnSVf4mxvHerUNhhMRZRaruT3dVJ94aGPeNSC9PtnT5NSQHossMN1twnt1YEyR9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQPuVFg37V9tCdXqy2uYyTVLvA8vJLHKo7Agij9vZrBrVmfhkspa7nYv95HSGQNty4n92tbTvruJ1qLSN5n9mcw",
  "key1": "HNCqgM42s47BnDvPE8fMSKTNTGks6HmCKgkpK8Ah58Gn8Z4LkpwPgGDXMvFfHtdHQTbX5AcWuXaPoErVkHz4hsN",
  "key2": "59meggQU4cL5VwqmMUJJv9r9nbTLGz6TB2W9PDsAduosYFA6NjohLfYYnKnGPo2Y2fx7pXa1VeWAEL6o4J7mznDj",
  "key3": "bqjuDG3rTbLJjkm7iZJpKBCWiXTQpodh6DWMVuxni2sAHAhtXmGqnohBndv9DEj4fsKrvPJNsmmGhmoNUrn9YzL",
  "key4": "2TRXi5dzDHBzUqWGcFA3f1CC3NpNvm1MyLRg7Z6TGRVtZu3MfLRam6MMVbmjVMzXDy9UbSNHDaTufd5WfRHySPgb",
  "key5": "2yB1LmQ98tJtD21Z68v7nS67ecHRdo3HNCUUZSyEbAgA4K21whgjyZpjjZNxZpG2J7NFLTxWyU5p7yuNp28Nn9e9",
  "key6": "2h5aXAzqkn56kG1Q36FtcPoVPXuD41DeMxJHB4VyWwhLL7FekxUCgcZDBJgWsd7nZdWo2tw4RrinKyXXi3u7Kc2W",
  "key7": "45TJL2V3XdEo2BHb8FgQ3fYAwvJdfegwopLFekMKNubsEa9rve8xegjb8Rh7bjANMWfM8te6H1fkfT4y3cwyet9p",
  "key8": "4azQkR6cdsubBQSpnhtZBjuJUFLJ52M6RQKzXqPaDCMJAgFkZMxiZgevgpnV7HTcszP6wt8ehBXHzAQX7aZ4grrL",
  "key9": "Bppr6ZfPcfLRJ9NPhYikrZZfBmFDFekP3PkP5yTmDJcnLt8pAhpw84Bpn138iV7hHLBb9Z3VVg6xe8o87oKGmB3",
  "key10": "E88zsLVvWEXtNyvhTf6kN3ZtKwcb2qZZ49PuChnqDn3f3G72iuAiHVVfjj3bPY2AnWRjGuX4nyAhEC4w9TdKuZw",
  "key11": "W5DiGdPxFrz7EvDp8iG61r9vY22sywUrBL2GRxcwgZfy1X4ZRpmYk5aSqVQD9dCw1WYvASYxmXvDxfvfHbBPGaQ",
  "key12": "64oWDQQXfgtQurHkjBqGRzuSvhibhWt2i6te9M2rV8wgUN1rPbqwDaapaNtCqFpJwvUPZwdREciM8hH9ZiZdeJ7s",
  "key13": "RHLpHUhXBEqZXsKdn7zrXvvuyd8NVFwPsFdjRCcgei4qy6JxuazfVYQA41hY3Z9Tak8SrbbyeUywAjqgbzyE2Lm",
  "key14": "4poUpnzpkviyqJJpGK3d6LAu1K3MJEdaqL18PfJQbjFDgfwJqPrBFRjLwKdR9m3SB6RNnZ94SPPUR8GmAfoDSnbJ",
  "key15": "WER2HAYXCZjsrsgu92424eFrAVMtYZcqaX3oGbw6wyyFgypnMNVPqG9FeHAsTy5hdtab2Ld7wrpqd6Bz9Kdexkk",
  "key16": "4eWCejchRevL8yGrVNfrQkci23mEBetRTmK1MvuMRdtViAKYUMviVVCjNz5xRY5BkVCA3F6gxD9CmwsZds9VABea",
  "key17": "4upGWqyU8rZ9ESLyAHCrJdPWK6qoD7o9ncpLHh2Qwmvwknh8NW8FYBJYoaHiqjwQz9YGMn1Gxs44airn7QPq9kip",
  "key18": "iydSBDV3cU5Z9Y77w6LVAM6ZhbM2wD5izuvXe24X6ELp6D7ZTQsM788AWwJT8ohA4Va5gydfVEMTP9QtkH7jyrM",
  "key19": "5JsnuHqMwK94SMuvgQXwauPrkWzyoZ5srTSyTGvXj7wmZ1DawYWs5KxXRvpPUyUYw5Wj87i8e3c8jFErLTCVbd5r",
  "key20": "j1zp2sKjd8d9j6zbtcjchuZ4r8WBCB4PrGr5DF51BTXkrnmZ8T73zaoo5EkKu3RV76eH9bTf4HTAwGeJyJQwFDv",
  "key21": "4GsiCjB2myWYsFXZvXBnFhutxFtjiiwZPr7DjNZwFndEK8HBRy8RWKYHthf5sP79PGWCo1eXkHZBCURTHjqgGvb4",
  "key22": "57wERHNMZWY6gH6BpncQi989g2GYE1HTjuR7uYmfXEQ2rNSL9arWMAwbHL1r5D6nGvovJ6xD7sTvJ11Xnb1A2875",
  "key23": "2c85TmVXZRUngaQUv3scwKo5C3ijzADfRNBQhk5CvoYtRGtk1TJ7hJsZqC4EboQfuWsYQXBXeRPRk4yQChhVPDEF",
  "key24": "4KHqozyBKXancnhzFpKqiiZB4qmja3MusZQSAC5eT8t4Yo4NjRXmwyhACiT1p1UMuBEzYQPz68CDAbYrBvyxAwU4",
  "key25": "fyqgN3TkDE7EDRL645k2Y4pJeGvLx8zDTVACLQyw8uDwLGw4Tn2DsCmBAdJPfppcbVR9QrQ2Lwo7DpA8RzwSsKP",
  "key26": "5FSbi8e7AGUu9gtD2a2MjRRK7vhBhVbqHuA1WCiNn3x5ENjf8pYmoRTUiZ8fUZkFSZJ9g7XHmwaieAMMEo1DFxXQ",
  "key27": "gcBAwTcp58tjBFwR4osJW1ZyzzKG5r6R1MumLnDxjVL2aP8Tgj6WDth55pvREpv7mdUCsh63KKA5jxyEgTNYGBV",
  "key28": "5bQL4GLxUW84dAnKfxQLwHfZB1rid9EN1dceHx2YVvL1XUuk2aKxTAa1FhsRPPbfePs7e9ziNRxacQdbuo69LJqf",
  "key29": "4oDMnBaGcR7CcTxPrEaDRpqJqaoSDZP8a78P9q71wJYct5duS5DsSW87hxApUj1jHvvnYRYhkRWGufAwT8UUDiwM",
  "key30": "2Tnbr2jeMdZHyEh59u2MNV1GNMu7K2fEh2u4hAwhLcApKBFqDCgvwpn5QmdTvKU2TY8n9TGjnHNTCms7S56tEANP",
  "key31": "2Qc6eCmT5MHbSN5MyDKuPtXpSdjv4bevQkoCneTUQioQJwbjottP2C86b15F8vppgfA9RAiD2sWgdbezrK9pnmdt",
  "key32": "Z5zWmvmbe9WxxaPQZQfxBuRYeuH1a3WLxBFQko3R88kh6efgAnzFpPiaFwdJQ3J7Cn5sbMPhZ3QouqqAGD1ueYQ",
  "key33": "2z3p1Hnd4581L4djurPZuAiS8RFuQWr9TgpbfaQy3L8jnFq3Vn4pttuWnPrAQTHbTcSuSHhWpoF2zFJYXcVJu2c1",
  "key34": "3jG3MvGZr4R1XX9vCpnEkTmJkCZzwPd6HvrPEC9Wqk8qdEVK8fPaGwT9H8Kz24yj7295Vs3o2yAqTYkqJyfnzno7",
  "key35": "RYAPt5wPjvPqWQAsYztTzCzE9ZfFHtyb7aTjBAnZ8CexqoZn2d5ayAVyp4HV2zwqmWWD9RyHauGLedsZV8NNFq8",
  "key36": "3hbgKdFm8JteWUV8DjwoKZAB8MfaR4GLMut2WmxyK2m6dTyhVVQnS2NMDKozdHwykrX5qiDhrozNfyFu4DAcfavf",
  "key37": "2Ct7Z1857C6R17mCH4NkASmX81NBahLmVPbdfYHHXPShJXLvUqujYQNa69sLgc1tZbYZXT36X7ALxqxQQxxi8zcs",
  "key38": "DqP2bjr24b7rkgsZvX3fuwv4wzkmJVBehAfFYaKSCM8uXMZiNadkEssU4cNJiCi4wAogqyjFfVXPMHUJ2wQCKqG",
  "key39": "4h88hfxkWv54uR9TqAx7SgqdnYfVaUcgR1gCJ8zqt7auZUd6K9yLgyvuDtwGmRoznwHkwRuHK1xcgivWS2mGFuRQ",
  "key40": "gE4UzeWcbQ3rUJJCE1iWjwKF1ah774ftyang2fbtwGGUZ7GRRhcMeu7GmtF2NZaP1wd4VF4NfR23atqDn1q8AaY",
  "key41": "4ne7uGEkVwj8NyasUBXaR6SjZGQEQBJ72ha926GH52kvwbcubVYsuFGyzJcS5JhcKZ5FinHJr7Zs8ZpMYxi1hcRz",
  "key42": "22H2JgSRc3YiePeKqAjnApD2EG3SAgL5owDPAcSNQJhBaX1wavR4UKER1o4P6y4NqKJ7XMvZsCXXuB1AGTU4vnxt",
  "key43": "61qbrVE5jn7C3Suk2WZSQdM6bWjQuXBkcm46vgcwnr5XrWuZ1jiMhYbyFSNCnks4PZE16CvW62czFHKa3MfmUWRT",
  "key44": "2fKZPTsSSdhkVqi1t3DdcDwxSZepguQrjVVdkvAhughRLMavWV9DFMyNZVE8vytystDR66cTmbXkE3yUGKw8pZN7",
  "key45": "2QKmUrjDbGWdBGyLJginnZie8t4221dp7ei6FweqMLLHicVtXs2RdBqFsrAJp4saXX7GhyXjMVd9xxzc5rQii6mR"
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
