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
    "4BvY7xpXeF3rgk9FaXA7Jap3EvNiX8EXTSvL8So9c5UubPothxS3YdHjZPtn27g45kWzzPV6VHkXFaWkvA4Kxwkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4Be9SXxXcwRdHQWhpfups54aSqtYkfqhAs7md6MTw8HKcJDui6pnAeMYCwtjK5YomYLfgvZSzX2DGkHFPcHvnz",
  "key1": "5NGFDii2fXHpYyiAVQiCU3hoBZMV15PvZi63Een6KyLboBPL7cwPV4JbKEqQ87pALy624zpYXUiMFXgc41DS476h",
  "key2": "4X382Hewgcoi64iwEvrNziakuVgzSCLxbXLhN4uqVbZqUpfW3pc58TfKMEppox4nr315UovJnursZY3LRNzR1yV",
  "key3": "XaAv6tV74puXMew1oCFDU3yvovHCVSRTszMm98totapdGmQwaQTb3vZd7S9nGRVjYZgMTakU9XqL1HxwTbYNmAQ",
  "key4": "2PT6Qyz9XhNtpmqPik8RmXBEZP8VZKMrALztQP5c5CYeBK39E3NWBeHeT2C9TV93mXoHUcJyPVB4RouvkoaN3bT2",
  "key5": "5zrmJcPXttfAG6D3nhhuHeFgfLsQ4yhsqP1TnaNeH583nyr3jucB5bPL1AwpZmtQctAhkUKPBvUide1Pu7hPiTNw",
  "key6": "2CPKGjiBhmp4TXxUBA4hHhY32phCf6M3c3dy7STfjxwNtMYgH1uaEQAQFry7apm3ES1gDP46a43sJAepyPXgfr4E",
  "key7": "4kyZ9LbYgnjM5Cvvph2vUPG2BCUU661oW4ZxYN4XoLkgG87t8coqFFQBkyhhXELTZPdgazByWM3tUw2mLrcNvrVR",
  "key8": "2yhi3cqRhL18DgjV1mf1wTZnBkXf4ZAYKmCkyNy68zptQsHn4eunLeyZkGHSpDjSV5uytgmkaXGxN844PYD35Fy6",
  "key9": "5sCJB5dwPdMVVB18zVfEbN9wrp4SnB6k3xdmXzMntPWM4KE54VSzBWFZzMLjXjfFTGsZnUJNbxNP7ewTcjB3ZFNo",
  "key10": "3FGpa1eSC7k61CCrE5JrKjowPrSUxTEXHSnvbM6VPSKRdt2bpnDckT7ELSgt3L2K4e6x6AGsXsbhmUzeUkLdpyMQ",
  "key11": "4XKTkbWjnJxGhBR4ug2k1YxWgwToA8X5FjikwsWDP82MtsGHL7YERqhqAtrXZbeq22SWkn9tNhehLUqR8bHWTvqF",
  "key12": "5Y7pzyQbtKrKagi3sySpmutP4FkRLACCVh6Tx6dmV2SjGNRB8MkoZKkMvhTGHjgx55qt2TUVHJHJ52r5tVnTEJ9D",
  "key13": "SeL1NPSQsrNTbWmf4UBe8YGxuAXhctz65VucQj9thRzXyXDzDJfiQUPPx1kfXMVWjmCTyd71QrrspM4BSa4n2TT",
  "key14": "3t46WAa5cpWUpPnqpoWNrPVtFKR3VEAFBXRgMnFAB6VheJiegKy4AznEvChQBaNG8rk5xyRJiHkmmjBM62iX3E6t",
  "key15": "2wH4tiTDf7SfyvvP2H8k6V2uVYN8UPcATgqGbM9XwygfhdpWSsuNSKimPe4wq13FUnMusfaZfFeKL33qcirjxqs3",
  "key16": "4rCFmbdtaoCradVzvEUgqvvNdngVzxC53zELQb5Q6yNHcUnt1Q6FyEcM3ZrqgQ7BRd6Hv8BWWPb6P2J7nmPtCYRv",
  "key17": "22e8vEEj7niLE1V676a7a5VWnw4tYL77JEDKfss7buVKHv73AinjgGNF3jtqxv5xNNV9HM56sCsFt65XWXmmkr29",
  "key18": "3NrJKFez7qdeWnzp7YWNuj3FvoQ7Ni9KWd3CwpUx7nPmZtTY39mVpmSu1JkHEX9g9c8ZbJyfY4zo1qFvdsCAKgeK",
  "key19": "3bYHtA8ieJQjiuqg2xHqDg9HJDc7oQ8uG2tVvMS4LFGChsJUV97a7oH714V8z8gSaJms4EUrDFospPhxKtRvBya3",
  "key20": "3HehfNL8nLuQ3v952pUrnJNiFuTVrEnKLHpPJRrcTAxWtbndw2os6pqZ672Es1M1azLnTYryEHAsL47mAPw6Tiff",
  "key21": "54uch9Fck7bmXnj3daz9KKf4XYNifdDsgkGKAv7zoDKH3DD7eEUGZn18Fy3iZm72K7rhiGBmAmpr3ja3hJaPMkLb",
  "key22": "38XpQxhyT6J1thCCnD5QbVVDEWGsXwSYUtGFCGarhdhaexGseuPkNyM1Nd9QNcTX3XZr4mPb42AV25KQh2fLZCVS",
  "key23": "5BNLbN9pbwxBY7ycrogxyDdLSYFtse4Vp3UBmS5U98XwB9mwdLwsNgenj7f5tiPuVEMRz5KnJTDerEMX7kNBXtWT",
  "key24": "49JGwU2ApLhZNP4FnmvHDPkfqrrC7tHX8PwwH9sYtMaHFsebjZW8eeriuXWQGKDsRSAvZ5ZQNA2pzey2YCHxxDpL",
  "key25": "41WySY8ursP68AMjduBwzsSdNHWWBcPvKw4qix1eyP6mgVFyVooGDoRtv2fm6hk9yGcUfgcJzLjTs4zYJi6CLwiu",
  "key26": "4BvhQFBm3Gy23aTvbPhynGw2vuDkvuWdQW2oeUV6wdkG493eKdwWBu67wWtxbWUAXTm47AKuqUiFf2ZkT3cCGDd4",
  "key27": "49zJPVfiSgdznjpSqqbUa6FwpSnkYLQPdnYmG5cB81RRGUPaf9rgisG9pp14AYv3DTYz8TCQFoF4Xzu4FFQrrWfF",
  "key28": "4quwbKig7Wsnqxg4PFGKHmqXfj8QqaZHgZzRHY2SnWKa43WmKm1GFMznx4d5sUZvptg8RRCnQpSPASQic5tfJ3bB",
  "key29": "3LB9fCC6zzFNrqTPvDKd3y8oDAvdTx2qvXqCWUda8kX2Cs77UQrobHN9XpNDjJ1FCXA1CpTEjVRd3ds9zaPZ6qrE",
  "key30": "3Qtfy76J9xFhuCdPg1QpFyktnYgJKU1Eopz8TjoPqwyN6oo2SWnTjH8mj68b1h3TN18BYV45g9HEkkyrtvRk9y3n",
  "key31": "1296aJx4rxQVuKSm4qUmhRmHUkqbesGoatZ7QjwCH73JXTvYAjRxsvP7Sj63HqXkGkhCsjVaTHUfiKF22N9pE2nb",
  "key32": "5Dcg4uFbbpxZEXaarvwqoTbdq1sjzoVH7XaRZJ3qrKqr6LMyeuwgi6ae8yC9Yte2UTgsXs9tL9ec6h46A47MS4qS"
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
