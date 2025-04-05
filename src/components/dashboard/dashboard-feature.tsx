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
    "5DjhQx2if6pNa1gmf1aPefJ177hiJFKNWtXb5KFXrxHzwxG2P2kmENKjFUfDu4ojEugvt9VHp3vMrsfgCTQnrzs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2za1aBHmxXsRopvitP4pGNwVHB7TKvhogm4s5TWhsGutq4QXSDU4mUn3CsRQ3TPXTXmdxwNX6dUzvLg5hT5j4Jbc",
  "key1": "4R3MdqL5XZKSeQohbbt6ccNQTSs8eS8iwtki3dMSaR4Wt9fyzpSJkfKRnyKgvGydrUnB3HaiZWe4qTmeJUsReJdX",
  "key2": "ryqHZ6gC4Pzk1SaaaXN4E8ViV7eijeZNYz9GdcM9LrT2ZTjgr5w6fdyfqg75to2XMQ8kt5KoxX2NyPYZrRWUTbe",
  "key3": "JvvSUr4qz7NirGRWeFUWqbugH1q2GQUrh4Cnh8gUAdcQ9RbGzennu4n6UAkxfoUsAZvnT3QmzT8wZNyQLdGHTTd",
  "key4": "3q6TLTY7hK8jBAUsfphT89RVrgGgiWxJw6SLNWc3Fca6eJJMNed65pBAFjgayLXhVU4JfW2Wj6kGpYhAH9X3UZqo",
  "key5": "4h5Vtuidx66UeU5rQ3CV7VRbWqtkoCHd35rqeXFviTywVymswKHGwrM5UYRgjuzesXr58sYRFYWkYgrRaWbt7RHE",
  "key6": "63bCMKGcQf5jmQwgBDnfqDN9gAWSvmGnGdxN7QJjNB4kh35qpZ9irz5hgUXQzPAijtCgVxqhqhm39DSMQdNGQT2a",
  "key7": "3Uq8hwwHVAZba7uSXGDS3LE8FxqmKg5P4fJdocuxsVqusCt4zHujbdsFvpzUQWR6tcdu23z43NME6Ctm2RmnEuBB",
  "key8": "2ReRhVQ5LQseSFVWAvw4sdL9M4vphGNQJZ1VQZ8YVnupeubde4VB2XAm22iBzPKXGTgcYX1wL31inywQBozjMoub",
  "key9": "2rRoZToYFE7vbxuHaDeYFxpctkgZB5j6CWK7jPFfi1a2Qdi1gPkiF911JGrRvk9XgypusYEkvzCUGtj4AcYZuamE",
  "key10": "4WkWnT6U2gJiSfCHBRMqZbDkNh4fiqzzEL35ZFXqJqPjKQ2Ufn4Lxao8FpqztHkLBKfyJpQwww57q6CjJmy5Ep5n",
  "key11": "vfHdYZ4YW1Drtx7vxxdsJBh481L41VQHJq9JAtCDuSyLyXjstCaqVR61JY2rMdCQPzHkrJvJ11XzQvMrY9AqgoY",
  "key12": "UN14WzK1S5KyNzZQjSCXpGSjgDdc5dnuQ19sUj58czvpTKJdBAgeti1ZYocTYsAvo59w322KgmQ6Czr9P32fFwa",
  "key13": "39V5jYkMTbR68DbL4ppnYu974he1LtGVocQDVYJFdcaiTjWaJnFDfX2JSQP4gGX58GhiJC5efrEexPC4oBhsvotX",
  "key14": "3t3an9Ttgr6MEq3GQ3UB41hQQ5tzMG1CEEcvg2HHrvui3vAuQo8nDPzWhqgxRDF6wHB9ZFEUyWe5gK5C4qGqMFrR",
  "key15": "spRkYrCwEWnLjhQJrv7ZNqYMDEcADFiqfnviCxo9xvST98QN4GS6RhJUNrpfrbAVjBLPeKwjdwEbcaay3fB67Za",
  "key16": "2yibhMrGT417A5VhNt7HTRS5mupr9D4oFVyhKSzHwLqznFJxMomK5PJHoofjiUnCc3N1gM9VRvJf3oXUGBnGJUr9",
  "key17": "34mpMCXNHQXHvayhvoqEhpodgfSGVQViQtETBfDXqKL4Fqi6L6QDnhkNeFDTyTfBEVw6mzLK9B38oktgBpYFzs4C",
  "key18": "7AYgz8K3wK3xmqHmnNsHgydoKPaDmZD7dFC42kf1V5HkZNSfMBZxujfQRfKZCi1jt2nGmi7DMyS9NpL9G62A7pP",
  "key19": "47F8HQPYkjsGe3XHjq5AFJ1ugJkBi2tXXMF1y4DZcXGkDRzA9RrLXRzQ13PmhPeUzQxX4FBr7oUS3s7PsDyDGn2C",
  "key20": "4F9ifytRs8v8HmTLCU42wdFBGXLUTZ2ajZig1oGGPX7YScAoU3dUhCTaDpdDs3PCcBJVNpSF5XbzqfsG3JZnu8Eb",
  "key21": "2Xuq8PEv6RYhv6tgGGN7NSyBkdRNcem8L9itjNaFCfFFSJpuSCb7MgBbrt8uHbFniZi7RoUD3wfVJhKuAQKJxGHC",
  "key22": "3y4J76bNd5TtfeQhvRfDkH1y17gLRiPU59rpab4mitms9MnF3DeRFncnRrsHPZJ81KQwAVRVQ3w3eKu8WKrpSSuL",
  "key23": "48FfWrm7CQhvTV4GAUExh9txYm3YkA6jfUSGpAseXSC1Cxrz9nn4bYBHyefwK5hs6GGAbwNum9DsFD63j4jRaccb",
  "key24": "3w5NrYcC32PXmH3owR3QN4QwwcmRndDW7vEFZydGL6UeHQML3rtEkjiTseCM7fMUnciNHESNTdvppT2U8mfQ3SZa",
  "key25": "4JSJXxTesmJYuR2Uo3k3A7orvhHxjAqv4XP1Kpiz1BAKpTM3wc3duhgHsUchxpyFpkEwGRbm3tZmp968dHb1uQpd",
  "key26": "3KRHAYvPcv91rigZjBS4B33C4BmUu8hnS7AUnTdTokA8H8G3JhL3cyVEKmWmLWS6dRpfnPdSu1c7Q9Eaw1EkVGUL",
  "key27": "4PZzpjEuc2Qhw14PF7DwqSSq8zNV6mqaDciVTQeutkqhCK5nGqyyAm1Jxt3x8rtminmHabNadhpKMS2bBKQtDZis",
  "key28": "5VSHztkUbP88UKYSnifnSsf6MZwqoHtqj6jKSZBpp9Cyd4kYESYiK6suCm2kRUHSd3c3aXghzqex9jf6snVtVvin",
  "key29": "4CuaJzCUFeAgETL2fATKwzxfLxxpqt1GyXoFEwAq4BfNnqidGhw1FXSK3GFHHu1mCUCaQEoCSC2qAw37ySeU3pLh",
  "key30": "2YDbQBMRMkfRRhF18pZDDMb2hfsUNm54zq3Wks7YYmMmUup7dnD4spmnSUEpHUTD3n2PXzNabPCL3ZVPn7DSGBCe",
  "key31": "TBnG5qk8awbdMMHjoKDvFNEbSznUCDNtpccDNDg2kfwc9oeTr9THhcVUQDGnt5j8EVB8pkknv9Dv1uwKXmeHVY7",
  "key32": "Kow3CuBnXYSNhPTPDbT6NnDDpAppdzcubcw7QmAmNyiPwJZFtqVhcksZJopFbMH9kvt8gkfwjeVqmEqQxVx9m1R",
  "key33": "2N4qFESfcwmmwoLPZF4i69x9pcdnNHiU9gSy2KpwfaDVVDZB1K6Ut7kThkXZb2E8dkz7GDoCXKyF7E49GXE6abSH",
  "key34": "5gdUEYx9E1cERjq1CP5S6AgghAeMBoGB3gmQsHU7YMkE8kyFwGbzXyWgk75bsy8MrwXwGiUVDQYnRrbgRCxyys25",
  "key35": "2Xth4ehdMkRBBbnGvsoniWfrbhSUCsv6koXigbTvjn6xBnhVzQm1XiyHBKwGDci3sVTtpR91Uh2cXJZh7qE15pCD",
  "key36": "XrGwe1u9s9jkTxWyZWnvSseeWRrm7dhzkEtQxfDquqjtEBNdMGMHhhz94BhTEGJx3EP8wjwU7K9XZozB6eQCT1o",
  "key37": "2jkju1ikCiRBKvBY9wxkZ5G16dsE48XPMBok6B2jsvc2XNxWzzcEZKvLTornb75155wvjTMvbHe9ZK2TmASsi5MY",
  "key38": "33FUSobnTVyezpmqSAkwGNLPqdrYM6D89KGKvSoArVyyfbyPYBzH2s1YRXjxPFiK7PU9c7ksRpGdhNrQdYewtUxZ",
  "key39": "2mnxoGnuM3mMTXdD3sz2pT67Kz6V4s6DhHP2TBjMe2gE7Mu8myorJRAwvC8Z8jd2HJHPgn6fACYVnanr9RhJDumV",
  "key40": "4vjg9gWSFuv7YvGDKm7DzbzLHUxf24ZZLzSPUCQXbXChJasWKeWV2Z9CeQuCydQeHWQRFc64t1Q1nDxWTHHaypjW",
  "key41": "4AU4LAMbjPBKBNZ6bWYU4xMmrYWFRV1R71jhG2UryecnwjJHvM26C3LAUKRRSrVLaEdmM4uXh1ntT5eC7X1rbci2"
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
