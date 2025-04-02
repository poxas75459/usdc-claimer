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
    "2qCT9g6Ujs5yrX3NrXH6mbGbDgSvT9v9vvF4DjV8V9afXBcRyDnpET5Nud96ZygwEXZBhbHUdVyZdkeNGH1EgXR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DY6yZH63rS69FztfK5MsCLsFdSNVkafecwgzH9EmGzttKgCFiGHoE1Utyb9bEdfB2gG7FZ7G5icKGGh73BxXpRe",
  "key1": "d2AH4NbkzHX27XjKqFo6uPqsK28tauXSa5bf5fvyvBFLVvhMQrX4kvUBZZN6SoKbGkgSqBRKdmJKRzHfKPTsoDm",
  "key2": "5RH61H3sBLL44toWT1gfzcjrW917fiJi8xv9rCHBfPghbownTpztJy6yzaeqQu33g6FaEKD8JSgnypk16FGGzbDC",
  "key3": "4vX1VwwqTz6WTXJ8NsMMVfFkHsVSnZ9BT7w2cpF43rwFHVrM25DyUB2htBoZXyGoc9CLXAn5zDKwAoM3DY5w5MsS",
  "key4": "3VNbMhizG8pGtuATcqgNhr7VrQpkQPE43sbhNKMgDiG4wDZZ2PAkjeneCsoeUvmkS8e36FgUcv5LyXKUgj4yDBWP",
  "key5": "4ZgiyXcau7H5twPq1PjEtzsMt69ves1zydpGQQT9SuzwbFAdbD8EqbaKMgzUddxcGpcA4C1jKw4vxSonESXvfRLr",
  "key6": "3fwu5pJY2aaaK5iYBuVtcysNTaNSMMSzxQsVBHSkVdbk1YXXAZ7FXgAGrCFm2p5hDxJtQ8SMop5WCbEtZH8SADB6",
  "key7": "65pkPVSu6L5rkhzPVH7d4XyRG7ZRN74gEGt3LVkCqgSPwTq6XoTZRKanSLb1MmK3mCp3hc2ZqZHYCZT3PeqUcJnM",
  "key8": "24yZxhT6uSognFKxZyEYUXJrr9jV1KET5qVobNnb66WapUrRXCUCKrNpyvFuRKexxX8QDacBT1FGGzU4jaKP8VgZ",
  "key9": "61h322qEL62GfkdvTucttEsfg4KtKWQUKy89ff3wo1PGwKdiAEwoXSVeVrzAPCp65bGp5mmGv6BaUEoY5PzfCjuj",
  "key10": "KgpYoUQdcXEhQ47UEbZFLtFFLtkg7s4cYQChQsQcjCwuCHCmUDc4ThwCRbVbFKcwPfFvKAZstMYDn1fKG2cQ1Ds",
  "key11": "3Wm9wJojS4LXNzxfUv2XzhSRkhCJyg4aeiU9gRDU7wiTNsjAH2D3wypRP9NsSTeEWyytrGpuTQ4zEXkcV8Urmvgr",
  "key12": "5K6qKqimQyKxARKsm5iSRH27xXn4hEU7J5ZVXjsSuWYDKwNyxqS2XkUyuHHcXLyVX516PKHBRcjJ7w5QrVdLGC2u",
  "key13": "47BBVz4mhrccmhenCEL26hC24pBtKB5a4TAvhZKE5qaXZmDabtXGNmbb8KhChpvdW9FFmqHkkA8cQstoWUSsprqz",
  "key14": "3RYdcw8VEhkR3qg3eywKRUWGASnUurvJxywgBQB81vKmRCdkYscECnhfwGoW59tUsezubwNa96ME3z5r2GnanPF3",
  "key15": "3EgU7FkM1yx1o6uA5TnkpDL9HXcDWfqA1SEsbEutM654umk7z4BnYVr96efasLVYkcqvXfUg7ZdktZTopxYkn1pg",
  "key16": "27q79KkvQByJp2sTPPpg64mzw11NXhmjfoqd4sUBmD2XQoJfXJz8YzdjZGKvRDkaBdoBD9dM9CE6iTVrq8NDoawP",
  "key17": "4V8DbVpAGqB5veFqogBGzRuChjfi8hwhq3EeAUC1hH4GPzMa3PGLGSjPKtwGYWNLSEwPPjuXm4zWQ1ag1qK2Cyzc",
  "key18": "5QPj4p4xjsszFHkTvxnscUJaHHYMzRArNCcGaYfYbo99mjKfG7ujmpkvq6aEWhhEXh8x7QU6sSRUggrPfyEkAhsu",
  "key19": "5QDLj3rvXSbMxFLqrN7bMxC8t3nkHvt3zFtyByVuu66rTJnNUMDMXSJtbKdetZE1jpJGbUPwQNuq1rFMs3UAoX3Q",
  "key20": "ge8FoC7K1gh2gffoHY7vqcdwbyCtBtfNQ1AZSh1zJVu45oZq4VDL6fi9J5TTGDpMgiXiv6Pko5ZH5zKdzjPFXRc",
  "key21": "3yiLsp5he1KcoSg4i8Ltx2uWaGDGbvmGszUrJqF3iNfh7GS366HiCvPUNwunJLR1cwQj9rhFhf4bPesKttPRHEHC",
  "key22": "3Zq8cpD2oKhDBruuwJXD2mfJom1D94NRZ3Ekv6frzvJD62Ahnn1HMyuybw1qY8NUvuhDi3TDWmCPAnagFVLVHLG9",
  "key23": "5U8qcYGKYaQbvWJgBhsmdApfkzxamiUV2RWZhHseiV28ksNQQoeF15X1w5XaqvvtFc6UJ5qvP8RRDjnsPivdU6c6",
  "key24": "4o9R33tZkaGYReUUUkafZKy2i5szkxAjLcfPtMAodSABNAr1VHoXSDVJ7iQL5RrzPvh48RNmdDaBKAsE1HrDALmZ",
  "key25": "37h2nx33CsDutJQAhzGqsfUJw5SJ7B8G7nEUhZNZhbgLMuyGywKSLha87JNm3RiCh38V2QD99ZUitd7bqs55vBgj",
  "key26": "4D3jNp4KTkdWnbk4wk8k4AGnd4SBWmfjh48RYHViR8Z371gEkSk57jhm3FvPx2psiZgtk8uEUZHi63JM6AWCBgp7",
  "key27": "3tAAurxnCmUccjhXLhw7dmd4fjCHKmwU9Rz91fJkT3gPqLzn881fMKi4EKfXkW3PhE1W2JV9ynFC7bhbyFocoSa1",
  "key28": "5ZysC3567qh2eFHRsj3p1G1hPdVZvWUTb3js8Fq4UJUZ3BTcxLXjE6VvJevLWBj9XErsVaTS7Upn8bUZ4GTqCGwJ",
  "key29": "63qFxeHTAezc6n4bkJZVz6Xgxmwava2qj8tZm3Jy6je7XTfGSLiL3U82oFQfk72s3gTo7otwLXMy6sPYeiWa9b6Z"
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
