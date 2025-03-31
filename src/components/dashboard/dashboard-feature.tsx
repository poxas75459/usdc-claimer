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
    "47MUfh46hjPf6Tnnj6k3TRCrP2qFb9YKDG23MGgoH4QaJvZTPdJqhRainq1ND6H6j2VUjshCJtiYmGX2vhVgwhHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAZ1yD2gr3sDUgP91hXyJj8bYS15qPWxBWagacctBZ5dTPnr8ksyHw7rRS3E2gaeYiGAMHpKfiv7K7TsqAWgTYy",
  "key1": "4Hdxt8xvPdxf6Z3dfpQvn4My6QCpxgNsH5z1xpNH9G8eTuEFLa8wR5jwexQ1TDQfoU2uH27Ud9pMAybc3LEiijfo",
  "key2": "3xYwybSCrzgvdwGcHTNYDgDg9YH8jHxnm3VSpXXqKVAqqycLrYiepfRZbwYYmWk7729vh6sCcfmNhGYuhT8YVBk3",
  "key3": "2TDQ1M6x3J3txv5eLbywWbTrjTk1vkZ3H5TpWnrWLZXbyxuH5VzMjub8bh2D5MLiStZJwZTYDXPqBTvxNr5KnF23",
  "key4": "5WoLA9YbzTjMKWkhjkdCRChushC2UJZ6htwaEnTb4U3SvKbhc3yNMdcjuz481PP7dT4VNotAGQUcvWoxCh4ba5ZM",
  "key5": "5WjwcjkPLVPJLn7oCA7matbET2vNAQU8X2tMuLNRBAJb5RQTZoTKCJ7MMT2uxenCJAx8A1WYNzfEM6EeT29rxhFj",
  "key6": "sMJcNXH5aDVqK15V8s2zNe7Hp94XPCmeQb65ifU3bth4ryAbfQs1iHFHnawk22LPU3xoiXSFkgumR1EF8yBZxoj",
  "key7": "5fMpRKokUPDZZTfswYzeqkZL8dba5LQgzEknM3SDNnHvGupKaqe5UFgiPRH9nNxSmS1mQmKRGTN3GuJUsYCDP435",
  "key8": "GA6Q4vKYk7GdykuxDq3QgtUDaAQhu3G4sVJDoP3EMQat1w8fQP8wHvPGE6K6mgNHQGoj8iz9E7HABFZetbeqbTK",
  "key9": "22PEgVqsEw2baWBNccEtVC4fKXdRrAo9gDWxRwgPNhXUFZSwPMfqgQYVcXHAzSg12Vm9bTGU5C9mjtHWAoKp2nBR",
  "key10": "4FBwHsfMeDZQeh97FWPrBUqZit5uiozAuSJBghkLCh895r6QyVC6fs65g1HD5yPgx5oFXBaUceFhwvTVyBVSCSLv",
  "key11": "5z3QPvCJRzJyRrmUVCfYBYpDpqUMHuL9tpimNsigNdTAGMvs3yuu5gwvfRZbcLykZQsu6Ju9Kxvr1d5hF6tQzWZy",
  "key12": "2VhXu1tvwwxx4ZizowDYdFo9J21HTwAz9c4S6EtH18V6hJFyDGo2iqveAbNnfXa3uSBfGPooeXuFrcvFHqXcaKEU",
  "key13": "5usqpRG3ri1QUHdhgNT3fHTmC9ACsUWTLzMUWDnPsyU8MaRZq76eMAN1iy9WDrm9mey9aszYWbTppMbrG2J4hW9x",
  "key14": "5orp3mdtiUStkch8UvMBmXPaiHkVnwhBEWuBvfmb4srgRDzVr68EevEYDyfcggfDtV28xQ6ThVLpNmY33cunLseJ",
  "key15": "5eEQrmDZyWNkknXNTNE8iDJw7n6DhdYbQRbnxMgtfE1ZLYL192nLsQCzXkMtUUmQypBV1s5iPQw83WktMsPUBgyR",
  "key16": "51bYCDP64xTYq9JHTkYJg9gmDpi5kVcP2taAi9RnFs85PjMfvdLzr3wUCJ47mkZqe7HQp8ggNGq8UbA6NPEccPc7",
  "key17": "3uJhbWHYivcVHqxPCSELypMJ3TJbfLZ3547YrqqVAbcSuz2yQ8Ch247hGkBfbobDprrM8rsMH3cgiuwbu73HtCA2",
  "key18": "3uswGELGRpP8znj9tVFTSfqe2Qgh3KyUFQrBC2cVXrqczWQ3HVGEK1ysg94WiotAkot1XHc3Ef4VHUh313rzgdcd",
  "key19": "2YadRKtjymQwiRpDrNuXfpSZ3bczRwc8fC8xDSZ1qxxsA9CceLDikrUAUpyU6fVkKQcQ8SxTP9Z2L1bVeU9hVpzr",
  "key20": "sLUx2i6aN5bhWNWkgApZiVviw339APGcN3gHHKGaYgg29K86M5gCvK9hmvntCo2JNTB2A87TnwGMzc2kPQVQQyf",
  "key21": "NMiwmPzjzX49Auj5vwj2JvuQkJLARtK8yJwDS9VPRc68ZWMv2ZG2jufu7QErLbCkfvAoPFq72cSe4ADCPM5BKLf",
  "key22": "2C8m7jXrLPgwiiM3RpofbARhzG2AAfbHyJ9bfPXxTdwdUiVCFDj7VxdvvJq3JVLwQq9tdcG7J16sPt4nEJ91vZku",
  "key23": "27qW4fHeveZvooVFjUHPt97LbT5riWyKY8Kftdd5qSkrA5GX5G9azikSYh5tNEAtqhoLdqbgNu63PTr2ywknQGTn",
  "key24": "3GQ3VQyY3eNDkTxYJnoews9kDqsR5GBSjNMkCsPUAAnSv4ApbtLyVhL4oU3izRnuVfr4sHfmZysvAcy4wmh3zvbs",
  "key25": "74HTbYQjLrNdMY5yNkSwmehtGJyktZCczXu3exTMnC3YtPeaZPU4isihKvJgDBJJogD8hovj8955aCvaFFNzKv4",
  "key26": "2J6y7P6JfWVT6Jmemu1jz2n9Ju4YrFRd96xeZv18geo1ztFF1EEqDWUyhpXcX6xga6Pb9RK5aifDFVsjG29z8Sys",
  "key27": "3MXYZhHFmjs5kEj1yvKdnEoRnTLNvqH8xkqJwPXdDRzAaryhH5yXioBqHsEpeMnApgUN6jLaQDKF85TJwgd2aKBi",
  "key28": "SRuSdrxtmTtRcn14XCF6sYnaxXaNp63z8S9SVBjtDvrspW72hsH5nXetcvZFahg6hQEAcfv2uKs7mSUH4wATP5A",
  "key29": "28KcQ2VgVLkq6XpNtQrufbqxYUZVdrm3KkGBCXYcVEQECFe8mAru7BDYuUvbKg5GJJ3rMVtJ5WQZvfHKCMTSzcwt",
  "key30": "39oWZpwVA9FxuzTEB1xBVqQJL6BVPUx2N75MEK5AmMy7DsrymnE1ptWdgV2WNbeAdbaQ3EQ24uzhLzRJ5kuuxA25",
  "key31": "5m44kWN2M4LbBcBbhAsZPfxFhyrkg3vVbxxC6uj7UNd7AvpEKcTqtN1fBnEN17xybLwDhm2A1CpyGwa6yLtybaBn",
  "key32": "5EbqrcpVaddCjRzhBkhASNskp9ViGYfJDTrw2fBmZCgjGjW1kTHArkT1XbCWijow2DkdfasG8S37C3PVLjRxUfiK",
  "key33": "Qbkbz1JVb6Z4GVHoVtu8mHZoAqJM4jhSzZuYiRRrQ8NA6GWFk8tn7fMRR74NkTiSS8UECQuAmk2MHJ1koaS9Rm5",
  "key34": "sxxvf1q6ez5uLPf4HZeNDMHzxZRmiJaNrdov7sP7kE5erQLTm9WnZx7UUCpa6gCmvS4D31g83DutE7n1Fhw3WM2",
  "key35": "4wschAkK92WwWtyQeFLnBAsT7y1P8dHxdpJ7RkAkcaRELtLKgfK4f7bWL65vFCNzhsS39m9CxqF15Kjck4DNwUBB",
  "key36": "EVoBecxPn6axYQeEr8x5MGBdZySYmiALd6oz3un4Sma2TzprDPyQvrdSDANbHbJNQsGBvWqQe7J4cyVAcDNti6J",
  "key37": "4NQu3EgAuigjVWQ7YksqVs3L9YsZ4na7iYLC1qwYURWKFSKNAztzxdU6Q1zcBMcn3CD9T5KowNjfKdW3X2uwHkvm",
  "key38": "423SyvvKUfEAPEvLiz3PMMDVvKb9LANdFWGT9a36sXv81bawxW8TVQL47SaAkJnwzrpiuzPnpyDR3PcXzAFJjr2K",
  "key39": "5QzTd2Pi9aMs5CPLLKvhTGJcuHtaH9ke9xEqrjCjvdtn8idzg1mwkSwAEd4yYdm8ESTdbboRS6Eh9BpUChJ1GC9t",
  "key40": "2GuHtcooT3uANgqZJcardAT59iG9P98q5bVav4ypnjdCyEXwsG3kpUF5k7YxGQvxgubQPpmfG5ViLafWUg67keBB",
  "key41": "5S1FuMF68q61V3FSFTcrLWp1zceaUVPmKXYW32yMqS4UvyhZyRtjRgS7z9S8sPxWgNciUAA7CWKxQPjWdUCbh1Gq",
  "key42": "5WVPnpe8iF2GnjR1i96h4E2PgiXvgjbKA7DACsyF1erCAijLiNp9iTpAaNYvnLi6ZJkLcJBBSFD6sn57zsuH2YmD",
  "key43": "679BasFTQgc9UVEw8a7TPdLq6JKP1zXEsiszSCpakFztSqWVXesTsY3fHbX3NdH2z65ieZ5nST1zArMwqxGSE4XP",
  "key44": "2vipVSZw6MaLGjaJmfSnVgxWaTT7AjTa5F8mRXoHnJ3rYDzgZMead3yMsXFTv4cPisQZWvJj2bgXZdykYiwsw461",
  "key45": "dvT4xp61vQsW9UntWwCkTKqt2YpEch6TrsqGojJuXRZ3rRPTqHmREH15bBeov97neuJJuc8D5fPsjFoJD6te3gU",
  "key46": "2FgbNYe1R8gmUnDGd6PtbhhAzCjVNGb1pPY7HPQdUSG7iwzGM18ssVvja3b8cUMgHJsadhYuH3kGLuaWU7F8Cx9K",
  "key47": "2nT6DefyrRjcsU2DPs73iAsCZVGEdAhLC2wF34eYXt4xCgKt3FSWAT3uFF3sfiLR3ivBvFhQabu3BDZFjXuVuD4N",
  "key48": "58pcpv8xGau2eMvWVaSgb8D1a7Whhw2XL7yWXxQ6sxdKAGjvihdU9arSpRtBAsafhZoWr3gU9MUWB4MQQ2A4d77t"
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
