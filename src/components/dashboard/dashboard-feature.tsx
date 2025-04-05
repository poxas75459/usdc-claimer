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
    "26fyVKJSgtwFwbV8oZs7uaZjoHiV5EPHGUZoBnhxPGLtkkBTdGejTfxphTUwx7KWoQpp5jKYNEzuzwNPMV152K6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQXiyJFoxd4ZJYFmVj8n1XCz2WGm3AxMACPLQSGYcUdAAwfBLmnBeQAkGbVh6F45MCzG68sWMh9YbvqfQP69yMP",
  "key1": "38USQe9g3ogXMhhvkoZwTSC3wEC9NWQbYUKNKoH4NWvrvVv2vrqF6LGetLE7iAniiy8N8tgTGDLzzeahU6yrYgJH",
  "key2": "5LoFDRuiU7HpXFXDbepDvJpjL3ergbBF27HbCEZFbdqWbDixG22YT4iqgMMCJUaB7nABfATD6E2ZuYoBdC6YZTZn",
  "key3": "3KfcPxmWUwAwJmaYiNKhLxfn7VZVbfSPiFAnRxz6xp5bakcu3Yf1HSjMUWJ8c3S4uBkUXePuLyqe9aotgjiC9RZ4",
  "key4": "3k6NYMCaYfEqgdZcpRYva1ehgsuNGnoFsfWyncmXuGVPDxsN2M16Xs2xq6km9sPWEzu3CGF8KxC4Ewq4dTXzW2yc",
  "key5": "3AcywnPTkxCKy8cMgxJESpZhnuBSaiJNgJ1oWA4jTZPcTuxgfE7pjagCzUic2t7eniF17rCZHSB1NRZEpxbV6o51",
  "key6": "26SsaDacb11wjyGvKvTArLrY7hDLcfDtXqy92N4dMPX6pSr89J4Mcr7TuTQT9PmfStFJ3sps4vmVSAct2shhb5Tp",
  "key7": "2vMoFzWpichkkYL7E6scxpxV7Qp54L4VKDsL3CSdrL8MsaZWRBs7buzPtyYNnN1KY1ek27YrYAZGt2CmLsFZehkc",
  "key8": "2273X5MheAA5H2TGDjP9vvwToHqUJxhELGNWHm2sAnQMciujbt45hTbqenAYMgBHmzpLYTNfDigkLTnn86T7gKAM",
  "key9": "Vhcsf3gBrWJqmC5y3ehFBvEgYZ2tE5wwMq4fdQAN8dTgGPvLngQJFuUsoonQ5Q1e7y6YqNenrjRRgN7YB8FpJ4z",
  "key10": "5e5h8Y19npkgVmgvgMvt2hY4PVu8ig2VcE19acFHW6z5WtoA5tivRoceYJHRYJ3jJ4rgBPYzUy3JyrVN6h7tZkzc",
  "key11": "43TqHzXs5CzNNgWXARD8DtzKGtsSdY8gXT356HQHp4K3QYGKisGHruQE8vc24dNrVZQkWXfqkpBt7DW9ooa5BPyd",
  "key12": "4eJQDuAynuQd7gfuhhwaX73n1k5na2ndrxZsx1CyhCnFPM6dP7DmWgffT1jRRfRZoCMUxDVpHQ7BVp8UdQfnM4gR",
  "key13": "26PV73rqH8h7QJDHCU4QQQETNgXTsEREdP3jtDgh36YpA3Na9JZZWp4wTASmNmWuHS86EDCfFTH8JHqebwrS1e6F",
  "key14": "9y3QyjWY8tSgCZCst6bL5PZZrVMjYkDAfZS37fd6CxehHDd2eTSJiA4WodXkyJDTt2KVdFQ9sJMGpgfcWE66FvR",
  "key15": "65YJjcysK9btvBwXsaqNvsLrY7iP9oChTRoYBhxdGpKHDXGX8WMP8S7kSUBaeQJWoicntAthAcX9sejeEayC5f6H",
  "key16": "2cT11rPkRuN2Z3LiUboj4kyi5u52fShYAYY59ch3M5U6JUqjPNQk3PyrZDkeuxuHQ8bkuhQc5boH1diJvJSUGV6M",
  "key17": "4w4zUrRP8oRNaGsN1ScQTyiJHj9Hz17qSgzAbgKFx791x6M3ofidCwH4X8UdpbF7pQZZSb8Nfra4yyYNevFJLkJs",
  "key18": "5gQw4EEQBeZuXRcCcJXkqDmHXAMzEHSqX6TJhMivWcgMwMdgeyQav4YkRWKTJgM7rzCPsxXadd666JEYA5R1Rh5N",
  "key19": "4WXbj1z11Vy1JCgcbxCUFjndiuuk33pqZ6bhbhrnGqMYcZpFKy5BRhPEbZS3AFeKRMjX53kJ6SsY6rnYSRmHzpEs",
  "key20": "2zcjx5GMHU9qNMYSQwsLi7iYtQFjKrJ2mNzj1BaCdcsAwSJrgCtzShY9Xhin2h8hybKoMNxU8xa12wNU77kHySvo",
  "key21": "4G7br3Rcc4dHs5okyTdCpBS3vX3LuYLAyU6w24cRY3s7x1S2HT3APvrKwCAFCvG5ZHmTAjiHU45e1W4a2b6wSpSr",
  "key22": "4HwfV2UbebgDeotZnRtbTW76cEfpYZmN8tCnD2y99r3ZEEYGzpNuX1yQ8mTXUTGbh7iVNJEzcz78tjBS2ystpVtv",
  "key23": "2UpVGZJfMgerBWEnAMMHsMmNCSUYG5HHBNtXbqyGnJpWAD8Mg9qrbxzLM9ACRhnZjD7xTPL8aN3FBECdF6xyn1oL",
  "key24": "5oRajWN2gxb78mSEgw7LJEdLYJnDtsARiJa736a5sRkY24d3N55dfg6XBoey4pCRgRnqbpMB3vqnMYN8J1yuitYQ",
  "key25": "aiLyvGRqrwmX6cquXJ3zHf8f1h6o31vmpj6LnQLPukrA5kuxKDWrLEddN65Yrs8vM2SW75MHsoqV2nsoA9BHSwG",
  "key26": "2rnaZApFmN9q4nCTgu5XcjX3uGZgauS84jaLdmg8S8Kgc3RbBQMSguGZwgF15UPjefB8RQ9stenbXMKZMxPYhNbk",
  "key27": "5r6zjLGpDQ5wRbyiUejdDEFzGkFLXd38jZQadkfX2564yVZWT6DXpUJm1EFfayKhZKUNPBGmQvwmBSSuXAoisUKS",
  "key28": "nHCjnXY46M2r78goeUdW57tcRGftb1F6bMVWv6FTQ4hZ24A2qWEZYMeCM3xhdzCw2nLWMzxm3WKygjJqhoqFu75",
  "key29": "5wjMqcavzsebRM3Szffu62tT3RaXv9d119WsiXoDbWUyi2Dz8R22TtDwXymfX7nKEs99qVyUk5tR1Mxb5otNwhdR",
  "key30": "86BNGCH7U1ASefRS3rA4qEwYfKqno3Vjv55x3mpuNz1QG7CKZXHYoksVkN3Qqc4L5fqBwviVpqALm56nXhjtVni",
  "key31": "UCH93jDtxq8Atc83j1qMkd9Yww3iHF71evdsYgkB4rQ2W2bfQphWeeim5EWUjxdJx1uU8qUNUsGgiarcYqkGv8H",
  "key32": "491w1gnUU9UHhRNveRtR4wgN1McHBXfCpzXhGJBBM6PDxeFvw2e4ANnTcGhWEKLLQEGMLEkkCyFEMKbLYeffqbXc",
  "key33": "5WksztpQWEP8zAqS32qayxV4DJGRLx9t9nTeEpgiHKNTeRMFGMk5HKkbGH6BwYgs2krUsKaiRXDbLwGRbzsxpcJA",
  "key34": "GpUumDn59zLX1Xmwqq4YV9nfGKdymfkFo6SJXXp6L3WirW4j1G4MXYXFLg5jRuqMrQCKsvS3cBH1ZmLKe4eUbwo",
  "key35": "2fqYW1aVZN2RkB7NuRE6g3MYGmPe6M2aBNA3estXvShtXzL29BVYQBnsB73Un5hU1zrduqdRqehptBNLYZxrB3HR",
  "key36": "un6BGzzgQuGL3ukCdcF4inAJHPW7vsCsLzj5GwVSkJqKxufHb4x3aevUZrGsuWkqqVZRu5Dnq613NipeCxmzKdi",
  "key37": "3aZfAWULyBHPJqvU5FsDbESP2Xh8EeaLVFsQ9gCapko3B6zaqHemPqTdp4dM2QaRwYPCH4Ugj3bvyp76XAtxyJPV",
  "key38": "4X6njkZSYvXHekX2WGuHKrTupH3Q6yG9QDmzj4jR4NbJ26dvoF2BEW31uBSQh7baBPSjoiN5yF9qaHPFg41Yf4Wk"
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
