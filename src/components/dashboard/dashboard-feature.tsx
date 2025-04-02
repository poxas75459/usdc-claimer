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
    "4tp4JNzHosfaf5sVhSU33kkd7YzQ15fUweWns8BmgZSKgfr7ZhinuJmtAVdbQ4qQEmKPFk1zqHduiKRMxnYAza5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chGyptaSZNXQ3y2QT75PDumNYaY331xsuPRS4G1r2BdmdZqf9FdL9eJrzB5ydJeJqNz51fDzQ2dyE8bz8mMWUX1",
  "key1": "2KvwLv12Uu85bkzvvPh4KktAk71xQgECBWo8CJEGFiKH5TwnGoczw3qgstcpLjBeAH9KqVEiHmMHfLtfvCswgguW",
  "key2": "2UvwLrEF3oybHX4DGYf348ojxqfH8LhNeEHWz1c1rqV28o7qY7EcAdZ89ofb4A9WwC676ChueyM1RVuB8WWsYrj",
  "key3": "2wS35BEZ3qBRsaqjRxx7Q3EMG8xnFsjtFiiRPfAVEAJAdKEoQBQuvZYY4DurT6cfBZCKEjjkbBzrsrRxcZvkCbAS",
  "key4": "2NmTDxU2AZcKaNLtA77RZa49bqsRczvuT3ZuRRfT5aSoWFbzx5gxsCUQ4bkdHL2dYRFhUa5eqa5sRVtkML6rG517",
  "key5": "kZ3fUn3tK1ZEFXLY21LniRFFY91h1FwXnnYdBW41dL9ZS8CwtMKkwJZYXXVK88kZnQ1N6q3i6VSYWteHHPyPQL1",
  "key6": "4AGSQWuZYfMwSFDSyVuPpQ7PBzx8xrbmNe8mmAoXnvfxXWT61zTvCxasSmD3RC5EHwgJ2ujy2mfpcMNftwHmGaYx",
  "key7": "pr1BCjTHMDco7Jfw3kdRbXqmnarYD4byPah4Yau2FXpui5dnZv97qrks8KJ48krHqAG6tWeALbG2MXWZfRzk31E",
  "key8": "4qW6GUrtV57qS9dgV2Zk4KBaRL9nALhpzTux6gUqbWG4SLo32DT7N35o6kdJaJ1yMN4ucoFQFXZepaCHLqyBxSGv",
  "key9": "5Vt9bwJtVcDf8mysVuvxwsr2gj9ouMQ69YW2gZcRvDiW8VyQfhDLiYRHCfGUYt3J2EBPbvB2PdEtAPNz9Z6BtKVu",
  "key10": "4CbPN5KcdCz6QK5yjLVW52k56caMXSXkMsrGgNM39aMPnpFcKyj8J8yJztZ57GLH9YEzyAAtBUeBSrnfdMymhBZB",
  "key11": "3onJ7Y4hC2z1MYVcky2EjR4C95GXsnWkEoNUDCDcw7FQDFDAXgJLubZN22RAZcVpBWUsoRoEtBEcvxMGkTXi5Utd",
  "key12": "4ucQPZY6u7HB5pk1TxxHQgdLqPnYFanixbrXVFPQRDDCZnHH2NUwmzrAvebBTQcBxSfk2ofs7NXuUF7CHfp43Cnx",
  "key13": "2eSTuQqVR7Rd5mPd9va1jatLoaPBcxBejpg8AC1YYiie9kiWhJb1xQmck4QApJnsJvfZNTPF9WeqnsSJZNZ28sc1",
  "key14": "4QM35n2qSA85bQsUZU9wYNnnPxjgJtfYBvzrFkiQDkVaYotwwDN26cfxgV2TjXxowyRM17rLcCRJvuSSUrpxTkYy",
  "key15": "2mBPsxPF1PMGK7VW99iCrYWb9sJnE7fxdLUY63GG9NwUf6qx7RC8tzeqUtY8iMgnQydDssyBw6mQa4VE1hRMRBzR",
  "key16": "2MCYmWb5U3L3KSh2SqyRmR6GdJDkoG7Ckfp3nGSNYJCmpzTtZo3CUmjSbuM4Rm329dXix4KTSTQH39StFFoRfhMu",
  "key17": "2LTQH7b887jKcW7eY8JPTN2aLbZ3id4VimoozVoofGvkXFp1siUAicEUCmdXgdPi2ABRrDThnK5jaJBY6R9GiDUS",
  "key18": "48dG2Wi6z7rJoWSiWRce2YAgMGbbjqzQYdqjYFQ4fTvM5vA3LknW7XJTZ5sdwGMJFBeD9XHmx1d1a3TpnFmaJBzg",
  "key19": "2CWkp65DErpAra3bX23xQera4cD8m7m7cYmF9YMB8iGUe1MFAi8UQPqh7Qrk5wL899mHGneTacbkLYsLyUPoN2xz",
  "key20": "wzNzLksD6orjZsvDAKTWbLVp3xohobjkLXN8PUrDZb5KFLoe12hXKBsUhZ3gaC1nBFWRpNm54EdSxHz5usAjHkC",
  "key21": "zMg5rxMN9bduNsZcA9Pxi3egw9NsMVWettb29s2tCVW1LZGhs8whsNhNZH1ZAqC4k3ZQSfDW1YHnUrNha2uGQy3",
  "key22": "4La6NG5Mj5Q4rrGUfVvKRDLeuyhQ3dQP9oz447exUq3dkoJUQrkFAeAsHmXk6dFCaxv1zR4axx1UrJAiRVZXFx96",
  "key23": "3W1s9B2u6T464G5YLfhhdXLPdNBxR4TwkKRCDzFiWjaWkPL9i5wzshJHmhB9PnLWtPuSLuantHNgKEWHJxqwtPcc",
  "key24": "4jTohSkmtBg8ypWZfBro1kHvGyY36T2CJ9Ra3CtXi1Ls4fYFXjRm86HDhDHbYjMRthMXh8JL6rTY35w8gFft2Yrq",
  "key25": "KuFNK1nMWmXBgYPcdBL4UMcwSQr5frSMkM8bzpfiYPc1AmdCupKgmw5iZ4sN92qrGCCTa5Dc3AXtUrke187PZiL",
  "key26": "4qShns6YU47Kc9xA1JYXLg7pAA6MF4T8gyPFmNkSi2xmXgkLavqf8Cvk9dX7t19tDVUBQMKyks1y6VaeVdVqnXvK",
  "key27": "3fm7ownoLiEDU7JpwWRkxCEjXpGhxfuPzNSW7W1Mm8YchAV9NBPYXqs5KjPqYYp1xwyyMo15u24m6cwpysuza4N6",
  "key28": "26EfUavRjVi4VgXR6PFu9z4oduBhM3X76tsH9WzfhPouG5x6UMocN8ousDs3bJd4BXzUe6SnnMz7gghQQ91vhAYC",
  "key29": "2GXkgxSVYTeEDD6wzbge63LbPz6Nn4ibn3fSULsszDiaFH8GqASE6w2NLiC3FgWcFU5EY4qe9FP6GFJA4F2w9d73",
  "key30": "5fFD42KA5mDuXnhs1dGZYXGYtav7D46CDjLJCSBQedjtTRJYxNAfg8czsYhCJQxvuA36faCSHrf6L5gQe6cS2cEZ",
  "key31": "4aWQBbhwVEcQF33niy53SbuPmKTb91XbHRtKD929c6pEN1UPZX1Ud22k2vRSyskQ2ViDwxmbgeAaBjmcz95kHdN5",
  "key32": "fN1YUKWEnkpCc8X3g5kbJ7NkxXgHNXrb6BbfpXMzBFtBGHEAB4i7cbHQbrtUgTH6PuvBR7K6SuCcJTa7JAz6KL1",
  "key33": "4rM5o9NbXtir3zkHB3KdiMAvXY6ctu1JjoMJrdVF3d3Lyoq81BJNWDEGDCLg3QaFh8obNaG4X4ppMGGUWqwA3QNY",
  "key34": "27C3s1aQSAc7Z9c7HwdXBTx5JMKHk5JoEY7dVbL3Au15uAL33jZ2pypB8jP9KTCWxhP6a61hSDWBeoNDBv1AByxv",
  "key35": "bLXujGe3fHY15zik2btzQtJyeSvD4bZFXXLYdYmAAcaebG5VBFe1w9uXq2wy3qof3EndF8jwMuBykGNKgM15kj5",
  "key36": "5aUu7och9rEQAZNd6U35A45LafuhkRic1yRMEBrg6HiWKZ9jqnBYm8DdjfeotkuKQn1xoAQGAdvxtuTWcJzPJJGX",
  "key37": "2S9f9p3ee5A6SYHeafrnCSvwFuiRbC5JisYcfLVMfQE1PBYnqDbP5cKQUueeyX393Vdv8QScfZ4JNip8w5EvePfC",
  "key38": "3Ka5dBBXfB1T6Ej9w3N8F52G1c84iUTr7paHwGJSUpB64jdvyWYLLhdeZHfmSCw5qbrq5ybBHKXkTykYpbUHHsaj",
  "key39": "2gapxubzSXgbM5heCBCdwo47HaXmwM8bWnMMW4JjUWLKE8AbPeNqwFLehheeMGUvoLH2vAUVm1CGSK6p43bi3eN7",
  "key40": "5TnWF6CbKqoBZ1pcjBuorkYCNy4Sk9UTsbCnj6x8e8V6a9mBoG2rpJYavgj8Jm12ycrrDzd8dMX2YzdwjuELX8JQ",
  "key41": "4HwJ1RCZsfgsK7tKUnikw8hv2BJWkTnFPpaHckwNT8Zsmq8boGg3CzG616LDuKThzLbPgQ8Eg45214n3XyVMkNYK",
  "key42": "3k3ywKEDeVP1rvBD749dLcWF61hFRtDoPqzsPzAuLPAqv3RdfnKdwt5BXZEKV51ynJyzsPkmmGcspXCsresgqjog",
  "key43": "VY9W5oi9UKx3Q7NqsExriE6fdkQ9kJSke1uDsLBMncYiJwWRNBVYEb896UKf6rrEWrGp4CZbJhHcPUV5muo3rrm",
  "key44": "4Bg7fqoWU9PYQ2MaaKDLxnpGBk19cK52wDfSujZCiXPwfoEPCsQAHyVsKFSp6FfuDY6NuKhavMgTarYe96RjE75F",
  "key45": "3Ge4989oszceJS93u1fBPc1WyxSEeHQ8FzbUYnGVrJNzw35sqnDvV7xh4uJRSsEKyE2gP8uXwM7gDPyyF6sLFW49",
  "key46": "2ucGC4iJKMJwN9q78HU3BtcapNzcZSKxRwU4m54YMyncPJcfEavY5HUZsQXWYh5DbdTt3uDwMxUW6xes2GsPMPjp",
  "key47": "CtckgeFzMELwMoS2xR4os82ZNuy6AhPdpQnJWXeSV2gFaVHv4oH3f2NpWC2e5rkKGMQ8TDjkhDs1whed1M44pjg"
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
