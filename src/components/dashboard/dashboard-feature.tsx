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
    "4t3fQeaMbx1hn3iCd7hiReWS9tpEYzo23e6TXiDK3DWdqtKzbCckHLZ6ymrmDztHDRt5zVj8L7Tgkww4DehtLbqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVnqksRbYkfVoNntmjGktmrivBbxFZL1sQAtBh6NDzuvSJ83sJf49KTKeCdJyeGMMwKaf2vQQX2P3oYqUEqiig2",
  "key1": "2Rqv9aVbmQL7cBN9kNmmcMH1TmbZTxajvyRFbyR2yZiqbrqHmGJzdkYVM9LvAt9fLLAkCSNpsuJCaarJg7TJxFDb",
  "key2": "5Cu3srbXDC22DxsmLhDxZtFvPEfWxS5SVdMAam3gMcoY6uinZV1nSRrX2Cg5LYwmkxBiC3WqJ6Lt9HLzRVUAwwce",
  "key3": "2HPNvVVFKZyenw5J6GzhNiNd24jkTZjHEPosm3USVtxbWD19yuV4UNnXzQQf7MYEqKyWy6Y7BT8Qoq7ZoMyLHnCa",
  "key4": "2JPnNPAGGDzKHowTJAKLfwRsVpd5tFP2xJLAJbo3J6GNh7LcyjYMW9rbE3TH85TyW3PtnX7KUqSc7NUHSMNYPvkD",
  "key5": "2rd2eGBCfMMG6TkPCz4VYufMrndBUvLRMjntKmMGhNezKRiCHJ1NUK8zi3AvMteEFxXfxsKkTeuVrRZJTWxvekG2",
  "key6": "3EZZBcMpb6XtbkFBCwoSEBf7NA9hnzuzqB1ESCDWkrtKiQ1Gi37yk5zBh6PfsvEMgj78dHraq3pipF6rf7aQGxT2",
  "key7": "3XVRM4rDwzeeKXPzAEXUN2ezc3Sxr8kw5bqfwNqsJGeVTkKntCqGxyLeyRH3jBp43TYFSZwFPk7GZ4DBbyNs4rF4",
  "key8": "GxCiTkfSdsEUmRnqzZAWk2j3ABt9YFfLhzd7gMa6Gk217zAC1w5wr9NcVEJgdQZmRgUZD57Duxybxs5mbDzKNyu",
  "key9": "5czh77yS9c6cug4QVp3wENk5TGWWmJH9Sm5irAittKR4dHvaXSgEP7eaiQb5roMNFmPq4ZiHkLuiVCFEdk5JHoti",
  "key10": "4nQpSonjbFnWgaKRrcmcqZxNEHtBXzJTnGu2dnBjaPZbo2oGytwBTba8eRXayLh1cWX9EKAtyhSGuZuLvAYFTjPx",
  "key11": "39oWrL5znQkQcDC81sQcu81HdiQC835ApG4jufnWgZzvdjzUCRBWiC7MTi3wEP2JjDhfpv7hDHFWhLRT7xUm6u9y",
  "key12": "5ni2upB1DMN8woGq59CmDzPCJNKSxckbj96nims9dD5u52Lj9MfJqtsiYZdAuRDpD3iZqxeNoSKsdmjTnjwzUe3H",
  "key13": "dbwRnzBozKjs7yEEApFrnerVA37s6nR3rco9t6292pspzfnbuAxRSkRS7GdPiQqnRAogctfj24pocbGpeDyfMmW",
  "key14": "3Q9jhEEikBwyRipQobcp2cwMdjzBL6WZuSWTEHnF3sn9VEKGckohPKCs4Je3UEkGbGJDpzYrA2S3cE5eXXSyogXk",
  "key15": "41eVXVKBkeH8yCoJJYMyeJb148aMThLd69XPAkJnq6SAjeTcCK7PTMGprXcstxvofcnNRbbFMkgcFVXc56ZmenGs",
  "key16": "T83YebcpPUNdSedETtwfhXVLocRii7SSGEXBQsheHWbPur1taft23xq9LcSjqNVmNGu4drN41d4iQVnw7XfLe29",
  "key17": "29WmDqA81mpKmdogNWtc8Awb7aWpwvFwLxW33mPMcfN5c1eM4hEjCKtehVE3UUNvmJC95K5xH6c7ZdDUdYBDn95u",
  "key18": "5P3qBXK6dikAsVUWzmJsWttEqd8t7TU2wKdkJA2xEEpPCvoWD1eZUgHrzMhWjUvCKyVT7WNvxSGWALnDn9huazJ7",
  "key19": "4rtxuxgfeGSSSFiTzgHTDfEwmjrskVgpnrRkDMyeh78eaQU1rEMdtBND5cDkoDm3M2EGJ88xPyAynGBQ51DJNraG",
  "key20": "3E4Cm9ZbVa5bHtS7LQUqgi44gnLqhBiQ26Z8XDsRV3AWGWGJa6bTcbSqLVfsT6ZhmSrVG6AMsLUWLy4bFYjb5k4L",
  "key21": "3oX1cJkCso5J2C5xxJgsEmwgjEjZx2jHdw8ZNMJ3J6RANLi2ZKjSVasDndZuNoqoftcrJ3SpbVagZ7p6chp41un",
  "key22": "3WjGUFj8W3RAJbW6oTTEWHovZYqH7mExwLpWk6QTztRMrtrjB1uC5NV7qzp9hjNqfDevAeLko1EJumf8fUNj7yHQ",
  "key23": "jSBP5sWhekDjbe8SVEpQXocKoBd73T2Rttg7VSn4gVM34YzRSSSKTB8sxKCF84Zsyn5smkeWbFYBVduhf2e6KyL",
  "key24": "3tJbKvnxxtcdwVP8bWn8RrMuqq3xhbry91uGK48oEu3g4a7KypUWXJ8KEv1HnAbEpuxYfQ9CwYTqJTbuLayrWp9C",
  "key25": "2H3Sm1B4wqTjo4CgzaNhhL1kPL1iLqYfdw787oE9hyFzaBiuWTzD1bHE2CNFwYYNTeFeS84FmByWD6Xk8iWTwQ9u",
  "key26": "5Xa6XcWTbmLEYkyLGnL3B6ExcVd7NHSKepokAcmWkaBVdC8Nsn5D82YjhQUYA7eDSUtjbQ8b9TTQ1nPcbRYWNz3e",
  "key27": "2VMFHWazVZ6wGagKSnwth27PkcnMR5hTcTVczBScc6FPzEbZdYG4hU2Xjhap1HUFsemkxh6Nz99Pd9QMxCkrUvfA",
  "key28": "4Q7mHhVovhbkhQ2Ds68YYXqepPxbuXcm9mpjt8vsTTVbvvpB5DXEJUp4bMJgdVCrRigF21hYHCkLwrfYVThRoxnr",
  "key29": "2emJ6ZAiqx23TJ8h7hhyZuBa2YqHtdx8jRoj79PLifgJKGDV8ri7hZBAGknMPjpgtHGpJ5Mu7czY7AHgo7Dp7m1W",
  "key30": "4u7bY2STJrjD9b9z1pWupS1sz9Z9ySpTTm7WRLYV8FRS1VWzptPLsw7nqj42wmKCg6o98pbPghsTbcyULpcu1xAx",
  "key31": "5NJfNotmxuqx7BYQQBQMRafekXrx1LbfEEYFFXSYgARCpmkhWeswSpn9Cx8XyQ1NzBtumQTBSEMY35ruwPuj3Sfv",
  "key32": "4pUDN6zjTw6zRhvVg7FKq3tzNKE1NMnkJpJ1xn3PctZvL7xhLX9hLwbGtBYsjg9RpNmWn17YWqYLTXEEc94qXNnp",
  "key33": "A5dKRxcz6fSk6rLv75uFfLEDG1hGTxdbuaq3jr3mQDHpcL2Ca593tuPgYwcDoRCAMoa68Hmb1h2aLNFAV1WZkfA",
  "key34": "2f9y9VfzCvNn1RXokD2AnWAQzXYiQsUQdX63FjPvU6gvgoo3Jpd5L2unFa61LYP5PADPR6cak6ybk9Bf95ev9UY7",
  "key35": "642ps86oo7Uwi348CHbMfZ218dWpFKrnVkaYrPzXWYk12u2XmirKS6s5UQu7NsxQNWmQnAWVmk4FLP5XZF2bC73E",
  "key36": "2siZWHoVQ8hvXpayU3TwERyA6BL87nhrBSABvdzQCoNu5mgDEc7Xdvpimfm5psYxk2pzx1HxcrDYUikX5MC1TKbw",
  "key37": "x5wP5grZJTpJpyvKXHyemUGLWC7UQ3XbQebC3VxyNyEL4pBhf6PwWvfveNknXsv1e8iN9mYSkRiQgS4F71cnvV3",
  "key38": "4UVYHP73eeUbcQcao9tgXf14czgxxjvVW3swgehGYmVpaKJRnbYVCaCKhunarQ8tX5XYhEXNAJhvRKBnenxf6jfJ",
  "key39": "31ms4M3DNE7Er6zxpaP2kXZrNMNUQAahrs3Vqk2fdiJPvFU7HG8cX6FvmauvdkRmLA7Euf9he1CyjSFwbahw7Khi",
  "key40": "2nXgETFHcoyVKYaKVSDodu4ZPyZmFzBQxiyKdCnzMpMjHZAVqA1kZUv57CYhhumxf9M8cBPyUMKJQys9n9nhUwu8",
  "key41": "Hsrud6Lex3aGgHJfvXzpeaKcds8whRTttb1Vi9pFQs3QbS713N96CayH7FiwGyTCvrHQ1AzNgi8vn8mQsP11k65",
  "key42": "29xsb28hRTRsJSDJDS7EZwZFEqeDR4KquKq5xiSC9716AK3PmDtTCfvLAvm3ZghMtgpwm8kndYMxKN8WKwjeoMGa",
  "key43": "yK4Lmw3kLWn9zpBctNhJXNw821N87k6mH2z4e6dLA81UcWg196eotUZXLwUXARNBX7T5MPw4P1DXJLzvTA3N8uV",
  "key44": "4LC5dgH4qnpEop8wC21K5E91AwFC3qoAtvDnMqVbuurqKi3v1eNfNH8DTHaqUaGHJMcVDSSaB2d6oG3KC6284v2N",
  "key45": "3NZoP2vyJ8NqHFwYNpn1XsjydzWj1Ui4hkPktL3UHqzRAYfHLTzrS8C2zVLHhu4j3uAXepQCg1YRVcVqKmxsufMB"
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
