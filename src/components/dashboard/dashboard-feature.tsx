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
    "3PxMFMi69YN5osrDoG3RD7dBdx7RB8aJo5K5mwXPixHz5aWaDexS7sjCQwpQme9rcsEvF2VQyJEaXL1zNpRjuQL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AN8tH3CkBzuB9wt96eHE1sWuvsGxPG7yK9X5dC1Zq4sMjryeW3t6YdSTedHMsZURdSgqKz57ks6Q6pHK9Afjv3Y",
  "key1": "5UrQ7t8rmjUrXD6Pcx39zoWfvRXiamkVLP7uTmxqAucitp2YX1AhWCoXo3cioYqAdbKEkBdzQGL1HseDHXoZzX4m",
  "key2": "cCDv6ufSJNUggucVFeHZHhWVEJqXQvfqm3rWZv4JeuQMwqjCro4XtTwEgcfUmtFpy5kjEWXcHdgHXEK2ygjZnL8",
  "key3": "dwtGRNFCqN3Fqpmey3RE8hiuyWugiRUeQo9V6RLYDjugzfWmsyTYaN4gBxBaVdMtxk3riP7CgbRgMDeyEajLt5T",
  "key4": "2vDGJx51zSgAwYAhc6ASUM66XnTczDwHRa5zjf8xUU21YtsnSEJb6bC2VCY4nMHwGzXH2PfZtTx2C9Xo8rgxj9xQ",
  "key5": "3wvkq2o8j5jV61Egr48ShQHua6o4J6uu5VoiducyerP63HP9JUHv8bTkrsXryPcntTRepHeYidPHQa5kP3JRBRa9",
  "key6": "2oVciGxigBakR6TsdmVNykC3BQ3w5YBtrpPcJb6Zs88Kidk28FLiboUw9TkbiQ6LZrFtj5y4gNEmyf8ttKPzFEoQ",
  "key7": "46tuQDu3CoNUctN2agVJVNgCKZNSUzcW8TMen8WPg4vnZR5hZWp3xo9ouj8fLkgN4y3D5Sh5pQtcw935Ygh3G6Bg",
  "key8": "4kNbYLbghFEJKrKx2uboapZtyUH5WtiV4uAgWqqBXATwwGw35QvTSp5n18ucWrjQrCaTNMqiADiasuuMNf5z2UfL",
  "key9": "Pf8PERqE2Cdj6XUa2KpNFgWj4Vbk4V691yLraxC2i16dQZ9ugs6ZDZrDhyaWymwdGotCEwFTMS4fZsuJzaVniQs",
  "key10": "4eRssLCgynNtw48DWEaS4bHiaF6L57jPz71vhGFXXJ3L4pu4u7SVfoSVBHP1atakx8kNCas6wEAruXnRqwiaWHY7",
  "key11": "SGorrCw3GzB71fVBFY1eiM9nMwcKvdfrkKRkMaKxv55CeEyziWTfNBYoWEBfFGCnCWuuvRyPR7jNVYGg7EqCGXn",
  "key12": "2R8ewXZGBAyypx1wJF19uWq7htkpPnWQv6A5A7sgCuQzx1863doHymydgiYJndpmsuq8GEiyiZN9xBJkMHfYgp5A",
  "key13": "2iUG9KQjbR35LBaMyj2PFgjcijWqM1akPXe8tKjuFV8xnjoCKdmaCwrqMimXAaKvD4w7BYuxnwViZW8J8gyAJbg8",
  "key14": "3wp1cjjpr3TrRovyJMjM1v4Z9WfQMSiBvPqVc8qrnfHjmgowi2NBituCXp694QJ99qUXp9WScCynRLLMTJNAeVXY",
  "key15": "3hVd8S1sBDKAyhdBpach2nadvhdA6sG1rJSSyf2erTEKWz3mhoqZugyqJ4vLfUSj2oxdmBimtTtZmpek2WS16Dzb",
  "key16": "64QEee5NrM2pTJbaQ9C9mm2y4dwQCMPa3kQmGm5zK9BuaKhTzHvhnsnckAZYBkj5JfbmxrLg1SxknCU1GMNZiFNN",
  "key17": "4fuEy1PiD6RWzRA389KQy8C8V1WW42maVwqY5KKQjCrabtpjfh9pcsHhRHg3MokoV81nKTBmEBCXY5f6CeQW8DSy",
  "key18": "DmLnhZcmcL22SVAQSqGG2pNzzi9uV5i6wnZjcLYHryGFFrEJay9tjffjh16E1YSsWbH4MyhN2fcgcrY5GZ7pTFU",
  "key19": "4bxCfAmnehvj2zG93uHfi6MUYKidLBTSpTqHPpiSb4v9oyCyts2wVS8aQAesBpMiJwzhohojEtw1cEGUaoofEg7D",
  "key20": "HXQnXcuwCi71oCxhQDZJPSbL3cMqziR6qX6p8z5EB4Qod1xeLua9cC9aBs3HZoU3i4zPDzEvNndPkUBGFk9AS7G",
  "key21": "5a1wcrFsMD92ASyxZ7EdqYeoFYgwVB2vYvBXMwsgaBSkXb96nzDhb8kSKQKvp9zkAAkgE5RtXQANkiLSLojxVkN5",
  "key22": "3T3GX9YMwtCK4SZSp5NgsgjgYNfBkK9C3JAxboBTXyyHHwG3U6fvut86QiJh2hEHJN5nH8MnQPuTn8mAEyA9jYtf",
  "key23": "4hMdma9A9Ps8PMQ3GfYT3epYktrX3oGryw5kEP4TMwiuxtdwfBLuyqTwBK2z34raDsgcLN43JnwYZY3FoxTxbahK",
  "key24": "3dhH5uYCULV4BoXo8UDZwEjRfN4cUCTYye2R7NDytvRGSk1q7eTSVxBGugPZK4wTAMZeZLxs4F9k2MV8eU2Y2j8m",
  "key25": "5EA1o3V1kCj93hgEEQ12QRv8jK232JmHGFsHCrmp3JVVhJL9Qm9Jotsr5zK6ZJY21dD9A2CErcPJGCzGHLxT4CNS",
  "key26": "2HE3nRGMNpCdvGRiZg4AQCYRTTaEvaPdMuFehPmXfDt2xcmUq8fWUhE4REV2h2hHratT91NJmAnmq3QLHoTyioq1",
  "key27": "2AHMXDBrV9CHGvYhyRz26aThpMjPVCDTme1pi1CdTGDDanGgYSspJyxr4a4Gk2nLaEJv4gV29UdRigY24qHsdqRi",
  "key28": "5pm82Q71WDrtiHftJ97qr9k1GyGZjBzZ7pC1jUCrJFaipxYbWPNFDv3WSABYrXWAqU11boXmJQm6acpLPATWEJd6",
  "key29": "5tpku3FJL3eVMgZ7LguCPtW6cKZeKRu54kHL4FNjLJrYtzy8qvXGTG7FPKijRk2buuhchakmkBuAX1u4mgSqWW9b",
  "key30": "J8mLjoaeYupyg2jTLYJjpTLugmSDEBz1AfaWp4KRhbD6MPY23DRzBL2P1spcNN6hYnpFSo2FBRfGbQSwNSChy1o",
  "key31": "5ZPdwiyXtd5zxP3LCPxGiyySZBW8snvQyNsoGihPvza6Vju9z6UJxCZfsLAPYTBzqThq2SzTPvmcUA1AGLNGXdPT",
  "key32": "3yTKKxYAUJXsoWWPzL6q7FB4cgX9Fmj6exkjn8GaUWyLwFzvSKFBzydebjU5Z2mowAL38Dk6CBw4BAxxCwULQjgH",
  "key33": "MdFinzfM7DqEz1PMT1rJkm7nfxL73pMVX7RLZmFMNEtV6RjgPbTcnnZCrhbWRaWGnnvUzaSWKNewVq5CwSBcnCT",
  "key34": "FLTzYUb4XK34gredSTRdGSydqTQ9EpUr3drLnUPaQY8qfAqVeTDsJw9ENDS6NPVComcPyTppKA4KVgqDQwgcdmc",
  "key35": "LNm3QdE99UDwPm9AQZSMqX35Eamz8YbRhtWc94grSoabmcCnVZStPemEoCi1gsETUeuSFW9ETVXTAMmCxCuVGgA",
  "key36": "4tJwto8dBRhXZQ56PTbqwGgJgBdnv7XUjStTj7kbXLxbDUQ9P31pm21BWmXqrWtsd1eRbNHteSg6WpmpCGtjhKKH",
  "key37": "TiMrC6wNVkLMdkGL8PJ8Mw2qHMM2qJJGwUdCqoeFBM19bnB7Sv7xJz1DjEQ1JkbHtrEztBEX2sGWQQ5nb29USBS"
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
