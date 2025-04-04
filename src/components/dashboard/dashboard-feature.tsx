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
    "3EpZzt7BbibuYAJBEMqvvtcBudD8TFWkFRCPsBihZVFbpd7qfAeVC3HnegfWN9Ff7MDqrB7GcpAQnVNP1ekzdxHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQkc87nywPhBkkp1sggxJ8WuxVJfRuxQeDHvA3mt1skM9Ym85PbHntXBToGuzVSFYw81nUG6KDMBBULmbg3paBc",
  "key1": "5gM9tANEcyEch3d7vthsUDmURzdv88Z2Bs74UJBXbAixW47V6gRs1kaFTrsyWyTtSi3boJRVn1sArzsdszUCQLa9",
  "key2": "2iAQ2YmadZcDYLQsz97E9SCydCFyS9jzVqgS7KXC3tYBMQPRn2ryy7MnzF7n3wA534dLGgFpFCynikYcuXRupQUq",
  "key3": "2X7kEa2jshaeokSsrTEARCdMnXb3QJ1tZ59w3GXWtphJvptfKrbKRCFh6x39SeUTkB2SCCxjtiD8uvmp5usFGDB6",
  "key4": "dmmgJZKsM1sHijH41e1qMMiLwB7dqvKRub3dABZzFLe2J5NEax9GoF3g5NRfchLxs2ewFWwxX43wLzXLBXe7kA9",
  "key5": "cA8Xd8fD5wd5Yf9rafUWGna7y86wiZjGFozhfo5gpu5CDgyUzDcrPA6MQfR2hP2mR1wDJ3xd2SFd83fnRu2ypvy",
  "key6": "5iZoqY1n2PFmLnRuUj6voL4KEp5jvp7izHhK3KQpnLUybnKY3TNV4pv82eyBddwnx6g4ra1a1Uu9cvnQEyqxmCEE",
  "key7": "5Dkm2Ufnjj8Vry5f9AHPwn2Vxro9N6auCECfFSXfXsNhZN4g4RxCQL3C1yhZANJwbZcn85aB5yYHcRdt2aEuKMJw",
  "key8": "3EbYD34LNmonxYiFoyKSezhHW1bodHUKRYYQ7tgNwrSvHD6wehnusFpvZJzUu3c6pEnQQQKra49zVubAnmLp6VSr",
  "key9": "4vEzdnqitK4Ysq21PSsuugpX3iSN1zqPALwE8tXq23VyNef2Btfz3yqVsP1htSmw2DYfU2pwVQqv9bMW8EDQ3KKB",
  "key10": "5c1AhcjSxVmqnyt5BE9AjNU78axbMAVT1siUzQQF5BTqLeCDURL5vAHX5BkjwvGG9yx8ZLTSpGhijWdMTr6DNJ8s",
  "key11": "2kzrpYHJx6TLzZMojxXwyyLCpcMpSCVxLEuxnqTF9WLi7niK4kM9j1zKZGsvx5iaHDHA8WmVjsyQHGRyxBK3x8qP",
  "key12": "4KTzenSfwpXrtMGcQyJnStRTvfaxLC25rEUQRLBZdkkReAMkmPx2kDxKb8QeBDgqtDvWJWpnG79sD3dk1VoC8gPM",
  "key13": "5WcwJNyyo1SWZEU67xpgVWGxBUrY266Getuo3c3LEGgZy2rVvCBecxNZPZK1HGPQfr7v2BSqMBnkFczthphh4g59",
  "key14": "5UqgTdoYF5m8CpZRoJjc9mFu9huivCShVSFGiuWXh5eWsRT6BUakdCwMU3dQiJJz9p4w8ajtzz9CUiZGFMMQVB6S",
  "key15": "5hFvrHJsJHxLKeBvUtAg9CwshbzYtPZCWKeM7ASZSxfv3YdohCGBvrKxz1AToKMTukjk5B6PLauMKBLjD6Cchf4g",
  "key16": "65VmVFJcQqAbkMmEJTzZMeCZ6oqcLfALYvZS4qs6DriuMtKp4kPHyWiw8axMYfJp4awmWhZPSvjZgv3uTmxiYWXF",
  "key17": "2S6nxjs6CXe79efE5W26ih6RDD98k1gFhnrxPcxtY2bCY48Yo5tddacUpUDoCCRrVM8k8NCWsMi8BFYGfrf6EnuG",
  "key18": "56pxTZc13h4Hh6rK4jjot5iWN1GmSDQtVFCTigHQEqXaLZmsynJqFimmp2fKGomMHPjH9aURrUr3YhdShh2aQ71U",
  "key19": "5cMzFoiL3a3cZyC1ryHjYx9iDzNxHM6zjCQTrBpKfY8wP222Cn99Q3PzQt5izXaMrAgh9NC2zdHzzkrj6zW9HeUA",
  "key20": "4Wmo9asWJBfXDEKY126SuEx9n34KvRgT3J6W33YgvpeKzhVJmb54oRPJFhWT5yTo1cRXxoeTKiLyKS3RsiEDjQs7",
  "key21": "2i2pYvB6F5Mp4kjkQtLzsmNzuZSkoGEkz4an4s4nqsdDp2WH7UgXVhHVjC557FSTyjtcuv6p636WK781EXhFWRUb",
  "key22": "5uheFrsDctmqVPBD9RCqYb9rZ8vhm15uohFNqK37pTrMV54NB89c1BT74ccW7zFwRtAKeUscfgSp8Qo12AmTbufh",
  "key23": "3utcyAatZPbYa42xMhpdcDRSJ19rB9upAUDRhNyYYEJtrZtPGZ73W9xikiLg3b59qdUCYmbUn9b3p2bAK4WwmgsK",
  "key24": "5eesXmSrB6YBQX8NM6zgj4wYN6d14mFapZi8zS3vQK1NWMJz4uoN1Fd2VYowTtPdvDXuXsjpHFPpDSTG9BH1Swyq",
  "key25": "58BAJe31QFJqJefAfXt7gaKvDSKcx9N8acS1HxXuH6jh8nA6STxPdQNNvB81phortcinuLVCaz8wUCvdzPsLSzhe",
  "key26": "2gGquUUjWVXMcE9uGnFUvjSfgPdqWoqjdf1MT1HWXUUhVAN9byFbCZxHKw4pTMdQ4NYYzbhXRG59m2GBdHxqtpRn",
  "key27": "6Ay6wXdGTA3WJawTbQAd5C6LS46pwbfcnh6wtuBMDztsUEtyvULxNZQtabQ43XYCHuGG1RwiigP3RrEvEzqwxTq",
  "key28": "4mJoqRff9C6oLaQpKDcSFC5U8iF23nKVqnyzxFcPzRLKpfwnM5bV1UkJbnEqaXy1kTkBvyS7BEyEFQ7cpoBPgfuw",
  "key29": "bXdgHPas4pBQCT1AggXjGaSk6U4rGERo1kxmZmhRjwXsuzL21s8cD85L2edx3b1T1Ekt5ZDodgoL4VR5xNkxdJL",
  "key30": "3gFNGmzTFVvqRf1cLsHxiS58hUZEzYa4BrMHUwyQQVRLfoHFfYVE2KcPNuZnbkPEQT1QxkpsFHY82rd5p9Yt8Lju",
  "key31": "5JRbYRjGGhf3PVd6aWSTwDp6QUZZCyWJRCFxKM2sP4gUPks65JpLhnSSVG518MrDYHmCfCpnKe8AiWqaLYPi9wpX",
  "key32": "3wLUDA4Du1pUexUwZes3aK9gRhkja13H4GB3qSABYsGgp9iCu143ydc2bY9PgyGYebV9VjivQcREheBxeWd8cqna",
  "key33": "2k24KeGoWTjV6MchTD6dovAzPtVbv3W5fQ75g8mie9p95x2fiMZcbVCT3VdzYYVh6xaYhVfE7T5JEsnFZQr2mmTr",
  "key34": "2QXAdmNhfQXfTtRc8TqUAGjDR2tGFPGhQE55bnLyEejmMeTo7tZWLB5A5uVfMYvY4243M2mK5gPyaQuodCn6ouWQ",
  "key35": "4hk3nyjRkqAWFpGPmReZ8wmsDGzgRjK2xdC6rvF4ZUXF1JuJPkN6YmdEpZBdoRqBS8T7oitScVxguzudCK2PdsjH",
  "key36": "4Uwz2CQeQCAk1Ynss4zNZCN7DVAQQ4rizrB9xcMhGjHryjbpJ4Cx9n9vXWefzKPLUD7gYFuFvMWuvaVdcReGcu7Z",
  "key37": "5hpgmMNs8zk9hDcCiCgwnFogqXzaeaNdnSvgW5fSb5jEvS1yMxJJrqC1Edij6BvHaiyuDUBm4GkqPbHjBT1NoD78"
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
