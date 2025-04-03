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
    "3UCnGLVa1yGUo8RHPpGa2Wi1PrL4oyBEc4kh357GmVaykrLHaHi5uesXw4qYedRBNhCT7ySXxrHEBJEaNFHmuU27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtbYAZJ2zBM2Z1gM6dMhaiETKqMCvDXxLt7qevt4jWQ3Pkmb72wFPWaawM53DGE8e8pY7qjagi7ymJQt7qSuNPY",
  "key1": "2QC5fWUpmDV4j5EKiyzjcS6P2o4RFvAWiYwsKexkctMh9XoSmNddZrgH2JAvUJiKhgXiu1eweMsTR7kXJCHbd2XV",
  "key2": "4rnVBGV1QhGGzi5wLEkNihqjPVNp1hMZPR6c7JQSSBLx65qaYu4SpjBN8iqx9ewKtqUY76Z4jTyx5FEwGQsof6U8",
  "key3": "4SspT9SqNRyUwEfbNke6Fgj9KpCWGaK3mrVgCwucvUp2B6fjTi16Twk5fzCPz28dn4m392CPZ8zH9zTL4qXeQBfV",
  "key4": "64V4FYtiWanrnwE76YtbKhrW6UNK4V2DHvqWwNnjhnFqbeEK5meJ76QnH1XB5Gsn1NqD7oCCtyZpSPQ6wG8cQpkA",
  "key5": "2a5zWWoKYZPCHkvBtHtB2Tw6KxJeZTChoxtQv7Y96F2NNi8oidWKt99q9ToCwYfaFU5ezG7bfoshF6esWC4hyi5v",
  "key6": "5U21gD1G4NbiY7rvwT8mWeHZAJpnL4aJANcSrEWXQjqvoqZosGEY5XWcy11aBttLQMs77z4TWpAvLcBf4cQt6jLQ",
  "key7": "2M8cjrsDSTREZ3eFUPbuWrKXpDKNEZPqSC7p41JJ8H4imQAKcDY2bghe242WJX8i2psoAmUcTCHrhFJfZdt8dQ4Q",
  "key8": "5KfmTzEEhiNVTue6LpAwf7HD4dqp3BdtEN51pFowZBt3TTe9vMhgCNRsPmXttq8rYRAbGyGAAF5M6tLY6Xd2af88",
  "key9": "d85pzsXzu1gnbPRohYxGxF1FLNCSi1h2qYsiSBEnjmx6fjnEajty8zoopggKafeBjRTUHnPY1T1ovMBzUosY1dm",
  "key10": "37JtnB72TXoFGWBUZzdjfR4qdgVGKFZbMTQFpBjKyad4iGYE23evMceYAJjXBVEyDUhH3imZvPmhj9571Lwi1UWo",
  "key11": "6GLDgVrWsjV85omP5Z1mPadKR5tem64QUVUHaHdWtZj3AFPmS7THVaD6bTxtrFadUJa6bag36uBMu5B1pEuk5og",
  "key12": "5p6NhY5LW51z9PJbjt8DWxQaQmwavA7diT9xQdWxSnd8DgCamiswwHSgv2ZTNNDLRxQJPB2BnqMrPuCr3XY9mjhu",
  "key13": "3nGckNmdpDHE5yuyYubTBcwQepBewaYde8RdvQGgXsUPfeqfAxD2CUd3fepsJPemFATtonwnAMYFagmNz98qZPe9",
  "key14": "35kcT72nZB2F4QQmTPtjwdpqHjFEJQSmnqe7AxENERJkqwcSkeELE8RhrLvUDzK8tN7oVQrW3bopPGFLs4sJeB2T",
  "key15": "3KpsKwawAKFxBqxrPLULYS7JsVDLhQaFsqpe2fWnghuFwxhaYvWWWKVgyA9VnaDDdimKFGp4SejVBxkS5RiaTPvR",
  "key16": "3bs74aaGrzyYyA4Fg9TMsxdRBfwV6md1HHqKvsy9CudoaabcUYnQ1iLbFNyWR7qntGHNjnkuaoUSFrm8Cm8fUegz",
  "key17": "2xQQ5wvot9XLGdkcXX7VC2sEYKtFcuSpdD9dUwgv4kKMLU9xYjEd7QnLngeZszHEKQhqmbMFWrH3Hh33BJEE58nE",
  "key18": "5HKcgRn48UgZyFfSEai7XyEPYxZdxse5ZYyTnuueC6qeDaPxFzXLoZFQjRd8VPSd98cwa4d1cMCuY78RnXSN4Vh1",
  "key19": "2B2EYChPLjNHgAeDdTwjWbwjJhu4c1c1X2rZdWUQohmgvjKPn35B5c9yPdKHmo8mppXzCuoBDRmBqWiN55WAd7CD",
  "key20": "Tq7Kz25qWBViR6NbpHVeYk4aZ2H6p7yk3sRYkNn7iybxpFYwYX52cN7zVmpHhmSzUkGEtKHM53YoA9orJveW7X1",
  "key21": "4Z1jUAL3MWcZFdewSEWh5YjNHHkeFZBWDexb74RVsb3S1wG2WDye2gzHkGUP7SKXNP4c7NLnVyFRhurYxe8CXKaX",
  "key22": "4WNB7wcSankHjzrCGX9Q5iqhcyqEJXYhLfV6TE1caAKL3VHCs7Dt6S7y7tJ1RXyikqvBNwbswosQ7PKUBSJeKHGt",
  "key23": "3hubUz85HUWGT1KPsNqoyEoL21aqUvYHebkcgmMxXrBghxxD6vfhAuiZbctt1jSUBjyJAUcBfcbffLjfpNFrg6Du",
  "key24": "3L9oKHoSnCEsX47PgTcLSTiUxNQL99ig24mvyY6uCBEz1RodJKGZ7Nq4FXZSofu4vkJTpSya2X27cjdLGiXGCbFy",
  "key25": "PtmQ7sYVbHfjDfXS5igv3HT2L8MZxYfQSpZykUqU6UEnHaPED9qma3YZyJmYgyeGKuoZ5XzFwxnQEFFBEmLNPWH",
  "key26": "3WX3cUovn6UBC97mBCwbWQnhkYXUf2Vp7fuxkHpKMpvhaqFRF8LTdRRseMNShtn3qB4AGgDCPuuJB2hu327a2CGD",
  "key27": "fxirCJN5DWJcVbTFhPFCvnmqDhLMCLZ5aNhjXthcPnkf31tz4u6JDJjdf6oxmRsm3qFLuvMbhqwDAKdZu38yCrY"
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
