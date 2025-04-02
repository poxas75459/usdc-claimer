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
    "3HJoEbamPft8yUyqv91919ojB2JYftHWqGFhbXQCQQvLLYwWJ6xECKtTPE7LAv4xauJoA1enHcPh99TtqYVpkuyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sU5dKeQbAcGN8vHuaXbq2LmCLVE4Bk87zhb9RgU6AHGFGWRYPYoSCQWkMDtRt4RXcs51kjwthdERvQTJPFGSL8f",
  "key1": "55N4dkJDyDajdTZVXdCXDyg6h2MNraW5j2hZP6bYZ8hRicXRneuYbC3oyMFMLw1Vsaum5Ym5YTVanM2h1c4XpDYf",
  "key2": "21Fh5djyQReXdSnk8xtfGXLvZ9twMjhLytq7pDehLHgUqxVBj3Z3uXKPkbLTS7cxWJJ6gHQEXrNNUdgLNRL6qimx",
  "key3": "4jnigDvSthfCMiSWc8FHLCofaeheTwmdaSzg2k6v3xqUJAp5hx4kubB2M1kYtRkHaw8j5VJUkqUryedL31Haity6",
  "key4": "1NPqbodaZ8SgGDcwsnXVxJUWHPGJPEXHSessmK4TibQix4oiuyEZEqQ8C3eYHSFcKnSvUd9dKYtarC3i9yKL6ij",
  "key5": "3vXycCnQ541ytNwiFbUT4mm5Jp9pkZ4UUeeEkuBC9EvuZfs2G9E6GssiyXjjuRP5c7GjKrKHH24N24V1pWSeL2Dd",
  "key6": "3w4rYpUGCy6eJobs5GCTFHZuEuDyjk8Xq1yPEU3siSGcuW788EoVjbgc8RuDPAGxHuVbQHzE9gPcQzBTnCMJ6wPD",
  "key7": "iecw7jpptsuBP96BThmHLpxLYEbBSZxi6afN53D6Pn8LFhuMEbJGtqA24Yhp365Npvj9feS4czEm1PgVZkCpctB",
  "key8": "5opvMKSvUVJS3Bjy3x4dVVRoZb9SgpVBXsb8x63fqJuNJRLEQDqqczWWKmy3iLyU9ZRwTYg33gQcQWGq9iHWHtj1",
  "key9": "4mfU4trSYdj9iuULAfGotvpDrz9czpJo5gA7r2P7Mbp6z46qg4YTJPuqVo7gqLdg9umdWRraRPsdZK7w7wCUHrjD",
  "key10": "44MtD2e6dfAGsgax2wythD6pWXSZcC7NuJwCkAnZLNK5e79HRXW8M4NF5jy7qGd9LD8nvFKAtUVn6m5Gg192hfBR",
  "key11": "2dFZtsEbguBM9ezuReuf7pU9XrkmcUzXdzWSm3CMXH7hvBa9ocG59yjR91V48Vx2mJeoUCqRx8UzTqqpAKBhLkEx",
  "key12": "2gQiVpQ116TmofVUfM2ePREK74Ndhn9Y3YGyDL86d15fhxB8fdKhXsMsLyTiMFYPH7kTmU3WsTgCuV9ENCDDJPxE",
  "key13": "3PpqEZGdvYj3v28vamJ5qzUVd9f2mNbJAWpgeXpzTdHNKfr6AgLxTSsPaKw5ahco3wdh3FHJ7z9Mhz17wAqpm1RT",
  "key14": "3ryLYEsfoKSaSkMLia3b1puxzdHAy6GKEHp3P889SrmgGWbc8vHXv1zz2Fp8iBkUoQB5LaDyR327j5z1VASQd5cC",
  "key15": "2i56WshQ45ybLmeKFS5ZegXv7nU2j1PL69dhrjJrvcPPSY4uhPLjAiDQWj9AeEU1BWw5Xk3QAzE7udesirXyFVKp",
  "key16": "3nv2CqFKt4oiEJnCkLrzfPBnXsdA4ekdfXFw3gkG41uHwMNJ3UnZTdFyuVR6zpV9ULxv3DWu2L4M8ACpHXejo4ii",
  "key17": "3my9SkUtZWrcGDWQbk1xD8jb3mNSRMRKVis97bbsMwdGrAcwGr1SoVJipyxY2975vXqumsJ97EvrurBBnWs2vGiJ",
  "key18": "4S3fD8n4qbCDgBNyUTiekMYXBhqSU8LH4S8fbW4kGpA7mDvvQ2yPALr39mPPVE2qBakVquH1ZmcfHpqkaVyBLxAL",
  "key19": "39d4C6WyNNZkUazzP9URku2SuhYrWuvKxrD7m3P6XcFuQQ8V2xDxn642PKQT8hw89Q3n73pPa6JqinKU3ntcphVy",
  "key20": "3Hs7Ew2DEApy5nTBPG6qC5Rxvy2G1ysiQw9kw7GCgWRvPtk51G4tqyWQKDuzEGKwqyx5BEsXCMMCnucs8fQWMic2",
  "key21": "5w1W6qMqNmU8daG7CJZiFCDJ9g69f6p3hAzP3SuHJRCm4tzGubwh5tgd2pPEZ3oMmYH619HuyBx4u1SbMJ8HiVbK",
  "key22": "2pi8cz9QwL8YB5qmoESKtWUxKKbCPYLiq9XTNnXLJ7J5UobrABHenuydMybGctuHkGz7oLDufymTZFd2t9wT7VJ8",
  "key23": "exU5ej7dYbsXmWRGnZFsVR5ryABapHqsDUBXhDGF2WvELMT1HqYEWaRTnsLBum38hStjyFASRRT8ALDrFxjd1XJ",
  "key24": "51YYmdsV9bWi5Fx4g6u2AbZFqoLGkT3f8i4mw4ABwYuN3sWQUC3Wov6a1mRA8bGQ57QrfyGvUcGz8iCjQaEyhups",
  "key25": "59yWvfqUtXBTBfaxx7iHSNJ5kR6GSEgksEPKoxgBkqFj1u5Yk9kEYUVokyL2Mg9nCUS4j22GR7nJ3wiurSf9n16e",
  "key26": "4JuJEcwaoVNuYAAjNHUn46S77n96mTpGJEHB5BmUHjv2u7udHGbxUXSjGYmCYagTCLg8NQGefDSY3A5oD1dAnSn6",
  "key27": "wamAVQNQkAWbEAg3SAnWN7BPJM16kb19i8xmwRy9r74ARjpcsUngbY58LhHY4rpARw1gMsGpU9jBd2cdzZRgDBd",
  "key28": "3FEdfvZj23fBL5JpKGqMtWGwHp6woCcwGoiAan5QE8gQZzM2j8PM74d4FPPCHQmZo8whMovSZFekUdjCK53rXGR6",
  "key29": "48p8eAw8UFXxRuiEPRPi4ey7d8TutvCGGHuTmgbyrGZczZedpLADKxpv8k7x8jYTwS61kWcvTPZwvXaGAqj1Bu9c",
  "key30": "fxEGREh2gQkTahcjoFVkxpMS7GgwztcH8PriPAPD8vfr32EYXUdTUDrmei6FyWziLjinrhCUU4uPtfB2PMfbFxm",
  "key31": "FmNacCaKTMvyqSWaz9Kadv2tj3eYNNttwzjCPynw6gwcXc4wpPCLcGCRv9d8PbJ8tKMzBkmc1aDPNgihXHmwT1Z",
  "key32": "3s6AZ6VionNmnvijaUfLTFE5fGTEd2N2caiWWEFY4SzFUD9FpSmLNnqndwnDTfmzFxEb2XBd4q8U27T6Z9hgRjTH",
  "key33": "152rbEvxdEsSg54VSy9R5k2SaocZjrbsFQZj3ex2MqALMcrFyYRQUeLTnPZKhaB5SrP2oA9ExXnQAx8cUo6tVfe",
  "key34": "66p9uboyQA2YP9NXEUU5Y91FQpMLJGavakr5t4oLYz9Na5ubMzKnqCbKA4gLRY4CQf9Tj7ewapxm1KvznHK32v7Y",
  "key35": "7NvgXNCHGNubWMb6h1Sx9vjUiZ8o8PL1xt865A6CatgpWcCj2ayWVyBRTXmBfPjpaN5kZR6mLpjHL1mTA1NvAfU",
  "key36": "5sn5gAJck6WGW4MJXFPVHR8vN8K39yqwSz5uZBF2qTo5oF9Bmua5MsckdNJsYZmSQC9hq9gLTCQ1Cv4sqmKmMuaU",
  "key37": "3ZiY3H4gyxpBCK5CmNVyMEzbeqLRtaM6zXYbJxWZN2fjUT2Hgux2XuHPg7w4fQrjko3bqKHVSKJCMQvYYPvafW6v",
  "key38": "32QAfnshnKf2enpRNN9FioQeEymD2zHf6cKenRnW63m3vTcJ6aAQscRCAMCuaYJXLmA7g1Fzb4oagqjL8LhHx9m7",
  "key39": "2JZyk6AcQbwYeTWbrniPt8h2MxWH63jinMkyqHTfqBrcX4uKBMr6qXMRCxd9fyZeySNLuBKG5R8uhVfv2BzubHPJ",
  "key40": "4jMdcfA85owSqEfQeSM2dDSWhPCAhYEEjEzf8SzxoZHVQr3dm8gWDQz87S44EYEUeEvPmTVRHXrzZi2Xppz3qVY7",
  "key41": "MDMzRvikzKHFq7cpkCShu4RerriKFf1eSBQdZcMSwLAeJDNTd9QYe8h9mM4BqYZeXCmmwsuVfAKQc3ZvAuLPave",
  "key42": "4iaKYNuFZTsQMWYgw88mVKjprCJ9jnfYyzCZxEYgVDBu22yq1Jrzx8Jqcjh2mNj3iUGRWMC96NGhzqobvcdUDczL",
  "key43": "RWSM76xAu2xD5JL38f8Q9wpZcHzX5HJP77YhTYybwXSzhnKLRcfVbMuEjzf4eneviaJRBqcmJLfFxUiLfCRVUZo",
  "key44": "4iUsADZ4NsL8zfUnEt7Dpgd2CZWssPKkrJPD1LWwNwtzcdnebbYEzp488reYC7TSVGv8qdPr8KGgKkbRFvKkJgv4"
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
