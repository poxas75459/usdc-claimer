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
    "FgBe9htQd2cpd87wJBCXGr1xtAg218tw7p6JBDuerEyYRD9MmGvgY2cnPMEbiDrebBPEsWF8xG6g69oRrcsvx7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTtKWvp83AC3hyjBR9zLieaerogPepXuoekMoA5Hf5j6dGJbwyqMJUh8PoxanHavSm2KCB8CwUSiY3GcNBk7cgZ",
  "key1": "5pLikpUkofcY4KZwS1KWVzgHovwV9Fq313udTvjPKnJQNXoZpftyov7VkQhSZjdyDnfe9jAZyvKMan1mYpgtwWc",
  "key2": "32sDqvwgbc9RvTEKdknqXHu6YEQFrFAA2zTs7FE1pWS5HFwAEfZSz9hF7qX52XDCD5Qak63HLS7kk4FBy9pJ4uC2",
  "key3": "28ZSKhvLzQ3WUGnq6zcYkPS69aXKJDQNEmhxCZGgEPU9mT37xeUaDGQoKFJPB5bH2eRcWkWfEzoAXuBQVNZxRFEn",
  "key4": "34nD92TtjP2Wum34ixSLTAApKryL5xb8p7GvEzzKP1VUsdZ4UCoa5BVBDwU4nzWoTZfMaLQpP9AyuPK856vZMSJe",
  "key5": "5hR7Zi8CyEGYKtRpZ199i3Vc9HrXRuMdP6K6fk4APgzsSsuwgtZ92z9ByTuYo46pr7jqga6Q4SLv4Ud62SM78Nzt",
  "key6": "5obr4pokaLE6MuodMfyQLDe4sz1NUYoVzBMUFiqQvHZXgNAYUqwvzBEwRhUqLUDWTgzqyTSUTF5R7s7TZkTDyp5H",
  "key7": "2A1nkvh3qJkywjYnHkHc4pDX5utXDWZk7xFv3jDJMKicfVuKohkus6j3fbtPpKvZeXgSTfTqJyrXez4Me9G3Gese",
  "key8": "4CSYesBcR7w45GzGHKfEbLXVcNU5jDeWnbZUqxZNJfV24nxHEJraPAzySjiG7VNRsZZX4TfgKLPoAqvAyGQMghWK",
  "key9": "NE1AU2piGbw9dd8NafEbt2G7GmXbFgZCBdKG1Qqd9TmnM4GYdHzuU2EdWyqhjNq7pFDBNJz6ydnUEDBvz7bVaRF",
  "key10": "2bVpZSGXYCb71j5XXG2G3xqacMVrQsBAhxCvTyNGieFaKepYXzVZB81v5trNUpRGdJ4bKstSocyUiEMhv7VJjbAx",
  "key11": "4TFhAvejpedpLpM2XjZz9tc7ofZH4fy14WKgBwFoNP2tqkCkY5iNMrKsV4XNWFXJBGFoUaEhcqnhdH7ouc3dgJ5H",
  "key12": "4tEuWpiyxzq7gVBxeBcwcV1MajarJhbsYevmEXGoXXb7aFTagzU3PZR2Coabjn4tSvVHtV15StzGXHWPwmHjKv2C",
  "key13": "3WUmZnSdcwGCMNjoTVYKHATPQNVXsqDnjETKHuKcN5zQASpzPt9AuAES6zXsYWkRL7Cj55pEygjCfzMqWGM8GBWp",
  "key14": "tzwuzPouUeZ1AZxSNPDxjQqrQhsgnX7od4x2mtXrbfBBhmD2XnNVcW16oU5C63LThqQRyaaJgK1c3nDwkhhpSW2",
  "key15": "3EGQPX9bVHVH6imPn96mXcvYELQCthLzvomPeVkGNQ6dv4fKqU9vASmidpq8agxfhDrGDncVYuua5RjJesE75JN8",
  "key16": "4rXZKqeECEptuZSSgp4Rana9kQ3KXSdowrUq8FSsoz4RYxaBwJ2aM9YEVBx1p7yu6tmA8TFrQ5jbDjeJSVqPk2EP",
  "key17": "SpuZiUzCk1GreDpiPzHTb8xLiF61hihBCHNDB7k77cRLTtUnrAhy3ADkF4ZXd9hCwUKM4Jj4dSrxcPHPedNShyC",
  "key18": "hVCh3xcnPCoF2JgNAYdiik5b9kHgiEPi86MThSBBPvss2P46kPzyEsbkPThfADMkbQn5eQaG1AtCSThnsq7um4N",
  "key19": "2KwbyACtvHZ2yT8NC2VevEYFEPm78dNRGVLtb4bFQK5VwY9EexiTAE2rEB9W84ceB9oCf7v3imkaSVoLJQKQofNV",
  "key20": "JELyxM95L6FRXvS3NKBGxjtsPAQTdkEBnxpgaYJJV5iayYaq4KEcUeVemDVBPbHV3p6evFp5K6v9WF2W4KUfiDW",
  "key21": "XSYkmEXxyok7nfMzz7RgSzcyFXqwa5fN98ckUXqMkFB2ujAsqs5yp7YA72knrteC4zSP8bWuWoJbzxKe6H43yky",
  "key22": "4W73DLxgm7p49bbomc1gFJ2KtBtRrzZgf4fMyeVn73LBAwqrouxcdvDpUs5PbF86rytUsE1mtK8ewzQCoPRQ77Va",
  "key23": "2PDudgFoqvsM35RjVgrboc2puuqATYjrQQ64bamt21HhDErytkKzPTzohTdQZYyds7VsRH1gX65XiNB5ZfUr6aSY",
  "key24": "KPpUiN9AvFCXiRKXk8TTWpe5ixgnN71WDTB9QTzbQAyGYfGExwHaM6GHYMBw7vWXeih4is8hv3Wh5kDsBQRqshz",
  "key25": "iHxrU5pBRawkLsFqBwm1N6MQEn878wBHZWi7P6eNkf3h7VgyBzJQFSDM9xTJs3zmtXK2m7bcF7J6ZYx9nzeHoTs",
  "key26": "5P2SLFjrnvnyoLtRox9KEdZhZt9tFVqNpZuL8TCLnpkPTh7c84MPuF91QQV8SPzZ9aq12pwDwFBW3c4CmsMbYFqF",
  "key27": "56PbXSXh8LBwF5T8UbtxtJpWMtn6vmVRRRTj9Ac2v3GD2H6RziS375cVEdrQ9igc22wB7CaJ7FKY9Kk2qXgTy1W7",
  "key28": "iLPoL43c7JSn7BBFVuw3xcdFieQQBqkFkGoe7vEg6fN16PX6kmvRVGkFLXRg8uMRPfpoUeARpx8yag8qPKoiv8w",
  "key29": "4WbtzM9qp4Rup8LhZTbH4SHChtkgXyCyYprT2AFETPPjsoDy1dRgPU5gsrh3QoSuycbnQY453HPzRaEBQVEoob7r",
  "key30": "hKxz9f3SskT6gmAaa8r45YxSdm78r2FBdC73aSZttNJV3LXvqF8RRtdfa25cy5R2Cpbb1Eq54Pdh2RTkRDUPweF",
  "key31": "32uZKMPhaw21SWQPDnUCJyVSds9QraPuuhQWXRduBpT2j59MpqyNgrq9vmgoVy3r7UjNQQ83g13iP4F7FKdXpGGb",
  "key32": "2yp8oiReBfSZNGjyqmmGPWD43JXGkrJry6itsNGZwDBCFBcdHY46fvZdkQB9p6BRSFW694gtVyshkEebFomTdf8t",
  "key33": "2dyUFLfrnzLFzZyckEc2RkxZjEYGsgaMj8dJ1awuSrQzYTovsQVrEDJ1EJTG1PGTCZzByCCsJdQrBYQTQ6nutaSD",
  "key34": "5LLED6piD1pWJu3qQHejoStXG2YeiFQUCmT1XuE8CEvx2DVDZihsvPPamsvX6NxckfFCF3aDfFPCYwmexx57zMiz",
  "key35": "3bEUQsYRLJYj8nDYCZcuDn2mWzL4kwCdWnTqKjZt9p2biFhNddaaostxQHdaY7SDh9kamPq7qzUx8989yjZ7RwPX",
  "key36": "7SJRjruvtjiQv7zV2ZvevuUAoQCWvQixCVQJFA9fp91Ao3P9a1oVS2BET2QmHofwPvndCbUTa9h96zXCjLypUNs",
  "key37": "4EmhaNtkJYA3s9zfbtZvNYR4mgQv5y2Z1u1prRebXKwtuhwPafp251TiiSxrKCrzWHh4bs1X6FJYK4zf6Pae5i2s",
  "key38": "48ixMCfJZPs4Mkdw6VzfDsgyHKXBd3ShUZ4FFYXLETvZqPPJVxrHPtLHhA9rBimjpjaZLoWqpqvbivFZShUXxYgi",
  "key39": "4uaPvKApwSgxStqyAfQtWYJdU8eDCne6NdSp5GP85PBgkhF9TZ49fUTt6gHn7zxr15foa3B9DykkmyKoM2MYLY2P",
  "key40": "tzyu2RYumPX3J6HuTUpfciGuGS2SJMZGQhKVDnazPeDL48KJj6DRn9PHmQuwkDe911qVSXMaRjgKFyVKRn9vRM8",
  "key41": "35AwNuu9XgH2bh62wHqW5VrPHLLWa5MZWWFKYzVqQhTn5BCMzVn7Ykhbar2D6JRjLntQMg8YABRye1mC6PZ3LCxC"
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
