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
    "5RK3joATBkDpnBBgi2x1Hf2Q13ain2B4rcS3b8p9kKRwq6RneG3253MJSMFnTRVY5LeAWiQ7ycjkZsNJSKVnYtRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgo8RjLpbyjTWz5CvT9EaDYmZRSUFf4YWXFggwWmFW2UA7GKj3EP2LtPEAvMtEHdFAYMGk7BUc2dYURFmH9RaYX",
  "key1": "4maBYxeiCHRqqCznn7LeoDvgRbejkiFea28rymJnLrK9dRLebsEsSHeURxt8wk9k9TV8s1epGxzVizdPTJkTVoCS",
  "key2": "5Hwg4bLLHo2CjqqhQgHDJZ2rxBETLsVxXi1rDpCfcCysjyA5rGAQosCy217DNdMCFuTTUYpJrMeukGaCd8QRsSuv",
  "key3": "3QCh4EZCAwJKRHU9thXrxMSSjAHNAepFj6XHvHbotxc9usFXCgv8MxBbuHu2upM4KTFwJJ3yNyZWQVy4UugbACxi",
  "key4": "5GvZaK6o1bmwBAyjaFpicw2q1BzRY219m7NwmiYbhXbj6MndwUFdEqwzSp28wAeJ1BgjBDCSEEtEQYWs4Mmt6odL",
  "key5": "37pT23zgfjjDPwP8CaXuy1QsZKQ7kSfoLTF2KmTr5ZZzTox8AmnwUpkViRmqVmjHTJNvUjBqjmTUUbT9xjRC9sfv",
  "key6": "5w1gKZRi1feFDM6HY8zN1ux8xNA3cbDLWKLrfNmpJQHhESXfrsWqUpZuk2qTKzvaRxmioJZ1DhY9WtRDBLRhUGPX",
  "key7": "4JTyjnivoX5LkKET9n9hcAMLQnTdY5VuHL5WhmQozXAsoh6Xo1pgkHFAGm83UYPPB1tG3ZDHiH73pQBJ8J11j8GC",
  "key8": "33K9bhaBBQ4ndVnhKCLqDj63vqKVM8EChW4yxdVnBauZgmsexGsFdtGbbUELQDCuc3En2D3rzaESxDt6UjfK9LyF",
  "key9": "5YxA7QU6KUbQkJaJumaoXceTrJLStH9hHRcVhLV4Cz2GEL6eH4y7Y4QvufHNq7y7GEVkicLx2cEj1YXK5PsMsWqY",
  "key10": "5xcMPNHS3XfJF4Qq9L23VwskYyiJTFSgQPnpk1r7ucoxuqgpn85NPNKXy1fW8mVcRR1u8kGvW8Do6zFq6kQZ9Trf",
  "key11": "5aDj796S1iy3hd11YAwNJebToyLiyH2CXshkbETuwEhjGgSjwd2pMKGUcykrUtq7hB6YcddJCmnKm3MKxRF9q1Bw",
  "key12": "4J6CRPzpH66RuQCWKQiQrci3V3Aey3GGsfe8UjfEqS8eyejydPAdUHoGFYB8FZgtbYKxxQnQsAR8u7ZPnKJzkvm7",
  "key13": "3cQ1jKNHWopJTv2Vq8GYJJdShCeuVoji6tmhCr1XvzawhLnS3idM8NGzX5FYL8VyfW9r6aN8s9dxiWEbwKBg55ru",
  "key14": "4kedjZ5AJ2Fjs1SJS9kdxpEbus7Lfgw8RGy7iw22jaUG16AUtNRmxjzU8T24Q2egNy73WWck1bX8chAwxtDVEtUC",
  "key15": "3b1oWyuYtqicGy6DfuFeAwBxhKojxBJ12VPstNanX1jTcZ4JqNDNFS6mWgbG5c3bpAf9TgXDDcMF3Mf27UaG5APc",
  "key16": "249tLLnXxEHtMEZ9E2cFoEndPC2N8J8KfDH9VhQ7fUAVFXBydFPK6kMBeAQrzFwZ885d6z9sR1qyCaSkEwz11ZJC",
  "key17": "46RzvDRgTpgRbnFfxnADs9kXzv8amN3tQxAXFtBZhiPrYbYzAGiQCq4eHVd1rCQQmJwt9FvpJdsRDocobsAQdr78",
  "key18": "2p5kyU5wQyKz9bBzuUdeYHS5TRWp6K8Tnpqa4xbT3fHS8sq6wvof2u5t4h4H71SHuDRWfvfif2MKnPVXCuXnNucy",
  "key19": "3AGjA9Z8WQyN2o8wWYijGK5AXiLz7fzNyNxz1iuxbustUQzYXGfXrBAE3Uv4eViVW3n1TtqPUuAi8ibUoQ2UxW97",
  "key20": "4m1SMHrb8cwrbE2UMZpLSaziLeErCu7QycEHMsML98HcdsFrx1xQYrcKKGJK9YXr6ypbMvFM92QAfAPs9wSaG5Nd",
  "key21": "RgeYLCih6Gytu3yMLaGPNfh4Ak5TaeGJbQ6eBZn28JeyR9uKAWhoKSSBMoNzzeTYV1jgvoSBie4GLJ4apcBoVQ6",
  "key22": "2o7RFFZ5eeBhQCPKutiAV8hqBg9BY2FDoihQHFyMbQrTBmRWLbuz7gUEwRRSzCFtpz7Vz9pWrCzaLDPmWKYFxV6j",
  "key23": "4jET6vYcuaTBqDRYBtHzFeHnTJjcMXiiNyivtyuWaa3vbAyNPdAa1cdM85i7awjmBMtXaJYfdT1FdBdzCowyTdrh",
  "key24": "wZhDg1tDLmPvR8SHMGpQa6vXmyTGX5Thwrnue7spy7XN5i5CqPMQ1bqxmnzZJUJWLybFod1tppnxUaA2F9QwuXw",
  "key25": "3UkUvoirKMFiZNeqbcHmmEGq7hjwDY4cV3yxfMnq2hr8JPey9sxZ9R4SciXiCFAGnmwUvaQG7hUtLqYwkHCVA671",
  "key26": "59ne1C4fZPseQtXrCJfjboXFsXJty1nAnR3jY9yMiQMZFbdHFyY7huxatoXgYA9V9g8JDVddCiAKexXr7pi6Boe5",
  "key27": "Wg5orG49fwyuHpwLt6ExGuWjDW6QwhdAphfU8Afh9EaqXkHxHHV1AYzyMDqPTmzVEdryMUZMsMLsKB4q6bcCYTZ"
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
