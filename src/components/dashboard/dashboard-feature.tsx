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
    "2FyPUMiUrDtWr9V2ceXF64HUbpaeuQE1J5vRig2C6fxQMUEWAQPuBxmKaoyWh2G1AccCDi3GGM4FgG7jCdcoNE3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWLecTm55SUU1bwc6HXndc6SDbzVA4JyBm8QBnGWbTrbaYpMomD8MpMXWbusDcCubEoFXTGtaAH8Dh6ViL3VMVD",
  "key1": "MDxGVvdzXg3fvcgBA4QAFcvjqkw4i4q3v4rHVD6W3bXM7XrYCySgu3oCHdEFnpSNQPnMmJ36bbkXWJb3hnYFWrj",
  "key2": "M7EvaAZLQmfv8emJrtPspr1g9sacibKLWqqvMcYS86vXxuBzHVttyEusZSiJSUcaCfJEBmKhFgzQqvqksNt41BG",
  "key3": "3ZpQSt1pyRq4CYRqMQLE2bX1ZgDPBFy7DHcc2QYwSxBXkfkC8ykhxBqFztDH8u7aZyLJPEaKxNetpUCZVVK2za7d",
  "key4": "29TokMZjbMbFVt83jvb8Vmm2AqZmBxGuZkzejHkomx4X39M6zmxMVSaZLVS7iwYN4yuoh43FKUqDTDfjm4a2hLRt",
  "key5": "4Gsz44wjTkqDwjyPFNtNqDR67LogVm1xAWwL9UtKzqSb9Mw7J75tey3YJfEvQ9KMeHYgvJzTzF9ogFTh3FMfmJox",
  "key6": "3aMNnpEpadXQdRsjE36DDS7GEZHxSZMwSww6KcVhLDzBVKm5bheEpk4Mnv9EbzKxUciK8DLSm4rtsXv44sYyvS4b",
  "key7": "5RwgSjcU5TfSVrcs8XEf18jZMhWJsuP8cc5bYG43CQqvn4kGcnicMUCRwgD7Cj6qmhF6y6525RujWRKCrAzMmdfY",
  "key8": "5K2bVyeVAEsT4HrSVYNvLczakneBHccSu2TriJhpaAHksqSGT9uJ9XtTBwjwtfP8vrQgLxYH9DTqrL5TigdFURQw",
  "key9": "2gMc6NJNaUpShXVWba65prRbNNgWkCmVFKdDd7EknEu8bUuDdBpMvCc1rxmk3KyZCxxBxYpqLWJSH1C3a2qjNvDj",
  "key10": "57aMKZcJGjp1DUmYg6kjEnVgBZSPc3zAZww5UtqUdmp3zqWNbJ4vcp3cvoN5rxKV7RFFF3nm68EE7JwAHTtyuu6A",
  "key11": "4tuMbGLxBx5Ta8sZpJkdKX4kETjwyZ3N1NJTDovAzCWmSwE4Z5QwrE9oz89kbdCPeb3V9am21oiAiNbDiEWq9ZSY",
  "key12": "34m8uu1jo9pF65wbcby4fStiTsAH6ZgMyUMEjLkCE8ec4dYs4Krdqei1V3n7J7v1BNKbQSrfc8yzJZk7U6icokuj",
  "key13": "2SKdrLoXnHrAyFhtL5ENtGPdYXfwZELrPz7jRE3YGrmMfPJPvnKqsuExEGYcjV8HwaDmTBbdPxqerReCiSVaz9mL",
  "key14": "ACuAQVA2q3XVqRfTmr5g9QfrNWzuFeotVaHoEN2m7Dz3htS4DFXEX2rZ3bf86eqF36RUT69czyom3xvUmovVP3H",
  "key15": "hMcH1etDtjyevzaaGLMMomByf5hXQrEvF65igCoJxNmpGX9YjpCagdZCtgZrMmcT7wvb7wVTdUMM41uv5uKFDgh",
  "key16": "5wbLH7aFe6mUwL4QLkCpGVGkpTEWpPLCeksBXCJuCVacdh7EW5CoXVhtvxaoiCP6CzuvhhJqpjHDtoCHiZmiGAJw",
  "key17": "5kR223Qw87UZRziwYP61Ry9guv4VJZE7iTg8zmuh8AwDkq4Xrfin6rxuwaXGk3S5fQcEytmBUW1hETriSNcoBUtv",
  "key18": "2FBHJv1nc7aKqa3xL11ZhwcNazkbXP2NzQKhnJsqef7ZxafaxSfV8mM2SiPk7DUGzrn6miT6JjVy4SZUz5rKYNrV",
  "key19": "Q8JrjQBSdghTGSyHSwJcX51iY9SyEKaTpnVQWgMRtssjvgmjyDvEQZpPMWFdmPRKQZs1pjfCPnA3xE8nZcYyUZm",
  "key20": "DCX1bi6r9iTQnB8F2e4NrbcHidmrR74Fhw5SmQd4EiuUCkAprB46wnSNNwiv4tc324Aq8hv7B9EZscNEBCFJ3Xq",
  "key21": "5YNxxYfng58DQefrdVAPd7wWHTKpzumPHhnqFcFAetzvafqa5X5HJvMr7Az6HxaWYckS7NWft6VBQ2CysLrsWp16",
  "key22": "57A89MNBWotVcFkFXWHvJq3XtjTvVyUB2Ea38L28dehTcrG6dccnB9X2xp6yiQQQibb1jYmQHXNdzKpbbC23roc1",
  "key23": "CeTeFkNMBumG4zLZLk7KSGPY2TjZHUFPkvXXBWAGrrf6RjoDY5nEYGSTfeYPvvjAKp1P1NYC9qEq53Pmu7zNFtc",
  "key24": "2voQbjW7rnpKXCr1wBXvywstCq5cDVFru4UqFiMYVzZYRZeeLJ2eivQhU5gQds7JUTmxiN3wUGp8RL6GrE6Wsjgr",
  "key25": "bjt4B5iPyHeQGEByEsKLnzrDy7G8e1dwFBWxWi3EtQ3fiyTgTRX9MNc6ENAnyTtxtmCfijcG1XQ7jpn8dguhmMx",
  "key26": "3zbNacLSijkLct1uL4nRizsqojHGxE4znKcAuTYJKKdGeAL8RNbzwUqmb8zi8T6cVcFQUhux4YGQo5fa5JzfHD84",
  "key27": "3oz97NJvYScZVHypLxPH7Joc34hcnTuCaGFrUEZ5b3eqyz3GM76fgUf8FpVRpZgnofK4ChyPbN8PZVa54bwdPCZA",
  "key28": "5MQHxZrMvmbsr3vB2k84Z4pSHLHjVp8E8vXy67Azwj7vgcXfWzbFPxVxDNguNuGif7hzUBqK64joZoYWjFSQ1q5F",
  "key29": "2aWV2otQR3zrm99iU2tMs7ZP2H8uE4d1tkbAAUB9HxsHQ9NAFSjHb65uqbiSCKoCGhHWD5xxf9QkaTkzUWAr8jku",
  "key30": "4hxnKRDfh4QZrTEk1GYyaspWdF2pwZPGtk7QnTVKtxevPjLWQ5tEt9tqMTiupev5Db7TLLEVGDybjbnU88tyrKqf",
  "key31": "4FmLyAXYfYYzBMpVsdHf7v4A2S6B4P3Srjj5xyiTdugdUurFcccXjeVGTVUqqABDHUncJwjgggodeXiSVGGXne4y",
  "key32": "5aXfyBJw3Wbf495LmrK91ydZiWeTpgmVyGqTQ1sMaRvDtZjLFY3kT9cSbHEttg6WtHAbsW4R2Ntj3TskUqyCjWxG",
  "key33": "2iiLe1as4SGHSAZ41rsBsSk28iD55onrsUpP265aB1JeEWibJRc71Zy3Hi566xxFYAM3xGggR1iEXusWBsmXxHJ7",
  "key34": "3zd7H92mpZ26g33J4vJ2bFEMhsaMYmhTKJHr6zaRWx7kxExzCKSynqjo5ZKwBL5xkkBB7aZTmTQYVRZ4GThL21Co",
  "key35": "5qYZmHWj5awQ541HpndHbMaWFh1zKP5uzuDL9ztfv6UMpAVtgAwAW2DjYgUn5PBqVT1YXm4dW8EXPXcCiUQubAU",
  "key36": "Q7ukVEUYLf9bRN8fG9i6un8hRXuujAbMwrabH9Amd5E6Bc8uNrrmev2WHUzPzvkJp7SBFvKoJ6W9ReeW97nr46a",
  "key37": "5q2gAXZnyCfhQCoWoyywEVKfMYNkLGENzAGKU9MHpYYSiE8Hm6vU5jd2NDPKUQwYnjESdHzztzP3T3B41DdvMPev"
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
