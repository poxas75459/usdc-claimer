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
    "2f5BvrZkQLC1w6447eC1DeADducXMTeDAo1k7c6csAxkghBE6vZ9mNnkUsxvcEvhDRnuLGCuwenknZQ4G6ndmSs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PtSe3AwChaiw8hjJCJGeSTiRkjvCGSt8SMzR6DthGmRos8cVE74ZjmbPWEojRhH6WqCW5KZQKVfnKhW2tkrfk1",
  "key1": "4UDBvFbwfrgQwBKfA3MiWDZf74wg9S4m65BrQAqccTxzggWmT9ntX6HzvSRtQa7yHM8Siuj58ZvGFugQT53ZqCyU",
  "key2": "24wDoLqUKgvrb253XbE9D8hbCRo2CF2zs3XUSp4bkL6X7rRU69iHMphr4QuEHb51931TprbcAM6BuLwUdP7aK665",
  "key3": "B6ERUTpAVFSpwfNgz6iTgELJ7eRyRsrNw89q6TEMRzjABqaQbYgZQCqBtZtka74AV1Ff99roQoMbTXfsERbS3wv",
  "key4": "o4J2LHHc1NfNtnHv3obvH3Abfu546ryvZX6nPMQhtcD7ymwgTpoYzqACFrR4YiWH5BaZh3u8tYPRGaNaYms63X2",
  "key5": "4vYkiwpxoLrVCkfwwFxSDUHdFVjyDNGue2QipTUm1si9bgEWJnSX5fZNV32ycJcRY64i4KVKv1knm7R9jixvkHwC",
  "key6": "5j6NJUP5LUoEtaVT6gjBa1hfHb7V3Gt8LkC5FGAQRkkQoXxU7nnYt36P79t4YoQFVVyjiQ7ZjNwe2vaaeWmtQYYF",
  "key7": "5b2ptBZVe3QcDE4nb12ahUX4xMDTtKrx9x6sBDBiiYL2HwxC87Q2MZgTmdMLLj24SKyqqLQzt5A8Z1ZmrfuMdt1E",
  "key8": "5b8asLwyEJ2mD6bPZNLujPMCSZXG3C2NpcQVkwJsR1vLcD5bLw1mn7rt4UeBTfTqiY58aTy7XtxxV4vxYZmoEee3",
  "key9": "2SW54h46yuzm8dSbG9onQzNzw5cX4vri63W1e72AEmQ6ZSBnKV4KcxPKfRQXHL54dMLKyzKuvF7t3UZGc9qbUsV5",
  "key10": "52WiuVzFq1SMaXFQsfgJBESymzGqXKXiVEtVGF3zaaJPLCppxwKaGavyrSRKJ81nRqbp75tG1MEAxr4XoVJUpSFg",
  "key11": "3GmHEjcEoXHckoLV4w8NkGsLWRZFiSgY3Jqb6Pajv1gD9SRaAQ6GcFa2SYUGbpg5x5WmqEnjApcx4CEwyWNgoHCV",
  "key12": "4KdcWWJEUFupPE6bBZi59cvQTd4KVbvhij3Y9a6KRGRgpDUshSqDmBZzRAs9kDZbkuihBcvKuGYJJRxXpWfKUzPn",
  "key13": "fJ8rSeykrhYwW7kDXme41sfhZz1ycRff1ZiqvnXeqyYpHtqQiB3DAtyYYVnLA8doRp4tXJmnRfUQVaptTjU7RhD",
  "key14": "4Hyf6Ajc7qprojaaZtNcSkJRoZRvbDeKHAimV1DZ6um3y5CDHfBXmEcS9vRPBme1zjvnkkfpSHUmN8hniqDURsy5",
  "key15": "DyjvVtgyUbw36nVoUrkf2X2ksB9TS96CGq4PsW8aPsLv35ckJwUoE4um1uJXPWuCYQ614sArADEwQ1aQSmUePE2",
  "key16": "zWywkqhPg2JKN3DnmciWqu8kRAZQsjoMWEpAt1TPrPJnyup5Y7kDnJQpyp1ZXqy4ax7MbZYiegFcJ7Lh63jiHwj",
  "key17": "4LdQBsrFetH7BmASRa1hUN6DJP3UfbX1R6REYRrpdHzW2z1seAHNvT5mfpokvMhV2ZKdbCQn1hRkFYTqe3AQMb3B",
  "key18": "4oNkddjXBLwHJTGcAALJaQgrTTWK2XdknmTGVcsfR2oVL3RUFXzCoLGTukwGa2sEigCTWPgP1aTntBvjNEMk6XMc",
  "key19": "x1fAa4dhWrWRgvX5dGbUFTmhtwoG4EdqdBFDNkoSoxt97iDLoWu1UyH4JKxX1kH5sJP4CNApnDmmFvztx9Sz6fa",
  "key20": "WDJnLNA6CdzUzh9DkJix4NUZws9MKeLQxW6kUc63VKUMJSqwBuVJ7LKk3nWqsBdmPDVLE54hTBrMku8qujxSJv4",
  "key21": "5BMUCZujmJQSUUS8A9o2CerqxvP7jxzWKs4p2HcKPgLD63MB9ye8raYo6ThgBz4nnSyKnUEqn1S9nrqFxtMYTfpV",
  "key22": "3anaXba15jqiRqRDFCxzdrrdmMTT8jiq4XmRafWksYZoJN7YXziSyLX6nztHgFPtTHZYRkyLvBF1iBaMmSnk1cbK",
  "key23": "2iGN5hZA9KFC8Vs44LapZ1TbdkY9L8jnUanUWuafDbSZSzYoVePU7hMnzr1NHtZrz9CrH5sssUm3ze6mz9p2tqbS",
  "key24": "2v4uTgaUCQr8YsjQ5GLiStvZ4HNTnKSPYikL41ngAuDbfvEPSZcbcnTJqf5zEhQDYsZym1wB2vMKJc3gQmwov2sT",
  "key25": "29rpAToQfp6P99PsEdyaNmTzW8ixLyw4r1AVfgJ87A4ursQ3oeENvihM923RrpQZk9H9igQotGEjcf4uCEbDYY88",
  "key26": "3x6viGjnZhQNAHkmu6s666PAizjzA96g5t7KVgAdQy3R5KCMcXnz1Hrg2ZPf7EbS3ejqGSxXW7NzMpwN7mJ2QYLE",
  "key27": "4W8v74e8Ehn5cYKS6BvCHZngnyj17SCQfVhWo1wVu6dgDDaabe8yzuHDkphswyXZVaPpXy5P5fDLXf2DNEmc1hrX",
  "key28": "3EWx6Ekjb28wbPCYDnJP6aVg6wXDsS6BvnN7L5Me7ywxNjs9tmFMCiAL57a7u3UPCWWYvMKBXudfuCmwL6UJQ1Rg",
  "key29": "537JW3a2YVnPrQBxeBS7feXFD214qSrBLxh8H7DzCwzLjjzetQgUdGYGYXMzbCvaSEnE7YYFkxGBK8YVesQaTVKY"
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
