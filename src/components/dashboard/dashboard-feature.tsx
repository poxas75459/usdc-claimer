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
    "5qL6SGVxzyjV2SaXqsb6sooCLNyUcUHK9JdZsU3pvQfvetwpYSHKpSkjonEYjWV56zNRBuirffzjbvRHFyeDn9SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTwRt1uUdaWiuLUMvfMAzRF3UA7tVVfwbLowX6FUErMmQELeeB5eu7UNApGrPFkZRg7FDQooHGuWs553ZYACLKh",
  "key1": "7fzCN9QFwjSMk53kYqbwcL4FKZ5UGCc4qdDqNkRQSK8C5ezpPaeGdhHrne4XbJcft3h6iC1iTAf6nvN7UFeqsn1",
  "key2": "5xpujbeYBQzvUosPUSREvZyiemaxbKGYyUgusLVteXpQeQouo1yTDP7B6Vk4rvxxY1qxPtm6bG5Ekr1q32MBVjoZ",
  "key3": "3dFdpXkgR2LRKWi2WVZXDnKeHqLNDVsUJcXqSc7LWMsW5sRUiBQRta5cP6UHJYiPZWBDHKgmG5PFSgmDvHiGPcKE",
  "key4": "5qNRgHrHkdvkh7w6yFAqmCK1b41CE5jMtewTm5hmMWmhEbaPYpok4BcJ1dX5WsHbEcf4564Az47VM45PwtDGyeSV",
  "key5": "54kC6Eg5oy4Lgfe721HN5jwPxjf72CdDcfrxFKiGjEsMUA7WyERiQjGCeJe7hp3Ht3VmzKjaXJgGweAqDvsXRP1J",
  "key6": "4xDUiHLm1HCpELFmJgU3KJCXzKRTE2yWBTK7b8mdTHspdBZxvkUS3XW94LpThCe5SQ5nZDJNMuZfCnzABn3pe3LU",
  "key7": "4Aa6JpkQjSqnHMoJ5FWRwQqA3kYvrZyYis3H4QEKpnRtdfrfiVT4wzSMdPmDWZ33yEA7oR4sP85BHWDg38KqUodt",
  "key8": "5NrbYSW7aKpeb5Ph6Mwhi8jdZxawPaMcjmCvcR95Hcqo3tuNLrhxFpGphT9Y7DxuDJtvsZnv5M7gw8FSa126CZDw",
  "key9": "4RmtQ9K3Te8ebeSXNwFxGKZ5X4srSn8dAaLSJa3LUn3S8e6aW7yyfaEww5MDhVqZRCyL6nMakzWhuhC13oY4WG6u",
  "key10": "GuNQchrxU8cus43PCZjMSbGePAwioTm4LzirdQkBKj51CtGQ3dGvqnYdHAGivkokBi6VNbQ7tKxv8WQtn2A8bgq",
  "key11": "UzSDH3u18ZkSNKWyV8Wo5sf3nMDUA1sZWxLJr9Wn2aM4ZYUL7EmSaUvppQ5ZHXTa7RcMbDmCc4M3UGgfTLLJDRe",
  "key12": "2C1pNFpshB13fXqZvhw45mPUgAJoaapWNKxTSQG72TJZvkSwhBW5vF7TZZ97Pk2jFDhEnGJ6vDNPsLQLb2uPL8vx",
  "key13": "VTeRF56FnQYh6Stdu1M47vFZeYRFavcBTMPyVvuLuVyFhhkNEr9twfokWJu2mVeXNLD8gXfWdkqTiAAW4cumtzx",
  "key14": "4db2g563ypEH91Q81VwoUTHhiCu7WgcCM9UWVVtvexBRejsiGAJhvYXtb8nYGyXj24bkm6MzS8vGjbTecRUyerUq",
  "key15": "5zjhaAUvKmouoZJ2DStCs2chqwa3NAtVZkcWsoa2QoaHFEL3JtvwQDLiJ3xSMMyk5TZwtVDbdtTPgUkchE1JPruf",
  "key16": "2xmZcUvWZ71ZsgKj2KAmh9yThL6CJz6bZBMdHystbsRrJaCApGTop38XwpmSidw447keHmQRM8UQZZfgncuASaej",
  "key17": "jJuZHxDpoxoGmWZshtUcyvBNLbtmn78GKr4ACzGj8UVzrLFSUuoAgBn7PA5xuUdJiB75jPzSBQbN3fWVx6mtAea",
  "key18": "2pzaX2H6ecrqMJ3zsJLHtvWAZw3VL8CxnyFkh4a3YzdEtswMT5fbUaA3Vs4zjwnc4j6oNYu4HJdZm7TpY9vbBCqv",
  "key19": "uL5bW8R33xyZowmm7eRT2G7NSgjSUgtGiyJvVm1ue1MKksGYaNakVshexTZxoLkNZ7MyyeQaifTD5SvWJT3GFeH",
  "key20": "23tsHHjzgERAfdr999fJfGrgaWJScwgr3XEhyt1H2Qc7cW1d5pdJKeDwU145bYBAWQii1TacHweonrq6L47JKCbt",
  "key21": "3SW6Axyjso5zSvyRbUrY4AC1xvt9WcAMVaYpuBzJwgui5s7kMFho7mFwyKyK61We4qnDJQzDaGnPzaVkY64977qc",
  "key22": "5cnJJRLES3M4dBBx6Tsd6v6vr7LxY6JiVPMxwXMCy1G5eR4Aj1czK7NKgwL9t3wDa13qqunEhE5RGpefgLeohw2t",
  "key23": "hNHqCzTbquGuBtTLCPUUK4JHDMq649MZyLkNe3EA6Kr5bcnZ28TPmC2sYsB2SHSCsVEq2Ma9geTyJGcx4R8r3Fu",
  "key24": "2AB3avZN9fceU5xNCvLpKxLosTWjdFJRHU51D1PATNhWgrh2xCg7ETTdRSBFBLbNJa7ZXPbmmas35Ej3KcLA3Jnd",
  "key25": "4zswDAqu9iwyr77SFeVzkwyZyQTfLMAEEecDazmhSV2Qws5VR6qKZ5W1McBeMDrmQrX7JV8aDfBYtuwsQ3UNcY7z",
  "key26": "3UXjHiKGzvsi2HK1xost91uersoujdztksT2XgRAUzccxZcask47SCmWsvshrrTh5Zhp4z1u58AfWJgEzRRiCsaJ",
  "key27": "44rJZd44TmKzmCsezuvf1UDbkME7MNNhLLAAiPXUiicb3eBQ3Ep9byU7D4wNF6YBdPYbEXn2r8dTuMu5YzidhLvo",
  "key28": "2R27byb5gPdcixuhZV6tXhXQfbz8KVmXVv426ZrD6gMgsJ9qPwZZ1GPNzCBsY3k9cmLQzbwjmybaJMYbY17ki6mJ",
  "key29": "7Cw6JgjAQ7KMebt6hQyih3hvLWPv4xtBaVATkuyJJbw2WYaPwjAgFUZCAg4sBKpYuVcGrH39W1t66FUuxkuQNyX",
  "key30": "5rQZjxR1oQNMesgJMY76aL6TVQ3pwE6pWVzZZw3CiZmFPH6pzC3woSAbYNnoEaiYQjiafVd2uMz5AgmcDyyunVap",
  "key31": "4Za7AQqWFBFELendgsWQxjycgYtNUrD1JqGD4JGsMEAb5WvNxHf6XSDnD9J99SWfrAghYzUDT3zLKjAuoEVwfUMi",
  "key32": "5TiDu2sGCHGnQY1NyG9vSSofLRMzErkP15bXRpu4HxNAATsJn7LDftvedzF6kskCatLixsxzxxgFESw22oiDZGJJ",
  "key33": "3gufi3hzfBogLgP5FdLwdQnfPCu6auVqZn7FGgium4EPde5H2jTKSeoKNCvJ9wowBuzzo4cibqf1LAJ8XX1J1MZu",
  "key34": "4iC8cC99y225A65xURmasztc7Fh3TVUSpoVjsxrt6usfoSNVmKcPEKDJ1zPzYLLBoMSP1cqoZchZNfS4HzL7pTJu",
  "key35": "Wjh3GYWi5cgZ8zXu8RiBv5RiK6mb5FZn1r5vQ6uqqukf9KJum1ivpdjawvtbAbtZ2W2NSxS3AWtwGDJbxieXEu5",
  "key36": "4jty3j7fieyJxzwVgZv6W1qwhYiSxzqcybrYdJqKKVThyG7gvuATfXLy1caxqbe1hzzTg1teMgkapLmzD71aTKG1",
  "key37": "64sMnejjpS2NLR75kUMrHdby5HZgk2wRaHtk6kMZQQWyzA7mmDUbmbf2zVekzenvWvG7c5us8WbhWSSdRQETHsv1",
  "key38": "5RRVXJAyZSqnXJo2sA7evdXtuwupqgBLHj8jWx396s2yMMaAEC4GinANfQdTXBgRC86xraYirP1BoL7XwaMUcB3t",
  "key39": "3GZ3zH349n7XKckkmpJcXL7LLwmTLDgkrgSw6jdh7xnpmv3EgWztiBoPD1XTth8Z4kLWxS72J4Rjvs9yFRuEq9V8",
  "key40": "P6MpskiuRZ77yE7HaQSoEe84ah78GbmixPPo1WF2FHU54qkXbJrXmFZrqtTYZyCh3NPES7QQQazSY4m4L6nfhLH",
  "key41": "3WvDqVoC5Lf2obLNFWY5X5nFhDXwRHjmWv8p3TmkhpPsbjTFmuZid8CR9iM5HHct13AtVmzVtSb9Hy7JRirKNmzM",
  "key42": "LLhevb15dsah9T4yLMEHBhv2Wnn9ZHzn9nhPBN9qeSxjkG9ojuASvmdnaJeSDZh6YQhUqHPzG6Q5TbdyBnKM4VP",
  "key43": "33eohzdWQJEX4Tu1eiWfdausTdbLgpPd3XiHDuP7ukE2aE2J4MPHYUZ8zUYGJse2vimtWSUbHnjA3KULMemw1MYV",
  "key44": "4sv7zhuPsL85QCtKMFwHhcKYr6BeP5W1GTKTTxPb8h6Ls5xbKFb6HuaujzawAXVPx3EHFWuiWXPmqDHJMx7rJw1A",
  "key45": "HdS5DyqZPkkJtKqv68sHwN6Hfch6Q418QkpaRiJSoHe2mCyRQ7RpycRmCw1UcWLKFTHBY9Qt3qjae4knD9j9BNQ"
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
