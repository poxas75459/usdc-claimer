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
    "44oXMw1uQuE9B3wK8BRXVNJCWGRH9qxTesSBtup2T7WRYFrP5dcinQky8tbDXmB5FwyQGKf5Wddo3ns2guC27Ynw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ab1avhv8BS3wF7Dsbd3c6V1hmMo1niX8Xyy1mFw54ojSzhwjs7P8ewLm6BRJpMaRWHDDJcAAHZ6uZLypX8jg1t",
  "key1": "LmzVCfiaufc8yYQcekukqT72ZGuFWQAHJwLQQ7N4vpiD19tBASuhKqrosGf3wMkJH7mvBmZetx4hnXxCP1QFdpM",
  "key2": "3mHuJHV22QeoZpJGSqMzNr9U8HyHTviqTYCKdNC38G4jK5cpJRApbU9qmFZJUdnB1PnFjUx7LmKZ2zSJmXKYBs63",
  "key3": "33E63F7P1ePQadbvuartTvJgvBePnVy2GQfhXpqWUvAhjL85LnmUmFQfvGeouS3yvAnhodqRT6RKdjC7m1CzL8af",
  "key4": "2DZNMr6vgsjqAQJLLukBHW1rLGeBadp1hwrEMAGksBauDPpexo87AMydWx4Y5nv8ypQMF6Gu58deXjMhUFrf26HV",
  "key5": "2bC2z9moATbEuFUvhjcdZD6dASzn1ozxWaQFR8c7wS5hJyxZ9ej2GVBcyX4ZDMfq4ogUFa2iHwJfxi1PHNLKuT1d",
  "key6": "2Kq2zSYh3gAAzMu71dUJTkc2UfVeozZKaVPGScu1hB24Sue3S2BRU6hAigcak11vh4z4eLsxwnwTWzFBBwnPCqF3",
  "key7": "52gnRnjkBignzCKjEpAwhM8PaSgb3zyJu7Je9239ZwWw8mPZXzLTvBG3ZDsHAZiSFAao4CMpDD6dAK94ncc4BPSF",
  "key8": "2Q27hpQjK6GEEPe9AQvWR9s9unNKMHdDucAjFBgu1S3JVCtto4MZ8av8MWFA6FegkGe437NnGqqKjuYcuBowYUMq",
  "key9": "9BR4D82c8QdsrqwATFR9CLjzP4zVbDmsCXJ4CaxGdjQv2LqWQqSQJ36nPjdD3y5zuG48Wf3cKJWH9jgqutr6vNq",
  "key10": "2gzTFAGC7Y5qH4qNb15XzBJpBLBuB43rQ815c8hu4txvhWuCKcS6zg3Zxz1naDT8pXCqgrT4rzdYLxQ7m1BW2j9N",
  "key11": "4jxmwHugRVWKBpsMgCQhS3aA7erJk2bvEDC1yeiNuQwFuWQa4f7qaQvqKXhDindasL29LpSznQ9bcutbQWKQNTQ",
  "key12": "bYQ5ggHMK3pbR2KrwEbNkUwEQpTQ4qMyS7CjewKro2S6g5zSjqQyvkiTTpxA5AGrRnDYEXZVmTUuhTY8iooy5nx",
  "key13": "2Rj1K9jveGgDfrBByiBruz2pppXwjmhhjePL8ow8EmopupNsCuLLhmXMbJKiiW1KPfadxW6v6orKTa6hmtnewYuw",
  "key14": "2ouFAF8XLExeerYT6QQRGMWuKRRCiudve6wz5pyXSBw8zazJySARx6fBmcZwGKi7XXV4Ryk3GfeHXxeRuZCAfv6w",
  "key15": "4UPFbYjXhP92NQAHK22SedCFKgBkqsXDPLL9DmaWbKyrn59BhREZLtjgrCRGy9BcKsgQSyD5RDJC3JzyXwu6yMM7",
  "key16": "3tpzueq8romk5Rz8T7UgXE3pA9Xxv315ALqyToeoEexWSyZxaaX6bMGBDfdWiScCwi3voLevjxWbNhgqi1ECkrjo",
  "key17": "5nfeXa3rt6sCMzekZZ1Cund3vcRSFzag7ug6tmDyW9FK1dkkCcFfEBXfDqcjR59ALJXQHuivn8K9gr1iVDWggP4U",
  "key18": "2gUzDsSCVBbX5LCRXHLAbC92iPrgPbHmkNKZ5oFNcTCwoYzfRHZyDwfmnyWHuEuwmdxcM1ZtX6gLpYa96mbjgXVD",
  "key19": "5GKULvbq7qgkhcMkjkMRo9cod658hnNfjmb3HC2XeyiHorZ4x3osinNEGs99yjRowi2kWL4XCEioGds5HLdXojm6",
  "key20": "4N5kegk5GBpZXwhsPBryVPXKLF51vguH8T5RvSRdeTEcCdSwVeLBMbAaFv1nvMefBbydNiK6dFa6WamN169MhgQM",
  "key21": "2yzmSCKYskwmK7B2TmHtvZk3Esd8bbYYSpQK9JGwkvLsP2QWfobnTHk3uKbDaHXhSc7Hx2Y2DdSVq5fE4fJCwqiW",
  "key22": "5T6YNHsCYVMzEf6bj2gC91JzZWeVG5FNz2qYUpXeYP5PA8co2SJfCqK7hXtYj4UiRVjzcT8JoVadjequLLrJ8Coh",
  "key23": "2fzAH9U6WLc3NpH3zvBHRwydFtSSR33CGLKwWndY7DDHVUQpWrW1ZxsbeUtBZAPPtjyGELnsupbHVZyrem1Z4RsC",
  "key24": "3w6yd3UqNrdrzz5bLY4eSEbqDQuy3Ycr4855m7urguW5rpbTAJxkrhj5qYf7S7kC1fazDV3RytWW8ochLVXstToq",
  "key25": "2bPtSZSFLX3ZdtQqjxZwahSgu1eWRGtrpfRuTKCDxUCKSXn91T2EjZW4LPYtxeq9D5Urx7FR4QKaooEcSXiE4T2L",
  "key26": "2TDLegMQLHQPRcRK4QGzTZAncviA7hbwkUaCntZBhEQX6jnBnUhD1rtmGWLCokW1REjaCED6poEG4PExN561rWCL",
  "key27": "5ASJMhCssUwhLm5T24uciM9Bx4wvjgngHG3T8WvCZFus7MjBZt8ZATCTAZmj6KAinJyFzGRPUUHd8k8c82mxVLDi",
  "key28": "5qNc1z9pZi429tU6RSEB1iDgESdJEq3csYDh8wsUctVx2AgFsApD91uuqTSpPxc3z7jKyNhjtNU6eXEpgpdAwsWH",
  "key29": "5tL9J4Bg5EngZyFN4U8Vntg1gi8Vk9dW5uzKpQ8nE2v2E4LqPRgjX1RmoZcWiTg3sypTf4iB7xAzhXJo1nrvi8ah",
  "key30": "5e7LciAPxK1EwVPXjcwKQDbCGmUF9i14Ybcrn3w3H4idfGpFD5uHcBeepGzZj15BhRLfxFoAag1eaoBeHARuBtc7",
  "key31": "dMmsuzvHRYWofKKeEUxYdA57eWVAZsuTDJib3b61shkfVJGXHqzYZvUHaysnLMRZvP9CzxvkaXwpCGqs8j9eg8i",
  "key32": "5PX99xHjQZQKsmGARzAQJUEmeBU36D6yJD49EA3J2Sd9e9xVTuAY1ZHVj2nEJPMP3isZ2LPZpEAs4rmyPSR4Qva5",
  "key33": "2kv1uB1eVTgqSn3LKw4jNSCPMXbjv5gLzQA3BLaAHoib9C52qWAFKHBqMQDAG8F7ZK1vAimSNEjhb8i5YPK6qtcz",
  "key34": "4BsSWEWr7mi2wuLBkc9C9R9T9LiyVbvnKT5gKtkvGjxYJXE7ujUuaSeb6htW2JC7uXJ2MvBtrdxzfq5oEb6ocefr",
  "key35": "2Jubdk8U4FTi9QkXE49w9taACvEsUYwLK5sVxoDf8BEurUeGWHUmvqtgSi4gGSsGQDZkSwZZAmSwtpB7RYc115CG",
  "key36": "3RouG1dD7PsPDmF33mEjmQs1aazusGjh7AjKMmrRndY45PUMRcsFffMj1zKDbNZkA4YtbibQM7SREpNfhe5vkEB3",
  "key37": "52irp5LNkN7CTM6jHusY7d7Yh49MEZi2FRRWs7eMx3TUevv2RGNSUoDbGMVBuJqmeLyBw1fSjVhFpGZZHYeWz7Dk",
  "key38": "TKPvfVP8MWPMzZNKqYiRjwm65qfB5wdavY5ybcJZijSXJ3wZoZThXycWq1NuGtJeciuHkj31dFuh6DKSNBoB9ij",
  "key39": "3dfDMV6Z1GiknsGRsj2X99jUFC8AZabDc8nBAX8YdQnZXWWBZ2vrX6RN7FsBLjbeaUCPp5a8SyZXmh7FpDwejsaH",
  "key40": "5qKXYGfnx99god5nKMeB2nzaLt2PvYwAvnfj5Y2bCx73z1Sv5vmHWCDpiaYz2PuiXw4JwaaDGQGurbhHZavavzao",
  "key41": "53WawkGALWxc4kRXtjUhqs5CCZLLfFrvY58unGb2oqt6LnE4uas5YKVMCntjPdCsYhMZpTdkzpCn1wt2LN5rL5cU",
  "key42": "5yfXezhcJHxnxoiEU7d7CcnR5SshaYYVaY7pToDcG6QJdyAiS98WFX2aJfdfMMKqgDHfyge3cwopKVutoHBuCCwy",
  "key43": "egnDgWs1fyMg9KBhWWxKCbDa7Q78gpd3Hw2UHD5UaqLHEysWMT6wRBV8GB2dZwNz9waEPbw8CzgjiWmTHk1KsSk",
  "key44": "2iP1EkUkPxNRfoKq6rAVcLgjQdRSYQh6ukYhLf6jahaxmwFCxrijQ8DVkDYL2RVzPTNpCoCwTo7Xq9Wc15gzHVEQ"
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
