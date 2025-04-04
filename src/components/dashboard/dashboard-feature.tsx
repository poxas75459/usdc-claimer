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
    "4ZXc7NHuTU114mN9HyLdXUxc5nYFHNJgcCq3KPoJ3hC697SA2DW6uHG4i9Wbxyb99kE2awXU9Kf2GoQGHMzqTUw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeaRGaTZwknEVynVDP8zgtGQNRLNEng31KZDtRwFwYNRv9xjxSLkZoNEkTkWcLK622EFZjz9KqKnNR494JX5sxS",
  "key1": "5iUD3nN4brzcdGssVbShZfiM7dZLfmftyJyJH33tr8pBC7rcgcxj8PAbq3WcmDwyRV3KYsNThUjq3BBboC6HdeBP",
  "key2": "4zPwTZhxMRygiSHpisffDfnQxJucUXFkAqV13XigkPmgK8mG14TYALtEbDfni4RWL9ZT3v6WKzUdfTbG1ZfNyfw6",
  "key3": "5K1V8g3VXbpsAgi164tzP2ZQuLg7R4qNA1oPvbDNGEPbtf8pnkBpzWg5BVHfGCrU6zemHoymYwtQ8bSmTaeFvDuv",
  "key4": "3nX2vy7uJzkcdoWBieNwgCygtyhsGZdhJPUREfBekooh5qBpSURRgddGDx5ELLxnGLpCwS4KcTy2gGAujk1Dfgcu",
  "key5": "4gdzjNEFFMrXp8JgxcWwycLevzP88DAArHktHny291aCNZeZRfzyJm6tiaAawoW6re6BtoUtrLD6mnbUyZ99FP61",
  "key6": "4cHMEFNgDguqQaThztvg5LPuBbKhMmZKRqkyawSvZgMopf7YaqNFS883woQoEx4GinP6w25PC3vKocLTuUqMhFb7",
  "key7": "4RijyTzmKMTMpjBDi9hmsKv3FjTcjVK9DVkHHBASoLBiRDDmNgDx6AU5cDE6NBK5ZxMZmsjya26gZr6JCja6vwwK",
  "key8": "2VPkxMMaiYf39V3PAYwQTJFD3vQ3HTpzoHYtq3h2hftPbLgcmiRU3Qn81hoBsxSoBiFCQTcvEndqsL8vhPB9pLZF",
  "key9": "2XArwF2xhHwyqJfBwtGH9EoALE8VtZRWa7ypk7AWsJ2pCf7RoE36ufgUs3L2uU5oj4H7aNX2mdLcaxbYW4dtyLCt",
  "key10": "2xoXL4UYRyut4fiHYRaQQVTQSSGreHKwunciYKCq76GEt4wZySmPPYa18uXjGbwuXZPrmHtQ1FucUetenvBDEcZE",
  "key11": "dgfSG7oVARpUoh8TZe1yxrq5JvMRa8sWSivGsciJ7XZGJhZFUskTNqDjioL58AEbRuR56NkweZMHxNCYc7CyEVh",
  "key12": "4xmMAt5PMtAnPwQRcsN6v4hZuDiGYNyafj9LiK1M3nPYUTDchSjHDMqWLuLo3WjQ5JUJNPBMk9xdGThvemkNCSqw",
  "key13": "2HHa6wqLYtM4x8FRYyQvZFAYJTiSfatWVNdAcsGSEkq4WUstARsrDyNLd1G1M3pyvGthAmPoZyDz6ZaoJQYhfjrM",
  "key14": "2RnUKJ48wuA3xVxhiUMqLTQrt674DRxov6QFx2zve9azmrs2zL3qKC2zWHxuAbdPjSEsL3PgpGfAj8LG4AwetttX",
  "key15": "5aTV7V4ntntanpfeuU1hcQrCc3XbtvGmUeFbB6idCSsRDVuAwWwP6KujWFkPTMEF6Ut3dbw5SY41GLCikGs8TdCP",
  "key16": "3YM1EMbX5g8mNihfVTnKHe39q6GvCGjoQSyRk6K9E7PAu5apXCxoAqggN5gEqu65ivMom4qQSBmMSpkrSNEvv2wH",
  "key17": "4gAP2oHRuJub7NCXvrZPSBz2oVSJJUaXRo9h3iyJumL5UECCkvsRG9b59gHHFCRVN59LhihvwNvCEtqxrqFDF6a6",
  "key18": "4YWyuZVsPtbmFeLRfz8T4oLyCuzMycNXXPF5gDzutDjsrGNkS1k3WAUgfKxodgWzGR8xSpSuziUbpe1uuLjUZQSb",
  "key19": "3MjSYMYEVF53cdoZ9LDm2EEifxT2Ur7RuMregYFWzS8PpHez9nTxSoY4XuzsY51AzfoGJZFaCdtEnt7JFZQS2CZf",
  "key20": "3TN1PpVcCz8FHq8xLe3xxvDv9TkdP1Drz5XDpchYVqV2HHTeBcNrZGEDL9TFhsfhrSs2SUPqLsZH61V5gskL8BKQ",
  "key21": "hopAdAU9jZemnjH3CCUCrW2h4NzQByzmdipLb6Xn68tJ3WxRTKztHN5tyEPaHYkH1MALoiuKHnpFykGxDrn6DD6",
  "key22": "5daxyUoPbsdkq8PYSr8pcryEGpAGdrHSkZ8xmTTTgWHL9F6Tbrcuqx2spKquhYZFKExURX85yeMKjnxm5EUbn4qK",
  "key23": "25RBMTfvQkvwMroFZ28ZdyD2eEh3cTcrmM1DVRccnZa8wr3jnU7wrqVRiLrriJtgyGhdjPdUuoFEqTrEnF1o9zzZ",
  "key24": "5QbLUrmuki6KT1U3KZLo45bCXCF1uNpFFjw6UiiJFTNGG7GB8FXNcSWpkP9ATvuhcBBLE8AcwwcWPcKv18hj59sY",
  "key25": "57FaAoz5JEeVLGGxwyQzifLjkc5mcjfZaBoAPtU2J6kp7seLy7m4rR1NKw5zj7jcC5fb3LamCNnFZiPJn3Ni9Bwd",
  "key26": "2ukereM2vxWSMb2CzB14iWUDevF5iZ4bx88ideSVHdhxXAjwcC86KkrJe7LpmJYhTUuneWgDBqmc4Wadp1gyrf1d",
  "key27": "5xMMheHKo1EvkXhqh6ms3xrA66YUCahnWaB8P9QY52HPjNNxMcCPkbA5vhAUbyxmHqrREBeoLFaKxsJ83aYjnyb7",
  "key28": "4UWw6QhE2D9KXDMgiqrV2puq5nkgqJESSWKoX9w4QL9GNBgz1pLRzDHVqJcyzkRuuRgRMD5JHBw76GVM7JCEVzEt",
  "key29": "TMbU3srYqHJfLfwGUJpjUAwxXXcWtv8n1qfGbeJ894GmrS1j5mULT9Ep2wA5yeyRsh8F87AjzBjTEmBduo1MHrh",
  "key30": "3H54CAcyJTevcgeKhBaQb4sFRkPYGxTSxmewhYUh8jbZYnKHBEDvUpN4Zzn1TW1w399H28rqeNWESDWyvQ2u63fZ",
  "key31": "4pXQXdPNLgRjswTFVT6kNSBC8SKp9mJZoxQLtEBdkCbSStfNiKZZKxCKL7i29eQNTh6hLUMtWRBnrJCh4ExrALqR",
  "key32": "5nhz5zaHbfRn2aabBmxiYCEuWC7j5pwWVSPPdXciR4mhqZr5EtHLNLKTvWAyovCrkktG75LUa8nwC92HtdKeCrce",
  "key33": "u4F4cFj1o17rDU3tX7YsJzciaKafeYtM8TrGPhjCTUj8dVBgSXP1arLAF5yMtkxpBtiP79ZmGY49W9bJ9RRTDJm",
  "key34": "4fQfeYwP5GemPwnjoaRNR4TxAmBuka8TCxBHidmsvYBLR7XkRgG5y9GdtJ2xcAtAy8pcG5banjd6qA4kb9FTeGTx",
  "key35": "2odxpsD6Rc72e9NL5T6px6ACjkg2fHKpJFwvp5NLpyQ2KUUjB72xjSBLWnQKHKKg159uyhZSJMLQcB1LZSqTGa3s",
  "key36": "3tP1kkcDUdEEWLzVffbK5HUkk4G2uRtc8hVECk5Cnccuq9YQ3uuBHwWJ1QCDoPgXKHDS5a1YeMjPfwwXk1326FSy",
  "key37": "3syudwUhtwULBgNij2FeHEux7cCQvEWhgKtXzuC1TbexGDsM58miYQtavx9Jvai8Rr2ymxwWoS1jYhbYeMb82SVh",
  "key38": "QMGLZTRCFeMUzmrYChLYDWeBmZChpoUVCfN5ZhzcfD4VckNaUog9Yc4nZM4MLKu2oKTWasaovAaBBFvEueex4og",
  "key39": "3ahyD2iTH5JL7oFWZTT9QyBUr8tZnahdU5iBSqJePzN56iZQPzhhubUYgzwfhYaTak4jQUQ4eQULrCsvXkPtq7KU",
  "key40": "2iwhv2AodUyzccr9tYKy9YVpfyVM2GfnrJUYREC4yawL48xXv7ED4ooHvah9aWpGHM48DKkDvQXSBEXk889ytJDR"
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
