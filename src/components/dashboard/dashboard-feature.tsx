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
    "2yEA3LBrxQpnF6sviHM1iDc92dASt4e5XrKrHZ2pJcmc4XKd8cW2KFuRXn2Qw1EYJAqe5auWuDGbZh4gSQuN1mKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pctLNjAqVCRTvss2hKFbq7hp1WNoPzKwmsDfKJSazqc96ZB5JFsP5vecMRAkPtVCN26vNZVw7iRgsZxMPHcKm7H",
  "key1": "35QRNPBUXPsndpStMSRenai6cGxcrMsioCN8omKNJQmSQDADkEjm3w2SeyGZM7yAP8Wyv3hJcB3RA8oq738zQooq",
  "key2": "Ks1vgiramCXjGF7e3FFSqvK5nggAdfiKa2iWiJUSc3fdhmsREePtzMGYCNqsqVmaABAASB71N8cLak2Sm27XU8q",
  "key3": "3zTvNLrW4PhYnMukC2GC4cA6k9uBP92gPHPiSqZAnAXMk3RPPP9uezb8JRjpx4Xpx9cSsb6Lm3Wjc6JWG3pfaFZp",
  "key4": "2ZAHgd8WBjqeKLKCyoctPVcjDeWhzwn4RB8Pghckdp29JbGH7oQqKQ7mKmAycx9Hvv789FcY8VXR8kJdmG6vAd9F",
  "key5": "4Vh8QUe7tY6KKn8M1DYWR4UB1nS49DNDn2odBw8bnfY8T3KN95VJJY1qj1LEJirAicSWyhXhEnxj4mkBo1RvNtXk",
  "key6": "3Ndwy2yT1Mbkc15DokpCgz2AANb1iiSs1t9CzKhBBuXzMhWS8xJ9fpQugK4q1kHLKcB997byKdX2KGLwkA3cUaqh",
  "key7": "3kUowHjNda9ndbPWs4yreJoawiyJLm6SzkeZcMpnqEL52DmAxwV17KZjSxtcu412uFayWm1aiWFtSb2GqNXAxWLC",
  "key8": "nM64uJvhckPuXuLABdTUDd8Y92ZPrkZBcJVvwpAkNwhJu5iyZ34yekd1PK2RGnDcadTYTosQwXPVEn1HLeKjZbd",
  "key9": "2TNwvxJuvjX1idAuCSsmyKFoQqDHwrFkvoVf1zbYaPmaJeoWFMyrn8ny68NdctKdjtXnmaTpQ5V6G2XpLQtmnmL8",
  "key10": "4snkXxighLPFmcSGpbSLyfEiPWcbRBzpH4k4RfLR79YHGH2JQaSVK2Y1SHEqUDJ8UjdWNTh9HULw7MshYBzrqsHC",
  "key11": "5tzvGBp7YT1HfBw6Juno2CB4k2gXCg6CnosGMV91dA64XnhDQb2q3pcMyVmWC5cbNpzP1wTUuGqopV9cgizv2s2U",
  "key12": "4hg5G22vgTzfmFHFJimcHNEuNuow6D74KDDnnduuV8Bn9ck1SnG5G9TnZXLp5Pr6QWVckitfVeCD1yyYcFVcZkEg",
  "key13": "y2wbs5DaiYzPiBY87rFpWzjkUrjGECnGYzRgqqUrpprTVS2GZy7uWWyGaPim1Xoc9M99H3jwxpYKdupKMZGeZjm",
  "key14": "5ndYSNqWiaa6PLFDaMnBc3CN4Skwg8fxhb8wRsz2tDHwuokShd4BKxF1bDLyiaSLunCTfHr3Dp1Hf2WWJFHBZuyy",
  "key15": "LXtUqR1D88zSnWdrdLAWKnAdJHEmQdP5rbv4EiJ15pguSbs4KBLB8rWHcoSuo6A9ooGLH5wVzzULkdb5VqBTxn4",
  "key16": "Pv9x5BU118ehq7MKKLm7wYwjQreA4b5Ygt4NZDQZyUWUmiLjNQiveMBrsG9WYZxsWCV5R2WWGfsDj2oGRJT7cyu",
  "key17": "PU2TYrVBfKCBDYpukH6MKkYtZK1sDFzRywZ28PgzNiM38i5QxfD1JFRvD1SnZdPUAxvLv8DNRk2pT5YKY7wf7Vs",
  "key18": "oGPDFTYqsSSwTdSbBKMytxF3tUSCBtqzLEXFYrqkkhwx1b4muqtegaYPaSrPU12k8ZNrqZ4AVyqhGRBj5oydo2X",
  "key19": "31XMQM5kuyMbMToGrW3YmmTWvgphx5YBsrZiR3hrj4gr6qKEGmcEFUrw6zZKSPsszfMRieEmFSxGBN9cub1TCzio",
  "key20": "3xoaxKg2sKPBxrpqRdLhQEPMMUt9RGqLPAHitWArkCGL1ioaQMSfGWSvcKZxbMJtCevuJNzBXsAqL2P3Pkpkj4dx",
  "key21": "44q3rixZ2rFGzbthET2PXMeVVvR78V9Ca9k5KrwgRrnwohdfEBgMoqXzA8SjtjKAdgt8RF4ti8iwxToACWqAZatv",
  "key22": "5SK4X74WYo4G7ViJkrs5fnb7HN3jKxFRkrgPumGujfLqMgVex4q84mfnuyYk2q5CjiFm7FDbmgmVj51rkxFnAhsu",
  "key23": "os7gxR2881LVsvmkMfAoF7kyrjyPFpFj4TQk6dwPHAMKmiVRRLmohTeMifnVSoWcC54f1P1XgFTFhgeWie2i1HE",
  "key24": "2XEah6HjrSHwAfKZJvRGLrkR5AMxd5wMXCzsdbmoRaTBjMpVQZnLhCbS6A3R3X8XyASX1K5wnhxyNGM6oDp4hbs7",
  "key25": "J2FQUmHNCZuD8pTd1QZZxrSQzC7GLaCWsWfK4wqbfe1ZxgpVa2muzdrakwYJGbFKWB6AX2g9oDJdcaDs6ieKR5q",
  "key26": "55GjJRxJDuRPQYcWBnoVnpQBi7Ua4RRk7BZS8makS4HEHWa9yyqX49ZKWbvbnjhUv2HYYuv8RURs3nMT7qWKMxUx",
  "key27": "2YudGidN9hpLfYEoPX9bwdeoeBDCizF91qwzY4Tx6UZ2AtGDb919UPNj1wCJwXTLAdYfwzRHYXFhwK36VMJvFTUy",
  "key28": "2mW9vmRokyfXfttmVZXnUuER3J5rDMX87qUkfYPseCkhWS2e2T1rPHf7mZ7atns2nyzVwSJRakn9LiQ2mUw6Zew3"
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
