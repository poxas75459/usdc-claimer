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
    "3DyGGRya2TgcEyEBLEg2ek2o5UDUGx5PUSGUab32Wp74RHt9AjzVhiPkuuHKWTVdzJruHPAGv6FzUKkyrk8ngf75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rE4ReadSQZwRq5dR7GViPgiP1kE2nHfqAp8X7jbMof19d2Nmn6eJNy1SibjKsFQ5naT8CcfddF8Ma9RiAmVep3",
  "key1": "5FNhesNUgrBEB6Qn7TWcVGqeGmBqGQXcd74627qpui6Ekec333sjHedKJXBF7ZEQX6e6b79L29g6bXn1jEo2t7xb",
  "key2": "2BTzPxN9Ny43q4apug8dpNxteLqXmbGFkA9SYVeVQVSvKkayMyfW5rJvSnD88ThdBrTnacojDT3TYejUpcJMFNYs",
  "key3": "4mWYXYAg96rr72GD8nNSTtjtGEJuxBy7Fp1GcT5wy71fVQLN5raAEuwRf1nRbUJrrb1Q9is3QuNuMdHSxvTJG1gi",
  "key4": "3attC7xgKgW94rJ45aJpAdwRgW1bfmA3yWyd81L9Ym7XTKQkPcKxoV2oBgUwMF3PX1LUzfsBSAdPMsSaYjnjN5pD",
  "key5": "2XukWxw3XviaWuJrJox6GuqPNTAQM8Jtxsdm6m7qX6nQzbqBa8XufhUmutjp5C16KfM59JGMFG8cUbfsgGa6mZ68",
  "key6": "3hxE8Hp5C5jH1SEWECRCsMikDJ1RFpYfWQvph1P5G9PcttCNE2e9V9Vs3vmDn8WpkTePQRmRqJLYk127DaKcaTJM",
  "key7": "2gTQMm2NARwtgiiw4TmfiCTbWiirZ8DAsM6XixeXtdHoWpfrSPb4gcLTJDKTY7xkcPh1s1xYR1sXvu4ExT3eHzAB",
  "key8": "2269pTxZcUKHZvCm3yANrBVQqGHY7fkrKrC6nkujX9sqWxunuzoghXxSLvrqddh27WBdBQ8KWgyeTtWDwU8w8AWW",
  "key9": "4cfeymfkeYeka7CWoobgSnT3mC7yJSZQ66XPxu16Xd3xCxaPLEcfQD2BS5NZfpoc4MyiqehD8keEkoPXgD6RUmZU",
  "key10": "42SZUe5rvq8BwQRGE1uFm5xaNRA1Rc3KKdeCJTaQLWJz9sL5zpbnfxkdBBs792sNMp9d6SoM95dH1tmMZLNsuNyq",
  "key11": "tuqNBxiypwbBm3vptJEJd3b8EEYmvWi7v7J1UT5NUxjFvNAq9VmfWH2D45Q5qzhbXwz48erZmqSqkWmXKDoSifj",
  "key12": "2596AN47VokJFE1LmWkzjWLrptDnracwg4ox35uhALzFPvYs78MPFoXqkG5o5MGSVuVJEA6AFUwivkUd9HcTiwJh",
  "key13": "66Kt87QSuAyDQVjPV99mcqF2jNNfe2NLmwuGyuo4A6w3GvuqeYJv7SG2FrxN8wesE9Ga6QDq6LBgHReD72bRzHGd",
  "key14": "3WYQGkiJHDwkQGGxQmyxLfYzgJpvqrCi3HRNnGFx9q1JwUnVFH8A3oMa3obZnnFpfKMWgNWpaU1A5AqVU5ji6bsn",
  "key15": "3QNBkjoQneQAwPpBk4oMxeYpukwDGRRkrrLyfqi9ryi9wVnD5H5EU1Vg8pTV3mH4SFN4bTZVWLuQhfGopByVA3pd",
  "key16": "3v5vCSXMA3k7GSNnzirTQ1WVsSiU5EfE7KogFhqg47otKEcJk5SNKh9wBeyv9xQUFiG6gyvsU5ZwnFHbpVKAS6Na",
  "key17": "rEV4UWQAyhMQUqTkHKfjX3i1GXBeuBA4ctz1rhTpTo3dvfRUUshsE8xu49Z1Xxe9fNdGAf18yuvfH1NieS8giZf",
  "key18": "5VeukGsS59xy33z5pgRvRwzr9DU1ZzoLckTkm4eBpk9XPoJjVbQsH9rqPYD1Sv2ufQ4U1zv8iPfagT1xJP7b8Cms",
  "key19": "2xmmkDTKjxUk91enHeVuc9XeszJGWZ2qk2iWAu4fWtDvaVr2a9PBWGyAk4AhVanMpLoUGU1fdNMra14aRYrbXFYr",
  "key20": "5P4cVymayZxdkH3Yt2Bm1KwgUwEEuTUepLDFE7e3VQRGYgxfz324ZZqJvtxAuKo9Jst4pzLwmhVh9kQbWsKp5Sjg",
  "key21": "4MiqL5idy6atGvRi2Q3WkaBzwnMK1YTapvE5oWWkbNdQb1ZHNvgYCJ5e3NEnzo3pCjqxSaNTv1TPx4WSag5i4A6X",
  "key22": "2TMJR92CFJtoEkRwY9q7CS73ngxETk1nEz5D8pPNU78zfY5DfSc2Mz69ugeDve8YBeZ38kqN3bMhy4qS62KxX9xf",
  "key23": "4kRxsY1XUFJdmy6hwnPpWPDgTph2fWih5pavPixZvRW1oBZt5SkhKGMTNFJ3Y7CvWwMRBEi1M71dLo8WBvQ32ovt",
  "key24": "5UTbq5u6m4VRYh8GUdW46kPy5hddEubThCQTsEHGcS6ZGMntcw7PzpEWTh56pP5ZbRiSvzpe2qMiXUSiLJftRV7b",
  "key25": "46w6GobCKiqgs35iCUMWfCbFKJnqjCL2zbsM9khZWw3fYCiG8GxbZKwND6v9VA8PoLL8X57ykEgWvhy4muzqyAZZ",
  "key26": "5tvoYVSafMxKASteCHaERggxG2azvVaGZdNPVYMSSHQvvbEbRg1AK3fufN1oVvdMxSwEPyhjhZpWBuRLK93ubbHj",
  "key27": "2am1XnhjxfMyFvSfkxBP1i7FVYskBbtWVbweiLaZ2x5wVjxLsy37EGTuXmhrMo1nuhk3JhfrDcQxXJ6K1Eppepca",
  "key28": "3VicCr75VEk1TLzMebLv3m9fYmLgEk9XwTLSDaLfKYkWusVRZdQiv5UxuRrW6SDjmzLe9AVmodVeP8SVicYhWrJm",
  "key29": "3kkv7qPG7vBULdq2yf6TC7rDS6otq31BmUfU5AehhL3MpyEVdoq3BATmiq12Bdo9P79AMryQK9hzfBZjuXZdcezo",
  "key30": "62QNB6HUrkoPWvUomkwy7EhbpNnQGMq2aQYDxL2AAZmSvzSYr4nxuFnPAPgPmWomYJtT6NcycgewWBCWaHKrmzFH",
  "key31": "5acshGmeqWcXiFvXXqP6M1HeBTWpZe2V1Mf2v8T2Ude67ffWZD4eHvDq4v3kKgMqEoEv5FWYsqW8r14E8g7kY5VJ"
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
