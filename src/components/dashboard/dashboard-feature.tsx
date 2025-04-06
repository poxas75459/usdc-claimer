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
    "31RqN29etzWHs5WLB7ujD3QtPWzCJD6V5NQxsQJPUBBStDKKXap9AnL4skhNdhLVDsRDMzKY3ufYMPo1hX6ads6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poFUo4rH3yDDQAjYyCmn1nGdAR9sMB8G3NzkFym7WtVfp4B6AS4y5zvVJQwvYhgaQUX1spK4DxhAwAjewmnQvhD",
  "key1": "v5xJidvWW2THr4UcP3uRK1TEHQExvDEEVF7Ce1BnP81KDDjDaYtcjrTeNrK2o1zuYdZBaEzJqDgqNAB9aKfFK25",
  "key2": "3qzVN5z7srxz3weL4DG16w5p332efEx1ZgSKAAn6MCwcZmDsHXyMPrDSbYXvCNFbiU6hDGUGZkS5nxPEdFdvLQ6e",
  "key3": "3zfx4HQW9986ejSrLeuJnYw7xbNrLt5pXemBXqTXVk3hMhFepqziyiCcG95q1JwVB4vaWQsBXtgvDw3acGxiM6Jy",
  "key4": "4uyfRYUCkJWGRFSVaamDT5o76yyMEtb6FYguJxcd8vnPey8ZqVXdDJjNqmDgrfq54oCBub9JihRbsyj7q4ydoRob",
  "key5": "2CSSamUXveDYXD2SmZt6agYpyBBc2RM5x1vpsbJBvZAx812iset7qYTq98ocZHdeyXhwU7WCBSjgoACRpXDnc4h1",
  "key6": "3bfUfrhnRES6YyXW3kwfB4myk6mfvguz7EacMyj39TEvesLjvGHpdEKH8h4vk4mMvLVyhZyJRPqSkCCKwJawYdJt",
  "key7": "55Go4VLN7ALLQdd3TzLsLJJpUx4UaSY5bYPjNjJtcdHeYE7nj4uS3Dr1dhLVA4DUoNTqGx7GeJXpsP1oNehzhoyY",
  "key8": "2AXs3Ajf7GNyMU2DNCG2GwcWyp4auStUK53rdQxjeCPV2zeDhoPbMWuuKG28JG9M6M2cbdrHQCU58ZrahTyZM4gE",
  "key9": "2QMLFHdfuoYkQVzjAeynkyXuVqd8WENJDF93qHDmcgvEiDsM8y5wyFJ91DjiJ6B7MKAiT7UsdWNArd1NAjeio52p",
  "key10": "4V6SEVdYpVYMACcJmvp3PRFp3TbxZwEuUUqN3S4omhZQjjEMXT2d5XuxegkFEYJA7Yj3ZWoaHv3qWSW6mTqyyzph",
  "key11": "54WEBcNPcKxXwve5KjsFKfkQF8Qv9n6a6uhutkuVmruemkop8FpKWNxVUAALJiZa6mn2Lu1oobDNeUJohKqLhbFz",
  "key12": "4d1DQBG2pYyYpYRqRVshcwoo3rqboDNFrvEg7HyWGJEeedxCMeYEFWzBoqPFirEMqw4RremfmUiL766w1vZq3rJC",
  "key13": "598H6sH6GrqA68CYgYu86aPdKFhu1ZBwWzGJjMcHSFS82dipeUQCpzF8vJVzZzNhvjMtdkG4yGYw37X5HEPVAn5",
  "key14": "3X7QsFS6wacHhBiFGfzaQqnRVkBuJ5ZCzm9q7PHyhYgWNiMRDmHd9LisbtPskUEQFQwsX2RvSf8cGjGX7GGtBUKP",
  "key15": "43wa1zPjqKqVRqLob8iqp6iL68eSs49dr3gRt7saDPEU96RyJjkGwGvx91G1SLaQ4uwkAZovkfuMGEwP9P3h5g16",
  "key16": "3dHawfM8YzdwEewq5eyiSNeGdPwGKyKLvdpT5HVfizsXihCbiA3brytjh5V7RDdMqH4Q7KrjC8CnaBB4bQDQjszZ",
  "key17": "4R3iMj9JAp6XW8AqTo2EASbMFVHeyb7VRLg5KzzHQiSZAHrYeuKS1AXh4QgPyoRiVVVaYgHtSziyiaSu5u2DLp3o",
  "key18": "4SgwAHCAPnV2SowkshRz1oNcwbxFdkdqmZD3uoK9q5EDSpTi3AkHChGtGwwG672uTyzXstMuzkFm6GxxEAtcggFC",
  "key19": "5YupwnB1yAn3BGjrma8qm4JY2zALyRAsXCfPqAKVPthtKt5MSEDzizY7YMVgMymwXs7pvbg14V3Ypw5b5wL3HiCZ",
  "key20": "WWT1ZGqsPrdUDpvQGQsv15v93VAjSuTopnmguAkCXjca43xQoRzz43BqwQ37LGuBf6AUtyxVuJDU5gH9XAPuXiL",
  "key21": "3kNVEiD4qWh4QnP8qvyEEB9CGRrvmoWaJZPuMHe8CechCf1ENF7dZ6KfBXS3u8qHuqcjDfJVU9Knq4rcN7a9YHAK",
  "key22": "3g8e2D9gmJhHWxNbJR8g4RhEpXrBMsA1JchgrKqVsjyE1VMD5aYAEo3PuS2U1LFjESQt1aVQaFhEhViMszqqTw8j",
  "key23": "3KzguunF1vG7kYKp5Jo89LxzBAXHi5wucWhZxeSJMdxYNpFaCLYghqtrE4Ge1xi8Ldy9k6iETyQvR3B6htCDpqcU",
  "key24": "2978AFDvwKpbZAPDFZ3piEQGKi6BHegLezsaRi97DWMqSHCUnq47qHCCa5Y3YC9fc8NKqJeRmgr1aSzZhfNXW2CT",
  "key25": "3WMrTpNBmMX9WdG6Wxjn4YvMxWjLtMJayzxuY82awpBhMgDNRWQ8zwziaXVmLsG7wGpoPVeTypdRdNWxVmSWvDrv",
  "key26": "3d9EgikX4t7iZMp2ZWLmEPdpvRTvcrne7pczxF3765wSJ4vCsdXPJ3bKASu82UroWm4hDGtTaFRZqwuhsTj5N9a4",
  "key27": "423pQ1kpiyLE6AnyQ1Vbt4T2JRpK769JtoMzFNUbUviXBRHiH2SBgbemxa3dCYa5rVQ4TdTqWf6vHeFueG9bEeKG",
  "key28": "wGBBRiWyFt7ELUbP164Zh61nxi5HNtxEfkW8KaMgkeyvvSMKkcqfCSfD2GsqWN4aSQoXZQoym1DjjMtcGYrEe4L",
  "key29": "eYyx26oWLACHJDj6SMHbZ6kxN89yxcnM88LeoP4eehjafb7Ltm8kcfv1bEbTRhus8ezMH332KxKArfaL7oLW8ru",
  "key30": "3NewwzvvZXKcK2edmqtFLHdCUB8M1NXCpbthQ7VATgEALHCa2riowm7SnFpQszCnvcQ4JRc4fBKp3bTFaa4qJYyB",
  "key31": "3apN1EmFLQz5aL2Y5nKp2Ci2iQb7tuXZxFpKeMDpcu4x74qFvEn62457VRimByfq6FiuH5sKKrqJ3pehfuRg1Y7t",
  "key32": "2gNu5otLbowPqSjeFy8wJ9dUtVRpj9yibCGeKq7Y4geCLrZvEnrqhRxVDx37VG2D4poZWmwPmRpfokS7Uus75Bnj",
  "key33": "rXMrHznczQqBmfpEVzt1kvUz45JCaJGNDewamygpuDGFhatAp8GVbVu8jMXtm8NjftWQqMXc1texiVxYwoQ6cHA",
  "key34": "2c5YNgyDuNeUCAJroBDTa2HPSvf8z8qeuBNAfL4bbcctEo65hFCsW7fqEaJ7pDuT7oGzGPYsqNmYSGPmUvptoiTj",
  "key35": "62X653SHt1D4HYHcQGknQADQTJXw7AvP1CbZAVhC3fFpr8YiwQNtKMFV5DwfNNzACun6dJJupGXL1kx53ZLbCGVr",
  "key36": "5W5niRRKYRe27vRPq3AnZvrt7Dms7BPZSydJKCxzQtaH5Jv874y1GDrHk2wpwgqNcHbMd1K4Qg9Mt3DxLN6aduaQ",
  "key37": "5BE1fKyfsWp9qn12x9hRWRCNzbphsNmrBkFGn8ri3iNWFJQnG3mUHB2U1a9RJXKZmfZZ1nAkLsKCAZWNTKzDQJ43",
  "key38": "2ygTThCufqoihBAx2nYrNKE5iRb3nmj2QeZ8wn62woGghRU5xJpJusXJVaqoyHco7AocheWMUMgeAHHybib13eoT",
  "key39": "5vLMXvNasiofXMqop6vRt9kToRJcATJoPaX37uMaoLVfid6uxPWHv8Q4kbX7YY6dzRJCNwnCNBM2XcpQJYP4mwoU",
  "key40": "7s52vfCEfDWx9DzawKPUixRAfn5nb3af4GeUMgYtyKHn4xBAgzi9D7DNKq6KhSPh4gnjU4DiWWzBgqvHh8zmgdG"
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
