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
    "unwht8aRuXVUmLCnRKM52NvbaZMi3eLxC8CQKkXUgaG96boDXenYb7M2BCth9imb9gkRttdumKBuoe5R2DsSHf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkinYB1MZP84e6B3pruute7NhxwPdPq3VMi41gSYHPtpSSDWJ4xBkyKpd9hf6D1ryqDxVxz3bys1mtUWvzLnYUG",
  "key1": "3ccusvGUKQoCWe3cH2KM36aCZdhJuEdmP7jUL2ZqmrF2ReDgk9hcNdppxYLgKhHYtVfYWAkAKfSDuc27DAN1xhQu",
  "key2": "35dFzkeE3DxUfRpbpf7mGfuMAhkgZ7YXFCK9jCA86npuyJ1Lq2Mdr3Rjjt6dy6pxehQ6Yg7QVVUfAKb5ENpyHrWk",
  "key3": "3WhwXgKV8nKyTfUPQ1CCuN1nZ2Su6aP4wXgXcgerBQE3zGfLK4YS8zqBeZt8Mm5EjBJi2SbUQRoMXjo8NiFk8wry",
  "key4": "4GbUFddpLHjs4Y4R7GYJfd5pkiMZLaUEbqTYZYXNB2HrvGZfnuoyMDqVbPPGkAM3PBA9BUavDoR1kzx9Jk1Br1ek",
  "key5": "5BxZ3sTL5sTe8U48uTCy2SHxgoqUtfibMrC9c6TREH8kS2A2AEL16mEYpQddLk9uFYSJqvCbsnEf3jbfmbNma5Ep",
  "key6": "2PdPaEiMYf33THVeS9AqT5gEdeR6hvYtiBT5b69KVPkZuq8g4DXYW5iLiJrPyWgWJ71mdSiWe2BKPnMyDRvkQTZD",
  "key7": "541F348hX8yFGSRMGyWcR5tT2zj1fov5FqyeNMLoN2VWBsPR6bmWHB1h6x5ZKtonmqtAhbsEqLVG1dYUbP7gBJVt",
  "key8": "56Qg5nxCWja8G4dBv5h7kSKJnfHqWYkhcs3SxJpWDgStwTGGdoxhXptpR7YXeMUqJHig69XwdnQr3ad6TW48HdME",
  "key9": "5uKd3joankUTWbAri1LMfpUVdY65y6aFzLcKuWDvuXE9WTcrgMCaRvNnfY6H5uRcyFTrmXe8AY4KaBvUZQPpD9kA",
  "key10": "3Ba7NaYfcUTxA7dUWica2EyitfyHZF2gM5CiFnN3gwQhmSUjEhiDEpqhkMsX8AFhCeALnoGHceHgKBkXBEarrFsR",
  "key11": "2uYxkaLPRXYAyBK54urDeDH8AAQgix77YzfN5tZ9KVah65z9R82sqszCHBUiPrwsTyNVjjGogqJgTCdVLxj9BLZU",
  "key12": "DeRBoUdFafEUn5o6hNfgGKrVX4r8YLL9jfEwcZLrknkE9Z8kCM6LwNPHFoNLvzChgHS2vupAYgGXsz5MpxUgWqq",
  "key13": "DkVJeZikWE9j8dhCvzU1tJuRhpWG2qYsNRBqYYjr8hQtZQaf6HtZ6FaRWfky94xFMdf1iMA9xLJM6xPs6to7kAQ",
  "key14": "5NeV3e8yojBk6LhrwpzFSghBi55RY2JKYU6P6rQViPZNDuKaay9tXseugDwKXCE6nZfHqXtoqi73bkZ9xFhCyoCj",
  "key15": "5HwEyJ5DNXUbGtCgE9rAT218oc5c8KpgTGMrBqh37TiziCG3W98eTbj3eSKNKadVpXVvwxQ6qf5XgYQWY4Ft6KjJ",
  "key16": "4AdPj69oLs48Gx5dksksJJgZNB3KaUg699kQ6u3CEQCoxDqkLU22cumMTZUEL1hesbQtGA9T5YUD1YoW3QDZYPnk",
  "key17": "5Sdepo8s3VsBFiSTeEeoLcBYSXCKG46NWwXKSRyKBae64ecUkX5onGHjeqxjdLXryNzNBfE67y2N682p7dFrPvb7",
  "key18": "4ibNFWSuVfMFfGGvJvR5GwDG6pgSbuckCMHyBEoNpJhfrRcFtYz6JbUQrRAv2frkq3F6ioKxVViVxvGhX7yL5YV",
  "key19": "35cRzS8jYFvsUetYtPotC4oUhBwMiUHYd2iuRxPsL7ARYMtJF35cdjtMogNPMTyM3xNkHNyCurCn31hEzWhs95VW",
  "key20": "3M6Wm8N3UqbENcStEvGxutEqc53DCWLkqmS1zKZyoUvhGeZwaHM7c4cwNNxrNHj4weAVsa6jm5fzEcu4k7RHCARK",
  "key21": "3e6JfaGHVHm7GvSucVY5wZnfS2nCWsQnpieZnrRyrveJ5XN5UAidTLCpo4E1cpyFtW8s84mS1PfZVZ2c3u4oc4tG",
  "key22": "2qU5SRURRbhghgFdyYpocBd4JzyPUsbEjHFoqxk5moawba7dHZrwVB2DZHnz9LKWbjTxzadnTrV9hxQSJFSUhHzb",
  "key23": "5j5MUYTm5q9jd9sujFt7FnirLJBTpw8hweQZj3h9hvtSfPqRqf7zQoPpvnEwh3G48WxM5C4wuudhKKKwWqUN14SD",
  "key24": "37gTRAjHYp4gF9Zh5EYYXXY8fub9iwRohjvZy3ENfFLSHYPkE96kotXbK6fT9GnLgruTS7wXHKs9b5JY6mHWzv3M",
  "key25": "4zchsKk4zynUy5GX8Wj1ESRESyT5MDYyWi5rR2u5q9oFt6Tpqc5o6KQQTi9rrvqvXwnNdKdXo1KG33uaKSMkA7eA",
  "key26": "38cZcGB5PvGfBP584Ht51QqwfnfSe5znfPg9M3W3NP2dcurNgqHpLEHhABEPFwHDY59UMKVynUSPqcHrvhmApHqf",
  "key27": "5bRzh1mVMtmmp7pJrPUTWNqHMrh6CZmkX9HbNUDBCpAdoQrcqkFG97Hdy1qqF42ek4uEWCndUvsszdxcSrrLMvRx",
  "key28": "Lr9P4e5NfVbUkd1n8KuZmygfZH262hjvqJZF5ZNQ2RcLoqAEjUzf4bHuRhw8vs59bG1qJzqxaZPb97Pti1zKixQ",
  "key29": "48PeLi4FsawdvNCzwxKYV7vagcuCF9Ym71DKRL8uVJCihcyhTTfenJuv1oFrrVBCZQP2THFvXjKdrSB9Y8uEHZSL",
  "key30": "3nqo9dPR9p4pqmew2GQdKwkhAsErbTW4Eeb7LwZPP4QJV4w1pZMtpKZkLSZjRNxG2GSFK5yJ53Tcg3DCh8suCm2K",
  "key31": "4weJvoVcCytj7kTWgKq9eHotcWMy15me8uzWo7BcZjjkFtNCY6S5scnpBYK8YXgG2xaCi5edaJDyzCkZqQGHwNhm",
  "key32": "4ReSxaayaA9kskXQL4iAR9zPZkmBd259goGSarGcLCEMKXx3ewjErL8cq2PZDWCTwuzrpG6bf4MjwjMfeVckjnau",
  "key33": "9ajsqYFaA9utDZyRQNeFE6dhLLrCHX3nb3ogFdCM7uKs84AYuPhnbErjeQVndRiMMzjrPmMyMWRu5d1DTADQS4i",
  "key34": "4HQPtNKUmWxFdgeZ4n8DpDhke5y8DbNyHwsUdpkDSF5853SuwpJHMYdaCTv5zEKGLqjfdJM2wLA2u8xs9dXFFtK8",
  "key35": "5hj9oJWVGCcWGScfXMGHgxYj2gb5RMHTxVTfGhiBe9JGpmavTj1HnKQNP3QZ77HkZ7dKyxpDcDg3wcp9mtXZTzcW"
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
