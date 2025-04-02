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
    "2VDDn6EKnwPBTrdd9bU4NGQHwvhL1MSnyXy98ZsTSb4f3hxp1gvFr1c5CEHrpyXyfK1aTJq14DqP1cgFHmg1YkCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A94N7Bmui4EVQg3Qs6bb6jXMdRmqkASgUM86v9BK22cX6ZAN4TG9ZApaQWVyh64FDNySwyfV732KwHF4k4YwAJS",
  "key1": "5eSqGz5xWmUcNYSRYiwdUL4npoTarA9GDvzfTjfXv3pzSjsbQyHKTnRzYWdw2UxaGJ9S3CC7oUmdWfbNsvuQpVHv",
  "key2": "2KQ8QJAbgRX6EAC71JR1WsXXPYhXJ8DR3tnmjC7gv2yf5yVnsVrWmBYkCK3iNFV1mkStCBp2e4X5vHjCRuNLGmSF",
  "key3": "2sHRguhhFDMJuHybk52PWZmBQi57GphVBdq74oEzk3U4nH7v6pPAJeATLuSUebWimotDZerhDK9XRpm4V6NoX2EW",
  "key4": "5eSTtDhzgqz5tnv6VjFJygXJCdbxxdpiXiLhzrBzAk5GvZD1UtFwKvChrJ5KFiVcsGnFGkEy2NErXo1YyBCcbZTW",
  "key5": "44CXW67nGk5YGiR85vDzVWnEXaeJ49JBUU2fCV3NXpNpsg1UsJ5xh2gWkRQmNBMYKm5ujDsRsiqUkwzess55LgJX",
  "key6": "KueMYUDnEQqJXVchnfyE8UQ3pPNgtwe81DDWtKsF8NrnguQggLkMvJ9WVtbAmF6H3Zih8o2184GZTacs6LGX62u",
  "key7": "25Ue2eCrEMH2qU1ctBvggGxJkCkfBmd63VjSGary4jVEtV1tVL4fiqR31q2zCUgmChk5MpyQXuHsb5TAHWWLoPb4",
  "key8": "49nHNkwKoYKaxxdgwW1v1C66kaBuCHXZjFi6oPRLCnmNzmGaGDha7FY7EDUh4NjGaWiyThhi3wTnGRrrgTgNEYxp",
  "key9": "4GwrzNR6LZpmH34yTjw79kGLsdfddFBeHuxQ7tNrTaKuUrBwry5BvK3iwPFqKcvwTqmWYyG2mBZAqEHh1uLy4Fmg",
  "key10": "5M9jkNkTXHRD1H17mzpZCj3k85z8RZVfYA6gNbDGTS2Qyz8BhW4kJy7BeSPWDWDJbjZBspDK9jsC44PN48kVma7B",
  "key11": "FUtL4d8QoDgDoRND6RnWyHUefLGyDAU22qK2WQnjRxnEBJR91u94XKxbdXQ4AbcibgtycuMHfZ1CNnLoEWhPYdf",
  "key12": "2ypkFQM6krLjDPLE15KSz5VdQh5niuBasS7vNLxnhmhdRGCwermA6wke9Dnyp9L6SuuVmdC5SzuZwF5eojNEkGaj",
  "key13": "2QvRBUZYNy1XpcWDHskBJrxH24fnCkQ1QupwYHTtQofYxs7z3SbkBCmdKFvQeedUMw4aZTKQZGiBdk944HqWLMFo",
  "key14": "4pBNddo66BGcnqj2PqVC8manhimAto1DsSsJ2WNtMbH8PP4EiWZ7nhbTqH4Ku33RgEwLbwfm9adQxzbbRqM2MDyQ",
  "key15": "2ndkqKFoZZVZyZNzSNb94ZC4aumT2NuTr9iSkQibZaiyAuxtaDp2sjZwbq2chXkYUCc4XUS4DBZrM7FyRjPYwhM6",
  "key16": "38krc3qSu2DDadWmBMBE27mrUeSkNpbdmdUBXTm6JrSa8VdSjDDVg75sfCJoQFhpBxRkB5caPGivXxffqx527R76",
  "key17": "KCGwQibmciB57DyXM5jgvnBGcYD9wxd8YQyFWzQPhM9jSBveFh9tGco18SU2mz1RbCWGGEhhduGvAVtu7BKQ6mK",
  "key18": "2sUjwoPqyw3mZVBoBeSyvpuhTHwYeWJiAXgVFuxhkLQdeUyiaeXZikdkwBqSLySqNKboaKNGJZeXz7jeRgnnn58s",
  "key19": "foLJZxSxDweMhXci8SHT4tpFapcocC6WV8Yn8v7mduuhucNaaegX5NUbMVV5iPZNr4nzhgs4w1Jui9DxDm3rcQ4",
  "key20": "3z5v3xpcv8TTVePKpWbDM2cSXKrvQWCiHRr3RxciKzqDrAenm4kPtntL8ofRdwAqrRCDEh7WuFyqzT4M23U8Mh7p",
  "key21": "5xD35BAbNGDXCviyRqUHFXzG7QyfGXbBLdkXTYa3fhE3BDEbPP5AAgTtnxx9p7ZzmxYSzygE44yeMuUQY36enDYS",
  "key22": "2E2eGXJpAh9ncuLSipmsp8gb7hxvXnMa86ytTmxMZz1AUukuK5zUe23uFC3xsNfEJDAS4GUyHdnCzgNodkW4ZafH",
  "key23": "5GQGWMYXgaDbbBktXouYNr9c8nUHhgJqQYCTp5Gr9wzTgcfyUDxGDcnfe8Rr8cCfhi8vMT9dQERhnj2PGmy6sr8m",
  "key24": "244vwdbC5ZRjacx9FoBeRJkNEQGuW9C9vF7ZswVERDL6e7cB87rEqwDVLqteqXpTExmgu1eZKyfT4EZK3Uvy1LhX",
  "key25": "2zSaRb4BYDckJWjg2phaCajqjJHAGLM1TJmJKrJB4M1BgTveGqgvsPt4Vv18rG8jWM4Xc42qBa5JBV5TvjEDw2Pv",
  "key26": "3DFwVe9EQ4GoDDVmo3n5HChyJhuZQWmvufB8DGVeCEqFpZUwCcuc964E1SkoCJ7ead3v3zfSRWc6dWy8JUwrWy6J",
  "key27": "3NUTvHmw4rdnM6fdasrBBhYdwFYuuWr38W6CUoXp8VJQy6vWY8BHdWk9DkRkAfBsKkUV3xP5VpRC3aeswpYowFdd",
  "key28": "grFNgfhJeSpdwWQrvdL7BfAZX29CryBQFEq9LVdGBQZfZ4P4u1oUeMuDyckwehiJ52CocVWsbEp7xBSUCEULEfU",
  "key29": "2jL71Sz8mWYqNX1ztRhaGEu9b54RshkTswDBoDc58ogpcaXNbGuST9AMpZkDh5SMmtWitpqQt87666bjh7vXLFTJ",
  "key30": "4StMzScmeJeGgChEcpKeqe7yn6yDgMQuXujXZE3SDMCQgK3BMdW1t8iRX8FDgtjnwGpyEDFBuzQ1FGjYGJpvCrGW",
  "key31": "4PDyAnUY2b6pv9p3ZuwdSfPgnnBRFSLefraAR4Pk4r9g8Nxg2hNCY6Ktpvedw6MfGz9yemQeQKbYEwkrbJF7UJyy",
  "key32": "26f9mScVFTDDcDSCdvad7E8aEpRAD5NqeP1PtdSrKnCChCvACfWdNCMKeJGziqrB5fdUbPfgT3K2oP6SNnwsFdrc",
  "key33": "2BBXzHxwM9BLapncGffQhuJyEdpvq9wwqHriHFarQ7f3U3rkTPAXiy4mDy7VHT7B9DWw9MqiDkjeMCMAyiHyqt9j"
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
