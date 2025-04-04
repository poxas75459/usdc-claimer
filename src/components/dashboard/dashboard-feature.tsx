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
    "3AqhCHixtTk93Ln3CM5EyWo574HhEk1bpGchCgtVTiyQ3w16WF1nDh6e4eAb5uB8gWUVkZ5tT2z8JtH1yvaGrrgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31okSwJL5qAJE1PPjC4YWuw3AGApCDutvKjNjgKnQHpSG5DJiaoaDEnYcbB3jG23KrDk3HHtuz9xnom1rWUrVVv3",
  "key1": "4cABU9CMSKDSQQQK6tPxNjSM8Wpc97mHxpqe6F6d4UXWWP844py6NpTvW5hgk1Bqh3CXfYMSiNmz55ze4ZAYU9iW",
  "key2": "2Yqf9RvdAcRwB5wdUWiE9DBsTXJBNL8abxSpTw9bhFZWh889j1HDw5d2ch5ABvXaLPgCJdXtgeKgFSTLwUxeTkXm",
  "key3": "pgx11rFH76KrYNdDbuRBXWPFBVWRsfGvZtb3w1u4ptAxqEPAzEFBhFHsYQu1Y1QwGfZZo6eWfJu9WicrL1f9eFp",
  "key4": "62cTVF5znuXHPW3w2HEWNm7bPDpZkYFSD7v4uVCufFpEAjetNxANXYSqPK9h8mtrW9diQJEjDDvvE5y3dj9YsWUd",
  "key5": "5a3i7H9REacZbbKGSPYSVAkLqxzWmfwwxdyi5asY7BtkfVgyhMRkiZwEVN6fJE8sv3SaKkYSTRkwgtPsyii6fAN7",
  "key6": "4hf4UYwMCAXXsqvJgqgLUS9XDxbLhicSzjWat88Q3GLv5rf9Qo9qrpHtrgyeE2jT5qoaArS7EWyREW3e2uxU9CoR",
  "key7": "4JgJ1sgNzFf2JgmNNN8zjZz3n1MJtz2o86jA6oDp3pZCSRzeMptKyG86ypHcj3XdDcLrkzyLDKH26q1gzWaixdGk",
  "key8": "2L2bJbTa55sfiWESvXQRUY7nKYDpsCHbjPpUtfjsUQ14Dq8316RGfys7HeXcXyPg5zy9Z6YWudpGS9iJv8fZY4qn",
  "key9": "4ST3kJnbfWQT8U3JF6UowNxpXeoaqJPiWwqKow3K3ijEoNoq2zTiLsxku6ihLHJ9gfC5wLiCRTC8eHqMsQ3EAikd",
  "key10": "5DRJcAdxKRmduDEwgQn8BBjEUSmoqC7tLQsmLodt2zdTsBdVc4rSqXH81jbhhC88yoMzWYAXa8xVGaNZ4VTzV7jx",
  "key11": "3feU5Br8pNChHvxGpjefvSJM26rKm6HePQd5gkaNMg1iL4UuYXKJms8yKeF72qptLpCLubHyFTaLYWatU4ziM6q",
  "key12": "mWjb8qWRDwJGs1zyAuZAfBrKwbmsuG6nC8i6RtnA4S9SFm1wcwVHcZhEAQzNmcckv2dzWqCWGNVQ8AcEJYGMru3",
  "key13": "4MVrroTYyJJRMqxfbPSvGqm4YahPX4Fur2tUmKydufnkRoeMVQqzEmYJxBrZYbGPv2pb6xckUSJE7dA516BibJj6",
  "key14": "5n1Usd4zBY1N1vttbwrTk8H7D7CCF3EKUcxH2PZRaUdsBQ2soimFaMTkCp7RL1mR9WJnwYLNqxXcqHQjP9aPcXC1",
  "key15": "ZHHyKu8LTZMfwmi8Jka3gZ9ftJnE4gFYWhgpyvPSgQQSPD37qZRzZCJz6bZjAH5iHh56eoboyHYBQ5GWrFgUcYy",
  "key16": "219c6P1L3iEkup2qoyBey4sQcTUsFaFAWQiKfa2o7Ec7vHndwp3RpQLiKQAapjDYUUB37KTiBd75GxdmzYWxM7xM",
  "key17": "4QqPwtGT3gpvfgWcbEdAwxvXj69M7Mpzvyphz6fSpZZqzZ3CdJLmigipdJa8vhKeqBS5mn1Mc9mTjoAJutR1cvki",
  "key18": "4MhLmfW5XRGsiqGbvWRYWyr8qRESm4Hf9xXS1xv9VfGw9naf7JZ2JZyg18Pku7KCQ4g1jGhKTJyzsVhJgkkhbzmA",
  "key19": "5bJxu19kuyE9oaVJGxZRtg7CxidoP9DMHZX3XJCKdc3CswySV4qWmu98y6T6BgNYjB4oGoXyqLB4kFSprxbxwt1W",
  "key20": "51h3jCP2DppMKeCcq2pXWDsCCd43ijzzHsESYg1khByHCdjz9ReoJNd55CRnKvvR3zTTah4Abw64E2ecAXjQiraB",
  "key21": "53cer61B7QayfBtHWGPTrBfkokyq9DLzsSxkTSwjx1yvdPiQi9dXRRrMoow3pYi3XvscZo4HpfBqqSkZNQm7oTqq",
  "key22": "4NkgpVeBfYQj7frrfTyrqJyqpdRSyap5sDzFwHBjgnKYtRg3qNpsCiwAa1Yt9GwtX9kboPaNiv83yeLHbW6uKHLL",
  "key23": "4CgYS1DXktoCPyVBM32STaiCYEgDSNBBPwMN7qcLkpyJqnndRsR9aREtenup8XWep8nMQmvcPjf3roHLPG6yLFEt",
  "key24": "4thsQdwPqt2NLESTj2kppF5WgKj9vAs7Y9qJqBUiUzPj5vQmRcJSF9XNU3Bkp5kYXgc9EoJzxmYBMTEsq8ray9k7",
  "key25": "4mWDiw1eKTh1aWKoF6FWD3317osJmVnWUcW1ENBncCkxpzXxc3KStYBrHhLzZibv4QbNbDuiEnxPJMFNQdYWheCy",
  "key26": "5kaetjgMKV4agGkh3EVN7tBkqcHBRy4RBMSGrTahPH4qa4M7Tv6tvnQpEqDVsL13Fi4gYwkMcBQPctrWFSP2p8B8",
  "key27": "5pFKJPaDe8HhebDau58yVeGo7BistkC99k2wTvSFTD5QKD7s76oc6s37udT5EeoymooYUNYxoFBKTGdBfrKDNBAk",
  "key28": "4McNf5CfnDaP3weFmnZquXfHp8Fb1KmJiuQXX6V42jMcvHaVQXM763RNo3Pr9fxLxFuFHfMHu1Yospfp3iUpoPjy",
  "key29": "3HJsnhh4SUi3tybhPNZkyqm5ZyTaR8aCZAYBy2zktmJVfczBkUncvSGxjxbWcrEDurdaPydGzJoYTjhie2DXS5Ph",
  "key30": "3dBms4crhWzt1GmqtbZhoiTzL7zYDcnH7LPgV4EbBaiEk7537WvLCfoS4h7Ty917V374ZkJJ99yoAVnQd1YRe12F",
  "key31": "4xKpG7FgA1XPwPdm1SUXv5tL4GN6aifjmay9bqe9uM9bJ5HLmiXf7U3ZKxozgwm3xLapwTJJPQTcXd926QBhNkjc",
  "key32": "2SJFJzASANgkgHorywBzoRujAQBEmK76FzmDrr6hYYiZznVS81oUgeWYzUqF4hdZJqH2KbmpSgvsDfqiNcNiLQXc"
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
