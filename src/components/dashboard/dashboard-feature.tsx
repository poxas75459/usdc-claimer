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
    "3HNThSfYBvnLgitQby72iQngfxZr7Pzx4pbQmByBbCzgLZ2iTENfbUTQxovpoHc8Br3ZBC7fzN8s8vyhSGEz8XLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fhCgYttG5Dukhxqtq7rg7ZYsXQeembqQk7pRJNCopaCCA7iDk9U4457YekiKVr4cVwixw6Ybun5quQbonRMLag",
  "key1": "5Tv3pg5Q6yr3GaGRsFRKJfijGYgBmSvZT5kFaSbfAeFoxh4yj4m8X5VMkuHo214vjsNMrrKYZ8eGQfExavXgJMkm",
  "key2": "56xaQBZvZbxQrkmWrf9s9GpYT8CGq39uEduz1hw9nBiHjNo2PkxbGkPLbPi9pV26fQimKbWehTdt52w4zoi1DEmy",
  "key3": "3CypYkP3BvZ9RbWbkRLVsqNCTjbJ73VUMwjYFzyL6ix2GuHGgYoMkPahuneW2wnqLpzCVbz7GBZyBrN4xZaxSEEt",
  "key4": "67h7g6WnXxVJVFNQF4g4iexTzHe9SARyaJ3DYAmTJhqHHGAjraKskrZjEPax9ZdAmt9m5w979c8J71EwyWaD8g9Y",
  "key5": "51uBYexfjMvdNQ2QrWQtSGk5V4QN4mF6U2PbQgZsiUikRycxNRDAwQoYpgjKNyXCC7a1GMsbKJ6LEVt4sXkQ9w1V",
  "key6": "5C1DKUAmYaETj3EDvLb1VmjsTJ2ERYufDVa9yzR4tXbpX6Wip9Yj9gGsDQa2K5ewe7j22yXGVamp6zwiAgq6FJm5",
  "key7": "oA1K36nfy842dSVQm3vSzf3RJXVRUm7wJugWCr1F7Jw7DC4hcAa6jipfcVh12TwLDiPYPQC7xYbQ9E54oGmK1Ti",
  "key8": "4QWrhkZDsKVdk5mqSRZTMBEJJuJk42X9ash51zRUdZvdmSAMzycF7Pexvq2WKsJFbJtpTeXoLHBcyxPuUV2jjMNF",
  "key9": "3TCg4JCMwgWaxJgo7xQPtpo577dUE5W6eySpERoGaXxK2LuYk4xfKaVMGcQfAvCRv9g2PjKTfgVFyDWP4KJ4R2YF",
  "key10": "58dmhtEreXuac4r7KBG5YSs5ugFatdd7aqeenD2UttxVRj6NFMMPLTZjEj5AGg6bBUtgGzmR8wwTAYtRJXpeCJKD",
  "key11": "66hvFLojjt4b6y8u9Wehv8zMK7EGXPZjsMcdD5E2tbqhL7zNfbbBq5aX51Ggkqc1d1iLm85XG3nbaBxRb1SbgG7p",
  "key12": "4isBdMFv1iABhvgdSaFdm6RmtnqtC2UqErQjV2aBa2idzLYD7ZyTYb5Q3U9fDLRx21LyqgbRv1ZSPHUjEmTnKrq9",
  "key13": "2LmifqewRwrxLRcz5KPnj2njSBS9zk8ijGUoSi29A1kPSgarASSkQP9XwmTQWZmrkLuyGr7vZ7epmd3m24Ekbx1y",
  "key14": "dsaP5u9gUkgDSJ1iGBdjFiGRzSSYaJQnNas9Fe8N2AdHa6Ph6cwTj5zL3va4ZQvAwHMACwK7kFuQWVZz36m4vo4",
  "key15": "3FEMp6z9xfVmaYXdNNEzYj61RXf3Ubdsm7sy5ZbTxqYfczxz4YMZkAZKRcdvZ7mfD5aRfs9YLN2o4NZ7m89H77Px",
  "key16": "2Lsm6SkRG759vGLcjxZnbWtd9tPmEZED3YLDE7KtHBKrWgFS7QBvg8Meus2XKPJZbFxiF9Dtkqt5fgyyB8963DzN",
  "key17": "LjTur7dwRWVTK2E4nRxDUdKBBhPAeKYKZZVtsPDKbUAGBeXMtNJyjgrJB78Q3g48qX3eaDon5TQrF9C8x2ehQGT",
  "key18": "3SASbrbBY1pLxx5bvAP446JgUJHquNi7G8vFkAgsWfkfPrMjUyJe5wLgDWnmJRf194jrLAkzBNKfsf24Eq6pYJfb",
  "key19": "65JbJ4PgdNJXLDeyt8DPy5pDxPja9HkJwhX9YSG1aBKsgoztL4eu3WyEXfnUEYE6RjNd3VyoMjrjm5Wsn1cL83ZS",
  "key20": "4TAyRNUCcwbWD94pDVaTaoAjDhThEG4JzhUEAp3VD7aAeLywXqQfSgUWNzZzfcN13QpSWVtf7sbVayYPCbGYQrF7",
  "key21": "61jphJo3xyVTok9nFpRhEqAXJrKDFvxoM4YA4Lt75qnaBfXFawzroqHSAp2nRooBnT1DsoSGnz4VemZZTQJ6tTGi",
  "key22": "5kESJ8hEiunN3Uw2mDGDVcmb7GJMLVJuogEFcsmFBjbCDVgndwxonTcWFdLmukeHg8aTRTikYPK1EPRLoA1Ce4QQ",
  "key23": "4TLZ8H3wWrmv92qLVVsQPpLUpBnLLfphQD1KiA3kGrVrbWdwe7VSahymPUN8PHenSJbVh4SaixgA92maVjhgpaKu",
  "key24": "5NTfTvLXhHB1Eu8gJwHSWkhnCBduS42efboSUYH8xx4ZzaZpRsSsiSwCcCLaPjUAu1dMGdE67YP9KpvvMqLoKqWg",
  "key25": "48yzgWrwLAQsBYnJdnYxssfVmNvgZWcdxpjAse9kxFpGx5siBQMipRgRiiw4KvTbPV7GYeXPRDxAtC85ZsjbXp6f",
  "key26": "6DGGWQ9yXJ4DQdmWXcth7PHwJTvs7S4ypNYWJiGn5YipGy9xYwWu11Sg6B4UAqPCNjEYDRXejMtoUdpGEWfPviy",
  "key27": "3kCZMn3y1eaYxd6Ch2MhVAdFA9n9DDENLHPH4E1o9y4bvHUPYLZHmScnG2nAKABSeth34T5ZcZDaprY3PgqCPVpW"
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
