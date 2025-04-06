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
    "3JRv9GMwuc3zzsz8RQAUV826KMvCfcXghvEMW6GLnVYNvuH8HrZNGLZRamYx2rqApo42HkU4gGSHJDgxQEH2thbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MceJfhFzekrwdUpqwGNCCUSKZeH8vdjezpMcmFcuKB7HoSCxUfsXvwRvbqEpwpWcWwBvYnHH8naZS6bAubuTE6b",
  "key1": "rwhWxchha8jgdtmPUU1tcXkYozgopLpvbT6zUiU4AdiiPATAXqdntexLRiPwMr4tXr4U3PrHxeyHYx2kScw8RZt",
  "key2": "2VKjabBii8HA5qnXHdBaheFEzZFzBYkTEjtyhu8yS15LZ2Neb8Bns5mJNRWm7LwLaFofeejzTfTqaFMGLESqCztw",
  "key3": "4uuqPXJuGcyEXVFZwjBN368bbpi9W1CfNNsxyDbvLGEk5ntXbnJBsRqz81Jh6b2mF56LY4QoaDjuUKFkdPoBGaRf",
  "key4": "58jnAYRVdJDpEEYjAKfC3uzcAhh6ogb9ZXejKMBrT36AYG3f1Rku5VsV6zbgvDfR2MW1oeVymukHqXgJS5uSq4DK",
  "key5": "4nDAjveqRkt4VyM3JmJwTCvF3ZyE8BLkSPzYSehioX9bBSXdA6EiDGMpdV4fihMGUXncZE7xMbNeuP6omLTbSiKL",
  "key6": "behd5QiS45KxbXKumNLJs3sLgEyFM5dPeDt8HaXyguLELpPaoXmpoFnYpuuUfmEqXbZU3SLc5777YchdwQuq8jj",
  "key7": "2DpEVRMSkkwdF2thbqCCT89BweFVLKeaKG8cdTBc6WJLS9y6xLLDHZ6LTP9G9pHadNtpprRyaZ9RBzVhgoEiLFVh",
  "key8": "3gpMnD1AXnD6cHQ2ZuWBTHmwmYD8V8WtPTmNwwjgDvdbAjNiHm1mipn74BCWJVexAvvz4Qtdq8AoBLM55EtStu2e",
  "key9": "27oRmonb2Wo5uXv9wEvxLgPufWbycewQVQNN9PTWvTy5rd9m8pP3ikAvwvcSDA4E3w2wDwpiqEDgqupcBYfZJvZX",
  "key10": "2GWVFNiS1Uh4c6WiEAhmVqPvd4eE7XNA1End37R6qzh2ueh1tX98YvHQwa3nwJe87LV51WFocKc1Vvcsrg4k3euS",
  "key11": "2jLUm4X2yeUpZqzsGRzTQMEiWYHv43Lu96u2xq2AeqKNoZWsNCEd7WGmrZDSBiDqM7nmmVkz3yG4LDL4s7zYs6QJ",
  "key12": "3xGCETA7uWCSjjgXuhZpX8poAQ9o74vAQWVD6bQbN8FTf6R2JWM9beE7j6P6Pi52Lc8sgTFyVAsS6d7nHJDYtgSw",
  "key13": "2FYaVV4tyP6TXX7SCa4JKgXYJXM2pSJH2E22mDKsoBGxqQEQmjURaipRzqHyBFanTeHa1yWdiESof6bwmnhmVwFK",
  "key14": "5TRudJqKcP9XG18GtBsNhQtKSFvteRUSXmEg3QrLNRBEihtV93i1ehnPgYwsUsvE1HRwVEjnXK6N6rzBAUgJZwMe",
  "key15": "4yvZdqL8yZAhGA68S4xSfU8545y2D1W5W8b1EVejxs11qrvbXrcyUYeVgxEASkMPcvdki4YfjUZU4CvMsDm4H52p",
  "key16": "VGuCZT9xrob2u71ipQXoAjWVsCesm5MmHxYTUYGQqF3rcuYLtBvqHQkf28bEe1WQZY9HGgJqUHhvToraMBJLuBh",
  "key17": "4oqeuka5pKZ2mt1GuLF5k8jzjzZBS7UhpARkae2o9jBeNnFMn5jpZVhUHA3au4oMFa9GpNCd1fE7W4Fj3ZDGt1Vi",
  "key18": "5ZemKWPFKcPnaTzcUo18awqqAonLJhAk838kQRXptTg77eCrYAummogFESpFJZRXyxyd1gEB68WU9aqntikjDn2k",
  "key19": "27X35eV641JZjEinGTcCHC8iT9pFKxFjHRCdSuTCAEpNinuWTjkV2wSpHKXtmK7MZxkZteHTT9yWQJGxPAFPoZSp",
  "key20": "3Kyn2Wr6UnRAVZSdQ2oSM4Ad6JbdQzu8BejZug8izR66Ltz4iAxSwtQLJ4Xn88frC8muHaV8MJz2qZacGe3vpUWu",
  "key21": "5iPQkoPZdkPEw5xbUXhL7HuBniVKWxtHGWvwKQtdJVX43ztumjmZJFvwVzc6LymZFkUR9p4GYw8noj3qs17GYbMV",
  "key22": "2E9NE3QUTcUZQgPGAQh1TfLszrzfgLrHG56cwLvy6tC5PGNHhXSer8RPTq9eWCFqzRB3PJMkwAg5UebcZgF7C65k",
  "key23": "2CeJQujLrDvUTynwNzedewCrrnRLHBNmugiX3W7g1yLQ25NM1xf8tf1frwSVYoxzswmFBtRwam1uDiHJgHjr1jjG",
  "key24": "5yu8f9UevQoo6yXacnQkDTSHcTL61gMVubHxdF2MedCU8SkeH7d4YyeofnKM3hGoYxKL1Vo7sQVwbJqkdFJ2vfm3",
  "key25": "4PV6qjVNXzu6yAZK2unPF3shnzeHxD8NwC9CAP1yazdNQe7DEUQmhSNsUcTc2hKa4nCcjMQ1SM88SVQksJpRNgTT",
  "key26": "5tSgHMHbrxLtk12SJ8VepzhUknaifMYiH1ncmjxkwoQDo9E88GBtP7ferydYkC7EH7Ptkjx4vEWaZ8pkCFJLomZK",
  "key27": "4pWmh3U4tWHyodYYNtfPyzDzn9LPCKMkFU4ni4HGqKgmAnCrnzTrMh99Ntu7jEWMHmMXfPXtP8SvgAwuxGdhYP1W",
  "key28": "672NLp7K4ApgJa8RVLS7jmq52PZoEWBfHBC9Qf12n861oAB1m7ZtDeQkxJxzVBeSU5zS1aPxgiG7fU4CVM1cPH4n",
  "key29": "3Ui48Rf8Ty5CfnaDnZePCckhNE3m6bhi76yN9i9VWn65ev9usxH8AvTqJ1UEr9gzRYnTNkkUz6o3CWTNfsZcYYsq",
  "key30": "2EteVjs1rMeUjmfeattT4W9AjHsFyVwe8gnFHdt3Jk9sCnBwTbt4Z5vioo23Rr7ucZdBrfbqEtshEB7AcNQM4p2y",
  "key31": "4m87GntJCdY9ib4XuZ8V2bfrPhAV4tLr1X3NsQAS6d4C1wbJEdZxV3qKpLHihavSFRNQ6eNhhsdjKfrGK2FzJmCr",
  "key32": "3HbjLP3n3nD2iB1X3CF63c9yNAeHzvbieEYemgwN3EoGeVWn5TvCFxdeMzZnG7vZxLw56h3wYASMwm7YbEkd33iM",
  "key33": "4zWMFApK712LTgSBsgPbrrGNrZ72TwySiq1A75W7QQNp9CM71NVNFjXW9XcJ78tFebZ349AZCp8oezxfpWRYYnax",
  "key34": "2Pv1MydBxW8xrNGHvKQkzJY4kNbW3C89eoTUYJxKaa2EDi6qnmKWSJSrZX1bpNTSDc7ECCjrHuWWB5ghdQLD2Yg6",
  "key35": "5rc35kcYTPbihNnhf9noCcmCcPFHaNzWxxwPCZr9Hn8biHAjTSUS25UDSepLDBZqDjRncM2s9f4mHhcAVM2fMZUr",
  "key36": "4kTjN6idU2tzr5F7XBbv7y1Ty1qkx24QXjJkKfFJxQvjCGLUrWY8KeKrBmRrckGuaG8gpXsE6PWARR18DXjdfU7G",
  "key37": "5Ju49XnmsbqTjQxgS9kDQZLgPy9fyB55iHX8syLk67qmJERC5tHCVhf2wy1javWDpen2Sy1TiWa83TFMwdAJURuT",
  "key38": "MJDMX2AabmFUPt49D53NHrQ8VRScuxpaeRxdxqPd88vWeKUW68jPc3e9og1to3TeCAXEwZN77LNiy9LKkgnTQtn",
  "key39": "2mkqsBbtsDvULNk8p3tYbEHRe5EGdobndfWGWM12kUTSLnbhspvK38MoVUgLQT3XZqjTf739D8QpTnr6FmNjXGQb",
  "key40": "5r2KCt28Ui9PkGisYPqStkQm5LkjSbR65qu2enZspvpQPTSrrk3eU2E47jcgkZUtQNSbvDg4h5YB2HEqRbyQ9v1Y",
  "key41": "4493sfJtfU4FrPNSVsE38uKgJVZzHmrDWiKhVJ9AX5taNmMZe9xadKtmx1iAVAXMbqkqw8LQkhBYpd6R6XzFeBDB",
  "key42": "5PKHHVQxjMZExxt5EqvC91LX1JKWbgnBda8taSpyPmh3NUzjZ6d9z9abvKoMJdSBHevbHibMSQw5iwhEBoSaHCGE",
  "key43": "5evwXANN1Tws3Ukpw5Mpf8BpUU8egUjanqv8gbTw4EKJQt8qmUbwosCDSF3oxzKhYooAHNbQJ46zVmRTPFD65A5Q",
  "key44": "3ZCJdTxj745pTe19ec3wm8VnNZpmrZ9W55FxHuD4NLxAG9yVm98TCi17FsE79cu7VDKsvPviFDbPfAvqBpN4zXqu",
  "key45": "356eSbU9gc2E5YoFi25HmdxueQhEaZePZ3Q7efL6BM7Z4q5KBkL1geQ8UXYrz6bZ3zdJF1p8BoEFZMN9gVHbG7u6",
  "key46": "4UbWyyyiKhUE1RMfa7m1vduLYwkGBLsJ31gby7UndCprFn7rcxwY4Qwcb46KyGULPkAk4UbREw95eBispdcKNdWg",
  "key47": "5NDwYKc3XSnB1DenbF7zMNwNniJzQn4MELUUQrK34EKBtuutdvZS2kvnVbArBQW3m6UXReM18YKUzfcpagNyCTZh",
  "key48": "2y1c3FRW7rBNm4e8KdFeuSdnsvdVJ23myS1mFK7MQeLtCWF5juYGoWvyBxswaFSs2EGif3gV7ykZvY1wAKBY8sGW"
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
