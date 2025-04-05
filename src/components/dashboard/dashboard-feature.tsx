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
    "4CPPEC3AYSAjDy6X99ws1pq3oGhMSf11fe32oBaNvrmQVw3HgSjhPXcAfvSeMVppXcPLbGNwCDKAQQSSf6wZ5heu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdLWjUHBmKo8fPL5PnXFZWz7WmUSiGd8wGztVrxUbsppNA4hARBY2gnkArakPGGgnK9mi3QNF5f1PnSY6RrDNPu",
  "key1": "wt4QoxnaCp14WX3782Zff9rDPoMEKBs2hSHbBWG87d6WXUXsLUBH6wWz5RiS1HEf54pJCEfkj2dXBjsrWTL2fHm",
  "key2": "2whaHhK3zjAy5BAP5RaEgVzMgwp9fob7mYrMVVbMj44bGBVQwA3mG3mRLdgaspxVXWGf4pQkWZEN9Gan1UsLcPcB",
  "key3": "5LYYddHpk3W6SsMQNSHrfDXCJEZ5PDRyfXTK7oEaG74CFmLr1hU71XjtU61hTYBhZxrUtSH3UV9187zax6MLHoYu",
  "key4": "4qMsJHNTbRgaDx69hMvFQsTQCSWw9CrPosxF2GaU16WFWKHZyDCXh32T5z2xATNXopGNdniNQDzEKbNXZEWi3RL4",
  "key5": "49hFLKgm8JHoMfddcaURFFBfaXG2toPUdS4AU5rQA5VtVvG8SRMrS46Lqbx8FCsJEXbUq87Nyw4BHmxUh8Y7wPXD",
  "key6": "2jwUsvcM9g8zys3QaQAJvRqBfpYX2N3SFcnjdM8ShaziVjGk7rDcRoSfxcJnwz9MbnAzyuayebF5zEFWbbArtCzD",
  "key7": "gdg9KPK6CnpUM9x44oTcf69zNCn36M9RKZNAv1jKcMpNaAY4weLNPMEtNGZYj2rsCX9EQnQaobMdzYEgYy5gp1P",
  "key8": "5FNaRkcAaXo6qqwDGxuZ7omrXM2VJyc3XXRnpUHpXYScUwUZ4pCzSf3mKun2oQktRQLzhrcoyNAsoJDEWExVMGei",
  "key9": "4qm1UU9xdmFry6GR8tKfWLUyooW5q5cmXXvhWsmJRsAUN4PbYbDPivQgySU4AF9QapNVQadTGUSYRub52DM43DRQ",
  "key10": "4tenzNXLe5kMhqDGt2nkryxe9zRQdCK5HKatuYuzKWQYbAKxFet8TBuEPd9H37mLyNyXG1f3ho5Wgz25Xu9JJfdb",
  "key11": "32XMm1bky1uLao3oy5RbfLmw2XjxjGUTiv8pJQ3NNhwPpGkUEyj1fNU9BxAPAsrfNP79U918g3CsA4JaKuk8uBUd",
  "key12": "4kfX8N8wY321zqCnrT6XX7SwbLw6SJi9ZdA2wFpnDnt318PA32ZUPqMVBdWj6khC8WPMmy25yFSESAbxwLuod1x8",
  "key13": "4ubGa3XCSVY45cBWNPitgxNQPY9XdcrWTYg1g1CN1CeSHu3SDTXyYDkVZSJxXwAJr1RThLQ3jFtA3GdNeisYAqTR",
  "key14": "4aDpWxoBLRt4bt6tj33TFHU1zbYTpbuiq8ghs62riBersGWUJRzvXeXEE5TJM52ajVZhzX948KED5BeZaM9bnd6p",
  "key15": "3Mofo467KoNCauAeffPFWDg419y16KwChCUuS33p7KEMtcSXXxRpt9idjKkHU7wpddujoV7QkfwjUebwxjE7y3EV",
  "key16": "319ih76SL6egEAi7ScSUux7RxQ2HnahA1VpuVgRoCeSBF31MmmK79z7xUBpCi7CJqwtAQn3MELkA9tiZHRe7AGeH",
  "key17": "2YfvqvFaKzDZrrUmxtNd6QnWmKaCBJTtK9R8NWBFf2kkXdQh8345YAhfabdcTSY1vQ8psLe5p1aqvj8qP32QJaxk",
  "key18": "4DdGH63WyoUwPe6ELjYRVS5F7qKk1if3PCia7Cefors8JDwjdBGjTRLutcMvgHBwvAdJDXwUZmTmsEjD8g5K5K8c",
  "key19": "4XppqJ5LqTC7cFmQvreLMBahJufYRsbzyEj3GqZjwpkaLNTMWC67QQHspLLL9dcwc6ifoqvkp9a9LcS8kdwtZosD",
  "key20": "3efNiYTm7QNAyDPuYMGvzNhtL9c8AkrqAzXhtcBcrz7N5WC4zY7SKYG2M1sGXCmen3HdQuAFSvWT2nF7TtNjWZXz",
  "key21": "2yvSjQwVry8S4rJT3a1DXPmt4cuMiiTv6hAgHGLMt6VeCKrgHWuHCB4ArwEAazNsRBq2kEkqx2veY47ieKt57N5J",
  "key22": "5rAQ4jefGhCedvVzSQTMDHzXgB3xpbzahfPKRsjSaeJBuFXgyruZ3L4p5eyJ7LDNgMo7twEnEjpgSxQbBzrBhFez",
  "key23": "3kLEoueXB6G9hN2CbX24TcyC3PmWL5PxU4eoakKEtJt1zLqpeU9XnpQsgD8H3NT2U7n6iKZ7kz6UYjuQLEmo1Ed7",
  "key24": "4PGpGV3Mxidoofm1mWMKbEwLn3v3WuXreFBQwuUD1GbEELJoG74qVbdL3e5PYAi6NErGHyAsEVfMef3sxRvHEwyc",
  "key25": "21Apw52iMC6cTCrRTNi1YsBGF1mAZrzwrzdDxtd1JaVcAgBLfDqoxa7tUFYdJ2PLqMLoMZmaYC22VZRD37nkvcV3",
  "key26": "3atjxkuV7H6Lxpq4xqgWvxhPDKEdVxXjL8JTuxc3MeDD7d1mRFLq53iDQS9Eadzo1CpCq27ZmqUQYfpkBma75Zmv",
  "key27": "8p7bdsa9r9A52agA4GefL6qtjn9LY7zkA6Hx9hkLuLwL2SZddU9CZnzVY3hjEyEfh1oDpmfUHNR6QkgKD5x98V3",
  "key28": "3smYXv5hLcc5zEa61ibMekNAzCwLLuQ9K34PxmMzbcqRsD4AEZd21iRCrffQNfdJM6svs1G9qSXrLFfAaGem24Ut",
  "key29": "4r3mBckSLwBphLANB5mK1YAY7MQjWERnRW2LTDUqefdWxj7J8NRXGydAV8Mn8G5D41FjPDvZkGSiHdQdgsqVUuNr",
  "key30": "3pBQ4o9wyt8Vhu1hyg8dfTDMJFs3NbDMnjaVwWsjNzbeR2Gcp2JWR11xpUqSbhoz4gZGf1cHN1Bm4rKD4oxGGMVu",
  "key31": "5R3fvyQYTbtYgejU4Nt7pcqRp8tnatd78iiiSSLYejkBHnUW973o6GSoVkEtbtW2ugmYqKYuUixEY5Kxx4vVuAp4",
  "key32": "KbqM9BMpqhrTVV9th4U2DoPGVK5JqPHJtyRXV4aqiHp4MhdD5Uar2iL2mqYhDbK5TSQHmhrKbXVhX5ZPWoH727m",
  "key33": "5QiuDLskuUF7T5dmjbUXEmJHwkbwCNtyS7RuVTyKMndjajbfySYV9PRGV6PJEyzt7BsgKUuzQixe4Mwn8sL2QKTS",
  "key34": "5PFPAAf6Z1JurTNeHBk7qp3edM1zHs6drMTGybXvRgsXwe1EcTrcavPQBubqn6PTLGk8UKnQqLuTDesAep1Vskia",
  "key35": "4CejCJCsJBWmxwSQjvHtRhRH58E4bdsgHWkRUpWJZccMJswpsuT5zdUP5aNcyuKyHucd6igXJFRScUe3foeKe1bE",
  "key36": "4LjHEVvFVKFnu8uTsMGnxiK7Q1mqEX23fz2y87iHpSCxZGu4FXbeo3oXATWvakponwoQmpoAT7aaEAKthBLpu6dp",
  "key37": "3NhXqFGcJFVcenN8ZEH3RRyi5757QErsKda4Yw1YALijR1VLPsZdwFt3ruoXEEhopPufKueYk8JT14cgW6GC18bu",
  "key38": "fJAh2nsnoU9wgXyCepUJzVQUX5dKUnbSV92TdDVDjJEn1MuXJcGdnDy6yzrVpMPE1YToQxFYfn15JxpnTegwx8Y",
  "key39": "45MQCfQePF2pPnu1SXAcnrEqPMApi29wZ2fLCUZv9zSo7Ra1NMngbMWhqStHemccihiDMho4Qh1iab1cSJfMdd3S",
  "key40": "3sBXdUUL57tvckKongCg9x5RmwQEZ4Rg4WfCHDHXMDhqTsso4FE9UkNxoaNxRUCXiEUe6i5CsDHQG7uvBWB794Lf",
  "key41": "315nbcKvTLjXguJPb6r8Xy4h5GV5cg1GKtcSDV1PMS3LnGQKXw8y27U7MyFoYdTqGJezTyG2Cm5AQM6BDDr63n2K",
  "key42": "35MKMhkRM2jwhtqDLJYqjDUWwWvoMtKCd2oqaeY9mSacyvHeXgJZ93msEfCXzRC58isSVbwVE3YzvHpRAyGeizaU",
  "key43": "46ssdRfASU6PcvGQNZjXvYX5Pqm5V9WPQ9mcE9PNBVYtE3t152WujmU6Fki5R3ZShchPz4JT3PoawbLp9NyPJoXh",
  "key44": "5vSVPQRejKVc8HaWYotekR3nev5cvDXJfmgJCTDMRRUPu8NJH8rU5pMC7kPjzvbV2Vr5cbf8DkvKQQaz224JsDb5",
  "key45": "2JRS9VVVqFWmtVPqM6yBJpbpzdjjAueGgkhzZ8LjNiL9bEGVDXaDo8W8D8h3NBmVHPoK39ZLdjeHtskLMk9Z26Pa",
  "key46": "VSToQfD8Shsz7YhPrCxNTW8ZNwvNFRvAeQToXaRkeG9VrD6wbBw1pWYkqafVB9tefGKFoedf12mQ641kqGUwssi",
  "key47": "3wo9uwurags2DHDzArbShHxWTCKgDK1BayVb4mpUont7QDLrp1WZoNhY5oWt3pgGN9kfShve6auNZmJ6QSUzepcB",
  "key48": "2mR46g27CsL5zgWpqWWVAv7Ui5Tbp7NPwvnWBvq2ccNrZJZrAWXx3rqGnAbHDaMcpdUS8FTzWFsu5KTXxsrTfiLY"
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
