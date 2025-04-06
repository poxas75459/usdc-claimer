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
    "4rghwAoFrgkEP3AMXYreJ5hn7ViLXAvz3SVLQh1Ga4SQWHk84zdhBHouepoVgMEFrSftZQm6V57k19FrQsgsQUKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awfeLxGwWjfctnG2MajzVEjBsmhvWs8b6xjW9nAFyjcP2Ma6QY8TQK5DrWstDZ5q8gQtQ2gj7Vbbv6aH28hvy3j",
  "key1": "42h6wnF6BcUpQrD9F88ErSULfMJ8fBNabF3ScFbGPVzjyyB2jBqAXTzuS4JFr7HHLk4Z9Ptzhgo1YpRebSq81Er7",
  "key2": "4SoAp839m7C9FSCfm4P5xYqNjhuk1nfeVMbgNU852RFJbPakVH4z9TaVtZZxzeV5VFkAXk6P46dFozARJiDx12UU",
  "key3": "vTxParHa6yqS63hDt4pqzqmNJUuRPUbiy3uXGot5qTFwVuKn8MtgxSJWdvReUjRXrTymNzUvwkq1mS8d5ghMCuh",
  "key4": "3vrKR7hyh9NiPjnhxhiSzCeRruXN4DW6hfkwqCBUSB1chqeMNn2kZGuqoEHyKvwG91HdHDGMEshCz7qfT3Wjb6yL",
  "key5": "3T2LCupFRe53XhH6fKf3EifkoXaRZJ5SHZsh41HkbieZfnzqPALyBW9tFmP9cW9i5kFdW3UY45hhV9uDAcr5rKfj",
  "key6": "27W6wdN7EECCxsTn69A8RGsMX8ZS1NUDLX5di2Lc2Gr8PYV3apJ2ghrZjKoLsJGZYgpXunLDv5hPEP5V7EBuwkMv",
  "key7": "5gyDiMVTU63Mo4TuiMhBuSSaF6Lbca5JaoDfbhTWGbF7eMdG7u88FyM48xWn3SMD398DmyNuKZt4rqFAd1pYonr9",
  "key8": "4p5CpsDKs9Jt1F1kfSA9R8iEz7hBUWmouNirdxEN17WBkRgLVXYf9yGheqzafe9MtCumbD7edzZ94ek1uQxsoXpA",
  "key9": "3iLjspNnmTY8MDFRk6nXtUFn2UZBvZoo2zrxg2T3C8mHDZDLBqSvgWXY6U9etYPLbg6JbNydT6QPDbnnaTkNVjK",
  "key10": "2vzA7nKPnJBxiP8G8VLqo1HArjjMHN4wh8jGN3x7wWQEoNZtx4VrFWKzBysw8zbH4RZmxd812cAuseLMFVUXkYZd",
  "key11": "1Xg97BXHwMp5GvPEKh7Sp6BTC5RS3XkDtTmkermAzWxzh7tXBAQy8H7JqZvFATAwzu3T1cquUtFDCPkUG8czff3",
  "key12": "2mitRTvPktWsXdY6hzvVp5RFgAjsvCuUsnAHYWvDjSVgoTwVRZQSEUSAdDs5gJpa2suwHN8BWcADKZLkmCfMqGQM",
  "key13": "KbPD3Gav7rZwdJhGxwc1RCabhbu9mie8KjXRgDRQ7FfZ27qGj9agRA3LTEbbxio9mVdqbgman8p2df3S7RNvqDx",
  "key14": "46ThdfWVXkeAzufGAEL8DCbVWXVURnzGZkGCZfwrvip6eETmAgu8qcBKAr7H5EoiMLojduRsg1Yd9jG782SfpVS9",
  "key15": "5cbBZakpBoTDhbSHYcPVGpoPMg9njqiEy7F8bMmDs8LsgMxZhG91ciabuBhA614pLJviJwhXyoLu178bndpVyuCd",
  "key16": "4o5t1iBJRE8rNCJGFJryTzEvVkaYy5qETDmipuMTCYQoBqR1QALF7C4txHqGHvEQo2kyr2XLTryCiJVLewqw3nZz",
  "key17": "2RifKfa7qrLFMZF6SUELw3hzfwjSHG8dJhWmMc4JirRbJV7AkY3YuRRyHK5AVpGMBXERwUgLjJipELDi1uNiL5QE",
  "key18": "4DMk4Nnzd7g6YRixwp4ggMaBrQMBem4pUY7qc4EuFM968kShKzpuFitLGspLyRVGD3uSHyHobG1fPyZxysTa6M2n",
  "key19": "4az9vMWXASQuwmQ5gXMyepgYP64R6wQScftAHHYKdonvgnoiAjeJnH7RidJJwzFzzFTAPTVnFRbkt97xnvt25iwp",
  "key20": "2J9n4m9x9eocZCX3G1RARAdofhmBKmEy2pxGyVzey9Yxo8vf8L9MCtHT2yXwjTB6dXyhJxh9YgKgzaKgjGsf9mVr",
  "key21": "4Q7GhS4yBa7wVfEtH1Qn5QDfz5BUt8UPuQ9812j8wRTrSvKzMA771Fia2Y7MrBUG6QHwbcWGNL49oUqqs4hLTF3h",
  "key22": "3kWhsJdZ3jrSBW6ti7R56LCKFxhYeAKMTQSMqEP4vaB43FmU8XnA8sQeGBRmJKxbKMPbBvjccmRcURJKxGRYcrDi",
  "key23": "3fjh3egs9hntswQRWaCkJ4CHKhgFmX1jWS2RkvP491w6AUfrEjtpXNAgp8jLLbpqbv3XzsP7ow3dJHVkpKj6m2tW",
  "key24": "Qhm1kV8YrECkPq8PBKeg3KXqCPH7fgQw5MjBuJZbMZvytUK982ZWpmDgyFqL2SqajKYjsXB8PYaGcGyZBUCseg3",
  "key25": "nhz5KzHe1hpSprGy35TGR7ErSU2pYUWLePtKvVfzjt6i1GjKmxU9oSwegksB5ZAd69QtyLfgrckEtnRpD1GDT7s",
  "key26": "2SV3hcNUkyKURFH1tisbyqPzY9f9FYJSLXNBT42tLjAWZQYfzc9UAbtQpXaAiBmqGTod57vHGTZLF8HtXuKJe9hZ"
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
