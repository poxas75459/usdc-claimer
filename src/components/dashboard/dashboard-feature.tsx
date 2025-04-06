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
    "37tb1hqUsH1yzwM7848tNQx2wPmRbWzP6DxSM3hpj2k6AaCykM7QLXXfzk8uFUMrsT5i8xbuhyECtTzbFdWdzdZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtbE3zR5xF5CNsGYiHS2qWWv6KMKez69stLxHupsWCypobU3nNM6hG874GyAdzs5v9PJZ2PgWGSdMd9HdipGk3f",
  "key1": "4YcwMpEUCtwWGidCLEqTUR4bdNCsWmdTYpVdjkNPu2URioHajMqY63a6wXXEWoQLRqyQvaNLTSXghdEeRNphRrx7",
  "key2": "3rN5VLFFf9LdAY8hAshH7dSuVVKfKrWEKqWMtQg2VXMKaT9iWMpmjTLcYUDeL9HNsCwUQm8yeZYpqoJkBvqjN6Bc",
  "key3": "5PzEvP9rmfPZNjCoy9WU7fB62wqWd5Wm5KSm5WYT4MR5AcxAucT2YmhEPFjRD7omG2pg593uHHikVJLvy6LBUdsW",
  "key4": "vNkHek7Gsnm1N1GLHm8Sx4FFMHebRoDAs3xisLHsVZ7e5UFexb4kspC4aeg4Z16hStDXqhLy5H8otj7GYKA7H6N",
  "key5": "4diercVEWKkm8DCPBKxD94xVbRJ72HBzRGbaMMGWn8rRvHssQpSRF93ErqHS5yihqCphowrJXLn3rCV7SCxDDR9t",
  "key6": "S2gou2DxoBFABL1pRswad9ZGZEMYtsgYt8ciy6QzZKR2D7hhgnpTDJU6UadtMGb6wPJe2gvbptTrWV579nYgzaK",
  "key7": "5MqUApNp4XBq9V3wS1W1WcCz1Lu4aKbcAL38KhZqRSxHyvyMq6MNxBoMWXp8Z9cNhPkAu5aUeGVLvNg5VUXYU9Ky",
  "key8": "4aq5kFc11c899Z4cyQczUbpDXwowx731fEBFh2dJ11R5kVgoYSHjthVmMfs4MyUFcoHK5bL4CU1EE9Wch2mU5pD3",
  "key9": "mwetzjeTgDmLdXaNEAfgCWjMQucdtdtfXDCE7JTQsApghq4s5oe9oWSYwWA6joqcbPTj6ryEQNrLHrZebJCgxKr",
  "key10": "5LqtdxxmQzZfhvn9Hvvn1bq65tHAZUoaQyufy6aDrJtsiatS5e6qJ5PvxL67JmZrcTBLJ2KxVYb7bQqXnavjcYeg",
  "key11": "5ZKxyHjEj672rjALpDciM3nfEnbauNhZvjgv6c8yNHkidhiZngvpydJqdaV69bLEdBze1qXkhwW19WXXPzYFkBcf",
  "key12": "QYyf1gHXdzaz7WAi2eivRcd6YXmePfBvQE4h8xNtQVkSLR4Q98wkvGw4TTrrJfzuVBRxobTWK3UNcfR6rSsrNu6",
  "key13": "2a9V5uyWCpCXCKQNCGA1qHrjeUVXV7zf99wxVT8wGno3TcJnRVoj1sn4qDf6KZKsqM2M7skvQtNThZujQHfeVJ44",
  "key14": "2LZNySRid6qHPT3j7ZrPV7yQW7YRBf1hhDUQxUtLTyKoXXCN5EKRLZ3SdrTB8V7X1bARBVWeokzN8izVipVW3HMe",
  "key15": "3CC5Amvh6k1nMZJxHCGgmUFKgRkZMvdYz9CCMpcuMdqKbuyf8sW5N8aAXUEK6FfU2zH23oaHBFdsxieWeSySzVob",
  "key16": "qrdWKtr9NgkzdA9B8xtfdiQ8HR9WkaNjeSCqicoLk7dToL848wkQa74bEJnb959tNwhtvWLwChSR3kktAptjxAz",
  "key17": "5pGampVTFkQ5sbWyW5MQRCR37XZFn9wLyDuS8bsyqGH72SnwTEDwZj7FV8a5vftwzV78KX2C4eSBu6y69ydyZKQQ",
  "key18": "5WwKiMWy9cEUfggCbKRY66nKdWwDjH4wtwmXFThTJPD6d8LXpGVZXKgEXWShGz2kknqY9vSGFgJHNME76vAfZ5e7",
  "key19": "2LeTt9ZU8N6nbSbghHDxj55tAWgYs32t4E925eoazMuPb7Zrj5Mpjfsr3jiepRytCozBKqaipHPvRFGgE9E65AtD",
  "key20": "4wRx3yUViZrp7xmv16uJtYELLFCcwRngsMGQTFpC4kc7RYXMznpqTnkjnpzm7TvM9ULvib67eeYNsLPh3ToUUeyq",
  "key21": "4PHuFhrN9j8MWujDgvMfgrCjXKQKyj3uhBX8vgvdaihErQqUm9ovmy6tiuxJdz4qCn2SLJL1bC7SkZwYSoadq65r",
  "key22": "336dQLt681vba3FNixxAjC1VLsqLMTJFemSKA7N5C8Wu1qTAM7pG95no2PhQkYurXjzva73ZJ6ZCM9Tz4cgtUuQH",
  "key23": "4qZxDmiw1h9DgLE58NeJbE2YK7NvfTWtRHZR5wYzyTnxWsFpQf62QG16z1kqdeqv8EjwjG3ERy3dTgxNAgbQ9H4e",
  "key24": "65X2wkQUFnunhdBGiSr3iAwgqoZxKJRE2EvYyCCjKLeKNrVERxt3R8y2ZMeCusmNAKHgHejqq9oy9wDP6ixWRyrA",
  "key25": "3H6APVTHuYb6r4g8cKSv5ENWDYgiq28TfaDXhH47oeCy7zRankJ83GqHaQ5MD9o5HboqNc4Mt9suQ5NVVB7v7qmv",
  "key26": "5sgjosVNUo97ircaxaPfvE413DxTdQHUP2gWMdWdhjLS6TAquqLLMYZCFHzxz1du8X996YnJRc9p9j9GruMWwwHY",
  "key27": "gZF6YQD27pUv4Ei6xbBD6eUnL9gSNiLqZUznHLBtkLZbYwS2t5vJrhXsFp3ca1zXFTrSBUAXP7nD61QTbtrRXRz",
  "key28": "fqagS4CuF6k2ZbJ71VX5eVd2szJkaNARLN1Y9WpADMjaHpCwUd51gaKoKW7FkCQWMo6gFdApDszuPvy4VjZfePX",
  "key29": "4C9JRattxP2yx4bwmjrsFVD1sm6bLUNbTpUkNnoLGBhjS7iaMdStPLqNFDN6herRVUqrP4SzHxt4S67BGqNRPxKc",
  "key30": "W7zb61Qe5VKx6pGea7pBcy6moCmZfMvwX6UuWXPagWkHFxyjq7BwtkXboc7YYUYaW7ge8jg9TCXXsVWXxwbcfHJ",
  "key31": "4VqRX9NHLVLXtss8x9kTZGEmbBD6FfruYdg1WW3cpoXjjDRf11KZjwVcor7cn4iScG5ENFFsas9eNGrUDtAfEfSg",
  "key32": "fHGuudgZ5bA82VnUkYbSiNkEmEj4oh7K5S3M79DPgHHQnsUxLBiW2gH2qC7ENCAoC9HFLGno27L2xLHdqGpkrK4",
  "key33": "39XSQuEL6maVmJ6Ctx7DKyv6yPcmeKu1UrxRpK4K1s9GLGm9F6oS9ALUGoe14PLz1AmeKQpxYNEpjMCrv4SaJuad",
  "key34": "bWRSBPGZuFBCykBZuQwVUZ6uk5wZKHyZ3iG6pWSnzTp2KZ2KT1byDBzJTLnF7WDX8YpWyJpiiXi9gS1Y4xRwBPN",
  "key35": "5m3AQBEwAT4MKF8rEsQ9L5MfaUE3Tva9KiCLDwz5pipoKZhVJRiJ8ShpHFRrxdPe9mm9SJwZnhVUoGFxo1JTNiXp",
  "key36": "DcWvPzrt6AeNXfYQtMxCmyufjzrjypQmrNPQSrzx83JqAkA67hRjZYZnTmHC4Q3wFGCwLXSxbDo8G6qHgSxJqqn",
  "key37": "3RnNNtNVkonsDptuSpzV3xmY1BoTgrmiZXYRk4UrKcfUTBYSesr31T8Qcp1vyzZtoeLpiUeLzPtCKDPdZCeZkjNV",
  "key38": "5P7BAAVg28u1b8eTWXipT3kQUFepxat6jsYWd2nGRsYSN3n9rzkgQoian6yHRk86T6AsiojAhGPiiCscuDR4qYaV",
  "key39": "57zyYgaWw24Sf3TPK18xh5PNeEHCbnswstzsPUawUuFbuX8qhgQxMc3rnKC5auAtAtbSLpzhnoUeGEHGZtmhLHHH",
  "key40": "65ZihhDwbveS41n69esRoTCS9osU8Nn7m5Cdtpcf4oPdzEjBLz1xnHVLwHD1zjX7FjCsd2HUiVEfaidKenA5BYRR",
  "key41": "3yDcG3FqYBwcYHQASd2W1mg2pV62L6eRZGsQY9Aba1ZVBNPui3ctQp9aPVKMf7DweTpy2Q858VVuk6wYErRnyBT1",
  "key42": "5K4ZfTf68mhh22bt8h9kgo2ESqSuemqsouSLd3JVNuvbS4ke2z5yJEec6dww7hL2PFK8efhuRtpMvtiQWychF91h",
  "key43": "jjwCWHZLxCVF8cdbsQhF6zrEB6wbqV18Qwzs65AqGFCdhY1VNNXbhJcsNn2VMzFtRHNDfvMTyLfeVjbj82TRXsx",
  "key44": "ZHMZj257tDPTqKQkuWiw8HjKFMCzqZ1ggdaDHhHLRFykmEzHAGAxqRCkR3ib2Dhe2r5wP4BugjJpYHW6fC7Q23E",
  "key45": "2zEDe9RvUAokVy6AYudkpQhekU1Gqo8N7UfLJRdJSLroFknQb5dkHG8cZeASJkfCGaQzF8wmqHDjTKoynr1nUe8H"
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
