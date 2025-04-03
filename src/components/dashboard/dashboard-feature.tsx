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
    "3qRvivoHeD8Fsvsk4BidCvKUk4ERREfzou3KKg5LRpA6Uf2TqSMcZZJp73yvrZ9be5TSvfHqMvfbm2nUoQzDBNGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTwavFKBqyjn4X9mTtjqqTGmfF3mwqEUCAhwcsFPjrXa3HQmhaUb5bb2WHGpdWY6rXusNv2H4HQzZEvevimv39K",
  "key1": "23rwjEKERAmXeN1TE42uGqwipZjHcS7nxSooX6ES4tfTdrYKeKEPf4uLdKdqUHyjr4QnKBnLA78ipq1EbmxngSfR",
  "key2": "JryWKvURm1RCE5jdbGPNihgTmDKuaWsHtKdE5P8LrDB3rKoU6kodm5qzzGBAfDDFkGoGYcTXhCfEjuLEagqgWp1",
  "key3": "4PHu7fe5Gtz7kTE5LAjp6vNACWqWvzziTzuTUHB1n38XCzCETVv6wANoCcGpG5f9ww1HMnHJnhToxJUJChCM1K8r",
  "key4": "3Wws4duUgVVjy7SHjiEforSZBYDPugXCcQ6f5ow6aRKxEb4Bt4XZh9jgcVd3mgvy2cddMCzMtfaRNbqM43XbGcd9",
  "key5": "5vC8mXa11d8eBvV7DQ31tNK6SXgvkUzGRBBB2J5FWW5rnZtYJu14j5yaKpYgCDYqRQFLZbV1aWoXWBRYZiBevDiN",
  "key6": "3KYFux71g1qYXsbpCizGnFvh5fPivQSX5XKrmjFNRFdpMwWHUKcpevYB42qYwnwgfyXthycQceC3YVmqEeHoH5zp",
  "key7": "2gPtMomMRmAUdPXZjhz4YAeWBwuyi9FmFzCTmVUdptm1GLz3ZKuuE3vGYyzMHMH69DeWmx4scGiL9uPScGpfZjvt",
  "key8": "28YbtbMeD8usy3SaFpV8VVBDt2TcGosCzVX7SkF87ouJJW6J5xx1wcYQEUAFYLJwW2HgTGxUtvQAi5odSjjCojxP",
  "key9": "2CoEtU74iTWZbTdVuCT85vNeecd9jTDAVNDFM7utzvmweCsN1CdWLEKmuV3XeoZCzUf6bREY7g4jyoMXjAMFdNgK",
  "key10": "5uMzo5DJYqgkfXqb6StmfSjVceq6b6K5h14yJ6UZmq6mCktza8PdKW7vQPqhsysJvr4DpYeDQnduQAwoG8tMsT8x",
  "key11": "TKUPKCqWp6KZgrVBtF8yqBqtBdPySUJaTw8SxE7ztx4kypcLMsP7vAPRs6WD87eXFQ7fRRWYzVFZJcZnGVfrX4v",
  "key12": "3zSPeVx51Aj2CkH5be65K276q54RMJz53xBApnEE3QEt7tz8rrG9vYMQwSdjJ2frogK6XE15u57Kyq62PU7qDmUu",
  "key13": "5vLUYmpHmacSbvoEzHpeLhXggB3Hp3QZqn4K8kYLoAExKmVdz867BJggWTaQw1yxZ5puU6VgYasSUQCqSHD3AU3K",
  "key14": "63zBzxrPUzbSE9pB4EWeghSeKp79ZFMgaF1XYF5tg6jYwuaiZCv46nWgX4ZxvrNKCTs3RYpn7z1ezob4QmJFAJWn",
  "key15": "52Fjm8grkWf5CTwY6JYy3mWUFh4EpPECSyrjf1jmCcsaziC6f3xkjCZfmDvvHTBhEnZwTnMfLh9PykukuVsyYRqv",
  "key16": "2dbSmuffMmsUkBe6yViGkaTzAs8xh8Qqy3TbHwwi1AhcCmVftjXW8YUh8NLQNkHNiBeW9KD161b1Pckj2ncnbfzM",
  "key17": "4z5RuzBAb3FckTP5V7wWWc1gKo2FmWruV56RsD1nALvKaRNqYmbmsuTio6qgF9feWqBrLaBy15mS2nKkY35Ma3zX",
  "key18": "3PeopiZ4B5sKiRcQ49TkpKg4zTkpPLQptf4VZhmiBWn2WRqpiCEb36ybRTnFNaPMiBaNWLsbAXNEHLZrYmakC9Qj",
  "key19": "4xQVah9nuj3itySq4Tiej4AAk66nQWVJYyENVdku5tBoQ4WvUxCAo6zf1GfQuaRJmQUYdcSoLZWQk9d14hMojmRJ",
  "key20": "65NQZJacuDWH2YJ4beY2dwoFnAFHMAnY9Rtmzn9WJSfTA7dhccHbZm19GmFxeUARLWWcqayrvHjiX25kHnuQLyeQ",
  "key21": "of9k5qVjBwGjUCwbfqyqgzh5Jag2qf3PvAhtsvWAE3MbAktVTGe7J494kT5WYPxRAobv8PVZYZn68jSq9ep639B",
  "key22": "47NVivpz8eEFoBthCUhFeGoR3tMsyEnJm8XeFvDpsLKBt3mjyuJGkgEPFhGh7sSKec3P6SUdpb7dxsx6gBpz5Wgt",
  "key23": "5fmxbBU2Sr34KBq8jyKgeN4zNoUb4Ep6U3pcj1ceKwWtmv4FTeiZbuJ29kQYJqRvGCz2AwSBfWNp3un5bczGeND3",
  "key24": "3Di7cBowHpoaUmMc88WdTHxT1PFikhs7BMoib6VhgjqS1oVWgBLuobp6C2xjqG1Gn2dN8iY6qYy7EuMbZNcQ6Wow",
  "key25": "3teKu37nVSrAb4fo9oK2GkzwSkLXr2LME32aJipBsH8uMRb5rbVgjAz4vTm37x24Vo5rbXqkPZ1vCbV3LXfQgMq2",
  "key26": "67BX3xLajxeNSYpBTJtA8ze1zJeh9RC2M41tLBiTvvrFAj7EEosQmDXc6QJ3iHWAGmbyjhXjjsT3ZAHkn42Jnqkk",
  "key27": "4xsek9pJjKLHR5uS7QoQ1psQRpcQ3nYBQgjBS68351YXceurvKCJdsiFDGdM5D4GZ4E5PozvvH5HY7v4ZDGJ7A9A",
  "key28": "3c3hFq8JGhsAjCTN5trkc9gitWjUA9JxGsCwfr5t5iqoXFmziRkpE9ohpvH3d2A8tcn67qbUUqtapr1YtNbjhEyG",
  "key29": "2jRCH9iSaCGoKBUFqDwHAVFJXxVB6nqb89QdrTxqmkMkFvfcHTmy4GVkiGagTUE7Ys9CeA6hKq2Ep42whdCZ4FGj",
  "key30": "3V8Gp1h6bSHzLUZzXs4gTJvqeXm48ChBMqTDkJuLtqVf6hzA4YL94L42rHCeZpbYQiLP7RE4WWvRQa96tUvaUxWg",
  "key31": "cw8sFM5AndpUUxKnyP3RH4kBfm9tTxvcG3v1HPJNAkpZmpJLfScGRXkjYLk49oHdyCrABQyUHzdpEWy178mDbGs",
  "key32": "54zqKRgULZJyv2oPUxeEfNXneYGdRSPcRgp5abskmNmh5STAjtEuaWvw1tFUDe31bceM3X8HTU3ACqfwGvekuuYD",
  "key33": "4uFmhWxEBYffVpE8ttbCgcxH1xTUKvw6ghxYciMk6jk5RwBCdur2jzkafUMKqVLckxgyhkigDwkLaGXrZ3nQT1QU",
  "key34": "3RXJSgb1mHVRrJAWMeqwQzTZoqN3Sc2UhqN6ytGwpNCb1zno1g41EGp2MVSm89d2k56ecPtUmDtjMG6QJAsvM6mz",
  "key35": "53N15qCbBvsJBWUCgnxDddxj3A2JNwEw3wNJ6Ud3TU9dCGmtyTsrtxnV2UpyNmbwpJDGB84dcsDYZf8yLmyreFMj",
  "key36": "3gTc4L5sTjWgNmPfehuq8kqZqkhtBmM4HuKQgTDN5J62SoALziNoU9ZkNd81b6S8GDs4J7yXg615MzpHWpPRUhDZ",
  "key37": "39URcvfRJhfjxnD35UhpZPMgAnfwcVbEbUuPHtLxRckgtyv23tMmPk6A4u12tVSZUujafmTw4CSodUvBhRR9yNVS",
  "key38": "2JDsKzpfat8jsSvZDuTVADqeqPEceoUHHSBLrrusWXuwSaiarkUSdz3YFd6ak4fSesDhYh1oMv2Mubs2g8e1aX5Q",
  "key39": "4yv7T5oSJCi6T53rAEHH7EWBcYnBTM4e6St8neETpK9c9F9VUWvQ9YADEPWumngfSbmWj2rR2sJiz6bYjqQsUDVp",
  "key40": "2i342dvp1rQ8TtDWFm86TXVf6XWgRGgiLQUAZQpJgNqNRdVPsgvyvD5kLABC6SshZMdrU52fVG4SAbMAGjPioy9p",
  "key41": "3qu3LZv7biHenVk1M69buZopJeH14EKLULXT9zregV5fCi7pv9NTNwWe5A1LsPy1HKutejB2gRhoJrska89YxMuh"
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
