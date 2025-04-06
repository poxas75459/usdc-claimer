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
    "2cLn4WQkeyhq6g8SoKZesKKKuGYFFMwvjwC2JBR4wVych9yrLPeudw5F3gbc2z5bzrLCSejaVqN4U3t6xAPDLGj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKWmUTaAyLFcyPxC7gDCYAVCQ1eJTnKattkmp9onE3mXjhyyn4w72LUGP5A6THSy4AcecNYX7vUFHAYv7YSUAKH",
  "key1": "5Tc8Dj2C6KX2BThL7mwn2aW8uQVcsvpkqRrKV5pX2VcZfpdKrHhLyTvRuYaK2CWyB8xTZ1BWM6ucmfhPVV1xyfJF",
  "key2": "MZwuiiXfNrdYcoS4ySLLqZW2JUXXYHEv7UXv2C3GAFYtH8acvSbPMrQoV2arBMGRX5h4RxvREPJ6nnMEVgEtocf",
  "key3": "3U6yvNF42UB5bXkw3ZZ15Hmb2raMQQXpRn6RtfhnNvGzXHn5FnW9Ux2uufDTE6KwScHp6CyTwF6QqmUAxSB4NJwf",
  "key4": "9p8dmqv5iwqv3iaQ2thSDx8qVHbKfo1TyGzBbgVMSWJksePSpM9SmcCaT8NLa3gSnzdxYnCgvjyEpdt4pfbzRsE",
  "key5": "5sZ6h11UkoHkqzWDRGy6ErxB3hCssVvczfAzgF6C8X1dHMNzMiiyGaixDzpnYc7Swhrot4ToD7GJwPBVUxRo6Nhx",
  "key6": "4B4rVS7USPtYSWwRcGg2QFTaaoGDzKociAQoKkTX6Zi3DjBeP2Xg3dSwfxRnYAXXY3hvkqQnQju2J7hfdcH5QDDx",
  "key7": "3VTQft1ENF4ycuXTn1tX11b8hnAuvmwqyNrXEwX3ixc8Nd2ncwpP5vc9P8BZoRTiip6zTW5N9wkBmQQhQvhZ9rx8",
  "key8": "4fdYchuJUGLb5kaTnrMsKPrqJH13N7YiKjWySjjRWcqxYrQ2TAdXLtJZCUKjJc9jEtVuBJf2dFK2S29pq2GkhHVz",
  "key9": "2mLNCDEBWKcAbzcJcCDeMKKMgQcsAQ5TDyTJ2PC9Wym2BaNGtsMLiMGCKjSENnR7ca7r17UMazmjfn3zDLZZNkEy",
  "key10": "5HnarA3jv5WCRq5wjKPWMHZSHjwHW1j9bC2gXVUoWpoBxm2uDrn3EZpNprYXa5Xeh9LaNe6qYusxKsEdKYFNEKAg",
  "key11": "5Rh1VBZQHYQtCojkcNCbFPrMuCvkK4HgYLjTWqTpsZwkhgGxqV5p6k8SkBjRz2Nh2GQZVwhNsf7bVSbfAdQCWo7v",
  "key12": "fUwfPAWCs2HVfYG2kfDdn8sP9ihTdZdgn76NRmYByntVnF8zfqY2UDXSw1ofMUKHZHCp6oPdhyNJ54LAA3aMXZV",
  "key13": "3eFaQT8Rw1UjaS3hj7PpVebydtncxEpNffjuiahNVU4faGyPrTY5iYrpZ4uSej4U1799vT24ccn5Dgd5K9yNqquw",
  "key14": "5dytmGs9K7dsdkUgD1TCVASY4CBP5LS1WkKHVaZLdpGTomRmDaCCo68ssaLFhxEbfosu2o5p2PvM1YXJggDXZauW",
  "key15": "tMAb5M7F9RBVPMxKHGj46G284mC3y2vc3VXzgFrRGxhevALPd2GTzqnUi8MrPzm7SNk9jdudZ5JshT47q7dFXPE",
  "key16": "3pLFZzMEEWUp1d8hoGkVp8DbhHHZ4ufP9MV4GAMSbBJ1Ubpw3mURYnE3dyyYkbYcYaWU2vwHVo2RyDyMgRReqTCQ",
  "key17": "238KzRgb6uqEoyjDAxMS3XCRYNwhBmoSNSd5g4vt2FbJURaAcUvSvj4Qg9DmcVqiw6mVEXruzvSF2tRW6wUqgvy1",
  "key18": "4JdBi4ZR1bkoxjgeYQe3yJkuaghkx7eXcd9frtM18gQ47RejzDT4DK3wWjDqXBLDU7VvyRdJtH3L5jG2Aqkob25Z",
  "key19": "4VikDUwmRdQvQhTbEUfXggC5qfxHPb1HqxMaf38mv8G3fCbZyTmvFLqKoRouRpwAbfVK9CYPYhpwRhXH4PbvdiJq",
  "key20": "4oym1gvxNqtBZa4MiWVEieSmmiuuFz31HFNibHuoTYc2nvCEYoo8GRCtfqCbqVJmJS8QBX8hXWnhMSoXhnZVnLdB",
  "key21": "2duUtKkayAHAPdUcYDZZPQC5cGE5BjGEF7ZyyWqUSHF4qzNyfg9Eq4BPxk2Jtx4YCKLChh8gttheCW7dwUA9fn2Q",
  "key22": "2KqKZPZZXcYcTEL7TmYkV4QkuKuQt5jobFqmrHJVM9M2sTTSZRxFSgqF6XtBzu75KBiwVzeeaNvoQvTxfdH6KFNr",
  "key23": "Vqi5C7ydb9KfRPyswyJLj9T9Bh97Ppt7w1TFJyGcJgxavRiUNWcwNv6o7Qn7nRPYhm6iECT7wkFuvgXZxA3oCSL",
  "key24": "3bZS3GkwHM2nFLNQxyyoqCiwMu4nhSoH56bp8pTEdgzodoJmmACz9FM9XNEVs3TDQyHierMgRWPZAhLBJtZ7xNBP",
  "key25": "q7R1sTU472TJtcrXeDsJ8Be15WhFZd2U77LaAeqZwJy79d33HnG8t5ocpVgjUGA6WaBCs3BGGQ86bdhG4VoQRzu",
  "key26": "2jrK7awjSbadY2TbzQRH2LS3nq2Can1ZiBWaB6yYZRK1qSTAD7qqhEjjuQThFQ2qayZbsR6wMxJgT5jxqdmnLG5B",
  "key27": "3FspN38ZougWXwQomwd1cd3n3agPA9TyLTybHjpFW7Hb9oEXsXSzBXjdQD3JAEHbXvz1D2ZSKhvDajMcP8rduWC2",
  "key28": "3yYxGKEeiXKoc4PTWS6cNyXr5SH9k3eFmk3ANrWYpuiiZJ7fwe7UqnRJ72bZr6nAFRYrPKK769Z3u8vvhjwdRN3B",
  "key29": "3sjuqdZqRyj8PYAqTh8ybe9AzCFidG5LU3hRV4WyprXt5dQ7uJNbZFFXDyoVcphAxYMZZAqyrmaWA9TBSxAHfpCb",
  "key30": "5nyGbf2jpdsmnpCXqPQzL9sud9dwnQJLsPwortXibu3XcTzDmKaaXsbVLzvw59bxdHrwJXZe8g7oVu4LfpUUteAu",
  "key31": "5HY7BjNjVmfqsh336HiSVUcQqtaB9emh4TjWPSAtPNNM1aKLWnY8uHamzu6NMDCsphnTRU7E5QMbtyXq6GLs5aN5",
  "key32": "52m2ZoCj2ygZwhM1zeW1uXbrrmDiZCDKjtLFGDmzjnsWr5Yi8RNcv4L2t17DJSXC5XQtQhh3XGMM4ShaJhqhAeE8",
  "key33": "gqivQtXt3pGK2qg2xt1XvAyU9YqjmjYEppFqjW1Lqjc2w6qTDbEM5qu7xW4bvxCDHDpmUiMNLRRvUeJWPF4Dujy",
  "key34": "3Vkg5jFeQwJ94TwgbyeiLieMfgtoWEjXWW7j8sgB77fhGqF3RizXmMdNhE5fQexUa7zmzz7RaP2Ckv7BK8mUieSJ",
  "key35": "3LNSLo5Ss8uGjyLw7JeR6c7S4k5rZQWA8xbpcWdMXuvTsqQgCi9JUoHaBPwNrFNJLX366ZigjFqfQoGFw6CbZ7BM"
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
