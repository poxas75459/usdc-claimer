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
    "29vnsWDimT19eTBTsXRh5z1iqi5Mkf2nspgN2RhdB1EHzphV1eB3SdYEThkQge7LTZmNcGxrdc5Gq76vaQ4QSAwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xwSnSCK7P8R7VP7a4wodXwEeEUmmUpHf5bngWktinYfN5tNBSUBkVKJZAGaw5EEGi1PHYjgBzM1n92u2mm9jdUz",
  "key1": "5ddkLFCyMvZrENRKS67KsQx3aXLBDQPwuUnPsggRFVfRKuBd5oHV3PYRDShnyNPEqkrMTT5WQ7q5WqrS2hZhK8i1",
  "key2": "4bZHxDNTaZKGgVHs7S4Fn8bwzCHG3cnWzGz4PMr8voizAqMHgtmbEuyxW2XvtVzqmoynyp3x8dkVgNDJqj2jYodh",
  "key3": "4gT5ZgEe6UVNKrSe2sAUMppme4ne3pnf6LbcXgSev5ZmPn3pHjHgC3kBuzKf6zkVUV8sEx3zsK9QvxnJ3a99vrXB",
  "key4": "4s9nBhRF4k1v5iqeM8h8SwNWXNVq1TNW5ycVa2ak48f8nYN6RmS6wr2zN1nJfKwcdRjxJXeys9CPgVBTHe2wBFD5",
  "key5": "3iv5j6Hjo289S1bQir4TsZA2cothDqsKJCTWAxe7qgiyTphkhpnmPpEdc6XBiR5doND3sgZLeH6aGcW6ThQ2qVjY",
  "key6": "2QWsvfFzwGK3Xvbz6kEJQhU6HM8GYFVMywRAk3NaGMHeHxuyvLP9vrvMVBg3adftPLRRxnKP1evw7s5aMcTBF9wa",
  "key7": "3U6fNaS8vWcjmGwPpsdddhWQLUD1Vwp3QzAbuSTQahoRUqqPY92kusKiHYKxVxY5AUZsW83axyu4B7wFyWXut8op",
  "key8": "757aY6Z8sx2YmWVRMTyf4o3frbNaPnqEvs2Tf62AaSucN29HU8p4HVZgCrQj3jqUuKDoFdwxgVMhScZCfzjTMyJ",
  "key9": "4AvJ9KuL6ZFCDMjRKwfofMtFys8Q4KHkmUsjbPAe5RfSmoHpK9FohxCVd4NKXvB2D64R7vV1ahfpsXtmvWXeMJCE",
  "key10": "4Cv5QAMaLhF6wCwaH5aMp3B7manaLp7HVzntgd5PbMMP5hDoq6qkVezqxx9Trybn1YrX6YivbXULjztfjskupcqT",
  "key11": "3mgAa5XBjnZwEvkEmHroRz25GM4mZMSxwqHLAh5BynDajRb7fPZfJbAEezUtDNS2GwZaoy3jgMMCLemE7BJ4ePK7",
  "key12": "5LKTAfprRdas1ZWmov5KhzgKnYLKAiEQXsCXUmcu8tMWgT1SjaEcs5HUHDVHfggGmWyuhzZj5eE9NMUk8UQk36s9",
  "key13": "4oCmH56tyGPK4zRz3MsU5ewGyMH9H1VN148wc3dfE3bg4PME2Tya47PwyjmkDxZaQrxQauSZca1CF5crr61Da1R5",
  "key14": "2B9uhoGrnWY7YUyBktveUZk46gKxju4Qwj5VNxaUDnqQKB6ruUBPK6FoGMacaV9NKDnRjAGHdEohevyh6eMsRedA",
  "key15": "2TtejtJh9VkeFt4CUmfKcErDfJzfmJmvPF8u4FDKsxJftEt9WC9obFdBXWWEqYGmVAdoKEDQZAwLJy4F8LRbQqHG",
  "key16": "3Uo5zTvtyF9SJZnUPvCPwpoNUfEvqFHwcCgQtGZxqyCo3YWKWiMPPBYsQuPv31YXHeavC6BN1zZhygdhhViH5G6t",
  "key17": "rkuKChEpormkjXNVbQ3MxkGhBWY8GwLBWaMoCmbXmvTNhrhzzRYGvRokvemQT1Tw6DXDr6tyVTj3ys6hdjt7GLW",
  "key18": "L4oY3oV8iTqnoD8AZQeoTXZc3h4an8g2tmzL7rK4uDX1oUuY8RxqgZu39KS4td2A8QJMyWGdD5m5kwb8toSJwSk",
  "key19": "2UYVdPgHPv3Yd3kFCxzQYGwte6BNymuokZp8BVZiH9gQYh9qmDHnFF5o2W4hmkVv6sTmUqC79kLruyZWfS3MHvFZ",
  "key20": "3n4P5Vr4TstPWZegGzixm2aZkX883AKVkk8QA4bX9yi8jDx4GSeMcSPLrJRKhyao7aLQ1roHWzyEqCUeEziNfQ1y",
  "key21": "HXX2sC3VuNy3vaCfYa6iJvRNm6FoSbGeycKhdmhujGZfhgytiYqXxsGnju5BPinMojSe2LAQ5itvfhB4f8uHXgm",
  "key22": "2By1umsYnj5dDsYXmpxTjwpBGetp58sVeQsQG2vAY3TFc9WHpv33jKR9pgXgRmXHMBDhr7HkJiBL7f23jLhwyBmn",
  "key23": "5LQnPps3BQZ5p25dsiMFtSQtHfTA1hB6BXxEpPoyDriAsxyio3QZf7zqgZDX8bZgG6tpR5Y5qk5CLJN3d5omQiA2",
  "key24": "5rCRJYwBuJZMZgnbA7Sen3Tn7Q3b2wWdB8jrNzAE8fk3Rgf6NVfthESEK7iN3iQPjTmzBM2SLJ3qs1WPJH11Db8a",
  "key25": "5cj4XqwSaGWGzsAs2x35NPcE4adD2f7Ac4Chfz8Y6wLJrEePHEjSGiz4LpWC6hHFV8eEKBowb1U3tGp6Wi9uYVP2",
  "key26": "641PNkFGK46tc42GiJfo5WsceULytEBPTP5gVEyvZahEzFAoX3GByDACfaJ57C9mhyKqW19JWLLJ9PQoV64p6uvC",
  "key27": "RzFQ1HpzuBuoNAcBTJ76vCo4LXy3i8CJxLYVJvdwFKbci147yVNEUDGMAXHXyWGUiK3MafRNQZoRPTQo5Ex4XCt",
  "key28": "2cZzT2pyuPkYiMP3ba5ge75ZfJGwUVuxy597x8uRJ3Bk8E2XNVG9zcFX2y8kdd6YpDxGRTzjYhEARcFumvtrqzai",
  "key29": "EBxdaiZyeywvYL8VkgZ9LhVzHVZnfyjBP5XYW1cX2JqYPsr3vrwWtfk1oxE2aKtT8wjrPAbi7Pmqw9ci5yHgFHE",
  "key30": "5dQPLqarbzHrDjJa8Hf8F7z5hr9G343mjByzoG4U4e2xRXowDTkNK39X8MEbYx3vnDMYgQVXLvTbY5hSdesVGx1t",
  "key31": "7mXzo6cjo6aTSYZh1ZgdbvsJkhuisaH1CejWQf45pnEzMAhANbzAk86TztBdfDGHuZYyKoJRLfei8P2vBukLfpN",
  "key32": "pP7PsYUY6cs1cnt7wuGnL5pnKVgAwFHUYUfFYfd3M69v8hpzo4PzCRTqE7FL1zbFhsm13vXPpK4EwVfvrFJNw1V",
  "key33": "2KHh1gFkZ8qQjrLjCxGS9Qf1GADDwG33aPrwjsqqzQkYFqNJuGBzqZpaoYmgqw15D1dTfLDjDqTiB5fqcnuzZEWp",
  "key34": "5xjurGE1w6Ns4C8o8NfG62nazkyu2SyxStPStEj6ZWLoLdieBxwzXWkrGbUGRQ8hUBSn4N5ue9FbCpEdnkGuzH9z",
  "key35": "21UEuq2uAMfB1jF9uaHSDzpku6rh4dMGf4ujVNKNuVLBhYAuXfs8AmpG56E38ZWewso1KDayKmwSz1xR5936uwjy"
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
