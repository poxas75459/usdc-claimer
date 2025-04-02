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
    "3LAe1XDSjsw7dmLk4FCsTWd89AYqm9Ahon2acDmZmGwk3b5Zt6JPoN6cBuFaZEccaQB7L5C3Kufjy3rWeqN43qim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBUVVPVPjxENmghBV1FbYS8XLmA3ADkjHuPcwDmKp8AcE1rEsgLPnkaqur7tngwvbwb5NT1cU4mkTB5vP8z4tZs",
  "key1": "4t3aoo3JSfbSqyNGbWpc2JfiBNqnTBPmYyumbbpbhkBruzs1PD7MRxKBsPeoGjkcm39jHRsfHfQZuCUoJscbtux8",
  "key2": "4yDbjVC7z2gUZzQduBkHEn3NWWwnBBavVQSowicw1dV43D2bwGmu8pPRoNc1MgJYjXsAJqNNPMu8AxPLGDeqaM3r",
  "key3": "2sJ1RczccPFhLqHPDRkBj9Gcdjz2Bcvx4cwwT5Lz6VhCkKG4C4uNjCiBBjCEqjgHjMeZGTNixffMUX7ABm5Qs9e",
  "key4": "MJjkjL3A2cjZXxBwv4YQ1Djzwb4JWTgaWRYxgWkTCvZ1EtRKSY3n9LfzGuuBHW8VKawt93rFW8DYb9g3rwMaWeD",
  "key5": "2NTXKpuCfWj9VLp4SgDuxt5ko9rd9K8X2eYdbM9zKskqYifp6jTEk1aUCicZipJExozXcgaxTmyZQThW8By4sC2f",
  "key6": "4ZagX9C8Wi3UcYSwPCEQy6ZtXm4GRGwXEtxFau5WDr7rYokFLY4evmHY8xhJZvtrwSdFCXNV8N6kRpAKY9AoqKxi",
  "key7": "TYtCmrVEbSJ533BQoKniH5xxTu1UBLtWZESzR69pT7ipDYkaZf8oq6KnMHwaLrnEaLi3vQ7UHhtfjZghTNvNs8p",
  "key8": "4W5EXtZjq4H8zwbPZU6jLhFffuXrbWzXFiKbxe7r8XUpHzxU3GHnP21TYPeQhXjG7Y45NLcfHdfFKMxZsqR82VeQ",
  "key9": "3neTg3ak46JJMALYUfMtSTgPxAhMt7JBsies5DhWvUSu9PirJHx36ELqKjC6wXRpu2YPYM6jCrgmRatdc65poh3V",
  "key10": "NUPYGSccms5QMFdWGpdAPnFkaThxQ4ZX9vjoJQWa7NMoJ7VE8jNrnPB85vhuKbt719hJQ99qUWrpy5JASbmheAF",
  "key11": "5gisyNkynj8ak1N4QCWHxePmzL3U35YuJdZbzsZ4sQ9aqW396CJRiDs2Mj5ArcZGvGf7yTSh9cNgAr4E9vUDz9Zv",
  "key12": "3gaCWDKBJn1uu2MhjpQpcjBgK5SDzD5DuLmTGGqdt95md6mHtfSVfUb57dZhwZoGcqF7NPAQ53wbQ5wKyoETYZ5q",
  "key13": "4ghzjH3UiryjDwmFmQ97Yf4vCiMkfYNSqqcrGVYQbdk4T5esxFWLBLbEBdmHQawMG8HrncUjwWBR68imia6jgrL4",
  "key14": "4k9PY3uATpoQcVwYDRSvdwk1ier6gHQ3nhnDMMzU3bdFT1FaMa9s5rPhTPE3W6xb9tEP2c7zEXUt8DeWL3mfyzmF",
  "key15": "pGpsBbra5vqjM4T1UnkaHm5GdGUV8P8Hay63o2YjRvTC13XK2uwZqKfawVRiKy2ekRPSQMVv2xZjmYheCCWFQ8B",
  "key16": "284VwyHQDmh41qPyi7g2XbG4D9RmyaBH25ho4Liy2wesqbYCT9vZD3qxEHwTp5P3mXeFE5LssEnoZTwjeMzhV3kH",
  "key17": "2g2o1UT71ruiS5neDYVqidNjoBXTWTmNBi3izwb7hQ5wNQJ8whmoV8bvyC8rMFk1rtxGMarDsy7XPZh3nyfcjaQk",
  "key18": "4pmnJ5LLH1LyoKeKzwrmVvJMGdwTv18heg7hAqQinnWd6HkCgWHwJvSHH88kQfn6UUzZte9qaVu5qnWo3JVujMS",
  "key19": "4cuNqRWAJYM9JM3hM2cxqErWUjsXcq5GR9HtwmvP7t7G6gRNrUY5pcvZSMQPHjq4ofH1jVufDGqAMhrTPyJ1hJhd",
  "key20": "5RT2CkaXuJ3EEXGNmwGcU6E6ZxCzjYvwAXZtfLc2cdy81tEHamRbRqyCzxZTMQhDkpVDSK4DG4ayK5QxeyFgguUq",
  "key21": "4NQWmtmDP4tPHPpDzi73BSJxptLtq5VFbpQYehqB5KhYkD654KJwy9Woe5aGVJBbuKQujNEFzxJCCLUXjG6qze2f",
  "key22": "quCYSe73rQE3FqMzpfuT5ykmqm8fwiyYeY5id4NcV4Znsb7brxKNdnYjLeteHr3eV4QMJwytgF8p4Aj9aCuHfXj",
  "key23": "4JPHzQGVuCDjv6dyaRSbVnVTASTMf6QXYi4Y1PivbMuedNHFrcdSMBf4zLgGNFwyayTDcCgE77HTziewQEwdwLDx",
  "key24": "4gt2GvUCUnc4CzaGKbSXg8FqiZHfT9DN4HqgsMFCeNFuyjjXbhKAu3XDwNtay8up4vBgDSgjkambS5NwKdpFDtEy",
  "key25": "vUifDAQXZERwEB8fo8vrJp93FJhwrTcPtJjinaBgoPFwYkp1hdMsvnmLpChfX97uxwWQdsBFDdX9JMx2PmPX5ne",
  "key26": "2ZtyK92EDff4JGCdNNiEcxkNm7bHyMPdaL2W5M8EHSnmvfCiBjSW13Nq7oCZCnprjtPFjAKAvD7NXy2ViASEKot1",
  "key27": "5tx7zXN2fLsPxKfET7As58ngC3jGLBsLYCknPJefjfpZetPLY2rDNWzbBHco1z7mCiwqnt7BzhQDCVZmwPwhu1Kc",
  "key28": "5WiHTMq7WmH89gWdSypi4UFHt6tBJt6yAt3F4X9j2dUxLideqGubYhehygYh1h2H4irmyf9JpJV1EQdTAtgvKKMr",
  "key29": "4WepCVeJHEEpKUuqEXRHurAAqUbHNa9riUw3ZnXjt5Kp5D8arXcJi7EozNygPjfHFNprcUtSRHyeYrAwcm9X6hEo",
  "key30": "kFooaEjEZTqpCnEpH8QkVnhJFkheE7v2zoV2eXiwsCnFrxy426ftybaBqpoUtwe9KGoEmWnVYD47NB72WQ7LXAE",
  "key31": "2c4an7DftgU8CySZYxHEnNaUz2hZcmhLWimAWPXLK7w9CRAfrpoq6jNkxD7zi5gbRaXZjvTgqNozYZREudjUn41P",
  "key32": "jxf6Br6BfH2GSAZyVaT6A1CUtL1nCMCKZgdgek1GjgcTXRiRACt6NnG5QgHFZ7mSTbApej1NpagwctCakruK2Xk",
  "key33": "2r8PLtvKQPJuZGp8bjCo4FdFiGqWwAnyvcXCBf6J6aVPGkbwjJfVS8sc7DDL3juZuHdtK4u64kPvRc7nnHfd8QqA",
  "key34": "2yci384Zmk37ZCVuQADnNQ8kA9vamb3DcMsuKbRfTHTdtoMVxZc6Pxvcq2jFJmHSPVVwPR9V9amVE585AkpnGHJ7",
  "key35": "2rCjGW8VPnc3sBMeyaUQMrmz2BN47rBm2kXE2qwPxovfyHnu2YRQfGjPLNakamAZmbspw6HdDJCDUyAAtHke9Hw"
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
