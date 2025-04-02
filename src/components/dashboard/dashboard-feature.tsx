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
    "59u1iz1cWh932MuwUc9qoGjkT1HMSHzptnrW23hGYebyQo7EtEXjAkgQe3gAP2v4PPYPuPhcNhcpToPhgj6nSKgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFopHPT3tLTn8jrSyPFkrpAVLbpmbwnaXHCY9fYtRnV6vkeNfw7UrPNTsFhkDWsMEfhMePWQ2Te5PSBPM2vQK7U",
  "key1": "9McAacBp6v8ti53SDVSa3AnLk7sFU7tkSH5qjH2UBYWonhuaWJYpy1ijjHowC2gYWQp8KUJkVag9aKUPyHSd97e",
  "key2": "2dxL2Ums2ZFvPSdZRRMdkiym5mK24pvF8u8cayvWCGzT1LbJS4M3KP6G1jNx5iZg9pDjtvqeFrzFmvYvePXDYP4Y",
  "key3": "4x9BJrjhs57ESRbGEE6xxwugUYDTnLFciGZwK5UaDgoDX5AuAwqiPXnfWNkpNeURHGG1wtr8dj5112tvGQBGNJ4p",
  "key4": "2ErY3wRW4PsAXcneroguoi7VbcQQChqXTy1kVutL9wstcrHj6FQYPNLu6m2trfgoG7NrhdBHEY7nb5SJfi2fnjCH",
  "key5": "3ZhTfEwwPAy3N1Vix9LPKuSNoZwXsv6kZBL4U3xRFLjWdpdxBGAd1VavuzpbLTUhwgGu9x9oUS17X8prJc9vfLrV",
  "key6": "qi3hyUJNqEMgC5AGwHASvqnvCKJtx5oh3Ps6UHN6YdzioDtoimSmX8YEaU6dJL2dNoma52uU5ATQwuFbpXBa2Tm",
  "key7": "2q9nacKhp1X3bForFdA9y1m2N2sCjWE6zrbVZzQn1gZJiR6VLzr93mNPaf2bFf5bwEszVwM8GeNj4CYQSGNPvCK4",
  "key8": "XDPcRG1eWqdXjizjN1gZcoeZjJtzN2byeGHRT7hKH2kYMnbtpXC3nVCrXvxhv4K4KAUWpWTTrXNZjHpeEguqScJ",
  "key9": "3U6UzcpUreRhbsWaibpEgNRtavqaCy6qejHvvGTxKeQf3zJveDG5xNMdvVmy5vxd5JQrbuFCgMU8gMazRJsSDwbb",
  "key10": "2Xf3GLRQ3w3CnpQ6GpsiRziN3RVUZpj6dTpEfUJyurFWA2JPLtRKUwUyQrqd93kqqZD7StPFCkMcW7xS7JgjPW2D",
  "key11": "53YsGpdh5USFtuxDFmF8EZTg5x85xKS7KDpbuhmqAAcSvNszYinHQXdAJpHCfHkD4UQ1R1DfwagaounxEfHTU3Lf",
  "key12": "BsF4913ibPWWkTwFo1TTmbe96dTF4fy2YqRtbFuBAPqod8xLEYv6oyRr9gFCsHyxsB5F2k7CcuUTawkWVUaTHPd",
  "key13": "4AsNG5hpwNbg4Ju9bTdsmSqHkYq3Eq3cGZhAWtENZU5CrZmqBgNW2sU4p6C3fvyyveCTvkMPfQhErPFFBHqy8Dva",
  "key14": "5WXU7yWnWRkPwF9eo4iXDDAteozMBQbwVzoUTUdfWhybyesbMgvfQG6hXhRqspPY8FFiB7dpbJBGRuwJ23bGY7WU",
  "key15": "2Vv3dLZwgxKQd2R2D8aubzLNqnoWbT26pSHfxr4omL6f6AHv1wYYuuJdwqQQcBJYQYV7VqNE8V7iinuixhbAvD5T",
  "key16": "2S4bshNfLfVoQSQkWxfLJpFCXP3vkThXXTq5bhFHs19j2YHhtaC3CqaTokz7SBBWBCw1LurxwgC53yszG6Xvdma8",
  "key17": "5HpAvpbmTbytNYfYBUiKME6Qnf79W7THyXYVshCTehkU3cdW5ADzYRVidt1m3BTWr8dHp3Yj9kR6wkVsApQLaeZ7",
  "key18": "3qMhhumJT6KerMK5vH41gCinuAYwLYyR8rpsPxppDnKqxq2c8ZExSyKD6yh31e2J86j5v4rk1Xd9pbRc5f6HB62a",
  "key19": "2iLmyZM4qj16zA1Vu1DVTtr9SrypBJj6pNFH6gkLYTvguM1X7MJ1PT4WdegDsi96DQpvdxMk6BKQ56V67cht88gE",
  "key20": "2ugdsGfyEz7HpFjkT1haBztXN5rcpJagnFfhb5UavcoXLGCusAgSMfvcadbci3UNR4oNL6d8gXwRB9ntF8V6XbtS",
  "key21": "3iHVQLqExZjKrduPtcgKWNCfjRo3zZqFmcz6QgHcj2bYM3EgyCzRx8ooQtj2D8bsD4SwavG6uYW1MZnw1S2LcdyZ",
  "key22": "2cNrkDUrcgHRhBXNN4Fb7A6uD33N2XDWwVJQ3pMSem469PBxcwQwpQKFyH3dkW3AijQyuW89pJZuBqa5fGpsSqot",
  "key23": "zanJgbW3dFyBGDkFUvrQjaG3n2LyJuHpfRbTGWEDLRFUxMYirtsHqX894EKgtaXbtC3QneKCHycTpg4ShGNhhRu",
  "key24": "3A4DKgytKDzPvPWNr1KzbqJXJgmtXEinPza5zZFZ38JFaky7jLq4p68j1oSsqR8TeyTQ6vczLoXomoCUPWhtoRjh",
  "key25": "4DxB6N8VxANo4gG3q6CVqL9Fhge15J1Cubf1iYDj8VBqj2zC1VFD8iQBHi4yWofm9DeGm7wxFijNEfreCX1kwT1F",
  "key26": "57hVdQ6eRuU9dxCxvPXpFurcDScAiv6EroudSAnV8WbXBPbHdHt29771Hz47NZJWSpASMWybGxn9oCfH6XatuiSx",
  "key27": "2LSjsLLRWxzu7ubgKxH3v86jAcHiYZg2tG9QHWomj7AYt6JcBfzGyGu7e2PNq7EjA3oTNmUdDddMwyVQg73TMSDX"
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
