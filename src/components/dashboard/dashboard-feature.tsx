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
    "3yVvMTPr9ZWFfzV1v2fDfgLmGNpoehEPewedJ1doeaRaoyYmxkF55RfbwDxMi4YaQmDyYqitzqNc9RKqSNqnzSN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ak9XsiAnaYUK3RbpYLELz2NRLAHkpoAWQr6ULY86yD9wzxuRhDAvLSg2uSynVy8CML67pM9gV83JQsMWbBT8PBi",
  "key1": "2X5wLVsE6jytXCAet4KDzkncLziKGTX6f9BDr9GhTko34MxDSNNpyiPvfWR84xxqKFLUjbxXtpZaZFume4QzzTxA",
  "key2": "3kU4TWxq7pn3bPn1v2hrpofBVSKWaRGgJ5TFZRUhEqyxNEWueUAsHn7DCZJNonnfBaeGvRFti4g7kbYFnNgs3Ywx",
  "key3": "4SPoxCS1E25bvQMNMLBUUDtbDd2xg7wqgNgbKeerYN9Nj8jY5eoeqmGn5SwGDDASUnFdEidMPWo7UK3wDwHYMC7p",
  "key4": "3HHqm3Ng9kQMunnirynT59dSMY9WtBXNJH8B4G5qiuzA98m1k5WqNx3GKpZ2bAcxWKEyAUmPrRbFTeJ5mrEoR2PP",
  "key5": "Kei929fSrNt7T1ERhpAz1cLPZKn4nT24tTb1ZVbdw1WFmV7MXBAuodMJrUmLWGAig2oRcjEBtyVz2vNPXxVVYZQ",
  "key6": "HMpDqX9rhHnvQiiXi2wES1RryVF2o3psqLBEUFV2HYA87iqjjaUM7iGKic5AZigz74m6BiZzwzdF6hAf5mcP3f4",
  "key7": "Kxd5pMSjqyMoJXf3VfAkKRaX9MsRYLMMBjBR9gwT6BUJaY18A177LtdGPQADttHMe2q4VgvEGkoSfRdvngomLkB",
  "key8": "5eWv7KMbW7pBhfFwRRLd4hEzzPCutgNbvStfUXn3GUmf9NNgSLRmrNn5vPH4gDD5SJ1ypmBHLKB1isXkDY4XGarb",
  "key9": "k6zMLhWQRc5mKPeYcNS5uhJsiEPb9X9ZCLpH2P7ZaCLqpbveqoW6Q3ZBDEfMKhG6QbduW4dZhyWmszKohUzRk3x",
  "key10": "3BKpquk5DZhQRFSkXGoSkZ31H33RPGSwkKktQR68DTtMTVdxDY8HT6rLGWyasFZe44Kssgrrzvz4r1rKQgpHyBcv",
  "key11": "wV988shFWijFvNTVXZN3mNczMo5TTd4tBvjiecpVo4LD1znifD3ERwoeQnycdzEUyMhjcuwZKapeBqikDWhkmKJ",
  "key12": "5jYEbnAUDHTqkZV6dvLgwW7Yzvz7NXv9dxyEtkgGhkQyEgUmfz1d4q2bHfxCSAFt3oeuW53mtTpXUeGU89SQuMDC",
  "key13": "fwLWER3MYv8yaqEbYLckS2dhm5CJ4xmbca7zarKkU1T54yy95pqj39URXCCgEsR4nLcYPKUrYoTdKeubZkwjNyc",
  "key14": "4HjbGiK99AEesiXcoRcNmg16XcwDczQ17A55L1XddAqSsvHZk5ZHt5wgcB6wHCHPe5zfR8AtRAGoMBC5kD3METmR",
  "key15": "5qtxoP5MXBKr1gf1FXAgKpfG8LirGR8H8NHUXCM9ZjriShuQNoyhMU7eGqtJJsj7R99vzrAkfTQAMudnkPP9v9ZB",
  "key16": "3G6z97bRzCrnu9Tuf7TTb1MtrTNE84r5W2r3yQEjVSHB3ueXD8Y1TrPKwFGdznHEkgVZzsXMen92KsnGTeWQsjXG",
  "key17": "5akgYMYuTesH42Snigr58BHTWW1nhbg1W8L8dsRe76YeS5EU57KDeWECQSLMVNc2NoacspoEDhw7gJEiXo6WpYrc",
  "key18": "66HGMtvqhREa9EFnNcbihZEXe58RKkVRfXGu8NYCCayW3oBRaLLevN5PESt5gGVmNb8RuZ8PXTs3U2rJuHmxDpiq",
  "key19": "wZD6c71AuqcqiRm9Dxy7aLXuaZaM7FoKTVy8jJrUpPCNhfcskqwM2nGzZN29GDiXCnRmTJfpvckPMaDPDymJABD",
  "key20": "5Y7yw52tLizVsXv1psFiFNYkQ6S82Vu458CtdJSSTWA2dHYKBDeHRJ1YFuptMuUGKcPNN3fMpD3yYb95WFRCtz9Z",
  "key21": "3ZuE6KCCMYeEUA6xUK9iUgeoq8zbSeQZVz2CahW2CL8kKCnwWWBXug2XdapK7wHu34kpRqUot8HY1HvkCAMYR94J",
  "key22": "4U3jV2hPZE8MGCtRy7hNqqbXbeuspvnnpi2oNTNxwLRouoqWb3bZUHwBctEr9jWNfam2PMAGJMxeCit6nM5Y1Yt2",
  "key23": "4E2SQao7wB1FYCV4D9RqyJqygbdR713mRWARmsVoi64dXZhP4LampDScpufpz3xeQzLLmzpCDJDTxFaLR5W8CBJR",
  "key24": "2vkkBUssvo2cyWy2NNuA766W2AgQnrHG3gKZhWtu4nKavnExYSNXq8M2TG7AQ7y8QzEPUZxNi9X9gkk7P3qV8pQq",
  "key25": "2GJdRD4wrVvKSzb3YARR6ngdP8uqkt5WSud8hPLRmn21SvTUFMwSvRU6eiDnDz8ainMJikW2qRdjTSSSckWKUeMe",
  "key26": "2PPZ97EhhrhzpRLUSisuS3xGZ2BQGa3hTCWWF9EQKH3MjuydDnnvZ2nxaWQcJoLvMRqdKroNPe93ChF4faoLVJDM",
  "key27": "3TvGoTnhLuCHNX6B75hViiVUNShmGTbMfYecprXgS4CyA61vsY2xM6kcvAQHK32EeEhTTTYektxziAqLPNSDWScX",
  "key28": "MWKgoFaF2b1YBXN8rmmCLxgMWmKbMLvVsDpAWhHCNMYqhBYQdBBj5TQ8EY2hR2GyqLuzpgcLkvDSnypVG75QgXt",
  "key29": "4WozsL28FdQ2J77MvfgwmQ2h8FVyjqTPmeMuMKZdfeDNxCVA4BcjHDp4MqryB1Cur7HRbxo9sqqZwEDNtPPagEyz",
  "key30": "4WaN9AywccCMT4KuVm2LnhgaMVL2TGdhZA7cXB736R2F7XuFfYdJnM9zUSLDvDR7DAgr3timFfMN1y2KtYPjwT1o",
  "key31": "3ktV88CTDmczZyuLyrjDdhSjzwD3pDrujUYgwbVafVPk4afeeYT2xMxHYPBkJyYgGCVq5m8jNwajoB5abW3Cgkdc",
  "key32": "2GUcmTJsvnCdBzZH5rVi27SnBP7UNngHEEK95uCo2YuD9xMgXK7jBCrQDX6jBm97xWtsZi7vJN8wzDx2gbAxZqnD",
  "key33": "3FQm5MAmqy4fZwGtyw8PWq9u2RePst5eRC6o43YbUs3nG1yQiA8YRsk6wdypt2qwEptiM3nPQQ4fuwozMUr7JHxj",
  "key34": "59Cgpo43K17UjsuCfwEPo8U1bwN5rE4nRwJEToGzZVeyUCoeNrhn23FvmEc2n32FeYz2gYhrhBM3kADZ3jzsxi3R",
  "key35": "wmuNwyT87eD1NcRzYnahLqWJXJfkdBVnVaVzaENvnRDZc1nMyjDhp5aXekC41oKqmzDENLchAA8yx6UkV52uADs",
  "key36": "34reeRTCzDgQkLGcXgfAgFxRB5rcudekc6xwbRfZvxhgbwH565bgDWTcejRHXKPyXSi3WQB1qqkokJEmxkVHokXQ",
  "key37": "gzB9ACRPFDeyUozEqD2zbry9MjmpkFLgR6xbL6XAvXkJZV8jjYyqvjug1JpWTUNeL6uHjRdoDwyrMQrCsKEUnti",
  "key38": "5LHePCxxWictXWggENVBaakuohJfG9ypBs6FmP6zMWxb8M497hgAWTr96LZXRyxr1MZgqmnauFYTKQqCHpJyW8sb",
  "key39": "2nepQAodvyZdAfhUfz9JvemVsrBQgwrd72auGRe3c7cCxsmJ9DEBmB5wTcF9qXPGzFpEAsw81MTm8Xec9gy4XkAM",
  "key40": "4biTZo87c1Hopf4Gkjywg2CzQk4p28aHta28wZeCK9qTfgD5w2oSRPSjbGx2qanVWS2defUaeZ54ycM6LMhcH6yU",
  "key41": "5RbjhoAnmwbvkY6PeQeki6yZ6aWmZuz9eQk3ta73KvFPzced6S9ZXnY2nB54i3bzPTv62SRJN67jwYpYKLGq4u2",
  "key42": "23rq3MTW3edSEU6MCXZtXcNw1tZkZWbKmuRsErsJz1iMq7A8b1DHoTUWYSjmmzk2696BKuVTNhs5pchJnkpJbSbm",
  "key43": "3gFcW9xmZzJEfdiDVv8xHBY3kmfPzL5cYZtj2N1SZdyoNKfUJJgFdhJGDjFnR2GykasbMCAUSvdbGM3v6dts7xWZ",
  "key44": "fXu6mRD7S1SxhNrQkVtdy3GofMvCdh4sBtCMFQF4VaNeV4nd5YiGdTghXYCibNT5uxtQGKXUdmhMQzo6NrbGLCn",
  "key45": "2yfLZn2tUQQ9yC7Jkbxeqb9NhKu3ah3D56h6WN6eiSSxYR64aAmXVtp9krMhNpuqQyLDHV4D2eYu7PzYeacV7RvK",
  "key46": "5kzS648FvYk2XGzJRztByJc1WFUCowpnvCu5pKpaoowAF4N1JYbC16GLrAe3kw3RL56H73M7PzMTAVChgZ1Ln6Ax",
  "key47": "5e3WYruibRB6s8geaEFv3ww9buJwBMTTpkAv6NUg2zRLt3sYiJZBRpKsBBqsPyRMtC7BPjmptDajHS8Vv9BFYrW5",
  "key48": "3zk61zKFxYPaZEGuHeEQd3QUgibBhnfUicwBpahSRqZ6apRiCDG1gTDpSmHneDQDQQqLQz9yYW8oCW3shA6teDRc"
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
