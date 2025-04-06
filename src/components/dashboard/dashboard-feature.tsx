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
    "23YBbtxC31wHThMXGdvpsKagRCWXQJvHThehKkNUtQ7mSEkJYxsVvs29zUGWkXYbMT4j4RhQgeRZe27z4jv7ZLCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4NgzQrZFKHmwRVKEqmqrnjkYvNqx9iTH4H9WfKZGGSFLCingvACVQYz7qzQhWCShDE7QQLU8aDTGvQRCiVjEwy",
  "key1": "3tKRWd22ChtwP2Q4J2jvaUJnLCNeNN5wYXqGWTYKJPcoFRgnr3vQtpRkj4vqE375gdnguidD3hjboSS3Tu2Zikj5",
  "key2": "23Fss4RMfzJ6mnJS3wdPCbrVoeNnViWDz4fYTokmQx18P8sxFXDeTL7XTNLc7pcTvdM4td8jD3VjJ3RaAKaEeUf5",
  "key3": "2FKsVZ9Aks5EUWfVtkkLsPGcJRWVhj4pxkRipe7ZfFrHcmcRUD864fcqXqcBSB82EidWkQCExQAySVw9V5Kw8Z7c",
  "key4": "4orqbVH1Dmjr9dr6JVKy4gZd1sgYi5iJmLZvvhpkbPKxpfjY4SMECT3QvbTK9PjfzNbxUozMpq5SwNVPtio8EwqC",
  "key5": "4gUjsZafPS7k8ehaLujZdP6JdS4ueTSudnjoyuHXqDKH6JWb6NF7FViRHv2w6SMYyFr6FJYZ8KSV11HxwsUgwbvT",
  "key6": "4NEenXGfTyY3p5TzgCgHiPBXYTv21cGMMprKzEXZrEJqoa1eJ3XZgUnyXNJihy36VQUvgbnEqQHUTwf5iUJw1sAS",
  "key7": "4rBMxYgDG2zQ4v7tqXrw8SZ8jJEd4onfNaEYXViScwvJwDCRKJrGNQh8T9WVjtyffE1oYNkbdGn7FDagjt9dVeoz",
  "key8": "3yu5cbuHPNAuiCt4ZLhqZaWqruVP8TyHfCFmjSDcUPz8UM8ZjRMAv9xXPjiqfDKvKVt2AuanwmqSNM1bVdn2ofpd",
  "key9": "4CFwQWVwbizkJmrCgNNbM9Hw1dpCZSQTzDa4QBbr7LBw4RnYrwec5Ei2s7Pqq4FRV9SSDgxPKBGNGkgNV5ZQGi3L",
  "key10": "2rVWqchefWmdvexBkBZfmBWupetumPpDnt1AFJprwcAAvGYYweEfx38zvniooVBb86NGbh4BhHfqUQPMBXoCW4RB",
  "key11": "2NjH2ZjtMYXZ1wALK6kAZAiUgVReUEBQbFq18fj58zq9XxpYAAjAdmPkc6W8gXapoKTwpWtL9aqfrZgrRLrk1XR4",
  "key12": "3mJtDFtXzbbN1WmsLHTPxq2h3GGm3R1sVkmbBt9Ux3h2h47Txy1n7rpGuv6phsxkZZeXu2TZqxGEyfcrJAzgByRS",
  "key13": "5gsd4P7JE5aLfU6pY9xdQ8rHuX5YRpSTDCsSq7XDRbW335ECFVvX1apkSi39Fofc47uSXMHTEt7HBYfSVdkg6pNW",
  "key14": "4kwrGHvjTFtmVYfBjLrqHQiCadUrDXCKcZTsvaaEMyHnFwaBNTeV59giCn7BGN6yemXghpQThdYjHN3VZ5Th1c1u",
  "key15": "3sZx7Q1RdXNZcnyWwiq3Ab2gYDjscL9AS1kWj9rXpuYaH1LikDMRRck5BB6ioLLjXyRjSonCv8FuPd5uY4YWD4F9",
  "key16": "26BncTj5uFF3hbq3gRGcxy7MZ2Srkcu5NPdooP64LYYpgC1MdmH5VFW76TRoEvXpydmBEpvB31CYS59WM7VJXxRp",
  "key17": "3ov2KBiDDJBgy8kwknzF2cq3bMGp8Kj2Q3m1eVc1FjXR1eFKR28h6NQpHb2MRFe2uXoKW77Qz3DoqduSXn8JUX3b",
  "key18": "2XRQpGM1rT9mamzjaESFNwsZ5c9cJWaBp8kCyWxDfhPPt8C65PcSrDiBnQjZq14VCfmkNusjt9N6ETZwQg6BoMxL",
  "key19": "pKWHoMjhZ8aEpP3hzgD6cTFL8dV4iqBrhvVDxXBFhSYvZmbZy4eedmtm1icKSaQZ26LsYUPkmjQt1t2aHRcGj5e",
  "key20": "29mACv2A23qKz8bSv2QY5QGHdpaH5udjrgaETFHyFryUC8EjUPQi8HeMk5ppSjbebEUA4W4NgH6CaWXGpLiBeXSP",
  "key21": "2LzThFfEXVjmzBccc9ZCEisQroUbpdcAgrD9gyj3x8SRqLgi8X1WpmhLw4MNcMSpjj6naG7MPjUEfrHLPhvvpSLC",
  "key22": "5Y1StwM42UbZYtFUuEX5mBmW6hesbYJbYBRbr453YUgcueLVSj5Td1jgsBzmws7mDweuw4juPs7nnmsH56i97V6b",
  "key23": "Sb1JB4QvMiDm9kPgGz2EQLkxA3xhPKUPctDhrRVHnp2ar9YF1vwnTTgxQ9kr87NXjWdh5URVzj2Ljh48yf3njot",
  "key24": "3cQQReWd8yh2vXTAcUMvp2Ff6JswECHQy7ACfmkwMXB1NGL1zfVckt5YYapoCDCjCmJKB9GvmwBipi1xuiDf6meM",
  "key25": "53LWP5spmPZw5HSToWkL1NaQQP4ni7684nfv8aAvP5HmFcAPtA2izEYzjwEj9a9KNm4qBvK1Va69W5vQ66GcBnfo",
  "key26": "5zbc5FbkN9sPVuf6nHk1hagjt9BW2s5DuqfdF228sFiowXQxigeLDVhbtkHWo3g37mXbDGhFCH6qLKD9qXMSZ8dA",
  "key27": "2uYsiWi1mfE5xVJ8hcymNXBVxDCyjXCnv67S4ijuF7GjVimVShoZaMdU4LzorV918yfX9xADF6mh2G48dXjb829q",
  "key28": "4TCW4oUTLUXoa3L5yA7fxo1LtP7pfwNdbSNTDnkJgFCEM4yfVUefSJLD542VeqrMGTxtwxVzH2QWPe8gdr4LMx4x",
  "key29": "b3uHwV8c9wsYLPgbKWY3Vm8JVAtmKbXTP8t2adPrnYYLiJfCEjyBEWbpfPvBCZB3d9w2XLBnW7DNyZpsu1SV6y8",
  "key30": "5YvNVE1EcEbeu6dTsTF4RNPCVMKmpgq48xJGGpzp6pnrjin73yTQYFjAwWKphNqhya3dGwcnwWKtXMbYfB4GBpsZ",
  "key31": "3Zzsjp96f9hQrsmmKMpMb42Qw2MfZ2qKRKX3QYagQnazs1TyeY9GjT6S1fwxaMqXyDMKf3PyC47wJfqpghHhVgK8",
  "key32": "29GWPGRhpR6rRTGsRof7S1pR5ueSx4iwk9vR9MB11YdGjgRKQDyL5tK1eXru3Bo6x17PH1R5dJxGXSYBtA6DVRCX",
  "key33": "3RWFGJooUXk3sQmYFhDoQFz5bnTDH8YYsMJWyzAc6UFpZCNsCEE7rinKQFQYL86jTLuyyeNaeJY2KFUkfZVHhY8R",
  "key34": "4wSjGhiySaCzi2U44w2hpKYXg6DJaBMdfDHQNZcdPxVyvQSX8Mm5rc18bLqin3dECmyU8xC3X4jADKxTTuCVMhig",
  "key35": "2bPgFck79PsPxF2uoMC72yh2nYhijYfqnjP9ZZ1qCXk9wgiFFH56o9qH44KYLD8JirK2Um7W2R8qp4d8c7uzV9HR",
  "key36": "3GKQWSuAuDsvt7MSRFUo7Jyyr39LCRoutD9QZ6Eg6EmPqCju2HKvQCWB67DmLjMtLAkUWr6r5SYQVjnkCEATpYLK",
  "key37": "2Yxb2jva1GhoxhUvU3uFTkXmNsAX6Z2cLHYptHufBy1ks7R1r9rBGHi7ZX5EQXaBcsLFrir9bCs8ykjJMb8T5ZnK",
  "key38": "38yRxnUndLyXB4KCSZULjqbV2bLKRXJG8vGztpr2WnPyHKXCyKM6nVDfFHusf3V2MeSwhcJBq9oLrTuGhDdV7NbH"
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
