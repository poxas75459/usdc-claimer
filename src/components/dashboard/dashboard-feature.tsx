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
    "4GeQ1v8n2nftwJo9x3Ton5NQ6dfgk8s5ewe2VMcDGKidPMUE8JjnTRmKMD6LUtxMAELBHnBhgvxZUJ2V7qvWowaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbzu8MATgsZV5aQ23Z397343G5ASG7Qq3x2J2uRrJxfXTR7W4XswtLCUxoaGH7vSz1y2tKoribVP4tKg7Xq8ZzE",
  "key1": "3PDqFRPsmKYYpv5wuGWJ4SkXUU7wW1A2E7AkCgUcBd182GtGjVbrQke5haGQTPAnhfA1uCGRF4g4aD8FuHboY2HX",
  "key2": "mezhTTNwCC3N9dKE2ixSuRKX6kgdVfQnVqFssNaGhmHUG26BbxjKKzkb2TBngr6BnmUeoXaR5VTSq6ULcfKYU3f",
  "key3": "5mUSvX6dwWCwzTeX52yacmfPt4gdLSgLcd1XTjRFhZRkKLugg2BVuhrsyb4CK4h2YRshtxJXohm87u1M1GgpB44D",
  "key4": "2uHiefJHyQPxPbkMagk2FUdm8vXzva3Zk4v26yCHAQgAMyaUwJRZ8XD1ypnwcMGpoBU7AUuyzzMpDz9qtF5kWCbC",
  "key5": "4wLQXx38ntopTMxf2NZQPNpHaGv2fn4Cn3qDFj76fWE8wD5YGw3s3FrerFhjhsVoTJHsSQgigKX1WmpbobCosTM1",
  "key6": "5k75JKBbcwHZqkSUALmkqyVtSx4NS4ua8HKaHj9jKh7H5bLNDhicnq39mz345CzKTBJ8dmuxu8qYwmsuogtwZKsp",
  "key7": "283nbEtebRKFWxdWGUAteFc9FNjtkJnKxqMJED9NetvCLnWjRrKHBe8cqCL8msxnoY9fiwzegrzu4s2iuGmJfjpN",
  "key8": "uVpL2QZxPAhM2Xt6v5X9AdeTotr78BEjrSKucxbR8KSuYmrMCA1q6DVjNAKbX6rzBPRrqcW2qKutvqkDnNUaWiS",
  "key9": "5kDoxm67qtDvRuCAnsSnKjffEbGe1tMXXURc4oKbQn8MRXoETwEkBYEFFvkiCRca8jR3tZZAyRxRtxnfivbtNuYY",
  "key10": "5WegwjjqyvTqhhKt9GWSVSe5qVBU9zgGvGtA5B2Cy1czGMjjEo8mC9SKxKz83sKvTAF3xfj4NtZxX8jBpaDbqAAU",
  "key11": "uqt5SmcJmMPxP6qheqWcAzX3xEuXttSC9fvP6uDLx8v8ErPPUs5L2pJVXxnsSnthhzdtJ9pPLkNg8Wuu8T1QXFL",
  "key12": "4cEnS4HdX6FDsg5X22EVvAwjFSumgAcaShSZmB5Pp4hFZeK2ANcLKQsWUMdKJWy9ABsQuHDEAj6puJxtB8DQSRR8",
  "key13": "2G8dNZkJykdd5h9vjeipUhD6R3gwazuhgP8Pxh7kmCwteYE653yckdUrYeGYj7Vx1iZAGXkCZf5cvYM838zU4ACp",
  "key14": "45UTM8tX65VxmXskmnJYJsn8zvtfMbRRKoVaq6h84TseEVYfF27rrENZ5iPUNqBs1q29EFL826b7ytQUGWVJ2vrx",
  "key15": "fTvMocJ1ardXjZCd2ZyXunQuCiuFYromyBTSvhfNZrgABHwWXRdazimmdNtPdBkmqATceqULbFdSrpWRZKRuGS4",
  "key16": "J88fYMP34cx4gPvnhk3Kp5NvatGh9jMe9ceCjfdueuTfJFYJEs2bpTP6cp4cHJTySP5LLh7bt5fen8WUj29Smcc",
  "key17": "57YHsnxFm5QpurZJbLz8KZf3nh4aGfbacVjD4yhPVN4799LRnzvwwsfnbaUAngrcHU1PzdsEuW3pZ3yrxcgyFiut",
  "key18": "GvspU98fmb5smw1QnfizKXjGXJKnVfmLe5ukYZPx7bjnsQ6Kn5WHtm9nF3NJip9gYsW1bWBnABvgSWEB9JaCQpG",
  "key19": "2JZi3LAjcWhvXgrNgymXNK6CTf51ZQ7KLoYbfbrm1mKNVMUjiAx1Dk9eTxiCWKkBMhGPjy4tKpR2ubvMpz2Uo2tt",
  "key20": "2bJHCpb5UmFsdviERB6UGEaHVzSiUtYqmM22BCVuzBn64V3SRbnYnSfHGCmry4KJBnb3cJ3NakoXZ6LmQkKvKBgZ",
  "key21": "3Zk6rBNqDHXTVhUFUDEke4P6rBm6KBdUXxM6WL458DPcxWMRSteVdRXTx1W4GkqU4C86uQBrPU6dBJ6VkBR9AuqN",
  "key22": "2nuKoi1PhjP3L1UvdveG3g8bxBvaEfUjhXnsdEihvpojLi7MpW5teLh2EU5qnUD45P4oJFdUvL7Qmx4ZTvP7AnXq",
  "key23": "3JuGKyDNyawrGBtUfEs6jdiL7T9G8HUEMdHzZoeGvPeeTCiGodWMMkdid8RFUKsjpV5M4gaa7wqfucMXB1ioAA4Q",
  "key24": "4T44i3Nwcrayx6278ApAvrrhcmUvDACpc6Kawmn9DSzsZ5g3K5buNHLzPeevhddcXYBjxxU9odn2E2TgN941wq5R",
  "key25": "2tB8QCHuBE5NKhuub7mfDzGQ7T3KoEmjiS88WvGTiXLLEVK9Pe2n3X4kz3qQLVY89RvrzXFisbKcceYGYBUhAuQR",
  "key26": "2o8rNz4CRekaXiVY7FYhuAopgw9jPwhuQNQiwCdGTE179M4teVPHNGgabtQK6cYMkxoSbj1w8iY7rNNdUZ3dpXFC",
  "key27": "2FZTp7eU5LRJDHKqvLBhMb5rEUiDD1xJ81AYVJqR1WtZDLuDLmmAY1edWnso78KHbE3xCz3ymAEnMXM6art6nvtC",
  "key28": "3j2wxAy8qEzSb6ouDsMoNpdmutig3rKHNS3sEjL3QMX3N44rjabFNyMAgKXaCYULb7NPXuPtRwjwEKM9GcXLhf1M",
  "key29": "3U6g7kL6qx7j2EjrWhEPVWYep6UsRLhU5bURqYQGLw7f5nF9pWPbVzByn3SJ2fAU95Db7XuXLEyztPKPgZKMtwow",
  "key30": "51omyfDFQME8TrDWRE1PLpHdZL99Cw2QP3JFZ12rRpipNQyK8QY6DqeEYn3arP1hMPz27oVkv6mbfuM1jk6NkEVN",
  "key31": "36TeLqkc35HEy8cWkcXThEHRny1cHHiKDTZXe7z7Wcc7fFFCQM78NCX3teHpGSUGNvJHEZ7AuVsV4VmDU9MFtxhG",
  "key32": "k2y3siDGMAgXVNJS6q1NqxXUqNKjo2GRuS7WTxbXiUACcYmcEj7RFrdiwtoUa2D9h8bg7RK27ZSH15Hu7FHaNws",
  "key33": "2rPu5yeH6fdeePfksLSdoWd5vncU5xm79KFvrAprx8hsWXKc3TJ2kjjjKWwPXBQnNGnhsMujGVcK4VMpummeDJ7K",
  "key34": "2ayZDbkL1Krie4dT4Cy9UHzrPJX3HvFGdPALVRanUYyWRvzExkBueKQUvqF3YLYk2sCiUC85XmQmBk95Rev7ixJr",
  "key35": "3vFJpWpiZb37j9pfbJmCHFBgz7TY3qXag4ZvzK3wzpa1Z5yN3Kwgi6gRUJwkfzwnAv35R3DrDRVr9EX5bhfRphw3",
  "key36": "4e9huSkWVGLrvfHtobcWVqknJLUBECgytpH1Cny1psL8fTygN8QVtoMNqpku6Sf14ZpjcTrrEnvo5q9Q5PZKa4wG",
  "key37": "3dKE1tTfBvtoWmxFGepBNp9CXmYX4XLBJvVRMk7Zy3FmoCZJT6BYAd8oxeaA57istznCWK1jmk1Kn6V9JtXUeSte",
  "key38": "5tdPuj5DccLHGQm8oReyKv6RvS8kje5UVyM4QfKoZc9sJnUyxpsiRBWVq86B7f49k6AWs8Ehjc1ntfQnAHwZJDQo"
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
