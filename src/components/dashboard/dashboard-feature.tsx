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
    "YDjavwHKZPWQMg3SR1DDBiupSB7UmdEjXihDHrcr79qcTGtEQdZoZbYUbY4gm1uFgirQYwUhiTXdKUJA11xh4A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3kuRxJmzYy9WEsSGChvxCvAASDVZq5fKdL9BJUJfvx6nRaCAixjzyZEW5F7bksxEr5neG4KR5MYPpcpz78ezja",
  "key1": "3eikq51JQPnmeLJroGoDkSye8qjmJF8wGQ1UvNsku3g1LAS2PSVb6wdCMF3pP4tPs2eoRobRtQW6XFzcXc1sVfrz",
  "key2": "5ukRST36VGcYJRDBZiSV8sBwDqvdp5eaGggmVc8T9jb5c2kvxTtoZVSvSpaLkBdksfSmo1NyUyqS36DCMj5GJKKU",
  "key3": "3CgaMQs3xRFx8c9pp4NGEvV3XsbocaP67pwSvqNednjtavmHENzGJWLCiteG4jMyMAx1zb1zDNz7KgfiWVt3UG2",
  "key4": "2EEgvjrdNBFzni1iQawvcJJ2FKYnsoLDC7M7iv4c5hLmqTX1kMLZaMZjx5nhwtJgMH23Jkdd6cuRB1wudrxGxMRN",
  "key5": "37U1iVhyK2qpgffsEhZbC1sCEUnv6FkdBxEjayoYdV8tWsxmhuhMR68TGNSDpmyqVqA9faMQcbqt1Z8PgAwUhMy5",
  "key6": "nCdKmQgFr5xn5mHhVnudxYS4aBPYv7KTpXBA1iMEkFBJQ9zBzmMpxAEAEzd5Mh4xDX9b2aWBLz1AuokCgf9Tq2a",
  "key7": "RMbR89uzYBuNJT6rvpAvtyCYUc9swSb8hcXFhmH2ALtjzxU3TFwCDJk2JHtExHj4NgdCSuHHfDRqbTh65ogurbK",
  "key8": "5wT8ZHuMyRYH5vYfbpvbmCx5Ms3hPWFj9N6ADygH3eP9JLW562tMxKrHkuJp8dRMHC4U8mSxaqpTDrrrVtmAwy4b",
  "key9": "4aSQhgXWd2L3Bkgkgn776UCiNVNLYhPzzhBM6nDeWMZvQJhSMEfyTo58ixyFZUjUvfuXvMNtnoiYwL2GCFHQ2JA7",
  "key10": "3KCDdcmMd5F5AFC98vHBY77EMCX9SqVY6xVrDhVNRSVBAhePfb9J2pi6vP9BonjSBk7K8iauKmQC1pFDUjkZQ3fv",
  "key11": "2eP1nLeks9hc6ipGnzZSc2bqZU4MzRV4ZzexgED1AG74tCuwZmqktNzDkcMvbFWpuUrj5vUgGsAEGusCNVgp4msU",
  "key12": "3FJ4VT9NxbTtCswsEcB8XAzhFCb3ZLtEC9gLapj8WbCfaxBmbjcF7wfqG2KVu6D93YZpa14dq4E8VajcqdCa5o8P",
  "key13": "4d6BkDdBzHTR5C6Jf7gZQATDF1jNRWkaQwuZTM8YMLpNzKZuwrxxMyujRc4HBrCecRspy9KYVy4PTQagQbk11fNn",
  "key14": "2H5Xt9YyfNDr6LM2sL3XWKm5K4Vr55jcernuQ1G8j3Mi7X4tnaQDApAgCnSQf6no2jn1FJKoST7pMGabkg4UcSmK",
  "key15": "3Qpr3ZJRNNk8K3qB8HAu2tJckz7jhNaHV9EDNXgzq3kLckKoAPt2kSPdWeJaVGB1gegDjmzcgwidPAqdxYRQ6FDM",
  "key16": "5o6qt5UBZ6Ju3G3KnBdSMd4NfAV4zD9xtCgXGixdS8yhMYsNHhNrtUg8xPS6vwj69kewtfh4d7rGotHSKc8NGx43",
  "key17": "2TuQsNymFnphehqe5enJrMdbYXETvttccbVwjRiUnYyomzLrMf9wxGq8oNsEDFYV7vbq1fXTFx8iZ8GNK4PtNnmP",
  "key18": "carrswhhq262CHY6FQqw1iJaWf4tiJsD7m2W6uab2bxSavTyss442q9ygVWhoNkCQC4aPzGHHqME45AniyuEtoq",
  "key19": "5VktfWB3H5Ey6zFvfUeNhMje4F2f4QNQrPE1caFwUJEJHyB9mfnSZvzKjSnr7eTKkmeLmrT3FYioPDB2yZRePWa8",
  "key20": "4vFAfDQLeUpgKwPRHgNDJZi6LWokC8Fa5ucwR1uMDfWnp9XHFjyQRUFxo3r116TGjqzUbwGnvxu6fTQsbvgtsPov",
  "key21": "4ubtobsVLD6hpdFHp1i1N4UMLKXU6YxHCNumqHps7j11cQBtVvL7t7AUNAyx7eYyMmPVM9YVp9ZbgcRpsdeXTW3R",
  "key22": "2K8JZx5USZx5MgC6jtGXyBdT9tqhESQvHH2jRwpRxmzcgrP9g9H14j7RkbqJ4q6gWQVWV61k5uheeKL9Fa5dKXTg",
  "key23": "rMij9DYjSJkMqZE46xERFnXReSySzt9FSu6U7Y7qFdPbpYRWV5cB3FRdGCt4GXnT3Gh8M5NYSN7KHcRLmmfsCiG",
  "key24": "65Qi7ahVGZwZq8E7Twqdm3kBVhH7UVSm2tMRwkR2Mfa3HpxdF8Wkb88TA7aAgnJj3yv5mJeJdDtpgeyS25y2o8ua",
  "key25": "4tfLjcwEh7LnTkdUixfZfUK1qQCHX83eKZ7EQV7sYnAWJ4dPoDAWefkKH6dWyApFPPpbZUFXUiE7aUzGKxWVpUdV",
  "key26": "2ztUWjG7wBPPjXE1z2osK8h7aUn8ibdUedy179crvwxAyGrFso9GY1h3gh3Bx4DseaNLZhrMTTdRjSqTKahsTc1H",
  "key27": "3xwxPjMdG9oaMVGSzpPiBmqsQE3AtTvZFgFWRqt2Q9DWoAPCvAc38BQyeob24nDnKmbKmU1vZ9UNJKDKHc8Memow",
  "key28": "2g2qNSAerSAcEfMqswwzJtaW1S2Dup9EoF35xyBA3ieNs81FvgncXkqKfuHdHW5moRtGZAnDXaxKjjENaDJynbQ9",
  "key29": "2VqWe6QzD6UVu4fvFj3cS64F95xkztWjH3nQuf7MQXkRsm1GfCYePJnA1rqavt9qc8zSYP2VScsTjSWmqHmSA4jr",
  "key30": "2F2twSkwYvpFJUcso24NF4GqT9ZNB4eun36pcNQzVPLnHaqXwWVhCWfrq32GRpwwXCwg5Ttv3dBMDVLYCsYBB2JE",
  "key31": "1EVgTL4L5jrSUcFMoSTUnsLWtdukPvifZH5bagmDgViTVG9n9tSm7R4V7pw7AruPRpntf6QaQdRH3KcQmbH6LgV",
  "key32": "5AVHEm719jhBMLbNaBG7LrjzwtGGNjYg9jmQFbubECtpKLLZrxJFLUPGA966xV4yR4nrrDiiaajsbcyMbKcfmZkH",
  "key33": "53RcKgvPLMQTMrs8pcivEvG9XJT389Zfz8uDHha22GwkQDPAqTqFGbXSbZfAueBPY4zCHC2aohX2RrXWPaMGF5mU",
  "key34": "58bQn1ZBguB8W8XAnjk1HGe1FQmENnnVPKECBshGhdZspmgGC16ucFMzTkWKoeA9kJS6BJZ4BEfPzsuqJcXMuUyu",
  "key35": "4W1H7x6R2mre2FFn4EC9FmhP3mSvakjrubthbqX2fdbFSbr9ZytqvqkyU41q5kS7jgmZDc65CJMdF7MLjHnWNiWx",
  "key36": "5taQNH7P3pbUzH3gV8BHM899oQoR1VACCiCiKqQpWW3FLqHBo7m4tv9wbGKTd267dSRKvpuDEprnmAqaBDgTcR98",
  "key37": "s2X7D18SDYA7XTTiFnKbghQViQ6tAW39znvxMCKHfe6F9Wc7dwu9aZ56HsM7KyQLHjJxFVoNEueFZht2B2AzcDi",
  "key38": "4MHbvnZQ9C9knmuxY4kEKoqJNJ8m89TRrMkQ3ubdy2TWaNCHP4jtJrr5PLPwJBQWD7ikYBsF2afpJuSNhqqgfQ9e",
  "key39": "DLohj2nqB1d8ZxL1jb1sn92xifeCcgFW5CU4DsvW98fX2rp6GwLETzdoLQ5MSuB4pGVZGTo3WutxN6so2AsZSwp"
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
