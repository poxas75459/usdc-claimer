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
    "2KuKQPY74hAyGrbrja28dZkX1FRN6squvQPFH8RG1MGqhLbF8nw3ub8LMbWhp5eejJDgTTFWuRm5ScaDQzw4ayEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPpbDN4un2zK8MV5nsXTmoh7zn8FXSf42ei6X9KgcuRgEJ7g8FguVGXNhL3rRT9UZmYaaHqJyrE8QVkPCnegCCR",
  "key1": "2PJXZEweKTTXdWMHQLcSS7VYvfmqwqpfErJJ4dsE5WkThxuGd3EMKt12buUAtxVRcPUu1EgyVKvJHXYYPmshZKEQ",
  "key2": "UpvmzzCE83VXuiZHrj65Cj3fpo6NwrNWpyyuvAmPWuqdx9VXYnjaEEwQpZo5v3f8Y651vetLmqmSoiiF7UVERAQ",
  "key3": "64TqQFa8vHuXuVDEi52PXrPnmAH1LSiVV6xMyff6FGmqRKrvat9bhdQSEuN5ctQaiVySt4Coq6gCKksTj9gnvH2D",
  "key4": "2bQZEvdcwbFkBfPqq2GyBz8a7yqywxboaEpuyo8W7PYLs1yrqWJCp7yp1rUSiJDbtcpGv3JpGmNhvH5P8BZnREn3",
  "key5": "3ZJkfBhQJThTz5YnHFQiKy5edjTicjju813H2PYL83st3ytLVfyoztuRjBeDyuALXrTSYh8DeaEbWt9ZBtHsom6n",
  "key6": "21RNFjDG2EVUicMYHqu5nmNaMgc7BwTPKeemQfzb6ii59DKoAtYCwBnSMLmbX9ZReGxsKboEtahMUhUJxLMgdv8K",
  "key7": "2xzkveic9ZBgwhupzGMZ4Y2LSDpxbkUVoTeWeddphDuNJHup1EQWpFqm2XKea7c8eSajUjRdzdwhrxjjEyMrQyQ3",
  "key8": "MVtaYUX21xFuWZGnN5TVZhSCg4DN7Wkv73pWuqFWFen8QKbYrxZQE2Hetz3hYBkxX1eDHYVSAJi1nC8xJrSwcBN",
  "key9": "5p3XxBRV77zKvWzs4adK5TdUPkv3Jzb89xAbb1vxTBrEYpgMsyNoeDR54qumdSmJCa1Z46TN66DgTa1fYEbigEwh",
  "key10": "4oTbLsNwiuD2VJHkHdKBZPasrQzBcddt5YCf9PbnoGco8je6LT815DV6mztA4LPs73WbuUkhGEZcL4DHpJ5SoZtd",
  "key11": "3jUkpsw9bxosw7gWtQkQ5yPZAfQCH6BTyqkWRHjSw6h2GQgTETArWTk8pWfbL2RLRHNzpyosDqAX9YQSHG2njMB1",
  "key12": "wzt1sHBNTYCzpAcDdGMUvtLSUk4wnAs9yXpyAuEFhxmSEsycALungRtd3ubmp2mheKTemrvbBioHbxoBHxrXnwC",
  "key13": "2YUATeVYduJFPqHNRuzaMa8NUQTF7XSyptyQhm6ewNnZHVGoxUerkMWK62CCm7x3rkUqLY3WE56uRfhWUzpcueMm",
  "key14": "3cnfJh8JUS7tw3zSNeJ8oKHNp8XRbf5cStw2j4Us9AV4NxUAfPPGJn7nxTt4XtSKyVE4tM9cWu1HpU84ExkDrmJk",
  "key15": "3nhdYre9trN8Z2ixLD2fz5z9Zyc8DoihqdjQxKz8nXCq4t1euqxv8nrsax1oCgmiKKj2gP2mX4bvE6szXhFUszJp",
  "key16": "3CJsNhowX1pNse9vry5M7E5gi1VqNUfjHk3FovKpU7An9iRn4g7f2NVcQ6Bt3V2xadGWu4kQ5o7GcRgyqoDjca2W",
  "key17": "2vDBdiA9KyySaJrQQeZishPJDz3yUhzkxS7CXfVyUcEd9rQZKU4vwwqS8MtSCrTbDVcnjJyHenAjinA8PDNUfQyK",
  "key18": "4pnRp5WeiWMVGgqFW6fHiTwrxVLXm8zGGmQ5y8FaUPi3sYcjdkQFkurRhdapPqr7LmbLGTUp9Jy8M3Lmq6esDr75",
  "key19": "gEjKCk86e7GEuVbwSSnZJ7Ep3CtLX145CoyZBYZmEm5E6cYn1aBxxMGKESRwwBmoy5WaJ5Hf66AfLDWdFWMsuLk",
  "key20": "2wvc2N4XqoX6PFvkECheFGdoDsF6Raw8ZKSf5DG4KKkw5isAPPkHXJ5R5mRKYc1UxQaBhdgh1BX4roMN4ZPZpTZ3",
  "key21": "2zCwnuVtJK2SDztjd5m9KWJC8QaJvYiqy89sxio8cVrNZxDUWH4Gm8gEjN4qvAMpYi5x9rUHTF64F49sEiqjBYfu",
  "key22": "xsyGu42tyb2C1vHvE18sNTwvi6e965bxvG4PivFgJakD5T8CX6jUSMp7TBTHGijZiCxLt8ZEsfeUhwwXeABs9ag",
  "key23": "4dBZF6rpHAwt1i7moSJqeihYbmZMUZ6DDrKCp7BkfDSmScB2P6uA9szz3fhxWMGsHo8v5oaPbMCvh4LTk1RHXmcE",
  "key24": "PJdwnV6B7dSeGj7XohNjhdM4soBCPTK1L88Y4R6jVoZsLVze57gYDP1Adg4AKAEy6pHvVhHLYXHHNpywtrAkFxK",
  "key25": "5QxJrEtQeUZqAFjRf7T1NsMirDGBqy3pCLfDekb7PMMPRRhcLBNuGqzKE2n2CkULRgGvDyGX5mHwVuit4y4yAsuK",
  "key26": "4QmtmdVEqhMxpU9ssgTSYi9nLgmL5DrXpXTTxo8toMg1P3RkVqfLx1PfWiYSne44Qz8DeNYeL9uU8GSJXfPzLQdL",
  "key27": "KFmkhfhkLtWvWQqbVKzLq8EQug4LvXcf8cy5QkS2PZ6G8dpwMTtGU34P3cdwbwZMxQ7QxgkLCqRBcHY6uawLF61",
  "key28": "3YGrFwDwnRfAPCdKu9WoDfQAgUZdRFYXYZQWp4Av25ew589oUSxKjgfzyGz6V92mrqzPH9eGuo3JMMGC981FZQk",
  "key29": "4DDXBUnTAGKSNacbop2Qu6KXr4ecEHqu4A9WtWveSXuwFRyJ3DFXtk24bMq5x24T7iM41PwNJEfnGEnCzVTf496k",
  "key30": "5vXA4iXpPvwStL8TtjTzVKD3q2HtvxMUCtvdysMbC87F5mQn78QUY3wNk7f32FqYSMynjSuZtn99AvECJxGTe3kR",
  "key31": "46TyTNxYcDyc46B6NVUR13iytwwnEvetVhXgkiPCQ9h6oYvWJ1SiXHPkz5hJpDC3qbTwPzCfbRHxLPg6i73Xq9g6",
  "key32": "5Lb62kkWLR2soQHuryCj5f4gFuRw5epnrTVPt69iKrq8st4PMexBVs37tq8J1cFUWJdE385gscchJV2aYhRvJtKa",
  "key33": "FC9pN39iCCB9NijckWR9CFoPrz3R7puoghFrzf1ZYkNxZX1x4DU8nQpwgneRCp9ZvLkyc2NKJ4u5fSqUd97w7aP",
  "key34": "5DFiPhVbz3EHsuKpkUxdpX5MK7Bny9myV8Hi49bjzxKkPk7Fc7nh8wZwrkteWsc5uYyMsVhj4PiCwKXiTBQN7Ag1",
  "key35": "5yRMGQMKDZoJMLHVttXZq1vznoAuAGtHtH76KFyLzCvhNk2MXfYryBr21FdaGeusbbSbCXtJyVBNtEVTdkwDYkLQ",
  "key36": "2RTjqZ9aXgX2zYYFTCVDCpjkfw5au2esQ51EYAELRk5ztmrEe6hUUx2XGSHifNpLFbE6fq3uuWEHhsperSQ1KBWj",
  "key37": "4YA6LZfcq85x5LJmJa7nYoqaHFse4cBgQQn1Zj1TAneZy99w53zihm2fHeZhUA4vuGWESW7zW5sgCJxVQwbaC4N7",
  "key38": "3EEDBdSCWmUfNcWD8ASZdDAwPwt3BT9PgU8fZtR1GDr2T4kpXL8ZwjY7w4LttgEsN6sN7KvH6qViK3jginGMqjsF",
  "key39": "3cKPgLYzoDu8T2gjXWUKCggFQwZ5LssDanCUWo9BEdZRaqK2BEE4PKQ3iquKxHeD59cUUgsTUQREHj3TWp6XjGxe",
  "key40": "2RK9fURCvQkt1YA3mZfeDt8idEuc782owypMyT7bAUoS8G4BiLBX5t7nh5Te4GsdvMB3vJEnnxbqVPPBpXJhg4ym",
  "key41": "5zCGZQtMmbnLd1jC5ZxQKV3duANT3pUSFxcLEK9dTRmna9u6AJbJZcvSXuJKB6cPwrpV1aKxgCzErxc725CNgsJo",
  "key42": "3YWgxz9g4k7up22wNz8yk9fHXy68rpifZpCMnyGHa7RSnmero14medcr8gAnuoT69FpG46jBEVRU3d7By4RkzsV2"
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
