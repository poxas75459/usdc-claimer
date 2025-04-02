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
    "NyM5TRKmCipYKkLswA8LmgRCzbgXqNpvXq5TY973K4kFARjwWCiZYP1nKbxJA11k276AE4Eb6isAkL6tDBTnEaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAy9ArzX3yUGk4yUUmmzSnTyyUwjRyMobsyua63JUAqBh8t5rJaB4euCtTCCrAYeF8KXs5nV9xq7FLmJT3xWEBk",
  "key1": "SS55nQjX216fci5GdgFgLvgsE7ZkotsC7CKWY8AX2Sakm4XdusHChNb6tSvXLKh5QzEybrYYpAfQGAN3ojU57PP",
  "key2": "5fFMeYD2T2Lx5Typz6WhhxR9m4M1xqaMUpDfG9n6jWkSMALh4NUdnPLCqtzdMpzMscgQNczS2gxsnGRPGSKXdPAE",
  "key3": "4agcAVGBYxPmTLn6Noc5fLWxc67vHgJeQDv59ygrqZjhp25DSFDMwhBDnmSwK5Dqr9UvLKYuRf4RdS3yipffTAgv",
  "key4": "2gJ81zmZTV6gxu3ueSxvW9SdABg6L2zCB4UpozWVGt3FFQ2XwMQP5Yu8Zwpgk62ez61nYX1bLYrGSCT9Srg5vxVX",
  "key5": "3pGBQgMGRKEPn8aHBq6tvNdstRyHNT1j8xUDvUXHL8Vt2re9ruRRPMgPuHzYhki2ZjC2Kr4KBrgBsFWfKuyWARtn",
  "key6": "3bsuMQBitLvbpde79iazXAZxNWfHVAMT4gQ849aP66jzMVYGtDUQ5Fv1RK8ARjytfnUtFMona32ydWFRKFPfbgzs",
  "key7": "4CZu4MFvwxvaVCxbadrWmADjoWmPkRn8u5orY2eUWdPt9WAUXeMJE6BBUd4u9fsMzrbgvbgbRWuUihvLRh7usGuH",
  "key8": "3EvXPdTjsuJKLNNyyZdxqp7DJGqUgaoYFhbzmRwFLPVfCciDKxrggCmtsdSzBcreD8nmHekBgAVkm26xorfvnqRb",
  "key9": "4nBuM83nSkaXuKYsBDhQuEXFsprB3CuGawL6YB8ETrnb3PkpE7jy5SAcsBgQjQLRqafd6465BtN1t6H4Phz6xjKB",
  "key10": "2z6JCCLHqizqUSjWhZ15W4NjdhUNC5t1oP6nPtVQUTZYGJdTiTB8kEKceEdK7K26Frp1oVPavwF8bTPk4bGUoesF",
  "key11": "VU84bRFeVgv8CUVu9HSQbjWSLNPMntFYAsxi94WKaQKA6sQpe1DQEWTMhL3GmUZTE5tk8jV34B4WMZTKhrEShMx",
  "key12": "2z18AQqpf1eo5hKJGeqajYdrkhJhFf73wwZytWzGwxkqHBFrVuJqANtS64SyVaa5FgHVzjmA67uTDHEfQd99SYD7",
  "key13": "4SNuxfXQWFu8Fr5v3y8ABHqhfQAMivupnppCp7X7EuUeZ4Mq4WecU9xPLZ6Q5VNeggVe39g7mb9g7T6Sdb8uFXQ2",
  "key14": "2NsA1TRP1cvUow6qatfqx1vpwtvU6Dycf8n7TbtFC372asEJNMUpLTxq8pZKrxjqzbnzc323cdWxtZoY8MUuStnb",
  "key15": "4w95cRSjSHCCwL5UG7usRVQJiZdP5PYWNkG7Jn9yuhfANvUnsZXZwzrGjEV8RNdkaU2xJkmpuYjTRdhQ3ornMgEG",
  "key16": "3gL192f31KmgqDyqSg1H1SYNn2x6JZtFPGdyReHDd7YgLg4k8Bj1VDaoa8mxaGWB9uqgiPyJV8bniAdS5WN8mund",
  "key17": "T18mcSRcXt7MBccNKURjSXJ9dxR87tunRvpXokCmHnhQUjqn5NaRAqwhjiRyDf3mcKsVzPiyKYKM68TBazfUBKq",
  "key18": "36tWbwvVuYVStnKdMHs9nNyqi6LSecLHtJEsK3HcJVPA1bSWrnnrLf148mUHKAGmodHmfLRnV2Qr6bQQ8udmJaSv",
  "key19": "5z7emsdVXcLN98erSDQknK7VNBUoLadpRqt39CRWaXEPEjD47EM7EXhPzBLmAVBZ8q2345HdGQudkb7pEfQhbhxh",
  "key20": "2aDVQjhJgZkU2XBEtGfQiJr61HAryeiAY7w6SWSfQRngfzwCEAiqDofX1cGhf261bd86A9L3WegKw6HyedMyeHFg",
  "key21": "snr9s2chd94LLCDZi9LP8qyKCQvqa2yrwSTHjeKzFGHEoSQX9MFSjGMCNv9hJZwvdjfd6AVvR1q9qbh8SxWcrYY",
  "key22": "49QA7HyA85wzKtgi2qcK89ciS2sYNnuLdNnEJG2nwpx5rWzCqkpdKpUo4uXomJRJSAYjTchN3RMRMhjNiTHC7kCn",
  "key23": "4rPcag563NYkjWo4B4rTAqhBtDau7T5SzwYdcuZrchD5hjgaxxiXJdwmsjRPsuJtvxYoztZKNCgRT4AgDNhXAE7P",
  "key24": "4VKqEV54fWppQrQdj5uJxMvR4oxEupDcjEFokUoczyeYC4UfCCKYfJTtQMvLyiZ3MTDM8QstgvvvjvRTbALE76T5",
  "key25": "3jkbdWjsozDR24eKgfmp346cXnJBQDest3JFsFxboJPiyETx8qhBUwVp9GW6BQv5wXEftf4AvggCtpjDZGrcgFPG",
  "key26": "4sAaD1z6dCLfGRQE1g5ZTUcSnNUwyrsBC1qpthDHTcQXAMAGnNi5yyBbcncFvn1aC99kZBbUSfiiwdhNkEscvGpC",
  "key27": "3Uykk4yX1KjZTL7QGDiL137X3PoFvfKfMNgMiDbEAbUELBCwVFm6Gva3i7YH78PnH2FERbbkCxdSBHda7Tx9jezQ",
  "key28": "2MBbjB2UsmDp29DNkgq6kge3thW2oPtSkXxmxeCJcznLqXk7h8gaTP8CHQKZs12G9GN7ggX1uw4GbiaV2tLWMzcS",
  "key29": "5XFKTQFeMw9a4cSYJt3peRX6xYq4c7px3D7y5tp3e5U8V2dd9uEMR5cnFEnXhUoph68MDdin4p1Dudqk2Df6WHWp",
  "key30": "3oCMECiPtGmJfMTttTZpsv5j1iTmrr4j2eM5CKjbFqoymwoHmsYWrAcYxAgfatJwyrLZb4czUnUf6kkWi29odw4M",
  "key31": "jPTPFNSAk4rWkBcwhKkXECrsq1hpTsKLUNcHvyq9S6zKHAHLTJHKFdPmnf1A2nypCYmPyQnycbVrMHuAfrcqvyt",
  "key32": "qVBx1W8rrkUYUUv66v81UopRgRiVfvDEf8Zw6Df3HPNASsy8Awuk6UdFjFYtqyTtfAnppbnpdoJ3JeQAMz6RRWh",
  "key33": "33HWJSTEapsCrvdhFE3X1XqM8h5RTsjkYNND5kSH3JLXTdyDxjGTdr56QPuNuGyN2eBBogWZsAZaEX9tjm5bqMnD",
  "key34": "HqgpHGPguMUnHUfzsQsMXDZhHKzdVrCUk1apjmRSw6NjPE64FgD1BQSgKiubZRNc18abzVLVUjoEbHX6zSELkS2",
  "key35": "626X1XujLvUZQ6yhrk37P8VXvrQXFcCAkEkquEs19u8GixLpeWXYUdTvz13Gg87bvQSx4Mq7u7ds19MaCmxNxgPV",
  "key36": "hCKNfADjf2kpAwA1pdbsZTdyto7iuwWrvA2akLusRbYAdx9thhjsAvp9nxpPewkvTY7hsWJRxt6A4RrBujSH59C",
  "key37": "b4DXZTA9YmTGpjsgKHbyBiDnBmysUDhkH4wQbhoWTExux54nXkzYXF4hea3yLkEXmjqiYWneC435PXuQwEQCtYN",
  "key38": "5vyPPbtnArg5yNqRV1TT4yTCH3ve66UBpYj4TZzo9dFHEuUtWWKmYXGVVPCftojBZyfNQd1rvGhQjQmMCTxyThrY",
  "key39": "5kMobBytUkjam3E1bvYQ8hamunC8RSRxKKtUNTLnDWTfV9jx84wcvXf6XEMt4apKv8T7AaBAU16Tg2d3xWhSYu4n",
  "key40": "2URHejm9J4Rp3j2j87vW45K4AkkwtEk633FC9Bkk6q2LtQe54q5VvTaE9EMx8PdGvR8uhY2kYUWKD3VbnWoABXt6"
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
