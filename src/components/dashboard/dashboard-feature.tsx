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
    "4LpKJzzr8n8tL1gxF1bEG7Du95KrL7dw7gj8UL4TCaQyTtfrFJRdz9BwaCcYJsciGnd3PDQAsjB1FCy9DdfZHcLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mckdTpeY4VXY9E1Dxstw6D4ZFYZqApvs4amDJa21Ui9kLv4eMDmwsXUjk4oiNEzBzNXkzE8gAnceoyLtyfx1uDN",
  "key1": "ubzD25bP2eHijmSfyGub4Ee9C9ZsWwvW3HYvaKwqeC8qzKi4C2Xu6oiDKvY3dCZJBHmfuHHgYdAN8ycEKBRxcsK",
  "key2": "4Ymwp28p64mbvWhmRi1N9chCnLK2GQu3APCR6tpyTRDC8Hh5KbK6D1RocuUMyAPrYcE7mYrd9FNd8NVXrDya9DCb",
  "key3": "4sGgRL9XrFHiAkCA6r4sC6TYXQJAGFPsjjwLx7jGiiEzP8WyF2CoDrczijkYwbeJ7zaLzVXamzM9qgRkmMcFmweC",
  "key4": "H7mqi27P144GMdgJyGjywtr3q6AssG5XqkFaizM8iLJCpnBJtXuf8H6Jxi7Sy9eTbxa3GCkHcSL1mPpuaxgPpjS",
  "key5": "4mvjSQMGePhqER9fhdMfesYSTqQ9xJFp1pf6m2nHQ69xvabUojo2RUhefeoAN6y3YzUnttCzE6NZeMmGQS3MYPjN",
  "key6": "uthWX39BkAKHWoUKXrwnp2rULGr2839TWeVrbUnxZPPKC3FqQmJWRn2txbGMC2P4QZ7hKkv66MTeFT42rKeHLTx",
  "key7": "4Q9gbyLah5iFzofjMiiHiVNvFDoZQw8Ta2hhZiyjePiBWAvdKhxmXmQiMFFHEL9HRysKqZ1ycJWeMT5mNnnfGPK6",
  "key8": "4ttnQLgsdHhjXVWxEcoob4Mt8yvMbVaGH5KJFTkZaEsyvbS513FDFkL2Wo7fwBStCmo64R4ebFpNHftGxSVURTfq",
  "key9": "GyGiZE6ezAi5vLaPxUTsw3awhVDUtsfbpYeYmSxQyWCRN7Pp5KxybK7LTyxaamwW9vUEyD634B63HHzhgHSFwYo",
  "key10": "3HAG9xWvBRMdeJnCsngqLuoV1hmVo4WK8RR848a8RJjYc1P4q4DnWwQtskpAE6XkWVXhATV9HXxrjjU7ub3uzqdt",
  "key11": "5LYWgbS8mq9Jk14zW41psBukmkpZ9gCABgwbPC2XPUXc5YxNu6jLXRy7CYzcuPvvnLA81EDrr6S7x3HWYPLCyrob",
  "key12": "kJoAVfKzK1B49YMg4a2S5bYbonjkCuZTww4HMTDv9jBv5WP1mHRiR56chrvaNxd1dTwj9FqCceQGGcpaLccs7i3",
  "key13": "55ufQYRxARxFSJyL88YfYrwbx29X5W5Lyk1vfphah1T3E776uy25PBNizRWFW56qizQ4Dq51Lf33GJUC8LSPzxRV",
  "key14": "3JoXfxs8rxGhoitwJz92CUSDfoSDKK7GNLdmRQyDhDdR2YfGSuDTCnGJDTmzJpiwSBHmyCUNu97QUAg5Gg12gyU3",
  "key15": "2yMQY1MjW5BfutK4QKy8osYrdxzFigaoHMtErgTHR6uHKT2bEHEqz7Vd7KAjinqUH6YdiLcu69TmLtU9JP2w2JwJ",
  "key16": "LiAH8LWQhjaLogHu65H4WAivC2xn6wDoFfjcboALpyWwgaJgafFmtSLf7PkA7jp4AGegbNAJEu7xacD9kjTNAdU",
  "key17": "1AzYe2jNTJSkncWg81TSg7btviZ7igj3vEtEdb98ZJsSuQo5BPjG8urGgVsuUdrPoLtnYAUALnnRZofShHbzcJd",
  "key18": "312f7gV8urfBzBVWkCni8TKtRbZpcYz1oHrCWapj4XdK4CT3wW6TWKRm15CwswAsTQkk1Yy1T3GAfX6n2uSfsoU4",
  "key19": "MRLjVKsfsbZYzrzo9wNeGZBTqqMKDmup5pswaMJagxU3vqcmWuW4WGAUKCXuyky4otq4hiWCNkFrchUU5WXH5kx",
  "key20": "atoTitcibVZAkUCm9C9DiaQpSxNo4kS9SmDNNc3bU8qHXECf3EqrFhrfdvLB7jYczwgpQeg4XULar9uVWQZByzs",
  "key21": "3U16BCEi8pdXkmqd5YsdvxUEd9KhhCXLNnjYtf75UakEJmt4vnYbFJNin3cVkTjNM8e4SX95DKZWTDe6NTP9H7AY",
  "key22": "4oTPu6LgwY1Hf9ZziPwdFhZ1EWMHy9XZuWJZpTm9QWyhmmdTcuwjcr9kUh6p2t4QXoUG4BGefZ5nUjG4nNmzhpkF",
  "key23": "3LAkSsd3GcDHHvUJqoKhkPeeTxxJtD7YKkuiVQWpMHufXyq1BbYsCNaCpLHhhwekzUiJhjdztLMKWKCp4J6qyTF5",
  "key24": "HmvvnP8sc8QnzJ1uj5X2YEBh8bzNvEfcTQoiDfGeuDkCghq82PQKdRsgrhYxbZmiyxuggPUbodPUQUGgno6gNPY",
  "key25": "5Ynh1m3wyFQHazHe6b1S1sVc3YYYUgjZN2piX36F8nZg3hdQMa3zH9nqs9iPaZskwRX4mPgtKjPPRVB3gMsPVqkk",
  "key26": "2VyJSusczUwNm4ntpijgCdCLoNA9j5q7gM4tewSK1vktgmYNTzVG7EXqJkXJHosDhyJfMVw19NNh1wFGMzpRCN3P",
  "key27": "62GsAsmhesQw3pJTQ58yqdonbUPULqFWY4HCUs1zcZLsGZHXDNipxB4p36ssM7K5at8DzQPfkd5o8s58uqxc7MSf",
  "key28": "3meVigW1w1YHxW4zKxxUTW9gxvzf6GYmHKeVkqmJp9JZ9YmK6D6WT5Gh4TDVDDqh75WTxoDvXtrLPTeK3dmgaiPi",
  "key29": "zpcma2Y6pZoQJhc5jbjPspEwfMxNrK9ZMJVUKtRdGQC1NA3wJQG1HhzgjomVcVH99fp71z35ZCpAzPBU788rwEo",
  "key30": "4HF6Nzv1pKF8cEwzzWNx79mca7Hy6Ke8AKF5Ep6fHc5ws5menuYwBWf8CAV9E5wNQt3iDFZZK5f7coCFn56ZQAJW",
  "key31": "5DLr4M7sbHqGyb4PKcjH63WdTGfmM9GM6sQsKqRBE3Gkw9PVyevT3EEHdA2hVb7uVaoMGHRMwswrQYZQaWDJtPwD",
  "key32": "4RwiXxpp8TLaxbd53TeJ2HCQECr9B6kCgEHJH4GgfJavH8aTdhAyN6hNdZm7P9c11ohGmkuugB6LJPMKf1k86uJG",
  "key33": "64ZutwgHnjcW7FFvthu5nKAUykyW13zkQu5L77QH6KfQGrg2KBPjWTv9vkci2NRdsYte2nusVjrFU7JHCjS1PKPg",
  "key34": "uyot9fitGMVs1pr7cazzKrJS5yQMCnzYmXVnii4bBX4WS8yHmcJHbSY1NCi8Fxh2EUpU9QWZrJcaoLDdsZTDebb",
  "key35": "4TYXuox1qTT9JYVzp65Uz3bSFJNvbZthVLpAS5a4PRrvND1ZozhkT66EMSeeYF24v2ogpKaELpKQdNcGnc8e1c6e",
  "key36": "3BQ48aJxGXbyn6E7LHBadtSRgxheEhkxojieGL479NAHz3DgiL1j4JeQDzRT8jW3WwuJwLnH3aNK1oVYTB7ipqMB"
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
