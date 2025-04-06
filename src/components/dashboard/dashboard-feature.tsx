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
    "2EJvbSXXkkNaXPjD6VwF99qa4xGnNGTjLgLnEqDFHA7PnMXnN9rttULqj8ENwjK3zjFKowMeUC1W5ujYHhi5BNbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HweGcxtVopsaQH5tLYH33FmrFU4eybcEgbAXLQEc889kjR86MtjMdrMAMZy27VE3ij7poRjw3ddg47SYC6YhHCn",
  "key1": "2k24JE3ccRQSd1xUtU41oaCQ4HHgUYgCS7DNhyZQNkiyDS1dUSDQhDyiSfuXsqbPayo4QwhhqQ3bkVmCWJDum2g1",
  "key2": "3kGRQZNX3GMmi47Hix8mbHQKSFiBtU7unEvEyN6nwBQZwBWiTRkbxsVYXgSQ8KSQasoUqhQHvHosoWmHvZmPkBSX",
  "key3": "2RvAr8MfbNCq6TEm3uLYLrtNpEcRxj7CpHjiB3wMcNA4kGcobASsButYB55XiJgbg6V3RuLvms5PCEqVMa3QGP3G",
  "key4": "59HN1hnE3hyvmvRmJvvtyK9eBaTrrsX63B9KPkP3x96pP79WZ7R6tGtiaUqVtMmFFHEBXT2aCCokXHEdVJiNpFUa",
  "key5": "5cKmAq4PQBddyzKFVATDZm15ABobB3gxCNj5FFkA7ktMWvCa6TckyJNyZvfmjpMhgLCAnMpSAXjsdvfDpDY4Q2pF",
  "key6": "4dSvYH9JzoNhKtkjgD6DStaJSixEPUeYZRfhN8HaKfULg8XqG59g8JgJYR1hihGp7S9JFHXTwctRdv7PUd3BBchv",
  "key7": "58vdH5KhaobTpTTVTUQYYUaxQpKnQbqXjrubkq5ZMExb4nXWYnxEDTsHMDBuropFR3EiEMViia2XUvcSDV7ggvpT",
  "key8": "3f24pCoV5bAykryvXetNWHp7UPZWVDndy2GN6GRY3SVKKTKPTcFJ8Ab5XNvGUW2xUomgeDhRxyVgbqzq4P3J3qsL",
  "key9": "5ZzkdDXh7J4ZbE3mr3nwtfhYbZBt3gAJMYwRKsKtyrpVM1fB9sNjtTsUdRaRNC2AyP65oN8itX4tZCAbnKgr45i5",
  "key10": "4zwfWwWs6pt4AhPJXtuJctmZ2vSpwxtRW6u5veTk8mNxcoXAmfFrjT68Zs8BYTqSPGNY2Fz8MHSV4NetnRudspRm",
  "key11": "2PzFCkhGTPTPo9UmMZufyrYeGjfV7sTF1sgB6xwohDipbgsBenCPxowTCM3KPNam8yXKmxj63NJXAfdAV68Wre9v",
  "key12": "3mP7M9CuqHJqdpd4wKU7uRrHiZfi8TGoH1h4agEUbqKEEicnAFiT6gadNXjdUEKxeVS3HjENAcLw372uDKeAYuUh",
  "key13": "3szPrhgWEjAuEC7dr1XLLXMZjv18eeCwumzouAW8riksutwzgMUoRND84ZDWRpZfse6zTmfhWA6gm2EtWJZMLZM2",
  "key14": "2EyqngqLXqD4XyCr6qn6c6NDiuwTVoYaCRQQ6H2fADwPAJA8UZhFmZHPTVVm7EUbQPoyxXaJXbKrRxoRbeL4QVb2",
  "key15": "2xUscPZtHQcUia2Nh2vSmyCii9btftC9RtLYAQetDwj3Pi8a6vL2sntjvY9Q2gGG94rTTCtfTACKKqXnsXbim9b9",
  "key16": "dGa7aUsG6dnMzJ8kJeoH2jMTxAEZdZaqm7HnTMRw2Zy7e5URWmQTgXSZjUM5mT7NiKU35pV3YbDsNuPEvqxUyeR",
  "key17": "26tEzkm2r1Mc41nPNDURDA5rktqUhgkgV2wBvG3BSLmurNZQciFnbAkkJgWNUupDtoMTuA2c4gRo29bZhfZQmMCP",
  "key18": "Sq8fCAyLdhayh6SjaRTuwSN45vycHMiFEN7pt6dnHwzQQNNiz2QQUNu1UskMK5ZUQNJSYYjU2GsiS1rYogT57qf",
  "key19": "2teoEAvqeHL3mmg9zCMSc98H9Hi8Rxr68zQ4Z7FEZpAEM9xMbH1V231GouNpUMipR964SFwNa3GdtiqYcp9MettL",
  "key20": "65UiTspbLaP7UNiJiXmFNkYd4F1XfeVHGnh3v8xMHT1NsgZ2Vt3wtJgoUaXFwYD8KpQaxAA2i4A4rW7Xh4HWYWbf",
  "key21": "4rqqEN81zZ56frap2He9qBaEfG7GzxS2FkXHj7FbMPFKe26wngjHPbmwZ1dX1cvwuMcir5kpSrbobZvBjnMyifYY",
  "key22": "5hiFYsytYz9y8nxcgXMeCzk2UmYyddfPXQcmHjriCnA2fM6c5XYkDcALVRJGTxibv6Rs52vCYpcAqVCoryFnSpkT",
  "key23": "5dG57A3WSu3jABtx96Q9cL4KctXaaMtfpnefYBVVnmxSh36cEPhEyVpSLUvxWAYTpZoJhnf2t6ezUoTHkjVN1WzF",
  "key24": "4dB55949qh5qt9keLJXEx3xSJwA2Mc5Rz3pEAdBEhwWXcCHfqEv29BzDTp3HRkaPUBtQAXJDxWBEKnRmjUnERWWL",
  "key25": "sWhjXFehgKdktRwcfMNuLzfsL2gbSRoC7ZKNW38a2DxMCwRF1NystwGhM9APUsFUZhnpXTjET5JXVZDuYPAsnih"
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
