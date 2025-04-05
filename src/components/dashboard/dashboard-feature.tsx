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
    "5npY6p796mPU9bz63zQD2jN4bZVpKauz3GfVdFoP9yHsb5duf4gYeqwWytkydQasq17HER7G1ATf2WnbYCRXZZho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnxCdnLmxodA5rWCqfUaEZ3v6pFyUgEC4qSu9GL8KKEBhmWY8ynixWf4JxCqcH3tuQArpGpRZG2F6YLAackFxX2",
  "key1": "29JnPjVBVR3YFXx5CvMfhGLYJpjZs1FV4nmmVfcHmMu4TLXKu5yPBNzwYUffePy4Eby9CwVwnRtYXD8U27aLBh4r",
  "key2": "2bkmmqB3YSKoqJjPk3L9wwYNXJt56BrtwskbHGne4Yj28Wp399mV8bezGB8FxTcTEDDYttMPv19uX4atUN9saAyu",
  "key3": "2s9sRvh67vAKit6aCVZsfmDfnTDQXN2x5Lqt4QCgctodQEzcv4Kzv9Um47NmqcSaAaNiKWBhipZ2zq1dB76dxU9o",
  "key4": "4wk3mVbzHX1ieTyenhb8R2t8t4LZXj6pHFvCnNeFLTvu5zaduVyuB8y3A8bdQLqC9TRSKjhsQ5zKFourJRbMEDyr",
  "key5": "UR4oBBQf99HJbLWP8k1wcvU3dmxbaTyJ3gkn3EMcwmycp9viK7ebrbWw9Webd8SxBcR9NDiiw7QXBSdjzXmv1wg",
  "key6": "2uMW6pBGaWcupJ2hJZDpRxArUtWcDQE3GjCsEfqBpLDj1Gjqbjc14gJGSanCmWjVKGJd2Mt98W4EKc6daB1YNG4K",
  "key7": "38bgyBUD1vc5gCjBhnvrQ2UPzUE6bSvCajTDa5Bt5RpN2nnogxurM1wqumkGf43m6beo5icNPKSXu9gcpdb6TpAn",
  "key8": "4JXbtz7ucJeyZeavqXtj3hUsFvGjPe7JwQ1HobmTrHHaXwjjg23ZedkxsWc2p5CGvzqY8jHUhbep2AWqmnWHsQMT",
  "key9": "5cdiYjKH5fJNyFayTKmgU3WNQ3vMUrxqz5G8znoAZHsErtut4VPChTb2CvVso6ihtXgu58c6brUZXkX8JyphR7ue",
  "key10": "2frvqXGhGYXnJZhVPDyTbA2zV9WV4qfZa1bQodGGcN3p9ftGfPMTLHzMV3C8oygqQdkw3DbQagT6Q1R8Xzp8nqTq",
  "key11": "5EMYVGEhcCSGkCzZGZ6ifCQuQ1H4LVWwU9eVddLBdxSjAgJrwianHPTvBc18iBCm5jqhMfaUok8hTb8APSzkCQ2N",
  "key12": "4cmumjSXsL3wAeA5wrAXV3oLHoR6Rb1amxMeDmR4XmLf65qMPPumAuoQmywkeEkeGj2VvgYwwCiHUZ2bT1CRETM5",
  "key13": "5ggVmeVAVcXenABnTAEaFi4efV2vymwHCjU9V3oHeiGGtGKNUb1r39LoHk2WDcvsYduJch8Hwpkdyuc9rDZh6oFG",
  "key14": "3FbTAJR5iXcuoADHBMMeuhywBmjaszQD1N1ucTuXxL2teT9ejnXw5cFcJnuSD6vg5ALmfwzwPQastf8dUgzkqkLx",
  "key15": "oc91hWgKctLoaKAZpJsK57NBWtwsnoFJZbN2Yq7tXYK5SbBqso6wPw1tUHRoD44Vst8c7aMro1qPSPcBTaGK44c",
  "key16": "5TteLmNnLKZWToyySELkBNiNJCQG4dS6Us6FiXZzj4bcRL3rzwrmHYdhSnWHjYkjj17wfpf5WpozRgN3c15w6eLK",
  "key17": "WcpPTHJYnB9SiPn8y9EVJkBhYGbGtEp38k4CkhuGZyhACNriAMUD6YpMcvzadRkPdK9y5rx9krJzEA6GFHLvGYX",
  "key18": "Rfzz5bhMmMEBNGpNVugS6PFZX3xH6ZNTG3BCtiFUEiVyrmV6xGVcdqPvSTP7q5MBcuaZpD3o27PR5A6KnNeNpxX",
  "key19": "2tS6P86PmANjoubnqc4Z71X4PKShqizswGAByfWQKB9MQZ9zf8aGwH5YogQJUH9H4JV2rQ4TBgBzHFZzGLEMZjUK",
  "key20": "4qamygmZtaqCKCjASVcn8nZcyjTs6QPj8QJa8xvHNQmRgFe1F5NZWPAHjvamAwt7pmMLhUCPNjt7mnuAoFkvA7AG",
  "key21": "5ReiWwUthMSsHxU2g4pef136jPqVLWGzWSwu4wxjnocBsC4XhuZpBYr7vgixuDaDYWxNhDeWxeh3krYbv8rsdyq4",
  "key22": "5fJCwhQzXzJXMEdyScGQabyZoegpppTP3qngqQc4iN5zJcFG1aPjesPssV8e2dATs3Zt43sxH6neuT3Dpj78Hw71",
  "key23": "2qchUGjDr5sg8TT55WVtoaBimr4519KcCLgKwmrDTKek5qtX6rFEUcV58nAAUUYN6dZrdpjnp3CJdEQSYTmEUffw",
  "key24": "4iw9yhZGFr8guyJKwdXeAEmAi14vG2SoSdcint9h6oDR3QifpxgWGpSPMq3GfWGX5WSsTrCNwwWSBy3nud6Fj1zg",
  "key25": "2cdbrkEShEGRH5bagXCF9HxkctRKW8LvPhTwjtVHs3ozzNSshqLzTziNbiuDaWhurZzG9rR7dnQHC6fvtUFVtspu",
  "key26": "5AEygTpaXT7NP32beoKYqfjMrxCMYsC5ynb5jPQsPh7spuv6BzvbtakMuRJz2pgLKr7kSrfc3npGr5gzV9ERkSGk",
  "key27": "4Cse25hTrfFsN31vDVDGk3rxsPG5wMXP1iFZ5zK3UC85FfPmqLFvs1qzn9qvAMeGh47SWZBG8DpKXRSepK9C5E6T",
  "key28": "2tFVw1p5uY8MM54AuWhjSXictt12VMM96KbiA4nAtQW6ftwMQeyRhWvVtQRLsTiPNL3tFn86eWXQgdmSjoVkXQ1t",
  "key29": "32nvgeNJXAomCKE1zmCDJqUj6ttv8kHK6LufU1h5aSAPkasLUVxyrrNvbJrfjAjsSaRhwrD1kdFd8gSaCYnodCnD",
  "key30": "UF2HYwqL3eNkScNekGyuMsxpaTTSsujsAkT9hoFE1sEVmdca9GLF6xDChYrjuFbJ5QAppWEpyvSgUn5yVVot4VZ",
  "key31": "4hEKbtCNP2514k4U6gzonzi3dD4vkr3JPpA37D1Vs6VL5oJwuB9HsGC5uquXveXpvAWtDQkJjqCQvfmr5P73sL3d",
  "key32": "6pyyfRz1ygdHhSemgqewX8uxQZM8EkEuwcQCSHCRKVt6XY6vk6HB9uZ4xkUU3M5dBNrXZFRhv6Yhv6YQRuehTYT",
  "key33": "4T4uYKk5Cb2a8gy4UeVm2bN8QwPBLzfRK2sQzRsAMoStzU6pRBVei2nkZWFwQsrc9RNzisFkZCqPZMAZZ9PEDQNu",
  "key34": "8XDcb2g83K92CxPdUDDopDEQMY5xVJgkWiDLhTx1QpKsvKrvX8ChEwrnNHeeu6c3YJhsBjvTNjQvYuzBBni9igQ",
  "key35": "3t9giPwEsQDhxhRrLmSQ7t3RiFnveD6kszyycXzYYxHLvQYeesgoVZZARLANkQPMzj95Y5rHQam1UY7ygaoBq8FL",
  "key36": "2FmfBwRKXekjQ6fsuM1g1CrSB6uzYS2stXb3mS4Pkygtv3rSS4aQizv36MZtc8k3zVMoXxTL29ZkRBKDQYMF39Js",
  "key37": "5gcSyeXcoJzLv3BmmZNchAoftiLQhkEFGPnivbGKQKukmeXHACPNWmyQ3orpDGomsFTzJ1iamF6JkMRTgtYxGFsU",
  "key38": "4GxsdfvSYqKs7givbRSZKPMJJ5BsJTjoGgdvVjP35eUZVr8zja87awbNiHwGfBWi9UCmS3EYUWRpucefMEoVtxvP",
  "key39": "4PiomitLtbHQYDpPMFQh7Bp7FkgBhSge6jN462dq4r3UU2fbL8aVs2TBXc53Qa3jVqMGHKfKuLwme6X8pt1BGtV6",
  "key40": "2vbQDVwvkFH8hYCzSACc2H6QbFHBcAHnrqorEpKbR4nyNSsrSMJZPBqyodaPAdxa1eSvwpCsxQ313c2fGSbUmepR",
  "key41": "51kpFxkaMF2uwsVXpEPxrcZaxcyiRWXGSF2KZLDLrtg74YE4xLkLzwk8esJsJDL3HyrACRYxXPi5r6YguK2M6vny",
  "key42": "2LJWs4gghomz8y5fZX3J7UdS1aJMm3baCGVGacnZgdGGb7ismtxRv9yQff6qVJFSSzMF2aVWiB91NsXc4rkYWNnX",
  "key43": "28nDQ2pHdJkqGdN5zeun2sQMmPwY4CHF2dpfCGngkX6aX5N4jw4BmKekCCpo3qmmGaKXRNUx6obxwWaR1FqVYqnD",
  "key44": "PgZRJvqxf61sXNHW9RftEcpwxnavRbFo9ZWtQXjtnmqScjz57tCwY1ntQ158WbGq84u6SPixKhDkB4xruwFYiE1",
  "key45": "4tCUR3NoZCNcBnBTf1Z62wNa1eJA1uFA8TeG6KxQiWP7Ra8Xv9HoYXcDH5cp6MzmeYpvHW5eYhTTYuGDeBZZ8cf6",
  "key46": "2F5KCCtb4qgDVzXLDgyTJiWcLCSR9FbNkGTjgBE4ZWbS671yrcbCfwgy3aUXxJmYBrZQYPFmwXtd1LGZmgRmjSL1",
  "key47": "3Wmj2JfNpi4CohMy6VFT5CAMTeuXupHmqtpPdUSWuPukT9FVxVSGjnXbU9Tg5qKWLTXjfU8bok8cj3ozBEcqe8Xz",
  "key48": "3CDDAA3xBCka6y8h7wuLDe9Hqo6J1Lwd4cfEPwK3YGaAUEwXTsioTqVWoerMWVcfsy5Le2vRYeScowxUJhFVDfYE"
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
