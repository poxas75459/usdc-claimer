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
    "2ua2KxhLBKC518ytoGtEArCUzkUQQ85c67UJoxncyPhVFNvxUqpXriSApD2sWdgLnnKA2K8gwiV1BooYz69LsKji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoYP5Z3SxddSPbh8Xdy5aMNyHSQuP9Yo5KcUxG1JW4DjcV86aNKLU6oRpWmSPvAw2sWTjNDZZW3njwRsLHZPD3F",
  "key1": "2qB67sjKSQ4k5Dsxoh6m7aiBHgssv9aeTE46gs8FQpo6ohRxE4EPPwGyMEgTuev2zfc9gGjj488Bd1zjgHuz2ZHA",
  "key2": "4F55hpbh4wcRA3FcQkMXZHsYy55VN9H4coNP73Tz8589GvkWMKV6Csf3eKzpwwGvp3bYQEnN6iWXuCijjiVRASSy",
  "key3": "5DvR36NebSFRpEK5sqbXmNvSGWuv88cThVn2yApt8MssKN4UsZaJRyggpvbjftDqhQm3zv93Xt3FiuwfKuv7bTcT",
  "key4": "LSXdWnsosEmuG7Xym9oHLMYRTod6q2MYem8NN1du2MmDXKSNi7fz6BMzK3Y3ewiwi5fHr2z7SzVjpijceJTnMQL",
  "key5": "PX86gsjgwxZE3P2ffxwugqK1yrBPVKjMB9xRschV6fZXr8bxE4gBgqGGCnEfav277bpYMvvDTHvEThSXXCuu4EY",
  "key6": "3w8uqwqyrnqUdJ1ZCDLvnrC9vVUVFWgTH9EjM8XoqAbhPaUXZKd65v5UuaF1LyHS7oXK4ANhW63zaoseRC8kjncx",
  "key7": "44UDmgAobXRMNx6W8SRR4aKisDboqzwhsMHEjbt86G16tHGsrdU3idfQ8d3KpQJcHnPHZtBruANYMgeDCpoApU9o",
  "key8": "2k4Qnja98Wf32prMbhaG8VJEtfREDj9VxNtHdpsZYXeiEGU3Thqj9HSSUnKuYaXtAJfKPKRsXP8QAzYk6JAMRrUo",
  "key9": "46nWMK1KfjzkBTZGrcuRAoaSMJc2zT2d4yyRGn92pYXjq3Ffg8PDu823V8qjhDvFGxTjARKLUuNG9i1BcCcg3hhn",
  "key10": "sbVoRV7tWQHjwSgaaZZbSe7dCoijeisgcnbRVEZgXBa7Ufm9iFVTiA3zLgJcg24mskoqBiRkJL6ABKj4bCewPZf",
  "key11": "5n9329oP7REAQMWqp3RxqNbA7sqY6qf9GxNpQk2eqt2JtixLeYTeAWVeWQojJq775M3xXMwbqUoSkFK3rvA7dXn6",
  "key12": "4pJJQVJX6MiNRJmgyLJVC6QTxtcXqgsfB5Hj6g39EUb4S97QUm7r6Sy51fFyL8oqj4vM8QCaTf21XG6h2YcAWbei",
  "key13": "3jyCXThJaFZ6pDRmBmdbteqYnVFpCi67KAKzNfAM98mGKU73suHo8N8csCryAXjj2Sox4281m89qHPhm9y4GavBD",
  "key14": "3zYLmR9kqPn5VvRGzRPqv8jgNkwk5Pj2wzEZW7aJjzYnYt45Cp39BwNXVQiPw87eFpaBNrPzWVRe4Xn18cWX2QAM",
  "key15": "5e6JUsAE24TVwLSoU3UJ3JBAxUFo2McQZBw85Huu5tDBA2XjZBxkwEXf6jzXAocju5RmoNVVZB4kbbaFyeobMKqo",
  "key16": "5Prw9UiSCGCw8Gw9tv4tPCDYPFfdxGttprvDqKxhJtiVaH5qvZozcVYx5mfmPFKckAFpMQ9kzsLFaSRuvBGZwFyW",
  "key17": "5YKmkpYCGEA42E6YnXAueX34E2NX92ai1djZAM2NdAwSYeUPeBiW6V2CX6KtW8xnP3eczZWJ1Tt1Z9QmL5dR9rn9",
  "key18": "73D7eNktbB2tWL4sqkemmQ23yk1ga4chXUFtvVztT9wYQBtoxwHxXrHF7YqGFDbQ5wXKdeeyeJ196K1SPJrbkcV",
  "key19": "tUChew4FCCYcSVmo9NUcCJwA6ZnoFmvJhmxKjN7K85F3Duufc5ioQmAAL6xDE7JuDbcB4jGiTf9GQceFuNqGL1C",
  "key20": "2FHzECtFvriRDSgJhziK753Pg4pU4gJeG1iEDPk6z6w7XBKGHpMeTbDNg4kwybAxt2z1ibqk8KZvxjiCYSUE9mSY",
  "key21": "5Eq9EGBQq4eUgRw7HNmnNvccJukmueKjswKjchy5uHS1stzqELiDFYe9uopKEW4e6hYxccpQPzjvh5BVjRzugaHC",
  "key22": "doQMgeqFD4GLogNF8FvB4A8yrKwzgyFafefKenF4sGETTNBzCfoqJ6zgS8aFUBXqDozavDfWwGmSto4wvbpLgKZ",
  "key23": "3bcvy7tqxEQdCsZz2DMsojSVUWQ8w2u7UJnkoX3XH7whSTmoKWqbzfmCeNAZQ1ZPojTzXUFUi431z4LcjLLwrTob",
  "key24": "468e4KwgfXPGxVCwWrjYLU2sykmCYqKGkKVh2PKvxZmbYqpbsji9YtGh1ReGUAzQodhivUFE23PXao9go4b3khhg",
  "key25": "55hvRtTCFFFHiQ4KZjFeqv5Cb7UYdNVb5C9cuVyV59Y1DPpYRtyz7KGCxBuL9sYedfTnk5XEFAqASSX5z7ryxBwE",
  "key26": "3BHxQ7SirZCSb8bhezXiwMR14A185dm7xzJrk2ovzy1XswkapEc2NLNUqZZg2hgKQX9wPp8LLg5T6rxLRJcLhoNJ",
  "key27": "5PKyTKsLUUkMG3Xt4roywpYrhbva2rfazuEQXvb1tkLQoi7WpoNYBx2QFSbm6BdK1enixDBGCNLexLBUn9FXk5G6",
  "key28": "59tE9q9uk9LPDhiNQKrJUNrSpNWbuPzjgYKay21RQ2MDZKgW5McxBE3jcrPPG4chWMs3CPn2v48UzSktuUrmwUqA",
  "key29": "56EJPuDogUQsTvksCvkcTbXAWGYKsaq32oY2Qj52KrN3gGZbE41Kj71Sz3nPT62dvbnfD8zjK1KEH8PQfxV1dSH5",
  "key30": "2X9c4t3Cj1SMrF4XwBnpGd4gPkNUeNnGrHUgW1jJi6vx8mMu5YwYsGnvfKvBiMBX2DVMfBenbVfJSyfoiwvGe1dr",
  "key31": "5nB7xNB82zUB9EMfyxj785EcPnqWdbw1YWg47S4NGxnMYWgUKf4xQj4u36HR3QfbdNM8c1UiuTi8yxyBLF6r2245",
  "key32": "2YNrLBZQFiNzoRvPn3YfWQYLWMBGLrSMkCFfmbh8Ufd8HbfELdnuBNtjWz2vPkAB1hgXgCxhz1oTK2xXXYnvYMpD",
  "key33": "28nEUb7v3AkzP4Sag5n856i43veoVvNTxfniijHgQh6xcqa18k9yz21B61SL4euawJeME5iCitRagQQHBM4w4L9r",
  "key34": "248oZ2mRTeGcad8pp8QGaM2zxT2tESbHzF32VH1ivSsTwUQ77ofwdA7PH1V2WPYap42R7rY7RLJzKeRghb8jgn8D",
  "key35": "2sPDUafTv1EQYZkCXACZjfPS7UHtKQHMPWEM2cj32bZMBx9bUPxs29CJ1qpzobneNAjKXR5eAjzorFmBdFC3Cs8K",
  "key36": "4oP8PUksgULUeXUpCqjtQ6ezi58WcotU1VgfM8q9H5XHUxXTXMXc7ysKBtjySetL2ibPkLihbVxuMRanhy2AbNyp",
  "key37": "3JrJFxZtTij6uJccDzB85qoeimnZ2zWAbEC8qdDsMVUS6Kr5wFrG6wNXWTKtxmGFJDjCnv8UsKG2sf1qhW1H4FjM",
  "key38": "5oef4zpncMZP8Ef27XFRe6XdkSvsEH2rToumBS31DRZzJpLtsiZe4EZv9TfPnATujgKfeRAeGK5jkjq636hmaBVa",
  "key39": "2vHastp8wtWoCdRopoUCenGFpEvAKbpkvgzpbWh3MTEauCTzS9eM4WSCbrwtfEZquPRvJghzBeEjuEJeZv5RYxSF",
  "key40": "7xJVaYynJaXDx44fnRx4LK7zpjBZ8YyqVNuhVqVPR5XBrjbqSGRP6gJGNM1hfp4M8dJnXSoQxvxWFdgbRcyn3wF",
  "key41": "2TkD6GvNyCsSD4pHJDq98dcU73NKiVTCf7dZqZ9QhUPYZ8FMb3rErsd6nLjdnaufo3RJPcFb9JFwSfm8K6WRGBMz",
  "key42": "3JNY4ABDuhxh53a6VddEG5KRYT8fnaXveGLmxCuvEFSLZo3GSD7DMrJzpdXGEvKWrRGCr4kT2QYnnRHsszrPdrj6",
  "key43": "4NFoUXbaVL9oXtbe8VFuryApSMsjTH8XLnrZUDuk6jkor6WDL4zN5BhRJmQzawg4csL9eAz1F6gwN8MSWd2MnvyQ",
  "key44": "oKSC26xaiEvUHhQzmiowe9gF8Yfji8ZmY6LxoWHVpgz1VXwLy3YFfxqavkCWkKDw5miSmLCg6nCfF23LBswmMkS",
  "key45": "64sataEhuCpTwaDjwg73jAnpu4T28mGaa7HSvB6TRgVwc1VEwecbwmKBc5doBuZm8pvmeFbdnYnNNULHDrs4Ku7v",
  "key46": "5AT8Yf74vsBuB28z6SkLRbdTAyphgY7nb3qHJaVW2C8WRSRxDHv3RyXykaH1RMpzWwkccvbnyRbwd2vFZFeF2AXV",
  "key47": "HFTSV41yZJJo1qX1LvQqaGN3NPyhbZtFgRHLKY32mqU5hCrtzXanyrJ7pSgUbsiE7e3UzTMo4FosoFVaFWeYQe6"
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
