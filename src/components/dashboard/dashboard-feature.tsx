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
    "28Yc9ewbXgdsqB8PK9qtdmJPDgLsum1G8kTpXth53JV8Nzs9h24EzgEdMxGPSfbjjLHUh3ZEtuUJC8UgaQup4wrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2za6vEsTrzPCwYXu7oJVm8et3u355Fk1SN9ZX2poy4uuzmgtq4y5HgJVw5NAWHRGD7CMGEktkmLk85SNqUt99GxX",
  "key1": "4h7V5XSWaZyf9CFSPs4Ly8QfwFVq21G4fDK7xbRJzpsfyYNGfiV7rL6PEeukyuWmKMf21d6YAxke5efd2dtwo26H",
  "key2": "4jS7ENu7sGcfzjLwhzovMWVTaH1eRpcjnrqhRbdfmG1sUirXkRChZp4FPHhePxqacsNzzz1fairpBKmGEEe4gEJ4",
  "key3": "SiQhdRKZBrJwwn84a14YM3v91yQPhjfJdaEXBvTKj4QFZW3Ld5SzpQvjVYMMStPeTqiZjMJ11tuhaygn4imbsf2",
  "key4": "5rRMx7uGQxqkcDKREb1EyXw9EP7ynxaBZ8MdD5vkD4FfhfAQoZLqrEJLtd8YPtqLkLkUYnxQdeK3MLRpLPS11WM4",
  "key5": "5oibmqxa4u3BoDsjgNwB2h7UR6jbTNQeG14ecQEsV4Dvyguvcad4vodzSVqmJA3PBBYLPuixH2Eg1P2vpy3taD7E",
  "key6": "5pL97cPx7Csj7ydx5V5MAzZDwT3FSVwYTpf2An1649zkaphS1kuAguYvDmXGmPhLgBQwJ53bDQqgfwzHexi6MfDo",
  "key7": "4CZVcVbRxpeRgimYpt4uUEVVefLdzJhvamDCKdnB6k1n9wFHXysu4KNSFtZURpPM2wWuRFQ5Brt3wvTpf7auTTtJ",
  "key8": "4oCtaj9q2rVQGJjTythc9L47FmX82yyFD6vxQEJ5mVttFMy6RWRhyz5ZiTq7gP34CVWMj64WMiysCRqQL9rDAHcE",
  "key9": "2mFjf9vwrGgrR1BHiGNTmKepBDteMyaASuify659ht8JygajevJoW9tmm59Ho1myxT7nEusQnLRMXB1WSrxfc6Rr",
  "key10": "38qVJgwb8syvwjzNcwXnw5D1U43eaSaz8mJV3JuqJ33Bg3uQuZKBBVXutDEpTRhj5xZop7Gr9cNYoNYmutoFLGY5",
  "key11": "2UWUK6PAgAcHboXsyAHUVvbvsVcaiaZ6GyLhUqNPZEtT12M5jfL5qX6a1WRSi6GDUdJA9qnNpMznCGhFUnGUJB9p",
  "key12": "2etgo7RNo3ws9JvtFmDtZu9L8p2ifMU2dzvjUWe2ApKVWPPQLVm4ofmWF8wEX8M3qurVZpyTkPpxrvmyTSNeYE3R",
  "key13": "61spKNY7keTjx2dtTGrFxNCR4sdKLCgo6Cpz1RiBotFYsN427XqxfmzuBATKtqt3ha4qpfhQ7aKnwukx5MbTGPBX",
  "key14": "5WErTPSFvvk7LBvR1nw7xDFBmRaHcBZXSnPJJHRVySEDCyRBWKqVqD1RSskg6kv3sfGDKNk8aw1ZfvPvgiCVUEMG",
  "key15": "3a9xQqWineFZr2BP2uKKrJ3GMr15DMuNj7gZDD4aTqZnKCDp2Andh3EHR53Maxjs1XhB5CBST931CzojUQ7GvsrU",
  "key16": "3uWHcHS7RA7dZiczCznrEmTueDXAuh1woQgqNcRx76BrPvrnNYRujRGH4TKws5bE7UFrRmv9ZRsYhGyiZdoq492P",
  "key17": "5XymCyAz1xEQxCgyraLVxPjvAAtE3ztDSehbzxmsqsUKpjBHg4PKqK8sh2eLYDnnmwQ82FLJAouBDDVVGHeWpDba",
  "key18": "4oKnHxK2kNNZ3WscVbmHCzyR5pb7LWVQyknpTDkcfHNFEoLtJQiiCQPLkGsmLEzaTZduunUdjFmM9BPpjbWrtc68",
  "key19": "3Xh5ibxw7g7CfvaaXv8gT2gt33wNMqD7pFZ3n67wMn8wSAAMFmuwSbgPF22mcDVonRb3nzaCDQtKyuLbiGC2vZSW",
  "key20": "Bh3KsvPRmtQMs3Bob6dTRrF1w9gByoSyqSqrCHD2sMV6NaeNF3AC61j1vkAXKoSGLCg3Y8mLbkAC6RasAgcX42i",
  "key21": "5pnuasBmcpboQqQZb3B9txcQRcwRxwP9GxDb5us39gCjvMnphBewdz5nwApodbEc7CDCvmDSdWpoEj8BA8Nujm1h",
  "key22": "5UZNDGnH1Gz2ymRtjopfEgScTB4cUmUgVbfThu1xWzX6XMxwWEFYva3bSCRoZHtSoigtBcrk3YNHrZ5N5ARyHtLZ",
  "key23": "4ufF4xgyo122Wps1Sghy7d5PGqrmSMEc7enWoBfPccXmwrQEZ4DynKkXjV99UKgNnPYWgCzAHD9aZDeBYiHRj1mK",
  "key24": "traWDtKBTGsCTCFQ1M7dTdM5Bso5PrjDuA4hYf75sRTmAcfCV1MY7PLRyirACSN7qyFmRhq69nmp6dPneznJWPG",
  "key25": "HxaA81NK95HVeqmpxUfGY3BA7KyuqSPShR1wfT8SdimVeA9tFKj9BSLupaaZiZSP6ukmwYFw5aauD1RBNFpjvg3",
  "key26": "4VLwvdr4zFKQSjRYtPyjiZAAUwLKmotQtR99xmNa8cFnRCapEQMhSjQmGXKREPasjTDQhEt6ZBHZFPQmqJfJaE2n",
  "key27": "2kArdCPZ2yYkNbbJdYzJvzFUGfWv3c8cZWNnXodwhVmBmMfhyqThNEdwBKi3Tm9kUfx4imtZhE1KYBboHFAcTNPq",
  "key28": "LzuUr2MwxuRJWf8U2VM4crpnenbQumPFHHMHmWRxse33KsEzgXvzT9WovstFHxuftaDFP5AJRmwxxtvHeB5SXWC",
  "key29": "4Ps6VHv9tL45ZrDyADe9mrxTCeZm38vhzHhiEmYwv7fejf2vZ1esXCSBZfVNHfTvttqrFp2159rvbc2k1PNdYA6q",
  "key30": "2nkcJ67n8zhL1KhcwJibcvpSr467boJWBrrjQXh2P7p7BQEAJ2tR8TprzqtmZ3ifwSV4jwHDFsCjonWRyivDfd3",
  "key31": "2KVbGeZe1p3bCnmKCjvaZHVNYAGUWYwrVSZWHbx5uHBu4R4srrUFRQkMm8DEdEse9j7yVVXzQPdHHRbXRFBnUyXb",
  "key32": "2dRcv2chjBdVjVApFUaP9pZcsNTMdY8Nbd452K8Y8JkkDmFACjosFkQ1kmhtciVwzh1sJ3jH4NzxmEsNX3eUYJ5G",
  "key33": "GhiNVncfXxRbXSrMFBv261xXL38gAEHU5YJER1JFxXGez14NbcpNLuHpAJLaNhUihRJtgyhLuwkpG95eYeFiGnY",
  "key34": "2vZaoMW7WGQLqkJSPAg3xL4xppPdhayPDM1i4EjRnN36p7MaHDwfwFyZq9K6yhD13eNCCh5h4uiRFBQTsTazyE4z",
  "key35": "23iWrtktjajWpTdpByKrBJvcdgPvEurSxzWdcX5525ioDEeFhniASBwAkdb2ypLf99zrLA1W5hFJMQJNWpcXViJv",
  "key36": "3CmqyNXjeEWz9unt9pGXdhHRyLM1embSSWbi1T7mct9W7F2TZGrEGRoCBKheYHYnJrV13fXp7TvnxtjWy3WKN6Ud",
  "key37": "Rgz73nXo5Q6v4izWFR5wxkmH2xHDDecKvCf7m5mPJVCbN6fqcstb4RUD6ZFidPw4hstENkgHugTbwairtXNVhkH",
  "key38": "KzFM61eFnXL9fAzaixgL172jL2yoiUeZFUwcPMNT2HyB9Udk1zVgcacFfWcTSDpdLYRaCfhmE1ijeWrkpAh6S2W"
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
