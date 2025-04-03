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
    "35a4e2k5Kf2qxajqk64A2xYmvmidCaBYZ13kKx2Ji1JLaC7YPgzhGQ8oMC9safusN8n1USVzJuCRrE5Dta3nRZWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBzr3QpjhnkoAynDNEHJomN7taTQyocZA7vKfVSz4725xFEVJBqmvbPZxHAWgMXpRLz8hF7eUEU9vPvJscr5Nd",
  "key1": "4Sr2SXWEHLKdCcPgXbGHP9c4zTYUemKZ8rJB6qLSEU17nZSw8Lhwk46pGa6f7FvKf8v1Y1i5fgsyQEynXVFZ848t",
  "key2": "5NrsmYkNPgmQEHa51ncgYVpgYmoxFv3g6d8vsAeEc5V1tmSLsBLNBN3GWNgfKgdkmZVjBa56jtuckSbxbKceqRge",
  "key3": "JUD5aH1gTAiakJe4m2JXAhVziBmabzmwREiuTcbLFqXxiHwN1vpah6uwz3ThchPSVN5xgYA5MCF1AdCH6xP5jUC",
  "key4": "5qL1XbuVSeAPF1q7iPEN5296EX8fZfc9FVzJNLuodcnjkxwWdUMHUPk92c5ZREgyWpvA5mgrCMk6oJBqhjBoNhjo",
  "key5": "5d1h46fTpqTcqN3sPB8pyRZrTagU5xAsxPxBBoh91kGjh2idrCmEYptcEnzf2m5GZ7BvERKQqZqCZGudS2Bf4VaX",
  "key6": "42DP2yEcj247N7gU967SqiU6wo9z3fDrUhE7K7nHqFR4W1pgKdwERHBziLJaZ7Z2LrJvuRBso6tkZuoWEFdDKwcS",
  "key7": "48YnVvHpCv4LVVs4hKNoxJAy1RGx5BVoojpTjA7LsXED5nwMgw3gD36vgm6WkkmsRVEwtpNvQMg3zBjZdEca3MaR",
  "key8": "4sLJ2wqiwwyPXWF9jv8HNFb6Kvf57csJ37UgckpNnJFDAG5Wg4NikWKy9GUQesPUtjj9wATU9Rw6CYTcmhcDkz1i",
  "key9": "37SQmz71UEoMXN6DtK6bX7rvegEXrwnC7vbDtho9WohnaisrCFdeij4wBj8UDXgxBGstMgExRfPqD1FWcWUusnhi",
  "key10": "5NqyKMfRKT6kvLCdFPv1UjWMDJE8MAWED43k3LHpQacqqRRLfM411g6766mQsGx8ujwVLyTYH1BQkcTKNG8VRDjL",
  "key11": "2sDLceG1obmH2s7oeohgopkqrXyxmXZR2NTzV12VpB7StKP8Y83bSjMPVUHkKFNZsWkvgEvRhKJz7ge7EWaR7iqp",
  "key12": "5J4Myv7n28WoD9pFqttCNh6emJTxdhwNNsUwewswVGyqLLFpVwa9FmsMxkvq4yT8hqVs64FiZQ8pVEwYWDgEBQh6",
  "key13": "5SUmMp31xFeNcu8sdjPg4AK6p8QUvDECVExJYYLwx6f5GqAwpCAvE3rGv5BsBZRKJUzWfyhRmXa9ktb7pHLCsxM6",
  "key14": "65HvaWriVgpkzbKRnw7drmK4bydyeJ4spkeGVtjVpkhg7kWeFFrXPEjbCuywd1JAGi4a3tuhyCCWFW7FCMFjMzST",
  "key15": "5xfbQL6zdP7oSj3xbYTPsamJki7TRrpZxB941qGGaMghmBYw67sM1qrW9eHLaDmTcFi9cx8UFjtrr8tRMZV2FooC",
  "key16": "51ZesqQvKrwPwwmkEQrJHtg3MNWieUHxP4DDpgs5GCErQaWbV8dxHVzG18P8MqKRfdooWzNjnPd1YH3NXuWUgmuV",
  "key17": "2B7XMVxVLGvMT3bJeLNcnFNWi5aDrCxnKpcybeth227X834dQypVKbuz8c1MVCbAcBcqmmfJhk4hNe1P4UUqrrvq",
  "key18": "5v9gfeojD97D5gfS5GPwMD3SYgPddVw8N5yaE21Sgfer6ph2gRv2fRoYcjsb5bctWkdknW8mveM7DkcTqMAHgPXw",
  "key19": "49igmK8N5tWqfnzw1vqSyqHRR1jhYk3ySFJ3TeEF8t3RWmn9FqtYdikiGAEx41jEdDm9eujLAMe11uRvWb3R6oAA",
  "key20": "2cgF2qxazXLVhXSr4p6rAprSscV75aQTJweNbhJ4q29fKsRJdg1QxBaCAfihtXvih9L346TJvD8Eq5DxGPZAZnGK",
  "key21": "3eA8tep3UHT7hwbxXzQB4SNoWDMpnqQYn11CmDiQ9tDM8XsYKuaVj9hbLjHjPMe3AcGex1wbWVBshFvqNF8vpmof",
  "key22": "5yCHfGea1XTDEgBHULMs1xr7M14SZDrH9pvuUpG1Pazg9dJRg5qJjHSnsEtLExmZdD4v2amqHafEMzCckUpfak5m",
  "key23": "631QG7AtnVaxnQHCVKGNrKkmFs2GifP9iZ6nbS3yhXU4oqYLLuZpbfg9bj3qSVw5QT3B9rMJ78Hjb46NmKf2ZSXr",
  "key24": "4c3YKr5Y8tb9PQCS6Vv1Bu6uQpNr14CbSoyXaA34RVPKSjeZx2nEnEGWLrG2MY5b17hgpkyDp9UviBtxXYCQ9uR9",
  "key25": "3nfZfBgMA4Lq7fB6MzJtiqH1sEMVAuCL4nNw52mW1uHmwU42D9f5LTLBABv3jjknwox71KWuDRHK8B5UxDDq328M",
  "key26": "27iFjvyXTopB6HozK5n8pBBYQvAG99s89iBXosP14NF4PtvG43ynHD9vSnEgX2vovvaFyXQkrm3WwoxY6g7qiPhM",
  "key27": "3kRJgEm3wU8Uvh51NezW2HFmsx3UhmtysxhryRXbJeZTMMJUu41opy7XvfJhDaFHMZPDgheNPzZtPKrZkDV4bmA",
  "key28": "GiXgEZxfpYxUxAMvfG2vsUkch3a51FayUPt1HoEwRPnQ5e6JvGXdDNNCsVUW7AcN36W2fedTfXUJnzGK7V1Fvwy",
  "key29": "3CCixJ4LRY3ing7c5BVkxnRwQtjfYSJ1GtAdpMnN27VLcA88FWQMrJFD4Rs2QAaoCxMXKL6Vvz78CdDjLMU8M2gs",
  "key30": "GJh4YA2TedjSsn6gD8tTMctVanqUJB1QKUvJ9Vuajt6kfYQR2higJW9TgYiBxfGAa8QucK76ASE39rEbStaGZG5",
  "key31": "4rxYY3TQhv5YVLwuPKMp1wcHJHaeEHq4ZJivpBWh4ojZ3Bb7itcqnjcqiPY1C8rkq2GcE95mGR1cG2XBVS9YZ1UA",
  "key32": "3M2y6ZWWzL3rKrhXTwKTkzastaVcNPea4zkKDzquRm4uqd1kVSANmNaJJEzfMfJpYBVjB3a9CmzuTc71d8Qf6fKA",
  "key33": "3ZjKH6JVaaBge4AxgpE7ygL9MHasEu7dd3t7tw2LKqVKBzq1FU9sZCvkyHbiZaToFJE1kB3JMLxNkU6bvYmKevNg",
  "key34": "3hwtvYU2HYearBcZjR934DPH7bexEbfxmLC8Q4PKMvaKtNvgn3S3wmLn9xSrEEPik2PRdQKvoJarKJr4rtZPpmb5",
  "key35": "3yw8XijgtXCPeR7ztA1v8FsRmLrcb7ipe2FEeRcQcPTbtBLHWrw8twCqnHXbw8nz697sWtqSQQFeus4PhokAXbeN",
  "key36": "4yL8EYFYj9Qh2seUJNU4CHC5gWN51pgBxcg5dfGdFNXPR2CpSFFvfn3FU96MuFDc3Z9JbitkNNH3knP5NN8QxwDM",
  "key37": "zWug2SAeyyHXKGMofzneuynwwH1NGeTj96uXQ3wrM5rKfy6P51AndqED1pdbtvK1Tzqy4KypFLUp5b4SqAcry3D",
  "key38": "quPfU92KzwYXwjDwpbbEE481MqRJ7Li7NV3VRdBE4nps4GtPjCZeb9zR8JdEK7zuxx69UQPrLb3AHXR4EisA7PQ",
  "key39": "5JsPYW24mKK8xXNGHedvPaWpvNWicMAopgw6fTBdL92aC5avLEmgycYovmQ2ZNiF92WZTxx6YqPMSVHRApfNWABK",
  "key40": "49xCf54Ndi32evJhtc2ib9wxcBrXwV3MsZ75LApK5TfJQ9RmVCfqEMXBTLMQkV8cCoQPgtrnJU8gZMTCXLirmd1A",
  "key41": "5aAxuLtACpL78T6RaeA8gFtyB8fGW4LhTpgH869FaxdfeMmep91FB812KzGb4k1t4dxUkiqsNw2Zm1ndDbHwxGXD",
  "key42": "3natnC1nTLLZr49XYadp6KK5Ee5heCvvCPCTE4uyGs6xvBv21xWFufdWMUDYE21xvhJh2Kt5MBDac7dWzJW3fPjF",
  "key43": "4LTiM4qKuciKpb5ULsEa3yVFxQeKnuFp21uakUoSHzMYcKRZTscv4W5hwF8hbEkgFksdeZJwuCoz5C7vm874JPon",
  "key44": "2uYatGQR6RcpDHoJmxH3WTX51EYN1EjNNAkRS3VfVvGLNHt3LtJh2YeumQFGJbp4QefCCnLxuLRbnZyACB1RrdBn"
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
