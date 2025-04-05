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
    "2i8u2tk3X11yeSAbbS8mvT6tWnzLH58QWUD2eeWHcSgrGJZRcjzz4GNM8s7n4e2uHoDGbKiw2vLJbgm98bhv6DjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASPUUkTEnD8B2m1ikh4WW21oUCR3qN4cfaJ2Pv6ghv5EQGAoQyCH21xip2S6sJKDvYK1AuhC3SYF1B67tUFQisG",
  "key1": "3QeKmP4WshjXW413wvsX1wdRFJhZdy14Axc4Scg8MFYQMRf3axSSoEA1Hn7MkH5fDyKrPaePEeQ67BWEtRiD7CEB",
  "key2": "uNTHxhDic6yHV6srsjpyjiRrpEpgDyckctyHB1ui3qSyEsdSPrLG5mFDQATP5LshWtiJQ7ZDdTJchNHSJdRt8zk",
  "key3": "5Yoc8y9jU6dby2xtwNZBEUkakXTesFpJtk84ydCf9grdpgGS2NKW1qJxVnBEMP5pSjhTJdpzD72onyMft9c9iSj6",
  "key4": "pfDaHNUcgxKbkTZk1jxDBYepbNj6HJeGtuU7kvjmdtXMQH7T1oD5s4ptWFdqbL25JsK1iC74KpLwPPEY4BqnaSQ",
  "key5": "4fhbWyYWnGQyGqoTusc2HEAQuFL7xCw2QHtuQEdaD6yVUc7zFtjinC9Y6qiAFqPSJGwMDfboCEiTb1wuUrsFmH62",
  "key6": "t5bPaD71raMkAtmzaGHuoMMjvznBcJwpUW8d4EB62H384JbwqMJHjPaEpCE3tgbWPXdvBTPsVp4ndnpaAxrxLPA",
  "key7": "3WgqK3hnCStRr1JhZY61xinGym2ph7rZfQNdsHykB2HXupu9Sc2r1w5QxhyBENQM7epxqY4vtdqc7otvQHSeay68",
  "key8": "2knsBHZS48uKQSPkBG8TUyEvqxzLAnWTkQtV7XnbWEZbEZbMWS86t1JKkbrafkPgzesqrkRTJ6hBgj4N3H5m2Rn7",
  "key9": "WuJNWyzoCPGw3yHQU3Zbmk5QdXPafNFuUinwHsXHPrEwDPuS9W5o18UZe4wGSNazBHPMev4HA18sKHkoj4trZ23",
  "key10": "2MrQxBfeGH4FVypZfqzGL6WH5UMEwusSBJYvhjEHkWDfK1jbNZj4gFt7ZbJzHi7P5fwJhTBUJ5BanxxdYGrM2pAm",
  "key11": "SBi7ju6mmS8TTjkyLMGbaaKZqUJjt8siSLUUMi41htS45eZJ76GSJ2B8kzMP2qiQyf7UJqXJ3MQkyfhguVmAxV2",
  "key12": "5JdPYHRX5aFhU2wfUKzP8Zgn7myCEL45HLhXqzQspvKX4s2r1PYZXFjr5wLQp4jSaR58siiQiZpKVMNtLNhKeuiM",
  "key13": "5MczsuAotZD2mXLbZdUZGWSiu8K6K3ZkZt2nNtUMo3e62XdbfyjWPJDr2mo5ptGwqAmYGN2JWkef7ewgfw19Cbya",
  "key14": "59WsHcPiNjDNe3jAyJ2tQjrmFzPVdT47P9Pr6Qt6BwLuY4nEiVDsthD62KRbKvsx4sfsR9BPMWn9hxnuTQRwH7yY",
  "key15": "5shuwqWPky5EZztF5bfhqtMd2jphJroJ7PUnCMCJTJW82jwGKFkKcmFC8dJAyHLwnubG2hzLjD9XeNpQzq7LBXvy",
  "key16": "3nXJBardBEzy8LkKyLWomz3jzv6KtPPRTopfuLEQtGkxZYuyxw5pZzZixsQ8BRuwC5eCACBr1haH1JSpZ4C65KR7",
  "key17": "2oQNCCo3B9Vtmzc8cbyQ2oRV5ZGbget65GfzfsURFxmcNijuMhg8MxP3vz19XcQGp87Ti74iHzk9VVeYJ3vMTTrx",
  "key18": "5vpBpq96TiRR8bSrYriQB2SGnaUj41cyiWSeWfMedEU6BSSWE1mWkeLQM5ZWWM5iVGRtAfUvT8x6chnuAemGzohm",
  "key19": "4MAc1yH4gzNMH3vkRpecS5SSEcWvvWF4yMz9SBrGamsh5ZPqtZvBoUKqD42hfdpHr18YEJbDuBnee1Q5jmdbqS5a",
  "key20": "2SvmzcuU2QDKBnJ44qt7Dt5P3nQN1Cuh5eb2BtXETfoUjjieEjghSutU1YUXkLxhDMFgeLm7FgthZrN5tbfobenN",
  "key21": "4QfvKE3AW4D6eHUTaPs9UATyPR6xxLGvi5L5RKfh1RNVCBn8mnhy24i3kwswmVf2XvGAZQApWmqaeubWyRgimUX",
  "key22": "4r9DST9vt6AThH1iTVoNqTEYD3hJj3qG6UyJMx1dFGCrd55S6S7c8YoxQw65JgGAKj38tZyAr58WdsTwpsFy9eZM",
  "key23": "5B4bKtdQd4zvecpxWFAr8qgGDqFkP3GobsXHAQpKnu3h1uzpoQnXCHG1a9as4gcz86vQ9nPDiVJnTG2UJK3EKMVK",
  "key24": "3xoAyYnUzzwwgi9oLHiR8tP6E5eg1ZUkGTai9rYAmW4oZtKRbAJhLxg4SqP3t2xpDrkTPBHscxtCEZEihRBUN2yq",
  "key25": "3ArSaczhb8wBAqWajU57ePD2xzLDi3tjMfQgwqyFQnr1CkdfcoLePFchvyDTKggDVYkzhBsEfM9qkmag2omnh5zY",
  "key26": "nNu59m3cDCNuhVtCB8EVrZhmVNdXxJEef8GQwDVS5arHNCTvgUMxGdJpq4oNitTWcFoQeAGSY9yuYYsr1xz7Co4",
  "key27": "4NMotYpNJjLkCcZu8g7fJEq2pZJSjQ42VQfjkApQD1AxEhxBKbtSUHYFuzS86WQtmycNMr4VHsFH9BwGQEaTPsTB",
  "key28": "5R4xBJsxgvvCrArNMW5wbYBmxVgAF8oRznvdnW1DhM76wBi7NKnm3Fgwjzwwsa2u1nW4h227o6HaEfUsNUu4uDVz",
  "key29": "JF7EoxiPsu2eZi3wKCLmKA3HfF9YSb4iaShte3Ap6Fba71o5SkNa1BtHKDqtMpXNxvrwMJxYc88JhSgyaeqWsek",
  "key30": "4y3bcyby6ejjCdQbjCc6snAus7RSDoPqHdFpND8SXy8SVUjZyt9pUccsr7PxZbxSknLBq4DrfBYugk62e7deJJPE",
  "key31": "SvqtJt97RpNJjxvSdqshfm4CTPsMZA1FAiyGybCLjkSiTNEZwYoe3BSM2B54nB5brHMbrd3if8eNuEfQDZzC748",
  "key32": "4MfidZWAyDAJ45w5nRvsfycSh4cuodNmPWNK9DTAYks1y3k33SNRiEzjGDPDrhhHqzPRjw1brxeBzEWNk4sYVyuc",
  "key33": "61hciUHDifvfJpgprEHtSCBRcfFW4nQphqv97RHSKKDudWzto96nf8YurY7UgtSFn3WPHhDsRqCd9VKYqEa86x6e",
  "key34": "pTvFhgimXWULSR1WfXUrijdkHwTU9zesTxn6C5MfbEdYQJCbY5BGfjYwcmFHSgpS64Vtykx3xkzaHwTmsghKjXG"
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
