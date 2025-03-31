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
    "3n3GEHkbnnYp6GfRno11NrT1QWjFcko1Dp5z7XzBGQcDeWw7CpRMGjaXkWz1n67ZDVmLS3yC9UcB427XBcvMzgaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6GE4nr3tUuSAAfTh6LSBVagNDoX4WxZYRuUnKMksWyZPatpow1AoMtgQZN1UakiKF9qWzq6spxnsqDM4o1aRML",
  "key1": "39mReGSUikfA6frTLLJ6C5tPqMeQVdvjKvBS8bBS1RB5DaDbCuPpKUuyDqttToR2AvHpdYNqvXDcuM6N9SFqQYwQ",
  "key2": "2h6Bhn7hK6ACyHrLxUjSB34xB4q72rQkviLjLCRMoEcSAhCCcb8BMXTNaxpp69KNC8yqkTvRYXst7sa3ufV8FgY4",
  "key3": "4yutvEkGpE3xou1hWKQNeMkDLQi6Hz9oNZh6uwjt4oYXjxLUPAgi2P6RbvDgCfez8opZcFjcHRMt8R5BhRJkdpUt",
  "key4": "2Vvp9KDKE9FuNk8PFqqtJiqfKifLe8i9tQuXRVPdWH4HoX3C6xgd7nYjjTEYwWDNRVkBcdTqpZdCbtj7mVMxCtzQ",
  "key5": "24sdgjbwDoNJ3JmeqfcVTEuPBLqTRwFgLfXg3AyWBUxe1Pmu9y2UbaFRtRVE4rXfQt1KeqXGMrziDGdX1FRtcD23",
  "key6": "5BgYjYVkTKpNtCxtgrzy4SoKZHzgSWe6oytKLCR9g6tUEyYagh2sQkumzvikgwG12f1FXq7cXq28Y8uKxViMzjpk",
  "key7": "cqM6Cp4TE1nLKiQCDwy9dK9DRTFjPuKP2Gp6J1Mx6WBMexdQBx1Zo4bEndXV71ZbZZ5znsF7HcAD44EFvqGrinU",
  "key8": "oXh1cbc1rLrMpTT9tyigkvAGofTP6r4x3HgCNW2QMaQbctYKHGnyySd3D5WnPQ3eKm9vsVREXkEChnhoJKk8qgV",
  "key9": "5KUPs8Tm5g7wPiu2HthvYV5WMDNUR5wNhNXXjUzMnnsHna9V5mPgJFcTkuWcdemWUYjHsmPQNnim3YLQJwDD8CUX",
  "key10": "5Qtf6GxqAvJ3r3MRtLuNDjXJTTNqkKPwanyBXd4YaUQKrtV4HToapm1mvvesn7mFRDsgmxNvMKFpEpW4mkEK27zi",
  "key11": "3uz6UauK7Yp1L9LzzsPu7hKhTuqpNKFgXYtLJ3DhgnfxZEuhM4DsNWGE555Rn7hf6hrwPPZyB69qKEPmKeC81F9F",
  "key12": "2vGttG2xkwN98wPoUSnCPHtxRzfarGb7dvAqtdsRUvfhDSDePMZynUUV1G1TxF3U1m3xJCFRQmAuPwkm279PiWGt",
  "key13": "4Fd2gRTpquTyUGHz6RCe8nVEb9mgriXghR3yLbdCt6SHx4K3SLRo1ELcEPVXgfYqHsGDqK1Hgu2bbiJ9evCye1QP",
  "key14": "ratMfepMEbe6jw6Pt5a8eqqYX5RwsmybMfFudz8jr2vJbRscbLMsv98UpNbnzZH2UK4q7vjGYxjHYgFvUqpcKgx",
  "key15": "2tSaNVcwjYvbPk38NbSFyYnyNcceZEricrvitrefgUBtvDtTQZTjie5AtNZdS6QbjnVjv3KRMozLhXsq1MbrUBRU",
  "key16": "3bMfRP2SithEznA2v3ERPqJrhMCeCDtzVqiciGRZcYVhsGUdVcHJaSHKjCka17KDK6VmHxrgGv1ganL1zQj8cHhh",
  "key17": "45QUbHTjFMEhH54dPeBdU5P22WiVfoqLK6LEmfGSmPKP5Y6kYM7WE6BC2vpYoAsnpvAehWKp8DaxrP6uWvpamgeR",
  "key18": "2mpseqANbKoZEhK9joadZZqFqoLjfPbavQSESJM3dff5owKXj7zWQ9ZzRTbXuMhj6ux9smWJzqFmQUSzWyQKanF6",
  "key19": "4bEc8q5FTJbCHhHTQDzbHmf4HzFQcJgMsUBtxGV5DqikFzbEgb7nAKzuYupCqatDvy9sjtK8N3A22LAu9sFWUB1T",
  "key20": "3zkZXd4dpHTofZgBqPDpgEvXXspLWZRbJqcoZ9ww4bABGw7iFoDGeHwLh7AGLcV37vX1yFuStsJfsEGsm6geEszB",
  "key21": "3fFqs32RrvykJEQtkoFnxJ3XwQu1CntYqdz6mkx1ShxrA1D1oYRHosy8HJ1YcHG3XvCF2wpz8bSsFtLZYH6Heeuw",
  "key22": "2eW3Wasmj2Wf2aTCDdxSp8cgjxggXzZbP8SnEDvwMwLr1886oeP6F779fEvntXJRDgHpLiTmPEiaemfBtnByTh2H",
  "key23": "5BfcLkPrDUHb3FmmWPdMYdZ7hHKJZ7zCu2cToUU1St3RRkNNx24DVSbgBAXk6XPBiQq2kcSG6KhXFKV9Um3FGzAF",
  "key24": "2QfNL8jMue6puyoPq1WxzCVZQWFym9Vy2WHEbMRxfednoZB7RnVFUAsugcVctQdseGeYRiSdymN8LpnK8c7LdAzU",
  "key25": "wKr6ryqSoKtumFLcXBx5HNQtTyJHFnhq7M9XdFpXBM7ViN23Fw65gEMXkiknueuGNS5an7fZQg9RpsyxuodwWGK",
  "key26": "x21YUMyDVAMzbUiDgqy7ZCKxERRX9utUEq8xZMdsh1QqdbbLDbVUTW75cy83qLSS68DdeF6TcgZDCR4SNKqETwx",
  "key27": "4vZwNnSFC6Depi7Aa7DYvVgadNTAknYu3QqJREDQLmgvbdEAhLUsEgkpAwkXYhaHhG2iDdDKifap2xytSE2SyqG3",
  "key28": "4nS6YQG3axuaXmmNcHiwpXJ9sQ2mLkhAf3GsxpQ355SvYNCYuG4v76x3QGZ4m5Uw4kFjuuhTiEYZbhq8KWpbU8s3",
  "key29": "2os7F4tnncSKxsNZTZEwiKo3uCqgMKGMCNapRqwKkhyVXJWVvVykayrKcVSN7ixGaKhAZfkpYHWhVioekBcgnbyX",
  "key30": "3HXTEC72Q1tYKbLUhmAf1zTPWrDvBFCsxKYqEzkHEcFXk32aUJzNdeVPtdyd9xdV3g9PNfxhFEoR5XRpjVVUBP92",
  "key31": "37UrSHM9UWi4tTSpP9s4u2QtH3HHhgcfMBDRLymqpaTnNKM27aMKunCqnGjhBTckvU5MHM18h5DnGpHFLjcvpZJm",
  "key32": "4vQBGenrNXe1yuZC3G8M9fHSQSj7FpC3g2cjG3gUVYoc8g2xpPcdnpeRNjceUGSZGoF5JwGtjPCm2r6LFZAc39Mx",
  "key33": "M8DdrExi9zC8nvKrArjjp328qp1ZyZNw2z3a3NUcixzc1niWoBVpENukQPF8nQSNCdx1qkguXgvfwqMY3iXzanN",
  "key34": "4FchGfRoxGKb8vT4mmnDdyvHsTCtP6pJeYwhghgFXgVpQtMGPhHfjoHRJyfE3uWGk8uF5zso6vchpuosZyUyfV2",
  "key35": "DxCbVizgT7a2eqKsNdwSA38AB9JdNgNGQu75AjBG19edaiKtDCXZRaFHxv1woTrR3JePAdo1nuhtkP5HzhDp3Tp",
  "key36": "4EZC22huJDyeF6vq745L4RFbsi3TJx8tkw3PtpStP482KV4xrUeAappZW4mGikPCaRxVRytGxwQ9ZaE7xBQvzaWD",
  "key37": "56NRxzhn5UZ4cC5Vx8iisg6aeLpgdhnSgvbQrm8WqE2i46458dqoUs9cic5oDm1Gcd6uBCLPU1KSyTsDLs2DTM4s",
  "key38": "3H5pX6T6upYq2xTJTMsEGgPn6ZXA6M9sfTDAXha1eSZRDxCTU8X9BorkjAMVyxLJTL14Rd3DC7zA38fGWTkPPfDB",
  "key39": "2d194XpUE2LehPskUoQ5jcxaM57VSH5zQeSeT5By1SML39GByq5NnFThMNSHYbnoZ5oKWqMNvsSJxZ5pGM3qjxhC",
  "key40": "3Kp5xgcYtRNe5sAyuC5FJD6hnXrPD6TneqhWer2UQh9R8vXaABrXsvm3CCJUApTyPGMvLr7ncGki7gEwfuH7QKpL",
  "key41": "1vUNFvtS9JoTovEj24KDHkRsddxUQGC5aSMmnGVxjg91JZYBkwyfmJU6sdoZysEQ75yWWBTz7TSPEqasofrqzxs",
  "key42": "4wn7gV2UBxgjMfZsdqEbpSMLz4AzjXnaeZeKuWxTzwrvy4J8myy1Ub4hvMmwD42g4SCHrxFKRrJ95NjmgeTNTNsm",
  "key43": "vtS85h4SWaUQYXswHKLbyovDTVTiaJF1MEx7y4MNSM8Ew7mTmVFpWABWP7RT6DBQ6dkFCq1bfQCnaY1GTigJipC",
  "key44": "3YriD2CDyCaGL6oBEHBDcKbSKyDhK5zVTcuQKtbnpXDtfCieG2oobd6bxxmqZXwoU8jyz6icKpMX7yTeHvLbHGgr",
  "key45": "2uVEzmDtUatBeBBfQRv1d65DhGJ1ziUGXU8qaZRBwNCqn3Ye4svW3yuLwBjXhxunxtmS4Ermv9zyjgqc6fHP1aZc",
  "key46": "4m4Pwp4wYqDgLoX4np8KgZQ6972TECy4orTTSVTJog89q6RGV2FR7ZExJwAAcefYYFLJcRQJ6VRQeVW4LprRrNaA",
  "key47": "4ercksNjb71ramGjXbuEHk3mVjr3rpNDjQEzVAnrYv3WcKraGE1WTsLNCLRpVZ1TvKMqmcrAXwKvBec9qhxhzgGn",
  "key48": "4sHcnWhryQguAJDeEpAw8ur4jw2mf26w9AJkv2XGn1nUmNEomc8pFK5UTTa81UCupmDBXHm2izPxH4KKrrAH39T8"
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
