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
    "2v1iNsSPBk4Cf6ckZ6WqHM5z2Ze1mGvpBgRzFm8ic7fQSXWF2FM8fwbqi4zkow8xGJwbMA4UjnekhzBrthL2Jjj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314Kq3CRj2EjsiQr14oHHsAJR9v6XDEVjypisx2axRxu586cUKoM111xj5mKCkMFRSjs2DAb14CYmMY8NxJp5aNu",
  "key1": "2ZWf9ZQ4J73rJBA8R6iuEXfwezKdYQ8SQETfNwZcH7bWLPPWvuV33Vs9rnWMzuo38PPSjmjJUGkEkLK36mA6jE3P",
  "key2": "3fqXZycrvgTasNKjejPddTgjyjqzwyQwzsFg2hWWXifLx9jhK6HZJL82pheZU3hNKEBzyzegagXt7DeHXCGvzr5o",
  "key3": "1b1MjBx93FRQ16WQUjsfoK8mND4XZadC3XGUmo2RnaEzFkWwbH773vJUnQErh3F2Jtc3g5oo9wBQRWFtBKUSAEU",
  "key4": "5s6HHvoFi9HdGNKh63tiSNCRBhpADU1Wk1yWbxewEqE56JTcRhUaSCDvurHmE14Uxzh1HB65YzGALxGXcizvkSQB",
  "key5": "3unjGg6bCt29bcWa5vZxrmCaPNi4gYpZmnpDwBjtHF3BTuQVExTzPxT3kcEenD5ufbcM2DpLcgj3XPq1odyYF9NS",
  "key6": "3svfQT65LQi7mD6xGShDJE8TpxuofmhKhxV8ZML8BxYkLtXzaz9nVGN2J71mF8rq6Ad6rbGfXuwxkW8848zk6cmz",
  "key7": "2eCPxTSAFCYVrcfEF6cEgMmJDzKaj7GjEEJ6YqT2prZww5KkrKjTKprz4H7iBhbYnQxn2ntRPurjSKT7Fkit59uQ",
  "key8": "21rZpy67nGi2Wq6kj85MfCmtg1G91u7Uh1gCndcwtCgefwt74Ka6mfgCv8qLhbAKhS7xK8botiojhEMwejjypynx",
  "key9": "2tYrZCS9e8CRcjoVeW4ATtkASHj5z5BYCed8DEPxT5L7jYvuEzKpRmLpCxadwvMJ3HeZNJSHxDyXDRscApdHecSX",
  "key10": "24JLpqymdG9UPbkLayngt2HkmQAc9A2u3q63FVMiQJYzBAik3NsvC3E5ZGiyxojppDmiXsHN89FPKmJtR84R2TYr",
  "key11": "3hakG96TeEtnXPYA9TNXKKSPpnBWHKobTyJ9PPPr4BEUKtBvP9G3WUWb6edrkAyzW94cWgXPFo1geX1L3dyBwnVy",
  "key12": "2b7kt9TtoVpxxwPEc4PAX3cKW62Rr6ELbSRioHyKDVYkdtnL9CVELxy4eLz3Vk81ZehcoS2HurGXzhFeYi91G6iD",
  "key13": "5SJfYv7ec8dxgw3GJ1pkQGj4vj2Bm1ev4Cy8c6k4xNPSyvAXZwDYPyJjgZAJpLuyaAXG48Xjn163Nr1VdstXE5c6",
  "key14": "2GKJDk3TvDN627AFoebkDJF6rg89iXg6juvw3scdNpnmGdHiy2Ni4jKEBL7ReLMBCiVJ4nNXbeyVHoo3JzF3tmRq",
  "key15": "5zR8TF5sQo73aprn9L9iDAx1gc9Yc6vJfcfoyojNDhvo58vqnavCZRE61ZhGiN9nVLXRhPNt4gUyuLsv98xL2eH7",
  "key16": "Mza2hCeZUnfck8h7tgXzUo26HiF8aLSqVBqZcpv89edjK7CnQR4M3TFx7Stcm4kMXzJ9k1BdXryjXiRbxti2QfX",
  "key17": "FxMtDzWG1siqNUZ4rcJTsRd8vLaViVyg51jyNLbDVR8q47q9ZjPrEcVMu8mwF8fngDtwdZWy7kuAP9q4eFyahs3",
  "key18": "3vLUnysRiCWR8KXNb9HTrgfC2QnP7vwNtqbg578zWcVU5Xa9vv6am65wjoR7cL7DNvfWoPcZeWwC82qZWC2Fjdsq",
  "key19": "4sR5uk7r5PxNNFaZcCQTiDTThWHABSwN5g4DA5haESmCmtg59W2DhUiMsqKjmQ8Rnre2CegmpjC4UNSneJ1p3S9Z",
  "key20": "3Fe6MKxYKFdTCy24v1ZbKeqg7SSZKuPGE4Hc5wRz9tRZASLSStwQn4uUpjpYoAzM3L1DEY9W9D5UBnkW8E6DvtSK",
  "key21": "3B8qZT5NxqpckY21P7kzVoeaNNih44ofBdVw65sbPmHKPjS1QcLtb6fpNvtJJp2ocgzYk4XnJim7CMTNmpeCQ5qv",
  "key22": "KbJQz1USyS5ANeeEV6M68rgUyqdMo3GtFwWhw11hr31AbHbXGrNJhH6ox3mpHs1ktnV25mavfiPNrSnBRJqGQjh",
  "key23": "24w5xVgzqL8wcP4awkBWSxpMm5v66mEaZWetNEZPDXBe2GbUrVmQvwM9MD9RvZNtc3GRBNgcxy9nUZU8VcEwzSD9",
  "key24": "5XFCYpQvkAo8fwrndbNNVNA5xitXEtYZwPoUMwb1XUhVMNdLWCR28VyiVYNTyYoKnpa8GUnoJvdUSFrqKu431hGT",
  "key25": "5JhjikcFejRKLDaEgh6JFvve3DmxwyApTYHZKBzhc5fdJCjXrMa2iMCG1D11YBLq9WFW3mKB454RqNKWh1qAL2uy",
  "key26": "5fLWSqWbCLWoJC1tPEDPQBLTrCRNfs6ELxmsYsbJu3t3oZHeWhpcBgeFJ6YajVTtw9bN6PRuJGyniESgPoY5rTLN",
  "key27": "56R1RDmWJfbyTbVtknzBRjY4nZ5gZyrG9qx2gtfr9RwY417iMvh7Fj3ZJKafe5e1WDRQkCbfKbjzbBtzCZRGPuLR",
  "key28": "5iTZE6o7Lemj8Mq7mqmzZ4RxbaRNeYJmCCphu99QrMrL6NSRGrHy2dPMej9seHnso4biva1E82wCHgPQxKBAF6Q2",
  "key29": "5jhGMR2dh8Qk53MEpeV4fbcaNKhshM1U3XGpPszL3HtT78x9JKoxpNYRacNjT1x7rchoz69gS7cMxsj7TSZNVSiX",
  "key30": "4dWWH4M5jKmpne2zrz8GazfxWPLwgWhb3k3XsPeLrmhkJEwVizuECM4pm9pDH8UNYVDi6xE2v54Ymi23pJi6mYt1",
  "key31": "M3v6rc7eNtM3Mk6CSQviTnyhcKzkLdd2KwRjS3KguA1inZhuscJbLryBh97HBAUUn4J3BcJVRHQxPT65Lck84sc",
  "key32": "4FCUUcTK77aub2FS6nzSuS5JhnfZ9o7d7kX8kbnfZ1sd6sx8LhfZ2Qnhet7iRK5BL6TTJZZtQkCp8PvFvwcBZHwk",
  "key33": "5qH2APLuGxj8tqT83BnPhUwf1RY93fXWoNWj7t54jx7RqFmerc4ujsfJsNrD4v6Be12AYdyubD7qMh8CCgY47meu",
  "key34": "2y7AtgD8eXZdBQjbpoEAskKbGaD6ZWddy6WK6e6TFTVDJxfHhDo5iQ1P2yCpbn7Rf88tdsscn4YoAkTgox3NZSuh"
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
