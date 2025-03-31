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
    "2jJutwmvNmPXMiXq16JmBwoCCtJXPZGC67hZZyZ53Hz2tb1UrXNrUpBp8FjGU2e98qMxeUnutN2xSDUVrmZZsife"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqCcGrCTpkVV2JLcv8Mh7VDnsEibQ34ngpL89h75mUYUSnPE1ewvE3Epsf1BuPsL9YG7CKNneEn4atMCAieEtfv",
  "key1": "2dGjvQxx9xhidQvLBuYquYMK9ZwRtWD8hkV28D4RwBcdGFRagcCzsqWjXgX2fEyMcKfEV1KM6KyyVrnF7TFZDsKk",
  "key2": "3J8M8EvG9GqAGSe9AUStPgPeM7h6MoghVkyawvVAQgShX22Va36SNUKkkAT9o36GmAS5jrprUkKwAKQLFs41zjMo",
  "key3": "3TzCzcNCEhN4WwBGLv2rnKN3f3QejhKbqXUvNKwyZANT1X9QhtsFF6Cs1pVCWFiKRWPMPmUMv3d2BC6gvFYLBcrb",
  "key4": "3MbUXG2idAZ5PZdJEjQPs3jDJ4XGF5xf2bkn4SLHSTYzPH4iZj3YaDXBvckmb59ye9qPYfqtXxNMG7oFx9BjFDCj",
  "key5": "3dFYGLWB7FMW3SEUYmVdsrzJA6oUebXfmsXqxHwd31xemBfEwX8DJdUG9DApidTeqiCiEQ7mcRn5ZuzQnwSpXWos",
  "key6": "5i11LgjjqUG3FsduM4ghmEpkDhknoVndh37JUJTVXZrm4HF7e9RMeQ65xTRFddy1UFnp55nVbpqrzM4ciN2zgXzL",
  "key7": "2s648i1nvwpxKyWV5ZuUjBekTD2AEhD5TXTcCXCe63fePaL4A8ScVdnxokDo4LTfxG88VVYVaNkft5cNpGwzZ7Rn",
  "key8": "63mJTSwk9AncSD3DnA3EaoVAVmwguxf9Btw6CapMb1VovwzfUYM312oUYVdN1Khz3xkwAgspLXvi69ydN3HA3HjE",
  "key9": "5VULvYDKipLgSP4j2KSfVFqDV6wdB3h6nspJPQiHwXzdsvUTf8mxTAKNxPpvV4eW8Gvty7GSimDfcv567LW4tLXh",
  "key10": "5YLJHZy59dQANB34DVveuxpeiZER3wZxqWW36hv22Dxk7nUSjiVerUKGe1GjamJGvqKNJFYTcoYyjKjjgNp29Jbb",
  "key11": "2ipTghoSzrYX6GYDAadjoZusV8EXnwqkrNSySuXGfgMSGRkkTEX5NLdBUCVkoATmFvLmRmK25N29aU5nteb3dUZZ",
  "key12": "ye8TYq7j7XzkJZhYYtNaSB8kHePzN2DAnDUKjSpMDJXatmm74GUEkzZnvCJfgb1CtdGpxMpHRj2CnfX1bH4XW2A",
  "key13": "fNwLrenyTh22SNkPAnNULprrG46wf31gZ5ggJeUmwnz4gjJvCxVurieXesgiGPtBNi2cdDvdTHqq7DUvoUNWxSo",
  "key14": "4w8NdbJzS6hc9e1eAzpf7CR5chWULTXWoHHJ7DMgptzStAbwne6afMrbRMNon3xGxwb1kkM6my2i1dt5dpTDKmEn",
  "key15": "62fnt7cfAmL7QcSD34jD4JwwPQfkzzj7HtKvrPU9Zc2eUEwJuN7eaS4XmHai1wfXnf78QocC6VNCZkjR2g4SMfEW",
  "key16": "2C542JwvK7EG2sPBv757WV5UiFAufjcHr4zZHdpF2rfAYGFDaNCbv74ohFzxptNGgTQkBXX9fUhVVxRNXNPLWU9Q",
  "key17": "4L7gNKsoqUBD2YC9M7So1BmcuYQPEbzDABicQDHE6J8BXz8WYXrXrWsQC2Y4YAF9zBuAnJxZFBfNusvHncNiRERJ",
  "key18": "4Zm8VXucdUcez5wxfcgWuoGqPKnKf2EWvy5zrhf4hEWVocdqnMynCCugX3c6kiUPXysavVKn58pCDxUoje27aqFq",
  "key19": "4sEK4AtLk5B593n8Ffuv7uixK58HYGLDmcgRgG6wo6ANpVycN2yrYnUfxDsyeSBYRcojkWnhhDG4mQoT1ZwpiXDT",
  "key20": "4xJ7jh7jaHXGqrF9NeXi8jQcAPuPEkYAXrkjPCAta8q7RLKeT57SkTu6R137G5iyhgxcifAmueMWV5gMDHFgZWAa",
  "key21": "3YCZgLA7bQPwi4rYocxUQsJDuqez7tmapmAqA2mA1QUFjeyrvYMHqwhBQw2MB9kNvcucsYviwioMmHywqZFEWRLL",
  "key22": "2cLRfxPEH6N6aWgEmHEXRLQubz2ajossZE1uBRVTcUUtELhRThmM2KKYd5XHrZaY4bM7FM1ZhQ6chvgPMawuq8c9",
  "key23": "5YVSRaZk887Hz9THy7FWhqfBHfbbmeAkV3MNNqr1eyVL6px8k9kBezpu6mr3vjWx2p3sZrXAJdoEzzJVackit3xd",
  "key24": "3acegFJmUwrxuKb9YBDLymhykEmCGosmvrqm9fkPS3dNSSw5ep4K21J54zdAbiJVMGi7w6niFwbrFZifGUh9dwxo",
  "key25": "4WeNky3NPXQVZn5RcvBgUow8nYD9ZWkTkwPgdcq39aSUx5wP13JvWGhQTKZyKWQTWjNRWnLQBAKbcFoe8M6ZFF1k",
  "key26": "42YzX8ujgcQKUiQ6TB9BkBPSug6Dj3GKo97hhiQp6ZydiFPbY8FsMZgYiQSDToDbQHs62GVuNihZxKMrCP91bSei",
  "key27": "MokVHTtLnA8fJK9b5jrRRwVoeXpiuKYRu9M1WpvDa6ZT1ue4HrZCbe8NpgWgqkeAgmYJM24wQoN7EbMrKSxouEr",
  "key28": "4PLqofUX1zCR4URdFRf8MuJSmo3XwAoo6a2iMDXJ5uegqrdnYtq4CoR6FQbvGdGUQY6F4Hsc4Jxphj8L8f6dP8Dj",
  "key29": "465CYNLEpzfZGpKqXXJcPHCXUbCLHYuLwaBWykekwcdu3cNS1fjTBKxPDrAn4Bst1qt9cPtJnA4pLCkS9DQZyZKx",
  "key30": "5KPSvPuKtXDQTrQRCVeNEtMjFE2sQ3jPtjmdW7ARXV7atwSt2NYRyW9t1iXqwXboKaVgSXAErnkDAwVPc1wRaWuG",
  "key31": "2jngQVwUvZd1toXfhXeNGex5Nr5weSjMLCgiXENzsYPaXofbM32h94PnXNUeSaBXgALdEQDBBhsDLSr7xsvaRhPY",
  "key32": "2cKxvA4ZLLHoQaG8WpvtrZnvEq65W7TaMbNTdqhdnpp3WFxA7myPG1NADF2h7P8QueJW44gQNSve2enQ4w1vafRW",
  "key33": "zUx1U5TU8bReFd6uzm7weDTPngkTcDducWJ24jSrkbNjsGmEros3eN8NqHd8tLE9CoexZAXL9jGnC69Vk1p86YQ",
  "key34": "32aGzV1K3oezRjeQfUHe7yv8eR97tzw27YJEtTBs9bV3uWH6vcKBDK9KdMF9Pt2R8WUS1hHF4Cvj2DC74u7usi5G",
  "key35": "4kLzq51UXso3foKLoAaj8gSAUxDnoYLzXAnqo4GZJ3GpviDWVFztZkHfx1WGWcwJUyChLcAwSc1vtoLn3h6cDUrw",
  "key36": "2GVh9q8BS1jBZmX4bBFu3FZN7Sf6EQaEHGDEAkWtPagYGUoF4NCXeQ2RkMRzD7LcKDg5NCqoonPX8ejtvoyfzzKX",
  "key37": "3AqUwJdkmgRqHcr1fRDcVP6CXuJRsEP7fsUmTv9HwhzSihzwwfeBhHnxNCwpwyGsTgq3naYzAKvF5ppUy6hUedj5",
  "key38": "A5HZ8Yhzx8Fwo1LFZp68DYCNgEQeGtoNreKS6YSF9EK7o2rcqXvWVr3BUTytMDpvKQ9NMYdhrbEyHnnDgRv5s5D",
  "key39": "2s2nUHwsW4K6CR56bmZtEo6NsGM6PydJrWZoCvfoyKPwY7uc4ny6ijkyz5KU3JheNGCjHrrgZwmhTB7DNa1oE7U9",
  "key40": "3m1dvvCYw9skVnDPkWqmFHmEwya6eyF2t62orR4Pf9YxRoFbuUMgRSqM2rjRFjwEYtAnBanpB4V5y1HXkjgiFzTb",
  "key41": "5JnTJNJtLHDdsh6GMhVxCSCqZbu6Z9d2o6rXCQghwV1Ss7ShhrTET4w3fWkiACCSLF5HFBTD44CifNHZWpjwvuj7",
  "key42": "21omnPYAokysv6W7fYxPN1kRi5C3TqhWhAbDijLSJEPXtF5999RbNDe4nbeyMmNLrv3fpsYP6cizAbJCoeFRsnos",
  "key43": "2vBSpLCZBd2SAggbybsmzj3hNAJ1aUVtWwDSkcdrsC5mzGP8ZpwRxoESbKMN9hzAU1zA8fh1crv5EdQyzozSqKTp",
  "key44": "ieqbX7Hipu9whvLfmqVN6fP572VMKszT3cm6VGyEAbRXQiYN7ru6TsQ3qYHNmtv69y2fSGDqUNgkuJAP4gqjS64",
  "key45": "5hc4WTuWw1AE3LiZoHGm98FA5E6HTyf2oRUDpGZSpXtbuCxb6agYaTuG4gCe8W8iaJpdWkxYe7hhqrfQREfmHm1w",
  "key46": "4S9YZnMqmXAVGiWNJsCG5nkAUequciohfzo5FkP6z3uKnUP5EsQzMe7m2Z8ktLRKGRHQAzpS7X8vuBhzDYjS6PY1"
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
