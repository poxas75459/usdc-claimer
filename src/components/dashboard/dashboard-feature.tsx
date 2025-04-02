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
    "3szzzWrWzRtmo7QwgaTPi4FMYx9tZJr3HwEqoL6AJdhtQZ2ua2KY2jN5USFPrUoihrCWrVPkjSccEhAGTPtoxy2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jo2yXRD11M6MkuXvwJrk9XpnKc3JNuSGBZA13VkNrWfRPAyPE9DdpHpyRH2GXKJorovGH8Sj3ostydF8id7sGn",
  "key1": "3kbX9JvwkpUYMdabUn9nADpQj6pLR6C42PNVN5cbBT2XVdRkcAVExN7VFRwL3psEehoekAH1oBQfxGtieiksr49y",
  "key2": "2RfG6bm2zuCi9kv3RHPhuMeaa2VUmEYZ7ov4ipTo99EFsqKr9NWrejuUPfDbGKF112dRhin6uPRkFGpiq2yiRq11",
  "key3": "49gFfNRziLvAwdJywWRP8YimFiKY7dpFeFs4pVpVnjKC3n4zjH7u35XPVb9SUDs3pvo8Q6RfnrNaYZmG22ZXk6Jd",
  "key4": "3vAKtYVHvFmjD7tuRMTsezQwxn3SpXrhn7tC419GYEH7qTPu6vNdS581fmQvPqf6ZMTth5a2yZpf1YFeLaozACR9",
  "key5": "3mPS7L5rnsAboSGjpCsYZjgk5jq6CyxCV9gQtDJmVf262YgYFFr9jDcbHUdhMx9NzC2HwRi1rnkoCyS2cneAmDHK",
  "key6": "4PhqcnLEGX5h8EcFkJH5J28kiHbtmJbRoqH9Nx8j76KhKcy3K5yqcgp4WL7gLtrTfECTK4f8VDpKeuwJVUE7KviZ",
  "key7": "2ALausLLgiFDpf3SVb99THcYcKEhRmfcY9ZZvxk2JKUmJX91zvu77ftLQGgo8eiLqK3PHmGyKZLAr52AFXv4WkAq",
  "key8": "3mr5DaNDtas8i4uwpY6k1z2Q21r4zri5FN2U68YgZahMwRQ9FXG41N5F3FGHJL5ZVuEezz6QCzV8BXPn6Vk33yzr",
  "key9": "vwJaQ36DkpyZK1Zf4fR1YfdQrTFLTMYTtvhCg3Sae3ntSLU7MLMN5aBGHrvmPGK745mVqz43C9SwB9vQUTmLZqt",
  "key10": "MsskPpF8bKp44NwUwZEooqaJGAkQBwKmiTLRGVjaA4c4sj6cUmkGy4vCduoybAyaWiRt1heq39NLVNStuWHjekw",
  "key11": "2JeEE6RHXn61hvj7V2XDYKEJgAxZzT2Udff3q265S4tKw4xGsubXNckXfSqrSdhUfVcm1sqJMK3ALqtKwJqPSHZ7",
  "key12": "4yyESLA5F5sv8H7GZumC8LKmSvsGDZ288wxccpE9jy9nc3ZJdmwnypkMCMrE6JDGwahbk1NKyujiVAW4kmjoDWwk",
  "key13": "3WYUPZ6zur7a5TWtxTYYpGc7DxdxA7E3Jf8ba9cBnHFecgYaDu42bWFgypoRCeDVtEQWPiyu17E4RZt9AWsrhRVB",
  "key14": "4niwUpLWgfUxYzBHj7nKccCMqNKTZGtXMmDQV3AR1jJx1U4YT6wf9w5UrzMG3Hqj1LEntjnm72W1yEHzwQKpgjvp",
  "key15": "2D9kBmtW2nXTNPmoAF98Rh83edQ4srAYmwMGFBZ4FK4tkeKKQtyj9cn5q78MLEn2sNrWUh6nXG2Er7JEwjkMTxbt",
  "key16": "4j7EkhyM63hMpNaybLKRAEB2UxvVj3PB94jfibzEq7aTnYxzDsu8KDsSp9GkG1w5wggi5eqWN2duHPLZr6SamM1J",
  "key17": "BMqnk1gWAkmK9Eg665B8bXCGJdWrWvXJTZQKZg3ftXTgswup6QH1HHmZJrELUcx5f5wdxu7vFu9feLonD18tkWT",
  "key18": "2cLMcEQLv1BUEGwDjF93G7e1n2XF3qnoKbikKTQ283bHvQio5srzqRjZVJpFpt1tSoeUe9AFkNbWkhmTN3aYoQ6r",
  "key19": "22HNDxQWpzcrSuTUsXMtzVYKxHzrLucyNVRtDgcFJtSZPveBB6JSodXagpJrCDFXUVuDbTo5pLbghiFL111anX99",
  "key20": "aA8Kn3bDxcbd5BemhBTj33rv48yQ86SHrsuuS63Uvmo6RdbjUFsAEbAyCRPA94WQHcaWNkGF5eKXNRxmET4Ru24",
  "key21": "3sejcYBNCx1oDiYoPQAEL4CdRg3C2wKE7vqdMVGvAAdv6HjSFZVZh8i6y3Ua7vbxSg8dZM1biNu97t3AbUtatCMS",
  "key22": "588citfsswRZj1s7or2N4xoS1WB4owCUyTKgffzVQnS9Ln1w97srgLvZuS7NFXnFZRvQTv7weGmkZzYyebdRtwqS",
  "key23": "2wLQWWdqzwRgZZi78wGxHdoZaLP1oDCFxKPYY7TzNqBBZyeP23YZPbb4ZdUMpqZqqfW7uLAM3f7FKwHMppjkvoG7",
  "key24": "2veKdwUVQ7mYzKyAcTWSxgg4VEjUESWYpMr4ocU7WeAhT6NkBePf5bwWnZtT8w2zTCgA2aDgGQt1X6sdmJ5LM6nH",
  "key25": "yk65TMMvQDNn1GJ6uj36v49KXAnQVFVuvjp5i8peiVG98WE5sXy8pqFkXkmCceQhKSVe2mLRBfZybkBK3Cbp7Uo",
  "key26": "2yf836jUQP4cuz9YhmHo4b99oA9vSgg219aSdAtDSfnntYFrhHaNv4MwbyZnsZvimXVnSjGrfuYGY9R2SrUsxb4c",
  "key27": "4W7XmFpy8cXZjtEBQwyRxYvAqjWP5TfYKGsnFVr5CUaNbswZRqL12BWeWUGMbQhdZv2eVuW5nb1a3P1zjCnJMxSB",
  "key28": "4HBF9K4sFUXfAf9o6sVTJyviijK7CyyptWDcPgi1p2c5axLV2NcR3QDmJJzE5pf12JvSiWeMRPkzx6Vd3Ngzme3D",
  "key29": "57rEfRH3ZN7gxSJpRp38LJH2m5od9ffVt6wg8NXcn7xjM7ohRziB4RdgV9XQbBradXc3FEHoMqc4xTGhTwAYcZ8o",
  "key30": "26iv6FMxhi2SAbQ53qst662wPJFfMkcSCoZaoaEbW1w8dWYyGVFY9BDoPa7GyeceG9VGDR5ZBiZM6KMmBRHL7v3N",
  "key31": "49Myu4NBUBfq6GoYQx8d6PKfRajA6v84wuqVQqYEsXhs56KcThTNf4sLY4S3CUNXS7AoRxWefRiRpSWW3HiYHjew",
  "key32": "1mYpxFPt6XLQcG5KFEUdjfUnqvAg1LqQoxVu2rR6Nt21EycQfaPm5j9RRUNLd14qgwvzoU2QYcFGAbXBSEFG28R",
  "key33": "x1GL9UTsFMZCDgHEi5HHs5iEiBdt69Bf3jR4W4erZnDZmLKTDNcPTxwYYBhACHeT4De8cqymbvi48QcgTtrRfMJ",
  "key34": "vBY6rgRQ7oUZkzAtPqX2dcu1HTUudruqevXgNmVNedLraKqiZ8LTN1sPjo2Gv6AmXjxp4sEFSbGeUZMfowSZak7",
  "key35": "4kobzZjfowKDFdMEdLzDAGxXrQXSD7bQmAvJkPbR5MyhMvgqbRuA8g8sVrfW8rmz9Nn4MBdpizuxrBEnF2C8jSjm",
  "key36": "3Ku9gPwgX6xgv6uhVZokNyXavkDSQxUiU5wscoA7VaB2AV617w24mhMgLdHvtRBVepwhsvAUVEUjtmD5TFfckbmM"
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
