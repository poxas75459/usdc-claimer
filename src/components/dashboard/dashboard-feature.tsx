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
    "B3Ns7qBwvDJ6P9vDWMTuCcMHqEHh2jMGzQRjbJsPB1iLtjhfjJGreEcN7YVY3fNCtnXgmHxSUYK51EVo5Xbvanu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rtSAxNsce1uipyt5Aj6S9QeShgGazE6cuyqYMabMSXnubQXVqyAaKvcV2E3AUi6MiJuW2LbwaAp9kksuGx2XtE",
  "key1": "29x4zyp9StBa6cseT6qGQLw7mJ6Kr16w3xTZ9MF6exx6r6M1cnzbmqrUafhu363xrQSprMzWKauVLC5yR5sWA7o7",
  "key2": "5X2bdsGjTHfkgjKALkWio6gZUBCMNB2Tw65by1wGbBRH2LQMFkg3M9Y8sQbaiJeQqeWPHeHVw5rjzTw2kihM6eo8",
  "key3": "9o3ZyrgQ3JzzEKRUCpPTpfAdnaJhmyuT5ciJYXHgciS9Aga8zar2xQVxwjhFumycJtuHFCTcAJcrmuBwW2e4nsj",
  "key4": "27xjG2mgpraPbjd34gwNe67ioVPV2Mz5m3Wmp8fEVyd2Ui8Z1bmQMS1HSKx1ptURDYi61gCvTEJ9pquuxAfPrPE4",
  "key5": "4vWG4AeUytcddn95H2JD5dtuU7dpaYTPS4HwS8yaJpSh1GEWc9XMHB7BBGuLrsYT1hPwFt4xcDpPWMsS7Tz8JZPJ",
  "key6": "4bowY5sdcBTFXNoj3zCanBAf8Gb8okLNugXn39hqU43vrhbJs6MQ1dKqytoGGR9FgJgxvnc6Hb8XDWABx8h1ne4d",
  "key7": "2kazLHc1ehebwgD44otRwQ1bXoKF4AzZ2qVJqkqpHHVZzZ71J35rMDAWuK8qk1sG4rEPqXi9PTjRt2NhADH9CFFx",
  "key8": "4emWo96YefnoAQTLSVhM5dBud87RRkMukhafPKPFx6h9Bp1djaEgFGTqyu4FoNPb9qtvXzynZBHZeBVdwmNxwomq",
  "key9": "RF8Ewyacjb8S3ddmJgyitjJESfh1PP2VPxkx4ogesEfTGYVB1zqAnpNtRrPCa3tQhhCGS1FP7AgqoabMzsWtF3F",
  "key10": "3Kqpzq9smZcAuvRLirZWLYwpgzRYyZkDTaXYCwTAStJVjys1gM9GQNBJ9VjPo7u6PSrQrNDHDmTKW9hHSdiLWtfv",
  "key11": "3K22xrmGWCDutj4A1C8tBXEoQuRZBFpTPFkiEMKmxLpc2ZHFboCCSPGoEpGYrQcZTFDR24vJgfP3mBt7SSD5Cb4s",
  "key12": "39jTncT3vAbaUktxj6PHpoeGLNftiQXtNkJXHfVruMxLwhWBkCDLN1cfkmEwEyxH1RNVw1rnP5aE5Gvbcs9ESUob",
  "key13": "5Au5rV6WRYoXyqzjWUbT5kzuXzu7fnKKaZc6S7Xn8CfpNZQ4eUmay2MXoK4VojShiVeuTfsWrjd6iEYSWLxb6EdW",
  "key14": "21GBLSH3gFU2P3evU4wKgjzCcmMsdxK6MBbbP8AEmNGCk4GFgPMQYZzVeF8LAM9ohxuytiCPmQLztRRGP2XDimXP",
  "key15": "22jXboxhMWSBa43P8wuXSLe6MwtthNxCvfFsL3Lpsh5GP6jGKMbH7z8o9smdE2g29o2udmZzhkBxgGfLBP7QFKgb",
  "key16": "4fEYsyCw8Useawbp4AeYWz1RZKsBWCMtkgxYu5hxc5bDpTN9o89MqA1W23PA7Q2T3RMd6SsDPjfaYJw1CTV6Ee6f",
  "key17": "d2z1xb2qq96CY6xnExiRsc26ZhaKidWQrSEtS3JgACdx9G3eFeG4bg8JiUABQqeMRM79Mr6uv7PKb8wwxLKTQt6",
  "key18": "2QYx8S1uJU6v8Kez59YDs2WTbdYxCiDtFTmYed8AmQeZKLWvJSv9UJFhYkrRLU2bbRygXiCMs1vnE3rMiriEMRtk",
  "key19": "4LfeCxcrb29cTzrswPzh1A2jeZwHuCoaKeJfWbDm2womKx9FpMoodVVbCf19W4xRXpCKJDgycpe5tFqJNXQt2Viy",
  "key20": "3tZQ4DstDrRLJJdHEAKsmTXCJqU99PZfRChUZ98toADsGtGrUPGYcVtp6bmTEWrx9gLiie1MgBaQ1kSZZACE3gCL",
  "key21": "3TSL5JEmycjToSmh8XXXsWh88LFJQGaMS1o5rvqQLc3ksM2DWuCwCwwuUUZ7QRdzwon9TRBGbFwdfZG2zYs9q1v4",
  "key22": "2kQSh1WkkX19696mY4HK9SgxkB6JeHCmp3yxAZixSH8WLwVc9rp9wUr4DzGBsNKThEJWDLqBrRVQt8xMF5Wm3x1e",
  "key23": "5ho3JU8gYbLk4ifHp9evDfJg7k6QG31WLYqCSUCFGZ3Ab3rVGyxJp1vxDGxDoerCN5YBLrgkiG2hZ4RztBHQgHhm",
  "key24": "5T5xwYHtc9Kp8fKYdDNTMJ6g6cMX5GRBaJdeMFPua59Ydgthj2HvKNK1qK3XS2Ny5e7jnYxTE5xKq4C1oH9jxRJm",
  "key25": "2ibRaayckhT5v2HnQmA5tM2sAdsH9qGjG1jwjXWSCud58oxeRc6MzDSa5VVwmqnNgVAr6MWU2RxR6HhNAswDpi3B",
  "key26": "65gJU8kJw9CN9BGBgAezhCQAQxmEpH2SDTpodfupr3DXvUm85XLTk3RR4D8CBk1v4LmEnY5JkTEsAaQNKisHk7re",
  "key27": "SDPZzbfjyvxQoH8zBqCzhWDfY752pZupw4Ev8iCnwqWNgvEQir8mULQgwJjoiq8ZvnLos1kpgZuRm5LgTnBXHRj",
  "key28": "3fXwtXcS4W83gNRTBRw7XhPnwcujiFZmPwJc2CyeUVWzmUFGEtrLB1uLJuLMJ2xY1Nygfy6wxrJWvDXKjnt6S3Nn",
  "key29": "3kj3BmuRMixigqzvS824U48BFepjByRzRRWYQ4CGeG7LKbLfS6JVvVJ7g7BLY6oH9BsiA7j9dX5R5k8VPXWXsjcn",
  "key30": "254o61oYoB8PhTuRvVeFJrqK7QwjpmrSRVkFyX17KEGpsJ2idUHTchBZUnTkjBtmf4qeYj1wUst6rfCvY7nLnQY3",
  "key31": "5kxCqr9LgwGycU1PNRzMJZkjcC5Q5oSEWPE9yEEsAQMZ7AWyj4XZHFKRRfXt8H68AAjhVnh1Af7kEAxzDhVK8WXR",
  "key32": "3dpPb9Rt7qvZNWKeGNbJgdQvcjVMLxUERJhb3dmK2rSmeoMpggH7gFjhX84kjqMWgToUyBm2GuYdC2B68745rLCz",
  "key33": "RgRsS3rpvufrKgYukpnL5NTB7npCoJtunNuAgL7LDqkR2pHppUr3oA9derrvwrQftveF8tGxJ573794bzr2dpDs",
  "key34": "27nDRbNYC1QPA4XKSvrsxG6NQHb4uGizneZWgqhJYG46Sgjcjx8RZ8rkwBo3zp8a6GyMtUZUhiDW6c2cw2kkvXE5",
  "key35": "2NHbLbXiNFvoHwpjKZR11DQbqm4ju4nTH4bhucy9cxE5ESPk65o58kJgMveCVmKWxhT3MCTeR5MFYutMWvcwPm5r",
  "key36": "4wTwaVtApCgawCvhwaaDCDyNcu23Yw95H1RDPBQbeodHNZSRVptRFpAE9TqpE2Xn8eRsUeZbTmYq7sqeUXBHPQD",
  "key37": "2EUHaDGMJhT2AXbvVxKZoQqyrjLS4R6KEz7qLMw3WpZcd4mj4P21cbUHN48SM4qFyskVNkNtYMkK7P7jCihpNtvb",
  "key38": "58RQhuGt1dFKQg3PwricYPvRnDvsH5o6qjptc2MGFrc4zVjoGacZK3JUBApL4godPwoy1BgoeNTVMGWX9Wx4Zik9",
  "key39": "2si73qET6fZYDK89NEemexQRuZpiYawL1yAhMNdFFrjNVALtxVaLeMrqKzWuk5WjPyUbXsR4F6QF8LKBu9WiCWrc",
  "key40": "2gKpTnuud1P6gXUuLFpy3jEp2AQTm2M4fH8fg2hA7zAKMDMnXhxNjfEVLgbcWk5tttcXPJityXrM75p2XN5m6GbP",
  "key41": "3oQeqy1nMJK5CPgSggpGny6Y9Ak3datEjs59in6kKJ3Md7pXm9G9mtbTwZJQUTJm4njBfn9iDbrPCy5A43xZdFh6",
  "key42": "4V1HhJQRBHNNxpQcbvvzGBV3odsLbm4zrd6rHzgABjf8XNYvCGs2XKTw69wjMzcPujYGi9s17ZjXM9P4pqP8xh1V",
  "key43": "3FJvk7qXD8E61myQLbZobKc1FxbpdmjH92kaB1AfRqDSwQMiKUwezT3YqM9EtHeyBQXLWoAJ8F6J4b3osGLYQg8K",
  "key44": "491CE2pV879FjkpcVgUuNy5WHbpdHqzupjD9dTyefW9tfkaRi5eC3Kma4zTVqB8kdYxphuFQWsEoMsNupDQR9E4h",
  "key45": "3B2JuFV1d8hopnMUfzM546cdVqQ8deS4pb6f3akVxEtpHB74CCKnSRzDjjXPahMsX44ZQnj24a7nKYDikfxPK8JZ"
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
