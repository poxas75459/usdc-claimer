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
    "EphnT9cBkudw2CSpSEm2pf49M3tRWYy6WFkQQJz5UwweYKuwQpmjnEzLJj3vY3oVnmwV14VdiD7Qjvy35DqEfhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfnZsaDqptx1MzHktn3BHuKM72cJiPyuaVrv3sM8uNboTJdczbKuwaNCTFPKmcr3vycrK1iWZchbbpBkPAi84We",
  "key1": "MSQQiGM5aXpUNPrVNTdsfZMtrzHmPP7KPYcMw25AYdj94NAxEifK8vQEdTQxKghc87cey34geBWEnLiazeWfbRd",
  "key2": "3jJtVEx8cBcRnwEs6SKbTWX34zbafw1x1sncU3tMtr2Tvsd3vmtcGu6e58TiwdVQ1EjVveuhwSY4pi29T2VS8bbx",
  "key3": "Yve5YNJLJk7j95uPzEVSgEoNkivFtJixzmZMbo5AmJS1S6gj54RwtY17g9LhaxKmfgnVA7erHziYqU2KvsunH3e",
  "key4": "5bqR3BcErXTa21WiDpBsErqBNRkewfXSVXTZPZQf9ZNRA5eWnNNrXmo5zacJZtMNPBL6FAtbMoy5MSRyKHndTghU",
  "key5": "kuxsSuC3HWr9vhdaDvszaysPMD7cNZ6wJHsJCa61v3Jv8sjUJxymtkArSLx7cp88mSChCmYGNXfycatjJArhnHn",
  "key6": "5NCB7sMYzscsmSAPzsi4Lo8njvqo66UBEDeNpheReQePxVfLBTvRYaY6RLoFBjeDh98nJ6tRvUt8zrdZ7e19Cprr",
  "key7": "4dGhLHzZ1jrfjp4ydrLL7S2wmAn8n9AxwDmHXABrFPRH83sazb7cotpLxZ3PRcU84RKRsCUfYw2H8Wn9wnQP9z8G",
  "key8": "2jypkNe1mS8KrdywB4oS16B8uPY24jGn7RkvHUdLX6dSWqqF93UTbQHcTohRvMKDW5P3HrfcJzTmLb3bAFvZVTjA",
  "key9": "3nVytZscHAJKXnoYhRY9XRyc9QpKY8iGYVDFQVh3U8tHYV4HEz6upsZg32mC7NRvGEFQUqLc8jDdjwM8GSHxsYGL",
  "key10": "53nXRLFj1SEKsFKVUfQVrV7hfK4KVofo2KeDb3S5xbzB5nmy2gfpvsdYQemCaYptNcSjbDhnvg5mBH75EENiTW3q",
  "key11": "C87uyCXwrUSg42yai6e6pyVATyz5pVvn4MSmGNywd1p5VvSSKEjTUbFaguwvn3mXwjqHdLe8oTiDB3ZBY1RMXJh",
  "key12": "51246ngviECnLvXmMtK5jMrUP3rwhbjNT55w53vyGw9HnAkmqzwbopSn1dfrHAfFfQsn3XfLzYjYzamHua2EtiB8",
  "key13": "3cnqFXFCefCXqQDuJHihY88VZBoq3fnmoshXg9W59Gj6Df7E5vcabqb3gb3co4UtRKqs4bDeC8X3rKu8UVntKRM",
  "key14": "LH5pjSd9p8TLeLF3qVaruHmxhXRyTkXVThntKfRxH7m7jxkpVQNbb3tAZXMuykj7j96fPhpktPfdM8zbqYw5wmz",
  "key15": "9tSRz6kaHETmHMJU6ciNsdbpFnp2anymsDu84yS1sJYo5kSe5aGu2ZpjuviWCxEBuMkPkVfgyZV2atP3CLyM9he",
  "key16": "3oLWsedE9kJ14KiZZbR4zCuFVBCQ7PK3rTbZu7aSdUNGkJix7axPGhhurPTfYZTZGKkc9qMX8LSonjeHF2uq9fWq",
  "key17": "4cxNwyBvuhgmff9MuonUVwdsTZiL7jSt9uBihj5Pnv1nFF9h2LCPPztya8YKfCJ5p7ruByN5hRDRGcT7xwSpHTEo",
  "key18": "ZXiPWLJAW85iQGVAW6TUBpmrQA1rXaZ5HCuCBDSeChcETc5wdrvq3rKTVRXukNMxokJQ6PAPTCgnhWjvB8NbaFj",
  "key19": "3WMMSa3xsCPPzhERkJuzGSExMFs9yaste8YhU2qUBCLFjr84xGBxRQ1vamw3DpEbQx7o9xZrPZarKQSZtvRpb3Ja",
  "key20": "5hgicqnD3QFWWCoGMxeThxKVprqx6ZMgnxWSeADY3bE93qD3B44otFa7evDZHJUNvg9fd4SXbYDvcFqxxwViErbi",
  "key21": "3Jtk86Ayo3r14KizJ3cepmdn4edSu8U9zDPxRhNxMbXJf6QRtXmwrEdU8oRBVTghPSWk2gmpDwrRCB9PDMrv4jri",
  "key22": "3ZqCyTrMoFYGPnAf6Umg4dua2FXpxoDsFLDq2Z93XD4fmBwC6xo1B3GaCEKP3NnSnVfEFaRW3M9HvjEQCR379mZm",
  "key23": "2dti9pyh3xwSNYDqNerYWB3AgtiBRgu1zqAP5qie3aUkZqe8BsexSY8h6wHa3VTinEnTibvjZairYcupm7cHfYRV",
  "key24": "4BGoFczbm4s7fWo4r7tjQrXYwRtwfsoeXDfW1Y73xGB2knvKtq5XhRAWDPHv6DcQfo5zKDsEeFE4NuVwdFAF8bFV",
  "key25": "5MxhWg41c9KpXdjDg7SA4AjADWAXsnwBDxTAMH3tK5VyQZCQMvkqjt6TuWiHTWt3ghHCwx3rJGmwN4coVzWqa2Qo",
  "key26": "5NxPMBBGqKhro2aWfLtdmnsGvFWjcAqugmPaJcu3KWrHbazXGsuoe7euvSHuYa4snBa4jaF3tcemVCb2itjJShwM",
  "key27": "3LkKrjbY6qpEjMCk4Z51H9XE855uLg7Na9t9KsHZzMvX3P2YMNQyjnm8Y48viKGEoPokezeEPMpXKU45MLGLJJRy",
  "key28": "2yuq18fzm1fvKv8HYRiEe2majA7ZiYfzKcwHzMUhZtY2qc3HMmTCmqh72K7ffeigkbU5qQMJ78cZyHBzFNu7HAq6",
  "key29": "4UeqQvqTikkGrf5oB7TBzFsSRVVS59xwTDSsoPk7rXUnE8gV9TjoGFLMFqpSmn2tzmVajvTYtzj4ZhjSXxDgiGjP",
  "key30": "4kf2MHFSLv8GT3AZJuHDRax8Dq4vmQXzusFkKtJ7Tm7QpzZgCnccnnMyihb4ZMBXQuN3oLmGDiz57kU3GXDZ1n7P",
  "key31": "HQhCfynRnCd7QHAyESjo1Jb7mFHYFyPn1vBsC5tD7CLUwoMUWDeYD3jyXXKyQhnP8gspsgSwyndXi1oTUeXSj5C",
  "key32": "5mcLLUB85LCLF5wc8porg1bwaLK2pkBS5AWHQyKrUbGXwDotT6PMWKqzLmejF8eQiUxc1qqED2T5CzjBAdkjRc8P",
  "key33": "633UvtCdq8LZVcvt4VbnByv61mxquTbRDAWnAZFVfuioXhb4eBf7HUfeZEfspAihQoNn573z6VTauwcS9cUVtaey",
  "key34": "2hSnEM8AY49CHDEL7RzX3pCh7CrRpbYkiDWis3A393rawDaQ6wuW9M8afAUZnLWG9j9Dj1H47xzLyRFfHExgyb3d",
  "key35": "2htmvzTH68AQR7mL9P5UCDqkaTQycYc7TKUxUXYeYjEva7UR3mxd9AsxSw5ipvB7qJ1ePSeJJLAva5MqYnDzwavj",
  "key36": "2Ne47UnvdieL8ha17mXUzxp9k46BnHvt8Tzzw9Qm6ZC7yPcgxhhPWweEMCBxcejFEqTpkv3rgbyYetD13D4pyWWq",
  "key37": "5ogKoxC4cSgrQ9HV1jGtbd7NWb5UR86EfBLdMsxUpB3zRq9we9CEiU8enusgK27pw1PbFjfPKJwVtzeE3npU3i1G",
  "key38": "jdaFYiUP5fzNj2ZSFRjKCv6795VR7E34GE9ffJz1V7uVbxhf9qSj9wVunra6KR9h1T1ahGgaxcHqrZSW72V5nnW"
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
