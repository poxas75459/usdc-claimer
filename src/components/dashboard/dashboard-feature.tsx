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
    "59P3pdvPSj2ftB5sb1obSmik1uJsiVNm8Wu4YQGur2honq3PgnYqK4YpZN7BHo477oNwWJLARKLb68u1p57KvMpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rY5wSPbkZRRkKdUXY1Z5Ly3MNh38gy1if4Wr6xvU8d3YcGNezx5b6dQjepcqFHJiTmUb5ZvnXQP9rVQ5KBSnMYM",
  "key1": "4xR5XcZ4XE647wJ6wE2oTppfqvwcWp9jmhRx1t1vgFTopZmeuAGNiXKdmZcm1JNM31My3AsZx24ixnSSmR2YrdZ9",
  "key2": "45gxb5cJbChXomiHmUqUDRUi8LxRRhGurHFiyJHcWWZFvogbECfxhF1ZSZah3meNCjm2auz8QCTLmnVEsmYpsarR",
  "key3": "4e1DQfRph2cxTzGjnoN7GtacanNCznmUujFhJBAYY8rCnqht4zKovRf8V2Z8CauAR2yJTVrXWVHGo3NhiBnfDvgp",
  "key4": "qAuJCazkwzesh4Bj4xiSbzdKuLffFBMwCbtgUfH2n4WQr3aptAtTVgQbYSHurSpJQvstNVXYN1fYUbySJbxSHPS",
  "key5": "2i7pXW6Ukkc3m1swfyGP7TBNDaVwiyypU83KKmjBrN8YAbVc13jXFknzQNxyR3L86QAAjHZHUZ9XZHJS87p1D73R",
  "key6": "31o3TjjPdGYKmsuZtYQa8nRZqEjyn9dQtUqgd9dcxFQZSeuti4MpzxBLg7vdN55hE22wcsj8wSkRpAvuUaUqzYur",
  "key7": "43B589Tv9GebFzDyR7xSLMh4JX1DK78oXggtcAayGNTisAcWkW76jek5F6CjykXkQqs4HCryujXNp7cfM7wkHHvS",
  "key8": "337vmthgjw5ztTa9XxJSLcELUJWgELTUXRyBku1HhaCxSufLQUd6ncjgNMDGGL56uTcmyYwh4isuYb9BmHTJbyaM",
  "key9": "3wDdCjopApJva3qCyvdVkqrNwWaM8zWFWvNt6CLrGfVgchPANxNVWgheGxR39kRBcczsAu2A61bux9quTmLSzedY",
  "key10": "4gFhgLCwXhMvEnHY8SeUSV5hwQSCo8LEdwQtQigKGxK1TmqhnDTk71HckDhC43GPyTV7K1sH3Ar1mbL2BFKn2X8D",
  "key11": "2fT7GYiBymtwAsu4aAr7JMkVSALpn7L9JqsN5w4U4sc1nGyYxQQ856cequa24JKm2JKTXC4jQSkMRN1Hh2qzroah",
  "key12": "2PPqQpcy9RNsYzoyiNufeLGgDNHFH1AddzEsph2EsgNT6MK9rMdWuyctwrjmo6yCzZ18gZXhN2N3XNq9kejPL4gw",
  "key13": "32qRsJR2ERvWYHRDay9pnegyVnySHhtAxQSEM8udni7JnUxsLCHrAN8fH3ztFJ8N8WCPSC7aRSnkTgnmG3AKES2k",
  "key14": "4f6D9n2zq79TCJPVLnLLttxuCUD64g4PguziwFNhcuTT1HawficFidhCAwgtdrwyw4T6dbVEn1PLUvqPbenKZ6ph",
  "key15": "tk7AK5gipBSzBrNCZy57MdYNJWVyM16cczPd1Ptmh8i148TjDYSceZToN4i7T1RhrpRFdKqLVFgiUQ5fS1ZMXuU",
  "key16": "3Cu7pjC7kpuaWEvaxxZRdaSDcNMQe8tEFxywf2fg9tEUfWNo7TPmGrHL4hR8bAq1mH8KjjK98CnXmHcSddv8gzkA",
  "key17": "29w2xDxhc4TFA7QMzE2tN2RnrD336MiJXgbvP4HRUuuCjRnXhCDrHaKmJM5VCooye5GezENfRsqPUEqDCSFUvug5",
  "key18": "3YJeQpFWCZHCauUkbnbR97Ay6G3yDCkt2NkQQuhk9JvtLfAQLitvqLQ2rJYG2NfjLwpwPAm6x32xDxpdEwz1PmmC",
  "key19": "4RjDXJNKUBQcA8Wamx6CTjsDwHjBXZtoExE5uRwbAsSxBkbAdB8G4HuVasgrYYyvtrNACRw3kijYD6Sq6qWFHTcz",
  "key20": "2HHAKcbfgVceSfwW2d3NAjc5ysT5ZY1eduEcyHN8s2HpVFbUN3NsLJfuCmHR399TYQMam35JRVv4Us4hJdDuGdYG",
  "key21": "27ZHTCPySQg1NFRyWFVkrtvj3kJnn2YMYoCq2XeiUaVbgEFpbofvwzVtMUBDAEskaANVVDrKdB68kzYSxd7yoBqH",
  "key22": "3GgJaYXDzfhSfMzqwdzBJDgDm6uA8c22YmdTtj8SbwVEHdXaqM5TFQdCpQFY7cPjuTqURK6xaHz5hJB7pgNVKtfW",
  "key23": "5Ta1wsuSrtCvKWwSRAyZZSTDq3YEoQaNrihqntGoDcS71v5bMpHX116mK1gVVHWYRRH4xJ7WQj1i2J7dSru6JWGy",
  "key24": "4pp4EqQB737pwj1mEh8asX8KHRMUp3ph2ASss8hv3YCahKanczBn34vr11iiPTwuoxkga7Hqq9E9NH11my58giN6",
  "key25": "4NPoNQQJjc7jvWAjvkBbp48HJLfejCaqesyuvnXYPNj3ft1SCQTrXaqGRwW13TXDRXCrzkQRson4HAQQJxd88W1K",
  "key26": "55X7ydb2vztyKU4Rs8GYHGCqQfBrhcg4rci3wxX4bBDjFnNjL9JC8c9EqWVvY4RhGoPMf7jomaEvSpvKCw6i4BmE",
  "key27": "MYnAe5JA3cWuoCi9dKKPzzYcatqbNmGVk2eQx5RDvk5MaMZNWaKZNENwgzrWjidCpNZoSLrctUT46VZb693878o",
  "key28": "Fpg6RTrrKHecFeuKwG9pmQZT4Lyy9su4jTkABMnw3zHqFkhKGyivgGQmRR3fsBLHY1yrnr6BVHcV8Aq1KF9oqRw",
  "key29": "38KBte4eWmhqDFTyfdbMF63WNvnZtyBfcPYLM7tHA1Vmij9qw4ABUUC5xJv4jQ6BXxQuNh42NxCn3HXoUdgYXLR1",
  "key30": "4ZevNHcKVmomxSLLT1mi1fieRqhTxZCzqMaJoue8oWy8Fq1WhTYehu99D5mvNeLaC8jejB2DDhcNEChsCptwRbRZ",
  "key31": "5i2xw7m8AQNANhNPcYYjmy39XgzLaooo1Kiq7C6yn7UGJpZQEV22Vz5y5n13W6nEjf3evyGEH51zGKvbkPcRr8r6",
  "key32": "5Y5BD9ezn3EaGDC2uj7Un314cweRuvH3xbprnZUTmKAPs9NGBVwSod2xPjPdoQV7ubnWRzHRnutb5YLsb9EtEtmv",
  "key33": "4ptuLmcbjAnedbUJbAXaFGHjtTUpLFeyX5MBybUDspe3m3kNLT7CW4Mhfi9m3MYqv7SmTHcRgYm6jj9rzFUBmP8S",
  "key34": "2cot3XNAKGh6fpbVsFbB7tM88yGZ59G4Xknx24TD9UbFyxGvxLQv5gfPZ8dwow3qYoqv7rWWUNWmXkjZ4qmmkt3d"
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
