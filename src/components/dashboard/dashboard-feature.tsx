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
    "w3dFLjT6dHpqrtUEAwN9fuFFY4HtMdd3zdLYBRhuStkdgWPYhp69W15AchM78NTy5K6rqR6pzZF4JF563m5JwVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HdqR5TzkKoaszpBaNJKjwhbGq8Z9EgkYHPg5t9pBAgnBuT73HWq2qV4H73GdRkMfRNJ8ufmFcHY5ciWJkVdwUWL",
  "key1": "3uqZdAiFEH9uGeJ6HQUnoD61TNAaZLFsL3CwZTH6VUQSmhSydu8iFn8283ohpc7vHTWB7jora2SiUYxF5UPYHpkq",
  "key2": "3CMSco3KAW7mtRgqwRtBrMqpoaMdnnacpKiJvoCReHsabbWkTXJ3DEKp39M9hskHTV3PdgTUfWGg1iJkbAb4PqfD",
  "key3": "4wCmmSJqwpFhgrZo39i3C162raiC1nHQWJvUYZD5h7VHywdsduZfqZy4VCLDBidRkYSCDRyZneWpbuEFiGz9FRrm",
  "key4": "3DMQSyRg9gZUCuqm1dG8thHnFJQfKYZLkSP2dGjWGiDWqACcXv6BnPLGHRCwaFZdHoBY6G3odb5VAT6xzU19BJu",
  "key5": "33FGEgAbghK14RzaEY2HCrxfK2rjHpR3UerGxWhFRKKxWHnHmNpcEgAxsX1qULHrtSebCUYzaRNCm4Qe9kiaTH8k",
  "key6": "5rzevNgmJTFpNQ2je7azHzTA34XaHPdRvycAzxUqPHQFzXcYXtBRn6XCPxjUa9dNyCoVgHn9LjU9g5qn9PqyxQyt",
  "key7": "46DvE9UQJ3nQMXMkyDHWFMYSCkygKnjFeKbtLPadNi8qspNtwkdgjYgWno6xK4EAWcFR4uoFKpkNtckkHEE4hd7Z",
  "key8": "2Rx6NoHpzVvJrdhhXEg5XMSJ3heCzfnr3tsx3YMwPeDuwJnWhhkNrbk9QVAi8gBFspd3V7wUaxBHD5VDwB6LWZBr",
  "key9": "3Ur4V12BMvGeBtGYPquRRYEdgzXv1iwiPUxURG4zYrTH4tGxpzu1nJoCBPL4Ru5xkea1riRoPhcFD9Xy4CCUBVsN",
  "key10": "D6gqpHauazm95VQzfpav5ufrwQJYnv9477xyLvygyxByjpmX4GKqBDYqsQTBrqidF3KDfjmTPmempw4UHu41Fe6",
  "key11": "54d8A5GwCCNb9qg3kGrLFaMbPDFzAQehSzbbdYFEdHgUL788iKKAwVwhqVL3qqYKwJqcQ4iqNzCFRNFJVLG6eZM5",
  "key12": "5Nn9CaBYP7BPqrk1CpbZxcWfA1EgRRYEZrzZhgee8Qq8QkoW9MZFNgDyxiHPJq5NiFToUs9hvpwyR29pqYkpq7uX",
  "key13": "3cdf1qr18psxEmJ68EvjFU5pPneFPKgY3Nmr7Bn6CCwEz1hefaUhuJ5hvc2PaQmt4MSQsVGkv9o1RUjazKNsYu9u",
  "key14": "LSU3zxSWrwWkt7EiGaBjCLrhPwYqfrjzw1PDGqSbBgc6wcCw7jWtAyCsGEFsfiRAnRwH5etVRZYFFXYaTX8ooao",
  "key15": "4GaxLybhzo7fFmEkRNKUX8ya8e6yjnawEEAa8tuTT9oTAtLSKEKid9EhBgCRuaSRSnJj7ysDdTEsE5WzuBgLtmfb",
  "key16": "efG736xZ5VGA6dJr7ifRruAvbMwtrDbJ3uEpgwjgUnK6rP7VfkUXqTSExHZnf2ziKTD959qQisFT9AnozHKLzPW",
  "key17": "5bNdn8dC6L9xgCTUJjR5R6WZLBkBxJCtkWHRf87Q1PZGZE33NHiS3FFxnKctr3eShNWCzf2m2Y61bwbgek1mpp1A",
  "key18": "4XMeESBdr8PBs2wRZqLYbHK58FMsGyRj4HZnRWR5xnX7EbymLDmLH63Pd2zGzKYvpoYVAnrwKgrU9JifJxuNjXep",
  "key19": "4UXSKzVVD9NQGSch9jYRYCUcVSiWhuc5Jc1BZ8sziiKhsrTGPmNCnFDWfNZYN6bTsivTWmw4ACdAYBxbjt9MsRGx",
  "key20": "2Veni7ip529oMXUwcnYYuv6xAPRDviS1pyqYwtHiXm9wP9jz29AGUFn5Qzh7eawptR9UjGR5nGBpkbCC5BGxHPnM",
  "key21": "2c86U3B995WiuaWgAcV958Pq2VcfqiVrhsgkscFgenm8k5h5JDL7p3e5xonUZT3isEi3GFG7sfpCkGLCfcKMLgse",
  "key22": "TGJ1Dx5U9Hy6qBJCd9oovjRqBVV7KieoxUnyX1Ydhfn2kQfcXCxf2bBoaa15bTbPpPoB4fkDUiJgPeq3grCihv9",
  "key23": "4egchgsHFt2Xa7nHk2fe5gR2388TCyokWUAbPjd4hNn6UrGsCNFodiUAfHXz2V6ca8KNZLoHZXNw78UvbiEUNgpe",
  "key24": "2nKcC4YGgvBfaJMgJspupxCbm7o4dNVmCi6LcPVFnTaWCDed2iNouKcTuQR8sho6oXckQNcKANcJCrtZ9eZN8S1n",
  "key25": "2HjD7YPTs7aUhQy9ePmUGeDd8pX2uuEsXTZcPQTeKhjLk2DMwT8KW3X3JNd3rKcuLrsEDRLp8quTX675meTXRUn6",
  "key26": "5QbVwsrgFhnd2BXNRqy6qvKeZ5Lwq7Z35Arshc8kxmK1Gq3WWCb3troiBK9TyT2Whdqyu18gadJzKZb18EGu9c8p",
  "key27": "25Vx1HrptQXwzrk2CdFsj6w6tVH8txZ9WpxD64R8w6NMBPBwTvMiuM1LFpkJyLTu6XWWvNPwbKnDEhBru7VwYhUK",
  "key28": "64KkkJrdgEX5e7j92jBhnjaQikRNSwMDK95fQVLJPZEGCuHYZTQhJzv4kgNs4Y3tYdQiwunDypidFYTV3kiN7Wth",
  "key29": "5fsC93nZ5upX65VdD9cjBp2DuSREyvmhgoEw8QcxLmme4YdddnRWJHhTLCPGYCnGtXSp9KDoW3GwvUY9tQPBPhmo",
  "key30": "3uk2XRoyp1jvQ6q3Z3gPJUqUBtmGEaG9C49mjs4fe8hGXgvZLpBUBkKmRz4pnYqvxw3bmdDZ84xrWJ4m1hfaXzyC",
  "key31": "3n2zBx3g4A1AZfk8KGKtRanpDWn8EBwCcntcuW9ufKZLyfkkrVL8usGKLM5mbkWqpFqp7cZWeTRNQxdefwNzbf3z",
  "key32": "hUCcZ3SNvkxMo8K2gH3rkcEs6sbEQCTc1uiDcSxLS5hKmmypWKZiisKW6igUkNBxvKsxbW3H79ndq6aHSnGF9GZ",
  "key33": "4J13Q7xbDTWDsiREjM23N8TWkjWnhe3ngP56eogd8aMTARuYeKKgqZQHt8dHZd5hzebuFf7HNGby9bcEcT1o7Ews",
  "key34": "3ATJKGBi964WiJqvTEZLhA8Urdi4z4xzQSZCqdPYLcAKUEFAWFr9At1GrfVmN2inyFA6H4cq1P8Ygg2XmYNH24gD",
  "key35": "JDqD7YxzavhsSxz1Cyk19mV4BmoLmfRAD7hPgSz3NT7KqMUTxYHmcUn6LmRUP1e3VQxTRHRjdKKyzBSfEz8DXyW",
  "key36": "3tqifAt9qUKWtx4HdtrjoxAyidNBsgbPP3Ao2Ttk1wEwRRLqE2bY8ekP2zStcVTHjUcepERUzmw6B8V5x7g94wSp",
  "key37": "64FJ9Dsac9epE7wfzcyA4d171T92PcBm9dP434BHJR68hNiJ7mFa3DtXmYPBqtjDdwSRPX2u9XFTkPjcFRQhevU3",
  "key38": "5PQLpKmRPg6vXvPq7cX2ooH8xZzAnTS7CN7icXqCTZqGzkkC7qFFbC491v7F9nnLLfEyKtr3BDzSWu6E2Eks7oQE",
  "key39": "33XgogbHCWJtdyeAWrdo188MAYSANVQhPQivPHsw3NrY87dgSXxJSM4k6KBd1a687BaKirQRujiYoPDtSbL1rZQN",
  "key40": "3gCUTAY9YjFi4EwFfbvC49MbK47cNJAzoR3ZR22a2jG7F7CcSSon9XJcygwZ8RMENX8pPhoaHiyCoRiJs7neVcnu",
  "key41": "3HhcMUWjJpAae5HB4rb4fp3AcqPWP5rDAGjJ7mWhSZgZQZ9BVpqLaNMAtj8GETdQB8CTehYRq5Yh97xFSYkTPuU4",
  "key42": "RPzPsa89EK7EjDssd7QhNBfsP8c37AbTSHrxZHzLuKRWkHb76EuUtLyGaKc9i12jJ9BRV65onDVp3MQi9rM13dQ",
  "key43": "34cfuMWG1DRs47pqQB4fktdvxBhow2NmSWrpQYctaMWNRZfJHTjoKmyKBWBcfiiExKNWdLyQgyUFuNuCvfwexAP9",
  "key44": "3u2NYMqAf3us8noCoL9m7nkCqvLMFQ7fb8CJKo8DPtQCBgLLMgix1eWyxYuZUDNxBp16kkiZvyMrPxctTpeug5dc",
  "key45": "2xsfrxepWkJLmthNuYD8THSSBrnFbpVK5PiC9cbGe4cKc5hqbbmoWJ7rQoXNkCkFwv3cNGbwKjKSgpQvDy1tPS44",
  "key46": "27Rj1rSaZ553xe2Da8SDBLofAdMPUscFqsMrXBPe4phsXAqX16rvebX6yYW1uwftHsbLxpUL6GBKmY1c92ysMc7F",
  "key47": "3My3jNtpAAH4dSMor9cNUCQaEEEhW3BiQBssTv4Dwu81ordfr3KmnmND8yqrnHuyxU859B6NKviB2BJigZUbd2n9",
  "key48": "4B9h1AbMnrqiFzP3wtusSzEfpQTpNdU7XQFKvNvh5f2yDLFYoFvt8G7QuPRoA73kseu8YhgCzQqfjCynmn9Y7J3n"
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
