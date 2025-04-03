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
    "5smuAhD7kC4BkskJyet9b2FXL2mS4RfzqXMhct6Kc2jru6x6CbXUUaD6S3NDsnHicGeG8KGLEqw9sPKfm7xETjmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AS1Vgj8kL2a9aVsTF44DDvDQS1Asp4dYKyd8C6yNRGYfSwVx5iC3e8iWXDpRfDJtacwvKZyxk1kiRTeWVABtiix",
  "key1": "vSpACiNJyTmFMzYqnEQ2qEpkqzAUWLAKWodt1hUoWdGKmmmKkt2Zyupf4Dh17sdXzV1D9d2Yr48vNCHj7QDEXSK",
  "key2": "5uiXzhSNXjCGuMUPRK9QzUnNpZg1TSKrQHXdJa9L88C17aoNJd8rUwBdhNPRLYP6yKJeeupfNSz3ZGzNX3Yth4yX",
  "key3": "49fDUHrsXvxtqs6QZdWRz6QE2bNhMswdNCBdwNgxr7HiMcu1vVuHa1c3EWXutg6VCY2phPD3B8RSdziYs3pdTgry",
  "key4": "2y4c71ECGFcGF2HKgUMrRwDSacpuTJvvqwUaSsxePd8hZnTrgdcZrBp8tMrr1FUjsp9ZdadCAERpeiGHAtFfitTf",
  "key5": "1oybpar5RCsWkXbor56KKN6wNPNnv19FYNhbxMf2tM1mvwfnzu23n6XJ5bnxgPC68btkXneBqVtgVUgxPZkT4ZH",
  "key6": "3AGULFrTCFxd1ZZTcyJ8HxK5vSDpLfe7ngtp1SJx18JktUMxj9W31NVBZaTRcW8GJ4cLirKBdLbHLb2mJgMwkyag",
  "key7": "2xe2yFd2Z4Jp7JQ4ULDPhdvfCQmagUK4faNpG8FuFfwtdXDVohDDpw5GvuzwgtPdBL5dgd4L9SqQvTFnqWgVBeME",
  "key8": "3LnAUt6Ayc8QxK73kG7SFRz9aSB6yzgRhAJaUZfhHiPkrTBBSdu8Cw2oZGDUYVE9s7zP1jR9TvJNo5kV8v6jzHd8",
  "key9": "3A2kEACVA67CKMBQfYzhNQvT3EJnG9jspfTove7XNJrnRVMuDXh6Gk2JBafBwZMDwnhcEHLXcRzhMQbq44UuqDKi",
  "key10": "56w8AwJsFRVC8APh24qZvjjgtNpb66MrWRknw9LTYuEQbw3td9hfwnUc1tetscXtjtWqgTUZvU4MwCrSZ4PiRJhm",
  "key11": "64Rt85YDRUHBpxJ7EFoRA7jRzR32fxrK3wiNYX2E2rdaB5K3ihvoE1RUG9cDgdnDK7ECjfXMQfr2wfJ1U2ezqNoG",
  "key12": "3xvSKSJ4u4HPyDpCNybhm4NA8Z3weVEKT29PSQbqrZyJGEwvkgsJoFs53cbpYPxwfLzghetwzkAADa8o2JiAf657",
  "key13": "2EoQoa41zThqxX1AyF6dwMKoDkmH3AQhPtsoKw2ibJcSTUv5aaPLX7LFXETbEzAiiiENNgYDLC1uVmFSeJmEooTV",
  "key14": "4Jv9JmvzkzntTKwLF3TT1NamSG8k6E6ywDCdbGGqVURWmrnad8Q4FkqBTrU4ZCh31kfHVA7Dj1zho2H1218qumhs",
  "key15": "2pc8hqbLVAUdFHzjxGkmQ98a1Pr6L7j76UVufVnNr5TTpnDfHtSZ4icaoE9rJwYPRDnVAcZjFjTTh4V6sgvL3uvZ",
  "key16": "2TzNGJxhiv3H6WwZcHCLwf6XWULhzAJzYXNZLqpqwwagvgLoLAVwrUbzLu74TGP7JqGT2jSoHFZs7gZXkxrVyh9L",
  "key17": "4nL2xwLwVJyAVmW7etXJYP7skFtKNF7vwaUAhwrPbXgpJLFGrCtruo92NWToogMXmULLBxTWM8SqkTEwUFF5784g",
  "key18": "9fDrEJpLZzc8KAHx2s2uuDMvuhVGeASWH9ELY3nfhBzoEGSyLGGRz5LMZqSGGW3Eqzqdkf4qVk9xbqwur32sEjo",
  "key19": "4HwZJCfwQWQ9yWw2unH5YRY7QTi2LMNKTtZqa1xo7rGG3QKxBwbNVr1AX61ri4AkQBGLo64PQbTZFYAwEHvAD2iB",
  "key20": "zuzJfEiCAuTUDqdWaa4KX8kt689DrhngyhkSyzx16UwA1fiCXPMa3LoHU9xyEgL7KsdgyE4nFgFzZ4kYA2RzPxh",
  "key21": "2KZEhgCPBdRzVSRKWp9VhuXScmaB6jtMT4v4YmSTog1We4TAzARea1fCLuNePN14thkfDZqQeMaiSxAqyhWiQUwE",
  "key22": "3kyVyYqeNb9UqD9fzomQUaTa7M3j1qkkGrywaR7uqzFRf7TXn3gmygam5eRMJ1Lv7SAo3iDygnJyNGcX36YtHmu6",
  "key23": "3wCSaeKhswY3PgczaQU96Zkd9WcMpVsLDamCdy9vPpkKLujAbH7kGbzn9zGurVV4F5NaZL8oSLbjMVM92m86giss",
  "key24": "2TZoEu1MUyCf3rFN5TD9ofDFm5rJpXJiUYM2uFeJhDMS4eGJcixKrERdXWnKRB843U2EPcHP12Mjc7Z58Pynwbtw",
  "key25": "5ZBTVuhNFvdZNFDDTnF1fKY9Azebh9PJHB5NV6MEQVVtF8fZDfe2HdeJnUeLkWS1qgRkm92kDDG6SKDe2bcELDPP",
  "key26": "twiydntPejkUPNgLW7shfqPsjHuxDsqU6CCFrVws8YHxd1FdUXSG1khZ3oYo1jbAMDh5rXBAdpVQ4kTd3wDUrgq",
  "key27": "4odFm29WkntfnDG4rueFK6MQ1pf4GYoAiwyDHMEk3dwnx51XzX3NH2VGeBSjzg7sYqsF5MDwxkCXkyPPKJvS1DGQ",
  "key28": "5vjautHmyXTnByCUwooeaXohx7AvUPvKj4W6qYjKgGJLY9dM9b7ozoDpvCgzGv5cpYxJb459CJ7fwBD2dK68dwHh",
  "key29": "5GXKsMDZ19s21ffHQCDxyenDJKtxCStJPSBzWCoT9MEPPp7agqU1JbjsiKCYwV24J3XdMVcT9AZjLzAsZRjfRwyN",
  "key30": "4XEhrmXCHWSKmYXfJK1Hux2Grcd4nDvBVactEPgopnxtfxMwjWTRB6GoMq1NkAM76B4UxUad6gus9W5duzXBtfBB",
  "key31": "2urGwAhmEvXQPQ8fN8Lj6Qm8FXcbwzw23s46cMzMifGdhj6ksgTpQNj49U5a6SBhHbMV4AENXwbhwxV5q5cUWzg3",
  "key32": "2SDXyCgzjJifTjWHwaf4eGiaiutvUAmwuDdqVe22W83U7CucUPs8kNfJdgq2XZHwG8rWmMPF2N2ZckPmTNCdqJhG",
  "key33": "2K3VSfUXXYQDwwgvwMp6tCy2HtTUKroYUHnZcwcoHAKVQqUwPLt3YFdE1Tx8K7F7KBvsp2u3SuPHokUs6VMdcTkM",
  "key34": "2Bd3bQE1xAZVwhaSV6AMBgnvLzkUpGT5MCH2Lr7D3AMALUmQpYSPFogLutweeos3tuHhZ3tRtAioXrKBURyZ6ZKp",
  "key35": "5T1tW3dtUmUKNeKWegedY2GnjpgLJaeLA6C3racLxFcPTzFJM4XovVnBVammhLgb2ArijL6HxQ5yumUMU61Yr268",
  "key36": "2CiAqa8gLg7jKVDEwzk4EJyyWY2vGXUoqb5bVDdsjmzv3mwd2LrG1rzKwu87XWVShGXeFQpJSdZnEiKgpvefswXy",
  "key37": "3dzFumUkCsiR3yHjFALEegSF6kcBvHPv7p5WGMYAijLEsHKANyzdADLbq8fUS54K3ijp2xp2CqDvXozHRfrMFFGA",
  "key38": "3REnjn2MbePjZYPGLM6Cnf95r3B8FoUToo2G3uRj2CiLP8K4T2tYuaCeUSwyuEvv6FnhNGRQZYzxCTR9mqT5dqU7"
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
