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
    "3Hx9DrsQRfnyz4iEACkPvxZmzAgSNs9XJg9mshfz48fjQ5pGeH8ZwPdp2NaTE7StjdkE5hL1LWTULELf6Hbnicgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6yPUsDwTxFABawLtgb9arPp8Q8EJLhQEMEb2arbcTRvob5CSNtptgzL6fjDMrU8wtumQyKD69mVYkETy5vs9mzu",
  "key1": "66a4hbUYLHHgf75irRjipLsoCxb2XPVZeuZbsCd7QLJAHohJdBNCGWhh6e6htnQDPKXceP44zQuVesGosLbnVKgH",
  "key2": "38UXoqijXVPi7LwwVmtQyvF9Q2E8XqS2rAkpPH42qPEkW8K5zwcdnZFDPbo4bYmoF8Gu9iCKzwAakXgXFt3uiWsN",
  "key3": "4QCqwr7Em58fo8brkN4def7DbuBGv8yurjmKjpCKRNvRwFJFZdHZZtXx4VDHnzwwUH2y21qT99PdkUGNuctDCucG",
  "key4": "pSi8wb5qKWxL215aadvdnvmyqo4VBFLgh1rDRwyWyyvAmNfbwwN3nEfKCPx5iiPk1G14fa1vsiQats5CW1uJtdi",
  "key5": "5jvNkFfko3b6T9bh5UwFwRPmhZiLMghBDbs12Mwq4PYYesQKDN51ptneTip6ZBBFbnpxKbUcFkL599ufG3powN9E",
  "key6": "2kmyMhEtLmjVtCKawvMQRTNEJbQcKMPzBN6gM9oonMDW2Kijvz6oKKaXnByjP2Nakz9h9etSLfTXUyXAEbXUn9yZ",
  "key7": "3gnmbnwWWWtGJkNDGvnTVitq6PLx2zNsaZBcJ62qRrTTrUb2bEUwfwpUtASnFCDqatu1dsm3eH6qhNK2B35Tw5Aa",
  "key8": "3Qu7p4Qazt4Ps3v5v3sUcxLuhdejmahvSu49a3bqyxVstnDUQCx3wMCdQASyW8CxbkJdhc2bmX3YYfeEgzyUE3Hd",
  "key9": "5PaYY5bicpKWEJgkjTvgepVx5DuRLQYPeJzSGSrjRaZu4AfDRakqSbHvUeCYf5cPid7yBvztGDNhfUtUzLyzoS4E",
  "key10": "67bcyVW4VT2BFTFjKFHzTTjtaH989tFre5RhoixCMBPBM9ZLnSkz6bdeN72QEGGSWZvjMzD4mSFVJAoxuiNBPqLj",
  "key11": "3VMwUsZWbt3Rcg3DpZ5cGDrvZUiAjFy2FdmzKG82rmr6qM592zQu8BpH4FKjaPJiLpTynyA8G3KvAqLgoNdjQEYV",
  "key12": "2xRan8APyPyf4PqShDHhm6RvTF6cFCBdCkt4cYhUpZa1WMjR6z8YimAfHScmrkQJVRZWhrAjy85YE6PXi1EQW7FQ",
  "key13": "5ZPUTiREMaxLNQFhsHP2GPeFLHAxf923ZMoredSFS57MYrXjHooZudx92QKrLDXyw42oU1idwM9otGoPNvMqXzEo",
  "key14": "4234xcxrXCdB4tux9tdqNYpeFLfqweEHQVLdXYSReDwmNPWLPfGAQJ5QP9PKy3hDZFbj3rKfYxpk6TLFa8dxicEF",
  "key15": "2ZKpFm54SdFV16LpgZohubPymJdGXi6ADWHr62aDhvghpscKny7YhoCLooHp2o1JB2z1H6QD4b7v2fzw8KTQXxMv",
  "key16": "3DTCeGMCMHmNHfRNWvPi9XLvTBRGjj3qAWhYT9N25dBQNuBYpmMM3SyNcpcHaHCaHfupxejowrccgDuR1DJVoRaC",
  "key17": "5Rdpv8CVWRBTaevegv8z7CKGgbmjUpv3hfVcxA9EMmW4FuGg6EsMKRdJkH66aTrBnqBtmMCYSoAaJZZ87t1A1X64",
  "key18": "2GQ485968kybuYJUmwFpF1vqQ7w9xfoz1deeoNNiMHn5mVYHFi73Li6SdgpTQ6G56SVWzrV5Zx5PqwkLKJK2pQfY",
  "key19": "LJfaBBkQkzqTAK4n5SfijZJpKFwiBXjLAFGtQNGxC9DW6Xc7iAtZbDZgcgUY8aWQjF3BTd6PeRSiX4u1RMJnJBd",
  "key20": "QeyWDpcLRfTnDo5QGtVepj9REu91C6godkMqfvsp4whay1mBxxP9HTakbmCypmx2sZpG4fViAWFGZPf8pxVKdmm",
  "key21": "2EEKMZof2HYVZ9KqKhtPfbjqArEMMV5H1D7ciqEB66wd1q8RaJdAExuxUTxM6waWzh7qe6xYB9dAYF5gJUjzF5id",
  "key22": "2a1rncnpnfwmo8UygPzw5DdJrXtwm3YMjK3s5XfuRshRnUENYf7rdPwzsWLPph4ZoRt6BiKfVgnQjCtZvnhYSMsC",
  "key23": "5Ntsj5CmdysWQXzPMZBsiw12pCcDVwrgQdgzpKWS9XfChVsMhNpsLdExxWJYckQzQEivK23Fm3phE4UzmP4yeYZz",
  "key24": "4ZyV38smThQvgTmQHUrzsKv5ZpfSChir1dCjBYh4KYDYsjpDVzEdH7ykqLswv2A1xm1J8MBb3BMHNsFEHrfrTetp",
  "key25": "4u5J7qAyjzGbDV2kr96NAYUHXjs65TyeycfvtD71Mhc7QrDrcCmj7ebuyxL9tiZEMH4tAAVLNk3EDPVyfaNfPWAL",
  "key26": "3T6aNXntDko4Kw6mTSd7QPMfNpqFVaVeAAUkBpV7axbt5wrncsYrWq34xy51khfrhGkSiucokifULNjUTJsXFfVE",
  "key27": "4pRKDFuTdaRxjdjPoMXCBEFDeRHYw1AxyWFiVdyQY48mQcgxeYmiY4GRr8Q84thx21aR1h7GnycDwQXWwvoVfmyA",
  "key28": "2s3r7v4gEBjpxosPeZnRWzumkz3w6Dh9D4cRDaBxaiQRxdqy9Nk5N2VoP7h4tfNWTpZrovmMf1Mj1SYF8SWw2MJX",
  "key29": "4MVNM6em9NexGuHSbd9i5oTjavkqUtouvybsz8TRGdBBN3K8s7CzGhYuYSVHWi7pkD2WHrg3BcGuoy8s7vZA2Fvd",
  "key30": "5pqxddoKnB9Sk3PXAeiE75H4k1J43H1cJcED4qboqpDv4Vfmy6nATmyHQgVRArgEJKmekJPkdmEfV8vDwfMtRSdu",
  "key31": "2xw6kfrJT7UnsXWt2c8iL7U4XpmL53fit6H9FdWYFvMvwLGJ52tA91LkS7buHMXWAkiQbjHAPDD6MTSjj6JVSovJ",
  "key32": "2LPmiUXVmp7ZvDwz3CbLDgHpWt5fbU23W71EABcMEPWqoRN6YKV8cd94TDesJ6dAjf53YxoKMNmiG89wnAmVpzFx",
  "key33": "PUcHxtMq8rS1JcUGR4FEv1HX7qUPAhH36FPt65rcMA3NVc79PaCZytk7JwM2zL3yoVQENxTAG89sevrEp6CYFZk",
  "key34": "4Rz6izC5boCP3HwL4CSvpgqsfTota53yjJhpuyA2dMqpcy7CQQzAHsyE4myXGXuJRVwsQUDixEdpsPZ8L2AquoiK",
  "key35": "4zY4UvzMZ87rNGSc3aaRBb8AtndhSvVBeP4wYftkRR9nD5FMcis416SyPoiRJXLqNbyY4orhQvT9cQWAXaYVhDRo",
  "key36": "poWWdRiJ4sqY3Rm59Nju22fwboNsdjk6edpqCsBA19FEvnsRaNiNXbggQNvCVSS1m988Arva4ENJ4p56nxwmZzi",
  "key37": "3QVTwXwrMC4s692Qxnr5QrmyaK7VyQVQaGd42eS8Lmjbh7uqFedpijTAyCKQCRuNUdecJ3UJ6evNJ25x93viZbpN",
  "key38": "5PM7HLK7ZR8bVsJHVBLY4C2Y3CeGkbyrfvFtAG1HVwRVkABBxAxvGXsHweqzwkFKBzVLApUviyfHfTecmXmdcGxy",
  "key39": "4UQSuCCyqULWECFTXTyBNCs7YbjXxwjrvUgYoxVgp6G48awxc1a2WCJj5YwFLeyKRsBH494R7QkKBmMUL1gttbUt",
  "key40": "3QxHDCH6wYaTrTnyetpqzg72ha3X91duj6YQWR785e7zAKj8VrBSKv1AKVNDazUUydsTxZjoqYkwJxEJAj1q1LhS",
  "key41": "3GLKKmcvCXuDFf2KqFHmMgW82J7pWxQToNJUsYMvGhSSiYFxBvXoUBsKidxLbBAYamBGDsmmVDpXg3hXW7hsWBUP"
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
