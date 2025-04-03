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
    "65ater9WTUgCR9Um4y5bGYEhGY9c5ah1KMSWFFLEkB3af1vx9QmdY83trbS5CwXwatrqcKG7JcYTuFMXdD5MJMMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JF21BKrjn91hqKDf9emiNP2PFFVFY56h2NvdLK2ZMi6fmQqgRV25GPG8NWvTZB8pRXDGYDMsq5qdtJ8prScDRQx",
  "key1": "iPuisCV6KD9EQnc2T8PYnZP2ta5KK5bEVzCUZp15hWxeqi8ywW8VMSuH6xeCSdbSMy8GxYmmLSretLJJ5mqMTHr",
  "key2": "5cRp48TqN3wXrrZNUhevBTLHGvj4g3ACuDvhQjZot5kWbS688irJfLimBpyvZwJaxsDonm7UERyK9y3sSVKJZbEk",
  "key3": "BnznMy3y67VXDmJfFipPjAwY19rj734H8X8B2JcNY56Qrz6PEyMNJM9TUtVTccuAvM4ayrVv7g2y7R5PhbG8QFq",
  "key4": "4qpKnNt2azdyJHUTCFtC2fFngp7sHenHP7Xmid5ZuPNUsgR74vxZeEQCRBQVadoBBnRmc9CAxw1STGuyD8Upm4kY",
  "key5": "3VziPpeZad11LmjY4EgtQa7qpHtN25bLJLNm1L6hF7KFEVWnQoY7P4NPwDzTrRb3yFv7FvVVtvDsmJMKRrWqN4YH",
  "key6": "5czGVGxrjhuVhPbMpzU5yjBhqopic6bPuuoqxikrgQp9FxwGvK6MsyG9k6Cwi2hyMxq5h4kdnu6prU8y2QU4RnwF",
  "key7": "3afzq3VgRaB1BJBpFmuQgyW5N7o1qnRdFyVMwLrsWkipfSUiEg5x5zTnA7265up1EufwifVo6NfDZhh2y4XuyM71",
  "key8": "3uQkgS1y1fehzYPHZjcxY5NmuyGc9iX3WTv7mu9p7aKe98LHo7drGzYJPAdio8bH4mpLURWw9ADGfQfV9BUEiAXt",
  "key9": "4auLyPd8HcUoMx3vqmrZhR8eHRJPNnWDCh6LjsBMWJpkacMWsehZcSPe6D9UgD2dHC7v9P3qBUSE6MBySHNpz3tm",
  "key10": "5GQPKJXu2zWhF5MBMTdQ9LSQzYaLxGUFoN14Nxq75tP8rfNELbgQ5v7tT8k4orZ4w8x5BzCex6FXmL3qm7jX9B29",
  "key11": "2e1JyuqLG7beuhrihD3qn22nyiryodUjpyEnTRRpcNzZBnsLZ4xabGpW7yAT2MhQ6WiQJN2m22DkvbmrE2LWoHEp",
  "key12": "3so9hQHYdAeAowmkj4fokMaVtwP5HJam5ohyAXR2xAbaA5F57p4c5DeA47XDVndMerqjZCK7pBjXdYz47nkvaKYM",
  "key13": "5fS6AUrzuhUdYWxE7yzygTQsJJxCvUrfwfBcuqsEWoqak6ci5A2T54PhN2HymDiPKYnx9Lb9nhruFSXRF7SmZJPs",
  "key14": "3NF4fm3ABjfEbHvTqSnM15AUeegoYZd8EHYk692boW2GADjVZ2LUWMxH1GQP9MoiaERtb4cCPh5j2bAZm1znCmgN",
  "key15": "2cnWLf9N1S7KhqbqDBFEejg74Qm2cKANTxYCj7Ku8kgKi6Z2EPTBaFKPXfAUdUBqJLDV2DhCEUt7oMgK4nXTjzbg",
  "key16": "4CidFu2icpR67mmtzUUwA8WXdxiacQjBMuHWeYBEDQybd1bwSpnfsNF1HgqEKQXuuXW54mqqC3s2Fmv6sMggN66N",
  "key17": "3mkGtzFueChV53RyxPTsFNJgL94BZeuEzPYyvXXgbjsHPxamasHWPfAGLiEG71ZVqJPiSqhV9yjdwymYRyVbpm2x",
  "key18": "3fmkr6dE7NQmTZUUre5aQ9jXoFjTA4JVGhFdMpSVe5UaPVFvS9ge6kcTND94eMujygEc9vnpU48wTEChGRkpbTMJ",
  "key19": "drPLDMMQgtuNKYTzPhY4GovSZAcDaGULc8p1yvfuVU9piBB5JeAWCLXBSAnGh5cTWaehoVbB3zKrnTU9gBNoMpC",
  "key20": "3HheszSzhwbU3Mo5j1Ai3BiDV2hP4N4hPrjqSZan5F3jdfu4SHWoGtBLj3Q8tKujeSUe8onHzmX25iU8XQBAKuo4",
  "key21": "5VP3UaHwciQ14ipD6BrPEp2wGLt9GfBmnfX6mzBtqs5kCXmFChHoqA6RHsMasNFRpqEfAVrspDGdHnjCEbxr5qHd",
  "key22": "4U8ETACQBgthfmCVUBz7PSDXpNCK79pUEqnzoX7gqwQ52bbUqcxeqkNNtnpaZWMUVmDEdy9PoewtiSGiFEu5gU3f",
  "key23": "2Mdam1dFkUijPzZXTukMrg3FTTsfvMwbJ4X4vibpqVj9cip7Tc3T3ctnBMAtpXfyX69BGR6KjeS1t3D7gJ3VAW1S",
  "key24": "3cEAa8cGdieVbuniyqmVGfpUP6F1w8X5V6dynkT2otbh5fwTQZ59tJCBEhdTZdzv9rmXPFtCMGdRpPts7Wq1DCAr",
  "key25": "5K72NN7fkQzaAx63AM2mAEKzdesAeobQLW4LA8CvHdtppP4hea8WtCmU7ku3SJpJJtMbZtmXbeo6AvGk8Nx9VDxA",
  "key26": "3cjqcpzt1jUnB2ywwWaBP8KqVEtctWzqVBWKVaQKQ8mVxdkMvZBUV2cgcEbuZPxm572S8RootDe7MEhmcUs3wEE8",
  "key27": "M7ZLdbpTSjkX4K5iLTBqZSZ3sVVC7APZTx3MNNkDGvtFezu8Tq4WToVGnw9rgGY9PsHtyDA2GZEbicCxFdA25QL",
  "key28": "2P8uk6cHg6xiVi2WGXR2A4QuHxnzGza34VbQr1Mstr35uwHhhCuSuHEi5vCb51Yna52bz8qke2b7JopBchuyxTq5",
  "key29": "4ej2mZv3VE6hBcmkkzEZ7GuQMr2Gfw4Kdh4hdYxyJZ37mLoA6aJvoUJVX7JkVueCzg1XBjFuQVBeLAhLYKByHrBD",
  "key30": "4rkitghdxMhGs8AuxFNZQPo6HcJQ1xWHZ8RKVfhyW9Dt27QNjz1dBm8koCXwKFE8DvZDgej2ooFuoavmPpYhAtFh",
  "key31": "44X4eH9SgaymBri7ZXn8mJsiD3yZV6qTkGYTNugPfVWGsRNgyX8EoxLTk9M6GNBEsFnXLEgYA7xfU6tqq5k7mWaG",
  "key32": "66DkTC2uyjDLPWynvJGCaGFRPzj2uZUKiHhg3YnHBh2uyS66yuZcNgpjD3MR3xqnfAmRTEQDUK7MgAQAVis8i8HM",
  "key33": "5PurrSLoWPEZNbAiLJjyGBKDdmtBW1km4RrTgR974N3Ww5MEL8oBvAsXEjQFAs34UM9MBzyTACp8zqmS35ZWvVxs"
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
