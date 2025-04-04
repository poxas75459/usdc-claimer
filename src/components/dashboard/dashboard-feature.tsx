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
    "aXdqzNL7YmUZQXfZahepK3PUrRvkKgSx4oYYqQoqcDmhZw9cJbeEYctfY6YhQxdLen7ZZops8m9NnbH8bxa9UYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NBMgThokLEHUMj5U18Qi2Xe2QH9ArhLiNKYKWk9s6ggVLE7GQ1k5Y7vXt2d7TjrDvgxbNd9GY8at2q4CGm7DPf",
  "key1": "66Q7H2x5FspF4xEEq52VZR8NtjcfKwZ21nEdGJD7xoJPDe6fn1JqsDcHCrwCyjHau6QW6XMsVJEDub3UpAGp5AoE",
  "key2": "539Mj5kPtVdCjrVLEGucPcZZoCu6SJrjLcPqnU4SJwyuDRfsqAnKDyEyzGFbjhA71bQR2h3pxt9tRAp2B7itjJZA",
  "key3": "9JSHTo1ABygjxiUskHxKUByYZnEzpCd1XkeiALDE5gVz5TD2TyAs82YUbaruCYZWkWjuGeGvNJEWwmYic8gkQ1s",
  "key4": "38UioAtXUzevRxCV4Fz1w2WTR8auXE9R3TikHF1hM18ZydNWxyiEnHfe4NVoTYRtEwrpTjwFUmyPh3hkLLXR72ew",
  "key5": "4Xp9vL2fR3y1y6ranpZTjxF3JndC2q881K1q9XpBxThaQY32SEqqHev17voGT1CjkMY6REnLbZTvpkj2sqhjP9fe",
  "key6": "2f3ywn4hFZsNE7f7Hsm4zZt5BZvWbxs4btw7LwCNVMQ67vVXsN2ZBX3w1i2EzWt2huuDKz2QSRWU6r55u7sJ8wt8",
  "key7": "2V2csfftZxZTZWFL8GyEkNscKCynfCJW8ePSC9UdART5SebHnpKfjGCVrEGoDSUHuLw3mRcRyrc5VnSE4qQePCTS",
  "key8": "3Mwdrsz1NjmcvCYPGDuT2dLJbFCad7PYPKXLUh2VsSAhnu9a6g8APHYxARkj8SPbor5KeqoiBFUrHKnHcegNecr9",
  "key9": "U285jRuvjUipzwuhAZTz3oZ7wdhk2BnyUtJBrkYdtirDaV4V6DRZUSBUphe4UfZgMHncmEGwLhLvhnvW4Wr6hLR",
  "key10": "2gVEBLeFXG8st4CTqvzbH2YeXFvwt4FDamUTpY6Qn7dkB6vdpkzMJyrtiX424kx9aTmuPf1WWu4GdxX2aHvcXj5Y",
  "key11": "3SRa3ymW5z6BM7pAgZHPSZ4MyuMPndkZSi2NGAdy2NgrviyFpqJP8fkCCMRacDXFWSv5iCpTzmoc3io1EwomBgcH",
  "key12": "5EQJqSe48ARj35DsBMgzjmJY7QYBAetwz2tP68vmDCEMKfH1ehuLT8XN2TXgv9yyZHuL2SPo3h4v5HKLToQuZJEb",
  "key13": "2KQaREGJg7tHjfeMRTSHgK6WyiT3c1VFxkEYpc4oUgbsE2nYmo24maaWkUTxDufpFKhhYGwDSymbv3uxuuQuUKpv",
  "key14": "4jTfwQ3QmqkJGDSZFiyszysTZeLfc4R6Z6KuyzudtZGFsaGLv57gbxuSPTgdkrmmTrENBFEaMk9nWdi753rMg8bG",
  "key15": "je4mMUXJYfmT7LA2R3LKCSodSNEhJxXo3t1HWSPn9ZQfRERNB9MFqwoxtddkpcVgwvXg4XVJHnkh8FRDTJdJ6Ka",
  "key16": "22txw8nkQWuRih3QF3tkQr6Dn2zNvQBxY8D4GZ7qrxLZnQu6Bc1rJqtMGNhwdDhqFVvZtAY9FLEPQYLkK3vCkDFY",
  "key17": "3YdV2hEnnex374Avy4tQbu6wGzAU31qX5yVSCvuEtbYvS4qYEoGbyp58ENLanQYzobkcLiydR8tSH3tDe62Hbp7t",
  "key18": "4iWvGTzzd8wD6F1kTLEBCDew4mPfiFveUbbUThvCxu28tTdx5qxbchnpHK4wxFb4fFNZGPbuKdK5xsCBfGyvPoxw",
  "key19": "5TjUFTM85qfejWdPLqFXtV8xkSfuEZ4JrbxRekRAQPGV8FeHamXFtsTEhsy6AQAd8RdLQH2yhan1Yb5cCW4RPXxN",
  "key20": "5JnNHRHRC9FKNCkZx1isWmz3EogFfemfADTMaqvoKFm7GApLp8jRVESkHxkVJyYYfSNAVhmiQpRuQpAsAneRcxo",
  "key21": "2GT1dZWcz6M8Nis1gADkYYaeeXcbq3zZhMKuL9kxooLquTAabHC3vYo3U1rDgE88u9Y9zD1cyj2Z4dkVgwNvvLBm",
  "key22": "rDpvHfxqxTfNQ8txgtYKMMTZ2cWdc9pxL2itGyBRtjm2a2WaSkVKEyFEZBFYJPuCEkczve1rd7TDySLxu8L7d2W",
  "key23": "4K9Yn18G1KvZDNWcV89TJUBKkDHEsjBW3TiVuqX4zecAyCCp125LPVuLe47VbaS1Tfnrq5bsihFEzNE4myj2F3EG",
  "key24": "3zik2gxR268z5FgXeQj9btYtsaDXnw5BXAthpsSKYfpqZABVaFVRTzrzqGwqPfHbTSuL8ABBSrNRwx7HgxAb8Wt7",
  "key25": "524f1XWU4KTZ3WhMKMeExxmjcRU9eB7wjLJ363uDksMkatDofy89i2A4MAwqoziknGnVeHSayML4fSSRLsCPBqck",
  "key26": "3GmD8oW8QxdgDnrjdPDN7AXcmNj4gzefaGMdRQsEJJvHrj9EDhP3qxxfVZoDDSAnP3qFtKPT6kWyEfjcFEdH2jvW",
  "key27": "g8LhZ5NHXms1sDJVYRipj2Dc7fguh2u6boiNPgPw4h58bvW6HF1zzkPfyu1xQHBkBDRuUtAdPdtSaanHDpArhXt",
  "key28": "42UbzLJwmcBdxFwrG24NhNaAMCiTzCTGoYHkygkZ2tseumYkbBbwb3tbaCxH74iNZEeFpvWxzVNxR9SLnJHUJYxm",
  "key29": "2VFUzKFL42Cg9bXXMC3SMrvRyxbKp2pKy5jyE2y7PS9iWRzibaduhD1iLs5xqjGQ3xbgV8jTdQBZk5WxxehyLN3Y",
  "key30": "psayNV4yydQzPztZFvqSbjPuenE6Z9KJ7ZQkXHkWb1DVryVXtfsqZSGHyMiSxvTzycDwBHuvCoLRmfGvXuz4XuH",
  "key31": "2dzRX2zq1QgR456T217EaQWhynmoDkXmLXk8sQkQ5pRgtEg6hKyu51jtFcWnDvRZgcaKoGckmyydqcswjSD7yhHR",
  "key32": "3cpuRmqNJu69jVp57HGxuQWr6zsNFCsjJAxoUGqeZPh456QZCPJRX6CXneUpsjUmT8fsnu1Q1366riQGcfuVwzTM",
  "key33": "F42JFfoqsun3kaXJWPrtGbC5W7hW6mjpB1Jfow9eCAqHkGv2TpEeQ54fPbpFhBXB3m9Zia85kWcNym2zgriAp3Z",
  "key34": "rY6ei5ki5AkrZFLMVXXytqm7s2FPDWLLYA5e4xud1iqjJttMTLEQhYjaj6B355HQq9rDbbijBioabQSftDNTQRJ",
  "key35": "65K8cDpMvRhuzY9m5bfqj6uDjTCydsCrX17stYr7rCTmxJGHhqQQB48szeybS2yyd1ebfSTkEUnLwyj7hJ5YeCvP",
  "key36": "4FSZ2NteHTkw2uoSDxrV8KbTNY5MGLaaBRWxPotDY59sSGtGCNXK1hLwxASW7CfgUU8S1UdHjPa8DvLa6q9nFDix",
  "key37": "4UFxdaShc6om1AUqdFC4cZVChB2rJkfNT6SjtmunBFYMwqeAH22d2YSi2NwcnQRnNxzrCog3CrQ6Lh8i1vUZoTQr",
  "key38": "3JR1FDvekBXWpdRAMNSewRTaGGVvmjJCbeKSCosaKSFazKHJwqjmcXznYFMSiZMrMVMEkDyKNiE82uWsK4V3M8ap",
  "key39": "nLahPUd48tTxS8Rfwm3E5PrCu7oNn5faDHzWLV1cX9AFy32eqBEUFABBrxSw91jSno3Lb9CGnfPxVqWvnLbTcJ5"
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
