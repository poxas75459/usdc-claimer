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
    "bNcwxgfUnVCznM2j2rTxhLruJHzY6w3kqHtRGeo5EmdSwMbwcJNGJ1wBtQekSfEzhiD6VuvL8H8w3BWBEYu1Xtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52x5wK8jKdpw831rVsmzqUcvsdYNWxJaPtnRkiRg2QftgLxJPCB1uW8bPwaC7vbNfivDq3YGRrpK9c8VjUb6dX6K",
  "key1": "4AQ3adwLUmWd5q1LZB1qBP2pchAyPikTB7yL3vUPLYqYQ3mmRbWLFVTqHUtiKzSo9azRof348dAt4afb96KvtGj",
  "key2": "eUvzqpvsXGCxQsXWAtWPoxJMHLxAqpNf2eEJttidXTMYxwa9WsAyKwcXajzAvdBGoNCds4aC8PKy2GfUvpYEPxn",
  "key3": "VDqD9NrY9h4AS13urdX5Eb4m1VwEa38mP2iAg1zqxb9Wn3gMVpRMGT4H6jfbGPJFai5dx17nrZxvr2MRFBCjJim",
  "key4": "4Lphi7ua4LFyMzbhSNGKBP2iHwJTRcdCjmQgx9uf3eZqWV9MUqxaZaJ2xwDfq5NDfLZ4yX8699JXJLc8X82DRDTt",
  "key5": "TauhGrLNChbimF25tvNPpjjR9ETENDYH6PqXWRpNeKtDGarntaukKK4J4hWqVLSk71U5brPYxdSY485wMsLf2w6",
  "key6": "2FinugkCZuywVcHAuA2Jgh1QBmgy7VK6wipXuf9sr926TzoiGRNksorjbHgRj1RHrRNgfjJpMymyiHoCQfumkwfH",
  "key7": "26pEQ4ZJQ8EXfHUgPhxfkqb6dM2dBo75cn8YZ8harNqpsDsJUyFbvKqDFWwFooD6zWBhtfNSzwjMsVWr7xCfRdvf",
  "key8": "3N6Kd1ofErCVwtiy6byEVoi7bMs8Jf4i18NQvJPLcBKmfBAe3pc582TKesTPkbv8MuCho4c1tk7gE34dvMcWzmA6",
  "key9": "2j5ijvfxtfHVUrgdHrjapjazENrGDewu97UZ2DpHNvSqK8RXsGpTotH17aeVES7PkhooGtoS5FQnWyxjqV9XkQ19",
  "key10": "2GMfVRY9XBCVjvBMTT5WJdxHtPLmuPASg2zAModdAeVjLiacyMhUVs62RowyonA4QDUkQT7Gekv1oTsyfmTcfjfC",
  "key11": "L7iGA5gRp5qMg4vZFmstjvVaP4KmGEN4xrwakC8j1a1zsQnSZDSepiR4KTMAKyrN8vExyZZAPErGreZZyfb1LXw",
  "key12": "gS8namnUKf1NRZ8mSmLEW4jVzSRtSkxkAmNGManxirJdZXJWwKF3ktXXYnHJzk1ahNcjuuATdMfgH96yWed9pwd",
  "key13": "M68gnSxMjMuBDsqezkr3o5zQkPvSwmTA6oiSknjyaDJHtu3eAqzD5zPQvDGHXERjxtTPmz5bRaLFnt6YXS5jX91",
  "key14": "48VAiqf5gCdQ8nGeMRJQquiHnaNSziGLCnt3y6h7a7L9mctrBApzFuDzaiFs6hTHuBg8D2Jb7jhm9Kr8WiD3D22B",
  "key15": "4s9jnEKDwEZ12Bp3LpKHhtrEMxTYnQ6YYWqTF1qL5u1KQ4ztowvpNCUwKbzr5VsKnze2Hr8XEwVgdo496i8JR7WQ",
  "key16": "52Zu2UnKirBR3DaATAH6xzToju5PzGRyFqsUDTwjHYFa86KJ4qTYMtGuVgTmn2N7uunQUciTPo3sh6ADD1xaYPcH",
  "key17": "2oZ5YidrChvvTECJiCzYrWAu8f5tqndVWY35RmxFLbGU6zTwgegeEJEfuCJgMJxebQ6sy5efpb5zKuFwMhAEDrHd",
  "key18": "3SgURck56fhTr97EAk5eGueAc2sohmHuSdU28pyQKbYB874H6MdNH2DUp7R9QtJ37tUp1cBhiKjPJJkLLrsXzwM9",
  "key19": "47fW3oDU6hDsZpaHfhYnjH7HtfArSmT48J6myDoiphKaaPaYcir99hTSX489qCshcSPGzFq1ZH8YGRp4cmJjZ44L",
  "key20": "67e3Mi4LKMpV9zKmaSA2XRxVGJAMWsegg43jUJqqDbRG1LigR2mCvkhE85MuGxXQPcE1SZdCkpTsE4D2sTHfSSMw",
  "key21": "NpvXv8C2oLYMFMvDSybt5Kyfm5Kd17pYLqXiykKfEVBb39z3KsDgGDtnXYa1vt7DtoLrbhS6KzFwdroz4kuSzmA",
  "key22": "5dGh7t6qDvPrhYg4mGj2AxMnkiYzuzXALcUcei2K7TJWUx3akcCikz69yvKSEkiB3tPHsbD97ZVzZ7JmNX7xBFtz",
  "key23": "2iETwVfQuZ9MwvNMuzrtqyKRBzm6eHyPkLuVzqMFYvT2knPCoJx5MwY6NrvGjqxUdCmq7aD6Pus81ZJxK84DJf67",
  "key24": "4Ab59bKSX3T4F8FMYHaA17e3NJttCA9rtGvf3opVB6rDfy4FeKBbSJEM7yjpeGZ4mrCEXTGp3YVYUYNCLn3tDpZD",
  "key25": "N3fvm6Dg6NUfZd4LsjCDAHBMAUyNTN7d5LAzuq9HqXyEAxqUvfKyXX6ZmA3T1wrMqc7btv5FGoXfor1ZekTf6hv",
  "key26": "36rzrVXm7NTnRnUyxvkFmiGsNpAuCGsMCgUmRpvWi4A25JtK4XTDpp8eKAsmXyzZitUXhBwMMFNQ1FdErVv1L2r1",
  "key27": "22h2yL4b2AMcvyBRP5MwspmnEpfRAScNMZDH8qE2yBPnQL1xVo6yXQS1t53UnhV2ggqgmigSUNQ9o1LmQLcR3H8Z",
  "key28": "1mkiyYRHFhoujo8t2pYKWSzB54AKf7kRYWdgnq5DhD7JSE41sFm2pi2kHCHco6jChswFqbK9dRNmhH9bfPVwCYg",
  "key29": "9NoMbS8G9CCChpGT7q58Q9XzLmXnkhDraxQeQzHVWA7EMNaUyUdUQCpqYBd6wDdS4Que5sYXxf8rEt3hPfBgLPf",
  "key30": "2icR5RbQRZb8RjFQiJcudG6dDtcAzx1mk6gUQcdmieVdFD7oEqJP6bSATHL6d9hdCtmTGyaXUJpHaDcQd5C5gvRm",
  "key31": "5sUPLhyLBJGEMotqn9Rj3HjkWxjCSW2ArSFUME9bgaiorMLTXPsH7inMLy3haUxCGMRCQxX8HGEsYDgxakvBSFx3",
  "key32": "462mcCknfjqh5kz8saohthJ1tV8seFrZPQQL9iFtZZ1f4utmFJ3ASAB22u3s5bGxWtnJ8AUakw6kMPr4Nb1GqHws",
  "key33": "mrz6fCVKwVVgVsXMRC5o4HFaTpUT6A6bUTHwnDC7txbmzwy8rscvBaSXBTGoZeoxdz85JLJzHiJptSu3sQP5ez2"
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
