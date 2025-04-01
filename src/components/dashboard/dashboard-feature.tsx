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
    "62YRdc2QEutPbYhiLo9sqaJzEHWSvjzpwu6WpL4jpQqxPWiwB79Ld2FVe82Kx1XwZbKajEj3pFG97EPTmnJjroBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMdSMJ3gQRkMBXUkupRW6SAgs6BVqzEwPkrGgrcvVjVra7GRpXTPUyfBVaUxgMV7JofpVZknpwUNtJxpGLaeBMB",
  "key1": "uL91FXi4AY5oQafx55F23Py4JK7SFA9fJRSwkUtBV9mz2GWx1E9wt83ukUQ6N7ktXA6viGYLdMLdLeSWxzFSGPD",
  "key2": "b7sfnMtwYFjbFaKL2KCsKmVkZqoLkPDEcnrUJAFkQo2D48Jc1P4XgzWuHEJCPQSxKBi44C6McvPbsptkfXrm61L",
  "key3": "3d7nkkjAVGetX3hSnCF8fKR4U318vFthG7iATUTyhLC4itMnFAit6T2PRyNFGydSz97zVUpPDUsG8jHAijhSs92m",
  "key4": "52hkzmNRU7ThcF16woZ1G8SsA8RTN752otUo92ZQUTXk6stk1b81Q7t3wnfxkpKLhWXjBMtr95U55MbLtDVMTEbx",
  "key5": "5P74bvMoiWDYv51Cet3Cvv8ydEhRnD74iLPXtkfUVerC6EQnTxdGADkHUqUHek6fh65LNRcimhbpAWf43Ce87VWo",
  "key6": "59Pncujwj9zNuyqbYtVpLxgSHzXHNpskkyUK5cJXQCPMF3qZSeSdZMEcx4UwR8atqnnyxFRTBkEpiTZd7YXskZL3",
  "key7": "4FJunfyaTdunT47b5RXdbZDj7ni2dCjakQ43u2RijEoA6yD5DRGvJcVLhYx7JZ5PMGiRZA2WGYVkSsQX8A8zB6Pr",
  "key8": "RVQ4XcTUXU4cWJhW4eBGkMmRiV8KMitZVpQvgP9HV3BNvrtH3UMRNm9QeRZRf2smaFgqRRhhDEE6DTYBGzUYqdc",
  "key9": "5uHgponwd25iP9eMKvX4X5kScT6mENwPa6WqGbfJhe6yypm8SaaT5UFsX2AZU3uBt5dHgtV7V2y3w5YsKeZ26W78",
  "key10": "2vi9nehvwUUsN6Y19bhGcZHGzuCoBVURUzKPBnRB13teBqvLJH3aj3ybKuxKz6DZstwQTSxrZTuscGpqwGc3y2UK",
  "key11": "3VBq289L6qsHP6TFc3vsaZvp2VJjVFh5tkKUkDLwmWcDRubf6dnDe3VZ6HuCtkPxGi2mKNXhRUw9iXG3orBGS2y7",
  "key12": "3t2FhN9hY1GCSgquVu4KgGzqCwkS6HAPP4MpKwaXnRDVgmwW58g9HwSVHyXwNb9btuNRfFswriVGZaJSUKCmbBem",
  "key13": "2FG6g7MUtiAV1TmjzX7owEJEk3NZ4VZzih4KyfJsvHEPB5bRL9fUgzE1273NZCz36En9CX2VpjtWn9UPwWbbaq7r",
  "key14": "3Vn9g7FfSC7kCMBkBwtRDUN1xKofryYWhfue7CXztbo1UBuigGCVcfBzHFwmV9uknoC6xYdptZotjyYEGZp9ciYk",
  "key15": "2aZyNWQcwMth135BTcEDgw5uvo7hsadqWAwpMmW3ECTTcg3DKPcUUWbTTxmFNKNK1XD4dba7SBjLnL8T6FSLeK6L",
  "key16": "bfHexb81BVwMK9mJNb3J7wQtdVz9rBE2fnokm5aWUzYgFjgdkVdsDwHRMT3QnjuK3NqzKjFmWFDeLX3RWfuso3j",
  "key17": "2sRcSGPaVrjJFFSY6nNWBtEru9hoZzLR3ugv3jTqCW3m4zm3bXJoa1qQ3ngdZxCKiqWdvfNPyTcRfT1emVRFwcgP",
  "key18": "4tPDh1XwYbKJnW9JDwVUTFH3jD7Ndx8LuNLTQgtqz7tocCGewq27DpxobdSWquDsuHMRuB3HZh9gC9xtJRLXj8k",
  "key19": "5J1Ps4QtViGjDC4RDfCeNduaFhZgz7zxHQjBnQn6oa84Z9mxBaoNXSLSz2e7mqjAKHnPTMuTeMuDb1XDaYqG9mG9",
  "key20": "3Kyjroew38uYp7UXEMZ4Cdop8H2aDvEmjS4hMzQ1R2ZjJsRRGKJpXyrBJ3139XhurorQmBReGPVev6apmc5WmRr4",
  "key21": "4bwFWV6MEfgh4spXAdpkWgfphyHKFi6k7NY6Ud94GE3zLUZ6tVdoYyNbjmAJmfUfDVXLDTjrS8q1S6YRs9oQVn7j",
  "key22": "5byZAiw5MbExtmvb23Q15c3DpzBA2SfgDcz39XDt3P5nUz45eAB5vqswyQGGkYH4mVoqJjbHvA2U1WmoH2bXcnzz",
  "key23": "5RK8PmF8WQP26RJsN6t1crUyu5LuZC3C2MfanXTNBs1EnAP5sM6hQjQ3m9Nen2u5Th4s4uuoGZ3QAYZHUdu7L3oY",
  "key24": "2z5hK2F3emXN2dMrvTBr7m29xTS2R8Y6WCi1xRXiPLe44yhVpPcLriBQ5RgLriEU9pUY2wuuuYx5hFHEteWYyPjY",
  "key25": "5E3ZDbuYvu6siNbHid9h3tWUqxX78c577hc96NTDpMUnt9C1rbj17z2nzFWu9dRWgnWVFL6iT66pkZnTfhZduP1K",
  "key26": "4StWLVfSdL6zm1TiUUp7E2CQngpL51MTL2kjZe2PFTxKngNDzGLxZ8A4DV7hozrNY9D8oTjSCBRm7uvBphQYJntW",
  "key27": "44bgnWUnTWRZhRzBMvXzJ29wB1RrEcKMjh7F3ThTeQJTC3ZzhoDxMGhH8uCZXtbuvpL21rtAY3viKsWnkfTzqHTM",
  "key28": "2zd7QPzpaAAGoC6ZqRF2i61H53ZrnkkRCc72nZ9Rp7KRnVH7zLg5qkQdxgb1fubcW5h17z5xMEy7yV4UvFg6CZ1m",
  "key29": "4drDVFbHrFFthE7uQT555KYVNNYsSLm3B97J4szrCbaAbgwagecRBrkMYir5ogj1WC4aRDWHqasWnbu7SkkpxyYR",
  "key30": "Gg4f9YhjbhbAqb3x6EwdiqiXFNFV723sJxa6EARf6WHaGSsTcMarCqUkLNSfNrtCW78YWUW7Qz8Vp7xU5Cqr1Rw",
  "key31": "4qHwR1unYXj4ALNo8dad2DVf19CcCCxbnbSgsTKbWiYXA4367xB62MT37M5Traq9uWLvUoCjh56TA9en2b26veQN",
  "key32": "4pGriiNCMsoMmsBNP4TRcRJAwjkdZhp2SkdMZW8SxNWCyM9A8wWcPmcAmMu3nqzn4BVe3KqAa67P9jP4BcKuFa1E",
  "key33": "2synLkLhYeWnNSR5FnwPPXR21vrBzPGSKLrQGmQx96yAhuvxDsFFUvQ8HQyXjw8MP4bkQcEjc1kpqnpWFTNTt4wi",
  "key34": "5BbJeqG5uCJ9hAZA3wx3iS5kVHXTaHKv4j6MtpsSr86UbeycqyptXAAggp1T4EyJfugBuz84n8kZsCmwRBoteGhz",
  "key35": "3GPohvzhvjb6moeGj2TM2SwCpWbEZj8p9eGi5QazzR5aNeRyhiZJuofe5Q1VoJkTFDVEdhq5pZK1r5bEp9gA3tDw",
  "key36": "5X6pUKLamBCRCdRBTmUjGNRmXRaBynn3jnRyh1ipVr6xQQwSWBpQfahqg6fresdUny4KGyLJcVXsdrLQVREjCkuu",
  "key37": "5YNVMjsBpKSNwFz2FNLWJRy59MVtp8Uoe7xyRTdTQCAHpH1c8jDi3jt5kXrdcZHKdVDdyrit4omu9vSuPw2qkEC9",
  "key38": "bYtcctQjuAGN6TZEWPJSZS678f8P9wtJ1oL6NxG6LLPfwovixjJJWc8hFPXbpaZ1cMJpkcioCJjN7KYzQ9qqJnn",
  "key39": "4ULbitWpRnQ5dauDLPbkbaqkQ4XnLXic66har6MyMeGY3p8wg3yzWNWuhqKDh7jWLQizdgJunjA745pNLf1LLC5V",
  "key40": "4j7LYParJhxZvoBhGxFXjZ8uMowtqcaqa7dZdH1EX2nHThjAnvM7c3Pb89tnAK8HVgn3N9tDZZmYctcsEXBkQbqN",
  "key41": "29p5WFDaUGyY2DipFKesWDXbzvWdPeoYGdugn6PShtXod2Hh6hYnzu73nUnTmBgEkm74f2H7XJyYf381wtVJZZSB",
  "key42": "4GFsPbAFSPtuz74WoQyCMhvZDWG1NzcbVrYzPywqRaizT7PTwGpy26Qf5UYcwXMx6NqCQ7zt93x1899eghzCBGSq",
  "key43": "vNtE3WZ3Y5tx5JLJ23tjcGRVoWifaSrjReufUGkGUeARoNotc2mEKBW1o8HwKNqjvLf8oHhrQDM6QrBbuAn2Pki",
  "key44": "2TWx7DMTYgqcLhyhWACb5CAcpU4JHKWzcRBYaPXR1LK3p9RCLXdaTX1bvhRfSWN41bMqXGaYZUqjh3ZH72YVJi4h",
  "key45": "5cMzwZXFcUkSP96CFb7KsLCFqNCEo7f19mdKr1s7sheJgRd7DxgbuLLwUxBKyaHwD9y9i94YydYGXxU4nm4f5TF1"
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
