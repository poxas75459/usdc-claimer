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
    "3PpAg5iGpGcsvQGWAhf5yRWpzc2fqG2My8WQe8oBng9BptYktTZrxqCnsF8wD3ScAGyorakvti9Dn6pzVLy9XYSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdMd2sK5Gba93HxPdJqUAuie1n88ykfJhwSS8wDHeUvEbt1HbBjJMJNnuzLQUVfYtk8s5TtrExf6rF3HfTMg1mg",
  "key1": "4ArrSJ5RgkVwQPWWZsyc26soSgdXLJb9ZRWpnjAdZc4DLmtM1UuYrK9mJHRG3Tc4JUh5cQHqu5H8H1ZWPwpLMEvQ",
  "key2": "34iieW9UKQ9TRb8xb6arJ7pns1oNJ7WJJ4byQaeumBQSwvN9dagSkGVFCZVpFza48gX72134oxUKaDBj6sqmGq2v",
  "key3": "4x88wFGoAtQR8LpEhkM2ypmSWfLDNV6dSfcAjU8z5dCt2Hw3d3Dg3tprAMooFqd9RFNnDFCoJXvNmNsxsDarAP7A",
  "key4": "5zZZBeAqYsv2QLNJGUDt2d5jkX3yrn4p9wpJ4qQJQRWHAZDmmZ4uztPQW43h7Aobp6GsjK9b95i6x4T5abXy9ehB",
  "key5": "PkiK5N2pyPj7nZCi4a3QLpJyCqgVSWdGGt1hvdN8N9pFpVCoaJu2kVeGsJBBAJsbUSUjf9rYNGmRTQWghzrWFmU",
  "key6": "4gZE7kQdWRqmuE9yBQVcvVoPsXtjxtNZhxBtKbhkvxhxKHr7YG9Bd5XTp7YTce1hTvjAb5WztHgMgVFxYZ6NgSSp",
  "key7": "HRWSzEJDm74aq4aoUurcsdKXr26aEjdaV5pUSxM6AprEDVYJ6bzKsrBC2PE9sqtb6j3Y2T6cnKRJNwkrsPqEu4t",
  "key8": "3qkT7WV4Ee5P5FsTkb1KDEbMQpqofDdnwYBwBzSeYdgHzvxbEH7Nk2v6jdLZbWQbDSdxSqzFcsFMDGmbXuyYo8uF",
  "key9": "2B9VBoWaYX8yXNJ8wpkHwoyHgnreZry7iNeEebcjaBzeHPPQnGoqm9L4q21ZLSsKzf4HeXkupTpU7pKhSa8j9uc5",
  "key10": "5e7GZv9ZhroVN4cTSk9HkmvLq7G1n23Z7xAeoHaUN6YrLnqK4SQLco8eWVfbE2AmMg5ZPWadSwzv3XzKjALQTQt",
  "key11": "A1LagMT4vydCHJXa2zAuMxjoW2qYLiEARnNWgUTjrrk67mV4fCd3m2XT4GMZwcd93xCeZov3ysjAM3XWaqpB55F",
  "key12": "5iAfY839WMQdD2cAQRYabbvkZeoFqT3N69knqCGU7CXj3kYBRQy7egc7N2f33pCGzYRT1ycayS2N1DRf3rFYXWiu",
  "key13": "2bpSEeHzqk2fUaJFBhMgohV2Vg5jX7kMDswKrfCAZkFdzXxZeRAXcqQjntBbbsv9xZS4UCVPa6SCMkvVjBbMpE9f",
  "key14": "3Ya74Fn7e4HyN7Dfiw4T7rTBiFuaPqN3DkJTZShGVZ2zqjogMmYzAHiQRzdAcZ8SrpNE7fqkx8yH3o1PpzPkCxND",
  "key15": "28npscvTddV6LbHMPLiP9HfcqMo8oEDWHwZkRb5g7BaQHDtRj1G2EMhErkwWKo5DXBumWva2CSBMHbSWUJgw8Fey",
  "key16": "4m69VYbw8r2TjNJHCo7gqHtUZ49kQ5VNfQvkvHZZTGzzdxo45iiF3iz9fR9N4E7J1qM7UXirGwN7E9yxW3pZosyi",
  "key17": "3khd3LdHCNWqZPTr1Cm3PWe7Xa9VWgDE8oBaRPdnvdnrnz3uw8s7gbezRQLkuaFACqddTpiG4FL3oAyAVbQES8AT",
  "key18": "3iqymQeCrp1DjBbD6dFK5ivR45rCAAkTTFB92Jvq8x8kAD2ahvat8G7Q4skGfeZsNFhMQ5pBe7aX4kq9gh5MKHbT",
  "key19": "5WPLPAEpzM6vNDAvancPkZMQ1mZaLJ5SDzoFpqWb1p1ePpLHyPxzzdwmH2KHKEc7NBUjjraeSxVe6HDdXTr95yBb",
  "key20": "2DgKzDghmdb8eDDHwoXfedFnozeW1Wp4bVkUdmWgvFhXRfU26JsiFr6Vz5pvF96LWGQJM5aLnezqFy4vPR1mEULm",
  "key21": "3NxanPj82bUj9SebW7XWfKUY2NGuMJ1CQcxHPbXA44KnBZbAMsKmiaEjsj2wMFvdg7JJjyedFkB6VV2iWfhwW5Ma",
  "key22": "g8cELbH4XUnph3wXUoCyhGRqTpR1whA6BZ3rCMAoCjEzDoRA4GH36adJ1kjQjxzX9eGEYdb4tp3Qu2nrJaCacA8",
  "key23": "WUGSQon6t1iyacifdVkL5JzvYnW6mSDq4i4PLJaHaLJsKihjbqVDdLvkkM6Yx2mCQmAHMn1Y5qXW9Q7YBUEe4ie",
  "key24": "3BcNa6bP8dW3bxjUHrZhMosoq3aqpntxdFV8iZPfJAXeYNDdZN7afndQnB9MQ4acZLmjDcRCEyHQJn73KXHBYwtQ",
  "key25": "5gpbPkQA9coE3F1ua3UcNKJm8D7QW6AefQBHn2n2qjk4gUPtt9fgTYGQno5tS5kzNWvtbtLUDoToYpTtWAyERJXv",
  "key26": "3xCSizKFVw77MwGZU2pE9Epmc8c7XzoVAFeyM7xzJYEA1gquqA4ENiBWY3ZK9ktgTXPgc4mfq2g7dAhXH6uohktm",
  "key27": "5kT2QbPQQ6shVCdDdkuRuVfMy2fqRJCqfLWEDZhSVbD9DS9uNaXXPuDf2d2cMN1Qoh6JTTnUQeT7X9bB6HN8HuNo",
  "key28": "3vsgvp3VeCg1q9CzbZ79AbeAQUuAYKaPfRCkDRMtBc5MkmtzyfJ3HhFUrRTKoTTmEtcNgcUTrXy78vQ7btZUwwBC",
  "key29": "4g9rQjRTucUDYfdU4yjPsWere1iVFonBoShcd4gomEXHjwkfr9gAPAW9YtjJniR3yDKbLCo7UpJVtkRyo2nkqm8e",
  "key30": "4LQMtfQdXE5mJ8FpcnFHEvavwaXHaJAJMPDRzqaUcg2GWip9D4Zgu3GNAEwbjaWLr9nxcXQVmo4cPHNvKRmiPURq",
  "key31": "nmrC2z2oAJVRpGCoZMmNj1Hxksi6LGUCb3WS5BeauhDyQTGJuMgvHha4VpNVtLC4sDyH1mLKgTk671mjvG6Bpjy",
  "key32": "4E8K1u3xqZriDqKXRncUsxPnF9ek4FHaYtz3ErMa37x9yi4M3BhQ8YkEYPwJQQ1cA9VHqqpCkDTAm5kpdygiNcAR",
  "key33": "4zR6ZcpHz6629B4wX8PkBi9XHQTt8dPrqnisvb3rQhhGMQnEo2f8cfz6Stjj1SWFmH5fksasQbPQM44LqoRYjMLg",
  "key34": "5giztgapV4KTGeSUEzgz1tnDZWLqQGmmW7SZpnydvzu8HvAs2qGGX6ahn5sgstebeSv3VvwdN5Vdi7EceqG9sXNV",
  "key35": "4dNEZRRcCuwYgzYf6fkkC8DwZEBB5345ibraCp937RmCdRMcQPRm9AUpoAVbjuGpkeN7GYitLDkk9f9RHFyX3WCm",
  "key36": "2vB6Dk8zqaay7aEG9wwKqXbcUrkqmfuXitBf6zUHcDpbBV3TyTbgX5i8vCwX9qVJ7FSkPb4vAdEKFHLSfZW7E4R9"
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
