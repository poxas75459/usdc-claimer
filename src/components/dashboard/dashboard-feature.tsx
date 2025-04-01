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
    "3oPTwVgqro2p52qxdhVwhqMqyNozDBuNqyUZg26gApDR9t4ywAusRx9Nhs6YK34pdZSrcHNtE78BqjR6E7zctSdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqswHa9Z6cvdLtW6BmjT9kWVyVUsE6fW9jNh2iVmfrt2h9Yrhzgs5EfhvyxiE7CoA8efB69EPSwhLF3hYbcVaXK",
  "key1": "4nYFLYSafCXmzziv3Jk9RhvJZb5sy2mXPKMBoFag3nfMR3jx35UU2w7u4ApXxWMDfhLvTRpVV4otrEvYtgGsXkxn",
  "key2": "2ddnZYUuRvWFaBEmD6U6dmrjwaGjVvBnfnQh2mYL1sCwqjg4a2nufuukeZwh1NzEhxVL6wdsph1dg6QMS1G9RQiq",
  "key3": "4iX5U87vZhbWrqJiCzqee6wgS4fbcLPWuzENNppNJnFNfMXBou6wTxAa9WRsJz9kWzF2W2DjWuV6BH41Z74XnwQ",
  "key4": "55zkBTjFAWSMi17y7XxRfXn5gGGgADpp8Jkqk1VjWajWGrp2Rpdq6rvHnBwqmppbBhPaRBhikC3QYG42Jg2qKbSx",
  "key5": "3TZZkYz1xXJBTUhcRi8NmpY9EvD1T3bQHJfM3xiAzrE65gzcML4s99XEe1XhHHC1mZsoLA6FQHBrzfXoC4jba1mC",
  "key6": "3XTAyJ3TifPT3xnGWr1nJVQKw2pk34rgsfVRTxghjhckpdQYf5kMB5AhYxpk2Rf2khEF9KkU8JuTWn3HjvZJHzDv",
  "key7": "3LSXuHi1PSkjavBpTLyK3VPvYELPu1gPztsvNdjxgBzcQJxozXR8NzNVmHM6fKQLh26fdaMVb5uGzH4Jp7AE9rpM",
  "key8": "3NBqWX6tQXzk3FsyLdCchNzbRJFzZVAQEDV8YHkvHfJArdXA9wNssCQ7TagJk8urtZpDdCSKtXVP9aDg5FegysjC",
  "key9": "3DedzWpSemsp4S4eeckM8aa4RXRU64pVJ7oVtxhep7XZFWcDzUvK6SmbahzQXgUzypsUNZmwsE6Fjbg6KFbT8meT",
  "key10": "511JpyNv4iuKY4LJF3jEikqvPf9cScWYJYqwyHuYs4k5sNH6QhfpMioSYD58MQYjrENiMvmjBzxFeXKt7E9DH8mo",
  "key11": "26sfkD8RwS6FmU9oYq67PeWxXYMc78bdkQqCFFo9iWKDHbZQ7GDGHxaSYHguhN31mq2zMsM2acBGaj9sgnFWtufu",
  "key12": "5qLdhDFrdemTkfkQGLyYq3kxjsSj5HEfuQPrsstq8goMqWtBW9CS9PKx7iZEN9BLbQhhXZBLLamq4z32KjoRg2xt",
  "key13": "VfFMEzp7rmjFS1Q1C9n1VremRsJKffaMf9AKyQvuQWwhUnry7xK1NDTPdK1VBe3GR79PURCh9BnPL3pQQ4Eokhm",
  "key14": "24d5GN3mE1oqsN4dv1uoYhGMBLhCCuAUvgTZNf5o4Wr9Em4M9b1UdhWKiVpx3wtaf1ENnfdHthSixsoEKcQiw9Ri",
  "key15": "5wscwoks27WyJJ7RvnS7uUp6F7xfJ7KUE9BkBHqmHSeMCxknA1rahzTjiMkYXjNXBrBeacQ8mmxtzGbKuukXHujy",
  "key16": "4ymA6mBg1bxfVMnCQ6cdo4oKPnFm2GDj2MWqCEhi7YkCUx53CKDgCR9neogtGydddPToAs7oy9et9KxeNnKJiKhA",
  "key17": "vE7rqxtKznuExUwv3XqsYRKfba9xzvfPvE7HCKD8GnmtKWSM4CH4JLBU2TFtvegCh8pJahR8m8wxo5dj7ts3NGu",
  "key18": "Ja1vgLQN1fH4faCDLLMpcr9Z8z4tV84pzvrYjy88GR4pr6tAyiJ7nydEfxmoag5uV1fsKPCWsxHxwG5UG2tZGuo",
  "key19": "3MU7nNsbvx1auGQZjyVS75YsEgwFycXsDQBwhdvGvvckPok7KoTXyjXWESruMETyFpsuBFoGMpqD7KFFmKhdSaye",
  "key20": "4S6pCRHtu9eNi6otVATejeTCbcidTb6q2tirkftzdDA5m9ZsPvXV2hNmmRCGRohfC5XV8qZd6rDWJrrLKn3scJvt",
  "key21": "3onPYyW6wH5MgFC5VdtWwSAFxreDLEDA6bMLoqRJ6x1H7WSpytrpC5zn2ZZ5fhjGYWYnALBAPX15crnnejcpeeGv",
  "key22": "21QpMKar6x6tACbs94gVCwxTYCZJSqm1TSa8iCfpk7BPJk5ZP6J5eJdezPXm4ruzW4YjYtvpjmSw5NeU7bhfCKgn",
  "key23": "5d8y4vL5iAqHEjLKYfQGr6WCDqdNyL2WP54QUAFJYJ3XofdX985Xm5oWwjXmDbmLN29cfqKiiUstiJYbADwj9M6R",
  "key24": "46nxbhF4YGCdT6jgrKmJkv3dxxtLgNYFnwuLa5XwcdQjb7sVBqbSV821dr3MFvLFXQoQpV8g2CkCR76mz9Kr2JPo",
  "key25": "2EwwfAp5qxzShLHZFKW4ynpogF2n66LxCk1UbP5WnHc76rrFmuaNtFMsdu6oXrx8L64rGJsiANJwfBmsMDkbUk4w",
  "key26": "WrwGT5uHDrqoq2sKbjtrWhxqK3c16MM2SQKbXLYaJYKqUwgkwU3bHmuWdm2ZJaWJg38KvFaWJUiuXBza4TVmWp7",
  "key27": "5Bw5pywq2NcqoV9xaya8rEsbJMyKJXctXFP7Y2k5CMv4n73DVf1NDdzUQAH4gv4idPJbK7WPERFK274pNHXkaVGY",
  "key28": "2beSikAPifQcdykeHcKN6e9YUzD3iEgdZH6UrR8TRFJaCppjz3omRX569Az1HqEuTVMurcWhegtoPbvzyPTZhTvq",
  "key29": "2qcrHauZFiuiXUr1ZkMQSoTroCeYd9MyxTM8K4CxkypBr1Ya8cxUPr1rss5mkn5KLsUtzYKECsmRdiR1sv9QXZUr",
  "key30": "TkD2va7gW8JTkXnKS6A6tyw3Wjj4njWpskcQbESGnCfLAHBGVR9tTf2cz5cReE4tyaU3wrsazTcyrD5RoYxYtvR",
  "key31": "2GfJ2uWWUT3w5Gnzfc9YjuVr7vXq3U26bsjpHMB4GxhQ4v8ZTPcDejUpTuJhS3VbTNZVoVbfQCHchi6dVk5pPTRz",
  "key32": "28ziNQWXyrWPc827P3Y8azV93NEDDU7dnBqX52XyeMofKeUkYmDVxfn3uGthwdDDeXPhNF4AxGsxVzTYkwFH415P",
  "key33": "5HdaB3yn6eqeJM6rpB52ivmPBvnfNA1YV1sNpHRQSqYBH58sFbiepLFXVA8NNrTQtJja95vGnyHdxyjGWQDy4LFZ",
  "key34": "597eDH85EYYkt7at7QhsikJqnf1vrvG5QQUg3swNwNnws1p1fAMWxUbdANB3YtEq5FCdxTJ1pRe5aRc1mRNyqMC2"
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
