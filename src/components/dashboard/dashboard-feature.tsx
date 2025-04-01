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
    "4Q1Z6r9uZ5PDQxJHiztD2gms1Er4aEM2yH1zyfeeGYCowVrzMALMsC4bHo4vGrGC5PSKnCWJL4WqsyNE5DFovDaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qdRZzdFgS3CicNJfPRHTBqUG2ARcbTWwpJ63Md2wem5RMuTDtjaU6mtWDXigtYs5YyftHS5BhyrRoe9FraAW13",
  "key1": "2VFs9wo8boxKARivbQCskACFTUe5WeaqeGjeQve25831HWg8iBrcZCfrxNhYbehjpt9TXtatKwcCHA4yvJg3aaj2",
  "key2": "5RjJdKhoYzgnwheczmRGoaUEXE4GGKCCRatKHTkXi7kfPJku5grfXMFpbyWGtkQrD8FZKknHB1dEpWqsabbV6KV7",
  "key3": "2Vrb3tFu4ydzK6N9B1tv8VY34YWpTYxjexyh32fP3uqL4vbRgs6je5f5KgCL7FWrBMernKprdaz7LERH4BPqpZPw",
  "key4": "Hptcx54jLAt8V2NJzGNbCcqHNaeBrRWxxvJk2MDtmBh3suhc6GRe9nSr5w3omamJjhXADsHabDE9H6zqg3jjdfW",
  "key5": "2rzQnmfezhQk2rbnnRSf5z7KDHWa7gfWrFoWLRJSvAavrWLx6HiU5S58x5ymyLbwEumHJTXZyUK9nx8SAKsTD9qk",
  "key6": "64TGCMpzVv9pzc2v4bYGb6ihMb8iZKSi5MenmopXoCXXPHp8nfqkpJ1n13L7uHn3Rv2HNfRNggRumiy8AkihrvzT",
  "key7": "rZLDYXAjjuaKss3R4HcMjzPpZ8PMZBGYhVCktsjtN8ae5fUQh7ivKh2569hcoeGumdVFThMHZmBKMb7fxr1eY4s",
  "key8": "3XAmwCvHWQADPQFjBa8qi4x5JxxngxJVhvvpjAXRhauJkqmmceTpa9cicWET88D5nsBRKRF1yWsyEtwGs6xcobQK",
  "key9": "Y8UU1JPADFJzWUZdxvdfAAQ4CfF1L1uo36QuEyvScJJtXkUeQVFZ2fNczkA479Q3G5DtzpoGDsgt1CkX4JmSo1T",
  "key10": "4cZ8KVAi8cVXJGnT1DqZxNnFvibk12SspFbbTVkSQKbH469CdjG5WSWQ9E1YX9tsKVQ18H4eBe9kScsziFeKn4xi",
  "key11": "2KBJfwxCVwJ5fz9jmSUJ3zxE3PkJHfcEXzBU95UcbuVSQE1RWpTJWcefdax2DtA1EnTyxiexNA3ofS1ta7czLv4x",
  "key12": "2VcT1PRfTaSLsMefKs3xx6faVpRzaS14719NGDNNgVcYnU4uT9AXZdKS1YTnRememGikETtR7wz1WU8iJ72erkk6",
  "key13": "2PCGz4fD8oTYexbv2uQV2Ft2BEP3gzGWHeECL9PJ1nJKSSgcNwWdSLNgc77vjaJLgWqCSPeL3NxzXo3gL7Ytc1Fg",
  "key14": "47hzoT2uUvuvFSC9S8RwdUfwBxqA2HhDumvmzNaZm8NvGFWoGeVFhhhLms2dWwPsE19ZXFWYyeVJvWHdMnQ4ECVp",
  "key15": "3BZo6pNmzcxzREmgtNikXbF8VR14pG5kLG5i6v87LCV5rCnQutf6QPogCDwoqWzqyaoPSqJUk9nXDz5SNpYniWM",
  "key16": "5rRSqFXXJCGM27SLQiVpFuBQ9r3kjTgi1CB34yKjrS1QJcpdcwXUjCdmHwtzjAZJ53Ker4WVATvgPbmVkyxsWpd6",
  "key17": "3EsGfUA8zwuFCfmWmpoviabU66HH2YojF9gMTbESKCU1wu6bTCQgChvhPy7AZgA82y7qXhqf3WiAcJAf8Qu1NinG",
  "key18": "5NGCXU7oJgUxvQaFuqGqUYQuzYpCK15xaXR1VEdB227LDeyCVrSjxafcPWWkNzvgzX31vMqRJcVTWuj1hYeQNYJy",
  "key19": "5QSy4WY3GprUqoUYa2r4Cwbmk9KdKHKSx3nwoUKk8Ey4rAAq6Exx9tzUttEQynt3XwJoECe2SACwQPNWezYm9Xmb",
  "key20": "WL7m93x8evE7WoF1yvTjLFwZvhWPEYedmEwykMt9an9mtbX912K7LTXyVri8rzya4tJbRdRRgtCxYuZFV4fAibb",
  "key21": "2C9K8AhgYMfJhJd1EEFfEcJGTTqsfJsAoibhG25fLe8JsqPiuuuXJJ7xX5qp9Yoja3beNdLc8EgaruTKkBjYfwdP",
  "key22": "4yHAP8dphTVDvi8ciz7C6w4cDdEnziiE1N375FXssT1YvAZqrAZpgrDw1MqEzpx28DofGK4FAYsFvkKUaqvW5i2x",
  "key23": "2CuDRXrutwK5P6CWJdWU68PHnCrQVMzcf1PawApNGB95RvRMqoXtWMfryUoM9mwKTjhADZao4W5tfZduBcFECbmm",
  "key24": "6AkXCcx7qvQPZkdVMcCsshwnStGqjmyBAb9pHJbbQ5naKzAKdyC9Enb3yF3Upa3oHZwqHViVKvTwpKgYvygdkge",
  "key25": "3GRJR9UVCyAVaQJc1WqbxQ29cqjMRoYLaJAVSBY1J9No1fDcEDMHV1S33SadRg84XaVnkWn5yi4oVbc8fRc2CXB1",
  "key26": "2bVzaWHC29YVmuiLTAsCpDp3M2oZR7dYJzipSodhmfJBTg3hnkzrLYR64kopw7ffmnTKXu2sBYMkGRRFNRXkNBhv",
  "key27": "2pAm7atKqLZaan8uwFKo6u5yCtKhrRcnbxJ8CocW8AVEbPQrjB9jrVibjsmLoyHy5dFoKc95i1nGcRhE7KsH4Vwb",
  "key28": "65BKWfJ2rGPeFdKr95tWwLgqNuDfbE6dKi12zrRD7FsQ5fhQr9Nq916p7Jo9AG2XfhGY7DSQy8T1YnMDuxMNbhnj",
  "key29": "4JQmTUPE4Ak68YPj1eRmPw3wvgkcJTBGzLHQX2JKthBxHXyYVTPt7b8pexbeUofjAB2JLLBQL1ak6Yha2fkuxx3A",
  "key30": "3qNSC63VbcDbyHRkD2WaRVDZxLXR1J8pUwV2XHx42ugXLzEMaSGe2RHpaDzuK6et7xwZgJ5DGFmzfMSX5xuzDwVd",
  "key31": "2RtWsjZKMNGuWeMWetu3xfzEUE4dNCiZqvHLUepjkqZfr4vzjPUnCmhQ7C2gcczTsSKSFSrwcMZudTRiM1FSDCAz",
  "key32": "sftXBghx5n651NRqk371WGGr5UHTLzEajwG6GDtZ9aJNBSriytoEGYDh4z54dRKyyFGdBxk4spE2eaUrpoQLC26",
  "key33": "4VphicdHrBYtYBdmPNY6pjHNhdt6ja6jLiUpiPcWguDtzmwhor2wBYK5AD6Rf91GbJRvX1E9veP5UeENyx7tKY5B",
  "key34": "3BKpDFCY6o3BD4RFbDVY3b9zmymSjHtEfz7L6fqV9N7KCo1kHxFga5FWxa7YL9Keish324utGS8Xh6TwiTMBCBVk",
  "key35": "5sRD3CGhthdhVLMefqdKfKR2TivXmc9JMTmq1FuT5Gg3LDAsyu6MTznuNqL9pu3PvcMZkCZ6XFzSk5G97qGLb8XF",
  "key36": "4PSDnrhpGTdjwpRLkRap8W8Am3BQyhEcNbWn2cPaGMzXx289X8FR3hsRwjDgtYu5UB6CKmar1AKkjFZR5Gu3y8at",
  "key37": "UmsMzeMUvajJgT6QvKUkEemn7XMXAwEEkuRzKcwq3gqpQQrcL9SdMaoj4dmmbUEYuGemo35veDuy5TohYJQK1bP",
  "key38": "3Z1kruFwTbViUBTuRGUtobbZYu3NcibW5GoEmr2wSUxNLpLGtMrWFc9mCFxvnpXWGNEc8H4hEWBfrNBZ8rUECwwP",
  "key39": "2cdQN7LgYP62syCmWMQcNgWAZ4yFGWmzsfQ7qwAnD4fy51HUUnApoYbK8ygnojj3ARZrDPDR5QRQiEpdDS8LVies",
  "key40": "4iKEZ2rNKD2ZmuS3JfJ1jY4o2Ypv73qvwa4L1WbedPgscoiJD8msqEfusf3L36ARwbzNUUkMb6NDqMnszfHFSjYj",
  "key41": "5Qv5r2Jgrqjg5swTucyNKhSPecHBu9qSSVcfPkLNmVtLbiw925z9kT48BFiv4KwLywLB83LFmVwzMLrBxmy1oHbu",
  "key42": "2374mQf5VwLTRf3fH9UAMmufEsuSKRo78v6djmXLqZjwtA6oHMJ6c6EC4iQGerdqVMqe5pQnSJBQWY9FTqpMi2af",
  "key43": "5qP6Y2uJspFeMnpxQxEEx7JFpXnSgUE3bcjNLA7znn98Cjo4AdtatZDct5etaG43errvDmgenCosYBzitJKgpgys",
  "key44": "3uMVxiP7h36oJFv35dMjD21n7xD8CWn1BRZ3dQqSRnNochRFvb68jyyog2sKZvBVR8rJFpXWhSCTcXTA22qwM1Mh",
  "key45": "RKM9GrJ1W5FvTBJKtPAdqd53s8qRCmbiXs73uBdivskBzLDvCLu334EbbEqThXgcD6ZaoWMKaX7zPNrHhMMnCq8",
  "key46": "432AYrHQUNM9AohKq9BUavSPXbK8o1J2ur6qBVzUFLxWb8N7LzFLwXmjjhiHJY39vYYeHKLJmPVh7PSiBqXzMQEH",
  "key47": "2mbBatDMwawd544ARX592qhydA2BvcMXbPyp1WURjZpLkMB34yqomCK9ScCdvzFr5nPYH6wf3YvVkfuAyh56oPsX"
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
