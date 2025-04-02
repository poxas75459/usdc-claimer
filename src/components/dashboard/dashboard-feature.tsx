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
    "3B2pzgspbzAfDrrbumBvgLrooYo7wnXPfAHQFmbnRxXs4XRt9bixUCHPxd16VNRDp2wMzH8yKqtaz9qct6agvULV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gG8WCqbPW5gp6rxYRHJVjnr5ZPHQP3k9jVTdMrTCKcj4xbkfW2jgVXuvX9QutPWd3Qz5V1eooCBbCfqbSJifhVt",
  "key1": "61xNpCRNjYmgTQ4JbmkYvVK5jUejmPRqAMsepCRgDh1iPmH6EAFDTNYFgVKd7RPkCaGTY4vS3ZZJugx68bd2Fr2Q",
  "key2": "5Wi1gCn9zcCtjYYMDKHnCc7SHgqD8PAiPBA321UYZZuEkoquTRmMGcBVX47pUy2Em4eRCo5kFrdquhkENJDkTxTu",
  "key3": "2rzaSY24nHhfs8b1Zsuz749A4oHudmtPUzAh8a1F9iyH7MZHdWWdbfVQJ9gj7hoxPBCoHna8kDmi9VMVkNa1K4Ad",
  "key4": "rWoqXKmxVbj9Xa4XM8UmBj2q7BRCRdBqukBqonNnZ37T6MKM1Yid3TUEXEVuEupq51Rd4Q3s1dhAFJbpgtHfksx",
  "key5": "4KsU8trEF93ruhZBCHnBgTcp7VsLXtJgJF9YJD2J1XyQw14f7dgAER3wCPKsHtNAyXuqsMgjtVzbGFKsQoWME5yT",
  "key6": "41TqPn1XsM4ZeAJiB73HerEWG3UMWGCnxVJH5kDBoQ2dZxxf8kG8hPtFqxX1c2JmZAo2bNiKQqkVoztu9woXbfER",
  "key7": "5RoGGJnyG4iNyN9kGaUbC6Cysk5FcaZhmBFZkq9SQbdruXQi3LPkkwdpRjcR2rztgvkqbkjbvVD39Tc1iR7EzVxy",
  "key8": "5KVt22TLqXJbgeRBK2iZr6BTG8cYeQv9GoJJHnRWxHkoJxfUMRhLvfZF37LG4rxPc51dZdhjuBGsBTyyHVxwsXms",
  "key9": "2hVGAJE1aFmnFtkxoeoCdZeoz95i1uV93rWpxDpVEZimTA8szB729EUEJZiNT4vVvJDjfdQmYUMJGsjXXfpMB36K",
  "key10": "2CZaN64NaB8UeSJNahEXsxts2E2hKw4mDdVuY5J2Q8wJFRAptKuGnrWUf1BGUoPLfKQUG1TgmNSpuLW7Vix5hycE",
  "key11": "28Pankj3zUq8gLcTgNSLwDfmRsN4GA9KfyWgoSnP7228Wbx5WNb54hhBgMwmmqd74SmtKLhdQpscm5JNiEugUJQ3",
  "key12": "4ntWsYAngDbadzKbHNWeZJr7gSZfAmhWvKCsYp5zy8poJzUSBrWVZPm9LkArWb6JdbZY2rLKX7cgoJExJzTxDqPJ",
  "key13": "5q3UPo1SeV6GCgvyueN9yEk63daENBFgNUJW3r2RrL9LKKXEfmsfu89gbGU7dGhEHWUuuLK4XEsqzyEW1rFGcmTD",
  "key14": "BaUmYzY5U7WdmDN4uZ9ZVuXvvUvR5U6L8rVYdeLb3QDSPEF54W9DXM9qRRw4Sk9prdjinGkH6cDoPh15jvPjofa",
  "key15": "2Sxitq4BUvGvHxaUKNtfqPJAd6zWrE3o5R4xeCq9wNTMDeka3h9d47gGPzw1T3kMEsSYMPrQ6ZENgqydWcuRMtCj",
  "key16": "2uADKSirmKkMegc6tX3sG9ARpnr5TFjc26YnytceFrsq7gcM4fA3ZpPTjGRJpwpUA8cWGJDT4SvovZsh3YC1TAdK",
  "key17": "3FaEHHGMvz92XMQ9K9kbBJjt7QRqa96Vpv7AnAyniEgvRCwaDyaoBxt2b2QCBiH47mgVTjcsKGrd1XYaAHuvDLmi",
  "key18": "47Gwz62yGBEowKrTjHbvv1ztXV1tkNhCtJ3EKWbvoELm4n75uZj8TJ3dXjWnBGiTcNLsFZkK9yijVug36EP7CkL8",
  "key19": "5C5E9pVygYiETCHwiJkmc27D882XBpPBFmeKhyDuhdVu1WLfJRhMy5ZoLFSvfs624VzYSH7X6EiDw67PM1rnuV9i",
  "key20": "53TmWx3j6qTjGHh7iisDjGmxxEkqY1LKagazNYVyiozvZWAWoonT2MeQVGo3iCocqb257NhQZ5hucjbqaTygp9Jk",
  "key21": "3wCpQm2uq7vWvmKWzNKhLu4u2tm1QY79s94vNxainyKPLgutHk7iA2MiZQiekgEKQzh3DLp96QNsihCr3LYR9q1a",
  "key22": "62QTn4VCb8c62jP7Z9iJNPtaoMPJ24Czrkm6byvjmhsm6Nk9ujFPERKAR8wsypNHCaEtoNvCYho5LZMeyPtifHtR",
  "key23": "35w2CpRNek4sMFCw2mw74mp7hXCMtYuAS9GTo7ePLkv58mq3gCXw9LUXzPmNMRczYgrrZhwuqMpEEtcixAdkghWP",
  "key24": "2rm4q6uR9ZMNQXd9Tr9ad8JzRLrXtqCk2YQVnUrEKoLDN1MdZx9MATjiiXuhoSzo2VzzL8bmSYPmJWogUeFYEtkX",
  "key25": "Qx94Sq8ppQnVFqF2vx7RGGQiuprEeoBjd6kJLjtQB9PD1K2jKacdcuQDzGCyrSJz32GPe9b4TDnCR5zuTuhHYmD",
  "key26": "WnphJuRK7fQkVqGfKqfUo8brotW9tzp67oLamoczbGWfLqpkMNB3VgvadsPZgENMn6c3NEw1LugGvySP5824yKv",
  "key27": "2Db8KNEvz3XF3cZiM7FEd8cyBCfKKUnU6QUr9u1rxTqDooJq63K9P8oAXtHQMXXBxmzsFKHeLQaY4X8pC775sVLL",
  "key28": "4duStTA42EjhMY4CgaZLv2294eKDanmKr5wz8TW1enRoN96ydGRNghNuFGMYurdkgsimXW7z5HLiiEjzjxC9c2VJ",
  "key29": "38sG2Jb3txHfFYA8QVXugt3HCKcine5ryqLjJiARhmUnTuAVHMXhzQX1Ykid8bLwDLaViA2TdjmNtHEqABZt2tNq",
  "key30": "5L8YtKanu5cdXBJQTncgxhLPXeb7QrTvygVqqwM84JNFPjBMgkBJHjC8ZB6SwQujLF7d44HQTbrjTC3Qoxq7zTn4",
  "key31": "54moXfsrYVacdZCnTHc8RaVah65pmP7NAMvL8ccTiQM26PMsxhpeXssLCWzguvs4DJKsgo4i1JQEVJHmmbakXSu8",
  "key32": "2zvceHHzoveURZrdzY8TE2t8gCeoGSNNo5TNSSF52N7kc8d8skQpjXkqHKBF133wb7gVbWc22nNRQk7jnbfA6kZY",
  "key33": "4qscvf4vg8pCpkK66BSDyYmRnCtNhAJ1HJJzu1qVqav4T429gHxyrEA2sQRne3vrPPj9rk2E7ZNaDRSNyCt9YG3M",
  "key34": "HTGC4MPD4nEWVkVKENfuytCZyFC5LtHpjCjAYa2mnDmYAjqHYBvxSENApyn98drM74BULnWwwZdQ1viZ8kwTLdd",
  "key35": "HvFHKZJuEDJBvDqsYGP4tfoxnBP5f7j9R72uZZVuxW7cRy9797ffzWnyFjVw9ZjkHah99ayPWP1YAp1hHvpHcWF",
  "key36": "21xNqetcZdZReV2AHf6mNBhyPC3Z6sPQMbeJtWRHPQeyEGDDyaUkgaGrd55fm7PX59AFKdJrF1bibZErCVDdFZzh",
  "key37": "2wSdXiEKB6oHzbt1vM2xE8Q3BxpnxReJrEFrcqydEFwKnCUr27WNpVypc1H8EcRW1oQf7bwrKMydb39HB7oBcvPs",
  "key38": "3kkNGgK7Agwo4ZDu5bFRXDCgki1Tf8VmkXwY6A4516fuxTiks3AD5qK2z5KqGUfQaQ8zwWWpETwQwgCGyTcAVAfE"
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
