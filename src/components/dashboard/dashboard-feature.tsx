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
    "52PjQWR2x1G2i54fc8yM49dxuALkBzQKZU7LBdkAB3BLhvkTKXrCD37A5WpCTTgj9XeT9BmBk2P1FVMXagLAmhKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKnTvX5ZYN8eEorNgfQPe6nRV3njpqx7CnN5vymNXFiCKAV4BUZAhcR74QnJd3sgMd2FsxtNaXqZL8rvK66eWfF",
  "key1": "4CUWkUfR28ZrmCWRAV1w3HRePazpgMsgLFQ1g1KXhL7qFhJfDeoh4EmXcK2ne5oSrcyT716RLz2YVe8qJrLUyzW3",
  "key2": "vjjkSyK8eGyQgWZyUkGadLePNxFbznvmpbNX6h1wL3HkRVMUMeKz2EJy6jjbVnDBqqEAprq56yt43z7t9TGbHBG",
  "key3": "2Uw32HBhRBGu4AhKaUrdTsMJdRZhx5K4BXFYhBkTuvwCfSv3JtimndmGhLacegfkyMy3tYRhTdPN5G4gA1TVvdkh",
  "key4": "3Nf5XyR99cCn8SReavUieYhWHjnME7nPgPE5zMWVSEYCtDrZ1JXcBMT6ct24UFvLLYEfXcoX8VJWv9oZbtVWF4jt",
  "key5": "2g3kFeeS1ynUTCBXDpLwj5zzrHzg8Z1vsaTn5SYWGDtZKzuzK4nhGSLAub4nVv3pmYjpoQufWkoZUyEJab5tzbyA",
  "key6": "4gXePw5Kpw6uRpfmh7hd9GGpNFufPxSydwSfi7TAPweECaX129gRJgLjyPjr5T6qZ7QMPaBzUcwDGCGnTReiwYie",
  "key7": "34usF6UAVn1s2cbiASCPgHF5c7hH2Q8rvuVD8iQMfrPFjgp1E4qTag4ECiJnNpr1iQHVVLxBGaR8PNDuiW7fwk8i",
  "key8": "3Crm1evqh47RSSc4pbkzMyQ9L7jzGcRn1UzJGn5YYTMUfJibGVzgy9aLJcug5M6vdz9aP4UGhqgZ5hw7Aa9HZ3Xn",
  "key9": "4JjLGAVi3XdxUPP2PL3TLEkiBPqCR3MCrKRpavSzBiLnjT7Z6ULok28VZ2TVKeeRCfg16QDvJPkgEMb62RKd73qj",
  "key10": "66wdFPs4YjqK8PD1Pd2dENTN1wQr47WCTpEhS4Q8ec4CGyYqLzBfpe1xfqXa9SPC5jNUS2w9dBBMUbcradq2Kryw",
  "key11": "3NnjbQmWxE6eWWR2gYbguffBVhKYEgSU122giB8WDPdZLdgsYgE7GDdK8QWt6bxRjq4xX6KPFsEgho3AE6WS1vJL",
  "key12": "2Qx84N3PH1G8JCA7M1GCMufKSYxJFgecNsY6q8uNEfM1Mw1ZNNhgzzc2GJ7MFda8AJQpa5HsKhtMu863GMNHkMj2",
  "key13": "5YLtVZxPCG375tRWoKd7wQ9pqTa7AcDfpFYM8pskoJMpahYYngxx3h2aZPMuJ3Tq5JuAnGqaor2nrenvKkxq5QXE",
  "key14": "3XUtjCr5S6XUFCsCpiavAsP3oEGm3iBwhtmUofSFzupn1pCsWkmZFiZVX2ybeBrgBzuhHtEKyG3jr87K4BbEusJ3",
  "key15": "3prCJLRNng55Uik7JZG5LZKiRNrdNQGwX5qRfZjiCJ77v9QVoT6izNTTZnPnjqTKAmL7ppZjdWLWE6tHCbQgGtga",
  "key16": "4BDBeDmtqdz5G187wNtairSxJofCf4chL1L5jKb2fA9JvurN6pTVXwDHQwgdXMwAJSh5aykxyRyP7PmigCaN9RSR",
  "key17": "2eHtax37piS7Eemz4owrgCNY4Fi5LgzMhds4RK83CSWgLzDDcTg3Qy6kTLYn1GC3G59WnzDFpMnhx6m3F69f3HuK",
  "key18": "3YcD2rXR9yNJCJna9pGNBGyf7wmBhjVBsvPgJNqc5Y7fs7HeG7jWfB7fEvbw7f3ELaZMiJAo9wVsjBmJ8m4qxX8y",
  "key19": "5Yo5XCkunxExdsEtDeag1NCHxDeU2yeoe9FjRe76d7tEE3HugyaP51S4LRpFqYdjU4qE61bjKSKFsUD41kdcv1yD",
  "key20": "5rtVUkWFnNyCssgE2yt17fi6T6HCfwxYC8DtHuVp5oBiPwU5GTc9RfugCezerKsGBh5Q4aZem1TZxwicuZN6pWW4",
  "key21": "4xGHz5btwiqoDdcAvdDp8eMyycXvRNJcPxMqa4FgTstfWYkF5WvWUL3eM4vHQVm2KARg3Cw48AaGnoqv9VhpJ9AK",
  "key22": "49GpDx6xbvvYJVbVanVrze36bMyRipFC9BEvGkWFFsp9WDE3p7yWWujBg73oiQot1cwnUyDNKL1fat8Qpr9eHGjE",
  "key23": "32jAo2oyy1zN2dnmA9CMQ1TPBRqfxHwehA6LjvhhDEYrRKeihQLasTpTzr9RNB2ZLer4TFuMRUk4xx4DZYR6HJUo",
  "key24": "HDfc2KovQTrN9b5U5wg7GdiGyRYgSXvHtZRMMG7YSrB8EMcMKGZASmHXqwMMM1yPjeg56dAzpRDGHzQrXcykJBC",
  "key25": "3GNtPJWJmZkDcd4jfPRvsXtj7f8SRT44eW28NwQaokUhPi7UVy7XfLn6TEaegZ7rVhpgaJhnYeygL55uaEbmgEBx",
  "key26": "3QTG2veF6xMGjNWpem6ZxavL8xjkjes39Ue4JTLVDip9udbvGVQZsXndihz9MRfDTj7Dmw1hpm2fYm8bUEaZSqy4",
  "key27": "3Hr9F6TJNHMwmSCkzN1TECbkd6QRUYSp4BB4JeHC3wfaWuqXBjY9NwFi4YQ24fBtUFDESfiAFujRaJg7B1qv9DUj",
  "key28": "2p87bGWSUc6g3Wuyramn9DTD4WJDtvPcquSVo36eq7um7tryTbaKALEa136zMjPQCQD3sgUL4HwBjV7bpSZ8fWJj",
  "key29": "4BQwU3egvCKeufeWShhUmWv9E9hchD2sF2PLkkP45te5RGVHtrdCQhBHr1yMvnzdno5YnSrqHaBMdUzvK98WwPar"
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
