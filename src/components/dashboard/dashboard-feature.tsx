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
    "62FdnpKhQhfWAuFqen4oJxybwRVyrab3Dc4awzdk6HGS25xpUf34Ye8H6oX7soa78kNMrwy7VthS8rAm3pv6KVmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F63FkJa9G4Xj3w2JhjpQE9aANoEWNwcnCcT82rN23sfDuW3LV65woCGf1Z2VxM7sSZVkc61UVgcVWfebL88Hnnd",
  "key1": "VS9JKNZ3bHMs79kjkSwPpQMd7DVqLb9u2xd5Uz53YqRXPJqucEkVfAkq1EVp7YySvLtDBJt2cXL1ahsEQ21zUue",
  "key2": "5AfmUfsztg67VM9nKXsiTbghTG1dKjqWNTBLzJg4JKY7CRNUBqMKajfEBVBe2ueo44C12Z5zAxfSaK1rJE1iTBMi",
  "key3": "coNQ1161KfA3s46deHWgP6LyEVRjHLVwjtfJSfvt2DJnLDtpukBFLRGvP3Q8ZqUrqa9VqwJKKmm3CChe9bdU8ev",
  "key4": "K59tUe7ucspKVHe7Gejo1e9sorTDCwbzrWCQkUy1BSuZAybhLCJwYcAtiQL3BhumS2gCJNByTB12W9Moqib5ZKM",
  "key5": "4y5Zz6xWtHVyYF7MgiG4FoX9TevzQQdA7Qf3QeDFSE5ew2v2ooY7zpTNk1Se1vBn9VRURTp4XSc1DVdfrvwNskBz",
  "key6": "2iAX5aRwXBzvJikvRnZFCP3zCjGGDntFpFBudcBXYcB67z3Ew84WNWHWe8kxWLHoSvKjT89oqoxMwDzhYZWdi7qi",
  "key7": "2t5cXTbRpcWeoSwWX6i195R8EenNaKGgdSmBBxz8wGKcz5A2SjHzJhH4rBKM5hrroT9GCuCifL4YhuJBCUm1ywgF",
  "key8": "3cYWRJkSFoqAMU5cQ2GBZtqCG7s8cBsWynUrrnMYmWbasBKmMinAc83TXsSvpgDKS7GNh9FpcBYrAhLTAcZ2UfSU",
  "key9": "5SUkoepGGzWALpsh58MM7FaWmyDFQRGCdcQogfrX17xTBZz7TDpBhCg19AqmXwkEtR514mFKHBCXKAC98Dwgps4P",
  "key10": "FLMycuhC4LiTRU5chU6CmtngBeqawbQdqxwmuGjbBX6a5RTmJucmAR6RY8NZz5P8LKDNjwPFMH4ssCN7SA7efvy",
  "key11": "SrEMRXHpqutU9Mo61HfdWxthhz5bEVki6owzwSDLtBjMNjkVxGgy8YE1LPZznzoqicdF2meb9GB2FbckXTV88km",
  "key12": "2ZDxn8u7VEaSZqpNuNfHXjSKnSzBuPLCfSrzFwuViP47sWkioAuCEedZdSKv9kaCmWTNtKxuLSmF8qXVWUsLiDvt",
  "key13": "UrPqfFjwQ2F4QPEdKWFob2YmFub3h2qHjfhBWUB4HdFjx9f1eAc59rGzWPodKbVMP4HEuLwTzuiBFw385v85cuB",
  "key14": "567XFhmAyJwG9Eka27vhVM4S196NG3suNH4u3fc1zBSQgpb4ahJs2MV6KtGMnb1dPHbd2ZCsRTcT1G7gwjn7BKD1",
  "key15": "39ZTqbyjuCJPQpLafSFxFxKpqVk2ZoZGPzniXZoCLtyfWoNv8XbPGvHA9cwokpVDe1u3UeW1YjT2JeBBRq4wGRp1",
  "key16": "cj69D71Ljvgib3yChmPvqp63T6mpAr5uRZe6Ha5HsxE4CrbqATGzcDVhuwGWsMgE8DHJRoX7RS91szD1DrJHRH5",
  "key17": "5GWehMxykQfuMBifDaRZh246Etc1Xwg1btqxWfk24SCswQwiJFitQvXV3QZCr6E5NRmYd5dsjgHRbJxweF4HfABy",
  "key18": "4ZYGmrNQ62P6iGfSB5zQZHsJTwQFe9DQjpMa8bsk2Cjhp3dHkQsccrtustzuFMuupfAcY4jLLt2NFpVdU7W181E5",
  "key19": "2sPx1B1nGmpdZEg8Qav4HgsNhs3ZEDA4iUNWGXicsKd8syskU9GquTRPyzx92XEKRiLuwwHxt8MHjmSNVcjq8xhk",
  "key20": "3rzsgA8wjtrPkVkwkfk5GkkbuKLDuPxFht8P9kSnH3FoRT5WkLKiMsZdh7vazWnUbFkXGjwTKhDEYfQFXsTXq1me",
  "key21": "5S7stxuigyb4z4ZsJmVwjdMKLRNvLqNQ6U3yVAp1buKd2JiHegi7qFXv6xKqynscSgLHdBBaoeyCvjTodexfmFtk",
  "key22": "2SgN6UKuA9HXPjsspo1tQJ33kug7AJ44tnWjFJKDejBcVSd4rLrKeVFxLd2PNXMNGPytYTKpZ3stQnVk8PV6XMdp",
  "key23": "25UPNGNPjCRDrYwNoakmQ1L52RHWXbetyyQWXi5KPDx9rM2Roh8sp8Lr6gdwUkEQZkBxVLxL4bRtmbQTtfiMhDwf",
  "key24": "1c8VwunGzzBfsJB7hg9XoD6pdExyHkWsRqS8nyjc7gKKbBNxPxPc1HzACKSf5em3HDEz7qcSJtQGEHFmphtpbTK"
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
