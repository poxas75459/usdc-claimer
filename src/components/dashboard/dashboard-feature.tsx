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
    "2E1PjwFEwzBV1CKhSQuxpatRJ9hrFoVTw5qNLx6KC47bJntmsHR6ycGgiJbnS86vSmGzRU7TyVoEuA117pwMxaZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rkft9SRpwntFxNSg4raQi3qgP5RJSc9xbBE7hcCRww6XNS6P6bpWqMnpdhB6WE2bhQJWU8kSoB6xbh4nGdbYLA",
  "key1": "5ackPkx43CMPmRkSDXb6kpx8HVpiaKYgrAd3A4bkHNzNEpHW1MpNz6utSRF7P2E6RYoH3yJvqYAuE3oJszo1DN1S",
  "key2": "4dn6ofAhpuQGMWNw3RtmVh9J49PTyta9a725sPX3dT7aUUH4dz1NWCD48CsvBLitS6sKp5vKRPGjNSqmVHF7BQXy",
  "key3": "2xyhHzibhgGdd6yZKLLhLCWbjRHLtnLYJPwWgiyZE1yZa52yZzL9rLuDhzmJAvtS6hJv9gc9XQCV6oBLxNpvBexH",
  "key4": "5dZ7eht39YEHEGdqBRGFaaHJ3kie4R6DH8GN7wieKXWAAm81bpMZd5YR4MCH74w2x4CedXjobs9XHhtii9EBw7d8",
  "key5": "62JENWEQNWEYPRULhxvQRCpqM6xdfCTPq5eZU7dL4eGeCpuqUbgGJ8XM3tYAj4YnUGF629b9G2veYn1hEcGpJhTb",
  "key6": "5Hj16sw7FWAhYSLy2sT59vF8EsAwSuLGbn41URLkZDv1U3VCDXgiji7Eou7Vhp89LwArT59ByKdWnr7mu3r37vJ7",
  "key7": "5FnzPPbaBWjkmddrmp8c9oQTvveBSTFuwcEJ9MGbmRhTahXiUX7d6GzVWfMdW1gy59jtNdPGm7ztNHGKK4J81uSz",
  "key8": "3ozTeMXmBaD5UriQxg7uuEAqLTwWURS2uPCF21oReHTKH2MXZgj2ZmxYBkpsLsDZ74jKgy2VwPBmkrKgXhujbURM",
  "key9": "4FrcD2mso2sWHWhQW2aTNimR8VvV6mDjhXPZduwBs8p8SNMKCjQzGr5kFxqHrmeZp7fxWARACEMu9qmy4nMDZ5o7",
  "key10": "1DYFsfkWBQXyWyxuC3KhdVtDCXPJG9BFQoH4KN2cFejdH62qLBBMQV71AJXf3Ln6TQ6SuPpW5zVs3XyA3x191oy",
  "key11": "494L98HHdNeX2TPigeyEEyHYBsCMKA27b9NmEVEMKF56KwJ8JoM8c5EtnzK6JwGcJqCg9bZs423t5cg8ZWL46LVq",
  "key12": "EqaKPJHy9KDpCBiBg1cPipybhBKkTuZWMCBtweyzTvkJ2DN7ycKg7HTecpoLiUYdKHHTC3sjfJ3bYfHTSkWRwV4",
  "key13": "3NSL53n4v9ucxDX26JnL5kcVfQaC5m8Q4MLeuotwAeCoR3ncjCuSAQH7SbvZCVkbsdELsvA7fKcV5KfzX63DZ48s",
  "key14": "3Vcsm4nLw3v6xyRU9mCmKdE2wXiBBvL8ZNx3p9tQTMtaprUQLv4HPWjfh7Kb3aFWSR2Rahg8bZXa5CLxf8BdvTmU",
  "key15": "29VRCXs8JeZ1LzkWWrzhEMZ4NApn3r9ejGnak2J3DugSscaMrH6QD273YtJJExnc4JXhvDGBcq7W2SLR9xyYXWma",
  "key16": "5DQqZzUA4gpPsiC8xuUrih16LjRehKA3aiy5pF1SFRSorphhWdGXSEK2Nd47tXKrncBV4brAm15K3TNQsXSYabtk",
  "key17": "21bJswQ3JyaMs1f8QRPiPrr1qLYZQUHXWu6rQauArR11V43TyKp7fh5zqjcdNTCWT1XUPYSzxn9Arn6sCpHk2p7F",
  "key18": "yWtiNwVCKJJwUB7esNq7Uri4kncpY6Rajid7BeS4KpQcW1aKD1HU1rVQyYewJzSGZbvpmiH41AFqQwutfYs5W5E",
  "key19": "52v4jxsz1En5tDtwCy4A41qi8XU6aSGkoSeov599xNwzcC2U8zqERvrxFR9zhPNwMUk7MmuQ7g4JB7nMY2M5pV8f",
  "key20": "2kaWh136W5YST3b9iWbMR3jCeLJdzvWvXPLzrwFi5NUJiU5FFGo24sPkqJBYsPq7cwX7ajics2q1Vu534HzMcwiR",
  "key21": "3xVFCiF6AE3xMb9kUiYrP35REY224YiNqVSusMgiR2dyh7iAE76PgTR6HquSh63ttVJsr24GP42pQpGc62E3A6RM",
  "key22": "3jsH9sU6eyJwo7PMAyJUC3sLFmr4XMkxKo4SYEKg9qDhEZE4rbhL6LxJPi95XALPhuwZpmR4UHuCG2ifMjfzcEDp",
  "key23": "3mJPuotHbWjupAFLoM3L687p9vabMr3XiqckBe6GFVSeN6m32pRxt8deMU5dCQLPti5YimECXCjddT7q718XdaM6",
  "key24": "33ZdGGXV6mVQWED3kWGGyfPFfn9bKNhhj6UrTDxoT48JUsSMJYBTFwzmV7TE9zo5FeYvJisttp52aVKvcHGLkNaZ",
  "key25": "4vhonD35xt8ByHKS3JGDFkXFQjtHR9oRSQ9GyQPqnabAyxwFPtufcLfaSqZZYT4zUUPfkcjwDAzGi9ujGPFZpJih",
  "key26": "5y2uNYdCrYjkvNruWzJkk8pee9zpfGvLaLpTFC7HcHrtde63TuNmPxz1h52UmxZ5zDGtaToWVn7zQwHjZKTFvyBW",
  "key27": "3PyEUHKE2CVMLrH58pfeKQNGAsVi6i4kSPkw7Meh74CkVvNvgZvXc89mneUrH8BbEVEBYNnMaDMyhk7CxWcCZ4Gj",
  "key28": "3UYLVWQmTcdNX27z3rL31QbznfoKuBXSC9cdytvRfyN4m839u9UJUZ7dUUD95T3eouDV39D5bwXQiQbPcgRsr39R",
  "key29": "2LfahBhgsJY3Zrynn4fjh991roY9NufBrvY6RW6CddcoDiGeLCdcFvZmNwfi8HpmuiHkzSYWdt4c62MLC6L2HuLK",
  "key30": "2e2AzMnLzcMgdQjHAjSgfTngXXM1G4avPQXo916M1Ya96eYjBjmyJXLD77Mn46RKS5vEgSUNwqLAwp4nfanceSw2",
  "key31": "5pBg8ENYjsRaG8Ff2Zw9zFi9LGYSvMA3oQ7JWzeSZJMY1NUqqn7uK6ebfjRu54PJ1Pmtdwx2VAmVELpKo8RfFdtN"
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
