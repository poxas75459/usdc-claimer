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
    "3f2jEP2yvtw9gi79eng9Gv4KcDYfjF2B3ggSw5rt9LVmXBL8ukFWKBqxTgry9XRiV5XBSoN1EcGAfenDvZLL6kpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpWNuTxJLEbQwvuuoLvUTJRTCBq4z3QGYvHgW87dndrjeyGt6176Y25HJg4XAGQVz6Ur2Apdx3EQQRsrKkQKCXp",
  "key1": "VNEuxgPmjdZ9NFRgvJWwyuers1DkxurC27F4yjTfs6KgUYpK3xszUGr84ssaqe9DkWDTMg5n4XHcgZpXH26EV2a",
  "key2": "2Dz9Fg1sAVFLhH2ZcKZ6ZCdb5dpdj5x8jXiBVgenTTKmbZ1XFXe7uN9Gx43XJXiwB5XCJTyvLxuf7YXV7gLtegVe",
  "key3": "4crZTYQ3QQfv52ZV8kK9yEMjgtp89qGK692XoLCtfhDNrXThwHhXurdst5aEYWC8Ck65gyBuzUHMod7kwpjquvgP",
  "key4": "48QpvzfnnaBGYuxCYcG1WHXi5QgmBXMPjEphVXeHamAmhgnD8ggtBjQ7eRjppPuYJo3eKhS2vxAD2AycAT5QH4Hm",
  "key5": "2zn2rBURhDREuXTRhNarGUrNC8jqxEEqE5DKFAyzm9KcNkaibLogCGQ9EmdDhaamsRZsjpdFyWnyqpfett5q24cb",
  "key6": "37f5pQRnNanzw5T2KtmCaJSc7nJZaZJVqnTdWb13VcAemKn4d8VfsGXxbx5XVKgfVsdL9mzLFP5pBW4K8bM221Zk",
  "key7": "3zCcnZ25K7U7cZLEtA2NpUyGy54VkRXCswJHoAMMt9YitwUD612o7XuXj5nj1b6PXsensnRPQ5nkftfT8SRgif9f",
  "key8": "3JJdc6RTYDDXx7fY1nkAtmLEZKDcyz6r7kK1f2sXR4x58qGkiYbzfbG5ccNWir8LER3tKPe7orEwqLxWfyfQQ6U",
  "key9": "3gP4Qzk6X2gtNCPQY4XqDcBkxtjBGNQkbEVe26ABVpC99g8WjdTWJ1DYaRwNLo3QMA9WG96huDxN9zLaNLsHopoG",
  "key10": "4NvFDUmGJxgv6xN29uoga1x1HXpkptkMAo9Vb4d7Pp7fFP7LrUVDeepbR5HG9Qfwgr1hb6p41Hgqu4BLksZtQGi5",
  "key11": "51HTucEPEfpASaj3uXfz83zv7YDK5Cq6zKp9eJhpiBfLAPNjZZqjJwwm7KtqqsydDcZheQV2YR5tCAWm1g3EoCsg",
  "key12": "54jXRcD3NKpSV4NNGMFDQZYwxYXLRTu4YsoddH1Ybsjku8WPgckjAtGCi282ao5HpRPf5vyLUgokBHzC6uijKx6",
  "key13": "3NZuv6ZgL7HB4LwYR5qCuufuUspLxp92aiqnGYzgheDoa1oe8UhsGPDWRuGxU5hDd1cvpxgzKNxUeYTYrixzwF3E",
  "key14": "2e8fjwN4DUFmDTm5zCjS7ZMGvHB7xnrx77H6yF4kSeZoTBTF3Jk1XNecQpMWaPwXACMqvooDJ9RsFfnyJEhfTT1G",
  "key15": "besot8HxSN5sW5tPCkDdJn54GuM1dTDrmxwqMUcfbYcqGRWAnTBtJYJhgj5J9QbsyuKXkKBnwdH5i9UsvCo3VoP",
  "key16": "3tEwRvx3wzLqbosdCB85rq4zgPyhFt9AYf5bJhfVtypq2GDjTuq4QooQpEAPuSbBSgYVWdvNFkJbLvQagCywLB7s",
  "key17": "4LHzWgKmr3kMMy5rYEgS6PwooRoRVsVf2GsbR9NSfgsXEm85g1pBEjqW3jSbbzxAfZeA9pREA81t6LteDbYe54ZT",
  "key18": "4mn2a6UBLqzCpbicqjeoAWX3uxwJc23nU3FhkdUtJsJ77e73zwZrG9sFU5Kyy9utEwRrB7rh7hLt5BWLpkhjoi4c",
  "key19": "29Q81QETnYmVJ93C5DqAHeyjjm4ci6o6s6N4hpcY9RoVjU1gGRTepKqCmyeGn8j9WbL63MFi8CNYLkRsX1fDcQJX",
  "key20": "3257spCV8F3RsUPxEjjPaQ8T3m3d5SmCssVmoPMM7MpiB13SnqAjYbNwdnCZuX6MaM3Zpvxj41w6vN12aHZg9R1g",
  "key21": "2DsgL7a3JQdkAQvQHh5Q7BKH9YV6xzgAgj48RdsC817qt84FcmqyDwFYyqiXPmfX5FKyTj9ViCvgiJTduq1Ro3mJ",
  "key22": "9qikbz8unFnXR4AQjWigyzvnerFB6c7zCcoizAxbnu9y8Qc3rsUyDrqs1PcSYfpYscyGKEPcf2P5Q4srxtN5vAA",
  "key23": "2gLoXq9THdQwD1VprfcJFrqpo6jipsK3fwsup8tdWEGfBWKogUfLp1GgJvL12dnm5FNLMkfYcqj33k5U21Eu1j6w",
  "key24": "2L4KGTvbp6ruzVycj8tDHjUV22oAhCfjPQ2wzKjGqevK41ywZzRKex29aTUJWoBSfDWjJvHY1SKYSaLqXP1ejJpx",
  "key25": "2V9r6cMNmz9kSaDL2KSB9xDvV8SofbLSy2Tnyj6TCRQXkNZMmktC25Q5pGmmP1tE6p34fSbEYk5WVkphDwoTJMX1",
  "key26": "51MDZgYMeXKquNnD2VucChe81ae8TUwi9fUytxSKijf68oKg1onU2u7qJzvBkqsdEfwBnf9tfhTTE9hx3dkAeLxn",
  "key27": "4NRV8zV5h1NfRS2WwLgLrHPhjyfVfrLdSiHpkyahBdbi1A1wbK2pqxLJrgiuiZGDrdhaj4H29ExxwyGetm7cQr6i",
  "key28": "3cmGVyt8kTX5LtyKQLXdhj9LSUCtBKg7y85EEqjGYKg7nd3pHW2sXLEbg5guG1H3kCusQpGLnaQZfQ7AQKWhKbB",
  "key29": "4te2QmNnzrD3yxHBcbcMzf2pRnrxsdBZitd3GgfqpYdNvhWCNSC8S2fKkZE3iTL6iYVhGo9S9um3D2JGjy6KQEid",
  "key30": "3FEWKm7VAqHhuqWvmWKP8T47JpD6VHCpyaVeGGDP6siTBuEwvZWmJ2HFEcpPQEkoUEpznsFkvpfiGLy6rYNB37GD",
  "key31": "4x11dWarfpDhSwpNGAjLqR3T8jPYqweTMwpSw4MD8JfxnCGcCjMYQ9ApX3M9Dq1AH86EZRZLChhKxTMStKnNU9zM",
  "key32": "ep8nwpERJt33URDBL99Ar1fvQLhVHNyF932Suj3HB2njgZGWgNSAcoUHrcBmxPQMncrywwqZXSP5Mg4LTJGaJRE",
  "key33": "4NAWrtUfv54xpRHW2Des97yqZsFjMqHZUP3yRiAgyayGA762n82xzesydyczsnYbhwPctDkcUsoF6Lxz8xBh1sW1",
  "key34": "4B9HwLWcEpCYuyi5EKGRhfoijcVp952jAGin9KXn2a58SN7xtE8JvAvGEDf9PVFK5P7Woj9w5S33bnRYASofSRsV",
  "key35": "51VjBjHyf9qutPDMjk2hseyDNprqvFp2s3VcbDW5CmccdTegxZXfxhLRojeV7N8B3WnMPJRHrih5sQBPV9tL81GH",
  "key36": "3zrU6N2mzGxCQDEaG5v4NZYMVxnA85r3G64STXs9fot4Zgz41iWY9fp7bMwaxyc9BdyMvzPzFH5rGLW3P7myGtPo",
  "key37": "2VYTecHcFST6f6D8puvFgHi1vubYjnaXw9jD9joW7oK7vz293Q4tSnh18BWYfZBv9CsVhD7WebE3PYZ2m1gU21Mk",
  "key38": "4L6PJpBfRifapjTzvfVstEcSNAoMGGT6QHUSaCnTVJ8iLE23B3dcw2Fr1cAYbijskmRgpLMqTEjHtzyAQC7UQJvh",
  "key39": "5XfuAHBehPPghjXYqih8PPB3YcDdSrCvyVpJRgakC8PuY7xhD3jeL92tXrkHFqdrwQ19R2XjauqWJz5mge63qKjM",
  "key40": "xLr8rcg5yBFGViuXCLM4Fo6N5jrEswGmrc2Qjk8dMgszoSPGSP9wYek7YPfGWgKy28mGUEoK854iJsUWT9nVJnp",
  "key41": "3rQQwca9ZdtovWCmVbkU9aRggcLQxSbBp3YNR9f47wxRr2gde1SVHaGM9h8iUMTyCCvEArUorp8NQw2gY8w924P6",
  "key42": "GNyx1KRmYMJYZhcqCVbtZEB5AVq4pLgnfnBFNrs3QY2ZeFNnHW27oqMvTZwuevWEp4HMJGosdHzGcfDnT8y6SVy",
  "key43": "2k4DJ41M9D88MRjnhL7hmCgSAhPtw72ZJar36hCEJYMx3d96dwsrYowjERwBrwV7hpYDnFyv5GPwYju81iL7zFiK",
  "key44": "2ptViHjkUrtKN89HPJkmd7ho4ybTr4oKAv4KergMu9W7ex5uktzdz3J4iKC9drWhjnL1MFD6pJNdzFXKAtPVpekf",
  "key45": "4oek8XcYPMupY8Dd2UsqK9jAeBfcRNqLXUym9pu2DPumwrGkPeKiguXLcnoRFNoSJ6eeiP8CLZoctexL74P3VZW2",
  "key46": "HNRjPucy3YrJSx6re3Hi5LCRJiwTRwT16vbEQ4VaSWYqbGmgiao9G77bbgR58Ec9pqfGKbPHnJBvqMWVGb2ncoA",
  "key47": "5apsq9fVqjC9CozkDDXDhNKJ9fSNz4Njk2sdVGwq2gtpa828JPLV7YtnZTk1ndSe8gJBNUMYD3yFkxKDhbEibxxe"
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
