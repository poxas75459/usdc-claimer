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
    "5C6oue1crKnubJMskERXD47pLeYHtKvVo6VbSecSgmbqVRJBRXHihuBunfVvSPGxFf2ZCQx4kzBEKHvJN2PwUYT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncG1oNsmHwjxK6FWtjLt2V8MbF7u8s1vxW6Qd7kxafvsxZGL1CHeH4YnX4GeZmS3trwVwD2ae4QTRxvEHC5pzmx",
  "key1": "4SUs8cEky4hKAok1bMmShQ6e2mQ5vJtDSkFoDexqe9BZggnUZxP9fsbHTrvWkhMr7QgNBcAymPCyXPToj2FmSWE2",
  "key2": "2BxdkWu2RahnBuSjQhy3jRAUawtRnYzPs7mKGGPg9fRTks16PVn7YY2FrQJBr4yQc1M8ehBhctb6ZCT8YXYMgCnh",
  "key3": "4EhvFBruhLm1o3DMS5LArjVZqiXmcKCaFtRRLpwouKbuQkDTT97vTCYJJMnQvduQS8pspywwRwakEoBeis9VPL86",
  "key4": "37ZaZ92q849hcRGUgXgJd1jgCJLxLKAxiVnD9qbqCmC1qLSFbhb5nwP1Lttk2a568uSEi3CwhaY4V6hKJfNafPge",
  "key5": "4KssptLkgf76q9UFSazRDXvXMB8YwjYLPGCNJvmLN7srfLxaqavEw7MikpZ8s6ihUQe5kuhErKzmNT1VD4oKBd2o",
  "key6": "3qQQwWwKTqqmHWY3nXwhBCHdXsHXwg3rcVvMVAfe16nKgRjaThphghn1BRmXubvkfW1PLpZv1cAvfwYCzukCcGa3",
  "key7": "4VYZpDbYRZaPgvhnXMJpRdbgfkPiFy8HcSWbVhR345mmTLkwRieqrQFWnrbkZavcj4tuYuHSouP3rHQVFAdKgsjj",
  "key8": "Tuk4VsPWYLAyoLWokP4db7oRfi1sjVk5LLpL6Aj7pa2k33sBCTjd2gptRCUDEpm3J6wDh3zKe7NMQPCBFYvC4Wo",
  "key9": "25YMtPKgicpZYiw1wQJkmh9WPd9dTzeg64v4JueBSd9ymjsuQkYxYT7aZ1EwwiAhWekG41ARe8wykjWY81tspnmB",
  "key10": "5xsBUswcNTHR9DKKJi63Nd6RoPt6i5MK3GiYkbrATiGuKE3CiB6ZGF4ikdghunRknpcvBiHMcvypRnqGCCbWyJRN",
  "key11": "mEmdh8wm1cjEaf7fbshGWeU6yvE715MJ5qQ2K12GC4fh3apjBDk3YL9iURbmR8KMAD6M9nKjuQP7KUh1ABdSPdu",
  "key12": "5hMfFFZGVnjXhMpV1u5Ry2BZor3P2Kc5veD66rqHbM5njD8e9kY8CMQQsmrbUtDNKNXErGuqEwwFsLmuMvXqtGvL",
  "key13": "2smbEtZMyo7v9TMAjKZ43rUjoM6VMJDFb2npLC8du2KBXiUTcbcTj5fapsFeA9BwBBH1hEpTpo9jkWtKZjEdj4Mj",
  "key14": "3ob88zdKcESXt6fwaBPPa31TofJAPUN3Qk2F1duk5neue1ptuuMJBoAqLJWzhErPTDNohnvxYSBnCJhQ7dS6js7T",
  "key15": "3Zv7fkf7TdnF91gf4hAem7oWm28ySywqzQ13zXT3T7egqBVwdjRiYRM3pLjvJAJMh71Xfptb7dBYZQ884dLg3xKd",
  "key16": "5PcVQ1BZqBYensDTFzP5toEiJY9oUMTgWAv3aMjPtDqMqMMg2CDouDpngW1zDLqSSxbjnPt9jCKHrZbzPyytpVP6",
  "key17": "4gJYLehyx5fRAky8Hwhjzi2uTSfLrcDV5gVGgtsMbihJAyHEzvWfdMLeB6tmUCtRGbooHZ6g8aMdvB1CL9W94ycL",
  "key18": "5xgTRhJW2SFpPm62YUF6wfhemQaGEvcFGeS5KB2RrevZAUWnnKD5YvgZCmweTfpWTjdPYBf6GGqZg9iU2FpSpjcp",
  "key19": "5udW9HiceumA6RvTW1CQjMEfcYxkQW5BcebUjjJbdgTcuCqjjbD1RvcpQZK8udepee6Ds8BNMKjuPX3xq9Ns8JbA",
  "key20": "uyTF19E4oL4bYQaU9dqWGaJwUMgVQCLhZWsV3f5UhgbYePuQugBYQRSjNpFY1dnH9emiDk7vbcyLiVVfTJCq41c",
  "key21": "VrTHNpNrtffY3m92h3SejAJxcBDYWoaUBsDoP3xnQVD9kTuNcs1Q3NXWV35LrZFdm6m8fTtLPebZmukUnPbne7e",
  "key22": "2YYd1bsGYyiPy4bcjVfbjiqG5rLaFMpG1NjWXBwuNNxL8QdYEQKUHD518ZVNo7sZrNDCtbRyr53iZjQfxLA3BB7L",
  "key23": "QBSPkzyKwS5LqDLbvGKtzVkpaZa3fvVAgrjRj6yhtDhwW7S57JNHujEL1xgj1VpxKnD6bRcitZK51qa9hobDuju",
  "key24": "D363EGELYpBjuTdKrNXciwZ3oZMvtZB2KsUz8xyVuGtLGNbxv5zrrMi6MGzFoJ8cA1dgB5nPd1YNVcq5YVgAvYa"
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
