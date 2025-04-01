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
    "Q43L2qp9svjmNFJACHt2zHScVxPKFb1MXFJTXUz94cyS7wjA1onihDQW8X9YJPfUHULHMSYzAa7Jwku3AWdpHoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8iWj8aLYxA6J5iMuyBKzvJNpLH2JR4LAHGGcVy8QRuboYEZPMpDuJqmeshZKZtcNqTPScpz5LohEMLeKE3Rfok",
  "key1": "2aAooUrxrEUbDahmGfSJ3dxZeQks4qzK9PnkkKbASWJ4EaYesgxyoK11bqQdpVDh3B1A3gy4M7qLw1QW4wdRinMt",
  "key2": "5jtqdRM3RiNGxs9LkvWmrDXJJLK3WQnkgxjwiiEJmUdvBryacHk4NMJPYTSeJX72MJRndNNS7DcwDjxN7YQhGE7y",
  "key3": "5m3WqxEh2HQwAf8LYdxSD4qu9ez3igd1HhKXJq3tZ1i6aAyG77mdDnZ9QQqXfcSv38usQRiuwd988Ehr5d2A2Vs7",
  "key4": "41yabroticKfjs8tm5bVVBxb3NCsJXhHyLouxeHnSgyJ76Pn7qcCfQhzvi5Z35Q4TXTYr6mDzYAXNuFQYQNkMam9",
  "key5": "3eU4Eu1SJFxQMmJQuvA5HARcMATEi9743U7y3ZhiZfQW7SNDBKM5nDvX2ZYxsoy51CKiW8qn7weqcYxJ5HdNdfXo",
  "key6": "2LerKZikmio5ctVVZeXNyyCygDHQKnPfrTTHA6hutjG9svQBQwpdRrwsZjhw8FX1QfxVGiHGbTPgndUJF863bhxP",
  "key7": "2DLfitXeCeur6bfEsE1bqUUtYyf6LkyZcXvF29JxUuFBj7EPXau8Lr5hSP4LjnnY9bfEVJGZdKoaEC9zzmxFEN4c",
  "key8": "2tz1BzXnGVqmGHpKsGgkrhe1adXxSrTVx5mqzAqsUtSCQiKyVmYcJZvkyF8qG1F9dFFrDEXYFJb4QsC8Ex7EQsrA",
  "key9": "4eV2N4PrnwfLSd2eyoVQL7RgKnX1bxFYAavBPbyWmxCdivtZTDY8dp3gVi8w1fpqC6QGHTkTi9Yju8VgHYuXDoBp",
  "key10": "3w2ipugPB3Kbkx1YLbfbuxX5hZyzHqMR5vC4aXq7AzqBnEZmQMmeb7zVwhbax7qdXKQxp9vKKjh9VVgZK7bku36n",
  "key11": "4VWQmKM1fMtVy18MEZ3FzjfUSF9pD2aE6dFFu6iM2qrg2FvEjYfVKCzKuesseDQn3emhdXJSK6qbfksRJqpNNUEA",
  "key12": "2UR9YpwmvXzedvWcwekYACQRUNhhY21sCmviiSasbVaDvuGNRi9YbbqL8sjSJAAzTW7mxx5iCf4hhV9yCNSuzCon",
  "key13": "3VTJv7qU4nWb3y7GXtQH4JViqpKhL1ukWMCRaviVZu38QKXrrGgsCXsywLtwcNwZsmsVjaBsCVAxqcjGf1SjnM6u",
  "key14": "2sP7jg4fqS4sHqGmiwa8UydwTthW9PZtBcANec77LM3Gf4LjRgqsESxPvDC6CE1WusSUULptrm6kXeP4rukzrxhP",
  "key15": "4n9ZFRMTsU41G9Uoi54XXrkrdBMsqkJLfPXE8YWN5HeX5wtiDezo4WZWW6iRi7c6gsqpuNbHiPaKWYbhfQnd14zS",
  "key16": "5oVqNcY9idDzsnNQvZPniUJ8t5DqLgat9zr3DZn5MGMTBg2b8q4hCzBg9NwwQieFx3Qipmi49HuM1wGsyPCnJnxR",
  "key17": "2dzy8Uq6iVtM4yqRw6DmcufAuziYRw46ez26pitse19mhZCY4VmDVVLeZbDtEJG7np9kN2WM4JHC3W9Dkyh3usBE",
  "key18": "4HtuHDTAnweJ46JUm8fg4r7oEvV5FSzDzYanh6n4HfBaG93TYyZyN2By8SDo4usdMUVn298vB9yVbGexweVmFxKa",
  "key19": "2T15Evnaom2grJrBDbdmaPKgv434s3ZSdoLBhBtzxgPk1ng78QNAgLHaufifrPF4ZHpcv1LLLhKyE277rs6YmS4B",
  "key20": "5BSNmbsLWHRVKgg9pcRUppiVMUj9wKJ3C8kTYDkf4yo3c2hDMfqKL22fPPwVcUEswzYYd9r2isayoEtj4w1r5DLm",
  "key21": "4kMd4CgjWBj91nsmkJVU1HJ7j5Lq74312ya24UVUa2Kpa4FNwCHj6TuzhTScHqzi8hqf7LEDnjJEQ5YMrCPwyJXR",
  "key22": "jGbdZJYhiL6uLKxVVTs8XA8ay8Er6Sr9Tqb35Pb2CVK6DdQZESSPL8LfM1MCLNvyQrwkMasuaiZCnisTs3exqGW",
  "key23": "648izZ1zymHwLnfWtNJXPDEfy8weYrB2H2q8VYwYN5MKSPUMz8mq7CD5pWBK7Vzkt9e9JKeTUFicnvv6ByYgtHxL",
  "key24": "62rLiSpNaYGqLLLdNHM9Ute4BLdBWyr7EikwuCdKTbMPrjw56ehj2i7PdDPUhSgQtsJpvsMRRGUKd5q4QWmqB8Tt",
  "key25": "5vJMynGQwnCc6bZ2D635iD9Md2fh3D6xywAyDorzx4nc4bQM1BPMUYSE8SLSpvDWXPdM4PJsibhGSXfBDJC5HCaS",
  "key26": "WYg1wU29j7ujs6ZFzf85w2vqPpcd518RVv2PKEvbgAPmBNpPLDL8o96ihP5QDUDTGgjfFYoyixw8cvgfgBRP2zt",
  "key27": "2Zme9Xp5h3zV7bYU7N1sTM11J7ZsezH8F5phu4tiiPGxceyBiMgveA2632CFCnTy8ErcrEUqKsA3VkxYYvfL1cBR",
  "key28": "TCeMM3A449RX9ZHxr2CFToSepvtLhAEvDxYEp64NogcPWSx8D6xoaAaYRxuaxwUfkJy3sNE2iD45VSqv72BDKci",
  "key29": "4EQ1Ph1iiXSberv1m8jkHU6BbM7txHBQaPcbKq5eCdinp5aM4sX34PYz4FGs4vgL12Ck6HUQyAB1Tsrc7567Uh8P",
  "key30": "ViR42Cfh7q4AuW4ppaUakQjKbunqqwzU4H6m7SPSyKpcMWSMTvvv4tBdH26DxmbYaPy59abHdyqVvvrJgncsHtb",
  "key31": "5AXVKx6joUqkiXw3bDxuoHpJiX1TyNgRr8uA7Y4JdvoQFbV2DFsZC2nTQAqtjqp6Cb1G4PfVwsQ9r9uUXFGSYKS9",
  "key32": "2kWhzvPCj4uf7vsxLLPQSUgHK1ecLgb545sALzhkaRZh23sN9YEQarbvUbxzKxJ9TheWg41WZSykEdxusCt85hJs",
  "key33": "2cXsjuAj7YhtvqLEMyfxkytYimQr23NHtV7PzwT6QFCKNDFthg9Wja6Fh3fkX5eza676yJQsv65Bm2M455aHnayM",
  "key34": "3UTJU1mdsieZ7GtCAaM6t7dx6fND2XeffzDwBo2KcBDS9riKg1kmmzZSYXzVGuSVjyPsPng1xCZ7tw7AMJtbWxS6",
  "key35": "4qx5Yg9gGhsFnG8ceHvFutsMfsmjLCxctZZknDWRrYLpTZf6w4u9wpwj9sGxWTQEVys1sCgSj2zWgLe8azXwbUAb",
  "key36": "4KTdKoqntzPpVXTGraFYUbujoanvAa2vd2YG7eMkiUeJ5pag4tLf6bQXFbYf4GvjzA3wn9M1sBogGfKoEQyhiMT8",
  "key37": "2JoCCFMYHLP9zhLMmgPAsQriZJJuFKyGsGXrzqYcSPSjjTV4pzLQCYUQZSLN8TTXPAH5nyH8F5aTRBh1478iAp8v"
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
