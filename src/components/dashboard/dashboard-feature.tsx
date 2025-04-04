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
    "2eemqaUpzmXfbJiSSLXX8uWcF4d7AnHp5TDSfbanYjPRLpb5y8hFvWGu7EmgBRHjyiXABr7BDYJtf9tDpm33jz7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWUgPnhPJi7KQSP2oxB314CQwa3Z4ydz192aVnmXL2EtZjA1KWVXqvMuLR7GFoUHDwUHf1JBK6zpa6JK3ascon8",
  "key1": "564j26QPEgEMemjGe6U6UmBtfMCW884jsXPLABPEzUNwy37cs5DxeuG8ZfZGFv1DrWfDPAK5EPSLqYphMjuXRVhM",
  "key2": "4LD7vHraeHXjbngb3maHpaasTpMu58Bb6KeabcPqTWK3LwgNzLd7ruRfvW5seaW2jG23uXDXseECHDcrLEno5B9p",
  "key3": "2tu64Eoo7SCBd45SBcYmuFpgdBu7C63XmtFJK5mERAZU8VtSeUBj4N8sypT9WcLoU9d1SP3HF5pg1W2TXV8hCDYD",
  "key4": "4Zb5MyqUvVDyQd5YseGbgdPADJycjEK3nwDbg98CNzSSusTX5YRA1khdZdjm5UJLao7EzK97eXvAjig3eATFUS6v",
  "key5": "3F5N8LdEknEReAeo3b1FsNz9XTnBAWidbBv32MqpNBn3ZM4WPEMkZsfxDvokAmeEWNBDQmerbfDgBVoRhkPxFG6i",
  "key6": "2c5ktyQ9VQV9Cn1mEhVAJ67Xsi4Z5NQhWcubNmJRSWNydyBwVHStMneMvAzN1UQ5cbL3m9vmccw3omK5j2ZQ4evJ",
  "key7": "2z7i665q4uckzxHpX3dT8DL41BTvrLkR3AXN9ETJsGAKNwbKRXHN3oqPGDtuEnYUJ9hY49XL8PpBbQfusvk6CMjK",
  "key8": "2LKuRCCheURBESfn1ekfJGxAviBUZSdBWQJzj3fH5ZdNYD3ewgPRUZ1pd795D9Fm7NJqMSScVV55xLNCWKQbe6ux",
  "key9": "5pkjd5FoEVqnejKV31nFNPMQ2yN9PHZjShY8Qbo5xThq6H3Xdvz6DpiRDAgcG8Vg7EbkFjQQRo4mTQG3rwUqMhBX",
  "key10": "5292eNSiHQFdgNvaDtESAt6vLJfVnmuZqja2pBQLM1JktVSS5yhd1QgsU38wigiPUh4WACRcyqvVrFC8p4F3Wer8",
  "key11": "3BmeQyTYYJotcRanMKVKwDbdx7ZkwfuYUNh6ZLyFEh1sHxE2GbKfqRuA3oMgqJJus8xRRBWySFLYM984yFhwPDpa",
  "key12": "2mivDqsT161rnoCF9tUjCxXuFYvWNpB6fKqkuDqGghVwsrhWzQ4vP8KWsESfnS5fpURRYgajG9Wfqix5dJCicTt",
  "key13": "5xnMc73G6q4d8yRA1iPjnTXmW2mvgrruqtGY4jMCev3a1cw4sbG1w4T4bZ8aQmCP7DfCKgCqHxsZkjFBn3SLR9WA",
  "key14": "Lgw9QsuwMy7mZemupXoyWNBcsAV5RjWNtmMCTP971CffmsExibWkkyMgtnTfSeVjGXNUZS6CvKnaEoJHJRRCZBM",
  "key15": "46ePUwnokGTg8TSSSmshkW6e7Np7XTKW3cxv5Gf3JCbWb3WKCMfqFapuNeMR5zSpZtW283go827y1aPnci7er5GT",
  "key16": "rixQkw95ZXf5edXFRjLXoaCm65tSLvnRt4TF7z89Q8g13pSou6Aj9GsJaEaFKr4VSJppKPktw39FaKmUjGu8qyc",
  "key17": "2YzHyHgi4dzdkWuqeBVoL2U1izRD4hDYEMvPhZi5nj1nH1q5j2Guwuk3h3XEvFc3LooiTk1qQuaoQPKdhxiRy3Ss",
  "key18": "127VSNG1R5YFWsmJafsD8ZDaLtWLhKtnEUwGFixEaxJEDj1Nn9rdqqozWkd5MPu3PiKfsWfQhJagSqE1NTkmCcV",
  "key19": "4HUojmBWSbq98TP3qR5DjCNJAU34PvhWcSSgjfAPNpt9avYdcaQeseMtYNTA6YEbcwDYrZxJz5T5hPY1yCLvCw3H",
  "key20": "3wvKf21KLWzuru8hft4kfnBQF6FZCjbvjkcGnJZ8EHrrLJhoeLFmxHUna7yiN4o5HAatAraYa7phjz4qokMMGxHq",
  "key21": "45dRnkgC2r6j2wU7T4HRYBYSAADUN3XRvx4u3aFunyBjfoaVPRwXuQWrv9MZZ7aUhTZH2jt3WbaD87VRerpK4iqH",
  "key22": "5Dh6FahCw1HspJSnUZbWhtX6bHyjyz634cLgb2Afmwj5sfuZMf2uppMqTwKj8a74kUtAeLURTNP15baLYBB83LPm",
  "key23": "3xEet3DzK2U1UeWzWTRowJRXVcqxnhVWScyaTJazo3n5CEManYAoCNVwp4RH3UP28hWV17Bz4W3F35ir5NURV2od",
  "key24": "2Gmy1bXfVRzYahCBpDWzBfhJnbnFxXwnSSf2WkwtTVdsJuGvu8E5hihn9qsthzMgWHAdWu6a6CiM1whSue6Dfmhu",
  "key25": "48kKBhv5SG49rapZZwXGy7yMBMAhi7r7H9vDMjpph6B9sq5FD6qeLqBpduZh7rpAVSRKjguagdRuydf2pxUgZsKn",
  "key26": "2iLq6MJ72e2T7no7QamiLKFZUk6jegVZsEKKzf2LzFPh27TUJ2SuL9igWCjjPpTAZPrEAndYPUtNZZNvSUovHWLA",
  "key27": "fFeEJMWKEjSgy7msGkZbtxRXX9RV2yYduyAF7ZWQg6xYqehaWDPYxgmBEMwc8BXx4a9B3Ngq6j5a6oD9rFy9hPU",
  "key28": "2xqStQerkkrZMsvayCSbHwcpHTRmEkrkqZNSiFeM56JTXonbC5E1K9nMA9kDJfEWgas4D9RuqMT5Y39DXRNuJFBk",
  "key29": "31v2wVchJioNgMf5cBTKqVen8kCkXpE9sZ84uj9BRHzchaChFNnMe6cuP1MW7boEiveFcxGFSza5dMmRd7DPfmtN",
  "key30": "5jxCSk3sZEBTSXXnyE8Zhckej6KkjPxFP5XvNj7q8CsJfodAyHMoxKisqM6QamYzp8q4gbGdLYyw4LQAdLvGT9VC",
  "key31": "36NPCiqz26KZFAYnvFFrRY8GJ3sy8CbaK4UN1T1SphcUHNWnLC6LTRpeobo2GM6bshTK7WHZMi7ahePVKdaxXcfv",
  "key32": "2d3GwHLJ1VnxAgfG6Hze1s2pTkNWg2cPq8scoPBru5XSS9sNQiBpynbv9UGAmmseUSiCyzqP3qyLXGeZari3AQGQ",
  "key33": "2xn7BGCDsprAaJLiZsbzjqtyESKHvX8LqJZytKNtGRuo8Ef1zThvkkBJFPxaNnUUHNkjMfF9GUUkStUouhfZX2uc",
  "key34": "2nxUs7bFxDzK7e2LBhcBUQQBAFKpi8c89wRw2tkMRAwfegiZ7U54Nena7xpULPERzw5mgnAL42v7dM815p6UBKB1",
  "key35": "5XKKf1mQYAHeJn9aApv1MFUkGNyCY9Vu4ecNfAkVo3a9NNtcSjXDCJebMXKTJCPcphoZVWMgqrBRFHfjA668a5wq",
  "key36": "4BWkUouezheNrxAbpSM8RKAZqZ7Snzp5CsLN31prEsvJKUmxmRWYxMhjN8uYVw7aUmgZsgvvhc9AiPBwGo2ooGoB",
  "key37": "G5M4DeqyUaLBS9D2CjoKcJEj7oZVymtu6L9cLzsPnhdGaWEoSXdSHcc6HntHKN6QgJQgQKNMBVnK3YMNW5qE8Ma",
  "key38": "zSAeLXiW4m4mBqqMfRRSwwz9NvEB4wymrZ6Uawu8GXsQh7j8M14hDqSRAh2rokw3pW6emsugyUurda62nmy1hfA",
  "key39": "66fDBhbzAyoXQshFwbu7utPnkTumYXSGHiBZuEjyU8KA6YGtxXjztmQ59xKyyPFyej772y9fzFwgiF4kBzQP1TeF",
  "key40": "2Wg6Q7G5mBwtdvY1JYqssJzDVeSsQFqzr4XwRgMcNcRZNxHBZJsH7S5df2uR1TsZ96brXGqmxTXHcMP54MyRgr6X",
  "key41": "44EGPjRi1fUoGUenrJrj4niWbRagdM9vZpng7oTMGp8DVPyHiBp5Kq6SQHk7T2x1ZMCmY8ZoKzCwTNwDFYQwDaw1",
  "key42": "5nbJbvLeGvDKPQPgbqs2cfowE3zSBBSzCEiiZDCUBmNws9uXfM1ozWr3QQdXZPkeo761RWoXZMENAx5y2riT4ivF",
  "key43": "4D21fkAFTBrgoRn5frwJCibt4hcbJTULeWkk17Sq5jNxnCiHic5sCR93Hvv2REFhKjYfzPS8W4Shafb89CJKGjUn",
  "key44": "4qUqbHPG9iUpp1inpJBcTF1eva6JgwFGjehMcB7rr8DHCaPR3QEAhXs4HdufmCDDfgaVD7DMtRFnQGWFAPPevTEs"
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
