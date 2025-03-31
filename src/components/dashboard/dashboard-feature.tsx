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
    "5o7wnX3ENVXvsw5KaEsdKojV8wiFF12cP6tQhtQYLMENEwM82Hrcg4rPZfjs6un33f5PaBaKcdmy7NELwtMcntUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKDBacEfAzRkeKfBNMRdEFx3YQaAPEqbJFp8zho6b7KgZeJt5qDxGTCohCbPKQwnUbdzYrDXWyiscb8iawmzUdj",
  "key1": "6UoNW15BxD419iMVsYu9itT8vWoaQ3WWCuxCKzxojwY6xNE25uMCB8rCrqqqNaSHijFWpBRQJPHb8uGGdywJxaC",
  "key2": "H59em8gn4ocCAeSp71MqgRrFzr5XSeqFfrQ2fPzYxrw6Rex2hgM9rBRUPGN2Cm85bsH4DTdzofx2aBRCzueuert",
  "key3": "46jNsbQZzCouH3FCNFkzE1Vv4cPK4jKCBJQZ1UKaTENYA5U9XepRyAvUkBUL5BxWxaXZSx3dSXM5gQimqnWXWNLA",
  "key4": "3N2wGo63HaJzF7FoyR62TVtUtm5L7655bGUaoe9bPe9i1JJcywU5fmyiiynQKDAW4sukcAUJeKu2grfdqHoeFNHb",
  "key5": "2rsDYuhnbXve3w7EivfZ74f9aC4v6V7aeJ6XRShc9aDr7Djsiga2SSSupboSYfUM9fYEMVofEGfU565Qm2N5Wj11",
  "key6": "2aZHyX5msi56kQQsYjb8qCKWYp25TqPdQ5fiP2iBY9ynDFi12SdJ5zM37EfxBkZ443Lid5coKnPF3gEExXhPFWFY",
  "key7": "5MACdZudwmAHZgcfqeGYGNk7GoZa8XS2XhcJyJcncdikdDWrNB6EpS1jk1nFhPkRUddXH4tKtWUS9wqHbQ9hHwXz",
  "key8": "3dwAnpFa77GpY4CJmsxL1KQieQfs4BcHJHPkHjxRzPyatKpvYx1Cx93onhUv2uB8w5UrJ6pMRTLRQTmSMnk5M4wL",
  "key9": "5vjJqZD8MUjg6vLLD35LivfN9v9GGZkSSWTu96S66Tvgt7mdkUpVbojgFxmVYWVLvwJQMXX7fm36ZdnT4owgXdCR",
  "key10": "5pgDYrs4qRGvXnWaEPEWAEasUNzFGJQdyzAZLEMU3MB2QELf946WkKaPPLrsdqtmhn88aT9VF78HqPWv3wZmRkHw",
  "key11": "4rt17LRDjhxqzzmrzKQqui7G69VKNanaT9k8GDhvpYgftnoRxSWKrNJk2hRYqQQEfQdzjk4ZMs1r8N9eEKAzbtLf",
  "key12": "3Ayg6BnoxZ7NcrJsp5oNMV17egzqzziJG8gdAhHC5i1qs9s2wAuPGYXkt9B1McK5ywmoiALo5SvwHE5WSnsTaRyG",
  "key13": "LXSs9KXuv8qdRuTjcCAuGUVgzzD3URPtXRPrAWek1ixQ1si3vXvyRGWBsmmbDcRp2B6AfAnqc8taEuy3pMSrhqh",
  "key14": "2axvXV1oLq8obMDeH1bB3xRuySuaLRijMhvxJY8oiRA1nPRf7qJMD2iofmwaV7kyesxM9ksXG7TAPv6dbfKXmpUx",
  "key15": "3v8JJQ5k1WVMvVpu6ZNrjiFAsKAt7EpY1nRjtcndefDyi8PHXJypSBSPwtFdcsp4KHzuk8oyi6A4uiU6xwa4XaH8",
  "key16": "2bGgWJkoGbJxcEwDPRbSMCEwRRw4sKeVKxHZGUv9zXJsWBh2jGLYhwSz4VbKRS689CxobXzSKEe6zuvWkoTkvWbB",
  "key17": "5FJXKfZwCAiF7SZ9zFC29RZHT3SQMZemBBUEVayv2RKBSeGNqa9cp93dw2sznEF1hcDL6nAxzCv9o6Uywb6eLjQ4",
  "key18": "2sYtqRFgyDQsQvZZZVjcpWbvj7UTELAAx3FZCgT9uUjuZPApJBXbkErbEc9yDDJUUv9i94Uh1EgksCQFdKeyqVQD",
  "key19": "2Dg96JGhHFiAFGzo8LuNFVQjEj94YkDXeEQx6G5NAnHnu6EibSVuiiurjSCHULFRfSQuJAyLTZbLfS2VNMMSPZv5",
  "key20": "2DBYEc8mTAMAFx6jxqmpnUkRuHGhtd4VLVhHVJR1VQ5ovHr4FqcJNyLmFvRErhM7E3L5RYrNqzPvCAP3B7bxeRqV",
  "key21": "3VN7B4tJwCES35pwrEwA6wsZrZWJSfi76jtmEKc4zoSiPWcdZESuDwKu224AoAXEkERmFdLwmeNWse88SL7CYy5A",
  "key22": "5iZkaiRJz4JHqg3Vw6wBwrim6cppseFQCrQC44sbGEo2jDt1K4vtX3j4d9gRTD67HxG3YnZkDtDCKJd14FDNBtmV",
  "key23": "2v2Hz5krJHCna3hQBw1y2xeRd5ioGAV2cUFjLyAjoDYRwcPE6VxqweXT1UcqukuifrSSWLLicMFfuYzEq33Lv2NF",
  "key24": "58CCYMVByCPo1hjpJxE6BTTUMgWQeksz4Sd3KkGxWvN53CwzJ54SEpKc1P6EDcm13MDB8ewP1ZwTgaT59GJJDNdG",
  "key25": "5iMtQXnBma2E4suVJHkCiRbY6jYzu3yxv9aA2DDtfabWhVzraD3DrnV4DJGyQEBGFwsdxv9op6aerv2oKscEynoP",
  "key26": "3McUgTCZnrLGh4sqHi4eq9egDSxPPW4tCK8APXcyLYsDqjbo8AN3vuSL9zGVGv2fbu1dch5saS3wv2brtFETCX3k",
  "key27": "2dC6eRc4NB95y7kzsN9SZHiL9Tv2kyG9Eh5akqHLjBTUwEgM6AzaB9MzPDy4Gqfy8Jgm5Y2KuZvJoSC37Fttocde",
  "key28": "4zFysc6Z1fBUv98E1Svo8p5GJUZRpUYieXvkHsg5PN7KzeGcPpLDPfwoYLvVoGLXZdaZpkAM2bpCcRZpQTM5KkYv",
  "key29": "4fLCSagAKcdHq5W4wSwbaUhoPVXpu4UAfr6eBZSjgiFWzSycSdsjEyqEiKpWBbttbFKfPeE8khaahH9Gz19FgVkA",
  "key30": "D6w1KYm2QiN8a5PGpbHxFBk9gVBKxNVbLRZKHD1oDNZVWuuiGKfcesZn9CbAjoVu7hXWPVBR7GGvBVHzYB9ET9P",
  "key31": "iyMS9Gu2oywzqoyag3frCkw4fPb2Q9z73WVBoMjJZfNacMvA7ovhwWXRtAMApmpB1M8aBpQYb6hLZ3xLBgjycUA",
  "key32": "45wvem57ACqQeXW4ya3omeZ59gdayMzkutqTjGwjey6W7rUKqz8WpW8ppzvahZiPBwx8UcEguRrk8i9oh7XVY5oF",
  "key33": "4NdjLdBe5sPsUct1iqDaXF1hggaXTXfCoDKXuVk5vnNGYGx81Mkih9F2KSPHnM69wuUx1NhD86Df1RoKTJNrtPCz",
  "key34": "zPgDjoYcVKCkPJkDf8syNupMnwrbEjugbHycppcXcPgiTFqF5x7xqKER1dyXW9M6k95sZzS9yf9fqsQQKQaXyeD",
  "key35": "21GhMeU6udydUZUwg1A4TX2P7oRiQzF7gBGbcxemcgD8zimHgR2Ahfq2v37wd1Cw4DUj4SSoWFPWeapdZzKxh8dL"
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
