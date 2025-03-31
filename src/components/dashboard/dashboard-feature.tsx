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
    "2ekDq8G9gHMHcjS85yFcybFpMtm3iByustYeBUYdvJK6VeK4NbzThwSxbRGnGEGHYJaAtuRZ9fiHK3DSGNmnVEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fb4PQ7Xg39hdJSVpcMZx8Wvh5ggTifj1vKF4xTQFKAXkUhBmsN9x1jen1QHtFyXaqDDVzNdteBSa5GtYSQVxk8Z",
  "key1": "V3w2mLfd3RnN4Lda9d2uaU4vwzSZ2ar1u88SAZYqpeAEE17Aq2U7XcEDsXYRsgmofJ1t3sJGcs9aibGpZYfYPn2",
  "key2": "34989VKKmyBuTLnBxysxs5udB1VmyQVkFYRLPiYm1LSbtV7Wnd7oQ9RUr5fKS1MHeTnwpdhzkZRT8AvcJ4Nxv1nZ",
  "key3": "2a1UUL3LabUVQA4DuprbW8vGiPWwdwuRPPeVFoQQrfSfGRiBcRgfrUkddBDVGJTDhEDvP6ThBXTRKhQPSQfhLvNS",
  "key4": "eeXHNvTLksoYJHvcNEkMfV8rCPyEWrZybeTVt7L27g6J7SUTm8o1N9Es5xUoYKrqeRbrhh6UWVxjiUcwTYnzZw7",
  "key5": "32k738w7DynhssgCG1MRoLdnBgpJhpsV4Xcp2YuyX9k8UrN5Bm916SgsvfbdiUpEeyoXxzP8eswjKjBFhVD13s2p",
  "key6": "3EK7bdrBDYMz9w6yePT7fcFaPARWFYkYbq8NQMWPfoEPWQMeJmsQG78LUhZQGTGQJUMFpWYAnGjFHH3Mef48fPDg",
  "key7": "2xJ1dnaxzQrWQyJL1R97MxMFgZBpkK3CU6y3CoJq2JeJ9HpQU8CME4PB35KoQ5ZXBDHX6nFwbgTF3a5rkvKZGgcu",
  "key8": "2YiHhsPLRHS176Q3UryTGEeh4RYde56G3KUQLjcbRYocAdQVQWEWghM1k7NedxfPw2RKxY8TLmrEzQ7mvDuw3t1Y",
  "key9": "2bdtovJqUhN3R1vBZzKg6xBPQonSghaYzc24rAdzJZx9P9AGNUhnGizNZ2c5s2m16295DVQBANDo8Z1CTjTLMahg",
  "key10": "2HMpSLXUJpqknsa8xv7CVjvfbJYurBacEFS1MSKcKYL5bsoW5TNz7TwBYRRrpfrjri1BtFCNMatf8m1bcks4Rx1y",
  "key11": "5gjK5dGTuNGRHJiB1mZihwHz9DEUhWmuUsMmZmmu9x3Dhw56LHNp8Z5c1gWFoZMykRnF56yF6wDb5DqPWhMQd521",
  "key12": "3eWp9v5CaxT18k8xYt7iJi6ErsE29ygTPSQTz79tCQy5C7Fue4aqSkdBgsh1JwJWgto7Xkz1EwC5RpDLFx53xWFN",
  "key13": "2EEEsj7UGDox21gUNu2yabWo9rZ8v2qpa55JcwLpZcFCqEagLhjknXwksXNeeVBSPLGTN7szXRhKoczrJY4LehiB",
  "key14": "3VqzJUEHZmzGLcoBRpVkMtEF1vhS1FwTvpDeMT2Qd4W97Du9fmgfwFDEiYogU8NKaMM5bWiU7mB7ZVGPzQzcxbby",
  "key15": "48ZJoAXCzbzuV9tLdGMPn2Sod31tvG1MmLLmLvBgSzXk623hyaDCAVTkiPe4qRkcJZ5xhjhgbndA3oAVTNn2U8Kw",
  "key16": "56sfNQ2ZCXNm4FXyTs5Y1oi5uVZQ7sDYaKS8nLEzza651RaftcVDZbWV7ShJoZyRPEoPembFV5NEntanwnaDfo3f",
  "key17": "2xYHUR6fgSrKadytKioE3EheT5HKZeuNZzTmRmEDD9CRRfaWXRcxHeacU1iqZqPWxnL8KgNWTXmDeoJQFWKp76CE",
  "key18": "5BvT4vzBgRoao87ncsAL2QEhFReBj5EQSxww9DymFcM7i7CmzwGDMY3Jyw7d5UY5vbaQLktXrKGZwDtCKVJDBUMu",
  "key19": "2vc1eqgNVQHJRWoDWQro4VHVWBCDkwkm2ZNPw9UFbXt6511pu2BbFkDsHyejMjN4cHsmBa5xMdSWWVU7t38TwvEc",
  "key20": "2d7MKDZLqZTSn22d3AhzRk1mQgUxtWqFSZdLEw44Sk1bEWVymrUuC1jiH6tZiWCYZRKKwdhS8XBeVEv7TqnLkjxs",
  "key21": "2wKLzUijk4Pz21BMBPevtnb24d4Mumz7TsnjJhntpGUpYh5xMS8txnHmKMTPoE9mjSeNr8YcvHJvkSxgm7AXXCHn",
  "key22": "489CJkwTFkAveaE316TcdcpDw4Kahz4kNSrfw1hJNQ3Wz6tPrzh5FqEgzkcAG62mHAZpaiSrz7FcmSMCk7EjEZPW",
  "key23": "4oZRoaQh3qoRpgpHoyBFecVndTFvica67Bu6Mz9bxrWYfjPL2xeL3scfYX2doa85r2oMCAcZ3di5f6S5fnEqUFEs",
  "key24": "5TsNNDLAvPYwAj58vNG3nQAUGyurnskQfGtx3aBeRLQHSXxKGeSMUADUbw5kwgwnACAN1LVEgaEXuF2XFPJGKKgy",
  "key25": "56GRTJZkwXY17aRxgjo9gzL5aRGFWbjVvDV9rhmsxgeTB85HeqcwAZ1m5oyRfbX8juBrhA5jhoradmgxhntfhaqh",
  "key26": "52txMhqfiKM4ATabo31bXdPicDeavzbBe8J55EqiH4GU6Ce8AsUSy4YFJssTpfZC6qq7DbDaPJ8GHBgWBHFXBB29",
  "key27": "5aoXkHHb2gZdndTYHgaegTVnanTt1GwT8kiZo91qJ2cWD7dBEJAbSQePNdJe4dkJFW4BjqSiwPgZkhcuLy9LXoKw",
  "key28": "5jR1MToiNwZq22CE9AFrscSWvHeGCEf6LGXywSWMgjp7rMkX4KaVgqjRmk5eLHGohUb6hQxbXFXD1iEtX7SUkruL",
  "key29": "2HRogWPanaA98AtWSDB6n1f8ZNYh5prss1S7pFUHzi7nHQTVasfTzhvsV2irHFagVRS6b752vmkvJCeFxPqW14cy",
  "key30": "5RXvdtnyHMYwDWfuwzQEqJk5PFTcWYqdXwgfzijDCS8ne68nMwatFXyJznLYEHgSDe5ktZqwa1DR3b2HUsX4TP4H",
  "key31": "4SWoz1MAMnQU5p1RvasmqGrDLUU8HvhBnyL1cwFQhPPzVidZGGLZRNmKdzAtgCn3KMBfAePGAyggzihQXnCX5wrr",
  "key32": "3Ahy32DqpPondpmnYLqJMm1VS57mdtMAhwfGyb7sVvs469WVarmrsnaN4dNVWGrbjL5Jnaz9avnyy7w1JzGCPjqz",
  "key33": "2Y43wkmJayygLBQq8AJGDN5DdF7mLjWoXrWuqv3Q8aGwHXvM6d5Auutyw5C7d2FS5xEYnayiZX7QoEnE77iw68Z",
  "key34": "5pSCDWxojkuBbyFV6pLUm64gRdCRxTUTCXKAwfSAKFzfKx9x6fnxunqgLWaC43gtCmQNp9bwLN3ogzEABCXwfX4t",
  "key35": "3wDj5mbCDSqzbyU9putDjfnqZ7CrMWsBVzgy26Hne1r5ag7xfsvnzrrmnk6WyxbsHP2A5BqDAtx8kMrU6p5yFbvq",
  "key36": "5gqwfKjQtZpaXAwhDEacT4jBXedSWWFLLAmwtkmiiTuHH4Gs8aEfP4j5AxntHFnowJsSwAfrvPjovMEsSCgZ9uKS",
  "key37": "3hvcHppemTCyTVM6jMqUTrKDSssTrUHzsXjMRnimKhrTB59sz4Uqvk4UhvVk42MaGhgfabFBcHACBxDNgWBe9TmS",
  "key38": "aTfARB44qHKYLVgy53j8QQXRa6nZgQe2STdLt2jbPjX4sXXhvoVmRXsK636keRBTTp1hNQLA1hM28Cz2n8ncaWz",
  "key39": "24oXwtJkhEMhpyy9E9o5ZMLggG3LUk4ArZiUCeHsgAZjbzXwyqx2wMDKt6L7NENprFpPUJdRwbXJTncodpV3YKEv",
  "key40": "5nfh2DDmjDFtwCfirpiHnXp9ekBZPZNvmeBHVgpPQNy6Ezo83z6xN7fMPQ9cztqNYPHTUaCjhqVhrEDHj7fm7VLz",
  "key41": "3brgFd71hGd6s2Jhmo5ctLur4hL9caJfyrK9zWmNnX9mw3yKg55qfRXw1e9kZewDxd7JaTexgRjNjZnmqeGZWsEf",
  "key42": "2MsDYetNJ3LNedoicXQdsbi53YZg7PUay2B77ZdFPLK6GNdph67LXdFGo2PJNiALQXANTmDREnhPYjfhaQkpJdLA"
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
