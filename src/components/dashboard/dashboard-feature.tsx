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
    "4n8Bhzd48tCpUqyhLSiULZeWqvANmSAGNk5pJQLnZx1mHDsUWSJVPtNGjjTcZaoMLqFoRu1s2rL6sDRqrYbodAGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2hbSEj18LS2gHbD3BwTJ7k56HAY8eftKnxaveALvwTauuMhP94Zjss49dpbf1p8UZNHQiRzBM8B8VNkcrCdhDv",
  "key1": "RkCTZZRh3zds3UEx2VDKNtoXepiZ6UZ88EP8iWyTPBki5JpPhFeF7y4bibiQNBccX97V7WYre3g6zb5C7PbH5X5",
  "key2": "4RJLQvfLX5gJLctKfsgUE66vy8CRtE77rkh71oB25LgpCPbSakQnWU8kEu6N2RHMi5wHsLwCSxbr9A2cmhgNT7pW",
  "key3": "2hiRmbD8suRdQJihq4hCf5TYt8aARpfPanzs8P6w9LZfiiSspjnQdM26YxQtojQquZef3oyFv5DYKiCroTHSLC7",
  "key4": "3PwjsxWdXGYpPw6kzwNPyuSdWAe59mz7WXkgkDqT36ydb1C4FQtwKykZu2KxxhPA2kVVDrPzFMxM1UKnmmtwUqLy",
  "key5": "37SDbNy8v4FTkBde6hjk7XDidomzUcxJJnauCwBy6FhwkDnuQSHG5gPUq6pSewCx4z7rQFrGxqFbhiQeiYExEhVh",
  "key6": "q156CFwqCZ6ZCYZ7sgstYAbm1PraWAKUEJe64wnpKgidEnpjr4jhq3HpXbS8irq2R25CuuaR9pnVBsvvgRLiqw8",
  "key7": "3pUh1BbNppJ7kmSgMnCGtqzYVfqdECajRttEtd6fqSS59syjhynF8CVG6riaeudtmvj48zfVY3dA2qCvEt8m3oxR",
  "key8": "45yrstNZ6R9QgTTijcc2wX49bEQvztc8Qnz3bsCLz7X1SJ6qsp1HPvDecFJ5edsqCUJh23UuDiEtGFGFk24sMvE",
  "key9": "572S9uoGnqtBhXgKmAwqZ2ioL8NkDYNAHb4MPiXzepC94kjesG7UcMNjeEH4H61KewnwKNogjBQfBk6t6M2bU3go",
  "key10": "3duw5q2MxecEM6aUac3PTeH2SJphsQNzawB21pit9YALTmPC37uBtRK2EWfHvJgUQHcoUh9xEa3XPPVhKTjE4b2U",
  "key11": "36kuVQ45WUbggeH4TPqmMJkvgeQgsTnKg5qRtKeB9xdT9orDiJwWXghnPKEogp7Y4c4ruGYVxmx3KAjAazMkmXKK",
  "key12": "5qBUaDw3Szh971vJi4qkfottqrFFy74QeaYEgaDv7e1GFGH2EMnr4MoT7fnKrd55UEvwX2DXHbYGo3HZ2F7RHQyT",
  "key13": "37GrukSTXVLeJrKfdbmCgK6DfhXwAPvuPPyrXCumNCcBEJxEsJHJbBonFgknsv912vwLBpqxhGQC3Ck5d2vwpoNy",
  "key14": "4yjPuLNJ49mpVeVnjoULF9aVTQFJRW7pEkgekoosuSsymr4a7FZoSgy6RixPfHrBAPVwT6GZpeyW5uXVggcnmVKx",
  "key15": "sD9tBrtn3mbDovFMKiFxhugmjTeRSS1Ru3rUEs5bGj5RsBEcPgcWcinCr5YaayQv8mGap7EoN1wKUUaXRvjTkbL",
  "key16": "sszzwuVjAR7DpYNfkt9bqvBECtHzXNFv9hgz5ekp7FtstzWto1kYC5ZCg5XHUx4cDKKrSjTte8wWqMPP6hQHejM",
  "key17": "54i2tP1QtQ9Ev7VTHfJdLFWbzVKCMiKy1MSSrhKeE34bKQ63crTFV3yyCayw188NPoCvKdgebJemzE9kweqicByK",
  "key18": "3bXhZjtiYUr9M3osFyhCG7Yf2ex7Q43TiA7r3jYtB1nWjRFdkZSZ1PJ9GzXapd8KSVfXNx3w6sovKEzR4oAYuid3",
  "key19": "25uxEFpXHQ6Yy2pZLy6D9doHjTypsoC6nGs8b8nou5SCYfCi3ES7RYvsbjDRGzU7VG3csmUp6ZMqsvicMMvVWN3Q",
  "key20": "5kewiGRa6fZQ5vE5c6huzFX7jcSZvTX8GXtKPBVDN3yKjuAsrijVZkzxFQpep1FCqnmKtRMrdC2Ny5KpVdDD6mo6",
  "key21": "4EnY6fVznA5JoPLZ4XhAuWL4ARqr5jMVdJ4T8ArbcTdkbxqAdKKQmRKNrCrDN8NgwnQ8G8rBYBfg1Qy17RYm3YoX",
  "key22": "pEhSS1UxKC1exDaUKmqUugsXmaWQtp1gtwwN76YLMte9MYuiVXpcBVtcgoGFq1x61rtFyEgiDQhbVGx66SuUwSh",
  "key23": "264r6HNSo9gs3MJ7EfheMrLuybYcrtbnPkD1KAuDRf95ZqSk3HqpXFnRqcZkEgHL3sDoYyZ5bpfJaESJrGpbA7mv",
  "key24": "4LYxMKU4g8rCH8nfxoEX8bLro8wF8R4TzaH89f3JWsAULzhvrMk8QP5VKx4pVeJntYENCaqqWUBQPvuMmV93Ehg2",
  "key25": "46TecuafrrWKWVGwJbdsNH7PGRhG5eHxi9wzds3kSEuM3hxj1mgQuHo7SAWo8w4UJ9uTcD5Kves2TzEAj2giGMed",
  "key26": "LmAdLGR9jUtSqS6rdbXkZ8eTUx9j513eQeWczkNUxtAE4cQGxQqn6PMUDpyYfwJTtUz76xyXVF65dkrKnA3GAQk",
  "key27": "8miD1hAu8mY49vj1U9z7USsGfY3PaumUvbXrEYRUroxSkpJQhroJjJREydNwwStyP3bAdJ4v2oiMvV9YCayuj1q",
  "key28": "3STcvyRDR26Rv46YNFqfazhz4s1oR2j3QEr9Rx631PrXByxC7Qy3fFqBK4fUSB3pUdfoff8avAxj3kTi629dkhAk",
  "key29": "3zkiAc3XifPRjiorVb1igPHymPnBi2nEzJdvjnEUVWVg8MKi47ZifyhyW93KARhUb93KeoaBReR9mRxaVJCaKyiH",
  "key30": "478LQp5F8bhUqtHXm2634aDmRwnUFJy1LtYQCgewAQB7PThpjnHeeTySmHaiKZ4vqXt7RwscoSWdt9EEPDsCo3m",
  "key31": "2M4B5pKNoZGCWnDhdDuyYrUHkx5h1cRYVsyeyRpy1u1LiJVatdSjUPfHvpWaVRkntqFmM5jmxsCEvEfKdZL9fj3N",
  "key32": "5psQs3rGMCqZi3Pi9dQnAEv3KM6YYrSMgAd3RgqRZCL4mCxBhN4RXVKJEdq6bFTZvn8TknGiAVED8464GRpxFhC1",
  "key33": "4TCFBscw6hXSdfxfFsKmVk9yK6LxF2yZEGAYvRL1bQSn2KxHnNTdFG745VLzLSVDJ6h5JnNBa1K2LM8ASrmiRyfw"
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
