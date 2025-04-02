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
    "5f6pTn3uG7y7j6bokeUnGLu53nZXk79CFmsxTUrevsphHKyHccV7LNvG4212Q63Gdu8KEsGFduop8UEwGT493FQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pe58FAznWocGDcxZ1H7LKiKV2uk2qJiSxuqW31KtEm5Wm57QbXE8MCVL6wsoTjkS9rW7Uigpwjk64TCwKBsGtc2",
  "key1": "4DTtjTCHtRFZionbDT7iiNGErXaLm7fJ4JuVfWgNZhyoWE4jxPm9mBehBLoHfak6Z3rLdYpLoQhmemu5CJByGjCZ",
  "key2": "Qyf7DGjmNs9XDGzkRBDVCSg16ZU2c2VwSyCux18hyDTX95SLpXBZK3XT5eZfZgLgaoLH3SB1gRZpABzwG4sqiu6",
  "key3": "4Jn9WDWrfeT1AnuRX3jByrPACt8nU3e9YujMEZLDiPnb8N9ihd2YteKq8kQYkr3rjJ84N2THHZCL4TeAMdrFX9gs",
  "key4": "62FJ3eeKVwPNQzURjBqkpQjTAThTMdMnNQb8So2znzLGfJ17Bk4itqa78DsssHDigTNTLC5EKB7D9WGcMSb18iSw",
  "key5": "33uW7RVpvgKCBDzXfe4WLQeogy6TdtUupoAbBZr1QEQgxMmWLt8J8T3xz3xGSLEkMbhF7SapQbTgrG2egfxKznqM",
  "key6": "3XT4KFrFwDJwsuiGhwF2otwe4iT4oEHzeNkTqNZrZ7EUjXpMiSThk78D6VCrqVYD1hNQ372tP2vfXeo8zE4NXL4E",
  "key7": "33qSDgFLvnqKqFZaKFQBpvhRay9hBiMpLvi4ysUcuiyuFWyzj3FJ96fqejz32CcN3UEady3RdTdHiRb3epKMaWV2",
  "key8": "3EpLqUp3VoGQEuvmifmMYLX8K2EAXd2DbhmGwpMtcMSqPVdrSPqUi2jKQ28eLAWYYKGE29LEXkA3MRPzbyYM2oEN",
  "key9": "4D92U9u4oozLSjDFp6oftfGhoJruPC1RrPz7eb6hyott8pWM2ZrS7joC2nvg4czFYNEioJfMK5XmwL5n8FKDrne1",
  "key10": "5goNhRL5C7RjQYzFVc6sLPjt6kiarg95a74HLM1Ec6qzDnqFtshZxLFLZiK3cG2piguBJ4mWGZjdTEwLv5n8iJVG",
  "key11": "2YQMFLviMKnMgpzToZSZ6aW3QgS3p4huczS8YYJzEanhR5Eu7pq2MCdW9Hh9UjbCQDq1Z2jrcPRHNsjiT68vEjei",
  "key12": "63FTuc7h8cP64MsxscR4m8NukqpUaZpYpmbSAK1cPce9qQ5kFpbPCGgucW9wXM4APDg8Lxo6XB7URGrm8VLMqx9S",
  "key13": "3AJGKcPY7S76NY2rZajVxyKN9md4PjfhktR8CNG1ttE4U4riGiiYbDkUAxDshAHr7sdaUostfqAUaqdJvPVWNikd",
  "key14": "4vzs96Se25P8kBXTPUHhkVt6y5CJPbujHawDKBL5WNBjZSuPWaUMr6SLYCYADDPEQTSa5Bee7JVej5hE5MMg25Bc",
  "key15": "4JeLXiPpH4qrvhqvf2Wdik2HqK4WeEZMNjm26xPSnfQydL1iW2bZ2fxWWhHizyMaya3udut7edPmK8JvRAYFQRMP",
  "key16": "4g34WQNcSX2QrCQq2N1SMD4dYx4nq4V6QUh76wY7FGFDuvta67MwymLWNAbFLCeeLf15KbdB1dqaJ6QDwzot6tid",
  "key17": "5n77VT1cFr4rmT3AuLbfC1arWuELbwAJJLrS49QfnGPvd9shw7NGSVmFpKBnznXZJmcnuMr6oyvAYao2EgFCd4sh",
  "key18": "4greYNvr4KwPiQrFaeH4gsonmdAdkL2jvABUj6HTwQEuCVev6ufCRaB5DnCAYEuHASnCBNskJMBETyKmopFaeAMf",
  "key19": "4LRtyptQ7QMpG8XxPMC6kkMaAZd4Dw6rQoacs3LLtXE9PuwDFZ89iCjzGvNxBc3ZwmMQhiC3zeVFCkr8KymHLXRH",
  "key20": "2X6N6qe1CvxLbtZkVTLmQAzrmXUKTRjswsaEJodvFErDzhMAc7xJANpxnt4CtATfoikjeTbwMdxJHsthHdPMtKsr",
  "key21": "4wi7Y2zE3FHkWCgQcQS9SagwhmUrCpkHcvKxon6W7dJAhA5JvL5Qu9x3P3Gh6zHxdCfJjZnoj34RW93FYCBW18yb",
  "key22": "64p1uTr4Bs442WRk1wEmzVAQrYGN71KRvkbu5kADcwy8Z6dnnLzcfsL1iSDNxTP6PMJ3VdxTRGi3YF5oTg2hsLAp",
  "key23": "2TVMaBgGpsg12Bo4WPCX2f84QdRKoQpNha1PcscEh8irx9Q8q9jzccEwH7mBnJ9xvhQq26JEX7k54cx396qqPMto",
  "key24": "2vzyknitArjUK7WeSKyfzb4ayobpKcs9c5GS1kTKNKWfQqhPVqFzpLyMzKRTtxTdfRRp1qLjPmvUQ1ekHUuPJsLZ",
  "key25": "5XPU43TqhajWVxpxJWH2FcsWrdP84fGSAMwp7yFzCur5khWEUMXgBNYUkSJg1DF1KPdnDgU9JGpJRi5nunU5mo1G",
  "key26": "4rmnzwhfdGmr4yfiewXMjp932BM2uVzRnENiQUUi3vA9czYW4VPmoS8jHqgYH1Byd4P1agU3wsR8GH2sLxpRJr8n",
  "key27": "4Vz82PVvaceYLNjCdD4qehT43DbLQWUvfqfe8cHnK58RaWrZfA2ecikHppc1HxTiWEoCo9CMpE3GFugpdZKu3Nep",
  "key28": "3oBsyH8RaMgXVfdWApkJuDd6RGdWjZJr5AnpEtd1AEN8RfvfRZnjn2b5UJNZRpW8VhnPWDyK5NtZ3EsbNwiAkSnF",
  "key29": "5PRocabSXUDwNHnxfsmC9j7YJjP2UbYEDjp9nFrvoMwBDKFJ1Wo4UuJFujgzAtSJxiNtzDUnWwbgeQ2pgNJCYhap",
  "key30": "2qLX1PdTAZSc7DTR4TGMwHEU2ttaAhN6L6b26t2zMHRWmF1PQSWNoYdWMww1gNLYdeYPRskSC2NUkjTzUpjqsm7N",
  "key31": "4Shav9TUmB5zVNhsrpHbyas8FDcZjoShTavbGKLCNSpkREEgqjSGBbnJ7cW5jVBWEvhUbFf89sDDVRwy8VVrWjYS",
  "key32": "4Kv9N2sPm1Mn587umo45nHWGukEPmcVAeGpDBPBPsQ9R2pA38m6Q1yrDsjouAkv36fpj6SeqLJKEuu8isRhBdaQ3",
  "key33": "qopYherZgqDmuBovBCmoyHmAssvorVhY4e9xBSfREjAQ6od3Gqa9z8ZBjRJMjwCftYz8wgFNf6f4psen9CVaBbY",
  "key34": "3sifPXFnaQ17niQBHkWjfNnJU9SEGpUSdS4dphuUwFjqpcFJUPZv1uPnWAUmUhYMaBPAJxmaGGNp5sqp3wW4ewRp"
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
