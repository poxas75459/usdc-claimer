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
    "5mUJkT748yrT54qvZ2xKV4WttDLepV4bdQSEF5qnL5cPNPAWk5ZCdGMFyh1tzNeZ7PqW27GJ2t3Zk4spwKN9Lt1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JaR6QbXR4Jqz2YKyQggxLBLakSBTc73VaiHWL9pjoMQWjLtzYQ3ApPoztnF1YV8rtfg7oUTPb4dKmJcoFPkBL91",
  "key1": "26BAfM27hYhG8KnkxTEjXagLpMuPjEVirtaAiSMSqDkyQnax9ReiSVuWKpYcUin4Uj1L39AqEiL9KN6Ee3EikMwJ",
  "key2": "BYZje5YbHEQv7SRhCsXaaaDXwhouHek2tNbQxkzcc2MgZSzme89Ggt2pU1zHM1NYBjnFJ7nBKKQDZV6xdTYoXTf",
  "key3": "2sz83MYqvEx69xd2FW9zmkPXzKoQoceAnRmFyGQrc3nTXgxjK6M6h7bP7sg3pq9nUfhhdR5gFwFxzesaDV7iJw8H",
  "key4": "4tV5m8ZYh4djbsJpJt7LXS741Ni3B4YE3dxwNhxBAJUgh5fbZ5iZjkfVNkqKYq1G7BL5BQXvB5sbhtmJfP1vvkbn",
  "key5": "32iA76XcQ8zKqUwnmWWs4wJKFAMicwdCAygfAPvqA1uEhKU4sfGWQUytvKs2VuZuyyw8N6zEY1bpZmqkG9yeoRpw",
  "key6": "3q9rv8LQajpPMFoAwz4NiMywciu8Utv7YiKRbw6P4JPrKuHayiRyJeFVtE49wkr3GuzWXVn5DqGFiT6UP9mVXZju",
  "key7": "mgM2prfnwa5mSJSk4Ko9xTryrVpZD7WAXgMdCcf9FMYjnN7TKRcskkKZJrN8MgxwW9rsedp7x2VDdAANLBFeLQd",
  "key8": "3famBWuUNW5L73b71H9oCJjAS7ri99Ks51WnTJPhtvR5CnY6Qh3nD2C3mrrrUMTt38RRN4rwiQkUsk1zPxfxgyk8",
  "key9": "4AzoV2yQPtcbM5hVabmq4W8kPn1Q6ViYq8Zgw8rBCgaf7QzxqqYW2fvXNnSWVCtTSo7kqfXNnjABU7qYcAfJjchp",
  "key10": "5mtRrRaYxXzCsikLhDxuV8NiqEEKa5NgvVfs5bkTNtMRsSf6CjTesnHYCiSmGYYta7iJVeAnhNuzSWZJ7c163TMQ",
  "key11": "5qY7PEm7QbPsqUQ6WgGP27FSG1p5csqcxC8Pzv6B5vqDrWnEZY9FfZ1CVWiFE2Hr4SWPEJAYJprKGQGaHe8ozkwm",
  "key12": "5oib4rNbzm3RobwUfDXFJtU333NihFQMqStUmdbcjqKnKPmFEkXfWW2pKRu2WjqCgMKquT98vmb9RhLx8RiXPGqy",
  "key13": "gjWJQ7jbYPiYYSQeRhojfSmmv7xvCDitMwHtNZCteXP7t1y3eKdeWojzpXXXMZozB6ZegQTVgMAKvGMmt9ffn8N",
  "key14": "51nFcrVFHK85cR9sMzwt3786y5A1TwwZVfJn7MGg8CPE3u4CwEPTTzvUswDo4rYeZLsTHbFVL8KGAUkkFg6CyiQA",
  "key15": "4cARvRuWzL8JpneEqaRvyQGx5UJTc5Qgw5HQyCqjuo1gGvpDk5fuymYrio27kt3WDpqycYBe6aWwVrY5C13SowJZ",
  "key16": "EyQtbpK77fXeZFLFaF13yVXGCH7UMBRgrrz8aXgvy2qRZMLqeZVWziDoiDMJAZ4Gcca5AyJu1joMyvZhVPrka4m",
  "key17": "6rLCiA3RTVhrQXWKPCJHidVgYvkUwFp6b9tk5rFJVnCYn5TZW8MEmf3AgLvnjC6YNLTFSCgVehjezm8KRASckzk",
  "key18": "4DpxvYwU5m1VmAmELyKPGKC8XnuXbn1KrxkqD8YrW3r8uEoZCzm11BSvrWCoHSJwF8B3c7rtDubYAun3LjBYQj9J",
  "key19": "129G4VGj2JuSdbVptzCJBCn9atUdNnTUStgQygy1YKdAvcS81jKMJYjTWTCbQC4wMdQQ1i4fpQhkMXyKXZhSk6gd",
  "key20": "26LQGbNn3T1KzP24v6ZUwXR2zWR1ASrVFJ3WwvHiihovyYvDpZB1WxdnCWvMsmCrNhGa7k5Nx9P2EjrmrURMzNZU",
  "key21": "46iBsmD5Skz7982VGmZXfw7smzgpvsXTDxLnV1MHAMedkB2eVpBo7UJT5zqfWzvmP6vCCz47LPK3hDyoJJ3HFEyr",
  "key22": "5p4MkKyzKRf3hjdmXU3stqQNM7511JBgSnWgbWJGo1CM1gksMXq2QY6eg37xNrNz8z5J9ivixFgLEPdPCr3F3iGZ",
  "key23": "4bCoDPsnaG6eyLYnE9M3AmSYpEb64qR3os4s3GiSJTkCUuu3VwqPDMu4H8B9zmZgSfhKQMePuc5DKDY5NpKisE5f",
  "key24": "MmQpHR8ge5c3CDSB1a5SkFzpZ42qNWxh5Bq6GgWb24xpmkyF9gU5YzYNP3oaAUDjgiSJrfUPvtve3ZtHb7sawbF",
  "key25": "2TdHV3SoWmx76iNpATdDksghcfK21B4kxLsKoswQ8Ac2yc9KXobcuLtEVjVVoXbRL2XcCkUFaoPhL5RCpKzYvGYu",
  "key26": "636huYyWLS4MmuL4qmuueQFxpXbpfJvHfHRZ8RtrAA7yMQnFVGgBnkc8eAoX49wcCdfvayKpsmuaLx4ULu23GHNN",
  "key27": "2va1sRgnF9EKtkAZ5oc8c1tewL62vm6mHdYfqG4UAK7Pufsi9XyG4KAHMUR5i1iG45kqGBjc2kqKHehdzRknggeU",
  "key28": "3uaXzUai2kzZSFZoAGdsfqXsFgVpPQPW3U5uLxSZN1CviCznpz6wFdzQAQc7N47rrV6noAQ4Pa2PtB8dJdEV738P",
  "key29": "4s7sZ55f8Dn7vMMHuPeEc6PmpyT7JrPPVktKF5TXCVLV2LGbLg59nLkCSA5jjDbhLbSJ3DmvGXKuXXEUtvXEbonS",
  "key30": "2u3ZDmLdqQxTSJ2QoW2tBFPdQN7abtjNeDFsSp4Vb6rLoaNg1sQXF3mz6Lv18zLrW9vAfuwSTmW1cxBaMgcjgKun",
  "key31": "2dwwvrV3pyagY13DUbYsEHqrm5EH36Wz1BZmVF5KvvxnD4Yjf27kMLae9KBDu8aYSdPYz8ursoqopbkj7BuguAnD",
  "key32": "4Vsa84tEQiuom46NiDUXrcSNCNmiZoDrwovphvMSTSg4x7H3T73y8GEhVdwcXDPNopdv57i4XkZHo9wrQ5q7fh1k",
  "key33": "31YAr8exbDuYU9icyMJAB2yRY4VKaPtpPCAkfCkijDqCJ35uNdELSWKEHCyHjKAvzp8n57hcyr24MusVHjpbycGn",
  "key34": "431vCRMeG4wS2pGJdYBNQqKHCyEXTUwGTQxr6SKaADetATpoCCMK494DxPGVZSj5uAbpav86VH9m98n2oc3PtC9f",
  "key35": "5aUSXZgGBoDwsw62GQzWVwWF4Sj9BioZ3pcLzFK9byhm3nPd8z9zKZEBcmBAuaCoLRU5QcQf8UfdE9bv5gwRJ1GC",
  "key36": "s9NCetaZbvtAxSEJTZcYA5Wr1q1KyfSaS5HLJK7htHyo759LqqB722XgJZg2cATyNQF1fok2drGH8fyntkS7MkG",
  "key37": "4XKLKdrkcmuxKZ6xAW9Piddkug8TcUhS7EwSNCYw93Q84eRfE3CTfTfHbjo7TeUpQHmmjqhHDxx1kbgUPT49q7hm",
  "key38": "4HyFZzEKqfQVEdMVzFiAb2y4nGAf1RhiAUdEPsRVpLrjxYrxQApAGVjtVoa6PexWa9pFSADJVx7XLLQ8whqYJ3GT",
  "key39": "553LGGtt8jGwJ92ThQyTqtmYqc8FrXzcAShxghkzhQhG6b2vVMNQKEvJep2fG89Jz8W9pPub27hGRDn82L9o4bjR",
  "key40": "4uAEFFDoTbtmnBCFWekk1qoi5TJSkqaHFHCGXxKiKSVe7AcgtpU5RBV83pMVx82JzFHGuWncTMzgA917KVGHNyzW",
  "key41": "4uX5tCeJJTUU4z46yckT5LVWQHmzH8vx6is4zxtLfQxCiwFfEq2hcJtTTwXH9R63CfEffzxPZf8hn5MNBEab2whp",
  "key42": "3oHL2qpXDk1eCvGh4e7C6N5qWGcXFoePRYo3pj5cFCavUxTziAn19kDmxwm1DHAgrbmHjVh6FTjS4QvGKHXTQ7Zm",
  "key43": "HvCmMtDCqQ9ysBX71AGE2kdSo3q6so6hPtwShoCaxjM7yAXagZDdqevm7MriSHv6aTigB7SJqvNedYGDYGiazWJ",
  "key44": "5gJioPXmUZ6rTAGGjuBsMsndoMxj6JLLq7FXvENhoLKtEWrtDCobpsFoDXN6irVxtCKUJDsqBC16rcTCJw3Sjfyb",
  "key45": "3PnWmuk5AQQXTDDCuJvUEHCPXz398WzTMSM6URTvA6KJFfDUxpeKfCSUERGpZo7fDgAXCnYWZ82JSTS34KN4B5iJ"
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
