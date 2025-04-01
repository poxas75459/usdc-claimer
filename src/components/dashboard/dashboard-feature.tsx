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
    "HvhFBJQRAagspwKhaqEbnS8GSozMgnXzv4hnG37bhXien5Nq7irWBnYZfpfdYzi6LsLu2sNvdMLnSBuejbfXs1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NorCF19zXNWs4o81sGmwwaQGAJq5Q4atWuFigAXmz3JA2G4sCaVygfm6inZ7fSdPBLB2whWWsuYYDzPEkoZRiTi",
  "key1": "4y65jhYxdhsxd9n3hHttgAWFVeMMRyd8VPkxbKhueEJBHfw4PgSh93i8MpNkaKGHLmrFPsann98CW3qgHS7JYxbC",
  "key2": "2LtBgbPF8NCmSC949Mb6xAqV6qfz1Tq1SRjqGmjwDu7uXP17iiKBxVjTKDX4sZzs3XWoHqM5CV7i8FBJDgxBVLkK",
  "key3": "4xfqXfodLkXJ3Rf3uBQeqSvaW4tXYABFmBjhCVGEWWyrs1bvLcVrmqDjhMAptqEba3CjmB1kmRUeNZccN3Jn8D9o",
  "key4": "63hh27vT48KSo5UfoZTKe86f1ymAgkyyQFEcC7stT6LGfRA1qPHyhm82wG7dEkiTjcMqgcUuRU3yWo2gsjwP4BRE",
  "key5": "3zi1qA4kf9Ef2hp5seuTQX7o6xfBPP4MBW563xvqvDFRg4d5TxTS3Ec5VjCaMz3k8z3RdsnMzwwxsD4G8BP1XP7i",
  "key6": "5wHBC11uSUH9YvYKNuGeLXGYFW6ojH7thB3eRL4UN47PUp9rjYkFuVW2fcUpBxsn2JUSwhXkHDSWK1sjTEuFQqyo",
  "key7": "7jMtMFU3AqaXmcM6xQS4NvhQkQaqGghtUTQqHRjxznd3xLi7j2Jb4EzAx6nCHqwRBhUYZ49urz9Uosf8MPmJ6a9",
  "key8": "UZSXsye1UqgrFJKdXLd7DDarQmAZnsBSULpMUjZBu2a1PE2d2rTkuLg2dpyxwFq4MR5tmRfVVqd2hjT3XekXVi6",
  "key9": "4ckL7VwMLZSaBHF4W38u8Siq1qF1TC8uTZNzDyBoYEP4wX4hPVmKBfnBQN2DSHHAQmhMq2JAP42o9EedVbeAs5kT",
  "key10": "5tKv5QCfQDfmSEeBFYvua8e2uTViRFuiqMDcHegCNdLC5pzCxgdfcaytjLzaCZaPAoTEy18QPoMwaVzWEVkkz6X9",
  "key11": "45d2XzcPhyikx1ETQhGFtj6h7VB8bpmGwKyVW4zu7G8WsKFN1zUcQG3CUf9imKmmbpF6xwwYHEhoBUeuUVyVWGN5",
  "key12": "4kCnCj7jJGbSeB66e6kj9tiNg5mD8giUGdMRAxY2mGKWra8XrXEWaKnpjGhWcbmJvDDLJPoNXQCeh7YGrHrnKF9W",
  "key13": "2s1Woo33kqkVC86f3wgyveZPn43qfPuoiDCt7wTDMNqhWbL6VjX36J8L5z9ptU3nnEsRJYAUBrDy2YudNgHtdhGv",
  "key14": "5sFbpXcVUqbkufzTSpAyt6emFx2aTZMWGhqueRXa7DvCt6Mbx3oJ34VNDhVq9GyMLYKuv6oqHd56i6n3hyMYuhq7",
  "key15": "iYzrY2bDZGGinSsZ8RHRmHToFuNQZseBin7gssS1yYMTmrNw4r2ENQ8RSzXnvvT1KkUvsZDg9eSVjwKGy44MsZ8",
  "key16": "35rds3UA23NdP18GzBBKwpV7Ru1KQc8UJnaGSjhb14CarAkahsykrLCk5r2os2bbBWbrTVSjYJJjy85PrZZ6DwfJ",
  "key17": "H6ayp7AaDfQpgWjfJoonVKViGacTq1s7s4GpnDMRfDrgnKCHZBFcQD3rqEFTAXv9Qyc8fhptxBrHwRGuJPQkW4Z",
  "key18": "5ASA2ZbjJdyU7UYQeMYjpSchaYyenYEA3JYwfCXx5yptfHRB9WKoADDr9A8BX8gYE2Nu4AUnGH331rL31hsSgszb",
  "key19": "2qcjHLTfigb3DZP2aiyVKapdf3ZKnkZAQRkFbfZf9Lho9tMjdXiN3bXwPmyqS51xL7vyZw8mgbc7pPmab3ZXZT6b",
  "key20": "247S9w8GtsF4ffseDQRXiD5ogfZXaUvkpXdKMqchGLcFb9prkpuFG4zEySs684FwQ94QPk3SbbEGzuHdWUWVFj4F",
  "key21": "2N444mSu2LqsWC7JoUN94DnJqWH21KRaWQSibM9VCRX4ZzGakGg2yz1sYoVcW6miB1f3UGsMANCiX7Wm6PU5cniB",
  "key22": "3U3Qu8ijcwDATWjybacz7gBLp49QDz5vikgy3Ae9sMNRQzCYZCkzFH5DbP95Q4QHKSkKMNouE2jpMAkL9nPS42Rp",
  "key23": "2sP6xFciR75wnE2RGEDJJYvkLuM4xDzBWrnAs1q5vrZUUm8b25C35HktRJFeGaWHjvKf93SNGrvnqWMHZxMayhmT",
  "key24": "3zr8fDT8pCRmkhPTbXiSAFm6Uxp3Ni1dUQPSjMyfuYwY15DouZd8KF4kpujGbY3gR93KnSqStvzpCYc1g7pYJpVz",
  "key25": "3JFCqEKidq5cqzWhNUoffcfqbiHPB4pSPEtq2KyMkqvk44UYsyFC4VHQoMoZmkHwmDf8aACyYvCK6BCM2x4C9qW",
  "key26": "2v16XDz97YpGogrhK3DbDLttbrPkEUqYDdCe71bLheRVPxBUKqCkQ4Qp36rWbU2bdmi6ka22FDNqotHTDwSTkJ4j",
  "key27": "4ZPZ5dQEjRzaUvxh4Re4o1mJG5nDHnV35XWpzZk1HoCGrkbN7xohS93Fo6yLyzBxk5qZBPpKjvPUsA8nem8PUiHk",
  "key28": "2eH3eq4XPSgN3MjhgV4WCXWwZL2KYpCx1L8S61ZXPcjujTfihyiEMwkKGR2fVSfHg9CiLXJ2Dzdqn1DBxygKWASq",
  "key29": "27urZ1mmpyskcQ4pxg5pTqf2CveWZpJ673WPqDAUhs5BXsc3AZQXFwSksKi49MhTSME6VYopg2VtYC2w2Qng2p3S",
  "key30": "39HXs1pXssU3GZuF2yJiobJ3MqbZxDqpaChttZcwCnQ8nTebVjBxS8AssxJvuVZ9NmbDfdy1qJaXN2jB7AQvys5h",
  "key31": "4221GEQ2AJMABXB44vanrF9wMZ2sjNh4XJQgo99dQrxrcZDbEdxstF7P2BPLquLUo1MEwjRTM4C71Bk8PNMq19Qa",
  "key32": "5uU7JEDBQceBM68Jo6YuY7Kmobc5fGKgitCf7UZRJ3SL8YuALMi4KXcivtQpWpY74Wt8D6huahVJLY2NnZiSX17r",
  "key33": "3fT1o9uRcV2igvKsHHSmFzN7dy7G1VQc4YmjG817C9GMPsxo62RGjEtmdoJodV5QR66YkRGH1y7dXWmB9fT3kZqM",
  "key34": "W9GJyUpWxVhPbDA1gnWxf25iLL8uQcV2L5tvcQ5iQnTD3hHdLdKqyYHXBTKV6i9Kzg3u7tErxzZL94nwaU2Xg5A",
  "key35": "3n7PvEPN9NRaWYEQX4bxQQC21saZ4NEvCqVcrEbFodCcZbu5wox8CwGMao69FTtFKQ93UP39D9z81r1wEQU6jpV9",
  "key36": "3WNMMtpnKiV8fsd47FCVwkvuMCvNAKKBMMKuw7URsuYSkBmgbbTsd7HX6hqx5UJwfTVEcGaHathibywrwbCpsCWq",
  "key37": "2rKWiNhxUXvWm5vysPcYA4cyqoqzBw22oMbTiKdtfJQiLeWorKpJFPdJD3as8h6M25kAkhKD2kakbqriWmoiSYEQ",
  "key38": "2seZAg9xvayrMFLg5kE9GQKbQGZMYu8b9RutbgSY4VhB9jyrkjTYoe9q1qj2gXbWhJzi98bobi6dK8TAS4SUmfji",
  "key39": "RHcQ4VSkNtiHaYUQoKZuHwzfwvwE34AkJD5oszf5HvqzVypFHVHq7jQV6D3A2SfyAsrZo4nopLX1aJty81cJTxe",
  "key40": "4U2akrB5KwkFvS82tT6AbPU3QSSBW3T3d8Jypm5jZfiwqAPPRnAJ44Ni1UYJDP3KqE9r5RGdPjHqisY665SUEXY7"
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
