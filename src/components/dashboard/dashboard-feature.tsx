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
    "3Tx9jVr2t8bf6Uifb95PC6Ye5eUGJQyeE81bJsBmHDcbzeb63J2MFnJdbkaXiDh8RX7yv49J3UxtCso3TN1YEXMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJhamgE1Gbqvv222sQhzNfLAk8rpfPmarjYnaF31ExMuJJ7LYRZXCgx3hMggX3s7tJqKP39qL5rUGUN6XkYUa7X",
  "key1": "fw2LPySEr5qTFGJN1jZAVxCJ9GVG6MdeS1WimiEVvMs2C7Cf7dq6yPsELYZBFYwVxB8TnC7yc8duYe2gzroJXVT",
  "key2": "mzyvv9voBHgTupn6i4E319feHVj15CuHrJxi8EvEaLBKgJkwxs9sMAuzrSDfnQtZYUqgD6yFSBLmSwDrNpiveMr",
  "key3": "2u3Zm7g2wkQ7kSSngLcLdQufMkCxv8yN9SRmDPdjVmCbojEpBzMSrEd354a6Pe3qk1ZgDgMwKQSV95vQZj8jCTHu",
  "key4": "4jGbWWgEfwatacQhiYyNBxodfcRDDbDwJMWpWouQVpSA63cJs4LivfoWbGqd4qU45GtJzGhRQ3vRqPeXM4z63xRi",
  "key5": "GtREYXKEXJ4YsAk7K2QGfjKCL98oZAms1ViSQhenzEZH4GHchWynyMP7YR2TRLAvapqkuiAbwT3a2nTWLMXqX1B",
  "key6": "37E4YyBUToQAm7ezS7SRT1Rm8VEqspdvx6uXBFiz9qYPdVpBkJBeuVmsxfxgNAk1T7yUzsFEPCRUuDx7bJ2MFw6C",
  "key7": "3r4p5Kg9PWvGmwkJmr66BnTUtpVNPVeX4xshmJVF5JBXyKG7WywSUQ3nkHyNDg5nWwQ8r9W835guJcGzCT4Lk6C4",
  "key8": "5nftfzq86A6tqg4cfDGCVL5qD2ktFWTKv6tBh73uUrKDyqnzGkh6CntTELMeSeiouTEtZQXTPLzXKAJtAbxzSouq",
  "key9": "2HZamPpnpUcz86sNVRqSSJt6MDTyZnk5JRo2bZfcNpqkCZ97gNvGZB5mGoTBqTKj78KqQ83M9RHJDZEfSkRuMkPT",
  "key10": "33MjUvWmcADfqA6uz9kUaTurKuTDa8P2uiQFYeXtg1SjkYeM3yHTFpEmbXgj2bS2twzPgE58MthfJzd9FzhK9adJ",
  "key11": "25Y3ZnuajW3sbNXem46kcHHnv3SSHPPC1QzxSLY2WkfPvhKDqJYrDkAWmbrK7djHP4pf3YBzZ53fe9285WcVPGXd",
  "key12": "5Xhtymkb6pZdS9tKgXN38PU3VvDC1xvQxq3THCnbzY8Sn6uZHrydFQ5ePUQsSYn2JkvkhNa3t2qwfzNAWQ5JWe1a",
  "key13": "4EGDJZTpV8UfaGJE9XfXKdqkDAybKVB2ysUHe7CSDfFbEuAgHWjduLdJjoSqexJane6o5hz9z9rhVDXeoUzj26tA",
  "key14": "2zgBS4PQ6Zy7jSdVii1q63bMrXhxasyWJNAsXuCTT8Lhw1HYmWomrBmTfDSJrMTygEc7y8mJgRpE19AfAcKmAzEd",
  "key15": "2JiU4EybBmndtDkPPPFgUqk6yf8WjjjZyQUoefXxA8EWCEZruRM29ooDUqxQUUbYBMHPn1YVsijLKPtGzuQ5hyJn",
  "key16": "4usqfKe7Nq6u4QMKcTvakAKVYpjqyZ3cNhJ6iBTv8vibMDihrcs2H3Gi2jwVr2t3hU4RTvfrgBk9CJRAHNaLbQ1X",
  "key17": "2YbFqFZhsZ4axci6YA3RRoGk8AL77BPMJVuXnYqW19agPRSd7MAEniwChotwqqFusUMtGu4pAJNQJDiSPSzMkVjF",
  "key18": "34ap7aqrnnuuZ7QphUbBgVwct5TxNhprbUY5PDfZcHvy5BLjB3ndZuqr3Y2BXkMzLFbp8XDH6L2sUXjzkWc1ZCUz",
  "key19": "2rbtmKnCPrV3TVcEBvKNPKD28rPj5uTGf7CGSAEeiaNAvezSVKxve2S1W1HpMhF2dhtLkK3miVnA8CEr9S6V39zm",
  "key20": "3QWkT1dxxNMmNLwf9ZQbmFCKw1Td3KgFTaHdwZtB76jWDUrJPxNKP4ipKjtrJQ7rhdjiZEnWsLQgAWPpPaUzocaA",
  "key21": "5819H3jgPb9A7eupTbiT1e3xYMM4ommpbpAXENhaqeRLNbNANFqrTtf65cdfn5sTZEC4evDn1c2kgUFBvGfG615G",
  "key22": "32sX631SWpxpAUAFa6YCRwiG6cv4561zL9omiCFTGJN4Lo8PCeBjQev8xnTAwJQoodSg2x4ZATajFHJXgrNogU1v",
  "key23": "xyH98rYVxSyqz2WRXAbnARfzYHurvKBJ9pBsxRGePXBvYapS1CXXzUxVcZZU7L4YABazrCqUE9ub6JQ7pa8qTWU",
  "key24": "2HL3cZsbMRzxS42tCxMaowH4xHGnhJdtms4U1rwUYzQrGnypPMfv9PBEWeEzbVbdpM1fCXRurzefGyihG3MmyByQ",
  "key25": "2cxP7BqNpDT94P5M6ytjsHKHwbsZCdZT7y1yAp6CJ4LLbpDACBFATc9ZD8s3yRip1zz9oo4EkVaVQUHKJycpABxv",
  "key26": "3kcSFwbC3b5SCo1ko12dRCVpGVVqVbwpuyocfH6FdDCGZx3o4TPd3wSH1thhJnxaoMRGg74v9UPHTzzrjqbPDMD9",
  "key27": "2RaErPREYCqjYb4fvpLph1nPdnHyCNdPtt5RvCfF5YozpLYh7AXxkXVJURAaAS3RE5JvLy6eXeeuB3JVrTVE7bWB",
  "key28": "3jUJLAgY3EWUQthkZ2ci8wtZpwsByzW3ALmyYEbuddkUrFo3GurvEk56SJiVTuipoHv9Ziegr7FiXPELnYLUA7bb",
  "key29": "4zermfhX2Q2qH1WXe2YepnzPxADo9QRBWrACqRbYtEPmJQgz2sVcoW3f7pf5oibX3tTZcqcXJwpaqHEKmEijwFLq",
  "key30": "5qvXnrEJz7UMztU4r1v9ekdWjFBxg4TotFHhi8HQ5BiBzGQ1cmqKQ9BV9c48u7y7h7QBRv258G3mknfPLjKjhfxv",
  "key31": "4DG35MXbHAWQbGtDrRiAjypsgBQWg3fAkCtbZRBKjeHtdiY2jkdZnhBSaYkVeBgG67tV57XP87R7va5rARbKxwrz",
  "key32": "3nkKkGkUEbzSe6yrPoKAZc9RDrdfCEHKLF2X81Tk4sGhmPWPWohLTLJgTqdSXRnxPm8GF529qU7tqKkq8651Rgw2",
  "key33": "5iRxHiKkJQrcvc43mKRE3G7Tj3qtscH8LGaoeQCs3NC6Mwms8XuXyX163CyqERXLeGkVLUXMJcE5o5hW1B94ZLYf",
  "key34": "2EzLsnMrUjjX9DDYKwXaTEagWV9CgbZhdsaorPZFLjGHpgeWRsk5LQ6JPMLqTFxbuYVc9TA8G8JfYbqpzoQTsPpc",
  "key35": "2PVxoURp4SBBH495A8q1ukDqmGvxq9qTJAAREw4d1X4HyupDS5a4WybQPkPcD2ZZrgrhsQQzCnSYtwAuLGNTH9A2",
  "key36": "5yCQW4CnkFD4oSBAN5bkqpmdb8TAuDhuZuQUfX6maG2KcapggptGGRd5E49pYSeY8TfdaENRGiSEbZRLKyrEkaEh",
  "key37": "3F2xFojMYfKCrKNy23Y1KNx3JUTHUMo5euNNWS8SXVmpXP38syposkVYSe8YZDxnCxUx7en5hbw9ok9zK8d6kUU1",
  "key38": "wdQnUbaiDzAbSTe6Qqp9kJkM3frTgi4U4L6exhANnYhsoE2db1KRVAqMuFsHRLDSq3wC7okhJGtfAVVy8is2zDM"
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
