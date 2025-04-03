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
    "32n64epmfBxsnGRPkfvBwu7rP2mScCbmioJJ2kPvauDYfqyYruVg4BSNsGknyND2VqcGZfBDjQPpGqkaZxWPvZWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "boq2Rkw62YXT9eBCF9XTdLy7Aow1zT4SgBPGynzT4Psu1AdtadYx4VMZYCP3wJhcctBZJNDuhvQ2Wt2RNo1AvJK",
  "key1": "2Z9qLPnT9MQtKp9xryiHTv13p8f4hMXiXkD3sWdaBeYHVbP2ZQ4wPDS86wG1f9EaWQGsgujQJCsgZT5FktbHDjzR",
  "key2": "2cKzJfrd3HAUSBjLyWbjDJyejNDcoK7mut6CKKftqmxePphWkHyZsXJKN75TTzZJrW1gFBJArzpXheLfXmq3btCd",
  "key3": "3u7C9Y579VgdpEfeJQcAbGnAj86JfeVYdKX2GEGjXRU9hyA6pBmantyoPDGDVFhmSk4FVNFbuiXkBh3N7Xoh7STz",
  "key4": "32NxqtxA9JwJct1HQZQvfGaZvk1QbHQbLKBvtCAiDKiskdsnEuo11XcgJbYbUUhWyrHdCNBHiuZpJ4kAzvQqfqZt",
  "key5": "tK7FhtjBwjnPFkb2MfurDjQSeWJmveSmFrVcVoA7adGVE1ZUF6UkPYvfvD9uthNM8RA7BnEiWfJcQaeocgY9nAK",
  "key6": "u5BNi2JRo7qX5T5s919tf3afj33ciZVwcUut9Sxt7uavZvfE9QAjcFqHN8WinL6XYZhzWqw4XTVVUXbgT98LHKh",
  "key7": "5aQgbdGtTsFEzuavm7Lb99KQacmZCGoDw2Lb1D6jvpTGuXyvAWJnCUe8zN7dj3xP2ek3QAin9mEPwQhaK8PEtPai",
  "key8": "wn4jxzeaVLk6YG66pMZeXRteBb75qaEZeVNoqXcsVPTTAAjEsLn8coENe3PJ2dx2VtA69d3w2NNDZP7PEyHqFza",
  "key9": "iTXio4YbAJE88kz1rnsZeMJCzVqt99HJcJn5xSQRtAFooLVFUqi6YfsSf9So2P9uKZJwD76gzW4rVvBiVkiVLdR",
  "key10": "5fhtS8DoqheHsKJjJYEmms9ZnaqW2rup9qwoMFugcvWyczAqsLfwe8MfMYXCJk87MT2bLZFDJxw1aFYDzZLe4PVq",
  "key11": "4QSSbj3jcXFUvpjK8bNAGoxvfzQGgzQa4ac2sFabsVJDum7qsAtU8EUZJ1mKvmvUUFWaK18EUbh2ZtmCb7HM85DB",
  "key12": "3YkeSp37DFHGUzWAsGj6UuwUiUEGWpzYkVyjfZApMCa8y8UPNyHfgu7CMhYV4FaymTrhbjfKhEQQ5RHypR6UDjmq",
  "key13": "24NkdwtCbzYkjBWa7CWaa75LgEbamy2BZ67LNmNAGCp75pBNUYtagRTJK6m83bhJjDrFmDcQNq3bVXE2AbVFnRrG",
  "key14": "46JsrfmxmJU8vUuvVd2vWGwBQurzJnvuXZKT6KgW8i1kdYf9x92jAuXFFMxLVigK93BfZP4KwgnVf791du8eduAA",
  "key15": "5vHtGZakD5tKnGRGCV9XVhPDfW7TA5gMNDzvZmzZhDddU9rwTH7QnBRo9Gwgpa2iZDEtVWVMNT3bZ4PeaXcJTXPi",
  "key16": "4A735ARc5taqQ5grmgWXpxdN3HuEELJZGFgv7si46sPccHhkcorW72nsWBeSoXTXpbJaxamx7WFirGkJnPAYxb8H",
  "key17": "2bmAvcJGUQdAp3TByaVjXHtTBi6AL1pCvxLGwFZfHKcXDy6t8ToCVDLVJa5P577R451UEoYEWXqZYJGtJd2tCkpz",
  "key18": "jXnGt8d237yrEmDo3mg6SR2RtzBVjBTj85H28r7owZHCXyYSqsZL4oP7sat186XFBRnJtPjjdPpqQE4BmsLnjwt",
  "key19": "MLE9emmZqFPFKEmYihK7ENzMts5cWUxaN75mW1ubxbAkesWyvQGpHVdp8aVNKmjQXf8KwwwmUDevcfuHvrc2RzM",
  "key20": "4RCcF63JRzeczfL3y8yT13RMzUDwDq2bfzH81sAnv1ujnuPcxD2ztJ9AT88WeEQKQEnzZ9LFaaoCMfwfQE7Q9b3M",
  "key21": "53FgeZdFW24ZBCt7C5pAemHoVaWvDrFFJXiZYGSJyrVTk7e8B9hWXu4scUeUzL51KLbRRSgkUcAmFpq4bEPHt4b2",
  "key22": "QVEAYTdJ8mgNAGFu4EWnaew15L6H88enwdNXtFaSR69WCDeQ2oGNSu3pQP9TCdF9hWaefFdCgVkCtcBSvuKBDzm",
  "key23": "4uBUU7RaVuUCvMUHns6SeyXYDTh9bHnT4YVc7duZzae5mxabghKM1KEsaBsY3Lr86Mr25YokQfRJ6qKXTm8y9rQS",
  "key24": "5QyDXfMMKTQ6C3jKeq8DWRi6YUpnwWZAMHw5i5U8sAY1b5ioEKp2yTGDyDrkkCUaZk8FJjcRYufgugAwHCFnL9CC",
  "key25": "2pjngHLJxgRbbK3eYNFCQAy3juuHT3Apzva9SeNQqbkWHqb99Dp94rfP7eK9BnUhhHy6Jrg4T6M7X2Bgnyxt3UYE",
  "key26": "x9CZ6SPQYm68iJjk7oAobkYMUeX77invZXFHePAXAaFvagaZ4wK2wvxxvZcsQRKftiXPhhPMpdByLTWXmcuePxb",
  "key27": "42xWcMSchBNoLbjBWD5e5mvAbHKgyChSZCJHDq5tqnC6ARuV9ciQ1et95w4LpbYxWzb788rxG8mwKfakUjX4zUSB",
  "key28": "3tcrtd1nwhGmbK7b9cWLEwTLFeQco11t8CT3EpSjNMoYYwicaH6zHpPCmpdz6xhVLnvYCfns3xABuTGH492dzqDe",
  "key29": "3erSbyBgXFBww5ibXfaf6y3vsCQLSxmRJTG4J46rUs81pFDsCbbyyrMT6MDMEbq6xNLMeScjUA5iCN1UTunah94v",
  "key30": "5ktYteeZartPrDApp5wxUX3QRGMXDeEFsV87wQHFobbhT6zQTiTfTmMGS5o9mPLy4ZLNHrQ8g2d4pJq6ZQrEhLFH",
  "key31": "d9d6NEKmbyQgRTK1wXSug4BKrxN1GYk5ciAvj71VEfTYH6REoctBdHT7RrzVddUTZRXaM9CxQF5hPsMn952iHs2",
  "key32": "4AuyS1W15v5gJDwkzrst2b2iNA2m5yvAPUtPPYe6Wbtg4ZaGPSw9jzkDLs2hgjXv8UA1ewCcYvaoE2TyXf87S7DN",
  "key33": "5un49AWQ3rFZxi8gUtXUAvYaGZ6oKdaJ3Gvps56YcUSGZ3TnRAMw6y1ojVAwpNaVL8FWJxHeCKabeMtxWPoGsFq",
  "key34": "3hSbDVaKbTf5oVCdF1pbh26wX2DUqkSMjpKt4opNVLezEdxawZLQ44JrJYzjMRd3XXRvb3wWX2CTkeZTXAsYW1gS",
  "key35": "5VS1GD7N9ARWwL1kgzmzkpz29Ww36SUMU65kYs1fuSG6p27tbkHt7Pvoeo5E4osXzzrvijkDYpYrgvpA7ZwNFuFq",
  "key36": "zLt8V3FyRQmz8rEafGjScvYuskPdcrRarnASnSCLyJJMjksYr3zGx6FRFigMan9DSXiZjmaC2oUv6c9PTR72g37",
  "key37": "norv9rwdQzx36MjZen3R6nR3v8bzUdNyM6YCAf1QkMELrzhqF9rZvueQirgmn23VebjFahSXNZBEQeZgkieLHJc",
  "key38": "4ojrKx1kAn5rjVYJK3J9jnmqQHFvWbfGgrCsKKfwmMwCqgc3Ktm6p1yW8epnfRTTd8AdDasbsjWvxzShp6Pty62x",
  "key39": "2hhWJxVPMnXszBR96rPaHuVT1yu8JBTeSQrfEiddS17jz4FYrP4uXPRrKM3Tu8Liyr9ZdNATFyXiyuqT73BNWoKu",
  "key40": "3a1kZtikrZbBXAh8k6iknAtuoGfm891cnABE5nkXK4LEobRLR6fLJxfdEm8HycAnNbTm9CHWvUi1o86thtU4iVBs",
  "key41": "5PbgNvDHLkpmhdtM6FX5cG6Unc9HS33VDsh1NSALghhLM9qt9SobuuB7oAb9gbJBguks2QGyDChBqmAQKwNvMsZR",
  "key42": "2fcx2vgBhocRJ7EXdxmoPgPjv5AvwvGKrrHDk7jqZTDZZrRG3aAby5WnsJiYVkth5GB17SdiEiRNs8dQ9TcG57Ct",
  "key43": "5MqhTs5iCLnKghkZeeAbBw1HrxnnySn1yA8sLmSYUiD2EAH6NxoHpJS49VsrM2aBLLXoaW7jtPjcPBunWY8mBQhd",
  "key44": "4tUM4MWhiEpWdhcQr4spym3KbMLacFKytkdhiXxGBy75F2HnF6cyg2rLa2ZUCZY6w81jjps2Gkuthy8FJ7XbpUG2",
  "key45": "5N4ETbBkNyK2mPy9BDV3ieLyuZLc6gjk6n5xSi1HkqS1cfjj7vxaeSn2QhSfybucC3oM62RD89nmSGmpbQSguqHM",
  "key46": "5gn4BfcxXH5uARsByAEcekWePnMrQejGR3X5RRHxFnKG49xnFVin96LZwMUnRxmRPb1SLzRRG1GugoN1fAJcVod3"
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
