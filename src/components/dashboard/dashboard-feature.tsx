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
    "4yUjwbbMdoA96hJE2WNGFRnCXPdS4hGPRUq42XPVDbtf22ycrAWJrCiE1UsF2zqe6YxrVbmX33gnux7jgvmn4EmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DCUxVdBZYJQFNFpgtjRBRNSqSvgbVEJAt8sF51EZTPLbNEp7KaDhJjtRUpWKB68hTb9VYcHhhpqet6NHySHxrq",
  "key1": "cYf7LDgmc4YWBmq2fpw2nyFB8DnwNx9xbUKRXF9qwKVqDBofdrVf6NXrev5wWCDwSkiuaYz6Ggs6KSvf2Fj8SJW",
  "key2": "5a68B8opVq2pYsTSWAd4UrY9r6yFBYVLWnEwDdy5mQjB5hh43scLg2LLwggtnrUqrmCnmdH8fBbjj99RYobz3oRF",
  "key3": "W9YwoZDyD4HQne6K8h9z5iRaDe5auM3puUeLVJUoVy83d4TtXeMDMZiF93MYw1ckfBjSr4T7abhZwkvgtYHiCYN",
  "key4": "3gbhdnKDnWR7y8pXpbdHTjNyG3MyzwDZ6W2MQHskKAeQJY7tmxSwxEXwwdgQriW8xfEEoRqCB7d6yG1UZoaSoook",
  "key5": "5cVKeGYniwcyJV243AkfvLykWr5tvzkiQFLD29LDdTnWvXPMfyPvyJu2z2zYWtUEbahGQ9whMCYPmYvgLVdYCN8W",
  "key6": "rQxtmko2GR1mLPfn3r4u4Vnpd2vYQdcokzswbYBukid3kXKEPNLVvdhKUAAoJge6nVAo6sXTLUqshx9XxDt5xuq",
  "key7": "2Db24JETsnzunvobTQUvozNSYnQ22FBp3ozmmL4fxALViiMiD88BnavkRfv5XoYgMuaNu32Fv8pYojGtQBEP397t",
  "key8": "5Smek1VZ53qBXfwXk2Lnf4gPnXSva3hnbEQ3qAVPmWj9uxAN2CGzHtoksAwsn1ivRZDpATZpPx3WTELtgZrhpBSF",
  "key9": "5vkSFX1FDpE1kC2HoV1s9UUuj5E6Ci3wh3TcYFcfcqEHYZSRCVco96J25MaESKGcN7tKorN1C26eFNLvTUjXVtvZ",
  "key10": "27gVC8ND7D9Fj1mP9MfSPGMpSFBGavwxQVHuRA8kHu6RvGArmfF9dmZLe1YEtPwPLtJTVrejDkmXRmnS3ngFz9ot",
  "key11": "495G9qwtUEJg9nzN2FNU3VdmuNiLftFWZQ4D8rHPrBXVJjnmryp4Ef7yTXZzMQZvdriwgXywbPU7KVysHr8QJ1WH",
  "key12": "4P8iNRRzpkT2cDFXWKr8DvxaNq59oAXZXRbaZ2jSCtQxHaqH9srmZewozbbHdrw1yav22VHAegSqL75cb7Q2aC3Y",
  "key13": "24h1rszuJZJuRTmH2MgZSYr4QRGvBcnAd9iwzMoxNFGHoALoQ4x4xcR9hfEbrcAshpLSEohMPhq8asUNWiU9WgyF",
  "key14": "3KfHJvZWeghnrbHAXdLvj33i5DhRusHfXJ8bpFZRsLzGfp2VrpUXH1enJu6wc5QEi9YPXC7Ax6kCkYeKnwSfAtB5",
  "key15": "FwEGrZdkK2D2xHmK781UzBbgvt3wZLqC7GxBWsHG4XTH4crhatrcjEe12tVUnMHNpTnMEama1FA8bJULVqGz2WN",
  "key16": "2ydUEUM87VgKePcd4fGayPZJuSC4TB1bdsehoLRdnMgNhuSd5M7ptDGMaHqcC2N1z2GgpEhxd3rbpRVXpA68GiJd",
  "key17": "2BwuRsCZEPErhdywwBnSeAfB933ytfP8vbCfFi6qAjRUe2CbtHhMHwAi8F7cSy2wDeBxQ9huC2vB7zDhNbxShxSq",
  "key18": "65x8WhZzcFpKUj3rMVG7WXFNFCvsySQ2AgdR6Np9jVbkNVJh13jHiW99xB4v2jYdd1CEZgAk3Seys9rTL6nzjH8",
  "key19": "38WpNCbTYmq75bSS5Q43Kum1mb2f1uUe7hycqopidtqPB5TqHiP6TAJwsk1kvePJctYBpZDXmusL1LfLNqTX7Smk",
  "key20": "2rP6mCHYVVajHLiS5K5Mem2vGDdzmFZy1vyihABUSH71jJwXeazskTNDC7eysjpieJa3y9duWaTwRY6yjhaV9RVJ",
  "key21": "2XsnK6MNvaFx5BxV2ZCKCtPWzWsscZAWd1U36dTbKenXFDt2PHN8CA7DAZVkcQjoXVxNzQqQBauoSbu5KK8xsP8y",
  "key22": "GMB4juf3u5ScJB4JY78AyM1c9sZdcNZJ8CFyYma4ua95mfqUee3ESxRS9CUfLLyc9Te6iCkGDS7sAQMxcS9utUf",
  "key23": "3E7iuvNGZm1WqpDLEDqXLee7Lo5pu2AfXaVKjUVfAaQNYo79yJc5LhCmF1XajeYJ5k683X3aTnphmhfd8SFzFuvP",
  "key24": "A4jMfgvD8W1KDtZhakYk1W3eTxVSxBYQpCK1jxDZUJE7tcsdsHnGsmuQhR93dzSy9nzfEA5PMbuQX14ZCbHC5M5",
  "key25": "gzweC38e2rxormpz2jbV2yRYcmYh4F24jboALg7USuc9wL6taXcG2RK3cD71B9xDucZu8bEDwcXzffp65kNkGv2",
  "key26": "2xG1ht5ZtarvGigkSuJ2TrtUih1WwwGqLdR5s2Nud5UbpotHURtZK8SthXDyNKAYeSLg2W25XGRah3GsgBi8BDGy",
  "key27": "64wKVGNBzcwcyhozF3NeGyakps1ApxnVQbYMM7gZQ4WGtrQ4cmSHDFZ7pVeaLPD42FbTYroRQzAHe1BcjavUNtKq",
  "key28": "2zdxWXvUQqoyQa9AKFDTeVAaoE9vHZioQ3EcPomeatvQ57ReG9ZDtsNMikYNm8kNEVp22SCuf67oxWPhZHWNV2wP",
  "key29": "mXEGFZAjiCSB8r8oFh69q2E8B3zod7YbELTUWD32uF17v9Vi7QEKsdKKdqhg2btMoZUAwtCaDQmD9PLmaPvcLQu",
  "key30": "4zwmjpRHXjMs5QvdjE4v86z7dZqJ1NQLkufVucgQeamZa7KGAmMwQgepWKckTmwZa7tMfhMbCDDxiwoJzHdRxVX7",
  "key31": "5kyGKxZ1wewbGyxzRtFvsHVtAerdkZWTmnyoMMnPS6xb3RYsuMXFsoi9SCtix8YDyz13GW7G2Zj18Xvh7AcGrErH",
  "key32": "2e7N1K45NKLLwRHuFzftq7zvnnwWLp45aR3Fde3itf5KAsc991pyqiGwRfnYbBGLJ63vqwPrVzuYDg54Vx3cytpV",
  "key33": "2WWcTn2fccSJVyJTCPKzdYwmm6SaVTQqgQMyUw5nuuMs5S2oDeQJiQPvKG9NLcGh3cyNMhUeKckoUaEA7wxJVaoF",
  "key34": "2Wys2dp7MXQuvZR3tXo1VYTyAV2dHrcEGuNVkyJGNbeYHFAdvt5rP27gN6nD6bfbZ9oAWCPuVYbhSumaLakhPrTP",
  "key35": "4aJx6K5fcrk4dgNpqqDxLQWxJYPtYWaC4GcrDGY82r23nJcoV3LZ6MuUSu1hfjgPpRzfAaJAjpxZ5FLPQK9RNWaL"
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
