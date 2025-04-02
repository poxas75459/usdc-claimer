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
    "Wa1SAbNXKWdiFirbhnmTbnoufY8E4WcAbpc11b3VvHjQexXpdFmVLXZo4YXWU1nqTmv3UsLKikXGNLFLwwB2cHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJ7NkUe4o5jTdZEGsWF4C8rUmHfFcLE3CBsfT7uL4qxdCvBvWbXiiMGXvTKWrSxv29AnTo2wJFe35rT4ZTHNnp",
  "key1": "nmuCs5enRhMXucNm1gkhRp4CdijZFHCjjmwRA9APLLSAj8Bm3v7DYqTUs4osWgoyerLQCcF1drEuVPdsupWvEze",
  "key2": "52JJRpyVRAfP1vJCyY4gjN8QEknj6o6STKzVgdztWCAhs8jeWYokBcwmtHH7SNuBdXceUue1qSJ36pFkHmn9PQiR",
  "key3": "5heUyvi7sKMKrfjhY2K7fgRmzvmB4y5eWkeBtH8ps2uTostM1XLfDnbJvUFhD9SudfuapmgcAcWSwCfofyqmSWne",
  "key4": "33kzaVjY1xGNee6ow7FwwWybTJEkmCTCfvtAq4H5YuBYuT7ZHbGdPwy4xaWzr6eASBMgfJDQYFpmffdjSduSkdyV",
  "key5": "2yKY1bDp7KhGvjpa1Gtq2xrSdAE7XAqjMZeBmMgQyns2otzE75vwhoyjvQNuoLi1RwJmrNhiupgoNqF5bXzceVaS",
  "key6": "iZmfxxHpEnaghk1xtVME5DoJrCYP4dLd5rdaVrW5uhL9kfyH97w3mVvnLWncevfZf2iLoGcJU6Mpyt3bFMhrSit",
  "key7": "5e2du3KWXSM2CLcn8qYgCoAFiDtZKfhcrGuTy1GfiD7awkJ8uXUFrQu8LuU8tjNLAmkYVz8diJXfBKqQ8tkNK1fu",
  "key8": "GNHUbJJUsz8Raf1nAEasyzNnZFDUkuooCp9dKTGPpB9sevA14tR3nubd8bcuumsKj1xRJXpys41Gz3tHoqMSwhX",
  "key9": "4P7H7JLPBw5FVoniE22Fm4bm2iLbmZe165aeRHzibv7CkSjzov1yU4Pc4ycBL53dmHutgiXKivGzjURGJCKXbQKt",
  "key10": "4RT4BGTypkYhpYbqVECjjhEPT7iG2dsn1y6KyhkvBG2FsgiL5FRLQKAJsaqg78b97TL4TwuAkMH4HWxMNSaSX3BG",
  "key11": "3VbZN6wRN4XZnu6NL5GqswuvfeExzhxhz6H7G3cJJ3VMpCTTTb6Zmrayfo8uCU63U6RveQeKSfQPx5BnVGrxVyfC",
  "key12": "4smoydb2wpPSmmqqpR7ajo58KKDsB3nMfi5yTm6e1DoKcyUDAtxwZVStH2XiH1SaWGPxU4mZytgZGxcX17EmkNcj",
  "key13": "27kuC8mGhD2Xtumo7phZR8KqxycAEe1vJHHNztkmjkjqtT62c8DyKFbEVEBqraXYxskBXHFygPN387uxL7F3JqZp",
  "key14": "2YKdCgbQu9AjRKGyUwQG1aHKLJ5Q2mLcNvLRcuo871mstPrPgdajj9sNnCBNsq1f2BPn4E1WrMxeMeNeiD1H34ob",
  "key15": "38RMNoAd1XY4LajTEmViQAEcA4k4fbREP2r8GCCcDWMZQV5wQpRY8NNQwLEj4Zx5ZwkfjHaEAGzy1pxHwLoeFZqh",
  "key16": "3tmJKwoFKzqHLTpwoMsTgicgBSfaV8GTxeRNxXj677p4uU3my7amE3PbPBR9PrEWpQNAwdz73BimQBgqTpMGn4zc",
  "key17": "rGuy4H7nVNNkbyDAYPyYiYAhSkc4ot9CbbgayWSracmA55YGpGzNcZsGSZfLJ7WcspoqCMGQCZ6RYfj38foX2UQ",
  "key18": "Vsoy91bbjAz8rgKJWp26TkWsa8Ld2PBGxtoWx36kpaKuK5xFggx3F9geBBJgaEhBoP7TEDWQgfVYmSKgTp6Dg4N",
  "key19": "34cXec4DsfEWXywKWWPskVkR2NKW5CnL9Z2Cxu8qCSWtiXoz7a3E4GmWpMXtXvAiQkAsqxQc5TTPWsF4rxaT7Lor",
  "key20": "5baJdrafDJtX7M25E72SkZzHui4oGMPfsHL6znotRyWZUMchNPh2Z5Er6Eqywrz1oyinau7D8PxYFeL8sVcbVh7T",
  "key21": "3jCESWvcZGct6za8AMHMh4bSmVQf6ALSbhKh3n2g7WEXi9r4KTJZL6EQCe5h4aoWGHMmQjzmCDLjU2oEkozjBmDn",
  "key22": "3DCSY8qSjEjZdRFFcWN7k22g6cAPL1iKmamF6UWU4U5qZ7ZmXCtB37FNWm49imf272z4EHf6Q4j1rUPXRzoiiE3S",
  "key23": "2Cumnnre2NJDuPQJSmWGBBCuM1vbx5btV7mtqjXWCPasUVbXkepWD3g5nmXFwvqdD1XeGYn6cR6bMusmNEfWPtz9",
  "key24": "ijjNg61MkNyqKSGJtRB2ijcxW9LQ2KsRwaU711ZET8ZZ1WdH43zhcJYFFCW2Xiw2FvN1vGCwRTF1ox6YTEPfeMC",
  "key25": "5Amr9qTVEcpCtgpLeePNzzP6rZkib478D95tEJF6923bFw1HBoBN75BCdiFa1kBGYHyNxLLBWL6MJxNcsYwaqGEn",
  "key26": "37qTBd6H4LREWkK62fSk4GiKipf515TSbHK8TjQf1nxfQkQFfco6gxenTjhpMeL9FBSmev2SYhtQfTAK2GP4PoVC",
  "key27": "3RmMEtV1ENvrNxD3YYpDKF2m5XfDmcp3ZCaVDzdaa8uo4bUy8GmEuou9ZoZHLgSsXN2c99EtnsqUFzbsADAcTWks",
  "key28": "2o8C6wAWDhQgA5XxEKGqCczDvYYyhCCbvQ6ayT9uqKxsv4sK7pVei3C48Ay9aeq7m1638zMmrF5GJuUbiXjc1mGX",
  "key29": "5yTJDpSxh4T55GDsqqLDJh718TjUhTmj3t1d3t9hT5phRj5LSuAywC1T3tEGWuJfdtqhuJy8XUa9vMtSd4KUDrkJ",
  "key30": "5vs7Msruz9Tgte9R5Ymx5TNAvcmZizucjXAPKogkS5ni1MBpzapnGrDbpsYoZw3LHAdbC7cmYE29LqVVX2CtjKQ6",
  "key31": "LofkSkWuYSnttzRbuQGTNNfN8XrMxRjxLAwJYKMAegotCPgKY17N4ye5jcwUqEGfEh1QUnfb6WCsLQjEM3Ba4gp",
  "key32": "yDc6281LGgFggXChtmKmpCXkjTVFTW4u9i7PJVphVT9mxUxXig8yib3kqcJxrmeZZkWhCGdSpLaq9HaB75nzRV9",
  "key33": "25snfgsPoBiT8KCLVxnSgvJYQyxnEew8E89H9xAPpQAqkdcxdLnE6vQLBJ5vX9YJFYXComku6YKMfqLXYUaxasEu",
  "key34": "2M7mHCCmVtMJ2TqNmEn9soYfBUuLTuaGTtZToGy7GJCxR73QWs88SWmvZnJwW65orFvdXYbVS7HvS4a76F8J4Zy9",
  "key35": "NRJkSrKX1RDsozGTJpWVdKhQ344pVWrpgTBcEAXoCWvqEM1C9yTv3dzWkSbK3PVyf6eUHcF88cdJFaNbXJTMauU"
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
