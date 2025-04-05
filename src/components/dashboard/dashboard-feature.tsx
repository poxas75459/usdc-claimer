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
    "2aN5tHmWxcSQA8WxQXhdCcx6LvTMs8SceSc635fFmaEUwXyJQjUZHeoNfjbqLvAvU5GpUMowoya4e1zLuakZf3Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPLPfDASMJwXCntztFy26MAnQJxngbT8qpj8oR6qZoi5fnns9NjctkfpKT8ev7s6kJrhJG24X67UEqZyq3JoHCP",
  "key1": "4osjTBFeUZX69G54oRRR5ZrbLAfyhSkLKsTrdWUoocL8mRja3HdEaxBWo1KdhGKGB5hzUzofiiYihTVTQWUWLXW5",
  "key2": "2kkR13bkP6RourRCSQNJeyG4ttJ71vBqhuKGTYuQYkGb92r1FRUsxQKpynEemBRXarPPAQ982JTkrKHwjxBBgWEM",
  "key3": "5eEGQeGioqmh2jSRTWLPCfW4wtbdVhcEmYfPCVh5CU3w2yqAZJ7PjVQrcacM8iuEvWugNXoJXAwJ2WBNhD7FdcKr",
  "key4": "5gvm53Bx3i32fsDVGT7ntt6ucMwWZhb45ess7Eye1au9HqCohzsxAe6EPZY9vfDqqUYN9qHyiZPSxZexdCWowZ5J",
  "key5": "42deiiUKMcS9z3sQYsCeUXCEyPDr2XayVurKxGiGWFtHdnobssceh612YSmSeZgbYHCwqnneiEB5PpUQ9euSY92C",
  "key6": "5JZZmbkcmW4wh7g7uNqLQT3XicA26e9XBd2ZCX7EWqbwhJ6GMJvmi1u2Bh8L2oNtFdAxZ6VD8hTmrKjQQ5CRS3Jk",
  "key7": "3mQkE8M1idNnQqEiyMFGjsChRecmcdgQkELt2cyz6dcDuzLEQQZLj3Tt3AFDyw99RVu4geYnSAQb1uw9VBEsq7Ab",
  "key8": "3bFitFGxmYawPZApkMbCogDtGYWpKvjDrvZDY1L9dBLFdaEQgjscMKVb7xJNgQmRrieFpsywj2RkKHZBKJFQnpaR",
  "key9": "5b1FpnTC7CU8xVvgQt95HyoMuAJFZnwoxHbhR4BscDpns9pNKmB8BTzTX9LD8PbCR8jeTxgdpRPwBZvwnrEwMV2q",
  "key10": "GKa62RjxehB3j7fSAxWqsKdVRhBF6NH1a3UWGAun7ofkeLvPDtj4X8sLvjwCTiFCFf4zwSgzyMhQNhUhQErZCZw",
  "key11": "4ee87BYfRjrRYD8AY947LAQmgjTXdZCYRpE5A8QkEsJg9MuJduNgF7wYKox1VHJJxhrn9ndevCtS1YLQVJnufkSc",
  "key12": "sZZXdKLvRUy5DC3bUgnUcqdvu6kSKS6wpLbPhYiFEjuPYzBJVebcH5Y9UaRTSAS4yrjZNV8GFj4crBizcQNaRYB",
  "key13": "3h6bNdgG3MmGKQn4fRWzbhVMa21rih6J4oPwsdJkcM6BjYjziFCbe6yKboKDp7qYVNR8YkUZGcAX9eUdrS4LvjPC",
  "key14": "2rWEue5T7SfQmN22V4ZhVZHgs14puv2ChkTcviGMgzrTi2SRmScznBBVdJBDr8Urzt2mLa3jxCuwFXJtGwXrHvNU",
  "key15": "56inXDeQ3viLxskWLLMobH1h3xi99CyMrU4CA2Qh3vhjpx3bx43HqS1TEziCCnqa2MQtoSycio1hcxFrgEL8SpSU",
  "key16": "2gZfBmxVavnz4FMCbC9zLeLcn16mxAK5oBknpNLYQ7fcMb7KbLXDYDVKYj9GasFinRAMpmytZek2xUKFeXHLWHLq",
  "key17": "3JvBqmTdugG6hG1GE564XdRNPDpXFL1mgmH4jHqs6HBDs3JNzS58AHTuDzvmyJhADvQ4ALKDxLUSxfnKnqrjq7Jx",
  "key18": "66LfNoykU8DVJ3fahJCargdbCi9eD25xrjXiaauUuRietqQNJMkdPEqZNeMgDgM4st2FqL63DoKdXD6GQisys3Pu",
  "key19": "4ME5hcb35hhJwtDDJCn9V8bEG8aNan9FRPzaAdnGSqt3MEvkxZpGX8ZTdQC53Y4KHhp6yGJdrK8UWPnjsknUSMKW",
  "key20": "4D34Etw2d5poD1Y6jupNbZ3E347GxvJrZtYhfi3cVEjAZdEbuHsP6dNHrLkb31LS1QHrsnD72Vbwt25DAksnLjEB",
  "key21": "33yrQKHwj8zSNJ5PHxeEFZZkFCmWFjssfYmdBB1tKtPc8TmTHyx9K818EKqT33F81N4nPiktJdGLi81FGFoWrJwQ",
  "key22": "2MagRaQogxNizKFrZN7obgXhYv3AJ9XN38RYeH4HGBnMq9vLmPcWdXTUuQKLAMQMuyQncQaRKsDBvXemKgKHbCV8",
  "key23": "2aMAGQB5GJgW82wZN9pEBfXRxM6uw39s5rsq6crdRsNewACAvZrCkMLCN7Wx7zUficnFsYwt4Hksc82dwyyEESWG",
  "key24": "2ZagWM6fKzn4ksNd9KMq9GJ8W2QR9KubrNhue539yYyJG7XDDFRt8k1hve3CJ2rRSLuHnuTLLPnWD9LzDH4mzNEb",
  "key25": "5a4SrExvGpMhifmSZbiudDxw87i92tM34mg7B1zcMUKYiYeHUsmTNd3CsS644ZoHzKwTS77m88g95zHbDULCqTTq",
  "key26": "5eegfwF1RS1N5gbqrLg6jAwEs41TaVQh5cq4wQGPEemQUNuvn9UKvF8dnnVGPALKpeXHxucR6o9NUPCF7ZHWCEHb",
  "key27": "3koMstrJnhHipF7DePzFau31LecJuwFJAgrfgzV7b6dwLX6V2UMvB71DxR8yBTjuiW4ip6ErHi5k39wZQbnRhiP1",
  "key28": "5nsjxjSNB1fmm9fXgEEHJ45gyULaUpxyF53jdLxVN4gjvjBj6yd9ygn1dTdUvHcwj1ztjBT3G8FgG8Ki77r7x29u",
  "key29": "5bKGNC8WbVvhWis4KoEVuWepD9ttYJVH6ypmbTwnR9HF9DmnUyqbfEHSjpUzqSjfxTHwfKWvafm9BNLnBV8Q1MDJ",
  "key30": "2Q3kv8kQjjuE5NrVVPTgjNjdwUF3XaoFvDorGMtQLAFsqz6XzwViS4AedFUb7bCXsDqQ1bLH4K1Xx97eyKaoY1Zj",
  "key31": "22Dy8XLoEeY5rgJ9Bv4Ts6E4FQMzLMneFqgvck5Zdq66qLtPnnCbVVg3oQxpooU16gpDTsFe4AgxHebri8SKPkTy",
  "key32": "CoZdhJLRdvX1TBwph96Wem8PamE5ZgJTmNGvs36SF1cWdx87yuaqP1iMXHGjYZDzPkyKK8M6tZt45ZS8ztv6mF7",
  "key33": "39w4VxfVnE7mm7a3bshA27i2hdK1n4oXTFyYUmjXgyNVYVW8gPu7QeYeQXVBhLU4yCzmdNSDjdLvNLYMrbNsw3rk",
  "key34": "eGx755kJBvv6nKnv9TqRbvY863dDCJhgo5NVsEX688DMCGLzZt7ukPWAtQwHg8oQw5QVThzZH3fcxe3dwD8J1Bg",
  "key35": "4Rd4fwdwi8Use3Q6eXndLwgTPhCxmZrCX9KynUKbArb3g62su76pi9tH26nYhFQogtS1aw1WQoCZ63qJnjHJaoaa"
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
