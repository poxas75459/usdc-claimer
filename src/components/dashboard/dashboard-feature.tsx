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
    "4LD3K3kyrnvmDboLwiuiJrBVBLoiP9KAjpZxZLYrMVp85MecY54hBDCjRDw6PFY2ZrErbUMryXMfAy3NfgqQWhEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isroefVkdPEoNQMhDmByM3G4Z9YxUPTRagnuzAfjEsKgELvRbx44spBXwZtSp5kk7d9huZQzbiWbUXqMx121hsz",
  "key1": "2q3fsdU2Q6mwhjrjn5xTZHpbKn9aTn4fTG3kqJFQfrbKdKf5sX3t8uscKTXEbDbXnBcbibAQnusn4tYjsamrQwfV",
  "key2": "4Y6gYSUv8VsYznZYnkjQgYEuDfVfpDZYhmWWeg8SWmyzwppxDmY3ysi7FN7bLapYzxckmRNjsX4coJqXWUCBLFd9",
  "key3": "44VRmcFynC7w2C8MgqEg9afQMwFN9yAkPJfLaZomQaCmCGExFNTsGyBy8SsoC3ZjjdSZ6mR317H8XCbq2ACZxaeL",
  "key4": "3531VT2MrxhDC2fYxHaY8SBAmXqUHBDYXNB8vfB159D5rxsf4hEm8q3z884Cq2xcJrLSBtjqgQnHwvQDidk45YCz",
  "key5": "2ALaRxCUujsdEFDBHMeZiELAtTHchKVd6n29GztZ4jknUhYjfRsXUKAPGkSsZgRuHR7t9FGJBAYTX6puqQgkhrPy",
  "key6": "4mxgdLAVwuww6XjEwijwb6e2uT5ChZxbZsadMkJDYJybtUtxnwaobC5Cnnw4cHi8aXtNCKDYuXFY1jra1Kt5oTYp",
  "key7": "56sfp36XhGvxEHsTVgevhu4Jp5ZtZxfHKSdcXV2wfVFQAu9mAVKHrjp1Ts4Lt4rcXdtyJtCLKZEeTbYnXPfkCxeb",
  "key8": "2yRX7xRJgro12hTCNmuCphKuP49xX5tMP97ow23bK49VUoyei4fxfjpqfaQup1KofuqQNi21bs1vK49iFNPtADX2",
  "key9": "4P9NwhcfNV4i7PzYgqfpisoLND24REHm2TxZMTfQT6x4Ha6Vmvr4L2T826A4u3FQssiWmG499onckMTcPJky3ZjS",
  "key10": "4wp2zcXWQVkgL7pKDsB3xjDN2DMRNisERfFnnHmKxo2PGqN2FxzbDoiSrZ9sQw8LPiuENBhzzSphauSkgVWohfo3",
  "key11": "5Lo7ZKbAuo6FeKgJ97oYLssRCMMeJbn9N9gGQoKcrzAiauh4mMyMoQLziHMnHhZhLBbHiaeUBoKvxMfrFSJNBqjz",
  "key12": "3LwN1ohBeJzCCwYxLSYJtHPRsdRNrpTe9XogZtA1WLCyWdaUrrWrExayWePV2nrnFiSJEJg3ya1sjcAmxyc22mDR",
  "key13": "5DuqpjHQSShid9jxNSw8uyn4KDWEhDMWqaxjTgr7HyBmBcyDFqqV77ijMk2nrFzJDRDS2B54tTJqNKsocnjdbZq1",
  "key14": "3MT2Gju53UsTSadUVt1YwoYeQhdLwfEB3ZeihKbSLqLtKKiGWhJVSRg6L4xhqBLEsJ4s5RuV9B5ATDG8zJbDsv2T",
  "key15": "64mF3nG67kysxHZxQcPyVHJxh6oWtU6AAETJ9EUqRKBoTghA2FGwfSzUDsT7QPKqVNW1yQsV9xC6YvRQzKn72Zey",
  "key16": "4Hef2ainyxfBLtVg2ESm61H7Pt9h3FnKoD5Dv76tBnL88icbZkuzHWDyh2AqHBLLmmhUN7Cjs4Fas9A72Vy94EW5",
  "key17": "4LcMCfd7o9JhyMWcsqVj4WgPfPqU4m8yAb2DhXyYbfhcrVc2LfdAm4GtJ5xkYcDibhYAVXHZXqsKZ9REVb5EofBc",
  "key18": "413FCpmyjeVuCY6CgowG9V5kzeQUwyYmWQWnnWtbKHNtcGuX1JWTEKSEVctyUsYeUNsAFT6EhCjUJ4CA3wxuzoak",
  "key19": "2Gk4jpmgVtCXzV2tYzo7JjEApSE5NKszEwwR9jdaunDGrSmBPV8u4sRrJPc2hJE6LFrVLXqqBRGCGQnEe14QKFYi",
  "key20": "2guwHYMpfEM8orAnTDgEeA19pN7MUiBezVLrAzsu5Sp6SC4BAfLUmYXaZDmR1JBQ235WkWE4zZL1BWLWFmdepdun",
  "key21": "3xjiu8T5PAgxpzdkWfiQCccTmtWkiZ6kt95zYdGnxxu92sfxbAPsH6FwMLrh61LZQGgeAgriMgUbz27mfKhFACA",
  "key22": "7PvzR1CzwhrSgKJGryTyDJqjBLWryAxGhFffSQsby6JmYwi6PrA4jKDhmCyS7MZ5KX1mVwcMHKrYgH3h3Mjs8Hd",
  "key23": "4j3sK5QqfZBPNx4YH1p82P1qah4F6U5DLeWH9QnJSvavd2xpidhzzyHCEPdtisxhbvZ1xikEY9qYYgT7HXBa1WM",
  "key24": "3F296H2H78nAjpubU6xrpxM2FTxkSW2yNTqBXZkyT8tZaYtQ9HKeV5mkWSh6FkW6TG83RWJhd1DpgkTXGukXCJDG",
  "key25": "5GEK1BtLxcATRTY9YxE6ZPJn1M545NFQ6HYnFrny4Ryc8DrRD1AD5on425bB7kjruReqfEAjtcwHdmWTpYQwFoDd",
  "key26": "6sDYjLH7o11dzar47mCTA5JL5vpw78Ebp7vkXFrxsjBoZkiRwF4fLWuvZmEpTd71V26hvv3RgH3eBNd5ZkUjCBY",
  "key27": "G7YhFamu7m1u3kgrk8VD2WiBkfNf58dA4i3BbkSSxVRNNJ5N1XquhpKgjahYwt7bvGFt5tSSGA3oktFAv9PtkUu",
  "key28": "5zCuBVENPjjBZSBnnTdKtwoSZKC9DpDTmwi7VH9wpquJ4qyYmFR8nQzbeqJBkmbvxqnpDMxtgiME2FLUNkpn7wFo",
  "key29": "33fcX6LMPNS6TQYLGfj8C2fzydyhhYtRuJCaym6b2neDR8DQViChMCNAUSiBvPBLP92fjz5KUMbk4dXAhoNo9idd",
  "key30": "LBBmD25AXCARuw6JYFLsKYFpMuwch9tpAH2pyGzmAryxo1gFSS2XhToc7mWFfBPctTfDmw3tij4zeU4WvK8RUeF",
  "key31": "2GJexbpCZ5zdo8Puc6zowsgP3gzpQD2koBVQDDU7aV6ChafZdKMSSAb6BChaMMeWo2ZQodu1BxVgFBnxLNURqkgf",
  "key32": "37kpL9dTicBdvojEHXscUbRChZyKqwpE15eT1RbPKt3ZGjcfb8nrsUSfwG6KsYgtGsJ4CnLb6nY7uXMVKsbVYWVB",
  "key33": "5t3dLeodEBZAvCYY5eQtzoLP5qGFp83bVKHdS71CarUkSmznD8UyEfDcLT7FR8wLt8tLsNxVPTby5PYqoFgMwkDV",
  "key34": "5UTgpVjB1hSSaUAD5doyM9Dxi7DDMgMYPPncz9tSACpfmDSUhpnwNJ41u9p8cJsXQmQSgRjo5Vk586dXbwkEeitq",
  "key35": "y2Gn3isyuZ9Gaip6KCivLTSju6yNNMH9EgmsdSn4CiCeZrDPEzyDGWUv8ErNnNhbauaYd7GjpyjyheY3WEfuNZt",
  "key36": "3NFUW9eUEgsJCafodcuq9wyxPJLWC6NZ4JkWrW47vVNWao6u6KavW7o2UtrKSy1vdp69yb3Rx175F6ccEjVRrev3",
  "key37": "5PyNpf6nAuJCNTowE6rUhsMbJo1a5KBoEAKn3MttZxZauyxBJTXczgCDzxXoemrWRcQ6Gm2GPFV7ZzzRESFm7ARe",
  "key38": "4jGy7Ne1XayQjbjuzMWAAATeiKGgECHp9vNGbc6u7KmFdZZKmFSGKyg1MLkUSefDMAHXJuxQz7Q4tKEiVcjGyFWh",
  "key39": "5cc9RkawYHQg6ZgQHCQkEDxcWTamq27SWAjf2zQCYsaxHsDGCkCejvdw96i1k7H69cvFUaQTetbCDrwWdQMUvf4q",
  "key40": "5r8JmCMWM8CA21QyuMH63aRAuTfQ6pLiXr5TszmGJAbVHrZf4A9GMUdkRmL4BPX67oKqWwZkzJuwdyFvfcM52NJK",
  "key41": "5aEmxg7omEeCoVgQC15hSXQtQ6Xb7obhin5XPZn1cdHbq6Mo5ukhL6vue7WLWTr87YHdKQsLMN3cXpVSs4u7yadn",
  "key42": "NqtLrDXHcDsckizyKUx6bnQVHVNxyBTBAWGAFGR2Lb3FAenQQ5QMEssh4uP9U2r9fMW5he5hjTk6Y6568vbzZE5",
  "key43": "a7ThuecoLeu7coKAUR3QEcYvN3PHhDQU4D7XtztRCmezAhcqQEXR2vQV1LFd3BsRtRRyugACmqLLA4nVj73KM8V",
  "key44": "LxGzxvKu1rG6N7q5SrfRD5vtF3BbhsSbhMi53STv875Fmx3dHgXgQ1q4UKGMdnTf62AuRicZyDpiZbU5PZALCtS",
  "key45": "5gsnddxb1Nrz7D4cdUHWznSPDW3LoLE7dJ6nNwazR2aHq7xCudi5fw5ZZA8gSPDjFRgQL2VyNVk2ws5kVMeWWoQN",
  "key46": "3zwUTDxdkGDFXW5zA6bV5dummL5ZhF8dfypw1b1eE8vYig7YdiRnNVesQyfXcHCNATPgJ2vqbpL2DzkM3rYSz2n1"
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
