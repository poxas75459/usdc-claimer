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
    "ZQjCwhpB7DTi8QHTEPTYAV6yPRvNEzYbMzacbt2bR3Ap8rL8T6AfJFUywhJEocGvSuY41KohE4yhrzuRYqyfmKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYSUJn2Goq2cEvZYjDJfUm892dnVFU4fHPZLnLJRKQH49gmdjrrfGVtQvf1tevcJogh6L7bHYokgZcPnBEcXCzK",
  "key1": "41eEWPQ1gL18imQBCD1DhQ6HhsjotSj1eaht2wk2YsASqLBqRCeFQ3kju8Xv8dNoR3jsUuL4n3k3ktfj7YR6zd7C",
  "key2": "52MLpvp5Mog4yfvu7zSr2e2Sc6ht6qkz2yhkPGgJ2r5EwYdV3A6L589YacEwSov4gcfkUkF7L8vGbvprdNxbYvVs",
  "key3": "2XPW58AXNkpKdSwnitJT5ktyy33DsgpMBts5yehGEmo36jkEm8nWdb5NKwEsCuz1vU9489c4f4A7yx5HD8HivoB3",
  "key4": "2PujRZRK2rAYGfkc2ZToWho5fwamzHwGnY6BWUTVghpEhk4cCxSinQagxQ5kocL3pakwziuKtZfUexa7yyDFZL3o",
  "key5": "24k39niARfLLptUzLnicRfkp3n6drXFY2ZSysbTnQRH5h1ydz3n7yMjRLpeJ5RYoyAofvfawDskNfmfAK3ydh19r",
  "key6": "3GrkXkkEbcJktb1HrRh1WY3jDmr9HbdJE6sX2yZyDF9QJTL3xJb2F8HPZ7F4Fu7SBR8u92FpDkYeHN6hnudi1mLj",
  "key7": "3gXEtCCBsrYpzNzkRZejQdkumRw762nnJXekxQcYbKTjG3pbfhiQWoN5yNAukzE3712dHDeRCCz1kFSknBcKAmWs",
  "key8": "XX7X4m6HkjH594kocvM6DzYNHsHmcjEC6sqGxKNxKb9K9bcv6fnruj91g5Y4hxGigGED6oiESz2k75UMeogsSRu",
  "key9": "2nBJGySody5mDtAs43ihgv6C5HmgBSjyz7tE5YwFUFJLRkxAX8eCRNrDFYLoJsgMogBaBhFbMfiDcGDQh7TUwWFM",
  "key10": "3CRa5fS2CFCGb8KYP86XU7Xb8emSNYDviUWHwEV5pu3n5gNYaejc3ok1ncvrauoYBcHmetMBPUwS7ebU8v9rABRZ",
  "key11": "4H2xoG7ycQaKQa7dApF83VvgFTrBjCMaruqfVAW5WoUW6QLG6HYc4zvWdsKg5vJUXitvXrsKNhxjmNTYhQ4mj6Q1",
  "key12": "2K3v8xF45QrLdHHJTA2wMGsSTDdH9w2cLiXmtEs4JCMi7EFHPxAhJi9NK1NLa6EQHCWzRnAJXkr7bBs5Hzx5sY5D",
  "key13": "3RqyiFwGWVWtzAxWpa4sjjaJBDcUWF1rtzdd7hE9c9HHDNtRS27ezJZC1XUPod4RQTUtT8K1knQVRiXtq11EqCXx",
  "key14": "2n5oc2QKYz4xrG1NECHEsCYoSdX3DoU7gwzrTbnTWVcHvw6U3Jp4JTbzRFpCH4TzG9Y5BKc1gt1AXXp8KxJkNtxd",
  "key15": "3cmwDFAA8k1rJrLcG9SPZdefQnuarrt4rdC3dmD97rhS9M7myg134W8WHAijVM3hu7Xsd8QXiMfCdbVTXPV7WGmy",
  "key16": "669gagiEMgbspeY2cYGSxZh6Tt8XUjguM2VBcEy5WEeTJN7GHHcBwidCvE84GNNgWP8TtBjzrm9tskrMxJmZ7itC",
  "key17": "yi1LmofWLG1jUmkicYnGzZwZwQrAbBSgJ92nG8874bLvFkeHXc3xd6uTySjPrYvZnbvQ5Mag93Q3AbETz4tGhSc",
  "key18": "4YgSCvw7iEP5YMFnFgvMvAK9yQpKAUAaBeFzNXu5CEwbVPiAaqwZwsbYUdW9e3fuNGQHXieS16QSQ93hwvbxJChi",
  "key19": "eqNbXZcZAzx6M5TjMZLCsC4QmTqubW5ZdXsbMaQc8MxzisfWtYsKnfxP6LWt2LcbGzEMsGy9TSjpWdZby8eDC21",
  "key20": "3xq7SXWNh6H32SijKWEcVA3PndRJARfet9Ecg5dyjdTbgCfVkExuByfn9MNJnJZa5XcA3ddceCzBZiZXbBfeXt1K",
  "key21": "51VxGbmK1bzyevRLjbAMCKCwUj1MPEWhiuXUubwrusRd712XGfaR4BVgdPaBGM82HGhdheDLhW8uiKFGW1ybAquY",
  "key22": "wFW9s5osNhB5aGtDvPP32r5pd9X8QTavJatt2p7ZDkjoS2UcRtFh5JmRqY751d1boPXcyXjX7PebMzcK8bjMpHL",
  "key23": "235KHPqWWUndWbAXBf3mPMcZUD3w7dLGzs6YEfYioJ7fcoj1Z36GAEimwZydqN4VTMDtVgZyGSYPKFGDTBYzXZqP",
  "key24": "25k2PkPdiwE6j7agJKDuZmnyQg5dgwqEvRKZNewT9ScuN7pfJ5TjB8v5rCBSSpPqZkXF6nREzwN1R9RSUfUri3cZ",
  "key25": "48wKNXYVGAhEDUKsNp8vNjFytNT1WJZQokkwQkKXHR1myCKp9EVVEa8m8g9m7Z3AnXU4h4KbxF1SsSKdpE2BMPHo",
  "key26": "iNf8kT1eii37jqne7F1VhttoH9a488W8ivwzjE8ef5AcnpfvDhARTrzhoXbqmxaRqomyDmgTFNkMGDZfunZhY8z",
  "key27": "2MQqQdcthSCipVMCLqe7FXcjXGYZB9KoY9gFMbC3ULB3B5kZCRPQsc342bY7n5RoLVM526aUN2mzj2axj9FWvNTr",
  "key28": "ene7SHmpUEjzgzUQbVXuiwuxMusWRWUGsWHKgAZfHd9MckgtjQzZ8B9dnsQwq2MD1KBtjU2JDH5vfQ7BmkZoqLJ",
  "key29": "3D2kQLxTxKvNE1HiQtGxG9YfhSvWDBE9bg9U7y6idbetUo7QGdB7kStsGCdQuXCRJRgNwYfrD4DjE16nW838vFmd",
  "key30": "3GqL9jkc2A6CY6ePnvwm4TuPkh8Gvch4P4KGVk9uKLPYvmopBdQhze3QLqVutpC9QyMeaFUwP4t6tzDYJtXnEopc",
  "key31": "3FhHMHhD59RWSTxSjUa22WVe5ZPwXiEjQvKXXLtKnGmYpCDVBGxVPHUEvv938VRBaF2MmEeaeMFirtACFwxGs25C",
  "key32": "5GtSbv7bwBAaefC3x3PcyryHrg1Ry4fiT47WvWnFHTXRurrcXv7PdRGxTJdAA7q3n3QWED8DQ37zWKhkx2RNbn7m",
  "key33": "4q57UXVdt4efghWAmpUu4Xemfd3xLXdHbJFM1XYCZTENUy8enTyXWzc4DCmxTi7qMBbyrdYXDmgkhnSEFLCPhXXS",
  "key34": "5sq8X1LFQbtmb7x8xbbPkXNZzYFzYDqZzsDWT4GRYumGqu1ZEap5dYWBnSZEPv9Z94WTY9QpKSstRDGKTmaU7XTV",
  "key35": "4ro6kAm45dTbnqNRxDfJ3YQLdCHuvmeue1Gmpw2TKPaz3TbfPKtM1brkdjqw4E13nJFdwvYLFtREGT2L1PVKfw1y",
  "key36": "52qADd4aq8UrgQHfgbHxgU75Ne9x5Jt8664nZfpHUBr2Tcc9WaYVUDs6jTRtS5RrbLkLs2pNYFiquqHGxKPpCWra"
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
