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
    "5kQv6m42jpwzbykHs2fkBTzQH7WKzSgySx8MptoPCALh9zXnveeg1tbcfw3cikAFK23wfKGr8HSRToqbZzg1MpqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmVaMTRPQGMwxKgR7gzxNhNGXf5CVFZYPFj5HaR67wXyeiUyNkCQDaa8btVYbnHDGA1bcPyPxpyXgWXiW2xi8XB",
  "key1": "4p1me7f1yR2fJr9x83iYAjVJYdbi2nojKX4NWGkk2cjJ1jkBt9hvAmadFV4nETUfjnqbvKMYPU76nPrKKENYNL3N",
  "key2": "5Hf8hAXQhSMtJZ8pmdiPU8TFZ9zHiX16Mi2xMiVooRyAncnWNkwruh4LzPwREevd38g9QwFss9ZVX8B8nwcxL3a6",
  "key3": "5QBzBTJPsPjaC19BcntSFXJRcvha5zdW9EY2crUFJb1FAkXubyB4FxWF74Ab5JGpSM5mJ9jQxQGQ32nxGx8txWQy",
  "key4": "4morAjUiSkEeAwRJvme5DcaqBWv5SBp4qUEDEa8dDeAQD5yjWAcgqWhj8rzwDECPwFsxKURwAg5xo33nNqwo21EQ",
  "key5": "53B2Y9GVQSva6KRUMytTza6pgKgHrKFoirc986JMBnC4QGbHT7oL3aFNKvDJeXVN5iqNCZNtbz4agJTc3unsD3ki",
  "key6": "4kXye9LLNPUzugySed4t8mEqVr5TXQzk7iVLfXDf7r6NzGGZh8HDAimC3wTSJ4WaHqrGgFeuRg4LVxAYTFmpyvna",
  "key7": "3XC2Mr4F5hEcp8X756nhmiagw9SjaLskwokJu37GZpeE7hCJCGpvDifqmepjvDMDYqYtAEJ6QN2hoksmtgsK3snJ",
  "key8": "5iEVov3MQhg9opmJ3JBCgMqPEHcxS3rL9L2djZTArkmoRw9k5ADoGAJmhSwturdmGxkGJWryKjALUb1whoJHsYRd",
  "key9": "2wDs7GoYGAGP2iXQjxBhP2uCXWn3xq4wATZhE36RXgNy2tXK1SUzDEif4cabn3MKXY3iodZLLXiFvDuYcCdnadbJ",
  "key10": "3hvgSvQDuBZiabAGdFfYinrodgJMzigtqDdsBsCgDpzgv5kGZq2rKBErkk1BK9wA3vbqZBJVvfVK2KwR8k6wWiQB",
  "key11": "3kSMv5tPFD4V5HoDyJ4qKxCDTUg8VCMG7mFu3kgUhYPdh5srmLmUShSZzmj6xc9U3TwDcUB9sGMfUnTSVkThiv2V",
  "key12": "Y1ZSwt36SXVNZcreSsbLq1EXuLAiHyjpg5nfYoJiCSrhG7xxSfDFkcVQg2XUehXYE8DD1f9ACoudhYzXu94askJ",
  "key13": "4aXoZXNXMtrFacxsUXUq9h6MQz5eGPWMoEwb6MR27w6me6MxA7TtsH2hhPPqF9DBKk2UHXN93QBfeeEcVwyroUk1",
  "key14": "3BYEvvu9Rt4NbadF5VDEbM1eZUXhjCWH9ACpwyHKH6TM1bndfeKYDuHfkHVimEejJxavTNKqWwLQod89uxBWEfms",
  "key15": "2AuJXN1y8CbajT1wTJzhMDmXitEsfkCsMJ15aLrjGNgoiSgmCb4AmkisCE76bR7Dtmf32BUGmXGEJGTqRmfADPA6",
  "key16": "3EJ2MmmednhiKMtDk5SQUYkfe1yuki8vyQ8YG4fzshgK8fthoJKEK2ZxijqRKkHMpotpMa6fzYBkrAWJ9YeNywwY",
  "key17": "5T6d3VRppnaXjYYuNPFyQdfsdTEzfTZrveBhN89QmEiYYKhZM9iMfGFsvF18D5JUL9eTLdAqf3sdjqppTB3a5uWL",
  "key18": "4uWnw16b1r4TfGvQAm43BeXvxzuzjX7bvMdgN9qckD31ha3gJjYFMxaGG57TDJonam6xYdbtzUxJqkp8RBwkJhDi",
  "key19": "5xV8Z7mDTHXaUBua44TC1cwwnE1ZbbX2Hkh1roEqz9FPbKZZkuDRC5C83SZXWWFoUPkSsk7dHZE4arvtkKUVbTnZ",
  "key20": "4CXixuJYZ2rhXtvxRWwjF5NKKth8mPu3BCaFXszLCTdg2rvjQgG74oxjxYoq3kgxqkunrrAMVAd5H8EGfF1Zg1tH",
  "key21": "Y37i1b2sPvLxX6zSXW4gYLmMRDMiy7ag7qXA2Yvm89kL2W1CtqHJ7Vu85Vfuu6y8DeqRKCJKu2CmUieXpQHGVBG",
  "key22": "zSbiDgBeRvwsw8i5StetUAcycY8QrvuboV3gUwx5MrTPz7wxMg5DGkTM4c1Mdqu2o4aaz9UhkrXLutE7TpcUUQw",
  "key23": "2RrizevdzPnHVJoVtZBZGorThoAYibPz1jxwduMwNVQFHXVwsKeySatez4dN6DvNSB1h22ze1XGqoy2Pc5SXot6b",
  "key24": "587gmYXkWz5cHeaHYjGArXnaqPoALAgLkBbTNTbgraUBAnJkHGHTTbwc4BSzXNtQPNwYJ5Vu8ckpukVPY7raqbWC",
  "key25": "4TNL5HK3JT8UnvHPCM2kpj2xtL9B7ucPUt45rkfuGFSsUBwXoFQ2qzvpFuVmHRZZsmtwMup3fgzP4vkcedpsEQJz",
  "key26": "4TbX56DvREGzFZwecEc8ctFt9yW61wAQmAQnmXi6yWefxoXujfZwJKYMsLJtviyysnYJk7ePuDnGUw4JDH8FTyCB",
  "key27": "3qxZ1aVtJcvB69pDnFVSCDTmRAgm1sTa3ju2Nb9GctKF4pLyTpz2fYNEnYuQmjjNumeQFkFXTrrUZwSLdGcR4sqB",
  "key28": "2DLuFQKu6mQkhg2wJQAQDsMkXokpLmo8M5reKQrQTeV8VoG69PYNr3K4VWmCibTRjcdjHpdpE65eV6rcEqMwr8QG",
  "key29": "3h8FvkbNCuvDdUrTNLr6meau61C4PKnttejJd11huTaeACWLe7nSNhjLpXiYgy21uJWa7wiqkRxCAbXS3f48JPTg",
  "key30": "3aeJMZK3R4JzittpXXe1C8jhBxSrrKsCXAK4s6qihVcL2ks8hMpBuoKU1VPppn1hu6d8Tf391eBwXufxUvq4YM1J",
  "key31": "49Ttjh4WSKAwh2qT97eFuSWQp7CH8ewzhttw5TnCdRgqPDBXYpRWZDHVPE6bh3L6xy3hDwMCTQsVNpQ2xhcGG2An",
  "key32": "55MwSa9epEtUfkddkX84nARXpmyQVSKDjrEtmh8wGDE1uvrED4DFC3hkRVReAUNLTT5pH7PiXEktBkGmwSfDUofL",
  "key33": "577FvNb7zCpGMAEbWUgibXK16w8g2oH65r3rAvddSChC6zN5kathh4A2kMzKi4KNjoQdKszrA9S47uCKVPyBPe14",
  "key34": "52xpFif9aAirqAq7RfMJWjb3vBdooxUaer3WXEcqLTJ46GsYstfyN1QC7FC3noE1ZAo7nYwWt8TvFD5pPvMNAA6K",
  "key35": "2P8KjW3anaS5rQ12h5pBQ73dBp1S14WkwUgxqugKuiBUJF2QLc5HDZtXozNaduspHfRkH3XLu4LTdKwyp2Gefai1",
  "key36": "5cqgbSCAYRYKvntLaLnpKsZibwm7jbWaPPP9GbyY3355gveFYxUpPiPdNDyQZh2tX4jpWugj3wfR5Bf1NF1mtZGZ",
  "key37": "5qiCkvN93d7hU3D3hybvJukZiYCa54KQCrdEWygX2iwU4G1RYUcfrghCM35gWk8SajFwfYVr2HTUASNA66nXd26i",
  "key38": "kaNoyXcecA2E2BFmo1eUaY6Xa7BPfVyHJ7Jo7oZM71QJjLXcMQXYcGrsRL6duuD2Ncctiiadix413moqozGyCFB",
  "key39": "2ZAHzAGH4xci9oWkAPkYCmeaex5cux77qxvEQghVpd91LZaAQXoqKtSGYKk7XPvrAVwce6nM7F93S85sNkvBfpie",
  "key40": "29HSjmydh2ACGXnXMw8cENmdPi1SzwoNHRPMm4Ya77nCFgtnSTT1G129ij4ktRgGXZN1sgTsGJeVxsZ4YTEqiMjf",
  "key41": "5u4hCic6yovzPQ2Mr1cJhXXZGqbP5C2pTKzStGfor5wNgcS6awvXKGf3VTeGzM3szbVLKphuP5DpiWP9BcvjTo8o",
  "key42": "494vLZ79FB2j7GH3A3cYtuS2r8fsX7y8E21zfq6FXp98D1R8CoXzWXfP6JemLeYxRs9XgPX6gWBJ6ntqFMuuAFHk",
  "key43": "4knLiZz5CBxxcX91zuw1LycF7R7KcVMiyYi3Txzxeu5rCypgvtXodjVtbRtqRJYAtX2BK2S6KsDdk5oej9LqaRz8",
  "key44": "yQrkJ6SaEtQQiuQpsQSBQbEz2q2pmt458seJiipyJiteAbG3oraZJbhs9VjGFdqxZS61XffpzeT4a94Rh8e1Ge6",
  "key45": "248M9QGbjqtsztefPn6DbkXUSS123L2VYB8Hbj1RVCemYZsmVbPWSyV9x2kHhX6bxksWE6iDyr2w8wCbADNtpGu5",
  "key46": "wjKV6nyUG6HgSLTi8WoDz9H2ecBBi7LYX7u3ZqjV1sMWGDEPoBMTdHXRyYcjfmiTC3HgwxF2ZEey7x6Cb97Qiin"
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
