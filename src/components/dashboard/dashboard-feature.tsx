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
    "4on8cLHp9TkfMPsDfX6Ut32VPh7br6sr8MqUbfeDnxn9shiyC2eNaR2L6U9Hb88QHQ4PABUQuVEKxafAv8UmH4Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJbVYzLwYY2w3Ss6wzYsNMykNe96V8uKmLwpXRrWc1WxazT61znmSxsHVMgHAQGtKwUBu313FQGFKVSMAv9Hxwf",
  "key1": "2H5YBmn9z8ZEq9xJVjitTZeHy86HWyffEMQQA5szHWneiy3afdURPgBVCWutpQ5qaxdQo2J7x19M7wQHNaGbhoGT",
  "key2": "kddHaKVCDW5BDoc5fvRWq3JrXQFLMkfG8ievNkn4ceUaAWoapaEzE9EM1EHGskmiwZv1ohymP5Ddgw9iUMiHhhW",
  "key3": "49X3A3nVsdd59UwfCTN7XjGYLr2Qd2dGEkqX9yJDoFkHh7Z8xokMbWcWXs56S9wwJioiwpTRupq6kwvM426GGZ7H",
  "key4": "2AzCArrtdBLzSrJy2deHQWVAb9ZmYQrkLVVsdo5LXKuy6ui5uniHGK3xQAWKZR5UiZ15FVPLxb8QRn2NQeaocLZV",
  "key5": "5Q1AinyzvNCVnytwWCKrErfspoTYJ6JeAckkbjejEiBvpu952rr16AH7Hi9tJJVKwKYzV1XNuk6hGrScd2XLQkWE",
  "key6": "2pnQ74KQyA7YtMFWgSbGcVMLRUFPM5hTEErrkjzA5vugumvsy6h7PHHp9pUYAigAsQdEUtkZ1t7XZi6cz1WQQZkL",
  "key7": "5gMUniNhpzzHb2dtRHvowjPoxKivmoQ9qNjy9wVXrPvigH4xCEZTopK1i3JpSbsmbpsq8Njkowv8WWMxo81DeT1y",
  "key8": "5NYGGdVWwjCp2x4ph5TXfggRZbxu1XxGEWafM9yGTGeLE6hGvccvkmjCjGMUp48vmou3fBy9nggTnZjbEHHD7Fiv",
  "key9": "2FTdGjECdVyNpzqM3Znk3KZ2A3eK1hYdayJM9EW6jJBYrXJNKKE2qMTCcVVZQZXCEYZPbBUzt9bFb4auDY3KRzAy",
  "key10": "3ccmJ4kQsPbPq1J5mdRWZF48t4Nh4JEEzG1gRZ1474ikPzBH4ZraiLkPPaFHZXRaTLqr8nWjPuC3p3JHVSbFAJKP",
  "key11": "q4THpn24bK6FdsaFZFePdJ1vjNotUsx1Njigy8tR8v5RZTkezMEDB6ArZVRkd6rbwYNfdPR1aLbfxjQAzHYvs6a",
  "key12": "3duzgYutCKSMKPDMvekJAZqK8TPw2qPz6kBRbHxpX2VypRHFZ2HKS5TEuXC8ERppCDuQDwAUqB2KLCaR5dC4iaNw",
  "key13": "267T5wnUQ9EwCuYHfpUogLZN6Dh61L1eduEDcjgVwDzJZpMGFNv7nAPCwcf7SuVtLWBUoRcX5JbM38L56xkX2mSB",
  "key14": "NzpxQDhkQFtPTTwRb9QVzyAQy92uN5dFWBGZqVeDgCgpsXyfpNegWyJ2ZiyFQwPS3kgtdUZdGnhmfpp3iArUhan",
  "key15": "4T6rcatwwQ1dpWSXdzeLyBD42inoJg4PcVwDXi5q1FtB1FiBSEV2dbs8gAHdMMGSqNqcYfg4vxzYLNC1kzNJi8hG",
  "key16": "UCL5uHBhFtx2Nbw4uSxFLbfj7NmzYYUZ3HUsjGAG6PxiajDgkQunDtBEVtdpwe2nXkFpSLjosqsLuqVyb2jEgns",
  "key17": "669BNCtQaLqiGaE9TYLABHFJPuvRwShGc1USaftqpi6UWFqaGc9hpc9Gte4ytJmX7MvHbPvYSaWQuPGDRWRY759J",
  "key18": "43d2YW85FgaJbUFtUuBv9XFMSYd6QGfCArKmKQy7GAhdh3b2tUakLBgQnVuqi8Bxad3aPsRTQoBiLygTEnzb4LaP",
  "key19": "2r2K98c7hCLe8j2wDjHiruGXGEkFnhZAcZoPsQiTUhs7PVsSJmD4hzGR4W6kNTuQgsFBdmuWHciFHgeKbHtaWnAU",
  "key20": "5xUsMQ2nbkzK9Fk2cLfMmkYtN92oRmfRALUpMhaGYY2jnbz2hSMFeQodKDZ4cP9t2r54b21BJE14yzRpWxuwSf1Q",
  "key21": "4psNvUkmCSqPRj6HsU37TgwBrE1wiDZCdgt7agRhC1k16Cd3EkHMbUfKBKXa9ZtvnGFHqAmRcVnxReX846MtKjam",
  "key22": "3iwY8A1STCtQXTCQjD7LgTDTRbtACBbVUr5iYX2sHQM7hu1RyBRmrJz4JSx2WjGYGCyeCjpvHCwiAPNi2YiWR884",
  "key23": "4UfqPYtq66at1VnctwS6xV12QQg5vGMZdiVz93QsyUw3FgTVCkfiHr7HDqzWjij6kPJZ2NRvh8c4G53majbcdTJg",
  "key24": "4qCXqQR2kteqtEeHDtUyPvZTExbVAUpt3S15Fp89X5j7DHmGtRWuPctbyvTnQ6VQ7hSUQcxWLWXJigrEn9MMbN3V",
  "key25": "2XMqiWYz4uvz7wgYeUgskwV2pN2Mj9v3TGuvgz7h9EbPUTmsDPgcNWQkkebpB6iP3z5WFr8Gfee8LcFiZf7NRcpY",
  "key26": "4NeckxHWQvL59RkrmRU8qucUnX6tsfWXbtSbetWFUhKwcEQAt5hvXhHFR6Cf6CKaVnhpYyvNopcP6u49yoQNZ6ze",
  "key27": "51DH794w4ebm7xjpDp1CJrNMbbtfrYwoBwFUfWocRBWzfp7uQF6SczhcYnjvabYDNfAkik7wtLdcDfKBfjcwsa1j"
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
