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
    "5u31DHAHxKKgHTqTZUDymvs9jWGXHeBL4ja3JCaUW31AgSdZ6A6iioi7q5TMz2xhKwuWiwVQmH2zXFw41Q5kkYto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ernqzXMJ4YK4DZoLEGacYMHqK5XMaaXw5zeZMrjhkPQVHcnswBa5a26c8rP2C6csL8Xv8S8xcXfaUtHXjjAgzYu",
  "key1": "52UHSHRhRW58Mtsy7p7VCLnwY2jbMGHDWB6FtFatgyQ6YjhwTkB4pBwAM6LRsvrY8vWbZTRvYtr6trwduXLhrhbv",
  "key2": "2CwtVz9L8BVwa9L2Eh5gCwwbx48QyBTqKRvSg8dv5MUEy3pK8iDp96G2hwFz4ePFX9bzt6u31Kx4uEQqKiaA8pau",
  "key3": "59Q1J9ukuq4Fh8k9gEiuYHCJQnR8fzjG3GxhA2mLkMtxufdkjpDWg2YdsP5YvNNdZy2DfroBWsUDLaCgQHR4gUFx",
  "key4": "2Jmr5CaCgvwTk6LYuBKwJudW3sLdkyBGxPVPaGCgpn846QPLzXLvBmAUCmRTZ3TUqKhqtsPmkgFEmwYBcPALHErb",
  "key5": "4dwVgz6B4uTCdVjGfxGSFXvnzo68A9cQx2t4JMGo7fCne9h5SJLZWKF9iN37ECqc8Hq3Ghv9fzub1EkjZtkwViiE",
  "key6": "nMz2ij1hPZMXmrzaaM55Gh669Lc56bTAcrg9VKUC2TwBRn16wJREoMLJC4Q42TF9T77L2TSLt6nEH1rmqiUevyb",
  "key7": "3o4YiC93HYnmYnP4H9gPyiSGPQYwyv5fcAMr2r8avawFVqRzc2RNq18CiRABknGnTdFV6UhsW4hAKT6EMRsULpq",
  "key8": "2HR4rbu4AdzQgPtYhuiaXXW7BSLGRocWdp1VMeUZrobTLvvorwykYYhW6gZ5YXno9cmK4VasivXW52bCJWNCejif",
  "key9": "3mR2CDW8bxo9E8EjDQKwPfQ8uze5NmRwwrtQwrfEYHkS9Rjdnhy8YwqxjxtUs5kPfrvUinbuf54GGUCz9W3F7qME",
  "key10": "2Ai27naZDR1w3V3Ytqt8AQ6j18XutBKWSXNzAmTkYDNXdg7MJ4cdZeJM7iufDga8uR5mRvTKAfvfSWJk9UWQghCh",
  "key11": "St98T9aszkAH8nXKVLTLspE1vnau5U57AfaAune9cU91kUeLBThMPL1KhAq2KLyFij164EKmi9QaVtWeLUYVBLL",
  "key12": "5yfnTbz4pEVVcUcj7f9E3TbKZJN6cBNxV63TEKy5CuzNYyNvtFaQSXGu5uvVy1DpTg9evkx8WJmG7fxPJ9K9ng33",
  "key13": "5hVQqecGPKDEaKd7q6tC56srwEQhUgeSaP7kR7pKfsi9JHxtvFcikkoUZiAbd65VK7J2JP7CGLdm8JEQSaEdUNtZ",
  "key14": "58CvzMizHwRyqkGcQJdvoTvon3W4bxS9yKAu2WXtbfbBLYwMbBy4p9yaGzuCfbCbN1eLUjA3Rcnktj6BoqCjgAyY",
  "key15": "3QedQdUMVJmZvLbPfa3HdpsXx43VTUrYkYEtmEWxHuJBHkpNbPUkMbhxpfcBMePGTURfu5EfvR4LbwaVmoCUnhPt",
  "key16": "2vUJmc7UAyDiXtadRvhJr78BUimPDvtaoyY1GFsnanqMDqVVd2bdiHv9zqaTRXpivShsNMFzBYwto1VgKfcB8CD3",
  "key17": "5LZxwwWPYGYTS9jjLL4fi1Wy16aYqHApa4cnWbxDS9SWbqPq8QtQAhV5HuJEPYVkBE9HcWTSwtqpD35PE9QQ9GUq",
  "key18": "FvVNo1R1xiXgny1T9GmxAW5Q4XNCv3spkqTEN8HbPps4H98gqKS4T7xhwz3Am1jYu7rWPrEM6M47aWyw3gM59of",
  "key19": "MceFf1pWN2A9eqGnAa4EyFY8m9EUcosf5SFzGmcekoqLiSyQp5iixTmQXbDBvYhcqqG2GDQP9h4syosLi7Lw48G",
  "key20": "2T8GWBFzMnHHPjFHAMLZcLGoJYVU6Wvzt5RxKaDUdrYY4JconXTMxchgRnjJBPTTJAfRDZiutM2n8V7HkiunSWcM",
  "key21": "4Zn2ruXaYi6nhJuESabz7TXJtgWEsFUPYTzQHP95dgeiaDNpPZQDmueaU1QCU9nxKaKGZ2sasdGMzBbPeGrcbx9z",
  "key22": "48Ms2Zefvn9UqLyjQzws38ZU5Bv44755RB1CJrPmpmGoMaoP6dtGD56aJi2vPTsBo3CfWB4QkA34KjXAS3FCACdo",
  "key23": "2f2d6FsXbGZpst3d4imrJcGRiex43xgESS13SBqMzktxid7uZ3EenBSPC8DC1MNCxu1suknJAipnDaQpDafRYKz6",
  "key24": "SLkzU1RGj1NroSs3rNbjeAYSat1kG98ULwSTXY1361Tzcraqitv1NAyWykuHxeidM8vU9rXvjndbFM46TprQyZK",
  "key25": "29AQR8wiD2N4Z1c2a2BYqCpw4hVYX8M7HSwd5oXE5uHcSA4hNfLZREMAn5brW9apd3mGzSuSEtoSEakFUj5Wc6KG",
  "key26": "3S6wH11vK6UTTS7ZXTSyazfyBtLB7XbVSDDKHrRpafXkrppextYhNWqrCceLmCDUjowMASw4HENWrK2Ygvm3kzxt",
  "key27": "5ZqaTsivBrRX1qNSdhNpsfkRmNgZ8RpErezjiNGPekehJAKgNXgbfHMBtDcSpWMX3QaUX7322BdnoG5DsEAvB15E",
  "key28": "4aRTRZrPfT28BHuszqBwtvKPPKmdjRAvmcefz71yUacgfVrNVa345RUecXZ6UYkj1BFY19Bun1hiyoiPxjdw8c4u",
  "key29": "5E3x54yS3PtQSWvAT44kFBcANdpnz8RyMSaRr41UfuBnTSkR8GYfusPo8Es19qHr6987f3wnGeHoDy1uvvfMsFPj",
  "key30": "mjezVq7cNqger3hYj4wvCtrTTiT75NXM7tArwJvJfDeMgS1VaqJAKBmjXBxpEdaoT4QkHPPfZ7rfrSvEoz42ruz",
  "key31": "5vSg1FvhTJNWvXAhV9Z2cSb7jH6AMFp3wm1sFUvKmPT9MzHYAEWvDDwBv13cbVx5dA5uqmmjPrQW6myk148gW9dC",
  "key32": "2oJUtGy4JchvDUBp6pBg14QKdxDVtd2suQee2P2m5e4JzjkQ3aE9YT9KTG8qanbfRtAsH3nY47LD6wz8MskG4huc",
  "key33": "djE7pp2ERmqWeGENyiuHRFSwcz9tCWCKJFr3HTHQHwaqzXyfL4uWDW5hSbUU5H8JUUyJsFgJQ2gARGFzcYTaVzA",
  "key34": "mC9kmcWaC3KC2w1CZWVusPWmDRbcr7yAL3hZ441hNYcL6oHtuT2rNkfNrt3WogyoEUBDQZWp1gNkbc5UtRSMWky",
  "key35": "4XQG5vWPoTncg55uGP5fr1VvSHCSWQecJZwY3Qt6pEMYku9XJezMb5M7jfRv2iYg2PApC8CLUrhRnBA38TrpnDuH",
  "key36": "42g51LGmpNYafFECbYCVpjaskjfJj2W1KwiLKfswFUjt8PaRiwZSvJqdcj9PPRmEmdJHwvpmbZ3ZFidByoEzimdo"
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
