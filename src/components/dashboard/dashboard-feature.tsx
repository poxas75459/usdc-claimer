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
    "3RQayvEz8HeaKQMacb26jcFBwFU5x9ksQUi6PtLkQKSCSuxBenkFK5STKKPKk2ZdgCDDVFQFJQriFrx8SF4Rjfao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7EEZE4tvCjPSSw61CZfLd4PiMmg13wwkL18ijijibsmhmCdc5tJqeWZn3PTbiw5GA3E3WXnkPCTbU5sAXpeK49",
  "key1": "2wTaMCP1VMc6KejWTUE1uBdm66ygVY2ke9MAj4bn4L6G4nBSEii37o84LKYWv5e8nepfLWLEh2VrXa6HcLAP7rWn",
  "key2": "3D756XtdhNiPA8uKdkxfWLRsKALcpYv9qmJw3qtJLX5T6m5n1aiMHxAfoCXzVnW2G14XHhF1ZVKUmXBPkZC4QGBi",
  "key3": "3Yis1t72nrxy4xDMPCUCymvzGs3KNshgRBCj41NeznRWGfyqUS41qpqGTw7ZPg1EJZaPxbjF2y33LLDu79DaQv9S",
  "key4": "3HhUkuEHViXC3mbnhtUDhTbSqELVJrEo6jr33q3bqE8frb1XhjQTDxHzqNWf6kJEC2ou7CCfWXpKEKnrKx5gsBiV",
  "key5": "2EvHT8SXukhdK8FZpLjDvs48xafNFgyhYRTPs6jRrt2d7kLG6tiJ1jqbc2ygD8Y5i6qBaUA57vkNAYLJaSG7oZF",
  "key6": "3FzJCXpLiKyFkQZkYUrnJNcwQCGAMibcfrucaZuhBRd5obhU5QZ8doZ9kTW89B63eVCY2fJnVH5cK2cuHJPzsJ8m",
  "key7": "4XP7GeaWNBLJmyuFbphznpX88kkqUyDQ69MNFYXUvxeSBESCL1GkitbKPf1iywvyKfH3hpwhx9Rq9A8xTvcTTfAg",
  "key8": "2Sz6ourFcguHn76c6Uxc7Jz2ePj9JDsv29zxnyfnVFtAdQUQHG4hVReMc8Pjk7qxgrfWrXQSpTBABJ9YuSymR7Gu",
  "key9": "4KSQKPnEA2wabQXzZztxYER1mDJJx4QApoNDRi3TYB9Tc8zQ3RMp5PMYT2z3SRc7wv35iL1Jxgz2cEukaqhBew9D",
  "key10": "BHTc3BCgaCMHq7NYpi8xtWUWdRTgi2uwYBGEUSwA3bjMupNutvYxHVu6VwSeiUaWqFEyToviPEpGKpqu9xoz711",
  "key11": "Vc49yPCeg1ESeksaCzdzuGXzyh5bkKTn7KJDCzRFxqrhc5ZXqEUGt9JWbryWqrjq28LbGahYV7MCacTsvjeULXS",
  "key12": "2ztjShGHeoWjRUWinphkq4PRnH9M1eB3q9JoG86nRQD9yCGvRQ23M6YZUQijZz6fZi9B88aWBEh1dJ4CwzytHPz2",
  "key13": "2hC3tXHkNhHXunVLQdMbK6UjS82VwyttFPwyDJbzAoUM9Wk8BjxvRtxyXthh7riCvBDydW28hmhiNYWwW2bD672k",
  "key14": "4CCGYrPp9ix54NzXV5mVBAZGXDRGpgbDj6x82XnZm5cd88ukKEw8MLr23Dt9mgz826F9aGdoMKNMEVrf44eQTFcm",
  "key15": "7SiUduxVyXJGqK8KpFPuiJGRH1WsCXQuvLHu8LG91QBdG41Qyc4BQtGgg7f7Lmq2hf9xaoFRGa4bRwx7oAUqmxP",
  "key16": "2QfJK3NKUDzqJVcyXXZrcDGDyFHVyecTemsz4K3D7FaunhFjgiDjfqxpWYULSCkHhUstaPKxkVicxi6QVkgdN3za",
  "key17": "4G47m3goru2HqgLpTYWJLAG7xUDHUSBdnMopKZmY41Wf3fqPYV7upoYH4JY5trAiWTmNv4mJQxtWdH9Mc9ZCFtKi",
  "key18": "62ihXviS91VcLF4pMExY9W49gCmvobhwWjH48kAhVZcFbjWJyX4Q5smeFEufGVtNNvFSUAbSEQ5D6mHYadJrFpnV",
  "key19": "CLmk9e3jgUHWJFG7DHPK2Ner32nk3u4aNpb5SucS4wKN4g9nXa89ygNCQCp9vMhxAhMi9kvkA8p3RonabD3PiXs",
  "key20": "3ZbvVdkE3TPGUUYbKJFgKhWyh9AEW2v2z4tnYL8vqdomqRMMJdDjD4DxDQeYRkfFTokEUGz1BSJcrq4ENZMZwBPT",
  "key21": "3ReSzq9t3dX6WgE3d7QmkyN1G54uDaMsvYKiegFg5UmNteUVg5AuGV16mwrBaAnQue5jDzFih6o4jwi1dJZF66nR",
  "key22": "pwq9mZpPHq63KFZ3PFTo7Vxc2cqT5xshV6PLDji7NoFKCRiakS5c3SN1LczYJccQypyfbWefGhTYBad9zBQmH8G",
  "key23": "3FyPTLKpcwNhfEMGe3MKapvyqBXptasMeXkp3S6kH9Logoo6RmFqP5hzQppZeEAxAXmWWgUdTyXRxdRGgqfk4qfc",
  "key24": "3yNu2UzYLdVevfayc8UkWm727VPuv2fAQTiTVWgXuNWahfBDsyCTD6sPc2FLc3YdWi9wh5tr34PWc9XgPWZNsw4c",
  "key25": "3sgcjyQk6bZDBYPAehbeK7qw6ZstfeXbfKfuMTKc15yzS1FNFBraYfdMYsBogHwMumq1v8TuwtCgTSP1archtxxE",
  "key26": "SiFc7RWNdHg64CSUjdW2hHrz42JsZcEmfGL9GeRhJM4aBaKBbkZv1SuLXDEre8uqMrMWtBQtAD8GdPxKR27vZAV",
  "key27": "2U6iGU2THcVx2nvkDxcJSrXnfSnzMzx9wiVdzbY44BGTGcSvAjAsnN88P6n2hfv37ckvS6mm3nwxcubvPjtuPPyP",
  "key28": "2Jt5dhzjtkkxzcBXwiQWfC4MS3n4Esky3L49Zfo2N61H82DvnxFQGFn3KN3tBvwFSbBTwic684ub3sVf1bPyEwsV",
  "key29": "4wsCKZ5u5QFKb4XuBwGppim413h27f2xqQkNZRn5crPDaU1S4122DRhsAthM9euRjLyK3Rji7ww2FibGoSph43RZ",
  "key30": "53GmnFhoFhqjbXXyD69dWRqaekzVnUcrJ1zo6sfWbLxR6zHXEfn934HVhok4QVMNPqUCJBWaJfTJStbf1jx5JSPx",
  "key31": "JdC4KxtmeuunPqSZmjMaGsfz6i5PbpvYWLuKUwvLuoMNeFJcoFsVKtBTpddKqmrWnJm8s2sHXXzCWbHzvyZsiQX",
  "key32": "CGkeXLqrK9LxA6pajj117bhXFfPQQakkYhQDSEeqs6zMZzgbbq4BBNgQsDrD8ufojtHb5wd4J8135HcYnQZvZLi",
  "key33": "3MqNHFm1vMKFV115hjrFsgCdzQ7HSB2FFcEDzZBMY447Zw6xSCAkMwX1xrs9kfd5wK2vh7LAvQ6GhJjMm1xx9Ypg",
  "key34": "QZoZ3MVgd4c1TPwbRh8bwQsR4zsdZUD4M4rM4CBwEkbd96MykKYE7HBf3gqLpHWpA9LNsXmSXEv9PPuUi1GLXWt",
  "key35": "3iuQVYUr63YZsYkhEYWjQG9rvxXkMkxAGcYAt2tfc7V5PLQssaXEDgptdkKhesTzZrRYT3GxJ7kC9rL6ZyfbQLrw",
  "key36": "5riJcfVKGKTaLtZ2XEUqFjydBk3cbsoffZ8sZbhFF3jN4CWaQU5sq8foZcBnsnapAoRLhSUpDqNvKaPJz5fCubXL",
  "key37": "4C9FYCgNrote4CEg1WovPrQRWiviiToEQE1t8VsHnHbBdFbKkqHFbzJfk43qDWLmtv7Tcj3ifkEARQSGxJXTsFbn",
  "key38": "g3unUk5thXtvX827RiU3qgWo9ZivoKKaMcYKk2wnN9zySKaeXc5MjfRe5H2YHVQNUq1U7TUYSNaer3Eiqs9wFZQ",
  "key39": "27hVReKPAzMtc4bQTPzLEzhp4NC4iWLjsvwQghDz1Hbd97Wae3Kyv4ox3ZiDuTEwjdejP8aiyDJwcrJyREYrnCoX",
  "key40": "4gWGGoa1FJJ5PZxvocfbLvpvEUWMjXkbezpemw4yZijojNPi6MwsDkPKGScm1NbZqkiaKEtF6VJBupe622qsSM6t",
  "key41": "3BAdjdx8PWpgJhr2tHDQUaYWzeAEibVuCinVnTQtSQ4sdmC7a46ZNz5zc3HmUsjjSQSEFEXfeM7mFhDTpdLWtX9x",
  "key42": "4FScc96YTLgPiBe5rCE5Btdd5fJ9DPjZnVrWeDsvawq3zszqvyZNYsGgVsLZ3RBdLDcpt7BsGG6VueSNQBw4PbS4",
  "key43": "4ygQiRaMySUxKqByWyEW632HUH8XRVSCoQkMHE6q8yXZRNAvzUGCgvHU6PGg3zHPW96LHJqHsevN29xfBi6KHKSc",
  "key44": "4Nm8nH66v5onjRDQddk2MffZATkin9UuuHAWVFNAfCPa3XpepA79ziCRqyaMV8HMX3YjzAdvZt5278Hec5xNWkbf",
  "key45": "3tWf4AjSHwRyqfhYgC1pMK57XQd172jjXq3F8i71Wfa7enxUCpQ53f6VfmDyQc5vopYBM9ypYhcgCp4nB9Jv39e"
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
