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
    "4HkCmyr4it4LNcNVKK5BLVF9M4HcCX44EsfHkXEvb3J5HrBCDFq9SKrpGqqrwe2FHAqKdHjJKs5JPgQsi7651NG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LHJE5znBjsXUFaudnAXVA3iaHz7vUrNxzqVWXrQVeXgxvHLbCkdh5WLGKKY3gLekdjFbMBtyZ8w3JC2UJ5BRz9",
  "key1": "2Bn4QfH6rVF8FR9MrRzwtoxRRtXzjGwHtrRbnwfCk4gjmm8pGPHW26MSWsEx55bqpdavEmyFa2LKiDEcycoQp2xb",
  "key2": "64H9qg85xnxHeSC3LLPvgAUY5Y3rVUy2JY9Mt95PpDGFojRCtZoZAnPM4xH34nRRJPnM8vokpDtcqgLbXkKAxRtE",
  "key3": "2a3dFHmKVyjJZmGakcqTvdmZxypGHtAgJW6SPewiEAk8bhFfxooKDvymfXFZY67vGazvEhCTcpNCwDzqfHdiKRaU",
  "key4": "2EM1xChqtgaN8mR1UXQiK1gzNL6miMGernp47Sjgoc97V6ngsVTSaWrSqMMdtffNM9VWrEJW2cNyf2ifz5v43oLi",
  "key5": "314tB9hkfeQyF6MM83mRp9zBYHrMKbmyYTMgMhWa4asMvtvRH7vhYuDPqAdbhW7TUfuQgXfvJtSTU4WjtjzC47Jo",
  "key6": "2ZbXSqiYNp9i7XTSK9PXvJzi669hP2RgayyUDi3okVDS6aKgwVoGL5AZqUZia7d9sCzmMUgdrLJzQ1cHSUdQgEJL",
  "key7": "52KWNyWkXoS3aUwGRxWufqmcpx82NBLkZiY8Dnmq3ZMJyGYv97reSYnPQjaHHgbhGXpGpmJ4GNYvNoPQao5oV8Hn",
  "key8": "3DjY6m4ouhJpyPPCXZV3kVg7wk15EPEvhf3ND7fWoDZMSjTtvxv5jhBa8ioo9VGkj7o5r2sFTcuGKbuZp4FoEjU6",
  "key9": "TUBHV9Rm6YrWs2rCHDh6nDNX179Ygju8sFEig17Ry35hLGctEyqFseq4BzZhjLrzrrvKxBWjkKnyis5RFvcFYKV",
  "key10": "2RGJYSFQ2QR7NcL42aHSMF87PKt45f4XjgTUx7N4bjBagizLee3gKE8pBHu8rS8Pt1SfyxnPitdFzpDdRReJYiXA",
  "key11": "3dNtXiHTBDUWmMJJMBUNfbmmY3M7zuusk5Bsofy6grNXbFiTRhPFhzm4nvLqEnbBz7NueFsJ9Hj5pC6Lpgg16ntR",
  "key12": "2RSEhywrVQ2UnF4fR5GKvpuSzpnXiJpiHtUpq6fDNbCGNqupQRwx4EkwYYoposgDAv7DT1bRVpgt4BkzPf5e1QZY",
  "key13": "pZLxRmpk1XvY9LRY8XjNkkTjR6zk1wFbUAinvqUyojRyjMhc2mQrF1Gn6CM6wGtmrH9EQ6hMRJqATMucdhPj13w",
  "key14": "5WdxE1cZFGwJ3CDWKVzDi94qrXnPB9vG2nV12zxr7VrBEBk1xwYfNZvZsVfT2abWYrD7rWCZ1yNfQNcd37qGcE2g",
  "key15": "2HWxaBYdKezxhLcGAeXdyU2wRE5GZPgp2qY5TMnasjbBnNQmaiKoMB1WRrHAbTJJBqF5T1BWTLKy1ynkibfkRSZK",
  "key16": "325JTKpCqX19zSmJHAu2rQ4xHYqe6NJCrTiWYTF7uSEPtgQwyV2UtSMUW6b4mewYqXJgnGVZFPj2HAU1pHMHJE5X",
  "key17": "wGbv9gDfvbKKTgRENE4xRjoNi8B6DDwz97FzbtvUCb3BBUJ4doDPQ631w9iZVL8VF4i3mA5pBvKAsYqQa1qvbHw",
  "key18": "3YjpWMcSkLU6gFmZxJvnmTNXNv4a7Dyf7nSHabqBcp6PA1cBjK9v6zLTzkoALeQ34axopxXZmubpNT1kd1L3GEHF",
  "key19": "ULhv3XSZetxu5sX3yS4U1B9ZEbTAQTtRr3tqkaVbVGKRmFzBrYEaZxsTbvYv4D9fH7FoMHfRdcF1Em7HsqtKTJ7",
  "key20": "5UTZ8BfZgPrcTPtC1ARuCDGoVNAHT1GSzdezcGjMGybU9kZ3y2noJbKJL5aMPKYKteJLGCHoyxEEU8SLU3Sq3bMm",
  "key21": "5n7x3K2JWezNoo6woT82LM5fAPUMXPmYxVTPpQid2eL7bMFuHxZgmGCwwwsFQmFXyhjGABsHbzfAZ4E5vYKqr6dc",
  "key22": "4ZoCRhd5d7drUhuTM9xALjHgQ4FapRMysQ7adNoL9p9rCoQccJrgbb4PebScPBz8yTmi52EfHhdrkZwxBbDdahsQ",
  "key23": "4c5KaT61qFyV4ewBqvE2KnPAi6Q7Mbcc2fKt4r53X47MNCggcZ2gYG6iagEYaMFQdZkr1pE4jxqCpqtMHqzY4PW5",
  "key24": "4EWErXX5GznpmvemKKu6VNnNMP5xbm6BJYbB45U2Tb92vVDymNn2ppBfgvQgXbu7KkbCnjuEB69dL9Zz7T9B1Dmn",
  "key25": "5i7Kxt81g6kTbSU7on8e9a156HNm7NEMvE29D9tX4Vx8ZZU9mJs9vHwsx1KkMEZFC5KCLGzqmZtcE8aqtivMeg9G",
  "key26": "2fkzAM2Hk6JchmsDyLDGhmgbxJLJuXLyDhuAeQ9DujLrG7HBd4TtzTHzx2HZi24aBrgb2Qvc7cXCbPgTTZuanBMK",
  "key27": "3P7ndabgzYV53AzHJJWSVHxjrWHHmvRd1FU467ocCR7wqgWXysUJC7ZnFD32hsKDEHpRFNv9E961bQPVcHitWBmM",
  "key28": "3KEpbmwitvXoSBVvayVtiP2E2SsBh4qY6kFNyHEkwAW1gZ6vy7tpeZ6BYL8iNC9j7BG8tQWmf9g5ZyAComZhfNwg",
  "key29": "4qoeLMycd61JNLVg1FmNRCkWDkFju8Fxj6cvJXH8HqWBeBXa2NSChwcyCmJ4NjHyJUziL2gFw5QTWkGS7Wzh9aQn",
  "key30": "ZA1fPsS4MJ5ZxqZ7ce2XRziS6N8sde4649vTxWMt7F69bspsim5wN3JvQ3YDoVzaNuySXnrMTmmrDbgdes8PiVZ",
  "key31": "4GwRevntj1Wrsj8q8gPQGkGkYBWAvmKg5gJ6LesvhDdXFtJCSsQ2WoftSRQBmkRXxBNRsjFJd48gc5dmt4HNYjK6",
  "key32": "gPdCPYD6XYS5a1igegkUnBFd3RKsSkrDYvjtR6ajb7bo8eFphCSyGrgA3Asb6SqmAvLBGDy6FSg79YzjKm1cmX5",
  "key33": "3NwSvtgyyN2qSFbRD1PAknXnGubvtURU2gc8YVbbDLDnuhbMy1t8fron6A9Db9oqxpGWiUqLcoXp1nUj7VrjHrzY",
  "key34": "cghcDN756p2zuS7Gkso2MwW6qHFDPAAXfoRY6rM1hfKVw8NB3eS3g7HF5KqhUzLR5XUuMHcpn7tUywocuVeh2pA",
  "key35": "5Sk1QuYSgYkVFYJHAJwsrgJScb4BWr179LX3nJUyTBbqp4Bk4LyatNk2dVA19pEy4J6MKL7bPiLbAfAKH9dCNaH8",
  "key36": "4chscjW3FBcKfcLjxznKFBuYAykDiMPtDV3uQN5YKR2XQBgbGK1ryH8Z5v2AQcCBBcXYm7xTkJ4zD6sAKhj3xsfD",
  "key37": "3TDx5WBU4395uReWsSzaVgUqzPPLtbJnDhVZkMzhSSyTVTt98hNz2MKJGDef5BGKNC3GpQfuBT4TyQd82WPFuX2E"
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
