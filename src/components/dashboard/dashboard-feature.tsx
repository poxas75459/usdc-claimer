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
    "2j9tp9M6MZLNWhc1xGpaq4isXtApwNuFbjAsawc3oV2QSTb4XQzyFcD6BgEuuLAAG5XNpnZCjukwjHdDPtBPhqh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mX1zXH5YptA9pqnZHeURimMgVKyLtTpemY1cc6GbZnChdcHyM45o2Jx6oB3Lx5e4GNniamCXcF2mCFCUr1UJ6Xs",
  "key1": "35kpPVYfGhtG7usHhXPXkqmwam2VfA8wfC7C5qv7TNPA4qpF9XiBedBXfZUgDgVyeZUDtUJ6gahTzS2YntA3Dsmw",
  "key2": "UJHeWLLpXoTwgWZEPRb8UHQkuDoH3xeNtsEsz835nmyEA8E1Sbv5WJc8w1ySX2detgHfgYTnkriJRWvSFhuMrfE",
  "key3": "4RxHkprMTy33QrwwWR4R9E2eHEaQitGnjArqv5VqHez7bLV3CbzaLHr5wfnv5tFmqi1Ha7Mr8xYAXxpzcAnrdq5h",
  "key4": "5e56T6oNXKSV3TV2bjdSehxXifB4RokupyJUoNHvnivAjYptFj99aCDezT84NP4PaqQRbqnET41NtzxnDhwXBiqf",
  "key5": "5pqgMnquAL6ZduwMy2Kvbw1Ja4tbjAmvamA86nyiSzx2wGL36vFQwUBMbYYn79Co93QHBt4ybevTRjjaWjAjoZTZ",
  "key6": "3ZuMrxEAzQ6fH88j4JF8aCP59uD3HhCsG98nEPHwgWmnu1odyC57ZKHqWi9SMR7xeMv4vbbApUH262NCrEDwaWkK",
  "key7": "51jMDeKXbBUX4g9djnmfPWeKdWHAiZzCSg6DhCU48Vst812dfbMiAtrt1h3DDa49Dse6GtvSMhDzgZ8zxhZPjadj",
  "key8": "5CkUTAPNFzDQ76sqeL4vBz8QGu3jbjW3D9BS6SEq9wRQEP4YpoYAo3CrtVEaJLUEXjeG8PXwW5f6a3gBfEsUMCp",
  "key9": "6mEoAZfcyYEuDMyCGG5yATxHzniM2Rk5GqZhKjz2RY88WLSLeZFqZFJcNxkgD8kTw9pn6NdwxED8joUNbzkMvTb",
  "key10": "2eY2dfgbYeTjP5mRa1jhcCn8DNg3ENVQHUiNBMJeFWnEUcrbFt6WdErp2By62qdjoZjXDrrAZ7d7HGsUVacKLRdh",
  "key11": "5Q4YdmoJx6CZQ54SQ4kWuBx4UaAH41ee8dLsW7Y7UEzexrPRNyzNyRDKrQ4LMCatvndyq8xrPMGEJ23TkSNN9MWC",
  "key12": "2ZRTd9uMGTXBqABDbyMX3J7UFbXUqxr5eFEYZw4Vq8Cg25bvVzMmUr32fS7y5QG52aLQssbveCyQ5vFKCm1z5PSk",
  "key13": "55Re3y8tEfBeTgHQmwmkTUBgQG5WMB8GphwQsnUJufU9LtMbtVFxyDQMeoUokqcJjsQNAvXJJJB1MdTFJAWJ1x7B",
  "key14": "V1aBmqN6sTQkThCQvshFzBw8DKFezHYJcdeEmNHnFzYoGcqrXe2gNS3cnFYaFS26pYiYMjxeibmESMtsRjuXWvY",
  "key15": "4Xqgnp1295QW4dKwX2XLVAWe22eHbf1Q7iTsoGisdV8TxzYfNsfa9C36s9nRWFiQm4zjEo17ty9tAw991VRCBHbd",
  "key16": "3GQeccZaWJpjGUZjyoHmpVaDWy5Cb5DC4as7496UBB7sSdiYvew4STgYskGQBXKeSeCtUyJ9qXuiyf2ytZXTimL1",
  "key17": "5YR5vhcgcu9jwKe4a7ys5By4faYuo5JiBUXjCcpqkaUz5uGftD3pepqa5y56jC7hvSBnZJorixdjLpHcc5zTvGpq",
  "key18": "3iEzPYqfFTNCjzzDuGieQE9ULhMs8keNGGG3AV8qdQkFnDGCtGCjBKb7wB2TDmQJjDR6mAWDeZeSCmSBhXBJzd63",
  "key19": "4UFW799JbSCQspKx6UMYTmEZ5SeuGSXQ8duDnHFeeX3mgLwm8cAzSSYLMxxEUa3zdpy8SqwPtTnVG8Z3ZWo8NhKu",
  "key20": "CKCXG3NeH61wE9LX4YvQ3uEoiubzVUbYMtG6a8zJufL2YSYy7YzEPP6si4JLr389YdNxPcuy4BhCXvMgcK4wcsL",
  "key21": "rxc8u8nYS6oJFSLK13GE2pNqhPP2CvTmTYxFX8paT3Z6z9cmqAkZZZaD9MoZdZQKSMNeuzBwo5iNkaGa1GmWxJs",
  "key22": "VVtrbLSaKX3jxWwgAks4wupyTALpJXpweR2eN49L83NpqfHd4UNNMf8iinzJkMhSEP1k9JKpVpwMYM2qRtm7R9o",
  "key23": "4SU5nPSXrpEwHppedfhE38H8dRERiE7gcF3zNqCfzhnCjTtsCZwz8Lv8h5JLXJdxgRyo311mZDVLnddyu8JWCHK6",
  "key24": "4FGnGfrK16tz4qDD9rmtWW2iVUj7StZuJatAT1Kd3jLkPTa8dEWXv4ND7MkjsPnZKpE9yz8HX9YfqXpM42aFxCWw",
  "key25": "2JFheYebTRG3mRgjUr9E1qpULi2C2ijux1B8fM4HQFZTQBBY5vX4LCcXELgjV675JHhdazPa9xRGuYgUMPG6cxcf",
  "key26": "3n6fDSvJKQzzweP6Zu9F4gRu3PtHP13pMphuECgmGK38fLdgCXeDV87hd43fGtNtWmpzRTCwNKBYNw2aVBJAL1FU",
  "key27": "3ghagF59g3EuPoWeDo7hbR85vL5G9wyTpjTVgx7yRoTNEqr89Q7bPq5UazQoPk12mzJNZAwxg3QWsUuVwqRqj2dc",
  "key28": "3QrELSreWoFneTFrephWfKkjFxRV4AZwCb2YgfwF8pVjzGv4ab4t24NhNRc4TR8pMd4MxdvKLctx51Z8YjruxjPm",
  "key29": "2fNEJeygwswtGgPuXfvFazYRjPACX6DPTEGnhJRVSDtbw46U1EZ1HptMc9u72jGMURUKAMUncGogCBfbyYiGsHUr",
  "key30": "4vuSFYVVESSV91G6JDYsGfkrnSH26L9b99o6meo97GHZWftAJFF6tcLuUFkaj5xqNuz6rqa1Posb8kn8f4UxZwVi",
  "key31": "2oiFEgyX3TpXthgRVyfdtaaEY6ZS9TtjwyMvXSQ1coK9xZZEjMWXNTYXC9nzorgkaXriz7XnXUaPRRQnCwTXCfY8",
  "key32": "5kUNzHm6WtHFHg73U3WWEPyQK2iSB9p8gvrfX4Q56c35BH2gqd3TT1JcX5PCtYmEEt4jYxdxUhoZm7S2eSvcFkvm",
  "key33": "dKbzN859NTVSRj1kaYUjadjsAtSaHWdEQ4nkKda8kxqSzjMLnbCrpCA1AjtoHatBpgQKRdwnZXciqd6tLg4U3tG",
  "key34": "64QmAbkmAsJuqMoDuWfTEC2g6hiUyqSPe5LHcMZw4dXy9wEmLzVwxh1dGJNmyhVKzVEpCopWAVp23hRM2BRJ5EVS",
  "key35": "4Qp3gJTDvAFR5vR7cbzrHRzqw75PKqtbRcKmMvR1TzNiGwG26KzmxwWQFWRoKDzjJpXwL4ddD29JHoMUEFbdN4yR",
  "key36": "5NzNR4Sc6kaun2k5K5HbRXtm7a5eKiNze48JRBPpT5ercmpoj7mtpXFbQpmffnrrxMXiHaapT33jwvf6skCutnxv",
  "key37": "5q3Nifa1WRoCzKJe9poMyHQSwXJ13xDxWULVqBhmTyucJyKofxihnbPiknDr2x5fqgJAy842wtFpjZ9zrsRypoXJ"
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
