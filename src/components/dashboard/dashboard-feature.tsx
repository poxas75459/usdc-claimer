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
    "58RBj7naPghg1KWhsiCBUp5nzecgK9XV7Lq3EE5gw5pMT19yovCe5gwJW6KuBAiMhkTq4VKoP5YaqxRsuwcGLaCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdMMgMYtvbZMS9H5UjFNw3tgpv3CGdB6ucxx2Qx2M6HLguAznMym4DfPsLSW1spk5Kbi99yqefgnwA7gF78bVkQ",
  "key1": "5PFFvAwJvj4vAGyctjV35rRuYiVZ8oLopFGVK1ubJZkzMTP2ZQ59N7EWWvQVdcGEisaf9VESHmj148AAHERcc27Q",
  "key2": "4eLXVjpRw88rgLyowtFT2pExmvNz2M1s1niAZR3fv1dAP8TjbzVjTzGQphn46SpnxQ9uM4G4tGYjmZh5vfRTVfJi",
  "key3": "3niTnbL1VoDQnCpZ53XFDoEuSEoEfdvFpTF38w11EazakmAFrmYENktfmorBo77ov2GhRcM8ggVvr5AKxNPB2bbR",
  "key4": "AxNQ6T711oJgzYuxGLbNJpPXDhshsfSZM6g2tDogMr86BxKAgzioDb7oeoV765NW6LKtRnwUbK4b38oyzTnNBb6",
  "key5": "4G856BnZ219b91sjbqX4netnhrpsViAnzWYnhCe8rZaWJNxiBi82w9yG9groTo4Wge4AwrPpnwu4p1BfKLooocFw",
  "key6": "e6E5urQNsSywa5iH5pL6yh4rw44xwnJMrVQUAPcLq9YAYGGeQHJGyyjVzqhcTnxPoUBhz5nCNhDLtTi2RRx6HcG",
  "key7": "4DEXGJk5CxyCBukKZhExr1q2AjUvGE13RW6f5EqJUVoHy28H5K7h3mr8PcxCGNgNDZfW5dwpwwyFaNa5zXUsnDK7",
  "key8": "izrwJmcPXsF7snt5EFrBJVVFwJDivAqMhURHDyGDmuzwVVm4UsPrE47cGP3kAsetrAxwEKCdFF7zD7J2QahiLxj",
  "key9": "58JbzNjMAqAj1qswJNPVBjJHjKDKjzR37YNT8fS1385821d2kt1sNt1yBCLzqkH9nEwdoV5RiBR7DXU65KBwFx2T",
  "key10": "44VjEf4BoZhvAFdFsfQFRcBwYEnVshXVZTMDiTbtTNcxDDkfmUgqoKoZzBtEfDmssSF99dMkSJsJ91MLscaeXRPb",
  "key11": "4iusWS437WKkZymEerfHNnfbEVepJYDtuo9Fxak7PhFnDewi4HqbBMMGU5osnqgkVCikwkaSEHeeiQnmtS2zNEhW",
  "key12": "4A1o58hB3HVB2tCSxaWKXcSbatQpAqRPQ7mnnjASFnpxSGKxyzcvsdmd8L2c6k23XWsSVjW2xg2GxDzjzRMKV7fE",
  "key13": "3w6s6BDKZX2BqNHLkB2ap6XndNFJcJdeW4E9ZjB91tZNBX2SYzvKDe62NZsq5NGeBRzbDTKdtRxzapLiaCQuGsZA",
  "key14": "4Q7m8tFaVAQGVNvUCvwuxt5NLj916QnfX2xoZST4aAuxbqS91q8DZ8E8XvkSgrqaSw5M35tj455zwuotgTZQ3uRC",
  "key15": "3LGAfz8ryqPBHzBnJF8oK7YpfkghBwhhQLgY7GimsoifxZDw2NXVhMersUeMdWuk9vvSWqgKRb1goXMnfUKbos5V",
  "key16": "5UbPjZ71NBjc9xzYRku7omRFKVsAmYFNpEGThp7bhTx56xjp46uk7ZEuWSjRtEbb9WpX5qzU7sFisZk2amRhSuwK",
  "key17": "4erkfdtqqhGsb5ieFmMB3HyuNeJFXUbGJUJbfccnzEytMZVj8C25Gh1N8B8fbpJNSKSbVu7fNk8x14KzguDzzWXm",
  "key18": "2ht8wgK3sYHqFk76E1CsfoM2i7ok6qjwKBTmM2xKRux5vW9Hj8kcCKaDY7nC78ddPo4tsL6g1FBuXjCsiTG328Cj",
  "key19": "BnaxAVfsdD7FYT1dRgXxJjTnPRYTbJ7UEbxHfjES8W4jZLUxnTxSZPKQA6Ep9zKw55reAd3TZGcnxAAeL4vvvbx",
  "key20": "5bmcQm3vEALZhKr1scVxMaJmd2g5wqtJpVHbK7rBvZ6mugK3S939MNteBC9LEK5jHfp9ZDtwRtt43oC7jyRvQ5Sv",
  "key21": "4UDd2k3CnNYAw3AgQFBEGGCNaGuowLJvrVEbALNoy7EGwFy6pZpPBQdvc36aY63UN6nnNqRANw89Xd8Jo9RVV2kT",
  "key22": "oTW2EbhfZW3SisSS3jJntG531zdqiVdrb3g7LVNQwGpKKynV5ndgHZyLs7WPvyHvJ6PM5P2gwKMEcpMiJBPN1dG",
  "key23": "Xrb7zZyjV9Y7UFRCXqgVy2bvWxHvBFdRAHJSQrZBgWU79KpAZN5fiH8q16sVQLoTYfgcGAs46RsaSzhwF7wsrq1",
  "key24": "5J6jbEBUqs5hj5PKgMUunaCHm1yBXaXJmANd3bsNz467QcETegDpKQodzyNvua6F2F7ZXFEeF6QnQynB2Yf1Tvui",
  "key25": "2Gx8TzkQ2xa3piv2YokMjAMjFgHhZQLjjRgVx21nGJF4g73N7Mj2jvSh72NudC4gh1FmFJwAYsXNNq6zikVyuzPU",
  "key26": "j8vkY6p672yyNo5kApbLGNE6JjM8Cd7JU9a3EikuqA27LcZcmZE1qcprjMqD9mojPC8Dah71G6Kt9QfQ5vV8Y9Y",
  "key27": "4pVmqKfDJa4RF9dKWs7m6ry12CczmzAvajnGXFjwYXn8YviqEfLo5cJx8KL7vec3beRhmsEtyj62VkgixAZz2Q83",
  "key28": "4tCwQH26kFRSuGbT7Sec1XzMB89MTQmGC4vrJt4siU5r6HUx6yBMsJzyCsHEerWurSCZ1jzdNm7ib2s1SB3GteNr",
  "key29": "HPnMkj3FWFrbASJY31v97765kKTkCAquE3YjsLSHTH5zSR5wrRCXWLtTntMiSdN1n52P4gRFjnLg4G44iGPE7HM",
  "key30": "5ADGQPdkEuhReZkN2qmRZJXujegqCMXPwKKedKo19JFVxshhWyGNTKypvd6o1devVJrXrRXL8Tv3PdzDzsNWJPow",
  "key31": "5U1NYK66CDUsLGuTY2t7FB3C7rpU1JksmnDSY4ECDdfEzQoi7aVER18ZXZVa3uGP7JaeC2K1gBMbZf5giwVQKxmh",
  "key32": "4Q7fcWYjqQFd4Ttc2kCrWxfR6yqiKZ7ADVFXT3rVDG6vRb2nsot3dzEGbAcg23n2oAmiffXkWtg3x7msqod7K7Wm",
  "key33": "4LgUpML6b1FS4Ei4ZwEWozzwSziqp8jfKZaAd6dXc4kX8bgSpy4J1mDVmsN2vaHqvgkdUGTui5dnZFBy85z5Hd1W",
  "key34": "4dGN6yEEfPp9eLLZHcY3uUyh132wVwB3W2SW3uXJiqhb6sKevrH1q1We3nxCFxyXp9Lc6evHZyVmjK7Pae6j4ADU",
  "key35": "2XwJttbeW3aps29kM9ctDyyH4FRjwRMvhhHC5wq7zmGTt82FPRDeXMVG2XZ8YJcneapnV3mjHPKKe5r8xeYetadV",
  "key36": "4nhh1i2tDUvt2mjkS8MDCBWi1amBxWz394VdKqaJdHUrBEADv7p21Mysy36CEWi6mMGGthnxqjDxD5xiVtYKXJiQ",
  "key37": "YP1jczaQenyERACRefNKYYNw9NSsWKfUENSVfcSuerRsNxuJB55uEGFkGVUHEF3naV7jh8GXuaDkg3xRMoWveMs",
  "key38": "613GMWK4a437YKTPZ8GfuHX691jTCZ1giSRghCdzrjaVyCbdA6iXbjvx5yUvp5akFUcUpen6xoRMpqp8BZJZsYXJ"
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
