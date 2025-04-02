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
    "5Lz5xz6rfSrfdDS6GQw1ichD5CKkc7s2fX8W8mP6ihfH2iqYiw1eeQ1ujdUGFxStK2HFBSjCWzGm1Tz4vDszMQdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wiibwD5Nm2c2fgzmcckAntUXxWrHNAhKYUocRbhDwo76tJADVGi3HjfM6CddNcrgZP5b3sboXKAMHgojtUNvArQ",
  "key1": "57RtfS1L7F26yAHv22Q55sZBdMSXvjNWcDwvGc2FkzDAMSe2Mrd7eq82vMRSnchL6doVDqqstNfGh2ZwSCMkNMRo",
  "key2": "5gGWU6uVqH8GeZcBP1P9YsafJBmocLd7mVmHWoGcDgGjn6w5nkFcJMNgzQQZJGg25484aw6YF2aToF9gAbVJ1ody",
  "key3": "5erjEVpWQVqhyo3XCdqQUqkG2rpNQvA6s8SCGkeoyXgou5nZYk1TDkH8G757ktdrHkewnXVMu1QhpMtFjMUej8t5",
  "key4": "4aNc5PbJHPyb6mWVfPnoV7rBmi4PWJAfafzXSsUSUisEZkoTm4wgxzpMmGQQfiszwPxBvQ4K11fyhP72m1298vcr",
  "key5": "JVKBUGpnQ4MfvpMwmsvTCajTetwiHyv54GPD3NPBCmam6AiqvvSD76MPN5UkkUXTueGNJjZFrHASg77YDPAXdZi",
  "key6": "3qqS6MAVTzYwxHdd7E4sx3u8efdLsEwQa5AsAneLdx81UC5PvVtEvjFHynwjLnatsNFiSsUkgt637SBWAzKignE8",
  "key7": "5uxg3JPBWoZPiPQDAst87hjVrvNmjaGKVbzJGKkpHhnYgtvrUhgdmRo7nDH5pcU9BTPmmcmZLnDiPHouiNry9fJB",
  "key8": "4iKPaiFBm5BZbgTzKQW7tur6DtZwMSfFFtEMZPF9hxTc5TmTkhvM7sgu7cPukE3X87YGGtPX4Jz3JE9kduN5a2Ua",
  "key9": "fNE7SCLSqpnKJ8rm6B6yvgeFyX7aGEvZAvncRnQ4evtKJH5MvDDMpzkFUGEEgobgDfcuPpBgVzbJQM7Fch2TjZH",
  "key10": "38SfF1qttirsa5baG2ti5sDJ95h3zWh6PULwXKKruAjTkiqry6eciAQj1hXpWX2rhtqnmjUHdMFQgr1TZjfp2PwN",
  "key11": "4Uwr8FX6JWSPtqZUBCBS9CWWkohcnZPWa8tArYjUwShRfxxHkMeMyqLDJVT9ri6NgncpVQheCT9a4ecSg2RAe6Yf",
  "key12": "3GcmBQMfdu4xcYVfGoo81z9WytNUeBKGGPFRJ1hvhs6mVoqwwR2o4KyDgFjE3zfymLXXgaU7JKNugyYw7txMWZYc",
  "key13": "mkinXatPsj2kSUtUmS3aUxsCUHnwqX25TYpFXnEd7a1kh3n22AizxFeDwkV7xsEWXka44uMWntF57bwaDwU9TKC",
  "key14": "47Rr7jvUxby2nnhkDBkidpdhGSV2McBQnWfQzv4VBbdVTG2zCRBR4GZb9YtW5h28wFP2rwq35BY2NU9FnJaqavD5",
  "key15": "61EWNeY1RVyG7B9maoVTg7qjQyA2RFrkHTo5eErBYzzkByZitxDaEaTvTKBi88ozkRpAS6iqtvY68SBMXzVcA4nq",
  "key16": "4CbNrsd8DNqKDkxyE7MupXbYY5nuYxU28cd1kXA1AfJQ1Ubg53gmz69Qucey8YWpXiGzk5CvSB1U6PeiufnaWs86",
  "key17": "5LfRLFDpRVHgxzXU52ngpnBWRiXFtWH47eoPZm98ve2WHu3By2BVgobRcTonCmssEEiaMRHCPuNt3QpH5jPhg42z",
  "key18": "3q9Kvz5qvmKkoryDHRV1xGS4Kk5sP524qU7DM7fhbsU49rRoxsyvumgKz9Ro3m7M5JX2uanSn88zt7TJKcLDvizU",
  "key19": "eEmfxnuSiXx39KHicNWg9ZpVGAWxE9Li5G1Worb1CfTcZoRXS8VpDfePSA3aoBgqWeKR8YJvzpTKjrcQqVE8coq",
  "key20": "5ouSRf43Qfw8jpZp76ieaqfKjSmfUpM5Y39VWDD3PCBccWCaVHWoeBQNag1GKHQcA3EjpB9xXstg2kMUBK2va4dp",
  "key21": "mzQkgMgdmYZTxQXUNkE9SKzbj2SRwEeqD7m4qDcUBH2VxHNeb6CAZX3uTp1RUzGSoprHC3YugxDHfh13Hhp18FM",
  "key22": "2wQwLSU6RcDApFJCTCd5bgKwG9EkurWnVWwkApyRidswZL8LUT2vUvviyUhASgtoJedAjLPT833ewW8GfgnmeiJT",
  "key23": "gVpSrg3Af9rmGRjk1x9it8giqguhNqfATsbtEEvFZqqzijxHatSJuX4CeW2gtM3G2iYDpLGmKmh8g6PnVRRZeSC",
  "key24": "2J4X9DX9wXRdYHPeHoBvR8EEs9T4QMboD5ThDwUzX8rpAzMnrv6nH1SPRe6SsV6kuihSbQ3P6fsaLREaHbNwu3Tu",
  "key25": "5XXgN52jyhSNurQcYCw4CWWMLFi3pR4Jkt6G7WGVfEVRSKcYZXtLDHsPC6M5YLrFy5uGTYsVh2kTGktuzAAfgUvr",
  "key26": "2eiXmWmmyTjjJRcY8uhfTJw5y8mWnw8vJRuA4GV2Xt2kZ57pBqjY3kuRqmCgPKyXbFgeg74DWjeD4bF3HSMUwPkt",
  "key27": "2omDVSWkERpzXwEAAEMMXkUVPwfmzHkMxZPSwL7FitSgJLoXXtshpF2Ed3mKg3HjM9JnTLFsghQASkrBzArLMc3Y",
  "key28": "4nzu9z86kyGbqcABXax7AxfwYCfMF6sZYaK8SPZMvE5SrFCDKUt8695U8ybhhsTcHRhCgWhd3HX6geQ6njhGFbEx",
  "key29": "47kGR3Lxm89BL7KBMk9zgULfKmpTBVod9Wv7QT5t59aBzezAqCQLYkUpuQHSLngp2cG5y2b8qNxPooJxKgvxJLyh",
  "key30": "3pJHnQJojpg8ecPoacS8CRnsWHotweLQHbqzV9YtUTLsCubZFtzjPmoaWkwgoE5QxmUKTAyceEkHL6c7ysJKa7gJ",
  "key31": "27Gu2DgrJvub3jnYMNP8eNn6j8mTF3HDgPHN5yjq9sojNvN7jVdBtvJJXkNVrDwsUFFu8rCUQdooXNCzjHF3nwgH",
  "key32": "2SAk6qCRqcMeA3sqKFZnkwd2dMJU3w9hXw7ti9GX5R735svsavpCKptZD8WhmvGbQyvg4MRhRuaFJwarowN2FnJ7",
  "key33": "XZ26R4k32a3L8mzuXts4VJSffFRXbM96YYQmnnnZPPJ9k8jj6hJbLFDvabttE1Zs5NSzpcCAc5mJCsZtGVeqwDf",
  "key34": "zUfLWjAGo4yvFY7HYXDts2N5nZHwUFbiTSeyLbvhNBW5MhtXXv2UpiDx3MMr2dJ336nf82dNWiGyBf7T3cWmoAL",
  "key35": "3cReLqS1R4X5CgbtkgRaLyg2os8AYaPVZpsSsWYXWiQJ5sLxHbtnvnix6tcA6BfFjxiRDfiZRytFMZFJzo7XXgpM",
  "key36": "2FPe4mDQPDDKQ7RcMfzGWEQg9P1umXJLVsMjkiogxoGDX6p9uawnWAWEBcvVtPZXZcRhVvzhDkQtSyAosi3bmjA1",
  "key37": "3cZs5gVBNhDwgt9sKtaqQypzCxpgLc8Vw5MwscfMiyLz6mabSmtKqXndfKcLHoYHJgapnVcsZEo8ipU8x7t1GMGb",
  "key38": "2hkcEWfZtMPUdMQ45JnSypebQ1XBBaKBTkgdHP2D47zEGbEAdsnXzeEAPZMhBNhrhK4iT8vTYaDzFfqCnRXzCdWC",
  "key39": "2PccU7fTD5W9Lhhbw3KBFLXcrY5CdGD9Y6CxNydkcFuoYc4MqaDC8Xp1wzB7gK33MtPc4edN4YZ5caHo7b3QFx4U",
  "key40": "4Cit1b6iatXfRSCgdWWeXC3cBBeC59NzoR2C3vHNwm17ciP8HYGQvJNDVcSonxEV459jRiTGht4Ze6ZXYD9JEfEC"
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
