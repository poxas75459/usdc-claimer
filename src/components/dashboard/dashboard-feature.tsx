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
    "27Mim2BXCLnMSKZRWC2huuFkT6y53ShpJdPQjiLiduDG6smrDNutak6US52xCbTBbzixbW5s6FEqyBc5otACkeEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TKXVk8esvSrwPPEZ3CDGwnVkZKQq3UZY2AfuiqwywxWhtcdzSYcNm6FQQk1BEyy5zv11xCWJ5veYXhTWpJtiqi2",
  "key1": "5nwRRZhvXmTm9BFkkkZpkVhXsFguDphoKQDUr1EPrgNcy526Z3WkpGUTVaTSkHv73jBkTSqKXU6gsPBapYATnU65",
  "key2": "2G49fSexoovVXAD4eC11un1YZhjjTVj14HpHPWrjhYzBPX9KpgxwGNbW1J4vsNb24junESQGPAJ3SrzCKSHGttwe",
  "key3": "4mUYjxurVKKma9rYGKBrfncvCbXVTKnqayiFH2dHwYgD1xAAyEniTWhC7o8D74cR4nyPgrm7Qn7Ls16QEHUkXm9f",
  "key4": "46ufM2n3RRMfDob3g5AsdEeZGdRWgqwEM4RzvXzZ48gFmE3D8dgNvW9kMHgV99huJftp2YQCn2AKFa3EJrnREmF2",
  "key5": "2eX1Qyuy9Dync4wURNgAPtc5K8Uq7yaHQofVDqkfmCLeXEKrDRY2K2XKYksdgjxFC4d6zVMQTAeZW8tv1XZBUfRb",
  "key6": "2hLcqfUtUSEehenHt2SEjkmfxNZsHVB4zaCaKggQx47xGQo2VeMiWSn8EsjMnxxdR41Y5enSTT7Q2VRWpS3nrbuw",
  "key7": "5UGNjTda44uwMhCb4Lre7sCgxSDzHSXqPtGidwvGd4nPn1YJoZzachaYnqTnfamuU61CK81Yj6mmnw2d5yVLRWT6",
  "key8": "5M4Bbjf394nCbbDnLVHyGLKWDeSJZZ1evWaUZsk2XLQsontFFDkU25TvmU77QLxBxA1NYTcCaSFRpKvAS7CnKApV",
  "key9": "32yqnzyCF3aU9mGfd9VkuAUe6nd4xK6rfApXoKsrUZ74u2HBKBSCaR7fUeb6fLTsp1DdezYwpeUbPKkREa8kNmbB",
  "key10": "4MkRvHZwWKfo9kcEGuxhhgk6zQJRAYd1un3fyBumdusJpck7UhWA2zo4B4GYWEzgnbApv89vahCAcv8Fq8XMgMZL",
  "key11": "2k5imyRaEgvNqNBRT2DZwbWKrxnp9GsZwKnFRsVWbPupxpmK4aPHSyUx3Ly1betswuWXirjQk7ZNvdEoGLR2khXy",
  "key12": "5sNUTER7BDQaRTGB6RciKt1KugPS8iRKCott3W3T2KevM7Kjd4xTdBwsWCbcjwnufzM3bZsmW1FWZCAk8FHNMrCE",
  "key13": "4dTNKFA83n5LY8pNiBCw73ER7f4z4Q4jxXJ72EAu65MhHtdV1JRA2WUpFswZBuaxveLGVidRB1kxcJZCcQ7UpsAa",
  "key14": "5PMCL4vSSigTSjbxgxNyrUVZFxdWMxevLfaGXSxDhekUGxF4UsdfRDb5KnrJc9HZXPKdzTq62ATWzCATsmxKf6vK",
  "key15": "2c6YNWi6bFrsQ4bcvELy4C3jsNeSvfjvLNtpAadsP7QxA74WwdAgbtuyiHbLV4Ti5SCZ2tn8YiFjJ9g7yzRKCQmb",
  "key16": "5Bfgd47BnXEEmW3DiL1sYJgMGrnPTfPX31WCZ7597zBCYnJD447wLyRrZgFkGKGfVazu84rYZjCgM6WcXUxzFMsk",
  "key17": "5zvwnnYcKmRJctwuMgFTs3KPsJ4pnSJxMiCCccpxiQX53nF9gLAhR7EwxDdHfoLkEzuJvWZGt1Q3NiGAq6HCxzed",
  "key18": "2cj2615SYC4rtAcNZQGsnKdL6jk2TXP95Yo3j7x4LJ1HxxVQKguXkcsspkhmqFNv2U8aQ3moj8KDEmuTNNFPjaUS",
  "key19": "2aeCRGMadhzAypM4H92Kt2og4gGZEZi5gmvAQqLFqfb721GCrxgMQdLqY8XfhvkCzkXeU5Givwbhe35HaNTxzu7Q",
  "key20": "9zEsvFbX5AQ38bYbtXCNvWdK7ijm3YrGSVBjEiN24Tkfc3hHXffhZTErVGKaUd8gHpafGoCtqCHFyNnQGHEzJTp",
  "key21": "4mZVeDxf3m19no5izJodJ7tmsdkVnVxbaQjEo3u3BeWt4vmordfhW4AqKefyW33U28biP7gBZFLnbrkN9xhiuD2h",
  "key22": "vWHFamDS3sPsSnstdmkdhJEMyeBReWVa1BYFViSpib1GjSVBFkeSwYyK3uhZdmuUp7hnMSKEysUo3wq17AqD246",
  "key23": "2HqNpaequw4rtvz8ijzxkwtyZXBYktZcHxLFqX6Jtq4Gvs2NxzZAXojLJkFRNiL6MLqJPeHk8euxDuQG69H5fYE3",
  "key24": "4XvUMRnpT1p6KeUTPUEKTr48oX3XgGhyFCY5tEgb34wTj46bUKwre22rKZzeE4FZJ1TeXibSs2SYNTcg7ppw3xUG",
  "key25": "JggpfgVpY5HvqkbQTSCxmBtTedrcE4xKrA6nkvGDtjvnsnRcvAGbZqKsYSMVux6DCYQ9EvHcWCwyYrZ8FzfKcSE",
  "key26": "22iCHAQKBJQnMSbAKVjKbC6s5qt8kAkriLwgxFC5b8SB6gSiMBay7Sq6a71BjBXCRDRd8H6XUbiLP3erUdjWhJZ8",
  "key27": "2PqgwY1JyFfJW2j6S4Nxo6CVWkEpwBbMKKXaU2MaxNpkGZNVp66xmGDcjHNVuvaJNUo7ShKG6W7Dxezot6TCA29o",
  "key28": "4Uzqv6aKV6PGBskHRcERatS1AmUALb3n8KMqZXDKiPkMXih2RTUV8WFV69oCJmgsvTfzNdHndfC79biX5QcDCYe2",
  "key29": "3YbKypJgD2BtvfhXHY8ijhS4EWvsb3Gd2u2SeknABYbfiACM9jNnYDp4uvKkg44X7AqprmxR5jGmaMHXgC7Q6LL9",
  "key30": "3wXMcLNTo46F9C9AQbbkP6sP97Tk6RBi6NwX4xoKuVVYH7RiixGbxvfb4ExGyes8uFibewMiU8qXQryV7e95AtrB",
  "key31": "5jCX7WFMD21FZbYHfABZ27DNg2tiwxGXJ3GEaCfxMEnufpKyvwMUvZXwLThfFUPoD4G5ojqq7P9sqgnQtrYQxV1R",
  "key32": "3ebSwfMT7A4ajQbsHjCf8q3V4RH1LxWaz1bKjKYYQVqTFQubR6fbCFACQbYfrC1fy2EqhpHBDi68sernpUWxoq3W",
  "key33": "3xbW3nu8uJmSNH5YuT7aAbhXnTHw1x5Ttk7qdY5YQ3yAUSDnehGavC3uYv1KEPceCeeMVtMKTiGDpfFk8B6dK4ZU",
  "key34": "tam79yXg4bJPQwjCvpJJ7MJ2pz2D2bnyo1tQGMpQt2hvCjDLR59ejivec3Jr3KPHCRGhrve36x6qyzdvBGsSm77",
  "key35": "5LxpiLiibxZe7zhzgfSerjKoXe14eYZ2hk7yReRR1HDVm76svScNtMPkNRPimQMCvHi614o7APXXpqtJsugYo9u",
  "key36": "215k6PAphXokox2XU6DV7MaiScvpZbZY85AAHz8V3T9kTo8hqppQWNYQgF4AV9oGtNbp33fK9CRdvAYwtVYKy3st",
  "key37": "ZCrNDc1zF73adkrH1SKt48RrMB4qEByrysK5QBZeRUmC83ZzxLQ5Rvm7JvAhE6mKs1v91SbSBovmbDJZxq1qXTN",
  "key38": "X4czUcrHa76eQhLpXxbjdxZiDQLdE6qGP3vXnBSSAPw4geH32iKaZZ85BktLkn8A232aqAMSYUnB3yRN3T3xvj6",
  "key39": "4ZMuBoXCivW4Hwnrq5DCiMBkNCSNGRUVYACiRBgsaxkZXKMnvaGAwqbZGt9oKtAnoo4qPavSVJzAHnsnyiLk1mAz",
  "key40": "JSQP2oeimkoHrNu4YDWnTMEBPSvra77rQAsb1oEyQU7kydYuNfkmCy5AgAdfqhrJ6MU3sw99BZGYH2rRvWv5FeJ",
  "key41": "nonsZHYcvMkjgkegd5BVtjmC4K3R7mfWBViM2uWJ3xF1pgTAR3AXKpvRz4QgCCQk7879QgHDU3JP1YwVqvbLpde",
  "key42": "4EhkQt1JMbBYpPtymSfFinsDXhyNw92czRWJwXiPZPWapgPG5v8HmaXDGUzmPjufCVjXqCWZtCM8m8FeoUtYu2fE",
  "key43": "3jdpsnDfLwkUKfXfwGDVMtyah1wJYsAQ8EiNKejQqkVY8b4baFezARjuYMifKCp2NU9cNbHYCy57EY1Db9J7Ws2h",
  "key44": "23V7pqBPzLEyGvtNRVfq56ht7hLS87F4qjfa3FJFsNgZboVRgRxEcZtMJB2okQfmPfMc1Jot4PgGdLx9nwdAwEVJ",
  "key45": "4dx32ALWnHxdA4PM2RPNsrRfspAHKHNig2akdzdSnUswWmRxf46bpgtTrg3vwiSaLBYGkxtBUrcH5Dqu9fAoTwYG",
  "key46": "okyC7YUBXVTF76aRqSwYPeZhktzH8GRzScQix63o8DMB3QceCAerAYUY9kjf9x92cQz2L7Bnd1SktJLP1QNKZ7E",
  "key47": "3mLoccW9gLCXYET2QL1MKeBWX7ThGDgg92tuK7L5AXUXRvsAryi73e1oonEySTNgUfgL2Gs8Q9Jf4BZnRNiQRvE",
  "key48": "5eZAq5jM1a5LeXmr22netzJxwefZzdwLWoKAthCcw9tMe2fbVWdwSjt6BiCTDz9JmomknnBN2udUzyXgDBht258t",
  "key49": "4giyGqLcdBxDaAjibcwH9TT9Cp27U1gcZb3nER374cJa9f59kGsspRJnDL2fS11pdivcQz3rAjesun7Ji6ze2gxu"
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
