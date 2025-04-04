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
    "3d1bHU39wFgxvAf3caYRH8Vm7gRTAZ15UqqnmvATF52nSz9kshwjw4G7ErPXBoDRPyb2h66jSLqXy6yqjLNgTGhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JVqoF7eepKaEUkUuS2p7ogReMN6xpGMogmRPv49x3yD8x4dcZaH2nk8zZKc6YnrECwJM2n7tE4ps5TWVAfun92e",
  "key1": "5QS5fNfZ5JcYthdJyhhRRTBmDbrfiDRWuZDe8tW7EjZx2q45nU2GxPWBrVxypcJ8VEBQCHiGb1my6f15erJvWT3B",
  "key2": "3GnWfHzHBUjPFcNCkBJByJTmvXXYVj7A2zabenKPj9q9AT32QofsfbGPhWyQ59EvLC6pKMJB5YnAejbeDVra9XgW",
  "key3": "8zM5goywi7jaxqH84rhrsXc3DetFEZy8tSCVEpVvLATN8YdBxXiYqC8BcMwntddDPbBwEFHm5PSpUpnM1FtW5Rq",
  "key4": "4ECmn3ytKksS459QSdprF6e5PF3oAn3gRBcT2QUnagTp7NZE3MHBXXrtaJMbrG6BDQjgQasKT3rgDSyTB6tqbqFd",
  "key5": "237pXAvq4WwxYWhVZCyLjdmWDg499C1peZ5bmLZwdwk4JL56ZQHtCig7ssd7ggX7pin6u8iZi4TkzqaiQmq3Hmwp",
  "key6": "3m5i1gLfqaKvCFzYqhGibJZnvAKnXJ1tHG9BUrrK4ok7D8fyVtJHkFXdT5zs6XHo2n6kCerMQbkHAj4eJNGY5zvJ",
  "key7": "2yF9BdRL4bAUYcm8GLj2k6UgwPCVTGmP4KVwCMntqsnXAjMbeRTnC6yVJb1Fqdj8KBdc33y5KGVQZF3Fi7wvbq5B",
  "key8": "4CUeqJD95a8YchhPd4dZkwvC59zaiffsWku3L956ZvwrMRb6bKv7SiqSy3DfsSRAtUAbv56j1Uey1VQnRewhUgWP",
  "key9": "49itYQiUyQfaTxBVCe89XHdu8rY8Y4cezAqZWWTSeYqnCPzkm5mynsEoByDQfT7bmunRoPsJjdfPYxKkN8anW7ch",
  "key10": "cWa3KvcXNbJDwhviEnTmvuAFqZseewyXGSfXuhL6sroRJ6L3PmN5FhBmctQbeCmtdZsRQQ7nBqFLWd1UUUDUbrp",
  "key11": "NZosyksoQJSXTfxks6QbsEc9Z7mXKTLqGfZvNYSgunhwewqxh77BmVBUXCmFmGAAcCpjSQMTeojtRkEEkazidnF",
  "key12": "2G41YcBQgUJ4U1FLpYKb9BGREzD5GN3QbvYbRsCBgZgmkeNFVRLUj1AKVEL7xkCDGz3Ho7GNfbzFp2zGyiX7g47T",
  "key13": "pQnZNyJut3zWc8VoEinf98RKv3ZSGvNmpTdrYPCYgodL47yk8fdHiHWKzafx8EAWzf7WhqHMSxeVDJGZk1wMfwr",
  "key14": "4v8MvgFX9d9fs2AF1FHx8xfDbhZAZyHcpGKS82kFUptZij36bzL32eLPdKAP8Zp3weTkyJqX2ArPEVDCbW3b7pWD",
  "key15": "5HTEPX8dzEta8SSr3tnDyHF991Ls6B4vGJ5npY1mxvsxWJ465MHPU4GWf5MQ9rdRGPJ9hdvcQ82EfHzFJ7PDAaRW",
  "key16": "3GLMNkf7NM9SVWTW7yhvZ1hjJKKzpeTyjLhgqXTGvxk3xy9CLXZBqkyWEt6M5FzYL5GerkXHHjUnF1jDN46Nie54",
  "key17": "2dWpcomH2UNu1oFniyGa1pcC4mWn8NzBhZAZsgYsotSNwGJ76KpEJsC1nr6nYqQ6T9iKac8JhFEoUBSHiU7ALeqr",
  "key18": "53aVS5FmNoWNJidWeFAN5CbqQ2tXb2DnUbZBBg7tDgq7MA2LVtdq1RBYmqETtpperwZNgJK1Sau4Tev5d1tqVHaw",
  "key19": "2gYUvg9AGcdwPLmPHp2n4xKLBg7J5RcNg8onQAV2hxJygEutaAZZ7qSEWPrFWhBScmVdQQ5mRsEvimGgyo9qPBso",
  "key20": "4PUzinmq34CTUsoWPYYYhpo9AK26UkWhDnkP5bL5DmqbqqbJX5NmEm6xAHYipiGKFLj6semo9pVggWyvAFJUNYth",
  "key21": "5EXoPjunmLLYFunFqKF8odyvksoNxZv8K1eKj6UViwSUtunCfZVcxcY6YjczBkH5Hi8aEHeFXLEQ8X5gYQdpMujX",
  "key22": "3cJyyYfSiVcZMsqxbKCwJEzoKTfJmaQNvvUWBLk75Endg4LoCEghZKSSSjPTsNsVFkXK6iV7myRRfR5vHwtEKqKJ",
  "key23": "5WvrfkBgmbkoWMEj7cwMKKpJrgZp3Z997T7BEt5fFyyNYcp6i4WoDbj4EZHsJ4uvZNMoESde7giLdhQWq5U2Ymrj",
  "key24": "4hHMHhjUxy7dHzKGnJcQhYiVtFwa1hL4xssdFtEdGjGmftKqzTcvFXcRfJTSR8TCctvMBzAyf1NNKpBQQGNfsdTn",
  "key25": "ajTriQqRpZfiPseUD7RA2s2ugYePcSYg3r9JApeQ94x4YmhLM3CZdQJEGeQdK5tR5kuJypNpESPKMxv55UcNtFN",
  "key26": "E852LLoGvbDm8knJTWyWRd4QijP2yDjrwMnH8okwVUJqvxyyf37ysfjoyneqedNwr4yMRL7xhyMjGF3YKm9EMMC",
  "key27": "4uLbvjfC8GGqKqzvamB8QCW15LuxDGb5bPZ4gtyADqa3ow9eH9kJxwLv4iBaV6yoDJZZuRkGWbvWa4WW28PxTuKF",
  "key28": "4Euew6Q8LPPDX3JJnQHjEo3roLX8s81SV6BxutG6oobK771XgnUAkucojRKmKDyU75Lr77uCBZvF484iTTi7vk5f",
  "key29": "22v6dDSguJqxMuTEuBi3ZyLBZ3NejSHPf2uhcV3rDpVVsHHwfv5u6zufq9fcoURmVdibQdBUfgn2eP8ncHikh6Qe",
  "key30": "4CtWJoSDfya9ySY56HHd9XS5MX9pvNKfwurLaz843f3cR3ofAuFiW7xqS6DKia9JxrJTW2UEe6HhNePiPK1LGmi",
  "key31": "4LU23WsJigCouE3gp6QDeVcNkDZA1PHgrFxEp5Pbjfkyqf29KjAhtj17NbPSowfP2FhqYiHQYptSEcdCzYobuUMu",
  "key32": "NzWwNPvKxaG2keTHwzaJ6ka4kX6k2bE75fECU91EvixBVZ8JNaUVbQZKwCnmWm4ffCUh2RPyFBK2afn7t2sDD8i",
  "key33": "ac6vLkNK1fcpQ4GHvStkRQbsmaP38UtnhCXmzKx4UeuD9FfG23qhLFYJKMTwtSfrmGaYSSFBe6oFvtJdEpkjV8E",
  "key34": "3dct8yKtfc3AfPRX3oGhUwJ8QC7yReFYiDJCWVkQRXMpEkqo3w7hP24tuuuCTD2VwtGXH7pjtRGJCwjxFZV4Ej6d",
  "key35": "4S8QCpou2KdxAspCFAp52ccZd8coWjW2HGHfp5D7VbHrYaxtpJMWfgf9qUQiixjddZsCBBRZSq18ajyzqBaaXJBb",
  "key36": "5BLW4pKa88ixEUdKdkemjQmkQyeqfhyptAU6mMqNJZw3ASawqEL7YxY1pFPJ7z3kpkqXe1xFde3o6nH8aePrxXDv",
  "key37": "gAiAh8QEJrjRJrenbXiqxGjbJfsHuDtgG3gLfSA2X8CSkR4BBqZuo9U2W5qoVn9XS36yBRbi6qLwp8KZnoTbL25",
  "key38": "3Dju7rNJqaS8KJrc3r2jDiRDXezL18e85sG9SKVAncAccYVijez1gcz8JPtfuhFADAorxyk3G2hRsQpRnrPWwGQG"
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
