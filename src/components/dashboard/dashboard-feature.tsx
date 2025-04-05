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
    "39FxunC75kpKgcchCSoXSq8Nb2ytGxe92G4V2UGKdyMdUM2TMRBQYNfv1xkSo1cfm4uZJzpvyYf8J2RYiwj1QWV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpfdieNSW3mU8Lc91A9sa9GAjeJLkXYqSMcAov6ngZji43VXcynJZqhvsPYgEjNo4QgMEFTXspw7poAiZH16ctd",
  "key1": "2p4UPLP8cQuScraEG2B3h4H22shme9fNPg2111SCBnPaiCCPXV8aoqHYyaozYdDiXeYnzAVRSNVBTL16aqp5gYwX",
  "key2": "2C4jrBFmh8TjSwoGTre44nFbizxDwaTLUvsSQDDTEW8KvGnQphBh8AMD4G62CyNF9swTrLYijk1snfoCCHq7JWQc",
  "key3": "522w94tvdppaPLsnAZBcCqxThhYRAbTRz3n9hv1h7onSfKCUgrudNwnFzmMWgcSTNoSD4QQy8uwByNUQkRvsmfYC",
  "key4": "S8k7KkTcDDMXZ2cSWv6Lr7ivudvLnzyxBaAKCMLgTaTyvb1o6EMeVX32TuaSPxKggYgMgDmDFNRDkxz1Xovo17B",
  "key5": "2qCd8koUWkY8LAf8TrpMV4umjhDhjJ4hq6MQmzqJroCskyCr9LezLvQ1XywaVn5qabhoNcqhQgjF4QzwJwVha464",
  "key6": "2unyZ9dcsy5rJ2aYLXgN6x3FAcZ1pkAHBRC7t87gwtFCfWjDkSRtLadX8rJdGuqb8GZUq8PiRm88F4AW3Z7XpoCW",
  "key7": "27LkU993UerWuzEPUb3runhC8sPDh75TC3R9Ms6yBGjZa8dkwyKSD49Pn9hTzhfTJoZmHKD5pvHDDUrbTS8V73CF",
  "key8": "wDkSqFncAxKRibeX3vsf2jBD82er7fqX856CFSZnM7KgjAtWdSseH475caiWXzge7j5jkrgofKN5zvR7ZcDyEcm",
  "key9": "crEqa1HUkpbrR3WEeKfvvQi1aKWCDDeKoBcfzwgb6vSYiHDpSccVciQRgUxWQjDV71FQWhiKMYJEnF7FCSuejcK",
  "key10": "zLzpjF6JpFa88maSZbtaLKoPWKYRPEmd4zBFmtJC4TdMaPQPxKfRGKdR9TiXTUQmyqXKXRbSLgQtNnPmTg2wU1q",
  "key11": "3vTgg6KnPNEsnRHYU5gbCdgbjsZQfZ2pQrLzXQ8a6sqtdjFGNLp2RrNkGpCkecbX9thdqrEefanLBBc3LxCqrRKT",
  "key12": "3py7DqrT59ss3HCfK5vY69cgenkfRBLiXCKXZH43W4mGWnuGbbnt533SLH3jx17Ph6vM2cgEEsaqpUrhmQdk8wD2",
  "key13": "4sdi1H8F2Gi7hLPokKpQp43wiXGZaagkHj4FjADqZqPoimmsEY9yhHxGWZ8FiCzT3CPEQ72FpJJbw1Q4BqBkd3gW",
  "key14": "2knUtamW8FsW8sFDLjTZJWAvsSLt9n1o89CyTX5vp3LBJgMrVAuxFr9ztfEbuwy4izwcEkiuBa5obxBHcMkWQ1X1",
  "key15": "26xnE9CQQVfJAmXKF6GnkGFWsaFJRLtcTxBPUBhfshHfNtuRQDfqJNesZb54XbuqmFUthDMWh2J6DqTxQHkYv278",
  "key16": "3xxKko7Fd1W86n8PHV44dNQY67yukVSTw6EkReVVZNgenAM1NQAY7L68YcoFdW4qRa6tK75cuFRknYFb8Ay14y2N",
  "key17": "4eQcAdhjzXTvQFnU72R9J3QXHFsRxx7GekTDG1tdMt1ReH3gxihrQKjY2X6ZscdHqGZtWTGuT2jWn2zXzx67SEc",
  "key18": "2ktJppGAEbStFzBkeWGuCMudGyLfYknyUVttJdxpcPsRbxCGTvYb8MCWxw32yLMjWRTC7i55yQVSSHgHhMoxA1vS",
  "key19": "fXMj9HUaZkHc5hyEDrnwhJ5uYPdSjHZYK5v7YRmELi8xSbfU7mYTq2hu3kgxdJWsXuaoK4wzLiuVHct77U2oH9T",
  "key20": "2F1bkY6hngaV1uvnxYDHJganh4R5m8vaocRavckx1DpZsRPncngnurVR3naq3odc1eakXse2rzJVsuJ5RWLgdEYW",
  "key21": "4T3YTjNzY5TnSXH8wocmKmXXzW6SpxyW7GNJhVDXnftgdr2LYiePuYEX5nwvzZKiBH27bXDYXt847bLd81JgRUWU",
  "key22": "57pPuxKUZ7f4JviAXs3osov67gFn6xvmPok5S4nneYWFhyZ4eHxFE11XZuth5dn1fPkKehDtp5kedzvgv36SF44v",
  "key23": "4cx1X91jURxkANHY4iJNa2945jH7ZrMAwSH2sfaVUaFtvWkJuamSfWgrSb9QTFgGjTWVSvbmnXsw8h7W2HdCMpJS",
  "key24": "5SP5B2Ac3dwH4YHX4Cb47WWgh6Gpq2We8oGYpNoL9incL7a99aXtbgc1Zhs8ix6fWEjFuXa8N3y3TQvkbpZxHaHB",
  "key25": "5Lghc44LPrjaHFEUXNaEFxwtsV9e3DirKoRPs6tiiGQ2DLSMjsp3jGcBsF1bnsSosJPThGjbN1yQbjooxYsfZQHT",
  "key26": "4U6N684x6c3ADdxXnhU6nptDjzuVPNsFRhg5CkJ5S7cJW5RqcDJuU1edqGJanU8h1bDeMcLUx6xtAsYCMw8B6Xfa",
  "key27": "2X7sQ151WYcGTGHnxGKNvx1KuV59UUaHjyAfCZEMxZ5nkZdAD4tREYv4CRPGyhpY7pfM4u4Ag3TgwAeWsuQJ3ba5",
  "key28": "3hhkxLZbW4wTY1pxrJDKxadTc4Axqj4G4k9fVSodfdtvDce3mrmZ7X4g42yAEuGf4SbAfra1U313WeDSdceDHST5",
  "key29": "3GPx4gRQzkGAZSMZ7sUvCoysjG5s8TNsCXajnJ7HRCHyC79m7xfjC5AFmBYmWeLDdDu34LmgGD3UtF2stEdiEHra",
  "key30": "354v9w8B8yizpd7EnKgwVyf7UAAay1bhqVmxU9EvFSdfDztUVGUQEk7J91XHr8Pc6qf6S4CnEueMha5p6smAC5KJ",
  "key31": "3sBKv1RBbcLx1oQddGNwA89o46DkaE9TEZKZxevnCVLhE42198iSW6qhbZZGvYFe8xmbZWZZWSYpmGyhYCdFnaKM"
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
