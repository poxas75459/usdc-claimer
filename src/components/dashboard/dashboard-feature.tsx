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
    "4U8YGRxXj4yBmk6SSLkyC7GtopetTmLF1CVt16B3ESSBYHiQBYiLBrK9uWoQTB37NgowvhNXZuCG4oiuWwRFqhjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4xPwRASFTD1sMEdppBnrhhvXFDTSbjuh85CdRETVbPvbhmkY3FauY7gALJYBFCFN1wjA9LiZPSVuE8xNLzespz",
  "key1": "5bHpMXyhieoCHT81vSkdAypBB3a44ewWCefbMt3jwtHF1NtiYU4sMk9SN2y5rxaLD6bREwFDLX3WRw99iiLAWHnw",
  "key2": "3nMwKE1zJ6pe2HXAUVGH5CH4m8yyUwGY9XxjqEbVaczBnQyfHUVBuFHQoL4YxDPTAnCNK8bnwke419EhczT2SiNu",
  "key3": "4BJKgi9ZPauAXoWum5j9mGv4FfrJKjqujT2eKpx38QrzcwBUEXTPhQDa7YutU9GvKu2VfqnJaoHasmU1ed5guLtT",
  "key4": "3TY7uQVPwyjtb828UhhhSbZWGKMDx6FPVQ3HWbsiQWsYNUwdPqwfq3UNyTiS3NngmCATLSynVCbhKMhpB7wGYexK",
  "key5": "541fRWfZZEnTHkpCx8yHNJe3osytrRHvmA1RWrXTgSJa7JD6qfFmEbSXkwdBm6AyVtF19aK9AnpLXmdwVpYQS8Va",
  "key6": "22PTEBTHJ6eETvdKhX3dnxhVVWuRiwEoirb37j3ewjahciCspjNvkXHa2YRoxeDsUFkBssm6X8ZCDM6jTBoaWvH5",
  "key7": "4MHEn5GxHhyyrRvj1M1joBNNWKPsddEFMLFEsg3dBKCqRCtH1v5hmhCJeqEXXHAmkx8ptVpayx3ExwH8oPUgtkq6",
  "key8": "5nPJdseRW4psz6zLf1o4VqGmNa2aPp1krZZ694A4LBEJ9wCmSXFatWMyqTmdWZSfNzHmLnKQxa9rfjzzqR6Zw5vC",
  "key9": "kabgYk6P55xN91U9CN3LWJ71imtexSDRvoxz4dRcHwmVqXY8VXcR4dWhUkusWJQjhukXis1711n2bNCGEGhk7DS",
  "key10": "29y5jJiSBuUERR4d9c5EQt4KzWCbX1DAswE3UkFC3PaFwX4g2Wc5Ua9J4sH9v4WbeqRbfJHEJo6Dwip6ZtVMP2Us",
  "key11": "3USQuidEac8MKBRNynGGsWRKBY3PetJMSEdUuJDYbKZsafF558THsLH1GTq1u9rTVYtpPug7gfQLZE3jzwoCsJZF",
  "key12": "5LQEn9PzAchArncecHg1ZYhrv37aUJwiuhSCFHeGtq21vmZW342v3XR4oa4VpdBiEpHUEQ3DGwL9DUMLHVLVkFzv",
  "key13": "2mFWWsSE8v7BxTmYojVDQcftXUzGd58ZJkcyEQS2uCC4Ldcu2Q116c43ymf6Hcpr6ei9QYopfQRmpAgJSVuWfH4A",
  "key14": "4mH99avzUiQikcEmp9BwN2ZCjEfwGNwWQY5LvoJK9s4mdNGQ1DxiXi6oZoQkaipx9Md57ZuziKQtxiyyngLRzL4i",
  "key15": "4ChbMX4tf6TLvnFNG2yKxMzV2XHwjdFiWwwddNRUYuZQ2zee8WRUpJyqVj2YWu3YKumugPfaCdfpC82jALSpV9A9",
  "key16": "ZgzoNgqBTkVAvrjnqtDUNdMisrer1r31da6Fvm6YUY35TGFGHKPhiF8KQD5cjxEKGi35FccmxfwjmRUEL5SPiey",
  "key17": "398HzxRyk6FpJkfm6Cj1jheJUC24gyZu55gPk5UH3Sds7GCRWAYccsXekZ43NTqFZCQBkS4ktaNw2Y9fGsiaW8NG",
  "key18": "54M8ErVF2xFKfGUWy9A8Lbkm4djmj1oW2t1m8mEHTatnzPrZ1C8FKYXdQpNtovvJdBsr1t3i4nEvHhomBAag6RRo",
  "key19": "5Y1MYAcStemDRTf94oMRCW6oU5HRutCJ343jP8TrzAueqh3nJeSR1WiJbwTzb5iLR93cCNv3khmXHHdDzBvSpN1A",
  "key20": "3VmXthhtioZtMD4yNZmGZcoA4j4NmymfCRogGdRwGqPGJBVQ2SNjtWWsbyXjZPVQpMjodaQLm46HdheJwQRJsyPG",
  "key21": "NdjnStEQAMjjRumJVBwcaMGP75Wf7wfc4Pt4QvLNk38wL83dLzCkUYfJh7oR5LMjoJDeHB21rJSezQobc5npEQF",
  "key22": "3MJNUZ1DBny3sVeeP2zX8LtLd9eNhn4ApWq4QZxRrV5ZDBH1twTvwoiMN9WQYumkEM79fmNWt3Mosme1cWa6iuDZ",
  "key23": "2Cmmu9oJcW5ZRxfZtTZRmdWcaKPJ15dHHmtWHrLGzUHZdYguQpNX7PQWujqTMxxCko1iJrG3HAoiGXURLNQn94Jk",
  "key24": "2ZEPbtB7faA7meQPSVcaxhNpJLZrtn1ikXz5FYzMbZhDJjACen4amSDMQwvX1FdFig1pPmAAnnLzLDTzEjsYTuHX",
  "key25": "5s8YGxX94o48m2jHQQSxEoCBVXpRUzoMiXYEWhiC82k4gr5aP2ovPo8pyTZRUFJUW6wSnskeSeveLrEKhjSkwrdv",
  "key26": "2HWyHRS6Xzz8LUfNCgTo4ngyLHKYpzSbDxi7TE5fntDCRLawzUYg6wRXcbi3x6HpiWyo5odgHxvL4DksSX8qB8R9",
  "key27": "2786fuKQZmYK76VaLxAeMcqg226C65HJ7scroScArKQWdSiDSkbGxCKky6fjCbPCga63DNT6Hgaj2diQjMK41kKf",
  "key28": "3ib4VpfF7uGWXvwzkaS8gcnqkc3k22SYPiw4sk9txF1JJm5r9kArCZKkfW1zkXoj3kYibKcD8cQwHptDpBnRjWi7",
  "key29": "3ft94Tg4qSAWZPBMv5NXcD4gx9aPQBpYmg9TJ3r3fsHEMzPAVNG2sLWRAmtrLB5UA6U53ownJuaL8zh3kAWag7n4",
  "key30": "3B74DvWHYbWsuav3VC5dhawZex9BKUBETAJwLG864dU8WJySJTbZGBoutfKTAqiuTXkZTJkp5u1tckATDU4AwP3Q",
  "key31": "2QdxSi5fDnpZp7WafmTiT4BJtwwqKVq3Ak1MsQcdsNHZxXBumUZK1MJsuC7KC72hEa45nfmbBfLzSrQba2Vpvodd",
  "key32": "4TgFwDn9UAAUj49TxqFfwKKjVFzh7Bu45jGneWtrLMW1RvvH4AWykwNTrHv6cAfUSNdcSm7mpxvJttGYxVXrWJci",
  "key33": "5wc8ThPT3vfBc4LRajrS6AErx8KgiAU3aJkWtbhrYYZafaP6hCMH4bQyh4qVsVXMnC6anF9t8HVn2G6sMLcPQP2b",
  "key34": "aVCMvBa4cmK1RUTusvq1d6B72nR6hdf52mXfSmQqPSpmeGkvYkesGLwMBVGMLcvT4zafoJKTdYjuPW68bmkaMjf",
  "key35": "34uX4UKRPBtHEW88tvxRbEPn5GfF54TGif91W1v9RAo7KNbxMqaagP1s1saVZSzHn32SrokDhAvmgCJ74f9dqjMu",
  "key36": "2fPASZHAEw27dvBhWrRtF4nCr9YFA5F9fPLab9DBjVJqFW3KimCmbtrmKX6ThVs31wjw2AZLJBeUxuV2vDS7DKT3",
  "key37": "McfkkosBSLbrixzngBBZSQ1jr5zxJ7hj9MksAjN8UXn2i4KgAP43nyCmMN828L7Ac5DgDRUNcftFabbNFeWjmLC",
  "key38": "K8YkRFwt7hoL5DPqLjcYhac8C9KANxU9ZybM8Pe4tX5jRtrARWEKYB8w3UPXqXWn8v86McmRC2pCEgqREzp9EfX",
  "key39": "2e8p66NA1WFcyMGx7QSyZMieJEVNxqpTxj1mMVxGEc8HFr8EoMgFR8mqUyrDjqd5zfRKXKTUgGwypZhNYrrBS6Kj",
  "key40": "qCPiQzcFpmdd6UTq9BroHPykUZ2s13NTchUGoUyiVjuTcvdFVnLTBYFfjGqNTrTC82DeDV7a4uatmEGa4atTaT4",
  "key41": "5b6zFZXUBVJ4HsiaAmzySEG1tFwFy5YFvdfVaAAGurLeX6aLNe4fWBFbP2dZsgabVVWMm5NiSdpReWghZqgoLEYA",
  "key42": "4WortQbQxsxQbFfQUEaPvmuXxLJRmDbfd8vHpY6mcBYyy6bFyUyjjMZUoehZvaRAQUYWiWHNc2ZdtnAKHw9Awd5M",
  "key43": "3ANBYUZGaL7AvKcLXhwKkbAZfZJBHJ53VUJs6EDBDrgG5mzcEFmsqP6rexc1LPEi86kuuCg3RpRrP71AEaUYwtUq",
  "key44": "4nxrQDd18Q3z4GBaJeMoB33QSi5FpEoVKLeJFtSCJ29hLFqmuHNoi9rLZX75ohr2ZycKDR6TfpUgYSnZfAPnzWtz",
  "key45": "5QG9Ssfq5UfKKF6YrBCLnwdEWsHzuVD92fUPqL8h7WmoZBdiCvEL9Tvm4eenES6pRjpScMXzERMFydpZziJdsMVk",
  "key46": "4wZUJrvtaHvtHAm4GhhV23L9kMjSSkjNaVhUjuNzZ6K92Jg4Pcw7f5gZtMCTUk1vUz9B2U3m7pjkosh3HJPb1uxD",
  "key47": "3PTyQY4hohUn8pUUzWoW2quW2UnNz1rLoG7omN7UCPKZeiNN9PxaWbksQ53GZZrmT6hupscXHg6gMxubwUv3gwRk",
  "key48": "3uKTf4XNDpz3qzNz89uNi1JnmDcdM8gvTzE1xbZMsL2JPYfdCErir3QRxMncboLcdXXarzrAp9LHH7AJMEBXnm9s",
  "key49": "5g4MWn8NdHJxAQeXgmq4APhBWDdLZMRVGyNWwL88CpR9Zhwv4x1ZCNBKMJtahg6iYqc9coEt9yGo8QS5A8NtD4b9"
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
