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
    "4D8wZwLmJE32zRn7tF9s8aN2WHMRxjjpUj8vXWEQ1D5EMfDkhJU6DTfUiKh8trqPXzxqLF247jFKnjHDEbbw2WTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5aL3gANr5WuPPFq1dbsGrv4jJ3aqWnnUjELMUbUht37EhkVRxua8Su6cziaEZW3PobyTtzteGdP9c2hk7uXhBM",
  "key1": "2vJKvJFeiX4xkjWcNxbnqpV1ECHfhz54ygLYPc9tQ8A1Dmvfp6RbqZqZtLf2rKfRGN5E2U1vrNcVok2rcfJiUnLj",
  "key2": "4oqUamPB7FhZh5bPD8VQH3dqRNeu2yfJeKsjevvcMGX82jYJTEW8UkESH7eWmN8FkSgk8FpxcwRuRWM4dMV1zz7A",
  "key3": "51YWLcqrPeZctTZjkwDZomxE4U9fND8XzHE9yhppRf9QjvZNzz7YGzbPwon2BBWVryjABPzSSQwNj2VHwP4mq9JQ",
  "key4": "4hQfj81UcMN3APVLnKpAkoMag8cpp2sChzMNNGYZii1AgP5uBhfFvLhaDnaznQvvi2BB4LGd4wM2M7CperGYinmX",
  "key5": "NFYzv7thGTuLAg2r7crPuQwufiGDLiW4Rur2nu1uXoQfnEf6T4zqQQr9dRXABKHfbsgmEVGB5qU2PGbHhuQyqzS",
  "key6": "3U9RpzxBdsFYm8fE8cKXLLT5xpzVBpn6N29HtiznGUcyLKs2rR8hcoAKDyq7wGJaQCyQPTrLyeazuPsr1E6gaybj",
  "key7": "4QNBSP49N3oUZA1j7cFpAp2MbM6ya6Lx3nTgt1S7Si2QHotzRz9J9e72neqLBK46zrqQvA4Kg7iasuTZJ3U6FUFC",
  "key8": "66asJwrxpkf7U59cc4Em3PerySLgEW18CDbER5ZsE7x69qMmmpSPGWKZfcwycXc69vNU6rVTW29zU17p1wU9G9n6",
  "key9": "3q5dzLNRtXcZz8voUqoGt1FFf3GKZaD1htvYzj7CWA7w8otVyXBp8UXyLzfwL17WbGctpQ2AmNjoNNTSNKjdXN8",
  "key10": "655F8FZPiNxMq3XtAeL3Aw6ws7m5XCpnEpDH2b25kP37QENE3dLPDgTTW3XBADgX5UvmEhAN9UAyT1vsVrXkMuQD",
  "key11": "3f28ZBC5RFee5q29cRGRHVEpoX1bCyXoQqTBDqjNDP1htqAdzsKB493HSgpMbaMtm4uJ1XZbRrroLJBG8rZhtA8W",
  "key12": "21UW2ixnmCLrvfNBHmpSu1fdphy1GaCx5S4TKuR1h4NyL6iruMoLA5LVmnFd6FHh8xsXim3ZJ8DxXK938ntoq1BG",
  "key13": "r3STbgkMhKtinXns23d44WqhAPRKeDpszUNbLghLfuPVSBTxEzPMSVR54SyZZccRJAfXQeZmzzgPZvmTd18HUBT",
  "key14": "2wrUxmEkfWnhAwj2Fk3fe9CHTgTn2At8VSFci234cEBcdHpnSm2wjBc4Nza245xNoYa7uFyTg29ZfSmjfEPncZG7",
  "key15": "2Pi8u6n3Mdy1mEMy7CHythyDKCSMxXCjnrtXaegAM68epqXnTjvbZ8js1VEfei8J6T7E7gZYNKUJ21RJk7HcemuH",
  "key16": "4zzDeHmiXfhVTqga1ijbkFWnQZjMXxvZWqrGcUvyPsfg198sNnqoj27svX4Rq1wBie711BQJy8BhwZE8ugQDXV7m",
  "key17": "643FsbSEDnV9qxr35QWKMeajYfXYZp6uAJBjj286ocYVqzNSUQmmbznuXFfuBUVtvo8HP2GckcjjVGYKLKUyYwGm",
  "key18": "3peq3ZS7cxwQbLTi9fDoyn68fQbajAgFDPgsNR39YC1587jmhKoEZkyRUFBi5iKs8weYuQb2q91tXotHrpE2NrSo",
  "key19": "2zzyhR6VkzD9mnWo1QGZWqiBnL353oW4UCZtrCXBWy8Dyxm9kXK6aXjZk6GsHMooQLhQyxsgyChMaXy2vhtSTy7g",
  "key20": "3kiv7gGRkRd7Pzhm3a98ZnUCJwD2z22HLMEA8mmnwmRgwx5NcmLRCGz6Ni1EEXj1ouBmZpfCB7caAUPPVGEjWiam",
  "key21": "65cq14EoaVtN4dkGRRLn5ATGXsTR5eWsm5arLPnfXiw6Kf9vCc1YQA9oUCxUksrhTRj2JRqRbBPbw4mVZc8vFAGV",
  "key22": "4HzFPe2C6NiesXrik3bqZdxeNf48stpGHAPfF99MHBEiCNU3hDGFTDmUVPNbXk4vogiG7MzM7i8FeMqazBo1RDpp",
  "key23": "4jNfcYGjXy4CKDb9XavDYAcWeP1PY2G8qD5MGb6gAkkWHkusZaouXDaD33c6C8jbLuGsoDDt8W5jLRAGPUvGcyqS",
  "key24": "49K6FLf7kAC6Uv5unphbDJdiyG87bUx4t7J7jbTAx9Rn9wqvGwbcNXoQ7vP3o7MwB6Hp4aYRgDrmXBjYUf3YkZnj",
  "key25": "5fXz4Gz3ZA6EgZcaw3BzdtAuqNiXZdMg6km6u1WL2HcqT9rXbPcESYqaV5kCnmYmm44KXMzmXj3pcPQaLRZUxViq",
  "key26": "5sELrSpB8jKqP35gD9ovVabeRCDBdqvbaYZdEZnogMDwpMCB5DSABmAdSp7zQafDxBP8xJ3q6Kz7ccUFrHnoCUvh",
  "key27": "54xZQEYgDVWMSVukACn9ULt274vbyj7guxNdsxJMM1iyZdy3WXfHeEcbAm5gGFDsXhom66iHPQ78bmLRihiU3Xpe",
  "key28": "Z6S4iGDgd9xVg7bMGoDcYG1PayHmbLP9zduobMtDRxE36Gj7131saXLhnhoMKPj55LVhMHAzd2d8hbg7wKufdsh",
  "key29": "5TwbpXRehLi3648VzZBqvWEt5NCE3yMCz7immbGMgno5AUHBnHcps13eesDKtxFPkSV1iShvkj7bGxd2GLexA5Pg",
  "key30": "4gWzqT8BC3r65GrrMTGnaYqZ1iq9PmenKfRuNeCByzasLxujTiAzTHJfRom3uPq3htBn597zTAGofNYmrKDqqdvZ",
  "key31": "3nuK8FCaNvwg1ZYdEUzA1JTZJSywinNR44Kx9E39bB9DSrEmCY6N1K86dsEF6qPUSbft1w7QTG6uLv47v25YWFNk",
  "key32": "46m7KsM6xaD2xiwWsFest9TYiJqMh6qEPpe8oyGexNCfHGctavdTF5aqQ7ALvPmnJHVaMkLCZA3ZgShG1keYzfc5",
  "key33": "4BnBNAKnfe36yfaAaGK3kktDzwzYRseynnroN21dKoQoJf1XwqUUaKKJ6W9GgopdKJBvkLwiRzL4Twy4unEwzxqC",
  "key34": "64dY3gsw6iv8VmL5VmExoosoUadL13LwodQnxDFMfkajrYeqERCEZ3w1fXiQE79piwAtBpN6vTcWBhYUsQrqBWBa",
  "key35": "5N6tdV2mG1YeKG2a2A8ubDYNdNbhwvpPajYanMBWqfhtgWnL5Yb86HxYjHABaojyTgfC6fhc2xSPPvTB8U67FoRp",
  "key36": "R2C8C1f8aYwjpzwTsRgNMPrhU5QdPscASRD3ktH2BLoCewjqmwczYqtrrSTXbQh2wAZGNK8pUrySHMcjtpCEkti",
  "key37": "2KyqJ2uJr4VDbcAfEtruV2xURQL5x6QSk3HeyBSymdiNo3eiw3xMeyaoX1DQtGJ277uey42ik7J7HgFeXaC4CK5Q",
  "key38": "2XXNkLocvmV3dSwMht8wb9NYELz4MLaUe7vjah6oeKhfAkc2Trw45AUexHmAWHgj636921HmfX9nfiL35RFNyknU",
  "key39": "3hneYjoS9R7SxBzaaEjRwGY57wT99eEuBSk72MJ1WWL8ZzPxRZEAUcmD7RigzBuLhaDVY1La2YqVPgHkdJ7hPrQ9",
  "key40": "3mqgNmL8QqRY9TnSPppoMt25YB1S7gMzyw4mt2TsX2Jo4fxdY53kPycWk1RPjBVPdC2i6EjVV8VScYt2gpTPpEFD",
  "key41": "4znVhUbCo2hj4WDqYTcDJ8kUtpjbuAhWpND7a4nagpdyjQZTFLpV4kpGUwMhhYg1eifvkZ3C5CZwPNmsUxDtCQuU"
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
