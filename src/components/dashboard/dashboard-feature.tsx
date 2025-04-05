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
    "3ggpSGSWVy81ZxgMh4KRkSaysVvLGvJfv6rWP3K6vTqYoSkNs8dzYKSBgoDU2XtieBmckTMhhVmtGCcFDeZ7SS6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfJL7gCdbuPozpSrYxJmUqPmuNzhyiJSQLTaywoD3jqx2NSTaMn8xrM6vDQ43RF2yvCqDK7ppsTg594cD3f6Wmc",
  "key1": "64ojPz7AY9H2GMKHh3ysjHDpKR1kWQABRZen1WfQJyvYxxB39uhno9MRkV7jBNVwweaxomwULaNXKhVe34CYyxPV",
  "key2": "5bC8US8UHpmNoR5JJVBUoPXQ9xaGxkTD2vJsqcZrzYFKRs7Sa7ETGzapNWKGBo6evTmNaFuAAzwZUWp9FCVQLbvG",
  "key3": "4Hg6PEw8xeDHZRTu7CqcsnwJ8SghU2iteXAMuakUSGSZxjTQnELRxjjeaf6zwMTAWhmKgMMFQLPYmjU5o5Fns7pb",
  "key4": "26aM58muKXJeL65iq7GQPnzjh4cXbb2gosgPUK5YmwiAU6t5JdZ2VmWsYdSb9CV42tzXBRwHD8XTU2VashqMAkns",
  "key5": "57BFUFCK7XdZzMcV6WobDHxzUFy6xgf4vfsYkziJGb1Bgb74UG1aB95eCtDiHqUbkGMfmahHDhfQhxZYuuaqmYuC",
  "key6": "4z6BfdcDtn9WuhsgMCKLzXrtMgPmBc3FwDXqTugv9N6FvQTAywL78SR4A3PQ3wqX2iwL21X65wJg5Qyo8wkS9re1",
  "key7": "xa2kL5HQ4rQLGx2rHrhfM9RyJYH8xqKSGVEwgYx9itLmoFWC6tnxtgh7LNNGwWdb8xAPk2p5Cycn3dRZq6ZdRC3",
  "key8": "3YMm3FszEkcU2BNZLmwXC1TyQ3eTmewPKct1fmkNkeEkhwovXkiwwZDRhuMDRHfLWwAQgTmcg4ceTikBziWmqELV",
  "key9": "4FygvnCiv376mwwYmKuKpDj2NXaeEWzGA61nACp4DoqLcaqja2XAfEorMZkruP9XYe3utUKBqMiVgJ7LTfbd7FN",
  "key10": "cXPgozprBREQLNYYJUDuKXAx3fTMNxkVomYPMST9r6PkzW4Vo8wpsmCLEd654yNYhgeS3BJjU6Rm8TVqhFuSVAK",
  "key11": "4GEX1arU14WmPntyFmCQHQiuZ4RLHujKjpC2N9WiWejEpBBSvfFSw9kZWHRWVZJ7MLhkTcdQLYnTetGrJA6T5LKZ",
  "key12": "5ntY2efS6FUFGEzfKZje16ihQjQMd2GvKCtXkwA3zTVLGGeD2k6wpmQAnDKcncCoKXonCrriQVrKzmw3yhX3bnEQ",
  "key13": "5wcm6cAk85QHJw6Y6rNTKGbPYRqxgSETsY6BDK4XCSvLGbVPnBiUfH1wmMuyGL6ht5yVd9eWb8y5nGWPMEatrvv1",
  "key14": "3asFSsWowyL21fuLAsftzrsLDjVrxaJU7YE18UwgrHfu1fwkCYTAa5Jy8FR6q4F74Pq269ZUkusV2DWfJpQbJZ67",
  "key15": "3whsfacE54ZTBeZ6xddnYPoAJUg48CuzJ8HySkMmgoajAWdmdtampmuxzypu6V9q7WRTfokNshvDiQvWp2x4Hvrj",
  "key16": "46LUE6QziHRvtFDkktU8eV6vYvaEqjRTVd4MVXFXgJVMnX4YdpLiBRzMx6c5CHDe1GftKnQYMDN6tcXEJ6QKoc76",
  "key17": "31kXR1AnvsHjA8EaiSaLbAQbrrQjVBpfjKNy1P8aYFYagH3BzXC2gWnGUMqaQ54HTWRSPNDAPqgfNLmChQhLG9BZ",
  "key18": "4YCz2Dukc3ns8RZoREPjF8SVhjWELKaxXwdK1XK7jwaKZT58MM3tj3G2dY2xj4YUSz6XfJuBWPtbUekAJp64SWuU",
  "key19": "3GqK3nZ7phs7VhLKcKopngaJ43vERZRSwGujfMmvjZpfL3RBsfSpGCvVG1raV9EhgFs8SZ2Upp5vVmGC3jsuKMDG",
  "key20": "3CPaYWohhYfnYtrQri1fQdeb6TRRJzGW5bgGKds1976om3CkuiUNT2tm24ng4JXmgaJUikd2hqm8iXKbKTtbh5dL",
  "key21": "75sTBPAmk3uPeSE9cH6MeHEdhago8jyCRG8w9sscjKpZcSEhdq2vpMeTt6PC413kaurkP66iLbD1qEG3DSkxf1M",
  "key22": "64ijhuvBUGyA3wfKmTbffJuyHcdiMJpuZftinwBrnoiUph4ovkeiKo7TbakaiYPC2cySof92VqGngGhRXn9B2z4r",
  "key23": "5eK3PApFBehfR1mMicEwU9ihQbAYdCLemfedKhgXZ3Khx33Hd3tFnR9XXVUyCPNGEFTPuzywC2wBAGRxLCcx1GtN",
  "key24": "3S55SNsSSCmRHT3Rvzh55ej3WNGiVFfxLoHa6fgE52X3CXSW4PV87aJRa2AZF4rEb2KS8MGuKGfK9rmKrXBUYdC9",
  "key25": "5ukogHJ2CVswi4nv7aH644cbJz6CrWeTDN4o13iCHfeyixXvMhhhk2pBc6rZneEKQSYL5Eu2jp18cUraVAjbUwVr",
  "key26": "SGKbrEyhDLN8CWNCzEjgdsArrTCbuyPN5ukYT4VH7QsHAxVkgCs9s7UAtYB6Hm83XTHGcuYYTXKKNUQQvXRLHSX",
  "key27": "5zormHEpWiNb3qkeeRTzL4hfdFZG3vSKgcNHaHt6DN2oysWPoX4VKR3c1ajDXHrqeZ41AuzSbcQ3nKNRLmA183Wo",
  "key28": "3UmhAv9eAkG1QW4Tqod9K2KzyMvRtp8xoqfJRLPuSVBYNjupqSpwjLXmeoGnPQTJq5rFj5t1ekqWwK7DV6hXu712",
  "key29": "BG89NoGsp2apUaTJ3LnstsD4S3CKh12PxD7buv2bQRWcf26aiQRNW5fA8HBVM8zGxzfHZvHrfFx2JnFcd8ch2nz",
  "key30": "2cP9ayHdjFnQ8CeiqWK3sJUHXvjiQ6a3DtE7Ewij7UajhNnYnJo2cjBJR6Cyg7hXzXGry1CKBZ37wgVify1k1onK",
  "key31": "2fTh7GGg5AeNg1pGKBqhTjRbNjoHttFX3ecpagRsFyhn5Yqvfa5SahqLbcAkLUtwYe91WTHUmnQq7tYxmhjfRxBy",
  "key32": "YSy661ZUpfz87Nx8dg3Fv2oQAk9rHsg2xX1rqY5ydHbivRUAHt3oDd1QTZua3NesdyfMHwHx3hZ5t6fHWaTp1No",
  "key33": "4s4Cp4QTEHU8MhrPTzox3GjNj1vW5X6Fa6JTALnJoHxeJvRShXc7GXdrUS4kLxmfQ3Th2Jckvn2Qbb4HdTTZZAQX",
  "key34": "4hRr2ZJtLybMhSs9CJQKvnPtLn4gdBUBumCCkLdAp2mTS2bhmtEtFtAokRhCiFuv9qS7zHvFji6BhDaMwnYumUrr",
  "key35": "NQa6cEdMgDXFMN2uTZic2E9eyA8uoK26G8BHtvCrBZiLVsxGP5tdJeA6WtLbT2nKMFSzUpesA8H46SspJDFXfYd",
  "key36": "515mNufmRFvZtbSF4bQteb149NeF1Y3QhL3PnTxBgXoX2NwVreqxoW9Qc4mrq92rJZh82gmWcporb8727GXvSUr2",
  "key37": "3tjiVPktJGhASQDWy1k9sqPumqKdQjXoBAmXvqbZnbAbVQi6iWx8k7CffUWvDEYVg2JTQzSBgCKijDMh1S97HugW",
  "key38": "5XeUWrinqeZdWUkt2uZdVAKAQPRMFcVvJbLRegVanidvHTSxzgoKfkSxWUK6y8GfBRPsneFzGZGnoa7zmm2R8n8x",
  "key39": "3jsQt5wEWGnx1uB3pvNTZVggPFgXecLP2Kci3mPCAzXoR7uMNMkyBrwtLH2sroM5vpY7EuPeqFcqmBJpBYMvnYHM",
  "key40": "5ngt8YmT6P668LF2fZ9S1YUW1kJFX7v37x4Sb9ynHVaik9iQFhJUfYptn6tdHvAwu5hqzm8TtqD4EqaevMff6eC"
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
