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
    "5dP2iGttkn2Gic3Spoc6VJdZiGk5DgnQCyDY1cPo7fauTKmLqAoavxDs3xqhSMSJHDVLSSshE5Nt8pb2ze99F44Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBkuHwzA5WQkaeC6oqduneyEWTCofUd6qoFBxRGPRgq8ZAbkXXioyVKr57esYSk7XiB1J4DxE4vg3aXSgtraRos",
  "key1": "4BtAbz3h4ULQkhFRHeVznVQjxW9kF9LfBZnCGcYWrpLrYA1a4wMEGm1McnPFoGmuV6KrC6mc5HxB7w9ePAevnHb2",
  "key2": "4cC9t9uRTLBgTL7nZ7eN9QURho5MGzYpr5pxsTVcDXGZjuMayAnLLFnaqa153c45T7qCzu6hJAjr2LegM7fZnVQS",
  "key3": "46TWxgd5KefCgdKgpQzPj7rAAA5wRQEjfVYqEj9viXyeTtpHyUjBrKjJEszeXTJ2Rxr8SaRWofiTXhxBEHQWScCn",
  "key4": "676ot2gFapj18q5naPbWkRR17aMuiZ3e4XycHfa1GUrNqrXeow668NzpRrFi6H1NHyVbUUnRXnTBJKa6yAKEtjYN",
  "key5": "2i6EwqTugs1xybit4C3QxXTYAp8Cvobj6dV5LRkfsnmGn6YwUotWV3evgLaJ67raJKxyNNoJC1o6Pz5vGMCPzMz",
  "key6": "2evDyEeMLpzW6XNCobhqE6M3aECfWKgps1B7T1eQgCSzJ31N9ekMysT3rNv8EDAf5QGXPrB6fz2BAe9EpwXn5MNG",
  "key7": "4EMPzTG98qo8fzZJAQ84hgsukHe2edYcxywdthaznveGWqAWD9uSQzXQNjWQcihcbkvcMf9wf4RwjKCqKfhDoZPp",
  "key8": "5XAtskmdU3zr7iFUJcSPdJamxcVNFVvfaZ1FzyPAhD8tSTu2rDsgPKSgGRawwkLg3Sx318P15yRZ3rMVN7hWvNfx",
  "key9": "41gFqNUfvKktxdzJJ9UYJtynumBxN6gyxuAZvt63Y3TToj1cNe5affZhe1rKmoGDRYVAMEhRsYhzMcwcwA2q8MgS",
  "key10": "659Jva7mNPyNcGZWUXKeSNr4Lq8uwrZ8WA2nqPLWX5WcVu4fzUVczQhxzK1KfFAidyj8zSMHZk7cqFWqaCXiZxn",
  "key11": "3ypMxPfbJCQBKkQDYwPHJmfJiuuLDpQXJmmmCFj3ZV8LNKY4Qhr9KtBstAwBbXVpquc6nQ3ibbJtHFqWDYEXvoyA",
  "key12": "2fGJB6Ha43sx7Fd2WTWJVF76sTFJmbB8hZBFSALL8QsUu7v4xXpL1CQBcXJZintJjFeDRBq33nm46xs8JXKEhpsT",
  "key13": "3iVBdJwGjNDLBjr6w5Vm2cAJ3EAVeSMsaodK6GDLvt5garXL8878sd6fhvMNWUXxchgyo7RdioeSLdCpGU4PD3es",
  "key14": "44fzuP96nxDRYqSGKUNKyo5bdBWKeafGbABz11fgvFShzrQrppHXuaq8Ek9gfyi3cA7kz1vmeH4npCJr2871kACa",
  "key15": "4wTcqgiBym8QojWUyQ2ft1SP4StrTQ2yKQX9brwv1MxEfzkcKuHQJXDx1m2sRFMRH4qa5R67PhiW2Ae9pVFNa4A1",
  "key16": "4jbgJ62Me4S9q3oTyiv7eWCm3VWYkXW9qxRkdUxrP1wCHKes5EiKYceqce2PJPWiUWCSNu6vN56v3WdMNfppU4Ko",
  "key17": "fhtJ7exNYniDFyYzjcnw3JHi5vTL66z9Gs9Ppf1YqyTYnGUfVzgP7FAwJkdnWNQK8pUAop8bD8fcZoarYV4CdCL",
  "key18": "sc5vwrZ8oJUnXAy3dVxFomvPVkApPqsipti2aGYHbBufA5PD5ifNUSgCGyXCS3db1xyQmSR38naR12DLHEuzocy",
  "key19": "7d2URz7fujhxXNBeikr2FCuc41gGeENcJ3A7Wf5HYefQZr1ZBGGjezXsa76z735fNJxGAAKjvhuECh9TT2CfyHS",
  "key20": "4j7KCECW63tXDEpx8GWH8NfhSisC6zuafzui1xxkUSsos2xoo631Ln1CeWvDQ22unFSikcoHx1WDzdwQWEhqKeDt",
  "key21": "4RUPPGpw7oFjqqctZhkCdaBtxAuyEPi7J8ayxF2ZtBoDEXzNbhBDYxEGY65Xj4Y3mn9s9hxigyzYWoq6igTmoLcG",
  "key22": "BVHJze5oHtG1MrgbT1Zq7eCVtUN5kpV7KvvrGs7fwtxS5nzqeS5h4jekaHKu74uQjWBc19mkPri3b2x3wRJLewJ",
  "key23": "2k3pqWDzEevhENTsiXiDnogPeMm9xbGVLiPy5aUn3hjwUvMC2dbL4DNWv7MKsWR7mkKkLi3bTdKLQrTFkbM4YbXt",
  "key24": "BfWveWPZYgGcgVLtfgBNxAzspQoqNXnRayot9xAiL4xJ3RXWdxVQBTwM1WpntXBxCYB7ANr5XTAdmUC9WnGAgHc",
  "key25": "LVKJAurWBauTcXGgSUosZihACVRPGvKNdxxEyJrktTQpwvDDwEPiECsjF3NA19913SnN5wZ7DvDfRJRuLrc3LSR",
  "key26": "3GJgDhK24mxHGTmTfwT1ypZKnCuhrD3WgL2zMiMpKNtbnjbruHN9qmHhXpkLF46FthLeZywmYcGt9uMWEo6adcv",
  "key27": "2y882f5wMQzDHS8ptBKsrJcuLtd4NftCmTi35XR75hoaLjEnyrc7FxCurNNw4R4iDgAksoRKeWYvBgTCcYZeepia",
  "key28": "28WGFvBdWDNTNsBkccWtpGe3rudEk1gqwZws6YBRKmGy99UFwiLSFP5QpUTe7Abegdzbu8LkBvEvVTGoWKNSDYyx",
  "key29": "2R5eRjohSWYdrxoR7AMnEoEMfXSgopYBZ2hnvsvjqWFwch2H29mw6wZFjRmYzBKgev4P8a5TD2qPdcf2A3o4rqHc",
  "key30": "9Y6cfrnnt65RYsxJTuChmPSA2jwbupsMgdXQCYt5fJDosQewjzGnFKu98bCymEcqParpopHeUVpPbqPKYJAMp4d",
  "key31": "2hFoC316snhyocruuRHvQsC6P5d4m9FccbZBkqioV55K2UniRXiMgZM2mxt4mnp7yJkHoMZWV19b9wv5QdLSdHzj"
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
