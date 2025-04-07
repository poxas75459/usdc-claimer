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
    "4r9VDULgUufJqzpicHLfGhShwR4w52Tv8dsBjfdoSZUoWJSGa8L94GeUW8FTFJmwPFyNNJjsMGXxYPZfaNt7fZJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRvd4Qm91TuHhstDYdRUmJtaJXshGtm9W9QsDdufQuAZAdSD2J194GzSPy5Z7wEEG2iPgnbNPeVkZA4w1Wrgysv",
  "key1": "4dkLyU3XRiUhCzCvZ71FEoyazZXNwUzJiqsR5fqJ1aDKwAqwqrTDRFVApFpe6M4XsDA3sTgVD99JhcWwBeGMkESN",
  "key2": "4qKF9FC4qavsgey81AtPNsCufvWjfZtnweHPM5kTzCZAQskfsPZKuzTUtnqn8HDKMpGACNUci1C7iMYuZy354SnN",
  "key3": "3Ljxy7jHVE6poHs9KVHPXQrtiNAShdPteoATLEkRw1S94qF67riUyi4jp5NCQvUJFyuLryTMJ3kL5d8Ao8cmVp9K",
  "key4": "5ubdtCi76ud9WxTShaU969vmGvayTenzSZSKe1AbLqc5FBuFfjGuf46z8uLbuRPXLm9Hq8TzJXDoxGvv6ZQJ8Ymo",
  "key5": "3qmTh4tTXG3bT1xf5JhKLAzT2qU6nW76X5JEcmt1D7hMQgnGwPQZTfi1a5x2PpbD6RKrKwGWdHfLjy88A8hmP5Ai",
  "key6": "3Lrgrf3A4U14mfLGMjeJW4SQ8WyKLEiEcBZyAV4GPHExRFg2qyRHAYLzXoCrmCFkuC96LW9Cwv17ELLevDxWrroH",
  "key7": "2b8oNkyh4WsHLQ8kFcHWkegnwr4RdUP847Cf6shRp9SdfbMqS6R5u1c87C3fF9jfjKT443JsRi6GBiheNeDs5x6p",
  "key8": "4Yd3h67XeRc9fWQiKL6bEJS3cyboRU6dTbwvVc1eCPC9UuSKKTKbRAzFaXYAPpjhXssj2DiJsQHQEhqrdkZgkGU3",
  "key9": "44w8bpVxhNkaxPpgomh8iseX3EJ9trvu8E4PEitssBJSpxqQUgNfVfMV6sa2TJjDRcV9ieL9gvPSW9uoPwJo5BZB",
  "key10": "LdKmu63c2JUoQaYu1FDHuGQTiUQsqH3xhfHFUtDBHN5QfPUoR9GxyV1XRUAqAysZpnnm12ot1R9tYisYykvRzHT",
  "key11": "4TnkujVn84UsGUQhTQgEqrZ2ohV5hqHMAN7LgEseHCcivpFFwTcnj15hSbJXUdQZ3XJuFjzUyVRHfrESx6VUsK3m",
  "key12": "2cgkZWzR1BvwTHb71FBCsSJ2dPNddZcEwrcZu9Avzm2fL2U5dHokkYCLYLFs2wb6TdLAeySbb3wLNtM4tXum9YvE",
  "key13": "2gbTqeEusfaPjsgMcGfxRxWfRZV6HChHRXsccnYQcHBLgKhueUERr5DzExuQB2tiHhd7tfrApu57McXHRZMSqp5i",
  "key14": "3f24xckKbAyafF9ygBP9ptwbepYP4WPmhv1aV3z18ReM9oVQ7okXvzjT3W2ujLYeMZGJnjDN3g5qfnDRpfBwNPJ1",
  "key15": "4rVoRTxTaDU2J3peSSZzamwf4qmVYGzxc6wqpYHq3vhqYGwKRgvKNKG72wTcPu1UmFhFJtbB3LDVEGmB9fNmysYA",
  "key16": "3661dqhDiufkMt8kE7yeBdNnkRTG1QmVyuwYM7PuVWJ6oY4XD2irJxhbcS5uFhKoxjj2P9kqG7Vq9vHBDuKkXXco",
  "key17": "2DBrj5BekQLjMByexFFfCwDMW5Rby8KTideXFJk1YoPxxX82SyWrj33coXN6VG9aE7azPuTpW7PMw4AoETnWmTj6",
  "key18": "3hQ3rvhuNgneqFRD4c8vEpVBtRNY35WUrJspVFTt2F3fY1rPMYZwJUTyM2xtZJvC9knpde5AJ9RBEdc4qhNbawiw",
  "key19": "4U6r2t1yRgsNZhth6VDyHMLFqX9zSjVfzv32SE7iVbT4xMj45cmfADQjGZ9S9a4uzTPPivnZQSqRyh5xJ1AHj7En",
  "key20": "5cH19dQ71Y5hGHAWnaRrh856s8166rKpXsdECYP9kpAWXZ5Jdzy4sBgMmsUdv9X49BXPrBbRB2X9isRQENeghb5G",
  "key21": "4TaWN25UhqhVw5cCm8tamwdW2wHLBTEceX8CZSEuA9e8aSuDvNM7knt86vcYLh7n3gR6tf1KdaiNqL6jeQYEeC79",
  "key22": "2iepz9TcJExLyNQQXbwi9Rn1D7dLJayDkD9L7PLCjDTUSF4gXibjMonzoMqabtHv5GLsgZjSodQZXJ7apidPUR1W",
  "key23": "svDqxVUPwB6Yjf7mQJTJqR7QZKnFBqp1uDQ3vuaTZVbVGcqxz2qaUr1B1jiqTXWLBszE7mTgMUmvDmAP2kNJRsT",
  "key24": "5brByVf7y8bTr4vLu4ZZ6i6W9NxwHAvfYdVozkYHyc6trHM4KGPKARWRhfM1Ze2SBDNnWYGc4BohbrYUK2KChUdA",
  "key25": "CemV5cDCgTfeZw8kQFN1oLj9DHuRVrig3s7rfEGuqrkKGvVzkZ1qosvDkU2d9HXVebqbkJHsGVuaqzJHNWjLQZv",
  "key26": "3SbL1kt5LBY8PHgHBC2nyekfNPvbdx1UBW9A5brhvoVkJDaMcQxd8RhxFqf53CQWxrgmmfcFxMh2gwZuLgoy7Q7j",
  "key27": "9rAEHNg9ErVF8LsraukbyetWEGqWh5JZ9Z74og1eNDZmLTrMk9v53AsdmJdhuYf8yg5oy66rGyGDmLDAZY1CkYM",
  "key28": "5LJecJpchM2ahon7a1xh3bRChGuHdUFfRnxhCq7HGwf1EyVMk34ZPiddJFcZBE23DSZf5Zuz5qZBUZpwfuT9Rgca",
  "key29": "2XaYq66kREqqvE8BZP1dDfPFpCa4Wd7V8npv4ezmAxegLHGGCvMiZiNstYHhZHbG2WFgkzJa1b21TpQgvdtZ9iKy",
  "key30": "5EVTUt8w8nXrsdQESekJBwBUw3FRE5S584PaEdxPRV1N6EWuGPVmzbi5HX6w2AV4mzDLPCTWPQuMoGDbKDaZDJi4",
  "key31": "2FH9U34kNTWKGS9L1SsgwvGivcdmTVW6kfGw5KZo4QDuLbHzpMYfE6zAiYziBr2L97bXdQaJ8NdcwkxKpWsX5Kqp",
  "key32": "yY7aDFBVxmhdB4Ejb341wxS31Wn6SF3WEqgsYMZ9KtEzLVCUK4BLrEbMh6NvuAhLu2mVQ4QYJqRoATJ9pNVkA8L",
  "key33": "21rabFCBuXiYatDc29btGo4m45Wziy97Q4AXXuH3eyfUnDmUYXqDFKGyKSA1USj8q4cEivwfwTjRSdvKsLaz8vsX",
  "key34": "4WoDBH2mr3yVyi92M1zaAqYhE3bEp74qv9VaVxdw5ybzTrUfK8UUN7HaWmshVrw828tytPuWmvj6wyNjunP67cLX"
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
