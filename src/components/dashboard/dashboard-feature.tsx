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
    "2PnQ7aXjrLjPV1HnWQxntQCGWKBbVE3PY1fAbtnpqUVBQBo4tRm5PcE2BMaT5qDziVBYpT8xCXM719U5261twziP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "128z5BZYKNB5WbiqbuFUPNk9NzzJE2wuRmTQjkDhDqXHuASJa9RmZMXv2THVT6ZXo1Z75sYmk4dV4LqU1L7TZQ8i",
  "key1": "27Mf7rnLUvgWPXNqg67w7cGYqNATKGJSRDos5ViFnBeNXDp5D5aKYnTYVUbBt2bjYzLW6Dw1V6pf42riTmTzagvN",
  "key2": "558STAa5phV51aYUDhFf2tDF3JksqinhtrBSFCtrghd9Dab4bmjWJhWGyqPPPzyBcRNwVfRiifuBmfvZHmqBC3YC",
  "key3": "2xx3zd5cCebL3M3ybT5yTKWEW69KBizwrdQcFnHPB5aaAt1whDYR7cEaeKiYprkaUQ7Pt5qvZ1LPTgZrUnRjR8fw",
  "key4": "2McLWtb7KHQUYQxsHpjPWABuQ1TSPuyHJdKwaxpfJZwDkcohbbUwEpniuipoEeHW7Feqp7rSeSLb5SVhXdHti38a",
  "key5": "4wDgUDMSAGHi7ULW2cMKhzuwwgPATXeobAiVEyNmRGfQiSpo7h9vzLCDsPQgnsq96htrfoVAVUVKnJfu2LWwjcAN",
  "key6": "jRCuFaV6AZYhgqBSpVnPGpeM2w8gJyf8VQsb3o1pvhKuYSbSrAXPAgUGc5GDAmejBsYWuuGC6XTBdaQJ9G9HRCB",
  "key7": "5sPz36KQY3a4sjaJ4hy5RAvGcB57L8Df7cxAnUZzatFHMVjt4SwnY6uwE8TuZQjzRXLnGNQUKsHVXcJwkUgRqucu",
  "key8": "59BJo779BLczjiHrmsW4LJu9ps33NbGGxbkkKW2ACxXywrRrtftshiMKjdh4DnNnLKbYm3c3HfmZHovyiWuhi898",
  "key9": "v1evxkeoJv6Ds2bUTxdgQMU4T3aGpP6yszZspUh7ka2fPnkhBBBDrUHL73rZTFsWDSZGeccd7Ni3zWYvFFv1Cok",
  "key10": "4LTaiJvZfdSgnjdoisfZRwWoWpvtFHMH2eBhUK27J46RRoifXXicMqowu3gFcHmje627VagcJWdHrD2kiiTBBiJL",
  "key11": "3RhM92VdnLbZpjeQVQo1hBZ1twaXr9xjgAsKFCNs69gs8qqEtYL4RiVXD3pJMsEYKM6XNVAoaEvDXDLtp3QidNyh",
  "key12": "9ty53nHnWjx4TKA66xqUmTRykqspFCrwQLRWzKTiByvVp5b9frnxXcTdbZnxgNKmGVy9oJKsTkBd8bCCmeuXY8B",
  "key13": "5rn3f2TNHkuMteqzBsJko7u4D89QcAVyNRy7Rp7KkAYYCak1ZUu7use53tCtxNoinyV8JNyjaKy9goMUgxQGjMug",
  "key14": "3ch9nk13mU6Hix375TdYehny2Ujq9dsUAsK5B6itUmDGzCPH7PynguaJD3o2knWDDx7vTER9Df9CacdoguF4BNZS",
  "key15": "2uD19G4Q8Z1J1sTZkLWvepVRfJFcmiDRN618wyN5Zkn5nsCaZuMJPv2FScbPsv1WHrtuF9DPAv2tSFPgbKF3ymnN",
  "key16": "2anuCEzPzESTU1hcjocs5PCALdsZTFr6RB8UeF6vVa1KPqYWexnfNrj8LEtM2GwnnVNEWGBg7Ch78MFJwMbWNY1w",
  "key17": "2yt8geupXGNb2MqCeReq4VELQn9iN9Uh18afnbfgk21qP3wkf2hTBf2cT37PjnimAvzyKtFLCCi2NVZqGKChGNG",
  "key18": "5ewPpEBcXVGtWeiBU8hwK6YATb4sJoDfUQuj5AGqkqVg4Uy6w3UXofPR3Q3JG2o7BgT4oE9zpqnq67bwP7VAtBFv",
  "key19": "4AABUYZe1RXVkMRe4qra2EL1tfrqVXgq4562JsfuLbDoKcCsAVSdNm3xK62xxj7ud4bhCfPXQkvLo3FCeYxDfFyR",
  "key20": "48qi2stVzqPZH3ARcPzLHBkqrkCE5Lyaj2Jkwb65bsiKLVpPLDJ9SrBcqezb2Yk3xoA6EWh9igbtwaa3P1rwTqwC",
  "key21": "5QPqhJRuYzMSi4sB4CT9ACqxQDprMGapirBkjaSXRkaLP4VBtC3QkJagddJg87Nx4jGVJJfvBQpPoiGtRq57bBxb",
  "key22": "5JdCKPxEu5oU71TJyZY9nbaJse9GUN1BkPpA7PQYjkyPVnpfxNzbq9jAqKTtC5uesdgmC8AxWTbgK31Mmw26gt6D",
  "key23": "BXhb48BzeWTZtdomEcLBDPjk8aEAG6wiaYc5kS1MWsXQrVRQDsVmp7zLGCSyNroAJG4TYSpzzRMtYwY6zG8hbxn",
  "key24": "5bSckM8evK3GDNJoeARtyYDRi1Es2uqyHJmpgEN61qwnzqVYcMNvGZs2qh3DL2L9cPKKDNZwb3vQ8EW8ehLpPb5P",
  "key25": "5e7LbnduysvfBGn2S4swChPjm9X59gmGdRwHqyTJeL1i52SW31ydadhKU3grND8hQ76kPvFwMGkXekyst2RsVx66",
  "key26": "4sT4KNgn5HJpuYC9pzFB9fmLAHzskYdQKVGzXDR1XDfPxAmbngc1Go9VNhc3BFPacgA72AkQDCzvEqDHjGisGg5P",
  "key27": "2jdYYg9p2y8xYzSAHEph6SSh9TkaG94zghG8P7AiSovWMXyRqBA1t2gcmsbPE54i6jLz7btSB49qdxB1Wec5Fxf1",
  "key28": "rt7VvxjW23ntybnEnPvNNqqt9qtWQre6A4rh5Ltjgr2aKBtdBXtf8wj8ZsMTq17G6ijXTDYW7GuVdjY2bsnrZgC",
  "key29": "4SDsbXFmohudamjCT6kHWU3o6iY2TqDdgU3iXfNBMVsjeR2FXVcMNVd5zo6jMKqvj2HrT1iup35k6ePgKKwB4Bsr",
  "key30": "3GFFZE4vznRZscziWyxRd9amAmZfkyZ5auxVK8TJbi8iETki84NsRBEzNDpuVnuiytz6ZkhbVEBrkQ59nArCKqUE",
  "key31": "5ZChwmZiHKarwTEAppm3zbMni3yXehjbBTVx1GPCWoeaPKkBvYhF8pWDdcaninJXnAR75GHd8D66rzaXSXAnQspD",
  "key32": "eKvm4MXW6nNG5e6Z8DdwnVK2zivV43NTNNW61U4QdSjXKm3GYAMb2hw8hwczPBJ5MRBg4jTrVp3r5rx4Busr5gm",
  "key33": "33CYdwhqpjDSYrGZtYpZykSdtzqZgGdhQ9BxAXygBoSqu5hP3fLnteT6NogS4xajAvHnibHM9AeV7zLzroAJd3jb",
  "key34": "2mi2CrJudpxmC7uEwbqyT4Nx4f3i4gq7DWCyz6X89Dehfiiz1t6vDineHNwkJ3eVsJZkzMWTb72oYAFHDTkpMxNv",
  "key35": "4q4Bfc9xgxFtTeA9rDffngFGy6c9nvKCYM6tK4SXvL5835fw8kwZi38pNa2sS5zBVbC92LxDANoKuUm6QJtePV6B",
  "key36": "2X69JjS7PNyTRo6RAnLDgWGCZc7GmKQN7fTkQowhsuVGshx7Kd8xcgVoFmetrnu9VpBsaKemQ37eRJXJzWGGv4Vk",
  "key37": "2Ehn87vnz9WBz7VfZXg2UtQ7QCM9mgpSEvdvgo23xtasSXGyv4sQDBtxTREyNJ518s4h4U6ShJ3JtcJ4S8coyvbe",
  "key38": "3BVFmzzkSf3NyigUgi6iwC5DuCToPoYPj4mGub75eAdhM81wccXTx6Tm4g172c5XCA6aczXFRnfB3FopFcZKctcV",
  "key39": "33e5NzdnbUS5WhptqvQxpgKhgc1w7vjoQm6eSscHmvF5384QYbYF1X32vP2kqf7vh6qRmV6uhspGcvBjBasM81D7"
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
