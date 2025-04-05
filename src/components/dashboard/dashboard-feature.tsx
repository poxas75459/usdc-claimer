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
    "3WUR5dmNsehpAgqGdch6XtwxAtsDboe5D8Z1JjmAC3fdSgA4NUmLRh1BC7sr1NfrAqPkLRau199w37vvz943JicK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNZsoD7v4SBYcK9FcL8Asw8FtLj2nqLeTA3wWzWzpb5m3jLoRaagj4vBTpdrcQN3daABeFQnuyBRka5NBkR7giv",
  "key1": "2e19ptP6urKELgXfkddHNSJvmBNK6pe78mComnDMDJp1XbmHcSQARxfFc3cvSqVHR7GmVnWXXFiUiaF8wDZtpVms",
  "key2": "2J3i5wBRZmDGC8dKHRfpYtK4wUudJbCGnFF3AH8ewjPN6wwnsSetNsfdmwtSLtHYBRNp32iorw52UMcmrsxCC1qR",
  "key3": "3cbPFJAbgzEtumuNRGfKsbMg1se4Q4n1dFdRQjKh5PkPWkZD2VxqV66ELNa1VdD5ZqsYxsaVHBSgbYDgTHQmDsTN",
  "key4": "65442VNZbADNfxCe4bhPy2VHkm1azz8XvSFQsBFAwfpzFcKxHAtYJBWtTjvCgTu8PRdSCtTrYrUUhZBc1pefxw9a",
  "key5": "tumhssVXSNtYYRtNmGcBL8BJHorPdkeiVr8xBk1KbFbUjcQvzAUngHFF6pwio22oe9fYvD5ohzXmyYCSm9rWuW1",
  "key6": "3nQCUz9C6DbCbB1NHpbC2mDSrUBy7Gz9wgwvSKoP8mfALXtxDZbkPrxKCdbL8JZbx7Ja5QXMqPnvwJPXvNyKNbGh",
  "key7": "3bN5cYbQ61JWYb5Ab6gGp5eajfr6ZhE61Nu8XArDSqzzJhUcUDtXhDfKDnuJ1PShRPtcEk6QAJNUczYsfSVtMyzV",
  "key8": "2uKXyMrgKc3er8VNb2kuN9FL1L7T3aMDDequW1VmjqEASqU53Nr9QpFkywwRAuyYDRiJejTD64MjXfG6uCLgZRLo",
  "key9": "dAwN2gQM3sQvrbU1gUc87Y31JqCMJgpPF6NnTRqVLJjPNNfSKCBkNRBDK4KGSoSCpHQeJxqUF8WTjhgL9ebe7y5",
  "key10": "4Ah4QqbiQ3c1EEKxCxC1XYWBpQmHtL74SY8RjkxEaAKiJetMD63ZxhjZxq5BkKs1C1mJqSpmVmeTViQE2T6qS13a",
  "key11": "27fsHHa2TLCAFU91mkiRKxSMyYqv243SNFeyaPFZ563n4mesA1mJAThndbFQpqon6V29SA5a6inYCRDoHdagZyNA",
  "key12": "PhAJ7K6jaGquzGxWHwYKUxzNm7QKMtJJPCK4DeiZC9qWqWrQjqbrJjfCtz2crC9ghn6kaawZ8PXCGUSKAmTfsww",
  "key13": "24UgrKhuFaWLp3VYUg9VeNvNwZ4GFKjxqsQvV7jZbcTaEN6cbpThBGCj68MejLg5xXqcJ4WX1hHNL5ccehxQUTiH",
  "key14": "4WPwysNsvChz9KxWxgKntuzQBN326fi89ZkKtLNjTZeuhnfKJtTfYGKQGVKDiK67vXyJdLz3fY7Xvkf7N5jNkziP",
  "key15": "5fHcDy37W1JQkMEhZV4bGDdC83b5eCi1Dr4eDrMYdGZ6Be38NstbQxGiuMAgmchJoy3okMXy3T5BxAaa8DN9xrhe",
  "key16": "2D5Hf63mZn2VfTF2LTdnFmhnNFPDqtcpL6Td5AQQbmobpa3cywz7Y7Kzxsyh8zv4C92BDj6PMst912A1z5NZeW6t",
  "key17": "2JndoCNfsxnsqnJUBFsYNkuBWMpE3FiUaXX5Kf9DaDRY6M2KyNKs4Fb7R46MoT8LbPzEmhcrmy91oVZhHr7jAiFm",
  "key18": "3PcTwABKSMvUBzNhVBvs64T8TVFiJY3qEhJFQjoVCekEzmWSiiQRQj3keXHg6XPuQzZNCT8dttyg3GzFnP1KB1bY",
  "key19": "5ipwBCpycbLYnhJWspN4LqP5HajaQcGYj6bzowgQrZkR671HCyp2ffkHMDJKBuv4EtkjCog4Kjd4oyCyM7d5SWJ8",
  "key20": "ceNPtSzwrPNisHY6QNT9D3N8FY7r2fqQzFvQXysi3ejHAMsscT9odAyc3w3vbNDmh5vHTvdHVBtfdFa37Ej9z41",
  "key21": "CdrpGMZYkp3o7WbdGM8wstMDur484T5SPAecFKnCWEng7ModJGQtCUWRLvBARGKWA5P9ErA9fmcvE7w7NvA4ABM",
  "key22": "4YcFz1HbKzRHVZhCGgW5EZsKirpnSXiCsfzLZexYfi2K6j4AieocFRWpmJrSMXQFnKW2KiecVTXR4ihQX4fPafv3",
  "key23": "MkDhRXx63fE9xhmQ8n5u3BSSrktF7bSpghbjZ1XpJEKBtDCcTWMX6bY7TQNa9GjkjFX7jD45dWGqUfXxkp6hCvu",
  "key24": "2vavyRsniMdtFMrfz5S94DjH9oHDDYhqm64pwrJcoyGh5mrbqecmUv4ddBmfxmbZyzRPtkEBHxaPfydMU4f4zpQQ"
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
