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
    "2hHJ5ziJgN6tEHrEgPdQfPEeFwUG6wFMZBBCNzL6pdboQSJWp5WsjH4x5nGPfR8rNjV4LzjKJXjzDvV795i5tU3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmLJ8cHSj4wFie9Bo2MZUuHRNxdjAT3orccbzj5xTJ6KUhwDsC7UnL6od99UEHJX6SgvKtTV2RcdQiDcoKKDZcs",
  "key1": "2FUXhwswot49GTonFXdy5xw7mQzPHcvbETPghh7MV1V8Gh1owEApWD6a4SFDpvjpRbtWybhPPAcodfJrcMGqb7jZ",
  "key2": "DY59JLSL6qTjsCDa5Nwt2LXPUbzyFkrnkEgdwGzVnCWcJmKdGMgw5k3FeHBccqzsvgS8ga6w22R8N8rmYSyKty1",
  "key3": "5EqJBNi43RTD2Wh5F55gjHzwaUCa1Bj3MDX1g3HjBcpkFUtRjeAa8TdHLYVVQpV7eJ73bZ9azYBkqQTqxTiVdfGk",
  "key4": "4oyVGSPNDDy25gozio1tEw88X3avAGvdkZzXyvMy2Bre2H9p26sNyx1762Lt1FWnSPjK3PgY3LJrDNnHh26TGqVq",
  "key5": "33tkgrECFmGrks82N9DPe6jEoasqS5WUzuLGgHFPmA5hmV6vXrVzmVKWPJjwuqNeKzjBvGEvnuYLvTP45P5HPuSp",
  "key6": "57r9PFzSmULrTVad4bAsK5YBGCoXbNPtdDMpwAHdL73apqa5UoPpNScA2oLwz8J7NUUyXmY5tdZntj6t2M4e17WU",
  "key7": "5Gue6u2WFQA7MKimvzxVeB229XC8Y45kFJWh2qKBt4GqqZjsWgbPQqMiFWeix3mNdgM3iRciAM1WpSmGoom6ciSv",
  "key8": "4wASPcAbdUj5QpUBgmBhQyNBPmyZcVoQJ48maxmzcDpWtoTRrYXbPh5rMrQ1x11eqNPBuzB8v5UhE6kBa9CNFnZH",
  "key9": "2whTm6pahYEKTpvrMxzd16wPB46zNojj9nh664TTjjZKa5pKCPHpu6rBUhjkdQkkyTuJgNd5TF5Ye5tkTswrhgp6",
  "key10": "2rWeLpocgFPCgFJJDKpY1UCiiHMfKeut5sNs7o9GXpqaUCVuMHWvqzGTtqxqJ9pgmx3Tt98bnYoLTaKUyc1ack8o",
  "key11": "4vRvgSrJeRuU1RbBfxwh828QFvZGzgvdxcxBWi3966WKGq4MMty1QePMaBagsjsau2QHbpbntgJUaoNVqyzXqcbH",
  "key12": "3X14s1z4XB1JZRFjQzSvhoNCx831pYJdYikjGQVRycAWDc6bz7XfHWPact5PXdi8iapbnCWKYFstMi2edMitVT23",
  "key13": "3CHHauNuMn9nLvzvFZgGnBosUzPVhD9XavspRXeKGxU7LRo6LQ8Cgb7qeeNW6uyt8kM4ogVyxzGwWBfRkNtZmkV9",
  "key14": "39FCZWC4mgy1AaD3ZQSXcK3hPtFyUxn4KrWz7etA59awZVaV3WYdgedbUQLB4j71WVqAum1nzBMCuCdyugCXsBn2",
  "key15": "UmTmCmgM2RQQTvWGvS39Dwg56nAuZ8WHPkpUPY1SMXuTEdqLrDKz72H6JSXar7k3jvpywke85CtoNsWY7s7BTWx",
  "key16": "3mKp89221zEgaGzbuK4Jx6b4Dmm361u5vguqYNF1xSs8dpRHZeF4dvX4z3Sp7VEdZSgQNuApkXGWKNmoznwsgd3M",
  "key17": "2qEUtGKGFusNnNcULJZfDZ3aPm6u1zoBVw3H9CAyYhue9B1Dpa2FEQjFA8agzaheKMUNSiYBPLBTsrWjqVxtofGs",
  "key18": "T7iDQcqVsbv8zFD7FcjRquG23cqgmo3XyrVf8gGfoX65QgQqw4YFhKxp1mK9byMbtK897jNF3rhtk62a3otmnq8",
  "key19": "4YP5ty1F25MnW2MY2WHeNy9g7txYy89ZWoX9UsSDhRkqcQrw8pfmDFoSxJtGJCjkLgQg9e7tBGYVnbPtdz23WqxJ",
  "key20": "482ob5sbjYscGdDC7ezM6MWkPL8LLyEFj5B7rhJyme5rpXYGxW9gAvAJC2su3BZqNT3a3zq3VMMf5bdY37hZ5uXV",
  "key21": "mZXeH4MGbDykvRcfo8G7Wdtiu1oAtzRUUVo9BHaN4y2VYkMM6rAthu19NGXM9oeJhQhNULCAHjRbtoSg5AHpCzm",
  "key22": "KBQoaQqdJRdaJPTRpZYkfsoVwkKpz4QoE6HRjS5BcLWA73J7mrtYc3qjRq6H2gSEJyPdY44u2ok9Y76EFX9Wmfp",
  "key23": "mxKrZjBsyCqbpwonK6RKf54RuXYBhA8J5rXvL5UcQ7Uq7M5tHMAjnYoZzZNuXW9QCHm4cxML53ks1Hjc4S1rxsh",
  "key24": "24EiNAEudKrbbDFPKPHAzM56rNQESeVPLSbFqNSAA9TnWYQQXujzvioDrgbWJ7v8s5cDjiVbXfpvE1a9es85t9Jg",
  "key25": "ciUAvWuWn74gkuDAicTNgJ59TYKLTknDYSgmwnGtNfMbbJxv1LpHAxZFmKXRysbCW7ERwqDBa8bj2e2AaLgXG5H",
  "key26": "4jNkTKdDhaoVb4zNMbif2pKVfKmEVeSzEphp8aJuMpczHcnHgkdR4whiL7ixCCs8duVmY3Wp3LmDjKkSHj1XuBg5",
  "key27": "4GA8fvMCyrqhQFmBr7oYphULdm7LKXVx5ASGcaBBaneKhZSUu69uNqgKFL57oajsMxS5s1e2tqCiKtLhDVFbmWDw"
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
