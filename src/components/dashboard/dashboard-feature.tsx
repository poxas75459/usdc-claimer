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
    "5oN4X3L6Lwh2Ca3eU9trWA2svYVm5yjfma1jbW9PPpZSvp1V5SNUahSQeygXjSDbTS16uCrxJ98VRqVjFhMqsKNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNGWvZRt4uVgQtJkHoS6LkLig5XVUDMEjZ1efZPRLkQzRk2qNEmGjR4kpN3GmxyTtMqpCeNnDQNizQtbWwk8eGr",
  "key1": "5qEv66WTrxwV3Ti1iZVwmRTU8XNngiR3aaSrLZoVZywLKMD8pzGLy1c3eSTUgoMnKXR2MCSNWfdZdSjtyt7oy5Ev",
  "key2": "2W4A6fKGWo3W5Jbbb8TvsuUQQrFs3xNEmzdRytoeaJ992Z4rVeYveDYZ2aD8kTjHX1yLDoCpVktNSVrxctpQD2y8",
  "key3": "2ahPLwZ6C7ZZfwmB6rVsL1zgwh7JzEcKx2hRsgu51Suiq7Fqiq9mge3fExWD53JdfGHH2vvUHmPzLrdRJrTh4SiR",
  "key4": "3QV11hHp5X8znaLZtobd7QMwmj4YhmF3ZUaUvdDZGJDj7FKBXnzhcARkeqcmaJwuM9BVRbYNvzp2DXXrrrd61QeP",
  "key5": "3Gn6mfQg8NmYTsEW87HoBYD7VumX5RvhiAKhE7FJWTnMvt2Kbf7gZ5HmKFs7dgVyDy5fP3PnsFAW3z18sxvhNUH6",
  "key6": "wM61PVXnmHeAt3BLd3sZ3cuC9pqtBZXKtwNQdosR7ZxTXhNQrTvfayLa56xSNtoBAN261oZLbGJbG5VeT1UZ7Hu",
  "key7": "3Rr3yGnWH6YBgwTEv6T1Y3oWoCRCCzoSXqDPk6AN1Dsa1PFLjTtajKgbBtLocf6AA6fXgKte2zTXxeFnibA8UbQW",
  "key8": "3TLvk2hLM4wb8eD665FNfAwF5nTrRJxXuT3frqd3mofZm7b36P8awFDJxeW3jy7tNUKkWjYRgtx6adY27VMv4z7P",
  "key9": "LBWF7SKv6WrJbWyTjgWgJtCr6wefrFTKNGgafqdXMxqNV1fZgkxyVcFun8hUqCRQbjgXVUpHZUVP2xbjdF3hsED",
  "key10": "2NbQX14SEKi1XCzfwRZkSCrGEt9eHrCGT59ELuVWqs9eao2jvfL2F5X1W3DU7G3anS9Xpyb1YAdeSnunqvo2sG6o",
  "key11": "4m9bbQRWqXnVLQsjPXnCsuZ6xKLChzGgNkKs1hCxdnJwFUop6G2QE4rR6sQv5SWa9aqfZYrQAYnzWf4L3jgbwYkk",
  "key12": "2TsN3Y2XJz7zHx1F8r7iMsveEunMANmN9aQ7Qm4cKxzR4HtJ21hfga17fXLk2T9DEdMcnR1HjNEuX8RmYwg3rXew",
  "key13": "5o8DL5KRhYHXqE3dYfE5SDEE5F7szydHrndaZ3SVxxMp18Zr3QMEej2UabjkMJijRsFS2bXnoqPSgNpx2tMD9WHE",
  "key14": "3VU1BTvcYNx5HKmXiFS9cbDKvfBuoSK7XsfMhB5PEH8pdePXu7RNMhoFLGzXsDubMeheP8Wj7vwmWr4pdSubsdEP",
  "key15": "4xbq1agR7MhCsPofyp9zqfXqporS1HFMbYCcVrMtze4GonaJssHR8QymfPLvjX1NqnuxgzXuLBymPFgu8UBVKNmq",
  "key16": "22gPNM8oHAxPRYt3jSc7Fy6qvWRLFk1xyAFjH8seFrHsFFyV5uKo8WdEKdGM89x8BityWpyYu2DFo8codgiv352N",
  "key17": "PCb8miNQMUfKYHWepKd4MjJubE4PGXtCAJBki8AeSzYT1MLiZBjZMPKM6vhUxEL2NuLMip5dpF8XGTQ3xg4YBpQ",
  "key18": "3D5D3nRHkLpeZcb4TiJfdLGphuBDmZrboD6Lwk5LiruDHXGh2FbzabjMJdAt4PiAbBy2CL4LoFKANLTVqTwcHxHG",
  "key19": "3jVKHZBDCHhh8m7rcB8nSQ4euL5cxxDKktX1Wu5VFbfkXt8g13uNS8R59q5397cmUoQifSBcujWfdFJecgits3B2",
  "key20": "61tTGj6Bw1madmiaU6bJ7SpVGAgceAxynZi6xeaGgrEfSFFF2TyHoHohfgKAFfRM1njZNM8XQ6zjjht8MvdpMbrG",
  "key21": "3cu3zWZfTUhrRqVZXpVoTmTomdjLDgY4uKwAYT1J1yVbVMTPv3hpxB3bczcj9EDtQUPk6tJKE3ZUBnmsw3QAGYPS",
  "key22": "4D7B7aJdsHxZJAWLv7SKSULQCGdy8nkqRDTVEaim4u47YPS9FZSDPXSq5wzymsYfy55yT54jxinkj3bDG2HC74fa",
  "key23": "82osECFmCoHSQCcHvF8MFHPof4V8KVsJFsdwfAeBZPC6cjHqBKXiMkWrL9cFJaNsvuEGUHNHBAcmaJ8sTrXFncd",
  "key24": "jtphvU5NkWtsQDy5cmytKCsd9T4ccBt9G5ntESXQ5yykrH2S2VgMrpr4jmamUonq8m2X6MEFJ9iL3zUzoAiQ3ks",
  "key25": "uVmZNCthaMpWY8rZoiVs7pU7oAvkTCat8RBMEzyemQgP6MhiyePAnju31TeToeQSHCRcE3oGqtgjKHNtmgRtbGE",
  "key26": "2SKDKZVhyq1FAu9E6cvTRooahXXuRmyfW3wKejETQpaw4QhgbKWKtN1PKUNy7wDvBgSHrx7BYe7Shs1UdbDXKYHH",
  "key27": "2T7oYGjD6bckhypxCJALkafM1Tmckp6LKaAtPa9zZizNku6WFiufc2s7aaHNF3Ud19UfnCNiwm6ZGTub9cfnwU7d",
  "key28": "3g6vx17pSYH6qoPMS9Khyh8AMQf3hozxHnLch5nWTAk5mi5QFtkE4M21WV1NkEirwRptfZLgWVFavKYCfY2PvdPP",
  "key29": "zzKXi8HFQA1H9TpFqTvthi6mwE1nY6A3eJU7DfD36LNZdHY2uRSrgAgAxfjZ33vqhjRJkDQPgGhqP2morbHMeXv",
  "key30": "5SAQ3UvJ8zpCS2xWtRCiMJD2De1Ag5swJnbUCq8xt8HSYNjShiGY7xmLzQpzUKqiHuM6KCaubaQAPgLSnn52vuxg",
  "key31": "sDxg1BcPsaRhEcFPtUPnNuYKDGdXZJh6YufxNNRgSbV9TFo1jrpAjZ5MYnrJDhE9xMyirdxjayWGQKavWUtSuds",
  "key32": "5BmuQU3m5VxR6XatsR5DmY7vhTWRBrmvNBvtzkT8yk2JBrhvqM4Nm5ZAv1fHu9zxPnmvKH2c2tswZAz6fFRXpV1T",
  "key33": "57toYpQFTKifCcraZrwrEtRYcW6Em7QJSncCfJ2Tj4w2Z4qhPfDgKAbUK6Jzh3yjP3oEdB4LJRZiqXWcW652BF1S",
  "key34": "4QTXgdhSdHFJMfQKcR41fYXbzBfqEWLLET6pcra3vYePWcCkYknHDD9x1aBdUiJoNHCV5vfBH8dJ9NR91X1jAubQ",
  "key35": "3g4ysaeUBSVP3xy9C7SEarz7FgpNtuQLJdpgZR32LXeynjUxDRoPbYwapJF1e8sHgExnXVgqCQHufGhNSruFJ5FE",
  "key36": "4vWX4xNcRBAmiXZzgdhfB4SxBr2BA7SEcsyxLvVm9gLymKNH8nCVdcovjiLvLwGnerbh2eNbRSHLifudm5r8doVJ",
  "key37": "5n1H7wqYq3PAnvRKKv7wsSfEfrJBXZnKub8Nymem9WdgAzVr3kYmvHj6MLv4g9mRbkErVuYziMFfDMZnh1her4Uo",
  "key38": "gLjG9HKF1XzGRLLupxecSbUyYdDKE1LhqRirPa6xKyMe2my2EnX1pJUVaM8SRh7x835GT7ccSKiAtDW788pgQXL",
  "key39": "3pESvtpWSTioVwzyufhgKJELXhWFgnngdxJbFQhxp3ujpkruknzxEyzcmWFC9xVVKmhpv5bLMVHqqxicUnAo3Tp4",
  "key40": "43fbm3nSi3fK1YL9i8ByjAW12XmSzozeqDB5z6N5tAne69SMNjB5ooaWnUAKtpqjnXAgLTg1yaQRALHp2kBVSE7W",
  "key41": "2JMLzb4SeRu8mG2wuCG3zaYS2UpwqvbtBaDiB2NruuHitfbrskUv5bcMyoJQaV56DS92evXjLugUP3ysiqcr79pW",
  "key42": "2QHT5KdZtb4whZY9jXYoFUegFvNNNF5kP6xxyhUdSBZvuXyEELjBn5Y83hwo4n32KC4EWLDyMuMqU1P4Rzqgt5h3"
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
