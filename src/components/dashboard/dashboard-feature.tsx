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
    "2LQ9TEH3UQAoiHhArgeKoUhfMBHJXq7L27AXudRXRbgZQq5VxykdQepE47NA2Xy4ki29QZ5dXCMw8kNSox5Qz3QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2qT9AED2HAfNArAikwkanbkPBHa63N2cSERHeYckQqvqNeATnhqNyU4UdHE9Aht41h82kKWkXRrua9wksbv6Cq",
  "key1": "YMGncjqhCDZ8VaykWyvvP7iyje7JJ9hFrxy3fsjPa2vowXxVPv6qTgJcpd9yhaaUkCHxJBpVPXcfJeunWkzdmWQ",
  "key2": "3y3SL2MAemnk9r5pYupnfEoGeLHJfDiyBkpb9TBq5UJpUw5LCWoK4rPiVmFEE6gZhQTUKTpY16K6qZCzmtcfZAiP",
  "key3": "2z1HmybjEz6ZVf7eE5oiUTRsymZB4DyQUPTFiUWJqy7pC3CCshX25Th3wi97RP97aQbhehF4CQxy6sr5Vaguom72",
  "key4": "5wa4i89fe1qd2oczRzwQuMWGA3ycrwuEiXApst5m1kqCcScLo2yzgBzUxkN73ddiuEeQLPhFXdxE7MsYFnEkij42",
  "key5": "5pFSFv3kdh5Vj81qT9VA2oXSSBmh1ZYDqxLqj2whqhxJn3gwKotua1Nxd5xUj4RdJpmHtxQ6tfBScShJFsry2X6X",
  "key6": "G55yMsQWNLDPshw7RKK8ZaRidagt7ShPdPiGzvNiDLdZcvuMyjPesz7HkqwVS1myn1dkBj9kvrn8c31d122W45X",
  "key7": "48gH4USjEe3RmM83h3if7GHRU8mf4gKRPAg85EiD25QPX5Dw3dLd6jjWGyiEVBTZhnNanjeF5mkxUdvfpjrzzcpC",
  "key8": "vBGNXCZQ5pGFnyK35MLxZh7hBg5X6YRh1BsdFtLPwkoCza2yaDbt3NeRykDdhF8BgByDngCLfNgsHcDwYrKqD2m",
  "key9": "474BU1pDpY7tqrigAT7ezvnQJqrB5VMW7uq9CcyG7nhiyjQLvWDxNXcHX2gDbd8YpCE8c3tCrehYNScdLTkr9grH",
  "key10": "suoEv8jDx2CoJFuLAY9B2xuMW8iSXj3ShnzdBmDKfzh5Li1PRQDjfZPyRbgWAdSmVtcmckz4U281eUXr8aqnFEy",
  "key11": "3eU6i1qFgySju2DnKJH7hpB1NvP5acH5bJSqciESBon5GdifaJPfUhU7pW4GuEpugcMF1YsMbYm343Muo57P7oVB",
  "key12": "4x3b1mf4NxEsTUnPaADhjDDxbtNvzQa8C56JpdbS7Ddxbm6UA9ABY9buikCKJDDWf4fnrmaAmHHvX7dcAFVxRPR9",
  "key13": "4cjDcypT4w4buvEEHJsZYxrYJUUQNRtTbm9kR5utmwtSgAjoU8K3SBJPee61MCbqr8rXbZmNW1AKzFCda3H6up5n",
  "key14": "3XPQW1FZycUvJVjgMCbQ9BuspSixgDxPrgHewNigE3HVH955WcC7mXFmKaQ3CgkFJxdbuYKoW1vRg7ei6YCTB1Um",
  "key15": "C4nsxzC8XcMtWR2DA3ECwvEYvupeik8QDVzy46PSw1rJNBZRc9LKRSFPwYA66QYMiHhQBxaZgqhSwKFKmubY4cJ",
  "key16": "4rXN6xyQ3GnBNX7NpyAe2NdY8cBAtCNkRUPZwNMrQckhj8yoUN6i4Sba2qKiPEYkXze8t2MXdpXVuRxiguVyejL1",
  "key17": "4qAikyatGoLn7Gpwf7krJUDkvfGpvdkWhMWtWENGbNKqybpJLdBngVi1gjqJCNLe3jS8HUTxjtg77XUcM9X3gCya",
  "key18": "4Bi9HVXHweN7JRMySFjniqXA2AqV4hmWePapJv2aZVu5tHFS5PbxzvnjXQPfaR5TEefgQYz2FnH8zjte3xbNCmFy",
  "key19": "24zCFajswURUGHAGxKWnixyikxFacHU52PFVXh1PPmRw9J3SgwwVuuBKQWAeFGhbnyooYuGKuZ4my5Fj2HYddsPi",
  "key20": "3X1gyQat6kpxFDRw4UEnEcsgVFPexBFBHC1xJm7ayTFKft54J9FXJCmS3ouzsj25eXjZTYwJutfLDeGKFrZoFKEp",
  "key21": "hbM3PbHxxWPG6AFWUaxxYJfygu4F82DZSKh6JAyovGFVyL3n2cFTFzmRFqq5kiprkFECqAV2sadTPo2uV6KZuTy",
  "key22": "3RjBRm5tEvwig9a1uHWYLzPqUho8GWBXt9d9xt1mguYxh3bVbyEtrKEG5vQnGKFarroSDSSHU8CV84SVqUsqq3P5",
  "key23": "4auFWFZXb3eabTywa2R4FkAjS82VUg2aUMXrEMpWA1spwEWJxF56bKPhHh2PYmHf3K3RS5D165WsBTtW4jYnCwMB",
  "key24": "2oLHoAuNAie83BTNEjneNj6abUZaL57K6dGSzmfe5hx36W6oY5SguQvmMZvKfsGateMfzyyBU4hKMLGm4pY4UPpW",
  "key25": "568HkR3xMBpPKek3LsWyo45FJf1exEF2pJLQZCadPPMi4qmTwzomkB1MqvS9bP82b4V7zwe5rTyP8qv1mTtkJAMi",
  "key26": "2REPvyfuEECTQ2aTQQXGURW5dHtiY8GgoSw43izeWYHSuu55rm385t7nuCjkgP9CzxawVWXboqkdwxXk4hUyxE4c",
  "key27": "4sksRZjKmZWvs8SnAMrS6UK7QZx3y187D6refB7btP3ghhuRGKADSsG1P66N6P4aefGk3P2NpNJ6Zax6ucTQuE5Q",
  "key28": "5orMikuT4PBJyZcGZVu14z3st91poDrzcnzNsnH1Ac6rP2D8kDoAqB7WVBWbnqFy1TWBrDn5bqPKiGKNM7mxmkCH",
  "key29": "59JnU3cWkssVKipqeTYJzPYSJKUukVd86HBTJafe5KasLALYcrVGmYiTNC6qufGF8mEmxXjbTK9G73GAwz7VtbQW",
  "key30": "354QRgWjz9tZuyuXKePUkFk7ckpHttrVq1prXzPKptrpNGKCXbAd7BViRRCqZzdpkem9ntybVvYtib6Kzesepftf"
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
