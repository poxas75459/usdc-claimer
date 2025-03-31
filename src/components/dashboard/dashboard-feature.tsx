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
    "2AJUYWy4LowjMtwqoDeeaFMKJSNwGf8K6ztYJMBuiS82JC5dW3opWcdSeeVQtyRXt7cxky3GYuvvvpGkM1Qxw67s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwdDFB3qKyria53rFnq3k7WLRE3D1U32SZ8WdJuigJbuDDEjizkVq5CNuJTvv4159DsjkFpjtKFYc4S3vUwBdET",
  "key1": "CzvRmHoMVzMqiSf6iKfAoY7QjbsEQPSN421eLJQ6YpZoT9NG7Tn2i8MRuduYHq4A2iqyxj6VzaCf3BSqScKZuRN",
  "key2": "2EWDamvGifiqjvuoKXjKuyTAYEAkFK1xosrTurH4Cih5vTLU8bx4jMC6qjAELf3uH3pFMMxK85sen3A8TXHqnpzE",
  "key3": "YA7RCav4zb7P9xerGfRvyN8BoJKgyUA13RKdqvYYyZDBCqGxvqmJxLAJcbtzUegXpSyAwHzgqhhr8w5UsTmhJvv",
  "key4": "65n3PJC9pv343Bgtj7Qu3GzHeqyUwJ6cFsuxrSjmtfrLFJ6T5DhexE98RUHCiHGhaoMeeJ4yNTFGXT35Tw5jxzyc",
  "key5": "2dUaGQAbfFSa1D32wJDfvawvpsHNxoPg4NEFCULmZbH2kiHJvLsVdLLCCuBhA2xzo5yznVU9W32D5MHTfDeuBb32",
  "key6": "fVMKQ4j4kj3g4AkyUGB4QomuKTupUwudJhFw1d1LTGitLp8oUSKqZse8MUW78P87eDikzxx62pzELv9nQ8jaSM4",
  "key7": "2EHaTzM2WeUvUbog57nSZZXBePsoFAwYSak226ujwJtriFxcWvGwzgEbhwANU1RzMdeMtvg9dDmf79VTfrtST3aJ",
  "key8": "2wa1MfnUGAYUzqzsdAbMw6owpEGaoJGsA6NmSHRiQJQv4XQKHQALWWMRRAxejkAXSfAiih4eCWbeduDAD3cyYtSJ",
  "key9": "3NkNpmjDVZzDEmRvMNayZ6o1GFqhC1VnLwSCyvDExjbnHnejPW1S4FASF1P8ig3MUita5Yh6fNuwfzk1fzDCkgt5",
  "key10": "2t55ESFu3dvC2oiHpgRvkLtZfH8eXXUzc4F2HgcWVhbPYhiQcjs2uyMwKnFprH4Mf7oTwXsuMjaXYrmGwVeveS5i",
  "key11": "32ddQZXmxY7Ne6ki2rifdVH2adKdQY9nZqC5pEUtiBZspL7YvAtdafnN2uuGWNeXWJFY9kDsgnpi1oJfhmJwamCB",
  "key12": "5BzowNdj6rBhabT5gBKtD6YYhTSrZkCyfaPcgbMtpXXeWYyGAfMHnrgKLsD7Td3JnyUqXZK7gXVN7WNhA3b93od2",
  "key13": "5DHTvR6vmkyoZydygEGwmK4aJwhtAkwWMx4mTLyyJsGHpcf671wT8SSSUTXAWckqJa9DNGJwBJyeetZA25fiHShw",
  "key14": "5LEjMDb8AEnrV9tiDRiuEPWSgkzc3kTDw2DKvQ4KuauNDWSEo62SbrhBKnCRY8YzMxm2atA73c44Lwy6uk9HmA7N",
  "key15": "2wwWCvGG1NeqUGZzphnF6HwZmA7dmGz2BTCFQ8zvHojkdNsX98564uqporTyBYZsAkeppeQSF9X62kA8UuGNo2Cq",
  "key16": "33WZAbC6xp9EiD3LstcD5GqfX1FzT5pbp1diFFAxUW9bcWWVpcJr9JnYtSwXUrxNLvwq4NSV7xgDeh16HRYZ1AZX",
  "key17": "5cAemwQx5L5W6U1X4fXgubFkTix8KcFv7MMxQi79G4pBTYnkGBnAnmgvpvwFEVr5wbLiXort2mbkHQeerVsQ58Ze",
  "key18": "4zZ9TrhorccfLPkLRrJCeaELZ55qMhxGpJRi5JcmtvPJjbKZTba3b9htEbhbzAqYJF8ANfjYfCRkDgMHieB9EGST",
  "key19": "2tTq7fffgohYmMbqDHmuB1SY6UrEWGv5BRBgVnJP7D4Qcfhw4ifhn1xSQ11wcBKGHrUF54cBXWouWqKtvGujaHfY",
  "key20": "52VMg1JSxeWen4sDgQs69h3CriqMN9bAedT2TmmmVwNSNhcgcy8rkFT6cDMowSMyWWBhvDDPNhRivUHtcPULUT47",
  "key21": "5qZUyUURZmjS96SgtAGjFGCAPu2y42i63Fya1LEhqQf5ept21xCum9qK6dgwWTtHbM8pzg8xDepHgKP5SdDZ8VQF",
  "key22": "4bosu5rhh8GeRqSEtME8J4UjwuRPpKeY7ZQF5ZGD4aY45BWJy5PnbgfoXdGQEVr9xD3FBhB8UXmKWPfdVE2HcTqq",
  "key23": "4f6Vg7vxizUgqJzoiXkLNLb4uQner1oYNtcGzveh82dvDLxW3UT8whMSFgmP8UtCGP7CQdRGS4E9JPjhPuHNhxuV",
  "key24": "3xewFfoxmYULq5Z8bttJak7bGPH8E2FobGpxpPiWCK1f9r5cmnsdwkv42fVCEEckzo47cs3R93bZG5h2wMhR21JN"
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
