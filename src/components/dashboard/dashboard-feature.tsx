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
    "22d74eqrbk4v6HJtiV65N5ucVuSccR8zAcePdnwPhCggzhWS1sZ6apZ3UTJAHjyHxjx2muQ7TGbNczP2yvWeTMKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgRj3K1pUSS8CZsQaycoqFznfGSf3NMeA6ckJfxxGrVR9mECZggtF1nsvzBHHY2GEV1houQBV4WTvVDd2wLThpX",
  "key1": "4MASqJKYUdd7VzSAQcacSFUNs5cyzqYwPrS5viELZ6PPZtK47tGsYaBXzxuCWjfZ4gGtfMhS7yuychMVRhbWPzpG",
  "key2": "5a27644XCKNVRQto7eDbSswhWV5auvA3qg8o8xdE2qcLBriY1PXJ5Kcr5Ezt1pEv3TgMofmyWv1jMK9GbyZ7DMXN",
  "key3": "ugBHdVaKhkcmCTRrhs5TfWpMmTMMarVdSAP8Vc6LB1V2rbjPa7sHuLFAoCC4JZKxqsFUa1ZrGzhnnzbrRSQoRZy",
  "key4": "4zb8kS3eDoZQZqSdjkwz4vLM2nu13tthdQ1M4D6de2XAXKzxeTZgZ4McDFMTNRcXkX2AJJaPfALtwfcXk5Mef4uq",
  "key5": "5ZvMiMMdCDzYiQHKYBsvJUXvSeoFojyWrUCogJgmUGLMf4ua2Sav38fD2SxphjRr4DBuP9cgxcHKYhykH6NyRJBn",
  "key6": "56LMLU79AwuYmbMHyXpQZsEp9AB7xy6VngRzwhxrn88nykgZGikCJ6NrX6ApaVRXCgHX8c1xAS5Ae37ryZJhbfz8",
  "key7": "3gzDxAHA2xYvQTtfRQTiWYf6VMw5MRLrarqVZb6jPUNfQi4ZQE9soJAWCn8LeKQsqrvQpDpWV5NNSdGkVncdwwnn",
  "key8": "JkuHqxE3oyeAQurVU3CUX79EzdxVJWaaStzYBVSiSYuuTe1Wq4CfCkCWFigTXz4xZTTnitcDvSf1udx8Wmmd9WZ",
  "key9": "3BYvSYBLpLKQ2aB4VGwB8uTBwxjiiACFU7FKhWQKc3WxAmFsbUZKWujJ6xVJtNeCHbdwjL8WHL1zQJ81j71jJfVQ",
  "key10": "2Ht4qSJgeunu9ew8v3gmwf8ggx5jBWGs3qS89dVhf8jkegquEYWM3Wa75KLWg8JzArKZtRjDTUvDY4X7drtTBbfK",
  "key11": "4s3Y5vLrYMaDxuSTYggEbT2ACTBPKxhs29QVeurnTGAqpiyzJb9V2KqYyEfPSv7C3BN1SUVffc3SVBbTN7uouvx",
  "key12": "5VNbFqKycZiFrTkg4FbB1wDGsrLaoMRCdxvRapq486xyXZyfzbEPNL2WNVqjw9HhcXnvJH68Zb1thx3SkXQR2Fiu",
  "key13": "2mcAz8yPt8TfZLYvY1GjuEAqMuEcMsEXjVdYqddoK1fXfwhBdfSMA7pF1AcfVdiJzUrKzHov5v2tirwBFt1TQ9Rq",
  "key14": "3zrRiJMi3GNzUEUa8AQ4rtzw7BERmdRUMGYcSFmh7UDNthmxjyc3nfCwctNK52Bjn5hkXMjEjGe4TnHqcZDTLPmc",
  "key15": "H8vuMimTVMnsPqToehfJ4pKc5igLuJZy29E2tcuRTjNNex2Hkno7dFTVt3qnM9Jfz5E9CHiZu4j37nbB9AkgbMv",
  "key16": "4HFehSkaHk9EcBh4N11W19VuWKCVSMmh5PpsXzvr8gErBTKJipg3qZd3pTi7nZSZCLyrogjWmr5U3zf81i2hLYAu",
  "key17": "5dikQKajmJW5bsypmvk6pk44nNBWsrmwjoWFXBXqbRDMQbqD4PiHo8BenrGRPZSNYx2DjWe3EkRkHmUs8ExoLSeX",
  "key18": "3XfAzbjXCGR6aF46XZkyS2B6Ey4EiiXQBhaQMBu7HVomBszDZ3ZmZSNUN42xpm27bKh5Uw12q1kiLtsqzHMUHuyY",
  "key19": "5kLDWHdq92j4ZMjUGW1ySwc6bdg6p7ojJWF2hF2q647XsFpZwrHiqpf33dFVVsALXUK7kMjW7WAXG9acDuU4wpAW",
  "key20": "2oMUiHCAdfnpdNUkGhVEmbMSzgjsriYDxkakRp8DrgzbqtgUMvg8wmjJe9NbJQi1BQXA2eHa4nnqtCAcE8w1nG8V",
  "key21": "5ETExdkZLPUocVLe3BCZnnkgN1JawggAVBDvEtRZ5Czxn22JbgcvavN8ckK3qnLdb8CnKd74GFLrvGEG6A7VE1zU",
  "key22": "CQ8VLnMshaR1TdByMCSpGLftkmnCH2YCRLe9wn9g3nEswtPnwvdZ1Aqru4HXANBc7A1Stpg4J77uoN2kTVrqQQ7",
  "key23": "3XhjHn5aPtcPyZuDCd4XRQETrgRKcEoNo45S5h3u1K5vqFtn13LgefxAeHm1JERporab6Cdf8yrumZQLLtLRW7uq",
  "key24": "2hDqr2aKAZtVus1U5duiZQQg16VZyLSeAFHrnVaxyZVPHt5g8gGaVApBsC9hMMrut7HxovhhxRLG4G4DxQc7DoBg",
  "key25": "oXBUPVJ1upChvyqLPyhKcrwWgrauC5sRd3EAK7Dxz1aS8QDxWSr7Vj6AQCYZ8VHUr7hSFo36YtZHke5Kaoh6EWx",
  "key26": "oivhqWF6nWdhoHpkscrZxEwnAHSQpvsGBKcHmDcUiiW5E1q1bRdbmiT2hkgttvX4331KADbj6gSioKUEhQaXTDv",
  "key27": "49T8HbnhNibhiptM9Hi3GguYvQhS6burNUEbYHiSphkEp264okXnfxnRwncnVps8KwATdhJCUy9N3QMEu5H16Q2e",
  "key28": "3cqsXdAAHQnB437jkN8nNzSzTPQvAfZCpfbh9cW4cKLnGuGZsKTM6AnbMo8CRdWtfH2CrSEYspPHyF6YxgpWXbzh",
  "key29": "5VU89tgYn9JmhGhqzQDxhz13RbYiWih5qP2qwDUHkudi6LHKWqS5faBdczbGrKn54Vk3rHaTYGu7u4bVTcUWKCkE",
  "key30": "218U8vQeD8ego7juxeU8Q3LE1Y8jG6zqCX3BAkjFrQBqpwtvTm4AQVni9T1HDNZhQ4qfmFATFZ1VoYgegd37iSE2",
  "key31": "4yacsLVc67z2rYBUDHTFucfoqPdXkroqWYnfNWZgTN74za2Jbw9s4fhyfqfLTAjsx4mAPWDS93s99Svxwdgkw4mZ",
  "key32": "7xQeCFpFGmGNRW5DYHnyg7Ph31TWs669FdTQhMpVMtVnLcNnFAJFnMFNZmru1am3qQzSxzQLhh7aAaHZAsGFim8",
  "key33": "iNs3yVomKeTG2MmYZacpiJ5St58QRpFMTpHJ1DuRgM5o7yR17khYxn6VrgTYUwHvwWXHtcvMZSWoA86hgWXqR2d",
  "key34": "FJn9hwaRSX21j1gogCcGRi4cbtmQMz6vNmd493kbrxTYQNHJgp3JyVgiVR1m4CCnu3RD16JogGwj13JY6ssDgvx",
  "key35": "4bCysnAzPU4qZjDQeW4oGbPLswML3s5UM1QANj8EmBFYYzSZE2fw72Hfg2P9Pvjug5fDKMW1tT8gcNzt6KqesnYx",
  "key36": "1UQB8YBUB7rwpRxKW5rfraZr6WVmbbijpHB9KUoxc3dPEtzxBh4xoUq1MGw3ZA38eLDLSejUSm8tPT5AJRjPobb",
  "key37": "41XoGBYk8p14g7iMa4ggEKeuXgLpQJNechRGzFeS92vBhi9AebTBCAdkyQ2xvrMcixmH1fMbA5yWhQwqnQdmFYMD",
  "key38": "4Vf3cvECaUAqaqxcTfn37k6aH454dGKJrXAEeMWnEEiDLQ8xG8qiPmagQKJ7ZwxvREEkpZzUk152YqUoW2Z2oUzD",
  "key39": "3BtnSRqT1JwSXcijwNhF3DapUFVsx7PzAuLhbFdWvFgPuNJBNeRZoAXsXpvXYvSy2yb66eZUDv92thqLmnB3pDJd",
  "key40": "49GEai8vyfjAHNNxC4A7tvjUAzb3SUoWCYJ6hJVdj7BQQUA6SeRR4yiGZZ8HuHKMvxha4nBYmTNFSKKVSDyDV7n9"
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
