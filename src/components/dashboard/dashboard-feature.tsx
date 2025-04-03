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
    "2D4hbujTZJWTrKLNpFKvuPnr6AnDW9KtRpoqd14UVin8Vgb61zrrwAxv1BsSRFJfuWSrp3GpUKDRJnzxdwdY5McK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFZQfFZTKWj8uDssVUYti4uJ4Kfkm9VJAj2NArm1f1DBC5Qj9FnwmB1Xs4hHJqtBzga2weJHiY6m9i2vA7dk88D",
  "key1": "4R9jGPnj1BVvidby4i91BS2e6cvJADU6mg5rFBw7bTzB5F1r2TUCN8sksfCHCH4gbj9rP2NxvfoMYmFGDQzLuUsk",
  "key2": "5aMhztskCz5QqraHiW8nauyrGEJVuZjnfL2f6MfBQZZrvmp5MoJcuTLdKH6JgkawfAmmdnUTuMrz1MmRS9HJ7CcG",
  "key3": "2DJ2U5mPEfwdD6WNk23Vc5hZ9CZReBTnXh92YNve7eAC6ZHKKVEd2YW9meBvhmZaAsYenYAKSUccE36LFV6bTHPy",
  "key4": "2LjABTqHCTFA6YSGiKe8hLBKEYDN5AxbHaL7Jwin8qp8KeUAwbcWtD2L76vuhW2qK6i7pQvqiYxvsVvirKG4nebp",
  "key5": "5K2nYTYojN2vFdSn18YJQJ3UWCuwWfwQovEDuoVvsgi3xUpiDEc6y2Cv6K7JNGB9U7vhkxWrDHiAbSiJmiFEU82g",
  "key6": "2bkTYZjSXKWNzQnGcD1yxfwqbbragTgjz1s1D4y42FvkyfxbSmxcijD51HC86Z6dZ6hkHLr6D3pXBCzaZzkwNRwd",
  "key7": "rp8dJYm6mPPmNe3M4HxksJxn3MGv2B6QZUZtsUXkp6J7ojXQHprhWFtfzGuAs1tMmfGeMQL9UzDw2JFfjqb61Rj",
  "key8": "CvvUsD8SQeHGn9raGnqJUSbeoVK6CF3jTuTNfpzgrNJMqskZCTZUQE8FpCcy9kfCtHa2Nv3ix45WzQj5SbHfiTn",
  "key9": "2RRbPHyBm8vgHwKJFwfuJoPHPZMWznBW1mCJRrvoHikES9XB7aXk5C1WGg2WGk2XJDuXh4z4YHZvaPqGmZRijBRT",
  "key10": "2KrQ21pbh2EkB7h3PPUpf7EFWbgMdMHGHiGUXytHQS6noNU74hNyyRsJ4TxJPfLEdeGmxPj4JQdeBwQDe4ZRr21Q",
  "key11": "3AVvTzE6PxVRj9PQBL6KgM6f3JU6YVNHDyqtDXE9wXJXHocpsNjccNwEMmjApz8FXs8SmE7f8nkhgXYojJg5YdoJ",
  "key12": "KgdzqfLdy4DL29kUwCGjXSfJeUS4nPUTzZzmSDpbe92jiAgmEaeLF5h5oLdmM2QKzgq4LoTD4K45PW1E5P8CJtY",
  "key13": "4SYDJtMzhmCsCb7uxcydmdCPBvMAFKrmY3EfcksbLyJDX3ePBdWrnLVCNf4TYE78CtiKBxXwAkpTsxJ1U7AgkNbt",
  "key14": "5DKcLKwt1DFXyf3XM8FT7aQHyseQRiNozMhKtdXsaBVHScTR78ME6k7gvfoQ9qARDX7gXQG2fTE5eZBhij8ss5xX",
  "key15": "3wwjiQiueyKVExtxwiDopCF1Nz3bB9iUuU7dtdQgUqZM7gCNAMHSFNUGA7aRr8ZAFdvjE1viWXTokodAsBsQi2Ta",
  "key16": "5yviQeaaMP4zdqV5TsG7TkfdFGteKAuicar2v3kZ8JBeGMqVfc4NojVLSBzCi1S23XQjfeqKN6v945JLDZym8RyC",
  "key17": "2UyeVToF46QYEV8HEGGtJHtk9qzW2bcQqLucyMiYuADPVuXpQMXiEyj62H5SNpuM2TcpakWDxpPHqkjPiVD3MfzF",
  "key18": "2MjiC56W5GhG6qBZ6NV8cDjBrXKBfMZe2bNbqkXcurNkYfQPMrG2imuJ4kFLQURPYcR9hcbCa7uLTZXVPEmUwvjQ",
  "key19": "3FrJXLsXw4bRfuyBPntvCiFwFYphnM6njtHCNd8E3H45juvurRtVVnqfxVmYp26UHGq7PwrVs1pj9zQAWksYTMuM",
  "key20": "3RFKv7bfWKs4kCNBFBNHku1odNaRz1dGdJjocXiBdjLZZCKktb8LD5kdyC6M28NVpNvPgmLYxrUBtei3kcAzZ6mo",
  "key21": "nAofFHnyXXKVo6PhpCDuE6iHYoqrGUmvmHuVWyJu8fW5pjcLRU4yqki473tdiZ8oDjHM21rJyfHrtztkkEeiVod",
  "key22": "54SndPS8ZZgQA9aQvRPeGo3ez6fuj92RYES8wnxzaDJMUoF3hYZg9QL8UTk9fyGm24y5xW594gn44KC4XNZ1onNt",
  "key23": "wetn1F7Ch98YBrZucdvdcxxf4ZBT33xK6o4VECVctg1mxRnRVp5DHXMiRTBEJo37M2KrPzSokPapLnkzsoJoM9x",
  "key24": "33qYZqfpNRjF4qs28t8ebFVKrRsGorjFKGH2YHjsh1m6xtpBSvu1KuuBuWdc7iBBVEsn1VDENSALDrxxQLRLZ9S5"
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
