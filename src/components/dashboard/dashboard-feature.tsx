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
    "3zsXFVVs1Wyui2shCFFzx6dLzBwRHZmpmSkybmGd3qmeYukBTDdD8d6z2BNLbs2TrFHBrFRxERBPvTvKmzgCtWsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psSta8eu2BQ5WRYxpnqEWtSFqEa49KHDmWaxcMwGKq2wRENQGv15uqCqVCRWjHtwwcMVhdqzRCY38cEs7P8HSbq",
  "key1": "3cj9mV2cS1QXjNCj79DPF4uYUdKgHNU68qHrHDBbVXeK521VschCe6NbAJirVLkEN3yXV1dEAoxHYPBjxsUuXeuK",
  "key2": "2qSQGsbH1XBAGLc4Cm3UD4G7k5a96a19zXRzn3xEZwZf4w1HZJMcW1C7iKnihYPCMbVayLjFfpzPjnaRSYyA1cXp",
  "key3": "5U5CmbjHGCYU7JTxetUGNE2C8yCdXWq2Amnc2Z92R1LDDXeXn3Sx3vh1GfE4RMYTHXPC6uDRznyZVL2Ymvq95ruR",
  "key4": "5V7KJRzpSe2sX9QTBeYBK2NhexXg6sSb1dTqayu1hgWiRyFRezEuU2fnEw6D93sZPZjqHMTJkUx1U5MEQtg1v71s",
  "key5": "4fzE65cB7fb5dXHNm9jMQD5qpUUAgshMHMsuj3ET7wF5iLUS9736dXPSXTVptaXu3EmWE9zrNoBbmwFZWgiSVbzU",
  "key6": "3GxWw5dnG5a8NqtGR77EMUmD9E3H3bSV5jin3ZcJfYahZoriG3zU6vYuwGCXtX2k31yQsdq9Hcvkcix2X6LUDdHH",
  "key7": "oduQPQyhUWXRPa4RUqjWq1d4JXFqVwBFPmu1Mceb8G73YUifExP6UogWVfc4CVKPtY4yQiw38iwZnSL1Rffhrh9",
  "key8": "3J5PxKG8z3bXv2VXRjP63F6CD9mJfyz46h1FFbuZwCon7nHs42JZ94mkRgmt3CJvpzjC3kAcDVQ4SGL3FbGmGm8",
  "key9": "4G6Fc8Vax9i32LvpPFTAdtgvonNKSvRkVYoRvXFF1qBDx2ELpb8Hwq4p8SM787u65QA83neYMhrJqJJiHQcDEE2W",
  "key10": "eumj6QUffgEFcw5hP81ZQbPay96gm3Su37N7s2b9ZdmoWqPZwr1Bh1YdzwaQn5gV3UN4ZXHJFFtNz7YouNuKfzD",
  "key11": "KoSVxR8rGWWQGN35bK3HWakp3HRBB68ML7tA7QyFTj92iJAUCat2whcfA7pvxdohtS17cAvSkzx9WsWaLU9MR2M",
  "key12": "5VvsQs24zM1tFhEe7ogCQ829yLNYsZN37Y6vwCRTsSupyzyBSMpxsCBLQZUb5MRWKCmyyoKd77ecvEXywKfZvaG4",
  "key13": "FVNe7D4QXPAsKijDiQ2hxiRcYRup8cjjLYZdEeyPUDuHjzLSDUoyzWVWQXSNnhNsnCSsJnPBbpKe8e1NkVVXMi3",
  "key14": "3XSgGhNYPd12z2BFNM3F72i7SEbRnqztM75hfe8PCM7itYXR9NbiaBsRk8bpx6kta3DJpbjBn9kwjSQenFNd16JC",
  "key15": "36imABUFLrK49Fotw79sYcH7c7qnBT8o7xFYryJcsBiNwHXvoq21gAjGJaKPi32Urry1uMnQTUKzm3goLzYCux4Q",
  "key16": "Xe1jYf5TJpS6MY2aJ7GvTVrn6RegG3AUQmE4YxLDexBAT56Ai4cMvPbhQ5sapkXPUuNoAPXpLnCCJuNZhh3ihhX",
  "key17": "2Y9TvVfk3tXQbnJWMPfbAQ2caiTy3Fpka9sZz41b8SAtdFEbtgKaUev7Ha9WswqCt42icP2uR5UMEHqjcP5FBsqP",
  "key18": "EqGvtPXHT3Y8sg7qCCu7ANFx9tHo372UhpMdoGKFxM5oQQVkFb99DFzWRBiRf5SxSF7oUxZYztod851AmgMfGou",
  "key19": "46zg2bGxv5GHB8unitWE6VGsHXCytZQWJG37GoxGJuXFiRvZEuvMaK2JW1C8NhGafTLDtuVkuTKXMKmvUqoZ7WXm",
  "key20": "ZsmAokYjx71YtgVWrAmTQZ7X7z5ZuKCaB3WJaw8iRvLbuGFYSstUHRznjju7JCVrAuS5YQQhhzfAcStczEDS9XJ",
  "key21": "3SgtBjaBbf3Z6wyrZwgLEuYGpSGxJJWTpj1f6rjFqajwoCiMjX53UimCgz9CE42QqbHMVU2V7s2zV5qKK75goZ16",
  "key22": "3rymR3a5KrhHo7XRJB4pXZh7bDrTp3Ru58bSNGLXAQnM7c2haE6BdyVbX5huH6rFwzpgwz1A9Ct7JoutWEL9D1GG",
  "key23": "4cRzjvq7D5AzD2pRn6mjCx1j5w6jsdn6ez73P3Vnaru3wjwt63VavCWS9A59QJcmVWU8cKAXPBnV7i4fP6z8JyDC",
  "key24": "4DeJ2YuJPRmntC6ykJhCJezsNvBb5brSgw2a4e842NoVWvQwM3my7XrE2xrCJfQLBc72BSo5PWTx3LD4AGvyp6b4",
  "key25": "gibKtqhkbsGpDabNt3S6sP6zngBFj4PtWE36K368yzo8cZona6KWfuvbbF2XRQ9JCyN5pPifcBJ5N7DBWMpTMMT",
  "key26": "2VmgXwuTnvDASiEu78dfTUX9ScuSakWAKwk8psixbr3iMCN6xVGJ4P6hqB7DDZHRjqAR4jW5r7e5Dcibd7LwKaCF",
  "key27": "3VbSGq1e7qSQgAsyh9EjaZZiCJe3syA26f7a6md5oz9yrK4KSVGRwsdAtDy3JkB7aGXkVi5WnKZEVR71J7wvpVTE",
  "key28": "4L1xPqyPZminRcHe48KomQi5KA31sPkbZP9ELpupXEM7zEqJDqYSX1BuVUbVGDTJzqy7PYRC18YMxAZF7puSctuz",
  "key29": "3Da4yNTVxnJ9GgUewnb3dG6u3uNBiJYrNcSLjQ2fJ7zfrtBirp9DjGHo6p21Xv5TBjXeQDKBUz9BChyCrFUzWfqU",
  "key30": "5uGV59gv6zPcgR2U8pScXqf92oHHUZRcaKN9dJvAQgzkhzbbUAhxBe65afrQ9NmdKwGSRDubkG6FhaXSKCE1FoNP",
  "key31": "28aamJU8hmWrUYK4sLXp2L1k4yaMiM7pKxzHyQ1RU7Sz1CYqp7FJ4eyzb43WxcayQB2QKTfSwBo5EN6vAbCp14JY",
  "key32": "2TgiTqJnEsKTsAiubtechQ2eo6RYUVXkfKUhkJRuRpS9x8UXUGzbns2PNEQvz4mak5qSeXTZi9FJXQ5hHqD6KBrA",
  "key33": "spGinhp6KpSdFdG4TRLZDAUmmTaREDwmfGR9aBMC7WgSzcskN77w9jTKomdHjv5Nx6BRAtS8CsG3gBvxKy9i6nF",
  "key34": "2ei6gkwsuwZeY4Cki2mQwBdHyude5nJJ7wCW3jymnRhMYXBEWyNZqLtNqiLKahp7V8rrUsjJJK5iyiqFeG78TvrU",
  "key35": "4rNzpqdHujEYVcNsGAfZ1jFwMGqxtMKiPXkuAgYFKLVMMvCoFz4oHzPuccLKnNoEDYM7YX6bg4a8Hrxv3PkVzkJu",
  "key36": "3UWJfwifZnrYsimEHxeTunScFoqkMMFxiwZiDtvGBg7ATJgzcv1VQt3qNztGtnenzQvneYdf4H62aRg6zYtdYZts",
  "key37": "3ppr5eLTymCVtCRztPJAtZYxFmpYm4Ax2rTM6YrTqmEqzkXbhyzmqeVRwQDcXE6sUB1E8GoetB5iR5Asx1EVSBFr",
  "key38": "fNsj3CWLB7EP8NRCNzBWYPrS6h5KFzLWDxA1VNjgYdfHEjhPpiYedW9gerKkwGEFj1NaooJSfMEbNaAdA9m5L4U",
  "key39": "2foeKU2EXKc2xHZ61qhkex73qRgAFW5xaGXiRveqLaofztYEz7TPTRpUNHZzEnHdHXYi4v9gkTFuerdSdQzvxd8u",
  "key40": "4y3LdRnVVaqVsytc3uY54Ra5TqB4AJq6gawUo4jr4FUppNv7bKui75Duzaiys9HpgaT9KefHxVXi7rQGinbincfK"
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
