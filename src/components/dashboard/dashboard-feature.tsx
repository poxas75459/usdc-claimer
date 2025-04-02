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
    "2BH3b7efv7aARGAN4zxVRjnayTTwBCGsidzCjmgbq6YUVM9MiYaLUHibWRwifESTsNbB778vHhiqERmSxC7QjkZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGpBdp2bHoLJaqkKzkayVGFNFVc3zzE5iETDyP7EPgf8SQj6fhf4SViTxksjeYx2uiipecPM5Lph3GEnzEUU8oW",
  "key1": "5fUopPt4jekmXWs9L2BD8CFgNh8sqaU15cfT9hZCCnxYgXTsJdD1ubfnbZDftpyEBWrpL2Din5i3jMkzPnxFwPTB",
  "key2": "2cxiS8Fgidm6bzFhPGbgDMVh2Zk23QzaNXhEDMScTvASVPmS4fLRuoNkFo31pjfYzeGxrXw2dBC9rSE5EVyit8DZ",
  "key3": "j9gY4KKPQWFPDXLZ2mgxqhu4RcJzNdBgCWAMXLvte5JG6XtxXuZCBSScFv3AwuKvwrF9mmk2bW1QS3XtcNqDwdd",
  "key4": "4LGuJStpZgNWzEKJQfdkLGxWV3QoZLAx1qi5HnExfGPxk2Caphq8B7EfUaYaMrjn57ap7fvp4Vatm8NKVSmMYKPv",
  "key5": "5WBPszGgqQTNwNpEwwyNqUG76V1ftniz4HUE2BLsXp262UiAev9yT37GdJqPSkdzEppHnk3qUHq1Bf2MGFtw3McQ",
  "key6": "4ZRSYCCLwNfFwnhx3U56M9YCrLhJADQxmjMfNW31bLwTWf1JAgcxZeT29JuGH7PnaQ6DkgmfqzJGXioeBSXcXKou",
  "key7": "2SQ8vAiR52pDbGPiNueirpFdyCym51HETHbjkiSPmbrPVCNfxHZkSQP3jVEAJp7rMgraBCgSmEfC58gWpLehcLBT",
  "key8": "2MmEvVFKHitDF7kBgmVddPk5wytRCkvBPebTDZcYd6DWPi2qEiqtdxdFcBF5oxwsKzR6UxfaReuSNTWiQHgtNGJK",
  "key9": "4buDRrWkWT8fBR3MYZ8QN1BpxsZb54SWBwKFsyXCf7uUo681g9Z9vhRfJJnGrgYcW6kwM9ZwXCVkHD97phMmZnG8",
  "key10": "5D6uLU6k43zaQLijDJ7TUxUTeeGHiqCFFZCXBNFYwcFpi2jVdZ552WY4NgCRefpBQ89oSuQ2b8AXDaJpanpw4Vmq",
  "key11": "3KFcp5gngpPKjVTTgikEVr1QLJfyrquMwh8SDpEGDwPzUYgN4nh2eUJQYrP44mKC6vwkMaEQEXagF83Gw5VXwmEP",
  "key12": "2KnMe5TH8SXRnorVThYq3t746skodUR3Ro5p4RqazXYuqzYkdqJ4A38wUC7ZtCbAVXbEG9GTzGvEkYMt2NKcyHg3",
  "key13": "67TXgRBnESGK5z5VUi25mtB6iX2mai4NEj9hgtt8uC2MRSG8XQ9G5xPKQGLhPP5V4XFSUxkGBcw1CbewE1EDPP8b",
  "key14": "3mSxquZHABgUW82gdXALGHLbGeYEV1h8WT152c1hn7fdS7xCXBxFhqy73bSvPNuN4Zgf2PW3j1v4Dyekho1Jinxq",
  "key15": "5zAU7NXhwiJmUkUW6FPZJp8Le9W6WZLsCBhokfnVVeDVoM1x8hdY2mM5NHDjkgmPdYj3AdfFMmNuf66g3uxLBVF4",
  "key16": "PTVmpvr5Ue4B6QqBU7XWAGuZGtcMVudUTPURuHz8vgVNURu7E49c6PcHaqnmEwH7Cq3V9NT1xx6t2jfQWdf5Cer",
  "key17": "37iLUwTVCdJsv88hmX5SKp3NktYDb44qZJbfjPSC9sVGEK9TqipFuVmqas3kQ15umpgz8eH1a9YSthWDMGtuQfB8",
  "key18": "5YcgsfviCHaJrfrWkGvgnMK37bevkjcUgVMztKt9qC1UFanbRibNVwVDbqGB2DA4mgw2ed6GbnvNaDyUeLB5kj6m",
  "key19": "5J8NMaCwwVd1tu2A6rFZkUvn6fgaTLgg3M49Tch1MQxDfLDnN8omH2YvLLeUuJTdMDPJoPxuWkKzEv5qnDUDo2Kb",
  "key20": "25U7sg3XB3ZJAKyxrStqAzzwBsry1WXbibX2TZb4cnnsVHaSpxL8x3hCW7zZsDEXwubBcqSnvYeCh3zpr9MLb3on",
  "key21": "32rBHfgHh3cT1jkWS26YiCsqaikZxt8ecwMi7aoK2GArn4W4s1qGjVBWTRB6xnVCaNTbjMN3omQRuCrCREsgDzgx",
  "key22": "5SgBvkVpFohkTofcYU8S1Df9sm9KuTcKErnnnUnsms6LWt5v2WBP5FkgY3Seep5jLTa7QnfLKzF2kBJy8vvvuru7",
  "key23": "2sppAygLauxhMtAPRnRXd1wdGtgLWPF7QLF5RGkq4Bi73k4m5QJ8zbRyYhe892FHv4JoCi9CjZxbQUz3HJ7Nf6vx",
  "key24": "5xepumM77mt4PQfmWWcn6oRjfC5CQG1gBGFxrGg5mVBaNiJS6uGmamSqpnjou819iUV7tRzczNZM3maLesFs7Cip",
  "key25": "5R7xCpNvvPgiuTHndhu7gA4zb8ffaqbQFUsdftk7WQrJ4rn3gsb6tZNtjfj6zfZNF1ipcRCQ1dPSQRyT7j2wZbKz",
  "key26": "2vxC9oCqAJXx5dxdGCWzPwQBBAoth8uS4iDaunx1LZ4fLqMzENKyzQnHxQXagwh8wFchGMkCWb5oQgMPL5uqswvT",
  "key27": "333g2fC27dVteWYQ4Ef4Gr8i95zkVwHpdM86EEhaiCEcrNgK9PcpPaSMKs4vyemaZsxRQJg7VYi5ryY57EuzoLdm",
  "key28": "3Ren5CNrECbiG6Whb2set5KtB69dAzWM7AdLg3Jb4KFNM5Kao24awkKw5rtux6d3JP2wx684Y5tgrnDfMZGFPPAh",
  "key29": "327zxc3Eqfzix6z7kuyT996uEozyP67aJa4trJyYNyGRTigj6mxpSLXkg8RD5m77VbC4xPtEaF9RXjefWTP49xqj",
  "key30": "4gJV3pRP6EMo5rTyBpcTJX5ncdXDuTAM2msr2FH466RxcmPBSUXAbZ9MpzUNFiPQM8iGBWHDopQKreS8CfP4oXzY",
  "key31": "4yYgbBwBNKqD5FoxdB1DGEELU7ay47FaFAiWhhFZt97ThXUovAKD1zpaWvASFbRJvqG6TYbnbDapGzSL2CunJXku",
  "key32": "5W74XNCSrUw7C5ZT3gdW55yRrt6DWVB3nKC1rm632c62MSzcQmV8Sjb14x6ue99syAK8i7roSF7FqetHNUZq5Hfx",
  "key33": "YbKQyHd5t9cex5zNzBxeGmZz4fNE52H2nJTu5pvr6tXuHoGCFHkFwcmfEz3uW8fBRx9BgPz29LrBroMa9uAYLg7",
  "key34": "4v1BUoNSKnJN7411EPiS7Df9BHAyVUbHfhPZqkSHL8nQzbERGu3huhntARMWFdkHsdhYixqTJBUeBjXLUHgPjmGU",
  "key35": "5xBS9ZvDifJK7GbK8rgaz1mdz8TZqSeb2qTVV9TcnWQStDTRvFdnMcKRPZbWqs9tM1YfrWiapj3ZqpoS3ZNnwwzb",
  "key36": "3EiDgz2QztbqDwPzjn9ZLrBURUpDTYkrGUwv2bwjeBY7YmSiCnaavLqE8QDHSFETTkrdyzxrQhPeZPwk8HW1uU7z",
  "key37": "5QTqP2jzrixJhdRbzYGKg7MXD3n5PHJZSfpyRWLWQP4oYWAb9BBEojZTnFnoQfS6yP8kqJknQQhQXudTP5fBx25T",
  "key38": "5cv7YdkE4V8H1adFBSUsQj6Q33Mu2t1wcyJPHtXBeWkCCYnMi8vJQL4jZYVxTXpt56KpscpnSV4PEKAWABLF7SBo",
  "key39": "5UnHHn5ATmvDUNnqRYAXmmnXddetAg3eXdzBdw8BgAMsoXyzLoeMH9zDuMZZXCvMvMWyEutSFXAsTD4SNT3JK8T6",
  "key40": "3PAaRiB9ARdf6R41cKkYUEr6XWXbaV7WctAuNy5gXxJKeC4LnQcL4ne24ZQraJRSh9uBCtDZqp9e2urpfzoyFtr9",
  "key41": "2DJwrjMhCpS8DXfpaf4AQMPZhi8fU82gZrUAxnLNgzzDrT8G2jJ4U1nGztpj4xnTJK9hKJYad4LuqPFK6CNQK9W5"
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
