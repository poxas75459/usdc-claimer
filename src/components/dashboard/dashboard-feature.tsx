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
    "3YG9ucCjtkDCCyhug7Z4vXQwhPKXvRW2shFkvZ3s1EoNa8s6nLt3xtjroxmuNbSVxuXQhjhtDTuAPx8KCbH2bfSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHKxjWQsDDHdxNumrC4MTg8u2ofMEH1Q76tSE3wgmH8XU7MRtvv9hTCNM3UNYkamDZ6CqaQMYW9yXKsXSDU2WPY",
  "key1": "4qMhTyXGpJttGRKD6bpoV86sWrPySYikty3rojaPXuBM5tMddXh3E1Di3PppFPMSJSJfQmJkJPemom29maFnUUtD",
  "key2": "29GpwYHsqCsAaoSNDSvWKoDPyWeBMvizDwhwwj9QXt2sTEnSuSuFxZKUgxKEkpPBbCoPdTgJKbZSeoP7EFqjpa6c",
  "key3": "1W9AysK6zwPHhUHi4PFgPZQiHAav32DT5U68TWj6pEjgv9wceagdgDwrZC89v8JM63T1YR2Jz1TbNBPbUM6o4Ym",
  "key4": "253tPxPJjv9P9vehw19mmWY7tCv8fY5Z92zzXiXskY6ZzsJyynpWTuxP6jzkfVZVtidqntzLVAdcGjKFugu4Daq8",
  "key5": "QDQJSScwUFzN1iFCd7mJ1jD8DvZtBDxpqC7zuJsJvVmMHcvn1zrGqqkquf958cJXm9HcPyEXxYVFu1uBR7Hn9cy",
  "key6": "3X7JP9beszXeFArdjG7PmkUjfhxkQVGAwYdiCFu5ja356q4LFCCfnvhMnVws2NaSfpcRAxMxBkevtFo8gTSiEgFP",
  "key7": "5aoLztSJ9XLqQRmJJBPphuVTZ6Yqe5DEKWZHE12HWPsF4y4CJChrB9PPF4VgDfzSLuJUFJASJKe7Vc8MCcnZktSv",
  "key8": "QRfg9eXqDcLrL7t1egVL4tV59iJYyAjxTX7wmbop8DYLbPzWCDraorHkbug74rXnRAg9VUj7hsYpPfa5Q9RaiEk",
  "key9": "2FTwvxHkCdd4EWDYW5Yu4VQY98AJ7s7M5suipYS31hnJGNCQj5x1Wg7oxnRhJu7wffKSwp1pGdTz4rMNXSeoHUtT",
  "key10": "2oR7Z32ycEVrS9HK5zKk3Tcf8HTsNiDSyAagGRUdM37FyfRAeqz3Zw7UMAAsY4KDwLWXbgXnVvDxgYyyn54DafCA",
  "key11": "3jxKuK8gBWccNEUTBkyg7QnStfC8C6VnqtCfDqBC62NGXDba9fBhN8nZAbwCqS46m2rT7pTr1hnM12Q4zmuZUH3v",
  "key12": "3c7tjrXjn3emQtbhAbhR5aZFc652y5ZF1vMStiHJnpHEXfBSD38uhofyLZwYmNuUj4w3HPvcA4sxShNBhzmkrrAR",
  "key13": "3NaavR6cyyYmd6sxKAR4pL89mAD9BEyuVyoP5JFrRKMd3oFo1VYfSdvnvoQhwrwvzBW4nWhiZc18YHBUdeJVLuGo",
  "key14": "3Z6N69dGwoFNd9WKwX4LYuKU72vDT1deSsdK6CYomXJPHDuLjjKdp6YQPjPYfXtbUUsXQU5ij4M6BZvAseg1RfNK",
  "key15": "5sFx9f8DXAtEM9xvhkAnvkzhLN46e3asgUuTJp5fdTHP7DnqggeMc3bYYFXVJTnGHyJz4nTyhbtBoTMwjsYCN7MY",
  "key16": "39CVMKFVEPYcMjKbJeuFSxTsLw4qzZvYsuPfiRB4GMJcBoEWFqNRhE4VYav51QsgmXbW3qfShyoZ1WzqMqEEtk42",
  "key17": "2dx5vJojXcVbnTz8qGa1T1fe4NieztiMHBtojbtBnD8U71KCfZ6Vg7w14jU1TMcKmHtQ7E974uq8hGgCj6Ttxu12",
  "key18": "4QpskbnK9uyCDpT11YwBHFPL8bGxuxFT7cDt2qBYL3LRQhoHMniTni2SzxacZSPgVSfiW1oGuk3EbAaWqEWX9982",
  "key19": "5r9Nn2mRfygs4hoUQswq7fgwAxtHmYFtgd3ZNxFzd4NUfNWjXf2mXdDEVLgP7YByRABsx2PpRj5cDkn3B5E3Nak8",
  "key20": "2sJgiPu1jWVR8xSC1GE2s3yuMaKcqSjwHMSDhaoHG7awcqyXEwT2J7PPBeGSX3LCSGDwybZWRakUKprfe52t7ouv",
  "key21": "4tkQJWqypdDdedskqX3MRRPA94q2w3yio6M4TPKMyf5anKacnBGxbpC98iSGjUGGHuvyCHRyKxr1r1ng4uCBbEcA",
  "key22": "3vDcixUChmBFqhco6LSK1KjwWk7Wd6kFY6DaovwtmXrekGtPuBFcDkgDUUhtNf55vjqZ5ZfCnX6QZD16hbtbmR6S",
  "key23": "5B44twWdrn1gnLgU7vPbgPYSbzKf32k618qBnTmfixjsYda9HQDjEsYSU6GvxojYK8HgaR4TffnTZk8yYnUoAKsk",
  "key24": "2ynkAmymRMqqY9swko2fyxRqdeunnb3vR3GiSp9eWrsSGYtSNmtUews8bv5LKgdMQRLvmKgxHAXUeeUvgX5r7zKn",
  "key25": "4xtsURdxSNUmPKVDFGrAYbDhfBGsRuNLEDJr7Sc7PW7FoqQHHo1zHNZjtyYJCx2o74fVKcVVAVGBhNZmmeuBMwdu",
  "key26": "4xBDuTPhZrjP6wkyCfb2swADXYjAzyT1uPpRTqGoz4iRhPUVYPjGcexM6GNMoHXiTt1bfy8z62qaygra6Cs61QNK",
  "key27": "5i8cYns2VD6tt2oU6uodUDs4nKnuEaqgVW3oS8jzBYMtePnDmnbnUButSnocpKi9LchbiQQn5wDoSAyYhBBDQfrB",
  "key28": "3Ax9ZWecyGZw1S36wcScvVb3WPwmWpTetdtmXavcNrZ7WCBtQBxLf8nicWXBnhhubEmmWqJX2zgwVKtVJ96ZA5pC",
  "key29": "4brGQ4jAewHxS48ARCHCaiUjy6LffoDWhg3WEdRowjBgDZmt7HLLAMBVt7zNGgt3uJDdGBRsTGagw6CpkXKA9pyE",
  "key30": "3jFc7GwMAv2Ejmsx4BBmRmevL4jcaJ9FHnvg3xXdkdQwF9WVxPXkTgyoTnUZNxkH8tSpdG9rKGapK8MWqgB1YnCD",
  "key31": "5gj8Gh9fLSc9mWgad6SUjCx8fmq1HD7NY1ruswnHTwe985VU21ci2eefL3f5KvHz9hwMxF44y2iWHXZkWZdXyyjv",
  "key32": "2kjGMiTh2JbwySkM7jfrPXUZh8SQPPTgz4eBqiEaSWqhbbjdukoosmXhC36bZJXV94UAt2UptTZ9DGGnnWfw3bMp",
  "key33": "2zzb2NMDNe5vaqRECC7jptmrbwR5au2QLNXtiZ64g7ivJSRwcPQcKH2JmdT9Vw1EDnHutH37iivam9QRP2y3DDC3",
  "key34": "3w1zZh6wwZHnXLuNY223ii1Uwc9Ni9o1RwZzSixk93fVsgXjshgcUkHET6uMPXSX5jrSZgLz5oYkCF9V2UmEzqhh",
  "key35": "4DxRLDAijqy6vbA2pBSyZ4PkyoKMgQS5FwKwm8bz1pK7izm1Xi6BdZzqMY2Jjkaq7ScSVXAneF9S5sAtj3Wdm5Hx",
  "key36": "2JxG7JLrRNvztpyZ1dWTTUv2uEFDM6Ut33oMoTcqjjTdEX8XTVR5azSKHw8vfpnrmJHha5kJaGpjoFtJe1XLu4oR",
  "key37": "CcGaoLJe1SXKWKCczSZepVqTaaXKYEvTgpiXufXjYPHzfYXENu4qKfG1AQebC1AN3XGCroMHiDEB6xDGfBydbKJ",
  "key38": "3bzZm4KMyBu1C81Hs3FL854RaLUjopUEVWZnF2GzFbeqVGjSqcj3yqoWVbNUdN9HWVZBA8Q7gJKhGNT1nxgrpaYF",
  "key39": "4FhMYYQ1b2B1Q4XZtVF5EnDcHefuimnzihT3d1eD4T3dnuoVVn76njdre77XEo4vdnkhN18PHe1jERqzoVkwPcXo"
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
