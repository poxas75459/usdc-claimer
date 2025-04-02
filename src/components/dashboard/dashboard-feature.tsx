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
    "cbJ6Wuk2cXTbQBdkUEraL7MzhfT7pgQkndUGkMbNHtBHhD79M8kBDXFpTToafC4RFksQXBL84gLYbra5GTifNJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHczhX2ZpVcJJnPzZhbEcAHwUxDRJZQfj6akACg4U57vwM93mWznmkQGTMxvEMjLgkcT6PorJLwv1wxcfzLsX8z",
  "key1": "5Ln1L7RWoQS5CpFHSe7LiDDfPtJGezWpENg8vCkZiGz3kN6XfB1CChP1eQDRgGhm93c5aiJfFXksfLfXRQxavTyE",
  "key2": "5qqNWQTHRMv8txBJvoRCZ9SWZrJLGePMk14ffUwT2rzrEszrFvke57fzDSKKkvyCyo1fUF3eUdXhbZdKT3qU32SY",
  "key3": "3W39ZwL8Norfbf8rSGHsnReVsm2Dv9oYWkSWotectmiCHEpkZL5WVufdNfa6sw7U4k7ZHTu6f4sNGyaopqawt4ng",
  "key4": "2qqYWndvS55oTKZMoMpX3m3w7GnLoKn6uMSRjb7fx3bqy2JjbhNzohj8uLL483xydvjiUp7EG1uosAwhUxDuc6j7",
  "key5": "3uxtKXY1e7bgrnznsu8No8vkSJEiFmevpGpVqa1oiKmTQJF5qcZVrmhgpkkLMXPjk6zfRZ6f8FJxgYthTngVymx3",
  "key6": "4WbhCh9nTkyfUiX2dBemdawN5pZ1GLkvh7FFduYqKVQqsS6s4daNpmh6uEpJGrXw4caqqvhucDvf5YEQU6G2pYM8",
  "key7": "TLQLBhiza5JLLRZ97WLnDj3Fn2ra5aTshbYc2cdetuXV7dENg1811f388HWSoaQeEQWKqLBgWpp17CC16wW3XQi",
  "key8": "227TWQU5am2qZErwnQP6Ce8hywKtfQmCoszXSjDQPXmawBj71VT8XfLLspE3FCsb6fWg7CVY1vbVJyuXv8xHvBM5",
  "key9": "27yhWYtEDzae6pfYZC7S31XijfoEiH8d5pQiczEu4SuMwov33zqFeyECFZM89mUqg9GPkurdX89EoQGarfmd71cT",
  "key10": "4fP75pi8vnEb2v7H2zPF8aeSMFfa5RRYFrzLYZig3mZx65nHkDfJP28BR3woHUo2NxYnoTWhFSbsQpo1kKCunCGh",
  "key11": "iEDafDbbPav8X6k6M1Kc18vGqRyk3ZMmB6USvuL87tTVUqdYqSb4SENBbEKxDhGpBLbXmFqJiVesppNVdcPgnUd",
  "key12": "2j9q51AwBPeGFjkuc2PA2fYGRjtat4YUSti3SWTs638PRNDLGNJ4MT8tbPUfvkoK7RJraNkG3VBAGCdZqMGv2SnE",
  "key13": "4CngrtkgZLtyaxtmAAm2BBp3PZKi6VYac7KquhYvjFjYTqWYLrXTcxseyYLtiLtJbFpZKaUBreSTZjoUS38JM1VS",
  "key14": "4BbuBNjGAsw1urs7MMs4d1UF8fuUukTs4J1nsH1c8s2D9bCNCmhT2HL5jjQgXmgDz1cmk5F4H9hpU8Pn2dofHdRJ",
  "key15": "643BZx6EjN8mpxkQtyNeorj5q4Wah8TFvFihtJHaP5kcqQwBbCtTzGySoSrTPkA4HfWHHtyQLLUsDqno82xK898w",
  "key16": "2JvLzEhXiMAxK8E7baf6SdiV4nwz7PJSTVn19LD7MavNB9eJJbZwNFjAtVvoW6uVtA9KtPFQEXbhG6Y5Z6iDbUZM",
  "key17": "29EgB3d37vcsQAsKZBuyMDAxsnRgpmUzLVthq7cKDnwS8zTAXhe2G6PV83oDNhpvSaRwNxhnTbrXuaVUb4xbDC2j",
  "key18": "4SXe1iJvyHBsU4KJLGZNa11GjKyPyjBwjqM8wRdi1onDVw1qJPb9zqFFq9cBPWRERfRzNQxFysuAGsaMfAj3xWVE",
  "key19": "2eW82Ub8XE3SXsT5PjhbVRiLLscca4f87EPRg4o19bQk952p4mchMNRXEnaoL71jte6v1dnLo5rtm7iKFR1ovvrK",
  "key20": "2Hf4Srqz3nPUfdmssnaoFPUf5x8tdcbQeq9mKdVLKQjDYZLrGNDBPZVQDXz6tnvMPfgKBy6FzoUjVx7kB4ouZLAZ",
  "key21": "5P3toGpNSRabckRDPFJq6S4gewMi2J4PyaWrvav7maiVk9sUGLUvU11KGMbzB2FCWGCmQrivDGqcRiofQziTnQ6B",
  "key22": "494gY8Zmxy9hSJWQZU1WhBSbD6T2wyshB6MX5wsYu6fczrSqQhir4TAyGYMMwSkhJpRkKAQpiRLXCyyKKpZFzXfs",
  "key23": "2VfbTsyd91eYFdUtQ2Q46wPcTL9Yx5fJmSdFhEUKYGpV7NPspnGVtYCABTs6WJmpsMjX66HaeRLkHLVxcPjhTT4a",
  "key24": "4LeVZqX6nnpPtq6wqd4BBGK5nxRzBJj6E7Bmm1B79goGV5xQtwCV3uqu6m8mosTwSwZUC5qaWuraSz15ps4rYf9r",
  "key25": "4Nbi4fh9GzXJUxZ6gt2wW5jZx7FK7XrjCpa7qLFJ3rNQFW4B44HrRtfudwh8GGKiYtHCw5XQ7CJfSXajoRpPMGn4",
  "key26": "4QmBqrxDNH4wb8FwkoWXeEZKdKyBqN4ZEWQpLyLh93WzRJRJUmYqrVEwF2CymP9M79qvYJEiUKcvdgNYaFkqY97G",
  "key27": "5YY3wcDG3ZSTgcU8TiAKcDa4A2nRgp81myimBkSgscXPmU3So9qm62TqZzVuqesMNxUAP5p7f71NNg2Mfbu9wocj",
  "key28": "jjgtFhx6psXkDspN53zbUHzBKHUnsPzHkeEWU44ZPj9heAs6xc1sW65B36ZhYgeeQY4NLjryzeb4ySB4DuVEnPy",
  "key29": "2v1pWAUvPx8wgwMMe43jZ9N2JXLst26cqMWvZUCv1QTnBi3hFRYbFstgnASsLhmA58aoj4x1kBAgTduUBXsr2dKi",
  "key30": "7WQypMTKxfeMaxjr4LStxhjvu7EM3qaribNAEGCuvt7Wr1LWG3nBY5WFN91i48qvbANdBM4FtM2qXcyaCR7PrZY",
  "key31": "3QcmYdRDWyVBc1iDQSrQXKK85mga1TAzfWdZFbm3FCUms4PW7HMtUug5zT3RaqefnRbs2dTZKEVmU6QeNKsrvdyt",
  "key32": "5dH3ddQTBJJbagJgstJR1ecf157T18k8pbCQ2aJ7M8SjTRWSWHAtoyZbgDnLD9qxrzWdzE39o4aYUX2LP8bBhuuV",
  "key33": "2g9mxo2Xr8VtBjC5f7a9qCXiifD4Y2sShnBaG6ZEjNGD7U2poXmY8APe1bEV86nEDEayHubepeqWD22YtNptchAv",
  "key34": "3W7kSEPvXCeBT7FYZUghGWVFNCTEfD95GNC38DA56WBaYQxxzuSSrkYeRjAZ1k8KonRCFViurrj55KyT1XbFJaNa"
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
