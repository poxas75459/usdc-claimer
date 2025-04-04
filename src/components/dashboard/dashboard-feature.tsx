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
    "3wPTA5ajizvf7LriVGb7JJdkaBeo2SRadMtoeFh2K35sCcsRPZfFZXap35Qt6v25LegxgHxGdYptC9H41V1Hfkpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7BLJUpHsWNMS4MoNaaYqpd9A1xN29wrQcmbwJQ7isrSJaHMzEVAvYiMNU9gVYNsYL2D1Tk8DH5H5qYhV3DEfzk",
  "key1": "3pAKqCW5zm5qW8QZ7sQQFRKNjQ714aEMMWe4baeof7pZm4bpNJyZeKqbXeF1XTuNgc9fFDtnHULLUzY4LX9VvyyQ",
  "key2": "afT29PV1eJoNuXA1zu2nH4wCxxCjQRdfemrJSur2RkFvpxCSHHNYuG2RPKmynpoVYnWS9kzBcXtqgR2PRA1m2d3",
  "key3": "3vxzdQVD6JtVBhgVngdsS1bgx6FXJn9AdJBK4hbPcnwevjFKfsGxqp41T1cXtKs1b2FMgUDU51dSyfXo373RWYe1",
  "key4": "3y44SoRbbuPf2dPgacKZnBzEDMZEvsEvDr3QFMmQ57ZJhaL6fBmXsF3z9b5NBUG1CgsDmu7pmu2sTpv9ZavniGqG",
  "key5": "3zhkkkbvuw6EqGLvAPoy11h9rb22kU9FtAAQR8QDcaDe2sAknJ6Ec8vktF1eYDvApn46CBGsatXs3AXPK66SnbTE",
  "key6": "2x2CazAMdd54b4shjjwbvBtcbKmNg7pcMUqNeEmBVT1CzskCVFPZDiPGYnukcu4bdUfM3TM7YF9SLeZ4kDuS9Wiw",
  "key7": "398aKoAdJMyUsaH4ZsNUfGL474U4FuesPLaGb7aqT57ZwSXg2wAjDxy8QpMPjYf3JVNLGoFGgxoe4mKaPiU6RCRA",
  "key8": "Xp2DWxWznUb7WBy1jgdnHnhensDdbHz1vReYSHzMDrq6bA2JnDGQDntpVKpu5kMDgtAW4KKxfpEVMfUVf3F7uKL",
  "key9": "4c5NY1m2zV1xAmUHro6xeycubD2m3GCZ7aBSGVMmA3YV2vXV2JJG6pkpqe3xXdtxcAw6FVW9XugRsHr3tPMEEuGp",
  "key10": "5k6Rz2rCAbMuZtoFcTPJ6ktNDXhcgoHCRkM8w2nERuKFChKn9yWzSJkNSUH9Q1qMj8vga7buwAQfpSksBz696cod",
  "key11": "3aBPx2PD6MHnC6z7tU52qioN1DfzmkoY3R1srixG9CQgm42en1ozBfMnqZoYFqSPhvXswGkWzBrPaaTDkXmStHXv",
  "key12": "qNX1QjSW2n2VA9S7Bjm5PmV6CDJAmpRJMSij5mnWEpqz9yRT65PKrzhYZDQ5Pu5XNi2hHwerGmBWAyeysfTWoy6",
  "key13": "VT43JDL8iFHph16HacFEHGr43ML95Z7cDDwAzrVyEi6Dm7w2hjJrS9fw8zhDQt3Ji7kEbL1AwkSsmZSgGY5Kdke",
  "key14": "yA7mBrEHKxumUxudmeXDsZqrbeq6tkgh7iXhdLD7mGLnyXMHWTjKTZzvieKcDoWPdLLmhnQxTaUqvm5vbgEKTKs",
  "key15": "5JU1XzsDo5Mf2AKFSAK6GBs9cc5VxT2MBZKpVxfrwE8C36ftgRsTnU5RkHYuGywfSNehrqczdwBvhZJmkqy3ZXzp",
  "key16": "4k8TUk4x4BbwMSnpa2xLXji17dbCZfcyA2rdd1pifoSddMfUyUwyVM7wZii7FKZuG4F1mJhMR4kWDamMY6rteA6m",
  "key17": "2pAknDB2kYBKXhy7NgnvqFGAUZgQ7Pkg3Yin8tYVEwJYdGDdsZySnockPf1MbwBYvqHniNP9q2Xke6JCHgPitE7z",
  "key18": "5uguuH8p3bGEhu3wYVSuKsKFD7ySZnRvRw1hRvYZA36oGTWxLew2ftZ9o9gWNMsb98PrDaZiCS8oH546YEUujytF",
  "key19": "4kvxPEJDnodNUXX3uxsEY6XuBFdyj79JBrCDFEbXTwZrnBeytFT6nDVnA9ZEXzRKb5hBMDxMfK9Sv6rVb7sWJLW3",
  "key20": "4dUGR65a9GrgW5PACPhEaCrE1VZkQLCaHL8gDZAbqqujMbxgEAvJ4AMuv3zJBWxYEKVFvc4tFcrhJavTkt7XqHqF",
  "key21": "5WVwZVdy88441E7yfnT3zqzdxdYu9rJ5orEuDqvK71izpTf6LemjWNhxo1TKgEuxhqKZ4SPQjQE89FxvU8FPaA1Q",
  "key22": "5yjveF5mA3F4mkt2Gi1HAfDs5DSdcKHmk3Hkkq76jZTQek2NDEF8nRbkEtwVYtTe5wRBEybkWoYjRQB71nV2g3oZ",
  "key23": "3YKBWnYzfEDfzMZ5153k7VMsYp7k8ERqrtPBnGuERJUN41kwLFYkKFTrPEvxSqwTdQSZU1CD2ZafCVQjdnC8Pnrn",
  "key24": "3quuJv9Ktegc45MgdJM49fXx9bPfjB1RATYB2sLWjXyZPn4dY8zBSmNY1zhntDtDpL7YHhDWLMHD3EJxiVB3XPV7",
  "key25": "fYeKMG7ZFUajPUx5HzJh6yKi8Dtym3kFRaCjx88n4rjMac3m7jDS6AVUxwr6mtagKPRxEwh4zAr8f2PLBh9QP9S",
  "key26": "36gbLeyC9BQMvSDk8b3hitiys5ofbYgSs2epGBswBuYh89ddHProN6MQwn8TkZdsuQ6uDUDswaxv1PiYnnarRPeU",
  "key27": "4SXYgMQDyke3Y3y5BJyKPkJEd93AzFKfjv24T4yXdSspLxm7yNqZtJqv5iNKroV3JufTNWyMKNNrDbBehR4vMXkN",
  "key28": "3fx9Zz9F5XCo6V2VcWoPX7PHeAhjQw5QgyYGhUL9iATEJAaeSZpmUUFKXWSNtuAGKW4ekRunY5qLWeWabJMYQaUP",
  "key29": "4eSh8VNKLvoJ7FuYt8SZhXV4etCGcsoTTKyk9VQmWqSMoMa2wL9V6sNALCr8GbC6ofMiGvEVGwE6BwN6GwG8mWgZ",
  "key30": "4sckVf5aobWioRoumL7nFZtz2KzuKBvJUD9SUWPvb2QXGNjGR8WrK2T3fCk5ngUJq7DH37UskcypKUFGmyeuPj8a",
  "key31": "2MkKAizgHugCGE2j4rUk4C937QeXZCesKD9xHbsthHXQUwoU8sLEpoMEGDy8QHF3kgwtddCEHm9an5BkqH1iqjrG",
  "key32": "4mGe4Tcmi69oKFTsFUs8RcfmA47h5reESRtPVraEhQdKEpv4i4WAeST75wUN6gosYjk8deVCZc2a9AibUBHvFNuq",
  "key33": "4cb89kKB7X8tksRY4aU6uzeDBHNsxkcaTBGQi1V1v4QcpXg1HVeo6ZUYV6ZkRWQNeGvJ1oRzNnq6Hns27TsX8ewF",
  "key34": "3h2mre99xxsRTPLFovfpQzYZvv1hH5S31WqGxooJ9QoEW5EWmbbSAPwRgfJxrGAJ9eqppaJFcYd2fzeEatLEEA3h",
  "key35": "kjS8RZ7BhvRT8TRtrhBG7TqnCKb4Zt31uz58V9GGQ5S61qRKCficG2gVEDFFiCuu62Qe9m8NuxpeHPceP8oj2qG",
  "key36": "mrK9hQKV4SgJNWZWR9BqgsZ67fDaAqhtQjAziBTiNGuSQ9UVwmn1jFme8TvATvCMcN356q9WQvHYzZTA6Ynav2R",
  "key37": "sbn53LW2Z8fBUcyePdvUFCXaKpWduZ5uFY6Q8sgsDvRYDfyNsHY6dRckRHwNB1ThkyD9UeUgqZ1osXNLZ52H3e5",
  "key38": "3DwqSDEWFvA8hjkeyFp41FTrzhP7oXdLu4j2yBpghH9tqUJqSt5uZrhBKKv8AThzGDYzK67ZzsZTirchxMbMKTWY"
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
