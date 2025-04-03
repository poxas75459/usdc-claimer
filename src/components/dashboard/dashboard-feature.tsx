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
    "QqESDvpo975TxVxtu2GyVAMyYvaLrJdapDys9x9bMhLRXMZ7TH629avfmwojQj2ibenuXbCdCDZdUVqgruLtEZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTx1Bef7TzJKjXN33XBWc5ET462ADuA6WW1wN9yiakJPqutq4oxjGFhdNemXeRieNKaVF6TL31zKiMhuHh8UyRJ",
  "key1": "4SxjuYaZ4cAQJYgqbtLVjTVCLBtsD48fsQ6nRshrTy5vzb9jxg7Ruza8XPi6yqPFn6wXfms8gaC6No6DTg6XwD4d",
  "key2": "4DEE9Dz2uwi9sPzTqfQZAKAJKnHRdhcLYGsbseuRHDJuuzZyZQWgDpQQh6hJvpPfN7rAuAGbNiCzqTUuWjdbhw7v",
  "key3": "3co8VgsMU3RXGdNcdJWedGBbJPsewwEisW8NZZW9vkT4Zmf27HB3LqkyDBgTmhHVzxMXUMnNQRMjVurgMZmdn34x",
  "key4": "3ArRiYQwG2SM92YQuZ3uWHWBqd3eojDn43FiDpF9ZLUgSAcU5vTMtDNgzjxHnHB7SHj7cGdPBVZgkbtpaC1fSdMV",
  "key5": "2nX1rjJQTgQsVE8hChpDMGPdHy7CeQyHTChpJC56HZ2zKMasxMGqtgiS5gxQ4rDJgMS4adof7hy81WqparNwNSzu",
  "key6": "2E58fQtXrn2g7bVE7ZWs1Ctd1qpmHZqVofm14saoiHbVkjdvKXXfiLAx6zrHtf3SbxRo1AMSZwQHAK2EDfcKa9VJ",
  "key7": "5SLgFPY3jTJH9bAN1XpnakaAMMccTBUtEarMyEWBXiHRWAoK89vvsEcReSbiPi8xfGQDUV565CcurynMtsiQ3qCn",
  "key8": "GoDPpZwCVmtk5QYtjKeyXCdyxdznRe4AVU2N9LvyDPVzQuUV2kpeCDFp8gC2ng78JPHL3xnKTYEEm6Pgj2VwbnZ",
  "key9": "3AVw1AM6fsaXukwqgnuiKgMSw8PMdvWY3yf1QiQN9Ss1NzPdcopuqhWVs9akzBLfTbh225HjKebtVubTPnkEgxzi",
  "key10": "5XjQvL1RQ28fWcWsMiDDakuDykJ3373HcTWtai7W9Gvi7E5CHiNMY9RFYUUGyS1fEYTywesCCX8TNYQVgeSBwcsB",
  "key11": "5Mqi7xrmHUmdfXJM4EKqpqEkH7hLiJoSFo81tC3aTyzupwZswwEnFCWfNCCWTkwH3BHSXwYfdUDs9ikZtUpfaB8G",
  "key12": "25ioH4GzqVjL2Tj2cnhAje4VgYecZyCq9MCy96aqypAu1DHPQZuR2s74ebLC2PnSMuGpdWuHvHhzqZ1y8GCNgekK",
  "key13": "3SDaFrXV8Uv8VFKVEkiJGyJYhZJ5P7qprWzAGV85ZSPDVAWqUkHBLLteVxgJ49g7n7FXduwDHkRRsMfAsgDZNR58",
  "key14": "3RSqiwAZv5QkYcj6SPKRbRdKjZvDgNtgNnbsdGsPj1LiDKxp7HwRQJ3gXyKZQo6z2KDV53jGvJPPNBE9U2Gdxmgh",
  "key15": "2xkQ6Aep8ojGdGr3yosWwNoKhawSiPpaBRVWWAe8mxJUZdmZoF1rsop5N13m6ZmLUaKwcdM8siMDkxkgfYhhisrB",
  "key16": "2KUHrtvoCbxQXfy3jFx9MgF3ZBQrrUBZ9tg8uHeyfkf2xjSjBkKMg1thVnYq7AW69gKRskH8ubVv8mPEf9xiGqdr",
  "key17": "LU8j1bs8HBKVFiXEHpFDTxyEz5znZ8FPWAUL36Je6Pzk4FTfYPnZBzCLciRNmpEt65FupBPXk8jmPtq6zKi9WoN",
  "key18": "59d1uTSTqE6CAPGYQzz3UNAdVTEQGEoU89RByBcn8xSXG8iutLtY65WrJ5Ewkg6dmJrsHJdKAyiLYPCsFSNd2obY",
  "key19": "65JJAx8fPgFbJEjUvEYhK78JfFeRwg8tuGfJK5xvnzuK9rjp7ZXQoHKT2hw69Jw8zXqEzQZaE9rj1DgTrempA4En",
  "key20": "36RvTFhLawA1Podq8fJfBQbKLzzG6VmDcmPwHt1oCkCzCHX5bf84s7ZVqkApDdw1hSrdbHEMPwgiYvW8urznTEip",
  "key21": "5vk6MHt2ACb7vpUSDTmwV3wQyVR9YXGq2bBpHrBgSh83WcQzSZ1P4JxMPkQZWL3TMrKSAtX4HxCJZ63CLxGpL5dV",
  "key22": "p7A3z6EjKyd8rNf1Ne4MrnUwKTVvMiU8QjiRHEtpcbRR8haUPjKG82cmjr6wEip42oC9b891wSVz5N4vjuvgXaR",
  "key23": "2VqYoxJHVj8eNjGVdegybCjbGfFLWrRZpLgbyYRGLowNqaa7baVDgNJ4bnNn6dNrEVErb54ZNSp573bNJTgqdRx4",
  "key24": "RjeK8FfBBb5thKh1kmW4ptraXCC66E8d2yy6qJiJyGD9EA7mUPvC3KM9dVbiVfffkn7z7y8HeCtNc32RmUJtRjx",
  "key25": "3G49Zo8TU8t31HNhF4ZVMASMT44ZiYZjm3vRPHcYQPjBxx9adiWduD5F8dvyroqnf3ZqeV8JMxPWXhS3sAexiKiX",
  "key26": "4Ww6dQPK1cRAAqyxVwEJTQWxghfbEHriAewApec3aYUgfxJm6kY971Lti8cLznuWnoNGjD7HofWi8KHY6P5FcKhN",
  "key27": "49PRHAJkmmt8ktGq5Zn1FWiNvqtAUqqDBXDctkB5wmrfseNBs2w7woP1ExjbGtQtYA4oCPL1xHCncPiskNynqckD",
  "key28": "B3muCtappogGbNezTeV1mYXv6c7fnPHNWw8FYbwLUgXUZ5DpjyYwiwo2i4VBUsvUsCDuvFPnQyjYcGZ6WTZhTJL",
  "key29": "5CHrektPZDXiqAAbMFECxYPjctvakwdaJ11c5qyMwm7V4tGc9hVnmoW8MSaynz9TscPQVdWzuMsNZnq37CH9eafJ",
  "key30": "335QHJL7wawdYbi4xoKga7CvCibcuYfVaybjkneMzGdZqMMGHFw18RJdvnBKXPdxdJvqhHxWmyomiK36Qo4qognX",
  "key31": "5MpEC9qsKY9NQkvYP3D67Yj4X5TXteh5qTBxQTHq9BXHKzanC6VFSumzZ62HKKaaztyE9idcAHB9BYk5DPGdek7i",
  "key32": "V6e7cFdZFGeA1KMxPzvsSRaTikXhdKDNAFZsJek2yF36G3pznoxDnvomR3upfkmAWuArpxDdbFU5RXwJA94Xvr5",
  "key33": "2TnEwmzzqLbg6jbDQJbLBKGZWyFY17JXTTXnL5cQ4tbAN8dJqbKiZr7moDdEfJH7FS29ZUGn4HsAjNSLTanvYffU",
  "key34": "2Ns7dEAY1d3vPxvFtzfMar4m7zLjeAW3iM8qMUdEVAAmQVmur4W6CQCH6tTZP7GxkMk554RcdRMpkbWBoQkPqxQL",
  "key35": "4kcWdB9xQyn59qLaxbp6hxbvV4uegauhgqiVbnYRR9QrHPifvXF5z8MtVJFqDZCcdmN5AeVR5GLDydCpERzd2q7r",
  "key36": "5nEh1kyY9ufa3wiiiTRT1DkzuY2NB2GKA7jJ1u2nGjzd4idrbK7eCs17UZVS9HFt87Uy89ZgQLzAhyiEZfD6S9wT",
  "key37": "3fTVyNKNBWWeeWLM6wwceq9ior7UE7ADArKnZ2kZ2yz5YFc3DxJ5xsXrF7BL5KE97yoMFF2dmBE3u3cF4XyNhMio",
  "key38": "3FYbCT27zNG6Xq6aCK9rU3JTnsxDHUEsUGLeW5hwVSHUR6BiNW3aWeEkjyAuD3xUA4vqkqtGwwdxWPEnALRcC1Tb",
  "key39": "4g9g6VkmwDdVdEwwQaqcpBAaM4wndkn4KedghjwTc4SA1zY4TnD4VJ1kLrojYnhSiU1ijEFLvANe6DEbCFWKEwnc",
  "key40": "ChxV1hr8V7P5wJRd7kv98N1TXXnHK3G4GtgnkDHoWGmoX1EamymtBKdR6CGaATPthC156Nq2oLEEbeqc3vG9UEx",
  "key41": "3i3MMYV2VRgNaynusyx5NkN3Js31Kx7nSP7ZEXMvYcN4uSwkQrm1TasauRChjEyzQ3gQjxcsSu41dDvGFvLASp9b",
  "key42": "5HDwrq9LCMJ2RVSBfVNVPnVAtpgQEcMHQotDUbfHSC1o7L5CZ7oZ3M5HhRUeipF5Ji1yACeo29RomrMbWAQFy7Zo",
  "key43": "55pVFYtJghkGyqjWu9qcArwkwE9Le9aXSAGf8CTyoMGzZUrQUNZUEEEGXtF3opGbpBV4Rt7prp3g4DiurpEstbEu",
  "key44": "3mphdxDc8Eu6Z5Lrdc4Bw3hJyCH4giFnDeBPA7Fgd2wUT4uFzecfEdc4Tp3T3zmgAmr7s7RzmbaqLni7cBNoUbJE",
  "key45": "5NUEHy1uZuvfGhA7S13NjrHarufM24T7QvMWEPijqVhMrWVAVKK5LAyiNNe3jzFrHpyC6mLnFn2eBypBA383nDko"
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
