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
    "3Qzdp62J1Lvp1VV8gE5jQj3xnJ6i9VzJ187fkUmm5MvAugTjsTGuWt1zj4FUCD1CmfueYP6CnXkV5StJQDY8QJCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3hQ5ghk2Rj8CtTWx5bD7tFPrxxF3SCz2iPRHgAbEVaFbRDhmDckWgr3m4A2psZTUUS3TKQAfRyCniq9sNZqrFi",
  "key1": "58AM2WDubFHEYNUhwm5njC7gXCBNJRQTkQdXGqkzqQUmktoCMgV8L5hcDDQWBppG4VNXcKSm6TdXLznVRKiXrwf",
  "key2": "4MKQzK1yhwnQ2EWkiRKCMot6qudQ5UgjVxnidDha2gz2nsvyG617gY9tRJBZ6koBqKDHDwWtJ8j3VvyfWnQC36RV",
  "key3": "3uqzmKSyHbLpiy8yjwyKzLdVPoeKQL3m9RLJdHHCq9x94eJQ3nriC2Qonnr8fX8KxZsygBx8TaZh9L6EFALVSHiU",
  "key4": "2hDpctHPXd2Ag7PRRQLfyVo2HimonRo8qLK6DvFAJjBXbnsQeQ6FUSBB4RnhWN4oSUqwWWkxUjAUwJxRT1QzV5eZ",
  "key5": "5HPUwWHfAi6U8bNZEtmMsSZPSULiFSqcz7Q5A1FhaSCPingZ7FYkiEt5gGeD8no31qPHxR1vP9UtzwGPDY8KZRzU",
  "key6": "2QX8u6WjZETHMZzphyiuatc9J8ijZKVwMRJURUqKaVFT7mpR3s1WZRWYNkw72MqxB7Hg2kQaqVhXoEzyRLDka2xh",
  "key7": "nhLXAmzGXSN145RcTD9yTwbpxFsHGbZTW4Hi2oQpThcpVMMyKi1NSmBFXLgeQjX1ex242Dr9V9eHKbd5GJ9sLHN",
  "key8": "s5fTG6LaYX6f53ejhrnHvaRxcegZCVC14g2ict8azo2B7GM2jgbb49f5HRFNmEEj1QMuwVAy1FgZt8LhdHR3q9Q",
  "key9": "4FbT5P3g7gaqHCQfSaqA2iEKWrhAQj5jRVAEH8MtA9FZMidUWnRsz7RET41WwYTRB6Bk4fF2byTdXEx1UQDwdpzF",
  "key10": "2jcmaDDeuV5fUyRBsZ7mLCifiZPs3j7PHTa3McbDJPgjYjidm3ydU6gvcvUZ5E5Mt9KZr4wXYwMVkAt2qXJyVo5H",
  "key11": "4NYidYXYymLFnQ6LGQx8rWDdiQufEe6uAXb6KGcNtEvuQ1AzrbNqx86eKVaPd9hq1ESEdPSfsLGmgcGhowMzXjq1",
  "key12": "4gVn9SCyDU766LQvA3UW1HB4kMELmCtE7dempmugFBP88PjrVFHkGDEcmbYGvj8x3UzYMDkFgBcpfyXg2tLiH1X5",
  "key13": "2KgfnV1PQJJDxfpMhWCsYKDicXGhS98XVhmxDAv3yKL8Hi5nscc68JjgSFqM6ipwoMbFZJ1d7U99CaaBmh4vDYsV",
  "key14": "4D1t2jqcHBsLxV2SVW3pnMdsGJo1LCeG32uhf7Q8wMFgqVKJEfEBgS2G5tQgEc9uKCw5DXZSK6P7kkTWZhpKXFnh",
  "key15": "3Qiv7aiQrJ9LjG8gUUsD8uzVztECGzjQFN1ecDbZ2gFJ7xGgjHwuEhktHyvfNeGZgvfVDqbi97N2WanELEsXkBcG",
  "key16": "65X97BCMFG6CS846kxTh437wVWhebdssgfqCdgwn7jwYMeuBwLwgzvJ8TB5tsXitn52wDZ7qAxLdrkyARpmDRE6A",
  "key17": "64Q887ZHPgCjYLDNL8s3AvdYAUEhWwqg1856Mpc8yzackKtJAL3YcFxPEx1gx4eo81ujTRro369NCcbe9owRMdpd",
  "key18": "378TneHRDv5XYPonXSmeDmgsCrSYqeFfobV9BAVJ8WKospA7xC9AWxwMNz4C4oyc9APnYtPBwSxYHGxhG4Utivcx",
  "key19": "2ADzyjenCA8KP1Y52XqzBEXWCspJypxKrHdawyfwwThDdfUg9eKDHHNM8aFgMDC3Mp7qqAAaNghNbyMMM9F9cVtW",
  "key20": "5EEdAoCptDnhzZaMux3tywmeCrGdNuza1N3ihSfcUtKftTkMLaKnZWnd59NGkrkK53gYt1xfFE5bmbp1gC6RvNft",
  "key21": "4GnhuwYQ9LEJV8jzMZxy6cHxKASH1vxyS2Vp25DFAbgYzmzEbdRPfpBKeiSD3YkckVkKVPhmhnvhHE2ABTZjcbdb",
  "key22": "2aHNx5wEtN7HDAXSW9nNgNyfNyDt23KtUD3vWPh4gqxSwG5bfYZr4Ngt5Jq9fQhjPaPF1HhHoVSrT1h3bzyuPzva",
  "key23": "65Tbt1hMJCUTbX6nN1f8jxfezW2NCMvDt1QGv1Bgzs3Gb8Bweurt2dsjcMQysxWDhnPE1skuFwisYwzJJV3R8MF1",
  "key24": "bppZ9qQHTuwjoBGCicSKq365E4PFYiL9kCQEwFMJSENH9BHPyRq8JWw9sGT9myzY1CpojjARe2RHTS8yWr2XNp1",
  "key25": "46DYDSLWbyAzrUAVasDJ94E7JUim8XxH4ZTuR8Ei1prLSEPBh3nfXmP55Q35eMiKWvddUies99L35ViZVcYNMyZi",
  "key26": "3KfzZyv3mqxC79ZWXccu67kcrf8o7Azh5bbTwuf1y59gkmg3RReZwtcHYYogVfdDhvsdimzkYkgqXXgDWLNgbNjH",
  "key27": "tmukrzJtf8Y8R1D1xyED4pB2z2LBV8G9ETFDz236i3P8xp5UqpumxCqJ4xik4xaqZxHkt5hQSkmryG846UmdXZE",
  "key28": "5oC3Lgon6NjZEJnm72SpNSoan8QawtWh5ZVp1cLRxgfrmbq2a6BKmPaa7PQjrtCKh9RqrAFY9PuUtXbNZky5KtZf",
  "key29": "cUFtcpMBTdfc9PKdWo5NpyUcPURi5aBnUrK4RCZ297qo9Miu5JcLVEYUTj2hrUeE8KGAn8kCYhB6YA2mFc9LdRz",
  "key30": "4sGCSh4wFSQbkqLLitnYy8Jchjyn88ZDou3HU8GjVoi8DgR2qm4SKqrMkgNmSEfCokf8sD1C6ysxHafPjX2hCr3c",
  "key31": "53maBJ3b42RDnP2nazFaFcMcUFYw7foRtFJ1rHXcvkiRRLpu7Ya2qDvHpTLAqb9RTk4x9DtKLcaRw7Hk6Y2dFKAy",
  "key32": "27oC7nEthSkLESpgGS7mG7T4EQ6SxSAkawWzR2nRn3P8xPrz16seJB7qS955ZPQztG38Rbcakqzj6nDsqG8Fw758"
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
