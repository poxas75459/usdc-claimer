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
    "4mEsoDn7uhMpa5BJfVNrVxyZbRAxKEDwwjkzsWcJqg58WjnfesgFi62JAJ19S9ZC6uXxvraEDmdk1GdZm1kzgX6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nHd24TdutVoPkpLn44JwsZYTw4MmDWmcF3aHDL2tZgHoegKQJiAzuyrro2kniMTTx3yCChLSQbuezz44ZnXCPV",
  "key1": "eFTWXoeQ1rsXCii5N9JfGRBq3Q7BdvY14XoWXQBPDauM3wzPjn42wwqhX3EvADD8TZihXVBZScK9fuh9XSCL3zF",
  "key2": "5u5fiyybBu4y1p52KTN8YkuQDFsXeYPVi6tQbH7e4DxY2PGhH2iaKmdPNV65EXovWQPYmquKfsTUFwbMAwiwffM9",
  "key3": "5Wkv4rF7ETuwrZFmsU5kcaMxSrtpTZMVaeKh7MUd1GLQf5Sn8zTjrK3TQAJVEAZQ5hTrXiyqR9FAn6Va51Ja34do",
  "key4": "4GBm7kdBJjN84Z3CW28PNg897RKujhbchy26Rpsrcu8LAeqPp7NFiWLbrJL3huXjjm5jU68iAHdEimZD8tS82uKy",
  "key5": "3rkq2agDDCKDv9d2WW355VwjD7htEY72aqjSKNt6XUQbZvW6TnL71ZsuDwj2NC1erZHLWkXjTWd9LinWw2dbWXNm",
  "key6": "2VVwEvGZgCF55euZqJQH4pJMmHfwrR6sMeHRouxsPTCoHeTuHk5geeHMq4sFo1FerD9GphbgPegSQHK21tRubWrR",
  "key7": "61RpkeoK4CP5jnmwuu9nFW8krj4dun2UBSiSifCHV2MLRn6h9Wk7h89ZREBENkqXi83N46BHZ9ioq72LwHA3KwNf",
  "key8": "p9rTBmxGSUEz7ge4MB1V9GrLB5pXqJrsBTn7EDrQuLvi41Cz6DsMMDv4cVMa7sbMMm3aj3VcHKLVmH8EDtAx4CQ",
  "key9": "g9RphRHJWyCHkZUfnduXqtR1k4NaU9HkeGVrkNaurXEWUXanSinsndFYGrtXJqNBGSCr5os7uqNAHksdMhEUS37",
  "key10": "2bvgxpQKbDfqs9emhKjb5BZVHuM4b32kwAXCPif8NAadP8oWD47njZFk45yVM4dTyHMN8jbpWyKceS9PnStKswz7",
  "key11": "NiiGuj3oMUHbkmvsfyBjAirFBWRpneSwSuw7Fn51DLwhaQyYJJeE3grhTRZpnj8mZW4QpXPM3u1EoJWSTFeDqMw",
  "key12": "3mPRHJ1zdUKx8AsQ77KS8zua3CbUk2FyVLCV5gL34YwDz7uQvyjgt64SFLv2yjPqqjn63RTfD5fpJ1QywdKMNgJs",
  "key13": "5YQzjx7kVnqAXx2PSkiPpSvMWkFJm1KeYk1XNS1UWVguYEygRNqMTU3f617NRVKWVvFSEMBP7MbPWopfy9JiMbXe",
  "key14": "5fzQ9qbJHzXppPNKSZmtyYpUH5ttkhTXPdZcsfpN9Ysqt8BQSUsu9Sm9qLiVGSxt86TsQQ2hDALZ4h1TZmCTDLhY",
  "key15": "2WBxuU6G8k8paZWwXibPbNTcY8j9y9izBNLaghoZ54QVBiRoeVqa8gtKmXKYv9C1YChpmqmAvYiztrm1Y9GbFea",
  "key16": "2exc8tgyhiriRMSoyBmrxtqbUjci5gsEwban6Rm4V6TZMNBEH2VKpdhrzAaQoRQLV3SqqYYM8z9C2V6LJnQbBqAy",
  "key17": "4vKVJjWLeyBXZNkjFamboUapSMHPDZtTExZt551PJU9zSW1ccu1gvpjy383seyJtH94HBUYDMZD2kZRvtWXbDbQT",
  "key18": "2mvxTVcAnSeUZ72NceCadKKoy5kj7drjWRLfpxLnHtQhp6B137btvGfJSXFqD3ttsd1tJLvrNDkMZZtUe7erZ6eS",
  "key19": "3WYNP1csvUwVSbj9qFr7azcvgSZ4ZdkxE61BV43ap8Uu3AjR577VbCXFNSw4x8L67dw38JDUT2zR1uVaVGPr2xVa",
  "key20": "3ChSMZG2J5hJvPhHjLPTp5zqTzVEtY9Mjb9zGVaNZQ2S3USCJqYU31cFGxXKm4aFazCJs1uvQWye2xiVVSGhMjiS",
  "key21": "2HPqp84EX3q2WevAPDGmv3QTEuWNsXw2paKcDYVVj7oSMreEdT9hButN7mAdvzLGqiUoUPsnTX4U6uE89QZFnSUd",
  "key22": "EadGu8JLoFB5ZLN8AkBjqsuwqDTuZyc722fU2QG7CnKg1TY3GHcexBqwbkg9MS5p5cAonYwYHUJwsYrS5HZXWp1",
  "key23": "4tcsdz8V2BtmomQDCsVaFZWV3iqFuL3L4V8KYJTP6omaHzRpkT8XLpr5arYK9xsnfZT5pbKh2rw8r1FwqsjHbAg3",
  "key24": "4XqQotaxJNo2PHCGQFuXgzc24T8C8moxdHitjsnzJnRA2x4YiD1rZkJSs86Fa7DW2DBuVxdSJuE5gGaBmEqgK4ug",
  "key25": "5nW8JGMnWKU4h7vWDCUSwMdMmmCaMnpQadaE1DQss5ZR6FTUiY7WiA6A2gX6Kv69wVKEzY9EDNckp5vmA5dMSte3",
  "key26": "2ogTF3yzTKcnUbt3NQV4VJH6hGbeiFGPDUP2et6XCX71D66STF4azFShASG3BVx1vUdS3LuXbY17kA7PZFbNuoCm",
  "key27": "2bKh41ftDVHgMUqYbXFWjdDyGwxoGBYH3N3fGYUYcyHxePMRvJbV75qQhE93LcmBr4Epoa3WE6E82aGXMR9PiBPE",
  "key28": "5RYxhG7Aajy6eWcPRCiCbrtMecBtCqcww1ZepfWcuXyEdr9zzJ81trv2RGdLLqPRMBwuXSaiydQrGEFGMDCUmAJ5",
  "key29": "5NMtjs2hwbT8yiPEkZbJvmpGfEr3hBF2g2fQ2J6a6GYdZr8bFisxuEJAEhinqzKvVLFTAyS4mjE9oLWTemVgLciM",
  "key30": "2P6qUBpLRj2LEan6f3AtNEfET7Y92KhKCrjfVnc6mE1gkDUk72nyKDEztDVjccgkxNQtrQSDGr4DXJcX78ZWh1c6",
  "key31": "44VbB5kFWk1NBnLBS4TUzdq29RasHsV9enRjNdJmnRkyfBe6T1567RZQRSLDvWaAR6gAH9za5Y21meQBjBpwKu6k",
  "key32": "6f39Y5WbqWYGaaHNhgtEqudbdxC9p4rZNJNJXWCdd8QjCno6yzULAFYL8QyKb3xQTn1zHunLQtF7njq8xyceuLi",
  "key33": "4727Vo2TMVZh6Pqqrk7xoapnr7Sb5Yaxwg3zTjULfDdjdAYtcv83WsGHCUVEJzNEczDuSPKZaAQyp83Ncry4136M",
  "key34": "2Qaqhn43YBdP1zonpH5uqZKTwbwnnVUKTD44jsPMued1rwh5yhT8KcHCRJsLyt5M8XRxXm1MNbk2SYeoJwDdd9he",
  "key35": "5iD4nCKnqSqHBGYCMDBNDAZ39WyTMFPy5QtpapZoNDfFcKh6iBZhPTmJQbRokK31zewiTLverDXQyQqMTcWyTfuC",
  "key36": "FFk26f9MKM62jg8CDmUBX2R9W3JgEsn8FA4ZFn9cJGiJtr8xCJdmHuQX8fwCcqdRGwDny95kmaKJfC3aY1GE7w9",
  "key37": "4x2RFhMSCyoABF5xo82zMnj5nP18WwxT7NuAudzvfqwHRw2DTsyz5pGHmVe6N6SM3bqecqoQirK3HgUi8tv7jmbb",
  "key38": "5gJfXYgTMHEkSNt3LVyWMVQGD5MThxgTpcPE7Xki9J9EvpaF81x8pHwvEcCqCcRKW3wPWvbU28QQfyjsKMdUgVnK",
  "key39": "4FoJYHAKhBmUzYCRyZc6RWgXGFf55FpKJYNpJZwmayB92zUBMNmnhXzJEaQaVr1sHpGZW5JuJeM1Q6vmK1DLRkvD",
  "key40": "4b1yEpAi1rmacXiNg5ztcAgzKFEUCTjKqmtGZZLpDPxrAyKo1YByJNauWdseLRMnLkM3NyUoJHwTwpXaDo1aw25P",
  "key41": "Vj36sZWBoXsPaY8F3TYaWC5WbeLh9Szb2v56uiGtLcPFrXVRSqJjcCdTNZ1uaci1Mwg4mjxSL9WxcrwJXjoQhpe",
  "key42": "4j8kdam6pHt1rmPois5LxuRjsdBuUthb4v74XEdqCWzAsQXG1TaMrRYez1j5aD5bH2RqtEtT7d5ognZpVNnHAuHw",
  "key43": "3VgYgKmdAXdLKy2ruCqHRx6yxqXNRwHc3q96qHKtBLtWxwhAD38KD2PT1ytuk2SrbDpP3wZaAyKXJuB43h7sdDjN",
  "key44": "5YbCgegB8V3Zr7R8bz3NtqqBaAmuYoja1USo2xFDGmWXmGW5GL4Cj2jbXF7goHa4cwLrAmG18pXnXbMEhGyozWnf",
  "key45": "2UikG44prERZzRv98gtorQiKchCAkDNCfGkHht3eYUKXLbG9ATLFTAiFPdyhTAxbC6f7ieKDPPEsXS19ieWiy4XX",
  "key46": "4m2Zo922TiKfi1Du7LpZXFbsVgp55QNzmvVgY7WLWcX57jexFHtghUT9iEEvZjqDVs8DWd6gxHmUrrcnd2Ecy6ZQ",
  "key47": "2GpfeFN8ebvQR9hHQiJjAfShKfUuri7MarkoMnPNuQsf3HebCenZuUAEiiq6oHuo4vkt7cdY44iam9bv52zcuEFS",
  "key48": "5HvbMdGv7yg717iFenU1Nfa9R67tjaRVXYcAAF1j41fv7yndkAWh9GPLshp6U6CegwoT5kHeGMAMFug4564zkBnG"
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
