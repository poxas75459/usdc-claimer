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
    "3AY59N5px8bQsZc7Xk3bB3Zw5xt6aSxZ9ouK9vdRpjLMDZwm1j8p29CUTrzSXQjmdeysHgt4vtonaAwqguwskbPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ubR3fBQp4vDRQhg9Z8PnLVAVNR46BnkFkWr2tn28ZrcEZrZx4dUR74bkSiDTc6zKZWiz5QJJfj3vcsNoreAo4sY",
  "key1": "4pL3i1PYYJChpR4LFmvALGzH74891D2ud4Srv53EZeoDp6eWGj9y7KkRgd9Hp2u1TsviSeCrg4Me4RLFEbRzZuWM",
  "key2": "5YDSMWn2ydPRE6jSFQ3R28WE2XJaCi7fNRf9t6FV3cy8qe3U8FqFbFvrAfC5qEtgA46woJys2KVnL7q5G89KfS7t",
  "key3": "3kWAkeGSKtw79qpQz81q1pZtieaWBZJgJTeSASrhNZYQGPbeak1NY4mEkJfK1Qa9TJEP6TeXta46ZqfAfWUBh4c3",
  "key4": "3YJn9K3PAb9HKX83F66L3HH4U2X2Dirzb5TCdkrQhKrZ9H4vMikGcLVQcAwFEtdGiKR7bX5TrVxHZ7sKHsuiAaBD",
  "key5": "pP7z95Cv9umBA4i9y81V9LHmqmyP7Jpt5YYyrqpaXYrXktpKY5qKLoeJSvN6v5geaVkRy8sbsNmpFeY8de7Ephj",
  "key6": "33jcPaT2wKdqTZg2pJBB4j7r5NQAVh6smv3QgwmCYh66pDNJXNSmxhoALnJGujerWNMFNnWoxwbJ83b124dcMhBi",
  "key7": "4pVjL7FEGgu9edLwvjMujY5AnzHoNsPZmRHGYReQjE4cGd834HGB4VXdE3xgNmYZ1gmVmTbKTCzxoQqfMvKDTDaz",
  "key8": "NYoSqBw9ca9DuvPjffzFVJ1A7Jk1WyPQP3znNEyKGtzcB3rBGxA5FLEeAFjPCmroXruA7ntgmhZSm4KFhKYDTzp",
  "key9": "2eidptSa1TcHwjouvezzEsy3QgoCjQNvPaZ4EmxSUYfzVTh671vQVQKZ2WQ1rBgY3YUD1cAdLNAcAgAbAtP3hThy",
  "key10": "fpXbxSMBMvNn1tdJjnyRXMhnWw1UB66hhr3BYwQweDGXtNKydsVowjQeCZrb78aEeezyvRyBTJtRRxxyt4U5egp",
  "key11": "2vGymxQ7NjEg5MBQzcki6aofN6ZJyq4PSm9BUFowadPezVA4gDTRdLdLogvfMRFPAcMAj2YQpv6P95Pmmu4x18qr",
  "key12": "2ZG5X8KFqnMqbaFf8kQyEfwEUxTJauFzmmahpzvRJB5KMYuihVBRZ7RM1yYyfGDDGrM8nBD9v3xg7jcReR769MMQ",
  "key13": "4ANpaeeuimYf5TXqCeBhccv1f9zEt5h5NjJrGC59U46WfEj16MCrRfH3Rz8Rs1aRCjkfjnuARk8gLW3ruguoGS8F",
  "key14": "5U9DBfuJv5KCD7r5JLF8o3Nvh1VVoi9AW5ZuGPPSjrqPahsSaDaxPoJ6tWtddMe6mcAdRDjk5UTSP3Vq3kvCBqPs",
  "key15": "3R2xoMTmXpUvgp73xDsJD95QgT3jQW3RW4LV8mtNWCfwPY66xmwDU3MnMUNCN7FrWSup1YfT8dkYZ6DQMKA4BEjM",
  "key16": "FMCqhhx71kPN5ZhbpoLdnU5HCrUorqm9Uruhi2RWWzbpVZ7ugvoCnWvSabdq7BkYt5Tc3KkSwmJ7XSWK6KyMLka",
  "key17": "46Ef2ftRgBCCNwoK8mrts7UQYrsSWzP1MwofKVr5M8iVnRJuWt4S6QCR95eqcdHgXsjbevP5bTFssNzr54C1qarr",
  "key18": "4ZQCG1cF4YYVVvVDTj9orASoRyL1pdaTYaMUG4xKQ25wMWszVVmLMamMJLXJi6aGuVFsNvGa6TtNeRiGootk2YL6",
  "key19": "3LhgCJP9maCKF1FGfvgba8TUKgtTzaCduGBt8WtqntVgjXt4NDiqQ52oL3Y7eyjmGaqNBjUgEKAhRs3ABdUBKgSu",
  "key20": "27Z8DAe4Z9DBhCr8fCo2hjPzzLMCj4TgBxDUBwdFVDVLTFTbLaZapMhHrEyPWVArykAsfAW51PAoEomXTzXe7vLr",
  "key21": "4eoRpRL2GEz52ZbTmyQEJ2sZYyTfDDx7LW7ChibJnMEWfH6MMvvzCUskVQeftwURdes39EQDWbxqJGfe4MVpUHSQ",
  "key22": "AwQTgq4swQw3whAnnAtQD32wcPcvUFfUpwQEiM9CHJAyjAt2L7EN16y7U8VNH1BVmhpYHX4pNcVGUHmAxW3JNkZ",
  "key23": "1kc3n6L75YiUDMRUNQxh1ZBx1QchAxwtYkJmToV4HqcazBzQAHB2WdJmDpHw1ynmrv6Ck5H1JcfMmJTeA4UeGmh",
  "key24": "66iwP27NDS1xztY1RH69sHM2ywMMEM7np635vcEbD1cm6SeJjYhH7xkrcHZvjp5qNZdJPaLsHGWUEw37R3ZAYjbg",
  "key25": "58td2c7Q2vubzwWGvwSHSgyD5Bq17By1MpBTNEAxh8v84AoiFQ1DhD8E6qbYeFvqRb7kpYS3z7d39oAHmZ198mYr",
  "key26": "2qB3K1MRmEfdZCkxYCi629ceNfb3WYt38wQrZ7Nx13rwHxvQbEe2dtHZZfV9XeXPdKabgLwAjBBAbYm1ctkWHHpr",
  "key27": "2Xpb4Rjy68uhfNABgYWsxhRLufRCbvRWocyToj1Jp7nFmogzXamP2ChsWiYeQL3g4Ps2rGuKpwnViiXJGGezH1wu",
  "key28": "234eTNjvm4VraMaeiooh1vdft5pvrfu5jMj65Kc6a4fCXUMiCBijbgdtTapj6mX8Y737PESKLpQSrGRiR6w3uD6K",
  "key29": "xjr49rKi5Rx36zByZU9hWuPAZ5qbnT68JbByE18XJK8v2xr4nAbKZQA8Dt193oiFAMcS2rveTsjUDto2hEixAXN",
  "key30": "2uM9LGrJQNiqZ8NwPTdKezXMjjSqn2bRXdCKeVJtpf4cYffb6SAUcdh813UcPtqAwrWkaazSDTCMSwEuCSU3EouD",
  "key31": "5yThfV1dL9irPcBveav4ZiejzQqM85t18gSLu2oAP4Ya7nYxJLtoBw1gchFw7LRBgsGV4hdkyysD1rXWn858Spdo",
  "key32": "5KhFq3qpQyG59h2kFREmgZ7LywAPmYWpCh8w8XS5LxijH4r9gew3tgisyNVYLz1vFt8b86JXFn82gTSg3uc89jAv",
  "key33": "5tjvQaW9L45R227CEuhB5969HwqcynDBPnHXu8CLX9NQ83KP5chfVFY95kYn8cLANQGKz1KP2F6a66PTTFwNMyC2",
  "key34": "4yeNWaX2E5vXmwbpN9GV6tDTt9htcXwP8Sxrwqdsxn2pZbhbUkPtaCrRANVd2YGogoQBVyUW3ddrhCBVmFxuPaat",
  "key35": "3wzSQxVmnEPGKx2htqTHvfuNfS3SFanjbZAnDepMgt6g9ANSG44tFxiKd7CR1c4HAPxAnQp5Vrkidk8AsJPwhDfp",
  "key36": "34MCucPZ4NxHwWWXiDNATHTvWNX65eXSDTsy9FmZ1t9rUTDNwk9eeRmActGKDJKZ5CBVfby4wBftKknN167aSD1H"
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
