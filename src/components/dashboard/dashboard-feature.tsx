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
    "2DzpChfxWnvUaD8K3yLwr2YvdVwPMe1RvMB2N6j79Y7BBQQrBTsiANbM3Wx58X8HgpL3bXWWVd1TfcgmJ4cDJTof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "di4xVHZPVu5oCphfejTtne7YJzP2cWZGtXhUfgAx9YQHWtwUgLwfrhg83tH6RidpvpR6DWY6JZNnYghQMWm5Apn",
  "key1": "u2oFUJkEr3pJvS5Cik9skYpUCSRCXPjcvczvRVJMvVe9ZH98gLNow1tgrBYqDJFS6ZQyXjthprTZwD4Mc5gozCy",
  "key2": "5Z3DsfdrBTbQqV291BvvXiUjeY74zhKRbr1faQmAx8jT4TJMEHZmguybuaPoghBYq5B6PrVoKUuZDRp8xuR1jP1X",
  "key3": "4mA2kLagPsQi2FRwZGB4nwh6TXFFT45bwoK785H4Rv1XqyY3suhavuV94QyjKHcgtVCNkqdXjeiuRw954wPjFc7o",
  "key4": "2uoGbjsjzgV7NmGny9XxR9SL71sxc9xcoR14HrnwC84S4YNrvHZ392MpgnESQYEZ5VHV4YLy6fdcrGH9B35hFW3",
  "key5": "64f5HmRoA9q2PH8F1ULWaNChpXFAgvgdwCvHeRRL2nurVvFxXMH1r9VtrAE9h4Y6cWVe1NpZJQJqYqu7nh8GWsEj",
  "key6": "4jTrBs7fsT9bcW3ZEyEQygcANG73A5fo7XWNwQPMLv2E1PFaHMLC6n315UUKeLRoRTwAFXHqYgELxGkEG7DTVfQP",
  "key7": "3uE6BqLPY2j3KXyHzFpde5rYBXPRkmhhLhABKnn64c9pSPbajzqVtbajd13fHF2gsLgMrsGFHXKtqtjW8EpV64xE",
  "key8": "51G3DvACZqe4sZtGPtWXYFmmSAwyjXQwT3PgRiSAFkdQA1XjVLe6DiyutnD6Sb5zgNVtLJrJSdww2AATfbVBpbDu",
  "key9": "5nnu4tyzHDQeRU9iYFQpaDjsj1qo3vZiBT2XRoZrMdAgwCmoK4SyfSadp8DET87KgXYnLhxZ6Aspq1wkS1ChxbCh",
  "key10": "479KHnPmNTEC1rdtsuwUmp1A9G6t2mr7n2388kQTce7hYVBWZNLwdXkmT8WFBKrh8KYVoqxvPscrTMmYseDzoVg3",
  "key11": "2SAT38XEunHBRTLLUu7dMV1anvrF7UhX6WcLHzLM1rofnSsyRQffUKBUxwzo9UKRd1NdNJcTjoXW6CRM6cPWzqeP",
  "key12": "5aqPUwJnvaT3XiaotY67xWMLqUgkNjdc4AdMXdSLDfdBg2fj2tagUuDaUJ3Gbb67Wk8sNdGeDvN6kZiHQTzEuUyc",
  "key13": "46arapp8U8cj6nSZPi8aQMKRiJpDjMvPieZPkCN8i1bUkJas9Bdsv4PQkXtBC2TBcnRvW2nmYNufVasDpGGd3CEj",
  "key14": "2Tw8x5Hj2SFrPYDTMtrHoRPjzPxE99BAn8qtPb6R6Tk6C6pbmnG5WmTnj6KaUQuZhf9BcNsd464TooYNQAdrEML7",
  "key15": "F7CwnCABeqAeV7aqWKVPT6ZVXqiWQkxPWTAkEH67VW1dFjusiUc1dPVRMxqJYbgDUQ7TfYtuHh7JuijqJf4jsbK",
  "key16": "2hAhbdTgJnTHZnFBkkmQJZq5DNECvuQ1DxmuaScdk9m7NBeEisxY736PADtrRH296XVNT9WmQ5W3CDR2YcqGP9Yy",
  "key17": "5g7ZaF9vDML71UfEvXMqnw2Cp1UxXLjAUK6JewGh1CQ6tcm7BmKSDYHJ3MyNP7BEHgfFs9jjeFz4Vd4AbN9z5CX5",
  "key18": "7eqAbq1k5HkZzrpwWsL9B53pQdJ2T4CMvey7Q1U3jpvypNSQjVQ2rJjrjc7eLuiezumKdWBBhvbe92pUay3oBGb",
  "key19": "2g3K3ThyKHiLWsDD7SXcthG2cVptxKFyXyzk775gk7pRJtAE7FWwxP4Xe3FGZPLC7g6QiLYcXwpnYQBi3XTyNtCN",
  "key20": "35jkbfoMrihhFwv8uhtbUAs2MH2nkHys3j82dwRaDYSVw7JDP5qH5ecXnxrY4KkX4nZ6qzBpeXQ7rDRzDnVtKoZJ",
  "key21": "5gbiJAAs3Locj5wtT836UFfVASoJN9Kq42YK2vc8fnRTY7kPwS1FLdSwR7ZL6j2o4N6LWN5QwEptRvyNSUqsruTW",
  "key22": "2maXtbNk8Ynxrc5S9efqt22f2uj6GtBdhfEUK3R76XaFTA2m2ybGdbgauG4vCn6mbPaycU36PADTDGaxAG1KJEAk",
  "key23": "3aupbKSNQnvF9WcUcgtXJQUY9nmLy6iowKescekktjcbgHcuLwx4gCubEBrhHUTyWXnk5yxFGwSotseDMHbncJPz",
  "key24": "4ANKM9PkJK9BUTSzWdUkz4ts2xwSMsNmgqaTs7iyEDQDLedHrFUZH9CY8Un78DU2nc9Jf1GTy5Jk8jWKrqPGFc4g",
  "key25": "3CYAEDM45YFh8AtNohHzn3ECSJVZcSP5L1Xt5nPtWkbBFXLTnsUXZxyovtxDqrKXw4pQo8MYGmeQ7g3WUvMkAK4J",
  "key26": "23qfY3Njn21Ns5aRjSwpTyvBot9iAYhk7HHV6dvwQnBFezL5ZXET7gMXKwhaxBzWo1sirEPC3seHJHWocZWGwfNW",
  "key27": "32Zz6eEVzwPnbTHfWTiT5gzte8BDP8jzosvT51YSvPB5M5PYUAbdBFPdnMjfPuXtRQpcXQVMvKYaoVjxQTDitL9S",
  "key28": "5MVJn6W9FwUM6kCeaf1yebcy9S6YqEKYhiUJTTJhxtM2khTQchXPiPJnbLCULBcY9Pi34FCYHjBkAdTbpkb6Vph8",
  "key29": "VmrYcAXkNpCaV1H2cqDScXvbZfKUT6A3MrxEaMPfR8gu5m2vMKQtad79V12iaVQYuiQBUP373GA6q63bWjVUpRH",
  "key30": "3gEDmtHomvtnzw8XAjXhwNgLpYvFTdguj7791inzBoU72tAhjpyBmCyHxJPLMS1q5jBCz7ZGEhK8CyuqgyJ9sq2p",
  "key31": "25uHtAEAgn8rnNW1xMYEaqCsjdXLnFoooLyFW2etJVD8238jrDtSHJ1uQjR4sNTjZ6wH6aPeg91gBkesLqxb69wq",
  "key32": "3QGc8p1zhJQJp9gauEZ9e26doDX3Nkix9NQEc2X4UfmgK1UzeRqDFrHvfARkpXUbjn9HNW63auYi43gRdxwa3JJC",
  "key33": "CSGvtSH86KmCTjdFZGfFQFtS46iTfUfJDzf4fXKn47gVA5se5Yi3Euyyd4VBqtM2dwGcFNRGcSqNsmsg5Xc2WoP"
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
