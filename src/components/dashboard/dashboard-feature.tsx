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
    "55pKGe4ZuEjvxatG7SmW6FwMVVPBuhEappxakGsVJkNMXBLq36uLi1yePfA6prjqH2B6mPdjP8bX5FuLxAc2gVjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63w3gWCuQ9TF8S8odMJpTJfkAFwNJRi2pWZRtx4pAgCnbkkWoZjxRzBtxnWNJ26hzbQddsMFPgEnNiv13RNTti1H",
  "key1": "59RfvrG2LijBL4yN5xpg8WBVqe53m1Uo8g5NQEgbARxT9CwMrKNDxpuUt4qXYeeDe7o5KwKkHQM1vcSSy6ZUsTkb",
  "key2": "4XvR8gj5qvpHuYLzWQeojK16qmVdcQXGUvSkJee7ERQZSsWhh5QQydmRdVpJCmEpJywWF2Pw6DMvwXAuKhEYFmgk",
  "key3": "3mqKkGHubb6iLpL5DW7iAd6aztKHxEk8rmvS94cxvigKpEk35R8UjwmP8ouu3Ym43DnkADWEHSaKqMpqVALhQzHW",
  "key4": "4WHpBPKNxsA7LCGPGEqFBwcyhDo7wxWyx83vQoxpLdquJ8fHn6xqVoPbMdkvffvMqBtBeHzWd1PCDKTyFMGQeW3w",
  "key5": "3oPz8FpiM2TPFKEWZqSdkDB5bj5Un6cLwmR2VN3pQt2z2Krb9vnszy2jEZSqDdeVcSxVk9GDU2sar5p2mDPNQxZq",
  "key6": "31xjhsFzLb17WrVNpoxpWDhyz7wWLPQ3tJRTzMSFyGGYDPpmopDNcXCabqZ4rziG3jHPx8s5TqMPhY4u6wcPcNsJ",
  "key7": "9KPsfQfbc45EyLGGsaAwvoaFMfqt3REY3tbNxVDVpiCgXpvtiY4purnDv73MjNHo13W9edVJETzXRnAXAhP1XzE",
  "key8": "3N6ZTZyLfp3v5qdGJRw1piTjS3x9o3j9MCUmCGVxfsq89HhpLkL11geLGKtTyRNyRvHsC1rD4mCs9jpm66iWrtV5",
  "key9": "4oumv74LdM7bRhTPfcwgm81G1K1ToSuTVkDHYTw5R8xy9ZMjuSuGooDCZCfuQfoFDN8jpPF1qA1LEVRQnPJpUqEf",
  "key10": "5mHqDLP9DWxfeFCmtdipGFrZ8UibBdL8QADb82BkXLR7z6uYmzDSnkSMGybeLv6q4qjZJwx5chfJSpTN5exFZa91",
  "key11": "3kQBvcvK6T4kFdhWsLWM8X1ZJ2j6QDqj2sUk6UA1MepKEbbSf4fio6fdtS2MMV2A3o64SZGjo3aAm9VSeJDxqUE1",
  "key12": "2cjKT7MTEwgK5f3RBBU8FC4wRrjYLrE9o4auHALraGrp5WWRXxjzC2fo9dyZCNNRYHnegwyU5XXxEPtDaVDgRHq1",
  "key13": "54wNniHfbdesgEFMXQsQZi7UiPxmt82SnU8Q2ip5kY94VxESZChnQ3Eh2wvH9BtqAvHEc3VgKn67WovMdGmAxizw",
  "key14": "2BivNz5nrY8bovwYHACWxbHZq9ngJWy7LGZEmNfmERtp5hZfPjj4X9eu4n9MGvQ2sZ1r5cEXSe6J3cE5D1tGtE8j",
  "key15": "2RaFFNJdEV8ySJYA4MhrsQCkmwUTvQQdyV7CnYPAzFeergLrnZoif1gx57TUJxx7yKMSn7rzsMEhqcDgapdYfDHG",
  "key16": "5yn3aqzJzCfUveiRqN3GcP1zfmhV2mamnK9V2NoszWq4grYoC9a9u396cg2geppKgk46m5iFDFkrAxv4QumEXaVk",
  "key17": "4sPRj52LD3k1buaj3JkxApz1DhCn732f4kShMwK931tzvi5f1jh3PFu7Depr9NhuQJ8yM5ccjZdenc3GwfJA2AyD",
  "key18": "3x66TQGPRUvqYwHLgeRSX73mxQncabYoebT79VSRHnxAB3eBxBDuBYMj4e1MUV9xJvNyBpdKqhnxVBRECjDW1FTU",
  "key19": "2DizCiND8UTePiRA8CuhJy3Je3HwE8ETP97NevgttX8nj7HonaiZEpVrBXhvNQR72V4vkJrESmeExyzBEyLEF3i9",
  "key20": "3R7Mn4XTDW8RC3t2J2JUS3Ay8atEZfUS4UA5aPfkxLHQmQy899QFu7SUhuzHorPpzM1xJ2JxiSvwyzJ57vJUNgzQ",
  "key21": "3VGb9vrDXTB3JrKquxnwEW79A1yHZhjtbSoSSGYKoBE4JDVJdnTLegJCcu9czmBsA7vktTYFSf7Edq4iag53X9Xc",
  "key22": "4NgyLp2BGK7KhwQH3REqnbLvBXDVrhmyCeuyhzDD9kWwxAJjgiQ6cjhEbct7vg5vY3fSnxFfhUQ3TpccgDdUJHXf",
  "key23": "5hpA8U5RzQJ25Xb4kAzaRqubDwCwhSQZhieFANpv72h7XwUoPDECExwD8jXaQanotJ9CbN3E7gZxQM2NjnXm2f61",
  "key24": "2t9JiACXXc8cHW5Hz8bbgoWagD8cV6W9mmhL19nSFRfWC3Swy3dXtWNy59Zm9pRj9HpTH9ZneRifmR1hN3phnLhG",
  "key25": "3H7qcVEbaNCQtGap3UnBHLrBoQdEnnuqBJZ6Vd8j19WdDJ4UjdSNijKQqGqHnTKdK7Zhs9rKDNd4K8vuovnKpsRP",
  "key26": "kS4U4m997bLStbLbzrGQtTaHWwJPCE8yjsj18zPMu4KfuXtRJjbBLNo7WYCENNB8n76mXoRb9n7jzhpsnm4P192",
  "key27": "21s7QbU6UBmLnHUvPfYPZ3CPHCaCTzRXxU2GAXJW8mtkjfgukhPxJRMVnkZCej3CULhtpYtDn7pX6xKiFgVh38rj",
  "key28": "4w9AYTweyqV772cVpZLWSWTd9RtiuQzd3yRupQh4Ru7uzwcMMM8ttVCukKpD7qfaw4AvoSF8GNHb4sKB8KHj29nJ",
  "key29": "boFLBPa2fT3VTaLNWecu7oCxx6gZX5juXCL8e1PCgLjEbmgvAwjHQVsRaFwvG6bpkatBnU8vrHSrvv5BiD1sP32",
  "key30": "2AqePQNMpLPQPRnZtF4jAsmewL1udpV7bXQFTfdN5nD9QC3ziRxYujsao9UqZTGqnqKgVXwmmdLQydaFZBQC5SuC",
  "key31": "GZH629gEPxYvH8FF5w8Py8CGCdS7r7TFYY4viRphqCDsCHCxAt3dRjVDwHyXtMaVzeNdte24Gk3cuUajb7ZNoqs"
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
