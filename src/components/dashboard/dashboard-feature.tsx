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
    "5F6PxwfcAPNKApPjhpN7VWeoT1pFdZE3fJhbEh9VLeDLk8NcGzAFjkCqgAhD9pm37gLp1P8hWjtPWSFXhyWyBztA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrSjkv1h6G1LuLZZpzpC6MB6hFmRt95n4CcZvWTAj1JSeYNjgP8ab44nFGw4Uo7kGV1HMX29nMo7YgdKGFY7Nak",
  "key1": "52HR7c4QzMjyzbwojofCZiDPiqipJwNM4GRD6K1EK7U8ocZzYqRm1EoqSCUeyJkR4UNHg875vmowt5th82WyjhPa",
  "key2": "3TuqFcf4ybWA8V73An3rmoBJRjo2c5nT7ba6MRSrydnP5tspf4CxGNizx9mBydHKtTWKQ8jzLuKyB6vUYyjnxsnw",
  "key3": "Z5YUjjxcLUhMgLprnEx8NMsYd89Wtu2uWvEkFgJUd8LZ39sTKs5k8BqUfCg1qUZTSG2FC3yNoZuq2Pa2Wf3F8Kn",
  "key4": "VCnCtiSpwbtP7uCKWs8DBjTTA26VtG189Z7JpMsxoZgTbndomqnJpBjKPjAQqpryoFhdRUuYKxPCTJpeZMC5xih",
  "key5": "3jxF64nXM1U92Vz6TvHYUrxtzcoCJn8yR316pbkn3AENRxCkmBBqiCTb3hseYsHVtWwz59LKJm7UMdzXBCZv17uY",
  "key6": "4G4Qaj9bFbP3JLKEdPC38PzsmzinWDtc2LmjWXztcUwxgyb4XyXJFpEAxAH3d9sfA5sf4ibMD7MbW6VLtsdkKUMw",
  "key7": "3MNgA3qxLN1NXA7U3NgVEAoKYY9isYNRA2NUAAmUbjVsiw6JyGFHqrZnedgyrhP6RekzwgGmW5jPXtU2U17aD4Te",
  "key8": "6iG2TQ8g9CKhF8FdgY5rDFq7MqNrdrWzpj4PbnHEptNvPm16iQDMUbchdQVbDaUKqD3kXp5ycch2MDZKimyHTrG",
  "key9": "2dFby78nPLrWr7HpBDuNyA5AByetKh3Cv7Zsca3gs3LuF9uyERDct2LupLMiyk4484wduo4D1ERqUk4MBk2AoiJ3",
  "key10": "5SW1kD5BXbuZVG5DkJqM7NcG6jbhSY51CurTh7kXHZuUargfzAqywyPLGErGJtYRpL6etmRxP9xfgd3oqvTMSjuC",
  "key11": "54tvNvc2fyBmytDrLLhW76BKDmt4XDqy8TdFrDxXgbHWMwQ5fYq7aKR4e4h7jg2FqAUsDGT6isUZrHxkWMkVXJQQ",
  "key12": "48dQPfmuD8V5u5gheZmVNvxvazp12DdeyX6UmvWPmviDw113BciWrQPSE12mQHEy5mSqu7uGhgcs4FZQPB73bzj",
  "key13": "EfR8qNDYTYRczVqeSFcW5j9FWTdrAt4MKK4P21s75znTYKuHpRP1VS6b6hSpCt82N5HAzQ5EMTgLKhzE7nbVAGk",
  "key14": "5mnwKHarG4YBFnHeRbDLdwgyo4fRVqvVMRMavJqq7CgifrJ9fcFvEmM1asCkwyLRFkoDoyEDcEnr1jTfZmgFXURn",
  "key15": "2BF5Z3bG49yYcemAZu8tWKf4pH94TamXi1fK5Rjr6KnmPqduoR9LbXN34HRvru4SJktEf1yVtwbSSLsGwi7SLFYH",
  "key16": "zWeKDCCKomSDchW6V6C1DymKhDCwfGpwKbsZMUGyDiTmiHpAGXFP7Xsnef7tjrnA4CrrFRUAxNUcydKG6pHxgkZ",
  "key17": "5nT333P5HqYtMHiii2UWR5HHZA5HFNTQ9Ux6oL7PtfcocaWXTuDdFT7Wt6VKRQTMcEbdc9QcC42StN4HChmbt4g",
  "key18": "3FQM7W3gbgX8xQ3tfKPZS6fGCTbnrTeaCvVHc92iEiNDZQj5nwHXjP4MMKWfGz1mmdcgAW2UxhFXMinRutSAs8Zv",
  "key19": "tNyqQuW9W5dTK8fm4RdFR5Qk5WdNYsqCHYNQsp8guPqgpRGZLgCiRgatGkJQB8eB14zJSfaZ6Skh89RK6YkbmzJ",
  "key20": "2oHsMNYGa7i4JEbqtMqKp6nifruRMVVquW5Lsx6kMWSiCyMhgXULqbrvLi9paAWcZWS4keJkBYaCvXZEcjw8hNi4",
  "key21": "54GcReq5EFqCRrbqmHZhcHixAsK36TYa6oyvd7Byy61tcywD9DrUdFTX6GyBsvj65X6Ez3apqzXNPRfjNmijcivs",
  "key22": "122NL4oq2mz7tAfqwHjkzKCmojZjXSnfM4SGBPXLf42xLDzNMFdN5rPJQu1tJZi5UtjgrF8ztJpoexCNHucw27eW",
  "key23": "5uvTGsUDdBBCdYFZXGfArfuqws85EXGy7aUpEHduFiNYb1eJUKQcEsmZaM4dCuBnedn1RxXfRh38aQomUMD9i7nV",
  "key24": "2w31oaKiksdVkFZjSCmNj1p77DhnyP5TsJ3yxXi6C24vHTdPhYA95SAcgB3a59sUQZLkM4znxR8T3tutreFwYagM",
  "key25": "3kGcJSjUgrNBymLzfjZz1pgn3tC1wKwVkpLKVKTEViGWpt2KZ4XCby4TttUV5sZu32YfazXCqUYc6KUUMz4AujEt",
  "key26": "dRmVCM1EujStys2zBPeoAk4wcv2jyERALJg6Z1Sx1rqe5xxr1vruJY58Pdn8Cq8R5nRWVgRwP7DVbZDqCZShShF",
  "key27": "4rqiJArCfyQm5a9Scq3c2rCsVmCTi3MVGa9nTVZeQijxHXX4RW5qYtNFE3cUKDcEVGiofHy3N4aU3WAWoS97NM3L",
  "key28": "4rei6awSYZBie8M8FdU9Cv7LevTBkuM291kdptA32KDvrLWGTbsvxNtpZ1gMwMAND1eixumViMHNz3FtjnNNRU2M",
  "key29": "4aN8xgbLprt9tjminQbhxfcnL6dZ3gpDKxviuQw1VuXGVTdZbnwBDmDZrcpM5JjDXJdSLbJsPowCAFv1BJNavuxE",
  "key30": "2fbiR7sx5Ryi5ZhMTzj8928gJc5sTDRE1q7mqqeo8E4Q93XipScSxttw8WSAgfHTBetskePD4vcWR5rTUFFU4GFw"
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
