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
    "4oKTnnYBHda3am96qyAmMpQG2DnrxG6WTFAqvBcGqcwBHUuvngxRVidS3XWiSMJv5EQyyXiue7rudKjYffC5wkzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEU9NoSYgM4vTGx9JuWhN4Ry9dui8nbj8w9MQbn2etG8Bbin5wxvmJv69CPAQaZEfEfzs8fhLvEiNSrVLRjtgqE",
  "key1": "6nJpQBM5E4GGjhrkd47HM9M4XKwZuJ2fU5G9ARnCoAQTnvgkDuwijQoxPA2WCNEfRV2gYsrfnSc6tr6dyaYJSm6",
  "key2": "2Ebq9WmH79mE8HipZMCZC2YAgQTWT9HoJhhf6QQ77HFQAFu5Q6vRqKqaJeo2s3nGVt823brFTwXKkgeiqyX2fRc3",
  "key3": "2gpPkX52JY3seTf8vjGWcsEJS9DvYBGza8sGQmxADnYsgDYwM6UEhByQpSVCW2h41ByvraHfDaUhNXW8exVTCr5h",
  "key4": "4yw5TjNyPYGrN4QVNkhhSjjE1JZ6mBjjFBugumndEEcuyPtG1ENLMVYfHmgwCmJzBNyaUkvVPHZcuU1BBedXYf53",
  "key5": "3Rk9KbvabpNuheM5z8S4pHDgr2K9ZcBKJotKbf8oVvJUSfyiQYSDVpd6f3sLBGWxhjwWsHeaWHvLc8SMqPFMKcK8",
  "key6": "4hxe1qnmoncpiuWNJCVcYbhW6cQdpnq61ugC6CB9hfpj6LUNm1Y6yfWkhsWDBdcBA7Kyk6rTZkooTNbFTQ3DCDx",
  "key7": "4pmD9roM2JS49X7jYdpJPVvhLPP9Nuj6F3fgCEg1g4WP5GXQbqCRLsUV8jBEutzmC1aifx4iUJnQ6Dbd57jizfGb",
  "key8": "5ymT9PHLZrAsd8jowo63ngYAdNzwtb2HvC2f13kUxFasuRcwMeUQVWcxy6AaGZoKBjjHrtALRbNLHh6Qdh3NXfTJ",
  "key9": "3D9NwEDATU26vKvP8eCdrSCb3Jg9BwDk5gJ9aaJFAgca3UGAaYXxD5t9PxRmXbzQfnau7y5ZXnnunSbt7wCA1yEL",
  "key10": "T6W5Nf6gPibm6FB1BXgneXorENba3kC1Gf99jWjTtyi964xQEd1t93XcwpyJjx7NVyrnV89C2q12wG2iU5t3UZN",
  "key11": "2yP4VFVcF9pf9ymXyC96Q2SxJcA8WpHW11RkWZhHfmjMx65Go73pjuoApcANrxwYSf9gP7cB2GMCPfbQBF7jhYkD",
  "key12": "5VokZiWgSFqgwUMnEBCnVx6YnK5krNfD7Njh5sxyrh9fUr3KBtWugRo9mjBcU9J7dCn5HU2snTa6oFTPCmKNL1Tk",
  "key13": "3nX6gwqRKzyDMrheqUF15dorhPHGXp6q9vcpwZqkdTMFTfTjZLReVKgnBVaEyZYBz2ntEVRd69qLHC2bLnrU9iPX",
  "key14": "5QTKDgutwYkgR3jox7JtxGzji3q5bWVUVygkYqUr5iVXQWmbUZFGEXkumkb9ewh3UwPuTnkGe4QQCAm57YmwuApw",
  "key15": "55u8vuG1m8zFM8Zpk9ACj3nvapiujj8hmAS6V8cGdAbZUCtGTEAhwAwcW2QxWbdKYBaZXvix72WLpunvpQiEiV39",
  "key16": "N11NE5qtEADxwDRvia27mwBKEDVuhnu8p83xQTJspDhw2cofC3h7RGrfKzRGtnAmjzphtDHGGvyWtWAhQQTs44y",
  "key17": "48t1uuMNVCeiYy8huHRK8rih3Si4sVYfXvRqQ5nRjHUBKkvqmVELbCnc4zMbihSXWhDHXBvQ3VhJujVxX55bXB1U",
  "key18": "2cYih11tdBj9jfjJXn6g9bYtsvMHmUwoAwpgxfM116MzjTRJHbPURAhQ83GrEHWh7Z98ha85tyxLeKq8ZG3uhV8g",
  "key19": "4LN5DJ14CQJ2HZzCHCYKfW8NsY9TtdhGU2FFED7k2ZhP5UyYx5d17FYKwPVqGcLDsJST6zJ6VwMvEeL3HW31qpU7",
  "key20": "UMEa8V8yxQGJ3wV7ADjKZuHeUeHrriyySUfkGotZNdS2QrT3LVU2vB35uZN1LAFTDTrsQ8NCvkV2vLZPdfcs4Lx",
  "key21": "5xM4gWwWT6mbKghnnW6EFcSLgYvYhFsMttSJhsVh4hfxfTKK2TKkAqG79CHSBy99yCocxnXPYGQJvQXFBC2LmWER",
  "key22": "4CwHdvsbW7RKGQsDj2cQwtrfNcbdWgXLXhFieKsMfBuwhdm7eq9tuBcE4NWt75mz5wgCVfd6avzo2auoMfPmuyWo",
  "key23": "65tssDcLa9TJtFCTP5mUJqfHjcmnj1ioLwgLUEnt84UoveL2xH88GtnjVjnEu9C2Q2DxV23gQ4cm6H35msUETscR",
  "key24": "5hspacKMdt5MT8ZqqE2bA2UV2R9szK4ASVLmnPefJD2GFju4Neh3CJjNQYr9RDit7StCgbPPvrFL5vKrjhykPqm3",
  "key25": "Kpzib4xV2d54tP5Hs5Qb2ARqcYbzacNX2Xzqu1YSK97gziYvWnMfpTkwYewXHUQp8TkEniFu9y7CJV9wLqBQpRN",
  "key26": "27KQe6zmZNeWYiW5AhgJfwShKgmgTFtTJRWvRE1a39e6amSCUY7gNFvq9ap53GA8YUH7SWxkV5AnPMkc1L5Ldn24",
  "key27": "2ooziAy9bQG56yiWQAcWaHfYyuSUwTdZ9ixgEQE3jJTjAGok9J5BWGQf8SQjjYNRVgzV94Lnqr2eGmy6hAU3hZkx",
  "key28": "5A3PcdZ9ADLAUeBJcdzTkfjp9gtAHjhgyuEgQwBNgFGDobXdNY4mp9LeBF1NCCqoP4yjnZE1g8KJ1Bvkmxa9wMdE",
  "key29": "53g25DyYwDLMN65uPpAFzJMb5n1GBdZdSQrYH1bkKHzWCxsqyoLqduNcwyDFyEbm4vpuq2xgZtNq3KwPwxghc8Sv",
  "key30": "5QSnNbE2ENwSTxHeof974k6FY3t9Z6J59f3csNarozvkUWy1TPwawttKs3PzvvBn36qBj2uSoiSL1sQE2f43B9vv",
  "key31": "3BHSb9nDoC74z62DWX5fURoE7HvR8BexLUM1mvL3azbb8WxugRyahfQze6B2SzycTbZeunoa3hxXBiTwu5jdADJv",
  "key32": "2fzdkPzqYF5tor7dKucecYzDsBSBsxBNXwXwBjWcbno9EygarB729pKsC2jjMUhiW7uQ2SNBkBVwre25at6r1NKb",
  "key33": "4ngprZgcG3uKQF5dPFQRwqMVwKUZRy42azWbTr4x7h913V8dfLcegi5MXjcr935Hp8Yg3XHYp8mkrcZUvpaiC1Dq",
  "key34": "53T5UgKueRUWWA5Uqid4bEkPyr9puSdaaLXywPFQiacAcY8ahHvQjDR7gK5XvjLhkjWiHnC58cQp6YBqHmum1iTz",
  "key35": "5kXhXJP2Tr5NV7GvjsB959akvr1sAP18nkdQCWyGpFTW3zvTcxdjRteoEjSQduV9NSgXpDSRXLFfyPiQd1aMimDh",
  "key36": "2ArtnXgHx5wBYCQVGQPdGKLwWpoPZb2NRGg98bQj3VydDWMNgHYJ89NBVPN6USTntbXNGW8zcrYjtVC5A5KLBwKv"
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
