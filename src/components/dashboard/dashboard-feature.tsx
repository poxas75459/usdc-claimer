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
    "5NacGZ5kaYWEo3ReNozbTvooVqntW6dVLwcoeNZ1Bv9P1Jv5yX4fLe1487N9V43e2TAZ8J58W2ixP68irUjnE1yU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRgZ9D8wc3A2fNya4fZ3D5Lh8hEagktYK7EgfWrjXSrPuzk68MXB7mBfnGzrzE5aHBQiXWJe3CebWf4D6EzRBYn",
  "key1": "61vZotGvqWCgzixzecGrozPELnDYCwMUp7rN2wYjpKPM4BUEG4g7N2R23fKQbWBjMGvX1cio4bXLEV1XjA2TD8Lz",
  "key2": "2Vov8U2a9QWS1UWPdy66tBmXPuUuBdDeTBxxGegYccEAWqTKtKyMZJ19h3Hyz38Pd34bWWmqNjQCFcuJPMDyrtJL",
  "key3": "3n5fQNKAywgyXeJjESYEmpN6Zyh9ZepZHoEsnkJa6ZU6rPbVqR2Jwgk1a5oJRGRHsqYj8c2kusnqiGw9ni6DV2nZ",
  "key4": "XQTt44XkjBR7drD8RSBDayuX4JCZuTPfW2QmP1VxPoQTmjHpHAnTTPtrNMmftirweNuB8rTxBkn87hUXte9NfqB",
  "key5": "3CokHWDzjpA77uWvxVMo5y7KpyFy7eTGyApn1Maf7g2wHVfVPHCyP9yunD6fzDVgJYihfg6ntHj1dZaSeo9F7w61",
  "key6": "5W9T9nMUhaxWzWGExZgMx3Lw5mpJTAgT3Um8KSHhjktxtV9eeWxqJf8JXPn8ZKQuWSMdss5S34k5FruK2fuL7V3c",
  "key7": "5W1c5e24PpdbEYnLWiisA5WCcd3EaYN9xqFtU2Nn3v2fKoWYe1KazH46cAC7YULox21hMnXEnFckDvgHsR68gJYx",
  "key8": "3Kqzp1eDPdkCSoVSdSYfcXFBay7qf4of3LKY8Mxb9Yt9zjQNTBEhhNSQ5rjuLYy1LSw6BD9VViTTnGXqrzZRuXYv",
  "key9": "4vHiYm1CEseDCESfD41qLhWFEWGyCQAd4RxFEHevb8Fy7F6m9N5WP35na2Q1ZrepTdif84KJsAfpn23hWTqg9kXo",
  "key10": "2Eo5ufkZvfGXv87v9ePN1tC4JnNroHYKTcGWmkF4q1nU2WYeA9wn7CdcfqJXnhY9dQsDAd7VWf8tQQA4wFMKmCyZ",
  "key11": "3hBNN6AW1SbqvHZkpem52dMWhVKHwY8F9r94SE75jfRrk6a8w46xY44cW8oXhDNnRVZaxnw75jLozX1P2aRxcCL7",
  "key12": "5aFU5mE8MTe9wXQvfPvevm9MDfeMAYuWjSDWV9xpyNci5qWnZdAsWWkRsoSMWmzog4m16Si4VSURNXiEK3zbtFUL",
  "key13": "573RFpC5j6Gat8nkEvjpVVqqGA3cUmvd8EqvyMGa5tY1P6sx2bu1aqo2mtUixuhnwBP2kdiFPeBap5BS7JbKZn5x",
  "key14": "5WdhTLxqurJBViB6wsczeLCihz8jQZHVLgnDYnJN448V9wfj1iA8ZqoJJDfT8U1gpGT6Ys4UCMtBCm2rDWJKzgkT",
  "key15": "3wamxxbpR9mrdBhLpw4EjwAGYJcyYNf3au55TJWbX1dQWajcEeEYqPDG5ahWr4WmE7MncA2PFX3gDMUmuKCSL4M5",
  "key16": "5BBzWcuS6gYy5RA39M4dC3w79h9mxkiVh8oX5U4Vfnx1zfQrD2xMTGfLTsyQf6nNP84KH35q8mZHLN6iwqjvwsgZ",
  "key17": "4iaiyCJ9Tpn7qr83rPmfUeVV24wyfQg3dECvjgoz9PUYZJ53FhyCUxHDEpHonVqsvaR94kfhLnG7gYFF7xEZ5T98",
  "key18": "4Z26atA7UUsNfZRAgefMyQp7enTD9DL1HWpmKDbFU4VJxFMmR6JvwycMo2RNU31qbM63d4M7b8yNUAhrrr7Sr2WX",
  "key19": "3sokt3vmXqfn5twQfmQVLGWam5snEtePT5Drv1Dvxm2bq51bxYfx5DHLR844k8jCwrnZzzcyfcijbuPjV4WBE1Zw",
  "key20": "7RyLQTyG56qQUSHqS6qTQnYfMYm2zpiTEvTG4YyZp1kbhRXZKZ393JjBnKqDrCq9CVyJjdqHqWzjywScyWidGnr",
  "key21": "3vRcU6hKsrb9KQBC68p7e3k3nq8F4FL9BgQ89KVMBppcu3J15sjXPFGSchfHiEuPMrCBrg4DR3zCkDM7u3ArcURs",
  "key22": "kGG8N8EJBvi4Hq9dkMpqkrigzjLKWFiAZ81umb4rwecsSWfTPZ7bAK2FmPe7jVpQbirUqWMXSWcFdpGenuCb35t",
  "key23": "4FwsDC5RkSyLN5VdiTByzfnUR97c3WPQs6DRDXV1Xn2AekGKC2Sn7gFUucGE31JwzTjGZ7simh3qQzfnqoe535Zh",
  "key24": "2RWZhE69wYsh6gym4xsAfURtE2yhEPKnVu8qzPVkYP5LhunyDpQv8JbN2H3BLEnL1bEabK7h7qTr7rcJkHCCCA6b",
  "key25": "foqJ8HVPnKNwCkJjiG7TYUoSMHEAa3xAs98Wh4LFXrhyX6vVCH3e8xshPU5HLDGxKqgFyaPcpBWVUt3dmzsm1d4",
  "key26": "2CCd3DkhQPoqkXYwM3XdogMLuXXTc24k3s2Fr4DMkQmExoQcVVeMVXWNNPMZw46veBFM3Kg6wkazekz97qzboCmP",
  "key27": "dnZby74Pg4gm8HadzJquJC9dGpwnorxkL5CtJT8M6kgn1msGhV4zkkTPGoACJAfDUYhbUNUAtjJzj8oZCDyJLy2",
  "key28": "2rWzWnJvsbMZU8n8kdvUY2u7hp5ALgxNqAhdcqmJ461i2ruqyQRfCtZXUbDnEA12XWx9Q6dQ8FSGEQrqcjX1GyZH",
  "key29": "BbJ1XfXMjuA5KmtgKB7UsiFLjfmupCR8uWpRGJ9obxFyAYtbAobNUnzNdvSk7JVjmHD7Zp1qZ2GJueMZwHE89LM",
  "key30": "55tCUMEzmXip1UBvDpBVbiq1oZ83kPw5EQEnFUKXbqycmk7XngorVy2N81M2Xa5tfPXPykr4SCrJivSUxxnLmWYc",
  "key31": "2xfUDpNcuaq74MdfwAJEkxtKUuAASsq4LzQLSueeetB51K5rvNgYyWkrM2PvRzmuJgtDMTp4Bizs8XEZnceqBdAY",
  "key32": "3qBproDKyQtcvARq6icZpskuVsHSnMEURkaNtSGYEZgojGWVzAJeqtCPkoaeaMV6BxXXHjHEN9vavhbiLhnhqKvV",
  "key33": "2qgTd4EuXnaunT2g2HB4DwB4zZmcMJXDiV6LYWqhR1vAE5AW6t2ceSsuwAMmFFP2ijzYWeWU9EPmVPUnBAQwrMkC",
  "key34": "5XyQchiedcjZMksrgMQrSzgBJgJ2WonZMsSccScVx965U7mJavjegv2UGN4rSLabFyG97NY8wZut67xXPPQCRF1n",
  "key35": "4ffEG46fVWJJBWJm22CjMhuBRYkHGjRdAaoMSErat1UuVShmo8oEXqWrqADMskbtYRfewEjL5RDE2JCcgNbRUH8J"
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
