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
    "4ohdxes5MzHDPUTjhESVAW7qWUzAD8LxYPWoKvPDA9n9EeG59rs6uK7Z394mC3A53jvMDv2g7EkAceAPRwxc6MQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rb5wXrVvQxHeF8dEcoyediBGMu3pho1zyePWgCjFhY1DMAzeXHbqhTU6ZARa9GME7iQst8AK38ZTPEW6FnMY9KL",
  "key1": "4UcdJT87QPS7a6R7TBRCvJihVHcBXvan9zGUB4LJQZ1yEv8dEQwMPuXgbaAHjJWk8KgTcivY9DLwLUASew41XwLH",
  "key2": "Vdt5ymdWQ7TsizNGxzjuiJBuRBvzr5K5SyasyMf1DaqXWeAJXGDxZy4irk4RTEZmpVg1XRAsFqSZVetuPXDbs1S",
  "key3": "4hZLRdcY8ZzmKa6PXnWDGR4JYrPNdRL2anx1dkfZ5RbWJkou2PR4FuATZxZg7bJ8KWd8e1ANQrJ5PSxcqxuC7qrE",
  "key4": "5xGJCzmbmafMmEUXNY2RmBbmmTsrwavANRcJvc5HNb3y4baQmLThvUJDYxgvVAYB6seBA6YepqmmLGwzWPMx5iVW",
  "key5": "5JmW1r3hEenrADv3mKHHKyTNw9h9hUYkjHRbvn2F83mJ3Sz4LACYUSnpMmgcwrEdJqZxCCDRhTVhjcrFDcFCKrfS",
  "key6": "4S6UqGS81jJUaZpe8AriyvVTG3Be69Edt9pbNrqdLXXFvJ4KEmAjcMkDFJT7GysXwDeonLFH3DTWVvLCJsiV37YL",
  "key7": "2KvYPf6iG64h5W3LJxfqegDDEBzN8zD293EorPwntWA3k36vEiGTjGD8GquAMpMHXAb8LbaxfgVCZ2bjtVCGrsam",
  "key8": "5fKdPBRGJpVxSssFjQ3tduhUzbF5iNGhBwS79Q4k28BRG4kUtNhtXUL2GyZbVT6o1AoV8k5LGSWTiceTPuANMWPa",
  "key9": "2joud5Ym1tckntUJkGmsxq7s8YQbyfnfRf76oqU23EPj1pYr4TawmzurLDwEARUcpmxn1eMuLEyHuUfhMV2LhWXg",
  "key10": "55Z1PbwexfAH9QjGskNvxDcPt3ZDESJ9NxwYSEYfovUdsXnAof6yGrpFYEfQ9iDLS3TPGG71M7BxysJrpg9VJqES",
  "key11": "9hcmXRtt5QMwru1bycDzTTZw6gHDCsUc89D5sjf4tVLsUirZLMGfjcFXKhP2XSGRshYNoqh4guYQsU1MKzbpGFu",
  "key12": "3vEXH4g6158JKZZuznaf6H6yWpPjfJPZDRFKAu9CNbSnUNCZS86YH7LzaU8Hpp1WqVSE6rkL9Nhv8fFdLSXvvLGd",
  "key13": "5iExBS1GMSoVPG72fR7jNwbHchQWoZ15tjFMLW131zXZasyQtubaYnUyc9va29oPS2NqMb6SnWCqzHudFqZm25ND",
  "key14": "5Jsge1sTCHqKb1XhJ2Q9YE6aP5tfqv5LYqYLLgX6cvHEgP2K9KaTbpTMiPMmF6zKgoSrGWv8BQZrhuXtQAZ5G79S",
  "key15": "4VSNnC9QhTJengXDe3hUAYhDEZMQoGzcpyLzkMotXiTx1qcvPahUZ9ZnmH6dPDZVF1WQNNinppVTWGaH1Atk6fBo",
  "key16": "25bffSnPnBGRdNi4ivnEev9Y2mCtv1gjdZaRym61QD5tRam7FUv4ipPvDp4dRs1ka8Ajdf8hmwKfJRxHirifNmAk",
  "key17": "5uZTDp8cNfpmRTvfLydxPJosswJ645UcN644hQi9qbYQuBFJHDJnqmWwZqQT9xZdQboCLaeWwQLJWR1HGvJsmpwa",
  "key18": "4fZ82Bzz8KMMabEUaXS5MQE3igu38bMAoN1A1ju1Cab8bdoKgk2VK6HGNdqJ4KBwbm6HmPddErPt3GRt3ZU2bekB",
  "key19": "3RRaHDdpbvNmp2xba9VN3LwP55KuiXD5wV3SVX5cGGebYkkygpFXqsdpJE3MAsqfoHNLBeojxyeXta2GmRHzHiJX",
  "key20": "3Q378VFdanAWNkTo2Uc2Usv6GSbJtbZmB8djPpfMPbtBpL6oz2d3ngiA5DqbM6JpF33SHU9E38c1cSyzvNBUFCw2",
  "key21": "3rBEU2y1voPbfs8uYf8tNHZB1hoRgGKYkTm9coxsG95dwyQQooRrbGELVa5acCBuxayCp5zkXdexzTkWJcgnAsgd",
  "key22": "2qyfTcevwGWnbq9meYE8UzCCoSJi3e5VGVx9Ue4A4xiTgrL4DbXSb9KmNqZ3xCMVGSeD9x3gmEcCrZbiaPoX7Eqm",
  "key23": "5ackgnS6qeB7JXLwSBNAfDQ1Gb8gp4PwUvC23HGGMLoajo9bR6xGjJzmWmi4PpLcptVNrxDKHXAE8MwMFfTkUcnD",
  "key24": "2PH5DSLr8ZYyzTi42p4tT2a3Eh2GEVvq5QB48uV8xGdEC93vuJobJigEe6gc9ppoiH8pBMoe24jGj9ngLhyqP98d",
  "key25": "jnxK1UHvtprbsrgPTdUsTiXcvNFxAUUZ86RhSfg1fpVKbXY4ua8xnTdiNP4ST1wYKu3rw1BAxjiYpMy6RX6kUbH",
  "key26": "4HfV4nKCRRX62D3BXpizAtnEZbpJgwutFDUUuqGXMDQkezDCEFNioLpdkmHmwnbKPMm716z4CN8H2aNFi76aK9N7",
  "key27": "3eLuvRa37dNihf9KaKiyU8eJmN3XLL97sJ3wfTusvGc8aYjcYW7wpn4BktzSMALqxaPGo9E5z9Jncv76Nruuztk9",
  "key28": "479aUsVRamtqgidmu9hfEkpHd5vTawQ59BwvuiZk4ZFohmHFtdt5cCWwZE8XsuLV4vAeFivpbi7ewmHZxUUxpHxT",
  "key29": "3WpNj2tzMxuyAxtzgLAVVkn2DqZqd3VxKM12ZCf3u4xjmwCvuqWWD9nSbmPbnsoqMjbQeWedC2qdKs8Y1p6Y8RvH",
  "key30": "3cWEEzfMY3mzt1PXqwZaCcXnRgHR88mQzXcqvPz31JPpwMBXD2FdGL4Sv54JUfu3APNNXfAh8cQynHSRuGU7a1ga",
  "key31": "66qNb5GftPUvuMw4vkSPtN5HSqyvj3w8Tp3EK2t9BNXNsLjRdT4NWVNA3AgiPMe4mojg7PqyRzDRe2cPeXUCnpDF",
  "key32": "471MbgRJHroNUq4pN5bwigViQUREReDgZgf4AprXjsJ9BZaH5yVL2TT2HGow1But6jF16fqNVDgbrTVah3Ar8LFa",
  "key33": "3pZPP8i32hxRiXyoe5qsMGAkybupoHTQLoMUbmqgGuJ9r7BQSejwjrJHucCEMWxfW9ERawt4ABeTHt1ji5o5f1uk",
  "key34": "2u84P1DxBb54enWcumYQ3sSFsy97FRR2dQfd5ijrSrXKZzn9YmenwuJMX1FTMKY6tWipLjYwiCh4MGyF3SnWMKwX",
  "key35": "5eoaFeVt3LuwkqcLwUj8FgzZbFS7TUsKCENd9xDMDeBUTZq1N5jzchxzDsaKvVBTTLEBWnjzqY9qcRWgXtqenJeF",
  "key36": "MJrz22fAwtAD95VGW7GW55cLjPqtHgCe7E6UzXEHcWHzKoSpCJ1SRYFfLF7p6LcfkyR3VfgLC62zgqZVPB6xNks",
  "key37": "3q9ZCaqGwr9rmJKiky9poD48TSTNbPidYhAS17ZyKSZjTqYNNtd7msKnQ5jFYfCe4R36oyGC9d6VGV2QvXj77xmV",
  "key38": "5a7XW7bccb6szSMms2LzXaGaTztDNmnidXEnU3DjpQKo5KhZgV9DuF6PhtaubYrwThm9eipD6thHajfMj4ZDHjgc"
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
