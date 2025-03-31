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
    "6wHqaWtxVSXFvjRXePQSLPBQHTUXfKs27rFRKNByqGUc43KkYw83vcRLoFBF4mVRAyoQ3c8XZFyDFB2PQhLWPdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBV5f1FvTrtsXMbx2nLyWisqUkcxyoPBtznn9u7aSigvnVoRuKRtnUPi9hCFbzqZqpY1njtSCvSgWbnXHzd398u",
  "key1": "2B6jjBsLgAD1LGNf7XMN77qooZkD2qczWXnwgb7UDFGkRyMDtVNbHmDsgb9zF3Dx6rHE8R1khPrna2PpJe26mrzZ",
  "key2": "8ghqrDUhcpeh9tJkiMP5Rc9nAzkzu4aDrGj1qgFFggynDxwcLs8Ua5k1Y1f2DWUtMgADext7B8oSrCxNYMZ9i8x",
  "key3": "HfpnvrMUaAvUmnyrm4nux6cMH4xfsaczPbBaN9uCGYZg9e5GxutV1yKe93SxdgJUH1tQzsh3qyuGAR6Pjc5vszm",
  "key4": "9BNWXk2dEoeUdwVweRC2wXYeZU53w7TCPMosVzCr2FeJz3HKg2jrnVyRk6iTdug4UuPJkAMJcX5amGx1BR86YMv",
  "key5": "4y6gsK2GGjMq5Ttg2FVxUhg1hFDjPEh3Fo2fpd2yMfdxqDQ2oycCTaJKiQtY4SZroJ9T3DjzBnjNo7MWJXHmxQBH",
  "key6": "4UsueKi1VXUymScjvtGnVHps4ZaBieSBWrTSGa4DtNDgr6Q5CVoyskADg8thK2y9LBSuEwVf7gLJHUvXfRqSm27z",
  "key7": "3wE4xLzJe2H4xLp5ps28uToKLZW6pvgM3uVKZAAcyQRBzPSfD6rEKKUN92eZWHcNqEYrtXkbDZFhWWYUzUj9EjT6",
  "key8": "39da8KHEq2J9YSh7AriQSHzrD6NAXyoHxHsWt1zgSXQ6LbtBAR46eoW1Miya5tx5CEgtNrXuepaRhK2pSfVqf5jx",
  "key9": "YMomijo8x1SnfYGGtDju7yHy4DTWGAUQFYAY8GiJb6oTcGKPHnrhvaarY3vQGZtEQY61BaxyJZF1jkiVwpENEP8",
  "key10": "5bVi7V33ZLNR95DGAKxvyyTJobq5dxX6etF2P4CUtvigSB3EU3uqdobv5Qs7U1Jh9j4ztBcWnKE8S5wp3RuVN92C",
  "key11": "4jj3S2Z9XAfMbCNxjaqs9d954sTGKKCyoXeRdGnSNrGfQPvUFxPEewNQQk8Ck2uBDndbSaSjmwA2PeWfrSN5mzhi",
  "key12": "3S6mqnfiEY2wLV1t1DVSCjKCTeVQ7GXZnP6WfxYvEVdAX4gyW6fce8S6jgYjiWiAz9tHMKzzs15C41bbtkX6AJNv",
  "key13": "2Z55jGfKUQ6w7fbEBEJr6N61nuBdAWNUb7B5AkX8rBHRiFP9evvJs6Qsb9UhRxJnDhMC851iT17H1cdcp7sUsn62",
  "key14": "2uhEWGt7grgNDf75Znp4WCKgieaZox1SSnCRDskE5tRntbW6CMdaX3GfLQCCjhVk3Ga2cj6sGgv8KocTVtxSRkcs",
  "key15": "njS1qqmXLkkgCq5renBrEPgqYtoNo3DrJWGPfFmXFScQTbDNgCaf4jNDmjAuvgtUbnu1ooezF8oH3idRFjavDjv",
  "key16": "3XgwBjY3rE7ve8DwvXKQfkqxMBk8ipd2XBtRyCremE9TLCSj6zPMfeBdye3KjwFRgVe4ytDmjgpqn5jU5DnqWe5A",
  "key17": "5izDj1g2szTimwjDNsMv5gLjJuCMz2TYa6LJd6ZuehK8eaA2JMh1TpLkrUoEbw8YdgLwvb5fXLEMRYk3T2mDmxsz",
  "key18": "4ekhvmofC5Y2jD18gHH1rnzULUnJDoA9AvumoGKEap9eArRJjufpdif84cTXKDn9LKy1AJHmXZmpnvGJDzAiLDA6",
  "key19": "5whhLGCqkU4JXkx7pfxMuEtvtpoy973Dza14gegVrtusyuwbnqhZqrPNrtYS8YPVTS5FHXv4SruJxqaFd2HXP73W",
  "key20": "41oLBBMedwxhAdaozumvosAYpKtQyY4qY2FGBYPACAQvc4uKejCRtSuwVSGXJVLhoDmM9j8aHukjPQ9MjrkHif1R",
  "key21": "37TE1Mfz9cPewUD46nMfGAmNxSQ9sSpqjFtnKJN1EsD8a9pbV5pn8pC11zGgakrRxLHxYRyuQykEr2v9DNxdHjcx",
  "key22": "4troCuxid42sReBGDDRb9aY7rpo1tYrHiAYP8Hic5fUsvbnNbvoMjfAKH4NvfJdXicBnuQqbZW9xwiu8Fr5nynTZ",
  "key23": "4S6kxGxU6zcHKE84KWboAbVkgNDvH5QNm8MXWdxDaPQdF6yFDYPZJpVFma1pVzQVMZFVHbeJUpE2b8DNKJYHeAUk",
  "key24": "5mFabkrF87cqjJJur5kkEugtjb2icSc99Z4MubkLVxUbXEinvRLnxg13LmZkWGRAMajh7kGWYaRJpv4EEcmDZRQ1",
  "key25": "36Ybyt78n3UxejhzHrDb8Mz5UfCrQMUxNErVhEnZBWXupxUASfRvbaDgKkGtqC3aGeZK6ZJfu9Km1BFU4bDfrMUo",
  "key26": "5rWAA31vUqNhD6xro9PsVAnctBuXn3kGzmmePrgFNvkEiwfZ6Q278hwow2juuNzA6qFQQYng7ksxrwBmaCSK9Ytp",
  "key27": "4FWXY4iPtUbRrnWLrXeeCbCDu83TWAVMN5qnpbC4WZ6ngF2FMmKM8sSr7r6guxJfpNik9QsDHn6rowquRSHsVHPo",
  "key28": "4aXDck7Qt6UN8EAqLpqaKbGELWqdAnVExKmN49QpVrJuM1GCRcPsnGHu6qYH4c56A7h2D2qR2quk4w6MX6TuZCyW",
  "key29": "5poweaL3gBNzYLb2mh8T5mStbDFbyi9TGFijGb39goWA8wv5w3FGZuwWGTaJvdx8yEfnUkKEGCqmiQarCgHmadgN",
  "key30": "3GQZYei9CHEz6jp5emixEkJrNEtDRk7XDxQnuVqXFLS2jdoLLk4bFB5dy8dF2uNjNdAcVyqWP1QRfKuxYaoZRp4j",
  "key31": "4z4po67KE2GdtuK7E11cELdWooMWgrY9g29GGrjYKXoByu2sLdJa7NXsDrRJYSTKqHN7CxsvMrhdFXF2HYvyxfLo",
  "key32": "gjFmD4kU4bJGC9K42TimskAVWtCn1cYsCyC3SS199rWCUfmgU5srweYEK5pQUcyjivR3tDe5vJ88BbofUGjJXc2",
  "key33": "2cuv263zGG4kiQo3HZiCUXoH64mBtx6VbCwDdThvLmX3kPwKHihTkdQNmNsAHR62FrCQaaV9HAocfr6ZLMMruyWG",
  "key34": "4BuEn4pfAz5WVwhb939qpV7PFZF1nxnUmdUqoxVpepe5xSTQTekH51SmzMk3ubGTUUTwrPvdck933X5mx4YurxV2",
  "key35": "2qmvQ3bfcjh3378VFTHMDPMiLrajDHojkcdJyRGYreUPDK9m8Z29c2ia2g4ewkx8V59ZFBGZo6tPwLX2SLajc1Tx",
  "key36": "38MfdvVrG1kbLrXHByMntQT3PVYEuqpSj8PgEpZioTqYYWQJav1K9PfgpPaL68W7idbXkHGNg5aRK1KgRxRskhD4",
  "key37": "T6MKZFn6Y8E5sandijXz1pH6DTVrxAgHEJfuE2v6DxR1ay3mZRTm91nGc5VttmqVAMUr47NGDC1dV31Hs8W88v4",
  "key38": "4agtzwtPtTfPBA4fPHKDtyvwbqoGX4DFgVEVGYm5h9joi2NpMttj6CBzpuw6TQGseRfSboAdkVC3zYK4qwheNnBm",
  "key39": "2BL2QQmwsxC7bx3HCj6yjHvfRswyfUuc77TZhykhtFY2SNDYqDiygK6UhmAJuus9XMwQWXYKbwM8fSwLhetin52r"
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
