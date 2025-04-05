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
    "Wj8HAHJ34oSAemeQKJeaRaoEVrStxzBe4JEc9VHJuNZXTTA2bNjPCuxdAPZPD9Tw5FWfFxrRJUoVWoAtrwUD5V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFTvdPGuubhraxv1kJA6QT2PuBdtqvoiNBa7wcHESeSCUarzsHLxetw5EEt8VCG8zLQ9BgH1TyU1dPPXPK13Fzt",
  "key1": "34WKPbTpyRVyZkSwutGxfNUCNYJ4oNQMkmeUocKbURSS9reDgqVPvZGrzzDyp43tFChR3KciKUW1qfAuuXsPzMmm",
  "key2": "1k5Hnivp2x6iH6n8ToFiCbeorWzzMpaWq4FVPiqMQkrLQSmE6UFQWKEwKSEoaeegLgXATtquWCsvNTTGb6SGpWr",
  "key3": "5v8LfJK6Zkq7YTbFYiTaWek168PS8roAd5iRRPrRKRt1u8TMWGn9YASCiairQtvoHQjxuRtATV2jDH8Bb1q93zF5",
  "key4": "4CHzmRb7fqtngCF7HGZokh9SBHxFABBBs8nDTRdHTQ7vzffC87BrCTG4D4gAK7w4QCUUSabMbMQYBijBDAT9coHL",
  "key5": "BN75SA1skZ2Jr6UgCBrjCe9z5UrY1HyK3msMDDUDCFh1YoGcPneevD9ju3BDeZCt57tzJFCWvKidw55MLL1moYL",
  "key6": "3ba2BDq6yadkZJNX7TpfrmZdq5k7TjLCMXZTYo5gqMerE59vrS4KevqJMRZKpTkty2SfXbr9rWS6dsg8cfp9y4a5",
  "key7": "2ju3a5VRNZGNpaVLqaPPS49TnZthwomTBP54FwLE4byDMV9HRJcz1dnUnGnPd1R4irsVHbGRRM3iPeFFrUqWPSqD",
  "key8": "4n6HGc1GkMsHxajbrDJGjQgEJMpZjZiqKCzEr77gTpfv8PNJFSfds1j8TJPKai9KLacjUjiRmGHA9z8zhBmVRY17",
  "key9": "4nfDyh3X63KDRnSEcXGqsoBJ2VYAJSe36hgu6kxKUquAG79YCoZKBywVD1wCy5s3b7qZnvcpFDvDBECg5KkQ8Xm9",
  "key10": "5xP9pkskLT1n7a8dZtUL8gRmQPj8sJ9oZM8XfQsNYFHAscRUcFRLAuYqMeoPW74kvdHrKBMdHyA3EAnqnzxWpw8J",
  "key11": "eyzsp8nfmxQVBJ36DU5PwujBov9nikG96EmGSEKahZNJ4jao9rkNSYFU1YQauZ7t7JigJ1gVmDzHGh8NKRSRLCz",
  "key12": "2M19Ez6j83uvo4fDKFX1mFmP1iAXDqBpzh6nEFaVA7o9PcKjBDLrNR3ABTj4dUdihK5HZibZ4YBLQUAed9nUJqu2",
  "key13": "36RKZ1tJpCqdXhE6tq5L3zzMeJtQ4ZFyQwjK3TA87tka4t892CN358bVG3SY2YHtj1xo1VZqmeEeP518hdU5nxi1",
  "key14": "23JTAchE91BydXxQspbQScc9dCoHE1JNJ9yrnwRyMjTe6jkDMSVQWjkYmfaEyxz2GSnAkQi88NUHg9BHrU9XgYve",
  "key15": "5MNWCnbUz3ur4yYkpUrVhuXqprfaU2RFWMbuZeqtozHTk1XSvDqfJiC3h8SBGrumfUhcQNDifzbHL9rbYZKPhWJc",
  "key16": "2eTLErzBo5rBEuEJYQr6m97yLiKqoMSDan6e8tGPQ3MDG1xHMS1NAfcbfniUh5WGNp3jEM9gxqhGeU2yRZDoGrVc",
  "key17": "4DpACWxQF58V5jDsXPSLBgBc12s7QT8JCowYsv93WbWcYmQrRAoDoTQw3HWu4aWBNvjeYEZZEnKf9K5vRPLDApst",
  "key18": "jNdRuvoeyMhCf6ntF1kULNgJEMwdpLZU2XtKyZxxcgUhzkkBQnoBoQ5t4HoNboCsuKBBxDo7EJXjz9UTJVVDgBv",
  "key19": "23msMEtoes8MsRdLdwGLPL6gRe6FuGxg3PBuM1Syf1B1ByKXrbjCp113K7uGNFpaXAhiuaeD5vDdazKHzUAyCnVT",
  "key20": "NN8xchUKCq1njiBzaFKSoREUFWnndAmZpenxsdWJbmNkfZuQxWp9c9uDsh4tVTtGkrWeTLXQwR66dWbawwqLDMc",
  "key21": "a9q87CkfTdK4nS7Y2kk8KP2q753hpissxKkBCtwk6K6KqBYXyjMPNmYV6Qdei97DY7TcQirr82N7LuoW5QiR7kc",
  "key22": "4a92DKS53xsmd87mFGg6Y62wgYS5jhznUyawcCEySMMTvR9mcK88LcxSFLbLjm6p2xB65nkCCgrnMtV4QNRwdEW1",
  "key23": "2fup8pWim4dduEwt9hXNRTsLbRmftp4PEfroksfpraLtWRfqhdEXyWwBXndj31CZDq2vZq3gjyLcjyiTabi8QsLL",
  "key24": "3UckHggQENmP1gho4y6BBor2LiRQvpUV9VawTiDfzrERLJRkYmiLQovPp4HqDTzAKUjGbix2D4c7uq8NPoW5kusG",
  "key25": "4TFeFyppt9iaQUV2qVBn5NRvJDLNiL8XnGYoLL3yjNErtzBGQWV9qUSYwxEoFVcfug6Em1fuAuJ46rLAwA46fyCW",
  "key26": "5H3Raf5yKYSydud95NifwJtFntxxG6CaRdp6sMS1rbJyMtybtRzRd3q2XsyhKVctriRtMGdXEcpU7NWQE8qxS8ao",
  "key27": "8vcTD8jynpGZtEo4bxHFEo8aZy7EU3krBPtc7ytqP6rpi6g34oMVufvRJ14piQezDNJYLNKkMkP62np9nVPdK1A",
  "key28": "3udURZfrMmeVtf76uG7SqJeFfLkTNVDScBZKaB6chbaqvP53Kd5Mpjt5ti1Y1DrwzT4PeqNFPRPQoUo9VkctdWwf",
  "key29": "2FVfa8i4xffXJkHGg9PWhQ1sj59uBoSJAF5bG4xCRZoSwQRbytZ3btyd3KaxcTHymVdDTwZWV5b2yivuS8yubT1a",
  "key30": "4JNFMLG59CX4vTZuwszDVivSqKR28iKxdGU17ScL5F8uSsLHmh6zQtcEYXnm4i5tyW8y3Y1vTjS9eLp31Cce3VsU",
  "key31": "4FQGUcYk456o2C2vcZTBXvKWVTvyZMxdbqBBQhs9yAVQMZS83Qw3H3UGZRKdCf6LGyDfcfjkvdX7Gp6HrteipLCg",
  "key32": "4hksjRU3vAt4s5eFH3NEHv6gmbBZzA3a4tJJPpi9CLjsvkDLWNnAkhX7N6WkZRLgMUEqCPLWfhFNNJBZXdXmS69C",
  "key33": "5n7kxtNFqHCy4aTqE19LSKU9D4UPmzf9Vbx3A7bNoC2QYBGEmUovBp9b82dzV9hWepsMN7uE7pXQeGP8DkuUnhXG",
  "key34": "59qHDkHH7PPoTqDVpuWpbwiGf36efvoUjJFQt2VDURL2ZENyNBtqsbXcyw774iWTxj4dobuKom41bWwyFUKhHLQb",
  "key35": "zN6p1uVxuN9KuxgUc99DjCqaphk6YdXmiwh1LqQ2wjLCvUVaMxoMxFM1dbtpg4UWEgZfUGU53GZwctiUPTYMGpp",
  "key36": "2ENkAwcsmp5jprgJ9bgHAL4g8jxLBZUZ8MhubMUBZ5vbbVBPrNEHa9LU1LmgFicA6kJHNijdXcN5nfLmcdHykF6S",
  "key37": "2QUu857KT2BmtuMuzqxmTxrYUGDksYLe6FhkHaGBPFsHk2ywfpFT3EgBmzYs1yxtUxdg7foNVKJ1CMkSpZZ78zVo",
  "key38": "5HnkwfqU7KeUHy3JB86oxFTWwmB2agvwK17siSni6FErzEXUmHhewLgfNa38f16uu5pTkLxawRwL6qqMtbcyQPMc",
  "key39": "4zfu7YFFVzNLNcVtQGPkfsyaHPnoDfRSYKbCMHKJdfU83XFKsGp7uVmzJ2XTfTgEW3f7oH1PbYdtakyYG4FsoBqV",
  "key40": "yhSDZ5gvhCPHK4T7tCKrSGU56K4SKkwF3Bb2Zk5uhhhoYtBCAtnv4ARUjpaUsCTnwesHsDf4UHFKLFN9Vs59ATW",
  "key41": "2y5iu2b2EJ2PPsFCuYioM7vmuitSATzqvZqEYJWgrDhUTMKtjKrc8b5ES8Jd1tMbeVScMNTK6fyzNX33aaXRH2ke"
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
