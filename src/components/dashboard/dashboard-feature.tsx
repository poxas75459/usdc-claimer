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
    "4vmGeWmmztzBgnwzrx5GfbNX5aqrUPEsmFq8nDXAEFzkrzkfbb6dqAE4gFqufL8nT6LxXoRBjxhb7wDEgCAqeoi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbcohUog2f1Ze3uu5QPUjyVkBAJ4AeuYAxM2UNHEdEvHLbGKgy1b7ZcUgGz75yM1L7vKD5fXrJnM2VoGLXxaNbV",
  "key1": "23aypXfKCe36BerBYaozU3iR2eBsCrvKtHYEcswx4mzomznaBVNs9oTRBRjbs62jEKQgo9BJGtXcf1aEpX7rdhxW",
  "key2": "ghAc1GXZjVn4zakbeUnHnANfz84uqKKRcy3Gj31oaBS61AR36M4aEannSvmr7QTNikDMbN4PnhviArseE4WAqa8",
  "key3": "5UsSCezs85YZ9iRtUcMVT1SAkbVcMsu7yzrYAgszoWTUkpfmudTTrxNSbsAacCcvybQ4pd6p7kizDYKbDGjP7nmp",
  "key4": "2mzhECgoG7HW4nmZwosAPsHxcCri43Tu3LPU1mANBwJYdfF1v1hmWYGPPo5DvVFBKnoXDLmDvUUitTUSq21traFN",
  "key5": "2qQX9fEK9Wvbow6U42BdUfJ7ciBV5J63DGEPcNmgvxpquun9pa2aAYSubWbgCZsXToPFh9addTkRkNo3UbK7U82b",
  "key6": "2nNKUmAT6ESyzncrXD2bMdHo8S8yUqcSUqjC8az62NWnJgvCEJgoQ12RXVNPFFAyBAsojnfnur9kmhTvrZXrehvw",
  "key7": "35W2RKwtWe9yXSvH1JEL7Z59VttoTUC3U6SuRGpY7hmD1Nss157VnddqRK2xbwaE4ydULyATqZox2nk9tN7hY7Fq",
  "key8": "2Wp9ss88hiqAfnZuyQcKG1XvkC9p4AZkqHxTrSgS46btPqJ1xqdVeFAMrsp2KjyosQV6s1d8GA896LVdH8wBvNA",
  "key9": "5DpkjXETk4rpcp5ayLJKz3tMWwRhkdv6W4Dz7osyaseV3GN6SNdNNFg2mLTzkqnEzYQaXSufwzuwUBNbFixe2YVu",
  "key10": "2BmYg9sQbeCEQ3yx4uNUC2fnwqXgTEC2qHp5M5NLzuQWSx48jWAziN8Mvcejtz3Ub7egRXY1ptG9F2JEoz989G9W",
  "key11": "1Jz78ZBPuiUhKPTh5FPkrPGipNuj4sXU8n9Xij5WUhovwS9p73K4jpnpzpQLHfYH1RAMHSTuRFXVss87KT5J5cF",
  "key12": "3iidZuBJjBbbeoyEMD1s9M155UcVeJMjU9gxsKLLbqx5HpdyJj5i9fD5cgJV41zAxtgJzP78uoZwdUu4GNff3VY5",
  "key13": "BeVDiZCVLJRZ682gSZEKgTZkK8ZCNEn5eHEGs5WS3Q794xrnYE2xcen3LH6ZSWXVyyz1SrJp3ck1VEEtaeAvAiG",
  "key14": "53pSqYYpAZMMByrGLV3yyTi8p9bphk7spjhEtp8rfwmjs2qYX2weQ9UfdEQiWcR1LRAg5AQUyxn13CYE4iVVtMkE",
  "key15": "3n75uwDECJR6mrL54W8ZXm1zAQqcpfzD5kJdnq1TFkGK9Tu3DSaF1Cxs7ULo4rvxd4vJ2hdsdfYUKqcFz1xKG5Qf",
  "key16": "EhXo1NBsck33Vr9YKzHTE8sckPtXKWN4gazHXQsRaz4s9wmSHeMuayq67w2K1iXomrL1weiW5v5r3p39qdmATGS",
  "key17": "4NwEUMUQSwkL2amwZRBf7S7yKSREXHwVeDUjhG4sRNQM5T4XcSWkj5UaTBfPGnezQDvHL5ZkpihYHk5cje4bJr8G",
  "key18": "2tdsaVo7dG83iPER3cXUdjKyB2BJokmo1tTT5QeUkSfoNtmJNzSvbL3EAs7usGvQALaARgRv9axdFt3dhJsxdipM",
  "key19": "3NrCVmosUF1JamuDLEUVWnFwTS2EY2nVCoj5QYTXt6WcT3AtjtoCJyjRZCRGNR1rEp7zZGKxBviXcS1uoscJRTxs",
  "key20": "2Z89zAZxA8rFv4SjDHJM2t1a6muQSd6kzhbr7qGViEsiq7UQ9yeYBfUjGtnr4B9kgwMUEwwZio9ZXbiTUMud4UWQ",
  "key21": "3iRQMxENqCVqYndDxmrfjnrJz61kgXUuMYkrHNZaWkpmHkG1zMNvpuYdbAyhK486ftgkjnybDjPXGLSSjNRmrRrg",
  "key22": "3UBLw9PrvPH6YCGRzDoyYF1Usacof5oHPnEKFkP8VbodDze1dWbP8DzBYozftSxuPdjDhuaPRVrnXCNnMgya1Lkh",
  "key23": "5Dk9ZZmDYj3smQxPdUHKYiJrgy1mNgSQt6iE4USAWt8qDpQZrUbtN4RDVpauV29zA1NjV6QoVfcm4rWujG6p4Hyr",
  "key24": "5UHpaLTsssbd8NTR1kdmv5xZKg7DMjeNQHWsqsamrfGGbydPzEhA3WaLBuyy5pSopLKieFJRKCc8APuecf8q1CMg",
  "key25": "P8FYpuwrtG6FEsWZgGddJwUbcUg2ETs2Ajnv2wuP4xe55gEW1ZvjWeRRvJotygpfX772jescAJFeGj2j183eiDy",
  "key26": "4wrCjWAnmWovyJMWFkRHBCwcyciQREe6X8b6qwhz3Epnjr1ohp1dvW4AACHAVrDG9dYtgcMYMRXKuu2hHGHmcLit",
  "key27": "4yuSsADCLwHhRFuWYpkkdyBLH6Mosn2N4A4cB1bdsH7xnd1s7xec9Evzk7MbY6EkMS8u3NWfr31HkAL7dssUmbWP",
  "key28": "3CrkSZLLwTcHotgs6MMmUNEu3W7A7J5a3VBASuHLD7Dp9GgWYFVpcPv6nW4SUo3Za3hDexwsC5KRfLYzMp8W2eZe",
  "key29": "4CMoiY6Nbs8m9YXkHiwZ4hPgYniGMHg3QACbW39Sca3vr69uEav9rA1QpjJG5xx86xTfeP5mXXpedxbghPZ3Nrpb",
  "key30": "5hVguo9VP4JpP4SHFfip4aXd8EvnBqNesp3v6QvqeUxpxYpTHB8vjvzwnZCYurBcosbMwPF9oJtC4LiS7BpkhB8a",
  "key31": "3uuLosT7ydvJCL7hEoP6nERxwFD8srQpjzYGH7NCqJFu89Vx7QY5kaktRGAqSbURS41YyWUtiqZWbtzK8rdSv8C5",
  "key32": "59GVwCKfBZqAzSxVTqZWGp8xDNgP6whmreMFgqYsj2QzLqnWJUx8govRLM9rHjdMvFwDo95TbvojQfmp2CTXMbw1",
  "key33": "VQL5kT1VF4cymTEQMF1xTMf53FzB6dP9pN6yJvWWWJTy8g2NEb3TRYr5vj74pPjpkhucXJnE91XfKxfmUGf7qj4",
  "key34": "P3mqH8Cm8h3KRP1pM8mNE2jWNVvSdqcdunqbrTUsryhwDMtxdboQV1PRSwQMvQxtva6PvwmAw47WBYtbdR3d66L",
  "key35": "2cTuZ4RVfKDe5RHJnAMQ7fcxRSY9zy5c9QWenZQ9PwHKMiC61ktZkN3JsYGTLJN4LtYur1WadwzjqBrBH61Vsbz7",
  "key36": "3PwXaFvuUj2CcNiwcWVPZFt8kQXnyg9gHwCVVmQYcT8r7iH6nV5x5hbckzfSBhRaTSSXmfzuXuLXJLUxf3CUhxU8",
  "key37": "2NscuPYyuZk4QWmWMaCS2m9u3Y1sH3MYuc34c1933CmrJ6gbtPHuJ2sf778dLKkGwH7k262UGG8HexWmN5Kkj4WP"
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
