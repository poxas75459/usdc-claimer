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
    "tVSRUmemDWcgi527j4dsenmKQAyCW21Xb6tajRifH5mjUv37DDZYx8EUrBorB3wmXwEgJSc1gHdfJjGbc8PhUkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jdxG5ATkGNibA2t12pN295uPAX8pcwz2WEdJELrWdYaMAivr3wRkg52ce9bY3zHf84DZ16HeSt3ksbezK4SnMuP",
  "key1": "3CXcifXjKseDDPqH7F9YGe1PyFiQGdKkeFmQx4kdxCxCtcpPZKgejy9bFKT9XPdorDw2cDirQCxLK8nhg8tTyqga",
  "key2": "feyf3hynBBM6GEgamKvmMZXToMrWQL4rzjJYQTcfuyM5btKU5Svxnk1KJhAG8Q9JeHR6xhWU3V9UUihNDsf8zTn",
  "key3": "Mse3xpHNJwvksnvCcWeuv24eJkDNioKE1reudkpRXcjiCmMbKm2U3Jy8N1uyu8j4UqVffeiGs7hSiiUzC9jmyTK",
  "key4": "25tTKwNcG6dv1kbExUF9VLhYtUmwi6Ha6tX4L57kRkWHuGfSaWrDxomCkszcL36QNGSjhRqRH1VjTovxf9AbSXj1",
  "key5": "4sF78yDTgQQvbDDtjA3sKnvo4mrwBxkBQdhJfxeoMDxDiDtAEhBEB8S35uyMViQhXgFk5CpzgRpJUowZBvKjMFfM",
  "key6": "4LTAZJSheJLUQYCovWayF7QD5xmPT1Wg8ACdZ4GWcP9j4X1YqefGo8Uwc9pdf5do8EsPyeC2iWxNXa4ZjHPZ81Rc",
  "key7": "pb5oLtzVWYk4TorsWdpYvrMKaxRRSWghJkpyrbMVh3WN7w3pZZH3UgcQrTddeiEkXDYdaER8L54rDRhb3gDLxt1",
  "key8": "2FdJB1WNcekgP7mNKEiFc6Hs44SiVnYuP7YufeNXVveR71dMkCnDC4ii4dTfYELv9mqMp7JK86Gnz2isMChbNWiY",
  "key9": "1PPLM1dW8f7JA5uYbhMBqYVwjjbU7GYkSYRDX9u5ZajMQMgZB31ShRFP5N6MJEkok2xreUAHfQRTJYKcjH1Cg7g",
  "key10": "2NXBxLuEXnrYVcrz59oQBv7tJDg5D2juaGuBYh4cJzc8iZoxuRBHCHFjU8WnCrHhW8bhsYutUTXpYqJWEmmDYNyr",
  "key11": "5CYFgaBcGZcLFKNm2uPMoa2mdwe8uVrNw9t414B5F1UudPhwH6n45rhUtfxtPmnVinmi5SLHGLQo7pAm64Wn1JUV",
  "key12": "2kfjJ8aFbQr7SkHpwE1RjdfAtzze5pTTMRVDm5hvEttWgmiWuey2cfpK9E7v8bYgz7fZpAByjKmZGD6JZrTn44J3",
  "key13": "5B5Qbi1W16CSSxD7c7DFog5K95ubBPiZTNHhatPuJ2HJ7Q99B3RyWZQdyTDg3feLM9AAKo3kfJTdXxmwtwnrqiAS",
  "key14": "3m5RfPxZHjJmEmnKp6E23B58mm4dC8tnvsUqu1q66p1xsuajmm5AfbUGgdbryNTtxEmhRknPaNJZmxxSgjqXhmFU",
  "key15": "MWdZPXDLcWZVGUb153RNKNdahapm7QicqZpvFutoKXkYYnUYYr1zHnhx9Vaqmnbtsm84ADA1HLMP5d1rw3UfSBJ",
  "key16": "2pESW9kB7vCW3boc5cmMpZCwK3FHPdTCrxig1bGnpwbhpYobjEU5Pb4zMDzTfNCjTr6EGtbpPuqfZYDx2XgG3zKs",
  "key17": "GKea1gZwmmAVuaYQm4dXqTaUkT2fLEEvcnm6stFNHNuBBCrp2fqxXiYqsn1NHa2opyk4LbhFvr7UWXdibuoKW4s",
  "key18": "3QW7KBczCgW28iBxTATdCtLBtbRUZZaMRoy4Tk1UMbZXo51kCKPC9MjMt5DJeKNZ5fjgzKwZfERY9Xp4sfjFTQ8b",
  "key19": "5iVunHK1z8SFD9SdUW2F1vgxXzzRkFFPWXADdDjkqBsRRYZLGQmWjM4ftTUY59PHW13Hs29iqZHsqM8Bsg36VwXG",
  "key20": "5Jv7G6TQBN8u3jDHL2w4gQEq7KgTNeudnRMTSs3kpci6jCtXeWfTikWvPAcRFvwJ2TBRFdS5qD7fZL1ukZPAWg1U",
  "key21": "35K3eUCbc4gv7fxuzyg4MTj2FxqBjncAaS5P6ppGGorHe3swpnj931pGRGXQvjgkG37VPBBYPqLdT8ySizSTA3a4",
  "key22": "4rqRPt3MccY5FhbdsZWueiZBUrNuP3tCEW1h6hXLhQaGmA5diS8iMGUqnYN51zZVaYiCtxwiJW7G2vrE9BiLG5sf",
  "key23": "5XLRQTAoqUJQvpPayvJVAr1EBtBK7aP18X9VuXes84T7YRVAscPW9Kw6Rt2YvDXVmU3GYsbeYPTtk1ANdNSo9Upb",
  "key24": "5WaXnzPLmMrZECAJEERhPyXeKftaMFjKepJcrbuqWGjYrz3gLRLvxNw5YsDdqMei4rSnvSFmrhmcVnUTk3gjLCSo",
  "key25": "3jR2gEJEqSSGae54sSu9KrreyrDFX5fHFRDH9bqfnvPinGuzJzcdsJ2DEgcijPEB2aEJfbLdC58VD3neEWfKwV2A",
  "key26": "iNLYqSLhqpseHVgxRTCbFTUJPGamsrqnc5BMXLKf8HtY86BmNQ4gVyuT92U8gGj4n6TTxymCgRazbsjLM6JHe7S",
  "key27": "2tnsWwXKGMEPmrwfZwsNEc5bz6Pd9dZUoAFX2Bzy4cDJXCagTFphoVgGNyyvENMUdGcbFjSjeDeEP3B67sopxj4K",
  "key28": "4wAaynJQE92kkgKB3RFvzaevHu8qmC4KwnN65n1rE8ML8APcn49rp1QsjNDoQY1sqDvcywqhjdYK7EKKV1CMJyBp",
  "key29": "4t8KVbkJKd3H6tqTNdiaCwQnDmDnbomm9uNzFoiqZVyTAFbWCpiN9y2u4CYkaxFuuRkTnFDeqHo2SfnPHg5jDgV2",
  "key30": "4pVXyPi8W4egTvbqSocM5mvmE2GxdqVSw5sMjiAmqFnWoj9ZH9LpoQBWibPaWFBi9PcEXo9XhTMB3VPfKpk9yHR8",
  "key31": "oYfZwau3yZYwfH6VawPuZiXhMuf6TuuCFum6TU9VYdS7531xDDpLRfgsBgDxyr2v6Csbv4vs8mPVrewNjYEGd3R",
  "key32": "5DqjyZ6nBtSvKkyaHdQUX4QiBxwA8ozNRxPwU8iZJSqaqMNFxah6Xn1roBSNUTzfqJEJXkEWUtGUCsUC39BptdEo",
  "key33": "5Ve7UisqF18nTZwtw6eoaaS8KcVkzGTVFhzpB1Jz1N4f7TR2jx6hSTs5oVFpA7JSwb2zYRLarTrf56dvEnqgsczw",
  "key34": "55q1rzSZjqFHcMWnX2cVyTKEd3cHsFPCuP7bArqUYLHCqZu1C9FdNPapmkXo4yvag67DKE5r8FzvYCeqnSEXFRaL",
  "key35": "2DF1afAzm5r87QnZEQgJzmY4gqTwaFhPJ9ZFMD6USCnZwPoFp1cDAQKdcNrKmXsRXBF3X6w3kv29pZ8mFhtkT2VF",
  "key36": "5iRFstPgVCcdQhaXTH5fGnnRf7pxu3br2cVWwrApYT8ZTDvQkjxHpWCAAUMssSPRufkT8Smu7hDEZKi94xhWheiV",
  "key37": "5fZz2yzYWJU86TyzXeqZEGeMMo6x7uXt5CMXvgmqvV3ST16NYRmEyMdYekpBzr8arx4vkLihXBWY98fGDpTk5uGT",
  "key38": "3KMEgUSnVk9pEFR3wpDku57Kkyw7QwvdfD8xV427cMLwydPCqQmrmUAbhyL3ndBmzj31BBhKxa5VkVsuX5XJ4qWU",
  "key39": "kXuJVtgcAL9FGi8vfEKFdWnvXnyaMnk8depnm2pTTCGpTaxT1RJXDadqHYKGdvFgr2TeGc4BYU1J7G3YKodtMku",
  "key40": "4sVqPYX9cTcVJppFzPaCWwFH25gbensMP3bPA7eH4gHRngDwmsHFdcZoMhY23JYos7dYvWbeWu8oS18q4uEnsmxP",
  "key41": "3sQ4ukCHj11VymjzBBWuYyn3G6MsKegnEbYwMfcd7moKiMWeS93CDYPWg9YR57GKNVx65e1AvNNcUS3gB51pV6BV",
  "key42": "ZVxc9p6q5pPcQ8L5wEJnSFocXJ4jfrPfoRCPSjibEpD9FuUfuGBeFEzkn1Yo8cQeaPxSLh4d7sQGKKsvYqxL1Xm",
  "key43": "3WkZNX7Fx45hqu3R8W61nqWoY8aFD2turSu1jvtEXih7fr82omnvfkGKV4vFNaeAg1vSFgyLaBrsk41wjM3Pd6Ww",
  "key44": "5bph4YFZbKVdgRfdPhnDGGgzJhH4TGNWgRU5dYZvV3jMv9TCxKFdrADLFfzkh3Xmizkmqf53eJrn8YRTT1sA9V5i",
  "key45": "2Bfp92CrEXpuCrBXi32XvbGg1hA2pFbBo5R1aYaPYU9TWHJK2ZzubqaGwcw2oKxDWbBvx7gZaeXUyPP1QM7pNY6o",
  "key46": "46kyJvp6kgbzm5RP7Hu4S2fRJsAdeLY9hfAwN5pP7mgnHWwxV9uovrC5rnCT95QCxYASkxDT2Hc1rTkfQSbgYkfy",
  "key47": "2yWbcbLs9xFLqBtwguk6xKa2TdEPCSPo8aEby7dpzCMWWzXW7w8kNnsqG6NJmiBNxxJi9YTrg6ov4CmPiRjTqPfX",
  "key48": "WwCn3fbFR4PGo8aifXGJ3SRFMvsAirUga9rezakGfTe9Hu4FUmFdMNBSTWe6T8kXT2Cpkcvo9zQ1NenRHzrCqfR"
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
