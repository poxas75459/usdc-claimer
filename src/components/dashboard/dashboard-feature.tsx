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
    "3XL3SPCuQ6neHnRHjzo4ymvL4CxFM8657LGj4ehXN3Rf2ySGCzgPgfxt3VuXq6Z357NRTscrpWSKR7RWpJoc2MdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4En1hZm6L1bTg1xN5u1Uy8ifupLVnQboTqYTiEEbjLUBjxLjfyDfrWp8T8EKxgkkp72U4kq5yWkJTmaoN3CqvnQ9",
  "key1": "4vu1bcDaN6bfSjZfaF2R1BiDg1s5qt5ujc4P6fcjeQYyJyDeEAyoZpBbDdc6ncn5Dnqw8maHQa4s41AK1jSVWXJa",
  "key2": "7aAWtk3de963j6AEQrjD9zfpk3cbqqJG91YDmC85SisYWXUW9RnUoYxeDCT3tWTZdUaprjTYth3hyMY68PeoDMS",
  "key3": "2auZmj1U2WzWHFWS1aqU8PVbZZvayr971KjjRQvfh3TNDVHQC8aAd2FeXxCXY6dXGn8efRwnmUqx4Cha1jw9jL5C",
  "key4": "itMP79JmRn326E63FXzZe5TvNsZdnHGnYr6yRGoLyfXbmpArs3UpBG9HFMDQAutwPFDrp4uZ3eYwx6ZmVgg9GTw",
  "key5": "5YckYFHkyAA2j3XjLiESYxjgYixYQZA9VN9d8z7n24kwq2sWALYX6XMTPoMXZVrb2ms3qYqozFQaoAt8GKspy2Br",
  "key6": "5639CvuDTAyE7YTZrMubMUz7bJzziMMEMj8WCwtjPhxyxSJJeSgRQXi1h4UP5p63A7MD4NSNaNxHNYWgjgLXFuQF",
  "key7": "2BYcXSDbkBmp3fPunRahZdr1ACWtbZ4UhHnuUGuKtUmw7V8kM3Zs5P7WjcpjPR3MeVHDSUiuDRCBAVyavgeT2c7F",
  "key8": "3PugF8kgv1SrYEWXqRSjZTy3Rr46Rtdn86hVUk7VCtJM1zEx9kyTZAjWipbiobdXjpFjntNm511xUsSJ38eUdQTN",
  "key9": "MFPqqEXgJoxGoF9W5kPxZr22Xcx6XqD3G5CfWjeLh1LiWcUzH1vBgnZaUC44uCBwYhAHqiTiHjL1AexHPhCXQsB",
  "key10": "346Y1GiPkTdepYHRP8XabcH2FmnHTHUjigDyNo6QYHprnH5c76asawez93rSfrS6efz33pP4LybmcbnEgcN4jui",
  "key11": "24R5eZ26TipmMk1M5hzVn2rNzVzTDUJQeXaHZbFsyjg2eJv7dyn5scorCa3VArY2s4hyErsBVgtEUY9AwU73jpi7",
  "key12": "632G3VngjD5M5mR1265LThYxcptSCfNBjAHbrGTgGx6RfREscrU4K2chya22Khw7iHLfC4cGCVeEjAjGd8M5VDb1",
  "key13": "5o1XBzne7RdoMf3gstMpEGGFNgbqpy3TKi4x4NmvNnAnE6DCCexPa8HZLj5cBrJh5qz1kHaA7JdKuif25cbCoTfh",
  "key14": "39EEgYKt6EK6cezVtgD8FkPR19CkViYvsmkcdBism25BBPjjp9ktufJv9W58SehJkXQcTae9aRM6sy9cg7wEqsgR",
  "key15": "2YbWC3za3TfwUFaz72oMnvZh4o9gyxSr7BE6DR5gZfGWh4U8qV2Q5gWuS3VoaVyxvnzmRgMmxwDx6sZKxsu4hBRM",
  "key16": "BTjrdNuuVVBDQ9CyjnCS765tnnfZfaUakYtik1TjuDwkBLob3x4nDPVfThVKaXhF9NjjkbUB632hWWQxWgPLrkf",
  "key17": "2MBLoeQNQEJCztbvAqQr4QL9ze6Kvezdf7wdASSGLG9uzK7cDxJ3WrvKCEx5EHVr1b3wgzt5jgccjADd6BMvL8ys",
  "key18": "5n1SrxEgcS3d7rLYnjXsviQyvtCfQMsNvGu7bJWftutzbXT4WnX67BgCGj1URf6nkfGTr8cWngizA8oq1VDrapCP",
  "key19": "3EhznKsS4CA2fTmBMC4vuZqpyf4FX8hxgEgvbfojhnYBvJPvVA6UYRNh6SwkWytKMrQCeYwnGgqqF5fm4VR5YBN7",
  "key20": "3uCbFLp2XRp3RPw56EhFUfXmJfTwYDNRdumAS3KiNSkJnBNvxnkCxbW1pAT5Z5WQu7nHPhaBR7w4U3gDfbPT8bFE",
  "key21": "s53EGv5385iXnCWKGQWChLehTDo8KLvvEubjzt7C6BxWL2x86vVa6mL8A12s9yg9M5oMFiFPgjsVPP34k7RymtM",
  "key22": "51S9BHokPvWsxXgefbSKw8MmFBYaejnqu9Z5fjiWdLPSRixX8YduDcuGSabZRgkdFP43RThZ3Jr66Sr6CebQbmqc",
  "key23": "4w6uAkRzs2VZw6vhrjH68HfHVYmG7ozv6HU9guE3RU1bVp4C5UfurVPb1vak8DZGsAXV6oUQfuqMjBHWTPK1hLYs",
  "key24": "5jTpUDRo8hvfQh5452jjGcfqvbFxHng1uGoRWCp7WxJEd5h4NWZj97ZCTzKSWE3Gu9XkDcfPAfgm3j5EY1RiAEPz",
  "key25": "47RyZPUmE9VguQr85MEjZAs98YsXdJ2brgsvGq9M1evi1Z6bDPDvPJhSu6GoRsDym4cX3JgHAijRzVx5NKHwQxwf",
  "key26": "4ZKVs9TrkfCSKA5Ly8DWNWfHcN8CaE3BKrcArCHc8bf9x4UXgQHnJovUxUizHNTQ4Ch7Tc1SfuafC4ks6Tx9WjNY",
  "key27": "5QBunqnaaMNnfVGxPoemEj9sXaUy5f7ftcfDKDN687UN9xZ9UKVNvq4bjmCZPF4B1fWDsMPcvmq3RZTVKHk3We3T",
  "key28": "HzjWcbawHNouGLa3VfounadsNBwfsNUPhYAHrv67ccR3SHCigNqRw5datLtsqp8wUss1XXExWLjQac1JBpLFL7e",
  "key29": "3w9Ri1Snj73RTUd31UGvedYsboKA6oWcdSoZc68rqqcASZQD6BGs6wzZJwNy9uGkReS91tTtyvye8cNv8UnKGped",
  "key30": "5agjjNTLx3N4aMRaX4QryPB6T7SzzLbSoVTBkDHcC9pYLBrsMNixMCWP4GE9MSYWXTkNnqThs2yZVcRjrSV5GCie",
  "key31": "5TiaiYjTVm2YHG3xFRJSnZ3yzd4WuatKehScagqKihdvYmHRrfG8Fd5JWWcQzwBKi8K1dTckgXqp7bfKqrb1GipP",
  "key32": "3bHFTMt41wzRN6cSrb4DZV8CvgPzw22V8ZoxKseddpjf9WLXj2mcJn9dTRQ8cfKWbAjE5wR69Tvdq7PUKKPKamTh",
  "key33": "5kQSkgabA6uUkkzXDVi8zEPnRtd7t8LzqgxcctqhnuyLczDYr1Eeks5r4QNzTgoSDbb3ECsJrNqcHR4vmoRD1XJp",
  "key34": "2WJD44qd8SAkPbNzhzjsHrUaiw4G3tEZTT7bQxKMDQE2oMxPzDexHbxepvwm8LjkBDmD8abFwvfUncRYmD3mfLbR",
  "key35": "2je7Pneipeg755TRiqwYGWvMWVfxhS8rC2V2BUdiHXWueXxZXf5CeLKSipAuBMAzKMmxLhMX9ZFaG4xam9UupwXy",
  "key36": "44Vufwxt9RGvo5eSPnHQTSmA9G53KR5qs7mnUw2QYLRqQ7BYJqaffimwcgc5HP7RjYqCCRDd3duZnHgQP4262V56",
  "key37": "4ffsaEDVoC8yJhjCu5rr2dJKg3Z7JF4mjA2EDcHQFHqhmrDRyrdgBaS6W171mWnkUMmrG7PRGBo7oLJLmc6sqx5",
  "key38": "3cruo5cf25eHVEGmt3Sek3kZhjgoTT9P4eWfTiRpCPX8S6Z2Tf7wrQ5pyBhNQraT68n8D1UE367N1ArA5LUkMd8f",
  "key39": "4YzWAtRjv9AZ5bDgdhR7XLMr4tNXD7tReT7WNsW429hodr7ovUHqeqzrxutH7Vvg6Pdm9xxQVc5xmBCoQTLfGmvk",
  "key40": "4EZeBEgNDxkYBrjGwDVuZsAeyHRQodHuW1G4EEc2a5YyeJ2j3DQowFb4j9qwsUm6kD7DmUP7FwpjjXehRhGrmdoj",
  "key41": "4EtoJWhHJymgsiVfEhcz9Uupx4kBMKm59mzgu3MV27pn2LFYjFZxaqb86x6tDcX3wMLujDP7BUh1vVmcDQKh1xHX",
  "key42": "2sipz54xr2MjHiETMSDd3daDrG79G4XzwzjKx2XmxmAjjMUxArrfMpD4CnYpnQjsbrLsaQJtvtDHuxddB6DJqLop",
  "key43": "5or3k2wHXHjMhhi3LPvaA536LFF3Fg8ricV9XygiAP3oSUJt4LDAnc3JGshHtuc3EvYpYEVaLfqFTTS4mB2S7w9n",
  "key44": "4ouoK6VPdMd38nDEUa2TRQoUM8jKG5ubVDELyDRMGd8HELnqJpMyHQBogCVrVszLSw6Rf7ZR3wRAXGV4RvUUGt7Q",
  "key45": "6dK3iqDZ9nbAjeMGVgqCHHgkffgX1NgCGVFJwPy2BKEKu8hqbYDKqsYPnp9fLz2mKE6APrQg6ddpC3x3ZW1HG6Q"
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
