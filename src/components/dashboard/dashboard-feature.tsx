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
    "1MbDciH45RB7BdornfjcRpvtJhkXQC6v7vctjdM3FAZzSCw4DHAqHnHD89oGQ7o3p8Tz4eo5gSdF1EnBNoAykUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wv5vcej1tpSqU1iFUq8gx6eukzATGi9NfMWHoWqwVkmaKuq96ZaPUDwZhN7ytsjRQWEGXopyvB7kV4h4ZEZgsya",
  "key1": "e5vUTz6wqLJwDKR81PEm4MNh1Lr3TU7wNvcSRXnxVNjrYxQB55sgxnRA16ENmSRWJadyPEfz5d8emqz3P5U6dUv",
  "key2": "3BASxZRkd9tX1p3yZAigYd49PYioLnb9Xc91k1JEd6KtoYpk4d8FN1W2WYqfvDJuZuvqYqS8AosH9NSAQpj9fFXM",
  "key3": "3BfxuYsBPnr9zTBtNm8fXi4uskfzA88o19hWw3TqnCYuAm52bdfzZNmbESJDo7VdXmyJmRCPbn41VVhz7Jspa4WN",
  "key4": "2RbBsBVgKo7tW5W5PnJT9d6Rc8d1uprPbcHPNwTeUsZ7nFv81sRt25Rjkm4HuJwzF3fMAEXdLsnodPKwzEaCsP28",
  "key5": "2fwR6saa9WBz66q1ATvupGzh12jJybE9HXRWZrRWzRCAMTgmummaJa2NL7NMRaK7aundFNAA6jWhMJCtiFWKP4z",
  "key6": "3uT1XA7qwiCT58CmL4dWYAkQAeDZKktDHLBJpf9VgBvDTeDB61WmjUru184SPNunCKLUNqBH6LBs9XG3sDhGVJGn",
  "key7": "3QX7KMGZ59LBaGhGqMsfAaK2wRtV9TUyHfWxoidWJWYK2zmmRTepQ5YkjkHYqot2Nv9YgMmcLMN14obqvRrMJa1x",
  "key8": "2UwdoeGpUoNHBZonixVgyG2W6NbQEbQDiDkF4DhSciwoUXwqH9CAgfch22BxukEYZXSfqzWxAiqzuFBXUZtzz5HX",
  "key9": "3wCFHUp1tMEiuYhhUNVxJvevoPDHtMQsjXNww6CNH6s4EewCkkuzbqvaJ35yXB5C1fbvncgpmUaSpJ2t2va6DpDC",
  "key10": "3GeM7CzgAHvu6v7uoRD6qaq5jTVRBMRFH5rNiePrtoXmHXFYmdJEJ2rRx4v7hsrzXKXB17mTvcoy2VSk5BG5gAWm",
  "key11": "3Z88i2K6Dm45ZA98VPmmLZunL8KAiTFWHTtbJ5GqpT8juXSAPuyqSuCABYp8Xhr99zRxxNK9xhfSTDp4ntPp7JU6",
  "key12": "4suhbtPg3R4sxTaVPwCN9ioJijtttfUv5i8HJTnm6jJU5DvmMrdvMXp6AgMLMmScTpZipnwMbhPN5FWbWDPiYjSc",
  "key13": "2uL9nKF9sk2sp1ywkX3JZHQCNCJAnv42TM3xe66QiC3wpxYGsM8BA1XbEpCqfyqcfDP4J1FvjWhoR7GGFeCfCBn",
  "key14": "UML9VW8jxJyi5TF6fV1NGtsKg6eDeVm5X8bmzf7BiCxB8p2ZdKduQnWXR7TrUYnhjgVPe5KGWQvR5mfsH7PpxmU",
  "key15": "31GBQokjW8wFJVyyzpQxiXxgZRVfg7gppAWvPoudq9rpMv7Tty2G3LiKD3VF8WFsLWEm8USB8f4WXJJSKJtMbg74",
  "key16": "ciSQvjE8oh1j6m2mX2eqftHJyavN3LivtrhGnAFSK8bmFc6AGUY9XwPgCAd5bsC92o5TvXx4cyyzihwzgY9Rj41",
  "key17": "4nB3mHvzd4PBUB6WsNfNgLxyHo2RgkwmvUKY1cMJj5ug9eB2b9szrNpEiMrbgRrALr9wbbMFYM32aVfoC3btaLHd",
  "key18": "5Zf3quCipLFGQyp3CGctYSpWoNWNWpqpRpovS6WKA4URuNYnfQnGJmMHWmGZxZYPN6nmTu2p9iUmzsY71NpZyQ8v",
  "key19": "Gj4GctLsGDcyVjYyZnspjvgBuAPetNpE5kE8eKDc3gkga3iPRFoqtDMyjRcV6PCfff8u6CvADS5ePD7RhmRmzxA",
  "key20": "2hHrbRWqZLHRfbGRibPfTsVdXgTxcGGfnYdr3CJxevdYnzEsPxEYMBR5eE9x6aLYaD1WkCU1txyrQdCmPuNbZEim",
  "key21": "56tPXP8K3NWKQJpBkGecDBXhwwRZRwCcEANZLd81ZueZ6u3bz9nrL9rq3yZLDgBE1DxgHRt78BfLrNwWw2mSv2r6",
  "key22": "3E1bXPrct4jSqicbh7NirqGxYNdRuR3YMU1Ww4shLmDJgpg6BAXrUPtdgkabEsXV42t5Y4F9etCTK5EWzSF5W7uN",
  "key23": "3YBCuv3A7kKmFrBTFnGs2rW89qPa4TYF5TaoBkCEoHEZxSdM2DoNud6GTGufC9bgh6cF1Nj7Zy1Aq2Mzj7WfUwzV",
  "key24": "3qCLyGEMxNBC5T8yjF12uAsvZtiZKLEtW5rRcaX3FMaBmFK335SaS7BhPf9W3PgFTZAgRbe4P4dLv9F1hYoGDzed",
  "key25": "3H3PGySdLVsKoDucbcra6qp7HReXsVVZrUBAKjiZyiE4155CRQTKp6NrMvgzhSMj8s7DCh9JUxFQW3W4A1EPzFmC",
  "key26": "3b5owFFQ8SUQTAJXecNywfZiotoMWrHf2L9NHEkfKPhhzh2Un2VJjHy7H8hp35ykYWnWg4nVUGhDuEq4CVioiNUE",
  "key27": "121sLED5c6cWcrHxEAnzcTdz6pWeNq42Q9z9TVeabbuKxSDWztzHi4K6pTDPAvR1LfLJYg3kvEDczLpg1Rw1jJJq",
  "key28": "3HCw27KfQwU9vNXGWPZ8nEoPQ5J12hcHWFUjknfNvzkHSwjTnhqeVgs9oyYpdB1Rr8xViUFZNZGtoBZuP188sX3A",
  "key29": "5f6frNtnEnoaF7SLRxs1jYemakLJKMxp4ukdeEJy4keGQo7PCJK4ibGX5TgVkQf15VsTfxEqav6Jrepx2Y1oT6qQ",
  "key30": "2mDi9iVJke7HBicBznF6EtVBvUxKJ6t7MXZfgbYyHw2Uw5UJrXe82EnzRAoeWJz47wYpPTpkEyQEYEBk4QjfubPP",
  "key31": "PuBKhutD4A7dQekcASAXeBDFFnniHWQrm1Cr5trBmqfbavV9gDTtjDN4FV2mkjj2DGtRKGAbBspJnqUSVJcHGKq",
  "key32": "4nZksEpfbieoQoE7qYm9PZdyXdKD6FdXoBf6ZMTXJW841kHbP73X9qSZ8Dq6ktxNn5wtQWqd3DDukT9HmhAH6ERq",
  "key33": "3dtTuwjE4zBfef76BK5SAZcRhGDy591P1CsM6uvzSgDbmD4e59rkqLKtFfSv4AdjR2qBKCjE82XL2WrNUiXYhZc4",
  "key34": "27DuwH6eyfrikEn68myS3HjzRGWVg5APJtJP5VewsvRKd1MtYfyKGaWqqbPRybTcMVztRrMGEtdCFvQQXJEvTsJf",
  "key35": "2jCpY5S4P8cw8XHnSuCptaNShE5R6mNyAnWUbJezSWWhkbzpKeYHSQ3wC7BavBEV9mb71kRdHZLcTn2Ms7Jh4NSr",
  "key36": "3YTZaKMBzuK4EShiiBRHxFG3aXC6nAm26mjaN5xTu8pw8mb7WpYq53h3d11TrFSozGQibSZwjgoia1Gkw44YEhiB",
  "key37": "65y8HF6Zo1MM7urWaubNyuKhca7X4QjuESTpbbvBa31EhadTw4N8ATpnHPJTntsxyFoJdrYeAR1VzVAgHtbYjDMB",
  "key38": "3gNtE8oq2UgwAr5cUMfAPnsxHXqpBCoJFQDmvrpbUHbiP9XDj9soqNwvTvntCVDBePPKT9Wh8okfJFEFfEZtcvwJ",
  "key39": "25Q4q5fJqNTQvSsDVWDP2MeahGeDoRCUs1wdcZL3NfMNfQyxpK3ck8xS4PYcjDh49C8zHDkALYWF8BDiwzvbtJpm",
  "key40": "vXdtFJC2yh4dU8eDJqsUrkUkWicEeJ19TJr415xmtyvBfqVdPLXMUHdYbAaYqnvHFG44tRqWV6hHHvWhu49E8Wb",
  "key41": "3Bzku2ZN1ByF1D82yKRPJdKN629Yr1P4D9apJcEt6T9QkGBhZQn5eq2gCzStdHxFsk2TSJCyrKjWeRF4EZSTMYbc",
  "key42": "3sVNHkxMEpoSRqKcGSsgghXnyx9knPFZFJcfrLWnFTZSoJKimvEEodScauWf9U2vJ2PzjwvT5VCBNPVP88z1srrM",
  "key43": "4pnCmweAFQNVMPJKWcJmYgtBYzPU1MSGwC3xKNu2h8UG7WXFNT5PYcQKVXHveUCTGwufyKnodjHDUo6LmCNKjYeR",
  "key44": "21TJHrxypb6gx8BKzNQd3FrrtBnyJQqYexEYPEMgnnDw3igpiALPwT2zBc8CqK43xLujpSxQpSsNowqedbNR5nMr",
  "key45": "5mvGx28vRNX48BQcqPe5nnXpaTXwjwo9Ak7XYbE5Mb2F3vCt4PPM5SdH6rhNe9rqhZGoAMwyQ3yk7ETj9aKFMon",
  "key46": "3DEyiyy1Ku6kQuuohR3r1Vhf6QddAxv4gAqepxy2CUGAu3DfPHg5tKqjQVhdUFT2PdyZk2UAn634P75TBaqDASLW"
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
