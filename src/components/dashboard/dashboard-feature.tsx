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
    "4YDb7SvhL3jNusEBVckRmFqbfxzhhEM3RbquBCV77uGyaakVWNFDP9Zskwb496jy6QqZndnodwgte2vnE2EchJ2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHzwcX59y6ayjS8r13v8q6ycJjMGngV9uXM7A8MqyH2u7Tn8XAcbg2exCDxYjfZygj1XRkkNq9uWym6EX87kz4V",
  "key1": "3L8Xp5M2B4wxswrAqYDcoj6RGXxvijvmYa9NDTFhV6YQtxV1rxVsV1V1ErCRXTKJ7WjYjtMfbSHGHSBV3MbxGAx9",
  "key2": "2h6NrZH5hZdGArPmvK92wwEo9gRTmHn2pTkNe2pF8tNkwen4iqNMAk7f1HBxkxXUpJsan75WtVwFAbAzeuzPxBzG",
  "key3": "2QJy82HbUbqkJnVcZKTPoUJ7ZjVYdr62Gh7zC21iFRKAmNPmJxGDSYQLp2gmNYRCa6ivZf6rLFhw7ycedLbNKX2G",
  "key4": "21gCVBcAoTfcaNBEW7a9JWcG5LYNyASEQ36NHUuNCcC3EA462QLUBTW6PB2AoFKdYKCdQxXSiGCMeUHRV4SXMMZM",
  "key5": "3ht9uZuWn2X3uZeNmz9xQ3j1bntwgo8tXi9y8tCWtTbJNJ7zdVZZ5D28RFaBcyEJYUkYWcaRHeQ78LugKwxFmCq2",
  "key6": "4rDtEkf5QFB917iz6EEWHWkBjmKvo7xun3Bdwq6GdrRrSSo4NkfYhRrXf4XZmU2eAtGwVeKzqC6aiQqbjBssQz5V",
  "key7": "2G8papi22cqhJAc2S8ptQiZV2zMrM9HHiYBaUuqq6neDYv8TWxnwX5LKbquFtnWXULGTkpYt6ym2PqmDSg6rsRYc",
  "key8": "42nNTgYU8yVNHq23Qq2XNzQTYdpCgAL6hkRAWoYpEwEpLA3eMnL3mrFVXnpxsxfA5xxfverHJbHrzSdAuVGEJTa7",
  "key9": "4WAcVWnaTPiuVf3Wb1sX7ujpBaJDYpwWfSnJcsuNVsikq4kKa1zbwzwK5sFPWsZy36D11Peyd7BB9VYKAfYwkWmE",
  "key10": "4ofLoAVukiRKkZsyCDivvLci5ugPW4UT9ZZ3udNLe4NYvAY92YmeB4HqLp8rVQUU1st8V12NZmQ2rsFmXK92N5DN",
  "key11": "5nWwZYtruY5Zodiujyo55tXpS2R74PuS9SMP4CvV8NCmVEfM8PJVBxVroA3AQjasytCnE9aFqtrarLCe983y3vKe",
  "key12": "4NLawfxRdtfEdDmF69jGmutMyyVdz5asgKPvwvZtkaYifSNWs252h1TL85tu4PM7pBjfiaTwueG1bm93NZhZ3Js1",
  "key13": "4WNNYgGCsyoZFNHDvTiALAwVhSyDw9CXYgnqKhNpjvWMkEfMhsxig5RYZb5rxHtyttJxmD6ZC21mPzokq5TypkGH",
  "key14": "3eNdfxCdJjGT9Aj3Q56ARTdemHL3X1cv6EHtiH4b92PUyinrZgumHYfdauJUfmXzFqpGwfeyeZkaDKR6npuYJWG1",
  "key15": "ZknFN2RKm9zk7Cot5oxnioUL5r9strqZZvnSbsFbX9szh5jmCu6P8CFjQZrcqcPZQvTCUvo3YKLeHimiSZAokVn",
  "key16": "5tLiDp87SjZ3hDhSb4jHAuj81waH7dZgutQagUo5x3XVh6HexZhNEY5NSwfgpoaT63TD2z3vbNvYUWpReXbPZMod",
  "key17": "2JsTsfbkYYthtVaFuqDfptxqUZmWCMocnJc4XuJPc7WfpDu6N6ueZwMqf7L2ff8tiDHPWfsxAZ8b3RDh9m3Vkyfr",
  "key18": "3dLv5W5bBkBSyAMoZg81kUEzhkfG9iMvWwxoatxXfmvboyJz27AiA3UG7eSbb6u7krwhasBnGE1ZM9knum1Fq54H",
  "key19": "4VwG73HiCqBySbLozPk8DQeKzQCHygbaAxw65ppypmbVkQmE1iMu1yJtPMvav2hCJYvBSXSnFLPrZ3Akp57GA59T",
  "key20": "4E5K1Jj2KLTsmkqpUZgvAtunEy1sv6ABQ9154jKTJBmBfiTMZbh5uk7sKdUbLub2tYekxyVsV8mpst5693fCcPym",
  "key21": "ikEtpqmbcBqFk4U4MiquDT5LcPd1PhV3e3hGFneTXAccMQUdxiMKNkUTJZcZg7FZHsunNCyizVqhCV4y29keLji",
  "key22": "3b2dQBf3f5XmYeZ7ZfTDiz2d2ksdYEeEnobRZ8ewQ3YQMqcuF4TYZNkbWyNsHt7edz5ycsPY7FqhJcctwWew3giC",
  "key23": "55SwEkLY5oLQPpAwuNfwT6faJdQHbmAXMFtYG9FVCBLn5bsmA45m652FcPzLFQRqa4575czv9AYcEnfNfp6eqqDV",
  "key24": "zRmd6p4YynEGELHGkcjZaEmxNPDixEyJG7tn5gJoTGMKzzzra4pSw2RYUsn5n9jjkwvp9jS9x98RWaXJeSxDzAi",
  "key25": "3MUMcNLoahzeVHdxdaKEafCrFk2BYepq8ecZrNcPrvRZaDLzXtDq5jQGy4q9rTM3EsYSHehcCFokCnWMShjr33iU",
  "key26": "m5TW6GArGnkRcUERtZGWZHDiZMpXnyTs9u88tYeNpqxD9XqwMEZc8kvLND4mXy3yhxgJyFUv4iJXLMJLt7DGJqm",
  "key27": "gHNVkJgEPVp4jwUA18eCFAVoZZVVHomSy8n9tQe8QFLwcuBW3GnQ5Lx6kQcuwJEeZd8t1tnc1NxZ7aHkxjjvMJc",
  "key28": "4RzjDGZW8KLVhSnKNRzQXGcosdEynwa7H24vr7Jw42vHjTF3QdScw6HdcuLcPhdiJeMmVa359j8evhRYyRXQxdT9",
  "key29": "iKGCBhN7ominsjwZiAumUVVD1YRLb6sczeVPjKTbZ99ZoGu4ynpwUH8xHnt94VAjPe4syeGN13wRMBgUzcVAMts",
  "key30": "5am3kMEUnCEmHx9EVm5EytYQvZP8RXjS5n8CkYKTG7a8FxMGoAbQ9VANfN6cXkjK26pzB2Zfz6NjExRmCE78js4E",
  "key31": "37yLQKGd5vgMTYdyABUDb5FGJCpffe31Y39WF36gub3V9RMedy8AtMzspwPy835owZLsrboKYJepPwR2WbFZwYqX"
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
