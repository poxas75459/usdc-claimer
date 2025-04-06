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
    "5idd9VS2nFooqAaZBe2UwkajC4Z6h7etrVzVKp6QmYsrZ3w1uN53R3HfXBhiPFe13dTVU81K56v7Zf98kHYYSq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dzfwWnhyaTaekrB9HmgpxzvBacV7UBffPGxD5RaeEjUgUmXeNRAoLKvuWWmqq1KggWzRdUfPTfGa5E77HJGxwr",
  "key1": "4ZTVjQftzjfjPnuuUK3AjxAzFFyzJUM3e9yBSVvLBK5HyofpBTHmZehWngK4b3Si2pg8EhtKA7h7huC1tyU6tW55",
  "key2": "5o7y4qdHuUWBSVSWktuPprVCmTaWWsoURGHf3FqzFk7sMiH2hwtUf6PMSmSpyqXKvTZMX8fVaH6iYX34R8msB9iW",
  "key3": "vHXNmGgk72Q7P4UKkYaMDbvFPfEHfZPxarrLw39BHzRXW38aFaoou816hqBL4DLqGaLu9d1ZjSpiRqcgVyYdVF1",
  "key4": "4icE2tun1BUmckgGDsnrmUuASFFKWVC6R2tc2Hm4UZawQVczZJLZpzr9Fbh9z8Gt3RYWB38sjujd5eTwqbxifTKQ",
  "key5": "49wFXzQDhG8qwtX4KgyJSDVWEXbn3XfxZ24qWuAhcRPoLqgzrvB8Xdy2gZ13cuJjvMzpWoHgJ7L99LXUPpASFuEm",
  "key6": "4sJcYdTcZpnGz6PZd3wHeBkVBnHP6HizwHUAdbcScyoaiU6fkcT127UBEunqzuXjbmdK2tBaspnxcJXtPGcLYmE3",
  "key7": "s2UYzxmcQ8MktePm2ex1nKXKutyhNisjoums6abKva2YLXbwn2goa3pV6tMQE2ackE7MW4F5c6TP6HvNBet2nb2",
  "key8": "23LwWedpXNtVLcu5vrLyyTMBA2UyHVjf7DBQKARuttEc1KBGP8z6CyLsq6vzmQJs3t4CGHu6KVymL1wZuH12YFqe",
  "key9": "zAGA9t1m6TZENVyThL9y9yaysG9E1fAfqooArY3iQ6eH2yxZExhe3SxbHVVaUQSmZjRwDYv8baSuftd3KofXLt6",
  "key10": "3wCFHrETajpCT7Dc5AXGkPv2nZ8jkpWoeTDTWcauuty7nyFm248PnkvfJEdDBgCZJXEEHfwkjcfe2zu768YkCGVW",
  "key11": "3yrmCLH3f6B3jG4n8nAJ1Zwy9R4CaomiCQhTuK7UQbqaj3dRq5HF9Th7qeuSirUAn9wFD9j1x6Gyyw8k5kV3oJFg",
  "key12": "65HvFH9we9vT6jbQAPrJFhZiUa3q5HJYDisyfF6zjxV5zNax6zE5U2VpkSvxhfiTARr7HNspyfcUVX6dn5NHMzgc",
  "key13": "4hYtvcF89cq7LGpg1Kmt4bKy2aZR4mLTHQd3z2XbRGUyoFgL577yhbC86fNkrouZDmXo5Y4QbFQdVYX6bzTUKHz4",
  "key14": "3L4PMFdzjLkgVt4S3PTKntZoM3XwkgsyxtAfsPCYDkBysd77PWih96cP9rmmMAYyVBuVcduZ4KqqSjNs5L25xftr",
  "key15": "2xkDJFGrFBwrnK4bELTcZrAfcbRoYamMNr85nj89hTuNPvK2uuwyZtjM72sMjuXhnRPKFSgJhMXJktGoACru3ZPQ",
  "key16": "3ZedkELx3iu6b7T5v1KZYsVdNJ8A3GZco3KjbK1gAm2j9mK2hzGbYFfXbB6TJCL9GjWJE6vMDTQfLGTPFJ5JuJVc",
  "key17": "UHYw3NKS5mSb2hGcgqUzHQyc9pT8cSesduD7bef2qgRDP5TtcgnPfgKFq6ErZgu6eLFFFmjGrvRifqkc1Q1gMe7",
  "key18": "22KRNhnRYaokAYZ6unkz9CJM2xv7dCfjCRDcdkFFiPdKmsgwMDB2Ky1jzgkW7zQQAWbenmg1My8YwZ9zxXRLxypF",
  "key19": "2ouPCG3c3B3HUqfS5jKWVesxUtKW3bt7FH7YkEbyLfsSvqgj4ZtZhjxyNcuZtUsFToQCSh9oKagimWgP6QoN3rpY",
  "key20": "dmeirPKoo4fPxaAwqkaAc6chapagXLBUAW5MBFZxgCG95SAaFTrN1gK11mvys5TNw9QYWUDPRizwtbEnft6zK1M",
  "key21": "5Nu2obN4ydJ8mdQa8wM3u36N1eF6dAuptFhtzCKfn7XXUNxysBmJdSf9suWNnyH6boTUyfQphaoFVwEPNvq5kXTS",
  "key22": "JqWhpipsSkBSmLgDaSH7rVsuNjoDFhzofko1SoG8w6xnfzuTfbNiSjhMmZQKjb8bqZsKhF3oaUHquttYLWQSrff",
  "key23": "5sqTpVyZm7bxcs2t8jvX883ZijiGXa8LR16iJAsEiC7a9ZSKjguixeGHMGczCuwWdq16Ywkdda1K1rsFstztsagN",
  "key24": "4JJRGWxnD8uFPLfAqgEdC9ppcbUykQbzMDAtCs9Pt65Lu96oGAW8TX7fVWWqp6BHafZGQm3tcL1CSbspfmHNrbUB",
  "key25": "4ZsPd7UjY3ASScbcd2tyHdV66zV7S8nZLrwDUqRUV5D6Qv4H5exFSVp9kFL9TLBkSZWW78p67irsYVEcbj8Jkp1P",
  "key26": "5S63dTeqW6v8M5LFz8anU3qDsteZyVgwS14FCbwEuxCeSSp7yV6BbG3AUKXzQQ8rxoUAogEn546K65ssAfzXgiPP",
  "key27": "BWFYvoxhmXP9FQBmgtNKBQGPmMVydgDWgBQSwvzmmB5rNeKUnd3g7XUcRikNg47q4TYjNNj49BML332NGdtj9BA",
  "key28": "hRkj6vp5wirxB2RmYPTE3E6EaPgueH1eZx9FMxQB73ZkjeiHeAcFB99MwqEffwdTSZu9wcnGmPmqipc7c2x5JXG",
  "key29": "4C9rjWU8a9ovLXWv8LDFtA2yP5BBMhr8o1adpPRxTtbhyEBiYds7z6sFRQEg2gUppE5JhW4UvjZd1o17eXQXxCb2"
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
