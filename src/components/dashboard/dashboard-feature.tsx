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
    "4Hm8qj2Q3ZV8CTLEKCtgMB1MKetvQQrZqDvUrwJfWLFQnkZyMx4CHJUMcsGqPcwMRUwUmRSCi228qzixz1nqwqQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5WSPK7eCv1mHPhdJSdDxKbxTARkthVaKNxJQTBvb8GsMV1YjnknTd8ogkwJxAdRfXftJP2qE8tPbBTaNbStnUt",
  "key1": "5A3Mvy28sxJZMV5iDvaX4FiBuenaG3bt5hT5bYCQwcoBewYCu9cDXpgbN8DnBsVXmLrgY4ET4FATrdmB4g6nZCvF",
  "key2": "7kKojKSruawhXFnUhp8nDinDcgp8X1DaV5d4NKYZiVF88EdqezNmZTW2LhQ4TZfZezaH5uYLC6UKBBD8yfcTf5k",
  "key3": "3FDt1mLQFoJACVHhs8Lquz9a4PwSsykhmP7tcQmDn1BbDTmc7wQwFEv4wdT8EtW8nvxsafZbLWm6MjgjkZQgJkQ6",
  "key4": "2tik7mpePEfqd2GbkX9MZEmp71KFxqViD2mkh1r4Lp5Sip6J2EgAWe7zr1hUsqvgV3YNyLsNakWijq5xpVmygVZx",
  "key5": "2gDi9GK8xmKH9ucLLmNU83u65TFstWrGkFUwFgEh7TXb1LqE1b3ez8L59VWPjzJV8RZrZUbPHqf8zJ8PXQEM5bA7",
  "key6": "zrkwNpVhLL3MjnZTBkzXgnYx1r5AtqKx2Sh2CPsCeg8CiytGY6nhE2EmrsKfTDX48vm3Rm2xQyCg2vJmA3M9Rk2",
  "key7": "XPHnMcdQk6SLanisFbz6kHagK9293NBGuQ6RTuJgscMWGbBcVAnNjkzMhpLUDrkcq9iUxajgViriMfNYht23JcV",
  "key8": "58xSoUoVgR72K2fbdZsyPDz6kvVY8FvjTvAePx4iMTyK9vFidv6Y8kEHTmaqxBen8Yd6dQGXAfn7tHqrJyFxoJ7b",
  "key9": "i52RZmSSPrUMtoPQLAPKsQyW7bgyTw1NYdBUAs72DgSuX9eUtGrs3AmukMpp8xqBV5ycv1nV8VxNAQir1JhBvwz",
  "key10": "5iV9gNZ1LKk1pU7fLGmiKu45uiubkyNHqzCevY72uDbfuNJ6cSVqdeP1GkDiYsvxxy9e3vYx76PGoMTBsKxmkPGc",
  "key11": "4QJxL3iAekMhvdGTR3uWy2FWe2QKqFbyoksncNAjjeVk5Pik1ZQxonaCsiMjRtvqFcFY6qXKPzCPEve3NqV2rqY5",
  "key12": "4iMJUTbS6Tr4PqE5qmscim8J51z12zJAUz9tWKCig8qeFMvr8GN8EBxLy88yVYjH7MYnBd8uyqpXNdQS7YqXE6tc",
  "key13": "3Ubdg4x5kWTHtYJwZ21z2RFxvFvGpzbcLGHxZ3NaLmzKduX8fkaDQPWgQ5Cne8jYAivf6H1QESLNTxuQFyCNGLoU",
  "key14": "mjFsNAUwUMmmtDY9gYaBETg178waoGKDepmTCUk5V2dQaGHYJdtvDkjBPdKmRyAFbz1igrd7t5vFyaPEDbgNtnp",
  "key15": "5LYYr2SpUA552xiFdz63u3wmLs8c8jTNvLFwcZp8Ucjzfd5oAun278xvEXY9d4V6SNNMv9FSMqhANC3B79phwWwX",
  "key16": "5NpZAx8sBSFQ7okr7bBQE149F8mSjeP99TpHSphip1PhMpYEkBALN72HYj6obmvkkWMi2RsdAe9qJ6rF3om3ZJTu",
  "key17": "2RYn5aYRCGmM2csAEFLcaUAsru6BFd1VM9cYzzg6R9hAhLJ2TfBJKJmmHtQmmwVyPy261CRiZXytKj5mkZibzBEB",
  "key18": "JZrEdKkRBmCkNPHH76dKYxep34aymQvtxyHxYAdUiSSbwauB3DrRGn6SC4nb5pMqLaGVhdPCbmP12QqWcn274n2",
  "key19": "5X9pKYvuRMfJ5yU2TCbYJYckC4zSHz7UoCxsBDybqJa67jEp1Cn9rVVsz4RqHVvQMfJiPQRqndV1BwBKeAYZLkFF",
  "key20": "491dmhqk8AViyhKf6xLqANNjBfDfZ4A5hmqhcoqo8TUuRuM7BS97BiTNX7pVUMU3cvzJQBASj8v8VTVRDCgHBfJn",
  "key21": "22arqeYYVBBE2PF98d8QS3R1pn2pEHYBcZDpRY4JVuqg1RdGzz9vz81c6mhBzRY3VEX8iqSs5fHmiusP5a4hUT6V",
  "key22": "2mTg2BMLyGidW1eoUurwS9XDrKiohMv6YjATjJRoDtGhGcWBAWvTW6NTpEFH11rmzNGF7i1dDT6CA74s3G8NiBWs",
  "key23": "5uSKLDKmFsLrPGuh3g3yKXiHU6y2Ar5rLmbRFCHecvWQPBa3ZQt13CsHWpMdAKfKPttXxmGFYXeWrhnryTsHvMmA",
  "key24": "3RB5AVKLyKmG2k3XK79a4M2xSFr3Vmriao68m5tJHtS1djK4ZY7Z8DkbSQv1asH7uXAyj4fpXwh6DQYHzvCSvKmq",
  "key25": "4ncU3uFJTrch1s4GfvyuPNNGjHt2PU9Afay4qpQhKn7zVdFRStj3zMfXeAAPaXXJRCFpEVQGdJJpTxahCXDnhR39",
  "key26": "tk5Ab2JzxCGsCsg1jNxzsAPcTdEuZnVLKoRw5jGy4gsGd9MnaJ1sqBYX1V4TpQNwA1r3yJvX3ZDBqAtk71EBFSq",
  "key27": "5Pu4XkKUn5aJ4qrdP6zQtJHou35WKj7q5sAogX1WajJhrgePcA1yszSKoBf5Ko82QrJrnCuZ2SUvACWWLZ9iaKCV",
  "key28": "5ATJeGUN9cXyKX7jMSU9AKX8ciceBbwkqHDJ4HDApKmx63Bf8PnmGs1HphY3SDAeq5qEYvJK9t6jPLHCYGBszmbA",
  "key29": "4tHxgUEbBCuddAc3sArpaEMzLZstiwhhQro6W9waNZs8tduNwG9gNg47EUvvuCwzhk7WEvwK6T4NHC67zBxRxYR5",
  "key30": "4D8baDRtPFSDGBKSxMpNn4wSrSfqkKRpUvwtoJkNbUJvS4yJZCXfgDYf2n45pP6oHwJKBBSSSBe54ARhGhYSFjQp",
  "key31": "37Pt7QCt7nrZ9E51qbrfCRTwBhknPWTps3NXRKNjtwNbcSDLGuK7K3eHzVMhfWJaCjn7gunEzieLTZ2XoZSifaGt"
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
