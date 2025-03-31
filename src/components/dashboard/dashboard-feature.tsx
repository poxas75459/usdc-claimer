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
    "53YgNJzDzLddq83UdBBVhHzLBGhj27b3Tx9aEQdxUg4db1CvGkppyfrqAXYPyKQzV6ZsTb5sjLa8hT4uMogxbN9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLw3GsPybXZBwZ1i3foGdRWrUB852Kq6oRqUr9eJczWsrfxbPFYkwZBaWJySUQ85nD6NJfmRNnjUhSDXJPEdTEd",
  "key1": "28uDenpC3p3mAM5fLXhnpWvi7WjZCnuxMMLNfH9cQvMXn9xWtkBvFUZU8E3gVjoU7yeQwLVRT9Kzzpa19Dy9Y2Ri",
  "key2": "2BHyqJcjRj2BepnHm4dVmc8SsGWUJHa8KR28mHbPssvwSwFj5jAUkYrPLeu4SpFEzjDyBwzahEcrZQgbU3yvYtSq",
  "key3": "2iTgjTV45MxfxVeDLS2DgGiQRQJvdAfcAvLRRHyirc4U1S6Qu3TsDVtVEL8GRNHY5nRFC5xYmpFwPhSVrjNir3Z7",
  "key4": "3orJNT7dw4nMQJiYsmxvD95idHSmuenQ8EAuJLybe9JHPrEehQ2prFtK7KYXLpTStQLRKTKYeW8VYirtmfETUbn1",
  "key5": "38eqKVQDS1oqa4tc98EDrPBdtYf7EWP11evREScNAhQYSbqGNGHzfiazpPZxxbUoAF8dD7EWp3bYArpGAXtbB9St",
  "key6": "CxM9SPLrgmYdHjjGcZQXCoefKKr8Kx11MDTNen89GZKuv4urpSStg23cwFuJa1z5gRzkzSVuvxtVPinAkYvngrf",
  "key7": "2fkzv8gMxdvkdAAUp5zQt64QGU61Rwvt7uLw9U4GHzhFrxuQQpvpq1mmvDX7BjRhar1YFZBwqt4bunULuYT4Bsfn",
  "key8": "3uYjpCV1LLipdGotx3DM9avq69ZJApGiybEHV6TFKMnm1EiWtg4D78aw94XWQ4Chybj6r1Z8fyMJYYfq1pAeYxtJ",
  "key9": "58NRXcNHNJSmLpYEU53heWCxheLPdMRfyRbKMo6gqB78jLqjw2QRH8ENhpTPP7hZUhSpcmHCRpWmvLweBuFSgxKo",
  "key10": "4F1Kn2HiwAuvxsdz6CpZVXw4bukaB5bjk7ArJbtgHy8XyyyTBwrRx8DwQ1mckQZKa66KXUv18nZmAryMqqNLnJks",
  "key11": "2AdgeACB7wSfpmRKFyH33yWg3ztfhDdC3MeTAug3jkKttMvMobMJWDuzseN18BogRBhVWgr7eg8465nTUJ7owScb",
  "key12": "3y4baf7uF9A9y6m9p1dwj2UV1U2DdbShjxSL1obDjUYpZjUZc5jJbhzXhwsxovVrtgpfgbjFbpCKVoa8Sdr4hB5j",
  "key13": "3wgVv1SSVzda7QXkkytBGYNooMXm4YVyAwCK2MUX8x7e4owzJbs2PRdEAuo9uFMUP2NENXGsgJRPcfGVzD2yvZRh",
  "key14": "2PZBuhtgXe8QES88kW9gDfP6tPCnFdNQsxjuHWJ1YZzfNv2cfSnFPpqTmHHoBLncsGQ7MKt91dzhVKm3dUEcmxjs",
  "key15": "4zYcdKpAdB59ybFfPtK87YWHUS8WM4W9epp3xCEuwPErQnkd2XN9MCm3dRVdcc8Zo5e6RtueLJjERTg5oyme542X",
  "key16": "5iBwudTyT75h1KGprdbDHFHQiJtzGsEsiqg6yvnr77bg3tUzqxdUmqEPUHgmyMkABzc7T5rcJaq4E4MCNE3twhN",
  "key17": "5K8SCbm6p5Gcw6V2qmSmRPHXwTPQDZHekfa6a4eodh1AWtMf6rMG17NyHeVoBH8NHqT24y6TvmmFEHhAXPnDVRBf",
  "key18": "2qfpJ67jbDQi2hKXB9so8P6SCspuYAwQ5d6aNvK2AporALggNEcg6SvxZLMLnX2k53oRDixgfogF1tsLmWucLs34",
  "key19": "4yK5WubFqTxa4zHm9QkoUTtD4QeFcDoCXJVdBun3Kop7w8NxZrnwva3gnWMSmsF4rKh5EQa8bFKSfw2P2wYwUsCr",
  "key20": "2MopX228YAzksi8DVMUoNVKCoeijfj2DuraXoFx6it8hEVsSStL3dovhuQV9V3FQDbNccCtkHnyMuHzQdDCsYF23",
  "key21": "XXvfkjN4XTiCnjyL3qMRDoPe5yXeGQezfyM2wKbjNsTUchXopXFckSzUbqzFDnkrGTRQ3ey6JxqVyQpXCr8RvK7",
  "key22": "3EGNJbqsVVMvJmKB8AykuTsJRAjRy6Evyx3QUw7jzTT9GzmH5RhhhLZjHN7BcwbrjVHsGf5eBS1EzGUm6mLRtSyM",
  "key23": "5xGR6TCBDpFC3W7oyinAFws3aDNkF6LDVpGqdx2sZF4iucXYJ4pgrtcCgECEtU25ZXCUiXQWdhDarEPV7Wu6L5Q9",
  "key24": "5p3nKzx1HGpYqcqyovofWAjfLvgAx8Z1ZJeBtn57FAHLkYPmKDwDaK6PCMvSMwArvQsqKs1bRyznuLgF1MmMtMtT",
  "key25": "3p3JBmx9zN1nNr73TartzBiHKtg5912pYKMvqKb4oQQT6jTv8BuS5kkPWcyrYqeosksDH4GVWjfgmFqZMd5UmwDy",
  "key26": "4WKUsQjm9oQVaRjK9reVAAhJ55GNSwXzmkbhphTdCDQ47dkaNXwSCnx6x8L9diDccvVqSHx4o2WNV3QRmNk9TcN2",
  "key27": "2hrkqDJU1iM3Y4XUrdPnqLCpjjmYELR87o8fWWVUtdYTMUyc7JL5c3FC6u5cL48S6yGLk3o9qnP8WRqEMDRzKQih",
  "key28": "4f4ZhwjSUTezupXBo2ezWE6uAJ83QLoojFpQDVN5vwSEYHZ1JqoDkCLN5xEKL1cyqUVt1xiP3fRg3KsBa2FZQjCp",
  "key29": "5NgdmPuPcQrAj963kv2Yqy7ctjRKmMhxu3tJcRpgHit5tyEnzfTb13K4V32DzL5RCDUC5DeWuNwS9F9GTQwYJkfk",
  "key30": "5FZQik7dj31CKvkUM6v18U7PC6FGXML8KmPQ6zi3D8ssaQgEgMQwfjLVt1SUajS8Ymm48wZQ8Rn3JL68eRBJBQeW",
  "key31": "4XYPEm854LewcQPXYzSto8L9Yy9YcJpLr3kVSjfTCiupxxRcdWczPGC46JkiUVNUPW3uUZGgfNJKQeyRMqNww4J",
  "key32": "2V2bTRqVSLyod5ZB7kYnQa7oEsu8X1D9UVo4MJHkBee1WAD75RRpQLxXwKktQ91pp6AvSnw8tcm5RjP1VP8oneuy",
  "key33": "2miysGbY4BoHt824QyuJwD8NGk2DqW7iSbaaoAfsPgBk8FFfStkpZ72FAMaPFPv4VsEVr1K63tx8Yc8HQ8EJMfMT",
  "key34": "36qGFx2Mkg8ehjk78WD7qNA6yfeqKsCYwTio1XtJnNW3qvq2L9oAEx7C8ayCDit43s5jpEZNbu2tE7sGnxu7YA6m",
  "key35": "2wF2PYB1XzftTnuRvP3Mcr4wx3ppFqpRSm5k76haVZ1ZHzcffizEWKiKHxgCm1Z2kgMX7vnXvCv2iEnzwKg79UEq",
  "key36": "3suFcxf9x9nWpL9sffzsqPSPqAg2uYchi2Bb4fdH5jiecVbkhHddjbkLriKkAXsJQrqghRD6bpKEDFRYsuESiJdL",
  "key37": "2RPrgZBCXu1bF3oSjLwAT1U4SccEzK6GDoj9u4qq39vjWBDQfzbBK1ok5oah2zTfa3EvcVPWjRFoU1AVKyRDnq1h"
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
