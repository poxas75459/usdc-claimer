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
    "2xUwgHEygTSXbBdf2URMVi84kSxTiCMhD5c1dakj7QsfViNdkX9MzddEj2on1YKxUXJnJeriYnsbCiAhUMHySa5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eo3njGgukRiZudaFpfnrZ3Zxd8Fd7qFf9S9hJpH8PrtLiXNtxSfdChbxqCEAAX9jYcJhBBLk1RVofyHZu51FaFC",
  "key1": "4brW3AuhwMnNxtRBmUb8ZchrKo2P66SbcnYwq1HHoADeAnzo54mgHV9M8CjzVcFy7uYAADAHkBDjoAxbJHaKDpJq",
  "key2": "3st44stqBVmDzTAnLXJLYNRcsRjSVGw9pyb3BzgWSjNL7EG9Dt3UftQ1DRMUYvBc5GVGSZyLWThDj9LbEAmtCsDi",
  "key3": "5yyLzi3PAWmkFrCmfwzoE6yTUW3tUMDja2YUu35rGviqYAwG7nerX8aaQYgAMm6PSfsKwA6rhvcoyeyrwmcZrMNb",
  "key4": "6aVnbjjLBgkxxE1ddMPBke9bT1MHnxDNNmXeG43d9xbMmGqvSYPwjE8kcqjUJyVptrgCPUbdYUmq3wGFtqshugP",
  "key5": "5Sue9bKreCAg6xQsMeBUHtGjCxqSNWcfFXazXAxB3hBe8JnWxZgvZC6GWis83etePJEr14q2EADvhjAd1PN12NgY",
  "key6": "4CK1GAbsU8zYSCFrhzNWungDKVmhQQshyq7gDXXL5BPVr3hqUYr1BGP4GFu4JghriaaES2RuuWNTbFCMGEPwsZAn",
  "key7": "2UunBUqtFztiV71Ri1AJBcEdHBhPSLH1Z1YSYFE6j9RS3JkgfiJrEwoTag67HrzJDx8fb4hnp6dioCJKC69qYJ2m",
  "key8": "2f6xbP6riYQadK5qHr3xHVc7HLeM6s31JitjuxXsSdEvkLxRFDx6svn8QXBHdQFzq8PHeAwnTskJL2WgwSnbB67k",
  "key9": "2Jh4nKWjB8NCH2LZZvZjLwNKLocqC3XHNBd72cbQ1bgz1RimrCG6msRNrKrgALoUJbfuxFcCjAD9v9zqJ5u7D918",
  "key10": "4V5sjQ7KzvmKMpq2ihe3x9DUFZUri64p2MTgccoTM2asHCZs7hKLnDk4fTKy3gk6XXT4xXsf73K8RuBNJkJ1TYmi",
  "key11": "18PGfni38gvv1C3J9bLHnhpxYrvtxFHjDPH6QVbab2uE9sCEx4itJKJ5y9Q7Ao2erhMAjoxQ1NrSzUh5UyS2Vzx",
  "key12": "37mpXBzRWS2FAUwgBFRykcCsPXtwc8CNN4BbXx1btCSgQ5iFBp68NLrczReJZ4onmEYz8hSKqbq9ZUnsAGz8iUhN",
  "key13": "4qcjQjXDRAjtWDeaio3JiXjdTFSx1JDAuV65KSjnLT8cA3ybaoXnHaF98uPeGJJw34fD4hDFj9dUtqnrJ8gwLc57",
  "key14": "SU8q5ocHyXGiJd3QogWMUAHR7UJtsXW5rgWGdUAtJEHtCw8bxWwYHGQuL4v2mJXmb3nxkCDJfM7EC7cjjgfKbAK",
  "key15": "3gM8TkZWtv9vkSwYXLS3nydbXifYaRP7av28ZZXu6DCsF7chwkCscQvsoBhAXe4e9n6ugNKcdSSEbE1U1CUoYLAX",
  "key16": "39uUMbRXwcmRDsSHviqDjXJVrXUnrmhovAvmKsGDuzgWFPUervuBrESvJsQvnwk2Kk4u43NvEPY55cGNKF2DMZog",
  "key17": "5XgmpCq44z6jnkr1xUqZoCNmS24VtWsCFqpbPtP4pjiNFJQjuJcP4ypqH7PdcoxbCQZ3sfyL7mfRcqAdZnGpfPTw",
  "key18": "5xLeVnWPwgsp2vJ54dxvUvneSUWnjMJhm1JYH2PKx2PrtJ6fh588zzVdCCe89A6hD92cAdtWyTL8BpL2WbbiXxC",
  "key19": "PmAf9xDAvd6sWXqtxWGZEd3znF1AT4eT4arJj8xVkh3C8gUxERGGaUTaBeb7o1bEEEHoEjRGnRPFETn3BpmJgR3",
  "key20": "4i6TbGCEAYxH2NQTeqCc7CiBddf8KijRmJoKxFVPWetKecvZ1S1XLk8abc36jzrfDMf28E4L1ait1RZACDAYug5u",
  "key21": "5sDkom8XxVE3joECz3oFfbrEK31KVTDKp7qE2huYJFASuDYkBoiHqWAZayzbsdEeFCuQJppaCmVXTUrS9gwTV1Nt",
  "key22": "8SH3oMRfEqKv96vQwvSNVugHQv4wUaw5MZNWWHnaki3bBzBnNdrSaCTKHGrURn4k4YbLVY7wpTVeUEDsiSdiioU",
  "key23": "5QTBLury1idVt5mEN2VTYZRLPGnYb6hfE5ZX9YjSqqsGXKnVaNzK7riw12ddWt3WSpBDrWhqGR3T8CNzzhnFUv4i",
  "key24": "NWFabUfpG38vSx2Vm5X47Na9CGgrMQw4zk5h84LoUgM2pd4prBGNsWyGzy4WaqaeQ2bai93XXKh8CqHrWnNCuQp",
  "key25": "4s8NJxf2cgUrw2J2iCK6CEbNBCiqjAHGWCJZEZYKwwTe9wHTQuYX4iZLZEtLSaecXxq6jG2WdGWYqzXHwdKRAn4e",
  "key26": "SULrXXLWULXHrSEzewh37gyuRCyxVqrLH3YNZQhYGatZMDS88kEvHWRNDrR6YJr2SQLXB1TEW9aXhMGznEVHUqH",
  "key27": "4qGEEAyHhPXY68qe18avWq2q7XQZ8NSqN7SiPG98QaAeiiVSyZq7D6Dysx1nkzUjvzgCQ2oxv1DhGRYpXnjra9fK",
  "key28": "4PN1WNenCSgSZPZRj9A1LQ3aZ6kxJpnX4AygJecH5FkhErBUaxocmQd8S5aoApNsAVp77w6bCJntT34URizzn8Wf",
  "key29": "2irjGMVEZbBswLLA2QUTzAfbcKMy6bv37XVimxhvRJV5Dbxe9p4yx1pToJ4gWGxpm2tFniW9tPLV9QTdjPzL4WNo",
  "key30": "4x2hto6LB7otSdYHFmiAppNzvUq4CfiVRUWjResgt3XJ3k916M9JnFhDbs5XPiGytKPTJzrEvQFreunt7sTrdjEv"
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
