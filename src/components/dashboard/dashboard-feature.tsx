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
    "s8m7j8Wdpjybutpns3JRm4dJzKg2k3wTiJBw3ENbPuz8HsgdzF5cZ4y8xtvCCfUxQvZDGjgBCoZvPQP4iKa2YsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uPoJRcDnxAHjeDvJ4fiXwqA3gRVgwuNVLTJKrp2vbakFdE4oa6gXpomXjhkpsq75qYJ3g2QERQmCYavCbHFbm4t",
  "key1": "59SHFnjRdCbrYxhHzpSthrwKU7KwLoRzDELQ3s9XC9admWUSfcJu6iMWVYJcBLioFnAj2J4hWhuswyoPZBnTYNfV",
  "key2": "oZKhK4vV7kdLt64ayE8JHxLdD4WkkXJJtaeJvioiNHSKxmyqbcSoZVTtmAenS18gdDSysBvtx8NVY634dHSrbPe",
  "key3": "5vSxgM4zAZURqPiJeBh71yrYJbjyh47mLZxcJ5fjxFKZUyo86JaAbnJhLcQ4goGMuKvTmdT8AYJ2ED5zA2zuFNx4",
  "key4": "4e5qmDxDupLLaCdYahkLBjquEL9pSBB5SkCcpn868sTNG9Zi1Q4ckcRaqoJVtgtNUjThjLCQTZTTfVVXbHFC2dnZ",
  "key5": "2BqZwvFELTJyF7egVUf473PYCM45QW14uG8P8BtsAoLnigY9hXqhFH37hKpPznDUnvksm6Q3CfUTVJbc6vRp5CLP",
  "key6": "BSq2sW3v7hbzDuT5q1pGCFXw6z8Ybj3iEkVxS7HCLb5UyLqDfCRoifDSCGAzsNuMstSw9ztodmRJD4tWwG55ueq",
  "key7": "LRZ2A9XoWF4GEiijTYbs3CsHjZw34zrc4ycCezKfh2eY4jRNQGGxTQzk5b8mLKquKMjhSQUsuudvR4tVvWgEQH4",
  "key8": "y6NYMYEWNdhbaz4YupXdU9HxVod8xTBjPLXfjy4GuvkdS3pXhbFbiNLGKzgBXzgvRKzzChL6SU6ofJb1EptDd8u",
  "key9": "5jSVg2qR95E6qm6TV3p9tLpKVKZGEYomhDUXQ6cmboBPMZfjMKf7YDjJNmuCcYjSLJNkFMLuxq9sEERHs8ppFarr",
  "key10": "3kWTUfpz7B4hPMSUjqughNrRMtFXdwEvPzQPLieQKF7v9cmHthWJb5gLVhvJTbewspeMLYjpRohtcMVNHfWJXuhH",
  "key11": "ptUUug9vFSiLnrqpb4VovqJyKq8yzv1KR3fNv8Bk9RLa3ox9jyy84yWHq5kjmGyhuHRtSxhyQpX7vHGoi7Vnr2G",
  "key12": "4Hk8FQ4iArgngQ9pA431NdGjKUHDyfJ8ttQk2HrDztFwjQpoGWZei25H3MeSziR1ZjJDYL6zXqM9CZDsDfJQXKYv",
  "key13": "Fy1bFxY4zvMgNsMKdmBp267CGioksaRunZQZ6XmET9WKesN29jmC8ojzFjcN8zuQeyV1nK29yxFsKEUJhwCFVhS",
  "key14": "4udwHYbzydz4fGaWg4Lp6pyf8yJbw62aTamiU78WjDumcNjLU7dQkKRBebnvLbEcFdNS5bhoWz8XaZ2vUwPKeD1q",
  "key15": "2nPUB1jTRnQdR2gfVKiGpBpmcmP7Z7kyCbH61Y331i8JmbKkLtdRkoADiMGKeXUQ5CmnSinWHXYmou5JFjEjkYzQ",
  "key16": "66kJTqXBzA6Dt1eC7MnYKKB7FbXpXGuayvn6mUbk1a7ivkhc76fvftixciRV7fNW5cgakYkLMRbYiLCZ8bPJNHtG",
  "key17": "tQgzSmxtX35u7S4Kv2a7MNCJWXBQEJjedVRoTBtkBSMzXXp18hKjadS6QnvMCcnwQhKA66sxVB7TxpeYjPXH1gf",
  "key18": "4Cx9uWMjop7EmRZ1SHG4EL3CbE2h963cznKsBb7YyyAZ5DsUzkfo8Hfhhu44LgsHSnzwJSs2A9hDQN4EFJWYEUig",
  "key19": "2SSHshVpNnUs7aG6A1sTUCHNEemn5dohJdc76qyB7YyhPvCA1EUuSJhgWRRM5EtNR3G3A9DSkkuDq1ZFKCrUhosg",
  "key20": "oBzoBS8wa3iNXPEQwJwvKRi1ZQbvjtUP6wXrAfH4VifouN8rYHkHG3ewv3QVwRgosGcFCWdKH3XFAu5sBxnFPQX",
  "key21": "4afpqBRuykH4Jgc1Ls2wmo6ZWKFhWB4HyQGDb9zzcM3vTbzh7uDYEsaHCwTxB3kmiMvxNW34sWotqnqAZJRmRD58",
  "key22": "4DXLMJ2suu9aqDCUXgY3AMkZn7WjC9gsFeQMxUzSQKCTecQHwAY4PLNDzjiqwkzK8NzXJibJ1x5QXf6fNnvXqEtT",
  "key23": "QGZsUXoaNj6ninHzXRUVBbAeDTZ7in9vrNhwAfEtsDUVTKNoqkF6TmLgrdvyCi6T6pQ2mFBRq2cDHoZWQ1AZu7r",
  "key24": "JC6sbqq7tKw2Jas5AJDvGbu7L7BfVJ1hy8TFChvempBefprvxY1sCAhM2uPJp1pYpfmRPeFSBrUX6PqyJumsnhz",
  "key25": "21om3GVpLwvne4TtTfyWin4wbsqzfcFSd75AbY4yZK2NFxo5vXNGt3iggCMqUUJYEpQmkQmN8GaHnYoE3ir22wjR",
  "key26": "3EsAhXdQffW1TdzSDPfq9dVWCH9zRQ1EZeJRH63o4G3m69vvSTGyteuMgAFp1FjsUBHhbzEozEZkshSmJBC7ZVwc",
  "key27": "3P83AcnYqEgnRCjmdmJeRi1PEi5gB15k7SK89fAwGK8EaSNPmAJiEMULPAXeZMsimvXm2ELxFFnHqUSEXMbvbddq"
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
