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
    "4DFV6TGYpuvJz2E8FafCduZhnhqCr3d3dQunH77tB96SZP2QJF6ZrHcpPahokTsQwi43riMd1NqhPrYBGR384Usk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLXefjrVNNcAZJa8QoXk9W9om17AKGx2DL5ZK9qKaXxCt2TEbNQG3k7pDJyE6ztfmuRDD6U7t6zW1wZukKjQG7x",
  "key1": "zdLGQ6u4wus1NY5ZAcqB6nbC7AgCTxYysaCRdwwWXLnQMjX5h5S8PoRSR7Ezwh48x5bnde3FnVjcRWpWkoYtEnu",
  "key2": "36xrow1TDnC8KtoBsLEhoWb4DPxkAKQbanxgB5k9cD8T4ao1cw1cvccif2HuU69nq7jaPHAA1uH6y9cdZ7dH8p5d",
  "key3": "2QgZdAQmkCjHUeSfuSsfwjgL2LjiRr4ktBwC1UBbiwtng3YMkiy77XkteXA9NcmySGghGhCUWXXvZfzd49WiyknC",
  "key4": "3peUKA6sUmRoc2wUdq9VS1kyzZRpjPrPPBghDJ5bZsvaLT9PJ4eQX39swdFkJKyHx8YKi8hgBiWZ4Tk7AJVu3G5B",
  "key5": "2CHZtnfXT7GhxDEEfTuMAs63iCEqwbLTsp53SMXjhzR1GsT7buYeubVzA8k6fdcbRgtWDCyeFghhvTzFz4CTcdVH",
  "key6": "4vdUP1uieiCaYEBZLnCr4486yvMDmtjYV6rdnEXXSMaGmjBCCX3z79U3XDUYfDsqqMAw2jb5c7ANSNGKWjo2S7Hu",
  "key7": "2tpQSy7NstWMBQvzGWZ34PJwXphaaFFP8dwkSZjUKNVM5fqnUnbd3JxorRcyDc3eonwScumwCPd3PfD1ZPKg9n5k",
  "key8": "2zBPWei7osyLHvKt2g3cXXukQP5FsdtcEJb4fNQxkBgp3Mqxp1yNRKFdjD3c6ZtQN28wLPPCT66siH1ZhGHhPrUt",
  "key9": "4DzavUcSJw4Ef5NV1qTXabTPzX4Xwkr6SXCbfJ6PiNRa5FqTR8G1nS6Wqdqp4yjChkLm9n5zYLviZ1A8ZmQMMeX2",
  "key10": "2xvEibF66kq9YKg7vDrUq75j6UJFtesurLufrenKbabFjqAT8YNeB7aWbUYw52XBNUuqAiCL4n5DVGbNBskAgu47",
  "key11": "3St1ZM653njx3WJh6C1iC7zsF9aS7aQDCY9rC5zxbZufJW89cSjVfvVpvacBbQ1o4UtGSqe1h5ZZu5ZbX1JMuuui",
  "key12": "5QeAKAFA149MhNAzH7WukKMGAGvWCAWe9GCPaDEay9qZcS76JTYLh3HQS6w4yWML4QGm66hu8qz977cE8cLdD1s1",
  "key13": "224ceveE7LZG3yvhCCRdb5x7pJpQENBAiEPnRfXPQzDCkY4aaU4Tkn3CmztRhJNrgvmS96SAjEXGn5KcTRfanJGP",
  "key14": "2afdAmgCWrfgdfDomFSAnH5umQddq23wxKjBAkFvRvgCQWpupqb9PCrS4gJZXHJ8JgBRYt3KNj4rzMrXrKboGPSR",
  "key15": "26gJnSWSMpp9PbeMgy72CMmJGviCLGENukkf76HCZnpC2ptYQb3gJ17DLsUdcDd59RU2qAvRLrDsFNHSBRbswr3v",
  "key16": "5Tn1UR15q5EMY684CrzKtjd9LcQF6HftgZSm2Cp4jE9V1H8MdftqnBuwGRFzRWa6oU8pK9EVf6z5z37WjgGgApp8",
  "key17": "4711tXcsMUjmtRHNjUyK84SVAmot1mPmnwJjfNBKjZeXnsfddConmVegWchePLd4FT22krsmFJp2Pp8xZCRB2hRz",
  "key18": "5yttJ9DfhgBx1daBjGNbcRrvZ6qv2sx4GXWTyivh3AMpkavGd7CirbXRi1jVrMDrU2eNcBwUw8b3eZFByFM9ciGR",
  "key19": "2cRTdKxN7yT12DKY5A9LCdXcahN4v6B6JDrBSb38zVEFFX75FbDmRh3rLfFf6xSVkKVsjTngqgEmGqDLyKYagQ9Y",
  "key20": "rHREmf6nZFQ9vfSYk2CRMaAanizH7FtYub4NXLPcR97TCNqqXrsHyMPYm8agfaVdT2yrphmVBd31H5TzGbpdSki",
  "key21": "49aoQnXtvMXSXvSXB9c3pso2DRHyyAVfvdcQtsbXqkFBeBrYDnwhSXES6ZsNohB5gzrxzsikSz9q7dXuLHKALSme",
  "key22": "582xs6dxyoymSczjjd8GLcQipfDi7ygCLD1Rm12F1CF8gjHXbW9v93FwZUbwPsv5juRt6eWtu5NYewBPLdQUp4YF",
  "key23": "5Z3uaKhY6NEkTmJDF5YwjGmyAvhpJTZ1qWubswuXy9pPULJiSnHngEP9mvuqVKR2vVrTywMBjib2ipzw9ffFzbVp",
  "key24": "3if6xxvgEyRaxTHWYvH9Z8vfAihDWTRaNPEgsf35GfAyUrX8TSYXuSf3MF9ZuViYAdU9qheruEpXo3RCKk1JP7rF"
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
