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
    "5SFAPdjcYiiFGFiigC43g4s36fXt1ZSwmP7sb1t3RR5YqCLAyW4wgricAa2xGo5Z6Sg2zf3jB773G3qFyZUsy9tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azDhME9C7GQZ3RxAoiF3amkCohssTMzFHgRSjoRR5Yoy5TMqY1QFk5pHWBKwKf8UGB7rvrd15Tm6wRBtLfJnhhW",
  "key1": "5JbaJQocmRkEP3XMsYN27oC32Euqv68f4asHfERRqYCcfeKYC2L3wFExCvssq3RiGsbrCJSD8pnaJKRKtYNtD7fP",
  "key2": "3A2APpXZaxvJvjSvwyxqBmmcDyFWyxtoj1EtaBEsWwV577Yk5G5yz7eUnEV4NUeRwtYrEWjCQUXVcpZUayP9nhqG",
  "key3": "RAqoDr9cxFEdP9gZSmDLsHk4bpMuXM5CkSXmZdQwz5zqm2656ihtyA2mHjnTDMVHtbgx4pGFRZxw75oYyjyoKsP",
  "key4": "4tjVxq1NuLZKmyh96L3dDcL4mn8XfL9gGMqDdu63UUenMCbFLrWSYG4i2vtx756yzPAqfLKp8GYiuWNwELXzpcf4",
  "key5": "Amu82H3xGBRY5RwP5khjAAQp6BCxkjkEKWNtdk8enbFErDTgD5rtfcyUm9nFLbZG2P6DpApKm6n2eNzepKSGGKm",
  "key6": "7y7qpVzR81KwH2MZdpxoPKwHUhAU7BdCfDgvnNB3sY9CEkv9zZAg3BWh5ReXhr857CT4M7k5jgMw3ry8gB71MEy",
  "key7": "28QJyeCzzCndSKNKBgMkHR9ofCLpVS1wFbMXrFCsC4AkktLHwPH4bsDshWLNGHs5ki6sC3nAzLFHQJ2LDS4ckgov",
  "key8": "3drHjMHE6NucG2s5mRF4A9ti1dSMq9oQEb9ZdPSvaQXqLvtYFNxcWzQHBQwnaGHhwYo2VEFaMFD1biaXHNpmzzhP",
  "key9": "23o9MUN9f71mTofe1tCF6ytLfUo7UoMD7v99oRzMryQ9zq9LP6s3sb3QQkn6muf2a79pDrkvemYxufSduncuPEzm",
  "key10": "5f5xHRaoy7i1PWneJKfD4UsNELz7hSReDgyuA8L9kqd6yH7SUpQUmSuZzD1suijYYWJhNN4WzmDzDWWwahPeHbkx",
  "key11": "24EFDLxztJp1jJ3xPba1QYSe2WuqfkdY6KxpPWQVmMWj5WdCq4SUt6v5tfhvZa48mtGirypUZFxCMvxxc7wNHPJj",
  "key12": "4EuQZuSjYTvXQmFvYj3WLWWjZub3WGbF8zTspLqchvmGChFspYVyB58bMverJNUZCchbdBznq8RxaeqBZA6J9uqG",
  "key13": "4a5i42GNjPDhFARLAGJ9fYKxffcXvo5JzGpPXBSBsgQd7EBfhj424X7gs5NvordbwmhZbDCGq5ktsKZdcWQAWi9V",
  "key14": "4uuWGAMr2BjhqV7ArqLxZArrZEXgxDxFrt8XihhEwEpByFqcBj6yFmBNz5xp9AAUA2sRkGPt9h2WK3aHzmep5Bia",
  "key15": "35w7aTmfVcp5Bve9HVeMqYhqpY8JDtyhfvuLtidYRDeVHN2qLQKfhNtDH61DbnBARML5JD78AFmuhrZdRaawwseo",
  "key16": "5GUfT9eBtbyFAMGhWTKARFkr9CyTCtteFDg3wZctmywRYfHV9ZV3mSRUzGqq7iSc1FQXyoCdzZetFLxGesRyq9HR",
  "key17": "5mPJFTy49yhyXRqUGEiTQAuLvTTJHWrsRgNCzayDUi9GYEgQrNQcuUgyfUD4spdfD5YQ4d8MWTt53Z3xdqte5teG",
  "key18": "Ub4pdzsuXw4rpauWngJMZCWSP4bteUuYGbkZz1RrcstVEzrXwtuoDTRhc1VtogoXFTYCdBMYYjGN78Pn3kvCkAJ",
  "key19": "2bcUV6tmrQjdEtiMwC8oeA4ZT2hvdNRPAT1M8P6gFNJcpFJFadon7Feh5JDV5PhmB8kQB9o2eSaBjNUyJ9jx9ce2",
  "key20": "4cbzKurCjUWxprFEPcibsxd5fLnBKAvpStDUqfM5gd73K9unfBH1RmNfb8DwENYBkGrAZxziyxxx1rAJHrCpF8G6",
  "key21": "3kEyeqy6bxeGtDN5sqU9PWo1KNE38U1tjq6uNEJfZZaEUhYpD1uRaZWCjozMcVGVU2PY3AxYMHtnfFRBmdg7XbFD",
  "key22": "2rxi7Yz15ps6LuxwotbQsVqzafvte3yPizotfq8dryEYKRCJBoWhE3JS11pZarD1yoUvMunBHAy4KC3tctFV3uwj",
  "key23": "4rQtgLh1xqHHT4yB4ZfJ41gCbydm5ZdTv38kcAZb3PyDiffzyRiEZnJrPaoEmEcEuoHqiBuzUcMMK6iWxP4wKeKZ",
  "key24": "129K6RNxENuULzyEXKiyD3wFmhzY2SGXXUUyYYgUYW1NJxkCVFHhkMhkfhKkCTe4itdkb5Hcb4yxUGxa4y5WpRyP",
  "key25": "2mCNgBJwfAhQMF3PBcahPMCgksD9hHsQYDJ7eiUcG91qJHLjfxKP46M9Qnb9BSVDChodo3S79NZgdrY2gFYzBpH",
  "key26": "4VDmXCRMQRK8HdAviHBye81q5nzSJThxMSygsxvmTXrFG3XWjKkWMT9BHjGw99W1yYoZhCaQ82WHuYqcNgM6RC2t",
  "key27": "2pxsyfgcHqbtTTdgYSU6hAFQeQLf1sZWVAhgh9fsu8Vy6rbbWVkLDpWwDy3ogcyYgBtK6pSkt43XSa9dxM6VqFe5",
  "key28": "4B22SoqNcrPJuqPoQztgjXXTgok8q6cQp1G1TwrGVsvfTeRz7FdVgAqBEENG8njiboBGCdTEoH73x5PhYPEJBeWf",
  "key29": "GqvoiPLsHM9ZzrwSLXFcAZBBrPyH58FYio3g3211zLQsBsJwM1XEo65QGtJiWLJTiXCtKNm21ssLRmNXHu8wYM2",
  "key30": "3GshEYAFjGYk3qeC3F3cCatMBTzkAzQt3GVWuJoMPEEtmiiKE1UFVWDhYZ2T9QuGELvkUhLkBdxeC9LmACUhexwG",
  "key31": "3pWLoV54wFtkUWHiPkLPEuEwC5g83G9vNfcvCuJZdeTEVvfW22huqoe9y6h1VUgmxDyRvzMJrH3aZZ5nxiPvKeVV",
  "key32": "3JdmtnGNy8D3mvUQHY9BWfEmyhwz3mj6QJ5WiTLFYoVnyDXMGjnHRq5fj1A5rftkpD6M2QjwzY9chJSGZGT9d2Kz",
  "key33": "5xv6XEiixE8rCziWukQMHEqxYwfN57GiYkVRG8mvEPGScrKDB6wNw7HZNpCU8QYWJNg6YUjXivusH61WTifFwmq4"
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
