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
    "5y1NTxZBVXchXK4ddiVhskTyzai11bP1aDR2wUp9Ykd5ZRNiyeYJhNntFzbDepwMTMaFT4JqYAA71arQo7jF5K2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqiRKu9LceJe6bp4ws2daeYS5sRyVafMxgBe5oWbJppucevZLMC6JoKV7SgNguagmc5LVUGurPEFRTRUqekkQVU",
  "key1": "3rkuwDfnvBwiyYqAP5vU5uqdkhWLxLQAQrS3maj6bmEfsZiQaa2Z7vpueY1jGd7V5JBpxamCSaD27cBL1TuD8BQV",
  "key2": "A4dhPeGwQbT8HP2MsYxg8EVuP9fvZhAPB1Lpy8JrpgAgJfgLvpb5xZyhnhuVfLpchMFACQ7NNd4HM1oXyLiCRRP",
  "key3": "29jnidsuZxfdMU8tf7LcZMH6jZTYXsoZZg8kPuLFDwKJUhQbj4gkyQw2DwHE2rCVwYFthP2dADiKdMVStvnzN6AT",
  "key4": "5qzBgQC5UTw9LPXp737u6pVNBvYB2ge59gJQo31sSfL9m2UiomCHk1hSqM5AQqiTGpSDTVoAYYiK6zUymeqZpj5t",
  "key5": "2pz5T8dSWxsUMAunJ1mmAYStTBWzRR2ypVUSeoLGUbNPUehwtuCNrhLiAoSFdJfKHUW5QMCS1v2fsV9N716tC2fW",
  "key6": "TEovqZvuPtrDxhQqsaFLbnbqaCBJ52iDYbaNCGMcSGVhSQrj8SfayXnEszr1dr4y6fkHDQ7JdgpuNqC9UiQrWF4",
  "key7": "3CfYzeV2coTWAbj1okU7uMCdjcG3SSGvBcoxzPjytwENLLDppsADf5fUf8r81fvNJhAD9AAFHbqCiJp8VMRza8Ma",
  "key8": "3r7SG3LgTerEyFGq9pySdyGWA27sEKfSU5VBwrTekGTJMCZscYaG6B5zDFcxRpcTrChKT55zfekpZRy6vCSbtLfd",
  "key9": "28zb9vW8erB5QuGeQedLFqJiikRUrYJG7uPXK2dfh7R6mx5wT4EiQbkBVXfHRnH1CtVsGd8kX578y6sBoNmZHcvY",
  "key10": "TyY2D1UaXfA9e8dD4XrmiquT9f6y6YjFbJ61U9My8YkUFeoctiGAPVFffFYVjrLa2jwu3qS8WqoUEFEemAY9epZ",
  "key11": "5rcVXVsWq7QbGdpmYMTRykZNvASmX96SpN7nU3wczFGzpzymQkWwUsM7hvGBkuHCaeipU2HZ9FNn4WFr5B7own3L",
  "key12": "53zyJ1uRUSJHPXMcJdFeEVZ5dbQobXbPnppxJ5NCtRouFJ9shQtmK4qEh2xpMZ72EAfoK6SHo23LiDwnkwk8fFZY",
  "key13": "5WeHWSPxfxKfYtDQCWGezJa8h9Uvt7Q5o4dfuszbaJrJqnBuxWDHyRyRv41WFLHe1Sv7JjmyNWgwMFAyqd5QgiCz",
  "key14": "4L9ude6Hyh6uyUw1R1vkTYCut7ExhbxgE6ex3tjNkFWUbk8KSwB86WKBthjHeKWbqmrG3prx61c5AS1sDQgdSUU",
  "key15": "2dZGunQu5MHwmdHdWYYih9QLSAwcipZjd3mhFAJVMLa1NavLZw8Ww2X7RU48Aac2S9vHzURGRR1NAkhiW9chDBfo",
  "key16": "4Dut4YZzdzRGuitWz2fMiq299xgVpU9yem9DCp81BmYycnEUGHY5Cm3tyKvAdTm62rFqXb2wVDwH1ccbhQndYLZ3",
  "key17": "iEnacy36jccNubzJw8zqsmGaHQhKRsCoLQkPVvysNWakeVTSQxyQhYHKZdCfBzPCba4x3ai9fUEvbhPM5KEz7Q7",
  "key18": "49WFCR8mcMeQvSndEAyYapJxi2caVv6h6EiNGryniAoHjPT9BUAHaUsU1QoRdtyApWo9GfntrwRzTCAjdXx9H3jF",
  "key19": "5yJ3W91ujxQJwpaq3CfbcGeXjiM8oaDHXXp9Ub2RZ9JyPTAyAMZz8Qmxw6EfexHedMnqLiMzWJqfeYVRxtpry4EW",
  "key20": "5KsY2VzEx3NFzN5HDMs9ShxYE8gE6hFppQ2KAMeQcgN6N1p5wLgt7LjhzGsGaAcVY454YaRovwhN69UgrAjCqMRQ",
  "key21": "4zxNXaRaSvdAcEnZPByQcSvp2NYX7L8HJC3jce2S7DTsQrSPj1m4Qs2JzA82bVujpH5oH3SGCG9xdcedRX7nLPMR",
  "key22": "3J3Bc5u33w2dUHXYYNspyaGUxWwuS7nAF1g2GaJ5FPDN6jzN8fS36nERyvqk9R2wnhRh75eAb8YR79Bb63nQEpe5",
  "key23": "kFQHzJjZxmerJWJMuTYahKw2p6DYbRm5fwbpQ7DwEz6rV54oRPCVCDNR75D4651EH5rxXT9a1WAJyoyV2kTWKcU",
  "key24": "5JsSrtBqNT3bgyYudDqo8gJDdaAFs9Y3NWMjXo9eccn4aMELeVZD54K83h4rVwhVfJ37FgjQ3QBQHZt9bnRfmd2Z",
  "key25": "39wg5tSLTMvTbgYYvoV4qdSkyfeM9tzawvLtBTJoj2DUxtuiakAazretxJccpxSQdL97kWmD54zMXUJVUJgVJX1x",
  "key26": "4TpZixHguzYtNmXmWvjfDmEYcnL1upLhEppYBqWnJXuu1qCDd5AUpmxuiy751GJjcbFJUxvRS1Q6Dtmmo8woJDT3",
  "key27": "4BKutxfnVswzUsVxdS5CJrH4Bknrdmd3HxjxGokDZSHAvtCfDzbxMLXmiG92QZb3LgwYji1zjkap87dw4mYzshCm",
  "key28": "3RbsXfmEkhGrP5sz5MW4aKou2JBgkSHcG9g8DkjwPeZCv5No4MnMv1kDpLNdAzfBPqx6BW3UEGATEKm5BLZuMsVh",
  "key29": "3T8Uy6WY2LoRzBboGutsrajDpfcMRgYwdMG9c5XNkCduRRJPTRRDmMtxCF9unsHA1gpy49Tg8uTbzfzkfuKsHPv4",
  "key30": "4SnAEtqVC9wjnrEGLkjxaLVMETkZZCJvxLSrJ6oSFZdd84KnR9zRHBhkxwL8nSk5eRtZmfRPE6ySzFy5FttFYaWj",
  "key31": "2UGeTPYVK39PMMPfpXKWmCNgyCBT1zVsYouBs1B93MVHu1pnvQFjVa6EZwEUAJyHj5BGAucJ3bofPuHpVJ6WPqAA",
  "key32": "3GUzRD8CbBRb9pZMJifxGPUSEQL13xa2YBLneaL2dFB8ZdtUb7GfnSqvsPGd5mGVHTCcfWr6voqWWayPXSFeL3jS",
  "key33": "3ft4GVcR3V8E4wS7Tt4x4sHYjgwAXjRkFcGx6xAP6MmwjCm8y7dCYyPRfs4co7LCXDxVEYbof7ZtmnpxkKR3Rwnc",
  "key34": "2vrAS9uW3gLYc3Dm445PzuGyn1GGwtqL9mhxhrEHywCdTPfrMNa2dataP7RumDy1VdJuscYDNKJHw6RAvNe8bCAF",
  "key35": "rNzNE8VHswQBbUJnWiFdR1sx1rVQDC4UxzhZJdu4KwFcHaoTB9HT9KwY5Qs2vNyYSiDQYRb6gVQcCsNpzRTp6Hx",
  "key36": "5Sq7unnncP1V6CPCbJY7zkTwxYNUoyz4V11DpvkHv7oV6J6kNyR5MtFWCPJqXeDfudgasiNNeMWCzc27fW1D3Aeg",
  "key37": "f4X3kQwhnnoxw9BbJEQyp8BwJC6hXJDywWeFwGkaJqtsTXLZFoLUWY89Nh8dkTX8ob6WT47gK2iJgT1E4dCFtg1",
  "key38": "2GkHBH7NVPTRdAEsi2dtsYHozGA5293pTxNXDePV2VnMe4x6tG2ja2vE9VZugsfw92H1qoMQCzmQoyiFzQuFctVU",
  "key39": "5zNaNJ98HNhNsd1nWPjUMmoqN9L2oNczQRxuS9j93qvtmcxoJe67Pw4AjEXxmqmufCCq6d5Hou5xwzNzoiYCg1ap",
  "key40": "3aH8juiXBb2eyjyTiYJxCYdUh6BmoRDmD98CKs6vHZB8gEyuzTS1QZ4HSRRBR3V1qjoh7HTwu92mnWkeazrBEXsH",
  "key41": "4s3eHmNHDVjeyDk8tKVeF63WCyjycSbBsDb8ZFbLDMeuToD94aw5vPXG6WXJPopw1BSDy9fH7q5MR5p5nYPcxMRn",
  "key42": "5wCLczE9sArtFTXCV5zmzbn5MMEom7YybWbpYrMtKiYzMki6Ercuy6YAymigZjcYd8VxqBytGGCb8AXNDuqH9wmm",
  "key43": "3p3smeoTpscZatFCumLiaDxmj2ALJiAysGpawgLGjC3vo1VKV4sxtSdsGC2TCnkD7r3ovix7PApzgTvMEhGFrpFM",
  "key44": "3tzdnf8MdwHYfhBedHC3mEdtJWRnRNcRAEq2aLkm9xwruDsgbEKcFpMRinPHCnMfYUpxm7jDp2Akvnt9sbvV8u9E"
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
