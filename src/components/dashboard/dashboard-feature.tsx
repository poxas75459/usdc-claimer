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
    "2xoWFr4A4qztRitvDaser37vg1CHHNLEgTDRQQXYftBqgENb9pm7hCfsro38zC2uQeNX4fkNqfZyJJXwRt3MJZ17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29V4Y5Tc2vDK3rZLJaTsV9erTzGBCgeGQFDRa56s5BpDmYNRPhvVwR3zb8hJPnBVahdwDgep5VaxEnSrdYfYVdxB",
  "key1": "Hi7gsyYuooRCFuJatLwnpSnWkLamZj1VM91PUfhtu7qvKHHYKWkyPqYQYcozmmgVrR9K2sMz9DjsuThDFToQWQz",
  "key2": "fMsTnZTXZ5AUPDNVsH12nGCZ3cMecVcXqFaE6xaBRP7QtToGLw7n8CXG48oSv61g93Q944hohj8iTNyvWtPwYot",
  "key3": "48Wu4raDXtwYXF8vpRmYXHqo5Y7zGLfy8GBMU8yVMWhLuDD9xSvB3ofNjVGgmcU5oJmKCmjfhQTXHnqFqSHdiktb",
  "key4": "3JxYNhXwYEE1fJY1YBndCmx7P7eqzzu6FkLvTNJgDfsjXXFqEDL58RtJc3Y9nqYd2GUgVrLKauqkP5xnn9NF3YDj",
  "key5": "3ZD3gpq6nJ9dpnUkkyVqaDVny425JvabwXqonWGTJ4HsHYy1vH5djoHPouYHiPTYwm9QmTmVaeHcY3cjobX9iGvF",
  "key6": "5KUfjx5g3wYLwbcBzeNe1p31JXU4vFPCi2KbxYeN59pChS2oWwn472RbeLJXy4pqq2k5awTECquy7vi62bqNYnVW",
  "key7": "2a8yBFikLZRfsEqGaXA9Z2EP97uuVFQzTRtoaKxqiM85zoXjDjaGC1p39PWxWAfG8gRyzPXzyThhFH8yvzPfbzJA",
  "key8": "3ZPpQW5K6QpnEKWSZqDdNixa8Fj7oguMxbfTqqUh3fASaxJqQdwoKqcsdLZo3CE3NLSkitQzr1tFptE1sUeVSAA7",
  "key9": "63msSZ393H19dc7iqmeRmGJ1e5r9ZEz8EeU1Y1VrzauT5L69ALZgpfSZ6EjDfr4Bhq57wbgenPhfwpEtS7nK6Zif",
  "key10": "3Dcitecj6GksDiJxhWv6tuQiUYQj8LjB54PFdBPA985kVi8uemjvdtbcEaqZM3wLxokYrTP5vLrmJAATbszFq1g5",
  "key11": "2PvHRek9YExp82SnAbwdNTLfC9CU1rnS7JmBJGigUXXLPMx3haJUW8LThbyiZQo4sE7SA8KAGQeqA9AzJgnXswK4",
  "key12": "4bTpkY89N3YtGkMCR9DkvdDmePubUuX9JVYvGgD71p2wbCETNdq1ztRR9fPy2nN9mA1Rwpn58RQ7zDFB1EWEJwmC",
  "key13": "bJnZbnkxu6PrNALz67hgbVxkAgMpFCxfoUGjg76EbzQnf8xs4ieVspRSruc41HdERgKbUUBfkQYRS5Xi3YS8K1N",
  "key14": "3uuL3HV8FiAvVEFehzYGxeZviEfaLaqpzcsthtMmNubub7c4CYq49GdXKcXkb8eG9XFMDgXF1tMCBgDGbPgr6NyK",
  "key15": "oBF2k2pmHUtwtX9QhEZYT8mhG6RFM7en8YXcHVVwfyTHo416p9tk9xxa2YzpjH3cenPJ6gE8LDiHkYtzo7GhYY1",
  "key16": "LoBdCSTsu9XeuudxrZ9194CkPc5Uk2hGvwsAdLHrq1epkeXsXfF51iqjRR67yZdwozi8NJvZnVdbhBoukMjqnBq",
  "key17": "UwkzXVdyr71Yyss9hkgeJdZiZa3L9YuzSHaBK79JMgigAXAYDDJa5BjnFbnmWdkjt73qLYNkieEYRfrxBA6pFU6",
  "key18": "5tXvnbFJ2uvUHJB8KLAXyXD3fwWcVzU6oAaCGS4UVaJ43qNJa7iZHcEKNNcgVLrE7eiLvVrCnQfYV8T5TzBjjUw9",
  "key19": "2giAWPCHVVchJWpQ76r8rytmXgTCaEw7z9QvHWBjvVcaVdVFAkKRDGtRLr1wytpKhEREjk2QKeixzJct9cQ7kKnb",
  "key20": "2xrB4XY8Mki5hB1VKgBqcECFqmowHrQ4781MdxVAd8rKH3sgn897RRe7YjTwn3XZVmf8TaLqXZP2iKi2Tu59KKwr",
  "key21": "3m8dDsf4dEfg1T1TWnop2zQXPB2wsfWRAQhEc5o6553jmwVgxj6mwp5Xv5GnYBsNPM9wNU7cBqEBZq9YUbNRTj5b",
  "key22": "4QdLVsmp78V9CsY6bukafVTA1PVmuVYCZDp1Be2VFYtgUGfysXCecStXwGCF82SJ1YWrHKKt4JRdo4LxSSxLgfhn",
  "key23": "4UZtMPxMYGtEamoAP4qfdDv3LszbCSWjAdcTYAtohr9tBQAz5GwAKW7FFkdzYrNB8ztgpK8zjTqH5PNYAi2GeNMN",
  "key24": "3w2ToxKtDmRgiCUYBHQfNDHy9TRYus3kyBFMBEYPD1xo98CQreBj6amSFCM1RE7c53MkTkYXok8MCFDDsyri5p1H",
  "key25": "21QDiqi21Pmv4se8cNNtn2PzbhyWkzMYGMGkxvSgA7Ef1wiGhpZGnwQpmri4jUYn61HN6VSWDgUTw2fBBZWXqK2z",
  "key26": "2SGFk23sKKriXNCwAajCuTpXiqG7TZGAwpcEiN6jsvVWAGys6ysoJpGTx4BLED3nJcD9srFsr9hrKAcAXU9LZJBG",
  "key27": "4bPXiY712yqtpUUVsUqXZUDmspitJcEBb1Y8CMeBV8rzzdSfgoXM6kP9EaHK7vWhQj9STqbNRiJppWYd5Vs19Wrr",
  "key28": "5mpgug9biSbmYJRpzaA8jKkLLL6wNHBEBhi7dhQGpn5TzFTENSH7G4vXgffRk5xui7MCuL2DYHWSFbuaDgY6mXXv",
  "key29": "5zvNXj7ZP8Bcnyp4wuxQpLBpbaa7UDthWg49yoVwt2wtWy5Lg9TqwRo31apz6JhBqfMkS74fWMUfXUpBLJuRLK6N",
  "key30": "41UwEqxMF66zc6oT17AGmPxciumM6Lum9Ba2LYPYcZw1E6MaQSSN9eMSaF2pPqXAcJzjf1PLAL3KzjvDS8CQxnAi",
  "key31": "EnuhpFn6iKhJWSKVuRznKEmDg9mQaTmJa5AHHEo6JUncMkAUnJ5nLEt6X4sgp3KtXckLWQ4JNX5ypiDZHDJAkL2",
  "key32": "3sRN7yq6bg5T3x4jEL4fiKpWfrDq19kuWpQrAuB1gSG8H3boQQWtRuHjaN9AKbChMdUwMRfNZix2Coy1i152NWr4",
  "key33": "3H4fbUAkR5YhgmrL8Um5qdyswaKscQW3pjaJDFmmyaCpiqjA32ddmYFdKGNMZkJqXuMDXzj77JX3uS5zJJCz8fYH",
  "key34": "4ipeYJV35B9g3p2EywgbicryxHghTW8YzEDNi4a1MzpTDtNqfWp5tjrz8G18bPb412JSdUxYnK2QHBxN4Jy2ND7z",
  "key35": "53ZMwCQWw5E7jPCmeziUd6HvngSXqVHDmsMHEVb8rvEMy83RvPb3AGiHf5HGQFHu7f7zP2x4vc9tTk2BDh7ji9bk",
  "key36": "3yu1eaVdCFnakMh5t5vSswf1QkD58i24VWrHR4iBV8yfqMPkC6RAdUju3EUrUqP1gZ85QYh3Sigpvqu9oBJVju4",
  "key37": "KCksDNQ5W8abgZDCFoV66yk6DFBTPuv7PEsWnUTj3P1EhdrDL2eb9QM5FVUdPxz8Zanq4dzNwX71FT63HZd7kAu",
  "key38": "5VG9kTmxW1GxCqJRWm6v1ZV3NV2y3L92YghgT8Psy7MnA1YKW1Gs8h6m18kertfNuHeJAdbva2V2yuYzc5LKxJ6T",
  "key39": "56G3gre4VvEsnj2xioLsi4MxqEmp5gn4KFCpZSPSrK6uD6kNcnBcENPPnDSuf3JdbN9YHkdqndKAUhfbwHQm1AUX",
  "key40": "5PbLtBM16ee1TVXZsicjqwWxrA4qQ9eD8rFoAgDq7yNJ5mw6kgSE6qotqrv3XiCBKELvHDsqeoj7LEFgMWbAy8wo",
  "key41": "53dLk6i3WQZxWEHoc6xh4oXcBAQKy2T37hPzdqG9UHfeRWXs7Fp4eW1DFwFM1xcVC6qNfGoTMyErfpzqR6LggfBs",
  "key42": "8n1vrCuweRvwKk19C2mxi8FsyuebdUZGsAUQPe68pY9tJdFePpfJzccPTDN9znQUaSNGAGUdwFRVsE9PRCedGrC",
  "key43": "3iBXa1eRj84utwZuGJKxN2nF1751NcuPrdThP3Xc1CqQqSvHFhrxzGgM1idQ3hjyzX5XBLRHeHaGtMeKKGZMuYsc",
  "key44": "31x9QqHppCDN8XAmSkrnw52hVdGR2DfaE7eM59MzWN6vPyfEB9oS2CkQpzKmzzFmzGZCdy6kQGA91V5pDjiTGLT7",
  "key45": "5gkUn1BwVy3yRZiVVDfnjyAbNZmix2LZ1BVuabMccp1GqnXqX46XMzNJLFzDzeYuZVypM8TSFASWQKVPVaLTjMVJ",
  "key46": "3211y5jGtBG89BAovT6MCHMHAV7aXNdFUANFRh72rK1JUGGRunKRgJHwCDCX9CaBrG2fBCA9JEqJR37hTBvEWAMM",
  "key47": "28J7RDZysed7DXQhysUX5g68eL6tpjv1BGRWLLz7Fz9iyfpFcCJrxGoCj3FfVtk7DWbN5DNGaeSbMRG1NgpnK9h6",
  "key48": "3JMxboWUQZCpMvjLaG2pqGtaaxTNmq4aURTZ4bMRDn14HmsjYo9u7UmShvkicYLXXTZySt2vcTAmzHferwcPfvgv"
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
