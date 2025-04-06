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
    "2xtQUepmsQvqMPbvzkw9RM5JJopPMcbNoVuMZyXL11rkNhNEAmSHXhG4SA5p3pSbMjwDTw7x3DVViHY7k3yfmnJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLqi3L5e6yJFZTAu78o6g6o3LPdd6xkR8sB2N2fVBnfcotRxVxayWiBqm5Hii6Ti6aQRVLTEdniUgGD9PegXjWQ",
  "key1": "2VkP1CebXVA4cNwAafredtra2tsERHcRGSoNMir5PHvridGuSJE7gCktF9h1yXHw7KrkvTxR3Dug5yDntskZrNPp",
  "key2": "2n4smHx6G14UkKtWAUHvWbxQuUTzezQyeqtHbfyGi9sQgSG1GkokHQMHUt7ZWqw32KwFrERSVKkSiw7xgpkWpwue",
  "key3": "hmnguJMazroebibZWJPhSmuaj4kSdW9BbDAn1YJY2oDfYyvza927dBm6uHFhTt1ws74qiYx77K2fAeqKSUzsN73",
  "key4": "3gcm2GSPfAf9MAvA9q1jXUgiG3A6D8dkX1eUTi2aoKjF5gb3pTdwXK4GpWG1kyxpJo74yvJ676f8yf98ZppvkfMu",
  "key5": "2PfSGRoY8KT79eQwRs8wTh1pBkQXQNr1F3GYhctjXddBhCP6wQ4THsi7o7oVNdgVx2xrSUapvs55UbNEsErZXPRu",
  "key6": "4u6XG3vwzAFYP2o6tfFuc33H4kDu9cE1iLjx2YoPnuu7gwBBGz6oKW9BsbW8jHqTvXNL8Gq4UyzypLEZfo27PzM4",
  "key7": "4wwpSV4XSe9Beq2KXwKzGpaeZumDr3CzcKPdJ6JdSFRhz5XsMphQa1tdF7Rb2cLJG5bzibur5AfH8ZZcvngv3ht8",
  "key8": "2493YGHxuHye8yhe7pgUkADCXxMuoxiRWLmZXfQfathaiAgZop1dysntkFtaG2qPMtcxpVnqAsVbfZgtuUTdXZ2D",
  "key9": "4T6vdSLRXVa1aK6KC167xJbQFyDxZZ2mPMBN1Jh5F7P36TsEty4XWfgK7ZENuMK8AWumP8z33viCCVVcWokKSfgk",
  "key10": "5t7Q2fKmE9pR4ujz182UTdmA2rQWr69R6wY5yo4JjnRwQeQfRrtbF7hhC7JheA1zUznaQAVABiM3jzanXVp8PNdU",
  "key11": "4s4zTLjRw6MT1Z1NqjzGJzBsGuu8qJZ2hMnwQ7gkycqjbUD6mszMjfRAZaeAuZVp28VkSRvhMQTsT58ygbs9tGym",
  "key12": "3Axvw63tF2mye1grzAf6XzWQEf2adC86veaX2AMMrjufm8RygXRjMuvau9W77YrSVwzMDELpr2LL7ZjkRssjBJKH",
  "key13": "4DT37ZERuW1HBM7mU4c6kPMaeXrNzVMJGXv4pXtDbKFUWWht3qwhtJCZuPW3wXkJr9NKVjxDUiFny743tgnwwnEA",
  "key14": "5p5e6ERDw8otV3LFaakYjsxyZvEkN5MaisS4YtvpVkYFkeu6jgi9j19dCFJQ5KU6pqeCg5SAdJstTsAbdEGcWiUD",
  "key15": "2PMp2z42bqxTbxBg5BdorfxxQuLbBRruh97PxdUBaDNqXgXhHtVuSD95Lz5xnXWXYfHPTWc1E43mhL5iu3mEXeAw",
  "key16": "52TGQZjFi77YTUrEHAd5vzDrwAfHmMj6jQoSWTPyVzqEsEX6tae9XG7huxWVKQDmUtn5Cdt7iTs2xQh8BMV9teks",
  "key17": "PjzCtXFTDEWiKdgonxZkv76X8Z55D6Y2ephS9JLhxCTsqFW1NqVEYrqJopWiFRidHR1TBpXBZS28S3iRY75a3tn",
  "key18": "5KtymNqfZTa2xkHXEdPmD9DwFJqsaP9Qs1oVgg57o6cGeePLJwr1nKQLbTvyaaYexEUPE7FYaoBic4YCXfpzAr31",
  "key19": "hg9p3CpTzLE8V7gFUesbg1ad2o6cefPKjQJ8i4QNwYHe5TmgEM4F7PmFTw93jfWzVnboErfi8pPbx6SwCZZkM47",
  "key20": "3vhMRGpmendeGctP1q74NuAwTmkYBcPEbcwPeuPk8VHefyw4cAFE8FHcSmiP2eE3CQDmTPckW887YM4R19dSDLAJ",
  "key21": "36L6RzPzimUhXWGboqpbBvxWP4Ytvwi7vx2kowwDr9J22i1FRBvbr8WRRMErXjJPW37FNhUm9oL2vR6isse9Qdg6",
  "key22": "4huCJBdeHA6LkRe3UEjwQvPFjAP3JmTHTastf7D3qReaXGCwrmtSr46CMp2EoVWSPw4eqd2NwyJma4uEcRrp1X2k",
  "key23": "3avjJAMCaLdMKgwt4n3FmT3YcTR61bRawvn3AWptPjMqsYqJmZEqEc6r4vM6TQAuKJfoYCm1LYQLtXSLcLKrUmit",
  "key24": "5qvt88PHvzQ9v9CwT3tK51Jo8xQqsnHzS7WwFLBcEBGBSmWnbK5jKTD662JcXB1SGye76Xi1nje5zk4tdXcLcY9Z",
  "key25": "3vD2s8ocM1N83JoWtcgd643RK57SQXiazsqaG4cEbpGrv4DoMLQTEzxcaSBBbEU7p24To4VtRToyZFmt3xV2aMVX",
  "key26": "y8TEZeXmajYLPk1eLENgsVQBDr5i31HLvWM6rEzJSUgk6qhtijeUQoG6cdQpUkJBU8Mdu8vm5ZbJCvKnHoUbM5Y",
  "key27": "5U7aLNy8SjWMCAaDv9Y5c4FLm79dZzRZu4R9prXAtGuBXWQzKfGNtFowekpiR1ygG6WQsA9akX5fpCJfcNhnMMrg",
  "key28": "3Re1o66C8GWBVuJaPKXeoCCmntTZ9imjS4a5438sa318mAce2ibM9gPGCDTdJd1mGT7hLpSr6HMpAVSJgMuMNnGG",
  "key29": "4eJsDoS8vUniEBBvT51Xf5NMAxbp6AebGkS5TfhcwYhn53rJJazzbmDhWkaTfKNaxeorA7hzqoXQnywXFDPzk5fN",
  "key30": "2cdzU79UQBWj5LKCF1G1uGdbbXXLrXiyekrB1j7sU6bkJ7H9Skb2NYDEq3QXknbKxswnC56QGjiii4whkLn3BMLP",
  "key31": "5WDkEsxEzN3gFgn8ozYdFj2dkSvSrJUCnqtVUFBZfYPMW5htvui9BLtbmBJVwm9Ufxgr7vYe8PuKvLox2ubhVU4W",
  "key32": "4eQR5s17eiCKzwo5KoapRoW6MXx4akYBLFnEghMw4H8GzBcTq1ncRkEZ4QmFPbKJURiG34WWWwPEKbQGyLhPN4Yi"
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
