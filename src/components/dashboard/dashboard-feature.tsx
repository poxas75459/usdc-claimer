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
    "3aRQSHpg2xx9oZ6es5MxLjV9ArSU5QJFMEkQqnTPTJxA5rBzNPXoBwiGixfDqn2mPs11DyGLnVGYVfsJ46HZLEzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuRQ4oF2miJaZeytik4UJVj1uqF3J95ZsUJxLRB8D4uDNzUi5iYhEdH6DPiAAbhvaVFuorafKSxVZyCDKYxh5Lq",
  "key1": "4SayjqCPRyKu9Vq2KzV6ajJPCgLd6pgaXSKkJ6ks9Pqxy9i3CMHVrfd4NBMUiRxsZxKyYpNmtE8a1jJ32fLGUqdp",
  "key2": "4NbSpQX7eiewZnA9xqawmGX9bTNsuoPARXeSbg6gKYDWw6qEoCErW4YhC7QYKBjiz2R75PgKnCqhipcMx8txhAZw",
  "key3": "3fL6i7FhCX4ZicGc2ZNEs2NpTj3J5fyjJJzUMsGKMGFddGhFEUbqFqmiMMeHPciumfhHwabW8tjQvyHnyw9SqA3i",
  "key4": "tpeKvZ5jWEiN3s8PstAcLJHzkdZv9cbENwJVZxzB8JRq8VnYor86h1qPsPkVRHUHRB4oaHAnZHEkXvHSHi3JSGF",
  "key5": "2HhMMihWPNU9Rr535yLz9wmjy1vMLeYCAXbDboRFwpb1q2SRGbDkuB5L9cCEE17RZQScUG6oVcKv1u2rX3ijT1QN",
  "key6": "4SLdsiXane9CiBajBsjvojHyViBoPjDxdjf5KdH1GP1Q33RHieYccbS7ikcHHaqLrvtbdixUPpRBWmZXFt8TwEdo",
  "key7": "3mbkzniBXKpTN3u6DyHG7tpMzMnnkJgyqtKoiYWDZi6nvHGh7DBYjCvh8q9xSnUNYPxfSa8LqBb56hBFSTVrbVm9",
  "key8": "cAM79J3zYRT2pRiaafp65CbDo2t9FfNGbtLns7qABPdcCRrekSdmZ8PtMv1NukA1B3HG55fDec3xdhh4sWEQHTS",
  "key9": "4Kzj6SPs43cB28TAkkf6ZF97YgTxKDei5wDmNrwkg43TYnDFe65mW5PupLTekYkQpJwFLvYYAaGRHEhpWTdRNNpg",
  "key10": "5U4Je5vSpdjwX6PiUnDVkHxwwbQ6KaEv7gexxjwyjVchpuXnuGc1QDACq6SJyD88ZVGh54WNuSAkLXQu6REa6ZbF",
  "key11": "LTd3mD5rf6GdNaxCRgfyvoPJrdaBfvH2KoG4oYAz1EG4SHqJFntQQGfM2JEjZ7huhWmWJgQctNAeUV6PLiezAQc",
  "key12": "54Ehv3er7SxggpifF9eppg2oRnRExk3vS6aj8SC5xYN71YkUZN4jFqioyiXoBV4MgvdYPABCsZFnfJsyY5apHRaX",
  "key13": "5o2GvFRd6LHaYViXyRvBbFcvmM3kd26pz2SMQyxDjXNo8bbAckWn3uisojEwbdSCvL5nBq6S18DZSSpBpmYcPE24",
  "key14": "5zNprWCNQmz7hquJDCeenL3VqaaNpQeWH8mAifjM6h2JhgepMJ6jgkXCt7MLGvBtR69HrDtacdi7SUtfb2Nje9ig",
  "key15": "2GGwZwicCXr8NKmvfTkR2UmM1xH1o2CfwYDSFHXrMM6HtsusddvuV23WY4abHQPv8rXuG3ctJpD59rMZeQXtry5y",
  "key16": "4Hr5hrCcBzN8o1FrVv6HtfJCw9gSjYuKYGPFTgWFA9yxy1qY9TiAJvL616Ar6MsrNux5TcCEpu1t7svvopxmtxhW",
  "key17": "2uoqBEefdHPd5SMbHSovK4HdR1juoHK6Lz5eBAXPoFm5iLVjp5uk21tFR1ATBpWfP4QmvvMdQ4mzQUAwjL4nCY1v",
  "key18": "2ryZx9UzduN4sixE7uevCPjy8B9RCbawxLU4hqm1RXnCzM1SEQeyqec79oX8AdEDFJzeCQ26PkAyzD1xjz7z3fDP",
  "key19": "27uJfGFTTyHtpK8Ag7DrRmbFkt7WKAjhhB8z8MHeRpkxL2xJ3mHy5E5q2AcgeiTK5D5drnhy7soiL5dhMzavoZ1k",
  "key20": "4iSPhKnDRT7WPxe9kGo9R7swk6JdUvBVYFAa7ei8HqhARadxCfzCrU3xN6hDCnHvmUTJQZJVEasYdYsqkKpvuEmv",
  "key21": "2pajeJcJ2pLWanoMkv4ZPGPWyxuDXtmG1Mb3ZGYXr7r5kNGshDtoUjRRL3RXqEjFTyAwxpH7ySDPPyJr6T3yNTXM",
  "key22": "EigEanEyXGp2FZiHjyyZmF753NqAwxfKd6XQxB7wHLdRWSMNocJRFgYaFY6SgWW6wmTEuAGQKpRfckHvoRJM6Gk",
  "key23": "3JKXDKV6uSzKXWDXazbdh8hENVoh5VJ8P6jXJUGxg3fgyz627t29xKKCckhnqWuEavGKfJ2Wy5WJE41jGH9ET8Tr",
  "key24": "23r8sWvxHdNzhSZBG3bec7XMrqiiXtodUAYDoVBxnG3fLwVTu3MWaNQHPnssxAfuweAh3EhY9GT3iJa1bdVxzh6z",
  "key25": "2xRipLheDSDGGDLytSmWafcdhVfJEk7Hut5Nz3E5MxcHcqy6VEmXcxb2e8PCsXsoRKvYJxiFMw73XThweVcgzY6U",
  "key26": "2wMmeDGJ1HGMHYhCujdtx6YZcAtVyHiKGBgrP7ix6uvUkKKiqoPS6eJcDvtCq5DNi6d9prwWnKQo4PPaTJLToLRo",
  "key27": "53qTWDZf52tWNwwNFyoMC7vJ6VeezqdH7vwDYm5w2BuiniBSc4mM8cgGP4TNcwxccnJP5BXMHMKGZ1etaTuc7CgC",
  "key28": "62cngJUCqtzNJy4YCjMHEZcdN71uY86zqagUyknmf6ZaEntGdknZoGVev51wULWpSFuqGvr5ZrR9ST7gm2yKcWzT",
  "key29": "h1FGMAQkcurvhRq8M72NWuCm1toTmjNB2ghyp4CBEiLWdNCz8DurVRdWdujreXBW5VGJKg7HTC3ScFEbM1QBA3w",
  "key30": "4DR8de4Xu4BCNLJkf8VptyczUg3VNUmCq6K5KwXMVauTxWTTvV7GCDz65rW3mhkVKJV51Kp4KYkCiCPiDjGe7QGQ",
  "key31": "2K8QqvHC4NFc7EZAwB3C1LCfcBr2A7vyXvXkyk8FuetCmJPiXjfhZofhhTyP1xEbdae8u1or8xzzmf1nrT4q6eov",
  "key32": "4zt4miZ8f9PrP8mBozFpWCVybJn5QocPMm7HnnHqMADVgCq4AVKarsBuUrDvCpioLPufwKUVRk8DxzGgPdLTfKud",
  "key33": "1keddy4gekD5p4K5WiG7JcqCVuLH9J32VVTibt4RjKYVHF53oWvQmG6S8hEc9zH3p9FQ5NaRScgXSC9fykn4kgL",
  "key34": "5YtoxhH27GN6YG7BqPqXmrAtSmzCQ98EAkPZ34vbNzLWazQB2cGkGUjmS4AzhKuyUsMbcLqYmqfY4F2iu4C496D1",
  "key35": "4tKoq2JF3q3W8HUNNHFnjH27RyLHE31MK9vz3oGzU6C1XPCSLbBiBm63LJnve62wXFPoCj45Rz7EdPf6c3ndCDfM",
  "key36": "5AzcBasNAgEqcTpm7EEyFKHFGZBv6u6kLxwcRip6fdSDBQMUJfHnRDC6HMeWV4KkHiyQHQXeCADX1JMW6d2gsMSg",
  "key37": "2ntYxfh41cMUWPfnczHyswcmscpJqVzPC13cpjniDcnzRT397Us2pyqcjc4KPUD42qTwKNPGQK3ADGPyDaxyMdnF",
  "key38": "fRnmMFM4gakjfQUvLMitCBYAoXB3srYs8kBWtN2SQvoT5K8PmJo5kkRcHeVL3mpoYn4nmBK8J2Xg5Pe6CDFbhdf",
  "key39": "HqaRX8ZEEToH8EQEj5La1UNJbU1EBiBqkEq8GNTMS2au9xg74mttLj45s4hT4jQbU1b3ZhMYNFW7HTRMqRDheCz",
  "key40": "51HJMYho4eXuznpnLJa3pWq5ry6uozgrjtDQdGh2K6jsv1SgyKxUgZ4nsUGASzUhRgTMSkXvLKKv4dPtHrcnwJBD",
  "key41": "28Lk7LJewrrxC3NqRrjttp2zCJUicAxigz1FARie29U76cC8RzgjEQ8Uhk6t11SWAvdGt9q3ADjG5B69UVbCqGgX",
  "key42": "48LhZC6gj4zetueKgqoks2Bi5pcxFnTt9Q3rbFWVL33KopTux5YAtxYVUTCcMLrHd6fAS3hBARycGfm1zW7nS8iR",
  "key43": "2WY1VHFthEsyrvQxoomQbxPTLJhTPXapyx12e2VAKPw9SQHnkurfmX9SH513oKWHZMje3gjT6NXYRGp2pXKQBjXx",
  "key44": "FUBHLsQm7hr7hPNZVgvn7DXYKBfg2f7yjN1PcZXiScAw8ac6NKuw13oUugzVgyMdPyZLda47ZB95d7YPnEZTtVz",
  "key45": "wFTd7DgeXJxKeDLffUucN6ZhZe9Z8NDsj4hdXjELhbfu9y4vWs5rQ2NDJ7UtM7jFtSfvB445aDZqn3EMKtfVbFo"
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
