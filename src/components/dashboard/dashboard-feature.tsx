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
    "2air8SZ1mBuvHpqt8rziHwW94bC7vH8GVoZKfixTL4iyYHyeQRjjXio3ko8UCdCdDza16vG5SZZU2ePAtb97PJFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zC68BGZYtQ2yerQRurpaftkobLrZRSjdkG3iLNDesHqyZBkJo55Sc6ySz6Fe4ys1bFhnyL6Tg737tL5bhqoHMKU",
  "key1": "2hL8kLQrVRzvp3pRhunysuxm1RDtmYSYq1zW35cBs4278QuSwdo4qDsqWmo33uo5QJhRUvdtfBXRr7jmk3VTzCiV",
  "key2": "rt3gfvqFXXWAjBUWPoL6USdo9DBJ3fGWzh8ye8dXt9TApNx7gEtbphuMY25bpCcQKRLGrrbdMsbDgryNZgfiJBy",
  "key3": "3pHRRWwPdVuZXCCB8MUeVntmKFH9NAmGZptmcmkVPRGj7VFobbYPSiucXVnRyCWawVsGjgmK1fDrAExgqcZ8stAy",
  "key4": "5YKVdhqSRgbbjCP9Y9J1N5tZRv4LZhVi5JgmesiLs6NtazHEu79ksLE5YQ8t6HmCdH58mUA7jCdpRiyxzWuZddyv",
  "key5": "5KMzSkvNtzXifuqxJwCS3XC5Bav3ZNnwcrkyMAKZKF1ceFXXAEkWTrbdVuhftqZfaPnKjje5B2GgoXHgg3BN4PwC",
  "key6": "3rmd3zm7ndH4n5xXLGV9C8JqyuDjfsSGJM7rX8922XftXDeV5WDQMi2MdDt31YDu7te4CkKiSrcmYGN2LvjueYvC",
  "key7": "56cqadypgfRCFgF5chXTenPEe1KWmaubfXcpfFHC26mLieuqAKGynRYcqCfyui3hkCdrb672XVy9ez89Ngkk3BRS",
  "key8": "3cYVSMEbTJuchiUWeUojN4P3n4vzxh7VGU6g5N6A7pk8ffDLc2kLfhshzsEqVc7f9NJZa4qG73Lhh4ZzDzFRGjUA",
  "key9": "4S5wQDhwbbc9RyQivBw19QDCqm6AC1MAs6tU16AGWXwstwmjs6qPUc7YcGrCjjqP7QRvc9eCmdzg9BGswpR4zc5E",
  "key10": "3d5saPbK8qhxKyVUs1hhxhD8G8usNaQvuEMVYaHfRcwUsLniK84UefyGTxqz9EZAD5bCfBWnZZwaPcfU78CnGd4M",
  "key11": "5G6ZSFSVf9hiXFqQ4soCZr9QH6rD7H2MmkjZj86Cnw4ovmaf1543SWLXMe3xqAVMSNHsXfiFtutTSUoxxa9AWm7B",
  "key12": "VShDrnZUadW59pocKk7LbYLnTGFrDVrCa9kspXmzFt31Pin8yJh1fN1PR39NQfEz5WPtfe4y3KFzTxWdmfR5jYG",
  "key13": "5H3rGrqYKQF19BSojJD1MaNpHHPNsk2yL2uL9DS278rYN1JUkN51b4jG6nzzDV5Ur5iuBG4BnjjzLpyNnF6KSiKr",
  "key14": "2fpFFX6to3uNeaqw6ycNCTxkkasSNYgmu7CdUYgM9aybCzmndob77dLjtLMm4mtJi27y7FJZN7BErAH8wZ1zx22f",
  "key15": "36i2awcM1rg8vAaXXBMiqzmDd6piEjH5whmNJ1mWpten8t4Lf4dkYpndaWEF1NXyAFmo45F2ZMRfk7sjBMTE2ttC",
  "key16": "359ZhTUtnvKsUUTeXEF7w13G7obsfKNAEvWZn2iKyV3Cs7roQgVfLt8UBkmybwKqjGB6KSkb2LGySw8AFaVgQkYF",
  "key17": "2xBj2oGpJxhqVPYKVuzbVVeoqTMZGFppPc3HtKSVqw6XdcEi4Yu1Wj4bRW13AcxRkUHHA2fZJFnYo5bB6LpknMS3",
  "key18": "2xYLLtbFzZw8vPA8xLPaxwbiKh5DAp2Zi4RYgbVeqrQUnzVUir5gYsKmxPV1vGMvQfnkHu3MrerhcqKP8DswAGog",
  "key19": "CqQ55X77zyiYbcFJaAXjWydu6hjmA3yQrbdiBgsV38pv7oRAwyYGTB8e6aVekTR1Vmoq3UtZJ3VAxgZitS5nVbP",
  "key20": "3gzyD6wmyjnJXs5s9FVHumwso8JtAMHtuEnUWKQEqpvbwyWfwmjjdxJ8JkdkJM1eaKn2V68vrnUs2QBuvEL6FzNh",
  "key21": "5TyY4ckaKNGBYomwpEwYN2d7Sdt4QK8YrWB24iY7Qi6qrfsJYK5wRNhsrzudVur9JKL5MQ1B8hCGgBbM4fsXY7jp",
  "key22": "2NNEmsSPaK4o4TdDwCFywvFZbjK56uh9swZZGSsbAo93VZsdoFg4snoCuYCHUhbmZXYfE68L91FaCnn4Q38tYPz",
  "key23": "4XCa9Wdohkv56XFpJaJKiqr6GdLLSGPWjLA8ZjcvcAib7kHW18ymcBjy4xa2NJiajbkifs7WPbFr6EsTpKEV9We3",
  "key24": "3U54oQhGpJxHPBgMGgKF8g6H1v6JDN5PoFdcHAW49HFr7m9KH7WxV8N277g8kZgm5HM4RZsJU3khJM64UxvFiAJP",
  "key25": "4VWhVJL9ReuDw7do9dgKKqBgvA7LJVPwrXYisErxGP1SmwHF1tLmZmbNAtRipxBJCvCokNNMKzAB2KxoFiQyKwoR",
  "key26": "2ddFyNC9oDnCS2g7qgNyEKktwtnTVSbXykpSX45unYem67vd8w8juthEg2Z4GtQLzDCYuxZmfwHJKhWiQ9aLVcAw",
  "key27": "3DceMnqQoSstbQ8c3pEiWsQved1vgVsyMuFHxaFTDSU4NBfebaLaGRpVrpEB1nSgax1VLTr86FobktETBkZCpZSm",
  "key28": "4Dkvo8D427fXhzm5rnwA4NuCo2v9rjAj7e1z4sZpFtUogExzxQw27fRf3NN1JBUyp7mWTsmVyeTRHP1rrAGc892f",
  "key29": "3CnNGU8ZRvUN21tAngaL4WDHZ4pW7vB83hWtfvKVi8agAze7Kg6YjYWqTKjpwd5eQ3UE1SugyB5FsKBHoJ2HBX7f",
  "key30": "r6oMr4M7maCaWTG7zKRd1LjhgXvNLgNh6dy2RvMxfE21mtqVxzt6AFKQABYSHUw1NYJzuznMW4thwXJf9UgnDMW",
  "key31": "53RgqL8kP98UsG5tUzKqkSBnvRyx8mG14XABGco4FHLzGbu6WAnTQMkAGC9e8H17m1737QgeQ9LsTU9oqcXzuyM2",
  "key32": "jSHnaYwPbyvQfyf89x9Jgat9Epe9xWxoYZ8wmtwg8MM8VkKNvzChNrgJupZ26TXaB4EZjmrR1q4RtLgnxHYPzfj",
  "key33": "42VSaHL7kV5cCLLmSBqvHYin3Xy7ssWsTd7XLi3b2uUnQ5jhhF7AbZkazzJn7ntMRqhqgzz1e6zcMp4kDoWiTtZj",
  "key34": "5jYtkUoFb14VEVZcEN9cZDNM4yX6RSFxfvabfr5yRPJqZhFnfHwuJDtuo3wARgAS3bDqSiYcXXwissfSxYs55WP8",
  "key35": "2nCbWvnnovGA4GqEPcQ7qftqxVbThW3gCz2KiW5aKCLQrQTckxM37gdtwmUGSpr8HywQ4YneC3Xf3jz2a1Jz218r",
  "key36": "MESDfcxovPKyXAFLCCPP6tiruzuowGWXsruWHiZmzqomS4Big9R6Ype5ZR7JFqXVkVJMoieCwvniBXoqCnQxBqo",
  "key37": "DY6rZQKqyyYXFjv7zY388i8dEJy8c7QgJ7aNTaXF1fTX1Y7DRvyiacqQBKzABZnnmFsd9JrcijUqMJE4CEo8R5Q",
  "key38": "54Nmc7zqRkwkXWEy9bhVrjAVQmnpCDBrFR6fok5iSWbMrsh7pJhktaUDLxKfJ5iiWxCbAwXMWisQH8Ji16p6fV59",
  "key39": "4mBBKhXnBgk92ZKzKFfQ9UEgHyactTN3c5RPpvWKwDHW9crs2wNMhF74RtgzdnqzF5Ec4CGN4jxuLX8FRRFjnv1K",
  "key40": "5y7jiT6uJCePDywm6U8znsFwGrd6Uv2cXqifM4Twnjxajw4WddCUUbXNWJV5SLT9CoMjMsa1Xa5RMdYZushT8438",
  "key41": "22EzBXFcvec1a66CiDxtDDujF36mL4Rmi9vweF9ohkpGQ15hnbjbaTw7mytj85tzeFnCofqZdKVdc4DRWka6YKE4"
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
