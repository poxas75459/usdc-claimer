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
    "5dGRhPhVLeDyrzddWb1y84HMmdSPZQBVn1sGhiUtcwfoRaFBXXjnUUN2AWYhJwn8yRnWYTv5UY5QeKnHur77qSxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442g11hcLF73QHRVRVEZKG2wnEfeGGP69VzAEbLHFjA1sptJu87UBnjBtMCbF2fCv2KuLqYasBxAQqgKFuRtsFnA",
  "key1": "5QyUUk8QeDJf5u8Nk15jaAGogWhwd7MkPtB5KEmavJKnZmRD4SbsAKs1qYmUMyA1ZnZcLubqd785R9rp38CSRYtB",
  "key2": "pXYRVibdxnF9aBmQu38xEfX1cQtWf4LCHpEon5o7HN2xrAh1NwXeq82zcjnHYBns1V2MkuWWgQNWL4fVoLTkH7H",
  "key3": "5EHAp2SqGyBdfhpNdGPat9gtiEZfPrkkdeMztQ2TWsSDcQrTidydbX8PEQuEcnT25Kexr75PRWPipZgUNgjj3thh",
  "key4": "Xrq3w3A94F6kLT2FKo8RzqNRcy3jm4cvgG9PR3Pj4cefQwVmH6TbF37YoRa7HfXQmDZAkDJXqD7r9UtG1WARrAE",
  "key5": "5Q6kFVzkxxLQuVapZyP1J5WPmQMzRv4W9eZ2RzXrCBzaMEU3PoGrwJRE5ricBdXBpq1HTocXQeJ7RjHXTajSLj3L",
  "key6": "24YKJ4FpZzswvuJfrGSmeS34mPkr9LFEDpWwEZ9Sfkhgx66JnpxHiH32QdqRrD5U9x6xrx9TLhnbNRKtUZyQhFEC",
  "key7": "uhq22qnmtFh7oQcM1tALVPYxZZaLFpG1R7sGfg5bruiceKfGvRzs23KZxY85MNeQ8pVMoitsxgRwAnQ6jkNKRm5",
  "key8": "Xw8wudrZKA18sTi95k9sPwbSpuCriiM35UN1FDSiuT3H2NwznkYcSCw13Prm3fm6FNKu1J8atPvHDCn5trRKypU",
  "key9": "oroe9Frt8Aim9jbiio1TpGPecQLZZBoh7ZFuXuj4Ed4C8uPaW7fxtmgLSohnFWJdfHgYu9UHhPBMcXL3N8yuja5",
  "key10": "zm7rYjVKHLEgTxoUzHLNJBewR6dnBSdapmu11h711bVLjomDkNWCaeuFJ8h2xoNq7YpCB2scBCav56RuxfjWEgr",
  "key11": "UnEVp6sNc3st4FZgKJZMgZGpQdY2zveURhf34EDxo9NpTQBkohxjRzDUx7i9XDPRwmBq8GwfeggYxABVLERFHXX",
  "key12": "GkXmhqcbXap5c8D4ozHE1PSeZBnH4fE2u2z8NJtc5pNe51UVhAC9AtQFcXBemTn4eR5HxjftkpJKPoDmQCw2wzU",
  "key13": "2rM7WpP7c61wVvqJz4ru1d8TAyAfudkWMsQiVnBwWvtky9A2gNTunxrwyvhepGiGhWGK2MVce5FEyzQCuqxsNqi4",
  "key14": "SEdGC4HxdjG9JbJCJs8pNNWr9nxqit4ueb6g4ZFEakBM4ESpgqSyFhXQQ5vQXrUv8cyyVCtb9UUQDsVBv51Y95Z",
  "key15": "5unFawZzbxjaKTWMHqGMvScuxHfNgc9BbPTv88Prexi3XtYBRqfL9cmGt6ejMAcQJyNzWArKtqMywRehEd7kETKd",
  "key16": "Ggke5Qo8K2HFtXdwRpKGcYEkNi9E7YtYmyhAwAuQP3uiVMvT6EjSexHEw7EtJny46zkow34BEqTtdvfnfm1ZyFL",
  "key17": "3dUCq7YT3hgFJqvwRy4Fdpg1sDbesagea51vT2kDWuQpKVTihvSnAXuj9AiGiBk8zupsADpAd8j25dnuMEDsx6jb",
  "key18": "A2XYpJWFGnyV4LLAf3Nr21RHhdvgRf6F3ge7hcn42sZSWfXsLzBwGRJ5C1LdUCEtD2c7ZTozXGam15tbbXH4wA2",
  "key19": "5WAE8uubtDLZjoxTprzZ3n9aaHvWJAA2rMTdNWtuA3C9ptVLZQNcyQvebFSGQM89Svjc5rzdn43UEuyKeQPvBshx",
  "key20": "5EXwxpqCaGjtmzKpoibbqns9ZCwd9nssWmA9tMC5C9mhw3N9a8ARo1kLVLTLWC9TUvtfVvEEuYMeaV4VDA5jtpgS",
  "key21": "31GA4oTANq7UyQD5F7gfbFomRV7wfsK3XX2ybCt77MtRcjLPbkNuYjUNckiacdRp7ToRnT7aQLdXHDUKZowE7PkJ",
  "key22": "pYacwDVaCewJKSyBMPnnDpF7bNMQWn11PWHqYoBKBcLPSRWLHe9ivy27tgGydGvs5WgLTFeCjG9PF28VzUn5yNY",
  "key23": "3rbTQzmsW7VKtrJgdLYctPhcBAbgmQyWzscuZ6vDUvSDLRdifSVw3a9BhRHPpusnuRT8Ckq9HqHkmsErgMyfqqYq",
  "key24": "4pZjtY1EoUKsZ3PdqvLNNjQGcgWsALrXDJWvoGsHKYVXd1tNApons8eEaVSd1nHowXQPriz85epUEJf9cWeVMSZE",
  "key25": "5JLtoSHfyHeKRfQZboQMNCT2KGMxp6T6zovGGL5vfaDQqKksukueXNGoouQMTmPWLyspbwzKyWCF6bzqBsV7gS18",
  "key26": "5xR1xy4nQgGsHVhuHvQMAoNwv7cU7A5DjPMGbsnuGH6UPZgUUzBzdqBjV1qciEXS67LEeyEHRXqjQbxm4xZbthf6",
  "key27": "3KvXJUwAgQWhv5NviAi7sgNh6G3DCgkPnPm4X6jHCZUhi2ZWRa1jQmCD675cwPf2huTiozxKBZcwhoLhvsZn9ty5",
  "key28": "maSjFnh2U3v1xf99YSYzff5D83LtWUNRfgK7rf9KXCZaPpXkQpXRb5h3i1y9VkHaFZMV5yqgZKLME66e1dGzxY5",
  "key29": "G17b3K7jXBQux775bxCYjRd5hyQhxEupeMatjrL91rRDAqgKnsbbjRmSzrRbo5JU5sgGZzfkoVNKabPq6FQhTPf",
  "key30": "3H6AFtvwKds5vQRtBmagmooBMWff6NhessSSmbX1UCpFgmYVYf7tWhPxDbnvtDj2SimZfswZuabyY6dDGqoXoEFs",
  "key31": "44RdFWR5BWFqr42g8tduG2QXHALbtJ76ugh7MnGevjvnwRJNfdnnVXcquouAZ4nDUcVpVrvg78pikeHFSWfv3f93",
  "key32": "21t6DzCebJDkvvgFjUf4zVfxp4j4Pp9Dy34bwU6wkQivyZsBvs3eDwyKVchS9USZvmaqPwzk5y1qzTTJFbg7fm5K",
  "key33": "4HxA5vhoyM2iqouzfchvG6LTopmwUTeKLZBdH9DBiE8ZvvCUNoFhc4dtYnqSzoE3ASgt9ProEhyML4dshPU3AN9a",
  "key34": "2ZMToWjNshG2TJ8Eu2hyiTy3wHuyGg537BwpP8siTZR8iUF2339CUfJ9wcoHbcSgq2mcizyTDgXnws3d7Q1PCjwc",
  "key35": "zWfhmS1A99pmQLzS3q81JsNyTA7EtE2tadnrHPxNBVTbp1RypphYxLiDxhcaH7XxkcaKmD6tvEsKW94exzGkLed",
  "key36": "26265vgAbhtPDXZbyNyfTBbSK6HHqwxRodHCwsHnQjroFL2pJDd7XnSRwriVkYgsZpzwzFnSKnyVjaNfjdGXGiQB",
  "key37": "5KXSm9Z6FyH9Ed2zNfLtmVqEfQyXNuuoSKubFs4tW7ufFDJ2m7AEiEDvxHLed4gMhr56xXhRRHQ63vegtxScPwVi",
  "key38": "4zAqzZtXhAAFgXqewdxcPbHZctK71gpXb5gNdV1m9Mt9az3fh8Ycxa9PXAiySPjdn8S7KW8ZHs6u1ontFb83TEPu",
  "key39": "2iBzZL6yuePQkxxhixMPNuJH1yqQ91xHmgweR71w7get987MTkDCQZPtoT3DRzpC5GY7teT4YHGuNwkSM1P6dHr9",
  "key40": "4z1AdEC8opH5jXbbiiRH57q18fsqfsg5zLn41VDsZxeWt8QoXnYyBEUrLLazD9d8yZDNHvGviGQqUywENHaaWpWv",
  "key41": "cSvTzdiaPx7GfaWf3qjM6bKsWPnWkkayzTz5VXAeKeUQDTZHru33U39zbdSgduyN3jhzhrNQvFvUZBoQqREvG34",
  "key42": "2owc1ME2LDWp2Quh6XMZJ3NDZoznVvR1722dejC6SMsKSbJpvvsPuFtkXrSuEeV5AKcrLxdYrmw4hip5nzb5ajoQ",
  "key43": "pRfpg5grKGarGBkmSiB9m21rpcRbsmbVnypDpcPBCaWJFSTDvmk71jQK8ug3XEJStrYRYmRbE1KSfdxivJTTLyu",
  "key44": "5LcuQ6xLzsiVRFQvJuvg4tt289R3zHc7mA4ZNPMth1mKdpU8CweExmNvMUiMFDCUAPFxYH3jTmUo3rpnBQPcki9y",
  "key45": "qqeDxv8JrPEAGvsEZNC34g1BEqfcXfuBaW9YYRueSAC9nvQTMz5raQW8UgeM8uc3HiZvEJyBrfgrnqrQWcRGCNm",
  "key46": "2YehhecjH2VPzd7hzDRjGBgQRu53p2QBxfoaCVSaG1S1srqvMp1nDbmkETZvBt2m2bFVwRaAUK6Xk2fki5iBJadQ"
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
