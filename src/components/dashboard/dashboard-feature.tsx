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
    "3wsQkAc3jx5BsWJaN9UREGvpekx9GHvucYfBvQfAF2HVySmYHTD5f3qGTkSatxN29CSf5o2uxDdHwHBxrn2SEtVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjdSPQ5MJLcpZ3FLhGcNvEU5BmvkWc4BnocrspTV65zhPz51YkAwU5oKvK2oo63iUAujPS3cXM3dkhMP5sQfjYB",
  "key1": "4xMfZiJzEAgkAJm4Xo2rYZ4MTMTFzc9Rcc5k8mXqcTfn2eaj7P3mHUyNr2LmPHcDU8UFwy8LvCFTcGDZ9SGo9EzX",
  "key2": "2TFcina3LhkU28Zn1qUg4YnhBEvkJCLdK3FtcgwLA7FFkVqZDjvNTmnqM5Ngp8ztQNacKjdAx81EQCcDvUireuyZ",
  "key3": "kaPY6v3JxF8D4QqwiY8s8ACXWBsw8DN1y9uqQJbhAX7MFRS7RxsZfJGXPtXHf64pR1AW59x8eWiAVYwqzGfeQty",
  "key4": "4oUwyootxg6MZiigJLfgcN9Hzdxtvd7qmuufuLECXUZGzEEsChg46wEmnWRjEoCyZcy7s6fs7qBKtuq5gXf1CXL2",
  "key5": "2xATwF7gfExJS9TrmXYdJAjk3pShoJ7WkV8CwMzxVPHspQEquVfrk8cs2UKHJb4NCS83X4C1rC8DF9hx1WFMCXr",
  "key6": "3Do6BSwbELJtCgepLcoy7iJKVPrbMwLxcmRjq1EHzKP7jkR2YizYX8fF8NfFRz2HxZP1f1HXsDmGNSPU3psSWzfy",
  "key7": "3CVSByS1U85iPdDRaiaVLWwUdpqEZC2Uo9kfQLEzDYjmsHtzNDBTxKGwinohE8vNV56P2mpoTUMErEp9oRALfw2j",
  "key8": "36dhHhiEWs6CUGFTmavymPM1PxwBrXKxyz7Zx9dVyDtMZhULmTthQo3E9tMmrqG4vaKkY2Tbtxp8AnAoXLDe847q",
  "key9": "3ruxu1mBAQBK1pkoxZQF6WGHymFj8tDA8ccdU5o2raD7qi8r42A4VnUaMXU7YCoXrka1LXD76Q9czJJCijLtGA3L",
  "key10": "5x6yTGZYPMAbngQPge4dbQNuY1cFj7ByQgEPXxqGPCHGSCzW1Uf8tRf6oStfqgDhE6D4awYcMbbyXJnPRCSkLDpC",
  "key11": "4hPCb3tj4MsxmrSCrbn8Q6aWt8uB3L6maPaWsudXtCEUG6KTN69ZpWBvjBNFiriyD5T11ckSe5rLTZ3ALkvxfgwx",
  "key12": "4E4t6dbd1EBCvjy5SVsfR58P3Nc4U8QTaFFWkwcJQcwzzasywFyyuu9hPQYpEoVpq1wY71dirMeC9hegRBhxYFco",
  "key13": "3HbUc6gvi1MsjxL7MoJow5Xt63YG8eFrGVAFCasN3TsXBFrAWjQxz67e8hwXx73PsxRMMotabyrPcUFRE9myGJap",
  "key14": "4S2p1sdruGe2LJtharNUfUZEDAhCoLigNeWxxQGsHkPpJK8vAoxctE7BZEDaXs5DCtyVKVh2kByHehWNpp126aee",
  "key15": "5M7zvg9L2wrggYomCVoUE7NygoyJ7vFumtr6P23RH718CAbYYMqoi3Uy3EGjBLitgb8LCpRQVEjNJ49uPAJr4LZF",
  "key16": "2VobfFkgE799VdauHZLdvwnE69axd8mumv6XTsjKk5EufQVPiJS2CFgCUpHSTzWe9iFrYo3sgebmC49Kajwnf8Jz",
  "key17": "4EbK7E6Xrc3jdz6W1DZbiBcXK1ipS9J6NpqRR9P7yYVRtsYX4HfV5Lpt8nM8Z2xtGSWECPCCEmXFA5qbm8aTnTKX",
  "key18": "5yaZNv1FFkEtnLqgb5RNR3ihvuPXQ2c7akVZ7Lvq4bWsaYfTFiDqntahvYvesKSEDumBiSHn99wNBgYSQ1omax1u",
  "key19": "2EwMJ5neHiFF8BrzKrg4nooM7ckrfGYMP46rjf7tV8k4128RztjcCNKm1LoSE2Z5Zzq8QnGVoxmSQ1Er3oyDNJT1",
  "key20": "5RMk1X45jzMoMMHvs2fiEvG3VnUqDdRgnErNMqXZjNcPxQ2cRT3XFkCHtMf8bbHokyK8ooB6bopzuQ9LhoDvBkch",
  "key21": "2L1eCPtXkhieFTFymgXaxs47JtoiEFnQyj1UZEubMKBwWFxEQYwSH3JAwmgT6w9hHwMjCAu3qWSCHi5CNUV7UP8f",
  "key22": "59QiKCy893Hvmnc6MGxBU3x1CP6s1xGyGMhqVnyR2FsQ6GiW8oD3vcVQEDGeo3iuCTQfdZZ5bTTMbcwwj3CLxCW8",
  "key23": "61iXAQcb5zmCbQKFqaC6r8Lb6pKfWbMpepTKWqxCVqr7NDvJ8z1RjjsHj8Br7cdu6sRkgJKu1cQ64N2pYjSa1odD",
  "key24": "5yAHPpVemyYYCNRitELj8MxiJMMcd78uvWouN8uCQPJdNmqUW1L81mAVNfko6J6mr3zWG9Hw88AFbWN2nV6DWTCh",
  "key25": "3z1MiPFKgJytryUickhZawFzGxWDmWKonCbox9uPDa3bzKTyqGPKFoVnEHCmcSB3SRdRW2tEKHcBctAGP3C8q9hs",
  "key26": "2DmDsN8vTrCR7oTGHaYRbgGVLxa2Dx3L78gqs2bDbvBeKL2cS2quM3DKtpq45axUYWVHZ8LXkhDy9RMmP8ewTSax",
  "key27": "2iAUf9sGoFjSed3bVPfEnKXKtYBEGfLb8iUoVF1fAdFi2QevzCLFeT1E3wxACfnxskYuefkE4Rz8WVroGRtcsWAE",
  "key28": "5uv5ic1kbjL587LvnJ9gdYvJpoAfSPpU56W6FuKXzoYDxaaQLYUkCtES9cGA5F9pUCPVEBAbMBTYxpHyPQPqQo3s",
  "key29": "3prSzFXw9Sy94g7BHZ4zmy5CR3MTXZXhdp7s5TjwZu6f2bJRxBKbVuaLzCqXuHETW84Cr4Z8yUq1yjAmM8awMJnK",
  "key30": "2i644CD7hS9aEHNWUQrXmbDk7bBmcEmdJ4gSBYj5KL4Po7knNejP9efU6XnLDD3S9f6g4T6CWwdx6EWfVhYMKtwa",
  "key31": "64tvneeS8J6P9nMdpxkpDDRdvKT1XRi9M5MxJ7VxhtfNNEUaqmCKaD2GAhbBV2hEdNU76vwxCB7QMWcDjLSpLmG6",
  "key32": "4qbrGgsvwtYeWVZShc732vugPRrrYue2shMhK9jxPzNHm5BLU4dbYpyge2GJnSik2gU1VqSuAFkRBeSsgPb4QcXr",
  "key33": "5p17xDVVc9ZeHkMMeMd7WZUSBs1ZSw7HT69KUDnD8MB8iBi6rLozERrYSCovZb2TewqfBAgEugnrsHp9PLJMdgnN",
  "key34": "52aULvypWykw6apb8fHMVMSjnEL8m7EL4BSkRW6zdH9PFAJxkVVyyTWooSFkqhjFJgafrDo4BKhws49g2cL6eAWT",
  "key35": "3vup8j37CJandVuxtmM7Cxpf9uAeakpg2Fhy3XVHjRdea8Fw8CSfK6hKx9Ec4SDk56P2pTtb3mSFfSxpbpo1z81F",
  "key36": "4LvhCaMtZugzLszZdURmMMrZjeUFKuwUTnzkRWwkHHgErsaHWDoJLedzdfC92ahX3a8i81J3vg5d49Tya2rJhGiP",
  "key37": "52Wn9Pk3nP1hoVi8XjCnbjU4zhaYQnDAUSXMfT4EZ8gUy6TnoaFp2JC2p3pJaJEzE2s7f5cDkq4XrndsSS5Qyq2N",
  "key38": "8mLoNbbQcjHMRr1TdTswsZKrhViJ48ZvTv1YhRbSZjeQ4amT2MBKEAb1ecsZDiwRhSiGDPPQA1x4LMoBNosajf3"
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
