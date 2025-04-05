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
    "4YTbo7WRhVTZDdwG6G1asywcbSQZPk8PawL79tv3d5uirDRUcg4SkRT49U4cFXgAK3wNA5vTSahAvoy6u9KjCvVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bH32DnZ2B4w1hvdu24yiN4UrfhLiyfsELxB859Y2tnzrrncaXZrSZEQN3uGGxised945MzweVNaScaEZ8Gb6bhf",
  "key1": "3faji91ZMMUvL3LUN3aNoHA6LCLX8AipEdDSVdmEA2WhoPNc7DGsu1XkrWk1MVi4W6J2DLQZNiyzov9A9RPPeuRx",
  "key2": "67TNEeQcYYhZD8QZgh3vA36f3ZxtcnuZ3wokPUGYVMUmrFiEHVwqDcRGfVFNEbgC4eoLXdhRHV3TKiVhyreTJETA",
  "key3": "67XifeUeKdHXW6PT5dMduZotWFByneuAifJkZ65zdoWf4dLwjnPy1dUuvwJKye5U5KCbVkvRR623KqgVyWJxLQbJ",
  "key4": "3uHbfYvo6ntb2zuwM7H3gQ1LedE7u9KWzLoiFF2UhGk98LpyePMpRHNizVdwMMyKYSXKEjTg5sH8jhrFP8snumWo",
  "key5": "6ehQ6zUd1XsbQnLByQ3VytkdjdyHPYg8EbknU56hUUVWgsTKACVuSVmd5cZSHBEjHTEh4JPF6uHbH9i2TmjeWT7",
  "key6": "33KMVHGPhwSyWoH7EKGCK4pMhiNEqwQSW85u6SMkCrNTkvwJ2HXDrFwDdHaAmNUfw4MNQF3q3wArzgNjtM43d6pq",
  "key7": "4CxEWwx5dDZqcCJegzkKHG8piCNCTdBdSXmkSeUjgN4E62dcys35fGwvveprxtiwrhfqqMHVsty9hrVBeap9o8Hq",
  "key8": "4vm63Sh2cgjCzPEWZjTHDhHag67TEcbYGza4yuhqewyX8o7qxTsDzSmuejPkAMvFUJJpTEsQTmmp6FS6QTBSfvmU",
  "key9": "5pajLisRDchuQ1mvqauhJWJfV2rQmgauzJoXwmjTMyd8GD9iPkBNpjkdpQXE9dvNvDrzZ7dz8YabAgp8Hqef9Vi6",
  "key10": "2sUJXUZwmqNQeDQhnwxMQfouuQ8spq2Y6aXUxDcPRiT2f61y2FEXY2CYGLA2Lhi8fsvdmjaXuySrR3z2Q8zu3V4E",
  "key11": "4vH1hATn3ngot86csbmfD3SkeoFEaZVrVMhxj4tFZRiuWLRMi4XaMwnQWk1g62ArwvYE9tmTwhXENr3Rg4K1Gq58",
  "key12": "2WxyiHkxvNFvaH63Y4BuhwGWGL6CHX46DFNehnEEUbn57EXgXSwCaAibQRHfAjwMgJQzAibUhXjGUND8XGnhxxXA",
  "key13": "5z3rEWj91XSBDjHKeo2bDo16zWSCr5ZjDLYgJSeSnGnYDLrwyHY6whQqderWDZCUaE49iF9hXPZucYs7Bn2wQwQS",
  "key14": "4LuX6y239W2qd9TkHhvtAzWFCrH8RvoWBj7os9dXcwBGgkKaDw72dDb8vBzHXv6TRGTF1mUYZyyuBAofE72wfXFv",
  "key15": "QVMDmW8LXcQT665mKpyLiE73bDbNhL11UdnxWYUecGAyDugKXbddepv1dYv3wfqaWtTsM8XxdV6XeC7dAD71o8x",
  "key16": "4DoEDFDREES94d2dmzykKxRA2DyLSYoJMzngyARdDZxGB3FKz9rApgSYJCse9qa4oJkuW2jjU2wvNJXvL3RHpSxG",
  "key17": "5mM3oXX4aYgYS8WW8fqCQNHtTpZBopRzD71RRqMd3yAexRwZvjSHXhpQnv3FRg52MYy7qLd1QwziE5mw1Zo7gCRW",
  "key18": "4qhiYJzDN5i1ePxcyByeJeK1YqmtvC3VSAR47vUxynF3fik6WcKcu9Qd97pYzRejt2stvXbM8XZQPHqNsEkRwFZN",
  "key19": "59Hagmit51NKtSJkQZvA9t95wQndp1xqTBt32QZkw6TKwZZrtJf1BL1G3GZ7AHdLpJrKPA1y4WuSMJKUAyCAUfVu",
  "key20": "4xr7vhWP9QwaT1yU7GpAgbYVMk2Lafzy5r4KDhDGhFZUeAPpkd3FK77UjvnsLSqFfkLWnp5tdtkeqDJ3iL7HiQqj",
  "key21": "5y32pmEHXedqrYgZoWqimauAzK3deNFK8oS7jUcEBt3BqYqmvfJyB8szXwp5uHE3L48Tcw2ghGWLgmTa3X6jhgoq",
  "key22": "4pH5GLscmyZr6npjBZ9rDC97QAiSsu9MR3Swh63bo4fqstejcj4Yj1W3DM36ovM9JDPWZW5tYsb9fXG6WiG7SmK5",
  "key23": "2GmM1GmAbKWW6aXpbJy1JaWeFLsXq5JqVPRqq5HTnD74PRwhKRXV33zAJLrYqXC65Z131yFsAxsZBtrjTmoPG2mK",
  "key24": "5M5bwNPXXCFbH2i4doqtUKTJiSj2qq3HgCV4kX4edHhH27H6TntHDbBm5XG5HKRzpZjmY2xX2D3ygGt36LWRVJKo",
  "key25": "59gaxwYETnv6NF56fqAa8Yko2YRemqFJUSDgAXL1Dk2DZw1PNkKUpqKcDoztoEUHifVMUN9kK9BA6a3BmYsPVUH5",
  "key26": "67fyHKUwKiXkD5UogQAbGqCSWHT5EZbFk2tMP48RHcZxD6fdAjcu95CkMm8qUVdFjX5tdyDgxfYFRg2nMg5CqABy",
  "key27": "4wgqQGvtxpwBD2Y6FJWsVAEtVm2uotoMnhXUS6mieLwmWfnuJwmH5jPASyddWS4KYEwAMLSBuG6rFMqhjb9Bp6wp",
  "key28": "3hbSwJF9RqfNN9sPa7r5J9c1CVQhaTgRPVHHVYGwdbd4R4MqHQsh5TgqvstJnptph7QnwSjXHPoULtbyaZvn8zpA",
  "key29": "31oRENwotJzczNV8QkrWg4jQdEVtQuDoxQga3jMZpfxvKi8iVSG5o34QCaQTZhjEPjdNaa6BGrmdENLcWdKeuX7A",
  "key30": "2sXSq128i3MR9ubC4W84UEfpyfiusEP8xGPPMheJnDYcrS2ykTnvd7zngprqehfyTkH61SeETzwdekMnrJiSXdWT"
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
