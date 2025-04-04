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
    "53Q4A5v6CCnmUv64de9DpxRJpNQQi3X16K4JVR6EiNU8MQRyJJuVhY4shw5SsMQUZyPPVvBm8sWDb4GHfbtthxrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbctBmEjccuMYmcqUUytS7hhjZBzGL6WYj8EPRYi3tyC7gZjte6ve7wXWEBoVDQth35hKSix9wm3qu712VpkkKH",
  "key1": "3FkrbTMfGqkmcrpZ5XbmZ33ZfekEBBYuZMNexxG5SVC8CxHCNQ5SBoFJ7M4ja93wJCbK9HKzh3gTi1fMNDSJFWbp",
  "key2": "5vioALgK5fWNsVh7KHF3Z6g8wZJUYnYaHbu6z6w7dkRwVbeaSbqfEbsJAFw8M9iyMySQriZWMB7m1ayrbC7qGCrL",
  "key3": "xPA7Pc5x77MWn8TStYamNTeRViYRWKk5YKBw9HGK6pSobvWCEXXjQpZgBbqCwNvQEJoQh6LRFtL7eGvMPALJBFm",
  "key4": "3bT7FojajCDff7hRKVhf9nbe8PDWTKx3URkTUuFSBj9UcsemscvBENnBhUMfxwaf8hJQCxpykTamU6LjL5iAEDXT",
  "key5": "2d7jEfLtFW5FCyMjjsuvM36UiV2fuaYepHZqwo5HG3Arcfg45BqCUXzGMfCnbtDQ9q33joaKekUekrCwcZfMRcKk",
  "key6": "5GfhrSqzDEAx4Zsz2YDWHVUQ5B2QzXcWqFKXjwYwPDGBH8mkN62q5qMt1bPZtG4Pnm1X5Fuw9eAQeyLcchrvNhuh",
  "key7": "2UYKsR6TdW8JtJnUUx8BYHQMkrjhEv5SXjbF6otMXA4wxTXV65DQyD9WCAMB2jB27Z2PmKv64w5soPZWsX1EZkDR",
  "key8": "fMvUm4QZutnLJ3hsfqGEMCgcRrmmsShX7yHTApSPAJwcTjmKmfadNq2zNX7TwymY86smHGCkq5eZoTt4hBbjZHw",
  "key9": "2rJ1PPMsNeNg2CDTV5aAjh3ezAYeMqr7oqdH78K3RnDaKHiF5rs9xhaZcWAhFNb8eGPKDKryQem8tBEM2ooCyrXT",
  "key10": "F79jS6XGMoKT7rgXUdqJ1Ewdix4aRN9kW73MvoDv8ibaCHoxprXJvhZa6LDyEzDEPfFi3XfYLvTJCkvNiYhUfkK",
  "key11": "JNuKAx7NPsaRT2B3y6pQfkAsGkkCNPrY4TNZmUyDEYEMSE9HcnLyY6rD15oMpCr3fCSvcfAvqMh5wATKBYG76gX",
  "key12": "3Kkp59puEB8uBpNq8FKyRZPwYvGzovwoDbvudHduRH3LYYc4Lz1STwiqWkSQCBf4Fd7hLsdWHsNodcHaQsswq8se",
  "key13": "2E6wZJg3pxEcvmD7EkghsT5iNEJ45tE6hLJxXzvePsLvz6XPjEkAsAZxxPvXav21GpuqzoY9SaeUUnSsgwFfkbgQ",
  "key14": "4s6Kf5pje869RZWvYnKsaew5cSArGDiEn5yfqRXjf5qJkaJjhk3gruvmahSExXmiPworTBMRuz3Rn7HeXXyY4ZNA",
  "key15": "3Lc4edQbMxG5RgdQUjNqmQc9LLviU6dXmMYNaUVQK5MC69Z4dbLokk9ZU5ghmY2FFA1frrCGsSiUzEGn2T5Cc8DF",
  "key16": "21sRH6sztDWFnmRvh3F96uz1E5q9Q2iMLa8mCXxy34znXy8jJzDBqoHdQfzcGqFXyr9S6qLwM6M1Z6d12b9zXg3J",
  "key17": "659xmLF7bjR2vcJS3xBzDsd2vmWwTXKavvHTLGmVKAShFATygYg6K1UyjhrRzkDZ8g3yYRjbzYGE6F6b4v3vWMU3",
  "key18": "45Fo5RqmNbBpvPReJE9AZ3A6acxTftw3UeQCnbTd2j4sHarXQhYtPDQ3ST3P569Q9JSNbeZcZryiUtaCS5aCu7kq",
  "key19": "5nxjbUWeBGyAViH9rhEsH15svyinXUXTdVPaKhg6zd46ReeqLDrieJbRNMuWLWemEn9Mn6RUxNVU6JEj5jvr95cF",
  "key20": "3mtD7FQi8duK4VXfx9NGc7XdghvdVDpGEuBktbNr3TkSxQuch2pguCtxGE6tCokzSdmWKL2BskwzuvgXWb7s9CWk",
  "key21": "2Jf4YXKZXhaDCp81gUZQQFgrT7w9tZPmaWpB8AYamd2vL8vDBpEr8GFdSVraVznFzfLaZAUZfZ3Q43fWNJ1si6cC",
  "key22": "473PW6BbrcqXr1zEYeYds4Ax16WPgZ8SSyju45fwJaqzHE7opP5WRJ3muVaMQ4FS7mMaxjRrwC6NRfKQTuDbzoRc",
  "key23": "3tocMoCeoWDGmqNen3uTmNagy1saZDsbEPvamwYDLvYaRZo2SdDgz1J2ZXmYXywYTvC1HL9NRLMpbQWZRLfomsHQ",
  "key24": "5h6hwkVdLXkMebafSRrK7xY35v6GwkwBbph4DiwCHB3C623c1Znsqoj5a3vRmP8sKaCsSmkvtG3339QADdTd7sLr",
  "key25": "5EKHKs2BegmJi53qKetBvYoZq7QB8NSENTYuiFQ7vArsjvK1ZZLzL83WYaix6EgjCpjq46cJGo6ffgNQocQ7HSGq",
  "key26": "4TLADF1bvptUGjC5PBK5PEpoAyeL4ALU5YXxhmRBQaLKBKnSjXLXDFk2mR4u1Qtc9L8kj5XkJLvAn4RiV5Wgz8nU"
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
