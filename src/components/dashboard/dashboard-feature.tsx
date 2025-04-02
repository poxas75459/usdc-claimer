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
    "4vT4hPUQeiCU4BWH9x8Km7Rp41aQevUbZghZVWfeshPGmKSdwTLQguqW9spfWi3pzbiZttRMXtAq2Vqb9nhotXYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JSQWbdyy6NgFvTJPBocU1WYkj7vfrZD8ZZKSrT8Br1WqH1t2786pAnWHBQjEcdkBkBxygyg4btyaTpiyjNx7b4t",
  "key1": "53oRYnkioWjQsT2PL4HoeSwYNrRENTjfGdrWHWbD2XS1H3SdKfEeN41AwRP2fxnzqBmRCi3R86jjczJLWsQrmVn2",
  "key2": "51Zh6ZbJQsvMn7HuZ9NkyD43qwbK6n3twXnvFnoGSphuv9Apzfjnh2djJebSTYU8qWgodcfx7dCXpa9ESBVsdWH9",
  "key3": "4QoUbvVF5NW3gMKapZfGGmSgo4r7TtkK8D7nRbegw5yAuBKQHD3zmh5Vxqvv9ce81KWufrKSnHu62vbrdXoSvvLD",
  "key4": "2H4y7n4sRUMLNb1RGg1vGKLR9XPSxszQEwwo2v8uRW26cpy5cpGy1CvZf7nmKwUHyk6j7uWXMbBQxUo6G2F45kkU",
  "key5": "5Th9v6ajc4tJ4pify7oykJBzQiAYoN9DodxA8KEBPcyqwg4fL2kFgbRdYXjMDnnkueLWcve1n6cM8D3AKANDmv7C",
  "key6": "jcGnFKdkFqy3ubAnwseatvb3yxDs9o6nBfWxYT34tgCdwkeiW7qcgq7KU4mDy1Ye6cUAtvEJyASszxbYs7xt4Wu",
  "key7": "53ewzjPZDcEevhVFkpRaEV5VcHnWDeLrC8FyTHkk7chtawipwusfyjRYsorSAdoTTbdffRw2VkRjARkcg2TazsRG",
  "key8": "RoRNijmxAcZSvZ8Wys6rrMpXWWrmGafik4mHskjYZ8H9bhFZJs4Qq57RxqVN56cxXymWALHmaUVKKtcbbXAqWBc",
  "key9": "41Lxpm94jmxk84jXPxMNiCZNawvRXeNG7yWxuq1mW9kSXts5yyaM511TYh2jFJozQJo7HxCJfXds826tpdiL5d2U",
  "key10": "6pTqzMzhkgLMFBuSGAi7K8ern81weRJ9DsenoJUqkLh7rFqsjtktS7myTCTbqDkFtKJg73rP1WSoGXqoix9nDZ3",
  "key11": "5BjQBhQ4A4tHRGDj4bv4B1Cm83WvjTCWMyUifdR7MmtcMTPyFBjvX7w9GsZnRqZHxQuZLxAyN5UYFxmaBgKRFoQQ",
  "key12": "6318pvAw7JXf33wgn3U4hKeoRW2Px7Xosxnny2LktDX7kJ6rcy4WSLg7oWHyEu38YBWLo9FuToVa4WX2E2TkUsxy",
  "key13": "wdWadTJfPESVUHHvKqaRWTPqxZoLX1cPrJ1zAx9u4TAZhGiv33LbDMZLzTE3z6zWHA8XniN9RnqRkZEy4WzobMo",
  "key14": "FC9St8B3kYD5m4qdupUVteorfZxvE1dP1xPrb6p27mm7Rth1ZZNzSf3o33rgfi93TDLYJRJM44WeGVKCWAf9wNR",
  "key15": "3PV1zU2UUSzWQLN75u4BE54fQLoEqw8MssRpjF1wqD5LHqaC9QcHNPJPFCsMkTpaV6rzsYvqNCC6MqCkKRcLo5cG",
  "key16": "wcPQ6Fceh6tu22RrBnAoPs2XRXiUS5pRQUpvpogR859YVJn5mraqa2AkRTmGNFcqiAtsMh99Eg4sXUkMvzqgaDN",
  "key17": "5kdbAvRmvmcvNk1ZhQRAMED94Fdycqa1XfqDpFfQr8GxiJ3Px6fyYjBEM57SHuMNqQChNSub3XBKfJFjcsiTbgWD",
  "key18": "65EBNkjmPYnzyTP4CrdBWU1QBrrm5aBz4mHnnuaEvwXJasMktfviuSEs2BZjoBMFu3vdMAuMsAG4bwLXZSJa1RdN",
  "key19": "3yJDvDyyWdfLPLWaB2f6Jh1Uiyngvdwh79ZxNdvfrFrti3x3nZTirr3BjViiiZcDFb3iUVCb4v48UKcmbmQoCS7r",
  "key20": "3H71Ezwq8StLQFopitD73Y2oVFLWGnP5V6jq2vNJZ1emtmnwgWEGajFD8FFYvLZQ3gXxZbmPhhbMMNJkBnRGFfXU",
  "key21": "3GoobNpSGvQWDPNtUszx8SYM5isLRrnqWnE7WG4noXAEv4WW581Wgqpg9GUubce6UpuTS1rw5eykp5tJwq1BU8RV",
  "key22": "2BuM26G6H2eEw1tJSyMr6ZFVcWmCnnPPBP85Xna4Lzpu4ZFuuiz6RBH55n6MuxzvHdARBRKuUNtWKmCaJH8ucZbv",
  "key23": "2ajPRMHEhy2kT4uJjWmpTTW7AGe9tEtrSaKsWRXa5kvu9azWK5tUWjdBF2tGkeNvHrSV4H7pYWYCXS6wjKsfBy7e",
  "key24": "4enzcdMmh3X8Ppam8N3iFVJcNW8afzv49ThuGnGEDySr2ybuFrMpxxc3RhkrUBEZLwiTfvWnVNAKC4piGFXKg3pi",
  "key25": "5X3uxWovSMWLZaWwzFmL9Ze2N1P8gyTFcbgAPPxPZJNfSaFqNGse7mqgAZz23dVNH6KJKnNH23sXzdEygqCa5kGV",
  "key26": "3evuQauaAFCZCQcNwxccZJo3LxtqMshXdsqQ9cWXf5SNZSSkBU6gmUp23nQ1TaisArjgCFarwZMn6zAdWdnK1f4n",
  "key27": "34LnxRUsdwk3UybxsMZkJLYvMXLNdGAupqt9stPeb8jqCzHjqpLUmkkMya6ZFMZNq5ZN2m9prBtST7dv967Wk4oi",
  "key28": "5CURRF7rYxEYzjCc8LUknc3yZFTnB2GySjSqyLqFTUVTn243ZaqLkBUy29256n5fHqiZiME2ADUVnhbe6c2YrwFu",
  "key29": "rd1EB2BWE48KevYvofW3r3mknxj9PvxKPdSo3X47Sk5MVpLqJapSA9Ky2GTeZahnGqb5Bw5P6UCGZNuoH2mvkUc",
  "key30": "2Ew9S7x5Ku5KRq2G73fhG4VsiekguefNexk3gDjFhcjKhBCRm6CGgei1DVPkqBb2HAfxvbnmDmrFpMA3BUBZmpgN",
  "key31": "3f6DjMP57DhEdTA1MoMcBiFpi7PkES55ipcd1KiGHAG8ixauKFLR6SRiJPzsUhR4vzDnVBnhHKtyQYvz7DUsL3vi",
  "key32": "voS6vU8SXBgb1sEVYk4J3Asceeq2KkbE97tGTj2NzLQWzqcWNvdojEntkYx6KjFh8zXXXemLW1JZALp7Bx9ZvMg",
  "key33": "dZQ3cWoBcE9TmH7FTmpzsFmTzYcoaSbysbfWCacPAqyKW55XeKErFGFYp3CD4J9RQdWA6iRFP9kZeswjfRtEK5Q",
  "key34": "FiGWFrrDuL9zTcg5L2ZfFJM3DTBZEYkZr4BGgA6sX3d2geihZ28E222R1ztmwf99L2x7ctbHXswT9UYm2UB6snS",
  "key35": "3CDCex7WoKQWv8bByhzpk7LPFy5FyDkUJBv4Qqi1JTrbdbB1hvh3KebVAkakYcEETx9ueceHYCvQ86JqJoFPuc2K",
  "key36": "3NJemvoaaXg8mvp5JMEfovyvaiUbXZHmgN4punutEC9bQchubk6pfWrYbYJZTcPJ5yp4K7ZsjrZ35Y1bzkRdPaDK",
  "key37": "vbZdsLiYHVCKxHF1sVhURBB57bs17uQ8r62jvdm7CBrC5fRtt69mb6aP6xA6Gab3yRDp3fcbsoHrbBZBMsYRgLm",
  "key38": "4CxS36o4ja39EctSQsuDQ3PSdCn44fweug86PnfRsYLLRR4JnNFu44niifL2HweSe7qB644yBnig3Q8EC7RWnqsT",
  "key39": "3xhQU5ahEtXe1makHTaHgyRbrqfizk7ZrYE9E21CkYXdYZ3Pgp1m5nK7TwNiE9Z7QGkjoiS2Bbv97U5qCQip2B4",
  "key40": "wETmfa22PSp298s6PfHducCxra6jh5NJiSpb1tT7LXUXRy5iaVyBZsvUGSTEPJ33j6pKD4Zn66jbJqvPt7bb3JV",
  "key41": "2bzkqEYkzaxL5s9W2VAkBwoXAobhcwTptNHWndFaNoPEfrx3oFhxjEbxUANSzxJri8DkjfYomuToeXZKm8WPw5QF",
  "key42": "39dHrRnfy9Xd8VDfGGcEGNXXfnusauHsXgi9cYVRF87kwQhGvVRHiBYXPTsxvKNveuwK7fnBiXdxhkPFRLmYN1VD",
  "key43": "2PJNJMwjoEAedT49LUnzvejpKQv3BZBYEDMmd7HHYvadw7ZHN4EFrbQ1omJ8Qv4xgWJHvZhmHoUFyGe5zRF76h3f",
  "key44": "59c3afSWe2zBMnoecNVR9LPsa5JFYTazg6FmKenLzZNWXXP4Sg9J2ZpBp9mpidG4u2mkHq61S3vtfYdjXr5mLsoi"
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
