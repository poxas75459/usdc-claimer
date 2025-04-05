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
    "54Ng8ZnnJH73376dSF69HUdxbmQURhd29zSq27o72RjpmSKZrAMSGUrsZGTh8yxrkDJYcFdfdz5vkXhd1WxUz1GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKiBuCeahHPthXp9unyLHQnFXMUxy5HemThnkhjkxhK1DjheCuAb663xTcfGbYbfa3ULigzBrzN2L4NSagKwKPY",
  "key1": "zdwzUbehKt3g7s4LWw1Kxz4q6PEb5gjAsvxE4UfQjbu9Z9KgYUHDzD3fSYB64jvs7hoKfYSKMUVpiPzDUapgPiy",
  "key2": "5fC9heYx5py2k8kpJvjHoApZpxjSsx9THAn7KK9D3fxHiJdkmR7eTPB6nz1g7vJvWcnzkT912ffNgnrDkE31Mgd",
  "key3": "4aqCJSg7GCzzpJxpzEv4FuKH2oTcaNzdoemrYhv3sbBQPv6QWR7WNubhCRVarPMxPpKBDVQ7hTHBzFaVBF971XyZ",
  "key4": "3hBwdQvf1bxYomTjJWn6VECrjyfn9X7MZm9NVndPkpEoeGsxbu7k62We8g4Kz8rxnjmmbjAZGEuiLwrE4qf97po1",
  "key5": "4kaJQRSpiMGUMWcUwLR7t7RTrUp9TPn8RFqX34nJq1oYneiWN8N4P9YZ4ibJeXP3YTp9d9xGHqSkvToqZH3yRdna",
  "key6": "5dhfV2xWTquYWCZmsoZLEwgSfAZ5XQHhGYrCxzsNVAzNMzdTv1XYFsy9T3faVoiu9hLeh7LwitfHezvTfnVC4dM1",
  "key7": "433ruCfQEmnBYdGN135FpqcXgCCGr2pfG71nH4fKMMVn8ed4tYvpdmFtAiciw1ZQeCeZKvtNjLmPHFrt9uPGvtuC",
  "key8": "4MSrNYxvBN8D3Hr4Bk3fgdPz7yegTRioHhK6XJ6k4AtM8Yavuj9B1xtFBpiHVcKT9nAcc4QpwMsQPWbn2RL2E7B9",
  "key9": "5vK9zt7ZHrjDzvGR3jA37SnNCBUopvEeTYt6CWHYiwSwk89AgHrjjC8zFvQcHJaFTwuQCfJfuvVtCFa1bRXRoYR4",
  "key10": "2a1APfhhSPbMSLKxAuZRCXATfSkf9raNEpxNrqVkdfSqF884GFNNLNVTfGxicRB2nhaGMokFNrWomWEujR1uwYwL",
  "key11": "5RJEc2eR8ar1bEvoan3NkxpkcgUx53y8qwD8ViT2DPBYUi1sZWEKHyqFAayPvvhkfYzxrxi1dRNVmbz4XWndRt9Y",
  "key12": "5uSKPhCvEzDEkRUqUogtdSwBuiPt1oH1uqTNiBPUAXa92goDrDRgB8WhWfZc5spaHRFQucopFLmZPQzALz7UyppJ",
  "key13": "5iUFGeUGEfEVyEGag1igWh3imyaCHCDsWyHpx3gBwLU9sPaQXhMsueqpsSSedGBZFLtAC5MU2SiT2HkfbPW5djoq",
  "key14": "5mog5krE5vXdGJqtW1FwPXJyeoCY1VTvWZPUkg6EmfBQbuHAwB4GNueZhUvZdtsQpt9T9Ud4ZhiDuBz7qbzPUzBv",
  "key15": "hDs94aptbW2ZRvxa89xXrmfSdRUwS2KtHMaedS3squ9yUeotsV28hwMKqvJjQqJnTmc45mvzZm58TJxh5jSN1J4",
  "key16": "3ZXrRnVWmL6gUoB1tq8rtsd9QnQbhFTFT5huuw5PRMZBCgcLgz2GP1u8zu2pSsNLFqShYGna3ST1YMeWJS8pLgcN",
  "key17": "3D91jaaqqNTMy6MWjoLBG3JrfjVtuvGpHnf8CkVdgqduAbLy27uKkqtjW4Q1Wv9KVrt3Bi9DyXLCTj2Py8yNss7x",
  "key18": "4Zoc3N3cy2LeUW5Hkr2qa6WYBEi3ELdEhDDUvcFvnfE9Ro6JvaV4qJmUr6uZBkYsGedTs6Xh54frgheyz6yunYTP",
  "key19": "2sG5A2Xfqese2577iKiU7LZcBymxHNvfJ1FbCEXre8rZqf28Jtu4DFcdg2eoWycuQhKEsg5Y54j3vTKVuHYbg5B1",
  "key20": "2Vbm5KAUZfsmUdefoCPiyUmN2FWsohMy7NrWNwMg41wN6Bi6Soavv9N4FffshdHdCZBAg4iGKKCDvqKLe5m5DSaa",
  "key21": "5bYuAuv2wo5yWGEeZVh6JhoGFc3LC1xhzZNEbwikJNmUUSySsBvVfjL6q1aJsaZjA6znazdCk9L3p4SgzjqYJ9MA",
  "key22": "4kckhFZJb4nDTVFK1k2mwHbvU3fqDiaCwk47WsGCQKrTdVYoXpPHPfZEPfAjBi8hod75ixaKBBmUQkaQUpTFZWi7",
  "key23": "29Kf4F6gbRRCbPFciyerwr23ZQSRMEHmYMPafHQV2YW93o5a9yCjHTfhHuJGdLEnQcpUCtRMJG6BXAvHyEpbQpWC",
  "key24": "2jjXNttWnLcC6xiDMgnVXjtRNkebk11MRswNJaH4weWzPyxfGxTKUZWV6FjfTDNcc4yGMm7ESfibFRn2PkakJTgE",
  "key25": "PtgoM2WPgaMdBRsSwhkSijKXGbqq7nbJhC173kGzzMZDpGNMKL98xvJYNyRBJnFWHqcpSczfMW1KKWHYNWhpnT5",
  "key26": "oNG1TtXV1BnCLLD4hAwU1FpyniEA9ebYgG5Jec8xxBuPCPuZ3tGfgwBipb7TZycVrz2eXQ29TNbHr3RWRuuZFg1",
  "key27": "5FoVF6rgeEw617Yb1MjSKKz7oxFGH3bZUKZ6qXuGVtQtdQTy6mYQZUDhdQMXazWB4TuozqBnPnds3RT1NWVCY7Pj",
  "key28": "Lx7d3CmovuQQ7Y2d4XSasPP4HSWCsUoHZbj8ZpY8oiRPSETa7NSNa2j1EwkUx6VNTpra4534xFYuTkjFn9AmRGc",
  "key29": "3854emTBRTBhoy8YPqirE15jJQ5NZNBbEthVUgQn5vq5GsBSLQ4zudBkkNjQ4P8yjF7btGypJbvyFWzpwcMzxuJU",
  "key30": "3xHWFgk2oP6bvRpYjrw9WNLhT7oYwVViEJzXYBEssrySPy4mpjYCK7V9hcMnEqCVsGebckXFVUFFXGzCNhURB69L",
  "key31": "7CVrBmRivvbV8e435GFxJqBQRZ8dhwX1eW6Jjvfpg3RdCxgSY46z7ZAKDYDxoX8x2P6FS1qz3vGv67pGQLtNphw",
  "key32": "4mx6p5TnELXBwrcJ9mZmSBX49qvEkfe5DTNuztgJDGEC8144eRDLbBE5MMKjzFceLzeKNg9qqA6uzJZZ3wGbZuK3",
  "key33": "4iozkYAXwHF2x3zz4YXcBnKwcYW5isrhHGyDfvkj3r3ifQFsndBsNXgSMwZQB1VHx1WF856u1FXx5hFRhBQvwaLU",
  "key34": "2K8fr95ZXdz9fEpRvreBjCNo7m87yEZzzCUX2TXmhaN5kTiULLRtgtX7UfQ1kXxj4VMdEGtt6Do2CX7SPq1hMtFr",
  "key35": "4JGYNfKKKx3RYy3ejnLC1QaXML6WF4NAP4tpVT1J62uYT5QELUc4iaYEbpaNFkudH57kQeSRXoAuuP863MSeUJ5M",
  "key36": "SZ8UxK4XVK4tyjqvG8cpkVN5m8B41wfYS9dSuBY13UQWpLLNFMecVw42ZzN4T7SRT5gVJ5EwGpe7YD752rQGCEw"
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
