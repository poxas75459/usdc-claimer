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
    "4nue4723JA1es9zQQhVxBu5aUxPTCtqKbe68Fx5Sc72QKcjDz59KQPz3d1o2oWm3j942pfGC82fsvKZNuAbkroTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaxF5583cYzRfin3hAG6hb3qVNaPoXjNQSqV9KhKDFJcH3qHEySAGujPYLHwtMUMKBtBN8nvi6yTcNLTgAxbuou",
  "key1": "2PXfejiRyaTCPzh8Qf8RKm6sWNw8W6fTcRwdhCf1aVrFxbL4KQHDSx6PtYLpaFVQQBzJGBHXBQYLULqzFejtjy1d",
  "key2": "Zjx65TEACs2suX5vBrFjTq7WeMU95km5voycJhPHFtUytsxNtttY21RsHUZuVjVxhn2dQ9mkoqoXyeTQJXxzK41",
  "key3": "3BKTzwtat4MFdQFENijHf6GxYX2v85vzHri7BJQGCKntvs1U9vBQ9pU4uMkymbzFCNVfcu8EqbG83G2syCs8h9vZ",
  "key4": "3RLKXYdWP4csqXxPYzqM1ujwTgLA3g7RgDvviJsHMFiA8b3hFLf1bqopNFVvEUKfLc6voF6LcHxUDRPjDeByRCEB",
  "key5": "3CRR2Z7WDGGDh5HfjmDj2RankX1ktZkAicgicDkRiWBVz9NUjXHk1UH9ShPpymRPRq6Zuvjnh6nGQWDJbS5XNGjY",
  "key6": "2Jxjq8XmRJA6BLGoCR83PbZYD7CbTFGu2fCoxLQfs7Cehfq5YcKeF4Y5yUtkie9Ghz71CCrYKed3ixJ4LVmhwPqL",
  "key7": "5RFUaAJxuJhQtWUQ9rSHT5AscDWoviPpuAgTC2jVssAnx2wjeNi52YHCMHa9Ea3GR9vfFZb84LG22QoMBAedGyBH",
  "key8": "jZmv7A2LK8uarxundxWtbiUk5tHQhQ3inEmHc33JCukJyTbf5rjJ2ywwBE5TBqnrwvsg3CZEZkyHoVbtXGmqyTa",
  "key9": "35oHyPYHwaUn5SwQK3HgTpY1dSxi62w5aP9hGRgBH1cNmeC3PpkuSDJuLNkBQFCcmo6VterpA2QAi5DL8UL8X22K",
  "key10": "3KyFmfATnJ4FHGWu8CzVYkhYAx5iYNLUNxdKqaERfuzarFbwiCN59y7Bk1TdFrto51tAgVQn6QttgcbRC9Mya1ob",
  "key11": "XrdkDRvUy2GCFqGs5wAhVUHuPBknrzU9fQzFdT7oRuRKNSw5mGvtSqMs4xbdRmzzNPKBqRGXxohcxxAkGYRdJGH",
  "key12": "2w452bbHFtJXLszNEQrRfVcf7PNm8y3jkH6LRA378g9nFu7Z53Y91uUsCA1FGBJRknarg67xkfa5vueGTRBy8oWc",
  "key13": "3hsdoiMfR7ipehqocmomFtd1usmwiU11XBh8jcbNBmzBxvmddJRA3QXUXYdGHWtdNPh3pQStoCp4XWG8NnS15b3E",
  "key14": "5RT539mtwFHL4ytqN8ydKwC6s3o8gBB4GbvxAPBLHpZQ96kEoMJuY8sPNrxiQVBBPXJYXM6m8ysBNtTk6pyfH2xs",
  "key15": "3t9JgNDSWbjHo4wEsnf2i3d5s5WfGanvCaU6B4CWGmCyZu9N9nEMAmj97YZdRgqnbXq1rEHXtRLVqRR6EYM156G8",
  "key16": "2BnWQxn1NZxUxX4yFrgtHLW2zZaFfHX9qC63gQT9GcyzK1nf1aQeSxMciXV7CwK5qrKUsyMeEuQxuQgiE9MuSYjt",
  "key17": "3ZQPqm5vYQaF5QoPfGp7LGo8RmSfUTqXgQ2Au1M2CtWVnd2Ypsrho3xXxyk1244DniRyKD5QbYwvy4gpj2CQywQP",
  "key18": "384p28DbxFVSY1XaM2WmGq1M7TenStsgisSMRKQDwGwLcAnKwVUmGM6kETTf231hyJk9923s3o5Nb2x3kGW3ey7G",
  "key19": "2JENNCmCsh3LYtGiWUFKVeT7YmPVHeQ7jktUPMGBkr9P5KHnmtFYpNJxXR5b5nLcqwJ2EZ5qSAhTwcKgoPxKrmtd",
  "key20": "2upSCTyjxiwnrrefVA3vhHjabj8cKpXCcQ7Dym9qdDLp7aDTFMzjK7VFkdearvxKDBo2psDywFymkRAGFK9ac516",
  "key21": "2qpHaDjfVamobxKCxWQxbkbwkRtPvw5hVVUYFYFwv1hqAeQ4thpV9Hr9RC2KStR2ecDkdpCyCDDoRrijVRb1CDuM",
  "key22": "W4qFW8DN63V551EPQtDsrMMwZTSEvvLuML8MvbcUZ9ADRAfDj8uYxmYJ1uYcHwDQX4myGNkZK7XgbRkYmuQbNhk",
  "key23": "35cnVrBWxpyAUep1GEtCh5CLtcvTsEDQKD72wMC7bkZKyE2bHatviZiZjGiJ5phtQDt57WccQJ5JMVTAx8XX7xo4",
  "key24": "5TbgXUnykPH2YrPyMuYMRMoGfSxREpHN5Sg2NvR5rEtVN5FJiZXTC1NhhWgjGNVRLtmVxJA8N89AihLv8S5T5KDA",
  "key25": "35iRvCCpbJhJJgdTdnAjUqfV5whiN5w5KGzMd3iavvRMUtSydWTyy9h7x59A8KkXr1HWna5LDwJoh1SuVqTzyKJk",
  "key26": "8JTC6Z7A7AkApAzfFVdpRFMqsAhTUVmADu1VKCtB6gnJDNKaN16Eo8gsfLHeaxrLYtyGAcaMcmUS81SkZSjpvjj",
  "key27": "5zpfp2bMABZmD2cwPRvD8bfZmVn7gaEqyezs983FE3Kwcr2HpSMzBY2Hxhc1uQ71brqdWELdQ3q7BZvV9cv8MGQb",
  "key28": "669utAhEaF72SCGe1kEnYmnFshVxG2oC112TYm1WikYxCwKZDpQqUfePUt5LZS4CWbG59KtzJva3nGuWDb7hYe5k",
  "key29": "5ajE4LF8489R9Rn2iPCxKcRwjYYYNDAukjigY7C5sTiERUzCMGSTXrgpkFjq8LfSCMmtR5fmLKrtJ29wZgXx1VPg",
  "key30": "2UUXTF9bLzxheXbCJPszaCb5yStQfS8hFYinxBj8bsA6QVFSBCoauZXpzSQH6jQexBWuk4g2QN5Vgk5DevCum3zo",
  "key31": "2zqXFkVhWgPXUdgNf7bxZLUtWDkoPmG4nm5pkpg2Sw572KejQSF5nDnfqHnKFZXhUXVyo7PCFUFzPNszKKfYvaCS",
  "key32": "5WEJYVEHrtyssukbzCLQHiqckXWWJ74xMgnwYkCHqRz2aGNo31q74Yfd8RF5VaevRfnRWshatya9XnbKnyCLMdHE",
  "key33": "ySZQ7TqZxVpTiWrmxyDtJaiPoc9Pj55fufMX9hibKv5i2cjvHHYszhGGeYuEZdrQ2QK2zU4knhGmx4yqtb7kpRd",
  "key34": "BNeqxMvMsMAUXKsYgMa71HEAoTq885cyB2ypCMsqdzE88m3634Y5cWWsidyqaXwi1Rw86qJnLrXfoNPXdNyzENJ",
  "key35": "5AZDtjDPJK4KgSEK5izFAie5sX1GaKmqHvZk3xF1bYL4k28ms7RxrvR8HBokV1qL8PvH21pEzvfLQaY8pCqXgGq5",
  "key36": "TDQNyyPZBpEKAmDz1wbuJza33GwM7NxTP3ch9YWibWvNrGB3PxroXazaRJADZFUB9Vpa8EDjQXPp2zcQKkyu4R1",
  "key37": "5ocHYY7h6tGtoG5oKDVqHQC1FsZ6Q2i2WSfvLe8WTr6Sz8rJ4NpAQbZNmwhV5A1fmHD7KEh4ChNDWnjM3uNyjnUt",
  "key38": "4jYVPngcbppquLXAbZBdmYP84nRSkjMSA5ns2gfAXfH6XkLp6mFjrYZN9GGQccy3iKpMyP9dMMJokuE214Ycszt5",
  "key39": "5Abe6qEwfFJVj2BFAAcfywPERsdPrZm3PLD74gT1vERjyKY8h5kgzmx9FnEC9ccbvHbw1vUmh3K7ZYRfj8PohuVi",
  "key40": "3KGZ5gciWVo5wXLFC4BhUiwRHJ8A3ipV8jy1fBKuWo9tyfSEt5FSqMCWzRHVasNvv84NVLi7z4ExR86Npy16Xr46",
  "key41": "4dGyX9gSUnWyxKjMQQSp4quPdA1qQgkjzeogiAvQZ1UK1CazsYFavL82zw9LF5T8WMrCU3ctrTJG9yGy86yj9mYy",
  "key42": "usMNc8juRNRLgLvjKksSzTkqd1vt4VrwamSA7qpDLXqe9PDwpXKu5ACfZaQomUrFJD9tFmo4KTiiYePF4LzrZqh",
  "key43": "RWJ7XWqUDWacdiibfG7MzWqVTJCxVtsEnTuTq77yRUkZJUVourrFbRbmgWGTSvYzzkDREDoVGMP6o1R393DCuLx",
  "key44": "25JwP6rLLtCpQuWPPx2qC8GpP9kUxhUzMwL49tj3jTUHQgZUyvC1mfkBR9hkxwCzKJU8gcH9LdrdbUmBfDVVwfvJ",
  "key45": "24sdmPxZfrQrvodbungJggQZ1heR97o5beV5GNubFtsuYrCCkPxSH1Xuo7LVViPuwCzkh4P2LTNCJarFAhKp8Di6",
  "key46": "4tsVR75kUPaWJGf53EkYsKEpnUV2wiYReNb6mW3JMfuGVSJBEQYQUAD9KvVtd8TWxWFWUCXe3VQMfSWbLYmBKrUy",
  "key47": "CsdvHuycjWdzrQLoxSYnpfyY5a2WNZPooojjTiBqtRNoGGmzbbDGVMWTtxZh8A4sjZ9ZMFafTATD7q4SFJvS2qL",
  "key48": "5jGBTqBwMdj1B6u15cCSgfWVmjTC6cWjyqGQUxapwpuA21MDwt4884S9TyzaNN5zzq3KwzoTDm8h7r15WX4rGQx2",
  "key49": "66n9PTky9BvZQxn7qVpjTw9Qbcbtkvha76fTgCSShnu8PzvQ8W5iX3jczeo88rhbZkEapEzm1cf4M9mjCripAxU9"
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
