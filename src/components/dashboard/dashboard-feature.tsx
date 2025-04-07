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
    "3MRFKR5DVAyVqURDiJMQnSX7TVoV791eZHRMxTfQDMXPs75SuL9FvJ3TwLSJ32MqYYgn3RusnLX4hPck7bvYQFRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuqjaJZX4JJsEkskT75ycJuvXeazAYc632mwMy5Crd3K35EfWxQrdA2vGKMvNMhuxULQKbeDvMtNGj3utoXvHvi",
  "key1": "4ToqszeumrEPxSRtHjjDce6yj5V4LHXU2s9eE7roj2wg3sMKRfMXy2QQLUBS64hsGsdsnkisTkRbMWDkTNH4HMoZ",
  "key2": "2cCiz23SK1KrKvDLBYBbauW9RqJ9vm8s9VDEiSLtapLJJ6bUK2y3xtUa1gbprVBKXaPYL339zUAip8wBx1J2FyGQ",
  "key3": "2yYfqAeUKdp3tMZa6rxV2NoQL7iHWjRjLRUeaJLZGtUghyHAjLybkw6JHuDX17jgMCdo36U7CoQWfTWA9nQ9YNgV",
  "key4": "3YaaMRce7gXPavKeo16je3iJSGUJtMMbaLdZ67kZX5NwZUrpt7TE6EB9inHe6gunmydDfeZrZHkzjVs3FuDKFWFc",
  "key5": "2EgZfmLzf7eZfqhU4wqYpCSXMNQrMmbQD9YkydSivJ3FHoWQKG8h1qGnAiQxpWYB23RYXC9Cfrw8NtJkYoRDpgwV",
  "key6": "2o5Gk5qu8GTwsxVCNJCzX9hQo4kMQHWrw2qyMvz1cnrA6c53Wgcntw8B3BHi6x1AgtsLFFZTGUtRrurpxQ84D2pn",
  "key7": "3Mkdq6q97Dhys1hna8tFAMUqyoep34tiySwWy2QzFeicz9UuSHroaEjBnBMXuggn3Scdj2YQWfbppG47gUT58cp8",
  "key8": "3X4Wutt21LjAmSfwyEy6FuWsF5K7Y4mAaw25BWydft9V9popv1ioRCqGtimKFdwGJ5wLFcp44kcy7oa2kQmcfPmR",
  "key9": "4qQcTU3MWHgi2HYND9Lp7G7pqwt6a54TXdUvdka1GjHJEbGxqgNyJ14wsYTy7PmY2wMAJxFQY6MtrrExwf2Gpo9F",
  "key10": "3X5KdAu7MM2d5jAuqbejjfwf1HnKEe4xH5M5wB6GYGxGaL9R6vTuYaAEtRjLsAAtcP2WVn7xBLBakJyggkLKi1sY",
  "key11": "386MWhZcswqm741J6EgXZ1Vrb9bMjaEU2oPGJE71owQhDNhLQy9b6W1NBAm1T5e862gTWRg3HFyZ81312ZxnfVz3",
  "key12": "2yRrXGVxhCsTiS4TNy2fzqCpMNkW7bMJxqSyxQLAggBP1Mq7SqFhQw5u8ijEcKubATfxFfKvEvLZGU2AiYzJ1Uah",
  "key13": "3ARikoR1dxujoRmqTrRGdbiNif5EVYCSuFyLEKQeNdMYsfTgYTpFjx1A3b1HJ1Rgb4r1ucXpAHiGnx2cwuwB3QxZ",
  "key14": "4crGXhHLW8Czaydu129KHpBB3YxP4B13CzXVNyKhaFqm1GM6bFMMNZma3hMtj24vC7schhvPGADJHUHYgeUDdsY8",
  "key15": "BYAuxn7fNPhCV9iQaNCdRdt66vtiML6gL9TyYErxPfZtWLGqCYAqdPA1aVhv3wsUDdaehaAfSHZtncaNE5iQLJX",
  "key16": "4MUUbudo4gmWpJRrWmnjWMkWdtmB8bD81TjXwo3tNfe7fnqCyrbAZRYJ3xYFAVWUvm1SMCS5BXQ4ELk2KeSf1fui",
  "key17": "74Ve7QzshpKuD5ePUvRRH5aWinA7sioWrqdwdPPtcTUQUskjerTAjhio4EKQVKnsU1zgKh7Ep8e63Ja1AuGqLa4",
  "key18": "5WWvB2ZR7pzAVcjYfaLBfDuwFoCF133wZkwiyNvWKMNLLdY9bbkFmN1BK55eGHcTwFwiYbARokve6tESpeQsD5Jb",
  "key19": "3asQ3Uq1uNkCEomkhxraKcWUbzgDr3YC15rbqL216nm1FU76fEwH8X5f86294vhWk5FnJwBdG2NXMTCeQ5MVB8zo",
  "key20": "5toTkG73UvpvUdjVusMRJzjiQnSrne3tShAP834JWStaE8st121yP5PrYkiPDAwBZqZyiTitDSKasAqCS1fne3r3",
  "key21": "2GERQqg5MbnScDZx6wz6eE7iTiT5ebssdDUMzkYTL6EE3HXcLRHtzwVh2VpoNiN3jPEzwRRZZ7DrB8ka6e1MiFdV",
  "key22": "4TFvi7kPaXCCeRzykJh5xePvvZ3gkcv1WxRDVUnqweCcgThYYueWLKD63Lva43fCR2eq9uxmCaX5orT3HUjPT44v",
  "key23": "4XeBEi9hNHnCth71Yg7MucgaGC36vddfFRR9N1m9y2nB1daNcc6xmdJ6yAURM5Cz6eNyCoePtpLs4xHHuzDp7Rmp",
  "key24": "tbPJHSzPiovvbgqyX4TyWLPWmnbEEpfJNczJJ8phodCCm7k3dzYru2M5Q4WESGHTb3WmGxmzzRYc78Ybm48U9rg",
  "key25": "5UfM8tG7k9G7JHER4nSSMjWJUBW16zAKHLk3pU9MLqeujJz3dxvK5YnnxiD1WDYWrHJoaqiXvLiwAtSEgwRr7eSD",
  "key26": "3yPE1qB3NTFjAVKsPtFyGdnUrKRydG4N2SMsdFvFDwMiSag3x6t851LuxvXQitHSUUmmZf8Ay3x7Jsve1DPsgYyb"
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
