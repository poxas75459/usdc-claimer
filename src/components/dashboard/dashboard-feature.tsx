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
    "5J3AosgAgobfevBcDyvmWmxjD7tQpzXBVKErGt7KhGrveGugXcJZEhPXntaqoJ1aT1XHN26bDYbKBRGrm8JuMpvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2jTqHkfzCVezVDYq4ZM6C7Kx5QCSnjX7rd1b7VCZviPHyW57ahxVWBCZvbnRSE4diW7N6z47zaV3gGKuTShmgf",
  "key1": "2Vwc3tPBXoHdqspJu6rTLn5gVbcvxFR6TZ2MgffkRMbLwMgun7Ut3nY2pyWwPcf8Tbx3cNooS7Ncj3UqtRHH4a5R",
  "key2": "5SmHDeaCiMCXEQxcRgepBX8ypQVmP2AveKTPy3giEgGtewH4KXfj75iksW1VXmaRJZJXnrAasombRpYAE4kKE4ko",
  "key3": "4gYwpGgVj2GNwQDtg9ZUSSTKUrbFKFHbdaxoZxJh3rQQuUYTVmCrD35c8H4caTtv13hMK4vxySnteHxRzjuWxJcH",
  "key4": "2ftnxmEtbQhEtxuyr84FbGuPQGzASmMi6dG8CXxtL8amQo3arW3MUoq5BJEcCmGeePCANRsW2EFDQWVNbh2tzyHp",
  "key5": "2LtwA9wAMLfmABgr7XGgSB2i4ZUg7eocnDYzw4169LnUZmRDR7iEYELhRgVsrq2Bpimj3t1956nhvdTjtgMuAnFa",
  "key6": "4jPqn4wfDypL7vxQT9yALoCDWRoJrkHLTwrQJ7gFwJMt4Fc7f914GDvM6yzGJ6xN1fTz5bz3p3fxEGqYag6P55MH",
  "key7": "4qH6B6jAgz9mUfK5No2ZtrytPpsSFBVZdFabUUT9j9zjVdzAHd3ZbCB2BaqgFZH3CgQ5jUxwb8aUatRCaFG8VKtX",
  "key8": "2vzPGbyrJrUgBC5WivFJ25F7SYcH6z3sV8wdQB7BwepRdvpV1qbTfiu6vAGqMLtBqjiXqTmeyNyEERD5hgFzjNxW",
  "key9": "MrPeS4qPfhEUqiYBsmMhbL77sWy5eBLR4Ds8HA11Ay8xXzv3L1WWQevf1Wnz2kqUaFt4FC6uZnrgZF8oYfd9Kme",
  "key10": "5spFrRG5hawTZcTBNQyB3wkoQs7P2fhF2RhXqK6njUPMU9GTNfDfFCzhAy7NNKNHV7UMbwL7ih7VeRyRDwVKwDWb",
  "key11": "2eQ3CTZ6HNbNxgKz7EHu6A1qaoqz6BrNHyk2FYe72qVKVPp5QLTBqg5X5iwb2wuLWu2bDrstQC12DcWQL4VurTSM",
  "key12": "3NeKRP7v3LC99MtyZCdU5V9pxsUhHFL3R7MkHinGU426NwrizqHTAaLDKxwV6Aw9BduAphwEP6k75K6HjC2tZrrh",
  "key13": "rLP5QhZQhZKqtt2G1tdYf1NcwCegs4u59GfHzGpYuN4DgkgJkJmDapHsBVX1fV8rfhPsiZwoUEtHjx8fsyvELZ9",
  "key14": "5sGcBd12RGipMy8K5J5bQ3oiZ26LHvnyB1Yi95dMrvxCwBvMRRUEGVfR2m3EEt6dSV72U6Yw94Fhp4Ppn389YKMB",
  "key15": "knSFy4yTqyhxmvpVNCQwLqpZ3E2sVTMApGJPECy4DH5h4PJQ7PRKyF9mypBSejy1TyGpa9JQb8C5h9dmNb5nvLy",
  "key16": "5NAaUUJoGhJhP2ZReN6dAz7B2D1bjFmrsByfdL6i2txn1uj41BmubtQo1vM3rEkg8mWjR7EWgGdTd8Na6Ep8xNrZ",
  "key17": "4XUA7DDewaWLwAu1zvFdxfCsqXe1pspXwSwJeAPJRihhtcdkw8wx79WXHtgkJFobmfHady82EUyDBRDoGtQraRz3",
  "key18": "5SFSDAFtvKwaW9RARwvQS74aN7qMqtWxNiFmU9X78M2nP1cdfFpspx8FrBGwJ9u5bsUcLwfasY7AfCAkSmDP9Eiu",
  "key19": "4AWX7WimwNw56NDW4sq67i8mx7poNRRnk43ykXpxJW8QuUrjYtAPDFE1V26gLRXucAPwyVLBomRKodk7N14rYKmS",
  "key20": "5wXUGVbxLQvsD14pW2xwWhz94NokoyenJFbV8YJ1Fvgsy6sgeYxegtAQbpsSMHqHRTACfCHP7v9pgEcrsgAgEFNX",
  "key21": "5xF81McQWWvTUUA9DkTuYESTcCMd31g7R3QgRtoeHCQf8Qbdfae6P1PwVQWCPSFkSdHvVjTtc7JUfUnQWqwM1otx",
  "key22": "4zMjPpLHzqZnY1vJJcyJX2LeRSnKmS4wZW79gEnFf9SwUCQzixpcjKVGdtFZeHzBnec7p6ftUkC98sQXTJqePWZ9",
  "key23": "4qDSGAAmcwxdqWSQLoPGzpwAC2NPPVaw7Pe6SvxDpB6dSqFd9h8wQYTvk6Dyfrc8KVgXLxp4hpDDcrDdiXjSNWcz",
  "key24": "3JgBuCfJHwTmtSCHhf7n1YHKjF6YVsb4chkWmhxsypPwu4wk4Co67vUYLhE9t19zCMzinaJw11cyQyU55ujEJjJn",
  "key25": "3F2MzC1S5SAF54vuYChBn3YQERQ86MMNmotkmcedJnr75JekeJpT5CLk5Tjx5JvsU4X21U53cqekaBVx17evjmtY",
  "key26": "2kXAHmjh6ZLpeBPmyxhxhpdh6gAonsyy6LSZExjQxgYJTuduBsaLVPkQXhUXGvSU5UZWM4PrQTkVDD8L6TqNZXrF",
  "key27": "28g5Da1Z8VJXieBGFrPLRYVmrvtQsZ9vQNZJGJMMhEyNvgUzF7Ge8x68ETNhQTVieHJA7tQZmrbNCbCo4pp7XcA3",
  "key28": "5A2wfeSRT4qC9LH3u4KwMT86dq8CJ5JvC7MDZFGgJwLb7DDrTb3q3SrrjcvSiKMoiMAfrKZz6zLEwzriUbDtkN9D",
  "key29": "5gzTziEwEsHTEJmDYACxiNedirUzfCVrKynoZqBxruf6p3e4PAwDh5SjtWtE32z8Yc84nw7fLNTtbZpv8NiXERma",
  "key30": "2aHXeq6qt356KyVWGK3ogdihMpiUyZPXN8nHJqn4hnZjjL25Fq1TDfoPRQiX3WmXSgoxFzrSTSfkNjmdg4jGmhvS",
  "key31": "5zckNaUNojqYZA1vyVKuvTH5Pp8agaWQKpsd71nc1GaKtSNxJgmDK1NseuetqkkbP2zYsRAKmYEUY38KMeDf4ve5",
  "key32": "3q4iZMXjq7UTtiWmemhczUpYmnSNrnzMwR6sNP9main8fgJ7ooeNLRxrhM1k1rwX4snsSH6EpcnvY2TzD3d3ygJv",
  "key33": "3PfpZRJXFrPqjChCBGYvFAWb6J5E7wgyMwFCEVmt92GKbBa9GRmmMCnSkcby4Sv1DxUVKSGJSbVkPnngFGzRrYuX",
  "key34": "ux3WUrBq7DWmftgY9XSukZmwFB4syNuB5TQyYmRR5vV3reryXbLnJbd7c9oKGJ7CxnRuGr891ipoPxhaBm9nNsZ",
  "key35": "5ndAWquxLxjxysyNiRZZnX1ByqH2SBtKLKfBoRSPbhm3XT24cDcFURU2ts2ta82A8abn9X3155bZeJPe26EobfjL",
  "key36": "4HKUQcp5unnVxKpKTZ7r4dJYcgYy8XhJnyxMEoNK2emjbNCn1ZKbyLQ3tMKUhPQx9txmz3LfZqK5Q5curMP4m9pp"
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
