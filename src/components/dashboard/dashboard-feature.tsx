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
    "Z41F9R9DzbPGB92BBTkqXjLSbJtx3EAJv2eLuBDLWGmZpAroBgJQyFMMoWGtBEBdAdLCcbfoo6PbiFGQScps6jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrPwRKcSkzcjL44NMFXL8dw8HKKfZh12hjFwWDTi6oRbg3HbUFU9HDBPZo2N5tyiyVCYdHoKSNVkHqaAbTW4ue7",
  "key1": "5gWgkmYYVDhMbuPUrExdKCKtzjtccnmE1akX81KSCqXtnjuS3zwvCcqU1aYiVYkUjCcHWtD4KFUzPpP5iANHkSxS",
  "key2": "5y8qhz43AS1rN9sTaHygGX2Cj5EigRxukAYqBBk1q6u1nHBBGU3SM6gksJeMHoYmGhNVHSZj3koNXsFMk97GKzqc",
  "key3": "24683mZt5rsKkQoSMRsqybwDN2KBM1QGrJyQYDGiPVDkauGR8RH2JVDDScPfQATxpRJEbbg1n4HxyC3nCwqHVnLk",
  "key4": "5sFkzXBrkCKuwoAWu579y55rMdG8HtByp1EZwHiid8je151KuGXpmBe5wppZfa5tmu5fwUPEY82rcyRvTLwhfaJ7",
  "key5": "5n5gmJKoZV3RxGsTVG1jt9P2yCKRkJvnQK8pLKNeFp5dWMALC5YwdzVPjDcZ2AU9KfQdAr2r3xnhUj6LoTNM8kTY",
  "key6": "3QTFPeMyALz2h2VYWq89ASDVzmwosEhLjXbwGUMKx24ZJP6sE7R4aUHq2ujTXJy2GpDApkTWfRnHk4hx5goiiKce",
  "key7": "392AkGczyPAQmhE8hSMpw6wBRUuqdmcLWTZ8VJNG99KbBt4FpferuPuK9oreqfGV25fsnYZxhBm5hvMoycKWCAYP",
  "key8": "3eDg7AWZXdFtLbSMVP1RP289dVmHhXLyWX6hsPiBW3itTTWW8VDP1W93sBj7iGpvXxtdnw2DSwzPhZpmwXT2d5Po",
  "key9": "5MwNsNzbLodBi2oEwMSw7Sd2KJtvgBk218ZT6F5Ket5zLcku1oGXNNhwjcT4Db1R2LgDoVTUH8LVtT6NtWkbArKQ",
  "key10": "52WgKB1UW3NNPhD2eQRhQueEyvsyFbcHFW7Y4dNzkQMbH6ffbuu1d4JP1C2Z442dzXm5716dffVKJxdY9tSgTS62",
  "key11": "4xRypDHzt5nzQqe7PbBvRijNPKLoGs56UJjZR8ddD3aynqYVkffyw5qQYa6BrJPXMawRgsph6755yQr22F13PEq5",
  "key12": "4c9Gy3ZdDEUf2yqnu5XGJ15vW9fUFojQijQwL8VS2xWAAR76nMvXcsK4CA4XeBTt5DqQ18yUMWrr5hpNs5rcq4r2",
  "key13": "PLjzsb5LswoCeQBokZ9NgzocJQN95ntVsWLUKPqmKSNBs3kekSRcVjXr4yYRgdgme8dSgQoQzLKePVPwuaufqvD",
  "key14": "9KJWMon1MaWvb1yiTVsVWW2x4TsfHKdcJZYCrGw3mCRHZyifAJdffyMJZYCcwswk8L4qqeGSh8J6qjQLpC5w7ui",
  "key15": "43Fm2qmfuA1EfFNv2hAvL9XyGfxtSQtGU84zMV35jPk3oMsJFCAL6M28WDVYTAUbJeYQwgDnUwQ8PpNQxbMVSkkh",
  "key16": "22K4syzzXeHgjQnMmyQnAaKdxReykRWPHtLf9Bczopafynbow1aPVNfkcF2432Te7FwZfnrGoebArTScnfevkrFS",
  "key17": "32vkDqDhGVEaUEjv14frg3wiQNYJbQyE543Po9RZTbZoY1AQWGQR1bHuJZ1SqkuoBBeoFQPmysGC7BTGa5CL2LsV",
  "key18": "3cX5Aq1EiJEGgkev5RkyYJZbksbnsnENB7utpzpvJbahwyKmzd7uGPMsNr364KvARUCJGgMtdQiU3zntxDLjKeum",
  "key19": "54NZq2Xjz4fqmUsNZhEN38YxAvwT5yQsU5v1Qsgbh3bLL6TCzptF3MRuLEMZ1Co2tfgLq9A7rc1Rvnwkt859KKzX",
  "key20": "91NuiXYBrywauD74eSD3bJDoonYdpC2N3rM4JWk9KYU4LzZ2W2LAA9HHVe5y4BQ3Y2ro3GFgk69vHcFVL8VPRT7",
  "key21": "32upKtQxj7C7VmxysjYmbxTR4oa42HoLHJV5voD5VDtQu2S6RV8rJctrMVaj1gLSPLtgvaq6WjNbcSNsyCJ6EjWy",
  "key22": "3hiosXXqkBEArJ9zFzQtW3gFsZKbeKVNJobdXhSYrxim1ZDX1pAdQBvki9zNE9hMXdr4dn57uk9Kmv2NRBPCEjQt",
  "key23": "2V2hFGgFfs11bBs81hTGo3Xjac3tpRr5JRueCZscwUNJPa9sGSqwoMrjbSChDY7hVxvBU3tZLqCYm3pVqxib8EQ7",
  "key24": "2kbsjtnxpQngBEAiuLxy8S3mWFJWyS5oyqjJr5GRJkbStunMgWX44AsjSHGXSmCPjXg9C41rSVbcCxK76HFMN9Rq",
  "key25": "2Y8QPKwaprMXw9ybzCwPHreKoF3mT4pwWLJZnKjcAw4kosifbn8yfo9VouJBmzXFxFhB85C1e7eSupdDsNUiu23p",
  "key26": "3w6wm7Y3grQHN7ck5MNg2S3wbFXp27L5Vy7B4ef6JyH7bWSqG9jTGVmscDHsYc9M588VpGRPigCGUeYXSbqF36kW",
  "key27": "5aizBJ2bN7N2RyW7nWTpAhDfPEBoFvb7KruU2Us3hU54aXemJwnxhebzEbJ1e5wAk3aENs3EnUXWWHXd2cT1Urbw",
  "key28": "D4wNasWuUCaQkHzwinK7Mg3qYpQVtHhVdPySBuDu5HP9oWywDszgxc3bLFfVEd9GbASCa7SmdQHKtg7xaHwtyd8",
  "key29": "4Kpu5LyRotsgPrf6KmHt73qHr1QtoW48rJ9nckxarmd6zE77wSSA1FPgqSVYdkDyx2hpyqomQT6QyCrrqmr4VyNg",
  "key30": "5wNmPKSJ2qyWjVjAVMtnxh2Kyr6FQYh7S23rykfq893UQSSyAnbXG7SR4zbJs7RQ8YTQvNgVYej8uFZ9ZWEFysPr"
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
