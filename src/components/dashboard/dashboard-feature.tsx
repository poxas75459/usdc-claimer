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
    "5atJK41wj3uhcd3Zn3Eh6PqirNhz4sbxsD7zVZsXNsZ8ZZSqhsYXzFKV6j1K21KPxFTvtvGgSmFTsPb9ffwmi2CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55T4LDcYnXxN5sj3L2jaBRyppsuQUDdyyWaB3mhNzv9cUGVDSMNcgTGigpBzWC45jdUbgMVwNEh2Q4cZE3EWA23o",
  "key1": "66vq7zB4xR5inkv8TyfYo2HBKoKntebK2ZHjHhRyFGQyCzK7UDTgRURX9XeztxMwXgJCUkAWBQnYQAQJA4RXw8b2",
  "key2": "47YrKENXdPuKbGhwiLWUW7fFJamHn4KPsgnudG3XRZNDkgUGsS4yVRzmM2vMy4DpR1TweCfGNUiand1P3Fm8JpZa",
  "key3": "3LH6NbGcqg3ThCcFZf17RrdiHPFE6p3vvm2fijm2xPKsWqtztYDJ2FQZzrXfW8S6kUa7v1BFCBzAuc3dkQq1ymLa",
  "key4": "uMTLF3RD2gxEo1aYc7erzLK58FYrg1Q985bTBaWjAHVqmBxyeLRiybSP4krVnpQ7Wg4N8n95BHjvBgVfJJ9r9j1",
  "key5": "3M5zQetz8dRX8BSEszeai3pTYFFvz6rDAdy9zzmAm4MbraxgTK4Bm7MsRzjLMMTtaZM7SJA14G9TbsR315dSyeDt",
  "key6": "qtbpQ1wqhaEesduXHZQTTtW3h1g87H5CWvBPXzmd56v2gVcD1gZvCYTZoTYhCxewgsogvp8K6G158eXQBEr5pAa",
  "key7": "2Nzp8U4vBC3wUWGkdw8ANTgWJwXj3rYhU4CiPuDBoruii3cJnJQJ8cPLsG7B1V33YQtYnGpgHEvaEiwDnKyCXY11",
  "key8": "43fNeajstEF3hsZsS9Y4yqWvcUrtV5ZxrT42Qqc8n1v56Kw687VpgtjUsYotpcWgGoAFnijFwZLTENBDZSqsDERh",
  "key9": "3qwQ6rwraQCggbTsD5h3j67ebAxnQtP2JebSHXrMQcpKmUVbeA36tKU1aaWE7WoCbU5SHN6VC2GH5iUKi1UBYfNY",
  "key10": "5qH7q4zaTDvtZvCq33aFqKHN6hGsyBgsdazEjMhFF4edQzSLqfAvRjuvrb8ffMhTvz3E75bYk31jVWeQHUopT2tZ",
  "key11": "5RxT6Z95NdVYjz7e9DxJLJpSB5CvJRUpqLpod8x1YhhjaWQbsfETRNtq9im8BzsnM7AFCnUUALaN252pMW8EowS1",
  "key12": "4dQJrmzsHnrHgBZGG1x1w8GuUEFmEEowHxciDj9uKhnDTGsB4XRepVJh1V3zQYYvRzVGUjZVG9DBidydFoiCiXaL",
  "key13": "BpoVE3gpfqUnzp8YVXNrHcibAiF2HuwQUih6gNV9Y5N1E4RZTi9pkHvHnM2sMHbQ62BcWcLtGrpLaQEM5mfipmy",
  "key14": "2fe7zo4B2aFd7W6fBpz8HodZiVniAGahbp8xyAdrFhCBvTtcE6roTtKFFsZaqbpEVQgijQq7ycVpxzUdu6rgUEKg",
  "key15": "5MaCsLSQAUgPPjWkBec8hTUwnHMzkfrpZYoPGYPL1qabbjq3zqWovQa9mXfxRyUNGZCV4ZewJB9R3mpzpm5gExXa",
  "key16": "5wDxFRqSZ7kytrJ5iQeW7GW3aka7ffTU8qK5nTWYBQ2NxrqxbDaEzUeQjZ9931ZBSrb3nx58DWowWxP6aTq7pocp",
  "key17": "R1q5Vw9enhXFqBdvUYcCWbSGpdNykgUXwZgZCjtMmG6vtiWK33c33gegEjwPrisHHFgr8nGrDytz3gxWhg2oVAS",
  "key18": "2LzP5DcosDXbQv69nAaNCjomVm1wzAQVGCHgkLsXSUvSC641xBDyShZ7WQb7hWCD9xYJZkNdbg19ZRpBz4jpasqW",
  "key19": "iWhaejRBgVFbk9N2D1YU4PnUvexXTiAcshUeiz9tAhF3Qw26hWx4GpZBPQxMHmLQWDRJyPaQWtrFypBfFFE7PZd",
  "key20": "4atmhNFrVexE5jxyZQmkZW4BuXkNbqdfoDASa6nUiX1eiWuBJ165zmfXdddVpr1q28gyRpQQgkrzAGYYtqAm8Z21",
  "key21": "3td2JWSrvjDKMyga8gpoxhEPV5DHY6qpAEHK6eGpeZ1x9qr4PM8y3uJAiJBo6WFoiHHUKYu6htjqzB9gRkUhjamj",
  "key22": "WEMTNKUxWdfDM1qjmn6QuxUPcBPRcGU55SE2txPXCxCefbKKuDvikv29HDm2z4JMu6imgj1tjdz76ftRoTnpELB",
  "key23": "3d2TVv9AkTwA7GaVM4tDETsdj1Ahp7G7MD9tzCsiPc25ttBE6tmeYawiwB5R93vN8EsKZrjJH1H46uE9oAJiPJu5",
  "key24": "1cUky1QRumJekFirMVYqSxr9bZYrAeCkRF9y37Vr68hT4TVKKisR9sVmBHFNJvFPdSNYnhPB8SGiAVKuCreuXnu",
  "key25": "4ALUu9DgpxcP8MFJX44BG65ko98ADxrj2jFx3Ri5S2ZMbAb7EQtK3U1sBryPmPoUEQztomSvcFxyLvsnrgD6QwqC",
  "key26": "32Sms72eYAx2dadtnHNK3sQSier9FTEwpXcsX1oScq1ha9n6u3AzLhM2VXC6f3K3aUYp6HgwubXJWRJFrbsk12vC",
  "key27": "TKb9RELt32SJCeXHsMqWdYbUcR263GzZQRvAh7ZXJnKT7jXT42dz54dJNBFd4md4VLVAUdC8qAqLyMJpn7R734G",
  "key28": "3xkRnK4chb1d1ujwQWE4msbfWpUimUJUXmYw1LEJczZtFY4GVfx1unVuHHAhJZMTdFsMuXxJZfNQeLwC6571PWhA",
  "key29": "5Z5V4yRmGk81FJQzqZHcXktv8np6Doq2a2zNUmkJFhqq3sEmTySP1YZRosrfVfbRYti6c5eAswzycvV9is44qvdf",
  "key30": "ByQJvVxCkVRSz5JgX82zExN2TR5wAjnxLLxSwZYQWeXCezKW7nEJtJCCUCFnAiNzX98ZrXV8kdRARtcFzoSCqHB",
  "key31": "5GCvqfziV1RQ8XvdDKtCLPpNGMg5fyR2HvBYUPqyvoeLM4u9D2y9Ftr8DotJXC6WnRkAu1wyuWBAkPS9jHLdWuvi",
  "key32": "5s266QdzC1BLHxb1dCfu6mPbWPFVvzakDiQfxRvfvS9oS8hZrTNVigkXgJikbmvsHrRd5JnXKLsHMbNXjNZ5iDxD",
  "key33": "2GvqiYidfrTdYP3SSQKACTnfTJhHWkkbLpfrSW18CFMMogJ3uhwfkogjWZQsQhY3wNuip3ik4bepbeEiUMZ85Bfs",
  "key34": "2Kws1yS92mApya9gHTizGmWJHF7g2prkGaXPNe6C5XnsHojiNdnRFr3pB8n7hjTP1fsNR4YyBYXSnCpYsoSWFHV5",
  "key35": "pU4FUM8dBcLULmbEe24Zums1euAHhA8p3ZzT7ao3vEko1ut9fkJQ6HdKFvWescJwFgPGxssZ4FstDbVpdttMCMz",
  "key36": "soh8ojN9ojacZV7B3zEoh8hZB6AUspiWjYhjrWS34wKEQNUbQJFojaG81JNYx3tVA37aSqctfeqDeaQyNkzjMZf",
  "key37": "DcUBhFLESJkr6rwGtsLF9Sw6jfcGG3VTwyTg9imBphXyJ4Snn9MXGA6FemF7RfxMTvmhof1xsUFEKX4XZkdsi4h",
  "key38": "Gnuz3LPttkbuoZjqqRfm1BdBqHpMn5kMCTUxGiAtXLDcLXmdMjjzDdHj1qs1LLkQthNSEHcVCmdp8BeVtcX9VxH",
  "key39": "2uguDwxhcuWJhw2u6iWntYtd55rK3oxSrynsVaSN8cz4nsRpnW2PaFxUaVeEPVfzuPKtu4AKK8Te5KyghGNstSmN",
  "key40": "3FUdCjEpxRK4eT7CBePhafLDJkkK9KcT2bz474BZdVvoTAbrMmedT1DmYiW1RxVCrNkGd9ADEmzNqA5oHdXatz2q",
  "key41": "4m3S7nRW23ZxCBBTs8gfEgC2w7RC2DMrvdRQU6Cf2hzj1edvJGbYGsbEi2qFWfWDLb1vZhqMVFsnw241yQ9MKBmq",
  "key42": "27HFr7qKitQBTBGys1XK6zguoyGXBzbg21MP5umgbXB9g8aMxbEZShAxMuoVVsput65JEP5HvQDxhgw8n8ULRgx5"
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
