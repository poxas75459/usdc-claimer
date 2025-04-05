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
    "46yiAmsRq7sbaN5bsxj5N1RcZPNUhhZNzcfSWxfDYExQbzKDSf8dPmHnTBZjqovw4rWPfy1wCwr95hGVNS6FMK4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jvo4JtmA2hxEA5P62T574W4DF39AvfV4Fzrz1soSVHkpXdQcwP33oDcehWqw8VuwSQSKPdEZrusoKVNHs2RiLxT",
  "key1": "Y7rWt9PYT7SoGQgw6iQJ1RrEaStnF27Hk9G7ZvpMyVztER5vYUfTo2nXeusZMLzNiKdDLqk35Wgjjqu6EArxtDp",
  "key2": "4cWQrYbkUa9S9fbZTgmyYTR46hNE2TbNJHxhD9inHzz8edLENzGvjwisCYS1v5ht13xat8L74L1Q1beTupsCH2ht",
  "key3": "J9CCAEJ5hYFiqzGjnxXU5FXJWNs2U41jK73wux8g6ZgQMmMgKmmGTRFV3CWtcoxVCk7ZFdpGj9H9xVgcWZGDR7D",
  "key4": "5M8PjYEUPTAatzPkCzXfwFyJ2vn8GYAK9WtaGzVWRBoAj1tBkeMZnd2Tsd1eteWpExmWwMAMqLH2swdpQjmFkBKi",
  "key5": "q8Dtzd6bsAQNKj71PnSNXCJ4Ghzke8S8XgEcY7yhSpQ2GzCbZZaEvsnWThUJAnANHq99NT6PJ57pD7GQXkgUsAX",
  "key6": "3LeGeeZfsS61LHZSHB9vPn7ktQ3LzbTkZCkMwSLHg2iRvbZ9pEQZZmt8nwdD1kBs1bKQJoGdBLSs6cdWZj4w7umg",
  "key7": "3V3SNbC2ZGPNozFrZWLViGhxd8LP7cwi1fXhB9FeBzyp9y3vcQ6YnP8MwpSwbhzeFFnbYJpGJCQ6a2qLscGu9KZ",
  "key8": "4DLaSrWBURANd9qZLwXnzNsiaYDxLk6qXwTd3ggkSeGeR1NoXPjC9Na4PQgRV68bbcTmS1oRDrkgtajWh6zkm579",
  "key9": "3ZzJd27mipPdvZox35jMEZp3p7bjCc7i8b7XKgnNhN1hQXvFF58exvqHjQR6uExZSX2fUno1CiWv7nM9Z7MLb59z",
  "key10": "4i89A5VcG1Ljf9RojcirpyTpbXDGkJWCDbiroCzMwpqBTnDySMbVvPYXyihEKboJAuGWczne9rapjEXvUdejvN5e",
  "key11": "p8gbpLLg5cwiXeUTVcTWYGTbokxFi7ddo2Zr6Fm9Yc3chRzRKzgoDhKtP3Y42xMyXtPP6n3ZjqLnwm4brEiYJiu",
  "key12": "2mG2P8Kh9CkQGoprY5BssvtfAwgkb96aG6ugSUCrUm87K79VgmvZNvHi1tK57sMDjkPemoKFka9hpHa6ZNoZub2",
  "key13": "wvCGTyuH3ek7bmgkVJtsG25SXNNAP3CfsgZLxMcerQXW11UKHPfBzRQ6s6LHqAeg9mQzCYN9NWREc2LmEuYb2dn",
  "key14": "4XsVCrihSY7oq69n63z8MNdzpaHJEiLQycAW6fMKUmkUX165ewQS5eFV2LRYrrZYkdA6TG5juHfstiSaituqPAt6",
  "key15": "2j3qz2dEQkaqKvKSHZNRNhHM9yVkt975NYnaBaE2gXwHCMqUfhLoJ7pR6ctmzmXfiiSpoMeLhNkjtq3ewthjnk1t",
  "key16": "36Cx94mt4qcBXyjMEbt7Jk6LnqnRpY7R94am8DBFfzsyAVZZ8Mn7odKH4EiSfMbwbNmqbSmhR9itaAWqURutmJDJ",
  "key17": "vLieNpWdMYsM5EWDEERH7FfMgEay3S3ded8TzGZasGkeyc37BmHUZ4LdcJmXQFab4ix4MPLaptWtN2m4s4hzXDi",
  "key18": "2styC6narxhVG2E7AvhVvEdWgrDw1yCWRTUnj5ndCw5K6uMiX4gAj4CfXj5iCPrkp1QTfRctRnGsXQpJv1rtcUU1",
  "key19": "4H748T3SSSZTbt17VGkGYfyaePRrEHbQnetGh2EsaKbGm7oUQh85nvHktddyo9ApxKV8riapChX6VxEE7GZwLd39",
  "key20": "3SzZpqCvw6xYB8ctrDdicuEMGsS1vtH8jEfTJwmRgU7RLmeJupyqPAU53G18vs8neVAsxE1amX13qxp1rH68nkZ",
  "key21": "36X9dY4nzyn8VUja3jEuL77ovQepc2kBtpMbEQVgk7K7DPKM4ym4KNNbpwZTvJvN78f2zjuJggsHdhbFbpLTSo7q",
  "key22": "26VmQPP3E95pNaq7fj3LASv6p7nYyi9Dx4BAuK3jAYVEvvbgyrfaANkkvamjrQYcPKoSbEZfw15ZWwZT9P8eBhwx",
  "key23": "5D2mANSbmwhZUn3ZLRZTXS6ev98eapNkXzy2dhY5kJYVvi1PZe9eWUzxw1VvoZ12tdF3PQ8rgJwN4Nnvc8HqJ5e",
  "key24": "4p4YbrdBP9X6fWxHFJoHwPkbBB9tVsYEhfrNtPgXzyd2wUvafV6fwAWtd6Zi1nuMoHfyAz6KPDAXfUMuRPmY43oe",
  "key25": "2BMFd9A6pFyhia8eivvxVKGx2XYgGcBTdd9RhiY2LPaCe5cy96gV1iVjckHGtriDyuL3RwMWHucx9jPEfqgTBR9x",
  "key26": "2Te5rVwtD9cyJuVptZhReQhK6LfrFxQLwWZkm9wFaBoZkhdAt5QFbL9iky9vBfCUPR6PgPBukkTYuodDyJw24g74",
  "key27": "3YdZ3N1fXCSqKnDRSVuZtXDvBmwp2FacGcmGHkTq6eG5Wa82hRdVxpKx7CSmSFm1w6MEYLtc7ctM7MWy9tJqs4mF",
  "key28": "5h4gMWBLmpZbsLxidvD65WCkMS2EkzWKgHh7PJ5vyMEySb3ga3YskYmUvC6frCZsHgf8x26nL84hFm9aM8S1KC9T",
  "key29": "5ZsjrzoBYqst4876Ccs6EcSyusThAVyPDWFxjoxvj7vpHi4nXFV97YyM91WhgQgpDw642P1kmUe9PhTEUarofrXM",
  "key30": "3THKUZZoYW39JNfVmh5yJEy4DjenrKrs2Rk5M8GisEWAb6ite6ZtJwBdndRxfZT7Wq4P28MQsptgCnLnvMTVTxXz",
  "key31": "4zubw8BZJewNu9sr15yihCKrRABFp8418V1PJRFDBLd2CzSJDU1pRiX7JMx33EBCghKTZ3wTffqBUTN9TZo6erBL",
  "key32": "5uofQjCTCTszuRci79fAM925BTLK6jBx2UThGupyN7j9K2xbbCLhKv6iegYC2vmcU7L3RSyKVxC9qDJ43SnPqLzn",
  "key33": "4br2uSDxutnvMRrrV2xJmdrZ6JJ8LMX2hCcABPoLXsBNrRYNeetXxms3FqeKn6kdy5Zbm2eUU7a8exNJXA9dKAE4",
  "key34": "5M891qiFEpvur5qWJt1k5bximkb889AtA6fLAUGNt8KUZC8XDNH38mV2atkzpzYvZoLrcbwaJ9JPtcKT1MSopwmx",
  "key35": "54WGnBPTFpdRWDDn6d9yDvtkUNa1rxpoNgdHNhGydBbs4HDybb52gXBYmjn8vHnZ3LUFW9tzyBMRCKkRD4EgxKAz",
  "key36": "32wf3tQdEgAXwVaYxhUprwpi7Breho654onVDYtw723EEhXwHMgVC7c9tKVvAkWUwEopJhy7UsJKNA2vwfMGWmTz"
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
