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
    "o7iprfrpKzyYnztgsrmxA7QhGL9EZPcj4gLLXpJe66GjMNJxhm1YFNaFfWcDmWDvHUJh19iVdVFt6WZwZchUGwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbkw1gwJftEdJY7AQ7wz7oV2Tz3T78NPWTEmp5YuezkswscEv76oWY7rD1N93BQZ9D1bsH7Ad4yRwy2VUCeyD5W",
  "key1": "QApzn7TE5mfoCnhTEATDxmsRNq8L8y6CMFuh6WVjRwBuraJzzxxsnVBUD4JNB73kDd4tHQZ6dZaxCxDWczK1ySJ",
  "key2": "2Je6WNxXrxn1kGLRShdCymCVaeWimMiZ4NCZ3ycUZ7pEZxmgAaZSPk71cQ4WaugxfxLruKSStEVkVhTpotyRob5y",
  "key3": "3sm9wRAXHbYdLTFevjWKe9xmYuWtjnBwgBAtrH9aE5nQc8CWC7swju8gQYyRTbN6ojX5VEqdniQd6tXRonno4WYp",
  "key4": "fn1Gb58DowFsuna35GJzL4ZjqntYrvjMKsLd7s5Y4ERKEkzxfroWZc3g9AnEJvd4oj5dJNrgowba6Dg5DEDzW1V",
  "key5": "4XRbqk3X27PHQUWVc6qZ3qcyjHQdPBGVmkDoZTiM7G5p27T2dP75sJuP829Aw6Vf9DE7s4LmWNRpNre2z9iBKhyy",
  "key6": "56rg3YNmuxmzbaP8BKvDAfigBy8bga1Gq6QRxJxtz4mq4dExNVsXkouZWcRVzzTmztYFUHFBLdEnGf5jkZs3Pbwx",
  "key7": "59TMPzbPq1MM2zGsswzbMrRWibSPSZ7hKtV2P52gohH4tSgVR4fBWiPQh3PCygmwrtSPi3XHWh5ZwXDM8fFShL9T",
  "key8": "fR1L7otPZmwfqEArhAd2hgjNowcgVyHTjzdUKvMoW1US3r9QfL7zE3y2sUAmbuD4v2i16TynFJFXD3QYKs4NcbF",
  "key9": "pvVddzP47oL5TW422GYC3wL5wLWu3fzWNDCa4kZHPAkiRUXp29uH29rkkpy93XfQZCcfFWpMvJrkKaZp6A56Xu6",
  "key10": "2stZo1f9krJUKh3x51S7Xheco2v7iMPi8fTTZa7vT3wMrWNwfX2N48NiUxLWiKQFoBSyQ7So4ppjJCoTo3g15QQ7",
  "key11": "QRRyxApMyQoEuNrf6mH5KDdArq8aT9dLTEvC8R3vAWGxdZNxTw3Aw1w4DfpCfrUStQAcSrBytVR5YqvUmm2kq5m",
  "key12": "oNsVsBkd9sivXtRcfu5BpQSUNU7gHkEEFTvtib2LoAcouTHifeX5HtQHLBYxq6tfePFL7utm4uSrvJpx3ETeL2X",
  "key13": "c8hbkg3cfTr5qQAB9ChywB1rCHwW24joG3EM4S9ku6gSUGsoLAnyg5YDdC76LNXtNtjxQCcea4STduURmAjzhvD",
  "key14": "4fwsuorDxiaSpC7UCuAGiSmsKAUe4W3uMDuSw6BiZttwP447nuRG2mvnJSofSoW3JWx1hLuFGgL3qQD5om663KH9",
  "key15": "5bJDyDszoZni65pE143ydBoE7zHRiNSS2Uk14fiBJ5YkMfsYe6UceHyio9KXkpGaDy961q7HNHd6ATisaSYSmLPb",
  "key16": "3ygdspZ33CU49dgD4Z7B7aJoBARBA2M2nPJDwk49Bmb8Eiu7SdXND3HHfvEQyAS88pwKXWB1ijxuyLavawtbs5cw",
  "key17": "WdwmYRwqFBJCr5Qkh6nJWZcD2stx6ta3UH5iVYFvT1hVs5EPn6PbrycQjkecaepZga824faabS5irJD57DSeMK1",
  "key18": "nngF4xMKPWbsJWpFyMVkLNsB1HUkgvM2sDX3A4WJ4JuiY7Tjc7Yi1xe5kawZhj4E54XaCgGyQRH6K8GLytRXMbb",
  "key19": "2dD63xv2Qe2fZKTWKn85fa6V3t6TyinksZ2HLog3gLvSheUMeSKNfyBPfA1F2BgBY74tHZdpHAhBFjkMH17ujHdE",
  "key20": "21aNmxG1V5eCKbrhhPJyEXXDaKzacaZWRcR4R2FfXrXV2iHPmaBk1bn5Bcpv8EnAP9TU9dU4r6NTU3nxqabf3Tj4",
  "key21": "4XkbF7vq9oE8sVFicJefp1Dgyo1jwz4VFZ3fzJqJCztZhZSY1sNhjwb5zvaEwZRhPo8D9yCraawatmSQkMoGhfn4",
  "key22": "7QK8aDU3p13LPcnUJCDrvrTFFzSR14PHhccwAafSNpWVpzpx44nfBshV36NAPniWeMZrhsEKhb4VaXZbnQfVzem",
  "key23": "5P2aurSpE2GsqVwBrD9nASmh1WSnaYQvtwrtTePAohvfKyfaqvnWYnBaJCEiX4him54wr49whtrfnLWAov39xkEj",
  "key24": "4pWdGDfTQGdawBFzcxzk8W6cJzPhkj3NEGZmHwFtDtF9YHcGzFnFoDwEk8aZhRSNGwTtaocGdycnAnAotpM3eNLc",
  "key25": "3nS4FhbwF4bw9eWbDvHKUJekBqP24B17DTXTh2ujFVbrJ4UruP6SMZxZCP6K4tXETAn8SfZmNVUZXHYyAvDHrCH3",
  "key26": "jrf2fVernUFZBPgMcT7UWyFgYzcziGrw9MRGgYVdwCLAE8Ek1JC7u86iwxX1Fbt4Gb7XvQjgHM8dJo6fSZ8rsZT",
  "key27": "4mm1eh9MTCmGW4XJNsvM4Nk2SBJSqo9RezYAdNDw3aS2mWt467ywvK6kmdk4zHUE5apAm6tSx1gQd5MyGJeTo3jL",
  "key28": "SrstewGNgyLi5e8fVzuZsNjYoYpE2LjDWV6pDZczgSLcfq9Bvx6WQ864AAQoP4MQTGwxzYHKxGk9p9TZcCmJjJk",
  "key29": "2SV98yNB9WJLBhxvX7YmgFwWT4u9wDbnG4SPYJ8uQ7ufGkR2CfwZwVz9soy9eA3pGCyYbmF7ZPafZo1FSsdJ1zFH"
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
