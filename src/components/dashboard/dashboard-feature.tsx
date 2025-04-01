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
    "347RtnG7kxnbQ5A4nUDyrDHpvHJx1bh2RT286GxLdcpGYVwmHy5TuHah26dKYAPCyxUvVVsZiLvwcEfPkjf6W23N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3komYhA1fMssNoQN5y47FSY1KfkPUwZgY2n2ogD7MxNVt8BGfR5YrG8x3SN4oPjYeYF25sumEngv91QGYuz7UX3p",
  "key1": "4As17hx95Er83NKmzBNMzBLv2zCXq3X2q3EgKpGe4CXub8kw5mT7Wc7XRmckLxosZ1Mz9HUVYgy2tkE33zU7jaRk",
  "key2": "27Zcr686aUac1AgF19GoMQ7LoSvq2JF5GGhASFyUshQKNxqiTmn9i8UrwhsC7fVeVKhqTyAfyuGi6S3YDxTDEEDp",
  "key3": "4UrcUBaJCp1nVMLk2sFfvgYHVgunkG1bHDpKJ8PbbUEYWMhganXUhNi3jXdLBwyXGSfDjeGJnLX3mirRmcZKnpTb",
  "key4": "3ea4B4tvk6mCPcGBAiNYq6G3YhrPPa6BcoDinJ8yrNMdhAkKcCSLrR72gWNFuS57rh1JHe3GnWcegm9NWGd9YJah",
  "key5": "5pqKsXH3MCvzrdLuGg6Fn9KyeLarsCtsbQ4QifoWG7ijXGRjGWcfxF5UgnccHT1dxZNZbzMQhvutYAXZZkXX1vLw",
  "key6": "5CKUn5yYtSMbmVQYLVN8M42FKfic6yLZBebTv6SG6yKYQ73mhq95WuzMh551vQyTiwHd5jCNVhKS1rapgpGXZEdM",
  "key7": "8yvEF25Ng7GcVnakiPGoQLsGN3WWnYR91JSFmMM4PRFkg3RgKo6tbqcsXyK8Nh2yn4rRMzGKLU8imcFmW2jsgan",
  "key8": "2sXk2wadjFQSjXiksEkCHUZLGama2rJYJEajSX4DsvuNw8zybtA53cMpczkB63W9Ugk4KP9oNQjJLDrTVtGJMuEa",
  "key9": "9QiDChfDXPX6kzr99yLjhpY6bqKmX7EK2i2dgnvXzXhkkxSDzsP1GxXLUuRbBga19pqsXMoh3tNWa4rtWe2qD7M",
  "key10": "3CCGSQypFzJCsWRu4R8YfeXQgd67RwQV7C5GvnRu7rtLcTk9GyrW3vaKgtaaMBNDYxvfb3vghX4Jm2yhscvCEFVn",
  "key11": "3DddN6LcckJUDAjvfhD4UY5PQLwpmtLBGzyjaqtVfoJR1yVcDEqDdbHPboDuA5np3mJ18YRud2pMVWxnD72dwGZ4",
  "key12": "5dppULiJpXQcEDevtMYCUomE77THuPZhQRfBrv98oQc6bvc923K9qjC5KpYjeEakZ72j5GkCQby1ZLGn2JNM2HdP",
  "key13": "3xBaWEHZbtDRsrrUqoj3C1Joi3kTzcXvFPzYaHGvs9jsWTdD9rsGh4ihFEi97NqHb5aFmawkyVZStG474fJf5M3L",
  "key14": "5RRqDjDFQBy9WJBZHCMF7jvGRppFjom3h46TZAQC9nbdzGbFFsnud8v2SvVTzD24C4usAkYEUswSZbhL1BdcuaHQ",
  "key15": "5Wm8PJimdieKW4kgki3XspC3KgaQZGrnVNRFrQW9TjyYeB8jM2EYmzha8NfAJbvCDEURDV9wpBtLbQPghyk2c7hA",
  "key16": "67qTsTF3Paya28UTb7gq5NBwAc9EqLAgYCtvqkXVPxKPwYetr3bnKz9ssoBwTkQRtAtsn5HFhWXurTi1yNg3wR7t",
  "key17": "xeKfc1cnCbXzxFjQWNeVoytgQVmHTmVrpAGNEXnD5ojnQEv4VDTj6c2VNxy1GhJ5yE2YxBHyAs8YTHwLntyVnvH",
  "key18": "PM6Q7LNkkrXg6w1i1H7PJdjm4dXWLR5EmMHfktJa6GYL5hNLY799NDgwhh23rruVEpLAmMEH91M2UboJuH9Efzr",
  "key19": "3yB7YKheKQBAE2TApjU2gtVJ7jRg5KQoDDSNLGv1YDWP4ijP8uHFc3pvZMFgiXmmUxf6hsFFkL1CbTXvFtZrZNKN",
  "key20": "2EHVSBwTnsGrMarVx3eEhtpajpfgXJmJA9sws9JFbGG5QsEDUTKDegJCNsyx7SDWfJu7d6113QTMcQMY3sBxGtHR",
  "key21": "2DAmEJLH3Zq2ceDBNEAYqYXLNFkyGQngEHb4AMCbBRVLo2gBUHVJ43nHiKbCY85SXKrjpWXXCTuJo4gPUqNZJRuJ",
  "key22": "2vjrvTkoD2tH7tKKJhZC5AkbdoRbXWnJqqnAUWYusyi42c1TzuYMUYYynumenic4M5kaxcmQzW15VcrD6c9M2ws2",
  "key23": "2q7kBKL4vybtHR3PfvpmH6YvTVrgie7vustyMohcjgEMUX6fHVvuJoyjggGmaiiSKpzkpnGSV52scnEXM9mvYqGG",
  "key24": "4aP16M6jPXKm5KB6KQRJ8owtwAxNhFWXW92m2SxEM4cgLuxqw5R7tMUocYL72vcpG8i56Qa5XiFPZzrebUrZbVVM",
  "key25": "h3XJ7B9dbTr6TTtuqakcBqrWZCu9heXQiHGXYjg5xTY4emKTjPoY6YNKkoA3LKGMfP9SGENLzJY3r8JNeg7nzKy",
  "key26": "5dTvpt71yT32EXS1i5gS3wYyWmU9wBKvfbbQQ9pxqs75A4CpZF2vTPxXyQ144XnGcDTYwNUzA2B6CS3wTYYmv1kn",
  "key27": "4FV6Sok9ZAB9s3LLt21NtXSzdCDpBFCb89abh1d5MZkJTNzsWm7CrRGX67PQAPKn1ZhprWWvCa9m6Nvr7bNJKJcx",
  "key28": "4fkiqb3mPdaAKsCFnhEqGNY98Hs2Yw4H2hBBWV7mwBPR6jsszzyBJ7P4EazXWWcpKFov5tqPjL6g5qCrxGuaSg31",
  "key29": "7YfJ8A3jPNktAQpzrcYeLfMwZk26oM1dshwg7q9EftdAZukEeozcRb7cVnT2VxmumXhvbfMt2sptbLNT3xGdEHp",
  "key30": "2ekgB4BT9fCX9VE1xfEgtRqTznSABmitwfZ7zHKCE1iw1LUgLFqcjRYcvpRreuNhXDDa6n7nebg2QNs25Znjtm3y",
  "key31": "2cFL22h7TP64gXubV49WHaLYvmoV98qxoqEopNZmPakzeBERoZCb4XGX6S9yfk8KHzLdAPjZRWcHddVTvVR2ewxs",
  "key32": "4CRPTePUtnudbJ7WyLxyAuqYBWvvC2FtVd1vdn59o915PyFjXSKLvJewbbz9N7GkJbmbKTEebigrpiCxwBg1MnwH"
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
