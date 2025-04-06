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
    "5mWXncB1thDMuXyZPoirpfj8jtRGJS9QQ1Evt37K2mE1aSZzuetWqAQZfH7h7GiuJoXzytaNyWo2yU6rnu5WxbQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rkSj4z3mc3iL2sLRYbUWvhLmMZB2FYjj5dJYWrvX4fycPAK1nPRx1WDA65GxDhUXgM2EcRdHdKp8emXyXo1AnJ",
  "key1": "3Rng1AGidJGogqe15udwEUrmg67uBhJZ5WFY2yE1rghNsKoqmGFHsCktaUMndoXfNxwnNzYUutsccSH9UZxQKHDQ",
  "key2": "2UkcHoRCgMzAJzkffU8tAAnd4vp2gxVma26tSk8YTJj8isvpYt5tbaRFSKETrU7f8vWAqD1BX5niF1XJTpLKvo3V",
  "key3": "rX5DJzsqMCCP5RnHcZGdTsJbEQNCbMdWdzQ8XTxZ3h1nvCXXfVsjuPYVcf9Ym5sX7u8K2BNR4mjrwhDkp3UE8e3",
  "key4": "4vPidbGc3iK1MdTNF7tW4fQPMrmr29RkoMbmo1Q8hfVqKWZsCg1Nh2DdcY78uStWkKu8EzoBdcwJJ8pa3f6ovXJC",
  "key5": "2GKzFHX1CnqrZv47QxayuEWrRtLNwvkZmb7xkUCZi53hbfme4CDJL7pkKX4Tsg4jqmjP6xVwGztZN7Yagx616USt",
  "key6": "5iu5MS1x6TBnmZNSEBLNQPPDyQ4HdgfMZaC9kHeNYG3oqzV5J6YqvJkyCuF9YWoGfJKWW3FWjxN1q8eaySUm6eiZ",
  "key7": "jwj9UimoJMPK4E2ibQNomYu8mctnQKMA4gToPvfUtdYPicU26EmkFs8LQzJkFGnxvCW6Sf7G3ZG2iDYW7faDdJg",
  "key8": "23TTbTaYNrUBLpGDQxoutevEBzx2yY9NuBW4oCqpAvZmajQrHqLoV7gKGhFmJVd5q3mNzmmgJ5aNMkrA9hRVfNHP",
  "key9": "4jdLZ2Ti1dyfnx8T1NU8D8Eqn9SJeZ6asK1153WxrA8bDKJ5BzQDxFQs6R5pHuxwHr2JPqYaUVaLtwCv9fHt7K1X",
  "key10": "zU3NRdYxYnSjb4FKxoGohfcjryGMM36PhKTDfw6daHHBYBk1PYwhoGeSXSzxvms1HDYjqgqTHQCtxopHqVTRueG",
  "key11": "52wgcq5AkHXYmtf3EQG9Ah7jtCx2GHYS5Ph8BnB1nqUTt7WBHq2qzYvTYfB2J4Kiv1GCN3YiToSM4NRLP5TZbbNZ",
  "key12": "2mbhFbshzDmzuvS49cAUAccic1pHfEpeENJwhuSxwkiCHUEDkKmq6AydvByERn6jEKZgGYZo4c2sF2PNYpa5BGwC",
  "key13": "LaVKUZWgZk4iJaZNf57c1MX7WoKQtFVvCXq72gQCWR2nQQFY7vBswW1DVD72yEysFT2hhv1wsQP1uaxM3A9N5D1",
  "key14": "67HR8npHf2vtXHHnNuwtZNF6URDqYmB1v8vHZXUoVPaXxGmQN9Nej5QhR5DUWa66QtYHcfzXyDjanNNNfyn32Lke",
  "key15": "5UnmGFuKRKCmr8iL3ZCBdrT7tvKRaQDTv3YYKTMQcuRpXcyLZNEND74gkmQhiCjr9aBuQXnAN9jZAT536Dus2XdG",
  "key16": "3DX8v33LqLJE5ffNaxSmgjPoZ6o6io3wTy6FQoGqzE47fGztZzMbQny8bGeYAyLTq3SNeqkbruUBtWNeFNcFthZF",
  "key17": "2RomJVH4yseyPghpNSReZnWxzn9pc5S7P5odhqXQmzbt57TwNwrU5EGAJbfEEWFwpgKBfEhaMXJSA2vu9b5pC17e",
  "key18": "4MuizpW7KzniPkCuCQGEBqENnFXu9huwAocwpuLVBEEiDFn9Y3ixkgCk5y4kvz4ujARYyW72yNZswiVZfXh2vdM5",
  "key19": "4c3wCoo6sGJhW4c9RKMGcesy3ZwxH6fp3z64svH8HY3LG3ZioFLrsAC8RySt5eVYnNtfG1Ut3NBUFQMV8unSz8H7",
  "key20": "t76pdXqJ77YSXsu6KcnCZYA63tNpyqvqjQABN3cxwFA6jWspfZq9Den3cp47u2thQVwwbepjX49D3EkZWd9sqwp",
  "key21": "4s7Pa9MYqdaQZJTAiQKuf2pUcD2dWaGoARtL5ounNYFzB6ep4iFX89CRkpyWaFmsDJCKDV5yuuR9obwusMCTRgkC",
  "key22": "fP9vnbXiVeXw6DCXMbY9yDVK9xmKRpVNy1NyChLoQ1AmqDSxoULezthJL4QiNc355UGEA1bU7Q8TrnUKRMq1xYF",
  "key23": "4RmjmT5786K3n9pjc8Kf1RuJKYnYuTsMnWDdSfEYyLswuQs5nHWUtgRfyWtEcc5AJQ9RwTu7fGaLikLoZy53pYUg",
  "key24": "4Yd6TfEY67abtxmx9fTQ1NZS4YNaAPAtMokXwQNtVJfxzicXxcz5Y2cBkFEm4FQiZCJgksTYueRrkmk5bLUQ2j4W",
  "key25": "63Q1rz6BhF4dFqb9ohWV7Disbs7DSSzyxDiArcrhA96gQF6HhroUtRpuaufEdEgemnPtMrVu4xLaTA12mwodkyA2",
  "key26": "QgtHvDS8EdfGXorh4W7pjaT5XWE4vRxA2YvQ33PQxTr6aiPWS16SFHmXPRyF6K4FVndaSz1ZJckWAxQCaGkVjEs",
  "key27": "5Kz35gJ6pxjKRU5jAsFg1VXiN8944wpuksJY3zmcfGJGTUHvZMZuJDuehSNQ3NucvQSG9cYcYEhPj328AepVRqmp",
  "key28": "Dt3XKRDEDmK7rB9G7XPTgAFHm9MyqgJn2MtnFUMmbwsEt4D6VJY5qAxv1VLYxQ2jcsfGBM4vqm2xvyGgwzndQwb",
  "key29": "4mJcoXzDqaiZ9rkHNLQczhM1X4QtWDAuhWRH3nxiKY2xCZ5m5tpsxRKht6sF742sJDiP9WBwmYjNFcqLnPQopknk",
  "key30": "57vsVDWK7vcSqvmzqYqBYtmGp5N93Qgfcu7vNK8PTEe63UGGE9stfhnzzDPaMU1NjE85Af4DYz6tSUtQepGQEwzV",
  "key31": "JqzoJymvNv2LteRnAd6q9X3rEe32jhxBsxizyDHpH2Ej3t2kSYQrqkayeyTP7R845LpW9N81QL4wKvCx9VqTYXw",
  "key32": "2BdSdTRVqbjJdXKTCm8YwLsVCYujj7Wsv1jLu13hBtyY758DgWi6pMGE1VGt1UyRH4xiokanc4bZ6N4Z4ezbzZJ",
  "key33": "241qJXkeoNu8UfhQttrJ1b3ZvGDeBu8Lk5zULbn871LDy4dpm2e6mxsFwUo5vNFV8eKoc3eMYXACnJcA2iYYzJxN",
  "key34": "VMMW3HqqDoWfZsnPr9JeKJq5z9zFMDLDB19QmuxfcdvtaEcmS1BMDWnTcgPU8W6a5hsnnNBTcXMnddS6Z5tLDRf",
  "key35": "PKx56mmpVYRJHJEdGbEPtcGg8YmxjxxZX8Y36N1D3yFzk4aHBoJPDBSPrFPVWSZS4PFWBB5mGJX8mZ9h4qheeuU",
  "key36": "5pykwGYX9tnVukjb4UyXQod31KpVfS5gvYG2CxNTqvVhhcbFsbkXmP5Tw6RinHyvXJF7PycNghfc37DsrtKDpRM2",
  "key37": "4cLXR3xTXfG6qcxkRtDFZeX8PFnHqR7gPxDiWTbTLKxMXmdQgszMpnM5gdGUzw4ed4DrUNqJTKoTDg5sQobPEcwd",
  "key38": "3BDjhPHmapaJUfyxEGKYFKK3iee2o2VcovMYXd7kw4uUeCbKXm3f1JZxagjCDXaa1yVAB6guVEnKguNTCjC2ZXWE"
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
