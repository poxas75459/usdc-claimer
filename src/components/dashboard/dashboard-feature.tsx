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
    "2YUwQxLwriQnKbuJjhUZw4vJ78e8ZhNBzkRtEMZp2dswWv273tqkrDLQvwKMVKWoEEAqvmWTyvFyziFDjf3ADw2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooL7aQD9UnPErKJH3AeeKmC7e19y3E7FyMzNb8i4zAfaVQpQW6UBtpsmbxGTDXjKQABVP69TyvZgdLo8B4hKbFd",
  "key1": "2rdaFGbi29GSNMfgxy4DJMoXjiFaxW4pzAyW93pkFyjwME9uJd9bPMVd9SBu3VBTuTuQrAphaV2Q3BopYCGkNchU",
  "key2": "24SXmK2rjiSDsmpBBoYhb33CY7Pu9osTLyFfbgi3Rj8Ebmk9LDzeb3MSdjYLK1wAkyoGEtaarNRE7MKRqtEXf4nx",
  "key3": "4oZxgSpv43rzzGgVeJmLYgqfjaaPsX1Ycy3P8tKii14ASvCD9iy7SJB48yZAGQHKU3cgUuGnyf9P6dLRPJLAr49C",
  "key4": "4E8izHgaHD7UjAjJhNQp37H5mytiT9xaLdCFdwPVCmMo1pYjxF5g5Z9rTmLZqwzExZNpGbZP82vkkk1EHfoJCoQT",
  "key5": "45qoNznLTcvSMJkJLh1pUyPjybQLcGb6mAuK3aJ1totCEgnD8vd1C23aBg4Lv3LaCG65S3HDz9tkzRfUaJrbDsnD",
  "key6": "2hdXrk9oYAkCXbhP5LdJSp9KzrZNhd7nnHXpEy1TJEqCz5bWhFCoeRhWG3EKPqXNRa5ALWkJoLtNUtnvGy4gkz4Y",
  "key7": "4yGz5utUQ9qhtKzwh1qFERxZykNadFMDgCmCe76voQY2KWVfmYeGXc1JhjYrczfUgnwC1UGbNQBiUyhV6uDwLKCo",
  "key8": "BKxqo2MvRzbwRBkt1h1EWiavKWGMTYC3v5w11j4uoUESwmh8NCGqi3HiPDgmXkxtuX56KsRmEDtRoa9z9fR2DmF",
  "key9": "2EqCqXphcDJQvx7pVJ95dY1pAJcqb6gJGpb4TMaW7nfJ1QTG92tJ9EeFHZx3bGaQVG6ayXHppfwJTN8TMRbdD9TK",
  "key10": "3u7EQwCrVXvqznaRhJWfckzZdZok683kdTowfQkc3HVNGBjmuxmo5Kkn4j6nxvmS1YDGLfi2TrntkKvfny8682tQ",
  "key11": "4aM4DdvVXSUUFCVyEpk7eU1NfMpuZYAmDVMBXMbVg9Xd7fpVxYBsVAZ81PAfg5sJLT2SL4F4vufriMd63Pvijp85",
  "key12": "5FQbWvvj8j8VPqUjr7vWzR12UX2nEd3ekuKdrcRyxgDAMu3NupwKD5ximatdQgCJynEvDMq4rVDpba548DzpbFxW",
  "key13": "54tYcixuEcJsGmNuBiAAga6SrgWaCmxKkDPWdbDAq3wYF1bHhHNecFgRhJhjcuCAtYDFvfNtd6YzTHp7SfMwBxS6",
  "key14": "3hi2s9kB3fw2yD2b8ywSgmmTRzNE8HrFkakA3LTgHKHbmzwh973u5EvDeMC6ssAaRF98KvC7uk58vk14nrGtjvzt",
  "key15": "5URXRqcF2Tz3YZaye5TL8o94WsZySw5ZJ8YWgH1WmCncA1foB61ydTDFU2D9vobBfakHiKnFZfwRqwAh4SXVvNrh",
  "key16": "46KUQ9WqMu5pC2fTh2gGV6DSufEdJ9cNKFvT6s1xgkx7w8Gi4p2wrx3ZoiSZmSt1i43tLHc8X6LY3xQhWe2S4nxL",
  "key17": "4wfTeo6jUyoiAYoa4QTTF9k31Gm2ztSi5Z99abTZpL7A4Luu9dXsEJH9kbGodq3BUMsppG88KYSmAqadkJc6ks78",
  "key18": "6KfNu9DwBVwNNZmb7iW9NpKp9RfyfZeqoV7hTSfY4up9B7EUNUrbQ4mSJdyDqdVQ5dNb9DjjjR8BPEwyE39iLwT",
  "key19": "3UJVs8gmwNqYwCEGwSG9YGEbWVz6BgctZLvm4dL2T6wb33A3ffZJpJGcETKcBs4g8JxWyKXjjEnnunUY65yCcqnz",
  "key20": "3eyQne1WiA7v58NCQHYUBv97P1SpHA2hP7SjF8J67BQgTKUu1Hx8UQWTW4ebZPPa9Pb6xQLjT7VbLTS2CQ8c2zT6",
  "key21": "4FPAuG7SJt7wz2v5mmBYrpbfsCHGe8tjG7NdqUG4kMuZ42snT1eN2UyHLD9p8bSDtwt3BXMTgbcQfrbfuq1fwif5",
  "key22": "h4X9qcNerCGdDUpe6sGozPGypQxMfLs7QN2Evx7ArkyGnM98XaiWYW8uQRSP6bpvSF2H49wfqpo7uLvmbYcMh8C",
  "key23": "2kkxuN62jztDySGu3EJuCpKvEu3T9fHN5YE2jQ7zjEW7gXXatTrLNiNJws4vMJK41X1WyThEy5CXniVW4EeEgsVP",
  "key24": "5nMXGRyEDNy1JGVSfpQDtvQGjaVmSQQPsZ6izQ7Fbz7thsDV2KNc1th99VoecYaoiEfE6P682N2Fv16nYqG21Zwo",
  "key25": "zQcQAvg71PDygsVYuzibtX7nSCqmUeZ78qKZjYJMSP6YqkFcFDmCBchtmxuBrdEbSJPADLumx2U5i8UEhPEy3Za",
  "key26": "2tM32hqcqprvXNHV18NXg6adej4A4gHnaKo4n2RGx9RzfJX9t75Ri2Jy9amFjMh8RBtTji8vRamyvT28wfh4CDj7",
  "key27": "4Riuky6qZ6ghzzeh1fWMejoeksXu5ki5k4Vgwv96QYpvXYjLYi5QDpZvwh2kTG5xTu7CkfNkpy4LgRo3j6gjeTcz",
  "key28": "3ASpoAWHxqRBM2xGRp4nHn12rnttYv9wsA2Xss4f5X91PGzMGB9bs2c8v9NUjKZoHY9vXouCqHvfxUc7VZvyYQ8a",
  "key29": "7v4NexaijmVg8zvjSnueHeXsENdgNPPG2w6wCNpvA71fvHwr5qXzbfVmZs2qwsSP53yXNaEZDaozrYQuLiEXanj",
  "key30": "5Zqcvr4rXXYKBEDXE6P8owQpRwCmRCm1C9bJeJYEbTw59msMxQYuAfAipqG5664WwKXfdFe8rrev8sjDLiQfRxp1",
  "key31": "3LHDZutWxgb2mDLRPA2kU16kmznBDGrKqxfqVhXYuaayhxF4DRtbXYxQKESWts1jrmDv5hrncoLfp7X61UoGiVBi",
  "key32": "qVXeFT4Pv39NTN221M3sFuZMN4zzehmG541k4c56xeu35YbZ16WcnDqmWNHHqMMKxN2rSbisfivTn5K7LFRXcRZ",
  "key33": "4611BUniE4hHhyVrhZ62UtveDd8Qumgm1afe7b8FYBiRa4AmdNXrBiS7VyBdyf2kKeaaKMMtfB6GYYV84c4vc26p",
  "key34": "4onNYFQcYMbfsV4vdVtq5PhpjBjLEmUiTiCGT6Bjs9r8hXiD8QEjNHVxqarWgBX1JoqehxcFBbdrHzpRg2saFUKb",
  "key35": "JPiAukyhpu2vcEebcpkDov6J9GUx6WABoMWVbyGtfriH9rqofkZTJz2dsCQ1NcDP9Dw22Aw5BYSYzX4hrwRyEyj",
  "key36": "2i3NEiDb3Udjs8EPwTEa7J3DT2KC43cxcJXXad3QyZEobCP2K4PpaZcpG7Y3eNVS2RdG5fdiT3gGfbAEAk9fPzz7"
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
