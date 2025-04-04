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
    "2xQToHEzKKWGuV9ZYMLD1MW79ak5xCVGL4L2AT5YtfRbojaBxzG6ghjkeVTQnjcWjPNaz5dMYaQdnnhkzKx3aNaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjJAKtHRjXBXr9QHgLASrZdxejnFj5VCTBBzzmVxuPue8sfZ1Xzi7P3tFYzJNiHXDBF5ZUtpo4xhh1ygtrbiKyZ",
  "key1": "5L2LcYQzev2ZFhUGpcKWufJRrE1MDPwjRnwMVP2xHKrCfGsfc4d5PTqgdz5PQLHAMvxD3qFHvNwoHz4tTh9cwhvM",
  "key2": "3PKtE3DHiinZVnLYruphwmHXY2isq9vKE3jp3obmmwqjbHeedLewmrix6VnJSqyRkxmbcrZKobWTFKiXmodYfnsk",
  "key3": "4y3Kh71BPG3pi9qfadg3fr4gPJLAyR1z8sM9MC6Dc3j7yVjxC5byRWVYKBVnPiG9FAvrJsvmLoqdzC6fcfPdch2m",
  "key4": "5svMHoQgGuRy7heuZTqDjVk1s5wjVKDHEu6k6rHcKJ7zPcABW9mwHFqa8NeVvC1GS1fdSUxWJh2nZKVmXfJXENGg",
  "key5": "wdH1DJXeEPC1LtiAqUmnPSZJkdXnsczAMpUzb5i7wGz4o9kak3EphVy89YpoE5asRv7HLLwQ9FmcL6cUZ7SB3oN",
  "key6": "5aSVxmbyQDntHfUsHS1MSWfY1D9WbVApAvRbusYJxD5ax8kAssG9MEfzYzuxCqpkJ2EoVJt79X5yGQocHdu4FrHk",
  "key7": "5K9NR48nkQHoAoqAAwAsSTRhW1XqqC8KDrZHAYJwpKJ4JRrQVZpQmhF2rxgNmAUVJVVdEwTAqHNvnbZ3pGN6dpwx",
  "key8": "4FMKbZCfTQfmCJxdBjWRQzVt7yqSQVHSCucPFw7mVoBjFkMpfV3zoud8hiJ4RtJcMuuXd6VLRprBLm4agAJSZzh7",
  "key9": "2i3k1CrjjXJbFtzxdBEqgKHb2WW3wZddLqzDBA3UmLmXKC4s2XebuKfj18JMfzWjbYotVYFroCECrVfTqkqCQnLQ",
  "key10": "5TmSjvQp1UkhGDB9GAEHTAVj1uTL6kBYipKcCk919MD3aCijpTZ2yFsErQ6tzydpAwVL7Sgy8SKMPyJUBN8WHGEc",
  "key11": "5ZmXBZRKkjVKEWuKRuQcXi4PuKDcTiKtd4ncbdrWTF7nQuy9xcCeZAqenLV1bLrVKSaW1vtsw9K6NjdsT9LGCmd6",
  "key12": "39DHnQuAzbtuLTBiMPKTbABTHLHV5oEbEvvsy2M9jXptqvsFu97zC3ik8CXWcxP9sXz2M5MjwcgrizAyXMKL3eo7",
  "key13": "2JWvwqDbZjNoGCZbNSvxCzNRPwMQ9PoT7vapWd9DtTXrMU45zxEzzp8jypeuRFiSRbgyFD3XW8dmNbnNsfukT6z3",
  "key14": "Ybk6K1SkJdDKJTx4cYM6cX2hXHQSXQJmqufiat8wtGhothmHocXatYJs7y87YpDe3FtzmALPqfMzY5MaApELz6T",
  "key15": "5DCSFSTxVyehUQsA1Gs4UdqPGdbseoKP9HfP2HR8TzXo5bWYczfGDtpXjgJ5JjHZKLj8nGtK13Vhp8v8gyL4658w",
  "key16": "3L5r5BiTtEatJCzdcySAqPcebh7TRBKCeGf13tDR1g1W2MEJS3VnLByTnADi1A7K7AoXEnn7QrVBjVmesUSmDjCj",
  "key17": "2FLKFVQdAAmdCvG3RnFsVfRtC4rdy5rUjoDSNtbrArt2gCxCVoT6z8YPcVhCQaodu7uQNDQZNAc6RjWn7g8X7zR9",
  "key18": "3ppGBvDKVYb1fUQnqjejfPPJpKG2Mmg68nm2qayC1qWwDSiq7BB6k58C5TurpRUVeyAxBvWqx1CXwa4vuzUTrwqQ",
  "key19": "4JcY6HJauiNGTPEtLmr8M517CWWPEjL97hmZW932AhXoHTusx8WdToACkJC2hMsuPdt5onsamhC3CUh4uTMxfyTW",
  "key20": "4F3WFeHmu5C5a1prmd6bis59mrNNSJ3LkUuhWdHB1hXB6AaDcH51EhCsy7i8WzivFAZThJPsdQH9QgJjgwP5YKsz",
  "key21": "5kEBznDzXXp1girmywczajTg5Nb8KYfCtav88t6wbMTSX3zjfDgRUrjBotTstoP9jmEoLHwF9rXwM8uboJur5mMa",
  "key22": "5Z7LMa63u2JRw1PVxS4GMpJh62aEno32tvHCKzCfmaJ6SXxp1Y3GMiKubrjPdvrGaGF5oeybvDKiYRNG6tMnZDev",
  "key23": "3wf5F2jPobS5MjkcUHq1AMQU2VfW5R8em8iYDHxuRMj1dQLo5KPiLSXCCmaKfcdobmpCxdXig7YpvgytBjLJmb95",
  "key24": "41BowudQQAtyz6FUPXrsU6ndv7PxU4x7Kpxb74ZayvEYSJdTsQBFuJwDxjXWNGd4m3dGPXyS4YEE8CYBAmVNCQcd",
  "key25": "5prPcphKiCo1UVYfeeLiudYoWFzbdJigTZYbbQCFeZsJqPQRDynVxCkkqAQMbCJunjxQdH84qNXJqzkpYfAh15si",
  "key26": "qnCjvDaxJgpbR6qQbyWJ58Rzh3jqnnpBgz3ykenhodNkwbRiaCtoQYfnKP8aBPnNCGcCr7eZCZMYW6GtTtTfZPa",
  "key27": "2nAgd1myczkxoPURy4ueSbqUNhCEK4nP4Zgz8aWAqKNpLnPbPy7PKvfFveRQEFmM3dMpC4f1UDvV2QmYWacx49XQ",
  "key28": "41w8WLmfoRpKSBmUo9MvFLtwjZhvuzYMXFrLCjPW8YwUi4zoJtsz9sHTMr4zgySFJPm6v1Ef4bRa1DLz4FPvv9nN",
  "key29": "2cNBYzCAckcgNnuBidfaXfQDZ4azgaBRkCsHm8Ybu26W7fG7dSPkFt6T5q5FJAehaHKD7DD5Psjk2BHGSNMsqVdR",
  "key30": "67kdjwPR7NWEUr4RW7JqR9brU1suycedxj669QwKn3ptpkx9kzin9rFvYVFegXaWT7giJWC8vPL5bNG4xwUwff9U",
  "key31": "nMX3KrFbCAvGixdMLex5xWCdKQ8W7rutTqCKjmEdkikWMe4HjH2j1SC4nQQbqV9dtyNs4iYC7g1trYJR2tHMKJZ",
  "key32": "3fGpfPUdsZvwGFx49hSDGwdBv1i8m8yP7DBsLXTVd6cGHrDV9BPyHVhAdLxSx7HUC68hL47j2hjfdtBZNX5EAmfZ",
  "key33": "2SxhQwaP5dYAU6FtivX6apCtR9u6TNh9mmkgcGgMB73nccg3ZMjB8Dz3C2cVvxf7bRhceXkGaWDSDmA27Lo8gzD7",
  "key34": "GLqQ4K2ERdfF1ote7Be4dXNe9ifeB2UJaU77YDWgnFR5Jwx3ch2gBwrwRdYy8jBX871ouryeVkrCMkYSkEPHBb4",
  "key35": "4DNchXWqQCz7zE6nz33sAjoADWf7uskwdYCBMUUUP9hpT3bQoG3tSvBbzs16waruocWpBBbfEKSRpH6U9yzEyZrs",
  "key36": "4c1uyxsUMjatv3taX9WHgSXEza1MWCRbduUZ5e8zTEsHJ5Sc7assVcnoiLhreWighT96srbX6TsRfdx7AV6KqRqW",
  "key37": "31HvuRrSrN2Z7BV87RXQhXCG2xk83PWR44ZUvpQxDr7ezuPQLafPmXAeMy7JZwv3SuDS2Q8pgpmnSF8bafH9coyK",
  "key38": "hNg8HsNbzJBGqnU23kjhSGY5b5JfwG6GJB7NSntKDNPQt46qWuYkVHskP3ZacvLY9NHbNnGW5sM3FcksjuZ8bgi"
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
