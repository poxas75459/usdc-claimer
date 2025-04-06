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
    "JXB2LMdN5oWicnju3y57Wdp7PfRLikPJAtCqr3iwDGMEPsSG6EEW1i4uuj13p7C13vDVv3CZ9uBWncxdZs2SQm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usH8nhX14cE4aJTaHvN6Zath2w3Q8fDfbZTrWc2ApAyCs19WvWy3AnnH5Avjy6MSqfWAmmRB9j8LPUmEq5keZ8F",
  "key1": "2unuGmybdjdjnCNzdzet3gDLFsPAPGE4sLkPk8mgUkZ2r5Nw6L3BtanzVnJUw7eKVEYMEj9B29EiYuQmeXuAywam",
  "key2": "3i1wynsdWtY2u2bvVi8LogNQBYkrAYYyM2SXhk4pm7vYmhRHSScn8nNuLeiAp32P7vut8s9HW819PSgbWCJFiJoe",
  "key3": "4jLFtbWdcsPxr18DTyPv5wZN533TrvB933qwGq1rrQuHhagkAri8StTce5iBW3k6x4SdJtUqUYzW4iXpsXFE4Y7j",
  "key4": "3raozmimSLEaDDhrfBQhjt9DK7gsf2mq82VDAkahAqtKMRuRgWRnzwE5BqNvu5boXZNzdnjHbkZDsS8JGzMoPPdn",
  "key5": "4u9z5TnjDmfis3m8dM24j4TDFrErj11vfFJWtyxdWHbbJnedBJey8Ppx2NVX484bTghSf7rHgM7mThGkanCMWR18",
  "key6": "2W6tSHn3H5oaUDApVdZmjzEpyKcKgk8ii5YeuDL4aeKsPpF64NQV25tHvQ8dvQcpfM15e4FHUwjF1ZX3DrdVVpsS",
  "key7": "2xybatJMNHzsFNCWamwPAUUKgbYmK8kY7jW2QHoGpXpv1cF8ncpkTnPXLzbpmj4Mg9apajo7KQKk8TBkSdqCezvp",
  "key8": "4MguhT4YE5FUQPdK5rB5HX13L7Eq7ruebkgyx7zCBxcLhw8yLuqUvHoecXLMbMjuP7Aj46Spvd3KYfPTyWT5MT45",
  "key9": "5PzreRzV5WJyTQhVRH9YQTwHnHzzEstiA3vuy8wSqcmhga4heJrPnTnWpFh2WZPYrhPhCPEBQgt1V4mqKmr1JJno",
  "key10": "316yrTbA1TeGw3zArYfSy2MJvYnhmijfRWgU4HLWwgnHXyF6CT3ZAYmhR4Wk6JZTJCXPyihETJTf5Ty7XoXrgnu8",
  "key11": "3LvbVZJ5FtUgZKSh52BihE5JWQ8JqMDUr9TMbMQr9mEjQujbAoH9Q2R5MknBcXzK4Zwi9ReCam2mLdf77fFd5tmS",
  "key12": "3Z91zye5WPrqmxwACk81v9CY2cXMhmMF17ezY5rwnSHPz72TWnxX3qsuzBakHuybXUUpLRNhrBAjav8yUNbvqGGW",
  "key13": "3qqa8K96q1k4aSXZdEbgHGSXqP75WHhtCJiZwtEBWfNAX6mukn7BVvKuhkCq4zkZSdZufkue1aBcWTGDMxP3bGme",
  "key14": "3r9XUfsf9j23awMTGFcViEr141y2bo199TdB2R1q4H7uxUYBxGaMGRMZCbVp9VPuiNoENAkUeAuTSaE2nV5jf5s6",
  "key15": "5dghSVF8brRkihT37ifZEJBTBe6e48hQZpgzqwFPGqxonToex5ZwEpbLb4pE8odB1s75oCNx6vNPZ1WUPxWi9y9a",
  "key16": "3xqVUh76BURyy5DzNbHnB3aQ9jWeXtEN3Jpat2uHXGKacCEY8FLakG3iMmRbrgxR3cQoxFdf1tJEG5NeAhmVPEZY",
  "key17": "5rB2Vwe7d4gANCWbDniqGJo2SgqUoEN1Bg4dgXqDzfJbGpGA6pGYDBW7W3FxvVaBERu9E3rNPLTSJt57TQZfwNfq",
  "key18": "45U24iVGAoCcQmt8jai1uTaBN3fryJt49iYepcXJnEktYgB2ayaCSuiqUU17q9GUJaTBHG4g1ca47KKPcpWvBr4C",
  "key19": "Y85C5rypiKA1UGzC9bPEhgR6kt1yLezFQ4XE8W1TtAJd3ddUUtfTCnN2xf4d86dti527EnuDYHi68D5Cin9fB2o",
  "key20": "65X81mHujTcuq9kJBoSHLx873dh4dwDCoeHmgR87X15njepqVzEq9ERrFY4ANjYi4y7hwtnvXbRQ7qSFhResgagW",
  "key21": "3ndfjan989DtCPgTZSxCMCTKUjCehU1SfLRrWiqLUhhJ7hFmhhAVvR2kuRnn6ZyNhRnBWQEKGkvVQtyQFS93Jx7w",
  "key22": "2SxX8oJ9sKFbzUky89eEvLHZywRAKqwJ2fbv1NTd541EaVTLF5mEhs7Kic7RBpesbmDxr84FrKZDGESAoREG9m5f",
  "key23": "29w82AgFTi8tKhpzpGPYdDwrV9K8wfSRsRxXRzGJTJdPhLqVH6pLt8WNWzr4uvnTiD2qp3hrruo1QqYN1eVgJmLg",
  "key24": "2CiPP9uztu3tHJGCyz98y8dLEGbBUp33V9qxLiMw8o1tLaw3945JN3ar7TzaLD1KuK3ioCPFEZ5PNfWL316WRCgS",
  "key25": "51Njx3oWmokLHPN2GoSvRPw1H5KK5uMm9nvm12KCxry12bxWpGfuJyT8xKnuRK1UjHJJmEAvrAuMimyZ44R9dnhi",
  "key26": "2VpbMsjKkNoczifuErpydthfmfvpVfLbwoZ9YtQkasrZkHQeyJaiTPyKsxRut7NJkX65XSL32ex4f7AajVjoKdsx",
  "key27": "2MqSMxpugYUF6wwvQKiaLDLXVq4o9e3cWKmEz6U8JaTe5grDd6vbfEh8uUfgG5f6k2JTCgDpcoKrdYY8BxQxiMJn",
  "key28": "3UcLxPoGqDvPeuE8NoVCjSbcjnfALsyAf9rXYRkEc7g32FxHdEvbbQyZRzXce39gjyGGb1mUAc48aAwo1ojC9bcv",
  "key29": "5x4Bd9YZn1jkhBuUmN4QndLtBgKnHR7Xzif7nhMt4NtVhyub7uPtnn8wyAFUbJ5FgSY68LVxCDhFBpNuqDzrnVSc",
  "key30": "5Y6YHohUnUtzdFn7aHeqohVTPsijzHQrYpmEV8HuMFMx13EJWZALLr3FzWeeLDPiHaJuwk8xXmg6HMCLusAPqf8J",
  "key31": "HJgXSMVDVrJVi3yTK4B7iQQ3CHbzFbXTuGZfRrqF7PPALo1fdKYnd9pYBhHakCyJDbPF7AaxduYxbt7b67vqJj1",
  "key32": "3vG4CuVUyGQyCLKRETMsWH8JdtsV2dqvrTc5Kvw9mp2umXDgWnLZFtU6Rpt4UT7DscQ5DVFEVYgsDUwWUW6s9q5j",
  "key33": "3Fm7ML8VgnPeqbGZ6PW6goiBYivYY3fXBAnu4niMKANBn4mvqofqs559ZQyBHWyE3fh6uzQ8GMtXKbhDn7yJJRTV",
  "key34": "3TnxJKhHt7Z7FwzucEesQhfEBKx6yzHEHpbceYUHqCeEepbYr58scLkJvUXwa86qJRZjVEumVGaVbTGXqdX2oJ5D",
  "key35": "5JpgUmxANskbgLyc9chxzoizSeMHHktPZFAPevLiDbUSw8hLoYypchU7ZdVxWDsjYboLtmsyc3N2qVDwnw95gYzR",
  "key36": "vFj5qhxa5TGgqh35QBkdvfhws1rrvCh34rraYzukwKN9rQUEjf41yEW4LXRwzqHfY5wMQ4kfuaR9uCfC2sFxgcZ",
  "key37": "43WAqKSf42pRLrghpxXopcj4LfLBKpL8y9izUNojZ2XGwCCiX76scMkpufFa4oUDNSaCzTE1QtBBeLK7bg8z1RNR",
  "key38": "4r3GhCEWkwszgeSKVd8qwy82hj3KUYYUsWwWnSCYS1YTnLvTfEa14UyuYK5a9jE92oDGBMxtjYnPo8RSS59q4cUU",
  "key39": "jfZR5deSkhrTmg9jHg2aBaA1hrHR817r6KxqKmBmhowkgvyBXvJt77CM4YsXahjNNeyn8emFQZYeJrgoJ3KYkYy",
  "key40": "2ZCBmK7W2i3jm59Q939fuhGs3G9dXh4rkwTGTicYVmRaeLLUbt4DeMnp6Kj4j67pLSRETVhnGjbW8bGcuCCjVW2h"
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
