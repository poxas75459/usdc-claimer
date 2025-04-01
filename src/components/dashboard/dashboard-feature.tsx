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
    "BubM3pDVTcJs6m7fTwtHh8ousQYkGj6hmyMM6zzuBS55QwCCpR8gTQZfVfAbKqjo9BWRRZwg36q33Wey9hWDMR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orLHpg9rR8iJMQ8pe46k2bVcEJ1ix7ZHogTmdEG2Kgu2g3eb1nVrAZZHk3rWPvxRMqsdrdzW98FNUDjG4mVQa5w",
  "key1": "4GhJcud64ZGVb4BSGCXt71RdUGvEF7XQkvw7SdDWpZqyhpQRacs7eBtpvAFj4nDFxWm8q76ndG13SaaevJ2xy8G5",
  "key2": "4Pxur3QEEQdW2KiW15bjzsKWYsA12d3HHJFWsCkNcFcKJuhN9eR2quEzfpGSJXDvRw6uYtxJwhwAaJBu9VzdgPjC",
  "key3": "5ZabG6QwVMZyNbG18WJ7PSguGBsfUTLthpjFDzrzQedxQFrGEZiA2ksfqtKizwZ8RnEc1nUUYFyGiGtRqMqznaRM",
  "key4": "2Zt7gsyBFHVyTSE46iLeKU5YJv2j7qpRGZFjkGeoj38g8wZtAzuas3EHxo7uqUdjQskcwhPpmupgQQFH9vPdRhS5",
  "key5": "5iXvGMjNVYfwDXWiuFmCkspfNVM4mdzgZcJ8cZ7yA8A6P4Pu3z8vYMXVHkHJWePb4Ck4F9xYBiEKA5Qt4Pdybvet",
  "key6": "5izqiNruMwfjXjF3TSowRsuCHngdn3X1HCcBEeEpSMBznbNhoKm2D9xTy5cgvnAreKoQYH3bknD1r4J3SbjEJQ3j",
  "key7": "5X6aenUdjMXSoKTghYVGwVDgiNuDMUr9vpx7FY2kWkka7ogmB3CZP8VQK5eWr4EqyZyUYWvP3MG1qSphGbhyTwKC",
  "key8": "2C8B9sT7MWYECxyNn3fPu2ePfXxytGdrA7YbKkAzoja9yKZHbqPVppsYr7ycmN9Fc4E84waZxRi7H6tZPynaSAgK",
  "key9": "5woM4M92JpNoSbBpzpEzr5rRev4KSUSkw2ceBU3vqiSdckMihPJbgfQx3VxyjSbRjaUCX4REJYgv1DCZytVkEC8C",
  "key10": "5rbH3QgSVCwWZvTXduhDed461Pena5ZPYeJzvXHMEssMD81jQiheiPHqmQDFjKkFrepmzdTsnRMJsyPKCq3cYR1j",
  "key11": "4pXfSEp4g9BnfXkhNBpWzGeahuGxRGZadYY3UfTtFsvPeqgiFku53CSoscWcbUTmqDkQeP571hEeY6MWc2suJymX",
  "key12": "3V3eRmiWtuXYeXJkrcQQfXpWZ2QMveUDkcF9pWGaqzWmkRCHNBGfabnWku34w3QLwrUWntyCPn5a2GvKeLhWnktL",
  "key13": "7Z2prWuX9knZ59wJNmqPADCj8NqXeE1FsMFN1usEPHEoT2JxN1CaM6AczW7r8tnVETy15P7zDdzo9Q1JuK6njMU",
  "key14": "3fAVDNycke27CA3KEziaAQ4h3fPzZiu7ErLfqJa4ReYvPfsVURwKvr52z2SxqXcKLohpQCSrN95gnv24GzSXo1oQ",
  "key15": "2XsJ2bMSNHn3bUWhVEPidQBLU6diR2iWcPc7DpYftEFLtqcREQ3U9N94vuehLj9Gkd4eu7ajgY5JPyCFzxtoPn6g",
  "key16": "3NAT91fcfZm6G84BYmYDhbtd3cdZRsGLwKNC1sGUQRCuPfGRdRcWGsWg3EDbaKcKba7xSBpQS1LhCQ4FoST7F4U8",
  "key17": "bbXPXmc3eFj3QwC8zCgibjh9kjzSB43fZXtBmcKJZwH3Kun4gNVBzbdrxyDrvoMUqfmafkExnfE8fbJqxyiKypT",
  "key18": "3qCvAmC4jwRbQfTqG3VutxTDfjWatemyGj6rbtAbbygBu3CDTGL2QX2djLurapJMfe8LXqwMug25YBdrJ3QAyG3c",
  "key19": "3sctopuAhr9UMmYdN5A4YFyM15cRdmDo5dWsP7ENQb3NPcpcD8jJRmFXfmCKzLXmN82cwHt9rg11k8Trg3NCP4Wg",
  "key20": "65D2Wuqdsztkirpuhxy13nKgb4W9EgfTFPsUnnCtKJLHrve2vdN6BcPjE9TLniwZw1wLV3Ty5AXafbKf62xRfYed",
  "key21": "8nnQfby8QR3LoyZ9D54B4fY13jU4KdCy7b6hKJ3B2FZXDqJXkiyPmMHFGX82pNZs9UyMogcGqYPgbNyS1B1LFvH",
  "key22": "5VmFnjUUKBrohM1JdzgDWeQ4HpMp2bk1kaZqRvTmZ8JbY1EAtx8EX54o6bdJWik5mKxFtU1ZQJHVsBsivoomgszf",
  "key23": "5eHgG1WCZnqmY4Pq8XSVfeoDaKQ655q6ST5ZQH2DvtbmyU8LgUHAxmxHJ4vJTU1VFkvZYtkntzRqQzJTjANSy6Af",
  "key24": "cuV7uoSyArCaJmEcjw98aXK8hfk7M5wudcx9w6qyoiCZUz1gCLu1RMTEoECH4E49Z4Ag5FhQiVDzBx9geweVr6L",
  "key25": "5YewSXibyFnRdwQVVqv6Asff8jL9YDGrvDt6WUw9AbJgGt1kyupJuC3muAfbdsTqnj1RyBd2fAfBWw3DwgKGv5Nz",
  "key26": "2BVrhRk7n5DmgaxJLshs5W7mHL3qsnMdi5ZcdAWiqb5xcVk61UWwfaDfp7knq1jY4D2V6Z48f6b391b8HxW4u7cr",
  "key27": "2deodWkG5Fra3DVNEgCZFbLivZtNWhQWmvrfD31e7APHQTZ8BXEx8YM53Z3AQGcLAqc8FBCz1SZkyBQLW47SxsuT",
  "key28": "4xmyqnsNGPCwCx4m5LR6k6hP6UE8vQeSU2E1Nm2LT3hkwmq9V5A8UrCJJ8mCmh35wjrvwcAJ3miZnvceFsQEqD4z",
  "key29": "4xh6HuDnfsTLYNNCMX1KtUEAKT15JHpdiivmiMTgGsuZUtMp3nozNQKm4kAYjNhhE49uPBfi6gTQAGKJfWRi7yk3",
  "key30": "31657y3QmzrfAvkPRgyTi6WZvoyL3KnydX28qbADKvWLswD5HU9Jiy9Q58FQdJWvSWFYc56Pi1XhdBFzZjNMWhbR",
  "key31": "5vgYNWKRchXQRd1VyqwieVtrGf72bkSrP1Rw4fkhuvBwnCFZQ1MbBZcAgTAaAmhmU8a36MTHKuDaoHs9Jy7NfpGD",
  "key32": "nxu5vVWXes3r8QkhoCs8unzwqg5pqtggkATYBLotRrPyYEsgoKHkYTz696H1CWGEguwxfi8X2BhYSv8Pvr3pZKz",
  "key33": "3ynv1Szk3NfecG7E4zZTAPsp2UTZYsjFXDvQ6b8CpcMTUaTuMh2HpkXXxpC8ynERCNbwzaFRrzT5ZhWsJGF8Ka3M",
  "key34": "2AQaYDLEF6HNMd2aCDi9j6VyJxgfrpZ8NwLkWzys3XjcZviGEW9AKfsy9Zg4n4Gb7tQYxh95wmvk6nNEFh4eV93C",
  "key35": "5ym3uMoLo6RyUtfb64DVdqvSEey9X3r5hn835FK7sqEXSSYzUBPsq1xfBYYyF5MpPrXHvpejFfKZ3uMAhnsdtbRT",
  "key36": "41mGZRQwxR2TKVprCFLvrLAefEZTdhMkJhwduWxqfoABBN7XjWyrSSBK4cQjJjbiHSWL7ws44cxh6E2ZWzwtgzNq",
  "key37": "3KPYC3TKCF5qUhwyPfRrS2UDsKbsbeP1fyn8v5KKTkYum3wJKj6GznH7uC25nsg5JFqEuKTEh16iWwDYohkA2Knk",
  "key38": "5HXVPf7Yqfu2vr13KYBYS7zkGLCUWo4N6BzB5ZA8fvEzaZ7oeLx1ht9F6bwcALHDNfTDNWkS4nFuAZ2PdfSkzb7s",
  "key39": "5i4Un5Tf2Wx5borkfQcHeNnTnpTikXM5CgpLPWxDsHFyjU5VQRomJDRaJEcjh56nJ9r6TgZzTo7GbUidVwpQgce7",
  "key40": "3WUh5K8o6y6un3sqbShxwvRFv9ZQg4kXWk7nd6zSw4ozXcQs55iXkH5UMGa3Z6iXJyTDBQ9ZxUx58HZHAKYJE21e",
  "key41": "5CR3cDh6Zr2k3VVFUBnz2Jm6irsde6WJrQ6TrFARcez3m76t2ppQXGC3Mm3tEjaAt8mKNnQH2NYae1YJBKdy5jEQ",
  "key42": "5CumdKCZsrC2ofpS8kPLuFhW9mad2pxBQpAm5kfNsGHmZzUqV482UCdi8J9wuJ31xoP4EYEmAtmbQoRvB9pCQTGt",
  "key43": "5CCENrLTQ92BXgoDzxAv2uuwrYof5s6UirzJ4v16J7nFEamyWdg5p5hedtbGE3Q7rMg18J4CRuMtYutjtUmHNw2D",
  "key44": "3CoAWY5L1cbdEGCZ7jDhjB7xeqVtVoUH1k6TZGq6eEgtCNYVs8hPtSSaPumS2ndFUUWBUYcQJX5KRfyU9aXghvmF",
  "key45": "56fTbZQGTXHYXVgsupmqDtfiiaYEJLg9rrskM5o6Z1JUqbAvHawDC3zupPqNXx23ueKctw5u2qyTQvoxneqef8SN",
  "key46": "2sxb7h232whcFTWnsGMB6wYFe34wxyz1Ggz2a5DhYTqEMKzVsZMPL5gNEvuqRZnjnwBGw8gXWeQWgz2qNXgBGyN6"
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
