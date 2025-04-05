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
    "3vsnkHyzDS3t3qauGjJDkpmnFu11kPckfaNzCcyU12ZBbXUoGWv7FK1xx83xRA5byccGJUFFaB1GhYYTbjxzG7TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41AYGNWYdtdpNHNeqitizif6JvnLxtjS9g2mjJXbZKyfRJbhCgYT1X8hTbTBsWYfoVpznw2udN9L2zcxkLBdwoVD",
  "key1": "Enz6u8w1K9N6vD5MujCNH8tmyTAqncTSpJzB3VELeA7vQ3XamwqynsaA9g9PPzQskycbVCFWL3L78wHgjMUgSoP",
  "key2": "5296MpuGtwN296Z7U2uTs9qCmrydPEjq2iiohqhBBV3MYKicnCgoMXuTPjE5iYAeerAA5kW5ReMZMzk6fjGaBxyZ",
  "key3": "5K1Un8b1mw2tdrM6uNM9cU8JZxdQJ6hAVw9HaUxnq3Ffdi4TxMnY5J31e2kQANHjQFT3XudY5nkBbq1YQFG1yvWQ",
  "key4": "36mncZ1DsqLZxiH7abvgk9EDExgrmVbvF2ZYcSBFNSHuafMA36Pmss23SsGad5CAubzTVSFfYDjNBqq2ccTcr3rX",
  "key5": "2fQHnovBiyiUF8nXvKUdYNC4pPvV3jd7mdCUPuBZchsouS6rSraiQz9GvvZvxoQFbkTZPNfNP2ejEQiHGniqgX4C",
  "key6": "3GBjhRDJAkRvt72335cXTsVfFNao8T6Uc5PkmYbmZMo6EEJw19w6S9g2MnirK3G7nuxRsf9kCKb7m5k6d4dQ9DtS",
  "key7": "3PUCp9WXELe7JxNnyK9dJwuVseTQpWwACvkDa2YVYCfLD8p5gtEesXHCYyzshkM7UwXAoe1xXyzcnGUZ12yTdqRY",
  "key8": "4rnzo7wseinsQer1bNfPsxppMb4eu922qnAYaESsxQXRre6kF5KqnxGLwud8RHkEMXHfMA2jgRwvv4B1WFrFQpVa",
  "key9": "23ZGagpe8w1k28wMrxdbDD5D2edixjWioDj7FL8sSuLu56xcceSR1dYr5hjxfKmnMNJKrW2sfYeLjnRBcrMwugES",
  "key10": "5v79eVuEruPWLzsvD2F98rttfQzsjS7sYPgevAakNacf39npjh45NRd741CB6yoWCyVZYMkn4pw3gYpBbz6K2SBw",
  "key11": "5WoRPcfr1AHnYqJwNm5wdYT94FnHejr9GRbe2XW83dwWfRtm9ZzivBTwVRoqX26tydnfxybmS8BU9SzsSShYttpn",
  "key12": "23fCuESfbzm6zAWtR6vBMahTWPDua1THDmBJJzDSXvhVFuLqrKuM4LxU73xfHXtfeYxiUbP5TVNHb1B7PWi6XiSB",
  "key13": "3oq9jwBp6zLL3yvk8oYHanJiD5m9RhqGNky1rbAEgqJEpYEqzxjXmTkoc2yRa1qUETEEzUZedjVDjoJHtNtQUN5B",
  "key14": "4KZTmB3nBF8iv6SeGMSfgZiLNLAA6h1xE1JS4AukT4GzrEM9eCy1nJTdFGygL7ebKjQ97CCe6Wa8Ja9t5bmQkM9g",
  "key15": "2uRWhe1EabNuDRCfwtrV9JeoQbRfyrNEyefYQqpph4VA15u5EMwZPBripWjFmkhVWcQwTcFm6hKxF46zXexEMaS3",
  "key16": "38Zat8fDJtAEbgMVLojoe78nXC8Wivy1gGQiXjijEsjC4uyVSXDzrGxUACk1Ayrgz7AoEwv5QzdaNRGVBbVkeUzt",
  "key17": "Wz5mH5WL7cgicCwKrTChWGi8WvpeeqrYhy3vKyULnomkFd1ob2yeTFJdm1NjARKBuVKzLwQHpXqaFRGz7Yvyqnp",
  "key18": "3JyTEhEkJWqUMX6msuvMaTtQkpT6qdon5RLvL13NpMPL1UgahFx8urFWkbvZgzMHAftgq62q6CuxcFaEEfBXZXz3",
  "key19": "3jmqp1gpuCjfy4vEB5j5f8ygG3ab2PEaSVCLAUdsodcGcBfCbfkufR3j4XH5oKdAHh1YC8YEEo31ToccS4Y8FNF8",
  "key20": "5QHY1iWr4EdM9HWQp7D8mskfbg5HagfvEJL5B8JEAVFrfDZmJhCFSB4sR9BPBUbspnLdqjD5rwKTNii2Vww17zry",
  "key21": "3cY9GW1sQAaN24DNkpubQBpEwwj12uNSuoSMefJgiARSCgUuuAsT5X3fHNAo9nvXDSncW64RH1YnUrM9yX7mgrUF",
  "key22": "3gsyf2HxvfLdu6yt7M4p6WKyWdPfFdBjcsrNAAWnL17KNvzMP1Rth6dfeEAYWRtd9JWu1WXK2pM9x64q6gKH8wGy",
  "key23": "yKymaTakRRt5eJEFXN2j6P4m2y2MPv5ENZCKsNuhY3BJacab24ZE9kzGUoz53bFx14dYL6xNuu4QPYLxk2X3Q82",
  "key24": "3DS1jUhthGPSZa1g46M5JGA6ox8JySJAUWt62NQeAUDm5sEtk83STipNht1RbhjCdy1BP5KftfMhE8Z8nWSWJHtz",
  "key25": "Fr6qcuH27qzoJquPYfe4s9jFqdZjayz5ahGuMZaDyHEr722BVy1y58bkqJVB9ZDBeY6NrJtt2xNzSa68SCMBCf9",
  "key26": "3L3u64zk6LxAw5P5S8VmFFMBQwNCQQvTj7f9fA4E2bPQuY514EPv62meKJTessJ24is6ovnAf25B7KNPYxMh1hwb",
  "key27": "2buoVpjPcL6Ym25QEyBqor7TeitesAFPptUFyEVam43XK1wdj4yvQaMzQiMFYvwUDYfyHn8ctCveSSV7EiYhj9ra",
  "key28": "3qM1ysMzyxAKuu1o1uFGaUr8DdLTKFteqCiqCSU2mFLTzFpeDghjxaCYNmd17jTUJVHhuEdeLPH7Y7oau8Tvf2qB",
  "key29": "Tz39aXPXdZBvzKc6JYGcFXDYnwyiS63XiP8uTB18H3ceCx5c6Bs74jGoLd4taP8E3RcsmWYqV5QpxENdm5urVtR",
  "key30": "nyqLqbUoCpP8YDk2asQukXAbYMKeHXLA4XbuycyUcybEXX3Rayhkv9kda5bN4DjhbYEP4rY9RVi68PkH6MYn4RS",
  "key31": "33V1iqHYhzLyNjNG8e4PD1kHrJEDVx6ny3s3zCAPogazuS31RGwzA7PpDNQXCj4LZVsxr7JXqmi7MMT9zoBCFhma",
  "key32": "xUoNjE3JFCtFS5qf6mN2zjhCWjsxaQkdUx6srfzzvMEi6UZtZvQ8vGs5eE9yXhN8E4mA7GqBy1FDkszG6M69BL4",
  "key33": "3GWiewRbvSGPPcroD54i2DXvn75u7Grq4awkriH8Qjh6hewX9Mggr9YF3J2USSr1o1QRx1VpEBsjYYNd38EgaSur",
  "key34": "4AEmFTCTPw6na7JqBFnpe6BwCSpjqHVXpZbkD4BtD5cnnkfoGMeaAkP6j9k8BSTGXcwuabtMWcAeDK8KHosMzubQ",
  "key35": "dyNRw9x98hraS4FsVGFKTtXLU4futGyfvKTSZmsKyqkvDxu26UVmjTExx73Vf4PB8xinB7FDHPYwhj9SRTh1E28",
  "key36": "dRhBw1faChvxYviyAK2Vrrtevs1SyshGYuX6iNsCqyh4BZokVY2mnN3UAKUpw7nKj2FUm97382e6eFcx7wFmJsd"
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
