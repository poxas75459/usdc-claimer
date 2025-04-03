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
    "2ZAsvpCToNEmjApDAHHYybAmB7oBUQ4PeYqDSUcheRJ9ZfhqTnZAbUEkHpTEkjkM8tpSd31PEWkV5AGmZ2FRBo6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmGo8haZMBAUjDcW81Dq2Vj3Do2nfv9t1AnoL4XQ5KjTf16tCtjbdJ1Euc2tx4UopgvrzQFDdRMEpwZj2vcx1TA",
  "key1": "hocwfBntxxshQZuu6ZHUSVMPkpEjxeQuNEHXaXdBeuoUswTKUCrXGbdQDTUgXYkdtBdYa4tuMofFcAuAE92jnT1",
  "key2": "wgjBJRM4k2zaj7vEr384tDahJhfkokR8Yib9viw2HBFzkzicZRJFwm8BrWveJcSmfx5RmPp6qxSL6VP5uLbHFdo",
  "key3": "tDNosPw6C2PNTLwnsXX2HXEA5Z2ZMW2JYaoaYertncwYpbgLcmQ1ARorFMs4oAbn5HRxgCYmgPE728S3toQp4Li",
  "key4": "5s1quhKnGsgw1pJHQs3GqCcky1x9akdXEHCJHdjtTn4MV3JADjzEgLuyiKzG7oT9Py4awNuo2QJ3Z5cULkUaRgP1",
  "key5": "3VPjV3YdM3cqcC3ayreJFNvH3q27auYbg8oJjyXF8Ygas2vEuqhDjiP4eyubQSx95eSuwYvwhZ5kRfYzQZYSbNAQ",
  "key6": "25dbTjf5iJMzqLhhXUF5N2uosucKey2fZQZ1AZZxreiV3Dv3DFFzqC2vCPUci4NmTM7GT5dzSWU6j34Lx7bXJLiq",
  "key7": "4seduxCiNU8t3M7ZrJDc5noynyUfhCTHaUxh1kwqJmXG7hRKBWaBGXpKYxUfU8yKnsBkHTZbx58innjKpZiDxsT2",
  "key8": "5bPAiyyGHsF4kmbQexMbqcr6yBCvKz8CTrmdQNmeSmXR6Qhu53KnqUPbYRn45Ns8rkgmCVZivoYJ5Mn4DaX8VYUH",
  "key9": "5mogpxaVCFKWFvoLMBVuGYPVMsevSZQySXoixVnRWC3Vec9KJqxnpRx7LNiHiZwWVzCHKXTNvyXfoUuAP7bHtSnF",
  "key10": "QjV21JXrSAwiQGtB2zKk9pUZnpFhaoe5adNCevkZwBrxT8K43yF2GgGRRoxN7XBkxtFc28UMLJhRV2f5Ghgrh5q",
  "key11": "2h9QL2ECkv2249hPGfUxwWnSpBe7uoPGoSwLLeyetJx2ZvTVbbyRTt1MnMCosSc7sYy2rwRiUWPFeh2MFXQRSUVC",
  "key12": "3dWPmPpnKkeefxjVjrMgj2NRdpdyDpFNmcHyJA1F5tjRyFAmpWTcHYcd1NR1pFGNpKksLYHLLTX2zHK5ZqmFsqa8",
  "key13": "38W3EgHQZJQoMuQrhC9T8GH5zzVPV6jVGWn3VYVpDMquWG9ktQS2FUe2Cs66X5Qg4MrssiHRAHWxCnHDFcZrELMq",
  "key14": "27PPEPxzPs9LaRWKwmCiSAybELZp4jH5X7v8ZEa5cWJv5kj5WcVmVm9LxYFghX76WcPvbcNLCehUqkqJz7t6cE2f",
  "key15": "22WFZG7hwcbkxkg2rCjyNvMeDCRe1GboSqQGvomjK74Zwuur4zmR4jMxFQ4u4LfXN85ShXqHtG9DuqGRVnizFb1C",
  "key16": "4xnaWjhQVw5bKiKSTzt8AbUyzNvg9J5JfmjTc1tyXHwmkEsfBCyjx5Te8PSz9oKdEamSB6WZTB4e8aFhrPGxAJaM",
  "key17": "AvcGPXNB8iBTAYv86JcAXbJZzNB5Pnf7o5v8HtbVx5MrKLFwBHLmpaSsdHReZ993eAfpV4rXmcJ442SzmgXGmBS",
  "key18": "38JJQ5nqaxCt1dhrrXZ5abZ8psDKK5kLWU7hBiAPbDTnnyzAZDfxxs5vuZY6AkqDogEeoCBqmYxbc77H7jKC2NbW",
  "key19": "3Bm4qtp6qJgLn9XowM96PrZH9Sj2kvD3wRGp1He64KE59XX9YLDnNVCdcHaQLXZq2YsMVLGMT4K6Q3b9q1wxbo5g",
  "key20": "pDctQ6qvebQxgdr2N1iFzWcyusAg1YbD6ideUk6wDM4ftYvHPNvWgNFiwLPrT9zDZTzwBSoQVeBFvYrkuo3nprt",
  "key21": "5mCDTC7s2qmvMyiNVjzavKzZeUsCU5mXY88tmyMr8uZ1K8tHBriYG4Wd1zeZQsEG1MwomwfGuhfH4ZTFeL3MTLfM",
  "key22": "4B17w3JYEV7KDzLhwvCPdsmZ6d38Y7fFfK79Mstd9bw1swxwHNFoZ2jucu8vwbVmRv94smafKJNSqYVJrkSoZnuk",
  "key23": "3SHePF61h2NokAS3gF6CV6ACx4Rzmfx1t7qAjEXN6mADWZLD4PqspmzwHjKesdnMHpB73giVGmWtiEeEP6FAdbPw",
  "key24": "3bzAzAi1Z4sxxg5FpXvkDQtUXM4uKDoXGLszu8P1PXXKd8bavYbPDhVwoQPMj5vkPhZJqX7aWjQQseK5bhsWwUQv",
  "key25": "5u4YLCDzGNr6DQjPrZhng5CNrTyngGnJ2PZy6UHHRHLmVKwi8PhZAB6cykLZgcZEZ8KjgHAweh6G2xbWGxQSqbYw",
  "key26": "2Y1n5padV2X6hfPQdNEDoYHyBj8zk7NTiNX4adgDkuPJ1etknYQN61xCHCH5aniUomFiG4SYEHaqAkqya3RpAr2o"
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
