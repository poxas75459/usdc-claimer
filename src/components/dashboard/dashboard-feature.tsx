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
    "LaRBnEX7qXcx6MgJnUG2yAxPF7jqkVYBY9QUTHuPSi6P3EW4G4wsKQVr7CusjHa6ApsY9zEbidXsntXBJbodoG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2895pAEnjqYYMVCF34hJAmLWNT95Qdzdm3WGiiZnPMxpQfzuvtxjPAYqmzeScbMBBjMiSt5ct9QzR8AcP5TeXNGN",
  "key1": "2bc9AuzXXsWPHi9JP5PzUTHPDgU61v2QgovCGMkAsosbi9x6tYQ7Thk8ictZutLSQq1WmW92FamTM3A6tCqqNTdv",
  "key2": "ZmXxCBecvUh3Un5Qb9VMH1gXkN4VqWSJ6X6LUgx19YveWUz9GA6wHRCgu6L7ySkgwFXwTy16bNmpaiFW7sJa9tA",
  "key3": "KtwqHcjLRSJvAjxkokEEh8Pe2yHmVEH8tJDzeNUnBXUsXp2jWqGrqgMXFb78aGJV4aDAbNF1uEoELSHyDBedVDF",
  "key4": "5U5cUTytaqMSf22TWWqhxtZD6SkzgPphzGDensb172hNKTL7q3TUUnwkXF6ZABQheCXnEXSqpKYktRqAbbRPAnET",
  "key5": "4MLq5o53KeySPxUMAJVdt6ugj8cLET1AYpV2C4gp3PFS6Sg16TMqHND4tr9Y9k8pnLadoXu4NXWxnXDWt61vJPYG",
  "key6": "2KgK8VCMXDS9enxXomzMUmreBg9RVpooQCbdtqgQNnwHUuSSEKWVvVLY65BPTSuB8TBqdgwWM4PuzFbkhXi1RrFM",
  "key7": "drLQyV5u9TCVDUz1K4NBuBGgGACcHWJut1sySih6KmQc3oWpxwzzkJhUHdRY1qvWa6xLvQAqeDKGv5iWo9F29g6",
  "key8": "2R7o2GCXgqQB7mjdqrtfhCK5mA7P4Ct7YPRFTZPKEKoM7E8D4CLL3mvPnaHi4WzP98tBY8sAfxTKYA2UCWXugJUa",
  "key9": "4aWVR3asxkFSPoVX1kBSAvpLVVosPCTpfcXvS5UY22vtMVyghDCx2hQCvQYvAkWhTkbV56ABv2GDB3ihxiKLyfA7",
  "key10": "3JcVhoeEcd5zEU1f2owkkSCpPvsjySuHbkyntvXVBVRF535mKVTZJWpWwssnv8ZxkYkfZnzmbu8FS2vhVf8paQJp",
  "key11": "514dUJMuFHcokNpVw9a6f6ZAmGNBGETW9P4oiJRTFWyv5mfNgq7m54jN3ezXLbPcRYukHJMCnzhD6s3nuNpoHhtX",
  "key12": "52yg6qSQKcZuWTr15mWU9AFkB2kHf3xioBY9iFCL9kU2NzguRmHapbDDB1wPpVgRCjLLXgcvGjmzGYaWiZ35yhvt",
  "key13": "4cv3CNb9Nz31pN9Tarhn8gtrwxE4BNzp7dt7nvTVeH8QiDgcoxRE69F3fQQk7TpQn25YafPDLjZuYLvmiMHuaqkg",
  "key14": "2TbpYJSX5Um4tywMzUn2dEYPJHwqSu99PYEvAus8wPnFStJuPXaRTMFTkpwZumJU9XFnUiU4Y9sydw8mTMFPBDwd",
  "key15": "KEfjoCJQNDKKY94vhmHdzifqQ7d646pN6Q74Hf34P1qvb3goNgSXTWTyb3ePmfoMuUrECkJTamUdmdjaF2Ea7J6",
  "key16": "5ZCS7cq8KkbgHP4yrB9cqanfif47PGAxJ1uv4pkGa3nPHw3rbK9QSXofwhriyZtqMFKSrxddH86tUiigW8mUbw55",
  "key17": "5Jh5tAZXHH81DrBz6bCPZgP9NunvCFu3j6QJ8mYn4t1FFbjmRKSkD5E1uJiFcM851tHNugLA3e8ypprzua63sCdM",
  "key18": "2Q5pr18dFwCeekfoLRxDVjS2LPfyfwfFNw3gGaFh5vCcWNA5uLbTssGabqACXVVm9o2HgikNsWZompEWeQ2iJang",
  "key19": "5vum3De4E6B9PFDqUryf8AZsyVKzU3u5MSdafWabNePsopY2zWEuk54MFELKaoe6tKXCNdhLBgdBfQ5ASf4uagS2",
  "key20": "5UQ4ji5oVXnjnaUN6tDNwjpgKWmL9TsmXH27dJq1ungSieWSX5hM8iSt8w6WRGd9cJFyiLpTaJQjEDyBb6ocRA7k",
  "key21": "5PfVSLejjDjMtcoKsxbHCCGaWZ5EASDQ6NN4ynKtKjmhmgdjj8DZvPwuZw1Kc7ePDxXxAds86hojstmfhCsKuGF5",
  "key22": "3e1ifrjGdjLnmBEgH2pbjpHVWLkDXzLY3LsGBAqrszjx6rebsMe76QY8ZeQD8Sk5BNn7UnUzg517AfB3uDxRKiYU",
  "key23": "2ivV6PT6iGWry8hKzGw5yT2PMeYX4ZwhvzCxQCnBZkx9aQT2jfyKvPCqrLgNWcAugkwreHCYe4Jbj1SYbJ4a62u3",
  "key24": "5gUxUwE5j6oGLmGeU3Jn79jWBeQBaV6puKbxYnVtKjzyRb323WNig6Xro4kjdS3UefJ5LjSj2vMeBLVG5UsXwTxT",
  "key25": "2npJUEz2pzobJYZGZdhmE1dcmhvstCYgbMmATQUcpx4d76B46xE4GiUjqvZAWZiKDh4njdoMG4oVdVPJrtv5cHUn",
  "key26": "2ABDoPgDVAaV38gesJ6X8kyzJx4JBDXSrQ9dCwbYo88VXFTqRHaz55vAtZR76gUpSF3726gvPApHtiKQjQb4hsnY",
  "key27": "2YM3ztP6L5ag6S5UpcALQkyAjqDhjrEFLcY1Xnag7Y5f8ABw27jRXL4GnfM7s3hbBWWmJcGCNSaZudqJXxVoD7VY",
  "key28": "xtr8uArZcRxK1EavR9APXTZGSaMJY6ZtY9PkrRqtLQvsLfG4zyrzSu5CtmbGgAFDsQ9ENP7wnDMifY3uvpocbC7",
  "key29": "1EtRgUXk9PrEpHuLdL5gmNMf2WcrTjAfyo4TLizXDLwAh2UQ15dUoAq1k6wki5FB5YHFye3L8hhZDW3nUrUE7ev",
  "key30": "649YFEooWKEWm3cGsr3bFXv6FZGrVnPQZka1YK49QPap7ZNixXenenfjCxQnSAsHCE6MKVMwgztPXuznwmL5Q4td",
  "key31": "2jmE5M5dfw6kBKswzFPX8u2GW4uQQnhLZ28Ms4Qw34zqoic7JNJE4hFm5YtyN83nFsDmJhkD8La6QjsngKwkZ3uP",
  "key32": "4WQAqG5f3aXAP5NaX5bFZCE3yv1WWjEdb1n7S7Mc2zicp9jvBugmEjoUJ44CvLvibd7k9rcfKB7V7FiPBR2YLUYS",
  "key33": "4AzKvnpbJSmmY1Tc4taL2HKb82zfevq8tPMu2M836XDya7NchfnhXLyFkd4zPdZz6hkRkyEDTpmj5oexdo44k4bj",
  "key34": "5RYihWBKPmuQoXzM9Pxret2MiZyts3YRBvLjJfa4kbwP8GQTo8u1qqPxV2zsCvF7k2awaDdX71djzJJCNn8bj9C9",
  "key35": "5FqYmeEiV71BuUqeJMh4T7SVPjMfWRSW526c4z16heTB6XcysbPB7fe3rMgLBzUYfjRrcLvf5X5xkmTDZovD8ZvY",
  "key36": "3nvTG956yWnxYHwxvCWoPxu8Jxp94aF4eZgvyucKu7LGcSnXxJQ69E8vSochLUNTebEdrc3MFCFP33mC6cdChiNT",
  "key37": "59NWk7763iLttbzubQa2EvSDjpLuVfX2MiM36pnX5WcNtihKPDsV1bE4TtedLHFcYixSSSzyeykaygoi4Xs4GoW4",
  "key38": "9Bog1xuad9TvXL9YT5JEsepAZooyENnrDjoCPHab6J3DLvLnbyJjwTEiWPwJFHxPPAbxW6YTfjhscorTpi7nwHX",
  "key39": "37uMXHwbATmyUcBNfUaRNv71THkExPQq7psghVQa4NP5Rw8CmhTFf4BDUyTuQoCe4TAegEfHm61q5yYaqAByEDDb"
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
