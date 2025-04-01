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
    "dqVYuZRhdpSw8Hbv29anzAQSguk3bvpuWNVJyvh9G7APM5bxWMYT43o9AmmF4VE5AxuVzJwMdfWwcqqjvgXDUKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127aaZ6wvL2d2kGXcGNi4KmYURwdExKSuSdMBcdcgGPp3WuYz3u6v7ooPEhxb4v7c6QFxi2yZUVkf5dw2YqdTqZX",
  "key1": "21MTH9RRTEqatNj7Fm8E9avQMQPCTuisascbvNLhWHkSLK2BnrADSf1v2gh9TwLKgCyAEMYbNYFFjZeq91MVdRZM",
  "key2": "3FDawto5YvQ3FZ5cjZovB4J1Ju5Ft7M6zaam4zHT72Xa4R6dh6sshVdM2CJYTRCacMtJjgSgco7Rc8S5eFRtBkQr",
  "key3": "3Xft1n17ARDVuLCPysS4jKBhZUxdphe2LMFAQRDkq62dqvxMrrZ2tiNgoaWYzrxTDzD1qzeiJB4113jrY7ksLmTK",
  "key4": "5jC1zuTPAHxAtxFXjxDkqTQwnizt83K7v6eL4dUJyHezwqEFz1AYWk1KJNfNcyeWq5TduKNMbnH1m8cxDmdhS1LT",
  "key5": "3stBX8xu2mNB5ByBufaLUwMJMPVGaSDNuRP2KiL8gW6ouv11bnJoetTv7naigQpw9uXAf4vEbDX6XKBSt4NMEXU1",
  "key6": "4LcoMBmdcbLGM9Hq1VLXFpSY7dex17zQyZGw3ECqJGkGZZsJu2pREpdUrULPjfnFQW4Tc2L3fKMEUZ6RjcFkBam6",
  "key7": "4pbwfmZNA7vKc7zQLTg5DSNXRGVrGmoRmmuthjMUUnLz8CLS1rhomTk4xKVioSv4TRvxvxjZkJtrqZhuAd1kFFvA",
  "key8": "3XfZ4sUGzPNWLfU2XE1AfTBG1fVc5QxmWS8MGHL1XjjB2KGdcSYc6A21tnan8bsLhGkwfQsK2FvQRQGQFou6WNQZ",
  "key9": "63bvN7M1GGDZuLuLQCnXB3RF2z1cyyjWXNfQnz6MWrTMLia9zJHGkSti8NcB5wbSvS8BPMP6QmqubkVBRXt9foVx",
  "key10": "42U67eDEjYs9vzjZVjfePQCc9H93uC42QM9NVy1DPuYwWz1n9fC2z3MKtqFTCiVXDyFfLAqqop5sZ6qWGrtD19Lz",
  "key11": "4LmT6sV6GbYyw1brNjHzmi6qrUcriAFPq9fPAytnf7Bth872jvGSQd5s3uySkUwgqV2L2rBX44UpU1s4bXkfN2vF",
  "key12": "5UryFctydAnHmm1XBwewMQ2g4epameEfvD22hcJeao1Ngf8qtQmz8HmtjQHn99xJbMQnKrgH4n4qmwHdm3fS3uwT",
  "key13": "5M1JtwKQUd7r9kR41pbu6XmZmAAEg8ne4Y5uxWngynzmp2Tw4jj5LYk2uFZDw3PNCf6oEpV33uvBPQ5ByUVmgpQW",
  "key14": "44eYTFNJJYFNjJE7p1a3x9kbGSjrRx1XEgmvaYSYCt7scC6FoaUBn8j1SFHdGKU6pFw29fBF6kJV2ubm5L4fPr2r",
  "key15": "2WnHTZE9a1PWLm7bFjHCvTKs1BGUaUUML1mGWY1JUnEZNNjQpm2HFUUSp3WutVsyK67yf1Hg65zZXQk1dgVUVK4u",
  "key16": "4545kmL4NM7ZzdSARER42ebi9HBjyEfeys2Eski3DjQY5GTNXnx5G9v7uWQAGxWJigWVbhdq3AdwzKwmYxoA8iuq",
  "key17": "3auMWvcteh9YvrDd2HBSYk6KARpvrwH6Y6KtK93E1j4jAAxnZD3FZzHPoQ4AwHAZk7fqD8JEFabpMaDrChUr8rVi",
  "key18": "dUpFaXeBDQprN2jnXocp63U1QZHq1HLyxtzJkMoKR523pobkm2M1oRrBc3CKZgkDXca7LeguEwARHxGukP25E3U",
  "key19": "5NDDiTDuRVATp9qCGnX8XZKo21UJxHfM1eLp336M3Lyyp8ZDuMKmR8qUpc8jFGqB8FCduaKcGc5T9nScTYi19u4f",
  "key20": "4pBcYPiAxiaQgVmJpZEgAUkHyHZn3HdcFjBtY8JrRwFguv6ML7BWc51MagMhrDfeCUq2LVeSFMBc74LFkKGTM8fU",
  "key21": "2jWTrWkEPMMy8q23Nc9nmvdTZuoDJkhvrUWpM2yGBi1MT4VzWywjkCaa3MVfsVKuM5zSGL83ivrqTUwB2dHGtxfW",
  "key22": "2HkXoSnWDgD8J1ZR4poDy7mycGxksY9mQeoU9YduBvwmRtmgcQsHV5ex3Dm8hYkY6qwdccc2kQ3LhmbcMA6QSp7d",
  "key23": "47PrzJbQHQ1WW4gdKhK2z3wW3C1oZxBF6KEGrKgQjuwSDNVgzCXxKdLA33RPiD4c3jt2Hbf9y5gXowDqavYDBkc1",
  "key24": "5wZXtwMGukw1tEoFaRPUrzEf1iH8GrhwEzjxXREpvvAp4jcEoAc7E1imZNFGQZWibkAPNHR5UnqQjAJzNqGtmzdE",
  "key25": "2vWZZGXcNZR7m1JuYx49j1TGuezNP6DoR3zok3iDrczV1v6LXBphRYNJ2C6kZwpv93vPcJERtco6P2BrnwC9T1bP",
  "key26": "zHeNXU1Rw2V2BodDpxnn7rndMoAD5XBTy5Hh8VgDowy2HxhiRJMwbJu1wvCDugjfM2wcZe1RkbGfBgDU1KLLmKk",
  "key27": "7FHrDDRCcfttr7VeExm5LxgLqADneu3ESbpaJvcUCTjSYsteiuKoSJgHJo1cvYiRKi6oGYZp2UJGVj7mLodbz76",
  "key28": "5qhm4LxZmFVdY4TtzBa9jyBQppVNq6Gike7kqJS6nLVup4D7mycnBUtoid8UWsxo5WCnn2tCKhs8zmjS7zsoG67m",
  "key29": "3RChMmrwanzVTEuTsa7T8Ndu3uB5DSrSddZ3befxHRmUynhxh9vAPRgEJFEMGEKfYHoqQSPqoQrSv5QyJozGwqvB",
  "key30": "vXC2TJRMCHZFsE7gqs1Fzzru5o8X9KadRjSobbF7boQPwmj2d7oehFjGDqC2JXQu7XpFqueikTy6gXxYcd4SgcR",
  "key31": "61egCcXKX5kTHRzewEwoJVFB1hcrUBJYcu7BQiaDgn5TDXbhTWvfBzaygwgZNQuNDMnJrk6yHWANp7T5H75zW1Ur",
  "key32": "4wdnYfJDVoLJbqtqLg7WxLjgU8PGz15Q6WaYybTB2x4bKfwWNVpLzWx58QJnQ3AGhRwPdtYQXvTXEAXoFrCQx2MW",
  "key33": "2YaCFs2YRQZcKk3PQTyKeL5ZZ24SELASLsfuM4AqKGwJULJkBT8m7gCdCx3aiJXHC4ueMNmLhhqpbtu9AYNrabku",
  "key34": "2z6rDMfjvJ258oxtRGWjnJSgCtYGDS9DWuK22b8zkPLm3xdWEPyf6XnhchEYMN7Z2g8NdEs4FFNMA3rMUq5B3YZw",
  "key35": "5NovC5UwinqMzi5Bn52jwCKMyaUkSSDWqpvtYEu4ajUvWtmVymJPGFjwd2XxWpMcqu4d5RSxWct1Kp4VUufX57dD",
  "key36": "3Q2eJJz7RMAjpnVxrR1nBsvrX6UhuwKsEoknPccQYnhkcMb6HPG3Ze5i8hpzgYBSiHZrFRojyBzuV8F1odWNHk3A",
  "key37": "249xy7N4U4k6CdGJs2rkZt9seCCrnRjRz5TbDKkSKPqfiMjXhmS1QdM5yp6MmYDpJ7ze8eKYtnqnTgfYooWRGdwY",
  "key38": "2Be5S5SADwKjHEkjakEiSBDCWLXJyfWLoXyuPtH7EK5Q4yD1mdruBybnGyBXPCZCortdxxZ2qN4qwzgZ3ntdyc5r",
  "key39": "2QDXnk8QHRvN6n5nk1PG5FmDFrfHV5ecWEJM9EJxBTp76yT1CKtVDNvyjN7Kd5tZ1yB5k9dsUgnKw7K52SPaJP7c",
  "key40": "2HUe2pUj3VWMP67eaKE6JtFU1fTHZzaer23sUVuy4Smm6ivyZV7aochxWy1Y6jpMbXkcki4srJ8dHb4EvCFFihC3",
  "key41": "kfmagFUoX4qopUvXJE8urLB6TpDR2EE5AegRv98fxeM85RCW7sMmtbrZRWMPu1BJgTxxBteNziUcrGegcPxFq5o",
  "key42": "5pSYn5TFXn9p6Wq9GAkNeoCyjxn3faxRTroD9Twyk7ukSMTSXPNDyQ119kAqxfzVhMUokJjV2tMc5rRTHyvo5Zeh",
  "key43": "3muXPZEevtUWpTgbyiCZKVmGGuwwoLqXPpvn5L3rT1S58moqh8xeazzMJNhQRavUvjrnWSmVUgPVdMrDnbDU9hQN",
  "key44": "673FA5YrWPWB9u1ZG75AraVH452nBVD9kdqy9xoUgvbKBUXzyxZ2fFhLGr8DYNMCiPiqRFtWLKjBipPsgec4kCw7",
  "key45": "22CFmpBZdN31F1MWjYe14y1YZGbmfUpNeYW8y1jUcBRc11mquxgiqTYZh4x872VTNnvyCihq3DKuLiWUJjDHTE5C",
  "key46": "4eBwsDUFaXiVXg8mFMWojEeQjo85stkazSiDEJpU4pzHUJD5RHEbxn9Wh19k1HEV9zNW8oznHAygvEYYiAnvFEEq",
  "key47": "2ymjrbp9uNMPcBVEyPLDrY7P646VcXz4uFsjXoM7dVzz7QVzSijcdtEA5cULVngSvhUU9yUGpBkXm4yg4H2Czocg",
  "key48": "5ehieemFCt1xGsdacoE2mK35qjo7vcKbT3aawyZmDCuC1eQUffHNpMHMcdEY1dtZcGrcKQCy5Lu4vJLPdGQAcTne",
  "key49": "5V4TSbUMutMq1nkNFrttXk7XNuwijFh94P6ic9uKnfcSwUn4NQ4zVVVVwTnTdGnR2VApcpyng82WETCEAjRRi2ug"
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
