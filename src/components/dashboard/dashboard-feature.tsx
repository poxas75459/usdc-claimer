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
    "5ZoHp3kh7f4QxUY6EPhP76pP1R1wsvk7Uk4bocga8xdW3e5ZYdMiMpbis2QzUBG5taY67Z8yFLhPS4rM4sV2ggLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5NVqNmLdfz6EZBw1DgsXQuneQUgrvyPYsMup4CTzmzY3CKZG5UWy3FBtj1jC8SL9sGNyxgoawxESWnMsDUDUbL",
  "key1": "4Q9vTrhE7M7ef4xyyAqFfw4aJimSaJR8D5PhsNp5ey3mjaarH2C6G6H6cB7zESTPYdEbsb8ZxHrHyp2AtNok7emB",
  "key2": "4Mn16qrPqDKapbFv4HwjiTfRA7wbQqWScAj8jghoLL478uhgQ6kNtFb3sE8BJwNzb8h9fdEakHAhAcDkLxARZs5F",
  "key3": "3duFtAoURHvLKMXH7TmJF7mgapsuthyEPrNmHfBA9yTLttC9DkeM8euLwmDEjkNiyXX3XPRVBT81zwzatp8kxoT7",
  "key4": "4UhZPYVPfmP3DK5ePxpgY2PWb1pB1g5RjsX65dT5WFd9pAJLGHRDcJ2F5jrruUg9yx4YbxKjxtKjKQgnvXDK8WB6",
  "key5": "2bevc82nxfVJtSG7xd9gDXygGmKXiAx7Jj45BkHqyrCMoMAv4A4Wj3MLZ6PEA5v1QWJYypWaRKMGk3tvrhQaFFu6",
  "key6": "3X16PZtSQQHf1MirvgydjC2vGyfPHbYq5HKaxkx4FDZXdJjZecRWuvaeUqS4mTQXJXZPeLY5c9rzJ2Fr6wywbVE7",
  "key7": "2GBudGEQdjtoYynHPdvc7LiD5qdxsDzX7gLdyaDaNUD1dUM46F7AHiTSbAhgYQacPyb9NxHDJX4nnA7jzuUWzhPL",
  "key8": "58DdRdvbXgptno8d7WHL8wxwGLs6jKtpFDP5fX86Bym2fLHzQZGQ2XdJsNYZM1Sk3XNWhMUHvM8qjuBVc5JZ9Q1n",
  "key9": "bUqGsyv3kwYvqsWHkm345VLKC26pnsFzsFy6LA976QGQE8c4pm1UPjMnCVsUWMPf6xS3mjMWL5ebugSiKVwCpNt",
  "key10": "4uWgLefGqQFszT7NVE7ad8dQt9BeoZeSqocEirRDLJvbb6X5EVCpx1DWYYju1cAq8TkcggJeuZTDeyeofRrmzazN",
  "key11": "3ccDzxJ5KH9pQuaGBvFUuqPEKdSM5k8rZx1tmGfbZ3wYnZqDgMSE3URFr4NriaBtELWj2Fk6F7S2bB53CyFLdtJj",
  "key12": "prtyoNQozHr5joJWAi2Ru65R9Q1uVunufAsAnYt1j15kSuKZN4SpvkBwqpEQroy7VArgD1R4wV7XzFmLTFRLBcN",
  "key13": "2ozAJGFHvTJMBFxfT6CgwtuBXxRc3mcDJnif3YW8KMqeSbsYxumqzCm3YfB81kPUsk7paz2CRKUMvVQRFh1jWh2F",
  "key14": "2F3aNTb4BVE9ycMg6ibrnmxhXMqmfoDkEsC1ydEfmVuxGSrz8sssRwVhGmyeAYgrRfSdw8iCai3WT64snFnqbJ6e",
  "key15": "2LNfXqm1QUvH814ttr2hrQaMUZCzJiQRrgqarPP1HVfE5Hhmfz8uKunmRyuQtep7rLRkZXWRebjcQLWiD4PWJwb2",
  "key16": "3NJ9xhseysADV7LH5bVeRLzjxRFyJvfgijWQCnHZbkqLt4NhreewEtVwKGnnwoQaeTHj6Pbeh8DsJaTt74uzHJ35",
  "key17": "5Agjyo6rxivVrEszRgq1CRTTay3WVkWnyiF3jbJmB3Z2iof9oSxtdzzDT93eNzGVTq6rL5nJD6pmqNwptR8aMvM3",
  "key18": "3AKCxjH66V4G56y6WPMX36GC7pen4ZxDf2Gdu57NnkvPZor8Ycp3kUoY7zx4tSSvJzHfsB3jTM5F3mMJR1hcg3AC",
  "key19": "2vYYU88wYZWiqVvMPoxLnAqTd9V6wBVF7hY86T3sg2bBSeF9UsiY9GYFtDjTSKaZVNuG9thjRXRwFcFYZpix8BCp",
  "key20": "3dYNkuSbfezjfFxKAfsWKfSYMvj2RxVFsbJ3wHM8wV16D1iDktTuEaL1MapxUrPqSpSNLeQPMgBfWaBExrf4g3Pn",
  "key21": "2KZtxYfxMMXeK7ic2LsAA9cRStw5EATkGQHTaJUUc5mki5mpRguVxrabBYZwPXCXbAeytFcWLpKB5n98TvXAD7CR",
  "key22": "2jkZQQsXx3tQ45qB5o852xVBdZyLMpjTnzNn6JAfZWa6M6WnZjQ1KQFLMMfKpFfyTd3AmoBQF7m8fg2zxJLj7hpZ",
  "key23": "4Q8DQU85KbGV6TakiuWCLsvdWvApvLsHwzuV4Z5yyLG6BmCDCjiuZ8Qv5FfA5KBCYk1kwCEkLw5Cm87cefoDRUDV",
  "key24": "5XKYGDxEiyLfDmG3SFyRXzQ6dNTHfp2jT9fd4z9cadKQkFtUrV1XaDc23zWhiyZX8hkJZmDj1SWbUodmLT8xeChA",
  "key25": "3ciLUmeLpnyKXjahCggaKSToY33pHaEFrsfBhbR73SQ7yAqqLDkaEc4KvSKcK2ZYtbtTsMEKNn9rDNg7S4NASjsz",
  "key26": "5K8SypU9hB5qZjkWbHgkLUcPUNKDQ565TPLoACpPf2SvdqwyPjmaWionAypsLM7vVc31NL1RDP1uufH1uZQ1btbu",
  "key27": "1vv2bzn2usg4dBmqtwctD5AN2cJZRpm6EpfqJwoVg86SfJS6N6UXBeoTboaHtHfVjbYtAKKMudzvtN4CEcFv679",
  "key28": "3syBiD918J3xeSzRYJNGDyuFH7gVh95vfwYi7WGKk3BgLsFZPbRtxgfgFcccakPFPokYvsEJS49SZmPDi6U5zJEY"
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
