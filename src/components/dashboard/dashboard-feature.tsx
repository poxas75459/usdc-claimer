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
    "3ndqTNmSw7rESKUUwBK27wss6oUd4LFPsYfio2jKxTqXjvDrdz38tEhAMrcBsznACFV5BF2maqiGh4i2CxbxPrpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4ezZjXGYrW16wffNZVxGBKYfd6e1yKrHFTfkL7CTaMmsSzVJ2EBvfea88ew4eSFSFG6Md4GeJZzg3s3Z5mxmg5",
  "key1": "5cahtE2aHBrVRZENDjMs4h9heZ1QGbGxYatnrV6DYaYr61okADQV2GGzyDZXp4G5TWm5kgDpDrQ7ZJfFeHGdQc3o",
  "key2": "3EGfNd3Fzxpx1c8gKpnPLAeNBt2ZAqrBwARQzQ6LSjiMZd8h847sCoZDfu3XuP8kbi2emPRZwfcCedwPui6nNjDR",
  "key3": "54tgaMtjvQ8FkpXDNh3QZXKjpP8dw6ZzjpZgdCngq7Qy52U9o5dCpnjaPJkKvNTQspdvuHL6dMB226bjhxmj79GH",
  "key4": "S5G3TtKydFY94RyphXSBSEDug2BGvumy33vVcUZgwQBeLSjSLsq1J5SHN5cm3AvEssdwivyCnkZB39usLcV7Pka",
  "key5": "3x4TwQjuDALYTCMnG291aSvwqsFmKBH6NJKKjJSzTfbFYfgpJXWuRgWcUixNPMqN9CHvCzJYu26UMmuBWfYx9TZn",
  "key6": "2JwVqqufsEA9LTtKaCCYK4gAJjemcKnQjHvzGJhKH8a7hnczFKBFZj2etMk7P3Ep4JHHuDvwjjACuKpY8coz3Sg7",
  "key7": "2rLktxfn9o2c73qXTCe9Dt4GmtAZMKLh4xGFxExQFXErq3wqptRD7tvUFSWmva6m5inxwXaie3kMr7aABjmeV731",
  "key8": "RhKnqPvtBpxZhDJxhFTG3S5ygWXzxFWX1t46P5buG3gjiUbGy6tvWoXad8watoY5nh3U3Hcuhrt8AnS5YsJgQ5i",
  "key9": "2f7fFLpnEbbnYe5NYrzicKwXbk16Ayvo9YU6Gpcxc6VBmQhBvnEqVxQ8CXRxU5tKZCchSvVeVtb78iLZFJSRadAv",
  "key10": "5fmtoeE3xWjmfRoEhucoWRaenReUEVF6qnc8hgtEMsEKScngdWn445eT5Ka6v7weirJ7ZT5gJtJfrsKmjeeptsgz",
  "key11": "qQReBpzBLnLYJ4K7d3dphjhEJtZiJxXd24qUxskcWpQtnD9tAbyE5FWWpmtWXTaeyeZJRPtZsBa4D649Niq6NgX",
  "key12": "2uZbV4S4nJfGvqBf5eermoacsjWt6ufdqenFLipnVkBqzzWcLg9LeCBtMU88bx7V6AGKnHajycvRZjFBV6kz92aT",
  "key13": "hKNW8WBWSYqdZJ2rV8hfLN1UPSD2H94FdTSWcoyS2REDHEZ3B8RGpHXwqktGCXcveE8SKY284L9AVoXuPJiGJmz",
  "key14": "2PAnqpWwckGdSpaQHYiDaqhiEzFsEwLqYREsSAxGkfphHH6cNHAAFAizZFm5PmHEmHpFWr1uQvNWz85Cfrq9UuHY",
  "key15": "4ttRL3VxwBTAQGT6nTKEDyTtDjSZyuVD8CtUGnmSZ15TmxJzv8nuMYHipyoySw6MPMfr3SMBKXntyk8rSvcyCMyj",
  "key16": "5M8aPM1H8TsgPxYeEAcmXJJR28tmSNEBRCD2DZfBpn2seY2h2usyqRvK5nRJiKEjCbHhnNcPG2gTEQ3HVwW39tX6",
  "key17": "X3bDEXNDEoER8U8WtYMVX3XuR4VUh48tkRe7ewxVHBULVXEcjYeRpBAjGSCxyVEHa17Cy1Zwe5sQGaLLdXK5xR9",
  "key18": "34ugtnuLUe4vdmHshcNDZMMsVKJsTbaU7Lqzx7YUfvgHMbCoQwUXnrgpkncqfSRNN9UzxfgPvJiTgHQ29cyxLiRD",
  "key19": "2vkHkB1Y191oLAWaMGvG8eh9bUNvoYLAojWYiAT92jGULbg7uzr48JUZr6Bqy9YtCbHfEPMGp1eP3cZknJ4VuKKX",
  "key20": "2z42R8pC5epZ5PQaksd6RbWjaXVAyn89p1cYxbCkMoCR9AV68U5rgjXgSnTnQiGEQ44z1Qxv3BWJySJ152BKXjGN",
  "key21": "29siyVN7Aw4zuJqMy7tXxvH6rVNft8qYtox4k4iYitXwHjZWRSVwAyksQoJK5d3eavvqSL15NXUrwYUeJKAzzXv5",
  "key22": "5NYtzApERupvWtXVSVZeju6Jxx6VJdahcik1jB1tqPVBip1mBrn3tBTD9TS1b9GzBivdeZQXWLSZXFT7FfZcXCU4",
  "key23": "2EkFex9PF7Hvof2pk8CRijZKk6sk4FgSzC1CcXxY2MXx75j2A4Pc87nu4QnTJa9zLAeJ89teuhaWuFfRda7zoATg",
  "key24": "4qcAL3XKvyNeYCszAcdRtyA8duA2s3f5FXgRHJVSW6bmStidGaYXyCEQg5W9m2koMBnYaagd7SNa2Hi7kXUs4NeC",
  "key25": "36A6AnTBSUHDUdumxuggLDdwSRgcJxahEhEPTeEHnjGZBJFkC2JibQ1xZ5axcPGmYBm1CJDeRVv1QNvkHLsMGqH4",
  "key26": "4c2M5C6nk63CUBJpzVKCDsCNoSHcgVSqw1i6KLAPDeJyTh71CFVmpynDESBi1Mrrfd6hKt2me55WSJTqhArcQKsJ",
  "key27": "e49ND4XnAdm1wEaHN6ns2AQjMbdsuGxvr91yGwmidMsAmgR87rmqnNk5twGU51ovqDBy9u327qh7kFZS8C2uidj",
  "key28": "28xD93eS1Catgdnz5n8dcBJyrXMDQq22CRGxYZubuaMkyDJY3b3PTZD1CPgKziCvQRpADenq91o1CfgZq2mwhSMQ",
  "key29": "2ue1ndTanbzxnQ4awTtret5kV8uaaN4VNMj5gRpTovniRxYnTTNdRAjr7NJjEnWTMA36v2z4gdAtU4EgToUF18gZ",
  "key30": "3Xe83tt2YEUyo3SbXyk47AihFuREUEftCmAYK7xWZkNA163pskZ98BtWjg8BPYqQqTy9GwWYnyTrkgj6wFHAbVFW",
  "key31": "3iMdqtDit7oyJvrpz31UFPJetyETUStLUb9fhXXzAXhjjmWdPJVVBBeoSXzWgokjr5BTUe9kGZqaehtwApCxeTmA",
  "key32": "4uBLGCm1Eehf861m5XvViffFhgCJC6L4XimJTMgnna7fJh7Nz7NxjPEGqPo4ANg8WGXe72AVPmBicHfTCQW9iZdR",
  "key33": "2uX5drJ8gcRnScbYXGFvTMCshVFkdfMvMAvT6T5MrxETXrmqb1twgsds3ZpbbnBn8LaBSh3DQ6fEnbHoUjcahiVC",
  "key34": "2NpYRSfN9RTEocBLHLvvPynzLrSzbRv5DwngBS5aiFCSZSBCKuE2AJuMEm64hpQGpfwGiVbBLxBNVh2CyeCJCr7J",
  "key35": "45Lguh8qcFe94sbXpp4aGG8Lgo22g5Dsn84d1kVNJYfGoG7euXHaDRBtSK6PhFLoajnu62JBDVhdcM3HQ1vbHET9",
  "key36": "27naNJeRzXZvX9UJkSqinMUUcLhgBz8bGb2Kv3LbSNGeKC48qYTTVwAqFnTdrPZZNTLbbuBDtvH68RpPbcS3wif1",
  "key37": "4358iecu4dxk4XPADFXzPY6Lhge6GEzrnTN1rgcv7zg2UExv9ng9Ua4BQW9SLyJC4DNbTqEsjfB53c8dvs4W4gQc",
  "key38": "5NRbRs22ykU3S2L85GvDiVXRPcH6BD78oU9LWbooFNZxiPLAxqAsnbLHtjLjv6LwEwooLVPrtSaetfH3eLja1yHu"
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
