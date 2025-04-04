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
    "5ncCjX2YuYdm3kByhU63iYuNp4hNRgDSKd5tyP36K47Gb5RBAvpfjpcjgcBCnwRUEgVWrVNZ47px3VbTj3ZL1e5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrahDWeKEvUMwdosPAa9gjxKz1rnzfK7UgBWVLEzEfhWTsQjp3YL9YSLgHD1FK3rcgfBf5XgQHZYbHCmKNVk59c",
  "key1": "4xeH92WVY2kTQtvPmXpMfkgd81FwqhSkRHsjdouVNGPAH3vGRKhZ3Fne3eshcR5zzXgie9BZbzRcuBGwkRYGWCqi",
  "key2": "2uWu8q67bvnG3uZcFryDQ8idoU7ex6xBKDY6V3D4RwVubFcJ2uMzX1hsgrq2EbMRhczu6j9BDCXeDQxPxxnrECES",
  "key3": "5YaRyzqhXLHQdVFPSyRg5p4AhddguYMxtrMVEv7KMgDX7CU2NMmqahP6nx3Zy9hCkNaFDj64pxkNhCKyLj7oDpnR",
  "key4": "45tdNGoNK6G3tUfSXYxJcsdXAn7nWhdaLt9yJQsaWrZf3SLEc2Tm5VHYkUQLKbakzz6hZRHXJjw6m2xocqc72BTw",
  "key5": "2aXyf3L2yqSkgmh8qH62X5CDg5yrPQDxCShxiC9qSj7t87kaPeyvSXiei4FAD3U7yBxwgBrPnAfshuD9YTw7iwuC",
  "key6": "4WTYbwPynQtCNndF6M2fykSywAHLjzJTnBhGTRcJdn268m8emy16n4eDRhftj4DBXZLPyZkHFtcpaFe36hw1fzkj",
  "key7": "4dHRay3RaEWqNFrMY75tZ5VrzwWGNtt4EoK9rgYqb7a6viqLx3PnZ4KLmC7MappVqNQMuKYMSWr9oCg5jqKSHwfE",
  "key8": "2NEk4WETLzmL8FUSRNjFwLNe2s5Bw7YX8EFStKyk9ZRn7ThCdHQtR3svs4myj1tP5fUMqsoYDq3c3ttwe4ph1rSW",
  "key9": "hUCAjwNUzWxQqbph7HcaH6iakbDgu6whvfoDLwM42ZV4o7PgVFy2p81CNpJrvqFMeJZfBb8HBD5dzbw1aWQGHYo",
  "key10": "5GVZe6ByNawTy7acCAEEXQe4Zhz9LepDiDLTM4uUww297QL8HwDUoChTgTiJpQEejWT57gHc9ik7dfukMDJwWSD9",
  "key11": "3nNktpTyEemTDn2aBSfgcbST2scctYCsitBo7xL8yLjwDLpmUXjUeH92TKkuRKcqvGxkcQEbMiEtAVLcpYwPbt4S",
  "key12": "FM3kCXctqbV13LW5iVAvGMLTkqHFwYyiP6PWch5BD4EntGVW2FxeFBCaff5d716c71BkAppk277otXHX29q4bHe",
  "key13": "WoWipktyirQfrz3LnxjA5oQfN7je5g1ahJCo2fPPukcLkKVjH5jVi2EgsKnjtEVuMksdkffDJfzPqrufano4MXQ",
  "key14": "BECi3tcjEDXjKZmVarx65eKbyFXiK7fYhYyss5EVqbvwtu1zMaGo8oaHaUXD5fovHynhhmPECQj7XNP7ejb4SfJ",
  "key15": "5YmdTQADfmB3eqwnJLv1z6UHnZheoP4jrZQKQgLX8BEapPJdF7ibmH9ZN4GYSTw4XXoiPCVkAsK3nxYic89bnSJR",
  "key16": "2WiJV7i91MJisP8UfCmrm41qNz9PfX2cadNkfjTonBUTC4AZNyhdjv6SnnRgCuUfcvAeQza2tsrX85pdg6W64pu",
  "key17": "5ZjcjDTKHLhLaJhKH29ZpgXqaE6syhZBSR4bE5F4Fd9o2mxsoeJ1SLG5fgB3jRoD9NZtsnFkhYzjmyPUZzukCMhs",
  "key18": "SFz4T5n9WVkfzywEidAP6QCWLHYPuAqAYP3xMdS6AVmXUKm25uMvrgwLWy1nWTfeeaD5vBLtE9XrEVmQ15ceUxn",
  "key19": "5jWA6QXKRJsYGyx8AoFrsBypQCcdwvrQFN8svo1sZpPnvYGhuMfasmMxajV1KxpTCyEdjiM46wWe61Xy2DBGqNF3",
  "key20": "g6GiAAdpigRX8uVM4VZLp5qDxm2ficeKGppBFGtTqMfYPzCFDZZHXAcMAqj6dpWCmBCVbwfLncsrw9Z1RxwATsB",
  "key21": "2WNsM2Z8vPtHSUhAmjpnrEfZXQXSyjW5krGPUnwYyLYpkaUmufow994cEgyzAbH3UvaUW31HgYW6eUgznCJDEKWf",
  "key22": "3HiCJBsW1h3kKiyvfrSxzoG8PasULhCoxQmXsJdLno4j2z1zSPyEnz867GHhrW3JsoN8oUQugp9vRv7PfSKtu3qY",
  "key23": "4tszcPaL9DrzM68cvGQdprCAHT82YLaERmxiymgerEstENCUSAo4FjNCD7UeXRWEqwdS73YM1VzXH9KV9kySwzFn",
  "key24": "5wg2LwNv52FhLJCHNvhDqrmJdd2KaYJMDvhKqzjs4bu5qB7APGPC9ztkQ6QB1DVucdSdLMUrVKqiifskUFTYRUsz",
  "key25": "Ehg2u7Xhc9NBR16VdYfECGvz6MpN1cMbSS7XT3443aZ7j6xfZ1X3f6awwjesVUKR7HAYnCko6s8tFXy2xSp3ZAH"
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
