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
    "3s8vKuz1NwrNEr5Lsju3DLXXaKrNrp6xdP2f1ipRThpq9MoGd4egN38MDnBRk11PEz6imgEtqZCv5qc5xmmi4Acm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNPkcW8XQaC4NrsjwsV217xCMn3KV4Gk6ttzzxRjjF5EQ5ULTamwg7XdcfvdA1fkzgw9A72shbcwM2JdnRHFkqW",
  "key1": "37k4mCBd8XrFYJP848ZHfpTfwTZ2gFMvzs6eaUQS8qPW9ESn5wDXKXPRfyguCCMehto33ooYY5UvMiBhnhk94rAs",
  "key2": "5e6Qm9fTorrLvog1Ftk1T2o1MmE82L8sgT9PyQ73WdMG8mm1w6ukQgcbuUiWXUS2LgVCDkDFhtmqvfytpfxEBcvY",
  "key3": "3YDxJd48BzHMYozQtxkjXBVFcEuR868U59Rj45JztbTuFboBG7ip6E5Sz3mVHc7MY6EeXSrtFESxf4W5AdHSrbdV",
  "key4": "2oCxMxykhCj9sfWWuFUQctgqCRSK5E7FTwrTe8U1hD3JX6kwubRsjtziJepZxEyUcxYsxbsLhSQ1z45KhYHbQMPk",
  "key5": "5b28fArBiQu7HtvNyGUptzo6xrUPfGCSxpkX4t2cG6nhxu2f44mjymcUG3nEqVka5XyG9vjutJLrGxDhjiygfjdw",
  "key6": "5icQwkjcHp4EdvS9sb1wKDCwf6K8QAYBboxrYZeicH2PMhjqsGm8JaMGmXRkfwwr2yWGaMQJb4zHUikTpEMLsgY5",
  "key7": "49t828jsPZcKeV7tnYWMBn47GYYqeQD8JedprhoA6csBRbpDHsdoDA7Fq6mBZztfTdi9oSaWx8twEjDMWAr1cgBq",
  "key8": "2hRqiDtSnQryfmsdHTGeAsNDzVFgsS4ekoDDSCZ5sD9T3LvgdL8xaY9gvufSz9xFiuV3WCQbrWe5a5X4SsydJzdu",
  "key9": "2u4qZKqSzBFWPRcUPULP2LGwusWJkZnJKgGRKJjkewxegWAo36vVPbJW7bYBfms5RxnvTrifwF26QoT7qoEJrYtr",
  "key10": "3EzFTAbuTWUetBi5R9HkyAwaZWsCoHHC16vtTRqSX6cX1vNvoJ5d7ZEi1unCJTYa1HNpbUEubzQ3Z9b6Ruj1NPFZ",
  "key11": "5ejuSdWDVc4Q16PvLPMK3Fq1LFhGkcnj7FBQDbhya1rizL2MmU9bYL6RNg6M6pYzSH1JnJ2s5TzBLZBESRj85Nmd",
  "key12": "c4CSHWGeupENMLLTBJdCefYQD4uqaZ1S4s1hun5i7CRDR8B1z52QQ62agQsbhQzQ9nrFcgXgVcnw7MhBaW33KWs",
  "key13": "4Eoyoypz9U5vKrWSpWvZWHMzJvdyMQqEkqPc3kwrxHKuKCktsB1MRRCpAfmE7VgaShvgMvQMn5Ui3gdF8svrZDdi",
  "key14": "5wyYeoVZqy7JMhVDZdqeFHRn54qquWiDRNQkgmVEXZAYtpHVqNazu7tbc4ckA1v74pBkKHtkhMwGR88KT3TqxTTV",
  "key15": "2bGfDhKcrJCk4i4zxtwZ33Pj2g4QDQkNNJuSYCEKB5TFJUzRs2ZNjsXXwqBm3x1qyRMsHuWcodo3FJpxrqbvjDZL",
  "key16": "3geEumwV94f9zDK9wyYTsKbEXfhmF1uB9DxEebn7Qjnzz4HU5t39RXHb4FJx7vq5Bf5NesXgdCV9afcvMh5B6wXn",
  "key17": "3Ucq95W4vtWpM392TFzNbbH8oAz5S6WpztcZTtRNEs9xJNRovnt8eHy3Hm54h3gTkgoURHiPuujbMuV8GihkRCFr",
  "key18": "3afoW8gfwBDhMPEYkE88KUeCE3TbFkczkrGD5AdJWQZDgFgfXvsfhQh8x8TB683zR8NYL33WGrLtLxRfTxwgDFFs",
  "key19": "4qHFs9MWWsUvdH4JgyuTreb4TeUghgMPVMb1oJRcMCkSgNjkcU12YZc9TPiCfHTsYEqzLQNP31Vn7PBBX4d5nrzq",
  "key20": "56TGRG6TF9CFDw6Bzd5kYSn1zNeWuBjy1kcAV8wzS8szCNjhgqzoEQicv8ybbQFhAjCwxmA14SdDVNUKpFosE35F",
  "key21": "57HTzs3AQmhdHVZxGPcakApw7PacyZSMhvYYNVbxBuNGKhfLazxvEq1u8spHEBJqmVWMj3CYRbf3tbhY1BqmVb2F",
  "key22": "28zseb4pP6oC4N6RLhA992QFdyBHD9QAFHMrG97pnbe1f9BVuLq9LjnHfWEHxCbPn4nhGSqvNUYox4kGCUCoGZqm",
  "key23": "5iw7GSRHSJEjnHL8c7V9yCALVYzamXXzi1QZUi9cKetVRH9xfgwpVeAL8rNrgjSTpcsUrv6xQtjMfY1KaieLocDA",
  "key24": "RtGT57rZYiZGUdf2A5xNVyvp4KYPSGB6KnR2Rw2nnNkjkdrEq89kZJr2nic82zCbHd3Fx7Lm8jWkWD7wJg1oKNR",
  "key25": "4V5M3fY4XhGhm9TDQaCJWzE9C9YreFrQNPkRScrkYVFq5ESh3XxfgE2aGsVJzMduGLgkpL6zkXXUyX7pwEJGKuYi"
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
