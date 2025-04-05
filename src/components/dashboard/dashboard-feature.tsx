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
    "vt1rn9KJMKU8vUuuyugE3rfuuLedCbUTdVXz6d6bazsfrzzo5gPCvDvDnSmLopVtnmspFGzfKMJGs9n9z9uFMB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ztChFBquMmqP4o9J649r6SnWSLoM5qGp5R7H4YDSEYrrWGiXnMGbqiCLiK8oWa9tKQited95Amje3eUhNAc1BD",
  "key1": "3sxwXZqvefjvsrCVA7SmcB6YNfh2HSggPm2xQMHwLqajPER1vk1hYpgxFTNZxy7oA5UxvzXdfFgWuYWfGUtMtKcY",
  "key2": "4nmwEgj3iEaDhbaPaXondfNYNdsTduyv5cEXbn3mtSs84TX3v7jjAvdNYnG1AXL9J4wE7jhFDG5Ve1r3HaLfr5Pp",
  "key3": "4UArt2q78LJHXK1K84cR4n2BwPyh4Bdoron7ibngGe32tL1HkasGQGYtshMjc7yDBtNRyoSffeENmVaUDUQf6KZG",
  "key4": "3NNkVpxwa1jJ7xFWQKjJD1CmtR8fGSe1LNNEeFTNr77TVjQHTpJTk34UzE2qZcKydWaCmJq8M7TrGsHD8XajaLZ",
  "key5": "3ubXsDJg1gJBemY3pVEQpBPdomD4hQfd6PppaWLYb9C5LpqRF6z9pLWsGYGXM3rU6TSRnPtjhmXfCyaVn5Ryz2LH",
  "key6": "8wf6SE6bQPKuJrKVpNH9p2CNuUZSR5xcg7oPo5xYZWidp2mGEN9dEzFWcXg1KrEzV4xv4AGecXfbF9EcGrVgQxD",
  "key7": "4am3vF7UN17RCNdxj9r5Wx5GhEbj6pq5xSWPgZXGsu6z16ZJTE2qxSkjQstcdjBJDjWoFWPwyD3dbqBzNpN8YgGL",
  "key8": "2vwpRQtQkVtfjGt6y1vwbBjJzB2zsudgyvXT9DSWvHuATrwhRzRRcFmW9pWnRYKHtnzRxQqUC5vCpJ8Ba1QK3314",
  "key9": "42DuVJjvgUV4ayXH16Zw43W927Aa6NPm9Zrtpzm53W9rCrMCdJBuqHV9XrQm3zYivZBAcPUee41crVSRqsWRWunD",
  "key10": "23PkGBK3tRwgjrWWwXm6xb4zeoiRE3Kea94GV3Dfo3iuB6HV6jwGcmE9xa98H38C1JjSDsRPUDE9koCHipGtVDUR",
  "key11": "2qgoTLjAtCSpBvaUeQ2GbF9iec6jpi7g3aYrXThcnwYxCWR2GiGqrj1EJv9nnPHFHcELUr6yZhz8uvpN6cAgv38M",
  "key12": "pBCsFdGVBBv5aUzwSZ6h3SC6K7LSavTW1jadwgiqcjib1TZv8iaoU9ahhS8uo3f54tgJqzcynPjLSeWs3QZMYmD",
  "key13": "4YGCBsSeySWAC1RytB9zgobBKiMvJqL3Lanzv8tbq6bwDhDnnuFfj7rRdCWUWtzae9Guv8brYEXWPPDaZhM648k3",
  "key14": "58CBJGph4hNNH2qRf2Ds2UAosuYVE42BFcYbvqptMPd7efWMZxh2mQeghrm78KedS1n3pnvbmsBBWX1yx4PXugV5",
  "key15": "3tqXQBCasCtnKFazhifKzqkFbK834HAungvr7WpZYrPXgcSP3CbrUr4ucs5RyPbW7b5sqd7WpQpfdSbgYKt4AtV4",
  "key16": "3hxq8L5US8YqiJgo6HWp5nYFePkDWmMeTBSKtZfgkW9s5nHpwnFMPGgpL8KAmkWbKHmmZQhDTabM1yPiWNTgm1wh",
  "key17": "2SCLegQuaQG2wCaLoyiWdG9xb3fEX5Z6segCHepCZ3ewYQBvcA6fqLctzCZtQLa1KAtq5x2nKaopic2RDz6E93pM",
  "key18": "2h9fWg47fNBgeN3ddsCDBiwiJ1uotTVeVPxSFp3XM6xVGf8SdXLRX3iQxgPGAyRSD7kxaxyYS6uaxYgxSbEoJF8Z",
  "key19": "3DagAjVYqeXwqkSTut8yMdYHdH4n5vQfKVoBd9XTm6V8gM26dPuTifPMV5oRqjJJxuiiCC1yYGfFBT331r8QMCqU",
  "key20": "cM3xFQMowNoZfhq4UX5c7o5HnHuQfPwpTdCAW4b9F9tqDB6UbAGEx6pBq4bKLBhWfAiVmav8dwkXZfxbgVQHW5R",
  "key21": "4rBv5jdEM66CZMCBut5tCpFerUkvCL892oVNQ4UEgQVXx3ySviihXseZeuhgZdKVDR827SjKdnmhBHGmcuVSaKkE",
  "key22": "4JZKmyS5bsZ2gPKgSTxxcDJgBBwmjLWNdNH1YCcGhVsQ3zs1TGKSWDTjuUFXjBdtpJD1yDpdMuUtJE7wxUXrhGwg",
  "key23": "2WjE3EmpBd53F9HW2xE5QUQfY2v4h7n98dqFhdvY1ZXj6fT3WH4mp5SLTdBdT5GkhFbZQGBo1u5r389gRJMvHbyU",
  "key24": "4iGkb2TNN4RfvfRdgQnkjkVnUUL7gP6SwnJBtGq4oV7jFTNom68ihFxiacUXxvhKffKypbXNeCz36GFUyijt8oMP",
  "key25": "46A4oUdC6XBqwi1U9TRrXNaB7ZFpZcapHLyygDtick3FZyZtfgKPEMGFGM6rYkhhMxrpn6NRXEGbZsFGgMrqUNpH",
  "key26": "3zb9i8CGLen7YzrYbmd9bJih6ezCkeVnx84BaeUkJEKqYBd8LHUaeQwvYeqgmEMJ6ZtAGeZRDJg8TYrvkeDdyieT",
  "key27": "4n3fzJf6o8FNzM94smAUHZcZ3SfahHBytDu8D6f6bQ9NADrtGdDWumTRmPngLFb4c89fQ1VaohnN1yxbLtu8njP2",
  "key28": "g4kx52ZUyks7Xzb4hAgbqvxeUxgUQBUwLJUCgteSq9C1AUTFrdc36JR3E75Q2mYCY3q9nvJfKspAKgLA4y7yrrN",
  "key29": "2hekxs35FZXuxkUoqUwz53YXwoeXq6LKXEzyz1aU9C9hCYbW6xjyJMJzyoYLdPcXoyi4iAUpstcXU8pN8sDPxsK3",
  "key30": "PW6jEUNpTuoe3L1baz9FzgGVFdg8M4EAXpbBJvKJTQjpQtgrmKA7ZUxX74DFrGLR9vatk5k8BZz2JLMjm7RWJeC",
  "key31": "2t1Tc2t73kfPKYuzRfUWJTkVyJJ35avmpZiz1w3jPBrPwbru1u3ek2d9Kg25y6CN8kX2rGcU5aC3P7TozSmqLDA6",
  "key32": "4KEVqLgN9Px3Gb22eHN1cJDybHCFCxVNvjkjw4ZcYwRC4FTQfSjRPS7FeaKZiT2AuTUGB7G6S6VZKK2jhLCqGAtY",
  "key33": "2oyH4moitbirStFF118dWZbHtPyFsuoR3FBZETNuWwK6BgikRf47LmiAfV9cyc1RKKVfePCxfA6J9MxZbVnymcr4",
  "key34": "5vk41y8VvUmdkhdy3LVqaksdNWbWYkzQ1iWATTFrwiqGrBw4m4M1bbSXzbCGXWWdNoy1mMYNpB7vpuW9DSGLaPgW",
  "key35": "9HXCUrpYgNeHQz3XsCnLsgMYa4FDuaLhjMMhjzvUVSad3TAGVzCwv7vgm4LUiRQ6sWp9itsVUESytCFxwht9i8R",
  "key36": "5xAMW8CiC1SJ55r53JjZuu9RLTPs3FDqfQpnuZavPuR73bS1BXqhQdnhZorzchSECBGHnHCNZb66gUVNegFdu46Q",
  "key37": "4K8QbyCahccubWfQALRtBNb3bxweBCf3XFbuk3ym2ZCUErcqAgazUM7uJZW9Gv1FR61DKRmTv2RyAzLRiPCTrWAJ",
  "key38": "2SSCoZfYGXzinckPrhHyv5cMzKbAbATGt1vNZUbseg8Gj3CXEWp2X8ohtu6p1htvaMt7pA7CpKYT457kqAu8zpbC",
  "key39": "zHiQv9ziK6AHR9pht7Ckb9E18uh3hig5uvch8i4scSeLSiNm7v7w8NRHAboqPd4yyPZBLN6ukBx4vUSmT9PFXhC",
  "key40": "28oQ1Rq1eaA9EjGGH2wEWov8c1CRRtJWwEbFR4r3yLq3LdEP9gbRYjmT6kMikUeygt9Une3T4ELUmPKJWA3CHhaP",
  "key41": "4B7BjoLGBQF3qpvTHtuopYyF8M87BuEDbhuLdLfGqcTS812A5tJr6JUT4dt1Avmw5bmbQvrKAo2eCctoa5AGqrjg",
  "key42": "5PZDUkpRqLtNfB4EKPvp94jmzpdbRkpWDjaCTJJHqW22kvFdwpkPSN6owEZvHBjTnTYESn9pYS46ZpG9tNkFYPNE",
  "key43": "G6P9VxbSHhTJLEwckt1Ngh2fLKBEFwGpe2h6Vp9X7diTCo5Cj9gcCJU5LwS4R5kHcirb5eWXTaM7ubpbQLW7RoF"
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
