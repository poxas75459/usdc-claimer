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
    "34A4UXti7d5CbRQVYptV3dbxsfa8L47iDvhPXxrUzc8Xy3VwwAsBVisP1QQZpCwvAiAuubgEFueyhC5GiWBzcvdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKxmN6StrGJaDq2XPZZBUXXRUWSM5E94AqUASRbegRn1gm9pQQTWsd9JV7ZwuT7RvYJmaCGKMDcKgynuzfqZR5t",
  "key1": "4PZpMedvz3dNS7yr56sQroL5PJhT89rxfegMK7g9oBpJBRDC4Kwvu7x8kMud5Mh49H2zxz8YnWCsaVBWZVqFPkf8",
  "key2": "4YjBkFeUb3JdHijLRXRpWGchMvsSTiHRQ3dEAXFTNi3h8SHQKFZFE5LcWrLXQSM3ut2c2xD7M7BmZxGn1cqSkA4z",
  "key3": "5iMGq8Eq4UVW7t5g9sWy2but5jkWw8idFKJ3uaknXMTbYAZyDwkTyYZPgcZh2ToCqTGdZghus8Y8Pu63id5TQaK8",
  "key4": "38fidF3M2kvPnxRby2XehnwYxvr6pofZaGxnWPumQJRAHoMTuKFbDx3RSFe7Qf54p7HHros5ymDVXWfBxJ148Jco",
  "key5": "3tbzZLFF9u1j7uPovFkjABqB9k3LtFabbHtZQkV3Bye7fqBtTx2u39xhMKCjJpugs73BdKVV2iazoxZB2VqcdSpM",
  "key6": "3cV5hckDX56KFvDMdzurKhaqZDxzx9nNJF5Au6C4XfPnYscJsQ3LA69MLrs5NSUYoru4Ez8QbjA6fM1iXNHafR1R",
  "key7": "2WyPzknGNEQgP2547mJzu7XGwLG4cbbYR5tj251ZtxFyb62m3F1DRVeFzR4PWA9hueXhfW1Z6vww8WzG34mtEvx8",
  "key8": "BouDhtryZLcVEsQVYGpvQsFHXJ3JbjgWDNBqWMW17dEsaCf3NLpx8f4futaTMHAHDVzsywRm7XWxY5rhdy85aLo",
  "key9": "5gyx4WTaDNJtM1nNpd6eMhJc8boNTKzVHoWMm6akuwwNbRVVQgawkE1qxSpWodeNgQsQ3UrniDRfH2goSaPbGThm",
  "key10": "uPuNmwzp53z5Jr8xMQGtyCTR79wr4XNAgnoKDP5dKcqLK91pRsH9mC1JcdiNDqsM1Bseinc6VxZvtcp6Jo5Kt4E",
  "key11": "5ho4SA96RSxpPF7dBHKCZKqByKDCHFpjn729ptxXXyj91ipjQRpZeYqtYcZCQxneNmCqctmbhYQY2k56yfXwzT64",
  "key12": "5KYbBWyhQXkvidX3fvVjHnM9USVYRU8ajfGtPcv6921iSeUchfsqZKxyMP2ikkC6wQNAY4tSiiWcMMg9mruv8fad",
  "key13": "wh8hQ5ispUP86CKAUYHv3o3U5HqwLSYHq4iMYogWjq8keuhYJJeXSoF29MWCV7zfXW1hUCxFkMXAFf5AY2u9XW6",
  "key14": "2RyWgtGFs1Q8KuagZS1D4x8uFozSzb8bjARUYRnJZMoT2AKDp9PqTv4dmzK2hCskPH8NSwvrSRcXyjnDm8qb5Sb3",
  "key15": "AFq8VKbJKN5fpbdLJDKw5oSmDvvry4LGme9tvd9EnaVjh8VARNS7tbsAC6Cs71MaAVCUM7pBbR8cuPHb8MVkcyT",
  "key16": "4m7F7s5cGk2skWYYdh3rqMP4v1zw1xt15gUxLGHWzbjQM3wBucB59KVzA5CjiEcjhdyux9Z67vpAtDq2boWDj5jp",
  "key17": "48WSnUU7EpYwH6AH5eBQgdoYcUqZuv2Y2fgWy274wnLCRmLJhnCkZ3BwaVeSp5vBPWgHMZDaeFTyYJee2WfyTGiQ",
  "key18": "3YMziT6FsyY9hd8VDfRk33AxkhfEATZfpbiMXgPyrHfQvp5zXUzkT8AknkTpJNCziGqqV7G64bpb5Qrzoao84K3o",
  "key19": "5BGXHcGuT88EKgr5NzbBEx2QjeHQCyaFi1TpjHKMXBVyh8RL3TnWqD7UrK66zP7yJL7DWcvD5AsG2Tg2XwpwniZP",
  "key20": "3WctQkhogjAD8yhyM4tZzSjwTBBcbRfV3myWhWtEbUn6ASAZnZ4Q1mXRvgQuAznHibZ1PYY8tuvcpmUHKDKd3jRJ",
  "key21": "4SYk4quj5x3nDWRscE3raRCc5iJgax1Hcg2YPFdxH8DX2Ek5BR4FioDieFPMzrL3Y2f6CaYL5KhULjVmBWManKjx",
  "key22": "BMWUFCYhoipgTg9NZAC1wYaaxcZEUjj8nQ3krbWc24BCyF7XTJRKvrUqKHTtJTSNqNwbTnoz5vWtodF6Hkb5Mm4",
  "key23": "2haq84zLTdcmJCcdL8p3cR3RQH3UkCe5S6dLUHyuRGbU5McqUGAeSMCsqH4Ag5vQjVY5Uc6LmjsgTannLgp6pAhy",
  "key24": "2SnUYNggDToieDrQ5f9Kk4uLtse8t1Rqkou3hWnVDGft9Qo31VT8spDrxTyW4mefJM74K6TtwCbk6WPrJBKTmEbq",
  "key25": "4AZswrr7LU3WV5pzgFuWh2vkkNkb6tGaU6hPSd77RFGk2WKrwuBpMEHgHxWXpCM5uBsENtZ3WheX3nATBykoZDSm",
  "key26": "4DppQUgbELmhNNuofxu5a94ofEa9zP4Ksi6p9pbzwzcoNNsSaYhY2dXLZ65x3pTV9X1nxSbRkQskzfCHDBLtTmkf",
  "key27": "2EwgMAG3FhozyTE1QSaKG6o455hreuhoHEoQVMXhEUZdy5toZyff77FmMYzfimfNtQvW8FQNP7pkcQ1DhAAu8mWK",
  "key28": "53MDFQDktg2D3euyEbpw7YVW4MhpuCNWQGGmKZB3bn4BrrMY5KAWTshQWwnZhMQT2mfx5oamboUsYx5gSjG7CLoe",
  "key29": "2rUNmDGyRWgSutkm661tvRo1UAY8tQgxadwgzhSrsvna171gN8sbJh6z2EqfderDds1LkY9TuZ38THANJnTbqmPf",
  "key30": "3ynoeDPYRyoL7EiuQcFtCeNM3anKUnjckrtaXBSppJdQ9pxT1D9caQGNcmBszFyBicPzncANBcQQgTnQ21tXzHwG",
  "key31": "4QabyTratL289cYqaTpKb48W8wBR4jCbCcCnE3UJB4HSUi5rx8ZkYybv5x18ACjhVYVhgN6qHP7DMdUMWRmy5BDz",
  "key32": "3rTSCrQQVUL3Q8YL65zpmSqbsQXq2S5TgapB1GMtavPno17XtAJSBbXbVKW2EW9YuxVRuGnBkp2Ptc8TyJsYBp87",
  "key33": "gdLV2g1uCK9U7ahnYAB8TNTHf9KuoLhGMv293W13VJw92ZGXHFXVVwrWumgFpjFjir7ehpm3dK7mdgkNwchyTqQ",
  "key34": "3Q21EcWnLnmKfFcyiSz9EomWEg4PKNxQfPtkgiAWncHkyM38dF4eGu1VnPCGHd1oQ4mYjSbdbC5Rvjsr7anps4mv",
  "key35": "5TbgKggS8kPQ2yvWUF94JMUbmiUKpXzSn4zXneqsoSQjE6dXQBknGS5dtjC4ymvk2Chdgfj9KudHi6LH9HFCRexc",
  "key36": "4v7TShaKwNyzPTQXmeeSJvpycWkB6Y2T9Je3ZHyPUeuY7t6tprQM3Su9AzanEZCNu2aXeUszVz4nM29YVz2aVnKo",
  "key37": "34Jr9QGuBm6JhjjCqNmqWiifdbNVGAsLoBHyqeD27TEKFHtp2ZANQRjWw6drupfRcGXe8JfemtVfdQ89Nto5pybm",
  "key38": "3nf7QTFRjrGrdKEfxCz6jWV1161LjWEKvk3X8BcddeCrs2FrqiLbNLiHpbHHt3e33mryewytkWFFH6uTg23XZyW6",
  "key39": "2xsZRoTaT7yk1xUYpvx599S5SvBnQSECzXAadV56jAjjsKKWbGYb1q834F7xCKwEd116ctrq7tET9pSXCfypHH7j",
  "key40": "2yVLk6xnj92zCoufo8EK6QyDiaki3WABu42rfR1aSQF6f4idBpCwqKJUBtq25cfU9MDSvzPpf4CLJdJKFtdLbNjp",
  "key41": "4pBDpos5sKpY88ZbNXrqKgQkgRfdkMEHdCEWvsHPom8WNqzJzvT5FRpxxWFcoFtk8RjeGKueTnY3LRP5MxPxq3no",
  "key42": "342BLszQ4UfNCHwCWQ3rJ2ZfcDdV3TcgorDmkgEb3Y7JFpaF78CmgHXRjbUX4GiNpYmLewVUeT4hQQKYi13QxGFf",
  "key43": "3oHEMUXxxPH3aeyyykhGh96e6p7PaY5pRkmLw7xGmj8gSrfZVNqTcBahMuPUNyzsUN1ATvgmH4929nKr2DgNSCvw",
  "key44": "2bsFBSQ14VhHKLMWPeJf9NAJ71Tz3QuaWc4dVAXuxJfE6Dfzkb3AUMcVb1U1z5oTgKd4fkJqRdJf8y1iX2rvSRTX",
  "key45": "3rNAQCDJaVyUnN1JznSKniWbZYotuSrCtduSizPdjbC6VsgjGqt7wvTqKtrxN648stbd95fceWMcnGbXiyk11wK1",
  "key46": "43QWmcZKkViCqaRBAZ4evKUTUgoFUM4Uj6pucst6XauTBCJ7rDgAJT5VSaXB1fdRuw8SdhaqPQvvYxpy8L6xwGpD",
  "key47": "5kF52ZhcQkDk9gwTLAND3FqiHafaKUhvhAwuVgxkovbTa951AyWns3K4pvGwKbEmth5jpuvneBCARsFP4V6QvVJ2"
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
