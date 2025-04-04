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
    "2KTSoPXUxY1nkkyZUqenbKJiK7ACXQBwtZUf5n9DnCdYrnNRy4XK2eWPS78CNEViPrD8EiJUT5NardSU234xjR8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtJVdSszc4nguzG7qwqXJfRxMnfGjV4W47roG2gTqVJnHfU4AtckFgCq15D5yWoQUq4Kr6aFRxb5WZiM5k5jJfx",
  "key1": "2PDQhUUwPcZP6ytBURTVLsUandGT4uWQ5rbRqEFfsskVkfBVVMXBXfvfqDgvpaPSqmEfQbofQaxBEyhQkqcyjczd",
  "key2": "trgrwsup52euZPbQoW29xvSmKYWS6oSPkdV5L1CtLv4cdrB1MHKopar71ZJCVEinpZPsKudcXgSbFQYZeA5Abc9",
  "key3": "57K5Krxm3Eozz9oqYRLJz8NDTN4hcMa69ye3xQxKGykCsjpYszpRNfj2iLUgJwSW8EsXrNsKsnx5AnNSFpfmziU6",
  "key4": "T3q917syZGXQnJrYezCsVK5HhMp2K4vXsbJHidrexR3uPznZQnqz9xURSqmyXBXcwWs1g9A29avZquaC4f73HbS",
  "key5": "2MDs6opeNNSkHnVqnRM8m14TkEyQ9skhRGta3VrSG83dGWDUQfAvYZtPoiXeyQvezXZVkpwp33ubkuCbrp42XJ8J",
  "key6": "32fD95Vyo8Vk4h7ppMH28UoBq8SSFWMCMPBi18vZZ62QmQ4Vk86ThByKqhiDRtFRTrGvnUVikbtyuPPjVRbkjmht",
  "key7": "4aTnNq4nYMrgHRodzGCe6wBaHaAKeEhoU5iB8KnmKtDyMLbrBYo7PgjiwThKNREWDi9YvZQWY7i6tC32LSU35hF9",
  "key8": "9Ew192uBXXpDt8h2LW49d3PTCRw746aYSKJL2qETtc4NfBCS67tdJJc1GQTsUDUzA58BtW6N3DySBkyqPfQ3sCd",
  "key9": "BmjiyWugq1aV2Aunt7kQzqiCNjbN1PQhuwit1RqNogHWrajWP8dxdiBJJhqMLa92ZBZsvuPGnMsdhosHQyoydSD",
  "key10": "5HHgfauWXnshasQvZSF9v9UpntCJfpynWkf6aYtLcuTvRcgaymbXjAU3by2s5VpzapKVSZPKyWSFKBTkrMJnGmkL",
  "key11": "4SAVBekq6PE12mJU3onDKJN1EVWBBFHku9F1M61SSG9est13ArNyGgFstjTjUzCNnVZJFeut99sKH7RBKUzRsk2V",
  "key12": "23qtHsR95A79YHEUaDwBUQd8Szd88e86PJC589y2tLCRd8qMfYyaJwgPaL1MurWkfJZrmwfU1qnmDiSak4jWYCqw",
  "key13": "5m5q1iXymeK9WZASkQgVAZ8iRePqryCGsqE55acBLzm8K4HkGPtUm6VGSsNkbG3gyx75jT57CxsPBwTdDxdPdjZC",
  "key14": "5saXmoyNXTT4dqs9w2SFsxq3E3D3S1i84xeQWZ4q9wQB4CifQV76g4z9e7XSwpWYKywbpwrL4W6HkUiF9jzN3adX",
  "key15": "2W264HQxuT4qrr5fYZVjdm5iCk5SbdagbgZ2p4scDeikd4fR1iVXLQZiZHBxWJcZsEg1yvmptfbsPA8rwwpicSCZ",
  "key16": "3Kc2QDk9xR2Tt5NvX8YBtFnEx7NqiDTyhTXozzNNZmFXhtjrays3CXKseRgvHdPvguTRtafQ7Qp5n6tDPWDEyuyz",
  "key17": "4n1gYaHc3haWBJXxgatn6zPSvCjtcdiVy28GwSRqbkm5Hbisv1tPvAgWbutMWhn4a3p6TnfH5trDpybizC8rmEDz",
  "key18": "3YrMGGi8kbboLZC4mZSsLorgXon6mq41nwTgM22dpJPAjWGVsb43w4i6AgkzjXcsiY3DxENHLqTktJhgcemZdVSd",
  "key19": "wew3BDtrUpbCLC2csXs8YwpCShD7zUcFWHqZAVFYcqT9pmiHdrxBYiVguJDP3ziWeYPMcXZCDGsexYc8pEubhte",
  "key20": "3tQiME52Lgqjz69aK9BqRKGw8xfKBy6uUkMUke7SPReXPbABZVaLX4F1SrWrgP8FqYd9Q8WRbPkHYD5qhXGqchxx",
  "key21": "2EZqzxjDMQ3rFxwuCBVEKoLQxSdgTYBzxeUQFKohgAdb9aXNVNGEGnryqGZTZKjeR79tQvs8DpQ8XQPUATxNdUPM",
  "key22": "5ALiq6kWWPXu7SQUrhsbcxpnFG6auK1oLwHzZHESKHixrF4dKyPRt7kfeGY5sxBYEF5iV8uKwVAUBdhza3NsRrhp",
  "key23": "33JBBbDVfhda699DGhpGVu7AP1JUTWAWHf1E5i1orLjATGCgjsVjNoH8Jga7bPocsYnD3KVpYpAXMkZgXtLYLKpB",
  "key24": "SS6KwRitSnEUpWnQEwTPDXgCX7oGA79VBtjhttz4qM7qcf2AzfWhRt7uckusfsAohB8nW6DWxN4i4JWMzWydVbm",
  "key25": "5rLWdAYi7ASJpkrXN41wzTwDdW9KmUqqCMfQ7vdtKUo6qvCgy2zkDrdcS4siDWwRB7f14vLTkkayKbL982YLQXqf",
  "key26": "2SBpZpx2mdFQGrimpwsTKMZGGj3AkArpYpZ9wmaTZ7YFD8T3FWRcXpddSZNK9mcHiP1tokBHkvRSpwChXtekurkr",
  "key27": "tEXLiVDY51bELS9FhEJNQbuBJdvHj6ftSEoUS5LesQDmt5jKJdEUTtNqQdEHc4SftTaeXV3HFZYwMgfKeKHPMZV",
  "key28": "2wsvZUSrCF58EURDx1sKvPKEJVYfZQwYjERyzrGouahfZt6Cu6NStChNo9LWdZv6Xwi23nSsWoU8Vaqd69mHkkZo",
  "key29": "egbDVWBKhJDi6veBV5h3bZvoPeoqMreesi3br9Lw4hj2HvrNMcXAFJhZf2M6yWsyGGrqZLFgsFM5oyZM6YdEfZk",
  "key30": "2xnAELzFUN7nqy9AQWNJkDQJitUJRoZBuUwHrPCrkcCScRzBmfAUCdoTBofnYBb9DcvTGV1mTibLNU5kpk1Hm8Ay",
  "key31": "NDvvCmooogxGmCau42S1NN65kV9JfwjK898N8z7TatG3h6SXEiRXDSTxL6xv66uzGbxEYSwQ8tbQRXsxR4cZiC1"
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
