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
    "8357CoMEkTarTQTcPBjQmbYNpFjWf75kxaW9sz8MNuiCBgEUVMebyP5E9pkBcKqZy3ygbvKdVX5WJVN5zF2ZvuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWZV5Leox9ExKauKni6QdtpEJsr3bDz3vthEp8RmfttpyqEG6o52gfsz1vH9Ju6UuBvLLkP4U8Hk1CCnsWPiVLd",
  "key1": "67rQJC7L3BaTBCwH87Q2s1UPWDEwXeZfqy3fFjDNhB8KiEQsboQtgGaS81zgk2YTpUcmqyiaDwJFnrbhEk8cUbWL",
  "key2": "4FwHdnziUrYhtcdwBjCNaPd5iwcnDPgZQ8SmDY46fPi7cbX2F1xJFJqvgyprM19vruaWvemy3oNWxGSwGJiJq6uX",
  "key3": "5U7Dew5vkmhLBD5CXMHJcX89BXPpYJx61kJfn1Z5Y4sv22zxZ7EZQhZ2KSBVZVLeZztc13FLztPPix6VNoHy7wQ3",
  "key4": "25GTWRNmgHzt5Wj9HrTvNPi6Kf1gevf59bS1CgvWzLLcNHrgq9Htz9mY9KDYE3Bxije6e4qb7Zdpr72489jDADWK",
  "key5": "2BuGoUBMDd5YHC8cYcTCzH9rTGfEnLdkwybpzhQKMWqWDyJ5Cke9giJCJjxochbJA8aQVMrvFHi1zreuyxdH4Xzm",
  "key6": "2F7pCEgqqHxi25A5nY55zQWsJ5XD7UcCdhEWwsXgezXHCv4ucerz52rZSKTv5mFdwiYN8eMZ4aSj7vBqE5JBPGtf",
  "key7": "56E5D1bgRiZJ4qMxoDQCC9X8jZwGx5X15uPBzTotUm6DcCiuhBmzcxvNjSUZyviV5K7eXENoLZw9pfCnCzyv9vG5",
  "key8": "KJDTmtzmcurTCnWom89oU3iJD1RneDJU3bvf3H45qUQK6saXeoyV3pPuJXuvji1irgArhHbcWoLe3dQKFTqrwYc",
  "key9": "3j2raqVztuvK3yXPgo8AaXYyzavCicnyur481qE8RqtxtNpD3SNR9JfL42JtjK2A4TrWMNamrmDQPf5rTmsCcF2L",
  "key10": "3eQX7jCPVSCwAXQFba5cPrh1u2udxwJGQbJxRB3dKqJjHNTmSdxp3tqCzjAckVvVbGERaxYSPrGdDpoHNvp3MUQU",
  "key11": "d9vbaW1Ew5DohX3vzekhe61FzEwXiZ2D7CFHyPKjHTtTv6fJDAU641YpYoF1BcDoZPLrp7XFZMGwwsCaomtBRd4",
  "key12": "UZ4KfgPER8r6A8ZkmV3HjsC5Hd6e1HhVqJE2Vcid4w453N5cf72MvSrb5iknmWUFrNSCYJzrxfdagGfD4nGcE6w",
  "key13": "61iXipBMBka6BdZRD5JQ4tfHaNqE6wz4A74skost14tHNbej2HucakiMGmzYJgohYusT9qWXor2iFNtQvizzK9nu",
  "key14": "46VcHYhpQMdMphBJirbqJvgnzAyXkWusyBKCJ6pukd2nst5L4pYqu7ProT7jEtLQeeWwMkoVJrz4z8iZkR5kKuWD",
  "key15": "4Se3D4o2o6gCh62G1P443SBwFfKQ81WpDVqcU6RMM3RczU7GpjQkzuidh6mvk4otCnDcfEHfaWhruDg7HVP6j9J2",
  "key16": "3Y8xVTknhpFZ6h5HExscLN3BUJjBy1PwXaSictgBSWtX9t3Xvw5q3PnHCZVy7LDUdAta8mLfcYJATzk5tyr8n4mp",
  "key17": "5M4zs4BTvmaexneo4rCa1wfCfmhhTNNgYMFNNXEfmWH17avE1qHo4Ffr7tk3XTiTGNeciEzUUtbFN1cfQvpwqcZT",
  "key18": "39ecAdqE65TeLZt2HjPVgwNNZnRWtaZFfMJD1o5UXHNTd7M2cz5GBboFzu63PwZUgggGcLquzvfyhMrE86RJSy1t",
  "key19": "2GeJebSvrc7NvZLKqrvVuZQ4Jypbd1HBF2PyYHkAW41yLJa4qH9fmMyh2UwqCxcVdrBVkznCvK29JFnJyvmgWRj3",
  "key20": "2oBAUQmxBn2SNbxpJ32qoXajTwDWWSfLQwGhb3YGY4j9b2Kxp99E2BKeWMHaEQFsXvYuzVU1cSwWwGJo3kgDXx1d",
  "key21": "3yYeWxmgDwqCNRYfXBatGQvV4Gu9EB1b4DfSs3dAReFnubAixWBnGMwuNY3yZF8sbhSoAnDmVUPKXDh57t5BBnpn",
  "key22": "Hhx4CHXQ5Lw6Ecajkyh57Qwi4jTL8mZWZNhpGBJnAEkLT67mCEhXYRa94uFNAN5na7uxmapn9MifvnxNx6tcBRX",
  "key23": "QqFDkKof8ZVRk32ACMTzDgjS3RrAQkMz1173ZAKrJDcfD3PrFDpsB7PtsaxcBTgL2DngySLCKbQibUfJjMGwmez",
  "key24": "kTorahSmVoLzB4dNwYQ7z1hDsWwHjqGoWi8cXqjZatmhehnC7jtgYKXa2Ry3qR7K1oVH6rtrx1PgSrzye4yyUhL",
  "key25": "5dR9kxWgjBXK4P9itAMdeGsQ9NtxMZ64yjD35Qu8PK3vnzvkjDviDR3eeesSvwvTVNNqP8tNyXH91X5c41beNuCB",
  "key26": "27Fmo2q3jsy9nbaPTw8T8DGMSF2PYBs2TRdoUXVhHkfSZ48Vf59iy447VE45pohh95CGLT1xUGv4oJGEmbRcx9kG",
  "key27": "pEXCLi4oXowcGzYqZsVYqvR87eYtABmvZipwtKBZemJjZYaV2gPJDB7ZnoFi2HguzgpPoA6xbAfUpGo4Wtvappb",
  "key28": "5nrApq9Dvkx5jiZY8FuH4pYuF88NfsLuwubFnE1rdakk9yrR7Q4DGSWBKN5NsXcpQiK7kmkkjvsQfHehrdA2MWBo",
  "key29": "KcZ1ZZvFmX8q7c7U7fQQo515ruQmKfL8u6DkwCPtXfd9hNXpaVySgu72VrFfjbiBQ5VbYDHKiG4yMY2bGeW3Wf9",
  "key30": "59YmFdYegwnZphFQgv5PdjyHuC4qEw69n7L8BA96dfLV8yuDD4z4SW2dVk83kJGXswJTQTfsQ7EywGSPPNGh7voT",
  "key31": "jTK9Nne9Y1XRD27iY8TG9Z7j7Q87P3BRuAamuupvw59jHvZvBFL29daCtKDXKaWYuEfu66hrBh6wjiAKXkBJQt4",
  "key32": "4xySZHWfaKog4W3eZpU2SqxqJjYdJKoTA1X1LxYG67XQZDhBYwudKn6vFHEUXhq4HjZ4hjxsu2QhCWB1xHEYhbW",
  "key33": "jRBzTnZ2rfAvz1rjbRZcft46NYXjrweHqB42RhkQhbJDQYWM7T8ZHr5rEqesPgREhZudVWTt1EuRF9rfMTsEpuK",
  "key34": "4hwa84Yk7VK7sETS97BYxudZ2oG52vHPu2Ynf99LNGDC64NuGNLmEt7AJTiHLTZXUHCPukf8DjNAHt4g9sq8pzv6",
  "key35": "5DPWhqFTN7z4yBsgzZsMKxzV1AGXB1DMAyxPJz5dxXZMTubtpkdUpeQ4XwEqKqbqtxtrCwffSVQzHHNMd4X3i7gz"
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
