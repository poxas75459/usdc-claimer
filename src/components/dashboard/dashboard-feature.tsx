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
    "5DbwWZQsNeSiBxn2P6Gz1qf85AFKfmNAmxQYLBqd3W2SFwS6Xt4Cqjo8o2jfRpXThiJC6TRvBx576vRJRsguWuhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4co5Uhurm3Fgg4vdMhxNCdCLYCb7J6q6cbaN9kH3qNZqZtPCJGCE3AsGfJDG9bE7HdH9XMMiXyGHzcV412VV6M",
  "key1": "4zvioBUMCMd7epgWuKqb25jvcfuhyTcPaWZyXtaUdpws4uyPrJ5dv6ENV9aVRW2oJj5Kay7fDZGkouyvLsP4YyfJ",
  "key2": "351yfeTEeKMnSdWRBD2CSGK6Kk8iSRJEnnozbyBMVdMh1eUvHM7BR7giQWbtkUv8z1LBF9cgJXvuhwVGduih9VkX",
  "key3": "4Hq6YpQvHHPb2DCxVN88Gaun1NLHzT6FYVABQ825R2wQKVPPio5f1sHrCWfzVKPDy1gvpxBWRYHxNiPo4Lzza3oT",
  "key4": "5K9pxUKcQDJU2huegDchxiNmmTuAHB9EPVWcNtLrer73fkvjToz9iSAS2DTrG81vUHBDqGDaveCQ41VPUUN3tQk7",
  "key5": "2LfHqrUtaqXev1QDftdnt7EgCqZ8x9BxFwsDNMh7QFjzNqGHQQviXJGNJ6sHve6nrDNaA4GpuEAnkp7jTBVAvq91",
  "key6": "5QZmLuaZbcawwhiwX7syB1GkKz2RU6NmRjTm9wL2wnxhG5wfMPDH5LMuRpzGhbpA8bwkMk29vKMnjBEFwAM2jgGe",
  "key7": "KP5AMeTS6skKHMxrqKXaJneLQfJ1NM7jpFtgqifD9nWMx396WH47dwtJFXw8RwQ5RRfsWFrVHoWVAv8Pitxymwb",
  "key8": "3edBpuAb2bfYeV3YyZepRHSFpRuxBbPxrfRzqEcVBscGBGEAsQ6o7ZWqRT3pLWGHPNqq14m2vJk2LXLTEWrfFRiJ",
  "key9": "EmzqBhGisyoM5nnbNbqrfCqCTCHhq46bACM1y7BBmhWDrtEmtnW6YQ4hJpBGpSrsQFaUPjsBXPuhVEjJrAeo5bk",
  "key10": "5ZXfNHWs5gu456EsTCodL7HchS6deT3vDHhh4PfkSVFuZ9PEmZexRd3zsaZdtyd1XULJRDzUcNL9qz1gSP2W6LaX",
  "key11": "57keqQdF784QFXs7rFUHgQXcjPVr2pXB4nigBJv6Rr8Fe7sBD71EoFfPTG5h2eKhXZVPcTabWH77qaSxj2dvJQ5i",
  "key12": "2Cn5oAw9i6SWAPiG4Fq1u2KH9Ldyci2j4mdMk22nurZfq4K6h1TopLdDw4StMUQniyDkuaSw4rvKdjiUBTwZueBZ",
  "key13": "55SWzogwzXoV8SnLhK4bffXApCif1CiAtS1SxY5eMyNaiKFANFciKHYg1BN7ahMGBkwX5KywG5eoM7eYQQEYan9R",
  "key14": "2QcFWd2aTkhJPXbehGUpXPWWx76ciwDWPjWLcWai2anrJJMHSTwgU8Tubk4S3byqm1FJ6t6GJm7cSjq3ubu4ukKa",
  "key15": "2yu3J6eB9nA6aprKeiPpnCfmYGQPt9BEgdiWrXSdnMMpMEHEQF7LKh4b3jSUh7KmNHizaxPRzMJbqVzPAYsDcqtR",
  "key16": "3KkRSv4WM4E8T4GeUBMcqky2aJ1BcGsXFBrvHb38LqJDi9MnovUnCD7iFeGcicNCwGLQu5YpjQupW8yaSzp7dk7a",
  "key17": "5vuwAQbDm3ciss8XgUPo8EeZonZGNz4zjYGRwuexjYy7m8HHWDj7KrucEsQJiz1tVWxvkdX7KVe8E6eDi6dELrGu",
  "key18": "YfGJicbyppS2cVDWLuRJkGGksssHdxno9XwHBjEkhc5vTQ54EHUcFbg4EBuHnLKW7wbKHUZ2E9rbEXgr8HJ5iqb",
  "key19": "zLYvunbyjuwQXxXMBDNkXZpaxsVjwPe8Hj2LyoAYJwX5mUSvEixi4Ke2PTiKvP97pCPgTtqGVLpLhdDcCSmyyVY",
  "key20": "3JapJgQab5CrZB2dQkaFKoHtjYtUm64aox5geKij46hvAbqH2bMANRitMqWudmQcLuer8kdq2sLheoyPqoPLYzjH",
  "key21": "57EpEqbq61hyZZT7NifpyiT8HYFheuVBYg5DKNDfmq3HfHdyLP63rjsxbddzGXkzSQjLBJssLomavGSFPxwKbswr",
  "key22": "57Bq97BdnfCUeU85rdC2P85pdZFyirdTsdFdLUHSuE77CvUCLKh7WsXZG57edoRXk9MuWmqxWBDj2UfXofdt3vBZ",
  "key23": "3ejcr3JJw3jfHuDcjqyKpmbroVciKr8tkG9zQDiyi8PQN2H3UvfyamQEhQNpidhHrYCRw6ZDpMjbjG4pUx8LzraH",
  "key24": "kFiZwnLqQvsHw6NHAvD7rttxeniv1D47uysSydyhbazJKN8taVGt8N9sFSVJMzbg4i9GZG9wzR6a3FSNaujN542",
  "key25": "VCJkXekywRbEQQFFuE4i3FXrbC1wZtticiRcrSD3mzvqjmRUjxhWBUDFVMeXd8wjJd58ERnrVJBFiq8TRHD3kJo",
  "key26": "4eUWGFK2p4pCsvvNR5hEskxPHc1RTMqSeiXxa4b4vN3eiQPc1pDgUMp1jcFP4Azbp8YHsMeunxoEhtqVVpREazrL",
  "key27": "4nz18L4XX8KBE57TSmpTUAFXTmmdB3hp6oox9CfvoP3wmz8j8K489U8RSjqdFDo3JPJk69Qs5GzSUvcvJHSa9tL",
  "key28": "5cWGbr1Q27sytEt136NFYdVXmeBQBD7tH3MxvvbwKiCCxGrLNu6uNXSDgFd3CGTiYzuVJc1fNGbrTht67u23nKU3",
  "key29": "5hHFoueYuMogckCyQpuKgWmTVjTKnXdR97Nr27zV3J9MvK7q71eMmCWHnpTMA5WYPejRqWr8DEq32kxNwteX3W1H",
  "key30": "4eXVt2fjTh1nmaNhxyeFkXVSKArs6tbypzSqwd8gD3Sxja2UMKfZGPnsfYJFA9TPAVQ557JzmyUAXczMtUDDT2T6",
  "key31": "5h6h9XTg5TzcT8BuDNs68kP3v5z12cHvAjqvPcSb1ViYu4E2ARwDtbMAmWgBvCAXB6AFPXSxgxY1RMaFCRunXha5",
  "key32": "4t69nfvGnfbot6tbushNFds68ck3qqniygLt4GdMK4xWpZncC4J5ZCq7zUyF8RAfZWzwPqX1A5WZDKC1GrtVqSDW"
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
