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
    "44iiMpMRMjwAGXkjXA8Py6DvSySoySVsmBf8DJP7rRGjLEXVc53bnXZaAkFPe4KAF6AnfMHX3beinjnBjmXXek82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DpR8iWx6fyQPHwNGkX3cBaq5eA8Qr1GoczMuEdBSYKXtzbRSSqMrGYTjJZ3PGpzNimiX8DoEhYmEMgNHUxtPtPX",
  "key1": "55YHDMr6G6Aogrdqb8tBvuR3ASnfeXWPgPwQBwzRyfma7M4xMYUR8f683v648a5XXgu37doMHadTPxyCYn2ri5Hc",
  "key2": "3Y5ZTNThC5yt5S8uGqD3eiUcbwpwCxfpwCuY23rJgiLLyABuciHradLuJnz2g2vi8LWEjSRHn426BTuvMGpfEQNp",
  "key3": "gV9aRaneynFM1Ko5TfYcBg6wPyJq4cyL9HuKhj7UUa4GwXKRWKM65LGwPYAnVruvmqd7Z1TMhkKKi5mZJg3ZXop",
  "key4": "3gMopPPPaZiRNvbRnGZ1aCXVUcGr8ci8NkrNBDHjVkZ6q6W8AmjVVuP6YdMTxYZ2LtSHHkfckZ3uQNmmH5tXRfXV",
  "key5": "4pK7kKx1CwSyQtNKBatRBoasMwBPVuJwmd9ZM5gzvB13MzjG8HRH3kXAuXBD6x5gRd7tzUm6kD3xEM3oPzgQeSNi",
  "key6": "4Mx5zNTM8zt8qK4scHdangFibH13BKo2mbewf4HMTMwq1nQxyc289m4QZzrPRncFBk6oZcnvMiw9K3aRJ74YrdJz",
  "key7": "4wJeYoSDcB1M71ctXcFq1QaSbLpoDSVcZHNvasjKe7cxe1qnojXwhZyVWWcLQjcbwF6wmVNTfMCsqymvHPtMSKTD",
  "key8": "3y7X1gReVxPkCsi2XrvitaU8ZCYEJxv9KKCfjrEtp3k9zWuAFzAWKpg6nDfvb2sH9HuybLQXgx2hPE52rg8zzZWU",
  "key9": "cs5MVuP2qzqbQ7rZDQk4FAcU47NmT3J7UNn1biFJ1t55dj17ESLQvqoYw5nqHU6r7XhgqBK8Uh37bsQwsXe7bzU",
  "key10": "8j9TVu1ohjJVSxEvabWtPeY9rv1c2vRBgjk5Sscis4zXLXkycGmwfzyNKbAoYcYfDFznsSeb8kiHp5FMTi2Hgek",
  "key11": "49tRFyCMZF9jENLxBe66hxCN4VN33PJeo1iZhJmaegVEVkisFQ7nhUsCWcNfYQz81vZjbANzfBh3573GAo1gCw2Q",
  "key12": "2EVYgT6uE3DiaiVy3s3ZqZugxpkUATHvTyDtqJgyPfgH8TFDPzMj4YJx4nHr5SitstiezVSwC2chtbEVQBSrnBQB",
  "key13": "4w6qHgLucp2TxPjkf8Yc3o4j4dprgrE4yVYCRkuiea1iMmgYKq2TKvpNH3ViijNHdbnEG5y1uhCC5Pw79ACFiU49",
  "key14": "3KxrCfBr7zV4Me1Yvv1Y9G3vbAhKdV9bTexSRBJAq23DBVq1anV8BSqedjA9WRSBMuh7i18dK5DKWodUnkKBth6k",
  "key15": "fQR2EckPYLoMbUwxA3jzJprDrZcqPkSSPzkYQgUvB1rqD6Gpyvb2maXvuxwFxg92H85RmSKzujZtksyBn91N8Ku",
  "key16": "54n5zcPgUDePZq9FrYgUQV2nNPmahaU6KA9t5DL4uAxYyf37UbUYVwvKUVq6JbCBwXYucSWZXCGEmhmxrcajNKDY",
  "key17": "2GT8g8KbtTrkpv9LD44ABCQKMUUj3KjT9oVHdtcxLYi43DDVPwxrRfD2eqmobF6wavBRtBAxNjyRGVTbMLzG9bQC",
  "key18": "eonDtYFrHS9yPSBv3ycBtwpx3tgQE4EP7mMTrAbM43mAcEhwkTc7m6VMkzNFmZiRi2BSnjkyM1SQy5iJ95jwCHm",
  "key19": "3q19hGkcyh8ekafyAPwjv5sPTEGsKW2R7DFAwRYkmjahfK3NQLZVUqeU49rViPi8MdmMyiFUnUeD8ZfybBpMfksX",
  "key20": "5XjDqB4UxxF87BQrjVdAfCQwhKYJeuZrkvGgC1wJnXCuSFrWte7G7D9kTsvsaF24FsH6bALaPJWxFKYSDes5zHQ",
  "key21": "3SrUhtBQoZQ5nHEY9PFL9GaYEA8mcX8A5igkMqwEGHjz7ofTo4XnYLJMxix2V39hXkCYNyZdoXnohKbroWBfw4iG",
  "key22": "4FMmkb6HqyXw3gUpPtqdTjMW172WSRU7D7SAgJVqKTxvBZdQPz1c89uZsneoctW1BB4wvPaFocVixzspTAkryd7v",
  "key23": "bU4LXjKW3GnQNnth26hTiKgRPGQAfwDQmzfWbPs9vJxvw2MxN9kk9bR5MTZBVFwa93hYNF3yq7M4dAfiVPTqFn1",
  "key24": "3Nmhw2qhWETGwRxxs4pA6Dmyxx1Ru4SuA5AQJdWu5o8x1QXfLArPQECY7Fpx9i8VBniY1nQvd94uG7HSR4ebauMq",
  "key25": "vpaaqoeH4qHg93SW7ETXzBaX7n4ef1mrtSwKNXzSak9AQsdDiy3s1EVoExyVUXMYi5iy4wt5Whz2ucedyyGqYEy",
  "key26": "2tkyXML1x1DbYuY4EaekrW1e9Ppccue8vSLnsU59Uv8swnFF9vwqiLnALyvMTGWv1SR8NCnXjUqzGLA7n7N7x72K",
  "key27": "243sgQYzgQYbFtRpmfpKUaFdnw4ZSxgaPotS551HTTGzHqhmeATmmLRSTHiPTxdkNVsHTRLNJr2yaLmnD7rVLBWj",
  "key28": "5b62Lsei2QkLYMpn6XxMxvnetpkyH99EjbJ1spQe57ne1NQ126co8aDQYJhZZ6VaDtUDgFUPTCJsx6GF1JCmQo5h",
  "key29": "m5xkKKGRe6LfExbCphofK5yQNrHgDTxmNHS4c3Dy4uStEXDhQwYRtJ11qCB2FHC5VaNbnMKGXGmA7pjQUJzDC9Q",
  "key30": "3DZHxeYkxYTW35HKhkX6mbbeFLL4jHz3D5ckBm54f7S3wexqh4b2HP62GErAd6DzwcDZ1uWXiwhy2qspHYMK5aQD",
  "key31": "hLoetAxVmvxoguiPeRupfe9Kd4EJTfjszu9GEsx93miVs1pHMP8cqWXBqMvQDpcTzMyUjxnZ6nWLYbMFuJeENua",
  "key32": "4yNmDZBys13qTgyMoCsh6a9SxG5aW3iVuVmYa3HKmnq5YMkMnwwi5LpWnPS6FEXS5smMd8VjYnztQ2JsQkMAGXh5",
  "key33": "2qkhHxPZpUnUuJYu75KJFWwnb1bcjZ3iLwbkyQk5b8GcPYFJykQCztpCvLDYc1LBa42KLC8TKUJsryhfF818PdwP",
  "key34": "28RM9nnpXo5yLqYXxZegw6oyMMvJyDA2V9dAZ958z42JH7yswZ99W5Giq7XjZ1wY5BWkW3j1SWWoa2MrgQrth85w",
  "key35": "2Lr6zxrGnjHwWN4qhnzQh1YVcPvoL3rawL4fZ7SBDKJHE48oJbcDXt1NP6UvnK3mrwqyLhYoMwMjmUbRFGPXeTwx",
  "key36": "3QS7tZthMowk7rgtgPxrM9BxqK2V2qvo5WKhHDbbp1Nxt65NxgBzaDZ1i1tSByGdnsHt7ixHCrcKLdLrrDHRFyMi",
  "key37": "2vHBqL4g6So2pfv6dY6rHAorLfyNeycmCphJ8ZjFwmz3isi7Bshq6MRtBcUNdeF8AD3xgtbkMbygDobjLfRQwnUc",
  "key38": "7eseeWv8aDsTKsxPDj5YK1NhharAujHvBXKWVPaDn9wwL4di7pZGoCGvLAvUdaSS4rXLkkKBbrf9peNq9g8LfYq",
  "key39": "5idbhNd5PUmZuFPkTJqyr1spdtkd4njYEQYYFJQ68nc4bJ1aeMmAEuG7MyfDLTrXa3pJm4CXLBggTeFJxhJUazDh",
  "key40": "244Ui36amu3TBiW45HECzrLeTS368AUW1VAfGCvPiV7GpvStBtSXdeXmMoApKtPrSHDLzuKpHbFGtWNdyZ8x3gkL",
  "key41": "2XE4GAYgVCLrdFgjHqQnL4hi3ZmF1gzVHjm1ek6pf4msSHaD7ztLckaaWT3B4n7HvEXbM2MGbLNvNsdY3WBoANBa"
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
