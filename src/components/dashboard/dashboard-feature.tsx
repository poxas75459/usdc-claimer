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
    "4yrqmG5hvBNcPJJ3UVraNezbdxn2qnd39krZSAiVwyK4VQRM2piSngMJPFMcD1CALotjzkk5AY3FMYCLJFdHgjUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7MGDRo2V5CicET8EYxhvYKrt3QZjwabWMH4rR7mSEe9JJPQf1fvpnQD7XJgTjYbjqLvMPmhSqzomnwcNjiCHRG",
  "key1": "2vfsH5AoPadLArZNL6yhf5Q56Xjhz4fFwnNJkB6zb4d2sx5CC87x7cj28QvbtKnQaa3bJUvmjsiA9X6YDrZh3zyH",
  "key2": "5B7FVVwmoNb7sJbC2nhkcCGm6wESh6yrLUfmPYsLFDRhLuvyWEw4f7iEqNsgcDjMX1vA9dCqQRDYfC35s9o3ezEz",
  "key3": "3LnQeEd3LmzmgT2VPonf7U3roAyc7FXdbjbpAzYCGf3HxMJJCvwsJy2ATMXWyazLvcQJWo91Jfztzizt8MFunXMA",
  "key4": "4rSq4JLrcw5ZzKFw87XypJyK5WzFfd2DRFqKT9dqVUMDu4LYFeU9a7oqK68JdipcPVpcHLaKH21agr6hyjdKhe3F",
  "key5": "tXi3qCyTkxqFGdDP5LuuimvFcVNi1cx1sdncVDzYzh8Y5iFknTMkEUWZ4dWFTTgH5EFKRzj2eshcfwY1mVNPVqY",
  "key6": "5nUj78ShWKtbb3ouaA1fKzTX1zUTFyvmiVyW7CckJuSaHhExCpcDXN54pdpvgVnSmuA6FgbyQPs8aNvwPnjCKCPH",
  "key7": "336yMaKQZtjxEPqhwJqsuZYTRexq1LmjRUNHX4eUyjm68VmtPsW3w5yBPTCxcUrhyu93o9gc1rDF8UQu7dDyz6W2",
  "key8": "3A8iXwSh59vM7BLtv3erAPF7iae4n4pmfsvfmPZ92BEs91E7yp9p3PyjLwazd9qPibWbSwFTGfj5pVcTFyiCixJC",
  "key9": "39bmMNEdNA3ntKoAC2EQMJwcvpVsUsChHmyqXNChJ3RDvy1azRZsxaznZfQ35UaEfzC14ojq7cJeQDWaPiGgBxkc",
  "key10": "2gyLZQYCWjHdm4f3twCGMW5LtpD6Hrxr5g7aTUqrCEDZVck3ZLbVcxkwUKho1o36sYjM7Xcyc3ySo5kVCU6wLGrm",
  "key11": "59k2dK9HNjbfbRBasiSgyurCB6jRfBkKVCDZBUnnvYcmszw7wFrDPMX8rs2bMGyoNK7CP73v1Vt5YtytFxwJj9vh",
  "key12": "2EyhsXVxuN5dwh32b14AufrKKNhqrLPNgpnyCh1GaSDiQMBnw6Wgx9N96xkgLMRzHbucLEvpFr75N1Li82KzqMbr",
  "key13": "5WRtAimW8RoJczPnbbxhnQRjqYbFJDW6xvdyGzsT5uUSJuR6adUtTefZNFP9irRU537iJn3hswe218F4woEJk67s",
  "key14": "Yyhtvsbf1tszTrNkFN49k6RTgxFYLyLB7bGzCXdi1FcsH7SK6KUH55tCqctZTmNi1ADHHgQHadT9ctGgYuN5Zna",
  "key15": "3g8QeYX2CcqBxdQNso7PxKN5TEM9KjyQxNtH7NhZokHzqjrd65YcAFzCNgcyZNFPinzdtgNXxhn5MEJiwKHWXLix",
  "key16": "51qr1TKr2RvJ6MxpeD1rmJ3bSy19Y57jzhPoQ6maQ6SZeejdzHQrYdtRbR56sdgb7mTXC96A7X3E1NAgdv82JAW9",
  "key17": "28JaJhRHhWLkAwyFwRRkgHLkQZc2pgCNSqzjNErKcbA66H8YuTKr94dBGmXJ5so7f3JL15wjcHsvxniwTkBriiyF",
  "key18": "4pNhpKRHAZLcMvL1WD54WN3xezSgidnJUmhPGbZTQwcsDfT3JJ4MLjcjeEvTjVxqibB6q5yYqW1vBnmVtp6br6Jq",
  "key19": "2Vici4vf83zg5QsTpKSvVkEpYjpZkht5o5t4FysU16taKqj7tsnrDFN3o7qfSQ9vbdTfGfEAMmuAfTLQgMxtAfsv",
  "key20": "577xG5qwMPoNZvhAZdjah4gB6BUv4Fn7jDUcXDpks1zYamJXbLAQGGXoBzrvuY6HJFErUNJPTbXt7UZBgeVrjhQm",
  "key21": "4TEtfprMU29YGiqNnpGy3hkDBNttrVS6A5yyE6EeQKWcXLYvqyaxAamr1Mw3DteBd599SkCRo17ysMjeK1hEZ9q5",
  "key22": "4KmVefEisTrVt31LYH47dCxoLUKej2EChRxqQbCeMuSERBcXY8xqGWamoRnPiMzu1Y2UjYhoEqj18MVCrRX12EEC",
  "key23": "5jzu1md1WCpNNb2gs6nY9qEohqZD8F9SWLc82ufxMffWbqqTezSEChtQYtQnrwQWK7m4JeoTn8AimkRrPgybrBY3",
  "key24": "4uJyDnfoSimNu7CqT5h67RHkwkjwFP5ULFtwBLTUMhLg2SHjaBHeDUeqqrkDY1HshfcHcgL2JhcxnFQvkfAQxTgr",
  "key25": "5d1AsVDeyqKes6VwmmwrfmHUBeVefXt9MuqBqTm4T15i11g8e6w8nrojwkMnJ8nWrZPEVwGnpsrEDHbJNZffeaMg",
  "key26": "2ptKLLuRK69Kfi8tt3WwzbAgcWGEDYtq7N3KRpsLHug1Qnc7G6TcA4cur5wr3ByKF2F129p2gAg1ejkUs5xDbAK4",
  "key27": "2FPPh31bpkXAHT5P3v8KRjt9HttoSftfUCTxnEzG2fBreNRy2WQDAD8Upjw5MUSpAfafJDwMWDeXRM3Qg2QBfake",
  "key28": "4Z63AMEdHVZWRyMAirPMwnQuAhb4TNg4DrnWreLR6QZNUtpz3qcL5qsuPhRQCcKPHTUmP86TdpBaFwVSWpmJ9fUo",
  "key29": "46sHNyRxgyBNXdUTF8KRGBPbr53abVaHud8v6WxPf1jzsuVEjyxxhqqgDNnWcv71Py9hYdh7GzBc739TkQCW1tSq",
  "key30": "5btCUkyYhE9YZhxRqWPvT38kNDMQUA9V1Y215HumuUL846FFKVwSUq1UENbjWEsZng6BoBVs2kJfjEyQPAJ59yqE",
  "key31": "46yur7iUkbNbugTcd61WFHjXocDD6ZHWKqTXqAH9j4iDMKvhYULtbTMVULPsKSmMFS3VXG7dMHehrJfCfFCuFBuR",
  "key32": "KK3QMe1Xq8uW6XvtRRpouAPb6yvBbnRsd2UwQS3M2EiCt37otfqATMeCF1M8QyAb4ShreA8iY6coWxjsYDi56JK",
  "key33": "3cXyiSE9H9Xn4goctsrGPZuTLQxizdxkf16R874pRze2UyFHdXWUr7jn8vm23LgVjdiVyrMwhebyDUBo3fgDydo7",
  "key34": "648yis1PJyr4X1ziavvhXA8fPLWsr2cbPnX851o8GouGqq4MFUfEtvU1iJK2q4JUreQPinASQ5SAfC8LRZT6gteN",
  "key35": "5oREvjcdV65MdTCWcirzHdx74TCheKjkpPUVE4pfTa3SjYK5ByZA7Pipqkpiq4DFbXHNiTN6zJsaVfrfr4ebwWdL",
  "key36": "2M44eQkLqGfgYiBh9SBBum9piEZFUUFXNP7xcUjryTaqSNNGj4xsuKQzuQH5L3o1865fEr9tiCiqzCUsnmQz5r4V",
  "key37": "5ukE2o8dYFMZNu4adHqHa9Pb2KubNULGhTRZe3Y6q3mnA7hbuvRvyHgUigU1ZLxJYntfifhFFTS4i3kaEzJmadSz",
  "key38": "EvJXRgLAFMDvykAQF6GUmSe3qtFF1EWaScJsw5QfA53btJU3CSQFmmtnV2w62eXmmUF71kLjajetZiLp7QZ4KLv",
  "key39": "62NAx5q2PBn5m2ZWZHw9DkKBEeQeKMHCL1SX31YtAdY8bMQVTFKvZRVau43k4JwciFp6RLbZTua9SjBPWuEmdDRS",
  "key40": "3MP5rvEFnn7eqG5kzs8V7qm1Fde7eYURi3hbMbkjT6Cp3zjuJM4ExG6qAB87RPza6djjSqJjyivYEqg6znctHm3Q",
  "key41": "5ZNZesDrh6bBAFLQATV3AP6D3P7ktPBSSqJhPJcBQsBJ6EnLfvLDQkeEY7UbtRYwNVp8cNssKTQvnXYTQjt9uqGt",
  "key42": "3CKQfUYjrSyzRCGUkBmjrRYqg6TLfWWWgQGJ77jrxTdLneax1kMg4cLQmiipA4cwbmbqWoMCcQPpqFBnC5YYyD78",
  "key43": "5VDrWSmPgxKX4swvbew8yqVhgZYwxTHvm328pszTKZsrn8s2ECu8qMFZRyvdGCq2FukPxJh9N9C3rjXbeWBdmQqt",
  "key44": "2VK67Sna3Lsbq1nJWEUoEhRwx2ZDqaLDzpWpWqfQwvwu9RgzuyCyrWX9dgBBobv2TD1asktyBKacRzhEr77Mn1MH",
  "key45": "3XeM36cxayJ1RrfmifN7mTAKEJEJobnywqCyzd6hTjjygL1EWn85CsrGRcoxzmeJxjzMUX83KD674ZLkCtjCkCSE",
  "key46": "4J7VyyU6xzNE5MjUquqnPhrHAec99EoUWQYrmMQAS1tVCpXHrAysPJ1wopFNAS2wqMMd6SDfucNSwoy9UDnXzfhA",
  "key47": "5gYujUghX5VH6Po2ohiFbhRYYFJ4HCtat5zjudeL39JuQciRMPJVbJnU7UXbCghsLu5xxYDqwaHx1q8JqZ9Fwhgq",
  "key48": "4nZaYCZoRScHL6ts5Xk8Y9MhixyvVaoYuXA57cH4sz6F8EN31MDLYFza4aR1ETfp9fYxA5XXzb9WLae23cGSVWv7"
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
