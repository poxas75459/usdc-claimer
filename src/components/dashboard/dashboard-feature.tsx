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
    "31xfL8d2hMKYrTUzz7Rn2Pp1wL9maagPD2EWKvp4nXcuaMJNKMoZNX8GZuDZkBVUmRXqpbBHPfTNX9uT1p8kHrDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAkSN1DTKBPREjnvwbq4h8EDnzE4FnB9gxMMbgAKQyCwMGdMtojH4ogEmPkxmfV5292Hd8cyVZG3xTEnhbf4wqu",
  "key1": "5PBN1qaie55F2M7frA8BpMonL1NBKLe7Q5DXbYET9pzV5yuB2GPSJ8ns1QXiLs7aTtZnvoADKW51aLqVrJGrXWFt",
  "key2": "2s5uiYSswC5jHnRwEjJv2fxbpsmU31dgYpx9L2t9M8jeg4iuANSqm5Yz2xHeLwbX9qQMWDf4Y4KmLsesh36QWhV5",
  "key3": "5tBWbXJuojHAy8Ny1sAtTPeGjqG8JAZtwKF1hjYkF3FZtB7Nb995PXryq2yQQrrKAfsupYVtTQzFJxyxtfYdimDi",
  "key4": "4PqzPqZrPJxJD9VHxqC45Ayz5ar2bdkvuLgTw8A5YHJ1GFeLbpuQcAwtFbX1evP6TZrXncM9kR5wHkaNKyEH2szX",
  "key5": "5gNozXVRzVSbNBdkPxnU2KqNAe5mmEdipGuLRjZZtGkeRNo65BKnwnNctxqefM25UQo7MeyQcLzeocUydidiVRNm",
  "key6": "5mwzDU76VHsUAvLWV37EgXiJQiCAYwTJtx5BvEjeNA3c244P7Kx89oMiPcKfv8cdDHfCbTNm9fTRb9TUcR3Vwmqy",
  "key7": "V6Sj3yiJnt5DfbxVmuZvwZXSZdeHUYKdawCbLBu8cnqh245J1T3Lc5z7Mtd5bAzNC5EEPkYHkXvgNm5FfY6HHGz",
  "key8": "21DSXgJc83VZ49KmqaLruVHe3ciZJMC69w5knC69Aetv9SqYT7qgzH4HRRGaeVAQq3zNG6rzK1uU3EYY7fTFyTyg",
  "key9": "JcxesTfgyoYvMbZBH5j26XBE2qVK8QBcyGs9mdbT1Ry9G2XjY99RKKZXw7f9exWaxor8jJ9DuZrRorxbMGu6vPu",
  "key10": "iMUgaZkEdu5UmWi4YNvQ8FEvQ4RgGEnvUydwHmaRm88u1qQEV5oHqEueK7FDyJRcrRcdhBqiEEe5t4xXSDGBWYQ",
  "key11": "45DcrxrFA3nvRtTp7HJXeZLdsTKq4zz3fZQfrAwhoLAje3eyoHQCeufvBmhsZvvyqkze1fVgGdMVxzqoER2jruPq",
  "key12": "d3JWDHCPcg1z46F8GWLYN5nfixqBWm47yGVGrTKbZU2Y6aDxjSStGSbdTURZ8Xk65hG5wpw2ALtnNrvTk34vX7v",
  "key13": "2t6pMTPy9GmY7ez41AzYtNi9FL749YrkdReztaZYzBZ7jQLANbvRQSd5uGYyuFtvZW2NEsH5eKG9rtHsdLPtFfqJ",
  "key14": "4ajeV8fQ7nn7VoHogtVG5KTnhRgd2UHbei4vJLWvB5TxpgmjpffgRNuVi6tzY7AmVdhCqkXSHSbjf4nWRxKqeF8m",
  "key15": "hk3zgN2sgw25jWYDYJ7xJAcEGc3jxBRsCEGTtwLRDTenHDB3Z6mQQREe2YWhfeExe5CKyxw6Q4jVuL2Vp8pRy4g",
  "key16": "5Y6E4BFz6ryQJ7kxxYN46xq4sG1CpnNjHFyPbWeSFkxk1dEV6Pba2MW7quZSDxjVdXUfP95ZZWFpxUu8rrqYJT9Q",
  "key17": "34TMiFYEqmmAoRqYg3dgEWY3amRmPCh42n1iJPigQrMV4Z6uPbfhDrKXcryLPzyEC3ud54RXsHnXQJBYUNE3i52C",
  "key18": "2EnHJA7JEnainF2wnPzPNDVYKxKzaJ2FHXcKyMCWyoPxqGFNE2nc913arBDBczXi2GQnx7d4xktzZMQai85ucb9N",
  "key19": "4c5jWideydpkoDx4NTV9r3ZVnj3Bho23bGQ6LSRatsXAPXuDzrFDUqN9JXhBkgbYX7pcKZepe2b8JpowC9YBVQMZ",
  "key20": "JWBbndZt3ZGt9VZ1HTypXMDDC8G2v9P9NVSCCf8ZA98kmx6NkjgtMqwVScydBke34p7GzGAMr7vEfS4vvF3z4Ys",
  "key21": "RQ49eaV4hfGZTePuQmmLcDRftBdYGVWDvXvobdi8AU7ZpPmV9sTQHVwyX4yodxgGYLefkgk4TFSUNc5SRSuMhvr",
  "key22": "2XUUoXsBGMsRABg5s7QMkoLJGhTgmGFbBYjLZ4Pom2hDu8p8K5YwJb8KD4WBpoSt6YEko255gBY7aNsCLbJa1GMn",
  "key23": "37tnNV87KbgnKEaH9UASuQ3QoCm5abUSJAjCFNA18TXrjpWbmMSx6gVidd9JnbPPtmHMLS4y5ycaaPszrXrfvRaX",
  "key24": "2jL1MpD8mWvZBfhqje9uweXdCMSp6dPJGf7rWL1CSfUpfppfWAiTWnJkzbPdR5qKQ5mw8XDPm5DgtGdTE8y8KXvC",
  "key25": "3onFi4tKQFudByKdPKpL28AHzmBqa8aGU1D8WKTmAZQd7XWSJ6CfMxxVwHuo5kSq5P9xPGhGysS5Zzzpdw3pQFvS",
  "key26": "jnQ9bUJBttorMrR2eddS7psSEpZH1iuzNrhGHztHxHsNhy5K92qFnL2mPRqMNXsF2UcEpPFQGqVYUaGszAfxwUd",
  "key27": "29bgnbBBVn23M2G5cPDCZ6D4f5ASeUhiKjBDaxbqmSofSijiTADjTL1MKMz1cs9HLgy8eNEZM5swEdpSenZmFZAC",
  "key28": "381SpEYbLtxTK5n1CdsQPEUe5scv2BkQqiYXKFTup295GXzbDCp9bUZ9F668zTvn65FBZKCutqFgVys9NUWgBwSw",
  "key29": "38AyrN78Hv9Cewwko27LPxLkaSz1nMrLWqgcnj91VVa2tX7962axhLMp3vbEcfEcbosn5Z5c3T4tLhBeSLKNA6eB"
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
