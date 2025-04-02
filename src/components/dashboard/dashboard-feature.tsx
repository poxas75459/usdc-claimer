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
    "62D5jX28cDEDrzbS5ZAyXtRiowZhyV2xjzDRwhHZiEC18nLat95aici4D9JjyWJM3gZtb4CY6hXre9ZMx346Z1at"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rC1PRhtjGRjTCCNRaLdfXDXtGSWhj6NjoXG2J8mEZ55D9BAkPAsWoS2KQqDZgZ4AD9FpQ17DpHpY7zRoSBkfF6W",
  "key1": "33yRMqhSSv7rzrcSQFrwWhUwoy2MJoPs37fDFH66oZcmK61VKGpbpxbY8ZkJBKR4JraqaF7jtUKTq5ninf5sMsx6",
  "key2": "XkKrU7uVkFb1te99CAGNDeBxFRqXCjiQcnGQySW8spr44pv7SiyKV4DY5hvip2Tm7fTwM3MoUGyRZKbqMcKk1U6",
  "key3": "47P59kNoM2GGFRSroucMXHjXpXAhsx9nN9vG5DRnCLhhA3BJcSQeLdC8utaSwbWTdQM1UVFPtVmJbBuThfks9Nyh",
  "key4": "uvhcCsMcyEgSfeRTreB8cJnubEWk2pf4wrjAxwZYDVA1RahM8PvetBs3xjSZ2rxZGtoYdMmr9Tf2mHyRnbYr7pF",
  "key5": "3YrArKBogR4WMpGfu2SeqzLWAKH6VwJzwui43VRoVYZCH482MWUJMngppc4XXjsvewqpqMsfbV7QGwHm3d4TqB4N",
  "key6": "3uanmHBZM7UD2Rto5AycqtuV6wR5mLxELk5vsxWGMs4NyYx4S2z1QoooiEV38NSGwZFumEekD7426WrfHnEiLgTe",
  "key7": "3ii3ASx96qWRadDtzk6y1FKnM4UyWJWpLK4Rwe8cA4Anc51pzdgthzbhUidsYxD9DX1cDB4R8WhGnfZo35GLcPUj",
  "key8": "2MtvPSy5mSXXbK84aHo2XnRFmPXYJzLzq1ijjkmqrpte8ASegBnkUeGhtU2T8qcC3vwme9yLYNEDNxZu8NGc7Gdq",
  "key9": "ZwD4mULDfDA7xezxW6JYByFRibknbyHQAgWDMMATtTsPjs6WudsLwrNC4Lu22stsPRnrJ8d5ojWsvNqghw5GtLY",
  "key10": "563JyZ5CYg7VHDWoQoWAZ9VMrnd2uQh56ZEwjgA5Yp3cY2woYDe1g7yhGeKi6YAbmWaLtGQUe9yT6Tw7C7xHZ12g",
  "key11": "3Fayp1FGyDQ9kZUuXq4izQuvVUA72jxttYT8TAApnUX6PsXosyF16rz1XPCJR4bErr5VFyycCGXan4zA5Z3ZQzsB",
  "key12": "2zxmybshWBdi9ES4Jn5WkgzuwHQw6bpomS9eoktipW3wU67Sv3bYTPcmQ4P2UotZY7raUtLsGsMsD83t4PancMfb",
  "key13": "22r4FYFd8An4wNPWLgVQ9brVRCT76hkWjrbm7cqyz4rsNWtSo98mi1u9GReJ9CJMBXrSuDqa6mS2ygconQkMhn2n",
  "key14": "662YgBnGUjbiEF3fybotiTSsfXKLjotLSv3p2UUqefuv9GRxFbhYUsnff5Grv7qshMoeZxbuzBh8utaXT2aPjAiN",
  "key15": "BLsLmdNGbSW8dav3HWxDQc8GQwYx6y1iyC3HRKu57rhQVy8XFxANvco5hnfY7QPgSA2mqxBpr1vvbUqNRJSQ9xi",
  "key16": "3T48hGpaFerqKJag6acvugSwwSTiTYQDzNfyamGdzy3HEPuNhAw5m5Xdp5aDGYmYaiFeDkuDSfEAbQmRQMwNqmTm",
  "key17": "48RxU1oje1JAmqBpAsugmGSCLHBsHULe4A6N2veer4EQi3MQ86AQHe86dMJudkEDDoFJU15kGXcK3hHZD2r14rh4",
  "key18": "44WS7wGPhUUyiDHugBTwHaYc2LKXdrcMPehwrqMj8kYZnVTHBww9jFKrbuLhVXNU6rtvdsYjx8gH8pRWSpoV96sn",
  "key19": "4bDwi6cEffwZL98LiykjoQHq78kEQVdNAxL3VbFqtcG4tTyCvQ1bRp9wwTto8whsiuSPfRgKoXJRLWSTbpsu2XjS",
  "key20": "4aENmcj8QxK5SJaa2fcZDHsEwNKbXzGwQJYcxD2hkCMrXMryMiF1cnyFiNrTwDkNsekphJsymsBB5UbjubHAjGHk",
  "key21": "2Rb1rJ53KZiwcDQLx2oJ2jC2t9qskLaX7KmjPekp4w6WMyeYx6dSJEsaGVxAuBjHNbY5m49HqG4j6ybuBgmKpPa1",
  "key22": "2Zy7myURYYytwf2Qa3smQxnVzx66nrTjH52UroM6YcqQ8HZntczd4eyjoGRvk635E9BeGtcFcdakvDNXswsnR7JQ",
  "key23": "4K9MsyVkBASDBWZk7ZMzLMk4rpUgcPALco5aFFYGQESsCBqVFVMWf8ikou9gyz6z5mpaz3soJgwAn2hC3Z2DVyh2",
  "key24": "zcCimWfNeF7a2mdURqRAFQWhtFzTC4EhBvXf6ZJCEyj9a8ELR89qhXGwbcNLj5vjNZKd5Y14SNuLfnKTvAyawHQ",
  "key25": "5GoQ9p6ZMRVhFxv26Tr379HvH7DyGU58LrtngLy1uoFTfse1c5J93fywW2dCjX3D8bFrfkHEipTMuZLnYteWLKLS",
  "key26": "3wfiL3S6SC8XHbdrBPbaPeeqzoEWfk2jh4w13TQkCx8F4AVNH1JqCYt4aqYQG1mYq6maq6Rf5sgbinzhZoWKYhuP",
  "key27": "5E9Eyrz8NFTHkZt7AzABzJajVtqfDUprYVtXR6ieHwjkWHoa9RQRxSx6yQMorQvptbKu1iVnCbn84YiMwc7Dm4dE",
  "key28": "5mSs1TBwBQTbHhgmixRFsCwp2SPwxmp7vHm75VLL5BeUK46uStb5FmvEUR9uL913S31JGcVB59MvatZKDxLZZfuY",
  "key29": "5bVCj99Q5gYFWwX3AoqznkwxvHACPN28c97AMfhvBXYSmEGXjcaKeRzjxRHUve81GjU8BjdCsdmUPWGzxrUZLXgz",
  "key30": "JoN6QJyTdfh1zazubE9nkrZr5T521ve1FF3YwHEk7PcsFPbWc4vYt1RKGn9hUDG1TLfg55bqpmUKD5fRtRm8zTf",
  "key31": "4JyJkLtQ6NzyL1BoCL2pqZSKZX1A3UyeC7hnuv2MxDbUCxQ9hspcRZ9qJJEmYtMkmBoMCrx1vhKHQEndkw36mAtD",
  "key32": "4PDA3M7xikVWEbLxNQ9bJbNT6LxdpgCP3gMfTFxM8Rpu6YGetugWSwvKiCPsqT83cU7Ui8JtCADmHQ2tKrKqDTuZ",
  "key33": "3KEV8c6CkgzKcZnXuEVR8tLiquYfj67y1s8oYFG9U98HVS3ZiVGpg48p8q2KFBTUkKAG57XLWVRWmXZwvCtf8f5G",
  "key34": "5CNRPqtRN9dAEwfsRR6aB1bmbuUiRdxkV4Qff1C8oWRb1omxJ1VBVPaDW4qDiobBy365rtCjidsJyn1AF6Mtnt3s",
  "key35": "3eWMkFnMt6XRVT6UHZ6ebfrCUD13eAfgSPmAdw5J9ma2SwkdgjSSzJ8aD1Teeu12D6ip6DRTNpE7t9LYh89VwWgk",
  "key36": "kwwbWwQacbVghvcRxEqPjt5U7Ydsg7Wg5nSzefmDNRQ6HsnTJ6Giw3XnPmcpBcyqKewBnJi1f4UNxEmae9wc1iL",
  "key37": "7wZBdH8uSMNwrcivmTYGPteKdxKjxpgSyCqq63zPpRs2CGwb1fM2WpcfhhBRNvGhySzWq43uhkaNsgFNGNLrghn"
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
