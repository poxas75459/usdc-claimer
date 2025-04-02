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
    "3U5dJkRT5rQhaNMSxukpCFt6UkRxVh6yJFPoKM4i3Y1AHctSHbDJk1xhR8mmoxHwrfcUyUVy7XRp5ZgTVRkWBHpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XpguSTZK2w8HT5JBZBCwhWq7aW93cBJqkuSW8n6JFYdrkMNz7MDLMrekeVKZf4avG95Q4YEzq9Feod8LM36d8Aq",
  "key1": "3GsA1krpfosVPeay4oY6B15QiiPfW7MgRGRVTMWswaXSzt9ag6Aoo51JhXAk24MFaJEEsjnjFgPEM1nCj3fwVwe6",
  "key2": "pbaSjnf9ki8zmpiEpjzEnRbwE6out1SmEwQjnLT7az9scTNaDhmSdY5ikrwDQZHP9HehKgB1GuwnVLmmPkEACHu",
  "key3": "2nU5d6kSyLxFkCB5QukYn6UmgHdsszDF8nvZj4VdJf6bzuFcUBWbdsxm5dvBMLRuFTtS6n6tYXAzZ7KFVh6PZJ7h",
  "key4": "5GcUzqHUYbgp9FDv8TukGtwpNAzgwL1w39L9mTLxJmQh7DW8RV6tdkxpcfntT2LVJhpJrQFy84vQU8fiaGMh4dRA",
  "key5": "28T8eLihuR9phbjqKryj3wH2Yi6CbadDx1S7Jqf7F8GtLZayDxMq9zQox1NDW8qdJ8D6XRgkZvdothLaACris42p",
  "key6": "2wUaNzMw2j9asb9PMnmDyXD3z7xShADNXdQuoujvjY5Rv9EH9KD7mqZrXXLKagaTNgSLnHQjpxyaHzbWSRnhajM9",
  "key7": "2o1ZsEi2kUJ4YHrsJZGsDwRewxisDj2R1VFCjUW8vAzraD55oVyrsdHQVqTRtQiLBaToAaEoJu4GCD5WbaCoKQht",
  "key8": "j1QHRk7KQAP3vnpY8dZSPQ86V3JY2HHtRaNVuazziczHNKEwgP9Mi5tTBwN3CZ52rE1a4Zj19mUQByxDDcdEfQZ",
  "key9": "226pRMq2iYgZdqvxiVkkL7ppj6Sk2t5wuz7LHV3xh11BNCoNpx6sadeg9c3QtJVc9Zv3Ayu9ytx7mygoK6wTDdmt",
  "key10": "66pt1m4Diq6Ynde1cKY9uYqsTPw6buBi8cBeLDnp78cVS9SE3HEt2xTjnuSKjnML36HDFsnNyJRU52VmUCsvszvh",
  "key11": "Ugg5EoEnfaPgqnrdxQ6DNKCsB56PWxkfTx4op9HqotzZBmBWgKondt4KRP1dekVLtEjasJjzayuLiectSDXY2ao",
  "key12": "3pT5JCVXLdDcRVUwPbhmedH2pd8qcZuKg6YxaFqEzBdCFajRxiNbu1Sfai1yWZ9v5JiuCLpmrqJPNnJMexj7eH78",
  "key13": "2wvN3bXhEKt6tgsm9ffx5ypEYba8FqiytBUhxpbDQVnHkqadswCtFcJBowZNFA9HFsYtDribvymvDDSdzJCgMb1H",
  "key14": "4pxRE5FBKYYUHpTDJDjopU8Ju8j9L7VdAYMU6WC5zVmDMaK2m93nT3DstR5yURgoxk1ihDDJDBQCL1rMgCgBFWmm",
  "key15": "2yfVtS42Quvpx6AFGkU47csbqCNc8FRBztKuVg2mWE9q9PtdX2HkYTDnsysuZM1YwY7yDV753jCCBo42qKHkc4ut",
  "key16": "3QBshNxe9GkxGXe4RFSrvWxYj2ZTjNyyKhXw5v5CzqCPsGcHjakrEmAbfFJ17Wvu9ybPrbZZV7SzYCPYpCEwDALG",
  "key17": "5cdpJeYRr1JxYJSi8E4j9ZvfhH5gUYoJkWJdKZKWdxJXUWnGDyTV4eNW9X65fg9TkDSVytwx2KpS2Nsr1fmVGvb6",
  "key18": "45VzGA63EBuEevKfdi4b2NyBXmZmXGy1BA8vuhTkrjWBLay7crPW9BcVuP596F5VEuKyKgm3ch5STt9nLQjq1ghq",
  "key19": "23UhbGzsm6FQBtRWT3hzukuTmxu2eaxxNotVaF2WFDZiRNQ668H9c6zvrUyiz2CtQJeY74REW9oZ2zr2ttDHETtv",
  "key20": "5Et1EETmTfQ8y3w8LEF6W8tqMYag69ZjEMJ5YKcquc9cBBFUCfdao51BYFaKg2cEyJAjEVjY1YvjraqbGcqfJBBA",
  "key21": "Jh3DLuYtwty1BYvzLRWRFifCYn93aheKxWt3qvqGHxMWQ5NTv1Mqpu3bWeNToLVPzmkMpwFPAfrz54aapkTdnsh",
  "key22": "4MfDkvQDm6BWqxsndRwe9EQWFFU9XNjTydBFLoQg8rEWASZq5AfyFCmdzR22G9MFfhjrKM3LQQECZANgjYtmJpgb",
  "key23": "5b4Y8S25xPL1UvWNaRiQQNbdchhGjgHMEywjerT9T3inURN22pNVxkHZvnquSqsUFjaiQd1Bh91WKpAghVqEtWKf",
  "key24": "7xhARS8juFCQ7ZETZ3maXC7GQ3Y4yxJ8UQ1WSECAYVfZit6DCkp9sjqqxMtRa9e5wMG5ES6migVnc4wV7j3F9x9",
  "key25": "3EADNFmkadBGAmyHw7nRvWR6cHNWRwk3t9vh5bV4UBWqSdkAnJsygn8Ci2T33Gjxzn6RAAUuDAZXp7L4XQ2aH4G7",
  "key26": "2yNByWcBQp9jNy5yiShT2sFCR3wMhCgUBbq5wC1Ycwopk194jH1VGpoSg9HwchJKkiWBsU7etobiEu6mbv4kUPTB",
  "key27": "3VgBuVnR9PiEWz8HFyRaqxEanRdhNHKAEFNSG3WUw8HB23gdt8mDNRptQjQtMJqw2Nh1vufBoV1t7NfQHdjinzg6",
  "key28": "56kh8oAsez5zWzP9vN4cymQt7wmVogPreXjJjPNvuPcWSDBPw7jpP4ojEHTiZ7bEsJBmUgcEEcC3ftQaYgiokRxf",
  "key29": "2kstqBaZ8cbwUpkHXqpkeEppUp6esPzH8kr9ayvE9ZtcGF3n4ChbdMCNn5R6S2wMWXhiqAPuKkZQGJfwR9TpoLum",
  "key30": "2R8E7UqQjrgUvsbh1cYpFAHSy3CSApg4z85sh6w3M921DiQsu1acJwe4LsEnQhMGTt2Cop1FD7m9Zq7uLYpFSikm",
  "key31": "4dUF87WzPwto3x3umQevnJvDSags4ULeYG4hMmyLVLLy2mSseDXAtM4mSLpgnhagEjHgNLRroMnvwinWHXYxV1aG",
  "key32": "4BdPzdkFBg7JeSKJF6mWjbTi8t3ELePPczkLCE7ZSV5BagcZodfrvNcSw1K7f1aiY7ZmqtSHWQ66epwKM8Gfh6Go",
  "key33": "5DfPu1ByPuFEagxiS1QsmDE76bocDz23huRmGxsZtfW6XU3A8Vu1KrH78jUVgHx5hnBRdeiqm28131CiW5NpQord",
  "key34": "JkF94uBPDVA2egQTs7AkWXuJwA9DTm17eAn5B3pgi2F92o9GeVPFM2Mx75qX38AsFUb6ojv1i84GGiYVWNVkExe",
  "key35": "3tYhgzrXZb9SqfUxXZv8dtBXuLsDW9yNahEswyh2bzGJdKdNa3HGFYHYJzwYRPSSCW2jsHcg2Tw4TkDTDK8jTa45",
  "key36": "2nEoWhERi5uvhEMakHCtwS2G4DFvA64PdFYWxqSRVs2Fh22Pz97ZnVifUCNNHZ9vs3yuV65D2fBmNAaUT86saEYo",
  "key37": "6NPfxMZRb5GUWtKuKRTcP3i9yKqWjFFr4fsewNHn1JUD4Qcq2oEAYgMGASkMkV4GYGo5vUVzPairhRCMGNHhtLJ",
  "key38": "3MmMBwTvnZ2CNfmPF4VQiQMzQ79HyAtAUiAW4fw5As1kXpvx1KdA5bUYTd2nJYj4uMLoSwV1P1d1UdgSNPirMUTq",
  "key39": "2gbrHNvmRPZFUiVdVrae5WxdgCTQRuANyNNbX1VdrK25iwsfK5qJkhLAXVhjWvzg7y3H8eyESXLY4r5umMQEVcMv",
  "key40": "292hyML5XNPBpSwutdFqoGzebmHgLwZUVqi4vHdsq81FWjQyne8E3hwxmeUUN6jqzTF4HoB8ctaWz3pBB3bLik7B",
  "key41": "2ft4FfSH85FGJqnPiyyg13FjPJSXnDP8YPnzYPXo3tiMHQAwfEqhTLzCotUP8Knkw5ieJ1c4BBj13AYiKbhJbYAa",
  "key42": "5tHJcmTsrdZFJJEHuHU5GUHKG5zmD6bxqVSbMUutmijdG2WnCab3MboQRTGJP4K5t1eb4D8BXcpgsmKXfoNRv4he",
  "key43": "3U2j6JzKNzhALZyFV9WfBFJCKXfGFFfwnbabcNTxjqP7UZ7fdt91iNx6kxxYQx3wNVo6mvYrPu5EDC8i5tgu4yUC"
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
