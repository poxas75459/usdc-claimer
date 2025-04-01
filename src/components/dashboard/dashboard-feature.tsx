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
    "53AbZytCeCaaLod1MJjAuz6idGYsQ9uhXhwYQCmonSrSmkJ5VQrfWRtnuWf42UKRcjH7nCEvFySPEEGZwn9pnK7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4mWYBaEN7oWp4pS13EemxmKiJEjgVWFHAh4Ms6dhYEUXekvUWNsVJdAcG8n49wLMqd9cQvfJjLRkP22Zcjui6p",
  "key1": "E9b8FvJ6sTAAP6HxMtM3rwomNpxaZkkwsN5cgPG8oeXet49UKmx5gQvBSHRn7mCpo2xkaPkwjMAKt5e69GqCgGK",
  "key2": "TQRgdP8X5qiWm689mRvuEZpP5Py8axfLKmg9CD7UtYTpRdL4ywR4H8FRLD7Z71fU2uPK955xBuUL7mmem1RKHBU",
  "key3": "25h2M3V478dttdqruzhS2t4BHUdw1PCjY2w3V8oY9yszau7EY8BijvqZytxoxWRwcGh2vGvSELGDCKdUqqR6AK79",
  "key4": "2giaB8ZiM7c26UC3imb3wBmPUAZmNdTQvxM5rN3ZpSVYftQ7Acbv92bnxyq92q6TRqYZT5XNfbK5W3D56a4aqBv7",
  "key5": "4ruoniNuRKsfRieYmetaNvFTLULGNEHwPoNoYX2EMZbuQ42W1A9Wd9hV4xx9bhNmqVSppjVrcu2WnhSvhr6aQaR8",
  "key6": "3dvQd91Le3vpKAX8DLBevMn9MS4kMNHT5PHd1faZEBnQXA8fefdPma1TZqXUKjfMDUMGmfYgcAYWjigTLkGoQYY3",
  "key7": "5bff6KZzrQzTPTLzpNVVzs9dV7BX85cmsxphPMCoh9nLx6GuFa8D791YSaLdJ3MZtq7Tfom2h33kZ9X6Wa4bDBSM",
  "key8": "5P1zynZTMhq3r9MPKpfitTzMidFwrz7ysyaEkRZpkXKcGj8dUVTheUHvkAMwmybfVEvTL4VaEzcMCZpLbreuPcnX",
  "key9": "5ffCdQRoc4R7KpZc1cBPvZHKYDwrXVCJuSXxJ8Dbnq6SZRPFCkn9Vu7ENrqx82obs9gq4P2w3cbXoW7AQE9RAkps",
  "key10": "3UpziGgYQBxcKfErbjH8iL112WZcfAnco1pXV9sHPBT1EvBaDrDAkDxRKREAcTaxSSa2xDdNY6dobe2MBEZ3rbCB",
  "key11": "5M291ANUww2aNpJpdWX786Xo1Y1Aqbb7iKArMDByfd9Nj6ArcxHEy9NrT8GzkskdhqEENWxyTX3y5db4pGNpBj6P",
  "key12": "4c8G7wVLpNe8TACkkawTrD5Vpsix8YKWD4GdB1FxGA51X4rsYk5vNRHxXrkyfwei3xdezWyzyekM4RBYcpwVMqpq",
  "key13": "3UiGVtbLYsvE9GEXK13c7QNPjfpo5s2kjwjU2quFFUxypbgv1WcpVxoRtbkUbzBKghF5rvFrda21WG7bJh7Qw3KE",
  "key14": "2ojFzNhgHknPc9YxJpKpPRSaEao5BnUMbaRGqsmrfize1Uq4SAKa4SGr6zHmAFc8X1oGjwWooSCdMmMDdBiMofna",
  "key15": "52e4vz2zw365dPmvTpitBb9AnzacEV72o6qmtEGBjSCMx8EfWzbTkNNQ9reMJZQx5HPrH1gDMACobnY6ipBzmNYq",
  "key16": "5bZxqviHM3doP4x1NWdzownTGctZUikQmqdZqQyuFeLZLxetedEf4HDbXCUumjdtRtVDSCQuMWYtWdjivcBP3MR3",
  "key17": "3gm9CPuaiGqeTA5e7VA6Rw39YLS9kBkhZwALS11Q3QEC9UwnoX3NW87QEHTYtRvi9ve8Vzs3LmuRszdxcvvXnpQq",
  "key18": "iy6ogFKHpbT5uJuJ58pzPFTWe1A9YEb1YJ6S8hLXvsReQiaWGB3sj2iQPyduGUbqZjTjXq9UEr9mob74h6Gi9Fb",
  "key19": "2AFLt4HtQHokqiUnMSuMjKQMpTMV4LPQFCFEFvZdRJztL4Z3EeKwTVV76DKtgE7LXuG6zzonWwxxk9hXr9vXcXn4",
  "key20": "48Y9LC4rYDo4EQS7QL1e9QYa72TS9jthZoAVRXG8TtrBRHMTBR9ebbvnhoto2i9ycWCNetKg6Pvw3vjtymVNmNLD",
  "key21": "2iVKYyQgoEJHTBoCgPtRaxLRA13n7251veBAgnTr6gBjjxV9zwT8PcasWY7CjpoXpNTWB37SKJvzBHz4egNccU25",
  "key22": "31KeGtDrV36pec9JpNtEsoD14Y8vUpeuPZQw7dhHiGysLFTYjsYdtYLAfoMSVv44ozZ9dfBx3uujQYohkWuehx4",
  "key23": "zyrws2yvucvwh8oAFF6JRn781jwwVDKva3E8V9pbcdqLXDMvU8uah5qfsDKQZwfZCFXZAe4qmxW18uci5uTWmWS",
  "key24": "2MPyEpyHZan2WTG38g9YSRj9Zp48hcEYCfMDNXyM45riq3zaoXe8LW2JMFvZ56FvVYBcztLH85dV1RG3dNzW8nu1",
  "key25": "5KU6EGyR9msqPpBiTSsxVwcfmA3GfDbNNwTuKJPwyeED5pj8MRnPrDr1LeSRW6PXhzTWnTSij4qnmXZk4Z8TtKoy",
  "key26": "woNq15BEm4xGaH4YuubLGZ6F97mdXeq7n7yWejH73CQYmy4sYZdGWyQXnyEtoAPwoW9YjbqCzwrFNp5nGh3hW4c",
  "key27": "w6ySAUT1iGhqXWCywZBxZ7Jf8EMPWuyQPRijPpa6w4o4ptb4xMvJw9LhksgQMRYmvZZ1N6Fzp281jvZX9p74qnY",
  "key28": "3fuktoTXbhyXtYZbfNdQ7XF5dZzCHzMGBngAWZf8Q4rgmPFczW9yewGZwo8mk1vvPXvSbtibuug3KabW1Fpe3rNU",
  "key29": "2fRqWia8eRyBHwtuBKxZgQYYbHn8NckeW9NrN5yMJh7nRjJjxjnKRkewzojK7cX448SD7dX2828HMrkKjQfy7wHc",
  "key30": "3t432NvKM8V8UJ9jePZyQTGmyz5dG34VpsUqB69qqCZbuGxKwykAN7RgfKrLfs8MAQAgrcE2Qm3S91ZKuUpAe8Po",
  "key31": "5R9hfPGZbAeMRANRiuG8yob2qwQix1DdJZx8iLtLd1cbVKiKvq8aXSiUWxM62sBpRR9uYKF9sQDqyZRSUW5SdDM1",
  "key32": "4pyHb2ZcipiNSn9nrCW4iPyZZzfjwme6iyNmEqEPbXNgTZQpCfG4gAL3fwbpeETzfsskzCdWYGtUTg7mkW2DZrCQ",
  "key33": "2G8K6TuJJ8VrxMhzgqSgA8Q8ecx24MhuUbUYMSebendABakYr4dhDbY6ZGoDU4PDCJ7MMLTwdr6WPY3JRr3ZERne",
  "key34": "28WF41TJ2hxnkg3Qzt3kbBaQJwwd48xyokNW5mswxhJXYEFGjbCLq9r7gjEL9xJXyQXwU5KKBBYdz6pKdVr8EhB4",
  "key35": "5VnFsyj6Lj3sdEutG3KkqP1SibJzEYL6bWBEfjb2wTZHqZLgKni4dTi6Cr3XYcPVSmGDgss33e6cGBoL4GeMWWVb",
  "key36": "4DPigXAnLhGpxSaMAETNXLyYWGacWak1DMN2WCcgTGmytepSY8CNGp2w3JcU4LUgwWDoFimXNpr5iPepceSJgEXY",
  "key37": "5g3scTsmSPkUyz7Qnq44LcfAqryhx1o3XogbYQ7p4M9Bni2XZE8d8CiQVy4h7EKTMeGFQAcroKKNkApGVGQyJaCF",
  "key38": "469knteBnRpTpNU6iE2nNcdd3A2k9esEkU3jJfMix5sqEhoibxk75tnv5XxKZ33thirdnDuHRvfNUDT5u5qGdcyz",
  "key39": "5Vscfxe6kYQAwTEvWtGVeYYG7jLNnbKvS991ocybhroPAJkSz4SXC54dDBSEcXLJjxfJuRSnqZQJHrP9fHqg6apU",
  "key40": "f2p55r5FdfvRrCdaqnVDBBg28UwPzxS6SeQh6va8zTfCYdV7awjBvWsi95JypqgKaLTbMeqYWmdzkLDCj6q3A52",
  "key41": "4vGcirarBmYrP9JWCVFsmY4pxsr9aRz1JMvQtVUJtQRffGwof8uyyteafuYgajo9BytEfcrUm69wiPqBYPpXgAYb",
  "key42": "3tt1bYVcLpcL6bokcJE8BapuxtjBzEGhEob9685fkEm8SKSyru5oDE18tNbzveQB5WMJwZqUytDqBJ1YmzygwA2y",
  "key43": "4c8UoCTrieBASbk9TbZRxzxb79s7WrrQ4MV5y8Y5FLcHhnpeysmXSVKn9NXTjevGGEzQMb5RmaDi4FFxdUCaW3G6",
  "key44": "2cRUBcURANozHagnNAkgcRaJKG7Re1M1fQfsz76Xrkmnik5Kokme6GoyP5SkoM4hdaG7JRWpdineUREQYGyBFKNi",
  "key45": "4Vycobgmuq646WndPaUGSSt88Y8FxrkyA3p68QKEqYBJZhf3aj6wwsV22anKB8jGv12kTT6fNdsjZu7yHVVcWTos",
  "key46": "42cbKCWbNmSxU2dXG58tmf9wQPnyuXjX87DjDr69gVYnUGDzsQi6FJm4Gjm48c7FU8qkfVWcRJNenzTFuDPw42sg",
  "key47": "5Sns3MnDKqftMyXq6VYv4j5ZPS2jTAjQPZf4D3R9CGZuUyDdbzaaHRC6Kc8cJbUXA35xiqo3xkLUazfCoFjZn1Jv",
  "key48": "31MU2RDvozaS4UA3ZnqNSNudyWymhSo7J89dY7CfYzzNbLVQNKAeoJ8PPnfMF6mLZuxQFEhZkebS1HedLsa4X6wr"
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
