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
    "RNBXhQbEpADoGGUxCzVkTuxsm58aMKSqMbgUCcqUR7pLZfpkZ8p3fAywBgBD8L3he1NEcwUFgim2pjnprs68cR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2jBgZHnp1ZeqWyn5y6hLXqDJwJP1u2SRuw5bMbTEEMP7kAJnLtftVSxoHp2XPSbZdQE3WCwqPWDsK5Y3SAHkoE",
  "key1": "64GMotei1zajrkderCn5Wd9Tw9vSt47M2qHPW8XX762PfwPPaVLDEkbR7DGiX93TC2gB1K6D2cvYMNuQrwXHJKbH",
  "key2": "29ikm7nue2xrPxUN4wdDrJCuYWGsiAQ6en2uhTmA6VG4kcz9JozcyoCbGusS4QLbX93AENgqoEF29ps1RQJcvxJp",
  "key3": "496V9irr52pmFpGpnD2NhxiaQzFjWV38ZFUH3dvUJ9gz4dSe15QF3LRxASaD9zgYQhnLD6uauCWLwNGAJHCAjWvG",
  "key4": "4NboH1ZC4wbbRZ3Q8ppm5L3gzGv4abptUWfKQx1t2ZggQKM1MZ6haoiu42aR1ixmSV43UTxo6AmLv5RK1nquwKwE",
  "key5": "2tL9p4bwXNC4Ndv4LRu1Db2KK4J5pe7weUzbpMHZq39RWy6boAHakJjGpj5sLkXKnveScdhaA9fSJG5VJytmq6as",
  "key6": "iAfVKjT1wntwDqRqos16bRM6CNFqmXaXhHJesJ6pFRCL3ereDZSPUp9GEVy7eAtDHQvph2Ei5Gydx9FZqmFNTsN",
  "key7": "3NPVZrnRWtTtHKfBgvALjcrRZszX1fXrXywDr68L2Kibe49brTtBfneN3osnkhkAatYnZqSCtJhck11gRwS7TvrY",
  "key8": "4ZJCpKrSWGLDbwjuzkcYofASe2mfxZXuQjqsXXkw7q5DFarWxjJdo8JL3hy6yMgHVfcd5RP6yzZYCN9rf68jzzLN",
  "key9": "4TdZxzr5HdzSPcpu8152fgxf1Qh2MnSpaKJUqkHWsg3544mtjgdgdh7tmUA94okBvD3E7PwPf5wdfryAtvZ4fAzE",
  "key10": "4SG3ZsdQDvZB7nLNcsb8cFDya9fTr8EtQCPQrt6uSWHqVe8uYRXcikXX9cEozXeuYeSi6cAMnCTWF4v5TbUGpYR4",
  "key11": "5nPPdwPwJ4JdkP9XJ5ME5nKwCBkrF6eLXfEv2cF3Y3FbMyLU4CkCD3yTw81XaB4XHbgexSkEmL2VXAv5xdzqR2sM",
  "key12": "61L4se9W1QvWJvqmP8mVfJqXH6s57vT6KqKEwYv4X4jLsWnDaGrr7kQTsqNme6TiNJ8BotAjkDSLASKyDPQjYNUX",
  "key13": "5vQADsqbAYV4GKErygUoCV6MT16Vu5cKmxcbNgPd95W3u4t3puzCQ5M1Vqw4vAzqqzfjWDqP4a7n17TgmsXzHv3Q",
  "key14": "3xYuCBS64YEah4GL3o7Qh9JMJvDPAJcwrDSJ5WxZwhfYpict1SNMSSQhruRx3GFymPRvYzKyi9scrsFGL3tSwREn",
  "key15": "4BYWjy46NT4yTBaFok4thATFgsAvHQH3jBvw9LJdfBQ9ePmUGgz2ESNNU6bhKPx6v8q9b16HMwz6Gcw77aCiXWdr",
  "key16": "3gXqtjWBEd2YHTnNSeEjdGDetwpxX1ZKkeJEsBTmskxdZY6pmK3Xa6dSaFsEJ3uYDQMWRvLFN4QgjVFi7FteocMi",
  "key17": "3Zr91BBfTr8zZRKwtEhuEwFRU7eAoBqE7cwvTKKaEVwWpiF6CTouYzCzDYaTFhxJHrJTAUJWd2xwhZJKewkagH5t",
  "key18": "FpT1Eow38Ezfjdv9p4ymk1UcZmfBy1W9EpGtLdFsPDgQKcsiDT4jrmhpEwXX7DE8tT9BJ63TFxW5DfWSfwUprtc",
  "key19": "5duiVzPVSwyvbBwi32oabkYsLxKGsNaG7gM1i3swbASRXb2F2545g3K6MtZGkwAU6UxHwWaGTogQw1BAaC6N9Pz",
  "key20": "2eNpE83655HjikETjRV3rrQuqaqTm9NSsCirpxW3G16yF5mRYdHLShvmpg6vpaVf35S6xx7z8MPYQR1xnJZSCaHr",
  "key21": "5kWruLobbE6djhVk5MMVWyuJUyK4QNBby7Rd95zuSAipUSmoX4bms6zUF36J9HqGCuo1r2jbgXsVWb7XzUreudMr",
  "key22": "64HShh4kd2MMsx3r1PuyGZUdtiMMLxUkPgrELM15QJLj5yeNMnYCrC7RRv4dnP11DynQUnEVpEUhy5ePjpV53w3u",
  "key23": "3ZjyQD9XA3dWHzjV5Qyp16ph7Qq93PdKcEqU1gzsaa4anGStsDoxxwCCSf62hMq3DL71L6wGX9dLQwn2GHET1rBL",
  "key24": "3WpowvuhjgffMmRe7TaiSbqs9ia7zfEofj5N5GQbh8afi8hFkEwdkuuMCHiyFfJYwXkUVt6pnR3HXMkuw4Dm2qNV",
  "key25": "2aiLPtXEEr1GEpqkwTx1Z6sfc1Prm4gzybrmBBeC1xZAsK5HXQpibNyMVMWLxLm7G1GCajc5ZYosoQZCcsAStgfz",
  "key26": "2xaZKxE1NEdpUkoJw6gUbe3ZggfGp6LgkHfU4oMDR2LmyNLmcSAhYBUsAZT77j1eRH9q3c1bcWi7RhHKwL5Vq4AC",
  "key27": "5623BLg1taAQLeZ1fnhAcnYr6ndLL3tF8HDp4jnbZRb9YTMnYRk8uSiHy8NjYcSUZUXCNaXGHTDSopqK2NyvWFMJ",
  "key28": "3SrXTHkCkhxmhiNipTWVrRxEnGTj9wiAUiAi5mTpsnRp3csgU3NaCJ4VZJ13ac3FTXPWjfYzkzzRb6jWPxaoN9Yp",
  "key29": "4hCp6og3nPHFFwYgGwwgN5uC9DPPGq4pZ4fjyKVGmqQXgmMb9rFbonQqopGZNHZ6frcAnJ5HC5aYhakrCdzi2Gkv",
  "key30": "4rkkgBLqUV7PgrhmbT1XTgYuyzoicyurYnKZNLjhr3GqMXL3KcRLxCtNN9L2tsw84gfCEeMnhi6Bc7t46wZhGELo",
  "key31": "762ZRTCgL8g1zDB3B1b8PkguBfphtMGEUWNnnWPturBNBFScj6ctwaXn89tqM1Pq1fnftrMDLSogbdVnApmDEfE"
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
