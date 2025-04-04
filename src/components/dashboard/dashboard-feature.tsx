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
    "5n14UMXScaTqEB7jHXRn6YsWFxd9nHXmJcsgxLHi7hBtq6Mncgt6raKfjTC5MAJ1Ept9u6LpyQkrpinGWQzQQz7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31L4Rp8vHsmktE58mMDYNyPrCAMLDjL8JKPWkXE6hsxnVfsz88D5h2DE3bkbD7Kwwog2YaH73x1H5fpqoZwsWqX",
  "key1": "evH42KodEJsELu8bcMk9FyKibT9QaY7pS4WmYB1z3BFbRszv1XxECF4tTL2CEViUTRvgaSRW6j55Qg2hWHWuqKo",
  "key2": "5huKu1VecZvj7LJPzsSVNfJ86uMy69QqbdmPsgthn77w9Gw2UaMguAXWhcpv96B6zB2g8FJ2MZD8PpLFnqMdGBes",
  "key3": "4rQFaZ8RRQBZR9AWJPmSXjKvg2NYHCiHMEcqebu8RdJ8yKWDKHoZi3DeLjLtVZHan5c6FL5ha8j1Uc3YPD7UKwAE",
  "key4": "2DotbS8zSi2vencdNsSAo7ns5zxqfQXcMMQueuuQSYKM1iAZ6J2Hmy841d9EM7UAGmpdiGp9WCAcX32hA1zZ83R2",
  "key5": "3FxA9M5EpMoy9MXdZcvvXbnJLMggorhZcqqU6mTdm7oKZQmqWgz93gmPrKD9ZLGo6zdUHfmDRLCfoLjQJxYZuvPT",
  "key6": "KAtAwLQHwQpmXms4Bzd5y3YXfnyjCMgB5iEENPzQ3LRHoytoLkSdmVMJzJgf6gQEgCPBPTVVopCbfknJDVkTJbA",
  "key7": "DUq6WYk3jC6nrG1vbdaji5cf9VLphd2u22FnoV7gSA6UwC2rB5S2nhGAvhPEhmqshYDDwtngjYaPszbW8aK4UtD",
  "key8": "4efsBCgthq8KgzVnH9w3jZ4S6oTPp5pWS94nne2gEL9xQhYKHYisWYQ5BR7So9R2wHAnDk53Un2Zav2a7igiNtUD",
  "key9": "4NYVTzNUs1xd4bns8u4s9YzkRnKKSJB2EW2fAqpgTBcBFRbQfdJ1bC9fQWDuEp98GzJNESbdKwJ2Y9VjCm97hWJh",
  "key10": "qphgjE1C2bETRC1mUaC4fECYZZUPBZTtgbgAtLsGtnC9oGtVjLu92Ctrisu6piW1mcRBjtPcMDMx8rnSSRn4oEG",
  "key11": "Dn8MX9HHMnz6fKDnj2wcQWHxY22fB5wHD2UwC3c3EkweY8xD17S2rWtXKQcpsaXVxEULfAG6frVp9b7qS9NKWzc",
  "key12": "2DMfdoVGX6WX3Wo9cfn2ecmZf3Je5gXyS5Uc7DyCYHQFmj63QEfEQV6nwNtCwxgt2Fk5Kms3ZSUmhsy7wYpecgfi",
  "key13": "5FbtbkcV5BEENWAwcpKbgTr96youVA7GBU2ZdRCBnjqMD62VNdWHNXjAa9Nwf6jjiHNCEFswXrQG9eFdF777MBBe",
  "key14": "4ChQCEoPoVUca9yJCLiJKbqcko4wJ1gga5PhVD6bXFtvGuVBTsS6G1wzLVwo9JmfA2AH7cmNuZ4vDmH4wCKPYofN",
  "key15": "5WFbuUhWsLEgkHfPCV5dFfzhQegdUMo5Hv5Z1LMwH3CnoVEA2Zdfq9VuB1mWXnkPgdFBR5mZyFCXJBaqSFf5KJ9V",
  "key16": "46bNj5xRwbNuwpA99mLYN2Ybxgb8Uw7nWMDwuJ47ZzaGswDkKquktrWQP5xGMK6zazZ4r1sy8xmEFnndK1HvURnr",
  "key17": "2LoxyMf6UMeTZuJmUZrYoXDqCtYZN9XD9p6K2ApYCD1AvjDjyqUiVe2NtqCaGeoJGCpRxcSgRzmWEwBLZTXaqm4x",
  "key18": "2thWrRukWa4wu9ojvcjQFSn8J5oL96R4MAJNwM4jqHCuRzzBx23fhBVKyg5eGVTGCEQ2aXitDPAPti5iWTzvbK1i",
  "key19": "5i7jG1zG4wJMA3ZZU1pqJ6J3EiNbgMDdnHRuY6vkGkH96QpPh5mJ6QtcLDTZxkH5QxZtKkqGTAMRKCYvcgUbNir8",
  "key20": "ZGhzRNZtZM7HATQBUgSqqMcbinFEtPn8h8hkyBN7azri1LJq8gfjLvAwq9V7Prq2mapstVKiQntZCm4AEkUr9uX",
  "key21": "7hWx2Dx2XVJ29LgeYfdZppKMMe8qfNwnVS6VPwW7Vygb4a63BeQeAR51xxwcQgVmwrTXHw6F5Y9PL5Rcgie9sp7",
  "key22": "5jftisbFb6ufXosxA5RGuEh3zrQuixaAYeJrq6gNkfGc1p93JkNhQUTW83r2GTHZ4hLb7ZmNVXBPMjAZZoHGGd71",
  "key23": "5sGQsdmxfDtsvQWvSUPPzNaufRBWqGdpisqSAou1KRx9GMB5P3X5taq53EHsMG1bmwUbYws6uJNteuVQbi8uwsFe",
  "key24": "3mon2DTsQL8LzRjD8ZDCJK8QhVtpEQXy3Cumrw5KTXhuR3yv122CemoxWCY9g8QjYsDNn85Cbuu7QCpYja13Y1JB",
  "key25": "3UgkNLp1MtvRjJiV33zUTrwZ5tGNU27x8Qv1m9QwuJamSJeDoza5rSVSjVc9GsPFUC8eRsmbzQS4unPk9YF7UuYb",
  "key26": "2j25t1ojZFPyqWcc4KUyg6HKUQJr3bgp1cogssqgwshmYsFnrr5f2b9gkC79o5DMS7D7UWytrcgP8EQAz2usxyig",
  "key27": "3GWH7t9A6qNtcDx9FaTaL9KFwcNHpxkU9whyL5mryUyvYVwmtjJ8NqJwTPk8LgpCWbgf8odjhKemG81pzeSpKB4F",
  "key28": "67ELctQqaUxp72mqYxKJENgmD62SXbCC7DsQh1SN75DPdZMkMB2KZsqi8dCtEZWnogwUQhZiVveqc4ABREdpD8t",
  "key29": "Pd55ZJVudFDgrTQp66MkEUBG6k9XWwQHoGGJ8iKwjM6YhRpa4CDKdFCrUzzNXPbeaRK29DhEx7riyr2tUYJ4N7n",
  "key30": "3SDNSbbfpMt2DPJ7prXrLKt8AxNLJsUf9RFTjuFKXoNjxN9wMyFabczCY6qtbkoh7a83NZyxCZZn4TdFeouweHrX",
  "key31": "zRNjeLwoS8jYEz527SkdHDeLa4GEzNGnQsB5vFQPGBSMX4RBeXrMvyKbZ2UTpiUV8qMMjUrMKWMWH5m5K3Pd9XC",
  "key32": "4XPP2AQPEwuRRybc6WsM4FcQBuwPaoTxSvq9CmzLECutrdmGFpxN2qm6aZs2ekcLm5CLMm8EbeGopPLkzoB6qGbg",
  "key33": "huoqQhvsXwci7U4BC7fjRC66Z1F2bYVJC76ji6drMRYYQGEY3fhKH4LBRDHk8rx23MEaG7YP4Ge4C5PjkRx2tFo",
  "key34": "3DFNGxFUCTuG6TLzQT5uLhLdGfumCrxYYhLPn4cnbtNaiFMUPy69isdg398N5wuNZQjtReaMmbWH9y3Wf5J8YTBm",
  "key35": "45vKCM8jwaHUh9AeegLy9Mdk96gZVFYz4rtYrYAJSFxqi1q2MQ97cDbcCLRp4PaUysABb9HR5WjY1NX3V6Jg1wu8",
  "key36": "2jPQrF53qQaYTyTK5GLmmEfDmzGPc59GjPGoJQm32S3pohzyxqXovHT2BpAtknccY2UwCPC4Eidw1xGkrZt9yCzA",
  "key37": "4MbHWdxGQP64G7Sey1SqBWracX3nHytkkx1hZ7asxiBQVbZcu2iq3KrpKitpRBBWbZb25oPfkQwaPiwVYzDvpJBK",
  "key38": "4A3KSBiQZpesCFamgMn63o2FqCja93jNvk1giVCPkmNEPVF6Kf46DsPcpiBoHUU12LzSsFgBopTsLqhrvunZQ9uA"
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
