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
    "UXe5ynEDsdwyrey2MhigZndL3hpJSXG6wYNzsWHd9R81HqpcopmmJPU4CQS3uZtnEmjvtkkBYtN2gVKVFP2bmKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMDEyRe46ncEz71xEtzwJtoBsXgGh6TcK5mKog8bPCXPGq8PCYfRN7cmdipvGkDK5mXNhGR971vdUBKTgvfUH3L",
  "key1": "Cc3yHoy9ndnpeF9sAa6LpuByjsgDvXLgfterhg4xjcY8aswVjPrDa42YtvMZ8qtGroTNtF4VworyMwwDnJoyxj3",
  "key2": "5dFZh2XuAvjxHvT1BHJT1nhK9rBkUFhU9XHDeYmnpmty4Q2ozpPQi4jErD6ix5pCSCLex6UXwxPrE8m642WYdXAF",
  "key3": "3nF9VNjFVqynqBTufBYP19HQycuR37szkDxFBninsvDu9u5y1qs15HB4b6zACJCuYZTRTwoeBBcHBwHPkGuLr1T9",
  "key4": "5bNEEGJnhHAGcisc66cTz94BapSHE5nA6mnr7fbPTh2LBi1WrqLLrDna9GJrhxNMvjZfpoR9q3qxVTMbiToa6LQ9",
  "key5": "2Hn8XZCzhB2sJzrAXiQ8wcscQW5GctKmbRp8cgN7sp3cmpfJRHvQyEE18rbGcwqW4TRQNRuCJuYwHrxEhCtVKSJQ",
  "key6": "4WYjpS9cp4LMCvgE58LBnfEAmQi2QdzqoYryRgP2nEzQYNNdaRxVbAsVdcqe1i79Bh8ZxkiWa7NK7h374Kh59uqw",
  "key7": "5dxg8bQyQ8aiUweoRrL8RrYoHXu37LC9xg4FxfnEVnbL6J37Wm1bfQJFb9bXyXp53E7ETyxym3PmEJar2tqBi9j9",
  "key8": "2F6Guw8u2AEhkahtFtnfD8hNaE2ExMmFE7iKX4UxRHsu5mKGdcVwXjvk9QpLdZ1FoBCYMWf2k26KB63P9iCsoEiB",
  "key9": "QzWuU4f4CW5d72Rzy8azz7UWdYGNSs4xUiaWKaWG2eAN9koKMqDSuZ12xKNKDEovHvnxtWYrFU59Rg59j8UtPgt",
  "key10": "2eBxQsDAfkTm6XorTYpVdP45uFCizromkiYaw35vyRmhtoGrp8xMgVZR6L8HdaafZXsJtaQzicES2CzVHN2pQciF",
  "key11": "2gUw3WnB5faLiMjXYKwKp8nr7TkrvdbY8XpXY85jmT1oJPme9vspWJJPJocWvtUfEkvJ84NwxkQKUuAT2iejBVGB",
  "key12": "4YRY23LCoziruT5HMrwh5sPAgC3MqYkAVkEDa8Qvd4LqGKxWDYCPwWiCZDvxUuMYZuVicYSLz9KXkQp4Bj49E1ub",
  "key13": "5zpmPZ4rNofqUTe1ynt4dP6UdB1cx2z298VjuRNDxnsWLJBbZ2rAQrEqTWZC1387WUvJiEFYLEF8ryUUv8NAJpvM",
  "key14": "2VAK6z7rjjVfp24pk9ZCUgdFB6h5pgzQnP2WmdNTtcQdGi4vpj4ETiDhmBu1sjzx72ZNs5Pn1JH9DvSa7ASV9uzR",
  "key15": "4YGq3qV9YdqPV7HGaAdq2iSua9WHCKbB1aktfii3TtMhxw6NKcx8sXDwwMKDSHTUsPgXjLi4smrYZ3WJN6SEYgdm",
  "key16": "3ZMBRjSK2KzHsEeFVnpTjDTxmagpL79Qpho4EVsNaYJg7PcPTr7wTsXrsMx6pcBPnSsfTuqxpW11mEkyjttarCv1",
  "key17": "3TN5mRsBUeZUuEWSjZLtDBpd8LAovHwKNXQfDqeHYt452S731McTTw5mvm1L58G95gAkUEgSzfBXLUZcsfkU7F6D",
  "key18": "2ASZrnPXpxh4vDttTsqUqBXeB6FEeQSs5MsVWmCT9tFDDgSFKSeTE6VogQgjmahU3pjuj3UqZ8MZMTJVMdVGqsS5",
  "key19": "wgpjEHDdqDNcWDNBG4H68vvx8sqAStYfV4ME3cHGabgmzX1AKyNUk3KFtJyV5eBMgreSGGUoMPxGFGDQTJE9ZrB",
  "key20": "3UpdqEJdpNkje9rnCZxKmbxQkGGDZ2BmXwXtEY6h15pD9G7Kv6YTndNJRrZrg934huWEbc9BtFpMpshVr2NHxcZB",
  "key21": "3BYttAU5LHix5GLyevC9K8WT3gS3XBswZboS9A1ctwN2QMDESd9nusevTwoyDKXPv2VWZm4P2zVZHUW6myRxsitZ",
  "key22": "4z2Qsk4pNRVVp3kvTJ7E2DLHZYD6Nz1f1WdTNUDvQRZgwPimTNwT6CpoJuJraNb1qRTgXhum6ysdMf66jDGtf5yK",
  "key23": "5TU2zkg3jssg8pyzkpqJrWibKoCfM4uKR2JxxLgxdtwjmthbrj3uEbVSBJCgzoJNSX16nUYAtuRAEokyQePnSUJV",
  "key24": "2Lnb1LcN9LrsaAet1irbmZpSf4hht1PD3kEgoGfuU9FycV6SFzPx6vd2gAJpeZivDsk8nGqU7Mofq1GUUqNvTzDi",
  "key25": "4PCb5qq4vaPxWLGGHjToS5KKv2edThF5P7j3B7GDeDus6gYNH4Wm1PtK1Zga2uUd3eJoNhLcp5CcrC6sPx5e2ZAX",
  "key26": "5B7msPuE1BwgHJyhoSNoHe6FWfDy5f36KQsaVqqxQP5wUHtPUajrK9sHedRV37CowoGgBS5SK4C3XEpijR1DKNHg",
  "key27": "sCoEFuiJPKAu4Ctoq6t23Z6U7ci6fan8NEHZtvMGoTXhqVPE3NmgdNa779UjE74upuS5x49PsaAXT2UcnqpA3Hq",
  "key28": "7Yv7dgTUURTPoty8xJVyZtgiaEgRCKtgEGWEJYRH9e7TsyCSC362d1b6Eo87hZJ44rvseKssyVbNU3kY8nmDaL3",
  "key29": "3EFRrqdxpqp5SSX4y9NegfFyjJK6MDeykBw1SrjuTNAc3xNqYaix9PxEYQkcJGRyXVDzQ2TjUGpkpqJehgQz8kN3",
  "key30": "4xausYwBgJWy3Pdj6bTzh4U8My8qjriW3NG1JijUPGAtuPcbnRf1JS19iMPcbFUTRRtHVQsxNXqSNkpM1ftPUCiU",
  "key31": "2z2rcwPnrepmpYGCBCirCgZCup3Xp32rfDd4HCGMYj4F4rMQxumNzk9vmuZNnZvET3qPGRTqbiyS6qTnb3NEHswA",
  "key32": "49eHQBLtXu9vDWNzZtNrk7iVYcQ7ewHnGiLrvHJ6Bv8N5oEwaV4hwwttuYLvDVwNt6X3CjFYey5xU9ZNR9qdShc2",
  "key33": "3vRbPDY5RK9sf1mfpekib1L4PFfZ7noEGRjENAAfqrWbK2uy6XLHVL9P8m5aiY3RBPFfa93rApWFrXqj2agXUKdk",
  "key34": "3N5Cwa195JJUMJWvzK6MUx8Rv1U77vj44eXyTcrBBve3zziaK9pTWp9b9SHV6AwA15T5sUBpem24Sarc5J7PjcNT",
  "key35": "hKDm7QcPx3VLTKfx8jynCkSgvB2hTCeSE78W9nkRKtH4CW8rfCddAaLFMqmHtnHJP4ju9obyEvVyDhmNnBzeYc9",
  "key36": "3yCrWvUh4fyWNCFMcvbcii7gRFt6qFuN7onXxJpCyDncAC8DkLCK55WVqJFJ6VPuHiVEdwUBF2iYCHL7iXBkh2GM",
  "key37": "55iUEwygsNqZXJDtPBqogcuzn3h4TEhmzWpPr1a4GGp7LfwtPxDNS4gbhmf2pwvfPt7goZM7hGWBa8TrvKswhHuT",
  "key38": "5Jsk2RtwWRfh5brY9cf14RARs5S775hQbwi8UzyomDYeGQGdRdZjwsSGvLnL7rEqHHZhGihVk5yf8nXTbVVwSQSk",
  "key39": "61zfY5EsHHyNHMmhNEEd6BZHRTJ1uTGbcDzDA2etmAU4MHcfmonUue9wPiVwFaFcv8r3ceSaxG86bjzx3prRtWYb",
  "key40": "42A1Fk4wRzYBzTbPJbVeJkKuEF2fFVpdUu5RsRWtd6FDca2PGKEmr2JiSZUCQ41PSKzfhcEGh1WcYZAHQc6gaMRW",
  "key41": "3JksRcDPKqn9tNpSn54kK5XVq1qrrSHJiu7JwTjBnFMLqd7YzS2KY2aUUTczBoutGYHp3vVjxWX6N6W1TodrX6KX",
  "key42": "3hwCqGYFAzNEqmZFs7GQKJha2QoZfGNLEknZzM7Lqky52QNqZzfUj41iou5VEDHk5RRHaiABTUQVdXNfny7MSP2c",
  "key43": "5DxATiPga1dmwNnPBS5phzY47SArvW2u6WvTSpqcsrizcfoBJuDM3KsciwqbLSP1chXjVSAQby9sfdm5Ly3My3PK"
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
