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
    "WA3wdu9xdRRKdm8A2sUiz9BkCPUVgZgpFwJu8pjmj5MVzR3HJ17ycs8LutJwsLyK3F9Tha56amcEaveWZj7ARiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvNiPC7HXtjQAxaX7UHnJ42akQFFh6E3EpvTADK3iWX4ShE3NeYiQowoTC4qA1Ww7JUQn8qWAtJzwnbtT27c9m5",
  "key1": "3nSXANiD3quiTSGAyMKTDb6vMziBy6wucQgn2JriVxivRLvLKrFAVrZNUWFgiDvafN4VQb6tc7NGxrvZqNcpXiDn",
  "key2": "TspgS9dGBQMcxyBFyck2Tg3wvMuJcE1ihRyDS3AiKxGUaa4Gx6KbkT1GqbyM88HSzy1MbxsSNt5jHYDoHMZwPXw",
  "key3": "2GbqqHjS9VRcDHF1FzVgKEwDNmKGqW265MvigxmYvh9m81jarKK6THKdiiENTvaUWBXnuHzdH9sfKebNno1bRFk",
  "key4": "28qqJyHs2kZ7obXnbZytctdNNtxJZtoejxSqUXgyiASerWAwmyqnqX6fn3TihcLJYgkGgtMDvnvhFYJoZfpe5fBk",
  "key5": "Qq3yGqjp36wBqn4F38qnXXZJvbYuB1g6BBsAe8UYBG4jFacYgBwuEtvYKD4gED1eVmjvS8CL5c3j5v6b1YcN5hw",
  "key6": "45KJTjtEdoZbTaQoQfWmdYa1K343SfkQFXK1gC4AXMkY19QCrEZRjTyVgnwgiYsWkesdyXCxxqjkC3oXMRRx1sUm",
  "key7": "5TNpNZUSJEzqRB8qPKeZGZQp8x88jbfCuVe9XGDPxPrZibjvGobbaq3MwZc6d81CXC3FfbjXoW5Z8dTr2dEsU4iZ",
  "key8": "4gKuRVYzvZrYXqAmwediQeYrvWEY4vC97i8vmApyTDgtYD5kXchG28WR3zjrmDAjiKDbzF6uD9xQ1FoMFzmUgdzp",
  "key9": "A2e5MSmQA8zT3sY2stZ9yqgGnWeDHyLiLLXoPdrB4v4wo6ZC65J1ryvkpaf9UhFdwsLqGyELzMdCUNbopCAhC19",
  "key10": "3KJTFCbhVvTPmaCoEgfXbnmjhCcUQ3VCTwRBF2purFDzSt2UurWwtNLSyLtS7UMN5KooVxPSt7KjVqXMtKo2SFk8",
  "key11": "w2vXb7zgDd3hCYyzXMQxLgsrh1cJHhunKmwfkJMdiaUMvRn3HR9mWpttfbXJ7Nr2R767yQtqePT97w2URLrTvmq",
  "key12": "2GWFYzYn2SeyCUQUgFb8BcsxMGhvpeuvaejGxaNGnu1GNKZjp3fkuBbSg8Co6EFt1EDKDtdwoCrVU3uaHjx95Xqw",
  "key13": "2f6mF3UNos8ZozfEqVNgWLh7FnX6qDDW98yqtzaa4HSti66b5TBxrYjvRwHMt91SjG9gqxZFWeSKRDuHUmKQRieP",
  "key14": "fyrzBJWSpSprywvJwvMyKRVgNXnEfvL7sdadd8kfvkhdPaiWArN8AQ31jgPBSFiE4ipHCfbFynGnPMwF2o2kugE",
  "key15": "73PD5yojfSqr7Yqceu5fiSkpEsSfS32Ar4HGaPtxu94mZS4MUdPsZWZmBBvVrVtE7HfEAh7M5fPyzzFuZAJdiS6",
  "key16": "26rAi9u1uS1w6sXANVrky6KwKtxTZqs4seGzAHeXdwe4L8zdqg7W5AEDAPgidjiYoTF6bFNere7G2eU2vTHTnGuU",
  "key17": "sUxNTbyuKpxJWG228cXkRUWYvG86kVzpzvQU2FfsUg6iFwQ9Sax7uH31SSuU6N6zPi3t4uVa33Ds3Gar55cEpnz",
  "key18": "7rxqm2tNpcDkGhbpdztm1RQeVyh58J18C88FgWW6KkxPZ62Q8DV2QvW56fXRHgVMaYZr1zkcWaqnUyQKHGgQXPS",
  "key19": "2238z5VvD6N4eg6Ngr9ERvYNYrLQxtyF9VbQGGj875vSm5kVcbRDfggps7dg3escUzr6fLuk5aM8Lx8tjQCTvq1P",
  "key20": "4rB5nWTbsKSjZnLvZix3m7xuK3v2AnwfWy37QTL4byY3JSYABbrBxgJT1qWfk6zaoNrhFc9f8ZaWewiNsb2Q7h58",
  "key21": "2mWp6bL12psa1bx4LJcDu5gQcuv2u57FhSHwbtm8866qJ15io42a5qrV9XyvbEQdp2sc1DzS9wN1uuKDmRgcWXdF",
  "key22": "5YpHnZm92u3pBhJtTR6bqUxefSc9z9CSSpLxaTQtAFsL9iQRecV2em6tfEcZ2zGH56FeW1erreN6XyppjmcdE4xk",
  "key23": "3ynsaw1PLNgfuBuHXvz6d4NgVfb5yWQ5QRk45ZgPEDvnwKrttJhaFLUxrK6YG6KC7TL9dnZN9LAmFfLLxxuejzDp",
  "key24": "3tE7KkhwFU6F4gMVLa685Fhbb9E9z6jtKMuDeqBS9TQiwAVoiYztf6Ntff4Z8w9VbjtvQZmfQU1Ckz82UVCHVtHz",
  "key25": "3UbFGS3cYxv3oRzDNHKc7RKHqE43cjdetMyycpYJGKBnkKQyxHjnjv1Ui8fhKe9MFJ5sj95FUJUFjXyTgLwzRhnU",
  "key26": "4Jm1QP9wZANEnFuNwarMMLjxPS4NEaXgcqsCY9RZE1ufd3KWiZkFrt2tFMgBf9wi7saA442C49DQwxGezZMcMrGp",
  "key27": "3VCcsYP4EvDG8Kv7jdqHwVby9CX8eruc8LGaPXkTfrTnb7kkvnW65yfSrxNgDvqZFtnc5Cu4K9g2mi5cKQEH1LbZ",
  "key28": "4byPFDqRb1dNgGsc6NtfaoMGHUJenM95kub53KEEfrkkcvbWzmuSan2JCaQVoLdDbM1mirJmYFQQWejkXFM5dMm",
  "key29": "5ZfnBoUN3RiHTbKXGmbGasc7NuMSVaNLpDzZ2aYePCCJgSzQ6jYckNZBoEL1y4sDPjjUsHQDZWeN2RcqxkbhVFcP",
  "key30": "3dWWyoAoDj6nS8oUcScngNkMUGh8f4aEgi1TPwBZMEKPBvtVh5S5MvR5McxhWPdCyNdukvNy2ELezfkLuP5aMfrv",
  "key31": "2wBWnfSBfHYdA6u7yKeapY5kabStJHs3H5EcVHzmVTxiKhVaPBZKrAAHs76T4Q4X69SfyuRDbCC8TriSHko12EGP",
  "key32": "2hio1RWWpBXe9rX9VnNvE1Hz8L2y65ZDP3Dm11fCtogi7HYFHYaQ7wFifbRviA8B8G7g4hKrTVbokwv7EwBkwXr8",
  "key33": "4p1njVVzRS6GujMwADE6t7wLLcfD9Wqry6p5catXHELJdrJfrB5gnM9MKi5EtDYDNDLkT5ZKJA6qATowqEQLGqe8"
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
