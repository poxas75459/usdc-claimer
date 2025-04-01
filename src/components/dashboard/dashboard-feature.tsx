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
    "e49i6BbaEbRmLZoJuu3cq5Jyq7QamYRAg492as44w5hibnPczmqeuDB7beEkaNahPPnsnAtYsevgoaToNiagJ5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vL2HuknGXoKa1w2qddy7SLTH673TA1PA9a8tHBX5EFR5iUCehXGu6R1jPkqiWUiLrVpBTvfW7VTQjgAxsRSCjsk",
  "key1": "caAKAXeEEV3CfXjPoB874g3fad3MfdreAD3ucY2e8bodWfQ8iXapCqkWD24FbaVDQ9TF8DVkHHVGK7RpvemHEmZ",
  "key2": "5ANwEYXXYbv63BDWXpYKVFCjHQxq6jwRzy957JsLwNdC1nBVQfAZY3dBmtXQGrDoethBKJb8QqtD7eCArnbTqUdE",
  "key3": "53EoiQjREzm47Tphy3r4iwTX2q9rYsXw2K7m4ZDgo2g7t2i5XqZYXQwD5M65C9Gw8Y2zTNdqFUbXCB6PJX5eo5MU",
  "key4": "fHWg1s6YxQhca9CV1cC3idRMJzkfDvViTYRsLQVoWumqJF5tvfQbjVKHqcULy9QDRbiTAJpVtVcXMAAUGHHf3t2",
  "key5": "3nWTrSkWN1RyR8xRyhMf7mixK5UnYuBrUUDNHrJ9dGcpeGp38HVkEix16HN4WqYaerqdS9pYsDy2HBsUaqo5LvT1",
  "key6": "3BD9qsfeUaUbhwV9DoQuvoGWvLJgvMVwS1Epp3iZ4maBTxZEvhVys7VwLKgaAw5RSHua54grhuZ1e1LYNBytQxy4",
  "key7": "56eJbqv9Q8hzXJBzGaatMh6dcQjcGY2uVV1oV4JQCbD1coGS7ZL71FU3S7mVpVYtMpegGQMK2YLuTNYYy5ffPTZw",
  "key8": "4iadfYLdYCFJEF3TCdQcxeeCunbQiQkcmFsqwd956aoCV9srKAyyZQp24ANhW2DpyWhUxZjfkV3zJ4Jrb9FBPMUn",
  "key9": "5cyYpK9YsWa2kZPEG1As9t9ZLZw59yM2rTvZXj6QCC5vRf8ge5t39QYjSQ67BGzZGAgobUwgqtYhQHsn6USMrudk",
  "key10": "3TQSbqf2BbtYEE7QT84JkYa58tWJmZHTdGyhyDUb2BheczpFmD4nJ7rfj5MRzYK547DFT2DYJ2ufEc316kbdDKgE",
  "key11": "21zpPTYZ5cRrUQrsFjfuvy543G2HseN5p7Qj5FdEMUXUcuaknz7N3ReyDBL2GxCnvsYGNXnZ8uBZJZn3dxkHfSYk",
  "key12": "24xSGtqJAtv74DjsUxdWssJBTXCuvZ2717fnTfeWsUe5yYBYvwJZ1p7kHeoSWJw65jquHoBjDPs3dJZtBCLasBbC",
  "key13": "54PKsu7ru6HxsBjmJ6LNfYPMdPNeSZCy8HtZxCdVqsdHtuNpgwFLNm88Yd8hMtau8TSXo1s6Ck6q1g6wDaBbRb45",
  "key14": "jdvCFdGue4UhctzEyUYesh7RNCKcmzqmy4U62EkF8jiLTbmCKRmevQBU9222b6AjY6Vjre7GXMzKGZdCUb7CjXW",
  "key15": "5aYbZXuc3zyAEYCA9Dzf6vYgobfKigZYrGc7VxkQB6ReS8dNwFA7xCdMRHa6rM7Fq1oMKgMtDWh5HM9wSPTtrnpu",
  "key16": "3Lj4J69pvBHnUbwXP6PK6X3b6hx8kt9WzMAr5Wi7TsPj7RNZp5NkDnwBB9deEbMHNR3kFWatTvbC4wf1xmnjfWxe",
  "key17": "2UurBVaBK9U3E6keMtgP4LSq9T5hMS6W9otFbC37YBhdJsd6x7vjWtXpWsJZcv8PvbVzzxzMHRhJD1t4ARBBSmKZ",
  "key18": "3BeQnShZisadi1pSjDNPxn3qcX9zMffh5LxaCuj8gQptKN8U12YoyPVrAX68k7U5DRAJKJeCQCdLHVoYYSPtUn4K",
  "key19": "4naUZbH4C4W3oaDtyG5J9EbHbBDxZwT8HMjLipF39W6wkm8mqE9Eff29y4XsJC1Vn1nVw9XUXRfifkuvGtYfr4YV",
  "key20": "44cESEijdwNysx67rNYEGN8idN2NoGU8n18MgLspXpigL5DLf9AJRSDpN8mXwPhbzEJewBVtgGuGJsZ9dDFvNpFX",
  "key21": "5QUK8jgwG3ye3idudFV3QQ1ai89mau2BVKwhBaB5Gr6zWfAMENK3yXCr2YHjaUhiXb8HoTnY7R55wiBahGfX31UA",
  "key22": "cET7yjipzaGahe7nXzaLE12u7qXaKD7UZ3MfeqAJdk6aiXnCP6x41fzYhWTbWKJ7DK3ZQGsKUc7Ah3aUCPp4o69",
  "key23": "4N7Ar4acpod1b3kKgAFCFqVB7oeW1KEQimHowCp8k1FwnSpnrsAL9vQX6gxhEAw4TDdVMRDfTxyH9wWJCKxLgzHx",
  "key24": "2nNDkAKWMoEuaWoGWHJwLbXF97dqgxBKVD4zFKaJcJDkdLb9tSPnkYQZrNNTGmKEhhUF29egxXcVJrQ6NivuZLQZ",
  "key25": "CvJwXpsaqR41r1XXGqCYm87ciQCxJL3oyjn8Gsg3dkMErt53ie4drEhXE6LUT8eDS3W2yYp8UDxjR9aN6uyXr1e",
  "key26": "2iAJsVu3kagMUiADpFW8vuFqrcuaptGDCHiRt231XQngkffEgMqoqXZX1SDLJBoi8GhRGnxGEzFu8HPH2Vczst1B",
  "key27": "YYQHai2TArnjk4VrcowKQCsJJ2jGfWXFZouoa9yL934Fyaa3CFtk17guCTNQqVGL51PKWP5Cnt9o3UKtbksqoYS",
  "key28": "4LBtBVpT824hX86NbBQdesjnBdzFMHbmB1bYHamcNEKi9Ftf8XTvMQ4KGh2DWDnFT3pPX7j56bfMJJCeBEpnf9TU",
  "key29": "5kD4AweVdgmq84MV7Rz6EkbvPVhNS4igsQMhFY7zSnKKkbMJpzfSHLxoerVuRVseSGsxg56htH2TSA5E2GaaaFBb",
  "key30": "31pYUPxK8WzN83sm7s1UNkXrKGkAgCb4oS5zXJMqEuzbC3eBhDfbmx5eYh6XbtMozHCt4pRV64hKN7Yu8BVYq4uH",
  "key31": "268W9XXzzk7LJB9asfXHTis5PQdXtHLAQdzSwmkoqr5WmepWN8dRtraDgyXcD2wYECQFrLSYum9zRcpH1164Nafb",
  "key32": "3wBg1Q8vo4pYpgA53Dmj17BEJStFHRor7Xfif47kpsUeNMXMrC1Dm4KRkkoL46euqmwP46sDEWAJegZkKiQ9B1yA"
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
