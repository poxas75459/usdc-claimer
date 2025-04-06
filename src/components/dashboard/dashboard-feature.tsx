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
    "2xJh9kTxCxXH7FNmG9DoxViDfWSPsjyKv9z6hV38XeaJD6d3LCH1AYSE83fHxe5SQ5df1CPWdaR4jujTe1Ym2sWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdTxTQMTQmN7FgnAChY9rivgZcSRy8r4Xc4QmnwW2aJVpuESZtpw6mCzEgWtJBuUY1Fd5pr35cnr5GSU74Z12XN",
  "key1": "5xFLEvkxxUZGPuB7VsYTbsobcHu8be4Wsm9fYNEw1sEg4bqg5MDmMdMGuuGDDFSuatXiCGtFqRiqcxLtfJeVsjUj",
  "key2": "2nM7xnMWa3Ec415VpsoHqWBn4W6tSoBzfiGkUkofsMCobS1friKWnDLPWxwYGDMZCQZHhva8iVajMikT2XghTYT1",
  "key3": "2wm3Tb2hougAscdTSTM8yrwqfbBHGSnPxHzEzgucgydoBVuWseayM1GGgZ1PtFdRbq98UUFL1MVTpqvjSHNxsgmS",
  "key4": "5AUsgCvwr7TgXVHCYxm5CspRTjoPdj4P8LgnnpZkhVH8Jvqqy8ZqAq7Sos79UqqEXVtvPU7Y8znQGZ3ZiPU31xT9",
  "key5": "2US74kYnKvqsmQzPHm5LKfuzAWeVxq1qCkXD6vNuYdAYvfLhHSdFJgjuCoByE2h1uzm4T71ZUw9kTaVtxmpidNik",
  "key6": "38dg87BXubYFvhmiDNJCS2Jprie84hvhA53vWsjoZK479GxKGSmuZpqXQcYPVMoB9L44VSaNj2SSYTQ8Reo9wFj9",
  "key7": "Nx3Tjjv2rAn1koH16NXmDebcoh8pFyD7MX6UmWNT11Yq5o47whpBJgiaVxAR1bqMjVwJHN9gk2b6ByDz4rjDq9C",
  "key8": "2vJS8Hv4D8yGfg7L2YygYwGsN6w6hKFaHzd3jbsd3jbkp53rdcMPAqQ5DdxS3TcksRBnurrri9zvCnbT2tLxhrc2",
  "key9": "aGALYohRUDwKszHJuFsBejyZpjWMMzXX22tCo74bKWS7Pcbwce3wfUgxV8kQkgZTCZ1iVJKHniDcKtprZZXd9t1",
  "key10": "36VhPTkVaJcCvwFgunGWkEZJ68Mdw6NMh5JAkczQNLjP8dBMhqEyJb1KhJGqMkFFJAcxEapRQvZzgfKRNMnoGn2k",
  "key11": "4S2yXqD8CnC48J9VmNWD6pMwWphNobmJw872uPM448A3oRdQMPPTJAjK59JLBKjJ5WPDkB41PyM9LbBVfiTZehzs",
  "key12": "4axXmkhQgFNAbxBYDT3trbaoXcc6kSxUa23x9vL6q4Svo5Wge9GwfAUN94Wd2kpionw8Ds9jz8jTyNhMgB1PYWHg",
  "key13": "2U1GYtFm95bc8x97KmgDfJSewPYxEWmV5E4AJCQhFudNcv36q89J7TziipqiuXZvEgL6EodxTRYW5TmJV3SUsVJf",
  "key14": "Sphejz3dW1x97mus1xhuzvKgjWFtiwnTso5bXcnTS1cBEJbmaFsNj5CGHwDCwvJmG8jcHw6jFq2iAghCgTWzf5v",
  "key15": "48XgXQ3nanqZoNESK9ZDChMno3xpEcV6cGiZcTbii7rgUbbnjqcQPCXXpzGtjHqG66abUyfuRaF5FM7kk3jLqBVa",
  "key16": "5HvUak8U7nXCVhwQnGWbXwuFf4EqqgD42uLhPwwKBYYkvezJ9986fzqUSLC2Hxyo1aTx3kiPfxfKZwhrT22wJthp",
  "key17": "59CQAB5r2aouLibRaJH3uEWEy4WHxxVzKuKd5eArns6nnDKNFzBFpLKdC1qKNTvx3SrAAJTD7HRsqeayKe8sDNWG",
  "key18": "4TM4M1ZWsypLDbJgrt1MRmbQUzKwu7VZgAkZS8vcJQKKtzggxqCoDWrF6ZPfUuC4cP51cSDEwbLwyGB7eiveTJeq",
  "key19": "3u4H2kmykG8PxopAHJ64eMCLPSe8Vd3guoH5dCbNgRHhQRG5mXaCTN2pEZaL6Jh8hEwpxs6XLFpzYnqRAAY8PNKv",
  "key20": "4c9Cz4fJNQcnqfae5gER1rSD6rx1LTvrtj1BhrBS9qf6FSeA6SAYMVQjZuY5SxWJHBfLuH5G4eiwFEmicwFeXRbZ",
  "key21": "4mfQ3s8KkoThGbBFfwX9HVSd5zQfzD7q45mz6PJCMUkgigC7HUFTrACrWLYKSySR7HUMJL9wZj3He4yiY8U1zwMk",
  "key22": "3B4hfR4xSKcuEmSFNzbnofpnK1GJjHxmqWEiAarmWjAXQV9GXrYwHsTgCDn6iVDDvhmC3VvPEEfAtaZDjS4ctC2R",
  "key23": "3rmgGBVYeGNfQ7RqcDqCPrpzWVxtxSm5UphEuwcgpFyoVNYCdyjwgqvUNo9GxmF3XovFJcDKPfjp7LzeWe77sy9s",
  "key24": "2jgr8aR2b6xGfLReMQuKboCzDnz3E5AUZUrGy84RQTST3xFYorr8JEUvrcAtWFK84bmRpiXEUJe7FSvdQrghu4QA",
  "key25": "YQtFYPYQr1RnhRFi65xgxVhHaJ6pSAWCBeTHa3VSX7gqALGBMk5wpYNjgst1UTae92ogt2wATjhBCtdRb1R3KpU",
  "key26": "3HCUyCdqkczNGPx2GqppnqC8BErVcaP3y3EzitkKXw3AJ1m6SiNN3jVbKS8N9h17SdTWgW2pAMDYi44ShBJffVe9",
  "key27": "5XnVJJrBv52WfoLAPapzaCXc5bnpptVnM2yucVAw5ju7LB4aL2oAwAWEui2efkBe3dHA1yMPo2Mpp3i7Cf9LZeLN",
  "key28": "3UpaXhE6pzfhvFXnzE3pSjzB4537WaJBxzy2fZ37f2CFh2v72qVbLDKr2abTzm32kEWjwWETzkq8Fv4UMRCWsLyV",
  "key29": "2R9PGi1YpCzL1pFAjSSa8kJQX4Rh76prjCVuNkKMcUbba4diU72cvGumxnEmAroFQYYqYVcZBVHYJL7C6pdKf4bu",
  "key30": "4sSFLMeTSXDigwz77pXYgrA9ynibhLDjAYqiP5xJHFwHmApHdGxc5mDotEK9pw69J4oYZc4JG99bSy5rC4FbrwsX",
  "key31": "5vZUGjHawMdRSGRRsqz7JQEUda7YbRLWnYoqgwFAG61ygdVrnUdGDTPeb7i3avTzH2W2rsKKjUuC7tAy7pCrW9ri",
  "key32": "5MHEy92ann2vL7fHUwNuh4FjqsAMV5mFWq39bC9wM8Ys85iiPrJjQZXytmWNW2jqJytTX6iDHzPKcwcyDc7eYKfK",
  "key33": "tpm8tm7ptPFJ3t4P5igUGopteHL9GVnvBhhRDq4CAFz2SxQPTgJ4bUXaQsWtXAUUUqxLXd2bQyBPPTB2UC292DH",
  "key34": "5eg8Sw7DQhfmWHFfGoNaAvdN2EwmQPLttMMd7zjDXre7gCY92B7VLU6bgSUUSgMC7nymGmSn8TJQL1H64Af2YFqW",
  "key35": "aWmaqn4X46FKfKtrmXsVu9vLTGcCo6joM4MS9uDvjSwVFs3KbAwYC7WwW3x1idjRD7GpFkpeR6wphozAKqgxEb6"
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
