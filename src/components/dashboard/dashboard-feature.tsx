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
    "2kVMLFEVKXDDZWM3u5cvxaPvrrpBnoe1uxahTDrkChND5dghYSsHsAnnqZMnvaZchfsTtaPNY9Eo7zprLKxSJLCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umcgjMVjkc3bTWzqeQ2TDPVtTt2gyHnKi8SsBrirAbmsW9wnNCcAC9RVBtfFMBatjpoL6VfTk4ARXxgtkn7k3pF",
  "key1": "67QSo6KKPBSxk9BNdTmuW7FkGSuzfzhSiu3U52g3FCATPeScxjJeiDEK6tU5iR1ok5tERMgmnwnFMcKcXawvyiyM",
  "key2": "5LY3H5Pth6B1xKBoM9LTZx94T5mWitRkwh1Ee4TvrKL2LmWHncKnk34NtT8QqYiASmPiBCHyNK6wPSJoomJ3XkGF",
  "key3": "3fBnvk11gjfbM8LBAQtft3PMeYNemo6DoYiLDr1XcfKfasxqXff2vDJXhyipoJm9w9RYq3y8jNYA2nYpzpPcNk4A",
  "key4": "4QPMyCtmHRnXR1DLakjjw3pqekEX8489rKLiXEbr3M1v8JZgZFgmTxsA1wWQ6QkxXXvujv6S21bpqc6MAaogGieT",
  "key5": "SF3KSz3N7dUgjnKUa61xMPbKpxUkPyuFgMJJJkWRw2bequjAYPWo7LRAWtL7cd9x3bhhu5dqRNk9FED9ix1zkGj",
  "key6": "2HdeK2PPwbQMRe4sCzPyXoMeD5gAy9ZNADSajyP83mPSRL5qFYWUeqmubUmfyTWrgJt4hwR4dcvYerMTUoq5kxeM",
  "key7": "5Za7cRN7xgM1iu3GL52AEQwJYfyGT3mUKQq3yC3vkyDeFyVoiL6D6qKTkp5dtkKD9z1hs65HBG1gnKpQ46pUjqvC",
  "key8": "4k9U1efJuxT85WiJk9j9n7NpMtrnk61NicbXcH9SY4qhSJYozrShMUjxXpdJYBBDWDZXPxrgswsobZiW4hub4qmZ",
  "key9": "3YKb1PGbd3Tud1BryxLw7n1nMhEkFC2y386txz6irer1iigAufU4ZGfvYM4SzmSaCaaCL4ZeMcckh41nLTHjK6dx",
  "key10": "5BmgWQcP6pyH1v5kxYWhZmNkcCQC1sbW72r2QfYNWUBZ6q1NUUq9znsoY7msM4WgKQcwQA3crvZzBmiHQF1KFLVU",
  "key11": "2kwVbg6EMQHkjvWaH8JNt7q8BJXiNEUx534oaYF7yS15wXHBVMRu2geT11QMeW5XF41vka2GQBeCsVb4yHjiAotA",
  "key12": "EG5hVTYmVcKWwKe7ALLaaLxrx6e4unmy4Lv2ASTCZM3tsY9c8xMqboNq9CoFUu3T3iBnkXcBp4RPSejbNzvz3KG",
  "key13": "Kw1kh8VrmzQNrsM2VHBvXNoKDNDKVicd81ymfeeTjR2hWg78N4Dvb6FtwzCR8c8Ubq8javYPEkpTQz119p13Hmf",
  "key14": "3ctJEHyUNEyvsKZXKPyEh1suAvdMHvDfwhDXHxYjPX9VSP8vPGTJ9JBovVSmHAT5Eiryr6XE5SF82J4DjEBtQHaZ",
  "key15": "53MdeYArSAzg7qmpX4nZ4kX6A7pPg5xsC85y98SAUp3iDHS6ec7zKZdzJyFomAPk7zTFEceNWfaEgmVqs17UhxtM",
  "key16": "31ZmVKfK2xcdFM3RMsXoCiLqvFfTbsCw2fNqzRZAuRxo2EnsjrUSyJDwfsRL5frAeWa7CHVHRCuBpcnhKttG3TXh",
  "key17": "2JkCVrRmKBtXEPv9yHWbqmTcqKMSp5wNuxoWgWgv1Ft1Kgq1s3H2Vn8H3dTU8Nwi3zyhqnFM6SKaUgttK72XZrdu",
  "key18": "45PQXHbxwmUw7rqoXP9ccsNumUWmcHjr1ecZmQ6ZHkyhd2n3kobg8ZVWBgoB5GdgHWY7Ld32jYqPKBXH4yzDVGsD",
  "key19": "Azb6Qr4sPKV3iLCRhdGUyzsx3i6k2dispTi8KNEwoMf43de1C773qLPAwXEKAFu96kWhq3WC8y8Lt8aKexE13zt",
  "key20": "4vW9VC5iBTL3JAFwU8HybHcqq2TFbgppgRbJxifDaGa3QAUQxNJ8zDwNxxrKAxKPMH5HnJExqRQ4iYh9GFwFTk65",
  "key21": "21drcSjbuQe7AZYWkdn8iMv8MinS7BUaauV2jMdXxx39McQ2Tw1B6FbCjnjSihYgcVLffP2nHJVLw54QZ8dVvPGM",
  "key22": "2ao7MwTfRpv4AvM2j58Vqt29n2zjFNHLj6wuBgVvzcXCNxtEh52GvJNPkghM3yKXfwfKFUFbb5xDXLLuY1xKbTeB",
  "key23": "28CwBp9sor8mCt8Yh7DZAJaujEpJujMMhbvCG6xmE2WFFRdj2hSiPYTfvX2jX4mq8VoMSDTGgX7GbPRaUxzknjy7",
  "key24": "zUFvmiZUdWR42Hh1VnnwbuQyxaPMohwGQyU2bLW1PHVmJH7zdY6WrhPkHjRo1zBKewH5xkZyck3P8xSCa6jsoEA",
  "key25": "53qxPRMKNTY1Uzdk6QBBA1tm9mcc4dgPGfFX384VerUx56YZ7TTegMUYJyDYJbTo5CHXvyhi7GqWGwFTmxSDEcRV",
  "key26": "2iYryrB2qPrWk7WJzSCAjToxWqQxw9qUXK6HTRg2zPdoribghTodCpV3A1fkXFjumLjGDLRoeqiQpQCwhu53Etuq",
  "key27": "5VGWRCnNJ4DsizBRAonXXvGQgyXfBdK8UmJb6a4nu1ukp5seTWnb2Rg4raGSk6ARVYkCuXs4gf6Ge9CbwQZhEuht",
  "key28": "4tBu21yNkXTsv58xpHjPhJTwPBA5bdjiFQAKu3mbuShvGWTfxZ3f8wJ9nog7zy5Zb21U4MkG9byk9WHJrviFYPBo",
  "key29": "53XAEQU9ha5VRaVWGrKHJWT5XH3gzD5XND3PGJ3vf7URNgN11Z9JgE4cff1bJza5SyGCgtjv2fGRSGXtZHu5n2nm",
  "key30": "2MXpfqYTPaRJQyyY4DjBqxuj5XiXLh6icLcKdJwUK8dbqDbDZbEdSiorwYT8opePFSKHK29ifTG3gzMn9Wv1hLLv",
  "key31": "2DtQbaRWRVh9a9eob2QRF9jxYTpayx9wUu3LjV7YNRsvk2hS6rXNJRPJWnt8uF7TDAXV7pNH1KGXuyYQrPxN5r2d",
  "key32": "5F7FvJYuPvzvAGUTR7TntpndQNV3by1Dk3rQihG4oy6tAGXgu46a1v7LjiHieijkiDnvmJBwNDtGkpum2dY2QT2V",
  "key33": "vxcEUvSgtccFUpthtJ7bCcm2qWTTkD2w64TzffTaWcfduyerNzBAxGurqsYnWU3C9pajKNa2HSY7NPfvAratpMV",
  "key34": "4dvrzfpFkrACpouyoQZSKk95v8ioGeJzjkF64vmnNhTfFmbjkbueXHdcCdCPVeDSoVoQkxETGSPM2j2b7jTVZa5Y",
  "key35": "61GhXLhVJxu2WVeuBwnkYuQhEunUrpd46nQL2LKxsLMb33cDHPaVwKwNTAZ67Ardae1HmHRcktpLUe6H9D1cdbja",
  "key36": "6MTfF6R3kwGqkGDi2kYN4w4akx8qaNgPbhAJyk1aJ53NnJnYrRCtdVvJVm2k1w1DpR1KdwfhhUBEqSVFdWrQrtK",
  "key37": "51ateUhTrNYLtZWSrY3vLWRZpC7voZcFfWGBAriTV4PoEGxMn6spYnFLBK3Z2ZQffK1TFwpQ8oiy4RBFEzEAuZwA",
  "key38": "3CivAhPcWfXZfGijc9yexrotLBGYy5SCSKdMmkYi9E3ougXujwwdZxkZi6WTauR7vcVNmUXtxFJMgQSMdNcraZvZ",
  "key39": "yKEmr8FaRnPSoe4Gs6koYyNdRaZvtCCyTNGCBuNa4NW8HrRXcmzxfdfBcffTL4HritqGQxGHLaZGAHgUiEaAVGW",
  "key40": "4CDvEVCGNDZS5MBhDSzy6xKYBeroRcu4VyeWX4yr6U8dYFXDktAFZ1bnH7DMwxRNorjnxCAsexBsHuypXx5GV6A3",
  "key41": "3nJJSLgsRzj9Vo6iWFDBPMEickv9r2SvSArpVmbvXuCjnKDkGN6A2qoh7F2pifjMxxpmV79EYqhtLsSWh2p62oRG",
  "key42": "2Q9KGWwdgNJtsVWz856Qa1K81i7ZC4zUwHyT3jDpWZs7Bb1fxEKGHUunf1Qk9LKZMGivJ1mKGFXrpEmuVrx97ZqQ"
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
