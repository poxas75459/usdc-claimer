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
    "3v1PhvZu4rWA2J3e7FaBZ8BSEsKuoDsPr1CojBFcTzwQnCtpqtc1iLS4SM9pfi2Ybmco6JzTjHQLEdEA8QPkXH6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6frodoUBU6sNKReuXLwF96LoXcaMxMz3x7kgDwvn2f5TsTXXB5F5g3Lo3CkioroHNAypTGXf6uDk3XbUq6VSss",
  "key1": "62i9DEfUQxq4T25dPqw8wSFLw4LjDSR4rwUnk8fH9e1TpmfTenTYCSEHkuMQ6LFSP9eMHLBvdRFxRaKoVAhwqZJE",
  "key2": "3ancXiTfW9DXdvaeEyPVk8SFP7jns6CqNrRXVa2wLC7tUB8eqfWkvmHmYHtWQP5D4pfeehwFto32yuChXRXDPp1R",
  "key3": "3LoeSL12EPXs2XUP5Ri3koxffuSwnZd6RQ1SikW3mtcG5iQX5aHpxnGTm8S4vpwE2gCk3feAcYLaRaMLSMDUwMzq",
  "key4": "kWxmtp2LFRbc7BMrzySZq9Bpv2FgYcAj196hTG5A1xx6bfKURP7WE7AHTtKnHBqa4hGny9c27Leati6hiEA4ZQT",
  "key5": "JEhvdBKYtkEiTxmrFHXYbbTHnXJey9qF4aQ6r2VzpHmx9LHRSFxS6g6V8EoqqiV445DyVc3kk9Jy55qEew7D9Be",
  "key6": "64YB8G5Po9G9CT3eqUwpPRzF7qDryu81dPbkR8s9nkv45GdUFHWkqeEyJDkYN41cjWZV7vseDrdhAUyJVfjtDQd8",
  "key7": "K8WxJ4GGfVJbj6uLyBH6zcqduqwDXjfUdQPkQCnYdegV9fUxPjoo6ww92SNVjrgyk5wHj7uYrk5S2nQqMXkcxzD",
  "key8": "ZGeHHv4YbYdNBFTUcGMmumGWwUdu4KCAMuBzistzAghgYgaofNnMxrrqPL7xKHm3FZsfdFcuGQFWpDf3rKyEHN3",
  "key9": "5XEzS8ym1qoDdVVKuXsbMWQwHKhA5gPeARDzkSLRyh5Kq4ugzim9LuY5JUh7EuTqZLURiD737YFp7NqjBBpzkRZi",
  "key10": "5JKJDgqDypumaSCvJ8DbV6EzqawQg7aN3JgUNKJ5Q51UmPw6Rte4Y9q3ytm28sRAYVCJiqnqYJYRuQpV6cjUNKAd",
  "key11": "5Zj21ZkoyPsAfe2kJkfQr93QRot5of4fGYCDvYmBa1BxRMLwiTyQczeboZab9Jn8vBtWsBgSCyur3nB1vJmAt83d",
  "key12": "4m7xi8Mw7T9fKkXav2URRferf6NnC1PWzKjKneYN6s3qLwPLhMh8vrrW6eLYgjozK8dbwT7TX6p9J1cbJDyved3h",
  "key13": "U7Cm8MuDNPoUb1sJbNniZ7GKnVN1bjHnpVmDRHNkTZEmE2vDpMuZm5dZitCcNSF7Qt5pDgNfWvrWT5KeNe2QigK",
  "key14": "5R8poauoek8cGrCD8CwiizRjthqZ6Dh4Nx6PkpfyfCZ5tqQstHZVXxkoVpsDLY44s7pTqjZeDs5bViJHuCjeFUJ4",
  "key15": "2FJxAqaoWHaLg5nupMPsTD1cUy7Nfj8o7rFcupG5p8dcWHRCZBNQ4qwcHsTcLU4yo4MSNLGRciJrvua9xVJHEzLt",
  "key16": "5fQhvXj5a3WBFyQThZi1uXTRb1A5aniRskaJ1hai67EWxbXGmvb3LvGGFozS54CiTYvpM6Q5dNGZWk5nQApaTf6e",
  "key17": "kmaFoCCwfEiVrZyznykJSC49WZXDJBnQYtvjAtTAtuLEReSLSBdgoLNfzwYWix6qcQcmeGqszHPhGDaBRvmNCa4",
  "key18": "4A4veEDwusf5HoXrzyTa7oudWbARTWDKqAXQxSBdMoRCZHiVgaBx4a4ZMro9sCWUHJ8qqNj2Ciyc3ptB9E9eV5X1",
  "key19": "42oUFMKWPYRk6bi7MQ5Q7q6bdSe5GERTq5cN5AUJJn3HuFYnwnjUasYTuXzJkcJU2qFKBYqeAg7J4mLfpTArpuYP",
  "key20": "8MpuYCMQT6zW6vdYhsdzkbmpp2g4aLHz8uYebbcUtjtVZCafNN8MksH8WTphvYuvKQYCaZYE12mGdZBdNUZsUpW",
  "key21": "56Rs71c65jQin49SCPfXUR9VqduZHBxc4G8kibtxta95RGZ4pvh63bphJ7J4mGtfevVkyn6rCxqydx1MACyY1pKp",
  "key22": "ULLZLm4R8u1DKypoLLXnW3wLbbyssc4iaEXS1G3XJdSCuKtkQ7vQkMzQt7fgjaCHT4uymrRWyfPRrWhp5afQoMi",
  "key23": "2VztVagJac4JYC6Zdzz6q4CnqF48DPet3uZd8cMQjFpjNdjcQE4Jqgz7SH91839EjK9kSfjzuqGDfcVqZZDQusjF",
  "key24": "Wz8sNAABh99834mX6VAB8iBNWSktvw5wSWrXK6qvUC5bMDeB5gVG7vt85Xkor3ech4bRLMN1J8jHpc1f6FGkWqE",
  "key25": "56CsG31GFS6uoGLjG4BvXbgeddWECBtgTrBREVhYTqN5UdGypow6hiT3zrX8jYLUXUf1JoRQ9em6qTXuM4NaZ1ya",
  "key26": "egbtHyZihEdNT5ekBTuCUWFB8Pyrt5NJxaQSATxhoKqXhZn2SEbnVErZNg26MX1DFaGb2jR135TpaLtHQHpcXLU",
  "key27": "21hZaWRC6vsvECsiWNYkSTxkm9HmubscKq8zAuPsuLwzag4oS5nv4SPHAh32K5874EntvRJp66cBcexdb9TW15Gi",
  "key28": "3MZt5yQoHjQxcQnUA3Y1S83PtgZpfpgXf4xytSWGjDQ6jr2331vp9DdHynd3f5PD3fG8tEBG38K88ueGurSKZo9b",
  "key29": "MoEx22T49zxtkxtFzPWmiH1piYj4xwp55CmED3ikrvWKNSj3RFRdHZt1XRTY2MjX7ZPe3QJY7p8ULTSrFU1YKAd",
  "key30": "5ehoUYRo6FLeRHyTmA4889LjhySy9FJbBxKVUyT4QYK2Tg1qdwWiskNToWqwCpjjBv91Q7kBNzLwqruWbcL41Lay"
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
