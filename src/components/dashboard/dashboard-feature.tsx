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
    "5YeRUcw15oKbD3Tch9jFGcNXn3dH79ezpjuLjfvbZTK1NgCkjwzEUWnjKtiv9DMqxuDb2AcBjKyDe1DEikGxW67q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gv5e4KTYsKZ88sJDkZVbyEC2ZoYV9UMuZAUGViyAxAfd6vS9gqnky1EUNYzdib8dbE3x6PiYesehrnXKf5fUgXT",
  "key1": "3vouBnChmPpWfJhvxreASzDY5Wwst3urazVpKJRSkLMs3i8eKvyA1WoAAbEZYRkWs9QMZjLxPhen8w3D8ijrBQjP",
  "key2": "2rCtQKcjYQXWcHnwSvJCj4GjLxRcRE9S9khkSGndUfUjNYUheAMoGnhiw2edVwEg6Qn9Y4pG5kNEUoxpGEECcttv",
  "key3": "2RirucDqGKTEioUf6FLsuyuxhfVvzDm41gBoFfryC5CNoW7BBFK2fVaA9wwZCLgKFWuAqhsrW5xP1KxdG1PMKNui",
  "key4": "2nzhPcDr3UgKSU6V61PGiPoAfEEwRdMYEk9nUG7CzA25vZ2PWFk7PKrW4KyPAgE5q2imuzh3fbFHQkQbPmVJzFG6",
  "key5": "4cnfGSdfc5PvvveducnUeAsnbhJgAnvLGSP3wd6297xXBkc5wdyxAz8WVH3JawSVsiDMcy7h2sVqWFaz7bYQXL2q",
  "key6": "2UDv9SqvgVW8XzBz9mmXhJf2tPcznnN7xCt99BFchgSfcqQhKPSHehosDTPBs69JuLRBpZbxR5KjaUv6J87AKUit",
  "key7": "3Z1EW6X4HrXoxZCwDE1ZUeiSpZQRGuu9Vz9R457Qpv4ggj4MCGCZ1gKbfG2xMTyeVZ2duJhMzMLPQTacfTswhcDE",
  "key8": "2p7y172r9Q1okT5RDiXpYBfRCrYDf3pgyEhjFaJirnF9wCPSMyYqoEebnXu3qXpmzKkbEdiupDFgGSkhhqeDeCo5",
  "key9": "2MZc1Sm1pvwM7v1RhNm6dgLjkJmYmVcYTHQz29XaCSRWK3ZpDScaiz17YimiDo4v4kYfKmoBSpuJ8Y1dFSa6iNXb",
  "key10": "4Yd7Va7kZwbTv8iVtVtxL5unm79Pfie7ceZu1AZQjwZ2VcP5wxnAYm8fK6k9dW6N7yq7GtxhKWztYb2rg3k6CR1D",
  "key11": "2s4Dch9pg2jvmrD1GQn4FR2P1GHu8qyWts9W99xBbxjHngYEQY1CderTMNzh6Q8vfGRN3rFMp1BBDyZz8roviPyJ",
  "key12": "3HL6LarJUf9n5H8iqLFbfiLyhn1yBC1hdNJdPXHhd5zinwQu4BZJoaofTxRdu9oZgvS9kXdGm1k8gCEHShdjGkda",
  "key13": "44mnfEfPDK6YzFL9xzFSPhXKQNQt4wKaW94cE3uZKVxJCHRLuEwQuhm47nvsAeddYdZ7JDfPAZR9TahU5uLDQcKW",
  "key14": "31nwNq2GXwujZ9oLCmqyQ4AMmXsiRQHArEqAuMsWT4nAoP2DmAtiaMAyJbVqHr94B6Djbuqa9LoNdCfaWu9nZz9G",
  "key15": "6441V8ssUjKt1KZxvX4KPggtcQ7PMWpDBtmsJh2tHn5Wv6gk6T9pVJxUc7dMwPjiS2GfNNNHaCA7vPMo3ySdTwLU",
  "key16": "1aQNguukbwPR5mGsh6N2t1doX69VSjBCnRLr6yscH4nFmTrMtNn3GR4exWkgcKt1e4Pmsy1WhZ9am4FCgcNxwRG",
  "key17": "4GjEVXbYfcLzbMv6WXmb2vGicqUkKjn2gNHivrszjWicNYeC1hx6en8uMErMbCUbBUxr94VMDM2zoQZ3sxU7vTU9",
  "key18": "3VpJ54siEJ2VxWesectJyvU3kXtNqnJjXhEFwaqsLTksVPahyDL6U3T7GfchWdkpLa35q5hEfzQAmqGESs7XJfDW",
  "key19": "5CTur8sexLP9gu9nzXzbKzbC5AipG3oU1XN7mbUWWL8zdu21HNFjWykAs6bTHrD8Vr7rgTivuEGGRNsKtt4vLCc8",
  "key20": "EdUsMM1NYdDQd49jnDmrjVHJeezJ1fBzLHGrB6GhKS7P1wp33RDVk2v9hgG6wh2CawskKncXeV1Bs8XsCoPdPhw",
  "key21": "2u6oEfc3sGJu3MrTvBqQFe5kYBAeRauNLKTLQVCcmZtMPVjbtQN1pR9pzYTyUgb2RnMufSVP7LDupSP641b94tus",
  "key22": "5pcpXvdzp5BjcY2iRowHaD1e8bk9ymZu6kj929boqP5N9PovcZc8V4MYrbhF1bCarbkA336vNKgx3QKUPxcwr4cv",
  "key23": "YWrFoJFZrBFvqNAS1G1CwGoqr8ykY1afqMVJSg8guKB29xMALLM3vrvpQSi1Apj8wB79FWDx2YQwUvfSNFjZHzP",
  "key24": "3ou4AJbZzTqEGZT4hiz9Cb1v68PfnrSqwoJ9y6GaDKytU7m3qpZrVBme24kERHXpMUZDyfYyPUPpfVybDxkFjYSb",
  "key25": "SX9f5aHvRKHHPei7F4eDnUY4bhsv2fwqZkBkd2Ag4QAbELwVX3yaf34BbW1FghTFn4cn8F2MPafhqC6Xg1NUkQV",
  "key26": "3fafMkLmSUrGB6qhKirzGtVqAh4PxpU3RhihdTCu8EoPNiPKkGQ4gfEUPWYDPH2M3j1S4wmBMDsGSXKQZDM7VzPY",
  "key27": "3rxP6PaYJjwuot3XLWtMAPnKmyaEqiwkDWfXxtpnDhErm3sWWkCUVC9NdhtLGPCnpcYXszkJkjkTWhb4LkVaDQVK",
  "key28": "2WSNCorv49At9gH9H5jK2ByNjzZztPLmNhQBTSo92fqhosnKRFWo5iUkKXoibDzmjHMWzngn4V6wWDzZwFdHGW1D",
  "key29": "5Xwz2nYWYdedQvaJJJhh8EBgMrSmLMSnMp6L1rDV6hanSXjSPUQd3F1KpgnHXtU77NpdMm6uJiQmaKP5Pd6buNKx",
  "key30": "5jVFgcy9jEbNN1aYmDGFerGTaLoo6i2NiCbuHNrMCsqnVx5QCd4MnuuH4swmHsGZbVXvsxxb79AYKmyUK8AQBMH3",
  "key31": "5TrUbLY754F3N37LhUuHX4pBr694Pqa4vMvEcKiVkMu6fdUqkkdVMVYDQr7TgmkpktajHXEQsPZtsBT7Rh4fZcBv",
  "key32": "2fGVPE7GWhxcNqYeXGwGaR2XDcRxenYWoQ73vd1TV7xFPjLtznxEBTy9X1aVAbGo2N15sKJi7v5U9Hxn9zaAF9kN",
  "key33": "DHK7ubriC1gZyoEjEsg3AfE2Doo8SwnuAw1svgqzs8MxMSLrLTLSxmMYgEKk1Xfcxzo2UuKhe5y4F31gGDQeRv8",
  "key34": "5p9yHHNQXXtdukLKwXewnmfzTbJAFVaGRWempvbbmZrQHvejfT9hhUVFXAU2UzQisfzFq11k2oFmUQeC4YQnrrUb",
  "key35": "2id6c3kkj35rEAgdM71WAeAdoY1j8dFexGHzi5tJXQvqFf8TjwFbijgLcdngeiFFX63MihkmsEKiEoHcAJNrVkfT",
  "key36": "5n4YEymNgkHSGWsadPmxPv5DqPxh9132wpEZrbiZtD4SFDaJbDzzZWcsCUftQU2ZiTYvU6rtvCgeaawNwNLygnar",
  "key37": "hB1HYVhQ4mGM3Q7wgHiQ17qrSDgRWGZ7VkUMEo9xk3Zb6B8KWyph3P9HFCodAYbNrnKTEZ4xzSufueAYKst4jvn",
  "key38": "4eYritAEve1j8pWCBnxdW7euajfY4tPXVGwmFgQzLEqck3KYeTNZkTbEGEo6KyKyQMQG38uMKsz6wee9WZ8DkJ8g",
  "key39": "2X6boba3WiQnbD8rWspLBwsRA6btcCdtKvRSyfe3pFiHsV6Tvc1y8khg2B7tC93ARSjrvLGZfPGBourBcstTKEhF",
  "key40": "sKGY2emzm8PtDWQd1XAhHZrZSnqBsYzbEivWwJLkxvAyeWWiHuejvoz9FCYskAdXZBaDyc3e9TAnE6Bwr7Sc9kX",
  "key41": "29xe5Zphv4w4hU5T1pJDFxibLjPEkhbmXFwGbFRwmKcUnK9A7TVhtJn1REro5fYu2CjpqGGsYGQGBoDvqtuvRXAy",
  "key42": "4KMKuaALizyru6AfaKztD7gcBwCK1dbRLvxJzpLHnc73c57id9QXvvhE8aCkKbspGuontb9yQM6qid9DAKfR6eHG",
  "key43": "2sqDDiZXVfPqaYVT9QNAcpzqrhtriDvsucu3xd3qiRA5DGjZpSu2vcbx5tVHwuG1dQD54DHX6TEw7PoPqYwW6v2k",
  "key44": "5BX7R7ys6sjYrorF4rtHCjbuZ8UAQ4j2fHhnF3cbiLK5FwL4EhohZZjma82A7NzNwibmP9ENQpQZE8RRpmjvNPcW",
  "key45": "2XZMJWAPNcwSJGRwKJXKz1nVnZhn6NZjWZSWTmQnf4bryx76s4FRj5xedXaoS5kFMT71s2cEkGmwZbHDyJK4kmmP",
  "key46": "2ST1BBWQxCEN5ktCj764MhLGGNLTx6kss9Es9SJEt8zgK1aQ5wdm7diDSoKpfFzhJfQDxXbPHM4uMyp61Z73RFwx",
  "key47": "3YrKCRMqUDyFQAsURrND4kcwbUq8jPgSdDRExdsxRGJKEECqDXufvt6o3UhH321TTe8nFmDjWGCtPC1maqvszswm",
  "key48": "3y7QwyRTDvuw5RJm7WTW23PvwXWPDRBYBBPGuhwF3LTQ6cFhrYgWC4x5VbE8LyXTWYmEUL7Hx1G6W2em8secDffD"
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
