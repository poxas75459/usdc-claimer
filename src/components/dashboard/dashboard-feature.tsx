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
    "4aEbxJJbzyxgczvTrDXsfhv8KbMeQhuxmVXmAHKF8hPa1YEbgDGhJcHBGVqoB85o3mBTezAtkRhuYh41tbBScBgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UL85Cg22XsozBKMh6btZd94K5GhLEjd6K9aAxwHQKWxyhEkpSBCoEX23VWGr9bxBZDGFZQEpZ98oynXKe1Uzj4r",
  "key1": "2AgPyGBt7H6s3BXWcfooMcZTD4RnGQpSbVDrbbiXgiJc1M1zGZUnpKDTxP3P9h8JfjT2bAHpFsQq8f3E41XSjxzG",
  "key2": "55kPs9kKj2N86t6i1vykTykCLYFqznDKkZrrbMaSbxn8yuhJ4uMrzNnuq1ab2kFiYuR6sDBinSbnig2EB9DnX9A3",
  "key3": "561Brxnt9DAWJVn5T9aDsoT6Sq9SAw6waShmdNLRJWmN9P5XdyUD6Jr6B5kRKzK4UckA4Q6HwmAn8F7ZKNHvPAQT",
  "key4": "2xEKa59BQqddoZnbunoU2BNsBi1hwQCHWEXwUoqL9Tx61HWb4L6JKmFhdr1XoN1fPktyGGBfSm2Z9oLTcUjdHdF2",
  "key5": "yPbTaa8VDDExko1hon2MS1hQaS11WV4JguwytKSQAFrXaP3Wi6e1sQvnTJLCCUPHYYJVbmueeLEWZpCjeDDff2q",
  "key6": "3hHLTtFWiYXvDdBV66vhqRdH4j5wZjWwCvsq3m9xNxaGHBpKMbGQhuMguZ3L2RFPt5aRUysuyKG68EHiiioPPyzv",
  "key7": "66398ebTYbmSWuzFwT9co7RXL9RMi5pwYnnC8MbN7P8uCiM5yJ2iJ4ovQjoSRwG9NYQzxkD5n2QS5ixjQBu9NUxM",
  "key8": "12684W7au3mNzYy6kU1NvJH16mePryFkxUqXiEyNrjDzB9vwbo9o7n1yNz32e6AmvUH6e3cMSgKmQu1YyotYq1hp",
  "key9": "3cGXXhysDCHNHygSfq5pFNYTJPnoF4hsZfdVNFLDkQshCXTGLcQWbjHu5vPkG2eJiAvJuzziopgtEzYq4bWGHAjd",
  "key10": "3QJq4XRCMJc1Eb2csS1Rj1h8NhFsKP71u7cvCF5JMpicHteBsNVRLDMZZLDtXHAHq2vGJU98AWbxj5od6KerVQRg",
  "key11": "4BcS1xUJBEk9b2pP2fTBAgvnEi5nfGtZALQg1KsutwmmDLGWkoPykTxWZqoeZrhrQCQtjjv98rg77TiLmE8xiY71",
  "key12": "5id5xz6qgDfdmvNKABWVgtSAoBsUZJJ5j3fzWWnumyYv4Cd6c7ZBhqURTYEhRXD6DCASZLWZ8jEHB684gmZjcfBJ",
  "key13": "3N6e3AGNxLYHc85kgY2nUfwgoFzwesN44536gzDXCLZNDxHDHDjQBPrwBiEEUrDzrVLeK1mnttHFCMhLWdGeNnf7",
  "key14": "2bpSB4tBRResqv4xbqjZuptxi7gcmn8b5SFvFczNCuYRibwaLkoGg97tMEKk3eRzm63JTBEPQSXhVVJ96U2mN2pR",
  "key15": "qfXZaBMMBqwCraoPKt2kKKhtS4eNaeNpfUW1eQ6w2scSPufGUQqbhAngdBSMxzSQ4TwaPoboEuoEHEREYQmXLFU",
  "key16": "5vttF2ZGZuHvtThAiHPWPFLzd4Z8E7YoPi6qF1tcRbbQ1fhTCiT3j7QEepn3zffx11puUxKoAGfb2pE4gaoRb9eL",
  "key17": "3PyYGJ3jRma4P5Gj5FEjUW5t6u5MzeBxmEDJMgt9VE2HhnRQLaoKrT4J6b7EUUthtw6LSDgNEFVczeYGKpu7VkFU",
  "key18": "2zGWV2CVPiugLgrVNYRiv5M65oHaHmX68BcEr3V7cWttxDNUr7SJD6HWdsPrtiXTgmNkLXec296KPUmmERDLYpXF",
  "key19": "5axXiQ7SU18PTnNHYBhxxaiNCy96uYZMdAfkwuzk6n7RJwNqq3MSj2mwsNFm416mPfkjhRKTth96wsLQTDbYc25w",
  "key20": "2i9qp9MT76rbvHGNm1HuFLbMgP5YK3Si5o28TtkWWsbbXU1Hasfj2Gx7pdvDQ5zJiYfhMD1Ge21d6V5G2h6SpLaK",
  "key21": "3HRSQLxYGubNkcuz1iFbtSjCvRJ9dc6ktn2VDg8gvzarLP5Pj2nk7GhzoXoY1HxCsPNyFd7SRRcGSdKrEzNHdN9e",
  "key22": "5RbDAW8Mnucbtp3Nztbvt7RADYFzDmrrwTHMDEfHTqrvWd6Q6qmf4ki3VMYXeSY42xKgq18XLXtWBjoYYbDcfmS8",
  "key23": "4N2YSGWC7G1wU2ju4fZ8hybX5mJxJzYzHYPc9NB5DRwN2hwTRP6jc4A6sfznuZibGJS7LmN6MHJ7m1f6HcRujSs5",
  "key24": "3pCfUiKinfiavG377kT4yT1w8UFuMEYCc1vVUYvCUwSQYLQDG1SCMWPLZwa1ihiYoyenMJmm6iB6jza8LM3qsKvZ",
  "key25": "3JWpu5n6Mun7RHc6t9XiTmWxfUmCmL3Vf587A3uRJ99XTSQxb11YPZcJ2sWpo6ebG62ssreFsDTXjkseMsL2zQTt",
  "key26": "4UwiAzie6ih4CkGPXqWcVvRBnrhLQenx886WsRYuwA1rRFz1d8EsY1HSkWaeHCrRY8eQAjV9uE2Ph32dXkYLeAub",
  "key27": "2bmpwLA8Hrt9FNVD9CRz2rg9u74h4bAacfk8ASQ46So1owL7dKyX1GPhY5SDtvjRNrzWUb4Lxj9NEyzc6A2Mk7kX",
  "key28": "3QaGRpTaZPcmJxBaBis4oiHskGkdREQMMcFeVhDMxYbEaWcj6WZcLzSn3PQQLigPp9NTPEHVqWGxwshUabQccs3y",
  "key29": "5MszCvAcMCrV433XMUKMLtGHaKRkBS3yV6LupCUqHwP3AJWcdAyVDqcGZWt9hBMTR4LV867SByqoyutj8cnEJ1dR",
  "key30": "4dR7Lb142v5tjEHc7eRQv7HbsnZDmJM8duyKMBt7XMXguAHNUj9xCS3KFWPRsHcnWza8nAjXcJbQeh8nJgnjuKLm"
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
