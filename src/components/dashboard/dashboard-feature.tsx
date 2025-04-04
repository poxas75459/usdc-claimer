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
    "4CagPDe2nqXrDjLqSTA1W9jSnEQ7DoyRLNoAF4Do5Hs8qpDFXkcCHA8Ncgj8RQsV9AukBhRDuooVKStWKQrHzUtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6NRpg4oG48ERjhG5868SJejzWzKabq1KwjCiAypJuSFowKUWCCrNxE97fPgcSnGmtCKitk4NKJL8o2wfvnEECo",
  "key1": "2xAgQwT3SfCRAqP335HwdpwtcD7VnUc1LGVfb7vYEqbJWAeiMcmzon1tSLG8SchRGS5dSBJ6hGzS9nCWN2UuxM55",
  "key2": "4RfgaAJMjaqQXsLFJpRwm6VPd9N9KXFZ3m4uem35kPoDpTU1wVd3RfsMDsLaKF8UD3XSj7TdhigiKjwYrR4KCTF1",
  "key3": "931AQBNUP8CpUze2byQ4d3QHkYwvdYuMKmQj1a49AyhmYjwQ7qc5EVHSJeV1v5M89nWr3AZ61E7r7DV4cVTpWkN",
  "key4": "56nCbWVj1v85YXCzN2wXii9kX18qatNrYxvhDQr5Tho3Ud1jePDTrw225nA5mujSDow5mvp8Fk8z4Hx1BFQ69wNi",
  "key5": "3K81Ek9oQCFtgFrsSd2TsKBvKcrtcSdCJGRxNmEQFm7BzJLMhi2ADpCtm72j1onhjg78V6iSEwaBC2xDFVMFZb2f",
  "key6": "PQEz7MDqEPLve8Xm7Jcng3Rnju49FWFmx5DTPgj4kSkoP3WG9qW59EQxP6iFxKRTmDvuvEwQwKApBMhSVrNs5sd",
  "key7": "3MydvV5knqQNqDMWakW6D4apEa3Fe592R49VdtfGCgjYftFMDvsVMg4aHsBqTkQYQYLPEEaDHscnRvJusEVTCfVQ",
  "key8": "pg4YwEgJzwzbrR7W9vJEkEYP89mFEdCo5KrepzrHmyncYX8EzCXgXJcDGRUhAgbAnLUbyFcbh2SJm3cdHqVeXHL",
  "key9": "4GFni2bgNwQVQRJ4gTLqZmB8mrU65D7Eo2UHiMpESKf5cpEtce5LiiPNTafdokpcTQQMEwWyCQ4wPU7M4J5UCmaB",
  "key10": "5o4VJ3NYuSxZW5bsrZgaHfAVuQ8crqHyvD6UUUqDTG5PcFm1s26iv75EaWTZFDcmSYHhEQfML4PCYwRMiTEmRCUC",
  "key11": "4dK9DoJYqqiTJ5eyaiSeUAXBspqBXBhxbvcG4kM3r1FRnoc6GNpMLgVRwNZwr6eiiTwMzF8Pw1SWXZNPMJdPJdjq",
  "key12": "59xbH7oP7owE4Ydg9R6Vb9o1PDz3FvHUtbf593Z7zVBgvAR2GKEiugyuMF5yffrFuRgJCYennBFGHJK5fguLuxaM",
  "key13": "2aaFEdd4E6pqVK2VBy8ajcvQkDyghcfGAWfWW64jogJsYN6u2G8PUv3XYEJW9QyQSb17pRryNxPKXhXRT9Kzzu6M",
  "key14": "3o2EYYdifPqfSsfxBDsC57dzDuYV1gcVnTQxC2sNPkzgF4SbTm8Ye85BnpbMC8KBCxxiP9CrcwqdX9ZAMU4FDb2c",
  "key15": "5gtdTdU2ggzh4N7mnLKB8jET5hHhBTEDBsS2PjiJtf1jnioMTggYvKjzCUTyRCpGC2BHdXbfhkhNhrpNjg8tyGx4",
  "key16": "5yTtzpGtrGDEmT6m2yY4k5kj4KqusmQdXdsEsSNW2SFdksJvtam17yjiQcASJPhsgAb3pfGsssZuFDtvLEqGMQNM",
  "key17": "5u6DAQ2Jq7jaPkUkBJ7wnAqsdnFHCBMAfy1WPPndJUfp5F5YwmAQCaoCMFwUfQderD54k3ar1kaedjzCxJYWy9VS",
  "key18": "59o9VRAfx2AxWEwK6RBfsagbStsruFAiGro8sp6m1D7Kznqja3dwq8qZ536VgYTACufD5f2g29kMhJSqeuiH2DNZ",
  "key19": "mevc7VAHUjQW2shFNbNc6N1a24xPFscwJbohm349E4EFyxnWU8xvBJJTcRbYcm3DPRiRLYxeWR2cnzUJwsSFqZ4",
  "key20": "Qqqumni6xPX2x7bqBxfFcUHExRXEv9vxwzDf7aSM84fVSwgYVcga7UXdoXwoevHBih69XQzSiRYfHim5NVZNevi",
  "key21": "5uBJtjY7Km8mDG6kwu1Hx3kW5UZpvofkY54gKM4fEypzS2bhYLeszZGddEfZQE4wt1EVPJd4BLWAPCVPbnTdppR9",
  "key22": "Ai3bcUAMnAoZpT9Rr3nBW2W32MY86EbVmFLEd3P1QTUNWZ4S3WrexEjrMww1piFVb2Sev1ADZjNuvVnVo5CP3zN",
  "key23": "BixPFoRcSD3TjM3AjFNEBZaGGNusHoVMrSR5PpCngMX91m4M9g2d2BKdMox9ypCh4C6UpdVFCPbz1pugUVx2ybp",
  "key24": "tgMZ8pPZ35QSyLxyZyRUaZ4WgeM9dJefk2nhrZxDnKVuTHNpiZFEnrmGFU9nEod4CCBLYsMsR6yyX2MPRUJdx1R",
  "key25": "32jUYkR4xKgxeLSp5D7qJRmY1jiMQ9Z1VwJEaXfGZRPS612TG2oADfVovUv4RXCnyzaTU5uBWUoCLGPSQsxYBCAt",
  "key26": "yxcYanVvkHSqbyiHVB4D1FpzfzhJnczWemJP4q1wQ1pLaWEf1uXxkkJxpoEEsobmtasqWZjeyZ9jDpuS6Wa7WpW",
  "key27": "5iEC7mMpaSMDnoD1Dby5K3aUitCmigxpxz6fotQpZuiWbeLFL7Fzzah1cNGCiG4Jo4ZEVgFpRNtmB6bb9HAz61JT"
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
