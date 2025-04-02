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
    "5mZ6xsD3sChkJQrUBPCQjLrRLVbfU5z1ButiARvtvDPqBZH28pgaiYE4ScjzdEtr2sKLpJvs1gbrrhtj78PDQ3ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pteqhWUem3pmJjxzxG2UkL8deTfz8VyrJe11Q7UwfdjNSX9SS5QxnHuKwPjvvphCiAMh8N2JNP5ZZk8LZcC68jX",
  "key1": "3do94gttoLPBLavVkTZQoF9z41a4aCqQhPpQ7yjz1AzQHqn5Si4ALagdtQ4efcCdfTkLigg7ptSs5T57P57VT6PC",
  "key2": "35ZWqR6EWmkVbVT4dgKtLVg9nTogn3GqCNpdM1AyAZdWFoCB5gd4AJdaB6tLQWHoVmtbFzWRZuRSdpsxykLsSeNQ",
  "key3": "4MhDbVJtnY28Fccg23ijMnXddX96qR5U3qYgMQMtvSmfjNqtLk1qWL8bNSuXfWHer2fKowXGpHGH7o5QZes489YC",
  "key4": "5H6wqmP5Boaff1rJBnFunVNMgi2aM4UbiwACryhGfVyC3LRWbhbFg4BYLypNQm9C3M6jm1MBDi7A2BMVHX3dmXAy",
  "key5": "3JSXWtS7mj1qt4Wo8sgfRjZfjiUYE9RS8EVaRA92LFFtpkHFjspxsy82SYEJJAMnTkdttcfD2qLAv797uARqtdyg",
  "key6": "4PXb7yUtUhbKWomk2FCWj8Se2QrpYUDisjPRVp8WB2FLoidDW5ixE5UY7MuRcCfUZkf2igwFUbobZsosWhfnGbtP",
  "key7": "4orToLML518nutYPZyBizvKHW6Q164JzxJTENU72C3XHYtiCEG4vKw4G1TCA3uJyDmhnn9shbmtiW7c5Y6kF1m3a",
  "key8": "2N1y6bDAqqHLbH62NkvH6tTzPAEnRi83yntfudxj85F8MNXWEvA3rmZnaGMxuJcLF7bctWJC2CGXihSkPNuKKa4Z",
  "key9": "5oXzQTieWFL4ycuBt8Chk3dPjwWUnBaT2b7LdpftoGtUbNHJeSUJ8hnCTdHXzkvmhha9ao1VRHJKGa954pRTEi1Q",
  "key10": "QU8C5KsMCWgJxAYvzMGn4S12N9WqcRq8ZJrB8vGaD4KPVnGYYihmNyaHMWt9ULmw4G5ctruM46QcabTKZFmDRuJ",
  "key11": "3bPVUPLrBM3UYmdvPSR8SQK9o8RPCvETeB6s2Hsa46MmsjCjtkGNGyWLGAAiP43HBsjMagxhv63HWL2RyvPb5ASw",
  "key12": "5UzR5oXBNmcw9phdYmr91bTa89QLZ84neDVrR8BCfATWDrNjoXkRUw2nazWRpdV9DGpcDukDKFtg1V1DkNB5ugb2",
  "key13": "RNX64GS1AEm2bMDEnppiUfuQvYNeUjkTLHiyGnaKhFF6ds2wtUpDDmqzJG91aSButbQLwQ8kfcFa3eiLode5dax",
  "key14": "3uPe35EPfAV2ScwZxVJGmwUVSE6dpWkVcK8QzmM64EZwkEwQgeBo2Mo25oxpMTmU42euK4LQuVAMoPpE2QpZCpMG",
  "key15": "3u39FUyXu2QMqHi8gU9UDBcwzDqmmYz2yYY4pF4zQCstnPfLmHytnFCmtsTga6SwKynTVcbvJNA3bndPsXNzqTbU",
  "key16": "aB4tsPmS53BbqncmRsKyzjzUTppNtxfxCPMXBLspJ8VLPCtbeLPzqQtZCAMQ99LUVbhZHAnWwjb7en2d9mX3DLc",
  "key17": "5ZdovPgVzAsANRHt1TDigdcx1D2nET51sHF2BF5CjD8NQMLinDpnUmGcCaMUVX7F8p6hLH3vwn8SXPgfmppLMJS1",
  "key18": "4FFLkNeYjPmLXkaj6PSxLfdZUqCAsRiA6MNpj7PbroSKxFBsWZpQLWBWu271CBEvRHKiD3iZmgcXSAx1PRmrYjFR",
  "key19": "2zwRmnvnCxvFKRd4Qk3aF5qaZHPiLd9G5Rg5YAAzuXCiDvZZdcHBEDJxupJES2xkmtqevXRSJXvnSekCs1uwRXVq",
  "key20": "4FHxPYE2R1BqEqm8jCEo2twdTixujJShi5pqC7ud64BewExPP7z4CdCbLWLNbBAUfCWmBCmep5921hxPPcnLKfaa",
  "key21": "2dUEX16ZNZNRP7aFSyXaRLD7P1SwgkfNWPskTMGC6ukTfksWDm4VXeS7JWrVLbFBdwMcxQQpF74SDSWA852WfE81",
  "key22": "55YKQXbwR8oVTRJcUzH83s2tdJV5uP8M4CCNd9BGcE6otjcDizCQqnfL3V6cgGeGT8GasWof92EekyqqUTf1RQ6o",
  "key23": "XB8GzCnuf4A2uVRqPyKMPXjjcUZ6jXZQwmkucn3Pk2ZTsucZ3KFNrc9psXG72wiRVxqUath4norwifhZuYZdGgF",
  "key24": "4jhGs3CgzA8aBan9PadkBJq9YLiEF7TTiqQDgZQpgfgCL4K9yjfLfGWeYLwtRa2rTuVQc3fKnvMG7HGLECVyKCCo"
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
