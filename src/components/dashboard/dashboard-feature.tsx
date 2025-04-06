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
    "5dJy6sRGbfs7Z86MjjRKH4fPGDFioABTAkmTTKqgyno3Z1hdQFHV2Jiz6osUsVwNrB7XSxbpLys5XKFr8pokGMXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKyjAJN7SdwrPPpwkiij9iNYk5u1nWBc2pwhDHhSacY6fKNDku8LG9mLRSc4up6kT93B4xChMxanYcEzK3r8mCy",
  "key1": "45rLSTSQhD9RxtC8at779xcVDaECtSxBbqbxSabRNKDjbzh8YDmouGUdUEJnoyjes6med46JJo1jgb2JT3QMe269",
  "key2": "wkA1PXPKrDSEHZWQFERp15SdjcqjKd1Tm5M69hoVBLauukdWqwawcDCkyySu5My4wPzEGcDSRRPeXsSZ47Bc878",
  "key3": "2fbuLX1UMA483mLqmtZWHg2ntUJKt9wq8cphJiTmhpss3zNd38a3Pg1uPjRAkBoJVstHv7uficZpQt2v9nPCJkcx",
  "key4": "4JMkikLJAHhnDnjqGLxAb5K36CU64R9cTdP1sk9H3bJQqwo8p7yN4Auf24y7EJUteETuBDeuG69fGaBZW6NCwkEF",
  "key5": "DbH2e1vX3gu8aRSMx8gvvEbS1687AN2oMosbQuEB3tV7ZbpBm4odUFxBxvmzZRYFUz8PHL3S9MdEWYsUzfBUYkH",
  "key6": "AUwJESsmuDyEih99ioDVLajJREFAH2mn6YHhjtbLsJPbcLXLDkkt6UFq2MzToxcKMkZPcLBfZwSo6TV5MpnM681",
  "key7": "6ynnYw91ZXZPrmr3USujZV8mSnvym6x44NmP9UUoqrdpPVU3B7iahqxzTzSTh47sa18VftkFYYAom9SWmJrbVvu",
  "key8": "6iCCMJFkrLhbB3DRB2q2VVyfixdBUNGSdXGjDefv2zCmDn6KjZWseuTp6Jb8Hx69KLKAqmTh4gq1TRQTvjzj1BS",
  "key9": "5JUt5smweoUuYZ1ggS4DrpJtb5xBf3kwaiS3adi9oP47dMKRCQ4Kum52c8SfwYcnSDm4hKqa49f66TCz2zsMzY6N",
  "key10": "5dU4MxTNf6zHmSqd4ceYrRsLEbezkeGTDTfCR5BqZCN8UtKWe2HMVMw99yaCkcsTwPmCNjZSrgKRnbA3egjbjgUb",
  "key11": "4DWC8vxTWucYeh8v4wfQ9jeBssDgwBTma17MCaMgJSrbDFam3daiLtjGhvJ9Fu6aUAFzXkppDzwoR4Wi6fbK4zd8",
  "key12": "3FVP5E4s49ZJxG4njVZuDHBL4vtTu7NKUKtkNHtUd6TLWRqVQTF5HSDrQgJgL2h9uow7SNARkd5x9LNu2MUx2pUj",
  "key13": "2dgQcVpfjJ68TsvYrcF3M1c8vS4UzuTzCN2vi1HwQaFCJRVQioYZVUHpkBwWjbYFW9mFpgmRmtkUKz3xNNT8wCji",
  "key14": "128eRL6789sJxkw5STbZzBgij2zkJmm1infjucLbASaJzQQ8pZdeSFjYUXajUqgv2a7Cumu4KcNLKsegcydNp31F",
  "key15": "5rG5LnUE8Ah3yroPJj3qKHgMFRiJGAtBWoKoFqVzmD6WwbvaNrkzvrANsLcRbseS8b5Vum4GB1SevpsLBZSZop7A",
  "key16": "5bNfT7aXXCQm6GTgvf47an13XkrXJdUL6CF1fwpmSXhLNLhtYmFiT3h4PEVQF8T4gAecy5JRv7XdddA3X3CQSAFw",
  "key17": "5z5BXt5gRurMdNmCYJDW1hYh4PCtLqHS9T1trtYTzaGJ99jpd1UVtHnKop1jDzGt8ZYrTDdy3WHvxXgpYTqaMLny",
  "key18": "KfB1kifWSW9uZeic5cdjrKZ6cKXxB7hmgUpszjabuYUr4DFhKBgsot1MrDgiqLrhPLaEpS62D4Go6Ee2F1vPdD4",
  "key19": "orpypsMDZTuss3UBFLBAevuYWjivYAWfre87oLFNuyZqmVpEbeW3vtPEPBxL1nrPNHJjGXJWH8HV52uAjUWCsSY",
  "key20": "LwEaeReb7fzp62Am1f7eGPop61dnCS7eetZnucdEV9C4YELdaFAfudynmgb7VCG44yV7kUsL4D1Ki7D32icWPYw",
  "key21": "66siNfACWEppmWBtiF4HRt5Nc1Vd1AoeVdvc16Aahfmu2ZrN64umxctrcEU6taXqsgJDJgqGtJ5dMzDGvWKSssK9",
  "key22": "5x7EdC76DWA7Nm3dwxWftDicKnxryezBU3JGWPVKJwUE1XDZgEwbvqfnWvPttdSy942AXW121FQH72epsm6RBshh",
  "key23": "3ZPaKQpCfoghNAeQLHymEdgkaRpvxwCP7LqrK9oAUqssm458wTd8avfiEGmhi6ezm7uuRzryZB1RVSZHCy5XuBKn",
  "key24": "2EZWXJEMcLHHqu5aaYXhSDLeXRsQirNJVLrPqcK9n1B19i7XYwhEPrr1DXFgEAnf1WFpTjGVxeRaN12TwUMYLnzq",
  "key25": "36hjXbB9ss1hL8Bam144bafYQnJwbZMJF5BEySYNWA7HWhYhinFuwQTEpUCXxfeQRU5XYfsSTPj7Pp941axdbVai",
  "key26": "3CdkbE8hjfPY3JPEaQJjwCmmcNVc1t4pA4F7FzUCGZ9N2WZrNkb3L4uF6z1GShjC3WCZqthXr5d3EeEp7jZGx8Y8",
  "key27": "42n5Mme8tntoTKT2imMcWexVSMwrHfLGTYgysHjFr4czGzmtVRKdJu6U2sce64uvDi6B1YhAho5PsuwAHws5CHQ9"
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
