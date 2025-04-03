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
    "ttEDSxQmUwXZaGUMERTVjr38rpa93CfN1EgpshEugeuvLSUivDxHkMBqNFEc5YD9JbPQzBkrpDKQjX8kZ39kKBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5EFLfZrz7yCMJERV6bbAjJD7dMYzPVkPbVTWHYRfcerpXswWJTCfyhnC52yJkUY2woQdkoEZ4aDkDfUqUWn1M7",
  "key1": "3t1ZuQrJXsfn7ZV1fAWCjqVCFh9PapNkGQ3UQUpeuJ6yGfJ8MHXezmavcE5XYse77mzUd95UTopbnn4PpGc7zwUW",
  "key2": "cQct8teQtvQq2txHtFbtUpmuUf5gR1rL6xNrfo2a8QX75m5r6eumPVkWMYt6Nvjy1pGEe1FvNjkMPzKKeRtk21x",
  "key3": "4AkErP8z9dUhTNgkzjXnkJrpTuQLpvkYBWq9puqy6DzXachmtH2Z7rsmC8f726Gh2UESRPcn8t1eX2PnY2aK6EXo",
  "key4": "3AdNeb7fj1x6VG7BoXgZgeNY2NXMyvoe9JonKr8W1BM3CG8BSNZNKzcMyEfWh9muXLU76aQ5EDCaa6Jx8oXgrNF8",
  "key5": "2eqVkfVq9ULAzeyDTx8ajdoSuo5RvDvFVaa8c5rMmbHMGgcLd1UboJEX5fiwhg7DXuNK5YmLtY8Z998hKJH1ZxQ7",
  "key6": "3PQYbcurWWrVRc7McMiphvimXrkKQ4DK5GD2QnJxSrvyzVBwYGBmAs8TSwCJqNorwKGBpLYoyf92BTw2Tf1pBXxP",
  "key7": "KL6u1DFo65qDxFc2RkNnpquZ7UvMpjoQNNVv9PEXTqGv7pxRiaWyMHxNevVWT3DBwpBuxCiQSvLCZKBFBEgr7DM",
  "key8": "28f73iHoapy4ADGXqNdypMLtvKz6FXy5rDYNLQzDeJZbG1Gibm7Mu595bf3ttEzDhw6iA5HVR5Lfm68WUfCtBrm8",
  "key9": "4rYEYs4EU2moYwDRUJYQYLbe1mFedutWRhQLVT75X9nq8P71BQ6eNYogtm8Z31dftcXeUv2cNLBM3YPhYV5JMKH1",
  "key10": "5wurjGZ4QxvThqF8McVqpSufXTLuiMH3LrYz7brLoQ7r3NuRF6gRrRY7SfcyN7ywvoLLT1hPypYQ71KpsDmEKQZB",
  "key11": "khAgyry7sDBwYqjL7g9jFX5yu67fqnjFcVwBzjL8TwG6ovoWN5DSE6qsS89pwaJghhPb7VptD46C7Q5R8rwUFEj",
  "key12": "vVHg7fF6X38QukqF3HyovYcSmxnQoUzjrz5EhtEARv86CpPu8vyDu1ysmMW2whUcJGRFLDGfaKaBq9E4srvgRzF",
  "key13": "5nRL6EyC57HJTwjepsaJnKCcZioXjNfGtGm1PZPUL6VvFNsSfhVGA2eiA3ShirgZz8GfgwL5oxK9AKPVpy4CMsq7",
  "key14": "4sXMFkDBeUNrDAjx6yR8LnaTU214MhHNfjPpfpJYCwR48APs7LhNfvwM9RVR3ambyhyJQVEZBf4GkwKHnyzLGGkf",
  "key15": "4K543Mgx5MZDZrogFWkMK8QpMwYoVj5ZjZ78ivJepShsXE5zv3DPuhWq35JbHhWzJ5naT5HJuFXzsfn7xYWDEzmj",
  "key16": "mPWzi5CMQ78qySG1qSvvnBSKRzzh2hbvfUi5wdoR6ELiQRbY37iH1zqcUUrfAT2qbvuzJfC2b2FmDD8oFkARgr9",
  "key17": "4PGiuxqSbEZaghWkVbwCvaeDDay3KVrMgqtckzVmp2xMu2bpKEBLgTGYsm2fbb4bitCDzbohcVZCAq7XJhJ85B3P",
  "key18": "3NHMbT21JwrF6k6EogEuLjFZ6xMUg5sdRd44uBrffKGERqUBRokBf8XYrtbrAe9YxJJqgvMTxV9jgdGmn8743VY6",
  "key19": "2QF3fi76E21ToEtcHcHsnfGk2ZGdiKP9xp7dFNqSqHJMg6FxTPtSyfMfevtUNGwbNw1QDd4nBuxzixncvx62zxA9",
  "key20": "4RmTJ9RCPaoorhNgDpLVnZAURHeWU8gPQZbRJpgMSKhZkzF8AYkG9XPvfMkJ2ygbhV5NJ34VdAEP5Go7UpPxk2wY",
  "key21": "2f3YmJDEuDFhL6ARMG8AyBCoNE53pNbcXQhadxZDJ5zqxwgkjzyLd3qSwfmAtqop6TQWZF65updwQfgSn15JqcKV",
  "key22": "5jCX9iUEgyvin55gi7pN79migJQck1uanbFeYkvgHm9BiEk7LGaCtePGZmVUP5fytycSTS3KVY9X7RXbueyVwn9F",
  "key23": "5E7MFvtm1RMCDyVNitVddSwK3yRPAxpKzqnYSA4yt3AVsPFf4V1ujUaaKdXv1o8g37QXNaGzRRwwuPKfvN34mJD2",
  "key24": "42UtrRmhy7SHyVuZ42B8X7HtLh3N42dUKVsQAEn4RnHZBWWDPPNnB76acAsh8JybxPEu2zr6wZ1nowkG1kaG6v71",
  "key25": "5TXbwn5NE2t6sMZXe3XBgFie7UCFjpN5Qh165HcELaefk6J4TPAajdSTz33q98Dx35Rx7EhCyUkA221DGxkjwZTA",
  "key26": "2WC4Q2RktJqT1egT6qg47LxFS5K5sru53AH1ZHpw4ehPzCZd2AL9snygeSU1g7JTEnBxaCxRF9GCKX5kV6mAL8be",
  "key27": "38M1Yvikv8X5Uc4LmAjd8pU4ddxFZfBfQaPwAMzAKguQbHRun42JCzts8RKZ2wY2Ak5dXSuD1bL9hZRCx9zikmLz",
  "key28": "DihKupXHbpABMwLxdXpSrj3MFH8ktsrzYJZgnUTtUcUQndtMpTn8fiLydWgpNTVzEmyMzKF3H98LH7k1k395Lz6",
  "key29": "2ZPpjEcrq3j3vtw6nJpmqHSfSAVtv4JdPavoVD6EmNV5wrxL2xFeJLBWBEbU8rM1osSR5qb9Tqs6RHemNPYGhGym",
  "key30": "cA81TKYiGvEt3QXJs2vx3ueYhgaHjquUciN6VdQgwEfMDB13YKeKoFkKWV7gMZiZCDC6h1D6Fzf4dwt8FwbJvPV",
  "key31": "3aF3eGtoy6pqt3hMDSpyCAQB4kshoGN8y19TG6mjd8GZR2x28aifEhXJ4TL3hJn1P1AJ5gV8gWJ7c686MBqZMrXJ",
  "key32": "28cpAusRqjjnZhoYftCrXEjiy7QZ38fGz2CEgpmi9qtd6v66VgLLr9wmXBhumFxJLNWJbWExErWQvcnPozyRzzYG",
  "key33": "5C5UtJ8tPonvPcmsmZuxGXuvCaiXNg9eBouy2Be7b7HSuNv1bSJQcDwFqKxyMGwEr9WrYyWRRtrD7QiUYb9UZv6r",
  "key34": "3JNCUi6FAciXRn7Wjsqha5siuJFjKScMaD9uVTgELkFhtJcp9R1nJuqM8LRHJJwgKzyfh9uv9kzS9QbwxvVXxu4x",
  "key35": "wipBeXbfWD2WbuKYokvxNGCo9o2h7Ji3FA1nQxKtULvmYKgDeqgK4gh9SuVqr46NbC4cxNYaPcxwCwFpAVPtCAD",
  "key36": "2TSzqTPe91DYdZYLW64iEL6dHrtHoZRutkJTVfmJinHRyaFWrRWMt18VxJYR9HJFNkzZJQRHABRMJBCUupEBSDa1",
  "key37": "5kKuyi5zYfAoxPRgL7WwdYiHs68AMKoJ4ncPYQDL7hiE7o5J6s9hvXJZEdY54mAcuVbXJnyzvFkJ9Nqvk3jxY7cJ",
  "key38": "28FJQ8vwsg4T8Tuy3CfwFVELMz252rFPWqkvs3iyGL8Q2xYaisAJg1oWsDGfTRo4nr3dTGqC6N2tV5Z8AE6YSe2i",
  "key39": "5ES4MmC7TLFtUDgp19dcAQHi8nFhCNxGdAGcdPz7gACChCdEDHBgoAy34fY6nrzZJprpcZA5a2VCZtSJt6XWgCy5",
  "key40": "3WftN9v4WBksZj7RHA1aNRB8EqX8EtxKCyQPiBrwy8iw1TD3U85qat4QVzNqYgyXQbCwKi4HZ7tKjYQtXGC1xPUr"
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
