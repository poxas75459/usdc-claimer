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
    "3oFt9i7Hnk41CkP4FN7ozBQuU9gDmdEYpETy48VivRjWS12pT1ux7FQqgR9EtbsAw9bfyAabrrU6Pb7B48iwqeK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuD8NGqhYG74RjKGXD4mDwk8ApkvjkTCTdXu2xMfLwdEEbKiQwRQ6mruv2hVmyVkqWqeLZb7dv7GBQvBZmkp6ek",
  "key1": "3BFBfv7UYBxsVu5iBxqTQ7vTkEj8oTC4cSFc86XnKmNh2uvNkGnEFigu5DQJUghkHLWVdYmsSyF1CmrydtAQmBnG",
  "key2": "63EXoep9y2kSPNiacqCmSdmFzMQKTYrpxUBVxGUA1cm2d49PsgrQZSFJyDZjaBzqsNq2LC3YPYgkByqFV5cjAD1a",
  "key3": "38mwccKDLsFeopb3c6WWgWRs2izavwUUWishZYxFv8Bu55FxgWeNJ4j7Qpojp2xkXrSMVR1D8hjQmGFX5Vsm9aH9",
  "key4": "KR1GHgfqAjwTBSkZLRrf7h2AtEj1yiMyCRS97ZuYfEP9xTXqJ3RPQ6VkTGxnuyWs214x6cTmxJLH1r2vTJGEv9F",
  "key5": "3rEk7t4PfocwsH1gyUK3yQ8r6MimFqonTBUEWUzSWwRQSNcbfm47ZX7f4ZQA3zmFPWNyddoAWZib22LFbzEw4Szu",
  "key6": "5BnBmitdAKYRfWPWXohnwF4mTcubim8n7ET1W8GGF74Xo9h1oGPJo2gS1mssjnzks1oUZZqLgLq8QiUCB99sLdRA",
  "key7": "5KrL1dCzr1f1medixxAP5pKmdELZ71J46K4zXE68ia6mTaAXNBKWjNPoFnDe7jmDTQa2DcM96kDSXk158CUyeQXW",
  "key8": "2uwmKiZL36LCNcxg9jgc4SkWFASVHN8pfiY6Xj2YRzUibrNXsWVQfziJKuMQPACKwrnQFTB4xZ2nCqFTb4bMcqVg",
  "key9": "4UWS2YByccumxuCfwcqc6Y1VmLRXUecCT5b65hC4bS8ZiPmSBFQjGZLv14xPNEkEF4S9VHqjdgfZymTgAQn7Koj7",
  "key10": "5pW9wapVbHG6srWGeDgHKhUbpGVJuaWbWM4jYfQyHVByJS6m3t6qZzFXrLnT2M8hxoqmkQM3xa7x68CrYzLkxVB",
  "key11": "hJJqhPzyBEYyx7Ly8n96rjeXwC3hgsBTrTjsraqSXRoEJad2nGRjYPpT3eFqxfdZ7NG7edNfH3ZTkegF8LLto4j",
  "key12": "4Wo1UuZuBwZfA1FqwoYk7FNncP4sme7jT9RK8E8PDZffQLhzCxw3723wS7Yy6dUA5FWWR3aYgSV6wKGNj5dLVDDf",
  "key13": "2z1kABifX5y1umYM9UDqJyrTzFT7GxWGuPJ42LMmLuqeAg2YBsLnscTKF38rTT6kbKe1Ue4xnLpSQofgD2ZNV3hg",
  "key14": "4uRHAKhxiJ4LWRk3u9ZxykNANuyJuQxedwKS5MMdenhGszdQM1ZwBATciwRcDwnBoL3g7LPtw3REkUgPo7tebXvg",
  "key15": "45vdEBraDyRcYryCuXvjeDjDYr4xyVGcDygSB7NEzJouMhcJi6Y3ChAmzxP32dj7ybxaa77WNxSUW6sFQi7t614x",
  "key16": "3yyfpVX4dUwhJ8FsDrnMpQYPNsBS4JaKB6pUYxXBPdosXFRuq1VZ2ojA2ThVqTJvcC4gyYMftcsXyLUnMJgFLXsT",
  "key17": "2w7R1ZfhCqv6pzWmB2Yza33KoqeKhbPHcXg4jsmAQL5Hb2aTcu99ojpQfUqzTCjMKmZZD7bEM7jG76REHo75J5dm",
  "key18": "3UYGhnkd3uq5ywbRKEPntRpA3Q4yzStJNNrZgz1f5XXPoktFvVi7F2gMJqDc3AiG3wVVnnfwstybezLbBG72YmWP",
  "key19": "5Ti7Rb91aFn4oMUTS46p1UHL5Pz5SMJcFNZ2cfhrX2CU3K5RE7Q8hMa6vrmaCBkUyfBDtQiPAR4wnmpGS8E9U9oe",
  "key20": "27Cz2nQ7mjXTBvfev8NXZiDWf3fFaHCW5vvGGfdneoDVxPMco1goNzjKW4W4Vq5fS8UorDXyeKAR6DT6GGFEphPV",
  "key21": "7FVUujGRBEawGCMAHVbBhPnLfGBRRgkCiRg3LiAmwASuEWbT8Y1ksT2So6EVgkULx3Y6B1nG2fmA9juovk9uddP",
  "key22": "4azVLPnBsviAcb7Q9jyrMiBjFiWwM1bCG3JPmUecoas2DysoZor5dLMUKiTvebntmrXtZnJW6KUir4DLBWa2yzKw",
  "key23": "5qCqaXPQ5U2ajT1uwYbjqjyFW7wkrngrJeTL9H1gbGvmBe49482axNGpezeMiKnrDmna7j55GnRrZryiE2H8F4XW",
  "key24": "2FCjoJb9inwKtPYo6PKmRffN3REfuZpBnGfX9GQqvnLehCPFub9gNTG7kcVjgTEUF76NMmrMBYnn6V8zYoiFhvMd",
  "key25": "65qdNAKUyAfMJ2cns35J89QJCGYqpsMzuSrAxt8tf68SYAtGXnZVZjKSXSmjWS9dMeMeedn7kWvAvBSWqNAu4NLG",
  "key26": "5ym2Ajg8g1nNxLhKVemhyR9BnRop7zrxd8WzcoMMrraB56uWEtCzzSdgUWjwxHokw87rnURTfXx9erV5uKGspcbW",
  "key27": "5VVwfmyUjSxAqSADb9A9MRsYyyr9aE4gTu55erDTvAK9aimpkvjHEonEdxjwbXCzu5vXaAJw579SoyxpRHNbYtQm",
  "key28": "34ENTUppGthL4gCA39TTDzTCpDTnChsiWCtHNmc1D3Sd31buqp12MHcKLCoGH4xTMERFC3iN7PFafn4xttcdfW3b",
  "key29": "VgQarZSXM6FgcVs6A2R6EPqeGDAvbTiHkWUmK9zCWnudmBVkiBSR3KtnrCToNJgtpgjHSzPmm2ebbENEwrzxonK",
  "key30": "2ccdfJ8pNYKZtNFdQRp7tptmh5MyJHj7hSUbMWm7J78czrgE6WJN74knymFH9u1nErsn5nPJhJEkFsCodpKMeENF",
  "key31": "58t5TNSTfEJN41t2pmEcdGQB9j24QCQLnYqCjA3L3bUXLYbyCpZsdvcp6f68JrXc8VYfxPva9CGmUvvdrEujL5oK",
  "key32": "4SoXh1V4Qf89RtXJ7sjA9MqThxgwsE73KTExwsWg468ooHjcxUSxbomSpfAKEX7KnipiFkeqDnYnUZS5gVYPVyE7",
  "key33": "32YKG3g2cYPXKiAcNGDBwVT2xuohZ14ETKquCfxQy8n8szLqfZqkbF9p8hMYLxDgL13g9cFcbFzDMxR6cJYhzzYD",
  "key34": "2pu7SQTC6EGpmWgWVSsA9ykFLLtfgsSKL2jXSjNq3gwJqyG6eS1TN8aPoUQHUH4NdGVDTW9rycRNmnqQH2KfPMP2",
  "key35": "3xvxDSL189KNkXSa1gMJvjC8wjGTM5t9KxhHFZkUMTK1ihDRb6R6tsSuciJEA1nmZDSQNTEMTiH5t2JXKwNrXZba",
  "key36": "3XVi7WxS32KUTMEazMPdZER8kDcoZFBypWpuxgthKVFpRKmyNkoDsiR7Boyz6LWE4Wh9qUz5JcNJKb4b53vMsVYm",
  "key37": "4DPwz1nArHuDpsqQLaEKJtuVB21NdRQtLm922TJtqye4LxFr6gHNnMpTFfQi393moTvHbPx47qF9fFuaNiQkjyux",
  "key38": "5TR8Qkpd4HEo9CC5xjoT2oq9LAKvrqtb4TA7ahaeBW8ZBbxzxwxVb2pyVeDWaQGwqb7t8AQFhTxEHBPjsrrtzocc",
  "key39": "2dge7okF4CgMynASJeeFrUWphpwdasXWuawrC3g25vHCJcdMyB7VxgF7BAZuZ7qJxMwgtqLrCFh4YCfToebNWKMR",
  "key40": "3Sx3hwBSM8s5iKUqg3zuBjbpwT5JsYh2UuBid59sPcatczm4ruoDvDdRsmgwusUaZikMttDfa8XYUUDcrX9xnhrW",
  "key41": "4RnRkSP4TcxSoYPCU88yV6E5nbzRTcFSeWgRo8CE8kv3sAqb24E4AVnA7NpaZuuKmsBGhHeFmHXSgMWSNtuQDQ6z",
  "key42": "2pEsaSfVMXgSWjEAcU7DZF65CDZtxNAVmG2C3XKbXzicTam7r1Kojjessjxa5fLsrwaMqnnA34bAtD9wuao1xwyh",
  "key43": "39SECtDnZUFZSkH176afiu9WGNE6bRVWnEuQK6oLsxdHasqZBzh1SddryLSymmLindP4LiHeoC9a57KJ2tSVwHnS",
  "key44": "4VkP2BsrysV4o4sXVRuDh6hTn772hynRPwBc7JYpXcXhQGHWp8vgaEQkTwBcYsJ2SBvJYbcPiMKURwy3wNQs29hN",
  "key45": "MsQUsHHC8UeR3ebCYnZZQZNLmpzzHYy38WJVUiXS4ycVH1XBRkhRrPzNRqdaPVB5CUgQgQCJWt5xAzqP1y3d91X"
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
