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
    "5Y85YeHCpVwTDCXEhPVYu6wuiGiL6S2kSTqKEmopWd3yAV4rLeAdZFhUDVgaN9rWf5xLXfd1oCZfM6iugJivP7a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2anvjymFf5dmVTscMRgL1EymwTP6B1WbWYa4qB83NZyJYDpCxMBG1ge6Ug9ayh6mBQ4twqF96wBWw3VpidcywD",
  "key1": "Jc5e3CCe8Lq91bWt1JxjW2Hzv2HPTb4dfF6oHzBEtwZdgUQMMVyAQFizpaYFZHdBtuSMgZecKVs94z8HeWemoGE",
  "key2": "3Jj7z1Zsja2L5gdypPrsDGGaMuz1AGvUqAkERF5zMfNv8hx5HkpYgdF2fYdL775DmahTySc8T4vdjKzTjw3n9gZW",
  "key3": "S7Xv9U5Ndi4i564yHW3H66GgTDeKJH2NzxuQ5NFp6VkKuW6z5bwS44zggCJGp7sacW7ct5KWto5xbDdPaPLvKkH",
  "key4": "5cm3ydQaTpweoJikkA9XhirLuzjW5MoRBEHDdELubsJt2ug77coiBaxPjPHdFyuX3DMKAzuBSTg3dwMqPHweuDuo",
  "key5": "2wajJorgazondkpjnbuhqcDtyAMFZNdNJEY4kiiSw1jAUTtvaGSmzJLhvzetKZgQmTc3WDzXNPC8ugragWsfm5EA",
  "key6": "2Smw74qZTQVAkT8Cq9nAhR2FEkVTLBwDRcykXXW7sPpjRSEzJbD3xTNo6AJ5on8fdNbESv3YiRSWzmy1SKcZPH17",
  "key7": "HDAMzH9uXxE9EX5iX6Sf1N8Fv99XJSWJoe63EPweRCtPuHJ4uWKz8ZvGcKEDHg8oMQx5HsetBEttfhZ4WcfZ6EC",
  "key8": "5VWjR56nsRxDnEg7GooZ6pKMXU2WZAwicjtt8JEPAJCNhexCFwTvfPT4PTQ8vdeVrQERSZUwhmvQCGg8aCzHgs3F",
  "key9": "54eR4QmSFdA7GraAPqyeAhr2DTowmUHJghJcL7ai3VEWCrXQbr12Xof3XKioi2ueSXvB3ZknwNNQW2dKbhtQwvMY",
  "key10": "g4FmxPq7EaD3jcE29hn8rqhmePD63wU6dHxL4ubG9qLfE72GrVMFRvqjUuN9Giz6nE8MLwBRSve59bntUBtqY9b",
  "key11": "36GdTToGaee8JPKKQqgfvXhea7ZTRnS9mf7kRoP1GxqkjtXQLF1qTCXbRn4zHS2WcSuuC1JtSQCvNEVje8QUeVfs",
  "key12": "2qw9aDuBs8DAfj68f4TJ365M4NH5kJQ4H44bfkicA4E56s4Do6C9MqXgd8h7hpfGnLQPQ8fmBcwH1mJdXU1M2Fve",
  "key13": "3nssGwQyUDoHu6hUrThfCkgNf1pMeNXRpsx4b2W6SNgPEgE8QZj7KCaQdTn9GiwCBergMVkKFJv7YPFz7yRnJQA3",
  "key14": "E9mo91UH2wFh3YPUe7jpQWBY3mkTJuxMdkVUyp68FphQQQhbdN4buGHGmHQxHAKFmrzzMkMQk4JAwNF714cAmuf",
  "key15": "25CxoiAdMBC4D1osfyovBJmPLk3rqgi95ezWALYkFAAsGBQfMUtU1bgykcUxuX2EgQUyid82VrcJ4pvenuxHX5be",
  "key16": "5LfeCnPauXpVypWiiETCXETyAEript3pUEZSkzUBpgLWxhzYuui5PeqGs7LJgmuCZF2RQVCei5viGWv2S9s7xqif",
  "key17": "cyzCFFrD2d3xrzdmjCp1iiE1DSzQBHAdEgGu8KL3Z8CQaFTzeaf5h1DWXcXLqWfHkgtSvMGXKsNd6KDr81KHGDM",
  "key18": "BQuNydQdFYThVc1eb7eotSuBkFzBDDLVGhJU7RaUuU92M6a82K2AHWhcYJTrSsRaswBrMZKGSNKYCFWxH2c5iRL",
  "key19": "yG1A1it3NBmVUHfZaNcFSdpNwyNznJwxu1sUayGas6WXutAHM3tBrutHWgXenTUc6jQxfkze1AbFehpAYPqNALq",
  "key20": "54QozSkcopAWHAeYKXuySDXK8tbNUPd9fyK1KjTMcBycT9Ag4MeVoRLUSStEtH1qJSmqzRTupCQjoH2dBLK7SDkv",
  "key21": "5nqCr454k5Tmg8afBCpE8x8dc837XMQ1NnrYyrd4eZHtgEaaJRuX7aYsBNNKsAHBd1bv5Zi9PGhMUob1foBA9JcX",
  "key22": "62SXbGsVJTBCSSPRE3a4DDwgtxb2qbBzHkLC1m3x2Qj3CwtktyPonRkZFNc533ypwyx85WC1MhYFQyoYQnyc1wkY",
  "key23": "bLSJ31bn3fgRcvUMf1t1d427kNKL38GYta4B4izkz7GBNDgvpxN4ZhCTTttNobyq27W4aY2Du2sTzqbj62Gs7mV",
  "key24": "57HKVbCDKF3NbGiVr75ZX44G3aroWQQzCi6iDhvBXUvSnqjQc7biuHiDccAaE9j253VMwQnoP7LftoZPE9kgaAjE",
  "key25": "3K99dAjXrhrPCJTD9nF9j7LTghbY2ssCfUn8fmoFhygYURMq47u1RXKVuvSRjfrkfakD4wr3REcbRGp1ryTHXhwp",
  "key26": "5bgGm1WSu1NdPDHU5MELMoNLfQWFKSNKm9sMfLuRf4SU1Rr2b5SYuBFzQcVyN4n3ejx8ttM14GXvRdnLGjMGXpMG",
  "key27": "2qvhcpsnW5J6poj5J99gSQnXYrxTfNrTgUoKY6hxoDyCcBnvBwR1EAgntVCfs2njpu9qfU1BBAxvzC4uM4NirrwP"
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
