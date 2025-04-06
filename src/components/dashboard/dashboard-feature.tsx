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
    "3a3yVaniZpdiUmgdw78usQesB59ohcdxPhsLMY8xdy4hm9mhSDvD67vVW5DcionceS8vv4R88pBSbHht3g7LhAFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XjRazDcmA6UX6uy8RSeD8TfCHnxkSusZppLJwdzgW66kdMSVZ12efBXWpPVRUf2ELjaba7fTTTfswDQzqYDxMfM",
  "key1": "4axdSGuYiBYTai1htPvug5qGNKnieHnmKSxRp1z4TvRtd8P12qGBdUccYizT6PhE4KqrJFYGSdFPQS2bfpFgphmg",
  "key2": "5CnmBTYhgVv3NF5mKtNVgDbwrynC98ZkPnydEHex27Z7aJAX8KfaECbE8Li7wn18ZFA4GGQUkhDJtSRioHi6V22b",
  "key3": "5qynzYa8GBY6eU4KmZgJDEGScj6zEyKJ2WJqjyDp8gNaZeLwhutN28mCs2jbXDWRMQGNFCftXB7QkCEUPV99kroi",
  "key4": "3wfhSoCd5GtUXrrhAQNpqzK4VQp2fw8rrt3HZGZW2NScS63aDunEgKqZJVyeB6hmGsHc8Gj1YvrWsEcfA1Zg9LWQ",
  "key5": "5dPGvWJe7zwPyxA9MvzsyCzp8jxcNUmbE8YregxMPHBYdQxAqRZujaEcRjmKKa7CqLDtdmY5Rg7dPDQvYpzK51uw",
  "key6": "NgSiDenKjsFcUFBVkFzPXPpgCAU5E4nVz2MGMH65jejG1or4bGsuc2rYQeNjGpDhGXCiPS9Hzfb2UCHV7GmaftZ",
  "key7": "5UqPcjwuvkKWjwNpk1KKboBwzG2kcTWXqEa3bazvb4ieNo9CeZoSmYUaa7mfwSegdbnLttFufMMgcGGw1sukX58v",
  "key8": "5cpsY85sxgB97LJ2yJT9vJw57mSq7L3w5SgDZFsaYA4KaveFCBS4CMpZHAzY5vpnG6D6wmcUDWjFfzdcE656v4Wz",
  "key9": "5qE91mPCUJo7dZu9BkiLMqw9r2Lrv8WK6RVpvhfiwHeRyzwsZjqWbiAmyqSr9LUPWdUESps1a5q3agKH9P98RTY5",
  "key10": "Ra4gp5sp3k3HLoFRf7mkPBo73ksQBJqPPQSitHxxpnnypT5maK88bYgzbXEpJDet7QB2nRRsKu9YwFSkFMTUzTY",
  "key11": "353unTUaJhDx6QvFHTCYvHisbPAeNXc37XMGaWqzsALmkEkuE4wabkJ5RDrV1qg3oQR31uRskf3ceMYpzGpCdFez",
  "key12": "2xtdH1YojazPzmhh21RQ1cEKScXDMLGmfH3X6GT7EY3Nn8iew5wE6ioUbc9y8bjyiF4WHTf9f1QEGmDcNSZT1n57",
  "key13": "4sNGBfhD8pTckLTzxe9e81osx4k5vMtVtJn6yG6DupukuAukLQf9YFVN9To6AYLMUn8vsVBE15Bng5z9YKhtUE8i",
  "key14": "gNDH8htXRWC9kygnodEN1fLS91M82NTA1Fq99ng6aGnhqcog5rHmcUgDTHupMJL1V2dEwZ4NMRuYFBEX4yQ4SVi",
  "key15": "maibamQEK1HPcY3rxKnn239suYMLypTQnXWiEMKYtbAirL9YKqzWMGcbEbkm6VzJMqDyKderDhoR2CSRVYBCk2f",
  "key16": "51kVLiapenCmZcwyXfxkpmLxX3V3fYmyyzVAy5aPe7LawKsvx745goUhGpTyAxFBXmLLMpvau8J2NCdiMT4hrPnv",
  "key17": "4DWAnwdeJaAQxgocsFuJUeoDB5qyKN96FpZY2X5grCqZcpoATVeWiPoxQvfm4BzoTZvQFWyHZpPsQvkfS7Ldsm89",
  "key18": "io8fm2brdeGq9EWR45Ai4As5gQpgd5Z5n3nBTYyemXdthvHqcnA3tCz3St9dTuzf2JLhx1wiS5TF8XgfrE96sdz",
  "key19": "5VaYEDj7Xgp3hFZnUPV1S8rEBPVryEcPhUJCKDb8sFiz496vtMpahdAWSeaUNwTwLVvG9hJndT9WtCf65d9mTrDy",
  "key20": "3zaH7xsXamJU6NHLMjx6fHnMnvuGWDYk31yAoX1RjipQBh3CRSBExyTLm5ndZbxw9QFeGXty4MxSh98dMwZQka1r",
  "key21": "35FstzoPo3AcMDvAe9XZTYYxMWqJpuaF8WN1XcQ8pVkV2qbA3Ku8HBZ9hQz9K8V7bFcomoXMpZHDvimAv2L38bdu",
  "key22": "4mxiUVSrnDQC4nJ872YpCJdHyRyBhcUxHHDargR4xGX5p231PrBCUwaLfTBQNBacfY9LVGr4SrzR2XgNutLpwq1p",
  "key23": "5rtauML7VtFfqEoJrwvo9QDG1KFBZX8eM3L5r8kq9QmcbauvE9w6481JqVyK6wBp9nSeR74fidFDgSDdUx2aRS4P",
  "key24": "eD8441u1ZASwpVkeFumJzgzC1R4Hhfvngoj9PSjpAPkwjPXhqQBmMN6urBZ7oYV28CHfspSVWgsueKGSrdbykzf",
  "key25": "qy1dSgAc18XEAXt8MRbqwva9hZrcfEy55M51hHQCHGpA3TLmCCdaReaSfeVnJSh3eQxxvMYrKQFwFfDh6ZsExJZ"
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
