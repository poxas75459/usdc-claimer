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
    "4pq3Hv5Bp27T8hw1Gw5yCtVwFTtrmTrHPezZnPRkM9hPqBKqeCXzFj6SYVnpr8GKUepUC67KGRPFbhB1jNDVEuzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gi5hP5tKnaEH7r4VqRnyXsCbxE25ZKcqiTKvarUKyS3nwKHqtFxVjyb3ddJaxEhyu1hZQ5LszeRuHxT9tdU9zB",
  "key1": "5Jx2m859UJD8y7rZwgSGjJ4md9J2Zf2XwYsHWjCTD9p46Bg6abFbjXNQY2Rqz6oGCpMGg1WYPR9VGgMynJhGUmTc",
  "key2": "4heLLcjebtCE5PtjwyEe3fHwug1Xbo8mV82HFhnUN9AyyDeoUj2FusftN3sjBC9ex9VmkG5AvSoadRuwKJKDB5JV",
  "key3": "4SB5wkXwu6miAqnkMhrhKkejVfWcJgqxUMe7eAsjJSFvB9iJyhC5cnwhsgaHDSX5HKPzXW2dsQA6Wjn9G7RHp8Uv",
  "key4": "5whWUoCHbyRFtV6ufr2fr1dkThDVxYxxssYtrmy3sQ8wTGkeJ5guXFTuM1gQYSn7VERAFAr7xZqBoTAS2V8wMK54",
  "key5": "4eqeFrhoSRbkLKseq9jv9MXYHR97qceiABsBkHhfhvSQeVgrq8jRLCJKbBj11jnhVqz26wpFcob9h1iDEaHyqXar",
  "key6": "5stepwGyfgaSNFQbzjRKjku6ivyfGznQpV5yEWsNqYhLZx9jsGKazfpnACyZk78sqKLiUNRvKgthtG3tsqgW97Nr",
  "key7": "3spYwk8bK2CN2eug37jfoD5q6g38TZzTnyz9cbRdSBvfaqrALZ3ApArLq9mXwqkYYjZ9we4e8AXwGgv7HXK9Q6BB",
  "key8": "5CdwHFHTpW9yT4tWhmPaa7pnureRwWCLKFhK5P8Bs7UYezimTGrByuuhCSwoVd5tiG11zvA5StqzRsMTNVLcsMhq",
  "key9": "5KN8ajYWh6VPzLZo5sBdXU5mDHs7mfAPif4smxLK7hGWrd2XzyLiApj6GbvFayk5JxweXQTuh8VmH7q3nAZwMMW2",
  "key10": "SYmte8qoGNZncdsHZPRJsXt4Z9yu4UdqPVE7oPQJWFpScgrViW4ritMoQiLYqpfKNoMyvw7LWESdxUFnxM2Azzh",
  "key11": "22Mg5Qim1HHgDmEHHRQJSoX5F9aQUC9NTCR66DcFaFxoGhGCeXY62NUKNXCxUqHUU93LoKJhktBhi5rLievgbNVF",
  "key12": "662ppTw5CufdW3FPCXNnSWvQD6PehJrKLWmD3XewknmydYwV5k4QykiAqihZB9WcDWPo7Jiy33VfM5tnqgyQM6uj",
  "key13": "3qqUQqMkEPihK9ojnpZ3qyeCQcH5Ezfr1xgYVhqKYoYav2YPw3GjKgtiWxqkcntnsUA3iVEs6ffc6w8sHofyeNJq",
  "key14": "2aKa7oqubuEHsmH1sVfG3FiLvLWgh6m12BY3hhj2KeGje7ffpuQRqD7byCQErqAcZwWVhV5iTYEptUBGQSDGXWzD",
  "key15": "3g8wirvvntcPiQ1g3rf9rVFLfGyTz4W8ieGSP3CoQkY5rRPMLdZajuH6hG1iS2FUim3aqc8zYB7a6x5pY1QCgfF2",
  "key16": "3dRU42MGNdn6R38Ntq3ZnV4ZV4enaomscrQpbG6EwBmHePXGJ232C3oJZEetjowjwKZF9hoqosLcmfAz5BByjffr",
  "key17": "5U2Ut9TeEVvNqttsFmP7TdrRQRcri3UktW1LujX1LHaL3W1fEHANnW6uQSttcsAVbF6sYrsjZmfgY8Nj6GK1pjyf",
  "key18": "3N9Ksvv4uzNiu9nk5Cy8q4V1xKHFA6cYrbewRAuqSJnQrGjwwV28J9eZJBCgRyqqttFaRPUingrYxLrVCpXMzC9F",
  "key19": "9dNQP5iZFBy97Z9MxWTSmAWJ6C8cYM7F7zwiskcJabCSeipg4FVFTYqkRiKtjWYdETLy9bmVH6Pi9BPNnmigAQk",
  "key20": "47QT1R42bQ76DkDHKZgXJZZAFPQGqbos58JPSuFEEAirUpxipEtSThCktK6az3fvkQ2yQGMPjrstGuEDDt8pMixC",
  "key21": "sA5cKVNajWabykffxHXXuMGC2epms9E1i7YxAJVz2L5wt87CcUD95Z8Zd9CfbJEyQ8hDPSbmTmADxoEReQSrDWU",
  "key22": "VMqP4hycPiES9m8uLsQGSvyJPXQLputo9VMp38SgTdboVcMzSu4Ztd1wW7GyPgbKaPkMGWnaAcHP8YQkSJcX9KN",
  "key23": "iySxfn6LPEJSAF75sKRR2imfZyg3xFvwj2gMMjuZuC1Mew61BiWuPx2P9vU6v1dmJvjfkxu3ZSrgVFTwnApEUiM",
  "key24": "2RCYLHYqDSVJQRU5tjWAGz5XdpqDaee2bQANDFhPcBLAB2hJ7bCptn1S13x8X3CVJRjZnKumQkAXX2aZBPfT1oLm",
  "key25": "373yhFqyM7qsX5RNHKvczc1WQD4vEopLpAxDREVAxzCm6k1NefdxYxRyRDePXzHomghYvdE5XY3ZoKWxRuY5oGec",
  "key26": "5XAazdhFJHhzvtUhgQUacnhdJqNCguFADX73wCxCm4yeBFqjfxjTuJ7DNE7Ln1ESh1qzJtNmwHDY6bzjKsPEsp8Q",
  "key27": "3h8kPQa4FDwgrSsogVcDv8d4cUznbgwcPajYJUiimPNjQ2ppxC4jyvSeVKcxbCUCoAt9zzT6WA111xRKBQBymvow",
  "key28": "3qTzqiCjywpjSmwAUtE5pwFm6K9vs87VMGRvLtcHFKCUt1o9TaoNZ4FGB38QuCP877p3GHn873aPMdDQoeUd6ZRx",
  "key29": "2V3M67yqNn9gsEfnP8vqaqm6VP2ZcKV6hEpNo336SzPjNXHhuLiYAN91XKNFuCMCm9AuC9ftrqTkjhkmTm79WFZK",
  "key30": "31G7eyQ483WmoTQCWyF5pcraf54eujy52AwwnbC8US3kjXeJ2J1MG56DkjR9BYaaQWZ4mdMCfr9bMgaf4t9Au6Ku",
  "key31": "4DpfrTdEeD3KfmqC4Hov9itAdfyGiAdVmE4giPQeR5dst1bLQ2AvxtjWJSbYGACUCCpDwSZfgT5fAPxRzLCwX87b",
  "key32": "3dACgQ1tjfmy1PpP9kDvJv7pU63BQ7jqE7WpJiiJQBsLPnJWmwGopJ6DUGPvGE4oqv8V51MxzcGN1oU42d525CSG"
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
