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
    "7PAWnheUMz4vGibNHrP3dhUnJcNPktWvgWrSm23p4uypdFB8fg16FsnKjkjyHgXfEKnQB1sMuLqPBRyCZyWe7rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39x7CMVrVWNP87u2FhBMHBQzmP24eBwK3813H5KZf9fuucZcGRKBvLzwNgQ2amwbrc7dAjG5Je1k2h5ujQ5TwQsm",
  "key1": "4kS293ssUPED96D6cygjnSKLYmkTqzyuqhUX5WTxtQCPqbXpo4dtxSMD2vhgqkJtqfqqXvFRrxovKSadyzKjdTiA",
  "key2": "3iR1hMgMXuVjYFkQLfZJY9CZUDvm4q6HjZvTSVbDfDGp8SVv68MQPAK8anPh8zBgUi5jvviuJ35WDPr8ojQVh7LZ",
  "key3": "2yTMApyA4NqgSeGszbq9wPW3mL7Ao1w6gMZVp7Z5sZUVsP9GqCoaaFGFERXE6RWP2JXcyzGJokRFBRP6Q4MeFpER",
  "key4": "vB9jxrRxk49KTHeNcr8wRBR2Jvzz3uXyZCFvNTaCenmvqzhskZk6J7CShF8GuCjH4DgM7f4R9D9LFVWPsT3Y8dJ",
  "key5": "3Nvooasxvvd5YBS2oNUDoZod9As3VVQGmTtj3mZYpQfoinbCN9MF4vTqytj5cB7wsASTktttQbgkfLAFUyXE4ghh",
  "key6": "3fwGXsAg2seSPMsn2NhrR9G66sxHhfrWKCfyu591aYDxZZGHG6JtKb7rNtoRB5axSe1QD3oV2w17ShaEryWc7MB6",
  "key7": "2SM6wF4dTYYdkazD4udvXJeLDByUpJJLysEEy5pq2bbWoSWd3a8DwmR4FtmJMB25N46BCCef7ieYe9V9jAoN22Pg",
  "key8": "mQeArjYzd9pKSMBL9GULSavPvsfwZDkH5AGAUxjWvVLj4BVvdDzjpkPSbE6n9K4KfgeMSG2AwSiqN7rnxdX4buK",
  "key9": "32PXaJvHKwxrQdm5BPuiWnmPTiGJxmdJrXB6DMkGZ9vGu8CVBEBbgqoeMgFNySzQ1uCV1Ph4n33joDzRpbuA2tsD",
  "key10": "3rkuAYnPrzn39TLTTFRtYajTro6tF7h3e8iMsv9ZZmzmHHbvJifnXS4tGSJQX8qFpk5jh8mcnrsh1TY2TU5MBjPS",
  "key11": "5sNXU8aAfrWUZR1a8SAJ3rLyfHbq4cPSabSTnqKywNqjHapkDSnpWbNSfgyyyRVCKpp2AxsQdPrmHMQcjnobDwRK",
  "key12": "4TxfstixB9J7wMFsR9kJPupTKCUFJN6nAPvpy64r6U2X3RYLMY6xecyyYEDu1MckjCHv2fH3nHwzZSR7yG5JpVMh",
  "key13": "i7jzz1dZ1m5KnzSXxDL45Dd9WgJFuWU7tjkJHy3UpRK5fyf2ZcjcjAifbkMJfZgNYreCuXk5HDj49riHxiLXtB3",
  "key14": "LqigjtKVQipZdBw4evTetea3i38i1Y7D4Urb5sTFXbzqo73JBLMvQrFGJwoNWWuzbXqqfgBg6nxYBeVzjwzezj4",
  "key15": "5pv6M1icPSRRSeCaXQQKBxtBSMvgFH1wuVXd19ew9jkaZT1uPLJe95mjpMmCfDxGQkAWD8nUCUhqTrqGCABqm8VW",
  "key16": "4fqgQmj4id25SWPPJ6XiPk3KQXUMeB1vkFTDgZUaaBNyMJdkSVV9gMLgvfNy2JBtsCEUmg9te9SnSN4thTRvQz8M",
  "key17": "4zDhzLH3V9KJRVAJyNVVYkREwRuMEm415ZcpLAdKezgFvLbeoqVVm2QPjp1aqo2dQafC2miGWYPA3zAQBed2YXrZ",
  "key18": "28RiyukDTourMU6uEuYhM4PctJDhcgRWDUtkLYa4a5JwDTy2WahJX6VYNt9B2JmuvhPmV8nXoqKuER2jnVrErSF9",
  "key19": "5CFez3j5ezb9QYAkPS6pFyoQpxwxRr1es3LYKLig4bpjKoa862xhQtia6bt2bfVBx87FyAexwqTvHQ8keANfq9fC",
  "key20": "26JwBTiPZMZZkvvKWMbsGHKkwBWC7m4jnxjGomn8r8bkSTDeQgxwJteJK2QXkV8UQQJiVdUPFE1NeWtbpxsiTg7W",
  "key21": "s2xHjiz7kHhUL1udptoSuVkq1C5Pdjfozrkqn2qkUhXoYTEYx2E1dUn1PowKvt5TPd7vjkxWQVtU9sytAchbLxg",
  "key22": "5jJ2KxrupQrNZSFoZ4L5Xo6F8LxKzDCoCDssbLxFUetfkZnQ812GBxdxeUgiz2X1y5XGGHdoVPo4nv9uCTx7neu2",
  "key23": "yUb5nWHDttwbWK2mzrADHPkXirbNRPuhQKr942X9jnwH8bFwVgpJ54C4mNJ6JLcg7be1gHCJcSnuzX9uvtPt8NH",
  "key24": "1wbFFojFChr2zWndCLGwAPaD9Wh7WyBTw2dKpi7k3XT1aBokuE1rLrM6fn6tginY3rLJdiPVPjYNMVgKwtDyMUW",
  "key25": "5Uetb51dui3PiFwNQHfpYK283au32nJa13XPr5F4KcjJ6d45jrQijS15tbqUsk1tembAbE43fAMu2vvxogdG1ALd",
  "key26": "4vnBuurBqViprtFyGuKKTkM74QnfhWrjRGxptwwsYRL8MBdq266euHmriKPD569nF6Q8Kedn2X9ZWZZsSimEEVpP",
  "key27": "26Fga6M4qgdMqV7rWQjm3bmkSikm5HgrahsV3Tc4ptuYACKnVyHHLYWFDEhhpG6G5FiNLGR265UkFJ1FiW7jzqYq",
  "key28": "2H57gigw7UNRgxg6XncmRQhBKYX8fwcwHFMEPXSCE76j6BmRgCxsxFJDcqg22BWK6msrxApFBjhXSegsaVvLAgeN",
  "key29": "64i8fqcFkR7v2MHEqxzNQFzmEWDHaEoW1PhPnvBLC364EDe869ms48fRAxjgFzPVRUfJ2XdMi8p7GN9wCC8V6Ktm",
  "key30": "2wEWzKqXJ8TzKmTdMEMpPmhqcs6P1VmVBvJC7nG1ZmqkS6K6powABFdPQ1AiYNcxqt68d28o74ATTCHxpuK2d9M9",
  "key31": "4gT3o5PYmk8Q3FV2UWDKF47SqE1R2SEz96TJ98pJiMbaCSSGGypKk5wZ65SfVioxdbZ5VG5s4gHhbZDwmvhzE9KH",
  "key32": "5xYSR6JZf1BeqQXHmknebAxdK8uF1T1DEqUw1JYxMMQ3pE6TstBvSDEc7atk6XWq7ykmGvUduSUuBgMST3n3u8nm",
  "key33": "2euc4neuaXgVZz4pK8jPSRt54j3oYFYRRFoZS494ZftHVk9kaqFWo8T8kbWbqHjHvAu2W8rvMYsEYw4YRbV2Rccf",
  "key34": "4TeTUirSce6wJpjsXVDSsxSS7kvq2UG33vfV2jQt5upARksaRbBU6RAkec7Y5fyJc9nkQBTgojZ9HRgHx9UzwZ5y",
  "key35": "5wPPUjWynvmWmcj7cMAbqbcuTH7fcqkVXzpUJ5tYCjtL39pVBzSDWdEdu7mLLBaaFiYs6m7DkLLUtjv8pdaCvkTm"
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
