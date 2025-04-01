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
    "5BpXxh3E5Qgu3dQd6HgjmgMeScYgTHfAGFkyHLWMnKmcnV6LN9T8Pa8mVGSEWTmY1LhGXYe8je99ycBka53bQTyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDPv1y3y3dJFkyB6udpAXGcbXyJLdFXHZeLbwEzR88e3gzt2hsiewGtBUrvMsYiYsyXHL7grusQrkYcwwgYgjLZ",
  "key1": "5cHcQoLdcgdRgBFajEjLFNZ7vBfxmxiwCPXaVwsc4mCZR6KTfbiQBxwrLxpKonZdFnkprbD3ukFn8wcdJZKmdGDi",
  "key2": "2pGGT83QwQzQJ8nwmgn11CR52bLLuwdZQHyBv3LgfZCGNgH4AVin6kaEhKth95bq7VLH4wQu5yb2gCsDUWWWKbkv",
  "key3": "31Sxne3xB6acdacrLEweWooreWdsQE9HPWhyjfotvc6tXjJH8DqUnrwxbmnT8AFwGUZqvij4DRsUd5MrmTs8wna",
  "key4": "49wtxdmvT2GKkPC9ALuwCPhU5PpPw1Q6NCpxzn8o2AWhLQronCKCziZB9nrrG4GuUUdozqjNoCnBvK5jUQjQR5EZ",
  "key5": "2pxL8ShFdn4qmU5p17noRqEJoWMSF9RnN9w5t1VyR84A5DJeAAu9oFDGZwhhubKhE3iqxemwjeyiVMuAQX5umray",
  "key6": "H27pmMnHVRNda7GGxo5jXzCNMsCUJcFQeF9cU16RnkF4fAaAYNmWMobR9tQ5NFtCA6KVhG3Xg6HzBfxVfQFQ9pD",
  "key7": "5jdZs5o78usUM1qtBUacYsFVsvC8x8EQDTaDTG4cSMG7XDYA6vhUXXAXe4BrWurJ3M4SR8kx3CpLGRXWnxpmpvAT",
  "key8": "3QMfGjqyWkMNuyDhvDoNBxxnoyRwo6DtmMfN8DsAA8KkpdCgDEcm4MjjBeQC5V1M1uAgwdQ2wp1dNochYhuhFJPz",
  "key9": "2iDL8wm4cwXmSu5TCSsutJ3NZwxPHFA5TsErUiYAfKJj7Wu59LtayM5Dq5GYGkLjSpsfeVyjktSodBueVgX1B68z",
  "key10": "3qKsWTHV8wfQghYhbapfsvHWZjrcdom9Y7QEJz424eu1nPzr5i8QJJbAxfTjD6Fur4fw77KMoTMs9xLVMA22mdH1",
  "key11": "3bKRuakdhuSBK4Ux1uapU4cfUiz7j6wBLjYxpV5yn431aCZr28C4nMyd2NqneQ3i7hw3QPtFGFrPekdxbJzvLeAN",
  "key12": "3mqL9kbfWk3Diby6hza6Sr4yqZNpgEGNHumLDsjEgDhTATskkkev5VxFijQear6zmL16zuwoa3gA4iyiptv4p8BS",
  "key13": "4e3YxcXkHnU66NurvuLuao72rkmNZ7o2Z7xBpXVoSZrpPzyyACAhGeYvjmLBn22HF35HFbY85PQbeZwTPuMbV6ZL",
  "key14": "i5546iFpTX9kkv4eGEixH24TTGCSWKJDyk47jkduhrB95SRqAAcgArkcHage37MEQGs4tKi9KjH93bocuJYNe84",
  "key15": "2kLnDnfwwPMjm516xP2DnP5a21e6pgSzzvL6QDgYm25bcy2PkHfdbQSZ5hWkp4ehnxDqaNqEAQiDFQRtS6mHxDMv",
  "key16": "45kU9s38pCbxe7qUJjTDj1nTY4VDYHEJWHecE4hecQCDzuDPzirifpkp4z7gP6yq6w9qkh6u9WpYdz6SyCjbXqe1",
  "key17": "5CarMCianiYsYYTn9nWVANJyp7xQiDFpNmUvExFLkMNE4TF7qMNaStBCczd5m47TgSJXZYrbC7gbVnxgG2k7RDvK",
  "key18": "2hcNtY4emfEBoYz5qwjMmgCYhtLe7aUa41De4s2gxH6gL7KgX3uvTGcLsX2dFuiBYofmPtbLNoTZsLHiJK2MXYTU",
  "key19": "2dk1aTfE3MpfDNHmfK7MCcByLihTBBsK8CkcbumErjtKqHGGa2gPoGGLhyUVp81TCWaKTdQz5Hw1QLNSnWDESya7",
  "key20": "2H5koTSnV23A1w4QwvU8HHbm6UBCnRKdJ7t8UNXq2ktCFLw729AAyojZ8Y9MJ5B4Gj7sJ1ajH6vM513xpJbWxXzt",
  "key21": "292uSn71WLJ7iuUa8rsAGg4b2V2CgT2kecZw7pnkyPuKvn9MsgfCx6FabyMnWbda6cpWjLUqeWMVVa2D7sZY1Bqr",
  "key22": "3gavGmFPRhxpMBZTv1Kyy3wb58RNLPepct9acM7kGLPMZxKB9QFkSAGf5VqzfBeWjxSxdVTgzNTRubN77soJzouZ",
  "key23": "3CjjyUPsofYMDEptk4PWwDPjZfzGCXngKVeyxdfoYMWZg3SmzTY1BesXEwiMuDHmuxpWVYqLJ2t1e98npXpKTd92",
  "key24": "3DTX3p9S4rdFqGfXqYQ7cCtqok45ASu8tTSosqFiHaFbN9CvaLUC5jWENuyiWHEUgTnhq3U1UFaWceMHxa8shG4d",
  "key25": "2SYPPF7CF7f3q3sPf1DaDHqnwTtQMnHpjb9Adu1aqVVPTys3ZYDYJBhm7H7UDMXm4wLZtSkPRYRALzksDFsXAkCL",
  "key26": "3EEvoDi8jrzdmGNrdLN6T6bnkfXK2iQeZ2E3kJxyGN9hHUWDKEA8q5BLjf7y8BPiAAsnhB5RPf8jBDbZFAZKp9iG",
  "key27": "uMNTVUrSvtDLVUsmnKYF5nWhHJBfNw1faqAXvjzbBcswxk75yzEsmgw5Jk1iZsqwAfSBf2S9DeTy9mi1ksDbUuG",
  "key28": "3i3rG1sYfcDgF3E17gW4G6LHve5bGEcvnE5kTvy6cv7A5r9K5fXi4WR7E4EKBfEfEAEUFY7RSwewUbZMXt9Lskvc",
  "key29": "33SPDYBdXTRmF35tUBxnNnhTSaoRt7jw7BS2WAPTqkW32XUbFggjH1KrrhVJ8t2UUi1L6sZdgZcrUrbu9AJkzXhn",
  "key30": "2bTbca1vXvihtJQmWfNuttUL1gXavNH4sny2M4wUu481meEVLrsjiu8SgYdUt2gFraqZrXRK4kqdE5CBmtFGsKx9",
  "key31": "4bdYjrqGGPcvmfu6dZHcopXKj3MriC7EmLrFNbatoGYQjodjqDCBdHsm3uMfwKeJccj1oLLzrVsrRGCpNia2jb4u",
  "key32": "3aYw1qpDL5sgvjUgW4ad4iEi34afMPoSQzzr1pSjwskvF7cFP2oKtyqdGKWNKTqKe9S2vgWFvi8zARDpoupQBg5x",
  "key33": "5fPR2EvHx1SQMge1yMAajAz1z3oDg2upmibQmVLxjdPg7Z5F2ozbawccczNu9VLyTYm25WvoY3LnHWMnoWEYsxaS",
  "key34": "39F6x7Bk2cqkqLtqd6ZawSSwo6HSCzywqpYRGW3ykXzL8utNcYcB9tfqVsvyQ2fGxdsHE6AgAvn6YC4LqgPNgNie",
  "key35": "3jktyRpjMxsW2cM7cUszmkRQa1zw3dgfbm9Sw1ohcmprAkmdKZKS57mxSPL4htKfbkwQdd3jvnadTQMxKke8AYpc",
  "key36": "4qsoBXs9HszNvTikCWD5jNAA2duPaT4aEBe11CobXMz2k8AExueqTadCRne4zUKA3wb1UyoUwvKn7t9HarYdw4oZ",
  "key37": "4ZvMiHqHctFkG37UucnrPBGdwx1KQWy7KJk9AE7AbcFQLeDRK6ciT8qdFikcWUEcKPCDHdLMPKxyZhgdiHwpWC1R",
  "key38": "BZbsnoPgH88UJ1DoyduNUQohS49G5ZrPKQojj8TUaeJpSRwqLN3E2oZ7p4ZwbiSziSksJqRDUGAMZxjmxKNU3ws"
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
