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
    "VcNQbb7uJgtQULGobAv7MerKTyhuK2G5RjuZojYeoL1X3B1XoLXNsgfLNMh2EnsFqtmTBJEu9KNJ1dfeGfVXgSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TQemE14rpNAHFbE1Y7c9VvfYYy6q9x7f6vXAwNudFehDNXRZqz8V1enyQ3KmdpaLRqpRe8yyoJwJHr3garCntg",
  "key1": "4hkTT2yijvJfFj4ctbQZ8p8UXLujdeb8tV9Goi49oitkEE2526CTxnGQZ2xGvNcnZoaA83rQ7pSxs2mwJ6nqtkj",
  "key2": "3VnFQtbTmBLNeWiRUu7NqvaHhBBcU5nRbsPPjy1TGnJZkBt1cUAUdd31H1HQrjeHvsuTPKxHasckMn6xBMguKeji",
  "key3": "my1Yt69fLAvMw4otjSaeyCSe9n7wfJnSEhTFSubBDkyYf9Xdmy3B6R93nL7i1tXuVognGXiE5Ppedj2BuGUqjSE",
  "key4": "sYium18EbpeB6xVqkjzzJEGqzkoVPsw5PHbGvTwkdgyMwbpg9UatjDxin6YNBzXjhQDWycCP3Wz3eGfF1ZH3Voc",
  "key5": "2zj3P5YAFiNPWWuNvAqASyUyLmHEKQotCNVcrDCfcp8EVf9HQgCwAccLTc18rNCCi3NhXk2GvxVhmzFsSz3z9RDS",
  "key6": "3Jb6Vg4xescR6DuesuGVcRbnRrxdrxXzznmDpnYUerFo7aFFY4UeMWu8G748WYtNqCyQDzab9AjG595knCy4WYr2",
  "key7": "TXcJRV8hj1RJuZctLzbpqTHr3YKLfhvrWhWxFCZsF5ec6dkQwB28zjZ4d1eyEX5ooQjdNmaMvor5gNi1W8f553U",
  "key8": "66oP7oiEcwrDPdDd5DDKiZm2A2dMc4TZgDp5RJiy9Q2Xq9fYstEFohoq28wjgQRWnPBPeRLRHmApvvpjjzJ1bvv8",
  "key9": "3LpWryGFUN2FPwjN3ug1uh23N2p8anPUce7RWzLTAMN5u5Z87Sre4UXG98iLmHDWP5GJq2Y1Z6Wf6oYM72e4rrU",
  "key10": "5Y9K1vWimtzVwovp6kra6kr6HDzZhbF4zxz83ejnyVUyVjxZNvNnaEJaKwbFHxWsd1k4Uj6SXRCUc4SLhBZaCMwQ",
  "key11": "4Ey9WMxVC3vXM9QSRQCzrx8vaKwng79oYqG9W6ycGjxpztJcWh2XF4ttUHWoo2eGcSGcv5pVE7uSJquxp3hoaAbf",
  "key12": "9972CaXnQ8ntRSqoJcgU7ECPf9xjeouSZmPHXuDfbad5G9bqDk7WEZFGyQFsE7oxejRUHrxyTQVQSkTiiL14oE4",
  "key13": "Q4cqkYdGz9b9EupfZeYzN4896irAWmh2pixKXhuHWDNVkTMsCpkGR55pJHMkRfBxpQSReat86XAz4o6wwhVMdRz",
  "key14": "3FrQTPUG7FSbYKbepRRRKDtgN4ZkwtJ47DphUKkNsJxjstRaUNikvFU3KBHye4SemG93j89nporupdR4o26DfWF9",
  "key15": "j7kx4K7WdNSUwbLwyS9vgXhoVCddRVF51XNVr3UbxeAzuUkLFnPcR7GNtv4nnoth77ny2Howhfqe5GU7cpzHmmF",
  "key16": "1mtNaHdijzzNC65wYZKghRBCrSJzekzqFZEt9zgEXyhqExnos5ZykMy4VU6Xv47xNeg4Jxv4puhE11zvn7zL7D1",
  "key17": "xAFhj2YtjxQiesdSgASe1nfCT7SaRVBXDVLj4QfdAo6Z93NCXEFvmZqpshppV256y69S6uxYrCRDuxwY3X3sKiS",
  "key18": "DejzAjSMVwgBC3QBXrzQD5LufMuBNF5AqjRiAgBd1vcgBHW7toXJpnCpticxCSFUEpK9kfSkfb1zJWr8nWUB9Dt",
  "key19": "4Ruj2djMVgEsgjfygKh3ZXeGBB4tebBi5PKhwNS5bwDvNBArLos8mT8RYbQH3gDbN8ht31FHnFDmnV3d8JXRqD9q",
  "key20": "4pq9VHQ7JZmhyH6tKXB3vHohGzgHipx8MYRoXfugQfKnYQuMhkGk29LtPgqRAR8u1ZyzmrBEomLg9yeP6WpKDJtb",
  "key21": "3JpS9jrvPFMVT2bK8xV5w8AvscoA3NyajzojTEMzLXLkMWccxpSyr3NFUfmNoDRBq8m8ZZciSn2z8jnBWU45YBEP",
  "key22": "3teXhDiRErPBheMJ4vgtFhEJktJvAw6hoqTZPCbdiVg2hdDraS2uMrMkZQQPgX9QmRQDRhqJZ336DaeBSY74HNU8",
  "key23": "4WYVVoDn7WA8eZTDU4ErmW2p7BXne2Gah33T89rKriNdAyD22B8JwzcQvrugghNap4zQzzBnahmTrJh2sWNLdLv7",
  "key24": "5XjnDWEU1VukDg39gKC2hVg17nHFBzagL8zdK2aQnHV6CAgMYkx9LXPNuLqqbssaFQjMJrt7FFXoD7WWB3mYMGha",
  "key25": "5LwgdauTF5cUcKXzFPjmsG7LepNTHkJABznPfp6bWprVitCQ72UXGAqYSemZ8gQaE6oxxVVwKNpx1vLTuApSJLdd",
  "key26": "5PkH4oXJDhnSupr28WL6xBkuPuTELNchqiTuezbPz9p3wbhqCnMLN51FLgRW1WwC6UUdQg5tFnR8rSpxUYA8uujC",
  "key27": "66RtKhZVntsv6A126d2AWM7s5GEsUuFzpQuFeEcGdpz8uCNxYi6zEhRjGz2pqCD3D4FcnKSm6v4uotf2wAdSX7FX"
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
