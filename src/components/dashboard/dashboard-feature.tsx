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
    "5KqYbVxfjjfaJxyAuncMJ382Vw7mLGpHQbzdr2w4xGNsADRqFuXMd65uytCC8MeV5ydm9mNQJM6fJsDegQr7TTVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7ah3b8FgYcXRCCzj3cVHg5iYcBkmyhi8dWV8oNuPGWZD1bR8fTGSrgcsFZxDg2EcLtfaouW9ZNdigAxFFu4cgq",
  "key1": "55VKb9r6eZcMH1nzEKJ9wKRqoHu4mqmpi1NRKKFkReBb3CgmNPBZCq4nPxQtNjseuKB8DwppUaqCwEpPT3CoQno2",
  "key2": "5b2Ye6KiU3mLqTh4r1E94cUc7RKfb4nBfg2PwUurc4HRZjdPafxo84oVwD5vLMHfqzRe3Cn2zfmkVHXPQZ2DndXB",
  "key3": "3dKjBd1Bp4uj3BU48zwFmjWn23ycT2SB7Qk6T9o6aZBdgBm75hZRuJxDCvjNEeHk3MaXuQBZRFmCTUgcC8BdAeZW",
  "key4": "3ALTKimjGjN8YsYUjAXPgzruGcbPCKQ9JMLhsutUvzDxcYJBLXsxfYGGVR8BL1LBW7gCb2wQJkF5FuXzYR7cLjdg",
  "key5": "3FBBE3FYkMDhAhzCPZhUih1EhpcCdZsyTkkTbjAKb1mCFBJuoNFB3dfUpduqQUkLUMFjWfKjbtHhcus5GtpiQYjX",
  "key6": "NxFHpzW8gNiehhbCg6HV7uD895AgUoWnsZ1hGSHidSpA3uBzenGKeoNYzQAHcv1T18kaxZCBWhcqy8iPeZrKUZs",
  "key7": "NsvZ7XviZ1idfrjQZr3s3Z4HtwqXeRsQDtkqGtWwBDakLwLvF6Dor9Pt5s3dSYZW1seHnPfGxqqfqrEeA3oGz7x",
  "key8": "3XrABLaiAXzbcrADMb8nsuYLB5TLM4Vzk9sboVvPpY2d8fi96pSJEaiHLZQkDBkfEfaqjuMBwL6PPq2cNJeiETMK",
  "key9": "5KM4EdSwAbyAsGdyydZmQK7hGP7TpG8UgaJRuCAzVsQgY1WpRGUUr148XamEDK99WvMVnDUfmyqa3gSzV8eWmK77",
  "key10": "zALh87MPeRhiW8tHzJH3fNwGC2k2UYcQdADk2YFRJkqQCu9jWscfg7aQEz8BBZRHUcJFVSPMBFgvespiRUSyMeV",
  "key11": "5ZafB3fEehYEiyhqiMDWGMM5gCyXSFvnPkosTqn5RHXQPQpz6nQmn2HkvXMoH3cGe6JfBM8G13DVJPoLLoothc5C",
  "key12": "65CrN7yv8Qk8kA31Ho8fQBbcmbssm6PUfnaStJZWyq7CsHg6m5p6sn4KaQKbkMXJptajdAPxrRdcTicBrQ1JZLSJ",
  "key13": "3bsjgiDufTj9fjraGcotFs79Huzxnjog287AE7tk9FHJ3EHZjg5ykHQZxFC5XXCv9Vm2z5ma9JEfKzpzNBNk14mh",
  "key14": "3dXe4dVRA4r7jfxwN5Rk5yF9JZRbV51APxm9TXdoNCXWnWwxprKgqur7mKq6TbEntX9DNCqYjSni4u2DLg5UaGph",
  "key15": "3abNNiZj2fKxnZzBxyQhe81oiMw9bSsCHGTGRYrWBtkTGE2PZw892dbDJ9A2HNtnm3PhXxhtXHtRTUa4aw47GTyG",
  "key16": "5QNvKevgwfFtFFQoSQpe1ynJDdPC8GXXF59zkkBh8LspyEN5VH6o3AvBm1PxKXhau7YLqiiGkrcqQW7cJxVkxgsu",
  "key17": "33VCFmS53A88cnCJys3GgXxFSNpHGcqAaBX2EJq5G6f7t6mR6E8zm6nMB6oneD2H2xZM8uXgjcAEx6jnR2mbNWxh",
  "key18": "53W3JBuJuaWrhGviQUfBGhfuo4aTg5YBGkuyGJxiKkGXuKE19PCUrVWqoNh7rQ9yEdT26CDg2bu11AnVGaF3XUZ4",
  "key19": "5MPXWAZVb7fbhmzJEXYv3ejW4dvFrUXPSEGdzRs9sejRZPx1JFiHbKAxZm6uYB8EiAaHLKsp2bPdwkxcVQ6bMkQx",
  "key20": "2U7T8pkjXW6hwJLRH8FxUDjH7TthCk88oGQHMbpUHtBH1vH1hg4Y37zE2dJr6a6ticszwuKK1ZKDhBKFDG6wSVbu",
  "key21": "2x9sS62S3W1Umi46NjccZrR2n6C6CuCshpJ2JqM7sEYBiD8GThWLxxfGfeXUFSn6mL3jNMdpWZHX56BoB9HA9dr7",
  "key22": "2NHm9f2835sg93ZobCGoKgdvXzafkXFcDShUmU2r1Mdpz4zNU44gbWdehmQa3tc2UjoqHPwXRYd1FocWxUZ9vVRQ",
  "key23": "2YMzwqMzo2oUqs4GrDe3gVQt2ABWxb8c8k6Xpw9j69q4MFQB12fVqRPopyM2n7J6RWKdFRYQtJFai1hRk2wadAch",
  "key24": "35ZhEjQq15ERVR6NrQdg8J8f7u6eSnhUvY6DRzyjSfpNbEe36EeHscVKkSBwULdfnbDA5oF3nsyNwsei5aYBawMd",
  "key25": "4V4vAHj7fBsPyPUFFxAU6KSUkMvMYWoJswRsdCjF9b9CjUKM6qTmXca6T3zGzHsq2Hpp9682376gKN2xnR4Jpaca",
  "key26": "2KSZbrUfPawBPcdwgw3A2r66z3WyQD4h5iX5vQfDWsU2Ke62mkJ9ypquGfxuuj6JEBRD9Ew3UxEFjEQtir2PDnS1",
  "key27": "29m5bzMDE6ZHnoKfwrXvzoPh17hYHXDAxy8pwNJv9dTvLHXUDWeRWnvnhetRigqzrkN6qRKBfmL8YyjN4CuJzBgt",
  "key28": "4gBVbkz6wNEr1gEbCHkVivQoNFv4RTn58HHhfteRZavyGRfZRAcj3GhkCMEcxK1VbSobq4Tmk5HEyKpLWq7MZ1Eu",
  "key29": "4SGs2sPSAje9kwSSCHeW8sTogMWgxrjykV1XEE3i6j4wd2sgjDcGvWJw2JSzZCgPafmQjmnkk6fwvJJucTQ9e35w",
  "key30": "55ceQZDUFFcNwWtLjkczsKooAmhNbroctCXabecjcfwHc3TsP3d68jBP1R3SGeNrU2sMFv4mfKWFHYMSz3rDL3cK",
  "key31": "4WuinpijX13fTTgTFqhspPz2cCLkCX5gQ2xravrt8bKTUkbbUELawpW4fapzKnENieozQb5t6fYmPJtSJhbbuYSZ",
  "key32": "fFrdKSVtcdxzb9E2RizuS6N1H9b3kEt5vPgfXTePcNGJWUr8XkP6oK6oj7kekizfM1aq4h376UFNWK5GJ6oshX5",
  "key33": "5pa1xL5tzEaao7HywrNoFQzQPuZDuWJBWfgZ6Tjc1JcbejWZG9JmFbPhWSzyoe9YfghYfQ7fmy5WCYX9RAdf3n4R",
  "key34": "2gozJFE4CdqgUfXhb183rUTCHWSsaGoAqfowJHumGLEDw5RUwYd9KbZ5tGNCjBPu4LrLEBjyiUBGZUKetBwkis6Q",
  "key35": "2Tg3ppE5eE3Ax5pD9HpgZFKFTjDQ2zVxa1FmUPSN1jNmFpSWj2qqhJwrUaHvUnvnYiEPfpchBXFi61CA5BEs8wV9",
  "key36": "JUu49gaZPVusDJo7fxh2h87SE9Kq29sBdCjpCXTSeb2rBEdL4AznSeFbGcHrJCS17fRNkPaM71paZZiqmwGpUVH",
  "key37": "otqjT87wPQ8JH4odhTZPC2ZHFzzhuHHRGaHFicv5T9TEk32DRvAywjijpCmDswHsY8hqjzLHrjj55GfjiKLGjUy",
  "key38": "5JwiZRfBxMLuunQ3p17x5npguU7Pfw4HPNbQ2P8ZiXUksGy1spD4dLQUXJGebEbHq9SBuF6kAPVYhvH62WVNdBqT",
  "key39": "2rPYgPHuQDJkkPuFAjUom82hQFqpc1cqCQCFcJPTWYciN5ju8MibQxW6BqLYYcJTdAZjA1r8BtYhfw1ZiNEghD9m",
  "key40": "5p3eybobDZ7nfYgQzNTsXxyeZZwNeks6VmZBQi3QghSDotkqeB1wccrEWQ4jQQEfnLQtVJcMFnDMK4ccTFgKjGMk",
  "key41": "35NvPuiq3fnz2Zx9SrFMQKQNstYSdFhhUczsPQGGr2scZrQSVzCa9RoB6XS7bPc79VrTE7TNj9BaSbR2SMzPYEMx",
  "key42": "4xuGNzMnqkXvkBg3VhjmqGiPbwV4QACHMgAfV6CtzgvS6L2fj1L8W45p7FdtAQvoY2WrNBhgS1aSkeKt47Dd11J7",
  "key43": "5fSB6m2zNpmvqHDqY1NAd4jvTMGYwGY3DQzLZWyLMEuAAAhxT8DjKRK89YPBax9Gv7JUT5cc33XkoFCjaxPJA5g7",
  "key44": "2Fh6awGCMdeavSbvFQHtkhMedHejGPgV7pmxXWYtDBtNVXnHbVeHsa4gEnM8r9RbP9ENtTKmoPiFeP3sMPD2PqNT",
  "key45": "32zbdhNhWVP7zXEVPyNyHx6g6tJH4ch6NyddwAvwSi8wTVpHEZVtPuYmGZy75PP9fUqryB3YM12XT8vzHYiGFa7E"
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
