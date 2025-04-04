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
    "Ht2LrXqj63cRJTK9SLedMFDVvwDsnMtiujaLoJpncVSjwA9e7WMFMj7ig9yHLZx1HyvafAAQEf2pzChdVnpSVLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpUSXPFD7VM7bboFubSPvkG714U7Sa6xur45kLJMQPAZvavb3N81R4MP57Bxk5wBcK9qTKbjfgS7eofTfjodJRR",
  "key1": "dJNXMTgNdMWDFjLoPQzWSDHp285x55GyTob2RtQdtqaUswa4Z8Q1jGdMJUV6UbsVtNM1YSWFgz8XiubQ7eaqPEM",
  "key2": "u8AumocwGXLW78faucyRmdt6PTuEXrnvLTBLHHVAziKwdqjzuWLYq59jxy11XsTXjhkpg1nFu8aiAczbzyXDnNP",
  "key3": "2gZWEWpvBkZ4wVmQwNgEHW4xsuJRgvxtcbPxMFEARMiHsSKzNXz8SrXQ6iZhi6L9ZgyDXCMnbW6tcP2qaQBeckwc",
  "key4": "5xrTc9by1awLrUm8tKcv9Dy1amS1HqyFiyuZ9KDy13PigYsJwNc1bQvQbuioMMZijz7XYg2f5wNfJKp5mHGR1RAa",
  "key5": "JFebUFZ1wDzxNXJQyWFyP5LjfdBvir5gXJdcP19wRJrDUPYPtNDZEPPgL96skmif75chvRiC4qrLJDYUaTf2npo",
  "key6": "3omh6Qbmr9ua68VRC1GJW94PqDrJXWEYFX5XSZbSE6ZnRyKdXnSN8aqYYhV6nnmApNdF1trPUuxH78ovucNXe89Z",
  "key7": "4Ds2fPakVcVsQGhFd4vZg5P8ktb1tLzBg6xCV1eYSRB6aszEFpPQHz8X5YFcBZypaWtSV9GFGV5RvBrjMFAYgTGd",
  "key8": "4e4kxqFq9qVR7aPXBnZqJ1wCzjh3JHCnfTVoTVca54SqhYaFi2DbESqNciJProusmrRqXaDCxvhHZ7AiFe1XaSYm",
  "key9": "3Jb9m1wXM7jGzL6Qzr8k8YNCy3KC9bMpsTq6BhgjYP71ZRi5KzvZ3bKLt9P9QoVRxdzjEK4iczutEN1L7MhKik9K",
  "key10": "45jGhbwC3uFbHkVrjCUZoyma9QhuqXyBrDHfWCenzv6Vq4M6Jvwy8T4KskXTUrxmFQHgFzdq8GyPsPxT5sbMQm6G",
  "key11": "4uLAuHYFmmKz35NvuMmToU29S45UJUNaXNcsHTV6hyXZj1kRX8sF8BVnyJ851oRULC533oQQhJ55pRmv654YopnX",
  "key12": "5BCqMc4BTvcvAnZQqLR53X9GzUEWmq5uihjRuwkZevz16m9g4sJ8qDpZY3s11VoyJomGqMqsNxuvPvTbpQsKHftw",
  "key13": "39N8rFEoJ1xXUuu22EAZFv22R78FD9hxSY5Q8oDHBgBMdC9WqNES9S64kWfrBQfifLFSTMMj8GDn7HKmt1CPTHts",
  "key14": "cBLNP4ahqZ8AQ8oW9kLr92oENRNigCUNtpS5VXX4hthk8SwDj4MHtGp84am7G95V7MWz1Nzy7vGDPTeimfo4zBw",
  "key15": "3L28jNtaYZXBjA1Fe8P5ogLrXUUwD8rD9NupfM37j1DLhZfXmkY7VsacfkGSqnkoJrjsLvqC1gskikXveCdieh5V",
  "key16": "4ccFfdVj1Zug8U3qLnEnvP13u5VGSmBSteCtLmE5eRLEvh16FBM5H9kvQYkgGbQTdWzzDcDg8bLS5jTESYDWofW1",
  "key17": "5q83PoRDXGSyXMiRjobDHUvNT16UEZQbhi6STHw2GpYtggN8qQiJLBYj1a6d9uFh17U6dcUEfVSjTtvTewJe7mzY",
  "key18": "645qahioR4HAEVccrQsKHQaL8N6swxBkaw7WEU5ykwhXAgTrb13z7aam2NxKUG7aV7XwCMDzVeYUFrkMCyHsRf6P",
  "key19": "5PFFVWEEccbb4c9M42mhpWwJHkN5FR6QPsHSQzeYRT2otxRaEH3TcWuELHog5sYJQzRRX8gHFvnK4pkXozqHu3xZ",
  "key20": "BT2vHAEowqQdcSzyt4BfS7UuBVpBLj2VP1CMENSADiAK9gXwdetf9rp31vtFnoDbc1iKreCdUnGhJYkzw6wGVLn",
  "key21": "2thSDoWjmbpDdVESctUvXb3jxBFtRufZvZgjSvuXk31XeRF2xtqCLWbZ8QoKTev3mYWE5XGqrrLbxpFZsMqVmZLQ",
  "key22": "efTpvqDDkjL9MFnK84CvVZM2yFpMYLve6SEUZY2s3EpsQr8CzKtDFAwrBnoZV2CF6Na7uqq5PVtd6tbhPG1ADRs",
  "key23": "2ZgeS8eBH4ncwaMbUvZNprribiHAFekTUyAXFVTikDpbDqQmUc9WHpxfXm6ZiNm8dKLLbcKo6ZwpXFzyUdCgAHxs",
  "key24": "5KmUxyZCf2qkvrRC2EbwpAfyFYzWEoMDFeBhyiE3BQwknNQh3fx4qDCXQEJBGbtbtrxCbCdHukzxDDJUYeqmnKxH",
  "key25": "4didBXsu2xatzYRXiYW2s19NY9niq1ZikgUqcCKzNzscUT2q3Qfxhvuu2Zfv9uUEztHrnimKBeR6QPyaqVw1KUmW",
  "key26": "27TWcCbe9Bpg5rDVJ6MuMqGJspZ5DZuYHTCeb6idEPu792r2e1zjUMNbLXpPXeJecCjYZDcTXmQCbr4SXHvAaGXw",
  "key27": "3mPTJqAa5zQJhLocpXpytfHSCLVNjLstH1zCdDP4Qn1ERsavkcuQ1HzMMwH8ddKd9iuUUoaeUZ4jK8be6RJU25om",
  "key28": "2c3SgPyveAnuhFSoywhYwZLLrWtNUjDuXRJW3cxREoxfPdYoge9bTWWaiaPW5qmWWmmArJMx52iP3BRBf25zHANc",
  "key29": "rXwMAUPZaYhK7kxLxhq88sq2UirgzhJyNFeMMM7jDngU3vBMy5Gmtjrmnt7iyrLzgir78wW4gfH5iEz5kYXkTmK",
  "key30": "3KiBMVHgB6rGN4m17Nnkr5VPKqSgsTpwbes4rKyCgnyZb2u8pQ4Xye184inToXKtCeZcmTwN6jeFUBLbSiZKU9eg",
  "key31": "5Br4ZR4kpZ6Kp11GHjKedYQKKnV2NoLEy18Z62PCkvz1cHJgX4Lefq1syuWT84Vy8WHMbkjiZNZiNHEDedaFpmYu",
  "key32": "Aneo3QkKTTGFtR6mZr7wg9qR6yG9XySnac9XRUuNhoBRrB8qzq3DhWUiXCQnkYuxR7fH35f9CSKtNt3AjWrrbFX",
  "key33": "4E7MRDyeLPqQTkKV3yTuphPtv58Fa6N6r7Zf5G48qs3GsaS4WSGDbnEAGUH3meVaCzcbdJERHRYRhEjL8p5m1U6j",
  "key34": "38hJ9MLzWdNcp9bdWfJuZqAiqXPWQTLY36THCYLFHugfdMZERo5z6hcNckQviXZhRLiwGsiaWPk9T6AxHgucrBaf",
  "key35": "4seWktGLyAvchjSQjmM7RFaL6for6V8wKQAozn9EXh9LQ5hw3saLaAqhdHHc55invtPRbvxxdZ8mYFpdih9aK9ae",
  "key36": "U2KJReFwYVBbrSXgrJgRYwBL6hVKd5BKqftD2EHhoVC7fet3CEm2nyZNqKFMBeXr8wmGqtvCotnK1PXwYqdLuU9",
  "key37": "223RQpTRSAjTMSdB8G4RnpGngoN9gmmNJ1Dqi2KfEGq7dbkjibZdFY6NQ7nRxD3K5auFucWbEGobxkmS8cZKfDqR",
  "key38": "5NRxfgzo5PLEqgbL5Fq28ni2pxG2qTQR4wRujCrzT44U8QqwJipgJSXhV9WH2WxnpN3Ltq7QuSeezSRRjPdfKKQj"
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
