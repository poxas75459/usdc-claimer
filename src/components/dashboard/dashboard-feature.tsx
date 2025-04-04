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
    "scfmfoThpxVfFrrUTGPU6XcyVs5y95fjqe8DSqrc7BrYJ8oPKxcPhH1Z7BTxhs8aX4GRm3cCTkRkXUAvK9qBPB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMbEwB5GFi6d7rhTp4Pd9dZeejGbTDEq2vK33br84GxRHni664KDC7ZjS56SrSbMMgKqZppnNs6oUsFpB9531d2",
  "key1": "5A2T2UFaLGG38TiryQcWVZaQWdbjkBR7suzBxjhZ1xJuFgFaSedKRbFHvK5qnYdwuihrsWGBTDWKg7VgYjFLC9dG",
  "key2": "26sfXf1kXrBF1XAJZxchkSzyMhLcUcA3KioxHVpkbhrAF2E92S6tNoXCCVfLZSsoMFWvz5tyRzRAESY6N57vyLFd",
  "key3": "19Tea5vrScSupKPY9Vg6YkBiCDLzjg3Qpy698TKu9QQZqz4SKNXTWQcfEpAfjD6gsU26B3e9fUYuo3wsvxsTWps",
  "key4": "fHk7mwa2P6nWUFbEHHuenk5ictEbVg6zVMgU7aAQPHadVsv693bmCSGBXbsqKx8aSWjykvi4dkZWPiiWSnzKgbR",
  "key5": "3nsLjtN9guPwen4mReWPtdEu7Qwux5M6GAeUXSzNkUc7PnLsa4HLnd9UpwL2Wb7jMXQ6Yaacz6mBvKvrATjhVCHw",
  "key6": "4dsSoiERXzpbucuJv92jHgB3s71H4KRi5gQMe4gDwW3A8LPA64nEofh6rYW4rgZyFJ8L5cn28rfxu7FSq2KsJBya",
  "key7": "2yTYQ3tB1WaVNCawkRb2E2XYyvURVJMXyUEj2GFM3qUeCGy3XZQdrR713jAvpbqqZAyWfi91qMNex4qLZWZhnSsp",
  "key8": "3ijvMvSDXDEb1huHQtMYgTLYiAC7HJ5U79FChn9g6ufDHTqjiEARRG3H2wLu8pcfVtntt8hZw693Z9vTSuADCorG",
  "key9": "4rk1UxQ13jaAqgbwEBuuWyi8jrAbAKBNAAf4oxU4CV7P796ecgbSSNCcekxwA7JrPvNKegKbFUzNjuAEKeHCYcW4",
  "key10": "2tihJ5pUJ89NgpBtnzvrX4FDESrWxm3uFL9f7MtMMRWxKznVjWinxkwQTtCTii9orZzMUXb6HXfiucfrghuYpPty",
  "key11": "375T7f1t7jmUPbcN8HRiDFJiCZtkfQRHXTEezy2JHvLFMXebhwR2cQEpXnU66V2JRrZB54z9k6vLz2SeCcJhjAgq",
  "key12": "5qFvjcen4KwoqVc5y3DAoEAZ3JB6M1hYRm9EXyDe1Ys28jkcJsJXSotWcdxG6KkK3wmRpdYX5ucLauYmAjLUc4cr",
  "key13": "2v4V5Vo4NFLq68CyKWtRMqFH9qUrY3qd9NLsz4FpJ5U36AEY1gp4eYZnQs9qdeJTFBYk2gttv6aY4b8nhMr8Luhn",
  "key14": "48N37zKaADzmBWsRByu8bb8WFUDg71xK1iT1Wbs3p7J6W9GndTCrkfnzsaDcgHpwz4umsvbr7Kg2V1khaysSXdix",
  "key15": "2L2PtFKySt48NDqBfNFsFnJRLfiV8DhPfe5RLXEm8PquE7WPFamYbN2cHgDiejYj3LXUCDzgMf5q5aSXSsszz5oQ",
  "key16": "NkUGBLuN6qBKnLdqA5VgU6Mjq357ZMrciXSahjfWzAWug2uqfa54oLnFP7DUF97MdpqwdYri2HUmmxEYKdrux69",
  "key17": "3w9M4HWbCnZCGUnXTBnPN3UVbvNgeqf3ttT8caLdEv2Vcqpww6EJTBQccHyef2uNpmiNFP1AcpTfmGn3PdDVWXiT",
  "key18": "5UUQSzSfMCztgnR9DZBnMbpxaCE3iihpwGi82P86uq7mYn2HzobMvFs2FvLE8JV7KXKH5wGvRRJyJZDxLXJZ9Ju1",
  "key19": "5nBgpHcL9gEpQgNiLFZjoGGSAs5WH7CUS7yC2RXEWMpy4vuk1ggBpGkxNxi24qX4hzt8hueLkd4so92qYJk3bZjq",
  "key20": "4H7BshY95sj3DqjLxcLN1FFCVKKgbkUTDpQAaxZ1NbmKTnkYJecPYdsGciFG4sZdk8kYmHSud91UKoSXQ5AmkN39",
  "key21": "3WdhD1B1XougNNnpuxXZ7YKV8uThgcVN7Ao1YgfNEgpPHGq8wcuwinQ7hYGFZC5bUUi3dv5m5GCePwJsYr36Mp4p",
  "key22": "3Hsu4L6Cn97rgEtxHA5Q8xomZfHqNTBEw4SwRg5RQPqDQRYf6UZwRzFcq5DoAffBJnqQvpWL867ZiQmPGj1dQUSc",
  "key23": "3ZDc9NmvGnBw9NsXHsQ4actASyR6pRJtHsoV46pzYFo9KFSPUjvjHLwLewTS1Pj8cHgjUe6Y8z2Z7ZYPmoLeoQuW",
  "key24": "2ZZgx17x9gMPbBU4k3CTS39cJuEnr3g1LQDSkQ6xcZFyJJrJuhAebVRCa2YQCkFQTTmehsykMEbHAfDijmoizCAr",
  "key25": "4k8Qs1GKsakyGPZjtvrqsb9j2Mo4ho6hPnkxXZHA5h3uyn1vZCCBhLrEF3QbYUE6Co4SwnxRjYetrN3GUoDG3fzV",
  "key26": "5DhHXgb6Te6WmwStjLGEDLsHY3TjD47PcKCMS8qGWtGVkSxBm3Sni6CgNYLm3z282zK1RDNeC8T1s7mTqHVdmcqp",
  "key27": "28EMhJMqXesF41cj4mQHzAc9ZsTn2sVZof3kxuYYDpDjw8dDh33E24wtzz81MUAcpcyC6r35iav3dQb3JEVXMcco",
  "key28": "5JavmwhgTxr5rjFY72fUqmYp1fEkT7FeCLTKRBR8ttjnkRihbPqwk9AzqKK69oaDsHtsyoEgzEJ6L64ksVrCxhgk",
  "key29": "4ABpXxEzhiWnWiL8TVRUSHB2NCc4tGVW8wYWFeDAjw2wTKH2i7mTGV6tMnGNLAjJMn9Amu33JbLQoX2qb4ed1zvL",
  "key30": "2igzK7GVzQJaBTiaBjMkU4GPa9BPKBGA6hqXN22WP88kUpu7tR8iAEZi7mFFEosnGu6HsCniskkbJjKvL3AqzBov",
  "key31": "3qLTpqPRCjkwooSioKxgKRJV9c1kTrzHKNA1ofLc6RyxTbXn88ELFEnBMLgA9Wmgo6ZYc2A2WWbUjZiJh88ty1cM",
  "key32": "G9GuoUP5YqdfMS5mASZicW9b78Eeco7huPsWLYZLPfZghWr3gHXzzSSLSVdQ55pyHGUb4xv49vXjVDMV6UJU2jS",
  "key33": "aM1kPLXqcLPwr3uFWNoVdAAvULcrJ8qMX86aT1y8YA7tRRCzKLEj2m55zii4yzFLAQgC3romEZaiCk6rhjxzLp9",
  "key34": "4bzj4JfpAFLY7HGXkV38sWzGE5h6YDGe3uAnahAcVTWRRLAuBA1oSJfiKfLB8N9j6kHQvwKn2m2YZNXjMKrgKifB",
  "key35": "2fa4tDDBGXQ31AXSfiVa4XRKFpCQm96N8jv19io3JVbnUSPUJky18k4xdbLL6jgeRbaGgjQ89777jGfPKNarGa1J",
  "key36": "2DXBXaS17BSnuswVp3PzFqszdmfk9eY9q3xnMt9fYGTkcBR7wonGi6DqUcfQonkVkwa4BtNSMbEnFbDdPp3c5y8y",
  "key37": "4DV5hEE7WkFdBxg9HoEWVwp9z7baVzNTyQs1LVTcwxCo6k3gnDw8Bx8fFuBHi1Fz2yJ5bJjpEKrpbd6PpHZWMgV7"
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
