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
    "ymjadAov4H8hJpupxV9dJD3jxH4WysTiNmU5sNpnT5g445esTzeKcvzoHPqbv5hpb2VABTnvA5zJGNZ2iYs928t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiezbwTLfb7JcRHejTKzVooYVdZ3yqkF6V36Xds4zZBDxmZMP1DMou2oBLdmp7ERB5x2Xj4fvT8KPtHA2JauVDY",
  "key1": "2g9paieZgBzsC28TAq36JU6DpB5qxTg2HyHVEnp9jaRzgSCnycscpMfTwggXrKoxsxqxnrmfUmx9hfhQzcDd1DxT",
  "key2": "2M637HHVZxZkLzvWqVz9xh2m2r82sLaHgQrsVFZgSAQiQ5V7pHo2wfrovarrNYAizzm7GrvnsmPuJ7yrGTp4H1fn",
  "key3": "5AG6NBrhoC15FWzwBCAhzNw6Ty6axC7HZiFoByeKhynVuxWgmAgRzohgXorEDpR1ZncPc9zRqpzdxEaPxT2K3xua",
  "key4": "4jaexypadhe3tkqYaunmg8YANXCYnd4dHinoJgWH8NTkFyNQa17urrPpEeVvU7wCyPpq2YBSH9UYjRCEJTgpH6Lq",
  "key5": "2xB9mQRJkWNdULjEQPUr8mJUcnGB3Ai93QH33zB9GjsR1Fyjtoeo3Eff6rLSbSoYMDKkH2LjWKANeCXTnqSKErGz",
  "key6": "FdWHVDii6j1x5TvfzxdRgy3vQYq4dzcHpsjyQTWEhCcjVPkxKQr96EBvjuh9nqG6uTGuHQYaT7STGyykbi7XsTm",
  "key7": "5sk7HyFXHQZpTCZwGg3iNFLtc6kpQXKgKhTJnSCUYU2TdUr7MygheCu8wtatbKQYwsk4WmKn2WsNtRMwRP4cctqk",
  "key8": "3VWzgK4PJ1eUYsBhLkbjoTf95b9z3DCjpMtNss1MgfSpCpdLCMZHhY5exCJFTFZznFZMDYASWGjpxyY8wpAD4SYS",
  "key9": "3Ep8acaGdSJ7uh9fEVSKkjLihHmc2nH3x5HKgn5txQFxyQZVDf22brbW2YCzsVotaGP8XFuZxPZKmMoRvssuMpJ8",
  "key10": "4asXXCYHNZ9dzYz89GPXoCDPFMs5ArXPxuEL6gvhZXPnsauYA89qvffoK7CFGhvgULW3ZaypvT5SuHNXBVQnwEoJ",
  "key11": "BD52S6MqbGrosyHPfijtB8zVxwvPzErjnkpp1riUNbiuy9HeXtr4US8Rfo4K1edBE3uz7LZ34EdSPKBQ6kxCVTc",
  "key12": "5rdVLRF9FoozxA7h78DWzd54MhUB6cAGijgs36fayn79Q1hqgXjysWFMQjA82Lf6My3D7gQKXTfpBDpmfvzqpiQs",
  "key13": "5vCVUZPq8oj67pdWPG69SmBfusYkYR9y2WmLxUZYLTk5vDZdNELepqD1aLD63eTh5JBwCXodegUgKiBAVmmWhsjJ",
  "key14": "4Y7dFzuJjDcMAsJ1F1RuqadXLVvEibJCKvfY26iDEws7tTCjBpF9G1weozid9b6FdntooKYJi9pcfJwPY15qmW6L",
  "key15": "3ANVg54hZDY17ZWZF9qbkKAHpw9Lxc2K4H7h2dUa9kJGRgpYATdcNz8bLcd98iTnrNTK3se5pTKqexTEeYuxJbiT",
  "key16": "29meLVvRERYLsfryh6Tuv6TezuTqJo9f92Hi4T1RcoXEc11co7CQMNNMapVj3AyjppbQSKwDhKY5vN6dD9EAxHQe",
  "key17": "jJXNVfKxZV3RYDsDGTW15iJ1gySEd6Ys5GYT2v8LwABtDXJ6Q9BqHNxeE6F4zCYahoSE8Mo8moSnJrM3zuHZTRb",
  "key18": "3zzG4s3TkRBzDAJpHSBz3vsRLo9Yi8VMgep8Gvy5gKkgHEv31dbHdEf3yg46wwXdp5iF1qqVrJdAamxR2THzqPaJ",
  "key19": "4tKPEja5k1PPXiyXAeYAE8581UCq9K37YCZU3Cb6GtnF67gKy3txs1mev64ir5egpprmPTr3EEMYiezW7nXWWKUP",
  "key20": "2ttU3vYT5YYzFQfsmhDzBaQ825BKPpTS4KJT9j7U9bDdhZwwNRvArE2XBfY6c4hNYGCr9c4cnZjptu4EmMPjio3A",
  "key21": "3ZguBfuvHpfNXABN6z1Tk3gox8DWZWpG4cgMvo33fU5SkTAmQcM7rtFUVknWLaGTCNkZajVPiojnzQJs5fpBBR8w",
  "key22": "5oeAvNwmuF5Ur3vRZrJtxSQQo3wwBiMKX5JsbzP6vQr2kzYAno5ZbDekwg8UjRn7SkhkX8KFbVKLn9yFiSY1rWso",
  "key23": "2KDWUsG78ZB1dKuzW93gUZVjL5QwgP6i5ZwMc6S9Ekr6FQz8a3mkBvYCUFLs6rPNng23E2Sc9gdEbsqFmCWS1Xoo",
  "key24": "4KwnQJrX27SULfcDM8btUALdnbcAzQkg9zb1WFaQjvTFwrSXzUetdTi1GEMBWjpYniqAzUTETZdi2cNknowvWK4e",
  "key25": "eLe58HBiRVis5EeCLyCmjhCh1mS9VWw72FvFj6GoGEr9cdi2uvyy4CBUnk4iEzCkLrDsFKiMBqiCJGtR3tVcFGV",
  "key26": "4RYq82aPQ8AS9BrvcJfLJe9fWBVtBLSA3g6V4oRr1K19gXw6bcim5GsmP7PX9chKHVdFGzgdvQWmxzBbxnabDho5",
  "key27": "3zf7cnycCmV5F4yrmTC4DyvHnbbqxpYTbjCAuvWjKKw3VwvrBxKs6tQJK4ADyHPUXXj1mBJ4sJDkUWESsZyd6yQ5",
  "key28": "pc69gHm1qBQCAWSCg2B4Lm69393K7GTUXcYCYEq7ncsH1otVNusw9YiM3KGKQt5gNwQ9puBXuVw4uu1XyNuACxn",
  "key29": "35baXaTdv8r5fJymPJDw26Y5g9dJCLWcf6wPPbPNQe2nvg9vK2SsBij43sxWTF2XraB3zDZgQE9sbjynTEYxh1Ke",
  "key30": "3Gz9mi8iPj3UG8Sppgdn1LvGbGknTqQrvJ95ERHtj17uXZisrdM8z11nVRUnaDymBTDQBDLgJxRE7aZZ6MTd46rF",
  "key31": "3wEJpvQJMuWc7aie1icisiEdDRu44urgs3MK3HWAPgwFbEYisr6oSKZjW8bvX1LyS2kCLAQpMgBBCjhuB2B4mQKm",
  "key32": "4G7p3Ce5rBavSaPVaZ2jyvidEPZBF8Lc1vbyDjwkgYsqhBL74NUeYwJqhcciBou1dxyUUaAFm8JCamG7r4TheV4c",
  "key33": "4MvmNwC1nof7grRgTwcEW9CTHJB5yydoQG1Q3jpMVZX2aPCsNRdgTgzUxZDgbztFrwqS7sLtb2pBdnY9dtxbAKQ7",
  "key34": "2MHaAgiFG6PQShNUGqygDu9gmaQwXP2m3WysYtdi5u7zfAexwWBhF1xoJMGxHxnH8dmrrNDvoxgtbzp189uiJbA8",
  "key35": "4S6rStfpX3YpfnwsQt9DtrUxv5qGrbg2raxTnrFNv4eXtfxKomuN9k2CgSqJed5B6zpk4Zki3xFAB9Y9iCGm8ahg",
  "key36": "4JLNpLenwnXVHPjBMxBRSWmHHiP3GT3LXnD1bWspUPmewBojxP8n9jZpccP5Bx2c4gbDXrjCKFjTDQvBsweHbH8g",
  "key37": "26YV64qXTgfryVYwqDctFmkQxYWMkMxvEWvfzNnSGfi76DSzx8zotrqKDDnMsr82UM8FQquV8BvQV4YjzQJwDvzd",
  "key38": "2s9DQzvr8MejrRPZfi1Q3bfrhKb1hPKjdcdGf74McjGxeWNK6Pszw3PpwfuQAcXTz3mCXYdKka28ojJoSJsRiTeD",
  "key39": "3juTH1TZsjxVYMNu1HSm78ir5P1fBDKMaEt8Fzqn3ubowuTRmb735dKC3iK1ynKg6Z6Vr4h2H9KpczujxdNe5Pij",
  "key40": "4SocQc2ZHia1YPBTKFnvJ1rZwVZ9mUwnfAkaRcbGB7bTwJLrFMCozvJyBWy6mkVyVaLzGUvZhiYWqZqEyPmSkbrT",
  "key41": "2dv5e4qxGcddRmxjcVRib6yUU5p6TVkoFw3pUTYYohvhPGxkuHaYCym48t6VJrHkQpUJ9nUdcy7aYaoqQjrKv8iV",
  "key42": "2DPkEinEhcME8dbYbvo5zhW8xkxh3G4cx8KzDG2YoBkx1AoQ7UBh5Z3YiYQPxBUCiNHEf1vLm9AZLBw515rSTsgJ",
  "key43": "2SNg3VZMzzpwsrPdmf9Ku1hvBwwRiVmcG63mWUNpnBKUNtLSLFtULCRYu2ix3bWLoCMc7EWVF76NUexBp6CrPNiV",
  "key44": "52Byo4QygYe6yKsjCdeSZyBAmFghZVDkz1kWcsXxCkh3x9MHoDYEqWmRwNxv9ioRi7n6pwHK263iWDqNdV8iT1Ux",
  "key45": "3wUpHuRepGrm1gSKJkuiNK1ZHaoVXPRLrm996ecgquQL22KtwbQc1WKpjeK7ZTrXdrtwT4twtzSRoHBvxxC3oD1R",
  "key46": "2pj6pj744u9rfM5yrhh9ve2fB55oAab5RMzfywYXWxA8NfQiuJASGuC2w22SbzULCU4an76dxX29qBufo75jhsrJ",
  "key47": "4HLutUS1PhLJzmTvWa4SJZtBrffb7fXLxUMVnrPuXrzofdU2V41BGjjr16QM5HLK8uwjsjip9FB3xSj3z2HdUKSF",
  "key48": "2yT5yXQzaPeaYXWCEWbrh7Ryabk9kVdk3AhBbymzweU6449U8dRuMkwNSYzr6R2jAVA95SmXpqPER97JZSZaedZr"
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
