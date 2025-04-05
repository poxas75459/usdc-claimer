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
    "3oW5WfkQJ8HrKgxU6WQRJhof5ttprBAVBJnAXkoq6Ubawuec4yqQHgRPgFgegAheTmiXBMiNUwL1fXQt2b88t3AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycsqvczkaUsrwdgvPiAAG9zuvDEqyPUyisnG4xF6sDFpCmXjaGn9gH16wHgkEgFWkTbBYEH5KMnd6qEHvPpZo77",
  "key1": "1214fqL65zsNCDzFsyprkPntvsjxa2Ji2Dww3vk3SokPgrVQvifU9g3ErNGikjnQhuVndg1wPEYqroAJvQsAjHaW",
  "key2": "2zXKFqvxZedoiwEi1dmMhqpcGG1XT1yWRDMjWpMo9N4GBEZRj8g3xkaT7jXHQhN9bLi1APJcJK7UW9tPb9m6hgEH",
  "key3": "4aE4fEMC9uvbj4yagUUFvHwKPTvL35ZqHCDCoeNtUdYj6eo8sTqtfXGPHyazM9d9q5YCERxexb8N7od9enZhe2wD",
  "key4": "4LNepi1mFwn4qJreL4H1R6fdHEXdAdTTuo2j45vxxgghZSWEfo6ELVZkCDGhQxPvBGm8wDkxtzF7vv3iun3BGETd",
  "key5": "446ecqzt1c6NKHPbvJqc3s7V9F4UCaTK756cgQzT3nbTwdT3m3r8e556ZAxjfRvZoZWdfMtmMDpAko9e8HqkhzPB",
  "key6": "65qFzoh2UKNH22G12xxbH6b1fiX39g7mYRNoKMS4vZ3EwGCdqpRohKowM9XPNfRQ31DDyVXhZ89j2awKVbgxp741",
  "key7": "4X6jxf5Wmjv7VgL4gBqQZEdtBFZmijrgRwUR3uYm2Nx1CcUdhMeMTGiYMqWHJsy8vQ5ENgQJyw36CbgHQmqcqR3X",
  "key8": "4yN3734buaEeHwiVynitw35BBqgBZxwX1drmwuJyRpmiTjKXyMy4n5gw8viTJpuA5QR1J2QycLjJE83ueHRjZHaJ",
  "key9": "3N78EGAcaD1vQi9swLAodduSo3Pnj1ycFw4qXkuJDyy28Yt6WoGxSMKSeSbxYzWSZ8sugekyNRxpay2sX1ds9CRR",
  "key10": "2a5yMnBiQ7gkKsamGx6VF3D1UUrT6c4uDdEcqqBWxdoJxTnwmc1hwaZK6pCMuBaf2kVAM62zmhFYPr9nqM67zXDd",
  "key11": "5PAYMc2ysbMcS4o95fno4PMWAVsFy3S81t6KqQenkAbpgWce6y77XPYdEHVKe3SwmMy9hJivvXF4DxESZdJQyFTv",
  "key12": "3cXgvi6KUTXHf31hWv7JHR25DeVcVSrmcektsxsrMSRXLHoqiyYwJzBAZ5iq4oaGVHHdTAUwhMRLg6HPNS4hoZMR",
  "key13": "28tfAEmjNb9pnWJH8PrsFXXBv4UckYsb651qXLj44ZgE5eg84mptF9h1ENQvEJ8egY8xrinBD9KwusbmgpszyA1m",
  "key14": "5H5KNqUvXWZR9qNQTdwbh2wMs154M4krcPu7CyULdgXfgtLYYSD6Yhy7p7mjsZ5byLMWTESfECYoMXL5zZREs3bG",
  "key15": "23wfkCyHQCToLZcDQHTQwqsgGKR8qbkkLbjtoAFGf6Xehsv2E7CEBMKFtRiCdBdConisEXyjRA6McroLeiu3jeM8",
  "key16": "74qG6jfUQmvGzwAmHtX7Ky1hJtXhdmz9NUW8gAtCC8aZ5NvDz2FpNXioqwt1xJfK6nCt1P943ny37RG13Z6xEhk",
  "key17": "5xzhQ4pRCwfcntEmTiYaRfkqVi3YvzRqpSUipLC2gheDuf1LcMuebQmciGX6MvdNtjb3XFCmyq3kTrX8kcmCYaVb",
  "key18": "8nfbyk9YpxK8pBfjw75oxr9NpSEJKQQtxEEsbN4sUFkWpySDib31U7tx3EPdoqqjQTRkD7GjDDRZamQAZEYshBd",
  "key19": "5c6n1A3q65obXkzG967dZ8174Gay98BGCW5rTcXwNbE42qCJRwsZNfWpP3BupPFJMm2jtoYpVcwoxCRg4nKHh9on",
  "key20": "4f66fEtC99mbAeuuX8VG8FeW1R3q8v1QmMu88oigMLKwSdrCQb98zXXPN8zuf2MMRDVJQTTY1fC4c46RRSBbJSDA",
  "key21": "5KMX7TVArnZP6Vczn6fr9zPuGiQkUK5QfcXo1fd9yf8b8n3k3zV3x73h4asxCpmhzR2wQMBZkDmTX9gwniQDskJK",
  "key22": "2K8BE3K4ib1DvHDo8MfZzDWsB3JaAVxb3i3Uv67Bjdqp8ErwbSJAd8CfPv5V1ZSDp6TFfkjDk8sqo6R9sBHFJ2sw",
  "key23": "MGLvCCh9aW99thH35HDWBSFc3Tf5zZnrGNwe9PLdtQVef5G6cywCgqioW5s7htVUMRcTTPhJyUvXCxjuSMUWSLg",
  "key24": "5o1SBVY5436LpLqD2QtWgwL8M8pqQ9C4VWSjSieyL1Sn4E1nYniLZhx5yg2KfVZMbTwJksUUobfuAdCBsePSt7v6",
  "key25": "3YqQpX9zrtipwrvWfC3RiEcYPNchYCutefn1ksQ3TCQSKAMV6pcsBT6GF6eo3rPAhwaTDzrGNyGnjjLJ1o1zRq2m",
  "key26": "Y2N613x3sqvNqQKMCuPXv26hFcyUjSwPHY1YdviLFAXhiXYizcU2MfPMMvKM1XAMcgFPDf2Xv1z7fpniuJcTYHh",
  "key27": "5bGzVSTz3ugbS8XAw4vXqxf6cCUbWH58ehQTUk7CzViW34HCp6Z5KHpgJi74bs6rQnfxuLzhNwgzXKvt9KqPvz6Z",
  "key28": "4K63mfq2SumwGYhDddtd6MvrrQ5HZ5AfF4sRkn75JAT7agkMk3GpfRmNrMxucVqbdg1KAQy8TtEUYY4rK9jc7Kq",
  "key29": "5aRTbzM8PUTwmUDxZ2bY13i1aj4H5b4P8GdNuk4ny73jDP3rcNHBYNnksPAfjLHLYhFT6o5Ga3Q2iSEdNZuR8Cbp",
  "key30": "4Dhh62eZbrFPgcfS3uCsEzzbyYLq6Vg9ozTjNczLMuvPq6VRChYCQ4x9j9G8HfoLWyDPUHdn4pbhcMhnZNMbLXQ",
  "key31": "5HCqPizVTZK8eWRAEac1ZJvVhtjcJ12D6QNPTsjTvsv16RiUhXmb1f7SwpGHXTdroKZxRT5a16Lkf1AfscF8Ju2C",
  "key32": "3asUgpE4qBKhXGfMG5GNWjnTUR7rdCRcXDjBUbsTtcoVjHyQsecnaPPMB34Qit1pbdCj3ozp6iYLZLnZyWznkGST",
  "key33": "4DS7nhCrPHM3ifMzu924QyioeW4xh5qotkQh2277ZAjYCmzbc7psHHxHKREGaE44sZp38CcSsrMR26Mp2tNmBN98",
  "key34": "58qKf5gf4aGMmtA7MjSdvwFEvo86CnSQMzZv6QRrSY6Serw6riYCwzGKnLGCQFBtQeokAiAgFU8PKXmB2jNBC6od",
  "key35": "3L1HBpDXNpWfT7QMfxSLm1cqivaqdsECKcUCMqZrJDfDHmVUmciueTbrbJD97mnkSnDLor8KWKCY99A32hxqqw2X",
  "key36": "3zpKDcyjhUs8MxjH9ouDCefrMLyGQxByadkhyAmhLmQ8v7Zu4PwAwgrYbEbuGnK21oDdRL6tKoQwvVEH2txa2vS4",
  "key37": "3wYhfUPag1tzwVzC9gJJistRE57H6mQRguVa9XVqfWqPMw4x2d4HGrx8cS4UnxsAjysy5RjwVbTeCy7Nq1mUQj2Y",
  "key38": "2aQCS4Qf2iqUvn4wKfMEgCZ5G36KkXr95qRegeKZNxLNCALJn69pUVWeHzmkuxQsSFqZrwQs29UTWHgVurvTXnSo",
  "key39": "45qa3vEzm4Avb2p5u6PeB1KuKEJbPqjQSjw1xvHKSMdBD5997QRZQAhoA4vpXMrR71wGJbDRC7FxbR9kn2C6TPtX",
  "key40": "Fm9itdaxatc1hcVy3eoVovCg4xY26wk8TQ1AHhaHd8tS7U32mJKxjPqcEjMAWhePAFfzoGog32SXoY1nV24RU7k",
  "key41": "3yWHwyBmf4SLtGYxxBbNHXGn39dFa34g4jy2YrReTpTzgs2Ej5ouu48fjb6zWsErHb5ZWMU9rXpCRWqAxXUg8UHz",
  "key42": "2g6zyCUsHqiJkR8j6BtmTkVYBttHtHuUw68UFepK8x44PBVqQL8Qe3ohaqgxdPmmkUVq18r1J3Qy1GJAV8CZYjLn",
  "key43": "4c35sBkN22L6FixNenmSSuLgQks6KLzsScQyyy7xsvjgBRwSNQ485hyoawNf4F9F3gfFbkU8MjNWbJPJk3dAEuqH",
  "key44": "3TcTJAPJKhAz5GeqjRHjSYgd3KCSBGsm7ihiDVGJztjdn314FukzS96t4hMpvSupKVRdR9nmD4BcSEuKEKDHGfVn",
  "key45": "3H4tvJ8fgGiyoz7VjsUue4ZZieyRefWdU1BNRPYes3EySyx2qVB5o1nLwU8autmDw885BnsjvZWecu4Ph1P9i22z",
  "key46": "S6vQvzdGUGbN46SyBfAqZWPU4jfq4eEKpYqGfEBnQDyYboN2YUw5PmdY6LtXXWS7gC6MBDqwjfuxDkd5a68DtA8",
  "key47": "62EgHZ78umCpyFZpXJf39LiHG56AuTfxVKPMwiEioW5D1zyRHwZkGXLPNTKYMVWmAP6GuovXKKCTRj1RrAVeAZFJ",
  "key48": "4aAgPtqJna3sER3gG3ZApmtzP2N17XpLtNcEpuLgvZswGGCWuHjqgpMGxxfh9KEzwTideVuVGfgZDz2H6ETZTR28"
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
