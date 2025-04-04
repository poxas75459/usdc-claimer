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
    "3Q4jK52xh8s6Tszeo6RChwta65j1JSmSjiW1Xxbua64aUuN9PxhUVPH5iqG936pxpnWJqdxT6KEdiYVAs29ArU7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLYJ34Hfg6WHmYpz2kBWw3BD6AAkQKtgnQMx8rtgnZbX6kfs5pqJSQTN9LJbeWyMzWdGvSgj2Ggz6ENkoMoBbPT",
  "key1": "QCtXz7ZRjTc3NxMu8dCREopLeo2ihJRYQtCdMRxWPP4A1vV3w6yQPHhPCAUZdxyKSRK1mYM5733Wym6TM9TCwRw",
  "key2": "5CvSTEvrEtkHrKX9dprWhUpKYwq7TW9wdrfYNb7ShSSVaB7WKEwnMuvg1eGKJh1cGoaerwY5tQb9MMCk2K6zMcy5",
  "key3": "53yVpM8NjcGUsF8tvVdM9uoUP3XWkaQYNT4urDUQWwExzm5H62zxeKgRT32N7ymd3xiC7jmZH1pQBFMHEWM5u6F5",
  "key4": "3RmDpV4NgbzUTNfr9ccuiHKgSaU8vwF254xUXwapnMpJjxC1EaFwrEznTEr6gHKC7J68w3kpGK4sPbWxQU4R3NxD",
  "key5": "2X2YLhkQGmweZHPcJSG3n1xMwiMZVqjUGGCruQPpebA19CwrzFFBbsPVm7ZFggsiv1P2gcNz6fKxwoJHJTM7ry9R",
  "key6": "3GRk4dXraiJUsyGTPMih9zcgzDgfzugJQgi4vrTaq7oAJoCx9Pc5aUcLyQ4pNGxTEN4Ht9bXx8mLTKg6P8YoZ5MW",
  "key7": "3xJHYeCHAWFwGw7u7ZKF8sKLG9LSwmWorEiTvvwujs8aSApYjT8MQFTNR2WqhBBB7QQDCfBN16UKZTLfHTf7YS6q",
  "key8": "3PdjNyvqpfcWUN4sdcm1rYvGudRYffrMLxzvKRXGYdQ3L56Xs6pA37H1EHv1Qt24QLrS7V6MDv4mSdxXScJzAU3u",
  "key9": "3NrKDM5nNP9VuKwu2Uf6sBdsC6tzrcfvPWk2KqJ81pRg9GhNArmSscsr9DHr4JdrKvB89nWoyLdPMSnnNvvf9TuJ",
  "key10": "3nvL8ViCmKUjangSktbtvwWv1xo4UxnK64xN7wxrPpqdmdhkWYaVgZYS4fup5wWaEtk2iPKpnztm148rewjEGPtX",
  "key11": "4NMpDCFQpnskktqqjBXoxnGmjKJBnmxywgEha4XontgxyEHW7NhuebwZLsnodZoKe6evqNzHF19kw43Tjw2nJkkh",
  "key12": "4WizpZxisPsyFH9YeTCLuRbF7paBnMHR5BezCMuxoUJHstEitQzVCHBT6jxDCMbcmRvj99BzSq5HZkAZWB2PU5FA",
  "key13": "5HLW7BumacNf5iZ7ayWmwReTCrx848fUXycu6bvXqdtKxRHKHTYrVwXU2B5h6Wc6zxM7r38B4bep79fR7obRT4Aw",
  "key14": "2vNUqnPvcEYBiB9SNKhnTEWViKAzA9JC4Ja5T1dgP2r4HZ1WtnbSyAA9mqynSeDE3Vot4VxDLsVd9D1qavaxQ9X3",
  "key15": "QQ8Hya8ibf3ZyuP9Mx5H9C72zjD9WVc3am2kHXhUUniGNxz4YJRK2UjKVv4twbJzDW7M65UnutSQhDEzaWBy9QN",
  "key16": "5WffuvK6i14HEXSnv53ZKx5pxgChJP4tK1q8LMYsgPgA8BXeWDp4H2hZRZgngkdEqEWwQTAbzmGXGpFaCAiVoKCD",
  "key17": "67SkJzG5RWZyfScrUPc7rXgb4xmsugHFc6NRCpFzzfKd1gBkXeUSs5zbAdBVVUeFWz8ctojswddRpQhWGipitgrD",
  "key18": "59PbfJLdQST9Ta2aF4RBG1AS7NHEqWemxWEuKPpCP3F3UgSUMeFnVqBuGeC1MonrGNtgonh8LtKn9hhjeJ2DzqSK",
  "key19": "3QsMhy3nr8Ssmq3RtDrT69V9XkZe75z5cmgpexFySn81cHeSd9GYpruu8CH5sVVJrEjbqb9NSLhnFX7hvBCYy5w8",
  "key20": "5czggExAsJkzDXsYhUiAGS3i5veqLRMHzF9PdvnhPt5QaFDFDsRASS5kEXBmnv84EYfBDRueEuzSrbQo7Gduzd59",
  "key21": "rWyz3AWG4CWe3c3RypnowVqGcLQnZ35qCMjjhHUqPJwoVBABWKsGV8YzKF73JUCQPV4DsoNZxMs1h2XSE3FEUJr",
  "key22": "3PC4e46MrXEe2fTYtYhrhAxWhJj6ayzAYFsxUv96WrLUgPEsBBeWyw2h2H9ofLRQPfjajkYPt9CX1bCLmj3hc2pZ",
  "key23": "3aNbor7RNHHuujMbDvhkCpPKjpvxcyUhqdYQ2VSRnUhjxyB9tPgabmbqfGJ9Y4uMWPKDmz5ruJpFtmnD846NxDgz",
  "key24": "4evYz9Bi59yHMA2ArhFVeKyP8kpPArJU7YGHM6cUu4bLG5yU7RQVz7KYLy7Zr98jt11M8cmtFn3EQrkeDynmBYFh",
  "key25": "uYnY6QR3YMJ9MMmzghcgJZCRiUFKBUkcLJz8EDkpuioeemt1WyXLNBdiQCHS8mHtJ9MjooHhfrRtN1MDpw43LZK",
  "key26": "4vbNNjgNpNgJRp6SqAcGKRhyXxNHMMeGgnwp5ef8wZG727bLdtuDxhbizAv6Rs1VmPGoz5m3Zh8kp7YmKcKsgNA8",
  "key27": "3kL2ytgJ2C3uyqARN1YToqVycVoDKCDghMMNfvY1iCBKCcGXe31tiuwxiKfbL9M3d3kTmDYCffPimaEfET7m4A5Z",
  "key28": "3drXEznjF7GQncei1Kbbwz3ptACDuef8hecB7TxuwUa1i5M2osBa5YqzC217Ax9caYFVQgoBugogjKMcr8xY8x7",
  "key29": "8HWQFohbA1zBA1K7WgU4rAJZ7Kcfw5Vxmh9fbbq8HUTzvXUMHyc6wm8jNA2qymJzmqiQ53a63dfiXy3hbLTr53t",
  "key30": "25NnTWtwDcEDDkeMF895L3BsNqzd7Gs6zohMnywNH8AKErLQKpMyLgxYtC4EC1JFtTMtDHhR2HwTNnKqagGCQRP1",
  "key31": "JwRTDC7UgRZSdRAedaiMZV9n6bEzP6RFK8HspCtGZshsL6QiP3nSBd2TNMSQQAUN36FBXm93rdqttPNs12CwMzP"
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
