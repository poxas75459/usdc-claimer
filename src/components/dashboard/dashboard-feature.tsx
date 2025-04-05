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
    "5aoSgAtto65sPWaD2yCttUHk14KD3rX4yXvNJpqdfkXE87GtfpcpTmWjDw3c4WXCNCej36peo3R85t3yMZnAoqXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWDnGYT6woCicebyXjANYFNUr3zXnQNTRktzV6n3DPQsoo4QpVbApuQi4hQwZup8UjPhCRFvwpAjbgdh9CnkJuh",
  "key1": "4GD54qhRQpoVZE6F2JKkbKsMptsiruAn9ewQFLJHgWLSHL2qq7wQMtV9xsG1LKHG6dQ2GpY7EiQNeKsRxFE2wJ8s",
  "key2": "51ZGFN5kDuZWJiWqTTU4w9CjV7Fh5ZhgyZ9P3e22H1v4B4KXkDTCHaksDyj2dMgiWeNbLmgkxLT3485btQHpdNVc",
  "key3": "4AY8QtHMDAMVM6XR8z1EPkSpnqsqZ3CfCJmUKZAoT2sEdSAYTqYgHYYszhqbJUYY5ZYHa5RF4aqMtL2biTJoB9eR",
  "key4": "62nFE8hM8o8gHrwcnB9yhHhGLcRHiX6d3p7H3E72urAePgYte8mAedGU9sdRabHpy3dASPNpnDRQCd6PcTZjhKar",
  "key5": "5WfKCYNc1SsyhE8b2tDh92aNLunUNyMB1zvZ9nZzNo773g4xyuGjZPszcHExe9poCX1djoEyx8NscDH9ffrcrPLL",
  "key6": "49pbXwHfnpN47D7VHUeTdgaigDypjntZ5nEPT4jJu9UxoDxPh154xJZ3bDkmWvf4XzU73aZ3VLSrHUw6hTGr6uP7",
  "key7": "5Yr9Avg2FAAaVGafMna6UkxDpEzQmnbRY4rcsC9jaY754rNcTNFndSFaFAfemui3Q4edo1EvXxKLUopeK6y7NjmK",
  "key8": "5D7CxDrcUWiYKWkrnSxoysqJ1RVWSbJZ46NyD5sGAFRaaxpwnDSMDWN5R6DDDZvLTuPG6pEJpKQBLrVK8rRi9hKU",
  "key9": "3h2Zg4KhgWtBVrVnRtWSTcuCFh1Q8SLDKLQEPKcivzip5QdBY1hnYcsqvByTMU1ndeB3wUZHkMvmsmzyBzCNFkZ7",
  "key10": "3Eq7P7sMoCGQ9Mdm6BXWErWbsvDKs8BscFBnJLj6AU4iLJEe5JYhGypWUBJJ9FHsPUJnbtriQ5Pxw4gsTh5UPDP3",
  "key11": "65CJPyjb1toUTDvCjCGM9VCN4mAPyABi3CrBdq7fWk7w6Z86Szx1uvnVno3FqiPum7FQFb9LRm9ASam1oRsdQAkX",
  "key12": "3Zq2cLAZgbgyRpnRgfFz4svpMJBgfbQ5v4ZAiEu2VozJKxGPMB91yxXKdAys34F63qEoqEwuGnkncGddirdJCceR",
  "key13": "YV9yTsVyRi8BqwR11DLADuYbqynoq8tNAU1oPHWbKvKWZWfazEYCTR9Uxap34HZR4SotR6ttVmMKXDJaPxHhZvE",
  "key14": "2f1e2dk8zZeRfu9BWCWoN8TjpFmSXs8bQCnSkJD1SVkgnmYAiyfvpaiWmEWyTbUSvLvrvJsCajoBfEE9hMx685eE",
  "key15": "2WMdXc8tKqbo7Nf29o6FL42QTGm2JfwqcsCy4cVqbWVDdxDzRqPu4wXgTbUG4B2vEdQoP8oyg5psSjWjGNXkNgoS",
  "key16": "2cbzbG4JsijKrDNTi7VRkgcVM21gu3h69u8qCVkyaVDZsu6zHofHByGkVBVdATApdWzUwUwdUfnS6gFFG2tiptxL",
  "key17": "2eUL1KRDuVDwbScXj9t3GUQBopfAsh69yyKXWFRaM4KFs39Z8HA8MXcn7AQrQFaPd3NNjzaN5bKtcvismeE6TCfc",
  "key18": "5fQeQauy7uxBSBeLhLUTbkGMrsCJ4hThcmcckydMAZWB9Ew5MnVCfcx4sS25XkQonMadCso1C38cwkGyhtuyn4wH",
  "key19": "3DL3zQMBcVyhKUi9TREVuMMeRnkRoqd3mP9qUdK3RoLN9rGGudbejXJrxRGdGdsPqARR3Dj7dtTUzHZBYVEmZLyR",
  "key20": "hpHcW8xHjADgzYWrpntB3nAh9gkytkLc3aLN2sbiZFRVqnsj6y98zTVeByXqCBtSZyLvcEH9QP2G7XS4EMLLygv",
  "key21": "4Bvpi1SYxwtXgdnf3cqKbdGDANu5jUNmCDsJyHEb5NepZm4TNC7WKkZfVJJyDu8cMd6yo8eoaTizJptVC2EgMBB4",
  "key22": "q8qHbf9hFESbndRBR1yk2uqx4aW1baPSiRwatgpAQArS5oJuemxS8yfoupbUNCQiRzFD4D9F5qPTbicAGN1zKom",
  "key23": "3GTgRffjt8q8DJu4tfrYaMD7P4jMKt27LUZuqFJ4UPqfkRyo39JYZJVvw5Aw5tv2jatEZefYD7gMgC6vcS7N7skN",
  "key24": "T1PrZRX3kQY7LtkkuEKRXTAhPMcVBVXNAef2fwApgcJXffTCtRZhPLuHsWGYdznvBTFoK2dfVmtJGStYHMN4bj1",
  "key25": "67k9AzHfpLK79rM7pxzjNQCtSdpEU4esThHVmZBjk7UKJmwDuAsmXvmwNNd1Pp6uK5dX9QhY24BqvRq4tFXuvmXa",
  "key26": "4u8fDCPCKhkxouXgY3eeeMn33K89pEy9RtgkrA4SuHe77c4ecnpdmTuHJqT5EHY4DE4bqUD2J3nuzrg4N4pgKEBc",
  "key27": "4Jk9woAUqLxpb72ZkQWYoF5q69jsBri4RK9SsPgdU7bo5uYK58CzSwy1GVMTbFMYeojPLqBno8xkNpGsDzizBeEx",
  "key28": "63Qj6qPFy9BSv6HbwwooPQCfAmwRHqVJ3WKAwRDAYezjGjZr1DKS6otMfL3QDKzQuSLpptRt8mpvNRdyChM9VXsh",
  "key29": "XFXtgpWiEyXicHhwsqN3FpC3a28LQXYKRZ1kTc2MkGurVVN6kojwrZNWqTRtsLNe5h6YXwWcez5kD4zpBudxp5Y",
  "key30": "2PTqT1oezEpaPjjdta2VEm7UES9tkndL5ZEbaNGCty83uenwhwCVPcMF6jmqBEo2KUt5yAUhwqWDcjtoaV1Rf1fh",
  "key31": "5K11XYuBSaUXE4LLSY1ifcuD1iKtBsSRkx8XCX2dEUGGrL5bRLErbiFrckxQ9WiRb8xuhDCWEJAtwSCMp2z84Fwq",
  "key32": "2YaZNZT82EHJ1mSnUxdbfc5vNQASsvEY2jBpH5AZDSfxksAXy3UqaGCUmBzhmmmE1XjWvDLSBYoRodqN9C1ZwiG1",
  "key33": "48h8Tb9y98Q8QK9YoC3ETwqvCCoNysXr2ZFrn45ePe5AKuSR4gHsDdQUfuMiWvsCLuvdH2uQQaWsdWuU7T82HwNM",
  "key34": "2ZQyFu9wqk4UNva7J642ds1Y1V9TSPLmrunE9k8f7979gND9Sn33kmJS4vy7s2PEZuSQhKRKj77oS24Z2ebCp3FC",
  "key35": "5zMgfXcq8abanQP1FTCz9zDwKc21TZU9dgKFvtsjg1kb3ZrizJZ8jXy51nu4DDKDJam3girp2sbYFCYL9oLAJWoi",
  "key36": "2taEYTKUfCvBUL4NAkKHmrLfireNKhb6xVK6GiTVHYqHLRRsHJJdQTNq7mAvZijMSPKVLnCr1cYi8itvUUeHX1V3",
  "key37": "3PK1Ru4uDtxmdKbMvnfSWVuh7NSA9Y7MrLRr2LoZPmZBdGtsTyrAXVM1B2HHdHLTWsaGyV4bsVVPxNBxMExNANKq",
  "key38": "ZXq8Ks2JSg86Z62Cf4BFjDf6XHjZMGFrwpMBrxJoqXQh6r8bhko8vKRZhNmHLHtZjviifPgZxFfVpWXsQPqMxiy",
  "key39": "26HXpUgnmr6ZK5gZAmbE7RmUkBfKj5xeZiVz8hkNUo9iyZfm6Y4f4t3zW8gxZ5YTvxJZNLPfxs8A3yfgj9zYfo2n",
  "key40": "2FdvdbpvRVLoXZJanw6ikLUMuYdg6vtSb6JP7Dh145ctQayUYkKxxmMDp1tt616traXJssdRTvDTXeLcK11r6Xgn",
  "key41": "5L374xHJm1SYwJaFNj5sJ4hmf4F2hXd5ntfPaZQFqJioVRmAk1WX2kjSXxs4sWreNun834R4jC7qqrsVX2qqAEcT",
  "key42": "2HwFSHJ8WdmXX1PQma4YSiHA7HAPzmU9hu4He39gt9fXXQa4mKWFf5qFPiSy1YBYRLYFFakwFqb95yNyTncydefJ"
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
