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
    "3B1h7VHdfUUZk9qym9EUcaoVJRoufpMc2ZCQEEqNfSJothejXdjAaxeXHfFu3vV1xZWdf68QWaYKmjEzZoLGkrFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhZp1QcmDPyr7qT88DC4UrMthrXMM5anrZotWbrN3eLVBtcU3CKSAgJTu3EUDx3aMFpGVghgTrDP46mrGy6JV6w",
  "key1": "5bE1xWabWCphbgrH5Hk2ckrpXnPehDazQwEZP3kf2WT4fzXC3ZWn7aFfQH4zfWmG1vhfd7zgcTgsW15zgytgfpAo",
  "key2": "3Tre8JjuppTzYzToEsRVdFHVCMC8EgPef3hkQ8q4nafbKyXJv473Z8qZDBG7uL9djY4TkKWnLbExBKN97trNvkBy",
  "key3": "5JTD6uDp6pPUpPjigAidAYho1ME7XPf1cinpJ7oUv1rUeuJifmAgzSkHm5nR3whLWaevZbAQb5zH4mfLn7gzKGfM",
  "key4": "54hoCEkSVL2Z4U1w3s1xzEkfcSA1PYwWUtbqx56fZR6KdVypDRqnYVyQsBMuwJ2kgQ4RHMLFuntqjbpZm8XAUAqA",
  "key5": "2KzDMBrM47Ek9hRQxjiZmELFnEDEWKS3ioPXbDTdTMEoSQCTXDRz567msnWTaTfGCN2jVg9duSuRCqnmjnA9jbPT",
  "key6": "34eu9tXbspoieTHdRwQCfGCYUsPTs4n1oUbevDHC8TFzTJJajbzFzNr9cj2wdomdsSx23MNykqsHE98cEfJQSEwu",
  "key7": "2sowMvUZTgoPrt2HodA3tos7Lno5E5NFoBzNJnvfww2sEwMV15xJJGEuM8BRFF3QNMQTmdSNKheoNtN1AwYuadoC",
  "key8": "3y1JH5gmMAzZWqYpkwZwUu8Fcmd3ZykUafGP2nmKh4LzKNsQWSSFbAbteQhqUVCq2xNHGSViN6wNzeBiShWpCEh1",
  "key9": "4PaKpCzpo4T3xFDx6D95g3VW8ArszAy6pku3AYuV2HHfHg34T7r9hbyZri6PRUn5SZ4SKvTSY3zLEVDh2PH3r5uZ",
  "key10": "473AkbgZeZ5jRyzTE2mqx6KuQvQX2X2D5uxthvCjpBgsShdr1iiYHsQcVUm7MfYHJcefh2ax8AMUFWtwVgY7CWs2",
  "key11": "5LnpDbdUtJ8Dk7tw7AN8k2B8pCj96hgjshVB3n8SZBpvnhbJf1m62P7aXvQTMcw7aqMssbFy72EftBqPX84GZTU5",
  "key12": "3Ex3LgouK3rwkoxEZyemL4APdAV8zLz1ngLPDxSsYC8WefS8Bz6stMRsCY7tSsNckDTTCH7Wrdf8pnxagopnVPyZ",
  "key13": "2t2gSkpcoLAYGjZkpwbfmr3rYpDoShiBDpatBAzKTBHP5tDQ2LfdEEmebAvnbQ3KbHmagaGYCx3civo1eQS2i4a4",
  "key14": "35VWMnhCY81iR7vgVC6Lzq1eZkUX2eovJGdT8ZrTgXHSsNYJH9Db88r3gmA5yRbKVpubtSeQYyJbVjzyVmJvb9Ra",
  "key15": "3Y5XK72hQrjfhr2bMHaLSUpo8nzbHtr7WSfWt1JMaHMJWYymBfU4MmT82dddTPVjBHMHpnPRScuKLDu4kJcgwusY",
  "key16": "32KFpSVvURCwBquaDpsoapUKNrj35QEKps3AmFKSNYsztnTrXxf5YMk7SkDWNcFUPA2VrP7ENwLyC46hDp9UZZz4",
  "key17": "4sXNACa1vhSQnZP5zge8dMtjEiubUCYeha2QDnmo4bbGoS6TKA2ef3p6wj2jVkUFXADGH1G4jouzvJqAvbPU9d8p",
  "key18": "3LyTtrPAQ2HUy6hmssYyHq2Pas6iAbgS9RaEkcX1pzAeB8oDLDiBmhLzwVCJ7kurubGfCEXN25sSZke81RZzvFd7",
  "key19": "M2g5RkthmR1QCCMWwZuMTgNtnKauiiY33addLDjzcgFrKGzkSsouqycezxx4EETfy7nf9SxuFZUipz3BXB2mTX6",
  "key20": "4HoVF7oMF2yJ5bCG6JaKA51xpfV6UqjxGyNBU1XXPNoY8stAXEkU9LgxhvtkipME7cR8Sx9NvnWLnJk4uTdar4jo",
  "key21": "yJvkpqLbHLka1tV1RBUQHFE7Pxf82pKerF7ENz7JvnmJHP9o12LzQRVcxiXZFJzPZYPrRnFhLymrkrSnDNZqLQ9",
  "key22": "641NQGkxpBGe4cEVBWUhxh5vxDTc74UtF4bkoNSUP1xb4vQqtxJrHBYpkVgUusaL9inUSYG6nAzALCAZLzLkGXHs",
  "key23": "4RqghBszsd9PTKjcf4piNcPc7oXMhakUg2bPgAp8stdroR18EB4R8KyCFbM15cM9dDWuHX2cqEgnmwtvYYThNST7",
  "key24": "4jxvuveJ1sE3GCCLVWgi1raBX9tiE7o6ZZPf3CBbTBeW8s3yebeBvKjkPJMHgy7UXr8VRq5V7j36HtT5sosq6EHc",
  "key25": "4BVu9oLEpExomt4duZMrX3PWyv4BftvETrgdnY2gzfRjK2eEfwXpBd9AFxoPbxDiEWxVChJ2coHeyQfYdrfKouvo",
  "key26": "41vjMrvMnnQgUXznCSjLA83eroqxN2VSiUbKzsMg4wu3iSc92PLMUVzq1hTEm5QgcAKHr5wKhqSUirBEe8EZtHuF",
  "key27": "2PhtWdRCnfvv4A8Vr4ucW7BxN7mPANKqMA3UtC53ZFRmc2vQnGo7dPGLs5pPcTFqefMr1F3A85ondENYQvBASgyj",
  "key28": "5MSRAwHGZq7ansqGVnLvtgVnuWmgA9r3UKhxPCszMjEKDV2AVMVeacS4QjnSJAQwwerwBcFkapSaUJD1kyomsg2v",
  "key29": "4ejsGPcjeMn4daVx6yKm4UPKZ8vzke2MRDhfb4CidSznbvLDNF8nXd4cU7r1yDunUU7EGAwwtSaHWGoyDDHXYCwF",
  "key30": "4ncogfT8zFc1YTyRQPLDMXo6moaJwveyQzRB8Z91MkFciFWagCi3yNABTWpndZefMAxTF7bF6ffzox1KJdyFF8ep",
  "key31": "4dVYhqa5bt4yxup8GDn73nsSawMz4KuEAtLkWeCtoS7bHyCt4sRW4cTZfFf2YDjAPAgB9cqbn1PpPTFojbf8B1Cx",
  "key32": "vD7K9ZWbbBZbvnWNASsmowbVs2PUmhZVJoNRYMQ7zyKFKySsZKx36zwi3Y8LzCxNjLzZEqsQGCvpFTr8kBUbDgM",
  "key33": "3FNfshCWJh59y2ZsC372hUwV7E86jb2QysT6tjDYVuJhmP5T7W6SSiMXc5B8Vqzwhd1npauPrfUvJ9DtaiPR7qzU",
  "key34": "4FiM4E9NbVk9j1RNxSeHPeSAS9QKSKbCXX8gYnCKVRQLrimsW85M6CawWoNXM1CREDcQTxEiBgE3DSr1BExed3UC",
  "key35": "35tCjxGPeBn5ci8Lm5UeivdrnuAJiwRJWznZH2XML5aktvAPF1c67FbzEQz1Q1EVbi2ZZUhevHWi7WXYX9x1M4XE",
  "key36": "3z4ggKvKoi6ap9bJAP6jPYHivUg4rJVmMdCoGoG1nFHiconwhzmuiw5NnoGGoCkcqEVTYhDX54YNLRR18Cyeom4i",
  "key37": "vwU7RUdMCvB75w79A4wMAGueUC9f9qc6eByaD2RqVvc3xrsojM6jFAAa8WDA8Tcewe3ewCJ9pZKTzh1CzNbvbMb",
  "key38": "4adAU9B4NBdCY2PyC4DdtCRW6kre5VuM51iNdko2nGUPNi5kZvcDnQ976D9iRoyJYETxCXJMAqaQx1sugz6VUX1E",
  "key39": "kzsYDgvvKdKKVoCLEvfLG6gaPZMcdLrriBZTEFhvZv6KtLn5qKBvDKvacGqkW5Y5nJKvA7Tq3AUf6MtDfHdgykb",
  "key40": "3BT3EnxieAQL7LzGsuWdQnUAUtWzyBpZ29upXa5b8CaiUftdyrBMr3DmcwsfhbNPnGUY6K9CuLkTyGviS86jLgBU",
  "key41": "5mdQxeFnJY6VSQ7knQdpTPA76H9E2MojhqvqHErGvC6WTBETMP68ywkQgMFrExQR661ovrUqfyay4Am1JGAFya4C",
  "key42": "3dKUkEewuf95QCkquhyV55gwXGhB4kzYJtfkEcRYKvB57Pftv1S7LukqN43JdZHLbhBLrLMced41XnniDAaBemJn",
  "key43": "4y12MhCfHDADrDsEHmDERrXfudaW5X9Yyi9SnBwKqFeYAc3pwWekzuvQ8zNNo9cFesyyZzM1pNBC4kkAjNiFhzDH",
  "key44": "44eRBg4Y3jG1MURNsy5XeHPS62L3LEBQbFKPdm2bSsUubz29YHU2i2LdTMoxqfFnGtoHmY7yzVjUTtBQRuR8n2mr",
  "key45": "659A5Aj9pw6SVd3rMeEWaWSjzzrwCQzvu4BdwLsRec9HzNYwXteFrGkZECtBxTuVi7d9FKF8cQkStog7dK2Bqo6c",
  "key46": "3sSAKriNf6ziFww6N3PHKmo4pFeDcViqGr88nHYpuip761miuT9TFu4N7YWs1HjDQAh5GZFKSDwQDKmr7avSnfte"
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
