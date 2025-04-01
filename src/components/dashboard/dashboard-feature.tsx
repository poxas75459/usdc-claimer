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
    "2o7Wx5vfZ5SK3VVuT5qiCTmHmnofve7RnSamtZjyhbheTo5HxXKAf56xsVGFbDsaA2E8k2Jn7Qu7zy2eueya7AEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfxio4HfuFJw8CuKWNaBS6ny2LCAoxCCh49ZxVAcXqL1cEjuboWfTBCabW3ZotwraePEB2Uv1hfoecb8LRg9cMC",
  "key1": "3tdm6N4d5d9YYkpDRXBJVLMgkuENrEq1psAEoaWQYHH1xtTpVitELkYnN7EMvRe2DQMkyk5X25eWjMMU4pfhm7NR",
  "key2": "4VtPw9UoFjJQGnS9gJTWUJavaiiqJRn5bYVqCbtEUVvBojfW4SqJZqdBEpfijdrH6FrGM73rwBK9Zgtf4NoFmT5",
  "key3": "EjooGoieMg6Yjen5yJVVvHfDo7EZWzTj9iPZF9kDgEc1AjtMQgMEeUJ6kqqV8ScMfEytsnZeknSjwmCjR1cVhBS",
  "key4": "3ViX1pwNfUeYbpQhtqXMBjHMXxLRPZ6mM6kqyVhWQ56FPSnBSJDvmFgsKNGXzM13Z9NCr2dnQRyKdJSywtzJNuz1",
  "key5": "32Dv3T6CVukRU9b2twF7W5vJKoTLLLvU4ZsN2c7gzfkygD1RkXHS2JvHbF6zapkXnHyx5XtCP6KcXoVJH2zcFKCC",
  "key6": "4jfJBS8yvkfDsLpUgBTryR6N8or8zJeqnHZANXq269sDASV5M2B7GyAcA9RRsRo6RW8n4pgmSDx91imvfTCXZijp",
  "key7": "3AgSnsSYQdPa4weNrHm1hs22kFfoQ5bMF4DfHmzERJpzMDq59rwmET4VKrts112XnjGVkw4wuPgCYgdwZsbgqh1N",
  "key8": "5VQrbGipaRsH4zbWsRGAtvQtHDwyGjb9Gh5sgvaBmrqhvKAeXJzpxoEXV8z8whWJdpasURDXumyGD3YsdochDqUg",
  "key9": "67EyWm44Mnz2DtJKhwe46JMCcKxpJnTt7Pu71PMLQr46WC7feyHnA9MXP3MgnCwVqMNGoCBKugu5ug1KLqmzmdDt",
  "key10": "puhZZjUZujjiw9wwunHN8qTa211S7CQvAoh2jLTHEBTctRg6onm3VMAvGTPEoBVmbEtx8H2F7FgFTodHe5jibEw",
  "key11": "2apD6jKgh7k6bhY9Yr9QpwKDhz9wTh1B9JndXFxFFgEWUj7oShoSPmt4gwVMo5Y6NGQe1jczLqckkH278ytqWGpu",
  "key12": "267cvPs2LRWeT7QmFfrmw4fBC6xsqDQXbaAXJMaPEMDVjJqouVhyKJkxYWiB2xf8ujq13ZTxwtczhcBV3vfLWdvj",
  "key13": "3QszKHTy81VHyMbDpe7TkxtpYWEVWHnWG6hK7y6oYvxZin7Uymeng1HhEYwBf4B6aUQANUoRcyBXeE5j12Pb1GWh",
  "key14": "3f38WVTNZ8fgeFMuUj6E7NbyEUMtQv1HwpYvndbA8EZH1zGQhrz9chjhX17ZuYeAjU7gRMgBekEAoS1D89C7VTL7",
  "key15": "3Pgbc8tCST1f5Krj31PsyESjeLjHz5g1yrMBdw1KDgnDd7XtNxD1UWt2nELGqGSVYv1psEuAzHWpeoT321yuhbAG",
  "key16": "37Jy579VvDhstrYrqBN2rr3BSp2bN4AGbj1iT4XZVTiYN9aDiNC11JeqqABCq2hUXDRS9jtFcsJCopgLk4aBsS1d",
  "key17": "2vNNwx24BmyvqLvWg4iEgicFARf2UaN3QuVvimLbEZKYohK5wK9S4w7iAWnNcEE2gFpktaNk3PzKPVWgJkyfxtzU",
  "key18": "4bJwtic87wwmwheu4qxY6wuVM1S66EqWDDCfUYhaLFs8sohGdFG1DoGJdrmcNZ65AmQv6x8XYMfzdpfGR2Lp2fRw",
  "key19": "2mX3eRjXoUCeTXMn2CzbDVh4qpDV6DrQbV1usjxDFeJm1vZAmTYJPhmqiRwYdwH54kHoCRyJPbjs5wyCJS4yQPu1",
  "key20": "3qgtAYShH5a2Kukz3hbC5iP5t3zwUMfsQf6FKswguJDTFgyE8symUpsCdG5NoXxe1MgpLZgjsNwrMXbMhR1VvwSZ",
  "key21": "4zLKrMLWPAQcxYxvnzykqTc1veaDBSvhVwrhyDeH3TPjb4uxdHgDuyWhkXbynrhBCS3GknyNxecgDfFwY2dZ3Vu4",
  "key22": "2AAFy8CpmYFn8uxuKnXFiZeB85pggoNFDUQjtm6w9qa9mBDttPqukVV5Wgz2YQPafptpMEWPR6KYkJyqjoi9iWnn",
  "key23": "2r6ogoikWxcWuXQ2dz7t11QwX9UsdC9AW7Av69b86exALwfjaMbV483jeB79oDHJfyX6yuZmD6VqAnRAB5XktDyN",
  "key24": "bgwgMsXHj1yVbMQ1BwvM3k8jhEvD1MUFR3wm55byXC48itNNudCaXsBScXffrQ9b8X6D9y9bofoSRKV9RbkAZbB",
  "key25": "34t6cLTKcSSgjyQXnj2HzNZeyBanKiY4Uawx7rkipWG6Tyi2QRsF1P5xvbs1M55uMmvi4dt9nMVECzoBwyTyEXwJ",
  "key26": "2wgPdGXJWN9aJq6HVCnuY9wXJ8ySQNodj1z2xJN2rTF1RQS55UaBabHQwGt8qvua5TNP1jEyeUK6BGd1xZJx1Ud9",
  "key27": "33jiXy8f5jX6jueoBS378ZQAofdGWZbsxguq7iSuDe7EC34wmVzMKf7LmAAXmFhqXFci3H4tkufEFDmQmQx42f51",
  "key28": "58PoSNfXf2sP9v5PfyuoKFuJeSstAxnpeEY4HdfjmAhjisfoNFYK1k9aczJtm5C5VscVEkUE1cNrWWuxn3rd2ePo",
  "key29": "SXFNaDiUExXKztrB8a2MNBVHgBGqZW6t2eakhPsSMpFdajXU8DZuk6q8QWRSVS2RnzyviEr9Ma9UK8hqKGXHw1R",
  "key30": "5DL3gmughthsUmEzJVqQ3278ptNjs8sa75MmkUpWcNSZpbbQpNeURnmyVMbAAqSKkVFMF34xrCo8KGUpQ4kwFKJ7",
  "key31": "3EHB1ogdTYpXAvyMhxVLqLhwVe294hL9mcBLdRFzWFByc319JRKrLAsD2ZmMofrf8Bomj6zpHJWXrWeLKD3ES34i",
  "key32": "2GH3JP5Lkaspdu3aymCkfkEyfCQtwituMqv9zNRVDzXG7qh85kSXUFK2etqr5ypLqwNRQR6FsYG6s9Ymvj4pXehG",
  "key33": "htVhJM2Tym25a5M2W4LMn8F9jpN2MRC2rPoqdMp7ZqcUvQ5V71SYNXQ2XEv29LpxFtPj22TLQGhPgFBhKxE6AfB",
  "key34": "5ec7EsN7jXK2FMpGFVvqa6r1tYmyyA1Tgp29KdAu74uCYyN4mJTEGzswHG2xVScW4V3KrHzHU9MWxxepSZrw8rwU",
  "key35": "63qkcZf3N7ur4vmNnWdxrkMt6aGkdTxqW8b4FSV7HNw7Regb9CRf5pRXTT3zXNy99epHREG35USm5HHQiXzjDVCT"
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
