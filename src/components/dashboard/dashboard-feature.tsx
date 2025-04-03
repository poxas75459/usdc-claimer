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
    "3F6hQns9DDNcQQrMDccebgoZZcAkrv5UFpxwK915iLtcxEKPCkyCAT9F64rcxt2R9gJLGkkr838FT9Ytk4Eqmzku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aicQgRbJfgb3M1nDw79t2bGPvjSegq7pgnobcnpX12jiE2SefgcKPbwTusuScKzGQStZsEjAFgFbR9t95fSunvA",
  "key1": "AaY4Wcqyc5oqBYgmZUCRZhCBGBR3Fdyrr8jivrb44AL5VVFSXRTMqhLbk7qUwbd78BtwhMjnhDwVi3dst8te7uT",
  "key2": "3PuPHDk77wiKgx7ERarWPqf5kZBqPJWo8iUVmEqfcZx7u7D2dmwRUKNoxWF5k4vKW3iF48gDyudqgH3gfQiaxLik",
  "key3": "5zqQCHcvTkA1vpVQ7HxuxKJXw7ymefxHD38tL8MEWUJpwUPBK3bN55F5FEqTvT1vADiRmiYcJatR3MHR6BCoTTis",
  "key4": "22rAHaEu1RfVVaT3en2UVFHPuoBCKZDkfPEkoBxXNtBTXG6DBeLjDL8SAvkT7Cp4a4eLTaFzXnDVEDbs7DzvM1JH",
  "key5": "5qZEpsTs69Yn7zzzCc1PpXn3m1r5D3AYjWJMK4JV83GQ6GNLfYJ5PZJGNRcZFmHs4AnFieqzoS9ThpHKgkytq1iQ",
  "key6": "HS1KkBpHmUgJMzufvGjNRPVmMJVk3hhK4Hkx6hELhf6gP9CRVyrDLPHKPyyyUmRxHYWy55XSmEHqiTDvr1fEKN2",
  "key7": "4HdJNnXWxX2nRWnGuipcgEpj2LwUbXNYMcwZqXypbGtq7DTVU3bTPd9Zi81hCEL6EQAbRcaboWmQHSrJfZR2yZ3S",
  "key8": "5j63S6VYCd9RsXFtyQkg9AfFedPwpPodco1poFGPff3XnTn3RzrDX6g7ZqueCsHzoj4dAbWoin4L4g2QVc32ZmUN",
  "key9": "382kYPq6qPNKWU3YiFCnWv51VCp1xYWi8z92PgiuvmyeoVHxn2JSrrA25oXkMX8WVnnxnRgY2qYoSpeXXEaT5Eai",
  "key10": "CYh935vN9zfUUhw91tbFZP1YFJE1XqEUFCwNpmuPCP4C5L1Khzr7iDVJjTyJKMfAN45bAAhXuzmNipYwFHTk6sa",
  "key11": "5pss2RqRAD3biCFijmRsLNX5ksryDG7EPnwd9574rBoHgF2zmni9pioZCvQoGaxUY5PDjX92CsDDc5LQpSqNaPdP",
  "key12": "4VoVUx2QSdk23y2hRT32ueoM7J5jkn5xEH3fKwRRxVbRvd5v8A62RbBv1ynefUgRe3fcjXA9ER8MvHXeBxYusyFi",
  "key13": "hjJ3sPeNGChbGhRegfpXEtAihtexaYb6g4F3aFanVnc65nakdjD7R7ixfd4DhKwtUEEF176iCa5ufxVLxHzLztX",
  "key14": "2WhDehpqN6V3ECyW2AVfcK7e8VF17wTAqXzYrt1HzGkN7eVSZj7q8NXvTjTFdi2FexraUAD6NGqGDE5rstRdqnL4",
  "key15": "65n9ZxgCkGKBZCEpeEpge7h6R7rxUesCEWR8d8qrvre7roqG9PrQ8EvcMPJ3UB34zSuNHDmVGAkLkjtzcnawBH5d",
  "key16": "4unsNmwQCRzGCG828j1vAJFNpQdhSEmGBY5UoDFRVPL31nWSaPnpwUvhRxEoTQf5wJCdtvAdmZ3EYqDs9P1nmPGD",
  "key17": "3Jbbc1tjkdsw1BT53rwvy9mEAWNGbj88VbLasxCo1eMd5a2SQAcESwUNvkNvS6FHWdKrDZmFmSHoFS6Kc9z6i2Te",
  "key18": "4o2tgPLDNUkYL3E49xFcdLN9MFpCxUzi8u3tp8r5vyhJnC3qUgnaaQnLNjn6NcFv9e5CW381Gu2Wd3tXk7SccoNh",
  "key19": "65nSdKJ5eVmRZtpZ9xJezFZTEGJhmCCycRisYmq43Ajp88ieCiMmdee4kdTmcMj5YZPu1x4514pFM93nbYmtDou2",
  "key20": "2S6Hw5TeQbY9PbLAwf6nHsDmxi4dinWpLVYCH6XEqNa1cHQ1Uz2mYyUjYooJLueCXMx222v1t3PQuCEGKVAqfvMu",
  "key21": "33rBsz4YPtfWz2RTwTHYv3Qeuj36hMsnKfLvFkooWGj5JGwMkmLTq7wNwzp1Rr8jUMporqvEK9snuJBDGrmgEzwi",
  "key22": "5okwGvDyw6wmhaSqFYSV7iV2RNZT4Q41ajMsDsZ4wYpfR3UaUBk2sCKL1rWSGL1MzuhzZdYWqxCfwLvqJTaSiz2H",
  "key23": "3ymsLDRn7jMCKj2gCbrPDums9Y9PmhCdnStGdVr8V37FDEzjPTJaHvtaqUn1tZGzXoAnLGKfNh2GiCXLU7vZcbAe",
  "key24": "2tscaocEgByhPwJeRxZ1zHkYk6GoqbaKrJ4Li1A5pJ6FQLuBsLt439HBD4gNMUN1kMzKGgpr241Xjxs36pAz9xd2",
  "key25": "4M6MaELDU5JwZHVBwtT3o4A1ARHHbsJ9gerF4ohJybfuKNvtHyyBAzeK8Y1uP2RZQH6Q2BKAFY1U4pZcgGBmW994",
  "key26": "3yRK6Xt9MmP2Ny2zBYhcRZydLtqWMqYdfMAqurpdgR2xYtw2bc1CUaFKUsC8BN8ZmrtpYq868Rdk2N5deeeoNvYa",
  "key27": "5Cru4i7Jvdw7vn8xMvGgHNPzBmtzkSKYwvW3MXJu1vJuWfdirsCERw2p4cmTfsW4S64CpnJas8tHfHH2P8nZdD71",
  "key28": "JjLHhTyqEK7FNi4UrJXesH6Lu5JEAcyeN9DPF7hLeZ6ZbwkH8dwvEFAc21W2A3Qenq6nBjxP4KiFLDKe1fsmJqS",
  "key29": "4SnA1X8dGNGXaqA6CRY2thPU7JgymcJvUYVEnJ98iUVoM5jGmcUjNRvhAHfGVnxUAEW4V75mTx9VpUVtCm2MVr53",
  "key30": "4ANQH2pHfBTyugzt2RfZwHNAb9tuH1JDo7m5eLJAEsZbXaC3jNPpNGgWUiz7YeFVKHiUVermMRXumRvUx2r2anVc",
  "key31": "SKhzx96Lg1rnZnUn8X8LJk9uGUZpry6vw3hmo1ZYREe1S4KMSLRCvXnr8yjpFzXLuvi56G739QbrCAHAqMQged2",
  "key32": "49vaZwUTAgpGxK88JAQ8bHgqBazXpkFiaF3zjVTAc5wS4Aymmov3trSoLHdZzLPmvaZ1fxp7qLBAVTumWiSyxDJt",
  "key33": "5Daj9GDiuFdTNxdjG8u4ZBVzc2LhMQXwsotuq7ppUoJvqCtuzvAWimzhRoGCtYR9qGz8e9cmDJpe6P345qvamdLm",
  "key34": "36d4aKYSPBj1XbscDckPsHMSbrDLsQJVASvVsssmbwYc6tPqV1WxQbXPYAWbWtYdYGPjPUQPDiFKSbEzMJsTDjxp",
  "key35": "2m1BAN2D1Ddc5MYVMMZJUc9W6QbjHue9iD8g6FpBkXw7so6J1tJAga26LvHbdetZvVZ3x2Riqr5XYHGSdVruvPFB",
  "key36": "3DtbLh1hj7JGtHYeqC5ZP2by5kgoVAqQ3jGrA9y1XEv2g5TVaLCC1RdAL3iN5anW1UWrLMw2UEZGKDARdhT7iYzT",
  "key37": "2a26izj5Gi8aTFBgHiphZSkNagwrsV6EmoUKLDWTeyw6R2R9UPp1QHcGNJqf9LrZFPeXhiB7wS1uw5v2R49c9GNJ",
  "key38": "3TcUbnCDSHsfam3KGuV5psmCZPs1jiCsJT9YiRCJ9EXWhKoy2hEYyHhnGgkyePswrsij3FJ5pe2hbfCJfvaHtqpe",
  "key39": "2JZLHYEbvxsBoqLFzAtodjkBhjv7j3oMTFHxDuv28Wfj7qFNamRnMetQUgeQqGJBSY9ZVQLXKhYvkyytzdktCrjW",
  "key40": "5dhVZLif3GZGzuQsJdNysuRA7ugDctRZVm21uAUDTRmuin5W1xfpV29EfduTEWuXe2dWL3wRcbMyWsNhf4TufukP",
  "key41": "4WDLjrgJuMx7k3mkr5QZLRvhPZAzQfMvhZvKPSPFs2hKX2Dwj62UGCg8MykYwSCj9UUNdgUwcNDxrmozvZz3Cx4a",
  "key42": "5Sipg8qz5r1Ctv9dMp9WrgLaUVuwB3MYBYxYySjeroCaMaj8qW4G6XLhnEUtaa217XcpbHqUbj2yyLU9eTM6dojf",
  "key43": "LZ5TWb1H4ALQEyX6kz6etfznkxGs2urnwndKG2pkGhErvS2KcShLTaTEzvwKih4YJZ9stpzHtddywx7VZZqfvcZ",
  "key44": "61U8kQDxa8ipzE8Ch2YCusN4SP9EGrWayqQjsdsot6BVPY2JZGkvEDCxFs2atPpsHHmNDasvnT8fnkqmXpuFuxHv",
  "key45": "2K9GG3DXrdgTvYKnqLdxa5QBCoPAhLt1c3GiYrwtMm8F5KGXTbcsa9PCVYH4pxAyD4F3rcYQBHkQPXUuzPETHVdC"
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
