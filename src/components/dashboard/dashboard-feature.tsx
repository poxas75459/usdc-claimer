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
    "2ZQESLkDG1hPyNLqkEoJ6T9WCvVEMeZSHk5SqH9eqzaTxTHCw8Wpwii59fxHdFBCgxWg38WXK44APF9jNZdM1B7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAVZNSKWNHPT5sK274MDH7DMg7sDzPDuVLYfwu2XtBxeCpDLKa1fB4rU6LvhLA6SiCrzMDdVXTGwpx36nN62ytL",
  "key1": "459KLzUWPcXZ8gUBWQxkUoYFooF2c9o61zdRWJ2dbFU5YiQeUWNKdKbTt3Mnx5mvXREVgDrYSm7jp1pr8Gyt9qsZ",
  "key2": "57z4t5VDyMcD9otCg7dJj1i24kiiKEh7wkXeGgeMfKQq9En8R1SL1RcMhMJZXujSwz9CpYZ4j15ighsTyYvBe98Y",
  "key3": "4Qzxthu6wGoLjBSx9gzqDifT1j7RosyDVA8MVTNYCKN1KNA1qXvooYhFPxV5vN6HA6mCy4koi54rXjLicCpesASC",
  "key4": "6gWFnJ33WoC3yRTzAa5KaGZmnoCs8z7A33TJP8vq1uwsKHEUxAWkPSqvfUBsZ71sjRBQdb5FP9Hg84DpHXqzGUQ",
  "key5": "5DUbZ2FbmpfyVA4mYEj8V9coG6Hsc7EvdjPLZoUMU6XQNbwEfz9jiHYkTQTqsmwZ34eZ8j94Bj7mKKwhPpGd5CE6",
  "key6": "4AeQbedGdUkdiv3fS2NoHFnZs3PmFZLHAXRoEU3J8C5hwHosgSSppb2g9NF4FWgPuaSpCAHmHAnGUTYzenLSE5QZ",
  "key7": "2KAtAMm6AQiUJoF5ZJTCRnZ8QSkA3rZRoigjkpDa5Ex82uC8CZwCFHqcXqBVKKkfuGJHL5Tb5oJqxGi4c6QLiTCj",
  "key8": "DcSxZDmUCihMCq8dBnhFbVFGjf2wpKPTUeNs13EbrXp3SKEKydcBSj9sFvVDffceHkio6MuGN5t1b3v6LgGj6Qw",
  "key9": "xxitiM1EiTRtg497PD3bW8fBhiriTQn4MB7X7C3pbgz9WBkq6G5wsPwqLpPBnyKdAwD6eJjcWT1GSHwqoEMmqUN",
  "key10": "5tNT2CnhxnUpZk8V2n5Jqh6a9dwMWRt3qATJQqfT4HrwrzmWXAWGwPNvT79vwJ9VavQvUqzx3tjEuZBUnLzZF6AZ",
  "key11": "53KphQQG5TMFU3k6yBvvQ5UKYAnmLRYQmSJW6csiWg55bNzsB7ZHNtQqLuMj4AJ465SBo63JvBgr6YeEYuMTK3U5",
  "key12": "5oSquSQQP5GBtqQoYGBynr27vfNYbyixrC7sahvQeeWPtjSMHyBJyYP8D47iApJT8JEL5YTtCkVoN6392HQ86FmL",
  "key13": "5ZG2sQKGoAyuaNW8NDjjJFYp6gXCpnUWm3BxFmUt9BPJ4piHKN7Nbmu2AnmDWX6SgP87FZ3NW9AVb4Q9pLLEH4Ap",
  "key14": "3NzAVqRzo94EhS3nRaxKJ149WojR1rshNbBhgGLoCVD68YvWHfqK1EwfCpTbUraJ1GEhjXkyA7cbGREjKgvTd9EC",
  "key15": "3rK86ecGVJZxw927qVFHDZvv2QMfX2TNfCuscSMqZLoXvZFGaz89uhiZM9AamnTJzzpiu5nKZ1NAm8apf55gnZk9",
  "key16": "5WpnHwCJEaVsqSaUMStHqeXfQ7ZcZc6mWF3FjAZoaNBmwBKHkcLvuT67uUNNRez9XdSHEQg9EMDrkkHAB5hjaVfj",
  "key17": "2HPFFQ5fZY4mmNNH1dpudXPzHMXF4FfedH5XELt6Y8XE1kQxp8oeuM3azTL3NeBm1ENC6vxV3HSnnPaXoa6gexEY",
  "key18": "3wRP8RKt4teqJaheHeZB86DwYTMk2ChgY4px2EWAFLicJVG17wSdGHEkSYCeAm6i9TviJoHW6eyw2B43QjvYcDFR",
  "key19": "3pLB19YQhL1V1U2hW4bNMHUX89qDHV53Vh3m26kYmQJWgFDCnTo9a5P1LPBjTpQRNGhaeK4cN2tRc883Jd3S5cnF",
  "key20": "4o9a1Q8vayrr5fFk5ihjWxozfxPyr9dpaZE9yviW7VQtQ5yx1Wj1yuUfFuuP4wfRdJP3aAdCEkXvggDf7NQaFCpu",
  "key21": "5WabyrdRNKQnZCoVSFbUk4AqbWowwUR35ubmB5gjew82dUuZAmjBZJo9WfRzFfE7ektEmCCP99eCvBZH7GJ27p7H",
  "key22": "2jppdYxe4Gqafni8qkGs7X6F8tuV2JPN6HxkE7drYd8z7rWcPvkDP4qVHRNbkZkLfc6iHFUY4kcwcSMhCGfF6WVj",
  "key23": "4qG2R6H36e9cyy694Wbeyv97ahPzgpivw2u5B8grwt9e1wUcKyqgRH7gsvFxTD8G3h82QyoofaEBUyv1xhRUj13B",
  "key24": "5K5MTLR3wS7zH6M91pgkbHkodqvQ2KQWsThZBjrvsKooAjMMxaT1HPkiayume4HiY7hU9FBPzTDybZpDXoQyrrvP",
  "key25": "3LhDAK76JnrwZm5jref1rvh8z3q2b6UquyjjMSxaLs9EoSMiowxXKub2GKNfxEuKDBTv38VZQXBxoAMqGatJQKux",
  "key26": "3gUtxAjo9ExLWVherpzbnHDcCq1k3hqm1a6QKdVbt4yq3Vw3K4gKwJymfaqrpknLVjkeq6sMMDDnezKbcgmsCjbn",
  "key27": "5EpA1GfPqy9ckezuxS7iv4KkXMXvEmqA5rHW7Zi36JyNFgFKKmaJ5S7KEyXVuBzjYZi7wmaMUNoyycJTZuERs9wM",
  "key28": "2tGYP9LGGkQkLthAWWpQrZQcwtZReMVGkAJqS8Tz6ZYZVMxZYyBp1WoY7wjp9w4Z3Ng3LDsqRJ1AvEK6AobvskKT",
  "key29": "Hd7LFW1cy31c9jURx2f9ZuaCLrCzvpKMKN3SXeLUGAZp6i5XUyvuNkU6XRN4JNQk5KLcyXb9x1gWqMTBGxNVtos",
  "key30": "61JEVgpL7bk6D6QGd7buDGzjEsR6CzjtFt6bbqzpakkfdxJw8udgoWnRAHmiGsySnWnVeYBYfPZzuGzj7rUBzZ2M",
  "key31": "4x7repCzK8H8sWn7HiHdedpUqLmYc78akeh2gJZTtHtPhtsxKHa3am3kPgNQhJJrrnwM9JGGxRWo1rLx2yPHZsSL",
  "key32": "4sYstXvCDEALwKGP9kVhYhzkDisFuWnPaenDUAfMdpjKMcMEFaJkr97owTUsSMqvdr6YDp1skqouRd26hZwA5WcG",
  "key33": "2rAa7AdPZ2goTdBDyg5UJ2Py8j4bH6Nt3CQUE3EU4wh1pReLJh4177Pbjz8rC1CbaNZKhfJJbDxarWFADdYLvoZs"
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
