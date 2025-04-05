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
    "3YTh7bXb5BQH76LReSjC7pZ5BYKWsrExwatLwYzyJ5Czzy7vCiXTRts6cwj2VDDRYV3npc4utS7UqdFSzLMX5VbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kk25qRiun7bcMcchUZj8Szf1a6HyuJjBiqVGDz5Ef9j1RoY7hfroL6e7j1ofwZAVbJBd3cKtqkMaYxZa3HPXXgs",
  "key1": "2qyX9oJUA9gs7WH5fX7DeLC4DdUDqoxYXkvG58tUwwfVGvX8vQDGA8BAeXNPFx81JqTqaCSvtqC8nbTUPBntwUYx",
  "key2": "2g9aDxYQcdiWzooAZPkJLu4ZQMktUqiSk1FbMzAEmKseVZH63ME39AnxJGMZfjqGLrtTFeXWH1YNb5vUHq63VCC4",
  "key3": "26ggDzisA1Xp5NL8x7PccveDbFTufE8hbHCVjBTEnLzRNnzrmd1DPpGnuz6PdqeSM4HDHQbKtTmQLQj2ex8SERTY",
  "key4": "622cziQkbhBtfqwjjL8oEDGd3j6UGjoux6BUAU5MA2cKQo6nMRNgPMbiNERZmdrs5BiTPNJjV7dnNFZGEhJBVq5J",
  "key5": "3oUqMhDEwLxsQfeg1baukqskuZTnZ5X4NwBYRVaSrntMxpCHtA1t4fAvxa5aKpUb26kKkjmdhTqk3j4jAfpCvDpU",
  "key6": "22MrcTHkKRMzzK7td3v4hvSskYZe39UkiULB41BpqzvLFb65zgU9RUE3QfXFKaDwEgEPJWWxtU3oyqNkbGL3fXYm",
  "key7": "3M3Pe3v92xJYuAPywC7KrMCsnNp6A1XSWdpBz7JyWe3j8xrcJAu9wGpAtx4LrwDR5yTqWofxXBfXHaNEhnjFzkST",
  "key8": "2qwVxmTC2MimM6vs7gMKYLZh9mg49PMM7Q9LdwzqczHCZL6sVWhtxFzggyUGNKmRs5CVasCwrGkgNzwEiSdc5xdN",
  "key9": "3FMEVBprt3S32UkCVy1frioa2UxUHtt568GBZzJfCb5JAFk66sfQKspeTfhpo6Pj2E3Zk64LigAQH3vfTC5xTN1U",
  "key10": "4jaLvhFRB5Rp3tbGGC3k3Lp9XKUZ1VpwA9JFySYF41dnZnFHRN6bZihhAN8c5dHUuNVzxiamTUdQbCEWof3EMLi2",
  "key11": "3UHUryCGSEWqPkzDfDbM2KVZwncLpXgXCEAmi7jVBHm5C3oBusaZA35GkxnN7J118tGRqoy4fJUFMXkDjtXL1ifX",
  "key12": "TTHnn3XmFkVwsr3gHYjmUkzfwtJbxPPrDPyfjdyRrjaeUeeb4Ux3qXcPwkLLXmGPgty97MEJb8yGq9Hn8mAWp4n",
  "key13": "3xyR3SkLBDnZxdV4mKNkPaRMUhZ9QrYQ5otGcydk9bYVBBFVSkqyjBgmzQdmirPkf6UH8pTCXJjuK8voFayw3Sqv",
  "key14": "2zYKqRo78voianau488HDYtN1PSp1JRD8tAZQBg56MFRBRQNyxYo6h52VQcsS8G5xvP7gA8VDZZMLJRJ5Se8ssNd",
  "key15": "292ph6nubPbaFzx5YnAmJSZyrKfk46r9B1psnweKzEdx3mMXmWVpCYBMxGvvK2Yapg8EJeDgSnGrF3ancCVBWp2Z",
  "key16": "jfvNvt3Q6L3tTB58aGMzAR8sByRfbJJ9U3PfVNnS8aDsxvbjPmaQewvdTUKghvozCdvyPAYU5bWoNsu5ZYfh3w8",
  "key17": "3jqJgxAPB8PrGJnTBTvQ91JiSR8Gq4i9SzW9sKJNXCEuTSHUeS9Cn9yALBZ6Ju3NWNysZn5gSsEMZqMAK56MoCnx",
  "key18": "4R9M9pPfEAq3SM2SDfZNNXkdav5Sd4KmUydUJdcfaLzgQmdRwWgd67qrC8diAdHEMoZ8yrzztNxGisu6oTvwtbtu",
  "key19": "41NTUn7G96G7XW7BtEVBVeH3TNMKAwPZBCfz9pXH4P7rQ1jtSJpG1KphgZycX9ugEpN9ZWaxz8c5ZPwjCyRQw7Z4",
  "key20": "2Rnf6ZKkEWhaws619ZwBbfpsdjXXqn9uFztg2ht7vbgSf3jhs9SptScsaeLETcW2uzVAXHM6PV3iv9Jit6imw4gx",
  "key21": "2sVrb4YL8f6UP4pKVLTYXso7LkfC8YboPYerPF7hRTbGegvX7Y6oXei3ZnvqqLyssabKYSBxSZTDVnaAVoJZ9aVN",
  "key22": "3eSdZFhSTeKiPXHacPUJxB5wyo7hUv915Y4h6gk6C4KaMuugoc8fkDJFh45Suzy2nhkCVNNZfGcADVHWmf29ZbsP",
  "key23": "2izdgpGVpvkCZ9goCh7fCAiBynd4kwyw1UjLf9kxfyS3WVDic9Qk9wJDnscFMbhSze1BgkrjL9AFhiKNVbLvb5xw",
  "key24": "2b4jUQqTWhZNFz3fNV232WPAFYqZWBw4CxAUAoEK9ggAKrSKvXqhfr339oo8m9N4Z9wZ4o96YdwazM9XkcvFXa7H",
  "key25": "3NG1gVBs9RxuvY6paSQabGThVLSi5jRkbGUmaqUU8dDUxmCQYtPivABE4uBLAm9HG5feEFEXABg7VRCtcB21WGwx",
  "key26": "5c34oBZo9XLPmetrV1zp1pSb5iBzrZvGjt7SCMkL21NHMA4UN5kuuBf6TRbfLFEiQhM79hrNBPLh9JCtdKL5CEvg",
  "key27": "3XmwDL8DLXzSJ7pzE8jwFayQ4UYTjisjanKudVfUCDUVnBaLsV1cyD2o4FTTkc8coz1ehy8u7Eu8c9mbvq7mS65v",
  "key28": "2z9KrUgcdtcU8UUcrscFcRisG4NpZWnDq8tULKtX68BVFLuk8tM97mRS86ttmz44TQNnNKv8TXxne2ToJFz73tH",
  "key29": "31mxvDUwZfpKv6MPsy1CpTYGSTsXsZF62Nn953KZwKHsncHL4RXyHZfru5LrjFjiNUFSZ8BFyHaPaotDjQnC81w4",
  "key30": "5zoqL1AZ8UAJyU7hrbpNAj4dHNjGNA6BiM6wED6DCbCAJqpR4m33DFkXycWB4WJ7iMNTwn9y2KZyVRsCUJStcRbN",
  "key31": "3m7HWQNz2hMjdTTXSF4ZQywodEnwrDtNU1rvj64AFwaruZpB9kZPFyB47ovXEgUxRt31EpiRn3kPQcwMamRHKz7",
  "key32": "rSU5vRakQWPA1y4H5t5NBbVSamNYwSVW2ewWSPaLFwQhtXKP9hEdbwZCwyWTWhzKK2vLZBx6zDSybEmQTqH1T5H",
  "key33": "H3GrAccxQwYhP5SUU9BY43agD64Z6Kfow8frJZdECv9KACjTRbPXLeUSttPmPyTLd85VVK2cWQXKmgDHBxc79GK",
  "key34": "2HewqSiKMcZ7o5iSMCnPdJEEZshJr2SEEaLqLhZBNsW3o9kQfD8BWvpGbkgQYn4ncNjcAn3oLhqJZx6yU6sabEft",
  "key35": "4br8J446pYosF9xckjkEGHo487MTXeR8xYrU8g79xY8y4nmUbEnRWACWvGUUdopJ21Xt7si29YCUJkCy4KHA7vn5",
  "key36": "sd222QmGdUdMyvu1v37UBR5rsEZtxbpEbizXaVFbVP2AHQjonMJMNXTko7WWQLwngRY83QvNsuDdte7Qs8oDNhZ",
  "key37": "55kbi3X92aben8nvNdM8YU5JbqXqjSFNceT4Sz1htFmKBXkkT6Rs5CXUksetY26eNoPbp5qVhj5SuBm2bqrz8K9v",
  "key38": "2VZX2oiaRh7rHwSzezkjCA5T434EKwJbBiU5NXg4toxs7CKJfHKJVwNahhdf7m5fvL2DWY5Qqkph2Dyn9e7oUWP",
  "key39": "2nq9MkZ4eeP1KpdQXzoD2ac8mXNpCrVLSf68J52darixiguaLutFaYanXutFYa8QrkArF1kJ5i6SBxnT9STA1Luu",
  "key40": "2UxnMLq275mP8mHRcSRV72H2FY3i3UqcYKe8ABL9bXeFU5kis8WmkgzELSkgir7zqnpo27n2mhEmcvmFrNdSHU8r",
  "key41": "2XiFyQajeXx9dCPDVJ1K6pQbWntzEdbPgu7moXUdVdJz18Fc4xCU6B2HqQHMSjWApQuJn7zdtCkzHocqBBV6BYAJ"
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
