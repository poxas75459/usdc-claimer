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
    "5e9KQE6bbt4vK18d9GbyHqvjjGRmhG3o5qj8vfaoJhPCopvvK8EgKPjWv7gxUPmGd2xXeg9LRppbkekXBAZQHhJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erPjvTX3CfcehVa8gCDCc9PfYp5srNwR3kmia271AmEAKrqgtiPBHdg7WQzBwrk3tx2u82F1JESM22GVu2dGajD",
  "key1": "3MWHAEGaem5RM9ELW9kHUMwz2xzGBUUaC5Xns6aZdXFRwpEft3i1YFBT2Lm6oHaYd98H552pH9tnz9RA3mHRSikY",
  "key2": "4QgtzAS4YjgPnuGwStPkDLid1GwPE8P1vUQBpE79drQMz8BrnPof6Spcf9FFCSLDD5LXjHBoe8kdiJGT4hpyZ8Tz",
  "key3": "5RJTFGrMTh3v2E6JuLvxsawmoc9ZohsFDuNibaSBauLz8PqNcDZTrRQLDzWQJ5K2NLsWEyRgoQbacLzFh7wh5qj4",
  "key4": "3saQJ5gjMnPaNqJiwurteVNnJavK1AP2PNBKVtsfZYs2DJdu6RLeJYRkcBDEJcfE96BjRT3dTG62GCncw9dxbzf",
  "key5": "AQ6sSa1ucXP7DiU99B85Ta1irH8XKCG4PL8KcMP9ChPzeVu8i797b6Td4n4brpSDbv7LTAuzo7zxN42SVTcqDsS",
  "key6": "5szXHJSsuexjYoNfPL4LK4hXVkAP45i6ez2S24P2hDTn1ZUffZb5M4fvTAsFNSthMXmjovX3ZdWVSTSACvYn6YpW",
  "key7": "59A2PMHdfCDcffK74ez56ib5wj81ASDhQogmHWLYdGrzVtqd6EKmhNLfQvKjyVSpjozP1RF4sbJbmQCid7Rw5xJw",
  "key8": "2k9hEpXyMAkJETv2uByCUsbuGEbKVgkJyK4vM5QSRQQesdEJtXJUed2ArGw6nmvZdaY6DkJunhcKso1Hc3Mj3fkD",
  "key9": "5qBVDgC7WsKZHAyBFYRnWb3UEfr3UNtNfVdR9gauCyBqptBXkmjAGgkQf9zrJ7zCXFrbNCuKKPdJypxVQEfgNvGY",
  "key10": "2pZuXLTNkf1fJNGYWnjGwvKmyNSDfa43ZvLZ919ukz9CpJeqjepvoiL227A9RRMzTfs5TQ2CzDB87Lg6nhdNPp3g",
  "key11": "38KdVnf9JS1ZYQkSb9NGpxra8rnYBdg2ki21ZbSdKAfV5ALhTEASAJWQKyuAhgf4DSMvhBLCpkqcx44gz3Pfgvyz",
  "key12": "61jw7rZPu4GtFQy7HWVJL6UH13z29SZtb1hMRAJXBE5ReDVfU7HQHnXsaKFULXMaq36LgNmrzLPNB5y1EsNG3Mtz",
  "key13": "34ieZij43Vsw76czbrhZJZVZr1U5u6qRodKvhLv8DQF6yxGqh11ynfuRTRbErEtNazKwB9if1gyKA1HtAGcDCHYn",
  "key14": "5PGft73495DAogYXaSSQF7T1zboUptTCeP1VW4PQ8UChYRSeKdK28Xp6EBaSQsvGeQ6GZTHehZJLzDDnWBUXasrn",
  "key15": "5foqKg9Tj3bfqaxWNB6MVsfjpnxiBah1akNs4EXGJ2iMPkF3oBAr5my7knprX2RRu6BJaBYbf9jLU3EAvKjRGbe9",
  "key16": "2aEJzGAVdCDfd9PWQ1aEpC7iuHW25o5HF1ngEs5EprnVtMtxZp9tFNGRSckyqvQMWiKdrmtp8hb2RkEaSv7bJewD",
  "key17": "3rnQ83WcLGYcUCPS5ECTQEoj4oxovN96qe1NHGyFWuDECLAduygDXofU19VpmgTTo3i4gS7h3eWz6FKAFEdqks2U",
  "key18": "4z8n5RadSuk55WoGuBrkC1CK9HgZtoNdDMJWHmVE9BLdzPehX54pRNSikjJE5R64h8F6chd1dZLtRU2QX73KJDz1",
  "key19": "4GA32dg4tyV2K8p8CNiTSPcMzo9eyAJqPtsk2xZVeUoTbcfq7zWCMAnNMQqG6BKNjP1HbmgnRVJLf7HitWZinuyR",
  "key20": "vdunaxBRMtwqAwLJw4gWt3scFcuxtwTufCCZ4eePCtDYinHbF6JdJBVUjWXv6cHFMWS3bkNNzWyMC3STREjX9o5",
  "key21": "2K2wWBt34beqsMgj74zhFc9atW5eUP1UFZjhjrRDYeUJb3aXpTAx8Dd87F393bgnsgThuv7mMhdnhcPkEBeU3qfX",
  "key22": "TePFb9iw5D8uBzimbj43gMqujVyHtW7Z3mwWDeTbeQhu74GRtyVSiPd6KpevzEb9tJjBAcnbuuoJEdHbXBxEfVF",
  "key23": "3h8ZnnSGaki5fYnNhcJxQzrq5UfiQ7NEtJYURKfmW1NymnzTot7DqYiNLbAw3xFKukKjbvC9PyHieatwFVttGkSP",
  "key24": "2DBjRrYPxWLFYo7gn72eY1MHcq2A5aZ5GVPqxThcmoeQCVs4tAPhuRcBmZucNsDT8UxpH1r5PiHKDN8k1k8Ptidg",
  "key25": "5gHBZNamqY5PAzfv4Km6abbGrw3ngtr32EQx9fDuW9XmRhbm6d4JX9EfZH3apauuJ4aCzASjHQKHwVbRHWoKG9Lj",
  "key26": "2Z14L6KiJeciptqrhpSmbFLJdmTTXFCiTia1wMrGTebGyh6dMkzH49PJ7jDBd5pDrKQ6UCMqbTjzetZPwMAN1Z8g",
  "key27": "34g1Dwzc1uoZCf3eCP1fFTpQeFeC6GDzeqsYwKxFcZvskDxWzXobtZKmZnS7hZT5XPejaKf1TaFRZLwQhhYKJPhU",
  "key28": "hptxRiqgiz8LMfNG51cTCruPEXNaQ84rJFLVpUwZyvmF8cpqqegACki2BbDWqNBU5x5ZKRAG4BKcmZXBp9v4HKN",
  "key29": "3ZKMN5ECC6tFkmkHiUPYckgzWZb8AZR15hVvNSu1fZ6sQMp4Mzwt1DeGtcZkRHWVbbysvYTMGCczkJW38EBgbq6j",
  "key30": "3At8hMR8E85sq7JXmsEDSJtLcVxwDsGrn2MgXtqdwdYLKTH37gp3cqmBFKnqLgfNw8vQ8YiXdQKkqSKdmbTbpGh7",
  "key31": "3R4V1kK7yn8s3MqWNpsT3giH7bLpvxSZSvWCs6G9yqioDKukPW2W1iZS5YREcQaNzQfJsPhjZB7rnZrwDmccAQ5k",
  "key32": "4SfRbGeMuVJJiFZmuCjwvZSvH21ytJVBR37ERmANaPGARQAJL9pqcUofEvVQD7JuWCA6CZTaRRyy5x5SBksEnBpv",
  "key33": "28ATMxV2HK9bgdZtf6orBFUaA6CJUTxWxLaTnb5EttVU7zqgrsmCsTTo8Ewa58joHE7jM8BZhYQtFoNfoXm1ZxCC",
  "key34": "5qfYkAEg753TbniW2YezWkkMjDYN7NaFnMsD7AdmnbsceCFfEYeiLdMVNEpNoQCx7sVwhDKgfErRnvecaF7ZGDvs",
  "key35": "k5Cx57wjJ1EmgfSk8JNoV7ySxUFxvJcTA57nYuBGZnVp8FRkapuKaSGaz2SGRxRLswsR2iLyR2i54kbjRQ62YcF",
  "key36": "29hpWFkhTgguUZj9yR8dPcxJkLZ74QGfUiNbmDWodbRLukKunpzytLXfQi8zfeo94CDUXs34tn3uLhxNJP4K8Sz8",
  "key37": "4GdHzHAVMPcrSmveu8DPeGrt4UTjhD2fcCwdDhcwoirWkSkbTJFWfYqQwr4SyvF6Ws3tgRKeYnJiLgveqGnnpAWp",
  "key38": "3CDWbYvFMDGVp43Poh85CwsKgdSg6v1WBsTDxQUjDDELb3rnZQzYtQ5BDBsH7JSUhGnEy3JVJd7XUjqEMeSDzK8f",
  "key39": "n99mnJfkCDodbhrVuunAVojccdxCsKyndio2ER7YgydrxmDckLi1MzfFRYFUqxQYDr7KSapSAYyWLnMErQULr6M",
  "key40": "45G9tJKdFKr9bzrXzYCEXcanmeXPQiSnZApjxV9sE6H7aj3WxxcippEbaaBxBHeSquoZ3XsanZRaKwu2c9EVn27m",
  "key41": "3kWYNHbQXQ89EhJkAs3ddWdScHpxD5mTFqmxwnaVwzwZyE9WNEtMmjuXqAXb4YGyQpC9ojoRw43XuxatCG8fiUyK",
  "key42": "2ULPWPq5TdFSrq9W2VnHWiNENC39pvH9mnfrDMgJBEyRmtR1ETnvisRtiag1hnne3rNy7Lb9Vh7nvHJAft4maH6C",
  "key43": "3T8irLrbQtRProJpo1kZ2VPjEXdcAq7JkBngYvVEfZwjZLjWXiHj93dsnj7VXrDM6J3DtvwP8Wum3x3kwdF6kNeP",
  "key44": "3zS8uHdTUYRiwZvoEBN3eu42JC9VaiKJs43ocse75dE76ieXMPHffKiSPjDzkg4pztieWNmZ1jefHAmvNd41JGtF",
  "key45": "6QmtPBbb8Cw4SyAYDE5ubkDfEPDoCeh7uKHNcwnAGcXigRkFX9GechXdLoKaFFsYHkJqEX7DEhqK4au5ZiuGzeh",
  "key46": "2qposb6Dd4pVi5PMNLgvLpnRUkRbaZbHiFTyHZB58Q6PS6x1p76JouGZJa9zcLRuR7knx5PifgnDfyNPaV8fwRWq"
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
