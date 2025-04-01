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
    "2uhLFNUaQqJqA7ZQhTFmiQ6PE6xu9MBD6in8vzQX7m17o2ZEV8azg2BNReX6hGPMdBsfwPKDEeZcaqw9U3J5i7Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MGCVZemCsSrkpeMAhNtT5HVW9A3H9ohJkSVRPvL8ZZaKDfcDvWn9eH8T7anqXrRUQ6UyNy6s6TkhzLZXvPKD86s",
  "key1": "3dnzRZm4kNru8oopcGh3DfmX5amFFxYXuf8Vncd9iT9VomBdN2WebWUvFssjvAeXMBg9uw1mdBTiCtthRwkVXYs4",
  "key2": "56hXxyUhTzSVw7QdJQDdbnTvDWEWZZtZ7T6Yp78ft3c3nuuTLECkzGETfzpN99NJ8ciP4298ZhRh8qotmZrTZ1dD",
  "key3": "5LcDaJK94r6UuQxiHgGiGAJQAAcnrco3PvbABnpSKQPu8fJdmnvvdZj45iivKAbgj6xKR14eNVmSVfhXj4eTQJ11",
  "key4": "zj3uaGZaQ4Gxa6XjNw7V77KNSTDojqNdxWpEWEKmwQNBS7rpjuW4emcFzy9tusEqPpj2XFbPusFq8votjciD2b1",
  "key5": "4jYB3f1LYEnjSLbRfTwg2Wk77Hvtnpncn8TpbD6Xti7g9asgwkEPRYgdSNdHZuMxbbWHShjEtScuoN6MLcSaMiag",
  "key6": "3cXwKHYc28k9X1MH3aYU74eRbMUZqSDYFxRwVbN5D36rpNt8KhJBqX9azBenLXxpTTS7cpbxicX5R58yrCRCwHYP",
  "key7": "3Ldf7S8xgYDh8t8bxH5AA4Q94X4sCzfLtRPaYu1wKbdsfH6sdcwf41wie51gNw2JpVyt5by5VPY5Qik1Bc91DPj9",
  "key8": "4juGHXsWS7vtzoTWaoujLNj1MTZuuv8h1et5i4GZ6rgvu3haKD6dzrX8JhCT9mHDULwA6xaqL5tdNfPwhzwQqUMY",
  "key9": "tVBGu1ZfKfTGAY4csd99yy18ipH8dPWbyirBDp21LXHRd8BjvQpFpyFd44NAZzNaH8ezWg2DgV1ak7bkCE1VU5H",
  "key10": "2BmEVaaQkKAFZvNP5SCkQ5uNiJ5bPmeb5TVz1AxJTUQFdc2daC2QCzNUdGGqZtcq31tf7LhMRQmqMkgdoguETnnq",
  "key11": "2pzfbTrR2HNdKLLG5A6wQ4z472qnHpwwFcGZZXtrCz6ZXoLTCm7jVN6og5RssxBUVKdUu7BWqxsRWHBk6iSD2Ctv",
  "key12": "5myYwEjkpQ5zM8q5gPwCsSy9voFG98dPo4ptJX5LC22QVkessH9kNQhfS8H5E5cdLQj7Vjh8UZwsjM1vGj31eAK1",
  "key13": "3uq4SJkM8b9AxqUZgoXCDMFt614K1VXrnVrrf1LD75MaGQCG1p5ixi3eH15KsWqXAcXaDqZaHuXdFXHcsb3igij1",
  "key14": "4fGU4jnH3xRrAL16ejCkY2grJsoMFaSiAcY5q2ZGho8eSSRU7gW1qN7uoneyH39yKbjRgDLvMFg7Yk3j5DfU9YFw",
  "key15": "5gFzouWXh8BvRrqRWGqGr1zDTwYYfXr4Go15qCBaE6gyYAUhQimnfTdwxhGkmdiTtqRadsjGKaMnqvmnJvvcNQXV",
  "key16": "4dP1utqX7VrvBJvcH6CexTLKp3GBDcRQbrVUzzXSp1WqLE7oCHK2rS82ouBMB68t3Nd1rprYx63iYQBxt5RXQD76",
  "key17": "G2EPwKqDMbhHkwUZWSMRNH8fjAce8hsW1EdWLRASL1uE8xSqYX38HBvKdUay6svSB2LCc8PEFZAPPx9hdEeEgiu",
  "key18": "4yjLUWf12WZz6HgbaAzYmhhBuNbgSoTJwTJZwnvzVzmgNyZMxJu7wuhY1jNsfDnaPf4hSZUvaCVrLgkFaBTGTBU8",
  "key19": "5WjtuACnnwwNzNSinyXyEfXXg5zj6UxE7vXe33n1jmv855UKWchhhmsovWS4KFMPNGUdYidJasxZTQMzxxZBSF6Z",
  "key20": "36frXANhi7fnaL94GaUgHEqNHqcpC1TcT5NFcziB8QNBohf3dcC8VPL1zEft3HwQe7hjDsUYb1bN4hvHynHcAvSg",
  "key21": "3QYTFXPXutAe9aQmJgVj3Y1JezUPAsfEcRHXqvskh937NNPBcsWD7Tvs618PSjrBKCh74RBr32Uvg3MMQFGHmptU",
  "key22": "3rWTwL3QaaHruxXSxTyCvKV4vGF7rozw851ewuccaGoxLisGV4XZB4rJYrgTvBtzMDcMvTFMmN5wL6iRKxfZnX13",
  "key23": "4TSNjovyoFYGb71MH24sgv9tRgUEFiqfzcXCm91yJwkrFRT7T6mLWfXRGZU2xsVVT19LTE4hyjntuvTDVzXGZFt2",
  "key24": "2DNJnWaN5AiZSaMZ8kYHpr8vmKUPYeytHRxkhuhyRTPMwQcRiGmA28gHzfpc1LQcGR4LvQs57nJwGmKBg93SY7sF",
  "key25": "49Cu2SSawUdoPVyiHzBceA7HVogUcWEPjb9aRrC5ieXuL4ANtHSeWuCuBFkPAup5n8EXRnuXMvgprJvQ21vAT6p4",
  "key26": "5CjnvnJowoEVn3uE57dwx23UqB6JccN4qrwLKUXwqMH5166SJ2waAszA2e1zq6V1xzCTcPoCs4nYuTxD9GmGjNB9",
  "key27": "JsnL5xiqcRD7tM9Y241rDtFUBo6MR65qC773Lz8dunJpfPcmzX1KpZLSeyZgrEzjxct8ukXaczmCbNyinfm5CQb"
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
