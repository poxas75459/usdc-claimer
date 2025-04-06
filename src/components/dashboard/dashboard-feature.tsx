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
    "45SPLMfYTZvYqZLfgS2RuErE31unHXo2DJhgMv4NtjsiNMnPqvnt58ssPexdgB7C6SpRDBmXiqZuzbRdER3Miwoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gx2RdKiupbdmxrxLUdTTPYGEJYxXRhdAGpaq7VL8NsTzVH1L52FGmYhCGTgYBoFHQ9BrG15EkunNnV5v6hdFZsa",
  "key1": "Pu7jHBCqCoMQ311LDBym9ixJyXTBVQ1h14BkUJ9JP7qjKYzfpHzypsMPeJEMNDAejrk3B9bvV18oWZo169u1oRv",
  "key2": "2pBbT9ygXyee3xyE43WhY7E9RBWjFqRgvZuGzTzLyTqVQ7pmfr18y9LxDTqtTzPUEzPtkiwfk8MqCvK6bPDTeUHN",
  "key3": "truLYwe6zGrAHBqYEsfgQDZJ4e4zsFmY1KA4rTSq3H8RxZUPkFQ2BEgGPXZ1oQtkYh7D5aKvuvsPLcG5SBVpDZc",
  "key4": "2tNeTMh221Uu77DWSU7kXMct2FNJuBvRnvb79J4X7wgibogCDzT5jFdmyG4PVXyZ2rG67XDwYHgVZrexpikpFpgn",
  "key5": "5cNehSorUhBqpghEkAmC2u1JDCisTrvMVfCneAMjdsssrFVNJfk83nzpai5AMhNmYAXTzqcnLWj1huTRwMWa56fp",
  "key6": "3iiicEqEZAtx7udM3744TX4pnqJvFGvpX11C3cSgBZzVvPwdvDvWHuGaj53akReQWZ2JeCkE9poHqw2AVGxiF9jH",
  "key7": "SsyY9TSEDUmmRZyB7DJFY5yjPcNEHADKCgLSbACZkkR4nbtZxXbtgk5m8tobhjVsWnkyTLcuLpwcpzriS2QHKjf",
  "key8": "44pWY15TJFntXmUXAzGngsnJ7uKDhEFU852CHyFb2Logtx6ybHC1jkGEfLrNfrDTW4PQFVPyQncpoZbBq3W9WBsx",
  "key9": "4jgoRYutgT9GRYSVv3jV2oHVDPbQDUGXFeEkAEhG4uUHHecwgpWgo2a2dEHtoNWXXEVaWZMtzLndytv1HNzgF1Fw",
  "key10": "4NNQ6r8eUXnCfRtHYo1rKp2MaRh91SytJKTyJ9zNE8Je743NLqxonDnMPfKtQNgrU1Y7LhMt98R71CoSqsVV2EtS",
  "key11": "2tU1R96JZ5kU4JBHuVmGxxDRduyNPNZ4mKdEFUZZecVVjVwkC5pisF1p4XysvpR8oaMiYiGhXFkaV5arBAioNwj9",
  "key12": "4xuAd1Y3ysN9iSk8dNHguo6x7tBd3UTAyHM8sm4HPjsRkpx1XXaniAN9EoUDdpp5BxdTusGDZsK4qnHRJMZJtZUG",
  "key13": "5NXs5JLV99QzvLpZu3QXGPqcM242ehMafmPePeNaerr7S2Q4k4RPqmaDd3fe8bCYFFK4DvR99bBV9asZRfvhjWrY",
  "key14": "5amzkH8hPTZo1XiAKN8Fu33yJGJwy2U3tiTrUnoXMCgqZ2v3bUBGX6AVFZ4rw2YY6LzVXyfL2rXKRn63i7yfKvHA",
  "key15": "3vzzhCJ2PMtH7b2KBLF5PX8yUEHcEJNHa1nGKzAVMRHxVMQsmiGuRbvVBpgNu2ivALwCJ6yFZXsTjiLM7HtKF13m",
  "key16": "2TR9UyGdF1474WNw5jDhZVuVkbrZxvYttAuuVShGjUWiXVqaNSzAHWRRmiimUAqRX8hHbCCFLcpoTeD63xNZBTN9",
  "key17": "5Mew8hFFH63GAWWsUbkhdN4XELC1thTNeJcEWDgbYY3e8tx41GCYVFf9nLZYiw77DghDUn8VnY2bimGjFm1nZhb6",
  "key18": "5HhZJ3R8PyCMQiPSNg89JPD2HZ1HpC6s33KBoYAFgoQhdRVQrUMe7jTBEbbKDJLo5hoGzvy6iWGnbDga98a81kLd",
  "key19": "39xXMHqtwZ27FhfqYW8SntcMMZarKeGNRhL7XySzUNHD59rJYHaCS6ofDKnE9vrnreMu8tZmi1N2YkrBL1jttF1y",
  "key20": "3FULbgLAAFg5kttn3B4i3J45HZsA2f883TngTjnMcXZErCHDm7uXvAEZgjSrVF6ePhxQd86Fpp9GEA6zPX7456kG",
  "key21": "aPoAE3CSMYgyDRrGSvqkWkK1kZaKAU6CDZDFzMEVEcfvnwZEtY1KN7PWuW2nTCxsdbPozCUZQnBcuTWppvzXUV3",
  "key22": "1hpbwAasyXBnQ4HaetJW4KpAwyBKvQwTXfYh4BvBdwwxWFTWoQrsCBidmZiCYMBjX2JBR9TWvDbJzfdesmLaz7Z",
  "key23": "2Q7ZDV1XMarHyDkPwMSDpryhWL2h5Vq7euy3GgGrUaG87jEFgiK7GMj7DkU1krVyLUZrgG8ihzBBwbZF3aPedJuw",
  "key24": "2GcHgtLq7WuTFAZAz99gLhnCiqEg3Yfq4yhbv6sqCxfPTtwZSGShWP34Lgp2V2CiYzJjP7Mbr7JQruSuD1XG2yxw",
  "key25": "2noEn4NkjS1qVQvtKLi979ghdFHJuNj86UzwffiWwM6XsdxjR1DxXtFGv9gXGg9TTKdwmoqiTpDnENsRRSfStvi5",
  "key26": "3UnSE2FmiiX5Bm77LnYcDgbTztXpsWoeeHSgWWbfXjnscVdraZkfg9ShPoNtgap4ZQZSZdxiQSYMegUiEj31K5CA",
  "key27": "4x45fnBAhLT4jAtvWpQAmBCZy8nEbbVs2rUQRhL4WJrT3tZMFkMg3o9qM2kGT61Db2y52u5NqNhkPScQLQi4fWXy",
  "key28": "SX5UpvbV5r4thax4Wqu9VwtWwKzTEQcTh6qyYpaNDE1gwzJ2U1dKSrrbKACrdKatwm7m2MmdWQFq2zoJpW2Ccr3",
  "key29": "3kotfz7AC9xYx3CMX9czaXsh8YiGiF5o6KpY1v57334v2dH2YwBY8tXAcGdS1uamhcxEQz512mzg4xefVSaPQdYr",
  "key30": "dCVvbN4127WEtMBPkeKgYB3Mz6KgD8CYEMKCXsDe1nNhAii7wqkmfJagifDGajddbCnPinkDw473n57sya2KUkR",
  "key31": "3NFZehUagW6je2xor9EVTh78f3PYqJUEvSZ65Jj3mLUAz8mUatva3Z6nhWRjEonbLu7JRowvZCnHnFuyGte6gD5",
  "key32": "66mWZkB9nnuxUtbPHMbR18eMfd1RwCWVGJp7hK31v6fJ9JgEg2TC8UB5bPszkAPrpMr22GNv38AagAzFVi8Xp9KY",
  "key33": "4WBbkuV7RsZhehN4MavRKsTs9fvHZptjChCj9MYVpQCZEVQ8befLSznMLPyec3uj7MQBjodMsochXVw4jfd4QufU",
  "key34": "3RW38bvSYYTfEx5drHk7qbhZV9b6ECzGfSYt3XiFuM6d1ueFUtJy63xxZBPchW6D7yfeAPYooUjH7vsZU6m8Jo9G",
  "key35": "4u9yxbRx3VQXqrHwPLtEgp6GTiVfFSW6Gz48RoCwCPGd3vr1XE87ZmQWzKA9JUUsa93AxkNzD4AXTUu2aY1hksiN",
  "key36": "ktS6ocUkEMwTaHR5mivJx8qDsApcVWocjosEwXRqnoEpXwECc2RDVuNsbNa5xzwzBF6cpCVus9rx2Foy6xkyP2q",
  "key37": "2uh8fE8YhjHsVCc4fXe8iSt4nGJyQ4QG4FtFV4QwdegcZo3EuXGwGxakNpdyxD4GTHaDwHb95VKxmD1gdN8gBchc",
  "key38": "4j9MyZZmdf9jahux61aQFvj9Fq1nMCJrTkaCiaxZSgUP9YkovEkLb8Qrz9JQHMQ3dnDJ4uAt6pDRGdSh9YYWGp6B",
  "key39": "35WFhbnQtFFzehcBdHJrK4Nwfq9xwEWgpb1TE9pTAbxMim9DNL2iAQPTepHSpX9cwJJd1b8vDud8dHWa1BmFn6J7",
  "key40": "5FqAD3dkkoe9LTKDkEoWTVsPqrPouuWcG5s2YYxpbxg28PQuTmCwf38ncPtrr637pdkDT4iWBEY6uNxYX2tvUMEL",
  "key41": "1SMMHRomt5V3rbRGwZhAgwMHiyMm9nKn1uZgxadhzVJDj9VWqjQXKBnmvWDKeKhRrKfvQCAZKAzNoAKusrRuCLH",
  "key42": "5W5xiF2BjSEfTpskXywPQud6Z5Akm7RffMANQugyCuAgPfkcnRxj9tFhSyawRGPbsi3jm1fHArpWqSQfWXmLLR7N",
  "key43": "5D9AnPfKLEX7NYe4h3RSroik4KSuimzXw7jgEhrezVWm3e6gbTBY6etu94ayMQ7quQwzzYhrudkNnEHqZYK1TH7",
  "key44": "5Us5TT3qenWzNxZYUdALVXVzfStWDhvXtEjv7jT9MH2ZFLtAsLaxqfmEGUiqfwgaV8v8LPkvUwfSRAvp5hZgsBhc"
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
