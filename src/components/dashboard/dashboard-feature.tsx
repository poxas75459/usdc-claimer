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
    "EKrNQ6zG8Cs9Y5DZwp9oHoUfLHwXZWM3iTgNr87wGbwRUhA4VtDniDLNCU8sCLqH4fzPUehVRms7UDNB7PMGzhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LonUqQqE3ZNX9pQBQqfqRFP4RF6k6aXAAtfraHFqeNRLzknrrSg258NSZaVhUvhdRbKRPajrTEjV6bBnD89D2nj",
  "key1": "5jv1EGkdkY3PaMtuCxHL7JwD4gUiz83SehxJX9gfgNGgFX5QcA79aAkA4HtKi9XEKHo9EhBkXnsSzq4RshRnAU23",
  "key2": "29byMANXcnAmJ1P8UqmEGVchhykHGK8xMtrQqqjuuYKXpGu1BRe7cWMPmTLQUeDqoGizJtX2HsJAi8ciC2oALokp",
  "key3": "4yYQe6R7uCLdTBrKyZCU8muTNma33j1rgitjxA5nxnd6uGJs8R9Xre2EiQW1y7aJGeCLvGpJ2LXknVF7V55UhLdr",
  "key4": "BuxXTEmP44b3RZURUct2KxW1k2VN6yuLz3REKdnbgnWaJCpmKJTBBmx7pLUgtgeUTMncL1PhTCsoBvs72gQ2DeT",
  "key5": "3MmfcY18d7kDMSbEb5rVMWyVWS1esgV6wYTjfhEn5gpBvEMXm3Pm1G7qyFv5ZUgWC2cJScYhh8xC9nN2eGAinfyp",
  "key6": "4XGq5BoVmB6A1h2Fn5paUPRVCxCLB3hudsv3wVpQUKzv3Z9PtsQkDHUFSHzA3k6gy42vhjAeG2azh9mg4MLdfiZZ",
  "key7": "36d6wxSspxSUmHq7Mch5TYzapafTUJVWQoAXqSA2q1PcmVUXDDeAYxmJTYhtQoE52nf6CjS8jba6MqFL5DBVJNH3",
  "key8": "2JavHLsJsGRcvsFSQEoikVKYVmjddBMmEHEpUSJzK8MKsuFthx7LB9iQ3kZ1TGWbMv2d3ZA3ZyyN3kECZ1NpYGA9",
  "key9": "38bgxEJVT2kiFq3iarhCZy9wMh4WMEpUUwjaSMySvEVDt1oWia2GpMHRGDmLKdChT2AdrpTJDrVzCJjsPt2KgnWC",
  "key10": "iYQjRczEZSeRRncZmATqmJjA61AKkKPGVzKzDDiopy5nk4xrEBBhkHnWZYFvnwmJ2kNVwXhZrqGVa23M8ndGDbJ",
  "key11": "33FApe56ASeoQhqYb5Q3swJQZ2y3EvszBeH9ijczLPcxxdoSuyamRPM3Pjjiy3biKY9g5nRquLE6hRzpsV5giodU",
  "key12": "5rZv5LwYPAUD4ZLtAoT1G7WFjiGy8PGCrSdXqmZQSTYLWZ6UkbzMLu9YiXKriJsH7MczTXUhQmCvzQPmsdfoXhSC",
  "key13": "3xpSpQCXrD2fHuKuhYEZW9stb4w5wWCtvyahShHof3GuxBLqFr5WRFEibdd21MWvWqjtw7uFv2GhUMZYUAaWDUi7",
  "key14": "2p6hFS253fnExwsf1dQCgTFDgGmE88ajkDmTQMh2bn5PSy4rjarjjshMWV9fyNwnLqNPc58m6dVkrEXwgvweMoib",
  "key15": "5JJVZouyshNNwWgdvCyS94xxjYD8EmNU1bPk8wH3UM2XDbJRL2QHsiQE34nsnCuk4rdC3QsS2BVjV8qCDFtEqA5D",
  "key16": "651Rhx3GQLw7SmnS6SgojqePyinfWzADPdRTuqaMfgVaJJaXEhbyCuRRPtTnjSDz22r2y9bMWEikq4rDARpKQgBW",
  "key17": "4F4uqt96MB29BcGoUGWJqBrQk1JyWNPnjkCenz6XKq7Zx6xw7qHE1SjTt6AMBen3V9wffpz6ihrYHeiuyqYUoNkb",
  "key18": "31iatLrKmTf4H51yoHJeLkdWnUwoZcVkQ8jgLE9RiPbE2Gx4VPz9chhMBEf9NgJvupihQaduewUe1mHj8xdbhang",
  "key19": "4ZPpCStH6KLWGhgHzjBdUD4WeXex3inPR3gG6fWT8mBaExtYWufsAu4eidTYRviU8V2PtorNjWiXCMs4RQHhnaPZ",
  "key20": "2P9SouMEFZ6r6fdiPNYaxYqErKWJr6fBFt3e2BFdvB5yFXXreT2UBpagtDMAtHQh9mmkN13KYDnYkpYVVHzjsCwf",
  "key21": "3z3AZzf7hPBXcJynADG8wZT4PfxqaCJEqGoZ5HiEvYoUcnjo7XGChFU4nANtgak5uWuM7qQAZWQ5ZxZy5kajz8FU",
  "key22": "5tgmpzaeRW8B7H5skFEiqNL4JwjpY7D5hTs13jbGRtonnDUj7yhQ3wVMPuEtmTgURNUqnRC1GTKerrzkZrRdfHEc",
  "key23": "3bcDX4G3fsVWqMX3v5GwUUQp8eYBBdKFFNvH89VCWM2SP7DGrGeZbKnSdU3Hsh4fvuH2dPEoLggMXkC4iB5oMRZ5",
  "key24": "2HbHcz6K8gwUeV8eUNbbxxpmJGsv1oRid147R89gw7DqguJFa99P3u5ErtqotbFvi5Ly6pbBPoHefgHNcBz7H7so",
  "key25": "WBzPTTU56QJVvwUs1Ygh7Ef7cemNKSKMeHdq6ZTNRyHryykW5Qd3uzkSjSkJnBMFzY3pCZtLy2yzvmka3wAth8B",
  "key26": "3xYC9VEHoiMQEQ8QwvGBjh6x1uVK7ysoNV9RNiY532793qVRJF8dac2hmagd8pjmjVqgsfUA7DnwC43eFTk3KFE6",
  "key27": "5oMsbqCe1m5JhJ14mixWkMcYusqoSU6Nwm9txbUFSyiqHeTXUdfq84mVfmhTkx2tT9PxmsDVgp1FXmrxA9tuHNw7",
  "key28": "CouM7diN8vcjfMdnNVMhtAGykj88JKxmyaDSKLvW7UKY5hHfVfFf5fsDhEghCwXqy1bLHj4FnDGefMHvv6ZiRNn",
  "key29": "4FNQ54XvNpsyA9u9AE4oGYHYP4BH95vLjbNMXsWGWc2vkRnCPjdvKyUP2rjP3mKSNqgPjEHRKZbGErk2e3hGq4Gy",
  "key30": "31uaCwgTx8ExmayFE2rVqhAiqDyjusf2vkaqtPiGJtWgGKUYh6qA6XnY19vj7eB2SGWeaJHeqJLvrxWpjtw8cY8c",
  "key31": "3gsLdRuQdKdGWhQry6tfuKWUZfjh5S4HvtTEfvw3tcfMmPMPw2EUcx2pefrtptNjZf11JTcWSakpQ7XH1vYPz2h5",
  "key32": "3AkUMmTCLSEyYTHmLqJNuoFsnUMyiB7HoJJMCAXyaF5ZdcqwxhrP9BXENefkrV2CwFPxgMiMzuaLYJYbSguWvEYi",
  "key33": "359nVrUPh1qyYDdATKTidcgS61pifr27Mq7Q2DagS8UL1uiWL9Xt8Nvzot7WPVgUBnRGCVLukazeFqP96jWX6rZL",
  "key34": "58ikybwLfcHm1nED262fxRcx84kkCvN3aBoCuSGDKK7zZ4s5ZTQfD99JfsbYRoD2dq2aYKHKTsjMFX9FaTB2tPuy",
  "key35": "eVAzuDQPLsVqbWM3KaiLSZJt4rGFtvtvqbTzowB5Y5XwS9aLKuupAnpmTtbqMfevA3US3Zd5G2114rN4pgcw9qw",
  "key36": "2h3EGCzDaTXHsYe243DLk5K6KaPqu1KRrrDREZwHsVKP69VWmTESP4WkqztscrE3XjBxWisnMqna1q4CwXTzQvBL",
  "key37": "5cmHzB6mkXmpm8Nw5rFpD5VZojYBocqhxtJVULnmTC9vNBtP3raQDEGHmnSEjVG84SiSrp888y8fRCp2E8tqSbVt",
  "key38": "5171kY6STZPCCGpHVEWZgaax5eTxFzcPMnkvAj8Au1rSPyif1NPXZBWcbb5zbp2W6Remt8MqEpzkzQ7NA79kukNh",
  "key39": "5QaACCvpLJw9ethiKnaRshtjzbdZUdEVvsfbUeZua8VndXUMrHVg17vN8Fd9JBdytv4uL5r3ExXrckPuy8biQpBq",
  "key40": "iBj17JWKYTpakj9DGFjf6qxFphGZphesfyjEvGNNp2i3QHP9YL7cgDhQ3K4BXEfyLWzFsvKrpomsAeAgZjCZaid",
  "key41": "56vKMQiUm9kX4C5Wt9EcGxWUasUzdbP9JgDFkee32fy2jtXAWw5ns45n8p4Y1u2Cwp5VcUzff3U5MdUbM2XCaEhb"
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
