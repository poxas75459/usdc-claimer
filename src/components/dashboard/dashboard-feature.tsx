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
    "aMw6vA5rpW1jXKBopKHLZnyyWHdeHdnu9diDFaHvHKNeFuxPDrH1tz8Rf2skYFjpYMBpP1zyrh1Ysuv7R5k52qY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvekzTh7EAA8Mh8EP622vhLNuBpsSq6xnxo4A6XFSgWMzYmi5o8jGxx27J7xE9fsyawAKVzg6e8AjooYQxVgji5",
  "key1": "45V5oxhUZuBEcou81ocHJ6RCEwvp7zREWc3oKkbs7rdWCqQWM7Ybr7CuEwTWuUhCTT8AaQWd2Nn574wzCtidUw1R",
  "key2": "xjCVW4Ar2BHkriNoo2FLQSXJEQzPAKQqnVW3DLKVPhtFwmkqMvg39BZikb1ULYMbCtbn7W9vGiCsofbo3YKosJf",
  "key3": "5w5X6VqU7KWjKp5aVKBvbEbherhUzSB9JmqDYV1GXhBLQs69WwGdMgJsFK1vP4iLpgppeAC6bTAwqnwMr9AJRQdn",
  "key4": "4r6t65oJa6N5916U2w1E51sTnmWaN3svy8LMSJCm83WMibXYor1D1tYDhRi2qiPAn2zN5VFbMZkJkbHsmp4EHWG6",
  "key5": "5ntq8kXXkRZEFVy1CkSUTw5cSgfqFcQ3nftPrEpRmETsviDhAn4XsJ7rtTQ8stRDAcDw1aFdXE5W66Dd8iCBLcUj",
  "key6": "2fMGqrZDe4BJLGV9wnYR21wqxY8gqTnsbwQtu1dkAasbmEyat62aESEBbF3ykNHYEEZLXo9HECwvTUHHpZD1ANrG",
  "key7": "4Dfj1RKw2hhKfjTZroTKQ6t5XAMiTVCPPgYbBPQp3AHukNd8qFRAM2X4eRpKthsMH5s1BBduPyxpczUsX6Pniqef",
  "key8": "4curoogisp6kqoUW9Nu9jhYnw2qkKMBfNJCantCgSzR7t4RDxKUak2uB6xkMdB6PLSE2tf3jwmXKTyghHSvKSLda",
  "key9": "gMeFnXxKDVy1jzcfRdc4Hvcd62GoPAju77jANCTKkooVocRXbn2xKqKa15AyNwwGjidgsc2JiiA8QxoLZcnHcs7",
  "key10": "38xPAv595bZYhS1UzLXefTRp4nwqFVN5NyU35hwkJzWW8EUDtMKqbiRs1KKpLSwGLW9jXALbVsZjziTHAje4NR8S",
  "key11": "3GYUtH3rGUuM5vLsMDs1e5zaiwc2xTex9x3vjEWYX39Hq2kYrs1b6WBVo4rxWzheR5NYeLpR3t2XesdQG5YRocg",
  "key12": "3URNmhxD3LGbaCXawff2FKFL6W4Ujc5rGeD6PqFSSZaCoYX7eYGXbPrdVPjd7PMVc32gixpq3Gh3yQRhVjdSEM3R",
  "key13": "2VDVhZdggFA9oefTC98JqdVYTaXG6wWE72tnJ3iVGAepHXSCQRTHsWp76gMRpCpNbp4BBMTN8SsnMkTJTTCcSxyd",
  "key14": "2v8E3ExWDqK1kw6Z2g5nL1b9BeHhJVEBDqRPzRQpumR7cvAwVPw374h13694c4WKWimFs6u9RPjXgS3QF4TFNyJ8",
  "key15": "2yNiX8TbcqenKcuKGqdnRvRCYLXVLirKZWCZm1YAsjrTgPR279Vaoypm6oyahufnxPoAA7LpNHXQNJ6WFbmYsEaR",
  "key16": "374UaEuSVzCksN5aPp4yJQufcvv6WvGqDvsyra8pWT4VSEZWJw3ZJPrNZ3NdtfzbRSQxGdwELyHcduMajyuDi164",
  "key17": "4gcSdd35BrsKTQqAAX5ezLtDEbkvLnvh94wGwu6XDNnvtoFy8r6cJTVBY5gEFvAyUpiMLgckUCUSnWcdQsjF2Z3X",
  "key18": "2vJJvkbVNtqRjvjLQH2Xj3vzFmpEr23zPJEcQaQYSQ7fJmKiFrZgGn7c4AQx7zM1Cu38xQKhA4v2mQQHoTaDFd9u",
  "key19": "hjKohtZeBWRsTQ8kk3EfEsGLjZtm58hoPTrDXjruiUC4n8vz53L4U6o3NyAre55Cre2qXTfWotM2CrBrv2tapGz",
  "key20": "4GPoSDTCd9Ee6jHjh4rusXSkurzeMvdZggHpBin7ZjHbMXywqPvu63ZfkBwodx1tMvSf4yf7UVQnRrmMMHui3S8f",
  "key21": "5JNTr4B2jZe27hPChj43F8MdgZEtvcYHfs8L7nHyNNMJP3WUyJ4uMQ9bwLu2Fr9tiR24D2wUPWb9uHtTMKPLQgqU",
  "key22": "3wydEkUQdBkLXs4GcsyThjfzyiPErRwHDLr97KMYFURtDmiiYxc1uccpb5WMWyRen6paSHAbGcshmeYCNYnXLRs3",
  "key23": "4vQDw2BwbAVhmERVodXqbRu8eLDyqgx5bLjtkeJyyjxAPsceNV2aXTFfCpE9goXrKmR1D43cRhNwDLrePq1NZqdK",
  "key24": "3cL7Wph7R3J8mkfm4KFXo8nT9tcuBsWRH23rs2JdiMzqChFjBM5gLVFRDSV9KbNntuEyN3HFXHCRtFXb4McPeqtY",
  "key25": "32bTPpHZSkCDs46KxE8andfa8rSxRn129YFQk7DkLXNdjZy1mKrX6yCYh3BttkEWRwuHTivcNgrcWiGkcDeQqNXp",
  "key26": "3Qetwmjo7nqv8RVBmmUHAQZ9QdpDZg2cPqy1YKsm8RGRE1a3fC8ZsGBVHmB8aoeMHPBxxkLhSyzYTGFjGFriHGx3",
  "key27": "3KEknpZUVbaK3U8ycGwFmpaaJDiAg7y8xGemTx65FR6SnQ7L8hXehCxTHwqxZcYtsYSaiuUzhovxpTjM3vXVZUM4",
  "key28": "3ZJrwnFpx2DDW1K5b6zmzgRTQCvHzmcG7XLdhwgYo12tLN3uj6ZhpUnAEEUyzswGxic2P9KPq95ei2fqfwLZe7rK",
  "key29": "3ZUmSB1emRFKJ8NfxT2qtiWiYuXo5fNrnYTU85LN9Luv2stZ8HrziUbr2GXdTyCkwJFvn2V9CisJPNSCc1akDHEq",
  "key30": "5mHtJB4UurjokwJXxxVKBUJcHWAqBi9KqhkpCoxan9ozgMF7uGjhiFqgHMgYZKqgqvkj4CAP5nGQ5GcugGB312hp",
  "key31": "4ck7hMbzALWhkTXoqThSzyZDom9bafmCCJNBPjUnkyFNcys5sRL3abegoGEdiDGRmTys7HSzF79BdwBgq3po2ymf",
  "key32": "2iL2jUf3Dn5FrpXdXeHKzBs2RP7rLKgXVqYj5CBFLr4wP2bWp8SYdWzGfg4aKPGhFNarqB2u1HXuFVgJaduf3sPF",
  "key33": "27RuwMEsrAwmSbAFmDpFu9upevuoatg4oKP4jAA75SP2bAAyKTp6aiZmTcYfT7ekyqcoQTb9sPUwNZBJbENoESfm",
  "key34": "5B7weTH1razdsbxARzhepaW7be6Uz6dkHvmpp1azrHFxJUS5VXsrcTY6ZMnWGQuCkzxrnZF2UcXi9NB3TyU8Ersy",
  "key35": "2m2V1dDqTrSk2CYyarUULbEBAvar5WXtCgNNgSeg7WEFHrydRmUu17o1oFu2oVvw4YiqAbbYSzWhkRAbz9kiE9nt",
  "key36": "3D2boWi7GFFEPqTQ33jcKEbibL48o2adRyab58orqUg6XdzNpCCj3UE3VMj2CVSgpod4dSdKRRikaq44HAxWnH1k",
  "key37": "1fMPn8Bpqm5uYRjFYJL2JM3Z7WvtypTvjc5Cp6VwXYW5istRWhdSr8KqUpRHjxdbVya1RsavqwhGcCGKzrvDN5A",
  "key38": "3dYTqXBRJWHAGyrmWEkVjTKfTwe2gJZYZgL6qzamPpQ6zrG4iJhHp5wM9pYRQp4jF83pHWvGtB8W9kXkjt91zsAi",
  "key39": "4qYG2j3G52zLdzpJ4DiL1861V2MHuwAPHGCkR2Kurj6zcZ5dnMRiKKCqebP6qZPs9wWqm1RgTpwejW63rjQ11Xjw",
  "key40": "3id8ACygPZLgWcrKLLzmPSe4ihHpxqMCnsAwLq9Nbyo6utdNrtP8wzzi3ZLLVrW3BfPpDjT2rM8tPXxf589uEhLn",
  "key41": "1jJmoWeWP2XKNpYHkL4xLXTGiE2HwhJ35Kn4gucGCWXSwdBTXqH6czA3js9YUg3zjUJ3bY38WgrHMuH9iRcWH4M",
  "key42": "4Sh8Mg2KgEApqEWqgJXQ6fiNbKeFmrz5shN9KqStQEjoJ3AE15ghGKV5doCwUenHxuuCJK4LLigxffVzBCCXTNzF",
  "key43": "5pizuonjVHi6YAiwGH4Cveyy4f4m64fL9nJkMvvbYCd7sp2eskoAbT8eHvRR4pc3RmnPsVsUCLZ9bzLJRi9kAzw1",
  "key44": "2iEjBQaVLBrA4DGJHzc5HsVNBhH1Y9MTHYcewu8iFVX28ZNsaHbYxJU21p8krutFR3LrwkaZuoY7Kec5AnYyMihm",
  "key45": "3BEMWHk6dLvvUnDwt68qiZCekcNPgdRAZvjXmN5HtuR24WqCeFEimZcbT8nzx2Aefhzry7S49e9cD35jgt8pMQws",
  "key46": "5mzG19tn8cfPYze7AgSVP2q1f3qUHRBtwa5NbhsMGsypnQ3sTgZU9H9pVjzRnfYcrMG8J6vZJk781RC575oFhHk9"
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
