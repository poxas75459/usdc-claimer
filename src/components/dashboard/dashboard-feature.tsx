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
    "4HeDwyJduTkKG4XmDPF11sG1oJCRjoVqWfM2RBL9B4uGLho43XSdMDbMsde6ed4pnSfYudtJmqTw4oBAFbFyuTuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F73TBjP4ywQn2hUeijXXdK4dP3meEE7tWwUy14cZBVXDz2BdnLZ4Z8vbhsm7gyiSbCWEsz5zuRh1eQkx9Gq1pwv",
  "key1": "2VPLz7DRLC5KEFM9SRvWFKATbQB93d8TVgze6TjRjYrBRaPvGnA2UB6kiaC3xs3yDkE14T1HZSmRR559H5FnqhvJ",
  "key2": "2V8TxYmbeazvzbcG51wH5Bfcq41b1nzc5nXbw6qgzx2xiVcQtXtHfTjvUfgLJeqXynsHD8qw8BKnU3jogPajZjya",
  "key3": "2eChW99v63gXaFDKB4qy6VMhfRBhxqjbxFhoNuw1isChewyZuYvJSznnezeNiwz5KqLGY7vQUWGCv4L17TC7dsTj",
  "key4": "Vwdz9UMzMwh81Z7YmjDC7FJEJsSudBVzFECfrKnnQ4sXVdRp2mZZKVLZ7vnDT8DygPdKQCP1fcQqcanpvtNsaEr",
  "key5": "5TBstcmP1cqHzh9uxagwqHUdwtzXw2x9romHt9HzS6YneHXBiKTwuXu3xCQFrd5PDvC7RbbnoYBNf31Np9R9szhx",
  "key6": "3sGmnxTxRCjLLC4e42XvBqWgNoDHsMQdPgLtq8TK8xoGEsus8WzzHdACMRNGm7s5V5g43fcYc1VXnTcLDXxH519u",
  "key7": "32UkoxNSsm2vBNHmT2LcnK4X6RSsxWJg7Qdoui67V8qxDG8JjKGUFjxKuCaXMPrDM3GD833k6bYWSyHUCZPspLF6",
  "key8": "4XRDuDZjU5w2sUKyF3YFuhmCQzTUhYAx3RZjoB9FJS2TjpcKMYM564eVV9Y4Eb8p6knxk2TFJSSP7iV9PwkQw4Y",
  "key9": "5rragEgtTxPfBaEz4yjSQxkvmP9WejhZhjWp8y8ykLQ1gYr7HNTY8qikBoeCs3YbmWG5VbM8eRWktmE5wPeCnPJB",
  "key10": "21MaCJWfxgNBg3BoqYrHnE4efT8M1m9swGfbjagG77fMn8aAvDpcGRFEssdsm6a1boQYFnrCrxDsjuQs6Rz8E2m4",
  "key11": "4337VtW2ppo77WLETdPb8MeTSBZxxPRZCfXhQdB2AJ6NbF2xjvv8pDdjUD84HJwy1nA4b1KPV84DXS4cJFoy5k1p",
  "key12": "3ukwQtfFgStsTuKLVmZFrKM9MPq7ndEsqk1KjQACtEEfBvASRGZvwn48NhLUtg7XxrhP51L46zQzrgTNpaz2Hqn5",
  "key13": "5tf9fXRff12P9yCpNbMJgvDBxd1ht7AHCmf3VKP2vLGPz9TqieFEug2Ma5hyWhU9veegJsbAXPCv8yK4xEBp8tiE",
  "key14": "2b7UMYH4Q5TDyFWQYuezVGTaGEmTKtrpNu7HRrSRgLAUCcJbx68WF9TLWjHzCtFf1Bd2RfCwLiUuYWbK24U4ohQb",
  "key15": "4qhjBLQXJAPov5EbEyffyd7q9H52ZPHMoLbT6R1N3paizdcLYdgtzMuwH7MQ9NQ6teSvoXsEWJ62SjMaQQMLuDjh",
  "key16": "4sRDku4mZi4dX1z5fnfzeQzfAD5XCh6WdZ3a1p4Q9YS6KxBexyNru6KiwvFK6YYmZk869oSem6uhVEcZ1w9sJR1k",
  "key17": "2X9bRVsRFMrvVuNs5tdHdrbTpqAV9pwSS91vBbhXdgFjPxwzcwkq1NZRxtgg1mQGzDGCR7iHrv3k5pU68hdxJh4j",
  "key18": "2sGrid2CAiFsCZ2i3i4EQPkEUYjAKgCYqZtdRay85KRuHtvvBknW2WDde2ytqecrQXHonhTHRYokoQ1reH7uHKxb",
  "key19": "TRtpi6fG7h5LSVd1NKHjaPHWTUjxkMhrudTUcfz7BHLUqQ26xSQEWcFRNDcup5WX7xGgZYt9pfLyiMdaZpLiJEi",
  "key20": "2dtzwkHQV1QPVqFYqmeK3Qc82RdCvdddsjHUGVCQ6MgCVwmBeMqCjmHeXYJbWdFmGApPRGJCU1pYfBZDqZ5iv1W5",
  "key21": "451yG7mvvnYmAmDgrrpKxdaZQy8ydJCkAZ7YpJCZXuYTYWmvfWFdqZx9DofmCtCpQ3RkAHAu8FekbLBmMWo7bvL1",
  "key22": "2UNdF8f2EYmSqiB8sszWo9D33jpZHtwuF2SohxjiSL4gsKzj71UHdxHHTia15RLRYKZ2Zzxd8EeEgQgw9BZZs8ta",
  "key23": "65DsDj7sVgvtRGihkDNcBStfE8AZWnKLvXKCQH8i2BKzJArainENbHnHTLVwfqFj2iDKQQ9mffPrXUSwy2ZxWmz8",
  "key24": "HrY5nwxT1sWat7tZmQriFTk3tv29CdQtVh3BDdGHfeVrpdcgUebDspAsF1EUt35mfZ7DVT4GE21hxqMS56zTQpu",
  "key25": "5ywGwHmoBgFE2igvi7hAk45x8MPFPsapZYHkkT4bbgBxdtj9Lob2giWhRKZDNBJvJkJXgqqQLswm2Q75rwjgbS7z",
  "key26": "2oZdYwjT9cScfoRgA8dzxYpXvNn2ebjKci1ZWSspskbuWcujCL6dEBRg8AqCgw1FvadbMn4SG1GbGHWzvrKYMP8v",
  "key27": "5JRLS9FYX68oqQvE22cBma6e2Uqx93Yj1JpGEYBjJ1CJrMNa7iJwbhCQRzaeNkwP4b2ZDySMipFbY9CHNNim9Qjx",
  "key28": "rBz43MePmZAnghHYyujVFoh9Xqier4EKB29tZUbhsXDUBREjNWSmWCrSqPAbNLXB4k7gHQpDknPXJn37d1nisxi",
  "key29": "4gJ6PpiZSetTUTFrF54eSjYRsHkHdoqgt7UtqidRw6Y5NYEronWv8i7DVmTAAFocd6erDBvaaJ7e71Hqd7Wfq1bR",
  "key30": "Rt3jWvefRpRpLMYLDzWYbWtvAnDFQ8Gf5UwaQumf6yrHHm64frmY8gjohW5fh77PPKmtEDzCe1F8DzcApGWiZn1",
  "key31": "3a2sMtT9QRK9cYdXucwm8KVyXAGWiYvhsgusdEMv3aT7F4ghCgsed4GQ8JFFWHxUkuBLnV1R4MCWn6y6KS61cJBw",
  "key32": "3yrGrxxApsZ8a9vqpp8E9AFxBPi8hd9t9Ponf5xQCw4pZt41AdwhFXNvXGr5oogo7psvwGiiVu9V19rjKbFgAuFj",
  "key33": "5hyvJruWSddANAxXqLqFHa2tc6oDAHjoyFZSHPneH2S56ZyE3MnR34dLz2gRfAKyvrXJfPRj79b4hE2dT4vwsWEw",
  "key34": "tKZUpRX2EYt5edaYLGAaQfVyTsKtD8c7d4uMaqayQEz6ipig3AD1mYRwaDKtfR4aZVqkW3iZ17riE3cKfX8mkGx",
  "key35": "5LxZEJ2Lkcphbh2qKBpJEtYF2q5PtJb5zWXwaDJTmYumNBSqRPynbkiBXQfiJsjWNuTzuHRKodXhK6eSufNK6cWg",
  "key36": "5TPZxpuumgysf4ekraiZLq2GggmvX2DasKKK3eVYk4PvF9uxcdA4wHW8Xa9uCxUNyNRKuHkymwmSb6jU3aBWrBKh",
  "key37": "3G3nMY98sBo7gAgExcjN1Re5frmT9wj9yMENGvvB4zWAWksQLZ6TWd49ZY1Eb4p85xGGCh9MUmKzChQN9t5hYUAU",
  "key38": "5z9sqkB2g4ymNv2zxHd9pSpEs2PU7Ubmyht23tRQDDaGjkn9agv3xBAkZS6mDByXTwv6kpMg388E7UMBzzpwuLAi",
  "key39": "5f1gLKTz9o9iL5pALXyeazDErvDFGZHkniwhPbELDhosUajyjSLjohJ64FacxWoJCNZMES6obfiTrWBfUH5semtD",
  "key40": "66z3J5pnVd1pRV3HTewvy4RvrKMCX2Ke46SCrvECw6utaArRjKBLPwVwjmaJrpUJ3X3cB1bHHaynxZyUqtZZ4vxJ",
  "key41": "2L3eYV2n9ELwtt6vqYBXTWDBJbTYMAzUrUaNfS1r4BGDDqrpuESFamsyMB9k77wemL1H2rNb6jnAddBC7HqrBKe4",
  "key42": "2u9L9DUTgL8fFKfuG5eWom42GyZeGEsjoFkyYHhERAAUqbZQoqm7VTGutR3sjwyuJ52bcvrBGUsBtb4RSPJshtbA",
  "key43": "2H2wB94sCjqn9K1KANt3hfHUnLYR5WhYG1ebdChK3ojJvGjRLzX5Q8sq36ePBH86R19sp499GfUhB9vbfGuvF1qJ"
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
