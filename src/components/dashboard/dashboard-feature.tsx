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
    "2CSn7R9YxwQLpFGwrAryr3JZubj6HcFjT5bhLaBqfuw1kB1CiDav31s6CeNjssbUQkYeuyrqH97yiauMvbeiGesT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o4tM33HewcRvWmme3c9ZF6Gnxcf2VKe1kRBoCP28FechTF1FAG6aCkziHtsbgzcvEh2FRQPpf4JhtmGjQYtqnr",
  "key1": "5jNHK45V26ZuBJE1SnzVcRPcC74utvpGpf1qdW8CKwnHELtuk9i32BV8iEqXwimV8EM84NtnF7yNvn3KZ5XdnZaW",
  "key2": "3MvxnCoiLxYrhgX5DDFs9s8dyHv4N73q5q2bGD8P9AqRk19psPpfrHTh5XjNHrrBxBCNQv2KRLUCMMAru4y6kfb3",
  "key3": "kucgmYL8Fe7MirpcvRLuQXGWe2m6W8DPtbDGr3rYvLSu7gAE5JzTnfA1qqjsLjV7huS7f3DeVqw2SM6WfVs4sGV",
  "key4": "3Y6RcuFKgH5gR1Azz9SUvEbMCh49gYPnygpyzwWeHXSt8TMgiz6gW8ZpAPMTcpJjqv5KBkmtuFny85TA4nKtV2F4",
  "key5": "5c8cwp4AYNf6pJtLC7SExpJAXKnB8LHMeFnFpjiLM8PvZA4DbMoJsXBd16c1qNy49RshQ58XgPHgPRf3tS2fxMP5",
  "key6": "Ebga6j7wgzhAqYN8MLPhCrJ4KdpcbYL9DLSwMZUaygCMcTRwAuoYTXpThPaY1by6NQ3nBuycKMxeRdMUAaxE3Tv",
  "key7": "227URuMHq9NNyQVda6SKMtYWPcuNr4jx39xWGNf1cLkRUvm2gXAYU7tSfXymWLyipiaHbLthzutyBoAyVL8Jk7bA",
  "key8": "2B3xkUtc9LunoSdGhKnD3eTk5aMw9ieGsNBG4PgFbZSExDDWHjhuQkyHhgJhL1WLkBRpwt48YNdbbrA9CnJeBfQr",
  "key9": "2R53ukYLwv1oUNqQxtBjE3Xv5kLxhsu9FEhDYmG6zKqNCNMQJBmyhqt5ANE9vi4BrRUB1xqXg3PSZsUCWrWYroHW",
  "key10": "5fFq8UHKRLUEJJFkna2k8fYbVppWEckHfJbTVhaAZhWpasxTpETQBW7JzbZT9MRLgxMm7TQafCKhd9b9mcHjmVvp",
  "key11": "33diWMoroSdnNQQ68EiAhrxhQ2dCpaGVNHzqGswy6ZFgeFeZ38RoVy7C3sNXxSGyMQHURfLvoJ8SF7y2Nsx6v7GH",
  "key12": "5fGm8PX2G22DjdicE6LVYEGUBfvtmmkgkBraoVjW4w4wCihv8rL7oD3GGaKJt2o5eHQinNfwc9tMSZFrmeQUy56c",
  "key13": "3MXodz4qiuUmBK4YBEEjQzqMS3w9tH9GdXzY87QfefTytWGJcTJp999ETohDSheq9BZJwRYkqAF3H5anwNGxC9pW",
  "key14": "4CPhmwXh1USJgRXFHLnzvV1rLqyMuuv2Gm2RWwJsBu5pE1iTuXPQv7K1icx69cwguQr2TyFQ5Zcevp5wgiS4NCfW",
  "key15": "zHSs8MLbLX5MMXSVX4kZWZWqVM8PkQYNhJ4WvJyb9WjJ22RU9aUMD61Cu2K1uVKX3oKRErHcthKqwbdtnDwPFaf",
  "key16": "5CfVnGRoUmmbtnGEf3npHDM472Zo4C1TkQRKhbV98aFALnyEAgpUL1iLdzWX2uaspTcsd9TS4rLaDYGxB2tckQ9W",
  "key17": "54YG58raaDoZcW2i3PiqrWz8FZaVNPVyVvnSEadifQbK73oiZVgaqmHpjHUo8eYrrRDRA55v66aKwN4R7fLmASkS",
  "key18": "611wdVkwsb7UMVWzxny7JqPSkWVcaXJ9Z4dMKpXWimJFSLVCyaerNTtUiqZawLfxF8Bj7qtg4hdq6jjTHd9oYuHX",
  "key19": "62v4guuxuSvAfkbcc4V4ejh3PNypHvLaKwUM3SA9hyDjuVwhaX4jeqdbEZ5voaDhh4u2tXj398oLor7qzoz7m9iX",
  "key20": "4Awz5EAn7ruBLZAMi87wjRvtnaotTRrEKMLem2EUVMpsUY7W2EEPsQsjFpEAsRs35onUb3WkwT8fqGTS69AUZg4G",
  "key21": "3oRWuNN6iqw2z1xzMF78FpRB2mzdLz874gMvphNDbt4pECMDsJbJUyDeAsZvGxFpUdywaQrbL17yZ6jCbR85eSCX",
  "key22": "3B3dZNqVopKttPfT9FT4jmoBhCmGZWnr8W6eZEyDwcVa1ctKmrgfnFdLMciYdbM3VRiq8HT8S4o3gqdyFQBTbA4m",
  "key23": "bCvyWxapmZrHWCSfCk43gja7w6wcQjnEqQnRJUD5AtkM17vCYnPEavfiwisMK2oupSGc7kdPxKavds4tYKVhuQU",
  "key24": "2smxTpYzJFAV6XFs6vYt17rujXi6g4quypGhMjjm929hkS2CR7PkaZgBQVkvhA1ShswTNgsWBnYzDmBpipEntNk4",
  "key25": "3vbK3Byyjngs64PTPHe7EXa6JYoCdTjhFUVcSxKn9cNZihmhxxvKYPSa8LYsfNWBCruSBuZjoWbR7qKvE9Xai6xX",
  "key26": "4bvs8uhGcrbxH8ABc1bv32t3vgf5MK7MzbEGy4PngnTYzJwXpEA1NADDGVyk3HqtqhpcNhC7cZuwJbQvj1h6FeXq",
  "key27": "pDgzMo6AWYMxbmh7vjDuvDNWLdLcxp7EFtMAa2R5tukrxNVvKBWEjUnimqETrvkevUzG3freqpFRfKWDu4suAsT",
  "key28": "55Sxzi7cMcdgS9kHG4Wj9WXKuyzwDridURHTzuoz3i7tMMMoSR2cAS6WHXNSKgNMGeXtWwpfumPB7yd2GVcYPZa1",
  "key29": "31xn1zCZTyDKH56wwucECPJAzLvHcxtxvoZ2br5gpfTBNNUNRFYjx29kbKW31GnuGaYDb7iq1p7d2XPJu7ryKqvy",
  "key30": "U9bjQ2oRGusFtfU2c2r52BDqkj3EsKdUwwdEHnZiZN7vFk3oZUcbkAguTdcma9kjxz39o3pNiyofXM8ydD2zfW6",
  "key31": "3nZxw1ZNKDWgSviGcLhGaLZfPzA1HVTo9r6Pzx8bNu2ywXpbsEwT6hXpTv7pYdaXyLMLUbhJrB4wsGwVkFzL5uk5",
  "key32": "3tu7kSmpmjecLomaxBKEbNdWUJVeXh8kH79azD2Uyjaz8FH9L9Tuyp3gfuvtwQt7bafMVTGwW3rv6ewGo3GGpVxS",
  "key33": "4fwJ7N1D99j6pyLbDti94e1jiMZx1ubLNTsYfmxx7d1JYLXRDhnxgDGEEHzNTEVKrD5UXoQQEj2iei4YcjXKQZ9s"
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
