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
    "3xQLZFjasHSVYSRuVacMJDh3moJGDxmB1QCSBJqgQP8qoVV92xisSQhzakhnmFYs29um1ykwpisS2mXxEsFms7cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHgBDyige9DJjHjtQw2ZMmzaVFHpA8D11DDJWMuA3WLdQAAaihZXxsAHZCceRdCJJnFohf6Bx2TRiUyrPCpEXqy",
  "key1": "7jw3jSdaksoiLS2fdbkfEMR6jSERepyCPULEUZ1P3BmV1GxoupKaPgqhMdS3jZg2Tn8Jw762HzECAYfcKAUhyp8",
  "key2": "rafshPoPwr6KCsiRxdnr7LX6vJ7n7sAwVvaKmrNGUzPXenMH94abomsTaduRWBQRF1XCGo5adsv38jS3pcTLRS6",
  "key3": "3yScZSsqq1mZCoJxDLNUh3c35PPp6QPQGA7NEeNesVtkEEb9QwG5Xuo1qEugXjur4yhGjGL1HQnkyf3Zs18hKwMs",
  "key4": "2AriVVGxVRDofw98BJxJeA55y4R5G5VNJ8kANLuPDCF1Q7FMjwwNoVixddhDtScMZPQcLLGeT4R8Y4g2xbVP9r1b",
  "key5": "579ML1bYMYwtrbeVbRL6VxxqHUiYRzAWX61xNHoX5pumfmvJNKRqFYnDHLziBRhiY1Xq8acRZGEALq5jtjh7BMpz",
  "key6": "2ge14dLB114yzowQ8PCosLsjSAXnUPDEbzK3NMkusj1Z6tP7c2iAyz5UReBskAK1ZyattdVURhkbyhC47aQxTycK",
  "key7": "5EaKRTr1HqfASV3wj1CUh42kr4G3xRRnemEEa454h4rWzFi84JSHc8WHPsWLpggJW3Xg2F6XLbGPK9GNrNMN7Lnk",
  "key8": "5hXxZJnXkJhkAoCvPvnK9g1oXtQZ1mKStVzPrcywuMt54uHVGBdy9vgoPTRynZ5Tqp1gsRppXELSrgSLGTL9vALN",
  "key9": "2gV2VaMCJE8jYkPJGxY7YSbvn3hTSxyBh9c1w5dbcaZhh6Qj4oN76hVGMKRBvjUnkZiCAuDTY7w94mEzNjB4kNad",
  "key10": "5cW3Uy9M2jgVhW458ZL5waT2fjdm5wN65Jd54KHn3kbHLGJCmKb4erLugScoUoSxpGazVav5PvV39fevNmxASPT9",
  "key11": "2ycdEmLjAAezt8SKLPof9kqX6L2iBhYY1KULGnfmtmKhtwBT8atT9YQfkyVGjHbnaGZbaURChFFPGzAUkiQLV5Dn",
  "key12": "5T5cDBoXTJoQjEaE2iBdKgoVWcqWcYqWL98Ge8G2F82zYD9xoJpY6E1YGcoHLGnFT8TtntLnJLMiwJ5vF95y4iEk",
  "key13": "4LHQrymLehUZjBCs91aSUpiEPgAoujZfPnwuGggP3So2re7KHQv1p57UHATdDSLhn27EqEFLdnhQ1HWWTz4HcWQU",
  "key14": "5JcZsF4H12WixvLbkBN3BFCrLhmXL1MvE5CoJE1PNNQXMvfBiokzuKWMC8HeqJXWRwQoYb6NtCQcHfFyvqFvw3DX",
  "key15": "auo1sQU6sRzGoFkbuiJAcR6sZCcrpEbQqqDZY69x6XjGtwEuyabVqzJLvVEHyDgYwrft3s9mCPjtseCWVvNt5eM",
  "key16": "2gYGLeEyK4pgSMPUMX84r5U1TzNWKgMQSieJyn5AXRLf5P3c7eRsoxjokV4PH4T1eWRUgduumTmCXdVMx6aDN3nq",
  "key17": "5j1hX59kmb5VKbft711A5T33nZNcU3hZ12bsvsydnXFdSaLSod8VmeC3GuhmQLgi7Dpm32HEfY8twVKm5Gz9o6Jj",
  "key18": "63e3kiWwo76XmdEA9jRT9SBDCjG56z979bUhm4cmDWcmg7cqWcifm9hnuz6FuXF2y7BKQYT358CsZNbHGQnn2fKL",
  "key19": "ZcbQdSBUgKZrxPebsEdVFFG82dDRPBmCpN1yJQQ18gXw7iKoR2nRfBDKLxpXKG6AQgs9GVWskMCrHkZ1tKSUeTw",
  "key20": "5dsHiA3LBZVQ9DzZryydt294QdFUGJ7g4o6xps9VtMG3PuNQFCiKpiqMgNxbBdtdZgwpVfFCpEJcMw9nHp91fcPA",
  "key21": "5NcAPdX6e984XJuVfDEce5bJmUAubBkUULRR1fz2X8NHYXUuCad6uByZNeMFZxdt9LAwbA8oKtCtX1i97tZNoVDQ",
  "key22": "26FoBid21FWP2MXWcKQtXt2dVwwYnuh7pw6ecWypJNPrZfgAcam6LTaeREew6XTtGxqAd5Ah27yem3QDcd5WbrSn",
  "key23": "eyRKaHq4eZq1zzVK7qGCveGSNN5zPkskBewADTuaPez9x6nFnhAfud3HXFCoEN8o3KKidoaq7SLN7BDY2jh2DKS",
  "key24": "3RtoxDpVC4gCysGi6Cyhi2BXh4weJ8fjiefLZc5dL8nsrbFtPk4a7x3qrkZwHvQxDJujShRGZXBJtssB9KzH7VZ5",
  "key25": "2SWwMkbQPcng999GAZAN5ZRBqGEeih79EHQfwmbnB4So3CJHKRNofvLLj6PdEHELvy3Phbs1mpcTmwj388vu1yf3",
  "key26": "2s8HUtKvgDWArCshKPxbs2VCatmh4nTuNiANkAh6vm3DZRvap8fQyZMaxMFwmLsWfVg7i454mGiggukuyJEAja7a",
  "key27": "pywXx3kpK7RsqvR3PytHaHczqbm4Gm7b38rX5HFaaVZKHtQMfe9C5WLpZdovhsYcajcjdmbHLmvrTiNAd5BSwDJ",
  "key28": "SS1gKRtEdR1GpJuuFLdif84atBNEz1EtwyBbrokvTZYxDZkcD57werkqar6EGmn9h4mWmXi6j9Pna7KPe1ozSm7",
  "key29": "uEBEbWnobvKQEVvmq3T21KFse8apKYf4dLT7xysff71wj9bP4C8qifv8c4zKwvEz1puXFjWegJPdiG9ePB23Fdh",
  "key30": "2ssUBZv6chjszS2XtLp9XRaVQNFkPw5PeGhKX2FH3E6wuR9VjRaJkDTaoz22w2NF31tRoZKi7hzaYg2BeNarBbf3",
  "key31": "2SugpxPNkpqoMq43WmXMDy8KrtgtBvEwD2zdxZEEoEgUV4zt4tcdBtrTJgTYjTAcUNmwDkhuvrtrUSx33cyXHtVs",
  "key32": "2dQFkhwxPVSciCGP1vz163epDQn4DJeVvH5pPZVWQuUSzrBfAD59grtBV8eoFhtK2w7KnFHh55voefSkeYujhnqA",
  "key33": "2ZdZ2czfkwMaGt8vHF6PvWeUY2SnJGq3h7tK3FigL4cYtSed17dFYbyPQLcuHpcbNUF19xQXEAHrS5xJD1118Ar",
  "key34": "2LoMJAiDzXiDzRR6ZpSK8mpxGzfNCTtiCzzGpfshueYCcQQotwDMB8k5idHx2Jz6nKD7Bp77W7sAkvyw4oiHhC5f",
  "key35": "D1wDj8pJqfgtfDDHJQ61G9CAgToJVADsQnSxsMa7HiGsMVxPHVWch2GfLKzrkCzkprVUJG8Msa9mmr6qWkpZJKR",
  "key36": "33ZJ1cBr2bM1ZSCwCTMgRf4sVBiPm8uEiGaztQYstLpqPP38i3bdUMEiACoqmzTEaw3wFiYx7x2iPpAg9zMPaEu8",
  "key37": "Tqm4Z35qdD9BF1VUwqJSsFXptR2o9xP8G1EC6ZhkPb8o8kJ37y6HAR18wxacsE6jiPdv67PUNBqe5AJkWnV2mjq",
  "key38": "4CSWzW4kgptzdoBMMYbq1grdKecqBGwDvbJD5boCbuFzKTVniBqPACTv6bqRKMLZrtWJaC2kJM7Rj7sCAJWtoqoc",
  "key39": "2TpsBZDzeUhyLyJTipK795aTv6RDUnPJfNCeKW1Mf8JDkdor89twwQbwQQdNRBE6oP8JriQ7Zathe4xaRfNF2ewr",
  "key40": "2V5UogWNjmMEUZ9KJZUhNpe5iGF3fQM3NzPmnG6uLEGEddxW7XsJFinAVyDsg1SKnf2VAhgTToHwVNDC6FRWaZpU"
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
