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
    "iuxnf9MNDFp4fJk8UwZnA4cJ35MyiiuZ6LzQZiUteXYZGV731i9iFaxnnju9oyhsTGnsapaQkHuV1rZpimW1hp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JW2EvgdhKJ8WUtWXawaLneMgeZCQq5FhqrertGUFacMyFRH7cZzgpyEJY8jnx7Y1mwEaEgGcASS1FoKiqWcK13L",
  "key1": "3N1FHSU52ceHeW2m19Tc2FsXbYmmcPm4EsUyRhXTvqDaBksEpVv9Rumo6v9bteU1T8VjSwPjnynEywfWbXDC2oPw",
  "key2": "48WYZcR3ej3xEHdgEEnv3sCbzybLpvvcQXrGD5yjxEAJuwHKUdaKzytv7Zkz8tHG5SNukec4mfYtGCPaf5wuVwd6",
  "key3": "4B1YvYXXQWaYjk8LMeSUoTdecc5Gz3SmH4tHUR9BN2fv19CL64mxFc46NJobNcnFbFPgLcj6EgHiTv33bSTJsd3w",
  "key4": "2Cq3RVVSPdBQarbhdqCFUFX6tafJhm9kzJT8dCBM61cZbTyKiS9AGDDHjVZ8zi4CjzoKWA15a21b5SDErvnEmBtA",
  "key5": "48RphQaSoyyyGpiEgXqYeWJfU1tN18SmMrqKErGbmVisy2cRyVKSUovV5d5zMLB9efMxw3XEvaGB3BdTUfShTBzj",
  "key6": "251e3aoTnRMCG1aGoJvT8Z2yHkeYKjaaXvCoZB7eDKf9ccVzkHAub5QcnPDexwzBQG24W6cWMWHS35wg2crYfnL8",
  "key7": "2A16e55wc3WjQNTCMR6EXCC6L5u1dZuU7EtXMqeTeHSsVDvcs3eeC7yAa3RixvW1TQPEBzGWhpbA8aEC4jVW7Bcw",
  "key8": "LnYVp6hMmCUgMn4LxUebvdcywdLn4HmzHVNTy1mTY87MyeycnYXHHapPc8DfsxdazE1xWdYvtoxUKjLxMkLFNn3",
  "key9": "53YGKNZMb4soumuV4SDdYE1xxqdYLBFo26YcXxdMjToLEzwh39RFfUVKPeJQF6ooyfKz6jEBqVze7cVobWJfkDJd",
  "key10": "44FvS7jaLnsPVNsu43sKcCo5azoRgbe4q99JDHLq8MpqGasEUUXbUN8umFTSM8uXqoEM6XW46WxmCN2V4y92VYh7",
  "key11": "4YReQ9M7ddcVQXBmVUrGTg2kUA3aJAtUmexaQd98WKGXeLmMYCSJHrMhciL5JVhYcWMVNWmbK4auMGV6w49SsP3J",
  "key12": "5PFYgrdTFCKS7GiUJA2sZME9PPTyCEe97twvG1rjuYfjf5rfmYwtCqwcQSMqVMcPfFuSZE6t1KBKGT15iBwEbS1q",
  "key13": "DFVQcDeRpp8mr91gRpXyf7qvapH8i6NSBhB6hERS1fMV9xy6e8ntTQsX8DPCRJ5L1weUMzyeXGivU5XRm8J96sm",
  "key14": "4hPdSxDDVUCcDoxx4PJm8w6eEw67vhcBQYjfSbmV1Djd1YPTBRWZZkpuXxjuQyUPZcCk7B5jmxJq7QV1PyGJMqzx",
  "key15": "2qMJ7RY2wMEmrULDMjZTJ5xJ9RFnBCKHEW2ded7NSA1HqU49h3QoGoNzjZ4FvW8ZCQknXtGu95ku3oVkUXSh7vnC",
  "key16": "6c8NtagNZDUanFKEB2GwwBfMyPri5gZxaVVt8vYtXrMZLXkUJMRwU1bEX6YGDvUqxSoEGeZkdj6TXts3rCPJziv",
  "key17": "4eekYqViifcSRQSzpfeMMU82Wy5Yi27HPWUhJwbKsWGbqahemWp1zFfZsMoDS14KvBb6hQg5ezJYiXXwndFQm8XJ",
  "key18": "3jtngdvsMb7wvwxqQopUhFUkAwCiXxxH6D41zkbFcxZr2FPZ2miYZxy5YeqLYFqExfCvNE2znJvjKL5Z6WEJhNFZ",
  "key19": "56hcZXTCz1YiwaxiFeGG2KB1XHq4SXScDR1odbw8o3x5d2RGpuTayiZvqqxYXss6bCQwJWckMovFr6GCZ3yAms6x",
  "key20": "5e7mfqpxrtSFKtdWTyG7fEG9Fait19E7djZ53CYS2qRLnfUM2Zikcew85uVSHdWFLWEGRDqfL5TP81cs6KrJsrVC",
  "key21": "4dDQMxHT2DNfzCcK7SQrR8GAixSLw2KiknFTvBD6ZbqdPcJFUG2pdfCEv5ctxf4b1rnFebwJqr7rLTTeHuv7Er7W",
  "key22": "5XDd456zgjgcdsN6fPo4YaShsUZ1B62imkgk5evm3yDFrFK6z3EowFhyuGtWxx6sGC72oR5G1worAoHugdkWdREA",
  "key23": "55xKpR8vSeoFrkieLfjnGdDoGuYXXcYTYhseF1zfdkiWWQMkfBBhx7xPNjXYUUgBHsPsECLnwP2xSQNKfK343iT3",
  "key24": "2hSzMzPXKvDXGNyP2kw3iiZX42CQSgsr5egJ8pcpSYxVkbZ5wwLoaoeK1N349XXwS63NbPUHAT74Rt2NH6iXi5hu",
  "key25": "5GeQiXfcuZq9zyZA3wpHbn3MvqWyWiGEgowEUv1F7W8tdyNscy47rzdzJNDa4ufuiftTyAMQ1SV5qaSHZohMiMEs",
  "key26": "ooWCRz1mP5m8sWAbepYkpxxVpj5Udhq3TE2BEaews8TXQ2oG3xu3NWBCn6NFX8zF6ynw2CzW7AHEvqZ3VH6yDAK",
  "key27": "2a9euYsT3xY6A9d46v53d9EGroTBV3Le23kisaiwrLu6wQdAXgZusx3J3usdpUdsvPyMzcxav9AAPxgr4SEz5Q5M",
  "key28": "2xKjB3r88BHf5q7CBdAoUSPyZ86BunzCTGufTnH6h5QQb2mmUZNGZWFxZXc4gU2hKT5syanHHRjgZQComsoMV5X2",
  "key29": "hAxv8VsnNCen4NR1LD9nft8G6cPwMkkcFMVM1NRHGhQwGcm4564m7LhgysvJQAAt73XEUqTByAkqtV5sF81V9aQ",
  "key30": "5Y6DJ6zp9utXv4N5uauM4zHB5Gtbqo2YiPfbjhTVfztStWA8Kdp8epEfCxi7e3ombfA2EifZ6d5n8vGRzFiP5YCF",
  "key31": "4mpQk4qc6ggbn3KjbnNtUw5SyhpUW7L6f4UpyXfZi5BaWxeSn65r7ismsqfvKpHY99RqyYnV6oHebCwysJyQhFLa",
  "key32": "5oCMU9aaUW4fA5kq3NYixPPfSzTH8aERiZtA8jzwcn1Fm4iEV9EknMTpqvEvsZyoacbZ9YBzLbnpC1oxSQKnNdFB",
  "key33": "4FMCqLSH7ZARjzdfRc5RcTp7vfBPDAMhkpYR41vRkFt6detbmBua7a9kmysW1H4HtTTTPF8TLrNxjXDABS8b8CDx",
  "key34": "28q3xbNn6TvMF9iHsL66xTfKWoLe13eqqaKrNYZqaVJkDGvPWUQ6TnLRb5o5o1Hor4aq1WT5L9v2aeM6rJsUB6ER",
  "key35": "29LBCg3r19gE3yc4yryU1pgSG9xmeWSfvfCLbC1ZwrMAMGe2a3tW8EWEfUNA2WZKDQLK29vZrBM7mAfKeFsZTCsb",
  "key36": "FXPShtXchgdsB4fAaYbXg2xpNyEYTZ3W9H6RpVWD9eE4DDfxtCvwoHUTZQujRuPmgT1XeVwQhRNX8M7c15BYDAh",
  "key37": "DYThrJxRviThkwZiW7zZA77LWzpXxQ81xKhm7fC9vQpnDUd2zkmu8ZPLzoKt3Wi7xRRvJLuEBLRKT4xGZUGNfM2",
  "key38": "5xzHjcjKVLELT2zwjVDSSM5NsViVqpihQNkynny3sPYFeriqWg2zFmp3drbZo2iKPtX6EFjU3su9fSa5arqFuztg",
  "key39": "5ViBTE6Lb8HvZHZ7yTQFvQawbFk5wfMfem5G4wdyxgF5SVgut366MasUQAvMEnNaWFEWTEwNqXjUmaBScFoA3kv4",
  "key40": "5jL1o6rSZT8YzQqKrqEPMLeQRWTMR2ZgMzrz3RER66bU91QRr8smA5qnk4hnTi81EpymdLFNQj1QZLjVys7mT6ET",
  "key41": "YHXWUTYRaBk3oedoFdpKFUHgHKy2WgrRJSYMGFVgbzHMZHD4ArWu1WL6Mf1ezr8Ga3xGbakBk7htvR88kYiXGQH",
  "key42": "3J58Bb88XWmF8NcUhqMeDiJ2fomAryiA579f6xFenweMGPMGxpopT4hvXT7cpJSJM6iEoRCp8B54uuLjcxUf2gkw",
  "key43": "3drC3tE2AytC2Geywfhp4Ys1B8om1Ng4ccRms63RAbRn4wcR5LxZWzczUTsks3c3Dwsxd2q3DMnQXtPaQ1PF1JfW",
  "key44": "4EvrwAezgEZWiNKu94wjZ8Qwa2TmXypWqi5fycnmcRa9nX94hgcHnvW5nHfYjeCHMYRQy7sFwoLhMmMCpqBcWJqK",
  "key45": "2XGjDgXujuuUc1d3XevpqzVpmtaeUFuoWa7nGrrNVCGfM2s8XtSTDmPZ8x4rxRJtvYFkU2SXLSRqDM7isDR5SApP",
  "key46": "2yFHm8mguzBa25SKThqE4VLzEH1ntJY25WEAXYpAjNvzjoQqLhvTiVdWUQfvGvV8KL2cpP9YSoVZapx4hWjdxnXN",
  "key47": "PDh6FnUynk4iGjE9KqV4iBohxtqMQFoJsN7wk7y65kzK8EZZ14UiV62N9CQLwvY4C9Udvk8RXvAW5XoK7KadTUC",
  "key48": "4ztboj9jnFJoXS3Tic3K7sYCE9TrqHLdXZXD4LjrNG4vEqSP2zQ5TUj3Nt2rVvYcgWngkocNMtmhTLFYZikpC1ui",
  "key49": "61T92gdykTTaNqiiqvH94m2FY9JyCErB5pUn9buwwZPGYufZR8SSZyX7BqBpGkXzwanPuMFT9g55QHepbbbJ9nLG"
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
