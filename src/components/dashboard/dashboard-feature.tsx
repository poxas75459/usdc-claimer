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
    "2adZuwwMwDLpSNLi8BcdmJKy3hTkUuYpGiUA7qALvysCgt7qdjPfmkN5ifdMg4CARUQnN9BSVasGQeJ4MHmP2tWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7MydttNfnbx59njZX3f3RfqmSkwzZj6tLJvHeYtGmHhH1mTQd9KqAFPMX5eUGDZnFbfoopsk64VsAkZQzr1Kmpn",
  "key1": "44XjSTsVAicmzjPCSErSxV3dR13mx32YbU1F9F9BPYqkjcq9PaVqtCBE5GSA8FiRqyo63WzstZ6Y7zGHvyg37KYF",
  "key2": "2VanBSz39ZPRy9is1maY3RmRqL3QuJu9ZrxoGHYgh5794DFcCZRqpxQgDYUFvxHTLRHLF1m6t2Ev6fzb8mKNLbQi",
  "key3": "4jZwmZ6WGpWtshVuPffWyiNfHRo2pSXMwQhXvVvBk8a9zNYHwQz92ixy995Mxft9dBRGwySXvaJgTKiADgiHqtVk",
  "key4": "5uNswQUPr7cZL7bFzrFtQ3PfWqYuyXBmXu9ADnxwvpxCL8UEnenMDNpSztkoqJwkRMpDAh1AMzZ5Wmidv1XL96nL",
  "key5": "3sE2UVCbJaraGbfmWCVGhrKTUdDNtyqSYH5gH6m3P1sdhjJ3NZBQsRBsKWoJr5TZDCcr5MNp9VnqB58DKo4NQ587",
  "key6": "4PsyfW23PFM9VKFn4JwR3DrVpXeuHiMwbvZ1cG9Wsqc4mJmH5cAGxzNY9FTwgpen41i7mjdF5Vf7JE65gcKjuqeJ",
  "key7": "5j4ZK4RHW6czTtyaN2Z8UG6EVf3Mxo9juBXyczNfc4bnTvyRMNNyjeTCsR4HjWLW27AvoLCsVYzvgRUByTFydXkD",
  "key8": "3Wjzsp1UVg9SDZmmjZVNBpyoGyyhe9yV9LTsfMUSfnTpvjXUmgEibf6ZT9naD3cASkqKo7b6pubx25fSGUF2nD14",
  "key9": "3okoWSFyLV65uYCFDPERvCaJaLco5u5uBV8PVU9JChjdEga7sYaogWKn5PGvwSc7unTzzAE3fhnfF2VkhMtQz6yv",
  "key10": "PnP6G85AhuezZnd3k8AySuoJQ3fMfXcMgeSf9Em6tf5yfNE5pcmUJAUY6iyzyXuM2AgZkriShiLqwzSWwBqmfjs",
  "key11": "3JXs6ySV5o3B22Jjc9NKJW1cWcrCNLEGkEmi8gWFniRFNfJwjgC8aqckwDbZYvpY4qhQ11BGA2uGG5wgWr8DPgET",
  "key12": "4w7JWCjGD5yXx4CKdKRo2QJCMerrpAzYgm8xEEDhPygsroSSJQxzdrAiqsmyhhgwq8kZGJrLXkmzwb9x4LmwiF1q",
  "key13": "2tv5vZbuwYAd1sd7W8CeyzdkzPhy7KqxajWzx99CAHw3tJY9k4g2sqDPTxvNzSAJwbsdBVpbQSHhmQtH5LY6ZSaX",
  "key14": "2ftUmDCy81oyUdwatMoEVxxVH3Et3ZmQtdS9KAekHxSUKGWGmswBERbFJnTHii3yTZQvMdQ7UHQmEttMFjPfrbDS",
  "key15": "3RJGN3vy2Ua4TBMmrnfpkjJip5xQ1gNDuTRWT2UewPmeRYYD7n574p8iLqv58Z76fhBA4ciLGKW4vyBDoDURGczQ",
  "key16": "5CesYUdUR1UYvCoev6XoT6GaBsLa57bjxpcEZjd9eqAW2zLww2x93ayDFkZvqMjRGSEVF49M6kEyU1f8QU6z5SG9",
  "key17": "5gzxhb4hx5Eza37wWCwtTacxT1LEmGeWZCEW2suw8k4MQTYKEKgPTXoSS73ZmY2A6E4ZPmFE63nDFqM9F4ygY4ca",
  "key18": "33Utv7y1cYGPFSfXupjfqmnKPvqVyPPUmknuuxzg8uyLXqRcWpngyjkVA13Sg7Lry8y2g1cTYz1NkgbQ4uX7e4dU",
  "key19": "5BKBd22Sq1p8kjgqwyAdam7Y12WRh5DTW3wTdzeW9ddbF8iDG6xbfDY5RfHdzxgior4PEsr9fby3huUJdAUV7DCU",
  "key20": "66S7cMeMXcMgF3ox2Zid7VSwWpFinwVQxUiV32jSaABd4S4tdMeaSAoJ8aAE5den3dcw9Aas4d9aa3rWzfxX3sSA",
  "key21": "3twQJ4qV14ZJZENAJprznD9wAvhbs7HFKstHddXxPrSNPmRTq4wAWmwDKrcUV4PuQTHQqX7yVSVhvVjX4d8aGR3a",
  "key22": "381Q5RLkmnLXXJr6PaAcjVDwPe54yFWSE5W6e6R56nCFqN4vnpkHK1nwETWGtXsQbHBWkVEsEfEQqiPJ246xdgra",
  "key23": "5SYJYMPypngvVkFnAxVu9wtPj2ztnYLkSYqK14kBTZs36FNGvcgkNiDtC34FDvwwcZDPvF3HeRPzckNtAm7rmQRs",
  "key24": "oQ971h1XBki7794xoY7Nao3QLBCkmbbCUanE7ehCBKBrVJd59Ha4nz7Kz43sDSwg5cyo9fPdSk8AGJ8mbADuCsP",
  "key25": "5Tjh3BaG1gxC3Sxz95vCWrffsvHvwLjccMhVRZ5aZuCofv43m2UqEuRa2fJxfhMSe6XscgJHs9Y9dYUnjpkA8boq",
  "key26": "3626AkAbPByFvtnRcwTFbedNwmin3RonDjtzBgaqUjEi3ZWtvyrgbmpnG8ebwgAYK6E2RN1BYaPnFWgx6peiUpZi",
  "key27": "216cBuE4aCBkggMDEH99kwfrq94iQM6SeRfn42mfP3HCFfBAGn4a4BZuPTRWM5jK15XLQNzbEA6YKJ8qAoJ7he2F",
  "key28": "BXWXikq9FUd81LKcee4JB1tKymQEvpUwm3brHLYU9vu51U8jNSVgWRE91oJgr4qVSAuKfp5V7ZprgUpRfjn97gM",
  "key29": "5d75LPSgr2iGpb7fAqMuYnSLcePoCHstNpF41i2iKnqpTrDU4KketLMCp8u1KSP3tDYNf3su9FpabdXXNPTEXSuF",
  "key30": "UQ96wVDrvxfv4QZiwAebMZVAkahE2YhLmc4DXvSP5TrtWyFqPVtXJe8NWcSfcP8rnRFaMpLK4AhREvPYD65FhBM",
  "key31": "2zEmzUgMjKu5moQGGSaLTUtJrfAQtgSqcnUyAvezVhFC2oUDiCzePUJKA5L8k6Ec2XU37skjYqVhhULAPrqTjqNc",
  "key32": "g9GU8kHfdwe1Go7Q4RxtXuGXvQ2xfHibZUBYftpnZf8BPGzzEKxgfzXNS1x8qzjN1MvJDwGZpwPgwYLSKjrLQKg",
  "key33": "3vf6ZoqJiQbyyct3xXNauLMFQ2GBrkaNCBub89brH6MeccDLhRnrRVL2V8U6UbtU6gDHWT2CsNBT5XXM5shSQsFc",
  "key34": "2X18SdF4TfPoDuvvQVMiSLRBitr6FkTEAh4u4K8BE7D1v4Rdt5Tm5FbQyWnavKW8D8tEqqbNhEGdi7hAsLeoUEh9",
  "key35": "5DS4v8U7TozHmrmLXC9cHvp2ajLTLMf2uTdHCVFu3obAVgpGD7kX8RaiCjxnXHN5KywapzCwMjTx9BmvYbBMfBMi",
  "key36": "2Z4HDukKJg8uzz7id66hsFRDsocv6rzyCPj2p1oiJV17Ue68RGra93XFLMW1aAMaHeUn6bTGBCFhKpqUUZeBK4Kb",
  "key37": "5hibcKDMUcATEneaRsC9tbq9WTxb6fxfaroBjeotK5cTtYFtxgecwBFnKYaCfG74SCrxbFU6q36R1mCiaS7V7Y1v",
  "key38": "5HeLDbjLD281YdMLkZXBRAfa5niHsNtoMF8v49FVZPhVhzq3u9uTYay6SgjkEuPekWigmi8z6RUrDxGq3nHSHJe7",
  "key39": "2L5tn1hzdZnZGo7zFRCyBYUoELuEUDgnvLzCNVv5aiXkPUm3fP5CRRawPkbLtzzrs45Tc57YrxjBAB7jaP2AcP1r",
  "key40": "5tfdJCi1ZYVVnExuwqLGWtYsxuXi45M4YdSGFKUjeMhkAWFEQZRZGSiWhmkgHeREJPCEembG7SApxsUsasBWneUV",
  "key41": "3jmAuiwoFeTNsSCXGdrawCCAuduLmq99mVUusW8f7GrWX1DSqW6qDB9K5R7NwBaqtaYcHWAmSgpNrznTgx5H9a3M"
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
