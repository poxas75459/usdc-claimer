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
    "5r3wP3sTvfAR1kx1SHDnukYxa9LTVKZy9QDFBiUHqTgBBBFaV26LEaYRuxfuha42X3rxhooUY4H2dCprNfAwYCa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCMd6mZfmYQctVTaXA71aPFbcwb8T7XJEGVbxtSvXQWrdjn9JwwkqK14wnyiADgVeXEeaeR3aGFraRNtgqqzG6m",
  "key1": "33qZcGJMG6sxzbBeB5UW6afJeVT6AJgqKDjkRpxvdz92dz7jBdzcAPeyt6kCT9JGkYrxUAesBoy9UpJ1vra9oGgo",
  "key2": "dHdnfyGspqbKWfKiy1hYtoW83NdNYQpQ7YM1N8GykgjeUrxhMCZ3Fn9ZqV58cFa2mYMWjbM8pKMhFuKUTZGHYtW",
  "key3": "4iuaf7g39neLx9pAVoh7dUr239Gd8bmJ1FyqP46ay3gFYvpqhtCjzMonTZ2GvkuoxKBc159n9WNMurHuUrHRbKyS",
  "key4": "AQHFejUFPifvAuzcsGeDzXADeminxe4rAvYv6JBAhPABJFm3aBWzTMrT9fDEv3UHcAF5VhRFkC5tiurvvdy9fFM",
  "key5": "2CupR2PBZdKySYqLyGMJTpJ51MUBdbRiM9YdkJVoybXgxsbP2sCPxczNupQ5ZfCzpHjV2xhQNfuQeSmp3CikyMaV",
  "key6": "31quGTRonVHRsa3Ecd7Xp3cDfYYpts6V1X1zdDxETJaxsGgxy7m1FwtVGrLBSjEiYt7e7g9P5rSn6Py6rWgZu39H",
  "key7": "25J1yLp5cva9byvE8mvnNJA9dtaE8RFbFSYdbBRCtrzw7TG71wV7VWg9F8sipPKRiKhc6nKUY7Q6BWxr23A445Xr",
  "key8": "3bbLKRsz2jP6qjxV4jGyBSJERDYi4Tqi7qZa3eAJK3Xz6whvP35a5vGqvd39NaepXQpJnQkdcNeb6h6nox5Z5WiP",
  "key9": "5BKJFyMd7rhe7WJm3N2GKFu3q9uFgV4pbmvA7UP7teiXhgDWuk7BVr8wSTZvZgcf9m9gNRmZoYSU9WvsCtgRZGdL",
  "key10": "4daxZkS8NcCPiE5rmivxFd73W294uuzKPw9xWMJveyj7dzpPB7swvvwah4mHAoGJgsKTHzCtbkDj2oy5ELQ7JzTx",
  "key11": "UJY1q56X7CcSorQZEC8XeTNUrFmqVWJGxSpo5DhATizYNjT7n7u5mRhNwY1seQApHKuDLk3kubGEJfWVDG63ExA",
  "key12": "2f31Ntu7iwFGhsPAH6XFVyADix955w4vem1TwgAs6L4QxfxdxSULSLDE3m3R8AkrKzFTxxU6WNmAXckwt3UjzsDP",
  "key13": "5wJShfJV9JxgyeY9j6x7zyqhET6U1eUy6CGsf7EDUm3Nw1uEaujAT7C7Y3eMmbsdaewu6JjMssqWDhcdd1KVjC7C",
  "key14": "3sXKYsZE3mBNpffCG7FYu8qr996WPdKR8Gw45ejGWiic98i2qiPRXoVTZrH47ho4E34r8vVQp4p2pK4URZrZjuLS",
  "key15": "2MWhmmiyPY3Qkncjdf1rznAiaRQfdxMjuYefZyNtKSGgog6frq25DGRuntLhEfRjcLkrJoiuTBSctEQRb5cuVBJU",
  "key16": "2TZiVehGitzb2DJTeac9j9ozyX79iu5UFkx1h18YX6aZekGRQmeNDLPcaFUhzpjGSPkhxFUGJbioXCWMkLeDkRTi",
  "key17": "57sbeGaKBFdU3nJmhjR16Psz8Dv5F75DtyMsfWngzseyAmAMoC4QAkmWz1fEfVJq1uZ55VRy3769kEdYgvq9Jnqe",
  "key18": "Cj4koVLrqZoNxoU6kqUAq9bBK9PQYdWXSENToEDjtwFCFiARYXjtmhSJ7NdBLBJYH364hEBMfqoCNCYWekh7Nuv",
  "key19": "4aoLSKK6P8BgQuc7Rsmk7vxfETqmdhWe1SDfk211YGq9tjc3cHzz3P7HmphrC9NX58yQ6iALRNuTRJq7UPtuGR4b",
  "key20": "zXq6QybL9HgbAjXKtoDXWzHPgNkGAEtghk7SVpg9vS44jg6pUPwCs7fwsoxBTeAQVJqjkxFMNf8kDytSK69eWvw",
  "key21": "23NU1axf2osQfecunqq2BwoFeKhX2kFJQ1PT5F98sC6GCfFrfR1iDH3tZtTx5aPyWUfuRPdQfUw7uwbyjaYB7ed7",
  "key22": "4xyKEhsRwGi9dHmkYZrgLnBLQUEEWnFA4UVBn6MPTtAWr2QmCCwz2Pd4GwYW634rCbLwZLTCyKrznfoAWyWC3Sjj",
  "key23": "1MgBF6VVDUpKvzJBaAmVjQVJVe1KiSNELToH8kPT3awCPS9YiPTQgbaKBaFePhXGodcytd8ruzGx9zvccj9NE8R",
  "key24": "LZxNwmdtNJ9fpw7m8Ny59RSGUQuizCq9fzdwdC4nGScGQoXVDNDtynMfirRbt68eXX9KpistQxDo3nxLmDgDVne",
  "key25": "4YeQNwuZfJy41hrqTq5fawGdzRAbWMovmeoyAcbhNGa4BNNGquGwR8Zj6yHhJuSjQ6763h3PiCCTmWjNLkHAKt45",
  "key26": "2ddqEsDCaMSN7qQ5YUswSXTZxyLFx3Q5eNem8ePYPkZ45zk9ECA51nYTDHh2NuCXyGfeFBZrpkMihjAQhEqYWXKd",
  "key27": "4EujndmJQqLAEUzKs3jKEnKvDidnrKCMnUKJLQo88TX1qfXjFuaBfpysvHXHoYiNRXTZwJntSmxgunZW8sqyEcJv",
  "key28": "2JoEKntsk2KEwRkLd5aHzZQeHHuNTYZo6nP5V4VcxPEg3Hp1ubBrTepX5avqtc7QfZ9GctvpvMn6NgSU6LNL53oH",
  "key29": "3WKUG2cNy9yDMHBFVH7vNmrLTBMEpLSKhffFZ2qu7Q8Gy6a1mi7Pxhgmdnv4x1QUepgcAH59dS5ssiCLkDEEo4D5",
  "key30": "3SgSQqhMJAwrJ7QSiuLq4n1rq8r8ZjGGa8tDQPMv8f8brQzqggy2AiU4wwp8R2d5Tk1x5krFgFgyVdidwhB2RkBT",
  "key31": "64PkKboVGYKWD5xZG8MUDi65TdWFxTPQgvLBkT6ciogSk9SGDYYqaorgjeUyqtqdJX4jDSqmZGvQy4qUSAWyLMFX",
  "key32": "5m4vTi6WkQ7rrHMgPNMx9S1UJxLviZamLxSTrd2NrVbhJ1z7LEFTYLeLXtQ3y5d7MQuErM7YN9HmahHmYfVuZv3u",
  "key33": "23cLuQF1u8S1sLaVVxkE85WBF9XJdj5syR4kfTiptCkmVwPncWFDbwSLT5X7p8YSyqeh5c6gPrJgyy4BgE4iJTzf",
  "key34": "2bmv3a3KkzM1DHntSZCZy6oHePq3v5Ua9uq2Rw27Y5upGTDoq6sGahDgEREKufeRvZb4SbY5XJUWxh4cnQykwaei",
  "key35": "2zDEfdVARrCCQ8CFGBmo2mSQEmTXMxuYTJxGouL6aF7HimWNsSrTA689F28TJLSM42fJqPjKaBn9KWWXTfZGvvtq",
  "key36": "3vpWVbMMGKjmk1fDv9Lv7hrxQgWFpLdShQ7aLYijhURdoQJEv3acSCY3bHxnCCZhBnDP2dy1pFDyFpJRzdA4zXon",
  "key37": "FQdyW3Tb9q2ZisxTspH4Duj9SrkcrwhfbmAFYpXTmZRDHBGRiFhq1t7KTUGxU7z8grW4XQpw4LKwUomtVjaLFxy",
  "key38": "61CiFLTJgQzsedPvKX9YuJWZDc55J8ajXdY7F4tP47UjEZa3VoByo5kKWhRjyWvHpXuxHw62ppdYiLFtkv77xTu3",
  "key39": "5JX5Xurs8EyYz1wwF4FUaQfaQdheRaK8EU3xy9BCq3pSGeBcW4NU6QsNwL6BdMaUyfRS8XeGJTSkXGPxbRrhAjsi",
  "key40": "3gafDz8Lh1GsVb1cXTpAFGmYGsuybAdu4h4fqTXhA5XQCM6M37vPGYTGXwG7gFQMadNySkfMLichG1U379aURdaQ",
  "key41": "3ht3FbqxGBMtcek47Zbgnjoi7BgmGdCwJApBJ6b5ixfmjugyXVMmtjFEioDVT5SNZfmPjfqLS4K5uZ3c1yen2zgz",
  "key42": "39p2HfyHEVenDee4ZkMVyR95jstEWSz8R8286oztyY9rPHN5iJwmAgTCfgpcRF9MuacL94GJrjnSCkmdUf9Jg4gs"
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
