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
    "2GvQVeG1vMgkwyeaijtzF4XchGkvFYPUPRGsm1yBYACWeWS3AqnF9APpbCd2iQhi5BH2uqyDpUnf45e8a88bwPXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2i5UCimbo58UvxeDiiDcxjoGVGBuYLXoC2BLpXkyU7UumbnDThMy2LZ2WbY5bi53ynwCqhRBQMkUszroN8dtVS",
  "key1": "42DYRJBSNrq9dHd1GmDbwKqsc9xyucKpkNuS1FrFHtQBCYUx5afzW7sGnve1PXJVZeSi5SJbiaGXy4nCmLY1QeYk",
  "key2": "FaiUxDS3PWeifTeqnK3ixrz9GDBFkv6TgFUE2QW6xEUTWtL55sj7HPyFVpREownLENYzx8S1esVxHckwTahEBJ3",
  "key3": "2vGCVJM7dLqWinQZWwb2T6kff95fe5WK5Sh4ZsjiAcXAN1j9hdx54mt4zp6KKs7RxxSRbAtA2J4q6hNHXzMsV6Vn",
  "key4": "2NhuA7CXVHEuRiTGrfB7GZhRVw3PLRKqcfpfWyh22JHbvepwGQE8LznmxtToUDBLktQvUTi7Fm4ehNEgnqee62qt",
  "key5": "345KeRjCTc4J7sJCxfhREeTtVn8bkv7AbKXaZNo1PzgQVRVcPuDvmYNyiG2oVXMEf8oKUZ3my1QBapSQ433WxYF3",
  "key6": "2Ug86HZxf9DfeFySGrEFp5LtQrtrRTPwgLq8G4X92YhKo6CnKqM7yKwDb6uioqC74UrHeESDV59HEyyuEmJpjMGh",
  "key7": "446T7xZmkyj9BQ4PLjwdL2gq8kYnxaTUXrGbBiQuQRCeiRkZrN61sr2XRJP7wkLNKrWDXerr3PWx9Fkjs85nPYxt",
  "key8": "34tk9x8B6qXZoyHiLNcbUEuZkJzePLdPFL2dNU7wz1sS3nBzBet9LXGjNU5aqS3Nf12yGFKuJyYYy5EkRp1tdUxr",
  "key9": "Fn5kVcGnMGNUwnKHaJQNrWZZHpSXcURojCku3yKp9xnK7UH5V4gxonzAeSPUqPHzfawUttmxhZN7SbYckKicKN9",
  "key10": "4KgqjayD4YHNTQVCbrYdQDgGPTjepbz8o4RTg8Rjanpr9dV6tYaK1TpQeQe79FDu7uhjhjrU9BQ8bgHEsJ6aQRot",
  "key11": "3xtBA9a2Y9psoE1UmnDiB5rQR7wrJhxPWeacfwHs2p7NY9TecV95ovQ8TYavuMLBSxnHytJfed42K5jzT4YQyYWg",
  "key12": "4qrPVXVYgvBg9wNBY1DnEhb5itCT8WzD4JsWZPJL8gs8BHaPhjbbpUsGn3U8qxUugx3vA6qdfUTPGi3NwaFywh3N",
  "key13": "4Qqtmv1susSBpcpWhS8nAxN8iUihgw5v1KaZ9RASvhapTHPEVTwKoWdfT59mjf41KEhGgthyz8GePtMtm4FLfoLu",
  "key14": "EXGc3jXTZwLCtxV2D45Wb7RM4yRAD85HS18J8nubMp6pyxxUwNvM7ua6LbZVniqz7iDgjNNU5f9WoY47p92MKpa",
  "key15": "uQ1u3xCLJ6PVakXXLvLtfZkZkpkq8uzsnpBAdtVXwBSrCHXKxrYLKg3uVEYaveuRFim1uf1MLfbZKuZ9Mz18pst",
  "key16": "3xLnSPJAFmzfWXxZg6KPo6SsSD4gwzbYN7vU9PpdQnaSZLDMf3Ux97sGniyKVDVo4KXm6xycdNFLV9323uWHyEbD",
  "key17": "55r8bfNvBbLix27yJHeWmWj25eURKJKB2K1vao89viTBRriRMBgz6SVWyC1jX9o7DWXHvqiAyg1uWtfWsXVYXBu9",
  "key18": "4jd6ExUjSrSNYpXRTHGXVfCc6VyxEk8Xbw73PAfCUGxrLk3dWnrKaFLbAyF8sfMRAJdRMyXSEG6H7oei7ML6CS53",
  "key19": "K4KQWyANTgG6vRrBvsCxswpV7KqY4a9DPgdZF2ZbXqW4MaAwEywxxEDC1H49AHRu1zDwmhZAfyKMSXWTR9EgpLh",
  "key20": "3zkyDJSYbRrN28ixMAQyn9dwLFk7Kr7TUK4bqVNQSKaAoEhWXiYYRH1KhG2r7D1wKiEjWCjhb2EUWUaWdBhE23jo",
  "key21": "4TJwAyDeUZccGZMVRuHtftE76Ex9cht2uNFFHwUJtRZcP6auLYMy8DDQxsa9z1oKtZKGRaDGQtwz8Qdh7yiWjFYa",
  "key22": "3PurzjFs8DFTQejshc3U3RjLfgMAKzSag46Cwtmr7Ns4zGg8nPR6SyPYikbqkrCr8nEYKGcZi3UuFy4iCLKEkYdZ",
  "key23": "kv16E3xJt85Q9EdjnxWN6jBGtbZrEho266uUrhkNG59SCsYjtVgDv1mAbQ1v5ixqLvjGWdevMNJ8g84Rb63icZD",
  "key24": "4sXN1XGMH8A8LQcrm7WW8rmcokK9a2G2AkTPNuxHLFXPmJ618MPFdagKak74xi18kmf6s9oQUX7TpuPaW9Ld32Mn",
  "key25": "Av8CuaTsHEq6R7pn4KgLjjFhbHDjzDQN7ttYfmHSo3qyG1Kw8wkQivHyMuwugHNhPFrqU8bu62p5ZQjqTx7eGad",
  "key26": "2NY13SgiCGBrnsWbS46KWwZy5gjcM5sSy6nbJpgyXRwdFdqVrBX6Y7X4XkBmH7qeAEzGSotG3uGufSZqBVmK6YDN",
  "key27": "4ufY4w8RqDMs1TDgbHo7AcQhiRJHxBAmnjxEN8pPhCefm3QyLSqbz93cmpYXWoyk7qZYan9FobFtFMSwRp2JmXHF",
  "key28": "5v2MmhnvkTfZjDt9t4YyWU3Ws4MifZCZwGGkQzx6LPWGSCB8KQJLRRZ4r8KGeQXgwkuiiiVNPcJ8SV8t8SeP6DnE",
  "key29": "2fGz134y4owkJmyr8111NnFrpy7T2DsR3X7hFXqd58i5TAjRyGD1BpbU98tpTeucu3ob55vdcWp15vq8NA3KEz3A",
  "key30": "4kzfWUKMXjg3WSK5pNSv95LY5YQN5JZg5MqLeFA6DgL8azPErBi3UFqrHMYfn8HAvNHK7JQ7E83Ppj6XahtLjTup",
  "key31": "25erHeu5rAWaFRJpuyFjyr3H83rB3CM8az9VKZaJWDYRP1jTz4VPq5Pt9NZNZbcCjbLNPtMS9xUu4YRZUXGtEC3U",
  "key32": "4cdAQEaVfMLZqYra181fW5Lr2buKrMXdpFbq8JZYznn44rQ5CYCdv2PPyyG2JVseoigRkhDMk6njyr6KtSznkvNx",
  "key33": "rLgwxbd26N8bnTysC19SQ4PQpB5mPUn4QBzLvQDx4d9ykEnbu7PuHeLtHPzrWk6u6KS1gMhUKu3DJVjyjejpeBv",
  "key34": "2Gm8xqBgc8KxCgbaotYNVp3tm6RVfXu2rLhv2LGzcpDAcTsDuEotPXbJWfxZCrezjXnG8UNLGtuMJax2W6jcb1T5",
  "key35": "5CFt2QeXmNm9kv6kZppMSdju5MPmJdq7vjdZ21yaPC4N9B9WX7mwaR8wti96Gx7MoVNZ4U7qjJfgxoor9QoGUNB4",
  "key36": "4L17MZPSXKtGQJTnucMLMuyHgkMHBBa1bJMhtN5KWMkYKB2QwT2pzpfbNFKcTFQxP8iN9a1ntT9yMqExfAdbJedn",
  "key37": "5eYpKpw8vhHYKxXPG9p4q2kY8GzJDH4bJvsKL33ghpeJ4MFF6XT8dBoCW533oVvuf4oLybC3L1nEP6hhkW8EkoUQ",
  "key38": "3crdRiSoYF3MnaUVhMF29eXEeeUVgrvQfJUJMwwJE2LvEVzwibYgWhwAF42SSkQ7sdLLDDyFtbqpbn1M9GDg9egk",
  "key39": "2MTZV3Shcd3ea1hivP5ApRJMSxsuQHkhRw5SLk5R4tV9aUJXLsoubbgSELRrRyycvSpKxeJ3UAdKDxx3ghQQSssj",
  "key40": "2WPRE4YcSPt1btgbvwwFw4bR4qAZVnBR6rjQao9TvaKFgGkSKFSAgMbzWgwV1aByLNPtRXaJAx3nTtfZZR51QX2f",
  "key41": "2KSR4cPYex3Gz9LTTiyo6RGYSH9kT3kdPNvoPLiF6NfJeTZ7jt1pBf2LVbLEtZUJip3EUChcht7ivdcArxGLWznG",
  "key42": "65CNvQjGXvKyR7E7rq9RTWriwqbrkYBBg1E4WcGstTQPuCUEhbwZVYsURDDzUQX7eRAxMi6ipkMWFNQZ9LJ6YUiF",
  "key43": "kXCQBXVLUSmmvNuP9jmKnWvk8fuZubryB9e6x8MAdHBxZJk1B7RvMA5WtcZ3jy19r35vRuJXygeYcSrqcbn4XTU",
  "key44": "e1qhACQqNr5dW2yyTDTUSw97XjCWRK9pY3G4MWUzsKJdFTUR2KkpsxiVMzQPZukTQNMnJB3JLppoRx4YiwzqnfG",
  "key45": "mbEccMmQprfs82HzMEnEnDT9EgCQ9w7yxTy2MqWCBuevAnNtjjBhSjXAPBcCwoEiL9mrqCTixVpWxQ6jmHyA8dL",
  "key46": "3MiB6T3Je2GUUv236UBnXxN1Jv68DTjpoGtA38SiMH3mZpiKYJ3iEHM5Z7KP2DKTRGXT5ydcxW9Y64Hfh5yKNJqZ",
  "key47": "5nQxZgKqZuAaCdEqn3566Xwi9fjESH1txAncauDtKcsrjoZuUkkUVA6atZeuRzGpKVnDWRGixo6LbLUc5ZNatkLC",
  "key48": "4VzdJwFpsd2YNRkGR8wYXiozgXcHUbvuHpr6gJJNAvupiAJg3FB8RvBQ1qWMVGQK418fHTjUac1wbJiA7xKumwbK"
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
