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
    "2Pe7J3epxaY8btXtMBw7Yo8ijmaMwkBXDnX2Yx29Z6t2nL2dkni4mFhdMarMR6dW9VNGhFUQWAcCDnrkRzUPMqBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yAfV9zwjxsxScoPS1fHYX68tjtTiUzqX4FZd1Cq5JD1WGHdo6j4RJcq53x1Lh9Y4WT6B3sVRh1G7MQgzMna15RS",
  "key1": "5VzNcY7uESox6dQ9kKCJxmqCpi6qJBRpQKAWFAQKZcc9kWjuz5svvomrxgbwoC5iHxVjmXj5Ctb8yXTwojieAPVV",
  "key2": "5W9H5r6VxkeJtP8aLR2b2sUBm7J2uFpjyBqRSbM9WKEQw7F1ZPahKviwXnwLiuzcjSVC6e2bu8MZLKGNrB4spNNG",
  "key3": "3bLoPfuANpEbTpAoPKoVzmocQF5pafpZ7p397vdPPo27wobZhABr2qKzDdbXN38d5kgq9NKutcNAM2yoYY95vJrh",
  "key4": "3qQdYjekkXsX4QiNR1pSuz1ifaw9VtxcpMynHVgxYPN9S6duJ76XQ1S9Dksw9x3aG3boUMWvzRcTb1ZHASsFfMHR",
  "key5": "4eHudGttJaMKCpkDTvmGck2vG35QKD8vCKB9Q8d8BReBczgiQpS2QaGtBojCgFqpK56BisKdySn96jUcQzQkSC1W",
  "key6": "2w1SA1ShiQNfsGHR2U1QkaERkG4n7oQbBHDtTYG4GwWPeB8VhBnazZX9k7PqXvKsYU3Kth55YsyycfxUx34uyiZc",
  "key7": "kLYDVnxWmPAi4YNHNJKaWTbV81BHiZKHrFnZBTrYTATDDzQuV1d78o3ukgQC1MFrABKRWu9rivcNwg7BQodEUk2",
  "key8": "4jPEgsXCF7G5BkyaRUSDd1dwMm7DVZjcEgMRNsi1qYgA5xLjccPR94NgREkXGw21d59Gbss1V2u5LzvhfFheBvUK",
  "key9": "37BKZxZBNBoZoojd6NGEF6kmvDd5duSRqLJy74X1Qk6cy2SxrwmuYVDXKShLvcAX6BQhFxpsMqpgBkNPTD2ycJDs",
  "key10": "5VmDyUUnz2Xcpcd4ccWoQAngaRa4xDJjPwHnTn6dyhes5QcQHWiZJacpnDAzdRWSC8A6Fo4L2ftNjYF64DphUFGa",
  "key11": "2eg7kpAfR2BTAEF5AbBT7gjUPRpyD3JHeaep1wFzraV4jCVnFnAK6HE6SgdeCXdiN1NJ83ZwJcVEgnSVVCVBs4Gy",
  "key12": "5Qw5aA8Ncuafgc8pq5cRMFsbGjmFeKMuLEDDjCcg6A1r99VB1YvYk5EWtK4fzJ3ZxqVWetbcts9mAarRtRBWqZ2a",
  "key13": "3PqRkPTnvex7PnnZmUpSKzB1EYpUKwwEtxi7zDFaAixyiJwtEaWKGwkH9Nqaf4ZdVJ7BLNKMQTScpyHgo3gXP6Hi",
  "key14": "aV9ZDkNKVnSbu8rtuWEH9qhxK7FfRZ3pm1a1FF9re9LkDmoLUfhsWb4H1ejGHHW5DU5j3eBpnFgLS3WcJdQRu1V",
  "key15": "4uRndNXDas4gsQobnEQeEsqLgqF4C5vYwUsq4XqRB6Q1vjHKcaGHUfnkFLHTfCFyP4XfdJXuf4tZmmmQNxAjz8dy",
  "key16": "5CzKZcmawkbo78x9f8N7HBMaXEKfZvYemow7LdmocX9ToW1dE6hKuvL3oHrPF2aSZufqBbEbNFTpCpB4mBZKsn1J",
  "key17": "3uoZqBbNbqUeVB8kufeof24eVqS91g1MhyEN2wQndZwxTRgSSUgt9UPYW6jmiz72ezd7N8PNZqryc9ePoVrYdLr9",
  "key18": "3hXe1W2kpVRCeCJwpwuiLBa3ajuZpA7UYvaCmxZ58egX3aemdzsz44JNt2BgvhEU59zLHDTTPouKyfnByaxEfWu9",
  "key19": "mXxJUcpSLz6s7MPnkpSWJhUoP1wNeSVZ9evpK2SvrLeG8eGGozZqJo67qjHjoQrQmcmmHRFViAcUcbUp5gYbAQa",
  "key20": "5znobc2wzqyphqkv8zeUsDuCxNGwGfV98MMDH1HCdmvVA88RRh8VETnxwTa8w9GCV5YqZYiVNrLrHjeRFii8fSc",
  "key21": "5fThbgS2yVFYWF8Le6cdjyz94FjB21XRcqHy9uwv9i3cEJ417eKyhvxk1CubCbmEzJAW2hCbQzaNEJmR7eaRrgzN",
  "key22": "2UF95czyexqFjKT9HB6Cza1rNiG4aWoLPr8LEULAX36q1fdDPEAjRoD9Pm3BnnT7QUY9oj7serzK7JusiR6AtBoD",
  "key23": "3FbefFrAHDk2KZsDAAuekLJyo7bfaK1nFqCKR5D7qsTqsELqi5sNxMtzi3meVRAE2wX52RmeqPPNyB81QHCpDy52",
  "key24": "3zqsMVPpVP6bktpitsBjn5z2zS7GYBoZxkn7T7RmVc2PEQ6QEnToiNURerKutwKocVHFwHUbmQ82T8ruchsaexSs",
  "key25": "4uQbWVbCe62DEWKnaAD2XJt3HSbMRyfB2z6GbkXZXJM52bbNZLDfpJs1P7ecXrctzz2h9TvQLTcacYEfZEbHr4ZL",
  "key26": "4TEZxFvgeAWiVCiQLx758MDMcD5ag1hXkPpdBwfMo4Zyqhwf8WQcVpksRJMKdkFSEr6m9PzgHafKDSbNdZdvq13s",
  "key27": "3bA4zEeZvZ9REErvm8Xw6SKyhcnNLSLF1xRJDkWC29n8sQsFUCKr9ppe3fXSbKeWuCJsZc5AQDqBKGduunLZzYiZ",
  "key28": "3gu1haVFdpzpXFWVZADwyiBknT6iQ3ffoyzpn5gva8vpVg1aDhCtcHT5VwENHDLrCEF18my51TmfKk6ENbXUHy2x",
  "key29": "2s6LkALpmKUupLextHtRsGXewh6qhJWXJ1DgA8TvpiTJARZ5zBctqymaWAUEbWFVngp2fMFLZ8mcXi9xAD5c7nXQ",
  "key30": "5p2QmiC8ZkpHVT2tggorspsgwtbufZFsmgoejnKpN471ifkqQaJxnhdYA4bzhDUs18kVCvgrN3fdTj4yYu6KCVG5",
  "key31": "JUMtuK9PWKSQF8v5wDT8ihxhEmw8RGS2sArrh39DBVo7BaYgJwkCahPnuQ1znAUKAdfASpjYT3uP5QdwjLve828",
  "key32": "5QcBu1MNSJLdLpDu8zPeZnTp74oJmSHbvTn61nLmS6k863HQyzM7hzoeUEbHuhkE2M27M2AfMEUfjcJbZkVrQ1wk",
  "key33": "5FJ6MnWbC4sw3D9wi9Dpcv9fvhhgVxJnDLFoCBu4jeXZHw6msrNfjJz9tuduiYCuVKw7uAVCnkioBJLKE71iGTAb",
  "key34": "67Cra8Wcbs5cbYHgPw3XCvcZjkP6pZ9J4k59TayTbSydTDDznUnHBcyrdvfPLBFd7TShMZvE8auBLjuAyhMrMSTt",
  "key35": "4hVZzvG1Vyj1GEMvDs2jbLHXFpufUNMKsVqjVTkpKo3xBdovSxGhiB3KizM58fjVukw2DAZpm6MgfV5ogT15gEuL",
  "key36": "388Eqc4wUbQrqjewRnbJg1hMaKZXVfzV4woEvJiGSS98CBDXaMy14g9D5CyCvFh64ZkZpFJGugzqMKAXwgmEUg54",
  "key37": "41dzKWMWDpaRk7mCxiRkBgyidZnM9c1GizCq2vNA8825NANehfXQd38w6H2zqppua1AUdAWVtXZVjDwpaDH1trCo",
  "key38": "sgWL2JKwc1HZseXx4NCf8emuYDhcm4eYS8885usJNPRKZpGimVDBDmeCUuCN7je8YmXTt5WR1zD4Tj1CBSK8Nmp",
  "key39": "2Z8saPpcBrQffQtzr6Pu5p9PPgQYcwQ7jahED63vvvNipHXHDDkYzDpTCvfSioqsVZF5zUDMMWNVzjnNo9oWfaLf",
  "key40": "3waKoQzTSEijvQUU4dfsMyPgE9FeGbjDgMhGhRDkLyGuPjggMJ4cMJoFmk6EtLpuXK1gj1FFUzQ2WnVXrFibiAd5",
  "key41": "2ZS62hwWG1NRm6JARY9dgJtFFwisoLbc8PtsTAN2v5dtvssdbmZHJAgv5qa4ovdkzVARah9vjM383JgJgvAy9ysu"
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
