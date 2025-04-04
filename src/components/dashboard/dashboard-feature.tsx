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
    "5RtNZxUMitYqBh7zC6oFzmd3A815RPnvdpfL32NwzigwFrjqEocRnPMezvHbYwhhzCRPKdhfPJu1RL3q6xvZ2wkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvWEzHjZmW5RkrDB9xfR3sCfgT3bvkN1qh8LcXVG4L5QSEzn5NCanGyebeUUoR9RK8fM4cnxEVsZc3YHLMRBRmf",
  "key1": "eYfCJUTAJSvT6KeJxpcY8ErmRhwuyeDmdcxd9HBA3g9xo7rxuiqZxio2LiaZD63RKycUyGgFYBFSgatCec1kYNj",
  "key2": "CBAwE8mRdjwoatfpoBy2vznUXjL1enpPFwky5HqGH1RjbHDBqyGc9Z9zkiHhmqEVa2o37wKpBEMdmRZDAyJkHCr",
  "key3": "41Bf6bJHFvUKgJdStHY8ed76aXiS4BJMAbmLyxNcc5LyXBcANZ7xi1QN2nYNmRBFPeqiCLcbiFGtFVbg6G2ntgDA",
  "key4": "2mkXSrmQtPRb19e9dmvG59fuAFMkdhWsrB3qt86wHbn4YhomRRUvFHMuRv94mN8CGf6GrV59iJp2Cg91AfrZ7vRk",
  "key5": "4EUmX73aCeEwmHRvebFzRQGpMhoR8G3WZGedjZq8Paq1jzHYpNPsoiNXh95nYx7gUTHrR6AxWEbzqAaYkeFw8C64",
  "key6": "5zTri4s8ib2yUKc7ayeepvfeCW83EYVV2XCwhVBixXSShEiT4CyjykMi1tZ1kdLoLgUWMhU5aQG3hRQEmtXPAbky",
  "key7": "ufeGUQM9f5bMZZ4B8X5Zen7s2tmoD3S6V3BV158KfqAAK3B8hF6vW8LKpBBwacNxdeoqgmPHKZHrT6CF3D9EWk9",
  "key8": "iEohxRzdYUWrQp61Mcfgdpoea2pW336bQEJ9Dbqr1LdcMwLpo6WYAcF71yF3rj3UuNFvaxZq7WXLC9tXGjwa5ig",
  "key9": "5Br11qTP383VzgAuGubGfXNC18aCnuqZudsF6dDb45pRTBodaAnLAFBXNB8aCgfPRAuvGjqtJwt6uQCrmBS3nhVY",
  "key10": "gaAmDJuHAJnvkSpG7Vc9Fx3GtJ85NsujPFpTp1rCiLbFh7BihtEZrBCjAGCrvjeACMwhqoZxjRdqPP76evsng5W",
  "key11": "2e9mirGetk8ThcaY2kQwE9E45m5rco7ggjGqiZjt6v5CdyfA6gyJ3NvDbAuhcKN1PM3feXsQiP9gcuy252hTfZCN",
  "key12": "4oAdafqALqVJT6vZjZGiu7hA7UewTu52vrwvWtnTBnwKm7jZYLiwXdT3U3sMBHoj6Q5WfErexSgvxYmomUJT4UYf",
  "key13": "3kVN72R8RsfqSKoteRWMaqZYxui1ePdpQqB6EPWLnpeQHy8iZJG1ZcK5SwkLb6paFawdKuKoUTJ7bYAC5s3sonb",
  "key14": "2QMv8u7cgYxrMryuWZEbmPEBp9ymrtDzXmCtTekuaUrvxY3ztxyHzxftjATL286sgagCTQPbSsVi6Vmvd1M2d9s2",
  "key15": "5Xn1vGaELuPwdYn1ZicNrmkKLHEDLEDVmNXMbmV9W7JBe3uqfLqf8A3n8K8W2qBp5RCGJkh9fZebg8xo6HSLDFKD",
  "key16": "3wg7DYdmWyQgqh1ur7VMuHGoDtrWcTpNrQQLJmvSw4fuTeN4dF1tqwowo6Bh7cQGTUgHxkkvjDDmzKT5SvNHNW8h",
  "key17": "1cte8qon8kdx8XFbyGF54Kue1Vt5zfpGSJNVdKGL182wygPorgyZhcYFSFN5hfrtofHb6Bw71AKCtipWApMGtxM",
  "key18": "4hxnLKCPsRrYVHYgHFLya6dLtHe1U6No2ZpJ9LypiZcMydVNGBaa7Aei8xsDTuiEky2cYS9PB2X1QRU2uMxKZ7B",
  "key19": "yimNkGMsEH3d5n7QTndbh6mgTMdccYazqSgpot3NYdv8MLgewfrNZDMU21qoghjeVQQJSAX8KASHbwamNSTj8SH",
  "key20": "3Bu93YJHZSzkvSEmHpXDiC54un1PcDKxFkCqy55uLiF3bv3pi1ZjMQYgAJfHLJhYYB5JuN93Q9XbBPHSmuoUjwia",
  "key21": "2Sdk76ctk7wagZz4JHgfze6ZXWoszt7jrkxKuWfrLBQnBC9xRw2t1GK2qA7okAJgFi4E6mPTZ3UcHYzZv8bmqas7",
  "key22": "4JiKapzPHUT4B4B4f2utPThpq8AHESAKoawbX5jQ9XNbEq9af9cE6wkR836NT1dxYyaaByq1Hxuvej4uTqyHtS5F",
  "key23": "3Dqt3QLPoTrsu8WkotczrSeMAi8E2bn3RW3RxaJDLZ9kuoZQ9JrzTDXmQSsBReArS5d9mwsQtZtLqXVxSqTxLbg5",
  "key24": "qnCjyPumMTDi23fx9gDkzdCwFaW9HgX3TZAJdLTGYzNTMGAnHsX6wDLzCB7MuwCiusuKgYCfRLj8jxoMFo4rWgs",
  "key25": "3RXsWDafwFsV4oMYh1eZ5iR1cUKqk7UiP5DoRijvsn41rWGAAfjmXhj3J7NDfuXyLgWxRF4BekweyUTHnTJ6VYsA",
  "key26": "28YHECdhEEpGYt2KRHDJbppY9XiYW1vcr14g9XdqVzQxW85tQnuT7bt3TJAtzGVTJCUTrdnP2kQztshNbwfVB6F9",
  "key27": "38oz47mcx1K4pJPuB3Qo6Md7Kh8ZopaMd8g9iNUYiRBWLRGmFMeVavmWgJGhA5yFHZ7q6btBpNThcH7iC4Wu7utf",
  "key28": "5LQGEZgsUHcG81EJRF2DpHQfuRKMc6X1YrkE23CWWbF3vHRdnHhxywUCn66zfbQBzB5css2wPpJch5hBVqTageZ9",
  "key29": "5h9vvHDdVzKBkGDmaM5ryuHjTc76Ypnc3dR8AbrPv75VkvZMiEDYaRdjfwH9o6jSJeh6C43Fyooo74Kww7S3JHH4",
  "key30": "2QSWag8NKFAtCrGRUHiVquwim4g7P8MVWZDBPZHUZNPDZCckMvBrtCCM74K8E4MJuygWNNybhHTvLhTeiGxrPKsx",
  "key31": "5D1xPT8oBBWSiBGdgPQVvdbV1QSHhiCN2yijkzhzE3eiV34R6ftZDf3GwP2ws1yiT8jLvasnZKbbpYw2GnJoqGJt",
  "key32": "5Jpv5b8RzXxCSg7hL4fdMC2mizgmL2hm2CmqFW5C8A1VDtjEs91tpdMs3NFiLCziEt4tNLY2wSr5coihfqxXrNH6",
  "key33": "3ZA41ni8pm4KG1EAGRtyiQW9Z8ZX5gH4XAQ28GWr8eEnfRBgKkVaangoGuM3gNKYW8wyY5wPLr87XtBxj33ZkPHg",
  "key34": "3k6JgCGAhoLC9Xc4ggjqkpg6Ss96caTdJDrqM5B95uxYF41jpkk8DAiswjEWo8eU6nknGoaM3yuhzumM2shCA9tC",
  "key35": "5XkeWkXE4sHiQsCRhYkJbvkbFE8WxFaHzo1nVPuUqZsPFksurC2pEahActUqTw9KpxvvUBx2L9ysvDU7Ai4rRTgk",
  "key36": "5oPV2zaHji5DS1pfhGsgMgtpB3yv3BawRJSpikz78rvSgZtd4KRDK5u1Z1ts143pa3XMA6i9nSqGFHDYpD5oQDw2",
  "key37": "wRRyw3ZT7MqRr6vWcFv6jRFxwsXLgK1qRb9wMaC9krnkxrkptRjWX2CTipqZ8xk3kM5uasT71aaf55nAZMaEVWS",
  "key38": "4MzFNMrxtHJUBHPZPcx7JZK1xSg2XsH1PChFxtidiW87EHbrq7sV32RnvPrhePYku1iZEX8wMioj2VJLoxrJNaWv",
  "key39": "4s5kEkcBLfSSew4uwngFnENVVey6bVRt1UUjqyab7KcJT84r6rkrh5RJXqzkm4q5rKArWXbTVSfR4AwrJjbas5dp",
  "key40": "MiWiweTvLYPihUtZ7cHgUUemuA1qtHd6NS65hEAAK6TBTEC99JTECPXDVWwc6es3MqoCXkz1uXPhYKjPtvneu9T",
  "key41": "2XUt7y21UGJbSF8GxQtPzBo7H5o5Sbj86TegKVX6Q9MmP2xmN7KksEGw7KdkktoofH4CuytF37tHSyjquNoE2NW3",
  "key42": "66mgTTGaYFRqh5de5G9E4ceBSHp7gPYDsKcWWrJf6ZN8EQgGHihj4i3zWfnZ5JTRq55qKg75Lb1z7e4N5bDeyBQg",
  "key43": "3UvsPDjwdpTM2GTyh3L7cacDJoSAibvsqktS6izt6MwM4iftK8ZwWtRspcbJDQriULkvQEanD4sWNyAsPaP5wXoW",
  "key44": "516k4TMqCAAxQFG62YEdg5dLYyRoHmEG1kpVpAX3EfFMGN6qhpCdvbtgpoqK7KVz8tFgXhLuT19wwKj33wECD4Km"
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
