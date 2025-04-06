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
    "3jm4dPRyupRdLN3m1123ELAtrfM4EiNpJ85PCD4X7sHjaSuYVzU5hsm3f8BR1dB6DqfetQdGTXT5b2U9FQ1LHgS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDTcUzgmdWY1v9U95wyJJ2mS2n2dkAXqprUiK5fqKfoJUPtR96cHpQeqrML875E6r83EjSe5ddhgTSFac9o7VUZ",
  "key1": "4RP5wzKAwfPthNR86i7nMGAFZEQhGrHs7nDQu7LkJ7pGeip24nRzAeBWhMVLipo5vfcmqW9nZj2kzmhoQ2fZn5aY",
  "key2": "CAkpLSmmiANEdcMCHfVh6hiCV4vM3RqfMgR6hs9RDLLkbJKkdGsoybPj1nv6L2xJvSr1snNV7F7CGdm4NxQR1qf",
  "key3": "5Kt14jRSfNN4v9pSToyHa3CYufZJR4Y3SSj1AzmJxYirFTTVE5VgvGu6PTXsbDwQ9zgvr4x8VH2uaKRm5oPSXXoF",
  "key4": "23skr11BZ1VCnDC5kebLXjZ588JLqfqZLx8rATEsaKyanCGse4wLfoYXrE4jUxKtcAjJjyZhKK3VyoCrks2JgP2d",
  "key5": "5xfksRvu2K2SPJd6z9YNyvrEKS6LAh5wQLKzdtBnmYDkwYQk36ARjqHygpwyh9WHBvNJPaMVHxdxvoWhekpNidWB",
  "key6": "5JpU33VNEHmqDCZuSsHWAofJnYeoTWrH2PKyWNwkuFhnMephpJHRaS7VWVVo8CyBcmeMSqXzc3W3NAZgAajSJPM5",
  "key7": "4y2naaPotgPmAHt4KrEbx7vm3cwnszbFic5S3BBsEBFLhW4p3z7rw6YDPExg5hfL9ENFq489NcK5334QsNUF7sLp",
  "key8": "3gCnPiKXtWGgz7mqThSHpgCbX6Qq5siT8CxS8M1PjnZwoAiDs5xE8pi2Y1HDkEuT5ZADUtvffCq2omihig8QeAXu",
  "key9": "URtmhc1eMmm9ptjEMC6h7extuSdiYAsBgNZTZezh4STojbhvv6GsNmJi3KZeHqW2i5VBX45WPn3g2akpmUP4gAC",
  "key10": "5jZ5QSTTSmu56eDKFGbnek2F3QZJ3E51CxeeZateqjY3WsKX6XLcxMxYrtC7kiXXjhcAPqcCMRKAmxD4oBZ4uDY2",
  "key11": "2K5NgMfcJXhXkwyAwX6DLibTEj3iDwtUCm2rR5oZTpWeDRDGTBhSf7CjhXqfHqqu63ETRF4fEk2dvgUUqtXQ65A",
  "key12": "5a44imfnsKPM98q5DWaAkXR38T9YxxEemy3sp2NQS9peyhY1WGHH3aRaCSVtz1GELzykw14hPg7Z1q5G4tmaAJtn",
  "key13": "5dSqH9HFWu7ZScJ979BAr8nGNqXH5qXzCuEwzfJDLKBTr6dKXG3chT3rP5JRS1Y8s5ebkARpVnPtEPqonJuGm8Gt",
  "key14": "4hQkc3nD1ESfLKKvFeWGXWd4yzMkBp96GCPctgHtJeFDW5BkBkMBctsTZ1QFSijqn2TPv4qtuNCZysWFNBLvmSLp",
  "key15": "QGCSqAXBQpaiyvSTiwtX8ZjVYBrvcC2ED1hCo6rxyQHbQD4BbnFVWXxCSjrtjojxNH1mqwW46NcfxgLeAADg5A5",
  "key16": "5biGZWSsKxcqjV4dTVahkLkcBF3b4fdZh4k2jZ679grjXnRsYsK2xW6TMVmAnVToAHSXm5xCF6BcJZAPZ7XevHbE",
  "key17": "atzokJhwUHMfWGQ9t2PMXz5YvvSmLfTh8MZKXPo5AC1gZ6T4DNuMFEFurxsADKb6J6YuNqqw6ompvVgckTjeDcy",
  "key18": "3eXU4qKwniqRKHd1qhUnt7dXjytgAendv7hndZH8BwNoqceoE1juJrjZBFtTxW3kkjcM98PDmri1dzru96MNZbW5",
  "key19": "56f7v8bNWX6LoQug3tJWvJ6t49yNvXEqYB9cteFVzKqfyjTUm5U9DYTsqm7tVajm7UGt4a23de8MK3HkZiTVzPuk",
  "key20": "2kzVdFR354QQTQ6n9T65cvrTiFuwoiAs4rqiddw552cs3fvf6gs6gYcmsMXiDgi36Yt949ApyYWQvQUqS37su5Qk",
  "key21": "4sFbeVHhwWs1pidLiab64wZWx8Baoxj9HD5ANc8CPYACbVMNRJPpNG3AYrFwGpHh9seNwd8VxvzFtMzHwkaxDXBi",
  "key22": "31zEbVWKPc5cnf46jdKBpYWQ5Xg4JzdYZggYrZdLcCkqSY66x7Zf7mWomJTEACeX88iyedfppGswcc4seJzcWzFV",
  "key23": "3LVDZVCB1Zq4XtdXe7bTjFe3En9uSs8aVmnYo6cDib2mDgBiMNY1V4FJm7U3HuQjRjRWsGNQsNFydzBPAZjczmMf",
  "key24": "5AzcHFhPxVEBLpgSeCTfd3RdyKsNs96bQ28ELdLopPYAqgKq1oKcBwRQK6SZSKG6eyepZ4PFAkofSw4go18wR8YU",
  "key25": "4rLAykVVEDTpdtAnk2b4bEtMinFKphmgcusSQswp29TaPYQXqC9bTyCH7RqC6faoPzWZ4cCnN1yFk5dcKSr4AL29",
  "key26": "4i8HnwyAeLbpp2qXjzgpmJm3zgfYwEb4FaiV9YpDD1HAXcj7h2vmtfPxTcCmujwxaWUh4XD91U7H6Y7AEia3gz7y",
  "key27": "3nxcWV7F9koeTfw3trg8d6XXJmKudyqqyW4WSezUysdnjiS6jqqe6GKpfBVRQ383YFAjkxzMFnhb4HdXf5BMKQMy",
  "key28": "ezQ2szZWRqyPhb3wSj6obynJsiR8tPmgaupYza8C5nVoH7cKpU4RaJowinyRRS5CQM93Z7qUJ2uPXuwJKcevBu9",
  "key29": "5uqrt679eKMp7ptPFiwpNHgdnbCN5JmJLKQbXiitCe5nhPMxs6yCeF8k4SZrZ13pm4EZNf41NeT4faGDz1Y7NmeS",
  "key30": "29QXVdP8YeSCVEGPPNtL3cWTv2hBfkqSjs8NZb7Wg3Ki3WVpdxM4Zg9j6UNqyTw8P5BrkiHiAovX2nSBaNvLCfKY",
  "key31": "4VtdkbCat41vbb7Nakhw2uKbe7BfGbwsUerKgNFQJrzwNokkdU1h3vsvYCA1kygCNe11hRMYrV6ZG2HNYR7nzwgc",
  "key32": "4RhmY2kKxQMx4LQ14zuEbKPZquCpKcMbZs4pJ3hA1JQyeMzeHwCEXLjovjZWQvdkufUXsWTjaFDxrfwSaYs3LY36",
  "key33": "253G5fFRhhA1iPxHisXnm3qbqJA5ecHLC6xDhPNKAVRwDr3QrxA3KTg6rEmLd7zknRspZEjG551NiPqNbKMNyPq3",
  "key34": "2KbHpDaa66dcEhLaUPTr9RBQJrgM7zN3t2GXHpPZFMcunfirH6yYEUpnPXSg8g4Qd84jkVEmtM2HcUsgXK1Pgfqe",
  "key35": "3m6gZaA9mYLzmc6bp7EvnbroENmxY4GMz6oyanJdfGQi3RWqKeYQgGJBjxjMtE6EFvAcF8a6x5Wd5YLr47LapD1t",
  "key36": "ByXCSXNERGbKYGV7GjeKt5V4AGz889XgU4QCdtwmfrRb4Pzx5JoDjtYAQFoxqUhZQT2G2iqvUAfuQJmkySgVUTo",
  "key37": "3xnn73wJxHRfK6cWrGbLnQBRsQ5ygvCKRNpt7qDioH7icTMYBfqgkW4VHGc5qhMTg94gWAryfcUxGLV2dsaVrMQj",
  "key38": "cF95ByM9J635ueRDex3rfRAKUxrgFbK7U8cvpvJ8qet5aoA2rbazghbdSq918hocRXJiufqHDFSP6dGMXQ3bjyB",
  "key39": "5mPDYvuhuDtcoNA9ayctfVaE9p7PcbZgf5DoR1JJuoFSRuY6LEycqWqC62yRw1MU5aEFp5yi4X3ufDnxefdCPvTd",
  "key40": "4dxYmtZn3BZpXxt2PErQ97zt7uZ4RByBh4sb1DZJm36tLExXg7tontdVe77BJvnzFKWXcNYkBd6U73ysJqi3yVVN",
  "key41": "3EhtL24jpJcX4v4sRFSKgMvG8r6ce7kDwbDKaBm9evU9WmL5ULdvJuUfK9KV7tj5NuXgtekW3Teyiw14iPqm4CL4"
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
