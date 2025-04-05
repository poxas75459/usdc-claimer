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
    "3fDbPhvDutbwsb4p4goeMQ8fVEEmXHwPA7MRMc35nsWxzBfLXzypnSeWHJHPJJv57866Dug12Sqbkt4rfvpCrzB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yreNkwFURz6FBdpe77eMZ9mUrCyuF7bd7T3Xo67oBrr7UYmHFkEkSnXGZ96RPAuqFgPdHyKVjXBkYoHcGxWAvzV",
  "key1": "4N655pNayixcLLDzXS1tzHQgyL5ayicYBD9wSdUM7FtZhc7kmYN2E8dr92UVY9UvdrY1kAZfDq3tDXXUmjc7swtC",
  "key2": "5wBFL2ss4RNGRWukdUHhi721cAACm2WCVxv2gtpHPsyhMVMEymVW5APajQ3NytHyHFQZSutxDpCNy4NL1mNDKe2m",
  "key3": "ATm2BXbzo4c2rtNa3Bo1uV21PuPGS1aaLZnbANFvWn2o5QFrFqPTu7S3QeWSUkPJKgsLRwNU7n1qtD1DnvUk7f3",
  "key4": "2yBkABwNhtbSjsexwc63PuAxY3Mr6B4Zrc7wQtU3oZrvnTXomSsXXNpJxbFjLgmbiiSZr9mdEAzvTmyy7KfF2Zxv",
  "key5": "5ME95Utz2giNjr15JxLpZPMRFmUPk8ZW67YPUKVi7LTy9PmEj5DcxZTRX1Af8z9ai36ik64nAXx6CbgcyrjW9nhr",
  "key6": "37xKbY9iWGKbJdeGQ4AFW7VbYciZ1RCwEQxb1rMSehjixEEwTUXrzjKt2Az9TLBcGV7sRCpRKRUPFwuVtwNbd9ru",
  "key7": "62D8tQ3t2bZdp9XJw3TK6Hz6HnsZxn9eQ3GBZ6UsEQwT2BEYJuTremrJS82TR5hUusXACJn7gY93vgxPUZ28e74D",
  "key8": "pB7L8ETKcWMkpqujVUShXN5FZXkR1zPz1h5MHkyMcTYxvtGJyM34MoaFZPXFuYEeUDcho8kJFAyLWSNZjoSPhYE",
  "key9": "49sLcvmGG4sdC692Wz4ZYWf1K9tWzukuXqWurietif8tXPkbvnYqzUWwnFKyJBi8ncrfP6HKGHGVuEKLFautJBdr",
  "key10": "ZP2prfZQRsA13P3dZuuF3etKu7r6eBE3KAYh454VYoNCTGNM3ZnNnzUSQKkg8dvjTCTF3wdRGR7RtsJbkk11qW3",
  "key11": "5gjgv3VwqgVNzpHzfKmy7rTuDMWdhDzzDtk9JY4XZrERN6JDPDkfKmLvF4pBcnN97eqGCRARkxq8PBQ68WvtuxZD",
  "key12": "5vfogVM33NRHVZ4UqNC8JiTFZcr9fGWVye11hSJtMbgXDHC83HXQTTjhvLjE1aCJg2KgoZZ6bXn6qVRApBBik83p",
  "key13": "2iqQqtPTHbShvpVuSSop5euPBZVjHJUY7dhgPrTJkbdtkZSS9CReV7Zbu2jogUQMW13LEsdqVgFnrRZvcY2voQTH",
  "key14": "ceWAt1TJBz4F2299zRyaTTvkgWQDDtARFMcbi3tM6MK2oe3eYmtKwsE5pFkkPMfYbDkksvUj5hZqoSnpy8qMVu6",
  "key15": "4BhcMYTo85pH4D3FSMZfrCtbXsCZVQdjUB1SXbu7gQzHrz9c61HDjjWCjVBirKWHVYL2jHkDRMBsCAczoVDoLn3N",
  "key16": "3cpkiWGBxWnYhxqVPHyVdngXapX5iGmkxF5vPZaL8W3tUGDrwhNzqfduU1qkupZBatc4Vua7PAmffHBi4YT8nny7",
  "key17": "4xnmot9WU1dxKHf5Ny1MoVZDwiLVYt746fLz9ULptHrY2UU8PaQroPWo4Wpopy8W3oaGTX5NwvcXNd3QidRuW4rp",
  "key18": "4BBdKyWcYXtK1EYBj7tHvJZrjtwuStWiEF7k2nZHD61d4zg1UoRwDT7cX8VNKf3vuc1Xc3NTYmubCee2DsMAjSsL",
  "key19": "552uA6Esq2eCjADbCp6qfaNHZfPtKaWUBQfimvusDF3DB7vA2FSKxqBQMW8mEQhVyBhpA5fJ9NnBVknF3NyNsjtk",
  "key20": "67fA9Eko9UNuS8NN8zrx8JLagxspKCwkp5RYgDfziP8D3UQNYmRvPu8AmLySodWZMMtkRrsbV5HxJfFkVemiJHsT",
  "key21": "3vhbuiM3127joWPZdtUdXn8AKFPo1w1fpwrsMikfvEjFm21at8jcg7qSUSwiuK8K4PXG8o9XE7xXNg4KSHBRAkTa",
  "key22": "KDuUhDaK8B7GNukgrUYv5kTf43PpkF9LBtcEAZnAkjKHvnK86a3sRKkj2RNkW6dKrMHoKhqthLihuBZSAF3N5gz",
  "key23": "2qj3hnDv5My4zrTDfn1AowAK6N4fSN5TqkSvHhe6jRmNo443f4uCLnqj44rYfBovwLt7we3mDh74EJhnbj9Z27zA",
  "key24": "5XyrTP4GwaEA3f3x72C2RMPQRPqHGH6DscaBgceuNshGzm3DHYzbUayPbbFjshpiwtYw8bSv77UGAe9hQ5wJ37KC",
  "key25": "3kWybAKhvm1q1XZ9XLjq96ftPFt6fJoJgHiCxicDCGzqrH6oi5XJHEHhWntct5ySBWWstANPfecLAQwxZzix2eFH",
  "key26": "55rtnXt7TTgLoEMFgw7r4vc46L4o8dXMDhJdPGN29WecKRdSe8dhdXCG3zBdvF3RHPedmjaBUjT3kv2CsvMT6jkf",
  "key27": "3SuuG7UYtyHe1jqyGwHr2UQtXZZzgWEUNs8P9SjuwPj2QzNKaCGU4ELVDQaJXX9XNueT28BxEaSvzNLedAhDy7ZQ",
  "key28": "26p3CQbUcy9aLZdE6srUuo84zTwFhuivXQWCSMNyyoNtu5iLW6RreY8mT38z9Sg9GN4r6LAnbB1wpXDRfA33Y2vp",
  "key29": "461vobYf1Uy9cqvVxbs5UcEFfAZuGcHoKX8NTAHVW5CWk75pZt78Y6Yy7YzHggmUEaxdxUHgV9QhRPrRkC3pnBgQ",
  "key30": "5EXGr8Fk3JM7UijmVLG2PwmHXM89GPzJjQSpLhhzHaodBhXfBTpAQBvYbWzdz75vTMSppqzePgpmv6J4KUA8J88D",
  "key31": "2tThU3kwjJkAwNgGK6HZWq8XoRBY4kR9cPazRhvZ6MNk3kb5NPfwoFH8oV4c5uYS6cVQy2ywGiiqYyGUsM4MTjCe",
  "key32": "5pHiEUsGPd8YVAVTgTrLKZt36rnCrpGad7DvQeHEeN4THsCZGps5MtawU4uPFDAuDgLaNHdEZ9FmjBmuBC6Uipjj",
  "key33": "4NWhHQmZojDHVz4qAj1VeiCQE6PFBZwTXxydeFrRosJzfeC5a4ofZWGsGtdKYhHz4RnucnSSf363sLdpMWUz7TN1",
  "key34": "23grqywjpKPposi7ZusxMYjbvEr52r8cTKfjc1dWmSo2S6n7cQvChir4rYDJsf8GiqxNnTJsiNn76DMktmaN7w3f",
  "key35": "5tCst4DNG8Kg4M4pzBfk9caSYAjWWYR2ppB1GMnEmrhobn62jh7WenRCYjQVZyxa3FcvCfecUPPL3k9Qz59BzXis",
  "key36": "2cdx4EkmnStdBZYoiZiiLAa6vkod6RuFrogtCHhQwLr1ZrqGCjGuUp11kKpCkSWBopgH3Fmj4uMY7BYTUQq5wipk"
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
