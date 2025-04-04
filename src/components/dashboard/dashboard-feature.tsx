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
    "3a4RaHx2fLXmkHbo6mNthsCi9MFU5DmnzxBBy2WqdXSx2f2YWu2sqseSSYdBjdVgT4xCiBQ5H8zF9pdznpn3cPzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsYCCSAUjuvhgTXkcsK7xwN2QW8KJ7QkAjEhwuuPA4BjzmiakbQhhB1YjsXwskcwHdhnodBo9ErdCwf7i66Co8y",
  "key1": "4q3PzQWWi2rzMmmG4Cic6Xj6Tr4Rvu6v7uQKfgLFvtUxmiEnYtpz1KsAyDMJXS3F9iKxzT3PQieHNt62BVLifhDk",
  "key2": "5me5CJ3Pk4MYyYWApWKvi83FLBFavj88U7WWtKX2UW4k7yH8ZPCbFh4TBT7G7yk3gSfKwJQTM6d6uF6nK2CtYNPJ",
  "key3": "2FVtG1qLL4NPczhRNLsdnoXCEtjYiwXBUaRUGjXEzK9dm8gAuQkmj9nLwvyxhdY8gEMS2pypwVNgJDEZpCeuqzSM",
  "key4": "5ZNppdP8Gr4PjRuWADyT3CJRcWpFStBXwySte7Kdh2ioY39oW8fYwumHKEkqTbR7mbEBYxnrt5A57xyYtevHpqbQ",
  "key5": "3mJwi9DNcryAFJqqA2B6uBLmLPP4PEuCpz4PrSCbgqaqK35P6UsrDnPu4x2t6nbyJzuapo1sLgBRdoAHMdjsXo97",
  "key6": "un4b9pcnSmBAFyk8CNeNEVirsM84vx5ZYtnzka1ePiPztt3atYZUdnzwwmifjV2qsN9mBes1ztGVHNewayZNhmN",
  "key7": "63Zo1czCj2kDMaHbDMVzyFr8PchaaNPx2JXTbhd6XogrpMkoCH7TH17agcYkGFgxLt6ju1PtVA1mfQixkzQWybQh",
  "key8": "44fgh7GLokzSGixWpLwsn1ZEeF661b8LX6FDwmHQJ1uGqyKoGVorwF7be3tdTFudHEHgkhPUXiLC27ic4MekWdER",
  "key9": "53UrzNm48zRVwchWLGcoWyqqYocBQC36nDMHV9CF1Bwzxkaqz13FNwebcQZEfCEvUSJb7GcZTKaAcdzh7AzKnxMr",
  "key10": "VNCe5yUdgiF9jxFLHWYhPyirx6Kt1NQRazxk6W28G15SQMXhWNjndhrfHuFtEquqntrvd5b3VZtH7CZksjUjbhW",
  "key11": "2E6or4xLFvx5XS4EsA8KxcFPAqtusKLnT74wjbt2oG7TDYJJAXVW7g5i9pkJTFz1755iBPZK8TyYTZDY4tfeXUXS",
  "key12": "24BEgwaQDRHYEHYsaZDuPZ232baSCX6YroYCwcSqfCiaqJ5D3FuDvNoQb7BCK4RUXRzJrReF5VbNTdwJ1bWs7gWb",
  "key13": "3BtCNfNnNexpmCXrdpoZ5hUG3aGHnnDfQQXgCZzWmCfWatpBQKqvnbMhRaMeMhSj9vFTRm6DxHqgshx3GGkfgwkB",
  "key14": "4c4tptE1raNPj1uVV84UCDQgu7YfCUB9Vt95Dh1YQxaz87QK6HzuCos84iRfRbvbEq83BQc7DyKumMnGuSefaS6j",
  "key15": "4JK2w9fMLDdFSKUuqVfFQ2TnFjKJm1sRqAVDC4wr2cDQXkh9DXxx6hk6L7qkNhz9hHMhvGhXYQ5rYTyJ3hYNhK6p",
  "key16": "3NzSJJSk4eGeRPUEow7jdJsTD2AoPAAiVs3NcHiy9Ene7s26iR8yaCRZeP74cDw8mi9pFugNG69C8q8ZyotWF2uT",
  "key17": "zGR1nYn3aefu5bBqJSrPkwY2XpLvbwxhB5EPBfEprmqZkkaoGhuGYgMQJ8yWP4PXi8fykJUichh6eKh91fAaGLX",
  "key18": "66AwTwN7AEf8G9oW68VBXocoeYJESzGqWVPz37upLth29pFvLWvsSZzSCqLzXAX7Go6S3YMoBg92w4F15uWMLqNh",
  "key19": "3WuGAaWLiT53MT6jQzNgAQB6LM9smxYSapdGgX5yjmHhbY9k9je6abWebsJJHEJgtZPe6UUPGatP3dL7dz8P9qpu",
  "key20": "5hhLqU7TGUMaVjfnRW2qhwWoupHGX6SZmBX7a4aEcDLLyJs3UWb5sfJijVzoEkFSCmojNmzdyX8Zg4Eu3F5hR2D6",
  "key21": "37fH9eKpE9bjrEEuK1YntnUc18D5fWpffkavYPf7QHxaL5d4D18wEnyyGTCUqFn9noYZ72kZGhMq2DadjE8SNEFS",
  "key22": "Q8mz5DAzyAANpxoVjZvfAzWtZ27Njbg3Hyi2gvpAvBXS8Nq8khy6NuerW84Dwxn5HQzGcSDBsg7yyiKJqCrFvn6",
  "key23": "1qHYkkmDyTfGHVFVyB8nLXRis8ACgQdz4zXm82JMsGUswTnUTKrs9jGker8zuaRUDCxZbUKvAQ7y2tTWUMZXBtb",
  "key24": "5oaRirBqZ14qopDrw3Keq1gfqoUjHHJoaKEnFepS79fgWVwwXmd9ZdtkcznHxvMJeV8dyrysa9DKhxtkYimPVuVC",
  "key25": "3WLM3gGTjg2HmvbVS9TyM5S8dD7RRdydpjUcbdrBGhtPJSetZqR8Di86XXVg3i19hSFAHke4pVfeuno2W3EG5djG",
  "key26": "2uVvj5YVdnLXGQxmF55JeEzbTsXq5u8RN1jybA8cXzwYKndiroydh8Q6cq2i9WJxz9LGY6Lq8iUXNJ3JuARVgH1d",
  "key27": "LSTrUbCiUDb8SwrXDpeGavKhEdGzChEbB4F2A2tSDazzgxAC1mmnW2AEW4a4rCcuHGdMKnnhvLfRNUsZqNxvsaP",
  "key28": "5J3WzXhSmZGLz5v1B2kunVMUpeKayT4HWH4kTBNp4RYYKwgfSJRTV7KaLaTmMV5chsAMM4UPNYzuRBMov7AVrPB2",
  "key29": "2Adn2BaBqAror5JHEUUY7QyusAU9NKhLabBGbg75ibTU4AJ4tbe54F7kNrMeJ8RC6F1NmF8x2jTwxxnghuAu2qtp",
  "key30": "3ad7ng2sX5ygg6JPWw4stEAvxCEjiR7BysYC9mspBuTufaxAZKMURYX58q6jmDe6Tq92AjDiFtL82NAgevCekD9",
  "key31": "2NiLDwzxm4Prz6GafmFG8g1hys3ap8sL5KjLEh9HLTEwy7L6pdVRWshw75HfZZfb5YkJTmcRyZMcW16pg69AoL34",
  "key32": "5isvBuMMkifboX3QDCFynriP96dyHLSNDoQ75CccH2JYDgGMhH6hhYhoMJfHw4sEwks1ZUScHTreDks2DGCXU82R",
  "key33": "3qpCgbrZLMBRGArPvXkpwwPRxUQZrmE36ARk1Q8D1zwuQiH5vLH82RnEZwNrBEzb6VgBS7ERu4mccewS43jKCCqV",
  "key34": "4CUTdNbDzRrPizoGUBhLm4MvmyrFEv3tmAHQp14foYTBLvVBPVCztTBx6e6WVwhQm3NBGFBaSMoNQQFtzX6FvCXj",
  "key35": "SZndbZ7Ufeo39DSksJi2qCgDLUD8ZP2N2NL5Bq3gLjEmYxL4BSFczCtwGcXoTodM4TMq9wmhyEb8DwjhcwdURwY"
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
