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
    "5bCi6KxWETJ5x5zz4nEd4TU4y4unuqQthsY6Lp5JQEX8r54Y9ch5gNMimDotJsxvHCmeKS42xBoKM2t3UTzcYHpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssojayHQKEfXBdE6mwngVrq1VFXavRa3i23BziDVn3XGqhqjAQwquk7PMXxdc41biU6R9ZdEvyrL9YEtpVd4yJu",
  "key1": "5RbRsLtjYoKckwnDSGoyv2526kfoNAPhTfzHz2nNBow5R9qQVqbNcBD7fZNqCfJJxUEZbXKo73NnxG2AJuYCfW7u",
  "key2": "aMzErjrZfvzr6pzNhSEiS9aZsXBB1Ls3WPLkrp9KPq8XEkc5RaPu2VY8fqGR5Gi2uFYYVzABBXCWsFhRjNDFib5",
  "key3": "P5KADWS9j9beYrk5BSiUafYBrngvNiTZEWvzrSnzkk4BfT3P8Yot2Pd9BnVS6QmJxcrdULysWY1x8xTqw8Ytgc7",
  "key4": "YykpXyeTzxJ7eMtf71NzMwKzBX1Jy9YZd5ztC9WSSy9pGUa7RwDwurtmWpdQZwUVhyv3kQ78Zu5ZzdNeqR4TrDJ",
  "key5": "5me8aq1Ygvdv12EdSkVd5BiEoa7zf6ru77TANXvW6qZgJBFrAuekVHAThrMazmKFrmt3B4EvB6vf2b8njezk34h",
  "key6": "4bukZNjnten4TS3WpL8NFc5cYqBKbKC2dm4jdHPfGXmKTyE5qsZYk2RxHQTHReC5C5xshP6GBiCLQxJj8E7PmqdA",
  "key7": "2pxAdMneKAzQLQEKSAxsrghNZ8rLjTV5PVkyf9g48u1LydABhdK41gFvG9UzH6jGnHE58X2QBmra1FRoLhDYqzsK",
  "key8": "5NuNjy5iLiyYeUg2qCpBmr1AXutzuekYdwqc1TmWEBfU5ebr9eVdArsEfZtVH5sQyii2HcbijLphSc9EFZfVF9pg",
  "key9": "5rHF5iTUcEp5GqBwZLFM1SvcyNXFXNsxwU2o8zbjCo7JL6WQPqGwnKKCZhNzHqoBRun7roUisUKRjPg7JQRngkjx",
  "key10": "59dWvXyuHtA4NvBNxTD5NQhswLEX2dAVjMpC6tgsQNMhyNZ1EfjUsfGYthAhJ1Uz3yafhhHVJsgztjqw1zpdpHzs",
  "key11": "4bn1rggcbC8Euu12r8WQEepF2HfuREV6iVcxhrKFa2XR8Qe3Qd6bDCw9Fn1Ygs67YdUJfpCidYTHAvdLmDU6AuBZ",
  "key12": "47fuTiAJqxnsxov9y2nqmS9TgBA8aBmNVaTBoFZUcseLCmnDCjaBYmY1DJ1LR7ig2TNmCv1iwqCHLeduaCt6YyHG",
  "key13": "2LV1pKsnWj5e554ZxBwqKqu6d6ACYfyvpCezit7xcPDftUA9oZtcEqvMXcSpLEdAdvTKjYiV1Z5EkRPCeLHVfW5Q",
  "key14": "3KDfAx27YpAcrEAvP16BgLxJeduV4s6gK9hSs51WPyRfkWpC4MMoTCYCXisupvFSsxsCfvRQEdUUp12dttTLMMNK",
  "key15": "2hjTEpCautcQiA1GKU1u8eQFHT9ULRYaKyqhs3mihjrMy76GvbGnT91sDwWR5aQrd7CE2DoxA2a8dUvLTTFPZQvM",
  "key16": "2pxeLMw4rxKJ13VFdvuRzBxLpatsiJkzzPjb5Qt2ZEY9ECATP8FnaPNb8AcSGHjK6VE4MdQUU7xFvLGaCiqgbSry",
  "key17": "4wKLg1Wpg7sEzYBXkBgV8xYPW2PdvRrzzvMcqauMj4woqpgZE2oU2mqT6fy165SWuBJrrYRvDGnXw6kqDE4WrH2p",
  "key18": "3nK2xg1ejkeES7E6HHwMiew4Zhv2Tr4SXYm4rm6qDQK8MqX7jfcDDtL6FogqppZKjsbKfrgH3bHLPtAhJoedMJwk",
  "key19": "8V5EorwFhvoFqfUxM3MhKJt9jBgiFcC7n2kgxfEBwgTk6etCpmHWPUQAyqrQmW7EhUwMDefXEsqNQ2Q1di2KDqC",
  "key20": "421AJzmyMBibKqmFKGk5qJQtciFGH3kNrS1BNp3QiCd42QW7Qb8m8KokjNxFyUjBSXaHceSKM62NeW26VPXaQi2f",
  "key21": "4mu7biETWbmyQ5QzXvTVf1MFMeGRJ7184omHkxHzVqZx2dkSZqyscteZzFaD44zeucHUrFMTAsRR6XM2xuQoMjAw",
  "key22": "58rBvQUWqkMn8kjPPTo3q8uDr9LAqQXn4inXp7MW15sA185QpYBRRnK4Jy9uzCnKLJ96BpBzuotG9En6y5ybQDkR",
  "key23": "4bLJ7Uv56vkci6ZDyfmbrXpgREopbQpqHge9CXMdu6nkxRbx7kA4VzLL5CXPzHsoKkdZJox2pyNYfo4bSTp6XEeG",
  "key24": "3R8rTX7AVHFmCFLwzgDeP7rEM4BfpzYBuR2NwExyPaMveQ5yHSCjDXSVgh9r5ZrjrdDwNrX9xvrDYiU1W4pf5EyJ",
  "key25": "5LrPbB79hXHaPsWAjGYmAY4MrADmP9UaPZqv9Qp5x4KP4PK7nhs4bahTytLxcuWvu6tzWB4mf3V8NSQ7bJfPMCVQ",
  "key26": "3eUZWVNz3soc1ZFtKdpQaxB4FRUpLTVeh5Rc1cRyEz6V7voDFoZibdut6mmY2Gj8wu9NcfPvymRM7tDqc4YnxynR",
  "key27": "3Jta2SDfH38CzGARdSDNZs7FGzKizcxj792A9WY7GdNkMNi8FmWGpjPSaQkp9kPHD9bUEAcfwcC3eH4PR56RDDNE",
  "key28": "4sUGgYvrLbFndysUYGsBVFRpb92XWzMZm1dmYrvTXr6tajP7E7YcKuiVZT151vtMRVHoLBn7Qa1etHM6H6FGEBMJ",
  "key29": "2jTrQnQ151ZqSP8QTAqPFxHmUav6yoZUyubSa7ViCya2jyzkFC8GGiARVYbSpJSM4PCkrH3JfqePXBGkxEnfTd8F",
  "key30": "3ijHjjtNrLSvyaRWVrsvZhU8GGfQRBuUJUG9PXqg66xJCRn6XqW85d9niY8ai71BALxso8T8wvTWZWX7bhFGdMji",
  "key31": "2trETqhtgCKg29ss4kNYzgqrpszJwDVArWfr4YUXNfEfZjgPt7XnnadNfuo76mFkqCWiRmiEwiDWifH4AFrLcMbw",
  "key32": "2pvNoot9zQzieoKvcYFvXdKmY5iV9kqfdTBLGHN1bvEGKJhySi1s6NSswEGzGNaQ4EHuaDcMMqU3Ho7fEiMcRuSy",
  "key33": "uEj4aN4PKoW3MZca9gYnuvF1xNETNCif3YuxonvhAJGUnFJ63TtSt4e9dkFH3VNdAj84aWAqfea6QXgdzcvSGxR"
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
