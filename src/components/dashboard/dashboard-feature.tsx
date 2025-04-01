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
    "543g1M36cPnb7XT4nBfoxLZ5aKTRHPRU4mk9TpXHVAxzJCZZEfwnMACfPDDZf9SsGKq7djGZYzuSzzgsbHxCEJey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oTncvjcbz7kC9VYj28zxA15uPB5QEXvwH9y3DEpV812XvqezLGGYuD9qM6iLjoWhYTzYkVZhECXs5RRhrrcLkSX",
  "key1": "4fyKEbfmQW3qwJQo1E6aSqhVhmuNYthbNtmJrhLHZiWTDBJMToPFsueGT8vRQh5pBu5q56JrtE29ZG8ECFQV3mqQ",
  "key2": "4KU53UZXvkKQXmTeAsscr8vFoKEnRG97CRuegMSxjde5t69f1a6PuWpPMWbvM6AJWWm16FQbVhWAagxM7bm9pw8V",
  "key3": "3FnXkiSj8wtzaX1zoN4AVWkwTGJChDodDuSEmptf5tfuwZ13FR4se3hdFt9TSb1p13ws6RbyGYXVvri7GBnjye1t",
  "key4": "2z1xbv6EKBB7kwQ6PaY1iQav2cH7TxMBytz3wM7vvuqo6J1QMY7gjqUMxNeQ1RPzfN9iJJmy2BkV8RtzjMh9JK5h",
  "key5": "56HfQ5VFjdoeHPj3zpt2A6o8YeTzm4SWA6oomTik9JpJYUm2y9rAGCm4vWYMrS3vgp3Jk19EhMfndNeuTVxLLbov",
  "key6": "49kU4SoRXpn7zTzt3HddqohWymJUjo6ocRM4oTRpcRmSnwMB1mimF83id3931pDV4dogd8vkaj5ZUr23E5Ziys6Z",
  "key7": "3sKAf7ipfEVdQNoUC6cWV2Bn2zDcXZ4Dtse9ejQRvajfEho9QSGWKRSGeLC4LbTqvvar2bXtYZFzypjBrnGzWApQ",
  "key8": "31p5zARCRyfqJLSy7BGeUYCdUgfjN7ueJX9XcKoCMGbDgHZZh2pfLZNPsDotz4Fpaxvo76WusuV5bLYuMsgFPihN",
  "key9": "5N1v8E1ogWeodE672AJeCiBcH5ah7Mh3X9vZiVsVsWQsvsJ4McwfX54Cxxf1nxnF1KAweSZyK44u4GFPUD7TUtk4",
  "key10": "4uk3K1zZ8P9D9kSiDKdP81hXzq5dw7UDG8qUznhtYj2g7ig7psXvsbATVQo8wgD7CJ6kmszdwjpiwc4aC2PHetUk",
  "key11": "25vCfAQRYQC9UttmtKdXGJzxboEFuKEXk5KYrEySgB7tnEsRGzgzNXRheyDyBYBD1FpsU8iABnoeFkEjZKgr5ABf",
  "key12": "4D1S2jb8nvN1DxhKeBCh3k7FQtiPChuBKy5KwLskriMQ9nHQtdRFQHTJD3RtPH4gnAXMG4qN7Dmpzp4mhhoEV5d9",
  "key13": "5Mdqa166GVVud3YBhafXKzTvsP5sdMRSCSdL3px3N2m9D9hVK8gnGoFeqxRAPDAx5gM6pzzWMZCafqQRXuSnYjEs",
  "key14": "2a2TTqWLrnVCj95w9K82pRnFAW2k4bmA5dCEeSrotgP8y3LFtn4nKZLpbrxPhb3ixTcoDUtCk5AfMHbu1CTGcJyu",
  "key15": "4NDeRpFBbCLU2zUJxbyRzJ1oCiHJ1GLdnhrWLrGfxcLLAqjRKXtjHcaHYGmzvX95ejA1x2hv4CqFPgnqztah8Cw7",
  "key16": "5RjhnmRcrsU15GFhh2jvTiHQaMCGSPRKZD6hFiEJDfgcFmC5r1GC2iWnYGx2nEKuDc1qFQUaHCcfirG5P6DiMU2H",
  "key17": "3vodD6rrbanPXZo5pYyd8MBZVd2eX77Rn5xyLBxHQLUeVxafQJj5XficHGRLeCwgZ4MSdtVBY4Sig7umTeeJam84",
  "key18": "3uV4zP1o6ivw2fbBQn4ovVYGfdpQUiW3mkcXeFMLSSVQiZjJcG7xR2LaXxLaoPuPyTJHE3C9XtvxkuqkGMT3Mr9n",
  "key19": "4YM3xX4DVEmwsaex3GcmC4dT6hNo6NgryCpayUfvUFGe61MDdPAehvsAfHoyqtZsoTDbYXT7QzMN18YAjLcCiYEG",
  "key20": "F7rvfQfvJbE7EjzYLa9BudFghfLVSTqXT7m21d8vbmwni6pkwyZqrKdDrhM7xUiENa8wfN1jYY55KjfHHtQ5Gy6",
  "key21": "39RTWeoVjqNLdwWRDYp6XrX6eXrjKQKCik4C66mk5E46qePcQMpXxTZXJJCLGGCinbMBoYunBJRoaEKzX9gBboQP",
  "key22": "4g4wcZNSSdGpjfiQ76nKWJvyxA98TLX2zq49RJituHfLV6uLLMxVRZLyEFxf6r5B13Ay19CzJKDdpXeCAKzFbwyW",
  "key23": "psQjCA84HnoSc37SEL7yaqRra2cZ4YV4YsPpnJG49vVFVdmc7eS8tmmnPSYtvZxdPFh4f4hpsyJGCsgtjTWEcTF",
  "key24": "CsVkYMrQHKm4rzh6CGFLaJ26bqeQo7hAJ4MmV2dozCr3XXTvvng55Xg7qhq3TRWf8GoBzMFKkFU7CwKL2FeDRvh",
  "key25": "4tAQHUp8A2F49Ji2dFmfd3rgsr1yfNTYaMsVm8dChUczHMEzQSxj3xXDi36iZt6py88EXfvZSNQoguzdERHWrQVk",
  "key26": "ZqXisHxR7h74a9GEabP4w73Wx4DuyP2vexMkdSGDPhWtSKab6sZkrBfm4Sz2NirfkougLv2h6i4ybmFNHfVyDHk",
  "key27": "PXRuh6iCCWAgawAdqgCfosE2jmziwbjDsBecbv7kvojEG1fEXZMu2yHANni3b4SD1xiH7jy14fYTtf7dG7sSBca",
  "key28": "2cXDbWgBfzXudwuzvzmhGvs4V5zXVRN2KfDRCDgMqQs6p5iy5xYW7aqbxkpoDd1yGUuB5Nfq2Nfb9EUEEsXKNj6t",
  "key29": "35YkdUS9M7TcVMt8qtwZatKpLcvq3AX2RQ5YfHRFvpJAwVXE464FFCUhLMAVXWheHXDsgYSQFmnyqYZkxodQv5x6",
  "key30": "N6iWarUzRsqM5pmaxsesvymutgtrjKvc6KkUYMCwwsDNL7mforwQFa443rmu5f4Kh3rgWvQ23MPUjN9CmAN6svK",
  "key31": "3sC5XgSxzcHLMgoEXS7KQ2EvaaZW7yDLWL44CLS4bsgPRwoRMt32CPjRQTLtg56oU4PiBZuaFbXAwXcysMzPzvyg",
  "key32": "2cFrjMHTRUqqJUbs875Rka7jzfF9EJ5MdU6eYMbqFK89UWSqMkuc1cSkMzJvJV6dABY8qXC9tyiTqS7y4MUUb4m1",
  "key33": "2wAj7xZefBiwEe3ChGBL9bWHB66ijNGtEVWNHKSng4hAta7PCLVjqhULryXv81hPFjzTdfBZbGX3RmXsX3v9f9Ha",
  "key34": "3NHC9E5KFp8TNDCBp6CvwWfMD81T27xqNPLquZTH8PczxtikoWTdiWyNnz9azqveDZa6fkK7yMYr5NWQ9zHqhcgh",
  "key35": "2tT3bT8drhGuNVBfZtzVgPtVNJP2wTuQjdUq2XczHYXzU7ryrM5fKPy8o5UMdZdKoExdGFro8yYqrHZKyBz8zmNg",
  "key36": "4rrPEZQCse9UjKT7zxnPceFffSyHFbUi7KUuAA5YM35APG2VNYwsRbnW1VzNqVTUvzdEye92D9QTh6rphydmEVa1",
  "key37": "2veDJxaDzHG9VmxrrX36m5bd31SoTVZLCoSzgYkAyQou9DZR52NEMrf9N3KaoAQ6bGzrispEDzubMJcdarG1MVft",
  "key38": "4iq5ihPKpUVrW2AodvW3avWXfof2UGaoeeazrUYgcG9ZfZbovTh5VVZcYDwqcweKAPtSzJT9Wyc1bmVtMrEWu7dN",
  "key39": "kQFCUEhD8f94R9tjs64hY59b5TZQq94mNstBdQXnbXb4xSS4FjqAaH6LkwLnt7jzVVMcT7upb5AUvdGojC1ey8k",
  "key40": "3wWunnE53o8toWFS9UtiFhVJgNdTW28orvJxA7nxmfCQcV7FJBD6MLTvs95L6bzEZPEeYqTAS6GDWEs8trVJT9yc",
  "key41": "2vdePCv21MhxKjf6CZV72kCqmKG42ZMJtHkUbU9NvP2hdKqvUmdDE2TjAesw1PUw33oEz8H2TafDMR3XeJNdLjqe",
  "key42": "5S2RdDoyusTfs5cAJZfcL1nSvuSFiyb39hAHqAzf6UbBTWPuduseW6RL314H3JbTsFsMQasGRsK73Q4Q9dij6i2p",
  "key43": "3NmZ2Au57JkRgmgLLeT6hToFELdNJNah39xg2E6QajVWCecYK2drSggdYZYmtKqMian59k8tk9WpnXjNzhgUneK2",
  "key44": "3dxLtijdebMzTUWobJYuRyiYywMZCiSnsgnibTWiECKjZ5q5tQqmrVitcjN3G9EGTXnvgnq833yRCYX4iqVr9L3k",
  "key45": "2QfkmHBy7aRoRvdyAHqv6NVe3jXWL1MCne47ivt21pNBi6CkDq6STpGNbieetRFvELFFya9aZ3prDkKTWyc1EQhb",
  "key46": "Hfvkvk9sHa3R1Jzd9i3QYzmD78DB7hYWPG1EYtuf7kLUU3GWnf63ZsCiYQcyxULyYatgnWx5rkXnhBdsFGWA4Xf",
  "key47": "4F3KnUrsHXcP231aGT1p9qi3vpuPaxpTkfRYFiG4kQngRHLdEw14u9DnLK25yughyBEBJmRwyW1WuoRqt2ty1nd3",
  "key48": "476qAQuhvBMNqqhkCDZvsNfarQf8wsxmsZgFufLK4skru4oM65FRad3BQ6ZYiA2cdQSnFb5V6nDRNxfiJ6ZHrpqQ"
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
