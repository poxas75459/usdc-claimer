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
    "5rxbiudDwK8JKvRQtEFrv2UqfdNURw2bJM5uA3QUgdN5TdQk9MbzMQN4FpWYVTAqsbKGwKXk663fDEfTcTs7oQrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7NU4v76TGMnfh2JnnXBLsqJMwvmGu4ehoo86jYp1Kwn6BdV3pue8kVEeZ3ZnFkUvAK2qH8hQucALxuWvLbHXba",
  "key1": "Hw2rJMkr8XcJPBXkSFzp6F5ZoeUxZ8amGQB5kRje4QSxPhFdn9orJEUuvGzP3b4z6yTe8v3d43pVf82iovBPiw4",
  "key2": "5oJAsMSdsLaGmxKNY3HaAtgibb9sEGVggR56DvDzqDqdZfhrd5MpWWUDW6MRqpZ1a4K3JAoXfsAsuLeGF482Emu8",
  "key3": "6112co2WtVvEt2dubmpkb19DDLjvazyJnV16xdhpYer6M9cMea4wLaamLV5o3aE5R1nK2hRBP7nU2WVxySDG4paH",
  "key4": "5M4o5hyV86PpPj4kozcEez2dsAfazxxpg65w7cxTSTAw82thHWqnio11YEd6MR8F28a8Lx5oxBit3RrLGVJBBYJJ",
  "key5": "2Zenccx77sg22wHvTyM4C9KG5Jz6Nzxcs6Z2wfqHNocUVDVzUtiWEmkUvjnZrPCRwhTQuZSTxjg9xJBncy6iFuzU",
  "key6": "4j7jnSXRxSGCwBABYnG9EzBwRXkYt8marYzYkKDqyofDf9RAn79M4trCB12C7DH5Lfe8AMXndhWVwm5QnQNCaDCF",
  "key7": "4HLRNW6JiH8h5yczKKS1jcY4LL1iWeH6TDkPKnaeTbskusLDfN5V6NUJcDtRTiF6NHqTxoCbnSs9E5evEnfUiNpn",
  "key8": "55eWXVGpyrnY2vDvBt97f1VkQUXPbDD2Pczm8ZCHWo23LpyyDTH1xGrrAi55ajh3X3yS5GTru7SJ2s5bKTWrCJhm",
  "key9": "3G4veYTuHwtTm9Gb9AUR1ATRMEAQrWy2qgF7HubFMYmhcRJgooPd3h613vsBhhabeDYr7n2mk2YbUrJ68UEiL7cP",
  "key10": "3tjWGUJkgBMsoVDzqNsdgKgsJsaYgV3edYynLmDDMtU9FDw3euErgSZcXqWmiLPxjPA2NBtCEkDDP9zj3iN3uqzs",
  "key11": "3S173CPLx2Xvt4iCSiH7F95MYZ1FMyAa7FyUu4HHp8UYXvWYqgbriE5n6XZ5eDb5ssDgtNTYLaYVZ89RGWJPunQp",
  "key12": "5Jpv1N8zqhJqvBGoVPkj4v1DcA97V3Eh2sjyJgL1PgJqqdJDZTA7MBqtCdFRZS95GZCtLaNVVArE56S5hBr1mYhB",
  "key13": "3xiLxnGPM61etRQJzHjfT31yiizucbB2aBRPj5dC54fYzopzWwVQvDpfqjsFJHxRLgabifZrAKV9YtPwK3fjVmCT",
  "key14": "JqZUkSmdhCCDuXQbeM7XGZ17QiSj6fP4fHrribssDWGkSgGn6MZohSh1Ws45dyFB1FpVpDx6HpgPUvzeBDPG3DJ",
  "key15": "45fbqjRADMBXakBF3PM9u4CEqs2yiDRfx48Pkurs6DoMDSAacRp6qeHDjinoxLnfnXbm6nCPyQMqpth6J54bQUBc",
  "key16": "3XsQodHqyTiJsDt4GJJLHGzzuwBK9e73y1foMh3o4akdxXJWBBAKFDa4ELzsnhRSiuo2X1WPqRoejNQyGzvuG9vV",
  "key17": "2rTa297mMSTLvtCcMaFVawDV6HwaD8FfpjtU9Hx4xMJQnmJ7GbRnsNqHXssrGC2zcPvxT9P3HNb7E4orxYCkZUFa",
  "key18": "51mEqaSisPMSWBpSdyDHRDg7bP4tJjxwMbvrhw8PGdg3t22qHyVRUjvxiRZiRPkRonnjHb71uZSpUQxhQfPJE9rn",
  "key19": "3YyXR7Rh983GjivoFspS7VM1jJ5Ye7u7ZtzoQ4LjsxQsZuKxgtzdHKq6ozpu1q7CLhXprY5N9qhVkcvJNejkgnv5",
  "key20": "5Ddgx7XWvFy4AAHrnbE3pMmwH6nvRVETypBBPcV46tPD5BAeBfy9ZBQmbF8x3g8Srj2FuuQ8Wd5YaiANad2TnNhG",
  "key21": "3wTQZuVZvFFUGvnfVqLhy9kewZhxBgVu82GRmfDZ3pfi4jYoS8mTKZL6FRqyMiyznG7f6u5p2KqnoyxZLAQfosSq",
  "key22": "raAJkZ3jwtPDgxrtpYf5mTvTd1NmLhTtcdgKppKRLGkf66g58N6xRFuX5EbFKeSMG1xKQ9rBhzmf6TgKP6uWVWH",
  "key23": "qh6tNNtMEc6CBNitrK3x45UBM9XwAuwchJQ6NB7ETBdaNnNeB2jvG5Jscfh3oN8pLe2jacKpdLvFACgFVCKcGbY",
  "key24": "DQvgDb17nmAnRKEKMjSPmWhuPAxotEnUoKGmGJEtEhP2rQegtBuaWJtWB45dX5zQpCQE8YtoRsBzji5hL4y9MaG",
  "key25": "pjob9W4P9pjXFdUG6uG2GL6cPpumE7g28tcaMnnMXaxkVxbLSU3HE5GgtmXcDcYUQhwruB3Rb8eh9Qx5bG1vHxY",
  "key26": "4my7vCzeDMiQzRZ1y4vHBH39BcJ8J63iV6mCccYJPkW1hwamxqv7xaCmMpSYCg4aPYv2Hqop7TdoG4RyzMVqgKs9",
  "key27": "315wP2xdWKqHfoGfLxbAN4v7hTLeE3X92Jr8eEPXSZyuCRCp6Jos5ntDFRfVdrCQV5cNeEk12EAZufttrNL1kHjo",
  "key28": "5aAv8U7crhUnVHQPmQYuzJqc3QMrQsjwuqX3CcskziWa9FT67gJ4h29CVLwCTDgB7bgnLmZqZKq7cuQSPkpvB4qz",
  "key29": "5voexTJRYrL2MHKreUyKEjqZ25ypswUWjayymJ71u7ZSwtpUtRP7Q14kUpGPGUcdyhmA7rikT8YxA1LFKpfaA54Y",
  "key30": "5jJUzxCeJXCqMDtCggDoDcdTQPcLoXVU5BumjuLHKniLJ9LEsMLmeDDYvU5pvfqFaJXGge6k5pEG5SL7PscwFZ3X",
  "key31": "1LWCfaC9cWh5JPYwC7xHmh8BE4GEbVmNRTysD7akKAbXQ255oN1KKghrh8rRwdBxgPkMeNfYuS7FNXSsvJNxYZZ",
  "key32": "bwNdefk53cpnnDWQaVC6wrCZcgQ4FPYGqXPGUqHhUSxpLKa2HYKhzHDQeSRPPUZBBCDdSDVjhfAKP3EwBEgdG3q",
  "key33": "5KHFeCcdcahoq69porKJxt8qbHGvnzFirzDCBArMXG2DmfCLbrzCH6ToHF5b8hpxuuGVgHk9KuLxAyAcn4eFcMN8"
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
