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
    "3r4xiT1DcB9rzHHL6Z9cd3pdbcCNfJ9nvhHZfC8veig7HR96XiYsE6ZWvDxT1L1baWA7aSCrbvh9k9NtpCeibQ7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xwvQadLyVZR65b7Y9HcG9vD3aJdiso3Aa1vEjv3F7YkwJ4WrfHnLhnDVyPhxcKv26uGgmJ3riXRgRzzZtDpFM2",
  "key1": "vH8K9QWsPtaVbaumfh9QEaoQ4tKKpwvGKE6UJDFGUcjXpadyRCrRAw2K4DgA12Z5WUsqwwwzJcDj3RB7GBCMpHw",
  "key2": "4YQq1UCcXHNfPJKEPr5ptZ5Ka6y419TX7H9cG37uwSwGJnKxTV46Nu1WuYaE1XvcR6f7f1FxBFSUr6UHdrDeoscL",
  "key3": "3c4pErLCYhose8yrpvnkWwqDRs5hxz1A9zTAFXx8qbM9W4hWfp1CUiaBacSu4cSkqthcwegfPYv9jEu6CK9d7QJh",
  "key4": "2ARMKYaj4SkRoD37zPGiPCwJy1t5ft33jdCY7pWRidjDv5AYjKPVPR96AvGMiMkUt2icRMW4zMPM2MGXN4ixDDBr",
  "key5": "DoSdhdVrnnQPVmPP8UzDNHchdFct6PttmjYDYthfuhT7XCyFWNpLprQdxNMb7jdXst7ySU3cY5npEdT5pY9jbPv",
  "key6": "5TYQLSLx1Z68Lb8aCMehqNawybXK7KT4squSBw4BSF7vCDMJ7i1iEq245bDKjmjyAwWThJFCySBt5Uc9k6iv7BJ4",
  "key7": "41hoveDSob5tjkQcnupDCYY8HmmBJ45v25xToGYj9jRf2PV1AqSnwTFHqVNdzyo9BzFnr7YSQFAR5XhCpbJSD1pM",
  "key8": "41vAMwRgh9yp9pdd4zDY8n2JrcdvBsdW1dXJQzJUWjBQQzHHC55jKx3gyHzTU3LnsCrPWeyqgkmtq6xhz5ybpKT4",
  "key9": "Fhu3cckhcD3E6P3eTJMdEWt7aF74imLx5EgJypjZsp5gnaJo81tfXxrjqdRb1X4fZTbWgQgiM1d2xJCWxzojfWY",
  "key10": "LyZh3VLR2UgaKiVAn3tSTBaFQP7EspNJUnnUHStRsPkRJxodzCqGwH2aY843CuwpMwmjJtPYqwQjYhCFbLnfqkR",
  "key11": "5e3otBHhHQQrvZPiAwtadg2c53LwD7wuetpNcKcGQEDXkYEv3YXiQr76E5HBhhe69YeY515vt5HR9bKXiTFUQM3",
  "key12": "4xcF9MgEAtEdWJ13r1rTF2WFru3Ljt1EiS98Bkt6v1Jq5HD3LQPcL2PduSYZKR2totX23gFj9y4yMWE11Dev3vr7",
  "key13": "53qDbDjmT4u6S7TtGCk7RDLizyMaBBjamAbDrHYfA7hagvY2U6tfHTsX1gEpZuR5psUED6YcaH9ijwWtyWcnp1ho",
  "key14": "5Q82NHmE3w9xZVZznPgdHHqyr4p9NqYzzhuCLW2NMbD2oWq5jgpK8BKj2eFPUpV3hfxMsjbxGt26g82j3KMbm449",
  "key15": "2hBdeXXghbHeC7rMBZ69Z7QY1Rd3H2VQqzAfwwqjuF9a9h2vy9EygYyPUfbkiQzz83uwoVxKa6hmEQXZZrEx3R7z",
  "key16": "ZTyR9LJMqfSdYzyiXo1G73auUCLeeDSth3dkdN5Qg8iF66j9Jj9D9eMQwScHRbqbXD6DQzbaYe7ASxXGYrGaP5z",
  "key17": "4vYQrstwZLKY3nsXk4tWiTz8xVBYHRDUXqNmGBJQYmRUPN3Nq4tPmdcNGUW8Vs1E7mckAipU1FD4KCiFEjDvpuGq",
  "key18": "4EX7aisP9qs2S6H7djdGREs6HzkN3Ls56KBWfP6Li8PuDM2jCqnHheH1HxZCP8dj8CqMdns7docf6PeNMhHs4GWu",
  "key19": "4MAMnSnEjkp42Ejjy6qDXSE6Bf27YiThwVkftLG4Y6P4J2RpBYxrTMZE91JzNUiZfjYu2TKcBtef3MSJDShMWcKD",
  "key20": "24xnNfUPVymiPADYRcKgHb8HS8h36VwverWdAG1CkAvPAM9s3F9eY4XGvH3VaxUZcSAqqoUdxeEhEjaJQAcxuiG3",
  "key21": "5oFcC2VZeiFbPquWoVrwiedH5cYczNMjxdWBzxWotWXmDeYTdK8GSyWRdjLpcvV78C97kbxcSmPj37bgbs3smUGQ",
  "key22": "4ke3uJWRa6DDU4BubA3EKXUB2FPAeZxPQVFjnr68mPUPoS17W1C1dooU7iG7AsXxNadY3guA6MY43v2s56AFzLUz",
  "key23": "2SXkv6TH4ZkJdBj9TmcxdX2E3MWwGAaRQSXQwG566d5Z73GM7PDDt1ituhQUo8nRMaENPhqYzM7GvS1BjZW3qkTk",
  "key24": "rT1YmYsyPXTvLpSQrybQeKNzJ71tyB9ji4CegLoSjuP1ki3RYys4Fk8PLjt4V46JtvTfBMBvJapNQjX4e5bsgs6",
  "key25": "2DJoYiVNeAFvVXKqJtgrDob2maLN5Yj7qnwP3zyiBCN9Y78hYgZqWAk1hmUB1bAN9YhwhLugtnqemx3CCukdmSnK",
  "key26": "5Q4sJxNhu63fB3wtDAUafaXFi7yk2VpCns75jcwDU3Co2MAhMhAhzsVWqtnUhfZj7LZpBJ8SCi2YxqsXdMKbiGfv",
  "key27": "5awCHNPPRNrTbzgHG565mvXjhCc7EjXadgiiFxaH5hdFpgaVaiPgyB5xNP6U8MTL4o4pWApNdmbRMp11UbTpQWkg",
  "key28": "w4UcPqAZTg5xP1WtjwpXZvoyLyFzCcAa27pS9v7cJdpHcn9cEW2aCtcL9daS1dxmQFDc5fBzwbyoFeRkxd4vemb",
  "key29": "5wcC5N9QqJjhG8DwxCrTGVqLRijpXSrk6w4m1732fsLakrMTDEBcPhp4gxqupREVmeP8ivC7ms23KGZek4ZAQUS8",
  "key30": "5Zbz4fQopBKYKJFCD8sUhsjJNAy6WWc6dRe2RPz6hBz5k4PvSFm6nBn2rp4fMkpQpVRsmNtpBLgZGG4VTXu4XrFo",
  "key31": "5EBZEEPJvtE9eUjx4PZHG5QJXGPUaNHhSD1JZLaLZtFDVp7VPL7eQXoQG11GwRred6NT9n83eyKvyKPG4KVZYobZ",
  "key32": "5RC8xFSU6QUMCF1TpcrYrL7eGMv9mwuKQrtBC9gcTmXTATn6VTqZDXSsuh9XMzPvqDUHNtLhb4DqZ99HmUydVpSt",
  "key33": "4V15PiuFUFkdm6d5n1h5364HQM4ukvm1zqRzE2S1YJi7sQkXbeysghW524s6tPCwzbhhdJ9eVk1xWtjGQuc8f8dU"
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
