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
    "5geQah8PrpUwVmuYSUzPwWg5xt3U53yZS5WCssRAQYyj2D2hrJ7ZTJjARpSn5gSXB9Gg9NaYgBBaBA2VkJxuiFfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wPeLtmbDzxwBBGNXKSqLQM3Uf3tNjn8tcEtdvfLRT35YGGDN4ZGTPHYyRBvxm4sjbzy5KihsykdP6XBce2jfb4E",
  "key1": "qtU4kgMSe2Znsd8QJsqi9HrDH5LQmCsZQEWG6ED1rYjPB5h8DHFeCqgQChfanVPUDA8MsoJLCLYWrfxrkMT73Vj",
  "key2": "4gZz61HHK2UhCvH8n8hWtdFfJKowj5fLjzPsgEDgAoZRRJvNwbwWBYLcTnCZwzJYzN3kMvmX57e4A7QAMMDh5YoN",
  "key3": "61nBmZajhz2qxHTgnT8Ndtre6STCkgKYURguguCdo1mFWmi9eSymrfo56Nqr6wawzoSo5eYF8q1jT5zyD1rj9Z4V",
  "key4": "32bUD2kf7ehrKMK5WGvvAdAgvdEMrfwbAyD2XTLtjCRhCpnpDbdfQ33MHYHcBUpqLXX2dKzofXMJrQJeDTjp8XaT",
  "key5": "3rqMoAUdNeL341Ri4XokpjComtVorFYW1uFR9MFUEUCB378NSy1Uyrv2RjG7Jy7vWX7NR7bSXw4HasrWnw2LkdGu",
  "key6": "4C8KC518iaNefhby7h4dCmvSUVDzNP96sHikpH7NVyLNbMjXHMZmWsECaoPgsWmpMMjnuSC6Brsf6TEzKGkwJhxB",
  "key7": "4TRZCdindQC768TwombFZCQMXuV9iryBNAH5dD1jKdTo3SFpxxjyEgm5E3tvtnXBRSmsvN9vssmw8oAuTdaPyS7b",
  "key8": "p1xFowXfWgesbhxzTzyfJNydRAubZVowuMrzvMJasKYdhNi91jMzLSknriaRH4X9P6fqyPJPmY1tDGRVw3n9jaP",
  "key9": "3hNaN3BSu3JadmEqGdfAJ83AM8fnFV4NP6SL8MHfTERrcEfz4dY67SjoB5XkVKAYsRJmEyVk9S5i3vd4p79bwp2Z",
  "key10": "3Eg7UQnqHy6XYdHzQBPHsik1SEgixqbrYWEb3YAoVFt69B4XoYarm79Q5eTHTuLGM4bibTafzzcdujJPmkMPDGLe",
  "key11": "33Y3kpyrfobANETuoz3jbCGjVD123DShTSfZxHLscqUNEKsErgs1HWS2Fw8jUyYmVVb7e68f6Q5rBY856wLJPqkw",
  "key12": "4h6FCQRiZJ2ZNdLatpNMtZAfxXtJd9KizmVVoyhbxTDcc9xqriD6N95X6kQ1XHRAXbrecteLevWEDzLc7wbsWu3Q",
  "key13": "46Y2zQmMjeEY57A8TTKfgmRTNBGZp7cRHdBeFN7XQqqX3jne9w3e8xoUW2wE445fSS3pWR3qUwgStt8NCBWHKoji",
  "key14": "29iZKa2FAc2M1N3N1hSMstVJ4BC61QRdzNaAT3eWQRWVeRb33WV752mq4kTQ11NZCe14r9HzS647KYiESFXTpMbt",
  "key15": "4hkGAXaL3p6WV3wr99h7hZ1L2ATRp6wspA8C61HvAZeACALYniHctRGhwvWAsZfGocJSDhLdGawUpeFDr18VkrSe",
  "key16": "5m4CaJwArs3zJAj63V18sn7c4R2t7Z2P2ykhtGnqUe2kLKnuG2jMiXP52Kn2QLh7tPxRrysDmzxVRKNXPJdmUM5z",
  "key17": "4g1eKooXrdiEJcPTWpx98LhtMmHjbSsmDZFbt8L8QSpnLvHneHjPng9mxBNYKcpm94gssVdvM2XiaNDkaCLHcSxA",
  "key18": "jvpZdQ2EyW4m1DL7Gy7E1GJMa67sjL5izGH1e7RVj8iyUfRq93SUMXK1HS4zApcv9TArLPnxzMWYcYtAqbsXrwZ",
  "key19": "aCqT8k7NTvvMd8fwnTBq5nbrKiHeikfp6AcGTa3xRmz9ytAdxAomQh4HLXGkQXCRboZgWuawNn6emLfMwKc1CJ4",
  "key20": "NSWSd2J9W8tarU54DfM2Nu1or8nUcV9N4Ag1NcXXBdYxSsTn4Eh1cnoVLDtNjy1tUNhagdgSSAx2NtTJoxyENaJ",
  "key21": "4YBqmLjyoyD57dyDhFeuUgcTrepkyeNUwdzX6Fi4kRvJQ19icT63cZB49DwpjKwwoYeo69oX2rUYdkjFYobBLJcr",
  "key22": "na1hMbsAqYq3dLCHm2BfK3fKgxJzu5u3fb4QguXu12LLW1rZDAzcjg3zpmfkoDMhRLrQQzGon83FQjCTkEa4o5g",
  "key23": "2aBRhx3E8NoDkhxLMX2g1p171GmujYWUkRWhvnYBXhQWegH4yNy28zfEsLammyeAGyp3W7d16uj7BPrCgAPh8qwj",
  "key24": "3redQi5eh7xcW8txFB7mvLgix7VRX3j9pDydJv3UhHy938UHvDbd4PRNUUoRempDRmVBCjXArwdLFfoTNqoFGiXM",
  "key25": "22tKrxkgXqeefTLkJkpsFMw7BhH7sizLmpwdecA1YNCiHhjLLayE8ZtDfjtpi3p1TAZb7ufhfximJQYPxcYLqNHF",
  "key26": "S1a2htR8YAncnece1icE6iD3p4sJ6iYx4wPDA23d4ZFR1VdraSBx4fa1Tq6SQXQzFGqbEbnfqzPj9bBSoh1qvCi",
  "key27": "4J3dDav6yHeZMD98hh38VTP2dsc9rgf9d6R1WJ4Z7KDqCm749a7jd128ZKBKWXFER7Tez9FVsd4biKGVQC7KmjRv",
  "key28": "5aLQDAvoohg3YGBUkyhu5r4BeAUDrjYTv6CcB87mJ2z4v6b4u2bPHLcuG7wANh8aa97hvm9FxbAQBH5Tp5EErWJg",
  "key29": "2jjGKSaoXEAwwEEtnxwzk54ukeky9gJPG7YkFXW3FzsEBLbCttUUuHovXjkZb7tJv8UzuhcRECe1voMDcVqX2axd",
  "key30": "3Nh8H6AVuTuLxoDCbmdJMtwuDkrQG3KWq6x4CRBgv7bEMH7rEHaFeUNFzciKkvhQK8fcgz4Cgfnw1pFdh7GZjtS2",
  "key31": "YtL7ShFLYCGNtGjQYwn4qur3PEf3C3zajrPNiwfvzReAqBcPSFDiXynsPnHcnRXdt5mkmQXkVtBuecLuLN5Krf6",
  "key32": "2VWt9VkodmeLSwDyLz9ZmDYfTmsuQDQhyQbpcQqDz3itCmQdTEojsEkYy2LNyDzeKXtNN5Qr4C4PzYhDa4LhJQjP",
  "key33": "5eeS2eRZKnTs4eXgQCzc5Dj7nfA4jZLLxXfFCVqbzYrMQsDbBKPEJv2nYfoZB25uHdZSkrNk8Rrj9WnNx5uwfns",
  "key34": "2YEKU6YEvbBb3koVpgruYZ5dySQGC1U57q7dhu4F5LJaKnUTtDjtchFekChVDGxW7NEps4v887xbwZxb14thwzKA",
  "key35": "2aETUh9kFWHLdaWJE7eL4fBZpQfa8BYwX7TuvccFnzjn8R14Esh5rJZu7ufdQE4pgfCHEFC82KU2AZ4uV1eEkd5B",
  "key36": "5dKZF8AZoFBpuEF6b3GrWiK4Un5vVPBmC1Z6FCAj69BK7D1oiaK65Cqs5Q9eM9tHL6QnpFoUHrxeagTVp5HMmWk9",
  "key37": "5kaXyCNr4hLgim4duQoPZWhwsCSCdorGMSv13h4R9NnQBh2EmFAu4yinPXewosy3cmkxGaXwkvUzGt1k7Rj3joVF",
  "key38": "3HVhP7sW5NmNDdVxHdPBysTViW6QNM39v94BUhseNqidXh5kpu2H1LjGpE1G4C8Pu7cVF49hwKzVQhjb9gzU9myG",
  "key39": "3yPDHwYeu8jHtYGZZwJJwfG6hRC6agKxcA6fcdpqMe9RcnMKZbAdUgsybjysssbHTf7NBBKVe8oT7ESR4wukhn3t",
  "key40": "63qR3ebY1j7SELXecwCUfh8WCDBEEhJkPazw8Ka2UMRhjXoesxJkiMqVmfixL4Yyowva82tyQnALKp9qdZHxWogm",
  "key41": "2PJm7ySMe5bUZUwSFj9z6HCWkMww137g8LDLEkf42YAEeo2mCEtwjnoompyxCc15JLEqjTHWVr9Scd3rHGjsWw4D",
  "key42": "3xc2ddMJBkksSpMnvVHjD1oS9NR15yzX3fU4oLQZjHW1KfQxmsQv5j1g3qgqBo9ofAbWkrNL9ZxwST3Ke6XtqaCe"
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
