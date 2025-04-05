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
    "5NKBaNqgAVSmYTm2DSdwtZMtcnqpC7K2JB6MTS54jexaD6yPZeCxUvjnfgfVJCySif3YPGRnxW1qYQvqvea8pqRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZtauQFmjQYJvCbsLM7aQRTwokiw8LtDVXyKJPwFzCvAz6yPCNyNw31fGkkyhhWwCZsk2uydRty4XxLZWoiCWkQ",
  "key1": "jX579i3f9Q48Ab7K3VFewi6aPdQmjCq343ELJZeG9uq8QqEoNua75wcbjLYZUb5HkkmosUeESBvqqb2MGwrWVU1",
  "key2": "4CrkPKGnsE5SYVeAu37gCMGb4ZNpb7yGfs8DKQYrJqiTZAEbTt3Wf3MUqu8KBEGj6ha2Bqk5wqFNAXwh46BMDo5J",
  "key3": "3NtaGT1GLbA1mWpP4bJEpq9qkPji5biAW6GfG9go7Ym3Sfcc6oT9QQBNXyk93rFgNkksyu5C5fVjUrWLKtSmKZoc",
  "key4": "2XQetmBmaS5UhGzKrnyZnuYwyqSxgUdapEey3v1WizXNpUDmpXjJSkV7dtcDM12r5zZyQFigKoLPm1yFK55kGT6C",
  "key5": "523b4JKMrncBJZFZ31aZdT9xBvf24d3KUeU5NZZfv3ECPyHp3PMW5bgTHUrLrxFzrXSk5fP8jdZRyyKGLZGJSUZc",
  "key6": "5vLC7MAdLsKfrqRiWsZbbYrfESrVMWm14hTZN2QvtWRPJtv8W4c27oabhLW8pKsbgBDsEAE76NzfZFG1vxkxMbvx",
  "key7": "55Zqwv6nvuD1z8CQL73taMNd5SeJV7ExwPtGTrUEvHrWcDC5idHB7xFKrVydUNDuKuQhbfe279uSeuZPbVgCLc7f",
  "key8": "2iq67Jwnb4mFwtBwPAAJXgYdF3tjkQdKMhrf2jxyLZ6FP5oucx9D1qPAxEv4Dr8G3rgq3UiMvx5oU8upF7ByADPf",
  "key9": "3QcCSkjf5jSsUUFvXoaK8eGpxVyCodFgWvi7NgaajYLWVeYLGnsSiw8fsAxGfCkoETgFQgLWLNcu9LxvNTrD7X9q",
  "key10": "3i67mhJ5cunV1yjJpacUZXs8KxAHgfaB1pNdDekwCG3dDq2kAjSCDdCo8D6hLF1NTfcmUi4pDJysogPxo2pBNm3t",
  "key11": "24Ak4w6WnSDC2UwpkCvEKmaTSRN6S87QZjHs1v1wzk6UNpc8KjreomXuW7BkzBXWJC9W5CmCfye8EyarsNYxLMSs",
  "key12": "5LEu36nfZfR9YGtMoJVRax9KgqJY8o6NMoALLrmFGEfm7fvhTK1jJgYeAHiNJ7R5A9MBjkA55fqMguH9x7Fd9YFU",
  "key13": "yF7YwGHoMd62FFEX5EpmPWceABTpsNzKUGMwQZEJHFABenVyJJ2whxB1UvVtBqWWrBbJtpAoSDXFBV7WsUdxLD6",
  "key14": "p78AZd4LEZzKJ36XjmubhaAD3SxfSgn6yEcRzs7bWEqqMoutQY3e6gcxxJZCksoLoqFaQaUSYZscGqrDmXdJsmA",
  "key15": "5uKp3gxmRA1yD3D8vFJxDMACymGGZeU2tbasFEDuqZNSe17kiuJXvGA1bUZ6679ipBjTFwZHtQ6FZDtNoVcYMtZ2",
  "key16": "5hvjEVK5QYyKML5CJd9XiWExFrCvhyoU4qkktud9HoiH1LjE39pGQQpcH5K8im8oGWbLsEqgvqiKrmLgAtB7SDEb",
  "key17": "G4cvoynd3He98LEHV5CqR7xiVuRw4ai99GHdCMnAwV4eytj8UHP4sfVwqSwEysQ64JUVQVkdkEnkt33b6Abvfz4",
  "key18": "443UGurhZ1639HosnLgUgLq42zoJs3zN6QLXB19vbsub3iVZLFvaHHfY6LtmtcM3ufUNABSVXrE24E3WZdziLtYk",
  "key19": "2psmcP4JUwZCTXGtf4Wk6D2H1oFBF9ddkULRPyT2yf9dRK8jxk5fbduEfmSZGWmZz6s2UuhUBA8ufRXLsUBXtRwK",
  "key20": "3Anw35AkiUhE2M8EEBFK3ZMAvHZy9VmzLPXUxA8nJ8zcaAcwerpYNt54bM13LumGhPaJGQij7sUasSw6yXNSCkGP",
  "key21": "2DxeVs99TPp4zzX18izPUvq9uWxxT2fuuo64qmCEsudSk4VrZ7oyZTMJM3dV5HSCmHq3XKtCrVkjgDZGxTEvFGB4",
  "key22": "VT6LaWRZ7YybzGhkFPTbajyRDkhXQcbJgZHUJCTDy7YCaGyCur6Tb8JHtuBEtW47Dugh8Uk3CZjT7yPWqcyNdHs",
  "key23": "2xjewy3LMbd5XhCopL2Ysr4JicX7VQSTDyjAZYs3YULMP38LacNy8dBrPijPg2oxSwpYDu5SECX1tEer3yHtFz1U",
  "key24": "4M8mHyztz3RXgz4XjaZ8onSspMJiNLh4oVVBXzDWFwkfK4ZEHMfeditJ6y3xDfYrA88sDngKzrAREnEXNrabNMmm",
  "key25": "5soVcTNidde1PsLhbahSKByfeotHCp7LwR2m1WkVqmkbik2J1Wk5HYjMQ29xwJqhLDpibyjeDikNLUQDw9TMxCHg",
  "key26": "51YVRjhF9sfkuNkQK8S3eiAqDD9QdCgbHEcNMLKPLohEyoGvdGV9wubB1CE3SWxrY9zM1J7msq68Qc1P7gbuJf84",
  "key27": "2DkTxA5AySLw22unnPLAmeppN8BHhTTs1SX6Vngp3AGZAmfGfp8Z3EMigdnfM6M4UUAwjUXE7r3f1dDzjKMt6oyf",
  "key28": "5KRJuumjMFvC5DG9VsZyMqEDUwRvzjAffAUhiYKcmuiqaYdkLtUyo7HSst9LmFZaVzeYS9xBj6HGnHBb1ggNqTfh",
  "key29": "5XcXP3w5bm9hcLSNDZgcJieFTsRHMDB1kHdypc4sM2hQdt5rNji4eoGEJ4DAZdyEteromnNKHCkUqrGMNT5kJ9ZJ",
  "key30": "2i9hV3Ws9vjxCVDbm155vyWEbZMUHqfgqVuJE4zP3cruw9Jcpbe7ofKhNtWHoeNCT2a1vS2ajgA1aqgQQSLPZYAL",
  "key31": "4K5P2KxvrTYY6S3ArMiLZy4SuVBHBDeqDyxyJEEbrt5Mqm2efbR4SvTPg9uEFUktXUzthvkFioJZc78rbcwKZ6qZ",
  "key32": "4W1M8uNsjSLAe1qB8mLU91CgQHteYfMq2s92pLM2vZfwXz1zAhPDruJBvoDLckWyDqCp5VpcgzMyczRtczcjPSps",
  "key33": "4Fqogn8KJarJSuLwe8tQjom6gZKfUkMJgpRzhaiuXTec3MqrQxnW3sWumWbewTuqi6HAWMKU75m9MEmUfEx6etSC"
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
