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
    "2NsQq924mccLNhGorWVKpswK5GYdNnrVkh59UUDeXKsPzgyfqS73sJ4YZGCuE5ZKfVAyufiSk4ocmZYzKEdvD2ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rMY42GCjvQooxKMHBDNvtVLZkGhqXWErnq9Bq7Xwr9ALcLUNBKLG7kWAj6ZU6v3b18b78tjwL4DpYM43sDx8Mwn",
  "key1": "5R64Uh5rho9JZvBzPjKd9MrfAGtDFSXof1K6rgKeP7Y3kTeeaGJZxJcNH2g9ic6MEVtY8gcfRwqRqaMH7YvHCFgt",
  "key2": "2g4DHiCAy1sNLqGaPBFckh9VZ79uRikZ3J2xA345hPbArmoD1GC5GaH8bmdgDPixuNXQG1msBsa12RsfShg4QZTn",
  "key3": "5rA1DxLL1vKc4QmA9E44wwC35HKzZzLHarVjdkZYTTBnLE2k5XzoGRYXy5nMe5GwwvkktWSK5Uyojj13sGz1w17Y",
  "key4": "2NXq7EKxQ7o1hQWJZRLPvbZxPH87ZZD5W3ni1nmqFair9dm65hdmBz4AocgD6GWVSNnpnWarzjZ4RwLZminHvKYg",
  "key5": "5M2utAdnwwRXNuo6pRv23A5zx13U1Knab1MvyDmGUsbmLygUbVof5FdvNyfQXdDpVpQQuAuviUE3CuuFeAQg7Qgm",
  "key6": "XXo4QP337qmDGzt6rspcGoa62Qf7ToJ6inLNLpA3CHfE34trLKMD9JX58bumJFWwztFk7Wz2tdQmEZRpYYoGm1W",
  "key7": "223tFR64tGx5RDkHJkaTAAiGkxfMFxYHxTNagjAn3jCoA3avyJAF3JeejLPbd9WomMLLnkJdLc2JGkKpcyhNVwiA",
  "key8": "2YKuD5kNnCM4FmcsqN7LumJ6QXp3Rsih7Y7A6UpBggVBrzPLVz6Jn57D43afVNhTPfMBNw2d2JBcMkUFkYBnD5fJ",
  "key9": "3GauRwSn3ZruxxsWGoWXXrWbVnVauCSYc5B2nSQEf2MjgQu2rYxfrbgES5szh6eEPzb8f5vUcTXAxBaTiPj6dDT6",
  "key10": "3vApfnQGvnhTGhEWUjXVJCfNieRm7Z4APFpbb7b4BndyZeJ4BcU3Upmsv21sRQoGUZxP3nNzfs9yb4CCbzgJU73F",
  "key11": "4rzA9YHjTybawxh2fvvhjaRgPdG6ovD46oQLe1jb95DGXJVYSGK1g59pdVc7wV2Kij1U9ChQgt5cRJzFXc5QqJeb",
  "key12": "25mLe6hBG2uPD3QK16YfHPMm9a6ZHYwB6sGjhDfYBDgY3L1QdwJoY7skQZ848pQduLpNhAPdqfkCWRoqjiS4wXKH",
  "key13": "3uUAW7zujzzngDWXLh9Uvek4W4HBRa2yMrTXUTUEnNrdTMaBc24xqB3gsN4rHuEu2VXTWPiM4FmQeKupLc6MFJzF",
  "key14": "3ja7dfYpyiVP8hibF2FUcRx1YMX4unhMxsr9cSTiJNP3ygNtw5P6sLJ1BsC4z57eZxB9xqQofiK8XxDaVwo8YSEk",
  "key15": "5nDDwt8t81UyaHgYKGf7Ey9r6m6qLRDMdkhf6CpyDqaMRkM8EnsoPZNYR76Vu1ryGzzQRg7c9zRRQ5XxEiYNqft7",
  "key16": "4DUhfnQs1FD7F4unhGqmxGqaZajqbqYepRGspK7Kh1ZzxbygAbSRzP1WDKDjmtKF62isUcpyJdxsGVgvAnL9Hb7f",
  "key17": "4V5wkSqu81faNsChwufmVRk19RSwP35ghS197jVJchfscoRBGhBQExvmrPkqTyGEQckSExXgt6enwLzivagMHKLN",
  "key18": "4WvLsNny6m4trhRHmsCkSU7S2XQMbCXxBFhCuYx2BSB5K8JkLpUBKWdVva4zq9ktvoQMiVsV3dygAgvmiF72qNU",
  "key19": "KoHPF4FxuEyX7rfr1xe9zRednedLVJSJhpJASQeET2ttv7TQhmR22Z2n6KsHKexthnh2SiHRZoZYyMdhoVqKLer",
  "key20": "4uMPg1WxXNAdjBQwcZyeaf19JyDo7BAqyk8sYNButmHkM95BuPFwZwsPpJCV1MBi47gjks8yvwk8qGtnoDnEyWX9",
  "key21": "sKSHEBg2dvePygBvDCvrHB6AE8JyqzMUMDwfka1nf7xJeribW46ubdEmfM4bsdAEYBnms8dbANkNbTpwMwyFXXu",
  "key22": "2eisin6YyeADWeJBYzLvrdb6LBfaDcCxekmNXyPbtLqD4btqAkgbmZEnuUewuSpejkT43aR8CF2Ngr57YALmegk4",
  "key23": "2N9b1coB4jFJkeSMtLsN5gsxwjT8Sq7YBvMT2SiCnFBVLYQUHsaQFwjyCHHDNdbXciBSwcKAZJWXTCAPx6BVKb2W",
  "key24": "42ngLq3NjtEsK2pyjjA2HLBXCotAgBQ1mGV8s3CNn8R6rhrSCs9djw3hFYyNHBhdFKtVHTQ1Vhco3axPeQCaBnon",
  "key25": "3gAJZya7AJTC66kudKcc4a8oVk3AmCZMGV7fWgGHtuRZbfxMQAYFV9FP5Gs8ZAAvaq4PMCpKfdJFVDPyPn561i5V",
  "key26": "3FrYb2TxFaWasnRUjPyyLuwS2g3wQT6ETVBMftjRRYnkZZ2d2s3Hc91n1zVR1szycZsyLmEQjhVW8XjJAetT4L4U",
  "key27": "28xekubQjgW1LQnvCkmhhv6eZKfU759iK6qVSPGML5hvXed2ZVEcnZnFteEdDfGxf6qzhsbSNy8AnkfMme1jCwMx",
  "key28": "5rTenQuJPLCK8gCAx6MRYYZqhiMDmB4mrXTqwyTXTNC1HrUv992rTeYjqX8LKWoDSU9VdjcqmPMuMGiRiqGVLRcV",
  "key29": "2pqT7hm4s8oZF3uDLhtsRoicak6TtDTzQWZuCrnZsDGR69Vv37HgmJZLP6uYc4wnQyFKx7q3RbtrtdF86JSXZGtg",
  "key30": "5YbbfnNF5cvosw7HDngE8zP5Lr9ZFYWMeYJwtDMPiZdXLfF7pTDsSXfgJ5KS6QGtKExM34BQkGmAgatkDu51ANKE",
  "key31": "66ssc19H3RiqEqHgDXUUgiReLuMMCmFY3krVws9NFcK2q2XWfrbkoCzpwjs6aGFkobDKujxfXT5SvmB2qiFGG7s7",
  "key32": "NBxXxRvYbQJXV4gunzcK9Ph2ymrP3avcuuMTKhiJR7oqceBrSbZaDpymf7AnNQ8xx17TtTVDv4HiSCrbHm32s2d",
  "key33": "61nmYDiiw1uXFRfLetTSrra3kcY1hVUydZ3joeW5Ttx8eZTTYivqk5VbxLnADSMZCVwJDXUwB54Snk8TMwMFjW9V",
  "key34": "2fAwrsrNkybSgcj7d2qycWF83vEQTrHCj5A7ewscRAe9YSq3bGLUqGXCCX839NXyuLHYVM9ZQUWVMEFyRtkBev3r",
  "key35": "5qPQuhSEazsKNNb5T7Acv1B9oA9LWUCJs5Zw25P2QUGkuLEjyPrY836twUVP91bjKQ4XLvCxsvQVuLrEZb4A7zB7",
  "key36": "U9FnezbzuL3mCdjjoDEQdYXDgc3WJdeoAMjSRi9hbeBDi4eMprmJ3hK2fnoMmXVADw9q8xqgo82fs8WQFBqE624",
  "key37": "f5sTSqYQkc19gBUnbV8Y361AR2P3xwfgDxtR9vRD1tLYMYikRevVR2esVjuigZmwABTvMWt5z2FnroMwqs24fuF",
  "key38": "3RvnYDsesXMgj98oB84bMgPTLD2BLo4p7GggAzPJSQH8QXEckykPV2aimGe1tXS5vwnDvRzzkwM6ysiFakPGpK5f",
  "key39": "3y39A3z3KCSR6KbtX6pbryKWuwdHUuHkfNA62QXAQ6osuz8ZpDnV3Czek19GKjSYLDTqZ4g9C3XkiaHPZninWGuQ",
  "key40": "4WM1VAXAJryhwzx2R7FYEkjLGCW3d4SvbuBmNUHknpBxMz9i5C7nQkdpjrD3WtVUsoxyKj5pjxF7UZ5G3jxTULwA",
  "key41": "3e6rDWWr6UcqyJqGiVCBZ1mvCAMyoAVKxtyqKKBEGi17t6JCeHNdF7koyhMRpwrE4dGCEi5yY8soXhhQKJ66a6b8",
  "key42": "21ecYmYpeXQ66bir3AL1THhrxRkzy6xggAP7mhopS2uLTH4rZRf2TQXzwEKawaPKXqRtM9qWdyNSrj9mJciUihfZ",
  "key43": "2bHhAcgCJ3YY1Xs7CTDw3qgbHtCZhaiNPbNnnGm9t5qCm7ScDA5ABJG2kDEftVoiDM29JEVuGzgr8JmRazy4CCWH",
  "key44": "3BLuT9EuYp5QSQoYQR27N4TySFPR5YzpTRZTDQyWuDCGwNBYC8yDpgKaJNxGmteNGSX51sbpzxEEPNJFmCYda3oV",
  "key45": "2GPfsccrrjX6Sb1undLvP7L3St4ZehEoTGLLsSDNkTsLujNWk1e6F3qhRRYvx8nCeHJqoQpVku5NJyd1hHoTAEJE",
  "key46": "PREBbwNWe274wrBVHsa6qLuEDcEUnb35YGqmyCFb1CbZaxA198GzdJK8WrhSVzMhakvAJQUX1zCm8cdcMZqN6H5",
  "key47": "298tLSb8StN7prfT3Bg5EmsD3mS1NqWEmG45ugaA7eHb5SLRAeHLQpzyoZmEVdUXBC7yh7fSqnRB3c9mZnbnxUzZ",
  "key48": "4NJTNPhUp97Q5KastoSxooQaAjaXZGHCVo3i77zMijYz1yVtgiyfH2NHBhHjyHnj9TA8je6YWcLW2zxCinpuxpaL"
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
