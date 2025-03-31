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
    "2VL6tLkdAEBSZbQS5zHhZaUvLebRDFQTposyrCTyzBBZLEkmCrJ277okaZCAmcYKpeAWYRkfF6DxTJ9DGxXvhVDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXBbA7kackJUc8VNBcaRZJkhC8A6z5nEdYTTMSNGRr5as85VJ1Jyiv7p9KQUwM3ALG5qptjXoBodyq3vt3q8Krw",
  "key1": "2Pqkd5Vr25wz6tVagKeRnRkh7rKu5QHE9Ys2ZRMXtx6Em5Xe9khjdmnQqJW52HaCQ9WPRjaNMsY7xwKsYUhg6bUu",
  "key2": "eLBfw8uNDHzb9Fqan318sUe3nPNYWWSvqNwuq8frByX7yBLtwFsfaXqthfYGtt4Q251RoXuDjsMsGrntU6A4p3z",
  "key3": "39sSYt7THzGnquCBwxCkZUKHK2jPcP9QwVczcrQyQjb6CBStfivuivRF1ksjHw95SZycXHMkdgcnABrhCz6T3Evu",
  "key4": "2gfeks7YzvwwTGV8E2xfD1fNaYScVfCri687FtP4mgP1qLwj1NzuLuJLhbmZp3pjAv2Bf5wFaiUjcGSqGkozsfNt",
  "key5": "3uR78QFpMqD3PaT1cd74w2ehA2A4cb6c12g3Z5SpwHZE9eEb2pkgWqe8XrgdRKUm4CBCiPdiAdZ1UBBSs7vX1q6H",
  "key6": "3N4rdqmtVAhQazYgYdA5KXXm22V8jDJSa56rRSLZK3Wrw8vMxNAbEQpLDqJdn9FyjDzC64qTcrhPHPnAtE9n8wKE",
  "key7": "31DA57m6v48UqU4kydcVbDHCiC7xvtwT8mXzwbfq8WfySkesGrgXHmE6YqgdhB59yiotPEFjXE3eqBbvjjTr3wbp",
  "key8": "5bmCy952v2Z2P3zqC5zhkcUDrTNqZbVoVn7gqy4V8capz89EYjiopRwqTTSZV8PrAjiwjdt8KtGbEGM29PB5RrBg",
  "key9": "5ssaqMRfNhmiRXmujV9JNL76ArZWxoAB7BkFnQMsE3GT7b8tCcr16E89vLaA6SbVJ9Tf9jt9CQTuxdFpXdhN5XDo",
  "key10": "5rTDudAZkEB2GVmUn3KesbmNY8JtDBDox4C35iRUM5T86T3X5voPisAgFnS8q3B8W73qB7dmEiUqX2jSfn9Cr2Xw",
  "key11": "3pEEzokMyEGeGHqYwXzzyxFmBqnaBiUk3cYs9EoCzv3g69KZjhym24AiveuhJBSUgG3MmVLQ4oMPkQvmKGswwhUB",
  "key12": "2opFf9W5Qf2di2dActJkRVzErE8ehAKcgRsYSYFKCdBHMNtsG5QAnGoFL4kYM1nyPbWuncEcoxfLUXGBeJo8twvg",
  "key13": "5nXC7vZX9dSqhJvoKuCyk2KG4j2CsY987rMcJWSCPzjYSMKk14GaQCgmz7J6WwpniRfKoTeNJgxrcV3d9fuA86N3",
  "key14": "2BszDgtT6ifuKCDzaXLxPAvseE665fdFttRkczm8BHnWGxQ3tYne4HotyF41hfRkSvYfVwkPPyb44Fs2PU8zrEdt",
  "key15": "32eqBA6Ejd5L65JJhZTDjkRUseDXwkbu4JiyeYEx6aEYr5dYRAGUgn9GCYTyHNPgtQqw8FZFbsxdV37tRwcAgRsG",
  "key16": "4FX5whcgGtuHpxmFEtYqmsBS9eEHaeZBqf3cukpWQ7nUxNgWF3DPp5cyJRiNzGApgwu8aw6fT6AJ52mRgpfr3UBm",
  "key17": "3VkUZPNEUpJX19hPjLWehW6mHjNtDxAR4kf3R6NqWhYn4KKQFnP9aXFnkCsMZs5YrgvdeRFvbhsw9Apyt8KLBcze",
  "key18": "5rMg1b49XX2JbYBVfHNzwi5FkVsmECPsaUHNVhwWKiAtEfEwYyNajAUqjdtvH8PZPMGt5yFMZKkCG9tHTNWjTju5",
  "key19": "4nudinopPyZHe9ncUWrrqY648EBGwzZ4JtA5B3HnEcnVDU54u1g9x2X1A8WMkSnmXsWMjaVRvDaBSq2eRy48yCqZ",
  "key20": "3QHUXdBwE5pp6JF3ebcot78cbFcktfoof17Kc2kgXmY7Ho4b4jHzzfi5ifbaux6RbiQJeZVbT7ots7mzmwpN8aFM",
  "key21": "2emR7QGFUczkPyEXNN5GerTjgeHDn5Uk1KE89F8VHJaGf5h55JSnoC5wLcpRUAZhfSdYweSyeoeuP9svtJENj1M2",
  "key22": "4fAS6Djzn7XGGgqo2Vcp4qDwLozdDA9ak2iXeQ8xmwyX1Tjh9xgyiJU3GGbN2c91qrnLhcSw5TBUq9WQTZyJjdRf",
  "key23": "2JixLmaQrQSJZ55dFgnLTJte9WdYbkS14Zn5kQyJQEUEkbPVDsLyFs1NhkPgNY3TxHsSJWiYLR2v2RVLspwNeVZv",
  "key24": "634pCNzvCyuETbPapxrU4uMbhw37iR1BWbqvGyQ3yFP1sCcQB3QHnZYMUhGYgHao1q1okhgPvFLZupLYw4vUvQFF",
  "key25": "5ghdLz7SR95p1fN1njXEptMoq6mqo8Vufu9tAochi4F6p5NDSRGs6jGFJQ2w8hFN1cgYjTaTM4c7KNvVc7p3nvyg",
  "key26": "3y5CXfXJm9MYSyTbhw1KnrL1aHS3y7XgEgnDfuqGpxjw8a9L1VrEWb8SwMedwhFDBEtiCPTSd4dPkNfrxxHeZb9Y",
  "key27": "3auBjUm33uAtmnZYxk7BVhgEgfpJFWRWVGnDwu5WuN7n4sivgyNdper2YdCugADmiho6iAgwpNRXLbLYK3V2rYm7",
  "key28": "5E2bLL1D1frw7v9uysGqN6huKvQTkRgxUnDnUYs4dZdoYU8rqhUxF9hPSoue2CKE1R24BozfRD85Gkgu3F1Ccz5",
  "key29": "4sxEadwZkjj4mBbfX3U8mKSdLgXVgjL6b2gukmNa96ehCWAkqDd73j1YNvsJSBrxja9AH2dJB95KnJywnRTTaMX5",
  "key30": "SrBrHJhPKetoudbyb5Heouc2t3KQbQRDGsjoYFqJoK57HCt5wkWw8GdPk88Rf2doZ8yq9QTu9mf2qiBvfdqZ2K6",
  "key31": "47pzxsMJinSKjuGVq7PL4qpaYvWjAfG6ToocuThZENevjacz5ubNUrqSMKu7w3uZyyn6VkivBs8TrmNRanVh1FeY",
  "key32": "5kcxTdV3xjjyC32Erhvoq69xFuw9e4EsLmF2XhXx4bANrNaFKV2qRi14kfkCdSoFWhTkxBfkX5umP8yVsQJBxwjG",
  "key33": "FJSgvE1rQBmdV1vVm6mj4eJTZwT2ANDPb34n6MqeaRgtDUR3vdkmXNedN8hvNn57b1wYJrMpy3eGQE1sd95fBHv",
  "key34": "44V13aCP1oTXAy798u3mEisb37aPHeaHvuYEqiiPNg4SGzUkbJHuz2CHBiGpMVPyEFgeQkWZyuxsD7spP8WoeW8f",
  "key35": "4Ss7LhdZi2jBjDh6Sb8kbSN3XinSesdUDVArKvcjYqkUoMzLvsWgfLmuW4SVfyF6HfPeUzBcPKZfJNB37jmsRxQr",
  "key36": "3Z5Hhi4E2DvGENomAj3nC1zmZydT3w4G4DdkX2U5khTEjVGfBueBuqDqWzCtkS9Jey4k5MLwC8b7bEZfzbHw3ZjM",
  "key37": "2NXB5XvcduU7Cd19Gxe31eLdDkkVtTo4ckouPUVuNvQBRSb7HtA9JvACtxmhyatfCyjevW8yEJZqT12JEELWfurY",
  "key38": "pmm6hQRXS5AUS6MZiNWU5um5af21UyeP4BUbGCFMjdZkFX9rs9fGBYoE8XHn1mtYNbmZhoVCan2QkqvMTzvXVQ9",
  "key39": "3sfKNwmR8pWc5QzFLYLjtXvMTYdSFfnTHXxTaQKLKn3eke9fUknLPFHhMjBhotWfbXZ6cHsdGJqP1kjkZcC3p6RR",
  "key40": "4Qn7aQ24P7giJ7s257jdKcdLGmHBk3ZLAEhRfPRHzQ8euysrySUugy3FgG9QX9S6RjHXu2Jrqiik14XatMR2ifLa",
  "key41": "2S5PBSahJ92De2hSwjhrZCG9upWpvb6VGditNMpVRE3xZb48F3WhLcrAsNAtSYDed8XZgAH1gPDkSXBVtSLZR2xw",
  "key42": "5NAnJTaLhm1Z4og1y5HhUwwriR7a7aUm4XK2Jf5d41yA3UpnYeFKEFURXVoEEyaTGQ9htNEqweuaUTwAYkJw8NNC",
  "key43": "4vYs7UmQVd3s2UHdfgWg34f9SAPWtQn4YSyfx19cZLuBwTJa4NQHM8Nk5whJJTqLS3TLuMgShSrV4C4ERmF2ovs",
  "key44": "4XJuq9Baprp7pkmc2QJvVG7v2aNdAcEnRVCxycas966Pom1d8dSBDvhE1pyADTNV7SRjhB2pTeUgQuuLfgjC5d4W",
  "key45": "2wT8kte6CLwZKgbus95vWfcy4EUbRfVcxyXS7KGRQDqbA5JazagmfTJU1rx2fpG33daPmVWXMNH7mSRky3KGXnqF",
  "key46": "5XjSg9vr8sSvTZsFhB4kembAC2PceQ29PuTCjJyNreMVUg78TtBkkonjkhC9o2QBsZcwCWiAhs8k9dzEsEXH9K6a",
  "key47": "wU6VADV5wappZqm4TgCi8kpme6yoMM1DJ6buvpFpQSSfzAFx3b3jSmjqR67dmmeqiViYHPMVsQwSjBKJ2EPo7zB",
  "key48": "4nEagRNHZWzjFuYREhuHbuYtajuSiuDEkVq5kGu1eGNbtndHcRRHDinmEiYiEkoGbyQvewqJa6KaVvQudLrqtqzJ",
  "key49": "3swHqw3bcbuj7DXST5hYXEiPohzE3Gd4fUxUrRWRwjwYrLj2BLWi2rrAoBRqUAKtVN6cQiSFr8iFagX5VSBJSNxo"
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
