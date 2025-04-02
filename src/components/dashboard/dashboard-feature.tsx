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
    "59oUN7gi6fr4GhUse5nT3z1C42gPggQSXhJ3Z5m8kBATYrBRY8GD4R5ohyd7kEtbx4hFa4j15VY7yL6eZzBomHiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9CsRVXwZzVaQ1JgjnYzFibKB4dASPGCEFWLW9xR3ERTRuzs741Cc9JCVyRbbdATXsakn8wD6VjAwa6YFYR8KRw",
  "key1": "5LVRLh2h3XUDsZHxUy9V698grmtLbLBALV1ygT4NGNeT61jk1e3kw6gEvVz6vH3f62LVXn1PFLXcLNrZ8aqwR4X8",
  "key2": "3coLTHDmetoUy82TVdky44pj9HoNZTZKjo87XWTsop68h8he2dv8wCo2gC8gdULx6n2Xonyy2egtWkWk4Yr5GHJ7",
  "key3": "4Kq5PshmNu8v2s4LVE1B3qD6n34BYoThSpVct5SNNwhBy2C9yFddXZFBxRZcisvp6DtTkGmJPqpwP3f9EbgycHGU",
  "key4": "5SyLZECbTDU2ufizk3wubTuXhLi7FxPxPyXGdKxZJ3QL7FJEa6ncFKtHFDd4Q2Re5wxKxL5tbTwb4jBw1EEAJo8S",
  "key5": "4YBfQamddr8NVpUfxM9aTxtF8J8wzLggUPUJvVptScHuLd24eFvRFacSKpexdA55p9FppZN4rqLQayJrwJbUZfbp",
  "key6": "3N9FGwpJSitpqGpNHMjj4rAQc8f8p8uYetN8bcH8cwoiWGUXASjnwPhFwfnnH7xx3GuDQhXMYcPPdD9BWwg7pmA7",
  "key7": "4HLEB55oaLC5E3vgFmVFctHt1yrit7d9vsR7MTGExzSgPph2mrsP3aMtuGVha4eoxkXG92G5xymyhQfa6ABQdy4A",
  "key8": "5sUQkxkfbjsKGuJUXxrbwwdMFvZR3SfUrnuDKeSVf5br5ijaE1HPy73wfuzfhrqYfUSQhG8nAMvHpcgKV1tXwKXC",
  "key9": "3FVF3i4pFY6xGcTLwC1wTeYRwuyoA9h5fEerY5jtYBRtSzEnVvEcZf35JcVBfgSvVH58SVXdhiDL3MRqL2fZ5UTX",
  "key10": "4rtRqn3SgvZonvae96GcXeKP2gPpveYRHcQxmkPvcF9sacwVzFiBEUWfvU4TVb9pEuEkM13cKf5bszDqSv9YitNZ",
  "key11": "4Q2MJyi1DUwJDR7a58SoCpVCkYbyDLpfaaDprDD4qNPFBKMDcnbkFyeMC4wAnY1EFR6zRrYDMmQ3cmKWcHMfLwZ1",
  "key12": "2dcDxEY1XD46LrvNGUcJBuzzzSr2dUHh1BZ19PqvL8NSpv1TJ73SZ3Ng2TxR87PHEVvU1Y5YV2iSv67Jx8YdMAu2",
  "key13": "3YLh8NxY6bgGojRY2MKpvAE2SKKMLb2p347TBegNkDyKPBrSDdLEN81vhmz6MbRqkV7G3xKHbcCpmWMbCT1s8Ehv",
  "key14": "88poKkMoTJwGY4RBzwYubkEVKR7SkBR3sKPSVFvKzSisiF244hHTzR397eHA2h7idmtUyjtzLSNMFQt45gXav8j",
  "key15": "tu8RhuwWQ4mHMgoGPRKCzPmT4swQDubpyYQFqxQJsEymxQPKWmXL6uX7xpc6NQLXB6xrs74vN8bPng1ma8vUKiS",
  "key16": "4kPmv7CsrgkxMnKVF73yBysbYC1QurwMF4wvrKB5NTUQH9DPhv1peiQ1YvkpDUfymBP7GuN4S6hrwdTKCA9Uosd5",
  "key17": "51GGgQpbMPiAiHDS6dPtppP3X145XGWDNpZd8Y8h729795WtgoJT3FgX9w2qKCicHmupzcRnYZXwiKPyWmFo6dRP",
  "key18": "2MfP8KjNBFb3me3THAuqQ6rotLwpgTS6rfvSr6MEVKP2a8a7ZvxprdJk9Vr9KXtCajG84T1u7inZjDJt3mT6gtyT",
  "key19": "3zQtnZJ4zaUoTgSSX5VnCgFcrQHtiKob5zbqZ3JTqFRwSj5E6k7mjVYWVKvVE2UFzj9Kip8Ry83BBsQ54zR12NpX",
  "key20": "J4xrp81u2eKbVBEA6cw3qwUVvbxVbvdgu9RZMZxBNNK6AmpXoPC3pTj7iuX4xtwgUHfQSFDccV47EhKQZxS8HVR",
  "key21": "3Vj5F17YtrE6Pfp3eJZMuewYVT8dX9DQXEhZTygvvb8R1rnn9DTSWwkrDMCi24PsaGpZMECt1raGYrqGBYwT6wUw",
  "key22": "cFBrD9pM9CSxTkJKjzmmX1XUxzNKhviLotPyD11mkX2cgAYNSq8mgdhfyiDh4Z7Y9TgBAL19a28r2LRMKjEuWnd",
  "key23": "2BkA9q4A68K8wHsSoa9xLi7kjm69Q8865umUcvpgUsekyxwXxZTr5RHhmXtoq21itwC88iZGjYnf8PewWDvDajFW",
  "key24": "j1YQa6UmaMUvt6vhCQiMBDqheJueXyFzLkHhRGKWbefcFWBHgXLWusiPRBo3HeakmE1Y2XSP6MCB3Ka6FmC6qvt",
  "key25": "Rw5bQJKQSEXWiFN3yEjUZAoXLEBQnwcmfeSRkiyC3vUa19zZrfbkqE7Jv5iUG8WDkrph4pg12n1tyVpx5H4Ed6x",
  "key26": "43fJAHD5r4NpHhqqGavAX2FN9Qp3ix7Fe839vyiZ11RXgJwQboNPvbzYi2h1aqYWxpvV52vsDYnj3rvYDu2FKBqo",
  "key27": "5Kf5syeWBLHAMDH11qgeebZYPeLiKELcU64nUBRt47eRj6K25fVoawNms2PF8FTTq9P8KjNVDiHPQH6JZoe19pnG",
  "key28": "C2wvByN2jkGYdmsFJx9gMtQhRXpwAU8oorRxF5qFX7JhZ39uuTAfpqPbvW5DT4dvu3L9U2GYcN2GNmSFKyoCuuF",
  "key29": "3P3ZrXDfPWzZSuSyAwYxDkkZ5r2E3KD8MKzj2jEmJ2SZhe145Z2tTtGWrY11NXESL3t2UUYz6XLnsrUYi2qXZ4FY",
  "key30": "2hp4YRDufXp9PPYzF3axA6vWXpCe6TBusXF3E2URFJHS572K2QTLb7AVNP8d92ENQCNQ1JmzVtvmuhGbvUEspf7c",
  "key31": "5G9RBfig5y2ogKwXLm2KnrvXt8Qw9vnv1WQke4Fmi3tL74dzq5MggyPBhSLMyanQ3kr1QUUqJKE5cv41WCNJQ5H3",
  "key32": "5NBeuTZdnkWXVg8ED91Gdxvov6xqdVXH9zt1AuZm9Fq3Vtgx6R3eyShaL9jtVYtYWy7tpRNyw4JaYCbkSxp6nDrN",
  "key33": "nJVNjDkuMREn7d4pe4BAS538vAxPop7nVnppN7ad2a3HWQsQfampda5rWzFdz8CkKGWETAPcppWRDGhnaqU4FkT",
  "key34": "67oHPjC2BjdG2yxmQfRzyNThx9Gt5Zc1WHjq1vdphL3NTrzZV3HWhNkTis5vXrQeDAemu1BdGXZUZwTHuK54MJkC",
  "key35": "BNUksjnRW2kE6381bdU8fLC6jRoNPYwPQSzuqKnNdkugA5t84f5bVL17kkoky2RxAn1MQczqfGmWLi5YgTXwNZu"
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
