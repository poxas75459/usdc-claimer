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
    "2wPHLLhpFvMwcy2V5Tyzz3Xce3SbjxEwHA1qgeeJ9TbGXYVifuuRJW6aYh84LXCu55rKqfopZYSDshtQxhERNJgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WX6Z4TN7EqySQxjmDF6wwEumJoVcrfXTxtjd2rqisGaGCdkPvWFbiRmD9KFZj7sJzz3S9ubiNpbL5c6xchLBVxJ",
  "key1": "37sU42Yqs47VqaCAfqmJJ7r4DXegvtxusjv3Kus9XNaxR4urfJTAagV9bTFvof69pPzykqrpDh39GPkJroiCubJV",
  "key2": "3hKUXRv2QdMT8jDj6gZqePzE74WNU6MVCpqzeR5G6tWnNCPE5jmqSk6YufiWPRgg6fHvyVx7bAxNQJhUA3nycRLw",
  "key3": "3PH48C8ErJ4rz41freBUQFWknoVyCATbnVifiemEFo9hnP4N2DVhKrvKG6DHqzVe6jvCCDxqKDqNSY668CGkkxQZ",
  "key4": "DP9t2Ju5rvXf5WAThBRnW9M4HYaWaPximMg4beLM7cpbnrWQ5rUn4pykAuvmLPcM7iEH1zBCPHuTiemEXdsFVsx",
  "key5": "eJ7ZauciGTdAxfmYYWU1qmSKYzvSdysPFACEdEV65GWG6CjQ7G1Fbpzo3zBkhHyn9NFD2SGXafoMumZ4Wxd8dtg",
  "key6": "3MJPF1MhhDkKzDNLy4R8yo3FqbqMBcEtWGtQ88WeJZ7MTAVzdkh5N9u46Hk7YHmhUbwsBEwvXWx8TqptTZLoVcPB",
  "key7": "62K4n2d3Wt8ArwUJV72UwZ7Tn4AUwVnu8XPRuZLgQPskvR6E3uZuJTM4Av6VRGXmr8uSJkUaxeakAaxx8x3bFjgU",
  "key8": "4zs7oni6QnNz8pG4xQJFZ4mSrypdbQNtCyDWgJNJrSrptqqSSJM7XJKCizZgsy7Q2UynJe7t3F3SwGhqCYE9D7Bv",
  "key9": "25xt4r6yxKXfuWYHM9RFYejeeQyZNu4Qj5CSasjE9JJBGbuC1z36zWb54sAuVtkFP1HfUKk4JgDCAuVCCCgtNidV",
  "key10": "4dVKSuumzgfQdNvDBBGv1oimVvSTwdwHRhvK97LXDsmA4Wm5Ccc55pg8faNKZb4sAWsepFYf3cXMT8sWRYLTQMTY",
  "key11": "5w9MhMdA3NMrKdyauzyUz9HUUCeciASQwL8y99ZhTvi9ZaSNS1se7b4TNhYzWYhecTJ5M8W472w642R3P2R6UZ3D",
  "key12": "2gft8YLMjXnUmdT51Pk1kDGj1n71rS89tV282Rz59HeoCExC1GyPgUNz5GpUvUTiS8RJp1ii9c5wgFXs4XKSRNh",
  "key13": "5shFLf75KsaVb4iQ1sRJD9gEDVCHGvRZX96KajqVtpnAb5zqboLVAhfeRXstxQNt4dGQzMsmMRsxczwAVxUJsXMu",
  "key14": "3gFE1WiuM3eMVnzp3qZFEauPw8gHuXuEMnjEJB5gnTX9iYKK8MVfXWdXt3JpcsNuy5ydENr9kDj36RUE8HvFj7Au",
  "key15": "2DZ8o4mDf32r259F8PfYYwEnZdQmwRs8V6RHhfsF5mECejcfoc6MzNkheqbGtBUSsT9S6S1mjsNuMzEMxuGgXBee",
  "key16": "4y6zu4E9qrMnUyDRk8mb7pRB95xLa7xPDKXH9jpNmQV4kzhFGTuMNLyF2RMFEvp1Q5yDPA1vNYVjT2vAM8sUjNYJ",
  "key17": "4JzPs4D66ZH6aSFUu49LU8m61RkVhiMSbKteC7kmvfyXgdnFfuu8z9kS8yrQZDpKagu6BpRizdyN7argDTYFCjiT",
  "key18": "4C3mx5Np6Uqvca8SkYAmPBazUiTPq8avrnXZoQdateDHKiMmCVy5hzvhJMNt4HyaAhZoigyJk6AsccMaEeSXhY8T",
  "key19": "LGTbvoeGNi3YcQwk9xH6CcRRkAKMK34wuSgPh1iTkA8Qcq6VZJT9dLUnWdtKgUKFrzo96DozRjYFj5q7VkigcWC",
  "key20": "2L5A13qSt3AooL9VC6DyU3WGYK6kNsiALCWAhYHoLCCUk4DuF6ZZ3gqcYDxkjpMGQGirSVa4YqsJvRzQkKh7Ugrn",
  "key21": "53vyn7nYxjZAJ8uoyWYnH4rST6djGgKBgV9oytKiDVyXRB5dGuoRKJMScTSLZaAaSRbQmnC1mRuGC6pmHBMvkExj",
  "key22": "2U5o8vQZdBTHdvy1En1ifdfcs9bPvgnfZrVzH7XxD8RXGRsjwxxxF8Gj8WBg7BmeKJ5YeBKsEarG5jFnt6tmR4mU",
  "key23": "3PsDqBhnLhFAMVCu188cMKNiUPJJnA2cd2gd1voFzUHRyRYQGSwicwQQsfgLL2yyZcV6upNUS4UNDGtH435fiYBj",
  "key24": "53UNHfUH6eaCfhojBCg2uNrGRXFtQ2MuZqYBQYCmPgXpHU9huuJtJoFCAK3AqnByUdKzaCS5PhjxwgP46V1M2gFi",
  "key25": "33s7GGaMeb8vyFK7NtVVGXn4D6tr1afcDrYLQr4ZcLSs5Aqb3vy5KBuT3CVkGnFpfi1zYhCpKNgaRg8REBvErDye",
  "key26": "2hTGA23oQZaYZWoKVqooMrzDxjAMd7xiDuf9YUkVR1mGJB8w57ZVEdWKioyssLVHTKwaPFs3npVKwLH3AhjLYS7D",
  "key27": "32wMUn2ywbY5D5jnLGAQauvx1cxP9wRvnK88pkTXpHwFVmjMmEjuDuHgWFzjDBRPBUy1DAmVWr5M4CD7iSdkPJ8z",
  "key28": "5v38RRwWLS4wKQ3KxeSeCEvMao9thhQqqJ5ZWWU9ckUu46j7stqEvG4VofFQhmk5U29564QtX2Cid72hQvc4RrVy",
  "key29": "2Hid88qmHzaYpxVrVaf1JN4w9SHMwvrcacbXgPLjz2GGVroW46m5R498E8Aqb1X79fvmUsGhEn2nVMSRPKNp4Vb4",
  "key30": "54yzD9DqC3SyH34bxU2tyzKJvf5KvUAkeyMDvCFeqf5pGGUqpDhntdZLgBwrGSCcbbWircGCFuZ5ArcWe3STwe16",
  "key31": "21PSaP8JAQuTExjE6ioG8AE9xR29heA212Wv1xu12gERAutZw2KPUnsQnDLkhgb7ghvCxp1dXXeGtCtDCahC6vMs",
  "key32": "63yivmR5T8Mue3Dt429ch7f32aqK961h1D2xdYbBcWPzUuuPXApS7yLtgUAAgzR2pXzS5Fw2ttnGAazhQdqoiwaJ",
  "key33": "45C1kxwtKEykXeF3WD1jK14Sw4a2HoH5sj1xLYikf9BWL3BXjTiieMpoEYwKRA45r3kp53Pco8Qo7jmpJp9nbPgy",
  "key34": "NQfFkAyHzTau26QcHM2GitmYKC2X5csVvQQvzi7qkqvabLbkEPXQbGv5yevs6uCPetJavSU5wcLyj7cAYYE2ZqH",
  "key35": "8PXgqobvhgUHpdMzbQP9Jn1tDTczdURJfcMRKz7JaydLqbqn3Zdkdn7nDVKKxjN7izKEg3wyXwTPAkVunv3hfqZ",
  "key36": "2ubDUP1zeF4t1ph6qkJHpooxhyt2oNC4QQSu9Cn2L9FQupMnLes77HuPJAsBBdeDpQb9EPno9YSyi68NfzzmGDhU",
  "key37": "2Wym9CY9TwwH9r85KqqTu4kVkGRqwWJqv9ApxVf8fKQWWxdnF5qw8CkiiqgsXiKizV5bx5TpmAutqAgFCZ5mFtqX",
  "key38": "3xAFqSgJbtDkFPmY6g9t14w7Up3GndhwaDs36Mu52XcaSxCHMhFcq6WJ8kVmuiDvFEkCgs2xd1UgWVVuuH9v1trf",
  "key39": "5wVzmV1UeUiwGGVnRTAtR3PN1F8F9e7qMTKvAfmqnURaq8Xen4T37sGdJDRoGbsFsFZFE6Y3rHaQmWwmubXqkvY2",
  "key40": "BBmrEJQiz73VVwZohJSoNEtPW3rRRfEmGkeogryB8h3fCpAhfyUSPZeS4egqjVp6B5sxNSRtJPmKWYQfkwqMRMX",
  "key41": "24NJR1RivzUTNw4C6PcGtUMLiGP3EgMZG5BgmkwDKKUSpACMLhMLjpzyiHkh13k9LJmfCdTT7YNuFSwVv2N45in6",
  "key42": "636cCZ92n81wEV3hyqGd5yuTh2Yf6ZWYBd6gsNcWnhonoZaq12oVirKuQu697Jd9QTdY5GfFy8w4M5fCohq8vhRM",
  "key43": "4VVT44DirZe1Q69VaSNQRnQ85ioF62h9NJEuCFTuo4aBEHa7RSkiseJfx7DNQ1LRXawSYMkQuNSBBFrpeN7k5G4X",
  "key44": "5Sd27diQnKkgFZDHzgpXiWn4Eto2EhUMZwdkPdQwaFLNbxNzuxqcGNP1MCL9YqkVDRuLkHavAdV4ZnNq1kU6fYz2"
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
