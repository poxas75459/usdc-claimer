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
    "31gBp5UYNwF4UKB3vC7U7VsTFUM4VeBDbCkVexqwhZpYpjQHMnPekSuyBz6S98C5p8gPKqwDUDPiqrGUfw7MZWxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geoSLr43uwA64b6rzk5rpgxd22KrvJgFXmowjzwoqYVFRqXRydB2m9sB9bjHD87jwJw5GmaTBPBFXPhxomPPrkb",
  "key1": "48J3etth6DABwA97QyK4FiZVxHPm1qY6Xfcou2B2v4RaEDCs97o6imaovjGV5qT5N4bCLbiUU4LWuuPnjVu3DD6c",
  "key2": "5JpUq1YggTUM4tr1XB8GC5YAud5UJEcBXRVCZ6LuoSBBi3UsmvuPxieizkhPAsy9wHFebh8fZNDGvzHYHRXnUDPJ",
  "key3": "Twy3DawLF25Upq7szvb1vU5quQ25GuUqni7kKctPdHQwnGBuwwpnrvr3dbdxUbVAEDpSoQh3YsYoFVEVGc12JYy",
  "key4": "2vVoiTzvuga1ZVrbb76n2qLzZeKH4PSESMQuAL1jeBo9YtUwL3to3BuH2yjewd6vvUkzgaRUCdaNAorw4sGCREJx",
  "key5": "4nGD2LqeQLQ6uZAomFGNquTuQyoEhpJ4cu4dnBXX9TjaCHaZoY3ieqHi7i9R9bMNqfTuQw3x63kgP9fL5zosvqXi",
  "key6": "2ncpdfstaeJfN9NtJYaXhy3VZ9J3YMgn7CG3jA5rt4RQmFB1BXABau673isroBZxQaXNfspNLaUQ5SoPrD5BNQNs",
  "key7": "5VxmhTsecG1233aDbNMwLRfygvQPJPisx9ThcDL18cj28DzLVxdMZBjo5jwWEVVNJ4d9dwELBPyTofA6VwpM64Sw",
  "key8": "yJ3S8ZuW2VVJYWVfmjYhL5BGazJGMLigJjYm3YzvsrPv748fZRE64YXYM9eARKbgMFUPq43K7P4v3WkbhhUmEBK",
  "key9": "2PHNoi47inNyaaf3sG4NuGFL18TbXeji4YUTUxdrjwbYQA6RvHAshpwedBbdgfrwtxrqJCH6ECy8bbNAcNUyszQ4",
  "key10": "3dWR3gnerTi83pw3PWE1aGj5frFigEZ5inShM9QfKjsheW2c825ckWrPpW9sceX6jF12xdcosfS9ir7UwjPeH24u",
  "key11": "ynN2NNkcEdTBX1YyhJ9RxqG7nuRk1cv6jiZuV7UQivFeWBNsYAGURmGoPM3NJtfBtcxVEL2oddBSv8UTXJvj879",
  "key12": "qyWduseCismSe8gG14wx9S6eVg4rESGFsKuhbzgoG4FWgGpk9Lpv6mKfotywfAX42YjJ1urVgZ3JuxqeqzZpArW",
  "key13": "3ED68uhTDveEKThupxZh1zKS2P8daBZbyNez4SmmXC5GrguVsVg9ZB2HddoJKGks38PWHb3X2yFBEF8T3AyZ4fKD",
  "key14": "3TtWxUU3BHAFqHcdFyGkAt4A417GgrVxynHZ8C3Hzr2Mq2qRMZKJVJLZxfK6ZhfDb6VmE8hiUetZyGornjkcxj72",
  "key15": "5j48AqLmwcDzSqVFqJbRosb8kLG5diwthdQLfdi1ge2rHov4AiXVkWUQFyhoTNFZs67ePaoJRSRaoaZgErpDRigu",
  "key16": "4mPKvpMDB88hLSPKUqYU7Moi251Ndfa2cXUrWJz7wYL4xe3bRuhEXTcnwJ1Z74qPfei4jogxh8gB5WK9copH3iXA",
  "key17": "4aeZ39JibPsSur1D4ZDYkX3Cnk1a355rUWd4M29RReYmSzL72Y829Z2oo4ZW51HnNRC18SEnbGFPQUmR8fc665gg",
  "key18": "5RSZ6VvKSysXpDyyBb2PbHZxYnjYHfa2jqWBbYscNYyLT5amBbiotydqkuP5jUYX75qQHXuLFWFkxPdRmgmU3mBN",
  "key19": "35aSyPUKxnZFvDpnMGB6PhgFdFHBRYzAVS1Cqrrr5rg95NNVTLbHszeb8Me5ooU7X9bzNNs2FoetdwEuHKWeEfiA",
  "key20": "2xY66CNwsyD7gxVHkqjCboRSypiUv9R81omCoNo4SKHo52AsUKELYkWKkfgzn5e1i6q7wnsVgG6XSLvs2cjgp2yB",
  "key21": "2bNw4HzzapMURm7dHhZExrfLgUajG3CMqXfksGHie7v1zj4uQj4Rd7DnmXG3u1iS9vufArAZ6HopWfJQQZ5tGfMy",
  "key22": "2h286rfsdEJKBvJ1BCUqeUrBsjCx4JaQFgY1DM3TYxxM5oAUTiNVQU6mN4a4T6ZXAv4DfGf3gYoeUKDGaQEqfu2c",
  "key23": "4WVynj8KpXnEk8yXpnBbGL7drqmMPtnjgQZ6UGh44bZonQXXiYWVKCn6rrQpFi8ZD3CC4nAVV62uuP9f1FveGQfD",
  "key24": "3mDSmMiDehk9zFJQRjRpA2LHFNWZ9WXHEUiju6frp38YFKMG8CRimUBFSGWXZ3oZLJJcunihJ91699RN1BKz9XnU",
  "key25": "4tGiqXodQMQyokSjT7o7xPpvGn2NZSPuzxhKyrBHmBFs19wkwdX1QJQfsTWQ6NsfKgmATw1BevvruwpMA1bA97rf",
  "key26": "ft8qD9qWhqujrBPzRLMDfKtJnjpECw1hh9P85S8id28ZmXoXf2mTaAeC9h1z4PhBRLGkd1mRH6YkBPvdq7HJDQy",
  "key27": "25CWSVxCm4UGSjiBNVKpQLfpEicUKUxqkvEfKGSfeYrAo43hiJirinuyZMneik1u6aNKioMwMAphtqX2NbQ7dxMg",
  "key28": "2LfNmanub4r79S5g8UTQwT27hdGaJgV2cZ1PZkWEaXJpzp5jhndcfZ2mGPzY8N445mqUSKo6gpt4yDPmLxWj2A2d",
  "key29": "5w8ma5CdfZoa4m2muWJV7bAKEWD73MVtgb8y8qFhhqsNQG4fgtckMsRStxU6nePiw1bZJhvCsYL95xKyM3qvbvbE",
  "key30": "T6HA4s1koV381Prphuz9zASogdtcKzCsUBCgtbvgR2ukq8vwyrgFmzRtJ1Kpf6NuTcjpZET3hLByw1m9b2XES2t",
  "key31": "5ks8c2q3wFnMw8tSkQTYymYosrL36JRZSM11mmQzkZJV5TYYwkRddctfZ6PhWL8Raj68cVBsr9sCc429bCNND2PF",
  "key32": "4ZEZPnQFuqNBy9rorANcgBdG6Gh4doBgWby1pzv5fa2UTAdYe2UjH4VMCyeAu51tmnauR4rkyjMnbFF11ZLENNz2",
  "key33": "4ptxShcodGCJxUuF5Cs7pD6QMP7GLeGrPNznbmY5cJoVvnBkq6tDWGsbR4dpLGNsT3ZuzD8diNK3W8t37YLMVgDA",
  "key34": "2xYDoNppMTmNhrT6xwrr9VahBfWX9jTwZyaZUPiXqvDJYjH1ainnEuT4fL137BLfZ4dwUvZeakc78WUbEkfGj2Xd",
  "key35": "Xx6bJCHRUQve3MtyfdTN7VMQTMnYJaPb2Ci4j32GYnzb5MiPR41qUWRA2vuD9eHwvgFwC6cnafb3ek2ju7f7RcL",
  "key36": "ePa6cAB5BdvpbCTExKUyAwC8Ckp3dpR9MUqS2WupMyDygun8dH5UgrrR4CVviNxHME1js9cLBETQCiwrrg3HGuG",
  "key37": "X8sjoWPLqxoHfosvEYvamQYqw4k8XWcziyx3dPNH5j3b4Ev5hHruLZVigruj5qdabQ5KQi2kYLkuGN2rETzjydW",
  "key38": "3jsPRK57rJeR5LSs8kuJBdyaHNKYAgbqmkR1Mj7CqN9AbWXgzkHKsti2gbsbE7NE6hjwXowXMJfhfdPsU9Pb6ZQN",
  "key39": "2eZYBr2W5Mq4taVhU8KyzR37dVnrm6Uyth2hY71fervqX5HmJERivo7yU4WauNFBqsU9TJNeXwb1BoEWsfPGgMbd",
  "key40": "34SCUxL2vpbzUYfPfNe3GwNbSdFt2c2ecPHs4dW22fRiDCciBAF7MQWk9ZVv3DgRVwgMqUwEriP8PANRCSX5ow29",
  "key41": "3XFwGsUtoow917EbtYhudUpLPHXAXZ4TWb9L8c4Htk3VnbzuP4rqLKh6kgbvRaUgraumzi3DHAJzSHY9zkvYNhW9",
  "key42": "4A7pFzcaHnsBPrWy7AjZFZ7fJZkQdMCQASbFBuMUqESRL1wNoCwWhh2yXbErqAZU8rRAJYLhMXUUifox73SeMvN5",
  "key43": "5CCyVDX7jjJzr4Z3rcHForJuQfEcUKgn5xiCcwXAYzMwVr3N6PLRJhVXVAAHt3QG2sgW2examHL9NAHN7fsWfahK",
  "key44": "5GL7EgNeengj9qDJF3Zweoe8xVaz8txnfaGZeXoJN9mLeuDUorU6N8XNFy5HTescU7ukJdf6EMo8cN41H2mAPkjY",
  "key45": "2AgTF9oaQydSUW8wDb3BAH7Eagp1k62EzNJDhvJ1zDa7zpBxXg3TZ12geBuiSypMzi3oecXmQuhF4rsecpu7QUai",
  "key46": "4BGxVht2tKKywsdKFhAeSgV7GU9nFPqemmGE1BskeNfvHMKvbErcR6bs92DCZurjqUCQfJbJyfotdU9G43RdgvwR",
  "key47": "3wx5wRc7LEFNFYs7aP3M6Yc9dzNYihJbMpUCVe4omw9hXNwipdKssFuPSmReyqYpYYwoWdFrTZvn48Y2rvRn9adK",
  "key48": "41o2s4LBMWWKX4Ews1P4ebVwrYAUpxGGAQ6XvenJ78mmi79jjCWjn494YCP2JFCmovwHqSMVg659eCujZwL7TWJ4"
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
