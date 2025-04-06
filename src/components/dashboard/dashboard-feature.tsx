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
    "5Nz6HekYEMidVzj1fJE6VnTC4DBa3xpEmMWADX2YoyTie3LH8c5iHradXf6eSFLzraBRjSc9ozSbkSUfxPqfbai1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvLgj2TGcWAz8XwW5qmUcpUEDKUU5LEmyaMQmYDvXMzFERSeHQsTvp67uNhriqtC2yYYhc3uTTAFSiqGrxg9oig",
  "key1": "4FCJfxeasMEXHTDcvJ4UfPLN2znX59PrezbdFe5KbSgoDrYR31GNueqrsdX69ch4MVtPxGDUp8xmsAavsbpYU1JA",
  "key2": "3GeGSmyAbDwykA2u5rMDe32fgaziMSYcFQ9TiquZ8WAQ4krkH4EdusYL7wUt7Tc7P8hmJTEQMbcQYdrA6Q9SZ1qu",
  "key3": "4a4NhrYhHKff2MFukWbUT24DMmAdxkYeKizGZtW43E1zTLKNs55fHeLpgyS4xU4oawxaydg1Vo8NxjyKdWKLSRxs",
  "key4": "3XB9cn5MwKu5CFe5wJpvwMEPyZM5Up7DvnM2LvUEhgvTeeNdpwn6vai7sUvJr5WxWJAyxEDQc4bP4gC8aGFjvuXq",
  "key5": "43ZTe1tK4Cv4UeZTrQehiaHufNde9jwgRwUc1MjCYntBEYTtZjsi7u8hZ4seRTsmF5ZpVH6P9bnUj1B2wp4SDCdz",
  "key6": "2s4pQ74LMDQhobWPMB7F5VXaBczsmjfjRijZ8mEb2xSrBq32kNC9Um36vutueqEHqYaw6De2f6BF8V5nEfY6Pass",
  "key7": "2RW6xLbZw1smryFVfBShKtisdP9H6BtWyo5E9zdydgouq5pCbgkByuq3PpG5romdctzsRE3Tnr5vuWeqKQEcRWHq",
  "key8": "62tgVgbgzDettmdeJZUGLGXhNLMtjf7d2G6WFcFawD9gt9228AFuZUe3Leyo5o7yw7TuQH268XMcizeCRT8p2yyy",
  "key9": "2Ec4xFeP2Ls9nTwJmiz61V9vzoHsLmNyW9D3CZ3WnFkTNkHanYkHVrbdSde2AiDveku97kqZCWTTsdXF871u3GNy",
  "key10": "3dd5RozM58xfDguarY6jRP88GfJMY77hECKaaJKteiktCiZbZ61yuYf9LKrh7kHDDMJ3JsYjcb1L6uX4hmy8dX7S",
  "key11": "4ThototqRVDDWVRXEECm9ayKFwFuMLeBf5yW8gMqoBDbQz5DNYfGPoDnwQXuTpRY7rMYzkQpDcFGKtKGjzDbvPJm",
  "key12": "2pZGjBFwQw25FfB1YYAXCGCWMAJTxGgQTyMgAKUJcofJMtAeDuSci3YuRoWSmsWKPero7WRivbhQeN5mTwZXb3Bk",
  "key13": "Fh5yWe79TbzLKhR5j2iYzZyySD5MTeQJCVWa2r7pkuRKyk3hVVVNt7HBvvPk8dAidzVWXPdWgNXJnseo5cqkei5",
  "key14": "3bR3yZz7npBrs3GGeyFPJhDvmWzXtzbjZ2rkXrdKG7pN7ErVFXQbuUi6kpkQrskUC5n6AtKNCnmCngHx28YpVDGT",
  "key15": "3LjBQXhyowiKeVkRUuQoSs7NRq8grwyxRNGgkFqg6gwuCSHpm7CgUjFiNtCZB2y9QMkuME197RjPQK51VHJNgPzL",
  "key16": "2aGLtKiYqB9tRa4AHrMhwHpDWvtW1GTGicteRhaWXwYdLmoDeXPgeZvYfMmp1Vf7mgLhEGmCEU6XNbU4JHXc3S7s",
  "key17": "5TSXMu7CNYnbiJfrnvu7Ex4BTuUEqXXJxNq4ZaNBQ5bkiknw3e67HDfNJDtQcY818bBVsRYHmEjnFH2mhcXraGzR",
  "key18": "5H9JWwL133RSoXksC3q5NrCgw7A1p3F7R3fepXmBz6JAhz9Pb1tS8ADr4mTG9ZPVXrDvqCN1t6xZ2C3MCAytGdsi",
  "key19": "42t5XxcsLvSRNEAtSz3f8WFJoNXyxdcYbyuiWRnraCNpWiJBDPdMgj1pqjNe3uaMLkQKeaY54s7kHs4nFmwBNkHo",
  "key20": "23aQVnJ6iMzv23Mi5ZnNFUnetUisjqFqQi45p7CRkUshAMKiLJiTje7vdm6Hf7wAjJaCriUmXXQWmeipQPXy9ZCD",
  "key21": "4k5z2XWVDMM7yCiDbq1ToijJpnAKYmPjdM8j5FsyfU793T5ZpV79HxonwU9Qmf7j76256F5VTgKiNJJzXv8qmhGJ",
  "key22": "5ZnuaE5cTuuQFtWhdJqxiarWMcepj7wnE2p1hNQSmbBkf9fSV11nDccabNeQ16ijnDi1Nvia5zChiLs2yA4aHLAM",
  "key23": "5QuNSkzLBBti1z8ZeSsvveF2bVqG55jqgMLtyRrN8kNGUNyhvKnjtqgWXsSh3AKHHVUiiiRQxRKp7hK9tyqJevyq",
  "key24": "2v284bs8qeSDcwenDGcmXnQXm4gptaaxeJE3u1h66uYsX5WfFUFnBJDwJCXSYLTjxWXbWUtsxqRCaGtkpJx3AueW",
  "key25": "5Vv3WnDXCJnruVHYtovqSgDHx4FLuJiu1VrAZ4Fot4i4aiwZiiYMsV1aquVFvPq9Z3BaLizvm5z8gxVfWg1MxCAh",
  "key26": "5eYBvZxVBkKVB2DA5GM8Aoi4nq9tGvm9MvtHy5BcQr1pYL9zQ8LNSyat68j6YverQ2pQYE4JexyiR5bu1Ho73zoh",
  "key27": "4XkCpxSdEwx46ua3WH2m8S1mmZWGZjGBqQwnbfuvPDatM8ffJ2UpTRYs7QWVamTLVGrYk8XJKXqkCPjwcf3BawuX",
  "key28": "P7deUiW66cjavLcaxdDfy7gb69RA7vVKFYhhKLdUoTzzvJNexfjhucXX6wkMHzAuoaMk9ExDnvr8az4WndNEsDm",
  "key29": "3paZDBC2TviTjJGLSbozfKLLqVDGNJRA69CaUeXMzbrATLCDRnUnu9KUDQ9rgJeRAWNmkMF6ZrzHZ3mbhjN8gm66",
  "key30": "5oKLZ5oCLU2UmFXHAHeuGbr2HM275C47Gfj6fauo62giSLXjXK1hoctJ1ndAWRcXZoQswbXoJHqEK9B85PmJJ1go",
  "key31": "4wC7JNcuCqbmjNhQgE7dssc9mi5UbVWCSdfypckWfd4FrE6cJkVPGC5kVnLGVYmN3g2aEWTqYmzRRZZBsvsh2aeY",
  "key32": "3BZqahRaQ7MFZwCQvywYeVHQs7yq9mpwyNppEFuVTS7X5R6f9JStnaztkeuTyaHP9B4Y2ktQzCzM4Rts26Vb6Y8G",
  "key33": "28aLsoX8SkkkU8CpUqVxVzq8u4nHC8AH7TcAJkmYy5rfSrbFv6QnXzJiLhikAZufFagdAiaa6qBtYBxTczGMoBfn",
  "key34": "3oM1XDYPM7crxPdqdZZpmu6LYB19vyeG1dF9UMzJdEWh2QSA1TZUasTRTsgCMrhadcQTr5KPfjTR5JsSqQ6GBtgJ",
  "key35": "2mVuGTLk7YAbBWBRG16kenm9GQxQtTzw6gUxHA71RA5fzM4AZqMWU6HHhikRZwmpYDm4KXcCGG41UzauezjoNjnv",
  "key36": "5AJkbzFx7fiuXN3xyVF1zuq7wYLCXfBfVoJH6mTuEMcXKDdwKZAuHBoH5RyiPZgR3dAu6FDyxF8qkCWmbRHmZBMH",
  "key37": "2V5TwtH2CVxjgo7oSCSbyRqoDozudU8efkRjt97r37mUvXe63vZTryGdofrd1zD9Em6LJq8coyuWSEvMMgA4H2gs",
  "key38": "37g3Bm7C38zow22w722WJpCQyQw3bKC1Cc2PnA6soPBt4Z89Mq3QUNfktFdjx1ruYeEeE7mhU6VQoejMf9cEUkas",
  "key39": "4CDP3LL9mBqACVq51V98aJyhzJrd6yv3JbWv2T8aSpbZvoZ1YWc1X7zGgBbuSsQKB3qjQuzBzZiGNbhdTGdtaCcb",
  "key40": "4mRDhBNZmhPMX6an6XjgoN53aTRViefG2DhLtDY1ndZakmP9129ZtAPuMHjdfBo7xcejNyNhuFdcNLZGnPG2Vuat",
  "key41": "62jLoNmYsjYfR91VAH9fhn5cHSi92JPPcSxbD1wZezkLspT3TAFnaPMWqupSCq52kTU6woFwbrXuDRzSjMZsqtxz",
  "key42": "4Zf9UZNf8Vrwo3Q9o48cGtAmND9rDt97A24f7VZFm91qYUmxARaaBALXaswwoDQUyN29gWXY8WNTH5VLpHXNuoMT",
  "key43": "2Z2bQUKNumAPCCwNYoVCSCCWDzF1gLPrSHNX2JVt1xHbQ6XJzMy6itL6zvzTSBfmmPVX5x2zZb4vcEfDNDMT7Cc5",
  "key44": "5gYowByCZDxTjRUwBLjK7t2jcSNfcz9G6m3VeidHuK22fXz9kkGa3J7cCrxsfqziu9eKVUeqzmgeYsKrBBSda4KG",
  "key45": "44amzBgJDk6eNYFbBYAhHhgprvbY1ZSSpyydm1nvgoegmBFSvi3wCoofBA1xVvZdyhzTA9gneSvRdMBzg1i7WvMZ",
  "key46": "4XkpBFjDY5h4saYnavhiKdiMK3MYQoQj4jHJMqaxhyuWXz7W3gjs31suJHQ4dCmXxYDPF2N7SnW2xrbN6zy8LZhE",
  "key47": "4TePpPz5HguHqyc23cHMnGNFjyP5xJmPZpEdbvLPVL3wpCBCGEwxm9bosP6tHkGd5RX4Co9MQ9AG1XwenGfAj2i4",
  "key48": "q1KkD88Pu4rUmQc97Gu3KosWErwfbiuRNrVF6GBM31DUCFnsF1T8d8VZ6uqkD21fJfzsqLvC7c8NmHZynQEFiF1"
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
