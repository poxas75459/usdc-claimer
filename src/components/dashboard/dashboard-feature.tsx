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
    "53LrSEDDQsvPqixwDQ3R6hh8x6P23y5YRjfe5bxDaGtLbYF2LMVbXBcAdqRFbreSxeTRpz2KyYWV1bJJsbHztSab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wur3Tr1wGvFCpDXnZzuFMfeyWQhp2i9RKTTjK3xWb3uByAmYcK7jsQdKfVjmNxBQK8N9xho3fTWS3X4kSdYLL5",
  "key1": "3xYXHXdZyJJU3zD3WdiKQ2Ayzs7RhrbEpn4mDC7vvq59yctzeYPNhXphGuUnJkXHmRJNtRC1ZmVV6zBF9Aixb2b9",
  "key2": "2ZbyjQkdyGPb1Dh2Vmtx2uo5X84QfUxF7QNq6qmmzSVMwF8fvo6VsEbBZXdU2mZEJsviBKZwKAvkggUquwwSYxRo",
  "key3": "5yzXkcFKS3gLvAq17ByZbhhctxCHabwr57av37L6VW1EwBVfGxtaFpY4YGaLWM18c9bE7FAeaPVibyRsTNQedAx9",
  "key4": "pgVu6EBYyQq8aty7JrRAYNjkReA8g3SUpPTdSs8EfDz3cjidXcKCmwLLVZM6CzN7eXCeCHAeVGH57Mksfc9uiVP",
  "key5": "3NgadfynhFDii64onFaQczWzj35EPtVBpcwMR1yzLb1mK4VvDCdUBK2hvruAEzigvqDorBVmzRnxf8pXmK81a1B2",
  "key6": "4w13zLeMgVEeKhSG6b3vYW34HtSzLaenexoyrGNKG7aJtsaDjrPL2LmLx3Ve16dZWfm5JxcHm3cdoRJbZn4BUsB4",
  "key7": "22davfXPryBkv1TbEZJqJoxG9TkvM2m5EoVoTKiPyWkEX2YPjDDGKWSMmfR8UrC4o3Dr6oUFXs2G4B2UPj5ZV5f1",
  "key8": "4bFGnSZtecENwCyx4TNxQLBPBdXUaaBLi4WA2YEVJL4iorgJSfCBPAPEimovxRCwJdWEuQUdKGHtdJNVtPMf5K5L",
  "key9": "3g1QJKBcNZzffAa3Cwv2ohxuV7vZGJVsjojGdXTsZDLh7CSSCPTZq78iFf566wAiT5LWcbGotdXwoD2UitZ4mbjN",
  "key10": "2UDKVL5hhN6MLSpf2LLWyKXiB8XTJVXdLbkTSG3sfiUQgWFxfaFKsSsnB6G6MFmET6BpZsXMRe9XgUCB62fugRUG",
  "key11": "4xy9ZtjP1krgTWtPM7J54tBepy9yBP3Ad42SDxqWo3XNrCtRwunTHFDExCPRtR7VbBtt1u5zku1VYtqNrAxrjuAW",
  "key12": "3V4rUbrTeqAeHxsEEj983ecnKoFWVQeQRRYvFq38Ac7HTJDZhjWGF52XMhH2XSzbRrGvLFJx1kX5Gvs8QRum9eT7",
  "key13": "nBdgj16f1bsUNZ9nwhPh6CreVWK9WoeYAdrUdKPFKWaB8WvfQM5kbs1BrXEFMJzdHnmnWEcX46Sz5Y4gQyFWDVo",
  "key14": "5NX2iAn4yBiPx93kYzoyaxAw4aLi8WtMHfZgHkTjSLVzDyYjkB2k7tVbWkwJsVajLW1K5NQg1XUetEJm2ibxa5Je",
  "key15": "3qHpAB86jRuZw9TwuKgiX6F2tpfChxfMacQQBt8mxPzZKrmrxWdvdCj2oSfabbEtAswwZyzTQfu7KaNRDB4vgK5",
  "key16": "3SGpC2N59zPac7ZooHAKbrHziyQYYEnz6JE7WtsNdB2MyDPNEQTu1xA9tDWFzBp9XGkQ8f7KtFTqF2UCVmPiTfv6",
  "key17": "3hCDmDcYKzX7e7v5vztYCAs1YQX2nxkYtETXWmasPsBMYR55WBV1PzYHkJKZPXx5cgckWGK2qKnJidydZHGBRgcj",
  "key18": "5gcN35ZSg9YC4PaYK4GmUDQ892MtFdCCicS3FKAyH275EZeaDhTmnkFNjsxQ3eH9Eu65XGCWpuJbTGfWhEYxBjWm",
  "key19": "4Fb8ZWfgUagaTe51HPg2xxLgrudB8FAUg1pJJcTEqrhfP2xkzM8brttnURqHFMU3zKXPJYN5soo5AFsenZUYfC7X",
  "key20": "2YFHFPfEvophY9j2UGHSdXXvtJhkbTR1YNga3UiaagoL1dBoGr9f7Yn9Gt2boDiuVCJ64oEgjRJ8XPCAooQHJwch",
  "key21": "3Zk1DTAX8pvgwAU5RJBBEKwq7yZcVaD4a7UajVzevJetoCRdMvcYTPc9eAkVU2frkVVbbDgPaLopWB7CyvxQwSJy",
  "key22": "HxaDpqKG17rwvUjt4yFXjqZDrNGFQcq1VrcdSTPymZ2L7kE8hc9ew9D33thQHMrsYtYFyveMs1RGewzyvykHPiF",
  "key23": "4VehnAq4sU4Bj8ns9h8R2pY5FJuTrRGYFd3F76xyiWsucJfrC819LGg1HyDowDzm2Jin1w5LHsd6PBQv91QHoiN3",
  "key24": "5MF5H8R4W85Ajdh5v2nzEChNxruNn3Fr3js7ShotVHPMv5BRUiBv4us3QfaNw8YzSmyS9LsnhYGkb7YoV3zB3Tyy",
  "key25": "B93umuTDauHHAt12qoBYVqrUdPyjXL3nytP12uARqzyDM9o6r9zUgogZxLAXf1N7wuSjU8Z6VihHv9Gqnpc2z1o",
  "key26": "5xJzeE5T2KwnjFPpvKNN957rVhey1WTHzqMDqdZCsjBRK2CLZq4nRm7H5ZmLMZYfLVv2hftF4FZ2qnHquaxMaf97",
  "key27": "4w5SMoKXaTQxcC8KPj6P4fUEXLZxgzJUzDm1FmAyUmVYXRK2nQgaRz9zvrXrDsd8TXVKErKrXi9xqCY9WRP37S2e",
  "key28": "DzE3Ef6xDwu2RYYaWTCbyfcsN2342mq5jTt3hqm1wTLqiu84gP3CULpAESB4j3GiTYvXqLFJsSJgrUq3kL6jYF7",
  "key29": "28H2BjWe59PnVuBY5MzN8bUceypaHS74LJJ44V7RC4KJjnTKXZHj5wJsSzyZw7dfRGKNDzXzZBERUXdwPbpXca4t",
  "key30": "42PUxVm1U9B52KKUBZovhTSCN2yMNcxke2X5VMov1BiYM7oJH6UQDJstGhHRqhCaeYYrCApKVmB6XZ971Fyu1Ezn",
  "key31": "645Uyrw12ppWc7RSjPXAzokZkvfPYBrskZ9aNMSnMDDrmaj3QmCaLS8Ra87NyzPgNuuH3zHHGtAxiN3BfJUEniRn",
  "key32": "4P1QpL6nGXWnUN5dZFyqVFL84z7ktuYa2Xb5vFFJtie7PsBAckzeGYJZsvhA9ytVLjeC9TToBj9UujiZQpQJYkhK",
  "key33": "3JwjXS4CcjG9vHWsUSGew33oqMbFkazaFSukDDaxLWSE6NbKnVdN46W58GepaPWjCyFvrC7op9mgTtKVgFRuPZ9J",
  "key34": "2BVckVaJU7affLaiiNVFfrA4mRpxiw3z713n1VaQ6Q4mkyj8wpo4PUSemCJDzVTiuxegaihYcPNXhX2iZUTWyWwF",
  "key35": "3F1gtNXWhcaGsrvBnFWPyBQwHNAZMZW3PB1b7SRiaNU5xSaaQxvL7ZiZGqbLAfSpt8rDoWXskV4zV9y7E3SVF5RT",
  "key36": "4P9idfRC5qkc1ZmcrZ9tnEdHcV29fb2qWQoXTmqSCh6Bzw1RzzLCPJ3Dk8BBprRT4bJUCLyK1Sam3xpsfemXH8Ho",
  "key37": "34wpqUtCfMG844KHZnncntuQLir8btD2kngh3pQ98sbdxhzv1zMuKTUBPN95tKLfUuawtgjM9kXLZYDayCJ7joha",
  "key38": "4BkHoHz2hLithoMSXMMAetX3yGmAqgWG7q5uZPh9y7AzS74uP2GAq1vpRHNcQRJC1s8jEaejv2yPizyTVXwknv7M",
  "key39": "63coiLmArzN53hycTtMauEDwtD3eqif5GS6LLCFjAGwW1hinFYzxvgQ5UvH3TzWVP9AebqnDs9v3esxjCQwvxwHu",
  "key40": "62zGhsNgoJgz9wH25kQSJV1HivSVxGDhUmQV5h59SosQ2EfxrfoA2uR2pB4sQV97Yxhiqv8qsYba2VXqaxpDUFSN",
  "key41": "4vPq3LyD4QzjmKNaX17doyQ7VmvRv2gfujR2yC9muL4seJ8STutx2ybu7LPsDSgQkXfDSP8MdhEcHeEvn8645jLe",
  "key42": "7Lcw4CDH6vPd33vtnumvunZnbsfYN4YRSQhxXaR9XQMWLgnGvMqd26GJ4CEcDYvBXETpYNbDQMxEgSP5NHBbUeX",
  "key43": "3egq5bTGd2uPuC29YGN348abRoc3ZZLofbwW6Cbhj6rZKKsXGyLLYJNSUXiv9d6hCyjzQSGMvSNY5NBmu3Ua6w77",
  "key44": "5q8Qtmr2Z6xqcnRStbDCaEZM33FWunbgttvAVPawgzomJ5my28QKJ3Q8meQGSDusw5ihiEuMQwpQQNBtv7AE12cb",
  "key45": "2Ni4z3KMEo451dDnpA1KUU1XkrT7wBz3nJxVSLx3auFU6aC9kAH47xYoBjWtRxn73JFUwefmcRk2xjM5xQimc9hh",
  "key46": "3175oG9rq4hrH6RtVMo5EJ1qM2chHCgp1zMUsCBtego79Gz1LQq98sxyd8ALzi3PnDPgJAcsZZoBCDSHs6CHaen9"
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
