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
    "4ScJnPDif7Bkg8QfBLeyfTekx7GWDmcMMjFH3kdZHGWpSrUPPed8XmWWT6zQ3NgJJ2gxNKgZht7TmY8fKRSNrgvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6bTYhhphM6BVEb8CWmdMCHYUHnV5T7o5bLEHchD8RjjhvMmQaayM6RQMt3VVHP8WpGKRoFsGrEamhDnayVPFpt",
  "key1": "3DkZHgDSGev2hc5Cd3WjpeqwHLY2EnAxRyoGzt3jxpTNCkCPwRTiUDhNqRyr7gxKYC4GyXe2R3UyysBQPHDMKsan",
  "key2": "Yrg3NoJTR7zagPfNNqSSeZy2NwXMu7y4UjqWBdDKAdtZHcLfuS4ky5ZPBj2MspfgNsLsdtuhVGYkjw2i4fCvRAF",
  "key3": "6MLnGmFtEf2KBYZKDhjwd5WKyY4TfHxWehCZxu61FbayVtRmXKPteB6nrkYnMNVw4VAYQXfgMavh9imeoxpKUVZ",
  "key4": "2jtYqp9itr4MyKFBtGhSSzJNXwx1BTRGLtSykZ8nmGrYS6Q76PF7bxcPjwjYWSwgtrZ4zSw7ayM5ho9adCR6sJfh",
  "key5": "5miANqZaZdXAUZQSpQRk8SkxhmGMRCaJRcapoZTHjiRnjXNmLnmXShxWCYn3fXELSzHnQ3f3Qv5c5CGwPK3nZH8R",
  "key6": "3Wg4ZL9erdtP4CksLRTdgrJttq3Eybpe9pkftDhuJdsbTvyrGSNGqdVod38pt939aMhzBBMeS1wAg68FJEMgFP19",
  "key7": "33i4qhM2aLubNtNLtztPWB3nXmgVmE3c3nTecVGkm2JpLsZkqpD6cBu7irKCjL1XBgdFYnQweJ9WC6xfky6JHKnq",
  "key8": "4veodu1hwTL8oT1mDVARC1vF2uL9ws3YSuDKFHKaBJCCmM5F8BfvUYybZu8QhD5EYwJQJkZkdSd7XrPuzFJ7nwzN",
  "key9": "5sk8YspBSmGyX7ap4uSAoxv6CS1kdTWHbB6HKhqY1fqmvGMpUfuYPW5CcRdEhe3dZYkCUNUSu3G7puo7QQqRWubo",
  "key10": "3CWmoR51pR4DtsGrm4yxwGqnBhQ1Sr8dpdsbN94gi3sk1zhJQV34HEJSq1xMubjSxMW5wLoqhGHoeUTBtjNqY16q",
  "key11": "3S1unSiFW1tPnVpbJyoHYkXfMHLWJAWSomfgTXo3GyX6B4BZLRqrjjdEo5ox5UMKc6D2MyhPvj2KWMbS4FzGp6SL",
  "key12": "3xXAPTAFjcb3VX7BXSYPF9V6B8SJurF97Y9E12PMRMrtawGn1Qfe8HAMFMdA2xFyNKDqJLThdprQfLyy9b8VzEG3",
  "key13": "4RByhkoSXH8u589wF6UzdXEiGsSwzxqxJ9RZicFBe1MGsqcG1CDsbkHEuYE6WvxneGv5WvWJQfVxzBgQEZaQMf7k",
  "key14": "4Hnez3d3J7wCRwBEdomAMbtytjuuqynjcBQe9eZNuW84TbERcoU6unoeFWSFN737tDqBPioJw9TAaDBNMNjdxhgv",
  "key15": "4yaKsbeN7Db7B8vZJFMNRkXGgAG91wCoSKFXXNMLgJn5WeWjJUi95rwvn8UjFeoiVXEacfdLFy7zW25JwYx3MiTM",
  "key16": "47BbLJ6ugExvSiUn9HaFnKLyJSaf6nndBxzGZYkQsBiQ6SPGxXfqwDJ1hSMjdbYCgWH5VWfCGDA2o7qcj8fVEdj2",
  "key17": "22e2FNFqxUDpobt98PsggrH3TRhJFHQ7cCny11g2e2zVfCmKphQ9PkYWenYmHsr841mcDoftu2ymJjEuSDp1m8RB",
  "key18": "5GCQou3cFbXNuuBgz14XWGMW1pvLLspeYXnQCgFYNHXuzhE1e1RRZoYgCyYV67EBKnHCgnmtBkurPjMmwXiEzYky",
  "key19": "4fKtzXGDkWzDHwPRkC7UdaokgmYcb913ZcQk4UvgMsVBbT3pK33dCsNsbtPrxcEnYmishUk8TsEqqjv83hPZSsez",
  "key20": "QCGaRLAvqfkf9iyan8bzHJbKLARKoWLRSFxwm1AstoDoV61D5v9jH8QJpytxE3PqwvuEQrM1AYfUK4heYVG1CU3",
  "key21": "5pVogUaZvpgvyepXo28VBP1GR1hDFFC5P7FXM5LgMkfZRCnSjo29TcNNRympfo9tqPuVCf1gy3PHcJmKzZTXNNoc",
  "key22": "5fvP3gHz82y96nhaJHE7Tq33zK1HWo4cEfbgm7npNns3eL7v7rUBfV3uNkYHL1xfcXqNVmFnoExMREgHJ4DoAMbz",
  "key23": "2N81pH3HzcpgrA15RspD7Me56cPUviYRCveDWzLTq5AybJxd2pmKJNCAqjWYUn81k5kcLnPvF5brELGuhZZw5pVM",
  "key24": "2mc72bFK1i4oMZvZtKpiJo9es92Gm4RHj9DTM33D8RcivuyeYGi8PP7oh2EyfnDsuxLEp4Jdg91i91SUnZmy4HXk",
  "key25": "3ZFhfM7cY9HNuHRMBfoH114vp8SxsmmzKDTvejYUmCDKUEw3KApAXD4Lt3DUZF8TdHA9Djw3kAfdrK1Wg9VN9UtC",
  "key26": "5T6428Gembu4b8SFk8WsV9bnnkit87wGZLnyNdV6kHqTLvKcLYjEwvmHdF5znsNyohYyw6sHYLyfEjgdMjMMctZ8",
  "key27": "21Pf58HYWHsPcoWXz16MCprLSaGL2JDUm2aC14h2HpmpGcmVQr6JsELDgZWxcTfJ63oppbUrfCwH6cttYHdQzbz8",
  "key28": "5yTppkHx1wMLfQo8wyi1hhz4gvGAFfSK4G48C7xTM1JXrddaSK1Xou1Uh2ADGd4FvQGDAa4WZRHsoNEpP2me8Jqm",
  "key29": "4G3GHuvLSkdiY6rneW3ZaiRcriwsf8EbG9VTqBN4Zmrpb5EXwWq5t5LdpkTasqsjeRqHkuiKygRNfuB75PzkvSM5",
  "key30": "3AYXYpnWNvVrhmLACuwqrvAzRAhzXASfBgBUwDZV8hYg3mPGF95eQ9SpP2M1W5irs3sk433kF9YzMVu5BRWWVW5M",
  "key31": "5hYEzaYbvCs9wxD5HVnxAxVpXJM8KSa3WuN1eDoigejewCenzB3tDZg5f9tEoAfNS3xCUnPbppKZxNg2BSTcfkk3",
  "key32": "5UCJ5Cj7BpDHtfNFqwr6F6U8aNhU14USxbBBCnUthes2SZRSgzVNYEdoqNa5kYj8RwKXSBjVFYWdnswDHVaageNc",
  "key33": "5vrsFw76VPwgUHALAuj1w5X4T7bPiHX163uyr8UnPxJUn2LYC5YUpPDcmvJGoypXyfRPSRqkEuSADEEjb1486EUW",
  "key34": "3HbaeTYnxjKRYP8ouHfDVpWGes9at4jkojFNeAWJJJEJsXmEFRCKNfRNgyuEZM5SZhKjYX9uLCWs72EShzJKece5",
  "key35": "s9peGes3UonrrGDYjfwLkv4BevVqZ3RLt44MvaPE1PZRkhGYBoy7sKMEED6Yd8XDJfaTbybJ7RHnj6GaEeJkdi7",
  "key36": "49VFpYym5eSEj9Y7hJ9c9vo1RKbu1CmMScra63RgBL7dAUk5jGB5yV4V1yZ2sogvTEBVnrWBCtgDXXjoNBNShLda",
  "key37": "5DA4Epkd7sQvMRburQrovCQWpK6rYaWavqSXFDeXzqxu7uGoeoXwSNppiqoNqHi9QuoTN5AHgBisTCBoamEDbZd",
  "key38": "2bV31M4UaHokqzteDap7awfuCriEseVb6JLMywA2XWbTMV5kjfiiJWuGg662tmz3PgZ24msnSciqESU4Ma42Vrk7"
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
