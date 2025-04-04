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
    "eGaMb6dFNCN1UKTitpcZCebBAfKxc9SZ45yED96d5pYsyB9ZmQpBXCPrXFWJKMgMxHgtPAT9xGHqk8UCGeV7xkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAKXC5osk3MStS6fBf6EJPSUn8dXTeXKciWZfLrgv1b7De9auvQeeYm9TvSeq7D6G4pPRY4RpFPwC3etSvs8CcB",
  "key1": "5CwjLrjzAN8RjQSJVchzaQ2FN5Chxjdzho86EpHKiY1WnDThfDgFMux5yYnp48GVTuuaDQPSunKH2p4Fw7VgpByg",
  "key2": "5SPSnh2PyxJGW39c3vriYmrrhcp1nmc5ix4kCuxusrWmcL4mPGwDjArcNzG6dyis2k4e3McQEqdfoGw4A6CPtME7",
  "key3": "5hN4NpCajo9GtcgKjCKrhG9QJiGCDVx5GJndUGUQxRh4KedZKhnHxJsrpPfkBNYT6t5ChxD7oiVGVdPd1TjEpQMh",
  "key4": "3QevEdGfiZoA3wFCZVwDnicQLkC35oopoh5pC98F2SbSvqJSQw2tNiaNGDJhAvCU2UCwE1RfWD3GNWNKa5QMrJar",
  "key5": "2fJWzA9FU3DxMCavvstiLHGoZBLSgDE2ZWZ3TiPE7kcQecpuH7Sb6jxoWkfiQYaG4aZNGxGkesZLDZnKrimP7xhB",
  "key6": "5CufGcntQEDfRWqknQgCz68wj31kzm2rAacP6u6r2rjDKCqjWDGCKA4zrKbQZA1C2f7pj4PCXPoRz9agWqQn4zTM",
  "key7": "3YXbGZdaGgHQnCvF3G1SLtKXDL73Rb1HQRgrc41cMZ8vaQGZk1HSy3go592D8WneDBt8yiRzyKWZwRghskfkJv3U",
  "key8": "4SHWd9Pv9KvNRbZbn3GPyTGJmgT3nT2jCKX8TXRrda5ENsGdViTfDJmtmaB7yWvKbShWykMCo4KPrFjU5U6SMU9i",
  "key9": "3UfxoixumcPrxeJcjqEV3FforTspy3xifCxR2jN5x39qktLc3YMLQGZL9VPP2wC5FpHuhQmWmUucwnYaCnzMDUcx",
  "key10": "2Jei6uhesSVZoADhAUXkS2EiETfHxyTgQx98Eh6tHpProMWzbjMd5kCwfnXperA42a1xizqPrWxE57S7Q4Xw8FAZ",
  "key11": "2t8gz1orib7PdCKv8sQXBrce9dqPvsJfckmk4ss5uFwhUZkgxnJx15XEYve4txeDjrLNYRx9cakmWvx2UW3Eeck1",
  "key12": "4vubnYcNYoSzSWGVYbgAsPa9XweDztBoibtUaMMdGPWf98DBUTVQGR6X7EthMyAk7SJMGBLkAqvPjhyzEyCwoe8o",
  "key13": "4DE4xpyWoBLXYKo695VFnsN6zPEcdWwJ2QpKmGUWToJ2GTjMb1y6KAFzi59wRmqEm1eHmcQT78D7G87rSG1tyqEK",
  "key14": "iS3uhsNqAJLP5NU2pyzwkBWrC9VhXFDMem2WFwsGHkPgMFCzVjS56X2DKyzAYvKsnFtWPAH5SkqsdsZmR9zZ9WX",
  "key15": "22zoQqxt7y9tEAmgRaYeKTGcWDBf73GMTFdt31n1snwXmSauHvmAhN7WoAhAr1UQtpaYSpPw5VmckTCvfrgscYPi",
  "key16": "63dUNu2ykvBbJoAyypSuSbP86GsGh71k5VP5DCUy5WS3ck3DYyAmPV2oeJth5AAZ9V79TVqk45BnDgmZuPQkwwHw",
  "key17": "2fuXPKS7Afg4ueo9ZQVvZkBGgfMJj4zzcuyNqzsXbg5bbiYXxXzqiZhJ7tH6qn14axq8vCtPrPAdFQ2fecEn28EW",
  "key18": "5aV5RND8EPiBp5SFWEgW4soySG7JtgM7A42MxpyK6Np9gSrCqB4QcJuYoJPYyqbHzbvqmu3cmWeZHLYSCgHN1qES",
  "key19": "2bbeWogtYwnFbhYsbHvaiH7HK6gv44MXVdEp27mj5qBgta78iKyzVQVwM9Arq9cqzaTfXCroZ5jsY3K5S929ykuG",
  "key20": "42CzkFJRqrPXkv3V1QUeeVRB6QdYDtncpER3yNDP7rMLBSdS5yGkajAECjkkArHvexfpNAADw3M7zZ9YAuaSQNBS",
  "key21": "3vcbNP4Jbpq8cyH68G1opdBjrHuzzg7roRXzq9t4hkSQJBoBzCYTV38raE1wxz72316jD5RCpeUY8smPHHUGCX1p",
  "key22": "wAGSKJZe3cUbRLM1udvfdep1mvrCqvBnhC3XhxRptMBW3adv6MVtDfDP249MnzPsKrSNgBqLVVP5qXuaRd4HQrC",
  "key23": "2M2RTnU1ZtUg28fYJZCrKtUvmW6MsFXjGQ1xpSDTHMWJXXvm1sLUJhNUdzaCrWYTmkwqkRbHow1YAEYcUeNEaUqr",
  "key24": "46jxKaohdmanhBJY346WV48E392Wr42Z9ZwH3wjGysLGYn6zkyrtmyJuuMASdmbkT293CNBtF4wFXH64fHVPXwju",
  "key25": "3pnDFfatbzV41qzj4MXvYoqBbKt4vrHKXLkYqK2FgnBHDHRZKdnCDP2zPQjShSJWDsmsEoVz12UtZRLKnKQjbNEM",
  "key26": "3Esh3Qnk5UjE9rMPmvJLBUmfidJTzjUW4UdoD3X5iBgesBFkRLFxYhdGjAVP4LM19VKbhMhJgcAtEC59RMVZsYaS",
  "key27": "gvyQRGTHDg8vhVedGSpq2csXA8j1iw7L2SA6TDee8QvADkejqug4ZT75DS9WNGPSrmBVGRKpTzBCzwnMq83rG73",
  "key28": "5i4iDsA8cMX3bqRkX4PPyN4JC9FbgBqc89FL5CPGNbecAFZN6rfasXJwPMRgyhQfQpN64MqBkJcMRedbfQfM4y51",
  "key29": "4ymeriGJYw2ivqpHtrro3jafmkihSgb1vtn6f2beCGf21E8dctJcNSK2Q5c6TDfntM8kvG8diiCZW6FMs1rhwdU6",
  "key30": "p5AzYsfqJ6XSr2kUnGpyoznu9NFkE8UoeCauKoEBbBj55jYVr9Kf51EkzpU4TCn3jRq2orYMV6MpE5wiUXdHftQ",
  "key31": "32HMQFMjirx1MDxkiAY8sz6rCLNagoBF6zvm6Bf2uzy4rvUZJ66oY7kBogHrBxcpePVtE7sQFNDMvcmzjc5wFRUm",
  "key32": "tPhSSe5u2N4USgMNE1W2RPeaNXSfpvUAmVda6U5BTotPtswY6S8mNNQm31xzAiMoDYog6bht7hM3qHF7AMf8n9C",
  "key33": "2gs9KyYcn1LRD3srPtJf1k8yzRD7v6fnsPcVV7UDLzSVg1fEXB4E5kKoaLCKQjajqfCNR69da6PH3QMeZ6zSXGHo",
  "key34": "2SVCvdXREMWKGCU4iwNMuDxTYFtZcKXnzjmfc5s8tifoxJGiZ8drbb5Xq4zdr2oMWagsxqAQeftLUyjKDprvdEF4",
  "key35": "4MM8ay1L6e2z9J4WQDvuTW6JEz2erMC3ajWJH9CB6P31W32PJBW6kkZ2fd15C6j51JiN1ktyYZV73TAsAYzY9tN9",
  "key36": "3hcYaQmJdkb9oLarkcgonw6kDLPWDAu7hj8fn5qfWFqeYr3nad21jeSMvLKT8sDMW2EGuUmdcrxTyUH8ZiH7a4T2",
  "key37": "EoZSMHjGYifxTUNtrnQgyWvczbdSEkVtjosC5wj6E9kpnJ8zyUj3PwUSAFgKGiNHHBY9WpGSrC2B1cYxEVyxT9T",
  "key38": "4ZYPhKirJhCP6DWZNoW47JsVvEZ3A7z7grA4qsCG94VnxQYPozHet8dei2MWscrQBhfyYhuSwYq5NwLpnEXXAjpU",
  "key39": "31DY6gAV4RWNMyCJEAPxW18SDEkxqaaKMTTPKLcvtyEua88kSixMf9cHjpwi6apbmKA1BPbfoT4zQ9Rxq3cJNGsy",
  "key40": "4eFfXyd3s65T9dPxqK1kTuEdoskfqJYNgfsyTHcjZ3p5QHd9BK1WeykZHRj8dJoqWX49e2XuVyDVmb3EqZHd5QZd",
  "key41": "2N3vTFzXZUmztFe5qmf4e1zJJJbb49tndohS64oQcdgrHJVSCaRSeP4A7sdvJkfdFN6cD1i7DwNkkjEgVk6dKpyU",
  "key42": "57cFhbwJhZ8HnbbmFZj4Evby1CfUebp733eorZT7Gxc2YWnbGKDznQUVUu2HFnDWYrtSd36J26xRbqZP7j7DquyL",
  "key43": "2jitdtuv8AuHchUwiVQBCPUNw82ayXPpCcPV34PSn7trw3BpgfiJGLW6e7rmyT1fQK4Kjb7SkyQVjmj3cnWkqq9Q",
  "key44": "4hNCV9QPagGTcrfUsPghFDBTzMyaiazhutDiH286uEYqb6TpphDf4uScbWB8bBqXKGXaRMA8JUcWiVaTuHZbVjm8",
  "key45": "5qrksrYXjAkKnhkXNTJqfvD9ZFFhJqux17KCUHDrXiz33w14fsMSoUn4tW2wmWqgZPmZLfmNYL8gijKjva2qzPiP"
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
