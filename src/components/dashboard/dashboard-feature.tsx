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
    "3AJ43btjExUnJBm7Uuv5XuKm9vhPyz8WPCBN1qYiMevkdB5s3fyerGnDyFDsQWj7JZEM6HUnPUY4PD5sz1de8YXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCPaxoqasi4qwAsMK7uv6FWN7BetbGyMRcxQZs4XbubphYxCb42cwaKRAmrA1Cc6vgmn6ntWatKuRmuguFZiTem",
  "key1": "3rCaaa1kBBYNKdfBg5hAEkVgyEUpawM25ji9SmPWvkf2t961hcRJquGGEeyoJx2Bk5RxNGj9N8JcJGDrThSuHNJN",
  "key2": "5QgbUfFCPihLm8WSM54vUZtX3L1adkv18mwmwE3ChspziR5t4Y47mu4ARD1vkusqCShYi9ym35m72KyN2PKTzjPZ",
  "key3": "65fS2bZJ16f7F8kq6i63H5hMQJAbJJozdPc3kVv8AutqUYViEPmU7jCy7N2ypuKsvG1412rTjoyW67d4BgNrkyLk",
  "key4": "3eNsyRfC1wjoCMH4yWGNSL93F96wM7Ug67msHmczN6itz8tMhE2WQQURcxgaTM3NMRwpG2KHJp3ustPhpSzFLtnE",
  "key5": "5GKCjWiH4QuLdryXv1LRZb55wk7EkFUULzEP8v6rPoPNxmWapUcHJ3YP1Ax1heCm1DKCVke2j16ApBzXHvvi3xmy",
  "key6": "5P1PpnUytHiRC4mrsUSBgpqBgGDTr4XhfjyE4zzrpWRnuHLrzW6HWFZtD6QHcBE3WpaqpmrPzGonR6eUNNyUvuE1",
  "key7": "5AsfvYbNBXktGcwcCbZdfBoLjP2cetSpf5s3k7DhUf7Xp13WfzXtK8pZHp48A63jncreiwCGDx6bTG719z3Ti9Hx",
  "key8": "4tBQzAigB4aEDc4EXNYFLjaufgFpJLhmAffyXkdU7QQtcCHjdEhFXKeFz7dpRFMmk71yQQRfeiZt1BUDANi151qz",
  "key9": "2HVSuHR7koHZxR6iQ3NqRgxsy585Fi2HMyX9CGhWvcpkWduMKQ2rzxUwnr3bZfACEpcyV53CUd3VdX2A12uegjYS",
  "key10": "79VY2irtE37YTLgSRumBRaDxntbmtTeJ79fSrz5ssHiAhHoszQTB4xCjdJbZSTXX5BmZ9tYoWWZDVYB9bUXwCk1",
  "key11": "4ZpFT7NMuLEjZQskpEGSrebhTW8aHRujAbS7CG9ybzKTvVDSCKytfke7wQTUFcPSsUBskaSGxRdjPNzkPecJwGff",
  "key12": "MakkdR6zr6WRNmbgNrFzVvzDGb5wVkMobVQx9ZokHqAfKwMSZrgmBxcQvtpgXXhDQLRYwrFf5jmWpg3Ty6kjtQj",
  "key13": "TZMnWYCYXfLj3bxvdYgVvskorsJKKgdxNExhg8zQjGp4SMtHRqZbQTBmWNSoteeyQTWtvZuJa2t1hhE8TzegKGD",
  "key14": "5APNUwGT99mrckHJqsTXy7w9So9L7MHuZgmA1NvS6s3Fz2KYfB4gU6sJyEFHXgKNePgKh2y5UhbYtCkkiyoWDsDS",
  "key15": "4wJcgWbMrGbXBnuktwJzQLQXjZa4LxyXcXTL8mJDrWmN2KjvNtLfc4AesmC9YMTp8F4Nffx8YyVStQjdM3PosGXK",
  "key16": "3heR7zw6VUJJdF9L8Fw38fbQJEW8NkKaFLD59CprW1sZkzbEvFkfJADgB3ihEcuVLRfHmqH1p9wE4k2qxHP1Xioa",
  "key17": "3fjLoJVdYni89jJSWVzo21YVYhpGwwhSZ9QEyy3cDp7AvEy53GaAP8L8yMSMSuv5VkJ3gDgeTyZfstLgcDwAjfc9",
  "key18": "3VZiK4bFR4aKLcpu9mNigZAvgGJexbe3qpAn5TKFuocsesWnrh7FB8CoshXVha4SEZG9ZsepVNMYTdSREgdgMc87",
  "key19": "4Xaac7aeGyvAbm1wViiBgoymNtDMiNxnbu1m1nSPYK6LB5VhUcDYj1bdpYdKqWJRDAoGTp1bCeE96qDZ2k586cFo",
  "key20": "wVwZ87pqhgsyQr87aqePedkbw9skbirQbbVsiDbgqzq3b982BFD4oeyPiomVmKiFTAjB2MxiZ8Sg19stGPhCLqT",
  "key21": "5zh2wp1GLuELbM1CtmwpUNipNxoXrvMXKNb33BJh74NAMNsVaXdmVYEDD6jVCRMaEzijxJnDe4Dbm3QgKHuM5hUg",
  "key22": "3TVKtLXPEXME2nj4niVjavpZ2nAMGqioZdFUgXY3BM5gP7eQaPVKHuhzuctrxs3qLPykswdWFDSbC6mGSteCX8kW",
  "key23": "3PZU5eLn4kftcp6ndWAYx4uFcDqoRbfAgyzQtgxYJhocWrd9ABs8VG9U1f2KNKv7aGM9Lzfo1hTodHMthg7sJ9dp",
  "key24": "2XBpV99788kztULMAnKkDmmqHTe6PNwUASSmxJqc7KqDyt8LsRha65LsXkesotefP65WgGJ8svAjsWWbAKR5UxEN",
  "key25": "4e1MRLcTgTWNsCxLjKt4VARCrURW5g3k7Dt8G8bHEWVox8KvsbJ6DTiop9Jy2csZZpPXqHhM4rLviqVS3KdqZGxa",
  "key26": "4qfmGpi4c2ep1dsE8YG7HDzZrjMLj2oDYfgw56yQnNYmLQCGq1fdnfK9PpcunuSTUXKNUK5AFwXZSB5CWDSr2jBZ",
  "key27": "zJDGTaPAk9pXeiEEJSRfEFLsqe13BABQ5AFCEuyLdZQAZvcEY9NgrgYZC7bweuLAeo3KXrRj9f6PrhkuMhpB98X"
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
