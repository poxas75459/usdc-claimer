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
    "5pcfEv4teXQBCowCHCsTkjZa7nJv9S5TUmbSCL5FXKDGGp368pZcHqJErL8jrwkXHZhirnSyV2ArgkMS8EhYaQBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BikzPD3BoSBR2Hm7pJu7z7w7h3JCgkDsKinrdFcvjAm7MP29X7heFPbEwmpK69HV5wScm5XBJadDm5zMmTP4124",
  "key1": "56xhmZtayBrsgiB61N6qPfNMmMPSjkSLurvH15cUjKDNJ7r4jXJVG71zoacqGPhiug1fT1XsbRuxGcbPbkdDsFGF",
  "key2": "VKWho8o4Zk7zSAJFbjp23P17WXu3ttRnMYHNPmp5KvYCLjj1tUSas7sa2KYZAw33AENkCmhHUS6fEdV1NMq9ytY",
  "key3": "3wC7AguezLoAaxBb6B8FQXQVvBz3V2bBtNCbyveNSW94RpSeYaHcqKVEHNAnh3i6DpJS99CZqJMH54X3dcKahdVY",
  "key4": "VoWPztHtPh2jTqWNsiWpq6Sjyz3RBKKcLTprgWfxTSAzwCHFMMeivf4FdLTeBtT3ZvdimiVt2aiVLEeuBn1CwwF",
  "key5": "4kCYVt5wTr9WTnmQGGzhvTVVy3Bm9Nq2fJEGxs9A9MpzffQrMGpTs9W29Q3srVA8CHAyDy4ZNVExya6yKqLhmkcb",
  "key6": "32rpMiZDYDdNGSNDnQForCK1Nr5itJe8vT8VWgpyHTeFrXQurfF55wJb3fn4sggnBbHqf1PRyFFxDugW4aNZEoVD",
  "key7": "R8pwne4KYaBUHrMSerVf41Fn7cnheccV2BHdQQudAzZiRxex4suZsmQ2XBY86enu8hRK6Am97hwZhukvNfsa35U",
  "key8": "23L75gC1mDiVUyvmJeCfd7exX2oEDHvth54AmkcxA6nuYt2gNc4NGauJdoNzugx48ZoVn2SABKSBsM1RjPxhQzmN",
  "key9": "2e6gUEYB9mpyuJXZFkahMW27nHC3w1qcwoqKDgEYL4EUt6Aw42tzGUSrDAXMtN2CySUKQdy3ao6vr38HvZyJ7f7e",
  "key10": "3u2Bf9yXgNPqjwFXQbvmnsDnRTb2rBnUN1Tfnc7mtk1Rd7kyCPcgNv2nCKyaXh2Ho1s232PCrQFCS6boQy4WSqEz",
  "key11": "Pkk92UGvYfjCrJijwcHSmwCbPzUPwPrGcYJZ1i72SV23dUSGKs8eZbq5NtNiN4drNoVKQAPgm3h9cL9YgcGzAPp",
  "key12": "3fdptRCsvdEZASPgLBnbts5yy2Fopey7LaWPXAsVCZULusytDr6SwWMmriHHTbi6yffWXZfWp7cFXSz8duyeL4R6",
  "key13": "5QQ4wR82RACvYasUrnyRqc99sS2EtQpyLXGKZbPbnFhnighB4ZZeKZzUKZdMgCfjqKrP5vJHQ32zNY2tpmSMdkRS",
  "key14": "3aXK1BmEidBrp8rh2zJhdwQXRbPPpd11cNJZTcA8XgoKgv8w8LTLXxSNsH3eNpvJP6eeh2rL1ELbabV9fx2KQRzp",
  "key15": "4aRMs6qWsQnf67QbU211yVAwL8n9WVc1nme1n1H8fAjgwpEV6bnF3qWxSc9LKmwDKoCq1S79fFhhF5puVbbSgZib",
  "key16": "4CRe3bvsxPyVSB4iVmo4jNBMNW8C67SUCHvQPFu4bqFhBoNsFeKY6TRS97w9UUNKMB1QuZJxW4Sz8AGRTD19wwLz",
  "key17": "2krFw8VZyWmewEkCZ9aFGVqBo6NZmHxKtXJfmGR4CDHZi2mDbJ6N67zzKAMmMnj14oxeUW7Zf6d4u2u9aUxzgxc5",
  "key18": "5gDMqUxH4vkGGEVK5e4pR18tyNEYbvpguy5ZAqxnnPhHAN7WE8TmfPHAgVHBdLBv7vEDrFzfaJh39N4QCFw9FyZe",
  "key19": "3ytJKwCr3zTaiUweB5XGRVNp54qfFivFdqVaGE4F8akqxJVnfjeUawqLkKyFecby9P71V5cpaKrFL38jcF3GfPc1",
  "key20": "2jGN1smboixrjMPpyuQGVNJKp1XEGzYDjUo9UACekqtCnbBNviA15nDZLt2RqfF5YbtrsUp2RoURWxkP4MHp2GDg",
  "key21": "h7RKsFevJDpxvFHVbx9LNf1Q9VZd3o6swoqwrerPKa2s6Qaduy5763a2haBh3zNmmL82MM2ejrUDCZPCz2oeJA2",
  "key22": "UvpNLBiQmxvS3wuuL9YB1W33Dc1zpqToiUAMYeUQS8SiBUsCoGgHYeooy8yiCHdUZoWZBZiJhiaAV2sa7HzNnck",
  "key23": "2jzFfDk2KsHt84f3X7VjCpWoph93XGXbKrCingqkBM5SNzu9RjFH4JQ3GMti2tho4YzJ9X4zDJnTVncMRLzB17ko",
  "key24": "5frkfUdg4FAKCTZyTBbqYfNgkEWvAo4Q4iZyMVBHtPknG287mhZi6ixQP5zNMJUdwmB44X9RGa197WYzPy5YXQXw",
  "key25": "3nzLVadiC1Jg9t2bAyZfHewYcBmvrPHLBJfVCTXrDW65mtQgyPeCyFWUBzDuCJuEZZ7pEqqVt9Ti2S8tdyKg6Fic",
  "key26": "jvLBwGVAcB6H45ftmgdpP7ZLN3roHodYGw8vKFLuHXzgfRWV7agCmks2nT3fsacRV9PYaB786w5SEngWJgkFkUh",
  "key27": "3zy94vVS92KJH4jVr5X5GQmj9C9uivt1wKab2iyKuJBW6Tfi8Bh1i13h5yLJAqnFvKr9w2ndSaFL4zpxP9pWNa4U",
  "key28": "3nhvpDGyKbKF6e3oepXFEDtACuzEEunLmQB3d9p4k9zNkceAUhiJEYYtvfsbAhzMspbCp9iREETWntPyVAhd4whs",
  "key29": "4cZxAaA9bUvyjmmy4xpNNBB5RQ3sWhAQnZJjJFouy2XGYjQxgvkQB12zcKRWi5PMwnZsAX4hyfZYBKcPbtnjAHU6",
  "key30": "4GeJFiTMcTjiAa4qdx96PCVxNUWN24DrMXiu5gyX1yDLYM71f4DVE4GdFobV4LjMEewKaEEBxGLyuodJqkSNQsp4",
  "key31": "4BKKVrFibvxn6Mjsc9wuN68f5cWF39raBiokP5o5YF6FwxDYda3sxHyyAn5mV6VgtTM8qJto9yNrv3yMhLBfzBxR",
  "key32": "3j94xZxcYCB21L9Nx5RdqSezTPdVyiJCkdGGw7uxjjMkwzhkQ5oEWMMX7JusSE1piVkQq81zdVpDBHHh1jqogoCL",
  "key33": "D3KjbZbib4oNj5V1MzWLkUj28gDm3si7i1JUd6JWkGZuysTEzcekKH3dinCN6YQDutcUEZVz9KuQnGZFEj1D3s3",
  "key34": "4BzkrJVxhwYRJu5dk3HW1bFudLKTYZ8xqY4j1nx4asecZWQxp4ScBs8AeVL8M1AxyPmLFvUcyFaX12BPX8tkpiTd",
  "key35": "2Rn5Q545o9nkWVc1aQ8wgYAdjoVDTfKdrCjqTxjoE9R44NQKFeJRyh2AEQwJoWcLuMPZva8bjHoPhmzDLLBhi4SM",
  "key36": "5Bwm7cTo5jfRjvAtmM785zMp4dhyXxGSodaxynDkMo6bM7WRyrASmqesYu44TY9f2gB4tYGfKQb2nokBep1GXUhc",
  "key37": "KStTKQXQPHJ3PdFpFyfMT6MnYcvEBdFmbkv1yNQMJDHf41Qz1NTqaJ8bdUArpQ3DUzdG1vhNZWp1Pd1WPAPpNMQ",
  "key38": "65vbRZVSvvyhKPZtSFntw5gp7woxrQyFyk1UBc6h96rNFFU7dMyU4jPBwqf4VxwFtavyzUuMywwyiiUD2EZc9vCW"
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
