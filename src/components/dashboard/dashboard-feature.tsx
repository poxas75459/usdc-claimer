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
    "5EPGn6EYTHkwCnADU8pyPRerfWGMsg6jjFF5LSbrEUYxaz5h2fRSyRbi764T5ajzJ9VoyxNP54VSSxBExb47mKPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rc8KGDNhsSH8BEbEqWSRyvsd4khUzvWavcA9QcmnvPJ54dmhKo6MANvAW1dVAG5sLQWpMk6tekXFosyQHjQ9HsW",
  "key1": "2j5Ex3kKKiaGsBKPSSAHZUL2QqTUQnyd7MhyQ9SWKLjHAtbL7xoPykdeAXit5DXg382GL5CQP7t3zi38vBXg4spP",
  "key2": "45swof7mrkjDosibTB15xrfXi7dMvt61U4MAab7mc73fQPjt7NhiFzeUxzyXEGcTq43bNhbhRJmgyJ6PE6eRqDyM",
  "key3": "2A9HetBNXQx2gzRTEHD1eESZfj5JQ6VghsdeVUiprBsqpgaURJiHYMiSNVMKZtjTTWR7me9hJb1e7YpsgrCdjMpC",
  "key4": "2EzvX2FDbAR8fwgByVCBTwp3eAxbNCndfXbuVnTEH45GQfbZKAdr8ZhUfadxcHBPvNvHcaYzCPJvEMdTxQXyCG9C",
  "key5": "3VurDbPNj9vysojdo8z8oBqr8tmxERRgfb8FfNGJbbNprdrAjNZaFUey2yePGqWJzNpuxRBM8EdBMu1u9i8qWnCn",
  "key6": "u2RTBpyH2mumJNgxigp69M3pHvEu6cmsvj6P66vkMFN9w53eU9a3h8wV1Krm2vY1H77YXKgGLAPVAMJoPRUCy7y",
  "key7": "bFG6NY92L42ToRSwDxAZ3GrSrss78QiLoBcb9ftbtfAu38SfB9WssHe35aUZFg8xZo3Q9mGsDFKdduFn6RqHzd3",
  "key8": "28E6xX8NA49aNb7ugqQpWK62CTCDHuWCckdigYz7C5ejtjpQcqQNvoD64i1sEDpTxjDp4GeznRFTUwkmqw5CEqdB",
  "key9": "35qACZpXgLdJ2VrUXjVjn94Y5PznWgG3aYaMLVZEvz5ofPmkogcjK69EWm3rochnMSXkjyHJdHkpD2w1Lr8h8qrw",
  "key10": "5SMSjP9bd582kGHgTLKxn9uPfRrJaJ66agCbzxZuTTXcjPZGMBfPJzf4JH3hDe81VHamYhjyWWw4yfnohuXdRxB8",
  "key11": "3SZ7Yvwv3mDz4BGXpSdBW3i51zq97K6VABiXRieXf2QS9pokhVasjQyCniqvddhGtf6MWmhFxVARJWCb6zscQt8p",
  "key12": "36NvEkr8APEUpFXHK6bV7ro28VXJpeXxTxpbU3r9M95e1YQGnn9MKikcYYCAzuzR33Ltc1vJtRRN2NBckxjE9YXn",
  "key13": "2UTRkB2VsfyZnrrqY6tUk8wKep4rtdk8QqaVguPTCrrNrTKK7kQmDn89xTrg2X83j3EwuuKM55AX7Ki7WcYQtWbi",
  "key14": "K32WY7ZLR23PP5eTDCF6HyX9gCE2JeeLQ1yjcHgkQq3ZkyD9tT23NbyeQS7d7ujReNrtWhMusNi3KfN9mpKTYB8",
  "key15": "3U36Lz5BGV3kFVgGzmFrAocfVVaJwH8D2z2gdnRpRajF35CZpze7DYauNfbHAAKYUMqFqqPt1kokmVe43twuNCXS",
  "key16": "4hGQ9BrSVGjsQj8asZhd7mhSVAdNaMcRg25sUaVLwcvx56mEzUftCWPCcR3jpCHt5YHkCMQ6jgVGix9o1f4jk4PS",
  "key17": "3WeNNQp6J4NdwPugDcSZxrKCumg21JCmSuPgUM2uM7g6qjrMacHX3fwfWAhDsXWgANo3Yfzge7E924dtvGPQH3xp",
  "key18": "37dRRVGkEpRvihejzW5mzXCoTiwt6ijhGZMpzTLb89VQoCFWbh25WF41J1j4L48FczccFyXk3bFasrdjrPcroXdh",
  "key19": "3yLq1g5WQ282GSJ6r62byj1VagrycnRh3GXd2abSbmp9wg4zEG3JdWW4NzgcXtrjFL1SH6sFwSCgiCi878FuFXoZ",
  "key20": "qKXKJCz6grF62z1FDt5Ba6NVzhndoAGxmvAcD8nihcyVFGKVf1xGhbRfcJmL5oRnsPayyqV55EPMFJjqMAAN2wy",
  "key21": "389TMVhJe6Ue9hC68T2G89iFx3oaMY3whDPouXCbCAsygmEVQX34CSjmKuC84Pxx35sTjgHdVtQMxQwi4uUtGhkC",
  "key22": "634sLXiJw7rDAcvHbwaA9n7phUhyiVNBceuyN3Q1YNtR9pDsjnnAqMDY9aaCMdrLhYJ3VzVHWZWVawaWgtHZ11jQ",
  "key23": "3yFRPgMGdpEHZnicsk9GxUhnLD5r8wqFg61ZWFHxKXAVS9ph9gb7evSWK7Sz2p7SdmrKFEbrRCCHu9cZNQjMYy3f",
  "key24": "5dhXDCrhUQ8ztcES1jfUB6YopfJBL2HoZJY7ZPG4Z4hfGmgU3eLBSVDaktWU3FmwNcGTgztvmQNRcXnbNbafhXm7",
  "key25": "5mkDscyixp1pUD3HjMcHQMhiT6TmVTtGhoNueBmU8rf39Cxe6EhEnVCwcVmJUqRBn3CYVzeGAjzuYnAdpzk75ix3",
  "key26": "3uPZbLkBJRYk7rTZmepL54UNTPiUysPyNZ4ArvYXSZSoM2f8UVjnZGhYvKndBvwnJhfmMzE1GXjNVg7qpwUBbEh9",
  "key27": "3oN68qwoB4chxU1cHtnmdGRtyDLmGZqCtLagjqg6sTXxte7fDL2QzQt9XDf359FY68aBCLF5MMAgAufqVaTohn68",
  "key28": "2hCVAy8Wgdbpqc9rLYUuyHHDXMVhjoqFRR4iGDJaAyaTtyMhZ6pm4m5w9UG6wNQN3NULvouASZWaWUdUZJ9XtpNS",
  "key29": "2CEipvB6mnJH7RNSYpoafiLkEBvisQq72V2muAKHcL1Qu9gsfSbQqFU5r5okWJXwKgERQ6PJVUYFfyfCDWE5SeGQ",
  "key30": "3Eza4r384SaYAh7NZmKZioF2CJRA67rTnzR2Chf65xEUEs6LcdWQAhE8jo9YR7VEojMFXYkHtnePkDak86LahSfr",
  "key31": "63w5PLDYM8Kt5An8egHo55xtE2xe4eJgUC7MUrtSQFME1yMJ4gEShGbjvZkiQfaLWyiRV4uGfW5Yt9aowdsjWj2X",
  "key32": "5szDEugQEp7kjqh5U1eJ6zkCRjYy8unrvswfFdAuGkbPs4QBbkZQxSTmmaExKws1PU4DUNvuyv4KemyU1wLBAyR1",
  "key33": "5jCZBV4bgMkEPAranJKZepy2brx4Xp7qQCqvAcx2R172qW3CmqnY1vkQLXj8AXLi6QsjkyJFguXFvPxRQbknN69U",
  "key34": "48vLYxhNm58WgHJb52XhvKdw2bjJGKaFiHLfATWDqEy5sQ1b3RWP8YYTinJpupnUbvHuT5nnRaALPXN8hA1G6W2F",
  "key35": "218rnDbxkRdYjnfBzhn5qVXQKyy6HiaeFRrfAT6exZmTzNTdXaN9NtQGXUnZqWAcHfcwMsgHkaifmTrt6NesgZFK"
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
