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
    "53qTDDH6ZYWUPXawtJpaGb6YQd1erHyD4frKFsW8sGYKEETWZ1HYHfQBJTsJu2q58D97B4AP2o6pHMGp9cSakXQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpJpWHVmyT2tRQ2CfAteJq27V1SVkQsWPHccGHSyBPz8RdzgRFToKdGnJwRwkFKHMJKBdQ3xmVzmNU3raYHd9Zs",
  "key1": "4HvjY5CEhan4qqgQC7m2TryriBpgpNWbbwxxKCr4Vb3aPSbZzHtKToBjaLuMBGxcYn9xzQiwMMVMHrcXsUezmqzu",
  "key2": "3sftwopxZZaJ3dvX59EwTYp2mnk7B3Vy6Dh4RqwWa9bYc1HQyW9ghwK2EcsWmooUnsCehZ6UKUf5H1feoHkVB1DC",
  "key3": "5WsazAX7k75KpcPzbKcQuhm2X7B7AVaVN5RXFtQscaeroCvmnAkSWpMocS9rN133dcWUhHqjeEDR3JegzDB6gsGM",
  "key4": "2ivdS42mTbZ7uohTa5RNQ36QQ8rrBRnkK1heZ26TuaHHv2TiGNZ1sdobhsV5QnkuPqeN3wXs9zHuLYi8xVSsPjqr",
  "key5": "3LUCpfq82HHn7r6PuXtMa385mYeVkkUGY2zPqWgS6WanMriZoqfsHnr6un4Rcus4Chj4mLzAqHtNmM6orWpbQ7GJ",
  "key6": "3fT2Z9MurF3qMmcdGbojUYKLUyfcSmRJmVDujKKhk3piB5mDSnXWUFyzmJsKtWgBBrrowYuZy1RCUUjo32cizV5G",
  "key7": "gAgTzZexFdEjcLeUr3FLKncVNe6syuc8RkVfsTxtszTQcBJmgEBF5ev27m1Hy6krp82kCfqVUrsTXxkpX4ZEyvN",
  "key8": "361i2qFYxk7XyXwEBqWnFFum7H85mAP81wE85qLooQMTyTw1bSG2gTCrcJgJQ1dsTvunijXpnYe2wuCVqjVRnY7p",
  "key9": "2FqHcConZTY387WXxgQf9A2jQFbsmtv7LZk8cDH2gNzFhW3CFpFUFTstcQyySerjBHzefSbS5YP2ByfbhxPeN1MV",
  "key10": "3SQpARCnBBqvkvsegMhJTyQEG9qiqL8Cox6vb3Nd1JeURPcVuWyiFoMxW9CigaFA2MjsJPaR1Mo2UG9wJ4a8Hz5t",
  "key11": "4GGpTcTNSy5DADSMm1hCf3cXVcsacPQ3fy8AtfcGtTbsuabVv7xGP2UcbHfjZn6UxHkoXtPQgaB6ixkoa2WPiS3B",
  "key12": "3wEvmiCv8Z1sDrtqBgjhscTNpxuTZJmpECgQzcdynaPZtqPo12LcUTpxQgMTuvUdiD35jgoJQHgVuAbAVUVZKRw3",
  "key13": "2jLBrRZUzdWfwovBL4wt7ZzQ5FAfX4ELdPGbwUK9WohuhoenzyBtwsxJFzdaNPUDEpGD5N2Qd4fuE1MP2JiwmkhG",
  "key14": "5JnnN1QR2wcsp1LfmMdZHLCSJsT11hpvFKcW7NQWEcjQSV9HsZQT6hsMYp8JzqYQFZCqdW813BGKBjwLtUNKxZ5a",
  "key15": "29VZn6xetK2bwuHgfeabGMZ7Dtu2KBejcynGgTqKqTkxaP8tvw7nCkA8CPLUpstpvK1yjM42uSDDdw3VXpyBdXkV",
  "key16": "3DRLKRaZo68EZwK7PHPhZ3Mx7kQseLeCf4zdciNBkGBJXbeGdwPzZZ1WZQ3LyyZkHyH7CBLC7rPx6ReTDSqvmZT1",
  "key17": "5jGxFfayuPqoEMYZZnLHwSmoywYLShTKha2mpHFURCRNeZotv9FuPJeXwkUK7bjtmUmng2DrfTMcaaqYYB3Fsgt9",
  "key18": "2AyccXkgUt9vya7vPqKggWBusXoPm1maLTFXwmgzULVnp7xdqovPVzBnmF7Tb9FrykCP2tbgXufvh3L9TqEB7T4T",
  "key19": "5KC3rZKiENxEyD15rxHnExNvy4oVkor2HqgoAwURCAMNii8gz4BwogUH5QJYNwtpb3vuf3mpnC9rHth5P1nWzVP5",
  "key20": "4BnNTeB9GdKrrCAwbww8ZWHfStRqiqsVZ2MCDbkGPNcq1o2xi2hCLpGpHV6NgRmV8Tmtv2EFHEcJdmG3oNJnTJJk",
  "key21": "4kPkD6KSC5WR1ST9u2xcP45NfujhDLkz9jCQiEKgaNfScL5KfXpET6icwbf9SZAzNNZYL7umYNXf6XUVbsn6ox14",
  "key22": "3wQQ5wMNcKtE9y2xTMWmqpPsddQwM21D26Nes4U9ubxoHxRDt4tkqtU67jT6NGJr2qqasP4pAoLd5Km3igUor24Y",
  "key23": "4MRiLCDoD55S2cznEC2iJPMbWWC6tpWRa7JnsboB6qNmWz1MS2ErXmkvdZntc74fvgcPu7GQbq5DjQF54c3smwVJ",
  "key24": "2LZRA5fjJTCWNpGyVojhktzktgwSraLUFArXkbrGyGFeY7oichUSL7v1Y5gGWYd2wYMFLSp9C7RuKZBD8jdhNrHL",
  "key25": "2Q3t72p2Wf6DQWjosKbvjneArXeEBsZ4NeYGxzrDcHB1Wix64wR7vAmct9C1ZDSXtP9teCbNH2WDAAdWJhSFt3uK",
  "key26": "3pHwG4ujFiThateRTTznhxAF6ZHAQK5evbYYJfcJCUHPP3nuGjDK6PUjmdZvVeeGKqm3Y8sj2ZvEZeboVgL17hpW",
  "key27": "2aJ1tn9VBfeWPxS23iiMt3AYMPQegtXJG2MgkPRWoYJ4YBbF52VD4dk7LnezSvvectmMTKUUANJuFufS1c4WLKCA",
  "key28": "5sJyrmzUHuDhWVSdgM4PbvK6Wj275THRErSWEmSriD8FkoGajBa8SCnTHLd8PEamPJqwyb5NRso2jY1TXa3ojiSr",
  "key29": "2cHNwVncEMyjtSJsbJAdMGw4vz8ZrJFpcJZY9X1QKy5VWgPLdUxcy9u3Kqj2HoboT46nb2L6yPGHeZTYFhzC2YV5",
  "key30": "5AwSY3awZWEb1iQhriKkJWtaGSMAXV3KLrtp5CUmMDXiUSp8LM5juVJEMn3WuzQS93bp7XoC9GL572pbYPmNHyFj",
  "key31": "5NPnDRS1RcPDskabHcxsLFqDMKLmPoAR4A9cR8s31LZGR54MNKh3N1PwjB3jfSiTCNLnGLPqTBqX1EoNqUe86nEt",
  "key32": "4EEBMPu2aXDDZdBeDzSdC8MXJM15V7YHc78EiFRf5TpsQAfyL7Hsu5UR4RR1ZRPFaTzwtJLv8URRmCnKk7sFFdud",
  "key33": "41oSEYngoqDjMi3grfsj3UxszecxzDYN9ReYH7FJ4Xnkow2dayqdLKD2MgpP4DQryBJ8yNhqFMCMBWtZS6UQ2Zis",
  "key34": "267Rq4vj8E8o4q8DRPPX9WQWVr1TQhUqUGSpVG3EnDX335aMZeqmx3QtXDpSSb8F9tmhxYbeeEUpLRZHL5TrG8g9",
  "key35": "5CAXAw9Ad5CxkFMPnodF7wZ9WbXHi1ACXrnKYudgAb9FoUMvMLtF2tkoZvRyN5HsLfPhBuZGjyzDMCd7Zm6FSj1S",
  "key36": "4w7J4A7bbLZHX8rkKM7u7iGHAEvuqFoam31qtHsvMcHpo5SE3T2zgD6WzQatQk3SBJWGG1RxhBeBsXGy8H2xCMqg",
  "key37": "2vjiSMxk6718onYHvsXsNAMm4yf6iCwgfHzrGcLd7ZgRtNPUTZK2zg2SnkFDufjgcNK87gMLhtmQpU8QbGhqbRhj",
  "key38": "55j2syu4o9aNMqYJZgdDaGZL1mKZYFot5UMnvVVoHtu7eczgMinqLe1gMfwyyZGcD4LehHkdQmHPYPN5njcPJtEb",
  "key39": "PCUqxuHvfmZ1KUEMCCD5mSSwJ2zeAZ1F6v3T6qVwaeXdYT12mZn77EP2Z1nargCGvYJW8hDGWD9TNffTFsb2oWZ",
  "key40": "WcRN5fnWqoRjzxLteTnhq8vc2qBud7vTGbwnU5HGHMZ9JrekyKKUgRJqFWEyozq16mAsEvkbdgqwxhjQKT6ViLc",
  "key41": "r9aYkoA4ZdjLv98v44LzogE9W52kdcFXxjstWNPHyYvZxJvhR7FeVYNpvpRXn2rvzjVdWyC2xBwVGiJQwikFCY7",
  "key42": "5C2oRLAe4ipYEkxC9poztehiZToeoLKKb6ze9SNXUzRTDxsBN4QHfFDonPSK2B6pYumiqWibPAtzLjDhVJ7cAwBi",
  "key43": "27ujeY3DVz4mgREdqpdvXtd8ii39UhAM9qRGhNeDu3PZbDRq9yUzD3bgt6SJMKmc5m9ubi3FRRbnEPSBBX5M2SnE"
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
