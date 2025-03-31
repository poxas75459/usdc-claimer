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
    "2sK1EiwqRfA6afcZK9YQsS9tdzupw9b4vV9ztxEC2PSVpEuCsJ4U8kaMXfdPtqDEqWPTe6jpCvBsEDAPWJGGoWVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7pXr8JzufahPdaNfEshdr5sVj3411ujGQzuVp47CP9VesH2Hw7a1YW889o4Gg35MCxsgJA1yWUNdxQB4Lhvdf3",
  "key1": "3WEriK1hXAXqHM6u2mztnHFZmNk9qK6V749TmEnHA1ze4pVhJLwNkL6phDu3DuDF3XwejmU5EhgM3GYjGWMi7Wc9",
  "key2": "2G3PWcHNnVjP5FXEY5ho84Emb9uPCd5ZN4pJBnVQHFCrBhH9xgTBdMEhkRgFjb8XtJjKqwUtEUNMDDGosLR5XD2m",
  "key3": "2rvpsu5RjjgvzTJsfEj1SfTi44u7Lpw4CPXnUGFvvWQHMoSYNwXgMfQKmyJ3ZDtcifb2P3LKweYZithErAEpRpPH",
  "key4": "eEBASYmaupPpq3CmtcNpzBMBJPZAc8hdPCcvVxKGoeZ4dQJSWA3z6xDNJtU11v3utEcmMTpitMFaHStewovgsx3",
  "key5": "3vE6csVXmcvbEhN8fMpwJUakX7vaj8auJaGneAUokz6d76fkMMxcC3wH6HDM74eiHgUgsJj5XV2whA8VnCyaDj2C",
  "key6": "58V9zkCpxTiYpBG8NqiJrhBtZswSE9Jeex8ewYcySfcTShKCVRMNSf1Qzg5ts7myUNooVQheCVFDuvdp9Vhcpi6c",
  "key7": "2zVgUqgvd8Kht9g8sSqnPqry1bgVK8rH1S1nQ4gLd7wGRZNJ9tYAuPgVXxnM9NdyNKfZ9wCjxpqsuLAav69Ue7dj",
  "key8": "4MbZ4xq1JevNBWkdVfDuuqAFZ5BV8nju2f9KNndMccgvDs9xZxevF78Q9rCUmq6veX7Vktvt1tjzfLCv3wuDcHD4",
  "key9": "3QqRqRQKp9x8v5BmfL3DMNkca9g1G7YWi2FiPH7QJAJUuTFTx3iGg1UYpZFZK44yVtzFjYGHwrFQoAZ9DBvfVBWe",
  "key10": "2SMoqdHeiQ2pcSCVkbf6LPniKasLXs1985TaENwAJ6TGojhgtKwSaAXHjzKgDbU1nPRus6uyiYotm8TkmJ8BiFby",
  "key11": "3XMVj25YNj1uMpKqafsS3ikeUAhEfFiT8pRauaimBm4XfN82rmFGNmdgWaaCTBpjmN8ADYzEFYoZXDgC3qvSjdxR",
  "key12": "4ccrrwGbf52TYv3673rggArER2kEdS6Db6gZ8gbqfAcFN4MTZRTVSXQhexiuTUxn2ijBXsci2rtEmNQXAQGmmJmc",
  "key13": "3NfGF7ZssqKVwR7cYNFjLM6frjeiT3LKUZj9viuj5dUXK3tzHCTZDv6HeAAbFn8djuKC2Q9kJX1VnHV4kHp3QHNS",
  "key14": "2vvXzApLQR7EsQeHf8i2vevkJn3eWkyWr8LsHxFkUBpVUPu6JTRBtnf2rWVMvKeRNQYh9Ur9mNeGHE6oBT6LBH7z",
  "key15": "5k25pYUp9akLV9LQu47aKQe7W3zhC93x5KhUZ1MhnaT2rZp5FChhtF5Tsw1shiWaXxagAWE1ueRHy2W2ja2Qigt8",
  "key16": "4NxsRAjMxt3GFq8CZ9DT1GE2nT7eipd1Jx7s6Hv7tmUbcxkyGD9TJTaz19whZysvny8RL1B3w2Po1c14BKxYVWEe",
  "key17": "254djLcrGJQdRPGNmKGRdU5nEpgBMFLy5Nx4GaP93jyuu5PdxgZKN65D2NzGfFmfyaGWixQ1XnN8ssQCBReFLb8N",
  "key18": "4cmGcBwCxc2jyrMiaS3i6u7TUpd7zKYwXPMyJ8wg6QFWkjiGigW5xC7RMVtQkUL4Q9JZwFCmrRsYvHF9u3Gat8iL",
  "key19": "3jjDEJvhMHAXbBQkaB8upVBaecAbucHv2ciHKK1MxL8Zp9ZqUK9BUViDDXPVqZYwE2NZGWCqG3oRuLWWGGAjscmu",
  "key20": "2FyiySAZXNzv6rks7g8aspatn53waGLNus2Svf2SYtSHXmCyYwap9P3K1AF5p9CZTy8DrvyPtAnKFAwybktrgtRw",
  "key21": "4XDVuPiXeHxEPmWsVthYgNM3V7ZwhUzKTbU2UGeGy3hcrAk8FgX42qM5Nq1qpn9G3dtTzRZ4Vp7D5eDoxhweUA9J",
  "key22": "4JE9t4JW3f8aQje2bxTGxjBrvCLLAVt2rVz7Ae3jeNEhCrA8v4tMC2NUmrhryGUrjMbVabr99cEouHfDuZwRyRSh",
  "key23": "4ynKkB9YowcmKutCJuknBHyQ86b4UWj1J7Ldff98EsuQoxF3nMasMXjez6QUjFNVZCmYR8Vuwyf2ZTQ8rTEHJyNU",
  "key24": "2Q4oVRdHy7y5iZd9UwCSRg7bfrU5B5bVbVY48XmrYGAYhKgzh2CRmmhEbj8aLZRx8rTA6pbqWjuAbF1ysGRxH3ET",
  "key25": "3UcXc5Vynrc2eaRcNgmU3CD7nsWmVJvbrrbNyVZTErhyP96LcQo5Ks2mMdMgMdJpZS3UXaJSfBPcCQUm1rmAwtZt",
  "key26": "h463yVikRVMN3RTVysnFeB9aHa3bAY2EsftqqpmmtyDttA3jN1eaWBiLKdTs1vBbgFgB3ZrdZJCvK9tVEk7Ho5H",
  "key27": "35ynsMuKv5wqQaAB5fyCZqEugSpua7RsAf9GFJS39uTEKgS9HEPPrnLXYC7SjULWb4Qk7CAEs3uTj9vz3auvACNm",
  "key28": "65WFxjEXavwqv2vKzT8dh7wHKTTgY2EbPvo7ZNz9i3DMaqktyCFLPkcetCqPtStjY2ujmG4XJFkNj2QGBpPMPMwM",
  "key29": "4Wg5ZCCdH1xDZ3qBwV4pFQyk6XjK1LbtikaQ1G61z9mpGNfKzcnRcH8haGfuE8GKbPM9AHemPWyab8Gd6dytTGSv",
  "key30": "4ErpNDrYK9fj3J6U6UbSaFh2WUj23gFgNQZqntT1GzvYY7uhUXaFABotHuhHpVmwgGDxpaWxWDgzAfuZwqJ47TPA",
  "key31": "3eTK5b64sCkNfBcR4bKZNvBdKjp3cWo54JgQFhH2AXAT7KwaEy1TnT7RhQodh83eApzodaETLirZARxqtWwkTwMR",
  "key32": "4HV78r3cDneq5w7ZnuZBRXhuKzzXo2VYdh8EVZV3XXyD7Rm6TeiCeubQqaV8Bgrct6MfzeGshnhiY5ksZqwMESjG",
  "key33": "4447d14TmMrX6t4UHN2ggJC1bAkEdZMRoNCEssfNzzn6SgqxDsK5SbyNvMSYPcooaaZZEisyB3vGCAiDK9XkefQh",
  "key34": "paEjNzJerb7xXcePJVoDqY4uyFNDS9r5taRSiDBfSjMckPEGtoZAnkGQUE6J2c3xszkZf5M7HK11XWJ3Uv1voCB",
  "key35": "2y1BBuaxGASPaLXXU3wx3GLcNMmB6ixfPoqshhgY2GEXvJFLPRYAouTYLNfThXjeu5NpWdy6A2gdX4a22mpLaTHs",
  "key36": "3VehZcydnp7n9CAQYdh9XW4Y1F3ZLAHfQYFnrrfCj9yNqsxjpn3xeRLvL3cnWonPejNjaJuPqszoGGJhYWhKXmHz",
  "key37": "327YvGNX2L4npJ85BSUSjGo2eNL4kddzhH2VcMQw2feKfuAuBDr42ozHNUiKPuZyqwPvjeknNEJ7Wfoyw9WZHUii",
  "key38": "4fcHxenogiA6SqcUkGrnvijYwxi1qeZHpcg19BATVwQ5oSgPucwcemFCo3tAKUhhwAr5ww6oip8tHDMkVGzPi2At",
  "key39": "5HtNzjmx6eP3as4gsnVUp5HCVZQKY8vCX7CWJatZkqt7MzNTET8qgHEf2Xu3Uk8eddB2ytVXjqvRUhmJJ7hkgmdi",
  "key40": "3Rb6NLUsMPExZRRQR9EZ5oXzg2FjU5b5QszBkZkyYsSVNcXqu9e8G7drVoGvbVnNHqfLwhWqKBkzKFYZAWJdJNFC",
  "key41": "5GQdqazEqjRoF24CfWnmokFpd6KBqt2USvMF65dLGhPMw77yE9D88uSz53LMuBKtXYMqvRGUtZcgsS56WYJS5Xdx",
  "key42": "2rY9nqFY9nQRZSB6p9BkUZRk5tHpjCSs231kiM18HnbqwHwxozagnR36zukdZx9VDMGsseYcyXMAPpQiP8rnykXU",
  "key43": "3fpff8MXimDinn54HAn9vMESX9jss7UGBXQnyM88J95DbhSrZev6aEw6nz8U1aqt75THViLqoV6Ry94CQDmx3zEC",
  "key44": "41L5cT3Kc7HRb6vNXTpC2GFaAiJ4JuH4W4nwXAwePVKTtVzHfkMcA5SKTSnCZ7xfty6w3DSz8xTBVET2XoGcNb76",
  "key45": "3SVqPD5WNyArUBAPbiioz7CK1qeEKb75EZ7f8xcrTeSrj5YT5m2ggpu2ankFtQh8jid3S3Pe4h3NV4yHKuET6YDe",
  "key46": "4iGmbFofXPDjizdDi8XrPZLCaxcLZxEBjRoLP8ndzytCVek8woUwZ5LdBRJMLpAhoeHJNxfWQSgN2YkTDfyDvVCE",
  "key47": "3UJc9gNuZEMZrCZQ2gynHDunxJ9j2DrH7G7FJVg9FvCcYNHwLQwmZSAsJmGzWun4bMD4oKfrpYySdvUQFUVvD5tg"
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
