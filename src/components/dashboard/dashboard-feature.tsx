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
    "5CYzgaJssET39hfcqvg4XCc11D8R3HxRBAr9pyyyCtcAhLer4rXZuZpJtivBfZc57fTkkLQmsQSN4geB5FAUs2fM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yr4jvCSkSqZgEfanGGHUURcyhy3hK2LRjaz193dB1j1aH4UJ1U8gq7BDkeixQNaHQzCYupySHXqduQXdwny44ob",
  "key1": "2AxwWiacGYCpSZGWVbfXR6g9vQSeGC2Ri3o9Qd4cKkHCVTHgzt9WjV2PYJNNhzmDuGD5ABTtUC4umUSanfP7Tgqt",
  "key2": "6uiokTSaqxyxeyJy49gFhHbJQ6XntTWkrKLJn7ENdNAqMLSpwRvrthAgaUvRrUeYQBZhdrbrp1ZsdA4PnLQqbQ8",
  "key3": "2Xcorktg7fncoa4qiuvaFoXiiexBw4dRWjGz1j9adcJGdJET5p1a63PHZPBaY7ySbBX3dmBFK5vnPxe72yXKasjH",
  "key4": "46s1B6LCgJgYiRCQAwcPEjWbCjuTtAY2edMhdEMvWoYNXBhD8HaYxapQ4muErzFKcDPWu3SondCkmZ5ZyuDyjYUP",
  "key5": "VmNbzM6qiCuEB9tHHrEDqxiZZYEHKadDb5i8hHsh1zF5bhYUuxoUiT6bJxUmU1ZbYCkf1bcVTJRup7kKnsNTVGL",
  "key6": "2J2yrKEfyy6hWoabfGznD7JJZWxVGrkqyoj9iUgeDPQw4DwtpnHeW5uWcGm6vQSZRXr16XAVqQWXAJtyjyBQrBhg",
  "key7": "5u2XozfeRbXyByfMqHdmt4KYWs1WwMTTKiwntNuvnCetUwNsuLZxZ5PNsKTJueNJmsQYciLgynqu3FQRb2QgBeP8",
  "key8": "4YkMJTYxpWwhGkspVCz4QDg6qMuCSXQPGD1g37EDaVCgwuYKwNm6LbgnKuzGYJ3wxhsr5WQ44BFpZRxVW7rCby2x",
  "key9": "3Z1dQHuwBDrXKYHradJeexkehcKrCnZKkXzZ8E1PvUKwqxX4njW3ebfJ6pToXZHjhXH4XVoxpvYNVQuJCTJis5X6",
  "key10": "Diw3spr2uX4ZgU9va5jJRqKyMBEuJsprS8D3MwYcMkxDV1ZtYjqfCjPqxWiUgUpBb5WeGKmRvU4cpBzVxKFeWQB",
  "key11": "2yEc3ezpXztiu9kRwBcss9nTJU1WJSgbxuG29CFnsoEadUxbdzU8n7EY8kmAH48WHTHNjzhPd8mxq9UhBJnJ7U2J",
  "key12": "4rRBiJPq1JtXXfFPPSFuSBvADvhpm1jjDhTgRZccpVp7YYVjECfLrAwze6qBmHzg7JaypRpLkuLqhwAszE8G3Jwn",
  "key13": "5fTgSpPUJHMdjxqcd48LUHUrDsoZwPC1hRDapgtGmC7xSGWLBVAH9WUiYzkCg5CQiwSSELoTsNbFXEHuwN8Yiuka",
  "key14": "35KmeBa7hqBTNn26pqtqDzigDXWf6wiNymg2qWdFSDUzd2upHTiCkfRt5LazR9MhP4jXkgkkX3W7FKfaKkMDKEdQ",
  "key15": "2zsJ9wxSbmdPqiL4uucCmUjZXWCjj45ofVBcAF3MKKQtL9jGAVhuJfCLnwfeHqvm5XsF1D2Zp9TpTWLuAWHCLfju",
  "key16": "2esRjN1e9VqaoiXPq1rHos9bUbra3R3KogpHxT2BQAZXyjcaJkhNf42oFZGipf6Bfs7hzMWZQr6dQUyjiPyGWomo",
  "key17": "44SdTpb1jUz257nwTgEWGuYMZmo9SMNbL9gXkaj658T7U1qea6qTPBe9pD5asasgXsdaj2CLQiohVjwCnM5mutQq",
  "key18": "2Ja6vUov8mDmSHAebCC9PTLBJHMbEKr5muhHZUcrSD2kxxPJrWv8GYqgvn8nahdefBnwyJnGHcFQX5gFCZCPk92j",
  "key19": "39rx6HuQ497FyLbNGFiAw2zNcddnLiEZt6Ljng9yRyUadPkHW32MHDsEXaFQtgbzTcyW4S1FeCBCZ6x9ik74bgGt",
  "key20": "2YDKV8F1Zjv642NXfWfDrnjQPJ7mQvu5GcxNfhN9okYWDBq39EAeZkwZs7ZQFfdsLpeUYpq3w8pgEjoLMNbBHzPB",
  "key21": "5TD6QvxM5kfvcc1GqLv2dT1cgphyMvtHqeifuWqVUT5LTvHakiJwhfNym7pE8Dcjf3xQ2hojDp7Z7gy3ZU37aGnJ",
  "key22": "2T9dUt4fchyDQPv29CjpTHg37UNsnt9aeTY7zWu7dnQwfYJwNvqPgACubNgsjaia55Vn1krqmhCfDNbSZkEPCiVP",
  "key23": "5sRbi4nAY5TCb3qDxqAXhBRQUp5nYPLNiJbeMNoVjCDVsXQtGQTMT1astdFWDkVWxwwV5CxUDtqkRzhUkiUacCof",
  "key24": "57XPHZxFDKra316wwMDgdRVJrej95ajs3z5E7vySHQTPfYnsKWBRPpKCtKFAgqKCncu9MMRDna4peXDk71yPmTL6",
  "key25": "3NFSVtBMJZHZ2kBvh7N5yK3wtx7dQ9ERzWZV3thTHMVvsCdYZ3vjN6tJodTgULTuDQcsbQZvCthbZKfD3iEeHRy2",
  "key26": "4KyLreQ8JESywrcnCEpgXjpKmYbgCkAJo2Pd99j7UL8Pyr1LnsEe9VbNNX8pCfAzkwf8AQbsPAhmViCbPjMMirYT",
  "key27": "7ujL7MbSbjosV52bJyNhN5L82ubCDoAXot2WpeyE8KRcm7sHZMYmdGC4saNZAKmKNSNabAUshe84wW1n7YcvBx9",
  "key28": "P5EgiiX9rbAvGZieUEqYsiKbFZEGB73d1VLr2CiCMPPggLZd6bZ933JdDuFibJHrsuh2qa7JrmELQqH6Di87cf6",
  "key29": "43Xg7amgw1ZTLBGbtK1yeNyXbLzCSrHjnHjnqqtvwNtUmaGsiESAzUh77y6y45HfzY9pmX6eT2B5SxjUTrg5wqAL",
  "key30": "3z21epgZHc21b78Gq3LdhtVhqnyzUPhSMMPgG284WuSZPjzHjihPHAhQfsGQp7xZfMLjoVpR4hHQYHjHgY2q2pGf"
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
