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
    "3ojed2PpvRmQ5yththPioD6qmLrEnHiXi4bcoRbDtzhsKrHmDg49yG5r4ujUZa9f4zGhQbt4DEF419ts328XgYpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvVHXjUojqaX7QtgwUcp6pqMN3AG3KK3fYVnRPwJd3phvQwwXtce5WvbwLwH7Lv519kMRCSWmUPke58StgHPd2F",
  "key1": "2KYx7FbVeo9XApxpHNb9KaAJ3GMWJGvfVN1ao6VTE4BA6TiLtTVz8tbMVBVW37xes428LpjWbJXzJACnfLHWKfSt",
  "key2": "ncWLLxiDeXvrcaPHCZUbX4QmBTa54uAck66rgowhyXq7BAKX92HNpgtZDyGVRPHEhw7DboeHbTVzZ4jirUuUgAa",
  "key3": "32g6dZKFqqrBGNRMHUjifyqsEtdMGGhggCqijuaFkpyQf7UBdndDDADRQPeg8MZXFFuJXsdwK4q4XFy7YNEHXikb",
  "key4": "5RoiBT9rMGoqn9iLoY9tm4BiYx2jU3PoonFZszhystyts1erp8emgFZEEtrXRYj1sRPGkf6SvDkzc85eL9b5s5h1",
  "key5": "5XqFgN7utd8MB2HrKCUtFFrRFu5gARWNTTiVTJsoVDs5pc4Jzz9dph3ggn52bTKSvpz7EfmtQrdA1DyeFWMntiwR",
  "key6": "5fFG4xNNazZQ9tWUfA2TomkqFv5cy4iME1uT2AqtuFx9NoWJ5cKnrFVWGPaBFaJnUnHWZuGsfmN9eRPAmjuRbj72",
  "key7": "9Vz6QTJkVkBCYwe4pSw3nTJZUf4u7YSmmKKrGZfY5qn3jeP7AmCg77t7PKdWRmobrfSRAoqDbVKAAZ4i55kdLfQ",
  "key8": "5HzV6Yz7ckXM5kdmxaHAHWeAiGHuDCgQ9pk6FxMdGPYaWa9ujUzZ6yvcNZicanK4rRFxV5y3HY5S3DygbtTDJVKM",
  "key9": "3QkWfRLp9JcxxgrUZfFrFPqwfNemiUP68NkTNPce414QkCzbWjQMTk9g2y7dnGTaPVa3z7WwkfxrGe94nmVjoc9z",
  "key10": "gHhx97gWkcZtbv7BKswuzkVFKCojccGhCjumZNB1PBT93hMkn7FbZJqezhJhx2D7BRpatupj8amDJYrJrXUnLp6",
  "key11": "515CWX4HrF6iDz3ZwZnf2dcx4SS2cLxBobpMESW2ZDuoH1dugAyFaq224GbXBuA4fC1Duzw9GXHcwXbMGaLPVKLX",
  "key12": "5LnzQNmGa88AjgwfPUuQtbUp1UU5s8rUZccyUdMUpKvUkzuvbZ65zEU6QnCQs9PQfhE5VPmAJzUPWas6KzGfHyfr",
  "key13": "3U7wbH4giLmhZy3ZHTd2aMYx3bAz5YtQyWAECDbMTzZA6W3ntq8QpcjWjWWFTQRLWg69fgXtNochqreXheJ6MMrX",
  "key14": "eCcrvTPgb7mY3vDyGhDG9c71UsEhaCnHUHiJYBwzGdWkrn4C3FUk4jmUnkDBr7cCXhQ1YXTuayLaGsKZvkZzcXu",
  "key15": "x37pPNRCEpVVBJ5oLASwixpkcafxjzkhgouN7rjBEAGj7xQDmGV6y52kni7DDoRJzi361XSurNHqTVR1oCzuYtD",
  "key16": "3WXTexhC6xBqsdNkH5TS8viBRHZac4re9UuMstABjdagvzxAZ6MjeykFNMCcTtLj5aEoDAftnQ3nwodyTCPeqDjk",
  "key17": "3cSDRfAH7yrZtHZ9cGAG54KMhK21EgDyzLEdET3z6URGAEpT95NP1WFVexLdhzxagoEne5cNrPd3sRjRqAJFTope",
  "key18": "5Hk5JJd2jiMB3jW68trzpKUonp9qzVraGerRVEkyEU4EAcNAmfzxic22BC3mrxtJyRh6VATn1fK9PevgMMwHmkYh",
  "key19": "xZSMxW3ZAXQsRVFJ2HyCmfdB1aayvCKJppp8w2zLrDdUaz3iRiwKofdxCGab5SjQgSXYtjnPFZo63h1geV2vNLf",
  "key20": "NTh9U7eHg5hK26FEPG9bfSLVV4VqjnxXvx6qNw7MRDucWbqsqRcy2xjcakUQWZjbBXVoCkt2p2AA8LiZ95iQd62",
  "key21": "3dkF1GePhDC9EyyP1tvdz4fpT7YgEcQLkyXYCvJzyiuox5Kfkq9iLTkdCUKscJAaqzFnee2xwyjeqZ1EmzkHMBZo",
  "key22": "3SeYST3zvB3NrmesHrNYGtJZqrUZJK82K7gbou2Cr5RinFXZKsbRfNGwvSvZhd1vpoegzZ4FMA2gwkRVK7AhtzNo",
  "key23": "47Lboy66eEgLWKRHoXHLPHkLJToFWmhh8UTEjUDf2Ta4xKKDMxenVgi44j6qr9oT29Wz2CTwkNdgrUwctH1U53w7",
  "key24": "5RPnX5f17uYTL8ynju27KnWr87bDX5DsyBTkZBYURhQ4gggs17VBJ6zmoW7hAajZZXDqKM2Tku237zr2Jged7sPo",
  "key25": "umpvxWPHWfFGhwFUSsdWoxLfgcN7isGWJhcgWpectgruJiWGZc6KiPoTYXNoDasa7DXCKPDiGbWSoKXmQW7PjYJ",
  "key26": "64F5vvh4ZLPnVEXHLafg73Ns5VEEJaTjobhdVysPDVWCp1E9RnREaZwNsznjZupzW8xkjg3oL7A3MJuWMEAo4dZY",
  "key27": "2Zk3dZfu1TgiW1zYHcwu5UNfUjeWVSAGHfzEt9HUevKMPzbgRAvoH63eAcdezhwJ6hFLVSzSw9mPaVgXXNv9i48Z",
  "key28": "25yWKvGo2MXCAiBNMD2FE5eDMKdpEJMM3gHH4mkFrEAB2WtWAZX8DsoeZusXHvcE2icFKjjTHZ51SFj5v6hvYtEV",
  "key29": "5eSfGBo9vfXUiveVDJ7CUcXr5y92ti4qNLDwguiethvt8Twyki9GUM8B2j1WagvoKBXsMQr2tjujqQ1p7ye5EJn",
  "key30": "54aLXFPRtLmt7dwyeyUdX7voa1x66xgvhW2YJRxQFJQzL4gBqdSRZDdtTFhTFUpNpNFiAHE5QZNngBFSMBfV6fYZ",
  "key31": "54Z5ZeY1zC9oWYjxMiWaiYFdn2Ut16LMBkmntQSfNcxstu12hoRTAskpWa2dEiwmPJtpxtFg5B3iAL68Z3r42dKh",
  "key32": "4cfYZonJYigNt9L1VYXhdDUa6YmybtsyPQerV6XNDWLHyw78nhg5xMdNqzkH9MdAPBQDJuhiT2QmBTRu87tmqno5",
  "key33": "44B4e8gR4WyASCzf6oBGPV65dxJnsnTm6xHJ2ppsQ5J7aub4qP4WxKQTDhiwYx9riXZfqt4R5WvM4WGWn8LTpjFU",
  "key34": "37ki718X4E5WBDy2EW6D45cPtwRSqm18eAaQrLmz8RCatKjC8NVc5hrNjtM1WEeHFQfP1ruVm9UKqG7CSU1h2C8c",
  "key35": "4nKXNv4RZEbsgZq2D4tobTwvhtdQ4CzBGjxZVvrUwDUfWQ6tePTR54wK244n2D5fpcpc3kAbHK9Bdph6ydALdyiG",
  "key36": "67BMBh5XEGSghiCQbotPCG2vUJb9W7bKsa9g6GGdutpAaPGdfkfvzbPjo72MH84Pfycwgi5HucK9CGypycw9PsKp",
  "key37": "6c1Ch8iZk7wouhsZhuT85ccUEeCWKhL1hc8fYEU2HDzLyskSyZSYFMBj9aQrgK2xXNn13YoEy4prCJAdRy6vprv",
  "key38": "oe7ab5YiRt72uQYx2Ev3ceiyeBQmhwjcEwaryYQjMSupum9zVt9mMzDzFXe5d6N7Wg9E9rrEdV9BkhMjugJLFnd",
  "key39": "vxeZ9kgbBdkHHN6mQHsDzH6YN8ahtiC9ww6bmDid3C9buZCrkk2U9yMnX1dYMDv1tJ1o9kjPgkQXUGL2scRxcKy",
  "key40": "66Uui8WX6D2skFP7Bg7dmkLk3gJ9GVh7jkMzJW7h5rrWXniaaNeD14HJz63BTNKL9rZqrsPJBELi4tmVLYuLMETz",
  "key41": "3Nbea2sMguJTviA1zRXsx5pHcyukQXZiHNo9j6KVRMTnthXMSuDCPyswSKfNxM515yJCcam8yNjbTF7qDVd5hk9d",
  "key42": "UH2nUUkBWaRVsimFsRBCrL7gqi31o9WPVLbGqfG21c6vTNnGbD2trzJkAofzqwLkJhjMHh3HPKkczfYfudkZ2vJ",
  "key43": "47pa62qFQw6U84XUjqrXCesA7eqs2BTyFgzfEMtiEHuBS84EVBx8fgKieEupWwm2deHyECoNtH4JrLcqrSCfj3LL",
  "key44": "2qr2YZPThJ22VwzDgMd8Nc55CCUDULFn32eT4U38cZovWZ9JYBG33cnyRNmKSy87n8tV6bYMN1bTmb7iyZCdF8em"
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
