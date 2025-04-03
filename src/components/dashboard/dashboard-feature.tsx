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
    "2uMC5gKXpzCvyQ3eCJZETNA2KGbxVTxzijr9sCjqrwYxz5suK8zd7R5zeLgeGUjMVdkSwfqoCu4y8j8QEDfAxpqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4Z8XpsxabwJCtd6xVfkqYmUE94gQVnsk6GKv6occz5Dy1fHMwkYFo9wiQArudLj4iz8ZoTtHzBfx5CjPKbPkKU",
  "key1": "2T2gBx7GEjNYt4ew8gj3qaYxiEAckBoybmFCpLr3rn4AMzK7oQMxkieDNuRPoB7aNDQ4RMHKSpZMKnXUFTV8d5mo",
  "key2": "9QosQrNX8JPw1xLoMjA17cXxfxLuUmJH1UUsC9CK1phothLe8fGvVomT1JYWPpgm29i79AayiEQumDCu8jZvANt",
  "key3": "67hqdghDZDAKaaU4sG83XZcNp5T6wSLMmdBjw9QMLy9wn1DX1JUuu8vNraymvZNNVghmDFEKtaFfovq9PgdwVEcA",
  "key4": "2Tnjra8hFK4uuHd8YXxBWNN44CxNfocTKSHojS8iGPyYPYxTupezmkNpFXpsc6Gf5NU15jrJGFJhyNZma9re6szi",
  "key5": "61Q7o4XaAackQUME3nZcfjTFrnic1SmfZSgZkXtqh7JVtuPNCehJtZovvyank961oJgtJMHc6dnah5dviafVdzuX",
  "key6": "4zhJARZpbp46DgC2vJvJkJ2ZxYSYX4bfT36cXo7RZ2NRBrJb5NdutyYXoLdnpEkAAqZhEv7cw6Su9WR3q8igCeFi",
  "key7": "5jfqayjPN3ec4iaQBBsiVy9UsccNmn6aqzKFFKcGgGfmCKjptF71khGEhoygd7ivr1Yb3jqC95DdVm5p9jRqzYbX",
  "key8": "4JqoqDJrFD4o18RXUHJjXMycw4aj3fFCNw1tEUePG9p6nq4fryfaPJJhRPtaH6FCWy7AP5Dse6PmzDTkXxeKBMFr",
  "key9": "23eP3q6tpMjtgfFXtK7KbVDJeDQ2iwtS9wX3RRY9hzVFVR6Sj7x2yBjxYruzAUEHURUfdkBq94XuSbEbMFXnebo3",
  "key10": "twjvWQC3ZcX9sowxYeFu6vv5pzsLparhZRYU157SpJePqEBbFcZKskxgfiwBvNmTdbrX1gDQs9V4B2Jwmf9MjFV",
  "key11": "3nmjdqxfhdQxMGop9UEdPbSLsq5oYH3PrqZvY841ZnoEspt8kyyJSss6ttHLm2qvcy3qXcA7izYjwgpK6dQBmLni",
  "key12": "rPec9Sb4j31Fp77R7f9T7rM1XxLutAaY9eGdbCC8zhtLREYf7o4v4jgCtcqqASKpbG35X3ZBT2hnTTWcR4M3sF2",
  "key13": "5SNKsWgRFPdYYB2n5XvWKKcdAkmxaNmvBp32Vik1tZJhD4x6Kv76Ts16exAsegXVoBwyUp3U7KyLAANvdrwmKgQ4",
  "key14": "2G5RLv3BC5tMSQ4NDp6NoN8vXQUxxzX4eh2e2CRfiuDp6aNxNP1msHcaZ6vnHKt7abG366qvBq4fU55ax2h4daTd",
  "key15": "6LeZcak9cgaua6gWDE7AnYVqYBnTqKGp1WgpTFJCQVwKfttkVEk1NwFMiapc2E29fchiQKoJoUSdkvtxqh1KVdQ",
  "key16": "7VSYBZHQFSdXxcAxZJeuySHRPJ9NqjK9jEyY3Ja6zQueD4WYhdXPpJ9YjrMikFoXffJV6snqg5syQc8xQDkRdLN",
  "key17": "WbSdLUSyfM1Xi4RzwfsEfzKWMuZu2Fes2LspPALTBmrGkZXmmc1xNKmszp54a9Er8wmUJyZEvFP4YSiLPF33STJ",
  "key18": "3ciHcbDhH6axKEvBWGxtYDex3FRs8ioR4aviVkspbXwWhkYhvLta9pyhbtf5PKnYmpZMDp1y6M72YUZSNahawLEZ",
  "key19": "6M61YBR3o9vn62Z4DkRka5pSfUkio41pTaEwdSMtT7gEUuh7zb9vu5rNsQF6egTbAqiW8NMTuh84puiN4KpgWek",
  "key20": "2RnzLzE83XrhBzRZvvbbUErKCKqGFkHw7PeLFLrtUr1VSK55UyBAyVsXdUvkJNhtSdftEpmLXiZ9ctypW8LXxwZk",
  "key21": "5QUzQi4PkvqoKhykGhJdAP9Qxz4RadzRwyvhidqiKjA8j93ZfS2HMsY4Jkx2jzFbe6AkvKQyWpNsPvtY5eLHJCpF",
  "key22": "5vLKSxTF4jdt3gs2xYhLYLyNpvz66KSvNXhpnniT1PDH54LBKnHAgCB7NJWir97vFZZycHb8PvKYdJhAVksv4kyj",
  "key23": "5kDLdVYUP8xszfqxcFv3v2jnYmyCoygx252wPhhDu8bJz8rCc7gzG8z6BUEJrMJDfFYbs3MxJe28XNSkqpnyqNfD",
  "key24": "22Ug7YWUgzTgjsTfaLWR75vEriWnNA324txcvpceny7wM5dg6K3ea7HLQBG8y8hM6eV2cLXL21Se5njGZBS3dYvu",
  "key25": "GdkD4hqy17FsR8x5UbXihs8Fi6xPE9uYJ1m1VaYhJt5ZMT9XQhmDNtkJW2S2F8yQ67HLhCND4K4px5TkECx4VRs",
  "key26": "JUzLxvr3ctFtGvADX4MHzpiBR8GXctXTTSCdLebCjvmqsspMCZaDbRwEtfBN1uFatyLunVBRGyQziLbX1fS9NB1",
  "key27": "4iPngVYtEvPKLUr5hRd7cocJeyN5J1dk642rhoeziqchnycfkytZwZ7QEYTMYZoDmZVmwituyrtbSC5DG6wdEbZx",
  "key28": "kcNEFseTcwDNULPKtvBNd4qF1uSdFjUvhJiXCDjnQ8ApMk589mgx3xDqB4HsG9YyYVQQ25wt5fvfedxc7X6zMRH",
  "key29": "2ZdGh9sCfRJw28Xbi5Zw8E71CstinKxZpic6axQRyzRo9BFGMoP6XsmYWWQLGsJe8RWsyAgk1BJgHdmqz26xoG4Z",
  "key30": "35nkM6JgdN8Utzw443A6HnQgME9gEmaex4TmwyMq4aNmwGH6kBhXZ6jaocz7SVFD3QBLMaPrTL78BFYR8GBmNo9W",
  "key31": "4sPxsm2C9CX4Brh28Fb1bdk3yq7Bi7VDKNCr1tQbv6nEiAkw6V4c3RM4kkS5B5WwhEfpTz9FHnDXvk6dSv4enfAw",
  "key32": "5FX3oX4P64jvMvamQ9Ae3A1YocRXewD7AX3fZn1RJTyt4s9shaL7gGdjCA5hscCwhvHuRWoejFCDA7s4DwXNnkh1",
  "key33": "3NBH6GKpansRrVY4Z6ZuVxbHU7RUGMGeyw57zxXw7EZx8TH4JaNekmjdaZmydmU1L2MSaKD3SYrQsm6vSPzkp7s7"
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
