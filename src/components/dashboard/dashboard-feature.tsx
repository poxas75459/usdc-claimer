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
    "DMGhzpfnGH5J8dgBEoor1wM74T5hLeCTXyK8W541ye6SEpdbzruvQuzg45gV4rWRNPPV3YnZdiXKvE6tj3CmKRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttdqsA2wDah7CE7Bf5PRqzEfQJA89EVm9ZY5dEStDDZz5dd3jTTKPrnXiYq1re6MLiJu125PFEgNJ8efAGQH7gC",
  "key1": "2HazCL2r3uesMHy1ZrPDPxA8rfLcnuu9nmuSaYuadqFXpNmpQ4u6vKMgSoxkNWfVDd9p1jHGQMemoJwZRM7WvYQq",
  "key2": "3v4jQDbaYsBBEMeoa1rhXrs5jFHbACVYQZ8jEb7VaRdG1EHtB8HAHCenptahFuuDJfB7tjoLMCaPvbRNqLRXVpvE",
  "key3": "iRV3Zyaikxrxof2tQujwa4XUnA3xXcLnBf7rMDYaTDLt29rcv7tSW8L9Qq1fmGdQyonw2TaqJrSuhwc9Xm9Ajus",
  "key4": "42bPponncwzYfMvmm1z18pQo86h4GTNnhh5r84ufd2ZK6nKEeqeBRGjLeEUS7rgYtEr3HzDJbWxbqq6LzHQMgDbd",
  "key5": "3q1yzBviNTK5RG7Bd9E5vmw3GzcvRZBkqiFZwa2PbhFNKe7cdzWYsiM5N4AfdPPDU8NEWN9Y4V8hi67tPRgzBJcG",
  "key6": "2jeHzEzgPRSHdMjBgh2UViVpLqXGL6vK8MFvxsMZhDwvJrukLkAaQssc7UJ4L8y1dtQGTSHcp5bgc9wuRB5pqtZD",
  "key7": "2yGt8NiFNweWKywdSL3r2AaZCnE5MeCrDNE1XCeHft5ko7iUco259Lx8FWKN6sWtWENJJow7dfsEc6o8XKJfuRLt",
  "key8": "5cukcE1zyGDYdrLph5n2B6Q8YsxSqQTxPRk3pdyT6r22ttcYTDU53GTPHXd2snngnh2UjtNv6q6RjmgdwkeNMGTT",
  "key9": "45hPnAurco8iUDgwtBGp3GaDAX1idbMUA2et2Z4X4VsR9EhkNJeMGeUrBbdw8xBsuJvBdAycz4EXnrj6VJhjrCGr",
  "key10": "2BnC3TnvxJdwwFxNZ8Pf1Ye1sqeLEtDEv25bw1F3WitK8EuFc2v75E4Km7ipqwHxP7rsSfDxmVzZgTdNhcLiG1nT",
  "key11": "oWD2VHuScxRp1fEW83FhUWDsrteBCgMxQ4tNb3v2rGYqaaLxvL5ejifKBvFJyxsSUQ6fyRm6pvHNd56Uh5dTJ1Z",
  "key12": "4sGWCARM6QTqXAsfWmii8vaB4sZVbE4Dpddf6Xa52rcq6dBnRa2uDVFPDf9fvNDx9LdXgZWfub1qUYWpkR5ea8Lw",
  "key13": "3HCRLG5FQkguvqNrSQWLFL9ivm2nA5iEgpZCPvR6MG93o1S1B36BsKzDvfyMNupuFv5jXTVbSqartuvPHiYxQsrf",
  "key14": "yg7T1jXoYFWAVXtMxS4XxNK1yywKJ3DnkQ8iRvFSBiqxUiigJZkMVH2x2MWW2asesuQ6HPN8zqA6x26i4GeJZvv",
  "key15": "nAm2St9F3FF7R5NEurPfo3wvRsWagLBMtHv9UDHDojg1tKcrRMbHBAh1S6DeTi3pNUsXu8vAqcM4MLa1qNqa5a9",
  "key16": "yYZ1wRhN244PKUpg59WnK3KbNd1F2o2eXi6QxWJhBz23k2uMpkmmj1HmMnnkbyGsYkD4SxXfMerQ4evu4ugz3JS",
  "key17": "3qax63PGCjoN16pHdXT1hahhu7Kw3MbnsbZmxwQzVZE5A4dtms3pbaKmgKYyTbzfppUFeeMJRt9EUQaddraNYqkM",
  "key18": "59MrjCuDfMzqT4GGreSDx4KHU7LJtmkwUYhCy535aCK4jyYg1MBFrt8z3vmkoujHw3GcBxsNjwYWeZuSyBV3T9gX",
  "key19": "3LhMwUzADpnWY4njZ3caBzV5t88tuZBrCcgHCx41JDbDw3YRgjXDu1WPuKddPwiH7VbRwBFBMRp5jW4Mj1G6tUuM",
  "key20": "5bFiKzqUby7zpeFWYCvTuXCor74Qsj9oNkHRZ4gmLCNmcYsCmy8gLKtnk3RRwC3fzn7WFxi1xwjEY4Epka3qUFXA",
  "key21": "5BsX7vrPNV8pGyVgpnjWmoAr3VxomZnYyBUNGsqS8A7zF4KhSyf8tx3Gn2BVSvGDn9joBzRmzUqEBTgDE1o2mKR5",
  "key22": "3t6VNFXsr8uxv6tutzSbU28QAZriV7SHXUwCzdbTwHBzCwBU2WMDz8QMZ5stdfgRiFaJAMea3ANaVvtfU2E4a7Xi",
  "key23": "URTn1bHEEQidpM9YF1EHjrKwHMdRfeWiWE7J4ezELiWfb7WhC8Ru6B9879gQjqXEp2Yz5zyi2ayPmV6vSiqYMG6",
  "key24": "219W2YdWERkqwdpV2XebZVU1ntL2Q3XNEnAeKNNifZS5SWXn8EAVfDWXeiwnY2qCVBHoBR9zzayGocEoSi8sWpp9",
  "key25": "5zRtowxwjbu6ognSJqYYQyBJXofxoBZA68jvmTyuANo2zp6AHgauG7gjURHVaGymwkc6sf4yuq2fo7F8xrRQhGDQ",
  "key26": "3RUDgYWVjhTRSzuUZ8bTruxfbddJwAHPq4gmYU6MY3WeekHfoWTxvaDFeaUkyVHwXx19iMgQHC88tC2vbGYE2qv2",
  "key27": "3b6cMBjBNEY5Upjc3cJLNVgHi7imuHM5d3VNbAtZkWWU6uCZNWeGiJw9hmw9Afjmxi1YZut3AX9nCZ7qXuAzHjhH",
  "key28": "59rq8FQXRZkPn1DFaszrHiceikBTYP6VKyxrATVnsSK4mohUBtye2yErTr8164UohAm8GT83fCL83xaAspoRS3zy",
  "key29": "2WQNycCCCjaNsggT8egkgooFbRNquaXtsoaWA1JUi2ZJmgQ1oSGL5SezCVvJYkzuxDsCEThsXdSQjbvcnPNsBqdN",
  "key30": "EcY1SLuF4AuarU7VvjEqWSFCczr2nAAuGwkj9vX2qV4LSf2CR5YdNjU5AEbkLtwDxzQMnkoer1HePvDTzUen2xd",
  "key31": "EDSytkQv5nB1NTxVpwTXcXRphSVNJrkaZiZ7V21SGZkEPGWee7wAYmgf7k8V69BmfEfALAXRWNxtB1GeEyGRfA3",
  "key32": "4KVDqtLn4XuibfnxBXsJiwJ1ysYQKPFkLsn68xavkYjwYU2zcieyF3Cwwrvs4gzLTh7rSAzyDdV3k6c2nXng3hcg",
  "key33": "X661Cdje686tdjVseMRJAxXxNrPd8ijRAwAKCbeVZ8g9JC9o61QLTehJuYjwAk4EEZ1EL41o9SeHX8t2Johwtke",
  "key34": "2AgMmszTnWrCe2gg1XcwJ2BtB8WEkUkUtscUsbPr86SqqjugxxCsrMMjppA31GwhwmSZDNbg4q8t4T9nt1X6jWTg",
  "key35": "4Dh4vZLmpujncJvnGKrvspLmMNpKQCSJyhcbiHScpWxHhrSTpEgqr8PCnAFf1DPfj5QCAg5jKWZ7vcHsoFX4EKKM",
  "key36": "66hiKaTcVxKEdtLxDaiK6Ew4oW45naXJtnRSRyJWTeHWxUkzbzJevUFgsWT4KoN8MJiWqgwA818MfLBeAZiMBhR9",
  "key37": "249g9mzzPZFztvduX9vvq98w4j1C6JDXDoxXxTi4fhVbQnUUYe3z82rFxBd1o2sU4noRm14zht75g2ipaLv5cung",
  "key38": "k5357HgPFezpbSH9g5qCMiUVFD7CRSjMeKdjr1ihHcL1c8RnvM1L1ja7EVGMbEXW59KtkYUQHtkEvbnZJ9ZqVGZ",
  "key39": "5Gru4az7ehTMiAtwN6u43sUQ6k7M63hkzS5KAzgZ3318uHwaaSAUMCrdi8KmkSUTqxfbH4J1bnUrpk3YPfTKxg53",
  "key40": "2aopdgCDY8NMjdk3gfxpieW7TSRzrvuutF4sus4cSEPjgupVA7JNEkoEWNNuDnmYX8pdj66wLgZRdU1hWBceT3D3",
  "key41": "4VPJwAf29gu1G2c83oQfRPHug5GfryaJDbVy4D9aJNS5LyTX561y9DxWWDvPfXWY8sVujRzCFiWm18xwbcr1ztPP",
  "key42": "4ZZ8hNkJRkv2Qdfm5umox92yBejAzu58jC7K6yWxMG9bCuBkn95ZNfJSZZ35dEiprzkk5zqJZsshddcLLzEExsKi",
  "key43": "4DmyQYTLVpE4uyfkbS6xEqar3tUEeEUnJhzW8e1BVVheErU1MfPv1PvBoW1mVqrevomZPFBnHUbcD6KRDyrnYjt3",
  "key44": "4MQxuEK24Wa1cwwQHLN17geX724JKtekukjomEys3rWXVKvoroLZnw7xjhsYDSUboswmC33sVciwkbm6632L9FtH",
  "key45": "2VHRGaPVequ67qzcSczFLV9HTXZDpER6doiypbSns8i3CFZovq24xtR3yXstgrCKotpUAHkHetdFKm4gKQinx6Ga"
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
