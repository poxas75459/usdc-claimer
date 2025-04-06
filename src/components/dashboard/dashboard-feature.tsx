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
    "24A1vn8EaZrizwRqaDWnYVg6siAi4GJoRaVs7HpnEFtSjuDa4U69odvKK7wLD1zjDmE2zYxkNYGZmeqaptxuGF5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMNZguE2cPjfSTj8MBu724GBrCrpBPQ1EV3uPnPaHMM6vxbbJcN7sxYCTHgSyXHDQ3xWMFNfxnwsvrPSWxhwCUN",
  "key1": "5dWk21mw8xbPnYoxwcjcFWp3fsY73T7YTwdWwbbKD6vA8iHew6JE9genVVD7ycF3ijXK8Y5P139ntkNzk7PshZGd",
  "key2": "5webk4QUk8UDduQoPvKLp9QXY1sVke985ZBF3x3HHb4hQi1MMFugnEo3oHkEnorMbzfXFqZHhh6Z48nFMFQPufV3",
  "key3": "54mkS4xsPaYEaj6tcthfz1vr8foe11jf71JGMkYRFh52ah39QpS36vi7Nmfekfj58UfizryRiG1Wt9DG9Cvaic9V",
  "key4": "46XJteeNZg9ajBYoRDe71K4QAc1wnJvqkwo9Un1EkGVuEvSeDpFETfkTJBzMDeNVCC4iPPNicB2TjmnEZYhJgbqi",
  "key5": "3t8wRnaypPc5VsjAE4a1cbpNMo2oq1MrcMC3quwUWiu6M5QERyqnPaZ7u8uNVNsKZwjxSnBJh22eQLK8cM7KhkLQ",
  "key6": "4zerrpcpTcNjWNhpNxAJeLi725LynL2DkHcs5mJ4oLVkviVqLyhNX1PpSADWM4EPxQryM65CjKZS4JzAm3UJALgc",
  "key7": "644aDFcm2RmWyAZwebBvsSs7braCE1kpyWMzJVamysoUDdW22Kj21JyYQD2yxZG9BNyZv9prCwGyBkUmQMgW9rGY",
  "key8": "3aaPa5wULjvMZb1fD4dYLbM2UA2yQuDb11FsKTaFgvQjk919Bx7X4RUyJNe5CRPKcSWRARHuPYgkqwscW4oykR21",
  "key9": "TLSKtaE3mWyRdFoYPGFxPyEQTbKtrQaRAQsCx4DSYZRyFpAuYyTeU5cbWE2vt5ubNaKvY4JeaMmnQbEoX3bZAjy",
  "key10": "5kwbTDZQNwxyL5jFPWdZbAxsMBCNRArM9EPvTUqa5uRdeMaZgNp1xYVxM3e2sxWcdwMtLDEEm4gtjah8mMQtAPRg",
  "key11": "2Y8nq2xYzZNqjTnQCEQVsa1qeLFmraeioKfkQaoW44tpqvkRi1myGCUKvPQ2JqNkdALpUT3r3VppMALx3Z3FCZsq",
  "key12": "2WCA275VcH4edkWFJ5BVMFFNg8xx3oR7LyuE7HLCy75d3daJyrP9p695dFr3y2dJX47Aaa3EVwPZMQciF73zYegv",
  "key13": "Rjj2myLzEfiFRCEY92287dDJiPKigyVrDnWyHevnABGPEZVrQCUoeoxYFvEvaJUSFrCsE3J7m7id5sYCNqKAG9X",
  "key14": "4coEN83DNmByWXfcdrUEhggw7dioiRwHrPH4qgfpgoG4f6r2p2g8HM4GFMavrcRSL2UgZJMeXUs924kx5Wx4U3gj",
  "key15": "4NLkFx6pZAmJJNyLFLVH7dyE8MsbzpKNz7aBphEaJKaNmrFouMdYHEy4C4idbfokNUny753xEccFHvaN65ZdSVQN",
  "key16": "26BcHdbdoBccBwrKreRLDXcKkbZn7NuoH8kbG5jMBgvZzMdd23BAVtnU52ntB34vgmMaH4WT5Sn4q8eyb93pDAU7",
  "key17": "3jUxEH67MHWbKxpKfdagH6CVyRgtApxTj6Nc6o3H5gL8e5ZbS2kZmHrxxhfTBYG8vC4WDtiyfHtyFJ6e83ytmjYs",
  "key18": "3GbNckAPKWgw896vMUo3EcLWENbCo5c2ugmB7eASzk1G4B7iZfBboE4VZaXH1wfn4vUYHncTxjgQWwfWRmZaksp4",
  "key19": "59KkuUrS2bKRhVq1sYhZZc4sLPrgQEh4gkPghZmxykoDj4aqgzoZ4t8zBVMmhg3hk13Paumefp8X4Lo4yGxXFj55",
  "key20": "47YExxCo4fP9D3j31hgkVB62Kq7sptdk6BYpiwU9B8aHuAfCk8ACkTTnyLD2XCav1QP55W5Hn3B3CYL4QuEtQ2M5",
  "key21": "57b6RUyPWs6HRtoqmWyT6BqLBPvZGj4NyRMCT4kLuyPvShCu5xVLDi8A5o7V8ucdMZbadWq8bytNUDaF9rvQVW58",
  "key22": "3CueZMUnkcAwphBPszF24XDEgAnRjyABXB5N5QLcyKveJJ7kHApuf3Sm5CBLE65cGBeBHiwxCmoPf4Kgqa2xW2GM",
  "key23": "3C856PwqRosjkcxAHA3p1JNQqK7cUJVw4774iu85UkM5C19GrFQQCqwXjW6C1okFTAdfeDzVoxqnY1WPmy5z8hjZ",
  "key24": "pdZkZY5Z6dbF3jXpqgNYC672UsxELRMRAJvFtZKNBfUBbM5H6PufgtfH8wrVdEjf8TioiBJiTxxGWvqmVLUNAvg",
  "key25": "3MN88Bw5FTXAR9MvM2yZr4nnJjNjVmocrh5jh6KcJWTRk45N2zsxUM9z4d62aiEpt46JRTHnj2kdFpHF8ARpuzAu",
  "key26": "4hMArj3Un5SWWZZziCxkVp5pNzL73BNcVxD7SgpgCDuS6T5kPxerheTH6zgpkZm7G2t5SBhtHsqBSTMR8qZ872rM",
  "key27": "4j6h5vQxNkuMV7AfoZws7iiWbGW8zVpj5Vj7JvNdyqTutZmJoHiXc1aJHdVKx236juzoEBMi4gZsoogrbQg7AUcf",
  "key28": "3WeWdr2cdP2QoAxjW1RXTuPXCnAhAjGP6J9LSwxKnofQ8951XSqe67Mdv4DGFWYDMXz3GbT91HL4uUAWRRj869e8",
  "key29": "3hzTXnUYeBjsTsF8hyhxTntuQx16CJTg31hg7cAKsqvgboUoEAzrdooCCZk7uWugBGzpEW2vwxLsR88ujmmRKBKd",
  "key30": "a9iiXe23HWM9AQhoUhkaAgNgRZPUvcz3KpwcWQusKKaEDVaPjxFkp6hkdfq6ZLXE6ZcnQusQzCsHP5DCe4kFVjt",
  "key31": "3qgrf98uZfcXuqJrSfS9iEJ1e9FPyVz53ZUekJWpQdunW3g7MELyCUhL2znFvzmZA61V1gp3rLGz5XvdkM14dpwS",
  "key32": "5guLdTvmYeqeAmjRasa6igwpW4Xw4PMAzKdoxjV5Cz23wRK5NtBQDxVyf5wfs7tvspNfUbXHPjrrKsFWByu4dj4S",
  "key33": "5E2GAAqEjMhYXtSyYb4qmx3iKQcwsm9wKvzW4qDR3xa7cgTf8bKtJZCQwgmb6FQLoPH7HRHzy6q9AaQ4xmVoLqYb",
  "key34": "ZSCVq9ZVvQK9n7kwbdjG3En3xxMoT3tQ5GxrReKFbzhAkz2bmAaYu8JNphMFpMhtozFJ65PA4DLxFZXGywXDXi9",
  "key35": "4KqMA3CT8Q1tzTDuZ9zcxQkEfSJZiZDQjfc7yqwaE57En1jCJMHCDfSRP9J6rdP7fFzeZy4qYfXCANrDAP3ToVYW",
  "key36": "5wHxZACZC5hWuWyzi4r8aVip75dMpTtkpS64XZDmhzCGkY4BHpaHjKBbZd85AmZjCPzGk3SZRbGoVaKVtPJigSgM",
  "key37": "oNdiVbvXrpsvRi4Kib3R2jhiu3godRY72BbocQrrxJv8Q6V67wRSwiwUKqvkpx8aKmhVKs3agyKmbqWVm6Pi6ry",
  "key38": "3dVfiZQfByvsq8MVWRzTQrjB9RuRaYxbR5RFZK6eJvhCH2C8UzrGU3ZaxfQKQinoVZHbdCtno8c1M5XgAQzLc26p",
  "key39": "AaZ2DKSez1rN6onJPcSREnxtCe85T8GVpU1xZ21YPjWunjtQgT5mfqrRG1Syj3raA4EhSQesbsLduwEf2vHcewx",
  "key40": "3g3gFpXAQJ5f8siWiGLE85PBo7yLmQb8ALv2RrRqyPMH3TAn4g4f1MtdurNNLMgtFV1yRU1pJubPMM1uGuenNFfn",
  "key41": "2mqT7tZobPXhBkTByfCSqHVuRcwpuPPhgeUkEmaofFySt98b5Np32rw2egiYKrqcG6gvcW7MVwrjgFkPkxpraS4C",
  "key42": "3BwH71mei8MR2cQs5SF5g5aPRPkfUjeAzmGVGVv3fpAVMUX2WtWCm8UhkFKtjEFVPHHvL6n1L2iuvfiZ1uZVCtue",
  "key43": "24C4VUumcMMZ1HrQv4mhDWsL3XTEV8rdu2eLBSQgTLkNEtixdLmXnoqgU4dcdXv1PiAhxoQcGqRQ1f8nhsffYXsL",
  "key44": "4omtAVmn8fWr26gK5SBuffW8RELQaWzYBqYJWQwWQQxgFEY1xoWfExLdsvLPbwRSG4P2GvztqvoEQAq7iLskDFpc"
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
