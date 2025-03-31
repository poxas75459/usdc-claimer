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
    "c2hGesFDT2P6VmvKYhtMzTgmhqZxAk7xrjC5vbVMAq7uouLGK22GassmUWBBWGnk71qQXpnn4qSXncMADEPiomF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5j6Ly2BXU1bCwWrcTtNvXrTHxwhmZAi2u43DyF2v1wWmxZCChZFqkNTawcssdhCi4dCjtkcVxHMQEXaG2S3Pdd",
  "key1": "UBEzmZshK5AFPbvbiqncTh95UdYxpZkJCP1umrwCVJVEcWd9m4HneoNQRNvDc1fKBWLJ4998WvLxqgxMQDGBKVn",
  "key2": "3oFL17VvAhQbjqcrGY6aWSuv1zwp81T9Bgii3P23DWNnkfMUxEm4BoxKREyQ5jETqvyiB1DSvs5UCaJkE1EK9BjK",
  "key3": "2Cp5YHoEoXSgkEcj7sEEVdSia44Wshimh2o7YGeYEn563ETKFFQxpkCRZsfFB3hmymdyihbTdxk6iB73LP7Cv4ef",
  "key4": "38qk8Psmnyp9anLwThsawaoZJwv9WwwYy9rvBMhZ6otPQjqpn4cXxENgn6pWc8y4RSwXr1C4UA1i1x89h7MMDU2m",
  "key5": "3wNtsw4Ldz1BveyanVXS4U2Y2G2DNN3mwMAifuyYCaYozaCX6xGCakQsEXLEvP3tEGvYb8MHYcFH7a7wrHAdshKi",
  "key6": "3CY5PJBgm21RAvvHvxsZbJo4fUNLrspxN7VD8xbGGm3zKTVb3yHh99FcieCD87xCRVoNNoTZKwW4apScTYvWam8a",
  "key7": "5MgD7vMsGinD5g4YNpiRccCJREohvqHDUspo9NJyCgZ79WKGtR2j6UheVs14rr16z7YHQxAWQCbKXvSncoo6iyTj",
  "key8": "5pqTewVmqnMeL6LGZbZEdJW3hPvUahDYowi9hi293UNn5MkvEbL4F89ug3w2sHYRRffGTp1jCz39FeQhArsrS8EM",
  "key9": "2hqjFdSVz9HxVDheohYSEHo8V3jFurEYF4Q1o4K27N1GoLxsn3g4kkxBegEfZxYfcXMtpzpWeqYfYwmHDjKw5GWN",
  "key10": "4rN1dB3kjr2RicQTZKbwU4XriUWzq1ogbKsqooBEfoZ8ivSoxNprxbB9afZcwkV3WLGm22NNY9JakrTAezPzP83v",
  "key11": "5ivcmShmo7ifcqXYdduBoAGyPixHVE3n824TcsnYJhqGNggwaZNRroSWD6LKdd9pSq8pfHhiPCMhzpp2f23spVDq",
  "key12": "hrNs7V1U4RYeEuUNScfMwrdUk5QybyDyYWEv4V669Li9SJGhQRc6YBKBGNphvNqfpeXNJkygSMPSHcL1r2odSJW",
  "key13": "5R2R48kG6Fa7jhU3qW93aFLJ7V14gWPMuHP2ZqpWjxENxthY1kouUZzBaM678vguuD6xSZ5pTqERtQYT5m9ZnyQG",
  "key14": "4qNsLLyso4StBwHga5c3gsnnmdZ7ZcbyYYp9yUqMTEwqRffYCny97UkwYiXDLZSv6xv6CeBJ1L2QKD3UqaHBRzWH",
  "key15": "3fopVHrSa9oXvn59iGhkqTEzwJRMakmpxLa1WBQXSX81qUGSYT96KkQo9SmpuNGMcDakFgq3GnQyNogEDH67cVRC",
  "key16": "3dLbPBUtbWEq47HkwA2XzuYSUFUVB8kvYE8f94eDWRQ19yNZEeC3yU8ue3Cy58iVqdEAswZXyEpeKXtvNwvnramy",
  "key17": "3QD7zx1SF9Qae4PzZRpj8FJHn4uW5sXqpJxG2ZbHcwTtUKWopgx8eEfhCngTBzMmSVhe1sn4LtbC8QvGSRBYh2dK",
  "key18": "3LrqEqKs9N51MCwFHj57E69m7s3CvMdh6Q4NgujkRvkifmx46ekKhhdPttWFNgMaPxuKSKGmq8TpSLbGYGTQStx3",
  "key19": "4qycA7WP1zSnctA17mVHKJaq91BkFCEA3G5ggeDemDWBEh3Puh6h3ETTsuYemCkJS3JaNr2uyZjxMoq84Tbs1hCK",
  "key20": "pF9SaHeUbbXRgqUiQbs5wkaBNtBKbPf8Zespmg4SyErhhLBqkLB86Jr4eEu3G5Ba6VncFMfV6j4NDDwvp1ZbEc4",
  "key21": "5UpDpNfXSzU31eytgwDRxd4LAAUFAW8yVnKqCNt9RiH3Ftxjt2HYZK7U2YF4tvfGMkHLAkBWeDEz171qJvbAWAkn",
  "key22": "36jRMyrbwKDgjf4eMWkQRQRJJqcZJCbSwMuTmCKgaYr4Aa9vK8Bnx87FKRx1CHs8E2vPpe49YbqasEDxrGfU9zVd",
  "key23": "KmjaXUpairstjohPtTYxeCQtqkwcnyZB9Hrz8hv1ZJHTXRFf9iuQ66dJcFdivLgP1JnZ6PW1fLn4ktwfkm5LW8h",
  "key24": "4xr94pQNjdvLtYqxRvxgFQX2Mc8tA6cWvkJD6odnEjoTLuGaFPSfpBVyfzq3d63Sq5U21AfscBu3V3xcuCJ9zcCn",
  "key25": "XUF4SYnzeZ5pC7QAcM9oLnF6Zs9bZXUEkqLWw8Q4Y3FRJZNmxSduYxqVxHVfhHDDsSHyc1Lv2iKkjPao5icbBXE",
  "key26": "3Dq5fg77pyWN46bK1S15TevCLtzsR7xamdTcMJjywkPA3hWid5uYTqvZbauDWJCg12yEhR2rKP6B29LeLLn1GHv3",
  "key27": "UDpSmS1MMeeqK9fHtVcdma89VEFsXMJWbJVqcVSGWGSVgAPHpN3dWsbpJBbuFcXwsRDaHyGKfdvK28ot9LyA1v2",
  "key28": "pPiuj4cbfWaoZv32bs5kiFrdQtUsWWS2bfjB5gM78tVtYRgwp5Ca3nS37NgbS53zpdHFY6Ux1BXFNKq1tBGgi9q",
  "key29": "49y8tRo53ajZ9hbW9khXcLCtVsQaQigCZkwzxD5NrdouxfpGsZQeKTBiytd4Wqa5ExdKtuipHUwNF1eLo9sLGQ9",
  "key30": "3CcDoq9FodajWAWPSmAtxU687QQjzP8NZ6DVQPvHnsepnPeXiTutj3gRVNq1dom5k3ed9h565K5XQGtb4HpqMH6t",
  "key31": "cNfKTCWqVcNKseqwNXFshPPJnRoY58FiZKE7V9CKbEr6k2m19c2HaUPZzcRp2WNLCPZT8mejNwZX4wYNKabrqkw",
  "key32": "2GA1ARne2PbTzdyKLomc74fK3XMTSF6mKoudZKtzizCVHcVgMTGJTXhmMrG5msYCDiGp19tWSsP75w2yBL2DYmEj",
  "key33": "5reEWE4yE1NPGKuM4oHFjiDMKjeoYw3iVjMzERhuBb9vPLKyZZNEi9B6YQ8ofeW1sSJaUnr6iuZixsb5mtazhoTa",
  "key34": "3rg2ddnV5f3iM3PUp4EiwGa4zNJ3BKSPFaxMNctcy3eaUvUHe2FRpL4xb4esg2Qc4HqbxYLZWxGemJ54eA2kveUw",
  "key35": "28f53rwBDvM7QXmxwMYMFLfv3JfLkstTQX4xW6dFEMjBLyzqB3ygc48CaqHDsFbkUarKNHwjAv4ViLHGFGxWDnsv",
  "key36": "2gYKbt5di7rrBznPuCc3yThjERStgGfdbFZHenkJciK9ve5FFSCEHP1LUV5ffV6Wch1ZerXUYiKe3Adrt4DhbN8D",
  "key37": "hXCSrUEa5H7bJhmjma7WFhN9KHTf3uPAQmmK89hoJMEP3Hq1nzqc2GbUh7QF698AGhM9wZ78TCR2xUDH2KijAiP",
  "key38": "2uncR1VBFUDJVpMn1yEYLsmTjyhkJCJ8iNruT4HgpfPjq8ZZw9h8UHNQXeFX9qy5MGraVUFyWRgGthRygxwzUwbA",
  "key39": "2pnCvEJ95brcJS2ZNFoXPe8nb55vYCJBVgmni44saWCSNi5wsrnHXXnYP8JHqEuT81PUoyHnEE6TDYidH1VSpJbH",
  "key40": "3RXheGjQuWJVoscnH94enumPD8hQwSHUW4duEgVpKXnPqJSn4J35rVSu5UR4XjQt5VS94Dihpr4CbDXLuUyfF3XT",
  "key41": "62qGMqBQ4aUJ6hDaKEj1oMc6PQNoaUcWaCfakUXYTvPcrb4BRvBouRUkR3VcnV1bXSYTHXembMaZJdnHYtM2cawh",
  "key42": "2Kj96zCmcK1FB4e85rBcJtRWibA6c8k5h3KxodsmSZ9EdRdfEcfTCXmLJwHhNHxP2nE6UM8j55Gwe1vND71rQwSw",
  "key43": "2xRjywbnS1RjpLXDCqgrp7jCgFidQZ3C1CPsok1Yscw5uSG5SwrjEsqiqdxDUwLxj8vm21nu53TWp3zDDwQTVRMo"
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
