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
    "59gp7pVzk7jmLh2a3sqVFMLE1LYT5XkUmi8PRS1BHZV9SVawnFPWhU9NrttqoJVMxHfivjK9BPHmEAJkBKJodXbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ghb8a2KKSnoefeJbR1aSZPjKj4YpcZ4KT4Kv82UBaXyxeF1CEtVH2myds2gnzFQus57BBCFDMyQ3Ufj9dMienH",
  "key1": "4DaxvE2X1W4oPSRJXJgpnkNQ8mK7LL2rhQmw1XAZdseVJhpAvqXCNL3ibtgogGErHw7PdbfFfxxMcCAmrdTXJavV",
  "key2": "238u1JduaifFXVfGfoPvJF8B4cpZBFR6ipGHz1th1cm3ScS81RUrHWKuvmZC5aZe4gHA2BRBfjN8kJvz4YSUucpN",
  "key3": "bn6R2Z4CNS2JmADUfqd3y9regkZZtNVKkDQVT7h66CM4qkbLi7Q5NidKfqrsSAj4HWF3JKMDLfoaiK3pZFK61cX",
  "key4": "3jdK4ndGxGYd5jkTeqsWdRqo9822CYA22WwZLqpMNWKy756f8FzofhfYVdxjabKyx7npW6hCfUXQiVMo9gWkR2j4",
  "key5": "37uxqYZb3sqnqDmzNdJNP9PZ9ojHrzLZn1E6hEPDTvTsmuSGuvp5dbCCuoNztsBBrzCG6bKPXtVt1EYAYJMEb8ij",
  "key6": "2E2bYvw7z7a2CBVFBdEpJMZ6iVGWcKDEKSZPgXra9UETtaraFAyAxqCnNVsxwa2yX9LTuKzzQZzPtZiomno99wHD",
  "key7": "4kquu1tBWu6SzB79hMSm9RQ6gqEsqCJZCdffouU42WAk4C7WS5TdpypsQDWqngHEAAEdhh7WVxt7GbupZ4V8TGuo",
  "key8": "FTv2vpjrwerhn9FaQpdsHaSUMHitcwNEsjkm5dnx9QTWdQ8aAcsAkNoKcXEyYeQB9cRAV4jDQzKTiku9j1vD3ob",
  "key9": "322LBNpeBxJkPh6YrVbHgya18cZSZQ6hxW7a2Mxrr83BhhwF3XUZCG873ovChkZE6CnRogHQo71cNwK5TJXbBjoe",
  "key10": "5SMKBLQJKiCGotEABpd6tnEAhdE7ADC53tQ3gLHK1E4mEQWNzKvJ8A1fCZVA75RTxSdaPTL8hRU4LYc1pxMLNmrv",
  "key11": "4xjPy6uwsyCKe7wZ3jnGTDTN6Pvck4LHt7Cz2bPhv9YxV4E5QDD6NKM9VDfBj4aDscjmcaPnhu1kZtvqsgCAanZx",
  "key12": "5w3P7kPqgMwoVqckaZJUmLTRmbYbN6tB8kdS6TqReoWMofpyhxXi66yY2NRytdFFAiti2DucB4gCUqq2BdUVJUkE",
  "key13": "45ecttzfSTZoq8pf7aXaeNmXKKrShcjv5fcnqrwyEeZ9p8k4znqUhgE8CtjrFnegmNwCsWEcecHYNrbAwyMfiy9T",
  "key14": "Yc3VQMVwQcUT3Kdgj7GkYhVnNHja9YAkigYEbDd8txSjbKACCvZQbC1jT2397AoXrG2LF2CBYvfubFpVeSkmq9u",
  "key15": "3i5KLWqh5zEfHHnXuo67b1BAaXaJRxnfaEYNWG77WuubgodTG1ieFeCKv5dzf1fdyvRdkfmH5y4b8ve3MURfnKsj",
  "key16": "32hKxroxgF2fU1qLz3AxMuJp51AvdkCm6wKLmYog6aio1SjRAjZ77Sn59LywYZRhRbNqhhxYjWwSrxym8eqHo6v",
  "key17": "41TmexuWtSMUeXd1PSG2VnS1kWoF8QdSiryTSTZsoaKVs9GDyzkA7zgeqmLWxQqGAbLs1WJcMKJjUYJmPc58pEYH",
  "key18": "4syZQ9KM1RwEhYu5yJnFGyng4hQdLVefnvAn81yLsJ9MAaZ834yujZGngj9XEzvnCiAqVnm7oSjD3SFTxpA9HgUd",
  "key19": "5e3m19MCGshaE9VGvK3ECF55X41S2WUEQCneVt4ii7xdeRed7BZudHSXh19xagFgkkU3qDBGWsRywC6HYsTR3KdQ",
  "key20": "469ipoD2vSZJwYSZGSckM6x2rb8rQSRHmB9GYiABYBNoAzZWzgYSM1PtDFj7MwZ7Q2qxW6QxpYSkkxHUrFzzzBYy",
  "key21": "3cbzQTMqGbsVS1tAZtVncxxmpydXEi4S6jpgjpE1PvaehivArfnxkoJowYDHhjBkx973AZsinrSy5TnqUMcdJdPZ",
  "key22": "67Nmo1hEKuX3L8uEzXx2k1EjwMpBBPJZYiNvTtbfHvKP2L8nUV286ctP3jQkgaWmeTRKEJikHsVYd3g8fhYVCokH",
  "key23": "5PTEADn9UEXjwfSn9ZPy9r9QJUixscD1w631rfnkNwj92T4F2DaLBe1DCxBiV6vb292LJLkp1na4k9tgtV4UNpTR",
  "key24": "5kjkK9irsX6tKZ5L2QzUFfY6bVvvY4QpUDfQ6mNeYGz3u7WH6r5PAegVYbi2JeUmc6fHmtZvxGu5xQKGZg8mXbn4",
  "key25": "3CwwHEX7eaUDjjttkitNjnT3jqR3EiekgxTQMaYKuvBJ29RJVSEEStt1ZEN9wH6KYp3V6ogxrGqCA5oUwBJqWQC7",
  "key26": "3UjxAGWmMrfZk2QKp2VAZrxQqJaVGHAHhwXPpepxD4XFrK9K2pbCQQFPyWWVCMNg4tcqLPcXGrrdDb2yHYLhYzJE",
  "key27": "5cpCwWq8zmNhZHRmStpsCo3f3SvE7cCmHgwAHUFQaorVoyQFVpRbtdwcBdTAAbE4BLYohmTMVA82YdFjkA8Mzm4d",
  "key28": "GtGB5DzDRdWcfhZmPY9HaV2LV9KGexPsBQ5yF1oW9VF3JM23sKotvR1dgtfYQ5xxNi6tbFojS7XEKezsu6T31iE",
  "key29": "3UaMEmw3YPPCgJDGindA39arsm2repebXHJn8533Bk9suPJx7f3tRgaQigY5SkMgyqWT8vWAcyuvzx7nfaE9Wtp8",
  "key30": "2e7MTe9RKGSmfsnALkQ2NwFsFCQAZQWATDcNGuU8EXC8FCN3Vi3ZN1Ly8QkHUcQZ5ZKciD9ChZ8x9PFZy4Ma8ZQa",
  "key31": "2En7PB26vbb2Uxvmn3BGuF4VbbN3DNwMGqZoHMcSyhR2gVB8AMTqauAkAbDHPwoQMSQ5Uo4V7EneXTW9M6bGkVkY",
  "key32": "5Syw4Sk3MVnj94kdFkAuHQHF1E767i1gLcJyxgbDvHPVjJkoHptvTbNBA1SiCLrzYCpab21Ke4P7QWEbGqAz8737",
  "key33": "3XYacYznGacwAK1fdRGauLtEVST6XJN8K8BjoJLksvvK5fppvxPYAQkcsRbPM8bzxti27oAhRrKjFrxEcu8zBQX5",
  "key34": "3BkUSGiXxcGaHS6xCGp3ffrBLLt9wdDLkETqZkwusa8aYVU2Jp8sQxdeAqFkmJiGcFHCPFhSGbPVfSQgnmJRTFeP",
  "key35": "2R8sQ9Wnh7MrpLHc9QFRptyfPVfY9ohjirLvsS87mVxZpJv7sFoiF9mLgJV2q9a9Br8gtGKecqTGMzqac1pBCtvK",
  "key36": "258af2cFZ4xyRCf4j1dQNq7xDTjYQZ3SzYvNPfprZzXYHFmqKiDXyece5Vr3rqMxxKchaNF1pMZ8pCfoi2L6fTH5",
  "key37": "5cS44iSJJcngQ3Rts6MsoLyNSpMCWQdaReuS7RWi4c5tiogoFxQ4CWs2fY7LANzUKJT9ZBBgd9SqVLvrqZQNdqhX",
  "key38": "JN3bY2f7n4R6WKrXFcQDrcPopphUHGV64bCToQXq5akSCw45CuaaTKGciK5ZGHW3m3GsHWjFaNrHzsHpLQX6aUx",
  "key39": "45wPweC3DqUcSNutqeuRVtQ3h9HQ3xmiuatuzott2QEAJKb14TASe1qWZs4H6EfT2a4DUpw4sdMTTjgjjAJdVU6C",
  "key40": "34FSMRfpJR8mfTTGdpW8Qxasj5fu738pVpNnyEy1FrsuZhmaM4LCzGEwPrPPnXmgADaaE8Cs9NTUS4wU4avXn7qf",
  "key41": "hFj8qLTacq4D4tgVERLJTzf4fDTFLetf7rL67dYYti2TfHhj2LjKBe9tkU8Xw4joDvFhbguPS4PXKukGnN1FuF5",
  "key42": "iqps8qiRnzfPC8sRFYwSLj1sCe5TjvPn19gu5iK43VYQxYf6KgXpDLcYhAn3QbcKfcQqpfwWNGXGCH35WNLFWg4",
  "key43": "5SDTae4iy7EBiso9yzz1U9zUkeFgN3HPVUQnbc2DEYCoMNR8951eQtEdfJ7cxqCEw3ceshRGmBwz7Di6FX3c2RrK"
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
