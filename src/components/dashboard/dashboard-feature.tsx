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
    "3R6o47pKT3vkbxPsmi59SYNUxBTc33GbmE7152kd7C786ycSPuWteAK3F3wxPCi3JPvTcTBepHGNzCpD3P2nADQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LdWFJ4UvQCXJvpmci2d5s6vsmkTReRNBL2FxtvXPMmztJsC9LowVueN2txxw6sAZeYk4Xsr1aDRfKcUwwHJC7u",
  "key1": "3dF9R8jgt6zpLrrgueot2r1sj5zdmwW9zcSm64FkdECkXiKZvP1T9rynpwoByJmFEh9QgKrPfRBE73PV6n5Ek4kA",
  "key2": "42MTEbX1B7Q493WWms5CLC4ozMMpf8uNUdBBq6jidPJA8mxXGUda6h81LnSMb8BWCjKCsLttEXvB4BwfxsSm8wym",
  "key3": "2rVxzDQucNQsNmxrKm8NMdCLpb3pmGLN5k7LWQJdCg16cL6uKTaZAopsqcMcZRVNuEmku2BSEpEBaVUdu1Kp8SZo",
  "key4": "3apmvWksTHBKc7UApCo47TmZybKjVrw5erdCquhKKepXNgHZA5BJtZvgb3FSUFGZmTsLPmJEngrDEomvmrYTtF19",
  "key5": "4VY72WU55PLbGcBhXHKJLrk9airjZVjJqfostwVPaMYfqWdsVquVn8xmQu8EtKJpuBCEuxwFCC9Mqj2G9seweDHS",
  "key6": "3o5upcMTaj3zpNk89hcmwH7TbmZqo8qAviePJUr1PmQdL26v4wtJ3aDwswefYUDS2XSbRsEmcYEEJ8jgjSu2SZhR",
  "key7": "3bfFpJcE8iMQZzWjLstVamxUHdonhPEUChk52SfBCpqnGQBpRV3WYDeVZT4B6zTvCTDksPKmjmC3YgTGHZtbDnS2",
  "key8": "2hu2j7aTKSrKFvAwmH91x3PPPXKuW6CYBXbcFgK1dRrB7A2FUjHdXPnUByMppzQeLxna8FG1U5Rnmdx58Rq2ohPw",
  "key9": "2yc6cJtoSCbJeG1GuA18nC52zGmSn8UoxDW31JdMbpDNecB2BmqW6iTMmyWw3wnXqeRefwSeUDPq9Y5ABT9QQXwu",
  "key10": "X3dAn5ySdrtm3NZVANtYT7sGAWXwRiSG6B77MPoLQfYGWBLj1yuBBECenCcKF1d5rJVL5cS8zfCYLw8puMmgfTj",
  "key11": "uDwpqszbUhhjJidovMekZ6oaKymVq5JtNpwEwYfS7xDLifJpY8VD6qgjXm5Ab9Us2GXd7Va4B49yTELcrykjWxJ",
  "key12": "3pxmvZznvi1jsZEby2jJdR2Wphc1MsKq6UX4J7NX9NzrcJBJjP6AKYfaCdFb6hwsK9tg8Ae9BRT8c77HYJaJxyZr",
  "key13": "43KihmqMfpAcLjfpkphNVT5hRUuH5GSPLRYVgJA8c4EoY7ZyDzy8764DdfBdKCtEqqxcBwYY4oMMAde6hmPKXj5",
  "key14": "UfgKmUDUXN3xnMaEjeto4Eb15RNo8tZQ1Z4JiDt4wbp9WeMVMUDPRXvdkjBoncdY8DujmReG9GYaDXUgDbwk5nX",
  "key15": "fBKnHLH6UJZpAjHevkVjzECVpEPhHsJVg7QMWkVWwR4RiAYmmGTVFZRao76uBkjAMceVzrAJSZc9HHcy5s6kU8a",
  "key16": "3PQoUitJiYeuz9rKWGS8osxwTq29newNfWLed4a4YQ9w94jks6k6Ca1QwWJQqwXYG2c6jVgzaTGtjo9ADzjXQtwH",
  "key17": "3wpg6jrGFeHGYERVwe2M6JYaGZnucjVVxPEeUo7tJmqkVajoqadzCV22VVsc6iQe4foW5PM8akHgRkUkhZyHHsqt",
  "key18": "4iaE5eNJssemQnydJLBUYkSoNVLckk9xzmT9NM7piHX62uvpJY4bRsA3Gxw9bEGRXy38YQTFppWH1SocyoDrqQiU",
  "key19": "42yWq1LYY8JTxRhbWQWhz9U7nvA52MPijHSkiLX4Pnxfu6WzgAsi6UFnLGGn9uzPtqLZwFDpmARQ9PWbZSTVQJWq",
  "key20": "JwsCnvqWDSELzAub1BtaQZQyypp43qjPtrRuvEZZGp14wLnMZE8r4gTUx48MJBnqqbyyhWT8JeVE6Uj6LpRCcfV",
  "key21": "39nN7xsozpeFYN7ceL4hDEzNFefCVsjkwqJrPHRRKwJuH5C329ZqjrW5nJDG3DcUVzznUh2VcU6gGagQKy3oj7kZ",
  "key22": "2LK5boUvHYDSazqYHyt7UypZzfjE1Sv6AvUwTpg9PZiGhHrbkrjNN4QAQ9PHpRrAW1BwrRm5fWdbLZ9Xd8pCWFto",
  "key23": "5C9ZDRvTmvGN2VX6fYqXGsVV9XGtWf3nb5qGZuFWL6KkmuHu6NgUAVswDr2ZJoCc4b5jZP4HDdVUTpX9re5AaL7K",
  "key24": "3ypUAtha1GZsbMnArodre2aDu2JDTzsZPumxyXcK9zVAcf232XuTDEX1aGJj1sFY5wca5gfh4RnnfzstqprQWvrq",
  "key25": "2HnV7ZsM5dzXeGTXfwottE9awcCms6jwPMAUXpP2Gz9YZ9JnAmp6wPggySZKvrhXdTVBw8GxSWcdHqLQimqv39o2",
  "key26": "4qNGV52nzzP9ZCtBaV6j1D6nKW4HHeYkwytMgCiWLmRZLdtJitQjGFzPGFCSDuA5YfQ47HyrArWzVLDtGUSEiahh",
  "key27": "3X7xrftjxFjbjXe51Mu2aEwvFzyVF3uyJcN7JpV36xn2r1WBGqftcqw7v3BVCRWtNMYChpzpfkHBYg5CEvXv1Msb"
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
