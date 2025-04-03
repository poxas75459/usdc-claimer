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
    "4XHdHNNwNWdzm3EA7wn7MwzDjvPZkruczc3EQdzj1gAeo9kfm9xo1vb7QvbCjowfb1ZybWg4EctZobc6xnXvw3rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WumyYauh8WFfixNbdb77PAnRHvxrSpa8S5iHwcjDQuy1jwv5HuaBGYNqZEHVNcuCRanxjQf2e8hpewB7DWjRy7f",
  "key1": "HRUkQGbjj3ZKcDtzhujCguDRPaSuWhzPQtZ7VqEfT5582mrRzQVv5hbY8QbKwmRTDGqGy7mydpjTeSLCMwyCP5j",
  "key2": "4dV3ZQ9jYe4UV3TkAWh1R6A4Vxe9B7LABnNz3PJxkkYWRGo52KFw5NHdst2FWwQgWyfxVGWVkZAcxcsygTf7Q12e",
  "key3": "3ZWjycmh8PrpYszyCGRoUGTZf2RpVPFbRdz6JHq7ZMriDM7ycrSxzacyWHXQmX3cQErdFNMZBud42QCWyywGyumq",
  "key4": "3BcEdCdCWiptcec3FcWbWFj4KunfRTHR8HU1mRHyaR84FNeEFmmx2jtpgMrBgZrsymt2g3kMdjWDkdDQPKKYFfya",
  "key5": "58Hdzb5DWg4dJmWM8MJ8dHJ6cEtQP3QN1S4YStmxP7jupGmV2JUEXs4Mb5vCTLiQJuHawxQLL9kaxGrD2Add4yCL",
  "key6": "65Ur6gWX1DX1xVTFqsMtgN8qz69Bg9fTLVhVBvcE2gFbkFAyEf7hbxdMb2979wunu8whepvikM7dGJcKr3oV5LYY",
  "key7": "8EFrL7YMKLPeeQm8HTn9V3TumzKZ1BNwts1pp31EUaWN11SL5wRgbV4FKWccf4nU9ahUbyAcA2B6nyKUvAFXtzJ",
  "key8": "2dwffpPLqzJPkGGcsvLzWye3hisZ26xdrNtzi4U2ARvsewPoNEzN7vP1upx4dwVNcrm5qBiKqygriMbTQu1mM4UR",
  "key9": "5C9u9gFhwCVwYXyAUzwAUKFZRkDmowgDwUZB1yx455eiGotgAQbUtXiLCwPnMcDG45iFJjCkkxtqsFkCLVsNFpUL",
  "key10": "3BPe6iZ4pm8bxuwwQCHC12z8jQApzt8gZwBwk7ZzA2vRKnJRJFmaG6sVYDhvo2jD7scuordTrpXZpeoTHiQd1we6",
  "key11": "4nN9AUjfUT7BaHn9amDY2vipUtuA5m849ydWbcAvyWp2HzJNbt244udCzScAb2rbEVUfQ1JsQiGvR8oBm8vbW2hF",
  "key12": "5a6SufDcWECTXnq34FUy9wthdCQ9k7ZSmd8ALfqkPk6frft5VzuT3QWxVFJeCEoJJa4DFW9FapCmXPyq43Pq9nM4",
  "key13": "3C4YWSJBS4xZt38GcRD2QaGZGMaHyH1oqChVEUumDdkwGhjFVkDm9PS8YrD6wiRqXpCS4UvZGaF44sgoZuazweVL",
  "key14": "3mVFhycyzGn1HHjy9cfPY74vnzf15krXiSVTRD25VDAZtFo9rjy7DxtCUMTgcxfmPQs8R8PLMyFpt5JrcEdmNWYe",
  "key15": "3ARAkLMvjE6TQWNjK9ZPdb53giwLVcW1etgWoGDuZz84eDM2UEFdNEunxGs3QmuE1yLRvzKATnKhenk6zxFHxFAH",
  "key16": "5FxSugxbC5ZaW9bZ5ap582exLv9BnFHYC9crirE31cLPfJp2tKUSxMsqpPWCZk8LAnNBVanwrezsV7PMykgreb4P",
  "key17": "4h9f8eEmDFNJSy7Ybdp8sb6MeaYEzoY8muN7EL3iaBckAeQFoA54PhoYp1xquPdLCVqkTLqPLRCwVjS6abpT67zh",
  "key18": "5SFSv54CxgaUFTd6ZAxPgas3JobSZjRapmjLvCCYXjunKGKmvEDR8UUbTRyAjtRWVmEtcXtxmejhPMpV2QA4XMsT",
  "key19": "2Y3BTgCbXowSWr9kd4USm38MAuaRM4bP6Sxy3uvbhhZdU3egEma6qcCmnFaees2R1Gjw6VpVUxGEVAvT39a6sUmD",
  "key20": "4qZU3s7PH2expU7dpxEr9bBU7rT7PDJxM8BmggmHBdZcsqsDYr9e2goK4KnUfdXfzv3V9X2szyY9eoTQZBRzuKB8",
  "key21": "5GCJR8aqfozsP5Mfj4bvWqozRDFSHKn8ywq2pVtiS58VyV65UwenABXdUkbTpeXFzdrppMXBs6uqt8wBi3jkhyJd",
  "key22": "4CLruKQowEfs1XcFZ1sDn4SRgaamq3a3jHoDPok1LektjpuoT9YyAqwXdF2aTFYCftFa7L7751bnxaWfSGrY52pu",
  "key23": "4wWASVJjy8YEAJndf9eds8LSfzBE9WM8LMNE8MkPMfVuQB5cPGykXiKi19wDPhhbRYZowy9UJHXVpHiTc2DhahTc",
  "key24": "2SUcQT1Nzv56BqXadV8MeABMMEMMYvDB3taWqcxZ4onNc46A8BGEoryy2JCCF8WGJaSWJPcF8nWry5a97C9JJXAa"
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
