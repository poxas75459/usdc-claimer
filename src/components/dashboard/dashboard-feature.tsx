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
    "3mmFnVNFG2hbZ82dWMESMj1QdVubrF1ak3WAUiemq13yg46QwWwTpcVTwBcq8KB1QQWwgEwZmMY1qVQHuM2RXbYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2javE5AbZ4TcMr9E6G4AmQS7FU1iicS2AkY4RCrYB82Dv6MamgZXqwG14ULkP3XkkTsXsPkMJxjv12rQdHgBoeNL",
  "key1": "4nYsfxtPYc2tFwX5P36ra1uJteWTxNQ715TxRKSSRaCF12as7txn2yuE2NGysJcjtkKqutP45mRwiQvCQ5suwspL",
  "key2": "3iissaA36ujotmaWTSAGtJXkHrXznXhXsHkqaDkwDEHc5CzjFt4py5SiPfaGrfRVZpWK3YsdxyrxpVFH2VVErkeu",
  "key3": "q8SQFyrTWeEjckMakyt437nobPKm7z3SJW6npVLp8m3QeU7MDgLwVUnwjeyobyNbopdhqhZVsMUhDoosEMsnZvM",
  "key4": "39bRSraFyQjmSJxVpcLc9am7kyBPjXPhDFW7ybStjSq5qmvb1bvRE7LTXCrwsfFCUcUUd1NUbjrRZZswvMgZonmh",
  "key5": "4nJtWs23z9Lqv4gqjTiuiJTMvDDo7ktGHKUVrgn98D2Sz65SLGwAuRBwxd6KuhZXhRPhJaJVAKxzsbRTGq8wJKrq",
  "key6": "5XpXSLw5dcvoAB1PQvjwdwHqWSRzkRYMAdS82b21Y9JVdECEfhAarMNriZu6LPEroyihEZW8EsUaPQWmyQcTVaWx",
  "key7": "28bSF1kkr8EwEmvzeLz8hH5BBeWWTWhEDCssuYwaU3ZHSahS3Dfom3vUAZcow9GnLfroNM2b8j2EzZTzGUaEDSyi",
  "key8": "4K5f4xF5fBUqcVAEHhiHBgM1ZdSmTxvKWY7Hq5MHBmAaTyXorKt9uqyZwc3xMRVdw8JxPKYzYPPDBcpcQav6oiR7",
  "key9": "5yY5Vg2ghZgFXkAMe4zdtrzbj5c9XGtY8Yb4XAMHbrPduVJpMtEEDLRsjUEpp6SHcvRz3up5EsCFXY1Limfm365q",
  "key10": "9zqLruFdKHHHXLPPnYUS6oFv9YqUGBmUuwinHtaaeedAEQdBgvWd2EiAgKosQJW9SriR8CrDkq6EkMaUZaZQNd8",
  "key11": "54SaeA9i8DxPzbq8iE2zzrobzAYytV1sBQ8RFJzKw39EVCaJ1AJfNPsPMpvAdXEcT7obKDbySTA7GZ75CwK3BSoq",
  "key12": "Um14n9CVWaLSi5YjuiVRMbVi7mGy5QZNLTcxcERrCwcYgDiwMThVNBK68BAyv6tZeLfPZTaadxZtn9iYYniZytN",
  "key13": "2gXfjJCiYH545CS4U4aVQnmoFv3Rvu7LDEQHJ1n9DZQAMZhv6Kn3SQLCAEgBRonb1B7XJ23rMnKBZrmA3eEzipVn",
  "key14": "wXtmULJRiafn9bHaFYkRerNvTEmiMVVRDFZUYoqxLtDK2Gaa2v4FobxhVtorgyt1eqXccBb4ZasTnVnz7jSuznS",
  "key15": "222beQfPVseaTURYxLC6oc7QhbS8CggfgiX9UfFWcYmYTKx4g8eGKK1PLcpdSHQNBUdUJFb7LKGR4rUUKWmhwqEv",
  "key16": "brJ3udZWwMePnw8Aw1GNLtyr9Ry8ZSmUWomxswctoFymxsMcARejZjba7bmfdcLmQ9hBxfsyuCa6jRFWUfwBAaa",
  "key17": "4TNGvLqah2faNMH2R2EbsPBjDm1eAjXpiAUfPG7EdrBqTgkUjx5uGTNmKBgTgemZP1yVm9PzkQEfFv4YPZ5C55pR",
  "key18": "31gZsw9F8DvAbdQDoFTnstYaeNLZuCJekBcY4hvcLHotUkGEcUEA1iLmEa9rwDQAZHfAp2cnprPAYs1CQoV5fh5u",
  "key19": "22JTeiKY42nmQTC86Svk77NVF9iA2hUBEJhr86NX9hYUztb7fh5PtjRu2g3npPcx8ZXDMjFnwJT9NA8rLthYwFFQ",
  "key20": "2Wj6Hgumvsepe6Q2pwD5Vwi2cZono1eLPwwSrpixzwUqfzcsH3z2hPc46HwR4AANnZi1CTUoqBFKpHYgTAPBdR8P",
  "key21": "4rBXkzPNdRdVFCUZ3guNxNUx1pVrFZ8uQmECrVaYsFpbdJjEGbyQJTjPB8BxSpPbvMD2TGSAT3rD3daESYtetYo8",
  "key22": "HSEYcQcZgq4uEMXj2xCToLHE31KuZCoPPEpU4KGEqoJjFWxKRTj1cpZNtP4UjVjmdSVCR87wV3SCHaaFWyyznNT",
  "key23": "2eyehdrDFngdLoJGYLnJmsoWugAuden9SGehqEZEHjL6SWyu85vJLGn68KfkGVTi2exks9CckSyYmaAKnX8a9DzC",
  "key24": "2gy72dboT8BkbJvWCtYejTtoBbxEPq3CBs2zFxtkgsziVznGdfY2eXUv3vHCZaoQF8BGSRbeejGpE7Q1wfy9Y8WN"
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
