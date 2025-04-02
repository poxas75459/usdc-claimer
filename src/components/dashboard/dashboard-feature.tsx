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
    "2HfsDrcx6u9LtxsTUPTbSCSZdjNvZrdhRyCQpPMU5UsqrfXR5THQ6PPytu911JcRjqt7wX43wqUiByVckdc3aRBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67S95HjmGykMhVK9CFusLSgWVwGchmFGMGCuTeXfBE6KXyhoYC4MneKzS7T8pP23T3A3j6Y3ns2T1kaJwvFULwu3",
  "key1": "647x66wN3R2FZ3KHb9iXYVvW8sfwwrp6MZFtkLEEoFinRpcWjpDu4fYuQr3MmiiX8Z4qPBUJ95jmyyhou6AsHsy2",
  "key2": "5xkNcHACxFDhTJ41PHJjPSbewX21y2NKvEC9r976HiNYaQxmQhPoQY7jrt4BB4yTtemdk3a7Y8pTcgmkg7tSuyZE",
  "key3": "4WNcPBgCbW5FLZKzf2bSn9BK6o1V2fSKpKNrxsCjMZNMi6Ep64kP24AVw4ieymxk6APKNboyHQWW1G5yQHWpfSU1",
  "key4": "4SrqFH8qLZzCdQkMqaakisRyDHJu6ZGfD93WJf2vMwbXRV1Ep2totyPkhw9DBdeE7oocRTnbMTzgheYJk1HntqfQ",
  "key5": "kL72DdhLhXLNLmfxcim7iuMibnSefRSidsNAsVpWdgAtbH9cCYQ15oWRBLBH8nP8MSVMyoXrTZtXwq85yA5oX3n",
  "key6": "5Su6CZV7ajJsXTBcbcsBeNt8ti97txxi5tm39tEoXHrpw8Yr3bN3DSwm4jDyhW3UiR1iNUjfTLRXwL4oSbAM5h8w",
  "key7": "5bTQpZhuKUsxgDTfsSrcmi6g6GFaf54wHZGp8ZcZBxVxzX1eutnUjCb81xj5nvsnKGS4HcxTTLrAajsgqDgaki3T",
  "key8": "cyY2HjCFS6HBuE5W2gTAZXLRY2zVKrYzX4EBngoosw5ShC534HcUNr8KgLU5jtaXwz6diNejfTsnC5FBLeijjSd",
  "key9": "2HeeNqRni7HovEpg2VrgbZp4sQn9iW9i2LYUtjCUe1f549RwmgNdgCeYgayxmQZTT19PTtb8y1FNKaqVEvvU8CeZ",
  "key10": "63bFYviMLj6XtQT8Tbdqr7DQsVwSz9CtkBa3Yq11fbimfqRaFuSxK3e4eGn7shzdnWtKqS7PgkgJnJCagkhTviB4",
  "key11": "3vpfMAsGK1kXFNXkJmm4MQvhGtE74zN5QuqmX85wj8izZh4a8KkMV7ZW7ZHgqSuEkQvXAFpwMcC2q5QzohfkDtNi",
  "key12": "5sMAVFLWw6itRpKAn5qdoVwmn8NSdE9JtzC7zFUcGAJoqP1vMpoNaH4WxDdv9dJE4i4VmYEx4yZfkQDMCWwgZ3vY",
  "key13": "2hvjgTMGKFPkcWVtxwvZQhGq11f8b8dQspeVfXAusz8vKrhRyVAisx98MnrkBmT26VrLMXf61p8SaJXGmtJBCRVf",
  "key14": "3hwYjDCZWiy2dqSPfKXNk8pXRLDJ8YzLfvjvGobFXtcHuXPB5G93zfspRLjeWQi8ynzwyZuDe1XvdXzfsuPocaXB",
  "key15": "5f94QE8Xs8VucJJseRs5ghk7WQW3psi7qRYpoJhELJrYxgMj4qRwxoxhi9GeqzsGfvf3tgdUVpYMCyGrG7wCDaDM",
  "key16": "36UM6qB7MyUePoCUwK91aB6MmFvLCrX33hjkLSg2n1TaLpRE3sM8nybpVt32ERDPUQRitakbcdMqGbRw9Ra4MASb",
  "key17": "2WGmKf2NyE8wSPwvFVSjyErF37K8eC26zcoxAgHQvEcDGPfMrNNu1JfGtzHU9zKgvH8saxUCF4AqA6Md7oz7mEeW",
  "key18": "2doXLRpKbzaZnQtPVjuW7sPqHc94VSrpqa3aVaMDoYE1VSJu6YeVgbppQPPM7J5HEVakrTQc9V9ugw9DGABp4kC8",
  "key19": "GyQv3VBYA1zGrg3hwDv6jA1VpWutvWWttctmqcVUanTGLCcgeQ9pbGNJTq9SbvqZbGEFXChG5sgSvzbKiNbQ16M",
  "key20": "6xd7zdx9HDokJkrGaBUZBs9RznzpGGhBkEEaCL9NK1kNjM44LynXSdaEeKSLvv1GbTGbQz1EMtwAr9U2K8kAxEU",
  "key21": "1brGy2QnDajD7Nfe2tvN8xo9oTh21my9CXhhqr46Um9xHRsEArEGWxLRLqXzABH1proKdEcLLx4x2YRjExHbcfw",
  "key22": "2NFegDaPjVRhLBJyALrUAdYGPsMYv95SFcVyAfSpddNdJUAK3wUJ9CjnHQ7EUeNMtd8D7LfkJMMWLvkVnx1UqKEC",
  "key23": "ir8PSZqH8yvZYAeMaRruC4fZzogvSi3ZrAD9FPUXq49bzTS17TfmuLXWjz6gjPp2heRdAyqrSMP3TFk6ZvAtXiS",
  "key24": "2tw4pFU1rK3yBXnujyuDkvRnrzhsTnGJ8L6Zjsq8g42KDhC5wH7PVGx1zMBC8SS8ETuHRsF7QXMwpgwrkmBFw4f4",
  "key25": "cAmBn4q9XKHHqkJEzyyTi2DeC5p6y2MgbV9pgjYgC2PB2Wdi7aFbdeW6kZSbz8YFsYVvHokF8kj9dex9S7iaz1M",
  "key26": "2wmmE4qQLoWRd427ri5wLMA7XQ5F1y6in8xHqL4XyV3e4iEk6FmZAKPriFkibZTxUpmk5nfsZyyBizedk9sY1zBq",
  "key27": "35qSPd94iEAEWA5YmX32gbCst8nJT9ASLQG3wKfwznDwuqu8en99uKtNYnQwd6F1iTnE9wAJugFACLjM8VLPw1Kk",
  "key28": "49WR9zQu2Kb3oSVPM3TmRGFnEFTUxu2Rt3ep31VyiotwEyN9KxL73yNTWuK5SnVZqGB1KNFq8mvhKM2RDtBimMEJ",
  "key29": "Wk3P8b3rvTNiZSv4sFgRsjHTQ8DUQmjqzkreKLnewRvKPbe3JZUH7knvRhu2YpYHKNX4Hnmy2JCrviQGv3ketcy",
  "key30": "3YDmuokyRBUiPMG8BsDY9HSwmveyL1RLVT4bQigqEqTp7u5v41R8CWojGL4QCwgaFBc4deRVkweN5k3i9z1VyyS2",
  "key31": "45fwonHXjhpwu8jEDdhLcVzekcUS65isjjHRNxFvWf5w3thBeSq44DyU1Jgjd2fcttiWuzLfihAfEqZQXomXtmRN",
  "key32": "5DhDZNsB77YoWkPcvBpZjqHLxSj2b1YupJ1u7K281X3yCfo49rsQ9SgAg7fo2jQYSeVeSY3DnJ8t4ooxAShYnuZQ",
  "key33": "28cxnMM759xa586nSCbC9AxY1FMyerdgyAFwMszyQX3ban7NnFqhx4MwVfqVxNcdm8LF8GSkubXdpkk98t8mM4gY",
  "key34": "5NsGRog9gHEUsMr44UU79v5btj7VRi4rRoycWFaJzFobmLZgYMHp4RrfsGBxuFdZtnnJkiPqpMi1pNuWhhMh1x7h",
  "key35": "pE2YybhKUo6WtZGfSFQ1Kq5hD2bqPg2cvA5EH4HvqaZjAxXUF9q3u9oT3gW3ZKRQMJZKgMgi8EnPNurrGNwRmnQ",
  "key36": "1mGCu8yoarbqFgXjHeLLP88gdbRw8UqAmfCi8N2ShYWAnBTtkZGoDkMDsnD6tQBDEGApzEgbJsQNzWyoWVPL3yB",
  "key37": "37bNfnWqNNMfmPrHywbTG7tHGb3xs3mADiAYvFG2FjsfPbnS8poVz4T6i1abwxwhmgAuY7jYFhS2B4MhMqJvHDCF",
  "key38": "2Y5JKX7itTDkHGTidrLig7tSP69Dv5XYZDJiwiVcMHniJ8JG682g5SLAAwKEPuqE5gwqGzX14hnMRVJH43YAW2Ew",
  "key39": "2VbNCr8FprqCVWg4ZK3n8PgX22UfiYbCtuzU8RxcrCN1zuk3LfumF9Sbq65RLmergC7jFHmschzPYtRFeSJGXH62",
  "key40": "35RP8upHYuXnxaJe8QtZiJLPFcHx88fMywwQJ1D5jaSJm428GANg98fFxWiLcoiC9HmpE3xP8M7TnE5GiRyvQJTd",
  "key41": "3M5kTM9viRYycABH7Cpu5ZYxtb961AFfoTS3XbfyoyapN5ua2JW57U3y9NjjJFRyCzCfkSCJoEMu7b3LH97tuf8Z",
  "key42": "3f2S2eoS4JrWNHG4fAfzbfCqakhePSndMagAxtyZ2GXhzm77nuEgFM3myabYktwU8KH1vtamgbRqTgDXs1x1PiUE",
  "key43": "4kvCCmjhQtWezKXZsER6uZ2u9fHu4cF9zrGmKuGyH3L7Av9XGSPHqAtdmRuFRm4aAbjeKNBk76M7zBrVvWadAQtp",
  "key44": "4oHAPrcGwkXkA5BqjqKPdL8HQqBWHSo9yFRoR8YdEuiro1mJySkKgXFR6TsM33f64SFpiQkYoopThKsWvP27Kx5A",
  "key45": "2y5GkAxDjrrkEhMo4fcVSC35Q8AeZaPx12GDTEmPbced3y9xKuSQZncBpuCBmrnRLiNoU1NTXY9bHjtfE73GqjWe",
  "key46": "4WUxWTteKQynt2mHGA3nV8fRrNiwwWHknwBR1G6pnSXNTgWWifUrbR2NQHnKDUYMxHn9QnJmnqMeZATpHMCin9Pg",
  "key47": "4GFpR2EYpWCf1hi3wVHFGLmNLZdPCnp7988rR47rK5aSeFXhCBybEFFR2S4QwPamE32cce5frSeGkF6NjUNbj5oF",
  "key48": "2G8WpkhDK89b4k1mfhZmLvW9xgLvpy5qztPaHzn89mtEQ4cgmXdvDHRVA5Ar3B5p4NLDagjmKzcZCZUb3vFkYAVi"
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
