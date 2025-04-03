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
    "MNeCRGr9WZTG5XPoQHDEGZaCBdtj1ypugPSYC5BvaPrzemivLKZYV5PHv7mTkkLy7sdiDu2CqE1EKsVi6b5W7hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQgeUVuLvKeeSvnLGJkV9WuXWd4SoRvYvsrdqqBYgGsyt2sJgW53zEEDWRqrGaEiNo5uQdGq2EDzvLAMV5HfrwJ",
  "key1": "3Wqz2i3a1uF5FJYdGzW52s8PsbnzqsY2LkfjLrGUPho8zjCWarNm1DDQpzhPoJ72PhLPVCPgwiLS3wqLoSPPYwfp",
  "key2": "AHecUArWpcmb1zjcrs8zTdEmDAicTZrnsjaeur2vnRwUXUaYaTbRVL7ZAWPKWZjVzFKpTa4TjDFrxFaV9yQKh1M",
  "key3": "37RhaPzLFmwUCVcsEjnfj7njLADT8vnEsXtcHLwYJxUP4FWdvFpYvmsZuzgT8CApPjJsfjtb5vvrxyivseJzXKHu",
  "key4": "3cWCsVc9e6kc428phtZZan1aBdprLdnNNrBSTBHTsaty5qdHJK1kQFrhzCCbMeEhiaWoKUK2UFcK2tWv3WvRXCrW",
  "key5": "8tWqqwbS3Dn1RJXJyq9zQoy6vxBJD951pEdaQNqf9q7CJp2LyYqirTA9rNnVAF9rg65674CHW5HXnqNLMqn8FRc",
  "key6": "2XZEdjgyyYKzcPdnSFTNBb5bUBSwKvB7PMDAbmfaPiUmoWtWLyj4D2Zz1nJ7KfFGUrwm9up1wqG5zayiu3WisNfp",
  "key7": "8RmWnJvMUhF5PEQfffs2xNRWh2oXa1eUiXqxCFrPgZxgkwc42XaQgiYytkC3bmYQMNr8fe3rjsyzUBMceFXpMew",
  "key8": "21CaScWiaZqfJAHJr67x5XhKxV3T8jnuwpaVi2Fg6mxZoqFQcrbnjnZSVnSFus8o5Ji4Dx2R4UwcADpffhhz6cDi",
  "key9": "32UaGS992f1HQ5GCt2Rr7Si2ric9S97NgSEk8nHjuTLVg4bLYSZkUSswvyV7DbTYhLWSaj6G24hUMQ11fgPzGg7x",
  "key10": "pWY3kAt2qZE8nXS2d7R72Mcv4XYEKUgH8Vmh71DKfN9pgCm8z6QpDZX3CH4MLjnQmzoiZRRhEkV1wCseHHVPvpU",
  "key11": "jBQDfrTXbTbQpFKL8rRQVDQtLvcBkbBEMpv5Tvq9keMxKwZ4YRtUDRncExcnVfELPUdAzYdVq7oXxckAVf3eNbx",
  "key12": "2RfNot5ddqLKWMjpnokbpZyJLQex1PW8aANPSabb3Vzs1QMqQY1ExnQvniP49yZi2fY1vrFXzVpvn8bgUhvrVBrT",
  "key13": "3kXjQynT19kcQQuP4ZZyK3UNyJJb6rdhVRXZX2NmvNmLKbHsMZRdcz4uHqekLct8xBtyDwYCZ8KovmJJWtdCzA1",
  "key14": "3rw9BxqkXvPHDGo7aJ9FupLAMAVerAj1rqT9EASqwVMqUMP4FxfrXnqX9pmK3doTajxj6N7PhPwjh6t3vsHCiTxj",
  "key15": "1FzPmFX6zDC7Sy52o9AYtcp8HUFKTHftNvN1XtTZCXXtsWQ1Nt354s1Gk1vPxtEyZdv1HmzFViDNeLSKm8Hd2ja",
  "key16": "35UNDzYMR43p9jAbntPkrXtu3zvfcRRF9eQb7C3ry4PG6zL5xvXjHjCF4bSRTnY4iMM4UmucX4AgQa2fCbMvnJXG",
  "key17": "2n6c5z7GNE4eTguHrSbKLFHUWDPVwhE6eoy7rY9j7e96YJsDb9xc7gLKQcSTKJ8j9zQC2jx3pSnyCWWbgPH75Myq",
  "key18": "2HizP3uvJHiNG7Bsw99QFTS2bsit31ppsmL2EoLgZPbPm5dWPWSFV98T7t6qan1Ru3ara2jE7Aj22ywVs4PM9NAF",
  "key19": "42KLguCyjrXLacMmdpacrnsFZbnKGqnRKnyW26Gi2AYgeho3ZVASAUGpn5JddGFAuRY2QvJTj8Gn3LaohqJnh1VV",
  "key20": "5azBrBYHEVJz99e1T3Xs4HtVD75kiZxbSZMEmwNfBV9C4RDRdr7tFpTU4V7W3iXvzdZ82Y9GukpqtFnRnVHoYtAz",
  "key21": "4VrnLfc95wt61bnP3Vxndq6mmw98uDxNFKVcVSfM1X4Q7gXpAf9epwZkj7LnCCSrBVtLNtUFCqz1QBtcxhYfSpyy",
  "key22": "KDEPTMUbqM2ELtwcjk3h8BWHkRKtStQW9CXz4y1UytPN8SEiHfmwvNvoWMhkMK95HEuJipnfg4mFsKtS2h2Q2xs",
  "key23": "3XK1bhXbFNZSKiVkCzjauYpSjCNzgSc4eoNSLYZGUcPqL898j3iVV51DkuYYJTi1Qdu89PindmpZ8nZ7ieg8sBvU",
  "key24": "5RgyL6fbiYLzvuRwTnwDzWdTzrc2SyWRbp8v4JQjPenuwbhfmqXw8k9eiw29jMy4sUkQnqyz9PDMuXsw8hE2iikE",
  "key25": "2N2mXN3D7ZVXZAd588AZgx3bQmq9NJspGCdpDUohhqYNKYTMsv2bmYD8FgMNitD1E8qxxhuT1z4HvECbFPmjkv1w"
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
