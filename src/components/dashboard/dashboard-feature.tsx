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
    "5ngiC18dQj84SgM8ZMXdypHx2cQxCAC3xBgADYc39Ga9wDFFSnSyW7zs88s1TcWf65rwf1a6zLFMJFQozM9VHmkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WhaRLs2mLEKHeZZoejKDtUcojr9doCTtZ3ae8NsGgXRVEpp1jrLb3wTqBQTvYfpXQXXBuUNCQn3o1WxnZNs6Xb",
  "key1": "4DVX9yvCE9m67jfQmzmieam51hxiWj8qz6LBpP9GzSKMtsPSLkgmRjZKjWEHpfpzNHFjx2YXTCdwNEaSdZou1Cj5",
  "key2": "41GbVqSZZPzvdhQDbFj7XYj8mutqB2nq6DUTZDR4x8SZCG8JywiDJRTkPjUBtqvwrLvDqmAeMocnamFTrx45H5ra",
  "key3": "5VKjyJeGrbH4GruRXfAwVoVtWLY4vBrghpF7brPjpKmSwP2RSodg9Cw6v8eqgyutipfauMrXHaj4EUky8ByjxGPn",
  "key4": "4wWi51Z274YYggTQyY1MAuiPspfBqZk8Ue3j8pN7YBXLPt5VcYzwgaNobkpmJZ3GJn9XgZzuFF7E52zhARet6mFF",
  "key5": "2owNosd8qXrQDGXpb4YyPKrDReug6121P8TzcJQgbDaqF7kUVSJoasGuwoQMrgyvvpkfZgeh5vraJ6SdLijQ4gaZ",
  "key6": "4Cxu93zVsS91dZh51MssgjhRoHRNDKxBH4opQK8uX6Nn48sWzhvPQYTsRqVnN62fmsTU4uoxJ1gJe3rxrt3eEBJu",
  "key7": "1vERayAvsne3btZMgfEbtZwtxHbeBdnpBD4qroTAMsBES78fUmbHgKpKH9XBYibhzVc2py1XQf7GULtQ7RWhhym",
  "key8": "22aszqHzhY7xL3uwEQNKSDSoxDPb9CwsDyGS9kch8Ej9oqBRLE645NGFD79fq5Ye7wDGU4xZk98MvkxSc15wmQC2",
  "key9": "2Na8GKzF79zF6zxxq9jWm32nwXR5Nin5A4RALtHEgiVcv9Yd9aGuj1ho6t1cQ4bjVcczCHa927JAUTfbtzLugCoH",
  "key10": "CLM8iHVf3w4nfBcqLBiKnov4P8DRVA1jkXjSvfFPWnvNBxFTsQebHfj2KwhRL5M4wmwFkhtswnsvAd8TNwDcwvW",
  "key11": "3odn6tuGQpQizKxsCMHHcgtmxcU6QJzX4cCLvec4UiBqjwJ591Tt8ZaNRBnAeREKTaMBvsdaCmFB3uE7giGw1d37",
  "key12": "3V1Gx6j5s7QrkbUZ2cSRJ95fYD6bdTPL9Vr54Xp4hw1qJ6iW13FZdmk7V6iVKET39hvxDk3eALvpuAYZYd4nYnUM",
  "key13": "4NR38e9MtjM6x421hxMiLdrkLqqFpeR4GtiHfeZLMvFLCFcZukxfZPEi5mUArVfctactSXoNbPWyPh5pL5DrAnVi",
  "key14": "47HwbQNRFDiEiKj21iVE7XmsENvhMSsCRDLQKYKbZMiAqg1dJeTC8iGNRCHPB9g8sBL2yos6iKCBuyEMtmvcDATR",
  "key15": "5YbKyJTiFLus3yn3iCmgmtSoeTmSyQsyk2aGAFUwwsXnYwFJjkg5CuW1MzX9SYwVoosWQdBHN4uNhBFj1BHvLizq",
  "key16": "5avQT6vToCN546exSUKBC1xWuR9VucMsTwuDMa3RdXM7JA7FBbuqhj6hkMaut2411HwpqvQLMqK7qbWV33wLJs71",
  "key17": "5ixvYJwRCcQwyFAfqLkR1kqTjfSvqtzyKc6iASKvsGBEepU81pQxi6ex4fdVESPBMhsSEEwQDYiwV4X8W6jHUxcF",
  "key18": "64KXT8vR8F8qZkbzHtfy1KbTbdfvcxHEXSHUJL7idjgqRgp3mvva11QKa8J1WdRLW6115qKQvcw7oNs5VvZdwJXW",
  "key19": "2RDngCZFnZ11jKgsxEYjh49NjkSnShxiU1wTo7i5WtXk4VPgkAksWLWSVepNcfyEfCrv8h16xDTtxXJge4fM5Lqe",
  "key20": "4ZuDDpMjcRTyfEmkv9ewbBjUBTkAyfqYK42bBzBHTj8HMqu3Cky4sewS8wjHP8rqMzTgGVSDT4bnQAxWRCz8P2gq",
  "key21": "21cskq1e1ZAFdaMw8Ro6nzWYRnGw26HY9iEDyLkWsczja3u8JmjTZ7YZEk8a2A3sXrsmougKQCH6vRwvwmGWUaYu",
  "key22": "4ond638XipgpihSZgzbm8nvrtJxFktRD9AzuoqMFQwEDKALSoXBkBHdgDmKeG92Qbyu7p1VKczRk3CK3ezRnZCJc",
  "key23": "5DaVQbNYJZycan4bzy3GrVfybFgKDGtkShcmL712qmcccNwn1RDjJ5u4LgwBW1xz9z5Q4XfbQ2Qk83PJkuKPJqvS",
  "key24": "3QHLGhAMnzA8zPyZBwV8UixKQbgLJRab1hk84VT2DtfnpoWRjxM6XakNUiPp8j4DEAJ81dGyZdvuJ11wAR71aLdZ",
  "key25": "55hXuCMBeKMkhgcNdQcMEphd6a11gBWdDSCvVRLkdTiYexhacpz6R3C5STJAcYGFJuR86L7PkCXtKMwEHdBCkjE",
  "key26": "4EmkBM3bkimrvCVywyzFxwkhc5rS7AJGsLdKDFTXFC3UkTJENn33fV2GCMiYSGbWD4i5sko2zqZvrK9Moboeoaj1",
  "key27": "NTgN38S6YmBGCVJ58Uj1dBPnJVzViAM342MBdoRFNLcstPz47TULaYqzr7p5qBNU9tY9doCHB8aHNySfiTN88Md",
  "key28": "2rS2CvAsMoZSwaa8MkpEKmuufoow9skaFMN1ewczy2L3yxDdMCR6t2WpbX61HKfzBN5D7nRazdhzV6TtKXVieUq7",
  "key29": "kEDi4KtSiXhiH2oMa3kCZi1yFxDaHSfKE3pFKQkG3BT93XAcSUjZurqsq5gf63dDfN3aJtxMSrNuJFJWsj47thb",
  "key30": "5kMknGo73PsmkedqeYuFEwQsmGNEBToeYeYzYheSFMKotupmZo5ZX7bc72bCy1J9FJWBizmHNYX1q8mM4Xzk37nc",
  "key31": "5uPJ56Wj6PRCN72zJq9J5b7VYqKRmAwx2iwPQEh1RxXYNE7K9G9ZxXiB1K7Lw7pt5GZpP5hLbjfe5EdQdrVPXcxt",
  "key32": "224XmY4cY1E6nuXpa6aEkBi37f7YmTnu6SjQgBK33fossUE1dDHVhRC424ySSgmrKvsR6nTsZmvTMx9JVBN4zn3H",
  "key33": "5kyHN7M5QLoNtL5dz2PYari3vGDPiAa5zjvjhpMP7sbdXPojEJqDeCUCM7s9gVERnt43E66NhEvPUChuD9qxTVNq",
  "key34": "z8qkiiM4GabxoeGms7r1qPtrAAyjqmxNSqrxJPucew1amBHSULJgkXvRyM5TgYnC5UjTQBZz8i4HAf2RNyxFKJC",
  "key35": "kpQg18jiQ82FbU6LmXy2efgEKDDek3zJXKzGsL5WkPjHPA6QDnHvUyf8pLvZXBY8eh3qQxYat3J5BdG2mkKkn9P",
  "key36": "zoiMk5FCFyLCRjg6GZ1jab4pCnHDkEWEV8T9A2iHmZko5DvCYY2mJYHbBVZDr7BjaH5h5hp1NVx4obKguwswUBM"
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
