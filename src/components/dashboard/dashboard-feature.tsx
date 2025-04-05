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
    "4b2DXcbvMDbT9k6s952Qmb3eryrmn1jXo7T8Y5Aa7d4vDw9G3MxsKiGCpaFqVrGQAWDAPP5nGALF5b8nxeJzKq9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2t3xHX1AL5MvVNJYoi9CL3Tg2b7m2PtUYdsEk49Kz7WRToH1NgYgALKLZGN2VfrGX3mRKdFx5TQJHGpa4jcdmb",
  "key1": "xQnanGr56Yc33x23UeW98ivGvzrLwc5tSQLgSRhg4YyPkY2HDzNRmcxF7HUMUpyEAtHMB1N4iw1PkvR5Dz1z6jS",
  "key2": "4uXHUABxXJxRpFZAQiChLuASuqHEiBSWpdLAdUEx7NLoMYT2yBAm1GeuHKdNDJReSc26HW2rYiZS39aUH2r7turL",
  "key3": "3BrS8fReUTMBq7LMpQAjz75EcMp9Fe6X3ZLQwjwaXWF7hVUouyxYWMRFATZu2k4XGNA851sGHvMQMaMXzxezhkEo",
  "key4": "K9e3C24s5XNv3bo4XkSngpqbF92xzyH9bupUs95fKrmYxQw62dViyRnknStyr91ZHDR1EK23jJMxcLVngMS55jg",
  "key5": "4kPLUDq3KybD6WFdTmQVk611gveswEtGpz6pDfgngANG3TdHKtcwS8xpGKs38MGtDDsV3A3euYGydLNZVCDEjGuA",
  "key6": "4imo4aHQ7qbVpbcBPxuuWTuHMFDdfZ1MdXpySR7Koq48NvfKuwy1ttEfXr2d9givHdkgz2eSpMxV9FEczSgvSqnJ",
  "key7": "52LBZtdEPKfMCHGZcwpz1enSNB44XG72cScHwPsekBZFVdoNTjSifFLcVyzS7AMhiifVaCwBgdf91vTEo8WS7D2J",
  "key8": "5a5no1qMpYwJd5aERPhsxz9gsn5ExwkZzk3Ci2mCgqDos48WCHVr3a7JMRzCuwSrdocprrU7Ewve4yfLEbY31ARJ",
  "key9": "5EQMqiNtn7n15fBeNfom638Uyhr4HDRmAn3JXdCqUSecbREpsNwSTFikHPAVnNiSDkrDxg4wZTPx16eypS6fJZDG",
  "key10": "5WX2Gi5nHjrTBmZXzTFZBd3ChKmo5M9KU7kaZYZxXCsRdZkTza4c8xukpWEP6Ycy9WCe53qmshemd64RgKg81wWm",
  "key11": "4fWK2sqQVnMahWXQzJQCawyqNFKsBoqEnXksiFWN2y4dHdjkQ8Eqn39hL8GmXRrT9FFc7pK6h5ECaCMYzidjkkQQ",
  "key12": "53gfo5ch2JQiZhmq7z3iNsZ2CLzDNGJp7HNq6bkwSUWo3hvL2a5y7mnnsh89e5fVfyNEy2NoVXSKqz63tb8KVQHu",
  "key13": "4zzdyRkQBjDsJGqp6cVbmWAvs6YWdNnyaZUsEaitosux9eNXnPvDcjw7ayydWPFEAwVSCVCvgQXUdaWFZLYPyTZH",
  "key14": "2yqk3h6AhF7BmUWZo7cBRkiPcxkDeEjFo8PvWGJnv3hFnyPprBFmNKD4Sz9B4SNr3brrzZkYQ15jAewi61o55nTx",
  "key15": "2MhhajwBjcJvGL3tq87kxVEY85QoX6WXH6rHwLvqEeQdfpBmKZT6Eo11KDnc9rUieZnydFsJjKMYL1Dd74SpVDRv",
  "key16": "4auZxmCsdXtXLYhqxLyuagoKDu28r99EeFP5H2ubau1iMR67twwC9LVfpgS1yeYTJvmcsWGVH8xp5H4CmMwpjDo9",
  "key17": "2VuCFdZsG1qiqSGhRe6858Czob1iKvgngjaAi5yqg2Lay4M8XMfcFHfVTp1HQAWxPwcqGMP9Mb4o52sw4qVqbcqP",
  "key18": "4mBc2Nprgn5jsJVEjmvtVy9TcN7dPx7Gq11ztZ7Ki4rnM9vPCejoP8mgsugStw62zMnVPGWqMEFgqcZv9zHWa2dF",
  "key19": "h35xvJ4AwXjft79SSRC781RdJJkN9G3HpprEE38bZkzoFNhVN9A1KScKujZqt25xJDj3YNBrkZ3kND6WEyF18oS",
  "key20": "Y6QwJNGs3AMQwo3iDvWhm1bojQe2xqoSZ8WknKUvuXrTicJbBgonboZBYNpzN27ZhBP9c3zhYde4ZYjeJFcSirm",
  "key21": "2jWhzJbBhEbV3gV18iUsQ2mGdDM36m2cKj8X1f78ZWnt4LdkwCjf2m3N18AGbFwVNJgUgFXEHDydGSXeLEAr7t8b",
  "key22": "5aoQtqBRcAMoeWPjTpJEMgWM5UkQfces3YC277xmSU2WWEb3iTJKRmF3a2YehXa9qQVBfUrx8SsqzqWk2AeTc8KP",
  "key23": "44fJY54N9Wp1uEZzPhWYHzHanbQhug2Y4BdQtDdmYSw4j1wsGruPmrjeS5HuniNiRZ1nUmxujCKezY8juVLamcs6",
  "key24": "3mU8rpkXC543jPtmUHVEL6EjiURXi5Fc3SNNRT3FqWTiYeJqfoTAqucttkNjZN2bia1xz124FMBy9jaPBzCTdFeM",
  "key25": "5wgC78yDsNALKSXcLPQffwBatzAyDFnw2gXu4sH7LWNbiSD4QniK1JCcm1hWd8n4KaoNn1Q7Gk6wdhtSae8xh7iV",
  "key26": "3Cb7UZAeL1aAtCeZgKibXLU8JLQhBpufEoNMhvRHD3oafJis71d5KinPQFvPo2k1RrHM3Gr4dxaUywjPzFyzVpNz",
  "key27": "DUwtAYK64HrRsui8tfUHsHMuefYThGL7TF49hUvV5djzCL6hBTATT1Zd2RUk2fQ8xyNmyzHtRgcdxecm3FfGd1d",
  "key28": "4Bg4cYhVPdGGs6MYTkyA7jH8w4HU5zfkHxmarcUD3eCehfRG9qs6mQCqzQx9oivBwLe6Xsvw96rrdd81gUEU7jvr",
  "key29": "4HYn6R4HAjzgjhBaiw7KEoXv5MXf1d1SxgsXWUajCkmBh2SjrcFCd1FVCf68uA1KznGpHTPDQhSeLRKFeHc12Gqb",
  "key30": "5nFKLpJc6gx3UAHydjCA1ZnESAMP2v7ikMAm6H8bkou1NzmPzKWn9dohFQfZ4ztSAH1PMXnVat5BJysoVGnAhTCR",
  "key31": "5zVDiNQijyue66oc4qwxsboNkThkEj5MzQAZawRcFi6zG4KX9cXg8mD28h5vmKWmVKL3b5FttjMJnJDfznXZYE4y",
  "key32": "2VQsfbvB48BPoxCLZ2uYoDwgmCRqdaYCPwN8skp76w7iZEhE3ymMsL3cmSbSV2rBxFQD8q1HC9WAivzTufqFMT9p",
  "key33": "nKJqe19YA9Acfyr5N5ERQKguu1QcAMX3UPUYHcDPBTkqD4S2RXfWzYGqx1LcQExUrXoWeVrdEqWmwZDcNbbqhFV",
  "key34": "2Uuim9KmGpzowLTJ9TyfHGRMXZf1go1kybPP7YoBFaL3KmrNPD9FYpthbz1Da9cCKXqLeXfEsLB4rAVL4sNnoLKX",
  "key35": "4hC1ywaqkZomFMXpFY6owPVhKKpyvxPuHX1imiFoBwPpqqPonTM6wkdVwhpLKX9sgisG5PjmK96uNq5CUptE2vf7",
  "key36": "3bf64pCTcEx3WKzfgGFaTCpHdn65sSPonsi3nQT1KGMT6ofdmP7bNqGZuLdYFkJ47gpFiwgLjfqZZWVdV9HhheFW",
  "key37": "fZsUnwr1LA64JGsUVKj2NGczczbUrijUm3jo9dDThdZ7BEXKo14nfkoWrzbQcTmw212Dspmd7KQxJb16LaATzTf",
  "key38": "4KmRkvt3YWkRwiPcuMGMXG7odYzznrTDk7Z3ks43vweoSqBaVosLN1G6ihPWikTdXc2RpCNM1ZmHJbWr9rcwpGy5",
  "key39": "4YbNabeq3V54GGNcsJvSXgc1b4CdCyMg4d2HE8FCi2yns7fUnUzxgsWhmJh9ybgGqse3aEviQkebhbzE3R19g1F9",
  "key40": "4fbvxmGjUAiznFxaab68Pe51tvxSkGNTwBHESW9jRzk8MG9CXFDeMz5UGhrsJt9f1YSFZjqWv6KpJA66WCoCqazn",
  "key41": "3WjfmjzFaXZQEW3Sp9mcz9JmQMfgLf8JWxV8aSTsRsfeeCLWn7k6K2cfYzko1jWkZ1D3g7ir9X6bMK3Crevem4sA"
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
