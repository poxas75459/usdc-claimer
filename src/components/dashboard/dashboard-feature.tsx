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
    "5vYqZUXcBFknMXnUVdcNPAudGgAAhj7fBnRGn7w8wkWVpvscNfTeYpoHAxYccXJwz9N8A5qicgXT8YS2iarDtntA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5PZEUX9m8DbJvhsAiH9vPfMFS9uqoPDoMpNNaRFQFaDk31TdeWvWz1rfWZTKZaTF9GG1f5ycfkC1Wwp1SmZyAo",
  "key1": "3gZB8jpTE5CkHgTmw1kT2GKyT5jxHtvCcbLDVxUYwaAaWorsrRW98nRpiKrs5NgFUu5rs8qqSSzxKz8eVYDApEnV",
  "key2": "4kBb6CMoLc2uUwnijAtxWFVt6fzGAE4Pu31Qg8ncvh8sgUVQjzKpcAULu2gjntN115xHuFCYJPLD8hEFywBQYGqK",
  "key3": "4tqt2hsmBxboUpYEb56ZkA3AakcEuNAa79gkJtMHZY6wDhvjG9NLs8Eec6UpAhdufLHcVcbHm3h6vjasUnqADbWo",
  "key4": "5JhAGW2ugyr8D7dU1n7oRXgZnSHrHyug5ctHiz7tHTC4VkxMnzNVfuRa4zeN1QhsLyPSa5MqKUesuLo1WWJzobpE",
  "key5": "2ivHCgENrQuZLHCXnoMoD8e387o4sDELizTdfqPTcNGcopNDkfDJNGvBGMDsavroewV9XE7HJdE5TXngndYeJGZF",
  "key6": "53DNh6HJTLJnkMWJezEchyegy9dhR7x1fmKKqNUXkbgAvRbXMVhf5PFVTYthGfATMGDYAwGqXRrzjnfcZCmorSxu",
  "key7": "4yiuwik9B2PUVs7CD7i415kG5XX1FMY47jcseSKPAbBW6rKestLjc7GgkLEUaPLUte6og48uoHzy8V9fpWnj8eYU",
  "key8": "5AqW2vAB4SYeZX6keaGKGq9qY215mtBacfVrbTYXSFqh21TeJnGT1deNRXbxzh9tKD3Bd79tGbUY2vHZS2r2w38v",
  "key9": "DfC75JhpReFcRAQ7Yo42gfJ3izXhBd85hHWWWeVLoUvUDESmLtDa3Kvnnw1tqR4M2BerjNRxZkK7kcTvCJuh4zU",
  "key10": "35QpJ3VRkycE3CixrqiTd7xiUH7k2LyjVfmaLqCngGtigs42ZUnth62pikR1ynciNHou4c21Fuu8bB3eV2xi9XTx",
  "key11": "3uuEjGS1jGtvxFCmDp8XLNKv2rWmWEe7eMES4WRvwKK1togGGnqYG2zkReJE4kU7LeNG6smmfsVosMjABj8FNZ29",
  "key12": "j8QCfPo6qi9ZN8uuGxf2fPsB8hdcg5JKnCYcdbZ3KkSLrVR3EmM24p9PYu4DWTRLVSt6Y7FFShF7zUQX7r7WKCP",
  "key13": "3EYtAweg4toaxBTQGXsj6Mmpm9fiFmYsiVxA8b1cG1C5d1RaSrrXwvCGK4j6ieoebCH2bcKSiBdzFmJ7XxaPWdyd",
  "key14": "pggsauhdrbHC6JjCum8nPB2UQvoHSj3kY9eiD1tYcDpgSuaFUSU7EqwkGVdyCrUHP6xXVBtmsPG2PUrrPG2Pw5P",
  "key15": "314sUK3UeFjjULzQBTwqXbxRcTtp7K42GL8EazfG17vZgmkhqCKhbUxnKGswCZYyndA7qsiaHdR2qpPZAHSbdK5k",
  "key16": "4ZMR3cMJTVRTBkpcZEDzh32Ds65EkdYTTpnF2B14kSwe1A7Cojn8vMiB4H5tHiYh4jJuh8uY3pkj6mnfUvxV35Hw",
  "key17": "5FrbXAQqVqdh8qdLEA6q8HYgUzPyTRxUsKE5efjiy83rxJNeUmsk6ijznjQw79xZow7QXJdw2696bBq2PgpnXSz7",
  "key18": "5CdrjDcMU2YjrUexwPP8SAQ5QuLCXjmS7VHMtGawe9geEoC2x8V6E99vw1uckn72snyths6WLs58SKqGiJTC95Lc",
  "key19": "4PrmfW9cdAbMWwYUtXzK5gNprmEgwX2jczo2RTHgUA1KTDNPSFKtZCMi79V9FbcA4S8YUh3pVr1NyTHd2f2Eer2o",
  "key20": "4hJufuBZb9bYHEgiKaeSm3Q9RRBz7AKustU53FdfVSLcNKrYr9o1CNSzrjKW1dvsefCsV4JdFoFaHiLZGp87biqX",
  "key21": "5LyiqbWhYZKmZkmuei3xF62aGDaiozo4Ro5hXL1JEdFbqU2CrbmcJrVMorcsXSWcf6ihGsuv4RVqgVRPSugMiVbB",
  "key22": "2otNuekp7Qp51E1W5TSeNP8jhkQygzPFPkvj1qZEeEYGC5stsVjrFhpVkYVZLgb8gveg9GZfHLP1smTexEJguDc4",
  "key23": "4zTBHeyQRiQR48HLySEKc3kNfv3zvdCmMyU3Z59BTDE9FAD8oUHnwfGUjNWuaFcvoLDaX3ueQGk8CYYCnHwptnSa",
  "key24": "2gZrDtA5pX16rDf7q953X1E4Pgf326fb3piSUV83LWC2ohHGd7WJBxF1xXyDmM2XasL24zBHWn5nuQjNJCyVxC7N",
  "key25": "BTfCmeaLTy9RMszEa8CfgsN8heYAECwAAxLuRZFxuaLYvPGBcZMRPAWLzUgfBWGDLSUZ9cPKZbxcteZ1UYFuarM",
  "key26": "2nxHTA8pBmd4EsHwLmAZ8JJ1v1u5Fdr1b88k7LPs2m5BQCnKq1U2JLyCdRzLyjd9DbagwaGCp9pqZV5eM9dk55o7",
  "key27": "5BTCgRyM2Bbo3P4C7fhSSvcphzUTaKQ87UMMMNd89eudsEFB8GzEH6JwPQsbC7HHaquAj4qcKy8dfN6s3WRyg3Ps",
  "key28": "4tyqLQ2kaibGQrk4nDnL8rBMFkuA2LsfULjAAToDyULD95L6JvMXesqKxr3QaLMejtv2hN1X9VXcDkKES3WLNtoQ",
  "key29": "ezs49Cbr5cSJHgnFT3cihMihXErtXGEAr1o7Vn755RGPvSorQjrEHB8LFqmdS3DhNAaVmtE8kqNhNs98G1ifBB1",
  "key30": "4shDxcjRvA2L7cGKDEnq78Es9Q6V2iNHEgnH7urHkiJpF7JJipwwE6NjvvsnbgprhCudbqD93rGmEoduaoG6V3LL",
  "key31": "2MzrveUzKbCXXn7wQzExP39V3ZbjFNvXhzxJ9HQWdBmNVE7CLKhp7B9e86RcTkQUpQWY2WMx7xdoFj2x1Zq7EhUh",
  "key32": "2U21kJViCPgtMYc8uGwfSa4KHX6AR98LqcY4GKQJjdKiZQtgBFAv5ux74aRGrzqLC28pSPxFagNTra8Wn7aC7M42",
  "key33": "d7QsziGezSLcenESf3xaUnCFXQCsd1SkSvdGqec8bS47kTqStJvFGcpQgD6v2p7W4ESaarVeHAFZSwNxvBfK7Vp",
  "key34": "2TQoh1woBmx5wrCQznmuPiCZseRjmE9WGTe2m95cBY9p8RQWrijN4ek7FeCJpfq2FmcbyquHVwWgRxMLdujDV9GQ",
  "key35": "3AprKLBC8qPHgdf5XgPHjS5ogMis3oNY9esHqEH1y2Ysy6PyQqYGF32WstXbBuBCgNfDEtMNo8Y62wbfqqFksaWa"
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
