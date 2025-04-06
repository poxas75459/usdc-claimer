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
    "5iPy9V7WaFWB8GtfYTvdYb5yPfZhHEMX9GrM14mAMVvbYqFAw2bYppvVt6miXdmPyt89NdXiWibcjvQvvki11i9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AoLzFyciDk68EQszfrNNPrxvsPgAkvwdYMjum3EnX4EETqxQwznz7JVXQxN7rXFwPH3YpX2MafhoyA7naWg1SHt",
  "key1": "3eWNcSabPdFrxo8DsVwua8VVZM9H7z41MviyCcZ51bqrsyw3jvJZMShTSEyZcj7VMj2YgPcKiot6v4LxJ5CnzCtQ",
  "key2": "42f4mwcx3qjs4z32H9HVDmRvBxrmnfo98hXms6s1g6GiDvnoYzbnjQcPhyZrxJuXJKr2TVuUsAVhUF1ZKf6Ahdcm",
  "key3": "4UT6EUTRQGTEEFyLKb9SxZKwFWU5hR2e5ESqeJ4WzUKQW1pGLr96EfHBPahortrdHrFvd2yFwdtQPgBmuo3sa6TM",
  "key4": "Z6C5SFbLmtbaUpfU8cCCXRUMRkJeUHz7kxqt7873s8vsHEvJdtKx4EkgD4Npke1w8nFyAzCBp2qb1gVbSeEYw5d",
  "key5": "3tpo6NbqDHo6vB1ibprq2dyidbwB5tvf2eCWG9VSVFbqoirALZxxkrcJfg9fD6D9h7VaQsN5Cn6bhSEvJvK7tSnh",
  "key6": "4Cezv8xbF1cGF6RtEEaP73HhCxwcjfSV36uBco5NSbhSU9scz9YrujgeaHQwUV47iZ7bMTzsnh1LTHdPC19T8U6y",
  "key7": "5knA1hqd4BNmEsF1fpko5dkqzykB98XUDscahMF3UVrzpVny9GqyWPDE5WufivMsWuycN1ooR9KnpscsMr9NHbU2",
  "key8": "5QKXUTqvqWEvLhxeARRUk8TZeszTNaCLnojFi1Ug2pBKoCmbREHtiu8joH4LDvP3LcMPZxFG1eWUaSUhzJPG3MfA",
  "key9": "5d3STUdJbQKJ7upSeKB6Yfe76TK1CWCEdvipzY6ceyrPThq2GnQcDz3a5iBubDDXa5Aem4izmHJ1itCRbhEYW7fz",
  "key10": "3bvKW7xzZadPts48zkbCKyy2YtaeG6KMqapvaAK6jfTbHaMcukSusUWPWAFfBnjXpqAdMvXFZKs2v2EmedLKri3m",
  "key11": "5Nf5dtuFvcr5AtXmzH5nBtZmFSUa7L4sJXjedZDXTZ91Sht5NeRmDFbxsjxZTWEMBK4ioLfU8ee31TWYnuRZxy4G",
  "key12": "28Eme9NcNGU1YoSi5dAp6kvJtsZ9uaa5b6NrfUYNjmkiv6NHgRRbTPxae26KKdKTWN6jpiEyxx6RbZDiA5D6td6X",
  "key13": "3hfw5gYFmdRoatKSe4Vb1aVzWViqG6QfddPCXs5svsoxRDcAK8rypGNNQaukf3kF8eLARiGraksFXxJwr6tJwSuA",
  "key14": "4TmxKbygzZ1BFnG4DQDzUa5wtKYmKHk4iVkw5Q8NdW42cZ7ENpMVGU4Zty8t7npCYvBVeLnDXFZgo6xPcVLE3W2Q",
  "key15": "5rDZLrAUEY15N1mYtwc8k5UiNzccwmiHVyNgR63yWUfDMoFihDKs5TvVTFFv2wa6tPHGjczZgCvYU2dnoPEt61Dj",
  "key16": "5DMuy2pYs3g6AMKp4p3QsmKGRuUsyn2JCWvGxjetV3sunnZ5ipEoFpHQcMA1uP9EJnAGctJADdQMjb58tYV9ccYm",
  "key17": "2QTbHpGHkNftGU9ZtR3bngEZtZ6N1ywQQTE13TbEUAhC2PjkFLLi2juTyG9wzUHeXPUJKkZWgVUqxjDoRKXJ5KvW",
  "key18": "3U6avVHyjFy7quqkebdYQ54jzsdJipUEmPZGJy4soY7TcjAvRdGWjKHBF56Rm8x9L1gP5q5AHffacEE9CgT3cx76",
  "key19": "3Qw3pKhtdf5vt9MQGzhaRn6zSSkzzuPLX1rxtZr9qWvhQgry1Qo1QdRGoBWmEN3DuUfdBw2Dw87b39yrJCjYqhv2",
  "key20": "44nPG3n2pT2BP8su32aHHM8j11BYXf7Kb1FNrPi8aoBSb9RWfz2JCSS3r4UMCicpz4RQhqsACGjipQJLFsuWMDRa",
  "key21": "2DGDbVjCsxetfCfBCiwjjA36AUNtnR5g1tkuF6Cp53bngWXeezznrwwfqCdKiSZwiaNmAejix67UrpVERQMAkuBU",
  "key22": "51xLE5qnD844b17Ejnsdbe1aTm9ZMyPUCByNtjAJY9gmkHfzBsyv7Q8CtRVhqqDEdQ8waJxtmqT4UDg9Yowzzej8",
  "key23": "5Haho9mB24JHjcaFKLwntpcRva2akhkT1MRnjV8RzWkNmHrP4eYCiSzn2hTe1BjZSxMKcvNSDhHwtKGF58cMrxVw",
  "key24": "51asvV9ENm7JGCwBbxResv7cNemEbqV5NnTwUbxYveJsDJAhwHNxH8fz2Y2KDNNP7ffQtonTTjQN95NmB7og9EXs",
  "key25": "3uy1ru6VZPht7MAD2nEwDhRDq1jpTBXGqjpCc53SuSPg1bDGCotMNYQkj5hUwTxi8uu9MTNp5cHtJabv6Ypd2gV2"
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
