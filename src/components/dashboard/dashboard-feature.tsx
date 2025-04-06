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
    "61bS5zMVdCpGgtjECa4que9M3UUobz25fQ4V2fTjdUh8QXLbrA2DXV3h3WZivPUhaGj1HHzsRJcYMhEEwZLjZnwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmha7TPCps8B5kvsP19WSjNu4s9prJAS7bUqQXivaRipbnn88oJcGPMqxT3LrwXn2dyJtdq1Jq5jx3omzJjPRhC",
  "key1": "4KwedpuvtkuhDdceFbaKnPZDeXbpZ2eBZcXqMCKKcurscUPJryggkzkrQVqyuXL7MscP9YzCYsUX6kfR5KoGg5Wt",
  "key2": "3KkU5ickbDbDaExpV4dxuE9Pkr3T5hsdku6YJnywxcurBbwzoito4xjz5sYSMH79rf4A1jkVMqds2U64Ticbesy2",
  "key3": "4tnrGvLR6ams8oAHAHZUks6JrvZ5La28EXmKRyrFTonwk1Yhv1mQxBNjvp4BFtRTaPh37QkUpQcS7yrcg7ew1gk5",
  "key4": "1LtVnsK6wQnHGVPPXGeG1aPAbJBruTRc5xRErDE1maH19ymp3AmMeyYrYu3iBif7uGX9UUcA7CwcQK4pu2H4tK",
  "key5": "4RAKoJAVdm4umF163U7Yysviyk7NkjbvHZvTzG5MYGrgFwDVaQPjctRY5pTfpZdRiaGqZm3mXFS14eHpFa9CKvae",
  "key6": "2QHBR7ou1RGWgbA7jGAx5exwFnVN2Q12dkGYtiwqsoxE9NqK1dxza9YYQ6N1h92HfghjQnvAy65nEnbYkU3ss3CH",
  "key7": "3Qwgw4hm6Qb9nnfViD2tUcUdEEvmB8tTra54MCGBWqznLsvNyvyaysko6JYVsH9ec7zGh3WzcJ3qCw3aTja1gfDq",
  "key8": "BECYuyMu1Fx1PAEAUpvamT5ghzRuappCMxQUeSbzEnZqJLt3dE5nX7Pni4Ti771vJAXB27F6PQ3Fu1zZNNtxZg3",
  "key9": "tkJJq9xZotkRPufxGSsTwCaTX6hk74PDwRqa82qg7MsBKMseNfXH5SbwRbNxSbi1SAq2hYMA79ibUpbygvUt1sJ",
  "key10": "4fvjRTeUZT8ZZidQW2ZR6LJmk1HKwJbd3oPjQSYQcCFAdEzrNTKTLpMQbZ3bhfKQ8vTKBLbLTz74ppVKGSASk3YP",
  "key11": "3AfEb5F3nv6c7ABo5YG4HC5A8k77q4FezNn2M3TXPmQMYQY1dBP6RdAg1eKCAgGRK726paPektYgY2p84v47K95q",
  "key12": "34TvmY22BgfF2kfMqYbE43GqwUpmoPzwerQZcvpb21qzGYwYCyx5eD6CoXBqtLdjtKoKKD9LEzy9g4zhUJE7qaJQ",
  "key13": "2UcBYhDgEwow9ekBbS6EDcResrRZUxzAdo8zFqhV7Mub3nid2SdtgJ9mMZMxrUkEoWxYHPFgj3hAh2VzguA3PCrj",
  "key14": "5rhzjavHbjtuFdN7YauiGvPk3MrYbKtckXetdPf777KJxBNSrxRh8An13BPCFQF6Hw4U9NhR3mHos2qEwR142Zi6",
  "key15": "4jJbm9WYzv2eNz4NjrwrPrqjLdZdhNTXYGCccvUn4nXU5xEcWgBruMQt2isnfWvzJDb1quxSkTQaop8919rtW8Cs",
  "key16": "3cw1K3Hm2C6v2jy7Gw8Br2ZVjuNbDMsQmQ3KNDzbW4YikYVpyqppMt6qLU8Ht7V4W2FVro995GYkwwAuEVQ2ajmQ",
  "key17": "cMCyzDsCpLcksxqt6KZmF8ameC2PgVJfBX5bx1CYEamDogt8wJvV9QB9CNfjVyVQKepiUmxtukqB1QiftC2fizH",
  "key18": "2Afq2R3AwZsmcdVbgxfKwdUWzbrMYiGswVAHtcH6bmXx56BHvqEYRQpCEueYG74xu1v4RXkr2Fhmqr837D9Br5zt",
  "key19": "VGs3HwK94SZP6FEog9q8N4M6njp6TbsGrJ34h2mkpftQTrBWgk8Pm9k67wnATEGehqRfz1K75p2f2RaySj8NACU",
  "key20": "4h8UJgsWoWBTzSuAF7x19A7nB6n4SeDUZhxtF9b1WiL8evu77DU5j7g8YJLo6eBbrFR7jCik3Hd2bMR1XB1DHXyT",
  "key21": "4N3t4AqXT35Gcv9jFCELJcHFuQUQ946t52QD7SU6rWd7qAFznjF3oyCjbpUx56teqt8MBTVagkHNZDSa9onkrmKs",
  "key22": "2nq6cz4Ho853p1bNFGLwCMYELHcgoFjnpEpNoythRMgQRnLTjJh6oN2vc6wVnUHa3hHdsFM9jDTPzQFo8h9NkHfp",
  "key23": "3pzMfrT5HAKAsbukLrMpk3FKAH5MARDeQLyvW1Z15uC5LqDTSRZXGPm5Brw4hbSV1EPt15V1JGazUbj9cx2h1rSD",
  "key24": "5BmY4aNueqXqmJ95FaqjrK1KGwpPMxteZGdhtB2NyD8WG7ZpY56ypZjwpcHb3iFUEsaSZjeTWUFFnA8u5qCy3g3P",
  "key25": "5T9oVXJLT44M3hbE7A6MtMnubbLnFZmRabM327TgSJXnr3b2JuPsvtqwDd49ym7wJcy9ho6qokG9kaDrbgrbUkTb",
  "key26": "4uDRBeEhH9LH8DD4rJL72yWLeSv7aYUShWJceem8oFUo8xSm5KP3qCNca8Dd72wwzaJPVEE8ueTtXaET2aajAb7z",
  "key27": "3LpHNHDf1Q56Pxq3WUFX2HbojSJTDLhTwJKgYGMSJFcbA9iuxujtK4Up7YT6tSm6AXy5K72iaa5onp77NHW4YXdu",
  "key28": "54gGnthWjc2N2byc39qoepenG2fErXUEbBfXm5Y8JzAqXzf7b7uNnvD4YEHsytKFAms3XrLeo6YcuWgGkHJfr3ic",
  "key29": "2VbDNMZsYxavpe3cdQnxLBBSTBDKF75rkSMkXVZdvJtRjFE1Y4hshyFWgfX8SKCxtZPkwmhPn5VwxzzV8zci9RkZ",
  "key30": "43638P7hFH5ptv7mPRoaWKHhksyWSenWiQ8GpRaEYyXSDPRX8WYeSERTBMFGJPo3VWFTeTCtCgS2T13yFrU4Xi2F",
  "key31": "2U1AazXriWsdghG1kZHTjBLCMvZC7eEGxJ1HAG68Txw4uTimiQMn53ZGhTFdtbstTGhJXHX5FBgXtYsV5WKLe1aQ",
  "key32": "LApW6F2cn8cyFzKtM7fhWyqmmA9aHqT5ZjQccqE6mEsig4WcJMxTCySmg5ge465LuFLZ48JdAhSgeiXJwKrW8DX",
  "key33": "37mk3LjvrWTn24Z4UR15xWy2xHfY1hnsTRBK2X9UCu22d5U8hYGs8CEBu9hXgwP3RpFTRShukYPLG3zvri5q37Nq",
  "key34": "4biciDPWyTVrVuw2pWtCi6qYbB1HZNJQD4eQzxDRX3nxj9KFUurJtSbhX9Ah5kvcVUbQbhBuBKhCjpqCGbbqevzr",
  "key35": "2Sqj8TejejjduD9VnSiaEDwFSzgKDgDsbkY4NAua1oxtsBVzp4VBKHmrFVjMNPtW8E1TDgggidpgu9V551uaSDBH",
  "key36": "63Bzvtar5Z4CvahvB7uR6cFEwP3YM9DQTLb9VLsRW43Zux8EmMNPCn6bifcjfn7KAYkbqc2qoHk92GvxwvWXL13U",
  "key37": "5nzD53VQvBL22LmkhkLEKVp9w57N7XsrWsEi7SDcWDWb7exFgriAob6kT4RBH1ga15uvUS9TAEPxWq1MPTAe7NpP",
  "key38": "3Uwdn8jAjBXM7HP63tE386dEnWUsoMpEisGo6M9Sj3oYRTr1BpVKA5oZJ7Crzs9k3JH6X6D999DLV6KPdsYY5hDh",
  "key39": "52Mt4Pxb2fVR42PwgSU7X2dvCifu2kDGC7oywBTBZM4usaNvBmPTGcEq6bJ1AnuJr65aoG53gAZJNSdmLD3EH9k8"
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
