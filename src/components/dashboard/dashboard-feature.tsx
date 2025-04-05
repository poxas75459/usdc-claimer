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
    "5xnscWQdnTbS26fT3NXrJKsGA9o4Vi4kGSxEaW9W9edsU9uTKPDAd2WWuzvjBG8aCubqW18fzxS6KCTE2fZmfxS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJsjPYAkDc71cftXBGVB1DjZDHjeRFSsxCrZVo1iSnhiJMd5aiqwMWkdjHMdo6V8z5CuMvfsdekC4dY5BSiL9q2",
  "key1": "D9NGEKXF1hhoqmivptRK9TJD19j1mz1eVy9Niz1LrQFZVfzhPvLv5TFCvsHUrJsPyuSuM6SQwnTmRsdDp44hJcE",
  "key2": "2eQZtHgh1aeGC9o5ztoeBiAbPUaWznNYgKbAkLsDn7LFWztzTFP1irPoFqGkBeDArWVKkcrSaAwdJSJsQdeVr33Y",
  "key3": "4aEBjX8PD66qMYhZyr11BS4YPDALmPq7LSokviTRrAjyTtH9oGdCLPMbpCLmUbXHYTnNTEeRvV6opaduKEMvtAbm",
  "key4": "41NPWR5ngs8rKLCTQ4ZEDrmndcen29vrEhkhku5U6B9m9h6qzHXKzUsn35pXA979PVDW2TVq4Dou2Yr4A2a8HCp5",
  "key5": "21ncA2nqD1TsivEaKWX6q8ZR13DuSwSje1Q8VzVajLoywfJPQ3KpsrYtgSoSBLbrZw4R2WsfSQEc6nC5W6XEFEKc",
  "key6": "4RfxLNR7iwutQ1zBNJ8uRofhwjUok8WPULSGsE52gCPF4MMpHX8SKQ4W9bjGnCDM39VLmYk5bGejSQXtbux8Hsra",
  "key7": "4R6nm1YbS3TB2TM28xRLtSSHTpV6EoVzvExTxrHwqonDyqvzp7bHT1gN5S4KUm421ZhVoB8smcocNXPo9RTjur5T",
  "key8": "4SRT43xuo1SnMC5W3gqEovYUVm9FHTHrABCHnRVHfQhZQSPMw21jcSSBEhwXzqwbwz5H1KGwVPYVQxKfDxmQ7Xwc",
  "key9": "U5K6QWpS3JvVpX9jgd4RHWUZY5sU2JouDM4AEjKYG2CucQ8tMs4NchZr3t2Hr7Wa527k376Q6F5pWzKjRY8PvXC",
  "key10": "2vtoF1NYf8eCXbzfECqr1BA8ddqA14dYQ67cVSUWCS9rRextgmUU5kaQWBewXa3WJmt94mghqdoiYCVwsVPXMM4d",
  "key11": "4bBBEjbo5aFvf2wdthATqvxWAe6i3Qo5r6jekFVVSKv9kUj4MW99PoQ1v2gV7pLhAjqgD8v2hzLfEF5JLWp7cCLy",
  "key12": "3DgHACTA1wX7y2DmtqoiXtZ6Atc5z1qAFsZRkZcq7DjvWU9nPZPVUhwFv4Uo9pzEanHXtAUcji4ZRRWsfRYoFf25",
  "key13": "2AwqVnZ2FTLco94irju8WuSXHyFh9LKwhzYDCTFJeTAAFWj212CGcvLADuQgkuciWUMmKWPqo76EZ39A8Dp4bpNk",
  "key14": "5B81Zm9jJWEhzPP4hHoCsJPdPbrFS9YkNeGhZUxx7B7cPsvd1sfSdfjzRu8mm1eUHxkQaJTpiajNqiCpvCeYgF1z",
  "key15": "4WC4fFGAaLVZmgfyL3Xr6fS4kf6iiF5vCu8nyeBPK9qNuM7e4FfYdRaZjq5VepMS2Gh3CHQwzQgKWQWjj2CbuVvV",
  "key16": "5iijBkeBrCF1MUomLEbERsRSUN5dT4yUVbFiu3pMRV9kt9KmJYKCv2PevY8F9DaqGMTTAh8hzbwwYTUrA5rZN9AT",
  "key17": "4eVrz7BECdrnxhm8pzoPszDQDvyMRnBm3ggZkcgLYsZa3WQN6Jw2fyoMzYseZ88g2q9SZ7JR7EXDC99DpanA8DuB",
  "key18": "4Kh5CdbBZriXRmLSkKW7kRq4gqDiz4BbN3gj4AhZExStEXrdvDaf4GbfCcj5g316HDaovmuTi22J6ZxWRe7rmXZX",
  "key19": "5dVHHXmyAcCZUfxeVWMSemrSU5GBepgMspFSz4UTyW2p2ir29LAkGgpn7pV9RhnAtRKExRZxvupZHMjjyChCfc8F",
  "key20": "p5Qyv8ZkJ4xAPijjyL2AXTMo8wMMqJvXdrYvD4uXUfpBW9mzUuZBLyUDv6hn19y7na5o1xnNQzsdyCphFiKnDbS",
  "key21": "2AnNuyhuSAWdCgqEM4eHhwir8iJhAwionLSRZpz8iT6ukNDyiXfKi3VvhJGzuoFq2JzpyP4pyZh3r7T2QrVnijkC",
  "key22": "4zfVCeTiBzjs7gvfkAdcRmBUZ4oXCNsyjB8WVmEf5eLDZehqx2MfTmPcGkheaLG4oYg9tUkZ5AqGqb8F3Bi1Qpu8",
  "key23": "2LkjXpL34X9UK9DL3B45LzRqW2CduXALyXUxPuRFMpG45G3SuZqjPvUio3uV29jZq9g5Kjk6tRkRHzap1Gg7DRPi",
  "key24": "3z2cMhjrq6togiHN2SM1L4sLAJQcvEP4ASNzdqwsXZoXZ8Xoip7HoeLJvsREahA1xmXD8AV19Nz7wAviGRQGKrmb",
  "key25": "1iGraeSyANkprUoQ2CnXuXxkCPrTK8chJWrF8anUfdJoxKiTTc76gpNSM4DKuBudLCWnmc4znN48qLR2CDniXVv",
  "key26": "2xcbVvdBGmA57shSRNQFm9PkCnzoZhzYdELSrQ4xyz8f75CtxYAKgyu8yQ9YS3nA65gETufzSZSxYcajA3HEarVh",
  "key27": "2PSMo5QGF3Pua1scZfTfn8QxEfrwS8EyGpoHCTo5MUH37sw7zAJAdZmw2MN9EqVDaExbgmDQv6Lu541q7g64pqyW",
  "key28": "229wdkwuZVAKFPTxDb2nfdzc14LtnUKuMFa6ipAjEYK9L1XzanQduT8VpUkyaSR3s7ft35hMVEdbjKBADMhXLeak",
  "key29": "f2F5gTK9vJ3UNNgJzL2u2WmYzHdGAoqhEap9oH6xBM1Mfwsd2tfWtGFNaG6A8RcVutLP1uCfp4HT2dmaSYkrenx",
  "key30": "2wrqLEnoQjTryuR5ND3rDDsLCGm8VTgypCMgS3aTxy3CaRaQ9E8wEnsEjqcR99FBLQnNfXLUoRZ56wbHe2s52Em1",
  "key31": "5bJ3eNeTNydWdZoLvUDbWJYvD8pdMhqwEg6dWrGgUsFg2YFanwZ83GeivRyo5zWMDoDM8T7rHZNrh3x5WaiHto1Y",
  "key32": "3VoaF1YQT6gF5w1ccfDeFkoC1vZmkFV8ZPKffuqL2neq2fWDbKePwRGQrjMDvrKtDAJs3Rm2PX5EZfus5WL75TSb",
  "key33": "yPEA5zDBgNyogMfUJfCWToBuwt63H1e9gxmSdGSDG5EgzfCvEU5rsbfPjVauf8N6tYUiwEKdeTydpwT5jeKrhjc",
  "key34": "3QWYb7PuJEog9NSv7JMnLdVKQfkk2q8omaJ8RFJp6umrvro8UgHEJEPz3wueMTQjqbv16BvQUJo7B42WqWD4isri",
  "key35": "4ykozaLWx1k862KhivwNxW17tMtvzJJQjr1RusBYKeMFswcMufg238vgjjppSmRbmxpuJftbDHqWXeLRVREcKvk4",
  "key36": "2yWDDwS4aGTgwA1JCcNpJLXjXDwBnk3YuLK7P5tJVaKSqT6bQvUmWLHFrFUaWL4c1rgYYsTBnc3bVTKPQCHKVqz4",
  "key37": "39gPdayAUyHJPt5VTx4WGCsd59FWgN1iqCPrg5LRtDn1mzbPDq1Md8HBtSfW9PpfBFwUutuFtPYMRFZZ5PrL3BDn",
  "key38": "HmMwgyNgUesTJh6w7zPhpVxAT4pYUMbRmeyr3Uvz1UPePhdQ257T5RoKYDcF2Rj47WGVp12rwg3YA8EUrAsqTbM",
  "key39": "4LZN6rtMn2H62NSYjuFgdCBWvpEEaEZ2cP54AR4ZhSPgvoYkVZVUVVPRpUauoDbaAF7yNtaJTx9joLqQXFtvkzB1"
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
