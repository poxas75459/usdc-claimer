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
    "5ZYJTvKKJknmieo7zsd3Jjq2nuPkFU2xwLVCBrBRgD3L1u6z8c15WkTGKb4PP4e7vDKAwTNSnWUjaGygkaeR2qKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQgGzHLSPbKX2yiGd8W9G6TgNYLEHvWGMHeq8kgsjdwvHMq3QwrABggX6EM2e2hEECNiqjAm3ma2hDprQoUz5R9",
  "key1": "5JnaQNDjxNETT3t29Y4ruEsRjHkmQvPqbVQPKnJSgKRPKtt9JFgMWn2k28vj71pNus999MvZY8K6K9P8wNkjdD3v",
  "key2": "5BCtsaaK2apvnAJx5sotS6bgc3uJwjSYqAf3WrFq6EKXmYFuYSDVWEMTvun225FP8fzRfQK3eELSuwamqmMHLm7T",
  "key3": "5XvQBuuMppmQ5FNcBvbxQWaxXKRHEs1AQ57ddv7L5ATigxf329PfeZyCzxWpgjKFctn2j3q3RDVvxexdebcZYUBt",
  "key4": "gYs9N9c61RAMb8gHu6g8uFf8qx6LptzVaVx5FCZuY5WHRJXCjybNf2AS3yrCjfQt76dApVGJBd4BMuyZABp8mSh",
  "key5": "42XC2nRZ4sCDgGTsmMQB7vxh21na4jLae69co5QDCKMG8V2jPDkVTyL2fWv2zWiZKDSuCnKyrWdkvMpJ28BbbFQu",
  "key6": "prcGiZWTG59rrncE9ZfcAu7wCKFBMaxziAch3pY1FaR1ZiyftgqsT7Rp4hkk3NW4rm6fzA2AcuN3pBjFFLc5VV9",
  "key7": "fi5uoJHSUZzffDh6m2Crxuanc2ZBFi3Vj7CQpvmezxYVyyghUG6JFHwa4fdTD3vgq4uA4tc5huN5t2jgDu36pAC",
  "key8": "2M2C3FVSXuGe25z2mVYmXhPkGt224i6FTVM2mGspJ9eqWnXLTfFNgcx8YQpSKZrtTLBud53gkDYgHrgBPVDK459c",
  "key9": "3fkdp7dxzX8mgiXvNKxrixzow8iycGVDfsEeTMNxpxgtawt1GjfGfV8YrJmZ7NzXAsFX58gXDVf4bvhCGZx6qKhJ",
  "key10": "5BqGZhKHrmhumfEiTbCfFeFCPKzBpJwwipxz3kcBDiufD19Rdbi5mphNebCMsex76xKWyg9PywQ5FzWr7g3h5ePY",
  "key11": "asqX3tgCdU2P7yt4To4J4rNid3xdv7ntNy6uSgzAf6dGtiUoGAA1JzsH6oRpCGtk7raFNZVZg7VMVQ7SzFcb2tc",
  "key12": "2sp8P1kQWdVTgtaz52gsBu3kxjS3jCSntVpZMM3VJo94FixuZwxNGWRGVa1bzJNN8xgwenzH1VHyT8EC8HAV2khb",
  "key13": "3Gc65ecsVnMuVTfhtMtaKchpdy792AECKNQEbooAzvvHRervnk4vLN5JSGYp4s87n58mqyoLSMXvRrd5yVQravHi",
  "key14": "39pmjoMtvfcMoQLyzhsXmzuXYSR3DGLq7ohnJgjoKxNsUYV3W5hAwxnQs5HqimExs5L2Eypq1BFhVP8SKVCL9Y5D",
  "key15": "3TKgmcqUc5Ab2yPn7z3s9C37A5NNSr9mikfD17EY1PQqCepNUuE91wBWcYzfPZ2BdkjPfgQaP7ELnV7cJnkK9DUt",
  "key16": "2SkBaj3b4GHj9ZeTg1wfvaT4gmuGdAphYQgJrr7qFhEuBimpZ5tGy9YSXGYwLF6QaagZVnqn9j8NZKNer7dT4J6n",
  "key17": "3UtdzBfzANaCG98rANSEc27cpebHAKyvuES6yLQrtH467ro55cp7ZSCHtocZ6xjUv2vJisFSJ8bQgBoqXpJ9Mk9J",
  "key18": "5W9wEtZrbrfHShJzWmqhWbHHL1HTUhuFoThT5btYtyuVdQRgdmQ4SHbiLK2gR2eJpwf6GrUqnGcbsYhhLyGcUoQy",
  "key19": "3qXeCCSQBhcTAyXYp8Wbtp5QtxDbP3a8YX7VTgyPH8pbYP1DtzoEegg8AkcS5LvHVHuTaPz4horigKnUR2uwC1Go",
  "key20": "3wk3QqJJVxDWU66C2zjrXhZuNwBV7HzANn7948TthyUUiXN5YK7terDRRLQNS9vLPG4DSx2m2ADsUyTPKYPagj3U",
  "key21": "3DhdVeFQqr1zBroZdhcaTSurAmFGr78g1ezZMpR78MsVimDf1dzdQ9GThTZRZb25DVuBsMf6KqBdb5Q5Kqkk1xw3",
  "key22": "5Bma3kcWvfSLsz2UmKLgZUaGfDspKxjMz98bZwp7hw85XsHXF1tWWNH3hTbUoT7aXuShQVch8bM3GgdL8y49p7mu",
  "key23": "4zLbzahGuBtJr3UbzrBMzAGd8PmmCT9t2WiXU3jFxP4hTmPrYFW3UWqypupfYCJZphjo5cnFi88viZDrtBKgdoa4",
  "key24": "2T77imV3Jw78YmW68hnVTySGcy82Ap1NAn18wDGbMfFt264myazjMMxLXBeLQvn1fiW3KBiNYq6vbMZdFwAoQcYy",
  "key25": "3A1bPypEbeRcZEmfHX8R5WzARCm52T1nPjkM1yFGj1Mgrs9KaK1mE8cqwwSLRER7Bv4f7buSD2zoBMaVw8QZ3Xnk",
  "key26": "27q6NxTWDdZ4qZhLibCo4PZrYtVJGDL6TSAbDc3AAk9HTJvk9tw62cWUkwxUHyEm4hpWLNqzeQZvYHPzUAbgyGa9",
  "key27": "3Yw1gDJTfdNHmoDQNRMz4p5EyTysUvUEGy1swvpTCQtPREsJ5wBoZ3NdTa5yxHf4BMGkkkLbARUnNQ49bUsvmoDv",
  "key28": "34YVGUg7ggwCqrY1ojHHPV9MKtjhsgWQBTx4hCfTPcfvmyod4pMozPCpxJj3BrFXM3hvrRCvZMGbk27n1MLMnoiM",
  "key29": "3KTK3J5Ee7ysQNGhfcBxGaWtXiSa9jfFm6QQ8Rd2tvd2wjcwFTGr2nF432DuN2zYDugNUDgHQVDFxX6a8rv9fFXU",
  "key30": "3rBvdgynZgBQisK4w3rZr1fRYugBN72kNPnvhUNbxPVtxgNEWEJy2kaYS5mKEKnrUgNcB4ZSkVLu9qXVdHQiwHvy",
  "key31": "KznWHWbUE8eQMCJ9xB6FG8xSBZHbvMi3KyfR6qbG8aVfNuzdZkLvcfTGbGeJnu6V3yggtqpqrZb1DQHAFUi6LRo",
  "key32": "48rGjYEgBHSvyixqrwdYnHsVqCT1ZAHG5iTyvpoStm7W8H1Tq4ap39AVD4axUMFSFwLBogfVFgnfPpqQCoXJFMz7",
  "key33": "5fHjoA9uC1tCneeB4Zefs3JGGezEfkt88eiSFuN7TnQRDRh2zbeSrbhmjMf1EnAgf8GJixt4iuvLxnjiMxBnaCdH",
  "key34": "4YtHNHoBHKFWK59fC1qpHv9GrhrtxzpM4jHFyMuALyoJWf24WGaWcAaKoXxTeoeh7d194Z34ubDM5sjs1fEvNSmp",
  "key35": "4tSQhym5NHuePheq1G5uCw8kndifihyj6JcrWcnJBruBL6nRMKZ9KioUEgUwowhXzF8CXD4HYY4AAmew8KAozSsZ",
  "key36": "2t7hE1QNm9zZQxsyBduCw27nzGbcKwmoPhCN39mgrvvnRxRZrMW8BZGESz7THgti4SZmXqEJzDQvmUaNE38nHxxz",
  "key37": "4RLt5WTyrvCbimdkL3Dst2L7cWh4VeBbuYZP3S8sDnunP8KFjsqemnM7SQJA4kjingiG8GAT1Vnq45Hv3rPw1eLc",
  "key38": "2HkFGoZwNhFbbvaaFWR8GcE6nuytkvD9o6hV4H3pfQpNB4sJfmd4rZaaW6PwGgRMRUYQziZCPMt2wtKjzh8TqRdA",
  "key39": "uaxUoprknVBiwyJ8f6ELK3dYvrTWbptyD5Dbus2e2AMycSdWQy9FaMfBft6UrawFPiAvNMd8Vx8gjv7ciiQ6Teg",
  "key40": "3UyAw2fcpYiLye5asETLMcXrCRETkLmyK4hR8X6vhyJRgDF54fYnRaunHRGDMXPJvYRmBLPUVePkTdKYXnQZAXWG",
  "key41": "57K1Su9BD9viPb44BBmWXrvRWLfnoobtHs97geLcGhH1jBAmCYxNbH5HVXtA5ooPvG3jW8mY89aXv7H1kXZ85r98",
  "key42": "TD57dhfak1soPghBABLeht48dXgTjHbBwJsJjXPgp8MNf6BuyraY4wQyw1FQywL4kCS5QLqSqcuVoWpAafmg13V",
  "key43": "3LH1Nnd2jmrK2zAkmSJChnrTY9qg61tcP5cHsJs1L217ccz1ZdcAXTv7MeX4qkhHpNrHmQc64i5iTvPtKpAgYzav",
  "key44": "QFBWsQZ5MZdFjcf75u5mPCpP8HjR7EfxFtuPc1MT73SxaKKKXrWjDc9FZ71RtKjj9MyJreSPduNmsvxBcFSTwKz",
  "key45": "QKt1CZapedetNHsy9ZU7kLQ6BZqQdiVLAPpEi8uB48NYEjZBiWBAc8Lswd9MCXdCJvRs2AVcobZYDpWntgfw9Mi",
  "key46": "3srGpFFXSDSoZve2xKTb7cL5vSa6kcwP5qibcraHedqm8MiBZACr4umkFE7PYV8qbN3GDQMd1QJqbcZnRvxXq3rK",
  "key47": "5HcsTaQWDkyp3zSSCxjtZVCDh4SmDzEwBvucAohJbcx6q4qANiZyugPVCgDaAQFF8Cf4cFUvnbkaqqYWjcCxKdND",
  "key48": "4XjfeM4rk2ajCqbsad6bzCxAXUnkqeNbvS8xzrZdSVnwoChn62crCUXRHsFgEeDv86bnB7eAozYR3XcmZpZK4TE7",
  "key49": "35hWnyJjxtNN2dfRPkPUn6bVscc1fnrjpZVGsqFkQMERbPHh69Qf4cmGiFNYiomeYhQoeFv5aWVby7NfK435qFhZ"
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
