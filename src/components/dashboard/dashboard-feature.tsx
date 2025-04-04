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
    "2ktdqdiqc9zLv1xNc75yTERwMxLtkQaaMLan55QxGZnBhhcax3sDRna5wjgGtHWbpbqyR79tfdoXwzkSeNmVE9pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vF9TrNrVoYYQPMWEdSqXCoeoVhE7dpEcz9EEkYcsrJL9PDD1Kkt5CcUbUCEmERnH3nPAYNwhLseae48Ab6He7hQ",
  "key1": "5XnNQH19cQLSshJX5qdpFeeHQZvGXPbDtc2B6MrMpwmkh8SQeWFsZqa9ReJZsevFfLh83xNUqu3yswrmfLYz2s2i",
  "key2": "wKHEC6KPHRN1Lhs8KmScVUTBQoNgJqgGLn6jtrBSvdQfSP48QD13tXu96A8XWQgNkA1pqZdFZhpU873qjF4Xp7A",
  "key3": "HKi8qw7cUhhNRKh85JhmAb7XCqn4GSrNLApeSh61oc3ajTvdvTx2t8RfvssvC8GyWCB6umeZWb8KH3QRid1C3vV",
  "key4": "5c5GZCn3xQPFVovopvom9f9Q5EB8KrVdc6HKV9Y2shQ6rezMYYGMEqMaDazSErqcKX6QYF9KhCxnNzfDv5nchs9r",
  "key5": "4GguWWfFjJEKT2S11ho8KoAgKYf7Giu7MCrLZm3g6Z7yZyMmoNoSayiJ1Wf9NpJF9UeqEsSmXFaZxGMf5foHTh3q",
  "key6": "5Gd4AZCeVGRXDnFimfFs6jPFRMDT8cAXmdx6gUey6dHWz4xoPzyXNJnKzGsZCAe6nt4EgHDeMSGdsHqPFGuPFR6Q",
  "key7": "3ZKHJhLUGAUhaxWubpWSCHHkS7a2asvR4TpsRUxFsGaGAidzeYq2GtwcnsKLuh1ZmtccN6zmYKSPCQcyv3zp5zPG",
  "key8": "2owiHwGt1cuKXexdU5Di8UYBk7U1AsSbF6VKu9yrCYELPscdonHdvGbWR1rcsJ9gQdarUKyW8H8SFUmgKjfpg4kg",
  "key9": "3vJfU4HPiVTzSup7FGdfWjsdoKT4c7Qt3ubvvvhVs6qwB4a5mRP2bhiKyLtZFanz2DKSstwkV5rfHqZkt1xgR9Bz",
  "key10": "eEUt7Qvr3QZpYt1USZ7UADgJK8536T7tExX1krkNN7KNghehbm9sGGvFvWkeovxR5USTogc2AmgTWh9X4pmrS8K",
  "key11": "4MJ9oWzjRVN9RqbWFZQZRQPQypVcnaBpyYRomTMHnto4g3W1jkwgx6nWuVCUMugfuZthD3EZ6PpWwXndrwskCmkF",
  "key12": "25PKn1Mj82Ezr4xBfcQ5X6gfg59JkaZU5F68MHQaQZPdUmc93vHBUudvir4Hu46BmkmwJtDSHJjrxrS33vfZwqAP",
  "key13": "2LH7LYcKAc3SR7gfMD9m2JSsiUqdqATBS8xiGWMifCS9Y2Ee12FhTPZKrfZNbWrrV2Z4foaSZQGxLjqeNmwjN9yt",
  "key14": "5FvSboH3mydWLUqRaEX39eLC3Y98dR8qTzze2rU82bLPFg5wgLZmt8ZZHUKzXNBx3EmCRdUY8Tiev4L5DvxnHhBa",
  "key15": "2fzYqWDV3Jng1JqgUzyqGQmgRFsmcGoUMis8CFhDv7FvWPyUZtyueSzq3HJxqnMQgFMbts76H7zhpK8prUYLqBoU",
  "key16": "2B33qtgaaFUcNjzrFvGJmqcwozyQ2m8bnTB6LrwhUny8qG3tZasx63Jg2D2xQM7EEAWhb1sAUB9xekzfz6r1uVCf",
  "key17": "5ZmoEV7UEAiBz3EzWJ1DcSghaqj3K4V8s5JAJ7nK9KtLsSWhyueGVj1sKdzwTyyEieTLeHUDvANBmXHzdRSbjeSA",
  "key18": "5VGgRbT6tsvF8Qdq3EYPaZ6mFrKjH9GuvkJxs8DA63E9M4kD3pNwQNZCFdU7eJuC83hnMzScEpatm1EfZmuUgvPg",
  "key19": "3AFoQqLcDJZ2r3Xcf6TjHizEkRFwwUKo572omX6DW1weePai2dLhLgV74NPh2x3emh4THzUhrG1fLEMSiFCJbmoK",
  "key20": "byFDuHXtyLyXRXrZhE5re9JLqmBRxuvWsFMx12534YEBA26WoUg8ze3aGczmU4n2bibRjVb8PjNQQG294GrGKHn",
  "key21": "56XnNmEtjRCUgXJ9yJt4XbP7WGPNXFs9QxZKvAMG4y8cCM8i1XonxZBSFA2p8nEEzViwWCUmpMZXeJEKhFa4qEUE",
  "key22": "2DW8SApj4Y3ZAENen6XzfoQbWmUb4MgqQvZyAactcFqXpqTXhFZ8edrkiiY67h5dRTwaABdqUEm7pZd9dbwujWat",
  "key23": "64dXxCUdGWSWsfy33SGJhTBVtat6T3ab8wPJUFHysJYCkQTbtQGFHWFnTD1x36dGKSCs4P74wiEAeAggV5CshN2E",
  "key24": "2zQds6sXoDJ4YAcPCKLNH6rLqbp32y8VUi2PwGdB3RkqXQcmfyeioeCZy7vP5cbEjrboKJNDRJJpfnDGG5fai82m",
  "key25": "2fe3sbDS38Jkr8QVQkSBMMG7UXpV3MoWnhHyjsLVtDRUm7GxjT4g6nft5kopg7zqDTchZjFT3PHJSfkDKe5CZEUw",
  "key26": "2kcEhB2NDJUJfj8hmc7vJZCnbuzPRtjM6rifgCrt4262rbMHoVJpDJ14V6i5Ygj2r5qfSDsQWAYBGLUuPVV425Zi",
  "key27": "37LtCTqqEXAEHTX3TPyRbAyj2oehPqk6EQZziHAHxQVgASQEQK8DHc3FjVYe1zReisLMdXPfkMZfbm2Hfxfiw13E",
  "key28": "4uEmVz8e19omywRC6Mbojza4RS5QNNu2L2LspjsBF6DqU243WVHaGQDjFqQXFmrgja3TrTP1JZmZwJDC1tHUCfN4",
  "key29": "3LmL7iAcyNPqzQWXmq9dySQtAUfjEKjveWAVmFH3YaPg3EiQBq19x6rMPhMD1YkTZDchs9cRfac4MgexgvAT9wwd",
  "key30": "3kdVKeSbayNkYHXwmWfCjfdAC1fCAUJHVQB4Gw7yvNLkJVfqEm3MzReV5531CA3EU6k3DSyqfzDyc2DPwJHvAkKT",
  "key31": "3idQwXVwh3cH9ZPRJ5ryiUYkLxz8VKDbScC5nYSnYuKCNib1zb1npLrqamz2FTZeKtD823ZZ214SGBhkZ9ZfJeJE",
  "key32": "bfwndbFr38FFKJpeocvJNSv9gTGexgdhZeJSEeMzLANu7KXnr1tmgW3kVwwc3ZJPeGNQ2iV8vwCZ2LiMFtKYguM",
  "key33": "61pKbUiEyb5sQ1kQGyMrUjTkegivRBBNFnf5MGbf1mcw64JA5TFDDAqHgw7BucRwrxdz4uzVKK6pfRH5YMVj2A5S",
  "key34": "V7WajeoQ4PpdqBFUqew7nVAxyXUiH3qGvyGK8ZRDjAGMNsN4gVAKBwjfDs4ActFidgq8Qu9jRHy2RNZ5m2Nq4uQ",
  "key35": "4HzuTaSbpTbdo1gxAyw7JNfozLG3nbnYF8YHUw8bJV9Jec3FpAGXrEhQkgv7TwjtvdhqHigP4Me7yBRBEBZoMko8",
  "key36": "5CvcTYbaaSjh91K4wgsukJi7NwFDMGGq3ZfbFoXF2YjZ4w2XPH3xSuobbLUd3CYiojxXjbQmgSJeKMBHxbdqSuHe"
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
