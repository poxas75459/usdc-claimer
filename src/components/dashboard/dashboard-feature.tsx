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
    "5ecaoEXTEXVxxVSFKZGhyGRNEFooRsLDZxxrd3dwSn7dbP8hhPw2jJQo7RggZyM9ZkjrzyeGBGwJdA5GqxG8zZMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6b4zEizeterJYLBDJh8mdmYGwQ4vWhSEPAb81AiAFBsMSjVK9kEJAXGU1vk7XmQtzd9iCqv8ShdeSfXeDYDSQUE",
  "key1": "4pAvprM4YY1TcpjadMjVSbq9pj5vpUNttxCVVXaoZBDm4DC5grz9QMo8TCDhUUDYPtA6ThprFqkfrAtnSagFHype",
  "key2": "22ELCaFCL6xzgzUEREvN2qWDhAt3Zjhppzjb48qd5Gj2d6acuc4Yi4RMxdJbuPXgSjDRmLKKvP6NKLEkfPHMkbY9",
  "key3": "3NuWT1Tm2modpJyq16on9MNP6az3fLx8HpjzxkDPwrH6RQ4GaEw4YdrahjxbcoYzYY8KJcVWHQcQNy4SX231Vrfw",
  "key4": "5ZBeH1umYzJeZoVXr7m9pXUoD36jKg9o6DfWJJF4gXs3uAdLGVUy979BvVTXJhByn2P8AjcaPeeDPLFQ8aGtW7He",
  "key5": "2C3X2sHA3PR1ywXTNXLXZYg5sqRoPjRf9rFni6Udsv35h1RkVA2tvPzA7LrndmBA1wAKrgC5N8SF5383woQoU1q1",
  "key6": "5zrXk9sLc9r1Z2N3g6UfosMRxn9guaTpJCcPTrWU6mJKw17wsPE2UhQnehMBcNbfQgvVhTuw6cy6zFh13MhpK6kT",
  "key7": "5caavxXY8ctTFMUnsSRFRCFmVXuN1q9conwegvUcqH9TTVCFC4CeGCLPzx5r9Rex9hqjtgMDCWFmS3RurEG7mrcg",
  "key8": "38Zxcx9xVhqm6iMTuA9qAvwLxcciZhynnDZEMvrs6tQVmPfj63CsKG1Amzywbf3uug4czd9LJSMgU37mL8KZh8bD",
  "key9": "2wjyimJxjBPMw8H9z1Z3SoWo7qAGfFtC26NfkLXNh1XPMyEa1jmh5AsqSabprNicr1nLVCxisJFESQiw53QUMPQr",
  "key10": "2uq5x2aMhtXZwwBBCJdrjZKyeAqaBTC1NDJzo2GdndmAQxpE7SUv7TKCsRwby8VWmbU2ymz17x9rzcS9P6hUf1a8",
  "key11": "4bHPz6fnra499gG616zKmkK9XAZSbXfPvdNCpYzHvG7nGUB27SosfZZHc5CspRyezPnFXvAr8temYRTeE6TBCB4u",
  "key12": "sxxitnmMsjVzzP6kLV889YchfZL3GYQX893RY3ThBPdZYhCkcCQVD4fanit8ZaJEjpNrAiSPgrftJBxUzwmzVYU",
  "key13": "SqbKu63F4DXNweiZNcRMUQAUgM8H1zZNvWFc9saP2ASjhJVJzb8uxdd3cgBepWrUA5Uq8Sw3mHtwWhbruJ5fVQj",
  "key14": "2gP6xfxU1Ns9gv7CxoGZPZbxXQFosad9p33c2a64LC7VTs1HAqYBHfx3a9E27XskTgLjczyB5oEyr8V8Vb1nwzZy",
  "key15": "3n3Dr7p5BHiYSCWyx9aghscm24fgZzMjiBwN7G6RpwsG7dZTzS9pCZNzLVSfTVjN1JboRUUwsVMFTfzQvSPGScL8",
  "key16": "3w4G2eqX2tY3jRghDKDVVtuK8ScVJQf3aZRMH81i1PLtGxcu8ExYUz2HFF19d3hC9P2kcrrKkJ2jeqv6eHQPcvfv",
  "key17": "4s2EBUJYkazN9zQtrrTSkgEqLDUKQ2WpbMFFPZXsa5sdrWnLKWBKGMnjiZADX4a2U1DxXNMu4PE3xb83QH9SfGGZ",
  "key18": "4BzPE13DRr4BRDwMRJuKebSMWetLEf6F9MbPU2codpfh8Y96uDiMSZeKNq5CezgHsUfVjS3juc4K3zBkpRpwQC1g",
  "key19": "3GW4Xhi4D7b12pg7haiuhR7S41nEJhjy9Hd1t93LxA24teDVQnRfPfE82dJ57Y89jqtJ2nnS1atWbYX8cGYyy7YP",
  "key20": "2MgQdnvQ8TLwz4yMcj4mtWcZoVF3apFvBDQ9JXtHNzskZk43QMmTB3H5zrNoB8MB4Rr9YnrDpGwSK649Km3boNrY",
  "key21": "bzb8cgRMMyariCBnwKFxdfpDKukJLaHJtfwUxYDaT5EuGLcpsVV5j6ahSpBMotADkUepDUVvdh5UmZNuAq9f7Mr",
  "key22": "4RtD5DsY8B8Rqt1dFfs7LSsg6aCUFf9z6ViXqsntGJuuMinYaZGcsMy5V26MjN3Vuowyy7ZBoWfBYdqi6aPDqQ6f",
  "key23": "4SePuRHQTFXNEeZj9reYoSZLygf257rcWDQLEFTdbYyNUFxzMoLNfJeR6eF95e26X8mHcNyp1mQKpWz1EUfoUcPc",
  "key24": "49Mox1RcMbEbWjVxRNhXuiQXUcGEiqWxqH8vRe18gWG2X8E5vz88GVGkLbPa4x74WviYmTFrteRTQXzMJLTNLuZ5",
  "key25": "64davtavRWDbrwgLiJ1xkqBLRCTzZSzgzhTF9st1rBTm6M6kXtiMZSkQ7HiKm2GnU2wcRSyVswyARYW2mESyXMk6",
  "key26": "4idpqiNySnp6ku9PyGrtvp7br3zjd8kPLJLbGp6X2YYgxpQtXCMJ2G8wAqJNB12HEfnUYbRiQ7En5Fki3EwNfbZ8"
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
