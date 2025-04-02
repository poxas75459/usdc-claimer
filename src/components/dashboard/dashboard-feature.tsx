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
    "4gQ5avT1GHpdgpMPF1onybctNEcc1ALGBqcSndN9RDGRF7VYx4M4ZTfUB4oaqqksGHsDyWbivkGLRg8gznohENJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdfReJz85pkqwcGK5UUmHFMk84rVSySsPBcikSqaQB9EQgwkjYPAPSdHbJhAYRZzxHpkz3p15qZyecmKQSJa74d",
  "key1": "2fYna2Jacvgy3DfWvRQ6BnDN7eHgpn3XhjtXPXjW9ZP6dXgY6wBUBoYLcxLsdFvf3ek1SJJikHrx3fAAW11CrsaW",
  "key2": "355zLAMGrTfvH29xbjZVhrNBk9KmvqXqk7tG6an7zjiAKsJL3q1Ar7QpqCx7taeKdoWf5W9bkjytQWGanzT3yEQE",
  "key3": "3fc45kzRVx79u9oNLXKRVyitPUrxEq7BmuCtukfUrPXYELk6B6rC86gcFHKTdt9919efDgYufLmJAgPQyVd1y3dW",
  "key4": "2YSgX2e7KfC6mhj6xo5PPag1BZEkELDQyid3nvj8jikDnA79ZBxTF2RPMidEVnVSN5t4899iCKj7zsHHaYecH6Fy",
  "key5": "fJTGJKR38M3UC7mKfT3rFA5c9Q41VSuSEBMwTeKssRvN9YVFeo6wHKJVBWiVMXwL2z9N15Vt5syxoHbdFchQnfs",
  "key6": "3RUizwYQg8CbF5ZYowMuU4hfEm8Yoim4EpVLdS6EGTUN5Ti2cvPsS55qnFwEQaDpyMDAThvkedVRJSQVDNBieFmZ",
  "key7": "53YsYRWVqMTfP4hyRCYf8Vhm381EQghrLurygcnmrjphVhfnvdnoLy9z1W6LCabngXKuEJSjvEmkCTbRpe3Rj8qf",
  "key8": "5c2XtKoSrowiCUQrVTv8ccHCrKiYjpgGh8BXwD7FzpFLX7Y6YDd3BH27gjC4XD2R2PfiivNQ8DmfKT34ApZYFJdX",
  "key9": "wLgMpmdF41ibtmQxkLDNTp5HE2i5iGZBAhg7GBqCeSM8sCLUHhUnjpj539NHhY5ShixTc59HKDLsd8EpLJKj1EG",
  "key10": "4UYPFdfVoJWgkJqJ43H8AsphhquNJyRMKtMHasorStA31XAoPZYfVmRyXCWppFQEgdNhiW2BCV7SMFHsAJUzTyeq",
  "key11": "4j1oRm1BaiQvH3mRLTzXHcDvoCCYssSsTJvWJFrpJWgqa7ucDdZ99dzHFAC3pPzsTWArJp1G66UxRQmBsGa4op8P",
  "key12": "3WD6qeSeSsdPyyqcy23BQHwBPhRAsWx8RRcKsVVUAyxMj6eZUvPPrxVZTAXSy6nFCLFBwMQp8hJJNQ6dWZ6qZS2o",
  "key13": "66emjkDGBJqRgFniWuFtJ98kGsa7YGv4stqWe1wu6yQBWyhquTQg4nWLf3s6x1oWaAJaUScfdBJXW6fxgBKHyKff",
  "key14": "35TvBqW6GRHcNvGNbZHHoV2SaS15EcSUtmudcvuTc7i5jxm6R6zuiJJQJUAwoDs3iEttGtgpZ9zwCUmJa2RNxCA1",
  "key15": "5Cp7U49AC3dxkFkMiSGT2nWgQB6shxDVdX9BkQipR3UY2tB1bjFHg2MaHfytcuLvTANiexkB9VDnp6NELLnZGCiy",
  "key16": "58CZYs9Xu3ZeV1bEyFAQQ2iSkReo9N8qdKRctDfixy5cSP6BzoKJjBN6w3fpYsecwgNR2CHDMaV2aEGia9kMpxXW",
  "key17": "ws2PJWVvr61PAz5b1jZxDnjbMq8pPdhX55Zp2YsfgZSuhnN5KnaGgz57GgD7QyG1UoLhuTmTpJt471ox2YPnmtg",
  "key18": "v2kyJN9rm4cebHmqKg3VHNCUx6gv3tDaVsMaPK1gwzj5hUeQ3zKVdAAfpJYz9AXdDfSD3gkcDr3Lf9QYy21G5d2",
  "key19": "5aKR4VX3Y4nHmGzfvuADKyMvuNmG4tpobz1L61wsHbYiLtUUFRWuC8oJCt9n4EZm9ref2HTj5R92N4MJQA4w6vgC",
  "key20": "2s1zGbwywJb8VsVfx4wd4t3uRQwGd7ywyWYBA2nMckH4pGnxEYMiQEnupBpaEFYJs3cjxJ5qjih5iArEMXGJMpjr",
  "key21": "3k7Ak8JyvGJoPMwWudP6ydoabgZim65bia4bZ3aHbjQ8HEBeAindMswU7T7Uz1ZAe7yRgSCb9aNNhBymG2RQ5SoP",
  "key22": "swffiGftiQCyPDs2ktarpFYxLVpafpH9CVw4xtxhE8RuMzYANmMS8xzbTUwppyUN3PAKsPWG4d8GGBYpBZmYcBX",
  "key23": "4ABoZXU4wBCEBi2gDwS7kGqLNnbnKb4MGjodFQ3q6ppaZMVHm6MKy7bXerqicxP6D9CEGsPzn8wBDTkDk51FaJTf",
  "key24": "2mZHiuriBKf8zbdQPqKLnfE93RW3mJpVvfQyX5Vy1FETNEJgHFyMiERt21R438yBq7NrKw7FWZnJXNj7cFuwzFKZ",
  "key25": "nhugw4H83RDxCuRzWTXtsAbZZBqiGkjmT1nNxYmeEQPtzB2PHba48Xama152YmLKsArUUiysn8aRqbu2wsJ39pV",
  "key26": "3uwSN5SgW9Sqj9jRS4YGEgRT7L1m9wc4KyyHgdv5rzzGBHC82VcukDnY5KRAnKjtMz4dXJsE1ytyjsaxvYJbBXaM",
  "key27": "2bs7krTU6PoMoTKyTwQZ7drV1Sc74DQjke9WZGXv183CWgcEUGVo7GyySRHk5GduqubxgxmADQxHjh7uvL2GDwgc",
  "key28": "5RNKwDetzD9rd3pmYxgu85DAym9sDiaGwcgTNBqvMDeGC7wMCgS6a5mbhocyUpxjt9WpFZY6gZA351zxQHyyZLqR",
  "key29": "38hBF65vppuKsahqYBenCKmh3HNceCacts5PqjoDXctPHhC7Semqk4urDJ9Bpfvh8vVFnBzbYhCyKFekDL2LT9D6",
  "key30": "4LxP1JoJ22NTFGC6bjbczF11q85V6LNSgytKoHM2hTgYLyV1Z6dPjjAaGMetZSHqjcfrMteCosv92LPWGGV9vLCW",
  "key31": "39khJmarvuNk23xShzaK9keEtFwXDYaTor3JQDNh33ccnCU5bcPaukANZig8Qf6K2Jt35wseGZpodGwarjRe2y62",
  "key32": "3cPpE7hVTryuR3Gqd72Xa2sh4GkUfoX5HNuKVjMByTfYyFsN2U4dhgycAHffejChDThgmrEuGCvDSnvuow2nU26c",
  "key33": "3tEQFXeDdaZakdZvNgbNwwvyynGumup3B3FriMHpA9NgWbMVmCMWjR58Lzfc2SDSJgP7E9zTaaGi9WoGQUSg5ECj",
  "key34": "5cQ5bE3yZnpfyBPWGQg5ytQH1aQpBnAzY9SCNvExDTApYaz6sGvBkfq7FkNhfk1Zzhug5N6qGweJWvMRFG9PMYuM",
  "key35": "4zNXhWx3YPy7CABGd1z6jxNy16LRg7Pt8DaEK82smqmLnXHzCucvsFdqmAjdunKDDcMjDwuHK4CquSQHJFMmbpLi",
  "key36": "5W7neY5ZcNB71zkkf4QT4dXaSPdFP2z573baNehZQGy2d5sZbLpkLRsSERVLivtBujAcNGdk2P42wHoyoPyDB3n6",
  "key37": "MyutDeUdmYgTf2CRqKeXmRgz6Q4eMkYNEFFNzLmcHQRoQeKJPfFnaxeGfXNFv7cKmruJDhyzhaCiFJowMGTgBau",
  "key38": "4kbQ2NPk5PKfsxe21NKp221HQhe2VMvJmaVz86L9vwisjXvaMH8xj7rLDGKgQHZtwRhpzWvvFHJbm5iL4h31X2LF",
  "key39": "394wHxdXSqNTmAJSJjMhsjHGdvb4cwwxHdpLHVEiz36ig4PxWnyDY1z838fJiXVNGC1tHgfJF5FxqyXhpJ9D89D7",
  "key40": "ovjVvZRwAGomTQSKFvjwsoEcDoH5LAwPYofGiNKFFQSmKJMLwk8zehBmQQRBWzbeZo3rzfe28W65GNBSJot5ZAw",
  "key41": "4eQVSYCTqYyLHa8N9ntDztBn8YJH37jQRpM5wjKkKU32p4odCn47nBUNZqrAcQL2NmhoFNjHDnJYEJQBf1XsPEdi"
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
