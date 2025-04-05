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
    "2z7Sidbe4snaTQqDWtmD8hot1Ci8L6oY9EzEvmp6Kc2yrQQELpQx7gvdaA2kHZczXCFmTuQoQQUzAYPLrjdF9Vwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsWRG3ywcHaLvBjaNQivptZeQUXoK69xoZp4wWMWt84MMpNu3Ku7dvUTmjsU2phJiacPkTmr7EYfoNSzFpnSt7P",
  "key1": "cv3rjf8pwiHqnN7Hgf248sgvo5brhZzZimVWdPYwvgx25vgSTJLcwudFrEN3CZiDGUN5pimPXXRZ3BNZWRv7yWp",
  "key2": "4zjZ7uaCRMoyAZAfX1fnAqquzmhmPmBRTfYbQHqJTKTAjvpWUeb9TrNZq975j4XcQWs3jZ2x2U1DBsX3XhebJQF2",
  "key3": "5zYEruRzU7PMQfxwgSBHudFzWRij4Tssr8vahND7H8xcKvqygfiW44Z5B4M7WBxH67xDKVAZ4jeXzmhTVcbXQbDY",
  "key4": "4M2GgBy7rZ3zYBXN4NvZvf41iDxHGLkXxFusoojMGusq29827Vudvw3gy4krbjchcyQ4RFuAih8d2NvXditUZd2v",
  "key5": "2x2pPgfjNRj3bAKozPZvncW29eNF5RQGe2vmEttmuJMMuTmnRvAGgtkJvzxBPaBkucE8VBqwR7W8U8qovmQaR2aC",
  "key6": "2rksPdFdqt8LfsGLgcRgrCNRQToVAciY3PVsoEuSEg5jmFgQJqnr49LMy6J8cSBkc1X8uRJmTUcM9fswkhXBz8Um",
  "key7": "2qLd7sKeZ422Nen4Drt8SQNXEgqBxK7BR6kCkDssxTkZqrSCCJftRka8KmYxM7o8N5TRPpWvS6SUS7351nvhWYv9",
  "key8": "2EEKwZX5PnqWWMF4MJKmD3deykHRd3dtS9mYV1CP3zTzV93qb3qwbECyVnSbATFXw9htw81ugRcSqmfAERLcjUxG",
  "key9": "5ebHhPPYR4nSucmHgkZJVGNp39PJ1Ja57C4SHyUdRAuk8oddZ99E9v3W5PHDDCM7sYT2SqJmeFix74hpXEAYfiPg",
  "key10": "435DH1DcsYahA3qwyLLhX9rh9oygzkWXEwRb7fwfSxaGLE6Q1PVKyj4k5XQMGRYYkzKmDEWFDV6ah5oczbb7QYds",
  "key11": "2FgKZkUoGgYa5QZnFrkvXefZZCTWPChieZkSQ1dJRedHCJwKbzPSq3vc7auHE6Aqc4q8Whs9giHorcGQ1iZQf19r",
  "key12": "5Zz7T9nJS7NnidBNru2T6v2J9TG5cyaXL2uTUeE7LNRf6pKmSYTPMABQDCMSwDZCr4bGj51LGkiHNwMhFSzNEPMi",
  "key13": "LuHSNs6Jdc4ndBeM2VSkAwsxo9wWvx8PFaqPjJrND8JoEMZTcJ8GibsAxLfibGVVsbyhAx3M3oAWyMxEZbkv4g8",
  "key14": "QayoGeVsZ5HfoZfyqPtW2TukgrWPmVLesPDxhGwQN1j9N1oB6tmcUSmqa4PKhyDmdJiBNAQZzZRMdj84rssTKMJ",
  "key15": "fpWCeiXxonSVg8Asz1gUVcf1wVJRUpBczQMTPhsDzaMxHe4T2PntJXEkBKAAMoRrD3w6j6UhFYUkAk2fuomgtF2",
  "key16": "8esTU1VBCmFhbmkc9HUmFeioW7Hye49LqnMuLznUG8S8UbJmpttJTpjzHCRAypL7cFm2PVaJ5Fxy6ypqNAL9CqJ",
  "key17": "4PERydkY3j7wEMEBABYpMZ3k5P1qFiVM1UXq7iFszp4FQC6vojGASeSQGda9RSQfVeFg1775R51kSK274Jk521hx",
  "key18": "5fat4crfW4hF2uorhjNnMQSG2juAzqztJqtUsac6dFgqBzKDtRhr2GUsa1AypTzw1zHbADaYgvgnybnrRPAQQf4J",
  "key19": "2KTnsHYsuTc9XqxZLvx4r5eJFekcdgo6AfDZzCZjaPADnmqWz7mUqJsaD3cK4xrGPYkdkBahSbaufPw4DefiGM3e",
  "key20": "jU7K9ygwPvCeqyCEKyvCd11q7GiAVRNGMoVamTMYP8vQSMcD6VUBDweFZbVQRVj6qUAgavMwJdvfe5vG97tbcjH",
  "key21": "5bJVieHayvrRN3HkvBZaGbP38PcSPKUUrQVK1jcL8uUC3TC7Y8BRensNLjsrJXEwzkyRD2H3UNNF9BrjpCGBQQ8h",
  "key22": "43KFJon27hVqnTFyx82CjzaKRKVYCTAy5Jyj97LXKHPJeE3nhcN2XxF4wgcn6W94GrvBdJ6H1VC6v1KrjoJF7eHM",
  "key23": "5SSu61QUspgfEfYcR6YXt99AtoaThWhrjkKT6yekWNwn9dYJLcpLqAfc72TSb8aqenFswCNkjPhN5atdgqV2xiyc",
  "key24": "ammmSSYZGD9vPmEBchf2i1YbZvDTBWckDGgDHoJK3V3py17aBzbLqrKfABDqS3DJyhbpCb9LF2Nnh6AAaGmceXK",
  "key25": "2BuWyx7n6cM2B5AfBxwEGG8KzFszLkpCbtTbztvmfFWWBgLKzbQYYVm5fvBupQV6CGe137tKKDMzyrud8UvqEGQg",
  "key26": "3o45oD89Eiy84VcvZ7ZhXbBMcjkeUW4zuYhoBRdgrs9MB6TvnHfUzkj6iW563vtzf17RNSY8PSd5curyFVwHjuLF",
  "key27": "5cPFnmNKj8UP3GcCJQQUubLysfwwh3GCjAJrZTXEjWv31iu6YVGqdKqRKmRQU5Lo4rs7CmfUSnE3vNgnNXiv6hTq",
  "key28": "42Ub8GJE44fS2u6SrXKzt4842xERXXL1C7dK3tiLCCPF2qUnwrDWrzq4bvzHLMdjjxAYZ6sg1wkRLVcKZJY4Z8dK",
  "key29": "5ezMtQcvufAWTxNAjDzULUaeRYfEConxPAYLUTKBtMsp43wo5y2EooxahX8MEnH8nbKc3Ty9McwSsXX5ZtaxRyJi",
  "key30": "5cv7Bqh7eihkE59jW5QCHxx6seb34J9dujcUkYAVX4gQsDM8f1HF4WQ8HSkLfu39sZWjJCdAaunsnyfqF1vSqAbu",
  "key31": "59PN6Uip6mazt7VyJKSCbgyQTBahUmZqwoVJVtK6UrgnhvZL8PYcRRF96azjdG5oqBxCWv18UZ9J8Xxog8Ffc3YZ",
  "key32": "3abJ3Cb1wb6dW7FT72AbVBx7R4wBJkbV8RvBsUPKTGMB9svcgDYcqvJRPcNbbGXmJYT5JcGtY3Zt6PjpAyr5XyuQ"
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
