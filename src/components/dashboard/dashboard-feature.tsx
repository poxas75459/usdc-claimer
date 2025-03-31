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
    "4HkTsAg4xgRSCXkTLoceNNBHNNHPChbthwAhNyHj1AFfZtGQHNsd7igZVjLk98zJX2aK1ec9WJdbixpztB1ig6qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPbNqvDfStUyR656vDetk2rTBDRNF537G4foxyY5L1jSB3Mn2cmwvMhcTd6XgoPcVCt22VVwVgNWuaDTX3iG8Ui",
  "key1": "65BHmJ4TgcComtkmh3KufZNgL9MadDNLNnUEUDHGXLwetGPxJ6PwT66U92KxBYyTwM4grdpqNsUAYwWTFVBUKy2S",
  "key2": "2EC89VyxQFtHXdDsgZx9wzaLGZuH46ewDkxcY2fKENucU52aGJXk7atJGLbAFDMbab2zKoUiKx8N4iJYYQhwsZmZ",
  "key3": "61RqiwcoJ8SJdEqYbNp8boUoK9N1qV6sbzb3zuJLb37aP6M1uKDdr3QzyQTA1LHA4Wi7816ddD2ajrF7yx5eVW7G",
  "key4": "2R8uHg5hDz8h8Y2a8mRYNDB7vHewugo3xRdjt4b3CXsMDTHua3WfYmz6TtF1MG7EZYgkSgxVPAGHE8tpn8FirN58",
  "key5": "p23DSVbWr3QbQfHt6F9xnRk2XYc4t95cjSvjMykjdPtfjEio7w4oRHdVMTD321L9C2UJPRUcZLMd7fMfnJZjyJE",
  "key6": "5Lh9q9sFpWxK1tLyM8HbbLxD3S4r6qTfMvfFzafsXU57ibvxJfxbYa8PYdLSSSHFRdC9mLNb399uy6wAmm9b7w2P",
  "key7": "4qQhRTwAKxkpFB9jy4s8dZHMxny8syciEzzgcjh8yAHmPcphDw3YspZmPFxLwTPQixruMWAQS5LinAWCRWD33YxZ",
  "key8": "4twmrfEL1ArRVHYDTafZ17Ppsz37dnyKqZpkGcssE5CzUtBmU5RGPkUQNWCo8dHWwKdTfeuUtcBu8J3RUsTsirBB",
  "key9": "5HzaFXfpyXtRgd7YhexSgJ7MyLMrtZZEaHhHr69a39sgsdLu7oKeVWvCtqj7utqFtDzanJSLJP4rMmvetxJgsT6E",
  "key10": "at7yE5wqmMMHnBjLMyNdp6tuzA2CnTYyikJDAhZ4PSCZrRgPprn1uJgyhuk5gkruLamLWuYYBt2ZFos2SjU2z9F",
  "key11": "x2WisycaRnjXJbh51GGXDefS1ovGFeR7XcV9prFqcmAT38AaQ9nQYhmSrTBJZUtmkXkRkY3pLDc3Wns32piZXc3",
  "key12": "azr2QWQWe5fiJbHw1P8X5LSLRqT66zob8tVGueVPWp1TVSL6z4Kqm3JZDmUwZd3V1uU4grhM1rJimaS9R575DKS",
  "key13": "DssX83svreGmGwHSSNNqCLacqBrmBMwLbkx4J8gENS7bfBpw5bxqMpoPqrtxwNAHWk1eZY6rsUxRm5bxXP7fnJz",
  "key14": "2CEAtyJSeZs4jB23rb9NtU6UacQJgTVxLxEKZG2iVMYLT2xLhXbnToV1LwspNzgAzH4P8i1wVWXp9gwFzU7Uh4E4",
  "key15": "gLAEJRT78C3N74DhPKAv93bKZBAVmE43g4pveCsUNHraaPSHaJ7LE4R1B8dFfhrvMoYgSopfAbMNdDAnuE4x2n2",
  "key16": "3e5H9ya9rSKGdcE7YvGxECYjMpJPKdnfRt6DhKqYz4TUZ6Nx4p9nGMxcZhLJedD7cKAD1r7QNe8jyu8L8vMnfJSD",
  "key17": "3wqxarbg22ejzRdYUvqvXov5THZRGpb7MXjuqaDY7Gs4WAp613P8Yu2NyGxTnszJLrbvnFxPF4QKEVdgyAfw9v6s",
  "key18": "3kTaBTrjQaZwLKprNYKDY3wqZPaDrYNtBxJRTxks2aDEWtntZnVcWNPQRsK6GgfbH2zusoM9C9YCfYcaL9HZnnDG",
  "key19": "yr8txePHMTkGoYtcps6XFcwHTNwCYmdiJzdRdD8TUnEzpW6cq6DoY4rPjntwc2dbqNHAP2YRW3kLJ4MRa6XAPWg",
  "key20": "4krZyqaZP31yh9ahBkteNR7mDK5av9Wjkq67UzepWXpf9W2sDvduWFDggAYCx5rUv2dbxkTpGQ5W83YXBmnGcQ4H",
  "key21": "2qbbaPKbnUCPg3nBd5RV2iHC5e6fyvm4z28hy1FDbfzaGVpD7cw6g3DZE7sGRJSbGMPRL96jWdW7dXodJz2cN9gm",
  "key22": "21k1S5LcWasCKuADcuYNcgL9adnY8PFWRfJ9bnrakPhhktwNb8qJTAFoXmqMCCh9YRPU4NekVaDnzyYDuk2RmuxD",
  "key23": "2aRw2XcCnDA7MVAFeUKmfRVk1WXk7z7HUbSFBeQKBafcWBdqBoNPwBpZTrsu77pCPsWXbYc3z3vs9Ug7bUAwW611",
  "key24": "31mu3BGDE94Bgmh1fZnM2XvbHfv4368uyXpVB9NfSTmK4pzMswYzjGbEnaeiTjFQVkbAq7mQQVqfUTcverErYZWi",
  "key25": "5es82v6fgCYeWd8dchLa5Bpo2UyGTPS3rW2vdRa3iEVyD2fDS3sFGGfydEBTEUEJj4XcakLBXsGr79PhnSidwehk",
  "key26": "gH9ae1zGcptmnKSud36TAMWUEngWbzXt8LJM7gv8H5FjHGhDRdQ66a4c61PCRSSQKXM7X3p3AvRwFiWr8PvNdEv",
  "key27": "2GBeHSXsdntEUCJnTwTEYQFWvchc8yLEPCybhcPK2ynQYDMeMKF2xhvfhE4Kvy3BYh2w8mm7cnokgPYXPzPY3G6m",
  "key28": "2NvBApGhtGKBGn7kP7XvqKXLqFyxHCXSnELF6Ccnr3dB697mDWCopRKLYosRW1Cr6kC7c7pfPnC216i3LFS8Dt21",
  "key29": "4dT1QdSWZ57RNCVtm6JzPxfjbZJJYZymLcSUQJGQ9BwXmsDxzTrFy9edXAHBZHyj8bD5F4FW4kq4L3kNLqCWBFAN",
  "key30": "64rAyn6gwYnysHAKucZVKRKxuYCyFbX1zoMGdGDtWMqua6anzijch8GY1sUF4fTJbyYCbXDTUDxSBd9MT58UVUc4"
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
