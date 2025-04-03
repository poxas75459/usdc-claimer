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
    "4Ye8wqK1xoPAQ7rGC5iNfoau5NxwajB4c5wXYJ9J9JZhGBEjK4XdEGmpHyzk2m2xotRhSiu5Fc6bqNZiAk3V7Y3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpFyVXXy12CAh8VDXngkdRASsU2HnJRrXSo6c9PeL9oeeo2P5eShnbh5bSRbRHbxUaBpPPDjSX2UExpWsZ3D36w",
  "key1": "4cJQBiBuLnPEcMiSGzhcgaW6pmLSdVWNUNH54hm1NAwW3fcsZVBS1BHjYfXG4x15eJv9mwrUXEuKygrw1Y88XoiN",
  "key2": "aFHRt4tR7N8sxYMbPa7bDSoHxPdedULVkZV6agPTPMD917kavw7ZFMQgLkpUifjyXbrzp4VT7HavraKzRHgEVGA",
  "key3": "5Y4dRB1nYXH5TtWKrbtXZyEmaeANBPLaEvMLDJ6aGubGp7i9dbRDs1fKvzTXM2qB3pPFEiBCCusnisNmL7B2s3dn",
  "key4": "5XJTifhWj5EBxvu2nUEeX3shEeMF9wTeVi5rb7mjto9QdxnzHLUvWtsdhR2mMJtDVahj6kgcq9k3ToqE2Rp7Tyid",
  "key5": "2CA3TvFBG5D2pTLxgyaLTT2ofRyV42kYimcKGvrpThkiUscoa5DjBMjCmfG1UBWYCWDHsAyznby6FmZxxQu38piQ",
  "key6": "4GB3jh5aSAfM2TZGUsHYUvHk9dwobercCnydEdmDbL5erc4SpyQZaNzZVvg28Dj7n6aUZUhAiy14BdTYSv6LNtxZ",
  "key7": "2HSWNfzLa3cDkizUX3AsCPm6C2GZXMUmo6QEJqoggs62LHSUbPBirZrpF4VP6HYvhnoQoqN2eQ8FUmwtiB4D5SjQ",
  "key8": "5DS3MNXHYR4maQPuKhkC6dzXkiMMQzd8n1jiDGhxAMEZ2cr3qLJhkD7T8soUUFHeRfbNdLNf4g4kTYoKn1NZ5UE4",
  "key9": "5Ddmx3vKZ249GLzDjN7RY7v2ndhsB8yVaAKZg5fo6RieqncKyXLqrufjGLvMAHwsRVHyi6AbUxa4NNXy2PDpA9HA",
  "key10": "25QJhvgU5eMgtfFZFUMDV5w9JHGnYPAzkjU59R6NSoiBPgLW9rAUhNGgvvZaGJpjL1Nkd1XrBWimtfhWd2GWKKGZ",
  "key11": "2rpAYEp715LsGhNCFkK2GT3tBKxfRJUnr1guGbXDzbhvdZeC6eakaJJP2TrtD7ApcRkr9sUtuEPP9XWG3V6a7J4C",
  "key12": "2Ng8o4N29HzGmUdijH4f5LQ9hSG5yPm4ioVtNySjfYs8TG16usHkFDGpJxVJspmS5rNnAmq5hkbnoT1WpqaqbK3z",
  "key13": "3PKSWZv4n3tSRRWM9RFrCHNYAqjVKvgbzBx4fjdcyt72FEwuXk93nEp82cf55yuLmyYBRBdGMDXJfuKvMDKPq6pa",
  "key14": "LS2J61yhbDcySVTevMcHRpomFfdBNeCUG4TWBwdE8bjNT5NAdL72ps1akgwWwqoTy7fP5b3rtXEw1m2KARjUx5c",
  "key15": "YcAucXaLciaL8N9GA6iHDupGrjz7csH58B7RxPHxVcyfCN9uFhUwwkuuHBo3JCQnZpNzGtbJHymaqeRJg9erH4B",
  "key16": "2nSUNFPuMrxtfiFrbiTCsmJqKHBDtEATZJNFTTWDfuB4VRu99n3PJyesBdkiiPYgg1wyG97A6tYTzpXhAzhKz1wX",
  "key17": "RfpeLdc3vzi5kJQgzMHywPpkKN7eny6YdTkQSPPM7dhcT4C284dXszai9gk59jqNboy6qWnvzfsNYnL6n8mdi2j",
  "key18": "3XYQyQb3iDFgfeCFQ9sufPvDEmpzLBpZH9JGErRB8acjEmt8yCBwD5FQSXRA9zn2aUPbVHf94f8SbkX2iGBeWL4b",
  "key19": "uabVgL7WdUkadsfRVh3KUGnG6SUNyzjvzf1uUFQGWAxHPg4ZcCko4rSJdYgbb6pNXNdBsXXk9UCLDcY8Ew6JQJZ",
  "key20": "2iDwK4A8eqBjsmfrxbMJFz8FHV9xUeCxBYQN5Eang3NkmqP7DLv8sT2nEVbwdakEFW2uqm1e8yS8pAzTzRBj4Bqy",
  "key21": "4AhqJ35awUJcNc8MAXKko7KbeczXTeBP4KCcH1Hwxdp9XoQwAsP5ScW2xf7yLN6MRRXdtijz4qRX4zysZbEYtwij",
  "key22": "34M1vnofpQhtebvNF9P6GM3qGfTNet3RHpbMngzEDARhbGYWP7PxLYJeDLLTDVaSgzc7Fp45unY9EFvzVhHD7WQa",
  "key23": "2LwBsVhSQheZAKNrBtcHqD6GopopxRVwS66ajCqifUNAUoDBXUxL4y7VnAv3i5cnMKcaAbU4SuJpQqFkXYBbXYk2",
  "key24": "3q2f2JYS82J4SG8vgDPJyFBnxjvXo818nYLQgjQswt9eUYe1o8thoGcxxsdvogqYvy5mMWxXdnVTJKNPojF3wiNo",
  "key25": "5VZmphqsjyykhb9YfcR3NfezbucxDURGcZNAx68xqzaRm9kcQ8eBnf4sXSBKdManBSHf2ASsS5V6pkeCsi4UrwYn",
  "key26": "2fu6gHh8rjDvA5ZA4UFpt9pQtPZo3dnt3XSjXihsogdqfhSosvJpd7XnvX5etw6vimevSE7ab4E6p4vsfNFzdPdn",
  "key27": "5shtwGGHuqeMbrKAGLkscQfxc15qefcTdA4qWVdK2cg1wPqhQz5Qs33S8RDebcveXKdJbnUTtQUUkzzQDPxEvJHG",
  "key28": "4HJ2MhLzEhG3nqAUEsLf68bbSkSQhihSChboRPMGUt1Q14YnhXtzNoh85gRs1waSyRm3kVJd38unTAWVjuku8bZK",
  "key29": "4nkBMhnjJvFM2gyVmTPmAPb6GB9MbWg5FXK8dzL8VxEqEpXWFomKKgc1hnKtP1y4ZrZmX4VYvM6hdXFyv1su84HA",
  "key30": "623zrDxDLQCBYwv92SqMVtztDQdFCytVUxgnXRvYx6FMAYUpFdyWudyH6aLcBy718Dd1jHLL6ZdZyBmfnMqtPU1",
  "key31": "3foiiddwcb9HRvRwR69JfWmQ54tyuVnu8jm9LLb2p9ZhU7FFXRh7fWPHBiCivCcPSnx4HLj29ZUTSiA1jXYe6uAa",
  "key32": "5ZyvFHHQzrphC7WZLAKFH2py2P1zTYcpoWT4zwtE6xV86Bc4Vs86ZKfmk3kbgkmTbHAmN8cUq6kax2FR22WKABHZ",
  "key33": "PMwjPcmkerRYt2xciyMkXFynewJHhwGMG5snzykSpcXGKPQPASiXrqbZe3KGCjHskxsE53b8DDpgSgr4rPyXdnD",
  "key34": "64oNZk8iATT9TSH7Svg4thNtKmj9eR8ggvbSnQKDXUM8zNPbL716p4ZCdFRtwWKEKcQj27g3rPVRNPQCZ9rNrGS2",
  "key35": "2p3NQ4KUNtUs3sqsNSEPTWuNa5ehNWxVf3o9x2FudksxdS1emh8Cdj7JAgTCkAuxhbFpWya5xiFPPrpMvYU7Z2dP",
  "key36": "mbRKXDNdBBtQ894xx2YbMSpc5omJmkhaELwbWFJTP1rRzeD9YY3SnJ4yFWPsastVAARUqWJYwb6QWxXm9jZDXBd",
  "key37": "2U54owfuboBdm6VinxPE8NMfZnLAEY4Xw4X7YfCRwuSDtjwr3EqJuS49KeeEiv4DsKVULrLXBZaCzWFNxzQ4HMmd"
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
