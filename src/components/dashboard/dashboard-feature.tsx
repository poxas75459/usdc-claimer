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
    "nAe7FXMfyxtxTZp2kMvwZy9Jta3Dg67wN43SDQSmsvLgdxjwSBgpkrumE6a9bWaWYbWbTr3V4jigL9gwtUzh87X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVRBmVY8UkvCVLGBRBapZeMMVx9d8zpTNFmaBF9Arg8fPkeNy1C9Hw3DyTPyNC8iBQfvF8Ukvy8UV6jtpceEVGp",
  "key1": "55Pbs9BGYMkLpktZrBPuJdPTcp5h5R1h2cRq1SZs3x5eRKJAAxTN6AXtHqLAuFsvRbdHV9ajnAgbRtCDTStYwXoD",
  "key2": "2cQFwXeLeCs6nw6ftsmemiXfFcRAetYVNhrw92PThzZ1DKyVDgRa9tXFem6Hj4Vb7ddvHiPQJYHAgycsfXdTWZj3",
  "key3": "4v53DJ3o3tVERYxrNCa9BweByR7Ajanmnv1qFRbmtchjevfqMW2Syh8me2qbowgFUuRNG8eVsghtjupWcVvERqdA",
  "key4": "2uah7rZiz1VKJCtkstNXetfa2crj7tj9dyk8Y1U2SXfTc6244LGm9k3Qs69hZ45YEVs5fg7TPiRvUMDBNHpWB6yX",
  "key5": "QhK9gSmkQeqMuGaDujcd6LaHhzDRoFxxshzCov55tZsdZugN6pRiMU3Due2uEkpFYXUVHJTnrrTHRviSkwuN24x",
  "key6": "3aUz1Mh8HqzZqVo5ra3VuBdQXxtrHfndwirGLsgdvLrgQfewKdwNTckiBWwAqWkiyXBnx3sqvdhDghw4VGGUf5wS",
  "key7": "413Z9Lyw9k6dMF9cLREm8F6dXBKC4L8fRRco2aWfDHhWJ6ByB69DZ7UWLtNN4ycJ3tWXeSKSzy7SwmvxQTW6dRjr",
  "key8": "r3kcLRAavu7M7RtAZDUBMi4hUasESoM4aBzTc32DnwXANoPNCKqfXuiDpXSWzEzQXoL3bzcvaBBbkc4x33xPgXh",
  "key9": "3RMWxyYn6GmmnK5SdJXhmqGiFMV9DnFcNHP1rexwsYmAJjLMa1R9zEm8ezpkKryeaVUCnVqHGVDU5CCBN6pq4CrZ",
  "key10": "4AAQ4PqthXLijTBq2TSBWrhLmtUVzshSNnum4uawxW1cjByiowGLCx23yvFNcfbotWcbcqVrzmvPNSAqLpfBxKbm",
  "key11": "2q2wcRXk12tEKxFdt6sAiuXkxkopxKfPPmGLYnbYkjXbDpgxnQ1nP44hLVQPmbzootqqXixqg2BWNxdyFg5WAcYP",
  "key12": "66QtzPMdazDmLdv7gW1EKMMvzVms69gqsMWAkEirVMKxFyjSrjqtigvwJpN9RnjVrHKi5MEwepTbn6r9XtoTGHyj",
  "key13": "3HEzJjqmjG3AVXLJyqSuBjxMtLjw7zEXGmX6opVnapBD7vuitJsavMjVpxYuP7MFCHnTx88nJKXkP84uK2KfuCSr",
  "key14": "5fJSsbyE61P4H3wU6gC19iPrbeUDji4sJksVBdhCiQRexwa6t4s48QZEZVu9DYDsV24RsDd7Ju6sXZdDJ228urm6",
  "key15": "5UYewBHDz49XpgNNTp7uByd2ieGHh714jWCfhpRXoUCiW3xEBT7JFuz6G76i6fhAf8UqeugztkFeC9hgoG3ikBe6",
  "key16": "281kAbybE9CeHjB2VKZq2A79B1mKyuD6nrxHSyV2Xscpt5nfuCewri2qmU1Qfe7JMbB2DCDdNSMap2NwXsvCY25t",
  "key17": "T4wMKAKLG7p5zgFn6cTBPFK91fih8fQmeGEkjAtiZpTHW3vPu55ndSECKyE2dm715ydDCTmsvdSist9cJpDgVy1",
  "key18": "2tDHnmac9EupQwq8jQ9AfdJhpb1w4dGRMeQNjvBqoazudRpbdhsA62umM3vjgDGb8somkLu7TcHXAWVEBYmW54BQ",
  "key19": "4NicU2uXLvh39wqeH89YY1S5HBMCvH7Yc7Fjq3CbiHWSKPkmFcBjxRL7wReQPZ8iXE7wKAsbGvkRiAHyQabGbi2A",
  "key20": "5JbzuxhDriUGn67SanKiV5RAqYfiQeB5ZMFzwk3LymACbGBp9smRTD11BzRwuinuZE9wPdEwsEjCYqDANkApLh6L",
  "key21": "5pvWeW2EQ9wQbUc74Fs4JhS8BzgkXzZWD4SBVopJ2Mh5mUwSSCahDXwAXL1cLNCQfCUJxtzHc5bwm15tUeU5tQio",
  "key22": "3Ggmdbifm1Wjx7g2mVtoQAwww8Jq2NRMmmxVnTkwNQx8vVw2mQC6fsrnvwz6UKmRfsc7325KHY5AeKWQHvzK55dx",
  "key23": "2DS3kEQswL4DnvwBHkAGJW6FtSX6hoBY6FG6owguXjPtm6vyeZgXobKzQ1cacz6xtwwCRD79iq6vKCqcvnsEWFcK",
  "key24": "FSxx9zRQekV6rxBy4RMrUucSDaHBHW5cRXn6cD4tgcSkBBMeRUNrUMzYe8zF3s2KXJBhNrE7HDW8KfhTW9pEpqL",
  "key25": "TsdZavASxtJRw9Co5iYcL98q9Epnh1rC5WbmG6zAXohZ8xQ5Uyf5kjw1wzHjPLoLr6BfSSAeX9waDZZScEhiXU8",
  "key26": "4FsBHyUX6gfpGZkisJrj8b6v3WLzGgN3Tzuvp1e93dksDgNcjhgTK5xKTiyBaiD7TvgJrNQL6mcoBsbFBEEvbNC4",
  "key27": "4e2dhg8q5mcxnbinJ7NHc2ARP4YyaxFLN7G5uT9CWGkdDHhNWCwG3HRh13iW9RoRyiVjU3FevuUQ7iQLJUYuwpvr",
  "key28": "24quvEdq4Ds7nDqKmGTPA6sdGCpu9oC9QEjLTrLdsoan11GA9n4ypmzQ6qwJgHRAPRne3h1JuiEPd1Ltn7dNRZrj",
  "key29": "5wreTzc9fs535KwxDjQEoUFGLHE61K6qTi62XfeBk9d9qiN5SjizeqDogP9cHqmKQovcoguyiQXjKNwd8npohFnL",
  "key30": "2bg78iHaJ3XqCRZX9EYcgYCz1CbktKyw3jmFB8u3diYnYhwVjPKjBm7rhuGFdW2vgft5gHnu4MnVM5fuZT3dBUsf",
  "key31": "47E112iSn8prok4iqZ7PmvrfMxbBeN3xPGTsUZc5G74vofxp4JqUZcb3C85H8Qv1Fp4qJPS2c1kDN4S2xUJ7rFvF",
  "key32": "3WwUNphXma8hfU6EWrvvj9evFBhpFmWQbm3W9ryi1rioJBBtjMvgr9AQ4ZgR8B3X3dhhi623Y5bm6hWaT4aNCeRC",
  "key33": "3WuPp9w4ZLSNK6CZEXTed3eV7awtgovJCR4spJPh7eskkkPXJc7mvcKTdiga3hFENJfTiHSZoFsCCQQSevVZy8tG",
  "key34": "4sB9HY2RKzbwQpaxtRPvfsPnhHYwEViTxx8ceosGLg5UbxMzC146d56SaeL6112YKKoYVp9jbkpL9PAt8L6YdF7e",
  "key35": "5hESpgUZmucKkqdsUzD6oenvQ4y9yiikNadfZVHRZBepCeGMPiijXmeRDrwzv1ZQ9Er4dLJ7rmwQfgkkWxYx1KuJ",
  "key36": "3po2EtsA9mWyCd4iCrsfSzdMrXMtTBAdZnPPE3WhpSSRc5noAa291SDpKKuk1ppLvFcmRqNNikosySXSsyL7wf1",
  "key37": "2RpWKukxCdqkhkEiARhx8rt4n2qSquLvyhLa1U18JJfvTzhihkyakD5Hsq66nTqoJYpa5r6rzp2BjCu2gdQi4W86",
  "key38": "GCwpC17rkhoym2sdyDEULEYU4PMpN3yaPYwSqGjh1viT2BpSWQdnv8ZogwBxjKYpFkh4Ugn5QVQQXzZhUQvF9AV",
  "key39": "3r6JiRagC2J7NfQfLmVViLMQs3K3FduLYgSeR7we2Wvw5xvdf5rrRUzBQUAJztvxW9UnXJBWPF7McgXCciRkEXRY",
  "key40": "3zUgkxNTUGHw7jZRV3oBiyHbvLRfCNEGSgxRcMp4Djk3p3dAEoiMktxDkke2R3RG8cCainvUAUXJbjzCnfGVJWWj",
  "key41": "2BWGMzyF3GBUonQZb2N6h7nyKv8xEX8W8iaENPrgVh4PodkcPTEg17mdPCERM5p4rTc8LvNAqeL7Trin9WEhSs59",
  "key42": "22Q4BjqLcxXCi4M2yrJUoCxJjv3RhKVTAZwLMwouLxo7bvLPHvrBL7nx9LpJbffvKahEgt3LdaHSQAeTp1YSNwMv",
  "key43": "57RZgoLPLQFHtoDqhWUfV5G86BqZpMvpiejQhrkyedyunesus9CdPp575D3mUb6gdbbzRcvGYyAMa4txnH9daXE7",
  "key44": "2DPgxqa14NSzKNp3pfC2NTbBpA3ZWe2mDsQq9sdLHKXsDmp1GSQ7YaZAbudqqZMzJn7cWf7TNLVJuWHRs6444bhG"
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
