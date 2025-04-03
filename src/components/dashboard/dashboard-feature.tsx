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
    "2Dqq4V3cu7iMevcCRfWVVBGC7XSpczz1Ey9xFS1XmzXMow8wHnyTN3xX6oLgKdvCr4P6PAwEdeCXezBhS9nQQNUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbQf9ZAPPQr6KkyGsDpkYBoGxSksBDcKzDNdmVQDJXJKmfMMPPPbJdAMjD3sT1KsrzMeFNCK3pfBBSPeNNbGi3E",
  "key1": "34EGLHRH3XhpAvtzx5o3gFZGTH7SYx8NcHVdrQhH8xRWF8LCCqDD3gShUrHesgaS823VqhZqKJL7zbCDgFb4sc6Z",
  "key2": "7vNvYcLL1Qxzt3JQMMq48NxG1dLzfHmhEoGxA6k5CifyTaBurmMoxv3SLMDWGYq32ckp8rcLNp21zJeB1XysPjR",
  "key3": "5eSjcgjNkhwaUNhaLicBRaUdopZg81xYrzb9YqQ5njPsw8k2NDe8pRAwdQg36FQkmVZdYVoYYACCj8u25uvUSXsy",
  "key4": "4yUDAYUJsemFsoVW1fduoqR1U5KW39K9gkG4i3EryJAnLjn7rBqqpPAVqcPQYiLZKS6cW3rpniKbBkRuH7GWPbMT",
  "key5": "3g529u1KA741kx8qufjE8rnp4AHDsosZeoJ4vGSgqU2fg5X8hRh9D66fsGGZL96tJnHnqJdqcK2A7WS8Hztobmb4",
  "key6": "4NJjHmpnaNPrNQB1PpwsSyMGkpbkYiKmvnnUNruSspsSc9HLnw6tvZZMzi2NSiLT43dvXhA1VNtjSgaVpQVeFF7M",
  "key7": "3nrXQKbAQ2XDG7aoaYG8FHvPKPvFxRX1kiduLpAJbdaKYrrs3tY3cYGCYdgSwtrRBZYPbnLCyot4rGaRVtpyF1Kq",
  "key8": "5fF85KfX1Euinkxcy6CA5qcJeV4qdvfpxepqQ9GKLhaBQjvP2BHLf9nKGCf6dAb693GKxRpcsuXbiQ2sb8aDTYoV",
  "key9": "bbTDFiBx895WW2x1xYjVfaB1cuxwxxhn5fc1Y9c4fAaCXVfoCpD9e9TyTV7dzR7hsGNPo3hJRr3dQN71mqGjRWK",
  "key10": "5oEJCBQJjL5HQtCkYioML3igDSVXnfPusG7YhbGfYgySXbonCeESWtZnkAJD5wemvJr1TnR2kBRtr9RSztaL1i5e",
  "key11": "4eh16iGtRjnFpJLSEBQ9a2RaQNDfs8v8YsmxPUekn3MzQGDbH7SBgAwfqs2e5jQARS1rqXFCPwCfkcS4NeFhukA9",
  "key12": "2BQNkjnuNn8Yc8sMyY1nU3LFyCSDoXFenJH7hQbxQAG6o8rCtiEgn1GbArde6QijnkUcHRWL8G5yoexYboWXhuw",
  "key13": "3NuNnuBYvcdfbeB2cdaJzUYoYohKje2K9GtKUALBozXMiZ9NRzg5VCKAbdpj1h5nVpstqtWKChprsV26dFQ8dP7x",
  "key14": "5rcf6AE4pa5wRmXeXEjMyihdGrmCvzcWQ6JbYBYjKcokq9c4tBAVsCVgZCWECVUkm7w3SJcUD17FBogQGozsg8SF",
  "key15": "2zTrCazYxKLdgAaJ3ttXt6FdGiS1CAf4Fk9cZu8HiwED1NoDXyxA5payJPp8Sa3n8uEU4WogUBQM36B2ZKrzNtZw",
  "key16": "2Ag8BkkTensKMpePq99k64GZeqbwQNNcecKpQ2ret8kicTxpdfTo9xXHoMqYLPoDBcA9KnN8JnG5HgGAYPBs7arn",
  "key17": "56YKkQyC86YsYNh1jg52RzE5ACKxrEEtbN2Z46xL1c1pjpwXJSvtuM1cMUnsPFmnKrLFpSSuLBWmAyZTghpDkGfr",
  "key18": "4P3dHWFwGwo247dWb81MaFezoHfmJgJStyjFbA7LXf79DjCkhxAct9xgqVhgcqxv5jxZsivcawDSHQdXyYKwKDrE",
  "key19": "4gZ8EzTRx9jLPiiogFRLHYvDsPRJcQu9Jk1n6crM9qK8n6x4JdQGCXthhTm9vYBSy2GzAuAumgD2o4rtsaCsoUPk",
  "key20": "k3V7amm1Z5kSAXL6TsLFvQXFSdo7oWw9bTZBjPXwjKCy1fiKznpWzTCDVCJkZsXnaS5cLNne7iiPSZP2ZhiyW5d",
  "key21": "7eH95sPKDg4nMSkNQMjLCyGZqW6UbSLT5TJJE41P1FecsL3h3euTvKGttPdwNhbvF7iqmbtKrhjqjnV5FnuLnGC",
  "key22": "31ucQqhecsxj6791rBGDYL4N1zREU6HyQDobD2AmwSFzuamkCJSu2sJVRLfFaAd5HVJg8PuqN6XJMgqPGGGV3ZzK",
  "key23": "umBGkRaPwribpikosvMbbJyUP5EvwYJ3Z85u6Nu87tBM9j8P36F2qsW7N1R9MKyTsKdXHJVNrgQTHrN82bKKdji",
  "key24": "3ah7hr1aXpDJz8QsBoAm2qtf4TtrrJTTasSG1rgKZ8JgL4GVSdWCxsxiAz9Yozgyai7NLzjQcfbK7BZR5pz1mkJJ",
  "key25": "3z7F1VvaiQvs3LQhnZ1TxnqTaKNhubMqZYaxAnaVaob2YzYPqbGFMXY8vrwC6QYteEnbiSsdCK6rVRjWXsKnvaw7",
  "key26": "J3T8Y16h6hyH5x65MsaJ3WerkgTHYjgUGRnWaEwojDMammB7cNiPYzE9LscsPiqtsKdXg98jVf2tB1VZoxtfRKw",
  "key27": "2W7vzTMFq5wxEikyV3dDbiyazrXbRNXbLxWRrBuKVRS8XfrRwNXEF8rvetVtr5LomeVLjEYKDLUK2nWMWjQQC5Eq",
  "key28": "AYk29EHoQYpLUMTvgBSxfjREApUJcyqBSGfBAWkctviiNBTmGNTtQSJ3qCSCfPVAkXptwJJpW9k4NZvwoNToq4W",
  "key29": "41zLVhRWsbrwM51t5fPuJxuDPYXwRRQUMypjKfUsxqbry57TVMJDQoqXvf41VS75wZXtRnpBp1V2MTWrNhmb6MCF",
  "key30": "418JV3SbdwDP7cA2kQrsyzz7wgHxToxMdYi8rpk1sghRhJ32n2vVx7TktaR3erKSgo3CsCpDqKcmT6j3YZv4WJBL",
  "key31": "52SoPv4GD2PxHGYsJSD2mhjZi4TTVZAMNqDo21ech3fvuwSuxrBKs2Zu464enbQJ8tdrTDZfAzaExJsd7j1jUaML",
  "key32": "2NrtnZbxtHghN1L7F5bCDxG7xSkKcqrxz4t1aJMGk9uW9s3KiSTzyzRkGxJjsB7G4xA4NRJoEDVoB6cnbgsnaDwA",
  "key33": "5dhQFqzJjb9WRGjCS1WhjH2DPYg5ELiBjf65PEurtvd4USHz9JTriJCfkfJBrKjsY9eRnEXgpWP3pYbwDyFxZPTM",
  "key34": "2EhqXGFQYuYXKPk3Eno3YsmoCY2vrcB9d2puuJSRHH1LK6eWm5xkR2BjNANis7AUDwiaunboQ7q3r3dGLkSAuyHr",
  "key35": "5PYUiWbvU45iefNgSnXhRZSFGWEj3ynyWphaVUDHqiYZw1N2qKKvcjt5WRqyFn2Eh51jrLYSESUnSmg2GpdrpH8e",
  "key36": "38QsDnBf6zGfPo1sJJgSH58k3rnX9r1nKJTVmYvioBMNThL7Ag6a84YWj4ramFa8shzhY8eiFzp7QFHDcohsALts",
  "key37": "2BuLgnKaxagtsVwdGVZXgwr1jji5SZQjM7uvjnqwGUxB9XHzPxj9fhazm9H2mhePSwB4uuKdksLP7v4wRmVaPneP",
  "key38": "41qLo8WQRHZ95v2bftam6bHh3NCUbAopHesYrcNGTeuVVK8pHpPCsKmWPJeU1uYjKqL39uFxi9MkckAmG6DnNk77",
  "key39": "3ydAfkbbk3ki8yjfjuR147gSguB87Uny9ATh5SSN1GxeLaZ35dYwQ38eR4DYyXTAw6pvBfEvWCpNL3uokdgM7UXd",
  "key40": "5j3AAYcoZhpwkHqtSeJfMtcnej5MryRdpqktAGt1r9VZedW2Kk973XvZSRiKJcSwa9ynefmanX2Zj4SMfqpcGfUD",
  "key41": "5EmsgpUDSQBKSDhPuhAttWeDg7nfLwL6KkSLTtQveixx8PaXZasPtCuCLQppZ3DEm3VBVVsrWsbpAD3jyvZyrNpY",
  "key42": "3634b4o4zB25rCyjReo2BdzTMBZoVfmrZwtv57SwCq3MH4MZRNZmuGcPvJNKaQq5L3qBShecta5QnyqabJ6dSWT2",
  "key43": "uTXDiwhgajzqDaoXqtvY6C2SH388LMkvZCKjR6yymeA8bXSF62BYkGfSJWwGn924C9GjYsu8oUCGiDaiNtDKppJ",
  "key44": "5bwSrn6CbE3t6oF6mvmoXmkkzepAVQDpVmTxTqJFZfuoTYGhLgvqApuSxr2ZA4uTcgiQfixcTb6tvodFaWhXwA5H",
  "key45": "4rMBbMKrpfdJGcYxfGsK6GQSpsung8Kw8HUZPRGVsYzqy12b131EG469XhHP2pbb3RixPwTKTyTaaibuU2gH2siJ",
  "key46": "39cqTSyEQXkYMBBkuzpzTZM5UfmNdurnDL4tFK49EXTjnKGgFLNjCjpQoaED9pbc1R2nsSMcMz6LFxwwBu7TVJX7",
  "key47": "24cnWu3Aj8FXMLtwwSmhiB9yqJYVYJHxku7rGzXFvxAPDDChXmXf1m5CBzZHtNkkaVvMygVqcgRUQUYPu24eCyza",
  "key48": "qoeAj9er1wFQjn5Mm7pvJHRejtKoYfNZVSFWcRWzqRAXK6wXsJ2JmVF7tcTcK7hQnJigpr5TeE8LRjN7swgrkKi"
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
