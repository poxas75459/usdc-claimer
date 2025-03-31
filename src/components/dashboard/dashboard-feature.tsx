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
    "2h6p5GjRgrnniWzehWdzfcx3xP5MYhfdRxkxqNa7u3srbe7eNXKtyF5FDemUcr7qNrBEYh8EVdtttRkVUj26ppXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1PxbxEMDivUG2fuJZyjyyZaigmfYu5XhDCw54oQYkwcTvzHx5xYdVMyqe8wFS2LH6bbnQt1fboZ1RDWVwMq9WC",
  "key1": "9y6P83egJbD1fKaai4JRck8dFFZKeqD8TxYoErSMyiNr1xVo89ggyUnQoJwpNXsBw8U27VrQe27Xv8UkNYFosPr",
  "key2": "4eN4H6Moan5LHnYKaKrakFFBccLArZhYPooJox41xHMej9anrMt1ijJDzyJBehvK7Wq2bKrq5QkRMSNweuUFxsKu",
  "key3": "4q5X9nUe9ejcsTYTnyPYUxM7TFH2KrpKQD3tDMn7D3YHjVEPwzbFCYYQiEG4SgRV2GW4byESMA8utxuvCbn7MKe1",
  "key4": "4RJ44s3DkNwdC63xQEgZF9W9v9B98qRvRyY7hDUww4cmzx7gYA9NVCRshthE28dpnXp6mZ5KSvWss15r25dQ98nd",
  "key5": "3BXEEeUAAaCe31rrLmZX55DQtW1CeYkk3dyCTpSnXjZgZstK93iL8S3ouw2gbGhWFK4KWTeZAeXwcG5fJswaBWgB",
  "key6": "4K7XnxVNXR1KnvMvRs95Eq1bzhrKMeuGkcvYJZyKcF3E4aEqq3oZLugEooJpVV6c5xwnLiTcLxRW8NiKXpxJR8Wo",
  "key7": "2rvopz2FdogRgsqYrXb45hLpaZdLXaXa3zuTU4GNa7P4HGa6tyUG97fqi238FUNiF5EoLivpjA6e79wjSaM5yT2c",
  "key8": "58BfVRWvW7MHfCm7BsixAafjZpj6n62iLCRmLgEv2HBJdSp7rdWWPo8SWcSHEK8CWDmsLPx9SV4CagvGJt61r68Y",
  "key9": "5QYTPJ3UeLNyu7ChkSUsx3f3zzn4QnqDqkxaXPfzixzMkFM2qTy1JC21cVKMLChwXcK4vjwer6HPSho5S85BZsxE",
  "key10": "4MJfDQiQ69gtaZ9aP5WnGzRkVQmjkPBMKZihAogw262VXbc1n7NJY712GpLN4SakxeswkhUtWHxPHagKHBArrga7",
  "key11": "2hpoPf7bPrfLZTr7jVM91bN9HgMKvwYkB3qd4vUm1Mpusjy6ggmnoec7bXLm1uywN4oJr8TZvCJjeuJhw2WVz1Lf",
  "key12": "7RFtuV8JFLCLAuerAC2wkHhvaPChYATFKAtd4B9Ajw8wQhAGyvo8Tf8Ywcb87kTzE27AURoj2keoWRUEyWj4RxP",
  "key13": "4g1nz8kUWM5hganf6LX5i5uPNZi5f2ujmty5ZfXgembjqYXvqc6BhzQKzTJCokZdwTyZC4urfQSB9eCBTMeUNgqE",
  "key14": "3xkVwRSMmtiJYuc25n4FeHxNBbxshKbwDGWLMiwqG9Y4GVFaMBMsqUgDNgKcVTvjHss9NQtdcnmL6otKLD77HzFw",
  "key15": "4Kyawxt35SYyqTPK2T9Y81s53iTcrWPChGetzM5BNYJwdEzvNixgCp1ahkqLGBtWRDzCVL3XKvhMtdpwgThNoh3Z",
  "key16": "WwST5asMfPfwc4PzTX5W8RXHksfiaEdUWVDrvg5nseoz5TU4CDqnDHECThMWMBnErRk8E3p7PaDujhdynXx5MoZ",
  "key17": "2rBmCWdRbtjNShtiKhZeamgzQNBXHZvoeepH6dgEQmkRrXoiiZp5CjYCUQ7UehKEtwCvD2MhxDdTADfbP2RmXpmW",
  "key18": "2DZPCPTewCNrXBjYK7VG2tUeWrdtyki95Z41enECYQ9Zm9VP8y91G5wyTj1yEhhTed97pEGSPTXWb9wgCWetuKMs",
  "key19": "2uq4x2fdhc92swGWQvYDksXmBfDqreWe2DTUXFh46ugHtZf8DFcjymfWooy8cBLJ8iJRrFY7LR62rtZ7WTVpHyat",
  "key20": "x7BAcZdz5pHTPtsU937hvgPCRyTsvruP52d7L4P5HaTPjmmdF7xz8c5RwurcqTZSdUDuT4JJRXZ7vPHQfg6ACCY",
  "key21": "ZpFkJpuoMfTorHC8BqyFjF7B1pqwPrr27djJbzN5haaXF84mWXiWdMemoW8LzkkKw6x9zB96JF3T8p2F4JsRxrw",
  "key22": "3QjJppJjcYjmuyZbTZW5qfZSJaxaN2oJSDQfYV8jMXU2zA5aeF2U6eaJxyywPxn6fZLAzSYJyvLN5sK53Z55wpFi",
  "key23": "4Z5znpRr3KLcoRDyJuGbgk7EEkqznXCELamJtawD49xh6jTVs3noYyomozY9WZHCt12X9C9iokVS1YPn6k9GY3gQ",
  "key24": "5mpJUcK6B8TRW9cmUGaP9QraP4EKG6T1V2UqBBJ8hBbzq75fuDTLrs99uv16QtibNsCVQJSZqMAirUUEuiUcYABn"
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
