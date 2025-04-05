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
    "2FdwpwUfuTcDXoHFiuKf25hhPmFwPe7giMDadxR6UGUSnPoASR4oedw6qsNFBEBSmAWLfxcTCgWWSsgpP2YyXcg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "416TpMyLA5ggkDoNFyJAMdKcz5MNZMyVi2WzXNzSNpcuR8JjZU6YZn9TXiwF4c4K6PaBVrAR7PzEP4dHGtWVtwgi",
  "key1": "2bc3s4s1nSC8Hqurjb4naxjKBguyXvJvZUYABRgPYEhpvEVNrNFajyjdJ1WKYG6uF3ZfBMP6LE1sWFVgmHEpLNDn",
  "key2": "h8Qqr4dRZCesdc7PY2WDSMWNishqAGRmT4DDgSLburGQdM5MKWab6tXzJkrSLbPs5QXpMtvu7yR5iK9xfutrubc",
  "key3": "mc1AWbeRjf6KM6j8ng4CvdLBY6ZaQCw4qohKM1foc9eFBvG4LBynJTp4Nxvqvpy9nZPhTTVqn7ycBKEJC1BBMKa",
  "key4": "4pYmrBefCdjHiMkUSjcAQCTHjiB158TC4yxr6BkAxuxmtLVpYeMv2HDhE4QookevwywBLkHPTWYhq9dxmh63XFu8",
  "key5": "4brCJfmQYc5ZMqxNPv1nNL6AeTmeBFFVYiUSZyCetUga2GqDNnYsNuVDbvhXkNy2ZSdKvxR7hTwtrc711zggjkjY",
  "key6": "4bzqZ63WH18f2aVzkW9BgTsbaVuCkTt8jm6Ksn8UwwYSX2fRJkDCzSzt8JC5kwgcUhpAxFh1YdVyhNNb7JHHu7gM",
  "key7": "527WbMFLenZvqX9dHUWht6pSCTsW2bevDLmRH4ypx4uQDZA9vGjsYtuQV9SmkU24WZRWcL1X5KFzQz3DfkN8spaE",
  "key8": "vKDmeSABzGqQGkWDBpx9noP8U6gY8MnMesjCmhr7yJ5i9KdfSLQUK1FhuAsRfCFHwzAtmJxyMKQbKvSGKzbH887",
  "key9": "2PZJGW9tbf2YUGCdo7pFdT75iFYcF1fEHza8LCowaiP1ZeuDiABdqnN95vYBLKKAmLH9k8E4kYvy5u5LwFbEwNFb",
  "key10": "2gmpWKpkK6RXNtPsFdhcijWUoPWeVL2BLfmouphMNEK4J5yECY4vk7p36QVwuaof464qdvgAJJAPNfrxgfyqPsDD",
  "key11": "rhbVPBs2sFk49RXDdvpgCQ69dBeDywuvbeE7cw3wjXfiPjKDp3k5cbggKPfUcq9Js9vBbZWGt43ueCBxbLtU8ZU",
  "key12": "2huepdbipub2LHbtF7PC7yaXHRZZoZ68m2dJRoEywhrPw4Y6mnGC7YAsTK8zWwUKbVFzxt6kmxMYfsH5N3Awvj5H",
  "key13": "eHTVqsjWySuTWM2aRN7AGVoKWDh4qqVnseB3iM5RohQr9jtfbMgsLErpgo7vnFtRThKwWBhqyU552em8dAoYHuG",
  "key14": "5sk4xvpxojXpXUaFw9P5a3F5zggsRkdEEywYnbuGRn5W9PFxP9kF1UvMNmMUMmA4ZdTiJYEbeaUpLkaH9jQftRih",
  "key15": "jbnWNDeSmXuLzwi6gajtemvpSVks91fo8Ew3rSiLMHSzGRt7xPmiNuzxmMqjZbn28yR6JQdJMViC3YZsj74KKEt",
  "key16": "3AxTdSfQ8UJTGGYriqR8x7LYWMTf76puqwRfwbrdfQTnHfapVbq4JkBuuB1wqTRYUu1hWULt4QsWYQX7BPWZtSko",
  "key17": "3yzacjeEhawrM6Uf7q2gCMZ8UWPS5ju51p3SkJsKQ4cPcg3mAQ4q1aHEzx1KtxXGeYMnxXNRfoXA5kEx3iD6r5rV",
  "key18": "4LZq954tZpGZnWbFwE9scvGnRrHZWVAYDm6bcRBYqSi8WrdB1CsmZxhbBVQz4tzWiS35THV3iaZrdQKJ8bdG4Vxh",
  "key19": "565VVhqRRMbK2aAbRYYxE1c48QA7MwDdZ72zmht7VmJ3vgkEusTUfXhgbYLxrM9n4Ko54VB644mN1gm1gav1BQN5",
  "key20": "36WeKZxKc2Y7WKtBka7FEgdacUmbyGkQDaLVVdvqHxBETzedkye55KzuMxpAHCjq3St4DN5bgKhj2SwVmfiFWer6",
  "key21": "4R31YidojQWJxcprqGSj8RN66Wo99swSDX7nbm2KksFyyXXY1iYhF5FqCJpPXWu9NU9uch1PvwkEsUR83wSyMvKQ",
  "key22": "4dTcfUXwSxoYJo8DSu2HL9tuApGnBEdpkpBM6TeHigyKhpp6BG8bNFbZLEtouN9uWmjiRuU25m8EgHifqfFzPdt5",
  "key23": "5z58izvY4UNjuaHJGG42UKFSSA7UBApyTTJt1W5HyCoFw3sVhW1jpJzbF5h6s71M2N5bGZGLyym8d4dnqhkRvehd",
  "key24": "MAocv8ykYZZsJXeodqJ9kmEpneo3dBcysVVQzAX7vgnHwHfgPMyQQJZPdA9rp3C2dQ1zhbqW8u3sAVj9zH49QvW",
  "key25": "44emtAx2NyZc78RkCNh2Zb3DwPrGAqc7tu1gvAhqAS5YB9R3w9HNysW9Wnhgme6sDTnjusmiFiT1n3izNU6sUxLs",
  "key26": "5FRJ3ob4eBEGcjnv7wfv9Ec3GwDFPSwzHwGDdRThWqCYBRCeFcowq3ztX5DxX7HUuXRARnuZrS4GSvCh1YLTSoRk",
  "key27": "2y3J1VrFZqnJvWrW51d8Zdmo9AAqw9sheCCEBfQKYy7uPcUsk3dTgbX5c1He74Wtv6eihQuCYAYTywRpBQTwcxQE",
  "key28": "3j4NaZypzgtYvXiDYZfHXNS75ZwDD8SVcsNWb6AEYGcDpr4sch5vwBhBmFuAdfVxgv7TY9FEERBk6GiYgvB9mDkG",
  "key29": "3ubkhajPYg8aZBrYxxDG8vY8oDo9HGeS8WDT9VQ36dnPiLtmDEtKYDquvAXxyRcfwxnzq6enNn1Sdi5mbiURbmBk"
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
