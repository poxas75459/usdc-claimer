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
    "2sstKAqnPQ2vN2XUGmAFDrAdmWAsNwn8jwMwa9Gd9onMHetapfatVkB3AovmikHuALdURzH6oSbJNJZyhJB3qxEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkdJVJVwpHUEGyqarXMZpfYTYq4c2HrrYCbz2r8c7L9DVoTJThoyPDUrzXmDLsezXvqJoP2sZ1TdDxFtR3NgRpy",
  "key1": "36iM22qhVhewQ8urGg3rDhSsqDsLPWSS2u2PSwkp2dw2BN8vhPx7eoPFSprgKndK2bsCA2Hb64Z1i2SoRAhUsuKc",
  "key2": "338gzBghDFsxt6Ph2xPJh3Ss2Wb1S6kbChFgpmL1PZSpWrssR7D3K75c1B4PBbjC7jmYtu11Yi8tvLjAq4jQv2ew",
  "key3": "4pNfDQY3yNjPogsLgr8JeyPV4sY38tpSBo99Ma2B5baM4AFyUPTdRLwnhy12H4edyhHwZgq9icm2jYwZYTgbanY7",
  "key4": "3EHZ5P6pa49drjnNKxM1t3eYA6hSSQNxowBUm6mPHHU5bZPA5ehMoxzcR21utKP5DTNwuwSkqvvdpXjK3uBoxCvz",
  "key5": "u2tPeu9TJDfgnLy2DCYDnvJtJvTQbJXBB5zur28Y9ywdpDSXSoPuyxMPxHPcwSJQFjG1naYaU1TRsyYZVjjxe8F",
  "key6": "2hV16QnqsYowDnLBRyAsZU4mwLAh9vnMF5vDFsnX8ixKRjZ8oNuL17XWwvTniVMuwBkpH7RXoMRw31d7mcTm5h8W",
  "key7": "3U9bvVziuYufjB8woRsbFZMk59kZHJ3Mn9zVNdEd3qdUFo17WbPpXXokWRZQH2kQcDNcN3hZhjHnqAYtbiRtwdCG",
  "key8": "4vUamzeJBY3sg8Y9XyfYtze5W8Bi37mzYr93rxLKk23SZnmEorvZGLzKQj5sGCsCKxFADg4b6b7FGdZHy6HX9Rm7",
  "key9": "2vb73GMfkoyjfjN5NCac58aG7zWv6qn721RFQV5msGiQRVJtHrJaXVLbhSsyMXCvPFNvLzWC5NCXrEiZ9BsUA2sk",
  "key10": "tyXPKyMYCCYMtp3qotiR965NFnnRs4XW3hg2MrDtwxhLCb9mRv1CJLii5LaGkDVsreGekMFRKg1BZWjjNzGTQmU",
  "key11": "tDvKMaSgr4FoewYLHkubRgCEqbb4UpwWdxREbhqBSMnNM1UQN1nWNXoKa8mw5bdvihEmVpoY23wUA4m78CQhr6y",
  "key12": "3Rcf9uhaNiUJMef5WDqXwJ7SK7nF1ntxfzts2dkgMNDtUaguxPknAP5XNVRFVg5GN9oNTbGiZp3ma8ATTDLozVGp",
  "key13": "3R2wnmb4kuUY3dPTed9frnNB8G3c7QhMnFqBDjQysjcUR4RYrkykLNknvoQ5a76pUyBQDeqXnPrBVN2y2SRuQdwG",
  "key14": "5KgScP5WQ8Dozt3nMfoEn2BdM3gHJQqtbAS4cH2RoVHNic8pRzxKQ3y13ZjcoA6hwHYQk9CYQ5itWwjW1b9ueq6h",
  "key15": "5YHKAbwce3wHY9RvebwUWropGFRYJAwp7qdrUxfGah6NaXu7uhazFMeQX8WGrE9ieX7RnTfaAxjj6njvEDXhUEf5",
  "key16": "55GXC3RVqhdswVJe1papz7osftRP1iviLEUzdqq75j8QHs9njZ5jBxip97qhTTKoCKkzZcDx42XD2jtCH8rUrTsK",
  "key17": "22zDeM13JFqouswSrxBSzKek5UMghnLaP2HuNfqxo5vC5oFp3yPoQVnDvrr8YUp4jVrDmwEq3hjtFp1ZuGdgoFgK",
  "key18": "D8LQU7X2nEf51AzwErA7Bb2te2foRCLPfsAyUYJsUexWV46F3RiV8LsPtnHRAqdCouSijp77Z9GQPLcEu2FtrmP",
  "key19": "32pgrpPKLEt16BcqKufYg6H24LhaqHa6SyNYh32wMYk1ERQfZHDH5UDJLohUGThpyVjC51iqizcBowYG1pfoMwB1",
  "key20": "2gVx3tGZwaVwF9umuXcEse2Hz79NVV1iJBAVKDio27F8eEStLHk578bGaooXx1L8H61rhFoxAUHpreVCuVwsJkka",
  "key21": "3rdRtuiWUVjPcEt2PsrB5ETXw5ZpfrufGuPLnp3AzEm5PLNz7W99vu3QPt5BYbrFuTu8VfXNeGrmDQvMbot3PAdX",
  "key22": "5YKsMQJfQ36T1XA9gaDVhHK3mHYozYMuWdSmwbzk4XaLnS7sRdYfCUAbGwsEFEtaF77qjNk5dtZiPfosiVexSKZD",
  "key23": "QW89d1kPDgVyfWd4vZsmymaTLzRRwmCXEbiKzwFj2Knydt1Va9TUF5vZirG4Vd9K1mhKrjFEe3tkvErjsfKnWgY",
  "key24": "55T2RzdtpsH8SBk3xNSvmdEU4dNeUMJ6tUQFxoBkKF4w5cEL6nRLwDRbmkmeESCRU9whuAf9xy4KC5o5zrwhaV3K",
  "key25": "3ZAiUBpdTGfqHcSkFMXq8byv1sxisTbBwN9wBXnKZBayoTS2ex5LGzPfZiG7gcsUfnaLxkoiqW6BmV7ZxWmJV3NZ",
  "key26": "4Wkvn5i9eojeHAp4hv8xGjgp26yJdNQAES41didWLyRLasxcDwpxRvkLEnyt2WLJT8r6JGWWX8Nva1gJLfBLxWGj",
  "key27": "3WR9XsAz6wA6cwxoZSenm4Ld123ueEDeGxMHXnrkvsVFms5PqL8vB2Voneat7jpkS5dwd3Y9wxUSEEGamp5DigPV",
  "key28": "5auDipHNGCJYixouLrofPGDaJpGfRXk9aHqFvzXKPrxgnS5T9ZSkuWPMVpAZCKDTCA7GbmEC6wetxLEEJU8zJHpN",
  "key29": "MPfDe9T9cpDT3eyKpMV667WpjKM6pYEv6t5k4xCXrwV2h9KL5kWs1bxYxN5WpQ5Au1t3e7AFuA4Sj4AMNy5jCkU",
  "key30": "ziMBSyLB7EwqrxswE26UxpwH6KUgNAKsdgGLw8xVN7cfKTP6o8Z7XtRYfQW6BtmvwYTA4vXNEVc2cirDUptZZ1M",
  "key31": "4PXfhhqWMVqJc9bRrrocgqC1kktkEFvDUx4GmWvQ8DEHNH38QcjRxNoj5ZxyuE7yzic9xEfwrXvqaxzLF4b845t",
  "key32": "nhRmKhuKzYqRbSM1Fe71sD99z7KqNJuZdxjLJw9vpuXPxzLyfG85uiAW8w48Ep68hNxWGtVyZzVWz7MKFfZPVuY",
  "key33": "4kWk3TgUV7oDGyp6EAoEtLfQPaF3tVgubAyficFdp482wXVyBm5MgphRrnhjtxQPa3e82z77EEbVNC1oFG7uNMoa",
  "key34": "2HJfdJLv7irt3fEhxsNC5E688WYZAANGxVmLoWE8mF12iwgvcb3zy9TPWGYfZNCdYwMQMo6Xh1PpPtdUWT61X2vM",
  "key35": "65WK8XW1MJjtyv9JTqpsQuVDupeR7kkpJfA7bMFZpYXCskQeGeCedQEqEXDnkksPXGSo7dZfTSwLwhSs3v83G7Js",
  "key36": "4hZgFDa6qmK2vNX1ivJZ4BqVpUuZcFVFK3EjeMbzA3VHsG5dFkQ6gQLH9Effyyig7kQxapvFJ28EBHVHo8fLzS1G",
  "key37": "47brbNcpbaZK2uVJVUUyShtobG2Fk2J8sSse1wUTbztDXJ17U8uiKh3KRCnx8EPXTygMmxxN57Nomjt5yVbo1YYj",
  "key38": "2xmFcxsQRVjYKmXxf2qYCrZnkgYoevsAxDPrFFXYSjUxRLq1K4rWyrEQbaPzm5eDxP5Lwfeq5Ajxx7xZxhwpDfPi"
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
