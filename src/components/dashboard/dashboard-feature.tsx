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
    "2rcRb7FaUFywp69wVF2VPxvPjyeKjs5hURPP2ynWMfcTAS5WLJaRdSkAFpNAA7ytTHo6NCyPrdMTwqFaNYHuDLvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeWmQ8fLyC6c9MMR2oC2vyDiQe5jyDEWgSxPApfQXCxhkcBnzFJ5NwagMaNAnZ6Gf5e2qar2Uh2XaoD7qhEK7DF",
  "key1": "43nydvFdUEu8DU4F2jnXuJYwCu2yqXYrKxsUoWfajv3UokdH9j4Wj88SLssRAMDnYbvbzTdxSnyDDR5QQnTV86Ui",
  "key2": "37FXMxhUVBhgpwDA6bK3qFwxDbnGoZub3H1pw3SxCLAQtCZUuAjDYRtcWDk6DdC9BBEfQTtnj14qP8qXSCQhJtLw",
  "key3": "t7Kgd9bki4EyaadLcmj44pPTWNdcquq7KTa8fhgctMWbd1GkJ9WNLZ5ZGxxpgwEPdpLpmLbmzpomckPB415vPq8",
  "key4": "34maGhyyvHLH7Hiv2f8dcgKwwJg8Ho9QgqxRpaF7hfNNATZrVEBATVzXxNx984Ye6Ct9ZSsbSoJAKG2uT6EbiC6v",
  "key5": "4eCz1YQRro6TT3LCgtFm6PqKb6R8XtKrkMyo2GJLmjz2XMEHo3SGVMa9etrXZnEaVCynQgL2JQmXpzS9tR8d1VqX",
  "key6": "2GF4V4JnLhDSCq9J8V3waumoc53N4dUHinsNaUnE3UyPe14eA2ZyDcjG38dnpDCdCVFFxHwWkSwJBCEkPUVZMsKs",
  "key7": "2RfEZj2CKP3hevqsfWddLocsRyoRGEGJTCPWKkFYdGbCvTGrU4k5bNEGbj2th4up5w2H3RN7xeHDqiThBVCVcxHe",
  "key8": "2Gy1zQo1uboCq2fAa3zH59iwVZPdh8TGPV1XfUCZF24hV8aXop9vL58KDiYUJJuZrnzA56fHrPjwyx9pPX3t9i6y",
  "key9": "2Kmyc6ZFhrbm1iCB5gNQDdYxPicQVvyefBor6DFe7q4EgqC4KrZnYvfm5RcFztLdrJycw8B9QuDENjmjPCXk9Jif",
  "key10": "4ZwJLPVDYgekw9xh53vsqxFUadUA3A9nUBLmzrQnwb6TaQRusmirjWMN9p47BjVdkQdVpdGx3ViFwZ2mtxLaxvgH",
  "key11": "5h5oxqSSzwfR3GB19MuytRn4kcRky4VgZXVvVxcdb3Z2bcoeo1gnD7jWqPtrfNeZ67cqCqHZpaZKmJYMi4oZUBh8",
  "key12": "3FBxpDivkKYBqdg3zw5SbSEE8rQYxzCUDUPqN6252Kt3XpVGhiYK82XHsJsUSe1Z2iHxmTqgyiG5KmrV7WHCfU7i",
  "key13": "5PbHKWcEiZ6ZR3FYi9jvW9fRL66D6j8XQReg3BVyBPtixY7MFUmer9CdhjwLT3Sn39UBP87FiQCEY1DbEvRRrVuS",
  "key14": "382y8SaZ9CQneb8t72QxWFccpAMJwYHJmgp8TL8W4p2v88q8ufXLpVCghDUQUcsDy2XRh6qfLAQuEtXrTq25jvtz",
  "key15": "yff9xVnqGKL2iA1hxYiEp3KEvZZN28bx6BiddRJRvfY8cUMNUx37hSknUnTTUMx9KNJh7ad85KoeCAyFbSHZjKJ",
  "key16": "2gfW1jrwH18pn7WNSkWKg2GLUojQbpLYc8q35wikoocviNsXDvAHrWgwNX48MMSUuBmTURskPTdRDeuurjngfFoP",
  "key17": "dvkt34SoRSooAaCcDVMLkkBKmysPbPoKDoae2exALThqKH1hFNyCPPv7xgYPVBdPKKkk1Y7tvYcr1aaqtM4dsdc",
  "key18": "oReerbhDVYEH8MtpVG4WKgoxwdJxAqjRKTC6UtSjPf45PdsnAgz5CsPb1FMytAGUVb5c4piyqNjuXrLLZhq7BZn",
  "key19": "4nsw4gdTgjoo9Xd6Q6kX2dbzdurVYHNU4SRLBma3caEsAKtDBePiizdGMndTSve5k66JXFC4sQRwUioGfZv8AQDn",
  "key20": "58PVURPaneP7BGeg7Xw9B4LD7kBhdwCVnAxsFE9yLT1bvV8tKMqJdHgpEuNt1XKGyRh1EuJNuYxQmuV3rwnymo3K",
  "key21": "3EKRcmDy47QfdxNJbkYJ2iAbB5R57YTaNGKNpgUeGTS8casaYUQXYqKiwbLcK78JRXnRZRbqU4LhFe9S7ootxFXx",
  "key22": "3Cvy3YVnP1BrjsquKrKFJnGt5oD4Mjrk3DuY392h9CVL5vQgwciHA4ar3WBuYbN5hWuNcrR6NVEVrQZPVLNGVcLY",
  "key23": "3gKCUEQwcJmxc577mtXQQg8u65pNxg6FdJRiT8TmPVvRT2n4GrcSC9MsPz4W2iR4cjNFTmDZXqFap1SBUGFPXtev",
  "key24": "gS9abyzfhn9NSupUBzmj1z9vBgHktjgLkLG8qqrEYawmBjbLYXu2GZVxfVoXSt24YbvHtqayuoSpHC1Eh97sxvQ",
  "key25": "3zUrKj9Mhp7koYQuNtqhUJyjCWC3v4fG8o2Gjuk2yYtugzFuytD6b5AijG9WSFEtQmQ8YhAfTRxCxYfGWKS7D4R3",
  "key26": "srPoHB5qsexkhZaW9WershdmoVfkz1q1fqLgMxtxhJQT1D8BztTJtpKq89rx5ejX4Gt1UGW6uZL8ntAZh6jFeXV",
  "key27": "5oUNZh2N6HCMah59sKhUH6V1AEcRpjoyJPo4r4deszo41BVG5nLMztKqWSEBqvUmS3ZW3Kv1CptAtmPge2czP99J",
  "key28": "SFDSM7U1JSSP8FWX9WgSKHz7Hj1MRHShxUWvBiqVwigNWC8JmygKtghbQFiF6xJZXmXANcaHsBoJ3ry6AMh47am",
  "key29": "4Uot6qALR91xZzp6wTE6ERpn59ENKuG2WapcZCUB7DQQv8hufuvBKmhh1r63pfBMMcQrUimzc5dfcDFAKxn4JNv6",
  "key30": "3rvuSyvZcRWT6RQMpvjaZXVhcDrV4QHGNtZEdaV2KjWHA5YwGJiTkig8vcXGn29gfk65awxPVyihzqHo7Pa1Ze9d",
  "key31": "2pPqGP22GVTHbqYqsxNAEbQrwVNgAeDQCiEegR2N6d2HVRCpJRDnujKdMXfExN7jGkD7owhaBJxTu3yvQvEexu8S",
  "key32": "5zsXwa77U2AFscJyWwFLJwmuYDgGBrHfyeWhv7NSLa2eRA2j3RxfEdBwirD6fKUcXG1QrGTWEUeqre7zp19Ho7wV",
  "key33": "4RGce3gspnGLss6m8PN8ac3JWKVne6GrHJvcRe5FaVVmdrR4dGAdPcpVmLWHa6hZuMLa2i6zR4jqSnJeJbv66twN",
  "key34": "5tRNJz1FUguegVPLZmx2U9dtvSzyBJxvsurU4mB8v9TDWBixuPVn3DSBPCqEdSUYLAj1KtEkCG9JVhT4EH1z5kWL",
  "key35": "5nfpcYmtBA5dFyqSAMpJXnzajWVS9Ux9TwtnRo8ZzLUfSZ9SasDypG37ZjBp9Qe1feSdwibydTVRcyFcPUT5Lo5h",
  "key36": "YPCR5tFJC8uiMqkQMwkHpQtfDGGFQnA4y9S9AbBn17WP54HzKNm6XN8cHicLexSTbqv3HBzLARL3XvqFYJCZq3q",
  "key37": "16iGt48HN2b8DMU2Kf8PztjkKnrQ1H37qcv7kzm1N3YXYWcDsPtkGpQFw71cLVjj8Gk1tyUNzux1p2R3tGrr9Lg",
  "key38": "3PovRx4RDWkDoJweDrEJziLNapnfnjBadUa5NToLYfgFCCTxYXBMFxkaHTs97NQt5Kxecjd4UhzWpjKskhbHua75",
  "key39": "4N44KuH7Uyu8kaxsBt2vfJGRcEWbrETrwtZ2M2nYb4smsBptFz3v1qUx7bczjay2oHqYtRVwzRVvm9edhujjmpHk",
  "key40": "37kMJsmu6MoLiQbM6cTgVojFBa1VMZFWGoiUrZZTDHskYBC9SSkM7cRKqt5A6q34WAiARu6E75jkPYLbB4aqECiS",
  "key41": "4Bcv35RNyX3ni1vuajt7HiBTPSiEpp9qzmCbGpTGVf2n52DSpWGzVDNhPCXiivNTR8RTUhz1PaVvifDvhZTvSw7g",
  "key42": "4s2euJazJciwrrcPR4YRgXCnS7u5xwRdqStobVCyXoQpaxZqQqoCgPfaHqvgmYUZZ2pPFQcnXV6aWsJ7wPCVqAgm",
  "key43": "4BqUF4KHwGZDkMij1B4YuCxvcZifjhTSWqzV8kFUT8EBpVpmzc7JyFy8zLXfdLbDeEdZyiyCVRbwKAx7Jts5Nk6c",
  "key44": "2F8UNuZJ1WpJ5Ka43pFZRphjkzbVeQsqkUtGhfw7Bnee9WLUrhT3gJXcL4PJ9oUFxrA4xkSvexdBtEbdBNYSWMK8",
  "key45": "5xyjrWerK1neAwkxAVGRLKDxnoS6XZxT8SzA1kSGYhj7WfNSmoTPA43UHRs9tURaFfcndrtAZ66PYF6WyfCo6Ycn"
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
