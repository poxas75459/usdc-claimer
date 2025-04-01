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
    "2birXa6dwAG9q7CUECwbMNZWoogTCY4CXySHcW2kcyeXkcjcLXU1q4n598adnMNjTcVMEwdg7QWMPq7FaJ878P28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWETVXFVGruFCSHaQMiaDcfY5GEzU7mEDUUshGvEWGGtYoDpAckFUWJDm5zfJBuCtbqweEr85CYghVKbt9sceC5",
  "key1": "7FYvQwk1Kkh2mbr6d79pQEyxTLwaDTF7FxP9hDuoDgkZCE4aJkph9a9DxKhJg6imTrWdQomyVdjPaBPxGpeaXKd",
  "key2": "5ZaT2xSG55LPnmtTmygi8vEFWHNzQ7j6BCnirkTLTHor967hfKiL1VMq5X8xgJW5bEHvNkSfvRudMsNsGZRWYgEP",
  "key3": "5XWJxQLwLXoyjhPYjBpUj15Sj34KWywfjXs9cfs3CiA1y22VHF3Emr5JkRHso3wNWwYvmYRL2jURU2AVJY35nEKK",
  "key4": "28DGsmqqEkE7tAGAMFyu2k1AMycQXXZtCiLBuHRMUpv8dvmfbaAcV33ixXhXtRE9WCrstTnTzw8GmqmPitVQ9HjB",
  "key5": "5zeSjNiEdCmRCaCxLXc44nkCGBRqEz1jzXVMVv4NtaLvqfxV3se6JcFJVAHBrV7B3cJ8QD11y13WG8SDFBnPWFYC",
  "key6": "2rUr7a3sg9z6AMmE4gKfL7tFR6efFznymJgHps7iW2yWGwuHixZA3YuqPNSfuJ7ErWobDTvq3izSdN79SUpgE1qf",
  "key7": "2ZpTAZQdG69YG7VdXuKkFkjTUVLbN6Qi5YCr3WziKxD5ffRfprRDfgG9RAPJnx7PvoVA4qg6SGeDvULHFM4o7Cqo",
  "key8": "3z5PQdEbkVMifAP4AGMmwTjeGXt6B6pSpERMMVnXWhQihnrVqavC39hP39R1Qkt4NfvsmdgAYQ8cwrZpznbjSXWw",
  "key9": "nPYtD4uXcjiwmHZJ9C9tESWTx32bLHdxiZQx94dnRg9DGYcUSVwTV1dUviixYfLQRbiaPz66wDFW2b2kPnGfukD",
  "key10": "2uHYpPExvf7As6964bTTQf81LPDVixGwH7yAnsVNMZQ2gGRzRkS8o6MZ9Vb4VmmQZvJBq2hxda2nijHt6XvQ2YvD",
  "key11": "43xbfJYVmxScsDwE5ZpCDwMGTqSMymBhpMtSdpQACQZFGrZiv1Tc61yvHuAWjYfvZb59GGhHvvDNsu3R9F4V71ha",
  "key12": "FyifuT84S4ywPqb5EyKwNaxk5FKwGV5gtuUvj2PVvjPVVLcQbBhnoiZDhb1UVXARGSYzgYALRjg7FggE3ZhRqvq",
  "key13": "8XtMaHZNMfJgmCNMAPx7ca2vZPMQhUGfVJizniussTuQctpitM5fPiwiUfb1v4KWy5ZQuLgP1g2ieXEcHneQpGE",
  "key14": "476Bn5MgygUWDp3Kq3cS7bcNwdGeyyUdRzaw223kwoA4jzt2hw6rqgNVo9rRmmxWZpyJ3v6f2fdXJGFPRU5ZrgZ5",
  "key15": "3wPpdKL9eTGvB7ng896TAELnM8VeX2xfiXj1BMG6KY4nsSQH9C4zHQwWvtED1p3VhCTkCXJ9u3A2hSrR7mTcxpMe",
  "key16": "5uBuXhxMP6WQcY87hUunTe5BDyLzv2TqtwRvztqxRiYd2AYF8LB8bWK3YTTsFJqRkgPk1m3L5LwUt4NCeAv2U8qb",
  "key17": "3EAex83BA6A9aXG4YJNRvhwESugAi7qeMv5vqoufd3qZLJeVwbL44ht6sppSuq2X5ZdK5AUy4xxP6PRN6xGmD16R",
  "key18": "3WAgZjyxGripFsVWsnh1u1WYiP8rBKND2q72EyqNqAAGrzcL38GKTqGFWoDJA6udBVUv2P4n8D1ZSJU2CDAv67J4",
  "key19": "294b8r8rzkfzNApRh6bDgLzVKeLtd8BgbmDB9KkjrrkqPGjpNQhMhp71q7tH75UCHyPcBMf8TKXP3DdkXrLNNaKE",
  "key20": "4Xbvyawa6oVN4YsiVY7K4uerKR9jW4p7RgCcouU9gJ9GCcQuEVkUmT7RrSs2NEZugYPgFqt9FNyDgL1uFWLTNJar",
  "key21": "29qXEE4njKLkYJWWwv3cDDUErYV5LpSaJNQvNDjErT5QacmymdmtiWctKqPRABWURLNDjzAf8dSThtUKgiD6vU35",
  "key22": "5jxgsh7hujTohrB1MFd9iRigNVAu17XJR5k869U2kEgago4tkebVQ5uhSpkYeYsMGAUA49Gim8qyo5KxTBx1J4N7",
  "key23": "4itvHYBKEho579Aoad7zf53G91a69a9u6v3NHL329TfPyBV8AdDhAsbHGevxv5sdzD5Yftyw8zVPBYJbXi2aT9ko",
  "key24": "AnC4mtW5NZDfwu7ohqm3Dy1Gx6XguLUiQZw5gCZco8dLy2LYFYYGjBrT1rihNv7bFwddb9G59QCAqxXSPYVQdEp",
  "key25": "52pmciFKkvToy27TeSMNau4oJHKRNGBCQY7BoQajV1MVv9VH2ytK7cPpGPzx5iHeRsSGWUcyhsNQ4RRyt6qVk9PD",
  "key26": "4eN6HsSsXtqXVyhuzwpXuWbmArBNRkwkKpc1yo6EnR7pCjBLN8krXWfysMZnQxivEKFzaBwons3aumjdMFGHEWfk",
  "key27": "4VL5fDtPBL7KLsNfVtCKY5Vu9Hsc5qcyapFXGJbyx1G6CCZaA7uEPmRXrURNWfyXY4LU48n3gxbrwHAtV9AUbRqb",
  "key28": "3gQ643wJxsxv9oLvfRqDY36YSYJHFNWWmamgh5uzWhA43RGfNubwuVQQ2Fn8HFf9L7ZzFeELNHYcERXvGQDjAPgJ",
  "key29": "3z7z8LZSYU4YtbeQk6nY6TtN5U3xSunU72d6ZRZwMFFfhqeKhHAqKZ2vNcQVsVKRhxvCpM8hfMCxs4vyKVG4HZvu",
  "key30": "265fmH7BcRHkGVgo1sf5BXQ77dJTXWszV8roSLvxv7Nw1JADaWNPKL5FgodWykBi6gTCNmQ5uHzxa4afrY21fWi5"
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
