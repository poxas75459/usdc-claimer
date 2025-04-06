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
    "5s6DWHer3zBfdaQVSv2EyRqjUyTAmhstkRCqVWRRa5C2QeLkiLgkvzQuikZUsENd2b1TRW9np9ZXKqfAicEGTJTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHWh5j44fMJ8E7EtW3mKMiUZZ2HwVxAfLxQPrKtg5oWUtF2hHpFYsF1rY5ufH5PvmXHRLyUdMFugwFiRPs1Y1R6",
  "key1": "4Ze1p6c3cyVsW6kS8hsjfz6Kjs5zFRv6bAgkYd3EgAXfFXU2sKijPw9wTo7adNeDvH6fDKX92cyhBdPzuQg1Z8xp",
  "key2": "2gVdnwUtiS7RvePmuBpiT8zWhmNqQXkryybmMmqtrr9CTzQ3L9kZmwqWBmHGATceeYEfLs17sEzWusVza7hfGdiG",
  "key3": "52vwFewMdK19mMk8ePqFXcC4tbwwarNt2gT62xjfHWsNF47XQNCJR4WHJn2bBT51abfEDjSb8eSdZRspDHBpfjCK",
  "key4": "WydGRfKSDtBDGLu1vxzbmC1c4XMX1zsQp98MgfR1AWDEUxjDCMCKp53WV5rpJ4e9KhZqW9z9pMwBSTfC7gP86dn",
  "key5": "4khF9opSD7WtrQn8nLtPhmipZ7HaeSLowpC7Zmuyd6NaZderTDVvzrE8DDnakuLVaL1wvcdshz5ZwgMpqiBrWQFi",
  "key6": "4ChLw5VAdvAawk2v6DAboCCQFxHR5fTDREf36sPqEde5KZZKzVyy1YXM2vtDQp7KPoUwvTcP7Ad7BtkTCNYU2wwK",
  "key7": "4CF2LtjPME7PrKHYssG4Nr6mMrQvCnfpUUw3bnB9avhZFDC4biZVck32oh3NSsLcEG6HqYvoktTxp7mwdkzwhb7j",
  "key8": "v7ynebHneXYPyXffyhoQNYEgiejpPjEmcnyAr5Cr7BkUYHLctaB13a3Cov63CfKsikzS2uRmPmFUf3k6Jg6wDmS",
  "key9": "28nnkSgvUFewMCCk11zQB7cdY8QuCzxfvgKP9HSiJQbXV9Nk1CJz8EhNiZ15NSikzfdzu2zitd58wKfjMvUQ74RL",
  "key10": "Gsm5j4Hpmb2ft69d3TMXo9VTz32YBmk59GqsHB6UyDbKwkSfsJdw41aHvKN46gpWB5epNzbgkw9qeZMZoHWRco9",
  "key11": "3qjhtKzmXQAA7UEn8h7hzRYJJgQmkF2M69dKgTuC8K9mx1svdWFHNGGQnptv7v9zwAb6kHMFHRKNdmowUsanQgNx",
  "key12": "5Qh4Wf89ZSDDNorE2wwAyq1q4QhEe2YzAchdPvVb98qig6h6ztZiEATY5TCVuP2GW1d7bZamo7oKqY9UrVhHbQRb",
  "key13": "2gNBrvsJxcNiJXLt5WbD9BeZVqnhs7DwA5Y8AMYVyxcCiEUVpk6EbSp6KNhsJ5ifGNGsEYTvAy4Xrvj522KokwtC",
  "key14": "2Gobp8Zcu9Md1AzTXRfV5iRUgwB2Aj2wDzyopfpBccwut4AiaKRet84PqCK6okHoy2efcQaPtk8bjKvjJ31aWqFs",
  "key15": "2UfMr4ia3ujbVZpqhWnEzHN7v8CNa1HE2K9sX4wfVjL18cjKge6tuGqhXw2rXbRvjQim5D65t8uzbMGemZmFuVo3",
  "key16": "5iK8fsrxCTrobq8eeZb8g6svEv7Ts3ou6kzB6k84XwpGrSi9wbwYRBUaUBgE7YyEYfjHNWtsApsevVDiMA6HyLVT",
  "key17": "3CqUnZnKFU1mqpHtTd4Kyo6JNJqbjbfAGZq9cnefxjPu7VKR8Ksm1xfyMY6xBs1UEdGcCASxojcLJNwY9SS4WJnu",
  "key18": "53NNNLmp2weenduzMxH5pYm5tt3Mgnf79axmF9kiWmvByHuRXdVUQXPSuikGAYySLNE7iTasLPCoegXqnTDxctof",
  "key19": "5c3yg5na4cYMyERZ63dzQUqdYxvmWK8tqo2pqntxkfgzpZTbarkUQbx2RNw7ppbhCmuMk3J38j5hWXY6TZRJTmGr",
  "key20": "zPeBMm5o62ng823Fkpx1uQ1KmRL2iz6Yp3yHwC8JWue2J174UjJghSi9ErYcuUVWXBtzvYSr1d9LK3oQvf8RA26",
  "key21": "5jmGY8p3zWQ1Hn6noxD1giEhASZLmdd8w546xcqZ434pYGS27rdsbEJ8F2JEXFjvccFKDNjMtzC8JXxZb8NkHzns",
  "key22": "3ZpbzcHzBy3nGkzbBZqCNPNL7tjwCfczGAi5zdZDvjDLTpCYPFr2xhqCLhXZo6JcRxmrY7vn1WCfXSBpfdVgzKZN",
  "key23": "4AmwLhZCbgpgWJzk2yH9Zro1351y12aH92zK7kVhSFHSkK6AcSnoEbJTpEK9yo22GmYqWWUogHxJjDheKTqEP4yk",
  "key24": "s59BP2xXhFZsXcXV3eYFySzPNTcu6dtYc2TzE7srn2m7uv8YaS1sjiPq5cPZbwsAYxMxHrUzfCNDQ9UWiXZmknq",
  "key25": "NKExLn3f9ctoSTtcQZqUDxfvsbY23MF9cG91KfqAfxFK6JhM85sTdqhkDxyLfT1UCE4b7GyMWbMLiFtNJdKVMJf"
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
