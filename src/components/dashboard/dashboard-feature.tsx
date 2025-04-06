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
    "2FqPWMqgYWdbD3oA9romV89nspnG91rzX8KjhsqnR2d9bcMafrfXSLqaq1ykfhMpgQdSC8PM5mBvfbB8wNdBN8Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Avi3txtBeYQeuwBXzVppCedVecyREPev4R2u3hF3aQpvoUv7jKvNLfz3FpThJUANzxnw6SgNDdraH3LG47Dvmij",
  "key1": "2MUkTwgn8Zifps8oZZztcRB88ba8HVm8Gysp1FuqxttRVNXD7nmxEW31F5U5ATiFi5PT9UQ2QcfrKDPw4ZDUQxsS",
  "key2": "2yY6A7uavUCGcu2CA5wmxwMb7HxtrGRoKQES7CgzeGudj5P8MftFuJvU6kZagrbsvs43fmpt7kVZYi3iRHKM1AXZ",
  "key3": "4Z13jZJhPWKQCnmsRwQspdvoorQdjkCFCBX67q7NYpB2nZmNRDoWyU7j9hp1R5CWcHnw3iE522cXSsis96CjJR1R",
  "key4": "WTHNzgN79rgywtjNUJXKTUD6L7or6mUzfDJD1EriDBtDD1XFvzuUtvFGALQ2u8idcS3dSVCcVs6gYoffSZfShCb",
  "key5": "59oLfUMSa1jX7cApdHQWBRHDBP2Pgm22jNPnxMg3p1Duq3NHaHjgeC2kCyRtJpUUAtADuLNcsjaAu7N7XbbcLTG3",
  "key6": "5kKXgFZKTK3XFKcuQqRrfTnPnYSMZMfv3oQTscR4j6sEFiePjfkg99dYJqFh1QFwKem9fbyhgyq68qSMztpAJ19D",
  "key7": "6792NFuFTqPaFgX93TCW8cVDec8bcrbYDYY8tb4Nvdup86hbDLQsqULatZwV3TQXe9xkpvmzeAurmM7EXzJCPjVD",
  "key8": "3y2ixnomqEQ2g4ezzBMEwiCeDV5AVMzdip5JPE2gZuVwG7coPyTn4ZQYSPPP8hHjzvTLfnTiVTMYdE8Y59twMybv",
  "key9": "4EQvWQ7ep4zHDmZFTwY6LHKY4ubcFPsS5omtzA17Shn6JsWnqxmnBZh58UgB843jPqjmNmFH6pjm2cKv9Q1TE9yc",
  "key10": "3fCxKM1gmMrMEbsxYVAbZW9wb2mFc8DBEEXEJ7QAFNJxoV91idi5pQNwbqYzCyLRk9ufhbb7W6pSXQcouhAVqd4P",
  "key11": "2b6ycn6K7zMRWTRncSJY9qiuMUhnDs6XWjP6pYs4DA2TszZWgJUQe9MbWuPS5aF6ihuoyXK6ZJ8Qb1gJXC2Vujvb",
  "key12": "3bQiuH5xLxYZrtmLz7Z9fbYu4qhDLx8zNenzVSWk1Ck8bLzEqq86q72Ar1sigN1STMrZXy8GK9rxPTarSi8ZbhJR",
  "key13": "26aHhRCnwMvmYwvdyb2rtuJ9pZdotqJG2awv2gfMZ6CjfrbNMubndUmxiru1fM56tr9enT1SuhUX1r8StesXdsHP",
  "key14": "22AvT1EeDtS6WAV6EsLiwaJ9nkwAA5rti8542iFZhvRcR5XH4LYedXNtv973FFggbkFnL1nbFp34ksGovJA97LSt",
  "key15": "47gY59Hjj55tddMCCeb2nKYhm1pzyGbSCsb9gnMzUtrhMoetRtN7rJbhqmmSx8n7YGW3msV6r33kQQCd8BdnTm6v",
  "key16": "3PbExNEjM4Pa3SviingGoode3mKTptEpN9W1DmeBp7bsBQ4TihQX3jexezwPDaXC6yrCtfH2kmNA3X8DPu27s7ee",
  "key17": "3gAKnScNAER7qJMoKmzqTVYDUFopp32GZJsf7w7Z4kmcSWuMfaiS4gSXhAMWAV7xNXYJaRqD9g87AgENisJaon3X",
  "key18": "5Qp27MiBMsCgDJA6Cu5dkzddhv1ZuiLkz2Wfqj7hJogURAgBMz3EZyKuTCgEaxkUxmFC8jYsx4RFeccndTPR3hd6",
  "key19": "Wrqpc4DrcsaJr7cD7t1AH9vxcKkMYHLdSMqN7jixGSYj2snbY76T72GwxSAEmfX58uwzAoHmf1dcup7Ht8dG5hj",
  "key20": "GJL5e9ywvn8koyEhdnRRF7c1GA4eBqo6ET4oBeEA9qgbVy43Qr573cR9KwrsTgZmLsVnfXVRyAwko8y8g9GavDQ",
  "key21": "3HohsaGBcjEjuVkUTbZHW3GYXhrf4VE8rTiihVjbp7cpNWU5rArSgjncRmxJsqfeYXWHfwM8T7bQQZSp4P67tyST",
  "key22": "2hphw9N7vFTkRMQK3vz9avrDU7Bzuytpi9NvPYqF3iehpEvDdXWFzjv3Z1mpryacZ8fa2pvHVvfTA58nBcrrW9bs",
  "key23": "2YR7eFmXu1ihuMz8P37sJwAijTeaQFUXcdcMxC95MNKfWRJNp43FQetaCrS6jkNKMNDrHsGnyDSmnLtwqjcSV7xT",
  "key24": "56NNMKLTroi3df8n271wC7uiuiETxXTiifcr3w6SsrNFDEATEPAnt9VRweDsud6AshSDTkrnMtWdWZ8q4Sik6jXE",
  "key25": "5p1NqZcfh4J3oHmNz4mqawmbETCmXQRRWLeesop4CmeKTvLaqPmNk5tHdZRRcLFK1Riwvm2eDmD18PhCPydfJFjk",
  "key26": "3ntQBGGMQo9tyiRT2tXxQ1uonABGRVZsVkqKVF82inTXt9ZYuRk83h1oocyRYPDuNZ9x4N3ukCGiwPHP5aLesXh9",
  "key27": "5P1oK4Qjb7z8di3Dm5YErHLyjMAJoPVWe6BHuapcDXFknudqVTo8r4JewMD5p5KTCurPMgpXw3YKQc7YAshPVQy2",
  "key28": "2b5gv4wwt1shRUamN6VbZL3MD5p1gBygMeVJLtn6YzZrpT8mg9hWEfDm4Ai1uPvRCejx5Gb7euzhaAYzHCeZGB2e",
  "key29": "35V9httotCkS7Vzkf7xDsGBQaQfchqsPzzq4Mjic5cqBEd6Hd53ioPyLfptpBUM2trAgqM961xSfzGaDS8uRfQQM",
  "key30": "5nsSMMExoe8hurPZg2DMg7C7Eot1RjNYph4YTrUTCEBXAuEYTodWbwexHL8WaUAyUEaFT2SxtEeZNgYFgfwGrYq6",
  "key31": "3D6duKgG87LB4SSwc2CxXhjJaaLJ8iAR6Sfr3MVJ6GtPFw14RWA4yV4DfPJ69EDBHLtx6bPyspfsrCV39Bf4Pzpy",
  "key32": "3pg3bPvpRgr6DQtU9m3xxvbUfvuQ4JXJfXNJD1BUCakboR4aKsuVJTE4DGrr4Y3NzPtKQzXTZ5n1iQwSvNuJgWJX",
  "key33": "4tQkNDLMx3NEzV2FAq1V2KqF44FnP4QfPaKaK8awr5t9fecFxZX8GncC8LcxfKnXSBqDshJHqSPnnjC55Sq3Fz9U",
  "key34": "z4vDJCm88jLBgmFENJ6nCqE691nFKGr1H3JJ99B2GTQcriMncmYfp66ffd3w81aH2QHPjE9f8pmtFmbPNuEp8e1",
  "key35": "3Lg363aAM4FzE81cryG4MjbwUMAaf8xVH9dbrVHx4B3VgtqRFT8m9Fz7khJoeqeFgjWUAgXjNN5Ew6hcXtDWFCSA",
  "key36": "4vLJy68hqGaDPDhsKdrEEghVepAwgGNXoomWN5mQrPWDdNwCGogWjvSTbU3fU6Auxx5Sn3cCN3qqmpx61uhL2ChV",
  "key37": "52YZ7M7uxFkxYhddjoeJAAyGPtq5yRTS6Jy2Km6Vh4ARcYZfwF9JbRNRCwDrmPhX4EsSQiFEXdQMW9tKgSU6ViQa",
  "key38": "3aBACiYMt6SGWJPBqVzuDyDELCn6BroBprBSJM8GDuk3C9sL2fjv1WsLojPRP2HyvFvSJ2R7yW5uPgJ6qZ3oek8S",
  "key39": "MhoDPMjeFYzjq4bVDZpDzUHicwgqZdSGhRWELR6Gbg2z3XL3e5gZZZm2YzWd6iZMNxH1ybs5pBVmukSjR35NS3c",
  "key40": "5ZSGwZvRB2zLrGR2TTD9Gn1a4i6jHiwJ7CxpXpGYNAnM8TaXyJBrwPtEQEMTpcmLmMmGh4AUpB4tF39SvQhCbHwg",
  "key41": "5iNZEodaoRKHXx595YkK9TvLBZeuiVtXRcH3YHDJEZkoDgMtFoPKKxve5JkADS79gCUSfniaEJeTmewos21y9ovf"
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
