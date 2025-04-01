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
    "61CBxscG3N9eUwmdPh75ZxA8PSvjBbmur1QQqHYUoaAj5NNazzVjSS4AXQPpuzFXLdQujQ7hwmHGXZpjmV3KwAMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cp42tqamPR4bmxRyygBQf1kgCkUhhZEqDMywGvGiKNtm9vsXcPmUGePHPSHki28onYNxnq5vPRDdzdGoNt8GoR",
  "key1": "43WiEjiZFQETgvTiDicAQbm7mzL8xKWCV1yaoVqou3MduU91ewhDTZSQJyEhkYAczzrfxpNYFvdhgGiresMgr5qJ",
  "key2": "2Uckaky4RQZHdJBcuXpcTBr3JXLGLMQ1mtmTPtgs7dmELdL6SHvYD3CeYHKmtvxK7UT1fSs56zuNiCtqFycsTQXD",
  "key3": "2wgHvkdanbykFUknP41mRi6kfa4B5zbwAWoz2f9td4ir3xJZtFB9ciw8MqZhyTYrKZVLqCNRFiNDyRxGEDdc1EaJ",
  "key4": "57QJCDTSMptLYScsG9Wo5pwZ75YScR8vP8UmZeTFYKZBZqKQh6DntmjK8S2HsraVBwxmjH7ZCYZxzwkzP8KjQaAT",
  "key5": "RFpmfHh86FFzSDHAgNNXCw3hw8fen1f9diyrWw19phko1GbpeH8e59XseqoYmMVR1sidqFNzTzZv7uxxFX8V239",
  "key6": "2XNbJcbH19MYEHgYjMJ27FdGeTXmheeUyrzrEmjyhQeAE1DkzTJTvtfQgzT2WYEYn6iLkVmLJSqxotZZxtifuqjM",
  "key7": "sX2BV43VC4usWRvguA4NP9Hz9AcBcALmvQiKWj15CN4BfUQ2F1rNov4tPD2Xx6GnCN9oynJPdDTuBYas2GSyL5g",
  "key8": "32fxMJrrhFaiM8VmjqGjWhZ8FjUjW7S2NW4M7jWLxhqkJdLK6siUzxtwnccaurfa8QyZhVGWjFE6DsddnPbsMDNp",
  "key9": "2bxA8884TLb3Eigudc8JQqJA84WkutLgunuPZKHakmQwUD4Wq2yy4Yu9vj3dqVNEgsmUdTxSBgRtNPWoeuwVgKp2",
  "key10": "2pQqRd9sNfeP3M4RPAc2Q4Fz51cfu8cr6JB2N8TfDr2jb3P6w8fLLeZ6g5apLuDJrCntpEDzsgkxmV1zDcHcgJsu",
  "key11": "33LDvuXD2RRWxuUK1W8TBTwgQ6xdxEP4hNXCbaQF5WdmcLmeW9S2g34KxDp4xgc7aeUAVbgmbQoFyHLMKCD1PReT",
  "key12": "59JwfQirX6HL3Zd1W1wAfNxuTsHv8HMixX3MKTWR8Ko53yAL3HzJwUDL6FswtHAmShygc8GA2AThrAwJzU33UL9h",
  "key13": "nMZaHV8fsa8stTt2fuBoXYeEJ6NEo58R2FgMTjzdFNHVPB8RqTFALU9t81KNE1RpavaRJSUR2wXPFwgfhABU7pg",
  "key14": "52gyxLrHWmF46Qj6doQVkTHAc1bLb4m5zuaJWkKkN5SEZVdp6EDT5X7L1357x2wKu2hcLU4aT5L5nsmFq5z8Ha1L",
  "key15": "5pk39QLodjLLxPtT2kedoHhjiDtVjT9GMFHXz8wi2FvcH2VLiSTWMCBsvvZqtgFJ37WXT7jJGHPrHGbq755LAqMH",
  "key16": "7EVJghRHDbV6AQ8b8DaZBtBfQZnE7Wmff5nhzpqHUDtMEkD9QSZVFWpVxdMspCWSbf7RzUuq5c3neDw6kYVThvQ",
  "key17": "5wEMdcjroymXuCE4SSmFQYWg7KLSGEJoJdDgTkCkQvVv851JZqunq9eaoCnonDPz6a7XyGT4x16HWxS2we5qmEDF",
  "key18": "SnQhftTT5Us9mjynakKxgNDgXvVKAxihcRtEntLtT7ZtEsFEh67XzYRLCZgghsiL3BRJN4ZgT3q7duApAe4TzFU",
  "key19": "2vwaMroevePjsaMZqThncoekW1VNXZuM7QRxfLeNyKCNw1CjMKBbxLgSQE6WCEF5PWfZ9Ueu99JLRfAuzuZ5JHmG",
  "key20": "4HGq1DcKyDRMC6DiUWajPZzWZsMgB4BnAwSXBgTdS8G3UG9SgwmyDAetPjnLrPHQBkQtTKZnDLHt81EZwvt2Xcn2",
  "key21": "2S8AquJQEWNzmG26Mc1QwrZn1NCQiqxABccRVg8JgkAQ5yS5vmvdRwVGpi5P27PFSj2naDuAAGoGF6YS5EGqFyqU",
  "key22": "5tcG39kjBScLSYknR7BBLsMmEhQ3jQx6LE6EkP6ioPozck4zUsnG5zGxSSAD8cGm7M2u6TMYEbqHNVbB4rP4YHuX",
  "key23": "Ei4xXiBZQ7o6Xx5MZPkPMXLHnANAghTjcXBdT6v8m9GRxXyupWNy593o678HMKb4EszFsYAmu1He38k9Qp8WVEs",
  "key24": "4WyPQqhYwrQ5y4M59qhza5WT9bm3nHeA1Gd5RA1NV2xfJENXZNRENkZt9yQbFP4qf7maWEfshFAtSLyYC49wTz1K",
  "key25": "3ANYgXWN4v8PamGUrKUwPYzaj4xDGSAL6ZqFqKAa2aLap5TZUJDRFP3QRMSUZGg6PUvyoKVYR6z8BDuRqhAPasja",
  "key26": "654FRY5pS5bo9dpqgr6Eqct4x8MZrPZcNYjBEaShTUpYaFgUy5s4TqUcmVeKg4s6rkACUGjN3BaFLsNSJdkE2ho2",
  "key27": "65qQruhpsNRAuhxoa7NKGeFfzJiFj5anAJk7FQr8LA5zb8FczsB5q12a3EQrPRzSWNAe45NPmLD2YGN5e9ZJ78tE",
  "key28": "7PcvqZBnQzswCBBHQ5yWf24mZ1puzhpFJ1StsCHvKjaCWSwfo5MaaB5cNoffuRgaRGVX6XgniKuMQB5JU8sNdh1",
  "key29": "objJqYV4WESgCKAoF161ESjrkR6WK4bUu1Sp3o8RegBhkof82SEyxyTcZpZAciQFiU8LXyiSsbPZ6TjNj3wpKo4",
  "key30": "439yhwYjysBd8uSsxaGHsHgNb2gXPg1EUx45jqwo8JJ1obqqZhRhwxyTqv9L6TekfPCr8tP9afPqztQVeHGAvsu1",
  "key31": "2oRjjXbk4cdmjGVRSVS9u39bSMRLmCSVeHXFbaqWhYzyjwBHfvX1PbB5L6NtbudrBPD8rtziibZKVsoaXdH7JuAX",
  "key32": "3XRQyvGg48qZywZaWsh6vMzAr7o1ozgoKnpgSYJPsZL2UUcUKD1S1MVnYjqr4ywgVHrsYqruxxfHzuD1c8cTxmHZ",
  "key33": "65u2Cswc3E5X1NsARj9XJzGkUT1yMhqYFrFaVCNBovsgg2HksSJ8ArbVqWPZBFmdtdp1F2rPDj34yywouaQQLx9G",
  "key34": "2u4zQgzuH5GZzFHx8a52QKzT6vZXdEUwsHUg269EiCBriXHgFSGC8CPHTxG8ZwWDqjVo1s2FwK4uUJTV3D4yqMNK",
  "key35": "4BnP6c58ZRxgvYX3eCxpiGtjWPLriyEddH7Yjx8CB19ygJKCMVhGWHsDeJbZbzZKjuFeGbHGiE8L3Kr38s5fDGqW",
  "key36": "3EGpZc9beYnfWFgqkkqgXSaedxicVekF2Fjw3D5NBQAMYLx8Nv8H65qYjunK3Pko5VXccDiYkLMQv3cvimuUf9eg",
  "key37": "48Tntb8P8i9zLVk7EPQWaG2ehaMfT6YfdkoJzX9BVU8pzoFuEwxZuAz83HZa24UK1G46rukEkxeQ1YJYVGNQry3J",
  "key38": "4jX2ubyW9EVrWAzz5SPTdoJz7ZDb9D8bQWD9NHaN4u2oxQvkNsbdj7Y3v4H9BDT32aB8oJCTPDb1MUVm7MA8fDAn",
  "key39": "2W36stkU4gwUczuErsGdmTUEEVPgbaZccD1NCLpQ1J17nu3CWXzo8NqpUfL2U7jXmwrhYdNgJLsAmW28XAvjZCdW",
  "key40": "3oViuVJNCPceLpSrcmtzpoMUWykYfTYedark9GQHt34UZz648tKSofu9PQCuJh9BNMSsPfoBLUhZzS196WgVSjJm",
  "key41": "fe9mgxCzvZhdj9LiFj67j8RVEBGSW62njYvawZGyrwFHzhaFEW2i4zgQSQ8L9nkgeyPFTpD95L6NxyDmfuPmPh8",
  "key42": "4wNv9XY73TaZpRE8xahUWvfFF9dusEVZowAMFEBeB2VuWDcNAKdd9z2BUDXXkmHVoAKkDZiERK8mv1RH1nPRxJiZ",
  "key43": "5ehrEHout2F8GK5fD2gTJ35oeSp9Lrp3bMtbT86Ln1Z7QZXpBv9duvK5f5Ktuba6uiZrzB2cqQVEet52NU8xRq6A",
  "key44": "Srp6D5utYK7Eu9F3mcaUe4RMfgbozQRgnCJquBCsgCfk74db8odAZ9YBNToC6oDCTkdG2BVXivXJbT4zeam9GPB",
  "key45": "42qpZu9gBXPAsyWHZCHLxjSwM2mndD3oNfbbMJkn8sFUVhb75ZDJTB2XVg9SjBrQG133SSunWYA4oBG9RYKFArZG"
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
