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
    "4raCiNNL3qHdCG7mtpQPUvz5nE4w5WMk8dK64HyBzsFAkrXQL8NnsdkfUMNd1ddWWvb3H5zphrWjqUWtdB9dCEuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBoa9tNRbCb75RPPESGK98BnNx8rTWnW2n8KXgsC2FCbe5Jhz3jUuLMeGGrZ4QM7hkgg5wzVXos9ZFtRAjKdZn8",
  "key1": "2BR6j24YJsJYbTsPxkK6fH6SfCw9122jGGujbHBkRc6EJVgw7SPhwLPwY1RUjDguwXBhDyDNcDqWLhEPXahUyb6S",
  "key2": "4ntNjxzjSxaAt1rpEA7ZDe6YfsbfX2qo3xsvRgcMHP1qMZYrtkAQnvnAAVYmk17fmTqfhZQeG6Li5FEdm3ifE6aq",
  "key3": "4YmbUB7VCsnvqYwhb2szgxc6QANtHxLN6QTi4X9umUSbdeBcNYCNjzvHpyRM6i65rjxnnCFmAp5UaXxU8ek19Pda",
  "key4": "2XCrfKVEiF5atzBmqczNTS1Zu145pmutMbjBbzhvtNpTwvkQgb5No7MCsMeReWBvZFv9XmMQmrS6WZjLpwS6DT11",
  "key5": "4isuUkcqp5VMPyXKf7TQVVJtRpkRtqJeExEZArZxK6tjdYvfCRr8qt7GGHKw4auF7iSkKF6sc2xUZiy1SWja5w5V",
  "key6": "25nCoJBjYyp134dTJxSdezp3UwtwtMzg1abAVRCD3pWpcSwZ3LNUCdydBrAnHJpiC5dKiwJVsmVa6Ro7if67etBt",
  "key7": "5fxo4PGj3Mapr2iH6UXrED4A8PuqRwvxfaPRmj4JDv9m9ohXK2k1YLhUWJ9Pmi6X2kD34Q5L5QMFNT72crJDjKty",
  "key8": "3KcJD1qrzD9sDTR5HbbTanRmsKA2iAnov4KLR5hhwe7ZJYRV7rTex3B6wZWhzJCddVVuqSdEU23QkKjThaVFXRP7",
  "key9": "5aTWkbqRNtCUu4ff7bzfTvnj97pgCne9zdxppYwrzWNpnjdt7UZKsFCgapKu7CzYhba33aUEYYqgET282sR3mB9z",
  "key10": "5CDN4swDpNzUT8meUScqEy7zkVr7DW848h3BCwMD3VqskzLi5ML2GyCxRT55dE7mE3HdKNur5oBgvVrJogb3bSv5",
  "key11": "bMLXSH5BhvMEWEacTPW68yZzp3GiUKwGxpvE9ex7S8XMz13QFjnAuXxD9B1xg7Zc2GpBnLp7Dj9w8ymUNWtmJg7",
  "key12": "tF1ZFDeaa5CrjGSPASBb4JmhHYG8u3QskdNL2BNcJbjiGm2gvhtGaebWsXjAu4YGhnJhHgeHAwpUQUV5mVAXboX",
  "key13": "3TUZ8BxzsdYefx4vukdUU7V4btyLTCshV3sjYWfB36JEmj8nMgVLJTWKFwRHvgVnEKrEqXAf4EJVgCYLTU8v3asi",
  "key14": "66dJBFfj3J8fSPoMVGh6ScqmfFuTpY2EgzFuejMwF4i5kqdYLvZZMf8HL5EPHokr6UisHYbUkFoVDW6uaoYDVUQq",
  "key15": "5coCF33gDyzE7f8DyZEkFq8TKGPC9yyriKvNEhbG7WgahAnuh41vGBefwCsYynfnmu5ShnWwNFYPXsFTERNB7PoP",
  "key16": "5TAVtQQrxvV4biYkTdfTibkjajah7iv4oFnZHTrUsCzKiwUeDocQXdVDsZ55WdA1HjFCZBEhYyD8pPtS7QwYquqz",
  "key17": "5Lim1mbYovSoyHjmV8pPcHdGzENZjkV6Qm3eH1yiHjTQLA6fqMWNsjiDDDoRmyCGqjuTLoDnVFxXYwJEu1zYAcVv",
  "key18": "51Z3VzcKGTx4K6f3pfJBRenM9tAav8TvrGfPCiW5pbfzaqGu8fWrsa3cbxTs76FySxZsEtpB8AyHpqzBpEP3kKGE",
  "key19": "4A4K87CZ4aEvnjc1a16vLHENNgozBJisd2r68yZEbU6xvp2NkjJWgCB9CnXnANpJZUqdTUxrPuJsCoGM6E89U5ZF",
  "key20": "58ZfTZaAzUnQKrBWdXvZ4VYinfAaRdb7NKk5JnAHoPwtDMWknzQ8gmbcmioHDv2NaArojqRdpGjDc6DVrmwUpBuB",
  "key21": "2NrcNrgWPAJ3mA8dChRw8dUvxYYQzvFwRfiV8e2KCk2oLAcitCj6zmq7LGmTw4a8wnw49HzNT3gXoVUhg74hnS6U",
  "key22": "3TfLYtp7ZFSxDAmRw5cBNsAw4spxUyZ2iBFfyE8upV8VM7H8JrXBGECNeHduaVm2PjhTv9UsjrgByrPVAuVY1ssv",
  "key23": "3E4YziWk2CzYDggUKU4BKUeJKzKovuxTTW9mc5jBCe7NGrK7bL5gErExq1RXPWQAuuG7kkx95VsyjJQZLeFSqrbM",
  "key24": "5NRKTTAU7MNq4HXLc7Vx1LqFXeuC1CrChh3BhRzUn7GghcLwGbL2xSaHjwiaN8FXALFJB1MTUPat7xeZyzan1N22",
  "key25": "5e6e7rEjABUDrb6qfVqjzhavrQieRfh32sFtkkBiZngGK1WToaSEqy7R2NaiExxnzkCGF6oFnoP8WmMhHNVAsBX",
  "key26": "5V2p2Y9Jj8b2knk2odGFh9JRnCKzrnhvwiW55fJQoCkWoRVeYbEbHb3h3nkmKAb4YZZ2Gnz5Ui29Qgq45JEhcz36",
  "key27": "3jVPjzDVVo7zZvYW7uPwNCPLnhZ63KfeiZqcKJxW1HqqZXixetpX2PWp5Q48s8WeE7g6HtZgnGYdsaGg621Ve3py",
  "key28": "dzHqxsdD4eewNUXrXpAi9dgknKvnR68QfEE2ou6cPUGAYeEfRWpKEf94WNBhxA2KwKnmhxgYxEtPaiZdyVhK7Ro",
  "key29": "5iUw7NHao1EGmoVcWgHzZMbKHj7W7uKxJXLMsbUau8q17fbGNNtYtkYhU2sQXzrp2Y7JMr3agJ9RLrDyCukf3Mmg",
  "key30": "sUQJ3JwJ3cdkT8bYSn2bNCuTPHLSRBW245VFwQ3y4RKUsSRz8dorARbsva45mTEdjtofzDxa9K78WcXjXkfdkQv",
  "key31": "4hUoR1KTJnS8R9dZKVfMZ98sHA5hL3jPhdpDUWVu7xx33xz488nQJfWRfiL7XAfm5jaudnNTSiUMRRYZ2hDvhXKF",
  "key32": "yxgxDoXK2hV6iCtHQqEeCZTAV3YmTPVFtHyNJLR1KWvjUQB8WyEJrSGVx4sqMJszNeNJQRQKVyT13ETVjFnHMVE",
  "key33": "5ZvoUAwZNB9FASDSx9wfr3uXumQTix8eMDskk5hbDxf9ZZX6935w4VsN55cX4LGmYgRwdX3J7AvCHeYcgtapUUqk",
  "key34": "26U52KUyCNBndfreR7nGKE7Kw1KtySiw2HWWknoH86BqrZWYxnrLizL4NZVrNTREXUDsZXWY4TBcgwd7uedSpgyd",
  "key35": "3VvFC1Gr5H4qbWau8FGJz3aE5csBYfWi37hiBsdUaG8EY27SWq8GZVQWjuP6BTHjMraDPgWsqk8maftbobyQ6P9M",
  "key36": "2evdqBKxL7EKSGjE5ohkG3TVG85VoRXbV1zi4TEHBQbWSfAzwsK38HnJ1hyTBpkeiMRdBKtnK7oXtihbszZv3MYF",
  "key37": "5QDy1SGET5qB91RMHSjAnqJZ9b8rwKTRGRBaM3kxeXTjQghaR4k3pFXWvq6t81KgzroZ7u1nekCkwMBYzhpYJYZp",
  "key38": "5zBdZqCbsfBCctVVGReXEGmFUnzkruXvfaf8bFr5Pd6piH15kSbKi7TvvHwFESZLcQP12BPs1rfTST5ZdUYpsrZ7",
  "key39": "3vBCLC5zsD3roN1i5JFDPhbGspWsncy3t4edW88UKM37KqP4AEDcyTBf6P8aYNSqtubfCQs2ESLnEWSmQpxR5srH"
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
