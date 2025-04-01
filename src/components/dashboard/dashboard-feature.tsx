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
    "2kqRKAKsZsm7ztnR1DuCoz1xj8kci47oAsP58AdZvjMjPtnr5XBZFRhvpV5FbsFdJtQyZdiVct2UoAqLweAkRTbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FT8j3gtmQwGNXqZ5AoL3VKF61DK56s9qrcvGJHT7SzRK1V9Qd1dzsM1VfJjfcevLd3fv1apgf81HTaou6ATV3KH",
  "key1": "4x6tgyqggFNwBJigCExNu2qLnwC2HGLm7jUrYg83CYhwkc8dVM2kRNgNLFu1xRtGiADqTZtUe3y53x8hCLCBXYQH",
  "key2": "3bhuzorS7vNfuUZqWxusEdgdGwt3NcTfLHwhqdX1GS197Fw5UuCzfBTjf5YHJcsPUs8DxVEnKC5y6PB9j2i1BTiX",
  "key3": "31HgEZBqWK1amxLDXMiLbTasg1UWbUQLuPJHvq3zgNrkNoxhvyLLUe7tLBGtsDSdrnWVRbbg6E7MNjVh1P5mcnjo",
  "key4": "29iT42UGUNc9s7AjmJrTwAZ9iuyfPZzi4w5dQBDyZZW1hQbdR7sJRnrgJtdjUQw1tzPwTZKBBPi5JKYR8YeTVN6J",
  "key5": "2mCqRUm8sDRSQcQezTtaaQFd7mpisuu7KGacpSD81Q9Br5E5QnYDYB4wpaH9Bckhi1UGKWXMjeZfj5vQeDWYsiqP",
  "key6": "4kGVwv3J5aXxMgPtyBFbWsi7HHbzrRWbkXnNxFi1QAXSM2CQ5td9DH4KgLqSpCfUo1jobpbvDWjBq46cmMdTEvkf",
  "key7": "2na667SLNPJfpNRxZtUHEmZ8QBcZP4Sidp1RGQpB6qqHgHeHWkpw5r5RcCxNVUnyyAcrEnC6BwtvbkVyf2LHuLHe",
  "key8": "3fnTCEhq3n1dHMdrvmYbuksfeZyaWoEwvB5PjoiBZiphrT1xguAXQ8hKsZDYEJ44SZ9rMKop7ckox1thDfjgpFHw",
  "key9": "62dRzzhHWLLiFyKrTeHxZXLJTMb9c92dT3tk6bQL4zxoAd2Bod76HpPHxhsnqsYV9mrcVWVCSQweNUsAVy7Ngd9z",
  "key10": "2xZo2Wsh1FXnh9yxrNQzFAiRabexGCgTkXzM1Gr25FTPzjrY58DjtRkMiXLsQjWa8xV2qzQmT7GoedurkhC7dUNy",
  "key11": "vu8haeDQBfZWUVDH7cBD2F5fgKkpsSochFJhp9J5zmwsRux75hztUqEBtqafQDzmDVadEPq2zrX7SnTCfUCdbQx",
  "key12": "3Ety3Cg9ShcH1zHBSWvidFFoa4xo59VpcLX8j12BchPhRHoMkmxe3WCo63ZVPoK6tEvcee1bABefCdtJbYeoQUHQ",
  "key13": "2xsQWpNYrcSJo6WKukpd6iK4UW712bRHpG5wEBxaRttcyK7pHpQ8n82tXdSNc5U1tETZ7MrmNZGgGZSc6Yf5VpGm",
  "key14": "4Sj2rRREpquW1CL88euEnyg4VUJvwUMeDJHT5SdZ1vaYKke6gJ8iYH3B8TsspXWj2JbDQCBQfEJQg4DbYtW39nfM",
  "key15": "4qkw4xRg7dcEq76LaDHvdcL6Yjy1xiAU5bzVNNGDzPziu33C3w6Pfx1yzrq2kRPfCaoPwHacxhyFK9R9nKpzXX1B",
  "key16": "66UjbVMxNQuwvYd33yG4Kzzjc6DoiMiM6ezRQZRDrMD8psRBWHi13y6VABTYSh9PjPk6kLoAjA55hxN2UqLQzGHu",
  "key17": "5DmaV5pHKSUzZuNT9Lg2qz3YEerW6fykYWae7Fy22c8PA3mnxXbAeUix2kJJTwEqGwyfCQEGXrLdGrEy1nUtTD41",
  "key18": "3SDb4hLeeiqFqqXsnFBUe3XuGo1wNDz9kPDS1SrstH8WBsBC6xDPhnhNH2v3HpSKgK7TsXkZh9i4uPub2isieLyf",
  "key19": "2JziBup4byYTu1AgKAGWUUNU9VToH3LSRd6NGQiBrDRoiydXVbUhjfRiDjhSSMy9XodkGrwo4qFiyFaMZPDNhqSn",
  "key20": "JnE2j454S7K7JeFScB5ujkyAN74DUPkJK2pEBy6NSgVvqjgzzURyydBP2w2U5pFeNzXBZYiZbL9xm21bcFZRDnx",
  "key21": "5TgGQmHereijyoL3Q1vacW9qsignjh5q7B9gNDoKR2xVdfgsVz2BBQDCx2k6tf2DJTA7YJ7D3iqSvhxZVkpUJrTS",
  "key22": "4E3Z9CczKkXVSJRt3rs2MJ7uPwniKSGYBr92M76gVyNe6yRaMkVwcGRPFSqwkCgXJfNS3jyNW75xYUgmCzhT2t1F",
  "key23": "3LK84qafAw1fN2k2uhxNw5mygABWieypPM9FMYvrCv6VqxVMPjV9mbwArK9TiNb3Vp6sjzqjBDqqREgjyRhQ5Jzt",
  "key24": "5ugeQVpAhvxY4Cst5Aj1TKsUszyZsK14NiqZy1coF8uEoz4R3g2j373SEbYyCLYQ2s2THCbkGHLcnop8oAGTHNPM",
  "key25": "47Hr6VLVvtQbksa3ZtFdqXArRtk1vuie1y6dCfxUSsGEQCWBW1EGmuaF8mNNBPP7zciU9doG8xK32YBrfiEUbW7D",
  "key26": "4Yph7ETHBjmxfn956vEWUWg3jabK1PWkQrBjE8wCkgDWrv9UYBLixkAxCqsGt6ZhsAqrZdz4L81eCAs56HndC1V8",
  "key27": "63EMP7B2LnWCc9W9Uj4KhHZs6dRVD2Ss2SnUqGwHfgsYobQ46KyqDr1aDr5LrvSxYNR1zuifLPpXKv7LCd97kKnr",
  "key28": "5dGTqdzTitSZnwoNpuvijQL3xiHB1Bcg8dJQTjb2vqGC7QKoWSXUEsAfAMAwLAGmN3VVQH8GfeY5v3YpD9PXJLRh",
  "key29": "4WcpigSEVXABPTVu4NE9iHUjybxBUFuk7NsBHMuo9pfwk6GjUbXztnJywwbK4XzK4zX2bY2dFrDtTQWVW4EwsVud",
  "key30": "575YdukHGo2qu2Q59Rm4wvw1zrVMjy7Q8iPvLuuDPKifTCzzL89tY5dkdPAmhiA27ykLPeaTznPxVzkQxVChGDzt",
  "key31": "65fVySMpoK5fTUxwzDZsG9zfq5K61M37SPzAznFixoKbKnLEhpkMPQLTPxS2uD2gkai7g1JYeTt1d9J7ym385XrA",
  "key32": "4pQbZrcqdfm542SantB1pyrW1peY7QWas3kc2TaTZW8tt4gjUo9vDr29oLrZECEkeAfvXscRLXu7QNJUEe97P4qp",
  "key33": "4hZ2aZ5635t683gLGPfmBsY98Butqchkhz3E4TjX9WbyAetGnLNg2FTec3jYtksUEbF4gWXdZnph1UHmV2GSovVc",
  "key34": "5hFiGhfa9TN4RpGgyc43gokGZxeEz17vtJp7bBbDKvFNGJraYW8Yn1xhoJceejeagesegDFc8jUwu2Amjz6efJYC",
  "key35": "5jTWD7UrKnbL89BvG1u4TUchvp3C7MAHRmPc2z3EPfARYwFe99rf8GokSmLM8EBg3MsDUND43SWYL2XoQTFNdvHg",
  "key36": "4zZBJM5BUuzqBgpssvvF5XX6Wu9s7bZd8NSzi7pxAscZMQSnZAWhef59mSnfNtDmDXWz9vdpbLqdWVDkfKH8Wtzk",
  "key37": "2B8ut1LJhJg5adnv1PW5eaYDHpKLxJpNMqcnbUUZ8NXC2wKTE11As1kH2MgnxRQ7MUK6xWEKGtiSTpPKGmeSM93B",
  "key38": "3izEa8fyHEPYzYKgZQYgZ43fLwezyAZticMhjhzxSVHkjKrnwYs73oKs4UWTVeG2N2H8pX21cBfKYcbEz3fiuHdN",
  "key39": "4SWWorbLXPAaXbCeb8JowRxT7sqxAUhzBV7y4NXio4UDzwkLKe6yzNarJvobWFruyAFDE3zC6tvSqkz29FGebqYQ",
  "key40": "RKvWK1V2qS5mfdgajWiXKrrmjUz5tAju8LwEi6e93JcrrRhQm23CrTg6reFAp4BMREzzAmmvh8LNy4YXnGn3QHG",
  "key41": "2jaJDPwWaryKsMaFUyCwJR89E5msZAs5UtMsYZAk811YjiqakcwXKYbUSeLiQ3N5UrzstD1ukR6vPtNTu8WabJ9V",
  "key42": "Vs77zZQNFPmtKiqenKEJgvmnnx3YFVTai2BZ2jxvwcZrZacqDwgvgGcEn6GAuiGn2eMcSufLDBKMp52Jgw6PLih",
  "key43": "65DEaDgwtEAJV78p8DEyeFZEu8qEixyc7yBtts4QA938k2GgVuxw9FVXMEWenoH2aiBmvoubdAHDPkJ8Ra3QosXq",
  "key44": "2ok435TwLfcksgFX6uoqufncHMvxJfRbgkxrN9JshqoYePwbf1Q6ChGkFKtHRUbu3uo4eSydReL45769p7zi2r9C",
  "key45": "3hHohyAjdZJC1uoKD9bm1gaDgPZsBL2yKMxmnmc3wREtqQzzAHf4BU9FJAQt93T8U44R1yCjD85RRDGtU1m43dBw",
  "key46": "3c58CoGhM4tfMUDpKWJYvsSbwVVn3CePVAuqUBsTPXyc2HFMLwALgxHR7V6L3sRdSN6MtLdP79fywUz1Hu7F6GHy",
  "key47": "y2dPpc5popVBAo62kihPLWkyXn2EK1QXr8pGTuhSorMR6bGHNe78XpBvN71t3ZbMw4NhQDwtZTEErZ7fgYrxJWm",
  "key48": "YnukX3emVtPqZS4nau8NQ274CqydZoWitp17xYawBKNSSvmbHccAjj58Csdip5PDKpDrLSLDweM985XmAwizrB2"
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
