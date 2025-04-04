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
    "2Sc1kenHCqs9ojftwCQSh1uHjNUppnkRX4wkQFp2HgvsymnYG2cL1CtntyUYyTGQ5pLsw6N5Q6hhGauFWKGm8MeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JuG27929dPeMW6T7Tn3TNETQo534c1FACahQuVwVTj8NxypqExZDs4UnMNvUT3T45DZg9BDGDgCWGtGJM4qpYD6",
  "key1": "yRvcUrY72Wj3xdNvNiepidCh2HePtPZ1NAcwokHonSLSoJWQNjeWoGtnUCXyRsUj4PQnATnnH9dk21E3dWzGf5u",
  "key2": "5rhYWjXF5534rzcAXyDqXn7rFob6QDd3T3pR1ZMsmGM2mVSPovts1DwkpUaJwuRpuVaxYB9gE4VoPWvJX4i5GXDP",
  "key3": "4Q2Yd2gKzf39bq638pgzFdSyHKuXzwqcWda12nTjLeUueuz9J9Y185U2uPff5UVzsqrh1vr515gDDjEmiiSR3zXU",
  "key4": "mQfYcVuiMqi5d59WpQpVwoem8tkA4yQepH3Hx6ELGbnadCztq1qz1tMgXx26Gj7ukApG1Q2GRvQLYRqjgd9AESX",
  "key5": "2x6CPUAkka86iCHArGVjuoRLUXET4zTSp2t2rSN3RoVMz4ZaczcUn5YayZTYMTYCJYPhYFKJzQEBXs8vzHPSeVzy",
  "key6": "2qR5BzfDuyZUtnkEFbF4t2jbG4S3yhPGiQeicjxcegpMj4o5vKZr3bxsbBRHnYxaXcYoA4hfRBPKkzxvmaGozZC1",
  "key7": "559JnsnJuCAqYqs9oQX4deGt5fza88SMr4pJQ9T8hYTD4i1wsZ31em9eUvKTA6wjKvEFBFanofDQS4Lqz5Nw76B8",
  "key8": "4d7X6Cr2MyFEp7U9T3RSNFrq9mftYGWjyvxSFLUxqa1Uzb6o55s9YBuN5Z8zH78k2FJmENGF4BawRu8nNfX8pM7j",
  "key9": "4pBYLbmHMzs36EhqiMvskh9RfUWYT78yATGiGBDz7bjjSKhhVWY3iCd7sCwAXzZvDZJejSktvuEPDv5WeoL2gWpV",
  "key10": "3u9xoJM2QptKdYXvh2VFg5ZGYEt7az4gU2oSE1HM5ZHrrVVdR8bSStcU9Ah3Z8oqtUQmZoiMnwied85F45QEvi2w",
  "key11": "3hurci5UgegDdFnA2Hoe6ypjdMniZsPfnWdbhCxffX2gVSnBfuanKLKorTsyatv8rVBkjGCN8v79pmiWWduA29Eu",
  "key12": "2pzYMhrtxmeZ5G5qRu7LBww81u5qLrcmZoNK1HSnSn1WU82ycnP82QZ7PbDbbvgABn4dXrQB5YnaSb1bwCfCbjr",
  "key13": "VwzziZ62AFhs5j7wUxznwhR12DGWFhtiwMm3KCX8JMvDxMyoQBRfJHPLhJxdBYnpWbBLZ3FW8RF2vJ3GeK5gSMD",
  "key14": "2KUE5zobwgYYtGadYQWMhyLmoGwjtzAiM8Kv476iCvX4jKr9WBSJyEnHLwVGJwQfKwEstKH6yKBdEw44mvb6mHwU",
  "key15": "38Jwa6tjrBHECQjpTvKm3Pf1hnYVYtdBXRBTKBb1ft2P29QEKC98CizqnbXsLh86rvCHpQqock8p4NzDFXdgrzeQ",
  "key16": "4RVEEgP7CJ2mWCiCB719MCZrjq1kjnAyv2T3FmBAgwewC43J2C5BoL1iQyQ2wG9WKhvUxevEjvrcWhQjJjCSE2Yg",
  "key17": "23y7BQ1amXmZUcLovur9bPG1hczde5or5xPJSwzbQonzpqphCAcB1d1GgKQLBv2qZKimTSz9PgB7kMx77sfHDJG6",
  "key18": "VWk1v7JxhE6nH8GJGuMEkw1ZyUNFjmuqiiYt4Z4HHj3ySVTQR8qnvFuh7274aLQQwLifMdGZYSYYcK5qpRD8FvH",
  "key19": "3q1rhz1gq6Du9RQv2DHzHHG6NSHQAvSqZPAxwNoW225yCfSBTF8SfoZguSpK5mxMu2ipW8McyQr7egf9KLSAgKFr",
  "key20": "4ARGxPzE4xW8uQpDzxrM5ZmSNtDxYN4cVJ8yek6MXBi9jikfcBXcMLWoFiYVhgu7oDbMvxmpoYj6di4yGSKTMQvo",
  "key21": "3Qhuc3BK2rahCov1jmwGJpjaKSaMU3kGpWahENEtJrb8ViPdLUgEu1AFJSJfBCzg9XoPwV2WnHKJqqtfcRWWaEyU",
  "key22": "GhhttKqTsjcE3DJxc2WwDz7ViD9HG6NNYBEFGaLVCw4YZ8y51eAbwjJBrYeyqC43KqgRZz6ApgysrsH16ayBBQM",
  "key23": "3C1mNz2JFjqZabyctjAu4cX29wDXemSJvJs3YMYYANp5cxmwigijAc8CMi7e67aedw2uZ4BoQwkCPz4enRXGUiMT",
  "key24": "4QZLpZbuDn4MxQvTPKKzd1YUTJ795qMXqeTQUUNciKHro2hC9zy4BVDA7AYG9Q9xZqw1G5t6w2rDg2r3FXVoqngh",
  "key25": "3jNFYj85VZddVXkRWtGcwPCG9ctF43s65XW2LKMHszYWRgkfNR8EDj7FibwD5UUW26B6WrcmDkbgqSvF7FnQg6Hq",
  "key26": "3PDPakzBHBdLyWxTkBMhVWNRUiVaJGSqURSwvz3XYYVDwgBsoGZTGpao8vTMCzgKXCyhhT4NM1rgjGRf7kDT3Hv2",
  "key27": "o4oFKDjb29sJTcYGk1rpLeZe5riVRDJuuMwGULaMnNjotvStCNLQR6w5NexUzoUJyB8mVPqEBZidDwHQ4JeWcLY",
  "key28": "4fH96yofuBdXRHNy6ELyy7qqeKqTuuPXXVKELow1cfuvEtinZzUvNqvf8eEk7Bux6S4rXVbKnht5jBjkmS9RpW7X",
  "key29": "285q7YA6DxZySW2ExvrELRwaa2TCQh4gmtkAVAXgNPFapjtm6hmHjCkACEsC5pqp16mrPfizcPWUiiqHH7EqsYf9",
  "key30": "61GowxDMcxejWFTaXqRnkt3bJEAhAUdmGsQuyM7FpajNiyAV21XQzb32VSdvEskhZCizR7aFp9KPDtUciVxawbqW",
  "key31": "46VVWRnJsbZEWeiwCjJ7DEodQmg4awK8UMXAPy9xTZ71hazDpjsX5KHWdPBqrokUuGqmuo8v6Dbga8M16BkQE9fj",
  "key32": "36DSGGfwSXWucn7qJSzLvheqsB7wEynAs1sn6CvYxfc8Y4qWW45nJdzXRsEKg3r9DTiDPSabwukdTDcJ8aWTZokj",
  "key33": "xFoRihUsBkCZUCv24BUSYkJzv75qjqwbtwY8gst7vAUfHQVFakvCG3CPhNab8Wd2iom2FWN8Y5J4xu7kgSTXLpG",
  "key34": "4xGaqroLwpTKuXhnhjyWixZuxSKrS1ABZpaSXC1udt2ZckDw8QNj4EHQPjiK6XwjggWS19miq9zgd6w7zemeoHHV"
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
