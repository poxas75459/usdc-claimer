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
    "jKwmggszaZhzVmBaY4DehLut9emKNLVG6HPxc9rPbsYpEnADKAEs3GHzfZ8KgWYTAma6tPHYSMtZ6FBTxVntx8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqZ4Wd4S1ryaZ7XzX5QLT4y3W6Ez1LiPY1XigdA4XSFoEovVUd3ZTmJKT1NWMfr4vF8c63k3YCkNxyYGPfW4chz",
  "key1": "2n5tkqt2HV8oV7Q7K6chtuevzSVARAqd816veo2EAdN2xJHoJZeeHYnM9GnvH3NuPqMEavxMAnSPr5pR7sFFzroy",
  "key2": "c1tsnjFYrJtqKpYAzcce7muL4bypDRjHXwtM96HKssCEY4mdvKz1CAZZw3NZS7utBKFqsBeuNghx7Ce3MsjkcaY",
  "key3": "2PzDo4zkhmMGyCoQk4gG2gZoCbas6MNeYGd8a3CaDkwwRXGxzNdLFyVh3yC6aerUqrmeUMbKaXr4KNxGS7tjtM48",
  "key4": "2cpTgeSaay2D9Etsb3JSpAKB5XhTbgzRLFpecytp5upw7dCcSANrEAN24KgmTBmwibPnT6i1JBVWNYZKft9h7W9z",
  "key5": "52tzfTbmnpqWWdhK6FocoMrhJiD831s8vk1STpPtVsWTzRF4SFfK69wYqFipABRmX3WiiWWrLKkWfhcfHVZj3juG",
  "key6": "XCoqmc3odfLRvHrHFytKQxhFdZw8qtRVq7kwcjDVe4YCRziFzw96j8cRUpcJtYvcdTfZsgXVxcGPGDxcgNHtSqb",
  "key7": "4ixZbtKjum1PtDrF33zupVJ6GGnzLx8pFwzVTCjGSp6pKuzTHmmSwCVgAWv7gJLpSHJ4eeF2RaibzjuZuugeeqHo",
  "key8": "Jeg1AwVctMiHShhPi35HNg1H4wRdQyy6TPMSSR994pmwTe6EsyW8iiAFfhsapkH2uyN4emib6pEyEWQW77ZRtHT",
  "key9": "4LmUQy3vCtKbkaePEm68YumSH9J5wiyisguD9yUcEbn7gumBxeYXECKD6G8uhRffKmqXVx2wUfJBU6CxczmNxWDh",
  "key10": "335pXFtnkxy6q2EGkK3hWfiNUdXHDPV8k6xqqFC724uhobVEHbnfBsRBKVQ1o5PApeER2XaytJVCcrVVn3bi8ahZ",
  "key11": "3RZUj2fpEwbv6HHGcpoGXuj7Ya9PbzMNk58ytRTsXuguk9KMVTCaiLxZ2QoXnW6wJAEpTuhZLFE68gF8Boj62Mu9",
  "key12": "51wcLD6Ryjuf21ACKsRv5MAk7X46DktENBQwT7diQiB2sXFsvEJdvynrkVdoXAXHap1DayjmyQjYUVm1TGQenP5a",
  "key13": "9sALkyA2cs1ti9CBzCCz73V2LhoWqUZ3p54oq6GWWpsaHg9ku6umP8enBAPFwctX8NGN6NhK9Ta5sXTtEfNUc57",
  "key14": "5RTHzz87cAfPkewbdN4yWwZra6Hr8JtcWf18K2ortLsjJxqMg6PWbpKEqeXuwrYKcwJvgRk8338JNzpva2Hdyjfb",
  "key15": "3uRGZCikTEitmVZoevgtiD8RSKdnW1ddHUbnPQNyLftYZNBBicDHxZcxaRgWBr89fWHqHmpSvwcd3j66u1eKhVcZ",
  "key16": "38zbufbyX2QmMecMGWG8AnKtTjXuFJ9avYJyXJamz7mn9ejPwdZGBS8wLwv19sjRJDvo4xSqMq7MNhoUWbLMKpyG",
  "key17": "3EQWyZUAQpyowbfbacN4zpU2KdGQDT9JkKhwJkWowDHDxE7CaXbsq4A9FgUSJ3ZZW68riyQwSt4urepGx268vjZj",
  "key18": "57XpMCQJGXFcKHqQcx1Pnqfg97unguU9sGYCy4BwnMTwBT5vmgefbW4oYLaoTvqhGwrX4WBsAP8NJ7kygpnPp5YT",
  "key19": "4mYsYu74jjTJgtumSNaftNRN6E7JCgVnHppCX6izFcMVGSz2NvkbEcxN4dGAbSfz8Zjves7bGPsxYnQo6yXHkCdY",
  "key20": "3pfbVbjSBdT9dMx5nUXyEsQbQhXSbXmSvM6SwXGWBf3NhKH3XmAjbA6HXaVYdLq4nqqr7ShyFcWSwndbymx5VP5n",
  "key21": "3GTUg5DLQzBtZ1kEU7cUtqp1btAPUA9H1qfQKsWBZnoM6mv14sPWtSed16Q1kS1bJN4qrsc95nwYsWTppr8uwRZb",
  "key22": "3i9RykBhGoY9Gp2UViucH8RYNKSpNeW3sAmeiburSRXTDASFHhvUqCKgFMZsqBnGaREBXTDfWWxLtRdQjjyptgrs",
  "key23": "3fMc4NSj1HvhJacSWi2uvNt1aFXj8srYnKkd4P57Re2bg3Tdcj5tpERm75CBLrN8iudgPYU4EmkdCJ3u2ASu7rhL",
  "key24": "3tXSvPQJfdVgBKdyRAWbM3G7v9EKrjVZdV7C6XDMw5ijSJnqHqbe5vHkT2gq8NhiyqepkXwFosMqhSo8ZPKLUMvd",
  "key25": "4EMpx7VbmLQSf7agDf7ofkrngNMa6BsXCxKapptk43pRPZTwZhuTbxoxwDvQUxqu16BTpf6KBkStYxa5nnPeJ45G",
  "key26": "FJKpz6iyNRrcVx9gQvdTMwy6cQvtBWXTndUpj5KEdygdP5Rm3sYswT3stXX79cAYtaHwHTLX8m4ZYEyAD9nBFPj",
  "key27": "2w9cei66ebXioFrBJ2jwjkoPfa2MmBXtNVzQuJahbbvi3zkHhr9cCzc1yy2sa78XcAo3iRvwbFHzGaXjNyEMTGU8",
  "key28": "67Np9Nxe38yjg27ChrTsmffeN3hUSA9L3FKVnku2EATg2JzRcwuAbsyZrUm2MJCNCECHf8s2LBNW3drByWLZL4ej",
  "key29": "5iRidjLDcJMMfddAxfw4cSNnEbfg7q5VSHJ7Rqixf2VpETeZsjqzuA9T9xasxNX1B43ifq5NcRhywFZFHUkWZbeJ",
  "key30": "4G1LWBsJQqz7o2tptkZfXW1v8JeGXsfvEwWs6rCmAAi8QYcsGqS7FnwBzfiJRTErJhUE7yBKce4B5bsQ1dkekApT",
  "key31": "26Qhn5VaajfbkynSgNRrA543X9MawRrNHaanWNC5U1VDiBvvvDWDrDaqznLSQRpfQzvcSTVa4cwt7j1qzSxbjmyZ",
  "key32": "2A7F6gywBPBdgSb9meEorYckYXMzC1QEupwv45cqu27nrh2oMzuHNYS1cHRPn9fxkwWvN1vzG7vfQk4Sa5AiUHLJ",
  "key33": "3PQsAGjDvziM2h9EQiJVFKmwWpUDVy3DvxgXaYVo6Qs3FuDVYNhpcM2iXwegJpAR9ytJzsMgUTe8kSwwRpodENQW",
  "key34": "2k4zb8D5q3dvupNtEZZWNqBF6XNy3YS4KorAMw9zSAxV46rgo4Jj54t7hcJNEcck8aHHzTSyQkkGoNNT4HyA6uGs",
  "key35": "5EQDGoGbmLTRg3uQH53xYDx6eVRzaMKrk61NvrYNYWkfjarYdk4LqXwhFHDfC4faKi7QzBuskNBCqfTAyN62DR7g",
  "key36": "3bUKdmBPbzm8ve8eEEpV89U89u56xmLn7F9ySfBWBZvCxMuPDzkwVZRoADHK53Dy4uXGRPKXGMuwuCbMcQSQjKPy",
  "key37": "3A6Mnin6y4465xMLhAi1nioNyzznV5QkEe5fT5UbJ6VSm7sFMgefGSiLJjk2RijZiGvzoymuh2Kud9isysevpBWw",
  "key38": "5XWkq7KgYuTR1ysUsxzA1qVKVDtVosZgR2wfABDHpfxyUemuxA9oqn2zzK8vMrSmRSbqhKE6Fx4dx9bZpL1ZBzpn",
  "key39": "62rG8RsVkVVtSMTudhfoWZRjbUvHQWzz72A1TsyKUis6e2tk3cL6gitX5KXfWS86fygpcjZVwSMBcmCqCpprBu3W",
  "key40": "46FJo1txazGwpGaREbZPjcsdPU1T7mPUqTNPAY4YZhVyHjvQbDeEnHa4vEPjUCQmpD2CfArmyW1VnCszdtFt326w",
  "key41": "5u4eq2zaLFRsdRMjRDwLKST971sEVC5t2VizNFvd5Aj7NCrMEUWkVTcSfzZvJCQWMitUpaQCv3rXHiSo8wWCGG5C",
  "key42": "gBziKeecT4y3cSj5zcv4GSK1kRfA3BnX4ejHXQnBT1z8pzPdwe8eRpzqTczB91SRpXuMvLxdemSVPNUJTdSjXQa",
  "key43": "52EfmExUk78DuYr1u6yswN2nXjtmf7xWzi167dzfEryPEPS9nTm5auaQBgfJ1aKGdUdtbXg99aCwpvRf2Y5iuGRp",
  "key44": "5jQoPixZoFMtAB88Ln4zRuA5EX15Z6HYx4cycz2rhXjYdCN3xc5ADtGLwd4Ke4tnYPF6bgyBxRMr6qEuxQNwZdkL"
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
