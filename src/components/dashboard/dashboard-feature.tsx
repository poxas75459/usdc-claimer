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
    "434oGHc9knCNnUevBsUejoSTiAHb96KvAgS8dM7mMd9KyXQJKTEL36HKYxCB2wfaRtgFuxK28oR5fzfvzBBHE2jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3MrUqXrCCk5FqmjwBwaAzhZBaXo3vGdXLsSoehRK5xRPyX4LwczVCdoCGGoJ8HzHyaNtrhPtdz2PP9qZZtxvQB",
  "key1": "uvZKeam71FwzSAk5ypGTHm9szkRGXYTU7rsxuvccHiWyJP7i75EAXD97fFLPAkMMDWppJzUCPRQubriuyb5KTGJ",
  "key2": "3Xjpb1b2g34WLRqD78KoJVDq5LcEXfYM7koiHhb74PitngTrFNcJB6B4Wso3iHkY8EkxLxHRCFvmE6ghyR9pynLS",
  "key3": "3pGjkXih7vEytTpuLXvo7QbEQ4tzbSMUF9sNLZsu5iwJLaK6BhLW5fiHZf8fB4GhtT4RpbMAyEhXLZy28hBSz9dr",
  "key4": "21Agm963zT3owzhc8qgFegFiSHWkF7txrpjNMomZS2Gs8fL7yQDmuSmkBPBACzC5jbmKW22gRZ7ibD1ZjkbDv7gu",
  "key5": "2xSLFRaTnPXgNpZ76rv6khBSwy1TFWExMkokBj2MVMiBijo1kqSvoc3DhJDwutLBEp34HWWPf3emGc9vkQfrMuqN",
  "key6": "55LB4UAt9tBWmC431RkqUKqCCfMYT5wnNWiL6LhJhTSChCCSnbbmPVACxYVG3jAgQoWqiowkkXF4qf1XqiT9np6V",
  "key7": "b4uR1gJayMoHHX52Bf8J4uWcKZCj73nb71nba7CHvi7XE4nRTRyxFV6UZLQwBmwn9W8NyggSeWWhHgNjYxfNTGk",
  "key8": "5seeydupGo2JV9LGL9B9ZmibQPwn2sreLMiHbEX76EYuHQWFkhDGE1f9WGJeK913thvchvPkTuKYs4yTyUGM5kxu",
  "key9": "2sgkCCLYCRPtXVTa7dFAV3uhGuVfxRTYqZnoABjLc6cVbhfwmaNa6jtuJ7Svjk9nrJAPRnjZHCAxpdrGPKbfe8Hr",
  "key10": "5vGaf7D5rh6FHUv7MxE2dK7yFPgoPqhA29m7o3Y1KkSgjQEN1iGTeMA5MxCkwAWGh4ELSUZMYXZU3YU7N6KfJYFE",
  "key11": "xPBDgpZX1Y7pnAag2KQEubgtcvBcSqYF8yaRFjmbVZHRWg33ZXZqp81KFQPihZiXDKQtr6ujzU9NRsEorDHk9zz",
  "key12": "uF24UpbCy3REp98XvEJGb8UFGPAtkuo5PJQye8LdKjaShCy8AmkWFVuU1BpiR4M9q6ZZ2o87hsn8wgKA9jgze87",
  "key13": "5dAXmgd4irZMwUhSQe7vnRUa7aTTUNrpq5FYiWEmf9t2tFNc9zn4C1azJECn9NfPj4gnWQribidDWw1Wxwwb38Rf",
  "key14": "2UQJ73CbDA1XRSezQYqDnbf3VtzaMK41gnNTknmR18KmLUPWiUxxpY1cQQpsvFc338AnVzdf2TT5s6f1aCZDvZLE",
  "key15": "318L9NVDyeFvM1Gysv3ubhKyWF63M89wPsfXDcVnyGdAi3nFxVLEQeZYGt2XjChgvFtf2Uuoh2RfHZWBnQNwbQ62",
  "key16": "5fjxbkAqvrEVKPZvCpaqgacXzc8PtX5tF4kGHfB79cjY7YBUAof1vawt74ApmKJCVjvBpr9AfKcPvRxRrSfbhLv3",
  "key17": "kVz6BzVTvwsTraB2rVESkYLMfzD2e6NM7FMjzsVAAgMaMSLPsdFhqPcH1tgPKdnQYxxRkBXXPtD6VNFWL3h1djn",
  "key18": "2cyajYcD1Xqyk9UUzNKsMnCz7KP3oJ4xZCYPoGTwo3cmDejGULj4jdBPqNRg5mbdGtH41didjCDFKQKoSTgWGWbb",
  "key19": "5sLXZdWMuD4CGNQaqwDbR7KsKwFGw3kSANTemL5oxuT1kBsiVBte27UrceyNzJySgnspxpqeaR4TFizNAZzdDrq7",
  "key20": "2yzyocmcYD1WihErse4mzvtRCni5AN1kokyVMUSxvGGyzMvTsXB7JCb9jqLcVcduDZhENRfLCAyp3pxLy5mEsD87",
  "key21": "4pmN3fNVKdiFgLXJDgdba6f4fpLgPsnDWsfp89MbsxB4ho38UkSYDLrkRYXGyvcLs3UTfqfMpdQnSdagYFjD8qy2",
  "key22": "27qFWGpw921hhVfyUmHSBcF9nrW8jgSeY4QbrUZ76X1ruX91GD1K31VzA4rMvpohdDVjeJFwW4xnEUKMYBMPC1pR",
  "key23": "5UMzc5U6xDbgimwLY9pcHv3C3eHggeMAa2xuDCvp4VcxeXUFR5qqSnpKBYWRhp24ZxFpcMSsRUzG236QSRzmUmNu",
  "key24": "5DULEMkkAnJ3NrJ4RRkRmT2ood86M1vuA6gAEe4tpXRQST1xTRGGat1EQsqUWaiGnNsoMVhKZjHWZ2EXacX7qz93",
  "key25": "5QWJEg8PhV23QFJJFyUhyAUxeZKFaHH1GhTNvcTBBv6wMYk6hxLLFhviSkxWx5UDQriCjra6DSbErAXqP6ZpGYmA",
  "key26": "vLgWVQ89xfgq2HWTjVLAP7FkB5igmm7qEBZXcUTR5D5T2MytTezFN7SgNn7sTdFFBd5rXimh2YG7XnboUwWCAtX",
  "key27": "3hTsGXKKy9i8ArCZYiTWsZ7bW5mctmiyU9mKJkHcVmpiF626AM3EjSUufftY1QePUtDoJiebWnDXq3yzALJYuLwy",
  "key28": "E5jiMtAzKR7oteJpcycg2khLGPDqaVhnPfyQCCiCyWfnMbYYPFyjtLi3dLAcpK4DM4mBbDAj4HTL2WAbMKqtvhW",
  "key29": "5dwCkBmSAabDjGLR6CPJyBZYSQ8X9GJRStYv2Loqy7Vv6QatgXEyPH3BsjedvRJb1jSD9t1zQjbRS2fBb2dyzaG6",
  "key30": "4hrHYfyiTJUNFBsvLHoMixKg9Hyp47bWy6iNt4jM5BHQDMmsJajzxBzRJGkTiKWUg9cAfBKgVjzGKrwxEzWFb1en",
  "key31": "24HpRmXXpHfSz7c6JFGELoVB9D72RikKDTDxBMTdA7XtgHu1SFVP2qoLV3axSDVF7fU5obtKgtZtbewMQqUZXroX",
  "key32": "3SBYsbzov1gpbP3G4SFFLRNJmhws8em2VkUDf3eYxESfYMB6HSbHo7fA1ZihDfBC4uAC6yMT3sBVRkL1RK4gDbM3",
  "key33": "42w35ML7kWSeRLjxnkudox2U76j1K8X7DRCebHY8yozWPYyxFLd2tS8GX2zydE3NDKxCJRJJm75gbEuFQnR3WxLs"
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
