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
    "fJyMS2ucMFEje2zVWMUrVSgHKXokFukvhyZaeAgMB3SmV4Qkpfdy3mkHE5SH85V5aXnw2gwFExUaymft5sCGwTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSXKxauTGJUdimafkH2FNv5xHjWKkge8tkwdX916JtQL7Z3QxGqvySP7H5UJsq1kmG4LPKjMKy4Hct6FhJJTLCe",
  "key1": "2iFfwPHaFu7V7Cun95uyMAfkD19mKoVE5zFjUe9a6G8ToTgVxJWs6a7bagBe3mrkYj5HiJWFSBQ7oUGWPN8CsPjy",
  "key2": "2CwDusHrbyNKkmpApEibs5sGU3WcTdUE41HavBvoqnhVecHiydbCdQYf65X8HpVT4k237pwNVfPqBtB7wZZHgVFs",
  "key3": "5NxwJeVrY9UoXiBXxG6wjcYiUxtiFsHuSrBnPsxVRr1otcra1HCZ1M9ksjbPaqu7S6LCpZTzB5A2ogfbUcBDfo1T",
  "key4": "5HGc7tAcQtU3QScvjj6iGdufwWNuuTmWqJH63RQjdUGb1jytvZ9SSCayMmUGrHNWtgcJc51wicNB1ciqbSaPPzdj",
  "key5": "vX3eXxeQehtguR7rcxzCMQqnerKzovvWp2dvFmU2CYzUtHFamodPxDRHm1qsihFyYNphXQoc3f7j8qkCQoDWY27",
  "key6": "4D78m5EzDRcmtg3Hyg4kVxKEnhSbEZ3uiwLAWp85Nry618kAXbXmwMMqqt62ZeMr1nduaw4zFp6owZ3kN7wNqa1P",
  "key7": "3jjkPBjFED13XeVfh8Z9gKBEdkiHUrMbrn3XEXekMPATQpC4H6zmQLbtkYJj5P4UWUhJq3WF1gr2HvavhAu2HFa1",
  "key8": "45ThnLW7QcaY7teBVLBx5FtCJKDpRjH3MZEqTcQHnjUXzkRqwQpbQ6nPbpE1b4WK4vq5q6SxSdQrN5q7sizUSvVh",
  "key9": "3YzXHkgbwXzqQskmqcjZR3UmQC1pNZSzepf37ZP1hbHUcs2JvT7ksqDNnw2siV8LoKkFSkrE7Wjk6Y7dVRMoFCkK",
  "key10": "3TEyJEGA63ReLCEEBFrBvBuUqnJ1v3U4HqrLeNhztgvuSgBCTjQuASZDm2iWCvY1oCMLKJq439fpLqk4TViqFt6",
  "key11": "VaNUMfHUS68S74Xbs22CTWgPFMGdKdJrYH8urQoF3EacCfbjei1DaM414d7Lpp9MaTnM63K334SZJ3AVpvmuySm",
  "key12": "5vgouHXZqZVnjKYv8CneKRMio6b5CvXRPUBpW3tbnx99BuMPgBCmhwrEiWKtEDmMh2NnSCKy29iJ35tJeeNqwpVg",
  "key13": "m5imEuKzVcGN9Fo3z4d8V15dQCVNC2wrkPHNqeYA1kNTphG9WySpaiqb8RpWYPpvfPLfKHDjXcVNP9mttCgAAew",
  "key14": "4N1BHQjPhuoPSSfcAob3QtPNpVxnaLLL6Tj5wsm4it1B4jHNxmfr99pue9t4sPAeQhVmFRXGKHq2F4yGPJxoRSG7",
  "key15": "4ThFc97wzki1S61mspZxr7wVy3GJPKUcQav3aNHbUfxAYBYRPAg5j7y4LZgtpzZKuCpmzhBSCVYVVfEEF3F8vWg3",
  "key16": "5pR5EiuS3GvCJAReKDKLFZpbv8ZEnpe7fHerEBz4K9aeEpmHeNZfkZFqzJTR61xJutEwEXja3Mu8KpbuFqzhmPog",
  "key17": "XofzdTaFYPaXD4RzJKX5SSNdsK9vdmb1BoevCGxZh3m24ZQMSaPuREBxBdzjqwUJSS98hAGLGLjPpM3Q3wWCGyV",
  "key18": "3dKVUZF3dwL6uUP1jWHXGbmDdXi9qRTEyWXhf8Lmx5wQQFzkjiQXK8n8StKLxoRH5y6dW88Wpy2JMGG2AQgEEUme",
  "key19": "ZXoXrVAF9a1MR1oA7HwipnbTZGcpQuFrS3NrmEBewqef9bagEvTuwftLb4GvBrud1M2sJue832pYceo2MWghiNC",
  "key20": "4zkqiSBFyQimH2jNZc5zcVSps5fi1PMZuPb8QrUgU1cAVVWh7gpCghHxqhpewe9qE6YUUabCxNNAQJAEtss6rJCx",
  "key21": "4VrvMuFU6TbqFVPZAadRx8VyiS4NS4Dwo6nq58Rcskh13CFG4EM4DpRitYPGyM1fQAztQaxtXozMEiFZuXcwi7Q1",
  "key22": "38CuP8R5oPbNxFPfc62VKWEC19Vs2ZTQM8wYzjMoViFvXKwGPqJA73bfJu41cruUebrKBZtt54Rj9Py8UhRC9fNv",
  "key23": "Qv96ju4QEz6yFxrpkG2jid1hM4kpgH4HDK9bR4PMBQKYY3JWdRRaS4EXd2gFYviqL1VoU73RKH5xHMveubNcyfL",
  "key24": "3UiJzXRGPjq3TUhjrky8Yj59BA2QV1c1vFYnfH4bzuJ6qppntkRWdSKXoZbeDiFL9McgeanSPgJyUntxQeWoCGLP",
  "key25": "2MPQe8bVGaGrEQvbP98WoDfiUNnoLGhqWJvEbqmByedntvGdCD99LxBwfziW6arexoEBxF5xAhtTWiK43rBDawSL",
  "key26": "3Lgq5XvhkLfpod2mpURRAWF2HiogVyfuRQqirbqXwgDcfdpqboZj9uKZZFoSGSTBz2pgmeJj9iPx192i2aZtCKXh",
  "key27": "3EwQJuAMegfY4kt21tJQmamELQYGGVcwLuwV586tptaD77Us94Z9WdgjgaupmMTaQ9ZjMQsE4fpoG2N4yXtwh1RK",
  "key28": "8S5TnqiGfoJwCj2eXsAMVsAUB75XUrFFbTgbJ2Fvvf4ecaboGkEdXqEU686n9t4edp8D7m9uGdsCMWduHJ8c7Gx"
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
