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
    "28XZPHGireb9FW1o69piBzQkLrkhTcqSWABbWiZPc1PDuKyb2pgwsZzPJgvMv8SbAXQgzJXCiyX1DnvJdjRf5HkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pjvXRFNQtJ5F3NnCaUg3waq9P9tkTQYXB24JuBpKUC7Fbbsztv9TBDuP6jVgrAzDxDgTi1jEcfbvNKFg9BSH7e",
  "key1": "4rZ73ir6LBxnZLagioQMWYfDEXAfAsSoVbnoivm5UvcyDEWCnvwyP2BAvE7pVHGJihZ2asBSKMQpaFnTExEHva61",
  "key2": "51PSX5Ve8c1sgrvvAeiM3PMuK83qHWVaYZuAG2PbJvLKqRPeje9MDTRhy1g7wXBwMvNbnDETfC7Nh6biy8AX68D4",
  "key3": "yt8a1J2u6hR7hVsGQ95sMfFF8igTkrgAc8WHi9VvDHd2wzbQZYfTBRbBm5pPPknuTg4NkfK6LzdBortF5eQ5HW9",
  "key4": "2B2ibFA3iYr6tECtRcDxwEZg7XrEmAqkNnW8Dg9SqVPxKYEVJ4RXfgeRcmxR5PGuSsygszz7TRmt6HGqiCcWjGyo",
  "key5": "39wUxwZhmhDJRn3J7inm4d1TsS7QVPS3YWdQSDJqMBnPD9EnhvzFoPSme8HEKCgj6DdX22eLafG2wU6aNTmx3gkv",
  "key6": "4iXVP1oBgQkeg7t3Qb5QDN9Gn81jEpdrucc3M8TmYzxneetmnNbNiNarDZhLGuJmWAnsQ9d12v7cpD3u8e94FrRS",
  "key7": "2Hksct1eaH81QTUVdKsALHgVYV3kxkNEyYt4Xt6vBZD29iLHd8Gh67cbuNGVB7V8YctrS3yTqDaBkHX6d2YK44Mx",
  "key8": "23tcB9ha9unEi6suxGd42Mdz1Df18BJP5m3QwLcHReHNDhmP4fJLTvibHZqhyspfmnB81zipaEPUaWr2Cxm3hP8s",
  "key9": "39Jxvp5okSJfs2RDNHvB9cb166YnnArU8UzHwZYbE3QND8GQQQNBKavdhgT5cE2kcUN7NNkVLs4M9eaNvCeFBAZV",
  "key10": "stofJCuuLJwJqwGaxFgjPxUsmvVLDr22eHhLg6SDTo4CQu7kQp7rkJXkeRTCrjviiBKJF9PKbUBzbwxr3G5DV9F",
  "key11": "5hvhu78B34ty4iSiZLpa5LWrhJepkuQrVzxRqhrgseuyqTkE4fDPWntDnx1diey6SQFhiwCgkDLjbPaPqEAABHHX",
  "key12": "3QotKQVekDTztDgp5dWjirXM7EvurAQZ3mcrA4PQQPc7EMVBVkiGtvESPKgHTwzmWyu3Cn2XQ9B3Noa6uvVsMnT7",
  "key13": "4M1PwKpq2eytZNBzyuYuFUZhGb4dkEeLu3JnxE2rkFUwrwVwS6xbxoiabSUkh4pcnwWCoy32pZdmxUWzP7qzXyke",
  "key14": "2HnRUannYqE68Y3BZxiW3ijZ268K57Drbd8T5B6PrhoqFWS2b46RGrHtU7FdmRQb26fbYEfzPKWCesjTzCMgDyH8",
  "key15": "5qaf8mPoKVbcNW9ZoZZNFyfJ1Ve8yXEUE1XfMcjMkswSCGXQhBZuYqdbsiT2s29oB8YHouyR2K2Ek7Shv8tDDcyZ",
  "key16": "3Fya8NPYfcJJLxzcqpKUqjXZEJGWJEoWnaqstUSgmHAsi64JqNFo9TC4rDp2ob7XTh51S7Pd2o5HbiWr2WrW4Sta",
  "key17": "4ZGj1i4Zraap5M3fEbY5RhGiDrvjxaPM4nVQtJEDBuDJH52z8BbfBLXi8dqJD4BWP2W2Ry1cmPJ4XVGrQQ9RmYNo",
  "key18": "4c3ECWTqEnFmy3RuY7s8gDzWjJUCzDbbXyJZTQ6v6gyCinGmwoZbSy3PZBzr4SUrKkV8GhbBQtgpgnK9V8sbZb4t",
  "key19": "2Ev1HxAyPsHEYoY3naY84jedvFiwxix7TCg262QZncRV7xpUSypSTdTAtvfJ7rRGsPZh8gvZ4YPREUBWh6Efib8W",
  "key20": "3YyScGvYGoqBKPXHhqBzC9kgcrDgtQsoJkpUJbZ6gyJwYhndxesaeB3F3Q4tcnd4ecdXPkFrYkbmJgTCWYv3waE5",
  "key21": "eDFpYQZsxvuaFHAfRyKR4pbKexBZDmE31GQHx13xJtTGVWjCFmxQKVpEv78w9nw6m3kYgSJ4RmLAR8DLMRtHUa8",
  "key22": "2myiMiQcJojVgNdb2PfJWx3ttbfucVRgcvT4thsjyJD3S4QL6f5zj8XSDuv3jWn5whQRruH2rBmxanHWnYbDz6WS",
  "key23": "Y9id1fTJFhYsX8rsXj7Y1Z3xdg9igmN2FuDcGrc9km6ALZAcEgqxGLL9NFVN5CQintVfQ5MWgGkrd57yUsoxiiU",
  "key24": "5N9LEZYeEtVF7BikUeKagsiwPcd9CAUUw2ei9d1rwVFhjYeNGBz17jdKApUDemSizxLXJiTMyEekzvUtLa2tSDpe",
  "key25": "5auedXocioDVM2fzAB9waTXQ97xWTEMcidQpak9pMSDFM8jyvfvcFPpJu6mVAc9so7sg64zapowemL1aQrQ6rMzb",
  "key26": "2zPFbRYZegf2xz5RiE4WJtHgd31njGrPu7KHmv5H65PPuCfkczFPc6EVWojxXijWEu6Wx4XKAqJV8bWdaChgnUPF",
  "key27": "4MTU6VwKboUKQMAJyiQL8spmr1BGkxuMJWFhTqtogVCDTNCGYX52dfbpNSqMnPww9JVEx6CXBLuSoXq4QCeY1nGV"
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
