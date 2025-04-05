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
    "5JVtkcswNHMxTe3ZWguK8baF2rNvDKdigGLtZ5aMxRK4Ti4YK3N7Z3Jh9rcfAga5UsGgeWKpwXgnQJRtF9CWXYCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sa1BH8BJo7tGevubPWM1moSUKxCbuwskdBGHYQEuAgc1EmRvuuR2f9Xsuji91tG11LL4N697poZ6uwKExvbi5r1",
  "key1": "GciysbvGW88aTJSCULis1Va2nH6KQThZbvekYdYPJuvAetyW6VxD9NtjGVdYXzgZR5S6DnJTJeANUGCjTUgANJW",
  "key2": "2Ymgh589iPaSpWnBDL46LF4qJSTW1UngFAy7DNXgmD5yTWwkEQJ1nHJMEGNNEjzAE2A6NMH1i5u5CWJsxR5pioSH",
  "key3": "5AuYjPMEpzigDqAx4BDwwoF9dx8iH79ZQwLro1zbqsUtnWH1jdyfdGYEg7te5bLx6MJ2Rhh1vy5194CX5SN8XqX9",
  "key4": "3E1TQpJEtnwqrev5jKaAxi4iAWnKRzzEc8TioUsukvfAKJDGmS2fbtheC5jvAWf1g3aUNYP6sNZk34SfDm2JKpWn",
  "key5": "4AuJyWH1TM1VZhNfNJm6aUDM8rsJJt9mNNT1dKeG6PeBCifkb3e2WPCDDWwgh1QVxpNjnUiKwPPMxDsWVjqfGyuq",
  "key6": "5WtmQH7H1AKjXvHRRRhNv9idWv3VZAWqGyHrW6G2kEiVCZwMWUF4fg5FtKtXSzqE2TpyyEJzKWxGTJDvxbjCwMtj",
  "key7": "4S1QfSAk5vmRfkLE7zh7UZmFYHaTs2Jox14AutH9cjqgLnj4syrKY7AxEkUGbK2JbqxPkvTaptxNHGwPcqLnAyFt",
  "key8": "4bf7quKWVZACDgCSjNUCzzpQEXXYD8TiaqEGmPCdEmaNXp5vmyaZVFHQRx8oo35rZYyJT5EqnfbtgNdQU9SDFwNd",
  "key9": "2NvduQhrJz3SQ9JZYj9NQPTqxztqYsEyA6x4HErMDMfawUeESo6BThrMkaNxqLXPfYiyaTWEvodc5mungTZyswj8",
  "key10": "4qatRfmZPdgN4w3QXQo92Ywez6EPNwdY2ufPNz3aWpitAyJJyjs9zoWoDhgo9dqBSxUGj8yjw4TiKYdcsSU4HZit",
  "key11": "3Zr1sFe1P537Y88oxA2amanyyAA1Z9VqEjiiWh5G6nV1HLq4Xo3Mgafkf3qd79MiCcqSFe4mHN6Ptv4htjAWm5p6",
  "key12": "ifC9qmjYr1J6WgBp4bHQpvyUUkPTWKkdUKHnbXTiEWd2SeLYRjSj3vccgNtdt6UvVeq9YCpGoGc8RZahtBQbvKx",
  "key13": "5e9eq8HWTKdrFuZuFn4KFkcmfoxYyH9xuP81yifvAYKEBXNWwdMQbks6zezq1R3kqyyuSax2CJEvugZZuhpewUMZ",
  "key14": "aeBS3ezFGW9ZRj1buYRCNsRP5MBe35zEjiKgZgBpzZCKWsFrKqmqgQvENZFjngShiStRfirJVpDbyKAv8cmrggM",
  "key15": "62zAoFA8qxKm9gzxjkrP4DLqJR4VjaqBKQe9Z1BWPuz3tFUsiDKUAUdFW4bHLcaziGjy34rCD7PyqGB4W8jT7Bo6",
  "key16": "5yHEdqwjEtmSJ2gNwP75aob66U4yheS3jG197UYRgLApa126ADV8JhiP3AX7r2GugXUq9PM1tv3nQ4Fk6eMZjFqU",
  "key17": "5pt2SXvovm9LESPJ4HxUavvtEkoUaKWaE3rJ2RL55cXsjbofYCtGUW184UgQyBJZhPKZMXdWais6Z7GofKticfYw",
  "key18": "37rHo5joLNfQaHoBmdzxWVRSA4GgL4x5fcTQvohZxq7yVbju1sRJrw8SGRFt7fWLfP429gDedKXkKpzz9awv9Smn",
  "key19": "nkUAaCmygwY7CsYCRJKMnhNNEjDt3hc5UKWVVKjr1T8jRtddXai7NgmghK36V2dVZ4cegBKYfeRtuzHk9FBE1ZF",
  "key20": "5dtudN6x4R59d9iigQy4HiegH6TAvbMgaj7Zffk7o9VmQeNP8sdJdfzhUQz1BKVfmFrzaU7EzKrsmpkHg6CeGjFS",
  "key21": "3oNuGJAbMezfGwY2ZndWZsk6ZiRMEUEeK8jjSJxWj2oM6zghNFY7UaR2bVvCQLiv2tHoQppZoRJH1HTqAybgWpsT",
  "key22": "4bLePJwokNzXbvsLfwjFW3ghfcFie6hntKRFg2h9uXtrfhZ6qqqH8pSBHKw8AqS8nuntcQB5EqfHzuV9YCo64sYd",
  "key23": "2kb9wvkiT5p6nWtJ8JH63ukCKswi5ZofXcAKc99k3g6YnkjgiVNfDv2McLk4pHiqhMbkmviG9xx4si7wi2QyYKCa",
  "key24": "2yNoEornS8v8tV9fxgafAgdD4vA54Sy5oPZXNk5dHNqbtsBhNKipcwySe1dyzzcnRySQbgh9wHJNox4WgHa44gq1",
  "key25": "2AF7GWCRHUgNcr5dpVDBL5EF971zdWQ3BwjjQrCZyeBDq5QegHici6JLBkZvPf4vPpWyYJ23VB86uhzZcGMqgSvm",
  "key26": "5WGkWfJg8gXKUUqywSV9vcEXAQtg9rC5csap4KTS6gWTzJqogZPZfnAfKSXf1mpyjnxQgeUuEZQ6nCCFDCKwLLXa",
  "key27": "4D8FioGxe2ccaxQ7mQGybPgxURX7vnEW8SSPHuhm1eV5yNuDsyKuZR8CRBA4EcUsdVaTG8RcScskEkHegp4jUnVf"
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
