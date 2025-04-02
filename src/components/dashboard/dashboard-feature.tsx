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
    "3p6khTtuLu15vLJzABwxE9aqA2yCn1utzELadCbw7u2JLntWLMNDgEpraP3srySN6gDZmCJb9sUyfn2m32SuEzns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHeuatni4vL1nVKKoGqhQW2wUVg9yeXQW125dWrZtBH4Ey8xEMwVyZm8f9B8E2ciNBQqyiFhe2sJfpTLSXsQFTF",
  "key1": "5FwKdsT329iRCkkBh9cgMeGWXmsoDh2wBVaLH63f9b9WBFCPTwyxHc6mLRPaRFs9vUybeDvG5Qku6TgF5ehzLPkH",
  "key2": "ZeC4gF6xm3Te7mYyfnkk8PM2pmQ3EMxYVzPHCp4Kr7FQnSjATxcdkLEJMknsfc8ZZqcusVJdw6KYVTuisfLdXLw",
  "key3": "5y8a1tV82tzX6dsKy79mxFLQZAvRfzthGrQ5cW61Wh1EPDDkbHdBgAYpRazdCHqNvFPE3UNWNPHbGGBJr5eyDmtV",
  "key4": "53C3Hq2so82GQd3J91nSaGBoRmjheL8f3eKd477LMNKVa5VQqki7KLfoKv4wbuAH6a9uCFvojvLAuUBRRyWXMM2j",
  "key5": "NU93bKmcD83UamUBKbfRSAC8TxquwBsabwprCrbm47qu8r2Q3fxPhBWv2sCu1yFUTBUsGCS9K83HKvd7Qe4iqz7",
  "key6": "4F7a2t3fWdjo58912CKKGzvLQ85gq4uNGVeM8Q9LEHpFunKkmmR7nyWpfRFAn5oVpV7BZ4TPoYPKe19RNd1eRhpz",
  "key7": "4Y8KnaXyNXXwiL2s2ur5Q6GEkVjWmQW8YYgPrLDpV3cfJ32HUpZThbJ2kiBUrumhL3h45hNgbpNwMxs9rLx8Rg5B",
  "key8": "RQbgxAcKamkMcfBZeD2VsuWhjVGhWeJ8KuSQMim9AtagPEpxehu1AT5KA2SKsNL7qaiSRNxRqxV2HKDpxftKDFg",
  "key9": "4iNKTgBCj9H2qdQcyAbER8N2fmhqcLQMph4aR3egQdpigwW4pWhUbNnxaqUjga43p5DkxoVMCAnW8i3GXytRCh2D",
  "key10": "4Xr549ce3PL3fGNQ5SJBgADNUzZRWo8ntE9e2skpnC3ax6aTaFyergqdxamLzJQT8WRQjgv7HGY3RgAV5fS5qCFQ",
  "key11": "4JAxKXxNcfHVF6cAspQ5Q1rp1hBqogMjudzmn4XhBJ3h1FtwPDQrPNqrqMVXQCaw9Gc8qpsJY5ZApCmLq4CZKSzU",
  "key12": "1KD8yRVKj42sWnKxTEteMq1hkShFTboW6nQEVuc1PjTB3JVeSrHWErmGzz91M3bLXs4Fo7Kn7CkFvrc2qNGHtS1",
  "key13": "4n4j8cVfpbiBFAiup3yJTg5xRCvz4VyuXW4qUwjzZasPVNJGAjKP9KdLou28xN3iPTqK2ELuK1Sc6HsW57d3HZAW",
  "key14": "67qUA94s2N7A3xGwhwYZ6rfAzasGZ9ibF1ytUnjoeUMZ2iAJUVKT5vrDirEJaxQMXLq54eH84ZFDJxG3AVQPPZcw",
  "key15": "3JVFVGkuvC5ZkwL2FwKP5DwjW2WuADg8bewRxfaab9HUqAMEvKENoPivdJMqz39LYU1pcpgjkRhXFoL9VKLLGduG",
  "key16": "4AcMoTwjVJ9Xr1T2hekMtBTHGmMEkrcXYrbb1zyjzPmUv2FpdCMjYmtFRYPerFfgUTSHsGReKWEVwGmma8btgTv7",
  "key17": "5AyqGxGLxbSfMkX6dYLhKPmTJTY2HHJSctvBygKCt7nLqCv36Xs7zHB8NTvddE6Q9n3WGv3LUzFEoW9SsidRVV6N",
  "key18": "5wnU25vK3Pa4KuxhbwNeycJcsyyaQvF9g2uYw9tkMG5hznJJVVU81XNgxDGvgsAiiD7dTRazm3jLaPYwBZYr4MZW",
  "key19": "65NUHTjUpRF8fi12kSw6hfF4ZtiPrz7XmARWnNhmmWfzSqf2TJzYmiqQ6FPdnSF9DHm1vbLuj9vCXcDPCV4qMhma",
  "key20": "6A9kiX1b6qf9hB6JgUBGt4WrRhGNBPGTPKA241u6HUcvgRb9ysDTiwwEx6DLVKZqdmca4cXEvgPcaGnGALft99K",
  "key21": "5UFAFLoBs4vsPqj3pKYiQheYvAy3vPC17NYrWFGMJCoooSkEWQEmAgHdqwBb8kQjPxZTn93nfR78EZkYNEwCUzXe",
  "key22": "5UJu4dJ3Tv7M4X19tBTo94gsZ12ZvAqZbcVmgjRZbpNyLzVyo7BXLsmpbZuQ184varAq2GiRDXnzdYUoKFcmDGy5",
  "key23": "42nMzp8GCLkuWkw2x231YoTgy3VjDDiyK4ad7KaZir8Bfhvbj885RKzunfd4Uuxg1H7rdiCyGjfQJ1sJ1YBiGfM5",
  "key24": "3TeK8cWM1KNErHiPLwRbEakduqb6DYao2B3xtZfPcDGSsqD2fS4UqMLVCw7bn7jaiRybEZrimdjV8RXcv6yhgypH",
  "key25": "5T7MuQzEcUAah8wTgNnsB3SrGECq8GMFN8aCouoGa31Uzipx6BQejtej3wcnXHJYquUhmrumiEp7cPdSUQoDXxAv",
  "key26": "3DHvX6FHP3DrsDPBsx6iNrBcBF95gkbGWPGnWmWZ8ujavVH7P9YFLnuJyaG3DEudHgkrupkDDCH69z53h5Bpga2A",
  "key27": "XzQDLxhnTrr6juSET5mUWnsTs92UXFMbEnHxWhbyTb8sSmo24cBCCfFZyWUCQMeoPwnocR6Nk3hsncr8i8Bu8Jn",
  "key28": "4LZjAWkR2hJf5g26JtMZFZQ27CBkhZjDk65GxDYtrdMmL78aTRWjrbVVpEe6GJDkSM9EJMmdQpWX2NPssr3dQwKy",
  "key29": "3VhLUxZhTTnPbqgLqPdAa1B9NR1vhuHeegxuQxgLyRP1NLv7hLRAxmtYTvwGfCqgjYXEB8DtUvcAKMAXhhPDN2eC",
  "key30": "3rUfg6HYFKs3Mz6DanPBAiLps53Z6wpgpNGzX8pAXz4PwPw2DQDGcxjQiHp4acgQPzhSZPmraJRKTnaXrg8vWvuQ",
  "key31": "E7qtHJdT8zz8uZumM8K7zXjKFgnJZZ5Zp7XdFjBp7mAP23LWkqXhaSZYKEKAC2vTAsSSMpAhTdyEcdq7UC78hXE",
  "key32": "21vYNNq1NAjjmUGasqgcgWeaZJM83PCBquXufAy2HT5v4Cb8GyKbWVrc1AMyn8svhG327H2yfapGi221suQsLuHX"
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
