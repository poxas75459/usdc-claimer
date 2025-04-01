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
    "5VAGYgLBzu7N7dz96ujqYRzAMSRfMBFDB6PxAEDeD6TQBnsoSUbHC5WRcFRdfYL5uJyDPN5YvLSStX6U2yHTkstX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BvbVQPCyE5EvcW9o3wCdVWuYNyf9sd5vyUvqG3MdvH2UDYVymLLfEZYdR88PscceCRcg6rF4eiSwJSpnNEGSWgA",
  "key1": "ECroAyS8YYUKDiyHYjK6ZDyP3pNmMv1fs4bfngwn8bnbFzoKtyuJYeQksCwwVPgMtD7kuXoASWRy4Q3A1jiY8Md",
  "key2": "XDPpXJRSeCcHYCJgfnkK8gtb6iFPRuyu4h9eH9UkKPLn1ozDdEZNbCHmQcADsBYetTsXLWXzjgo5oj8u1XS75YE",
  "key3": "2zGWWnCB2iAwhG9aGYJFe7vnFxi36yceP679cRCRNcYmCCeKqfNUhy9eNDzHDFWdJ5kqDaY7Kqdg3wcKcx6jWNTq",
  "key4": "5sXd4uzR6J7bEMriry1wfjndmnKLqNCpGHw6eT6PbhdetYD8ZCbGNdyosnyRxjzYAH3TQNgCdRq6iUx5p4DRm8x2",
  "key5": "4sE8JwL63YrgWLyEA3wFWiQb7k6iEp4BFMqJ8nVvM1nQwC19jU4ANTufo78ESCknP8GH1T5sfyfbEjBAWGMpxeAs",
  "key6": "5pZKZk5LxM4uYSNchntYqCx1dSUCf4RReSV7KzSVm1f3EZ9fkJJrdTUC3on9LBVoswe8ZuhzXAG3xfpe4RWCVYsA",
  "key7": "7i5s3wA8t3WHrBvSQx2Hc5tY3QNDe4bsEUn81Kcr8dWhfnx7ShrtqiTN5qbaAUt1PvFUAWtFj6qgYToPk2EdiTh",
  "key8": "4WZo6NMBLiNyubbZWUW6x3P6kpbZcTaSP4gQQNJA9pPWs9LYbmqeFXy7bzYHZ2QBgCvPXCMU1fHRJnvkf6eDuQaz",
  "key9": "5Zvtii568ststK6ADGwmPYbKJ7Zji21dDdBUxUixnmjcGir5m1S1F43tj7BC5EMP1xaGJJj1zjozbrSVo5XdBR6t",
  "key10": "4ZSG8jkhGWURwdYs2hp2sRDAP84i5AKCoo5GaiowXQW2tR2p4bA4pPF92kZ5aRVTzYPPMknpg3j1TYVmD4VRoXRw",
  "key11": "54Epx3dmBRxpfE2osj5Nwd8iXWdiAB15nQmQUQMu8tr89LcA2F7VWPSnQiEwMSv4zLKReQ8zjgQ3YX6m2ni255vP",
  "key12": "5fWdTT1F7BCht8Sq46twdQYeMMAHTkh5BMn5i6cYXigf13mKzieeDPhaoVNcsqtipF6ZG8QeeMdBeitodmLZKrLW",
  "key13": "4r6MQTSn6Ap4GGa7YY8BXX6YjDCcMvvPo7seHdERnF14MEkeWxNpQNbhDyCLpxepoxVWNZ2XABFz9T5CEXaeFH8e",
  "key14": "2B572hUhizNmkvKhnn7UVBhAqkqV6gKyKD9zGTo8UKF42ebkG5t5gVE49VmmiREpNf8GtsruKJbT4W1WfErA2LuU",
  "key15": "2enDQthBbvA9vA6t7dL4xd97EqBckLF3jExCjUZunpT7FDTXEuthYGcBmExPLv9UNCEiLKqwmaei4JNc3jHTMePZ",
  "key16": "5LfhV53Z9cyJkN2VVmQ9jWLVSQA7SL6S2DU7jFeKb1j3RN5NUnhLAThoEsU7jMdCnq6WUhRbF8MomGafsodBfkVp",
  "key17": "V1FndVy1ebv7DeexLrRAaphHhXwPRZdVKGK8nFaYvSVfFpVNcGPAuAYeVLrTZawwinRqD3QWgiLxmPXSmZQRMU1",
  "key18": "YEmD1yziLR1E6tRoRdM1J2Vxc2BJvDmy4ANHr9Do4AATa9z3KhwnW2Tbd3VQXWzBum9GRYQ1hKwLdBsvgjFrvtt",
  "key19": "4Gtym5S4qkWoDwTcbFXdpE1igHXFVvF5cxegYSkcAmpxq6ZUb9cnGgzJoBhVWiejPn42kZVcUiDWWQEoFVkUJFF9",
  "key20": "5yAY6zu9dYMUvYVKmQt5kwWG8YfTn5Dq65tocBBL9ujz6J61k4Cm4TBaf9cBY8jffWchbhBiKAJmUBd1wCWSw1SW",
  "key21": "3bvGBRCYEGAGgvzC97CdUtcCabhW7dEx5Krx4BiKmacG8ASk42X5D4qf6GQtkHivEW37nJtzdjfbwdoKAhP857Lu",
  "key22": "2QkbX3z1RC6dv3HCNbVqsVLP3AxhNxCjJhbdh2dapK4EfFNdJuuomgtVjysgbPPe5mecsFjFbDRfA7Q8An7eYydt",
  "key23": "5mKqBCB2hVKoXBn6fr4eP8SYjcDPZAPiHssh3zXbtErxC7X7HGyVS7PDwAXVUrAbEZ7Dpb7xHfE3SSXj9NwtArtD",
  "key24": "2H73J9mvNgaQoGLDj9x5EFqUjbvh1ibMPt1xU7qqp2QVqzXjMaw3oNk43cZxnYm3vEVU53eMYxDTr94hfqfrhtLh",
  "key25": "5DNEqz1x7vZr541WJiYQ6ysSaMZehGuz6F4wDKugBnxXSg7bibGMWBbhQF2x7X9AD99DXGVqZGx9CPFUSiqn5yP5",
  "key26": "4YxUUwLMH7Vnab7YyKBbQDAPBuWKUP9xX6oa7EpYLKbTqW9DL23LqjocCpvotWF3AMEEbaLEGLJR1tLx6LghwEyM",
  "key27": "4MbsMq6zasQySoqBvPobFviF82pJFnmQH5UH6onBKzyCbHeiLVzHkhQNbranBeA3Ze1GZbtuMCU3g9XZNrQ7QKbL",
  "key28": "3STiiasWnKgFk3eRDknJp9Z9s7ut5wpHHNc3zrahuHNAtq2PmmaprfdvTa1hptH1HfvJvHEq75Wpp6nsyzrG9MJt",
  "key29": "27MVrQgb2ckLj1GJU4qecYT48F4Ef4seUYMM3Ge2uEcTrjgffw4hcvNJayQVkLKa1BXAc3KfiSbYUPzXDAyMcRZH",
  "key30": "2eyH6t2egdFXkWhcy64Qznd64piwFdDiXDGdi5YABjmdkoS8xZ3gjjkJJjzFtPCbNDJNVU6DcVpZQTYEZ2KV5oeD",
  "key31": "3Kmv9zspuwvyYYVZsnVoNFpEmgrfkVKEekss2tYZWsXuxkhGDN9znEhxoW6sEfx4zNaPhs6TD7qc9pQinQ4aVpJX",
  "key32": "bBECHaHU8hxpv7NxDEVDGRwmCGxcMTy34BhWzBRs6aq2ENupKFVRs8YF51x7uNbRc3ogQsLwcavSxm3nrT3B9dg",
  "key33": "561chudwMGi1FZ8SXN3ZnQvSXw2TNGPdqWJx53sgne2WRzDM2cqVfimac95WZhGbPqgwXSMDfVAHoxU3zssB6GuM",
  "key34": "jHiQMeDrSQGN5pXrNYd1tpWJmE8vgzCB2eFjfxNSjH9vHBFqkzxgsadxL2JgGbxvP6qPeL9xs8ojz36x1vT48rU",
  "key35": "2z181mU85i64EiSEeMLDTaFwe5g3gZsWqv8iod2NfBQ38Kw55aUYdDttPNB3qcfc65nsjR39ZhrP6uAEuQPxVeMg",
  "key36": "3zxzpSsmHbrrjJ1Qx7gcVoe4owU5JNnSJTut47cX7Vuq3a5S1wcmSzgH4ExHo3yRyXHM2tLrNYVxKnPWhUakRpoX",
  "key37": "363KFYNGp9TDockyWC8jbxXi1HBSUUHFpRbKw3TsEEd72L3ZG1xQzYUZ4WWEiYXH9f6JbNYfK1mNHyenAJAi29Bt",
  "key38": "8zYxDJ7wqtweTYJPxcjiXR9wMWzn88pHQVSkpwKFQ6Lp5GGKf5ZxJRssdUbBgHHDt9aAodbZrk1EmsUF9muB4ir",
  "key39": "MrVJX9KuKKio52wXJxT3tKUvB13MtWZABLXYuwEuQRDwkvy6imiTaTKTDVc66rsGscyJYqZUkZWU47fVYMFvfwJ",
  "key40": "4n1U1g2wTCwwiLEttUwnYVeFj5EuiH7a63DTVPjh6R8XfigakFWqJFtVsLh6cTe9iUBjFSk71BS3UcwwK9251sJC",
  "key41": "4WC79Ciz5cUuv8KjjypnUerLGwsZshG8TXPR8vNG2iRYeuHfaLMNuf2QMfMdxcLimsveYE46TZKaC9Z3sqar2K9R",
  "key42": "44oJidjuDMg8zGZdd53Stn84M4zy5dW3Dj4C1nCTQX4BGmzQHpnGErWfESvRCsn5pYw159jkr2caWUpd9cfyLEAa",
  "key43": "kA95A9jxdYkknLdKfGMNSTtYfken3yBpmrBWHcat1Li1quC8pN5EoAsLxMtauZMhKv4wDxMs8ThBKNGMJYDKtuZ",
  "key44": "5h751BpzM3e8ZqMKaFWStkApGrfrs3tjaU4RL8vcvjQeKNbJRDrdvwzwzR1efku5csHR2g63oynMT1jPBDJ89Bmo",
  "key45": "3v4YsxSZpuA3yoehxubbpT1PYwb3pm1KRiLSBBFPw2DwCKHUtyrKWa3dT1dSLyU2UhLptvJdHQEZanE9bQqBgUy4",
  "key46": "4vr6tvKSKMHNMyEjPJsJeDFnZYWVw4u74CXNP19CNYvZJtZ3ocesbcSNh9vPDhbYPP8h38U5AMMCJTfnvBV9GYmp"
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
