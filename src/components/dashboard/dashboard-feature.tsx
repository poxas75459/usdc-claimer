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
    "2F7uBfAE1XuMx6qeW1TksThYPxCFhDpaPtckqw2up5PCtx2AvoPzYanEy8wSVneSgDSCvT3Xujy5hVoKdCBYWKUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9niHPHwVaWLKvxkttyfdkxecKBgR4xMG3FkFD6mq4okQxHpTQyz5yHoFmxSqhxzsL7cwSZDFK6xhDRhqFXeiCA",
  "key1": "4zroYRCyhhXV7aFHK8mYs1BagL2QFhE8u1VE75ycTtjzyRe5aSBhyc4E5hwWe6QeD6LbKBtaNNKe1Ew9w1zxNQLH",
  "key2": "3tXFBKkAFts57qWebZAjV3rrBKAVqJqZZfDjNF73epgaqRoZRYcCQd7WXTwTSo7htghuGT5yBr7cZBtfdDjQa6qy",
  "key3": "66TJ6dJvkeh38bU6Ciwnt1k8g3MtkhWQV1YXptahKntCELstaPfzytZHa4ZPDNgfcyzjahSS1RAWMvGngX2yxKro",
  "key4": "RaqxsuLqysW4D3HLz87FVx4VgbV5zo6qpeD37MWutoQAR3kpfKVetY9FNSzCKngkckeWQMvMizAp4AcnUPd3Fay",
  "key5": "47MUCC7CuhnMTX2GC1HKg7wV1sbdiVAQVn4MYktvsEnAcZNNera8UhhyXNqUSDcyXixFRkmLHv2JgB8RdEZ5gN3N",
  "key6": "4XTBYFYF7YDj81s3mJ74GYGJRXwXEiS64A7HBwSZRmno1hFKF6bG71nTPZspW1LkyWtiKwtsMu3JqjQPqTJorZtw",
  "key7": "4gQLhaxqdSoLJpUc9whQgzSExDTDEYSwn8tksCHSo5sk5jFufuGBusEpWKdvTaftB2wB2GmkQXDDvWDfozwffB9M",
  "key8": "FQWG9381H2bemPgsWGVffvJqvbmfY6Vucgu7W5B6G5TJq8pknqcTAY83XXMRquVLEyrw1tvWGSRzK47YxCrzbew",
  "key9": "UsdqnbeHytcKgFABR4tWeB5PuLL8uMLSUvUThKBhJUnxfcXkpPTtPP5o8Fo9yR4jq8Sp4Z6748Su1XDHdwPvvra",
  "key10": "3z2ka8FiLUYYqmy2BtvHsDw6PCkwu9dpKBPC7PrCYxCYE8fP6MtupttgvmA65fmespUE7Jn5DvRhTtjyC1tk1Bsc",
  "key11": "53bhQwhGCtZcaxFN4JkoVGWV4M5T6EkxSixmGuYC656eAjBZbdCp6kJDpjXF18fXwDUgafQu7irUoxgmRNtHG3uc",
  "key12": "ZbUBVHwtXY1HLKCfyVi8tog415hYCNiticVcEjzjmchyauHzxu7Nst7cx3tTWzfCfwagprHYyH5xc7PDY58GNP4",
  "key13": "65mfPKY18Ta7aFmH42C64z18ognYZjT49puK5qNDBe4byvXVxYvKmZaqE4vK3MLX4WoivHkpvtDhWXUuhXtmGmGd",
  "key14": "3HF9YuVcSZcby98T4JvZ3XSn8UbkyeQK7tNpG2nWF8JUrLehkkgCuBtq8fp1KgeLY8ifEfim9dXPu87w8qCWK9qg",
  "key15": "4RCs5LAqbwpWAESrRxsb8juV1JNvRWY62iRvXMxvRZcRmnNiPKz3wBkoPdQcmk4AR42dbsVZo45NqtBYZhz8iQHe",
  "key16": "583R7D3tu2HdCpCoan6eBRyZ2PkNUL9tZ8YgipAqnMeeAJQgHbr42nYg9uAZM973vi72LLfaYVckakGuVNLpFFK5",
  "key17": "2bnpkJjdjSr6B8tuFmQLXT3rLUX1QrDWiYumPtNbR6qXCqgdbmvkdY88pyji5mB8XdTzDT2bUf8nG95zbNRgPkHk",
  "key18": "3Fqmn1qh4Qy6j6bozJnFBy3YWiZBgMWs4zz2V9mUbHLCqKNBQTnC3vSw4njggoC1a1GffMKH2ympeAUUJt63V9nG",
  "key19": "2mVqeb8QR4z9KbLvGRGBF9moKqi6bvUt9us1XYacWpyx12dF4PfjHP3h9mQ6uq7iZM26p76FdVpLV52pvHfC9ikt",
  "key20": "66epgBmYnhCK6uxFWXDU93VjAbNSqbwrg8C19ATQakJHUHnD1LHVHgb9mmkKuRgMzRmrjoy5JEFkktY5ga8WL43v",
  "key21": "3sKq6zcYgHVDz46u6Ce7iUu7d1kfs16RzVRdC8bjQkNefeqqEnUFxT9u4TMFhUyK89Q55csgLtJAS4uJFj835YyM",
  "key22": "5WrGiaYYjLZsH5vdf7PwNYSHJzbBVg7pMk3DjRYzU12xRR2TDC7Gj4n4qovTh6UYL4iTouNXfkD14zh14sVQ7tzj",
  "key23": "omEuF7JzCnn7FeYJatQSiFkUYMDjojcK86WgLmAvH8azC4xfkWYxRMv66uHST2EnJjru25NE1p1ApEpYbhud9Nf",
  "key24": "yRGHGnM8vy3mC6rwc5eeZsEWB8nonx88up3TuSzxFfiXCSvAHeFByYjdov5MFVHNDjBHefNNuiCR2JxD1EroweJ",
  "key25": "5MHuije3aaLptjEdtAtKbxTVj8HQSfea45DkQ4c2k4vcwmNuE66SvaQfBUZB8CwajSt12WVKv6FQnxdtXFC11gcX",
  "key26": "5mJHzwWCb9t66eQeNjUTFCnqn1ykcPLMyx2z82Sv4iwTgpT1rTNRoyU5iXLiopT5DP8omLvEMJ28d8opgue2wacW",
  "key27": "45x4RtbZvGRSyacRhhMujJW1TowA6zx39wz2L9EShvAL4oYb4Gy56U1PMTrSHK5wsMuWbhdv3n8TnoYqBPad11GY",
  "key28": "51aJ2sRahhTGLwfi3U5YRVpKe3kEbNZVY4PHjqe8W9CebJGtKdGf7Hfga8zA5KZhvWs5N7nyus51xYRo73Pw5Wkm"
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
