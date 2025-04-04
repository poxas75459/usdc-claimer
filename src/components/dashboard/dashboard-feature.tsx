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
    "4qbHZdcbZgMwWQAbA1mZT56ww9SzJrcXdVBN9Up9ZvougVKkEtfC1b634sVGp1baN4c9i789tGgStWwZ4WdF25Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249dgrjxSGZMHRLRoEqA87dYiTzadJELeafPP61tdAj8VRxwNYkfCicmdrvfsoxHW3hoHdxp2JChuQSzE8BF3bye",
  "key1": "3pyjViz7ALYNxrVwxz8f5isvaghsz3yS9tp8n775STFKFaP7GBCQ5p1fKtLEmPaTAFLDjK14JXyzxxfQEsmFAADo",
  "key2": "WkLNk16BDMheVXw6XhH6CQHNRcHVgRuttpxge7gBbCXWuKdgodjZ8jQmhGW6JL6q6VrwKzfhcDchfV57nkMeBfG",
  "key3": "5aZ57pDTcjrLcfsfo18uWFEQ1598ELmGJJtUyexJbBCNzrLMe7n4UVyxnLPZ1S34zcDo8xVCMbsJJijTsFD6pt4w",
  "key4": "5SgT6pGhueAcLULipuWEy9fiGtYACwpsNqTodVZP9A2K4BeiV85jS8N7eag2fLhY8dSJr79sNTp9DAyNDcPDs2B",
  "key5": "3twka6RZYjga7TPfSCc28AEsZvCS7kc2cdMz585tVTi8J8hUJ1FWx9j1gg36HbFRQuTp7fnR2rwkktFxWUqFK74g",
  "key6": "61hby9JMDQgkXEkTJH82DV8WYLHKU9SqJxkWyMAiRo3zEnbosPwDPVpLB75mBCeKP8asEVx5smMqWwiGzd6crfmr",
  "key7": "27amaSHHW7WcStXD5FY2j83Wt8feUdtJr6ZZr6RQ7SpNG81Xrc1C1yxNaqf2QCAt3uAdvrnvGVvfW9YbC8M4fGFn",
  "key8": "3cYyxrtUTvXjX23FzTAt7tHmuChm7MJiyv3xjxd5cdEp6gRp4QG2uhhdYKapBfLdVmJz5aAUohM4t9fopM1cMwCP",
  "key9": "2aR81WTXk8SM82QJpm88jVhFLHgSPpWHiBnvoUkofdFQP4Kau1sV36FfWTZUKHg586BwcvRbGUhW7XhojA7UboRE",
  "key10": "422bjE5PkXSPYuCdHrkJi26o5Mmi6CYFsxrga1ZEACXLRe3KPd1CJAX11ciNxHLby1infWkprwYjjq2xEg3qCSXa",
  "key11": "3zBeHTUKugaCJjNCoEqMamVy7epTV1Zr7pCmbgbowUAjsM6UpsyAqEb64EALJ1PNNhD2fsECVKN8STbPKN4TH9We",
  "key12": "AtpWwwdYfsfczxEiojHpP5nFMbbEv9EutAqkRVGaf8uT6LGwk8kzzaaZH6FX5nSfcgwNzS42szZjqrfaVN4ryhd",
  "key13": "2xP3KtjLNmiYkgN63iwEHSabGcDLdzdNMyn1zUjh2Vgzq9ZAdGaEurZS9oyUBHAf8vtXTX8B1oNAQD53X66NZaoz",
  "key14": "3Ter5rmRFjysuUJZ6nt6X2bjbghuUbBcTu6tyyFVum8yR3XeRRCVjEffhjfHaCYWvbiFoSF9W1YUR3uBb6AyPrqd",
  "key15": "43pfbZP7hdYWvGbphjbsu1sjbKCmdrb6nma8akgqqx18BcGFyHP4RRurtA5ZDuAj94Y8N9bJ6kwSxsmHUwmTPqJo",
  "key16": "5ENtJ7WokmyrhhH3trPnN94J7gxqSEADFocM2jSFGFoCXPECvQijyn91nUKNara352ZoSp9FuY2EMDQRRLDqje99",
  "key17": "2zFLWXJWU8dRUQxrGB6h2TN2sSEqkBs5d4qmEGsS2gWfRKENDwh2Dfbpox2xmUkHWt9Mpws7djy9mfS4x9KHsYhJ",
  "key18": "4wstiwRMgd8nYg4bdf7i8QvHSFGbbSGyXiPRxcJ9a5q498TKrd96uMCXypHYYt1FpVohNURwiFNaJvrskicxEiZD",
  "key19": "fVuy8uRpwpukYG5hX56TtARuyGTJ5aeNfNuzQgxTj19PHE7qwxkGeEoA1ps8hQGALAcrDcGgosukK6R6Nw9cxAi",
  "key20": "5A4jCs2ePW5NPhFRQeKPn21gTb6TU1xFasTmoWTQCh7W8SbL6RFbMWHtRBceS9WSCRFnz8nLAWxGRn8eY54u69e5",
  "key21": "5unBVw4b7n6dHh1gKtJ9vtX6meP9zUsq8dPx7H5DBtp66QJR3pVQ4xtASKrxVMHUvNkByW2h22sX7gHhKgq5ZiLZ",
  "key22": "4FdrLm8ssSzdmcW27hpdjZAe68hEoU4oTuCtPkwhprsHXV72HdqY7NVkJezFyoZoaDerzru6bn4vjWMYMT2WYrjE",
  "key23": "28bM7o91t3asrpK6W1VC7UzeJ6rjFYGCMpvRnwjpBZ1sZYfTa4uWVMnLuWMQXBrYWjfVZcxecfcUVVrNPgAgNF8A",
  "key24": "42KosxqivrXot8o1t3zzoEkW37ZrvUZESr974ccFTu6wSHMk4dnkb4Mz4puBD8uJbtQEGkDtrKw7SnyzFoYjZBuj",
  "key25": "3pfuMbhg8atCNbAFDfUjyYcs5xHN1jfgXLRbHPznmFtP6Z7G3G8oYukSkusaa4aoDEgxz6KA5NkU5cms6QuJTmij",
  "key26": "4ciJ8sQD33gLiM7LA2foWgtiDXk34FuBYrZQrwuNrpWzad6eAgCEgxmxSVLt3cg16rN8gJKEYJwxRzLNpstzLVJx",
  "key27": "31acrzy62czZMZAeXtPWJ7DyakmC1GEoPAyqDQw3pqMXur3GrN2ewGep4BRVWEdUQe86VqSofsnzbm9RBsk6Gwb8",
  "key28": "5YNKPCRugZNtJ5M84fcwUhnhEvnDdrQrM8VkHM2TwqK2LLTfibAS3AZVWoD7HQHw1xhnVBoHRqU5mqesMg6hijQQ",
  "key29": "4WYhSHqg3BY4xoNWYjhtHMvEhJMB6AHgzbDSThsURg2r8mtVwk1cShBSmavk6pqiT6LnHj2tkxoKsMz4WLAZtd7P",
  "key30": "4oBaE6sFxoLRBK2JBaj8fBoYNFKBSbLnX8PwLFjhvnQSdrokokeyrP6h3Dx1oh8JmAc2yMfHu385dfXgvPPAs3VK",
  "key31": "TRBRbuBcq7pgzbNPMphuaDbhaL4BV8gHHxCffv6WcAytfYoWZ89iu8nQRqwXatywaib9pUPi9xhLmByFoKbTSTU"
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
