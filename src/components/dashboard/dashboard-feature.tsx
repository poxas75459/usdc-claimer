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
    "2UA5Vt8rZ3NytdB8CA2HSGdYGYQUbmf7HAc3yNfntasjC3kPoPez2jaAjLrdPkKxAFyZu4hP5ZwAYoapeQr8rDgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YkoLRHAanARyDRqgvi9cSk7FRb44fWD8Wcti2jkEaGELgKYkNw6gDxgbNcmCREAmdi9QXwQkzG3ne7LTkaFPe11",
  "key1": "xtNE38Wgt4xJpNwtD76v7jbd6ggxCWA8LFBPwxz6pcRuNt2N7ivaoixnxwVbiX4prRUsaJHEFnNYy8wLHUu94XV",
  "key2": "633TrFy6KDaN7QgfviTUBcLezmRjJi6Vd3vPB2qHncAwmoYXmVomP272C2Uu36aBuoyPbGhbXvLN2DMxGsEH7396",
  "key3": "4UKHob6f23SXhNZCNnRnxpYRdgL1NtnCpbAQEmGiL5prfWxpP8HqKhdo6tuW3CdbL3uE9XSzs5Xq4z8H9Wmbif8s",
  "key4": "2LL4WeegEGtaZHQzLTiBDqyMrdYY4oSpqQ9bCT3yKRyYYc9Hv4m2kkVerbhVT4sBrs8F3RzaSciegfb7zGLrNiTu",
  "key5": "5bGYF3tZnXTpr6aLGuGFLB4mFxCLd97f4z6oFvXiF4QxycAy7ZwU5pFPaJNTHq6eW8iWaqF6Y1FjrDpBVxpG2L7p",
  "key6": "3qMxbE7A19en3fdSMQcGsjuRwzNEQUHDZfW7cYNkb9hRM5UBoTc7thFVWP4H2WwPvZv74GVqs5hAFG8cAQtjcVvA",
  "key7": "3W6H4gY4tQd3EG4fKkkddqoVGDqAcqYxyLauVL5vD5SQfYjnuLjy8P44LXVGUE94b6ACLETdTkqZuw8kVCh9XWEi",
  "key8": "oa1hy1RJvor3uhji7hCr8GY6PonFJt3rB3tKp2PAu68YizwhnxERZ3cVSMR5JvFAdVUdtaw6iMa4w3h6zK9Sx2b",
  "key9": "5ETLLBSRMGf4goQF4EcRytTRhQmBCBXNdGiqGo5UsKzwbCSznvpWFLJAJf9y4h2b264ttee98wpGsRZeWwzjL91k",
  "key10": "58tZfJxddU2nhNmaZbTE7Fed8V35UMA5nQ21aWfCSZFpcwNn9KGB867kYeSd1ZLQjrRodW8tQx57aeMxRdkovDKS",
  "key11": "27smgJuKus9ymQpmWioCNVmBj6Ydj9t9CZt3FE4jFhXH6v9vKoJXESwDkd4m8xSYQWyfW7CZiutMsmZUgbuqsr7Y",
  "key12": "4jVDE3K5eNgoh8ZuZYhEyPoer2DybPoooY4ZqynHPJJ2DByE1tWvcTUzP3xACYkKeA3RBUNWdBQwUAzE58f4r6fR",
  "key13": "3zUTppVQ2E3uVTKaa1XLQHr54UgDod69RZGjxcqzqBEfk4BdH269nvd6EM4VE9vgGGYe7vFRkRuJucBDTyJQkW52",
  "key14": "2yCeyqNENrNjVh8ULgvQXqops1Ldm2wfmYQjaFpsKoWATQR1szveb6J345XFjuToqErUWrFa4Vs6GagumwRdRASC",
  "key15": "2MgfsLsynPFDwgiyznCHPVyTmmtFR4CiaBBmQVWeRCgGjgtouMv38SQpadg1vwePcKE6LkxDyhAnLxwxAkM7eEZ7",
  "key16": "5jwBWjLuCC7K6RvBPppaUakC9P2YhjrZqzud7jSFK1xeJyVTcbyPTU4GQv1x25b88ziymtVuDqUpHuCR9ZZDDndb",
  "key17": "3qu7ACNZmW6D43vxrRSeg18Ujh6xNUt48ZkQiGWFDrTK6DecscNHUHm6wNLiN9ttUUzW84K2a8oEtJvqGg2MUFT6",
  "key18": "2bwsJuTRY2T446cPjatTPZz8aPjekDYCH3MMqUnkjJ7NVJDTao1XqESEuxh8qR9i3HJMHDW1Kmc6oapj4HbbqSvz",
  "key19": "5Hzkfke7fPSPU5a8XrwNRFJRvkCDb5eLAEKAHonTbYKaeRMqaSX2PKTzRdKAk41tS2uAADsZrA7FdnoeA8F2CGzS",
  "key20": "4vAkgVxfYLjX9ZqxxRgWsESsVCTXofJUP87uz4EXZzgu1eFvsCFn98Cfk3KLUACb4xPRk7vrupbkW48nErxpYasN",
  "key21": "rGu6fSkRRY2DEBR1RLYbyZ8mZGtgzysmRf4wu14orAa35TjSV3tcmwuv9vQK2zwL9wvkM9uubhfe7w1n5ogtwk2",
  "key22": "VvMgM9onp9TKukNkzw3QoREU4Gt2iswuV2cBN6WJbVwUYUkHs2cfjPFyk72ngrSxg5BChAte4dYeDgx8uzB4abo",
  "key23": "124wtiDTtQvaEjSxi6fyPm8CHa9fk2698xyShgY16qqRh7UTwCKesbwf95R599eWfydvVp5BPU1kUhVBp6zMdDuJ",
  "key24": "2Tiz6HB1HCPJSKEnacSenZuFzBfwF6WBdHQaTkmNuJodsgvxBnRpy8vgqWA9bV7LfnLKbUTgo9JMHziPzKCvSpbf",
  "key25": "YDKZhzi61DLBouUxMYusNhZoaG3Srxg4iLHhHWQJNzDfP6Pwb1G7HsWzjckBsmovWK79CqHptc9zdXaN8SDiojz",
  "key26": "5vnE1Zi9WXRWRdSNKay63LNmWhCc72UhmuydLEtogAPheymToUNxotAK66bJSoR2SH5nQsMcSSLjvCE1Vp3unes5",
  "key27": "2ZBLRG56REkt71geUsdueRDM4uAYzMHLkXYUCu6kgpM5jHBsJYMYbNgLFU9qmex8kDjBvYA6Us47qfSPeVXFYvUc",
  "key28": "4SV5r8pD9kskUeaRHDQwExtUxXDJEJRh19EAdDobZa3ZDPmXeZQo76F6AbBJtgGNnVmPMQrPV2fiwUxUFUH11ZtM",
  "key29": "4eAUcjqQKXWe1MdWXZGzJPok8xMRY3ut2RRebiEphe1DQR7arn2cVi636fQ61aQCE8y7xFKChhXCtJuNwCYZnSfx",
  "key30": "UzfCb2Z1TTwMS4V49P77z2t4TPgGxwr7j9NtwrqYdYACQFqTZtJVFyXwwVMCqMdRX2iqMrt1Ph86AqsReAMYe2g",
  "key31": "5HGsP6MBtEHNvJCLgh6CSkHPSt1tUGVML52rtTF2eV8inzwNmViDzyQdojMyavuAmP3SBwxwKrWwhPMb3GKmbidq",
  "key32": "4hkZRLoUyzeaCJAWnc3QKCdC8RfTjC2XxthDkfkikHVKXru5irBmycTLfGDE9cs9miiV5NKYuMju87Pi7R9WaG6d",
  "key33": "2Z9tCaZxW69rzmECBMajrhmhgPD6oYvcQPsaQi9o7gb6d48jNY1G64PfksMZNSToJuadUJPJvTkeq8saUM3P2U3m"
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
