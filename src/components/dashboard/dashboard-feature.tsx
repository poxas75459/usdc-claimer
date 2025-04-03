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
    "5ZyjP6yFUX3bcQQ1rLSATVBbhV6BLGRaseRjmjNUJmpYPzpexKcdE59KerYY8EJPUVAyc1XJdxAoRXGp1ndkQngK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uuyxAMp6GsvAhy2p4weZNrvw9qx2nYnYgvxWwRJZV4FmjZKpkMsp2ot5wVNRxsJNYcovRD4TVMmWtK4Qvwujf5q",
  "key1": "9kDEQ1SbuaZJTwmUMmBJaWTAs88fKYw3AdHt4K1aFf6D3eaWHXCC5Tht1cbhhtdseKe4XkcBQtBLvvMGpW1ShWr",
  "key2": "JLEqqCd3JHpLJNFj1dr54oa1wYQtnk5acwJS7pGUBgfTS7np6AFZMXasewsXawk8FQdgCVm4AR88uLT4ucY2wXK",
  "key3": "B4zZPy4617RPmDWXcgepQLFJzuFFotwXw7Myyi3hZvcLPdBtPVRLxefqgDNvqHmwzh8ibDxBYianWK1EkRe8yTF",
  "key4": "5XXKkzjj5vnRTPrkCCdJuxVtijVE97U2hqNRFyiWQdgFJadkCfUGmvVxLsimAKWBaq37TciaaNgwhdfWf62TDMWb",
  "key5": "2QuxLTT3wVK53bQdogUJrPUWkw9r8V65pqGUcFtVXmkVuGG5JCV8aievSVw1qzw5TYvQmYEsmXQQrTaTwPsy5kcx",
  "key6": "2v8UVhwngyoWFZEUYM1pF4mZNKQaWCQvqc5hBWWGGrB8iKAtNNngg22NWwRmYepm7G6W53bWuGD6cvLsVF4Ucpr8",
  "key7": "pJgJSitXoEdiJrmYStBPr36L5RqLxa7NViDnSCsb73eD9dMTjmwMc56DMxVaX31uiVNsFcmNYN6mPCPK3YVhubR",
  "key8": "3J2QoRNbezt1dY1KEMPmEoZ3V6xHuVoVTsjg9fNKbPX8jJarPtM2PXuPuU7tFQdPAcGUzPWnGPuLqCA6bxE7xvNQ",
  "key9": "4at8HqS2SwZrkwuE2TC4R5LnnbLHqoa1y8NyUxx6koWf8moo1dwFoHunniE68EKGtkHWTxeefLKh6CCotwi2jeDt",
  "key10": "6yGbxUKjgjRSwMxy1Cko8HctXoG6z6EFrbkczfqDAHddnP7xhAVv1iQK4VPkdQBYNiDUqoe4PHiaWYvhFyv346P",
  "key11": "3aNAuYWk8fJo12UcxT2pygmKk1mGYHjwANNHktxmKuBJW5GDtJ6qSKhwWFgQn1XcgDXJ9QvJ8K1B9PytANxKfsBp",
  "key12": "2NnuPkDk6d9Xz4MdwF5h9kXjZn7nLKLNur1bfHzrYStYpjy45JVvycWmsvrfxYWmUjKxAFW9G9tihpCbBjGxoons",
  "key13": "kUKUrKpr6eVBg8kkaHf6TjPUCcHAyGz5hQ4snYSx7QmPPxxoZZ6xRPa8KztcPFrHKvpX98y46cHKHqaeaqwVLPs",
  "key14": "298ogJFYkStMt41DXr77QyshkE73oZruCbzRzKBHLxGCHz3UVrDvkCJeAWbds9Vwx3HJLWUZ2ujRcjKvHJWyYtKi",
  "key15": "45KyJhR8WmZiLXqqrPboRkaRj1mdFmBbyqwyejAzsuzesH6xKXd1MBhoodbjW4rVD9gvif2ctDW3LPfdq2SZqaPA",
  "key16": "5L28coDM6uqjnJsHwsyxegydgzyqkVzE9N4CYjFtdfp3WbJcGGEygLBnQkmVbGXfHqb29NzJw4saJj9D7hsdF5it",
  "key17": "GSgMcHEjpX2RWsTA1h43ekze3YHSkGND2v2eX7GUnk7JSnhjxZezFp8vqYJ7GhQQFFNdcXZcLebVdyPAHAm3ruu",
  "key18": "3ZDxCaJBGpoEFP4q7Cxa7nt55Goj81T8YEyRnSPqXMpeuQnEEPjeGNsPkS6JrbN7GjtAg8wCP3kzD5n7w7taezjB",
  "key19": "5k5gVYjfVG2uU8y6uTP9HseL16waDjZwXpEL3JEWS6BgNxVAKWQYoXvyB4TJpsoDHmUCVo7Zpuhm1jNGxfyitcV4",
  "key20": "u318WEJ26NrrumnygK3EVPcsYZcxL5aV7e4bvMhGdgQdj689sJnF5Gw3ErVpqSZARsS4PEzDkp4rmGcY3eYBSph",
  "key21": "65USvWR7fvwPB5y21SWBv4RRq53fSo2we1xxwFZ8iT4zEMAaJHmNJDXytCwKwnKY2zsG5NVQVKta3aPF7WfTKeAJ",
  "key22": "4JTBB9RG7BMFHDw1FmVNoCZPw2z8L3XCV2ugcSZDiH7sSXgUutQgwkcjsRTyN7hxc8mjNuDBfsymDu5waBSM8nNb",
  "key23": "5eiPvzZ6Fq8UZyRbCBqJYs5tAFz7ehp2ENRHF8SqZuwhv4hSjeGTVnpv24uapUxMjHF7QTRkCuvefUnhVDn1zX7Y",
  "key24": "CMTsnwpkTkKVUtwacuhgnEBw87wQkXpbit33Ha9nHHXWuPNDMLVj1353MqGNeUF47ZmdaJRT5MfuJ1Us2gNXVnJ",
  "key25": "5nkbafzKAMfS5n5NTF56R3GPgsH4enMKp5rHAV9qAtnTpXQQNWjTVosvgNyStkXharxL9D8ontGq11E1L8jW2S65",
  "key26": "2y11FFf8iD3Ec4AfQNPPHo4r4Mqi4LGFg3eWA9rdYVygAMqC8b4ihqeiWWQHzjke9z462trCdWvFXPLVyW8H4iWC",
  "key27": "4b7tGoymsie4EU8MaUogw65bFaARtS62Jpjg1TEyvRnHg3nG1x3dyfeejxTJ1APgUAtp3icgCAxnjC1p7xi67YDX",
  "key28": "ccNzE6Dc5YA3qmT6PbT5cFd9YA2dX5LWCX6sBq8hHmh9BYmTAounJBNunKiK2XHC4njrDwHGo7QzazFjHmKPQ8Y",
  "key29": "51BpQVTAFN6FqawsRB2jtb5Ab5JUkygy6L1GNS3sf7PFWYfvz1LH4RFaxg7vVtURgcw9RmVBTSmmV4kUtWaE3W9a",
  "key30": "4AR62Eq3FWzWFxQ4Gd9xPE5Lo8m4GUbuTNrBXtxutrV3CoDo2qLn6actvaxaM5CRzaL5MQgAirubVPhVzYCLCUNp",
  "key31": "4PCcccymfCfgFJT94G7TVZXnCfvsPgbWWZ4cGhBuWAti6pzzfYakFBj8xSApgH9ovCfuFoUh7xBWxXFnGkAB96U",
  "key32": "54U9YPYVL6E1nwWVqQmu1nYojNMraWFVrAaQSmyqYAzMSrTGQjrD5i2pwNGRC6bPZDpYMphpUoUj2XpoKHAqXDtS",
  "key33": "4xpnGx3ne4ioLPCL3L7ncAJqQiAsxQ2s4j57ZLLAbMVTpumkpJrskoA1VnC5HDSeb8VfRsCXtNp1wxRPGzSByhaz",
  "key34": "3iqoLRbdmMLS2UM2VteyYZRheVmPewYzDZ8ySRt2RwA3gxvM8UwVctJdSTguwx4eUpS2b5mR3eAtw6ofWr7eArFu",
  "key35": "2GqW6BrSv5Ur67J8UhE8xc4f6RQzbMWxeRdmFSTEaNZNtVQvW1J3TSYJfaHV4JGgRihjJm3FAqjCvBAWtvYHvjZx",
  "key36": "2EmJitcC9ELXTRLk3ESkVVBpJuXtdtxRKNTrkETxjZ2BekA6rSoZ8wLDUrsbcNRyfZgjx5sMMWQXN5bmKj8EZsHn",
  "key37": "3GEpcHcrrtMSpYNn2fgtXryAvftR1bc9RqTjVXRwhFcPnwpCCDwnW4Z7ZopF6H1bg4X3ok1ZcPGjZnRpQRBEmQA6",
  "key38": "64ZCdPX1ch2hMJTeSGRuGZDWP9UmzacStweYgsvQPKhXaW53aiLn6u9vuxDxYjHe8PtJAV8rafYbRQRGgM31f8ur",
  "key39": "4YBAM7wNoQAb5aNxXPSuayThgqf5CcmvXwjbjqfZe5nC8GaqwsaZHvi7QY1GAXi1fAbgwDUZw3a1N1fVD1hts3P",
  "key40": "3sMErMnU5fB8iTzftRZJtPbKL4ywtAH3eitXRYkZAq1bJj78tfP6zWWhpu3rpJb5f3Bzw78LdmXeshCb6UqbhrfT",
  "key41": "4ChFF34qyWViVCdk4rq9zwsw5BMXMeSTrv3Jysq695zRTzDneZMFKBk8GQGpud1bQSYLQ6t5xf5hJ28KZgQNwKzj",
  "key42": "5ARF7WhrSY4tsLxsTBRYywgStVJ72A28p5FAnFepLY7fAGmPgSHA5Z83PVV6kyk5njEFqfQ63yJny9ff92kuCstw",
  "key43": "oNLv8Cdow7H6hRWuEXo73kkDpt5vXuXfBdUB7bQXxa8RvND4ws7XB4M1xupsuw8hzZ2c8muwU3yKCkxJct1E5Qg",
  "key44": "4Rf7v6YsBuApu54EotbPiQuKptQYLfczYdx2pfQ253y5sXPP1xfzFJ25MprtWAycftYY2wJH5hX6h9JHjLtD9Efr",
  "key45": "5E29RENpDDZP1TTyhzoxNi7L9TWzV4u7Rpvmwf3XqXqLMC9op5EVFhVHhhKwiqaZaN4nExvmd5Yy6PxEDYRBozNM",
  "key46": "4sXZ8uoy6xCqUvqjAA63ZDYmB6yxocj4m4FDFPKRFbLv7dhacXpDqbcAwNhfE3pAr84HsxptVcLg84HH2VPyV6vj",
  "key47": "5qBKgbZT9YpdzZpX5w5rWRcQ3LrmBva9aJkCsPvv63ufeceLu3QY1GePkGPpyQ9WS1wNarGhizFvRfjNarK5Xyt7"
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
