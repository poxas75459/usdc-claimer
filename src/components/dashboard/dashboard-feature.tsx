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
    "2ktPdBxrdAYyYh86ruahU26ZFdbmxpKGMuCT3uAdsPi5RqPXTY7a6LFSDmRtvXzfE2M3YV822vabJnqwzJkYSBSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeXs9ykRk3Zx7CZqxnSAGg1UPqu9VdSUtC5skPkeeGDRh9rfoBsxgS9r4jPQyuafQ2hRdJQRTZ2ibXeXr8K1QuL",
  "key1": "3BPUk5nWBkQFMj3JCfPUAVM7puZtguBMqC2ritTx3BXw9PFQRevVzxMyYMdT7rMrQotbRbxT8JsXgzeoSQQoasot",
  "key2": "27esUrrejL1F2pmUe174NAp8y4kmAjc35QKnkn4M7wVVdhoaRbXPiBLZtMk5m1T7LSykJMDje717hVcP63VeE86P",
  "key3": "44KfYkRiTU9E7WBWogUo6sNi3KSYWKsYbEc3NwMEmmzFwfzvVbTyPwXsTEKJ6tyr451v3U3kgceYj3x7jo2EhLXx",
  "key4": "i9BJkH7bxdqKyEbrxcEdpH5uLt3qMvumiLhzXT7tmsBfUURVoy4yxhZ1CYkR3y4Xk1WTCyuWDKDd5RbWvRZbUNy",
  "key5": "2YnfRpqeKtwVTkfFHGtB6tB9THxUsh79kjN4oYdWcLnPjZTczLeaBbEhHZHw2CNbgHNshDKRZqYMVLo8HLvjZyiW",
  "key6": "57NJpbdHp8gRHZvmCBk67vQgTZsJzAU7MzxyCeJLfk8Mt7GGz8mZND1JdpoE8ESM41XVQEEiCZurQqJvG2ScPi6S",
  "key7": "dCzcMRP6znN2qc1xuMCxDdJigusmuSfe8td6RHioQKEXJUmHXaCWaTZAcxk2zw6cY2SKGKCRRhUGzeVbELcFF5J",
  "key8": "5oHRnhNBEuDPsjsa6UBUACpcZm3cq23cMuM5AhLsLiZtymetd2SFa6zgkgV6wC8hsVnw1WgPwGQf5NyPcKfJ8eYo",
  "key9": "4DsujkvYEesx98qwUaPNL5M6eo2SXas2ZM54LHFwEUAwia2k9FU1c4m6Udq46GkbMxeQJ7LyUezrpRCuARWZeTZG",
  "key10": "25XmaWQ9TKf452L2sy3z54pW1ZmoUogNQzexuuTr6btS3LqaL6QjL76grQHSy1VLuGU4Z7UmNSbQ2xiNpkdFmxt3",
  "key11": "4sa9jgkGvjvk2FMcDJYjtztkShxF4VTYZ5XUgzNk79PAVxC8ryTToJp6FHhVHzqJx991bGFgB7TqaYYJ2Az1VVwt",
  "key12": "5JyzaFDckPvf2YXYrURp2kqn4GFfRSNtcELAMLcaoiFwpAX1BjyGT6AD4uVrHWteVfTKiwBmYh79xTEtN7e3XbhY",
  "key13": "5QdQ8XWBKmbMk8pKHj52VrRGg4UhJDFJgHgLkCj12Uz47PHzMiHapKfDhrTNikJUsRb2aRXvseMMctC5roN9DQdH",
  "key14": "531PDMDJjgxWLQxkYF1A2EsLqyDtC2He23zoNDtFYxUK8uryrHW3aMDS5HzTAWETACfCULdhFswztM26R2Xgpvze",
  "key15": "2DbVJAv6crNjMknjcfJfShX2bwkQEP2MND1fPbdkimrzYXjgPHhC6AdvpNDjwh8LuM6udmLZ3akE6W5TgZF8QSXY",
  "key16": "4MN8hz55kCuxF7GLrYYSubNPxB9U7a1TGsCBHAUSxBuyg48BmHeBAYT9VvRw32tJ3NhdnGJAB16BnYq8tpaFyjtE",
  "key17": "3YXw3fBiQrKLXyqN8ueDWGgUm69XpBgog894xw8HgQNsZtHYWjmh3yLNSG2BZjjGCk3ScbfkcxSBJGLvtdyvMmEY",
  "key18": "f8tNsE9xRLZsTXTd4qMxLf1BUQ57XtDfH44jMo4WGaezpeKogTxgDf8Ztq6bsZJKpzbJrpvySMMr9akEqzqF3Tt",
  "key19": "2WLAKTHmBH5tBGmUGUQxGSXhdJRExAnLajcoxyGgdm16xH41pMtEGW2q2T19j9KQJZHLCqxtRcmsFH77E48NHCTe",
  "key20": "4YTgT7JfqZ43NNu7to77hb4zTjtXZst3vsXEGm7qHPeRwbVdjYwwzDCL7vvUZgcb6G4YvNcUATQHFi2xZvMWb6oD",
  "key21": "5p8YgMGeHnLmY1W2zhm7BvbS5WUYL7ZZusTG2N14Yex11z1rnp3ma8J84nYzowrv5VyVNqBVETDQpKb6ibPrmbyk",
  "key22": "4rFWAUpTBEJ4gPjHVtHGNtcb6RQEYjM1GTfugeK6Sk3dDPArRyxJP17YmcKTpgyDwpyy7N8hHKDevETR3wDc8cTp",
  "key23": "3Y8Dm1NUDEPsrwCeNqpEruh3JgbPZWfMnRaMEceoGde7hvDjbFiYW76MYxMRhxDb4ni8sh3upktBubCnYFRQSdRV",
  "key24": "5UahtttmRA3WvyJh8oCmgmojQKEEfkJCJSaP43PagXawgYtJPqVoXAhz53QE7FXg2YHD8Qk5VajjUwrTft8sxJUk",
  "key25": "3uxHXGGM5LLq81UbAu8i9kQis8k9JEii8QeqerNqSqYhBxTmEfXZmozgeCSDsj8rfAjY324o3zEBvtYbYoFVnXk5",
  "key26": "3hBfLPYXGGCmPzRyVU5HDTMtu3piMuqjS8SdpX2L9j6rDKBTUp9JhEfnW6J8VE4UQEVSDVnwhmhXsLV5Ghz89sL",
  "key27": "4yTgxfnz84W8zw5Mw3KogrFBY6WPHgW8tfDYvF52RrKc2mMobL1RLsSF8BHE6uw6rtXKBUwhpJ7tA6hPH32rMZvv",
  "key28": "3Uc9vtqSG21QC11RJsxn2sGGyA4vps9trKcc5XPJECNRqh3uu2PHPD7nkt6tdPXEfrQBeoNzouV2dqeLzDQa3CWY",
  "key29": "4w3x74Xj9YWAXAteo125DE2uLn2Hpca2ZMpCp98WVJb2N5FFeZhptvECr4mqASU1FaacKH9QKibyUEGCL3SSCCMH",
  "key30": "4vFKkhwjRAPjs35yaMhcfDqN3j7hK7THAYiUAEhS1oTFbdztGKikv3hiFLRxag83FQaLhc8PYHhrNrZHmpXenh4E",
  "key31": "4oUsNC5GAJuFUHem7BBs6J3i3kshXkKip88DA5zmrtkkKdTGk8ZF8Wq8qcFyLBQ3rKCW8SeS8ScmMm7DvMyvPqaK",
  "key32": "2btdk2G6twoiA5pNseChzwQakd7gnR6Cevmgntr8ANv7pKBTGsABj2xipZc5A5vGgmQuUVVktCfjRdV8N9u8KUn9",
  "key33": "3k5UFeq2DQwoqtvvnFZNsLpbRRzt4VLSsUgzWRGzgYDDXYgdDojEzbkMZt4HfQaoPRp7N5XeeLY4NVaR9a2efeH4",
  "key34": "33MX2j2Yyj7C8jTkLMHn5JBhbmWxhV6HtPQTheD7ZJjp9aSBzaCsNhEsthVQqqetvANkkRJkPLxr6WXeY4wSDBQs",
  "key35": "yWwAVZwHFUkkQsDByZ72GtWbUupFFbtZfLVVr1ZEuAUixgES4Uoewaq4Fx8Kr57bcz9Q5h2tcvT79dQhvQX8a7Y",
  "key36": "5FxpAZGUpxpJTswptQ3Lky3nQhQjAWbibRfX78qji6SH6e1EgfdwEqUGNo3DewGGSrtMt75M5hw3nRZmNwB2A6XX",
  "key37": "ySXMzRFGQXqkjjTXQ2Fbu2F1Kgxg9d6vDxudSEYxZw5y2j3oB56m16F9yfmmVwwrewEa2HsJVWTXjdkLZe3duFp",
  "key38": "5LuHuZYHKRuJTthjB4AFbjDWxgmHKMroAQ54tAm5w3zL1ADvDaqkZPEUEgCRZMRqGBYKvxExjA9mUMy5fg7j2Dth"
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
