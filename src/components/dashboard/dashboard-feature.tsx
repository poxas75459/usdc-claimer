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
    "4AdjiZ34zMDBF9v1HQmfU5UE4AJ22WsjLkRohrSZB7eK3vt9cuKz7GKbmTSmaCTxTytsHdEBf2q8h5hfhm4i1zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydGkboCqpvTY7K5Ht2A7cG5oawEjd9cNYiNvdQbsu98cpf1gH7Lx3WA5LJ44ThZYD8h6RmPR8gQLcxz9MEr4qHu",
  "key1": "mDn7iXeVqFQZJkUhNrWsmZ13X8b8aZvwwLuBAK4UFkoRZL5M5bA3zMmhP1weEceLJLBgiJYrQbfvbeHDocu2qUP",
  "key2": "4SFV6dH73cmjP35Kf5hzpVJ5Uzngf6cFfWXEcY7h9fqX2kQoqpLYQKGxy5aDSGJDVN2WCXsn3qWVSb8fbmb8pYQ4",
  "key3": "2fnCNzzx1zidR8y845PDdZtr9DjjoGu4a9vtFR6V1qPoGBrg62fhjRDx8b58R4XAckPrWQrJrVLm6dL9sJfsaEN3",
  "key4": "3R34Jmt6qfLaHSdoxD4j752yfPYMEk3g7Hg5fXe5fuSWmJHYbeNCnfe7V6Q7vkXZR3MREgZHezyQCda7Mo7Cp7iU",
  "key5": "2LBBTWz8fdsbXriudLr8sKyS4S7YgCKmirtkFPGnLi6NjxiGhwfJEGWf3xV9hSmaEkrzPR5pD6ESkrtSr1fCeQHc",
  "key6": "4mH9kF5u83XzVArhqudADhTv1m7Hm3uxcZsjnF6qVZMh1Co7TuD6PDGN65DA37aGFfnNw7Fq97UUUAYUXCBGNisp",
  "key7": "28H4UsY3FVZZgwymMrfeox86XjcdPB7y5z2uDd46xdtsQmb6L6cWKUpqBKZNSuDkgD6tajja152xq5Ej9NnW5aQv",
  "key8": "2Uk4qKz6uobeL2wdaHKu9VbpJUoB4dPojS64yUkHA9DarmCbF2BpzUQ42TzDrQuPa3HpHQbxUPEiaFKtMe6QdtBw",
  "key9": "5VWb5zR4HUprcWVmRX37qwuufoE128GcLp9gWvRNyR7tXXqwf3yVpFQHdpgu2Qkh1ZDhCZJF5WeP2NUWTWdmzSfA",
  "key10": "3dgKYXzunNEtbkkCjhZty8sogDmfB9NcH1ko1LYQo81bZG5prmeaypZYLK7WCUt2vZz5q6GHAtqHovU6Q1tpyPiT",
  "key11": "3kdrwHSTEz1uSCgDLiq1b6UDrxNdVFMPjkmfNXupVtmHcCiPQ3eCrRLGZeERL7gjGPNmaHE1quPn2HBHNi4iSDUp",
  "key12": "4RSPmNfRrjXiyz6baCg7shwSQhGy8zhsHF2g4ZNm8MHN9jgsVzYJcPRfUzn2tX5gNnKToLQuH6GPgvZJKRoBbwzG",
  "key13": "zUxFv1a4wkYXm6BvrBmiv9gfSascFMBNWvehUuSH5ZngkFV2SYRwTQk8SSSpysSVVMrw6qRbmewZLJp6D5Vzhpv",
  "key14": "5iV2JRjvvPnBYW2fKGZ6c2dZDYentfokXTbNsMcNSkArBQFjV9emNQNZPBvv4NWZWG4wEhU4PgTnE4FSwdXkR7Wr",
  "key15": "Q2J3o4dooCXsumESZ2YDgjwtzzi4DhE8dc9r5gqQwrumFhPa5bdrCFBAzEGQQkm7Rfi2r6CgsCRrfzKPvJvrvg1",
  "key16": "25gY7dLaxajgMuDqYDyDJtCEDtjeXTnA1wM7HN13yyJk3VDpAjCTW8PYy4ukMPYTUDxV8y2fpDtRzfJsFrpnbVtb",
  "key17": "58CRvMj3iF4ebQzdLj45Cx6EnHtQfAs9Fut4erHCDCZ7bJzgrAkenqHifWoTqLr9mCqbFLSAnRho8QZXq12gxXMF",
  "key18": "3TzU1yjwrkCohN3Kp3626Yd2oKLHe4MtPiePQM9nYz82i1kVkMhyVhgxsb8wZ5VnA5CWfoYD3E3mRiAkZD6x6wqN",
  "key19": "rnmzuYWKvrw6BnwxLtA9ruWni3sb3uzV89mgkvXGqkzLXcQTVid5DiupmAYZ1fKbfWyAEwMuPiQMNDdn2bBKt6r",
  "key20": "3WuRfRmpafEMtjKLNSxzbhrFRTXzu1aQAcKrczq1Wrpv5Fx8Q8JvKCCpMmZQ8Yp6dnNLHQdaYNt6Y93foXzuycYR",
  "key21": "2vbz5yayn7jwhA4fEFTm1zDk9zsK9HKMYQZ2DrzUvTeAX3zsZwM1LjU1U2HQutCBNA7aRZqxxpFMeeTHDr4qBaRX",
  "key22": "4JUFpSSdVcVZdYyoiVNzXrujzku2iwoRA7wxpSKEL4stDGBGy4mTXnUej1N3EXfQTL5DdrSEVPPWLfqZQfLeckxE",
  "key23": "2nnQRvUJMt3vcT9dAUUySdwb26QF2kSWRoBLjcLuysPYX2EFVsUD22v6Z1d6n25a4hoLQpMu7MZnXUChJdtn9inN",
  "key24": "D6X64ULcbYLGxY79975BJdiaYv4qqqFjR89Ahg6hDRgAv22WauZZVifbfp4npwALKR4bSgpChp6trCVNv1yzDYT",
  "key25": "nLCuSupTpfo5d8p2D3TxAjK8awZmx15EdygmJ26x15QxCStYGtqxg1DtjP3HRgvjcgEmJ8ycStzUvjwT8qhSwKh",
  "key26": "39rfEnWKcgbCxtbD1HD4WVi18iPCrgXnAag1mdPU5MSVdsGRmGQ3qAvreJBVoyzL1bECZuQExgBaboqo5S8ECqYF",
  "key27": "57maZJLpZxuJFg3C5bSz1WMZoRyYYvkNoAfQiLWwfJHLJyvRfgmBRtk9mGQmYSay5NRrEPYMdXXsgNxd3gLfmtu1",
  "key28": "3RBt9DHS7wQqmRqg7fmF4oJYehaFvsRYadDLeDTH8UPvCoG7bikXRzJ5ENWeLdrq7MZmRRfDVMxjj78D7gXYyDy9",
  "key29": "5YNdkdbSs7uDedfYrnbzRxLzPTuGffcdr1z8tXbGqkrys8bgy3oHke9XRe9c4UkEu4qCJQ2P2fPT6Sr7R3bSRbMc",
  "key30": "5XuyYJBTv3kVvtPxp1VBv2mRuGX5bEeUHHPCPT8xeSzq5BLLMDWsBKMRSqVgPMqery6c4FpjWoyZdTAokRBMktue",
  "key31": "4JG6r7D12mGSWVg9umEFcoyYZdS1RSPFqbjDTfwFbFSCP1ienB6ovW2NJrdDD4b3qHuVG1oJLmC7KF8bXWkx7QXa",
  "key32": "2fsAMdZ5AZYbaDQs3Vxvj9e8Tds2vt56aZnzsTFv36bsHjkTUGnwVLkrKdtNcuX2BbwC6SuXpMw9PpiqHaxXMWpz",
  "key33": "4vAvV71WNyMjk4HGpFv4htC3ox7RPmUdf2QaHfZpzHm2kMmMZokC96JuT3Cpv1Lh3Dr4ZNyotv9kmuuDKG8B2t5",
  "key34": "4cFRsm9V2h7EiYwfqnZP147ehHyzjtiwkuwcJyAhbEYLKgrXtz9uckata1GTy6jrVjswhH7uxkB4iLVXpCWc4vPQ",
  "key35": "5nXKaUbEncLZAxoFrYDekM9GKNy4qGQj6e1pcKCFg5shsgimgDcty6PXsWwh3Y4zzrG3PC1MbvLmnLTHQpdi6JgH",
  "key36": "5StVpAUUerpWH3Bwmesshw3nBDxC6mXBWnJL7SXB8bzxQvGEVDGCFuZmPTydiYNgre3jKdYXE2psVcKAYd16az3F",
  "key37": "5BsuzhnGzFsgikny1UafKin9hvt3W96irTeotGMT4yaMVs82Vg17RdU6HydcaKPXJVTTibgNfFj7vExjGcLzVH6X",
  "key38": "4jvDyXFeNeFJhfXGgHhTZeh1y7d5dZ7wGHzVLeBua5NBuD2cr4cxN9j8jzFQYoqj8jRytnviSvyqmC3P7Ja7tZ55",
  "key39": "2D28RsZT2cgLc9iZWdw63MJ1Q2cJahky18Y4QAPrbgFZnYNBFpsVskAdpMsQJLhQXa6W6G4ULvEiJKZNJoCTGyvu",
  "key40": "Tuh72gpssUD8UNVuwbnk2QtAsiHNcFzN7vmRWWR6c5GNNZbEU5PyRiFgqE2Us3zUEoSKdusZrjR44LMwGNBrKC1",
  "key41": "3sZ32cQXm19XYiSAvoy5QdFrNyLqDQ9CLVNNi1YCuT8n6NYsFxL6JmyFX7KuCbrS1X8u36qphTw9aZ2YPYaSZ6E6",
  "key42": "4Uj665S8eh6MEAbJhwQLw44gMvdy2Sdoz65XXfAxWUUvpjHvS4xPk1Rc5gvJb8MTLBvcraBZWAfxvGEDCSYKBoWd",
  "key43": "GvA3iw5M1Bsm5iTe88cxY344yywfZwQxBF6FhHvgVEthTf6JKCjEMrdXpKeccd1VrEc9NewhcxXPMHD9mkiDcoK",
  "key44": "4ByEbUyjB9amiAWCv1i787JK1pvUiPfVgXJkuDh95ebGTu57f7WMn7AUEeHGYtechKTtdPJrD3eEA5vSCqzuMVqG",
  "key45": "4pYX8wUe7oaCP9KtnTY4ywcPqusyLTgZLqPdu6J5W9B4ABHecK4DXpt14GYPTttgbhE8mZas4tvdcULywdwAZrCk",
  "key46": "3D3jCPosiisXzfE2WpvtPv44sKZ3QQrnAaGPzrzeFs2tiW7Ns9z2sN8jEnwjt1k46U364rfteBbewmLyZMabCn7u"
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
