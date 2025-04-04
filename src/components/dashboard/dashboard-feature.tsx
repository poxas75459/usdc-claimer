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
    "59wFbid31w9oo2HDcpZuVizBy731MhjhJxtSkTubK42tFjxwzsNNFED9LWbNtiKgdSPm6JhBTJXAaTcAYiZy17b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzovvviDw3pf1LE7BqnaHtRafBWq4pSuTdBbX7yfKxcJRig2LQdMFNnxj7uQUuyuAVcWYfkRQwybdLoRhNsA5iy",
  "key1": "2jgA6bf6F298uANRfeM5wTxoTAi9j253tTrwzjs2T5XEowQKMnTucReRxM9dmiy2toL7axLv8F1aGuvqySz5gjb5",
  "key2": "4B8u91w1qYm4Dhf675QK5BuYoe3qFPJKcNcAy4dMUHcJ1MAcrokwtovtFENd48LWRWe5gXCpRH7xVaagwCp93Txt",
  "key3": "5BuzBqk3bSkGLZ8V646KxfcNYpLccPt1w1LSQQuPXswkLPnJBeFbwaYLjZxUXstsi2mc73GjfEMtxUSsBoPJ97oB",
  "key4": "5H82bayCte7RixneQq87xeNoZvx8SyL46MjxFhitJQnBthEtvzzKBTVAfK8g2CLNgKwrWcsWZWnx6zSVHhxjmy9p",
  "key5": "5qALNyzvEd47NyD9nR1MdkgGddch3ob2VWmggzaDam98N7LEGN5wRHsFgV5TvsY37SEf6EeZJjnDXovztiALR3XF",
  "key6": "65HBn2S3fEjLL1gVP11fv51ZPqQhKPatbZaxJASbupvEkk1BaPxZgH7UGZU511EjUz6PCDMxGs4oCp2VUUJ9bKJN",
  "key7": "GVvuTp4pED4s2L6xJY8Ur7ESyDDhDbZnZk9YrR6i8y1Ra2k9DiZMuH7aCNTuiHtuXem3zhQDFtvAN4bQqLHw2Q5",
  "key8": "57Ss3TMmRiiLFCvZgx8CEFD5RLBQBYPi2525uSB6eJyhrUMsgc4rPabHwY4KqWjS7MFkPvoyuC1Hy5c2mbXUi1z4",
  "key9": "46DtdDTSvjEfLQjFnPJUF7Dp6wDVYtjDfpRCQkmD2SNNqywSGhmJEcJRPkqLrNWm8RAchudhsJYECLErFnX3bDS3",
  "key10": "4Nhmb5KWN3XJ5CZetkBjsx7iRwScMiSjYzQyWuz3NqSnvBDedd7eAsxMs82SyazVD8FGK9hjcC3sWv48aSPL9Adr",
  "key11": "5D9tfgYvAZ3jwXALYDq8MYvZey7btsBaTzgRrWCKnWpgaiPjfU7dCEqptRpqkCqnmkDppdvTuazgrW1oksmVmjeJ",
  "key12": "3M4Nn5oDX1fw92SAkqguJhHEdjuy2mETDiwhQJ8cEgVt4wdW1gXpVqKBQSSJfpdiErSLNGFjmTT15PxVcMy2zXD4",
  "key13": "39iTZiKmP3gPwmM8DuuUAAgRnkWoKZrmMzSU2mDzbW84oLXPm95SCV42rQyUfLZX2pn4q7UKhfE8rS7MERoL8aLi",
  "key14": "2qCLe28z63KwktFAfhdEwhVxXHR2U3D7xX696nDmejNKR6PH4eoQ6nAH2xQ8ACzkUdVbbYcrzCbiG95RJc9iMW7q",
  "key15": "5YkwtmYNqFBkQo9kEEshG5AXRucdmjBd9SkARwwDBDYt4oNxQZG1aXHATd85nNswprA4ZrFu72HiQGTMP8gbREoz",
  "key16": "PfhfapMSw2PX84cgGs5Uf3FHbaLS7kAJdFNMxT7MZig6M7fZhMpvQMpRFFqrDfvYCYhdjyWkTDHZybU2HeSLFes",
  "key17": "5yTR6hMJPHkBiWj1o9A3R5LQgm6f1rxT5cf7im51sN8Q2HDUpZCds4whfRPcGsVbRCvPNTvRZzr2jU89FsArwACa",
  "key18": "5sdkFspNgNgTKh8vXhRhgtdUufzAxg7G2wAL3cHsD5GFzAZZkLNoZDHeqPRYVJ7dxgvvzr9FhZaAiC9HKSHd7ush",
  "key19": "5RvA7taxLgCBPSMHKmME5PhBsJLu3m1RA1SgxVF8VR3nSCAQpF7hgdhVeA4GxCw4SpcYfaLHURiMemzsPiouVs2t",
  "key20": "3PiyufUtUoWMi3xf9ftGfHvxZ64zjT1QnVxVLXoGfGU3F4vBQ27HnfuVK2G1To1G3EYUa2MtpJ69pvLCdsvzp8ma",
  "key21": "3jAkCGwWRkZwzjXRaexSggAVKNgyQYguAYxBBeAXJiJE62W4EuGJ59X7ud1LsbyKjY9tC5ojuhNmdy9EEaox3mtq",
  "key22": "2Fw51iMJ76BheKQ5Ew2GP8DbYc1mC9vN6BBSQbWYcyKRvudpbNGSNvR3KEsNA8GQC7cqXj7ypWWp9YE9XrURCjGq",
  "key23": "38LRgU3ZLBFbbYwXr8G2gFCd2TXC5xDQwPrx4C1vQ1MvPU9Th8Mk1dq1rSUBDksaQ4TurgcXmmLpqV1ZFKGRNBYN",
  "key24": "qoKLrBQGpwGmRmAiYtd53c2fpSYuie5zVGkbFiTS1dH2p8rijqpQZhiY8QV8uiu7SRU4Khny5GXTgqdGeton2XV",
  "key25": "4Um6qBvnwmVjpJozfP9jbLyvT6fPDf3Y7ZXbukaswfd2XTTk3ym1rDzF5hYPX3pG3JtBBdT2gXZ4Z7HoSL8kV7GQ",
  "key26": "5MaC5y8LcGxDroFpCfXr6PKAPZCkszgrb9qknr8xXzZpRiTXyg8JP7XcAtxBzSmZGqwBVWwq9uVYLiUoEbmKyHWY"
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
