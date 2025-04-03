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
    "5awRXi2uEB3CALyfyK3xYmxG97pfZqHvAdaU9R2NknmPKSaCC164Zxkqd2Vmcy5b5a1N8iqkxhfFGWX1zTN5EqMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6eSULwx1xSnh8WQ7qcekUxnnCfy6r6Cgs2sMyJmFDvp23rKv43B8sMYSopL3EhRu3ZAUz6yc6b6LF2BHCBvCUg",
  "key1": "2bB4Dwh7RQtgxjEuVxQKP22wvh2wgEDuVKJ7GH5pUc7yz1RQFuhf2gTqCAm1i8svK9KwQLyi12BddD4nr3pkV9TP",
  "key2": "psLDQXqJzXZAvaFjDqQftajViAVzpG5j8vZjVFA8cMM57ne1ynFqsF3PufiRNMGyi2b3qxgQYcehuDteTNn31zS",
  "key3": "4yRDYneEyrGjqXSeKwJjkgfFvYG8oya8yTD8wWn9b4LRuxSkTJ85gqHNAi7HEfsPD2yUxjDp5BUrEkvvJaTL6rJN",
  "key4": "5LbvtqC9DmZPMiMnjq1thtgjtEy9ymUZQX3tbvPTU3n8e5nKZ5u5KHtigEhzBiDjFt32qneHRGeq5MtVv3cxAVKq",
  "key5": "3Q6XAs5xzR1U1LjbwiAjvEKyo3q3WbGvNgb616NpSsh62zTVBpiBEZQSyx5sWU24ANtMyoafs11cN4Jh6E2Vn3ip",
  "key6": "2VTtf5SnBM9JW6ezpZQeSP9Nvd5RndXjnRFrLteMMMdSAGA3eEE56uCaR1CUw5CySV5xnshW6fMPEbpeAwDUcGvK",
  "key7": "HPnNW1cgdrGwej6UF84kYZseCavhLCZhcGneofQ5f2cSrZGN77hmPXrVLQJa5NgbMk2ueBMijxzuDML1n5ctfD1",
  "key8": "3QXRdQJeEkYGKnLutzSDatcdaLxKZ7EJqf6B6TfkMoN2VM8ketVY2h8CkLkc8upk3JB5sqmsvs1PPJ4Tr8Uu5Lig",
  "key9": "2CWooFQdZVw4MdWzHcZxhyophgRvfJgAyWBiJ31tocP6zE7fHY3GKWTAP14XB73d1h6iwpC4MEpmTjjM2kascxvD",
  "key10": "4mmiHV6P87c5XqJpY5vjYN3sFGMJDQhdrXid2ZoKDGJc1Qsc4sMHzTBxLHyuY8hMBXJKxbimpPE7DsudmZH5Y7vr",
  "key11": "4P8oHTunfDUG6t8PoE4UEfmQWHWVJXXAXmCEcynhwG9sCA6h6HEFjeD8PdRsUAHeik7zXw6cGbc89hVxhfv1n5Jh",
  "key12": "dSVFcRJPftvrGhwrJ477iwTgM2KiMMCs9uhuwjKJ8bSt8qPgbJvC7q6wRnLXztceBJLd2a5UcCGs2HZtee3LxWP",
  "key13": "e695hqSqwVMSwNPS7qKnkH1Ahny1mQZtuTrxGy3Q6hVdw11TTeuZt74hU86wrsko1cK19jezy5MfgK3nfSJBgdB",
  "key14": "9j4J1GWaxQzURwpSGEJWB2CAWVPdcn5Jipn5hN3TpLEkYgz5Wkgz2u4PC58Q3CUJNAkUtAS3CscHbNRVBd97hR8",
  "key15": "sCLWayC1TCh8Qkj4wAaXWtnmgzj6cMmi3aK17cHutFRBEPnbvnUQjnn9iCchw1iRTdXTg14uyk3oaRh7Gcm6Aeq",
  "key16": "3fNTd31VTHrsVD5BAk8E8ejg97MDRxxD6A3hcH4Pzpwf4DgPiBdYxNFN3UDwVQrZcZHaqJPAMGKcYmerCBdJfXvX",
  "key17": "8tx1uKdD45Tzt1scqpgFiK7d586b4bsjwBtipeT3wT2FZNUDiofrYTC8NPvLYe36dzcxArHAxZCQjqjmUU2mMKz",
  "key18": "4kzqi9TuvKkw467nnuB1oJdUDYFAdLrckvL7zyMCTrF4HYPqAy2f7ieta3Rod58oSdn9NcsLKAyDj9zsvpm3fcTX",
  "key19": "3G16sXuZ1rYcbdxxHeMLpLMUNyfGBEfmnbfbGUpLDnkWVacFAckf8U4RBokfy65AVGonYvmcNv17qEQCiq85T3NY",
  "key20": "5tCUK38kEQcgQ3Z3X9id5KisEhSAPp7dMLfbSU4vqHj5Z4TCqARt7VMm3vieEhAUBPssxYSj1DUZbQccQaJc3kPJ",
  "key21": "2AMUafFE1nGqDpuyPMDdv4aATyTniwzEgvRvq4AGmxahCbMJ2768LJzbhXeXrvQ6m6Zcivb8g5UUd7Nw8UXsg4s9",
  "key22": "3KZPjkKGjiHwHM8B9J8WGZerjtG8df1fiUu4FpYAe5fCSiQuLdYdHoc7z9WK3cC2Mj7y96rfGkjmSYmGAVwSEPD",
  "key23": "3Vcr4HEz2cqS2xoDzxgatjMngn4F3cW65R7RU78qj4myUrRY5ZkWrfMLrG78yfCjFH67arYCjySVEzw1JP85BPSd",
  "key24": "562huqVfwJTtkgVvJ8EVmjaUcmWGVyeZcq67JuzEjfhTm9yo5oKRpJtM7rGH2j6X6LTqYxrSE7rkqP57xFFjj9Sw",
  "key25": "3kDRyd8qLNiqFCrwP8BKxDyXZeKNU9MCUP7qYQYjKyHHpcD8tdX6R3dfojHm7wEYjS13gAHunX867GTaLLt1aM68",
  "key26": "3pL5xwDSnN6dthE8Si6CjhSSGNHU9qSLmB1jHZHnEh4gcrkmeBrvQAroZ4PArQLish26adVjH7ZZbUVt1UrGNnfv",
  "key27": "436ZAM4qTWbARMrok1p4azKpkPuSwEwPcmc59pNf6TdoG9tNq28uTw8gJ1SpZwbtc2iwqUWmwJmtFSzgBhfYv56j",
  "key28": "2AC5v1BPzFfejUPknUStyt4xzM1GxvKg6STgmS12ZN7Kj3B55EeH9k56X27ams6sYZAVESyCESJYM4nVqkHPyiCf",
  "key29": "4gN23iZ2XRwa1ZYNNUyLrDsEBbpYKtZpiSwJ21TbYnosMkP6KArQrrwcSEtQBU1D8APgx5U9Wpn578AGsv9AuddU",
  "key30": "Zo1MADidnzh9dDMaDkeEQVXdk8Sr95Kqvob97iZiFvYHKh23zKjzgYTuLcXJHcvsJQFF4Phs4mwMFBXcFA3MJzD",
  "key31": "4e6SKhWZ8wZN732q6LjiNgH4aUGdrCZ3UwQWBsXK6ySwsowbPTc6bvANtSjZeE646xhEXgFKyXPbyeU9H1GwMwvx",
  "key32": "2DCMySoaLevMiD7eLvZTQnWmHFFygMF8hezppqdMCMQ87mWc3p6AXEmnSAtu25NGCPe2SnQGPGNM1mL3f4GQo3SD",
  "key33": "dzYiif32xw1ib9xckjDjdraAqWu7oQUXeZFF4iKEcvaBpY3wTUTUeyawmYz9AHbWKmdjB464hJhuDtsfoUqNpgD",
  "key34": "2ZZAXPrXEKkkbYCSYWsx17mhkPPdXJcLLZxR1PqwTXfQRtoSbNKbZGEyMV2YroXvgTBgfKd3wt2NvV8YuRh1Ngku",
  "key35": "3TZGVtKQ92q1MhHFJYNchPXxGeRHoXqHb2NLFThktdt22Qubz8DaDUEpeb1pCzRtqPCw1c9zhNvvMsRkFwPCfMKJ",
  "key36": "4JCoeKCvjmS9UAcx9ZWA7xgVGrGusxGj7pHsMCZ8frFJp7bNrJGLGVhGFXfkRkoDvL78xgaUWBK6nScFowVVr7Gq",
  "key37": "5P7MZNMo4WAxuBUZ1ogy8yNKSEEZL9jtY8QGYNGgzsSjN4hemtbbJ5H2YiBBvxaBvX8GF2vqKFfvjjnkoVqeiVNC",
  "key38": "22ngBCdfaB9yBYx5LDp6UX2Yatx2vaD4xgq9sKzi6aeWJo4Cd7WPFQnm6SqKymJ5CgkbgjcRazbbv2dwD8KA5dFF",
  "key39": "4dbtbWUeuVNWR9GLwuuaVy7pTMSRif7kf3SD9srSNYWy7ZpgLFGRxzCSN5sPhXYTJKhvEb2v4jcrsinPWuhCUsLR",
  "key40": "4EaJSebcx9nHDMf3wXRZxkxVUmrdBBCGRAqTLtJ8PQXW1FNEqm9twyZ2Dt1AA1rkUmWR1kQhYEh9h7SenpF8tVPU",
  "key41": "2EEKAoLE8XY6jW3wp4FnXp4ukXZJfArioVz6AvKDkN7QQBE3Ueowx3SWzG4S9hti1n8CWetzafYFbUWkjK4A4Byg",
  "key42": "3F29g5qkBRPY5z7WpKymhWFqroAAuKepQ6Ywh9jDDqybWZPVRQqxcFLy3TbNwuKLKDU34qRzCBDqvA1HC46RRAiL",
  "key43": "5nfo8iuyYAs1vbWdSfnVvNFqwWDgfQ1oqFJsJ4GBhRzuBTiHYpBssLep7JXMdS68a6WVGRTj7BgXPA1gc5LQ2sZp"
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
