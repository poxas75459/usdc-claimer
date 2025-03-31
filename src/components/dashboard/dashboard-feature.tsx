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
    "mqsGoAzdaPkcvt85zQw6ZxJ1YPNMpG8NhfYFnUzgo7UDm3n3QWYrJEQn4RosvvXgfrn2rpPAF4LvxnBV53ByMRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmUvWcJNpH7BRwwAD2QNUGVmRfn82QCGcHCUHZrTUqgYfhLss25LFiWG7nQRAj3NKEp2QkdeddPM4yySVsfifbV",
  "key1": "DYmWUwsYKZmWeMYFQksqpWYerMP8FEeQbpRApUz8cZikySXJpRcBJd6LzHXhVQiRkJXtZX1fAGqhvXcpUNPJgYC",
  "key2": "2GjT5DbsrnxJ4iZwMRWQqcap48eausdwS81eWaWb7gXoAZVVLZBMCBjVkp6y98VthRDN5yAqtgJAvQJuTeWrQGb4",
  "key3": "3oTX2zqq6J9JfuNzn6s1Z4uDi993RD2ptu5JzA6oxbbtnqqHLvL86egyYPn8gTN4YYvsYqgmqSDxwppn5LZZS3An",
  "key4": "mU4hBDy39MYGkjWm88jDUeGqxEXWS2XxmmQLXKHG3esmqJTQxZCQL23YZ7p62xxBZEc7kHeTUy1yAWqRJqcSx9C",
  "key5": "4grTc61sRTCVjSGf7z8kiD6PS8kkRn9Hv7jhJ2SmLq8VYZG8EK9iRQQuL2buMKASQMmuSe7LFUakz1T8zEPh8pWV",
  "key6": "3p1Kr7egM5XxoLRbn4Hz8FgBBEib4U5uyoraiU8yjmMe5CGvAKUPQ79GKoyVDJ1v7Tzts1MAkjMaQqNNgAUcF4Z6",
  "key7": "pJY7CGnVy49cLu2JqmM1h2ZPK1mpcPErtFYVQ5qkjzKtGAwGgHxhqE7Jji4MNsUsm2VpD3rA9VHBxAg38uHSjRA",
  "key8": "TbgwNg68t8QUY5PngNa7ExAnRDiFcesyLYWwzQ2DnxiSUdTVDHMuMugbPssjXBsYUBrzTdFZDDcncXAv9EMXBGa",
  "key9": "5JuXshBCMuEMJ12LjDK4nSikh4dAtWPcWxP5BtVPBDyS6qaW6WoYFwJAUikKpumW1BZhTUzpGpAHf2BzrsLGcPDp",
  "key10": "4bqAzoBYvggabdhBPMCX2E9QAaGXjEBqAzh5dDmQ1oHKG3KZ5ELDuHt7Bcy8QS2jUmCzsMMkFowuv3k48jZ85kE8",
  "key11": "4w7No5YBQjJif9geYB9hFd3QUxs2hQKceGd4b5aKXjN7FGV2C8X2Q4H5Sb1RSmzLPAXn5SH4uzZJCvV77L6NvwsU",
  "key12": "2jpmeTGsYALCbEpySTURMTG5YHfRwMADqPHKWKNB2EofZFNGLZRQkaFty2ojxrZGg2bHeNgEcpifFcKji6gTF2qL",
  "key13": "3gd98joykcZotSe6VCzrSQTaZNqWZcmfDwCgVAQhYDHr63p3SMBBozrWEHugX79BqyahqFntvfqgcBeVajjjj23F",
  "key14": "4kGB38u5KUUPRm1knCRYEoGZXApNxJDq1AMiEDucSvcCpYqMHgk4KiqyczXfK2QxkegwaVoJaWELYF83puknWGtD",
  "key15": "66Z99BkdBUuQ7u1awVAD8FaRwzWk1itVUJmJEw2zPEvHYoYuJkBU9KQAKYS1UZ8A4FARfc8Zs5JCcHGoYbe2FLKi",
  "key16": "5mEE41rbCc7osJ8KR7W7ZeyGheS9StB42qeRUJ1GFtBFc7e7JtDBkDWb6XujtLG3uSd2veF9mKZ9orsCm7tj2QC1",
  "key17": "xbiNqVHFgt5Ss2jyHSp2MCwA99mUJpWiXjgCNwZdTwA2jTDHRMyiKZLoMwRGyamUen7GQGqJ2sMbUBAcaYVzij6",
  "key18": "2SxMjirCQw5xYqA9uE3DJKaKwcvZpvWdJRtdQrLHtBjRZoEKPr5yyh2NtkJUrqDGQZh5L76PfNdGB5EvKFKKoqfN",
  "key19": "3MHE5EYPnAvGKHrfkxZUUzdjd3Xdg9MPt34uGD3YjK2GXukwtFTFsjQtqqopXqaXBSNzUkJqL6rDQkwHuEbgVfSX",
  "key20": "3irbGB5PtNUdpQrW1T69THzn54FzeEEypjAVKvmeieb3Rr1uKB5XELZ6sWTup1eKnZvCtTG9NocADbCbJ8yox6Ha",
  "key21": "3irzkLiXVPwHhiBAVhDx3o6C28Bs1ckMkrjiSZ1zY4Z3js5gtvRca4mD7KMWuXDf3mfvtt4C3wZiGZAG6X6Rgj78",
  "key22": "4Ng2PCxSnkAW5RiY48K92qdgLTHe4GUiPdALqgvcyTXHC2v4EfqE9SRWSK3FsmWd5BMdG6cQLacEf3e4HRULj4C3",
  "key23": "279T3VhmCxruwFckqpgEtJA5sgGoaHU2dEjdQ3PK9M5bD8UQi3pnozXVHiAB3LWj8TKb4yxghwi5hoXveT1DpP7A",
  "key24": "5kyihisDDXfNvrtRsR7ud1dDraKwwbz6EokcgRnuVxshjzwChWjoLZVrwrSbm3hLkRULPBbjAVp9MTEwt1Si2aNe",
  "key25": "5gpyG4phA4297VakrVcCpCtmGrg9ndFoF2KhdAxaYVrYxkvSUZbbZB74ZbGbMcegAzRZ3rJHXUSz3SGgvmei2JVf",
  "key26": "mPNPHXZgRr9UGruBU3CP2ZwYk5eJTbzUXnVrxiS7DwhrQ4UARwvm9HVpPJaAdoXTjJddbyQM4vqQNwcMj5YEA6F",
  "key27": "3WxDurVo4AnuyTZJN4rWRLGkRkKnYYfZTzEMSrZg6K7gohjwv3cUmfmGxU2PM6Xze8toG1NEyc7N7kzLACsg99S5",
  "key28": "5ZQXtSBeokiX2KJAtfp3cWNRw53QJFZJj3PU4tdtQ1cqnuvw9nVX46cRyuk2yLybxSDBLhefbJsvmH8tLuQEK6Wo",
  "key29": "4Ns63PYxXjEdCJ8dvyTSN4boJkqkYpZEce7snkkAatBgiGiVWda2oxaLhyzt2eufsLbyLDpe6Xruiv74ExRFTCyi",
  "key30": "3QxTVYY2u89MCsuwxWSKHqkEobd9QhWc7GbyNEJB3rhrRxagXBBjoDHWiCq6Zb5HVqx3Ae4A4mqTfzP7UPwzM4Xs",
  "key31": "ujY5aZMUbmhDrNjf2CKxeiPNczhLvEaNjL1dLkRgFNcE8c5gB1VQsmBVRS14Q5d3TGaKHbB3TjK1eLKJJJjDsWY",
  "key32": "5Spinvcz3NV6NUej2BepkzYgGWKDdCtWEWF79fD9D5gRPhzwGZvD8kWhMvM5wigLopA9cjeUqzG5HyZdKLRTm2NZ",
  "key33": "jX5r2LjozrDbNMrd5BobTj37VqTwmjBnX3xBeWCbSdJpShsQC3fvzYixB9EAtGzkHEYH6kCm6P7k3QXhBbC6ooX",
  "key34": "3N1fjN2NP1mWwfkKc6cDVQrtNo5GqueP79dJtxDfYieEUUUy3DCV3dLGrd3Nu4iauZJi1NNtgLkBgQuU8Ryyy1iy",
  "key35": "5MESZmCCQCpNf8Xe73PYXYXv4Tb14ZGdWWNbxo2pQJ7cW1TL26snMeQ7Dfxae1nSfA1zJo84FUdfpjZ5HzKGKVih",
  "key36": "2ZDep8MFrXR8s2kfFc4kBv71H7kp3pcBumBVaGPeSSo62DYMzgYr1J6VmPtUo99rNxgU9y8si9mctza1ecFW6vG9",
  "key37": "3qDrw7pre3ZXQeejZG5o2uDzhrEKHYpjSrjxnBn3Nf1erGSEz8bsUHabCTYyTbJbt9aiPDbq1y6Lpq7p9XHXomJp",
  "key38": "5wbktw31r4h8F8vj3dDae6fQep7S6HpuvH9y7j3vTmFsYmTgN6pNqE4iVAKKcYVnZw1hMbnUtka7NdUpjqVp9QFy",
  "key39": "3kkzu4jLM9Zj3R5YH6Z8C8b1gaeE1F1rS6erLUkdM9E17u3WN9ogvd3zWeudfcpRjFvYVSK6iu4DbJR8sT1RpCzi",
  "key40": "5BMAGVs5Y66Xv3ttC3JpNHDWfrXXntmjorowBzWhUDgAQEFQaEqqmqLRFizDgxqZpg9ERdcx5u3Q8n421AMvHrJs",
  "key41": "3c19q74HsyyTo8WSBPZogHMrtx7cz5pL3shHUvUtPEKqVQTher9dwwLSRi7XWKTYMhGibmT4ZkSeijrZSVyzGwq1",
  "key42": "5PJSfAs7Jh23YAPDyCx5zxBHkxvYQuQdqC8UhPTLSXbLar615ZBvrmXMPdcnnjTgG9qtkjHaM9Qdi58CbvThsxPX",
  "key43": "eGQ5PVBznizsYAaiNydWitFfCAo4DvC6uaWJxiPeXJRbvmGYkUffZ7zJHQ5FxhLGRE5D8XwgBYAJ6kvT699AXRK"
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
