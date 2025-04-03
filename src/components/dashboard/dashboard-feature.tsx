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
    "53HNjVWDzmLf7kvzjB2qCm9pvVnDEdwVpUP28e5rKxdopY5BKyYFzmwxUFFXNd6Mn44wYjnVoaJymCNu21psQGDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmpBTNPzNhiNDREtYwEenJ33mP5NTAcGHM2KZTaEDjDkoBmhGeVHf1T8WeVhwbYW2xdumB5oU6GPGNBDXLcN42i",
  "key1": "46qYkwC9gFTLvFMZrpyUx4Qiv26TBkmZq6jQPH4uXRjTmMFR4cs3WwFdsYjPct3RP4nHQ9DqZDrZzXWW4DNvDfj9",
  "key2": "34cVZMFPTB7VW9wMyrKhiUNq2pwpxsUMSMrr7SufiJGPxc5nJzn7W5kgEALyMSBCeaFQdPMQitS2P8Nj1viLEyBj",
  "key3": "pFZ5PB4YMNaA1sFa7R15msJRNJ4BsGSe5KVuMAnyRhf9REkzxDaDdRnazD1zRWvJQDPTVWJYRBGt883Wt9vj8no",
  "key4": "4rJAq3BKsVG8jGREPxFKa1fvWwr9SQ1CNjW4NneUaC27a8X51ECjiAqHnmB17ziyNLjmaQhDimYLUQFYvLKErrmV",
  "key5": "5MFxi9Va2FxdSpRSbzCEUXAP7HD5g7CM5gXs2FMA37Ewo8tJADWvgkUVfB6VDtXgRDLYndfX6j9gYkmMnTn8YfxP",
  "key6": "2WWdcVvcdwz1AKkkEYsCHi2Twu8ZRztjnysGALtZ7Exkk6a4MvphynzFjpGYdjKwTjAL8iMRd6UN5FaQhncYNxPc",
  "key7": "38MkeyQgoJFVebPGzeRW9xB1CW5JGHWoAhJTBduVQ121554pcVhHhDK9VPayp2ApJ7PdW7U7DfMoeXjWxXQBsf34",
  "key8": "2u8PjeFuDSzLTPsKUogo1Le4FxVHCGdE6pLSCdt15TwPsmb4syDAptPhfrkvFaibLwGhqDUGTmBkbTjoZ95fPqZk",
  "key9": "4KYwkCDUuVcAXGbayuDvkYF3vyk4a6D6JFvuYSioLm2UCGpLg8kHwZtCWmEiERWtQov5WPNvmgdSXad1fLoVM12T",
  "key10": "187c82hy8DrNrqJokX4dCe5UdmVrojqyBBCQSzK7v1zNDxasGAhDYYfTQgXEU525PkGVQSHwjU3W93Rgi9fE6VY",
  "key11": "5eFBdbbW68DRMrpbJBTQFpupAdSRv56u9rVZY1YtzgwuHuvf19nYScZnsyzp6xC7akdw4jyCVo2wupEcFVDYR98h",
  "key12": "yGaYqzwtbk6oo1zLoSPLZFJZ6X81d1Kx7n22ZN5cCPimrErNDddv4WGRHJY8xxBW9BoCi6d2Qt7mujGePcthFXG",
  "key13": "ZcQpyfsKAdTSTfheua3u4WkhbrSqgMzzTkMRc7f3sLTJVsn1jRjHkY1UZuADWM6oofJUVmeekiCzHn9SzEyjQXZ",
  "key14": "2UdzSLv6WmEtBWGjGYvf4dfDiGAo9izc3Wfo64pat3UBc4EZPD9oe4bstpoMGZaMqeokso2MqJr8sq1YT9aPRwYq",
  "key15": "3FqAr2hj8YsGvESJpsW4roc4CoxvHKoCwTcSGJzCyh5JNnaG1eHbWLYxqkCvt6tAn9TtupooNCtntReA9Qb473Ax",
  "key16": "4tjA1d6cuAQigqhJc5NZYChDgMMV8pkFpzfVVXpDHNMu19MzZxwrAUTcbX7aJszcDajiCbEktFQ9b2fax94K9CqN",
  "key17": "5ydE1r8DjPYbNxD1SLJVVdF9eozdj2ctectZ8cqsfLYeXgcEiTaMiMFYzmR8HzHjKw29ZXdBKh8WNpFpeBMauN7p",
  "key18": "2xmZi42hL2ejYQ8cTMz1SoyWWg4vo78nzT9CYpenYFLMEHD7ZgF4pkuepG8eFJbRb63jVDcvQDigKdGGXCvDwWSx",
  "key19": "3HS4FCYwCDRGvmwrmT4nL6G3NryFJnnfAieyrC23fesDXFiFtpNgb1szC8bnqrSUJSWDpjAdqDSPH3D8gaPWevkf",
  "key20": "4yt943MyuhsKeqH2SLGnGdAiZS42zLJcfs1fjYvQXsWsi7PiaiTzn8EQijdk522FAZLyqXSRXrs7e3oKENZSTPDk",
  "key21": "U2hihPPY3NMrDRDmMEFSZXzvM7BZZ6AcnqN9k1SGsxJP6bE1rR6dGZGbT2HsnYTeDQqCSFBJaHLRZpyAP7uBvcB",
  "key22": "4TLh75ka3teqTUzhLJhK9J5MZwUd2QGnJRX6CChwMUbJBxh48KjX7JXiYtvBSn9igssKu7EpeXAr9AWZHFWdmLaY",
  "key23": "b6WwQ2hVyLmayNgwK4YggBuGRbt3qL6JATvthJewrLt2e58S2mGKCRXYnnQEwD3iY4gw2zKEKm6jacbe35tZ86M",
  "key24": "eXXReEQeqMax5U88rUCwSbHUdkxyi97rboahNu6s4boxwJBBERVv6m8HcE3A2Ad72nHLXzbMk81tiF7gKbQpDNN",
  "key25": "3rthCWBHJwgRxSMkngF6G41QMBASsYo1MS4Cf5KGFE4aob5C3zmUxHGgcy9MC9jHejSk3CSdawCdckzbhNzjF6yz",
  "key26": "KHG4FCsJXd612XUgc6aDgv7aoBVYyu1sLjdoVXsTxwGXEpaBwy4qNipG9NcYCPNbekpC2DnAKb4KpTJC3n6NjYz",
  "key27": "2UMJ4RU6UhDKXfkRG9H7xDoeyuDrLgpwJ9J31ycsVooQhBAXKiMGbNyrV3EbwsMsa48nhfepkw7GW9HYGDgpNMs8",
  "key28": "2uPhmdXXGkndYMbiqk8LqE4gpsuKLLuYq1DhVqWqQsdnYsU7ChE2qANZkn63HiALfu6hNrHWss8UPuhj8JTqEroi",
  "key29": "EZyfQXxxvLxr82arqVzvDDV2hd8Cmw8xPd1Fd1bYGRz8EJSrNwVY32STGo7kQ4TcQWFaQ4YwNMvEg4fZPkVg2dt",
  "key30": "EosbPJJi8TC5kJGgXChxH3jJEqgGyrv6QTDjd3HCH1NTPDyVDxfkk3TzmM3vw8KNHCSCgvXMYzYGLNc4EHyr5DD",
  "key31": "3MQNqQ4X5UpK3KzgB5z7WXUn85JvkKViqMmCV1gHKiGzZoWvanbthpjbE73ZE1HevynoxmefSVfPdogGBhbPMTbJ",
  "key32": "2nnvPQAxUFLKbPkUX7YsyqUH8NfAcKDQDESvtHra7g8hqPcnAcBYmGHNE84CqUW4gc2tDFA6732RypJEWqRDWpBz",
  "key33": "26dcBeyM3JpmQUsFXMf5JKvB4BG8z2Ju4MiUWQVhzWDTMmPTF38JvmMkZDHUzJoKffyFmZvco9fDoqYXZpLZAh7W",
  "key34": "2EqbmDT81HL1n8AaJizAACRQNF2peGYaKsP7oeMnf4M9YFd2B1fmkrz4Ugza9VWin5dK5dTHPfLGXxp45wMvEqxZ",
  "key35": "quCBBLn5eabYVC5A2MfFuV25s4p1c57wz6bUp8AHAqoiZdHpdpoXKvjP2RdpP2YMyQMXxdDPErrtX9XosqMzCog",
  "key36": "3cUg9GB6LmWGXA3dyaAoZ6yvkR4kMD4nPtHzSPq8Bs6NsV2Yo2aKnm7fiZweob2WBaydVdC5omY5zur9zRTbRCNY",
  "key37": "3Wt5oM44qgxy1uhZK8k2CV4LVJNdnFhZmR8wFvXV9Xe9exJHVZJ64aPg2tWJ7zefdcALJTiJXXi3HYvSLVCy9CTq",
  "key38": "4TZq37FhJpdCjnFnra1QCM7fa67xc3Kw4RGyBijmGvMioTiNTq7FvAHtkoMv2mM63SaHS1t6Lauo949u3c9TQpWY",
  "key39": "5NRN7hhJNSudXivnU1jtv1C7rvFVoTEz7HdnQMBguE5zSabUALB4Wb8dBFG6cwLgDFrhhyMtStdvE54zsPs72qCT",
  "key40": "Hf9RzYYcePHRyDe9P62JfULMXNia2uFyWPsgH1A8FmDfStAjDNCjAfiLGPRwUiFzp8z1BV6usXRGmGAytwNXbXh",
  "key41": "26gtE4w3vXcBDuc9f27NC5VsN8gw3Ft3u1Y2QTYW9czVuBSa5BNAPTfbPXVcchsLQyorDaLwcScTcKwcx9zx7a38"
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
