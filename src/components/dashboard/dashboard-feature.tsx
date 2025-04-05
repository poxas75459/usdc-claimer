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
    "jyCmiNmWtEB3JxHo6hT5SPDWZVsYFE6DTyw5B7R7fNT3nAyDczKfCs66hQY8EiFKCVS5hBe7PBZLvd9vZVjwsTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mc5BamTRPQnC4VzR6ovUCJ9QHa6giWxgZ5rHSrj1pt3YdNAf4To55eNrPHQqA1BG6Eqgp5PiDWfow4mVgLjzkkD",
  "key1": "kkM3pydXq6k7dWzDuVtYM6wp1xBPRTVCrBvyu29yHJsAQgGQAqSyg5LtFFBcvRsuf36TMgazwiGRwz3oKuTG3bf",
  "key2": "BPoNmaZFfrAZNf1BbgSP65itLGbAs3izwvjrKpFX2KZK47JkQyMujd22uqCJVJ8pfgGUWxnXyxsnY316HQvNAwo",
  "key3": "38gKyzzHMmnKTAu7afu4wRNQtvzB7gLbfwnYCZSGj8ubB2uFE35cCFpQT7PAzCjsBpwW1tKkFWFPqH9jMdTQGt3k",
  "key4": "3vU5dAc87TntmnJNpPP43kVZ5h5DScgpcCGdmq6qyf4fQEiaXo6ypnJ9iS376rMCueuESspWnN1KvhVUrMWrrChA",
  "key5": "2ogoqSZeAQJy2kA5RaykRWNTyKegA2LeNi88mvSCfMvksQkJ5TtVJS1ArVJTofv4AyXmudzZa4uyYeiU6iqdirtC",
  "key6": "BoowvmFJK5qjEDea69Rd1ezKYMSJk2gHud1iqEE8UHcTwKJgy63hBz6thNZD1vsbL6eAFmRbmpZF5RnqWXRpTvx",
  "key7": "4WgWNLsS5pcdo2jTpYbH8CKyoJNNBFCKipkDr4W4JUMtrrBwxpGfSB4Ai53QGpeVSjdkGrqegbJmXB55ZsaxRHjb",
  "key8": "5iyQwmEFiZN8UBqLHB7YU4epwf8NuVMLPeDcWYUJ3p8hxxVGQKZ3pSPpBuCjPPvNTuZ7gd9NRZswGzL9y7zoZMs3",
  "key9": "5DvJ3EJuMd3RoXEaRz14iKziJsUyBtXmx5KNaqqVV76ukLnL4knciiALhHH3GZVLcAy7HpcdxyMniN3tGSfZg7cs",
  "key10": "56Z85cAACMyVPmyxrUxFPTWo8Rpv13v3Q76juc3dXboLiaGrS4JM2c9mdzLfgTivL88smcn6FHRcY3zZVeuGLYqx",
  "key11": "4xv5T3EoJNxYDhS9Re7zT2PczYsPmBnapFknJSakUwZQbmCM5Ev5FJqa3BGyccFQG6wV9G1k9wD7uAWKTf1xtCoz",
  "key12": "2L7z3gmzY4RpKgvg8xTvq8sB7KjQ92eJKKPAXd1guonUtBRxEWicxgZyvyFeUmkxWo22ikudfagHoj2xtSN1DHVB",
  "key13": "3i3V7sLeFNsxivLN8zvbfDxveaE3bwSStxmqanVwCti9yRM6M2ErGF4TjehsZJCNa43wG2L1UDf7Az5aa1mcb1mF",
  "key14": "3dkPVpzR4rDCqnLP7UFQ8GAV3nzgUnKhMnikxoYRQT1hBQ9VLTXdghrxP4JHn9n7ZSKtrza3UqccH3xUmFSZPwPG",
  "key15": "4DDgxHkDwhTDu9v5fhfvpnp9HEQjGEQ9kHdtrLRXbUgc2M6gxB8uPcvJT2dPDoNj8TUSWmL5LfSbvDjYsBob6bxQ",
  "key16": "3q5HoHaGu3wzWJdH7SnPmG1dCd2WN2YMGqKMruS6wvZC1vvLSgKnyUPWF3dLd4kNSKrZD36UhVdNXo2HJz5e2nMg",
  "key17": "1y2qs1QeJYhiqAd4JweRPdL1J3z68PhhDovXT3sCrBRa2XYRK46478R4tAWtmHXDjxFLM1QDkYhTTpKWiiSFt4g",
  "key18": "5XVvLn3TnoozL7GcwnSCz2d8yDCeCKt5KJvHvEB3tSt5tTiE8itfUz9H8GSAZVVv8cWe3vphaLrwaZA7PccRERqZ",
  "key19": "3Z17dVMQ8wre7cNAMY8FqA4cyPXBS3G9fEnDfziZxnFCz6r51rFNWeEcxAGgLN8LSwAVDMuneZaRVepmCkAXDVGz",
  "key20": "5y4wTdWDNs37p1vNo9D9unPkiVKrc7LgefdaLbwq8LexJncKFCeuEHZqKU3By8oreTmBtegBuY7oHkdQAfftW5Ta",
  "key21": "3DF5QYHWaF9uMg3zETcDNavd9ii4EA1KJP5ZjzbApiB8Zyi5wKeKJqLhjpjEWA1kpjoFUXMyGfUqku1DfJsQmd28",
  "key22": "3aKgnjAB2zQJiwBuWgudeN1sRQ6SKALW67vmm8Th1Zc97iicc9RXgmL6MWV2qty16ZHuj8TUVmANeJFy5U6hJwph",
  "key23": "3tbDwZbspw4QMAebjaUDLV6LAcssJWNRgJprXnFiP5q5wJzFP4rrF4VdYqq9QNM1MZdyBpkxsQGtgyHEUt5LMPYE",
  "key24": "3bzo3rvDr4aZnvwGfJc8De96BvMgfszTtfVnkwDvbRUVtAt3eWprgAiVy59QcBqRRNnLbG9Tr5mfLoJWxGVfcRYQ",
  "key25": "2wvCMkWdnXPFZ6tuLdDgqW9DezeMD55E59oVknLQ99ubrWVSEvDqZH1W9mb2a7DU6BHrvfwSV4yqboXASrDjTbaf",
  "key26": "4PKHSB63KcKz7XGy6Zy1YGtiDSFNnT1MyL6nEbMKytsmzb2yUFtQoRSSKkjU9cooDM4nyJnmNvwS9MkpPTrLyseh",
  "key27": "esQVKuwirULPKGXotem81Q9KGikS62rkDtXiH9UptGC7bedDgyG39r4ggKUcdaDDFQMmMhWZWwjYrHDCpBBf7y1",
  "key28": "2JmGn8MLyo5GojKmGXiUB4aptgTcjTUxzLT4idiVpp9Uv614gjeFHRwgMGWbFyfbpyjWf4yDqbmdSjGDFTnnyr3K",
  "key29": "49yV2xaSSx35EdAtawmtTBeEHbfz9Z6XaYo3bfMfJStucQzoSoTfHvSr9CMWqMspHTyPJ77pKfGZazuAkNxiBH8v",
  "key30": "554J9EctEDaoRy5D4GAnrkEwU8gdPiKPobXWVE3REcMnvemsUmVQTfQAwUotKAAkFtVmpu3WZ6QaNuGoJLC2jvrb",
  "key31": "26fXTcioEFydWcA96vbQodSmvCWpEWuZ7pj8PQNzUeABLyr4z7uhzBKtTMviLELQMRts7bX9chRugkagsa3Yv3xw",
  "key32": "Whs9x9FqoK8WuzNWXASSQzW1164iXburs1a2NMTjdJZnrW6H58QHa4EDe9waRG6jA5zmYrGMC3VrMEzACkwmXyY",
  "key33": "5pz5VCBs5YeyDaD1SC6RVBJvNQ4JmxYRPmTF6zGpUMZ43kktb8aqgCErTUCpsg2vCTqFBhFU85qHrhgerWuhB3pu",
  "key34": "fzCWorZbjggNa1zoMun75j7yxHy4nyfwRtN5Y41nJPS5ueZ2xgBqUBNgzR3gY2PiFMJnwR1rbMrkWMbbacPydTh",
  "key35": "42XeLRadpN2xazCShDBPTMD5ZtyjLDM8ibp6GK9RC6RXiaTxUZTaSaWMUzC2PJ7VrE2QcQyDALHohFQSHBZgcLfz",
  "key36": "4Akbm44u2u1FTS3LWYv3zRE8rvgMaymPZ1qtwX55LMdQja3yirJDqwcqKHDbqvKJCc9XP2ijmwXGc9QWaJ92MRjm",
  "key37": "2bgEqkvAy9VAwNNbWxceJdk5MsTXNMZTq123HCrzH8tQULEuKi2B4LpUB34m4WW6ckdsg3M7JEEJiKo6epHBSFby",
  "key38": "2TjXcXncSbVFXM6ZUguU4JxP5Qssnefxz3rBtYL4LKfC5keJhxKcpbZ4aryCxhD1gBrkqPLySsBkvSFu17QwL5aa",
  "key39": "3prLARJpbjg9XteLUKXJ6za11hvQLvNTeDCNt4UJTDghZmKPjns3ZtLrgFkMAPt6JrXfXafz4da915fCsKoEqoMp",
  "key40": "24sp5bC6orVS5DGz48qPw7bVZfrANxjUEZzfs1XrxbrzTtV4P3wxpUcDC6L69FEGPtruhszPrmUYG6CE1WPiN55w"
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
