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
    "3kXFDsf7Vxc3m5DmEBTnGLrWariyYstXMSB9rGu8hGDAEzaB33cYaZuTJ6pdmcLxKL75XqQPmSgb3tSBQWgrsvGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259UD4815JjcbSkkjF78CEdN2jZkugC5iYZfXLC1UgexJn8onsMMXny9G6SWcsGS2QhMyTa8iPbMrh8NUYtQYB9f",
  "key1": "LebR1LhtkZ9wPBhnbPZUpx6S3U3zkdATsLycJkrpDunf77jpqXiNhvSaRHoBRayFHM9jbT3rFt6AqqA96LjtTFA",
  "key2": "4LL6a1DgNzunMiiKwgRi1uKtAaWFYSWnf6CAVhugq4b3pUpWuwkPH5X8LAHPdRRwab7oHBntu65ByM1yHJZCn33x",
  "key3": "3M3e7fuueZyPdytskWmTQx8SH4KfSgY3BCb7U4Rns1Wvv9EUqzfrAiMxUdxLEhYvHTZSZpY6Yq1Smd2HUehdA4wy",
  "key4": "4uUo2Cku8rR6DsNqpoc4XNfhLVKf5LtLdUgwxTDfYUMzoyKgWMZjXYuZCYTAMNGhhM5R6ZJWHRKPdcpnY11W9qvt",
  "key5": "5QzbxgGZv9dGZswHjm8Jtys4vzk81FwDL1opwrAbC2Fjd61LqgViG3jhwFfHmpKNNXiBwupqtExK115o1jtWdZDV",
  "key6": "5x9DeLFwTp2oYNEEYLMXoxms7ufaxLT5nH7AoN3PkGvcdE7B3GRF6GoELweYstWyHDz3j3WE38VHF42Xq5Lgpwdc",
  "key7": "5awEBvv7g5DCmTfTQBhv3d5jzBLBFpYAvfwoy38tTizW4oQFy4JHJikZPwXDbuKPA6iara3w5XfQ7CMnn7DAGCbC",
  "key8": "5vmKTN5pRw1ftoFpkHs4zLkomaGFJhHc9xWzoeuEZtKGiniBVGbksmia4E3dHCU5TqnQJvjpi2zWpB8QmX6Atx1Y",
  "key9": "8yE2paBDT8nRkrV8TBpqbsmCP4sLWo6VQAqY9bt1KAcBs1x61Ur9hQ5xQn9w4rvvRDWcuVyHj7en8q1oyXXn3oX",
  "key10": "52rxWYwD51ad16HgaE3NuyVHbZMtjVWEFLL4ztSnRCTNFfKacoE2gg9jBEtX9e9XQcCH8dcYu1tTdnuZA7VrhkGW",
  "key11": "5rqdkS316y9heiSGmuXQ6RLJGpNkfVoiC25QkyZqCkvwsvJfT3Kc2CBwkTTFviUJoroiTfk3CAvgR5ogUhDH3Tnx",
  "key12": "3ZY4dS1iSzMgTTVydmfwKseLSdRSPyWnxNVPjREVEAz5EPvwhx94dMhKDTGweKobPTFh9fMBEaGK3f7A3JCAHzjr",
  "key13": "2oW61kxyZ43ZDZXpry5tNd4tsnZo4XugQ7i8fizVxAu26ubvmNddR9zZkrVfMNGJXyo2dz1u5ftM57FJgtZEoZdh",
  "key14": "59Qzb6bbihs5vEyboiY41C26XQWzaRmEqGekhfuoAznyvMPv929t2dfc8iFS6ChSdy1Vn2J3cdsYAtNrqYMPmaom",
  "key15": "4k6fhctrNZJxRimauaN2RVeFB2CEzEYru4v7pjkTK9id65DxefCB6ss1chU2sy1PtibjAR9Ywp4QjP69MChco8UA",
  "key16": "5k2CjnHbzUqxn4CeZq4xRRajhVx2yjMEfWmBLE4vc2xR293Yc9b8TCwRKmL1YZ72dQko4KKCsfrw4Nbaeo15Ug9P",
  "key17": "3pvmmSoZj5NhMSc8PeWXpfs1oDcG3KuWbpstawFRgwBnyoKD6b3n1gVV76h3mZvNR9eCzGwjLqrB5mcJkSLjJdZA",
  "key18": "3kGz6DovRSAwW7xamcDdCo1Gw8SSY22Nr5majkCNGkYwgYaM1D5D9eK1K3PwrWgqviN85S33Cbu5j92XiUxEdt8w",
  "key19": "2tDnQmmdMvmvVXMC7mw1myKUo5wAoDWc5NCVnt9o21HWop6aHyWR6uV2NkU2rNRmaWSJiszKbpwzzVWaS41ZNyja",
  "key20": "5MiSwkXKFgJgY2P3BmjRQgFYJenrPgcFZBCPwTviB7ZXBHFjrgv3rhSRdAXXaM8S7LqQt6kLUVEtYEuhZ455rM1e",
  "key21": "4VXv3ync4TjZUgp7F54C9huBagythbo38PmgXusDNhNep7ijFbdMxtWmi5Krv6gZuY4X6Cg6momheMfFMN2n7NCm",
  "key22": "5MXMXTVWEmdLJjndzuvYPBqPCfmHXw1jvkRHqsyZJi6KCY5JgkoqdDyLGPk7Vvy8XLGFytVDgqmXxbUUKXj9UTdr",
  "key23": "4FaKczwdjNzWXa1zubbgHS3yVAz7TCQUvFU8Bf5iUPAd1Fmd8A15SMKBkueVFiLdZcsVey6dGnTqUveBSXHceeo8",
  "key24": "wqPy1ipKodKh86xrM2PrKwE1snTPdHMK4Q9hva5GqH1YpcqFBDKNoErxf94FVSfmsK2FvZgV6ic8HXJVcUa7k4R",
  "key25": "4YuWWtRGWQrvXTR8AHxAZRMwCLSmdM472XrSqsd8kmJXLh45Y22SzBMpzzHGaU3fPiao7vwb61ozjkcvPjG6FJnk",
  "key26": "4d6TLRsiAjKSP6uWAqfBzY21Avyu4xctzdtMDqBwC2NZFguBUHsxsqHF9ke4fUoz1NJLTfARLQ74inDuoqR8yVAn",
  "key27": "4Y2hCxfgviCrjwWGgjjk4cLUbeAyd8UwciV95cDKLT6rfz7G9s5TsXeMg6Mgeiq4vgYvdp8hfiMg4kPCTdjVnAub",
  "key28": "3NoX5xEH2AxPqWHSQVFShBiqL7X66ijvNjcuSoiVeJmt4N4VCg6YKj6Edp2JBWt4RvjHSYv67X2tAGQ6CHgGK4pM",
  "key29": "37M4GUJWtszsfbjaRsTQqmmUHhBSS7r3sADHTLSSAF8N4iRVfXFhP5WLnXk6pb2nRyJwETd9ohJaM9P996pSVgXd",
  "key30": "4ANwRGM25ooK6Mc3xVT8uKQHoz6yxnbtytZqZtcJtVznDjeLw16XJh4cscPkpdmGGr2knTpYc94dYu6aJCxj4QVE",
  "key31": "4FnQhNDRxrtfgRgUHuZno4KSvWqgdku79ZY3eKymd89AphRmE7BzkmNmvaRL4Wg8uvpB7KEKsf6jk5RFPcdtaPUa",
  "key32": "3Ns8TZB1DdmE2zdzSXKzih8CPoEoKKgxAK7LxLugrwyHkgWbmkLkjT5BLmmEuPyLApvDXUdS8uU9BxRnAvdevGvr",
  "key33": "45PUBXUH6yMFjxrnTyEDipqZTYjUwXPxFZQvExdJrVQYMfAy6GsVzaxsW1eCyt9wZRmojxYSxQdtdu9ZtdpJboPV",
  "key34": "3WSf2dYzaPTiL36cEueJSYvhXFQo5DjDWg6NUN6JXFKAsx9UPTqLfZvMTSeAW2uPa1UzLHHd4hP3xHT6R3hACdmB",
  "key35": "2btjrJr5psFzJS5WrQtU3wb26PGZrx9vurWXfTrdtPaMsorLJRAHLFDK2ZZU6VR1PT4vbUXgtPuPA2xZMApsVryu",
  "key36": "2kSmfttDN5MebWumLjeijnSxP8jCywGYwna2zAxPskEY9n71UGYaMS9c6qmKP989jSMLCZ1ZTwcFghihPjQaDoVe",
  "key37": "3MtM7mv7nMgcauLXifjTaZAevCdiB6tg3tmJhpraxTQhcZDGGCTaEaVpehoguF7spUS5pSWWLs4fbQp2fwd9khPm",
  "key38": "8GK91gMuGdzxxgjVMtAcT5z2ZtnHBX3kbFans1eYStLgpfHi8gB5V9CGHzhAH65BPf2a35Gia7Ts6X5kj9VkyDe",
  "key39": "uU8FUSgdXz3HNAzU5UpvJXG3s3x2dZgJPoYtT1EcznV5Tht4ojoYLmee64A54ZPEYJCphUjjviewoBQk9URWwyD",
  "key40": "2umR4TbpELm959k252hDzLn8XFXRoEwoXHBte5Bh3QsNZaJCpKAcNuaBxYA1bhUzpYwzgLLPNGAFFfCHSQUa7Jav",
  "key41": "4TL5U6HyckYPpUhcYv5j2q5qv69mCbPEtnTwPauiMx4rzx9Esdz49NYNiKuQLvRnuBTb81NUFvb2Wg3aQMzRA41k"
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
