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
    "4DiZy26HnfxWee5bsVr2s77ZCbKzURWQDfw9TpfRtz8pjpTTTeTQc8yE9MUT9ycFAPSsxWqdN5Kk3wAWYkArSZhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Exad3WUFe2pSgCqGhAmMVd1ADkiAegaty5pXzZF31QgxKNFo6ufBwvY2nryZHryMSXQxQmdfW4UQXrrt6aoVX61",
  "key1": "2fZb4YGGwBEoGWMVnmmKaLQFRnDUZcVKpfCkpSoZuGR5jK5CSrWCasiFFYTwEcv1Ze8bzjhXaTDhEYwEMKzdEGTz",
  "key2": "5AaRhwqQ119xGjP1RbTNqLBc8Nyd5CQA7L6HZwx1bxx6nba7onvw4qWHkEUWgJ98BAMpWyjLUtP3oYjUdcDL1AnL",
  "key3": "586GTDqRpXzHteSDzXgJAyvBb2kWnm7TcEERkqRwRms5VNFq9WSFjreRPgMbnWxsyNQH3jMUTmoAcSKgTBz7kcDW",
  "key4": "jokLWoMo4otKcqpyddNWbyMAcZyHMNTduvLmaAukWy8rcJ8PiMvHf3bBf4jF1BH1gJufJYmyDxHJ4kEXw7rjsYY",
  "key5": "3oVgYSEKqYYam4ZRHh7WwMkcoC3FGCFosy53xjViMAmqreUHF2ABqBzxgjQ4ZDa6pkPiRnGggQj49DCd7vrQHdxn",
  "key6": "4jVZF94k1vhxNHnSrFMw9G2uHd2DbB9zXBhLok5yEjjsYeGJk56bTVgebDHysKia4mMKNi5xibuH2B8Cieq7Ewic",
  "key7": "5zuT1dicyDx3JJEnxEXaCWQZfxbHn3v1NrkPhA8JEAv7Qq6hpwA6x4mnboaEbPfRL4g5WP3uFdLPrQDwqPaDgb3s",
  "key8": "4BbQwKD3jaQxz2Tq2H7zKFaPr9vRptmeHksR72YUbyDhoQTiKGezGCgqEbudMcLXVsGaJEFBfV5rWqXBxGJNtE4c",
  "key9": "3qbcNPb1NDXa7vwGkn7RWzBd7xyMJ1idxXYfEX3PE2DSccUynH87ox8AW3BX6hZhpXfYxTwixygNxUduo5xai7iS",
  "key10": "5ecAQMhZuRuRAjK354ktK2iHAeYW1XpFrKrQLwEwZQ5W3B4Ke9VDiY3joC8eQydWaBUHZ3Bn2t3u1y1H9KNvuojk",
  "key11": "45Cdjpjama3xGBkgtVM7gmXkSiafxGBayDzv3CPqpkG7bkVXbKSxrgikSPgJEjtvy6LHzancSremD1iB99pPqBRE",
  "key12": "3tQtXY3uUHjg4s6oFLXhNasNgGXfaJop1RuQE3UgVWsnkD1RVtaLu1jKUDQC1njp8o8XGLKzZfeJDhPEUKNa3mS3",
  "key13": "2jZkZ9K9PeiynMNSCkF2R9Zxp43EjbcpC1GTFLzWpEBx82STNZaos68LovsrXhryKuBjj2yyx1jCUCxx8F5PxkAH",
  "key14": "4PgVZXMQewUxdG51TghoGiGbzB7Gbt9mbrZeZNiXeURi2j1J3ktKCK7CSS41vtPRsgcsLi8DrRV9f4FCLGjAnmQ1",
  "key15": "4fGwTyivsU1pFjcnaaCcm49Yrtw1YAqyJ7wtFUzEYF5q3XfK9QsApQ1ysW5VNJe9H5YhouKfTQHvzdDB5s5hsy9W",
  "key16": "5LkpcQkX3tv2TAAr9d5G5K275yjagFL4zKBWfM987iXUNitVamXK9wpWHK3N8xX9Dned1fu1GT1BhVLXJ3JkjHqj",
  "key17": "3JYapKJ9oPjPhkcN1uX7iYzTiPXaHw8yYhiS6aPCDNFJcuYK5NDThzA358JL4hAD7FWwGfUdyxAsiYtLkQRZBrtK",
  "key18": "3B1bBAXw8x1PDi6ycbaNM3Jyqiq3jhonBxzpb5QH48bn6m28RZKvpaZAcHonyr5BmgQ9xXoapBTpbGMq4aGJUpd3",
  "key19": "4RghYB4SLUu2GiFtJoaQv7ggZzQozdiFZT5e6zAZ9AUFLiNCp49VwWws5z7SAJ5rHrGRMcxVqY8WvYzkz5CqxWe1",
  "key20": "mfxje74C2M4GxM6LZwcjTz23aSK7h68EfKtF9sSaEZKWpTjy97Jv9Eu9j2ZhCjqasokFfZwCWAzKqAZT4K6nciq",
  "key21": "5RbG76Gxb8MCDaXEsD4d71NLQMez3air3jsDk7ptcRSEPfM8XZGo3m2SQsM7tEzhqjHZA3D2NbApdVcBULA9otW7",
  "key22": "67Dah6BwVP5GAezTXLuT6NrCR7oLWkKfBcJs6VjXLsKJASy6B83yBDUz3wsws8V66LpmwwFK9NESHbTqFhPG61bE",
  "key23": "sJgmodfUz3sAM1CsJsp24bmC3fqSZJyXAsuTh1zW8U8xXFyLxgJyGRzQ2Ccyhp9Jk2auehavjULwAvjxADoj9To",
  "key24": "2NCUXnX8Mosgg5K5whHCyVXezs89FGGLDmYeXtUoBRMMnCctyPMt6vjwakKq9XNsH2EA3aBFYeqFMDP2Hogkz7pS",
  "key25": "aYDFXaCrASoF1Ah3UfrmeSdhT2JHf1K7jAECC5ySBzDWmAn3wcafbxD7sH5RpThV3rGqyvGLTrWYdQX4ALa2YM3",
  "key26": "4v7kGSAWB1tnrC64pPzWoMqxaJGLSQL5qRu3L3GTdyr7oYweAPtjyo1wg5KbVDNEMVzrdXeC9LpsNY9vuKyNUU8K",
  "key27": "3DXBHV2TtKn89JQCANmMFkoPLrnqsFyaJKmT3geKRvDt9V3Xq4rnPjMtksqadZ3qJc49Fn2E2NTntaz3hSErMXmJ",
  "key28": "27PXu4e71CjgAJjwPfXe6c54DSycZ8deCWU8y2Qcw9TqAcTmaTuXyNmQssuHuT5vViXVBfYXkBXnrKRu1iAE9mji",
  "key29": "19VoyX3jp67qevKn123mpjAYCB7CXADQAF2HG3kXYni7fd7KnpdjyZwd722DSuLdr4hz6tpFCQW3Tb7xt6TFLUa",
  "key30": "3cHW6kJ3jk9UAY9GWcL6SJYrTq8RVzy8azHmHMokJckP3nWvYAu57XNCD7ntfU81nZepBpK2tq7hftFdsbj6PH6L"
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
