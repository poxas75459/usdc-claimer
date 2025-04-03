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
    "3amFzcj8FNHGEsw9m2KyUwgXBwJLF8hdXc1GHSTDgGmaXTQBTByPXp4gE4kCfqtmseyiW5bowzXqwX1Cek8FNJd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpjhyW3j1sLXBnE58ohRBwQbrBaCUVdpW9GmwhdEDxMDE5Yj4dVAquFqvg5QntSNihwL1r5Z1TXtLH5ZZ5hz8su",
  "key1": "2izxUjoevTU6FLjyz7w2cJCVjwsR9EZRjDQpJMriN9yhsWhL7UMHQ5sKn4HQJASAPLKRBRvJgAsfTrFB8gBEZgtv",
  "key2": "4L13LyWwxsxgaQx4me7CK8Y2bdNko1WzjNYaHB2aQT9UxbyGnwD2A6PH9eSPQRp9F4pGaDuDJxAirJG8Vufv2fMt",
  "key3": "3AsF93YAawkxQgPVxvJJRcm1JmbtgpMe1AZoTi9iv6nrJ8HFkZgKRgRLGjWWDP2j3yctZmDQRU9hoJotErJk9SVm",
  "key4": "2KGnAH5n4CfcV3dWrdqUXuaEcTkJ39KQuyU8rgZBnqjMkQedcaQJHiewfzt6tSnHfuv34mDYsy2m12hhr41madcQ",
  "key5": "5pVqWPAan25nN1nuRmNDvTwMAjJSrQ71ap9JNLNV1SW7Rcb1XEEiFjcAZjeRmbKVnKQksKBi6qgXzmzrpuGDGKXH",
  "key6": "4vU37c1nV4XLK6RtqXYwmV5BHmXiKxq8VaUT9hB8Dt2a9YzR23oeGWmy1SYBiM9jRanC5Gz4q9h82c5CMC9448GU",
  "key7": "3HR1p1LevYXa1HZbbo5HLMDQHup7uD35jF9aBf81WpsvK9McpK5VGo3mEnPYrwQ1FcgWbTLLVFhUP79GTyuwYpjn",
  "key8": "MxS46A6KK31jwz7KMTnnTYiTf6Rob3nS7iSY3Mv7dNWdDyLNzQTfe1D1ATHM1xgNAtz6XEJGVgbVotLSSU4b2EJ",
  "key9": "3tmc4kZMnxJMBqcM5wPwzGnBErHzfxkx2cft4LVs6uSAKzDxpMdvLT1fPkYvgJKwkcL4feybB3oWmibSWF7PFZwY",
  "key10": "3zAyvnvsLSiYtuZSKaXg9PNQ82wqLbExHm7RiGdCWfQQoapGP4aapiwwdepXwFX6zavsrKFHZvhzF76ikdmMBXAw",
  "key11": "pFEbH19kHZdGfU8YvpYNA39eLARjBJcQjBaSynCyBsaRf4HoV1p5hzz5pYFZbfVP1cSYdwweFFCditu9Bm6xwEM",
  "key12": "3NfCSdXDb2h8jhxV2LrjzFBbfoDX55DAfeGi8K4A7LX4JKACteKrB8Ea3nnXZE5T6Z3kUKpJHBjqSVkKAczg1785",
  "key13": "38iVT4WZn8VicaUBdjMkGFYiQRJr8iTqw51Cy6YdLfud7FgiZZ79WZspAPsrzjuoBqkD3NMaNKCms9H63ebJj6sJ",
  "key14": "42dVYNjnxbmJQhboR5aFNvT5jV47itxXhtJY8ok9SZBitGUKdJ8ugo2ahbWLgBoAyeAdtpggG2FFfJ5rGFUtTHaY",
  "key15": "Qivy3bD5bYaCJeS5KkNtv5F6Wtv9NTWTmfzPc7giPp9uhC5qFy9YU9HNgu4JPb5UBUXrqcEesyrQmvf3jYV9mU2",
  "key16": "5cnQgeAUEkWdNBV1CzqjYW9TdExFGsSxBHAoZzDcpz9oL5z4yQAdfjTH4nxG7a9x9EYQd54Unbt4bQKdyuxGz5rZ",
  "key17": "5qqsfCRC1n7CJ6C6YnikfJuVaNEhpsSWN3qkN9qfh38Km7LHH63XxczhUFMJCuBREbrYcpXNLp7WX9yPf3hSpCJg",
  "key18": "GsmyLSucKG6RPn5tVXhwg6iRVVWRTZayS22Dv7fxqvEMV75Y29LpqkvNBq53eo3jcCbiJep2PR6Q4ynSCbzxezm",
  "key19": "4uVTEVDjoQrMG4ByDK3Cty1tv24oiAosufkNRQbfvXCRcxLm7U9xtdVeRfTjx44aYo3JU85HmmpwhJC32sdJDHzp",
  "key20": "8DPWhuCDEh2H4thAGonehRuCYjCvkJS3QEWLNuXhniBmHP6iQ34kyvXU2HY3z5iHTMaWueWQnXxGzqnBGE4m8cr",
  "key21": "2JADVGCb7w5anbisjou7EVZpacWLr1WUUAJsSav65oLnhzjoABDYWdNysfaTd18uQncbe9cRdDbgBBf1247JNPP7",
  "key22": "52wNfAe9GBj3Hk9fbRb9jBDTmR6ygnf4f4TbExF1WyPhrvgfpLBWUiBtHBMqdU1UDHC8asbQMXaa9C9jynpX1wek",
  "key23": "4UxPbE1ZfG9mSyUwMowHG5fJvxCyxotdLLkMFH4NgJxXeGLJoXd1AQy2sq9WkTdAxH6GiA562fCc2R73VcMm6xKE",
  "key24": "4W9h8PAEvwmN99UoRGcEkHK3TkTofNV9TWfYTbodKNzgbXvxMc8iZU7HFtTqSTZsc9qPrr9BvZQbmj5SgznMp8gh",
  "key25": "56bhgo4dQnNNhkfkviVPg9ArGyRb5VZ3LMF9YDaThq7erNC7BUiXLGPrbHrfpk5kn5EqTrZNEveT275KbNa3mnvf",
  "key26": "3AY5cfH26DBKYt6NuTezfptw33khV2TqdcHJDSWEmgLcKfKcqAn825N88DLUx1JoRf6kQMq1ibo4txkK5SsWbE6t",
  "key27": "vyrQh9WzHKd2S2RGLANeKY2ow93SVV2vtmSRxBq7KDy52mVBkPH4f4UT5wAph3DYynd98CKUy2ndtVLhqACp5e2",
  "key28": "28R7aDGC5NpKLWz3jt2h7fqvCG9biwMePsvnhymCEKA1EN84zxDLpf6ebDD2TGEVA8pGvJKnRGkvU78mjDXbFhcP",
  "key29": "VFD1hMKYdC3S4637fRZkpN7g8uHxMe9g4RjqN24eHWVu3XDrDXzPFrZmckE2oBiG2h4mW1mqDXQ6a4xvJjiCDXT",
  "key30": "3MGq9m6ReGXjMUheBZChipreuL1yaZFg3ZZZ55Qv8Shc4jqCx9ehYAKk8q5XTQ2XsJvS9nmNrTvu621v5DoArBGQ",
  "key31": "5Vr9prku8J9qzByAreoWpXpwtutkdM5U2qYSFoWjjsT2S1US3GFDD9ktucNyehCbPdpsWQBCDKvLmdNmXuPJoXKd",
  "key32": "tXShubte3TtKWtEm1e51uJ9B3LYG75mgBtEeF5oGhpjgdsttygiJFQGWH88ptUTmytpALSaEnn64PWvqBZeYNLc",
  "key33": "3nKPgQn1dEznswHejrerdMkCLe9zhqZcFdGkFEWSCfkpgogEfQQBKUaHTLyKgmuMQf4E9aYUqrFzj4DixAX9dMT3",
  "key34": "23H12nBCvdxVjmBPV9iiBBSQXGsft2ELjBpsECjFY8xQehB5jhTNovdjp6C95aqBuKVjxMGBihHazyqti9C8Qa3R",
  "key35": "9fo4mt7STxwDQr1i6StdrVNWvqAFK2kenD5gf6UCVrYCRaueMHUk2NkX3MCY5kWWZRmtnrTW4ngGqVLRvD1z33R",
  "key36": "4q3xzzMx5aynhvJf1wXsr8jrzrdaULPgMA8zi2XH9zDk4VAVDAiL646VEzatFuYG6tey7WmMsK81zzDDNZAH4P91",
  "key37": "494hTE4BMHU8z3nyFJCdvBAHGKpVvbsE496PFg3eD9r4NLgwspiD9mZ5MpQKJ5LFbvsWEU48ye87szAoQBxW3d2c",
  "key38": "jNP1nq6QjtgjvpWi9p8f7ugYopHWytogRLCcqdiXsmqGMPFTLjxXWn5kvvzkH2n8hLP8sZG3CJ5dN66EHMbZCCv",
  "key39": "4r8NWytpryxbr2a2Ci666esek1r36dwJBqYkVoG4WqWQuhjXHCZ1YjWqJLPTH7hGJNYY3fQtZcn1cyDNrtE2vJst",
  "key40": "4mL3ApMp11De5omwZiCjRi546Yi6amreJhXvk4NbByL5QPRhHr1FBgpkYxYSZXVKeJxRg2x5JzoatQY9byeBzdHA",
  "key41": "424u37rxk9xBtRTbkgT8qAhqw1tuQsbcXpVs4FhrsMGVsppqx8uVj5AqhGme5cSkuFAF5MjMPd63bpekFKrD2iKP",
  "key42": "9KWzgtC7jLDZpacxUJZSNxEnbHvSH3CA6DGq4qLpYDcZDnfiPw3DBVQ43pYzkoXo2WeT6MF54jJVWPJVqutQTPr"
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
