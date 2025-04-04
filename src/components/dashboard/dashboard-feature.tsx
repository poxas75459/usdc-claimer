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
    "3QPgfUi3NZGLMG5w7GNGYUq4q5DN2RBytnLAcxJ6UewCqN3wXcpx9HnQh6yBKV1mbU55qhDd7Deq32FR6RLYSSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5xhyCSZ7NYf1WNxz1bvcRQmEYB3zAnA8d4EdTtBL7W2XycXmRYvMKVimTckuDAhDf9fSpsMZ8djKnSHYBx6Mq7",
  "key1": "3haJu2jCYXsVAiHFjhtGp48aEpzcvVkf4XtjmmHBhJ3NJDuP4LziKL3doniSTc7yxaUjLZurz1JB6iYBA3Uj2yH7",
  "key2": "4JezQtzkyL4MJoep1CvdanT4W3FiKHg8MVf5MyaP31f4p6axTnZWeQDd8TGpC9DH3HeuyvGxYMdynYJCbWjZJGCK",
  "key3": "pYdh9bp27yQuNvm35eTXGzP4rCNeq1kPmT6VRypGrZuHoedqwA86MuYaMkQeptYkq2PK1FNGLbSXo3WzGUrxTN3",
  "key4": "4C5ayPKstnZcuDsZtByuS4udsbLCXkkeetY7jQkDrQLeeLyeowk17r6E3fnZGKxZLxfg8JNSPgcCc43pgai3kVNZ",
  "key5": "vr6yS2MFn5Ghg79XXvXutC5Jmpc1BWCEbE24AvHUWxoepSFCMPEmRe2cSGnEc5Tb2B4fHbs7LJaFF8U5CqftQ3N",
  "key6": "3VmHrf3MyCHpk5aqBNrvkXL4Eq8jFN3iEtmXDMimpHLP4P5EJvmbTRjd41yqDtbSQTjkZ643MERtmyQTSrEBB9m1",
  "key7": "4xijvcCG7JAK5gdw7dJdjVPs6RxDts6qXkZX8ykFnfX1XAg1roXwxXYGWovjpAAW2oTaDvyqzbcNzwXatkJmHD4j",
  "key8": "2mKX63qTtRXPnUdsoe9YL22U9fGS85ufEQ3gEjUa4FBh84NV4bNHvszBHi5obCysFxtS9cLeCwhKDvQmuXYCPnwh",
  "key9": "3PppNwHVWHh8JMJuUMjktMatB3LsBaJPfZtqHDAfTqgAzhRsNEoPsdbrxyLTLTbdEDAgdJwk3cY3jRK6kJyVpxNm",
  "key10": "17pyTHAW15KqqvjVncFDBK7XJKFCxjCacNoZKgrVxhemt7feJoJmuBoWzXvbrCduqZSUYz3YMPJ7C5rzU3FQdd1",
  "key11": "2XTU6eZdXP2B19tbgBUKZ76dhmwtu8AYrPL8koX2tMsom83Q9oZgtnfj8SkDNAekxhJfngX2hLy5291jHDBJPScB",
  "key12": "YnSBDq4eZcesWWzqC5KP6fFroMeKZts3FMgpTtA8WFGzSVAiEkR7SLA3WRzLtw3AT1ba5hB1aXz5Zep9GoquQzr",
  "key13": "zTPN7mwRYK573mNcacTvarwH4ouJnTWmTLMWpSz7WgQZoHm2WEPWvZeXDjsa7k7kr2ArEZNoNUBA38EB3dJgk5r",
  "key14": "5bBdMHrmowaKrbZvQeBWrnYj13LTLX89t5XioShUFa4AFqCXkKksXrdwBGmSLHHabLnPe3BzfST72jHGQbMZ3zUc",
  "key15": "5xbQrXATYycABJJjfjcNw3xnpkWpuWUP8MSdynAmFVszZPvujDyajEM6YuWv3XiFKSvdaRndPGEmNEgNhvtqErtp",
  "key16": "25TPWhLeoQsKcqZPpeSJnL8JowPgugZ6swk5WhejMC5ChxKgadjNQdZqGoriC4zzPc9t5VaaXHjrLYxis815usAd",
  "key17": "569eux3Q2Z7AghnwL8yFPX5mf2yTYywC8JQ6wKk1nFGuj5HgXhbYHYRYURr1fBGLas5jEKHuhRYxA4Dse5ScNQn4",
  "key18": "5kTMRn4EZKRBHwQAyEAkrovz6tq5znmfSZhggL9XdpXLACeGP1CM3SCUvMQBrufDgHZ96QEWFXrSpHXRJfNEBRof",
  "key19": "4mfjabgir1z6jGtTyEdjuHitz4eV6geBAnMXqgMpxicyxSsVRAijGV5Fpt4doEZReEgMZp7UdcQ9DCmoFY73yTvN",
  "key20": "2jctZZP9hXSShYLnmSdKfBsZjqpG6KiW9Ysv7t463YsMueywCBQViBUZrqR3Zi9dfNUnRkxtoysi5Wvuvv3rtAt9",
  "key21": "343DMYahjET31PJvCDeQa8aXHtRD2AWJXtNr4KjYwPCvY8ZS1QWC9FJNacXQHEvZr83EXvMD8hDxnUsihF2eVm8s",
  "key22": "4CSZSrMT3suGNhka4LV25Xw5kjyzvfWB2QifoXzpvAvpMvvWfxXdgfaSoTaMfhwqoCBSFErqJa4BkfNmP12hndKP",
  "key23": "3qvLVxRd7kdQfHZhTf8FSH1m6hr3FEBeMSk59dvWJQoniDBvSgqSLh11xp4RtehVuPfkte8W1FotfcM8BNDLU2Hc",
  "key24": "3qSPBRsupNbeU5ZHYPybKnrUJn2Mq1MxdiiRGR3Eceon8puaNYyBgYdb43bqr2XogZ156u1Ygt3aLEHDB7ZbzcgQ",
  "key25": "3uxTpVeGz7cD3RRLTjbz2BVCKzB6zA5QYZ2VtyBBWcpa258St8bKUimbnqfe3f3P61FVMfuTqT99uAbVDU1D4oBK",
  "key26": "5B64h8p6pas6o4c7YMh2VtctsfUGBsnYH4W19GBjcQHpvUgyu9Rek6DbBm1Sba7GAvvovo6FeyixPNv9fd2GwXdr",
  "key27": "Tnx2rL8qyRCWNLxjCWUNbRL2ChNVkuaJctvztnzjWWujTSR7z6LMn5vjyz1MAhGfQgHNh89qz1pXDuGpwNwVpcQ",
  "key28": "Y1NW78XNqNYwMgALysCajSYPespPUNvhBgYV6gyCnpd1dLNnSGUASU3niMnhS9CDXDaKJNHDEAhLmAEJDuxGJiu",
  "key29": "3c5pYkSm3zqBeEDbGhXYpzTxTpaaGeu5N53hHqHeDSKgXqQtWC4SdkuXutkBhhCgYr6gniLoSBadMoiqtyYqyJmD",
  "key30": "3ndX2BxWY2ABJRwvNFQPWpspDFx5dhcZ9Sqtczhmyres8PpxCYFvJRf4gbUNPf1YWaSRBmE5XaDgyb2WbqLTzLgr",
  "key31": "5GFXVeciUrWrEKkypWhaQJk8HSGiSpb6nV8uZNwiL95LAmayzK1mLzorqaK4JtKP8ys6eJKM1Z2pwqQ3mUK8hDdr",
  "key32": "VZioXVNMvnWquW8ZuDcEH4vrNjK4r4JxnNBmMMGEJsgwhApn3ntsgrTK3iXBzXtrHjLwVCfWA7ss1fNa6GdeYBi",
  "key33": "tyRu6FZnmSBrzATwhnEerHGZYBF4GpfUxxYui55mSyC74ptvQifoWS1xWqhLMnkEbkqy7VWGYWoaeRRHAQP3Cco",
  "key34": "5tH6i1P7Pc6u61oXDvv2xgYonfEg6yaKwn7wH8ifgN6KJRnKGbGNL4XcXbPUvg4pKJJxuQh9CetzpbXgskZ193iV",
  "key35": "2bavDERd2pwQpCajpd7L4wnvTFWEoAu4oubqyb1mpNWoVgbk19eqxeZxwac7uAyWt8e7M4iPftkiJ1cwcj4fMftA",
  "key36": "46CayGSSCCHhkAYc5M35VAMkEesqQez3dtirnarbR4WVPbth6iMBHMGU6bCF6svFzbJaDLdgyi6JqJ46cKv9ax7V",
  "key37": "61TWtWivduW73iJgMSmEyPakfuucXzedGQpP9oiB2kFZQxdBpkCRhKfWSbbckn8jNuR2YGBgJR9e7zJVLrtqCbYT"
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
