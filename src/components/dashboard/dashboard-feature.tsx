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
    "37cFxBLRyEcXHwiCstocLUuDP8adVaLSLYS532YEJgYWMciTjyRrqh35UWrXmiAdvxhY538aH921DHyNrZDaAJrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kGH1JUt2Wm1cWaZ3oGqej99BXmu7F1EG39qfhozBPoQW1b97r2vzHVNguy38MxCmPiD2TYMcYx9kS9yAvtrE7V",
  "key1": "prXYpNAeD6RctcMwEtNzh6QoWHKkyyEaSyecg3uJRqmA23g9umCqsASFjW6gWBpePHBJh5hn8ZsTKKNPZaHCYkw",
  "key2": "32XJS6LrrGZsEjyTPAFzaerikJp7cvxESWmzYkHz5Zx95rFfKzqnXQfyEb4nBeXLrCrersnEa7UKHdMEGPxahTWr",
  "key3": "4bGhGKWURehA7n8G8tjStBdhXC8xTQ2DYRGRbdY8x2fXJTZjwWuCHLoJQhzAGUuNPBnmsFNNv2uABkthU72wKYs4",
  "key4": "2JkqkFcgfikrLRKwcLmayVXf6V73Bq5RgKgdNRNTBHGQ6xEuLc2FyhA7advzuG1HUxP8GRHoAFKpkNYKWKtxkywM",
  "key5": "37WEF4HdJtcB3CZeSVbP1BdKCVBmFLJ7AURYLSe4VvjBnXY1GS1B4DhNMoeSLHLaXvVynDhjayqnPdNgNPrXLwZR",
  "key6": "3JTYeQQnrh1NzC7VNaYM46TJfQUuBB4amDoHrF1SuGiHz3Pi2WAvGPgJS2Ba8dTr6KtiynYDiEEgk2ZCEqbpde8X",
  "key7": "4RGQu5UDWzPYgmMk98g6RkRG5TsBMKUU7XEu1efDWvhp9hjdsxEygAaJ3mhBgLdtiSFM6QYJaQQtPng4eeaUYY9h",
  "key8": "3GLhpJiXxs1x2WDNLx4AcMX3BFWa44oi1fGWWsLn9at9hjqawVESrVbaMmxHB2BpTaVc3DddonXPBXQfmTzRKS7x",
  "key9": "2HbA97BaxH7TWSt8G7yrVPDfmNnn8gQ5QjvvAtbUz855ygDo7p5o5SWfbkXnNy8SkYC8ekJiWxcmAF8SyZvMkrn2",
  "key10": "2LVmAPXHVhpeMAAx3FVMgCnbAzxcPqHDToPoUxJprHNpNCEAXN83V56HSDMQrxRju8AJN4GZcsSULLrSuKWwMw3D",
  "key11": "ovqWcYBDtVZypWFZkaNSHWWHxafrT3gCHieTJMjetrUFoGtp6rMm77ozi9rqAYi6PQtA2Kbj9Raihr239caS3NN",
  "key12": "3iynJgRHtzgTVCZLiq4ZevLYY9u1TFixQFa1Narzpd92epWCqEanyy3DQ2mASmK6Jo1UNfCAhKPpXdZcx9qKXpm4",
  "key13": "2B5QLPwgxpiWwDpAZR5bwYc7U4rsuJY9e4nikz5k1ctnabGt9NQPcEdXnsdKNcKKaBdQsTM4PrKSX5sQuayDCuVQ",
  "key14": "KeBGzhPcUtXsdqccLxbUUwYEXtRhSciSCVmqzJoggNmitiUa8i6eo1tmRfE8CTQLWcyz9PCkxM3NkDkRfxLK1fb",
  "key15": "51gYFrUzPToQjYJ6PCR3cFVhkWbxqphwAS8QuyyRvyDmNU2xHgYYFaEvXaYyoSjDaNJqJG74WrpM6JHwqoBHWqPr",
  "key16": "2eiaSDMhoSzpedANjDB8SGcED31tn5WdN5ACuaR31rMRdYqu58hMG9ijoRabSiYNK2ifi5fDmZBdmBhmS9MiQXSA",
  "key17": "5bG9vB2PLJo5gWdM15k7fDwA5PkwLs7dqp3JrdYQ82127oPVL1qZbTTRHEX4coa6EAGc65y1catWo7ZL2sV7UG9y",
  "key18": "3inxJjRLSFjUaY9tTGSCEo8mnNLZ8hyvxc1hWCp3q6uyKTUs3mVYeupRxJWb3hhMtMgmUxM1xkqQJhgaancLAJqM",
  "key19": "3P9fmdz88vMPSivQinY54Z2B6BCfNWLJ5KT7MPGvfCu6sGLnYzUDsqkqS2s9LXxrxirgp2XuRqfrvBDz5KDNiKCc",
  "key20": "4SAhKRVE6FA5Can9xNxQe82jnpmTVJ1t5aizb9SXGQCezfxxhqgbaTFKSF2ekALGkx6NR6XMsB99s7ahBTj4CaX8",
  "key21": "43N1ppkYCg4pTbNCqY9ZguEDDt9P2VJn18LsYcGVga7dfTwyu7oYS7HtzvbVJ7nQ1RxbsbiF8TumdAnwURPzJ9sV",
  "key22": "4uyH1DfPEAbYgX1fVHaoxf4PEva1k7HEFARzge8nJSe8z4Gg2qanoYAgeTZ8HtrR9ido4kzxqKYYQ3Xo2eUhKvF6",
  "key23": "4M8iwzBPfbVS4nrpstEXcQUDkmaA6793s5iUPZ4J5z5Cz9DorWsxA9D92oy8Tpd6A2uMTiKwqed8NijjRy7eSgAT",
  "key24": "5TGwZ1qwiz8NLsGHaSBxQJZK8BDzWd9EBWHWgLxB6VXj6M8kPJvBjjpEgkfftLFN59UT8J43n5RQAiNXw6drf6gH",
  "key25": "4CVdEesmKYoYzmSDVUwSpNLKeo7zk7szSFuVbZFRhUxqhadsHUgXyZcxFd9HvSgYuK2C1C5bz8qPs8aZ8yLYjddF",
  "key26": "65z9XCNeKNT8rMgin5UFeWVQ7tiPDEePtj4YESYa8mKUTxSTb6dsDbSLksTRcuRC1MAHhGRX1u3Kyn6tBgQ6uBVs",
  "key27": "62hXMU1VRDJmBLkQHjpFSg91ox7LYa1DxcKDWTZK13gUKCt7v81RaoaHp8zRofcdtjn22PyYXGXye61iAPVvQuCR",
  "key28": "5hMefCiDGhK9fErVs6xeUSU7NG97HR8N1aKzdMjdZjYW8NGQEkQfWUeLvSArtU5awTVKrHUgfY2g8MseuSPGQdEp",
  "key29": "CaUXk5eQxfoyoje5yG1W6fyXEtvqoeUQj3ARJ2FbVNcJpuXwMhAAZieQMZ3n6v73PKUSADPDi6Wsgy1UxBy8a1k",
  "key30": "2WMsT4jxbeVANndJYmkRDbFc2BWXdJftZqUi5N1jakV7qb7vU1LPecMpcyRuKrZY3J8wdckf7YFNaSMt1HtZqFZu",
  "key31": "29h2pGEtZzSV6CyzwTgwCqAxQuXMnzABjnh2F4j9s6UTRXmd13PTh4HBEkspXRgnH3yh9nHDP7xfosdceeP8ZVGt",
  "key32": "2PwMq4yWMXrM1tQjwK4msnMKcaC5vQXt2KzfrUbd7pFWoXdDPHF4vjYiqwYpq7EwyH2GnymuLFpDsWTebiuVHUET",
  "key33": "4u3kRdr2N26wxqDqMxp17zgBEyjvW2LLwT4u5n2SXwBGCiHdkA7VWMgEzADfH1AgXvWs4Mci9hLHjou6uneXX73A",
  "key34": "5jKCsKeUVpfgJbSpNkavMdJ47cM2JX7XTR6MtNpaD6ptZDAMUXRtT5DaeyiJUjfWjpXfQoCPSSShYtsyrxHq5MCp",
  "key35": "31Pg1vgjkEymirnsVfn9cT9tmMHF2ESjS3wW3SYGizDCjUHT4YEdLTjcw5ibt7784ExJxzDRdDEFZb5sxFF4dt24",
  "key36": "3qdbhjmu1zsQicy7NxXczWnkcusno2Mw3RChc9r5WAzcaGQHBk5ZSkWkPa4UYfgtXYEuojtPPbeARvn7WJLTy4Cd",
  "key37": "2q3Bw1eCNwzHfSrN2hJHYJ5uLZ4oq5LwqX25UEu4HpcUS6zjAuUuafHcPTeSEcwDLfX3FPSPLJYvmfdzY61kHWVG",
  "key38": "NTxiUNDdCxixmutptMmooqK9HyhzTgLxZppNgdZprdN5gxFY2gNmcxrHM4sJSRL1FB2QZN81LvFp7AY9ceqyGc4",
  "key39": "RyaGRtw4gjmpapE6owEPr5f3wJrM19Y6tfh3LHHqQ7tFF3bYsrMVLsEU7dooZfm3Nnx9Gk9AGmMHA3bU1ZyLCSp",
  "key40": "4gaU1SQ1DdbPTwhqK2kcc8UjHyfN6TGrSfqo3EMsX1qddwKcP5o9EhSh4p9gqAfUBn8KDcaWJF7BYE3FFMVXceVJ",
  "key41": "3gFD2F5L4BCfRB6Kekmtkce7A9gRkh7TXPVZ1cGeNUHktU3b2TwRvXLHueg1p6Ch5A7NL3eHjQaoTYPxdbtjG21n",
  "key42": "vrBpYy5Kr78AybW8uQR9GS8sASkLgmjKddZJHYEoZopseXT2iFQwakyEojuTm6mZC6yuMdKE2JFoLQEQH16bvSM",
  "key43": "5HsqEv2JcHaA26iQpd4KnG6P5nUoKkaZmbUiCZg7HpYHu3UTcCFeDYjToWrvnS131SeVX6gg28NsUATTjYbfHyy9",
  "key44": "5teNK9GCm36xcHrNi6dPC841XSdTHBbXaDZchac6b8WoKRB7CU7CWXHjmk7anBSmXDj6EVSWNeV57k491KBE3EeC",
  "key45": "2AHk6dvyWeYf6GqutF13Xyo7zw7Chv3jHjhWDcujHLzGuQBzQY2Foi1gfGDfjE3BS8GmuXvvF1HGShH8DyFNPkFx",
  "key46": "4JxQHAYmFo3jtRVBPBPjMXqSXT1bfq4WCXq8iR62e1tbKDtdTY6ru1SDtCgt1xmfp5BLBjXKWn2HKvWJcPAKg6F3",
  "key47": "5a9f9dDToPN5VntzUBWkxKwVJ7YSXFqm5pwjEByNPiHSoq4RyYUrLFtQSShdhw3KSLsbeh519Pk85RpitWpxX1nb",
  "key48": "5SA6DSjZaUFAmytXdCheGU8QMMfS3S3grXnVJ4sR1PMKv7cCVLSmCNMC8aK76wMV8EB8jjxV3ny6BsGLLXhPNRQg",
  "key49": "5jgoJzRUeCzNGQ2zki3G9EC1gRHzEFPCpeUY4Ef3yG5rSZPgBu42aaGKAnNiMaPZAjhSeuJdLZrMVJohNCquEpWf"
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
