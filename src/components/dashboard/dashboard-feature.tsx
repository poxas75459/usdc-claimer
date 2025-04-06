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
    "2ne1KunnnsBTyoQiqvyij16KX28DwnHRrFAA6eaTxCmcHEFq9mREoTC5bTXHdGnPb479qzqKhXscQccDJhFi1Aiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxxA6TN3CbUE6i87nCg1a7j2fWD7XPNsXgU8jctrvH937Nr4qAVvumZtueU8P1AK5vSUt4PHo2oeBGmXdSwDJ39",
  "key1": "meGTePvBDnHZjDRswiPMVcYD2UXMKuejnmEhKS3aeRNczqY6JyAoa132GLcE6BfipCmJeAqepjcaC1iAFLL3vXZ",
  "key2": "4b5XDiVeZDUc9h98xbYsHM3bNHEE3aFozWh1GnNKCykptNf9yERjqgvLEeXyvgNKmETfT8eqroQYxQWz4aGHDNej",
  "key3": "A3FvssxrNLhxkpVmuaSo6LFsXHga9aLw4MWg6pviHoEmRnYHTmDAoGsmHzz1dsqubqx9oDWYVCNR3GZix6HpfUP",
  "key4": "wDZx3Em2zf1TeLZanNbtSaAzv2pnmwVZB2ZyYRMGLzrZXeEvYXofRjwNwX5PxM6EfXE3f4h3Qt2JqnHYtFNGgPA",
  "key5": "5eHXeMF3KUfBFCYoqCJPBWiV8AahMZHd9gwmVyQQWSKU3q289JHqeK2fa6Dhj42jstc16BnbZp15neFJKRXjFvkh",
  "key6": "2HXTZEEZU1nCLQkhnXykkRssjbEHxHMGyNc7dj2jhw6z5NYSk3SkwhYo6d7LCdECLoUc2EYjazvETaReo4PNj4aG",
  "key7": "3qFKm8SyqX3V5ztQWiS679CQNn3K11hhrnGPVP7VVJkGy2hLLs1Wt2KL5Vk7LNLDDp8497i8jB1nJmGNBo2a6Bb4",
  "key8": "2E7bqUvruo4ho2UganEQTSPFHLbFTMbtTaiyhTzZpCwmBokRyGbuQ6Tig6p5MYp1en6oziS9DsQivnRcijFQdH89",
  "key9": "47UoR3HcrGjjkvZrumYEfXh8RMA3wwAxEPGsRDxu7t6MiLV3f7xrg7bU1v7e5poMbotiUfaq1sP42LiK1UyurcW6",
  "key10": "3LqnCgo8VJMuoaa12Bnkk9fEME3NLw9xcS5Bs5wAsso5BvoVpZKgY4vYQqYnunYSYRfN1AXrxfiwLQaDaP731Lzm",
  "key11": "31A7DxcmzNGZoCJkCif4f2zBRovFxyZyBurSDzrMVGX6m5iUDvthp2bQyBNBgtwc7qbJGbEHCPMmYXkyfoKyHEkW",
  "key12": "2unM6TRGxk9TgFwn3f92rwqAED4xBJfg7mbwrxbb6ef14mDDK2SVpuenzDjRq1y7DdVHAUzzqknjEMqR8UPySYc9",
  "key13": "4Q9Jeykv1YgZzzDQo6KZKTEhdDmjBuWL6q3LFr3QaJLDQDWuSqmzMkDb92fR3nTudFr3LxszZxywAtMHyuMVMVQA",
  "key14": "nU4nZboL6nerd9fnbcVGMTLsnAzy9YUJQ1gtDKZ5ryw2nfNWxozMvBy37zkYi8dTyCj7Xd2qiySyVJzdJiFSN19",
  "key15": "67PzUVBPqcPSQtqvhHbWPWXpLxyE1PtjTpWyZzB2556E1TkgdoM7huhc8TRBk5HyPNFWdjkxVXcERB9EYuSEeGPz",
  "key16": "3EM5amcfgJwPiB3rpYjNHN5aMGCDLsssUXmLXuhT8eJCNASyBmUYjxHLjAD8S9eFBPrh4wPoCrbyqiauxJJmdrgZ",
  "key17": "PDJnPBZJxmrN7Myg778onwR7hoE2zXL54vvY2ZWN6WV2fruXDnoo5hhA7cDsJ2eNoieKSZLzkP5csDeEDLT1coK",
  "key18": "2vdw3kg7UAb7eT5WQ4VhKcYJq1Wo7sTrnGsteFGqPoGi6azDM4hFM6vB4DCARD1a9bKJ5CvbqZW1Ss4zHYGWWt9c",
  "key19": "1PPWcC351B9zVKn3Gzu8DXjJoDVV2QyqjpUjtt4wuMssxv5t5eLKJJ3FvjMnHzDcwaFm7kenPVJN8JNry27rGzQ",
  "key20": "YWiAYvD6cvC2qQdALMDkYSkKqzctzEdtpVdVgzFRDdAwciE33xWNov97gijWTQFEPVpJwZst5kE6V1S7Nu2DgPd",
  "key21": "5sfuLYqXtyi2ZPV89kKPpet1sDjyxCFdWnum2amSkvmBnUyy8bJSQcaU7ExABsC87AS2PcXqFXWn5jygVTerYDR",
  "key22": "4GVQNBdrZ1ciiKqGi3a8onXQB19Kj41RSCDGZVTNp6hyDcVdYod8eSvW2w8qWTuqNzDLkdN5Fj8aR9vwekutJAtE",
  "key23": "2zvJPWLJbvHziS1xujXRz2NucYECz2w2gyX3N8a3ScxTAGk5FNox3ioc7iSurBu9yxQst79vNnd2wBuWQgdF8fT1",
  "key24": "25WwXCM2YhTSpD5YrsUeBkvKdpmfBBiWQaUThHr5ZHxACA3MHNSyXywkgp8HaZnKwnxo8e5RVSHHtgEYYYdmkJH4",
  "key25": "3ouWAP1aNd7Dmt7G5Gi1U7gwibV8TrN7xQg8EstszZZksyFbD9Jvo8vZD88Aungioi7WhTpzpz8U9mL22RL3pJF2",
  "key26": "5k9iNBBaHW62voQCSsYdAtQgB1186Zvsra5Lt9di7rG9q1pXBH8zvhW9YGFXsYrYpJr5SV2rUG3ngTEAdbYKTY72",
  "key27": "5vVKGiJfHE8ubUqbHNBsmsKBEoUhPGboR1yE1oGDzpyTNcM1xbBdk5xoNkwwMmCqFCAKy44yCEZhkRdpW6PPWeT2",
  "key28": "sq1rCLfWoeTvRMziKjasB6c13xRVypPusPNGgx3Bw51o273QvJzosYKzokkHzd5pkuQyxRMGDDN3DkCw9XEtk9x",
  "key29": "42pydDpUxRZJ76pvxpwrPZnmJweynDBa1wwHEHQdqETaGwLamPGuwsqbkXYvrAJMv1QDYVRDyZSbRBNRwVPFXbkz",
  "key30": "2aBj3WYSa25mNkQqEKKxCtJWrgQZr9ysYC3uJZxYprVQkqsBsjzCJLGHdcapogcZ2BAn2eJbKzsYAoeZnMXdoPwu",
  "key31": "3HTZQrMh9rGgpPqVsicHDRqLSSo3CyAmPdWGgt3gPmL2rNPiPpvxD5eJUwbWo2kE4Ty7MAEwzfEktjAfxQbVF2RR",
  "key32": "2ZCb4Sj1gcfJsRWVGz1PtJgp3upCZZUPwRXvRHYxsnFcyY8BvNqLm1ZZxKcSTBDqpiBrN1cpVPKPFdEVRLBWVLYT",
  "key33": "59HSv2fWERGhBeGNTcb8yHQhdGxLYefZaJhTCNfCRHhxeGWr3Hkdsftbghrg7ofogSgvJU5NRCUzdf9B74mpto6V",
  "key34": "nnHC1zf2y2VWptbyEbikLzyEdHt7ncxEnuiDYQPWQabvM8TN77W79p95gFA4XpvCo1yLsmBDyjx8m9G5C9qrWCe",
  "key35": "3S6mHS4ds5o7npAwaueBierUNu6ftcDAD2TtCX7mCFrNYRFsUKQDz7eKcdwm7wrjtKpqHQAnz6cs4KNvre2URHDf",
  "key36": "3kCWhbAiKpydHp5x79MFs3R5QuHQH7z6nm9pqEUmTYJ3Fj9soKDKh3ypkgJdiBdTpFihNmtDUQ33jLv8NN6KZTRF",
  "key37": "2x3L9QsSxCijyZqTyeaDWZxx267qygzUXXxp885EMmWxfS5CSmiKofxe7HviUDDsadottbn1KyP1Yx5MVYQny38p",
  "key38": "4Wzsvvu5jq83AMdscvaDf85TiZHL42AKvhRJDF16oC3mNr8ASRmpZs2QDqWTnkYi9yFZr83TMkswmqm1KGkNNDtD",
  "key39": "5nUqnhJCmWJYPywgU7CZwtaAE7e15aJWEV1rxiSjyaxu1rmsJRArxo8eENTifTTqoojThyJW8eXT7SXE61jR9zjS",
  "key40": "65v8hvFGnubF4pWpdFRayUTSU4JZqqa3kpRJ5P4kuYincNWUcRUKx6CNet4rspPDX4eqqzx6PxQDg185bNhdYuCC",
  "key41": "2NvD4vpsYxgDsvie4VCzuzTJPnMuNuUYFPxajiyLKFj1Xmp7YZHEUWWKPayAeFn4VFbYQL64umZGSJH2Wwz8QR6R",
  "key42": "4p41x5EMzC5cNjukGE5pXYZEa4W6gX8D17vmfc3RPNL2U5L3D5jWUg2td1iAmF2HgNz4RSZjaRPvzLJZrWVzsnop",
  "key43": "5n4w1cFpBjqVDJSnD4gy3RR3hRsgGqj36aHtDSpqjPpVPsBoBaKdYXokbD8ysijKURYGY9kLck4LExt8ZBetHnuX",
  "key44": "2JXPS6FpXJMsz6wXfsBQ6UKuEGafzWxQR68gAvx5EEPQrXrUb6G1PLLHXXqVwRoJGDgaw8PkgMoYGPH5wRS6oVKz",
  "key45": "55Bde6UnUTZXfFo1BUHrwxxojVuoH3P9quQq2nJsWNDUaRWkQpoba35kQAvZMcWAfyDqHRZXTBUAgTLbYLMKJC6U"
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
