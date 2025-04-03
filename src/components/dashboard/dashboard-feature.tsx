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
    "4P6s2599VGGYVbPr5h4a62tQSuPR1Tcxd1yjwW5eXwjYuGVWyUcqb23Bir6GPYnmoCmkD58N8ZdXw2voRNtSFcuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTkGNCTKoYwWpBQsV3Mqg4D1YvmsuBPR4APPa5Vm9KVpooFSytE16L8KXvSHyzZTysLFrjafmdJHE3L1JsM8ZZi",
  "key1": "7bteN3guWo4aQivj7QLaMu4dcGNSe3po3VsmwMV4NFqymMM1epTsY8GZ4djGJ8mE6uH6ikoxAMoiMe291BdZ2fY",
  "key2": "GnmPFKF52kt2sWYKz4cDFhHMpoyYhGCtMHo4BHCpiv3eMuikFmpRaXA2gfV6eZdpV1jtu3ns36nhJg1w1c5iukq",
  "key3": "fH4aixuNxtL5ToWHnAQzNbQh1Z2Wrp1bXfZaqfefEK8mLRFWSxe5J7N2B7Mz6GYzaU2hRMJUSNPVv5mBPww9zGS",
  "key4": "2fQ58wFE1SP6fGUN3wQvo6kZ1yT33RrVo7RWCtEWfoPbCmjVEjg1E1S2gQfhFctrbL8NXoCEZP1EhmkTXDWaZnKC",
  "key5": "3Ab4CLyckjBwoucnwrmQBWXxEdYhqd4v4GDWZQtdvkVpyg4vXGr9EdKR8t5KJKbFbgZyxCwKyu1gJZ9A258jmCg1",
  "key6": "53Khc5S4spR3UYyAsooC4zKPfmFiE3UMN8pEFuG6noLAvE8E6omeRgyRgpfmFFMxBkMQgwZea9fSsu5UQM6Wkukz",
  "key7": "5rZ9cfCVggPi4Pe2mTh1YUk3Mg5HC9s1gRdoLN3yABXktL7W2U1Lv8iTM8eJTu3nEscGVgrAq9mJ6En32s6aQdY4",
  "key8": "286Z7P41GvamV8LhELrJkJ5a5CQnZMgbkzdwWyXUkJ8eK5aSQ3V39YixknTp85qv5AGhTkdYco822GiCnaHc3aux",
  "key9": "5PcBXPmF219tsNTZCAqPwhr33B8j6NuZ8J2M7uhscRbZ13sbC85uLatcAG1kV4H6oFdgBJV9jQxwRuzLD9qf7DVJ",
  "key10": "2ohBQCUVCK5W4bNveWq9SNSuy6n5VEFst2SF3XAAyyFmu59CoFgJF4rAYpxiCQL7dwzzBAUTrNybcBkzVRf7uLLA",
  "key11": "5sWReWjVtrzFwCZT5AcoQmJWvqGzSCsfkaZAnZJTtG5bZUjKssZBQpFZmaRq1D4TX2u3fa3bdMLpy7iLGbA7VTs5",
  "key12": "4vjTTEU9e7tapv8Grvpvi5j7P8JYCFpBjxoiMmDmEEXK42heZbqwXiv2rsvKhwmn8xdQmEjKZALyKMxTdzwLLBbs",
  "key13": "YKWw4iEupMpdLVpaS6czPciX47s5AP83qXinMHeW8fVfFJNHFP45ygEpqSMzyQ1fH7VmDDUMAP4rNTAbGYTtPMN",
  "key14": "4MnPVx2rsvTveRA4jqD16DH62LqmJvjF5VXTvk62k627rFvLFSRPnpoocvptR6vTegDLCN2oU178FkE8PJXYR1aZ",
  "key15": "MorMmDqHnRWLsq1TkAY9ZNnfkHBtWhhzMzPTPdinALzRFesUmf8fAp98JdP2dXC5W7uThSo3X9HeM3KJunyZP5F",
  "key16": "hkPPn6eMjPYbrgpjSREasLeFzhZtmcdDN2gCz2RaF1EbCzLdkXECS7N9ewfZBALPtJwBpWpMKpKgVQ4PtDFRQSA",
  "key17": "56Xh1QA38HZKWDt9WBS2BZpBr1APtAW8wsjNDaa8oEZmJSD8maXnf9bo853aQLuuxAJ2dBqaDuQBa1RoUxKMMZEb",
  "key18": "39K8e8X8bx4ppV7pnebrPdTYXSpjn9srP8vsbjyfV5jrwG75FT18PWNENCfCSzsrd9eH4JHVScAxS8iG6jc9Us36",
  "key19": "9VhvdXRcPJJjEf3iM8jaXMeMHjncqmHBq9U6xCAqo7PnVsYATgBAFgWBsBsXckiHkUUnWaiMjy1mXSmodCDZKD7",
  "key20": "2z23Xhjj1kHyJSP3oQw13VVHMvSZVPDuuNw9t4QrKM6uXzDKeCBBRDjm9nmpAMNaSngmgyCrhB7LZBHrsuUtvujP",
  "key21": "4QNLutAD8KDN8fgt7FLNwoHpVjBwYPvNVJfGkcPXoyzs7mYkFc5te9mZUyyjRwPtaM31wY8ByegaqFngHN9UGHyB",
  "key22": "3iUEtwAqKf7yiUtHuusmetCgZivotq1xifuDormwqPQii9PSGvdUcX5g8YrtdqarSRnrwWKVFSvdTDAb2Q2JuNKX",
  "key23": "5FZBqvmkpUpNG7Z9gSqHbbA6LGTH2ReDpWUSiite6qRrQW9fSqrfCf7MHieoGoWGz6NtTob5LeEgPkMA8Xu8RS85",
  "key24": "2asct5tpysKjADd7iA99Qf5bLEKyrjj3RhqkjMjzd1W3YFwQtL1c58pA8ewbXRPMjMbea2yWCYdmRJqUpsv6DMsS",
  "key25": "vNXcTE4DESoCia7aqHt7RiNFVsPKtnLwcG6c4Hdmh37EztDjqJq7z1yoN6whhCQp2GuCbJhoXBUeNZTnV3zFm1C",
  "key26": "2rx7C3AzXLwMMTgmu8qnHn8wSDFdZs8r5cKikUUmcBk6TskzCuxTsAXVQFaNiZiji98bD2YhAg2XSSFWKF7PdHvo",
  "key27": "5xNfbqWzNh12R8YZKtxuafUHmw3WXpCZ3uimWdHzJWe4KWpq1f3Htp2qHpmxxFnLumEoLqPue8AVDPHTa1JkQpMX",
  "key28": "3dtqB4epjfnXRR7HMqTYj5cP5Ca52gxM1VU9f7XrWFyJp9LmE6XP1nJwF2JWaK5tDfkyVgZBmzbDmoB95iCQ5Cb6",
  "key29": "5C23kBRtrLFe4qKNScV6Jr5krNgj24jTh2wWq56XZkKhVqZ7pz3BzHe4CGQ2Rh1QRvnPYUf54mtBhWh5nnCi2Zg8",
  "key30": "h8D89MHDjBbdvyqttWN2W1RwghpjTKQsc2kZyNNsWXo8NytHjk2E86RcHnkHLwsbHdsBcFLe64a3UqCFXiDEWxg",
  "key31": "THwDnXqj35mVjZfaMetCqZ8e4MvEwtKbVQmW7br4tPcTAHL82JYjPVCzFW6t9KNBZcknAHzbg94Wdr2ZUL6Jj6y",
  "key32": "4SNgzvpA54gYBhgbPhmyCJWtXAxb5r5hTo7KS99mMeYDe8vqoFSDMzi8dGQhwZFhdrgYQa73Hqgv59CGhKuqUhVT",
  "key33": "wi5DFR13m4JWtKjK9igxRoHktRgMx2PMQvpRbKKP2aXnu1smYXzvQLFiWUdvquZdDJDnUFyExXPpoDzq2QeiujC",
  "key34": "5yC1zaR378kZgHWszZ1czQh6wyiqdBzgkwtWZE1y7vs5Jtxm8d8wYDeP4P7EK4xcD49exqmfDp3rF3B6VNNM68tB",
  "key35": "4s5tkLcA47zg5ZsH3fCo7jXKQBQhAKEjN1xuZQzWUEAAVUg3zfhshcsDRvK35nxXXS85o5rNsBWYk8wcXGNfhoy6",
  "key36": "2AGbWhVahkzpNFn36wMRtPA3jB8DpRZJEh2y4qwH1jcuuH6bG4yjYbzVeZVhArbRoZhNbyVjpHDjoj8EvsHSp2YD",
  "key37": "3gWkwV1n1XdcxfyzdWwTWMq9EsBH7Ua7tNawin73gmMKV3DiXdqNHovj3jRbF6MsorEzEBLyuwt6uyeCU9H32w6k",
  "key38": "41upUNS5t1WCTAbaov6dJbF995AVwFVtLm6fxkLLkCCfTbnrEy75TAotFUZREuBdAJ9V51FiDrWYTeZsQ237pmjH",
  "key39": "2nqNeNFULKhdQzMZ9DqXsHHmLQe7KYX5CeYB2CYXyjwN2p4Js51vad9UwwZdbRM4Va3Xa48h9Y2XtDip2p2eVra",
  "key40": "roPbumdQEeY3XRJdbTa2QRANy4fmYxbJGUhesgWn9jN9vVvVyfN8yUR6EisnEtNPiLDkh9QjQCThXy8JHpopPDD",
  "key41": "oJ8EAUUaAKzaU4nsfu5G24VtbXMyggp54KFjd87fTqcbf4c4Uuho5DJHqWLQqVv58kRcB2PjoBE9QbCvcpjv1TV",
  "key42": "5S2AwCq7vaGLVcNVKyBYp11ZHMyMuMZFNpzNk87nVLsZoRQm9iUHXEs9Vw8XCuuvrzgQUPRiAeqoCUv4MGy9BXJn",
  "key43": "5uaLpemXRLJmvkK1bg3ahMPLvFWecAnjXbRZFryeTtfXYzujsYe1j1b8JCKqTwtVGW8aMqGPNFaWB4EJMrozpxdY",
  "key44": "3EAgQWT7RdgNX9AXPN93JUcr9nqfgRZGVhGmBKVffZ76rACCWf1TWMFNmsPPDrWL85Xim28ZCpkFcBqELgnCvE2N",
  "key45": "3aGH7Eur11LFcTggPXCCYjD2R2ext1dvbwP1bGzDeB4gGoNLJ4JwdutViMpTF6YSBQPscLfYr3qn3fzBiWS5vvd8",
  "key46": "5YXEJZAZKwteduNqS1QHYdLMSaSBbUChhvXmKKbrSuqvxTRWMAa7CiY53KTxY324bPyfMZ86PUp1YLPc9EexL7Jd",
  "key47": "4EXfhAF1yzcT4dkKgbPjBbwuP7YBg6DSKJtfDdm9XTCpfz2eT5NhfmHVTeXf12JYFEvFNtvowGuJUWN9NDQWwnoQ"
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
