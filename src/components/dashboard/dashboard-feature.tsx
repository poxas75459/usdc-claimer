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
    "4jA9SiP19UqsJigMJNzAGrXwhTWMzMUg15QLBM9i6n6uQkX1SFPSUnc1UPG4FyjzDTXksPcF3TeYuxc2AduA5XNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWme8xAA2w6exzCjDpYcbjdmD5iT7VuRoULpCVMBXYx36WuoomoWTSphUa7YdNfmLtgYwWn47XBNF1v5uEU5fUL",
  "key1": "5AAtquFVvKLqkinA6f1nxwMVhaaf3WT4spmSDWoyxCWBCA2AtGR1gRqcugX7PHP3yCwdyus74YW75gWSsQ5fiWVW",
  "key2": "3DkDFteAMpKsAFMPXDqBN8Dt3Wwk4atVy6G3wLhSfsTTu14AQPxhbjtoB8Sci1TQJc7xY31G9AApEB7ko85W8edm",
  "key3": "4SGfSGXWFSPAzU7LQg6giVA4AmPu6ZhAoGj77Xu5KBnL9vEBpVFuMnPy8mbferjv62YYKXiru4BEhwzZQNeeYLC2",
  "key4": "2c5jnhLFQperMesfbgQK93ukLWG6zYSbfd7aCsqt7t9UGBEFKiMYBWUXvr4vVpAdYuJMzJz7vGgpdALHu4Jq8dm9",
  "key5": "38nddJJKuDfH8kXq1FzwCAuyh4H6tWAefCa1YrRtdbAowPsm13goMsFQRVHAFRDwHLwgcsb9tAggQ6fqMEipAq5j",
  "key6": "2mSA5fmJpQhM3RaVstzHJYffZp9a3hWazLccGXmQjtEigggMJ4677ETkPa1CA5ApD5eKW9BF6RQV3vJ1vuqGhLt1",
  "key7": "5N68biQ1UJwCYBBQaXtv3Fm3LQqPu3xjr7zyRVGHNSwHrp9f59UyQLhGdg68f1KMbcXA9J8rgok1BbJLM1WxppSy",
  "key8": "4aEmcHpUmaAnwSA4khJwNRy1j3NJjSmYNjM2wWdEv1HDJBoN3cPHYfDBvsFXeZhAFRSWehRfd4wZrYQ9i6Ze3mdU",
  "key9": "2jEgHASvpozbjobYGzWY447ieRjiUrksEyr9jZVRBta5KzzjUkvWZVqKht8Y2rdKrZvWBSQmQH3gPNUdTopY9DbQ",
  "key10": "3861a9zc8PWqGH967kUqFhoZiU9GLRpcoKXSrNsT7Gy9xPxps5C1139HqVJ8qjYMjToHA4Xp9YXcdmBydkgY7ZCb",
  "key11": "3odSruzHJBc1UsBfVdWgyWPWMzJX4318QD8t3m7f2PchJvs2azk9jHhnGvoq1pBpBDSrinXzZAFBD6d5VUisrJV6",
  "key12": "4KZEETkJ8MvAw6EM4BWBHpJ3Bu7PyFRKnZdiM3b9ysw9hpA9oVjzyQLEXiz4EK7bKP2MiZWTTDbq6X7z3hem57WJ",
  "key13": "5vfFoNf2KqGHDNS2LqYYVcKuTiumin1gvtTpisvQeXnn3vyeT8MtdZ6JjxtuZkrTEfStDtQ5NcTuNSzkdiFYDL57",
  "key14": "4U2cB45JXx4zsoYubpnhjh2qJoN8BTcVy11rcg7aVT8DkubLnuWxZBymZeHRNUskdbtR7VPTa6twJ4GW6qnEby1t",
  "key15": "4a7nbg2WiVXA2hipq3xzyyicqNEBiTZ2rbYAKJWwJ2qBrp4p9y6fVHvbafAXHRZRrBR4ydsRQZwaJHP4FV4MNikR",
  "key16": "3ZRDnFSKYG412YJCkUosxThBApnbf6e499Ukz9oUKJBXYDPfMgwwXGNYAgoWh63JQCESrBpG5w9f4Kq5sBz7LmZz",
  "key17": "3m1ZjieAtbQVKpSRL77ZBKuWuxjUJtkRggtU6JjgRdvFx3WHaupmCYcNhdjxVvv2mQijbzJSu7UCgBbwvtcKB8ZV",
  "key18": "5p8mT7ccc45XvhCjdsetzsB6KqoeUq3S6EH3L91v5JihyCmbXd6VfgT1XAUJRcEiHUWJotiCotm7BigoA4gMw9YE",
  "key19": "2ZD5eTvYBRD6hodih7Z2RcuEuP4mR4P5bEMoxGZNJBADDPodcCxertMJ4wwzKMwf4yjaq4CJXrYAVRSd4jKZs5bC",
  "key20": "3bszd85vDd8dEzSqp4LQrc87XzPE7jakUD8vecnviMnBcUp7YbUh7C6YCRhVZWLsggGUdHvbd8nQWxXkQLYbjcwc",
  "key21": "21AM7ZyUbBEZBiHTwuPEZEfSjD7GGYtzLXzbqqXpXEm2VVHfCnpFc6Hz1J2hW6mahm1aNyMYeaYQ5M34TPe6tvWB",
  "key22": "5bqzRMBPR8kLDT6anTyiCYMgveV2zEMrCoYZ5yq9cr4FGnAunq8izgjbMyDbnWePejufGGc2MvSMN8n9Zgv7g73x",
  "key23": "3iN3KNvMnrWHMFECYCdFqt7JJuKyqLNyJ1FEkpnru2v1YHNPZE5rGpVyGqjL6Bq47iCDtRw8HVkffe4ydoz1bQZi",
  "key24": "3ZBqMv54pYE4yjVqtxWE6VgqyHj7yGWoqCQDQ2zMB58JBQw1cJuZXhwLD4cVY2ojay6r7arAoJbzU4ZJUUJtxPHd",
  "key25": "5x5A6BrxNSWNqrQ8pMFUgBSHAz3JqLEjSCaFeB6ravJ3kSnwiR3RobTWYjWcD6KNa72HdPQiVXn1jfYKpDrF8AKd",
  "key26": "3ry16V7pc83EiUgYKb159SbNxqHb3TLLthY1cZm9B85LaFgmJ5ZRnpU4uZoktGVRgjkXkRGbGS2449K9X3Va8yWz",
  "key27": "4pmdEbVYTN3JbKjMn1zLNw6zTbW9YnJfUD2mF9aRKdzwd6tbuvtCbAtns7r7pQtBmWs5CN4Uwufud3M3HQi4PMkP"
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
