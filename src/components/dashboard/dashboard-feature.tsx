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
    "QBu1ck2Y2WVmwsjJTEs11zEyfNcMxMN4MybxSCQTiYxkAT8wTZBRnPK2rSSMfGgzy1HNeHyEHoasSjCJNuSJdwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9uYVi5sE86U8HMGqsbqQ7puFwKiFteWPHYVqRHAByPjVCpNJUhME7xRygVNM4pRFER4XV8GfonH1JT1WTFHg6a",
  "key1": "4odfGYaQ4tSBcv3svtrMLUL2xbLxBeziX45VVcRoFCUmtgqFXPN2w7MRJqhBar72yrB6X9vJEgmxkGXAex24PcC1",
  "key2": "5Ebcd5TxFboTpRdBMLxdT4bPx8o8KXvZ9LRcoT56v5DpzctgXchjvY3qJ6Mf8RAWhXSM8QfHkv57uGFzbqbgLmPd",
  "key3": "5VGDh7i7RYkhio423YQJszCr3niwTtGrWYgBqMMGvvRuKYUYnviXKzHjUjwNQBPeoTDfYtoG5SbbuQpVQCP5qYei",
  "key4": "x6rShUp8JEe1hBKFgKiVpHPw9hdRckaPjozfqL1MAFaeAzBqhPTKhQANL8B5fSBNUhk7nj5GqFTFE4vhsSLf9Yb",
  "key5": "SWq5X5BRCVceuvYKUtUfqwci1ynbLLAfCNJ7CbcN8YsmpPD5E7Ko2cDBXvA5wzSJQMS9qyxaCoZbHizqchmjHCs",
  "key6": "2MSbNSaurxUR1AdcRFBaPHmyAJLv9DuSpRpTCCU9VRHdXNq8Ai8BWC3AswHpMRb9e9LrZx8aqr27bpSsyCa9U5Ds",
  "key7": "49iRSAGZ94kj6efUF7mwP1tc1QRvSDAKzsM1qjciS8i1VgZ8aVse683QEj4dC91oo25Tv7R9S5JfwRLsqPdnEPDi",
  "key8": "4M8wQng83RaWTb8TgwA9f6oBT9gYrbgyvFTPtt5o4FuMTSfgmG7AdkrqmHca5LovG9ckV2biuuizhuYy3jTR4Pq6",
  "key9": "4aV7AdCgWX5ZgGoQ8mbb4p6gMAiQYkascjbjefNDC2RoZeAtp8wEoA7H6SXXst9Ur14jq68tYk84ZbJRAYAUTwU5",
  "key10": "5V9yAbNR6rNJiu68MoamrfQivX8jERaV48frAyjCoqjppkwfdXQ7xYjszownLHGxq749RHYH9LRNrEW32pupRAF9",
  "key11": "2jJs3Fup8yAyfhgANpRbkjs58sYPtC2qtm2gzKKbcxKi1BgEiQeM8NzGYWcPZmuwvqMRzw33hLvJEegkrvspAZqp",
  "key12": "4VDozikEeXq3tLevGHLpcu8GwZcFoH6XeD5DEV3b1mj1Rm8ZUMRK4eshLYJ2YSJ5H9XgWb2qWGgsgNsL7nM9gMzu",
  "key13": "5Mq2sD8HGYNoeBbipAWdi9UtF4686PEYfVMWAK16tGKpgckZVSDbVeWnYtiJGFd3twRn9JvMmA9hTEZyktB1txFb",
  "key14": "3UaciWi542P46TJitZjeEVG7iE9dghgGDdLUdCbixJMG7Qe1Rygb8CQfoEg6nXUNKi3FbLBDokQ7JF34T9dL5rGy",
  "key15": "4uxXGVdbz4kfBrG8UT5tniPsQk89MT2eRExozmTxXigzceDM5URmeoSTCVeZaDobdbNMbzCw5vajSMtMJH8ffFxc",
  "key16": "35NvqFwEEV6pFPK8pok64hUNcrWZmeyz4fBDhzt6Znk5wnW5EgSXZCiCyZN5UpHZuPdciaKU8QfBUxTn41DTvcTd",
  "key17": "5umxtfhi4x3AACqoYgpnfo753KW2sqpDA3JhUXLR3GBKz8qw4oxDNHeMktWJpRUUDmEJjqGaFqU3AL6esTz8gH6n",
  "key18": "ku47KcGD3BLfrzLLGmVpmMqssLLKDT4FnWapTfqR9NbkRYAjhduifZXuunJATjYshtDa3z5rG9b8bysSPwML4jt",
  "key19": "458q1nEAt4aXvfA1i7vph4png6CJbWWF1R66njNq2w9FUH75K638QryZxwzu3rLxxQ2f55cYvgXwCweMy1abp8SC",
  "key20": "pvBdT6DhFzEH3TNu9ofGdE6uoTJJ6eRMsf7SEiqQHJ43JE83JnH3ZSRHd8CvTUNB3JyWpEgVei3fSWb71F33sVt",
  "key21": "5AfNLZxY2pbgfo8hQgsFTxSMLHekVDqtV1eB1u6BHj3Z26o8h7j9P9iywJszHWsh1zCTn1gu2xL2vQoSERjtjJcn",
  "key22": "8FSpHRrPJ4DsqHwHuvF5pVUwpoJzPEEqLM4UoQfmAfm34qZxFHH2j41RcEpt3KaaRuoeetya8HQWdPuzbBYGHtq",
  "key23": "58b2R3UJm4PYkjyHfiYJhFsEdHF1wSWPtgnu1N115CqmD8rZPtVTJEihjJF4AtJb7nQCYnKUNPoXxCPN8TJU1z2e",
  "key24": "B9ycRZsGyS29rEQD5o27WL11XNwYKrN51LFLUojZ9ebLU6FSqyaPFV5GJLkb35eRhgnQZiduZS9qp3zmwgnXpBQ",
  "key25": "5Eno2AXjS9JcBGRvhgFMdSo7cgPzuURUSfgk1ntVVLh1HMHBrybh8ZcQGaKZ1RgibJQC8Xg47NGGfEAQoDs4KGZf",
  "key26": "5pDs9pYiCLCDP2finQxiWQMagg3z7snX8AeKMnQrhg6tWzZ9Y1JrwPYuuiqisZzrC7o7YPK4gA8zgQVDiJpog65T",
  "key27": "268wGVBCxYERe7JnUp8nx1tnpWVguxsr5CvRyj99TkU3hepSZGZuy4Tm6oKpM2DZsVAJNGDTPPmQeVbLmRreJQjj",
  "key28": "wF2qiZiGVBRi1nPsxyzceYWTftwtNoetCZoE63y75CMbcPcsSPdqXjwyJm9auz4Rybk3MTdDHFeGKwkViRuJHzY",
  "key29": "33fn47YReEx2asShMMTQqdtH1WUrAhGq4y9rdeXtHbqwJwB7y9QJavogEKALDpi7oAwfaWTN6rQTKReh9sp9FGJF",
  "key30": "2WzCh7sUAyfV3A1zb26eRWLLA4CCNGb73JsV9GAQ89i7sf5Jcgewezy1urpaP9iUcshGbRW7rCXTMgDH2iAmZrac",
  "key31": "4hfrkQ2Nkgz1TuBEvGkJ6gXK3cwRT33oQdcqUPSYxwpqTFdWoRtvSQkmeVJ3jCdKgkx1abHdbC2K74CmQVjdd6Ve",
  "key32": "NtNzeEWUG9gdo7DYkz7zDbp9kpLLhZXew2XMRqARpSrVRTwWWBVPrrEWwERkgQL7DgsZsX4HJBbx2dSinrvBPiD",
  "key33": "3A3tEoqQBCZ5Z6LE61kAH2EuLv3jE3pJNuzNKBR3kMNPaCtuw9RnWzG2a239LtD4Azm32xuAM9Ljce7egzL3ALSN",
  "key34": "4v39kcQsB4QV2XEnWWKEHLXNpnsDsSmTvBTM7zN4nAfdNRhfBQ9inyiB7RWSTft91xCPuQQarSLrBFtfR8EeBmN2",
  "key35": "2XiR6iasvxcQgVdPZ36qWD8b3Uwo7e8LravA7amivbLGoorhmaRAEJ1tB5MuG83j89LKbQxFRVhiZ3yW2dUSV97",
  "key36": "3csvx3sH6erBkkugQeS9hc25wrFunsktfzs3KmAHRvUHXc1KXb5PorxbfaYqa5DU7y115N9XVC8ChPXexbQjcS9t"
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
