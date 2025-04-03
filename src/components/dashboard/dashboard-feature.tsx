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
    "288XXp7Dy8bXGP8iRmkNGfYmdUC9vr924dWz6LiH6pJe8PbDtmwCCQFuv2QNNChzbbgD3R5GRSq6U721QjwQkA8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ur1n4TcvjDuJVotrQu4jRkyuaYsrsbyvSL7TRUuvVwezkgaxMVdZFdAemGhj2SDUE69XHKpqasGTPUChHUhT6R3",
  "key1": "4rnim7kdmbicsNJRT6FDjGrVQuEAKAmJL1ih2a5TUTdMExr5eura7mHbrFPQ7djNERCkzBo3BVxeusRqd7Y6Cnen",
  "key2": "3vEMyK3x2QmemYgRL24CmSzV2pvQbAXLuijPRbvxk5FzWNfoU5spLNyoTmurGL9Yb6ygvD4ddE8etPyjvQz2tJx5",
  "key3": "2dzVfx69CbycxqRsRCVYyHsW2Yy1Y8q3aFLzsC1rKfjNQCfQf8HKL1gfqQQUVahTfLQuA4mTKT1hfSmjpKo6tZxo",
  "key4": "5GyaFt5wGM5KhXK5GxynauSu8xJbrg1JvzZKZpkg4UacwkoQwRr9hJR2xFKxq9xjdrT6UNShZ45K2VtWG8BeyqMs",
  "key5": "5SQNtcDYMTShwFGrsb5GyE762VMCH6o4PyENYQ2CG6twVNeLWrB43bpKsdtXs3a8h51U9vZniq9hihUV91MB96Jc",
  "key6": "UB2pf6ZpbkxjTse5Mim2U9HnLwpuvwBtCGoDQ5zDVMe3jkZZwHHxASX5CSrVDNFh6hqdbJu69pHj4CR6N2SuAUp",
  "key7": "iTMA52gVWqFcKnS5fM8keNxeWUmnpGcnMuaDu4QhvDUpXmQrThFrjT5rbDR17DuvR1Y8WCsHXzJm9KBnV1K6M9o",
  "key8": "2VngG46k7TM2GfdUi6HPx4iKN4uaRx9BhiQQWm325KvGAgxJQekoUfgBP5ggYCQKb3dyirwQJUwFmFQkjmwXFfkE",
  "key9": "5S7NUa9qDuhhFKZdDNmg2EcKLowQGmcBZuyVLmHG5YzLzoZxoeKpe5bzZTRoK2yaTimvnzvnBmyCtLkWcNz3k78j",
  "key10": "58Cg1UkKbr5LCfsJRY6zvHJJfBaXw8uuuV7ZfneTsYaR9EbRuu3tfYpCQc6apgK3BqH7NTk6EhDKa6cbYUJ54ytW",
  "key11": "59gmS6N3PC7tW9vkGxe3iXt73j5rQT34ffjXYJ2ETPeHky9NVkcRXsBm9Xivu74xquoGeVLB2sZdqLDMtRinbmd7",
  "key12": "bDpTBVUdvi8A9xTZHpwstqtwSKaSfreoEzJKM8sVAFt52vq3UviN2sunuweF3vijgHm6TvJycXwyLoZNcgAJNtF",
  "key13": "4RuGhP33FiNhFa913e5eL2Bobm6rFNeX9JRj9Wyf4opgNaz3vgGVkZzJbzWFEGTXD83Nowhb5SCaK5CL9jt1yGj9",
  "key14": "3cyyNW9ocez3ortBVKchavqFiKpm1hmQeGesMRhUxMg7v7AdCU8h2fgFK36cqDHDxoKHEWuUytBKASm6Jyt3cc2b",
  "key15": "3iLCYhPqv7TKBCau8Ck85NcaUa4tog9PuTYCAqwZCwBLmjUyWzwRekhwYuuwjpahVRweqwr7DjWJWYTPJGcsfT4H",
  "key16": "4ovLH23NqUHDSzGTjCcvfN7RxUEExHQb58A38YaR4CwkU2jCCARdLrtiYV8sCcDChJx1jzCuAuuEbkBpyXBLoXgX",
  "key17": "zogqKm3sqM8QSfjwoAseB15yvVzWgNCcS8SZH4okKKFEKDWSPWmAdQj7c4ytCYyhgypPQCWrwKZbfkDx5M71nky",
  "key18": "CKFvBxSVYnmWafj2hDUSsNVwFwV2iYcHJ9t3yiWVmr8RMhBoAcvuwtDxQkVJ7b2vjqoM2yEjMz1tndeHL24mobA",
  "key19": "4KoR8ykKE8y5ai7LT6HobBP65VGo3mzQWqTGTzk3gtWSE7JsPdhGsaGRPDEjdvZ33SdZpxYTipTYCvcW7WjULqL3",
  "key20": "qqqaG65jacPheNo5udVjxG5wqpwPbCqoctZPdQoE4aJwF3SkFaYrRVAgxyV6aBAXN62w6KvZAECm6Hvq6eB1Ybs",
  "key21": "4qMta18QFxasrpYA3i6F3GDmyxaL2xvRjTycsThg7eesuweU1hSG9HsNDrDEo72AzQiqzT9bT4Yq6199frp1aQEn",
  "key22": "5tjdoz5Ldb3F9ZBbFWutNxkwFZtTkLMYrSm6C8YAAsV2Hug5ciiU4rD2eu3Zsrbt4pr5EWP8byjE8dSPpjiqJwud",
  "key23": "25dVxLj4E7qKcHW8XSGF3a4WavKkdrrCmg4dKZAe15JTWY3uPrAqNxB7fA7hJfeGEsv5NLr4V5v1qnhyKLxKJDix",
  "key24": "2KECMUJ2rPzjjWL7ZsL3At2EC3nx8WxPCi4diq5ycQG31wcJbHeRQZePEwNHRHb9VH8FsKwN2CkvdFCHpCxdKAjY",
  "key25": "38nc1hFwkg9GthMhxJBUjxDBxrwY6a138xyWYPhRxP8t8MwBFaQQXjQLf133ddqM48d9Hd8vi5yGLaJHrTeGVW4o",
  "key26": "3BGEsLjMNPEuTrS7A6jaYkT4tVYgEcy3fYeR91xszkCHgumVo5aShVLCNPaAoBeYM2Uq13wn4y5wkYz9Kf7AkYxK",
  "key27": "3tUM7CmAZzGJayV6TZmeTpLvhpruZ6pegh2vdSxCVLHGKjMCPcZ2Jd5P5wtDC1KzXfRg8FJchTS7XWYfgpP1jAdW",
  "key28": "bNFRzTimX5vKWTic2zywiFgizSi38BqPpQdhoEj645aviqX4jJd2drqcshjweDBZoWJjXbRXCg5dqCDNZLHutjo",
  "key29": "5BLX8DfaevqM12NedBASMMXJabDcegKuiEMjf3RaANKhoNUuVsBDo3EYmqYPqwydx8MKCxDoSuPjbZWBQsoFRd7h",
  "key30": "2febBAic5RVEd4L6JuTBv2N94rhSQ7nQbs4nwDCEdqp3Hamo7U2cn58yBR4SjcGifNcuUxR4ZnEdAEXMZBRQtAo",
  "key31": "uxGV5uVyfU7rYddH5TKFEpYCFKip1uHWywhNvY1dAqSaRZ2k68rjw9tSRVFAKz4MdzeP8r2xzckceNoBZoH2HJS",
  "key32": "66ifDu9HgDidM4fGBbogXtECe9Wqkk35jV1coiBn8mGcVE1yMSN4vcPWAJ9icBbT1qG6nWEvt9sJ8WUvKgEjhZ23",
  "key33": "4ZmPxDNMhkfJaXQHYiEyQTKDFiC3osRM1sqMWwCNf7upf29Jthz1CeW8QkFEpHHTkrPyafGE22ZAx6fR8PefnF3p"
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
