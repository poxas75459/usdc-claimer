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
    "2RiSNiRVwVnG4kKhZb9sC1VCzmBiNAwEqA6WRHChFBGNni2EtwxrbZ21MFMoFtDSDdvSnCQDSCUUgkmBwxV26o21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pgsh3AmGZAPbc4xiBhfx9ULUZYXkQaHHHAaQKvBX2iU1WuERf4oNnLmzF1CJaAbxAWf4NSw2wDa1kZRHjJNq7CM",
  "key1": "4C49E9LbUMFLjouiPwngzp4nBmohYZphhGobZfnCmaieuySVxq1ekasw4GbpjKEmGrEgUD2jEFuBTUimfg95ouBq",
  "key2": "2WDs2yCcfXUxsDhwEzSCjJNEzDW6pxw15Mh1ctdbH7j3jCTGJD1MGGUYc1jjATDnXXZ1PVbXnYSrJmykU9gzVNeL",
  "key3": "7ePvZknogd4ybEsicAKg6d6i4roYZeTWRJBDvTWzQHzMc1b7MBJsaP9ukthgWYEDprLMUQFCXjna1Hn7yYue35a",
  "key4": "iacV8eTGRNFFVJ53hU9Y4Yzu7eNx2vgTx2f41yRUwCGh5ePBmagrkpYhc6JTPhvo1m49YXzxPj6bxaKJxQDPgPi",
  "key5": "3XJoZsmyJ5Xswop4rkQHJnoxyGiN1b53CNCs5k5PXq8RHdTLZhoVgJ5fbqtyckTT3FjaUsq2z8i2tHKsJibedup1",
  "key6": "EdJm7iTffFkGCqk4bmPmx8a8eqxap9VnqS2HRUxzPfx71FYFDDYMCeZhqufWvKunyahzeRH98x6mJaYuiTbLiUe",
  "key7": "21cbaFaX3YTt6RibubjJfDDw8ziqy4xpeddhEC6ujXPYPZyt15jxUYuez7peteCj33rQejEFJWcANoUpY4BhJ1mx",
  "key8": "5fPBRYBtaae2ywrxmyk6HKhR9nJUmkcYoccmZ4YeJVy8FouS7s7jTvbs3QVopcMfxYbcVNfPM2RKx5skY2QbZsTv",
  "key9": "5FGGdcQiBmftDj7FoW3BWJmBEnBMjCc87cV4wXffRNriKJHhaTcT4iZq6LKC4bSjBHJsCpeieuMq7NUjAVZcy6Kd",
  "key10": "JkAhwBzjkRQG9CY1FtSHCriT4kgugWLTSd72oWD8aN5dioKyCQsapTT5G6QVwnR8hTGfEbkBmprFGAwvbqNQM2P",
  "key11": "h1EqKYnG6NWgQ2VsiZd7UDrfNnp7mtPHSQLwNWNJYKy2r8dWVQ19REN5eeBxsJ7vB93qaKsEMEKo5ubC6oxRXp3",
  "key12": "4PWw3XR2uyZyzp1LZ4jg6um2S2DFnEbWwhqAWty26UzjHhe8YR8XeM5GwbZdwvWCxoMENAaYhFhK7Z178FrN7qKu",
  "key13": "586L8mBTjfMBy1NGDqDF8ZhQXyjE1SCKGWuU4yUQccbKNwen8MLGwGUPggogzssxCx5NeL6dV76r89nwHMPXNyKS",
  "key14": "2RzhMbgMSmFd7v6xD2nes9C73Kf9qns19mXf1QiUNF5Eidy8fpQsQRRDqumJzPNx8XXzcu8Xa5ZPtzYb2SAoERw9",
  "key15": "4RQZmZsfyMnXFVAcyMNNrPjnxL96E2fiXfyhSMZ2dJVsxXoLKBaMyEA3JdKsJAVLdpHTK2msJrP418HZVKYKZvy7",
  "key16": "emdp6WZ6RTxATvDdigrtetrACLw6cHxoGCPb7ue9zdZ2YMTaTDLux8fh4ijDShzAm3psC37A4vA1392vxjHeE9f",
  "key17": "CZDi4uVRhhS3VX1CEj3FxzTJB7Y6tT6DMQNnZ4CL1b333kB579WoPpYBpB2ioWAbZhS38hXkiDYjvLrWFUUsYkj",
  "key18": "2f98Hnn4V7MM1eguV6xkjCnjx1gWWucskjBsoEfG9ZriXF1HR2B1ZKnKKadLeGdcUpAsrUmVgVpGKT6K1ZPLTD7s",
  "key19": "3z2uiFwNec4J8ytNnLzwBZFNYo7TWZ5D98nMJWSuX5gEXx3xM1nQBZn8xajghZhujKZXdYgXUqKFhHSGZwbGfpr3",
  "key20": "3Uh5sG8x2G52uC81faPBKXnw5AZudVcuxTsmMQtVc7FEVP86UJBLouMyZaf4ZNohFbw3vts2tcBLMQyFvHGCbtUN",
  "key21": "5CkX1FX9rJ3mKHRGdGSirvHgXTPcEqkGNB9HGmrMLqaHGgGmyMC8g6kLLb7otwTKjReQJYFqPCTNmbRH8dCnz7v9",
  "key22": "5GxY4ga7ahnCcHVN6iNzPW3f4G981D5vcJ8fsRT8nCd7x8q9DHf4FF9NtXFxCKHTRdsZvtnKsejGRDbe8PibtXJi",
  "key23": "5nZC3mkyga4yj2nVz9nKu4qvy7EWpuRfbLMxXdwQGQdefjttaTpMSBCyUj6rYXtkGARfrcwXFXsTkDX5h4ybMHdD",
  "key24": "3fuqSDx6thwzboRdnpUuQZnyHwRQd9p5Qv5BxEEUG65zf3AyMtgVbZiM3Z9PiCyZ6fUfgMwks6kQeATtdrB1ZJXy",
  "key25": "CYZQyDgKCjxhgkbaEPSMGknQiPfNnmz8hF44GDZS3AK9SD2E1LcR3Vk7mq9mX4L5LNtaed5J3SsHkaT15WhWpRH",
  "key26": "NMHxRcofFVczuKvB91bYnVtM5iBjVjxDnjwQaJQiPBKuTP29sZJCDE8usA1N3fM4rBLfTSKzhKF9qanA4hp6FHQ",
  "key27": "3Xnaq78hSG16W1GkaScfbVxhFkQonN4WSHz6AjNW1CxyRSSX69TCEd5i4AUMkWfPHY6zodwfobJyGTCLVuxagJ1A",
  "key28": "4rEL8Ar88XeF32RdH6aCdtQhoTwNYQnnGC8vUwo9WYEzGjc4DLxaUzV9rbpBsJE89HjKYbmqH1PeZfphkj9ts21a",
  "key29": "2quLeXs8n6zh83xRtZFZyT8g4dnnt7nGvKxxa5PLcEeLtDLMJMwvMB6Pn8DPp3PdqCf9gniSfjHnmy9afYFPsKZk",
  "key30": "3QkVz2GZWSr7TLnxdo6e1h1X9BYTpUT9MZB9mqfVaBz8mJ8nGQpfrQHVAcLLwoYyAxqabjiY9p23cjA4xaqbsHh6",
  "key31": "2hU226QF89Wmoe1fvG1fAkd2scqMqtCDbUyySvUkKpStTgQs5iMxf13RxZPZHwdP3C5rY3Lk6NGLsBon1Bu8F1VA",
  "key32": "2QogrdBAoGD4u5ngV9mqHjkuk2oSTR3z9gU77kQ2oncXZdcBedMEbNBrTX2zkhSAzHScymkFTCvKwBW3WVh54NiT",
  "key33": "4pBmcG8t7mTBod9eRLseqSmrZJuhkNB5MmKFTYP6C9ddiBTgtkuqi7YEaofCQaYuE8jjrVQcChBjqH6Vifx4gusi",
  "key34": "3QLyEbHizdhZ9qFhAov7hRRK34NixHe3qjmxBx6GTwqZfahRFLdpwfv9s8T3n9fJZPRWVqjwFjeyVXg6SyexPvmu"
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
