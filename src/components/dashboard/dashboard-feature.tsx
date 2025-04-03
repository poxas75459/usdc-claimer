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
    "5t5An9QjeqhUQ5B3EDC8kHF2ZkXwioR7iHAb1cvi1QqJEe1CEPSHwSCn25xmPUvVttLNQWjmCnFzjRSjcAC3fjod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtVND39dSbdjLpPKytqjDQgtfiJBMxycVprrpXwFPsJsAgWR26vZGWiVJwVdoJQLUjBGYBBSEM12vPa74d2o7Pp",
  "key1": "14LCtCQtBwAYfYwaVEFMwMtswi8joLmJ8ojcSGHuKWafhSZmQBWL7La2SbLmSA1RpZA5LZzNxPZRr4Go3BGdFoC",
  "key2": "4bxkH4G5WduWVVcvjjnZ1seL61VdTDpBEGRRL5dgJv1d3qpd1vsqZxxZZJ5k3mKJidRbpf5geq7A4mywVYTtK5PZ",
  "key3": "hVaiwDSkToXZi32q7E6164M58bH2PTCDRDmQhEXV7MFvpW8bZefg5BM5X7dy7mwY6PLdhfnMr5c3vm6CJyQJBKH",
  "key4": "2gBV7Sg1phJrSLxhxjnLUoCD6PuwfjHq99bTFxkT3hs5xAhJTc9vCcQGrjrZAE6r9komsxjrmw5GsuvQNLBcKnBn",
  "key5": "468c48M7GgQw8e3AyeeheEY3ixMSkmxvw8o1aXF5Jcpvqq2BectZT3hU3pD2J5rkXKpyuXJ22iDsdfqkY1aXPdDg",
  "key6": "55FF4pzMrarDBxqYEeanHqkniCGuvnep4eLB57114CrEcR9aYDBsKF3FG3ApYibPv7HHQHuRJCgyVtP9DjzGKjZ8",
  "key7": "5AQYso7tWiygw2aPFAjD9Z5RWW38LaS79rsftsBMURokhca8vFpDBDNP77LeMUK1oXosZsj3Uo1rydwfhVkGJM6J",
  "key8": "3AMvRKZZxFXbogbAq76GsPr48gSNwL7ijCXrGNPFRczHUZ9Uk47AN2GzpaYVfsTeqgkeNTnnSzHGDdMtmtDNi1an",
  "key9": "4b9JAc2j3kLkuJ9XKFVcTyPdcnM5k6xExquePtEmRbKnyxg1N7Xjvdm5ARgW8S2Jkpk2rwqViT5SA76zFSNy2fx",
  "key10": "34YVFcn94wEFPMkYo8pEM4merKnMESgSZfp2SiMfXnqJeNVurh9ncYWXn5TiJkHJJ2u1SyjJUArNJe5CNMeymL1D",
  "key11": "4knMhsaS2eeHFkRQcBTT7AcFsG14hBEdUNxRg9rmQkdMtp5WD37zQZzwUMps175CDAhCNs87RACF41NjWsgDqVQ7",
  "key12": "XkS95zCy3PsX6ELh5tufmJEteskitz23uFaVJmq8yFmBScwUgcrD7ntE7UtBk4jnffoKuqAjgvfp8BDKWa7KP68",
  "key13": "5UuwX8LwCrqH41Sbo5NhUuNnhhVRfjKzVvn56ooH4PknNkFSE83JUHJPLVPSbZ8jTVk7K8dUboxQew4tvAiFu9uZ",
  "key14": "3kN8Jy8NVQdhPUcM6TYc5jCvWiVvae5C48bRgHHrTKTJSqBBtF6h6LZAqDQZagpPBMTyWng2C41jwdxE2Y7jqcWk",
  "key15": "s6WpS85LC1SrcxXLVwwi8cpmwAAqrMARaZZsA5eeH6wKoWZmxPuxtYsd8sxjjxX7kW6Tt8bnN2Xy62BCdhGhjrs",
  "key16": "mPwv34gQVihHXXqsGtoUi1kHaTKSpDP8fno4eJ4cuf2NQBoUGVES3TnUNSb81pgsjR2KHtN2Gfx6LikoHWjye8V",
  "key17": "47gx22GHfzYXLcTEVcsUFaJWYoQzWfbr8WtpcWB5gVSQeTzNRVtYhceW7SVDiKUoLNz3mBj6AB4bV4wQT2Y6hC2R",
  "key18": "uqg87dN6aTAVphewyYqYtJc48rMvbc95TMxKq5oC6ENJC53RQRYgmE8kzUn6HXcTnTuPzkWTJSBTktg7ipPLhup",
  "key19": "4V6iVZemS88WrYLxuG6jDJJHFVeZnvp8yiYtLRjRwGqppBAZvieeoQtkAZaTb9yVmTRRYGowcQRCAM7c3vwf23do",
  "key20": "3bH4YZYTSSwkfMZmtPMJtGJwuBkYw1ZRBkMvudzjzwmjignWZJZUBJhjq1D9at1Yr5Su7dH8X3XScQRwByLsLCBj",
  "key21": "Qk3YXkuPaircrBv61tkeQVeokA8czR4ZsaJzwRrmd3gAue5EZqUGC82CFNg3iagespsE12dUz7yYU2c8rRSGEaF",
  "key22": "28bquRzGiemnGYaJsShvCaw1uFhzKcU1VMZk9RPA9NFqGxARPgCCT3H3mqEX3q2oCqSNcsuaXyEZdmgbP5wASSWD",
  "key23": "4py3NzqN9Er31o8z4cSaMSxMSLcyx7WpmNj47Y5GSfTjoX5Cb8qEwFT9G7nkpBkovxzpfC28cVbk3HT3PnsJ1tNT",
  "key24": "4gEtCPHpeDWPcrBE4TX5SNw8wgYWEtEsoLBRfwzSzKTGwxF8yrXrHk7B72tAVVsRrj9gkF2WVbdrAdQv7LnwsbKu"
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
