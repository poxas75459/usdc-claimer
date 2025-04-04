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
    "5ZtpbLUcAQNKAapxXAtb6uwsw1utFRTgY6mZLT3778aJEADwxcXxq33juA36zLGV4YQwWo2DBZRrZ8YhDCs2oeSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jG3qrVPxBNf4hk9Fa7VZ52rTZBKwwUyGVdnsJUpdYm1tktNdr9kekWBeBGgS8j5GboWcSz2i6SZA9hU1XfjgMmN",
  "key1": "4b8VpAHkr4VafGa7Cr8pVBi4vptL1W1CoueeVUF7nRTF8x8yp8GxmANsS59m6A8zrVtuVxpgQsWEqAiSjBuJVgYh",
  "key2": "5rpWgY3c8yoaPgdiPq5cPUhseQBmpY2XJTghsq2CGPy3ArEekRCAfpZpHEHTgKx3sS7Czzd3EYuH6d4ja9BhC3XL",
  "key3": "5TpARd24bQJvQ5XJsjCHy5TphFdmJGQg1MnQHYMHLJPwhjA7rNFicUQFw1Fgt8ikwdHpRm5baRtpU5kQhnZLDawJ",
  "key4": "3rM5tmm4n9W9qhWvmf7TLXbCS2H5uS9kytFbEK4moNV6iNyDnAynXYNhUSKj1KfHS3cTvmGrjJyJDH3aprvwMx4g",
  "key5": "5Au37jkhdzs1fB4vue9DccfWB1Vk2XR75Q6RJ7ynNFSQwK9fb6kxDoRXiM4jsj2FJr4tuY9ytxhSFvWLHBnPsPNu",
  "key6": "4Vv2TGediEPmGmiwG4BZEypMcRY6QxidoRgzH4FaRSs1J2q4erdMsYrPXiLwAqPsUtqHeTLwk1ahBr21ndtosFQD",
  "key7": "5Ss1rfv8Jf1T118zb6di8zzWLcfNMJ9mgBopmo2MzvTzdNuDA2px61rBQrcEj66Xhf3JNRh472GNon2DPr1vc8Rz",
  "key8": "3Z3cLCF3c6LxU4v2SQjfhRz9mdZf2gMYWiBq2zC3UNmRc2wGspM3FaoYBZPFMJX6azHwfV1fKQMAxbw1eBWfoUQZ",
  "key9": "38WBgnLKNRk4X4CZWBpQNdKNZ6KFisV6FSpbnTt5SZsxC5pkKTj9tkeyLcpJFn5rTXjHYtVu8Bydcv61qCU7nf6P",
  "key10": "cGNnuR4rAt6Bjs9ABsVcmaFc3cH1bSEcnGmGQL3cSeVFmui38BguZuQiz3xTMJzVNKidDN2a1EoWh8tJCgTd8rs",
  "key11": "5avvJMZw48nxYB9FhrdeRSrbG9trLn7CKjYPdSc7Pvrj9BGGGwRw8cn1iELDutFLq7vYdaE4MrXEKV2yQd8vnDZq",
  "key12": "3G4juTZLcHih9sLPnJiT1wDo2NxfmdjznN6J8aQ8BFyk5fVTsfDQVC6FSSgPo28WXP3s7iCYSUZfk9N73Zix8Tu7",
  "key13": "3PeB7yGgqaJ9bAcLCWWLkT9Faouk9kdq6daqWEfXy1kW57oUXWwZeLD1cLoKQm39AYsUvr5uDCGkML4dAbBFoRgU",
  "key14": "3z5MoqoyWrBWCGBHiQZYqVaq4p4ruFr5Nqs8zJD9uiBrK5vKcuJckF1kMqaoYzxFHPDxFzcFCs1rmzFkVkQdkeNk",
  "key15": "26FJsh9ZLXZjHaDHBA36N8BLe2FCX2VyqixuaXDP92ipZzdkyLPA9zwT9HtyCtWhFXgr68DcdzJzcdE7RgL1jdL8",
  "key16": "4hTcm44R3QrYEYu3tjBadGjKVpfdbD5rnNbtEjTp1pv1FVUMPQ1Cp9Kc52Y1HkQsqscAxQT2BejeibCswvXoHT1q",
  "key17": "57fQ2ckwjdGw53pFf2GKfcCi76CAibHpcpzarQMkPLGJPnc1p1bMpJdVd4A1PtdXYQTcNSetcgYHqrTaWsat8CXm",
  "key18": "4GWCouj2AhDHvkZwapqW8buMW16PFxUNJ19y3WFLbEDJby9ySg37q1t6yyV3o2Ys3UKmLPTzucMsP7tbS6Sc75im",
  "key19": "4hWihnmvy7jXLagUem6xfgWBEiQsbdwtc7x6h7FCitewBFkqXXii83hP4yvkLiPhWjAUtAYqrqjXxv1NycbivZy3",
  "key20": "5jLVRv48NqFosPpkJmgdHpgfse7SjivmbzYwUroaL2LtmXTagfBRJxQCLohewfQg5Mgzd2zAWKXYn89G8ibvyVn6",
  "key21": "4jsYqkFn4QcLkpALgpZE4RbVtBAceuacUzSW6gLNZm3noCi7X4eexepzWWD2DDbJwprucTtNfkcsQkeS2wfpLXAh",
  "key22": "3ciAJrFNC1dfuNWs9ATxLzbBQKVij57Kb6YCsXXC7ib1UJQHWojz4yxygrLumKWrggQR4cbmss65cgQjnBFsNtBq",
  "key23": "3qEZYWvJ2W4GhPYnjBMqTbr835MMdqASj9zq6XaAj7rczXjGwDExdhmTEHyZwGhydowmpexkcf1PmiqQdUB3tVvH",
  "key24": "4mp5XWiwq73sBYpviPUM28LwEjVDa7wxEAEEXgwT2FN2ywcA6BdXHbMEs4cXvVvc6egts52PdYM5MYnwwgRBSZTq",
  "key25": "4SLPry4JsGbUtiDqmhbQ9dHPQ22x9DLuFysiPEo4QjNxngd8g3mv4bjgDovRYkHeRqRtBqJk59ogVnAP2cHiR5vr",
  "key26": "2TmBC4YfaHwdQWyrke5XGKKfzdLb4NimcHJXR1VhcQBy7cvUtFLo79De5qB4PFVSHfDLf9Rhq6wALzxUoQTywfCN",
  "key27": "2T5K3Y1UFVK9kyitMiixhrD82eubzzmZ8WguSXdAg67hARF88d38Px4dzm6qqAoDgeuEtXTk8xtyUGRAXvWzDncj",
  "key28": "2pZyMF78sUYjBajMBRmPvJLawHSswSf8xGggpDbN7n2jwiYu3iczG3r3kbxmHJp6SNxH6Dq7BG8JDi6i5W2YAhZp",
  "key29": "3KvjZ22G4apk3z9nuSW7mTLvUgiJGbAtuGeKrMYAeX9BPJ9cdhTXaQKDBne6cMy5MJf8z78QiC7iEZZJADWZyfp4",
  "key30": "4BHVBrV96eVhGGFoveqxwvscoPyEpCJKAzmBkTwrxmQWe8CDVHxFrRv3gkn1HKHNEjuxpe9Ljb9TFSqrwAZnkz29",
  "key31": "Cd5EEMT1YhTNVoM39jXyoqo5B4hYWMbotS4V75ZbW6eQz9sSmTn76p2DZJMt6yVUHouzWkGsodhU1ADAT9WbQVP",
  "key32": "hzGkP4yapzj2VZpv8oLjzZmsAA4VNJ9LvhHFbKeiWNiXx6KawZWn9QeNXUJ2PJV6LAW5BMFq9XkbLk6AA8Z1wzZ",
  "key33": "2hGYLfoXf6ktdUWGyJaJ7DHSj9CXs5H3sso5u2Udyg2LpUGz6jpXPgATRaSSM7Y2w7NaDDJrgFQcNo95PEQ4CzGw",
  "key34": "3WnT8MGbrdWbBQYUbWMcVYKgMCSiA6XuXnjVZDCrW9tNUEaVDtdy6p9v9YyXoQCo2vS6erME2u8DKdk2uwHj4uGM",
  "key35": "2uwcgtDsgQ7LcLsnABBBA45ms1DN6nc1jFK9LiK6Wd1nCBxXbfqmMTG1ye3rxHGUhayAKSksqAqFsaCrYP6in9ys",
  "key36": "TpNGf6EcEeu1ZMnua71TmnZeha9cRQpy7ckD8evLHZvFPHsnjAJCLRTSfNpUY1om9cAz8nwvH4CEFvwyrQiGDaw",
  "key37": "6g7wsRMM1hPoBpySJuogx8qJRtXtsZ8yGQzdLgeDrBgfNgGUAuEVTvVuZD11pc989FoxTCxuruybHDnAtNmP5LE",
  "key38": "3gKFcfMv9MKtEodh5j2PXc83NSZC8k1viT8yUHV9rVMPUK8rDGsmx9K4yB18dxkosvtCF98fg3M5ZtqF3BbQWhqx",
  "key39": "61siK4Y6o8WXptWUyUvAuZEFBAY8idR33Fmo7F3eJsQj1V1ja4T8Ak1gtk5snoSaa3euSnPj2u32H8GCW8A1KJq7",
  "key40": "4xrdCrwdXyT8nn1mVWQSnUWbeZHRBchocWm3Jo6vJ3UKRevC48myXLeXPvsdtou7Ad5RkrKfPBttK5EzzAbgaY3a"
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
