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
    "41nkU9r9snCutAQsd6ndAKjPX33tFMDLTnDGPFvt1kTDNi1gNLwTbqd865WbU6oeF3H7DpDjJS9shqdbuT2B8RMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuTaG8bxuwTr2yZdsNrPvFonyBmV1xbfCfX3V4ro3uMZE6cCtQRGy89xQWFdJJUmmNmuQvi18daKj73E43UwGBh",
  "key1": "36wQPbxEbcYH8rkfU77aTDbmw3CzLHZfX1GdaJU1r6hyuQEKGeytuHzAbym2m54VGny7fNAYKaLQ6UPjwfCBKMAs",
  "key2": "szxNKiX3HUCmSgAMYb8duHRKxaqcWsZqLAQSkJ6jjK1kTVjjPciCrm3ZxHJwsEKf6Mx73hW9viE8aHybe9h5EYY",
  "key3": "3J6GQUyUo74U8LL4WSHA1dCKNDAifP9o9JpBy5ZU79navrYH4gHF7TGwdvykAhHngxGGgcJXxrNNuDtBDETVZQUZ",
  "key4": "2mnT8c2LcCjJaeZ2BJVfPgoiFrUUvj6Atih6EhcpwZLsTVordWZ9K9s91WQbYoYGjxQ26aMCQRVau6JfeWZZUmtd",
  "key5": "4HM2Lsd2jkpgsVtwyUTArNReeNZkgvyEpKTEzdTqJhdoNwH9cFUpLR9naoyc3Xv192UandJs3DsDjGZZH9TGFtb7",
  "key6": "BmPavX82GwKjd6Yb8WMhD3kFGGGv6cC6eWv9SJtRdkCHmhWpbFsFU6BKiNXFGBiKf9FXPhoWEzQzRx7yWHtRtN8",
  "key7": "4VKNnd8EgEXVAd2iB4VWZivU3BsTeUKp8sN7m86Wxoap62RGD59q6mHw93LN5rRTqnLFS2RpNw1HXNxxmtHDt7x6",
  "key8": "3LqFH8gY1GWRnDKueJsyko2ZPAKtAPRNxUHgQ9uN6BJQxAi2BvdCoCHQMxvpt1KsLnDkq5JgHQQahHAYarkQ9JgV",
  "key9": "3w8woTaQJLNCkpm3a6yc4DEko5zzt3D8Fjwdu9fmHLhJpfMx6Rvd4us2NwYGZBcsuoKUrJn9cKEWe66DSqKVPyJn",
  "key10": "3aEdZ6HgHR4Lm71urqybNQvbse8nE6dmPQUq4Ba8YhYNL9u7mmbi3Jt9Z6ADjxszLZB4iQzb5TDgpvXPr9aS6gxC",
  "key11": "5HCxFLkNbHwsiqrinfULoYdWw5XWNNRCU73FihYGFCdDE3XUHaXPE8datynmKzv3z8vWuyD9vEwKgVgs6yW5pf85",
  "key12": "4Xh7opnkD8hm6pR4WsduDx32tbhMQjwBrihD2bBLjfy7QRmNwWc5AyMeEVrY8zD2ouX1VVoia1tSZRUHYLEbuDo6",
  "key13": "52y3axCz7rcpsQhodEFSyV4xAWAvJEdZVh28QsnVRXybRBc6Z4WNs3CqRNE8EEb1vwjYjY7bg1ZPAYfXxpWyHhu5",
  "key14": "4QsNKjXCoQcra5baUaNsfa4suTv9jMBoAULuETt5FvwgsTSzFm7fKpYbDXZWbx2NPjeD5kSQxKM3o68qUHrPWMEn",
  "key15": "5t2SyrSAXNkUFZGDLot6uXjJgH8QDvpZ2LuiJbAeJpdMkecSmAQAdTVpRy65hCKfn2TW72txaao7qH5gmAWyprhk",
  "key16": "59WLUAk3nZhdJKn3HPJfnLCuTvGwXPhoD7uhL3HXLEgfzEYme6o7JqN9pAve7GpNDQk4mmWnX8irCyEwpadUcvSF",
  "key17": "2YM2emusUVTfHnL2xLHzHYWQADfU3YBhtDnm2Phe6rN41RSQWBhnUZWtW1nhf25WJeQLLxfbJfCg6LJ5Pt9RwHKo",
  "key18": "D8onKDpa9zKAhDeGVXVhqVuJ3fT2zczxK7CmDJBZ1e5M1AaJrz6aYo5ZS5Ccns2FvmWdZ46D6brs24Tv5T9t4HH",
  "key19": "4CEkunbeR8tMVm8ZfwUPudaVuULHfXKHHeu3nZx8dQbJ8r8jcjJGVRrciELowvQuUgVJdLVUEZ6rg6pFULM3Qgb5",
  "key20": "5ZtDfhh1r1n26KJ8FA5EoyUfcnEw6T3wTHNgNnRJMkn1U4akwgeZnVcNMENtz15qNp3mLJmCMVLkEgynzFe8Pvht",
  "key21": "5tPC1AqH723QDJSG7NJVeY9hDRqT7EvxyQ8t2Yj6tpk7kud1FBggNuVXngSD4XoEWqQnrJeG3Jhxvr2p3JUfkXCy",
  "key22": "32bFVDVdqTjzWeFdozLVQuYZJVxnpM2f6AmFKJ9nmfVFLV5nZAgD8jWafq4fDfJzTLjJbUrevX4XiJcnM2jP5FbU",
  "key23": "2rUi1ME439TFHTbwc3BPTUgr1iuqWP2yx6SPcJ1bzeAFeRi9SJpLvuuLCC2StvVbAAcfrpCYttc8FC4etf962ML1",
  "key24": "4sDeXVQDdRu7qv7YZJ1YTq8mFx3uypatM6R6psxUdxoftyQ6kCzLjnMfh1wkXXomcaiCVQmXXeXQhZ8E7bjCXrgF",
  "key25": "4RXQ849o8EqzaCaCFBCZVQ86c9bxm9Xc1JwPmqPhsyYEa3oK2cXao2HCmnG32LTD4DiszD8nFwuvdq9JBzpirVZn",
  "key26": "3pEwnFJGTYipFKfiUY2JUwtZR81JXShFRTwHukkhANZJnrWsQa9zbzkFyfYncPE6KcDMUpyc4fN57aWhGAwQMEg2",
  "key27": "rQyMBvdjCXzwsEjEu1fm3odrWpfwCZjcGdnzygsVDxdisorh7bgvwikK87xak5wmHdqGMJhMfwkCJPZabmfTa6t",
  "key28": "DGM4awSbKCLXo9nstQcsEczxDK2beEpu5zXp3Bo32fS9MTar9NAKeJD77JtW4LAYCwncj4DZQvCBAbvDG1gf1Av",
  "key29": "61FjEWMtnZpxkmgcPyvb4uFESxJyWX3mEAzfUXYJ4xG4VSx1YzyLFcZe3SBPKXuE6xpF1tuQUZwsXs8361rxDeAN",
  "key30": "4Hk4kbjhWhDHFY1V7oN5WCrNrECWnc6ZRRnTKc8dzzMeqEjJtgZDGraXooRtEGBCebz5sfmtbdz34wEieEb4Z64H",
  "key31": "5udkb9qyFUqcMVmhtqr16gKYpr8xLp5wDHMCaodwA8nxnRU4g9ijtb9MuCCBhfCdDXG7Vx57FRXq8TxgJCPmeysg",
  "key32": "3f7PCC4Yt671Go4oqN7PiUbaGcYyHen721nMQVvKowr9bkeDAJhZ8cZWkNMqfomGMY4gXMqVVUYTQsQTZxjLcuSH",
  "key33": "Uob9M9t4hEmutAJxdSYsUj6yDC9hrGqcL6w5aPJKohiXPr7BatEXLoAqDyaXT7imvQYE6zsgtmC51kiPMbxwwBm",
  "key34": "457tyBKgFARQu2dxYhMACA1944oyELZ5qfUEknDqqpL1YomxEgH2pSTSJqwwWdt5yf2ZyGEvZPBLXwTqtjyLiqzv",
  "key35": "4CDnzJA5Mz1URb21sTWgjgXMKEYwMvHLpuQM6JaMCHhQ6fQXed5iD7v3riBGYcn9xye7FAeYemNSaWFd1t1RjeF",
  "key36": "2L4ksKWv6nDnFpTyumsREGWb3y2rf1u9Z3gr2scDxM1csqM7mVNsQAZGCaMonCNhesAnzpaX2xy44SfqPDZ8h9qf"
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
