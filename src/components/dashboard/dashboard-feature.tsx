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
    "2u4y5LkbpgDKrEo1jWgJaRcTs4xQwS4UM75C145zpSXvXezqYz81PKGCti82HLJaxTNMDgwVSBXbWkWpMauaKhzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32thvxdhnc3mD6iTYqRbej8zEBmrA4qwYkYYGPxiFSKLvMr1YRDKehJ9V5Ghz8pSjg2wVWzN552hTGdU4yqDbHsE",
  "key1": "4tn4LWjx2Q9HAe2pZb97Z1HYApE847yyb2v39Nj69LZS9kGCw5iYPzBPjP2gcf5zyvWhT9CD5j9Log8aJGTGFcL5",
  "key2": "48FmX8sVtmHYhMZ26LRBgyap3ChWPaGTMyXxzEEDHVVhTBcq5wVcPASGi3sxVUn55nCnHpTbC8vq9BpCy22HNKMW",
  "key3": "3mnLq9Zu4RAruS3xb733j9fh4SYvPydrvUwNA6xJvAudjxyQ5AcARCcekqwGUWMw3ykHh53wodqAWyTV4xJJPnmA",
  "key4": "29DshDyuxyvEWejh1mcjhaiTegDuCyhcTQoe9wukjNfGtHkQjPMLky7nnDVxppepmgskXPaHiDHPLu4r9nqppJxN",
  "key5": "1YwVvLXborNxzbQvTEyjrNmgUEkhsmTgTdHSATKcYux6LdxMV5cVaDs2oia3BMJorwhv2bp8nA7AXYBZqvRrVLz",
  "key6": "67VnKdiYXQo9p2kWNmrxEa25EPQdYKLZBHmvoHSwpxbNR6YJT6uz79oDF1GxigouGqQmRvQvZQjLcUj8RkJg8SDV",
  "key7": "53S9m2MBvvwjHovARqLKAPZLq9i6xCngoJDDoPvGaaGpkdmnxtFfPvWZFg2756q4n9ewGfP85xXwAwrTseWFeJNj",
  "key8": "Tyu8k1rWjMp67EHbHfpV1WetQdZzkcLYedANkbKx8V3sbF7Uy2eZeJADE1X4PY4WFVJGCVNaxvTJB2vLDiJ79tj",
  "key9": "3ikZyg6ajRScGogRmZysUoPLf8G8KQw6m9sYvokUvSnUuWJxKU7cZNdUyA2gZRaQ65CQ1tk8ZEMscbDZ3S2pdZfr",
  "key10": "2ivYgDupUtTyATiHuN4rjsbTR5merQUeAibwD57TeUxLfysWYUVTs3jE5nXfN87c9Ae3U3aEZtZX2zLg7RfaGkdg",
  "key11": "5Sg7CrteaZmNaGQ2HCLffT42FZ46RvGmyt8Kz1qRXc4hCAN9ojN2QsRSEhLykMkYSV623kqhhUAzSgzRSX7VqQB2",
  "key12": "2NBAZVQiotUZX9Kg2fHkcJujV9T2PYwXLKsxZGJqf7R4X1QVtMQnwEF2vNziv5W5Gq6ibxQJmAy4qLUATGdpXhg8",
  "key13": "3WSTRKS2aJPyCoetTmiDAFxDp3VuVjAvAJ3ZLTuZzXTGW7Qaa5ZfQAWuVzG9dpJgjRV6v1qdgjvAhJVQwtDQC57n",
  "key14": "2GgrAnGBgbPPtjykAqt7w7ifX6vieVX3JdFP6gdoFyBoW5QWxS1vgQS3ZYs1oPhLxPytLurjkG3uLYVS7cKEgAdw",
  "key15": "ConKXE816QAt9mwmpsT6rH8PS74rRB1h6rY1ScAfnSvsmRZzpQvbRpJRKJrdSDLDi8VmTcW69FqLdGEE11auhzx",
  "key16": "65Hs97vj3AorvyUkT1uTVFqXyeHuo1kzVd69NuGD5LtuEogxPnNGP7iZiuKBBjgnCarM8n1say82q1dJbQep11ua",
  "key17": "jE9A9QWAbKbT9fpfkLpn9wUbwCBVWxjxBtyLUwfVoHushkpohQJvUuhL81Jhwd9fFSuHL569GeihazRYbWabz8Z",
  "key18": "2Qfjh4ciswBCnvMa8sb7fhajVczxAfBeUMPoTRQKnYTQtAGY7xNp78FeCdZ6zyjXm4BJA7zRFmPw2ebSX7pBo7yp",
  "key19": "5KDVJebgzyR9NVkPRMwadANnyJC7zs5jWU1eEW6fqKjnu3ZncTrykZcxrs6B4kYJijJUiwdpCE19cJ79pk84BGVv",
  "key20": "fqkkfeaVMQhnUie93YehRSiryyTQM9k9LbrpJYs6EdJMCQDPC7X9Pm9i2C1u55feuLhUBhvQ8fZmWYrFQzohLWw",
  "key21": "2bNdTmQeZ3i7B4yvyn4idFXkgBfPrsL8zENiLpb67iY6P4qCopgG2G3p6nGLSojsEvC3XZ1cwBZYrYCqbp9JFN3h",
  "key22": "128FXmLCvsfLY4hLpvEuWmhEp3emjPSiGt8wCfbvSKUhg5MyHS248qHVoXWcuew6ta4bAvSUUoiPeMUrQkFnm9Cj",
  "key23": "VJHMAkYVM6LtqAXevyD3j5zuBjzoM7FHZzdp2F2Hwu6KdrdeYKMGJdBKZtTUpiPxb3AT6TbpgPV7VV9DA1zt1bZ",
  "key24": "3oC9xEHZbZtCzGTEDQRosNY4AvjeWsbYkspuqXhfxk87u2pYgM9VyDpLfd853zfKZvKTfwUhZhZ89Qvf9cRfNiCN",
  "key25": "2s5XKNUy3S4tDPczZWF7A6ALzrwaSWS4nJeSBcW8QFeARY1G6Ab1pTd2zbVuhP2QS8Cn92Htzx5wAirSTxQZMWCD",
  "key26": "2k4s7s6sPxZG14P6DiDeXFrW4QX7QEWeCihd8oEReDDNigUXh1ZEHnmYfddezqsABEBppxtuM881Lf1gB8HJAvTp",
  "key27": "5KheK83XbWPXm9Ld4owj63C1oYTvyw8Qxo7QPkD9wVLj5ivdhjkcxRHHkYS7ajXfGfghbeCXzCC9qJXT5SGeTa8L",
  "key28": "56vJzHvhDCNhGVqeCU3EZXoWnDtz31qG1AjurFRjnpCAey2GdnhSk2tjXRHYS9bDfaqZYL1C3aL7U5jvoZ9SdtUe",
  "key29": "2UPWgJKGUbTYTz2hNTqZDE61PMvT3L9RSuexf64NXLPHbTwiSqKySCYvDHDr4ns7kLm4niS36meGBxGS4zHHWRTJ",
  "key30": "3wsaxHQnjE8zWmeXcnu4JKA5iH7yMYsa3G8zXw3Nh3J2NqZTdTNJpynJJrVBTfVMviSZCfBmg4gYVaFBcikctAt",
  "key31": "2nxg366KbeU3sUQRhDWPRRohBJM52iTXZLW1xs1u8xqLZtSJUTvRNRHgonkGxPRxLn9W4FvoE6Q9A59U8WCa5KbR",
  "key32": "4eziNGgjp467E1WxMk3QECrZ2tU8Zk4tQwtidkqrhKz7XFhaJrRLUfpk8j4W3xJfsJfxHQCDJcXcbpNdb6mCq2JC",
  "key33": "BmsjRxCe7eZCRPtXJ8mvbfpJQEyoFdxzTvLkmDDpc6fApWJbCMoMK5Je5mT5RPiR4Y9dSDD6h6vnNWCjZMc5AWR",
  "key34": "UhFFXFouGUuApabRb1jdKvakPtKcAALDTkLXMMUSHdgoPhHbPQqLJffk5apyf97PVCdrG7tsaAPt2YXfx5rtfTg",
  "key35": "2xcSk7AKU59EjhbYH6Q8wgc7bi92Zt1fp8LQbPb76tqHLRGZ92fos8MuG3dfTCS6rU7QtFZDnjnjznWVJK5NVCVj",
  "key36": "5SwufoUd4hvx75jx9oWuftQdQTB1b4PkSc494C3ibSzpgA69hcFeffgwg8MHEnro4FDwE1pQPUPseAghLGtoaR9p",
  "key37": "45g4TRy4sRY8ELFuRMpJj7aVZEQdikWSfUHiQoBDhUAkQyiwr2tUR86E1MD1XGTZeux6mDLR8DTR1U4r3mfr6b82",
  "key38": "41QP1vQt5gfmGJ8ovmZ1fNiQKAsviLBqNKyB6o8KneU4zy6V4p7GpumtqHmucAEzLan4hBDa1y5aZwkCXAu1iJWg",
  "key39": "5SYzMFXJv7ZF93bNkcU9FFtQcwXxZJZSaeqYPUoPYU3t5uG2Huo8JTn8TPj3wyVbc39Xk5c4w4vLj7AYwD3Avti4"
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
