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
    "3k3SUgNQC8BAS8wjwSB76BvDBXm8WfZNqht6fHESKX3yacsR9VNfkH9ZJLaMFnasjjZFHFa4LmoTNDtPKeLq9HkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECazFd9Pi96AsgJaQX6eXBU8VszP5mzU6iipWd4BVYvwzB849AeTxuTaaC95pwtrfiDvYgbszbrUtsUEVa4rths",
  "key1": "36Uu5HFbkxMUZ8n5AftxNfs3SFbLkTXY3DwyuChovuuDoZkuNkjYAHEwW6nrbox7f984yLYneAhNRVWwb8PbJHzg",
  "key2": "3D8P11VKRTXoXPsyEx4Jtcniu1xLXjMPg2J1ph26iKZRNoWP9H6Ppjsw5B1exM8fom4Geh4tcAMnxFzhPGHwZtyN",
  "key3": "LrFDiSdEn2zTc5qARSka1jPZHH97pxUj6UJt5TKNP9wysDmULDTJdsY1CrkhjAaoJhbXhoSg3DAkmpZ7noVDJf1",
  "key4": "4iKTrUiMv33Rnb3B7kpYAu1yJcdPDFQiFrf6UWkeKJMbYMX165Ah6trVoaWfUW8UsbJuu6pZwDpB7HVj5MRbUwKG",
  "key5": "QNMXGahtxWXyUcrRE6B3wpZhA6wcojfNH6BkEUnsqQXmqP9Eqgko7hkBhiBHs6YUDXGT7B7cyiboSb6onHKH4PT",
  "key6": "41bXEDEi9PfjCPVdXTjmmGGvSV4uRruVr4AKMAemWhEMQNWkGVi8m4Z5mVNfDUpURB4WRSigAJNwLSfAzDeeLo5w",
  "key7": "2ZjHRmQmQYQPjWdJaq1thkCsUdC7LJGh5pbRwGCZfVNbGteUcwx3Uy36v5YUQEKgeWeYYXMHZmNgqDrQh7m1hyin",
  "key8": "3DcS4hKQMkwTZSbF9u4p9ELDMuByQuW7c6wJtGfyKZ4bBAUHrkCeUZjFbqNqVGucXLqJEVZDDzjWSH8JasQcdNeR",
  "key9": "3XxQBEMqw9nf4pkZ5Ee3WMBxXNoEdd7WDyXX8CAmHE696sjwSvZje4EJ1oYNNEoBq5SFAtfzddsJ7kmtghFECrrs",
  "key10": "2NRtLdLeQJJhYkX5BsdVN9UfoHoVfbSt16ZYuGmXkQAdvSzhfKvFdvvdscUA65vuj794Pjvm2fbeDXDvDod3judE",
  "key11": "KfbHAxhJyme2q7JwEBZduaF6TuDZZZB3UbEEZSFVNtqUjhevX2h9VuKxegoEoYELg5ohU78wWLxX14WbHii6QMe",
  "key12": "5Z1QsnSpaChjaY78swiaoBj9AGrQQ2NBmWWxR2qUa1hx2hJKg5P3RfY8FXyPTWQNzJQ4b6gb7Agdpman3W1BEA2Z",
  "key13": "CQGWH7mNZmVXBdP6tL6qYNNHZTeCMkYXVYGoVGwyNwko3DWBENFmqpoEnNGiCUPRR2WHNW9YWuFu3n3YjvtjMR1",
  "key14": "2obPgRY7KTBUehTCK1SDj7SiTNRrZqnfiDgQ7ug91nMwTcqRSsGfgrb6FuXq8HtAsJswxghhvoSfHbsZMPdWxZFv",
  "key15": "35ac52uZVpGxTriYQKzfTzFWeGuGFqHwykxvGMQqNtFFRdH9pfG99mxLLdt14XfZa7pHK5xSSDTnKNpdHoUcmHzq",
  "key16": "27U2m4YdfsXqXWHnfBRRbSLKb4rZvFYguTtC65Ya3hsG5BkdU1MeZ3TDPNAUEBunJ9yxFbSRYUZV1E57HohtHkcn",
  "key17": "4zCN6TWUM2KZiSnn1ESQWGZQXp1dZCEG1T3xXrnucCLiW2fPyF3SRsWThNraw23bNF3iHD9njADk7xHeCSKK6feF",
  "key18": "5sKVvad3dVvF9sdK7LRoWwfwe9bHH4LunJSdy83c6TFq17tEX62z9ZuVoZk66oELhWNeAfAPsy8w5rA1t4ByF1Co",
  "key19": "pdvDSsWGF8U5LL5Fg7yaczo2sCPvP2yFw4Y9WjTRyDBV83TcvSUYnYEYA3ZeRydPXZ1Zbnn8kwsHAMjoHiJ9PGy",
  "key20": "2ZXg7CEuuQvJZPRxRB6Sknr4BL1Y3x47uFfigKpgwM594CoeuNUeg3o67bCzyBNPdky6YdFN61uM7Pj2kDQFzDDq",
  "key21": "eJFgT9AaSArUk8cVGurwrXCW8UjRER1Z64X9gubqpcUuBF5TWj4WEeGGuqdstfdeVsJ9fq9zMzgPkfUV82dBH5b",
  "key22": "pZtA5MHRQ2wYkxNxX9H6YEbpas8qvkMkQVii71akw9b1aXDdBtN3UHJe5cwcVqMgXLJnVSWFzUgfU8eUVJDfsK9",
  "key23": "4acjG99P6jhNRzGDMZn55bThoktcMN2dZYv8m7SMs912FoynutZxUxUKY4mbW3WftXfVLC6rJistWTQj9TadnBrB",
  "key24": "65uk8mAon11mhis8p3Jx9HHXJxvDoJdDDiyqMqHEF72mattdjrQyQg7bgiN1Wf2DpE6nxFtSAowN6SiXwJCSQpyw",
  "key25": "2AmcVNxBXwfRpBjxhkyApTD7K6F4bHtmZC3PivzBbAPtL5ALz6nw7UtVuVCpoSTueQF4JcZWUv16wZvgnGFEuYWN",
  "key26": "3v9i89W4z8WAg6hFVTk66pJUT9cmV792Si6iocDWtJwZSeq8PXY4gdUGjtqgEvn9cmNVAgePqtKkLGwWyEQpsKCV",
  "key27": "GbTAZjig4PXSgutQnHP6aV5oaVwLcWz8TmzvoCqTXvGGtcMVEiSd9xkZm8NofZwDNWB39ysqXJfpTGFgi3QDDgY",
  "key28": "618w7DNEwK6GL7qKiQLTzJPQJ7H2bWdVK63uApY5MdxqwUNdq4MSc5N4D2S6bqBVPnE9BH9xwsqRjp1r4shhCBet",
  "key29": "2uspKk73rRSWuK5G3n3FDVTrGYMGbdDPq69xXN5YJ5sXtXz84VDH7GiTU3yhN6wXaGoeayC6yZtbEgG6RGWRYhWH",
  "key30": "5sUsbjNceYk8LtEPmwjrSeFvq5beijDAvdkYPwW2HQnaP7EY95qp1qSh96uQ6aPej4JDAJBTnTSe34jj5EpMXxZ4",
  "key31": "3wF6bZodJoQqWfZecLiWPg2mCAYoU8PddrtVf6Hqe6LRTsrQGTRuwDocasjUL2VNbdf6DWyTHnZwYEhY9NoaNTib",
  "key32": "5fUA8gc4hZdmSP2xTdK8eGQdnzG8N8QH5HNtznrBcXqiv9nonAjQ2HX5Z3uVfmEgXmGxg8tyv1G3u6Q15T6EcRcs",
  "key33": "2DiqYTD1WJ8BbUJMgrQ3tJrigpuaXb78KjTjPpx8AwiAMG5wcQ3UsK6ngMFRJNi856ewQVDf5gZrDdArEo1EtkhA",
  "key34": "2o3axPE51XWnsvTaiUjrKuz1hoTMjbp32kh8nw35fvS7Z5ynPbVYS4u9Sxmz8TntwthN7pD7oEFzxc9eiYisSm8r",
  "key35": "3TbiuobMNgBZWV625mCn13EJGMwkx9oW4dNXSLAF3YyzF6HkpTR3zb83UfN5w1DFPuinwxTNoyjGC8DHLv8SpWns",
  "key36": "2KMEYnbmYf8hH18qgJct4992DtJrtk9iv3XfMUivUzFUNQtUt7psnEYhh84EriHmSqiqRQtGdiUUQPuJkDHnbbRX",
  "key37": "4LvQRprfnGqNU5YBJA9gMS4AhgiUo2AeaqYg3DAyQpTaw9yoUgTstMnPkCgad3rJsR9Z1vnmduGy784jw7z2efcg",
  "key38": "46LiAsGAAmRw4TjEqArTBmBDK1W6BjbMRDDh31THiNmdc5GMPFmz2pfELNVDujAtf7vkDWQfWXEA5XwvSUXdS4pR",
  "key39": "3JJMYqRhzpLiEzpb7JoRzzyPpuFPae3kTeAjPfwHCKraC7yCSrxWKvCvqsYbK3EZiJLrptiL4zwzKxtizSMSji3u",
  "key40": "3KG4BbvTDGHZ1AX1gBskUcFB4dyPWF9z2nsDiKnxpH53ta491prZZgeSLBdLTmjmEgyL4zew8p8KZba33jZkprmr",
  "key41": "iCmJ6xg7trNaCwHzaBysqEMqNuSNgefc9YcJLZjWboBtHuwURgiUcugTqCQrCJbyAgLPxSYVfv1KGHFjz7a8TqR",
  "key42": "3RM6kgEVrGPkvKedjQsF4VrDxEKG9JP8DveNeWaaQyXcjFuYDJ1nKyxALGHhiA82M9tX5gVGqXCdbh5D5wZw3g5m",
  "key43": "pjmV9SF7HKiKk4mHWCtT86UC9iAzKDXg7pAsCMVj6WyB3ADGsifwNBsewTEpTgBY4Jp6R9vtdiHCeR4wJQ5DNep",
  "key44": "4W5Aa6RVwGt9yVDb8GHB4cukR8zCogsgmQucrWoCVnd1zRihVcrvPNqbwtZbzRj7EzfzrQfkZzAYyrAu9eb2Urjx",
  "key45": "222sZ5Um57G6hRA8zfQEGYG85XJXFBahZhCpBm9VNRX1t4awYEmKLMZGNBwK8R8wMi2f5jwyX5MfwXxcYuEaHQNr",
  "key46": "48vrzNpVZc444y4GrDXE28mU1Geu3YAgFaKxfxWRaGhonaJoFmEyvgTtm8Pd7cqJZ22wmrf4u6TVLcsvwKrjeiHm",
  "key47": "3ay1SrfPzDCXXM44EdbaKagttNr7CwCKTUE9A6y67ihJ5ANFXTiHzxsrRMXnHtmTwD9QXmNwEVqeXk7eZsDMEy68"
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
