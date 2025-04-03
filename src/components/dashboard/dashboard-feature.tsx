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
    "B1StWAr7HP4mho6AjsgzvEogQTbjQrpPVSuSw1Q3oXC3q9nodfVzRiEAorzdmt6DsdthqFovBXzBxt2HEXku43u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPuP3iJ4zaLLvjYjwW1jvdrA7C6jZeQeMmzr8brS7J7mfp4xvJrwS4cFDPeEuDzZJTrSyY1WbTwr8hUEfv4Kaz6",
  "key1": "2rC8Sx7zM7iQs5f8hdrJVT7fmUD5rUPc1Xe93wspSpbSxxAYzg6XdnqRuBJ1iMoF2NaLMqw5qbZ4yremM7nxW8dt",
  "key2": "4aUqMx2nS7boGnSVLTFyLLEEGud868zqGhormQ63qGGvrbGQSU1Dw9xZhkmgqAV6sEQJcWqMTEY12Qy2G6uCxfnm",
  "key3": "4eYQ3CeVc3j7jEMQbP3aWxfoRGxfV53zyvM7VHd6wr6FnLnzzbTGBqVMUA8dwSRfuuytJhotkawHVZRPzebyhuDp",
  "key4": "629WK98F73XahYtQ9aBpUdUnxgzha4FE1GTpwSWwJuh7XTazP5GBQmcGSRkCkeHKPZh5Py99sB61wbByMBVsucZM",
  "key5": "2wGWMznEfGXFeGoJNvMtNf4NYUvKthAvBBdNoscg47LBwZr5K5pz5wcnMwGL3etsaG1NyDaCMpGZcs5MX5DhPCWh",
  "key6": "3Tzv6vLUdH9vwvTnoVw53mtxrXB1X5XXeWjnMaqzXFEqMy4g75yix1hgDqtdhjNBampZyXEGk9ZuQ6sRLDP6ATud",
  "key7": "3uXqq7gyZYRxF8NPHr1nLkWFjeehUDpVwnzGRVsf4UaEgRL2KF2GwfCQDz75cFHa33MQzLXFiC8nwG6ewZUDmknb",
  "key8": "87FrjHjahsPj3oSEQWfRCcraUzAUBsNAA7HWssSDr8dA6qeQ2kVJ8Fd9n6X7zSJUp7EZzTWePMiyhDEZmDYYE2E",
  "key9": "E86mAN1tm8vAUYVAbuTG22p4mCp8h8K9PMhMbUhfchBKHtYvoGELrsiGjCxk7ZPwmHdWzNk2SBA2YTjXnaTsdZT",
  "key10": "Y8VJFTn66xc24X8qUArgBgsHFob72Jobj3F6Yt1b4WwdLD46voWn4qtrEaF3a2sdYLtX7tRbrdvUNLYTb12zaAk",
  "key11": "3BeMgXXnjS4FqhzkXrF7BmVn78GvaUkfQ8E8rEC9b2gXKKsV6tTqz8kCPJMS2Uesp7ZQ1zFk7hc1GMuxqNSYnpwy",
  "key12": "4fSff7E5roKR9dNd9gs7noq7S3cMyZDsGGUeS1517NyY67unXUo1JhePk5SniuEdiurpDfHbGeS45ZgkHtRoJVJ5",
  "key13": "4HmayzdTUt54WTGNbgd17NHPkzbbAzdAQkoTfzVq5K2RsbHDxFikBCxDU2RCTV1A4qLcTsmqdCtDaz6uoZvNbANk",
  "key14": "32WdV949tCDqBpCXZrK5wfQTVbeq84tTsndEpwuAkbLk211MgdqeoHdhtyHTQ3JxwY6i3isaj7bioTKci7cG9YND",
  "key15": "4YFWxP9dwWRxJ1JKrRYjtyt1najUF9BzZefRE68VYv8eK37BJnvo6uK47yeGBKcEpPn41XRDinKfAoETWEwpEzsx",
  "key16": "2XWTjR5iZcGs5vQsaLmX3qVsBAe3VyR1XB8kJFHanzRnWjVnQZXw8tEwP7BS8EZUKnQKpHWzQbR3BEU1mt7eSwJT",
  "key17": "4ZrjeWi4pNibNbDRdPj1xbKoNw2iZetEwpfN8k3q6vpQU94egdkc4LHaCDud4HYsgiaJMmXHurPn3PBasDosGMgq",
  "key18": "2TfY9JhTHhJ7n721Q1LALyrqn9zaimQRcFwEFjdQFgcymYJ7Giff46Hi2RVrRudTVTsZwqk3tNd9XWR7vh8pA4G8",
  "key19": "2ywMXQFUoiDUnjZ3JJFKeUbMBXUmhKagxiwRySapcQfdo3EpDCGv8CNzHhTXUW7r1uNs1q5J73cLCcnQWTqERxy8",
  "key20": "4k5hCDpr3D3LvQaJEjNi727ZbzxKbNdGW8wU6a4htJGJUgXzrYgdNuhhBYKzw9PAPebevP8bmPGhUAQFbHEbLUHD",
  "key21": "2GGpYFgqvR1w6fRtpdhQFvtH7gx3t85hzXBKu6WoVxJX9HL8PPB9oxRxBFSPJqHvNbfqC3HJX3Rox2f9zhnXGtwi",
  "key22": "5ZCbXerQpdMVXL3rX5TFkQSF5akna4Sipxaj1y1avaCYpbqxfmWii1CvpShaz7n4NVLfqrqbVnq4vc7RmF8hXrh6",
  "key23": "3jmkYEUck3GjEw7perykqMokhPg5bX1HR49Pdpgq3CfmD5owJBkcJgQvFqrJqjDskaRMLgsnBkZeJEhXWfuf3BaV",
  "key24": "LJ3XoZaDQGWjfCaDpXs2KcbMbigjZxHDZ3U5zBs689ZhNz9omnVT1xnJG7wBECBs2P75VyiExCirR7NiNjdUQpV",
  "key25": "4LVyz1dF3efHsVJgdxE9LU2bxN7uiUFewL3tjoBesxpWUkLtgEtjAoUKqzw83YXHqzw1myADGSfhbbGF8pViz4Az",
  "key26": "2goLgvD9m8YrSLakpPKZj2WZ8yo7FYnq6rRC1uCezf3zmEqRqTcngBsg5KH36vQNBw9DBYk2mug2wSuDrAJhRW5",
  "key27": "3Bb8cyUyc4hrQZh9YBkqcVgDaFRq7kTRHaxiHTdBk5rvgeZ5W4XayaBw7L3cYtGK6AtXxx4GRk9SyvCvBfbM6pjg",
  "key28": "3rrT79TM1gpGKPictL6Q3BbTrKmPfVdgJGgopkJV35NumM5GAgKqCrhogqysaZwUdbqEKwhV8BcpWY65RP7mfwjW",
  "key29": "3P2oaeUkMHRL7BfpQkekDbqXfnQLta8E92M782pW9fYqHgpjBrQB45BBUf4HtxzVM5aYZDv4GV5EfYfypn457Ktm",
  "key30": "4tnkffJCwRe4F8TkNsYB1i78np5unAZPoyXfuH9bCWr4VpFicwauBj3JMjNveVyz1RaNRw3M9Kd6G3363jua31tR",
  "key31": "2hojhiDC1eXhTdih9dcov1jLAhHtfqMHgWi2E5aLYXxbrHc9vkdNoB5UmpiT2q2TT14n1cTmyLAe1NtVvcqMNDk2",
  "key32": "4BYqTzHkFGePdNyka31YtUNKgBvQ6Yire9peQujbAwMfi2WZnSDuMbsJWXYPBjAYqK3oJAaUmDZwHYgktZw13QoJ",
  "key33": "3V973adVyCxgWo2mgfSqPWoXdStv2veF9pXrwa5StNfKdyqRbvqtwVAN4vUtonKDNr4sXFTW6zbFJwAxMNxps6dK"
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
