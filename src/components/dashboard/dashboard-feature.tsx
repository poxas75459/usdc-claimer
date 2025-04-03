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
    "4YYZi9aiD51h6frZxzJNHHFPLYEkdrcx9mozkDRgv8K6cGFT16Nv18QvdDx8ToDBg9fngBKJNFsJnLucdj3VyKPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wn53NXNEfCSsZobt1JQEEjXpGPwBQNAVFE69Az7bj2dmQ4GY7pucmD2Vz2vhjUp4yEc5NALsYR3miYApx6sAV6q",
  "key1": "2q45cfKATdMmPmmuxY842nXhcK9Y2HJ5YgNrapxuuYNukkcT98se82QD3AgVezzvyPp1UdaNTet6VHkMmWME2UwJ",
  "key2": "2oKgUQPUDSB1UUtAqYVgDgH5vHY4GdYxWFKFqHK5jMC9MQiRtfkVtuNGQTkBwEvXY6f1g6buMx8zrtC1x6Uc9Avw",
  "key3": "3eBiJmLFC6gotM3Qy1NV6jGqdbzNXEoBzgypHoLe7HiMC3tkjFfyEZuFUKgT4de1AqZEoRJGZuQ6kNh9KJSbuC9e",
  "key4": "5Aa9K7CRCa75bhLopr6HeSfh2KYtmHv2m6KChcyY4hNqEhCF861cgypCQ3VmmDXHcRGEfk6K85zH4hV6YxFW7ovg",
  "key5": "4eUjtdqpSKWorZV2JGcjUMDYpWo91UaQAfp2rLEE1fu8VuyhgejjabLX8UbJFqWNprQYBi5m3RKGfaf5Drpfrszx",
  "key6": "3yS7EXVc5f1Q4wQA1CiJ3E8McJkxi3dEV25uN222Cxq9JgywnHUZkijHcerfjKPPMD385mUbewkwzgciM2P1H1yk",
  "key7": "uTghgFfJENNDWenc8L2BCn66Z8P9tk9ZFgawHSxKv1L2UUDLtrBqZrmLEjXYbPpLfjFgV9DJB2Aj6Nhf9ZUxcBa",
  "key8": "2wFK7LkR2cF9u58AXYqj3PLS1hmAu7F8crGQBUmojwU9uNh7ihnaWD1zauCZ7NhDBszo6bUY4WrSojbBzdoMQHnA",
  "key9": "4Mr1EGspnSDAL99FQSUwRf6itAeJWLJGSvz7ow2BmedmTs2FDy5c1DtTFYb8QGU6WmGpb3jCR8wxdwXkM4zpnFUy",
  "key10": "2QkC8hWjkXt7v4w3aMP6EAenjhFAvXEF7WadEX5yEiaHgGtfFNrbRbUd8EHvdQQCkfq9N8jpEt7toqg8be1CBix8",
  "key11": "3YYjyqQsEvU9QqypS1vQJzMKdGrm1yXzoLRtWvv6ocDMfSpKXauLoxZjTmk1zGaCDbydfvZaXLZfC91DS3CJyv5w",
  "key12": "34N5HPjvJZUNhnzn4sYXVtZ2uPG6VDgd6EjdjhiLQgZWVu9UszLdd7eMn5YvD5MrkxzHLq1KQZHjjE4rpnGRrCsy",
  "key13": "KjjZbUgrdbw6DEpXmLA28ewkEQCfu1kDWf761hyeuduJN5ddbh3ZSXbEJmXRwnTqxJ1TD5seGEoxqe6PkKkj4Ej",
  "key14": "3b7TvFEVUvacj7nSu1ibfyvJ2RmidSa9MSaSjn9cFFk5SZzmTmoAzKqCwuduhRUpVRyZtYHrrAuzqSSW9SwHP7Si",
  "key15": "5LvAiRh8iLcpSPHEhbaPrhfU5BFrXsanV1mwy67Tz4KmcHYCJPTvCChNKK8R59QcMpYuM8YVe1aWUx4VZANMoPWH",
  "key16": "qKrZm87mzucFD23tySnrWHpeAMgV7fAhz5BqGb2Cd7YTjA6s5EGY56QrEJNBaUi9tcPUrFabp1HvbkCttMhm6Rd",
  "key17": "ZNKjDTSHC85vsBfxopmvstLRS3LhpBx8oPmGJMBX5ig13aVHsxohijk3sLJjfkpcVAiPBQPoutp1nFRHADf6rvr",
  "key18": "21GpuG7JEBuneFSGqb8z42GwjffyxusMtikjh8E7Rx78NFXLeyo6ZXA6AqzQ5XF9DpwiR4TaJwTXcnSm4VrZxaLM",
  "key19": "3aeWCvPxJgLr39yQn2SyPkuFNXVxvpTw5RNQS56fdKS2jzKSoMH69FQgis9NuJJuNsgwvcfugMpnEL4fK6gUm544",
  "key20": "4idSYqVWe9G1JZz9JrWcZdvJqDVPg7gdcnKHz5wKB8j56GesRBGiRB4FkY6iQxeT69sHwL2VkV7kBWok9A82JdAf",
  "key21": "5L4CWpEZ2HxZC9iH4q8HwcCCYNfa96P5RmKBZbvBFhxEoED5PAnHci9HNnkqmRQGRnS3nArBYcxTYYFAU6iid2Wt",
  "key22": "5FcDaJ8bmijHYMCK2quF4p2P1teUGyTynje4KcHQjWYzHUWAj491rJvQMXXubfqeyFG3eEj5LCYLmuo63LeLkRAf",
  "key23": "iTVvsyhwX5eUrhAEb8vCAbkcp9J482PGqyDwXctta5wRrwLAQUxMxdiBkvDXkx8H4yXmP8myfASiqwXE21hXJcg",
  "key24": "2Mcg9DZrBTCpa59qvLkAuzPrUk6qF2e4aFoJPjPCxy9HG7fA6EgED3r4RqdpaNtLe87xQ8nABh8hWw6VMKuME8T",
  "key25": "4FpGfH1R9kwc6UDuqzi4tobEY9noLTHbZiqwFY1TauVL6BXCtN3jZKzffoBnKVhsXq5XBAcVD5CmWZh7ozrFQGyU",
  "key26": "676R1aEuh712xUCXhS6cvJkFsiz3CrUsHyB8AKya62LR2hw3m1kbgEirXUczskyahY7Y7YgVCsPt4HfjhCUKgXmX",
  "key27": "42LJF6KsXeiYdpFE4ag1afv8zEA4vNkinJK2f3r91ZMKbwXa5AeBBLKMp2cpKimpWi3EGn1RoecCnaSmtFswUn2A",
  "key28": "3xqczGrrT8zevYfcRTQ3ZMTnANJtQ9PkV8RVszfAguYHPFsu1W7uKTwynWJQTiMpH6vz7L3d1rDMHUdAnZs6KBML",
  "key29": "2KCQU4rA9xR3B8AoJQcmqsEcEXsc3xpCsBpcMPCZL7XRbhtRhfYTY3PCHJhpinCiG7J2H6CNTk1N3tL653BnNwGJ",
  "key30": "8QrbtBXZQR9V9zKio3v4pPjSbJXNhGDCrbKaW7C3sgbcdmZGSVdQDSXAZfdjAMw7JwmrMdFvVysLL3E1dSVwqS8",
  "key31": "3cKLxysUtoff42gD6P2YaxZdvT6XdLybha5doMsNniuC3iWojvg3BdGmUo8K36bsDDNd4ALW6CSGgFRrbgoTb2Bk",
  "key32": "VRDQ1wtAcnt78aGP86iXQnsFTCiRRzZdZsGNQEcDTWUsCaDmvPp1pi3x7tEAQnCFT5aPeuvmeRwMKqocZxkfPdi",
  "key33": "49FRJU2U7TQFRJxhQhPJEUE6S31BK3bz14dhfAyqAeKaRLTEo9DsBj8HjwgMACMSg8SqWS95cQBmS2HYvD9NnL5h"
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
