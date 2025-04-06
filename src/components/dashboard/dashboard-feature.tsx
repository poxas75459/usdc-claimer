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
    "5obnZnuqEuKWsRt6agtnyBr1aGjfRpXAPP2hsUz38qdnzSmYgXFnVh2JCqBcYUBjvV5RgoedotFsyvC9HCoyLSTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZqVKh4hhLBrpNvzL8BujLd9ciWJdJxy5QwkNUaTmpeXj94S28LJ8Q5dLawbVJ2R6kHeJP3ifhponZX6GYMjfyw",
  "key1": "2Yhge1goQzgvZt1cbKFwumx8XBHev95CasUG2EujG8Ekcvo2BX33R1rYLTuDz15P3HmJnfAcfDqr7c1ZgsZtMAt3",
  "key2": "3afqr1H69maVkCnGKVkGg4tYpxVSH9BfjhSijY658P1GjTuMbLt3Hgqr4JMoLnKW8YNCgCVxpwC2SgEG89w9Yzrq",
  "key3": "36pjE97dN6i4Kk4uwHtC1HoQcViV4duxNEXqK8gKmmrXqqqiaVAqTjuMg6pSd7yYFPM93hbnZNRx7XDegJ6xY8Tk",
  "key4": "wc9JLRKRTVKv7FLLogYFgraLKsbX7d19KCQXoMRZ4cZQUcbFQdbdM4q3KEcRTYKLiMMnf53upon3EbQiQCrP6o3",
  "key5": "5bFmwDEktd7wY5Zx2zPEwbRd6Fndz5xG9rPqbaPWkr4YR1nmFTBAV11yWAy2tgBVxLgFH9nrsxjXjWzHR9zdyaiR",
  "key6": "41duQBvjhef11nrL7KKGVqjsWRAZUBqjffzXjHZUcrkmdHUAyt9r3T19W3wcjNidDKKVH5JzWrduxH7Cf7ZYvzmG",
  "key7": "3t5qhAQF94xBE9jwtvQFHBfVWs1FYudLR9rgyX615BzicdFV5BuDpTh6hMjiYigMUQPjcEuaogaYTZUHGzBXS4h3",
  "key8": "67r7uvGZxRDxkevxDTUGABfTJ2hNNAhP3wNRNk1VoHSUNunaycj1wqsZz9kqbMtmGSYjVvpi8TseQCGWsMNhvVjD",
  "key9": "iAMnxAMKq9gp9gm99WLVtiNLb5m6yBuffWCGzMpexmPjoCyMyBdcdQwzkTYYceXhy4CVxDrLzfxrvbYzmJR7pvZ",
  "key10": "4GL6Hfe9USBJ9HVoLH64HYefd8f5vFeAkWHizosPe961hGx2XeYyKjJ97rmN6Lni4Jznz2vDjFAK3ama5Q5a4uWY",
  "key11": "2JZJGMnNGs9woGPkJArMmCg3NwH8Xk5SeBzXLWb3gC5f86KLWCAvVVLUA1MAuKq643zoVq8HAkm1SrkrLr6og2hv",
  "key12": "3xNXkBxwfJhqQoBJ7rfUrshxdqLr637r3UoPesimfjSgXYSu5b8km3wKWSjmgARKmasKMMPq793QHmjYMFpCWCDV",
  "key13": "5ELR3u42aLYBZB8AEkwKsgKs8U5Mk1ix3WcotLyDtRfDTyrYf2ex5YMD5LNKN1J9n8qVFFfgXEJByah6TuXp7ZDk",
  "key14": "5cd4LcGLyNYxqNFxUfgquDaTASBCsoabscD7oC5mx6t6tHyfCZAP4JTwE6WheNkFzydownrFYf3x1Y3qK8Ed44oM",
  "key15": "Uvw3gka3Cd7krXoYNaVkkkKPP9to8s7UpYkB2fiJziCGcMp9k1nTVr7AaWGzEU4HG1t6gVpe2odD5TwacY2aXki",
  "key16": "rjjZ3spp5XREoV5e5s8gmWoDMXSuTkeEeh5gx2TshjNqr8tNpvDMmGDou9ZjouuGtWqYbu6GuKMoTiBEPVpAGEf",
  "key17": "5ax4GiYRSjyywBpz41jzM5nc6czpWXzbbKKB3dp86tAJRe5zXj761wxiYfcmNdCQv9ZDYj2Jt7H54bBtFQ915MLB",
  "key18": "2AZq6wd6LZQhc9QWcMCQHjViTfQuWcJ5Zcv1G1eQodknETsNKcHdj5PPLnQERzUrFFfynXWfMoHQ3dzXWmmgniwZ",
  "key19": "3Wc2EGsnAe3aVYfFWhTPGn8MjP1P43pR2Dkof3aeTjKXRoAbAuQqcTBApGv7Gpr8SJzJpWNTb9TzQRsRYVEWnTCX",
  "key20": "2EXKCaAkHhsMQS1bZPJXphb5aAMM1bHAWSza6YB6b8rhdzVEk9rsDRRwi3V7bVbKQ78E1fG5dpuqPQ4jx2fnTbS2",
  "key21": "4rp9BB6eANn7NhxhY4nYgKJDbGxfHAZwcZVS5jA6Vb3TMJbic8q1UX32ji1UbsLqMB3HBhBiXHTAZrESJMHJ2qUH",
  "key22": "2RwrkmQ7vHdWZp4NQ5zzZitVxP4m8LpJ7EM5FsQsYMdm7fNBXUoriCn81DxP8ALzyeejva1iggUXSAWFWXZ81YjY",
  "key23": "2JTMDToRddnZoggxZ1dC5HuHi3HCQZGBf9eFb5Np1sRhCRhADNafSwAJzJMxHELnzUCAgsZhLd1PFy8DPMawsgCQ",
  "key24": "3wmA4qiKA6U4ypnzmCTqj99KF4hueVJ4ZWBPzeWCHi9ZQRSKTSzoBHGdGtuMmCx2E3wi4iukSZw7d5kpqmUc2y3E"
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
