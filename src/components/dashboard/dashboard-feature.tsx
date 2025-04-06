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
    "5AX6B9siCn5N64bzY6o5qeT1eQTLN4EqhX8wd3Zn1RewVic2kQZSJYWve6VZjkvzWaGrFiArfzyUte5YHx4NAoCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4Xphkbc2RHyv67kur9MX52WUBHrsvUnHGdA7ZmuMx7Xujeh5FEkfzpDAxLhSEiJQ4CedZMCzXumZiEQrhxA96N",
  "key1": "3AXx3c7NwWaaukEKEaEaz8qpv1pA1GsVJXiFNR868a8zwAVpdHwytbPJqLfMQv73fsLeNSRPWkKzDeFxNu4SZwaU",
  "key2": "3eysXcTv4bzhdUHcu47xM1ppV3Ygy4Mp8UZMVbVfjrZpzYudbfvZ3qpqSBjhXVmMFgNnEMPJgzY7A5nUCHRRM9c6",
  "key3": "4a38R8Gz4HBpTANPNhXchG8XL63xnBjWnn38DKzfLN3x5ykzLqWpwfehKQU4F2RAMCieiAaBH5vcqoS59oMsu2qw",
  "key4": "2yw3Cvhzo3k5ixk6sJt9CNEi1t2SUjuzdEsPF5jgaRQy1RDuXVXEWFd2Ps9CmTkJXHFFaGGP2LAPfimxXQDXHnB",
  "key5": "3oKnjjjBj4UqrFC57vQ1V1aQESdWSS5cBZ3APh8TUcc8uBNFwPmfRyp4YLe8SHojoN61Tn19k4gk5DUkXe8xzYWM",
  "key6": "V68GZxF9W84gHmAhVp1XYBn5GD2QFc6f9x7TLZHAWyRnaBawG1X3xTZUodpeK1KGRi4uA5PcUEyCuDFPkXa6x8X",
  "key7": "5Cbw3UsJHHidzmfbnkWk64w1X5q9vLqX332CX8SrZYMCBYSWe8YPawXnPXqRae4kH4Jtkt79vrY68anVCUYb69oU",
  "key8": "2zsexcfCPdV7QAd7Kij8XfnFNLuBdafuPRchT8x3AsBJD4GcAowUmpukE6y3RGS9oeqrqfMgWAW3LqBhf5DxBqsF",
  "key9": "rY4w7W5SH4W6UGEfYnaPuDCzJsJLfU565FP7mNRwbKAeL1BeSGACz9xWoNviqVeJJchPu4iFWubGtz9WjQ5HkKZ",
  "key10": "3fbCgXvMkF92LBqqdJ39PaYaRPPXTrAdZsZoDNA8umDkRVqgtszL2rRctFwADb564zRw7xeai5KaB7qQxkjV7hjv",
  "key11": "KPycmZUurgApvmVQfyZycaBoTwPmHqumCXNhYCbz2xxw1NAf3Rf7ASRmb1dQCHTRyDreSUWxiEtDwR8FN7uxPU4",
  "key12": "327BEPh8FRvP4L3rg3xAcvuLNvBfCMAQzcy6Rz5A8kkccQjeCZfpEDRZM954cbuoGurXLZg8TVfBwTCTYsrWPHSi",
  "key13": "2PPFeXSCnnSv2sCUcuPLvWfSb8XiLNFixvhN2vMvmVkpDp5qNJ9md7ohDqeAJEfHKVWwKhtDqC8g8QSrJoT7pUjG",
  "key14": "4vceGoAfPX3kyw1Fv9Yvu9UUpzEBxrqV4bQ669TJ5KhhfmzwQ7sPH9sUg8GzjYAWD6wRngm2io2PT1XGxp1Q9Zv4",
  "key15": "4ZHQMRfhQi7RwVBgpNahVbLpBasLWdD6vDvQTkJKmkZHAFPVvHcVYQYsvB86qaCNnUPyZGgQkwoPYPAGpzdpDLj5",
  "key16": "46RWD6Dinbp6cusNA3XESkqHLh5favcU4Lk9yrNLXuaMYJSHQvaRK9fRJjQwszjMzEJbHbFHqJ1iZs7f6bodfJbW",
  "key17": "25kpkWB4q3cCdM8e4TN5fcNmp4pmaJqB9uhRpCjrzX7c1DEu3pByELwTQ5hD2g1M9b7rFcFwXuYkFsgQEYzE7tPN",
  "key18": "3gqCMvLQMWCJUj2bfUYjdWQFGXga2CcaedNGxm6VxB9NpgJT5nm8afvLzyrxN4hdbTLscrKpmBQHvbWKgxA3fg5X",
  "key19": "4FggqkYd7YTGGvh3UVLbwuDHYeU8hDEfmPMKWm2v3FZBkbXvA9B5BZfU663Tc5CeVc2hRyJiCokQSiPv72EqUqou",
  "key20": "4v3vAH4QdNsCZB237GvGVLdJrtvpH4BmbtRu1cxuVkzJaHHFyNRhpjjB8GpgCpRUWU5UgT7rATEbyDDkwvebTdeL",
  "key21": "3ZPn62MEkaaScgF4peTWs3y3dr1eLgG5j3VQ7g9rPtnKrkCgnwRqqF3LjJQc8kJpTAGVVEUVvrSmv7Qujt7N5Ykt",
  "key22": "8Sz5ohXN43VXZADTVZzfV69bReNsjy451ZGgo3zhQpUzvG2PWPKmgQhxmnUyyKGNW5byKgKwPfAeuey7qkoDLhJ",
  "key23": "4sxDDfyeXrEoUuxrkgcSkJcMw9LNZpkCdTQ9mN3iw9oWKRakFSsEU5U6Bm2BT4URtPyoXV6LPyN6RprC8v5FSwxy",
  "key24": "3fDqRztLNziBVXydPLw2Dmkgvs8Lj45Aht2t7d1Tb29PjJuEdLJhvcRLNZKiAkcry3ENoDbXtqKmMgzxWpTuRZcX"
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
