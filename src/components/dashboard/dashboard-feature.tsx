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
    "43PecApF7pZxRmC7n2K2aBX18HCBqvu4KuPhfGFHrrA8LWwy1n3K4U4nK2iz7ysZzt5wS86nFnvtsfxrFPeduuSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hkT8YGvsuHRRx1By51hNXcxwK4q3NRfZvyux9v5sMPKK1yrXGDPUa5MHTKhdBaXEVUJmdtMYtxqoZHeiTo1eiy",
  "key1": "2uqvM32SShapxvx4d9KVtkmdxoSD4x1cFztCbK3jUYRWiWbVPh8iQMyMv3bPAUcoB9nnvAziFapXmWDvvLEDkLcF",
  "key2": "Xkv2KSvFiJzpngQUwvinadfMhBjcQyiDfhf9bq9qetMyVDoZQofnZLWoGxDpdK29XX6uhhn9u51gocftU5g2cLB",
  "key3": "3bW1vHcic6BRsfNKqaSfDmNGgUZCs6aRaBThevCiRSF4rUMVGPd2jfKuti4zBHhRjpFhxDx6vuj6pFbMKd5KPaRX",
  "key4": "4CPXdT5J17zpJfvAXHi6LLWtjnSjddacbG6rzfdMNieDEhKaPfQ8ZnD1UGVWxx8f6aH1xKFcrV7ZZGngkFiKt7DK",
  "key5": "3XLWGQjD3BT4xP1BzE7mYS5RNAz12WS22q9Q9fdHCSgXrGja81K857M6KS5UwNbt1c5dmyt1k5yiYn8f2VxUVe8r",
  "key6": "2fmizF5bVCXd74oS6K12vjvURswrBcgK3bKrJyQZoR5EbAQnWue5Rr5GoVFzJuKvLKwpcuiPLCyVUMossVPjr12V",
  "key7": "5VQGzpnY46dVPTGmTXSLN8yKi2fTd6ozjiKnrFpGo3pqNNKQuU4AA6meWHAwnqhkECis2JWb6p6LQtQQvB1TJdw2",
  "key8": "5R1DD2M6BB5Bi3W8B8x7hDnFY5fERi4w22aCXdNbyQNx6nYgtQyEkR8U5ZfNmJ6ZC6tsBc1rp17PodhoeG9RuxS1",
  "key9": "62CgRKPDnWFpGHNB3vyKD8yWYf28LErr7vYeerEGr9Ydzkju7cKQirBrJvQqn4ssu5xmVAPneTNTxwsYbss11ZPF",
  "key10": "4NjLWHiSfymwuU95dq4sYEupGRru5EjNhzN8XV2K5QtyrUexGKomT8DikaykxVVfUR5L12FxX22bB9NTwnSNBmnk",
  "key11": "M8xwPLzZbLjKrVWSDdQRW1Bk4wjZGoyKBaLxPq36YauHeXhKJYnzWcURhk3eXobWQBgj3fv2ZQCeodk7EFvMKBE",
  "key12": "3ozfVX2XHqzMDSvxcVkXTdLU77a1MVxDX8KBGiornFNQQru3kya4Hjx4xovCduzTqMikFCYthfpb1P8bFUxLUMKo",
  "key13": "5AdGTQwZ2cDZYfLu9VRX7szY9X7jWj8g1YCyYCp9FFuQuwUstMudswnZHwVqiRwh1148EbLaCcpySafPYreYjJtC",
  "key14": "61cFHAyUngzCSUP7Uhza9tzwTSzbptRWXdJ1ataGAaKGyJeJCPS9uGbogVhGkDXhCSBJpgEY9FYapnuiqEMQNTu4",
  "key15": "2xQgfX6UoAq76LTEaMEjPwmEQWtBspLB4UriHJricQ6LJe5jDZAV92b6YGTVgq5fh5Z1YGMqyp3bBHt5CBYuVeJg",
  "key16": "2qDyy4w6TZTGuWS2YGgyHsPDfayUTeU1n1tmY5nPaeUbkJ1b1dhiPoGnG6P1qbUDkHc3LVTjpynzzRwZbtuykYHj",
  "key17": "54RAJdATshUviCh68At92A6GB8Msn4Lyxpzm781Mc6kociUZ4bm4YhyGBaVqqFUmFRVE3mMT1dzFHDdshczyxsMy",
  "key18": "2b2RR6B3kUhJqjhUVJCThCvotZa9X1nv5RzdX89HLWyGh5cxQ79dxSDM5aHnH7eYj6zu2rjGvpp4TDTV15J4oQzy",
  "key19": "nym3JHJmtQk3zkPtWFtS9w2aCQT1brREAM2TfPzJBnp9hEytZHssqsxj4XwiWA6ZoC2c98ATW1NrLU5orUts3UX",
  "key20": "5Aqw7SrBeSZLic9jwRbsJjqpFk8u7ZjB5s7T9Xbiu1cfhHp2v2sAZTJRCmx3JF8esAxziQjY2EdBURhFMoWZytBF",
  "key21": "4PwbxYPQB9GmhUn6rWNZ7yy3CX3MiReJRdbxbPEp1FxjnxWwoJyzib9fta46aKJoo976AsWipYfDJsTQzbMrmh2",
  "key22": "3kwHv7mM32m5SsYr7D8obJZmW4stjpBgrWELTvbj6hp8pNREuVXwgMxBKUte1LxjwBYDhF9g5nvPTqUFK1CwPAkS",
  "key23": "GuqqGbs1V4JU1oYsrrnimpQrPnge84iz5dngqs1GoCzzDp3Pko84C1Tq14VtvpgJxevKmMW9diq5KRT3RVMBW1U",
  "key24": "62DDttNPEoKcoDscp3jXQpPoqNh9HzFhHrM5Ho7sGLyTKCWe4qFH6D1Zw2LMvf4Sb3YeKPFTVtogB6nTstR5UeMQ",
  "key25": "5JHFN3fju6uQt3SExoDDodUsjDwKtnEwncoC5fbwYfFhv7Z7aUEfVbVKBEkWUvimGTxr4Z4bxyG7Uee3Mwx9P3oF",
  "key26": "2GGXptNwofjtoDbJQiogSCzuTpj4kgBfsJHDyX3iUDHxDZs1Bx25uRMBbLcycY1LGpRTgxknaC9PDQwo4Eb19Y1F",
  "key27": "3ncvqWJ8GU7JELGzhBbwLWWHu2HGs3BnBmyDqzfFbPy272FWU6x8gezDA522BEUQecc1R7GkXn89EbMfqPCvpRNa",
  "key28": "5yy4UqhoTqDSzygFEfc1XZAPY1rVHHomAUtbBf8MyZSakUVP2VdFw8VWBh65ypkhZAoUr9JZxEf2fxjNNxa9bFe7",
  "key29": "25paGv3tJmLBjFVp3TubtESJn3TarmGuXqLgUqqGf8JX6f1Jz2ppYDupHuANT9rFuBTMtQ9aAzwSCqprRVp14sfx",
  "key30": "4UWo4rysUGv7fBf9vXnxktFGdmQVAh71UCvnRn3VjQvjqpaKmha3kk7SGUxzWWystugRP6kRKBwgBSEnHJ2fvmgV",
  "key31": "2DmZpJjACRVHqiooL8mPPctt9jorkjMuMXJt6sqw6qi3R6LjtibFwhZoarBTfzCppL7sYxtqhxsUEdCQ2rp9tpBF",
  "key32": "57DnCF3hXzvY4B8HRHt1XkES9gzHG1aZhXXuqyGLsNfdETfcyKuE1swZEB8rYiFcksMYWqejsLukyfTNvVZq2XcR",
  "key33": "2qqyde11XDnSM8psoFFKx4cf7JV5R37E5UypEncMBX86SMswe9LHcG1gLHrB2etx9XhpXedg2CGZAVjf2ghHzZwp",
  "key34": "pmqrEQxBVXQ9AT6bwLAUEEYSxpMNJJu2dvJcoaSYW1HgdtyGq3R9iHrEQHausHkKabdLsLFWYw7E1g2GuQMhWMH",
  "key35": "ryq6bidcpuT8ik8Jjm454ihCMD5rmRnWcz5NRvVNtg8qk8QEHm6wn53FtCQreuLj22AWoUU3S6RUMMp3UVJ2upz",
  "key36": "46ZbR4VVJx7ak6pyrVR3HcXHooQDNj5vx14RtmGUFdsss1eQcWsfNye4kufHpX6qjxtNJQ9ZcWQoVuDCGdrv9pEq",
  "key37": "YDenZpahnLfcA2Y8i5jAY1Bt4zskMxeoTYeF5m63hC6hxWa14QhczRSTLctjBwTTvobnMM7GRjtf74JpAkcPaNL",
  "key38": "4QTsG2ndEFVtuDyQuQhZMC3L6u2z5uDZvSTov1G3CuoGHg2FaGWzTHyqXba1Gpfz7FFALrDwzGiJ7Vh9cRHTXyzE",
  "key39": "3e6XXzs4AS9AYrkrgLLqizzpcGtmqvPVY6Xv9Z9dE1LRebxkwZ8tefPJyYQ4wqosD6oESKjtrfd9Q8mj57rZQ3bU",
  "key40": "27EcCNWdh98kb4m5MD5RMV2HcHnjR8PCHtevXHZpsxn7xMyrUUjmJxWmxSaCosACDzDWrsvJAVgDSRXiS23oyCLd",
  "key41": "52ooUWRxJF1117PpEeFhD2Mnz4ktxnEJa6QbHg1EkDqRi9EQBer4RZ7NuxnC2p61AR7k9sf2SXCKnTHEkMvYZ7Gs",
  "key42": "21djCsBzYyQxYC2KwwE8SqpZyjAWQc1evXCeskhQMG3mcu1JUmfd1F1SYxffaDJaDtkE4kkdekodJeDzJfiSokfF",
  "key43": "5fhnyKMewk72jW2fnNRfGUr5bcyijyP1FrHCojs1HWSzpi2fSaU9mdeRt9sNLgmcRjVEA5bJknb7FzuVLjCf5f56",
  "key44": "Ld2DE9FChtfjf6qFAXHwz32uFHZQqakCZu65fH9WkXSXGfUom4un3LrGervpkZwij4uNGy2wbk6KwWVgdFGYWJK"
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
