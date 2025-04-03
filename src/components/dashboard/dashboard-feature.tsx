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
    "5Upq4FW8dS8tC7pJ26r4W8MyXL99EKsjNoc3Wa7jsVikSjXa3Ea7wLgGddn6si79DTpn5tqdEMtf4pNXZceoXW3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7BsirfDdxxNjiykCXvEi3m5SXV8UCgzUewWQAHCQPqy3B2JuYz2MVWo7RQ1hSTbPFZKniyy18k1niw45ubpKf3",
  "key1": "4MZXLhH1F3UxGvLF9r1t7Eh6GRQZUmLM1rmC1xHjfxqE6hGi1QpF6L6JeWK6reJjcwXRs195y2u8AtHr7ZXtzAXd",
  "key2": "5FQzAdA5jNzyAj5tuZfgsq9f4yDhosTEiGXSzHQt7LvPnSDZV4HQRjvunwG3SYzVmXtCoa69tM1XLLwyLdNV8Pww",
  "key3": "dQdv35CKmCj48uwNFa2m2o6UJjEWKMdE6bn4VDZu733RTshEP2GHXUQq8Koc9Nu8RV4GGeyGD3RUUjPWdtP4m6H",
  "key4": "2HaGk4w38bnVHAW5YTxfCaijkcWYA6VBM51QppaRTTd4nJWYQvLpBKw2iTAYZci1s9ZqUeRcDyDQZiXYDyisQ7qD",
  "key5": "4mvnEZT5Lmi98PfoHdCw4ZSNEja5yLZqMFdQsuXYd2vCNdzvcyC5zR2ApsA1rXYJaGb6ZFmUijqURh8NW9fJZ1uP",
  "key6": "2GhChpov1uc9GJQawpA8PTHBrDKkL384vZknfEo1cq3dASxWTR3jcmT1RnbBj5HpqL2TtrG9TRWMhe2Vzb7uK2ug",
  "key7": "42NRRzE6QRbLVD8bzuC83uQkjZPSfsgvYjBiGKfHG97EkqtijVRXQtCdEPkJQwJeJtmFcLmeWhWbPjQ9x6qU1avZ",
  "key8": "3ZLNZetYL4cmKUiAtvpfgXSPcFjVyteMChuobHTiV4xgyJU6HRsdAwNMxVpqCvZXayLEHDn7b53w94EWv2XHnU8m",
  "key9": "5PX3D888oC2WoDL8PdguAR9o1FnMz3FW7HuxZh4EtVvhb7wqevLbYvcpt6ic5j57pTQJnYCb6wdPX5YV4fD3uZX",
  "key10": "2T6jESeJir1iQZBmTBqJ4tATCRDt6PSRGb7wN8DNnn2BpfrcTA3HLLCGussDP8W3xjwpwYx6ybeJkDoMDKRbsQ7Z",
  "key11": "2iSNVMPAtwRJzqyWEKp6fz2ak71F4vxnoRLhmF8R2UcY9mpTqQNQqyjLS61X78fSfGnwpkYV4sf8uvpD1HXj1w9Y",
  "key12": "4jFwQ5aUTcq784G6oTbbxTMLE2vijn64EShqcND3PGeMJjiBk6WYVsLZmAQLLT82GUpoRvDg6KXmqxZzayiqJiHo",
  "key13": "4cCfYf7h3EBDtGM7344k8zTKbCqoMDRDtPq8VWSsnb6QtYvRDr44ZyBLBUMZmdV6PX17GWcQDZRmN25WRs3py2Ng",
  "key14": "3PJJx19yQevnFVGPhFCELgiMgrmSLJpjrivvQCsHMFS7VqZy8JDCphMbYUo2mqdKRuZaV7N4iPKZqkBhMJbLyrwP",
  "key15": "4PsLngCbdQP4ZDNiTE9uFebRJnXwrT34Jc9qcnMmvPg2bzGREg6dUDTtmdU5Mahjtxerc52CwQGJowxWCvQaxZA9",
  "key16": "5gTbCVmainQn9PctCY796USbD5rthqwFENntubK1Ez1y5omYN6KrK4Hsu7kBAnULxSMnTeTy6RypiBU7WHhsGj9b",
  "key17": "5BqbwpNbGt195hn7fY24YNakTYh7Q7jcVWspmsrwCrSjGkLWB88Zmn5de99BwNmLwogFfTEXoJ8fJ4k6wjKzgEjA",
  "key18": "2H2SYHLwUxkF6amwysqkRX3YpAWJeFc74r2WUENEYT6pmGUTu6SVTUgSzBMFCh58u1qBeoTWKtLjvo1XA9Sq4Rva",
  "key19": "2X4NXAd3UKF4gjQbYdvGGkBqHZPNYPPhJBSheqarWPZT7MfzDbcW1ZiQuxm7mPoSso5kb98Yhq4nHW2gn7qLZrJd",
  "key20": "4SAvDoQXFY7Zpt3dAoKM1By5UgDndxB3yTKQKodku8XHkiji2CiX8GS3hrThBbgVAzHCa4NwuZEtekPgKGdrJiMk",
  "key21": "38FCGZqpEdPut2kq2jo6NajaZjeiZfjUR7jLKwq7C9m6ED2Qa2FucqPuaZdJSPHuRrcao3qN1ekGXTwPkudckbQ2",
  "key22": "2Gmcr7hvNA7Db9HwaB8mtENA29JkBSSdYjJzJ1pVb58NZPAAz2PB167cwLFoUTXtBt4W2xNN18aMSYjNdFZc6nsi",
  "key23": "3Etu4V1KZc1spE4Mwbz1vceEP2SeFZPSDGYbEvScCPL8APSq2drDxZwTx8KaaKvLVCWpY9LWK76VueXHL1oEtVun",
  "key24": "3GGmgxo6AV8VCTrvg6N5VKUWkeMVVWB2khiJYNmi1VoHTpCpnHpejkZH8g9vjMaUVYAX3o7NMoJ7q9k6cKwbwZx4"
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
