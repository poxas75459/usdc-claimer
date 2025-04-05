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
    "3rgJUqEuCTWATqPKDv3VRrnH65iuH73BdY1azSes2ZVa4E57w9nPGrfegzvJMWFu8cPGV7uuA9hPqgArAN8h79Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYWEusYC881yG1NfPhG3mKqo3Spj4qUL51iCowbbkv6zyxfegV5m9EdVCPtBMZEaizdNA6jF3Hybjrk4yTi4qn9",
  "key1": "5JD5MpdT5kj6RfKdb5xv8CztHfGurqkLUztChmQDCKHBLMM6om5fNQ3Tf2dVs3hYPBjoTip5DAcmLahedY6puYV2",
  "key2": "MQFL5hKVkuxb1Bn27YDhJPicJWoskn5DYdF4PXcNvWuGU1aA9AqRwkghQYwcr9UrdNjaE4r63CwRNd9zcnZRJ9L",
  "key3": "edsjzhDpQ5m7B53fLcTbhq9MXPKC59Ub39ksxvVfv6B7Nu2uvohv9TKsKAjXeHWewYJLBY4L7wHy9xcoPCHF3Fc",
  "key4": "Z7cGQFanonNcX1D1LB5AmApwchndoP7xCrfRSt4H38yYVQdFniuWKMf6RieTR4FoinNT1pY9cnXnDNj6p8p4vaP",
  "key5": "2pyAxQRPyKd8gvFD7N9n23mRdgJDnArcJM3SbZJAz9b8aDqeKfDiwYx8MUVCJ1zLVkNW2fR5uU6ewMPDMuNVE5Rf",
  "key6": "2SpRorkTzRJWpypVNut4L1UToYZXSzXdmsmhm7sRmwmGrQJBfDk3MbGqZEn3z1rYyidcKx14vitK4SUrQN8bPduP",
  "key7": "5xDcpxkvx8g23FWnHd7ZPxE7KpynjjBaYjzG1XfTMGEtbyUnnsfnphQzcyxz8DT7ohGS8y26FaiZmZMaxwgWu6ud",
  "key8": "4bc64pDNVygSXXLgJqikA9MxeGC7cGkxZhMaHGTSjjdLYakgaF6zEFb4TopfHyMhT66aqhj1bcmDBLGHkeW5fYQd",
  "key9": "dyfzrDYPQEVAmM1fd2oDGU7g6Mi4BQFHnadMvDXppafSFqBA6JguzXjYeTB1znCuKZNdTSrDXMmwLrPdTFK6u2t",
  "key10": "5kXcXTARuPmhtA79wpK5eASPiB35oX2ZBWozNUo9o2x7SuPRY3aY2dj9CfS5vkAm3Gpo64TgmmSVzs63KMg2x9Vz",
  "key11": "57iDbrJWC8Bqz68Byw1kfaMJ9BgEcBVqKc9vig5Rw9EeG2JHpBnnP25kqNFSnNFoBvkuV9gqAmg4snZwYnBwEbyh",
  "key12": "23nichGHyzXKRnDaQGh3mjg2uu36M7XLuzs2ug27sVxd4SkPhjamzrq51hcMNa7eQm998PTfyrV1fx6DQED3SP8E",
  "key13": "5HWtLKJ86yTcYeRW62qWqUZRku9WkgyH1KdWaUjNgJKfYto9ReSL7jHpnk9xqagWR9r43ov1Pd7g5qvDekv2MkCH",
  "key14": "2GjSsTtxiPwkP2pjyFN5DJzgaLh3ZXsZAFtLc4LxPQVF5LdbwqbiBiihzwtCaoQY4ZzKaYLo3PrD99aWaAjLNpsh",
  "key15": "3vLfvHU2W1yJg3H1RzDSXwSNCcX6DCQwJvd5kmZ4SZzQCeR8EC3Zvy3r5Hx4F3bqx3SGkBxF2pCxZwC3c5z7L721",
  "key16": "egqRdAfQBMrCZyf8oFvSsZEj8mNsdRhWwR96BqQACM94PFSK13MtWtdVRG8tVqgT1dyouFeTs81cBjpEehsWEmt",
  "key17": "3SKGpmLvGFDS9obdoHtMNHRD3kiUxPcUCMWjAtFTn97KpnUQXsTEeXVvveuJMk4DYLbbwzgf7gscDHcUe1xPhGqZ",
  "key18": "3CqnZimhLhfeVLvKPghhYM8uskB1Cf2dqz8jEdu3fpvmAgVJ4NmAje7G74AiidUM9PJ5Xyjme7DGgiBC1hsKTsrQ",
  "key19": "32cphq4CGLeJJqPJAWJTqQS68UWdK4CBScsf9ouKuk349TGzLgYbPrPJ36cZ58oB4p4kC9Kbjo4kXEU8qNqmMT8y",
  "key20": "N7wDtbdR9bN4EH5Ea8gH5qEEPhuLDNTYamb2N5jxEdSmi9u1u61xhi7fG7bFTiY63TGwscAgyy7Kjv5Phj3S5Bb",
  "key21": "2PjdUnmVd4C1cJN4xML48JYKV7Wz8GWhFb3r7A9a7aHgHvi5ZJX9xhpz7CiiLpEnbLCH1fqbCvrAmDtBSEUPkpDs",
  "key22": "5r9zh9pFn3cvFcNzWw3VGJ2Y7pafwyd4PWjLcKzGH4PMguf26mQ1cG6AW7oAmjVcQaAu5MVTbSgE4Yrz2skEZgCU",
  "key23": "3rsuXze9VWtnxovEFVVeJgcG3f8FuipbBVGGDz2BVaiqUMyYUvGu1Fttd6JmMAcXWELFvdCn684g4rKv97xrx5sE",
  "key24": "4ByG2rQccokagjeiKrPgRyEZ4vue2oeaeCNpuLpcpjzTcoVoJQWVTjVZxZpLBgT8zTpvLumMvuabn6QV5P1P7N7D",
  "key25": "27BmuSbsREHM9uQvbuB9a2MVzd3Rq5wrfBvs4XUxFBKyXxTQfAuKYgXNmsyv36ch41fxaSP6tt6oqSnrjvQj2B88",
  "key26": "234s8TaXwL5oekR1ctZ2DTKzn7C6Jnt8b54a8kTcFPQw67yfjMH4DctbuttRDFsWx23xvgB8bzg4iXLFahHJAXqg",
  "key27": "cCXXdVK5LD4Byk5CdGBzrnWPk14KzuXsgowi9mxbk3evxNqzgKVZroLqanGgDPc9zJSGf21r6rpdqsgxgePHhWA",
  "key28": "WxBMyohEeWbNy7zN1jpoFNdUChmgxjutBEY2nSTakXdrv38q7P5oMD7rGJky39G3g1SWv6EU9LPar6yv6bPV3uQ",
  "key29": "36prV2GHpusXp6szrcCUEddYhNW7pyydxnMW9NnHQ4z4nULTtALbKwyYZt2qZ1sNFdvGP8bgqrtukuieNvGUVXLf",
  "key30": "392GLVuU6pzx1faTfPXpNFQcPKvQ7FnzR95ggPz7KSVLDicpPKTw1mp4DxUwd6fPcnRmFfA2d1TYuFCx319p6xMm",
  "key31": "4rEZWrdyjUU5ou2H8s9p9Bjw7FohLQPnjT1QgtAcXC8DF1d6ArrfdnmKkD4xmguADcr8VnF563VifXCt6TcFGMvt"
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
