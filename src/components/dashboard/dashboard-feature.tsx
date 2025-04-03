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
    "29Cq8nLbKuHxUy63TnQptVeWEtH7EbZtRERgycipb2Aw71cZpjVVkFGjw99sTU3gck5VZwoQ5txSAVgxBANJqt6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "id9EXPb2FV7eAwnpi96SbKNkzYykqDB6FtHPEbPb1Z1VaakUh7wmXJd772AgSzGS8TqHTdNJdz7vAyq8VadDRLh",
  "key1": "3KQS6k6Hgpd7zcfEXWAxFtSL56WyxkKF6HoczEgmTPBpAkqJ6vC5UJLeX1ZLhcBjxuNXbVdNMV3rbyh97JkCWmmf",
  "key2": "KtVTHsWiv8go5jFfu3iWpQxN84U4kJPiVf56jBGSBQQdTqE62o8tQnTMajwhZLH4TCe9F5nYmtkS3kdb4zKkwHV",
  "key3": "3AyBFsEH9ynt9z9EgRfk7ukF7EtRVNFLLpBxYCSXCzuQ1QggzvNvCjusqaKA6zaY6jbpr7qgm5Tsm2shRpKE6p2c",
  "key4": "4yP19qQgWBS9NDtA4Cw336JHmjyZ4ePGi8kEYeLq5LfLNW4ZaiR1XUu1vtDgjYfdrFnW6dWX2vhjxcVKVpYtt59V",
  "key5": "4RYTWdaTJaDk4J95nQgT1JchMi53B5sZxG7UViz4WkdHBCV9hc18XzXfPsNHzZKFDaWgFPDmLc9yyEcFYotavdoK",
  "key6": "2EZ8qHWTxabLGB2E97128quBgUDeb3KKbvCJ6H7bmGYxpe415RCwBXZBbMoLRP5KjA8QZntaWnPMj4EdkcHdkCGq",
  "key7": "2aNxEjniB8UvS8BwEqiSB1VLzjtdfS9TByvYnT1JFYRoKQHGcoyHwroEtLfRqEe19o122SyMUXUYKdYUUnmv3ETq",
  "key8": "5FrQv7GXs54R811PZki3xPx2i5Gm15BrdVLjEHjd21jpNrdGWXQ3fkMdhrTsBvzKNtgaz1pKZjxARF5XpY3rrYbf",
  "key9": "5xGpQxZQihf2njrsFosxXRdGmEn4Td659GWaUJfPthz9JaMQQUELLnv4HxFq2gruX2Mw6wqS9opTFHYZHjC61BsY",
  "key10": "3sR9gWTFHTnv1YhRiSdJM6oyHjMdGznu142MYyc9DWFCfTnMCp2azjkMFk26vMUb78iFxANdpL6eD8WvR7mTCaAZ",
  "key11": "mxGqXXc6JGxiFjjEiBfmr4ocfXxVPfjh3pqJPJAaqz612uN89pDfaUTyrzo3py91xkr5uMqrTzQhe1z6mosX9S9",
  "key12": "2X5NYa8MDqutdvGnu8CwKxgkNStfN7JhRTPL7iwNAa95uxSsgiU4PrL5j5PGYurVqreBvA9MX6A3FgjswCBYNZrf",
  "key13": "51Ubrn1k4d1YspBz9JwruwJ3WUVBKSsQ9Yf9aCzTsgsF2EzJ9UJR3a7nppBm528VMmpKzUJ8ZVxXnmX2YuQknTgg",
  "key14": "2U8ph7iBLsuiAFixcCHBE41fvd4wsaffvppUfAZRGpL46FZfqukM7AJxNR7pLUj9qNGSgxKgga1XyCFi2UqGMGNv",
  "key15": "36dpz4HizsqhFAjkb9xEvS4YkLRsXg2By68NeHX9x3skqHjNzDE71e3gwnxYbxKYXvGVLZoe6Tg3a1i2DhdP2MWw",
  "key16": "2FBetjofyZ2X3oAKZ7vrnHnpMaqQpYikcrdNiUazdpFr1VSDsUFh96SbSL41VDMfDBAWPGyu2pytgccCmQh39xPo",
  "key17": "5aycrEzJnbVi9ziA5kGLdVVWYh9wB31oa5KLtW7361TMTiLodoP3AN6pcDJqgbzQrDAwJZip3kJtHz1gS3JZcrHd",
  "key18": "EXP1mg5ir8WCEyqeNvdhMvKTL3DoTSGQrTghUtRKDvcHbMmv73K1VUWuqZFeTfEUKPwsis9jiBn9ZMePu9SYDh2",
  "key19": "ZiTTvDahdkMDFyivJcwECuQ12E9p4ZTdv6nnHw7uLqpuRh3Zt1Pzm5bcXgeRr9QhPCtRJPHR6637vwaTyh5gBZ9",
  "key20": "58HadHnviFzqncnVBwYiJkTmamtwPfFqKrM1sn3qfxaADk5NYvZ5cwKa3gVD2U5So9ALryo9H6G7P7GLtDYYeSWQ",
  "key21": "2ZkEYBqwk6Zhqe76hJjbHcA6XLqgtGDUubTiruqzVWjqzytoArEwMkWqv7kePHkxKQpRh63wvJ8r5JzTQj9Nu7oA",
  "key22": "5kCUCkJyuCEyKcigucd2BHKZ67Y7LadauqUemfxSr62ubVmUH9yA59BshM6sKMhxKemC8VwxfLB4NntMuZofS7Wm",
  "key23": "43KM1BYgPuB3zvH8zyL9W8MuEqjo3CUq2tvs14qqSBX5JTMm8fi3mCYsFg1rDV9hQwNm6Q6iFXL1RdERDrwUfdoF",
  "key24": "3GRfVYX1WFZuuEqU5QQM7BCSd8ECdQ9dy4mLbRPv4kpktNLomUFJHz6TxNJS2gH8CBHvKHhSXfzQq4hmFnp2A2yr",
  "key25": "5dco6vfYFkX6kSDztjZjTpMhE3G2cUpNVxtquSmEW3kLQW3PpxKi7nKK77o2GZugtL2i9fuYyCFy8Uk3aUtiErPR",
  "key26": "2cthvt9YAv41Z1rq8JBXeVvFb19yiwa8TvRuWCcedaHA7yPBV1fk1SC4KQhLyLnjmamTsXPHUT5NHKL1peBTufQx",
  "key27": "31zJKzz5UiyCveNruWtsrmBbUG1eFEnBp4jYfRFMufNh4F4HWpAxqeG3QQSEPSa1FE9naqg5gQtvMg9BXse893L1",
  "key28": "5UgKuWFtnpJfLrhDK1ZpSuyRG9wz5GSaZTUXUTx4bjM5oTfhGXT2cwEhc9ymM8d6wBoZa7XimpkEjVBQPWvGTy65",
  "key29": "TcSEejrTUwkRFEtTw25sXfWYF6MQn423UBKEjbJ3ffK8My7ytVy8ydfo2adKHuk4xZVMH8uX24ubzmAWZeRxnD3",
  "key30": "XEanFEsBvMPrUSTk2nSCpa8jvAxqktYPbMCE75duBt5nWnBaKBzS9DeGBaAdaoVnkzJwMwjMXgu11StmvwR7ird",
  "key31": "5GCTuLtW7pBSyUcmP1oBpuZm24ATZZHCr2GN9szs7m5ejXBZrBMwNeWzjHsowvq2ZYDuQN2xMFANHMJjLjmq5ugE",
  "key32": "2rs3H4wHgT6WWq9PiEHxRULBQE9GzbfhTC9b4qF1CzWctUMk3AUBJzpJ8J81K62LUAxyyAmiUPnXXtdwDigmwpJu",
  "key33": "27vUvmAS44ibQDfZCP8fcVBqVZr62FaAwGwrCN5zHm6rPHMuxFskKsctseam4Min8Ug9WAxiqvpvQ4xT62B2UMs1",
  "key34": "NhC3yCm3EXNDj8j7EQrUC5gFdpxdDp3hnTymosrsnwanbToEJma15aMj6rimzEoUknLUWocYdacqXHCKuigxzeh",
  "key35": "5VWV8so27GExSaB3FcHU3YrmQy7wcZZ5HyAjySpGUaV88QJPhBN91eXpEQCz6vQ9NGrPBhVyBjNjVevbQ8ojXVaG",
  "key36": "5ex3sprFwf27gMTBGrX1ZNcbU7ZonHbwAmXrSgdgaY7vzXpvpjXG4rxtSRbzsSNprERV3z5cR4veMMMwhec65R9X",
  "key37": "2EGtDFt1PZ7KMiDGEJPff64wZ5TtPhPokY4kERyhV6ByNmLJWb1w2B25pupxhQ1rFtxxAUbXBkAqjtpsR35CZS7P",
  "key38": "36m5PUGM3mAyeEv5BPQdNqc9q7KNMsTwV864wz1Z61JU7BpC3suhCrYhSnLeprP1JdZQd2DS5z8T2X3whudwXeo5",
  "key39": "Kxbn1TG1saF2uKWNYhkCapqtiHstS4cknJUyCGE4nKCyZ5yXdSLDMnV1zXFWKgeECHrrneZmtgtzTqsWEHPk5hR",
  "key40": "bWNbgMaJj9vqjQPGkRtbb1ZueTKqJ9XXNRN8mLQvCxNQ8dpjazEY8WDwmGy7Bw2LNK2UusEPsc4HmzAPd72ZjpJ",
  "key41": "5pinP45hfr4B6Tk4xbeKF9d1vkCoktPRyfeZUKNmUK2pRfNLbC32yYqBLMEcHRe32Zg6zCPCz5hCL3Ztfp7Y5dmH"
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
