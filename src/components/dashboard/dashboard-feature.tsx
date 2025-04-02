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
    "5PucqTMeaqzVbaY4rHoHPTrZFRVCyD4w1a59FhNVycJFCo4zfEMgBf9rR2GifYipqrgnHBNiEkqPvitNqakQ4uqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdw5xrwH5PnAbqLbfPnDw8a8wbhUqLj7ZEX5GnB68aHcDzaDEq4H3Dq59qWoUpHWfgkBbLiyoZHb5oKqL4WZNSF",
  "key1": "3EGGUoQ39GfFCJDtGegp6shJuhbCuuWKZVvb97RZ4xcP6nz83LYdaH8hfzx38z9x26jCwpE1PeQwjotSGbjiWtEP",
  "key2": "47FDhHdDSmyxtAYZaiDdxUuLYuxn5vZSCCLEKSDNcW6koDzNTLfst4kdLjQH3xcKTrf9P1usz2FNDXBqWGNyv2m7",
  "key3": "2caSQ2ap3sbSBznjB5MqXT8XwNX3TDMqqj74M5w3mVdaQxtcj4thVQ1hWUGuRSPvhx1fgyNWzm2wFuTL2sWtic6Y",
  "key4": "2YvbJCGFgYt7a54LG5DzAQVB4SZ85QVPYVGa2f3nwBQM3iAhYrWy4JNcCNUuep7TbTqs9Hg96CShryREKGBkHpu9",
  "key5": "5NGvUiQXxA5cAX9quubgGMmxWo3jX1SCgu1CP2gfLswtKeo9pKfZ3vKWj3uKWpPaQsdVSx7c9sh5gwnV1Yqzkvgf",
  "key6": "3u7vPmu5Lwg5XehpXKi7qgMhSZ9bWx7yAo94koyyzpodLAqkEbGthVmZzAbNqsHwFc3N8v6eYPc2F5TcBsFAZmRd",
  "key7": "3cA8EWsb4Y5i2vaLEZtKmhmJ2a9eCiiHy7CXft5hYwszCRJWaBNxM2hG25n7Y8GFwAPyTmBoDjR1UZuvPnniNmLg",
  "key8": "34Gru2kjsGfY6gYkoX2e1RGyuZtSyrfcP4E4NHnd4L5eaCfL6z7795xvjt3S8jhQKrtDsGonQGsJ6tiDra4XGMNh",
  "key9": "32cPi6xeb4mQsxE6ZSztoM6GdYZeeEN3HkrvTbUTL5ZnaN7aCEhbiuq8cjQJ7vwQKUG75cVb1g5zNwqCJbF6284B",
  "key10": "6zG6YJRnx5pHZvrbtA7WWuZuC3Ns7dVMnWD4NCqVdmgcXRhXLKMMCkfyS3vKgS732S34wgvreEJ2bj5rpcewrt5",
  "key11": "59mEEicPSQWyczRCqCbwktnfYeDax8d7FodLotg3fFNnokSRf8oPuQYRWxaV57UqA5tESj5JWQLJHkDCeyUP8Qq2",
  "key12": "iqCBjnRqKhaBap8aos78TmvMX4PcHxwTRCeGq4Cr2B1CmyzeMZ6kMTKqqwYtZuzMarP8HJM4otreC1fEynsRPpL",
  "key13": "2gH8s2yZHSr2dWQTDhVze5u6Qda4RAGi4XfKsp8XJELMdJd9KwH5ZEVhaN2uEHB8L5quZbjNcvXXHZK6rAmTcMcv",
  "key14": "3rrxQs1k6Gp5Pc6hKnP9SkpZEyoQHHNMZcAYRe9bzM1d41Kpnbxn9Myhr5td1VAY4o8YdDVznasL7KqHg1nmppYT",
  "key15": "2rFYxvLz2RihsNvF9z2tUopgzM4DmY2Rt78gYM6XfB4caAvSNcniVW4tMBtrV5geTM7oR8jmkM4qbqFaUE4fVZSr",
  "key16": "49TBYiqvEGcX74174SaScmjfeo1SPpY5eusCwXxQbXML99XZ73jYZNUzqEtDP3Ybp1ypakz9mftY5AoQgRZggCXN",
  "key17": "4H33sKDiwKHXkZTRwXi6Ki9L9XY9WKokKW2YfR7BvDS1Ywv1GybJWxpzqXgYQAhYzBTyC5Gw3WRxxa7XKumFNTq9",
  "key18": "4fhQA5hBe9GdSAYvYZTzZ3PkT1KhHgVr5f67bRjkBQJc9MFbGDdr332PE3dzsUEFWmNtYRPcxxneJFCEEr3L8Eok",
  "key19": "48SAUZaK3H3iHx7k7Qc9W6ZkAFUtbrSHTXBkNN5w4aMQcXWg6Xjw93UbasGqJTpGNH3tXxEjuJJkHYF7dvPPHQvv",
  "key20": "2nY3uomrfK357Nn47WgawDEx98hoznMhwPhypnP4aBektimXRbAzvKRW7J98tJ9CLkikdbNgofCLT9YmLF835rZA",
  "key21": "3RvJB9QfcHNHg2gXYueTW67nMRAHjrW26uqdVU1WDiy7YwPjfGzdNMxAVbCiWyv63R4KSUcUUx3LHVAniKzzetQf",
  "key22": "mZbyVXsHMDcBUybTssnRebwRH9mjsWzMAbgZDxbfqd11P7WtwpkWGpMQtYfbwTeimt4C6BwasjwjG1ojGTHqADk",
  "key23": "4tUmmyT2H7U5wFpFiGRZ6tMLEHKTEGzXBw6QwcmJMbpkfrREA3QpN1WFooXZqrcgKKeoy3Tn9WHTurafEbbr1ccV",
  "key24": "3pNzgrJcqceySKj4TPz17KSmJRa58ZUPZ91jWX6m9mHBxhkH2wU83pT4MiSv2B1u4uUfzBpztGSRrQiyLUhEaPCN",
  "key25": "3YKze4HXJ4mamSGCePAqD2qjA9kHek9Xbvd3VyvCSyAU48DKLrBYTT9i18KDSqZF6GTcicFc2fEPZP2KXc31KGks",
  "key26": "4u2AHeDbxJk5NK7ckQY3ydzuTRCFMegxXW2jFSy1eozDb69VSwyzCJkivHWsj6GN9VQuX2sPJ8igWUpqc9DwEZkY",
  "key27": "61XnX2QjrUeLdnuCbRAWeJtNkfT7sqB3GshnXTyEuoLU65iptuTRM4ezZrnSyZRvDFHm6YC5rfsREdcmdB1dBJqr",
  "key28": "22TJhW7zm39oWFthG4r7FLHcxriWu2g7DtjDErGDYJH8c8hkkAHQZPKBk4KGGNDBpUgDGfJAJooh2WJbEbzSPZyL",
  "key29": "4NVztvAnrFoqZZdGPTqN5uD8dUrwpHirGsPjbFQN48WuVTxAjYz4coF31bTC865KXLXJ9uhaHWFMmHExYp1LM3pC",
  "key30": "5w9LdKDMTMQC4kGq99MutmsEqotQDCKXgng3voHkbXkF9CU1gEpAnDY5BSkRqbGzkCqmXTFMqHgZBQKBUDwbL1oB",
  "key31": "JChNKTU6tyXd7t7fXX6AXRZwZKgA8DKgEp5jkzCWuDeojwU3hiLkCRpitTV5owY5sarHTbauto2S2wjuYpeWLhB",
  "key32": "3GeSJSewVxdPSAfDTGWuxDPGkDGw7G4qpnA77xcomCoV4hkZeuiGAozqpmYnP9TjK3cC6CAhGyo8mmRTsAmT5Fmj",
  "key33": "4YZzeLHn3BLo2gd3XDH7UAsXu1XFJGpgNRQbZ4F1JoSNifMTTs2z8Ux4HXLewLNRVSsLGcPreWE9c9eF5TTEZsFA",
  "key34": "2FxaQHrEMA2FouWuWhqj1zJj2vnW1VyDQnfbdPtQ3UroKetbPAHKbQhkBVND32aRCvsXVRKm7bk2Mw4st1ChUR7m",
  "key35": "43Pbxd8rZFiifdsTFVw9md715ccKdrrzSGmk4pgWhirMKg1XjTMGeRf3LrF4e3Ze23R3TpZnsUbGBgAWthVTxhNq",
  "key36": "2gT3x4tLhtCZtaLWhopEosSFHFs3VcpRvBZdA9AmY8gbguHVDRWYfy21GqhwKhmX5G3hLX7RNjbrb3Lb9uXmpVVi",
  "key37": "2TA7G7xUbPcqZeNuo9ZiC6xxBU3inpB7FeyQGhy31Lo6PfLtN94JVCmj7G8sgQhrKhBH9bb7m4KBppKyQJcatarV"
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
