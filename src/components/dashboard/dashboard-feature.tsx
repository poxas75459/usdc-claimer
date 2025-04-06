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
    "2AKqP3ishuyfyHMaM3UAwtZwjJyDFPjQCk7RBzymgWkETpDUky5hCiZBCLKQDjP4QVF3XYzzaiGjyGpBkCDvsf1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBc315kfRcuqqLsHskHcZyFYhiKU1dhoCQ54sMLFo2soVXAC9auiYKGZ5EGsTYJsAzjivjjBmAwQKNYFKfrXWyY",
  "key1": "5TVSvXECLoVhNaFUqYdaZHy6txMvgxSsSprEkWt6FpeYHnVD6eSXFK1VXpiDdBomMbVfb7yLB4BZEASoj8aejbvV",
  "key2": "3PgSYCVhnvxR87KTYC2QK7ZeJWQ3H6iN9N7SPfXAMHdSr3XLJ1NfAoLo3H6uJdZZqs9VFMM2VBtG6VvPdATAZWnN",
  "key3": "517burVjqMTLp6cGFL4qQ8unwtBkDq59mobjhhKC6f3pw3YnrcdZfjkFoeUq6JZEkqoujaDWX1MnL4hnAEQdHSgk",
  "key4": "34jr9ojTMA8YrLG5Dp1zpXq4LUvfY7ij2fRQpCjDT5HrycuHNUyG2VSY8NdzPaQvArUN2zQXDLuGncpa8FoXc7aS",
  "key5": "2JecyYgarG5xD6JUZDcj2j5Fk72MSkLb5QZGrWRjKYTuJn45y6oRCr8xviAgM3pV7zcySD1i7v1eTxekjT9sEnya",
  "key6": "5goZRKLsrTVSqr1A4BxPzNyo87CZggkVDyuKTJuMoERDskcPxD87SUydygH1KfihhX4HY58wXzV946PYoHuHKxuA",
  "key7": "23dvZJSYAv3KXL7AqqSLtmxCfU3nxrSPPRStGisDQtHAx8XMLq8b1CEsdydHRSiXtUvxrpeAptRE4xZuveWyBqDi",
  "key8": "2EVAmwp3goJsmfYCwbVPDjKvSv4rhYZavHeWZU1Jy4wLRDRomTWGwLu6eZ677SGEDpaK3zGiJBgWiwZJ7cms8MuP",
  "key9": "4cWaaTiWZ1cdyMm22VktM9KqErXfY1bHhmB5Q6NfXFmteXhJdoShaLj2TuPDXBsAqjmDsSTjqARwe6aj7KexdzaG",
  "key10": "nP1z1xAdH2BrU1K6DYkQML2WwWAKCdLQZ9jzNCUAHpy9qgvAu3oeuMGLyvE4ZWBEVZLHoPUtcVrub4m8yQ31iEF",
  "key11": "3AW9f1rjp9pA3sbNEGoucepKUa7uGwHY15csaxHc5RoxdbtnNqmxtp9r4h9WLg1CWjqCF9wCTKX6hbs1g3xRtaME",
  "key12": "4NkyZDAC7jhDH6aRJ6bbYu6VhQLBVpqiuD3SJVbohWHhZxXvURP7Ta6dX4VCvWv7CKpdGCc8nV7fd2EjqFpk67Rk",
  "key13": "4kZCx8fubqVz4JnLr1tS1PhLEaotzDdaTNuoLqkvSghy52eG3WmJ2uXRe1RPZESDCZnC4DjnfhisB9ESXRsWyL7S",
  "key14": "gGSVm7wNrHg3ACEfVRDQ2NYRnCtxpY31C8ARpYAQ7VE243hgFfmf1xdqDHemtELMAkkTXVb7DdAnF5z4sKmKr9g",
  "key15": "3WiCNzvyPqu7SBVk9MforJ9AexcbcTcuQr6tgsv5YBssXw3G8Jhor6q56WanvNRdNsA3Zh97bmEmPhXWzDvnxSa6",
  "key16": "2qzz6YFxHLEx24LzrPHjioRLqcPP6UDa6wefZhXfA6VPCUhxwoD1DpJaMuCwPYDaURQ8HJU4PHTKzujxTyirWM4p",
  "key17": "4jwdXhJb7TRrJx2qYZzjrTy2PippVC52mo7VkJP2yDkDUKQXz6CwQK8bSk7vpe24v7un4AR1jyayjzRS7TEger4E",
  "key18": "5tL3Sx199Nt54Rf4DFigUZaKsr7yxgBWU96Veafa1tbRGCFFcfvTt5DK2tnQpCMAzfwvXN1rBpoQoX5tWGSoy45D",
  "key19": "xVVJAAcUJxnFSD9ooVoeikkRFi9qSkCpr1hQRSLqEWTrBzG5Yg7oZN3EKipw9c2iNzS64y2q4HVspmSz9mewUX9",
  "key20": "UbFuZn5TsM4YeaBS4aaHqH8JSwwCHvejhxe2fL8sSpJenzKzSWAaStmozzV2V8egxQStUmaocQMJP46QQLGSwrv",
  "key21": "2NejzxFz5RCT7bGmuk6yB1tihv2xWB4LHap4oLdjrTmiThtJ5QcyhwSsknkLTfxQBqyZjPgrUucqUX4tsrgvauN7",
  "key22": "2vxTAbM8RDAv8V3pfWQgknVHrM5S7fdhUmgPMiWu5J28W75UzYFzQCzFZTE8VnmKmwCEKig2kt5up11jQNgTGTHa",
  "key23": "zZx4uNp6jnZbmQ9vfeU8xdnK8X3qgAG4dsEjkoSAucDg18DsXsNWuKxZcGTyvaoAsZR8DQtc8UApmiWtQSDGF3F",
  "key24": "5fvR2NszmCWXqGqydSnx2bo3W9VyPSuAFR8uATZHgbyqa37w8rQXPQnzsYPxuuC4E2ugwypfZfY9MkHxmKy14YE8",
  "key25": "Y6uQs2TzKMsshdW5Lxg3p9n9FEDvKTDNW9kusWh9pKWfdF2oyjyPuAT1dsSAadpKUkoXjZPaeb1NGuBXKap7yxf",
  "key26": "5WLXRurvK4tHUsWBsk3mo96yr1rDrnThHRec8WhZL8FY1Z94g9qFVzWHxXv4JtFPNoXoGQHQKkhPyGUnVtfn1i4G",
  "key27": "2MtCoWczDQn2Ps3W533q25avycxGXBwkRhKrFwoP3qo9Sp5C7eUyhuLxo1eD4pQR1oBMfo6NJspg3qtvFZkSooTQ",
  "key28": "XALKSGczRiKsJ6mrtrxJsH9bv9U9VT5DZPJH8QoFXjZKY3dhQMkj4BJXeWC6J8KxSQNuUpNohUDHKoscxh1vD5b",
  "key29": "5Ke6ifWV7TXZ1MCmaotvH6qpXUjWgLaXyPbiStDdMbVeHM573zAvDDYL5A31THdNqaPcF6sacfo7RUbW5aGUv5TR",
  "key30": "3kqk48RCXMqAgAQAcLUqemeg5XHRzxJyyKwmvyjUU7w2JWjgrviUcMniE4qNNsNZeN7inxGDgHf7XgFhMjLFz7XJ",
  "key31": "4HnTdz632LcANyaACoA6XH7iKfF2er6jvFv1awA4MLCEyJpneGpX1L5863UYhVjKUtAvX4JshmTCRkqmJaxHdvgp",
  "key32": "2dh1amGyTpjWWabzxKX51ZYipppxWZvHD5e23Nmwbv5NxhDd6Hi5okhgjtpSgmkzjimm9V5PCNCfsZiUF5Nqbbyc",
  "key33": "5AkhbVumWrF8sCokpZyZYShjWpu9ooWgZya53MzMQJw3dm373zxy58rSziUNgBEnsjFeDWXKYU9aznutqnMj7eJw",
  "key34": "G43WoKNYyfwBu9crU7DZU1nbVsZKEdGepRaShKMkXg8tdCQ16nASeg5vSchZcRVsgQiBPEYPhxP81eDAycP2Rhe",
  "key35": "zGSWDwirGqbtxcYjXV7nGjNtCpnWkTv5XvMJVCuQzPeoXFTqfdRfvoap8Mnvzu8AYSTdxrfTKA1ZQqfKqWjotEt",
  "key36": "5cRyJ38CPAtXkB9cwShisyf8dTP5qQJtEvv5W1c8nEEp9GXR2SgWDT9E8LmgDxvuZpiDGEPH36pdxT4v2Qf8GFb5",
  "key37": "5J42p9C9NwsR3MvCqWQxXsex9iARy1CVSSfiVnGd8R9dkK6Zb9pZvsaDo9fA5PsULSozZxRQuD5DBYV9hBXgfT3P",
  "key38": "39NPC9prr4bqAR7uqLrbDrindpm4mhqhhcjrpCRcn7JPXzNkLMfRzQfsQ7zgXsxjHYvRKpi56rdzKJzqj8By5rwf",
  "key39": "4HEvcnUsgVhqpLSANsZVMgGaAuJw8ocJpbCTmpyfNcnaQ3ycnTvaCn4qNxW5DD7wMtQF8NqsB9BqFMLzGMpqFj5g"
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
