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
    "5tS2YDqzcCgBXZa9gBGanBMX2gd2AhXCBwZiFgzbYyV4e6ToCQRhSpwPehrKJgQrxfsP3WHGvCThQsrRDPijDJUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58NtMn5SQ63n9qSS7mrxy3WjsAvhVpykcAAVD8kRkM3SZ5bG3Tt2RFD6UnwHZfmVz1m4E6okGdnL1PMCQrSA2chq",
  "key1": "2pogNp62MyEjA2qwEk3KuSg1YqD9rsHnXznh4JXuS8GQdM2ATh47kvMxvYzTcoFkHL9qbdvdWp8TFknFBHRyPwPs",
  "key2": "3H5oCwR7v5MeSHfAy3oooGJs3GD5JMxhVdiDPL2g9g9QKgghxH8dwmxZ7gWh65xNodVTpmao4qosohv6uY2YXAHo",
  "key3": "4m5XCaNKXQkJkrDj8sv3y6hRqZSNZUwtFTgvnVk2SEWJGXCz374vAPJR3mvJmEdx1XxVEMZCdQvMh3xicZLhXR5Q",
  "key4": "3K5Q5u8QsQTQD6Ugi1CjEoSEVgheGNbTLVgmARosLrjx1MsJ1Xog4DNrPjWSzDyyozq1ftcZYHLUgdeeYB4N9FNn",
  "key5": "VTytgtncU7XnnmvApz6x1ffZfo6s13ALEGsqTXMps3dxCbinFuQYvbaxJNKzJuUo1Xd5M3jgm1GMmMcaRzwwQ9y",
  "key6": "5ze8DupGQxhG9f9BsZ88va9opgd7Q1NZzrJsSCMhbnMFyCsR77KYpQEhgPCsNUb994m8QsMUBuNmiGLA8Th3fvAJ",
  "key7": "4nHmMkHo1c2KVDEUeaCHdFHcRf8v1Xu9KYbvveeZckyT3t26EnFtS2beTngmqJyxVn4NnBpXKHdwUtQYsftTconS",
  "key8": "4e6qd74iftDJZTDhZk8K2RrrbhPGBZ8Ktr2F1kXwFxtRe5bnRxDfrjZXagiZTqGxDozkbro7YYRPEUPzEM5snSPA",
  "key9": "ZpT5SFgZTL2tEvkpw8yNitNKWWxK8qqZHu7rmU9ZHh6xvzhZK3E9j7reS5tZmki3L3vWJErCcxF4GKFABijWhVV",
  "key10": "2MHfMSd5PCQAVtQgZKnFEivRUk7gU8EYYPXtzHamLceya1DdgGwRri9H1L7wRaK91oWZ1CQF5bMh7czhHk7woXVK",
  "key11": "3gjtSVUsRmvRs1GeQsiNwg2EAYVygHArdxVDNe12XtL92WEKpfFZqZ155D8Ajfth88Dtjs3B5DVFUAdvxcohBCjM",
  "key12": "3Chf78EYWA4bY5nispD9fUe11vYydbDME4mtNGVwmUfu6r9V7Ng1xzJyhgCmffw3fRUphEHzjnM47siHevJjL7j4",
  "key13": "4WxPwHS1oyBXQi8CQZjFrseddpUrwbcncZReR6zzrHk5U55jJ3Rhs1pL5bWJfbQvHCqPCCC6K7Nki5fgUVewpp72",
  "key14": "2U8DHCPBzUk64XZAkxfMT752tdmDr4JSxPsvBAP73XnEfXTesZdCGEwMFDCTCR8jNanErTEdVJ6vAxz2ASsJsXE6",
  "key15": "34SLL85VSauHypQypB8Fj5kzHALaDB4L3gqWE3kwpyhLCQLxnaCswogQ4MWULAbPCrdUJsFZc2YxjxTH8rWjHwKp",
  "key16": "3rgaRUTDPArR9Ltfe9RjEaszg2DYFg4bf6WrUUGhtvDcWTcajNDaoHQPPuHRmN16xtLhQQVNQGVc3hRb2Zw56Kri",
  "key17": "9SymAeVKQYHuGKkmoRF6PsschYGQd6hRAozd5YT1dBFCKGtbgPrYRZta2f9G1e8VRTczBJqh8RXntgMfp54ZFLj",
  "key18": "3BDBTAByo8c2X6GApx4NLdAp55TGPC1TjaiGfca9bzuNbhq4JwY3Txk1YPpwsQVAcMuNi7qaCNGNdwxoaMoux3U6",
  "key19": "4mJa7HzoDVzM74LFy98DiDFRHAunXNoaA3DupgjjDJxytutGrmu1tX7N5hCpoqQcfnkLE89BYQzPdhZZ5FHsyAfh",
  "key20": "3gzdxwHPNKJS5r6ZRcwvYqkbZCJq3SdfM5niUBHsXAsjZyA5AFGPL19vrPCM3F7DckCtgge26Z8UVAAWGGUdFedJ",
  "key21": "3Gzkgzq55n3ucxTjAsKZPz5pryxfkC3vzBot7oX3ymVcZMJfxnSLzfHBuWTY624Q24FFdbCBnnpc4JHoNS4e8PmA",
  "key22": "5oK57eVPjvT9UTDsfXykWCs8CSiKZGpz7nYqkXMF131E1N2Bx8V4urSxo5QMF8PXF3nzpdnyTTUi9BwBmUBjuobd",
  "key23": "42VCxcXZQGS768VCbzFgRWy46WWRBmR9Bt82TqpCDZ9rckGbpPDPet9aztarj4WfHqq5AnUmwLv1aPDMHUkssojs",
  "key24": "YRSUYrPYtqdDaAmCZEDs4isi1NiXxTsWFaZd6pWqFTTXRpmNXrBcNRfDNMzy8Le4keAjcsvT78SiVTUYXpK1EKv",
  "key25": "rjKPMX8Bop3pdYYAVVQiqf1sn1bF1iTdxpFaJWXBCcciJyRE5yRSyefEowRLShVLvCkgRLzG3rcQtvEKRwcrB75",
  "key26": "4A8rMtB4aAyC9Hz212ntsiGkgSWLEwefkEcYADhGpXb26d2JTLsXP9F423Fc9F2bwXvsBjjgf4SDpCZjd8Xyxe4w",
  "key27": "2rL1AnDHSshwsbvY2x5DRznWkrZtwR3r1S6Cuy2sREpQb15JbmjsdwmWYELrauTPgsaF8vyjsTfU1KtTZ68cs3Q",
  "key28": "4gB2D6AceF2w9swVUvWWxgauUFNorL6EceFPcGwRVCDdEiVkWfy8Y5EXjadgPNtPVLPhsttEbDHYo6n632tHXMzv",
  "key29": "2f6jCuMgMJGTGzUHeWv3ikqPXJMhsV6WMZDEvgaHxjAfmXSAb5Ny2zLMQgGb8iHwPkujzqVhuEPaLY8cCxp4eELL",
  "key30": "zrmpXxJH6te4rHy1PwX3sNH4XdFdGgFKRbgvhUh3TwCdGkTmDPYCRCjTPDJtV3cLHyf7pcwvHiz2HNpeuzxUEKF",
  "key31": "3xZbFay3Sdute7AJcDM7zhS8vtRTHzF8ZX2YKrrAfWX6NxjaYtvxudU2v9oiZY6R53UBhnKDpeRFXnp37HpXwFBX",
  "key32": "5kvtMbY5cgPc4iWBvXvNzKA8unhFH5TKSAjjB4nW9gbVtU8785MqVxiGEiKD8MKuHnN8cXxzZnYLk6r9wVftAT3V",
  "key33": "4TciZ1DydHUWqmE8SEwYh7swE3oyYnpaLR3F8jZPWq2jWibcPxUVgeTLgxGZSRccGzTjRzYXpNxF1eF6k3TrShMX",
  "key34": "3v6U1W2bot4BvueyMepgQUoSXyAPC6GUrcyMVr1N5e87YFwDiBkg1vzGJfckm4P88Pry49svsJMYnvp38xCMboPt",
  "key35": "2XSdyqLNtU7euXgVWJGkrwFgFEgPUnDJvtA1tERKnRLkn7uH6w4fbvrBx1SjzGA8HfLZSTqDV51NppfjS9UB5Muw",
  "key36": "4Z5bF9L8X2ZVRBX6STCWrKxDDzYaW9mSGjP6hGfnaYUe6tUDaZQHb384ughqD3HC7C7pV13xDyfn7qZ7rVE6unHs",
  "key37": "6ZtiPYbD31MtXHzrm49K3MTRaWVWYUJvDFojJopnm912iYDBvGvDuJgniV15VNcU9M97Fj5XnKKrTJMBfnZsKRN",
  "key38": "2t7rp3SEUZDe9KknWKiNVkN2eKv6cbVcXHe1fDKcVdUzHGRo5AmQsxNNqvgjAJJEP7qJczcknA1roa9fALgaq34N",
  "key39": "jnb2vdvGhDsWSevBg6M3D8wd3m8rZVcc6EHWmeusF8oTtHvYksPhzY6y7zuhpU1mfWapcYFJMDYiv546XXibeos",
  "key40": "ZR2mLE4zkxchyjAPT4bm3Dt2mUp2SYTKiwKxQpwsvx5ifqxze5vnGHRXWgG63sckHJk3yLbN71LaBJH4i4tytXu",
  "key41": "2rCjeybyEEJDiNBDop8hwJsRVbsq9Ew2fXDM6CPiibsG3sX7rxNoBCPQvehcXoK1mqEaKeKiwZnL9V52zbgapEe2",
  "key42": "62EpnKnTvMGKSqUAwbWyDdYhEzsf8fxmFeHgjZYCxA6aWt3sayiDBWWHF4ZiU52yUpGyVJEoRaB1ccU4RBwfvihW",
  "key43": "4PtZ1JTyrTemVYGzd1Tg99LtMtLvwAqqZUKzG5ewR9EgTxQ6iVJneetBwoW4BMpqoMCVRWPnVpxWTY1HHM6iDpp1"
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
