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
    "5LDgtkVEUUPmhdqxJavYhwCyP4ihRoWh2RAE4if5DKv5fSyF4LY6gP5SuH48LPF1hher7TfM8hZk2BCjEqVZt3cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Weip8YT7UsQR2a1Z7ftUQxVM4oGPnsg43JerEXKRqMkXezPWRe5Ucj4dAQbbLEqN2s3EXTskyLWpiEn2uEyUXon",
  "key1": "3qMop65gPYGEn6yh7a5iYy4Y75yovKYN6w7UgcAN844Zm9Tm4k7xP46m753pfPVw8d5XJasY5X8tSbxXupL8TopH",
  "key2": "2vYdFkcwtYKbfYnVJq1X73UHWWGcSf71v9TDbERNBsAb6QwMo3ttkfkEFj4rjSDgDG7M1Vm2PMoitdx5YvQpew8L",
  "key3": "46Fh4THtJsoGJaQ6i5CfXRtK98RZbBr8z4kiCSsbqo5ErYGqsSVbfC16ZvM9Kto7oPp44JPTKoAywvNgU5K1ErVw",
  "key4": "2WRppaN9przJxLB3kbXeAU2goNGZoKDjBYELFajww5c6gYPjMjkf4UKrE2jQVyWwXpHkGk2xsPjCjtFBJSzj4HUC",
  "key5": "7i1HWdcmiyExD9HLDKqTVwE4kCZb65ofwQWCjrQVVwUa7R7wskBhdDixWhYcVHh3jqeKMRgoo3ZX8BCPYRcDi8X",
  "key6": "agGDWXsxrwKJUnRBXzXXnNsHGPbndNzxZReNxngvxQQ2CnFaR8LTQdBHL4sn3Gq27DGPnkFoW6QC1R78JpPG918",
  "key7": "3raadcRScjWdHo4HbgK87xjGUGEkQPZJLmpBZyBHdCxtMH2WS4dqhBBE5MHuAtRzmgbV1Xx2pNgVTrMRfxXwuCeb",
  "key8": "exh4JYijAB9uhKEdjX2t9tmmcazn1Cqw8sDD3ymm7g4CWCFuqduTYTdmRxSGaQnnThsBnKhpMEDTSJ8PEiHCwyw",
  "key9": "2CxmTndWSvHEvctPysM5kK3ACujKRsj6PWh43CbesuzDC3Z175igby3rQS7SAvNUg7kumzANqjhRzaB4XoNNdJY7",
  "key10": "3KViTCh2NtTSE3Ckdvr34bzT8GT76SyHFV8c9DBRWi4FLisnAKXyNsrHvGBH2YBhF8jk5EYcVGWG3TdQN2GgBK9b",
  "key11": "5xgvYmdHR5anbqNs5oK6Ex1vbhqMkvBzrKQvT9kuHARUxSFWhMhavNK1QCymuCCHmUukXhMSNhjGGiejoT3TPvUa",
  "key12": "4WSZTTchY7zQCvMFHgWbU9yWzGFztbm68acVtKhkCTXffVyR2578fnpZijBZZrjtHhZwD5ZQzHfsLVYVXqtiLNeq",
  "key13": "4T7Vj4PdgW37eCmANqEt7Zu3La2ACo86mruFNARUmKuQhe4s8acy5AYpojfYeintzXef4DTbMAmGzA5f79QHCzGr",
  "key14": "5rcSTQZ2SwmSjP2fpTQrADRp8DjdZxPaXgcNf2m65KBqnuVbq2UPpmRDdfCqYaXucvc481553NVtV22paNPoqu2q",
  "key15": "3n35YQQr3AsrWPPQ2B7qZoX46Zakzmj8ey2okhfei3XAQeEbW5NiQ3Vf8SAcEj3ieGF2GKjzPDZqnzBHtAEhrf35",
  "key16": "2v2nbnNmeyanFpDjoCvdB9frZW9HdAhkNRCB79aT4Z8HRkRzSfo7h6U1T9vDi8YM8bKoQUdi4v1eXBdYECbwo61L",
  "key17": "3ZiKXwmKyRm3667xk3FtrX2pvkjdw8oJ8FiATeH866kAKsF9yxCHddqFfiDUeebd3tCHYieZ7tUMF9oFBiqHmS16",
  "key18": "3BQzzch2uWorU94VSHHYZVp5efFBVvS8Q56BK1F1TV92sx969PEPcmTA6WjozbCqkUfSzoHKKnc2vKnLwWqWr7Xb",
  "key19": "3xuakXox5P39oRGsJonstn93BNkTJzJvt3Tbq6ZsP7rFxbeRUWPMBoagD72qh7JyDVXL9So9pLT2Ctmny7h1oDbS",
  "key20": "4j5AFxdQxKw2GC3wTZ2Hdoq2D46cVUhsUzE6EPhAqffHhNomiU5XyJh7WVh5UD6DueJtwZitoXEhFTo4gkZE2jCj",
  "key21": "5sVBUmjq4XHhXPfEX6FPLYRXPSPN9J6trzrhjuFdDwMLcafSic1kczZgx5DYJBrfkTup7STqQeZo8Mnxex6FTf83",
  "key22": "5yDHd8cEd3E74kaAiwitJshNxx55zCCXxVf1AhutM8QfoWZ8i4ggdymj9GDafTkRr6Ks6KeZWZPsYYbHwXYMLrcL",
  "key23": "4tUcQQFjNk9SraaiSgTuPoPp1PnwqFege4dUdfMUEHvcBrkRKLRCHFRmQQ9hV3EhvQHiHXsWSnK7wNGr2MznbQrF",
  "key24": "hLZtGRtKLtVNT9aWoN3tkUmNbYfSNHhhg7hCCnngcnF7LdnTyaTCokUZ7m5qX3mYaeQWoa2pUyqdtUpz4aU5J1w",
  "key25": "5ff7ahQAiCL2tNCVGtUrpqQNHjdQCsfLgfvLkYGWzLdK12L6taJsE3mBk5WjqnfuwW1QFHUnn6pTZszxa2W2L92n",
  "key26": "2W8BLMLwYMFhHwittdphzWVWS6CskfBEhyYhsa2nWJ8YkQvs67Au4n92QF32XKoqQYsEL8Xaz5Aa4RcWMniJpvdV",
  "key27": "38Vx7CvsuTyMDx8y5iPk8xPRwF1cUM1w9hcyzMBRg7rejMj9u9Eb6UdhwGbeBf7bywZmU1UNF4Y1sMQZeDqgPevM",
  "key28": "2abueqtYA5WbeX1vBXnQidKMrnLkiRyhXf1iiF5SsQ9dSAeV6C7gT8Ee2xhk2tG5ViBjsnKFW1vfmFSxLKcpgyDX",
  "key29": "5XGk1ZtpUZbTYYKD6MbaLwKjwadT7Wbfa7HLxAyGJea5m2WQdjrcQVJ4NounVxrLFFBgxF484B3189dWJBKdSYku",
  "key30": "459Ujng4FdTNFz96JvP2AKLGSNuA8aeeHqw3oApkZHrQcF8tALxXUK9cqJhiwc1yY49om8U4AzxgFTyJa9gUQ29z",
  "key31": "4gHrYHLA5mgAbgRZHYXrNDr3LWcWjnnGGi1SiJhjSngDiSXT4ED52VjAqZiUyoqe6BUDQoE7FBZdHKaYdwmWwF9K",
  "key32": "3k8GpY4Jjv1xXrHjiAhTjWp5VmArrYXwoXEWmkqFBDsoMLQdjngoF1AfHUQ4QqBZBVpcsWVqGZeLA6C7DJ9Rhkt2",
  "key33": "2Crk8wt4oVEvZkKyTiJY7ywdHE35Tf6KuqeL5z1UnFXX89MtmxLKoTkJQuR4HyfzoXcBNekjj9Pfiu3YMjxbGZ4q",
  "key34": "2ZY8SWK4HCdBipvrpza3uNeTDzDTDTi8vGq2nNZpXB862jC3t4gtXcLF2J5LiSAV1m3qxydcjstbqzpg8B833bvX",
  "key35": "27Jkg1y5bhEwcsgKkcAXwmsANBoufBSV7kMYSiEi7f6RXghu3XQfYyeP4ifRA12gYQyPAjWquW69zMNwKfza5EPS",
  "key36": "PtqXDeVHsq8huNqA5TS8GA5pGudWwdS3h9C9Q1pwoNBPSLe23pPsUWovnm4GFcMdvwhP6ajgUV33PUBHJZbZe2f",
  "key37": "4tmHgVKLB678zQuTr3Qznz39jBCuDb5vtr4xEYSbiVxzWhLhjUfABL5e57m2tyn8PYCkBjzGBtWVK7hEFe8KHWKi",
  "key38": "XnbDfsjLNncwMwrEFxMUjiRAe5nADisuUoADGtr1VZcqDGgRmGYAM6rvov62B8CGjA3EzuSSW9mnEQgwNWno2AZ",
  "key39": "cUbPZKua2eL3iSNLyik66abuVELceXREpdWqREX1UjrsLSPnxicsekDxWRBQPiHTPkHvzceChDDKYN7fvKxxkoH",
  "key40": "49Z1rMfi6rRucX3TyPCJTPSGt8buP6coEwyihaywLmTGv4FPxeRVfvmHVHZJvH8tZxu5ExNoiyDM1Dra2W78WGLN",
  "key41": "5uw1txWrpyrJvvCsmmSXerokFaziZUwDtaosvz7D4rAFRPHGLmCuvRnpphXkseaZv8UZ1KN1ERyCepisH9fsuZgx",
  "key42": "kFfPyWYFibr5TvWN7wG17gijZc8eRXJP2Rjs7C3szm6G5xDFyiddd65H48A4T3q35Sjz3PZneqctS52SPgbpMDr",
  "key43": "2iFDYMuUwQPQsG5Kep6t6DyCZ5H7Zba8L19WVTBTFFyjEvQzkx7L7rycnkyG4nvYYuDBNSTRwJKV4JNUzQh3kvda",
  "key44": "2sJ6zygKn9gdXPU4mQiZHWT1xXmbHA6T61t8HM2zPn84H3X1QzEAtpwejuuqnuKDtSYVWJyaJhget8z35a6nCfD1",
  "key45": "35C2MRVbBgopLyjWYoiDSSTnoJwW13ZRZonWB6w5CwtggCmrWWo3gUmcG8qjpcm8VQU8GkQH2NDbWtwsMSGezRjD"
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
