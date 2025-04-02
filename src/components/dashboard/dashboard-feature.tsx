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
    "3QPYABXvJpMEC8dgrZNBay5jZY86qT8ero9E2j7zLYKx8EYecnvbzBjrnv8hBjrevdU49vk4hcau6AJPUbJeBQHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzTeLoavZBwM5Z1sUtz1cJsFVssCmJabAv5L9H6S2XnSuvGkKZvYj6eEzBonnF1s4D5PtZyry4ZatP67r8ZBoHY",
  "key1": "46mwQybUVrjZmwnBG69F7C526sCmP8xdsCnhFyuy2KMxwsQBmG5t5sUB7HAwmSjAe1TDkwyyVDesaMuVgKwP1Ni1",
  "key2": "5qazr4aKu4MtEW1119L1nHv2vhJ4vPmyKgzQiAWGuVFzwm3wuVV1WW8kAL2WsmBvEcFJ2jUTnfWG7i4gExXXV9PN",
  "key3": "Q565jSR7oQontSfrsEqH3uRc3pbkYwB1DKenH6HAh9sb4p65TnjjWzE2aGmxN4TJvZ4P9CjjzbUEjeq6yb4tXtp",
  "key4": "56udMbAD1ZjmVKSr9GTpppNPwXY4HkCVEcP3Q1hMNQbbF2KDvW47sXx94eAc6oYJcQWHWoBfDgp131kgcYfqgC2S",
  "key5": "3bzX756RQcYfUL3P9toVdinKUDSJFPMvcvg3ArAjiBJ4v3NEvVcRUCc1Ci4uwLy3TtdByPQSPHnj3NzqP26KGNiD",
  "key6": "3h7Xk5mnStDnUe8VsHqh5QgGi2QZsAdCtw3s2fJypBTk93WftNNcXp5sVEVSfuF6PF9sbNNSZqbrqHtnWsMmWnB5",
  "key7": "2FxX3p7NJRgeiaNZBbUuLLhGhxkEh3XyYgpCndMFs3G71r2gdBycZ1NGw7mELiMyB8htqw8nVnMzMWBx7nDUgMqZ",
  "key8": "5eyG4aWw7QoTWey3TXfstrnxRHKghLWXwx8FT7JmSx79dq83MNE8nFfGXQHE5wdSMcLTbCsjzPtkNprfzyHQZnyi",
  "key9": "5TiqLWdQgJe9zcVvHnyR1Kgc9NxeWJs3xrTdFGwgFNEmpf4ZFdJRxXEEj8gawVN6Xsb6itq9CzEpHQsBxE4g4WoT",
  "key10": "2YEz6Xp5fhzbz5WvKd4GMa1RcZyXonHaLg4FyuipUQ4Yj8VkZ7jzjAyXx9wAy6ZagNEDgMvav8pxbhsSgev28dj5",
  "key11": "2DqxY3qSEGfRpTCaTpKLHMaX2t8CYL1bPF7N4eaUBAyhtLUmFapMrfvcSr8WawFQEUpWhses6SJWhYXzE713TTKX",
  "key12": "4mKBENyZCqpS7oG4opJyHfxqLmpo4MBK4W2WnFBbnYQgb8s3wEjE87C5FifaFQtVXEibkRCcKwsSxxpKtSoHAm4c",
  "key13": "sNAsxMkfEs52PzrpH77V1MvSzp3uJSMNBvKDpVHp4XZQveTTNyv767rD27ivVsm7LoFQDbuXPctSoZBUed33YVi",
  "key14": "tGjwDRtDQ3eZYVW89s9XVRJ7pfZDEJUomPWJeNoN2e2u9n8w6pDDBtJLd6yKmTn1ujFCjJgxLGR7ktmGa4sgYmL",
  "key15": "2WurVqSUymgMoWeJemjP3JoyY9Sdm4jK4kJE5spcRcZCV4azu9kw8u4LYetuwRo7off3xhFVZZaoayY9BBERN9Qf",
  "key16": "4azryxJussd2cb2m6wnqZinM6bDgvuisCcN27UvSGK7mct3rFhanx6W6VmWgbQjo8BBo2syRnpyj6yqcG99zqpWW",
  "key17": "3XbJvd2hxqNdsgTnBuAfQsnA8gKnK2rLpG9pztVWijoiRhXedGS8rXcuStTwyuwerjBHGgzmGn2wFGU9fMafu3Q4",
  "key18": "4nLf1nQvz6ZPcQ5hjK897rAtJH8Lcb9rXDCy2Wvbq7KeqvTibNcjEF5ajxLbFkVjLQ4AdbSWgf6mVhSfny83BcsE",
  "key19": "2hj5Adicv4gmV8v9yFr1ET85DTCrQ1QzDpBNRYQiMYdv7bMFbQx9DNrafs3u1FntMRmQDVYesKy3Q9gsTFR23i3H",
  "key20": "DC7X8ahGos1QGZYR7rjpuDm3EaHPaimtqQNCY5h7nuRr21XVsdhm2CphjsozVNZsKTRrLCcNJRzK1YyLen9X5JP",
  "key21": "657MkWgnXGcANneudpHm9zmRGdynVgwY3vt85nJFPi8cqinDW2D6LPkUti3rXtpwLHP1ndV89q2r8RrvNa6YqBgc",
  "key22": "5H9FqmhBhA6MPz43qx6qrNRJPqj1JPq4naDXEzLLN68xiyfAPnMopMvAsaZtif1DzcFP7u7sY24q31Kq5ACVWrzK",
  "key23": "5oJjgGCJYCNM2RdvscotxNnDbXUFhvNfqY8ak5z1YdgzjigWcTLYpmVh4ig4cBSx7eCodBSwFCPZrsv5iJJ2zXiM",
  "key24": "3qgWFgX2d4pbJtaWD78Gnxh77DrT6iM34myqNT8QWNPab4Lr1MBAPAaeDcP33MYR4xMHGL51FLET7ShHaKx6HYTu",
  "key25": "31u4sn8X7JLeSHPFtFFfj2q32oxtPLP8DvM8uAXHpqQWjuz3HxU2oc9uZ9ZdWY9WfBFr7kfHsrqKBhGFi3kqvn4w",
  "key26": "67AM3CQeYKnqC8gtZzwXzteGgHdBSPNMaJCNv49c24sCpiK5SAV1aDmvaFoHQBVQfD6ZTgpAFUPKWDuomaihmFw",
  "key27": "2RKR6Eeo7kUzQcihKXjC1V37qbukcux8KHbVgwpxpyL6yFHgmyB4xU55pAGvLJ2yoQj1K6vV6ApWsGbzPLWRznF9",
  "key28": "2bruJ9QGxAVF3otjhoo8StvJyxothEJLiAtcDVh7SrPVSuGJqw82YxngBgVcZLpksL6PBcvTzi92m7Y3C2NVwGgd",
  "key29": "cWZGwbpK5jvjoVxWcJ6qQywruSPXnZrCFJKMm1cbaQQ1KutQYR94jNNPTjQhXziZk5FVw6maNMqzksPdckBLPPu",
  "key30": "2uvubAT3CzswWgxeBRzk1djKHgciQFxNucpXXS2Ji1J4nSnU8GJPw6qv76X2YaugtsW72mydPYAh8MfLXQDYQgY9",
  "key31": "2qedhiyR9dXTUrExtHjJCM6R44tbwg3XKfKhUY4B9t8CShZjBQZ84wvJTesmoSxRV4ezFQUCb7CRrBkxumA5sWqW",
  "key32": "3aY7jb9wQBBFWSEXqdC1uEqyjfjw4xAiAArUDztEEtfX6fYdhh3nt1qcomUyb2dephtiavoLN4uHJcDCafp5ZAdg",
  "key33": "2qPA6gGmfSmmRfjw1VeEH1hQaF2r1NGicdCpcpZRvDYnNV5yiBTu33ChTizWSGMTRk6zipTNbTBHT1DL2KmXvFig",
  "key34": "5dBBJYfZNv4FDNY9usyEBFbq42we86rc267mDkiFgZLuWMoZ7qvAdNYpkG354shAUxd7hjnsTvgiBD7wFDBBuf4E",
  "key35": "4Km7KN3axL7cqDHofUyNL9mwmMvSLnHYpQAQ3enyEZVrrjv3vjR3ZZgmqTFZByx4mTYCm8BE4vxmLqbDxVQ8aT23",
  "key36": "5Xyb3E36BLQ1h4u47rbMbityfBjiQ6ZoEvMFkaWiNBap5HpwKLiuCvwAAo3kpwij2aUyiRNzojhAQw3UB1Rqh6ft",
  "key37": "3qUevM3qajPgpy3NMuCJ2czue8u9jSbAh6oavLcJjtign6WHfvAaMTxYnJXdQjqC7oWEAA4nFQpFFZASVgi4jEpg",
  "key38": "5fFqA2HMT3i9FKEXrNAPioioyfo8i6ezssYjF3Z7vjtdxE3xTqoCBNCMmNKgwTDAU2ndUpCS8uBrtGd48uVdSLUP",
  "key39": "5XoNTzF1JvM6aSTHTUKidUAXDTdBBGW7yy5P9LpYd799szb4apozCpaoVXPkS8nzYPBiRgSwwqrGN3v4rCWJvqAs",
  "key40": "2FxacTwzSbrAxgJLjQmANdHj2q4UpgHPJUpmVdLyeGejEfQYEvZ4Q6wckmP6XAeQtpRQ2vRJcVZQ3xmx53P3y81i",
  "key41": "4tNdj1BPL1NiFkNpRuyiLhvcCb1DHAiGmBDN9vSsyxutuRpSVm4Fy4z1ALqGBtXAYTo8csrkf9acgErnhVfDxjQ4",
  "key42": "5QWkWQGwy6whVe39q14jxTie3QdFziSPd2nmDrGcQjuLg8ewkLHCM8EW1FFk4NydZ66eForziFvWMK58fFPjahcv",
  "key43": "4A1gCFSz29cfartvd4F2kxM93e4U8K7dfrxGYJCKAne9Jc3GdbDetagnjiFftk1X6HXR1TMmdS4HR1RuSSaDydyf",
  "key44": "3jphM76yhFMPPzhDf8fAsD5Va29dMAUp3wbfw3uXm51qsHTfcu7NUDLSvCtrVQv4wzaZoyua96JQgeaNKvvZFewb",
  "key45": "5sQupV9eEf8auvytSgVM3h2GxqVofnBUzWC2wfg1nHaBpZijTRCzbp2p8YABU26XANgHdWCnGB5Hs8S7ftCopdDy",
  "key46": "4ZTsESghwcCGSLVeMmbuJ71kzrasUhNehF6adGTEUmcAN2mk39E7ow7bpRiNVqKWgnv9CUiqooRWS3abLeZYw6P3",
  "key47": "4VGp6YCC1kPBKaGPWF2d7bat5yWchgbFdPgX9bdzoD9WhWWHf58GK6n1tKT6PNN3mgmsg7GbrBtFEgv9oWRCqe9e",
  "key48": "424paPf3DBPuuQfe5EwvVmcpJEemUmCsKeyAkNeeZvRxRbLeDmVDGqJAbwkCkKcSpdQZ5vpdhnsncqSLZomNGumh"
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
