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
    "21vSqo9H1zsnoLxu1M6rSs58vbtdtsqNKp4vU2H1rnELLk5j2Fs6NAQqHnv7QeQ5Fohjan6i759zZAYsoamL9c5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UtfAPNi8Zk8LSf4Ayvw68vDStsnevRQ4YCxxoFZUSj8gpjdZn2fKaQdTLFemy9hQ2j3SKWzWw2wG9VyajwYHto4",
  "key1": "2dcuyPDNeWqtrNqhi52F5LV4AmctG74P6HsFimwSCq7GK3rwGksE2UWqZx1HTyLUzKRmSFtr5xhazQhHvBv8n8pS",
  "key2": "2Boz8u1MpbcYZWp8eTdNGAWVAtBejohuHqM6QLwd1Y3aLHqfRU3wZvkVs4L6hRAGLdAgT85caN9EcJgerHtsxnDA",
  "key3": "2EiZZccrznWCaSr6MrzsHvv3VjEG2AccDkYoqzXvv7Yfvk8kgCDLaBotCFdm9uKiUciE9CuY5Rb9QotvF8hNra45",
  "key4": "2gHYrNd82TKhGHxzPMzF8co1zVDPomYqPzNHK3nnNArobq2Pnyo8uMwuRjfgZZwp8vrxujm9eGNLPxAvddZ7QQs6",
  "key5": "5QLTLSeAZ5ZWLjKyEva8baAn8G5tQzBbEkXfV8tSxbjuc2MV7Er1D74Zfy2qURbUUGMpnd42mi32DnkdNkrs4ND",
  "key6": "3fbH3JqeL81QgKby5qNLHUmzLnGG2vwp2HSfBBs1UTx7D9CoV82yYQmKFEZhRaFgExCSqPixxoVirnBizrPSjTPj",
  "key7": "2RHHG1jT6zZnty8b19Nk5s8GibYspKtp2fP9YJmbwBAXCpuvx85GPJC6pbdssLN2315KniK8X7dtcPhXBFHkNfeB",
  "key8": "5T76LRX4N1KHCGWgJcQJeTSLASwVqBsWGRrZeG7hbMUxaEZGjiNGun2JrXcvTSMDMjQ3sHsUDGc2HcfkjxY29GGa",
  "key9": "35XsViEEAZnZdymVAdo6A4t4uwBMjAtj8UvC3bbwHTSFebgkGg4wPjqJRZVMv5FZtgK7Wv4dfgMLfWy7yGH5AJS4",
  "key10": "4v58GjqTZ5Y75fRMsf9iTxoEqu8NqGx1cg6fW1LV8rd66DXJ8GWTjxbMvWkDUKK4mAQEcxusQTBuwAHYyfh9i3RL",
  "key11": "3b36wT6pVroYx5bDzqxg3jQeE5DEX9BfZqhanpwRndJBQ2qSVn39iQxv856MoANFLoDeU22K3kaEiaYZTQ6X5dmJ",
  "key12": "3sZUHUnFFMfgSUM9VCaF5TNWK7gP6k3eEEpSm85X8FzGD2A7yeYmLjNCa2NtsWfo486tUZ8hjHBESyzQmejNYzk5",
  "key13": "3j43owDWeMesp99GQWFmU1fxApafS8cEPw5Hy67JK5wnw2QvkSY1RKfoy1det8muk5Fidxi7YvYJ7FnJqfu7HSma",
  "key14": "4y56eXJY6E4TXkrnhq15mfjRR7AtmVALTVpjv2rsmsdXHszxmJmoWNPmbn13KaPTZ6n7TjNjthAvyKakXW4JvX9E",
  "key15": "5xvczDY62of39LSJw1cQQ4KEMQbSwysfvdPVuf5pbCZpkDnskYRBU611fC5o7kdiKMgLHNXVQd7jgfF49vT5J1QN",
  "key16": "2PDWqdBVcev9GL2eyVv2j7SuXiE8xwHrBHFP4qVBdevMgdnyCT3cPSaXyLwuj8aBYqwPspenKwt2KLcR2YZuyRgx",
  "key17": "4Dcv3vaxsNzd2TZdRLGt8F9YmkcXNh8d6HVp8Caha4tHyTpDaBFrA4Ek1ASHU3QDqrcAju8pEhdtG6Zs8X1aNKsY",
  "key18": "MHu3gyMozjr51KSp6GTHPaREpg1U4R9kLmUAxUDshcY8jYigSQbm7eBtF8kBAfbX888vdyxDSscusF4YsYbYdby",
  "key19": "4h5na779yLcvbByfxxqNic2Xt5Q8Mxcp4gPHm2GjSeUNjcNaTLeWFM148xrhQhWZyAwhPBemiPcgrnGUwS6KTJXP",
  "key20": "2GQDrAMvNmLSH1LRpzHH7cwij1AjczNbfaExs7naFcm391EUCxqhBAwiPNgHLyASGQYjBmbhZbjU8Uwmx7zjpjnR",
  "key21": "j6C9V75pgQFjgXx1UEdmF6ewdbZxgvPMiBFEc4cR55iBcGWC7BE1rVGmu9BM6uG1GPMjLHK6cUSCbYPGxW8rVaK",
  "key22": "nuaiHoY74GwLVcxVKPfsjLYrPtcdYBevPq1ppPqyLurFcUrSZgjah2YBpPwvGALC1HwNcruGB7Hct9ubV7exLyF",
  "key23": "2tXXJqoR3e2VL3G6G7bUXmsfmxUY1ghbU9zq1zcsfVkSYU3uAvEE2UyVepMQMcUw8f6ZaT9e2wJF4WzMtquE2rCT",
  "key24": "2aBcu3WFUkpNdwtZZQxBQ7QhgniFh81K3RujByMLASXFcQc682JpAGXZMaG8FrwXaRGxwhV22Luew8oGSL3cshVv",
  "key25": "4pKxCWHpSXPXwECwZpFRBcXhjoGKenBXkkDQUWEQ2RkHcEoTPLSba6iE2nFC3iHgiYa4uLF4sFrrxr8Edb7hrFgA",
  "key26": "Sf3ujqw4VqbZJuyEJC6qbctSfaCdSh9kek1VUrpsk7nkFWQW1WXYkdoZnBQsosRVd9FzUGtfmFqUK6mAckQx5k6",
  "key27": "3tAAtE5QvEN5vELd1xGe8M4brUZPYS1paPkBNGgAB1jsFzyEDoZ57VDp9W3WRLRqQF3iGyvMjvgPcxhdqfPNSUEb",
  "key28": "4p621MxvbRrYSfPgGVWwQQg1ytBGYbCdHBE5Jb96jRDaWQQcsgoLt4oDVKLLueXVAGoMzZBxUna8gpRZ9BCq6YmD",
  "key29": "79UoJXxFtMWXoaPtbdUfYVxrWh1qHZnbKxe7Gd299XkqvQUoCJxAmBxw4euXxKFUvitNzqq3NdC51b3937zgAKG"
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
