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
    "keFeeg4PGVumVvHqLKWj2Lfj2gShkddcmkRcPx128rpmetZ1QNN8qiP7Luq9W18wXCaMad3hNqchSgftgsQpx8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zepkz69SeZGkMkkDEMNSmv5RbFtWBTfRwqdqcpNU4sLaJdt6pc56BGepCXginTpQgi7eHmRvJxXERZp4D14aSsL",
  "key1": "2bFhMvboVZbaZRFHio5vuo5QWVm4sWk4jpHRYAuLzRetMzyjnLpMPPRZAaYTkySQHmc2QYSvK1hD6gSkMD4C8Q1q",
  "key2": "2T1vSMRBWnt8JkGdPM6FBrD4pyR5NdrJDwLezzDSE1xaCdpt63cR3KvPfgA66nurgryPQBb2tmyjkHHfr3uikGCb",
  "key3": "2C2pctkSHsAetVHuHrrTRo874sDdJtjCHZ8MfoXaW41R224pv8cH3RiXJ41CsuRxtpWzS9q9pqRssiazS6BAZE3i",
  "key4": "2gNrRS8vhgc6fnT6XcSjhPK5mvVmZvFVuUGxt5Y7BeUwcQetZHRv4c5ABhYDHrWA363eAgzjnfyBZ4e6rXYX8Liy",
  "key5": "r1DXknDhScgV4ZV2MC4qE7m24GzD6rkE49HSaX9By9CkETW2FugBUvkrrWHartB55A9j9BYkmmw3qBWGxQBkDM7",
  "key6": "4XtDxWgUA7YtktebeCNngdsj84YHg5QehEpy5KyT1b6Bao5iESQje3PTeh15r9vbRNnb2x1iAvY1uFJjAf23TEVS",
  "key7": "4oHSQNQizsuysfYU8ocK8XbxR1aM2djcC2YTM8fowQ6dPsJsDBzt7Zk31GAfmxVLDxGT2p3xxCojCq32KPhiSUu9",
  "key8": "3ixEP9fdVzcCoaQaWNYSqg6mrpMMVwRpZwZpyFWWgNjQqorn9tjtLeRyfJRSFmiuB1MCaN92n9PJWsoBch97FZJ5",
  "key9": "2dMsqwkmaNVggAVgkDq63QTZFzRRTuE6u5XHv1HDLGX5kqwWEjLGuKsSH6RtWHaciH1bUWgdMXFULqi3Hvd9PYuZ",
  "key10": "XyFX95Kkk6XLuwYhAuqzeqENbcbHe4n3GnfeRSGf9ZhtBHN2gPTxBwzmeRwLXcWa5u3CxYnEpLYwoRnuzw2TrAJ",
  "key11": "2u7WqF7rhc584PkijqYpiVLG43etC9UgcEtxCmQWGp2gTAcEvx6WBG1bT1g7FRZYdoFZdiEiMfWFYMYSCaWSHMsw",
  "key12": "4sKyCGA5hCxVqLF3C5toLUCXaLsANxdMPCfZYjHzuVWrZpeawjXTdP984FwJ5KTW9AZyxvPYRyb5ykbHuGCzP6Wr",
  "key13": "3g5pkji4nS1xFMKAL4B3Uy1Vm9AMcNQcerYDznyL2RfcyVetdDKR75tsmZDBbVpYw2jUX6zrBAvsUJgU4iKzaVTL",
  "key14": "5DruM1xVLCdynQ89phd97kADwdW4VovWY7TK4DB7hcXgXfeGiLjioqN1kZrzuQTpWNDi3R7KTM4jmNiE1ETWXqCU",
  "key15": "2PLeEHag2DazDm5P5BsXet9bW5cnjPaKw8jFHuX5i5jStTDiEhzP6cj1SRtpjPsy1UCviitWVPE3UrnynJ4CwsbB",
  "key16": "vtL9pKsTuuNd4BoHnkcS9GCqCXYN3yg4CFPEiWvhPCkNHKCUDpmyhaMHX8NN5F4xWms5EP1LGbhFgpzVcPuQyf3",
  "key17": "5tPGm8GexjBGQZ5VXBtZxrKeYQCQdpWoTq21v38iwV3zUuLxh6CgNjiFHbwi82ifdhMGHhNcwPjfEVywByNcsS8C",
  "key18": "47kNwfnYVinRZ2RkD5iszirDigAUj2VSwmbQtSArUjbJdh5sKZULCAqsBiohoYHwUeBGvuVEQwrjd3CJyDxHAZaU",
  "key19": "2YrKfAdJKV8QrRfepLAJdwUsrHdjN1w2grs3eKaGbrrd4DRRYGnSPNZAtWXxqHpGbAV7z4EW4JuC8TmF9QteyS9M",
  "key20": "35CCgniNxiy5Th7Qm59Xi7Ehv1HxgN3KkZPxmKbUyodhoYHPJYr5b2z52L1Nm5sJq3zJvXj5t5zkFsbgfai72JcQ",
  "key21": "3Z9UXZvx4iUvQQbsYc8oVzC2DrMGv5e5VbJisAM6zfe7kZbypC1mnrerHLmpTodsANAgqYxgmUGhbnnUD5PwCYi6",
  "key22": "jwq6oKdcuyB21Y35yJShDQMDshYnWs1c9kENs5hVwmwoaGgtwMzwKtjtjTraYnJqGnvDwBZmJuWgqVteNRcYmds",
  "key23": "2jMEnozhMjNJ5vpngjgSstxSdFsXMsE2Ge2BzuqBWYMDCAJvBvgHHAbUGiETW95gxGriskm2NaxVsQ8nKVTnXzdy",
  "key24": "FtD9LWn38z59YFSH8uHxUanb48pUQjSBsAVAfv833tkBibJf92KztdToNjYmmZLyF8jAcBjjNLzQvdMT5R95zbE",
  "key25": "4ZURuyj3E2bkvdkgAYV98VF1Lw5rQ4JCMTnMmt7RcRMmd6aSKhPHUMhdtphTQpJok4n1NtHqa8buNArwFcaofmNm",
  "key26": "4BbLoGL3Z4K9oCwKUWHMYDMTXAw7rqNxtL59JLbfApxRtGLZFVrvuRDYrz3bY69HpAb626raeRL5V6NgCCMtyq2f",
  "key27": "4fCfhzG13wco6xuEYxbQQJGpV6MyJBKfbjLrGyCr7TM6pe1DSrxRw1LMXMBezDQ34RuabVSAhmBxrB4qwAPsHrBH",
  "key28": "2n3WDkF5wQ5kjeeeG3KGNiW2HiQkANPb6u5GURnq67BJHfMQ7QdR116QEB5WNarvhNTmpfwyQQp8oiAQa8nXo7Gh",
  "key29": "2J2MAMBGwksmdMbJtZjLq4kM8zPVEcv6S5KArck6a7TrUVjJwFohYNCFyZxeMpYu6Z2wCQqWpKWAiChG6zvFQ7yZ",
  "key30": "3KLB54V6WUSpYkZWBw5VLmdnXurYqTGJoZgc594BeANaQiFC3xcTkrV1tT16gntNqWuoJ1NHJwuCZFuBsjWm7dwP",
  "key31": "4Kj7tDWgmaUseYvxrSsfZWYUmUzTvRkT77Kboe8zGKpncLVth762d8dcKWQUV6vD5zpfrqSCnDsHxaFAXBNLAYzz"
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
