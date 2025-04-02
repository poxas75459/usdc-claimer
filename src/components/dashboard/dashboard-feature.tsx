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
    "5nsTJ1DXyKHikTzoCwfhCQk6wRAKGbRxVAZmiYMcmidVzeJbVGE6JeUXVtSivQ6zR5REbiDjPD87ua1NVnvwC4M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNywexqU6BHigi7f49JMvEBabTpD5j7fR2uvMubMBJcraK9zFWrfYaWjdEbvi1LbuXRbMfqDLYvmPSpCKcE3fPu",
  "key1": "4jnxZurWoqyTkAY6ozcf7rwXVCxUe8jZmoXKVpaFbHYYtz2UqxztQWbP4Pu2MYqJzGPEUeTBhJYecdSQCaghj5vt",
  "key2": "2dQEEPvSBdzwDh9Qsgus9VzrgHWL8kczcjCf4KJMxtMjfaXfFyHA3ueg2VWPHkjuD6LoyTSVmNxYBu3ivosSAkET",
  "key3": "33DavsEkfMYknaCQq1QQ7sWpieBSZZZJVPmy3jAJdGoeFhdmsgnboekHGgNhQqNfLigVYnKryftE4XFTJrXK55vQ",
  "key4": "4GHfW3Wy2Wxt1kYx8XttcoXuBy16xXGmc3v7ZPq5FN7BbVyWQdWESJq4UGW6JwF9cxdgXHJ3PrZ8NYSCVPU2sb6X",
  "key5": "3GnC2fCgGsUqBsx1xod75eekFh6YavdGvRXNnZcsrqDi7DViUvgZkY4m2p48ipsJCXoNaS7mngqxkopSoAu1LPVV",
  "key6": "3sUEtSY1CDxhvbRTLbZDKvypnk58ceWnWcQ2DPuXPfN8Fp5zypu1VnVrZEJZw2jwoLadnWMNvzi22FpuMiSNuQ75",
  "key7": "3Yy4y9mcnSREPbo9P2d6NtvXy5sZdY1xvSCfXU7VELdvPoSN6RmVVBy3yViF1NBwiERXYz4gq13Mn1gqz2aiPoF5",
  "key8": "35BRVgBjTg1jc3ioWXBekF886Ae9N5wFVDs18kJk3VKdn7zvXKwvDMMhVm9LaPH6F2epNCBiSjStKE5f8BTLkkMi",
  "key9": "4cXkEtSuRVgZbFC7moB6EjjJQv6wNceVkBwoRMg7Ermq8KLM9aCSVwBsXdMZ7bwa15WbwsqVkzFsLQSbc6LpxhZP",
  "key10": "5uUYMdTUje2t2S2NmsVWcQ29NLbMg7Wykaj17nXgYpvu7mMVHypAEPVxTmE9hbkT8uXPc2MVcwPSJRE8JenW2rwe",
  "key11": "2NTWQV3iMXbbmLJWGZaDZG71hP5en1FVzUJisnJUKxBwDt4Ce4Z9SBPxB68U79BXN4sbCzwdYXNtUxjAF84HJpyd",
  "key12": "2XxtYTm9tiHuLesjcYzhxQUaYVhbuxyH5pdqebBVJHAWM8bvvTP8iPC1yEfXaHy3GgP5Gnk6GLEZStHb82SinXVq",
  "key13": "5V92sGYa5DnmtqYB96cd3fGvzGKHLcFnLkE1YRXSuuBp6dY8xjkPjqucVX3zdh7Nd3qVra61dFXzkL6rWfUUyjLB",
  "key14": "4195nGq4AzAECF8721qZhoL8LGEDArGQNurhPdozruHfehkstbdZtg4hWhLyWfSmar8snpfCy313G5ZRuU6HJun9",
  "key15": "4fXtd5kTqxu827PPA54mHpnnFTEWTemTb9vDYX8TntQGS2KMqHBCAbVpbWVbJYUvjpUMK6BJ26QksvCy4P4CM3gr",
  "key16": "5PRu3hikYRRVbqK9xuekq8XNCJN33KVUvQympCEbiMrTrkpausA9f6N3FWF8Wuzfb2z7QVV7e84SzhDQfrDPVHg6",
  "key17": "2o9nfVRBQQ4J4dsBdvBWYU4odBBucea58TJ24hjX7eFeYd7rDByzPo3GZQS9aKtXi56jahSSKh4NdMikRmKAMyHw",
  "key18": "2Bj43hWS2ngm4P7W4ZqpWugSuCmpQGdaDyCcDGaTqu9JTEArt627UFP2raW6mEgqj7kd4LHW7ZjEtrBGYoscpKyK",
  "key19": "4TKYUzM25eaJjwJDtv18bvyDEzHbVowndjfV2av8LGPiMrXtpqZT8fbAyhSRPs96q3sRZwvhS5wKi5p7fBxUpWJC",
  "key20": "2Z3uZ6rczTkEeHit3tZHNAonLBvMAX4KBVjreTnVGHZcQYNXkLChkEspMMQzkFd1d7Nvq7jYp38gtvURpxxZcGhr",
  "key21": "4oWwWzatzxMxx3vhhq9WK5dT5QV3PnpGd1M82hq8tVdaxCkL8a7ksTC2gWwwTTYEdRVApQqgtHpiA7VeEJ9HBHf5",
  "key22": "3krh2mezu7iXWgBTkSphZu5wiHGaQkciS9NEx6Z7bDsJEKvbZp4YEidX9qM42BUf99ZyjRXbv1mSDGxNS9V8bVvm",
  "key23": "2TUwxH2Ur94WxKZQ7aGjsSgoB1uTfhAV8PdLaLxFNM66YEX7SZLYuDcA9AbZu3XEfFeLF7wXo3Sp2MLHqdz4mCtq",
  "key24": "32H7LTMfpyGW3YcnKfe2rxph9vuv6NSfxpd2AnEgHtNS8iSM4BbuHjVs8GsybwXCjk35RkoUEU6CvVHq5VYaNUy7",
  "key25": "Qc9Vcw3jQJ6AGDG9uokozARLxybffe58u1yWVPZD8MLXAZXcHzcnbtpYRfxH3n7gGwKDmoebpgBkDkXw5Dvqnsu",
  "key26": "3Dw2ZDPk38D63PWT2u5cLC8VdhbWSgaVt7NuCwgW8xQShvrLJJ23SJjvsWyh3iwws8fy1rVmgJKR5jVbqFxEYbsZ",
  "key27": "2n3wNvjJn9amVAknQwShzC2xU9NxetSiVn9WMGsHzASKXTyro1XTuCuXNzfM65Ys2AwevZq6Qp8uKyoLKNGHPYnH",
  "key28": "5Wq8cNyMgGFLev7chvZdFPvHRWLyCE3937LpwfynBmBA1qmyMCVZ57oVDky9w4YCEqShTcaStfs5YFLW6tt6YVsz",
  "key29": "5wYcYDHFFH636PvtpwMoDtqR9SNAFDuaapCSh9g8aSNMq7tTqVqNZP3Q1umGR1TNQUPsQMqj9fKpNysUu3HthkHF",
  "key30": "pGLQufMovuqTtNn6geDs8ZYS9QTZJv6iU9U5Y1Wb9mF7N5SexUukiTWd5s4tLLf6ws89FmZEUB9V3xcaSWfWWgC",
  "key31": "5rJFcaL7itHztSTFDA6xHVMqSY9tFDLWaVcgXWZGhi9uTNj5XpTPzL82sWSRBZsj3MaF52n27VJq4nwt3yd4rBXT",
  "key32": "4jqRQxshr9a3F1CiR42iqBShgWcMMEP8nxaVza3ThTXetWsH5yU7zHb2R4g5W5XFWM1nctFcFHBuHbCeaSB1zPmb",
  "key33": "4dJi7NxHvwYRrFYxttZLn6cV7vGgDXeFMqtmvaHHrzRtNqqnMKuuv9JMmpSRzY7bUrHMxgQgb169whPcaAWy4mut",
  "key34": "2Rn57Qfqb55ifZVKXL2V2PzxQsmoPKNbwL9Di2417bisPrQAKWoaEQvSVWwaQyCxbofApy8SX6vdQuU6oQD12snN",
  "key35": "2DhfjySHuYyxw2rY2w76MRsLJ7B675iyBTTV1otdd5mSqG4juG1iyS6TtwdiNKHj5TcAiMnoJXvk8z13Vgv4oNDh",
  "key36": "3GqxJiGLiZW8rAc5YoJbjSwDMPjXtMRrLBKZ5hbNG4u68nG6yNpRyC6X5RPaBSURdPMPcbDTeD1DXEZPchCAe7s1",
  "key37": "2P3e9CNAZaxtSTN92wu8s2rzuWoKdrpJ88aAxpXcakhgWENa5duofiGj6FpRAAjGyoLH5E4j4UDYwXs2Q6SQs7mw",
  "key38": "4okRgcNJVsvSxaEQz3DbvKwEKgb1qsMwoi9J1xmAkyReDk3UEromFqagPASfm5WMo2cs5gEJhzXEyeYwi7ygx23E",
  "key39": "2gT7j1NKYowB3BofUGhutvezD5QZnwv1VzVY45q6DS8criQUCPZYWFuJo1LPmtcjSExUjm7dAu2Sjv1TPggRR2Vm",
  "key40": "3yEqHn8jpDbBAF6CBtcz4cqZf8LHovCT6Tm6AcZSEr77RXJWhQVTaD5n3rayfJGqAFEVrLrRZk55F47NZh2VkQtN",
  "key41": "Dps14bu7HJNrTJhYjVwVBVwS9QDw16zGWVCeUzWacuFTbVptLwHooo6sJ9gt6qNN4MFS1j3vcvybJVsaSQ6ryMq"
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
