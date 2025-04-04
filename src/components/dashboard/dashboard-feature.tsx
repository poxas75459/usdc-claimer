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
    "594N6kK9Xy2WBsFR2xQqCQEGR5SHz163tnmkJfgZCFu16y9jCo3xAKYg88kdv3pJLAuF1JioZSp6QQtytGeQ83kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEXDdPnsJ7BW7kd5VWHR5SzJdxMMfmekmT4oYkes7p9XSTcBFLqVr9QvsXxYT5vbXS2Lj5MLfpz8jNxpLoSv8Rs",
  "key1": "4up52BbZVsddRQQgipkFQrjwFMVUDutcdhLCovzTuA1vBtL89USFcppNwSKU1fGt8pLjSzCeY71QkQM1LoWrr3qE",
  "key2": "4p314bf8KzxYPodNiZCdsCMzRNdmpuooQJRcmLkMkB4qUdZVJyHFDrQoc5osmPZFL4Y8n6PzELTXzG2tzmM9C3QX",
  "key3": "5eTfiwd7hE2SVABx3qhXxsv6YcvuMzRFetHkqzW2PWEgrSENyuNwAzeoQ2KN2k6psKnWCucbTmLdTmqrwm9zBV15",
  "key4": "4SMokNWtjxgwUu7efL25janQSNGrTgkKqemsD6CLyRKbqDT4rZB1o46Bvhdr8JNvpdcGh2UtdepPnW9NbGBZpZi8",
  "key5": "2NMrd41LB9Risha1ThWdR9ZQ6Nw8VFM2YnXVEbih7i1u2MTdXhwzQyebie9efxtj9YSWL6SU5Wd99F6Egd5njT3x",
  "key6": "55R9dEqRaZXkVrUDrdoC9tVRDmRfGrHm91dkDtQwZ9foh2zavyoGKU5wnZipT7rY2CXK1H6wEqLKUmjGhDpLLB2e",
  "key7": "3o9KfbrG6K914mABjiS9s92zaEjGk7VHt4NeGzvVRHX4PPxaTqiWXRLn6y4sJmniTdnk1KBx9cmYetWjHMSxA5Wg",
  "key8": "2mFLyCgPyH36bTmWPQQHhUkYf5YZHEPGDd7MUZsMvjW8DwpDvi4iGhbVAN6RMkP3ajKhBiMMiQdPLtyzK2jcE2cp",
  "key9": "3vJjBcvQK4ayGyvr2CK9gsjJPV1ALyCkCrYmNc6fZtm1Dse6zTFcBmTZMG32dwWPNaGY6iFBYthVq4LzCoE1hXaY",
  "key10": "2KfVDyxWvc8xpPqFRvjSMKsxsNUNn8XPDBoTdw9reu4ydQJH6PGjiPgfZxD9sDKVTX1sagFm7KwMhe7j15wyfKts",
  "key11": "5H2bnFJV9S9zUhynu2F38VS7yZvFcCUAptG8HS2bgUQ6eukkzWVSm6opZdwRDQZnjzWfQHVeritLcHvL6wb1PU7h",
  "key12": "5SDidwhEMjeG9BQYHZXrZmbMsZo3qUPTUuasDHFsgn1N9CYCAdaWha21she66DUQ91QnjNp3118UPS33aCspwoPo",
  "key13": "287mi9SbqgZuBe39Z6pUPWKAPxuvELkY27WgsP7bdZ5uerKHh9nFtzD5Pou1oBuMUPvjioDFd83RkPPXXSX1r9FF",
  "key14": "4nZSsivwuyfrAi1QEq6Mhqt2nWEDS6TRScjEVaMJhNVwnEeXEndAQRCxUW7NkyqTZ8hZ9rzteMrZoF1JXvATjUCw",
  "key15": "2dVPfJ9VCGL34SMy8ompQm2YEF3xuSNgxW9FExKY1HXrajdXGh3GReSwc14g3yrGRiY1agbFsRMqebkNy47gwzt7",
  "key16": "2gStXah3m8eyuUzP3puA7rENXR364raHtkWzBQrFB6GYvK5WZuK39jxfRXUg1ZHYbf5rX3ksZsvdczsDAr5NLxmX",
  "key17": "3q1EYKe95uXRyFjYgYRztZnoKJBmNW8BUvsaP7UFCRpe7mK2Gv3qSjoWE16pQ6CaM7XAKheGiYrpEsZXcrcazsmi",
  "key18": "3ddVH9oEcRJ5d7z6cLxm4Wo4NT5YJru3DDgnEpZ5derMCzr3bCdjG83zzZVJFVmuRbwuCnzncENST3mmDGCQ7bEG",
  "key19": "47j7TZy92fqrc8m6P5PX7Qye8Nh2BZhxHSv5As8Pqy3ATazvikRV6dM99cCEXUvPUJonhsH29VhSbT8TNDLzknjX",
  "key20": "5SDJX27D4uPF6WxsV61HgF4iSb7CJwGFZAq9inWCdDM5TKVwuCvjRdUnkWR1L8pSiqPofSAbNm3L9kZJBSdixZ1C",
  "key21": "PfVR4nnojNLXLAgbNtcFuPpFu2Lb2GCJ6LxiMWeD8CEKAWmWD6YkrnkCf2beVZK1uZPsMUt3H8FUWRkv3ugHTdu",
  "key22": "4wCq7SmxvXAhogMcQWVWr1twse4FQHL1h1Kid2usBeJy4jP9Ua2eE4AyFkwL6sHrShvX2rdxxnGmD9WqF96PeKEA",
  "key23": "325hrEfiEGJnrePWmGPZxXDQpWQzatHFXTCYUMfQ2ssT4FXgnAFTHEVv995ah1EP9gbcY9kKfXgocer3G7FfvBQK",
  "key24": "oYS3WU8jK3EeMkdQeqGkPB7ss3NKR7xegsW1YUiLNVXX3bAWK7RrB6k1n9rA5ANiZpP8Uo9kLnx8qovdvxxjhLU",
  "key25": "3Qznt3QJXE7ihf4EJRQCDZbCXqYZSDEYr8fVo296rJdK8Ezwu6DXqpBwaecU8Kj5vzCpRir47dU6fQefiBRkWzqu",
  "key26": "2rM1xCfXG9VG6B8E9JHmbKPX1Spv42VLVrzBxrMBKWCRxs9FGkJLxRwhRh8GwH3gT25qtx4rPgPCBp8RZcshrBn4",
  "key27": "4FTB55t5WEBdCaEaxt5J69iZxRtLPkFMziFkcwen8vBp41pbaSQs1izD7C2Zrx5qPPrcctEg2rtTvz5WvqHJGD8P",
  "key28": "2Mk8PzZ56UHpDzNw2DVJEGsxfaC4mNEVGaEDSpJit8zuh9MH47Gofpe3brqaNMr5xMRK691q9h3y26cz2KxEULP2",
  "key29": "5uv6SqF4MwZh39N4X5Y5SguquXvS3h9L2qnbVRfNxwSK56PprogfW9vjKLTn3doYX4FYKUsAtav1HhPsynYBnCf8",
  "key30": "5dfXT1ag1EtwDnjzaW3DQoQHeMmo7dgdpatPB3FX51odCACTSmKPxyGmwr6ciM1oGAjWUFVmM6kSMo9qBUpR3QWq",
  "key31": "aowKDbabf5AEJokKrd27nxdM4CdDBoDmqmRtGJZuWcsFhwoKSxf7aYR5JWFEmzK5TxtGVGyQXkfuQWGMqC4u3MC",
  "key32": "DWeaZVz6qUb5uLDCLF75rrh1qreDXQXraT44GmPMtmrdt7NGPyb7FMkDKDgpAu4s48q2sJaZxjgWDei3bZ1r7pp",
  "key33": "3TxoPHemJTB3iMAwksu5wpbXuMSUgfD5QinEVWKFno5yodd5siPgzy39pHvW6pvVoYDV12PMPFnRA8cJJq4xSTrm",
  "key34": "3N4GJPtNhJjyy4BJ1KEfoi3CaQEPrWgghQxrjgnLJ1aPDjw6WGGutAfXQkdyG8Qzuu8d6j3DAHmmZ1zw8uoAjBze",
  "key35": "48ynfjaCy4GmxLd46QvN4r6RBxQzfVmcRwmPafYCgvQ8UX7K9p6vfXUR65eZrav9BVkdzNMVTHWLQbQ7g9SPdfiJ",
  "key36": "5hfUPNtaX5RPdXLqnvjuJfCBJRNwYXoxVzuj3FCBrGFdopfuYuBxuioEL1n7oFidcYYzDyvZmrrjtARELnurkMMr",
  "key37": "3sdgig7VPvmS5FYfaACL7Ywbov41oNVwbK6riTHjGRGPb8ntmtFkEaCpqhuQ5vwpm4TqMzfwaLQam3xYPxfio3kk",
  "key38": "5Frb97hgfxQ2K19T6fAUFyNL2NPFa5pC1VEfpyJoZzKiTd4H3scYBiciJDNuYxUprdwQ1tdVWEripomjFtT4iHG6",
  "key39": "54yayeBfZ8NiBfTYMmCKamuxaPtcnJKAN1T17M2KV68nvYcmrj3HY49vKYAttXYcR6VhosxcM4LFzSAkmQNzC3s",
  "key40": "2DMJkGFzLTsSeLkJP8ZXDfkYRFMcfoFkNcDTXKNkwdY8CeEd3nmG1jQKYtj7fZZ5qiakSFbV8ttD9vnog9C6J9Km",
  "key41": "4NEyuiffmTZ9JYR5Z1sDc9UfdCqsYUHW5pJgvtDWikKnQZrrzUnSPpo95DmprSLaKDsuZmsyBejx7V8irisitz25",
  "key42": "2DrgjT12cw75okkyzbtu49GFiGkYsiiqhbKDWj6w9acLXRcTLKp2CjLawft7SrSa3oHsfgvWK1Mh8UNs5xF6WFHF",
  "key43": "2rYRJwUhFqLDNc54c6ob7kU23WkogNdRrkqXo3usF17zkCHBLt5zHMWQxzxU7eMqK914L5ThSRFhUP5dZZm3gkK3",
  "key44": "2SMHbekdQwmT4HxxGEx2uQQ86anCBeHhiHmPX4Wkf4gEd4CD5rejWjZh4gExFKjTEY3QuhPRfRNH9SoKQbBxskpA",
  "key45": "2VTJBa6W4QtkNywF6XHvyc3Dgjmdzzy2sqsgBSS6rbKgigYdyXh393vVCzenRieqzm23uZP8bcbt6P2yeWeZfQw2",
  "key46": "4FsSboxTbq5k6bEdfvsCW7JnyTTCmPzUvQ9hMAr1yM9eQaqruycJLsc73oxno3GPXYqHbxwLdXNUxAqNGrR14N3i",
  "key47": "5sAzxZkmv7BLyD3veNDzd4p7trQJbs4EeUmnr9FJcBNVeLdaGcxWMdTWWhPDQd4GoqXhjGEM3UmH56sK4dRQDKqW",
  "key48": "2L3nSFx2oxRCXM4v7FRGCnfGk5VFTmFYWsufiuhdpuxksnvzSS5qK6y7ZxE4V3DicXRFictQG2sFRMN3Ppwz6AG1",
  "key49": "4Svuyz8iQWqYthjqqKBQuEqeDRawJ99zVC4cGUucAAP4FPgKomf6oKcUcBtmxY3CwFq33VNgnjYHboneZ1MPUiDY"
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
