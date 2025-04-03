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
    "VLZYnMRV8zykk2yNxrp2Ee5YC6JTmr4psf6dRbot7Xbn2nxBRkCTT8EJmbpSYNqqVQPN84UMgpFH8rfNUopwpVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s84ewgRuwTVCCNF9GL3gDn7dQXqktcgw77NiGGrR9Vcs4jGjdLxjddRYFHH9Ltdk5EkLgeCGH5vmJesThSQca2Q",
  "key1": "qvR6takLCHVxTn2MgtUzgKHbsXsyNjoeujMig3X9XxY4FT6CvtK6Q8uQYfzGhhWAcKcQnmjFshriATnhjH5bRfB",
  "key2": "4qLxe9k33vQau1yBThtLDf6UzMEe7U8gk3xzUQRh7vFF76wtbqFY5YCiFij3tYp2spa6hP7A9oWScLxy3FJYVq1x",
  "key3": "2ztwuduAaXM5rECMrWTh7sVJrmwoon777Fph1JVAQJEK9BsdoSYAxeEDBVr1AAjfzm2NLwvsmqpaQgTxNeqECLaC",
  "key4": "3R7MFHkVPUyCQW3EXGv1sMsLw9r5snP7fZheJ5LTk4qJfbrwtutnapPyUormkH4ayNsT5ed4BNeQnTCM4grQ4t8J",
  "key5": "4yoADzZza1Me2FR3vyEd6WcTBrTKeVFxmR2e7rmeLvkBe4VNyH9aBAVpK4vAmU5HJnUJP1aYxgCqy7HgJneRJpNc",
  "key6": "tRuUbv1BKv7j5rYi5ZXHkuBrZ8aeqcCrDav56vKY9LhBXCnbfXEM6cZ4e3JdUdR3mLWFC7F2miKdNoKJJoxjUx7",
  "key7": "3wpM42zctYLFhza3nQsVENCDFZYDd6PnngXj24VyEqnHTPLzRng4FcmPBYhkEBYzB5Fqbeoto8EzJ8MaZBX5wtm8",
  "key8": "351jSCJgWDpCz745DYc4U24m9TYQLq78qqqkCcpc8mQNtwsL1BFxRUbbHtzMuAikUPmhTJVBUgyKBj5MLjamrgQ6",
  "key9": "2fFZD3QbeXidAAcJHWeuZR6uxAF2zoiDsvK8omBgEbSkLXqkQAAshqtXYXmV9MgtD45o4ApJRULh353wjFbTquTZ",
  "key10": "2WRM8D84fzPpG6uYCxwrx5o94jiq4tcAuZdzLvfMbCSbSacoHWe4kC6VusTF1i5w32kiN4BdN9UEvpsTDrwGzXc5",
  "key11": "3wLfqQ1NEHrbpvToRxFyhe9nQkbHRs5XRfbxbZMxUJpJ3QuSUBEnbFwLYqVP6Xi1zMr5F5YpLDvByvo8p15WjQUc",
  "key12": "65iJgFwsJUQi1QX3vbvebuMT5P8VUPSZagtKPVA9ZRJeiXQMsNe3Yz8A9z7KXuqHGAfWgGS9i5bRhd1qk3xQVBZX",
  "key13": "5EGyobPhssvxhp4eBz84qAswLqDfRFYFqi38Adcc4rMaViDYGC5JjznJBPJWyr66qW2bWH3NHH9vkC3w7B9UyTw5",
  "key14": "2kRDXBn1X2UGdi8aRdCJhEsQLoTJiTGwup6ba5EAPAWeVadNeyHVzCkTtBPWs1LfUJaD2d6td9c5WG4yyJZR9BpV",
  "key15": "BHqnQmVZHja4Q3Pfw88fgepnFHwAB6Ry6jpdJyyKbrDo9tehWSdzZSd1N3o5nxGWgwXY33zcXT554sUsAYiPhPS",
  "key16": "21Dx54ofo8P1mGTWYXsB9kz5cRVugL3xy38bZTZzWyGahikLfZDd92Q3coBMHfcPnuh7CHuc2smcVRWQdtE5chHr",
  "key17": "2wi4SKZ5RRryxQcCT385s4GV1oJqEL8BcC7AiNYuW3gbBrWxK3r9FSqmEkjg4J5qgbENoHLaSjCEKsD8NFX4KQTi",
  "key18": "5vcr659se66jXpp7tHshwDQgwyxNxKrv8XBgGUugwAgTDAcMGshEMFjhiUny8gxmLu5Sztdfd18uFXfR3gwtD5zo",
  "key19": "5smKNkeCtehSnoVs8L1MFxpZsXMG68GmHSMeYjpdiZbGFnxVkD6apMe8ST48rwdLZkCEtGs58ga9TmPCsrjvJWRw",
  "key20": "4NbLpoQ4zjduHowgzwEU1kh9Lf6HTYsVGC628sL58ZdBahAiFXnKVvJs6u2jgzwX1rdFcFx7LGndcPLtHh4p2gX",
  "key21": "4nUErDhrEu6RzxgouGHiwiXYrjr69kiPHEHEjh5jURiXJ7gGF2wFG6LHDYW1uf5AHsmvZ6o21L9QpggoFWrMBhKc",
  "key22": "5dAsGTMYDpFbu3haEtm9edUNoCBgS6fs8nM9YWzyas5vb3RrsfobQaJ97nMWjgxwTch4PR6zt53kYGtfXyCj5wNm",
  "key23": "24UZfTWSxJpTdoG4C6rhNAWN7fyutPzv168yDzjXhegXZnur6ZBVbEissA5WfEwqwvtk5Pfsiqf9ZbX679A7T5GV",
  "key24": "2CDMQGvEtDPGLYPJj3D2PXnppeMgjo6ykc2txzCMA4yayHsQab6WnnTMphaqkRq4QgWFdGjVBt9HtShUHknDWBYa",
  "key25": "5oPrzYWhEMGCnmkkGBA9JNdER7qnm41zkmmaX6LJuGJrm8jpjBn4NiJfbsVziAMGVA3m4BjHwEQdow4jjdjtaKpd",
  "key26": "av6CdnQM5S75TFGbGL1JiocLiFT7Y4XC315vkAuucTgRumRKGA7cs52UpxYvvsThyayorcWXd6QJF5PowNzjxpK",
  "key27": "595hWzARo7wkudneAGDPdFSXeTnQ8rqkYBTbSaAfWBc689YUjkFN5syZde89oJhabpS271oA88Q2UJM7Wcqv7AnZ",
  "key28": "5LzMP3sCjJTbJLu94EAQMPGqEC1kRNmtqBLeoYHg5UNYoWKvd1Xq1naoBrGsdjFVVgsaqQ4i4XRnrkFiDv4EPrFP",
  "key29": "44JAC1dx7JXWBTsfGgXWtcdDYDr8XknC88MXVRQLCN4SptAei6U73VGamhg1b5TTQkoXSY2JRvr7FnzwJ5cqt3oH",
  "key30": "2icihs2SRvy9WiheeKw6g2d8n31kyVvvTuATKwSVESZXyQy67WMRzU4eBwmcDhEWDD16FTCar8VNpfKodM8ab7N9",
  "key31": "PTULpN7iHioWAfh7MokUGMn2pdLuk1CGdx8H96v2fzCooJsCrHASS9TaXVWjsLXEyXNJDpuHGmUeXjwZYPokB7E",
  "key32": "5DqcRuEsvxZa7vrvuiEQdZKLxPkFKb7xHfDJ1Tc66ZnbQFF3bqRQMToYUVNTAKsjtek6bRcENVbViNSYRSrVtAXS",
  "key33": "644JvQ9wRqrhZqGyXouzE6zKJnDzncKn9NhsfnZE82ZKBvZqUbDTHyT7qRsUZM6Nw5RbZZ4ASvkG3zrvxgC3BbBp"
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
