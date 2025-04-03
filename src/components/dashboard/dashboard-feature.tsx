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
    "2wmxgFk3sNK27wr5TkRW3d6iZTuSoBWocHt1iFeECkdSQBHoeodnrV7Y1uWEpasYK5HFqbzFEZdoFWAGf51iKLfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krHULkHeTbVCRYerRYhvoRyhZnnt5sPtN4d3jaZYoCYLr4DtNuEQwvjSqr1rfSUNzFMcC3mZFLqbx5P27qwBNuy",
  "key1": "fsvxGRZLYSetw8Ug6z7EvbHyN2JhxGRVcFpBSWATFr31BPEYcRqVXykV3sFir66PkVFBB6fLcyNmUAy9B75xkdz",
  "key2": "5afXr8geXJDJXiYNKif5c92Xu8MqC58wLquADhfCsdgJS6axF4tPxzwC5cTGaEbJSESCBLtaPpSmtq5n6SgpuCCC",
  "key3": "4VxohXr3qPXMvSi1swRmLrpQwi1VWkrcX1GT3FzsjqKGE3ZRHQv6sxGow6KvaSxRbhTDnWrYhyFWcmM6TkqfahQb",
  "key4": "kUfsFtpDAn4yCRK7CmUWdDcPx6CXEYVSH46StY2o2Sktu9BKA5CyenygDeuphcz1uLDQt5AhN7krG2WqTxu6Hh7",
  "key5": "3CJ2JVjZLaiQ1rDVBn3a1sNMSjDf8RY1nyNn8gM4boxBQAnTVDh2uoSyztvRNxMeKXGAAk5cmQgCJrTCd5QG4hBP",
  "key6": "3bwGCwKwRpj5mtEomdxu4CBeRFk8oEwBikwX5hrrP71QfcHVieMHmHwKT78D2eb5kogF2V1ZC8h564vVAJbyf1cJ",
  "key7": "5zhtH6jWii7ZKzn6vDwPmnkG82VFDd8X55bhoiL4AqdakRWyaxaFwFXEFnMgXWsksSQ1VHZvMHWqQphjxqXCvjxH",
  "key8": "3Ueyo4bf56an8QjorqUWW6zPCEnDuRmZrTJn1E4SxYvYj53zJVDeNza6bnq7s9vD5GsV6aRNQJTvz4xYA82x5KSe",
  "key9": "4tenhRhvA1XTfVMyh9siyKPp13jCEDthL3S7R6BzaU5jTXFM8joiyHcHht1CDyqFrA6J9UVSHofpJbJXEYcBVroX",
  "key10": "3emstUg2varYDZsBbhP8muqj8iktbard4ziGNpBskvw5jUewUGt2cDnxV5KkgaUbKWMYffAKnLpLbFFDUpFCPN3Y",
  "key11": "3LB8SjDKT7jErs2EXeKhWW9hYTbZNyi3FMDv4B3wXfbBo2GUVdNMRza1V5bvCs4eNKKUf5mHX7nSDhNpaVFd15zj",
  "key12": "4FLCr9qBU2RKAn9ig1eNvxwG1y3gLJoELMPkAnQ1k6iKyDTTVfgLLPivXqUfT3cPGvkA45dtWkbAywkWw5tJHcoG",
  "key13": "3KnmvhbBcTgMovKGvNkUNYpZCVfecbMpACxn8jjKF5kWYXZnwwCMEUfaxdZm3mt3pJwekhYjK7LQyXMheVcA7FBr",
  "key14": "2mvY4C1ywBbZiUT5QdXRhFg1gDRKQh8bxy1h8BWWfRRuaY8kWNvfCSCjJZGK6YSnGmsSX4546TKbWQaWwEenpR6g",
  "key15": "2Rnde8oc1RkvwpsqiXoQGJUULTUb4ND8ZvCQBrecRKwCks3qSMVxKEwCjRCuooWxmKSEgLFrTr9kHSN9ypQ9RDUu",
  "key16": "2TNWCvvem11PuZdiNQbPvt7NdmpxuiU4psgYv16tHV4TQkN435kUZjB5nnKMpaJLZJRVRWqU9MBkri1Hx85hJfba",
  "key17": "2kNKEiYjCfo9tHtoUqNcrTzkdW5KJM9hZdNZRKWtQ66homH2sLf6432UzywJfXh4vo62zA3evKXqQCE7EZLcJsTH",
  "key18": "5rMJGs7ARafdiGcFKX5dkBRxUesFrVXWYmbWJ9Wwd8EeKx9A5bF89WryKJvAN2W5XRdRcLXq6utuatFx4SjeXFZE",
  "key19": "2tGYXAkKBoAxDFyhpshwP6xdTHqqc26x9kiAjE995ssdcCtPELV4TU6w4zXoheXxqaAqtw5FPgtUau8Z22uEjcAN",
  "key20": "3jic8aY7HCoMQmcU1vnEr1U5pHhcAADhqDXWthxzZWU2RbSNXys5XYyKf3UaLzy57zYjiugbCpf9aRVBMfQuRafy",
  "key21": "x1AjGQZADZ7nCddhpD2VTCPt1ozXUMfrTP7hGgDfZTBbeUgtArY9r1RyXwQQRVr1hUbjkBrUQxsz814uNJHvLYH",
  "key22": "EQpPWyBVQrAwhtmLbKytbfPQHKDA5E5y1zUat1AqJ1RGHncHThp3q3RrS44EbhiwMdz8fFgV9aPC8UjPfFcStXJ",
  "key23": "LDUrcNfkjMEjysjpstPT5jvmGJoMC8PUeAVfkk5Z5uJwkMR4XY5ro4BeiiXZ3sb5Ryfm9myGvDHWLDppbBb7vDE",
  "key24": "4GcGQQ4WGDWQFx4DvSuJ6PDtxBz99J3fqTwLH57KBT2QMZbWbiJxnE5ERnc22XCMrcwQYYiT8nkedPycTF1sK7JW",
  "key25": "46cw9AnJz69T9t3uCcsmNUujE1hDPM6b69bYK7hb3GaVNUWvGherQbYFcm1ji59h8uYJBJSJhfj8UEbVrTNHKF3U",
  "key26": "SwWvER828nVkDBGTvvKsJtGTULWY6wmWvaRLJtzNLnj11XnkFRZai5VDPSum2YvfQMcQj8V8wLepWy2mdQTFys7",
  "key27": "2oBCnctwdG1mSMADx6hr3eFeXirxo9eX39zwxakqHKX2vCnqfnc2GbYUdfiWAf5T6jBe9xDcWhxm9rkWUrnpESb",
  "key28": "2fB26iuD1jPSuyYsqWQQatmq5UaTShb8jiyNRbS1X38qTjigwd2RTd3GdHiMvH7hyu7j4dqt6zeBCgKk1kaUKoFs"
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
