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
    "4T9ZGHWY92JRdPjVH9ei1KYtoBJhd8kQDcfb5qr2WiKQyoag5fGGVwismu1diPZZTsWX3GuWFNkdR7H4Vv3Uobsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpvRVLcpF16Au3mdNp2Q6oempDa9gR1MA7moK5k7QN5zQbPQLjg64z3GAgpoZrW8Nzq281THuv4w3NiqXND1hUv",
  "key1": "3rS3YKV8dHitMRkzyqFB4nPGMJcKKNHEqwT4VZgSFuhbFxKE88thgKA7b7yGPLnGzBJhCf3ignPmqDEJ19a96ibt",
  "key2": "2HyK7yH9HS5FtnV2hPLtRMDwv9q5c1QjQxibcLRD2V3kDrekViQKL25px7DhDsM2VkeKYDz5PUbaX9kwWHrBoaU2",
  "key3": "5WpgZ1iLJbfG9zqZDeHuGqFLB1zBSa6arbjYxcu48mXiR7ArEc1ZZiTP4E1842NKWHoMDTnHjAqcEVt46CXFxAMg",
  "key4": "2gG4h7AXCtLbBKUVjmBfGYeY7YAHv9Z9L3QkmX8k2txW6DXhZW6w4gevegmjwirKc1F9piwq9uKsnasms5oVNSY7",
  "key5": "41ySy54stUUh41sWWXqnqrBHYYsDVTGsTnUn59KgtJ63hiU5AhXqxjcpDafySA7EiVFhT8VE8eTRgiU9vUoP4eyL",
  "key6": "2qCXaSR5bxkfWpFtJB3EDhJAb3fXTHqxh5hFL8t3b7HmDH6Uy1uQipzqJFefnkyHchedsTM4RAC9SgdY7WFtQUg6",
  "key7": "HMtVdKZuKXtn1YoYDMLztRkAERQeaNv81qnSEJ7JZdAUufmvq6cEwUCzFtMDQ1TDsxVpavRsQoqSWuangi5TUK3",
  "key8": "2aQR4TLMo9r36nRvuXUzW1X5eGDtcqRMSkGH9t5537JGWDPiMcvpuf9CwPzQkjSpNUKyxsSwRJsgaiH1pa8C3cfv",
  "key9": "3R3WzWMWsVGYV5tBv8H7un5GrTTjVgcQNp1qqchpUUyAJFUee5yuWhpxTJT667mhDmufvvn2sj6MtmGKAYfpcH4W",
  "key10": "5MUiKvMZN1tzPsoVucVWfKXViiW357KuCS2zoiveWFTsFNTUiPWKu9uGnspmpNdGhoATqUtNs85TMKVzSHajd8t7",
  "key11": "51Wn4874fJMZ53WVfkUZo4o48nAvEPsmKsMR6n6rK22HgD1GQHSqXhQCV47eM7KmLQ1RyTWcpPAKzR6WFB9rboE1",
  "key12": "2RkPkMPETiioDirhrr3WY7piaALeCvtczDgTE4WYakcUtkgps26KEoi56RZTaT4DPDMUPzMeoZX66sGChtqTBJFZ",
  "key13": "3Pb8rzQUdLyknMKUrs7f8uSTdrRit4rv2nerVugqo7QUr2Xtyn648KPaysAJ7aPCaA7vBJBidR2jCWmYA3Py5aG4",
  "key14": "4Gy8P3gV1DrNCamTyWxAeVi5X6DT7a128n7uqKAaW1uD4RPQKrsJRAtWZ8wag8EM5ktkUrVp85P6SoRnRRi5XYEP",
  "key15": "UsVxQQwbkG5XJ78R5cejQygzEzMBJG7ijzeFnxRFkHWjWjGwJDgCTPWa3ndcBwx6CpRfPCMEkgp5YJ7Umqp7mHw",
  "key16": "2Y9UugH214LieGWuM5jhas9AhHGUeBBuurHJM2xzoTKiKg6tXMD5TLGywZiDB9E1L3MxH2kGZbbFxMRmUQVJr9Rt",
  "key17": "3AqQnSci97dh8oXP2NnZsxfezVpDZagtdPP2d2RJ2sjodTfksBJ71prfUxchYQuNee2AXv5cR4BNY4MRvoZPHzr1",
  "key18": "3T1pWc3PXu3aPT9XwhijdzKdodRuEmwPJtCjp8BAfeWiZmUtFe1PH5WWuPaUST9vn9kVgWFSKSjzwB5wy1Kj4bFT",
  "key19": "76LHzMPUPC5gynGjoSSi8GDYsabsvv8SBNX5CB6RsYpnyVzbWWLVqjm1YFwFiXvoGwfv9BcYTpCL5RxpinicNXq",
  "key20": "4PWWpxwdp4KjAqHKRxaqnkghf27ijWDWin2menuUDLzKBLvXKkCzTxSWRB792H3zQAKXtYCxJ5mAKAYu9QN8giCG",
  "key21": "57bz5jcZoV7aU6YGWTAqZpaF1gEroknFoEdEHuxvqqkXiyV83ybcFDCTtGML1RoSrF8WXhymMk1R3TTomMFo7f2p",
  "key22": "4jpbCnfJkpwjerjSJnf1g31STqf2p9LHABQqYYDEogVLuiqaobSocgd4f6fY1wRi5C4QBmWYYQQUHyCwxD9c58Nt",
  "key23": "3ibZxzaNdf4TGjt7i5wNwocsovDBFFfs7PcNGZYXdvedodzA4QEEvjpi9xdxjFubGmbL3swTdxEeVtysuKEffZ18",
  "key24": "2mL5aypbMsvUN5tzqx1Rg3GG1QBcbJaDTeKePcUWirbeVUV5vJS4bsHSXoftUBHV7FfFEKrAvr6hJDwsfpVpm3Rz",
  "key25": "2c5D9Zz3Yk3fCpLVALr1wyeMUfeLD3qsU1DvF72wocxNZfJa8E5RtVgKxiyt2Qx4ttMoXvRC2UjC7GxNf2YRpbWE",
  "key26": "ddJih351r7ZWvgYxRCGqgCcvyyvj7gMiiiadAbqPECGef8gQY9FvQWNA5R7sL9DzwttELHFbDetBBXRGJ8WRw9n",
  "key27": "4k56XJ3CdBajxXC61mJ1NPRkCeoTWhCYzm63nyJ8H688QhzySfeAkV3uJAPrKT5W2RVgHY3uN4nFS5kUbYrdYbjH",
  "key28": "2Gm2o7QVn3JDN8jLndoZp1P7735GJAaEo2AtCFGsNH1zFKnQfDGd6YFqktAwdcRDnN4q573F8CrjA4Qwt93jL117",
  "key29": "4zVrznT933ZB7f8LeReYpNLwJEmSPtoQwHHHy2smBbiwF7GC9Nn5cwXr1tAijRw8Zasf7CPatPbURBJDo1cH4WEM",
  "key30": "z2YvCrKRc5eqzzRSHzmz8fznnvSzXHqjfKG3G3dRM7BaFjFLYUtVRnFCoVho54DdH4KEGaQx1R9gF7WJWVyruzi",
  "key31": "D5qxFkcR9eZso6v14Dao8i4zofLR7Hg8gSkX2wrZPZoW9pLS9zWKyPxYFrd8YMGDYfWWAGgyXHuMYFvuNw7Tkpe",
  "key32": "516rS6VUkf3HgmBete76xYGGGPVCbAKghw7NsA66Nj415PqLZBMYnFoGRE4aUVVgVxH1UcwuJb2YdvFiU5vYc2Dm",
  "key33": "5erh4mD5ip5ycpQ7j6b2vyZ2CpTvgZKkvvFgopyEQW6QPhquqkE3KFdZeRwZQC5Fdo2asXHeARvCKbKNTNifpu1x",
  "key34": "2qjSE5SPJgT6NzgE1MUS7XW2Y6sucZJPDT3cHyZGoQbuonhYFp5kiDxXN227cQTW3KD8bJhQA2dcWtgULeHyJoMC"
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
