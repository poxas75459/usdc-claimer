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
    "4NY5vZWReRrpndwSguyWCoE4fQDiZXi1ke7Qhm7SBiKTzb5LDbPgZSFGWpekb4DCLZGi7FE8dszDDq1aVLBWC45d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSHH3MxjvhbY38deaTvTNL8gaEvsGyfoubGLrscpW8LnJ8Wa4q61xn4hmNKYMBuDuyGmSetD2AkYnRDZ7LU6BDf",
  "key1": "5wmW5fHvcLPWLiBPif9aeY54YQEd1kbe5AmfCtfiA5C89nun4bT42vXUgizhnqZLKmwZRg5rTFCgeovMnGjcpRUk",
  "key2": "3nARJvUBh3feLEs11Z2r6AfbQQ5qQVG4m4FUFmM9wJNR6j7tVYyJ4c1Y8qt1YGcreR5h2f9yLYUMvnFhcUkBPmcX",
  "key3": "2NRqv4XXAqZC8cLc8q1FriPAkMdU33bt4rnXrkZAdqKv5aRuhFsa4urvPALFyD1J4dYy8oVmBWhkjaqqUtCp3BRp",
  "key4": "5U1tjTeVFKZbPzGprwVZEM2TTkFfWw84wWRocYftAcF2g9XfRy3pjkmKcfojQKYWP8KcMpRz7cujf6eTnRNhh3bJ",
  "key5": "39tLB2PkcuWB2K2SyVyFfPaHXKjJhu94c66VyXXaUcb9QDLR1VxWqEZFDspN1UCwBs1E1Cbo3KeFRgggyYDmmNn",
  "key6": "ppc6ZrVLuEj9U356pub5fzDzUBAsEGQvSm2N461d3ZA8pmDA36wacV5dvxM2XS5MLnmfErM6VmtjpjzrSjAukbU",
  "key7": "26XS5fdTVPz9ddywfXx5xWkfZjUAUZYXsExgtP3KGBX6Mo1hmSM9psjDby9nxbgH6Ffg1KSBazXBCq7eCBPgEY6G",
  "key8": "ebYuFwY9fEGEYeX898BDEscNFWeFSZGbcUvxE2BRD61VV4CcrktQpBXMbx239naV1CWAaWJgcypJn2C8XDCU1Yn",
  "key9": "3gU9mGzUBitujuPBskgwyKPFEu64a8jXa4ZxD1369LokQuqZ1NHvhLqYSz3Pe5QSPLzPf64nYm5nB8TyCARtT9EF",
  "key10": "4R2kya8uwvjphDrHEB1x9ui5LMiM5V2dA1DspJW5gasRzjh666fZPaRM8UcMCj3bDFj8JufkM8bxM6mT3ToUcx8t",
  "key11": "2Yy5VrC1NxrHJa3FypRiEc9HUVmV51VJyyBVuTV8qhpVXeVtzA7YLZWbmBRdtU6pq2yK4HAncffnAdmszKSoY4Po",
  "key12": "hDsiz2BxrnJBKaD66PFPHpCTgo54oHNYJnsGVhfLXemC8EcNTd1EPctZQ5EdGDYTXVR69Ydxq5XbwVcuXV1jrEm",
  "key13": "4GpbgwQzTmCbLE8MTFyYMNGobbxUW9rFjuWzHzpUZSotXj8cpCSjZuiiqM5ShP1nHBRxhjF6xPdottQZ7zDB1pp6",
  "key14": "xwPXYpV5jJHT9bmDJzKpD42ieikNC4fxgoFTeMhN3P5wkoXJ4cYSCzvJrKhAMLckZdSGPLEM7ijmzqJ2M9fZ8qY",
  "key15": "scx9HPQEzrXSPdRhwJ3kBenHeWtxhV9LBNMbNTypgsKSAwiRu8Jvxp1MvJyboeWJsNLYKcwbv7Tmrk2Z1sv6aPU",
  "key16": "3a9VjRCosvdwZM5WZJGkuWcmiLNPxSNRx8H5SDWjC8rtjSGUHVbjgadbNWoP9ka5RPPhbNPuSWonraJYQe51Azya",
  "key17": "2pHsF4uj67gspnHfoh74qJaYgBY7bvPE7aJLdwo4KGQzY4XfzPWKNAR9k2CjYHFWseUPzzcUHvpjc9GXT3K56GLt",
  "key18": "3K4ceASwGZvkFKQjSDpKvXAASGDuz83ZFKxQ31EDNL2vMGkhMP9SzEndHQdkQ9bYPLTmuuxrUcD4R22StkspYk9Y",
  "key19": "5pWYELibM1Xgc4h1VxYFMm8CBqzUKUtxGvEmdoAmpjQ4jvbCGrQ3R93wHZPEiwgTgV8mbRhqwTRPqh8JX8RfNB4N",
  "key20": "4oHKNcYCAK4Xjzw61UceDQTTTXN3hdAm979Nm8FeKVEbBMzYE9KupiaicVscPN4Nk95Vn1t2DbgFZc9VWifyTKDS",
  "key21": "5EzU9TtcJL29g7Mesof2YtTXtnZtpjgh9uYoG9RkY2ym97Pg2HEcnACN553pbRrTK3xj8VeP9rbidrZCqKJJz5ev",
  "key22": "4S1WGEPaEBvkWYwNc1hceMVcCHYT8emcGFsmccyE1oCvRAJuq97NgVHs25S3ZLhYLqFsVJcjdVvQGmx6HBv2qWjT",
  "key23": "r5E1nvmM14mkXdqTsutS8RLgM7xVxnchev78D5nL4WwV3gfvZEfqHpWHa48qDiyHR64z8ir92HiASKWjh4WznDH",
  "key24": "3wKLojtA4ycZjfj61fS2Yr4QZsFYZLUZnFpzRsvDWLFkWMjiJeQT52QWAGnTBs6p9zJHc8n23UNGRPPo9U4QXU3m",
  "key25": "4UigxRBMeC8E7EB6Vj4g4NYfR5jbZztythfAAeYEM7uauGRNyygEL8mrAFewRy191HfXMbtuvboN7EqwPmyPcNMk",
  "key26": "2kzTMubc5LCwYidbXwoSTW5vZZ5LaqK2G1dygyVtNyzDuqBBjL45xLCNMCLdynDgPrRbyPWEhXocqQECRKMtBqjQ",
  "key27": "5KZUGY4FtV7yEEBGv89VzwuxaWxRtHzPKb5jwu9yivajszMaPWDZN7yuewhrcBLsKbshV1xRdbJc54DfyYHvXAgh",
  "key28": "5cNuwXgivJC2af5VFp8hSRjSgKN1GaFJeousDhSD8uhfYz2oULZFE6dEaL3Qr9hVuQQWkPbuzdHfFeY7peWyUqqq",
  "key29": "tkkkqBmo8pNktu7oNiKKEJFLzYHnMbehHrCuoNPEGn5uU7yeG8aqsvWsrFNvBPYxXDJkFgJbsFAEY9qoDC8u7se",
  "key30": "38sF7bmDvLjuVx65UD4pnaUXv6TAR4S5D2Pkmuxe93S6YVyLVozApGXyPtmLb4rMkTBcxfMKTnbk8AHNgPJ9aGXP",
  "key31": "3N1Ge5K2dsFCv8WPDfbERyvKhddVdPHsZga8oDjMXAtYf39ZqnL5CSZXUTjk5QkuPBxmkdEF78XGPB9f48aKgi9T",
  "key32": "25eUPccHi2Pe9HGdTkdm26LFfekY7ivRbxvjqtPVpYUkt1LtoAS8UtZFCsmT91PKKyXQtRdxvLitDyZwKniai63b",
  "key33": "3xNnCyt8D4RimXvrdPTEGUD7pRY4RMExvcELxM9ZG1DjdWyu5F9mqtMsSwDRxLK67s2DvFUwh1zYPLfkU7WRYmwq",
  "key34": "5Xa48vPwHS2QqExrfMkhHkoe21YjNFeiK8k6rtAHkfUZbVM8LbnzBtcCfSBgeyLLnYeqZFf2sX4egynnYkRXNpfj",
  "key35": "2NhfoUZiKNg7NSg4XKi9ErrTveL91azVAfxkFkHyBtofdKLgnedUDaReSZybpQJQNc463r73KmnUVkjFfnwNhjYD",
  "key36": "5Th5V6KcRCNjQX1TrERVZRRc3judVY1kb3AXMZuxmbm7J3oaTnK1rc8dpLexF1rBP7apfNo4uHLoeo9phL2E9Z8r",
  "key37": "P7yjvpSSpmrsm3xHbbMvW38R3GEgNrQfKU9wE2xqJo4nC6uA5NA3qKq2KJSpvi25Y9fyZwUWHaSScwPMUkuKGmg"
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
