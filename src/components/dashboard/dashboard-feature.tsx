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
    "2xY5kScbojDdBTLVzZCMsB1WEtZUatj3P5k3T4LqksBZJxQuw3bf3DDCqRjP5TDYXs57Wq8UoGWnKee9djvhj15W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnMGSaFBRJPgiVcRQZj7UiqX7c55EBGdTZTfhHHmGcpi6Q6xpZED9biSGDBVHo4kgYzuo7W4o1zT4MigbPzb1k2",
  "key1": "m3sDiXdEtijRaJwfKgoXoP7GFqh9nJN6WGx6gAABDbWAFSVUqVvMjGKgTiY7WuDRH39qnrt9kS2GUzqzx4kNSza",
  "key2": "2ZFzDRnCsZkWBuXr2LhkN4SNkAQq7SYWnctDWf9wjhZgMWAdcG5xRWtJNzoXHtVX7wWFtvRreHphAiW7AmxRZCGA",
  "key3": "55mKuqydARKKfsZJRkanuCpVzczCBiZmcXLU16QGRhCDn9uBFZA1DaNmFJyk96CsRsVagQo1tXxwX3KQZu9Dj1Vb",
  "key4": "5ri6RasLePKtKaQgjqkM5aatyYrjV9XvLq8ZY9VkPmxj1k2brRCtZsLprg8asttMx5VtPDQ16Cm38uvfMF6EFX4N",
  "key5": "5L6ffYkgtk41NPYU5q58w6g9BiURkqwi4KVc7MaEQHHZn8eqktNneHrdLzVhVJ4k7JrobHpSjHmQgNsRQXqDZ6Eg",
  "key6": "3jqrTdx1ywqk7JrEnpyY1r66C9hThSgKJyymDz7c5oLBYhz1hNgBwg1JSi4FWLRTq3rZkTFbGiTHww6FTkC5nhFz",
  "key7": "9d93pX6KugEvbb4LgA4weS1jP2uMiCQt5RwYHaqAXmdLYd6cDPCAG1PwwCqU5ZuZbDjusbsmAmMAVW4qiQyLjFd",
  "key8": "5qPCLanMTvhEe3Ta5Wt3w8n7WP2KUHsJUhTHHjUnvVgRAnJG71zZ9CdfDXBfT1hSN4W6Yxxksi1uzTzyuWKtH49p",
  "key9": "CLiWswiZoThrUMMav7E9c6k2PS2WLQDhgtjm5y78PtvUWWrNJbamdMoas2TVjYF6itNJ7KQsQ94Pzc3B374ZMVm",
  "key10": "61ruEJZvyy1teN9iMtRQ1JdLYa41Mgwmpsxd8LmQd9tLAquNqj6wqWp6A3aBThYZDQs62eR5LhRgun8eZJAT8u31",
  "key11": "4aMSeezffYVyb6rwrZv5ajLYfsR4An1ZhdE8qyo7w6ErYkt846odsgQnUyYbJ9MhcLVH4kmt1NtaSrRTZ4THozj3",
  "key12": "2g8sBtDq4dt1AVJnwGW1FNEgCum8skiYuid7SAYDGtunq96gPGRvhcGr4D4TWShGDNSpydGB5PDWo6YuPzufa51b",
  "key13": "XN4djyMdAPHJMne8sceNXfHfPKtkZvycwYBtHhxJypapuxeEqFRRRuw7PdKQFT2j2t5qQ7Ewfk99vmEunnoJH7d",
  "key14": "564MwuVwaawEPS4XMTHegr2HFpUo6dWXSNqvAoGbAv5HUnXtMhjZDHU6tCCstrGA7kU12Wc9yPDs8m4dTA4oWeYr",
  "key15": "5WYkKd4JU8ijbzPMPKunNypDzbFq22m7dnbKrgaWZaZQj1UWe4SSeaTFpnaBi6WmayfRSkt2HYHq3VXByST5D1iQ",
  "key16": "4NvikNn8uPRkeCekNHMXRN5DZzu8omZUa2uJNXV8nXxEW7nArPtCfcQqjsYSWg7d1BwoE9UZZB15Q2QCokheF2sw",
  "key17": "4QnS8Upswx1wwfwhDWCQEbZJHCMWCjRbZT4xiTX24VjVqfv71fvEwh7dGE2tCWCc1za5vo1H8vSc5ChUmT8Yox6c",
  "key18": "3vbrZMwk8G1iEnXsLHqq7gTdPEpSpMdJZ1z1JmSHyqQekAP2CxVkNrKaaSi9nTEE3KfLBkdDJ4YzmaLW3zb4bGWf",
  "key19": "5tmeYaGLuHiFRBKJAk49vrm5uu9GVEWe8E4LAWv9neE84Jreu6J3LV5dXrPSyPuZcHfff9tNbUpy4RuaFQZmCUyA",
  "key20": "29LC8bfimNsYefQhr45QUVYN4WyvnxytxhJxB4XQHJcguTMFZpLGs5zrwt5KJYHC94Usd3ZnBngE4XC2LBroCEU4",
  "key21": "368MpiokZNJyisAvvWsxL64PGsB9NhK8ozDa8dfJHKHgCJCJ8JNoo5TXbn1AgUBtS1A3aBzyxpM6F9jAtH1LaceS",
  "key22": "3J2Hvwp5DtZAZQotS6Em89p6VbCPoAxaMmkGB4VdZFRFUPwZBzXFoA8RatfeMvX4XYHamYnxF5u8FyTjdfv1Vay5",
  "key23": "eqZsYrRUCh9mUzawmKGC5XbVxFvX3s9h6ap92Rgm1KykHSS7V14beSamcj4GjqWMJhwoDkS1w5Sun91m7UwCRDW",
  "key24": "3KEG1oLWianvKhNWm1dy9BcP9X1Dc9r6PMPRsfWwXwNcM7z8TCu2VXgj8eELUMYm78E2XcfVLN3kuJcbAAMLirAN",
  "key25": "4ab86XrMAmzG2N8sbNTERdoLDCbQxXFoPTJV8NS8H9DqSX9EE5pb9Axg6UdSEGe8oQg3C1M4AxTEgXEfAHgTLLJM",
  "key26": "53JPQV544tEEBBQJcBuyBcUbL41m6nNsaWvqiwKSWphzWJsANxVAkTr1cugSgaAUS2CAF47sKPDgcVxTfo11D3wM",
  "key27": "2Zk9U7K9iuVMF65TrNbdHYmLhcUx2sShZXbTVgXZNvjarMo6jEiUdHMkxmYTRXXg81yTTQruLYfG6H5Wus1M5oeq",
  "key28": "2Qn1mpeUxG7GY6Lhmydca35Qc3xEAWCBerZ7EZebXTr5NqMFPtra1NTDkPQ3uEPAj2Q5xBbJrcNMnamz7GFZ8gTX",
  "key29": "nQAHDLEjASA8nzZxzNmTcjbDLFbwxerco6sA12Wz9HKPzUoEKBPuKUvobMuTjqW9nRX4YuD7tyoZdDubfdEnuLd",
  "key30": "3aomgw4SKXXVQUKU91VeBzvi23i4kWr8eS4xYuoD6RkDH7d9iyGgrVajLiiYoHZKiDx5njExPytSBCh5RzZVtWLk",
  "key31": "5DhhHyx6JeYJ89sRTK4ihhZNaEamNPtebgUzCyGMqE2dBfAGQKN1SfY5p76kZrpkS8AeAjC8JNMrxYL4m51mgbJ5",
  "key32": "E6oj39VL4HEt4nJ2cJq6nmMWHFPeErmPYG8JwE6fwfjJmawpH7gj6akyw9dAw4a1xFP8ztteE6qMAunPcCScFG7",
  "key33": "KTZzzXZprchbfVEGArJVrvKa31zri7L8JxsjmVhCv3ZFZt9m23bQQ6Z5EPhFGRGfKXcheH51KfEJUeZiCnfzqHn",
  "key34": "3gg1JuNdYBFDpcTGiJnV7o3hNBccPsEPqE1FAq6j1PWxQQKXUZznRYNwZhypBEoL13t9iFmbbi6kBDV14aPdeYEj",
  "key35": "5J12tXPNhVR8DtdhLsQfyMbVi334RiQX7957iQFBZqxzbjH7QxcWqXft8VsMeHhHazVXxT3b7y2WFVgcZGyBh1wJ",
  "key36": "2BBCd6PA4oxTMeFEo8weT6sR9Q2BVvk7wRhFMi9uKuYo8xqUP7HUZC61NbdvLYMLx2wMbTME17xArQuojXkf5a1Z"
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
