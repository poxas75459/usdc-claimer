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
    "513U9haAYQvqWoArHbjfK1uEq8CH6xNofxvYBdGsn34dPQM86nspCrbKq5EAYCS3zDnVhaEjd2ZRoEVTHZWWJMW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwsR3hKQTSXZPoUqAnjRRDFHzb45BnqmtzQGwSZKmRKHXAoxvCWWbg6wQGeuJ6skoLTvsoP6H1pRSiKjqEbvpJb",
  "key1": "5p7DKqStCYXQrZsHeSVKpovQdkeRjBkMXyG5bgJ8WB2W9MgUrZmU1FuMkErAfphmRYgwSS8KhYUvmaULwLnCtraE",
  "key2": "3ZvQfZ2BJj7i1dYo8V366oB8rwLNBcHZ1rQkgFDEVSGDWE6bWfM2r91eg9Xv9YQuggupEpqta6jwbRv2GGCsKGRE",
  "key3": "6nKScFVKvtmqEztrVsRsi8dtT2KwNZWSeNhFxBK1t85YQPx9zn7Ec5GScjg6CcNCTkiyBvNzcigaDjBeA4uWkDn",
  "key4": "a3PGPvEvYy628BCFUJwUbtsNigBsiJTAdUKodUprLP6VCwoF5MQ6FDT3fA1X7tzRkQAXVXx2gvUnzFWEPnmpWAK",
  "key5": "jhqXuYQNJYRw8shyK2GX1MVu8B1u6exbfPBD8Gt2UHwkeps1Qwq8kJSHWXgpvK7CFNf5oyxPMiMEQYJnWLeTCGa",
  "key6": "47YNd7UVVR23EsXJQZegeNNSK8FjNv1YAiToCJ7iSiKMEeWzLTnBiDjdNiuvwJNFkT2WmheXvcQwM6Xia3HDuNsf",
  "key7": "5UoST2vWZYxDY6T1taQjkQME8bApMQUkA5vxyxmRqFi2TW4UCU5XB5H3g1XZBy64PjNzaL1JRJDYeQSqfNVDRG8y",
  "key8": "ubmCxiA1LFYXFf1mv2PLG1HVAEVqmUaSVyqT3P3UJm1wt5c6H8xuQ5rTKHTiVGj9xYvr2QjsTuEXLi76PTAzUbs",
  "key9": "4NS9wz2j88H99EhaMbGAdxjuabTVpN85gFvwxLTBvsRYRwunGtQYZtTxP7g7xzAHUSBM4xVgWMvPVLrpgaEVjZk5",
  "key10": "3hC9SoGoopaaowABzRtSqeKiMEpQe7hd5ZZGxZXsPhP8LSf7L7CbuyaWg8hZtcZrqNrbPraay6EJb9ZhS5uHpQy8",
  "key11": "2EXR9WR952AgPyp5YhvxWFnLc4aWWwiJiQ7rpTYvhTSGfZNoBExfvM6uNZwZzLrdwX8f92upPx7AN7EDi8XwQKnu",
  "key12": "dyxwHJS2BRrSxv6BFNMtcHjvY4zHH9cJDhLigEWsHVmrrHHmMEJFBcXMDLRxgXU5g71hfTx6iSydDEvz15RYCoX",
  "key13": "4cujr3ycP8C8LvQ7YKYyTcziDLHq8eLJyPk1TcDmebX69qTnWBUXq32wzqsHGJk6c49UkdDPagTZokqvu5swMAPc",
  "key14": "fD7XMBXrn2puvoJJaTkF4xN4syzSdNEtrBUF7nG65AkFnmAeBqdh2r3Ptu4Htj5hpCcGNegpxt6U2vL6K88Zpcd",
  "key15": "4Vxy1iiPqKjsCihcAcLABu5EHGK7MbPaF8m7gXCrJCeKaACPpZRuRT6pVudkquRD7RkGDmiPHVw1ikLJkAhjf5JW",
  "key16": "3ubXzFWvwqPNZS8f3p29RQVHYrZBABLpNK8LQvuTSrpCwVCJYKT8wqaKsrWFWsAYGT7q4h6TJwGBhcKuvt6FspKU",
  "key17": "4XaTxdnyNRkuhXoLCvzRH8tvnmErVoFFkZpCACz1YBuBTgaJMQsJRxdNeDkz97ZD8YFZXhFve2ZGRYukTSxtoCvN",
  "key18": "2xvGE1iGetFwzJoyhsPbbfYDxKnuN7EbPQ4EGyxc75ttdeAM2UsJmrPY9jmJd3Wp2xGzuvW2BnwkNrpTu7cNwvtJ",
  "key19": "3VWTgCEk7xDDKx3r5EfDZG1KY3HPGBRJsLQHMnBUWBrzp5G1d8HPqApsAhGZNsPxrmduumbJdChmRQ81g9nY2dL5",
  "key20": "4VKPSnQ6jCLFpGAzdYfj8chtbAt15Ybt3U5jQGSqijLgToRDXr6YVoGktGGUddVk3WevLXWhb53WnXr8x6CvsZfr",
  "key21": "5MFHuNtQ7RswyFsdb5qiRCUqp6NU7RmBBQfFyNto9kximp4TP2YXZMRvLdYAHRjPAmRhZMCgqjaE4cHrANQxj99w",
  "key22": "4WmzZXMkxKiLovgctFLNtycbkq3afFsWfUusrxa1zEsgPMHNTdegpRhquf8nMQRsKNsygxHFEreAXUDc579KMDFi",
  "key23": "5d8FuB1qGUK2PVGer9p2X5QVPHoxZ7R97dL4dTViXuaLsYVB3fsguUHv99vDa7dUBtRk9TQfqw3whdUh2LFooequ",
  "key24": "3YKBwcNWnEo3y2qzJnYwH34V6RDvVRdyobiVppFp8DWVXpSRFi3RPwTRMarWKWRCz8MdziRN99Zh7NZ6EaMHWrTZ",
  "key25": "SGkV8sYHj2NXc33tPbXNnwFioaiFBpFbJBnJhmB8fRDVHSESPQg7TX6FHYcdMWRzoZjp5v4xMJ1NfcogFRJTpKS",
  "key26": "2RT7EcMwq2srA5adaFebk8bE61LLbHCe1SeFMqp5DWHDXxh3SMkTxmjhx4iwQbbNgDQGoFjV1SozzooHRtVyuMSa",
  "key27": "5zJBRTyD9HuKfCsR57mECN5X3SXP7obdY1ng3axQiguKEgragVUHpEhSqXvZZXWyvHNfAz438XdZhFnnL8iWbGHi",
  "key28": "2RHShND39PpmojfN2W6SnwWHVT7p6c3qjHmTkVpey2YdSugTMqP8rRyZJRZUXLteasp3ts6beUcCWXyo15RLCf1g"
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
