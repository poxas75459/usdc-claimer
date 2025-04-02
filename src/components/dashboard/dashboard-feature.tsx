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
    "3UY1DasJT9hSWs7fcJYUJLAhvidiqDnDDMoCn4DkoyXaFQHPt3satRNghjZ9djcW98oGwZ6B9RJwwLG2et5nP2Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dPsxGMXDJyo39VGr1nJRXAKnb8eFDRGVBwRmRupWk5X9NqyYvqqkvPGkkSNEHL2UXUNoH4DQuhXaRULrvZay2Xd",
  "key1": "4WCv3dieDfZFCD9cSRDuDJaDw3C5GFf1hywyLZW9RfetN4M44Yy3NydMDwYxRbPyisK4b8N5a4QdjMzL3Dq6ZwAY",
  "key2": "5pM7Tm8HtPh3yuuftzfBn5J2LPF4AaFAsEozZRTA3NADzZgsxR3jRjGwCTm9WpoHZQfb5vQp9TLpfozzYoeYRH5Z",
  "key3": "3x8wB1YvWyktmD8zrzKR5hbqiG2gQkuMhKXMLjgisMMTj82yNWG7fZwUJNyjgpPpTcgYmo44y6m69dRqn793qh3p",
  "key4": "2vSxEbr9mDN26NqDKHwTWDjwsDKwpyQtNXSsmuVoc5geBgTW4ccVvf1MsR48DrmVaLfjUn6wtFRbuM7wQveB8sMN",
  "key5": "3RCv5GDr14nGGHBPWT5wtw8N5ZpDi83qcDpr737KyYFQGx62exd5UAHV66VWJ4ptryM8nr22C35FcjGNpS4ShWKC",
  "key6": "2MJfJE6MsWR1ttXW4nhqygqmgdFbAuCU8YLucRupUzPmpeju7m8sW2TrDNCJM3rn1wXey3iXkAGHyWKyLqR6ntSa",
  "key7": "4zpwEPjXznFg3wANAu5o29fTkgytfFpN3S98LkTR1HheNvXgV3hhjDFshc2bR56byTbXvnApxXLUN2Z9JzQr9vkQ",
  "key8": "2QBmkLyHxWvX2j9af2zUxjBoZeJHoKteb1MF3r1qzeFrqWrcYXJuHqRdKuFFtjmj7HWJr18nMRKr5Tb4N3QaDf5z",
  "key9": "4RRM5MCSP169RGc6guaQH2rgBN15xUiwkVbY6B4bVjUMNJvA817C68grqv8Z5dBx2dah3D5mZ7Y6cWcPKWfVGpMS",
  "key10": "5NPCMGrDgMiwzYNzRoeiYnFmQDmqhExUKLVFWRDWTVLSxh8DZr6va62Y3fYs3V4D9nUof4KX9Dt23Jtk2q3zSz9a",
  "key11": "2LZJDnz1b3CnSrp3JedxWzPMhXQDUrUAq8Y2aHJnxYfYdL1SgtKKd2mMeUNgvT1U17a5yDJNy48T7j3x7vhdeRcJ",
  "key12": "3FV3mcYXbYdcucjEdv6qNPp9PBThswZgCDtKx8z4s4vn8inXKQsTVUaUkHqXYDnmHLByPrvu17t2a78wFVTVLVmD",
  "key13": "5MeXgeGjwMLNamKkULmKJsMYcY3j9mw5b9uuucNpxiGcEvMydUM6hpNpZDgapPzijhTDhGUvv4D3seHeBroRHmdf",
  "key14": "3ch8eYQBAaYMHDg9QbRBFo1urvzpdFHHGucskaKbLoV8365WgPUVBwcVJzNE7fn9PHAe9y8dccKoKgN9VY61c9cW",
  "key15": "5MBw7R2swHyjP35M3uK4nYzH2setSFQoSDx54sFgyTRvGq5YY45jrkP7xdzMdMYJDNXf85ULKEYnNu3dJPCRHrFS",
  "key16": "4ms3Upx8C3kfwQqCEWe9NtWu4m4ZjGVchfWZvYUjbrATvnUXjmE7P4ukv71FrEKkvuucRVEKVVyZFZ7vMcukuR7v",
  "key17": "3rf5Jcnh7BH9xmHqaciPjbr1SWHtbJV8u5tRerDqyzxqimno2JCcZVsym8YfW1DxQPZg6rmLtwb83HQeGXW4m6KM",
  "key18": "ffAe9Gxfzfnuxxju3EEdJyR4yE92Yh8DmwzQw3tMvDrTTSYE1G5Rn6BP377unYenXoKR9YqG9T2CfPh4qbx3uMF",
  "key19": "2YpXiDZrBZhfoAf2T3gtJcvEkVcfTi8sRjCwuMa48c76ya4iNauXUZPWkJgWmgyKrBAi7frEo1rVw29HQ6XtHSQU",
  "key20": "5CGy9Qc2Q3BNztWeGqDV6fGjkRYafzZoj4niTU6hpv6YWZjo6seKH11XgYT4gEDFAoUNELUE6YWksP7urzpxXhBD",
  "key21": "3bawqonBowjRhYzTMtGranwfknmjS9DwvAueVoAkNzoV1PVaxgmQnb5GTMropcfMAeBf5NXLXG4hSYuThNkkhJWG",
  "key22": "2rjuMRK8Srh6qepcBZgn8VLzxxWCEHtNp8qNXcMAvkb7KJfiZcnHjRgMtvq84iXYT7k44mqMi8TyQ2wWbGmSw5NC",
  "key23": "4QpeFxgJ4v6mpfZJdtjz1PUodjcay6TpqdPVCnqFWEjsijMcX6kmDoe9vn2XpHMdPo1CmxKjLdKXBQSXTsT3ic1u",
  "key24": "dmH2YtSB6mPCs4CaKWvEzHwrsJ5hCg7hLDKA9w9gTqVMrfKQr3q9JYvC2LTa7xHoVJdSvQHa7DzExzUmvPdET34",
  "key25": "52RPVYTQvDCdLXwxCCSLt43FjmnR7GgCnypuG4oUZWXFkxvFFjseqgbQ7eQJfzFSHUjmLryKVtN1FFNt4TFHkkmS"
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
