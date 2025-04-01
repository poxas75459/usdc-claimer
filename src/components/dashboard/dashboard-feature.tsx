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
    "RpXJ3LyzGpMaexpi613Mx2jhf9kT17e2GPkgo8F8bdDrXT66JqLQ5f2RmfSwEznsYbMgkGqqH3RiFfzQsBvp5Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWph3UEF8ohpsae4KW86EqgzTgY38ogTsezvZMNncSAkpezncqmLjBs5vAVNQadsuEyEDcSRN8c23UzoVrb7QFi",
  "key1": "395nGFLPHJkL883D47HtcaxbS3tbwnSXSRXAabTT1vJFsAmtnaM5x5TXMf74CEzXE5aAqBzkAwqd5m6AgtNvhCQR",
  "key2": "39kTvYFMDghMmL4D2EKQ4aoumjxiZCw5vm1u4caC4dRNY5i5QgmTDjdeV54aTLxPZhsGVVF9oocwbzXCkyyYu2dQ",
  "key3": "4AYZcDQkpfdYNK9jUY1VWPirbyCenFaVufvQkC3zhBemVR8PAABaUs6cWQvXtqCKDSXsHw3vYuNwpifwaoMGThLE",
  "key4": "3h7LKrwqMR7hy3PGwjL83bH6G1xQbLrDewMJX2q1P9Ddjzq8rG6MzfLATCZ7x6Ft4oxTgTsKHBYXMEbtQ8vrLmVr",
  "key5": "2QKv9MECbeCPsdRq5CJhVvFTSznc9m1gZLQ3Gniw9qtNkxYEhxfTo9VCnkwHHe32Sao12Ju3NNiJd9hhssHMNS49",
  "key6": "YQu3E5JTQjwg7ttsx195TYvvxzPNniZsti5rujDqd1VvaV8p8GXGPqHRcpBnvXKGkNvfWzNmqPUumZiGhV4bjFL",
  "key7": "1sm6yH5mxputEQfzoMqzJsdsfddCoMvC2neZRMpxfriKfPALMXw4YKEPT8JWxwzNPx6kzukafohrgbPyBhX886Z",
  "key8": "uHrXxsLihNTSC6YuyUr7J56A6Ru6FiV7ERH9A78mBzC2fwmyZKPMUyE3jkCEmuWx3MRPxD1duT9YmC7xDMQ3TcB",
  "key9": "5oEXYuA3ugqERDEGX5eB1t2Um2LwR8PJ29nzimrgcyfqSe3K1nWjsaUx4oeyeVJDqrnympUsEq5daEftiJCtz6oM",
  "key10": "2xL8VGyn4gHAWxa1u19CrweA3VM8yNUFrcy96QsAcU44tUhDMf6fxyb8x4TnFnFoXpzUV4qvtAopvr8DTmXW2kXp",
  "key11": "4kuY9if9iwW96LudpwyxBGeCTF97t6gy3rkJJDRBy2ejK7ujRZ5EZdvgoUCJHZ275b31kjjyeZM6acVN5ZghRu1n",
  "key12": "5BzndZpKrw2uQUibpbkjpUaPxEuYaq9WYfjQ3iJPYrUoyNYE711YReLXeNomcCyndgBqrc2GYc5hTy92Q6SouxtT",
  "key13": "QhXSBaRx4cDuDqBXnUXpN5ZVkWFSY3U1oVTFye1JBSFWdYqp522ChiE61GAz5j6kfw3MoQSpxaTgQmMm7SxgDLn",
  "key14": "4Az7W7A7WRE4EhJSSigkPmvih3Gf9SiZxUZMvw1cMBoFDvGJ5qonv3U9ZAcT7NyVWjjWpjMcCpjANPZbjrAeqjT8",
  "key15": "xqDXHRJUg1muxojyLFfrzjatN4d5u9aDp6fXBJR8CXmnLqRUDSWBqJ9vZwTrei8rDwrcfK9sebGWLfYtRQ8E8aC",
  "key16": "4GwhGW1gD5uyYdD5rcgZ6pF4JQi3foqPWjumuwTEv8KbJbFWTf5TV92C8F6TKVq52CcFaR2NfbAiXsytTF56orif",
  "key17": "4eiWJzfuBxFUMkst8RaDGkwHyF3Wrw4BfGFfPcHbYnTQoXzt3WDxrL53X2shtF9VNEsEgXgNPvJvAHeg2QCP9TUa",
  "key18": "ujfFczNRVFfqmcPw7j8bsKQwZ975iQviv4eYMcLZDDUv44HBg1y1cpoC95boM2uJ2ERxttbPZbYwY4UPPqf2egM",
  "key19": "dY4Fh4SDTirkA9VWfgtAywQrNGCQUJQRj4A2BRoh52Sbhq1hFtMUsCFxyRUBPuzYtXmtPXGmwVNv2D2NnohxVPn",
  "key20": "4Cx4EDuDbQ5QKY4PZxctRUSeNMkMxTfcbEbTuA5m9sVnMs7P7u7fwz6FDamV38c6gM6AtbXuLYsEnShSuyVZMN7R",
  "key21": "5NroADXdmzPqcC9VsGh9AwayXtanza3Ha5gD7vEwBPjXamu9GpmasPUCT4gyvJZS16Fqt8a1Q1b6dj46oRQUn5NS",
  "key22": "U6t7CiPm4ZoxTRkSCpcsKpNdH6qi32aRo8JG61EtQcZFXu2tXEAGd2x2szBdn49FPCjfAsjHTuzud7bZyKBogfR",
  "key23": "4ta5jhFQ9NdLNLoTcVvtyNsUzANgFR9QnwnyzRyTdqjWcqt94AC2FGBdLVLuK9jKrBEegewGf3dpZwPmPgm6MQE3",
  "key24": "4ovqcHk7Z3eRkdbXQCLwSfNb6QhjnuxnUMuRy51Zw1opJXySkLfQmmdxJAtBWGnNmQubniW5xvc5ExmeS2WJYEgg",
  "key25": "3JJCNN3zhdf3Wfn5soqkZU1tXX4gZU68c2Kx42Z1CFkgpq4Tksfv4Z2u8UrLmHuQkmx2dAxNuBs13Tc1uN5LWzC2",
  "key26": "2PSuVULN2xpZnqja2DgBbEaQuSmQcJj99VsY7kUy6SsrYMezGq3XnfiZpmtmApMqhmhP9SLZVkshNoxu5QLBWf2R",
  "key27": "7redgMNgMkmqeD6RJT5LUsvutHEG2s5ZyM4FZpT7UxGbKjeEni5KVZhHnkLXFA4mmQLGd4rktor3xdZoWwCMn6D",
  "key28": "2Zxqa3HmHyH9L4jqTEJcu7nLiYB9qHvea5gdKpzv9QEPXoQyTR1dPXoKduUgAbR5zjNQscKjtMPdMGx6gRx8xHyw",
  "key29": "4HqiBBQPn8U8Ly8rtoqqzR2HkbSJ51e9tJwYG2eSP8oKbDXdHMFeFfsyGbyQw7Y5EvyjgJ7y2uecfSHLa8xfT66P",
  "key30": "3nk2LFnKb3G3u3tGXfvwQCVwUWawU1TDD2bsRgofXSLbFzkRqSFdx9rKJxgc6B7jDqExG4gRQssXzC1Sy4Gs55Dq",
  "key31": "39iXPYXcsnKzZmCBLZzi5F4J7mNfHyp4baFyGqXEYtafjmyPutJjjEDN2aHP2xogKMAhFyd9Kwm77FJ1QYEd5WBo",
  "key32": "QwJckk2MkUpZUfp1StE22XErA97mk9KWjA9rgwTBbjybyeds5haVFNYd3b5vyAweQhNwMViC8oKf9khdVCRP9yc",
  "key33": "4Gu3d6DoDUWiNCZ5kpCDsnVqFAqsimxjiuDznVgM7M8eNdMebmvUs5Dx5T1bmQuAnufxHCZZb16qELggwDAkMwWn",
  "key34": "4wpj4ZmjvZGY71VGjTqgGnKkiDvCoTSJy16KZDCk6PoV6uRQVPyZZuGuLHDNowAFqRmDkmmcWP4Ae14srpukxUWC"
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
