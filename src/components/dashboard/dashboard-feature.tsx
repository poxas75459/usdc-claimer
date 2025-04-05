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
    "28x4TDxG9skx6saGQ9b7ZUmB9CoJpygSt8sb9h13UjaxdXaFAix9tKD14atnmSKV1scfibz2XkECXYikYvxhERgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiRGnMBiLUefRTHbRbWY751RPQZjWz75fHARXr1nFmSFxYYfvCxa84UZwezZf5n9nTr9coWhuwZbNGudi6Jo3iL",
  "key1": "8yXYEXSnz3YVc6wpX6nYcT6hrPq6cdd47C9vGK1BgKG9x6WLBemfb7YpSpDi8aTns4hQDYcCd9TT1TxgJLG4Lkz",
  "key2": "3geiLv5HB3H2BoyKw2EKYMu9vRwYGtS7HRzTCWahwxryfdEsGqycuk9S9HvEMQ7vNpMfUhfeaSfL9rzRN6fjqvV8",
  "key3": "5uKZ62FfcAwEXqHx8Dp14d9rXQypyatu8MyU4chzsgpHNzf6SaNrDPWW58WbLnXEUWtVPWPpYo7GEYVKPmA7qYTr",
  "key4": "57jLcYp3AZqbXfxKoMQAmduCVbY2uuuKHzmBimgufKvTJFVBsUS4K3G6JaeniNRwGER7TLuPuh4tzU1wxi6QSMCr",
  "key5": "2LWRxZ1sTThNvqvebB3aQkhmicWk5nBXc9gQFgec4EVHy8DnSjkevqiNoQZN4FBSCPYRKSvzd2DfDxRFy9aek6ij",
  "key6": "4Lp47oBAPNhxyyujbcSBeGPzJA74SiesY11rpnbz2VTiJ5J6xSQtv2kbbgGTyPerSK5WVNzMWzLDNP8NxiFBQtvc",
  "key7": "5fY9AbCqoLo61YwP2Mh1PjAZEASvu2DXvrfH5Kz3Heju4qoS4xqzWRY8oJ5LxnG8vy9i8NPNBFbBjHZkYdMygsda",
  "key8": "3RdJ5fi1UvcGeJ3uMnuMEKZcHLtXSQ8UZpNDZRHtF5Kk25DZM3g9fUEh8XCYbm6MPVb5SsLhoHwjXTkfwfMnkEK8",
  "key9": "5qjvvqExqrsHy6HGWcLX5BP6Yj9o8zB7gGeCcLFfjApidkivcd2hS1V8Q8j2NNmNGZgFiZ1NUusTLvaWcRdbckFX",
  "key10": "5YTUXqbKwyadAQCsKMsE4gmnkBsAzRH5qLuiHTaMqjwsrGZVWQRheBpC6Jt3G7QwHXvM9cwkMMJUdUSKtLBSMzGj",
  "key11": "21iSjNc7PpAM9MN2B4LQy7mk6SeFZK8c5DcMK23GW2MXZKaNKsTRRvn4NrNWU8tdxGq6qnYUtr2E9youvRyvLHsy",
  "key12": "2PnkCu7tKtCrF9GK2CAyd6QHRr8qS4ZSYj5m553cbYJiYKhjALzaty1jH4yJgJmkA2LAoGwK1EsHLQbSzrrBMWAS",
  "key13": "UfoSrDyMi7MVzNZvp31J2VyRP9Ys1JepSsuiDKrxYs6ES3xMrTT4tAwY19fwdZJSkGodYW6YQyf5wFzYJA7q3a5",
  "key14": "gNZy3FEZdCKjDnP9XNJ6GoeUuPn7PT97Y73Ehghp8Nz9RRXCimWzP2cSGAQfC6D7Bt3MPJigpU9tenchFKMHPPV",
  "key15": "p5FiHSMpH95epMwHPEZHxW2DUN1eSX74x2GjMynSdjuBNRnD3nyh8QJxGx2K8PRnQeJgEQs5iZNFvUANaSZJ9Vx",
  "key16": "49Vxx8MmBq3A5A1dQpgoruwNeyDbCvhErksumzG7k5TMB5CLuyqh6F53KAQUjEWv962ZoHMaJfiXJkHch6AkunBM",
  "key17": "2jMJYzgZRmJ3aJKhAAbn3BpmgLhEpQEQfcATBWzfBWbwpEmDEQwKoQtdwupwgPBLaJVPKarPtrBWCndnV7b9hVK8",
  "key18": "3C5CKSdHcoCeTmUcp9TcDLQ4ZbuMXtQzByLsBhvbXGSZqHBJ7xPNCe757kfzDZxvpT99Uw3Y3sEKPmpp4KbuJi21",
  "key19": "iKFHNtCEBscUAzNtSnAdAzzfnWDW3DdnZgzjuEDnvdfHNeVatyAGY1HpCqRowsVH5MugjCvPnVAGJF8KAAKks6M",
  "key20": "1tg7hGzrioF1AbgcrpCxBCxg1XSQsDLEFDQEuAKcymGrCUNw8UHSJSmcZffirCcXZgqZ2iUxLU7VFwqXP5jXi8Q",
  "key21": "22LEWtUoo2JK6pg3wJwnyKHgeA4wLPmBbNFxPJHecJnxpTVq2sjBmefKE3id79vHXf7svNGFvTktH1qvBejsArE3",
  "key22": "26P6Gjgw2UEWxZCEHk6gwvERxTFKjMSSkMdTga6Q9LFbXEL3K3BfUExfuCKU51tZPEcaAT76U4V47JzqhH6xfGaJ",
  "key23": "4qYtikp4uQThRBqjrUxJACRA3eymprks6HWG38U7L2XTuTUAduGpskaJnzLwqzpZCSSDQHwc8spyjnR2jEFLHD8h",
  "key24": "fKR5wKQSmXf7XbZjzQXjKDSyTnvpf1MHBYFNM2xjooRH2B2uh53DnCRW7Tw1fL7GWGbnT7t3FMeCeZHuNzX8J8c",
  "key25": "3nHMak3UruT2EJ6FFwfqKg7ka2RqX4VvnNsBpJCKVGT1An4RisJdHMyyryrjUB1AKdq4HCjXKkgSCvrjmn5TKhen",
  "key26": "4hMB64HFfqwc3RLv8vcAbm2REvB2EtqnXqLateYwv82s3WBee1YWTfqnn3mH54DEg9YHNUQQW9XmsM7YC2n8xqaa",
  "key27": "3dpDMaT49o7iLZ8Tn8TxNygkqkQBUnNQQz5fkxxHERbk2stgY2MXCosE55xMiVqzfo85SaD85kHsgshzW7GwHz1R",
  "key28": "5xuWsZV9NhKfBUG3qGU4mkYHXCAjUaH56DnQBnUzdxKo6WjdT2Y56Vf5PXqNBNHXqvPioWYv6MSU935rmiuagVzw",
  "key29": "Kor5gwc8a723u1Anp6o8aoDWwHxKG3cmb6NqHBm84n15GHZh88nm21U4pTnvm5iB8SZ7wne5NctqyWdoo7c6dT1",
  "key30": "3SF5P9ZSivT1MZUDHfM81gMNDeGHeuAm8VstPgxhCj7imHJGBHbN2r2jNFR1JXTEK7ZNGGxTz3wj1NMpJgzMazuG",
  "key31": "Un15VRiVgjhXes88WL1ScXXQ9J5JZrgt7Tw4mSk8nrt1VoZ61P87hQG4x8PaUE9AW4to2qsas7Zx5qT5cbKGVsW",
  "key32": "5BQhvMfAMvQUUdAvECmh1BsDL3u1CbhJVLn4xD3UKFQoireomDS7frw1bEsppCPEaaDcsVPS2MmQxT3fRz6VVKc8",
  "key33": "5MpaL7ZXg4GhkrqZj6avjoJrEGYxDz8ioBH1tXY62uW1uHqQft7WHEMrpaiNKS5J82XHXQuBTG3Cvp3nX9Mknxhv",
  "key34": "2bM9QXxqMFC1EHR2T5MXAi2GcRFwxufVMnNhE9zicFeZqGc7jyTpBPonTvyGZCBfKLYXiPwpponCCThwpjgVcNLV",
  "key35": "i2L2EajKjZZyhwYMwfcBpWBQS5xLVgXDQDu5ZtrQPzEjE5KZQFGUM7BkmWwGDCbZRZcCGZ6RtHZ3EAC5miztZbv",
  "key36": "5KaUoFhGnY7aryfkbxkK9ZUuix6kY7izMcTFpbMKjPZ7XV33GMbCrozWgDikKmF9jaXBa8tGZU5ZtAKCW5P5F9i2",
  "key37": "4iTgHgH7gv6Uw92ECFgWNx2v1WxTFYHrKRMkAJah2GTxQzozqMyADRXaA3gjFAnv6C7LtHTjByFgRuArjEjQJ6R2",
  "key38": "3X2T3LtemosD4fC9XkuiiPB7MA4uxh4Yh2f4UeCJ34yBvpJhJMnqwft6wSxZQXeTaFAzRVGvHBQHeYMrnd5SifYk",
  "key39": "4QEFnEjhTui11auwN34rTvibq4XnY6a4h5vdJgHY2pa9sAPmmdejMwetEEYFWqJVVfKwbAorE91Novkxj6ZhdRPW",
  "key40": "4CUKfxsXaWVD7xqc93yzk7Wnz8KELtUWUbXFpk9qVJ5CSa77oG8h5RcKB9zcLB3QAmmi6JFaAKdvbfmYGnHERCzx",
  "key41": "2sEWWL3wSAWFi9yF1iE1qsoVvYq4f66jjXuFz2vcU4k4WmYJbhwbHXhh62aMNpc79eKB7Dwf45ZAujVShVHorQDb",
  "key42": "iYsHTAVxXZG8v8ouAsKRJjECYzb1a6kR93anyzQZaGkZ56Hfy54gej1XaVJfT76yTTRTTjMoWLipxyqc4FheWYj",
  "key43": "4q9mMAePk4fXAxLMmreuAcVzjusrCpNJP5pbZW7WkCjEAFsBGGujL9fvndyhsLNatKKH4QSNVQJf8R9NHcZvEMin",
  "key44": "3KNQ12ySb5CKPdJeHLuSPv1xKHn6UHpis5fzrY9GnoeDvF5G2A5xe7wX9Hk8BM7PTYeNLML2xC4qCHPzkXPgWBKZ",
  "key45": "3DSFT7RsDZmskH95uCyP34d6M68R9rL1eVWPyf2RkCVGU8GL1TME5RXg6CR2AVoyLVrtoAuGREvU7JAdQwdsH7vb",
  "key46": "3tiWktUohEKkwUyot17dfwPuyMNjw5hxFF5cKq9Lx34cxULZAfQ4JiPbaV8HTueEjrwfKPHJPNexYMG4VeVJg7e3",
  "key47": "4tfGbkXJe2ByeEFdLHhevbHj2GLfQ2yjK2WjFf3bgM1FMZ45iT3Dx44WeDQunsi94FyTFBVKPRJ7kn68UiT8wYJG"
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
