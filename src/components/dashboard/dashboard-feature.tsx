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
    "66wNz8pasfv8CSVVRdzoXsCThtxsFuZwYN6hZnYfGj8bEGWtscxhJwPwrccDMUtp5Uq4WHFCxz9xnVfcysdM9M4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RZtxVBsqCvfiYkZqWDJXFtoDZA8AQN8tGH1xurWrZ6RX9SxHNkQig6BxoY7i517dm17sWz31nuQRjLyX4v7WsNV",
  "key1": "24Nmro6bnXtmuLMDESDDoHQtCUdScyugpXJjLbzhD6k5uMdwW59M77kRmLhPDpesQdjXXc2rdLKbM7QtLPKWEVWm",
  "key2": "63eQSA9LsqeRA8FHeuBEU3pBnvWGfEfJSLyJotErfF45BkGGLGj6APhrGtVPKf9AnjdTTsGDx4qPo7F4RWjWzrpQ",
  "key3": "3TjGT4J2sWJTxzutsadjvt5adzNYWKWF6zGHChjBGufdkUVMymN2oD1QfhgAfaUKXuGp8S8WvR6r1hn1YXNyi384",
  "key4": "2oJVYL2J7BH8ireHDSKU8gTPXDbWkhdQbkF1KoF1K2VvymhTssJw15KaxaCEV7LFPUFPJK5Z3ZS3z8Lyy477fxgf",
  "key5": "4Wj5JqHHRX62zvucYzB6SXhNHxKTxCK2P8getjZHEaiLNfmUvMWZM39aXq54LksS1pCJzdiWE7wESRsvCQ8gXQjr",
  "key6": "4f6w81msMM4c5mnQzQjLZvi6ZopUTyQfqzRzyTEttK1QCgSz5GPJpKHJLob2pbU8oM1SuKzckgAw8YEJwaUZZZ9W",
  "key7": "4X2t2tCKQHoaDF7uUVnWUFYptptdPE1LWVkGrhZR96PdFgSPY871KuZWkN8VQkpW16GZwdjCKvMTccJ1d7LHXAcW",
  "key8": "4Gwms52dWpZUSJKjH6UXk6j75C1nVaLTQmULYEUzNEqFfN27wjfcGtXV8vHyG3XRpnnZWgF7vgJ6CFwGM4QDfJrj",
  "key9": "4izbDSmMhoaRyeZ8TrsYNXyJXFa9CVBPFazzENeEB83fYrh9jXcEAGEsutHksnv4R5n9daVganHUTHnii2ywjDww",
  "key10": "2BhP9SFhN6eWZiwvbJMxPHsHG8gaH7oTNy3xaSwCnJv1JCkmfzpKCWpSxJZvZw7tJzjZLi4DE1nLLRWnnyAfLGiC",
  "key11": "4Bz6hGJeKkq2pHGSLkUMM7VpZLiAEUQ8kBNdj28eEpo8eR8tMzMap2cktNm83LDWL94qvBTe8uCxtzX2QDwfFabH",
  "key12": "5fzUjJRg8dwqeTNspui8BGKE2GpwbP4kBsEKJ8CTCeXsWbKnzsESaRJShzJarWw8MCfcDD7q7btG8CAvryJNGAHS",
  "key13": "2iqzYGE8cAcNthp67GrJm9cquNFHQVuVVCeYgpH211rx6sFp3DoYaZDyR3T7FDuiYgGBUQfhY2VwWma8KmmwC3rf",
  "key14": "3jSh3muWC8AJcMHK7bZLpY52VUNUjP9fMSuFWjf9gF8DGPGuos2ZPvWS28Zgf31H6inTcGMkzucyfecm4qJezLN6",
  "key15": "4Zc7962xYfrqJNqGRv9vGMhZwYsu1mW3yCrU8KotxYe3X54zcBhkcCTUjZ4KTyYegDPNgP2E5dxqvL9EndikdDWW",
  "key16": "CUAAKnXyvo2oSqoD9nzyz6eMLVXNf6VLvLh6Q9r3vW4EsxEPziYfibzXYjcXcQrNauZcro6d83Jv4azg7Kj2xAB",
  "key17": "1ecGMaUvtA88wYnkULqkGtqUkET45dp4eMEdjXCmzdQwT49p21NNaPaTqCayzgzztf5WZdcqKZYgiuvyXm1SpNG",
  "key18": "3YfSZCfagPFjusf9YuPh756fnPnGELCpWnZkiKNqZ8TccBsqwhGHESA7J4EWDYiZFiXb2as8qs7Qf36Kqh9PDh8v",
  "key19": "2M2bMjzR5EziGRmWFeJ1kXpXjrCFD2GMpJcq7HnaSeBufHLJZJz7C8fMyMpRQgVQp7nY45TWrvyQp1JaDVJHKtp5",
  "key20": "4ZGzSosMy8sif5HdcTnseSygWYhCUhCQaejz5csTJ3hVymRafTqmxsrufky24kPvwzmFn6djznwbdhR7d2Atc29n",
  "key21": "3d9aESqbEQvQyho6kaUi71u5gjwFo2As6srTRwoRyyme85eGDLUzJzbdkML5VMHytYEMjqwagLSBmLvV3PQZeuRJ",
  "key22": "5GPJicrsUsgWBRSLYbucWpQp2LmsVkj8sg86pV8RicW1t1DRuHtJxaDyvqBccZqV8hdYtkmX4gPpjkkknJbEoZ1S",
  "key23": "4LYY3Lzx8YDzAiGp9tY8qwuQ5yWoHPMbY1ZxLLYDHF9KFdKnJEoWbaX6WNnWe4EQxk58qzX3cLjc8UyJKVQ8qabS",
  "key24": "5VMic4i3szBVs4ACtFJ3S1fSNCaSLYjB99W9WKwBhiTKGDRvSX88dqy48eLC4wFf4uJtGTXa1xDdET5cy26FzaAV",
  "key25": "2NKeqYPjphqzWTyqjaicZBGELq4rHFgmonaEsfw4hL6gK63eiT1V7EZW4QgjH18eV19xCuC7kdbFGmWkmNYY5tar",
  "key26": "4ZnTFgS4k5F9Ut2gxmNrebxnNECzNhDLZcdJ4KYyxsNNBLqDrJNQ9KFeF6G1ZBreeoY6zYPC3JbJBGzwEnNcbiLN",
  "key27": "5kprFHwKdW8dZhKDSXASmMiU7qqep6HvVazfmFbYn4nLueFfgjWX2Hx6yCGgRXh7awWnyGYCZwHqpP61xPxwnBbE",
  "key28": "3brk9qhJBpV18aqn3dki8bz1mikCuk3j3bqCEWnQzsQunEfNevmoEymqBDCv6Z9ARrysJUvnArWNmBhT5zcVZxL5",
  "key29": "51rCjzTL9XE69kE2XWcGaJ3pSS9Genz69jPyJygEPMQ7utxYhW3TcUZVEtgMYXUb21zqYoXL4B9242vno2Mjvpcr",
  "key30": "5EWpmLs1bbURVnDdgMeYnCH18hPsvftjUXqBP1Mivg2VHVtGgVJfAPV9b6PGYFyxPgBDv1tFHbGTXUgHSm6fhEyu",
  "key31": "3W8iA5nXWYAnKgpyGpUyWrJxB3XJRp5bZRKXZ9NUFMHXU6KFZR4ecesMqje6z1h3xxcGzibgknmgrKGyCAiRbfLo"
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
