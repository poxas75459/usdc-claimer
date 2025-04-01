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
    "3f9JrP8XxFzXysZAR3KtBPcjUktS1A42XSYo3dyb1bgYgmXcsxaacHUPwntXpKJUs5UV8E3i41qeK4YRAQ677Axc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaFrVXucHBtNDEyR62P6Cq9LNwbsRMMquJqUpH7qWWkowTDtBwKpRtpTihWgMQ4rhy95Dy5Z8x39N9NzvTxQXAG",
  "key1": "5GBtHF5tTFCHmRSL6Cdq7JDnaJ2W322uAgrYSdBGBtyPNVyQh7LwtmFb9Edg9EJZKmS3eFLdnJsni5g1P8PWyvzf",
  "key2": "BfTAznr3segeCviEUSbZFGmUkF4VSK3uXqkm6jaVpc44kzPdTcrm351LBpsbjr4G8EWtuZ7n8t3nNXcx8GcTKye",
  "key3": "4r9ca2Qo1xRrRS8jCCVNiLFxQQXMxPayCw4zTTWNGE5SbxrmLjAzXAxQxZEuZ8qZJmxmbidWzVFxEj3fFwGF9Arf",
  "key4": "53aBdfWRoiV7AETEjS2GQ6t7naFJF2d4oKfFZ11kgQ9cc5ucniMzKa4MqodrgChc1qRVJKmkGPooQrpTKQhT5MPU",
  "key5": "4SRFkEKyykBnPhNueQ7uFCmr3suBxDpqoKQfeJ1PfwjiW4SjrnR9UgjX7iESk6x1joRVcVs8wyx6mv4cz2rCQLT7",
  "key6": "2iRSKa5ZmN2RYfCY2VbuZXSpABbEJQkSNvKMmQ3aXN7iZybavqdyPAYtPbWhBtNnat3N6WWNJmkyXjdxB9wnTUvN",
  "key7": "5VJ5MBu2XyGDt8BmFBXaVWPvYtjwxdzMTkBU65wcjdQu4VK9RBpAVG1mde4DxMJxF6wNtQHmGMJnE3AEdFYPqJ3R",
  "key8": "2wU5SneXim8Ysr37tEChsz55HAct9rwFVunGzFzcXCbeYqtVEzi8U2cLhfWxm1YWR4KCSnzhdgm9VaUefD47GCdN",
  "key9": "64KRpg7dyJHQwLCxw7hwNXVg4gh9vhiG1woLB3a5652aXbG14ULXoN4dZ6E57uQUs4hTR3WRza4sCLLjnnWFnT1",
  "key10": "4Ksy5W8XSPX7iKomHvWGiaDfBncxMVqeWspyWjAijp77fBxnFERn9NVycHjm1mk5eKxLv4JPgAcpJSd6aSqtRmQY",
  "key11": "2V8BeG1CBqrW7qxTEnoiGZTmWQVpR4DQ5WGj5va9ojMKmLJQ9LNwnDUDYoTxUEjT5csMZgLTBJ5VwcU3UXMcuDTJ",
  "key12": "3GXpB96WagQD38vz3pMWzzezibfSnzeqjiDydtVYpBw3jcsBrp7D2qJXHVNaSHjPnGJXG1qvko3oS4E38hnY2gz3",
  "key13": "3irmj2yU2ZbpzGgTKjQFfF2wwTZoHq56F1oRsPUbMb8L22cYS9DkyTFghGhubf6o3VT118VmmdLEFgD4Dyp7xSn7",
  "key14": "5vBVsB6DKvp6MqFH8nMftQ92n1HBK8p6LinkGSX1vUR4X9Y1oM8ueoLFsEv6t2G2gd5T2n1FeP9wK9AfMisVSUAj",
  "key15": "3hsV5A6XgZSAZdunKUEyTjLXQKRHiHhvJZqSiVZHGboPVXEpbS5R9K975aH6xY62QLgdqmNdnsPQDWmkp5ec1au2",
  "key16": "5s7znfMW8tCzS38KWBTdwVUTgvFsmYWhKYdeVbor6uEsKE6yxitDhL34oArn174HvgANyaw9VhyXbQoyXtfiabpu",
  "key17": "3xN8UMgkrDvXjEWjYEEhkGkEpFj6a9dPHNfjCqcF1pXbTwcSS3aTwK1q54h1vfL2eRak1xRiDce4g9bbDdKQFMtU",
  "key18": "5frtCTMxx5JpW8wL6xP75augd4g1hKJ2nqWJ5PLjEQjLENCi5MWowgLDTJ4x7cifjDHdscyF9rWGHcXuB2V4Zi46",
  "key19": "xQLrx3Sghuyr9Axvy8u9zvobNxfkFq4iGQQ4GWRYmf3BB7j5pgRTFoo4uWUdwwkPNZj8tt2QqRAz2Rud7rznX2G",
  "key20": "427TiR1YtDUd9FtJugifVUAe4xNpTAaGQnsnwae3RpSB85mFptfNGvsokKWweKKPx5mxqRWDitTcKCgYn6YF3GHD",
  "key21": "5eLxcd1ccWKbRaz2GaYg1j3WTzBvkq6YbfybUyN4xmpBbZaDazoKsF9ubCNnanUgLWBFADEYFEVyhbGEspUCg112",
  "key22": "smmd3TJvtqfLzuWDEgc8G73D3GkhUa2g528ZvnpNahdChXbqPP6ai1zckN8WkRwhJqx1GUd6PSQYMQcyGxL1dR8",
  "key23": "a5vDC3CyrKLH7PyN3UsiGkV78RwGx4EZxXYS1391d46qcnAqqktFmCGRMUvKEXF3Usgej56XGt8ydZmuyzUwy6J",
  "key24": "3BQT1AqFdPpuqsoNHhQhLZ5S8fTxjeEfw1SZxBiMKUfPksdBB7vUD6MTMqQ56qYbFNuXcpLdSCbc823nuCLeJ4tj",
  "key25": "3YFoo7EBkh5SWoCE38ruoDntXGSqe8YftPSdvqL9igqBC6VfpxRu2vWTuKsSHnNp5Tn9uoWjJgo8dHDYV1QVhyXr",
  "key26": "36RBxaRtPCGZNqwzGQGjMMSoHPFdevz72oiyi892nX3TzgJuAKQcYAmxCbrY2JsJW2PZRgggs9V751BAVTHZavky",
  "key27": "2WeRm47G3gUGc4i1GqXCajwGXrBhQkqQbkMvmsG6y29VpbJtruqbri3MDfauZ3VcyksPwjkVopskVpwNzisUcehk",
  "key28": "utcNmqdG1SRuvAXLSbvmzXnmeZfcn4t239dztBmLn3EjKtaW9xowanVqTPkyd79h6EThEYkLoaPdVpMqNeAB2DH",
  "key29": "3ghfFPPdwgdoSzdXWTY5uwcpf5Ld7eDj3AvheaTi8VkcuocvUGkLNF7HgmotnuQ3WG9zrAkGKtsEBTyoMBJ7zoFV",
  "key30": "4vJYxStHQWTkhD4dqV9B4V76oHxyDJHP4FDoEDm6nSQSCaTwKGAavR32EFhdwJ6KsVhMipqFJ6wiYt54gxwLFVY8"
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
