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
    "5jrd9zzJX5rviT7F5pWA1mHrRvWipgaiZJ76CGnfVvW2QTJNpU3VzwTjgqkKHExtogeizjT2Nu2QosrU4ixb6qYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zz99grNERciAcMzK8Hd1wA17tHwimR3mAnmjZ4oBZU99w37xuRehp2hv1T4H6Lvs1QQHcQrJtNWsRPzCBswJmb",
  "key1": "2xBxBgVmxqKRXQGESwn5iFshWJ1nowcQdQNSDwBiK731HAAkJQ7fHqBonSww9y1uH5BGqHT5zUfq6Xru1KjQPSec",
  "key2": "2RqVYGwVAEUMkX4wRsM3jT4NiWE1FW1tLAtxFs4srRcWQcRdUdJyVeRAoUZaeCk2JB8Xa1D9gNjvRgKyXBeVHoyv",
  "key3": "61nx2JyHe6i75NucDkiMkK2g3nZ7F4CqjuwMySkWCLBPh91FNRh2mnwPrPNKipGiXv89YyXU8ozypFFrmX9VekXA",
  "key4": "2zUHWAh34Rw5Pz2tYaAUXXkQemNiN68eXQNv7yJhNWsAUxARJDSYTHFxRHPjEHQiE5dYbS9LaKJX67T2ne2eT6hJ",
  "key5": "3vcC2v3fy4Q1ec7S7531UhWxTPjwgNvrAcuVWuR5z24TwAr25n559CtaW5mjzEpCDKF6Jc73ueu652VCDykJWB9F",
  "key6": "4iDUXtVrz5Mn7Zfry96TjYs59VQmNQ4ER4XpDhSTLL6gRBV2ovZ1PjGRBvyHkYzCwpaGpXpmfQ7DTfGcyVm7Rkjr",
  "key7": "4iFUfUkzkUd45MFv2XSd9TG3og8ZjHLw8F5GmcMhin4C5Td4G5BAs551t4Ko2jcsM2xpEBB5yeGN7LVa38mDWvxi",
  "key8": "2Y1Wdq66zFn868Yoznpdww9d5hnZS3Cuj1583HpUVJYJtEKNMqtei67GHMJTaT5SiQ8uWzLAH7dMPDLtXyCsJqR3",
  "key9": "31M9HoFpvNnrW9U5dHKdRDQ9F8mK98MbJ7aSxjNWtpeDtZxjEyt3bHgLa7Ebpn3nh6pSDLpbihSKJjhFWR9E8orW",
  "key10": "iUeamHJ5GNqBsJoWPe3nqeDbe6jjDs25gXo3hCrJ8FifoKDyJj5pjFRsrnQPYMAqBUnm12sqwcDwhKWk5YMYa8Q",
  "key11": "3CxXAXhHMg7qXj2NDeD4vnijogzoes85EpqhzHuiQ87UjwfVwZMYdiYwCMoU3CoZ2pAKMFsN9yPcxQghCpvkVoGR",
  "key12": "2i4E37wZUo9uMBSfNAyWgwMisHqTaA6pus8MavggQMFhiPcizLAF7KWDgQnZqrLCswYgVmPnHWGGhFc6Kfk2K2Jb",
  "key13": "3wwDVRNknCrKgJBzDu2Fz86eYfY1KLJ28TPRCvM4YaWGZyHgzjrhUoY1TB5gxt1CKQFTBs9Y7fs14diZmGX9iRBN",
  "key14": "5rQ5CkbMPzPt2gYD7wCrTRfQrtosnZPcPB5jrgnT99Vix9aLVLHQV6jrRHF8eidETXuRK9qUbawruDZuiEyJgFx5",
  "key15": "5XvRGChHeNSxEGHcgmVTYtUvWouj2qBGuz5JUJzBeS5CE3WXb5RAm7m1RSRgoTaQieY2fKHqtZp96CVGXpc1S2Ks",
  "key16": "2srvvXQrTQYDkrzXnmQu12jcUEruQCGNNkJB5pbbiaj966XBRHyyPmF3zoEhgggyLs6jngd2MmqbMkKHvtpb7NRX",
  "key17": "3AaHriyAnn2Z7GVjhgzCf4cYL4118T37vqEBvjhnNq5BL6W43szHAiKRsqr6khPJHn1nFQXWoPeAmg8cUNkcxv4C",
  "key18": "4gL5xaYVhGFiqyF8bNWbsyixAwoC5nkBFsfhFJTBdahyuGmVadAHv6qZCQJw2XxYw4gFyw7HmFghJT1faWFiyQAu",
  "key19": "5XrZi5ntJre5ZzDmHL921xmBYqXS1gBZBQfqTgyzC29a9r7btWkUkSypepJgqq3eivhCnKq8frpevgBYs8pWBCfz",
  "key20": "34WFNoTt82TwonYqb8xt8WWT3m6diSqs9qnyT7NdxxN1rjQGrzTjBkwPUm1DfK8u8ynJD9nKF2dwRgAvTqSxU7ED",
  "key21": "3hzYktycpKbPSimueTi1MVsD4TrZYPduoSM1q4NH3AyMiJSgV6BMdv2HHfdpj3zT32iiAtd6acbyRwCMRNdyMQxY",
  "key22": "5fdaC4hz3Q7Ru9dvai4ASGWkVkwj4t33QBPP2D53bp2W1QqdoN43kpRhrk5qCGJVuGCxYnRzqzUDZWSB5jKDMo5S",
  "key23": "5BKVpZQjPKMg3BSgLUA2M9S8LMqW3G5okzVojBs6xvX4YdBxhKnXh3sp1WcmaB6xqkZm9EBmnxQX361RKnhwALVK",
  "key24": "TtLAcVjZN7yVfiQDMJmABpK9pdeQqiPXTtR1q1awuGpxF8VMaGGqKD7JhZ4h9SJXN3Ku315PUffb6p7JVBoYAZt",
  "key25": "gfHxZs7ae7ec92SMPNu9EgcSNkV6p2Dnchrii6aHd6rPTQr9P26SYXAsuhjPTscAuRNMppi4R3KpL4ohzAPTu7i",
  "key26": "Z28pzQPjRYxXBG877q3qwVF12yYUaJKMDLYSHYjNvMqppLXrS9HxNUizZzr2yhZXt16zLyMHGk8hVjzQcYcQDUC",
  "key27": "5SUZnR6mJCk879gG6MRMCsgm7fF1QYAAaC35Nx3PHn9ru5sbPximxN1Swj5SSPNQPV473bB8DzpkXiqXXTqFAAB6",
  "key28": "4H2csEofFJggUNQsfVwsnuLEcyyFYUgs2qpE1JQL8jtmw5LfkvLaUuzP11mEKkVTsrLhJFmteTz9sasuq2j4bpvs",
  "key29": "3jXFqAqvZD6VZenBVveCZKY3FBryykJsErvr6expk8TgXBhtbWMGJv75x7CrT6GugmivF3UBBQb3DRCtmmjx9WoJ",
  "key30": "M8utR4qEZXeZhwhEizGR5eCZRvbcEZpbiWznPinpsu2jwDb7nzZXEdZY1jcsa3p1Cc9oiSKyAbkyWY1SBkYQPGu",
  "key31": "zEuSUYZMmbjQWjcEeXJ4mQwRWRXUVhVm38XJGAfDP2endibFueD62rJQ9h6TdZHsFRdSnxSAgy7TF11AgAQruZS",
  "key32": "64SdJ3uaCLDsu1Pptr9qQRGjgyeQ2hTP9JiENCtdRN2uxuLHXJrbqhSTzij2BXF2zRZwkz8HbRr8Xbs1JKA2Wnw7",
  "key33": "3mvvu38SWgyC1D72uLBsimjpRHwVmxtpvdLVWgzLzCXqB1WWuShvVzaxvVspg8ChwMizWdwvgJLQumRWiGQPMDuh",
  "key34": "5H284ziZmRq47RP3iQiVV3ZWyxzVF7cm9ZwswseNniwHfAGvzZHoAEdRNjwcnTvUTbEWbDqYwb5g6wiCuw2ES799",
  "key35": "3wEgqXa45dvxxiebpvGe3FE6PuJcChnbgfXsTiFSjqYnJw6TyF3UvT42DVwGhRjX1Q4maaPtxDUAHphRhBEcAWpX",
  "key36": "4J8D82ZCjVmQJwUGGbHv4BGgth9beYpD9vfsgWcSBnYkwe581Ge9zUE9uQXzto57z8HNBTyUx1Vw1SUBd5YKQvUQ"
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
