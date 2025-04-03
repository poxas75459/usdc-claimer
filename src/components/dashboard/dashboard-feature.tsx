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
    "2AsjW4pUx4aYAyGgbRwQjAaU7ThE9JhE2TSX6nLsQjVS13ek8vagxBqUdbSVdh9F18c4RuAuw1tce2DvN8NREocM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyN2jbX4XhevCkHxk1pqBSKyvWByTJUzo3KM2TTH1LJ6x44oF6fPuvJWmMhAYrpeRoswPbSVEHFEwkUmzn9A21w",
  "key1": "5ncfvNojBrgTiC59ZQsCBzBGtSmULmS6ecWbuGHiQ8APhWpAidWGfhutb6AnCB8PayvPTR2cXdTTy4XK51zu8b39",
  "key2": "2CpdAq9Qp5YVT2uJLMseXhEfaoTAy6V3F2zH2cxWERbLPUuKAvk9bDhBDH3NPuVQbXkSs6GSTxiP1RmW7TgBZjZS",
  "key3": "5wtjMNJDxLbXnmu5jANTDRaztjmxwg1X99n6LvsJtXJMQH5KmNcXUZyV1uQMoULMthAhMngD7M75d9s86a5EUs1f",
  "key4": "4ZDTvngr4wxdNurzzRnxBvHffHeiNxYr9J7ogSmTK3dLEdtGSJ18JLcaVrZ5cYa91pceD3iYhECKdMxmpmfqgPS5",
  "key5": "3U28tUkh9fjRejBS2YZ6AkAbUAFPBguTqNCotzQkLp27FJK8wFCZYv8vFr9ipLhSi4WzsFeZXeuzLWbHqnkcpLss",
  "key6": "4U8mfSu6MByarfDnfDPKS95qd8nxZx7YgAJptgACutn8DwCSjan2p6S2KLiUdGmxvS3kjQ3XgLbX4FPFvjNKqywP",
  "key7": "2yzXRrXFnte5B938KRdD1aMrYLeGqU29K7Dfz3y5JUP3g1niauRBPy7pKEXzpCQoHtrGTdKnz5vAo4NgCrNdgaa1",
  "key8": "4Nr49vzaSULAxd2nXJbL3pYostjkZTktANnzTwMY7wrm7ZKnKGjG9oMHG7UqMKSiNRKmCSCeQEHUr7HP79UoTbad",
  "key9": "4wM1GUjvUqntbTdrwzNsp2KAKrExKHrYFZSqYaPiHiFVHL5drCFTxjtXAAEAbekfCZmvP8nhbQhqfyPuNwtn1U23",
  "key10": "5AhFp7LNKwnoZxLsxeVFAFnzX6B8V3eqS7DniUzB3CWNSEbwUkh2fFUTRQZERWnAJ4WdiBaagz1wmEDZUHRy1g5v",
  "key11": "4J5A3aMGDrbkrt6wxLPehB4XyvYu6dBgZ4YKxJtCBPsfTY29Sdtt65x4x7p3E5Q44aKusrNHaz9hQZJzaHEWWtmd",
  "key12": "4x2mHubHZdmPF2NKomSQVvmd9cv3WnAwYt6DJszcT5QtcQZsBuw24LWhFusbGAufdpa7q6xE6dQQh6LXtLiPGW35",
  "key13": "3r6ErGz65xfayJL6KASPeTdtyvENZ5YV1JcqyTWXnrTM2ZkRU6u4JpfDTW9ud996FNumeyc9yZ5hHGpVTYAauMZg",
  "key14": "4Nf7WoAvEpbLitdA7aT5ZqchpEzXNMQVKNARrcauhjzanPz2uuQNWvHeGFQwQNwJQYrdWppBaCgEmbFUpqeQRRRy",
  "key15": "eieRAauSaXbLkmDq9YuH5kDWPq5ChaWobWwh3JteCLEG1PuFKMXJx4sMnFuEEL69Nck35xD6ySnQ1QP397MaA2q",
  "key16": "2CTrVJZXhMx1UbXHwAdx6xCTtbT3uFGZ24NVdh9oYnpcqR8XRYMxixDLKNBqAftbfS2UN1ZNPosDyTWNgnPgqFYt",
  "key17": "2NRDXyJWc7qqTV3nngGrYS6mqsLF5sTRcajcYbE8vCicY179d9gtwXSDJ4QXVjjzgsB1BeQoFb18JtozKVJBwJmU",
  "key18": "3r6TzPrf1VZfU9Ru375bpTs6bFmdspzDwAcAEisJVu3NPDEAKrR5ta5qivR3S8jzjJK4qA6YUWwbiXQriKmgmfav",
  "key19": "4qTyFaHiAmSnBRgSJS3KB5Ft6FJrNEkTMYri7QLKfMHsuMW54rCNEeMpdh33t4n53odY9AEAvGfxMwQBTc3ntFcA",
  "key20": "2U5sbMr5JMuq2z9BPkUvm4tUnB3DFXCQRrhvaLJcTcFjz3Wqu7nKVyFYvoxjfFtUg4YSMbX62HoAsVp7spjAYB6G",
  "key21": "5AanUnRF26KG76nEwE1BjRAXfK6vzA43ZxHxRQBtk2vC3vmJkCYjiNgBJuUdze2JLwC3r1VQjP3SmvM8fm452qq4",
  "key22": "tLLXdT8m4uB9JjVXgeSveeD9GuFTRqPSKStBAUKaSbKEBeLcdZwnBhKEL4CrytCUb9uCwQHVyCLGREqaabvipR2",
  "key23": "4AstVNHR1kdYPzaCGBogN3imsVFzzkcegX8ZxQPx81JhdXarkrw8S7W3x2qH1RsnnPp5d1aeAiRobxVi5Gkops4t",
  "key24": "63zgshRmHn1XTyq4QErxD5jWhA8Vdzr2u8H9LQsuo7yDBZj4JojGpRzzqZSBriRXKkiH1BJqp9xq1TbgiVD4ofWk",
  "key25": "2qERKJkEoV5JgMJy2cgppDYRtXKV91hq1oxSeUQpJGuKtivusrwd5MShdyiuHPfVMzu3LKq3QySqthZgkiv48b6R",
  "key26": "4RpXSKZdVkkC96j9LjrBVSZzkrdRm8x5aWoiVRYqt56EfXvc9yxDCENTEk3yCqX8RSQ7E9ySqYZQaMPhwnHVjfw5",
  "key27": "2cGjRUxDHFh2iNKSTkiz7jZ5dZGnHvcmzpCPtLUWDZZADyNA6k1Cye8cPu2LRZ7GAcZeCXn7SsjSJft1c7vxRsNN",
  "key28": "2R7PNTrXHwYu3mszabBQN24QRtn1DikXR5HmnW6LcHLLxLKryBRsFTXb9hfFAtiuD3NfbLYj5J4T1rNgSayvF5sV",
  "key29": "3P69SzZkih1LTP5b8ntz9WSvf9dWAMo9a2RB1GmXyCdBMP3hzLkrdUTcikEm5D5UwbcAnMQBRo8gZ6cui62GMzH",
  "key30": "4LiehrSEZPFAgwM9N6AEpj4rsfNHfGM4ZbymgfL96sgvg4h3kShw6WDm9cJpsDS4izjkdweUDnynuzybhiyE1Cjn",
  "key31": "5MUuBy13evWQoDvCvfaSbYkNgmTeSYwCR84V5HwYrqJLS6wrb5dBZoxnnc5DdFSe3N55uMsCGfKSrvmzsXCYu3kd",
  "key32": "cRXFnBDhGSwcRkGmtLp6K2kb91CWqkgpiys89C3f9Vzbdh5VyaAFMYdjpTTuKgR3hrXfrgUkCZVkUi2aXzxEjf2",
  "key33": "5A2sDKSyCv7p4zKWmEGnJyzSbAj8Zi8VBeb9uZ7GHSPC6GDuTzJfpF3j3SSWGQVWX776XgD6MCsWZVkpVjRKEoeV",
  "key34": "bNxUWSmDcwnzNaMPB2hMUCL8dzhSZDyTwuZ1jwrEBNSwqzi6GZKvQxrzkibDd1Fxb2wuE2ZEe5kXoLb2maT2gfa",
  "key35": "zHyjzUeg71dsE782VVHgqNF3GJHXTkGKbpQKDq8oB3noVYr1MXqgU2aEpzjRmL289BWmaQU9Rjk1BrFp8DRsFWD",
  "key36": "4drXSSehDeeLfjtYZigAEAT2MwHMQhisw3hYVisqr4u5PnLCBRAgddMg3PFp1EAV18jHbCujgfUWJ2cWFEBuUJNt",
  "key37": "4eEyWYMw4m1XuqNDrQtmrc9H2ZbmyfWWs3g6UbGZC6Hdc21pehQYrYYwTZHczmDusjFcVvgDkWejfzuFWuT2WtVi",
  "key38": "46DizNAMeuBwssRck3kKvoNKsTNVWKE6jyiKMCKuSkb8QFQaYYy1ZJY5zVLmjyyT2Ax6amMTZQmjnVV2g7usQeba",
  "key39": "22XTWPm577AhuNFVxryB8gqeX4SCgHmPHru43fRoaQLhkB3n6SVqABMsaL7nGVLSSPandKvNDfLQPDxuvRX4tyUE",
  "key40": "5qS3byGcensLDMVbNEk64Tzu44rnPTA7NMi1dWXUYXpVAL26MGdGobWYKKECY7xsis3dtQpYbcbzf5bk4bCrztx8",
  "key41": "2WGsEkcFzMam5iY9ABjR81GxeyU4ZN75RryMic3SgDVqvv8Vzpne6qJuhaHj2zVyx9fyResUiFYzhTLKv8JPtXbe",
  "key42": "2ZHySBBv4yMQ92Dm68yRJ21g5hGohgWu9DMu7NzhzWGfuDSU38AYukLurbm6BFM1Bkx5RH6SuNd4S3TpFvwnHfMg",
  "key43": "2omttHqN5mAh23DxxpMs91SEUsUXvbHizZBzxbv2869QmkeG1G3jeaHhqWh4GLQeba3T3nmbWVvxKVgkKLtjQXZs",
  "key44": "3ie2JC2BWsrB2DT15P9A16VB1D7MUtv68aw3gGtfUbcQMSAN2mgyXcb6AXDNoiBhTYps9rdfhC8ywWSnPefb37Ki",
  "key45": "4vBAFqQN1kUD6Sgsgd2TtjLAjinNngd3Jv8NnTNTzkpd6BfQfvMdqCUWWwoogTsUuk2PxeimQDAi8JnMNAYcVrKb"
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
