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
    "4uWSeXbpcsujXAnyJNe1F1VvW2CnsoXH54d5vopxTk5K7VfBcz2PPincbKHToJwFu8uu2fbSXdSbYioQHRxawKyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCsTvRf1tqkJCbozLXjHAGyPZe7QXqBxEPynjWRp3HxaAh8K2xyqHa2osEeA5BYt3cyHLtrsuZoVD7CKfXQkAzw",
  "key1": "2QrJsEz2Tetk3xyn6VvBR6izVTgYiwjChR3yZsQ8DfSyWi3pjV2sC3PyzDGSWxUANWUbqWXyGMNCPcMejMqX2UgZ",
  "key2": "5VAvaoPMAoFxi6hnTWqJVKVZD4c88Tw251Aph2LzfB9iocaqHEyp6wE1sxLaMD8TSLYvDqjKuPB4S3CufFcWJUh3",
  "key3": "676FWXCg1Mpn5kvr4CMEefPApnQ3TpJkNv3D1KXLkMGGuMRQ7Aipsv6ERj9Seu1fFrXweGafVuq2Bc35hcbJJX7J",
  "key4": "3ZcX5vi2RUXE1RWp6ibXJwxApBgcK2tDUKED7Efu2YGoKkUVFjFn7cdg4sd4pU7o3tP8RTK5vpjH1HCqHXuK3KED",
  "key5": "3q9sRHR5MnU1aFfG6E1MFVm9fXCo5WABMs19ExF8DZkyJG97Swpas4c5GDwQkyeuykmxW8oWhdNCdFFsZPq39a5m",
  "key6": "5h2qjvxNKo5vk2gj91NQ1WyYaqAjUiHNde4towyKVbhfiVMeQNrUUroccn8iGsDmA3ZxUEJQF5x31btoVRdyBZaD",
  "key7": "5WnnqY1tZmB3FGL2dsnnsBUdhnDZdi2tvY1U5nkkEDfjSGfD5QwnT6SSH1ME2mYJkPti69kBmr2142H9qExac2RP",
  "key8": "38QRbKunsXY9SMHnyco8UCccMsFttjUyb78DRxcTpf7a3YjX7N5ExWvtMChYyVcjEmw8uGvt5rWjzWqzjafw5V9s",
  "key9": "4BvZvoijbsRfQbsasLuYNnP6JWcGTv3GgkwQjJWMXRMzR7mh1sbXjhua7ndsGvcAZKvXPhiBsCS8iFn4pK3zPBwH",
  "key10": "e9dfnydQFg6NHr1zW44AP8DaghcrLMKrWrjCqsQdn22s66LAaTiGk2x6wTKJuZzV312sUGyWkwZhX4rjXRCyoWd",
  "key11": "5SmufeNKnXJBSrFwBJ3PW8neiu3e71fHJztUxPNVmmkF7mZWYBtdgaJfAD2pioa44AXq1JPLGx6xQyZRxs994Uq1",
  "key12": "4Z16LUFhKrHVqAWe6wZYdk8XQkZnj6othhE4dQnYtyZMBsB3zWhbX9z8cH2rxsEHA9TQsJPiLckHDqwmgePxBouW",
  "key13": "4p2otcFaFgzZUmXMeMgJU3vHXbNm2mhqnMZCvHxXkBefGnRm6jNFQPBNj4tMJkxhbKgC8TMiTZ3owyWLnfFZiPfC",
  "key14": "43rq9zdBYrEnFGuHjLL2VgrD2KtPmfcbX2cBkp389YRxAqzh6eGBXFNRrZ18cSrzCRV4SdrZ1eaprpEWh4KBvHBT",
  "key15": "4TCMpdEM6SUborKmruSV52XsrxvqqKgwzfiZka5M87rpZjc42BEX8ii55dyxxiQTvv3ehUkF5uXfVDBLKt2RnZHz",
  "key16": "4LezLKtcjM9Fuonn7vX1cZyriKw3ptrGVFrFhYV32Lm4ZRG2eZQ3Wf63dTGkHoRV8d4Cy4mzVTEL5G7zwa6TX2E7",
  "key17": "wGZLjnTbKG6SMeaom2mXmZKeDMskFSh7ekGbG3QVyjAXC53Xpy3ME9gYP7wXyUHS41Z4Zi3JR41aeVzWT8pbV7R",
  "key18": "5kgB48sCMRBUjJoyqik1LRyiAG5gFdEgXwJBf3wn1J9wkJkX6AKjokmCsRsaAyVCtaDEaSwAKR4wbCMberuADVAL",
  "key19": "4ynkiqpsbVGui5a3CVnUAQPa3noU1J7ceXsh2nZgdSKU3THDVDH7E27SAL6nNTgfLm69BUrzxUrCRodcddBrjD1n",
  "key20": "4P8auqZYdfvJMDb1fkGaGmGEqSrThSK6UR8Eg1RCNvTUeJdawYarmRsg6QkkCYyRmUrQUtw1XijFT1ywVtSAmKq1",
  "key21": "5ieLMMPSkwDBU4hbQe8uaXuSNCMXWsjoStx7TzF36FGJvLNEnRTAeMQMHPSEoqjiPSsKZv7B7PbxZ8skyWgmCxz5",
  "key22": "4dTmPZBLFAnKRbQNvkksQVf7VtYBXaE8JvmzKCavcT5MLa8cc3J9ofk76DDAUP3m9ZZUf8nGC1FPWh8RXSeJnyCr",
  "key23": "2rsXCnCuM2M3k6erNW8HTapCPKPna5fuD5dW7xgxP7BnWXyRd18H2cBdyCTznhDJNLPFGzJQ3vGt2cdUeiMxRU8R",
  "key24": "fpAyxx1Fh65h2uygCvmq8wsbcZhcZD7F4s5yWdE4U9c3uk4WhyyfF7enBv729SxoSqq68bhoYpw9Z43DcE4JiJ6",
  "key25": "X494pei7wudp4gqboV5EutmrqoMdFEYXcv5jaKNnjidbNnoavXdBPmEFAtiFUK3enr9mA9Mw2Ssw7X8pXknKiKQ",
  "key26": "4LELmS73ckNy2wn6surcnqzYHtr92uYH4pfMULifdpAnGYRdBGnCrp25pxNQkUzPUyR9xTiWE4rbQYmanD51GYAw",
  "key27": "2KDcrgFnRsoBjxduPQqSCnHTEpvF7drm54BG7PT8WGFpufdvHRS9fzzn8GNsQzB1p9z2fk3GvaUDGvuSSCHfhnyn",
  "key28": "bcfebsTdEiu2x4kquzJTAft8BHbmyALrUpN46WquVAsS5dH4Wun6K8AAgwiKrfrtx9EKSv1ukqFsnSD4y3Lc7ya",
  "key29": "6554zhFNxrAawGSS4kZjNRBi6cBDenc2X34t3z1DeqmKGu5wPhRF8JLJDcZryr7g2nN69AsgxUFCwXRSoieuLCHo",
  "key30": "3DyWq7QFJpZdQFY2NEMVAz4ut6CHRr9brTQDwN98Kbg4EjD6Gmw1rF7tK3pnNdhfrWxYKzQKF2EoVTUtwNNNJ8E6",
  "key31": "k6fTtDHpmFSndZA2TLMQUYQuT1p2en7ucKv51LdnYaKYCB7x8z3tPL7SGgUwzZdNbmz7R8xiMTjy2BUVpjxzmF5",
  "key32": "2SbuqZp5ttLGsi5zRSpgKfv8cAQT8ipLgprr4yKFw4ocud2Yab1CcxamoHta9BDtz3yz8xtX28ZVwACjHCguFKew",
  "key33": "2hPSMfg72SsUZY8h9JeNutNshVdKeoSrAgkWTDBmWpGzBwp5tC2R29eBByA6ASgHg4BbLmzTgSZyu2hp964MtvFE",
  "key34": "1JiFmfFy8JtGYciCgLNLwEWFEmsbucsWSRdyE3sh4eEhoxgfFS18k357134cddwEYQDH8HdMRGHt35pLdDYLWCE",
  "key35": "4MUvibGhotRs7tEC7gaE66LxerRkctRnAfxxFAsuCj58xQfz58ZhouqejD2Poz55bMXWwgzNMu41gxHvQzKLutYc",
  "key36": "5YooQqKn7xggj5sEbVo6P8QBSfH6SUi27rUrTaeyJLRmjgkrqpqc2yMGxT9HppeTiWGewH7K2fAaccn1pkHCYYaP",
  "key37": "4qmiZH5qGKnZAM2XrQdfm5QR5zfCvXqS85FAo5hFPF1LtbW2w5CCtYVa15iq9igRvsCApi8gDpFCEqgqbYhrDKzk",
  "key38": "akByt7YSPLBH25nQA51VhK1rYb6nMDV3bRHLnCnVDqMVjoqUBbvzfw151jYF1BW3xCUgagd8Fav9Kun66sH5JgG",
  "key39": "MeusLxvi1vTbK422m4EJYd4DAEA4LtWtubzEN1m1xsYkukVrgf2nxHCLaxChgDm6MibTnaGJmtNixKZA2dZj9pD",
  "key40": "5RZyJbcwJ6Mjv5JtHTmPRMV6Gaa3mF2whnJTKin9B66gz7wqijzKAF6XPsdFDWFpdwTqZDe4mzVKdP2vABgar1c9",
  "key41": "4eXvmXQ5d5bDfPmNXxQtfqA4rcsqqgVWu3UfvnNPWWiqA42suisNX6HEWxQhX4bft9X2q369tM5VGRn3696CMAxb",
  "key42": "3MCZhgbTc7keD4gcjcQD4cqajNpvrTD7kZKog7HocpRrDHphTm6LXbCd5DSX1rhcFiyC1oFiXohyx2bZYnNFtHjx",
  "key43": "3KshxmPvTHeHnG1GYnsuMCtH1Y68XnYs6DSuCvvNbEhrrsgP66ibQPUeoQUnDYcKTQxuhF6SbyoetbMra5iq4Bd1",
  "key44": "3UvkadkERZJf9zZtHCW9qgRbUwBBTZ7ic917a1wnzsJmxjP4xCnuZCqfXPgLYteSFDRYQ6pn1F4TJxFCXb3HJdaN",
  "key45": "M8JUhkjMiHeovVjHSWoW4K7FbNo1HyD86HxpX895bYq5N5CxNyHrAvsYDCNBxRoFMPwXrxe3qdNUh8UVHiatsFq",
  "key46": "2Euh7NfAZBodfMdv8HiV6xFdaUB9BqotB6JxnTpC9UDaSzQGrfcYDajWgBDR6A3bg7Qz2d3B16LuZzmVb97LpJf"
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
