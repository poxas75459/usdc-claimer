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
    "5CRCMgHSCfPPeuiqqwNML9mA2xsqU3nsBNZZBAkz7GshhMCf9XPV4dhp84jC9y8ZLNXjjEZYXyEPeomHv87EmUq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2poBGJxHY9qxGcb6gUUDysUpM34ubYUkQeu7jthZZXedrwTKunBAvCJ3mRBLyFHQTJyx5fQW9xHm9bSMH6izkGcz",
  "key1": "3yaep27fhnHKYkLGuDbh1gapk2qA3Lm3BCQyNkXJNe5YhxcvUs6SjM6vp6V2Uorj5MeuJB6B1gfNWNdgiZcyXc3g",
  "key2": "5Udg4NUgpRMZsjApPPCAxi92yDijZh6gusfWy5ghPYrUZPS88skyCH7wCLDFy6tV8PuY6wdyo6TXtYHvo14rFa8f",
  "key3": "q65r8d8haaLbNqPT5tG8RkuDKSj8LqRxCDgqRfExHxh6pTW37ZtMy7jrDavsadN2MPQK5CVoSynm7MXATVeH6Jy",
  "key4": "2rKNJqvqNuv3JH9U5RZNARTh5CucFWFTHZk4a34gERXQ5GyGFJpjJHGShdzRNBQEsznbRoUTpEEjVgFB6zctGpFh",
  "key5": "4HhPQeHsuxPksdCRMjc55WGJfk3PnL67NGsYW5AzhR6qpntqjUpZFGCJaruG7mgPMKkWkjfcgcuc6xapVxjumAna",
  "key6": "2JHYAbjN721PpsDEbFwjKR81LBgmeKFc9gxxZ62wgfLKhSuD9zxALiVt8BEFFFQ2sEcZ9uFR7BUyR3UttTvgG5X7",
  "key7": "2AWtf9ijk4udGuHtWTKbWBLgxjHeyG9z7SwbJDd4XujAueZkDQQGiTZzoTDrwEc1SN7yE34h4R6vpQiH2GA8UXGF",
  "key8": "3FEU6ju9kAh3HD9jjCV9qD7PB6GoadCR1j6EUQXf8sHpT5koVDYKfcVTs2NYaP3TMsW5QKkPTunAiEz96PWShwq1",
  "key9": "2hKSRWbFUxjApzXVbnC6n1vxeSUXLLkr5gzofAcoY8i6H9jMaXZGnETVS35n4EkJa61L6jGf1BquVUoebsSqZ9ZJ",
  "key10": "FRMiT8yZQwxiA7n3TmEYQQxiwht3UBNQ3AYuKnnQqsXf1cPNU9KdosKaSpX8g4xWFjznMi7eE7q8JKWBzmnbJKP",
  "key11": "2b4paQdvuTKDnHG3SdZGrFmv3xj2ztiKhQP6HAVL3mibDpdSDW2NnWVG2bzFDM6LYchgYsSfVHsEaWDahdKgL3J",
  "key12": "4DKdGs1eGj3EoydSS5KrYLEhkF9bAsewPNnQVvSWk9UMAj6goMAVjqfUDayA6GSXUohHNBBqVojVKyRxFVfqsAWq",
  "key13": "3QwaNVgrroELYMzv6GKr4zMKEkmKVXjsL9SqFRZk9gRP6CHuAnBXF9dLgcbgKKH3AnyJxKdhWgi2FBV3NQCfGCxc",
  "key14": "5Mn2qLgyFqA7wZ9jrf3QTNDUFfXnTSzd1PULuphSPwbug56R5HNmxZEDryiiWjeGyDERxub32rTa5S6gcixQfKq2",
  "key15": "4pEKnR2wxrDgJyVvtZcdoaiuMbqUkrEgFRMcU4dczft6jdWE9CeXkTeQquCuTGcxQKs33M2bXmpVaFSS2nLMaoKs",
  "key16": "LQVEWQWXtTSBpuq6urjhVEAgLLBz6iYLLREkqBXPtSmAT6ienUEUVm9WsvtobxGyLxAGaKvekNr5HQ2j8Lb22Ep",
  "key17": "2eDmdfQjWT7XpDXq5jJspugLPD8NRPyfcLxWoLv9J5NpaRh9DwrxvoDdY8yh8RAiLrtnzWZSuoL9kXEWbixHqADa",
  "key18": "5g46uv8PmaRQuyxHzech3gXEKwRSXNBhfLKxUitq2dYpXKmYe8YP6enezN1LYEb7NAJjZ4jMZbn28ajNcWZKHwsZ",
  "key19": "CFv8edLZfACMXhW3fAbya3745oXafpeMtvG3sogtdspBoxDVUwqL6e57dpzicYviYv5kc4MmnRJS1SW2Ev8CLjB",
  "key20": "41SAr4vRbxxHPGdw6PxEj9jANe91hxYjNrs3694np1CdQHVe2sCVG5SjQmSHo4SirgsZqJrTyqUKcGvsuiVSFK44",
  "key21": "5VYbaD9D8PRJJ5J1fyhbEUVYddGeAbj4HnYoHkBPV7jLFwYyWq3ht2cYHyQcx8hr44jXvotuR6JbgkorYXdLkuV",
  "key22": "2mGJdHEMTUfK9jqoyH8Bej1YdTCD3J3N4gQ1u7omnz3dyboFdb9LfDzqXxVyejJwPKAwyDvS44MbudH2GF1jZWdp",
  "key23": "43fQaX9BaLKLUjNJEzv8qeS9Qv31jSxbxsGZKmyZ4bdBzHMQ7tNW8DZecQdpa2NbRVRhSFK4FtEUJs1uWQ8wpx6p",
  "key24": "4TJJDJC1g8NvgmZmFkjy3Zzvf5qM7jZG9dQhds7qJkfyUeqsmtcrGBP9eicqSasckNSuWxuS18phNg4YS46gBktJ",
  "key25": "5sUkKRU2HXS9wZpR8RCbf4WFHMtBBnpU2VhdVDi5AafLFepYthyAEb12LVnVWhLw58WYD1wKMnNpYgY1pYPNkmx5",
  "key26": "57wv6o7DSXyeZK6MBMHRtt4Pdpjfvs1PMZ3R3Q9dJrTgMfMrD7JizYP8Xk275J5zgqTh2QTzhMBLYtxhFF4etSFY",
  "key27": "54w3AtuUD4gdeT2qN5PKZYy6FDFTzworfF86xScNsf2i6DtggazkgLg78sPztUhXBXY46eqy5ogW4WmYXTiZWern",
  "key28": "3fk89jRXxHwohg5PSVvhKFUiWHSkoeV6vuYjWZkQBXg5JRExqoQHBnWWNftUXo7LitbQhqJvazPKUd96htoixFPu",
  "key29": "jg4k6Eq9oW9mnBM2g1QHDBhhKXhWbgxCA6eNzkoQX9DCRbSFpk3EmyXcQVZKLWEdEdVCkCNJvvWfAHM3LKkPCjH",
  "key30": "3hfRQSBeVXCM213DPEDuRusQuCke8PK3kMCTuE8PhaZb2EbioHBk3mfAfj8ewovem9EkvL7u3jLhUKZW2Sz3GJ1a",
  "key31": "4a2FgnyPCFro1GvvVpVmVb52unHfwXne6ECustbWhMF4k2RdZF87feLuKs14eUqanffV9HhQyQ2CAF4HkSNEWBWr",
  "key32": "U7X3R86zAuFrDvFjDwbV1rnCp1egvGzvKXBFPKioRCktxL9qseSMnaf8vpmVJYFyCCxypRf3KhjTLqezvnyrJdR",
  "key33": "4mevsWMAAxAvcJifHcLf7teeDxrk7j6ESF8T46Z1jGZ8CbpYkUo3iNNZH7o9UstFkdEbrxvdQHckP744R1Uz11Wn",
  "key34": "wstSoE2GA5CFdVkGjZgmQzCCTaFVfhGsSF7QZq4UeVYQfZEVkZBXuWerLJfBTVPm1aBjtzyPK9JZVRj3t8GHsN8",
  "key35": "4gJR26yW6Syw44bQoNa8BGFA8j8gz6Q3kstqe2y7NszDyf7EBE89ujfoWWgnXBsrmN6rsnsGGU4nMe6Sz6aMWagT",
  "key36": "4i7QhirwtxmRBPXxCieBAzpzFYKM97CTDGKTEN6ZLGjHxNapyx32r5jhAKSgGWtEY29SYRWhdFq81sauoUNcoaVB",
  "key37": "5Z7SCg7GRJqVPF7qKxS2EtYf5mdcRo5oBTq9JpNaZCXRC4M2wKTdCrs3yBNJmNm8TW1LHhcLVBGZHPdqt3DEwrkp",
  "key38": "cMmbaL98R9JRs4wERwKUJ67uj5VfAELNuTsojBJzg1mPxUrjvq7fSivcR9X9KCqmNPWLBPnQXv616KCeyYpKFmF",
  "key39": "2K71KsAvU6ammy2aQXcbAvmFdWaZhN3SDX9fXQXbAwyQizgawTmnEQ6ngSfpAUJ7zGppL2Zakf5Z1kmUcfic9PZP",
  "key40": "5dFFdFv79HrzFLom3QcbwrffkLeLBPxVMxXRFtWRjbMxWcv5kg34hWiY4m6jQGMNKtXvb2MYiUTpgTNXKKf6yjbx",
  "key41": "3wz1sK8VsdL41N9NNW1merwJjFcp4b7WredBVAKuq6rmhrHvNVXZx8DMNKptoS2kVD5p3aGanurVW9Dr4tJ1usjd",
  "key42": "KYJP1skVt1qPeZiFC6Ue1dSZfpsjFc9o9TRR5ydQqtWmeK6HWH9NYjt7CVrbdvGRR6S4t8k8GaLjvE3zsBWKk4n",
  "key43": "378eoifu9PretoRMndG8ycQVLxbBmTU1SXr9W31UjcevJyNFFu3aotSikNFpXVYT7QujgpzcG68EsjcsLhqbyr6H",
  "key44": "21vn1QkmFtSWkaMrB9rTHqCsfz2XQkEbUM1WP8Qef9fTJsbsYgXQwtiDakaeByQitdXuGck9G2d4miZxaphSBt4L",
  "key45": "576h9yNUZCDLkA5myxeLVA2ZFnVr5qvUtKjmxMih3hueyJqTxKQoTZSuzJpQu3tQbw5EEVmUBTbB1e6SbWsF2Rya",
  "key46": "633cTRX2AwEvUrqDXPAjSNmjzvxkWPhsKjDxHQZrj5VBfaMc4cY52HrvDagTUxi141udJC3NDENqk8tkboC2LeTk"
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
