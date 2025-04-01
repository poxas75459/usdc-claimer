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
    "2P34nsY9wLuLJJzchaNfvdWi2DnYgyrZh8UYbEXqxtC3Z9yjyJqT17xU3RAH3M34E4EstTiB1GFPkiVAdaVvR7VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHiFViYEJZ4Yd7dkL5Tn6zoVEc24ZbctYBNMabcy3fCLXtj7QFHB43JF5ytDoYDQKggGneTABkp4ybCUi6T54rp",
  "key1": "61ndFBhy3iMKAoj7BGNxYhZGWSmPSj1pMQBACMM6LbZSHUtAki5TEWTzpu45DQKePkCd63wJZPiG9Ygn66nbhBp8",
  "key2": "5BMhDs69MLPHt1EhRxyMkoTdWj2MzcTGJ1teU1ppyUVJU4HJsXZdX4YCr2uaME5NTLvgmVQQknN3BBoJB5dYSz5A",
  "key3": "v7jXM2woZFK9ekZ25aEJu4oWpNvpGe1cD6z3wBvsD9GfyivdfHLdgsFsqdi7bqbsrkqekoGGmKhFaLBLcL5fqXE",
  "key4": "4F1LWRZj1QbU6KahTqVCRQEehG5sWz4F69wseCFAsM7MA6hAQWeavabNVpt2SkWYcizQVbNmsRzvXtNMzqQEG2Qw",
  "key5": "3XbU6jf8BFwLebtaoJ1VYDW8tFtrgJFwKfa12GtJakGBayoB7b74BwJrWrGMBzidChYwUwM5YuJHcBhVt3Woocp8",
  "key6": "5JmH7xtKvzkcYF6Px52taWTQfhq5uRrK7VJegaaXuzZpDniSmQE63XWAXKhy9qRzkedv73A7uVnes2QZ3mop6av3",
  "key7": "5SwCeNS7fvWHRCif55GsT94wQG7bCbG1fS6WK98qZosHoMsdme462Kvyym6tYRiNF6DTDxvdTDLTEdTYnLVWYHpg",
  "key8": "5J2Gvb9s3Jss7AYg9nzKTk9LHa1r36KA669itWxyiiMzTNc6upT1iQT9eCKPhw6JjWnz6aWbjJFXFTsL5LUoxz6r",
  "key9": "mP3PaeW1bz98kSeEASBrdGP6AEmei8M3XpHFCTHzU3NxLnSsaF1W3d88xd75uk1o1LAVH9RL52Dw1tbJR1tvp8A",
  "key10": "4WqTnFBg726NZwoZtyJqnwZ4JY8k9bSKShwJ4f93eddjd1KfiZc2mTMhAt1Ddi8wYT3E1s9kdxQK29GrtYBga5pq",
  "key11": "5T6uyVPgYCGeDMjHC2sNiiUnUTY5PtWuseS1C84Mxy3G8vJLSpMcFdGBuKsBppA2Twt8vcQszEqQkXhQrGxZ4R2y",
  "key12": "4YV8BCWhNeb9KfmBouVyW4Gt3mwXzisoWms97GwVPZrfkr56KgmbNrjmHUYsAjRdX7PsD1zDRE1x1t3H8P6Cm7qm",
  "key13": "46UjibjGLWLxPVNo2hySwzmXHinRhBne8kDWvJExjpmtLNqmAkVbe4XwhAp7CNLdXbci7u6krymkKpgZHQfytg3P",
  "key14": "34JECXzEjZAQC1v3vystJ6wtBr1wqQN7vLPK3wzQD1FJfAcxF32PPYDYAte7LmYRiEQjx3NzbHK7jc8AuHieXaog",
  "key15": "3hXFg7VLNgXAJJsQDAG44cg8GW4Ri5k36yZwog98KjSR2RxgRRpe8YNWP5zfjq7Q6PttkKBuXLt4RqKroU6TeJq9",
  "key16": "2TYx6b6n2icazycXtDGUJnapkWAEokHrbyFdRAGWUvf3scQtFgvfHuCWukr962c47verW5AWfcMmzwhGb8T7kb9X",
  "key17": "5FoyYJMDkKmYSer2SaaypmZHFd3Go6xoCU2z2TsEPVbWTbkwpqr4V94apkj7qqUi7qKrtoGe68brwmrSCKt2AdZx",
  "key18": "3XNmtXp3V3uuAzaomB7zfgvBW22P5n9A7w6ukT5GnphE8WLwGHCroNfpakyaAGGjVRCpev1vrnXHxf37MRNeVcXo",
  "key19": "5h3WihDpaFuBHgujuKfXQBku41MiiCvS7edmGonEnRguUX9H9hiF4hibTJgkpNdqLZx7YmNe95MJK1xj5vywxYmC",
  "key20": "2LRkhWJW6ipAW511TbcRZYXBJJ41BMqCXHx54jrFFTjS1ZbH1tzt9rehrdRWu6uF7gZuDUPJMzy3FWVAeBPRzW9Q",
  "key21": "644sameS2KKntn98GN6RTYrMY7HeoYhVtuRjrjUVp8csUrYgKDGoCCUboiGvBeNtsMdvHLXq2R1ch3P65EYxjmEK",
  "key22": "7rodqti4jaaoLfRLYoxGfKUYQUY1gue98ouqwY8V6XpVNAL68aJuMVZRTk5g4BcNfJahW7iqrRFHp54ru4k7X1g",
  "key23": "2Rp6hPaK27S7p99xGzryRhmeQCG6PQr5RKLAF9ioC2tAadGFKSxGygSCnvTZWY64bcCf8UM15thwCeWiAuUqN1eL",
  "key24": "455tkc28YhHfeGUoutfvQ4zEqMCpNXM7LzPFNxX4MmEKPngL5J6dpcoJQdcGsCvXZGnbAv4xE88M39MykBxKxSrU",
  "key25": "5JtrKwrrJb3JfQAaYuhckAAWuHjYHXpgpqtup7ZbLdsAPPpj2thTNwboV55hbErLptvPAf4cB7qYfZR5rfUf5MzX",
  "key26": "4sF66DQEndXn79Xm68wsntMDES2Zd7gPkRQc5zhUy8GbE4mWxLc6a7w5FCAP3SL8tFSuzG7rDhWTev5AWrpfkCkn",
  "key27": "cXsRnaupnGsna8RAbHTLXte85uQiuvAcRJBFSAAPwhQhoxxvu15cYdqVPi1Q69RRAnQHWCBspYe4ztWYZW4G1KR",
  "key28": "45RvwEaJ5hHrzZeCwPj5jAfueNGkX2CH4hcdbZLiyjcoM3m4quap2DxcvYTHL2gwrpGTkhc2nFvefzJPz7t9ZBpg",
  "key29": "3xtnhEY2q8Ttau3AiSPpbBKT7c4rdrTjtXSVqhbSNcSwHroSFAB4TsFpEU2WWi5S1mKNtTowrgNxSusw526U5twR",
  "key30": "3Ti8Qj5nfZYeQ7Rd8QDazMdZZTfRqVrVWNQWyr4LTcRzE3NryvZgQuB4A1mvxzFRUdESnKr8uSQTFASxgk75vVv2",
  "key31": "4dzEchxVHW6mgZXrUG71AYRU5KDTiQk1kU41N4n9diURC8YKZSkvHCRkG8HEsE5TweGfZ1NZCH9C52Jsq5VrB8uZ",
  "key32": "4DeX4BUaAN6W1vZHjhGWxuDg5zyvDCP4WJZUeUttqVm8W2mGMyVVVcHueQQSukm3eQTdtrse13gobpjUKjiU9D3H",
  "key33": "3NMan6X5ogGjSFpjCZSXwbaBDd5D26seAJwMvm11FDTcMSGHwB6teFHN7GcLyRJi1DuqNmC8DTdqcf9MiWqDUZRV",
  "key34": "4d3NVFRPHwJAneudfrWfXX7uWXhdkuaVmN4Z4bjpb7jCHQe21Z7xWv3nh8SsfYqRQZudRpXKdysK5nDUCP2k3AN1",
  "key35": "XtUX5ud85evP3S1EXQBocTa96XQJgkx2UP2pVoG4upD8yh6tzrkgE8NuWYNrYrWpnCXLYPGXZsEbPPE2bTd8wz6",
  "key36": "2WFoocm2Chm64ci3tPiogAuaisdDCqEJHQGN3L4Uw2XvwMRgty6v4KapVPXfhTawtSXaiorpQx99Li41kEyRpkjx",
  "key37": "17cRfNxUtcUPmfBYJeqHpbJe774t7HSQ4QPhTBH6v8rt2rL2i3vL3Ao6835Vf8dDaKvECrHBgqGpTPTv2xV7Ug5",
  "key38": "5EpJDYadYzYErw7wnud3oaqpbCKABGP5Evz4DdVxLyUWnoZmV1D9KB5f3b6j6EEu3Uko5qV7QT6JNavRYMxz9NEV",
  "key39": "5N1yPZ6y67SS6j8W84FARF3eWBM1maRoFUsnwM6HDNGDAk6MPxy3YPeccpNuXDDY5roQWECcfLaQCf8A7Zx3G83G",
  "key40": "5o53Ah7P8wcMHnvuPR9cL96uYYxm9vCGeCQWifwydRMS8ez638EfgNA3NXJsWwY5q6UiNFUdfQjMNE3gzswAexXY",
  "key41": "De12BFYooFTHgQZ6vbrwksDSiS91fYZYf12McA12AYAEW7iJospR1mn715JtfXFFmCaYjfkjdC7E5F3QrigWEyJ",
  "key42": "4TjUNPRpuhvKoz4pBmb9BNg8iGpFmB6dpvghZ4K2zduSJzS2ezyEBv82X6Qynah5o1uL6tA6asC8n73zuadsao76",
  "key43": "38nU9TXddg1koWSNSLddR9h8Zn6C4oSgYs6y5RnoK5Ag9sS5ZPozA1pSxEqsU7JM49Xy26oNSeirSSYXguTHsBRW"
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
