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
    "zTL5GXbBMXQ2UWxrSARw68BP6qmzah7UQ6FfTpKtZBrvA2LsE1YDfmssL3Esv3wYwGsnSmoGkTY59Jcv1kbzdRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZnsKzBeFXEaf1xh8EnqaDxPsydoMAEAGvJV5b8wscuDpo7Xf4w3yqU4pHKNSvUegR5nwUQqnc7PrJbeqAvoJh4",
  "key1": "3aZNQK6fYsxtEy1WEGn6oC4xsHSv5Qq5ZCmRTd7k1Yujnh5BT5u1xsFd5HbCkV8FMndoETJroB3SDFgJwPstsm6J",
  "key2": "3pCPv76DkY7i2hBBVg7ncmvF7vdBDf4cve7LpE8iHMfKLMWD6cz3mLHcqNXR4JteX6ZjLr16e4c4W5R1iXqm6zHm",
  "key3": "5vTZ5e6gWVdnQxLp7ortL28YTaMRhebqKspp3ZXgmHAPaBnvpWhSWKcJmJJp22mevzEWQJF6Kgi1nSt21FMghQdX",
  "key4": "5jymotBGauGUwekurNgjsYiNKxzoox6ByED5P7Z5aggtFgW2YCNL18rLw9fa48q1eVv3faU3fcMcfviMC6JpTj7S",
  "key5": "3L4Bwdi3DhKa1fZNzmeXsyao2vnSVZTbWr6WRUhcVTQaeBqScdznaRqJz5kZab6sBmxy1xPgxvme1pB4jbn2f5VA",
  "key6": "4fAuUza6TKpwsF765dbmfZe9iWXBgPa6SHyDUJjMJftcRnPMFqLCYSuWcbkrCw28K3GHyjV7ehv6K8HdSy7HFnCM",
  "key7": "21QQGUerK1iW2MousMWesotEUnFD9ofF1De9wPjSJPFQDiNUQgVdarYsGSAK58CqyC1ehbhqtzRzRVV9Zm41wgZE",
  "key8": "3PVeq47SA7AEN6dnMB1rDKxoLvSiN5hAPvnFEqRoSo4aze5y78D6FeFz7AukKPPmb4xV8fBxp6ApRvVs7DkmZzLr",
  "key9": "51Ax1xGahnfM1HzLdkKRthfnTNR7auYRX3cmv7PSZJPGp1DQSpS5g9r5T3V8NVtFLRhACRYVyfqdAtXUiC9MQnTR",
  "key10": "5w4xUMZCn8j85fn5nxs1dRktr3L2AkigxugxCDHvDfbMk4oL4rLJosLNmybAS73JcEFCJ1T7CR3DF6WXzhWSBd5T",
  "key11": "4YvnqYfdXWNU7Hix2vvhM9CXk7FhEpkrKzkro34Tx6rzZVwc5LAM1vW4kctpm63sJbL7TBq5R9wA389pcv3qThtG",
  "key12": "9uJbTmM1Z4jC5XnqJKtXX2F6pNdj8do6r83M7RsQa342445RXsZ6CwMpmR7ej3GYf9zejmEB1t3VM6h1JNd9v5o",
  "key13": "yFP8hX3XsXj4zZEa1DLNStPs9WGEEa3ceoYRGteos84xqvM4Tgbn8iwKTxFwBxCrASRX3TVHsYw7P1vHvskKP6r",
  "key14": "5FvH766XFe19SaS9VYs5Mp5k7sfDi1wmVScnZZ4pUuic3VnfD3yYeYYDsZFm7ZMxvahgzfxZ6N9Pzu3myU3PhABN",
  "key15": "4pdSYf3anPj1c2fdRMErY2DNMzzC8yH1eRhQncPNqjE9FKCe5MUZENtUwda17GF4TB946pXXhos384aFsUR9RuRF",
  "key16": "4Jo2ttiu7ygjcyABbRsvV7JwMEeoL1zZFUwvMPjCqvPDDTYKUZsEQwkyg2eebxHLA6Tz4d1B8r4eGUvmPYnE88fU",
  "key17": "hTFSVyAc7d8Z9of6EGfy4ztcgyd69JGNc2PxXobMqoVtCYZH9XmCW3xoXxh9DyPcxS6W39a2towgGobSiMFyt9y",
  "key18": "2omt3BzyBHrgV7BiHHRdb3rcacBvMnGV6eim34DT5ya4VuQCeQ9GH5gzepT938zFSSbQki2uRir29J4mtCptMkXC",
  "key19": "2twdyWKgpDFHtKryAumpTyFmo7aVYuDKKBYdYPBKcTZfB6wuUMBPmxUFWo8qsro1XWKh35mWEFY8bUffhrzVpVJC",
  "key20": "2WAS4H9frdciFE9UgQdaUp8Q5fmXDCr8KMFHWW13EzjLfnmtCX9JL2THeiLxPFNRuAzpPKX3fipCj8kPqwB5EzK8",
  "key21": "47MUoyPHJeRmWGZ2aY6woya6HCJA2kq96eU7Pog4aQVvY35BfvLfLwepfbkFc9FX7GpSXqRPpyL1TMKowKXaDPfq",
  "key22": "2PMakvv92AGrGbN9a6CKvDf4xmztdbWHitUkMigT7STDsk64R75WQChkLqNXNk6HarWVKFJjVeGrycoKqejYFXAw",
  "key23": "5zmTdg9DPE8YkH9MUDmnwTtCXeGu8pqtzCpKfHddsCFk51GphNqAxWm6DrwykvrtxHrEwjRUc66TR8dLLq9WXvax",
  "key24": "5Rm2CtBrJocFTLWBdysBNFXD26S5sU67BK9BaDBXH7759xCR4D1UbYvsRsB4tguD8SJf6xkuaoqtnetqTLzSUVyE",
  "key25": "29iQLLGDfoZJY8rg6KhNbYPUEQLHNzrqZGDc4f7JQjmiaDqgk1CKfjrY8PbwXixJnZNTXZ3KsMJhjXLs4QeACxxt",
  "key26": "5LzUYZuzahsknFox4A4weVmWrt2Y1WiLkzagSyxhnxhwprfZpm1PWSj1M2ZWEbmeDWhcDB3v1jDBSvWVUttwz3VH",
  "key27": "2FReGvf5xHfpQiWmbhZ9vf5ZWfNDCXqR6NFjUquk5rPkP9xcmEhh8m1F1ZDm8vHpsbzvSCuHKYkR8xSR5WsPtgAZ",
  "key28": "mTTAsM7oWhZ3rh9GMBrURC4WLguhouFCXdpH6BqRu1veP53Jk9CfWcRhGwH4vQXroFNygFDboghNobqtLFNQjUA",
  "key29": "2FxouCkWuEYE4ek4DRAdhjuGHsR3rqNhSmkas12Lqiw28B3tvrSixN8CQas4iizyoeGht7XAiQjCVPkJuWqRQpwQ",
  "key30": "tdVFLcEiJVhQwAfxj4qbMSRi9rUkhoJicBr371EjreH1nei6XaZu4icaTzNnHbmvTNEx8QhfzszJJXXZa2UcBdx",
  "key31": "28hA7hVfRFwWfNot4BYxwuBjY1gAcoS1zxEtF8GXDGFSby3cfsCTKYT1zBAB9S7ikC516vKN59fnaVfjSJ1NWP1a",
  "key32": "2B8Gvq9JSLViMULAuVpFDUdjmv4tTLfujNv8FQ1QT4QdM6BDyYPnNaSxCwmDADSdPVbPf3QUKAmiTZxXHZJq4VDt",
  "key33": "21xiSYacZrpZdQjPGSy5s3CdX3fgkCH97KX1eiyJafanZ5APEwsQpFnypZEPhermyiHoM42sqn1Q8HLHJNi8QbqK",
  "key34": "2Tu65dyAz3n9VSoNS9N2xTVSvQibH4yM8dZhS1zd8BMsLZhL6dLsDL1EkSgpsDs6v6QhigZXe4GZ9SrnFaZCtWcn",
  "key35": "sHuxDELANVf8QAyCCHfh7vXS544WvAF76oyoFJd2RoCNRyyB3m7WB8GtKZAbMbzdvLQmFbpWnYKvGEL2xvx6u9N"
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
