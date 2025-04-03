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
    "R5GxE3wWfq96apnMtL6LvkfTVzN9sPeL5e77zSi81i6csR3hY1bhqP9kocvexW44DvSQk8JJGT9U78hh6CYYrKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vu15gz5A6xcrixfjcpNmYbp8TdRsyHWGRYy3bsPuKauh8K3dAv85e631Fsx4qYm67JW6Vx5XtQwUxwqJt6DTWdB",
  "key1": "4skWksnkybvBMGFeJDq8hJdUHiHPjkgitGS6KtvmiW53RfLHH7Tt5YNBJwyi51xzhur5fejhsnkcowB84ggthYEt",
  "key2": "4orVsDSXaaR7o8rb4RUepRev2dNPmuT6YUD6CQUPxHDm7A2u3KEvXEkbZtHzSpNcnCntkmEW73J6TjoozjHGz5Mp",
  "key3": "4Jb1fsMgXx3dLwFxYNjoufBYx9PXGT2P9xRkKZocdQswftYSvMXB2HuqUj4h6gqevu7FpW8JNCXJ5NTh3FsnmRvr",
  "key4": "4Am99gd7epUAZeuE2HjsoYQrABJDZXsUV69WP3tNQNVBggiC4C3EiTVePqC2G9v4jqs2FA5EofzrFUym6tPzJEpU",
  "key5": "5w2gR3bUKnnxiNMFMpeKKeSsETUpJfp4RRV8EUHjHcVP7uCRPpCKMjcudsUu9yR42WvfGeJF8JMTDPkNmrRCy1zB",
  "key6": "Gfq3CEaBmYBamDxVw38rV6DwmEV1hoL5rHTBVqiqAK1mWadERS6UTKjxoyGFyUWQB2Jd8GP9jYdMzUiCJphE7DN",
  "key7": "2Y7iNrh8WQqTxJtGVMANCoF2DVKsPLFBW5xShomXCLppmBbpASo9YGvSf6QsqCri5DDvSa8KdBWbiTCLehxp7h4B",
  "key8": "2kcjAunDbF857zoPsntmFNj8AijKK83AXk4kJGYKDuBQreMQvJpcVKwL1dKoq8GPVPkMpNFj3NPtXVYZrRBdbw1o",
  "key9": "4iQWKxHWUa8rChE7tdGtQy9ybJBXTkgQ6mQybzwwrZBwxHCXVvRiMJ7CZrB6RaV4fRmcCBkvZAzax7vdiGCJ8Cy",
  "key10": "2MYwzWgUkc6Go9cuexrc4SdXhRmepCx7D4KWPV38XUztzZeWqKduPQk6sEF6QAqSJwrSnEJpcmDiaLUTE1nnJntp",
  "key11": "zWASLNihWH7UAPd8qMR4u2XKWeKxJqVqv5TeD1TPpJZ5enBFP67FhqksZpvXCNYzFkwSchTH8Hi2uxA27nQTkm3",
  "key12": "5tD6Ben8C2yPBpPdUJWzhThGqTQimA7SfnNgt9n3rBiysEJQ9n5DeRWwcpLx9mCtSAtEvXWiUWHoyk4qkjGTs5Gs",
  "key13": "uwiVKzzVuAtWRtG2Nb1mBi4Gp4EY6DFRWVzq9UgCLbsW4wo7kQJ5Km8LXYXrCH2fYRivRCkpmsvgciYzy9qGT7g",
  "key14": "dJ9ZvQsDTT4DimxUbi2mn1BNCjCGEAZcByYQSE3sLiF91bU71AWGCNUbaA78XhutfhS7zQakEK9a3T1skfThogP",
  "key15": "4XD1i6YGyLXZRWyp126m3s1fYGvoiaaqArzZ8dV9HTy1hEfq4dMDCwnspmFeZuu7Jw2ZXfzrDnuHALUCdvWjMVsi",
  "key16": "p1YmDLhc4535WKjSxBdLX5jwWiUTvAZFfrn8fS22h88ZFMyBPAgYKwGg2FEDLiHXinXTHNQpbaaoUDHDp3izj18",
  "key17": "5EcPaYt1vWJprU2MFi3rN8Z6bb1ypVsx42Uqs1Gc3CEoe5afze1L7ci9otbUnvWisqntVvsVvdBDaXegXRJ8Pmsx",
  "key18": "3yZymK3fcqcZryJ5MiYbuimGj27r8Hky1EkYFkwXYsqSwCWqf2AfG3bBw3FCpSuM6XR4b4NRkNXY1Z6fAG4521Ep",
  "key19": "5se7GjKBiH1nLNBTMo74WdGZXvKwg8KwrpZS6gkEzRH4hEF5A9fD17DTU7d1APkCJiuYhxoTjTqALi9q2nKVJE3m",
  "key20": "3a2Q5bVfkbvhMhokgqQQNk27f1mTD8TnSWefbiVjH8BCz9W8an9nSRoV5XoL3ut1rY1SUvYTz2sVzFEtt8fGznjo",
  "key21": "4yypSiTZ7ZWAYT3p4KwTJsyoZDGS8grsLr4TqymQHZXqtrJ86W6vZCMgR6of5ZjBnjASbdSSm8yjq3ryTX4JCKUk",
  "key22": "634P8HTAaj55svJFZ2TGk6bwiQB6P24MNsu9PAZA1JDHATFQEihiffdsDyqeCSgJAeFQph6UL28YQYuudaorPQJY",
  "key23": "3A5BABF5wvREC9d8qnmYJSXDxogZHuji2aAp6scuZcVxE3Fbi7j4hvQ4dZdptbXsChZcP3Ni12BkhVUPeANyHCWC",
  "key24": "3KHXyMAdy2ng12GwKoD9xRFCitii8aHr2ZeHE2c277xwevoQjnomQpVS64okbGBWoMqkXqimxw2Ekva7pTywwt27",
  "key25": "5obDL4QZt32w1eFqwYtj8f3iuHNxPiDxBZ4oHMsBcprXwMeTWPYp8xEZ1r7Cu4Vzex7ALWvCB5N4BMtpKfKTWXQK",
  "key26": "oq5inZJ6nnAgK9ZtttQvzTBdZTZuwemuWeRV7XEAec3JcBYBDzh75P2JYLRJ49QKf6gQtTkwCtmQqAEVEToyr1r",
  "key27": "3kra2n5NymtQnjoPyMJcG6saJ2ozbTm1eFkpJowNRjxot2924oyL8MCojPyB89VddFUKNpyz2ZnBtFZ98UYtQMjw",
  "key28": "3UKNFWgoMgYQQvvQtaD3zhKHuvijcYpTeGR27nxGCUpDhRww87UHC5pGMrkJYjyysH2EPaXE7nexU76VKu1gx5nX",
  "key29": "4UoC98xNo4kUwgXf7XKvqZRWfqWWRkkkYAWKYoVKPihtXyoG2qkQYvGxVFqrhdnQQ6vtX8dyCFEY6VULU95QxCGL",
  "key30": "3PQEgLJFHKQkkUbMwiaAVxLCwQFU64EK2iPfPU88XcadUwUazSbLex69r632X8emXU71o7eDe8zZ1r7ZEnjD5zCN"
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
