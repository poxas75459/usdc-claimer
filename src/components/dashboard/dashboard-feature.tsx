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
    "5xr6MVNeH7pa2JeTCV7rThPyTzbRh1Rcxi5gTYN4XkT9ob6ZD18JGJiwrSDa1JhQyv41HU2Yhdp21K4QanEnd9du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FuTSKdj154mbczGT29E7f5g3bdFu3N2AUSeSfSH5ASoYRNizuFRefpHnRJminGhAobJWzBTBo5yGGTWRvEh6hPY",
  "key1": "2zriVeBwR2EUmYLqZrw5yHdx9AzQPHZ1vgQspCqE5aEMQeM5tbBdMpUs3RA4xLFymQFeua8YKKCC3CsWAuNtEc4L",
  "key2": "3qDVPQur3MZDFHZtqnag74oD1UJvN1tJX2wi9Cqa12CeucchWNB9RUFSwFVEHMTAhdqALvsiQzwhVe5YL4ZDzwnz",
  "key3": "4KBbqr42Mudrc8vCD6AofYLhVKnUSMFCdTP4oZXCwNG7Z3go1RezZczm9xZbXiiqW1MC1eV1amewGwA3H8QifSi5",
  "key4": "JLdguErww1AqGJGmB47SQ25ztEv4naZaqWm7njBok7LkneidUErZcDHHR2rG2xKcWjFXLQYp1SsLC3VysJMyLby",
  "key5": "3RTNDhybMswbJQJGAvFGtk3ecHc4ag4ZF6aCXvimnBatxRBwe995actRoSh2qL4GjxJtAAKSkviyc9YAmi1wFY7h",
  "key6": "3GDwy3qJj6ZXRpJJyVSPYKBifiDpjSZnmCH9THjZd3nPQUHebbzFahqb1cJeKH7oAi8EMysRjXUx9bn6na6HDd5r",
  "key7": "36qGzXpss4T2uBeCW3ZwmprxqEicoj6G4Av9yksnhoW3zF2MSzcEQKyrRpP255oUhfsfMscBdcUVhoa2FugdvQvn",
  "key8": "64SgpxDvrLKieV18DDeKfjxuHYgxXET3sjZRnP3LkcaQ4bYStzRgunHC68iYJjgRwsX5EX912goB84dA78E2gLsS",
  "key9": "2cqGYJRsWiBzYVK9z4hpaEjhyoS1R8TLRxQptYyL1VAEuywkhMdAqCYLetSwMuMfGzQRSjS7fSMYmmHCzFcUYeuT",
  "key10": "3vZA4u9Bwqs83uWDqeH8grLBA861h2G6z96v7tWcAu9wpDGgmwAupKxHVAyw2MVzyK5UdmVRoLKctBdcWzNqi2Zj",
  "key11": "2zcQzNF19CT1KUTRqyusM7HdX75oDo8hcDsyKJYeDZWv7X1KQh31KkGrHDBzgwwCv5T3jTb77xfzGhc8xjZiPNxb",
  "key12": "2JHof93k8GBxEp69ZLckcCpqQ2n71uw7fHcE3WnT5Xox5LSqGcgyA7YRyGgNejwvwAkh2ero4g6X6Xc3KS7Mkga9",
  "key13": "5tGDro3BJDW1ZuvabMBnmP8f3xM7gufPCMjkcCv2BfEQLYtY9mnnd2fADuDE99hAXsAP6HUeMJjqCbfsiJsKipuv",
  "key14": "3zvMfj9hmG1YT8mtcu58EdUbCD1DyHsFBBMuSZV61224vrEwpxzwMJ4ibiMqbrGQ29MktJiweJmEvWFu98Jb4n3z",
  "key15": "51wf22yLQXhV6UC8HPXoj6RbnrfAZZ4Eu8cD33F36HVQAtEKp6gguVYTefqPguFNjVJRMZNiFoKfeU8T2AM45mGb",
  "key16": "xiLSXKmExupZb1B353BesiPNNc7ctSVCY7okjd2akPKrigH4T6cY6465FB84ktrhsKqyCXQrdRiRvrEkMYGrwYo",
  "key17": "28UborhNtZdQ7HEyf7dkuUBKL5caSmgv3aKUVwrGSxrr4tnLbF8AfrRknXvWWPpzp525n6uBfz67gEpoT6UuhPoB",
  "key18": "2kN1r6nvXdwFgqDqGLgWqZuU3YPH4Y3q7kmTCtdUY1grvwE8Wqs5mzvfBBtaZzwd2KHRLtYqj3SfeRur5E7A7JhV",
  "key19": "482y8NYU7hSf2SE5AbDmNwarYyoMrJhyqAHtbNFmP7g38wZjBFuChR38pDAxE5dNhE6gFP7Ly4AHKxSXhWwnpcuo",
  "key20": "66D2dTtmKnpKCAsmQ6da87DKhiPtfwestGoXopw6opv1vFXJpki6s5xm2wuvcpGHzaqyq86VNaCXZ6bVvTuN9NjD",
  "key21": "4bCbJFzhNeHHmf3rC6o9RoSau7nYT622RqMG3dpSmDe6Wr45VRQyA9D3XAS6QPmNFzesjqg4eMoMQyo7tnNd3FiZ",
  "key22": "eUWVYEuveTE8V3zuZ6yhtCZN7tXPfk2ckDQ3b7aG3zNdkupCLmFzMHMBQuswm5ZMwocQdqMLFhPJ4FgUJeWLGy1",
  "key23": "4WEprjkMnvTkwz6aZaSoCp5hCJf8BkBXBwbTCNdyvfGqB2hf9zrHcUSpmyTqZd9MK79Tq3ND6ChmRYAMo7BrNThG",
  "key24": "5sY1igv4np6SE4FMhEWS7BhPzSxcjdYwaDbxnith4GpnKdb8cYWQfzWD3Nwd74iF3FDRcp3EQpccW6RFgo4v5mBW",
  "key25": "4C3CtcSYoKavV9sUsFYrxJMRzvgbGu3My4QBtMJvBPN7Venugk65JvW9WSFKNaiAiXJzLeNLH4mpAQWTP8htryVr",
  "key26": "3EqJ3E7qpXKVqk9w1SyLYRXo5qwNbqvR1eKUUV1kzcHpJa7XAbxArMEUzt2QCGh6nqWnxU2kcqxPpvAuHqrAQmDS",
  "key27": "3KYqMPUZfRjU8q1ksz3ZUekEaqT8dXUwxqiM6nPHWAakHGZa54XvDFAzC2rt4ipvXB9q4RrtWXJyuktAwonGQEm9",
  "key28": "3sbVk3gHuHHkhNxaXEZtyxJygcCAJTyhNd7fPUGs16yDiFvkZa2b8kcnJUGi2oAdwzvqk7MgLUGR1DVmcyTMzvYC",
  "key29": "4rmpqJ6q99Eqj1UHBeuRGk29Pf92xeKNiYbwWeDZJY4DvWNXoYvHisg41TYHwZRxsx91BUE4Soh3cpMhjLWVoj1p",
  "key30": "2UPSfWdXXTRvjw5droYuo99ra26EtPLHYefmJGtQM8chug22viqhjmbudDYcLN8ijnri2Qo2L3hyAPDgTsaKiL21",
  "key31": "2YTt862UyJWH5PV2NKvhUfipr7vvqqU2eeyTnGZdTqjYu6DgsLLs8soiZuGbzK1oG6zavWHVLnSTe3JExMgLHJ5Z",
  "key32": "m3kbkDbae3Gpj2dLFtNTj6uYsZ86h5DU5KZMuyw1dJ5B5vQiHqfosKQFPR7WXaAwWsL2VtzqMgCpmg7vpz1fS6T",
  "key33": "29gYv4NnXUEQ4j1ui1suqSyhPuozHf23qfcnYagJtSZbWKZN97BPvNPNoW5qLKLvrX5MFoHnMBEN3qV4Dtw9AX8w",
  "key34": "55h9wsYKcRZACYELRbtsrkK4mjrh8uRTwmT9qPLqH8JxoLqCoWEJ2w7paWycYJo9oZkP9ffdZMeQoXqAwNGRMcKq",
  "key35": "2KbeuFiQqV2AYmdHukhhCQHhEKQERBqqNWCjMNLNaUiVjYsU9aXbKghxE9DtQEPGsj1BszPdexnxhzwYwF3jQaPV",
  "key36": "2cAbAXG58L6ttVdXTqfyVi1WC5o2hYfEMK7wxTXzdXHMh935Zyw2QWybwHguWMqc1xcrdXRmM56HcK5Kg4k8sEG9",
  "key37": "fQLwTCvsyg7jnEvgP5UDrgsvs9tx7DNMcSympGiFcmWbzqfbVrffc26gdRqVArcjEH3tEgfw7i5JFxj5og7aGnp",
  "key38": "3uk5Y7jUyJvmeGRJKfLMKgQ6JVqKbdRd3K8gsPqJnfRsuKXkiHSFZi5hiJFseJHhPGp7ccZVWEBY44onXzjzzw2o",
  "key39": "3VjfPnBWuaUFiqC421ZpK5iPQDpv5eNgk4NNXM74EGucAPi34RCYgp6HgnTmk7JFdx3zta1xthwurCc2iL8bSAJX",
  "key40": "4e2bR8xQWQe3WJgNw5fU4SsarYBVxXanocDZuNhbo18CR1w6EDnsFEvUL8etW8gtmwFSHfeubhyV2auftnAzNYuR",
  "key41": "3mnXQa3SHh7nk73gu7GR2Hqh67nVi9EZjBvN7At1aD46NXGtif5ZPP3ANRTSRfj2uJ1giesGNAmQURGgeg4CmnQr",
  "key42": "xAKBf9vCyqesG5PxwqxDnEenwh1LvXmwaxdwVAmMrAx1tj7Cah6C6uff3XWwBAp26h88xW8d3TUgaVH58HUtSM6",
  "key43": "3mCUR7goJ2YqchuXYiTjBaxHxUuGnTTgg9dTVJddj7c8VhtxyYDnDaxnU1VYzjQtUdCgDRJaCtSgnQAwaQrv4cFR",
  "key44": "5deZfjS7tRbWpqUFHA3Y1WHtFrcFrCf6QyTt2NjxyEGnidJnRCTGvPL9SygW3xWNFJnuHhgceNebKeaCC36xL9wS",
  "key45": "5E9fBJoHk4sEVyWbx2RttgzZnTQzCeKCgPZWs7a2ToCx9BzHEXEjaxigNmL46B1ufFQWwsick1XqJ7h2kc7gEesz",
  "key46": "4MLD1jhgcTA46iQdnUvcR8VxFXT7wyghqgu6fpPSdSYmAPGndBqNdnJ8vyfkJKqnU8UJCYv5W3QhQTepVYDBguSE"
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
