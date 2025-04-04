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
    "3Jn3cAQSgNa5RV9jiPuDuwNPA2ZSjbDpJt4HCnHPLzoguwdS7LVQ2XWZFHhbna8JwEe4v4pheeVp1VLx9EQvUTyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPufPeGBw91yTYg1eeaqtkqqdYwxnAuHyyRwuVUMdWUg8xcGTWC38NKvZMQHmFySDaWLA22CTd6RveoA57VVVZp",
  "key1": "5F3gKSdSewJbgrVFch3SEtHSUnwj9N2XL7Kh9hWsWZmWuKgU1rTmaF3mNBr4SH7NL38fsz1Jfh55NHtDVLhC1a4N",
  "key2": "5447hzmuH3Nc6p1ixA2hkzreFquTh3wrtQqm5S4sKtSPzio4DMwUssGZNDtGArLc8TFdtMRxgc4WLhU36tTgHGbE",
  "key3": "5d85SHVBHenDQDzDbp1KtBmz6zXrwpwJz7PRHoVibee2qGdBGHDz3xUBHVqKDft2tFbh8br2u1ZGswB8oeMqoVhA",
  "key4": "Y9uvF39YKjY4zvNmq2SHmfCQoGrDacGx3DxzveKn5pkuh7zGVTpMcVvwppfegLTEBq7hWQz2GyTJuAx4inHj9z7",
  "key5": "54HfqHVJhWuj15uCTvsG6pjGi6btHWjjZxZrBY9rR7TY9ECMYcFRDbMBe4jDqvef8f8aGFTJsMNLF7bqmepPRYVS",
  "key6": "28zXZbGRsJf5UR5GUhw82Zx1iHynBrQz6DLHRk1FWFvq1xdFdRHd1JUdG9AFrnPPNZkHPTj1MY2b2JoXiyev32WR",
  "key7": "2EAg4qhtY7FE4pjJVX2agEy9oXvN2oyT2nitH8e3Jo8wXTBNRN4EDHgjpd3Cu8WbGrXxQk3B1Mt9BW26b4GXiQ46",
  "key8": "3pjwvobp8phCwdnEhXDmbCgF7QC4DfhH8unWbcNjpc748iXKYyULCvohfKRaMHYgs5NfKb4p38i29XNbt26eJECL",
  "key9": "2H2ZENiXqvYLMh69eBz6yfDkFoqYX2V5oJJGCYfg4Z472vBqPYZM1hNvWCZ9ztDV398BV3GuUQX22w5Bdo2HUyLR",
  "key10": "4yWhwckGYD9aQDZf7YqDHH4Ak8UCJMSZGBVMLciPwCMcyPz3FgLXPjFADvy14dM6x8uu2DXNzEM8KNMxBkHeUo8i",
  "key11": "4rvq8nZAQpmvirmyckb5P1PNUtEGyFK1zuCRGMwo3FKPQfxNcYnxctTqwLrqiwQncXk15DjyqX2u4crGvjZFLvCT",
  "key12": "ZQsmeM3VybSzGgTQUNioexmEV9qvCNx632Er59zFSkD9BiGy1da2YuU1qsXzxjZYwSG4ziHeddzLDTBeLfSQzvb",
  "key13": "UaAs7SerB7J5kb6jSaWyz3gVCP2cLpPFFcPZJ3xcEN4jdrPYDomWfsykyGu6B1uy1hrPDY6AKHojL59bq84KgcP",
  "key14": "3z3HZMPys6uLtC3umxYT1bmufLu5Sj3194uepNB2TDX5hWe69EdjhTtPwAQDicxUZ1K4R1PpK23EzLEuai5tGLjN",
  "key15": "5WJmUqHBLqixv3xs7etthx6vHyhuCmaYqdxjc4k6mMisGpay26tyFXh8ua8GASnbd5YvUgZkDedbVnMipBdLEWqL",
  "key16": "64sRizV7XRhD8GugDHZ4Lf8wpcrCBRW6Hegwgrc1d6opr3UeUAxKHFQn83R6ei4VYWDLuz9fCKKK7wuVbFtzfRgi",
  "key17": "44qW7mj5BGb1jMVNLJRGCoaA5F4E9jAU4xgncBMdq6uSo3C7c3TCAmFrjzJPNrBbA2ZDpaaRgaD9vW5xHJ7xWWsU",
  "key18": "3cThRxPMojTfe19aw2bXdfnGrcKJHTW3GiWYivduZ8g7CKmv8gjN8LqWEF5aYe8hp6j5hqWECT5eNJxyjtUYwNEr",
  "key19": "3sczPcCUqmgyv35gfLtWtvcSeHzWBz2ZCPtJ78PCUGmRnjyhCc23H1unnbvhakiTNfrjiMAD5CeGCAbd7BPWzsRg",
  "key20": "f2ayabMJAidb7RsEmx5bnmGeZGv6DpCqSGyvNvGNATUG4fEu3zykZNP18wZzSJUc358KChiR731b3L9MFPRfpNY",
  "key21": "2NtmzAxvWwmaisYoG25YS16HWURn1ygbypwWtP1xonR5L8AM2rp1VHuwVEJVDWN3XRJKnoKbmHSrq5r5K1tQx8LP",
  "key22": "5u7TUDLVZbnSZbQYE2i8W2APcKXH9wT68TtK9pTX4BMN4vFX3PEbxvb755SX2vQujjC4QL24SYX8Vz2symjAdzBn",
  "key23": "22ACmHM6RQUWjpdfM4xj6frvBbzKLAeE5Bys67zfk7PYzQd28NLLQyZHTx3MYexSdvRFQexiVsDSAD3KkGu8anGW",
  "key24": "4vq9WBwZ6dKt36htDtgPYZdPmWdPPnuiyg3mzSVkiecreNXCGRpjV9GVyChJ4qU3JFqSiFDTvUypkToeV2yT5Mt",
  "key25": "2rVh9d9X1bwf9TPgW2fCku9Pz9KG41JF64rs2XfBpy8Gsi1ZLqsawk9gBp3F3HBptP7kACmoMd8cC5AcmVFJNUgn",
  "key26": "LUkt69MU1SPEDNzJSjN6oWdjWSyAxvabCSNycBMUsnMxL8LxujAJUffYpnwqyr354nEznDCD3rR9uKVVU6sGtKt",
  "key27": "5VWX7z6hZQicu4kSokNYEaQRvqPQ5U8DCzw2zvh2ySju99fQLp8mB9rgehD3tWDS9jDFeARwgAHpdFZXvJN4gspB",
  "key28": "2kA2nw4mCDgZpHNFMouRj4ZmnQxks3GkzptF6Qfcc3gYBRBi4g1DQdi3whPKfuomRKXVQHLoEHJnmVCDoWkBLA7P",
  "key29": "2igyLQ22za2dtUzyFTSZQXn2PHVKxdedLfz2u6KPUg3UmFskYAG4QN6VkckzcHSSq9ELtaTR5SiNGfop5ZmGotJB",
  "key30": "6E8xaxXNsvm7HBpo1SghjM242AfThRjQ5JyZ4pVt76cFLLsv4JxX8JHQwmHGusN6XKAhmy7Ef6c2UQsiYD75Lat",
  "key31": "3bC6VLRvHe4zYBzUQgqf9ojajL7bRbssP63S7ZEnbwdfeJHZLrEi2pYAmbCtnpA9xsvFXov7a1yF4WPKrbuyhKPD",
  "key32": "5UnnapT1jxb8qHwdL2A35LmvFnRzQyvrTYNLAc6bVJP252exV4EXG4ogyWqPNBWwt18yGSgVxWrcdqy4KpDyupyB",
  "key33": "4GyYdCJdYnQHKMrSw9WupbsdpcKi94BFGFQNZ7Lm5ESAhkRYQMh5wTvcT43dpzoie37camA45meNNz73b3LwN8WE",
  "key34": "3svya9dGn2G6npeH5XLj2B7uVMhcPREvhGEpm6qvhPfN3aX31TuxvmvsbXmUFxRMt4rqmmUhqB2RpduWHpY79YLJ",
  "key35": "648gxcCkDYeAbRySnm7Qnkt5XN9yPhTjzbko5d6zv2Mfd42xMQWA3AUa9vahDsaCdfwVJ9p4pYSz4A3cw2KHwhPY",
  "key36": "4CWLsEzU5qQY3BDj23D3uTme3e2eZrQcBmNA5n2shSbukRUe2UPpUBKPZGaoxSAnawjbvxvsgeQfZ23cEEBTbyZW",
  "key37": "4tpZfbb9YQLQCtF5DTcEP92xeQWDB2kqsa61oX79rC5e3w9mJPDjkRvzdYcwwHMgYv3gBfTr1zafb6ZfSCiZM8As",
  "key38": "4uWMGgYV6NoFEzR2KtygjPowCTs4MM6YLLZQ7n6EB7dYyn5S8iMBLKGSGyH6FM1HUBsWPRZyXr15oMn2HRuhb2Qx",
  "key39": "26JNaruph6UqtDyjynFpDSj2kJmMmXzVfLCbsvbZro87WTQXxZ9uowy39k9yuuc8w8fH1KNpP3nbWfy57W1xUfgy",
  "key40": "3HqwbrGdXBcfYV93ZoXzka4UynR1ZtBxv8o73CnF7HLoFxR2tFyf1TxkkUGZMrxwnr1n2b4NNKp6DPnvph1u5aHq",
  "key41": "3TPUu72n2WhyRJ147iswUULwdXDq8tkDBH4QMQDhezBybRDbitpG7TTHEHT8Yo9AXTqYWSS5qWsBfn2waUJ6qZkD",
  "key42": "4mhUUycRKa7fpGT7upoC7m22RtFio244HuvPcs459f5a8uhSqHy3rTkxz16gHjt4uXDuyiTrKJRRGJ35GVRXD5xL",
  "key43": "49qcfW7UXmeqZYXXpNyzv71n3ocsP5ZLz2YqrJZ7v5u4L5gW4aDF4YVtbnUmKajj4ucaGN2N9kjYcamAmPcac9hi",
  "key44": "5R6wPezFdvaMETwVexqKtX47xUopxSVyKQKc8Cwno3y7Meh8Gt2GTo3XJXzdg8r1G5JgM3Eq28GsX4d8CCGKiyMQ",
  "key45": "5VkHKj5YSeoJosqbMr1uSiaJPidBHDPb2Aa6vqkFhnSiXYJJacLXiZTtTRPHoKeQQHaSQ967K1tA6p9TdCKwPV1n",
  "key46": "5titVY9FN23BJxgnYLtCu7D7qPWzSFzagiVn6YsMjBDQqMG57ovR9kVYPRfcZHUM3ZQbWpYU5FTji7KhR17buaQo",
  "key47": "23FEgrSXLMnxWVM5w5ZNqTiS46aP3Utwzs3g5waW81HKC43n6XTayPVQV6fkDV3ZCU2HW3d2sPJ62y75uPUyepL7"
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
