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
    "2Lf55p6ci4t8ycSkQmqioLkNKJWhNwzWKHzWVK1BK1ikJzpnzvsTQf9TcnjLn5kZUKCZgJ4XPasqQ1Dun64rHiH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGtB9jvDxm4VPELFnK39Y8eFnTsfX4gKXrA9AgREtHs7okDGQjs8hJhs3a3jT9yephKXvmcokuFLU9r2pPMhHfS",
  "key1": "58jPDoWJTvpMhW47A1AcEd1zKYzcB6gJYXFzu6VkJW4bQts9k1dBeu6rbBcCZYj8YKn2DXBNjwBx5zwVzA95XWLo",
  "key2": "5jbMqmjQiNCx64w55zD25r8TnWsBtJyCGzXmyL7tkMXdNV6cbQRVgn8qeCkYdBWcbwFVNiTRWoPFDx4uyQYUtqfS",
  "key3": "4teefoS2gxTh7DB8J6VwETSDqEPN55Pja9LKFykgLP22CfR49hipWuUMtLB7VP62czsL4goewaeV6LanojhjVfm8",
  "key4": "2sq1TYcLnQVcgtDQsq1QdsstKkzDcaiVaGCiH8zE2VaX9fD99yQnLti7JTuron6BKwsUgGpQxtojDhvgMCNXQ2Lh",
  "key5": "25Ppma7iFayF7BocyfGX5REytdfEiavSgRutT2dTYqgNRgga5bg1vFJEs2u1NvSuQjkzPRUKu49vDHPvbRYXApeC",
  "key6": "2jKXw4xzPaLMDhxyVjzmvvmmoiKm3hNP6khBqDnharjpnU4Tnk1Cy2j7eZobRCJe8MrLoUS1puxWR4kDrGDA5Dim",
  "key7": "ejSGKKxTw6wwqywXCvsXsZHrcmtb9Yw1An3gmjMAVcc9fsHdEGtPegTKAwDUDR1kx7o3Fbvid1ZAnvYDSGZsZvz",
  "key8": "HVdV2nzJavufsM4PwJuj93AZQnAEsdzCPqUaUawEMCvqJEegnB1uRokXTnTn9PwcZtFiAxCauv2qjQ396JRud8L",
  "key9": "4HUwSns57pnU5YVCZMvP9QGsVtcWfKTLh6M5PPA7G3N6btpvBfrybjxzbvVxTSd5Ea8ZnPG7JKPjgAnBpwC6MBbT",
  "key10": "2SAuSRsdCkEmyKHTjzvBnGgw777uTTZc6D63iiKjP2iRTpDWHpS166WpDe73Qq1NDx3mpjPHcDs2Ug45AhpwXJW8",
  "key11": "3MtNjVJR7xv1dxfReFMchAaxZu2wc8rjcX4qZk7hEwWXsyck9fSuv3gXahskcpCNNky5mwcMhkDfKg84zRsNoYYD",
  "key12": "61bmJ7nMDx1z6ojgQpptqs7tW6ETtHpud5fMu56bvhtUv8RLwByjktgtvgi2VXf9K4prQPN6A6Ex1SU62vx4WRtf",
  "key13": "4pu7zPw7DHyXrq6nbq4Zvx1oiqGbzkUHcd24xQ8wQfFV7uPSWen1jpyK6avUXz4DBegZBYWKeveNTgLYASeULgYp",
  "key14": "4kupHNGMeva2V321Lq4ZtnEzXvbcH4de41yRKNLGV5nSvoHCYjkDBB4LZuwbJkNbfByD7PjST3btrWaGRTQQXA5J",
  "key15": "51dFj1aZfwavansMskXQjembNwz5aKVSBe88qbSb3shRBDFx3fPNTVCuwG47gincWHEsY5LKju7rANDsKtSUSm3A",
  "key16": "9sd52R5a7ndw6BZQQtrNcnzFeFRXYubFwDay6p8hUoo3zAnFf8qRXfzU4LZXM8X8R1bs1ao8wAKCWHPK2VVBq9z",
  "key17": "56LCf3JPHqSRWLgU59beXw2UJP4v5XUohM4tsrwUj9qb8AQhBVq8oWuKc5tjteGvuZMCsfh7u138EyyvXt1yyHMS",
  "key18": "59b8wcwSKXXdzLcKFfs3YsgQgAY5fvRJonfQkGaFecHj12g5g3p4yany7XcwbtyjQWX7rZvaMQGU6SMpLExPNirC",
  "key19": "5o4JYFMXFyWirSgvo1Zo5PEuy65GDE8CKG7px7cmNRRenoYgzYreVKwi937F5oMan4r85Fjq3ErXxCnzcNpvKPFh",
  "key20": "2YgmZpE1sYvovu1GtNiGLfY4F2cZwfjY2Z2Ej2FRiS8aGrRzcQDkLKzwAipzZWTqvtPhzcwVoNj7JqhELSKjDgKe",
  "key21": "45jk33nZcwc8p98BisDYkqSSGNiPMxMsVUiEyJs5sFDgYo54unCgVEn3aYpv7cGCgJFKPkoufWDF4EftWqquu5AM",
  "key22": "4ja6uEM2D3yyz8QNbbz1F1op3fmLr4izhod91qbY6YFNxCD4Jbydx1BxhutqT9pFpSmeFfMdPNq3X4qRjmQoftrV",
  "key23": "424W4JzEhQWPainzVrVzyZ8tjti74jxnjJxHNLS3eNxrw9JRwTKeJ29QHatsGoRcBhVWvYEHbJHbUryP2d6xzEog",
  "key24": "4ghoUhYUhmNcQQCR7jU9Dee5xZEkyGCDio1vH6x8pTYTbUCTcveFtgarH9tmLJwpqmWYfC625YjmCErUYes8kUZL",
  "key25": "4SdfZqh7ebcDpUQaQUBiYagRL7vJ8QWynXvN2ixChDXWSFVDjaJ7NvSkN7CnU7YvithPyZoshgXL6TiBWkT31LNB",
  "key26": "4iw9HgfKt48GTALUqS1TMa86mVEpDmRkuESx18rL6jWQH1ontASFwjqtcHZcTDtyC8FiwaT1zh9WNwQg6MjbEK69",
  "key27": "4CNX5C475obH5PS5pMUQsFaRNTooHnZvHDw8Q2r4F5G4n5Pa1eCAMwwNzqCUKJvcUYx6ubGFm3tXyREdDS6Y9qbm",
  "key28": "3GQXbvaBnTArZsgCZPqvWP4hx4sWcTDZitLXS2NGM85RQpHFztRijTJ2SySV8xksifBbSbue2iYHZhnDmh1Y4xzz",
  "key29": "2GyTq5iPPmquUg3ctjizwZxQ8iCGc6bucgWcPRfejVZzX8mavMLuhEsXC1d4dZJ3iFKp4iUMYxHSHesgzfd8zGR8",
  "key30": "3aJSCUWaSxcYLBc45kSATs43AfLBDSQtWxTqe3UCSLPR6tMxLr2YJaf1khB1VxTU8wTKZ8vcABtn1GzjMUnMXt4T",
  "key31": "3S1pZYrgnn5PDo1Scxn3LyUPvVB23buxywnFfugHQJ2VMgtu662NrE3BM69z4AsnBRVGAcmcFN3F6wPPZtxd93wT",
  "key32": "4tqBecpuuRHkGA4mgmyDyDfuPEChkJTzZ1yKNmkuSfpn2QYgeaD6pVAiNsneC8mpuHwMgJKcR1dSvYi5giKNNN3u",
  "key33": "2UsGrH89xyQtFCCuJx8K38i7rxUvwbuNPtUkP4nVxMCd5rcE6NfgFfcdgZATX8GWZHHrzA39b4xWKUTkisu1cw11",
  "key34": "3vsVM1DzfcDQqGJNePaag2TsG1szTRPKPf8Zvp3Jury5TcKPhcVcJYRGDKzMLXyyGArT3DqLWRjdZx5AkAhLMeQw",
  "key35": "2gLorr6ajUJP2kD1x6AKhiVBEfDkxZM1wUzZsU9GECTvnxwTMaAQAJkhuGjgs76SxhWsw7ER39LxTRPGLFF9VwAm",
  "key36": "5UqPygroqt8iky6npKR9kjNHACHRgWNS6ifiBoCoJLDaeTrMwrDPMccBQ8iTW3BYtSiqnxACZCm2XnkYGRF3qrP3",
  "key37": "2KwtsyjGxrLEQ1iLHBo7jEddY1f97Lezv3nRdpBYAFZKSp2TSXZxYtSHkXeaVPKbKd1YkVCnuxuw43M2fEavzbHM",
  "key38": "55iA7Hjk6uAEt3xVkBvWbJhx3N9MUAYC2DtLGmzVYHfpS5QBfHzt1PL7GZtVopGXZRkJ74m3uMfaRydkhvkdXSy3",
  "key39": "2AB7N1DqwdPqteK11LQiwpuubvd4sUpVNxx8ZdUHdgPGo7bQH418oaYA74EwGFhxhbdW914rjtcDNjBR1itQPUQW",
  "key40": "5xtdDpqMZZKtkFSm9VnzrSgHMwtLziUu8m2wAdTAw479qYUG1ishgnmUdAv1FnvVhffBbXqoxY2iE6dMcpdvMByF",
  "key41": "4uyUWfeeoK3nK4kpbUEt358ogB5mpayEgGrLgmL8p6ttWLtw7XfCNJQ6ZFFEdgRk1EzArneg5VBMKK3pUJdNwSN2",
  "key42": "4SNGCdkr8HYcpj12Ta5hsywJHnXzrH5sMih9VPX2NhDXZmmEZiPq28X3qxTD1mP7bqyF5ezNoGbHxcgNudWbYpcN",
  "key43": "3bYVt5FWrBg5yUyMWHo6Q8YZfbrGfWUZZpfDXPQsLvEY74tngLjZeW8mAUgA1d87tMkWqFkZ84KJwZ5NXhuDh2Wz",
  "key44": "2P6WsPF4RDddviFwb7QveSHXheJiTfwbf46EzJLzRHcMVyUnbY3yHDtLK4ut4mjrEiZb11htdDgff52phP69vTAr",
  "key45": "2yij3CEirSrWHKNRRu7n555eKEuYeLNgoUP5cRYdMES87W84PcRYVFnLSw7ScYyDFLgiZBZTUvawWpVdBu5PrZBd"
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
