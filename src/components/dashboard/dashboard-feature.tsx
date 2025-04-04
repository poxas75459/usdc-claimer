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
    "4qtZd9sBGS6pE67QrNMbemyeVu7qBpbA5LfCysNGeFCGAiaW4mocjLYzoL3jVxSwsRMK4XkozTnNKUV2g1QSJjip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQnTAMmA35CjUAmppG75qvsx3F2wbVJ6HezfRf13TdR4oaomtzCRyNeJidRNT58EPXC3SgmGbX2E3SBAx9UnA3u",
  "key1": "35gBWKjqi3KtGQ2otry2digLnEzioyefkQ13Xchn2WAwLkTwQbaxTqJKxM9t9jPmj452e7ZKZG7SQiHam3iZxH9Q",
  "key2": "61PkewQXHtyVVddtGj14X52uzMwHLGFRjFYfpyPNewyw239rvvNeN6TeY5Fo1d28v2zQ2BZ85MXWZXq2osYFiA62",
  "key3": "GDFLJbAhDmy18q9jqS2D92X7kEed1t93baEbM1cfMDzNwL7FAhDrckZUSR9pPi9h5UGDdGbQQV5PFZyVUp1Gj7y",
  "key4": "Lj3y5qkrULuPc1Tk7jnBBSC1xPkZuE9rbhjk1mNFjZvJ8akv8tXkSZj9KYqgbp5D93fmQG284sBzfcRZTP52Do8",
  "key5": "4FkfC4DHWBpPpaswGLEWhYSEXCY63Hb43NbkhpVAikaWFWbv3gWuD6tgZ3E72KVJzSXo5uQmEoAW4iqkf69MPdjp",
  "key6": "4HungjuHRhe7LoCAkHbxUMkY74hCf24yvBhLTGrWHMB18naAF56Vc5WXDt4XRHiVTsZ7bd9XmyNCcjRHBauGpEey",
  "key7": "3e5CcVtJVpwcwmGPVWXc6xpto1zyFDMjS2ZtBYtWjdc2gBQhhsaoAzuNrYVSCSRbxMXuDc4CSHt5pcBmqpV1tLY1",
  "key8": "uMUn1SywWK6rBCxZLmnfhDuQaoCm8WfWYiJiRnTzGB9Jq6FFbYiHrSjBjvi9aAYAVq4Ma9HCzbHyPDTrcEyvvwd",
  "key9": "ewe4pRom7awX8Mh6NrRvY27mG8qTuKM8bjWKza8oBJTPZf8XUTMGQ32Kr4SBowsXK6F6UKea1EYR6oRHsAq2Xio",
  "key10": "279FoAPC9epK9sMV3draLWh5xJVB2J9EDgEceSzc2th5s3xSyDtQLFaCxYLbZC7auUybT6tPEAbkWqBqedXpqtfp",
  "key11": "5TEwKDhCGKmsNPyU9TSKFgY1T22wciU37c45PeFryVHYi4pm1Cj6H9YzDxUkp2Hef6ARnKr9pJ2WHWaQf3VnxTvu",
  "key12": "3QZ1PxpYAwJKyDW3xJLG46WDPNFZD8pxHSK7JKgCRbJNouTw5huXdX4kFNrz5Q9677ibxiXnFyhEvoEdavgDCLmq",
  "key13": "5GTCZTSiwxm4oDbqSKsvMNgXM8YMVNW37LuPB6j8dpDpbdwjr2Sy2rf2PysiiooQ6wBTBeWHMQhkppMvftaA6qnv",
  "key14": "2bq2cSAbzFjunKsqBSyiJBMXYZMhmWMuJaMzM7j8mVTjZkcNLdxkFocHo2XJjnTuspgWvUzDWpgyscRM5ttRvUwv",
  "key15": "4DAJLcekkGTV4hAcDaM4ydLnDtvBp1FMHeXakPN2dnPfLDCoiF5ZvWtrrihzTt8Cb6hxVX4mKpscox99BufiEuCG",
  "key16": "gJTVoXCmPtfyZT7R6EjbzyPzEM8MXXCejjaYUmWGBW78UZpYfgc1m7Qq38vhbwnR5iUcEqtaYepske1CEqk4nxW",
  "key17": "2o1eVyP1UqdpsVyedmzFVa4rqRHqbTuuqyh4xXR9W9wBYXwS6is6ktvymgw1W1XZEyAUcc1VtUCGgpeyX8ugD7dR",
  "key18": "4PKXRoru8fJZJt77FATxxewueVv7EcucKEVxwhMuaPiwgx3oWrfWsJ6KjPq6c65z4Ci3uMcZpTk5RmsquQMARaS",
  "key19": "FjMGZrfYvzagyXb2pF5Wj2aWSoiATNEcVMr7HLs2vznNQJ2Hw8aXZx9orudrhT15Xz5VvmxuomvET6LjitDWLvj",
  "key20": "RFomQ34XqysGX8td3MyQoRN9UtUF2JJyZpWYgdzoLvUTapCdYkn5oAoDJfcugvXed8kPEfpjUgQUD1tDNQXZ3oJ",
  "key21": "2CiQ3aqBmaKmXzVdRWJZmBS6jbvCTtggRM6gnWTibat36FxVBotXRLnfhDtUzrMFE1yo9u6UCjuuBYpkzE6bUFy3",
  "key22": "3e1JARhFkVEEVgAFBq6TrHHWGDpbHCzVj23oiqopkkFmjzVmtgRgiEDyzcWdMTg3ruQkPeaYFSdhoERNYPp7Bigd",
  "key23": "3qZagKmcoyvm9PBgtZtYdRwMuZFaqNMtJPqB5U9ZTJhA2CjJ3nwuxT56y8ZVghj8PhcpD8DwRu5L5pHAShHJyaMX",
  "key24": "qfrbdmfNXKZvZVR44MeqhhVFcKFTpVSHLbqy12SnUxtfEvm6fspF7sqSzWFqsaH5yYHJBTDTS4M3cvA4eLQyxdG",
  "key25": "TxRzPGBAe19uo2Q9e7zqsHeWuSVujqpVw9BTxktysWhy29Hwh9hcp9Uwh28gJyHpfhLBCJSNqLi3iUhuNY2f9Yz",
  "key26": "5qu6C9v1fb28guNGjhro37qCk3VCP6NBsgYvjZXN9qLiafvmEPdL8aiGijKJrAWgtnJBmebUmaKG6oJjnfmS1b7H",
  "key27": "2QNfx7d3xuyrBk2TFzDnmpeHcRPkEBKSARY8CC1x3N8z3CmJerBcwPnavxPog2H1Uv8wWCAS3RGg2THc3yRaBjnN",
  "key28": "5KLpWBB27Lx5LWcpcxwtf775Nde2MpsCKKpJG4sP65dNv4CmnTNwhf2rqJfXkptKPKdGpxmpZ9nBh4NZAvHULwCm",
  "key29": "2Kaddc91eUT6zAEzYsTwANRweDX9Da5mG13VdbEz5FBh6FvEmnpPGXpR1Xz5Bq2RrRdtj9Df7Tqq1BXf91Z4aFSE",
  "key30": "4vVBjXiHMcapgCJ3SSmXvefQzsUTziBo3gfPMdPjvkHwji4a1rfxXxetVDb3KiwkjTPehhS8L28mTZSbd1MWXvTA",
  "key31": "5TKz9rgerdnuH4NUG5ZZduDjzTVZex3hkUMjSS73UJqDqyxEgQUQQrhxtS2gvXkuDeuBeykvucESM6hBbmYTCaX1",
  "key32": "3PyBTn9cG6xjv2h5LgRuPcdQn8paRWmurU3KxP3VJRGoWnYcvhXq7h3LdjJf7njFZPbPFhAvE89M2W5oReyoub9t"
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
