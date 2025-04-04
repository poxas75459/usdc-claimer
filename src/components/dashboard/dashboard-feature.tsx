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
    "4SeRW1qU1NGqRfSSYxUHQcEMKdjyFy9aXfAjfUYDh9iu7eN5161i38uKXJqixUah1V6t8wTRkwhb41q7zCjnbcZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8h1rH8jKQYFSMzkX9t197eZqHzUbPeFab5kHRKfXRo7NtxVCTSAZxqsRiwaJ5fhesX1SdUeFznwB2m1isLX4Zw",
  "key1": "5eU8zpWKyoh6SV46je9cgcviWyFtybEKBmcrvasExRRANVapUxAkZ9ACUCaqbgHvtzKyHTzayfypmiGRZs4XWwZ4",
  "key2": "5V5USfapHwKxNXPfQxVyaoQzM6RWoj3QBzmASdmEhBSDFqpdtJi6HtSZDBxB7bgqEGGw88272T5Vxqvwagz8NDXc",
  "key3": "3ee4GppaQJE5AogfXemXqjmbEwK766ncm82dBLKQEZjRKGDU9EHjsvFABLBanUHSNUVMCxsJ5pgM3cDaW8Q7TXC1",
  "key4": "34Q1cE8WiYWyax7GJyeSLbxSefqmtGk72ue9Q8PV2KYYvtfxnJnaK7KVQ51WP38EmVz6WtTHyo81ES3DbjnunfTL",
  "key5": "5jhb8NbmQpQF8beikPwsZrwb5qKmFG9pUobkAEbzfeNoAzMPDbmaXjVvgmkQ8WXQ2ToiESBrPsDKoNegZYzAEJiy",
  "key6": "4RBv5DdeaHs7VDojgwabLgKR5j5GFzAGDJ4AGqXt66WqtKisphShzLk1SmAbrdwYc3VEEtry9pFtH76RfcDHWm5Z",
  "key7": "5NczCFBR4wgKX3qRM612RemxRgFjxRVTvMSRSx9RRbuWY4goyioEVsWmxnTBKERmUcmshG1SwaxjSJ2K6hjWXCdC",
  "key8": "5ZQEwxoKnE7ufGyGPxTn8cUdaAZu6BFxTm58fTmxG6BygtFPzHaFEyEqnKYgjBsohGCmgAXVicTENcJTwZhgs6Rn",
  "key9": "55pMUiFyiedWEAiiQ4LuhTxnysMPdkDUbrUoSUN5W2r9PK3SLu5hQRwTzXEuZNcAC9h1A1iJA4Aprc36ipiA3gsE",
  "key10": "58LuLzTLv8tBijXmm1WZWT1H2NAZNcZ3SUXCJoi7L39DC5GNDWJ8kgNjKcx1b2SxEHR99dZG6tBMR2RNzyAtYgQd",
  "key11": "5iMUW6ZtoYbhL98UBynFYKv3SE71VXbuX7WpAGWQJL2MgTyU2Fd5XLnUAEQshSGEcajLFPX8rRJvBw1AC7Ct85PS",
  "key12": "3KbLqGZMYuWw2HRHtMKk8ZhSdp7z8aArbqGEgDmYzT2ffdRERJu7sksAm9TVUtKiLqm2tTzhL1K7cgbpp4aGHevz",
  "key13": "Min6eRaDjrde1dTxGhkoBLNBtGWd3185vYuGY2reniEbR5NdpNPagzbQ8DwEEjeR17yME6k6572GLtJurvwpU17",
  "key14": "34Fm9ipqyTr2ZpUcGi4DvZ6oDLWvbMCbJKLZ5pGZnx2CG8A2Vvia5YVdpkD6K4PC9GPcJpj4GzbDjQhTQuk2wDUR",
  "key15": "fC5uGqxrrMcGxzH4GJe8TL1dEtWwGtDh8wX22Jtg6hJKuhVX3rzvDFK9P3WukhDPgA9p24U3y2VXqELGNUqEwgp",
  "key16": "WPbRUmBFyzmyKSRRQeo2WcQBPRMRsnsmq2kEmVHCYkBB5PBbgcgpXfXcr5MwSzJeiD3BL8Q5wurPDv9Vcriu4rM",
  "key17": "YmFW13QUiKqv9AV1xKgJ96AhcSvCcxNmRWcK16c2iYKUN6kVbGeTzDkCBFyJgkTH1XgC8TZBT17wTPXSYZhdcfN",
  "key18": "2YMBcVfCWn98dWLUDyMmtJz1rERgVV4Ndzvwt7TBBZFKQnUYNHg1L78wCTNE36K2xwUBebi3A45YSX4K7gB9iopz",
  "key19": "3pJ1kR6ZEhcXSriiE9wDxS4NS13Bmbpk5vkrs7m3fYCQ1cYqVGeAjxMVCxG9DGeZ7LRzbjUiEVSscETqhX2UuqE3",
  "key20": "32xEFED3BKp2ojGkoxGGoDYok9ej4iHotDeDtNQ7yfPAGdNxrKpXpncxNb4drtdfV1nJU1TDfZUc8biMHMT3z2sw",
  "key21": "2SsH2JFbSsXgYVKhpuXWhLQ3aFaT5TGg3sUNU7RLEVnSTCMZKwZintTkoedR59oDShupHBU7K1hhyg389zrUfYg2",
  "key22": "5mmYE4PHdEucmwWwSzUZWoPQzoZejsafKSvywwM3JXCQD9KSLwua4jQJ8hj29BdbN1Pi7LCD6syGjgqqnmja3hNT",
  "key23": "E3vsZ7Fgdrkd6gTEsW8ZZkzctvBnxFtupApdqgottdBeSXqfQ4kRerDpMLekgooteFFTdgVLGgH3zVMvnryGtge",
  "key24": "2wnuQnhyeZD3uc2a1RR2kuEaVJbWoCZwNYbz2kBZckEeWnNoXEg6w12npg2AkPRvKYZxEM9ShMx9wwZevZV66eYs",
  "key25": "4yum2CwhkiN9uetj7fe1zCCmQL4zGqnu89MMzQJasEqKguhNvdWnCxUZh9XB3JHbz2EjYj5JD3JJSciQdHmB4Bqb",
  "key26": "4oCCoJJ2s5trc5DG1DSoV7nd6a9fsa7b91ntFj2DRwmAD9MkThJe4utX5R1kvgd2v4xtijxsiPCx1ADkayLhZ9cE",
  "key27": "1kE74uXqXZQ8n2muHiMhu6REHU8X2Gm5VhtEPT9cmdmAe9m6hj4SUY1Fx1p1oVvk1ZnCoYvLMbq6tUjzeFjnSCx",
  "key28": "5ohLCnsTBvh8N9m5j2dhdjLSJu6KQygWrkqhJwfWRLhdFvJKZsKZP5KhQrTauCYe7Um294vWneAaWnyGJGJHQvoQ",
  "key29": "enftrm8FTPQn3NDL8M6yRHuMVNUVpmz4CxZXwigyZmLMmAR36nESrjAgfBK8XSPgYQ49CWeS6vn4ij6QJatG9nP",
  "key30": "2Fe8CLKzLtAtW8EaVY1KwkqL8o1paDvvhZNUcaFpfVVrFMNPunvDFJXDQf76AHBUD4AHckapbK7u4DwcXaiucTC8",
  "key31": "KrDSWS3szKVpxgzpV2YZGwrMq4RmFhoPLgCitixx3CQwFXP5aSrtq5rwvffgSuFaYEVjWh167DYYEEALnFZRUBG",
  "key32": "5TB4fjUNSsH6k71cm7u35GvKxNznBA9B1DSNCwZREg2FLxK1AMhN6nCuSTJrkfFwX3iCWDzavXXQKbeowhYjuSLn",
  "key33": "4DB6rksZBjZcJjQ4KVDiBAPaj8wqKPZF3R7SavpGLDD9RiyfMtPR6zCPwHxaF2TMVQCCbNxRVbqcr5sV2FvUanJn"
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
