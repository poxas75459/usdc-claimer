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
    "2uxU3qUJ21VpGcp9VDby2jqRiXXQby2cCwjmTHRVX8L2UMfF84T1ZbDUQU31b2ryoSvMYtSCuurKuCGm7XGgV34j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxXYhy2U7JWf4WVjB2TyZh9v2FLQsbUok3PVHU1MRiEFTLjUvqHLphd97LrV3nK4VW41Qa5GAondf69KdgzRnRQ",
  "key1": "TJKcF1cPVrijzAfpxQa27WT3gWGeZcxPss3A5nhs2mmt1nMi4PAAvLxcn4kwVfvohxGYXkz8LRoT8cPhwQqci7v",
  "key2": "429ePE8yaQ5iiwMDwRcdqZYRRaWhmkNCiUZuuuo3i8r1K2DQsyRQYAQ1pfpViLF8M7SB1oLu2mCYTA5inwkk5c5t",
  "key3": "4oWaQ2txmi7RBzo4bGj8yFfmboqqzAC1XM8ad9ZHcfDzrHqMzh9JKh4SSZWyNMzyqe9VrVWTwA9xuykqH1mP4LAV",
  "key4": "55UM1KCa3b4o7qRAkZhQxsN6dFvBdT9dxin6rGLU5taJFctRpeeR7cubFs587T9Zj7Kh3Xi5PBJ8ZHtXJr2Ztggv",
  "key5": "3uVGJQ6gxADRATFtDyNT7zjPYjLWzzARqKXtkDdWympmZUcJwLPMCgfniXKHJvxyz2qX8MLWSYs8QxVroVvhFvrX",
  "key6": "2u2KKXm6XcP28cW7XVCPP28g7uRmXwYWKxPFNd6VcazrzimSH9cxxiG4hYdtqP66Mn3DRdBooS89chBiMs4BReco",
  "key7": "26zueMS4wxRFK6bXkHK5vS9cakTH6Y68mw16EN2evvyVURPCYLwUz7YwyBYQY9ratLmmSa6CLAZV8zzXKebfUsM2",
  "key8": "4eHKzQ7JpUMJ5NL719K6u4kuskhqFquPmLHiQiCFV1PjJjbDHbr3e4KPU5FJrK9pvgsuZAF2DoVsZ8917bdMYth1",
  "key9": "5Zybg4yGCmUriZVuuKLX3FcdRn2Z1vtvwixTCSusgHNkHYRAiovAhWN8jWeLX4PmasqSPgWt993n91AykXeoohEZ",
  "key10": "2Jp8Y76owrNVKbA3PLNR3Ns9gSMcCYz3KLEjb4xp9NU5KrFTiojfxhC8in2hgwEU5zbvbUN7d1oQiZz8xKE5N1m6",
  "key11": "5J9o77ohfLat6zxB3Y9x787FnYnaerGXyRw9o9zy5sUGGrAUQGvSqhN1mJhs2HtSMA8xcMfjJxMg7GZqpJ7Bcqr",
  "key12": "5mpzpDe8vNUFvWX5eHEvXKRcv5p7GcBHuUQM3DQwn2QdgEvh2x2KG6xDbhigZVbC7ZuT8VQrhSwhH2umMKhQJdcR",
  "key13": "25t8EaDePxYBDKhuifDMfQYPxuucwyCt4eb6uSqUgKzSKsTXEdP9CYFQDx92x1j5ag2gngr5B6foL1SDPJYdUX25",
  "key14": "5DkNzaFu2pa9PTKw4RXwo3WYHGCtsLcqcJmur2HXLdwPxoscBjSexMTknqoSPrdGAsxqE7bxwHr6Dd4NAtngrmth",
  "key15": "2UhZSLXGSneo1wpstqcvwc8XkGn1mJhS8Xd8z7MJiEELH6kvETPCfKoqZKjvoLYyDSxa3BD5uHXQNzYKZwDJfQfB",
  "key16": "2LhwonUokKFFvxXgAzT73717LrwazEjpko9YWjJz8Sb5TsbwcQYLXNSH1vhqJYwAFNRFSWDHTFhEFJB3f6zeW6nf",
  "key17": "45hbpfxLUSEuJEyRChH5B8NMca1HPRkmDXjvj2qyGK7MYkihSqmdBmmBmAZMULj8gxL6XNCD6fFFrb2ThUFTtqEk",
  "key18": "4dGWQqdsEfMYc8dnQLzrSZASNYwd9TTMMQQfMe8aqGhFEpQcmrY9Sju88KRwhh512SSzuC4qUtC1SA6DsZK9wwrS",
  "key19": "5husGEnEv9gqDyDSMDk9zrvE9Puogw9PgtNQ8RgMnCnYWKpnq9ThH3uTa63RNx67zREXQm6cQzxw8A3iMHypixdB",
  "key20": "WKsQbQd389huV4BRCxMQnP9mJKPdJTHZKmFqGY9dSo4QtKDxWrzRTCNoTRam8xi5WPecDsd9bDBj8NDDo7RbysD",
  "key21": "4hMr4FPCPc5u56GvfJTDcGCfq22xjoUuTfrhg2otJJrfwmwoECQ4eMm6ASaKWGgiVUw73qS4dUCdf35KAW1mwohU",
  "key22": "5VsBPmeVkRbbXAiPjrf4BU4zeV8kCQx2aUZLsbaaNe7t2LYLNHfuVEH3zkxhaGHyRFsdLRDC6KdFfg5brXuMs1gk",
  "key23": "5CLxcr9PEDR3HqXgGnDNcBSiKzzNkHmtZs7KNdE94HCsxF1ku79mt5qP12BUhxar9AfYiHtRXdfjhPpqN8dsktqy",
  "key24": "5chZDnj4e97UxWEPMfzWQy2t719xtsRjbXcyPHKqqmj6it7DarNpU1w62t4L5Bs33ZCYKffNmngQth6Ar5vXJEhk",
  "key25": "Eu9mjmajzfhEs516Y2xdXiz65T7q7E5d12AnsgLr4You6E5nZEkCVkDRyyHih4UrG5mvFcZPWZpdEUHLZa4ujN5"
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
