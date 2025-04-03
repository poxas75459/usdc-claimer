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
    "EUMg31c8Ff4AaNu7LiPUGfaNdz6yRHx6mhoHCXXxMRwZZDaRdiuf5HVXNGreetiacgzP789jrJ8sQLjNyourHbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXvtH3m53rqAFxCKZbDAoyeEVqBSJ2WbCUVdugaoN5VBrXdFg5wVyJKzJX7pz9j8JjWDGFJK5DAP6WtcxRVrPj6",
  "key1": "vDb5RmY2kuFYrhCJdQafQErJdZGvEtxQuD5Pf1C1tPAFZjapaPu79bXHce7qWe4Nn5NQm7QHKKQd1uNMj1281km",
  "key2": "nhpm7jYZm64gXLm8c9sPGr6qST7fzYajqAodT1uAxv7wG3yXMwnMj1udVqLJNJT7tBH4SxpDpCm83vR8xvB95Hg",
  "key3": "35DwF8bvw5DaA5s61vmG7na7qyHFPwR1z7qZg4icXrLF3ZCe8U55X8BEF23MGXeSa4s9h6RqVyFqCURogVWqs2CB",
  "key4": "ziquoRrYxkdsE4r8hCwLUh2Kt83oS5x3F31rkGJLWVekvbyYgAoqcXBkf4LiHoZcgJF9LXLEcgNqkZKmkciwMR8",
  "key5": "51R4PkBPkBcEaXUxUpwQhsyYFBbBMZFxKanzE7nuH3pDaxt34f6UVubUtMjMqweKAHavzACWMviqTqztemPTjWTx",
  "key6": "58DXiTGF7uc8931XEZ8LcP1qwLVxt8qLsh4txuKrjwDxRjxAxc9KPpabgPsLC2T4nwEQ6TufUZCZuFFCrPvyfcNu",
  "key7": "iiNqQKWAWqxtD9n9hdBMNDWLyYFWxdcb3Xrxx8ET7LqEcU2tcPahs9adm95D324f9EhaQnGsrHoRR7cK1UJaw7n",
  "key8": "5TTmgDqiHHuaoM6Fj9kC7629j7Ay7Esb1CrrLT2dD6htwKdkFbz3fme3BtYGFJWPxNPrMSLsE4JUbUzwQZ2FCTmz",
  "key9": "52BrGkV4FQ5ryFWcBXgGkcqGoZ2SEKpSGRSxRPK9XD4baWu9g8vV72zMUsDLyVsfqsou8qsJ2PxLwdPtae6MgTH1",
  "key10": "4inSZpBZe6F2HiKGWtSvqDiuYAJhmY1XH9fH4MBAfyfr54mBuNEHsRdHfTm4c8hdav6epX92CNDZ23v6C6HvGN2H",
  "key11": "2swGVmerQ9wwDAK3WowwZRF3J1JKojMVU3AfwHXz3mUSh216tJsC18VL8ATc6QCwcfJoCLWwsubVR5znWYq4gUQB",
  "key12": "2biiRF5EWNuX6JDXcZ7qdL1oy2sTtu1gyowgY88bKMMuerW7MuqsNaNUVPiMxAAVgux6vH43Z8GRoLMtEPNvTP2d",
  "key13": "v9N3nPpRWEvjyFEA2wSJ49crqQXT57K7UPPV5nJdK6ZU2XUXiyvs5cC5Fqdz62hYgJdmKsofknY3Wo8TogYrg7v",
  "key14": "2K6RNL8ztZFL3W5znyyqHXgvnHCZVh3UkLy1Ghhr5DU3PeXpmYUXiuEpqhgZS8Uq6t7JqXmfbCqYiWmTDytJXdtd",
  "key15": "36DymoW86ZtcaTbPja5XMtXxC4S5yTKz1qJkdeTjgPmBZ7789ZY4kQTbUVcfk8wnmq6KfiGwhwqX6FT4jo4DC2iB",
  "key16": "4BPe5Er4uz9HsSiBQrK17vGGHb9eEkmZjJq42np2EXkdaqaJdyKYxuGtUed7m995DJJryjxT7hBKVg1fiydxYpfA",
  "key17": "5Eqn3Ax8c9mGSz9hMm8LenC5MTMiemFjZa5ieCdypg4qMZMyXqhkXBG4zhQ7a7SbAcfCoQL47AkZznkirxKSagTo",
  "key18": "3xerkUAxmDDathaCsxcj9CyK3bYcN8EBYLHxhbFPMFrURb5pPFvHJ5MC5TVpdqN916kNPceezgerN6EeTgyCvR8c",
  "key19": "MtxrdFhdJAQtMiUdDb6KGLC8u9fn9cZgWczTYPsgMqEw83v3KiZLPXGgXj3hpDX8tJ6x1VLxwX6dEa2fiF6KtBj",
  "key20": "5NLvooFUqW32UxSjvsw3JwXwRa2wTwbT44trAoXAzBztEFbau8dAeRJvPNcSuuNBMq53u9e1CARUB2n82cKm1Nvc",
  "key21": "36QzN4M2aazyu5iZvSfHArXFSTNWLLULB7TXSAfiD17aQqwQYmVVMx8Uu9WA9u8Y7gjcyWZVjC4kHr1WbTZLGFyu",
  "key22": "3FYZEUZnGTCHMNQM7mTye5P1ifQMnuQ4WgfkNGk4GR1AYJ2Jymx3L9dxca5874sZsgUtrYkpheSxau3H2swc7sPm",
  "key23": "2siUBkQaysS8BKtES814UgsU9Jsrj2UFoAtwZbKRwub335xZn1xkf9HthhGnieqbmZCK5z1SshJTVrPSitHJTzaN",
  "key24": "2zsSRdPxbZbdfwZkp9hfdW1JybunigEhtGD3QTqWgF44kB4jA2dVoJCDawiq7kMZFupU8oFPkNiyzhumLjsFu3C9",
  "key25": "2XFVjAPp5hPmY8dCMKs2dYfCDfhrAe23JABLq9d79nikkemRMj43bKMAM8EBNFEDwMgxUTRqGGARBxnfjdhJnwH",
  "key26": "2grBGgnYy5P9CzUfVukLSDKK1pBS3bj9cmMvTdaruCZX1Gf4abEj8B29MwFK8PAZrQfkCxZxcAruLX3SnsTMB9Wg",
  "key27": "dwDnCHYgU26yemAP3yE1i9HTQG2jbP3cM1ytFAP5Vb3sFiwSPnUSXLsu59GxWwEfAUbL9Ek8AG1dWQNnFiKCZxc",
  "key28": "5rf5xwotCwNpS8K5JaSnB2Fsh6DZvo5Agpcaqo9JDe3rfxahwYNsaBrTG2RqXdon3FZ73CfKRZfA6izQksMDNhQz",
  "key29": "38ZL5rxCG1pCpjqa3ev7NBK1eapcF5Wg8PZXbk1fXPNqVo7eMbBGyhzaA36nUQGsdYZuU27AZbZ5PrTw4LfbJ46U",
  "key30": "2hdRtvhk34RHEUCkfZyVywwq8ESUs5MTGedyzwun7SHkG6wyiw5qvF488BTqCbVuyScowjsw7x3Ug123EGktDS5C",
  "key31": "y9rLVKREzCxDcEvqFKRbjmjABgaJNzmZWiJKAAjBFeMre81a4nGy2Q3v2VmDtR5koNbnvLonwQVVG6sUArUwNdN",
  "key32": "i7RmgZGaQHghcfyEB3Zd9bS15KDJwKVDu1PwQeDEMWzaxvytmwSNThUDxGkaqirEf59v9NgZdUZM6PYt5aLU9xb",
  "key33": "3wNL1uJAAJ63thXcPxVKp2zv6tEQx6whoRoz4TEwGKupqwuiVAD3D6nZtz7fouJN4U8DQDmCZN4GE4itQkVTspR4",
  "key34": "2DKZG1Wf6yRrfsMe2qWA1G1NSBgAUoMmkYHsJ9iVR9HwdqpmJhwC9YcQBQ8asojKqHvCC9UkyGkLJmS48ZRR1KTT",
  "key35": "3PstearXjqSyPV6zRFG1eYj5XfWbpf9PsMBKrjEGYpxdgqifYBW2h2wETmWi6xwoT4pKM2FrKWCdTRnZrRnVqV6P",
  "key36": "2wFjy76iocr5hibpKs6PCvBMDbkhTFBQM6MpmpbE5Wqyno1MAq2tXbTYkC3KX9DZWf78wvCJyhsmEuTQMr1bEd8x",
  "key37": "46Le7q57YGSKZHVNWVHBu6KzZGBa3XVG2xNv5g1JD7ygbrbjG9QttsP16oF13hMZtCT3vwuMP77NFki4Nvi2QszN",
  "key38": "4cJrBWosHeUeQXmu3yhoQAmuBh1gyNas8mTSSfj9yY3vH5YLuw5rhgcu6eWvjNLMrX4HFbr9HUasHxv5uLcGbj3e",
  "key39": "63NS7BwP8n5DnwZBY7jr7XXuMy1d4PMQSYCEoACsZmYHgJSS6iTHkqGknRbnjHCrDT7uXRrEHnmbo9JfCUgGbc4J",
  "key40": "4Hk1S7UH6KakGdTvEvoJbn62FPgqkA46KN4oRGAPtwHhmKnrTY24PToGYsUDHf2QrSTF2PVwAu9aseeMxXBxpqjK",
  "key41": "3KW8JZJaWs2sGYYxAcrvD6NP5bskh6DArAEwrzNB17wVVGKXpyVfNPviVhFmQpBKvbbEsXoRsDJUMhvefp6iqSr5"
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
