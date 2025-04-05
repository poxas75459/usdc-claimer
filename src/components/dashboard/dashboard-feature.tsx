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
    "3XgJ1RBtYPXK6X4Eqgc62g5hCBctN3jscXnWZ2qDkkPkrV5HasNEdsR5hhhjX9UzdtynKgqa769V5hBWNr4B7vSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z2FQ2fJJMEVfTY5aXm4Qt7vEkebWspBjb1CBnrbJDGyEDrRuWXDbFg8YnX4uGMLZC8nP2AVsKyEw2QJzPHuzgg6",
  "key1": "TCGJVJbAcWaUFTwAnuk2tP7tL9qRBbcccBUuVurnZ1WD6me9ZnSarC6mowinqWSp2e1Lzb67SAMvSdE91QJKwAP",
  "key2": "61unULdKD6gFcKECBzsfk9h8cqkJ3QocWY6AyemVSVXWKCVtJoxf3SvNWXT4vYMQwGPzzzpnGyX9qkvGXvM2Nq5v",
  "key3": "2aCkDfWnbMK7mEKEzXv9qCk4WHhLTy1xH8QNGP1dtbUbfbEc754Ybidm6mQw7haU5k6Y8RNLiY27TbNMZE2MHjFN",
  "key4": "2EH7Du41W4ujB9uLn2H1Kug92Xk45cL9i7iJYDt7bsTdkF8H4z6g55EaajBo5Ef2QYQsggVRDgFnu5dw9xk6TDvT",
  "key5": "4ovhrY4MaNzkkcAPZvzdnLdbD16ZNDk5EyTWYobAq6ANYi9GBvdGjjcY2YUPULqD73ujfQP3t5SPnHMo3tFA38eJ",
  "key6": "48K3vPJMhZWYDA43gcJC41KgwkvQ7WdLNvhmrTfQrXUyqjpKzwMfQt5dq1b4xGxFBkAxTEdmySns2MG6nf4yAyGs",
  "key7": "4w3LLrBc9k4kZPCh5DYxzaewcjT7mDPYQAtGmPy3q5k7HRxEBm85JhHaFoGpAbz2zfP4k27zHidCm44RxisWVyJZ",
  "key8": "2LoQedt6kLgnyyS4gZZzARuYbCXuk5Djss2tApADEyreBgRiuYbjwmw5GDSzHJHrwiJF54NEJEKWN3bxG9a7jEja",
  "key9": "2VCcrVAGNBcgPvxagk9XCvpSrj5kRLJakxc8a7kSGJjc4PtPoQJuq77woPev76YJXX2H7Bzjw1tuJdR4PN4aj1cT",
  "key10": "4Hhjz75E3fddf9uTVaR9HMSqRAp7Dij3fn3vnvgjkNoCQBd8mGqH5NUrn8g2XnmCwo2pXVyytbrZm7miqwQq5GtC",
  "key11": "3D5kChSxTrydcor5MYWiGvosTNHCdvud9oFkmYuLga1NmpRHdUTsemnJbdH3djZe5fWtSJ3b1cN5dkpELDGictCo",
  "key12": "4D2iSLaKLhGkP65CV9u3iKQT33An5WvJEBp7bn6jVzu96giDhbmp67sjuyJSJ7cc7gCgb75cuN4tW1GHDz3hwuXK",
  "key13": "35doppn1J6b3NY9EuXQgW4Z5nutB2pZUJqHNQVN2f1Hj9UwhPoYiSxH5SNc4z432NQn9uXLc8TTC5pR8QwTPkdNw",
  "key14": "qHsvHqSMFDCyQV4HQh7Sa6iG4JpfpwprkbQBXWTJtgt4khnBwyq2ezL7AcKQhZ5dAiRGMFv5sUcY2nVQc9SmmxB",
  "key15": "36eRtqS9jD16Vte9SFDijkxVTgiATEBtmhqB5sjQH6JUjD2ePTNDiDwMPGThPWkpVjFzQxvkTXqweXmP8MhLEo4W",
  "key16": "328v16itRAG2vgWHF2Hno4G5T25X3AVnkBNLtJ8rDo9CAX7QnmkPi4tSSzvbdXnPGXpHsU1H3bAoNysiwyLdxfeB",
  "key17": "4PRz1HgFuTNuPHhPWtkVxsjKndQo5CMi6c9ytcoMWoZHy7e4aPt2ZnFAwKHnBKqZzaM5VjLVEmsnpV12peTVu5Tz",
  "key18": "ywg1HLHrkuHkJZxB91LRwdcrjTS1uRMKSzahL52ZwyK1GLM24QW3DSqNYtsmzibDAMSRenkxP8Jg7eQZBMxXJAg",
  "key19": "qSoxHe4rrNcX9aQxAg4829V3QEBbHrsiPx167Jb7Q1bDDZBizGeK9BLbXJGFgiKCfUGyyYYbXJjF8qJ1uneW4Hg",
  "key20": "3FsENZdec26xRe548L9nyuHT4zMGKHz4qucyxpG8VUW3MaMFdEQj8THDTYybYtiqRUAk9Kgn2NFc174H1fBgxaH1",
  "key21": "37FAcfkGnE4xtSyYVT7tMnnve7srk9477j9tDGzBuwo3gNTkaAa2z9MR5DJwu9hm1DXpF3sXPDND4Gq55YoYkqnX",
  "key22": "3JFhwnVyAiQ4NR2abv3jSnY3U3DtXstCKQQzuBFMsqWihZLyQK9PVBnX4DKeAqLZfzwLow3TFHwCMSJaN3D9BZqw",
  "key23": "2esCCkuJ1fcpNaRWB66bnbc9JKa5kNQcxceCUcAsBbxeLK2dw5fC8NYLX24Atonq2cm35DizGa3LwnugsejVdWGt",
  "key24": "5qmA6debemDWopV6ijNmqNPRTusBXsTcNFr4cDowXCu46hSdds5QTpGsa9cS31KtzJ3qP6sMLDevr45czuPcVisN",
  "key25": "21KGTqT5aPkpi8HC4qFoMVqJRtEHtPHtCyXW7aRY2D2fLEXytGi4QefHH8MGwLRTU81KA68t517HGAHhrpLEvb1G",
  "key26": "3ZvbT5DqfxbxYK8uoQL7n4CPsgnngq729k1snbL75GYZ6qAyfRjYpuEBsD9wLK4WjKfxNKAzRRGY69EMrWSnFUDE",
  "key27": "2iwYe9dC6M7e5CMm98sNf1trTnheaP9HPKvpyc3yGhxHZBF538Zm7BuZNPAPhk6xPeYnEQo4s2y9Z4SgaJ3NrRmf",
  "key28": "2GWeJSNHRyGr8zeaYzGkB8tUooNuhBL5F7bpY7KHGZemu2yzQ6yupi1wSxSHqVkw17srHxeKRs7dFjAgWp1ox7oi",
  "key29": "5wuRh523ERvYNjcmiTbrvbx3e3dEJSpCkCkbmoeaNXUkGWm9aMVLs9NcHatXBR83G7sXt9HoVnSN5n4dPo8XBvTy",
  "key30": "2NuK1GkbNU1byBBmXwNhP8YL6HVbpmtXtT32imgiLH2HUCLoWPEStt1vHAY9b779Kyn4zTKGqX7ZLg8DqMBtpu5f",
  "key31": "66Kqvr7DSztFtaGKF7KQVMspEswZ6wwVdNESGYpusYSALmbUVSNL3ajGc95GytHLPJwBTFmdJEaW3QkAqHvjq1Gq",
  "key32": "64RcxjsEBS7vxZcQ6jv46texPerpWjuz1FWnL9M8gvDmq7Mw8sbiJxqJYs6STaZkp3abg8FtFAP1veoyJbzf5xak",
  "key33": "y9LwV93Xm929PS2yKiThWxA2mBnLMWSVZygtju2sjNFTVG6FZE8WjUhsHmYZfAACaZeL7iAFiYKfLanHyZy5HUS",
  "key34": "Cz7Z42x6FwrMEAkFBhfVCxWVEaFHtJ859r2p3CsKXM5cedW7rwGAcyoPNWP5mSimBpYUgbFxVJKBuboMVAHch4k",
  "key35": "5TeFbVuwmPdTsNFuxG5XkkqskvALFHFm6Pd8AAUat8S9vmgSp7Z6RK1JNaYnVa7G1XjxyZfbDpYQZJwhMNpMH4Pa",
  "key36": "3nB1iRyHsdLscSHf1CMabAdcSbPgUYUFwuDvPFLKqnQwHt6jmcj532ZTv7LPFitvJhS1VXFmyBFCBNpupuTaKEYN",
  "key37": "4dS1wAjPjwC65EJM6T4A55Zr5KDqEpnFvgJRVVNf4h6kQDttRp7e7eyJdjwmbcXMqi4KWFz1dnNm8qn5Wxn375i",
  "key38": "33hidSZDLWsaJyNNJckqZwPEkHH1iwM4Kn9EUwfY5EMxjLXrbpABfsMXVMr4orvQXwiA8bFvdsfM7DDckt9U1W6x",
  "key39": "2xh5YmbBsxXGNe3M3mTZJep4S1RfKeqbydNsLK9wvLHmEVqitPp1En8gWHg2XVADPfCdMbSySzzrcujQC6oD34Yk",
  "key40": "3udSqXWkpVcrwha3iK4Y8144AKuD6ffsG8ze6fHMvoxmYkKoY2EcwqxxzQ4GSuwD3VCa7HokHDw91wHbtbkBb9nZ",
  "key41": "4muSionsrm6xD4q4J3Zg1pSMQ2cBc2Lxxr5Djz4Fcw7dCG4XEESejeJYL4aYXb72xkzofvwN4ZodLru2g4gJdU9M",
  "key42": "3CNdBMFoW4wUHsD9MgM4JajfqpXkQudW5vo1xdu4Pnha8vQWrCg3VDExQnQPgHodLH5Lf3etdpPAxESfoakm5X63",
  "key43": "5c4SmwP6v2qcCF7JE9ni5LpirC5HEm4vRmXvZfeAZBjSk36pcmZx9iyZ69XCCdJFb7q4PvtdQKUaoDRJUFUmwpBF"
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
