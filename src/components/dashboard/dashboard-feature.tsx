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
    "4cSmbNYHyZChDmA7gLb8PfwqtbxdxjiRgVbhBS1MFrZ6jiUGeAxdb5VmzrrESTEfLHNKKVYnbAQcHguKgpvHzFqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urRh6aQwrx9bow1WpBtsXApTX4T8WaqmmauC2i1K8zP29LQ9irPcy4J7WQATb9y38jhvsThSUVxN7WJgNxzYw4R",
  "key1": "PpDpnh4KaaX4HqqqARTzkZbi3VRQAKmoFuGboz73iFUjWgjTTLArxCigZ5gSizBVzGEWMbpBMfNFZ2krNKGHcHJ",
  "key2": "2xXyPRUR7kn5UVQScs94MemAZ3xz2gQGvNssz8e2bUtavNkpRSEAa95yJEGDVmjzTuBadAR5rab9VLGBGKjbQXmA",
  "key3": "5b4iLrkZyRrQHQbRHprvNRG7qtk5NWQfBRrHMqbspBhaEALJXxMnCzfwX8RJRcrFuTJq6JYEwYBe8vGVwp3WX7eG",
  "key4": "uvD3b3b1rKL89a9a16c2aCyn178meiFe66kmy3DoKaV8QPC2WZ4Rx2BpBTkmUtxkUnL8b6BZZbXiu98QztDbcpM",
  "key5": "5zTC4WegAfrvvA55jBWF4osUrVMkfmTXe5GJCaEHG8GtYzsdHppaLAQ6Cb6HWMyHFUGHdjx4Tpettscm3kUUWHRx",
  "key6": "iGvFbXCVPpNvbJ3D1bxTYmbZCbC8PVBcd2WF6WRa3C9tqDTKHwyEobdmW6hKmh9njALkXpa6ztcp6teUQaLrhNS",
  "key7": "2Vfw3akXaf5Gyvfd4ySbTsouaZugnLn9p9pthNzo9zS44VUFWXSCJ9L5GyNiTGE5C1L2G9kPQuj3Fq3AkLQPP4c5",
  "key8": "5GKaCC1bnbdxi698ZZVvDgETunpDVMLhpNNc6Jua7UpxYKeEJ9TBe6UM69YcTxGZ8MHruqLRmVJ9nwj6FopyKPSW",
  "key9": "5juXYGBV3an6AZhPzbb2rjxz7crZAQA7TX4DZGCMPp8ozEA9cGDJCbTSRLXQG4EymzSiKsjT5wpA8TxXUx4ktP98",
  "key10": "4Up9NMJkZXR43WMuHGVgHfXgV8L5SerL1h1Swo9qijRDqH2LHTDC4GbbH6L4xgsC4UNunmdfGbuxcquM5uU2wYpf",
  "key11": "2569eCpcqQxKJQCkGFEsev4VtXF7nFmaWFwp6sEeYLxsFrAiEBiCAQV7vrcJLdbiAxqtnW4g8PLSqXdpB3T877xe",
  "key12": "2P26qK5x6e7CZZz9gSa5JkF7E4MyTw1eAgmtFA8VYpfzW3DbwCtW9xhEyY5bsCQjp4p1nPfbazhM9CbCeH1WBkM9",
  "key13": "3Wfq4qeb5RAq9CzvjNhbN4zfHSGR96U8G2yewQZz9gnhgqP9vGxvAmiwMyqLuqw9AWFM1eS79YByVe2EQURVMeK3",
  "key14": "4EG4qxGcCk6k2Mjbm7jzHicXVvh8g6hxaZRe6xiavhKyjg6XbhpVzF9gE6uiRRxz4jur9BShpUqxAwotwCu44nCg",
  "key15": "4CaEMFjVUiexiWDBmC8xqgKEwP74kjW4CJ98WDWXhcq7ApzWDRrwyo4T38LBLSuspX8LyFCGPkszLbaHGWbu7frk",
  "key16": "4axGir4JE4MAejL64VeAyYFb1LgeFNUS3aay1g8385K6Z7p3nSqSCptbKHLJo7xbGD71kH6vP6HvwLxQrhK5ED3i",
  "key17": "4Q12mnsNS2c1z6K61UTsb5F8c4mSxNgpr49Bq99STn8zftfbbE7HqRBAWi9MrPs6BW3FfHpUrm12QYUzLLqwFFZv",
  "key18": "2UHToBDNnM1JDrHWfTYEy727VgS8BX1UevDYvf5Xd66mDhSNMoFwu6C7tQims2dTgosvV8KsW8HRKWTSUwVSVXPe",
  "key19": "kfLN1sqy2Ue8uYdGdT1ujv8gMDnXvNqBZmTtGFzwLkTWMoNvUBiBQnhz5sgHRFsrNG4toyjGRtUq7xkwk5zaud7",
  "key20": "5TuYg4q4TNVz8QD32L3YS9bttb5zKq5W8Qy4iaoj6YKwqmT43u5kzoi7EMeZ2ftLVdm154FEkjTBh63YxmiRdXc",
  "key21": "58v6NKccnj27fDyEu6wQjQzDp9wXpZfYe3CtFF1EJWVvo9L2LGFcFHWKfqRRNz3D7BB5a3WkQ3NacLTNAAJueM9P",
  "key22": "4K97BEzX4xtSiVZbxRZyjfP1iMLoJVjEdxQJKtqjpDCEmhXrwqEWFF9udEjywatZyr2s8bLjLShMfexdz59wvwTp",
  "key23": "3Nwjgg3YVgJiN4R6LbWDYN3Aarkk8mFHHuTGfkRWsaA72uZzGqdRrT1Vw3G9g4gcQwfe1TZo4SA45VNZ5sXBimVt",
  "key24": "Eb2C4txcWzx8FA28m9LyNVheZce7PiN7FRCFV3HKhfYhFk44MeJ79QwMPLUWEpbE1Aq2yGdfNbKbAtebMgfxLUD",
  "key25": "2mFRi1DPQKEZRysfz4fewCS5wVMTqRfeuJEraFqfxByGXbJsz612otJNh4tRVKM9xJyFABTqzxaoszCuw2GEwnkL",
  "key26": "2zRtgYXEQRYUx7NSh9Qq24kqrLjraPNkfDEAB3eHWA5y2uMYiKmnKyHsaLyTo6EfM3zrCm8MQ3C8v8EB5JafDGVH",
  "key27": "3KexRJsEPd1uUKr8CVFRV9KudZYggn8ZESSLwRdfjWdJ67x7nrEXXcGMTbkE4sjNzQn554PjvybttiMZPQSGUXmo",
  "key28": "trvsZD1dMk7CbyYCRXXEUVqz9hayB1P3jbdw7biAfJSgvhHnd2qjPQkdY4wcMbdSw8vKWUBx9z1uMsGC4A2NSx2",
  "key29": "48GTtzqCHZ69BwBC4P7QbizMWJjGCKpbYa4kJJpB9tzwhhjq8QUW2nUc4NuMaC9bCwNnPTEdQy9c1bqLwd3i8AqJ",
  "key30": "okAEVnuzAAhiyYQ8PArLyFpqMrNxmmkRHLMavSqMb5FcP1H1buSuYZJwem4cTt8z4RUGdy5vaLwcEWB326nifoX",
  "key31": "39A6tg73j1F9DJVCbDGwVY4XH4PRrksE8ii9TRXcBDsewShJLf4CibYDYeiS2TSutzsxyi6Wm7rndbuH3L7Tcu78",
  "key32": "5AP7Eekbs7Ynh2dmCsvvneSyYXZRcboKRC6U9WHVY7JbjkEGc5QCviibuKVgXnhasNh458pTVGXhnCJv3Ceeb2Xg",
  "key33": "5CrtCbbTvo15vHB9vE1wkiYFiattuLJDtDKR9uWm92b3Tb8ZZ3aUjA89oRhe9bd29BQjqaUC5GhN7MRyAtCeR8ZN",
  "key34": "LVxbuqkVHqEZ4kfLPe6Tx8NYLRvQpPgpweSrpUi3DxCd2G6URbBd51y8eUWv4wetRZNRadgeXvGNzsoNu3RMtfd",
  "key35": "34vymBqivcANqoSXakP8Hdjr7EpdhenFMdaAJyEfyx7eFQosCs3bn5nPGDxpPUWq96huZGrp6ewBMrmHn5eAJBjw",
  "key36": "nZnar9eo2VFqFJY5QMfa7XSVF4Sd9QBANoZu2nFyTnF2VNQJ8ZXxsX2qRdsjBzegKFqcTVG1sRnZwXsndA1LEpE",
  "key37": "fsmxoXnHRubdrEpGLtktrZEbd3YnB72ZWydwGMdRqBQrDLSf333zCDhcUsHw5fzFD4hirAsKnt6Hie8QHk2X4zx",
  "key38": "47A5AM2GGfXMMrKcXEKRUc1RMfZLnDYXDXsC6UJsJPTrghraxY1zGhip6UTQpSvYF22XG33z77Zw6776432fdWht",
  "key39": "2izDgMdwcgSXUXw8WQ4YcVm8vFvKC8oPEYd6W69U5SCN533NPjczQ2vmNUrEvRuDPVTqf6sUuSYujWRpD1dExmDB",
  "key40": "5ot8sim65kfZXnuJYe8VVbdzs5mNYEy3JPQtySFeY6t427CYa75x8JtZSHZbW3FfaAsByqKMXUxA2br7ewhrD5Hi",
  "key41": "3ZA7hoALjmZhwzLnYiwDsGU2B3oPYYAveVCsQ9iQ4fKQEAEXvWW7CkD5EbnaBbWxjQDKQZTwpCERNwUQt9SeCLQp",
  "key42": "2YX15yauPQNyasd7TXiG4HKu9vMq7TJQb24yyUVZb4fHxWpCC8DqhcAvUVkjsV7GKNdgkqKk3bfPqu13UVMy33FY",
  "key43": "2krTV7kFjt6CS1FK8LAiXCCkYpJErTMv96fGoaVMiUDYpWqpF5GYKKZ1j3YvYtt82jHd2K6hKJ7ug9ZuNwPnAe9Q",
  "key44": "2EWWuBATSmUjXDDn6PNgBMVXpu5LHxVxAWBfykUSyw47xHVDj5VkrCQj3RAXuSxNTPugtkNeaShLshuXe7Y9ods4",
  "key45": "2axrxYrrKrMP5ua3zDfhqp37Bx8vohQubQoVEVRMhxepPw4PYw5Fmb1sUHLW533wnfYs92y342bnHohPJFo2JD8t",
  "key46": "4Z6N4CNZwdKUV6Wq9byZp8jKBaUfzVhgJutmD7NBCyqAfqb5kKw5RdfL9zBaRLZ8JXyfRxaosSNshXApxEXKv9K8"
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
