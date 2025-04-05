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
    "4cBJeiDsU4g6spZPYoQwVVwtVLz8cd8VTXwDty2qhVMdHZk3M5fTBrnw8oC4wnjHXFXkCbEsShh5Dfen6xCreAT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iABwgkL69WoZ9RL5zx1sXkwZb3yoDGsQo2LMVGBbhsNqMn8MxCJrL4WiwJjecZaDJJNCpinxL8AYHpGeW74DeBT",
  "key1": "2FdELaqNRJ9Pm6VtwkzfYLM2jf5hQPrNotLpGYm1VaxuymB9geY75UCzKTe934YAoTZVTNK3YpYmY7j3acZmiQMT",
  "key2": "E8848oVi6cdBZDAwhBU8SBxF6bRx8AhX6pb8nqegkW3Mn2NcYRVqaWSUKRcnGqZzeV4RGnMYTqhRNZdbjY9D15S",
  "key3": "3Ws6wba6bDkDQUPpoBGeq8npjdcVBx5wnN5GJM4opTGqtsCbSXzeVtZwxccSnZeC4dBLEVqq8TWV3DzKZL42jSam",
  "key4": "2M46xdLNSCrfmvpk1vo5UFYEQgSSeAYEY9gvh55SjESAuVFZCf5cpmjVHgnLszz7N4MwucQ1mhkqMXDNFd9G5LcQ",
  "key5": "55QNEy1jdNw8cY8Qkvn3EnHxPjVgp11aJXFTWAjXdCG4cfMT52SX5wmMXg1Uy2AyJnSmFqM8VRwfVApXgCrdkKTX",
  "key6": "4eN5hbHeP9T2AnxunkNugiLd3PkUzG8sVZ43FSmmDg2CA5QciKBz2Me5yE5noyfHAZf3mqyj6FVcdtnJdymZZHJW",
  "key7": "5HT8huMmSPjhpCt7inSKtX8cmT8SKSvEihPeHNYZSmUpnfSjd9gzxKPc4v87SxUdfiwaBwAzhNyADea6qDW5gvJn",
  "key8": "2pQS4AuurFhhdUMmnbQy1qnCSWdneqeFrq4gWnUv15GTi5UzGWRmuhgdVu6GMBvpRHG7ywJq33jcU9bU6diVnvsn",
  "key9": "bng3ybEWJgrYPNPkH15CX5mLcW2gxWdjRZt8haj8PPy29wm62NMycNmKL37uXrVXsf9HpNAMQ4QYbvaJYkkQpyY",
  "key10": "287viSjpBKgiZWHHai5n83y9HjwL3ZP64ZUMF5yhgX8hgwRWhB81NozCcvsDkbNfXHt5mkfw8utMVtszsXxVH7u5",
  "key11": "31y3wL5nfZTDGRMJw1GUYhSTf6dGw9sAWDrEDYNhR9hcaZftTf2bFEpbsTTUiHoybRVfPzqnHAjxAbfbDm7FSm1J",
  "key12": "5dwc69DUvfHQCTAjvThYXv7NbaCyyHEhBQiURLJ9dKxraBvef3mmP36fsTHQskj1Yrk9aJRn7q3rCz78uY2nb3J9",
  "key13": "5CfjsQYbixCxRiC7eYLVpTPvbZNz6891MyKN3vXxwvdBdDbpfF6Pd6p13EDFmqTBstPHq12UfUvZadq3D7YMaU8K",
  "key14": "24VChK2cQ3YeTobzHHwpHnc5SCNfPmSe1w3Rtcwe6VxrvSAxPggcxk6bK1tbkwxcqj39fVnovmjNfZBVnGpvWZtT",
  "key15": "4Mx1w2GYABDFr2KVDZgK6uZHEKaUtwxksH1F983JHsR1p2fFfjJhSchWquTNHZMtioXmH6pxsd4DC6MEMTmVGSDw",
  "key16": "5az8wLtC76xWSmMXAC11XuSEXtwQPxg4m9ucJVxxHBSZ343iUcViVGxKoTkNw1JGUEyRJmUyTMqPvsAZyZnjNBd1",
  "key17": "mj7VvaHUxU5w8uidyzJQXCAU5Z6nFXQ22wjyx1RsY9o2zREkVwDpFKbBxp9GEiDyns72NmkE56GY1tXzvHku5Jb",
  "key18": "4JFGD4asAompuAfD3F4VcKjDxA4Q33D1Vn8pib3XbewfHShEEDhFtb7xj2gTVpWouovbvpSyZeXuLCVjcshnwcy1",
  "key19": "32XL3a25jH2dHE5ssBd2b6PihmFiJb1M2urMtjFzSbiGjYEFm7n2cu7KQwFtTbQdxuo6wLyz58nccLaccDmHXC8m",
  "key20": "33S7GCWSZw6a2Rq1EhtiEjyeLDf1KqdDCTooQxxgjUwB9LswyCJ6h1rqEqJkZcttMUCgdm1qoTpk3WbL7x6rLuha",
  "key21": "4ew78SbBkjyaQhGVhMMdWZw3i8QD77UPv5cJAxyDsFfV9snwv656BaQCv4z4P9SrVuoSkkduB5FpVXAS4zSAjCNn",
  "key22": "4E69DHpN4ZQ2NvJkoSMXujkeEjCfzYbh9k9aR6KkS8hkbPnQ223FVYUkmzjMSPk6JdvSzTGzAz4F88J3yLzUR6dS",
  "key23": "3MFRY5tLvcgFmFf7r68kzAvXVe5uRSXbfkUBShPZbGNsYRbcs7PG5NMeK5fQe5t4JFvPyAXRv1xCVBX6mrESRR8p",
  "key24": "5u3FFupFu4zZtTNMckNX8KSDucvQkvFReNH9j1VRvsGQiAXU2UWaUdVCLNd4poyepknHkNWidMTKV6Krs2JnxJ8p",
  "key25": "5Ym2cmDofFdLpE9raLHjxrjuD9hTTsYLbedKry7Y18TSWN71gt8n6RbPjbXy4Vk6kwcKcUhaQpkxH2ydbGjWHhby",
  "key26": "2vvbChCjzsmwoipDw1qhWZi3hDBPJ1BKTeUqQkfJ6M24au1n5EKR13tZCAkv8Ts4Z1TtLzmprthtnR8rXE3fJ1DA",
  "key27": "5nEfNsAWfcdhawqt3uLVyD8we84fpwgFhctRzTfdyoASVrUrkAteD21YsZbhgD28LHxzGim1Cm2mHbvF6kPEy5aV",
  "key28": "3pFVaKgwfdJUAdfUNuVdxy4Qwv12RJRTnWrQd4qj9hECQ59QoC6usTd4Lo1c91cynkkn2mCpesmdMiKcNrBiJK26",
  "key29": "3GXWr1nK97pXKhJgGcdwmw1vKKPQJWGLvUrr9DWrf7ESV3Vmemk2irEaBZa3gZL5h6sKoBWthDZDBQSjuHZowHdW",
  "key30": "5Cc9L5PGWt4tnku2UtvaakYaRUPuadaAyjM5cVbnf4MMg8ALnphYApNNkWJ9H11FjvQNeSn5pbDqPcUCtiHDe1yB",
  "key31": "5p96Np1xQrnipr72JqxwskAkdLWQSFMjJn9J3BF5jabAK3G5o9oeCG4AhaE8j8DEfdzDLpJFx54DCNFyKhWtJ8G",
  "key32": "32WJE3TY5RGC2G7mYWpi2JWy4rkX5RCmqmhb2BXchnmqC3oGheXGbH9Y3sfVrpmbMwSKpEb2HKYAWRrZ8ooSkkZV",
  "key33": "4LMUXob7duS5SqcWfHVhuXriH5T2Hojusv96tZKFruEMs2kZ1CKPfDSwnLPkuciMuidseMG7wZbSsNqxV2LTHugS",
  "key34": "3N6tHtMMkKnmYhNmNCqP3BtsVa9uApLf3fYxHnYcRaaa6GcJZZs2aPZ564EUsYN77jZE1mvpycJRCpR5JuaZrZMi",
  "key35": "4q7W23iAJAuvvHntR1HHUspf1ep3CKHi1aAjkspgqezDQaEdgwgZr5zLWHHPFr4b13gHNi3nUmf7o1SQe1ZpkN5n",
  "key36": "4ET6ae5vKVijR6YhxieLVPBi2JLAXsBjWA3PDJbt5dPybaAUSMrWrGWdRPNe48jTcFqnhJqK2jgo3F1mumUuPng",
  "key37": "iUUazcYuLwnhaVzgpsWp4vSZ8xeHZJmhAyeMVbcDiLmvuAk1f9jrSQd5xPurjkKk7o71PHhGKM2aHDNimybitDB",
  "key38": "3fbWJKMN8qQZTBXow9KK2XnJ6S4thyF8vdVw2acHGrbA7kZMBwH1pyzzcSFysXV3XafST3P61ARnKMLQXc6ExCnZ",
  "key39": "2cxNjm7YqUFUwuS2tksV8ReGcKZi7dVh2hVHGiYsjyHnLyJBTD53Ne26ScJGMDiykLBZq9xZGY8By2XiAirKn23T",
  "key40": "nU7pKCyPRbC3b5h1T5Attnh1GBJDjphcWUqDhGrGDxFgEBbvtrhcioZzPPFKwTvECQb4jzA8yo7KAdg3cPt2wbV",
  "key41": "5mrEcV29WBQSrTv1txtoj6rPzk3Dm5g7Zev5AY2wQoBnoj9owEPV1KAUzBH7EEiXvd1qJX4x5fzM5y9v9foNLvrj",
  "key42": "5Mym2DH97m1HpyiZruiE4iLDLdCPGbe1fbeJA98CVrQgVj9SrXNqT6YVacCCbE87bZLn7SHVFVbxyaZyyQsc8ewU",
  "key43": "2CBdJJsAdsH5JdBW74cUFr8AsUMb8PjsmLRVyekXQttUYeHU2pQ6TVCaZKgyUYMpgL8xLyKB9Wcr3Fmf82V4qLTK",
  "key44": "5AXPsYt8z5bY7E3QTA1zxuCQmR6GUJP5auBh8a8ktmV7nUXJTNZCR1ACX35hxQHM3CC4ZLuSAKd3YxUmneupmZhB",
  "key45": "2oj4tXrLVJSjVpQ3hhmJStVjvzRVZDwSHzuarjdTCjm7exN9t8AMp9sodJgZxtSnYf2gi1MeodVZdxz1JuZiVpu2",
  "key46": "4fT9x4kMZKCBWq567KivhPEptYEGvYSWdNXGHevuoQgi6BNBSuPABuPBq4KMLMTHjMyrdaLXT7aqSivbRTFaSRnH",
  "key47": "3xyzcXzymTYSvbHfWfty1CaqWzf2vdH15r5kTVBMZSPFWiGDdGEhXzXJLrWQbWFRb95vVvhV794Tg8WQZixPvtKH",
  "key48": "2QUMQAYtUbCGtg4Y1r9NrnqhQBuVypjQZgop9D9orU6sQfpPVJXN7cRCJXbzmsrkNGjWQJtRak6diSphvsat1NWR",
  "key49": "CLZTvWWjcwvcXeVhQ3bmkgUzCiyHTi84FoqVaE4yfZtWRdRBNvnMFEDNrxaU98kWpoajfSC7jugpeYMysrUKdZs"
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
