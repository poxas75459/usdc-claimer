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
    "iMkJCaysJgdsseiLcHXbFynDDUThvVtfpqGKtDAtu7uxhMm5u8teN222dqE21MXsVH93XNKkKadHqrWVbzZht1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HECvg9pXfT5aXoYJqn6ahah76j4aR3HLS9fb1pT4LUNf4qUeapzLNDKMyQnXo24aXZ42jrKNKDuhT9KNMhw8bF5",
  "key1": "2B8vX5pM3PCG9TPXw1g9ouymUdzFEWUTLEGfBe6vUAGqDEdytCFNjviM15ba6T4UpkiKnvHm1WdBT1rHFEMY1YoY",
  "key2": "2JUDpYRAoi1VY3RAvB6BFUPsjCB4ZgVy9A63jGbmhnvjcTR7FDrCr8zF7hELJcysJTGpb4FkTDVjzj5AwGjdY37E",
  "key3": "5Pwqyja37zidRPPcehng7Z5kMYKWDwWceJTeWa6Yygc2DskwJMb6PN2h9uk5CYC8FsjHtzgw88ti9LhrLv5c2cwj",
  "key4": "3MQrccDfiBw6aDzSGvzSHSQ1GHsbUtwSDGfXHphBhM2G7fQC2ABtk4KmFrULPMQoWbqcm8doUHr4qPsQWmfDnEAP",
  "key5": "afSaQAhzvfotJU8LWAnHgsJV3HWNuj64Z6AEqHKsnvZRTeBVVTNgQC9sfnHdcsVVMnUxdr1E6vhFVLErWf4sVWN",
  "key6": "5SVABK3bDm4sV9boVCszwLriJdZwXQrBmeTNYhw7EQEvkikSD4BftbqvN3U4zxEe3c6ch6nQrvhvcb6XeV5LP5S6",
  "key7": "66P5APyWsrYiTStVzZMQWLRD6QCjhKsEbeC3qbKjCN2eh8dxVBJsVWRxpWD9wkP56aeb5LTE65KPP2duoMwixCbo",
  "key8": "9rfDtZcVF5F3hTpLp5nkwhQWfat43fWFS22WetrRjKWB756MngWH33LJ3fpY9emWFn5kR3U5iMTVvJQ3wqZYh8j",
  "key9": "3iT7uEnhxXXJ58Rs9PhiwfPdgUzriEGAYthXpDHRihADWAuvJ8pVjHkVYGcyzseWBeug8x222BkksvyfvvXWDyUA",
  "key10": "5o4uTQFZF3442m9M2M1fMtESrRNHHnxov2wSuNpVqpvAY7ABiqkvdCXxLG95boWmtaDfdVsruMW43iyxJJfQ7EH6",
  "key11": "3unqxx7K3enhZtDVwz87jPULRNtweSJH69RRwg9g2QVZ6NYiLxkiDgk8gYymP7SCC1Q7zvE27FQK2BcoEMYvzHdn",
  "key12": "67VfPTTwpe78z3fk4yJs6kutZSiyVASaCJz4fGj4higdDXDZZT19ovpQL3s9ePox6ekEJv2TBsU2zBRNgQh8XFou",
  "key13": "jQPEUzP3jGSGhsNsEvnZExuzBVSzy3e6Gf2UfQc4m3PyHiKMmMCCxnb6qztRE1ErKqgWMcjydsKjLMudcNdztJ4",
  "key14": "3dVcNZJnM3t4aUGbvboLQPfaeRsHvag14vnrtWGsNhPzpxPozJ3Cv8MrMmEWe1dAx94t782zGcQBXTBviZgbPCNh",
  "key15": "2B46H2vE3631DN1GoNdRXjYvy2SKoeTuHpbReYA4RbEWcN2TpsDHcNWsoVe12JW41owRSJABiTzafPkezhWB4ZEZ",
  "key16": "2zEKSRXAtqCSftqR9dWqZuAQMutfmfFeCCPP96Nmttz7Jqzh8uTv8QZR5jjUE1U9TJ5EZQSNTZhNQWYPoY3DuJRP",
  "key17": "3q2BBMdFLdk1K9eu9DYiuBohD75h7FwieLtUJAXa62vRhzPFwkbuq93M4oRy9dNJmpt2YSMHmBVEtDCLwGFsFoDm",
  "key18": "5cp4qNP8vumDU2mjKyvMcM22ifRZ35voUUkzoo45AYb8QhzgXc8zvNoGN7V1vpe9DQDy33TNXKn7jkvHnLwVGcKw",
  "key19": "5U2mUjnffN5ceunPS4TkeBhhoK4Tr2EQsZfTvJmRLM26rxX7e1c1LqDbE6nGsDi4kmp1gMgxsvrjwwToowfSDh9c",
  "key20": "3NRZdT4wgR42Ls8FFdwC9McfxTo5KNaiv8unfdb6GqatFGjKsk51RQDWUqzNaeGJC96dC4XroBf3adgk7XWvc4gg",
  "key21": "AJ4UMrVqQyvdDCQ29L5q5XAQnXvnXEVUwnnmis9hhCqzFQ6VDSY5tkDqZhtVwvARnY6LwGBAqxFqdktWy5vubmL",
  "key22": "3A89CEkZDJ94pqJ2Noaji2yApbzmLVuaLjdzacsKkg34hDKqsQNoDW4oP7aJMrEubJgtadLMaaUH3fbWGFRTsdMu",
  "key23": "3NZNi89aMFeoh6Vv9hgYWLpK48jdboMTCp9s4WP9YBV6Fubms7yiECA6XVRBNRt3xVtD3wWSYBpeGQa9Z44PR57u",
  "key24": "5DeaS4tJKVmjt6vCuJRnASUEaUmg8GZngWD9pWS6cXLyKC5ya6PZBT1zazdPrRUhQfgG1vLW2cdyiTcxT9hR6R5Y",
  "key25": "4ib5U8Bw7kR5EkWN4FctbXQaZDzsqCDU3RBGnEiMgcdveDCJQwBhFcnDmCyVAV6pPdU1Q34Zndy6y2PyrEU8MGRd",
  "key26": "4N4duYumXHYNBn67xhLst1Ky6pXhDf2zDnKCGYznWSBgmSi7Mfc1qhNueSVVwPizygRQ485Q9zAZXUmTKhe5a6mY",
  "key27": "3XxHkiQtjsmHFvaLuYwT6Mh5MYK3De6twbtusaCey6z7ufiKvjX54fGkr5cxp1C5fzULgxZeeSE8HCT5c8x3D6ij",
  "key28": "5Te73CkxtYbGWAz1hUNHU8Fwr4FfxgZbEKT6cRW4RMPFCtPcuTM9dBzU9jubTimEw9UrLmTxR2tx2U39bHWMVUbc",
  "key29": "55dRqy6pQycKw3MmjA7R8d57jHodZ3wWbxHBAh2Hrd2rkorqJgmF7nCeq1EeZZuxSDHTwJLdBcnzY53gvjJ2pJew",
  "key30": "536gBwYBFb66nhMxtHXgiz89jjWVsgHjpXiYebFbR5UXMN9mjDppsXDR6vo6RMexgL8n7EGTCa1awafJgjhg7PqV",
  "key31": "4kRhUoUXnjux2TpcFFXBNnccacwZ4v7KfniMHKZPqw2B5ck1Y8gwE2wEMynaR8e2Fqfr3nyGgw8EQ3W9ZTgqqWuu"
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
