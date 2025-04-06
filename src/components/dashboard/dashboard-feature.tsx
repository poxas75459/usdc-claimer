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
    "5VXdiGqQgAahodNtkw97YgCma5iAKZDkTTBnqxoGneDQidJmWoWfCfsiyD21uWQeJfbuyRyjV52eGBH7FUJzFjXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aavsx556ZTXVu8zBd7eeytgfPZnhndq4HBME6eU3spoy5kCsnXp4XrouRK1Sfp3ZAzjjceMVBmehv2gCW4zktBf",
  "key1": "313Z9hNny3ujSdmTmf3PcHLP8McYwJGUXV8EqCujL6Y9AdbAWBzZNR4Lfz9B6ksKbvUSJQBmEnF2ALJjpk1AtU63",
  "key2": "5Dqxtv82s63QoA8KVuSSovCG9ZmJBp4tAanMuGCdcJySvJFbW3eJYQifdC48uXvBpJd5UuE7XAQ3zwZdTBrum5n6",
  "key3": "9EzsnJdYLdPimejagbDEB7eNAyuT7hfgwwrzW94KyyuSU3ndkjgbp6kRLELSqPPcp8UDGaLwj6ifakvLY2bQBq5",
  "key4": "2fiRYfz4kN9pqbeM58qUWSzwpj4Vs4GHC2XkfCGk7acPtA8n2GBfWbJFxmk26TkZEbrUgq4E2PpBgFuRavy2YHWs",
  "key5": "qUC7jMfs3y65Fz3eM4TiGQJzZ1CF8PcLJ1GbwNW5Xr2CbmhvywBks2Ria3FVrdvTUH5SAZUvtNEjvRhmAjxV1hA",
  "key6": "4QKjTc34GbpvVs8pMa5GY44EYvb8mLg9t2wVouUAUnAHBCJt5NEXqTv8kSrhxgBWTWwvYCC8WtPtdasdRGkqidGn",
  "key7": "27wHLMBaAiu8b4TWSjsA9Fiyx5SUeCdSSTNZKAMxjPJkv5DFQ6M3kpz3Gi8DLrSx9ThoqND2bYg9AbnkdLcC3YJb",
  "key8": "3NFT7aCxt3fG2LYoLcbwioy1MubaAM199CvFvrCDxEN3wqoPhZXwzV6WxjaRzVZmeierBeeBum5K5tox5tWUSAeq",
  "key9": "2MpHRZEXKHnenXoHLzK3peoPFyBTAAAkmYdxKrkcsBXL1EaXLsbrs98vqPkFhuQohxHmjKYwMHjAbk7QeS8FsQak",
  "key10": "5n1EzEm53MsgMaQHFhRkFVFaAr23eWa3sZGSHyWrjucpbHsvEMGC6FVf2ZstDnqsHVwze5Q2oSmffATVZDBBPUnA",
  "key11": "574dPwJqeVoAWDHXeeixxtnZMiDPFCHuDp3XkBBQVo2Ykcqw2FfuJFiNsLifKzgRojqKosovSunx75K2M6XZqi7Z",
  "key12": "4KuMXtFKcbjrvWLtjtnLuxTb9ZXRKXs8UVGGW5QAp9tkVD4KRMTt9R19CcUiteANvrNEVM2bYy7wgtyHRBQF8ELi",
  "key13": "5RoGNHUqQJPA9krjzHzD5SmAKXkDZENbdmGJyPC1VFDqMiJA8896boRzvw3FVennz4cRq6SeDYdVCKBMrXbJ4rdK",
  "key14": "cJ913gMMhHWmpUczwfrZHxv3QHDkv9XxH4LXUkakvayiDwjx1mhStydjYQVYc6zeGnJHZcCdaCpNRFomBiAheNn",
  "key15": "32sQDYS5tnN7jM1hsAUipE9q51V5QJdfXWvtxYz6jLBLFPjjC6RKRyFTSEq9mXEzXqcVNdnWW8GQ9wkV9NmYU5CZ",
  "key16": "3FkeLztwz7tWk8N1wQEJdc2vRtUsdPnC6zDmuMdKsNYWoZSFV48FwowVd5c8S2vgajY76DaZBFMyorqrvEsBBEC9",
  "key17": "4srdnTptbwVsYYbXemK4KBinZiwTVKGpMZtp8zTnr42Nv3qQij1U5XEMdaoN35ygjx6BZi2fBfQWxyRbhZ2QLMmC",
  "key18": "25Uoddj9rFNSzs2ZXoDJHUF9o3bKuaNqcqarFRBjkLm8dXErLCsDZZyJgpL2QSqYWDt5uc5XkbUe2w3WhGqxTxfS",
  "key19": "2yHfJeZ52XVXDX6GtnWUoWJLiGpsrbfhZNmu1xZcHjEgg9UD1xx4VjVz9GHqM6w1gtWX6pYuu8BA6ykFCVG77Rn8",
  "key20": "2kw5WR2A23j1CkSPLmBbehETcq7oUEbnhywcSQH5zvMptDjLvTrp61VShCygeSLar8JYwNmAcfeTG6c29rsxLXst",
  "key21": "4diD6ZHSDN3JVheHEtdznXjicumZB6gQ78jxyKkaVrMVzGrTWKNmXdq1ivg8n3KTP475qa8fGmoPNLxsbiev4jik",
  "key22": "4FUsVbeWApdgSwdkLCs6gLdVKjmHuDrPqtCGQSviibL9vCeZRuDRjZeHnxvKTyEa3RdXoinc9hrDDPy3Luy9tZwC",
  "key23": "TCD3CaDQcW5M6F7cthSTtdiAKpf9pfrt43LPBDRePSDVDoQPhufWULwejhGkRHxMkujTa3LSvmsQyqZxH9n2ojW",
  "key24": "29VoXzMGDjMmFSJhntVmUarpPibvu3P1YYAyvCa6P9NBX6j2iSHSQSNkzAx9VRjR9AWqd3RTyKWChGt8BCAT4u7q",
  "key25": "58pfoenvbN1yHyzWcxNRZ3HcUBcUPhx2C46UyXKKoJEhwEYeVapUpk4qhQLFtMX8ZA3eb898YeEFzAunxkECpb1f",
  "key26": "5VXkxC5M9mtp9nuFKjqyRA4WCfr2cxxpn86e1oULsH6zcHX7amcZNFYaiFjRDdwTtGLSj6mwAFtsS7sM8gHhuVm1",
  "key27": "5rGqV5zB5gVRZdLynYkpd7xnYcu6dSZXfBQVDmnqGUUKk1PbaEFcBFkDWherVWRiWXGEgagSaH9bhZoi71yfa2ST",
  "key28": "X1WqBEeCegYyc8KS7eX2hX2jEziqADehEKAHvE1B4JyD7KEc9NwTAFX9Ag5QYAuhay1zkVRwsyifbEnSBKgMP2L",
  "key29": "5CxAFK8XBQJhDqReb4TJXKP8ubvcDtP7MgA1Pobh7pwQ45YuuKCqhRXthUHWCWbsxoMT4UgPLveQtkg4WdiC87on",
  "key30": "2QjzC23NEkYw1x4DtUxEniFjp6vnkSEdttRjrtdj1oVdtJZ2a2oT5hVpBKQoLAmzibV2adTskC734kasGY3UH6vh",
  "key31": "8S4bKbuz8tqW2YRpkh8EmCAEjzLmHNodTbqGt6jbhRL1prCmHKopa1F76QPwYpxgAPeSbighuywDoEGsuWBz1jy",
  "key32": "d8p9ucxP99YNVhLrb8ZsWzNESfFbjQxdp7RgYbAxyaoVDu1Rnzwkefz1KfvdTKryUQ1E1QBskuGE1ettWSisN2y",
  "key33": "4WRC1GmTRnnETfNiri6cLBFTc6NdwbCjh3Tj3V9CGhmpZH7g56fpPfGikoQvTotaj6kmffC1hYTFKSbY2mgFeQBk",
  "key34": "5Z5Q2JqgzrYzS47aPqyTSf1Ay75V9F6WnNheAhm6D9bV1WTphndr2yagC3WYx1UmjvTQULUbNGnPikECU646t5nS",
  "key35": "y5acTEHDgN2BNpCndKLjynqhCE6knCr4WdF4qhXMuayrpXyhppLjnc5YC8sbSPV3dPjzeVSe4HyAR2CwgCQvh3T",
  "key36": "RFhMnazWqusKaSh8Wzk6Wi8sacycx7SmJHg2LfmRdoJP7GzLQkJKAZ7cjweMNohbmXDwuVJLpKd8heFcLcCmHht",
  "key37": "55wyhDouDLMm5YXZwbZZGSMRiiNG2CUfuhKuTgYc9QmAfAMX6a5zVbL4axnAagRp8aZyM5jiP9wUUYhrj2yC9142",
  "key38": "5346zfWjYSJ32mULdC3hgdRpUkamdh9tVKWu8zzfGJokLYYnDM25GVnjEV6bb4PrjpDD734aJJbDF2472uok9ZFJ",
  "key39": "39ZCfSJ1qNpBvGdhBwmMeF9j7h8KagDzYu4u7AR84YBgUJMj9Btitd4P5h2DALNsD2wt116mqkXvASALn4CA8eLZ",
  "key40": "vsAj8ucPiNzeysgrHaRoQa8r5qMiTo26Syntti6fMkcBB8Kt25MRBDbno2MoLEGPV7Eq4vu8vGEes2djXj8thWw",
  "key41": "5yKveVq9W3EcifCDeGnyUEFGWCEnfp344AtJGnW54xKJESJHt8J8K8LFY7K79Cm2USpyFqRpCwMfRDyyg7yvQLKX",
  "key42": "YZwKaRen9WJ6ruDGUNn8joqSizUqWvF7MKyVoFh3kahM2AWDHrt6UsF5Rw97xTxM46SggKPuD4HW7vAv3CKs75o",
  "key43": "3xv2nNoSgvhR21smzbsUwGpw62bbzuXy3B5pU6pbteRsBcVmAVfGEkVwR8FMQWwiXoq9CrJChtjC5q5iNXYbp3qC",
  "key44": "4YFiJspRSxoXX7nLAXKj466Xt9qsqgtoawaB416Jazid1twoLwHDSgeTkQ7GdGLEdiXicTWZC9tjgsi7XsqdMpj4",
  "key45": "2a3mTMtwvfEbJL5nnXwfSd2c7xeiu3CSAe8pkJApNed4456sg4pQtgRkoSuH4bPA5FhAnWqBqpFHVzsQeCqQjRR8",
  "key46": "3EjUZn4ygcRgJodZdknMdPvNpoNXpp7gLdd7i1vTixwYQRXBib8ABLLHU3Kzngp4xDEwMpjzyCWF6J828mgrWktY",
  "key47": "5PKGSwXg2yXsoZiqV3tpnTUpa6yjwyJ5k94RVTkVX1jXTb6DuMvUkuucYmtojXaxoVta3qBLekkY7rzNjsrDGMQm"
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
