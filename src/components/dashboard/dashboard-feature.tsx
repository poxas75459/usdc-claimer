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
    "tsYtdbvAGgRu7kzFqHqXuL6MmLyktm9AkrB8XVx5Zp3HEPR974muNE4k7iZFPqicWCHXNyqugL1ZMBcTU3ouTy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2FVQKbrgPFYLVTuM3xB8ACZVaf3djBkg3j6px3vLTmowi4vHaoe5Kx2p3aHMmGLiSJEJcPWmWwUNDAAJx1XTKq",
  "key1": "2JmfBMvU8qvgVX8UPmUmEBLteGhdAaJcSeTKjGGGApaZKLgtJaTnymQMKhGupU4c39BNTwFdGYuYPnt8shbMUDBG",
  "key2": "31C7eqB2fmNzsLnNXGkNLX9YAvhDVkN1WoYe8Da4zeaQzZmJ7es2XdStH3qubmD2LcBVAW83HP9AcYspH9Z4mA5Y",
  "key3": "4d9g99hr4JjWXnuvEkXAZJrjPyKcKBz51wLbvaD7XjQPCMaiGHNTZq2WeELafyLYZ1UZVoB9ARgbW6F6agvjfMbr",
  "key4": "34mZB3xH1xJ23Vxn4C8EjGM53h8ebkDp7Xpf2eNEdUaa2D8YXNK4ZDV2C6aCtjRTPagvabd5MfCXyQGaFnVjd1RS",
  "key5": "kapBynZgeG3WApCWZnkdguGc5bF7PkdKyH2qXAkjHShWaiv76wypbLpgoz1cmE3K9Dt9wCJWZWu8YcFFn9cuQYu",
  "key6": "rHuuHvxpLgYCaqn2kYStELmSWeCaZQqbWMXKmgaftyqU9WubYtupj6sR5ExsoqZHuaATvbmpLVkDYAtJ4u5EEqW",
  "key7": "4FvZ8cpfQgwNHu1xhAbc52nU4id1w13s7TTFqUPMBMkE9zYEsTsWtXCspBWdzSukLWw4Vf2PJNAdZ7BicKWyuAJJ",
  "key8": "pssLUZzRqEVKHqszktQs35nKu5XLrLY3CJpNBSk3GuhRXt1VzugTopHVpWPK1HM7q9sVSBupVkyqT2i19XKDrMp",
  "key9": "4fJ2pVwfd8nssWEmiTJH6f8ehjToZE6eAjptfgCUvMJTxMLDxJusBYFgKBKjDi3LqX6sRks8RWQfAiY9qgHXr7Yw",
  "key10": "WguiH4yXJ6adRAfz5yRoNi4kMiUS5HS7uTYon7Z2DUnDkanWWs8BvcpVhRnb6sRycG9GsECudTuKLwRMbtJRVZQ",
  "key11": "3yZJy2QX8Nmnhf7hs7fdhEa9WHiMB569FDeQBjEXNuaavviy4jWZjKiTa6hSV8fiLEYhPqvESJvApitWqqnWLWGq",
  "key12": "3R8DT279iZQKuMVvY7dyzv8BgRY7n9YNrFmPgU8xiUtqFptJ45edEXsWntYJRdfb1C5khnsDGYa4uXMuQzkPXFKs",
  "key13": "5yTvbEG2iWvomVx3Qg8CXJyDdf5RXUNcrFzXvn5qpnrEQGauTQftebenVX1TdNCGwakTJEjKu91G56P7rAxt3Tug",
  "key14": "4m4ZXfxhgtiF7yA8jAs2u4n32hPv1v3yjQofr7GUWtYU7rZWWAtnpoSY16M1eML7AX2gd1fsJS5A5FAN4VufFahp",
  "key15": "5n55pkB5uzW6REppbgS7EaqZr1zaDX5XZZyWz3cQV9QukPuX4xKDx5oXZy36SkNnXmTN1VWK5cdYqTehywQcy2TA",
  "key16": "5TTupsJj5B3zAUMAaKY4nya2zdGXcDRnbr99DD3YZK5jJnazRPiQyFcnArME4bwvwM91ybu26weBEAv81rfvJY7Y",
  "key17": "CgXqSNu4QDFJNaxGqVDDUsMYcQgqWB9yYR12sgxkb4z92u8DAi9kAV7CX8Kqy5jjDvJBF1rh98SbXhaGRahSs3D",
  "key18": "3KbPHJYMPm2NEjApaw1LrJrvuVnJH4YxxDgp3QstXHKMd8wxdnNxu4CpdwydSHGQzrZcJbcdFv3x6bTK1F7ec5sL",
  "key19": "4V8P9SP42GMUkjjnB7naW4NSaw2GHVDHTEFU59V8R7SCJWgko9qaiGUWg5MmYC5kcPvjjKEAn67F3Mo1THx4nwsL",
  "key20": "5s26MkaCbD5KZoifH4mBoPfiDisx5xPS87ahrVjwW119WuSXptqdDnHZUxe7eykaMD8DpGLHqzkLXhGuVWt67fMv",
  "key21": "2HuRPeteBbrVSL9FASjY493u2bQ67gV8qyHjsGdLqhRSNMWmjDLF52fxaU5GrW3gEWxLLFgEPEqK6uddzUDc6AzK",
  "key22": "29FC12y4ySiwTs693aB35VYZgeuD3wiJxmXJeywBF1uaBAouEUfS4BQwpSzJxK9VEPsfTVaP4rEzd2bEriL1wceV",
  "key23": "2DE5AaQfmVehWcRxyRfJy1hZ6KFX2gmDJx5kYG7Ha4jckBgu53dtPZgoeptRsFZxUkyCCfKTAGCEMYj4rPbW8vr4",
  "key24": "5WZt7YRiNDL5ea587R2e9Rwej7u5W1uZnnxKEXnQF9X9c4S8HNpeAHSwpA4zZtY9AZXRFjskoCnaHoDvE1m1ePpT",
  "key25": "4zUj2CvSDdWf9uMjZXymtSTv6rDVrv9tRkeAWW1X66x6pNPrq9HJhgSd9SQ2QfkQ2RobRLdYiAxz3cNTanfnQjUv",
  "key26": "5oAC2KLKD2yqk3cTEKwtr8rY7sByK3YRnMDKuASf2F23hH1ggCRT7QUBYnFMjJwRYwepDwZ5ZBExBSEB2BCYFTZn",
  "key27": "3ApkUm6DBy7FGnvU9p6NYAAKR8kAYHBRacFsNASsrCbj3CFmvZMXtdYUXcTb8L1bTAA4Y3oa2n3EYdWDynZVYU6v"
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
