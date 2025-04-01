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
    "3euYBKs9iSenjhUaACj4CBbR9zV595vucofP8Ua8QUMcDrGVA1f1fmr7pu2R7nwELjxUBtsLYEJ3ywBM8pRU1bve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64U2NndDNbu1Nh3FfAhYGUU8NC59E57gudYbCthQeYeM61poxEL95KJRXcTktUMfW4Dbb9AywJuRkPcBciENpdC6",
  "key1": "2PsNGuMwEymDzi8geGcE5FfAZv2LZU8jWrKHFWWkWgYzYwHf64p286XJ8n5X17Y9nmotA1Fn4GcCc7SmiaZTvw5Z",
  "key2": "2AjwFVw2GsYvBMCCZw3Gh7vLeTWHE1S61k541GhTJxMgBktM3mJVmznSj65Py3wCzo9pDKWnr5CwtuH9YTcD1Fs",
  "key3": "kkdZfuvtsXWoEzrTLHBqvwbUKYJ1MPCqvkZ4KGjmVYVpgkZtXnfkfDx7Y9jMwL5sxNd9J4TVFpEMcKi3dLW14W6",
  "key4": "3cPx9hpZ35avuNXHGFxNCTBCJxf2nBGSEVtmJCsZkvi7Q6dqZcboP4n6wRRduhXJYw8dfw4YhvjG6Ljf7zCJHkTr",
  "key5": "4hWZrnu4zi87RLvkM7Z498VXHLfMHHVyujwiQGVhfczer7xFaSeuDywePhkdu4ibeqTMbHZzbPCq3uJehEWU6gLp",
  "key6": "2Nxc8gYqj2KAA57ys8mpCxieYGRVQJDrj8a2TwTHy9eJuwfjRvSykLwewHir3HRtHpezWdgz62v6pGz6zRAfqswd",
  "key7": "5RLpLQ4tYB9bPLUcLBaV5w9sfg89nRsfACFqRzH5HpdvitL13mhimgY5ohMHeYrhgbBtDZuENDr2JywbBRRS4zTX",
  "key8": "4MpfDztUY3x8Y1n6ti4Np5snZPwhnULyg3U53ymghvdvg8YcL34v56ewv86WMpowEtEZ1tDUc7CcXjYmHW8Bfz2d",
  "key9": "4mUDyqwqLPZhrxx9wdaojnfK55BjPUtCL9k9qvESU9FxPBNLBF9vZZVrbivnHC5WcaBj3i8u7hHhLeMudZje5D3n",
  "key10": "3acGM5Y1Np42WkmyKqs8Zvn371GQFYFsNoRi3umT77X1RFZ7V15cpim7NfsqopM4fK7DxPpGDRDPminjnSZ9VnK",
  "key11": "5emRikFgSVpp6eAjqwmiUfTFfnWwrLHn5CgPzb5WugJcFngduM9tXcGRF6RNg9JPpxeY5o5S7wCBxcskGMEDymMr",
  "key12": "4JpUQTQHMz8i5BG4JpduV3XBpiTbwTMu8gkGunXQmb3FxZFGLBXvc8xHmvnMc5rhcwgs5JDdJh2uhWJTFqTrpcCN",
  "key13": "2N3FuwNJBnzg6HS6o4kb8nYpwXkuavuNgRLYrCVjVsN4YULQnRiWvgnMCVs5iL31zctEa76TktTs6ys4U3K3S7hC",
  "key14": "5FRUdS4aFmr5DdkqJgNdkzy1dGp6qEejcrRmyFqWTAot6SJ15gHU1KJ64U5ybstQmrFijaTVCWjLxWYoMtUY8NZT",
  "key15": "oCnMyGrnZNc88ZreuLMcyVPWYpeBm7b3KmgzNppUJQcvPbRM5VekA2yaAf8dB97BRaAemQCwqSeaXnN3ThbZrjs",
  "key16": "251oy8BG4fPYg6hUfZzY18rHtizks6yAKaxemghSHYYosmgiVKCQa9DrtyYaCetAoaTUFerm85iLT962RCcZNu4n",
  "key17": "4TvSGDxSjr5yMHuTvXMHn5s8dZMyuHtWVW5Pz9d46zh2NXsm42u5vWe18qBn8zUKQmQvTk3R3DiRKYSYKk2QN253",
  "key18": "54u5RUEPdMrDvSoHxVEBSy1X44CCXwkrwT8WBE6FBHWh27MWaMxVRyjZY8eheYhoUcFYQvpCdyL1pgCvqJpFbyW",
  "key19": "3MpF54G63Qi7nWxZDXoTSn94Gqy6vmC6iuxRuRK6iRooBesfoD6qfnNncjMFcScJaLo1gNC1pDe7PweaKcsoteDe",
  "key20": "2Miu7m9AZmTbcwfSzVMvj2YE3aPquQb291NycAEokLZaBArNNkKrtxWYbWr3NdKRWnkqv88i5aGs9mxtKjXujLNF",
  "key21": "APNuhRY3HjWvJpsKBaCNh6e2k6eXHV9eDRxq1wtouXm2ENmrq5SSKkmrAKDfzDv2kXMe4tKFjQXRGSqdLjJUnNb",
  "key22": "4zwMzvgnrK7nizKT6yyMU2nBLexGsGRV54XP6PdTjRgA1EamLRz7roNGjr4uXYCZ1ejvQsfuYqxR8tFnZuiRRMng",
  "key23": "2QvHaLaC51xUfVnzcYUzibcjh6CiSZXnyw5hyMpmDzksT2Nor35P4EHn73eWnVPmH4f5DX6n7P5gSDJpMvifb6fv",
  "key24": "43rsWdJXH9Aiz8gLfcCbmwVuYDtH6H8zdMU2adPgbsB38ztcHdW42RkrK9mrqmaoyW6VwxDxBiMs1ZUFzuHAtJQm",
  "key25": "Rg4wZpbmG5hdzVi9xjDGCRaZcU7k56Pk7QEbDYEZNriuLm5mk1xSUXTzysXmtzhzxX58hMpYrAKLJwaCieabtu4",
  "key26": "5FjwgTpMA1sriKdSZ9hpMgQbR64XsvmzrH2qsCSEkGTqb3pNk98V1pitCe9U5MZku6qLD9PfsdZC5ojc4fxpK9jz",
  "key27": "43GzHMwYfM2qp8zBsHaznzE4S8uWMiXJuM7Kp63PU8zyieKyzxWJgQjocV1cYEWie21z748T4iPXzhZxr9yeZ28S",
  "key28": "tPMacwpiBiYDYAMD37ec2vcrqKXN1ZUjAWLEnJAkPAcokLV6RuYhvMgEgvLPVfhYrNBzYeVnn5R6kNd9wxZaYJN",
  "key29": "5f6GSXLkA2gGiiMmte1GX5PxsTTtrLfvzuLXz8B65X8ZV6W6JEyCzQhKHewaVtBHV5A9efR381KyTFRrSV7kPbQz",
  "key30": "63nzxUFSgSsKKuBjC9aZjojJa2yEuMRPrzgMkwAva5DPg4ATpx1g7x2Lv6ppzWvtpte1ZMQM77DEZ47r7Q4xxoE4",
  "key31": "2DbvNFaECJ6i44tE7cQDq1fBbWjNns5gcK3asjDVoJbtPUwPhjJP1tE2DypCxLoJhu5eFxNnhqRbEmFtup9xaXHc",
  "key32": "5HXzuaxnzWcggTNmjwjEkQyCrBWuLSUPwsBBGEPnxQGUMZYiNY7GMGKiXxpsPhP4ZHN3PpVHzbfoBJDadV44fnSG",
  "key33": "52WgBa3EfqRyc3eQRoQEHM6qq7XrZePXATqpnJiFvSvdSHuxEkbvXV8ctipwHzSxhTFJFjcAzwbDeL616d5VFt58",
  "key34": "4yNxeMQ2gMWtypbK1ddvN1Sv5VJU2Zgw1x82U2ThAkYoLt6pYmuUCUe2jrgsFKxD8Ms3AgxZsqhzWd8BQmDJYA6U",
  "key35": "2m6NBgQBWwzrF7wb71Er2QmaXyzgx1gqg7gvaCPZiQ3AAyQ1TAPdrf6w8kYcszyfh8zWDKWwBmNhBtusk7jpRpbg",
  "key36": "2ZAPu3GX6p4gXRC2WHpHE9RZRJjvYoy5DZE3pDEppv4vrBwXq2xytgFL9t9iKcaEw1pQ5SyUyv3SzQFW7L8wZQu1"
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
