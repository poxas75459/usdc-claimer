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
    "31D4DVJkts5emKSaPhrvfQZNgF9KztGNtVacQ3i1sdAYPhL3Rfv5GTkcquJ6cn7m2bFY7rbCRiaDkrg9JCoLSvDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StNWeEkVaKKvc1aYe19mEBUudPew8f5WcTkaGKcCg13qt7QRkV7DHjf6VLccgSD7u8cMoohcDiBGrdgAN8G7iGQ",
  "key1": "4uswygoY9A5f95TRR11dzNWLRVKg1uuDjK6LxVnD2kdEGUa3Apr8EbAHPoV2PF6S5745ruBw23KzsbmvEhY7gyGz",
  "key2": "3KcfYGrkHjTHExQGjTqPxNRofk6Kz4T5cWJx1mnVGMhS4RcR2CHQa2zhrhorovSj5QfR2At8ZGKhWXhKSCYBwV9W",
  "key3": "36ohqum7pVTjcti9qAjiz97WuAueJLNEzv64x5v8zrQq4vu6PkRw5R7vHM9Utd3T4DPr7eKQa2jcEraZJ6Rio9Du",
  "key4": "4fP69nm83eK1yy4aGfC72nDeAQaVWPX3pKK25G7zqxcti8uZdTm1Z7WvadgfHJ357Rs19h6cntNHxn3HEZk4ZSnp",
  "key5": "5S8vUPDMrrHtfKu6QTaCaz57TJ6VuphRckGYxGV4h2GKQHyqGaVunzGCNPMZxAzzwCqRxM8F2z4Gnot5U98hA8Bh",
  "key6": "4CpNp1zj6XDeMrDDheCb7MFgx6v2u8zWBLKnZ8Q3CFvxoSd2bmmgJ3Ba7LeL85Jrx9zDxKzJrrDgtHM2EwF1nFd2",
  "key7": "gYUFUNrTx6gNFL7WCjTiy5ZimRTPziZmpfjGvhvUjEFa7HY2nEZg23V27xHXh2eZkVggrDdoav1nox84g77YPJu",
  "key8": "4ydE9563YurHB3728hrtmtUr2VuZidEpYVqaBhazraLYpXycHp4PDJCYwGm4hFdrUfRsKGd1PV8F4PmB73i5q4ih",
  "key9": "2mGjGpRntaHj2PS4XWJmFXSisjBdg1W1HMjvPF7DvmuJbp8wBwSyDHZd5RuHC6iihaaND7PHsDabWa4dRL3hUZgY",
  "key10": "547e4C8CWErLBngmTYsAFjV2hi9DEc1ZwZQyf7QqzsXGQw4VjGMWifxTEbjXGweDyKf4Hg7yw8hTaWazhuHnRQki",
  "key11": "2UsAqfmeko2tVKP7AzZTomy7PkUH82EYR8jFdzyY3v7Nd44R19nqWH7QRgrLh4XT4gxNDMmRpJrZRm6wmKaQiZ1U",
  "key12": "3M6EnWuEiB1ydExvb33SFLmzxy7UNgw47U3rm8uY3raCz8HEYNSQd3kWngynvuRfvGAqEkmQiQ4kPDXn66Vioey1",
  "key13": "4qMPAXEu7dtTyGHPW3wDK4ZMh6Y1wY9Dg4aES4G7DjbBcQN9w1eXwkkyEg2ekxQyYM1r3PMaCwWXyh4pfWHGFucx",
  "key14": "5CQC6hJGr6kgz12vzMmCcnvud7tuAS48DRW8GdpBWdBTmAL4YJjYVK3vtzoB1pqPcH8CZetY9T7G36XpKj4VDRtg",
  "key15": "5D7MKoEtJJpaPchoF4efWba59rDFzTTL8kEc8aGNDWe83b3uqUUcYuiJ92vfmVT1V89ZYcNUuZ2eSXFHqGthyvny",
  "key16": "5Vw1bKWvxVdqoddnr6iFMbfpuB5edhrxdYvGDyhTyrxf9ZP5q4KTpzQ8FvAhBguEanzW4xG4vYFsnjwRTBcBvX6Z",
  "key17": "ugnDPiLQR9wowt8MqyisYUt4FV3PAz2Daj5SWZHjAZeARRAhGXeUvzvYF7rvtYDDgALeRCFLUn2YQohc4fdFJTa",
  "key18": "4qQEy6xyK2E4K4ELbT2oogXo9akGTL33gj83tCkSHpLNzb9oNCst8bWaeLNzos1FdUSQhvGu5bdkCY7BppcpkrhU",
  "key19": "WAayfaFouS9brDkwuNHVxNU2V3sSvWtK8dXF1YPPKpXuVfCDQKhRnv9sEfQRMrYf6VTCkbxGFrX4t1msSJQ3PxU",
  "key20": "qc8mZ1qUPGDoSwP6hK79bzhQz5gp8mgfdfuZD9MfhQYhiMKNgQetoG4VgeUKgxFupuwcmujziZXXTBBTx7H2dtd",
  "key21": "35jxijX8gTRDQSvKraBbBiXgYbLsAKn9LmYCnCWwz4zWeaEFiVTwcV7sVfxxDXJPS1sL9sXD4tL8J4Re2D97u73g",
  "key22": "2XzNZCixSEyKQRgEM96Uw3x1mfdzXBs1cAZJzKf3MYhuq2kDSza2Y4CXWEKsiNXmyHxixpSmgpcvBNM3qb9P5YDK",
  "key23": "5mjnfmve4x42KMqmGXh4QS2A3M9FAsRw6iPshd738WNXEXBoQY8j763XsHeGwSU7LX4sBNJQcuycu4boVqZLduGa",
  "key24": "4bS5EqmuEUdERe9sq974PgJd8EHkgAGA9YT2DBrKF5WkFEpi4Ln48J4n1oJB3RFHeFRbWCd24YDTtM7JAq8ERoAj",
  "key25": "5sdZ4ZKs6wtSNifiSUtdADTi3a3WJXV1BSbHWVGoWZXPwYbZCMXcqDa2sTyGgcY9QrmdjWdVxYYjvqAYVi1AoqTm",
  "key26": "2E3dxZydCsTpwzYRyqnRuTMDVgQNwV1N9GB4k82m8MaE1hau8R9dyMrdLfkTXeBNXCaJSHc82rrMP5C3L9QwGfgm",
  "key27": "5DedwZCXbBym5ckFRTZGA3XYyqD4f82gN2WPyTDTSYMFXvaiZyFRnbBU6ZgQqL2MqFc7XLi4u1hVJyiyVXkjWAag",
  "key28": "2mhsYHuWmc6HzPeMhSGbbnrqSoaDZenF3ZyLT5V4fv2c3ronDq6ZAjEbGftAcMtpkvb1Z27K7QagHspzuptuiPx1",
  "key29": "2caNvdmq4NdQP93YRQQJBt5rmHv2L5LuHtRGiDkffrtmUhW3XZ3rBPnYFdu9ZDs385y5DSBwgu234TJR8iu2ExAw",
  "key30": "41At44zXZnxzDd8itoujpMbMdY7PZKnFvzCtCd41U2vEW8CAGtq2nVZf1hVvknKdHuG5jAtd7noeP2JCKUn2m2Hq",
  "key31": "sV5kQYGQ23eux4MhGKF1xH8Gpqi2ZfYgK9Gy3Aw5Xn2yvrY2aUsh4wPi2Ep7cVTArXYS6ETukvympcsrFpEFhg4",
  "key32": "2AYwGZaGJx2Bu4UzrVVx8UL1AYTMt3jrU6V9N3TWNBVHHSA1trZ5qBQFQNq3VX2Y4x6QT3Ri5jDwYgV69b1kNocH",
  "key33": "5Zdqr8LSPcNeoihZcTHrYNtLApzKgbnCBAw3EqD6gLjh28rpLupthfz2jdFRZyKvLRGBge8Dtb7zDdncwvKsgbTw",
  "key34": "4KTVBLGZKXvayZYN7h574wHX3oJGiLoLWrqPGZ37M7rP8QvBDktWzdSbEz7qsfAcpgLJggMZMxpWHr2fhekARKQW",
  "key35": "3Lxm1zLwzqjq1VkLdkkryzyjDAVTUJQjBMMXS72iBnUBeVmZ55pb3y8E3TTS4heHr1hcCiydt7kcwqn9msLt5tWt",
  "key36": "5LUxGtcKMrxzUEhV32Dtk1FCDSSj4BSkvLDyMwdt6fPv19RsjVi4HzQ2pUvyDYCTS6rUhSgA8jrUgWZab7NKoeFq",
  "key37": "cZZXoTm61uo53MnTVPcDhywY2UtKAaWQuUfSuPJJHPxXFv8MjZnZegkPvDRoarrPGQ7tTjDFJ4y1jg8KUppmn5Y",
  "key38": "2A645mMb414X2WhXRQou28zAcMaW16aYAUe51rseaCPKkajmSABYDfdjWC3unW5QtpLne3YZk1vphVBbBwLdvGR4",
  "key39": "5Fh6NxC1AhPUsfvckH7fbXJbywg3TD2nPK7BiSvLd4c19iQrfMQNdqxaep3HDQBGw7hsCd5GZebHaUsEcnEqV7Ee",
  "key40": "rqeXZSEAKsCRxwuX9eWbB7dSBUaGho4suvBfLUTfNNApus1scoqxL3emNhQoWavXjibNAYfcupU4gWseCDHDiFJ",
  "key41": "3irskJMMCDQ17Hapkvyr9Y8DLgcbSkCE1U3cmsxDYmeyYBSwYqPnh8GefuWGng9AnsniiuhzvfvmbJRQT9bQFMQd"
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
