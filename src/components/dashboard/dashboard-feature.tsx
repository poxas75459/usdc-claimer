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
    "4fAYhG9bvDyiRPdVTcikYpv8KU4BQ2jRbcmLH91H33n3gTDa4id91s1iwRa7ohR7ggH7Kq7VD2LPaLwjMzxiFKWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXMmf6SNFkkUzHnuV7WyyweKF5sL7iR8wooQGU3bfEVsh3pzvBC4dVZKD8WZtb8sH2qaoKutdJUg7GqdtuZjtiX",
  "key1": "67NqTA8G9XxQc7DNG8gZJh4KmGgnTKdg1ffTMLTqGMAUqpfefnhJqVWNMUCreSnXWxGexRS2aB6yas1CbpFKPU24",
  "key2": "3DhQWbocwTUWjTfomYE5LzLcdWoxA7J2rq8opuzuuo5kMy2csxpFkBkQ3r2MhU4hYwnGvjWNG2aaZ2igT6UeHCju",
  "key3": "4hL5y4vb2Ynf9a2LaERP4z6yfmUcJYVUiQaxggHQZkE2pysAriXSctFFMdVAv97UceYGSzCJ1fyPE6f5PHeehpBG",
  "key4": "4ZQKVwsKfCxhhazcCsX4kHbiZPHsCbh62nsbVc3D4VJ2KE8mKJsYRvFXvLpKGyUtRhX6zW3879McRqwaYABBqxuQ",
  "key5": "UkdjrwUDgJWphMzyKs2NnRm843D5xA17zEQ4EzjnMhNv2UQPFgVuHhpUYzaiaVeJWNAtBuGPf8iXbtqUTjZtrTm",
  "key6": "4yp41oje5r8unkoDTEBzRETsp4Dk6qSkhz8JMbHx1ASFfi73qv5vTDMDKDZk6ua9APPsKPS1ZSnBEEb8ZiVBiFq5",
  "key7": "38no3WK9YC73D11GHEvN7PFJC9JqEb28iDWMLLPr9zuXqCtgCf5sEzJXNJQewykJSdVSseJC83KptgEw4JM71abc",
  "key8": "4EGaLmdJQbKernu7Xcq395nCZnX3grnHwE3ivdcZ7Q1v31Fzj3hLZZm1UNcf9d27SyKSy7EpZojKEoRj462pYuA3",
  "key9": "3i8smv4SgLdnHi6xnNNnQe1V8C7VShAQtDVJL1qLfiN34SjN4gDErPQ7zeGHVBQrqAPLiCFLDp5DMnd4krDjAhXF",
  "key10": "2brxhAaCcXT4oioHTXM2yHcK5Z75LzfMrENUwSUTqZZ8wDGS1a5m8WVG91uTHmppJZ3va6usxVTiZg1NvEiNpCXw",
  "key11": "3g9YtHM2cwcRw8cXw2m3sRnyNUY6JAb647shdsooSZ69PCtQsAxTGZMxA4FCcAKuFSgfdpwgnoAxAW7Wi68ufnGN",
  "key12": "42FcYCLNwjfbduHoYJ8EZh6BDBiHGa8Ve6YCaVUotUWR9bV8bAC2stfgHcoKSYCShgYgt6Hg8kXQMELGNnh1htU6",
  "key13": "2mzLE5y682nimrxzDHLqQZ6FyPfzyWjW5hdSHnvYFu2wFMuMUiSCRAbTyDyYPQM3f2jG69dbQ4y4JA8MVVo2CXHk",
  "key14": "38F7twBRJfFFSG3FMc78c6fYseQBE5UU5rt3j5ZjTWAhcL9DmEnPLPEGdSmQN1tEP6JuwcN4qknBQqeY1HV1ixKL",
  "key15": "vnQryeuf4TTELCMZG1gvSwvsXAZqZmTz9Gs5hPsiYCEA5PLjYqX2PPpisR8dfnoD3YAwrJu85Pfoei5suF98ipG",
  "key16": "47wkMxecr8qWUGzAU8QEDqM3YjHLBcLoayPgdYZdfoiBoD7xAU9DnRvDtrFU4xQwkEd7iixgqso67y34YR9aM4wm",
  "key17": "UQoqqmVWY4mzRA6JRscBDa7BMGCyMkrWYx3ohHy5oAYce1Y1mgT7oEMhoj6z7UszMp3WDykfod3wxUkLUvA8ijS",
  "key18": "5rc4emJZxPiRvcBGAuMHDZ4sdetB8UuQXquyVMvBJUn5zRQKX5bfmSpjUWUTPjsy47uCYPu9RTLDjcMhH2K7GQWh",
  "key19": "5iTpwT8h8iJX7Dh16wuwhjzM8Dck6yorXdqKx9gt8wcj8bEsia4Au6VfZjqay4EBsrdNggNAXNiY16THK9mgap1w",
  "key20": "3CYppTbCUh1oZXqE5YdqUd37Vsy2FHd5LKiPBRCaT34d962B3mKzFAUQycW27RHuActHH3VTFjR5c7immu13KCg3",
  "key21": "26JTY7aRKYNU1Jhae7jQz4UmD9nEFWKJN372G6ckEyE5gNnN2Qb8DcgbcZSPJXuqUr8cnUcNyHtbnLB5SyEbi33G",
  "key22": "BMAPUmnA5i2v3EvPCNa77LcKcSVs6pkWT7R1amfWeesfZA9bjCsYcKwCuCxQcuHxaTwyU98w9k3wDdTvAQjAVxE",
  "key23": "4KdV7ELfa8L6LnwU3XGEiS7RKYurXgcVmYd9MuZN7STjzffLs8iNDV6Cek39JV1iSQdmCRjSzsCyH9qWLR8gozmN",
  "key24": "331bjfPxvfBYYoi6XVJb485ebtMuXNTKEnBMbZPZv5j2GhkBV3FT8e5g1uA8a1TXcxTDL6sJmVaY5jsqE9uReZBo",
  "key25": "31s2DnqAqKPBUhsEHob36ZTb6KyEtiAhRtemyy8beWCAc1J1eZNK6444kzK7qGCbowkDRhjfLGkGRqsJmN9dL6Co",
  "key26": "X2v8VigK5uMFnudscV5dETWrS6MYF8jqL3y5vogh3ztCcrFDjTDQPqHj5XiGgxcbSBRMFDv1aeaouSP3EzM4RkQ",
  "key27": "kuarkAgwL6eC5aQ8rsMKQQ7KiCNWfm2nxwfSeS1iMaR8CieuL4pS8WkgfjPycuzG3pi44bMssujc8RjA6rXXAYn",
  "key28": "3GXb8evba1iS7QDijZ97fEEjhxn8cK7s6E2yAhHrYjKHJWxqordf8jrLqaRtPpixBtVsZDTHS3B7HWiL5UdXuKuF"
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
