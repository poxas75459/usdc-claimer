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
    "5D22xy2LAf8mb8RXXdvS3BuvxyhUWWk6RrTFED4xDL28jwxGpSPzHxUPDGng6bVtj9GMLzkPSoVPRsDywdhXYjTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFSwzeKug7ouQ6RQBrRh4HiS1oGCNtv8oKvoQpQH9JWCC21seoZwZmywxN4d5TsdMCi726VhPN1US8e8UTXBA5s",
  "key1": "2y2tuHNT3GHwxe4wXGpPm6qJheRi7zBURTtjTRr4uuKvAbEopSJHFhNShXFyR2RZiDMi2nmuFVPzLTakV3uEt9V6",
  "key2": "UEzDXw3QwGeBSeBNTdqPmNTN5aNZS4CkeaoZ2nxricSZa2rNwsCsmnSYisbZfemsNQt9ivcGxYPTHQwJE2acf9r",
  "key3": "55GAzj29rJveNSKS5mY25Zth72ZUAqKddxKAjYgccdNU4fCdqRQL4XcdbC1RrwShh7powXqD8j6L9QYTqiDBpSTs",
  "key4": "3gL1hyv7Jw4KxnMrE6x2EYLkSE6x2UBPP4KDworttHKvT6rFq5FTX6nzvGFnCjDQhFmEjsUZbJYWTgNMvz2AvEK9",
  "key5": "5ihgDbEvffXbjShLuWP7UAg2XJvoHTRj578EhVUciVAzmv4M5Rd8Cp8CgmLu1zhj1dEv7pXyp82GX4kJtCUmR4qw",
  "key6": "5yor8gHkNuBj37PFqpBhcjH6stn2f64Ggcj7ysD5nGRTcaNCbncGLufVHHUX3RUzHcFGVfKwapR3bDTXU9ncsBNt",
  "key7": "d4nhdJobjrnREXVSohiv9NbPqJQVLPyXeD6mXraa1ZTpNVy8THtuu1t33X2M9nnWmWiuNnKsYpJFHdAdtRcFnAa",
  "key8": "5C4mB9JpgU4Up2UToKt5Dn92Fx9zKEMeADgaWrf4sJBtq7HnuUdLNfvHuZj3U7HZFwi5R73znq5tTsvCvpL215UU",
  "key9": "qVoomBoqZHwLAeh2hc8thGrgxfHrtJhV8HtwmTRKbtCJ3PN8TFM21RT6RG5XekpJCLmeG8mNAkfZnexjHcGBtyP",
  "key10": "dJSCsW1bYbNfP57HZ7MdoB3hyN7k2VqeJFEshvrNh8JFrbK3XcptcDgNqxik662aC3fMaV3KF5mqC7U3b4h4gop",
  "key11": "2rkfxVovR91CTff9KrLzMpevgSzWRsykMryyc5ea6K5cunj4XZCf4zYNZNz5J2suNKEgVquxEW5jz9Sgk6rHEp36",
  "key12": "51EgDWDxSdP4gVQWCFivop4pEZL3nDSzqQoEqVKdsNvyycsSejSsS9iexzrBQW31zvZdCgYu2smghDKMyVmkXp1d",
  "key13": "5BGXh8NK5ZE8gN1ALTNVeKJHQkhL1PUYTdMEQzSFCZpH1kX5uaHGge16WNPhWwnc1Jyfm2VZoW2VyXPs6V9N96q3",
  "key14": "2UiwiHjpui9uHaeQ21JgCpz5NGn7nweQafRviA9xWySyZz8YMo3fsTggh6DFu5YA2HBmpZUxoArRi28dMjRJ1aqq",
  "key15": "2gs6Ccip2Xki9tZx8kUzarE2UWDa8FTsKPjuH5dusfZgqgcjzXpRLujFt6UpYVo2LSDnW4TFZp9HxaTxLYLkF8Tc",
  "key16": "4VLq15hXSxLyEQ4djvHb3AG6CjGDw4hGdVMyY3ZDNwckgZYAv4UHEfjNFpGgWZ8BdbJmGxUZRVJTcLyJk1sB9iz4",
  "key17": "popbfoTLMwP89pWLc4j5mFdfuBdrtgUALh5cUz9oZXjUDYWLc8HYbdrLFyX4nUHZH1GzQufUx8QYx5aZuUYt9LC",
  "key18": "4PtP1KuqvDRj2Xuh2TcskDH26gAm9yYP9oxTSgLBgaFyr9TtKdBaWexU6fKuYysrq21wftWEvDeaTHwViw3QwDYV",
  "key19": "41L6huZbKTbHHidP47EjyztUArvtesgHUXRovfMwAVbSM8ZtS2ENkeB6ia8ZTgeRPjS9jdj1Y8hpnDZScruMBrgy",
  "key20": "64P8yCnvEksYVdmbtoyXZ79gb78mNCyTmDmrFyCUhiP7cEoSFeneqfjNccL1jFJKrgh5JRF7twHz7Tbs17u53imG",
  "key21": "3XVoVef3x4DNcNJaX9UuitUVaTjTb9KLZX7BTQofq5qHpJsRahXErR5LAAfFFn8VcTHexS9Z3yxvZGDGDMaagbNb",
  "key22": "5Vvk623jRS4hdBp6dSAroeVSAat44MF2T8NxoAzJXGWCH58ZZPAmUaYvwxBFsF8rG4EEVBHyB2vi6e2mq1XQUbs9",
  "key23": "JxT7doLYuTxiWevjYjbSN7iuX6Tq6e8jBfofK7wmkGPi7fjWkViPGMUnoCZVXBaBJteXYw34B6AaTWuSRv4rFq7",
  "key24": "5f6vyGcvx6sVe4yx2x5qWeuFkRQ3ucQMD4i1r3RPBco7RbT4iKwYimpCRiKcuca1ZFr5fHzvakiviE7MuxMM7oDt",
  "key25": "bJmQ8rTgz2a5MnMbTxbCGhGTDSZdiEdoy8PHZPm7keGEgFzBvegroyhkMh8Zhnw6PGbdbz3BNDkXPzVg4xz2Nij",
  "key26": "2TKyTAbpFaVyimomzJMg5dixvzKZwzxdBT5oXpdmrrSBacNV6XRpwHzxJeWjBq915Y4pQTpUDEAqWp19RbGuXESA",
  "key27": "5Nfd8ZtfuRC4VNVinEv45pAii8g5nR4KN7Vajp5uzccej66PvyAyniVvEFSti6HdJaafksTD8p9JzEMSBLsogLwe"
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
