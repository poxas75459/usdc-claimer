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
    "3ytTej3xagxhFr1GHrEATWtxN2FP8x4f1FtMNLSu51fZQah3teX4VGzNaNjPvcMbCMi6xvvLLB9ynyjDMTJLTkVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7W4CgDhGRkdrNhhRreYRYQ69qH4LmYvhU8BtG6SCRLguyUF5qWnfHVka7nWCbVKuK7inqMEumkCPMFbE8xigEV",
  "key1": "3jL5pzYdQb25U2PZVKq8TcC4bU9jqsDK2Sy5EPcWfeBbMaUvf4za3fW9Tggig1TcsyUvnAvRBwtQSFGdP5SBh1XV",
  "key2": "4iipwcoUCDjdDWBmoRcqWjoWYRKKEuaXrSQsQBhSH4Gk6sYZDu2AS7sBAKViPaztQqF4bjdQSYWmeWwk5MRjJyhB",
  "key3": "oo8Q9mNuUtb48MRk2kRV11S1atCGAaDd6n4WQS54dFuvEb5jsaBAeivpFP3AXXZAYfg3Gbartr2d3jEPyLTSday",
  "key4": "5pggHytQnpZTykX6RyYU31vaur47sMWqB8xC8f4GszddMsuRqxjt6gXubwHia4cTjfudJb4U21jXEPc3JoV9rVXp",
  "key5": "3iMzLxvDnvohTBeiNmZ5XWPzLgFb2qCUjnQAjNvuNEdEkidnUavYU6tRqFXTiX2vTUqCFxwjinxXhDMSUtwmTsQV",
  "key6": "38W1F2DZ3qzfUJivqFUHrtfXtW1wyKwMh8hkcRHrSfjKGUjzn3htNdqfw3rEq2XvzneQU99ygLqtP8VAPaexNmSP",
  "key7": "2JBPmY7ooDvhyD44grXtLTpSWQGWEU5P4Lng69yPt3UrG3LSJKcWvAPo61sRtmjpWZMEXZwLR2bFiX4nG3NvyYkt",
  "key8": "5tzv1WEzbeLT8DwgA1NUtqM4naWSFqCgLL26VcmVgiickpzpXW62XLDtmEmsTdPe447rQiWQYAdBKBgp9BRVz3vG",
  "key9": "2wF7qJVgdJrKDhvm5G2gWXa4eQorTwtxNtjs9EVzDoVUgKMYGaN6BmSBgpQZN4AHKX23u7BBsZ5a3d69vuvi9rvx",
  "key10": "78oF2EVUpKbVFj8GtJX9oE7E6WH1BvfNZn9uAna8BFjTHC7uTe6fR5ibQD32bKwH7RQhGn2ZcwVo9GELXBuQQcz",
  "key11": "28vHBQwuEsdUkbeq8yokefW6dRDCe8dBww7WP31Wnquwwo5gs6xFLbLZYqc2p1jkV5c4jhho8CoTY2635egns6q2",
  "key12": "5L1czmpJJBq2CrU7q8etE9dboMiov8KjTUUTRqEc4QNMdXRxGdDzbW6iZRzzmZDy6VR6s1LwmtBXxyrLMfn3eKRo",
  "key13": "S7ug5mxLHHChB3vMYZKMWbdouLDRLRgWQtJhMiQDUMXm7fZYCGAefZFZdKHVxtC5f6Rtgp1kRzECzSwQB2q4gob",
  "key14": "3cwD9V5DYJ7HsEJaWzMuwtpT5Z2woGyvmgqrhSDsv7dc3LLF7UTzusvoZkpHvLjdkWtWnrzMBpKgroNaT54JC98Y",
  "key15": "3fXpEw8WRjXRw22eX6hCUEcaqK7kqZk8G99yKLSMeGZxcEbAoh8QRPjxqN831eeHEqynDotkodu6EX6FE2EB8tqv",
  "key16": "2WzSe95Etkxh98ApFumYXvfdo9LQjnF862SzL725A7gPm8M882Xp6RDHvTPkJJvvnLUpf3HijxGnAL7vN9tjvZJS",
  "key17": "L6bA9P3EsJaXNKJJdwGeECXKhcvC4MBouNGWgoFLFzRJBBMjsW1c6zmQ6VWn9tfdxakmJvjNCUPhM2GvfNmnYzv",
  "key18": "4ApdwJMbGUKShAfbhudkcgFHujHpqDJdmAznYQ5D5SiBCxPiNq2sutXJ4chbmmJKVrCCoJ6tYtqCyzUdda2LjPsi",
  "key19": "4jETEApGD5bn9Gf7xLR8zvS22f272LaGeg5dbbz4nX4b6yxqr1tiJaKXH1Dbrvia6L2D7fC9dshBiu6c7Sx6pncm",
  "key20": "2pKJvLo2b5DcTRiXSgzpY4FhM8Mbaj7mpfmREp6iZyQNu9Lif44dSU8UsUbXNSx2wMs1YeegiyCUSxgpGAhTPSmp",
  "key21": "2z5LTv78shpKeVPen19WCMYtkZfGcH4SnaGksMipop9ZPsadXLTESNZkFU3ub6VyXTuLyvUCh8kcJ8Q4PXhB8VBw",
  "key22": "9k5n13sfAD4hZLSg87nzodVu3td5a7VPoEQa8EzLqa5PyVFwLVyKUtPwiTCFpjBpiVRYWyPpY9FezTBsZaoaMvD",
  "key23": "3ERqAXYfFXeYr9bHHH5DM2n2n4yyST78He3aCNFAt4vvCuggHiXPJm17ymoAgUvaEdxPqbYCEEvtBTWc3NfBQL5a",
  "key24": "5pzqQyfupJ2gaKxjn34kUn455Fr6GQpAfGdeXBF6UJy5fMRkWrFg27CeJNTcuvbVRPrcDPXitgmNJn6BpLUtQnS2",
  "key25": "2LsG1ry1GborpK8GX2H73MXPq4PvnLhwW9nEjj7JcputK7yovdpZYqpRQhhodeUFQGBGPnaFb7LZkxgUbfb85Pfi",
  "key26": "4hZ1cTWzQSUMLyadxziXr8tynoM2Z1Hvks6PhfcQHFWNU5SDi564pPJirui3bCb6bWywbCjsG11VKuXyvtsgs1Ze",
  "key27": "4MnQ1zAsbz4CP1WUZrKfC28s2G7vxuvasemXNKZ2HtC2UMeg8BPjT53JsGY4GTDPfqFmnXvVS6zQi2U7kvPNeSqf",
  "key28": "dDxAeTekyMszqAgqabq9Nf7NyLjw23QtR56mV3khQcPcuwZP2msJBR3m2SgwK8mLQKQYRagKbk8F3aSya6Gv8HU",
  "key29": "3sBbKDKKniwmj61bB89hRXbB29FkJoXQASEax3XFn39nb3v3yzBWZAX9PG7FEc69EFNY1311trmSUDTPjt3xApog",
  "key30": "4uf1xipHeVQ82YKmuPAxnALfE83wmLREoWJTCjZJaxkHyw9Ku41zwfnPhk9PfPtb67Bycix2i3fiiRxAgsgB3g9e",
  "key31": "4UPxY4s6jLeUezP34XC5S28XhUxdfJSMfQinKz9BEiJK33GhuwVtkP6ga7bGRXq1F2qRCEqwoqdZqJNU4yrPSpab",
  "key32": "3tXytunszihPz9j5aCuKKbHkDcqZ1aD4SNE8TxmrfkiSoNGY6Y58ULNouLWCNr1tsH9wPrVy6FwLTwSyhM6pYBYn",
  "key33": "4weagEkKj85oaq7JWR4gDyMenfdcsL4jBbB9RXe7NKuayGd88wmSbMDd9LEneXXZvyckwhddAbXnM8cfWJ43nYfR",
  "key34": "2wDCnCbXa3MDFE1fWUeQr7CtMankNmtSS4JeN4GziTh6JqkKurmCmyMvvUZfbyHMArmhHA5uz6NSMV7itYirny9J",
  "key35": "5ZcMXvxNyBGopmQq2G69BZ2KQm1XJ6S1zC1tLRr8krFTi9aQUWGHDAGeRdajMD5ZPvrwrTo2bqBdwSaMWNJZuUex",
  "key36": "5sYCn7Qvd2ZUdWgrmppqEgZd3F3pN4AmEcR3gkXsv1wuJytvUwdy9nWkf4J1uNkCFjANWHpDnSJh6V2apCVzyEdT",
  "key37": "4STtgzgoVHmDgFpZc1BMX7x8CGDzReyrL9oJ7roNWUTti8p48BqQhkB1tfwXnfsq8B6m1ZEiNhsmbrxJdtDQyaJe",
  "key38": "5NsRMcnKeKgTmYRiuf5YXCk7Hw1CQDBzWdij9J55gJZaNFob6bbijJZH7o18YE53KpzppNRxmUAs8fKYY69FmT3a",
  "key39": "2UqopRdiBXDNfTSveMm5xjZrti312Ba6LUysStQbv2zkSCiKMv5ANd5ZLRGiG2SeQg5rH1J23yhoUf7ZYr9294JT",
  "key40": "4juanvxaKSHmVuQ3Aw22Hwk8jFbg4XFyeqhp9bJm6nA8uoyovxkrKMceUFtEMpdP62ndteqrAvS3kapJojVLKbZW",
  "key41": "2vBHqZSsyYtJ2cSX9fi8b3frWw5YAYsuAiXWdJpPM2K2rXHnbi6SS9tspsfUjT6x8YjzmDBr1wnmc6u8KAFFnmMz",
  "key42": "32KGJ12TC42H5Nwq35iPtErHSvvjjVZeTFCXT5dNfMi9vdHcXkQRksagNrASXYWxAKqmU3Z1z89dpcQkxU9EqeiX",
  "key43": "2nSLfrHapUAk9qu5erDsREywcGf8yB2ncga494du2BgYhtQestougipTPsk8bT3WbaGTt74dtPxsKGSYfvtxZ49f",
  "key44": "31CT26w9m1mCoFAwRahEa3DhU3fTnZsbzxt8HfxBopQ6B71njT68wQnC72xD4b9frdoLoZ5sPMqTgt7Ehss2Vnig",
  "key45": "VLdXLPbw65HxKLGASy8qavXcA9HQkK6qVqgJQnMNAq8p78TvqiFpvX1ZCKY2TenJu3fMyC5pbgoZ3QNXDHqyNAH",
  "key46": "2iY7CPWQMPMpkhZmeuBeTkaPVMQxcHCGhpwQL8hRS7Mv3SEGLQ1U9tprQCZUgVF69rPb8FcNhGZiQC5Cp4aHWS76",
  "key47": "67gWiU57bbQJZ6HDPNmFTahB6XpjbcJGv9pZourP7MgiSG1pZaQmn4cx1yDz79eGkHJaLTjLZcdkxmeQMSEoNmfU",
  "key48": "2xjwRg8UpF7L3XZQTW18JWapZRcCzKHv9vp3QfhFgLshdcYRrQsySnxbEbjmszbum3suynza7sDtXAx1dwo67bvf",
  "key49": "2Ei2dWJFN8o88oTrCpQ8wzPkVyGG7Kdv19Mmhm2cTaBEZhphCqVpwkRUdC5oqoL7SVN6sp3oyMtMJKtxQHeDF1mw"
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
