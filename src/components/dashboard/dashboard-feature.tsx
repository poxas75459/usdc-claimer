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
    "2SsjgUuvjkWYKoTuWsy1ZmqQh2jtVeZ7oJhbhtwaYqSVwyLxjwUYwT1hXN7CrB6U7K1Xzpa4ogbN8KniRpiJnnnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVCkUfY7Z82Mj1zjCSi4eByTKLGLqP3js161GY6ZPykomXHTHSXqum16DSoZqpTgCDsb3pwqiwJxuKp15K1XG1u",
  "key1": "4W2GNTGTTDn7MoHpKW2nCvR17xdUgcYqr7DWVHTTPi1YMgg3XCwzeRZiyX5cwRgZ8L5mdutUqFD52WnQQx9x9zKJ",
  "key2": "4jMSEutTasHGs2oELGCp5wsBqMGGprGqA5YJHcUAtRhqf7LgzT2Fv3T7dnqdHZY8vEZciBsCSeshwNp9DLR59KoE",
  "key3": "4WuAUXTMNkjySAShHd8dkSGBN47mp7ts4146MzFFPoKu34ypwEydNaqBAYytpzTp4dKyJ7QV9y137PvijXAc65aP",
  "key4": "3f7tbPPLeL6SgTaQBvorHEjqBGqmU7rNt5jWF27r4cGokt5kJofHnnS4knG62zVbbJBYJ5w61KS3rZcSH8cKHSXx",
  "key5": "3xvWSbtoxpLzPiG6cUG28qpVtNBa7LsZiaVojtjASXzD45cnjecu7usQ7uN5dEX3xjhz5rY6HCSNwjkcRUHfgcsj",
  "key6": "2Uyg5tmuYbXC73rCmKoPxUtDHCsiuFgPSEnsu9cbbP5kNZzFtqnJMfbtQbJr2eNFonwG9s5SJKfcbMSZDsHRbJJu",
  "key7": "4EodUyzBQsb26q6QxoZTUkK4VyMnNTxhpHeqmFGz7X3Wr4p7kf3jsGTKTxAefZSYy7NXHJmaWRCT37VPPTLGhBoa",
  "key8": "3oZY3V3dZ8W5jhyueQBbsjv4PuyDgdtBqrQqk3fdsmciDC7bT54223nzrz93CEyjXGnJvUiYWzobSAX6stPbx95K",
  "key9": "QvXjnZqezkRB5zp4HAkXep4Gr9Aknqmer3sCqg3vp2FEhAQfcFcwY1FXCCjamgWCD7kwEfJW74xD4JeV1bPNG2R",
  "key10": "3LQWfNJfR6Zg1io76gZbdrQC2K6cq2TxNvGst7yRiqfmW67u2Zim6p1F28dZtennjBpAcAi2GCxu6ZetypvccT5S",
  "key11": "2gqMxsWgLt58XEFhghBrpg3Mx2nzRsVBPHm9grNxvHZBf6B9UJt6jVTLeYtGhb668LhQezYQuBWX5WxUbeWo89MF",
  "key12": "NWpxscrQWPnbcaUPQ6YBYJu8XrrsGQXuzm9iEBBPZ6s9qZHPPSNfidDy56a9k59wwoBmjronCmUeVCwLZxfMx7F",
  "key13": "5ibVUvCMREnRqy2UeU3DuWw6cnFuL2G224rjqmYeuqU3tFDRjJn3wdVT6irqGUrQifwafSeg1peQZdrNvHU64gDp",
  "key14": "GSBH4oZ6NedeTTXiWUUfzTYe6wMqgiFaCgszj4EhXGzYXtJNgQaAjyL4MGpHpGuDGun146Yd7ZKZT5c1Rv3iYUa",
  "key15": "35heRMxL4wrGwtsEuv4N8r73pYLVydgMYgtDvYUMJVRGg1bzGkNtFLMdkNDV6yipLKM5jdGMM3UYu9QXsVtEsXd8",
  "key16": "3AjLXGgKvcGh7GfWPF2Zm8qPp7CasK8FJMkhcgHeqGtNH8BhPnTeEnVit9LDkXXQQdY5KUNnSbpWozG4rCwEcjTw",
  "key17": "2j712CHQ7TEh5AeqqWYh6QyuH9afRBQHTrFkJzQxhTrZftwCVUCYLTT8ucK5ayPCWMiZ41AYvuG9s8K1fCq7M6Ug",
  "key18": "2BZSQcDMPCtLcitSMeiJXsrrBN83iQDkBwrkNMBBZR3U3DSbn3KVotwcVSMY2DXz781xbgQsPJbHPrR6cA4wg9yQ",
  "key19": "5afCX9XwW5hPeRGeWJEG9G4jA1uabeZtEq6UV73jB5GM1GSrCVnNvaKX7v73URFYxgXwYSsMiwyUHbm5NEcJv68A",
  "key20": "JazSPmLrqdXTSEZTh2qrZ4akp7UTcweR2oj3jbufawvdjZwkV6ou9vQT298JooEUBoeT5Sp5EApMbouE7rLDsQj",
  "key21": "2WJUWgRCcbFVdD2ccpqnnerDgPYuzNjjH9ufi6Qv9EmHqJwvTiLPo7CiVFLrmt9hkZ7bi5NsJRTt8BhwJhBa9ScT",
  "key22": "3LFP5Ne27pW7EmBaV2vRtVba6c9nVYxAVRnx8UF25P2VFBkNwbeYUVGknnTApaxj38RJijC2JxzYB8emy2zh5e6U",
  "key23": "5cDPQDNEFENYfZnebWQvxQc9FdniYei98KCbPRYdWUXbD1XBhJbXhonRpZiEXXS7WrqTv6AevR9BjLmGMSg88B6y",
  "key24": "3uJoxcsFZEKf6zPXcbzGdEGePThHRDizBC8R1ty2Bk2T6buapZ4DN1GEVybrCGW69kK5W8vMFDXVAmyQ2c7zBLz4",
  "key25": "4CS6drFHRXPicb5P8wpXFuqrnStcZV2wDwxmTa6XsPyr9KtkKk1Da9pUAF2CCMargc4jj4bUh6s4WCRjiuX6oMkZ",
  "key26": "3gNGqDPfNg99B31EpwQxCUW3qVnpGLZAoLMNPL5LLLdrSQsbHiVbK3kqKaqKczMnFyAdCoS52d9MRnffkBkih36a",
  "key27": "2XMtpTrdW6rkwvzu4aA5xNYa2SPwGVEBP5KJsAJ9MQQCuARDNkVqz1BU8H9BwQGCV26ZHAwswSXgYEpQgGNZZt97",
  "key28": "Xu8WkVDKQnWufUfKkUbGpAyE8xx4V4toKivS3APZRARyFVxGu5K7eTutFkQT9o5jWa5KW5D8vwJ9Baoymhcf21c",
  "key29": "cSzSKrjkYE7ofHy6ALu5oRA7Zy4cNUznfWNTKCBkjsHuS2HMikYpgxe6WsJrXqKd5vU2oU9zuz4W4CHQgnfiYjw",
  "key30": "4xEfLTHj2cWmf4pDJ7okBAU7sWkvZnLzt6EijMsx4L4uUsooeZC8vip73jA2bohncDbji1u97edi2fWCX3x8nsgF",
  "key31": "5kVKyEnD9hu1kg8cU76bHFJ38d4QDaFb7GmNN2fBuSQhni549RT1j7bC7nRLkmKRovhVVer2pBw4ySqKEyeq7BNn",
  "key32": "yYa9HMLyjq26tcw2xFpqxtcVQVBSmEwkUirxBXATk5JcQUsWrGmR1e2Ysb3ybxB2ZZevnBgyajoCXDkD2HRpbBF",
  "key33": "3jfoNJvTPNDfbMERubPVQ5KxUofoMgDRFqnbPeUHjJqKJxg9SgEvAY9N6E8wvXku6nkTgAJhFNNtm7wJoSjPbNmL",
  "key34": "3D2jEL2rP4VJTUPT7QNgAeBtmFaJ2eMwoFb9ivCmwsH6wFHwBmmdjS6TJ5mVJzhT1TcpXvB6moT5rJiQvW76XK86",
  "key35": "5s3wDEJfKfDm7qvXYSBM8jCrrf3jHPcm7CgCidijsgKggjtEYug5g2DWDb1eNd7ij1eEyutfnTj6NifJVN6KErfX",
  "key36": "2E79TtkhbLgsxYRurz2995GhnXibH26VChVZaH3j9m5rSviY9H5ydVeJBJvgNnkQ2hUD34acPDwcQnDCB6Bk2Bz",
  "key37": "2z329sGoPrbvAuQHxu94ekb7ybDYs898a3kJS99ihhDpQJHYJHzMwzuX1BaKu8CSs31TGKZV9GZ54xNgyEwuGYdV",
  "key38": "4W8yEpUSLK64UNuBAiVsu6xejB3hDnni2gxGihg993xPvY93HqZ8k3ZDuNAazQJTvinX9TYryv6YZCNtmz34TLUc",
  "key39": "2MskYkBQVRpctTLnvhM2Bjib4ZrWmo5Ss5tXhkUji4ZKa82QbWcw3iu9eDoGAbKeDNr5MniyVVYWN5R8YjmdWYwD",
  "key40": "4uM5xwqg5LtjpwjvAT7wUZT8zXdgDAvK83Jn3tFXeFHomXUJwfa77fpkpphbFistYupRshuR2VPZJLva5g6KGi6N",
  "key41": "3MKPaXjykXpnNJJ35oeTYj3zBqbiZCiqEragPgf6sopDu96hrDHynnP1Vof6rYPf9Cg9Y832ATDSj5WvBqWEPCqK",
  "key42": "4yyaLsApX3118sY7kQF7EYur54rT5n9o2oYDTefJkc6t4b7gbcy1KcXV2cjokKA43qxDc5K9YujWhxQNq8GxSme2",
  "key43": "3Jp1MWiFwU2A5Az5LdkfBki3qn65w2pRcBabSeUqh5K23LfavYmxwp4cwpA8SurqrL9MmwF5h34PQP3P4mWUJxhD"
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
