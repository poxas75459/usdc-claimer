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
    "3pGrcaL7Btwhb7KPRMesAZpzEVfABbxqaAsk1etHqQ14eAiSbkVN5BCyJeFMgpWAumNLf78sVHAYxh2c5SfeTr8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCtjqQWpBB1ePtbZXj7LQkFjnZuCrYy8GcY6YtnQhiK1rBv7MDE3gwXet7Vr5wHQoyPqqzVpEcYps9zB5scQj9R",
  "key1": "25e1c3qpBHhxFxYpRZxLgstU4Q1fvsMomQcQcoYSKFp5h8TkynNUCnMZthFVghCPdyvXsubPpZirZzf9tpzshMLq",
  "key2": "35sqxSRJoZvFRKKVoGcdN2ixtdkSWcG7e9MfZpiZHG65whJCv6AVDXiZaf9xbaRJCdppu9oDxVD6Sr3VkTVMWeZR",
  "key3": "4KX3YSxehSNjrKfux1mTV3Tqyc1XodEWbNu8zYEsjEc6kUWAJT9tL9R6Ko4DZqZFcseAPvEVYqUsUEejGWTdTnxh",
  "key4": "5Mo8J9ihFbu9kPB9o1RibLhSBvw67xqYnZMDRQvMkLCaWCEuJtVDdpaKAPQdjiKcVn7Zuc78YGcGuJEZZveNEfj",
  "key5": "2RPDXDgrQo4jhzrC5dAxwRpaki7v65bKRQXTUXgntFSSB2iyCbzJ5iCTsNQ2hBgCzdJVzu95P3dMqiSYHLhkt69R",
  "key6": "nGWP2eayNzpN1HyMfvdkUEMKKyf89wuUmfShUDSuVRbiUe59oUx5DmRh5FGA4yPrpstTZfs1EeDWgyUCjSk9qL8",
  "key7": "3RsEYNyzcQB4drtsbvD9sfWx6YxGybHZhwRgnNTedox254ChZRDtEd86A4ucmLc8qUK1hBa8W4jsYSeLvudpECpu",
  "key8": "2rQ72G5Qu8VuUhki1hcSayonyrNtkbVduiRm6P7ehJfZcUT9RzB5m5xBYzWj9bGX9x3siDNAXaXvcgTcnfLpzrKd",
  "key9": "2UtN2DVMSyt5bqCSwjiiJNPYt2QZZQ64nrezY7BLPdmzTbjZ5ccVy1LSudm8zH6bPMvTy5YawrkU2KZuUDVcA6y2",
  "key10": "WLKu62aAqB5E7McqULjmbrUY6d5fqpE9wwLFvu8d1k51CRYNSrkohDLy95dj1pxnN5yKWuNNQyaDdhEbrnQQAvP",
  "key11": "4r6Q3kVbmkonvPySvJZ2LvpEF4dWZ8NtvM3ypdGHScCUwTzFuB1x3aEDxwqxoxjBVtf74akfBD8crpAEeoN3vpCT",
  "key12": "2jinCHFCECZuV34oxeMnp5YbyJBrG4hRAxbCJhCjM5MHkzR1krD9K2UfbaGmufPhWEvQq2YTB38w6PhyD2eqrbzL",
  "key13": "4oWD4Me5WkVTxtBbX7Eb7AEyNq14ENgSkK4CenKR6bzQGtoPJ2zcfr8JddEQVCkX7ag6mZgAgSrwuTKhpssVbLoG",
  "key14": "63sCGAxq9VfPGDqxHAVJGVEyebdCDooRs1JuYUt2i9Ai55qtFV7FrbgrXh8JUjkC5B3RcCzHmYMxJSa3pRYLoV6M",
  "key15": "2MVu4KWM54hXZL2pyqnWoj7aWEjeJtbLb4eUZP5hwR75KwcJEVFzjxamJ2CkqbZtbS5wXbkmvyUqfjmeQeDTFbEZ",
  "key16": "5aZoYVTTNoUPxspETAv9tBT5duyV5p2L6r6EQPgx31xwzYD5DWuCNxdYq518gyus8kqTYovxRv3ar3HA9vrnUgBQ",
  "key17": "31MtvmPWkgtnK1XPmrB5Jit2tEH67rdHVJV5Qnck7Fg1iJYefsW7UXAwSr2jD998UNRSrBjTLWvXMg2r1M795xFb",
  "key18": "5JRMZiiefGzghMjss3DthiQJk4i4X6BgsNLcFuXENSLiYpXgm1NE9MpNc9xVURYii8UE96uWM4seDcHEog7xWCs3",
  "key19": "5N9M4Tq6KzWDF4MxD3Fp4bF6827rbMwziFX1WxsKDu39wnXMUhPenVDUKTmw5qCFzqgeyWrQKMKeqXgc75AzLMN",
  "key20": "4LLsTaBsZEzaKgF1t1SVAynq7TbVy5pi7nsjwreYY2HeDacfKF3HUscQphMNS1hjWHkZENH3qnegqkjEQ1hUqQta",
  "key21": "4DH4Tdq9ZBExM3zhUWd8YTG6s44qoRSx2Fmv6Sgz3cAjtkEqa7sGfDuVNDzUGnh5R6WfC86ytUCmCgD9nubcEDaR",
  "key22": "3LVoZLD53FpFkmb7sqc5VB4gvLeBsXtZ6xqRU2LPqWGaBWPTVAQ7QTL3zgfP5yfpC4VpMnSts6NKTvt58vAAchdx",
  "key23": "4iWUUZhkANnDGzFzXNdLf9W2uqG7rH6dX7SMAHmBq2EenHeZv9rDZ6dBfcjUB5RNnwAcngFtqaWXtw8s8oNpXX8Y",
  "key24": "664jGMzDamdMAajRqCtak3YFFoXxw295XHfc1VwV7uS5AawCuVSGTy4iPQ4zRh7C3uzuVD6TgBnK75ND5ru1d1qa",
  "key25": "ncS8nU7xvMVfEe1shWTL9mVnBVRetxDyieNtEaou4gHEfyQmKxxiSFJViEjqoNurXK77tX6j6zM59vu5XgWZyNx",
  "key26": "53g1uoxAYnKD35rAQ2HRpNEQt3JXodHoB8aoLRqGViHMTrcuW6YKtQUXx4apeFZYJFA5QsbUZDvF7WiuSCNnvRiX",
  "key27": "5SMHCF2MbmnMPy3U1JRdhFQJk9LAqKvnsKBA8psEc3RfyPxNWwZPBFf2SegqsjoMXjhGPTT6CZChaeMo9oEUVdHC",
  "key28": "2MdNfLZVuZrsKtkK7SNTEy4vycswgn6jbA2kecsLJ7sa67sw9rkXZzT9rY76oojFpXBDLp7v9dmci6YErCAiN9yk",
  "key29": "KiLKoz7ouLGxdPtYaiWbXJJgGadN8dQMgD9taRSZcML62Xz5ppoGCWu53z1gB7PPBgYNMip2AsFRRm2st4WSA6Q"
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
