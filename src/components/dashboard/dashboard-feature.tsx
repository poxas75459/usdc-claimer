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
    "52qHLirN161eV8kwDHkx3E2sSyoTmz74GCuX5Vy5cqJspHBAgxj4bkzFyuES8RhPn6fRtMB5SjmnaYDG1pvPrGNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbyJgnCDkVGgtGtUN2W568voJnrqoNDAjWDaUrVvwiTNgpuAu2fphGXSmpc4y2E6RierUC9GqAUSnT7TzjxDNPr",
  "key1": "3HJVeTkRsbmLY3zn3V1wzKXAH4U9nxxHsLhxLd3sbyE9oe91eyer5tMDkVvZgkwXN8rFBWSnGAEmuPZ9xGJQytrr",
  "key2": "4GniebhCQTvW5iddKWA5VKCFGLDjeqa6EBcp5WWwXp1kJTs7cEKqyVrxCA2aheq5UyEdU1ZYjcEuLF1LNvrYtC3f",
  "key3": "5UTkC45drCTBnMhrZesZkRdXVurQHwogDgJpAd84ND2LAmBxyACxb4x9RHRVauUX2DR4rcpVMs8xA6gRwQRwzAp",
  "key4": "4dZYqAhf97rwhsbQHDPBpJDUVzFcHYQYJKUbYsJVRLhDLp7pZVUc7gTZqx6wqBbktf6NXWpMvRZyjncaBgZcMJPg",
  "key5": "3AesWPxjuewdoVAYNm8LABDASgLRRZZBYHYiAYgMwdHkNPFf1MXHxrikqNrv2w1AnrfuB16zdY4BLa2fCAWd3N3N",
  "key6": "4LL7CjqFc5daf8NaGfcDX2rb8tTUCL69a6QzSYkcy1PKDaGC21z5CyG267QyagM1eJMv2e21mrLhAKav48nZMFLw",
  "key7": "4XdAQ87dYb5dybpJ1nEJDEwQY1rsJBB2FZgFcu4dhytwewtXb2dHNhiHtxPotgWbW21o6F24J5Dfi9ZsZzdM1muc",
  "key8": "pcvQHXm232nuH9uQDxSH49iCDH9uL7YzPZmMbYhetdVStBQqFx2MYV7sXiurrmYW1yFDn65vVGu4XPjmy4BXwUb",
  "key9": "5LZVAG2n2vQpqKk8tDcsYbqYvA5CEpQHUKevahYUir6oeNmzir4cFyeFfWm13N8KG341DjRsdSzkPJLr3UT8B2wX",
  "key10": "FsSgi1BWVi3yJBZCqXb7qAArcsxiYXYc7iMYLUyVEV4kWhDwWK1Wv8SodEFsZPq5EcF8MdF3FqoLVm47tVrTRh6",
  "key11": "2kopXcKot8iPbFnK2zQ7Eoi1XMtEL7xdBPxD7Zsf8zoDELy1ADQxuju9L8hNFiZ1bMSTi4exX5FFSKJPY3d61hYi",
  "key12": "4F5ARadtNa8hR2NuWf1cSYidfgQYXmjqMw4nodp4rF4knFuckumXxkHMTzRh9sxUaHAkKNpv3A4b8who5NaX1g5k",
  "key13": "wUBVKjFTJP36joku9cU2g2McLCM5JMbqcQba8w73oTDxuNUvGFNispKC9hzeT3VvawHhnjSSVtHBKzE569eFPLe",
  "key14": "3tp1uueC45mXWrUF9ZN93UD1Z1kPfDcGSsfA3eMH8f6Wc5Whd6GTWmktUhZcYX1pxen4rJn7H63Wf4o6mS4mK6Er",
  "key15": "3EQiYVphQFGqLYMBYuqm7nAFG6WJa2xQxVagyHXyrvpQWbMEKLjNMu62YKeuQkKZAnkG28gncm6TTc8cktUEhrt",
  "key16": "4JWd1wTm1zNhPLkwDT1ptU94Yj5hQEgwpiDJnUBqoeiN1zfsZsGoXh2EUNWiv37uycxpzmvPJdfNojWFfhAeUMfT",
  "key17": "5WXt5ZF77qmMAJqZBjS3fyCey82WBy1UYhysNnbQhP6LWVjLAouWCjz56JVi9bkXzboUMQxFE6fsUPyLJNDF7r66",
  "key18": "62SNMxgkQkHSEnTnYDTmiNj378NRoPD2osMppq9tLv4hMu12YYtRkRTGvUVoY14SthaqfYSq1d2YBmzaeExP59QB",
  "key19": "38yRKm7DNVPnJnUkurjLZJbSftpABjSE2A5vHYofyQfnQHW8eWfudraDu11WeGLZKAFonw4fCKTYm47UioaFFzk3",
  "key20": "3PpQN1wkhxPkdGmfuJfvo1szG7bsihziEAErF5vFrgPtMvqEz6sJajpo4cZEzYmtXqJavCSyWaazWfGJH6qbAdeV",
  "key21": "4ZzXukjM58ZSYzKjkRjMAa64428LUqR1rYn25PmjDpiEmJwcPBT9ddhz8spj16z6YhuGZvypLwfiBV1PMXuiotyY",
  "key22": "3AAGYNAXcPEBmA7BQFawEm6tDJ6MfFaVYzTzFEzSUo4gjSMBt1mDJ4FZojvWHwE1DV24L2NqhhnjXU6fikB5XoJ8",
  "key23": "33bQaREiuo3Q5XF8JRJhFTzTyNunaziJx8UxQ6oH1BeBdTTq446R6rYndvEHvPZ7b6xiS1qnnzuB5DEfoJvWuFmS",
  "key24": "UEo4YpUz6KaRYzC5FziaU7sDfQBi4qgfE9kg8jWB9vYfV6AU7CCWE2JwwyrYGaAy1zxfTHg6s9VggAJA8KsHQoA",
  "key25": "5Aohu2xvxThwGxTMkEwPkhbkDNVzqPEZuMZDxVuRMwGhpTMa92kFjDwwKXVENn4xW3h8rAisYZ5wRdFyaG8nfy1J",
  "key26": "4FpxGoz8UWmiCzERC5xvC3i2Jwfge2G6c4LtzAN7m32Xp1V8khragByCGesHFUeCqNui21mfUqhp2nqh19Uchsuq"
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
