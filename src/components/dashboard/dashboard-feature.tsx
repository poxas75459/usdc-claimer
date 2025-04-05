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
    "57eUeqaLwmPyU3L6dMn5eWiEv39YMy5dJabF5csBMickiRP7gjFV3s8QbgqCypkC7L4ZY5ZgdwWCj5QTP47Uzntk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWKez1Jvf7SnSHC2Wqw7PmdnDS8t1yWu5Fuc6pMBrVGfjqpepQrjziXrMzgpEjkedZQXQVP181RhsdvEoeUsp9q",
  "key1": "3mH68DA9eGQWTbRxzyoyfde15L3GmTMb94tYbqX4pyWsemoS7UQ51UJ3tLx513vaDWuJMejFx69BgwyLfquERfK8",
  "key2": "UvRw3nMGfZqtC86v2eb8qiarWnzEE1WN8LsQFpFQEmdGHC6JeqzyfveYe681ce8dnfY5ypVxMqYGtHLnsrQjxiJ",
  "key3": "5cJk95t6YQ7M7YZWgLWHkSuyQi6PXFK6MYVgqKhqWUdV47yZm4zVxYXtACJUX6GNeYZ2Cf7aHjAPzuzQBEs9f3Hj",
  "key4": "5WUusXYTHh8ZSxcBie4HugAz8MeJK5irfdZWaRrP2d7BpwgMdnpLwWkV62R8LDAxuLjp273zRvHKaRRaLRfkWkhm",
  "key5": "4SJxMY2d2GzJBH7n2J6g5bvZAR7TiNK3jkXLpouDjoLQ4Zf6ByNcchMtmc1KxySipyU1aqATmAhsesVBhHWjKjfU",
  "key6": "4hhdnCVoV6BM86fqHaXA3L4nejyc2AuQQcaqtHU4xgoyDFKLc2bWb2mkt8kjJm3FvEsrpyoLKZPr23zLJH8n7yWQ",
  "key7": "63KWZ7bPX4b4oafKoNzczn8nmHE6s6g39sWB6d1BjtJGXybRcBQDXadU3myXknZ3LpR7CMyGW3eHoWTMGUUTGCvy",
  "key8": "35FaP7hgKQy4dporM7qfKZUpvEgBnTY64uvbwUCradaum4LbchJX43QobX1dJkJEtxfosMkYrizmQujf818BJuQ7",
  "key9": "2QANWn2q8cXYZiiZWGRWHsZhTUv2QQTn3fBUYZtDSRdqE7siZTjB3RSSEZCLqqGcFaeKh4egBTe8ApjMQ7XFWhKF",
  "key10": "31wAJXs33HKZ21eD6XpfJQTErRgFYdqC5GUm3FUxCCV9nDyDY4hZh78fuYdaTQb3VNet6HtbGBEhjMy9jkEb4yuV",
  "key11": "45saQcMgMPNMubTCSFZAnRwcxaXjBVyiopZD8JheePtNkTJ6qr6Jo4Q7JMamPt9hmSHRFzqcuEfTRtFVJ4yvAwyv",
  "key12": "3qahBVM2Rmsr4c3cjVCz181BdK4EJdx8udVen3h6D3M3fW7TpjVYbqLW8mVvoErtTwHnXKPNR8PbDMUK8Bo3d3iP",
  "key13": "37fCV4vL1SWg5QkuKD4jdcexuJdj3AwHyuN56sgrveJLdakKo11anNKMJgkLW9FU11GGX2qGm3BofieXpwbVMJSQ",
  "key14": "4jsRvAfRG1xQQFLuUhvEH1v6h49fnjBaY3S7UsLxUXtBPZRBaj9mpdYmm7XfRbSr7bbyDej2wMWyqApaUjqrn16h",
  "key15": "3m4N1E72rReumPeTuBEKqqp55eNEs7WaSYibKVpBocsoCUcEohFymnm2PSUqaTyf3njd99UCNZCckFGLJDRqumJM",
  "key16": "vwBkN9hd4Q5Bs4retRYqDEPPfpYqwG5dEGWbWZESKpo66i8h9HPh72YBK9JhvFb642GRRsg22NR5YAwGmmVtMF9",
  "key17": "3Jsogajb8kqY3bcxLzfvqH438vGWpsLG6EXaERQMzH2Sta4qLLBDB7382AC9TZ2AcnwnNL7bJv3ucTGHVs6wEfAS",
  "key18": "S3Dn96npgZbE2A7EzrsZzivm8QDLA4oBMu5h7rKaWAjs95UEAXE8ZTzRCaBtVUR9dGhPwdR55ry8gb8kHWzmZ9m",
  "key19": "5qqeGY5HhHcK9o2GjAEff3ZAxeUYX1CVUyHNPUcdbKejAoR4invCvAdUjS1oAXxjAJj4r1tuLyyDZ3StTHDnkR3o",
  "key20": "Bw9kzvWHETyfGSQYKLWg9XY5KWaHRUEEQxbYhxHt5PzYjkz7uHjP5MYvGWPXkHSdo3Jy7omEzw9NuR7ErJeL3PF",
  "key21": "4dhEYj8UruHnoS5nXsXrNJ5fw8c8qDX7BphtU1qVkxrHNRNKZ3pdxYuMnbbf9N3CH8AiZLdGJkYPb3PvWWmkdWZC",
  "key22": "4WPMxhKsupm1dLk1L2eVyfa2RsUrWcvDogRTvoHZgEvLSVMB3dKEToS64F8RjnnjL1nMM67mMxJRbpAokM7PAxia",
  "key23": "2B5qA68ozpNV5yLEEAcK255djtXMXjo33nLAXFZvsAkXTxoR81ysWr9WvJVJqxkcqvgwx46AX3wC5K19spEZxvTY",
  "key24": "4uHT47HE7KQVL7kUbdJvz9SmTRthFdXTa6uEeARpUoVfFLQHgLsYMXBVooDnFffEGuuY6MEApkVeXL9DbR7vjdgp",
  "key25": "2cc4k3mCFCavJRBh12GPGQ7sEpV9vJmVC9RLt582YMvHN8GtnqFECBNVHRUVavoKE8YaU49KZP4uP8P1926Nxuty",
  "key26": "26aEu2s1c5KmnJvv6EBuSNbdj5o2d1ZYRP5nTE96WtixbYF3yamU6ysevSDuafxuVKaM8KfmJ8hGUvssodm1VZNg",
  "key27": "3BGy2BuaFKY7Y2jx5rij3a9sVM6hso8Af2fHcqNZdAUrynjCVnUyvxqwtTXmrUvTojGAtA7JjcAEC8wrUf5VWjHy",
  "key28": "9PeYao6YSwuMXLyfnDvoar4jyXZKxciZWpaBfjW4HntbmfPPuxCp6edraD8JB4VjgkmfgsuST6hmU2FNEwDSCon"
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
