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
    "un3wgSMtggjcDRZUaYVoPNpNPCBUst6DhNUz82MToMSn9C3ng6a5rYUrSaKLbFuQQ1uHwQJPb2wnCDHJHGgChxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6GPYSbsuyUDdUQkPNn7oaptN7mNatips6Yq2iGE7fC78eSk5PMcbpCjWin5cJZD2jtayhTN1zRGYsRGWBWvwAa",
  "key1": "ahYq5h1CDgqrN7r5h9uu2X4Wcag1qMUso46cdseTN6zQWeVTTQt7tndPrMWt7MH84YuAHPUF4xSsiwLk7X4VYVm",
  "key2": "4Y5XLidfCrZhz43R6y1w2rxhGcFff7fzFHLHvqiGVGDhP7zqput6Y6tuKyUh8xvZwRiJUv1XPY6iJy6STZ1Ech5L",
  "key3": "gKCKNydRnkHBMBpixkCvhEHCRuaKmCRrTE8iXBRsixnqQg6qcZPVHGE3zJz7YbN9f985QCTnSfjcpig5ZAkFBbB",
  "key4": "4TK8XuSzJLuLdFwLdkRmz66BsURHKoTjacd8rLixnP55is7he5ZAW9PLNagmAJxQQCpNENuLQfdQJiVKocgoG3XA",
  "key5": "4x8JMq9YDdqfATgkgmdcyT3CYENt7M71RBcisUiwMo7xx8ivCGBLi5pHoJQcn7BrydPZ9VNYZwJkRNrfZSBwCxMt",
  "key6": "5sutBQpMkzEbG91C8fuoviRSwxXWTaAVzXBBvPaU9Uu6927cfXXcuJgbMJTjqALoSzfWnofWk2mr6h8GmJEjqXFL",
  "key7": "2SGJSqZvWTXgbvMkemWW2LkHKkfRXB7fCiorqdczUXJH9qZmGe9kHuEjhK6Z76wuLnXVRck6QyynzGyxdQFBU4PP",
  "key8": "5QmdCvUMTAQ2mpC2wjT8PBFoqT7SKNG1rrNJ32KNGaYD7jzYxz2KdDxV2SZtvMquTXzhrjWpB5Uiy3fUWpboKEPJ",
  "key9": "37hgYhBHkjkXWXSyzZFrfGvBzVFzVdDkBwpYMLhw3HE2nQum4PKkqfHUS1kWbnPJM85NcJ7c4SezMNwNMR97q3LT",
  "key10": "51csPrCDcikdi1ZprD9zVdHDGXtyVqhxTE7K1if9153boU6DRnsM3kTtZH4QxNR5ENH3Wiy1z5vqnA1N66hSVKUY",
  "key11": "36oNZDaXz9RM3iPsCGd56oh6DvZY3aFjsANYHVhFrb4BUTCk35H9YybPtXx2KHdR4wyongoeabdjRDQxEZ6DYz4J",
  "key12": "4WN5zNmPxcxdqKTwQCVUwbWKwFzXNkYoCDAAApMnwfBVY3SATPdj4F8VhovP761bcpU93c3PQ88UNsMTQmbRSnnp",
  "key13": "2CBRYtRjFCBhNcHHyP6cFMGHQJnCkpxX55jPp4boCX4yrotenZkhNsSsMyNeP5fuQP4mVx3tJ7TBDqCXYm6HdM9Y",
  "key14": "2X1FtwjjuH1EC6Ld44haZ18XfCpUFQcW67R9A4cJAfh7ArxcZEimfe4ydkC5U3SjnpsZdwpHf4PMno3Ki1wx3cpt",
  "key15": "3sHiVMXNnkjQwgDP1X89TwVCfH1eJB2rTzur4mbkiWj926NXSxcnXk6we2PXiStxPJN2WuxqBwf7Qb4pzTk85ie3",
  "key16": "X53RK6tbh962uZTxPuFoLgo448QRseEPWFVcKYf2kDwkeeepHnw7jcPJ7xTXrBLK8GigosYJBHUqJKafXZuBxQi",
  "key17": "HJxYmCq4yK3Ms3BtvyGy4CcWfxZViVkeWUL54ytt7mBCJTiBWot8daMFWgxKfA7KicQpbs5h796H41RTM9cxjyV",
  "key18": "2oNDGopVxYxfXzb794DUG5ZXm3BcjhKLUE1TRWxuw7V54P9vjvLffwo4bTdhLaHHrVBtp2VLA1fgW176ZXcrgs7C",
  "key19": "5pGg5qwiSHvDSsquRgPwUZCtgpbjKZ7K3poTeCQdhC4iq7CFk6tFj1VjoyAmip4CQ33AdKNG12nesY7VzFcuXNDH",
  "key20": "2PqAbNPJtcQxDrRiNRErKyRinaPPNe9pkox2isSBE5hzXfir1PZTx1XVefrxhzvssHoMcJpuKKgtBc6EuYzer9wd",
  "key21": "2fP2WRsNMBuSzM2M7harTGwheCDPRSEM3mAySBJge69ECncKFjpuuvC8HGtQ2oKLHeBDWAgPBNXGjodDMHaWVA9o",
  "key22": "4wb4VobDZS6qbkWys6Zq16TAdvqUM1FnJnzmmzsuN27K8UH6x3JD2bjCJ9fyMDaXzGBZKfpkretB4BexR4qi94DV",
  "key23": "4JxaGyto2JXbqbSVQ3z8iqVTePVrVd51oebtkydBhQ3VX2DXjtGgArjBNBCSPNRxHBZwF1MbitxLhNeGirpbDQuS",
  "key24": "4SxVi2Sqiz4CDiF7VTPpqaZKy9xM5LZFMoW7M38DEAanF1wz4TQuVX3eEr9pfQVYBdGLTSY71WaXFPQtx3dXDWgD"
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
