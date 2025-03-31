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
    "3YfssvA3YjiesFYNtjDvbu6TTs3Hb8b1KYGYczpKTyaBGynP8mk7RrrJkBoau2gEJwhXkTT4Y5u9swW2STuhhuRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oD4FbymjsiMEQCYE1i1LPkiEGnDRRP6mHjpuvc5dXGh5RcmDQK4mseMwXHnEAX1Bk3ewdMiSQuthY5ssFJuvq44",
  "key1": "27izEqxZwAWzBv9smqTKA53oLZA5WbDfmhLZyMWJAuQed8Z7prveToX1BSrUuSHrUh85jHkYdoqEoY4yBHyJtcDp",
  "key2": "4JQndiNAxYKnXngjifxKfdAUby6FxJ18dJc84J49TZKKKA1DwgXmJAiUgfqKuwSRzVGbgvZouRNYrZGXKm8ps7fs",
  "key3": "4GWhjCwTPWcyPP3m3K2yyY9en2Gn8zaxBeJ8M2Vfp947sxV7ZTr7YjRT83qXfLhL8umcJ2UoXn58Z5bedbQhr6Qw",
  "key4": "3wp21end2w2SxquH8gmXkntTydeuGan5sUjCmXPMGejH1zLJK3aXt5z7YKfZcsN2g9v4WuQyrU9FpZCsjJoaH353",
  "key5": "4h78c956RzmM8PWGbxGMRyQbx8zBP3Roewst3Y5HcUvJrJDBRCY3geEu5nUcxPVsF7JmiyNpFvefMExKwhUwst76",
  "key6": "2ZZynHJJPR1du4EHEzbzRTfZSUUqe42KCtvZccBDWLmYuw5bpHQGuYd7TshPcgQmLqpfjEN8cEh63VutytddZmFL",
  "key7": "4fAwGj23ooP1MABuNQzH3rhtjddsKbFnkUGkEw7RPHWjpstN9r2NNmfqAo5r4YHDEbxuhDwRth5tD1sFg4uTeepH",
  "key8": "eFbBe8BHcy7gjXzk6Aq3Wvq9G2LJM2hckBHSR9QWmwZD3SSajRJ84RcXXcwAKQrKjNyS2hVUpAdcoy9V6bBYpRj",
  "key9": "433qGZhe28Hhx25kHPE7BLWB34tfFUBD44nzf7mn7d6HfkXsmPcPjT9E5oaWo8GWXuhbAkoMSz5zANH2FuGu8i9d",
  "key10": "5yv4o7TGT8GXbaFqoLdf4n6xq4ijhWj7dNh7pueVbxn2DXkWtSNBH1gt6KV2FnSKTLjmS5TmjysJ8E2coVCGCn91",
  "key11": "5UDm6EmFLXv7hP3YftrnYpZYVr37VDvktTp7kzeCWxXRBcxXSEoYkGMvHpbiNPZXMMew3A96TWd4bZ7oqrgzK7gs",
  "key12": "v4ny9vhtqbbvs9yW4VnZ7qaKgAovVuHCcYn6J2m71rs7Y9k9K1kj8hqCnjUK4tdNeTtvqmksJCyShfHV6XGuxQJ",
  "key13": "3ZfHYv1VUUXNxpP9362tEzWiRu9bkVay1VejRcs582yuiLGEK3RPyf9wYndnUaifETVqFLe36rWz1VUGt7CqG9qY",
  "key14": "2PFJFCC3JgAotqESvnR4XTPnzUA5wbUhRxjzKcyryGri5Kzpr43LUMeAooQ1tAintEwR2e5T5QCZV3tbgXbUQi1S",
  "key15": "66FNJfj2mzDTFbviueHPSfWrHNqYUeChncYEyX6U6tFfmUoLYUiSdq5iNToJAyphAS2KqVoaFXQWtdjVetyicibq",
  "key16": "4XuhiTYKvgq9uurTZstdZ7nAoUToBk4Hd32cKVQHZ4JUkL9RvuN25pTFZi18ReBXCuf6Cku1QPRTUvtckHf8KrNe",
  "key17": "5axrENW9cddK4BdTCSA5bvRC2u4zcYNKsa9JH3osJkstiQEhT3pEyk5RWmhhQe1dZqR5VVwV43etajoS3qT1ixPm",
  "key18": "3mzdgEu4jH4k1FLc3UjuPkWU5a3gYDP15cptaq6zXgnTQeGdD6SKcNUcc6oK7m2U6nky7eKjWeSp6XxSbhjxsi7H",
  "key19": "7xsgq2wQWzPHS4DvZ6rsBTGcDod6hmbDPCdrYvrGTS9v8toN5m8VDQmQMMKJWYtNQXVwwpG6N3uRR3TNDKZTcUg",
  "key20": "3PwMBvN6HT5kwcvZCgD3KfB2mDUQD3ca5DcsvTPjuA96cqHaV51ZN5piKn4NpdRL6SUy7xnfzrnQmDmiQgCtvote",
  "key21": "3wDNRd3ZegsoLdMdma3PT87yMV8kPvCAG686Qyycj6nG9tkbV4e49E8G6NUGiXght1KfKLHij6Bhrtp8LGxf4feY",
  "key22": "591apEpT71vE9y9XfXN2Ch2kpofPv8nQgHELx1H5GNAbx2wiSTqshdn7M1uEjQmSHKKi3J8FKyfBM3RBpxVmLzyj",
  "key23": "vmz4RupnLe37CExwTcC8TEmjrnZ81MJnEJf8HXiqTy1HBenHeYrBcf4iaG2KXjVQGvxLXVQYxXZMqVzuFfDY3xj",
  "key24": "3oxHXRXrd14VRHHcuLz1RuZjqsStAhtLHyAsfE4Mk1i8qzfi1J4yJ1uZqvB8AgJc4pV5UNSpcZUX876jRrYzDMqF",
  "key25": "4rGjrt2hELX5NEAnMJsRy8Fw4kd2DVU1biLbvz89iGvEsLhzNjDSkUNgLXnt1sUVmRBABSjjybp7AcGazs8nbzTv",
  "key26": "v5TNNAH1ydKRpY34DCKcLUGPT7Qz9Mw9VMmWC3ctV7WgnmZPYm2NL1jsrkbYf3a8oJb9n2Yo5E8j4He5q2XDEaU",
  "key27": "323xYvrXhAWGpzNuGa7MszXCAfLg2f5Xh1SRKfQT8W6ATGJFmrAV8nN3W9YSUvThTM1hYiwddExwpKYW6xiNwUdv",
  "key28": "2Bq9iNRnspwSozfE9akqouoKteEVpmUhUXVrCZTWRYW9moiD1vSTNuWkDw2wbssqLYFFJ8ezA3k8cPmCTTGqBwig",
  "key29": "D6jhxdoYMXn5xKSyzHyqLQiD6EWGzqhBpBysXPgcnogGPWaYhTJeTGeCweZovaVi6YYMmEYBXx8HSR2jDbiPf5m",
  "key30": "2pTCnxQSey242PVJhLxfASRsmGnvr9wymG5tAFSt1ARraUQSpmQj7GKk3GeWfKBLiaUoBPKiySbfzvddQFXCoBa4",
  "key31": "64bCn7ZYRSKkaVhaYCyHzBvMaZwaVqmyBnjcmPAAeYXeiGXL4Y4tZNEnBDmYd2HL6eKHqmcFs4oWmHViZBs12Axo",
  "key32": "3XhBv7K8vWGbgNMJ28Ab22aoSYewpjBTG373sVEMVDrC6oRjBEXFGdQwqJ5bhSryrkMTSwhz92Bv1CyPLQCTVgSU",
  "key33": "43hsJRmWBHDXSwF8Z7wioZehT83sDXYomkMyyTVTPNbxon34zkWGNnSKmZGpfNs8GwgQ8Wt1MUmsRWxjhgC4dXE6",
  "key34": "3bibLw67VQdqttmw7YaWFwTiBofvH6fKd4DU8rPUx4GbTAnzAVeHTWE79x6XVxB2S7ZL9BgLCx1eAFaRLnd52E7Q",
  "key35": "2g2mzJ6a7JqyxWY3rCjrt5ykwhk6yHwZc9KcwRVNmoA64muJEt7toybjxnKKjjBFr5VSa5ikUrfgrcyyCBeyQnoT",
  "key36": "616bEHX33yToQ5gN9MJbJTcNv5s1yCVXjtP9SJnrxnHDiN8LXRy8TumtXVqizuycAPob6kNdb2cd5Qff2MzNTGMb",
  "key37": "2A1NpQtJAmr9kCeEfro6TEYssKJ2sfpfdH5GesJbBU6y9dBKn2LTvj61PbFPDRPdoWJtJtA78Tx77yY2bVxj863V",
  "key38": "2euWJymVBCLNdTFjVtZJnSnafhdjUMc5bX2sxgYEYi3eXMzxjgw9yb9AUHrBpNxQqZ8qmgipBWhbU94zMEkY9yz2",
  "key39": "2L5vbijSVbvtNn22upQMBYPsQRPy24DAPBhfxZRrMPUNpddKNFWSSFNHPjLD5HYREeHPivoVmMWQuXv1ciBGSr2a",
  "key40": "4jGngrtQrVVi4mCvB9ou5hZUwuAmdxqZaBTgEftg5C4jSVTdQ9ijokMf2kD3QXeKrB5fpbVj5fxEgXzyY8HNjjU4"
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
