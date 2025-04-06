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
    "3inS4mcysucLXo9JYibbaLW6eK8j4T1Bx9DZZVPxuViM9GFrDQnXcuFSRhPChLWK6xpXrJabwgPYa67JqHupNVeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVNBizyNSbSkuetvo1XFmrbxqaLx7dyr21uWr7oHkKHtjqnF3p9jAYvdyegbenesDtFmkTi1X3hTtBTZeJxkozT",
  "key1": "33aZ3WavZ23T9vWy89hrRYPBVh7G9KrXthj9hYV2VVexqGvRokHLuUjWWyPqyEkdSnJPJDxumScLevVsn3v69eGf",
  "key2": "v93kQsr1XJnH5NsEKkERRP3d19NHEgJGgJyqZRqNjy6yzMTc21JumyexBMwQH1p7SSJidT1T3GJD71JTXja9epB",
  "key3": "5EFvpEpa7JEn6AExTYhWxhpJdsdL38crVFsyGcyNbPbeXyf4pCQ7batFwwCn5mc8DbiZEpaNobip8XEKTCAR4HJV",
  "key4": "2NoSSpBaTLxsTutrNin4MvHa1CzFssYc5XQGr3JmW31u2PizZUEQxjKb2EVoNqN7Um5rPk7cYqWKqtPfDswMxaes",
  "key5": "33cqp7BPKbDT76joKAacnQFGCSMyyWFdipDVyxBKz5SvN6frVuBTrHqveRwVMcsYPDSandcdcZb2sXaedzKvRtHv",
  "key6": "4Fkn4V4DcrtbaaEaaa1UESfvaGnJALTvysJ6rFkEJzdWnUFMEMcF8gLLuchbGvFZCfd9QjFCUTk3TkYPwvDX5ac3",
  "key7": "65vAkgK68HrTME4N3suwcau5pCeRDvE5f5VTLFSj1ta8nGt499gUCMEeGfrGc1r149KqsCcZ5UBvBApLCdtYY9r9",
  "key8": "38bLbs855Ac89QGMm1xNJbKMmQwTgX2M9L3RuMrFoEyhgAdHroy13YyMY5JAh65nMnTPWkW7eh9SdxyoiMfaDu9S",
  "key9": "UBBP1MwGXmwUkJVBquq9oprdwV24yLo2JR5at1wdNQ5WgvzdUBukTuQifYCXM37E8qmG6ZtCuv6oq2A68muh8At",
  "key10": "4tTgyzzWYQpLHPQhWeMaAbzmcLdjeTn1ko3Lk5kthWzT2jZ5bFLQJrrARbJKKphEZVGLnSv3QqSQ7GgYGJwu55Te",
  "key11": "4nQjLbnErHUKVmkbqQAoigwVXfGhhTdDaDyRXmTKzYz9dMNyxwYw3jxEunFzTK9q81bsGV2A727btp1VXinJbxEa",
  "key12": "4z9codavpJTFeyG7uQdvRSQPmkqpDmcTDw4eVUF2ufYeo7PL26bbS8p2pxCEenWfk2g2pgzdpB2zfGRVyDYQhgAj",
  "key13": "beVGMwfcM6nfwR7WCxwKygZdKcLbEvT3hdVCN187ra5trmT2h2TEDhzmFsB4JaYxUYGffJtm8rFGnQg4koAHCh2",
  "key14": "3M1EaVwBE3UUG4DiY1PifG7dbZsZovrXcpyHhQYHAsrBaUA5xETnitBMjayhMkF3zpDVUNXmEGq2umbHu6sFagvJ",
  "key15": "3b9VjAuka8jencMEMESxcHsXGUexRQnX4rWyqSwE664qCvyVnUY1oxpTMqAuWgC4pdk2ptmoK6BSYS3Jx6nGzu6R",
  "key16": "3cgNcXBYwAw98cYysGWqEZS2d1cEsZTmyPmA57MuYuT5STR1YDXGTzV5sjDRYeFrb57AgEBS9QgbLoe3xdNxtCmx",
  "key17": "LVQsLLnFU7v4MfHJytcxZz695W1iVxg1LvRMfwpNHaxmNpyeDNB6eEuQ7P4nicikBex8ahMEvqyLizmHL8m5AU5",
  "key18": "4Zd2RsVXFgw9B59A2TcNckjk7gwsEBKQQFReA5wS6gPaAgpWSQR93oFfLBfR6p2V9Gbuy9g9Q7gMGS8rHQRPCjEM",
  "key19": "28Tp8dhPhyCXecPgjQMh7AQTSNDSVFXsxzLUGrugvq9Mqe6vudfibuxfzYdpyDGi6hGKSWwq8xnDS6zTaAonz2mL",
  "key20": "5vBbswzo76fZyCtVpZ1rFcqDuU81hmLyYNQ2ZaLTEvuRmV8cgWjdpZbZxXA4oJQ1zMHJgdrQPP9zGT6iHV3fefXz",
  "key21": "5L5m848Sd3EY78Y2xXgXy7oGLtNa6uWWVw8j6xL9JSFDnUqn1BhytnV6ZoGi2HaAGoDX9eSPWD6CPUzANPPsKCe3",
  "key22": "vC82xR6u2KchWZAtNwk52PNzsaz444V75eWmw8ntTMf53Ew8ggi1gHyMU5nZVWTDQd6AUrf9e1XwC5frVfkPqFw",
  "key23": "5oKT4cAYcTaVkxQ3SmyY7qPUoaPLJEsMTMegVCQBnEQhwPpEWXeeCxxTKdwQh4RZTgFNf2S6c9tkoVWv1dCwda3j",
  "key24": "3ubrpaypx9LJuizWKtZvDttSMsDjY1kNqehebYwX6rp16fSebWDaUVq9ZJ6qXkDuXau54QpQncVsazcnBAh3sAWm",
  "key25": "5tL8sg4jmNbRfhcZ5n75Zj9HXHwRuJMPTiDBiXjZyBC5VLu9G8yneLPfeHxGxpMRhr6NfCSzrYkwrXxQm4DMi2AU",
  "key26": "VgeEomck8MaCAE2PAqT7YZWMYcMmd3BKJAk4D13XXWGDK4uX3ub61k5Qv3sRmBoxJGPuKQhdsuvXPZAqDdrJaz9",
  "key27": "2mrHFXWbbVHmHgwS793iwCsrJbqsQXMHwWiAGCH5AxZBYP7cpFS5uzsXonGZ22Zn1FjrASfGcaGyMANyTaGRpXR5",
  "key28": "58w9PDWJArTKMn4URBP1MU6qbgyV396su6NKt1rFizKtKzt6srA1zo9s9FkswpZ8etfsAea3XMxPxFDmXwtjm189",
  "key29": "3Kfv5ruRPiH2ZVD3fUVjPyWukk9PJqgm3BGeTZhmtUbFgxpcJJvmVqux7hgB9SAyuzmh74ef3NNQnszkV51uXq2b",
  "key30": "5ed1xCbuamJtiqtvBKGsWLLF6DJg9FX8aQ4mMifAdYwdboSW8zUKpcgeLRDhZB55WCz9xg8KPovKByLGRseebtPh",
  "key31": "4h987LkfMhg5hNchDuhGB2DPuTe19F9RP6xFms9MUBy1rhSyNk9pACUgNMV6GkSo1EoZ57Z74Fgz3a8L2cLwve5D",
  "key32": "5JMkm1hgToNAF7RuhuthSDjBkZnCRRLZdcB5nnavivPvnGpoEneXxmqb9Unvfb2xfwygWSa1VLnRYjBmPuV4VWhi",
  "key33": "3iEN2PLnNd79Z12S4ZYDqRV6Bhv7t5bMMbGotwuEPNcSEd6DJ6PEn15u8P1VrGLaqzRJ7k5zVScMAnVtt3bAheWq",
  "key34": "aYSQm88mf4UGGMF9G6uqSLiN17BNpQMBWiPSuDZHDZNoZ9w1yW5i7LASfFCb2R12iWKkFQSip6npUSzeuYABzkU",
  "key35": "2F91yuBamy4tsKrUF7uhuf2b561UYZxhBdZFkGes83SSNBf9HWrmcaa2enhb41tuzK1GU7KtXNcppgw6bePrkUhV",
  "key36": "5zZhWYQuJs1JkvTVumEU5gidb8sNLom5fMDugMpgT28tHFFmooY63MnhsWFfoWzvwDV18ZmowSmRZkmGstWTfnBg",
  "key37": "3cMhaAxRVzDaeDxpcuueZMakS5ABjhPsH1gtX5U6iHgW28njTbwUToKi4WPkGEwvph9NaHuWGgcfKSMyhNniwUse",
  "key38": "4QRCA3PGcqZVqtkGU82abRnt4SidivDvbyC9w6L59XDYAhBmDdkWN4b8uo1GJmT7SXuffc9h5x2Wz3WmWCU2WSji",
  "key39": "4kEF43hm3PgLHeqS7noC1zkaqhDtyirtC5xPeiP3WNh847sg5yhtWDLfqhkE2NtwVCveTzSw56iS9xMS4vc4yKHP",
  "key40": "3qrM6mR7T8Ks67NTCemk6qeZZtN5MLkvvt6FpmspzsTgx7LdasTLstfdRaTVMgukUbHN4UdvYeJ7SqVtof4HtH8y",
  "key41": "4yfQVWS8cLbkMccSJW64kz23vQw79xXdXCeozKoNy2jjdLXLBps1ZMpoxYVqz39RdA3RxiVD1eQYvAfdMaqJGzLe",
  "key42": "4NseixaoJZVGyAAesFhQCUVjbFCa6yuuioxyQ8Qbq5549FdjPPwedZ1KSt1KFsk1vruhpYkiAuYP8YjnpSjLt8Xj",
  "key43": "34mbiYfErG6pEbDTVP1P4pkzLheY4ZcXxu1AqdkCiqGjrbRqgcvgYQLmYWkXs4L5LubXj71oLqfygsda3EESp4pA",
  "key44": "5WhkQaxoBtunWu9xnGjZjiuLMKuY6gz7Crh7jW1fp2kdcchVzfidihV7qRu8cG7y2ENAKSVM5QDAdA4okAU5UJK1",
  "key45": "5v7XAtonavMqK7jkRrKW9meFAxvsZiPGjMpjy1jPiVM9mjG22wXU4hwmezLGqvv3eHp2uGsWszLny6YBGMfwuEoC"
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
