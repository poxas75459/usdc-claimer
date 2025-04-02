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
    "3MEsNWjwQRo9nK3267vb36ZifiR72HZxYz1sJLpQWRmN6HRk7hDPnAMJXjFuRDhjnNCU5LjSufW2ZQah1j13N9Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouxWvKjqiXEphjTK2xa6R2mi4KnEDg9KaFSebrD9awzVFPdpFXpfHHRpmaDWc8txAJ74Q9HBeNswubyP3Esh4dt",
  "key1": "48ewTxpQmmTZGKtJxE7pKrQbAbCwjxMoVyoZpi85k53QnwyfBSKWcTZ5rhpeBeJKCiczmNJirbWFF5nTKTWvRVYh",
  "key2": "5FufPpBAL85gFPMi4W1GinfwMosonaz7SEJe5Dua6h2xyP4SdtJvQSKfXxEirLACWAsHGqUQDLt4A7V6rse2vngo",
  "key3": "5voTBP9urfgdkKivH4vRFPzk56HEn4NT5BdtEkWEQfWAJChL2qFZWToz5EmLKpgyTSC4TYUqiNuqNFtsi6FbXWdo",
  "key4": "67bacVwsnZHbv7Nj45FabqKHjMrx7aKbQiQVoAbjGiZbJvYmWo5YqMr6Rqe6y7fVZ84UeHyhCcX4Gj5T46ohmYtY",
  "key5": "5Rz5gzadYeEzdtmGpH7BKw58SNDvMQsTUSGh9JhvpyLzYxpQvCTPgNZSBHRHPe4RhJVhTuvMrPQuZVc8LeEWLKZu",
  "key6": "JRKTsNb2HcJBJBn9jexBbqx4KRA7ikPiFyZkJtXkZ7vLqaPT944PfbEa5bsCDJFuL8m2PP8zaqGVJ75ixTxZ4Ko",
  "key7": "2YYbUYTXgYawAQ9QzwEMmJgWsV2Qf3H9NRL8Lprd9NLBF8f45KvRMahBG32SZYcwciRx8xAyEyKTob6KvywxUuXz",
  "key8": "5e7BvMbFJ5h2AqSTtoJMSsHRTpjR2u28UyvME86F5G8M4gZ9VF7xunL77mUDpcokXFVa5gpPrykLgWKeCAppnwTf",
  "key9": "3kX2MaLcXmigany1ArGr1wZ66pGrbDfBA8KqZizpBDeqtjcUHnGY6ersDo8RAUun2S1s8F3oAN7s8FZ2MBWhbZ4",
  "key10": "2toKcvtgVai1pT66o4rznVu2aVEX9zDtLLKaAoHALMDbhqfsabKatoxjqS6uLgBB7YMnAbPqLT4Tw8XeeSByrePN",
  "key11": "3fZ2woQv3qPbUFe1v6XtZBaWaBAD3oQQzHs2DR82Qq5RmXgVfx86p8zPMmPbG5cX43HZmSW2CFtKtPcasQybeQoe",
  "key12": "3PxjowB9voHjnQqwdAbxyUHkph9LGY9fjbbgDwCmrRLnSTudcKm3bGb3aRjmxzwpjQFAerD1db9PWTKMicm5oEcu",
  "key13": "4MWppWGd6ASEsKt6gp5uRCG8R2LXRZ7yQxsXSwJBe1pc13v5EW9QxBPUhRgp3G5vVHmErgnzJr67qtjBBgE9PLHD",
  "key14": "MNuLSgK1t2Cj435thhzA9wdfFzZ4Gj24CS6i1Nyc6E1c2RPZnK2UQPWqRJNdyYBpbKwjJf4tarvnu6YePBRPitH",
  "key15": "4ZTaE9VLM95Z1yZ1rSdHMCZYWqbtZbF2hPTLayfjACWBjQUAtJhTpQeKuTpsKg36pfK7FLQdJgsLYsRNPyMBqzNj",
  "key16": "619EpQnJvDr8PRHUugHNJdHzSdAeGpbhHE6oehrWMtEwoWLCPe3cuWHQDZpCenVaWujhGYhynwCqsRKq9RXvULsJ",
  "key17": "3pGTSV2e2PfvuPeXj8MfbGs6yJvyAKt4aQoR6HpXF2vWTFPyqLNRYg64c3MEikWMTnXSAvgESfXGP2KSVXAXaskJ",
  "key18": "5qYL7eXaZ8MniiQ5w33jwwgBCdDsmTzibS1YZD2YGxMAHVT2n9ke4YXpNWjxHXsWDBDD7fAS3QN5Y6cHmVKUK26u",
  "key19": "4oE5NVZjymK7vQnDssQXNxR72P9J8WyhnMc34v9qHeDtq7dGHeq3d9CqUAY1Hdvq6gU82vHiPtsj3N9kVaNryHqE",
  "key20": "2vnPG6fkV9GYJMxa76iAzJAKaPSEU4FgXFQZnGgQji544tquH2ovETRKDaUxRSgqMzHzsN62qUM2b9Uxv4L3xmUz",
  "key21": "38CX6dW6kHEFRSVUq7DEyEpjyxmD1CSTKmbh8XZ1jtvzuUT6iigmVGwo9QNLYv8RA2hVSug46drSf123u2VCaHh4",
  "key22": "vBCGi2B3v65HWPstLxCt7joNHFACSkMwC1ykA4ptpS9Fre3xBeLjGxyzrYaExZDNogUkyfTUzVMXpZiBout11Tz",
  "key23": "2sMGAtz3JxkyqtsaXebPwpbpqM91NHweZrtPLTqvkcUq2Gd4FdFWNGNNdaEuikdcVoj5os7Af9tm949LG9VqVxPS",
  "key24": "5VSNrM4TYB9AYFfde4dT8Ys3D6zB1idqYZQ5Ue4G1s64n1vJ5kJR3LWDMLaGGkq6BZmYXXsxmyHGagVDr4qqQ5SW",
  "key25": "xFnpYLEBxuABN1YJcFntcsQZAeXZSQj7WoeK6SWaJKverdAvzeygE9FjhoyBVADwKmMpQc1czvnL5Vs3kVshz5Z",
  "key26": "54xcCUcyq8SG4TKTPiVuxe8kYFJgmTqBZKDFKRQNTtuvCmNeAw1inyPY66upDqnaJ5rEV6Z9ZGJ6TB3pwHLi3f98",
  "key27": "3MdAQjqamB18iJtcmhX8EZPzLVjgdF2AhRyBeip8RENsHuSVmYqdNgvdrf6YoJ1oVnjpqErkifeRxLE1s5bDSB5Z",
  "key28": "4TYz1vfQQDMtsum8JSj4WvBMLKYGDZD6eZNGRGZihZodAXgeW3eHCX9X92giBsipTv3KmoL7ADQ2E8vc8eTe9a7T",
  "key29": "2ZuL1xsWKTjsiPzxi8wjUCRNpdCqjXMmPhLBzs9ggheNivmyPFgczrzrw3LmTJBo798uJ3kEySoZNhKF6cfyVmEu",
  "key30": "5FbPQMCnRPqSrWB67Sfg29c4bnf2AjWNBFaHvdZQA9uRe8yUE8ENhA74VCJhzowwoeC5hAt1knDpmie3fnoC9GMa",
  "key31": "5vdEUXPZgQKj4t3RoTv399diXXTZkaH7yRz6J3yRTxPxVDZBjyS5eguKinmmZBjCjsJ3LzGy97HwLmRMRBDRr8SA",
  "key32": "5T9ZBsyki2BSv3xN4KY7Yqh9C3qL2SYEHajd6zxgerbZ2Qatb6dFREyFeXZo2yuB7k4uE42mS89p8KLEVYpkrYxb",
  "key33": "tNDgAEJQEvQimEAJEZTK3yq3BJjAM2vBVyFmKFcQ7dCc1pq76FcHkAMAo3U9ypr5cxkVP62UMAS8jqMfc2VGa9d",
  "key34": "3HixfGSbhHtz2x19QMPoNzk1UWoDZQnZivN5v9UU1RL3NVNBQrzTXEo1QBWNvrBVEJ9BzQ5J437fbgCjrs1sMxnx",
  "key35": "5Z3QszK2pkQJMQXrWQmyJaTC8KtRScw1LXd16h5jYyVtFyd6N9y8XLaSpfB4apFGVQRGWUk27N2nSvnRticaM6nP",
  "key36": "4rMpYdBCqmvnW85eVVRrSqM4tCfxJ4LxWtcr9GNjzboEcF1Kt3XdwJVdNSHouSKhhyBF4HTR71bXmYX3gZWEn61S",
  "key37": "4V1TVUDf1t6bHhKDgYWim1ek7LTk7s9dW9bCrtiHP3FADvRbo7CBJdAai5J51VrcN59xDZ9DVvUBRqBTp5Cn8kiR",
  "key38": "3aSuHcbDHhJmrfRTMwj3azbiwBeKgno9aTdSMnQLgH6Hmv6v9oxSHHny7qNYKCvsmbthHJBfTmCgcimX66QFP1tG",
  "key39": "4tt9cJUCMcCTaaLS81Z9cdK6j8DRXG5TAG1zhiaGdxv6rk3JWeEMSrHkeAHME68AKu2VB2LBTpHGUNyzpBu4xmu2",
  "key40": "4QJ24RvsfTVEoA9XVaQvwPUeprfsGh18tbyULCstBAJNm8tP1u4UjqpsM5EgVNB23vwZ8wxojC4qvUPEcCm319Sa",
  "key41": "2Jc7AepKRbf6rYULTz8fJkxGNqxrSrcZWLEF3QjzQpyJCA3Q3aos2ZZzYh4zveMMzC1qUT7epuYMAUku9FaZqJw8",
  "key42": "5eHAqmaSL2WdFZXBo4HssBakbekGbGh4Hge5DcnYsYRugyj8Bj6b1ZgsJip5oiz9zQkmrh4BCnbLaGxySiodJRZq",
  "key43": "2CzLjE1LuGFxirbWTdsNVRyyrAF1fLoptb4eZPSsUedNwFBkLHA3AR6y6Qg3F2YRyV1wzBhe83vsSe2YvGh6S2in",
  "key44": "4tqZp98mwpB4y4Xx1NmLMA2Q3qKMEjL9fKQYUWy1sytsznpkSdMdGhRDF3nRW7Vz9s6PASUugvidb1s1wfQ4z6PB",
  "key45": "3CokenJyHUyzQbvtHJct9WjMe16cRE5vBGuyrfn1qaViWzaeUyGgpobsyootYM9Qi73h3UMJ9gMBG9Pb6P4ff78w",
  "key46": "5HJiup1xKgiKm3r1UtkYpUFNMQZs9G3zvPgSdafXa8GDBhJAvUo2d3i3yhMioDC7Z6K23Aq9eRvT1fF1AJN8bAXU",
  "key47": "2uz1GjPqu2RbFwFJ7sHJLiQWkEH8zUDdhGKqoLsQHNgTbTcXwLz9398AE42txLVqi2RPMh3a8Yi45oVUQKQ8Z5zs"
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
