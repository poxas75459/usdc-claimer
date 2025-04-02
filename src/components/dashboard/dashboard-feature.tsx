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
    "331anQWDaGh5wBVmHCzWuGDxnjeQbtLtELRhmzFjTGRVcKkDkUSaJUCTfcEWZducTyprLC8JJbvqnLyvCDioGy5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qd6So6m6aWb2xAxrLxRju1RgxvvKDrMkLeQPg4aSh6NM7bbBaEWcCgaJQ8ynNC7y18npTAPXDGVjKSMWPQgis5q",
  "key1": "48Jef6ueZNaKMgoq99Pu2He8YAFewrzpPpr8KTSXVRa9ceJdWtALnT6cRHPnZ1x2u2sdRh9Kk1xRtMwe6dG73mwt",
  "key2": "4expe986HPaNY81DRU9haK1Jnn2NXTdg6ZvD7Hc7ef14F4EbSzTNJpuQCAWQxFq87fxsXDGjPEqCbXnv9VDjNSbT",
  "key3": "4tnMwdZQhM3bMtm3NZ3LoRnQpcprYmvdfVJq9fWwR7z229yRpbwtNZ3RZBzZ76PvsF5ZRLmZdq1n14BTmqKQUoSM",
  "key4": "2nmDZk4YuC7zFbtcNJcvkejpa2hzxbrzvcMjtsRBZsn2EvjpBuokxL99onj7AkNPuuP1QBKxAkaB5pWbK8SX1Kiz",
  "key5": "5pAP2uEYia8c93smeexUVRvASwhER9gYvdbDJRV9jFjDsVStp7z94TgNuuyWn79TzVBgT3BS1qEQagnfNxKVHSuk",
  "key6": "5kGSUWLox1kds4i1MEtuBrroVxXcVd1rEGHFJ4WTxpZ3RARwZk44cbTLfAALsw42Q3KvhGPSKbraHXa8HeivXWZ",
  "key7": "512DnxsFwX6VZAPpGMcVvjSUQZqbMqvhAS7PHDQczGCGszFrGmNrLvFD3aXGyDfYcY8u7ceRVv8cbiTAoCggoDyK",
  "key8": "5Fvo9v1Z2fTWAFJtK4WdDzZAtTAVJyeCr9XPwwK47K1fGgeYrb2EyNs84Bq8m44prbir54hN22No6zhnS6i1vVhB",
  "key9": "4JVJ1ynSHy2rSZZNC2FvZUEUXRBJyKXFXHmCz2Jd5hk1Z6wr4aLjP198EE4V6hNRNab3dUwuzhJ54CJP8VtDw2bh",
  "key10": "2wjsMNBfmdRg5ZxrC5arKzs34RMCqFhVTKwfCxJydY5PnWwonvjUFTLgZ6t42azv6vrsyfi2czhFaVD3qjS6nfKC",
  "key11": "22NaBW45jvdQWgd1ogKu8GNhqGZoavsziFFxWFFtJAEkzBPZ9Apj9SnD2SqDobJUQv432qye5tuSk6QMU2BeX2NR",
  "key12": "pXNgvTFr4ktiNdST2CEVWaGM7fsAZexZLHGDAq17E2DVBWX43rS1tuvhYcXrX6PACRQJQoS1PGt1z4rC8bSkXdt",
  "key13": "55YdjddAm1Ja4zTGWJnw9FPQZTEs5JqqVb3yuWW7ddzLi4YX87TjAgwSbNCdCEsRc8t9opiEPMLqwDPNWKjk9FvB",
  "key14": "31zLgFYLT4z9ZbdnJ6C9TkRE8qEpQTuojqpMTgGgJ1nZfv7d1LoF5U6JDmWZgP51sr12ieTKZYSPvb3ySFotMGag",
  "key15": "5aUtNFQq7i31ADjGp5DkrkPYJUNL6P55q2RdnUg23L4bDYoEH4zZP7Gp9LrXpS1o9r1x9Ue3VuETyHpagCL7JxxR",
  "key16": "2YehRfrNQvhwRuPPgykxAVF2n9UgbgTDzcxQHYzL79VSi9RQb7YVqjRCixnrNm62JysJgTQ1tMvWyXYkWJSWMboj",
  "key17": "xS6DY9KKptNXHNi4DDMjok7BUtByuj1EQjDHf4yBpaTQkBgZHKWfsRfnWG7cNXz7aDzfMPzr4qL7rNBkY7FS2EX",
  "key18": "2gsaJAwWbK98esYMYk8tKsXXh1tzjzPzUSy8dmGbyhkjaWcFg2XKPuQBWzfABevG2Hq8A6vdfnW5DL2JmDnRBjQ8",
  "key19": "yGy4oWDzz8fPkLUmvz2gPc9id2w3YmmfzNVDaBo4FMsWYN5pZ1wagrthY61oMBwWUCXk6a3peN7hQZLAks86xjk",
  "key20": "5WyncTo6zh6GcEQq7XbGcuHdg3LuQjpQcTZFBSSJBpmk11xjvmHbgQxe4G535a1QfnFkT1b9TiDAbGiVKo9cqXJw",
  "key21": "4HKcd236eREXZomSW8DDnv5o6G5328wHgQ49AHgY46AS9y2VyKwhenkfJLji7c8V7YKwiCd3RnYWtmMHqoYZkQmd",
  "key22": "2txwWzgCu1dVUqH9u3op3vuywtte3bUu74hdSa9panyqHmucYvPDB9GmUG3V8NdVV2iNMTf1NHiLbzFLiJX2nTWb",
  "key23": "4assGd9yGC3zm3nznuq2jm87ChkyVfXoNoa19rdRXBtPgJxK8ZfKUY1CAdNBBmGGR75TDcHSuKVkg4MYEXgpWLQD",
  "key24": "2H2nofTT2hmcVtKa2TR3tGDMW56LGuabb4XrzjW6NkkgF13NXgjrwz6cMhUJm6Qnbdbj3MLKu6S1L6doQFtq5ZcG",
  "key25": "5pvkR9pnK3mXxb7bFcyEt3CDHTyMHCrGX6S62mWk9sTWFp59sdBB5wVNHj5eU2nrHf4cbGoHcvog1pk6C1W9BjPj",
  "key26": "32qWzJAibpaSaCYFfzaqaYiGFMvSZpAWPRnnSCmEq5zURL7WmUirxoNPRFFHrtd2WWURNVxE4eSz2pD3hBvqonwk",
  "key27": "2GqecZS1NfwrdfnwnbHUL6DtStP3x6RuetxoZNUdPEZpkwgSsjfP3kkbHNcxtQPPNKrX8doX2cP9csGmJM7jKJfS",
  "key28": "3HMBdbkT6KYHDWGUKPQn8nNijfXZNGFu51pPdvTnKBwDgiQeL2ZeaejqkkfWuT9bspcw1d8V9WLa8YGSupNouZkt",
  "key29": "Z49hxpgXBF69b312dWHuD8SB7BiszGrxJAwzi8jPFczGZu6LKEn7CAga2WSE51ecvdnAmbm6MwHgag3bXUSTpWK",
  "key30": "2EckvnVWe1Ef6hSyQYUEWaiXygiry34nss8Gv6P6BqrPVMpcWPwei71HQvS5QLiq8bhfJ5iZDHcV2DsoYz3HCyoA",
  "key31": "YNe5CphGgieQi6YxuztSf1u9Cn6Yh5Co2MytD8hH8QriUrnMPiMPSZke5bZVwJVqU5r19grgGt1VsdB1kC8sxpg",
  "key32": "61eVNhZZD64xVuk4xLZRUMBT2bz6v2G89gogJbybbmHtsH4LMyfm5snnCp1TctSvA7ciTxK5iCwYuDxb8dhJnvyg",
  "key33": "2GpGNxZgkpmGjSMkR5wrj55R34rFQQP5GcRmMHzqj4F3SsBiBb2LPvQaszrKfANg281CQQiWRxasvDcSt5wf22mf",
  "key34": "3ZW2Szzi9ALUda3yFd5ehNSJt549Txvej1hXbt8zWanYeAV5H9F7foZjwQiYtdmT8E1wZnLSxGPkuYfxr38YxbRE"
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
