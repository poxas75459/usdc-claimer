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
    "3J2YaEdXc3boqLKKLp1j19oNSHnFxDKFbduQ1Sk6f49iNSFT2jYjmkPo1ipfU3SeK6NcxfLAKBDArwubrZCtLzRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekG5Dbv5Z3KdNC7DM7tLJGMjCwwcCnU91UdLDF3ezfUdwqUzArBMF1kVjsWA9VTXGwGjeJNtr18CemvoS7QXzno",
  "key1": "5LLBsiW45S3H1zXswz4GaXrouBxyn2TZPXunRpdeE2y2X6bgdmtG3RvuUpN7nZFJMsVThmNp3ZGFQaqP4Zoy1cSH",
  "key2": "hx1AoZA41kNk6VnvKo8JYPWdNJuPJ7Sd2vi9rXSTf3rjpr7v3NQkWxxaBJbXLqLkazXrAX3H8DStsVtEFkYLKVW",
  "key3": "4y5nc56Uq7n6MugHFw4L9mBwReDY2YWEXGtuL2fLasmmHqiqDTweSJoyXdL5PB4KxUK1TdRPVwVo7Yd8jpoEjYdU",
  "key4": "2unuyv8exnMHeoo2MBM4W3yF6ze47U8NcRQ1QSSVPdGH4rweZ3HBp9odSnfYQ482RGtuHgyRZRrtG7QYkpELpgFY",
  "key5": "4FCtK5QgnT6SAXf7ZXfw9mUyujYrgYd5SW5EYBSkvfTs3PXDwqNYGJUFReTqnu588SeiVxLZnRwvYj85R2X7GKjo",
  "key6": "2PSuLQwb7NCWyuznQ3qV1ABT2uuc49YXEFAt1pgeH8ni3GTy5ahnNbTfqSMayrf6dMz9453xX7gTUHUcRvdmzRKg",
  "key7": "3aQTHDKnMccasjEHjCPT1kMpTeQupZpScWrWBDnGtnfYEVtCQmuRdXD9wgmpW7Qazhg68dL5jNDHejqG5JFkVyVE",
  "key8": "2eUVYWFKg4BQBVMZZUjFX8QgePCDwKP29t9iEzV4gzANT8jGSdjVop4Ewyg3UQFcrxgWcW6qzHuVfsnkz5bGkhr1",
  "key9": "3o3iUwxsSpurLv9nMwoYMtpnVbAwHdaLXyiJhi7Chm3XZM4NsFqknJjJ4Dp2kyqhujbqjk4tLTSzhivA46B9JU3d",
  "key10": "5EPbJ4XmLjPtWXVS7xodnVk1yQUj8SMuVbuCV7nzzpR1ijMzU652em8ukRSJWSyzW9jseHQbSkxtCsC7sSuqoTg2",
  "key11": "37NDLriiVJDdCRgjmJPbteQgJdTShtHps5TBSE3NwXHtjz6cYj3toz63hQoAfGHTnRTxDPs9pufybNCqwEsJvJVV",
  "key12": "2RQUjbcEYLYAokWFADPV7hCqHjH8MQtBLNSJibMJuDyM1WgMz3YvvdTp6iGGupenEGeiQv7FYV1pj9ZKUtJgpN2q",
  "key13": "4VF6GtsqGm9qdK9JmB6Uqxdp5BTraTnH65xuNvkP34pQDNUC7akZF35iynqghkXBe6swUgfC9muSWpHuiMn5BHrt",
  "key14": "4fAf8fFbk9nFcenPnFUaJd2h13hqkKNtFmv92iobZyoxNTGzB4ta4ujKSdMDvKrML7NNAA7q7er522GRNzU8Hwcd",
  "key15": "LVFxEgedsZcEuyJinTcSwtCAYBx4r7HirWtVcvNqiXn5TDssaWGWWS6dTMnbfGkDPcLsegao8tbwt8EZaAAciis",
  "key16": "5a9wjm54Lt7cUsFMBnTY8oLBvsmRRarRdgDRjWzgVtBURmn6UNLHaATGdVM8yQBQ29sXbhfaXmeeimPrewTsRcKx",
  "key17": "3eqA8cuynivxxVyUzAo5DXj1URTQjkmUDmegoaPM7y5ifxxaCdcWM5owqqbhEeHBU6dNrHwJNzBWdPTjVtBNceyc",
  "key18": "2B5K35sza5xrx7b2JhukMp1h5RR2mAmYsaW45SwGr4VD1Lhk5Ygs4okVw9f3nQmUtoitj3HXgDskuLWx1sXuKkPp",
  "key19": "4rLN6j2KkTMPvwtNC3qNPmYdmdHR8pUSSRk29YypbjwMP7xfFdWSttzs1UmXzjcwFnMxKPX9BXdRwSuXsBs3KugC",
  "key20": "32kA8QAYokwc6pAYRPFJ34CSbvZPsLH4rUJq2nAEttnyytwuwbiUkaeqRBvWZgBHtSHE7KGd9jrYobnaNLLdhn7v",
  "key21": "5RDFN9r4q9RHBGd5g24kmXMtqD2xdnnsGMEmUQQnAQfLPgr3BMveKHP7FVjE1ti5GTUKExwhnPxmorWneAj3nGYS",
  "key22": "yyNMDFkHucHUArP2FZBbd72V5tzM3nyMDjp1get6xgT1SwQ2GXiQM1DNLucgVn1JA7hyyEJNHv8NRWjWAZ3wFgb",
  "key23": "4brpJkTUytwGbpTNvPZvfkVrSBC3SYng7ZiN9aFh8UuVKpH9KMMTPbDvKDXtG1NjKLvshzYGG3F1HjD7f5UVLQ5E",
  "key24": "5bUb8rWMou54nuVfmtfohmepThBFQsGuLcNoYc5mqrxFkJCH7ESjsHSJDk1fJc2L8GW1kHYD7vv5hsStTppBn8Lv",
  "key25": "5kpm6vKYkPVLWTQMuMnQXA8PEs7ybinzjLaKMkjPCWq2LboM9kRqbRw71WtsvViiVq6eV4zkfcqdtujYQ7DmL1nu",
  "key26": "2AKoCBv8u21QJd9dm4zeDo8AhG2VcUZAsMw6eoW26UNnLLF9Dgk6twzTgYk8SKc9ELhPswv51n15pwfs9oSE3pzG",
  "key27": "2J3aKgsCCrQEGud3kEgR29yAmesKMYau2FVGMka9vTwM1Xgwys94Bxs6SnLKSJrULpySJmsS2AfBKqQSMhDtoU53",
  "key28": "3oDe46wVfrWFp7DcuYMiqUL3Rwoi27qHDZcDCNHjWkpDC4e5yUgewptmYDbGygDsuboqBhGrRkTGfzpr1DArc357",
  "key29": "Jp9XoNeiP8zatqfJMJrPHzmTYabkiqepEhqSGzMByS9speQsewi9K7s7Yqf61K7SSjzLsUW9bCTmvvnaw5uf2Qu",
  "key30": "5WxHbJ2ETyWT19thuaxBAM2uJCF7bBhq61zWDy2Vi1AdcEKwvHSxgmG9S8a2DKqvwUcKq9Wwi5ccDd813JXAmZJ",
  "key31": "237TF2ddHj4XiiKmzccsJ4QaR3j2TEVZNcuHLzXgUnZjTBdcP3HbnvPcHZ5pD4Ld3b9sPmA4uKsQPyQ5SHezVXkE",
  "key32": "39tFuxBiFpeXegdvf2AyrWqdVXaccmSAgBUDP3BKzp5HzbAgePqrcphv6qVFyzDuVSfF7Xzk2YQggAYmpdHkiekY",
  "key33": "3YgeKRRgttLuvkqkWv8nXpZu2SUjEzvxQRZxdZLttHW9W2bPCwCAZ8W4G6eAsAF7isDt8WuxhyVA3mJQEL4aTjyM",
  "key34": "3j7YkpKCM8GirT1fJyUTmFS2pHWrFXkPEDv6mBfQxVdYeDCZtBJcstnXg3aj7jXrBcdE3JMkeeWLPnjFFKyJxSbA",
  "key35": "ZR39RAbivAvQgKUiGiagyr8EdSRrSQmZ4VpA4ZeoYBg78J9NACAPgxDSVTFnME2MUirDCn6hCDguENUnAQoKpJc",
  "key36": "5iU28ZdYe4bmhSGuJwgVLoR34xKp43fyh4u48odWuxPGV2fBKpUBAnTSaPn6rKShdDvC34Sv82WyeXgT1u87wDrE",
  "key37": "3T4L97fP8VuBaAzqeKAAiaYcV8Kjot5BHNRbgeY6vbiv2RcUGdXQJcFcoeWCAm2q8J43bTsV6h337bqFVR9VBj6s",
  "key38": "r78qnX73aVpHgNye9gS2fQNnpytEn47V1W3rMzay1gEemWYT3D64yfxEWYSR73B2PJutRhbyC1jNrgfknSivXSZ",
  "key39": "363DLfq5KNDeMP2qXzHgSM2BV8LcPxFDJmMujjrDwtEJY6kCGWzKU8VRrDNkQZ2VqWcEZCS53c1m81CMoTCa9c8z",
  "key40": "4FB42zw661Qh585Q7kuceixtH4gSShVuNyiCdjhqzXFzsyX9exwNTfuZys7MVN9snrKUeqrt81Fa6cEE9dpnVXA7",
  "key41": "3bForVtrht2zBZUeszDYf7nQ8FZ7oVBC9pQCCq1fMP4L69X5zzJKjwsDKS2USF92cZbzB1P8Emk9Px59oPWxFRna",
  "key42": "3euGoXPdAUzgFnQtJaGkyarUwBCUNVkgoYVBzEcj7JVwwgM87WQdMNdogzAuBUcUZckETDNDMxmKfL3485KbkUVL",
  "key43": "2AMNhMhLt33bbVUBaBg1aJSAkh9AKpdsfsns9ZhS8DCDEDag9VZkUxATryTcsfT4LiTfbxFuj1GqkEnzVYJKzxmL",
  "key44": "26RUEhB5qTY8SkbuHuGhfGkCBB3jaZCxoT4omKLYihpycs53QqB1uqGbvgsox1k4a8y6gCCEaPSVXTaZe4zVXUMD",
  "key45": "5R7wZ9Tztf5hWVNaqxs95EQHDEXduVpUprRDZTH1UCM8R3i1A256mLCfMLvjTg8QV8HGgk9mDtEjFwGwdgJycX2m",
  "key46": "PHuWya2aW8Su5Z2e2EZ2GYuFExW2RDJrMk2zjSx6H9YfVLdjyZXoH3WvH5rykvzKFPJkd5JTYtqDwQUXmVhApHs",
  "key47": "3SLNt2X82NJH7DP1urXutvk7TiNwXYUMmMvUieWNJm686BQXgervoQvnwWdqgHr8ahdczBKc5ABJD8UdHWiNHCnC",
  "key48": "5ZasPZVjwhwxiJ1NYsYZqVqord3nqwkDAuQprzYfWtMCtUoQdtMVJr1Y7rFnQYtvGfiu2Z4x3jLMXMCKWayBquaY",
  "key49": "2uHfE5ybAC7cYU56ztpQRRYeP7mYzb7ZLq5DSXtHdpnT1T6UobXNRp5NWHSpiW6emJXN34B5X9hkGgRNTqb1dXp9"
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
