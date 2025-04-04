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
    "MfcohvP9JQvkW7ZBNN2335tkftibqjQNGgnpd4QwDamAKfBvurSCHS8HVrnRoJxzFLhM4Ly2s41TKAnNC9M5w7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CccovALvHTns1sCbiKM8JvahEocQUmTHcQCmKZxC3fgNqAQ4QNUzaC5AxdQMY4Zfdn6jVvY6xe6SKFs6YZy1Yjy",
  "key1": "5xytEt3BJmC8heMJZbtknbnkFGa35jGZWDQJMuLQ3i9AcD25wDMQeL46fM4LV1X2K55U9MM5Mo9EZjEV6qc6d1K5",
  "key2": "4hGtXAG2rCnpTHKuPDfmYi2PKuzoMJmEGfcNYmW1xYdqEqR67Zm1hVZa5XaC9oUE2HFjiWpvEaFnfLrqvKz8zCm1",
  "key3": "4nb1fDBmaq9YEWKSzq1nj7pEsDW5Qi7pckLsjZHUfZu1hqC1xZiiNncqPsgq8yrTguMMg9uHKsyujqrpHB5s5EAA",
  "key4": "3ppNVVfPJajFpamdvuobWsBD11hriwqBfXRyKzR6bvSz3kou6ZjRrehEJhvpjerkUr5xHdFTszA9cx5e7AdddSCU",
  "key5": "4PTacNipYFZJcGDFJzEuogG52HXeSkkDqDXWQqbokx9tu78tb4jDuQM7T5WKju6EkHNrFJYdc7twEZSLxXetXWA7",
  "key6": "3fXCBzj9VZ4FmnhbeUjqQqDKf8XNx1oxL2iHWvMNSajCQ2CSodxznr93fvsvDt6btrYqJjUfWd1NYBoZVz3ArMxF",
  "key7": "569c4MrCL3Hb2fsv2oNzd6mrMc7ZxP8mfkjrWaTr5ytU34Kzc8TjHqEH2ksr3uBJ7a1UocAbSZEp9TUJjueXRQCT",
  "key8": "FSjxCzRgWmQQpt9V7YW6UpZj1k6HjNbmsMAQjopAC8mbPfZr7HrSJ9wf2frVK42wMSXc7jTYioaYBU3M6T5ciPf",
  "key9": "4BwfkXVzdefRAZASHFTsbpnyVyT8HgyxvdcmZKuAm8DQ2c98a54dQXd1sBSxAQSj3bo4cVFovrSnN8AinTvaUmY3",
  "key10": "5ez1W8cAqwJyNpDCEqG4EP1WWMWVnpqk85o1UhwcqDoEupMzw6wZed1mVAsoMF1wzcvY8o5v99Ca3wpVTtBsmrjW",
  "key11": "3Ta3auX932BTtK27wrKitEhaXvp4A3yiztGbc1y1gDBtvyzK39j7AnKzL3yoo9ycBaqS3GxritGnFxx1yUmeuPxD",
  "key12": "4ee1ehoyziCfchA2xnnaX7d9A8e672LYkpbr47zpdDv4Mj3isLBt5PLFZE4Tma3vz6D3WgNyz23cVeESCUuQK1iS",
  "key13": "5FQUCPqP5DU2izbbn8QN7h5JFKJPvEQw2CZkrv3XWJU1Fn1KzsfPbASoVQh1bvj1sB6TthsTWixR6r7Uu1DDPaG3",
  "key14": "3Ro2xiuWXry7FXKeNH62Z9q5pJMFtsTrW5zbDtty3htVqdkJjpjgGiZgEzyrA3oBe6UepgF1KbvscStXrQLjXCyv",
  "key15": "4zK4VG4ztSvzczsPAD5KsDQ3uYUZVnmku7ZEVQo13fVq9GvaTSe2yY11HVYWkkW6bS65Ym9U4ALvoZ6yNZGFPSVd",
  "key16": "2Xj61FSAMWi4m2WEbkCH1D7Srauk4c8ey9YxxGtqyctkvkyR2DnUJtekUvEz2qDUdYtZYXcFxXZzBAiMbgXLrYuj",
  "key17": "2Z2uKhv9pDwUPCvUvgdCSCCD2TFm7i5hWqWNxwDuzdfmA764jjpZQA9rVfpBTCSbDYKpoFdx9LB5cYT57LDmZDML",
  "key18": "581KZ4zCrobwjNVoF1MyPZdk1TLe8VhZ2ykn59W5xX82LzMYh3V8r3GhTCw2VrRfkLRtHrHkqdytdGzNKHpFAirF",
  "key19": "4D6jPyi3koKuGeTsJvWaf4R5ggrUm6h6SRQ3BSZS6JCiyAX6EjqFYubsoQquA64CwWknDNiGsgyLAEVdjNhjkCAo",
  "key20": "4qCd4MmYHARfByjAh8VZDh1ooWrm8PfCdHX5G7uwHHPZJ58L1WDLHDqAU2HZSWVDvdERfbZQH7BUEdc32yXaEGkk",
  "key21": "213vbSk7HBKEE2zmKuXMMpWfJEy4b2JjQz8M5cnY2Ea9p9JY2uoMMTwc7pqRqAubSmjfSFSBYoaoZkX9naJxVvHm",
  "key22": "WUEcb1DMD9Y6YCh5CPzG7PVJdxzZ4mjsi9JJhKx9ayjrsnA1FHe149HfJEvNcnXtq1ymvVrttPY8DXc5T8tKLB1",
  "key23": "2UDSL7HL3wGNGpzicihCUa5sbXW6vMNMdk7XLJpcLQZZHN1W6jFrTbtSuZZvFeS1JyCNfJ4JtVzKXh1chq93yt65",
  "key24": "5SqM4EgEKUquEWPCihKrTEm7jbytuKtQ6okQXvUJAqzsNhGBuXab4ihWqBM6vmJW16QLECSnnvzxj3H7Vy9CQDkt",
  "key25": "WbsG9RRMQcB1w8STGrTy8e3KK4B6zBmYMNHxh3DLNepL6jmUTDKB72wJ5Qfifg395UroBD4vjcEbLTcuTTYRAzQ",
  "key26": "5xfdxGz35Ayn6CRqqmTL8gd2MAW8udTJZmAYEJgv5YdGN3qULe1csF7buT5mnBugxcPCfuSSsNaFpvEDBy9kNhr",
  "key27": "AcHsgVTjKMEEfg1F8E9vUwcjv3axehjLfZKNBHyogvrHTQR3aNWDGCF33fj87FsDbAg6MWFRxk87J9pmM7WYwon",
  "key28": "4bG2i9nxCSdA9c7USgk6jdT4ZdFRqwvheerqtQTeLrPxdH5bWJiG3zp7z4BvukeZTuHsXbei3U9VUkp4EB6Z5RE7",
  "key29": "2n4t4bM9MYU99QMiTpNvML3Ew7v98RZpMv5zEuKT6sHaevmn2S6Ek3B9q6VBxtkbK4wKuM7yXWKHBn1yyCCdSUbr",
  "key30": "4yBjzrXqvZubN4oLHPNE86eLEP9hxgc2Ge2gUwQzE5Sxs8heHf4jgCK56UX9ZUS1gz5QPKpiFJyEVvrUNMuT8p93",
  "key31": "3729BurirKFXicdF9Styfe3BzV75cDZydsDgADLt5LZ6an6dM2fn2Rfcj6E7khrvZ1fmnyRQdmv2xVDkdroTnb4N",
  "key32": "22JBzcCHkwHq4gCc2foCKn1Ge5Ca7EvjhKSVN6kREHqyVuhN9MU8uWFfnmBFK23cGbaEm3FDpyVJBj7njEc17UaN",
  "key33": "5CwjU1rGRieSfumobo43wKMznZaLiXPa5HHucfjJA61gLmXDdH9w1ZT93AwLf5CGoMnLgXnj2eNJCh4UXT2SoiWT",
  "key34": "5iECCGCwUU6U3eopNDZA2FJCRD8pAQhWwpPgaKAjzDq7jXzrRunYrtgkZ9Wio8csz2QPLZbVSJhAPzPjYzi65dSA",
  "key35": "2M6Fo8McpLGe1qfYeVeC52FVDf2amHqrPbQ6rM4EmACqyN3DsSYGEEu69KZ4nu9gTL3ZcFzvt9YHy82WxeP2xNRW",
  "key36": "2jJ7XEYXUPcMsfBkbDJdXWf1tVFexDChtJpnXorWEmLssp2LDD2WZoAWNB67z1AJ3M5BhjyhZgdmV6sXhd6SFHNj",
  "key37": "36xkbxBhzY5gAJV1ropfgtdajezGSD4HfDCAMsKJx5X2MGMvS6YozEFd7qGppTrbm1rM3erHa9YKan72xejy47gp",
  "key38": "4J12BWb8bQ8JduPpu6HJnXw93M5YihBtcZ9acLsigFccYkTyvEEPpSg5ZMNnVYj3VNRMtQFyHTkAQNtr2WRRub9g",
  "key39": "ej212swa1bPL3zHT2BwB8irRyVxN7yHgXjJH5JKpoQtDTB6qMrssiXmZuiZF7m3JCZdYazGwMC3e3K5GTf7zmmS",
  "key40": "29Vikfxod1c6HTiRKcFP96GzCPhLEi5orEz2E7JsyfXyT2iS69q3KLx5KHBheFNUQ1jUuKBnSfiwYQqYU2VRd1DZ",
  "key41": "2Pm48rPtDtmeiivy4ykSEFkvJ3jWtsE9xZyd41RtskDRm3TuZwvh1DZzXZ38jjfwgBsgtPK6Dxf75iqRMQvhu6Ba",
  "key42": "26J8Yid6pjPrYMyq4xmpYRZNBgCuPtNTSEw6mLabP95V3dw2YSXyhk1sLqDcyVK6RY9wyPYhFzZCzcgwP3pFLh2C",
  "key43": "vy41pzPWCGFDXfHUBcNnCr3fyiZwM6xPXPhnFEJpaCRPKLmuVeunPVgrnrwLXuqjDRmwCRy62dzjvfC7Tz37eXK"
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
