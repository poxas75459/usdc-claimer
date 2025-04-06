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
    "5pvomWgFZPBmqWfhaEJn8jZ4hg79AdqakjH8szWhVDQAFUtKVXij4XG8v1VYLG4Fy8eVpCCRMzHv8bJwdeFKjEQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnBSHwPYjTSTQAwZ92t75LK8t75JitxCJa4q3T11Ew9wH1jtYH2pvQraWaQyKCMpkvMVabwXkZdn4PEwm2fzXfx",
  "key1": "5vJzKrZXiRe78BsnPtYGtgLmx6DRYdEvB1Uap5StYsSYhhQ1eCmq8JkY9qwvG62mRbtJcKJc4CNuhkdX88FSuXKW",
  "key2": "2P1g8KdL6jWZRK3CbDh28Wzmbw6vPaLH2djQyb3tPDrxjgbKfXswhr7D7AY8SujSAb5dDayXUAx3yjTFgkXeu48s",
  "key3": "41K2fURGxczALwTWiUurnjHxfy3VZ34x63UCzEAVhKYEGHUsYiCT6QSLDuCyS4EzicTFauFCSrGA94bBxXgV1g1g",
  "key4": "Tm2E54tTLVkzN18f5PDSNaAtdZM8f2gW3bbpjiCFornAbDiaR7puowhaYcNQYtWwJa1EBCZvtTZVFwCJSRPhixz",
  "key5": "22BDJZUBBaTs7ThrzPd1WEonEsrshUURmF3Cr2SBaqCnW56xUbxJYLndgksY6xZfY2ybKCe3zvLbkc5ZdXW8f9fz",
  "key6": "41DdqixhXPvHysVdqbxRVC12UbbcQTkaErwojirvdDpK2tC8krtfjoe1k6ZpmmpADtyTveHtaGpLEqjjtQEyLWJN",
  "key7": "6ZDp1fiYqvz1ZKBUHshEdtJqinrp7CdUCdWuqhJyC3L6jvvomWs8ECfPeLHjeg4jxu9EuWkR4JbdZdVJveYam3W",
  "key8": "388m8nf5EYYDkRG9oGPPYznAxKVw7F5aDQ2VbXxf9P4pznmwXGrzzp3JjoACRhjUK52bZYSyXKw5V8ytXjAyuorq",
  "key9": "2zQiNd9VWRtJS2CWfcaZbitFoNLpXMXiD49e1nCx32ue88jf9KtPETmtWQf3nKGQ5vS1qB51pkaYeAJCoc3sNEyQ",
  "key10": "26rxnFxgSyv7ieQJzoFMCkK4kZvD2cwuH9hhahC4wsXWZ2Tu861ZprRuLGKJ75BQjZXjSufJct1MJbx1C17YvSZK",
  "key11": "3B8mdJjbRJN1cspwpr1NWMTb1nDCCknBm2BDMTmScWwGa6SGNHNbgqrLJrPxoEM668qe3Nex9yCNWwZL6HYEviQr",
  "key12": "3yin6KXyiwFv7CYaHUcATsi5b3y1SJuH2GKhGGuuWX7sMs3Xgw2XWcR8p7JFGarpJXDfaBg8u6KuVpFjgvBTLHvb",
  "key13": "3RpVnZRGh7RtYEKyDdE7tQ9ck9xwrHgHdnBefWKiJucbQLNRDDcoM7wZP11dDVQriP8yrD8TKfWrzL9HAuCGsSj2",
  "key14": "4VkELqhkqWa5M5TiZfG1kEKHmy1VbdTsVU5jEfJ4SCDC2BCgKeLxsRwz4SUz7jgXJX2287oJ32wHM7XSpMA6N7yQ",
  "key15": "5LJfSwcEiN59ioLDbACET1tQSg93BVjKNdX2wQBo9S8Bmy5Q6tmo3LjiaxJtuLTcEDjmpKx7LuZnoKg1Aa22W8D1",
  "key16": "4K45CkfG1n38whwxZcCfPyBWvNRTdyGpddLTsqcarg4cPWdjLtVTceNctsyE3p9iTBUyPn7La4ixwFkG1g1JQjsY",
  "key17": "jTpNWs1jARr467Qw4TwWUsoiNuyVVKcXc5YN7uQpJUgqPjuTjEXRb95vXRG1DYnsQjYDmuaixrC6fSzFmkcEFQ3",
  "key18": "7NVkBCE9Le7X6FPuNVbbXBydKNFZFBtHuYqgCZZkHASf6ye1aLtxwxNecg1L2ZoJj9sghVrqZx9yo6GABXaGKGi",
  "key19": "4WL7FpGuCTiAkmJdefts6LHL2PQ2VaSFjyC5k9vUwxkhezok6gaFRRrN5qzLBxRr4URCTfJU4R4ytLkhtzjoMT7S",
  "key20": "P5n6hXbB79yJN7tuoGSeko2FrXi2f2hJdfYRxUAjDVxn5nCzS9vQUsHofyZvaJdsucy9YRd4Fp9cZcbxipQjg9k",
  "key21": "5QTnpnhWaYLe9hB35Rr1LWegeSvhE5oPnSAymSWf2CFJrApBHTAE7e3iPXmTkwbcNckYxATJ9YzL2VeB2X7a2wFp",
  "key22": "X6n2gTXE9QGSCVhQAUQkyHjYUtHt2i1g76F6nWDx1zzZ399JjRwdNG63wTiMZUboGrbjJgfgkikyXMZdjFT2ev3",
  "key23": "2QBkuVXdYjiJv1PCvKkf3XAokse6Ud6v2DNzPhDWvT89fxT4U9jxQ3to7qno6KduAC1AtH6P8TGGfPJFok2hQbHT",
  "key24": "2Zo9BWNxz57Ng45D1yDfHbMjpmGoSg9jNWdH78G3GKXDwbUVHqk6kGtezdb2mBhC2YDxNVBWxoLR45ozwYvaKy9q",
  "key25": "57SbsrRewsNLyFo13dFevzA3eEWCLqp6fBwHC3FZGqhwMA7XybXJpAFTPnnH8VQdTjGuv2eDNSrJG4Nj87qhNrch",
  "key26": "PAaDrPMLb3A8c2mXBycqbx61WaPAKM4UDpCAspNjzS8b28r6D46H25EMVznDNWmvZU6XeHjHYWgo3nUCf1wviZW",
  "key27": "5121qks3fY1HrhXUVXMm8Tr5xZzAfQq74uu88iNqP1koPJGQD6mQk5omJmFzVXcCWTJSfd8Q7aoVpi8Wn1vR1Lje",
  "key28": "32zwzDgf6j35ijZvQHwW2jRxbcBVvyE3iLtSnaVVt73GT5oHPutcvekQyDiq4aZj76paUqbm82iVbC8ddnze2erV",
  "key29": "2TimfgBV3Rypoma66bQDinKbyg2cdumza2fE7vyTA4Su23XHsWkH4iwkoKcTHeSg8jd2nZ5w42fjjwXMrnnfBf7R",
  "key30": "2tYQCKLodLXfaFJvqgCPUwP5oRGULT6zotCxCWQe335sAjC6U8YDWEjec3L3zuk1M4h3gHUvapwKaFodbAHGvjUJ",
  "key31": "3Pn1UEnhuABiXZAXWRH5fVmywisYt61jNKffGFyPyh7B3JqoeUdxHp1JGj9vjGPftRKmur4JYjKX456FznT3QXxh",
  "key32": "3oYNZnK485JHKFouv9TciyYovMrQ5ufxS2rusnswYqtoneFRCTFrsxRWTQ3s1ya163vurcXvNHpeFjTqexqXF1aN",
  "key33": "37Hn6Q28s2nYe2TANw3se5f1nys1BqX8EE3rTQeEfLp2MuP5UAzH7tYZUBcVgioBRr9oXDVb6MbZjtfrzRzkjXfs",
  "key34": "3pWjMXc4SB15qHGwX8NF9bbqZP1wFjX3ZSo4u9wbxw2sq7h2nrfkJqkpEJCw6fFtrxvC5C6YSnmAyDKynDV8deX",
  "key35": "4VTERT3sbwtUDzLQ2vZ6JyKr61UovtQoEmAHVMi3ujrsDSyD2q4MThK2UwPE7cKcYcunxCAXdw7StLmD91T6itSs",
  "key36": "N4EeGsbQrcr9AKH2yzTygbq5Vngwy4GrC2gvq9y6JPuJBDwKKpke5dWrYDcwctqQAfHBAerpV5n2vtsrguU5eAL",
  "key37": "4op1ayp1Swioo5SfFyRFAv33oBUj6XZrCC3rS1HWPxdmSVG9ahYY946xMhZYhsGGjWUMoRW4BWyeJSX534kGYTxc",
  "key38": "4tt4quntzYUbaRzemBtDXgtcirVHDBU2UTVcY5rZ9JgCSG58GDVkJZERwbePKwYTQS91c9jJmK3uiX3VvQBHxL3j",
  "key39": "2q9onhJD9pXob49og7hDptz6BTqF6fvqVY3Sp2Zj7cjBuyjWnJPcraoK8LMz5BfesvWDTAzQFzYw995Q9tHhBgbk",
  "key40": "253DT5mFzDbacoK3LCzhhL8axSdppB8PNQhKpkbawNuNydJb6Gh49gwDvwFzFQ42AcfkonoVfGwP9c38hEv8vmcY",
  "key41": "54DyQrdcWfJAFdkgVzBHJhfkbUHM34joKVc8r2D28wZ1mbDshx5sEtARFFhNGtR8JYeWHEQTDQCzczhKuwHNyUbN",
  "key42": "k4XkEgW9RNFjLeeiryKNwynhQSxTbcB9tPDbEa1UpLtb9CKTV9UhkvTHnAnhkvf1QbAVYwcHU23V9vwDzyhXQnX",
  "key43": "52mRvnoF6HdUzwmfYbrcgwvv4CGCmzDE5W577ySpNBG7cDEo5zjPV8NKrZwSXuyqeKYvJ5irgLCVcE8ek6bjtpiM"
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
