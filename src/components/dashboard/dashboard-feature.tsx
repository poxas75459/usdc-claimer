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
    "wEizjk3mfAieC7251pA34Dr129yceFWgEL5jG3rgvRFSg3qzUZJtyMTHRCGhRcUZYCC1sisE9JmdpZdemxB45Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w4ydvrJrqMdwXswXDbkGuz58QPo2iCvzeS69JrsCJ6gvaRJKjTRhFXFh61iinTYZrUG6Xh8WB9HMcr2gTgzBrq3",
  "key1": "57ijSbrkFCGzM3oWRRqCtQ46weTAxQfMVNdKDaYWb5NPc8wC4VvQvE3UkSnPFSio6Xiw8yWbAEUmsa3EtthKvZTz",
  "key2": "wtkV6qu3UZjLB7s9ttcFgjXTPvm1SqnwiQY9NPJfAgrs7UKeVNptKTXCNkQ4XLg97viKqHEvfnyAAH8zUwxMbur",
  "key3": "4A28UTPFaRKno3EXq7p1oMWJMXvXgXkg7tvGcdCmAGMQh6GGyiGzKyz4GCF1tddRdujbdWZHQzSCDEsASAAtWfAb",
  "key4": "5Gf5gDc2eXocSxuRVftU5HZpsmEU1kA2E53YYMeMdU65puV6JWgLuTAskmADWRv9ersxiG29LsHpMXUhqbCoyty5",
  "key5": "3JyNYC3itZKqur2SVijhNGxB2JSQMXASSDkToz3U9Yx1kw84A64PDLHCGa3HCaqZdgM68L4gP61fZCURYRpT8iUY",
  "key6": "HoRv2z7hGYNrCh1dve5ZNVkLCjZhx57F47LxRPLZwBoTndciiZFk3yVYrPAskjexcUQRmR6YZJxhjcYxtkqyakb",
  "key7": "5NYw4ejRVAsX449oB7FvFj5RwmJr9L6NZ6ZJiUehTaPgQ4gAMEXPrnCaq8tKPtKfsfqshMPtfd2gojHVXvMgxJTf",
  "key8": "5T9sJnE3facGG7GjYWDX98MaRv8t8h1ah2jQKDLZYMWo5FBbq5Xg8qY6YQf9ZL4fgGUV7URwJQZQZEWVtgWwkrXE",
  "key9": "2svwiWbqfQ5hohGeN8gA7DNzVpuKHuYanDgBxsq23i5CJJEDpMDmCAfws4YyQhi2UPf5tzrnZkBBqWHbDiBtHjqc",
  "key10": "4UsKyP6CqVksQsWZt4ZFhPXxn9FAzyzEKHJAzFaYWtv8SXyV1YxVbUmqGV91DsFmr9g8AaAyGrMLdU2RWRdckGs9",
  "key11": "3yCv1kKcFzGDAtQChg9ymAjftRgBJ5bsFQNtBmRvCGkSpMwdptDbmsmLNXYqAsVrHNDAnvSi8tbyCHbnJnF6Siz8",
  "key12": "62iKQwSVHdxLvyMMjFBv8Y6iTB35DYoa2G5jKCEpccX7tkakzKfPUugvcRzbwf6qmaBzUHwa5VwCJJHvTZPrY8Ey",
  "key13": "Sj9P42aX7RDD3usnXLm6sZwBPcj2vEjxqAYnsUVzGasyrC4fn45DWRfDtzC5TEMFc4T3V5MbPgTEURwvCJuXyP3",
  "key14": "U6gpWCGA7Z1Skq1AvHjXX9eGtqcVhtK4t9yQaXdM2sbPPzUkQNoirWewQbnu7roZijLiN643syXJAVfWuMEHSHR",
  "key15": "2BRezL7ykvbRSPahi3wDy1yeuM5M55zwwHYi4XQJG7NAkNVPUDyoHpF95PcK1yV6AGPUMtmGuEeb9qnDB8uFjqcz",
  "key16": "2ff3phhuwWcyJwzQ7orqdPPTYyFRYix18eLdUQGrK3yhBBK8wDpzA5Ex6QewVxMia6DNSB97sY8FDk68u1QXD87P",
  "key17": "24ustCUxu6hXv2jp5THHJUXwZYgLtT1vMFKXG1PDyjZvToR7kfbccAcfHzXZenneNmG8hbG3SLAeQi5gLCrgmhn2",
  "key18": "4i93tnieA9YjFVpNQcJ3ruH8Geq4esKncWBhg2yokyTauJtAqEHx3SXDDb8RwdeocYYMCKHecrA1bK9y25HfVzws",
  "key19": "3mjPPjtuGrnE494e92BgfSLfXn3TvBZCXJz9MpN6cvK8JESFVeFYJP3xfrpqXxmwFkrvtgWTz3Rvcqv1ZxNLxXcU",
  "key20": "4H9YQUStec7NkpGuRzoWk4GFbJSTN7rnn9HBzYLwbtgUmVYpLGMQDhbawtfLzL1u3MpvjUnwTspuwcdJ4RcKUnmj",
  "key21": "2ievMN5kgSfrWfbQMSsYA7b5etb8X8Nfr5KfwkoAWS1w16Bb4LKZzTnmKDtuuMiSsj4VRk7iCbPwqNhDfC34qn5B",
  "key22": "4jobuYhwXETVnU7P92SxKtFY7huDF6ZRUfwXxPAkQHg58htfNr3x2bynodvTaViK4bdY7KZRyNb4sQsP2hyBtTsD",
  "key23": "Chc8kQMTGKnv4G2t1cWFa73B6PLybzkpfv9piuNFzec5T3wzLPN82rg4N2AvuaY7An5fSWu74BVuM5tzEwLYAnP",
  "key24": "4BmicREXcrorEEd9ui4q62kHzromcNi2aQHzTARZz4MzS6n18DpKAeVFzBnGcsiH9qXe7nct6GMbAuuDeZFWHXWL",
  "key25": "3SkZynGLai7hvVdiA7CCQ4Ncq1W3GrWiUF2way8dbR6oSTwwmy6q8AA8MnoKEnoKGQ7ZVvr8rBZEtVAkCJL61f7c",
  "key26": "2TJkZ1otFNrQ9CbXMCMucBVkRTHwWzeEDGncNCXSAAQ1wuMB1PSX6UkeXXrHUio6xs1YuyMDvQocwEVMEXEfDtaK",
  "key27": "5E7LSnZhRW9piqbLjquhgvtDWc8vDxYv5FgqRpQjvLjvSGsnHbfYdNgwTd3nLiewJH4ECzt1j4gEpus8fXuPBBYf",
  "key28": "5xKtv5o3LpXhT4q2ciAfVtxuw6phCXTfdx61fnmYLxABvnD3rzEuikx9B1yjMA6MAec3SVKA3RV3YyJe96PLYeVs",
  "key29": "5eJ7fGH134HG2knBMN62vteoyJ5zX7fkY9zDvsfscxcRb3YR8PrmzamqtNQEcX8RtJrZ7ZVCGiyVJ9xbXfFXtXDT",
  "key30": "p3QxyfizFhFgZ3E54e3kFYe9NJC7qfKpXYpV6bRPLKEiMJgeTWxexDZUumGQMANaZg3ehQisagkq9NSw4Tu7Y4a",
  "key31": "3XgiPDqWbCSESNNtPkk3oQYJvgxyijQP5fY4uANDRMvQfTxkdqzaUD88HZRB2DmSSmHGyZkmGurteKYjPeLtMDfZ",
  "key32": "5dfPVtJHV2XswPdxfyee2hf6aCD9aFgqfLN51qLJGqYhvSMckj1pTtJsFewsuFZFJ4f36BKwtbLnTY5Ad9uhTChY",
  "key33": "2xd3UmWFCzXVe4CDkGEm2HjQpZE4ncBxbMzTiWhySTNn85RZAFzgX9iA4h34pJrbfoijwkiNQLnswho1zM8zU6f",
  "key34": "2ziXpe6aqrZ96TKtCaVAt2cVcn1GPPhHsXRnccRKq6m6qbAz47aTT2hXq2dnThmEoYBby3qQ2DySE4ehWPvx3Vi",
  "key35": "5DTytoUoLYQZXeQRrdP96impnVtEdPZXfgerm3uJnZYy93RnTfReerKeaUW4u5Aw2fgsHC1qvbfaYQYt9u73eRUm"
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
