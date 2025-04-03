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
    "3LHLYJNueYCDLnkmFDsz2YdWKgRwpFB2L2pjgjTQHom59KJFP5qLF4eBmRfC7zqhidSxeovjgRsKE594YLVoL5Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECJBjJpTpffEUV9qccmfyy3rNsqKcsYX4SWqnpJp44NZxMvo9GWXGxm6uEJvZ4AcuLJFUpfbGihPFUoqTrnpSNK",
  "key1": "hzv7nRj4RKRSdnmPNRc2iDrgm6Xyhg4qZP1Z9PXbV83R7C7WTTymEpvLsdf3LiWFh6ovLb6n2moocpGxYnYioRZ",
  "key2": "2Xik2NQoftqy5pUVuHa52vsupBmnBC2MfjZa3Hrw5cfVWs1EiEeSeFB7uDaEc2AuoafbnFgoxVBwhbrzknYyGYi9",
  "key3": "4Yq9ANazHZ1TVZnfP5vLMbw5N8tG3UPnwV3EnPZuj4R13wSEzTKmKMhEfugQzzc1sftgX4mFQhVXuwEuBMcdKZvw",
  "key4": "2e14NgyXT8etuhJnzZfG7jaZ3GUiu3DpU4qhGhY2nGw16ADxJRBz4aNgKo4a3HqBpHmfHtQ5dPHFMSNypTh89FFm",
  "key5": "65sA1uiNHR4yBzK6tQnXNbqQKAxPF7fZKC85PuY9Q1WLaGA6V4e6ivGje5jt3LdDMrNHUkk5VymVHD7cG5FHSLtd",
  "key6": "3Ss17HCGC2gPokriRM8i7A2YdtNT5VjHyzohMCRLkDHgumnQEAbBtyz78iPnoTTmbNWcyCvXgGEirYtMhFDmrWWt",
  "key7": "45274w4YdRP9dyVFNotvQfnLfhBScreY7AXT9VHT2dq7a2m6DesbjSmPwsYZNGhovCzYF8o3oycvz6SifTZQ6TPt",
  "key8": "xvuzLbCjnQKf3PNQniozn4N55zwXRnyWjpaziZ52dXNdf5ugJ2cMxybwHpNk1KhxbccpxTiTbKK2zYCiXuYyeGY",
  "key9": "67HTvvqvvRaBAFyecjzQiV9TVgpeDuCbJqhFh5XCXgD5nVoQHje8FCo1JommLYPVbTjY18g4qi1uHHDe2693iguo",
  "key10": "85pXhkWCBqjJXufLNzZYqZ3V4SoDaA1RkJwZ5Xemu2FGdCRMyXVvJJE5Zxpf3FGgno1mfQLpS29spNcsfimyaSY",
  "key11": "5p4VbJLufEGtRJuTECkJzxD6EiDpnvjvRotCmtrXSmwWZJeWWjYAJxgYimEREDV4M4EEekBL1xQaSgok3dLxgKwm",
  "key12": "54aC8cKWvq73VbzuiTDzUXQsqsYT9EJ7WueF9AELsJ3xEEH4kiDEGYZkMfWoUSw9ycyAkd3VgABf9p68LCGhRvfb",
  "key13": "65KmzNsbhY8AXtwYDwQsc8mMK1p4gAeVfo8a7wezR2hLD8VzBUe2G7rtYnmPVFzEFcVGtnZk8Sqczq9ca6PVo8nx",
  "key14": "2anZT3LqrD3SjYpZ9PuDErfr3JnWB866M93jo2KF6FoaJrMTkXrCz5Y2UyM7HAokHDCqV5fTbcYsZ64KrAHumS4M",
  "key15": "5zsvsmzFo1yAKLYbaYVmbY4Yrb9wNJncy6LNzq6FpSmNiByY4y8VW3KtLS8QPcoCDLunYbAUMb4Fj4aagYMGJv9q",
  "key16": "2KoHFDirvwHRxifAPcSrX3RZ96gqPXwDcJVvWCRovDtSLBurM3fdDFt87raZJWvF4bbonEcahnYgXJzyTFUBx8Hh",
  "key17": "56GakzEUfYoP4uG9MFvVzwTqgKmJ8n8yxLi9AuHP8WzXfJWPcn11mC2VpaWEtoaQNJV9v1FXacLgsGpT9ZaEQXtW",
  "key18": "5m6RuF1DBgWqwC1DxMzCdcyNAX99idy9cTFFYx67YtkAZruSJ8im8sVtgqkjrGTJ7h2eksPevfeDq5kXzKdCfxuY",
  "key19": "GuUBeWLnXSBX9LE2oyTR2e8x9i74gQpzZeLft4h2KLPwfHoqUA9CZDe8ZWuvBYpJFFpNxHFvWYiwWkSAbTQ3Cqu",
  "key20": "sTVQXiXNNSqy41rzsGjW8SMFTUB9MQCTusoEYT9Ht8YNQGnGV2sHQ8xhj42ULWAadneAmbPxVEnD3xUgkKbGEai",
  "key21": "24CkK3FUqBvSaxDh3VaxL7Mn3gh7618jY26pXy4shLhPUUyFkCk4g6sFKjajYMq2n3utoGdvYqmfSHPDhCxerhrp",
  "key22": "2BUQTss27co5TrLVDgG93hSZYkVMaQkdF2KZj6Hc3ENmvsjGeegqEhCrkD2dZhaJ6iqzoirMHipfr1996W2JJNQ5",
  "key23": "5ikewo6KvszE1J1vDsAqmspZsJcPw6vEqTsS61VhECtUMgTXd2991jawKTGXQaxnNygSGmqzud4nRFvJvCxCR5c8",
  "key24": "29JK4R9dEKBgkEvf917PEa8if9UPVLgAvKauzH2MnpQ8jcapaMEzoVz8VQBE26PiQx8F6fL7Vnenqg4ukBwG4Doe",
  "key25": "5kQcrv7ntuunfAKVuHYeh4FHr7JBWxs2wSPjdfxLBMbrexdw6y96ohT8PJpLE4H64WxECEHw9pZdSXji211ergys",
  "key26": "4RSdFj8hok7AWSSE8BvHTBsbXoWQkGxtRL2Cj7QJLnUg34RRFxB8UKG7BcuNGSGXUQMXpw8T3vbYeCbrDGsBBLKB",
  "key27": "3cNuFFjNsHXprn6Pcyd6hfeoTHzLEcXEww29kAREAds7w8jhjiEt36WFqqUutGrCJ4ve1cBmuFi4tSsStVha7vG6",
  "key28": "2TbQxP9R38SgDxoRLEEbe7vVD42inrUUTpDEHpBimT1oR12LjmAqa2D97FFpcDRvRFR9j5TzM5B4NmJC6a28omZy",
  "key29": "ftpiUGsLQ4MPnu9z8YxKuYp2o9ZwQ3Hfd1tRZRTNFw4dJFjFLzeZ1e3RLYrJrkYpD7GncPv8uCiPcoXtAfHMtcK",
  "key30": "d9KQS51vkbDZoQjDoB1HZ5MW5MpKHVW4yjbPLMf4YkFD53a2kfStsoBsNJu6m1NvXSa7vrS3fsJEg2QzbjWuiA2",
  "key31": "82CsgGsCfRWLaZzA6TqWLxtTiww4NajuLYX7ey5T7Kbj2b4C9auFv5fFq4s17RRQVf7JZ3pPgdZxeFXsdDgj9Hr",
  "key32": "45EhyhuDQhsFEhF33hAinPYC2m7HY7Dkjm64EHGVHoZiSJoWhKw7qomRjQHYrJwvQyFsq28Q5aZiHMrogsD6cprz",
  "key33": "2bHwGaD8fu754EJ838ZoKjpXGiLt9TNLp47h5oG6hMscn5MJYGTAsXDWttEo11vV3LWshtdm5fmVjPB6UWctiisT",
  "key34": "2U4SEm4gPw7VnFvxCdixiuKFywMH5TvqXz9iMLGQcy1DEEF5y1ahsuCxfbL55eVYUPf4EtHxqFSZDj4pod43MUm2",
  "key35": "eyhPQNxk6m8AytYfr3V3SoQVNdP7jxszCqaUbCv1B1PxQpqutYDF4KPmK4ZmKt2BWhdQGbwBpk7gedfw1z9wn87",
  "key36": "3Q7VawvoEKi3DzE2v66ZkE3AWzBNUQTejqmQ4Zs974pV3yp8rHgejj7D5Thk5DypvVE7RjzKPTrKytwMPveMWnh9",
  "key37": "rxzVt8F4AEFvpcpZtpHf4NmXUvZv8yhdyXT3X4W52HRqvpE4GioCmTELPUmcRMCZGRNJPGc5AuPhrdUtKYwbCvM",
  "key38": "5BBWBwriWFubM7takBXhuEjHDLxX1UwsdJWGUgXNh9oSMRF5K6jGRz4kzv1LGrTttDg31aDyCYYaroLo7mWAYDcy",
  "key39": "3PnPujxy3X2KsGRYAb3RZgrCWW18DzybutjYam3E8e9QKNLWCUvht8tmDBXEj69w6k8JhaDC6bLLptPRS7ehw8Ff"
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
