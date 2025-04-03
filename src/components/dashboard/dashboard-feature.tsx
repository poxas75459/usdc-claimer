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
    "3w4c385kEUj8MhA16rSGThZCzPCrxZAz8wBS6P6a3BfJAu6faiPuxA3zJtbpdtuMW7ovczZ5QHs8RnL6R8KKJweS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdiYsrSqdR7f1rAF82w4Wwb4syZJhnACjAhas1iuw4xZJP7sRwD1ejcQzYd7qanFz58dr4suSLsqHH1xvQ3xMyj",
  "key1": "3MCyffxzToMVgmPizExKa2ivEwsDX2U6HNAeaFR9fxP18A26SLg1Utmj71QQLfRb5CjGvjDMvmifNyv3ndHQC7v1",
  "key2": "JU47CB6vvBhkgExwYVwozyooAmiWijvjTndmGu1o5zgvdxAFQ4692zudwqYWf54fS4BUcX1viqTcVT7d4dgUVLi",
  "key3": "3oyJGKR1SjytDw9yGULgPGrw5UkqxPmaSrMUbAKUZ9H9jWXqerhRw13ZCLZHjiNbU28JwRLCVUHUfgQynhTy9Bte",
  "key4": "5ugSahAzAMJ1CErv42W3dUcxEzoiQa4F2fdNbE514Mn7h5KnBvEyqgHpVJCCtMfiuxjgX4koVST7Nha9nJue5mUd",
  "key5": "3qFHJXGyKGEZvD8FAzAUwvLcnKRnJKCxoVxd1GeeFWwpyxMWHTkjuibainP1aaaeNsWdqQhbuuFjRB6A57DyGBeY",
  "key6": "HX6Dp8hJQ6KPL86sVwtpd5sRvhcqcMH3K219AD7B4y8o9fCa7wJUCWBcUtgmuL7c7RM47YjyNWhVGRYV1aZbFYG",
  "key7": "thpomuSbvV9ei95oxgyASvGCncCBj8igrqdSLFsmbMMUZiZRcV7MopCD6oMmj63tDLu8KBZ3whquyR9JuoRHByF",
  "key8": "5JTby3hskuSWumRCTfoKZdFrqp2dWgFK2gtNxpYjXwNQMZzwBBfhj9sgoVYXyHn6hmNDdY3eMKupQwzv11zyNggb",
  "key9": "4VTRzYM27RiDYn93RGDQmhriQdV441BtRRvWjzb19EaBxUSHFGTuiv9kq2UnANPAbuXJPJh9vTMfoqv6uVHKpr6e",
  "key10": "niSKxm44xt6KXJVzTQjuwWnT3i616Qr8mNFcXnY4VjfLxSCuEsPZTD4j3RqcE5TDYCgPTM8cDNfbg27cVKUJcB6",
  "key11": "4WiinpHKmWQ2Saw1HgYNCe1KUkvpJZFuCZ8eygXojuiyFZcTeh9SAbGoDjYRscvvqdHziaJUtSMeM6mvYcyFN77d",
  "key12": "ondRFxtD4M4DgheywNWVAmq8FtyxDoVdt8KX3RaKQbsvRpoB1fZwkRpeG6NKcoNhtkXgAFm8uY5Ce31kiztWux8",
  "key13": "4Yawnso9cRB4fgT8NQK3YzvS2gsk4vVpZSxHR5PVUEQ9PJxinP4qGa6BLHLpD3CPd2GeKnyYEqNDXWynwALBUcBK",
  "key14": "LFGvzk6bC5Vs6iaZcVMvr73P7PRqaHewfrrKt4bRdL5w3ZdDjK7LhKLmd1nEVaBhUzzgTaRgv2PXAeeocRbJyPK",
  "key15": "3YfHB77DiCeyiZwoXjHxQ3JgSC9wX12TsRaDqKxoQwHv35MrquX5EvF3EyQiPNibZzVycAJbSC22P8XC2ygoBFU1",
  "key16": "3QdPKaczQsfKpyx8J5ZMNaufDhzHgWyFy4rUYKfJwLoC9gUX6BroZAEb9YKbmduGwWFcAcDNdyawrLQr2ewjYHRb",
  "key17": "H6s6aU1dzfgsvurqKJyexjVTXcwVMuJWo2SxoFNRqqniPDurFUCS7wvSw7zY9Z6Nfes5DRVsm6P8gaCNZbJSmFt",
  "key18": "KuCYZ79tmRLAD8CKJhchAHPtpSYzSuHYVvYyQhSZQpCcRUeFd6gYBMoRvtdUePttaASab4myPikGC4toYyeHeRb",
  "key19": "3b4koBh1Lox3cvac5SCX3fzogEyQpg9K5G8PpGM6QfzKmyfc89997khfKz2XQFRUxxqt5pRyL1g421jQ9omqPv65",
  "key20": "5UoQ76LEZjYEG9E35rYyfsRjGUQsvhkTzzkQ8UVfpEQz1jwsfHsys8WKBChCzexnCRKdeuXV2bYEUYUNDzFLHDJQ",
  "key21": "yU4pAnqN4HtFtZThvWS6pxcDJWNLoMJZh1cEP46AfA6b8Vd7PnHRBAg5esUftWbdAzoVXEj13Ga78e68RK9RNXL",
  "key22": "2UtxRGA5e1PpZopw4GtTMecAm16PuktRhq4yDC7ArmM9Puf16kvuoHRNAfoh725nvVwrfosREJPB3HEFKyK1S1Gg",
  "key23": "3h5zq7pUviy6oTn2cmjZLGogfPyD8wegiCdBQySggAbaXdFLERVfxpSYreV9pJ6zvXtrSH7Cp17b74zJojUTx1EB",
  "key24": "5ThtUrH2FubSQ1nLPNaebAgMw71DumjvHZVMDRsmDT6YLL1nZ9LAXnzqA1rXrcFcoyWLoiutAieKfpzrxcj77qj5",
  "key25": "65TCoNLZb8pgPZNV9oiQrJ29BoHRqXa21x6dGY5cbLpmun3sykcxsio7vg3YDmSYqQ9ACY4kk7K3zZzNH5aYDvHy",
  "key26": "4ev8Ed6zSyzpUbJbkEWz8BuAigQpcG2nXPy5kmUHRZnwELAYENoX4ui71AkRUccqmgWhz8PEnwtZvgwTomYNA4dz",
  "key27": "4LwmPgogfgH9gBdSnKdg8Kej4fsgHu5dZNEgMZwja1VHVG3ergFEZ7ytyvbcgFENohvBNvUYQz8o7kYyFWDjkRdR",
  "key28": "3vbKNStMdwT9dB8memTFA8hTzMRhUZxAerEBL9mfzRzXAZiqgki2dYbbTryaJkTThuAr6mWjGpaTfWXtqkuCN5D1",
  "key29": "2vB9yXUchKnxudbnAs7yYGrhXv9BaytafKGSuFjMcGceiE5PtXTKvmNk2Texs24bwdv4Kb39BCF2mqc7FcC7ytLa",
  "key30": "5Rxn1BP7ta3qPDcq9YmVuyyz3SQ6jkw25eibR4Lyh1m7on62WRrSGMQQXqWtQLB4Gtv2U3BnBWTfn7yU4joR2FEj",
  "key31": "VhCBsUFsHtQyjowhcw1ex6edSgXRbgTs5gUrczhsX88CctLC1f6Chs9zBkaF27SPZ3oU4HTdujbQvDnuJKFJpMf",
  "key32": "4Z5i3mJGdrr9W3nbyMAo6ZPthL4KPrj2eqV4Bb2P3fFgcURWYPQdU94tZTjKEpCapvDYnu1Z4ktLs6S1VVWfASA",
  "key33": "22w5AR33jEFyddmVjHTP6ucjz362B6RaqsYhTLP7XjPunnFtUSHC6ozTnxVASuzN2zWS5jC8GdC1YWhwYpJrwqxg",
  "key34": "4o46PfXKVXi5TdkJt5tdhsd2dxfKqKLeqD94u55dzLfpB5yPDPpE4TYu1CJs3bgKB6MdheBRYGCXXcNsoM7p8gdf",
  "key35": "5TSyFNqf8gxkMbukGe6aGPcxqN6ijKpq2WtT5nUmkshtizpC9ET1SUY7McoA7oZAhKET9SR78BXcbcQpw62mfmwt",
  "key36": "4re5WvQKd9ZgeiXU4vjKgws4mbSFgrjGbNHGgDL1h8AKofc5qZgR7D3StKPg3G18BeU34M3dLXPix1QVs7dEG9io",
  "key37": "64uXbmzQwGtSnQh3pUhf9eptmVgbeg3xE3MX68uwdwiesEydeYdPvqgcvEFKxAgoTwgwNxDoNnkXir6DUd6cm9RL",
  "key38": "4WeZcb4YcAyafyG49a8seXM185XHLFry2JzhcYwUcBzkpzuvoQ6uyVtq4tMXve7oKMoAGikoEd1u2ahYPh3ZH3zf",
  "key39": "4RzEZPoZxsGYyLrwdJSmqYdMCpjowrGz1Go1FMZQPDZ4xrsGNgd9GiaErhWSNzScjrwW7izwY7nZ48jujxL3CCSK",
  "key40": "2oWxciC4nSEZvwy3D6HbQCMT8W6SCjUUi4h1LaXrkT8HDMYsioFRP4A3ZmhHJGRvsn3JKN6dxrf7fAZhYaDj6UxH",
  "key41": "5gPLCxW5MzYU6nDhBUQCQs8unf67hg3PXt6ZtRsNzgHR38CCSciH8cDZjQUqzYz9U5yxke3nnonsRypmcDTqoMh9",
  "key42": "bD6KjrkvBgJ4Cm8TLB2wd1ZShoBBYV8RoHUMTgVCDHNkKdpP1GN69WiM3G8P78aTbCjHsvVZtHGAupV54bDdAeW",
  "key43": "6697GkPfXFJ2qKQPAFfYeWJr7c7gG4iRTB9UHKwaHkw8bejUgVyFJFDphgLuHKzD4YSY798eAt8EtQnBm3tF269h",
  "key44": "27BdHk3yd6E2oP4pw1vakFcY169NUMWgW77YJ1edDP1ez7dPTTduk6Z93w5qLfNgmnR8XWqQpa7fTq95kmAzRyx3",
  "key45": "52xCXqS2p284DUD8377Kwd4xeTwddrZ79efTUp2MD9nUdJkkgut1NCW245PtXAdSFtWhR3D7BG5QCKtyakmr6F2t",
  "key46": "5DEgC7g3QuH2REs5RN1icmJ3ULdTKgAt1QRDQFGaUrtGD1N8VDqM95Gx2WYHV48Yayt8ftP7n9zkdLDzCXp9tNK5",
  "key47": "2dHwX3stv1WcRdXyvmXTk9Cmvcf7cTouV5avtdrghaaiT5CkJxotsN22gCBfRbXHkmiafk3pgbxV3EG3Mtcn244G",
  "key48": "zyPJKsmTEPXmrapsXM6P7o3r9MoHKb8Jf1NbHc3N8ZE5DjZfqNEn2KA6FRQj3xFrDQG2w9mj9n1KGDXrdY5Vu3Q"
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
