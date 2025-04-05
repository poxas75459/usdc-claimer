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
    "35mttdz59nDP8tke8fzW1NPcDY6jGFrNierc79kM7d1BeRow44cCUs6uUTnxAunaaneEX7YqPEzaCcM1DcfbsLKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AY9BFW9pYdJsZBNNhFiSctBu7j7dmRbgJ3WsR9xMR8sFVojYxMerUnti3iqp61Mvx5rCc6yXfEJWkmW3Kn3PbsM",
  "key1": "MrfzntmbWLGzsWrCSv2avaaXc77DsdvDGJJhLe8zB6zrmThH1spzBdN2SZErpKA85NKB8re8uTd3hktGewrVs4p",
  "key2": "dAxN2L36nUYrsjrshJeQZgtZ7f4wvTZ46dRVKWgmR3cdgG6raAu8dZU8ikMGkoJ2xb74pFWxnBwLkCrGf7R8VvA",
  "key3": "5DZuH4BycPAxQjF4CgD9rPbPHVcYGTenyCLgbyZttmfinHQrWsqGJrf62L4bLEYec577nAy28kjrHokCUZrEWSev",
  "key4": "2fmLFdj2L7LfhYqHSBrgmxy3XTCHjmneUW6f2t75dCLBrFkw5uoSEpch13vqrjGBfB3C37NjHxBGo92BhbCtMPbL",
  "key5": "tFgAWLreCk8P5KLT2hGbtTvu4dKXKJ89xUWjhQ6EMo3tb1cA5f2yicmXGaDECb3C8TQoRWnyNrzToxViznAxwrM",
  "key6": "3gzuYCCHwmzMRNuhHCHjpFpFtqDXvk2VoNyswmHm7LXNKD7n597kdjjcRT4cBsS9qArHVKcDQgNjSg9mNJ9i1JXU",
  "key7": "dkyAkhVC3F3NxB6sdDwXp7dx8cNhAR86rD8egLa1uDX6i4SzFLczzFvcsH6jWWy3iMvEqk6PA7zWoM54QYKmaqN",
  "key8": "5kCeNSEp5Y17nXB4k3j9NHDtmGinALBiqsNpL6xZ9iaLYBmcBQWvzPVFYHvbBY4myexv5Kfxr9cYjZ1FvzFdkzDV",
  "key9": "3NioTpZ1YdnjbXY4UtbPxBot9XS9DiGEi7gxtTMXNVYU5pZmD8yvbmMQsyfprJGq4Y4VmfyWhGrMD575fC8RnrQ5",
  "key10": "5Syby4mJdLuHZ86iRJi6EWtkLgVHQjBkLt8Q4yXbEZk22nXgLNL2SXERg71m4DbQZbv7H4YeGRDHcpRVaoe47XeX",
  "key11": "42ZbBzWCctjZqd1Cz6Lx7Z4Z8c5S8hZnnENJXu9ckBfLFRJsnGLX3oeT2QfyGaVsJytRTtXu7er7QHfNCwZT2hYw",
  "key12": "3ny3jUEN6NoGN963Cam75tJgFE6gqRjbBGof98fSNU5SWETbhAQ9nThvkjLhvJBcoAK8xeXJCrE6ZJZPdyPHikBQ",
  "key13": "5PYv527aKuyvA8SL1kFF82tkSM4waV8Us5eMF6nXm7eBFABrD13VNCxaujrFyp5FJnWibiBxHVzYEBNYAWGbGwpV",
  "key14": "45q6XQ5KYemiKHxSot5NFon7fYSqDKZLpoMYjJkpYnPQbEDaJQ2SKdcPg3AhjZxz4H36LGywuXvCCTGgKQ7KZHk",
  "key15": "3aAVJDp82bRHdcmUG52S382sMEfXbDYV81ErVq2BESU1cXs4uLY29v3aSo7GJ21NAcee4MSqQq6yJPMNozVNSrfT",
  "key16": "5TbCf3iMbiTQYUW9MUmGFUz7ENuAZqdcGCqYToGdQeDt4MvUukauiiXx9ZdWN1nJ6V9hWVxrb9n1p5JNSHPF29q3",
  "key17": "5SV8BsjpYo8YbPRYFj8ZkrX7xbnVtMR5VFN2GsKYTFcE6UGUWGi1vwBo58pbBQvrhG7S5bGj3DZX2QituUe5PfaC",
  "key18": "4oFsu6U2ot1bh566bBxLCv2iseJoGi3EiWpP7s2reDLNUmeDVGHPUW6hq8Q6Yd8JBdEuLJxi7RjmK9HZgzu2RoWw",
  "key19": "3TWvfLYWLszcZHA3kTRbs3CPwwYS4yQHpGUL1HWqZVvBpYuc7hsYtzdSGkB363C3HFKcQDGum3TQdYtSfoj7qp8E",
  "key20": "2cbHLRwbLDv9miEDUFav5TSKbPv433r6BG3G3ALUrFs3bfAXekb83KEQ7SkAVdbRuotoDkwDo3iCMZjCPG7HQjbp",
  "key21": "2ge14izhmY3Ed7hgV6oC3nUm3AMzLsjktYXJp8wxH5rJCmM538j1RqaC9LzkPZ4cvsnkjTPJu6tuFbQiP5xHZaDJ",
  "key22": "2ZpHzNoHLpoAhq2KSS8HqUc8jjibryPobtLMsGgtF76CjviwXoeVAWho8Us69RfvPG93BXNeau79XBZQq7wxwKHA",
  "key23": "2YEf1V81Ap7VuNPsfLTVmfY2sJQZeK9NeJ88kgHFgEpWUKm9wzHBV67uXPfikbvnCzyc6Q2wc3WPbp31QgJzU4AC",
  "key24": "wJ2YvG8TvAxzznHzHRCBeTV6bsuMDBVmRwdXj4GqRGmjbxhmFSCeqn3D6Rr6JzhhY2wXjjfskPgsVDwD8VjfmWs",
  "key25": "3rMFx9fi36rDqt13nxFYPAtnrRdKHwuJnz8DWdnvgef3FnwCrBHd6stuviwXNTAvG39iTM2b3xEZDNbPuuDLAUk6",
  "key26": "3fMWyF3cRXiLtpxvtmujULgvK8sRnSnP7QwihJJhk4ezn7KNe7chbqKL3ha39hrVjVcRJWW9PZkhtN8QwJX55E4F",
  "key27": "3jHaXbS3CU82aHrGfazfLEDvJzdNbNkUGEmQhLJkprpazFs9gpbfzXVVrNBvL7Ujtwe95cmjvjsaioEGetxGARzk",
  "key28": "5uEc5FaGNiGZecKEtvKfVPKMUBarjq7jrfdb9gnds4noWexPe1jGMETaJHsBL29p81Goq4UtKWqVNTHRJZ1NNJ7Q",
  "key29": "2R6JcpjG4NzHHudXsJYcXjnmTPn7nM53gwLV2VVtWVVFS8Gpkidmp6hbvof96eyMZ79MuGfeUwtc5e67jyiKfyjK",
  "key30": "42iy6ZyW7RKuDBGxpEzg4qdjCjVDZX14g3msn9mZ51h3kYH5TUUhTdFjgUi4gGYZ3W6Ln5ERAkhUmchCBLpTSVCo"
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
