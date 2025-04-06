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
    "3PCTzBeVaXhGC8xBua461oCXcCL2xQpeURU1eyUbzdB59ESsybRihfh4UCLssVNNe7QDHi5SZavuQirP5NbKjnYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFbvTNwmSzJAHPnVi9EQmVJxBvWmfg9aWpN28iVverAXcjDq9mjAqt2ztduGJLJEd7kFRUvwaex29Va9HQHmENe",
  "key1": "2EcEi4X5mnwoMDQBvwW6qS9jS5gzBaKYkkys1iJSyprHJZLLxzYUXNPazikRsyRyAnujqpYb3cq2r9HhHRaqYUZR",
  "key2": "4DjuAMGb8kPrZWUbLdQ7UocM3qgr9Ce2ohUu38r5dg6XYKCEHKVVcNmGdFzz7RuFNJcUcYTPFWaKAeVBfpDmGNyc",
  "key3": "2YNmk7Ed24KPnuLc7THpSXNe1UYQJ2f5ezj59FivJMMiJmc2rDGbD4St2T7csuzZj4n7X2Q7QbsvG8to6fmAnroJ",
  "key4": "4rwNA1i7xJbUu45HYJVZj2ew6xZww9PjxN8d1M368c4g4o1EpeuFPtjo4AHvYovDLrN6cBUZYCq8J3LqiSFdaLYH",
  "key5": "3eq6rAQpo3hTgJFDfMhLx7MLUmiDF37dMELeumNXxdRcXK7usRSXDsNbGuvWCuibZoYh6mm6GpdnzLK4goZs3qFY",
  "key6": "5xEbFpb1iUMzAnQU87Tg2NJu5jH9rE1SCVUZuEvgvARqdQVT6C2VPduLuiSJnN4ay4khPbap7fe3FjijtFyMissF",
  "key7": "eaYNHcGixrCveExqrHBow1gHHo5PnZ2dTSURNNJYxiqgwcQkvkxrUAa4UzzxXvBtzLPnNDxkgy1KzSya1sWCBEd",
  "key8": "4DzLwbNhJGsm4W4H5Cf6TfvjtcN7KMmVReT3tbhDMGwSHCeEUGTFtUNtHgcjE8Gb6MvViDC3V2RWyGsxKhxiXWWo",
  "key9": "5Wm1zpY9Z5GTvagsUVucEKV7jjG38SQHZy9Ddk7WPCH4n9rpU3SHHq4CEZjA2DbRDm7pYs17ChtCs3WEdwqFhJwX",
  "key10": "2WQrTVtBc91hpuSKCA8c7tVSYm95y3FsPRoqKvBiTSjYLYbfYsNmxf32rgUWa8qjLVoVxVBsuqY1KjccoRnHWEER",
  "key11": "3M8wK6b5oAgRyASZSWiVzyjDXp6z3syXjt82AU3xBTr8fgtup2UbBomaevh6eEvauamwerz3Pg2iNijpohuPiVs5",
  "key12": "31uEcBD94UF3EDf7vje9zvasiKuB2PNpwLyySL17Pm1aZZYRR7KAXVB1EhZqwPajov7xpbcP8RxMPH2gg1vX7bCT",
  "key13": "2MKXUToDMBvR7DRnNit8EJ3jsFDGeMKL6gi29gAV4A3rwRK9BNuP2fmaj8er1BQPDzXnw3zeHcArfAnvhAwkHSrK",
  "key14": "5WCFoaLzsQnYt7xrJT6JhbJoKAyo5SqNUfruWnqdpCAcFtvyfMhdSAbhbh6zdJnXnMo5HPvcr3Z59MnAKRa86NLZ",
  "key15": "5vK9AKyLcLdADLLMUzR4e2xcMCqHwz9dXJEKfZGb6EboYLp5DCB44Af7L1CVELxb2zbLoaBLA1zAp7LMiPakjhxb",
  "key16": "4BirPhM2H441SiCsQ16Rmk11AA85FBZEMHH6EkJGY6qbCLdqUpher47oo2auh7CGAgrZtPriT2ChqTCg4VbVc8m5",
  "key17": "2LC1ZdwMoGtajHcnHSp4pAFbg82mfW4DdmmfXUaRR8Xi8QgxojZMqUGEpPqBMeJ3BGchbdEPBNdZKNmeLToVUZWt",
  "key18": "SorTH32fuELzA3BZFzRNSFXPvJBvANZyJ7kaC1nWbZ5CgyuFtpDTY5APxfCretLLw67jK7dV3qMQ5giGVdNXi41",
  "key19": "4dRe8EEThyGDXWmRg6DHXmCosMjGCEZkCDKWJ3fXGTKQgvzPPZkop4jBxr5So9Gy1ztTSEmo7uch4zzH6fsP21a2",
  "key20": "V5jRoMspi2niaMz5DGsLWLKmA7SsTobrrrATjBVYCrkQsoZdR5hJGq7pfy6sGiS4yFYLvC92UFHR6VN3skktxqE",
  "key21": "qwfHJq6iK5FbfEEevtwyxQGH9HcooQheZaVnBq2yVHN4dpiqBged4tSLML828mjdJZZV9s7FWtM78t9hVTcQE6k",
  "key22": "3HzR98EwTkASQgPkGWPRG2TTbpNvkowmeWTkWDRaH6RQoehnxpN3k2YsqrrThPpjmbCYdQtkxYBY7EKtmxNnSvxs",
  "key23": "4BMM64yw5zwLgj9cVUy6tctMbVTJLTUzkaroYWyCwgnq2Wh6VcDE6ZNv3Mcz32KZ9ozks9nUnCJHCgXb1SWeoUbj",
  "key24": "c1HRYHVYpvNbULHTuxdqituqmFscVhJqK8EZ2h8kX6kJ9n57edcS6PjZHVxmcNhnpKpPZmS8Mw6nmCwLqMwNuHM",
  "key25": "5MWpxhEuaKXYbReNqEjzi2QtGb97qjoDstm3RDJJqshAQ3tdahTvq217NbvNycUT6CBX64LisderrdWDi5uetFhL",
  "key26": "hbzc3uARWEeVpyUUeWsUShffpujZuLtDAz473xL8ZZHZ9Xd5Pw2VXPYrya5rQb4tDKL22ucc3Qd2xAzYcJNGQ76",
  "key27": "52vtHJon5qN95c1WqdXTQw8SHUwNt3aiUSzah1hJp2oQR3wh8rmDHZmnGHBdd7J6fARN6zBkuZatW7TUG3WyuDXd",
  "key28": "r3mxv6uZaP91D8xYGnyvMqoEcFBti3P43Lk4t1sX82ZWyXkmSsyadD7vijZ9Ns4NELgUKGcqyLSxHY6A4591vWH",
  "key29": "2r5KrRGggbjwe1uN41Tz6obDMTFW62gxL4QXneMryozE8TxGyr76EJDNbfDfutLMApcwYJkA8TSncBkoxdyKSyuC",
  "key30": "7ns95NTkeRMFgo5Foy4nwPQV5wX88jXPbSCauDa3KdjQBtW32TjAzaP4uSTR9nAps2qBMYAochJqBqmss7Ex7RR",
  "key31": "4Sz7jfF71oapixpPLBK42agdE8v6cWniA8JmkuB8YchaQAm3dpiGb3zmFmzn53DKbVAbmfUXvz4jmWXGFEM1S9TU",
  "key32": "3v3nvwQixSVwuWR3VjQ4yJsmP7bqtjinniZEVwMiowkRwZeo6QCzuzjK6gGki1mBf53fYxYe6fakd5h2YRLgy6Yj",
  "key33": "2rhswbbrvwrA51C4hzCVf54xAFUUq4JbVM1aQctjSSri6fF2WNXRRmHFxa3wXKPio7anN55AkW5VcmF6xiB1uhqt",
  "key34": "VtosK3PrUZrYt2cpskhYwUP4ep6DxfbWx64W3hJL8FyGYH8wQvsvsbuqCnfkHed3Dpgw6YUho6oTZsvp6FWGaZp",
  "key35": "4HXokJ2aLposY9gEgxMzSbRPd9Ss6Qsm3mM3Y9k1shQ6zuJZBwxZzy1uRuikXHRYngtYKnKiu5FmEiXG7uCMi8Mo"
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
