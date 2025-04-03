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
    "2VCLxktgSVVPDvYVKHnQWJAgz292zwRkyVuWqzpLBmW5Q3XLn5h8YcUf41vrbFQGWA7ZM2QXrsMTVaUsrG2x5N9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufCLAWqUcFRGCkYYAaAKzZTYbeaRrhTJ6wKM3fSizTh9WuPJUbNy47ukfKWq9UaTLvSmRTAcaxZaXrQTY1fxrb2",
  "key1": "2K3zVavCmSJCdYEDw8uCgHNMKWProjeSveLgtXgdKfhMMrPWDBJ4wijhSQJiWTbDZvzqeMvXTgBESPfVdoStbTgx",
  "key2": "2MHiCQmCEFKgGV8pbYfH2BQRUqjFoY8wBA6cP5kHDXg1RRoujdLZH9G5QzKqesoNdzzS4vmFDRJiFvBnR7DjZxXk",
  "key3": "4v9utFeWnqBvomboUCJQRX1LJMFHoR78ec7f2xnDpjwDiCfX9XiUy5edoyL2YjnEGMjPBAei2PJNf6jQbJCL4ggE",
  "key4": "2M9kgk4SPVZxehMERjcop1NoLsLoJmHASnjpzBTB1w8WP1WfQUfNNMrWVzZveJdJiH1LbXykfRhbjgKTc91ikTYP",
  "key5": "zBfXfo3xTVRPfMD1gWMz9MNckNQc5G6kV4Jx6ckzn934pMwKNxHua4dD7BoBLZVKw4h3hgKAEFHrefm3vcYr9Yc",
  "key6": "3jQ2jHxdft1quvNc61ZRK9ae9Pz2FtbZYtpjX4BMYDJ2DxVEtQp9EEGjxnPdbToCWXJa1b2xMpvie95WQftmjgGV",
  "key7": "2q9m5sGFJKgrGPuNwMkTbCN6jQQyho6NLqKwpZKKKGEkBcdNShCcFKpy8k1qEZFHA48TSLx7trtPt6g5Bc5RhTU2",
  "key8": "a5wUYR7BG7pLTTSrG8nPtvGbaWR9EJLgcdsZGfEYyavtcdq9EYE5xvautAGHiuLPjBubzL3DZEvMk4fbeLDXegb",
  "key9": "BCrkQ8PLmwv2dwGZu6RHymTYBQsXJ9ZhCaDPs27qmJm5mGygUDsJfgoBBqY9RhDQqRSk93L5jfEA2fSd6hxCoN5",
  "key10": "2jY9yAgjnEmQKj612DtpE2MUvG9xt9qnEQsNyGfudE9wBU3eLVyfoeA2utq5JQL35kJmvWY2RYK8MWxKoGANg43n",
  "key11": "Pa1fuSRmtqcFRtXC3ec7MjWPjQQteutkKooM31CRs2WdNbSJcnfV9VZseVxEgnqaDNwPnz9ZCef25UPahJ3pFU6",
  "key12": "4V2x6m1tvyv36Q88oBjPfEjwEkxVH6KYMzZ2zp1NrhXmDyRMtj1nLYXCwP2wnbVRMHuTGHvd6SaoAfF7GT3nHMTM",
  "key13": "qtDprcFJqsHHSssU39cMJQ5PHwNrbCYXAdsnJjRcqMmR1rzAv8Z8c4ZWL9ouoUWYAPooGHrxEXYjSMTJBP8AzoC",
  "key14": "5vCMW1Qw4CcVPhYPX1egBNiKBzgpXnebPhqkFBCiHj2QyYHsyy574bTU8KErqnHGQG3Z6Cyppxa9BXAkD64hB2Mp",
  "key15": "5RZZ9Wtox7S3Tygu9rsLAQbmQJwFoYwvRE7fXfH7iuGNv49ToH6dYhDwymd4B3WC1Eu7K92Gqu1FM5Rqned5uyk7",
  "key16": "4TkZQXCgUBW6sDshsQqvWyf4raBBssrWYvQCSbqUd28srfk8DSTts86dWERnrmEeXnxaurJrUXKJ6TcFAHiinwwo",
  "key17": "4ezMeadUzuYPawhXBgZ2sXvRRWUrhguE9hyhNPXVQPKq1AhDVLCCdqYwGPk9dbvgoqbddTCcPKM3VZ7RgWHGLDfE",
  "key18": "56KrYV5MME5UFL3zEUpvQXdeaHn4wkgsP3xcwrrTTsZZ1xKCrgFxNda3DyqsWd3CnH43rqU9QVJw5oTof7QSnEHs",
  "key19": "3M31yH8ZHeuKHegE9KyyuFxLtSFC3jf9fktw6RtLj7unPeHBNPzWYbsYiUPYrjQxwMRX93CP6gYeCq3V7PjM58ae",
  "key20": "doXtZu9qoDE8axcZQWcAhBJtXfyf6UgmVHDNY2ruLKSzH485qLA4XWhrYUSW19W63Kye8uru63GGfSKigs1yAhN",
  "key21": "5N1JKr2SQu3oPMjB2SkVQdoxWEJzMzME11hkKifcNCsFjnSE5PqdebFSLHF2qm7VbXaaGErsVAAtxevS99jb76Z4",
  "key22": "hGJ54TofsMU6fgTKBsToLTRqR8hgwXBiUwzpKhZNcP2XMh96Qm6wDYBPneGn3atK96FfT1vbjy6hZnawzakBFGU",
  "key23": "4Yy5eeu2XymwGdbsXie9ZvvNAH9cgReUHBm3aUVayPqWh95nAseBkbPvGoDLX9rY2gEAiQs6ruTX69u9QNKuG9AJ",
  "key24": "3Y2SVPVpedYGphfiW3k4e2e8X7ZHh1XvLed4s1rs6v2dXeG3ioHL867iL2a7BMVoXkMyWRm7dMNEpgdzeXoewgm",
  "key25": "3vKkbH7M3xqoWebuZpthw35Wy815PeH9epx6dGjqDk45iwjG8Zx9UqhVfiF9BL7Y3t8yzdF8bajFmrjF2BQxPqbN",
  "key26": "rdL89GTN52xwkHK8uK7nyfKvWKMBQWhDzi18G8SauGzyam6xX9k7uReoFV19di2hMs1BK3q3F8L9Y785mp8pxYS",
  "key27": "29yNpqKgJ3jUetxMXRCFwBPpywDABi9rCUHKPXB41WrHjWNuZrEVvVEQdymJq3vmioUiBv9UircKFyEuRoE4aCPt",
  "key28": "5ng4uTVUJECkoz9JzkHGMCh3pha7po8TiyaPTPeHTuAguxpt76zrUwQRUPVXhHeg8vQsTnZRn6L9QCYkqRRXMgoV",
  "key29": "458MZmtieFPqBfYgfqHkRUGDmo7i3Dm8BgxpWLksVAEK2iyfXbSwzkdB2m9w4V1coXi5Yw9LexozyAKofJLiGS8x",
  "key30": "5MDbqHCaeKsrz4DU3nhuuKy2ELkTFuxvA88LgKwgiNmiSLaBV74nmsNxcDqKH79EoVWWuQ5yDwTwPHzkoX4Z1kK9",
  "key31": "k4XMdRYmK34YhwqfPFJLJecqPM4WGvejhmV6zEF9xRmNvKz46nKPiU49h6hx3oj3K6YkDDvfcASJJtA8bcuCrvV",
  "key32": "3fNL1cdfLiUafh68HYkpfYp4jNiFaE6AZWxKhXwrGxJEG1vYRVvxdn4FQqe7HbbQqXwuVTC51Rv2ErMjNPJcLqVu",
  "key33": "2nRj2n2GBvBZ3WbEtTH4K5JvX3T88yV7F91ENmTQSmwmrwCbuk7zxWJdDFQKgETdsEo7pgqN6JdFRK7zxtE8fvJT",
  "key34": "V9r4nEGnkATVtRLxRLLkSo1mqu673sbKJ6zj6A4SwVBwVfHSwpVovgNasqwYfKw2MY9x9FnvbdCJGJYvCKDuAeP",
  "key35": "3p7Pf7EeaEJPYwpCTzwWK3YCckuj8dozN7jfcXi9xV2E8bRQiYa17iGYyYDceJsRGkKCaWBydbhAkn8A7ETHwvyB",
  "key36": "3KCiPMtSVz2v9g5tMeqWdXV1n7jvdYk5truDhPBT5KiD5oGeUSNAHZKMT42AMMVhouxD4fo4CSbwPumbic4tYjrr",
  "key37": "58QMm5ZA6zELDqa7YTWmCFGDdXYc29wxgGfenzAA49A6QEhG9ZxkQuTuWzJvHa5yBCXEJsinm7kyTfFGtgVuU73W",
  "key38": "3Yk2RvaCg513x7msyqhNtZJvZP9LH5YLzZGUxNDWFkH1xZVRVUFTcmuYziWUDQZd91Tfcd8vdNq3RLuMgxW2wPqn",
  "key39": "TdhKFB9sZTE3YXuMmVuay5wvEhcAdeUx5mwTFLnPPfVtYF5s8Ae7d6sNnrAjtJaGoThHRTASd9Ri5wEuudu79kN",
  "key40": "Kb3Zx3iV1fWVfgWLBWTcA35bHD3n5xe1Y3AxvaTqSm7fSgYULS2BqA7aFF4GRiN2QRZrS1xG861qaP6gLNG7BeQ",
  "key41": "35djdfeg5osPK3QgtcFAgQVfNismquF2LaBMn5jgHuAGHN1Uj7DdoBhYfUnzWj4hzjciZCUg8aKCDeUZwGEGUUTg",
  "key42": "FSqUtVVjrF3idhJTTrZrBx1pG8Hoso3f5jfcMo3BnuUm5on5t5JAh531KhbRUoF3Zf6WDhmmagJnx2wKukDVFr1"
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
