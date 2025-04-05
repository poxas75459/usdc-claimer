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
    "65B3byiMeTbAqCSDP1BU9Gm51kcCRz2X7cGSSiqgbQjUiVBZK1He9473RVT2dog6bifyt9E5QjHG19GpJdqUUy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAEYpvfdh3nfk28pne6ebrBUJsDefmK2RXSNWPXzjZJetm2uVQgyUVBB2SEbW2wXhE5wKJTudgbcLtLXaCCTkQj",
  "key1": "4pc6YEJDPK4S4Za9TZVAckoK6rmN6T2UgZkkFrzUdZzzVqZRjSnLdmNcUL6YkVbeZUYZBRrkhjm3AvWQaLoFVQnA",
  "key2": "5pWGRGRpNjhFRL61BMc9mLRAR2LeR3tdyrj6zSTum7LsiEmpm7zfPgmZEFuw6UtcyZZzzy6heQiXMffxwQqHzk1k",
  "key3": "2D184Che84UnVn6xnyAUryRR8bXyPX9fgmPM1urZ6HaDX1BZUdvDUW5MFv68G2VLAsZxVFyMZ5F6zRpveHqZL7Wj",
  "key4": "37iidHGGM7XQLNgwRXwbQHCj8AH5MAQNMs4tHpAhh6sGPnaugQK1txdnLisGDXHB6yQDqgr7YkBPcQMTPJ4sHHQq",
  "key5": "2jg8yK4vb5iHNVN3psYeMbLscPM8sAJQd788qbwiNPpgsshEQUV9Y1D1eA2Tpj5Dk4VQfuzppLt8K8922xs76cGG",
  "key6": "5SNt8DvfNE4UvwWsvs6SwLqjq6auSbPTXQVKsYZ5Gpwq8XVHj62UTARaGP4vk9TDoeEZRTYFsLt7LZfT6dffrvhm",
  "key7": "2tx4kGcagZrwghHue15dt6q7WRPSCDkRueaUwLbcie3YgMiTM8ZEyczDVgoN5EAVbpcSspmvcPUCntsdhNreqw5K",
  "key8": "2dSEjQLd7AxJSiJi8cc8n3QbRMMpNhbkKxxo9VxpFTKsosrz6SALTZWTbupdfVmQGKBcdobQXPgMDvHUvfD217B8",
  "key9": "2TahgoB6oDL9xgBsyFw88EXaZYLBCEGUGB93s7pfzxUmDRJsKvkzESgzdVMzgb86mwm8z45UteenHhcXwGYSuU3E",
  "key10": "5vmEDGuUvY9n6tdbqPxkLy3evBYSsVbyXj9KM4UwWxnzGHNxpVMmgwh1UeeiLgAvKzk6KwMGDGfKCnxv672WMJeN",
  "key11": "2XrGDi8DPCa2bv3XWTgnNjeoPuxKGLfaN8YDUQhEEyWfZt3KXNYzoaZPJ457CsdT5wYFP1EfuLxGMgn4MWd3iTuk",
  "key12": "3Ff2gGDcSjHsC22DBq5rATrXir4NpRCN2vsf9uCVN45PQsPVwTnZcY9BUmumULr59FoEmiZEkkyrf35xahSr1Dxc",
  "key13": "5GAWvxeFHEkgfYS6K1FksCXL2xvoTnfdV181MAMhhv1END2SG2ZRX5u4vB3JZyTqB9zVPBKzuujLjwoKmfvFH77M",
  "key14": "3Ty33k4CzXudYgXowSpXCxq6wGs66fYJ94HkBxWhTURjDDHodYrrJyjZNV5SkdJfbprnEeQGL2cNYn7QTKasme5D",
  "key15": "3SoYGH2KcP3oiHm5uFZzYjaFFRgTHttk8TQuC4Xt2gZyN1Y2hsZ7W46ze99vikhWR1qHhCpugyJYQhaWafTs7he8",
  "key16": "3MeicFawJJ2UTrzdhez7JAnkoXs2finMAsETUkkNZGG6QJjyCanPm4CQVWYQDn47MekXxcLg8Z5HGTTvE9ZfsbT7",
  "key17": "2GMyA4TXM1dC6wXd8TsWTd2WPeVyhcNG4m34ytp85mNhoDRxphrTPd74LkM6oZLuMybsD9dRnJZrNsxCKRz17Q9w",
  "key18": "49ttguhEFL3nM5L2Zkaauq18w9XJQ6bvdgFYDWnW5wTjmET96eu1ihvDyixSXMSHUaL566vgvRHMHzoo892SzB4w",
  "key19": "2U5xqMkFN9HmnE4ignR9z9xC2XFj7hkPYqU9e612F76kHVCLvvvmF3C4KF8sDLzw36ydyPA1Z8x3kwRuhvGQ8Yzh",
  "key20": "2qTo7u5psHXvjLSyYz3rwfGrbTrGHA4WoC3kUzG8u2eXbEtuhDJkwDiLpkDA5dbvS39uzZFw8pgkkYJzTjEaXpRT",
  "key21": "SjmDHGQZJSALuGau5WXHVdiuJ3bPt3LDXLx14C3G98FXBuuSKXFTPX5vSyj9JnXCTFp8Y7VTZvroYg2LyWgiEF5",
  "key22": "3niEmxqRvQiN3fobBifuvnYyDtBXpGKCT1cxH3y7RCvTHn5yRwCbnC9yWdmbG1F5BYjLEw51isbaXLfAVFv4N4N7",
  "key23": "5J4GVxbsYwdxJAzeYix4GCYH8PCqkNGaGJMHAJfE5P77VuEiZWjZpbHjbA4C25yLd6TrwEsU98iRbftf1KjF38L8",
  "key24": "2Q98NfRMSHzWpuefGxdnmFeeNEKKgxNPP8JZ8xoHbPstp1eLQp968nUcyGu6V2Kh129WrNFqeAt5GBwgVVH7kwhc",
  "key25": "3QT4SBJeCFURRRXr1dWCYdc7y6dU8kws46kdJEpqqy4nStZMFftbE2JGpGuAZD6YmWAoybjZSswwMYaiNbQc9RSK",
  "key26": "5NnQXjoggmKnttPnf2rjHYTmxhtthqyjiFkuDYq22MDC65vvedbcoY3pC6s3dMv1FB1Ab3Med1g5t7wGNEhYoGcn",
  "key27": "2hspPuy57fmTjxcvUJ3inbxaDiFTS8Z14VU5oirxpanVs7Bd94vh67AbH37XircHbGZTDqVbt4HbuXGPCt8oPyWd",
  "key28": "5UEbvzpqbumWLA3HjmtETbbXt31zZd2uqgCBSqn7dqX7x6ssS9n9XFz7eKNBhuToC8bjkstpYaNvdy23A9e4mt6R",
  "key29": "5oqmNRQ7Uc5C5vAhjGVMCipCK84c59sRzv1DQkvYk1NXbRRvciZgw3ZHTUTPsYLoZpj8C8srqcATWWB62yPLCy3F",
  "key30": "2QnFyxVHocy49DYUFEfFtqFLkBhEjt4La8vS7VAesqPzgpqaYb9M1Rw3YH3r3RnpnXKdEdipFBv9Fa71yYW2NHEX",
  "key31": "4iFA3j8FjVjbTZA7ZffdMfGXXasvpMyQ1rgEJdsWxGd576qo488xrHacvo5D8QyxR2PnbRdSeJjtGzne738uosh2",
  "key32": "22ZgecaotEbyP4p4tqNNvzehqffjD4fA2F9DFukgKb2NKBhXUpKtoxefd7c9D52m2nZkv2qojZYoLBquJPMBwnCM",
  "key33": "58SR9jFP7TXtRrYVRBZPJQtARrP4fUnZrG5pMYBpBxE4KUs9LRTtETeB11gnRbovFbR1ptWcfD7WhcYJf1Pp8nFt",
  "key34": "22bgL5YuKw9VVXENM43dgduN1Yf6W5p73MFy5GSFfqzRHNhqvq5dpQsTJzuKMxyHeN7sabvNBJUMhVa5qVb1PnV9",
  "key35": "5jBzDqCnmiJa6Uq4bQsWpoqHQYTPzre3PfQQ3JpQ4Ytf7d66D5DSvj2RdezJM3Yd5ogRvMJrLccfbC9Dwfaz4iJ5",
  "key36": "sFptybJia2CVNY5nu5SHcrHm8VgYy4vFEx5XMyASZUuf4dLNf85i8jLhtwJZaxTkMmz4E2hSZsG4bF68jrTnBTE",
  "key37": "5gNJQnM5hYjsXsyyR2in4aPbLno8E9P5Rgw8w2vpjT6eR1SkjYv81p82JWRY2k5FhyKBaFMvJj9setEZWEVGKXa2",
  "key38": "59VQbeU2ZzwdmBzDQX5XvEHfaF5RYLkqM4eCjaWLUhBhtXSB8m6KfHAtwkFTXZvYMve4Lrf1suNNBFixRgJbeDQ8",
  "key39": "PnbBdgYwd3khSsCnLrTWL8t7AkHvj84E6JpZtn7zhAdKQoYmGGqnPtH99ZKe4FBGkqYTgY3BSeMCgEARgsCUarf",
  "key40": "2q2gyg2hbSdM9yUVnB4d5AkVcP7Sw4YV5HrQf4d2pZt9AMSfNJLh6HvBp9wAMShkaHowzjR8qxJhFMb6JnHPn2VY",
  "key41": "3bT4KqYAjyav1ZMWiSAMXHw4vB2C6kyrpAmwv7pi3QnfYioLipx9k5iD3XoQKVKV3J84chGTRKcGYwPSfr8uV74T",
  "key42": "5KRRTH887ud3SseGU4DpwKs2LQptJLfUXaMRKCYtF5s8hiTPvivXMiuTXEL2aXNHr3FcBrmjm5Lu8g948i4gQdtN",
  "key43": "QfUNoedqL9y8yBYmGQbquzNVN43NL7ozoj4gBwywAPtFq5gL7s1Ucc3dPKA6BPC1DURk5AjxHSFovWYWhP3m1W9",
  "key44": "3x4cvBsFs64k5yh8GkhYqoRHo9jzvNDT88D753dHD5GjpDkY2M1M65zNTuJUkUvD69D2sbNnk5g6kNca49F9Xhs4",
  "key45": "2Lk83h2t1jBDifhzpsyM6uZMoBSGA2sKYTaKwSAow5Mon2VVK4pprVKF7vEHCCGKMsTmKWpbEGsxNhPpj8GbBrv8",
  "key46": "XAGixMBtnNQibnA1ngLKq2iBwtNJVp1g5mxzxbWavngHSsfvGa2xuj77MxoBGKfqSQRpB61tpqEPepdURwqF84P",
  "key47": "CiuzQtQnVcSsJWsDG5oVvrMCbsUYqpZNGDNqtjzyma2bU6ekLCwrJeeXc46tRca2Z2dnFZULkHvY4AYG9gRwSQz"
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
