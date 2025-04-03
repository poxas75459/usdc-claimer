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
    "5D9YUzby13fWCi2W95pckFyvVxQFZ6AaDAEPhsTjFowZQCMbx29aCWaEA6CwMgfbUkBdYucr1BrztRdLAhVo8Pgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdxqamjEB4uGq4fLWyFF9q5QAS95ZGzhAMRKi2QKMgpzS3qQ5emRXXxHjEGkASo6T2uVbXapLUMUbV1PFwJtC1Y",
  "key1": "53VUaBKZF545KFyhbPJBtZ2dBnQAQcqTk8Qx2H2L7UDmvXhT3HWCBbS5a633KhDjgDbK6eTrpJ666VQ7xgE7DvrK",
  "key2": "5yKfozcufaNAoUnRUSkixQcv49QxyQNyusLd7uk2veTX7nVgHXi2HgS8N4pghXd9DuUjCCnBjMmsbfZ9hqiz8Aaj",
  "key3": "3R8ry3bJfdvmUFRV9EtjCg7m1pNd79mDjKggLZoi4ehxB75GSP2GSxMpiKj1cJ9bmGuzNDbenismwwHg7Wer8rDu",
  "key4": "4uBE7cvhs8Aw44McRPSBwEg3eWNmhPUfTe5r2sKhZQAUpMT6D5QHSjeHQdhvMvYV6odJRkdZEZEUva9VErntvppU",
  "key5": "4yAsKNJBB7JeoGYfVrsoyAxZKenivSw5YHPiQuwnGU7Y578G7bFH9FzCzUA2qXc1wx3sG5QjoiDjTzKPVpmFbBGg",
  "key6": "5AgFh68mZVRix5cG1KzEEAaNEz5T6rHQfKPCPvcrXFcAhVignD5DqFhBZR3HfcZcrSTEbaqRS5hGzJSahVgmtjeY",
  "key7": "5r9uUXTtqMW6f3Ar5eW3QC9171rqiBSvt6uWLGiFHkrNvLeqEhYHG3EbB3T6BB67TD1RKhwEpozSDkAaGiXc73G2",
  "key8": "Liti4SzERHVLBBwaWPaDSeiwN5zuuhL7x6Gqv3MrU1EiZadZ3a64rjN7kDvP42cNm9tD34DJecLVpgufJYp1MKV",
  "key9": "5inskZSfsf9GQpZvvdr66qrtp6gZaJtJSEdogeYSSfbsrxgxhQvUiKxQwgiZqSQjUChrg2wKfByU5NK2G2LyEQQD",
  "key10": "4aBZyRNRtGs5Sj9KArSyRGuscjodgDSoh5Su6UipZecAehNdZMn2x5E2YjjTdge2aJnAiXcdreJC4QfgwYztd2Rt",
  "key11": "PVKfvHqUabtmC2KJM1Uhjp4qLkNw3nMiUFDLjXyuVWj3Y771t4ADdmLSdZXXounEwjTY1zHEmGvSbUW2gZ6QPJe",
  "key12": "3wGccZ6W9u9JBtv3rxxG6iDqTdzXURFKLiQ7o3vZJn5cVDG9dc8N74aH18Lz2sJTyV3nLRm87N4YLjsVxxRjNBs8",
  "key13": "2ZXq9mEW4eLS1fmcot26ioYRTTH5WeLwynczRKokpaRg8yoCRfb4xTkeEMjJtBmubEGdWxZMHGvQGzt6Y17udJii",
  "key14": "4uttVhpT3m91kzVghJXLoucPGuensZBwRGVETuV4b4q8bUi58WVeKJvDkfbCqCxCHk1x1evSbofTdvRF7rLWjmnR",
  "key15": "2qmn2wUEyH4Fhohun8Et6ivhUTjRzsQvFys3ZpCLfATPGobQdxhdFjM5ijfR9LcxPSUUmyBbCYxurLi3Xa1UTV4Z",
  "key16": "5G45j9QDr4yvsCxF8h28UXRELsFtJeiQsUFmZM6UcFmiRDJQmLDXJBbFU5iWRVLxtL4perQnhbLVupvrhGx9RNsQ",
  "key17": "2uughnSzM7mNqVtKpKfUKFna7GgT1nci6nJKz2XhjssF6LhWiF5MzyzTpBXARuzg6haeKYrD7xZBZtPFdhwGpiVo",
  "key18": "5bnuR7jWh4MkHritPoU4WthQdUkJS9d5sHb8G3wyxP8TZW5z6ep4rVF9t3pP8maotumXaJLuBtd8Lf4GMjkj4VhA",
  "key19": "3ByRUULzN3oNZ6N6WiewZnVG3w7VTT6Tt9rAN39QkCzsCkFz6WEu7rrxGGpJfj6ua5DyvnEPEjTCLex5KAH1fngs",
  "key20": "imraagvE5nxuPCJywW1LrvkrzeTqV9rgsc7RaMQDVBu6Jedr11sC98gEYshfASvVtx1c6ufU4eneLx3ApLPNRzi",
  "key21": "5fKzTHpppFtudjs4sEC3wUSYGWRwLByVy1s88c55e8hbGPpCbghj3dECeY7kUgVcY3y8QABzpSxLsEXVupiyx1QN",
  "key22": "2o18PwjCv2wAct1WfyV6eqwyb6Tn4HM55EyvFeRAj81eKsvx8pPsiQD6kqkgW3D76suJqyiAKGu1HQ6MSPEJZ3Jy",
  "key23": "5AijVrid1B6J53pb792wrhZWZqSLgWaLnZJiZfYktbm55KDzSh212J7mMNWJsqnpsTbuGv9J8HukXJYXxh72a6pK",
  "key24": "ThJ4tUpFiVNUMzckgMxPyuU9H5Pmw9eYRyJnxNmKkpF8ukrZg8sr5zSvxmLf8QNdKgAnP7J6XcGEZujvrA3132h",
  "key25": "2W66bionqBC3wWD9kEGdJecbJjjzpE8oY6NbShG8Ken4H9dQfvyZRqyF5XQCjK3XjGWFUmDejpykb81xC4KBHsUA",
  "key26": "2Hq8MfbDTeapWShTC6g8wjeP5cE9C3K6sa7M6iLPp3r4KAh8kZKesAxxcau7mYw4NksX6rXPARepgwNGJP5sJP9m",
  "key27": "27843S6JaTzzWKpXvrQZbpD9idU8tTXsZpH75z1ESnhirSTQSoBKYqbyzTcpTMFJgzswahhbuJrzTpbyWo9rovy5",
  "key28": "3eam5TnPfUhhBYrqiuXNjxDUYSjUcsy9vqoZaVLMsK59XxV2i6Uwn3ZQ6iYEXxaJJSfJqYPXv7EtHM8EhhHcUiYL",
  "key29": "3rMMwbcwdYJzmDqdG9aGPoz1Y8AnqSWHfBSHknQPnyzxvwpAuHotco7qtaA7vCytkk2Jf2NtdgpPqnSD8Do9yzpE",
  "key30": "3YNC5BNgNS4vFF2R6mtuoEKCnY3Vu7DAKDAvPVSzcRyYuEkgdE4tSj8LrebNMB28oYkpPm8AXbr8NmyBPKWEC3Rv",
  "key31": "3yhhRJq1D3w8HLwmgmZ96jsxrUbDge5wDiXPU4kgRRyf8zoDHQeCnoCMPpnP5JyE1aFnUZ4H9mfS3v89iQ11yeCW",
  "key32": "28xFmWi1q9qArNtcWY8fgGi7vhLiUeHw1XaaxXEjnryQeMJBrZHQJA4Tomrg4jrkhpWPhaEqugZTJMBGsBx4Czw1",
  "key33": "4w2qiwLbQE7evWFq5ok9htDF2eRP3FK92uV3H9we2PJvfBcXkvzGUCuJ7tF77kGdiws5yJzbutEeTbb9nPqWacDR",
  "key34": "2K8JdpYtpdFHqmzYt5pVNqAdWdDMsK5Wp7B2eNPjah33fxdZQHHRzho1nGNGcSgD6q1np72qpuAGkVF7BKrwq644"
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
