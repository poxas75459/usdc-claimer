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
    "ewhmso7EeWFTTihFE3yo5pwF3Tgt1BtfrruwCcLVkVaNdavp8YggJaeuP4PAjt2XrEo9CmkDh7jvV3cUs9RQm2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHR4ix4uuvcD2ypym2rLn3ArPry8gR59G7VtPxT2LHkcwCLzhGRB4uwcd7tRd4wYDPmLtXAEKEtNQ71ggv61Uiq",
  "key1": "4SV3hDiy94K1rqpZ8cf5THn2qrcnk9iQqSSxu6UpAmW9v3SYRAtnnhQA16H2mUZ1WFJfbNxVh2sYPor5EzND69gX",
  "key2": "53VbHxaQEAnwVs5yo7gdYDCVJBkFsZnHtxrP8HRfvjt36bhRCi1CVgmhYpVijTbEvESEvJ6Wo5qxjRryBYRYY3wn",
  "key3": "35XUmT3bc3yddv4tA5mRY42WCVHBsZYQmYDiYPe53UGK8GBwP4jZBLnsar3zmxV87ZazdrUYMHpNtq6Jj1aUCpz8",
  "key4": "4K5XheDuuT76yyoijamFhkD4gE8HdetnfwYX62zBMbmuHMhFYXu1FkECZfj8jBQxyW7GCqYSSw3584mVQXSbrMpU",
  "key5": "5VnBFTXjHNVbHi6vTzUs936v25qmgvVdVokZxr2C7cV8M5PeUm3EdQfp6Mj4JsZzZo6FyHv3cDVmKsQ3Wr34ocEw",
  "key6": "3Z77AWEtVj8zFNEjXoKLXQMYVAfJAnUr9hs6LeS5zDm6hJnjM3ynJArzr2KPkcYJBD9a7sL2qMhb48AoL8VHBq4M",
  "key7": "4ZPvyKDNpn2xhR6EGBCMhkNBjvPKueDxux5DErWptg9MZgLmJdp1LcTPNcCcjytX4YLRqokioXN3uUZiamBpmdzc",
  "key8": "BVaTLGaKYXuuNCc4bRoHgAbpLxT6CN7fdTqy3LRBuuYENPRaChwC7wy2LzADVZJ6mW4V5eEdC319A8jaEZJ1Vk3",
  "key9": "44sHDTcrpDLs7JzRcJQsThEniq6KHX5qpt3fFTYNna2jJag7DqAnyHKEDKXUQ6PKUb6VrGiBRuKnQLUJaPeYSttM",
  "key10": "3ktxi9TWbnnc9dTZWx4sMdQgMpppHdsRxCF7L79fYrEDSgGpTVVbR6pDtpmbc6Jm5BLX5GvSrt6tNVk9TQNgZgG6",
  "key11": "4Z9Wfb9932ty5vmoKiAWSnY6STUjJQkHMCm2xUGV4UsPk9nnN6LPY3ooCTRGzsNJ8rpFLndVDB9WVejrrXQPAwvG",
  "key12": "2dfnFhVWbfk26ByLy65pfhmHdTAfMbqHLJguMomwaHaJ9zNjJRhRgxFL7r8wyVGnqveXEWAGndPdtd1U5XV7Y3Wg",
  "key13": "3UaBJPpCWGHpXZ3ZZyfKNEKcF6ziDVeTyhuJpfqEnFB9hhBZPv48z1v2kQYaGUguWXPnDQjj9EaRKM2GVdonGPyc",
  "key14": "3MeaQGTxEHwwZ8WLx8wJLDDj9UxcewbzNdErcAQxL4uFSN1eCnvE7zvoTfeL2Uo3tRCYJ5jargestfeezUMRPT9P",
  "key15": "5F1w3Jk5wtWKAfPmubenXNB4DhsPsC1me2uvPQmhn8YkDvEhGt36KdXNxoqKdtMWVSryC4QbeuXdS5yhN7DvQ5gD",
  "key16": "5YrymR9wYQYKefDs2Bi4uw6YCd4x758pTbABdW99p2y7yLx4ehQu2js2JsWCqYakyzniVDCtZqDab3FNKTnP1jLW",
  "key17": "HPGT7v3pDQTawdnq3xMcwyFm3Z6CqwZDuPaKPdCHYPs5wL3JFw6jAv7AgGSno2KtfbVrTyyuV6A8LzUnCaiYtXP",
  "key18": "4RpA6UUKSJhAcMNNd6SXd4XTyoY9vdWpsSD4G3yxoLCkfMb8tvkSmvUVCq4My1VztUETR4xrWbS34aViD88vet6Q",
  "key19": "4sMHYs3S1V6ZAG3xSAqxbjhkWFKSxd9dj5L4VLGM58t8YAdVQwpJ45Vb4qU27o5cHrZUEXtYEerSjYGvptnGqmir",
  "key20": "AeFthT4i2SpkJ9ccPfhFL1ZYLW1x1FLTnevb12tYNSwVzf15AyfY9uwmW4wNVftPqau4WXcKCkKPZVbjgNLGmVi",
  "key21": "2onrfKkqRJeNfSy8oWzhJwzkBk2s4v9xXHBjqHC5wGPwomyyYYfHfHRZqwQRZ8N5nAK48y4wdtDFeFVe3hypZYXY",
  "key22": "3kPHkyC3faD7LGDzZXBeC4Etq8UQWUJ2oj731xFS7WkGKgdwKy54Qp1sJjRkSeCT9frKKN8XVf1d37A8UdNdYvm2",
  "key23": "5tPnUzD6AxVK8dE8GCmEwYoEkNjqqwXKSgNc51C2f13cicgWUoMaaiVrc9X2Ck2yA3qaLLkYcGggU4e5CMckwtX2",
  "key24": "3mUeQr1VFsnUmJmQwLnDvFL9p4rC4ERFv9KpyAMHLDH7KZ4YNNf65joFkoD2LhLbXw8otprceMtzi73Mk8RubMEi",
  "key25": "4UkQUgYk56SG11FgJWSBQg4NUcg7KmrqXeC3ACRdKRTYJHkZQdWYPMo1VCCEbBRaQHeGuUmuwEU3N1U8MhvsELJf",
  "key26": "27ekizPsiTrHmJVWGFi2ZCgDv8dNU9w7sLsK3aE9jPQ5Cek6DJjbCUKf5kDfwLEKPcr9XDmNmAg5pPd3TRPodGZA",
  "key27": "2d76b7okZpiRq11M4tzUVAcrWH7e8HzvduqExBtC4tTamCekZwUaXGvVzgz6r7Eq9NFz4NEhYRHReXAiJoq56Hmt",
  "key28": "3Cm3SydYTAoF7iH7YZNMaMMV99N2rQpMK41nsVL9sKC7WXAE3n41hMFHFbiDfbeS23RnF8h2PkyjeNZamQWWogQM",
  "key29": "UCqQU4cCkaGArXYWHuf9Es3NEVBEcFoSBWvaBosRtjdQEmfi15cPVwNHZfpCSAQsHY1fuPj91UYfiUQgmr4LC1v",
  "key30": "4zwCedqqVc1HLvekwmXgWyWh1zRUfUeXB81c6iqkozamEr3bGss98DAq66m1nyesTqEM4ZqHkoGKXXNnNpjRVWxi",
  "key31": "4i64tS96xQ5sgY4LSpA5Y3pU43fKW9S358GdZFD48c2da9gP3dRgPVwFrhnc6dS7BrvJAxeixtDuZar5rJibbv4F",
  "key32": "ZAqPap4rxAWri7gVmJ4UUQaCapAH9hn1VWpPKVk52jny1MyqP3zzX5GNKB1hYGDAxvLiCgWkVT6AS9nnc8ArbtP",
  "key33": "3jS8bQgtPuTtnaAHd2wqSgQRxuSMwwKuHbNFE5ebjdjqvpMxDidoz8se6zTk9DWbTCJgu9uqxt8PxV1BqJUjKdfD",
  "key34": "5xsHpSZke739dWRSbqdnWXAKbRD3C9bRMEr3WzXseQLmvMM6uoYUUzbPpohYNbxs598ZkjhELA5rTeqDnr6MqqNT",
  "key35": "2cWtvz61XyyK7VuQsxZ6p8evaLSX5Ur3v2wXeBma8WD67oM5ouBaNH61GtXPw9XS5n98Mcps7cr3ft2bJpHctqvm",
  "key36": "eQd2T4cj8zi5k25fHdXTvvjSWCfHBnicQC1oMB2PJW2fnzmfFVB5fnpzHJo9iRMeGuCsjmSNvritj4uFZnuVB1w",
  "key37": "a1LpiLPPyqrLZCQf6nFhAZQ45f4dWTRBXKaiKaQMAMu9GMXgTvCTUqQsc4DvMyzzgb9WcxNyJrfeT4op7jY5rBA",
  "key38": "2uju1hpSoNR9NcueTK4AzvEgBJexGEVo3t8EmkMNuJJLCJtmvwFLp6wTsU7XeGMC4W9qKjZoU3CBCPFBe5nDMeJQ",
  "key39": "4sxbuRrpwNTLF8XP9PJM53mXRrnAY25tm6E9sMiLow8QUptuGpefRYYJGY5fsHfkMR2XjmihuJnDnXJE7w4RZ87n"
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
