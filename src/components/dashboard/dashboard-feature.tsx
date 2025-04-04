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
    "5Sfdswd8zn5RGmRGEyM9Q6ix3uTRXYzp3BVx5gdAwwRALu9xyQMqXhFMsBxnU58icGmrB1ZdWm69jvt7iWwuxmxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62idBk3ZmJFvnKioXcrHtcLcL6v7BrjUCXw4AiPLQS535XYQKYG74qp5AUZB1LuLVwLZiuKieMCyeaQnFwwhqxyP",
  "key1": "2N4UzZXTNnBCuBhMfT1kXYbAiRqndckCNkQqP4UccTR8tDJPxq7LeEDVLnvGat8iYUvM5ybNCdN9996m3add6BYY",
  "key2": "4x5EjVN5Q2KVWnAh9TtknLwYmr5mz1WBWgom51qADRrormA1YkM2QGSMStnrtHLiVwtE7SB9v4cc1ZibzmScRh8e",
  "key3": "GhJrq5TBjZBQnoAL7DVLJTjeACwHedqTzd6K1qrPCB4QRWGWFZjVDdTubdDmANm3Ax74T8XNH9JeNWon8mJUQgd",
  "key4": "4QgGFyHSgixd7o8SV189gBpxkv6YrkaWfMnWedPq1v1gozwtrmvvCLrTm6jx4uyC1JujR34Pe8wLGHGEEP4PJ4Qe",
  "key5": "5t1ywSUQivdUpLmp4iP1f7mKeHZPzmN4B2USyT8Zohrfabm3GucwvogNGYQFF5RPZEMYjrVp1GXTuUi5Qv6BTdPL",
  "key6": "3gG2W8Yt3vRyHVFUeRdQNXeEcQmherBsnb9mJqtohqoPtPVB5TjJHjgU9dwuCNsBcqNJotTrZHLwNGq6PwFm5Xur",
  "key7": "4txxdbXwW5jwZc6oyu8qYqURSEykeDKBQxSkTZBiRXTNqTwY1B9itGmYn2prs5neLwSC2TBZh1n4mJDEiW314UwZ",
  "key8": "G22Ech7mpnSqz5ozJXkJxqTUuvEG9n4oW36E4pNwnw3fkrNooeCH313SbSHPyvKcNnvNXgXofi1xxvLGYJdX1RR",
  "key9": "3rskSoUXSgYukATzoBRr4ajcfEwMPGNxjwGCCMB3HGSjEPsLVKU1ViL1wnrnpEuQ4gYzaCBFZxrAV5e9Cta9U6q4",
  "key10": "41Dw1jDiWwsKRtJ2MKuPTMqrGC5HHvtgbZkVcJstk29a2KsR6AxwECfKzdwr8o54JPJ2T6rH5AvdKckHgfhP2HJ8",
  "key11": "SpydNKdpvzTLHsa3jDnzFX56vrFGZwpfcLFvKgQKoGKfkcTrzUubt9pJoRZ6rmhaemx1VSvpLKcCtjnCFiLjTPL",
  "key12": "5MUsQ6xEUrqsJFrbZ2WrHHgpKEcriBjDeuJXzUXSBatovkHNK7sz4YqVc8RuVZFQ5vPixsLJKL8gUxQpq6VrZfgS",
  "key13": "5wAUbTNe9Mfa2s2DpWuVDchqc5jvNfT1h1CEqypBXsR4YNUPvLw1R6modU76F5ntyiBT3Nw1SnVKekDN3nrjv8Cr",
  "key14": "3dQr72Ytrj7A2XFYUMuuvAatAHoCRvxpWshGQGaZDY7FzWLjPgj6Ys31VLJq1DKPjBN6vp9TSwWbZxKDTcHyqyPR",
  "key15": "2oRKWjroTb3Ktex7ik9ivxUP9u1MdQxjWDz16qDnsaKXSwMBkGwtnZzWstDPmE8B51yQJ2uJ2N5gxXrFGNB7iJmM",
  "key16": "5AzqH6rvCyUsUFCkaGZpkMH6ErqtPgPiz1H6vDo4ZxWHJibTNsb1WdStAQcp7yp52pFETkCEqwgGdDcnsRRThqrc",
  "key17": "46t9cfce4vzX6ZPFCnYfstpmVdbPCwnDZbHwaZ35Xz65ShHemD7BzYZwuFh2ChyxeHazKMnkkFbuXAvf7WguFpg1",
  "key18": "4ux11EPe9TjpxbcHQ6ejZpHdHuZnvsKhLYuBiM3aFt1gqtw3aGtsSZ2SfsnFuPy5YnVTSYxoJJbL9HrDPGVoaMFa",
  "key19": "2jDpi8sYtbs4RPbNe7MgP91NpAAFkvYoz3Scek78UL1hr7vX4jLt9nSnSo8tSUC9Hm95yFp215Wtnmbg6iL2TAuk",
  "key20": "2gs9hEpKBXqBsrHsMQiPjCSLX9mQwEgFUePwvdRrYS1CafBbHhSfRevRXWDgKj6oMYHCJ4naeEQTCWU4SirPMZU6",
  "key21": "2TLgzX2fxmnJnLNb4DcnGNVWgczUXyGPS79xbW6qu2xZijeU18Q9rLVELbyawP8GqZ5V5cjVD78xdAVv6Zy6TG2f",
  "key22": "5deRWfYtNqgdHRM5rsfBMpmusubcgcxZiPrmYqXoqxFMsiDD9SG2g374QGqVrTdbgQiAchbogqo2r2ZjnoUzqWUP",
  "key23": "4tNPNz3bGqvVuk1yT2jpoiWeQ4naZpY6Ye3FJBXEgwEXgFWJBqZd86BeHXVGez8fAePdVuwXBa6wa4pK9PcceE3o",
  "key24": "5XTn8dGMnXuvB1MoEYi1jrveMDUokNUYJ94XmL4ubGdePqUYK1cxB1YnJz2Rbmi88b25G8Rgew2BKtFQtanUucut",
  "key25": "3n3ReuMkzZrbCBvabXX4YFdmDNKxS9L8149NGCviCTY5Fi3hH6pqfsmicXd8TxisNg8VQ5NkfEe7ivLJk2hqVK2c",
  "key26": "5Lc8dPU3xpwevd12Jx1dogX7RLFGSo9775ycqtB7eaGZka1M3r2qD3cmcV6MdD4UpqfU1xoqVyKaYouXwSpY4zvo",
  "key27": "4ZN7PEtctTgsv74Yf3ywbv8Vfb3cS4g4qeQtVt1P2WLYUQJmze9nkbdXZPZbNQUJV3GULcD4Sdyt6kNjwu328gN4",
  "key28": "2uVWZHAzHff7QaS1sN3Lp8MsAuUhNMS868Wojx3MDwVmbC5vBRmQZ8kLm2kc51V5mPwR1FmsRMy2zgTJtqdvP5mH",
  "key29": "3FkYSDHQqj3J1ZowwqnyEhN7TQvmCujo2mBAP2aAL9n2hJ76x6zRRKz27Z3FewKjieR3jnoi3eHdZE4wow55pgsD",
  "key30": "51kC3sbC7XHBVKVvg8bZDsdwCeN2oCuhwLrQSP1CVqwQY8fYCvkwx64AqDmqFSSdRG9Wdd8ypW1ZpVDwvxXrCGHM",
  "key31": "XCnK7kLhpP5Nr1gCgpLX2qdHerSkFJsnsjKUx1jHLMje9PrRwywW5bXzMDcP9u4y62kZ8xwyRFJsD9DdhLEYsif",
  "key32": "N7AuyzfAG3YwHeiwNV2yDekxVnUoJJtomvGAXXn6eSvEEexSYs2DzFZU6xvYHuXmPhTcRcgnxKHfRrqZQhh9Rf9",
  "key33": "43moA81Me8fpy2s6eGdBqJy8ikgJYnYcHfh9dBeZR4PuGmubrp5Qpx89zM9Hvme4BugkM8L4M9R17pBNSkjVUnDh",
  "key34": "3C4cBBaAwDjypqcmvKYzwJGRkGQQz96p5kiugkGasfXMm8bN11MSanqL5LjfbrKpXBNaNaafJqJWdWYGqJZ9ufRo",
  "key35": "t8W6BxdUm7RTLRwDwTBBpfxYzrgHtYNcnuYRFp6VHMk8WH1TB6Rwxdznfsxz9byTtDsmucZC5Y5UEsfjQ1kVDi7",
  "key36": "5bw7YJe2MKBqAXsRhPXb4zbRRAivKtfzUS83fu8kzj22YvEN21NiaDkE9Gwjoo22NfexhSzJnyXqtqFTBXZzaS3D",
  "key37": "2fkGJjWwexunjXD88mFPmBtZKbraUGqWv6UoTHmUaRYPEadYuf7kGoR6t5ZVTx4YrBo9wZTRaRV5P6TZCE2zELHc",
  "key38": "5uZg4AZk4QXRcRkES7vd6xTAJjzGuNKzQYqSdzeALCyZi3UEAWcTFsKDHQxReqKG1UHWo1jjZXNHHDaSv3dbc6g2",
  "key39": "4ViTkwa1C9JkUiGL9a3tcyf3qoKC1xRcC3xtreAcnhSPPAsxyUrbsn3eLxXpsvFk1QeccxPgZZSwvsgx5fwNrNY8",
  "key40": "64ggBZoWZw5WcZzXNk15cc8hqkaB12VwRzzPdEr9VxT3fGVimFSMuTUrxtJL9NPPTa4JcRsVEpu77H2W4cNfDoGv",
  "key41": "hJYWUfar8bQc8tq29yqKiEZoCHstzeb76MfXJuxags2tUkSgtsEwxG4z5BCqJiMtdX64smRe1cZ59ibRy6gcNbV",
  "key42": "2L9m8GDE7nkQJmg7iADfVrkpdJx2tWENFNA6McP6spC7xMWssMavWuxsrBabRQBCZZEtqm42NDEXCeh6HWb9xHgc",
  "key43": "4RD6kZraKPAY7cpJ5DJnAGVYZpuRruxqU9G5UhUUTXnxR9fBTqsQ7EFuq22s5DhjnVFLPW3SueY1QbTYf1M9erf6",
  "key44": "3SrMHeW76LiN8fmWEMN7AEu8pxr3NZt5WykxJU5XihynnEV926U81nc6kRPEF9yTi8FpXBZHi2gbu73iidimv5hN"
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
