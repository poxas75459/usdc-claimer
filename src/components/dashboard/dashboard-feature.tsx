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
    "2WuyjFr7w3ocNzUd4J6gHMRFFQJFYmFe9wvM2TvR4hGE9AxCBTxUVs5VYN4VhLBR59wJv13TpdQanZxuqeHPWfdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uAB1cn1tPyqU9F6Zmv1jiNq6F8WKM1GZN6uXAtBonjun3JhJb9aCfMHGXttrQUbzuJ7gSDFNgZCJdd78ZA8wrtA",
  "key1": "32BLDHAStA2QqbE57SYhQLLSAWsbChfYU1t8XEA6m9x5mDk4hBQSj62a17TeDDz7HhaCbxaAAdSGnEn6wBTD39ss",
  "key2": "5NFgR3gsc3rbkw4g8LdbHmqtg6kqQVnXst5JM3kAizZZYXhNpU73MYa7xNfReACCLV5DG7raZiKswbbHixDD5j9w",
  "key3": "48QyjGoXpCKqMy7PPieQ6SEQiopb9keiudqgLRBFMnNtd2FGJ64utZUKC3yh3cYNjps1uwiLKbqNjNwdC4TtiAKq",
  "key4": "2jtc4gdRYTpzE8ZpjaPMYDCHQLHoHJaCxcd3AiAYYBFKCqV4VixckRVKoD4xKW3NuXSRi8zXUoNB3DMVqBWFDn3x",
  "key5": "4qha1VTG7MSz5EoDtxTndBbUkn9rF5cd1Ws6cnKNHW43JQcdsE4nFchxumFxVJhQBbPAxtJvBEuTv4G7kW7aN8vj",
  "key6": "4GGEVPYGu6Xnr9DAukNMMqfkofCwQDa79FYMsmHMLJYX39aoqdWPa9GXkeqNLcBA3MEmNmrzb9Lgj63kPHw7ZLWv",
  "key7": "2PjbqnGxyc4Cq26gdiTqqxuGHD728NcjKpy6gtBLaMcFmFfL2hamVm2QDqGNTLYnxatRcYdiw2oVA1MiQ4d1kbds",
  "key8": "5mi3yFGxASE9fGV89TNATjYgJWcCUqf3oYoRhGxVisDpxkPoCdPbevoec2WLhe9JMLA2yiAxfgRce4p2bj6ta34H",
  "key9": "4v42wV5hGrTaDEpX7UrP96ub2s6PR2KL77dw6VkocXBtncNi9pP2ru7QKrcKAoN3WRsGfJzsZfbPAsdFdPDx9NZB",
  "key10": "2W94d8ZxhudX8ZZ1sf7o8NZCzukFU15MZ4ugxSZapymYi4eJ421N1Cg4Q7QJEiZtqxTCTaf2DPgR1GfDU2W6XENt",
  "key11": "27fVncvh9uwkLKi6Lg57tukvCTGP4QrhfY4wE2MdUAxTy3ofHsWmNCeUqj1yZQhkHBKSCNVYoXooav9DaV3tsnuh",
  "key12": "3ddNbG8hepppWft5vqqtUDf57Evyeqb6hUwigXMKmRxat31grTTx2Ex171HHwRxKkMx9KKQwJDzcJgmyRxkP4fq1",
  "key13": "S9F114u6bLnaDcaZtVsnZQf2RQmyiso7qidnkhziPy8bXG9QakSZxzbxtqJ3Xk1ZZWKNfTBrWs4NMptZYXLtGno",
  "key14": "489MVQdPo4QPUd5q51k9MCDcNLBx1vpTMjiEcpZ9ZXiHHxTdjBeiWsMiUx7DC3trEvW8SJeqoQCBoJjhMzdSzczQ",
  "key15": "XSAKcdrdV7oxjhybzAagLkFnVrzSAp9g99iXAN8U15kTVcrCBuCKB1FvM2fXuaZX3LpEJiqeeXR7Ekt9KizFfaq",
  "key16": "xXadMYXxaaRQbrScr1Afm4u9B1NXNDuq7Ho53fLyrYtaHY2Auvk4trknXgtXxMmTfBJ1casyHEscEXQ4EExJUKf",
  "key17": "2RkGitdJSNwUCHh3Ubq5M35wwtJz3nyRh42hnUrgCmKagohjLdmjq243JryDNrS5QZ45AAuQ2HQz5mfJt5eQfo9V",
  "key18": "TzGd2UwzTXRrteDgKLpAXuWkrXrRLaqHrkc6b9Bm6Gu4B9BmtBQRkWuErd9pNbYVygsqaBh7Dr855i3pYK9g75m",
  "key19": "4wLbsfPCPxir3Ef1wJbr1RJrWovBYo2vXF71iUG8oyTWHbLGNuh6QpRSnXcRRYEBsv5syyGCe1UutpL29NoYuSf5",
  "key20": "Q6StCJNAnExwkPnP7kbd1pG7ExHYnNPkFkbEtvnmTGoeDb3ZWdwGX7foYNEmYppmJJjxjsXqsua6a2BwxdwzJth",
  "key21": "2k7t21c5DfUSNs1NVqK5d72K5drTiUDgqD9Jpxmh3pRugBTqtSyKotA32nwfWFvf6L5jxNkqRxnVbNehdkna9bEg",
  "key22": "3cskFrkrE5d3QeaAQ5TMDvAUt4sNgj4GGnjUnqhXMXeEUqHgYT8An99xXWvKRvApCyxbMwrcHfcwgMtEMiY72Rwy",
  "key23": "5cXSkeDYBg6LDdGK5UqgBaeCQc8sMi2zkzPwEAgsbPU4GZs9PhrBU3mwXDQzux81WZZDP1q9NSTnFbxoVeAA9fH2",
  "key24": "2VZJvwAmJpTg8c19iNZrRJziEQxknrdueq6fVGj5up8SvtLtCfrBcR1qDKeJHeTMayGM7GNaJLBpAEZ27BLwHrfE",
  "key25": "4SMeW1xEEigSACo8wEYxnEe9iaSzjqeAPCYsYjNvVPQ5zRgpsNZsthNK5RKykMjMVAJyG14zHQcEc5k1byumTT2C",
  "key26": "2ggApFF6fkFCaVczkBJb8PUobVjNdHCu6HyhJzWgdQPKDM9Enit8TF18Jby87H8EjyFpkuNY4FeHhx8wr6pzpvD7",
  "key27": "3sCDbzcRCxRWyw7q3u1pQucbZ7uvncpwd92JfmUv5UDSEWqpLtJ4GkzEBa7T6SwkuBrfF5u64VmQ5PzJz4nL6eTo",
  "key28": "2e2GB8agiA94Xos5fFW7YQ3abQ1AdRaBubn3ALLFkAXZ2NF3Zuf5sEDfn84oSN72ZcX324AU9trAK4fheRkVRavx",
  "key29": "5vPToB2xznEqHPFaopduCsgyWQq83AgGX1uH78bAJiDQCxfWq1CUG9qZEN8svB6eTGsjE3Mpihwudeh24CLGkuEK",
  "key30": "28TXrwzhWQ1tZm7G232CJhF4nFUaA6rm6kdDgAkG51DQUvC7CAP5wSpdqV7dHnmUEM1NCfrFEzvADc9uP2yh8UhH",
  "key31": "24Rm6xuEThwqrMVtv9nFmcCcATuEQ5DRdUi6KJdo9Z6nCpRyNprgLvS2SJ3xNhdLJdR3XBvpcE2NQ4Vu2g5jzPsk",
  "key32": "3Vp7S31rmk7gi8k5ty2r43VuX3kFbc1TG6pZJgEJqZhZN5kVV5TWfTGxq6sqtycPV3yHNEzBTWDjNC7bgimfsQ7h",
  "key33": "2apkmfi883xr5ysgvdt3ma7CX6aMvwMyFKWihsb7ciDxTpWGFhMpQeZwYBvogbsUAN6LbRP2XXps1LjdoKh7tLSS",
  "key34": "2Nit2vzyuQpvVAsTTGMKWQNPFLnVsfpcJAjYorGPpd3j96aSX936cJEM6jM1dAsduMLE9erLTg8LFGrTJYhmAL1o",
  "key35": "4GmomtAQAcxbLb7DSVT8LT84TUtRjW8UxfKeMWkVVAD3wpeajEvmSqnMiosXRmpkYp9H4LyTKHQUP8B8vwAJMGrc",
  "key36": "425yyS8zZkSApMSsYq6v7aYmmgVbfbpUhvX9PpxaEgxxRPzZpqJivHF5XL29Y9Kj7Bcuk3BSxRF9TN2mUZxW4GAt",
  "key37": "5M463ne3GRrQRmbCXuXvcYH53fWVLgfSpk1cHNJYNsoTSmTT9Kj7B2kQtDWhzcVKMmVbp3Pf5Fzapu72tKLrqcQD",
  "key38": "4SsC523P7JsW4PEmxxejnuqCht6CSpZs15rua4NQpYh8zTgK21pr96PSQHEBLNDspcHGczSXLKSHu11NcrZp1Bj5",
  "key39": "2ybF8443ofYRXyiLznugqc4ASivWVekejVGFJADY4f4fY7XeHAaSj8Sdep9G4D8f1BadeYaH7F3ypFJS8obALwuz",
  "key40": "5Lce2CvGXRTMzmmpBfUss6i9iSSoFCm55SqvhGeZThhj2Yphfg2f4oMVKiS11gVX23Fn3mYfirCsXYoocghJfAtU",
  "key41": "2UEDL7f11HpA16YsFsr9mkExgtrQRby9RNfa3RbdKHxBiT3FCndkg5U6pYRyCjqdzLqbRtmyMFm2UEbi7SvhCqY9",
  "key42": "KobphVu1nevtFBazgjho5b9523hTbbjq28fdT9uPgmHeHKpmxWGuVW8ysoB7Toj6uHdbUegGkZw8wMqjukK59JA",
  "key43": "2EtvvPLLMQnA3QQWK8cELRoxFLEGYReFdVnMNDfE2WM2coZQjr6AaWrJckttwsdFGYkbA1wn2r6kgPX1zbVobniM"
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
