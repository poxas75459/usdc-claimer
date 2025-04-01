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
    "4W9uBW2g98nbbowzLZ9M6u3VBX7Tx7F9Pq4XSn82stVkigKJxxmN3foTD5V9j5USaaxunN1p4MeKHMRbUcwvf8rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xntqPWi9ZN4id2Ngu5aAnQj1yaxBPrfBDvsiyfSczoC4PTmcTUks3YX4MYu3s8orViAxgbAhuSRxVAbNi9Yf64t",
  "key1": "vYeNUBXsW7jvRHMzfJVBHgxjvpNs46buFuu4rtgzfpNvf2fEAsSLRyQP8AJ5fedeWFvxYEQp8PhfAKCn1bns8uo",
  "key2": "2Fyqok7Nsp8jLc4UX1NrEHA6X4o4Zb3L9nNy7d5QHsAGQ2sESHYeG2s1qEGrQkcC2ueCmuQbF1TR95KBnF1khrUi",
  "key3": "4a69igT24xwenMbPEMdFNarRrLUVLsN4MRDYSdQH8bEcSvxbgnENZaRZnpUA1pjxar91BaB3KzoJBWn6DtnKyQ85",
  "key4": "2T5kY6AKQ65HSx27CHXbBG52HfiEcpmnQimoZLWe8f5ec5TLm5cPBEmYqsEqVRmAyMpD7SvJ7UPxVw2XD8wBnNPP",
  "key5": "4VGyyeM5r294Nn16d9zuJVSx5CwJ6j8oZZTi2Dqng8xXoszu5gbFQCEdu7xEZLKcbR4HDve4MnSx1eByunmYspxC",
  "key6": "3hjVV5uN8BQPJ5ugvqke2MABmwDDKfE2cFQFPDJMCWeCTYvvp5tbKDPC69BfooqBqKRKgvBvY5RffqYW4oN7cdcy",
  "key7": "2NxATQCt4AX34NYsQNLfzP7p4KZtNFeCSF7CGwj3X39gUscZ1QVZZxYiBtZvwW8x6oCCQxwSQb95uYWwpsxwwGJY",
  "key8": "GRmsheqkn6mQbST3JsggpdpQZ31rcYqL9sC9d8juP5P3pLxCUv2DsyqTEpHioyyGMNEHmGk6MCppmv3oaphY6oS",
  "key9": "3EnKknSZxkV6aJ5qR7WhDuzMACzLBxuRXJjMXCxQjfTj96154EjM7RQ5yA9x6C7aK3nspFJEBRnkqG3b5WG1pc46",
  "key10": "3LbKE6iVR4qR8tH8DWW7ejN7sMdCtiB9TmWvuxvYtzvaaiphvHcgKUJu9TvSEsi5QwCUQPBvHgo7UZ2EURZGmXPB",
  "key11": "LEqhYU5Eak9nnTwsheBHKoQDx6eBaJyY8EN1bLwNo7CAwKcwR7YBonYVtknZzKJtphbb51BGchWi4nGC17VGT6b",
  "key12": "4vfCM67mXCeLDY7tViPEFy9J7LxLoJxYVxwwgpDmZb2VHB3JUuTdLmgM859hfNV7jS1Qtp1C1JBDEeswetsxH8hr",
  "key13": "5pPhpiAGKoFDJaRYWc2ygyP1bgare4Rw3HMrT9eWDji5zMGVpb3hLDahHwWvR7uCuXYBdhGo4uTgbgmA5Ban9SVU",
  "key14": "G1Uc3EnhZHc3UZodwZhKt3X8LChEv4HAqdAJuSdna6cb2nGDBufYhp2kv7gtxs1Bq4ig3gp7EwHddVoc2WhwBWY",
  "key15": "3yDo4hNASDtxwWZ6p6oZbuoNa6hqKCucGd3LeHhf57oDjL8rSkx2bciw3o6bm7R4atdL3XW8sfa5psaegZcCH9kv",
  "key16": "4gpr3Y5Jcrk3CbxGe4xqPVB9CUozvmScJeYW437UDtUCyWMZBuLQKyXPTMtt8hcYMjchY4xayVqZCrQWLoNkfGU",
  "key17": "4GB9S3PCbMtfQXKgwj1kAChBeGZvCyJL11PTAK9omr5r3jN4BffGNZogaKxPtRzrE5MgSpaR7WTxGjkexERASVFW",
  "key18": "6JZPsMH4D5DXbMG21sCo4gd3YVjd6DVM6o2TSKSrGDa27xWEF9yMexKpBPBfXHCC6JHvj2u4d3825K5vc1t4wR3",
  "key19": "5JgzYxVRN4YPQws2a12rPzGgZgRQ4WRV21fNgyQQgroLxYtQL9k63efyVUkfcFH33yqZThVC1MjJkJigfMZQ1rqv",
  "key20": "5ade9igVAL51YLsyB6G5h2fHk9riYxdE3D1JHVPjhGdTcWEiaFCTWjGve4MGbSXb3WLEk2TK3KBKfiUq7FkK8w2R",
  "key21": "DdGuWA42y2e6VGwPqcymLM9Hhk7ry8sYAemwFoDdVyjnfvyg3Vv1xEtd1XN8DpB2B4i6JkdkUf4JvmB7G4A5nJC",
  "key22": "66biTAjUkku5YNskCbP4Zj6DMRdK998T354nbfR3SXrQuacbTA8QBNMoadTB2W8JRexjUPiD7eLPG8FUmoxgaSqK",
  "key23": "5LSzxDuWTvndWcvofuynQRGWGqpSydQ6pXC9ozmDoBqoMkPKqpPVj6FHMm4GW1QNYz54vPowHLVSSMfzHL4xL2XT",
  "key24": "ArRLgjwq92ntasg2k5Qky7S25aHxdKsp3e4UWZMNSFeJucvkjHangE7KGU2TPSEvpNEv3ABehF4J5Qfq3uKje1w",
  "key25": "52a7JAdf1zHgzzuLyogkHu78fBJgMBumzXeyfBMjUDZYvQRQnFgMNdkNNkeMrkXokckinYRwkVsebPmxAxLgR3Bw",
  "key26": "5RQtXeA8mL5ZjRun9QVgRFZCu9YQEL7eh4dJP11YZwvDx68NTWce7CzExcYUQXZ1avWG6sKP9fn82CM8szhZ81Dh",
  "key27": "2aebZu3EycdXkDrrxX3Ay3EWjkpkWnnxfB2emc7nf92pdfMSz3Hzk2UyLpuUtfmJEYHcA9chSwpFTzQ4SQrSdgyc",
  "key28": "2VfdUCFCm3zDJSPcaJbu86jH8aTCLm6kcCxdASok4d2mMSHNtcT9BALCkgb6KbJ3Nfyi3CNpEwjJonui5JssrVTM",
  "key29": "LfPsmszMxxarBLLr9BVDEaoSURFYyUe74p4bBPjCprq11r7QRPzwMHiJQyRtSwJe1V4N4FYa8aSxqdQn1gvP8qW",
  "key30": "3xLcWMs8rgPKPb2vhYecsu3xapCpUdRM3fVqL4usNdJANCVCAUAcW9zQdvGZDksbopGj6exqey6qs4dRc9BovNtR",
  "key31": "3d9SbKmdjswzqRL5Fpxtk9UmF8VZd4m3YNBM5VLGEJcqo86PacRCqwefegyeCNGppPPPrk8JdkKSJBTvpQV5XyHS",
  "key32": "ZovpFxo2WbrXXThmTXoWRas5sXKgVnPdPxhSsNWcYYYpnUHXrs8g4HNo1m27QAuVjmkeK6odB8Zmcui1dySf1tw",
  "key33": "3iBdrENkLawYS5EK2uvBC7vEK7GNfgBeuAqK5XWP89trc2APXrP9g2BGLPmSMHRtNfctE7ZK7JcynNskwgaysDWx",
  "key34": "5fhcudC5V8GKeNA6rLRpSo28Lpa7RUxzWnHLiaDBY5YMKGGhfbGDuEPtns7DtE8EXrXn6FiFr7PKsHDEUhCVRuMk",
  "key35": "2wQB5WmT3LqrR4G5ke4SR8Vyr5MbQuTDycGsCRGnCbGqwgS5xy3g2F2KwQKLna7bKbf8ZcBeanC7XEkwwNB28NcZ",
  "key36": "24wBzrSAMQbmPzsynMxWHhHEWFSzsVCpk6JiMcHg6TYJxyLcuz5BKbgGuTGLxVBQGXNWv8basGcKR2sMcy8LaJCD",
  "key37": "2D6LjnaHLNqpiKrRPVvRAHLGf7sD3eeRf3Wet24fynHyqhvmpFqKUgHCBXuJtBnS8JPphs7wdYVbntn1V5caWvgq",
  "key38": "2QXiPTAWaJ2iVfvddpJCLGYTs35HemQLShYCriWcL2k1Z8D93rG4VcUhz6sCT6hkG4B94WXta8qT8KUrNfn89Q7K",
  "key39": "51GecjGWyVUZ2mkoYQ24m7NkApWobr2qf1LyExVV3qxvBgTxFCezkWWegu77yqZHpQW7vJA1uqcYdfGgE1QviyXW",
  "key40": "2btFFDKyKgXgshDWPpgFDLZHY5UhgPQrDArST8aJHyKJXJ9tMvu7EqJ946XG42DgxPJVnPSq2P8XEVSFL1xEuLVE",
  "key41": "5dYbrhz5jz9AGdVjZYw4238zPeNKP68pioYw8usndbWDWa76XyozGxnhN2RVsDwa6SsjbUGXJCiii4BzF8wkmXU2",
  "key42": "3JmDKemSk667Rpvh3rGTDiq537oT53BdUrnfq2E64NYx5aeccGWzP2H6z7fVF1AWZg5jUbDrvp8Ruk7vP2GE7pgi",
  "key43": "4DPBXDN7ZNtgZ4nogFG1pCiJ7G6iFeavXPuxwXhGSKWVjFt9VLdKTKo6nAZYEcDzigSgqZ7n8z9uCZ3beFVn12uF",
  "key44": "bi2zVYqHoFv3SFrjGjS1mznpP7x8zSuGyZNqebhKaSKQVLXfdceN7drDdvZ7YMrGphS8SPTGjoVkUmdG2pQuLs1",
  "key45": "9DffrtAJob4RQh3sCxMdMHA8JL3WZfqqyu4mVQKtMDGrv9XSvWcSy47c3sSA3nyspLy48S5QRNwgYWMaN46yVCs",
  "key46": "54JSLq6dnxjCCq3uvNGthnMS7pxLWsikUC2M6iL8F7YTg5TvNbbJDiVEVto14g2u3HZzTYvYjbcsNL8GTfV1Wjfd",
  "key47": "2r87nh8Dtkmgk4kjHwtNaPNsNhFC6ZmiHva44cCsgT4v1TNbuTjgffpXyDaQzYfGaQiDQnvUyHPWMxXZP7fPxzdy",
  "key48": "Kcyy5H5GsQRcZ6gUcQ2jDuAk4EetENAk2qFTxGM5rtArYaEejBYnqRY871pVh65sHrhijSVCdMu8PtKGiLRUMNi"
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
