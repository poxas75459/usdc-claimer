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
    "3T1PsnWLFrcp87HfisLW1w7yma3HHHgziNtKUtQGADtHSTMy8QxzhmreYR3Kik3Pt6gVJS5o7YgBAmRU5GT7RHZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rCdaBtdTvxoZBroD9fRD1YRvx2hUs4XMiUEBhvWxYVwGPLS4wShYCA8tgdivoWKoNiRw3WRhMpsUTxB5wTCwHQx",
  "key1": "3rEbcZoPdcJZTnB2NVSCsm9kErZHqjqyViwfmHTE9nkXkRumDz4PfD9avZP5TypGQ7m1AM44PYJU7tVQDvrtCRjz",
  "key2": "2xPQHtXDKXS5HSh1UXP5bHyJoT6xEdxWqdC3uCfWAbH7sntVwuvtB6WVEkszz2pWyckFoAZ6g9ng6w4ZhwR7QNo8",
  "key3": "41kdrbr5k4x9dtJbTb3ctuVXYZMPjA1jfiCiah7gBwoDcw3C7BCP3Pzwb9ddFuxZ2V192oJSTt1pLJLKpkVDjv8n",
  "key4": "4ap1LYoUu3iJR3GB5rXHF9mAUo39JJJz8ndoPVyWhyrh8Ea5VTKTUE1ikmAWigz71ggmpNgsjSAFHNwbxAg5xwcw",
  "key5": "2P9uKw89WXwvkM6v6gteE8G68PCET8GL8RnPjHvyFnTPmFbLUVNDWsbD4oXXL5JyWQ45QwDvvdEJmus2i5QpWYTi",
  "key6": "538RP32yioKeuUcT2QEFdJEZUK57gzEKQCcMADEtvJkZKinB34MufLqtvgHhPFUhG8BBYR6Brjgv42yVbSfDbhUB",
  "key7": "3fYqQyYuzEBLGSeSg7RJKzhupJmvXRo7siv8BJ8xgTLHWbaumi7awHr7WVKzgkjAmW6wi6T1uwGDyAxHfic6McEC",
  "key8": "2qBceoSFDLRYn8RwuoCr7tJFCCaqC6g5UUgdYsDhFqZPZAXNnLT878ZNCUDEkR9Rvtk3GpujhsDuipdcX7a3PJG5",
  "key9": "5A1prZAviPbxDkGpXUrwudVTxU5txu3Wa32iGirC3FGkG2bhfhhLaLoyPG5RjXLw61T5W8DwD14cubsoDEpFs19E",
  "key10": "L23NKEUKUfN5C93ZcAhVYGQbWthrvJrik8cQUpXgA4CtxQT9zC2XTVC9n399vFdeaNxtBMkopFkhxsNGPtS7G2i",
  "key11": "4GEqxvLZgD2f1Az9iFsiuZ3JX5LUzpoxbwPsgZnU9P4T5p714LPKkZZy48GWV7eiPiUR5hQERTyYuoBgXzkFQSTg",
  "key12": "2s9rTTcaWKU6WTTU6UBhiiwHoegF8ygkrLZXo18EBhJC9c4YTcMUCTuw2s6ERze22WCkK6uA5WHcSKtHbiJzFkBJ",
  "key13": "3pwznRAPdJ7VdhN2AL8c9hnf1tDLxrpoWj24v7t8sub1Y7ivwfBzVj4g2Xp58rTTp8C9Ym2FH4KfVYbvi3TX3GZq",
  "key14": "3xFXBFZYNiyHwCZwjr3HTnwEp3X6YYzmPB89vpVy6MSCQJBV8gLEFjmWBhEkkcM3ZCyG8TQrXkxcysSiiPtg3dh3",
  "key15": "2xgLd36uEuAiTZ1Zpqhnsobz6n9L8VWsj7gMrXwu3vMkTH4YX9qjpDrea8hpg35xmwEzNLJdAp9nWwJioCJDzavE",
  "key16": "27nmKMhW3ox2uXHaAzNmxqxjm2s7ahH7hpxLywkpUgD1fvW2EPD68Rb1ssqMWM8uNcgcJ1NTmAxmQ4ZDzx9X9F65",
  "key17": "3Um18uv1zFfvbhC1btuPVfUYu8zoEPafk63kcEY2nc8bcS8uJ4MiYqMSHc81YgmwSbDpSc6JLdxFwngLTNLJ4Vxi",
  "key18": "5E3u7yiLWiBoLKzRCFsfSJq1Eo6weWHFfjwVyQwn28xWc5pCKbDNC3F7NJn3uYzh1bUPdpXQkjie4eYWySXvc55r",
  "key19": "38KvQ1k6eG2zwvVfABV6cjQo9Vf8P8ZLXK2DWoGH2WZ4v6kXqn8DPd8jvzBURsL5zBRdb7pusR6npPS1M3f7nXXz",
  "key20": "5LVr5Vhh9fTrDgLbZKfuSfagRnwGdBJSJPedbLB2dixmXFpR2xV1zPyvWjGjdUERCjiwaBn71Rr7euUgspNvC5aa",
  "key21": "eXuZuPiwzCvjzoL4w9QWcq2DguzGgRmnUqEJekrW1cuATr2grKXEFH5XHvp4jCrhzp7u8HDTtNgmagJErTMarcQ",
  "key22": "57TFxo6gLdBepYawGxnidipzFWe9rzggN8nsR9tpMgd7ndfvx6jg1coFE7M47wBGmZHe3cNAoLF1K8q4JAnFbg6B",
  "key23": "4A5cuBxStGeZQSuNHEnb9TH1zo6uaTjW2uCuwBsyBKkT9yQiKKyCZPViqa7C6epDKBt57i96gXFGmRP85Cs326k6",
  "key24": "5Lb1ZotSX5q7CB2eyXKFGd4sV6665PH17y4CBPsQjfjeFs3czSzK2ZkGTz6t7wMEiGP2CeBN4AF1ozSW5bpKd6fy",
  "key25": "3gKWtawYWkjx8X92d3YAg1stPa1be7N3cPDxYpzmHdLgXreUbyWP8z98RMUSW9bh5MgLqRhVpsVcsdcBqQCJ41wM",
  "key26": "2xWJST2hLDnRCcPWdUW6UDCghgg7C42rhH6BxZQxDvbHJvxDg5id7whyo82m97sMsTHSYpAuPPgSCYBhxVH4c1E5",
  "key27": "swjGUo5LGbSQ9AeMeqcs7PTETJRo2cvxAekanKZ4Udf4qZ8TghKW26u2Kyq3W2UfCCtsCKzzTzWpkrJqmMNR2sJ",
  "key28": "23vmBK43QZe8XpmaG18gUkk1ey5Q43JUcEzCpFCQzwcjNMKtrFQQWjzBF5S5pa6uYsTYqJeVtABn7DF8Ba6gK14v",
  "key29": "2mvzheCnBeN6nsAztLDNTQgoCf5tc6kGgihgi2EE5ShUA5EX4ygYpYCofQNyJBGtj9Pk7UXmGUJN6ktR2ypwThcY",
  "key30": "2MNDB5ekJWBy4Spfupv36JYi1d5wh5hSjdYB8qfR5ieqArq17zpdNnndpxVd38uXoYe3AM3J957T3HnAtbXzvUQL",
  "key31": "4BBtrjGwmeW8kAfDGEh3priDUZvRVmWifg3yKUJxgfJDp38B359Kg25HuLXv4m8uqtVyBW1YttQzMS5byzNpsdVx",
  "key32": "5y9piLHznd4AXmJ5JhWMDemTuEQHihQWyv6oZ9hzw9JMULvPdW7r4senCHmYJRvwFMXtBBZusfGrDMpzi69XtGTd",
  "key33": "5m2ZvtgRb2NsrrL2QcypSG41k4d3287T2VUybbYKfEVRxN8a2JXZam9zNFp69pApjw6dZ6gMUVQuY8esF8uVffTQ",
  "key34": "5199Gi5eMh2XPxRodJBVLq3NxeugkuZ2fBCvzJ5tVBShnQ7qUJ4Xih2J2ANMTkoAsrXJd3HG9EtfG4ZePaB5LsQz"
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
