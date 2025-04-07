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
    "4zetd7R4iFufFRoyR8hrP1xo3gweX6ZXTft2y1J3eg7c3XUuAZEXWuvPGY6HLHr4KbDquBZiovfYEi2Dkv1fSqea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "svtMvohbnPmQnUaevcgqgCtJVZL9RBb2DV4yVaiGZzX98XaU7XxZywP2hWBjR7GzzXFWLJrkQfZ2LWpq3cBu892",
  "key1": "sh6ocTweBTtkS8dysAHVBH32CHugyQ2EaFHiGPVeuyeUsKNdcYkn5H5oDeQBMkzdif3pESb8vXKATw3H39mRLDK",
  "key2": "3CiYur1XNBJzgCeQbA4Gdo6nJecm3kSj3xQ3xQkJAgZiAABhQmcgpwr1nsTtsvmWSFeab3YKrLkrFtu8rbPEgAxc",
  "key3": "5FH71rt34nrF3658mgXtq1TJkagWZCvERk7v71cXWaKDtUwYaHdRp5yezdpW6rMvfdG1CeWvaRzUnb16CEwVbinM",
  "key4": "2HuZVx7vzniJqciSMuy1EWDHhyJXR1yFoPCd8BMVVStoWVYQAd1xwdRQTEDT7JkdwKH22zmYUUn8HLXf5EWdE3c6",
  "key5": "XwpJbL4b7qxkD3xfeen2nxuGGKh12MmvN9M6jkTGj3zqVQNphoAPXn4q1wBmYvr9g4Dg1wYsEyd3hk6DheicHBb",
  "key6": "2tbPYS9stfowMBqkN5bZDAGKVTJDVuHcdewsMPm378EXKQizFwys1nkWJd2KjRurquMfiTY8gm5QrdWFh2Ksym4J",
  "key7": "5ScPz51dx9gNdmm7kAS9axbwXotL1JVY3v9vLMjp1L25f72JypLAo4kC5PggRk1JhAgntuDeKXgrnedrb5pv4iwE",
  "key8": "3gPHJpH9LNK66sFbKKXZr3wXtdLxMVMLnjq5ofSD1nktuutfY5QL8v8JZ8hkKjYUihfGPmnj3YyD21vuERFRsYkT",
  "key9": "63aRUBw9ev7DNgXRDKQhDMbYhZCAEfmiYwMZwomk5LjwjoSWxEXJsMjfMV8prjtzyYmvz3z4HkWz2moLSbM6ceCE",
  "key10": "4mCpxSqhsjeXmZUmg4VpiufTHxiXrfza6WcPJpqa7MbWKZ3u1XDR9Rn8RayZ62AZsdmXGYVF6XnN1eJwA95DBJpa",
  "key11": "4MnUQXPitSZzLuTbRT4HEppWjS9KxwtGmQ14u43XQ9wV8GSrSgZyb2FVSZRkkndWNg4Tcc1D8xzNX4DA8sfWcrU1",
  "key12": "5A5Haj5xEgwSyArutvRSHUp6isDqsBeBL6GKSZaeN6W5KAv5xggHDETRDCFCyC9L9rXosKq1uwDUTEvNsFWsA2VR",
  "key13": "2YT1xKssMoW5Ge6NSYX2C38kopvnUgeAVNsscUoWqnT67Wh9mDxpAaSdwgzDZ5aiaFLe3aKpEAMTA6oexNyNYhbo",
  "key14": "3tYoTqYugXG5YAgr1QvTLRPMVh1iE4tHU85jgj51aU81KQarr4UKWWasdSJZ4t6jNCZFnXierEwqViYVUSdLF1D7",
  "key15": "5sYd1rQG7TRFhoYEX2JLXaB14HJ7UwrFYxn8GYU7WmbPxv1yWe9WC6kCzai57cBBR3y7Nm2KhMGsq23v78inpxhT",
  "key16": "4uNmMR4jD6KCgpGtPNBbpgogN8XLZj6RTBeeyKYUhFnh5yUJEGxF3Z9ajUM5Fei3QzknXsAmMCozHqPQjMfHXMdp",
  "key17": "4FqbD2AisrC3wFxBdPLd44m2ucbB3a9KAFHeNdd3GVN5T5gd2dfgmdrLaBuTBMWhZg3zUQ1WFNW7CzMKVzBs9WYt",
  "key18": "4kGyiewhHfq9PwhYZsuhBFvhxACFJLgHzfYexXfK1fZnjJiHoN1AbcnwuJ9r5W7gbemrhKk1m6HfmhFCqttYY5cg",
  "key19": "5PtR8riuPodpyF62c2PhMGj3vmkU26CyoW6k1erA3ybXmrhfwLFSN5q6vDyJtqjXcUQupb9ZESDrPwtLwktRtgGA",
  "key20": "52CGdq9J29kwgWBk6Q5dgVnCrqA6Nw3kzB68pX1Mt7bf6o9EHkDEQ2hWbJc7UieVpacD7nAia5EnYxzeeGDdZrwU",
  "key21": "4eEKzYVP5VMk1bpKUibcj8cD7WthuyW2kGLdnHux3vo8dATg2iE1vsKRcMSGcRQLSiLJSfredax3VfQQ6xjGocfM",
  "key22": "2LjaxWUJmWEnHNMeWccjbAH8nt6HQYQBDMW5Z1vFaoKsTW45UnzDTPgZg9SrE5CpLDpXkFQ4hysCrsKEnsgPjFag",
  "key23": "9UYSTj6xGy1s8qewG3c2ayMd8XRHPA3sLrViquFVv7kivwXDVpZ9ceFuMVTX34pqyuhzzQS95vidro4E7mLDjW3",
  "key24": "3dbqUx56JyNzc1PNDT64gMC6tib4cWZFiERdQV4G93TckYCwMWq8mvngXKbrRpeKkstciqPHLdyAhiF1XFWAAn1X",
  "key25": "2wk2623Z25Dumg246CnACjL92cCZUkEmBh1jwmsUxBEkicBDQpXyK6tmBM4rNvaGiuxoEMyRwZQwc7JMpmKGAmRB",
  "key26": "4Y8Cae4yi3qXvs33CRwp9xWBc7bwGuNpjhPTkzwhVcQgePC339ySLPoor98bLeMVQ7AdceRTwFRfdTRmzMcZ1mNA",
  "key27": "hJPq7SDmgiSJmBHgG6HeR5hYap5FuMnzprz9GyzUHwEF8x4auEHyBm4v9CqqYBUUC3RrXWWmS5BWGCkcuk4NBKT",
  "key28": "5ZFRgo7kKM8YBjXFeWQPjoaeXpDmmY8R12pB2f2ajBQgvMuBGBR1E8xD18gsz7jHgaf3sMC3PwL2LCfHCjURjv2w",
  "key29": "2V4YhdLGRxFid43Td7Tps3vT7iQPX38GVkvQfmWmFsvHGbKqdMCnHpLY5pPCMnXzPodZt2JgT9TDUzAH2Fnrmd6V",
  "key30": "54xNsU8wQGXyLuWgZYTfMTE16qTDiHtD1UVmhFGuJTjt7kf4PUi2CZ52XYvhJZYyZjhYYUvjYGYXWc6uZV5tGMzq",
  "key31": "2DftTdhRuDnikfyw5oLVjrQRP3WutDQ6nXZPcJdXUCqPScr3BBJuZS14xTnggbBLyuNnNLChcQUMULX2C8YZ2TG4",
  "key32": "65tAjsQTasjCiAkL5L5uPDsD673PJpWEQr7TrCiesVyfzkHGeAo7dJ1NSYd12hLp9Yju2N5xFuFsfG2oQfsGfmBN",
  "key33": "2wcXFLLjyznfuRf3n5x6xkcryqD6ieHGDH3Fh8944s8n6hHLPqCrcHTxhr6Rh9XLr6nySvkRQ2UohChLRdLHsniG",
  "key34": "64bjA9RkYauWyQLrEfryqxsVNu4qTogSfvsHkk2hjG3otJJGNPtsnPfcMRdC4kvKt7pvvmJQok26CZvxKXtruKpR",
  "key35": "X1gwYLet92HZgf3fkZocgTsUpvm9UdtrzHebZ3E272f5kJXRFTj1ep5czkVbisevZEhireWFrFVase64Lsfjjh9",
  "key36": "3LJRfg7LdEU1ycLPYWn9jUnu5NwN6nU9N1Qw82TTWti9Qq4Yrxfh6h39zNnDF6WsYosphcw3F4VWpg5eMfBZ6niS",
  "key37": "2bmxdtEiuAhJ4uch8AKpPu4rLYgRYYeyi1GYE43sWFpFUFmMyHSMgouF1tCHKcBKWYtoQxuE5NKotYEGKBY89tDn",
  "key38": "24buDWPNpH2gceX6tPGGk4yW8s7ANhMPHigGEJT3HJRhrD8thzYQ89NGrrSFCEGjNF4aG6D1q4rtVaYJZkQn9Mg7",
  "key39": "aFw4uZYbFMjD3Ghd9Zz8VFn95jAux7Kdv9XuUWvigkUZyQs6w6zmrGsCoCm9QaQDJWUrCVfvecNVBxneeQ8oXYk",
  "key40": "5sTho9CRcjJ2X9PxRHFD8yEF3vBgd2uECFAZe8gd9N27dcvAQZGKB3eFQsoESFtVNDgbMLNLEdc1BGhQp1sqXnJB",
  "key41": "23yxp678ceFNZiSJWqc3mTbwvAn7PZ74pvPHowfUdybXjmCtWuETAGbu442gHkVDE3tJWBSeyvKKRZDocYtuoDhD",
  "key42": "3iLr8n9wKqABkis75s9Zevn27gub2HskEwDoiBF7qkMoj2DVZaVUN989F3GrTCvP1nD6JW56jv4hvbsvTjnHbZnu",
  "key43": "5qGmw83BtcgB8FifJvj7RZfem5bs66qHJggFnJ4yTtQSK1mytS7mXzFrgSCVZFqiWhJDMUbN1hSPrG3KmTkM9DGu",
  "key44": "54tUkrnvsgyu79BVhTDfuvGp4GsUah2b9buiswNQPQ7iVwMb4GJWq9rMYfoKJk9VUUeASfwpZv2eqfjsBk8wXswR"
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
