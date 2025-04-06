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
    "41Bb74ptMMgMWy1PNLaDTgoLEVreGA1GHJK2sJn1fZDpMwhziB7Rmtvx3FCFEfnoEWKS6tMUmrRDJh1Ac6Qd1Atq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yUr6qe65ZTVLXUcjjFP8cdVqD56SJZF8V9aZVQQ947vMRYutzgC5R5J7ZCQvUAGd53ZEGqHjS36Pd4tQHW8PYh",
  "key1": "5fDDvzYeoJdscjrTzbzHtk1cZFAG9nHtZv2TNoHZtYcL9RopQesHhiU3bTDHYSG1C1JJbx15jwhz3JbDFyGdRRxh",
  "key2": "DUJH6kfRTDyX2JzpEbTEPQNYmdVhbZk5SVNTLPnZKVE8ALQwNRCkYwXgZozEPqh3rg35rnwyz6H7ytqvCdQpMWi",
  "key3": "39p3bb4SmKREuqtssA1VXN5EFj5C5sdhM341ptiYwcfLAN3Qhvq42xqq7GDQ4YpnqiFYxtQaPZvKx7EBEXJPJ252",
  "key4": "42HvuGAuZD6CbirMhzYvivGddJ43tuKsp9q5YuHns3v4MUYWmvw5oEnAyL2PX7wvgGB5fw8s7uTvUDCBcpLLrYxn",
  "key5": "3NzfgjDTDApoEA6BoHZGHnvZSaYrFzTjWSwWJKJ4aWxPK4wVfTGx8rcEeekJExWrzaUKVLRpt3np8M1dNGJpBx7T",
  "key6": "3oSe8LWdmXEUenjx7zXihWqdvtmGEYFUyGaNZ5ko6EcLBneut3wQ3GW7teCbPDS2XBx6j5Sr6LxjoZg3ChTXS8Pr",
  "key7": "2FbvR88UYtWojdVfakUpGvcWBZozAv4meka3yFqAYBV5Vana22F2RyMMYyfjWCDkG426ASMyQZouwZ42P6eiU5Ca",
  "key8": "49J7Vn82PdkqDAFGaiGkrjq5UTtR49RRE5XEkdJGe4DKBqM8gGGZnycg6hVRXmRnpk1bP9LnTB7ZTqyRivbV8Ypv",
  "key9": "5USBC9pHRsdhKeQyYhqgERm1fFwDV5rhwqCNA2oX3grG2BiRNXJ15bBDnnni2ssWt3DmbiEebSG46ikp6J9ZMRSP",
  "key10": "4fMBAEUuTQrRGbLDKM9EjvrNsr5iwVeHsVLbV7dVjhY1PRctLG2MnFaVrMQUgPSrFdADNbgzvVDER2ivfFvsAfga",
  "key11": "4we6RzRm2G19jQZFU7fpaq9ncr69DgdaRkzTZfRsc4mSfvJseuEWVjV77HtGXVu58maxQZNPnXrDCXfUQyCB65sK",
  "key12": "2stSABs8GRpmQ3KxWXZm41G7oZARifrAAJgcaS4J7n3ZLRiyREz1PAC8ShNuDSgvK9K7NCbcKrBZjWz4Zx6jxJqd",
  "key13": "62VSGpysa1T9E7zpNPamwM7owEGUjvxu2YjuxdpZ1qjcRhHozRp5LD7psAg8TG5nXXHMHsUonzVXMjD9YL58d61Z",
  "key14": "59FLCtSoSzZdFQhjmQAR1T5rHy2Vj3acdGWoKkoXrgNqP2sFoMDFsh7XFVTghhcqQZrDfambmyQLq8iRvtZazbJD",
  "key15": "2s2hNSU8fMHMRYutqXij8x9CMjmrFCjgeKcSNWM1vXLxkHyyrhWQi1r1xfk8CCRsfZCbswvPCk4dqDQcoGJ2a5WX",
  "key16": "5apT8WGBoT1sBbGwLscKn1sjPYuyWHPe55LKCt4mV5tQwWFjeZpBnaMHhqPJaUPP58N5ZpV3GT8xpDVdexR9Nhfz",
  "key17": "4tV7E9rji6bHYecSbiwFzD4ujguD88x8UG3UASjDgJqHQitZFjm3uu4XguhuFjkTfYUhZHpNz4ZTTAx5y5vZwcaJ",
  "key18": "5ewndJmRqyKcUQffK8zGivJZ5qZ3G4BmbgTx3Uau16pym1AntRUqkdDZpJyMoEdzRQgun5o82ebMAW9CRcosYp5v",
  "key19": "53wpA3usc39kZd5QFVRRawccU6w6MCwHouVHUCs5A46fxJsE4911P6T78MTBCuSNPF1kKNCzQ29qywQ7hrFjdHDu",
  "key20": "46WkSmzxw4PTauNMMvDPFx6aKdg3x5av8heCMD1koEcYK8fmM34N4f3ykYKyKtRiAiyC4v5Ka81w8tgn2mmc7Vac",
  "key21": "3HaRkqdrVn7KT4oCBtAUpbGf6d8TCdjj6vCUEvEGPhHWSXnywo157ppUyCLJFkGLjCVJAE6EwyUo5Z2RkQNKjiTp",
  "key22": "4Kg5zjErvjKEvFX51zYnyZP94GvFbqCGRXDwqCZh5w7T95FRoAeP32TeWKaEapDTQVwY2ccdniFeqRVdfyDwNvWw",
  "key23": "aFd5pvPRhMPcqdS9dopJLatoGqmh85YHEjwjBjr1SN3tUthvqxQmiHHM2tQDHG51ioXFuAZTvgPSkfnLUhqWub2",
  "key24": "2D2pvamamEnf5PhXKY8zew7oWJcavFNxxWGPU3b2BxyTiZP64PdDGdm69U9Roxvq42Vq6z8EhrBatjnpqvaEQrNT",
  "key25": "NMRd8MFKyRFSwxprBXiVHtEvsAF5DYhqFF8NYgya5zUHYt8peAvKNjKnv6y78QXg4pRDv1TPKs9XCigX3t3HAR5",
  "key26": "63qWnVkmnfRbXaY97h1uN24PHgokkGKy8pGAE8MyCX3obrjVJVDywHmfPcs3MNAfpRmoprBG88kPT4XoCDwHqo66",
  "key27": "5DinYAVhvZGQuA7FiATYRJaqKV8egQjF98mizHS8k9c1dAaRnYyvujQWYz7ZX6WH5DRxrQT9VSnF5HRkQAx4u2RQ",
  "key28": "4XACmCyrhcGPnJ996EDfD1rKvRuhzxQNQBaQ7RzTppNP12kn8Ee9dwRaEJuDX1wzGNWptQhei3ef1koNgvcmSVQ9",
  "key29": "2HfL1oSBrSccUpBpWhamBbX29AegjJTaQbd1M5CgHrBKnLotKwTWNrN4nuY4rXWTKrVSPbBY8MxyVax5qUzaL1FQ",
  "key30": "khDLeHqMyKwEnxtPJe14mox3ehr65Du47hgkH2uZYUAiRagbpWcas7DYmiaCWAdyh6iScoePpJPfeVt4bLuW4Jj",
  "key31": "3o9AwfJM1Hg7oVQYxGQWNypofaSx4yguMZDhvoMr7e3y5iDUaVi51jk2FJvR5gCJWh3adCtch9V3g7ZBCN7NxXgt",
  "key32": "3TYFtHJtpzRpQbwcxJq7RkaRYYvUutXteaJLpquerTDm2dFmXaMxKtuXjN5kXsBGF9rpMcXEDRBp8pi39y6e8fb8",
  "key33": "4QPXpJyCJt5JGKua1uLQTmWGt8FFkJAEnuLtwiQdWMERrwSZT5NsZ1F6vZ4uPEjnmD3gavjZUNZuuEUF58x3nBbF",
  "key34": "3EoZ6nvM5GJZHy5Zv2FZf99r6T4mQi3WXwvmsPsr4q852wED3o9SoJ7J85kzce4W9ifJitC2k3qYt4QRjw74vsdS",
  "key35": "EJ8NrPAZw7ScnXJXDd6QGDKdECU7yKfGFNss4Hdc8NZKXjKmCajZgkQWAeTZ4KZ5ocyaCiPV8xYTQfuabiqLyHn",
  "key36": "4MYrACMsT9HukmwVaMynhTwc5QbjucWmHLWATW4MUvGi87SzN1isJSnfm7vZqGH1MkKLMTMPbNMnoNpdc8rVJ9xX",
  "key37": "582rbw16zBt5CAyR3yGrnV5FtVv2KgyFRJey8QZwdyXYyrXXjs3qykCG9AQfC73T6d54rEfsqqhriMoCpS9ZDtyQ"
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
