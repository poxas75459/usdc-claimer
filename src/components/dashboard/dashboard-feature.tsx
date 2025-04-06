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
    "47FTPcPwF5aX1otkt6Y7nx4J53F6FfnKcsttMnDfGmdjvrJokS6t8GgfyjG2X8BDqvd1fAG1TSG7Y7fGCp8hK43f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwiiUVzvDe8pvH7e5obdjCtn3M9Xkgn7fLHVZdWMV4pv23vRciYV98MwKjyzkUcUFzALPZK4nWdC8fPVy5v9678",
  "key1": "rCmyfdwzjmSDyiyqdiSsG8m2spF3EvtswmVDXNyDqUbwqtB54ywN3zLC47zeDCxvaUQ37wk2UTgf7CtK8yQTtQp",
  "key2": "3GXJNJyzxYK9bKw2yRHCXr2dRtBTpCkv5RjcntfPBWciVqQwwTDhb3d6uyawevv4Tt4su91icU7KeHYvZYNDwsRi",
  "key3": "5f86h1dR64MfDEdpZtMhAzYACYj5CnGmFw1m3t1LEdDN5JNKeNUW6jDGbJmUbWtnSTLLooVisubcoWGaPsCyBeQu",
  "key4": "1zNo8bDq1tpmPJLUdc1jmD1wZiicUXMZaDWba89Y7mM4wYvtexXy6MDE3XZcCZrC1RSvgb25mhLmPdsg2F4tULF",
  "key5": "58y2TRvkFNanQ9zhsraauto4V3Y65m576HgAv5SQTgskeCBcPkC4u7i8yjoffTsn1HSRuw316Pdi7DEigDuQhnDc",
  "key6": "4GWG4uhp2HgnMFFQSeV3xfiTFtJn1J8siKJ68voLH5mxd6RmRnQfdD78BYCw599B61B6ty3ZMVuEdzVdejnTASDE",
  "key7": "4EhgGp6mg9kALRwEVcSpjfNeQbC7jF5bAHnNJNaEFHo4k7tQwd3ak3wjYSqKJ8kWRbwyQ1KQPzSPk2juqLMozCnX",
  "key8": "3w2xjVFWCJwurTXrtJwUgC1BECjrSchaZrnCj5pSF9F2j7D3sZpN3urVJQMWFcgYQHKaW8mAPo3aDAiCZk33SGRN",
  "key9": "58BXnTNQ5m9dAwVhvPKaKFMgDSndVaJpTFa2KwBWDccDgqkqEjBxt4F9RGnR7DGNeB64hwTrTK6nM9ry7KZzuEsB",
  "key10": "5xFB2PxTm7aFeWSz9zxaBEVo3kA44qrttvNAK77c8n533p419aEDFBrsU7J62E9ehVK7i3sEe2rxFLiYeP15rZw4",
  "key11": "tw3ZoYVXX2d4emu24qkH2A2BPndkPXwaYoTaqe1hm6hT4TxPxjXpKfLSyCtbJA5VdvkSBJZks6AsAtS8BnycGUs",
  "key12": "5CeBKcrKbpNap3Fhu6EFrT7zRzuGDRSV7mQSmPffPsaBA92Ghj6nxrEQ1FxkGvEaAeqVdyFGNA7w24BTWzPRRv4u",
  "key13": "QbmKYoYmE7HgWnvq6uboBUX9cpshYJBKkgBXhEfufGbXDiPhpUT1VB5F6QpyeC5dtNhKDuPbFY16ejsUPfdQ2B8",
  "key14": "27ZBWti2AruCQaTwh6wekzMT6GhUdaGDBdUYms5v3AFLav7L1UeLauchbDYuY3Xra1BGaxbJX9g2sciJKhpt6XZn",
  "key15": "3mxRRUX3zP4jwj5HFAK6MTYhLHVVbAfw8LsoEdSnsNZBo55DRdUNtRXwtCxTiN41kkyX2xKS46TZdwVxzyyHWDYx",
  "key16": "cd18k2vLnffQNjj1GFX9pmboBBpt6NZb2vYXKLMZRx5itRaRyDSkSjvK9tWKV89eGC4YuJExGcFghJ7adHRWS56",
  "key17": "3VJPcwQcjXtm2GmUWaknnfM2NEgRVPi7uqCxskv1Afrf5gpCTqSEsBYUeLRGdGXM3XkupsdAfMag149P2Syriuri",
  "key18": "5mjAabeGRgYbfjp5mvZwEwVRJ6Ya6jhAtq86BwsWbdHj15p9MhgR3MxUmAN24BZSsgsHEFozeDUaoKFaFGrSnxRo",
  "key19": "57gH4QzP2CrZk3ahFtL9UguYidwzsyVfVCh7is2z3yw1Yp6MigFiBL5CHVPgozg4fgJSKK2Z64U9hrg3W72T683K",
  "key20": "2Y2VkKLp5d1veuhqdRyTD26zYPU6vLwZTmxoSAsZzq5dm9dU6BGHg8UWMRSb1QgbhfxSgNMo48jhbFCEjLd8R8gU",
  "key21": "3SucHh9g4hHSFre8U3wuumiPPVtRE6r49SyoF1Du3VwPh8zdFNB5wk5EPpeyc8zuy6WMFqtwjXmEjtryG7RpyYtz",
  "key22": "5yphJsG5xAikYGWo1d79YEkHCf1Hqhpzkyft8bMb9efNAHzcjfimBppko2Mxunag6BzLuJWxNpJLbQtmuGWyXL3U",
  "key23": "3ULCWkM7Acx5gd1cozKtCY8msCeL6zAzQMsygPoYU4J7KAGja98WyoDxFQAwnvEvvDt9GefbaMnPCwzMfQEvupqy",
  "key24": "y1r1GtHjabAnTy8NekoZxBgSug42yuTqCDwuRysAVkfcu3YcZ71VpGGkGJ4EwhFufni9ADEkhSJbphBXbj8t1TJ",
  "key25": "i1xUtV2M4zqGBrqsYiFViuVXFT54rsSaadcksKr6fN6aHB2gBPuyhxkqo53FhaRuLf1qBtRroNSZyuv5ULnPNsw"
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
