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
    "5qu9kVYZgFH9B6UnQfBkNfAWSCkw5TmgS3eASEmrL6P1nJa9B5adW4hqoLjgKj5xs4dG75ovUsAzoEfReFnpDGQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5UgKQAqnRf2Rrd52iD5sDL6npYR9pG2aKZdBcQstAUFfVinPMmYn6DWJgwFiXsMZfy2125sDHYr2Z5c3eF5SwH",
  "key1": "4SMQcJbSrL5YogB6u6CLRUukRC3BGkB5d99tfx6GaMGKsJFSdhev2oDCxcJ2iMyzR1ivh3Hbkpn9TKiyQf5CPiRX",
  "key2": "2es2TvXwFsQm7dWAciyPLgNLKK3Zi5RRkVt5p5YSPh7S9b23GLF8L3uwy6xUofjpm1BUSX8PSKj95Tdt5jAEiZzi",
  "key3": "hfEkR15qvp4iPpDuLcLWjbKsRFGh2mthSeNWhyJX83DWnkiRBzd46wdKCR7QhereYAW7NTzaWfysNheAC61acyC",
  "key4": "5mdymd5Nthu1okEn2BvQmHnMuYF5ZqMxL6mYSSfAwXm24vneZAVTX4JoeWwbFPop97XVEbTLWHA89Y8G1xRk5tHg",
  "key5": "5mR1VFj1HZqhRhxaXFQMia69PHpLp5g2JEe5gfsqFNvxWnHJhgQpwkJZZpnjKuR67uxTbsS7avhQ3binKeM9wBrD",
  "key6": "5j2BY7qGDirJpjRTvx8KS5KHMsvmtxChiQfJEuZLBujirKVrziGC5ChDaVGsVYfams5Uvc9RhKfQ7qT3cB35E5aS",
  "key7": "4vTGjJQDehc4ptCsvjVYBztniHwBhYTgZs8pmT6WRqFDX1bCULHYHQiYZrNTg7188ZMTRUDgWstceuMqcG5Upv9c",
  "key8": "3hAaKciL3EaTQnBqXCHvGFP5og5DFt5esfrz8FhgpShADyLK4Skhuepk1iCnFH4mMM8vGKKY6kfm8S5JsBzkGca1",
  "key9": "5cNXeSFh6u1PwbE6eBbEAT99oLmaruic8uT48d7GN8wbnRf3hxLprLnR5YTMiiveSQ2STUsVKWV4q2mNGPBejCiT",
  "key10": "4DNbEmfdQjE5gTiBof1QphoYogZzrztGqkbFAFFjkXxvrAcgmpWN8tj9WNxf7uyF43GMzLS9v9vNYHFRxDkUPRts",
  "key11": "4fTthPERTnZvKWFx1ya9XPUGW1hc7zEtCYMDqG6RKULcmh1pbQETC5hjqzMgLchx6Xy4M4A7FjnMc4bq7WXyfwsz",
  "key12": "wrHDcYq1LyiwtBFVfok9ePnDcTSuZCSym8YZEvng5H1aaYmVsFNFHLS6fASGfi2HVZXvHT78eP5R8ex4C4aH581",
  "key13": "22rs2dn8MQRTkKLWoARcWMimuim6u4cdzmbN8sCuufpa7eFQDtdLgP3EcmnGVfXNVD2QdzYsoH39HDZhr4C6ezGo",
  "key14": "2uD5adFpxdNHcDiZkKL9BcArK824H7GckwZw21wr4LhjDMBU1pmft3p7caGcaAVk3L2XBhAQovCasBKjMeuoPTyy",
  "key15": "4kCKZosdaAdH9mR7B8bW1UEBpwJJRkSBsDgo5U6ALh5yMSGEnjZZZ3xqfQU13qxqesFzfvq8qHTbQwmwBhnRjAZ7",
  "key16": "3AyuqKoRpos8vTzbzLPvvXCkuUbpaLGX26YQdqwGFbR9EhFQ5twJXq3HjHDyiuMYopqkBREDpWFagn7dpsAfT3W1",
  "key17": "67MuDhpAPbdTwPXnrGK8BpKRXQxTWuuvcJzAk1o8oPRorRVeyGPpzwFF6ihwjR3Lciiotef22TuCiwXRXf1bB1Xr",
  "key18": "3skCrYCmzcPg16WMAezVvFxXQ9gXB8TfxiCbADHixEmaKFZguYwVV3UPvNB1PhECkX7cfsh47XdZSaTkyduVzcUi",
  "key19": "5LcBVrVm34X8KHCYiUvjWnFFJudDxF6EtjPRBNUbQwtSmBUrmNazTttLdMevG7QBFLejwD75envBrCxYRu5MwRXQ",
  "key20": "oysvuJ7zqdHx4waLecioVtEEVhEmx7Z4E3stkGVj5znJmQQPSKrHvcPder6mdZgcLLt4z9AJfHTu2hrYLbwaz24",
  "key21": "3Ck5pK4odAxLa7RoCHVBcTXWt8ratGQYJTDGnkfxi3TFjRnjueUngEfCkStUGmKzEZvdGStu5TMbPodXZk5aKR6Z",
  "key22": "41bZHicxiwzq28HoCmZUCCMrVGuhwU7juA1fsKfhpRsHKKSAyLbnQC9s4x8aMDRF15JKM6S7RM5QrLDznYicRiy5",
  "key23": "an8S14Y7DdyUaZKNCfmrj7XMH12HfGg8j9g2La37zYVQtJYcnANVyoYDRFkEa2YcBWZcAZi2qd4DpRBkh1bzUvC",
  "key24": "2xkaSjkqxUyCBV1rVZN5sb34ghb5Brw8CV99jgQc384r8KY3DWGwdpUoXY1jiVk6KttraTtT22yVDFvqb5soUAt4",
  "key25": "2ZnxwCvRsWgfUgdD6KaWNe2s4WF3CrMrNp5UjCxVunECKzmYcgabTCm399nqqjSL8B6wxWDJZ5zA6McywxwgxSMw",
  "key26": "3uHEeMgxUnxv9ASFgb68rA5uq1aPmmdEquoYct8ZkgsWGscPjwCDdgj8YQ2XWNdAgJqAASjMS8Kcg7auqBF7vT97",
  "key27": "5gMSz4W9uQgxbEFpMoByW1KMWvrg6JZ12wUUU7ZQZDUFA3fkdCQozdeHHnEAbB29xnXr1hNcgKMhpo7GWEnsy4ve",
  "key28": "5MBJ8L8xNMzEtnraqFir5kJZuf1ozRZccEqy6yUhmGzTzJvT9Brhnvxh9ND7F2dFihVr6aKUoCQL8KiSXZ6AKNxg",
  "key29": "5aPzj98jvxVkPELjosymS5tdSsVH8JQpbSSi59GF1MYj7U7WFqUbTpyUnQ6D69iJzoTVD17AGrAe7crFC2eLdXrd",
  "key30": "Cmw3VgCr3THtfxxADN2oR58xwcyh4paxQEpDhaF3hU384o1JDcexdfiqLtUv9rS4a4hCbBVwEVgqUC7mmMjEKqN",
  "key31": "3Ejv2u5SdpGuyimeoBr6y1nNZVmsXq3TNJNYWCGG4oJDmEWpHDp4idhc8WwZ8wjUQy9M42qTVG7ttLAtavinmMzp",
  "key32": "4LQpxrTCTFtzR8yqxoj1YaN7iAbwTyUtUrQM4m9qkN2BENWG4XgS9XarqvisruQYe3sTiP4Z1D9XjUKPK48qLPrY",
  "key33": "42LnRdFwtCz8ZXEEbQxj4MKFyvmWshnS1935fT6Z6CB29A4bBhYKG1xBbRBEpQNeCceaedBSzkgr67ae7ZkkVH2B",
  "key34": "4dVZXFHyNZ2uHqgqdHF7p2jB3pTwTiqrdq4ipMUSQ5yGNMm7E2JAMb6XipME3Nw77nZP1PhWABSLeKWJUKrkSVzv",
  "key35": "2RZK3EQuXoNfrs4wn7ouT4NXNcE7orc7jrMALD6kG4UHUTbu9RArCusEXhPSuPuzCaJrqCqGKykzP5nSQZx1zkFr",
  "key36": "fHDG2q9d9LEvH3fhA7afFsuSuHFavCKK7nvsVnQQ33FmFXkRHucVJfB9CQDGGoyHLjpSLksJWg3q77RB99XmP1W",
  "key37": "2wxmmhz4xqoxBBzPzJWy3n51CK6kYUZ1zazTWjQF3tP8Ru1aCsJyhmTFpcDRfmj9T4UghYZhGRGaApsnApTZRz8n",
  "key38": "46kQ7QEFWZNin3bAv4HZM9NJAVTiCrTMG7tpKCWwD2w8n7M5Rw3QomVzU2YX1yMdGxkkkzQs2VWQ1hRzsMtSKxGD",
  "key39": "57gcPSV95d3d424Dz1rbmv3GrD3arNjWNMStouSperYXycr9WQKmuCPCdCLsFB4aLW13Fwpzqq8kN9FqZ7ELeqbP",
  "key40": "2PZv4SEYVtLfDgjKKeWbchNHERqDHn5MUhPoMC5ecU4RwAgxMoMn1wNiNNBoNfgpALjx5uLd1hCEMS6rphumgP57",
  "key41": "Kqkz7CLrxmz2Zb6yJugLF7fd1Hu9kULDmu1xsfmtjyPuwU6Dn9s1cJ7PuBDK9XasRrAWW9x7p7q4pNmnNdZdAHH",
  "key42": "4gkLXo2EXcsinbeia2bvbNvma4okCvbmVwy9obX68xbwXtbtRpgYDTHexK9fbfDwUpCg5jD9MpNKLaYnYYbXYcH5"
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
