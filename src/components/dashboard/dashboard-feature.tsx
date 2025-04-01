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
    "4aAW9ooPRuAtvetErDFuu2Mfr26FjjEzxz8ugnhjmLpKhrizdGfGBEJvhBR21W4CjW8eqRhkfh8SV7ndkYy5sPAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mp3KkrkQDe382t4nS2NzD1pXes7VU23JFcdBJbhYbumNV5Gpn2FHUEZ1UeYhhZ9khxWmCFZAGVXUvwDoc5PmWTi",
  "key1": "2LsU2ubFgaqUYeAqy9PYEfnoW8RnJbEewftqNxNHMDCCkeXGpPZrrEQ4hjhdGveRp975MNKsVnvdX5S3wBFMVqk8",
  "key2": "3sWbR9wCrHqAeWdg1P7uMSP2hDmd3Aec4SDqCr6KrApbcM1n35e7x66D51rdguLAd9MarbXn5xFZaAF69CGwah3",
  "key3": "5U3PpxDmzp3J68XpMx6DFqtnW5m72yWwhVB9FZD1oSmd52Q9kfWiogmgMSptFonZA7EPbjVLGqNpsj1fbZqG7wjG",
  "key4": "a4HatZBV9XYpjjmBUiitYFpkxYco45vvw8ubeRidPapwaZ7bY27C5NDmU669UgD54uTNL9iRB4p4JHAQRhQtTtM",
  "key5": "26aSYUQZBfWeTNDMoNghPngn6D5JHhWnLRYTdbikeryRMnVrkBmSNEpTSUdyqmm22zNTEH4UX9hUJVjdUBCS1geR",
  "key6": "538HMpkGyptu6SZay93ayfnbEzVTtXKYGMfWuQ2seUWCmTsjzR5vgcYWBoH47NZ4hi8dQs5ckX4KBmTibbWMj9x4",
  "key7": "5QALmw7TVDVfKFPFwrtfQvy3T9ZsP6v5urB8j1FmR43vk1n45w3aFWhzYWWmxfDNzYqjeqWYwFnF4nVM1ZwrS1i9",
  "key8": "3zL52KXFg1LGYMCjhi1Rs94cHJPtVfzdGPASEeCxBC4kvaYpfzH6nmsr4fwd1xV2BExxkSPkQxgDSGT2LAAhqH4n",
  "key9": "2FQzUkttcE96bJb3ANyhDJHFxFH2hEzpEdYu5p2jmoY5gVHJCQP9XVa2xKHTa9U183bKXDJ9LsagF2eo4gyUAH23",
  "key10": "48JaJeyBkn45tRcbtY6xLa5x8zn58uA51Y8d7KgneYRupFfdVWzAcgJBfiKX4rVdpg3rkuLnMyPxY5UZGAYMP43v",
  "key11": "5HvzramChpz5f2of74vYuUWdr8fHGjkLsWCP2eZ6yZoizF9hT8wLrprLoWXL4PAwHNQp7jy2YnxK6ZpXVtdhAq3U",
  "key12": "5FyqYLYFiRMq67oL8nUM2paKDfBTDLbkHHehSoXZg6Rw8EW2YFHzT15HxFD7Q3kdnrApQ8XwK6zq2mD498xz6EqA",
  "key13": "2mA8VGUCFt8DMT4XFPzkpCBrqEfyuDrKXjs44Dp9Df61R22GTpZJDVAGwTiTtrGGMGvXmJqw8djVLzjVfgSGdmUr",
  "key14": "4hVwtggt7tJBVrWW6FCY9nRp8ryUvVTJuy2MxMjisjJvauoy5FWqjeh2tKTUxxkZNpgA6JQnTd9XcU77fLwYbfXN",
  "key15": "5FqB33z3rX8rUTprSqTBiCbfTsCELBkYxcHUMU3pL3m8jQRGMvKFyHNQhtsKmr8zu6kmFsZ4fzRVntqTVks6jmxx",
  "key16": "2SVznZoScccRREudJVRdUHzjsXuDoVczceUqPMfQpr5zApZmDYF6XjhwCR4QHV8DFZEr2Y1QyKhpGTrrSBnyzzpD",
  "key17": "34CFMH71t9D9wzaDfABSty7hvHp6DkyMV3uCYDfgmeXz6wSYg4to2JXf7ZfPci3uqNVsTt57QXq6yyRAqPNfuD1D",
  "key18": "qYzJ4gWapEaKTSydRdNgP8KRUyXxJsJjun43N6E6L6eynti6szrxudfnJcXcB2iu9fFH9StFziBYWFJwMfVkJrL",
  "key19": "4s7tgBz1GiRzq2pJYaqhD7BvTknZf2Eg2yRrtSLLKiax7fwK958XFuF23JJWHJ5t6Kd6DncAk3zXH11XTVC4oAuP",
  "key20": "SKCB3GdxRAAd1fuU4sghU3YmW2dNQ18SsCyfvEmTfqi6NyxopwrwiA4rVbjfpPK89H7dqKvi4SqCd4u453ciKjK",
  "key21": "3RGSJMzfCLLCgzbkkta53FArMdYF6uWrcMsoMhFfsYnvnbPH4qWvJ5CtksasZG5hN1WLJHvZwLmY4wvWS7E4SwsG",
  "key22": "66dnTsXU4ptECNsikAGqXSNrFafqnPxP4Yysn11SC8eNpKV99f7ZCGLCMzGKg7EuuZmaQKNp6A2DTDM7cLXVhecU",
  "key23": "4EkBXPAAYwh3VmzRFqVzfy1aXw83tZxNm9EsFC5ZfXYMcrZjTMPR1ZMmabVGnuGam6r4rBcNBfuf7DkVhpLRfKRS",
  "key24": "3LYuc4xq6amhGqiQa6xbf4NjjTNaiCPSSEzbaWCxgrZadoEAgpntETCYDPRjVd2QyEkH4o98SN9u2g3bvUkVpRQn",
  "key25": "2TfMybucWur3XN6MrjS39QCA5CKN1QS52PnkcEvBEQWUcgjV2SJacbjG2B3nfiaQStV97nGik2d6EE4TR92dUVuy",
  "key26": "2DphTBKnLG73BHdkmqxtkzVNSq5NDH7e244CUnL4eD9nJd8g35G7uqo7PEpyh9tKEqZrz9DLCo4jSD9n5x5dMcoM",
  "key27": "8Sbm73sfqU6T18igYt1GbM5vGCg6H8t4wrTwktAPMBjuHHAAcZPF71tR25aUTRBR8gCeDrJ5RUZfZujAPVUq66f",
  "key28": "227b7imkxjFKYHS8wfTTGFA8PMVbBfNw5S7cEPs6sU8GRStUM6iNkBobHaMkCFpBAS6JDwfxjdkENnSbrApt9jm5",
  "key29": "3HWR9zAH2e5EH2zCSSUnLdAuMgKT6EYHU8yJLFDCLT4Q9jQHkgVTWpzfpL3XNHm8xnGv4qCbsEFU3dJK2go3z1MM",
  "key30": "o6MmoW3rTzcjaJW5zirnkbZtYoiKkLx46wY37mbKjhzHG6x51mAvKKbqweTahA3krN49Ao9rrx5tH5m2Aw24U5a",
  "key31": "5XPo9FDJQenAGgVJ2Kw3KihoKXK8b5ouNUsStR1onb9pXkzDFLjLdjUbRCxLT4yjeqG8bSxhqW8B54ac9BTDXHwZ",
  "key32": "5w3vt7T1mNWr4achUsqoYcDQL1KeaMsPG62kD31PGopb2SCDMAVr816cPpqtpBcZaFJqFN8j4wMTZh7U1b7CyjDR",
  "key33": "5q1zJn53FzmgBFMkZkkwDUPzpfYqfvXf6faYV4Qvf29uwAYu37o1xv6aXHZXzkdwnBdMqKQDmQE4jLBbkpo5xhTA",
  "key34": "57VSpX8cvWkU6JmxSPN4Y56risgGFpPYacKANPTMcEwmBphys8FxZMiANAfxsP7YRn32u9czidbZBAqMg3NZX5Rc",
  "key35": "22UBeAzcALrMemjE6Hp3643DCrnBMW6RNwHBH1RSSXzxrwSNTSLrEHmQJJmdq1W3wd2XDs4MM5cf6RkvsQYhASf4",
  "key36": "VgcDqevbcAT4hFW7KW2B5RcVcdp3fhs4DEBm52h15ozgRwARyW5M7UhcZfPbmk3PzkRHAbL3PBMQPTsNuLTBsVB",
  "key37": "5HiAmPFk5P3SMipGNDdDhqh4USmieahV6GPbLRaq1qwwsUMfK6CBYY3E9wFgL5rG1uftVWHdNwi23BtsBRuNxCDf",
  "key38": "FJyZhfY2Ckke1adgqa96KT3dKySWK8m5fedztDx95BzAag6fvsJfZsdp6NnmSoxMukvDEzT6G8BXt9m4Rd1A3Qq",
  "key39": "4F74B6bjQ6VmF2dqPSVpxtU8tdNzSAwUcvBT77geLrbCiztabTShhJzTrwSDKzzmTPK1B9RoD4WTYmS2Wq6Cj7sy",
  "key40": "WzFgn9dvScvqtctCmexUe4gKZ5krdiWiFHwRcGbKJ4NsD6H6AGftXevJuop3sVm3LvCe4K49dSMxUWtRa8tWvkd",
  "key41": "3G9fCfXzaSFzzii2xjguWbyVpJYQLWZWbQ7BKruMLzrVzzvdTtEN4h1rNTm3RP52ekBPAN2eejDrsTCQj7eY1WPZ",
  "key42": "4nrxMLVZrw7gtjBeHN4uQaigdavLKkPg9DAqLFzmkfSVGKh9syvH5Bj6aaqNYeotMJw57SKzEvsquyUvo59Pun34",
  "key43": "5ae7P2FnmPSGmwPn16HNdHTeNRMmKQxuyXCcttQM87hdofkmxy1a1WqmxAGTrrFnvthhtiszxgpV6pRQD1jM6BF4",
  "key44": "3QVsTUSmrtCM4oGACpjhGkHBm3qYH5V8vRKrwChB1CEM5MLaB7xvvsAcr7tJpUnth5GvfxmrymcqHg1UoF68Rdu8",
  "key45": "y5939SmCTvHpwsGLCCFWgmyeYrV3Qb9dozjH3hBLtpFChK4hUCqmAoJ2F9xSpBng8y4ChzgR4kDT1uWY983Uq5g",
  "key46": "2yabG69TogRsMhG1wn2DcvS8QaXJYQSBDPfw6vn52koUDV7mcmY4itUfmYp9ZMu69ECNfDuywikgtktkrSeouxwe",
  "key47": "5ERXuNnF32qEGiXoccCUW3GrorKgrJHRaTbph1fuSD6qjPWgbrEWWVFFfKbjGbhaJ9LGz3aioVvcyWy8CJ82WVky",
  "key48": "3qfrFFvL8QvbJ8y5nffgrr4yMX4xCeLvVq9cvkSa33FTnBvUy9uQiL8qSCb1TfJkbBgqjvYSReMEyur1wdfevjNp"
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
