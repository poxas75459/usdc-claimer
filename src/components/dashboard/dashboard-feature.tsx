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
    "2Z7JamNVZt1rP4FMgyctUoqBXpkfz6YGGXAWradmAfc4vmJGXb9zuVm92T7y9LwjtW3KmvmhDVFzd8KJV9xmZ96j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYQGvBYjZuhoWepAaCiK3W7hLZsXgmfaEGoqZJbmtoCEfpdwxRj18ADXAdjXmrrq7WjogGpfBAGakaBtFeAb5hu",
  "key1": "5zdMKZeTAddDGW43t73THAchS1xRuUewZpwG6a3b2SfmKfJNJkCANTjXPYxqPab4AVWBvnVuPgKtoa5xcG87bgf1",
  "key2": "3bADTZPmM71Qd5QaQ9RHaXkMFb4oA1rPevsdZMhfqR94yagfrNc9RgZedXEZEvJhmQ1qqkjgrBFqB6ovF4Sevn1t",
  "key3": "2wiigqBKSeJy9P8zSsBsytwTFiTcArCybsZY4yzkAFjYtsj2MAhdaZVCcek5BMKXLuMhNf6Rhu3bQJVfHYzXqLgz",
  "key4": "AD7MFAuzu6kyrKdyTpvXNz6hvFgGAfnnXkuWshoe8zewmrVnd4SbLSqSjhn4eGQHYnnG2Gbmpkx8ZJtwQU3RQn3",
  "key5": "4KKxqhR4DkmxNoCVyurJgDQYneeiqskQLTVANkBShbTbT8GLYWcqZ9TE1T2pirJPMV2GoSh8K5vyxqPjKqMppB5o",
  "key6": "5CqLVLF3AgNqFodZgeq7zeeHm5Fd3kEEwvwwVbCTjbfM7xpTzpXdbbLdZfhNLJcR1QvfhDd2T5hu1jiSdUDgvESQ",
  "key7": "3U2GT9W7uxaaqnsnNFU5uhzMNx9rvPTY9ACaerRGMTSheVyHrqCUMqevRcbfCdJ1osgpWX3FzYtUE7DMVY3ooEug",
  "key8": "2NPYEmWCe1uMbQ37ePuVv7EGCnX7gVXZM3jzYjvUSPWL4N7iH9xnSiu2brQqt7kbqQvwKqEHqMgzp38oiVgmf74V",
  "key9": "5oBEfFZYAQQi792ZCDtf7bonTZZQGsFkkCyFnJy3AYScNgkUrfxULMAZ3iDqamuXwyE2iTvS1CrbQX7pgg5VYbsW",
  "key10": "2cycRh2t161oBAAizirNFwetyLWay6rRTsfCGEeSf2c2qM7u3b7qsugVQeCDtZi6X4KLXu8moZmjZZ4FxLK8cNsr",
  "key11": "2yP2Gv7uveNDfhV6QoifuhKuwbC8EU9LV4mMhj2hgeu93ix9J1DGBch3DnmzRyLSVk8RsViXrkVuY8jzmFEvmAYt",
  "key12": "3QgjfmVqbtsc7YXBKxpWo9SFwJQ4JVYdVuCts7aZw5QXMaL8oRxA6ZCsLpSxeDCQDzLgbdnCCZJQovMxR6iDKrXP",
  "key13": "4ZBNwpHtvf2RYHHh2hVjvvWZ3K8PUpmR2G2F2A7duXaHAcPfghoxpssmszCg9Ar84juEVL4eVYU4i71WwbT6jJvm",
  "key14": "5eYMmuf7Xi7XAyGGuJ3sS2bKR23g63VJYPseXDoseTaBP4QihosgpvdDB2Rg5M3k1sogEpGB3dyVBRhXxzF4S65W",
  "key15": "4tw6BFZX4afVQ3rrHLGzxfeSfXoJ25uC49bXDRh2YHRzKsYZsSZCEe6i6kiFLNYVeNEEUyjDPzGxi2KGPdZC5T6a",
  "key16": "3qYTn6QJ6ZjaU3eZN6yXeQJ9R6r87xWrMSL94rT6KSxADaCv4Ss3LCExup1PByrkw81MVVz34EJcjcADLrA8XWgi",
  "key17": "5wcfNbJncrsChVAwXrg1PRodVFWKKCF1sDbitwoYc1CVnYijpGVq9bbCBaTUW71D3GGjS32Xk1tKyJJTu1TYSDfQ",
  "key18": "5kg7LcVV1sa4Af23eBjvYPJDeHpkyYge5HjRNvD6gsF8EEswuLrB13fya4HwdhSVWKsjZ9oKFY6FrVmhNmu1Po4f",
  "key19": "5wL94G3fdWWgZVEWY4UN6JtEHSPmhDQg6jcVBfxQbLJhFQcsHththBMbaP47wBWj3s8YhRCqHuSp2t3FJZTwB7Si",
  "key20": "63hTZK69vcopL89smt6B6mEkDPABgeHisyjgSaxdswXmfuGqHadqf5u6dSn6P9Wjz3Ks7uf4t8huHQGe9vAMvkT8",
  "key21": "31CmQWPGKdPjBtMHiSuRoYDzFiYRPdhtY7HC6LS6TtgjbFnCDQXEar3cGmGNkG7oaZFcEum4RRGSKTvCRCNGBphC",
  "key22": "GZhYTfn7AGBQrzae1hKKmW83x8iJtsGjW2ERsy4U5gLoT6w5ff4M5TirhsW9sJFTdy6y3sGbyTCguZJVWbjtKFP",
  "key23": "2mtJjZnyawhARf54SygY593baViShkr7wS6BPKxZpc51VYbvaMpx6Pe5uzEyekH2KMw9kFUdJMBQWn2gSz6Q4wGn",
  "key24": "4LByRknnbow9f8W7S2fk2gr2T7H36pvAw2TfwXoBWDPfdUFegXgUiyNxFuAWHNbhfohqqHoQPPBTN3DdnH4hm9Y3",
  "key25": "2pjVWNDWJJxCMA6KavwDMD322Qwa9vajRgfvKqYpWfDvKCgk4TuTyD3FszDgKViVzf8QYtsrzfXpyqzKcjDA31JV",
  "key26": "4fWfS49mgE8qSpFtN6GG8CpNZg7jBkeJpPsV8Egf35EXHN77Rgo4FeaArZkGKuwtT8up3pTgpaJJ4Shvi5ZPUC9B",
  "key27": "59vj1bkao8nRZYhbiWw65SFo473ukHkditHt4sd3JXhdexNnLw2FGHcWGBP3ikhDTSS6rsojNaS4is3nmDTZtMYj",
  "key28": "4W7W5MxX17JvmcDpJALjGwg3q55nF2LX6J1S8W9rffQFJo6A6D4RMHz8pWpcaWQMm79R9knvqWAaMVnp3Dq3ovjY",
  "key29": "4pR6rDkRpqJtPf9EwYHyTyFi15M6mUrF9RXyugTRUrLWMk36jDJECgHvivf7TSoZTMLA1TQ69mVRCQJ9mdMfTmbW",
  "key30": "2iJy6xdRXvRPhc9UCrEifZZRJBvbH8cLQt48F8xPD7xhSGpiXV4ijTDcEPKNycahRkkt1XS9GWYrawvmBQGpeMxG",
  "key31": "gBtfjUfY13JDYQCSD1Ug9vcvQbfrw9RzraYqw6SZvxGFeYTrwjcYmNH9mg7SiafChSfcCeRNPjKjGp2Tj3J2YfN",
  "key32": "4kmQLayCUDv86cTdQQvekT5dVvcqWBftKHmno8gSH2nqTq2T9DSknLybiyWy6T64kefCrxmK9YQWuPURHjTDWX6T",
  "key33": "35shqF17XWkHKQ7AR5ChegXj9LCcZgNXEVgq17wrB8W4pt9wFU5M6buPGRvWdWTyR1e61mZLjUhAhrZuHyRPnEeE",
  "key34": "4Lg99uQbu4wMLgTY57SxGWQC9fuqKuV2g6RGTCCmQ87t36F878jxTjS97jV9F5RjzBPAxa9hMbbPQujWUoViNfyi",
  "key35": "3ne8QK49MXWyDSrPdx4CWLvRzq8Kj8ciPztR2CGXYRAVbSCtjJmj8PMMu7xbxDeP5MidHoRKpo8UHwDUb1rFLS9d",
  "key36": "4v5RTSs4R1Y6HV2mrAzEyjwfzRNZw4vgHNWCAyAyw9vJy4tWXAgjoa98EY2ympyTuDvnjBcUah1z3pq5uyvDnDin",
  "key37": "2cN1ibLGFAZCzxjJQPAxgv3nJtaSi55Q6Uihav3dvXSJYgznhps4V4Dg9MaNGsPSwrbXRXS1Q4qRNfiQB3PnQry3",
  "key38": "4BFJiSLDpfcj2cfmX8UUQVspJva1F9DJznf3DmJuDHx9Gm8QvpHcaeE3Jygy1oAuZz8xLUDRJBYHYbzmf1mw9jLm"
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
