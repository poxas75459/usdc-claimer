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
    "2Wqb2qk1NKRAjysBP9TALLwVYFry8dS2tbfQWnGyQ78bUFgGzSFbkgRHT6LwXLRT4z7NpuwzK9iaJGTifGNEehUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDG6v3QidHEYUzH4SZQKWQmScpepSbc7sxMpDSf3RbsJiDMcuC4zirBDHHZKumg8z2xHRDe685vkH3B6YQJekVU",
  "key1": "34i8H8xH7brGD5ySRNzYYZbLh9somMCqk2YF6QL3yT6mQtAAqusoe6HRR7Xw94ykMC5HhjdyeshMwcZvU8Z7gNth",
  "key2": "P9KmdD7spuZnao4hoinCh24fXxvEmQDohQBCNHoDffE9C7nLcbRZfC4vaF74A9iUQe3aoN6TPoYZ7LdHYDUFUNq",
  "key3": "4d4oKBQsc6iwVJXmiWuuS63HCeu6s9DzJZxw9onYbJZ7KZ6XYr5VvW8F9ApyMDQ9cW9Sp1AZb2sVxax7ckfbNmVV",
  "key4": "47vJjWTEPzhwfKdpHNpXGu6vP5QxtddpUuwH7PrXD9SP8wNxDTGvpFfdKfxJxCL2jehz9cRd4oGA4pJTkguGNNER",
  "key5": "sBz4roEyWxcofVfqMeQhEqYqkRp8HGXj5LNRc84ytmMjm677nNgdi7CjraXHiALwmUWyAddKNiLRroL4dNwUQTG",
  "key6": "52bvUaVcCpXZUaY2qRYwCo1Z6qUqgqJ5ZEeUcxUFTgnDXxnzFoTFpnuTjLVyJL2AsdNAFjnUddjG5SVRYjosJmD3",
  "key7": "3nApkC4kPvdwXHYVoSRTj8MAvfVNoEdZ8Atu8q3NNE4K558qbcd71vHTfMLcsEt2WppUcjayKMUFGu3mPQLtmwrN",
  "key8": "42WgQczMqMQxT1ioHGrLmeQAcoWukXo1UkkgwP3nk53ht1tvWEACNXEGsqWBKboiR6rKwjWHDiUMVXt1tZXDbrY1",
  "key9": "5BBzmFXDkhwpPEMJBXpuRgCZfHVNxk5c4X38dEL5EJfAv5Du38hkmoxY6UipBmg684js31sJ8eBHNzqhE4RrjsUE",
  "key10": "5nTe6oTxMojkAxedc9fawdPQ4Y8YdiwuirnSbvDHj29K6vVJfPSt3SAEYwKmzkALV5MCSbZ7LPvaobTec6CLpNDH",
  "key11": "3C7dqHyeQpeDnC5hKLEGU8qBZQqa2XJ8qULWx3BiqWSXXxKsprVBBTYxuZr2PoR7iqiWGtuzyNeqNmjH1PJ8ruTj",
  "key12": "sQNAAtAW5wVcSGzdrr7ZXEC5sim4V2RquY2uRa5Smertw8X7qbt4rDXGkCcQK29ZE7QWtoXYq2FecJ1jERyEDGm",
  "key13": "3bumTLLJfpv7NbWBfs5iy2jBkY3RRS3watbVCenQU3UYz8PivzPcKCpUkFpXh6PEDQ654kQqrbzCnY5zBz7Tjcdq",
  "key14": "ymisqSp5jy9uxzRQs3qbACPxQRMpFtd3FmDcTPdTcgYmpLcbTHtRNbjQmSCmJ7VKUQzzYHb8cpc6YZEqZZsV8J2",
  "key15": "3y2oRMYprLbyeMbQS81j9PDpfZg8vYQdrEE5Br2GQuxdpjrY8rDeqqGvNiVZSYJTiHTCkG48HgvWCFGVy6CzbTyp",
  "key16": "5r5XgbDKFzvRYmHoaSs2hKvSH2Yz2H18twVzjwEt4bToZeaLoHvX3LsBhQXhfswVBbSfLTgnLdyyoiZGchxJWUgi",
  "key17": "4F3JNtob72mrEz1LYUNGnkuxuGKXRTj7kTP7Fhz88dSaCvd7F77MwsMV4FUZW1Zd51nUDWHfN6G4Qou68FFvxU6M",
  "key18": "2acEiEFnvsQq5NuUarwSqFeZYLXruNqiN5QnXqDMNbggSRc2NoxoH1LKjfkMxYT4b5535kvxQFXRSgwheFpNykTz",
  "key19": "4YJxa5QR2iw9ohCrtDzRa3DZggEkrP4QkSvvXW3xG3C4GF1QrcK323MYe4LSJXeczp5ArwcktCgPejsNhY6p8mQ5",
  "key20": "5xhSyDYAosxFiCuvfBdNDCD3t1hbUcSQxVdvxA6tK4a3e7ykhX8RVgkby2zZ3dsFmoE6tw9h8W8VjGxpTnS6jSeD",
  "key21": "3wfQGyjtXKTbTYnjKmjWPjsTtkdeeGvkftktjHp4QZuj4mhJvb4ZT5645rKeE49xs2m77RxFGwcCUoG8imnEgFoj",
  "key22": "49SUw4Xvs1UjWocrL6SHp2qCSYqJeNvj6gHgzUvgL9wvuoCTsEmAYMpbaB1TxG4b9YogWUWmsYdFRY3v8keEnmnt",
  "key23": "5m9b3r8Qh2UHP5Us5aJapH2jLyC53mKwBzov6Nj39nfZqB31QrT4DboXWpRgZBs1yvNEpZueS2g1HS5t9jnNn8Z6",
  "key24": "25tZrgqL3tMYueNuBzcppA2RMMPzddvkKEN1rVbCrfXcJYF6nNfe1A681YSgAdDYNMpN1YDQ5grNcKEm6T9dGFkQ",
  "key25": "4o9hFqiJBJXpwW2M6DcZ9iLP8uy2hd8wgpg1ajoGPyGtbCRX1vugNTtkCJJHtW8XXLVvYczcSFXgiaqDv4m9rmx",
  "key26": "3QGt3hEgMJRwo5CQS3Yp8nKwWrQBBaE63v5TpgreA2AWYdAfkVGgrHtxCrEoqra3aq2ApFfAGLZLAr1dY9tcL2B2",
  "key27": "3Hp84xwigAGzLVVgo2EsTgXHonyr3aQfYxfpLX1eptS3KfeRyFfLnKtDPr6D4k4VQVfxncwUXn3vMJDFrkBCd2T2",
  "key28": "25z13k2ZaGDN31PwDaw2DAz6Rxd6tDeHGN4WvpTErGJN4Kc6YnRu8Yyf4eRzpuDoPrZaVQ2mRsrMdScCyAaGKUre",
  "key29": "5N6Zix74VhHXFX3d5WWD1sEbr517RcCwSj26TpttR7QdFcMfexZnwt2L35D5Ag7HNSSR4veyRgH2mGPbgrVTTPW2",
  "key30": "3YsCVtGc3YvsZPx1gZ5FqULHApX1ZWBQCBhp7CeXc6Co17ZApjExk5DR5KDyf51t5h3bb56XfoseaeyTbhGR4viL",
  "key31": "589zkXCwU3WDjQ1vhf4kN9iu1FsEUsv724ZKvdRjztKdbHtCaAbaYDQsuXxTHzUgSTErFjbR4Sam6MmYbXtXp5tT",
  "key32": "Petoc4Rq8QANkGo7YkivfGeHZscBcwD1m46jdYcHHSjUByHVZ3qfjFYS1eGCq23jMHy7FAbh47dvVHoGYzX5y2G",
  "key33": "4JEjHGFEJ8zNVAnDUkDvcxW2AKuCncDdWS84kH6QJKMbeUhSXbgpsy6E9VWQP9gzUpzXsk9T1U4sUXWU5Jzxecc9",
  "key34": "LXkAevtyYMvBXePHmr83XZT59eCpQ2fbQ9241KYMUW1xTjujqVYmmFBu4Wco3LSHKN7e2HoBk7jCDckdjRSpXFs",
  "key35": "SZNzR1gAb1UCD6ADNkq7jyVsfJChjqosTuMrW693stBRuCvASoSrPfiVziLfi65xoKfxncxkaVyiqFiS35DQhna",
  "key36": "5aJ42YBikgTceYDoruoyB7qErDBS9Q7YKipXTcreJQxuuxU33qbPMDyUwjv3sH97xW6dcdatuWp83nXJHihqqd35"
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
