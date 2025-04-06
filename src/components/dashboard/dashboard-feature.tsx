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
    "4dgcqSx4UDtDRW3FWe28REABVKYkpZ8EqC9buieaH2X51V4tsch9DZmzLEWHfB358HPD242w9W33b6JzzLb2kZvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3KbNdZba1RF12XveCtRQpQMQnoXyjrWmQyBhp4AcbTptr827vGheAijSK8hyz2inFSsiKiXMyMJGSUWHCfu6P4",
  "key1": "468P88t59W2KYsjQ36epzjEq6mdhUpZnBQLEQubE6xUi63spLQ9yWwDvCyfHxBac9a816v6W2AMREfjYGg4GRxiS",
  "key2": "Fw36Yqk8a7nnR7uacTxShkPEW6hcn5kDiq5hM8Wvrwj1j87167j6u65vRmvpuCGnpW4xoXtYDqnFZtsHpVrt9co",
  "key3": "5RPbAD8tkshtACE6bcN9d8AuRdcyzeY3AGmmPkkf4C3NVfUxnU3UY3mN6yK1aM6Tb1oNbBrHr9Gj1m4xtSvJwiTK",
  "key4": "4L7kxhwonYG5gK4TjUcMiHbuKgA4zsgU71ArRqEYw6G3qWdSEjTWm5qp8a2N97fFip7SBNG8jLJTbobduG4uoBsh",
  "key5": "2SnLeLhZFWuQ7h9un9CK3vjbAgat8W93zrs2uDkPdKW5WT8xvVCP4sf8s5tMz24DvKriYwd42EhwmWwRQzHDiskD",
  "key6": "5HWgA2V7KAxtCdU4hbHGPrFjtdV9FKwDXLP66BaDYTShookRrWZWamj2awnjQhCvSozqJeXfV9jLDpzMNPeoQnqb",
  "key7": "Fqn7bDqNj9PBbafmMHk6TSwqt4anKtoW6db2aVhjw8KBqZP5JzVCu9h53xqxcUtyiLbEDXznCM9uvAHG4tEuHJo",
  "key8": "syLLb15JcmR7juzPMS6x674GBFLJoZ3uoeW9mo4CUu7w9dQs6nrYHGDWaXpeLsURaFZKvozdWTCjWsTVu2ieyVH",
  "key9": "65zast9h8bwmLPmGYSMbadJyJUVZbGmFYnWZ1tazC1vY9rg6MKQhniqRj5nu236cg6B16yy4gwYaMDX4EApBhDfM",
  "key10": "37773oYxStSDMge7F5DzjGf2Hf5eqjhrzU5DauY9mqd1a2mYDQmknT64xhAnzRVH9pY9MkiprcLUfGoTmRgHEDLf",
  "key11": "4HJJPZq5jyrAWMY6DHZftczHuZ5L7AzF6jruBtGnnP7StPHV8Nr6ruDDFva6nQUvex1Kyn7vJ7v2Bh1PbLoq8KHe",
  "key12": "2zvY2opJUxUA4bQEzonJeZ3KHkvFgGVxCwa1cJcKWq1j9MKEcZTgLb1X7jT6y6mfGt3oHtYCQNCryoYYiXLUS5NN",
  "key13": "2ps4ZazfMJsiwvvPiHZh1V2GavbTsMpvQXPbPxo3KkaApnV6v5uR8jXokHizvPAfW1eihqJiVa48t1QkL6FEhdnF",
  "key14": "4sgbReLSbBdKLnn6mAMb3nRGRm1Sc4439Hcwzx7hZrMNxHw1fzHHmF6bJfFJ3JoiNkT9BqQ9M32f5G6MMLro8cms",
  "key15": "JPjX1AwALRiiBuDGNpQyNkiw7PvvwStXGwSvMdhNFtgvUsbA4dwBeqf9SoeQsCk94Z7QQmtuhxDX1LJ9jY52zSP",
  "key16": "gCThR8hfJZShpd47DJvyMSuG1bCewVXjWDiTQQmNHsr2cSRqWMkVwySTgqBu6vRk9J3t5TegnAuxSkodPqMWH74",
  "key17": "5zG49qUDWcTSQGAtVybEzczJwLwpGnS5VA91WYaWTXKBSvfPDon2x4nibgCrAwYqCvygynifrFWvJi2NEe4bg6WD",
  "key18": "bgBTCAV1saKYdCaHQU7g1v8V6emW982AyZVDdwaeMrch1jRBVV6m4MLohh6Y3Qi2XGR93HEy8FTtU9wm2dVHAnX",
  "key19": "27ECopkY5NrmNWsn4Nj445tQ94EkGPoXz882Rbm9N2Qc1JnZ2u4SnMnGQY3zf2wyuy8RiWXDfX8zYcmegZwduPAz",
  "key20": "3S4TbWbjHtmEsKi66AtZS3KXyqgBbPCxh4pP9LFVic8W3F2RjHQSQCv6Pe6brK3pYgSJg8BAtVMTaR8HFpZSjRhM",
  "key21": "5byt1MQSgQNo3ZvyC8EfEYEvgnmPyB3rPDqyVMEfwYEmgj1Ms56gFdRqa5scJABj2mPzGc9duHY7b79b9QRiE5XU",
  "key22": "dJGnDHgTMaWu35QNUnqTXukcbRpXwb7VziyAeL4963pwZFxqCXyB5TAX5yMsnAaCX4TrdhJdNRQV2shGikertMw",
  "key23": "55kNKme57HoxCu9mn4m7ucPoKDdQTK1V4wepawd3dH1y3Ce9JqKo9Z7ER78XCCdNtRZgJBsimvf7BLbQwk9N7aQ4",
  "key24": "rqXU5TEDH8vq4NPKRWoJmUHYJMSoJ36tga6Q3nRrYQNMiKh2YRcrUpfCDg1KrU2jF8jymcmFw74gxpTkkixGQE4",
  "key25": "5kVv9ezumHZKkfXvioedE4W5qU6kKNbdsNBkiJauFUeKw3dxs3FFxxvjvNsMtyMP8qgJcukFvpg97Ljon2jrarph",
  "key26": "5caiAWEkBap7ybVn6EXK6SLW8dV3Ztmy9vFDXnxXMhsgU8jXjpjXNYQFAWkSdkTWxh2jej8w2pdxUki2Dw29pRaN",
  "key27": "2fKKxBNAia2QCRuHGMZMiG8NJhg8VYgwchoqrXeu7ro8UStzG4jAV6H68bRR15PdWdqTae8SjWzSt4KmtPeeAT4G",
  "key28": "2GHbjq2NA7L1esfgwNbN75vdGvBptKvv6F7i7WUg6hwGSjREHCqY1MFPeHRiNER2MdVmayLSzKiSSq5qptr2XaBh",
  "key29": "BReWjk1KDM3KnPxG1pZfZ1onyHocQ8Nm7g11kG9XjufMJ1ojU6bXTTgzCUBTvmjDT6srHHA3QHL1MjSjE17uxvh",
  "key30": "355AyYhGMXu2G3j2A88uc61zfT9mYv51YEgCQn8K6EsQu5VLRZojssNDUBAzCtEPjSFVVMcuphMDDDUKcL3urbTy",
  "key31": "3ZbfypCLHzfoKCZoASQg1KR8HXaQJAnztvWkbxooj8Fbn46GA8CREYY5Jf2QTjeq5WPVTLsBGuZNFbKGGxTmWjRu",
  "key32": "p9eKT11EjneKFQMrJ7sQ7w9kiia5A36JoBizu9mGy771zAp5ffkvu1VMDUdAz1YvH6gPcyQCMPgDiLMsWmSn1vP",
  "key33": "54KXTnYJHhX7T92GWSHqmRjGzhGRcJy2t22NhF1E8Lfyq2UEux7Dd6entnej4yZvxmX3g44wN1rkQyV5REn4SvTa",
  "key34": "22jysPU5LsDf8MZz5n7V9ax2tggGGNdZAAWjFizwE21KyMAvX5PSPqv5gnz7asLfYc6mXAzqe5Mky6mLGWoNdCHh"
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
