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
    "2vNvBYX1UUsAUcUsYfRWJMRnAuFuK8p65giELzzAyLEftnagqgsBgChKzgToWTe4VLy4hV3Yz81Tx3NPPUB1rXbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xE31AWBNFf9VMMrAq7mCG3Ww9GWsbsE3fZJoDFWyMK8Mq33pFVYQNgFmzfv7ir3tbyGX9kyoRYMd7tbchmuDrk",
  "key1": "eaeA8rsGCmHKUcQQPRexXKVoZjGvFxUYqGS9By8ZsXurMrUFicWejwk2VsE1gwefahUoWk8ce47bsLaYK9Fcu1e",
  "key2": "xNNzG7mKUYGzhNtcnYBTftRec2DCd1854SDRExTUnMMf5fynYfx7p3JcPCDFDthmWMDG1ciPtTuS2DQGXCdCqtu",
  "key3": "2gQ6VSdPCgMPTiw5xh6vedSqx9Lb38CuiVYfHjAYiUVFq4Xs8C3doUQEpsn6nZ8vqAx7vgeRYBU8Nedy7oE9184b",
  "key4": "2ovo1ngR753hsJGhDatvpgisq6q6n6FMTz3NopQEDLTY4LSdUfgHgJNTZYcrB6jBTAApWndVt3FmwYmwKENupUCb",
  "key5": "3S3GXejpDWN96STmhZVbYQdeACYGVtkyMDPhFze468f2BqwC8mNd4hZR7VkCkPUkxMRUnNHoi5AG2Z4vBAi8M6V7",
  "key6": "3D8j6b67qrReoc5pNWz5VNvuzg8PcC4aQQ8TS4EHHKd65nEBbPhLWwwy5BQyHKp2MYPdXU7wBeJYEsRBkxUWFJQS",
  "key7": "44y5oP9VDYXrFoL6DAQb51fC6xbMUdtctfJLtSGf3RWaXm4shNQjqFkVckXETY2gwcZvygHPeo5tjNt1RAZTejNM",
  "key8": "31pLJNhaokXKBDLiUNYUh5vd8Nt4kgYSP2By1GLQ4i6J2niWMy2ePjtzhEtfoFRfKBfsuDpXPp5pDPW2gzhQDz5g",
  "key9": "3uUwaPeLC6kuUKwQMRWi1jRgSfjqXG1ZHZ2KHpJe4fVopkr99CLsXsAzmtEQ15q3QSEtaqzXLKwxYqbNNs71nnii",
  "key10": "4SpW7aPNbhFkUBxXzbpFjZVnRJwL3EGwRTUf5Vg31jJQwLZMrSuAaHn5WSDwXVVcG4vsrg7MEYAkd8hNSPtWoTt5",
  "key11": "xs2gDUhBtLeMWHuFnuzsZAFPcdBkDYtokp4zYJPWQsX1QGi6Vis7wmu7cqGw69d6uzxjaBnpEgYGDLCjdWVAHnZ",
  "key12": "2yKpncPSBBRtb46VDh4xXWxHzG9Gtj4bnJrxZJLDp8LjT3iBLgqfX715SsAFj2zeNPaVioQdxSER4rJ8xHYPJzCo",
  "key13": "3bJvBKFW2J38PTFJgrxjuH64UzK5NZZdmARJGXh8YWzyKYVodrwQDNbGr6U2YD39wV3pDCZGTusUVmVynEk3r1Cc",
  "key14": "3RV5naXTNF5ArYi1KE5doPgSR8M6zpgQkgT4biKVqh9uSqC1F5on9MuxduSPZrPcPMRp2BeG7aymSztYCLSuabiV",
  "key15": "47cfL4p9SLzZQ6huKRKxfbN3QPP6T4wsA5tH1qYsWp7V2qiSdVed1F753bcDgMJhwgy7gpFa4wmtyA74vXMFKLiL",
  "key16": "5ghVrqiFr3jNRHfdh2SKyY9Zk1GArmiXBUXAKB1Z5VW8CM4L9g4S6ughinB6ZAUVCzze3uQWYB73G7iWZh7F2oEB",
  "key17": "4vEv4C8o2B8AzY69tNy631Q7VPHDiA1AcTMntR1ovshGMwz7J5Wqx2BPbV9KWBShMBFsUtiB3iCi6dHGEZDtatuL",
  "key18": "4fJp3xcHigRnk4p1k7bUt5vvS1fJeWcCKJNmeWnL58w7t9Y9J6wsH9816LjyDWb9wDkEbdjN8tniGp6bZcwYRRe6",
  "key19": "59EdNVn2BSjE1ABGfyBiYG7xqxZMumwfVzMGK8sDqqLicnPre4hZaJuzKd2KeULWmY24PxcymRzByZBMhtdRpNpB",
  "key20": "VddnfjbZARDvRwQwmgDoN1QHWes4Zn8VBxVFN5z8pFrXnr3AKYYB6Bx8uHdW4QnTXTPDEJnei6iXGZgsxprCMF3",
  "key21": "3t9B5zZSjQprsyPh41Gnsd3eHnZvGHvk6WrB4Xq1ahKfASMubVoXdS2MFMGaHkFqNWMP7sJx2Kpf1MYy5vB4ZTe4",
  "key22": "5ixEcjFWWzBwtMBYuBHi1zEqHJeTqoJ2NxonQSZ4UXwUQGZ4zMUrTx4FoHyibc1o7QomKYYDGRHp7QAVpF4KRsit",
  "key23": "5wNK8b4NDKUDwEJ5ZJhbyNmm3dSXDzggwnKH4PBAB4FNkE99q6FJb5MuoKVzUnKQFSL2uBQbYLeE9oq9fr1MTCn4",
  "key24": "4mNYJm4H94oixrhqYMhAioUrC4m76yUYbmGK111HhKnSqet8X6ZS6SDW51svK9ygNSBBdSAgDNzbS6yyrRsZCKK6",
  "key25": "AEYBqq7LDSG3FsNH7wZF9m6tKCounipiwtwLrPtxavhxihRx7e4ceXZHiuKC9ciTst8xdwo1boH21t1czU1xLq8",
  "key26": "2bSg98q8MhpA9BoF6pVjwBLAFr1cZ7eLdAyR4MdZTovxMBGc347XenzGZEt4hmi4GEEe5hki5HNZRBX1N3vnWr4N",
  "key27": "3cuURScTwRtoX58YHjUwReaGYEvRqNZ7Nqufy2BDd1886WsPWpQJSLFZThNNDsYoeLYE6HkBJBQadCmuYT3ZG4ba",
  "key28": "23DZ5XJv6tLYvZTZUGJhaNHm6zEMw5GzESP9iFqLBgSNUWJzc4aov8KXESDZSw9X4Mz3TBkRMtWSSreuPfSJ2wbr",
  "key29": "NNWuKQDxgHAuZzK5gTkh1TSoo4bVUP7KyemXkApdoyXgQwzUoDaKCzcnt7N3UApj7xYwCooYCvib3cieL928ydv",
  "key30": "r1ZBq5AWhi4wbdt7emptuqnY8Z5XKV7Pza9qmwNEkmD7xgDYKyCweNHJSg1Y9pAt8eFD25wBZwQZ4Uv5YTYgqz4",
  "key31": "fVvdnUvmCxwAgfQcEFkoyqsj3XH4fQuZbWS9ZNywGDgynDXd9fko4Vd9RABcivzjSGpEzgsNuLapxCRFxWBxd32",
  "key32": "3fnX1XabNSwrqm6Pruw32CGLvCV1mPR2HDQxqYbUghftQk4xtWVhyiJtrb4j79bsSiHygRbfzDdAnW59h6yLankS",
  "key33": "4wXaSMzyZTkpVRqr6q3fheS12UZQfQ6uKXE4SZc6RneNoEZUdeATrLzE9Fa1EhE2m3fwA6jf1KDCnYGp5k5xF3yT",
  "key34": "4mB2gQ3eKbutfX5jbg9tSG8sVy4g9X32nN3F1bXXbisjjHeaqzXiPjL9BKAbFm44ZaG7F4jvsG8141SFDPNTPgm7"
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
