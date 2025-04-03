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
    "2PkF6XXx5Ro99ack4JEqGNYKfYV5ihVBbofExk7NV5z4WtnwVgZFi2GvnZ6gvv7nHwjfJyysQAzY88NWe4D2cgXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxVtkdZ6gsYKF3ThgfAjHRrAbWUpUQTLssNpkVX4ZNaandfHAp6h7hvEUzWpfKg9kXT2asPnPvZW7uxRnivCxxv",
  "key1": "3RBPLj8ZqvodL3ymj4gsEEKKftDthfPpqSsQ1NLPthFeC4L64iLJN8ob7N2EZc3B57aGifJvg88Qy6fEw7RCAWZZ",
  "key2": "5eJttydXPBcux67DjsjTHJAdfWdgenJ7PzAZVT2aCrrRJpMGziST7R5U5aRAw318or4n2zJSDaApSQrG7Kwm7fSJ",
  "key3": "5CJwJ4fsVg1mHo61aBvU9VbHKJcYNy5f5pHUaywjryjZ7hNpqHLskByM4GSvEoa4GEVKQqBVaRJrmr56vxY9G4Y1",
  "key4": "nNf5S2mesuP1LNUVhJJaiDJLTh1vF3K19zVJSJ94zaAu1HRnNbchjUJX7DKqj9L1pUCV6G6soyTey2rsJcYevuj",
  "key5": "4WDGdyC4MAynLadicxqqxZRj1ZJp3j16e99U4iL9Nz57SYg9FXhjqqWEi6rCwdk9Nr3uSuA7iuG2nBnF8RxukReR",
  "key6": "3od32aosvRdgwAycUVNdapG1pKZkK8K859EJRhajEtxTsCXUzw2Me8U2UGK8x9aMdw2YZ3n5vJssVCTS7dM52FVK",
  "key7": "5dbwqRta6tDJkVMNosiG6chkxbiBYSQxum1fC2ZA4H3uTxjzWpJxzxFMuxRTwgNq4bEeNEKKKahJkGQyeq1W8P5p",
  "key8": "4z2DGkAsEvUaeDrCRH9BpNuboJdFUQZQVAvHRNcqh8bPqUDXsvr7oGJgG4CELvJBz8aACr1uM8cGrKk2HoeBfHeJ",
  "key9": "2t9TmA5KwssRA2BNsNS7HEiMyPWpWEpJne75LUG5xCkoHFjRcHFAduJAaprwe72MhkKPFeDvJizMRKFPACK225Ry",
  "key10": "2hbSxSFShz699kpW76ops1nF228QsW3oNRgLSb8tb732Kt8Nq8eNbxbV3NL7NivMmw1tjqkv41SD7kwsL9L2CBB5",
  "key11": "3Aebdtd4nzzJ6C4dd9z8fSnuiGdoSAgnKntfaDVdyqpwXi6sXwN6WgGCBwT9gN4LqFoiiChHdxWDuwCt7nKwaXWp",
  "key12": "5S9kqhxYWZfjgottnfn7zvyws23mdg1SJHjaBomiwkJ4groLnPghXkRCsrUXvorm4UnHQ3GvuhbK3vaEP56twrNh",
  "key13": "5Rm1CusHs8sXvDtjA5HjDDbNHmq1cQe2bscRPs7Aw6oEoW14Q64x9G2vhLPxpxq56g4zGdpAPLwSnmoF71HiQgKa",
  "key14": "2RpdbHRTEUbhyrVp2dwfZmAANJUT36n3SW79cLxF5sJLMMh9d4698Sbzy9wvdRUsjmtkApMfZuLy7MH797p2Q3AG",
  "key15": "4RZdh7L4gcr96rZV8GbYvN9jZwaXfUoabKYcj6DtSkbu5mPTnFs4ptsmD3zmmK5b4aGuX7DhfdH8N7KD6hLNdP7i",
  "key16": "5DuuvKN2i4CewL7v2QtwD8UArYidb8rhgLmug1xXU2wiWgeL8rpSaQfzggpJpGPwCo8MhVUhEH634DfjUEQBXZza",
  "key17": "3B4QaAFYhm2jkU4WWnSAtdjHhyY6PesoaHE6pgzNJAPdbt8o5NBXK9L11yjjejnG8xbeLZjhxwfj7ArXCyU1VypD",
  "key18": "3VbibaZCWhZ8GmorxNBK4jf2fg3Qg5XWMFyfHLjXei5sbpZ1NyY6ZzusHvWztcE49gmrvjxseLneEfK8NvuUroS8",
  "key19": "2BeHNdTz9h5cNPrp8vcdPxEWkNojMTJpNsxiZkXFnTEYTRaBDeXwe9jCoVdcCciuZdPoFEq57ge4FABNTbrVTZ8e",
  "key20": "GfpuvbLPRafKd2LgZx3X6Wx3w2gxR5jBC75fnxmWNSzajvcZR9nzyMkEYuZ115LWbZjqrG2Rb4zUxb8Au691yy7",
  "key21": "4eiqewVpxD2soP91XYvF9DqfkNRVEACo5mQaHKcv4PnvX3TH76hedmRV83SZV3ykaSQ1VtGUJEEqn2PAoNgsNBMh",
  "key22": "5PMPf3tzk8JCQSsuWUqVGCoeQyNwgTV2ZiuLAK96eysRzinCH89i51Nsm7Sm8cbr2wnp6Snf5w67dGwG4VLQGUCp",
  "key23": "45x71HC5BK3Z7cyxFfgyQ34THoWcagA8DVhnCaJzEef3HBxUzG83C7w8FMCUkCu8hEj1HU8mo3A6DR9zCTgq5nnQ",
  "key24": "XWG8sAjx7AoR3D8mMqb3Hc44yKNZ3tyQvioXJ8kYMtg1kdtz2uxvH2LK6hqi86VDB9Qg3CHEqUKqJ8RfLLdHzCa",
  "key25": "5VfDrtsEXCfi11v7DkSAUYH5dA7QSRpREH6srdF5fZs8Fqo4CjAzEQKrQAVHHmnvRwnvY4LcouV44Mj6r8Q1SuvW",
  "key26": "4Q2VcvNnKNxVkowYx23NwnXQNWf4VuhXJJ2mAoB8ULKmL1kHcdM2kJVwYLHWBiLyUoAbJM5vHJ4eyCA8bNGzPckR",
  "key27": "Yw2mkLQaGSb5L5CEgnWpbEgc8vKGppazUks3iVjLEBkUdxhrxgfJU7fmpNvhaUuEB41Ugw5YSxe6fGqkkwg4AAC",
  "key28": "Ce3nJcCtdT1nawz1JUWW9txE65nNGMLnfN11ot2vb3ACgLfmsKZg4x4sNFyX3XF77GWRQcRYzoQeWgdMFyBrLzq",
  "key29": "AhpVQNTX2VXgpF9dCFt4jRGGuoTLGt1xYE79qsHgY35yUsc3RMpWaert6KokvnbjHJUUBT4f9ubwQeVDq7Zfzwa",
  "key30": "4Z54DC9CYCyCGdDc6uexbsL4dCcG9UU98VyXQg228rbKTWrELSn3JEhrirpwCu9QgAn8J5ii6ojAbkQooqUqyts4"
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
