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
    "431rknrLQWb4y7mkYwHcPguvwu5E1AQ3pX3codHjgpbC2QKiH7tLtsGYcYeNqWsAXoXVSEPCnus9CsaEJgxz91zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eD3Y27ViLteZfz858Xv721Ckm79LeB3YefuV9CtyB9BiGGZ54UCdmmdLnz5FgjABeRf8sMMzGTtrCZNnX5J9GoC",
  "key1": "266uvR29MbB8k8VYTTfYtMkBsmEvpxvShFdJPfBHbqwhxri2vVGzfSpcUmCSry4bNUkBfjy47NboXqt4wSjH87GR",
  "key2": "5kHNRSjddxTX47XCvbhd1UsV9E61Dh9A9dpac8ScxAUPKCsN1GLQuXQ2roJeZXZJJ8wfPJWoLmg2rVggC1pV75RU",
  "key3": "4cKBhsDPmQ4EAiTz3H89dPDSBKAD2vQ6tUMzEB7gthBqQmPAYiZQjDQ6AHJ316iL2L6dqPMDZ2LQJcSRoTgg8AQ8",
  "key4": "3ZsQ78kELMsVvcK2HzZLLp2kfBHsQy8NTRMaTmYvGCW8oawzNQim3JLCdrsMuUZ7kV9i6YfHtsvwNjJ1A7WFAd7W",
  "key5": "gyeddgaXYPnR7NgR4uL3Re1X3q5fj4L622dnfoecxc9pwgBTdUHk5qQVewtzboP7ijDyHoGPTGrmxB7kHQmJg27",
  "key6": "2cT6PpCNMvePzc43caiHpJ46zjF651CCVY3ekRyZidLyvoefmyWLwvCWpdoTUnMduDADGKzmJj45hef3qwYnNh8o",
  "key7": "5xBQtioc2bKSVupTkhagAPpTu7ZkqMk7tubzkAFxKqTHKr9S22cGBkRkjMvqBFBVjijpLXwq2LxVC1bJzFs46uKj",
  "key8": "3BvLy2Zbbbvws3YH9YLQrmHTH2HnYiaftJUMW4ZxQ14fGFZFz2DVeaN2h2zNji1HRjmUEThiEXrhv6JzcduoFi2X",
  "key9": "4eQbod4NqzNrsZMXUyizo6s8y1TTd8aZJdSYuN3Dyf6sWfQzHUyTaGAmKPbVxJfHcAJ8B2MvQEuqAfoYjZAd8TiT",
  "key10": "2qwuskUwdHUzpnrLePLedahuvNpfdmBKiCp5JUvzMUjTK64wLv3ZWejQPxKkgufPTtvycb9uBMemrkFFhCztVAm8",
  "key11": "2bVty5nJA2BdwAUUycjr1b5Np19zhSPz9FFT4Qr7DMXs3YRRZ46HDiQus4jYy1AYQdVLZzVsm5PLCxbLUagWfXHt",
  "key12": "vUaPk7UBUBxjZXk65bW7T6G2eyZwhRLQaGH3XBzcHSjqhTWXjHfRRcBLYNk6r3VNKVdjDDqDRsWro88LDgoqEAR",
  "key13": "3NutBYHTVvgUVfiPpCbQtvun2fZe7wgiRdm5wYw9xSdquHF8WdU793skJ4jgTR8HYKydtpdqVziMe4HP4N7S7oke",
  "key14": "2UJbYmZLGeSE4GZTJYotHKBvB2yxLtJYxPd9BFVgYPFSbSuJML4BwVh28NRMVHmnGhLN1K2jRQg7NR2dVNoeopj6",
  "key15": "2Qu9ayvk8BqNqzhoXKMQf4coBk6G8Anee8fPvSETuALPaxRgThXW9zXNL5XFop7usS9f2evD9oG8WLeAr7gYEFbk",
  "key16": "2TEMNdC9BQQcmwwGNzXJrMwV4RLiJSVnzGieXHNymySgrdwL6ptL8gCo4fqVvsEJPgsWNfoS2RAMNULjoSkDEaNP",
  "key17": "5SwZutB1CFvCoLvs78FKMcZd8xJtYLepNdtDKuSMH1DecDZSYvEXzWtRmyCM1yXKj43qW2YFRHG6BJ5NKYHsWbmR",
  "key18": "4TS881YmDsjFZB5ZAcejBA7kDs7tJRejivPNTcWnancv586sgjBiC3PpJbKNLohpDLZTdYVKia6abj2FL951D7r9",
  "key19": "4pMjeFbjCLKfEYeoYvv3YAkHDNb6QxZQAwBC4D7tujF35Bajd2EPADuNpDLRvNBRWuH6s9PAvBm4eEAJxDqUJwkm",
  "key20": "4x6MiAgoiSTs4WCuw9xEondirDi9KmFcTvKwjz6sefSZQMT9zfKpTHRJqC5zPcfD3xkmDc2sbZTWCCVmWtDsDJYD",
  "key21": "4cVkxPemRS6h2E5ThVsw4A9CAwV3r3eUeQ3Cb1749wUCHC9JGUMFfXv5mJdiDyeYB1xKksSLowevGSsPddaGNiJR",
  "key22": "2wjuDrLwrX7JLUD8CgxFkB5dtWtPx8ofLKWx8PSfniQKLiZStRfe3d2NcksdwWNsr6V9duBQYZdxnkxro7FkGVd5",
  "key23": "4JgmXtzmGjfsFNfwWAHGEH282ETm4pngUjy9eRminMkDUswFbV3NV4XXHPPyyVd69pz23MVamu6mjfoAaAJwLeRW",
  "key24": "43subwtUtnHK14EHywyNhW2Tc28iK5tyoZHZwaqSEJ2bsupHo4tDQeT98kP2MKGK8trUyYQsQUjgWxW5UWdxjcEG",
  "key25": "61Zhbp2xHzCAo6PHvC4Lk9tigYHSdfSr4HLtdzk3NzrVFmnB9DP1FW7pCTR5dazR6mQwekqG8rP5kDSuDdfvo3Mc",
  "key26": "szz8bWWLwGWPvXdAoofybscQck2Y1Qds9Bw1iNEHi3MeoNwBy265cP3wRUdp9cJjCauUcmEXW1SariEpuNXZZAb",
  "key27": "5aBWj9N3vyjfabdwLWMq9FMKQ74EXsxWR9hSXrhLip5jHxhD8fmZLyXkQfnyYBhV8D4KdegPGgkxY59McngbPsbt",
  "key28": "5GikfQ6Vb4UFFNV6jiYSybENChBrxBaZ7J7YXT2mdASzEQYk97kGJPM1NMudpbdtZU6Jnngwu8HBK9YGH7v4LwrN",
  "key29": "4qzrrTUv1dgFswWPdiKGWNFbqugGJNQddWW8Zt8mZkBrDi2CDNUgQgTSfKTxm99fDARdBjSWY4WHyX2mnyHVGLUr",
  "key30": "4H91hMNoShUorHbqQBURgstJDQDzWtkPgN4MAuo7Uuf3HwXQJw9zWfJXMRL8zPCEQi3fHAnWN2UY3GsRkrugwwy7",
  "key31": "3LG2fmnV2PB18apjfGVX6ZdZwhM2BNQFNPqpcWx7834QfxndiPoweDHEoEGferYisumUvQ1ngo99VGww9UasDpHL",
  "key32": "35GLgsoaDhf3tzuhUL5xGC3zdy1sCtPab7pGPjSyriHyY59SnaJjvABvbihCn3uuKHjzrDyPEHshkfAGzSKA9JNV",
  "key33": "5CK2naYy66tuqNBvFRqPWcZsPJdCbLX7bijJ2Tohe541rSs6wXnr4HBMogi71NHDjSpLbapunDFuLnQzWr3f66Ai",
  "key34": "4P4CSqJN9EECxsZtfisvqBuvK1b2FedPGUnRnvP1dSPxVfvKzcWaQCHcfrXbTercW5bw2EcHTataPaNzZYQmgpbt",
  "key35": "2PkQjtcD3FEQZZjWHDThS4GSAxnvBaDrfxqmseHHoKKTZN6fCU1CxY6j1s8VwkF12be3cfFTmpLbvVMGGU2JBYzV",
  "key36": "bFhEhsCHkU9TG6PsvKkZaDcDURLFfYDSt3VkU79fCDawDE4bkYahVRfoBABFnpxGFeqihDwij9xWDwGEuTFKySQ",
  "key37": "5HX7Ur8y45Zwh3LWBNx82H1TXEGqo3ZLKc8y8hbzCpHSCz6tiR5MnGQQPu2Ye6c5Q5T4L3oPnMtdfhbQBJpEsgix",
  "key38": "Z11qGH52j2b27L4VuaaLBWRdnVbFQwUikEckbfptHG7rmfeUe4Db32mDkxhcLDZWS6jQcJPQBrBYjxBDK8wJ3zL",
  "key39": "4EX34CDVAFk4gS3CU6dxm4xW6ukEEMsPVuY74sutKNfVKEuTbom6g4ykcgvsX7xmPhgStHipCdR7C3B1jkp5mZtz",
  "key40": "7tASD9W5wRprJGrgsR1ErUsFW1wKbaMVByrneDYvrmKCdoZkLfmjHYZ7sND46isdQa1dg6EK2GKgb5NgAB2Re9T",
  "key41": "44LstK6AXxXhF8HUruuzgCEGNDu7eRBy1WocjotqLpdRnDRrebTM3KKbrSRz73GQNd8jDBZFhhDng2YJhqPgiGbd",
  "key42": "41Do6Hbou1H4rwsYQ2a5qcYVSLDZZAUyd3PEjY32JnUhgE56GrsLx2s1QhMfAs8KV9LAyCf4tJvqW3dyuYBJzhkQ",
  "key43": "5FKwwTJX5Aw3W4AREkfVGiTwBzEfpm7YhFRdNMiBBLsMwP9mhLy1LcbQffrWidb8ZVpf1mYNZEkJS1TZaz7roX3N",
  "key44": "3fnY8aX7qshPBgkHrip8Z4FfDAddG7xmBA8qnXGXyqnAS4wezaZdaiuQXFSgaTuxPs33jzpYmVnJhD2WcMLNPuka",
  "key45": "2R2YF9qc6WF6CDDYeeptGVKqzqUNjwgrJUWYjrofQKG4ayCRD1t54uH66Bv4oQGDwV1dHUH5oyUtdopEdpVHnrJK",
  "key46": "59KBitTHPDrWZA7AQXXiVsJMDX4kby8t9UZy1z8TDwybxVbkkxjNfpMvYxMzCJjZSgXVG7UHLpcXkCrnm7EZ9c7W",
  "key47": "4PZLqtEru5Ki6Rd6X4YCDwGgzJCCZSMrfgt9fnZ81DPWk2VbH6AVD7SvUxFU8M3rTYvfz1y6zTRN2ZpA3Af4u33L",
  "key48": "42RJN4LFrL9yJB576Fw5aLXgD1FvnrGg3ytNDDhCT7eu7YHs9xkX1v11xbhzbZahron1SKeoejUvKbY34RtizoNf",
  "key49": "675ctEinBHB6P8c46bsLs3mpQeYQmBZmSEKaS1r1tYvxUUKQjJDBhgEVAoECLQKPtMk4Tq6e6p2NQh6UcdXPR9mu"
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
