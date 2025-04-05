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
    "3jUDjAN43gActXLbSRG58xevpzJrwjy461QwDqdzprvvqdRUGF3nmuFA57hn6vbKzBa2jwusMK99fyPp5WYxUMPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yT9qFg1Cd1FkwZMV5XPKe2oVRp72ibmMBPe3msuye8rdLXqUWgCnRof3SVsq5pHgdZyofDz9ovB6BMYoNqzUxCS",
  "key1": "2eGB9Pvec7SBa31cTekHvS3WTqKAAroKvF89VT2QnaR9WUSw6g6Ur66GfmD6mCXkgcprzd5u1QsFc3vhqfHhf9GE",
  "key2": "38bYtxXFfd3P9YV6x2EnZnZjZVcNqhQjLUDNdh1ozWYsrgKi6jQHQ9ahy5bBKRB12hAjnHJDBTGBvdeAtb6DeqsK",
  "key3": "2nCqTa9c6GU9vrKmwDgqCWKQcnRP8DrjqGhqy23hkdcSRw6PaZ3bfjGeUm75eVvTRoHaujHJTfQFZNKeJQ3W8zWf",
  "key4": "3GK9skFzsX9fHxT8btBVfDVYc43Dc62cFXeSSvp9iMrdJUV5zxhZ3sNPGenWCaDnRMoWdaRrJWFtew8eNkNWjBtb",
  "key5": "3ibsgnd9kj23BGoYfTx7itFW28qsHZkdYCMeDBSf4ChwUXJVu66LdotdNjNj3Zp8boB4ESjTUHMFX9mQ2xXGkrpa",
  "key6": "Qrw48GHakZoccBDb4eyd5uTGCTv1UtqZ2noM2nggxZQEZsZ3f7KTesWePHEz2qj7mZCi6yeNYn3Z8NGro6SuQNe",
  "key7": "4sFKCnkHP5YPQ2jDZfxdxuSuh6AY798ZYuga7baEa14VgFK4QiRyqTQE7sW4JRSvovgw4nEpTB7Ep6up4C3FUCHp",
  "key8": "bf7j6JCk2NoPdU4RVkpCnau81FeCz6Ye7c2AUxyKxBUEnrTcuVktnmN16kRmSrp2EiiQrVAsjZ63P5x9U18Q1iZ",
  "key9": "2mh8V9eERKU1QFcN8GzKM3ZXmobDrsCzXqBy8v9yevyLNJdsHEMmCyKcpb2gNKnptYx3LdMAqwKKDZkUUFEpUuMo",
  "key10": "3qtBdn3JAq72p4XtVUGMMn3pVmR6AzRz96XYvivYnws72rycJ5hASQqc53DBWiP7RQbWBNFELSYNc6aaQZ9QAytv",
  "key11": "2tZy6sFmLsAh8BFb7BWrynqSL7bwcitEmg8GHRNTcfQCqzfQ3Zbcq8LKY8753Aumpgf6cJsSbiedpwFGDNL4cf14",
  "key12": "2MjchmsgFMUYYPKk8vJumGVa3hZnDxiA9LBJ6gi95F368AT6CkeDqKh3MT9a2XWT8g9DC7sdb3NrGk71oVfsApEq",
  "key13": "W7Eu5aAyEwQCXtQBdFk6jNsywpkcvy1haaj5vtDK3nfrbLVDxbXR3Vi7z1JMoAGdpjFWV2zsTv4VJ1AeujrRGQe",
  "key14": "2NbEdPBdBTZQVJNS2B4g6UJvGDxjfzfwssjQzRzS3z5o7xagq7rPe49Si4yEy2W5kwd7GNAt73NVemDU7NTuiH2u",
  "key15": "4umSwPjQqmnbMtfbZsmyh5QkoWzUBwdxXU93U92bo5XYGeYk43VtWezttQtkr8euM8hdDhiPQH1LwCX1LcoDMvhs",
  "key16": "i8LQDD1PUdBWpHHpm5gGHvXkzf9q4Gc9ALpZYT9tbX8imVaDwXnpuE2C4TTeSUbxHkHePY2ZSgtgKbYoG9KNxph",
  "key17": "4BZEujaBGm7b9FsUaDa6ziCLSL2sKHcyuY7Rdcfy88hfcGDPEuAtoSmhEXZBYARZsVcSSm3kPAHrThuahx2hoPhL",
  "key18": "5qR7e53isezQjLsaRHQhEke2jQzxzydovseYThiskDywdYcizhMBdCWLakASUHYGETz4WPjWDWiNXg4Mu361K4fC",
  "key19": "3noTUW37wQCouBHGVKeBhu54FNttHkGeirCjW54ftfb3hzp6Lw3z74khDczpLit4C8J1DsLwMYZxLQT6UWwMDtdj",
  "key20": "5jk9vT8vJLx7rKdXmW7zHBd9QkG71AEPmGwA95LLVmZzqRyeVb4rsaCRCbXTwAA1qWDkmnkkQ2Z5FHwrSSrp9c2T",
  "key21": "FJXz2rGwAKbfSYSC9GtUqyzvtw5wdUspfekTBagH93mnBwCiHF9mwg52Kxjz6KUzDrQ4Y6svEp7yrCjiepZBd6B",
  "key22": "3dH4Mz4crraPPk7k96r44SyAePGtNkyiiKsWgjuHjJXLQtbHEL6jXHsxruYLeCWkwHhbU7nHrpM6RTUhuZvey5Eg",
  "key23": "4Wzsd1MRnXZRTwpB29nMXLp7yjnYc6GV9KfVf9bpWNWKv6aAEzg6mrDf1gMdnCdC1Kd7X6HgraZLnRZaiGqzqVLV",
  "key24": "4PNJhqBAZ9WfUj8s5MRqNJVRFWBUs5BCZ75SQ6ZdBhwWULH6RPnt7Cx8zw8CSKxsC9UBopm4aEeuLjLFe74TBwjf",
  "key25": "4iDMy7Puk5v3u74DHjFeUvByERcgFh7Qb8WknwxWnmzAmYNSSiBSCxbvRDvrhMPUSDwzBr9x8U7buMX72cx9XbLs",
  "key26": "5Ljk9EP3S4R8pgrFt1BsnfFw3FKVQa2nBfKRp1BzLmGy1eFMCyEYNke6R4CYV6UeiL9eKrAKD36wUTebDUU5P2mQ",
  "key27": "63z3xWpubw8BzDgnMddubRzq3Fqn72Hj4hcPpjbQzkEbRe4Ec3p8U1AGFdLfqqEG9Bovdj6rpV1QRRY25wsHynzu",
  "key28": "zGjui5Q8epwds2wBxsydyrE45eitcHP4epTvKEraPAM2T8kxRvJxQneFCbtp7rUXdSQ1AAwFQDQ2WbTXn7mpLv8",
  "key29": "4URrFkJeGhokAuQ1fs1F67Gv4iYEorzSU6TTgA8xPrxHm2KhT3WaUyGRobyWsimntLwGe9W92GhkvjZLt35QvHFT",
  "key30": "3adxYQ3YoGpdeBPKVcLaynyu5m78HTcu26hnUHkBf5m3xfRaRmoXUtAMCMeKUsMtKet98L7AadCWpsqEQskYEprk",
  "key31": "4QcQhzszMHwZHY9vWfk8LM3dY4kyNGfwdYR2yvp16u3qivBDyH9BkK3WtXf3SkTLcgKuBsvfogX2FFocgrMdYAbg",
  "key32": "T2VLNMhxN1v54rtErBdmncuEKmEbqepTtECZnWaDUFSYkEH1xdcadWKwiMscbSYPhYvkdJhpBddo2ANkY3EZLmQ",
  "key33": "aRXwXanwg7eaXmfqGcdEByPQu5Lks4Pbo8NCskKY7V4pne4CG7TMNQqWnWmQ3tuDhmuicveZWavEpzUZwx6Lk7k",
  "key34": "4t7UR3xAJr4mUBsowCj8LzAqm9cJA1CdPrgaAXN1k23takitAwG9iLVXTD7uyPiEC6M78LbwQKtnkY88cPSNuCyU",
  "key35": "3AQdsD8UwCd1HXJUZ7sLcUGKxzEvXZo5ZanmjRroPWZKQ9csCG9NoxpJCL9sRPgmEWxKZN4CBod8cY36sWb9EpJJ",
  "key36": "378iycyX39fsBKtq1y8bF2UXMRvphfxWZVC8TdnNg6QsSiAPP3t9368qpvCY6TcHwpkVGZL7RbGUQPr7uahTs4u4"
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
