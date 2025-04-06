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
    "5SvxiXbP8jVaurfqqNWte1gvAZcRjpwdomm9PPZSmsTJXKpBVMWKgn1AX37RbLu7MNmidEh3FQSEpBK2Q8oFRVQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KoP7HwuKtxwTZujptqoDtMU1vBGi8x7ADdpVTNRTMX6maoNsM3cAmTE1iuveoa6VVjQeeus4Dg3aAdcg5L3fpb",
  "key1": "5GSSThNk1iSDuAkRCbSeUTzXcyrExBj4v9c6yCr2p1hYEoSk1rx6rqiy9SthAZjSU7XnikhTEkYKBi3CT9WU5XjR",
  "key2": "3rU3wZ6NTXDfdguFGoJdM1Afbnv25VR4obqaZKvaUqbhE2pg12kLsDxvCVyS1HUsvqQerLpTkBRmGmGz3weUZHqP",
  "key3": "2bKffvmVeVcAQVFasKnrLks4isk4j6CdSXiRde4vUNoVkGt5WN9FmU9GM5zU8J6HwxVGzWfYSW4h41tpu2rWftGv",
  "key4": "5CQaSdL2PDrZr8UAdzt7DqhEmyqBgDXvqp9941s4r5fcCyATrnWJtX9mDYUCXTtHX9385AK83E8ysJtFQhhyLQnG",
  "key5": "3KDcSHzYX3ofc1MDVaWz4dXGT8G3DEsP2hWirG7PpGGnBRG9rX1PLLXeGsy7N1xcBHSLxE2Hm7WsWP2b5QQwS9Ge",
  "key6": "2ZQ9PNDVPNchDMPLCmkD5hGdJ8GzTp8YGaKNKyCGzCRBEH2jvCQT8wa745kTEEmbUjvnPwZLCPNjUzJX9DFwirus",
  "key7": "5fkDgyQ5BgFYc58ocEemXnELaEx944oR3USxB8aF6oAsXbGoqzxx5Syqi8MGeeEd7m6UzmDkwKo7dw4gMZ3dtxoL",
  "key8": "2NXuDCiSsJkwpbetTL5LW5mWFsHxxy15vr8r7fqSBPhhpuiiddYVV1QcTUVXVr1c7XqTRwQ6fGy7p9ysLmUdH9zS",
  "key9": "2jVLcwGq6gXy11fGUmuZoLTrmJUi71JTQbd27SXxkjWzrvwBzsMeTSLggG8qsGcesSEcVcb82i1uzZptDYZseyPP",
  "key10": "377gyJkcY2A3E5Vi7WA7zHMfanpdFjuqqAzSRDJa9eP7qxn6L2u9duM5NjHiFmApVQ76TGRhiWER2T5SbWX3JNMX",
  "key11": "5k8WusBxayvcffUuPsEe47eRAFGjArWq1ua5pYzZHAdAh73u76ERr8HnZvw3mVzFVz7t8rAi2JrfWqP3wBXBL7wM",
  "key12": "4Gh7oetBjwgWzijQGKrqqLCsHQepfkR4tKk3DgQ7kbgCjdYgJNpynQoR1A6BMtUdten5iBVBYgQCuqwNA93agsyu",
  "key13": "2dJwvFTg8MHfidi1CAPdXN4qVyfKDJQr4xbhSDDgxfNGLYnnHezcr7WcFjW9y5i3qPoRcsJpcvLCjLeqFwKPaFrA",
  "key14": "3GHqiarQDJLtHnCTNRumKByG6JLXhDe1y2syd76ConjQstj8NdZyafiGt4UZPA6YhRdGCa2SWAvBqahYVa1eeuNg",
  "key15": "5C3ZpwDPwkPdpV15mLDricbwrDPCQFbS7VbuQtJGziNYheSjzrJuKbRepGPTwnQME81Pa1AzmttHiY6sDtVGmMw9",
  "key16": "fYnEW8pdbSFJ93xH8CDGwg3Q7wYvj8Gik1Zsbk6K7mzZYg9fhhLtKhzmFPmZpNFdHjdJRJ3gdkYwPBCB4rwR1Ve",
  "key17": "37r2YNeT2KCPgGUd49msth27eTfPJqQvW7AjmyAWd4PTtnMZvJizr7XJVHMwF53WK1PQpZ23saRiDt3w4Xq6Cett",
  "key18": "5UjoCpn82xaLq3yR7xTXdP2oLtmKyhnReDYvw44rXpep1WKrpYSd3cWFnCprMA4r1eSeMpz35FBy1jyBsmJiRFpj",
  "key19": "cEGVjEmBYmXPMgmjWSXMmiysVrtQTujU6UeWhNemNmEuTqzVExJQeyBm5AYKiQtf959N3dbiE1C93oh3PmHMZMP",
  "key20": "53XDLL6w4gfpkAn5eXr4c1mfzFU2uMZqoHqFmjjcQYf559ZkYA1fAkNypPCDruv7kEp7YaXP8biDwvUtfB6Jfrvy",
  "key21": "jPFUAertL4UF7SZ1gXpq4RgphyEaWpWpuEqPvy4R82ooSD6Miczh7XdTWLSeJue1R6KWdcxpXULoFTk3tUXCJTp",
  "key22": "5ndvv3Zok5oPoxc35cerVDnKzngdS7HTKudqSVNondqbSpGnnQA2zZZ83NUVhAaSD7KbAV4gRPPdBggobGZf2EBv",
  "key23": "3QYJeeUSnHPp2yLj9ibiaqzXsMVH4FJ34bZKJzYv3VaRKu1e261LoZaFSHgB57CKJ1FB2p3GutDo5grJxTVB2UNx",
  "key24": "4rKhaKSV7kdKLv3zCwJ2FucVt1Axxg8t1wugpgxgBAfPXrgeRLC4c7ugc9Xw3qW8YsSdjcYbXNwGLbX3vx3Co9cE",
  "key25": "5cxte7bF8NdTmuKefVTTJmRBqBQWCVbmQuQpSL7BR2c4rgtbC5SejZoL2sMzJ6nCuJDrABj1JdKUSwh99Pti1S64",
  "key26": "5EFgvAP6s1rQRAPS531nLkdwkXvRctyRTcLj2nBhyWoWKTKMaHMxei8jMtroD597q5xA1LUH7xyfo9LZt28qmdG1"
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
