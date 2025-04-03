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
    "2EUKs2s5BoMpb7aceevdqHLeTPuqjvPd8hEbdwoSpMWVWJ9iafeaB7LoWqTB8docfSk5BsRPc3bZcoKD6MnPYBGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBzNhtXNE9wLZF5fEEDaFgfmS95CAMVhpA2HAbrcK5zBzP36fbzQWFkYKDA4kYRqo9EvLyJzV4peV8zepAsrPRA",
  "key1": "568qvEi94b49TDNxLgWAfdhkQ2HVqNnsVWsA8BYDY37MjmEfybDMUkL7j4h5cvTTDduwssaNn1LumwzRyWkVZegc",
  "key2": "3Sj1uUzmYx3iXYD5bngDxpvcdaVKpgrRB2VsazhPm6WSuNKYHWSeGGEbCCx5jLA2JV1gddkCjxvhUf3QsnxiukQj",
  "key3": "4hugMvPVx7FJ1PV84cFxn7n6SvSS5pjP7TQc8DrAYWXykdpGQHabtBNRWJW3QKm8dL9yEkGCEPZpyzyNSTikUcbW",
  "key4": "4uBJ8Mw7HwBZtS55Ktbc82HWncmYfiufqQUvCQGVttCPTxgKgb9NbAXQiUR8c1TH9dMY7bFkhkb1f9uYKJ4PavkF",
  "key5": "2ftHPLjao8wDzrHYpFks88i2D4tg2xERvnG2uiFfgFaJRnNjkBwadJvnAMV4oKJeyy7iUNL2Mk5fX75bboWaxH4y",
  "key6": "yjL4XywGDQUwcMBZQBKZKoUjeLWh1GGPAm7ExjoDDyhs9tk8SgLBJCjTyUBrBtZxKAcfFy3tC86nLkmdVQvVmgz",
  "key7": "ZzFkbGB671jUnRn7FxE5v4NDtJPbxNeSGCPfDMWksdsULnUP34VUnGz4JP8H879Nebc1WdWJivYw3sYSr9aXznB",
  "key8": "EYxKRp8JRGcVH2PPy1iDic6RrqgwnExWRF125H7S23F9xXCBJjEBXmQbdoivK73AHNdvqFRMTDUjDGUPo9bZ5rq",
  "key9": "3e1SpEJDRtiBPJzQvQS1n5UexL6H7gFWV7LsczDaJBzDqkBBPcbT9ZKAyEoXUYSzLG3PTX5vsNAkE7qqVhZJfLdP",
  "key10": "5GiVTi2B1k6uKBSnmy52yzBUQB8rJottpf6pDrUZzRgNeGFiLpnDduJyBTumZZyxTcqNy6Y6xYRBVkUTytfbkMah",
  "key11": "4CLKaCnMizHbwe9b81ge1jpxGEed1K1NH7gKzUraC2YVSvw7cGMKcYHiD5z7myMfSoYxi3xqoJDQpdrPYki7STu4",
  "key12": "5rLhhb9NJuDeakXFKACNmAAAyRyi4tRiFoy9MSKhJrPSR4GSoqyszGUNq56dd2vMSCz2PSeNySCAT9ioTNnWrUVY",
  "key13": "9sfnSUzPLvDBjj2H7DjePs3FskF1z5qugetpSKRPWTG92shHFGqFrZU4bhWZc9T97VSYx7h5LccvnufB4Htu1t9",
  "key14": "Y4vtabanZkSs5TWgY1FC9KEWjTKKj4U6kmZkewXsPgtXN7AaEu6mUz4HqBYkaEigpeWtoUHCPcfgr3J9zzXZck1",
  "key15": "3GBnXmXjLJkaQzNpc27QdsYArhPymXdD3cQSvueKDtJytDF139WZSpiHNQqdzejejMugr8kTMMyPLf1SsmxCepeX",
  "key16": "5NXDavTrEbQvkHzwBDCfj1ydXZYqumLQZmc5zo54vGs6EcBkcdFVJfMJQuTZTLiQeDkzvDGsHStCkV83YdsTqTx4",
  "key17": "4PvRmbH6M73hDxywDV61SJNdztiyi3AGAFG8EraofMZd7T9UoysbrcB4qNk3KiSgTBbbBYpmepyzDBzbzXYosJr8",
  "key18": "5J4qkpCmhfr6ZUwyyheRdsY6gJbw7zn2KPreF6dZstcga8n7NqyTx7hqp6ef1EtYXTqUPgEgkmQKTCVW9eZ9oHCh",
  "key19": "3qPdVY8LjHMEJCFzmm5pwgEqRwpdb2dit4rhKcQHbPbpdzmTzTKhYE1C2besisSNQp1npopXmSLsKqm8hLzB7iBU",
  "key20": "2z1MLMgbYVvEEB6omtpT3bKanbMbWBQsAcgE2TaxTHZXpP5vC3U1bxiFMMhQKBuSZ8gtf5qNuNSbrKg6MBbjqGDG",
  "key21": "iQn5hq2DST5WS3em5JBi2oFSQKsxCKsoPdDkP97VJG9xMo7wUeWLh33GVvF4Zaqe1JVL6UQ13EbbAuAFetZj1ds",
  "key22": "51KXsVjdRFwd4KFunHGbwK32JHWAe1uqA365RJBbcJzp2igEdDhhCEYVemYKKvRYaBUyTHfWra5WVzYe93aYWdVH",
  "key23": "4QRmkCMQN1PUSFapfNRV5XU4nmdgY51dZnJ282b7ZDzqMf4rmkUSCZSeiMGdRX93Z8B89jMbZFbwsikJuq6WLXMh",
  "key24": "2gomKhsnCRJdRRt85oCiT5aUo6S6Cz9nSDroV85FpFTXEJsz3YnmEnd3ctSEGkdtHToFiM8VCnLBxtoTdKR6Ztbe",
  "key25": "LrSXkVdWreEthtG79YbXuoHXEvo1aGh12fNmhHa7RkWXbQJwYd41S1TJ74BN66VtmVPUgHmjPcyefpaVfgTvBcN",
  "key26": "2Z8N8xcRGGZ8mPHXg77pH8TJ2atxJW3uFfdvyHUbcVjxQQ4o44szNYdYo8q5JsACdDhTaQWAyNu4CE27Cb5oSeXA",
  "key27": "23HQjr2VMAAukDbjfpAJvjQ1Mfzws4s9oR4zBnDsN8HNk7LZ67Zv5EM9xixN7WgaAjMs8pdegVGem23c7EqZVkeQ",
  "key28": "5HabPLNbFvk56ZDJCNLzKeTDkWNhW1p2mD7dD9UPugN6CL4iXD8g8AvUaXrBdZgpMNGbLbZunByLnZE12tyrrGgx",
  "key29": "4x1uASmXUEoXvo5s94o41k1BpoAcRNBf4NdMVhtVqNbefXWUzqsp888n9gPXcy8hizFtgzZJ9yMAVyKabq4QxdVZ",
  "key30": "571DdBxNdKexYZpyBcBPQ7WojntisodCtRUumL8vQmaQv3H7tjqfvbXfFygrXoiN9yYywzZGMTh27M2kTxgXXr3L",
  "key31": "5fuLThW8NPZZD3BgAxRKa1JYrhZuuGgLwd3DnpKeHXTYKA5ztrutD28CaNBcJkbZqcBkyg1ZdGVezgkdZRwqwB4z",
  "key32": "5gzB2qrNEg7NeGryyePZGkd9TD5jDVnWu4KcLUJF4vWgqPrvD83bUSf9Ff2PaG7H6XQg6YQTkba5nQ6TPJADd4YM",
  "key33": "27bxLChWVkmHnUZsEVGhnDoDKGRc8Z4VWR7wwjaHcHA1ABqLY6fXPd7oZcfQUA8MTtduXfNKKDdKijCciF4PafzG",
  "key34": "3LXQhmUWo1W9Rt9y3kQyh9HgVtrqkvRXT5dcTpAmyR1gPU1afb4wxnHKXiSvgcMZjPW9NPvpH9sxJQZkafbygzC8",
  "key35": "58U8F6s9s9VUn1Am6citB9MNZeCXT1ZP4q22bbQZoXCYqUN9hhxeQJaLYc2C1H4S3tWED4tzefPmTKGQxACMdXMo",
  "key36": "1nvzDtyaYoNFcXhFutZK5s9i3wkL7YaZsMUKmmhAKxic5ZNXfgojcDpc21iWmboKV6nNKcNYmR7ZCYBNtqheKnj",
  "key37": "2g2GyGsLgaxkbbALfcot6NQ6vviLUqo3iejcSBpvCKC3TkiBkdnF1aKaLgbgq18zqDbrG5W8SZZ4uCiLE1MbD6xu"
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
