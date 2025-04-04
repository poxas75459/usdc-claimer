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
    "5uqrQQemQJKp3Y1E2fSJEMguinX7DEsSErGwUxiJubRExFSiXpC2B7qJ66mgLZGbpW4hs9zzJkepmyFrDF4EqxMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUaSc3sA8wPpwb9DM7LXSouPLGVu61KLEN9898qhMmZ9YCCbRoNjgJbxJexCKEfNuasPaqM3uNRcjYMFnKD2rFa",
  "key1": "5xboMyuFCDitr6TjypLJoUmgh8m8p2LYuvZgPeX2dfDfzQJyVpU8coopnkbaEvZQELXMSFwaXGAdqJKX68u1LRXW",
  "key2": "4xS2Utx4WPDnSmQMjcgq3ZNkbrJLouboEtTcJstXHAfJuCkNzPHNPGnSoPucwBwtJwhtacBRV41V2QPqQSVyXM9F",
  "key3": "2c9pL4hQPvrcrMcv7H5fKLChkbiwwFVKHLFrKuLgxuMgWeVwMdbgi4GewnxT5CMWb8wrouKzDq5Kdy1aU5BoJFRK",
  "key4": "4oPWUJkM55DpUv2BHPegUj69REbj67fQMAokpN4TfhUW8fY5xNAdqewS1KaE599ymsGDbzPV2Xtt9GwiwYZMXnKb",
  "key5": "2YfjBvQ8PZ1npQw4ucWGAoNdgfM8UN86Zru2idgvcQYkzzkmAq1S4ozrFgr7jTCK4UBbZ2oSCCfoxBxk4W987ryv",
  "key6": "4TEi2HXHPZ1aj8MPfdppv4Q8EEF49EDpFPHFL2hXd29PV86hAJbJEDC1tGiqHuwZPqpZuspKgJmCFCs7Fy821CY5",
  "key7": "4ezFiCsHpqFy168K1GBcdeHX541hHZoQi3Wa9cu31viK2EpqSarwiJPukdj3KfmVSr8Fs9orjrEUtTbqCviJadJr",
  "key8": "5FAcZob6cKg79r334ieiNvEdBiN5A23NdBoTgaa5AiFWap6tAS3hLWNHEcQSfAFS6cuS51gWeE7PNu3PHmzyecqL",
  "key9": "5f1PFQzCW4P5xs4nhWmZXUwWRoxXwdpKMANUZZ9776ersinDoEZpRKNqYENhhn76qNXd3tp742bJXyJtcZqbJndP",
  "key10": "2jK43jp1YnwaKfit5RfCzCeE2i9DxDGQbbpLVdmC6v88bYhLa5596VR7XtmhCyTtoVy7KeLgTRV1YLU2W5U6E37z",
  "key11": "4yJSoaCPzUtFE33fD5SrkQdFDp3CPGL8JkNYAvT4aA5bqv1aqfp9j43FfbeCoEYD91Zkm4j55yKB3rYdafDCfPDA",
  "key12": "4P4eZHkg6kvHGnoZ4FTxqqjiMVJMXULwoXX9sj6LAYM7mkNRm45QcXpsKP8bzT3tWZGSGhF45vVX5gnUFvwpFraB",
  "key13": "3RZpvZ6nxN6KFmm5rei6n1g33Rm8bwjUXyjHcnAmSjWmyPUb6eePwnD3iEF2ZFbLyFjHMhusMGVRD3LSSdWtFs1S",
  "key14": "2VmvHSpAiXjpGxHjohnJtSbpPr8Z4Ph7URBhh5pio7c9AzkXVCbZATWzAxuyDK5RmN4BAf111i6oVDAqQVxP5jDP",
  "key15": "4Jpn23u5huKG6wBAtJg5Qk7tGV65nmZbrkiqoG1G2PiZkFZ26UrEDiXNMYaSdF1XBZdB5LDH3ih6Po9V4PAC1pga",
  "key16": "5NAbRJJzL6pZECyssVNLNdmZv1y6AzCCGvADECB7yZAkuz6Th8hownuJStk5ASNnH6CszPMHkAbFugCmrSJxTT9i",
  "key17": "4KAuP7uQSRZEadh9xPPi3UJ4LCdAZXpMorZT2ygqneG8uWBHgTQ56c9hTbZYTkiF3Xw2sCSL4N69G6djsXCXPjBG",
  "key18": "SEJ7JKggdMLXtBwD6d645buu4w11A5tb2pbNPkKZeLrvF4NJZXHPawm7LD3Ey9CDkEq2FapAkTCRMDBEstG63vu",
  "key19": "ih45Y4MNgfEtAPxDpuPRPmNphZMptaaidiFqjpiKuoRVV4XAvL9awHcHQnbFiRGDa7NFXVBKbmtgJcMUhVVb9Hb",
  "key20": "4TBcRprNNUdih5HKLAQC7iQTimY18QgtBD4xtW2jyz1iJmpRe9CdjoBLsXcT47scr7YXkHM7oZPZXmvnaEDsFXBF",
  "key21": "3zn7gNsFfUjQicVWsF88qKSWnmxRfKuVNUUPJ8YqkYQTeS7sUYnMLEMs7aq94y5CoKkg8NF9tVsDvj1gekijMik7",
  "key22": "LfpV2xVdw3YbL8ZzrAE4PZ9Yntsgnncbyd86N9Q3kjbuVF8fVFvGdDMi1JRgZf1pEFfB45kuohHLCrDRGZYLc1M",
  "key23": "4B1bbVAAyuhQVbZfSFLoso1JTzN4yg43e6YAnSeJDwjwbwzGZixm5YMVFxZuARKSkqX3G1km26AhyoWnFKjtiTCB",
  "key24": "CzNoFF3NJH6io1azNui2wrzMsHVor3bo4rKCsXkgWSZVTDZE46HhSocTA6nq23PYfB9rdou6rAZw4zsiJqsnyN2",
  "key25": "2EDFZJ5apzzost51714b2DMVMzyohEszSxQbLQ1PccGxVCJAwRk49Fo7m7kXo9ZYdxDndhBG3whjsFKR4oucTfkk",
  "key26": "5psMyfh8BaAK31GfYRGfq8Ym7YkRzWkThYm3eMVW2VY5ohH6hfYA2hxJbPCDK7H6FY3NHzyKnJENc7pAw5myCiKx",
  "key27": "3TZ3n26WhwvZczBXWCUChHtcNFKgtdSakiesr22PPgfD71PCqhMhKeByGKrtMvngfcK6ooziqrzEYhvFsrpQ657E",
  "key28": "4CRek5u22Dq1sJQ5bPfZvWev25t7dgdXLFMvJvJcTyVb1vXkUKLPM6cESF7VCUUviGJz2uRcqxwyYcsvGsWN181P",
  "key29": "Jz3Dae3icKgtEWDDskXrKoUxBhMfMHTkZ9xFygad4XWQ5soudMN18UQzJUDtTMQPqWMDzxasWjeeFDgPMo3Zd7x",
  "key30": "212fUbCjUTVpHzRSbHCh85XtkpV3bm6qJXsPZtgt5NXAQLkrRdio2ZBE2xqgVamanzQ4KooizYVQhffFJ7XYbnmB",
  "key31": "7mxys3bL3sXxBzcqUJPWBq437q3A2Cz2RhPzFbbAt3dpWwNSUSp4At8868rZ7NiyBodhnfUTr9Y1ERELdurkjsa",
  "key32": "2UZJJ1U2Ww2ajWmqcgCrTKWAXgLnij6wfAN2KErEFA22xwGNCBTZt4524xZDWSZXZrmYDwKwPY1g8HEa7vZHxFag"
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
