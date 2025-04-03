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
    "3wJVrb6gYRaUNiXH6e2cPmWzrkPfiErSiBGZVwiCnPiBd46r2bF2ajsqirb7fdRRZgmHp3UcsRyZJjnTNhmA9Hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1fM55Wje9BukyTbfcYYut7EppZSb3KcCxMoQgb9oXuVsy6Eag3fRd36atX3Yxvymxwfz12oG1vf4VwFGNGeKas",
  "key1": "2AFRM8FwDHqG8tM9BoZ4a3zYEazuWhwDCQPgV7DBgNajv6YUaXLJBmXxEqyibeyvMLVTTZgxYj7VEPAwCZyWjwQ1",
  "key2": "27A6SRjfspHAgpU5zBUfwjRQTL512U5rYsMU15Ls8nao4mccuU9RY8TJLdTaWpkrXyo14ge3rrx6Pm2eyF7U7Kz3",
  "key3": "42QXUx5ZuVXQhZ4HZnhPyHojpENNhqzCffqKuVnEsJ4yuEkUZYsgb6KUXdbwpJWXh2cibwwc7ZLgj3W4vSAUgCuE",
  "key4": "jc64oknJqrJ9qW5qStmbbnehLgF2XAr2m3vrgr5GHxDABKDb2xNq5CssGTNYtT7S8zFAzztekkbUyyn7sremzLM",
  "key5": "3Kb1eceBLkKtQaUYyt3byybYASx7iC1hZApkAPBcfFj6nZQ7yDmZKmZ8rNUswHPYN1vmZ1UjYLnn2qRfMEcH76tC",
  "key6": "5nGpwm4R6zVYRLCfBGnTjWeE4XiNmQ8UVci5PQ3rrk5tfqKNjDeC7n7wFEn3t2gTfVBqgjUAbo7R7CNHKSSmKZQL",
  "key7": "2GfqAezd753Ve1NGANa6ZQBis1m3CrCYrYgK29fZu2p18wXsNo15rN6QosxGVDZH3KVfdFBWEq2uTYDD5Q2bsuYF",
  "key8": "4SyXgfgipAs2Ko5XS4qSPxt3CDKwt3JYaMsxfGau3hXSfWtKPgQ3UxMrQe1EgFioHXAPfSq33tCxRjT9WCoEbmp7",
  "key9": "284exSMY8zoTerxrUrULRUYRcfLx5ndLi1z2wdEs98qXgj7BEqzBrpqqPrZDA5D7PfrZQR775SzwDu7D5R1eeFbH",
  "key10": "3ggbeK79ojTbAfgoQHJgui8FtgRRWVU8uZGzUddvFxqzLM1vaZ2WFJxEdkLQrHp7KPECCTaxRL2BfQSgYxxBdH7E",
  "key11": "uSbAzSEWRrYYSdYRLptWBi7SY2LXWMgjggCugg5jbBfAnSAjjfWfXcnhnW4tfrWhR2HCAZ6B69WwiQ9bshXRcuF",
  "key12": "3HQqR25AvBUyQxmG6yxVPsbqFppjR5nqY1Z59JMufUw4U6so6pdByHyFZPMgtv4XEjfgziLu3pWaPXwE5wzBen2y",
  "key13": "56FGyfHDksAC6jsLPVgZHsFupWsbdKAaBdji5G339PkFzCQRLwePt4f8bmesv1ftgnJMHQpAE9qsHDyzKsYsX6Pt",
  "key14": "5i2S7NZPuNoLw2xMrXALLbJbZ6ZWMZHdmieLKCNLwURzUYoqxk1NmwJximELN7cF7ACUmRjyuVHjRAwrZ7q1nd7C",
  "key15": "bjFvC37PiJYzzQD49smzA7UfWDLeXTHnTd84o5kc8V6aEWG3t42eT69ye2y6a7W7vyPzxL8kpC19QVJ3sv5CsWe",
  "key16": "5EMc3VkABq5sX2uWiU5xsGm37vs3yqgsLvPue9Gj3qGoMTTJX8jYZUcEuZ1is4q5wFDGyVcjGAcJ91JrT814NWja",
  "key17": "5od3Gk7SU2dvyxWAuS7X2aW8nwtLzT8aY6VYxkviQHJxioFnS2iyb9D4TjnNddQRCRcquSer1WaLmBPNaHKAbPU",
  "key18": "41rysp6ed42Kab1DpT56yVWWqVeMo232mFiaJ7giTcWWDWLsUd4wga3hquUa2N17XE8n5PHQ8LYT7kNvfdn954g5",
  "key19": "58MScZcnT2RZYZCsPQy1C3uwwvDHxtakj8wVpEE4Ebu2uhiH4PWkBw2L5Ekdmwd72uhYptTdq6CLbriLAnJEuuQR",
  "key20": "3qZtKkceDnBk2F5EFo7KSc54DaWdmm5ATV2JVp35dTXBWMSjmT2pcLtGCRAyAG5WJC41XqS1PfKPwbhHvWqpXNFL",
  "key21": "2wrPT5Ukp7AywY5yaw7CQGHJkHA5pyPAAuhmTTeU8bmvQx3X75ATBYRGqMKYGg7CA7udbhvBAELmpWc3p5o4mtf1",
  "key22": "3k6AwtJwc7kYmu1Ttfq1iedSAMjHEUafEn7xGX21YvVaAMZUwpGPkvALy7L6TLhZBt7tEhJkNBrSQn3bnmmiFvdH",
  "key23": "GjEm2EQNnAhE1ecVtUBXotfw7La99xpcKZKEV2Wbco6RjPNuVR85e1KtuJYjFAdyckVRnNgo928Y2J2ViokQ47a",
  "key24": "3saMW35RqybbQx9F63sbUmqbkT9v38A1FvVKm8Aej5niKTFRLTcKfBBSxTzaMJtDA1y7M8PHCSpgcKx1AfDfK5dK",
  "key25": "o8pzF7xeWWPtNJHQHvvvg1LBtCAPiLsrSgPujpEJdLyzf7PuKQPe2EXtSWo4sdqXzcCouDRazXKCwCdDvAC4wKq",
  "key26": "3FVZWCgpPYxTorr4gLaTSAXaPSdbUpNQmEtmBHoXnoHZWtCQRSyLTB7PdDM3KqXmxtDWCcYT1hHAWepBmy5puTot",
  "key27": "4DcPEVMNfmaZuyzdkNnSy338KjbGYvSgPPjAnVHw9NLF24kk8H3ADJ3L8JeG1AoMA4BvSMGfZJTerHj4ZUGNFMtJ",
  "key28": "2HNvoVRVQ2YRgoiPTv34REnYxxFWVX27wBZKdB7g3hnTwMgajQiJqAaSQTVaJ7qrMNaNE2jyb4FJejjorDCGu2ng",
  "key29": "4AGiA4FxZKyoSLw3amKUD3anypbSbQJP7TGWAoT29GjbRXduoWkuCPkcnfuzcm651bqUvL46TTtnPEht8gQ7VxrV",
  "key30": "YTrephxvgyRaEHbjNgyvnfgVjiUtm3d8rQexc68n8bSho55yEFLYqkpYz2a2Ve7CouXKAzQHpxCT44736FR3gbj"
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
