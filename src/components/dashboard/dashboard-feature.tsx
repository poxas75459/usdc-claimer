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
    "UfV2fPDh2VqCo1sk95RGs5CZ6jM3fwtbh8UeRNkckvDk5wrnDgbkiR24MeZKimKLd5r2VsbUb2WaXFR6a4a2j63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1W7o2oebDhbwGvnyCeSQwmjF4S2gBDPXCDGTKnsEkYbQ7BJ5DyLYA7exCZ4CyRFw2jN2xq8Vkt6eWaWkZnrz1rK",
  "key1": "v8eD5g6FyYoqY79XvuART1SEHJPZp8gokiGaPdu5qxFpadkVXrLd6aTeTU26Pr7hSJhRUmyxXbo3iZe7eMvV7jd",
  "key2": "57Eb55KmMmRdBTVXy2VrjsmmAMHdqo8jiDyscJzhaomf7xSFwrX7itVgrDqvEd6G2sVhgTnonam6eS9a17y4tCZq",
  "key3": "2r7T2DJNr7jwYgNaUspY5D3xFKg4g7ptqXe2m2bxs4fmwq5VhRZwDjmWDsnL2euEXZ39FFpzK5SB54Nzjw5m8hPA",
  "key4": "2hDGVPvde1ywvEJSEZhThyAZpZuKTn3LKRdLZo8nchqyQ12xULdhg1BgL4GRaAc8S6XN9JhuMv7tw32AVjak2XbD",
  "key5": "mwS7RMSzGgbgdsyaZzrzKDrFxD9D4WQ3HkFjEGDbUh3pkHDzwSfHvmtZ9fY8p9urxtL7uvmtRGZ9RP2JkN7Ur8d",
  "key6": "2Qm3cFmqrkSQfaPqfdo8N5rbNh2mfGCnuoMXGBTTC8t5N7txq9QGYLPLEkitcyy6KG2xy85gT2JqX6kugCbw4UR6",
  "key7": "2bP1VrGDobMca5bQhUrZsSKyZaQfEHWEX7haBcmWW4ZyjEB1JdBKsLweRMuLL7aiivb77cGGQTheuzjv1vS2jdkB",
  "key8": "5KzDX5TbKQPuz9NovjWi5fytXAhNudWYkYj8LrN7FvFr7Me8QwXi586vZr9iPMRE4yhPNs5QpV3mtmcfY2sGS3tG",
  "key9": "3jG7FiWHPM9cU7RznHAHKr2iEqR3erhXLvuNa4hUkJ42wngevjE2mNndypGFm9qo1AqCtSGCJpan7YW5frjBoHQx",
  "key10": "39GrwTQsMdKsm1EtcXqvy3q4xXBSu5WYrKGUoi1PPwr2sPff9R997HmJZKzKLmaX22NnWHZW2oFE4e8nwiJiaFeL",
  "key11": "3H6VdeW3a44oyYxxBNW1Cotmu4aN9r4Vk6VcbGnmpSjW925QcbX9NRatjWNK7BcAGRjbQrYW9K9L3643PnqBetWd",
  "key12": "sURV5sta48yMymaZZ5ocLB15VTTkgMhJJqtQqbGT8Y3GKsXL7QfccDt6vwCyuFEuKM9AZ8ZpVv6jeKnTn4u2Gky",
  "key13": "2BCLp9f4Lvq5RuxVKZz2uXQri9qWtgjeYonEmc1Re675beutGx2kQA6PEZqEXczGX5aimGEkuSeiEB4ySV4HwfAp",
  "key14": "4DfAwdFMzkhhzuF4EmdNdVfSqwZrCFxkuRrC2uTnosVCVVxn1wjHSmp3sQWsU2Ym7SKZaUnzu72UDAGT39gd7S8m",
  "key15": "2ttsNPJdxq3vg8Z8qtE7ohVk8bEjnZpURrZ1K41npaWpWyeC6SnoeLAg9cqGWuc5Uv9VvL3qwia9gEkiTsKzdcPv",
  "key16": "3JooWtSwgTn24ZBCZnNRZQXgVTEmZYb4VJCzhJJVTiPY5ZjxjtZAHwSTM8s6jZacpRmwEQHhEmBPtaicVNZNvpdh",
  "key17": "4cNLwqJPLpdcTm9Ujr53rGUrRLb7S3VCQpncjtr8NRmVwuLJESkfVAhSpmyrytK1vCfTfLkRTvwgAXwmV5zc8hgF",
  "key18": "66e4JpP3pDVT869NY5x1ej3PCfsfkeYDnQ7Q51HYZTogr2DbrZ2uMVTybgapu5e3j3DNxjkiGsSfJ8CKK7TuUXs3",
  "key19": "5jsi5bfGGG2M5np8hm7TZHWCY8Bcr3njhs3CMTKUWoMaLK6umxHcNEWxX5gpL4Jwa1a3ftG8LeNkNH37joksURKX",
  "key20": "5eeeXNnpfHoCpxTTvU8zQxieT4QS6GAF3tFmZNhoa2KiymMEmhYcGuHdDCt4APvHDVumPAuYwksyJugAE8tJZPNJ",
  "key21": "57p2uBP9maQ4eVG5FkFLtWuN5R5QDb3fqpC6trmVweUFdfoatqGypcJwFYerNB4DtruZqAWxu56wPQX89RcqWyU8",
  "key22": "4qBmU4H373FJ2WjqXmdXXzLLyNFge5TkVNsNt53Ff8QqJcQ9DQcSnUL1NHDRg6aFSfYPGSrpnGZ4R2AA9RWnJNWz",
  "key23": "5AAgjLzEmmzBQtpLwffeqAHCgNYvmiukAN95f3MgTomfjfU7SPPSh1ATiSSFoV3MLDPytnGghcoRHZ9SbzToYtdY",
  "key24": "P7kuxFkQtoCs2zvXALUcSEQ2jDrceKqRhuiXNqyrNujGe7yfF1XtbTbpt1bxSirutaQPjt4zAA28g9sAtRXwHrr",
  "key25": "3FFKnuXhbuFt2GYUeUQipmLbf4jfHfyEDtrpy2UAc7oX7gR2BoUQSrmqzVrLrZEpnnB24yefGLy98hafsPmrgqei",
  "key26": "45gWQBX2TMQkxkeCVU3YqyMJcJqTswkKYZ1uJNEJWRaKp7dzxDPhpWDXPyYSA9qf28dsNJuTVGuJcFBaTpKgjtju",
  "key27": "2xPQLv6dNb9enBAFt3B82CKGGf8eKbAY3gk5HuCJBEXv2ADE4QRbuShvMr4ZJ7symdVkhuyGEh9swP3Vq6Uujho6"
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
