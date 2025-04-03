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
    "4usC7j2Ws9UDpe7P1bfYW8PFEsYyhY3iLUPQZzptpJubg6L4W5yjmAynKCMd1dwk12vyo1C8ASEPdkrWoNV3Ty7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XpmM7stJAzjzwPr4gKC1Q56yDnNq86CKdX57pYh4QLnAPD5G9gqRy3SBptQo2S2Z76wWy8UTmALypMDZXRQvqYe",
  "key1": "2NVs9NPUifsiaa7zdNuUpjQYkraykdvixURQbHbvMqwGLsYmGZYKof3cdzFXrQtu8tP8ZB52yx5XXg2DVANWAPnV",
  "key2": "56VDoS2XRvrvAPJBSV1g2Y79BxqtAZLA6NaWHczYYJ3XUgYXTqoNKMsT7HzyDcsky5ipWzp7oRYRuFmEJ8hKn65v",
  "key3": "4hAJrUq6sv7NXrQYigzzedZSpF4SPEA78drQNRW7UhAxqsdfnZjEs4FvHNoAzysXsLALcodze2EHinf3twpy6hPe",
  "key4": "2FwpHEPChiVsimDgLZ8qU8A3t3frQa89hM9HqNDbfHmG1fGknmxemyag5H74ptzKNj2ekb2JxWgz5ifqidud6EQW",
  "key5": "3wjRepQmvqMJjmNnsFH5fhnh9FEH5AQ7AAbmZpEPvVKYXtZmRwFrThQZcABG9RGK3UjvQoPLiJnjQoum6gJfGd4",
  "key6": "5vYtXJEhVdRec5jxNDpAngUxFHzDPLRBqGLmn9h8nzkJj8dg8U4gezM5bBjk4Cf7xeoXEJvrHu3NzrdSWP9j8Hk7",
  "key7": "24iSV3oJDMDWm2NfpAEApR4YVaqc2UQPvbtbhbe5v6kcVcmLfqH11fiMAPH6x7NLnbtFHWJZKkwBbCUgp983TpXf",
  "key8": "5vi4BuhN9aoDRZe31VXiogj77zqpV9BRx9m1iL4iFhv54jPsd8Hz3EhNmyJVm8MvzHBnPbqFNnUtaL72sowdPjL1",
  "key9": "24e1rXbnhow1qYXHmVsiz9dHfZdcaXnQwVigf5yP4HLDc8iDVunfUsEueVJNXSX4yLLdgKzhK69Jj78kcCckHJ2S",
  "key10": "3AnfrSbMnvsf3GN18JzbhHSDpHaRTyf141FKAUSthp9zWG4kHQVNZBSQx3JyiWjWYGjYDmqTjD64kRnmoXG5zft9",
  "key11": "ufhjEEpUcg3nMR3MRr4ScsF9hQFUx6MZ4c9V7J3XPUnhzGue8a4eguFHQSioAghpbj58RUKmd3ndydSipNG9eE5",
  "key12": "2HQmTT2Paz2RvWTVipH6QyGnHVeuQ4Qmv5Fswm1N8iTnpq1AFCDZQUTTZnE6Lh3SJ63i6ZtFDPDCVKCDQLTszH2r",
  "key13": "66NuLqE3d4GACaEUdpXu5iWhjkeWcF8ewy1wFPhtem9mjyX7FHdD4tggMVcx82kqd4GSZxAEBbTEn4Ygm3aFfGq2",
  "key14": "4Yx43vPCU12DBRpZsXqjAdMQcj5pVRSNGXD8qSHBfwQGnDMXieHdruTtrZmUZw7VjbPqjnDUE2t3gyNKtMSu6qce",
  "key15": "3WMKsxBihPdQWo8Afw5EtZvSkq9tm6aghULKW2q1CmjpoVex3uNAyaXvW5rPTVws8WcCLXydfdCmfbzfkXf9Wuh7",
  "key16": "3ANM6cK1qFmYVkHZNhHGJ8bxQRD97qKRn5vvSrpGB9oMJqXSvbkSqKdCWoYzBckd9m33UUJejy1VScCdj8H6WS8J",
  "key17": "5NSuK51PBaekRBzg9iP2CNXUgKWn2V2yEMPDNZHMyPreQr7bxsgL2uwaCFcPxWzue55jkr1RATQ8cvjWaEbusfBY",
  "key18": "eq2VtTbqYSF2wSXmGVpWboySpsfoJ6PD5xUtJkVwNPTYSXEqoDXpsYE3CPYwqjTbSsdscQzJ9knJ58Q21fVWvyZ",
  "key19": "9kRTBJ5jbe7CyYmviQoKT9CFiEWxzSr6213oy7yKNRxYnt9phKAS5KbBwYhkGLPB1GpecLYRJzM9TiqLo5jGzic",
  "key20": "2sXHhYv4qC3MVqXVu8dGYvHCbPBMQR4mCVnKDGWvTWcPZ8jgY6qEuDwFWWuMPmJXYDLsSH7iLVCY3ahS9X35PrRf",
  "key21": "3JMtTnkPXCFqJHcUJS3JkDp9iatWsU5CmoojQM5rS1se6JmuUsjWbCxMaTxTLhr9kY6W9kSThVLkQ9k1jtqPxtxH",
  "key22": "3WwzyFwpCwoHpSdvJdENHLzuh2iCtSZELvzYigsS73KKBVg7o6TPMzrMY1CDnrEQ33zGvxQeUnQABGr92yvrsLpk",
  "key23": "5rvLNWx5Y6XxS6EyECKLDfE825yAPWDHCnDybFfesc6GWfM6C689C8DuL1vcTzRWfLW54UzmbDB2XxZxJkdQRR4F",
  "key24": "654F4sp1oNd16ttYCBZkepcTADSR4TAXbb3PHVUMcUy7QEAvSasyWL9oGABibg5PwZi27EhAo6cvTYN4SQtgHqYU",
  "key25": "56dEhmZS3opW9k2tBXJW3uxxjKLhKaajiJPVs8KgyipBtMjLbZDHASVVzKJGPY6F2Q3svM187dvLYEteRiaStJrE",
  "key26": "54EhTukhTC4NVZaABmtcouD35ZZQdN1qdPSgon9wp1WSNi4i6sbZyccyUpEs96VEGD2SQ96QMLv4PT9XGALMSipV",
  "key27": "FV3y34QJvGBAAWQEKt4boJdqdYxVgFSUkNSGRZJ1fKySuL89QR6885gqf9UJUuotRv9nE4ER5dZjpQP7MvkjxU5",
  "key28": "4NMr7zGw4atXMEvYSPDnzGr1ToqYiecN2s2DX2cn6cUYNTjBrEbXwrBXvDV3MFJkAZo5mY1aEPfZey1pzx9pFnnU",
  "key29": "3F7twXZM5Suc43ZppTZH6aXXw4A6GPrS7NU4W3FAaRQPotGrWqDt6x9WnB89TbZMkjyQfWAQnMYVzMK1R4Aj4XqJ",
  "key30": "2CL5VVC1DsYEoLPa2FVsSydEUrZNDKnH8XyRy9wBNNVaBeHhAsff7oKoMHZi3bSuT7Jh13oYmk79N7nPT9ZVKgJo",
  "key31": "4GGk4x43r39s3jHi92jn4AXRiUztLxDoc9yQPVkhNByeF2s4X7MPMAbqz29u7ZgBmHWEtXQrWF1rUArTvjeuWDTD",
  "key32": "4MN8Co5kBx35VwdufxibvQHusKo5PCNMZbmxi9cxZ4sL7bkTAnTFQnEKsoWYifoxc9rTmz4pZbeXeTnM2Ubmftgv",
  "key33": "1ySAVR6bGz578eksYnBTYozz6cjnaU8nrCveuiaLhVjFjmnn15PXkPDas3ECqqAB8DgiR4gy5Zt8nYF4UYanR9D",
  "key34": "5oY51m8S9gH2YMpAESCSYc7AocECs7R3HhYtEPKUo8ohDbTntw6BwyPrv9UQ8zPMZakWi3F8Hjar6GmXJyyctBQb",
  "key35": "5gWZ6Gg1R2a9bX9scZWXmiw97XtsQhjmrbfEjxmnNKTgb3wVs9Up8WT6yp7MCKZUGKwoZYAUXkA4mcUTPrqKhnXG",
  "key36": "3jzLXrTgEQKu8fkm31NL6Zs7JSkrb9Gy8wH8osAVV6HFSxLhqnvVEP3ZMNRtnG8w9jT5qsfweGVxMDgzDFUQeYTx",
  "key37": "2ys3tjnahJL5m7FX6Ar18NwxAkwzeF8RLfi5WkyTzAcVxr2JLPxg8TF4Sjiyg3AFrmeVCUe8Yx6FkuGAcFSHRjPf",
  "key38": "2LrLJ8oxqC6i1cjxEdvncKqmcH5oigihRqEAoM8xHeNbR6YSufGTnna3EBYYTkNXk1QgLzcUey3FbULKtbAYMPqz",
  "key39": "54npSPuwFYerx7Fd71gwuSojtFFdjTGVLWfiaTzwFTjtxQMfak1xxsPo3LJVJGozDB9WgrbfgrwHxXmhcNazEpXv",
  "key40": "4x7taQYpVqdQ3rH2pkH86BvVrk458GmQTXpiv1xmdCiihEKzu28TuNGk28qR7DzJ69PvAwGx9sks35dAyF4ZDsgA",
  "key41": "2nzzpYYcvkWRSuYNrhdNqrscNXYT3XKYxCvsN7jDbN3b1Vw1wWk67Bp7FDZvCJqGQJxmpoXrpBrR5RBcjBwA7RV9",
  "key42": "4RorKgyaCCJ8BfmYFrFUUE9ncLwkJQTTJBRomDC9R2sKwKdUX5aCvVadjaj84AQg4xLE6HUtMVPccjqGXN8xn1br"
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
