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
    "JfT9VRubtzno9z9kFuTMrKyiJvGndt6Ck6NWCieYEybvarjHNWNpH45pV2C3KhXUivwDmCUgshoYYwy6ZFbWQEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JWQMJ7gHWBDDYs4xJw1FNwZRmvZPUzvA2dmSZRupzAeruGLYvJAE4iBSQZkZKBDnSn7rhKBSJpskCC87QWYJ8b",
  "key1": "5nY8LWnmGp5NKtVPnsnu3F34pGNrsXCPL13QUtiCHcFLUXWVe5PJKFGqwYBCGUmVn1naPvyjgrhkxq8BnaMy8nY1",
  "key2": "64icKBseedAdufBWSbMVGTQjzSXGsyURQTQmMvZmEZsF5K7kPhGHv6eQqJFwZSZDR4kMj4eNw8QTBeib8FKT5wu4",
  "key3": "3pLuuMBiqzDZWKftaA4bYj4D2PHMM6WA1F6StkCAGJJ8tGDCEXBZbCcgpH6PiZibyX9QorLfBS4xSVSEPUNuhDwC",
  "key4": "4CJosmE2bjk31vvJgoxz3opcUA66CdQEeYusQQKrH6nzBiXofZL5SzVgtuZYDE6FddzDm5Jy5MyJKCobFCkScs4b",
  "key5": "5mVjS7M3AQXTTBFFF7z4StUmCoHxyAJ1QLUgpdySGmWxYkbSB48zsKZd9G9LVnp1GgqwcDP7sg3qd7Tt7gDNYGA9",
  "key6": "eJbRqWxKqaFNYntZ3QaovtVE5viwNnc7YB3HESHbvjFShSKaTLaDEZ8xq4iVhYwzVsThQfUQiH4tFQyn3KzprDk",
  "key7": "5GL55z6Amgb15WZiqD5MjMUJ5P5VRMsotVBDn2Krbvfjj2HNxU5SUSGwCYiAyRv1PatNzTDvYWUCk4YiAPD5njPD",
  "key8": "L2CNQdSvkDprgg6s6GX1FC2mmab6pTT8hS4aqrePR7dLWt1P6dQWCxjB9RCuPrefoJAC5D8W3FVmRi1HuS8S2vN",
  "key9": "41mxZ63b9Wckqbn14PHd1DdB2HtDHmySvLxQtEfHwfqAC6ozW9xbwVbvUPGME28HYJXPUjpt5ZMU61ABwkKU9qjn",
  "key10": "4GjUo9jUgYUMtcvM1yAzNZsu3rARsz32LaYG3X9bqvTbU31Zo1Tu1uqVgPXrGQxjHTpaKJfy5puxaTqRBvZKqmbW",
  "key11": "2Vir2EgPaZDwouyHn7o38iFzsn82aLGFa7sYwcWkzQaPNtvrBLfBD9iKkBYsMECoh6fA1nqBVAVCBmfF6i1MSVw7",
  "key12": "acmvE4ivkRN8Q3LfaYUELfTnDrWjYnadZqopqkuYzpcPL9DNWTiA5PAyt5FiiK6PPZkb9kEVs7KB66RnVNEb67S",
  "key13": "k2JeZnf7B7HpFJ9XG64TKdYL1MzWwiQSXkShrpqvpR2q4U19V9SykGFKYwoqKeVY3QK9R96CukPsDNpiYBJTb5q",
  "key14": "4b125ddWm3a1dnnRzAfsFYkpW6HphxMDNwurgvNDYad8fNWzQmVQLxFPfvguE4r73B1Hp6iJk3gaHsWrFFjkQKBD",
  "key15": "4ndtf7eatZb3XYTEVWKCgmVKKYZKvp3apEs6yCFkFixp97vXhwL8ri6xKjaryda93HFmbcpUKiWvi93TPtzqS2iz",
  "key16": "3o9TvBJngCrP9cNjdYohztTubwvBYrixhZf1Ktb2bTToPPqJ7AuKHxgCfbLYYgQNJ2C4u7rTWLcdAVET2n4tV4N6",
  "key17": "3hpxdk6ApxEgVErLCV3qgWDgPnHmvAZWts25MvzSHZKan63gJknSKiWRL2jvb58XTbu9gYidQfzmGYhXTe3CyLeK",
  "key18": "QQSjdGq4Do3ThQxWNPTKqVc8wPiCzY9efW8cym95srRm8uLsfzQteL9K9wbYxJT6B5dqPri1Mzf85SAcP4KY5Kq",
  "key19": "3sbRywN3piCPmvi2ys25GidiSr8xu6Mt5UFJ4SJ2E97sztiGMy7nrff2Zed4952dj4JhiRnDW3C9RYMoemSzsZAu",
  "key20": "25J7azZ6rp7q2SqGaSykqYcECoV8b5SKs7fWfB93hHqFo9fjeHPxQnydNpKDJiZmtzHuSpUfr2p8iuwEcmRWUbS5",
  "key21": "enLs6yggtW27pP7LFbMcRJtSwvpDjsgi9NNHjKwMhd9joH9oUkZo3tmDvuK7TARqrPxygjr7aeDZBfZPGpFGd5J",
  "key22": "2mjrTfu89tV6bWY4USURVfWf8eCr7Hy2D9LkT23FA7esHUYjHo9Ku66wZbhWZN24BPEvU3w16c58YuPSFagr7yrV",
  "key23": "3X2kTB6ciZyFPHNafV63PVCTrdbj7KnXSSRW1AJDvxeSNqbDm2xpLKpVrrkGUwbwGJynivBLjtWUL3JF4yQ8Dc8v",
  "key24": "2PZWRK3c8VxYdtjmCyQVYFPbA4CWf8H9KhYnC9SEb3eQdhvtpA1gmMeu79Su4Nf7yfK6fcUBo1Vvyfdq92rgTfaR",
  "key25": "5CKpo71QPUDHyzf5GCjaJLt9z132xpTXCKYybztMPdxCyAmYbaVRN2yVMnS6NQGt4ojxigHKuNGeduwXE7MmKuN8",
  "key26": "5wPdHdNxsJQbmAJKpGt1iUeofxFELiRWNGqh4nu2z6kbBY8S1bVkg95M2D6jShmkUkdCAdKPiHXECvT4fTD5hCmj"
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
