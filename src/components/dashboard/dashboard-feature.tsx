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
    "34N6jhKLD71RyHp6cnjDaw8yJSJPQTPpG2A9rk52sd8pD6PurqJ6tr5AhhcR7hBwTaxjMZ2bgcMKpx2URLTCazUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnzrL8hqRBMbaJschYnWqRcpAWhvAy5C3pKGumE2D749reMfpUBJN9QHA4Hp1Lge5MS4u8jZ4Ypu7ot9MPWPT51",
  "key1": "4UMQvXzsGynNSaoBcpXs7SKmmtQindpYFih63cMqLLfqVFifyEUCZRMcaHF9YYGJVfYgs8NgFcsoeMdptMyfZTVc",
  "key2": "4dzpezgNBzdAUS7n5ZihAxvS8CtrYuuBgZJ6LhXttudgvcHoUtBrk8BNbp1vxVnk9LzgQTLrhCo3uQmMWXZivkwP",
  "key3": "3BVt6vDvjseQzr1ZdTwkbzj4eNcJeN66oBWx4dcamzNaLgK2kwjyhbsrK4BTfkpnuv7mDrdbDzizyycfH5dmLEk7",
  "key4": "2LywD6K5ZDHMgmRmnXNbbegufpaiqku8A1tjuWMmgh6JJ4rwNqjQMA66jhEcyFqy9wdiMMsJ7qjXfCoAeAqfNzHF",
  "key5": "2uPxCcijCjyWRVbL3m2KmbacehGYyz4hAZPn8SzX6vvjAgc1cn6r63FGnRqGgqGUAmmUb9Upm6c8RBT4TGiqjnCD",
  "key6": "4TWTQxSPP5uepYPLJHcVEXqH1euHNatSeiSpd9zrEn6LSXEDvAKs2Vnrw5tKZXJjYPcG8EuYBFnMPk5VLsA5FcTB",
  "key7": "Mm5nXeeZEaBXoH7dGZ8ZRcpuVKDLZWhMiignwoFFZ4bDAZUFQorXAw2hAmUiykV1ARsnJRtMN6KvF9UiuUPpx9u",
  "key8": "4no1BHmWMkh4eC2t3Lv5eThv4PiotmDbEdiVsc36LWfpkXb53U5rFW8ez3wT9K8DN7743bAKFvfdZzuod4AF8YHs",
  "key9": "3ontLcpyXrXEPhJC4JWCBreZEuYYMq4NF7PAdZAekaPLMLRJSM2HA9rBqx4rwniGbP8xisnDtyiJ3hosf6yJioek",
  "key10": "2uVwyFDkzDm9jkZfHNm3xKxXJKKdjkqA7DuMDUXaM1PwqKWvFMZc71A4LgNo9PUdoESnvFa3z2giW5kMb4aqgM55",
  "key11": "4XTkjmJpPJiZufBmSwDADTKJFWi9Qh4NC9LFEcCM6XSyPvbdXm3Z3QuPCSzSWfbqJedXWDozs19Fe5xKtv5WQ2WF",
  "key12": "2eK4NCAxLBLLwuRgZjQJjiuDiGxmZMJGRuBYpwkSyeXq4PAV1rp3kQcq3rYtkAUXd7w9SDfXdNvsSanYdDHw3oR1",
  "key13": "65P6NigaMgVwjeo48CJNPmTbtokrA9KxxLyWSqQ3dbPaA5iwVeWreZRcXdyW5EubiN3NhwvidMzfzgpZYKzen4JU",
  "key14": "3E15jz96ds2CF1Qj6jpGGpfxnyLWrZC5WwmpmWVNMNTZ3YPKwb48hBD37YuXtNLTV2ceQXjcXDoUc5e2PH2X45vE",
  "key15": "2gpbK5iYvT3qXPu7jWJwBcSEw5SRrzg6ZmGdvbms9pcq7YpH1zixQt8EvBmTmh3AVCJHcskaZDd59544BUHLs1BV",
  "key16": "3vV4FHtUjhCwqg8wP8vn6DNrnBAMTkYcwEfGRwf5p6eAQRwGSLecMwrjk49wCxcTWEcbjgF5xyCoaUGBxuBPPam3",
  "key17": "oPUKZgsoDj9fwxq8JGwb6rzCFmnyYKpCnyL1nd54w5NEjBYH51iQXDSNXWfhsvHUkYuk3wwExWaQ4QZuzRJuydi",
  "key18": "52tcHiuDu53CNGCg4S9uYF4uCFLPrvP5cM3NfzyhMrY88MeCKdkDBjNdGzsqgwxPUTs9uBDXLm5EtyCywfqyuQQB",
  "key19": "yzQQBrhFNwSuQW6omm37sfvLzrGPPvZLFteoVyqiDeBYMHmhQvHgtxBEh6sE4W8EpkciFyYf3GC2hfAJrxetDaZ",
  "key20": "2ynuG3eHPhFF1HuN3XX4k4xJtYu9j7DdGUaaso6qjxingnDEjbRYYYoYxB9q6WoTgcsd8DXTZWaVLba7czQhyFTw",
  "key21": "2rWN9QAAEHTWZ4ctSgeaFdYKeWj2Pzm5eJBSXuz1EUZaHS93tSgXmpG5ne5zyoX26uiRYZYa9xfSbk3fUkzk8jaa",
  "key22": "5VkmEhmDj1otuxJPJVk6mHv7Xt9Qv2W9FBgckDj9fHb9c9T24UiU4qcryUTZV8ueo6U67Qz4bG96kA8usNmsZugL",
  "key23": "41rtCt48ck6NS7URhQ848UZhKddLaHH3fLrWNuSTCxb4rTLJgvtaK2ewyUtC94YxDkjt8oHwG8t9wJkVDt5M3mK6",
  "key24": "BhespfiCKPrSbnNJQDimSkY9Y2t2AXp8BMjF7hjCnV5y58oEfeYezidRcfWE9aFZ29DhfwhB7LiTjmGAUSr2iqf",
  "key25": "2QNpSapm2nLXNYWeCNrXvjR7NhtSD2zW5zBV88peaDitrJpTQnnbDR539azzCikCrPVqFJDSA3SBvRzf5WFaCUJD",
  "key26": "hHd5wz6aHajUzWbhw5FDAb16vKxohwX8qZ4TrC5eNUKz3uMp5BNchBSUkMFsd54bGmpC7UbBNMpv8m8A44fejMt",
  "key27": "3PRKcCyTVt6GdhubTWZRQmbqBUrjhdhCF39qKnnSGuLKm5xoWw1qtUqcFtUeo4UU6NiwicyCcQGw74FHKsmAGZjX",
  "key28": "nNfTHbg1qUGhrw8TRPiDEAxRrUAmT2jmpYcwDcSqCNGWU5hLXQZNdZQycQh39cQRCiZDdANDFficbyX8JTvfMQf",
  "key29": "2A8gvCtyy3mxQmAiAf8VHcRKoQqxTNAVuuyf8qvnktc3pnjq62TDFdXYe99tgRN7tKMcBhzpz32RUAE9P5Z9RjNV",
  "key30": "2uk9aQ1eR6J44Ujfpud1dQCepLcJEShBcZjCi9ZX7ah5ApnYKVGpvKuU9rkSAYdLAnCAg9bA9TBmJsPji68wXWq4",
  "key31": "4FsTB5YN4zozZPWgfMcxHTf4VHsLw2TQsMCsfmtVFtbqRuvPjnhEjqvqf5fjGQQS4rFU3FFjg1XvvKgjV3XUmiex",
  "key32": "2Qy4vspZSVQmMCyWdBbMQ52rbxar5ciWK7XFdS3gEM8f9ftaYwLQapL6TfiH49zPjJjViBru9QDJFnLXgkc7zap3",
  "key33": "64HiGkY538RQzqUHpdcGF9KkFbaQMbMu2ogZ9GGAe2FEY45m3sUBQYMecQ9WPXQjMYTfmrtoVFh5Y6vM1tFez54R",
  "key34": "4c6Hc63LTme9c73rf5onfY5rMfk3NuiQ63ovMoRvvoNcXTrSTQZAYkfZqwdqp2PPumPUMhNxfbEYf8Hex5PNTaYu",
  "key35": "XnNgX85h5xSYLNbw4R5adYWXDtCfgt977YMrjMBFU54n1t6zQT9aZFn9e9RAsLetNs7UraoUU7dsU6gEH5ZHk6S",
  "key36": "4TEczmtRLPbCTtLSoqe5qo3qcb6B75DBTBcyT3YyDhzsKX9QRxEzXNp9YXmbRUdYrxrN8Cmb9dUtaxYv7xCm8m6u",
  "key37": "NVmvbVHbTQnk4peqQywqX5khBq9DjbteFFfijEojACtdrsMuYCUodMowARdnwDMwtsXV9iK7w67XZyohVNDi1Zg",
  "key38": "DDk95i9z8RCb9tQMLE22vpQgC8xm5KWCkrZmQUz53WvvYwZN1Bem7udeVANsuUfUrhHdP1Mwvz94A64TpRws9fd",
  "key39": "5mGFa4r5rScnxQrSGc3ER4VLe49LJBSmVnAkmcdHPE5qU8RRG8jv4GADko7kDFwQsPEUB9A4Pn24bVbwi9mt9CM4",
  "key40": "ZHaB8rHJtnVqYFjSw43Co5UQRKusL3LXQVeWyyDUjPUUHQhPrywTKBqiPySr6QqxmwXPLC61Au5qsFmiuHzbUiG",
  "key41": "3dVrjWnu6eiy7a3LPSmm7K8mnXkWzHAJiBJTLfNUcQHsogcod9EmTFt2Pd4EezsH2QVAqMD7v5tGcSPHuosFtYw5"
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
