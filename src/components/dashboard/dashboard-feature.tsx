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
    "2dGvai8bRi31452C6Sox52NvLJd5AczQWmXBKZMpdqPuZodbvurkkUj1eVbbx5m48ZVKNviqayZK89YvdRRE9Kgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTeUr737EDWj5A7aJ8BNj9gmwPT3CKQoogDBpNMiwNUzDMZSgeafxCwttCJ1GYaF8u54vwyzgkawTmkNBGsWkeD",
  "key1": "3xNwh64M4vKJZVwASFQiGuwwMhXMfaAEV2XE3Z8Zo9gFo4aCuDwV4JCA7XaWyXCo7B1NA8ZM3Y4oTi1dnttN1cSQ",
  "key2": "4eAjsKjNY89dzq39vqiTksRGPvJsfEGb9RxAeLrp98hE9FCtyUYCqxDLi8ZT7E1GHPrtXTCgo1e7qpZFJEP8Ycxi",
  "key3": "4L6HMwrpsH3zYETg8uL1tv8wmChM8ep7QTT4UCmJ2rFYUX4gchZdCHLgjzcX91ejU5JoDxmpqsPCh1uUkeraQ9u1",
  "key4": "4sv8addwZkkAQ6rjXvQkiA7JusbW8qtKnzhHqMMhLC4UxcMsGK5EkW9KHMAys8fnWd42gMszVhFQ5AtTLUUig6mr",
  "key5": "4Vw2z5rD1DXbPGkWbG8bECtNWfyMZA8PLzAG44gVqZ8PVWh7P34SkumRpGrkF1NceuNqgHHTBLHCddKNzn6cFS8Q",
  "key6": "2rL1MKs2hDr1DB8QnR9ujq3KwAK2i7GrTui2XPVYEg37NKT3VEM2LAmMBLWaLe6wUeMm1rScFctMUYxY4kmnvukX",
  "key7": "4hiTadrJhgojuFvhEp7xZuyLwH1JSuXuh1ZnqJKEm2NJM22TQdKCeDNCxLDZ6ZGpanhg67Qn3oZ2QRxgSbpzdwkd",
  "key8": "5trczgXPkH6KKodqVgbFG7CsxSE8tjirrkqd9n5zDLsWzTN81peKf8jYyQodRWWDoSQrnPwM86HeMbCq4hJkVEMY",
  "key9": "5Kv69QhP3wqKHBi3yWesxi4bBZ33prC28zhBZZxJibg95eNQNeHuUU35fghFcFC3ZmwKpuZgrPi5uFvg6e7Cyyyi",
  "key10": "5df1JqdP7tWUrHVSxxEMmjAvMdpmASHHV9H2XykHkT47iQoR7viyxMd4EkUaMqCQXoDfmLUNySYwJCaVAbN3AZa",
  "key11": "MfatXb7SYrs9Fyj8DaKXEF1mDNhniwtGsJM75k1S7SDqRtG7ccsvNrgu6wrVBzVBxp2d6ivDUpUMFy1nnR7fzBh",
  "key12": "5VvTVDsB8zssmnxkDr7NtcY9B5AUFcAb1NixQZ2bU24aaS5Q3H6kQTHG6P249N5sD1j3VjU5Xh5BaWvMrnnpgD37",
  "key13": "5vxruZqWCSUK7GvnN2rAk1bXDbPSU81uHCY8N87Ndh4CsgEZbGxkYU6ReNnfqpS1twrG8XfwAGuG1w2vweFj8c39",
  "key14": "2nPHS46U8wyLq4VzisKJkkM8z3TtfyQavoV7VwmaZnerzS9VzJGSJtVxp4x63MPf6ouHDEggUKPxkW3QcyxRn8cD",
  "key15": "53qeEv42sNJn8vnfAz1kRSi8uSLD6Bm9teoWbWDzrAarZdxtDVCWDQ9TXfQduZXREPMa77WnvFLZLsp6eQbdDjaY",
  "key16": "5tZnT34i8jq51qhmNKDPXnLXchaBkLpEwVEhtX9ALo7fzgMrZUw5eDwjChorZaUX91SsjEvmkQ4TQ8JAbBCv5hEy",
  "key17": "3HBp3TPL3Di2NhJEXLbPhtXsFz8wUj4ZcLhxVVHpQ5kdZ9BAerhc9dgBj1n3xh2xqnmX9FMfgwo7GpV8v1GHGTS1",
  "key18": "5ZbAamZhrTqWez2scMZF1diRBMw4TkW9zTnGJ8Z7djAQXKN6jhWXtwfNnQtoLia4fJxdHcB4wMutWDxPRU1WDfW5",
  "key19": "2MjUAJmUoP5TKqV85gSeyeQxoqqPYZ9Tq42Z3cHuCVyfCYirSsHQ9naL8NMZwjJZtsGjVUNNs4VyUXerv33oEZPb",
  "key20": "3h12tioAubKE2SiPXx6qK1UYhSFhtJdmdRmy46smhSp2V3guWn1UGxffXF3PTtMT8YypBPJLWRCVWBBP3H8YLwqg",
  "key21": "5YCFygg8hwWKUeH74QCssvk4NZRtCPYq566dVFrkPTZDHbucrAPhR3RjsAQeNeVjZaWRTzxVqv4FmawchiphKjVP",
  "key22": "5xCphpU3nUP5aSBke1AfTKnfGzb3ncFCmCbfMpxTzj2Att8cwUMtwTLz2qfFtQkVhScDzDvjc6ibZtX1oecuE2v8",
  "key23": "zqjD8pK4tzcqu4LiWdaE5QTJrHRHUvyBxi4ShdvMmT8wGSH8Y65iMnYEUdpKkFhQ9itz863SWb2Rovh4AsJDsGQ",
  "key24": "2JJPtTnSccZqW1TVFKZZ3BoNtV8nUJWE7GChbCcF5pBE1rE4opJjWaaZadKpT1jPyo2e6asxEJN9BA4d2eKRNw8Z",
  "key25": "4n6Qcf3sAPHaTkJYrCU64NunVSehbLGP11NUQ97oHAoMo4FUxeBh5Vv4mp2q8KVa7CPWSoLGUe1JENJHY6NoarXZ",
  "key26": "PNHQTcdcRKipYtYRi3qZSYnpVaG4z7jsMExBu7pEEESziwDmKZPbUXmcfXLRUA38FuUijwDqNAfBwJDTnttnMzn",
  "key27": "2hG3do1LxiGn1P5dG8noh2i7LbYfAcjzonvkB4r5MNBPGBXfcjNQJVjTy8UxDCaGKt8SL2nTvqzFbPoYj7dA7RVf",
  "key28": "PQspoHwfH82RoCSo7ghx2kTuc1hSqgnZDSvwVhKzTjF8oxShdvAAjqajPA6pDnKhvzyq4FPxSK1PaM3Jk4BncZi",
  "key29": "64vJ8gfgfxsUShfKfYL9GJWLQ52C3id8Spqz9rfLoN74zwQZzyLjU6w5iAX5xSECXaKn82XFPtCUxdKdMcDUUjft",
  "key30": "2mznYrdLJdPzHNcfBMsLir2ws94CDkZydAgkL15UemnQgtATWH9sJfbSE9fmbCQRRyAhzjv9wxyVYKrBKS8k6BG5",
  "key31": "2uVB1shNHEuDzSgNnyARRjKqxdMrpvCD3YCMVbACWZfNqJsfbGqy7AGE37XpPXDFwZ87u9Z3G34SfCBQuhSWKNig",
  "key32": "2F1BS2Z8R6D8tVrZrwRPSYb7czE3zxF9c1R7HnyJBr1d9HRjdKBxMUXJXrxosx9MndHtXiA1CfGvvxe7gE5finpB",
  "key33": "5XTjkRtUJ5oz8hMbTwC2GXoBftzc5kHpyLcnAd8oZmo5wGkQwJQt9gdrt6i1RZ4hq4UdhYuFhT15vqQq5GtU1iGf",
  "key34": "24PBbnBuZpKJNF7L2NGMJVTQrntDkE3SMNBGtGioJXyjbRA4z4XbqsSX9wZ2L3mJFd34DsZcoK2rJm9XpsPV32hC",
  "key35": "3JwJNQNhE7q4LXQXGQkyxwmFGukB2CGnaKcTXzLxEyB5qajRQKMKjr1hfJcteJT4123zHirjxJJjRtbR4Ty86z1V",
  "key36": "hx85jxWnjjHeiqr4gbriAw9ap5FSc47ypLY2jCXThrUGj4cvYWcMA2WV9jytVZpiaEgaptaAZ4BKQgoHFo729LR",
  "key37": "2TLJ643nMFT3eDSyGom5Yb8ru5NgmTD5nSbJ7EEG8YkttgerCn1hswz3ow8rfffRt1qKdQJ5sawZMAGZoiSrVfrD",
  "key38": "3hwatC6PnQXvuMsgYHakC3yiBTCDXgLjqgK6hac1TUVvNPp3jqg1ibaX6TNgcFxzFcWsc8QdxgxH6kqcvKX6mje2",
  "key39": "4ByVf6DAxZ4mMkNhcUAnNBCwjKtVh9qWyP37587BtoL1fgsmhYm7HKHDkp9Ve8CGgNN2YmXBG5Qv4nGiF3hiSw2Z",
  "key40": "55nHe4u2frEN1BeeUFcbdKEukjKLFLi3UJpqbdiCm5V22LtupVS7emAsKaNdaBEWLwXharqyhPfL17ZKC5iFmZUk",
  "key41": "4uL7p7o9StQad85XCDGevjur8AKSRgxQ95XtMUDDLgeuTuH3JsYkudCLYrj5aDtSsRaMiFRUhZUStXHsYJ1y6ZYA",
  "key42": "5NnFLaBq6aGAoP5rBTqGUpqqrKMuPLhP34esnFpTGWtzbwVk7R2FsqavoXqwYTTBFahCiAMXq4i1PhBVxsskLytK",
  "key43": "4Z3nnMydcqYiF8ALeG4mMfyGup5gXbwMmq5Eccyk5esZJWfz1X88VVymKcaogJd1j8WWFZhiTMjz8bENVUKXz3WZ",
  "key44": "3wNfDwEco8ijdh6GHMoVwT6JqG4pbkV7Waa3rPw5qjpWCtauHBkwhG52FhxytXjqzDE7pRe49xsjUetGj4ARKwEz",
  "key45": "4EnkHpBc6bwS3aEuajRKUzsXZrXLk3Bau9Dea9pSsuBcgfPzw6oiUqtHoXPboUz2wxNMyMYTiKmMDWnMLFUTtJPm",
  "key46": "4BtnB9HyZSgMt8BiTLobjMb8rPXWjGjJDpuq9UuzDzcnvvYpY6zYZjxpEt1SYjGiV4PmLLBchGLeUfr8bnrPD1FN"
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
