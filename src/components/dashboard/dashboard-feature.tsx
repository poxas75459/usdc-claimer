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
    "2rNFr4rUxRZ13K6ZfPjjnve1ZfXVuD4cHCy6a3prRAA7Xyerm5tBWNPnJVsZGUUN6gbbs21FmUo38rraYzgbef1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Z5Qzi6dv764Q1tqtERrYvk28fUYHJwCAMDsTB7ZRdKSVpDLVtEjEFDE4nmSYd6dCWXHW7Lsy89rkjuSpBzftCX",
  "key1": "2L1G3HBzPn6YzXQrxdZiDqk23KsxZ2NjooL7oTFEo2d9jhMPeL2bnNfASyHtpJDDJsD4v4e66Wftj7eXsjSfsUEo",
  "key2": "5k84hMrm7KN9njYJkzrDvAyfFTWMNoufA3bg5PRNpafcejyawGbwzvESRnVsQvTB85Mwo4BrzGGSsyRRdvSkjjCa",
  "key3": "4VGLErYeXZB7iA8mGiP8hNMHTPKDWXMuua3GZqpwykox4BgCTYfiE99J9p3c6296WQ8GrLUKEc6Jd9BWAQ4w1xEg",
  "key4": "9Q9LxU2FCmpkcrsnUPFD7SLNSVfuTbRobT8sxrtQYZYLcnt9JviB9e2rb9eiLMDBQJbtyxMbRWzrYnhMVH2g2pS",
  "key5": "2ckzEYpP39yhweTpbMuf7vPannAcN1BrThYQBKBtdvJeBxDMq8MhBVbckSjro6L26D1Q9yCfzXVJabWbkgUkBHjy",
  "key6": "4T7ftrjvSBJEnaqtXnPiem2LUdKKbx3uErLNpmJFN8x7EUt4tqVtH8wyvFdMtoLZ9HCWtG9QbtVvi3KyJma4BoPD",
  "key7": "2DwtG56HLwojzy12w2zcyN6JEJ7dvjRQTDN3CxnK6prrr8Wsu2JZ8LevoGx4bUzVNUosyGCWP8hgqJNeuFY7ZghX",
  "key8": "26WQn4Fwcujr62Z8WSypwpme4APiTTNKYkTrvrJBq1x5EY1FxhvhvNPLdPFhpbYNx6a6TtoLZzr3vHKzgmsELkJf",
  "key9": "51AeaqHPEKEDidWhhEpZ5m3V9Bf9NindbNfgGfLQidG8GgN1gc4wPC8tCQtwxedRCMUMttrtE7rnbPdwM6do38i",
  "key10": "5WA82dW9z6eHcXjYnxumEqkwvxvE4F68UXJSSdaZwBoPEGgJAPZMkLguxBXHJ6HhKbBpcZ6giW2FjciUPMLtdGq8",
  "key11": "4WARVKtKCJvx7mN8KH1HqEQYKXxKpA8zLX5DUG1bKyxHQHhuTyyjJcmxoW5NH1TMmgBpDbRPSNgAzVUQp7isYKys",
  "key12": "5dbZKyFCdZvzwevE9BmTs4SGdzU1Lu7k8kb3RmRfwbAF9m7vxcwU6gGhuK2K8gPHWRsGLzCwzRpPYVtyGftXJt1W",
  "key13": "5DKgFyqKUrD3H58rk5fTdr4pAQmdNTjTCJxSfNn4TiLymahH41dcMJFUyDfd9kLXquvBZCiTyxyBcf2DsCuRMWsq",
  "key14": "2NeFwWoZUzrB9NEBPRn7S4VxrQokAMWrmK5oQfFr83Wn74KTrCxm3kk7yaqzVX4d8TFLi6i8g7fiK1rgyJv8hbWq",
  "key15": "31LN1RfUWBTpkPMKXC45MWb9naPfhLJw6UwLYQCiNFyjqQqGpb8o68JBcBh2NFm39By6vagDTR4aJUMxtUdtoJjB",
  "key16": "5Krj8WUTVrEGZax7693gwbT82vQP2mC3iMrhkQr4DuhjCoDPd65hMbmmypLZtLG1Ewj2J8CKzvDv7Pk9eYWkujUY",
  "key17": "5uQafsHNXjGa6f5Cgt3ZWSL61iKKSds8P9KGnn7musUpaA47A8NR8cX5Asoj5yJhis9eRKcVJn7TVogiyyn1Sobd",
  "key18": "4R149apqcv7ZmrFTcwq6QfrzPNietonjH568ntWKBzPQftpQaHhyEeL5vXaTUFPhXw2GbzRvKnaDdpL7hZfUcHaQ",
  "key19": "XczpZQaeb76SiA9n2iMTUzd2J84tLmxQSppiqhMnG1xXBTD6t32dSgKhDAND6Bb83qNf3cWbppBqsqqVmbNwdPC",
  "key20": "4ZJd7mchyQMCU5Fmg6yf8P2vdwtUt1PVB9zYQftE7hpRtWhkhReJJyinLHoMNTMnupDHpXXvnv2XZVH6LxmNFKiX",
  "key21": "5av74PJZ6zwsD3nbSgPNCCbuMDcs7EYkPiX39xFWieQm9Re7byVGMuS1QSqdJCavUUkmqBsqEN1jD19ACTciMRyf",
  "key22": "5cChueFMTJasC789kAHHjHkTQ6MPqWHPRemGneoCZEJubi335iV83EhsGXxxooCXt9dboogUCsyVcFf9MWoHgZ1P",
  "key23": "4kqVLwM7siiJZzg8Ezk3EL4QppMAoteFdX3VATJDuaSVHmZFW1zktwWAAdxmRYxJL3jxSHS5SqrRUMAc5dZ1DWNP",
  "key24": "3uMhggCax1CrXDB5ohuVPNtXL4QWkDqMHtAH8nZojN1Es2PV4Vj32V1UAoxcybsVKrSfJXnChQVtUTHuM32Hxg6X",
  "key25": "5FBypqZHpD4BpPqPZ42bHSEcrg9Rjyrjx1cVaKyxgDPQSZzf77fR8tbhte2n7gWbEGSaiu9TYx1W9cJXLUZ1W2T",
  "key26": "5a4f9vNmdypiNixw9TsxzRP4ojPGBWFzU36rizvRt3hHRVGoLm85gmkJCDVGLjTGvujyJ33qQcteVGFwEvBh5zy5",
  "key27": "2K8RAg6NK5gWd9LZfRJ6jxfEXGmrEctU2AzpEjzkat5JwqciemxDFmdRJMtKAAFzQK33Mdr4k73XiHoCZzZwpdSw",
  "key28": "3yiyoNi4my5Ppnwe3r7DnnNqMHbPXs6VCJYas5JYX9q8ND4LyqJAhaJ9XwKWYgLEE5aT9RyqBpRiSFxmyfaPG2TU",
  "key29": "baFJb3eNrTpjjxnqMtHLCWseEZcvuB7tK3cQb8tRssgsEnhQ7xH5fZmhhrHqatn66nmb1mB4CgKTa8QcbMYF8b1",
  "key30": "WezbZVxN311bmnigVCu3NYMp9w9HRoN6AecyjkhYr2CTy7bpqfDLR4cxUcoT1JpG9MShJLX5fXm1rDkAnX3xQnR",
  "key31": "bsy1Dj7KcrGmRacmv5xeU3AWT1MGYeSYa8MsvCJe6zoPx6eW2QYxLUoGiX9txjj1BRwd6CSiQPU33j8sGtQwqaL",
  "key32": "49KMCiEmYmahDRSMroUGgAbojZC69WqL2qYnuemYFZaeRa7KaY7ABEgH5Ng9BrWWaBUYSCiH26cZmXVQCtFTdwqr",
  "key33": "33k1RUZEQRgtjdfRJBYEmwWFAJ2GriasrzaHeJoh59JeHw514PSzLWbJf5dk4BzPWZgiuhDmmedEFYh4Hrn4QNPZ",
  "key34": "52hXLkq8rSKcAkJGiDNKUvx5CXsqcDw4TuLZuGhCd7WwLz77sdyeeqPiGkBq65mEiAdtP7tHDEU8Tyhrqgwz7dnX",
  "key35": "3iotx1yfcdvNruMKSHGCS3qs9Ki2aHS9WFfWkx9PJZ7KFb7SHmJoycY22vzmyxL7ADbLmJLH8sLPdbW21PpjJSbh",
  "key36": "cbGLBLxjoEmXpXdK41xQCbXTCy5VHe7w2VUtyFcm24sav9RgRf4jCptTpz1mwTwDTG33ugqtdrhwuBSJ7QMkvHb",
  "key37": "4744R2g2SEPKXu9SavNCyosyhqVRrimWsFySwfi8SvabiZ5KgMwauVQj8cpxsdmuWhQ9ykHDJznjqbnJWABJSmxA",
  "key38": "2knkSLyVdAvJqCzVvvSDGEfMazkzjsPixyCu58gDR4VyttKdg9dJ8jH7xvSJJNHJPyUHWKvRED32oMMC99Y3s2Cp",
  "key39": "2g5NSrbDgTetzShfqD7btTCKzaTJs72QM5tzJbjCAo3CuuCWXJr8Md3SZ8watXc8Pkvvd3dPyyptpMRPCAC72kYt",
  "key40": "3mcWc1hSJR61EwNw2jJnnth2fdWcRtMuyQwyK4fH8yyFTq6JN5ryhtoFyRC1bbcD2oKxYS3HvWEwmsx7nF6hE8Zn",
  "key41": "EjWYKc7gSS7gZzD3yxfDfRiXDHm7NfCfHPeEAmbTSf73fDQQC7BtCZPS2d6pQHaD5fjm4YK5o3rhXt7Y9FHS8EL",
  "key42": "2Q3xrZmom5iehKivfFmbojwAkBFjmyj34ZhC3gVGJEHys455z1ag2nCj1wLYhHpu1x5ptkYpgemAQMazZfmYVKob",
  "key43": "53anPxGdWhrm1pAGVvFvfQfCppRmsKZ2rH99qZ3w5QdgRGhDmVmBFRseYoTpYbv7fFB2UjB48cn5pB3aCw9aeyvh",
  "key44": "2fZrp9HUb7pBnHm4rjHrKratuarHQs5nLnbr6VDghZeXdKaEXoViwEWKNMAMPpXu5y1Ufu4wtsP7LvpQ14eVRMQD",
  "key45": "7Z21cCT9vTfn3RY1XRCgLqTPuuqpaq9gaabxUSouhTMw74gcfZ2sVTfbykD4QmgvVFVYoJUsXAW3pyMXJzMHc2Y",
  "key46": "5pjxoWwYU4nV6fnGQizty3dPkMSaJGs4ZwbjwLEJX47X3Qc4HuptBmCURqWYQMHqiSmEfpruSEWJJoFxzpNWM4aY",
  "key47": "5GkqwaChsFSYfjRW3VouLkZVJPi8Q4ApC1HFyy2zYm3UgntSyQjgTgTVaYEwK95SL6wmFJmLu8uWWboW2Bo8uNG4",
  "key48": "4MYDdhmKRcHQCNP7UKBbbNvb3eKaXP7m2BCLd7AuB8UwghkV5ATyz925n6uqbbvMDwbEfzQfayZDpr75KTs8459z",
  "key49": "3yAZjyoTFDNgEyuiZD6CWqwQMPPmwQrbCAe8g99T6xiZak5apD8Aa7RwgdyQLA3piPfKfvAT98bvUbsoV9kSxA4h"
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
