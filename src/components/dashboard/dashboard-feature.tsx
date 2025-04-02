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
    "2fkjkTu9HR4VBax6GW3EGs22fs21C8vdCGPzEVyNd6HZsQcRhkNfcNk4rgVgGWSR8j1sDrQEspe5gP1edziosxM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cMFhHfP3dY8MQGpeTnKJeA4qiSsfAStSAEdxqpzbw7yS3SDoydW9igYrjat6daRy4dHd48mRyAUpHUMsTiP8X4J",
  "key1": "46Zf2JDP5bUzccA6atDeNfUCmAJxTCdEFss98Y2tLYyDsqW5L9dcnngRSEkXr3XneuWzc5yMtNoqEtfCRJ62phRx",
  "key2": "27jZ8FUbpNfug6PbN6wDZSL2ita7bWcH1LP7tRm6keCzpBwsRkP5k6j5hgyHdSyL3U4fYXu4joZKAPhTmGNjD4n7",
  "key3": "5m1UC5bsQGVFz3qWdFL19npBkkWUEaozjwGJwkKvKsToY8dfknwYTreJzzBZUiPb5ZcaXByESrRiz2qCRcpmbjeX",
  "key4": "4gXfNJPVKAeYkFwoogwvvhivuqMftzwRMJoMRm2FPw6Xb4fNPcx2d6MJCoCrQSkFHndZjyGeqxMcWZWxa3dhmNYH",
  "key5": "3W5vEYVZfrVdkxqorvBEN7jWYT8borX2oVtDJzdkt687AyGrduFyLFKgfD7F3QhF2ZwUXiscGbp4HAv2HNyDGU96",
  "key6": "3WWrVbsn7uZCPvcw2auv9EGKX4LBj7LPPDbhYk1dHQom7mReVpCGeFCdoNetiphQsWfqRTQP2nYjscHbfU2ADTxu",
  "key7": "4SVgr6dfY2p5RrTbAkH6KfEpYYgHatMRwwiQUbTJU3uoSvv8wonjaUgLHDTXYb8r5VxUTS42XvrsvC2RcEjefEvs",
  "key8": "3SiZn4MRXxXBZDS2nGcUyPKnEgvRnxLxzzfUhvVm4z77HBUbMkZKwEqVKNHgAdxvfWCU2noKxwpbZxXB5ipnxNF1",
  "key9": "5MQqqXeMrGf4NrTpcQCAYC6LjZ6KMDNBs53i3LgFFf1fC9X2H6BZ7Qgimj9g5iZr7gn95ypE29y7rBWqhUSZK4du",
  "key10": "4ZAqR9Q8KA1m54aYz9sKbArN4NnK6Dvh65MSPU77Wg3xBGiBDoXAemAUMA6zSH5DELac93FanUAuQX8gj5hkmFYW",
  "key11": "2mp9TJ4ztmgw4hqxgvqCogKJRqkEWmBoycsVPW85JudA2YAqjR32nMZBQ44V33qb8wLcajY8BtxAnPGhm6e7Eb3F",
  "key12": "5UdsKDM9tnciYmhbxYRbPA3amJVTL5oXPCsX5hANteAVBVdQL6vU8uzrXvwBpbWSn1kKk5S5DVUgMPUJCPCodC3k",
  "key13": "4TzmKdGq1gcy3jbmvCjamZsRDWxh2a7Y7GaqctWK5WkMJnrrJs7fVbnfRuQofb3Laq3xUCyjcipEcgHExmaxqEgt",
  "key14": "GMHrt8tCRQ2E9SNXZyeCw9ACxE86rNXuvBxJfPPh3tjnNiWXjHCnpeT1FnUcpEvwP61kZ6V7DWBdnoRpmjcYXMB",
  "key15": "3FfdNjU3v3wtzcxpZ7X2cHGrm4fDFMnLnyPx36m2nTMTZqcUXQqjacXp45LzWVjCp5guH9QjMCQGhsATSc8RzfY8",
  "key16": "3qSLVkRirEHLGshnV2ZVRNxkiHxxe4nQJvgLh92HKabm9iBfCtBFVQ9qEZ9rMru1vxZ7GFtUGsds7dod3c49psSh",
  "key17": "2672GD8SKEoC6M6BtqNHdimVod9arBRvSNLecbpVFfdZg92faHZ5GJDFFnTHJY8xjYB9C8QNCCEf86zBL7ZcE6tn",
  "key18": "2iBwnEFTszrK6zbCxxy2EKezW7rRYTMMZEMB8evEi26K8L5gggYtBGK1AuWHiZe1Sofzn6xjJmhZSzG6oayfgBYH",
  "key19": "25k5qfKQhhiZcGDKGdg8pEv62jNbR6KHnjVRZjoxXrUvDPMBxvMV2eBGDnbHboCGjokswRG1kTNFQidNjXGqYww5",
  "key20": "3n8JY47ded4LxA4vaCGQX7PEEjCL8xxqSSn5EboQxiwjhMMyEYKMZT5H6LjJZ3UUGbpTmny3ug8ebD4bdH9fBRXm",
  "key21": "5EuzmimS6hLXQb8JkDiVtZJmzc9BfUe3e7J3Q6swmNyi5LTMa9qhySbUDxrXNg4HJhPymsevX4UbxfrchatHo6fo",
  "key22": "4dmZfh6VMkwsCBEEKiscNLCSUuEXAfWWvTqFnacgsSsjCzysAwFeqRxqEqmRdfaMNtWAonXhDq7juqp7kVCEfPT",
  "key23": "48WP3omWWW9uax8rijkGu9bdhBGBaou9Zk8oEy1xyoT8KUS9nQ24244MXRYYFWoTVDJK2YHFkTS6iB8aZfpMN7fX",
  "key24": "VJvBvcZpZbyGCoxpvg1sW5Uk4aszxTiqziNb4KuCCfnLJtKNN4z3ZDrQcKBcWzzGFH7Q82LGymdySdCgfmd3acY",
  "key25": "32Fuoe7XVmZqStQAz8pGYABnyHornGPhwy6xSrGXsvj3kTKXRZLiEZjUH3uRCbj6RcUp6jNVURZwTAzNQRzGcPgo",
  "key26": "5RBRmGLx7HCNMvUDEZg7MJ4WpuvgLKYYuxjFK9emS4Vnr8W6TB6hAvHcA6K6F8NEHP6Vn5egZrS2bXhhExHBQuKA",
  "key27": "2kD4QYNLkDLEGnPQoeNdXGz7oXVnDBUwdrwUq662qz3m8EcBAHREp3KDnHTtNvvTFmLmtWEchW4Mvt8HnGzrVwep",
  "key28": "5i5nay9zWsLyCaaGxkWRFvo4LykMV13JBaMSyFMWjR36KiHfD5Wr3VRTSGDxHeLKKMQjUsAr6HDVafyzF9frMwcR"
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
