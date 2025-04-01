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
    "3TgvqPL1hsdjVGgM5JMSduTe7M14w9dmjR7QkfhWwVDVLdjgXQzWhqYuYkw8CLGNfFucwTeFC9sAVsGrLJtSKRor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UuRsRTBw29wBEaQfrBFRBa8SNwamJm1f4xR2jfH1t6UZj1jgEkf9tq6UiELDaYUCo6arL993gRKLDaypnYXAW6h",
  "key1": "4TKLXUMJyC6PqiTjb7uMBca8hwZpYiTRspq8UQ1nsGWTabhpHCjFhzPVkkkJUxe1pfxgr1kb7stZXvc5mHMVJmrP",
  "key2": "jNu2kZUGBSqPTGRbwmezv6LZXdRbhW9G5VXEcmPnbV18yQt2dJ4sFiU56V69XyfUd8oeC75gPUoBE8xStypR7Zy",
  "key3": "2ZUDNGpmAQGPxU9wTKbxfS9NdeaLic6Fr7NUYftTUgzGcb1T1AUyQsA4Z1VsVP8rEkZFssbkKCiANy6bi2EbrY4o",
  "key4": "2qMcK1cKF1pP2evssQEbbpsfVv8cpsup9xejq6oKff4tLZFkrZBYkphvP74XTrKpwKYrSqATGUZfuV6t76EGwiG5",
  "key5": "3mGotzBoRnjKhEnpqJSMMECK2Akn5cNgFvb4tj8ppndkA5x8rg8B3Cq2DwLAbFnCEPzkv7nYA5SRFWQVDJcXPCjv",
  "key6": "41hX4BkX97LjJgCuNGFcKXm1sSrJy3awZ2g3d2mxZKZth9woYsQNVJ8p9vV3uhHmakj8d3F6TLzZUmdzCp9ak8NA",
  "key7": "3xghxLq8aC4n2LSfbYjWvZ6n8tpJqhrdcruQYdvFJQpkHcQk4b3fmXrD9T7w22c5rQPxCxaDngfb8NGr9LFDB45z",
  "key8": "4pguFcvdHggsnBaGeyh2jVuKNUXbwE7rCBu2pJ94pyqRL5PZN4T97zQ2WyjYKH7YoQeRASqi17aa9tAAi6WoFEK7",
  "key9": "3qkXFXh9xeu9pdbKdskUFn7buS5hg1AvnoCb1W44JKCBYA848QDyFBmh2Aab57XRdweh6wQxvH9CtRRDt7tRf7uE",
  "key10": "2jCXVvMeewvRFfTa5PpPxdcVHgUeyr5z9GR5XC3wfipUgpq3P3nmXPTHhaqJ5Q9sFRSqcf2HMV96UbezrEwWwKiQ",
  "key11": "596AkGBsroy4zpTY6XeoYXDqWbmCHzUCZkbMjASYiQbmeN3L9K1Mq2tCE1gvXc6ZbDjpH6uBNW34C1AXEuBT27zb",
  "key12": "byGkzJa26dVqGywkWyvPkkeNcRUdLc3QJ76JH8i49UuGCiRAhuUGujb6pcz9z3Z7mEq9dvcRvj74QH8xTjCyA52",
  "key13": "63mr4WHjTSx82iwbJNArgK7EM3WRu4JBkxeHefiooTbbkufvmiPazxXHpZ9tRn7Ss7a26NF3vjvnLFs6jFJBM4pj",
  "key14": "48xAsDAzEYGuXihag8g7VhtRWqBUgpCUKHyfS33dC46UX4KezvfJwyTKLvzgBDG1nhnzfqWYtTu5k61iRAQ4oDsw",
  "key15": "2AVYsrgJaYBHfqQqCGBekL1NJTxf77tNdwXogdEHyaLNCtGLqdysXBoR2RX8ry8YQYQESf983uEYSV8SqdyQdhGh",
  "key16": "U5Rat65rX91Yc7UCqw1sqTwpCtzEDKQfzHLswMk6qCHa4dm7qosStSVZhiRNbXpark5KcLVRNt5gKYr68NrcASr",
  "key17": "5ByJk6MCgfAX8EVjVa22RCvfeEVd8BUxXz9rCcptRtCSnEnsrX61rdEBSXhEVbEbnGQidUJJm2jyremHNMDMnPUb",
  "key18": "28VGV8aV4mkgH9w9yZbSkPcJbocxBYfHeXQSaRwWtk5n8CQgNF2P9P2VtrKQm52HTgbis7Y2wCXKntxftPJ6hYrp",
  "key19": "3pBnFKof5VNNNRvukippD34VwRZxh2aY7LLyYxgXa6UYmCXKrkzZ3TV6GBzzFrrJuq8ouXjZQcXbFjqHrRB7VLFH",
  "key20": "3LnbRVH1UjmsXYFVCgKREP9gcUpScyPq8s4grvkUiLdUUiDnroYYawuBoyLcxjSLsq9z5kNAjXLdU43CPYDxjQuR",
  "key21": "45KJF9erEoySg4AKc3mq78tUWZssHRacRQsc7ydeQNTHr3tSWDbL9ZDWEQewUFX73eyQD3esmyKDu1ww2MWQTLsM",
  "key22": "2Gm4MsHv7yWkA5GJMch91y6KzGGYSA8twm7QhvLA2ctjRDTz6swPcc5aJbnxSascZzWyrkyKTrEa4Bcd5QtNVhmJ",
  "key23": "4ezi1avZ1mcukku6yK1gX9JtvoKzZNPELoeU99Xauu6x8krdGyjtMuh8vUtTpTEBV45YjnBXZFBTzDYaKsvdchNh",
  "key24": "5SvRxDmZf2A2wnYYuvJc3B8kzCNrMS8czGTQqnQksTbDzfrehf9v17yKD9Zha3Jg9o4kgpvvXjvqVL4jHU741a3S",
  "key25": "3zHsovYoXDmtatktoh1ZD7dwkr1aHLu1ViEDzfv7ws45QmF2o4xE3SHcLCHE6akRy3Pdu1jRD7oyeSLSdHCq5MgN",
  "key26": "5Uc78KF2HwUXK3tBPXAt8jGcM4kji5ZpFem8TigYjRSB7cy1x6AMcBYSe9WXRuHDir6kDJ6FpEbLCd8BAXibMfei",
  "key27": "4SrPE9ByHVAtSKtf5upWw2kn2wVbnUyK7BC8ZW6sQyDwT9Be88Ckg8GJaUAQenez7B2szTkv4sV7AqXuQoMZQceZ",
  "key28": "4iFZc9tCmDTXCAgNUgBjKPnkh9x39QEskLJpSa3w1Qj2ot58bATLJL8Ct2oYW9o4Q7oLd92QeEMfUTAY9dKoD2ux",
  "key29": "2L1gQYB121DZsrqHUm6UGe1kAMWrUUY9oCZqBYQmPbei2tygHjJVzKNgVgVZPTsnGw69BJYBUADJGpVufJ5Su3cd",
  "key30": "67RQA8wahWkiMjYVJRCkEMR9Q3c4wBTVqzNw5erZpaeuhtkTaCWCcHyWXen3GVXz6wZw6ASJ9E6pLrXYqa9rzt7G",
  "key31": "5YhsvnimVGi64SHzVHsmBRAwXpeBg6kPpNBv63xCPus5goD1ApXVh4XYPmm1hE5dM1PKYe1e5dfw2HE1SEPDyeeC",
  "key32": "9FAoBDqTqH5eiSUwmapx3woFmAjxPNQoC3rP8kCBaH9FoGx4PFbTwH6ZpMYLGfCxnzbYWhoUNdF6Sd7ZEB8PDSv",
  "key33": "4KmUxi2HJbwiyxnKZLRYap48TCe2wZApc8cXGW2NG2VqQJaTz1vonaBctYQszNCMTbXaLz6Xo7gefDd8MUStSAmw",
  "key34": "3vvFKGCTyQtTrEkvSZ4aqgpeAL38mM9PFCyaaWagJJAYCjzXvXvDp6dyeavGLdApN3niuE2r1t7reJqCVrRniHh4"
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
