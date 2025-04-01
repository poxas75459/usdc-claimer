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
    "4q6pRBM2MLLzH21hjcWvpKCBEC7b4f1moJjASKG2QhB9f9TTiZgfLkqGtxfe2vNZCofSbhj1rWroKh8XYC2duXYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3xPD4JEFzh8EHfQ9LFPk7tZzD1ERn5whijyfGVzmmfxNL4kZEfaY218KJy2MQ1cTcnJyjmewRcyhp1Qrx1SNeU",
  "key1": "2DjwQ42K29KfT5Mjtzo26hcqT3KXzW8scTpvewMQzwnqdtbR5Nukwur1kKoFKogB8pENYHJFgLmwTinaikoyJ6K4",
  "key2": "afZoLVGW2GfAkj8vZZQyLxNCt2zUL5jVx4RPnNAG7LeYapTzWA4PArLEWTV5tYSzXQDA52QYLNeu2b22kQtwWDG",
  "key3": "4gLC19jEjQ1DqSfEEomgDphVFrfp9p4KLhUuWZxNU1ekEnoKvmPhmDLXfgfMhhorCATXjJn9u4ubiKEHvJcAw61o",
  "key4": "5qer1U5JcAC1XJxrj7yqxwKfoS18Ny9nf5WeJdm2ffAUAp5dSn5wMJXrSx2irLXjZh5dzpuTo48pk9PLXDAn8fFA",
  "key5": "7AgfSY3Jy4cumVV42YMdbioYQ5thNHeLJPsGenRLRZXbFDCnhZLwPNZqMWig4jTmPwzngDgdDUpra9c24Q52pYc",
  "key6": "3fumVyYKETuNzgvBXUMyhkAu4zdMKQaGTZaDMmnHTSjaJgWd2kkxxcGLgJu9RdSrFHXBXGxpzabMY3bH65G7qrYA",
  "key7": "4SZsDJETjoi5uaHPqhsvt2vpg6qpxBZMBdQTuzpEYDH4MRnSPcjVqKHrq9TdZJZxnSRF9maqkmrWRJLtub1AHx6K",
  "key8": "Dw72TKi3TcmCHr1GXDKXfGcXwqDJhzu64y8BXo8FDxrXweNfY9SAmDqti2r5WpbuT8L4NGKnxbWF124xrsPoG4v",
  "key9": "5kTNCCAn48kYBAa1StVppGoR1grpGTTUaUaDyQY3a5AEmgR71ifh657bc1VJsHXrRpYozdYDQ91fPHzJiWDgNq2e",
  "key10": "4ogh9vhB4no6fyVp85u1jc7kGJKvbGESj6swGz7Uy2Y9VZUYeW918v1BXnmrwCZSJgKWsES8H8DNGg9ihLSyDMLV",
  "key11": "3DEyUyMHT7zn1UgMQ2kocNKSeSRNJXRhvrDnVQ6qAAYs9bZJAKbfBUP82nWaUQMUaC6SQLuf949HBcDD3XP81tCH",
  "key12": "2Vg5c1DSTsrVgBjcocPA6NppZVYidGUVm7r3yQXk1crnDtgQL2WBiFCnbw3HiAfRN8dQP8BFYj8XHoEz1fbkjg3S",
  "key13": "3uSsfTSHQsmBydMnR5jR2XYC4DF1cvaDAu1mYujQKxDmoWjK1x3tNfok14PWvizLBY7s332ekneZ43LtNEBfEkoo",
  "key14": "4dVFRw3KpFaat1aevXv8aoHghVtgs3yYacgih21LdKXqhoTR5SEFrUJfpLa35wKAVbDbUNRq9mzxjeXfVKyHqYdX",
  "key15": "59CqLe4hkvFntDvLP8rT1cScHFemfe6bcJnSiC34RHypRWMjbo7Jj58xUvtPoUXycByCh2urxFe4xcfcPKhuHN9Y",
  "key16": "5kp5jd745bJcXUbVwRFG11z9yzXK44HbLyBCFSnmERrYBmFHFsuDHLRBif9pHvxDYrev3shZ9GQA2845CrGc81ac",
  "key17": "4nTGbjwNhEY9VuLsjvW3vamB47CWdz9HAwKehe3KG8hEGJNytztzEA67KQjL4BepfRvnHPNXpjgDyS91dxccbvnG",
  "key18": "3pT6cz3pCVryxkUqGwcXnQfKcLmy5cofcQDGRFgzzZTXDFbHkxiQK8fLEEb767BfCcfGcdjazfyGZJ3SADAsp5t7",
  "key19": "DbwdgWvK8CDwDQd8JMLekK86tV2yfin8UpV6DmvMSg4S48mAKsQZtwSU39f9xpz2qKaqJ3MS6mCUrDw8Z7u5MvM",
  "key20": "2WAtCP3SPwnKUwsqYkDqo2zpYuHSuUsZk67rFacVhSqGYxqNb1awtfddPDYz5aALnddPk4vRgxXvZAT4ej3mrt1Y",
  "key21": "5nRBbSbQ2TCvHbNp2qgY3WNnzwPLYB1VfcPuz5x8nwkvC9WrzRwZd4wR4gWyExJNAnXAE89FGAVJnnwsL24CSX6o",
  "key22": "3yESP3CLHEuc34UqyHTz7MBNSS3pqQyyBTxReyhNZymH8hDrfVQxbLeYC6CgbmpAFGNKFdsdMEmV83rQjMZLZbDi",
  "key23": "2L1WpvvzguWNJ4GT4gRYeBvo7q6ZXo5KvUYPUZHU5MLYEpd7YXFCRPWz3WJjYeBB2oTs9Q7e6rPahJ4SPt1SqVg4",
  "key24": "3uKAU87Rrr6iX4YFTMxeGBFNtwXer3vqrqMUbSX7mSyhNiPryHdqcvWTKoVyjjNFSZo66MdHM22obSH6NJtsWKiE",
  "key25": "ytQajbUNxSfEYFqGy6U1i8ohbvZFkKWRL1NrZ3PXZoJEVFB3dhQ2YjVema8tcrRDbUYiGsa1VjmFdLtYe9hhS4Q",
  "key26": "258wp1QGibufCiMmBGSDNt6Q8Pc1JUCe7jKRzg7juBwFfMrYM9CsJKqaFqe11BU8AhTa2gzj4tpfeXTnKKCv2vuK",
  "key27": "2K5SvmDHcmCwWMDALTZiWYPa9ugMiZcgSFjQcFybhPubyTZkUoEYRiBtUsJ8LZtHharJeWZyx76aqHpMkvwvsys9"
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
