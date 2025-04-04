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
    "26SrSomubaj4ny4TzGx5n8nqczqGGgJpUZ8kSYZRSUvoVt76LaJdRdwskf1iuJmZJqoigi8ihJvMzZX1myWhwPpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjH3CPb2BLkuxyYF7zWW8MWFmsBHanizJXjFLjGin6ABNnDtbzQK7yevvq5eD73ea68u3Kkh1RsU3TqKhNBdu6",
  "key1": "29S8y6N5625c47GedJTSX4DNLRV3vHoqmpgWMPzr85BWbomfRaz7ztMYuywMxUeJdfCkxwEtHNtX7FETFgAURTnH",
  "key2": "2bXrK1wtxBKbNmZH54SsgmaTNgF2x9ucAyD6nEWVyqcHftPHDmPi1NKi75qBAzgu6bXeKHMN4iwfmL36T9b4rMAa",
  "key3": "jxx1s9iBAWAtd4gF3f9vTQJVoR75QHD9MACzToDbSN2gJ5uEn5r9bazXwzjPK9DScPNcZWnusFKh3ysKbghApYT",
  "key4": "5Hgw8oCzeEyaASApvzztwWqzQdhjxYgneK311qQwmFz7LhfHgwsWSy2VtckfHwbTmz4ubgFRHY9o6aWNfp55pN9x",
  "key5": "4C37245HGxzXiYAUvRmBbrDraSJ6YF9CkW2ZJqSAfaAmonQdc9howRkfMGUSSrvSY2H3Nzj8qANwBfzkPptpZByF",
  "key6": "2yRZYgNdHZ7jk8LRD1SGLmiQTB7QZTWCVcjupHi31raQwaWcTvqh7DGfUy6nWo8iC8eQsy1BmxBMVo26C7RQ9PSZ",
  "key7": "4x6KoXnaTSoNzUwZbr2485Mo67EQuE9TWMph5sS1EJ4kroxtGQYuASrQfoLS6Z432hCp3mD24QE4Qr9B8e4ncMjX",
  "key8": "2PQzUyiGm8uqWyr9bTjEY99GmgcfK2CWuuL9BYk6xh1DtDNAi74Ur8D54mSdRwoZrukhv5gHpmSSq1xKevUEpD7X",
  "key9": "ATMtyfp7EK3kn1xJUJDCyZDAisF6NXJ1hoakYk1ut4prSkqUcHnPiwMrEdiKx2wfenqF8YQuARTRd5nXFpMyAJw",
  "key10": "62e4w8WiG4Nxky5Li5PmxkbFKHeZoSqsSR8mMtmLVfrJ2E3FkJT2nZGLB8sSs8HScqQeF8oXFd8yD5N6BVQK37b8",
  "key11": "2PMgn7NcQ4WZcTegMf7ZjXDwopd45jP9FCxt5UFHQdzEbKUbBdr1UwDkQiLqnWmJvAbT9ZyRwVqF38FKhXSejMeK",
  "key12": "5pijjhjDLyfFMEWcPK7HPZomjHDf59K4TuWWbsdnUh9gDQYuSVTE4pUthSzrf6SmokhpQusRt1uzmXzHFGxC5W19",
  "key13": "2Ck48s6ZGu4wB1N7MEkDsWKh8GnUhufQFvCemVbKBvsdNtKe8VPzG2UkPHYeqLTTUon72APb36p5KVA6ifRKmTcY",
  "key14": "2UAhmLbRnjj9GjAZqAYizzmSYV4x82tBUi8SE1QMCD8WsEHnctYC9W7oHVt89ztiYHC1GvcvDFuSLr3nWWVH2jh9",
  "key15": "2nb99C3xwQvaDhp2wjz3V44nkRHkYMJW8erC178Nr2CxdxyYA9nVvqKvizQKc5LymsfmGbu3JxLjE521cqQrHxtd",
  "key16": "GFTDnfAowRgnoy8vTw41CGSLedMJqEK5P6bpuRcyL8bk8CiejsGuvWtXt8EkM96Zyk8Q8zd4Rf4kBNvDiJcTAXQ",
  "key17": "2NxR2xSnTkAfSUMzE8FRugW4yj4UXu1dkJmKJZ7dk472VctoXGpm9NGrAiyeG2FCtuGTiCoCxRfLTGCTBaNHRpjD",
  "key18": "4AGuirfcN9GJ98ztqeMaNbkFAXW4wU229i4vCNo3ysJdtPXQGPE3Uub6ddNVaHXTzQRDnac75NVDosoqXMAzoihw",
  "key19": "3LvJg6HYUxU1QHKPB9DHpy9ujF5MvCWNgywCyqnSiwmHhJJ2AMbkdfxY6Um3CAftgLKHzxAu7Pcz4YsZneYh32aG",
  "key20": "5u7Cas35YbVE2oP3rCVM4qgE7ew5FvrpiWkZEM6eP3uhwLKchq9YceqqyhpCg3HnyE6sENW8KHc2nrC4LHmpBzik",
  "key21": "49Ltw7wWUD9xauCLGyBGFuqntWvdUWjBhzkf8j89gMC2XH773usD5iJoP18ksnoKGZV3og24bnvjsr2PW8AJY5Ex",
  "key22": "5cQUx32m7gkAop6Q9FtfrALUFePrLmu1JPQ1Km3yKyeexQvAPpmBSVngEYKFf7poKoa8sDk7rsUEdS1TtB72Utyz",
  "key23": "gTTgm1L1mS8tMjirii3ue2fKgS55rnkAG8RfyvbpKqNmRabpaushax4LNqHn7u1emgaaqFZHJ5AoAMzFAUGUwkX",
  "key24": "2iXFrxBLouv4xY6KQKfUWYz55iV5EnmhGavCxBNnx5TyA6zTXH9FTJvP9TP97XNYtJLSu6RvBeyzRSq88L5cRCfZ",
  "key25": "4ZHfiLhbFLpfamvH59XZoi5FiuriPdi45d9YfHW2Ga6AL8cZxSANReZ8RGdecCAJzHuTNs5apNMf8hBLBfU5etSK",
  "key26": "Gmbr7q3Xe8fKEydnethfZPqZNXdispJY6sXensxaJcHspWRmrUoWer4WTxCC3ZnQdd3YkcsFfCJu6hCr6hk4iAZ",
  "key27": "2TohEXFf4ZnW7KECK9XmnzrG9wFaqE3fgsQ3dsB17dGiU8kNt5F4zkhYMHkTf8jyZ9bNmUB9i7BWGPQ3hVQ4eZkh",
  "key28": "2hzTW2v8t4vZPLjJo5YC7CCec9nYTrt8AK4dCcK6btrWuGTcLtNa8FSdTsALmGXbdhicMeis7zadzM47HEFoMosw",
  "key29": "2HwL626zDxUJrQnii1AmH1CX3o42PaAc8yNYvrwbko8P3VQx4w3ZmRq1rXNhrzDDvHzvTUTWgE5AXaMuToN8H1sf",
  "key30": "4wdjkbyVmDoGqRtDf16gZVsWEWBzNPf1etwLktUYaSDh5bv6TBEX9t9gQJyvML1ZxJBkohrCKTP1vTvdaAK2Aop6",
  "key31": "25LA918fNaoJuRNpxESY2iHH8y1qc5J43V5mS3mJ6EpiD52Jn8dms73d5wjDfRQWRn26Ecig5Vi6hrF8nQQj6LXn",
  "key32": "2ta5cKZvGNGpf3N84ZxBmcuMzDxdrdL3dz9KznzATC1M5EGm6idN8AYk3VfMoHugbg331z2uFy9Kkdod6FU1GrFL",
  "key33": "3Y6E9drDHF4r5duS5rnrnNNJCHVsByNeTUFZcg8pJdagwDZ4V2b2knPEiJ2n4MPkVA9c8DiLbyXQJkdmvUM4GFpY",
  "key34": "SE1eVcCXbxW7x9gVFrJroYakobz2y12mvQKddTVtu9CMhque1C5U9k2RPxD2mezvejBuAcwgeMTRqLVF8N7p1pX",
  "key35": "4kpBYfbyoSFA59TdVa1V4FuqL6aU6CSYMj6eyGVTwZQ5zENWJbcdLiLDbtBD6ZUo2o3YX4KJF3W6tiuw5A2AGBts"
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
