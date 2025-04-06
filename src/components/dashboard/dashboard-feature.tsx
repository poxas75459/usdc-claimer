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
    "2Ty5fPpgtEGX36GnhhPiehCdR7WfCrfB6YRFVToWjR3KYGVkA2RuFbc9A4QxqpcuRwzqauanufcZE7nep8qDCSB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7M68ssiPfFWaxVar9KFRcyQs3mn9g7qKJNRu9P9D2iN1sXQ4ENzxHtWvjyPVpmDF6fBsCZ6XrcL5Uwg3wcLyy9c",
  "key1": "y9zjMG6zfWCSCo6eJA8umgHRGkGmN62feMvRxFUb1YxL54MNSkFS8ytuoTkSbv8s1cQ1Pb7BNsr8ox9z9GzWyAA",
  "key2": "4ff28atKEDa3t2pUyg75Zxb2E1ALvuWH6rWVqoHpUXJa8AiCESrDHkMSzkQH8aZuUDoAaEDL1JSMpqCPKvm7U37v",
  "key3": "nr5EwZzSbiRoV7HpRbRWiWU5FRNWsHgKgk6yGbNKmwyUps2nDgVH2U9ZV5A9x81PV37XwCTA3ERXMaVnJ4R2SeH",
  "key4": "3Py7vTe7EmPDXwb7UTiJvAaQ4W4c4F9wMFkw5Zn6ji3oeKTDMDrzwc9BYGzKa9i5fgKfCLXxPMUoUBCbBLb4xTz1",
  "key5": "2B64F9aG5FPTKpuxL3Y3BWEqDSDtUVzPT8bcuR8szaK4ZRPgMPXi71B57hEugxZ1VRe5YBxf3YWZMo9sM2u6pCyC",
  "key6": "4Ji8fQfcGLCyjLSUETUFCNFXTGMTaSH7rWMr8PoSZiZsdrVjeUuJqqVxbq9ayvppfF1B3rbM2Z5DFYahC7fMuCDS",
  "key7": "2WfAxyXZ2XmKpREFM8sWaUsrzXLYZrQPT3AesoU4rv5sW4L5hofJLkdpwrTDRwE9eU6uFvuC7pvrHynR7Ce4bpMg",
  "key8": "2otHrcfXkv6oYB8F8Kbj5PhEpeKATgE5nTSUs63tTNUZKsDBMQ3nsfejWmzhfZzPyuKm6UGgCLMK62sUtMx4AmB",
  "key9": "5bwZBKNBcTXdnczJXCzh1dzFhHJb56rifeCdNsHoaS9tXrKNjbM8zwbnBqDePmQLfpJ7DgQdarnZoSDGgTpMaEJj",
  "key10": "2X9F76m4gxs8Mft8jd2Xmia7FPs8a5juTWY12cbtppBPkBChsGnt2qS2CtE6rCA7zkQED9Cza96XoCCr1pNecAZu",
  "key11": "3j9VHtHYQ29gSEZdCs3NBMLCNUZ5ofymwbHoEk5BWpZgbpSyu1M1CwFMmoJc7PDaGzXwx3SrP525Bctuq17DgTPT",
  "key12": "3qmDgcy3xKE4MGgcwbzvVJC1eLggsktj8xjRy5AHQD5wYC3UtFTeg8an9UJ3XcFa8nFhSEdmJys9AGKW4tCWKpuG",
  "key13": "4jo37rRETpzPTszKjBfDJi8sqPvfDYh6vWkYWk7aHLnWQiK6ELU7F5BP5F2DjpbKT1bA37eMLPvfGeSPfRu3rcLp",
  "key14": "2uBbxC9JLpRUbw9xyvFeUvGEajxekd3JaPzdwKdTnieefCRiyXcVciZr8a5URmBe3p6cutzUShBgeEUj3u2q3wzo",
  "key15": "GTHNXf5FyChhdv3Mjc5QLRooh61RqKuTNh3nSv6JsMZzZqnBH9jzh7WAHbbBVxVfYSLJZ5NCh1UcYmeApct3XTG",
  "key16": "3jCY6ZzPU6faMBWWSwG8UmCHYGMSs8DsFZsR4YTg4abCTfCwRjFf3zDhB6UdRLUKpQMLVc98oYx6745ZMWVY4wsi",
  "key17": "127qibjDcA5jSpe3je9Ku5g33qE2ohbThT9jr7Fx8SxBgxvQc9k8pCar7tVM5cgSsAdVih72BjiXkRWqR3mqu7w2",
  "key18": "3c2hXU4eu2WHXFsAYEaEdLCPb6ZQJNq4mUtqvFB22FjKfxNeYbn6AAVUe1jaLnuzyauDffPWd93LXmbHkH91uufJ",
  "key19": "2tJ9stB9sF3xGLEnHjAkgLzWY1Wigo2HoWAQbsPc4jNYEsrwCAssEspMZ9qTyozVA1ummACx6eWu8kNLtefGh7FZ",
  "key20": "3xCADUrxArJVYGL7pyj7Riucs38CvPjANLZ8v88mm5QFpxu8iGQWMeKWXYkmf46PJhSyUxPUNCxfwsGhzDhJRD3T",
  "key21": "3CTPGspJzzdwxRJJqu1TuvT8qrwREKaQ2pZw19SD8nt25FQgYY23zdXSkkxGJiumNgFjUdmUcKTPJu13REDc1t9g",
  "key22": "5Zn723NnKZj3NzZ6xdkck7NoXbp1AjscnFb8ueQEE2LuuUjbR8b4Cp8gMqLhb9cc843HAghxE5svfVdmEGDo3G2Z",
  "key23": "ujD6kVxrBF8ZFqfF1f7qxfHpFHfkHbmhzRFQYA65XkEJ4Pa81iQubpGHacDpUEqeYkUdGTmV3M7HoHPYC2KHejC",
  "key24": "2b88mR7E6RDzFtGuLJftASMwr8ZpDonhS3qTX8WXVenz6nygDoKqkX41QDJ72JCEzrxdLv3Vxr4PSmFfce1wSf6i",
  "key25": "2fecLb8g5yk581ENxDaZt3xHCrR79fY9AsS4SHZPgTcombXnL6vPve59G5ifEtKvNAVTfVQ57mC5ZwguKCEZoRN8"
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
