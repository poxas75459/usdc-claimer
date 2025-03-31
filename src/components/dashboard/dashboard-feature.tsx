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
    "4Z1NiMLS3x9Zbxd2tE994x2ZFrMx8g6mPhan4wrUjkg8gq87tEduoxqGeW183Ftfg5gMo5BP5e8pe13G1n3zhkfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4BgkM4MUZ6JRPniAWu16msim9ZwiaTeWrd3go37YNBEzMqiEqiDXTwkLU1SpQFZCC9HHUbDMRyxDAh1avhdyK1",
  "key1": "3EbTEWKV59qSKoKTN3HnPaRCowvYp8Z5TuoaYMi7PCsWPhXhBJqfZKvgbf54QU38ABtn7ciGfi6yPT26MU5RD7b4",
  "key2": "8rMUztoezNyWjfHQFfwpsPcVJyUG7cVoPaEzTzCHWZ5Kusow1AjdLxoF8eckNdmzZaf3tbFq1TPYULoKFHCvfYb",
  "key3": "65yzAj9bYbQLNyVzqeBEza5DbNXYMztaKHMhrCFgL16yE7Ps7PtKAtZNV4FZFZozDw16g1iYkzXZxLgiJQJFZk2V",
  "key4": "4SmMMDj934E8PoPgq2PdbAD5c8NhVmr4rbUGh7dNqy3SCNm4xeGN8MK9AC7X7LzRQhcMMMoyHw5vDJeuycRPbwWC",
  "key5": "4mGRhGhzon6jLJm4L7cuwyEC8ugfFp9pRzVsC4dWQd4PJLU3QZi5DJkngTSyUiyeTEkCtFM6zhndiBsESWJ15Rz7",
  "key6": "qU862QTEexbiMgnj6KfuasrrWHUTtRTmnicCfe3venC6aNfP4ttFJuLwu41pg96rgxKKEts916f9JHsAbSpEQqm",
  "key7": "RQ44Bugn9rC5Rdp5fm2WfURPR2Z5nUrWK1xFvAiF7ZnUdKUuzsEgq2dTGHJkRu7c7FtEp6AcXJfs8s93MtK9YPv",
  "key8": "8qNkwc8s8sAv5srS7hHdgLVsY1Ew81trm53xkFnoYQPoj9qwewwvpWDMBtuECpz6WaJVTMYzH2dTpyPsvDSpsMX",
  "key9": "5joKtvVdyQ3utV6m7MWBcM22jqu1urET8G2tQSzxhHhP1VdS9W2hEgUFjWyKLfGoi4WFsGRRxk4mTLsgRdtR5KPV",
  "key10": "45BJgmCmCAeDLZxrgFLQkYqNubTsoadNWHmVP5XvxpkmAex779PkdfNY2PkZMXpDpgdUqjo3kfqiZM1x584MPeSX",
  "key11": "5E8mSjXXyBDAuC57DddNNbSbWvsabpfa6iJuSUnx6Zmk3UHbhjcLmD86FfkksaxasumiBreLtiDoqUbHmMrHaYVT",
  "key12": "3rekdToRHAAcP3f25mXuWXbYAohowhtDohqGQEqVre6WqytYRJs8npCQkGs9XwPFP1ifYdHjab7m2A2rfL6HLNdm",
  "key13": "3cdsQBJTGPJrYNfbeuLdaJDevAGdVjYHoNizgbYUCE7isCSzbafX6uYVB3XK6Qiur1o9XxCZAkTC2SXZvNCQyKCP",
  "key14": "56cMne1Ye8xVEpoCoe3Pdmi4K675gdaJMa7ZP8bFxskcgRBSKD56Bb5RJZ4UtKC9yZCdtfgCwLwrz1LnaLR6Yvfb",
  "key15": "2nVhwkANCbTnMYBUYPqrmmZFBfxqCBQvnvaTe9VS4EzbeUeTtuNPWHD5VLRCBgVX9rznmDATc9VZxRt6wQZWyX19",
  "key16": "VNJ2WBvzN5UjhcYoMLXb2dQ3Dj7mmmsWP2WStUWJPvE8LFV2q78n8MeBPrcfkzNmN3DBd2pWwd9RpLZHvcmpNN6",
  "key17": "4EQk5RkCWYkxCuwQSHt3vPE86yDrY1PApbCtC5H93ByVYRrS5njjVnCbSmaqk1R4YdCbXZxn3CikEpSVXjepKoBi",
  "key18": "48DQ6hpdKFdc3WmuQy1oeye4KH2eriLdrr7SNpThSv1nGJfKBHqGcMPv855mJinBDGWUtRZWNKw6xKYyzC28batV",
  "key19": "59PJhG8NPJ65YdgNAHTdv5NgSPWa4SQBCx867ss7qh1vEEr3btSSiwi2YHVfUJzEiggAkE5EVgXjkGQ3wFrSPyQr",
  "key20": "VZUF3RgM6ymBGYcuFTGVSXeEvNMS1Dxbg3TAaFirWSPMmZedSjARvdaPHddk57Tma9p69kTW3PW2ff9jWDMWJ2w",
  "key21": "5t4REB4giV1EP4xh8wHMSCeXDQwvisUgz2SxeAscvNMmMHFima3aDwSkMacuZcgrCSUQkb93kdgi7agDdZMr6Pmy",
  "key22": "3vc2AGZPMgjLnQAkaXPtutrR63QEcEMw1BTmttLxGbfTsvpg1eNDwWhM4pTt168n5tpNGqyYRizUiZu2n2aq42wu",
  "key23": "2khUQr3QekEBRs6phoWLHXerW91Mpw9ijY9HYZWL1LSKYaELmi1MnXhzFYm1waS9zGNmKonFNvCNhLYqfiJeFzrr",
  "key24": "hSYVwSDYh93wYhKUTCB9j92c6GvBiDsy54qLjxrLZbWo1oREdVVP6tWkfGrkESrqUUfDXGpd6rzmJ95AABAEefa",
  "key25": "22deNtGSBQg7fvPC6gb6H3f4igcPHS7NJs9EGyg6CPmmmahNwkwKkHvG7GDDg27oZU46Dxhr3Bn9wqKaeX9LXZBY",
  "key26": "5cTcg88wyHqPjCZi9UQUb9msKBqpS56nNkDH1NsfmZWdusSYazPor1TPoMoL6z6rvYy2PJB8YKX3T2YgDpiGCnRm",
  "key27": "4xBMd7JsUNJZjn2UdcVHZnWEqCCXgtkpMWdrPRqENkYyJgbzEDWN8fXC1EZLq9bifUtEH1xrjfH7UHqDqXES74CX",
  "key28": "2598yVuqhUC3iXdKsi1jQFrhcaZAR5Msm38zMRjHExDCSt6dpkpQ3MWpQPQp8FeJSQDvJRLMp2Ab8EwHPwXJmUGN",
  "key29": "38SByfwt46tNNxmuDYdQfcsuSvYRWdWpXarH8CoXN5gNhw3754iFkuVFMNGnvzDUvM7sumNQCqFo4dRWvDwnUxyB",
  "key30": "3HsfFn8sKChG2dHP3MVpmjYchthMo1fSKJBkB6thXkPJuWRxJzRK1BLNbPgMQJD7LhZFvM1c58FHYWgdHbfdjf2a",
  "key31": "jMTiPcoFKj1v46DZUCFBhxf4c69NLQPPZExgpv7PXcKPdGaC3RFfTjHHbdZuJUxxKRJmd1jBx4MZTkndvythyLm",
  "key32": "3w5nJYyhDLzQ9DxEqmqxK6xG91c3Hgovhw8BecZqxoWVvNEMpcy55p1RXFjhz2TsyoM8qbsLdKVPYQvsvGsUpdfs",
  "key33": "336ehsxXhi5qs4tXiA7co16aQtscxsQvXLZrknKv79jp6ukiRJM59RTuSNXrb3Z5iBDKR4ZKkmMzgYibjJ33uWTW",
  "key34": "4yotzLd4FGYgX4aamDuFgt1SDdUbLEq7yt1WzXVqEv4iYcDyfrCTWwGwByujyAksxZeTirYvnF3Vs92fNQo9Jfgt",
  "key35": "2deGQCKz7qPvU3hicaHDfLGY2ZSdHiiDfedCUBJaSpAEpVD226LLMi1rjeQi5V8ZdNA9DJdJioVRUkCaQqvddC5g",
  "key36": "3hNbBjh97T47hCiE6RZfJCmkeMhXEcMfTdZ9Ho4Es1svLH2yCAzas7knGggrzrKvDEUpgwLtUB8U81wRcZZDPasK",
  "key37": "39aqBmvv1gUkQ2QvJczm8QBDU4SeY3VEfE4YeEj9A76xUGwLw8Q6LpNNsNPyhSmB2eBKjBDkFZTyZ6oXREUTaVA2",
  "key38": "3yL4Jn9cQfWajDS8pudKGBLLSbueFij9BE3rWbnHyrWKUh7GiTT4APEkmhD5c4iBSqCxeLQXsfm9kvhSZSsPXSYT",
  "key39": "2cMMisFvcMQWS6CyH3hWWxYg5EVwmK3Zvxn45XMpHg3pXEXTt7LkLzRAGJicT99hGAm9Krdzm5YaK1PYZx6gzwWn",
  "key40": "4oy3PdCxKfcuoE6te4Voe3aTpQzdsUy9PoTsweLgXZw5v4ZyjPygtseRAnLSgMixoRHjmBy9q8kECGtxL6djwJYg"
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
