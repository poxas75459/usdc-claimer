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
    "47gKmWvdha2nHaaT7SdLwLDMAoNUXrk7LV3uxNpu5Q6KL94fPeApgq3fHdRyqFEN6tdWKUYyaHdRfukdccMWPWbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHqrd7VaiLk6gCjfeL4JQKY4ry6szdGmUvHhVKzWxyVY1uDaVucJ6Wy2NJ5r4SZnCJQMDwCEjt8vBRqco2YzRjT",
  "key1": "3PoUNfe1GKR5nHdJnabvrnnBhNz4iqJqtibmSH4Wm49gtFWFUGHGCTof5oMHu7ciySLjTt8iYdQEdu16qSzDWTh4",
  "key2": "3nrTorfYTWfSqJcE9xFgZaf2G7LNjJ7pCiN8jD9KA98vZeEzhE4T11YGQ3uwUAmB5eoHkoZEkQf99Nk418QH4bF5",
  "key3": "gu6PVCBt1EzU7urqC3N1i6LgsnMXN9wPYUDdgRpiGiHGfzzdRSdsPnBy3ADAiZbSZ9vPzuqDNUBCwoqSzgFZte3",
  "key4": "3k58N9koCZr4crxY5zsVhwbXR54GMKpFnTxwwrjxiSmWPD7BdQxhu1i3bp5FCRneoTzsUMbryup97zEW5EEuyNFm",
  "key5": "5j1rSzBtR49JgHH31dTn8Q2HcumTPM2XDuLfwfPWdWPLkNFeC6F84gQmmd7nsxE9Fgf6s25GLUDQ26dNySTwZUAf",
  "key6": "pKTKf4N5btMTZFr6B1dcSA6mHiaQWUWCTB9ZcVU5oaozAt14hwbDtyAF4JzmPV6EmzXKKZHVgjizd6zGMBUADVz",
  "key7": "3nK8gvz9PsMX8aQtc1sEAPSUFmU5xqsxq3SD2J8fwJCGm3cEDrtYy2AM6hSaipBi9BBRUksRzKVgfidg12bYhsgX",
  "key8": "3FdyuAcYGheFjskapdKSH62Z6eFfMvVowKha9tBGuJrDyh7tkZHJKoUXKTMj58YfDAitTXMvMEFY7FJLmKnGaACN",
  "key9": "5JFJjDyxJR7xaPaHsaixZWAu8BpFoUmCJDuc4usWWeUKqoxtpNWZu6LKnR9dwv7tJfrpnF8pWdEw5AsQDBW3PARR",
  "key10": "2tL6TZjfFYY4mh83vpW4a3HQfgDBmzfbgUsbutArmwgugKUvnfPgRFjKU185CAQxhFSRyGidLtnrsyAcmqPf9aiz",
  "key11": "Tg1w6fNAf9aDNRHZ8f798UX9UxHvDrbHqy8nFT6fVumfeMBZcBcqn1XbEnHk5pV1ESiUUDnbVZFvBxpm5TSJaHm",
  "key12": "378jgt4MM9Z9Zw57GiiHRLLHXBgsBjCLwcZNX6266ajg5ErSBuYGXrd9DyY2xSHEPkdii2byMYpN21A9jiFKrLn3",
  "key13": "K8jk1TkeQPQEqsdxy4r2VmLYc1aKdWfsBy7vAdA1jsMWfb6mocr1xonZioAXqeTteTecbpmnSzcWA5AbHzaebJC",
  "key14": "SvTfQKzbaGPJZhC4Zwu37h6kij89caPhwPToGfcPwpvWAKJP8yRms1tMzTYatw2Wd82yPbTB7pZakLm6nC4Nqhh",
  "key15": "3m82u85ut1MgyZjdj6kRLCt1vEFmfUof3CLSpcmVM7qCnqC69jwWtoe7jnfDA1nuHWAkW2jL5hSoAKALwSMsX1bk",
  "key16": "BYRirzywS8tvTPgrtyhtETN4idjX1STdp31bK3aHxud6QYya4GmcumLyAcsvceVzwBXoMpQF8CXYNFRgx4r5Txg",
  "key17": "pu6mEuWYPahV3qjzrSrmgFtxSxAaS4ZZLG4ktduGpCc6LXECttkrxB5qBR55H77BEqAsVDfEGm5pqZyWs8FZFui",
  "key18": "5nri46fJbeq2tYB1AJnaoGFL2KAxpqPnc1R5aMG8C71XkvEbnwHAMytwHBvym5oYsXBYz5fKzX4kRRtw7nWck59j",
  "key19": "526yoQTtJKytkkgwqtij9cfPb3XZugnpwjzwYEJRmobjxBxdRj4suEKREYVmi4s2C8YZhM6C1aNsNUTxuPH4o9o6",
  "key20": "5CR7Xyqxk9bzUqn3EEdzkhDDnjW3PoAf4icFFyJEKZzfgufwkn1oLbu9FS1HPNKVVTp2LK8AUA1AoNBjRKZHRXF5",
  "key21": "4Dj8W8H6dcLabU9LzQ27qgXfYqyw1UwR2BQcrFgb1nu7GjfxXxqPuzUtgTRxixTxaRrGoqB925BEJ5aNhHzAnfy4",
  "key22": "58fiEY4Zg8zFH3iNctu9AJWmTVr9gyfTHQ1zRwVeKiD2MQJFxVm4E8ZjmuTgN4NCg4RUpm77TRmdCKLKmcbAurQM",
  "key23": "hBYETs5SLUsCmuuUiFFv8JPTqkUW9VxY2T5auCDHLVCXbeVKDxdThUc7N1991k5haRZtqNyeundBrWojWpa6E7N",
  "key24": "3pya2JwBvDsSdmB6VERz2JC4adH95JWfTdtjuJzNBmC7Yg91CV6zrCXGeyZWsJRLHpDukwt7Keova4Lwc4p1TzG9",
  "key25": "4SE3G4Cgdk2u7dVGRaS4jqyJBAypVCUegowcHonAXKQX1dkH6e6qb6CCBRWgcPbGn4ToDhoB3Qw6CL39RsXpSawZ",
  "key26": "3HQDvodX72UgPnbPuLtKijPF8VUTFzvxSy7CoqGWFuAQnXwY9voMjaZ836U83WnD9jD5ySxHPGWDH8HuRrmPVNK6",
  "key27": "2QhQYmXM6Pg8nWFU6nmyuSyPkwCz4VXqCE5qAK4jD6ZSvrNM4Wo6pNTZoWfpM5dUMw7sG6Kt9ATTtDUvTTqHRzxA",
  "key28": "f6cqQXNZoqbJZUTyUBThdC52RVxYgZCaYeead6xcCFMzHaBR9RmBUpuFSLFxCSdCL1hjzhZcmAEn9Hs8LFoCkj2",
  "key29": "64hfbvu61Q7FG2Vsw8iE1DUS84K6iXeky5WQjLr1CqMuMG4m1pKkUkAVKRHn3i3KryyHbSsaba6aqkSi2Zp3LF9k",
  "key30": "3BRvawyh69y5KH5sFJ51rZPYhBFHDh7CHNnvk3JuT9zFJs4KjCDydMo59PS7rENjcNxkbVUWrcBRjW6RC5YH8353",
  "key31": "498wg4imoh5oQLyaFyRi2eDb67XWSbB98ndAYzxJzq9dUJjYRDXT8sCxb1GMMxDsMyivdBBW5LMBmnFqsxuHgfdR",
  "key32": "4wJkue2GFtNt4NMTkHToeMae28T3WRiTjJerpEkLv9mbD3nSZeiFu1kviQRAaMqtzvB7LEp9eHTFr2Zur4brFVSk",
  "key33": "532DCT4UPbSavhf2ACuUHpp19vJoaARDqwKghk9eg8d6QWs8omUWmVskdDZLM9xFUZYg9MwJ5mrpWLQbP6TbYHH",
  "key34": "63in7Y9a1r59fYR5fsgvCtvrTALgYAWWyoXdUTNf4kGBYReG1KiBFpkQU1nxamNu7A3EdDLjGRRYJTfrhaSxSxs3",
  "key35": "3TBfR2y6t8w8H3EBZvH3RampwPr7N9rv5ouRqruapv69G9Pyzt1YeAxkd3t7aghUPp4kShtPoLtnQrt7NTuR5qqo",
  "key36": "3PznVu5q9Ahmi8a5mjBeW8nAs8wcPKh8esLxobhqHKzpnwwCnHnsTsYcrRkDe1DZZj1krEWHTTm6itJh35VQwsuu",
  "key37": "5n25GfkcJvAMJHYpP7JveMzdhUcFMuTma31ufUnvMdtxxErM8r48Q21GVBoqNMkuC31j1nYVeHqCLwNeugB8241w",
  "key38": "4VLLqE5LX6261EavrPr9DghtvNhruTnBBNVfoAHzKrMXD7v9SQ6oz3LfioranEv5QMoQCSqLfvwhCdYdcysQw15t",
  "key39": "3TuRSdBTSeKqmJ4z82HqwPB6f1NU7qZKk9qKjZaT3qefPustA8LpS4xx4TewRTknfvS8GvfRA571kkgXnkuiUNiT",
  "key40": "31jAH4goKPhYgkH7T5DvAk3zv7kX2NMbFwcoCSnzghPteBcWmt85QSqEXDvwt5wvUaMWn8WDdMUJNcwKbbUiPPdJ",
  "key41": "3HFtsi88LbAtYJp9qHsRwxtqwRxGVybJLx9SAEQFzRWqgKbAt3x8KV3TG22x9oq8ZosAkw67LAiYEzPQMsy2GTHs",
  "key42": "KNTkAoyWBy7oqzsUarMkCvRngRbS5DYQdw9wm37pveyLQvGVhWJwk9C83nxinw2xsZ8uuEUg1qpJnJfjLmpbgRi",
  "key43": "5PLhXnvxg9ebhuoWwNrqRYoj1nyZuwXMHg6vknaULEiJKEkbmD2kYnrx2KN63m2aEAKqoze2GyMX6D6XbS4u5XYR",
  "key44": "4Qixrair8WRfWKxDT7R94DYFXMnNQ2LJMNFxb4Qmyi2qMc2zRHiuGn3chHzvmHnqd3j9YyGDTCvZiagwHN4DQa3r",
  "key45": "2rtHTdngPQUMQWAvq5GhZBhePedwLHeYcAieDNq6VFQDweYzKvgCky8zY14qhKyWjJZ5RgW69MJyFPaeEvFQCb8G",
  "key46": "7gwpMEUBoxzz4PV119ftdcsYknE4uQd4DBj6ZhEKhZiv4q1kGBz2GZ4A5A9s2RUxCzdjkfabji1iAZwsEPc8cPM"
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
