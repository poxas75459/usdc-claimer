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
    "2NqowFBfYxouMoVNSscbgfxJSnACcy35EpSDRNRb2kkgpzmYtuUydkv93vtTPxU4e1cTMPTqMzbygxzMxDUoKCAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBUd6SQ1oghFYQ8eDuuFsuETc3rEz7jQ7u3Lre6rX7yEQTjbBZ2Ser1dm8K7guC1SSC9pbv6EGkLURm4AYzTULR",
  "key1": "54hvZNftvpQZ1dyQtwWu51J7w6dGADvDkFi2uPDqNy26LEqX2x5mSTFuWiVNKhnJ7wpE45poozmdyQRaGnmxfwwT",
  "key2": "3mNtqUqRJDuxVSr4eYcQc2GvjZdT1iQ8hGCGeju1mkjoE4SkuAZvUBo2aMjqgf296KB5hfjHhZFHHaDe4erzqrdh",
  "key3": "sbxacr58WWHzWKEJn7jX35KCFHAvNJzH7e8urjxWVUXbcg6PegqQNvXc18Qg5n1JSAeDc1x8kQxfLvySXbhmoYv",
  "key4": "2TJQRFQFzzTgY36xQ6dz89wqZDvndNc9pbms8ZDqHoNUxigUWvcgpfsjcFgczH2JDM27AxDCK7K6bi622uH19sDF",
  "key5": "3pXnTk1x6NzY2xKRcEUeLfxtwtPDdks3BBzhgUNRE3xC6MEDWhpqPQSPgwzNcNdTxcKEq5j6YZfJWj46xVqUHtKV",
  "key6": "oRY6Q6gA99hUHBSeYvV8gCiEaLVsy2ZdMFLhPeMzaQrNGkebdN2oNqvu1jGnNoqszQepVE15q4QDSCGpzos7M4d",
  "key7": "3CDdpX6W1B1wz58uqQFEUs2yLLmheQW3uvzZ8rG9kSZHHHYAP5wtXaeg1ZptJ8aEN9KLbgJmFKs8bPd6yvZxvuvH",
  "key8": "1RqCD1LfKWq1MeavW7cqNc7JQmWjDjiTYFLTTynnVV79smUfdZa3prLVScVpHQ7eXDKxvJJnisZETW1HY4wZa1D",
  "key9": "2AJHiDNMkgwPpWTUpqhkygvymEaFdGAgKYxzePswrLTwRhTbpLnUFKotzThZKaoPhY8UwTty79UnyxJkamUMhB3y",
  "key10": "25jKFNJLbx3yXY3qwxsksb6oi1qERG9TcQP68t17cZggCTCPxjNJpGXvDhanCkTB5rtmRCRcS1ZWwhBi42H3vSaR",
  "key11": "2zKw9KCzAYpTVdrRiPjZhBXogrVyNkEPmA8Xzhr3iUnNotwaaJFhJc6B7QpKXiaEmkvqiwadfkii6W5L5khzuZ6C",
  "key12": "bCYqDW4ojBJx98dxp8dmNAHVafZCL2YZN2NgD7fr6NtvmtgSUBjuKuxz97B5SUH3mqXMsuv4gBapjGmx3McMM27",
  "key13": "4QtzwH9feQQnKftEBKRiuSL5ZMDap8uUYQwJ7EWj7iVnWUHTnV2xE5C8EqWR9Cu3LkhUjs6EWwN6JN6Rj4AZcX9q",
  "key14": "2crjEuEdKxrQ7mv8ie7c87j6qATcghkZHpK6VsA6hqEZEGzh8XrrRqwX4pZwDUaYY4hPqxXtUUczYTrKbsAAApDZ",
  "key15": "43GMURcLX85ar88Bda55k8T7Q7PP1cTNt1y7Qnc3iQAQmb8RXEBhmu82RsmGMqnSWLKiZzgjXjNQGAkspDW5CGXJ",
  "key16": "3A7E1T2DTUDTSapvF1a8wxZoQRQs75UsV4o4vWYEEW7YpNhJxGQq3cFcwG8Cfg6NFT6rCtWufjgREvrC1y8zkMPf",
  "key17": "5mnoHUs4ssNuyfZmbdz4xqs3G612Y1pC3uLYNg9aQPTmkKvzxw8G4ZsueCKoeKztULRQZQ5VdE1aaMHKBMziyhb6",
  "key18": "26gBAq8wkA4TWbnm1HSUMtgPFfvL2LvzdTxH23YX21FDjjo575rm4SVeAxQH6wbnqWzCHzhovVvgH7hQiysKvVGg",
  "key19": "stfsPK5DxA4NwEkWYpsQK8mernvQUJS91iWFLf6nmSq89feSndz57CLA2q1ThpK8cEV4CcKQzu4hEEvi92i1AK6",
  "key20": "3fHf938V8WsdfRCUhPSsiE4K8tTeHLykd3e84As41Y3LoGG2YeFbTxVWmwnw4BdwuFMQFDT15uFPHJ93dAh3RqSW",
  "key21": "35BvRyHERWUhcW76e5sRLfs4MyppBGdzqE4w7B9UqUrdVWbiL7bireaKuCt6H4KbA5i9DQEznYmYh3EnXVcutLp",
  "key22": "2nR8gPMRMPTrGcJLCXtQQAAyEHmbSmPCMYvvYQXWoZVAVksai5UmnbjmPG4giSHjY85EspJ6uCH7oin57vnWBgRL",
  "key23": "4JVAA1wGcNXaFvF917wU9Ty8x498HcKMxVbht4aQBhEeUmNzqUcwZUmPjNEqEt5vaCsvWPtPhaQZ7mZ3nmPjBXV4",
  "key24": "6LWpEbHsJdWrGuW8wYkaTrATzbV76RXJdWoxwv9w6akPbKeTpPzs6NdnczXeA1JWmZq4xJjtzhwuNsBJUHviV4y",
  "key25": "4NgKX4E3Sy8xGs4PsQhvzUTj3EroJv6vqtMWqszjVUVPDzhP9zAdQaHQb1yFWphGym7McHUtuud8CQtmB5sdTDfF",
  "key26": "3kFzEKjYgyZuQA983LGHyN8ot1TckzitAbAoB37f1pXSxn1moq3Rx2uJ4SY9WFDUyL5ujZeubTVhTf3ThbpJ4zes",
  "key27": "4HT5KBnt6aRwZ18sZuQEzi9jMMbKk5SXEuyMTuqNFM9J6qDg4hkyZXQQCuiE7JwZK9fVuvLY68sxGBNCZXN4Adhi",
  "key28": "39Xc7RwofBAq2HW5Rfy2smVCJDb9qjvYBNNqmPyeCrd8Se9yeGXGLz2oCxw1BY3G6yR8bMMm5puyQfzRo5YsKgeW",
  "key29": "37rwZSfyxkbJa1PJrnd3ZGKviLt556BVj9iSxzTwrvZUf68RT1pj5crXRWrWEvZ3r8vhMuUumH8X2sTtTBVWey1p",
  "key30": "4gW9984aXadpRzjrDxngUSPS3HkDn2a45s3WmNKXwbQir1vmDRxiZy1hfKNzgLpdRSsapK44XTMyNrQ6Mndx1FTq",
  "key31": "5bPnDcpQFkDBYfH5Va11VHnLbZ26RXAb41hgzGPnWmBU8oTxLuhFYZdx3aP2bLhC7aGc2Wf3NcX6J7sLJHVEhUfA",
  "key32": "25Q27YJG2cAkjeoUgw4b2uHxSTrn2XCSsGurhqxSsEwxYXWJzLRhHzT5WoyZHfKCqo43GkruQsnu4Mnm451STE2h",
  "key33": "3qmVycsBKrMQBPTG3tEvkkzSd6qugXxiPUUTKTk3m4mWLZhcQ5b7rb5nSwnfLNXemSy77Vc9NCyR2bugQppV7Ht6",
  "key34": "2MyW6GnQQcxXwYpDaJULMGybhAWko6spXixWvxktf7xqnqh3PsbEfVAh5cU9NoURqgSng8w217SoaEG93dTKS8jb",
  "key35": "3CRW9GvYxu19AUjvtuvqzQ4hZoDgbu6yKCgNq3kgqjR7yPVkQQPZbH42ZALTzx9sP9GyUSLBSbguCo1RDKkVB81M",
  "key36": "2MuzKswSD1dnfez6D1ejxd7dpFQjGBgMPNZqHcgSU1CZqTz4npyNb55BWUGt15ohUdUQxQaecf69XxfpM73SeXqb",
  "key37": "2ZrdAkUq86DFgVCnZPz7RiobfYudxnfto97omoqSRuVDd2ZPxuF1ykFuWLrnxGXiCqiaUn1sZg1Arogv9Ro8aJPS",
  "key38": "3DmjSkbLgN4J1Bb6eiy3CXy5N7xSyjiwrot15MG9fMuYVVwsvQTDvS4fecYkNxCrAwiGTaSsQsk8xL3ctAArqES9",
  "key39": "o2jorZFJ3BknL7vpq3Bfdp3MdcktrH7rF3EkWfwhDJyHZStYJZ9kX6xPM9S2bCTvoaXBYcmxAeoHGQHPz3t8zyU",
  "key40": "51T5NNVhZrWaeVaj6Xk19eHPAMRRjdrooa6UjnHbhsooSoqPgdjSxk4d2At31WDAEEvH4ybdu8PVn6yrKPZp2x3L",
  "key41": "37444Fffo2UG9DyyoSnC2k1vdHQQyFDLGUbXaaDF9L5ze8az8vFnARciXiKV28kJFNDLBXUe8D1azoUJHTVo4ofQ",
  "key42": "DmtPx6aFYeodsXHv7f6yipQW4HoqEBGz2kiWyTHcwvpu7Tr7jTkEQsnAnXXDK2mHTw3Yc72D5p13k69Ma39ShaN",
  "key43": "22Jd3FuLeXGMWhetHsKLtSh2CLegQJVhApB2ebfoG42f7Cr5QwDnG8B1ddkUxQDV8Kfc6NyV5qXRGksTTfCzXraS",
  "key44": "8UVDwQPaSGwGPBKi8YRR13oy4CeyPttTm4m2eQvqoaLkPfR9j5k6JNiafywicXsEACfqakvgdiYfYjfqWyf9Th1",
  "key45": "3yLdKsRYnx7DVcoxk8EXsu6EntLhBy9S4yFXdgKjFeYztrSsiik7FfVuZe6V2z2UTm7rswNKkhryGLX48YZxmLEv",
  "key46": "2N1CCngf3H68hDDciaPnvJEnNZ9GXutgeqGiVBvrcdwHUisLkvpHzKuoX3Eeta4TquJZekevjzFBJeoW7khCrRu2"
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
