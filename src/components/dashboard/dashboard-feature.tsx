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
    "iJnS9sSdJZDfgnPbVACeogxbJnsx6pmQDvnsNP4joSiAXTHeodgr9uBY1rHM8sT4iEDmpnrkb6Q971ugSpumD6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FLoMfuHjgn4u3NBqWvBVXKZ8LSFLdohUG1cD5eSpobxyjKRR7AWvTC9MwfqeyEtNAW6j73XHLwchj4YDgxDP2Q",
  "key1": "2dqNPN6Cm1Are5Aspw1mEBwsFQWQUq8A7mA5FqW8sLk25CKrFtwi8kguBdnUZsgK8qwQNbojjcSmnr4p2JFSSigu",
  "key2": "41S7BxLs8eQ1GBmYNdP63CJViKRPuyETA4qs815SYWbfFwpW9F9e36iaEdzx4aA4eTtKd7e46fjwEcGNBDzFBtYX",
  "key3": "66Y9YQVvrt5rfcZ5Wq7KhpBwugmF7RXFdk2BsS9XabEhQ1JhTatNcppupLfifbds8ZK6GupfVBUE2SpZ4n4DJKam",
  "key4": "3uLpkwpMuX8ikE8dEHRmaZMfXQaGfoRBLKQQFj4rvW5g1cwpN2cfzKs84am1VTMCkydUtbg6xSWxT1MSRkagDp7H",
  "key5": "4dB4gAEC66h1hkRRsQLSbQ1bmhSXcXbUqvUgVb2J5iTGh8ZUggK5hFrRo6Ey8wwDTmeVtioCbrevHEGdZtjsLtiP",
  "key6": "XPiG7MQf5LpSvgfPZKv9szdxHqLPyncWmFu2ecQ6C3xA9jEVadYGhAWgTBkjgqEPPXpY782XQLnfRw3NKFZU9rr",
  "key7": "rktsUKMfqV4KtgR2fErFF2usbG4pdw5vbCsA7hf5CiuFavXMh1UjHRoyfA7zVBsAs2bhyqJMjWygKPAaHiwgnPK",
  "key8": "2g6Tb8yahB1MQMbwbwzA9Z8ivZnMK46fmS84AFQMmmjCkkpB3ABnmMqdR12DCi7ABDwnRpb3bg52NFdNEJmRvjh2",
  "key9": "5HZ29zF4J1GhxQi5Wt29f5T28iiGT7GNDRaDDMYAtpFTMNtdxbkCvqriAgVP9N8PDSvQmUu5WuPgzf9A9p3JPcuV",
  "key10": "3FiXBFvbwMP8WoxMC7cnzxUAryTzQgmGFLiLpaELdRou85tkUmXCEoWxibXwvsf2YuHZP5cyDynHrgzas2mRyXyP",
  "key11": "3NHUxRjBohcY4UxM5fUj1VQRe6qjsh9mt171LHf6BMcTw1ToCLR9mqX751wD5k2pmKzfyusbFBTChgUdxgkSPxab",
  "key12": "5MFubsPiuKLtixQ9LYfkFXdAVuzYzspfn966k66oHyh7vBrMZVuwrkcGKogJX9YGNNyqUXE6Eou5eZer95PyEMte",
  "key13": "2BwKZg6rGSPJXS6pcFXVpYXfmrqANwnKscnNhD6dqw4aUzMmEFqjBCzta2hgW5gAmuiDddME8rQC8ruWXq1sVw3S",
  "key14": "51S2G7uh4qBBuFVLDQ4bewtxHTGgdkAZv9vMzvukAunskZsiHGp1vet7XXJJRVLYQd5R1Yiy33MEJ1dcSnEus5F3",
  "key15": "gfNpA8wbpNgLhEGpzQoNhPBhx2uXbKBMT92fBTowY9i16hQxmLfJR6RnSB9yfCsYrDQACCXFHnFXdN9gHyUfU9o",
  "key16": "rQ4e3wsDc2aS9wwW9tK9dsTuZ4m3VRbkdrDNxwvNKbrqLhwNYY9p8hMsxZ5sAeAcdXT6bFYLKRKi5GnWzh9jYzy",
  "key17": "62qZBr5U7vsMHJGabJAbbFie6sKHxZVDMNHCKhDyzNUd49PYduRYvvViS1JkqqrVK1fyGCWrtHdGiPtMPo6KT4GL",
  "key18": "2o2yjqAKZSmvwFBLH7PvM81uKm2kfuJN97PxZQLZ3McDrsX8HiF4UKn29MkG5yvJNTQLehH2rySBJpwbd1KtcdaY",
  "key19": "5s5hwGogBjrXA7vZ2YveoucaU9VG35eBa2bR16co6zKobFKiXGJ1Zjp5kSjjW81NxBCFL68x96VHN2UaewxrLep7",
  "key20": "ux4UXd2W1XaRCk5stLbWC6KsFizwy9MwyPbXRF3ddL5qsQHLFVHuxcZM7Yd9TGNhf534BfvTYQa8JSWGwhWvum4",
  "key21": "2Dp8FCyRz3c94bF4dJnJJ43AETQKwpYxgdwCQNuK9VqtWBKm6QGFoiZmfRKTn7VMPNeyN8ZkiyRSvcX7PPwNEqKo",
  "key22": "3UrVYADQ5pzCgffEiwJjeVLefMFDzgy8wknw9xvPdCUCWR1dwdwn8JpwSNM9M25BAicGaZYcFrnd6TkPgiPARiiS",
  "key23": "4v6WrDaa5a1YxhXtNrYmiKZUXCt5QDYAXjfjES7ZKyro51QAZxg6fxgCPsXUz18QEr1vktzPbKmFLWkur8FN2NCD",
  "key24": "az2bfBPvHz4WtJRrANTVMQzX4EZgD4P5paAThe3NeWkxYoZ7BmvkADWCunHYdas4ZfXZVq7LJYB2QyuoXCHUHUT",
  "key25": "5weURPbNU1jmdXwD8czhfrz4bZi9sioPPei62RvLmVnzaxqzJQmG5dNvnynQLECx3fqez6zLaw9USYwcgBctTy5q",
  "key26": "361kdCBNgCP5LpF9jAAkfJMumfmiWduaJsxXjYyrSoMBsQkHFZxWEFs5Cm13wz2sraDKCa3YYNGAtnn296TGdbks",
  "key27": "4mVbEwtEt3C1MAzoBhZ55VZNqfJcE6VPQGVXLN373GbN9U6e245ndcEYm4TuVhFPUBBCy2VFTLGmijGL7aozfJSB",
  "key28": "4mVNJW1uvB96pqouAA3phL7ty3skwArM8V5Jst7rRpaK7n1eXaY9Ln2z22XotjrcPwDHuuLqw28Pkf2p2HfVKknz",
  "key29": "xnTRLPTTFvaStCJRWWvMugGS5Z6oVPWLsjP8KGhZ1eDirWzysn3BEZeeKiFednABTqF8CCisAiT7iRYZYSFzu83",
  "key30": "5324mkmYUBbgmXevjRh8qCM7JeAiQBTcncRF3N93MMZSk36GZvqXWiYpKBt2rjMLpqv2FdTT37UWjyeJfzHJwAAn",
  "key31": "253naLRZZLLdQAFCzL2UfyrSK5UUawsPFWNg4jSEbnV6RVwxVts7qwtjcYrXv7iMVtowzRgAgp96v1RvEPQVDxYt",
  "key32": "WHcfBqFVJsFk1h2gAiKYhPbTxTk6nRnpuNtQbJTSuAdEU5Xe4qVmssAa7f8oNq3PR9TsnrLmG4T2PW2cagvrV5R",
  "key33": "64A2ybXuAxnuisJZDnE3uhdpu2hb5WiUkTTLLm4amTR6fSgdu5ibGLVjjV1VWhLZZWCSyr79TrDeuJeLrrn6GTwg",
  "key34": "2gszSiuba6zBfccpwyratMt2JFjrQp22cz3mHsZPC4XurPH4Fd47hx1pxo1XxYhMCtTLe98nq4HmR5BXdqRHrtvd",
  "key35": "2y9qNNYAFL4v2BwAoYdwhtnmCsu3P932DNgcAUqhE45rk7NN9w8G3x1FveKcdjLo8c6BiRzF3tQPeKCHurqXfKo1",
  "key36": "383eVzh3DNgKQh2aJFf3Qf3eb33qVzdsFGsuC5aXi7j8mopMtKA6vDiS6vdgnCVNJM7de42ZAyKX5bpvcHtnWurM",
  "key37": "TiHgAeC99PfbzVrJA9g5BLsDemVpuoWH1M4n2T3d4bfxwR2XNpu3jKubJcspfYcntK5bqyJxLhuRu5cAimkkHVv",
  "key38": "tr1X1huUCqDqqe7Lc7HGXWV28P6WRUmKttUQyPSswbCGU3qLCCa3TLCvVTGTFMqe4rosVqtqfX7bi6nHfX5kDvh",
  "key39": "4kDEZZapHnDHmkgoJTrpQpVC9N9QgNeqV4J2TSfiohTN6Hjigg976ABKDfVYAob5Tg3beN3Js9RgLfdaE87JS9AV",
  "key40": "5GR9CEsqtWJHAMXPgu7sYzmYzeeXRKFv12p8mbeVpL1q67FGR5weVawWo6LjDSirjFattcXPZLUBvxdTHEKQFQKF",
  "key41": "4vPcBrw2oEUn6parh2Gkc9idVTLSuXHiMZ5Tt2Vu4xCgtHjPUHLYMhEZqHZx5pDScHGXVGhjpZPar88biCXUeeL",
  "key42": "2TLinx5VKGzQNTQFuLkp9d8xsWE1r6iTGiD9cncAxuYe9UrW8emPXYcJtoBAHY4VfsxRk8VN6XSVsyaezhafQivE",
  "key43": "5tRdbTx4ST6ExFNxV7FZeWcPZJoRUpJ2ZevtjrE84b4PoKvFMUAn3eSaE3rHdNcNuMywDZqBCgZFoLztTZQmKPPM",
  "key44": "GSJCQsB6CkJyddqCg13b4nRT5KNm4gANE9dB4biBwsTwZCM3zx1K1EZJakM3vES5vcrPt6e3D2tfFmyLKGb9arX",
  "key45": "5Q3fqas5iGF2TMNRjik7eEkoFCyn9x7oijvY3oQQpKJdUDgPMGttN4bYAGjARocUfmxwvHsqSowTiDSvd58QyxeB",
  "key46": "2qT5b3a5dLZ5ResPWy1hNjU9GiAG4FEqGaypTbq6JZmdhhsugdkJxp623YvGUZBoDfrQ4aE2YQBKexsrKAP7ZnT3"
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
