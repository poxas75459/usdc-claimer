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
    "2hh2VLs3s8LfCpsv4iZUxg97oz2WtEqZAb1nd2APNypmB2YhePEX96Sun8mHpoUEqZv6JMJpKbTsGxBFXWM9zgE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcmA3dx6BqBPBY25cBadYvuNYSzREnHGhEeofBHSBrYRTq5UH7PU9ZBzqmdmSUtG3ZmvyrWfirWADbCmDnP1PZG",
  "key1": "5cCnT6L8cmTG4S3hercV1iYKXFRuhMbfVVEeRGRS6ufArVw4HeEQDztjeGgZcQ7YJUcCqX5gvLsEWV8i2aFa7hrD",
  "key2": "3k4QtECpxJ2xPNgVZBLG5kae4mLLiZuFAf1pLgLtgeFtnwZFeAGekmQamLjVmeDkwJ2uxF7toYUHbSCWvBy3yFm9",
  "key3": "5megUdw4vQvuSyRVpqhsCuSK6gkBodLkdfdf1xJeb7YMfJd1o8PDuLhJYriacJkY2TG3kwZEjqWxwqJKLfPmq1H3",
  "key4": "5YupAzLYXWQ9bHjfazGNfecAibmRzFnNPLGMVf5iGsKB9iSqzWKZWmLL1BH3wEcG8wdFknAL9LhqKDdohWFkHZ8K",
  "key5": "4q4JQSb4pSCvASWB6xtAFYrrQX3v1eXhqydcVwLbMs9xj8qPk7H7hixnmy6LX44wkEpMmLd9U1uZV1rAMbkNN8E2",
  "key6": "2maMrzz3gMEth9idRBjZYxrgdH1s7Tms4RNRTeGtzjefC7qUzysh7ZG5LDtQ1XeGigCxHbAXcMRxF5h2XseWr3YK",
  "key7": "4HgQDhhsm6YEBYXST6jxrAeFDxsSMovcfrZL8A6vKzsJ3UN9WFx2i2AtFUWt69Z5wUjZXAbiJQo3m2Cm8X7ambu",
  "key8": "5mUXr4HkK2mBBBEWm9wn6fNLYAYUcb4zsCpz9hCbeL38neDDamcqzejRkcTvokqhM5hkcyoBcA27sRcVUgGZSq55",
  "key9": "cPEjb5PPNUVkj93wJ3hF1e94anygeziwoARQLxdbJsp6sMw9gnSFVkSE5SbQEqMtmGEF1xtckztHu9yPayD4FPX",
  "key10": "1aRF1nh8J2y9qiMzYYTkUkvQoAxWg4uEwnmYqz9KinjFcRCLFRafAR4GPCJoRfVNm4eUMMffoBE6MxBKanetbJ9",
  "key11": "4NAbHdL8j4J2jM4K5cZneokkbthX8QbyiL2ZTV8DedzdU1zVtjL99bTVv65vrD6GUSpWLnradqXEfYxY3NfaA26P",
  "key12": "4GBxyJ7k2hYsVrG81cAFFNm6h3tHQYhdE6V8iWW8m5BdTehzBU9TfZKZZX6TomZqgnD8kntzrGQM3UDeR87qWzAb",
  "key13": "spnomVsRysinvL6D3cTVQafaSx87xBFukQzGpSvfxdB178ifbqo9aHoJPY4YwMRoFGczAKesub9Gv5LQsJnT2Xb",
  "key14": "4R4X8Y4C3VCNmfKuxPZoKpdvZsJdUdouVTQF8sy6N4zzpNWuzXhvMXsUNBRP7JxbBp6eREuxN4gX7frYkLRcGGKx",
  "key15": "28n2qSaL5vFDc4PLv7WjePf67TbrP8wqerboZ8JNHZ4K74QKyXYcfxZP67mse3H9PX6Fg8UhgY9t2TnY9hFqh2YD",
  "key16": "3AkatcfXu9tnbL2VP5pnEqUYKv7QMQrPHiQp2XPNVVCjJPv8bvAvbu985PxYbfqRTcjXfrvsgvBfgaYQHSSqq9C3",
  "key17": "5wW9M2kSRH4CXSRybhVKmnoeogR1QTgV9z3ig4by6ZgkHfGcLyawNdpHNSH11yosHpv9CF4VWdtDcqSyFojubs7H",
  "key18": "5DnZsxNvHDuuu4EoXKvSeepeZiY5ioSnBfpWWCv16u5VMqQbpbamc9jZCQ92LXDtC6yoa8WBPuG95uyU8Z6ftMK2",
  "key19": "2WmzKcwvhBaN7P8hJMsdrCPXSZ72tWZdWCM73JczRME2VixR1V3noShBZ3nFDwYCn1Tu6sreoDPQ78jmxKEEKZDQ",
  "key20": "2SbtHe4epR7pchdkPDV7Z8whhsTQiBmoLPcTQC5kn7UfBe7U7NmrUGoEJvHq3TxFua5MJuhqnm5SVthjqXL3GjAH",
  "key21": "29JNPJNpGFovKnoU5dSrY9wNMoktmCxjkpf4HE3sJ6MACnRchp4xRanyJf9EGzUt773J87Cnw16FXerD3rN3STLf",
  "key22": "R4oFt7URwzoJ2SPSDYghUagZGqtox2beH5GJ5XHvmJezh5BWxpKQGX7c3Fw4NDET4UR1rp8LELPPQiGbryieVxA",
  "key23": "rNeXPA9v6HFWqQwDd6GQ7o1rvpKHBkKDcyFDF7t4DU2csyN22qqS4sfwhkUgYrpycfs4m7VeeAss5eKEeb9XtC4",
  "key24": "4cK9Qa6A1pQeZVticJnrzX17tPuhx4d5wNKTGVXuzkJ1K3ZgRyJByX1Yq3GoRvXN4RbQTWeK8aus1oseAFr8336M",
  "key25": "5zDz1VFzH9NbzpKqEupa8pDEpooiRc1gHi7HYXtRSx1y4tp7SkF2h9ZnxS6k5KhKBLF4hWSTamEZMVsMQhCbQKwe",
  "key26": "65Lq9XJwGwsXgXtsxrA7H6cqP7eHvMifpb8H6EdMVyhh2bXpa8mm4dzinK65RjAw1BQ9tFAjckx2UuourWvk3xfy",
  "key27": "316CTCwdspNryY3Ds5f6axFdJm5HoiopzuSKwQqytxVK3P2NUF1YCMJ5waYkqf9RiE3MwS8ddqmtPX6bzpqoHXTe",
  "key28": "HqmWrncY1zpBod9xyaK2JiRKmozoJKMNhKeh4nHTdfTZCQM8ry1iEGdmGHxBGtbSAYQYsafY9mYKYmXooVyuZE5",
  "key29": "2oS3fsUx1g2YhHRs2Gpn5SNzD7e14ZEvyhaKjx3CEY9k6zMLjgbLCw9mxYRDvMC6cwA2AJG2opAzEMCmAA6U5cUk",
  "key30": "62td7WFR4u4nnfS7f3eLFCGSG7ifsmpxta7T2E3PBW4jFPHoJ8hT4u4uxE7DtJyyBxaHLV2HLvoYTjHZbbhsZ3D",
  "key31": "5C33zUygUsPGHKJQ1Kb4dQXnScRTqvujvZ6N3woa98Y7oeGkjLNqPn2DX2toQTvSmoa1PLm2hPwednRVhFXyQ1NP",
  "key32": "W3hJh5AfNbfwb8BfYu7vF7xWVUS1QCdPAncWGJ6jSoXUsbpbCHXzStmf2eo7FxtMDqpVBRmzmH1s2z4tT8eVgpk",
  "key33": "3VLkeZiyasNe8XRGVuSb5WLLx6NNkQWPUPzEW4bAcRNLR3vbb4bTaFp8XbakuYGtno6Jca8CA9UYtCqbprdPdqkN",
  "key34": "2kKer5TX9WeuLTyAamxpeGZe6V38NaR6DPRV1FHg7qFx97Cr56vy2LP4iSAuRvUgLtkyJSQxEo9GiptWxSdSUnvi",
  "key35": "59CZKJfbN9UDp2m6zeiA8532tusA71uRKxBT6hBTKc9E4iSvTXJJgFTYxthSSLT8rwvVFh1fw3cpCyGixz3Xvf7c"
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
