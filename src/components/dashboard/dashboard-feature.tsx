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
    "4e1o2cLb3BMsGPrtFa8dNRM3dtbNfmKSo1nMRVFUMhbPRE6hWsJT9RW4mNqh3GNmommxC2A7pJoBqZXeNwnXfHSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XdJJCtW1oiQZeW53w9HreKu5wjGZgksq3i1orMGg6auQJCc3LPVpHuVFXp81A3pm7UGd2ANc7nLgSSi8VgiUhy",
  "key1": "5BYKCJvmeTYmic5zrWD8s75BKJzBsSKVd3BFNUVrkKYqseqp2JsXzox4FteSr3rbmUKESM7QgphWii17LpMhji3C",
  "key2": "25ciLnc5cnnM7EbbhE9TtCLoY3x6RSNr7YMi6azjUPkXDahfYDt1KMDDYt76gXXVg42g74eMJBwqxBrpx832kNQQ",
  "key3": "2ZEp1XhahNu5eDXRZNZ5W25tuuohRngx73phMmifzV7QweyWFWpBZbFqHNwTsYPEL73R6yceogjnpQYJzqonfBgi",
  "key4": "4cNstChghwoTD6UFrYzTC1e5oZrKqcywQdnWeuC3GV3NXHK6Dc1ZcAXgrfGK3xB5jMgApJgV9SYoaYjLJ5z4J4v2",
  "key5": "4Ep69kGVByN8ePtSKCyC2bjDpvQEfh6ehPBLg5aEuY3wnmxNFpQPxHz7vZHL4FWDRXcR8k7jBCZ8epo7C5HYdHmG",
  "key6": "48zW1tGNHfyVfULJDAS8nbKg8miEUvA2g1uJBy4hJfTAbDKpm8shwzPmHGawG1BdwTph4HfjPFHXoVh2qrM8wV1h",
  "key7": "4X7wKLmEvWeWU2jCFoDMJvRhTZZ1VY29PrvTvctrqehXr7Fg1uakVFGXHnKW58FjZkJKXp1iUkKVCZKQ5nqCcdrX",
  "key8": "5RmFMTz3UqLfpBSe2BsdF7NER9t3E5uBh2QcBahujShCeq5Ld7B6vVsafjsNrHwgaBv64P4wR8asSHdnyP8KQz7D",
  "key9": "DJWetWwzRoTZErEpWtWrvekUg8NFDoraZAvryQYyHaN2LFknT55nekKWydx2m4SuUa6bw6xwdvKgzaHNRsfyxow",
  "key10": "5q5uCQ43mEYdxd4HYHp9qgV5dgYXcNV4LYtW9kQtLMZkojwm33o3SpfJGKxQGEnnmbN65tw3A6XSUp5urQo3GFeV",
  "key11": "3UCByF1nSQ2Kn9AyRR8JLKpj3FZ6KU2y1YU9woojewp8XtDt1ELjLmMscXC6Rca6qBhFupw62n45PrNV5tnbwbrt",
  "key12": "nDwHJwcKnPh5kLuZmffaSX5KWHnK8pAwUsezN7ZHo7MeAZQC4FGTFc6jcEdBmX6HJa6Y5BWyaGZFkaj8iTxs1tW",
  "key13": "4NDdDpVtMNsTvJWDn7CuG23GYWA1ofruK3RHumq8RBA41tU8bN85WbFHKchFs5WkC1MzEDKJAyvDbeTfPQg8VCUv",
  "key14": "4PcVB8Jht6cuea7aFygHMB58RiCSNemHT24MS3TXTpwXiTq3M4KJkwRn9YToneRuohhzk8aZAUgi2RoWYRQR7Uuv",
  "key15": "DsS7tcPDR1UHJyoDjW4AtFZUsgnsnsMEcJRnLinb2aoSgjY6hw1qfVJ4yb8yDX8fPd4cYDmKvEr3o9JAqu8WJ57",
  "key16": "54vn2tiSenWbFptyh96wg2DZYZxteBAZwvs55reaZfEJL9fSwxr1RmGY6Li7GEEtnrB62QwpQyBQUAVvk6emKEk1",
  "key17": "1iqSdsrA9eaHre8zwsXqVtgzuoqLUxF5wjJqbHU49XqgTKNrwjZAbxbzd2rcYWyS3trYCxGogr4BiDX8msV7AEb",
  "key18": "3D2hohfYEfG7VTJ6x6yfEpP2kCFMFifNmn1FNoTgq1dQZ6p32rCogbGo3t2ej8mQ3KxSsAqJWjpTMrAp867SBnEu",
  "key19": "3x8rHAM7hv3prfeLmM57zhSoeASgGq35RrgMdAgNnSBPhaoPrjR8DXrvLBJn6LC4TgsHL8FYzJCeDQTEewUssL5y",
  "key20": "5ann6KFegB92iQbVtF7Dk65gzp358KLScRZPPd4SzwdahjunzntHQ3SN9XqzQ9wFzWCAyYgjXE1htqf1ed1w4Xof",
  "key21": "4Ug51ua3N23PZWtohKxnvGhiWVJdBvUtiDvb5Vz1WYTSztei4NXtw12RyWoCTUkncBbwRzNUTWteHG8MwfTk5db1",
  "key22": "44519NcACNU8E6tc7HZ1zs7mqnb1Mfioviso3ZzwYgs57bUMytE4XuXh6rnE27zsAcmVWzwyiZ1nvACPtDYuekL9",
  "key23": "2wQfqapXDnAxGxvyEpLE25qvncUV8VR3jV2MwzL9vMXP9SBcmtkPtvTL6rzmyhsjJCkZvBGMNyCQorbRNrAwZ2vi",
  "key24": "NttY4ZQ4E6G5ihXzeTwY8ULhawsn9YrLhKQbck5YEY9kn8vQJXCQEBR5b9tXGkPB3AK2Zvom5g8tg5pjhU88AW5",
  "key25": "rg7kvx9mg4tf32qxKsDHXgLuX4RN5S95bp9oXCeYsRjxdSDDsUfePioTcoZnvBjRfz7JMV2MVJCELAcEa7EGg6J",
  "key26": "4GyAGeyEcyxLLQywxb4QABZcDsVNCA9MyLzinE92CF9EkGpQ8VNWJwJn5U89t75nKDhrsPwyqyjL8bre3tpVUYDx",
  "key27": "5kdSWJJMWCtjrnzdhemRL2KRcAusR7aBPXct5qH7W1uR79mKWZMXi4itfwDnn1PHUfJYM4DxwzrZMhMMsM3RALi8",
  "key28": "39uYvoKFDgvf5bVhE5v9zmVZFFT44kbsd3xLy78N4mt7qQ1eSQw68Ak5gdvzRfpZw7bSB8294Mi5LVC1VKX3p4sd",
  "key29": "2gdbyvMQW1pFS2pxB7Q5QBnechUFurdsJg5BJAXmFoFhdh1e1j3uFENP4Lc7TAfDfwxnYVrJGUL4Q7xnTudQLbrs",
  "key30": "3Z7nNyzmMFEX6qTXEM66mmCgX9KmhjgV18NEnaMtx4H6XPsYqy3MwJbELrMCddwDhACTyndYcLnz3dy3w19d5rpQ",
  "key31": "3Daxh4zTdCaQjALhq6bnuSPp5jAJ83vDyuVuaMW9rULijYfRzRff582HUUnSZ1QZRpQ5DW2s3eSp21hysQ2hLF9p",
  "key32": "3vwqCyFznJNEU4uCJFncvVBCaKQZQigNgwCxMqan2sCxCbN3jg4pKHWxjZM7bcYBfUbkGWdvpMyXiq8hsCWEVfkG",
  "key33": "2Ns4k8iqsUkc23k7Lu9GDChjteqNkYfwFzW9cYjJJfF3RNFK9uFBzPdGQ1ZacxZn8gC2xDSkVNavt8SEyLgDUGkp",
  "key34": "vmJNBP8kRn5YLhj9eCJwURxJkPpTKZLPMhQaQ4zaKpysNsREprVuSzefPmS19HDN1TP3tw3wcBmbkMcHdpLPMSf"
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
