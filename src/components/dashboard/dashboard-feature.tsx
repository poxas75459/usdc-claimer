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
    "vbrvPY1Hes6HvarbbEDErVfD7JEcr9wtpRGBnKRwP2iv1aUtYQ6MNa61WY46ZKs39g25UfgA9ker8bFPyGXRsaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4vmzvZesoNu7AAdSmEBWkHpiEWK8bA5ZbLNJCNEY41iKLsUyuYffW64b1TU8Hj8iViUyx32AprRDjGyWrSR7qE",
  "key1": "5Mopb3AZBkyPXGcYML7eobR6w6Xjd7Yzi1NYiXFpg6WDBD1pbNVQGZudUz1N9k53iwoSbzjtJ2iwkymFLC674F9H",
  "key2": "4JC6dNtcttXe32fQaV2h4KeypELVJTFRXxDVPouZ8x1oeANQEvRnacavjMYZH3KhraezK23Hi73ufsk3DtUdzkPh",
  "key3": "AsQQv94GXbxtcfiGbd2TEeJFzZvm5dZ9f4LuxEQswMxnKCeurNsa1R7t8KC4J1XCM2b7DiK3BNRnjVBA3gmVGW8",
  "key4": "5v8qDGBGrtFXPfdpgYQZ1rhBnAdsn6BoFvMX16fGjpgqX3Xz6UQLaNErgrPq1sAFdzG34wTQEtWhy4JwtDR9B79i",
  "key5": "61RFUro5hQgKMpj7fVNESYQe41nYGgYQPXqdV6wE4FvWwkcPr6irPFezrytht736p1MsPQosSeCQPn6joKMHC7Yj",
  "key6": "2514ZZBWPmFq4Srervj3nJJVDSdkHxVxUNwzn5PBJWXBwFnKCJbQQJiBdAn1SC8cps3pT4NEXoWPC6pWs5cSPfJE",
  "key7": "Zv5Ua9NuV768GHtCprYbiq868LzyvUY8U3YdaDb84CCqMM8ufVk6zgBJr8E7zNMsuW96GtbU95r3kf8AQK9Kgo2",
  "key8": "2LueyGSkvrHiJkcxGRcAd91xz5T95BXsBxjv3guwTf63PgZyjx8DBZTgyqxqrLQZARVWt8ev49MbTZHVrCkstEWx",
  "key9": "4EdZLfeHJBRAqyh5DtHCLCZFPLoHzCcCiyu5tfMyZSg95iTP26PFQsihf74dGEELLqGJkVKCf4e2hgg7D6CbTKWf",
  "key10": "3rju66q4Ltyn3Gno4GKUFsxRm6HZoWGePs4841zuicy8j4YzEczHdb63ZRwcwsZfa5To3GVxyxboJCTQDQKuBpqt",
  "key11": "58vP9UNrHTV7gjXDqt2h4yKFgRshr2MFJ7TcRwdywEdHwdwXyPskGgRgDVt4oD2xWAV6iV33L5bR8Q2Ht2kstXyE",
  "key12": "65kC1W8gZJzgQyDYcT4K34dTJZwLNSaQFp6e7Z5R62HMZNG2FN62pJM7pX1bPP6Jb5bwva2v3YQ8aRsLKFj4zVNz",
  "key13": "3KrUooWytZtskWr2CsiWhTwbAhBR6ydDRnNNY54fGCWAB4VYSxKmYfikJatsNrNCxhyfbF668saKjKPsrD1JoE2g",
  "key14": "5DQ6sd1RcqdaDeYBXGZQP5PqCbbs9pRpevdSBAmMvb38p8bnA6bcgFFAkY1dCCssyGPTYM4fXkVLj4qZ9GDQyGpe",
  "key15": "5mcEVpTV5VPNrKMPB5otQ1aEf7hbCNgRmnYyHJ677byzZ9uKZfbMHUvdGiFdL45n2Lx3JafB3GRzdJ2ZWEH7Gd99",
  "key16": "4m4x5xCpptrWa8oau4cN9UT6vFijpX9ZBuMZd31hA7abKvrTio1qRFac3X9vAQyx6WWBB9Mx7U6nj5wUSHCYzGjU",
  "key17": "4YzwYRfnT5BYg7mWYCP97xkLs79Fj4E3m1WSf9Zbz68SCdgxxQ4msHeJM2j1virTQVja1b25L9dhPQ3cbPQDMmvL",
  "key18": "DJ9HaJ2FjqwqhLSjMgVyS2fuA22kZeBmiXBhmMoMt51A9tmSbNrpUWZZAXDLqMVrTMW1xe14AEFuHUMgtHhMpQb",
  "key19": "2Pk7QHjM54mhjgFXSzCZUEwisSAxrrFBbGeHknuDDK7cFLRxwEHP4DkBsFXkvLfXwZqy9zy3m4SmhJaFh4Kj8iYa",
  "key20": "4GJSTPG33zqZHEFzaVWSiHQexwnTCMMJxV5wZ2PqUep1bwxt2DCZbsCXQKJvWHYm5d4SMyrP1FiZmeCmbScS1DkS",
  "key21": "4pDDphNJwHqwXEpMZmFMuLqSzGtav8VJjrHH6vBFVMyeu4NaG3PLarme5t8TncAKAgLHHsmpJ6QvaR38YQGrQGxD",
  "key22": "cCz9Swps4uapAEqA3KfSE5qKS3nxnUVcDWdHnW9JRWjrcX6PLQKkfU6RvpbwSf3CMzhPq1JFUFbiTtxsF9SsQex",
  "key23": "3USNfAM5B5QrhrGZcABQR35UM5hyJqzZqN3o5Er9TRJ91tDEYHJpq1DnP791LW3FgPcR9PJBSqnSb8mu2c3WvraF",
  "key24": "4kp92Jp2EqdKZUkJrShuFBYQf9Kis482J3257pbM5wD5MkgwbtDaGcMwQrEwAVAHfSC5v9TACUpAvx5Y8cPjWLwY",
  "key25": "47y9tQ7rY5jfqS4GdAhX5Gbh6eq8VkMHiC2yfExBusEhdgroLZdeJuopfXX5LpTAbv55VfCmvrJwDoy9r65NaLvh",
  "key26": "5N3HHM72upKZQNK2Sa1eE5tT7pNtfH9BffMaiRiHSvJ24xfM57zLPvvh6PCeBpWe5cwE7RYHnd8YwT8Tb4Ge3fTi",
  "key27": "2wc33vFgUkLcYLjWXjgFCyD5NihGKfsTdF1KQJUEYqsU3MsH9Qh9Czox4cYj62utdSz1hDniVBUqDBNwwnpbESf5",
  "key28": "53MwnDRkHyGkphY2PVkxRgEckcaytmLwvUE4N4oB91WtPMWeTZ6ieapWjTRpbThAVM4HJYixqn8t4MPjSNFf86T1",
  "key29": "2aJkbhWtC5eDdnhuYbdEPWcnQ4ZXok94BXzsHsmtaF89HxXzLo3ovWS3GHgzRzRaWyEuPKKJhUVHFQ5sxeSKdfHU",
  "key30": "hmFo54kbtToaZ9iT8Dp8wnAMupQDXpP3Amtv8ciid9Pmwerm1rhJ5y22MTKwUWvvmNgD6kifT3w3VxsSoPfifCB",
  "key31": "5aLtqgKhDT4fvQjYazq1hyJmG76d2EunXtouMxAsLQdW6ioLsZVwETqrqHvPssUt34YJjW37LHCfb88CrzZyYT1Z",
  "key32": "31BBQmJG7gPqwbs9NhHLZzJXRSV1CYpW8NpyAUJgHJXgcBeErJbw6SapXAcKZrWqTf5JaLsEuKuG1hU9kF71SEaP",
  "key33": "3hqq8ToBnJiRfHz8kp4iYVFJFU96Bt111ejKmxQFCngSKGxUvSiDecQvbvbpZnFDFi7JR5LDyPwUmoP8iLYPH2GB",
  "key34": "zhN8Zo1YiWyZFghTKcvtbPU2tCwuqLLwBLb5etBQggHi8U5htRgjD8PqiZEVbu35JTG8UbkBsnebzWJ3maT5wvW"
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
