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
    "63vyrNTvCXpEnfTHWCBgz4mpyovBVir75vTiNRHpJXhSENoKRk2ywgnfPpPf2ajB9yv4ahpXV4XJCAL8TKzg3Fiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVzc7vaFDBWLDyurkaLMaLDNEstSq2x7MdwKqad6XZ5a4G4QYRDMGmqLZqB5CAKwhyBGX9SookgrCitoWMo1Po2",
  "key1": "2xEKa2Zru9gcYmrAT6EQJ3eNbB5eb531kuPBNm7FjFKCrxU26NUuDY2v9ZQiojvitr3E1Cg85E81PXC18VVSYCWV",
  "key2": "65L5pAWbfML2XgA5e8ojJuAZxDRnSJ8dmV6ZSvdxdFpuPMhYYsedNvC9w4zpcmmy7MbZJsUz53XuCbPgFQcMU6Z8",
  "key3": "5q68Zz2r1YJqEFYSmAVCpqHvRjNmitKRtQ2GoaL9cfmrXUzZArf55Twpg3ggkTDa31eHN7HuNkqg5tRFuk5kXQzv",
  "key4": "59PR2pGzHSbZuyrR3wfbpNQnS7uV83TKDRYWUbcnDBov6sptmzakDJzHtiSAN5vsaMifB1fFobL3sCMagubRGmKt",
  "key5": "heWY3s7N9kuU8Ftjmw5SBFFnQLgJqSPZyfAZNL7WRpkn5UjbRmvcwZFtQPNsBAN6NEVpBuAraeCsPiPh3CHFjAq",
  "key6": "4tNsokExvgkBb1S9nuBAKqjLGcQZn3qAVvhSPmBArwZpmPr2e8e2sVvxnHCcu2nryo3ANuv45MxW5RXdTbcrHFNB",
  "key7": "5jP8Q7ZPkUujkJ7fHM1wWj4WLg4wbgxojZW7kkzxZ3KYUUdbFXknM2kXXep3XwXwXun8eq2Dji7J8rfDBaiHNk6a",
  "key8": "2hiefeppDBKo82ZCoy7jmHKfnUMRWqbaRtu7c3h3FHckU6HXaNAfQNdnJeMRAhBE82rXWkoZcFUn7coWb6pBQPRQ",
  "key9": "53M61F3uSCojLHGhgpUGroQQg9cMSbgwVz2rErKNH2VG2PRz6drrTQbEYQ4QBwQxvSeRGNFZ2fDF5J13qTDkfoJz",
  "key10": "5QHBQbNCPw1cdyrVbybX3gNSqqGec7NTCxkRjbKs171v3iDE89WSoQX8Ur6ZY8SRuvauVf8B22EwS6mtt2oDZxrj",
  "key11": "4FEWzTC17phF4pdmYCBdwrZgCCduLg6nScKAzUebyJo2UKCi8dkEjbx9SyJQzfe3EaskWrvoHPM2fTUNLQaDRNA",
  "key12": "47hqMsoSH3dyBz8cJvDwQFFFiHnJUroScauSezMwE8gGfpvVUY5BpdSmkinuZCBfZ7bd2a31dGbo5qZ5sKZ4UZh9",
  "key13": "5sv7xXqEQ97CfjHLMuuwdF3A9kYFbua9hAMX3L9nvTTbkU3xvUaK8bEAfEqnzzpHSvh9YzS4gEM2YHP4biRHLokq",
  "key14": "3mipzZThzF5oUKPF33rkQfAxEAX8Sva4BddiCQvfka1esktkaaFstAADnBGapwP1TMdLarQhjPUWszPqzCeTbctg",
  "key15": "WRMjHQaZqCfbXfg5Z8MKGDyTvVpitEz6Cv7JicEVzuR6xdJhqB7677Vjpog9kujfuDsVT3GeJs7uMxsemijusMG",
  "key16": "4QpAVd7s65g1schcn4NdUKUdXaHnDe6iFA6tAJUHHCM5waN4658c8Kb2fWshkq6ovrkQ6WLhN5KqVzFBLgYK7sPy",
  "key17": "3cA5pqKJTTFPxrhZbVqv72ENXKm5MHRje8Pp5GB7ccU1m9eq8YFdEN84HYGsYfHg76e9joJ8g8rgKzQsFsDe4tZz",
  "key18": "BUjT2TC2MF91qeDMaTR991twXaumiyYuPZpQjRodt2vAzfGxt66woo6f5XxeagtgAkNRR3tKqQnqc3VVrmYa6BT",
  "key19": "35TzyRu7ztTo2ZUHz6fXwe2R8Z73xLJnnFQqzAd1u4YVWiTgRWBEVD9TUr34EqtrUtWc8fzUFZomSd9Ge3kbSqon",
  "key20": "5f5qs1b2bS2dWfrr6Ppx4f6GnNngwKdRvnnWitKr1seF65PzeaWfBVaiuejsYmFy5pPVHTVQdenCV5GvdWsRLjam",
  "key21": "3RPZGAECyiyFmJncXp5EsGYnZL7b9Tg1qG6M7KZThBq1qQboHTbdkPQYJYGF9Q7d5ZQZL2vGcNppJoGXh6iiP2if",
  "key22": "37r8Kf5nMRMxzJ6E1D1LWqGJcbv2AKF9eXnC5YNAigidds8rsJZKgntxkyEr74dx1GijYYQ5YqNjWJKZbsePavFY",
  "key23": "2noGPg8T3Eve2te8BX6XvShGRg8BZEQ76tzrsrZJTRo8cPd8UoHDxdwQ3zuWJdjCnY6txjKSqsyB6CCXS14io4m3",
  "key24": "2CxPPpxDcgRYdGJSF7o6c9ZqBLU3r4A2B9TmUjJ7ZJaA6ZB3r1AKvyD4CnAD4FaAJicKKmYGkAMpEAHyHnN6C1bQ",
  "key25": "4GGZ3SXvz8tBUnjaSdAZoXABcTaJooQo5Jm4d6aZPhondoo6FAqPwbajRxajzxqaNxT1x14jEUaKJfpqSE4K6WMw",
  "key26": "4iYJJcYdWxr7KuAmbk9YQe24N6XT4mbsc9pU6bZnVMfPJLpMfDgrKggpLzYxEkYwkaAZdHnaqYF2CV8JBM8GPg8s"
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
