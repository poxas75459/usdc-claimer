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
    "67fNBPZxErdh8BVQkgAvRfZDEt2MpApbMdxnA5ZF6KBn7wpn5AwhmRtBHgjLM3ATGycUUZ6z1by9vAQ18bCvT9oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJhwwD9t87GMvSDTRq7Q96AYMBkrGjtL5rWWZLE8wuT6kPZMeuP2DpzvwtVXaAEvtCPPQnrn88EdXrPYQoJiBWE",
  "key1": "LzQDrhWT3vMhAGdy6XvGmRGXN79kuLhQZEpcQ3h4aoFvz2vZPw2MGzZGxLCdAtPci8vQj2zBUm7MW7b6g1fZCUU",
  "key2": "674CqWaPTfBro3ULx9GJ7s36Yru3UHw9mBehVMf7eaHSSewQXWWWarD8btSBxWfugrVDzXVVg7Jj3jSaQdzeR2gJ",
  "key3": "34hvkYfUW4kh718hFmf6wwnV7pwo161wvMPCeZmwdrrvqemvY8rd3rjcVekPUBT9fKC9eiG1pWv8WUqnRAo7QhuD",
  "key4": "29BQL8R9iEBjQvSDM8wDmJwACU5yYwViQx5kVM6JN2ZzFQyeux4yniwtqhwYtzLqsYUs3WeTWBWYyZb26sJ4G5ZF",
  "key5": "5Jx6XqHNXMZAhPofMSfFE7jFsTaH9E1ydGUYEzEc13vuB5eXataZsXZSaVatPDnutCRvqba98L864tk5fr76m9fc",
  "key6": "4i7Au8pZpo6Hu1gQHVVUocdxdp3c5kjrN6WeGumVwueQYA9DmgjYDATF3FtGx6xPvW3F5rwKLJyC2fXi4QStAZjY",
  "key7": "4w7iH8uv3wUJpPjjsPXanAVTfvAHPfnv4uCjcSnui48Fj5cFKwjVqYwHgJC7xeDqwjT7AWyzBsA3Nxeprag754Me",
  "key8": "jc2t4nwfu9VkpgWk1XXyenYDzv3WtPk8KgsgmM8SG5fXgi6auNQ942AxVSfC52iqs4oPQqv8zFsUxwRrGcHoBaV",
  "key9": "4vD6rGJhrrvAto8gBDk5fSAy3XXKVtgzobZFFmqgh7r2ntSd4LyNRNgxKRSp93Fvqmiw8R7SrXva3XPvYTpyoTar",
  "key10": "2ExDxFSXyzd2JQP7KhzaPKJG6eVmpBx6k68mvgeDYhx74jYpUbSyNkannrtKdi1aGWwEpvtuyZ9m5vGUYVkRXioL",
  "key11": "mNrbdJnuS7M7yinnk3BMtvhKBFEhBMxz8WFiiTxyU3WGZHX3VJ9DJGAvBxeqE8pLMs4C8DrTmnCWA8y5qg6N39x",
  "key12": "2iyf4XQ4SuAfPvSam66rZYnaaza35QCTpAewchLox5gyC9YQVew979KQDVPGrLdSpNKjEMupyiSAfFVp8UspuWik",
  "key13": "5b9EVp3s1h4QuFwV8KQtJfmwazLN9ZsPrtjUd6sHxVuodSKtDp9n3vEYxZVdHrQrZ5bsfiSmCcQnABQZ7rZ7C2bp",
  "key14": "5SDc93M649iLCcK89JkMQDx647TdpSDBxPPbZzWPRCzVHtmPJhfxaGeG6Fu3ypvi6PbT3a7VWET7vp2FgzuKio9p",
  "key15": "5NR2MUjVuRFVcW3wWA2nrkf234eUooFZKfxWZNzd6ysJqzgrwajioQy4sjd4URgRGLEmN1M7uchuNAQrXPHh5nkQ",
  "key16": "4stqsS5fVnZZQALUyfMYdukJWK2N4b6xhySsA7v6izxKAkRtQ7buAW1FNBw62EonakpcmfubYzxMMKk6JmA8wV6m",
  "key17": "Mm9hg5r2T1DjyiWbkXeQYSiL9RsbnjR3wjVeAz1o6ozWv59Heui67zV5waujSAxA5kDpEvL78QYQrddfXVhTjwu",
  "key18": "4aLVE7EdSJ93n3CgU623VX2tw92sHrQJ3Vr1G1cHnWtPUSpUhYDFoAtEnn9PQEkyAVCB3JUtNQef5eVDX1CSQnG4",
  "key19": "2sMZUgiiQzP5oscaCMBwJMqnker2mb8pXnTgEdfhBVabPw41DiQeGEYwtGLLQdcNUf4fBaK3mn1vvJ1s2188ETbK",
  "key20": "2VRSNtiy8W9nCqwHyp3pYFxmgFNu6TG2XVYp7482spjBxY6Y5819Ar96DW27XdBtvq3Z3srBMqLG6V2pUCKnC87a",
  "key21": "4CNLuSQT4bUeBMpwRhWk4YXzv2vnMGLnBQpMVUcV5hWKjzMMmW43RFjk8ax1rk7sqfGCzg1fi3K2ca7snz1WahnV",
  "key22": "5Mk6BFMJHWuvtwAdxFUjFyp3wgnusvGLGVmrVR2ys1q1Bu1RdkRbgkqsoKAZCL6w35oTTiC4Qs5TDQ4YECbswocc",
  "key23": "3GdYH1d4Xnta1XvLieMrC4bfS7aA1nrZd2DduSQkqomqDEr3nApF1QCw4ERk2BrZdaSpbff1V4NAAHh11TYSsg6u",
  "key24": "59Pn3PnJ2H2ZYKdiWeMUEDwuE2AtwWe4VRU2SmaKk54UKr4VY7E1Sxtt6oF8mqihvrTi6Ru3QoZexU9Y3DhvJPAF",
  "key25": "4e1rist6kcWLGsYMzvA9toBYvkDifC1XS4xR3taEEsbqiW27VKgtpgsseVzWp1sLGEUaPEe4rpSHEWesXSGKPrUX",
  "key26": "3ffKLf81hCXhU1fqGxNuL5V7MXnzXGMm7MotQTDump2BtQH7SPiu33hrzNucduyC2MPtgPBP4BVSMdeZM4uDSVWP",
  "key27": "3AVQnzsgi3ehc4VbEB6biJQkhpq6W91AkXzbm1M9PanhQauoj1xDg7UM6w5DFZTJMbYdc2KJAQ2ukeyQyU7EYJWs",
  "key28": "46ptWXKE6Q9h4nUhM1DPZLYtuE2AMDKvyAgmxTpMFTkJzEatcZHmG6QVuVhc1p3VMFq6nsaneMWuiT8UiaHK4Nas",
  "key29": "5VdKJACKd88yj6kuZPCtt9vsNUHF9E6R2Ga12cmVBUWER2JJGxGHxdpUZHJC2iqabuqKMvGDqTjidFpaKyTNmAvo",
  "key30": "382WGkX1r2TqFyw6nm6HB1bDdcPF4WDhKj8RZezTNt4akNnaBaejrNmCR5QXEvY6tEfwBPca8nbV9unR2ENc7pSA",
  "key31": "WtzfPa5rCEwpBu39NRb3erjs1m7xUp8ZuviVxKx29nYrGaUv3fYgnXWCTThpFyd7sth9NW2c5HReeb655XkniRL"
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
