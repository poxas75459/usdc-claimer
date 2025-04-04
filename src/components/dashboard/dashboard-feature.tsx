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
    "2teztDuZeZs7iEm1ro7w6FRNKcKtD9zxQnZLJykS3spd98XJKPMQrA5tbEPfScHHvX4XtznXQt6mfrdvRMx7W2vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZ5qcM79jmdYBw5hfcyAwSGWo4ypFZDFiU17aVYS2rjdgs9wCGnkCJWrPqusY9p5eGAdpcMVfNcuwaLqTuJ1AL2",
  "key1": "3ASNLzCJLhjRwMnTZttcYsLoNxQ9X6EiHt318XRJihKKypnTt3Q9PmMPU9MjWRhZV67uniLMkkkLh1L2KWZ2vc3J",
  "key2": "2NTWVFhVf8Ju4qiASAYnrhXn21jqB8fLPbndruh3Ys67gB7659ETpEb6pkuhr7M8QMJd6er3zrmwhYTzEahG7xgA",
  "key3": "2RDbyoDWqg3ZZUAPyvWE4gjej8SZxEzY9DpWG3qWwsabFhUpVtL8oDfGD5iKQMqxYnqLZyVU9sDWxQXF8FeGQQ2T",
  "key4": "Anen7joTKc1NVrekbRYW8zzWmrL3RmH6gQuL2tvipcNfSeRiJk1t5TsZBjHuMMohwj8Pr2X5oJFX7r5SJr9pshb",
  "key5": "2hJMe1Eh7MkK5n5H9DLnnYFZF1DNgL2ZaYBhukpdJPTBF799duqQNcp5Yh9bCvEoUsTWiyYBiETXYUDwh7pXyymM",
  "key6": "53NwVWvdQvtxbeZqTGzUzJRqqY1TWpt5MWGRYEfDY6tvA3Te928XaT3yC3dWkd6fUTUgz9ir2mX91QrzhsQGGpsd",
  "key7": "4stNVAr5Q5qQFpEHCp8ifyp4zqM9PmeGcyxTndSo3cRepCDEo71WYB1iLwc7HCAuqEfnGpG3147rPbCUjwMbHbvM",
  "key8": "2uXqw4mKsM327vyBc4KKJyMbpW9wMeYWhA7FSWw5fbGURzWLDxjVPVoD46buqdT8UcVE8U4pVdEcUXbMywXEfqhN",
  "key9": "VxHeHLow5Q1gRUjGFrDqVnGcdhdfzSqnVFLaNDbeDmDzmV4zTmGq9tYAm1TuX9tQw6L74iPMbL4YppMegkiyTHe",
  "key10": "2ebUxxTHtS34um6rnYnygJ35WVc7orBBvYPFq7kttwvPgY2twQkpi5pBdLqqFNAAEEqwEcXoJ99umWwFa1eTbap5",
  "key11": "4Gn8fEGZs8Z67SEnwTJ5AkuWagDVNqoA8X8GoZxMt1Dr28d6DJgP3foUHH6Jwer835owas2pkg2FqemmtX3w1S9h",
  "key12": "fN74MdbWBeknamQ7Zf3ScuehkHzx9SAcZrPYybSM7wzYNznxn42ywFjAH5FaPYGXHqpJGhjVZggfdWuE7U2rc7R",
  "key13": "2qWVUdVJehSsfTmpMgddSsrKCPNkQBhYjsx5gBDgG7V1kFWWYWnB5dz5c9kATTcEmPraMEJNFT64t257AD7y58vj",
  "key14": "5QmQ8b3EVRhtvUhp8MC8azKKaoqAte95Eij2aV2W6HFGZin5vsNETxe2ppiJ57f9htsh6myPNMNWsmGMrbKerW5V",
  "key15": "4szLU93XM7LXXgAW8qrdsTKWnvz9p6MbFyNLXcidHNQf7xA1tL9KHJzpgtBSVww1RKdnovYzCndk8raptARcB8B4",
  "key16": "3D72wtk5sGWQiM1kdnx7RPG1eK4y5BB2LJ2JwsScsUztXXGu1LS6EWV64uucWXW49d5vYcXw76zDMjqcHRiSsb4q",
  "key17": "2GY2mhBDCnymSm9Hbma2MppTj5m5z2iL9USCZKmpHi59t3qkfUXsqM7F2kFtPagk1z6S5uB3iGVbz3kxahBEW78a",
  "key18": "5J2eh7pArsTNCg5zkdb5SduHyc3ytFwhHAiADG3n4zUSrDwpYaDm3oT3GmHR7RZ8PpT5P2f4Adq3JpfWZkGQrLAJ",
  "key19": "24Wq45Fb4Bg6B1pznXLv2Na1NtAxEc3NDkRTgcR2RqTtZK2TeHTgVBLR5ytgsaKRgqHSNQVEcrzvyF4Hwn3bX7gE",
  "key20": "49ejNwNkNoHF4ZMiUbdZ1wrhsn8MWn7AZVNr3DBu8b4AgGwXMWMoGRJNS7krwVLpR6m8jkRbNja4NA8926JvfrQz",
  "key21": "BW76TLor3iSAjAWKYEAAuDR9uQtknBemDhA9wzLX5b6ygP2me9NDHAsCsPh2Y5z677D5hgibPTPLLLJbygmAPUs",
  "key22": "2JCYp1mouejZ8ze6JgdkiPmRpe2f7LXKsF6BGPz9c1UnHDdjGGfnPRyWv8b9HLEpBTNYHufuPMP165nkioikojSq",
  "key23": "3MBhsqhZetw25YWxWUYUVuaf6gRxRtiUf969wguE1myGR1AVtyrs3YsUXnic6ZWpViFTv16faEadAVotyAFsKouB",
  "key24": "3BnjBrM6V4QUPqTeVQ7iezMbw9TDcCF9uYDaosSTxSxNQkuaA1r9wcaEMafAVv6VfZWUqN1UyiJbAbjtERDTgAkV",
  "key25": "2kiRwTZBCZ92piZJd5xJLGhEurZbj5kFsJ9Qmb1uXdoHZUBLxFzsQsGT7L2aP6kVqXh41wuVTJXj8s9tRUWFLPCc",
  "key26": "3dLZbVT5qJ6JHDHsqtZQoqeUwAkQHMiedBP9dmMLt9BE84Y4gNnixFkiuV42WwgxUez8d6RPmMAAfGAnMAygt2JX"
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
