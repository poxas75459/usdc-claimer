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
    "31GqpibXH66wjCQ4vsQBEYXoNeEfApxpWEqQ67WD7H5stbuRyK68tWJw9VttB75MwKkuk12F6GnuErNNAVSM6KwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3rYxjXWyGxSLmB8PBXCJ4Eq3mTnhcLmDcFr7V4MRdVSMXbfd6Kxx4WfictS9K1u9z5mHheCXA2CKtx4S39EA3q",
  "key1": "248t1vvkfQEHofznX8qikdFtq6Xsm9WV6Eq2DREcgqh2NDETWupTSdwLK3YX5KwjkpTSz8yTf7yf2HhkTJSzTifu",
  "key2": "4F1MJ94spQA8bT1N9xPrSc4P9voG8Dut89QtZgwea33yrZjM4ifF7MzgNTUsHSy3g6SNcexNettKbsNLcxD2rXDn",
  "key3": "5Dy4FrshriAZyQgqNSkfKeS6ahx6o2r1FjNEQEt9js6GKARK68wvs8G4YknJy7HhQhG9nUbt72hETvvuFZk79PK4",
  "key4": "RQYmpJ5bbodjLtXcTTZAJayF69Mh3NKUurXFA3u7KRRQewzYKv45fnYvLxN29P1CYbiZAvcKVFhA4XjQHRRg1g1",
  "key5": "5TFVPnh4RU9JXVa9iy8YX7qnPzg3BXcJbSrsNzmVmz27bxXXRC5BsouVj9xbeCAs6KTFPiwrryakF1mm1inSNU3y",
  "key6": "NAWJrSAwih7wodKmWjLSL7hBJN3tyf8r7ruMo2GzFfWPxX8zdoGCU7eApqaWTaMRU6YhikTNQjC1Me9YkaB8fAB",
  "key7": "VLp3aZtRz8PHDFAB9QGKk5jNYTrrJEy6f9KgoN7FF5GmX4FQTggSFFuJa8NcJ6cRhBg9KqxZg5HB3Vq2d7imhA3",
  "key8": "2TpstUP4LW8g9caXwB3oXgJtRr4Cyb6wJwVs5XUXDiYN1mGVhoVdx82gqgvvXWjPS49C4szyurkwgsj8NPv6cyJ3",
  "key9": "5ZwF4sP2aEy6sAMw4PkCzC54yD3ZGeuTzAtr4n5qtnvjA9AJQidsHRfPeuDAfGy3EeQRZwLXTAy9C1zq26UiSNhe",
  "key10": "3PaYgkwB4QrhyT6M3suLg73u4x1hA7aNygSDiZ8dgakATVSc7t7csKuf3fPnJ5DskBvPb7FtSUxgadLN5xh4p8FQ",
  "key11": "2iADUKFFujJGkGsrqsozwNT4j7EWVgd57Tf7ZCteVFpRMu42tWGrbmvHdj6VDb86hXFrAonxqjcu6oDacjw8vakV",
  "key12": "5ck9ezHHLgCwMowXM8n9DS55Vdy5hzpESgQJyJfczu9PNpDKTQrHcQvvyAXDBsXWEpDCbedcpPVNnu9nMtzLctxt",
  "key13": "2K3HNaESk3X1qePsz9coGe2GFG5B8ssyj2BRJrXXZniyNrfa9PAoo6EQz5ZbDGStr69kMzNqf2hN1jGXzQ1WMs4S",
  "key14": "3ZQm1tdP7KiLqo8JvSzERifYZehDsk2E87sjuBKZxhT1u91ccnQvbHVEm6ycU9mdpgw5qyf7dRZYRWZnTQE3dxWt",
  "key15": "3o8rtuyPb3fEMuLZtV1FZniePn8Jo2Fzz9buAaa46qNb1JWDAWMXNgKbwSqaujHfcQEXb4d3p84XdHDu5ih8Jjtw",
  "key16": "42ZB7dprUHJrEgzz91hrTxfMoCMAjnWLUaN4YZ3ev3QNUwW8jmFXF5ryYn2FXKmsf1fN4cbc5vgeZXCrX4SUmp4C",
  "key17": "32jVPHb6Ka47dVvqAP96sa29v46T2rsCSdXNKjnHsgDWSv3CWbmBERVmpC4g7XQMVfgZZ8EhpkiULECL7chf9pY9",
  "key18": "43CAwuXMHCDex6XbzUi8YqFgSFPhfS87hHinD3X7dNLiygBmkcAyvcVGptaoMTZFXLswr1RkXyn23Z4B8Bt7A1vu",
  "key19": "2RFoMtwruMxgXfLvS8Mcf1m882HcKewysP8i6aGnpV6Qsp5oeCESyG9WfEwww52dtavaEMsQr6rczQxk8mBwsbmu",
  "key20": "KT4eh8Ru7oBRd3p6EAZ8WPk8hcxh7zKfRqaY6iLmNkR7VrFP1Pbdkrnrx5HRpX3ZY8Fmap7Y5KoDYGmiY5JEkuG",
  "key21": "2g5aR5QeHs28FD1Tgg6MwXBeESbpBBxMrVSJqbpZPNq18gb9o66QPqEchjviGGXVj9YU1xn3TDBpMBb2fgZJzQBE",
  "key22": "5i7Ho8i2dGNEyepeovNA1afDY8QZwXsKzrCCE4nSyxkxBzViT5J9E8Wnvx2njKhg7cdShmPaiJQ4N5bi3HXajW8j",
  "key23": "2re4PiaGe11hefZhUcosmrR979GbD5DppqHJBsoN8tt96M7StFedkhsPuToYJrFRNhQHPXUu4PPPPg3S2zD5V66t",
  "key24": "4ho5QY4P9iLEkCCfg6JmTiWN62tKe8MaTPkNffRsvMJN6V8UEwhNu4CbZShKCLWpB94FJ8J63edoiG29dUYGMnWE",
  "key25": "5VUwq1g9w1jniCPdPjbiRtShgoRSQ3zCtiXP1WLV96f54EEdzDGJU1n5YEAwzu2XiAHqodAGgsCAuc8E6BUNPmai",
  "key26": "3u6JMKYdbfYXVpmxzYwsEMP7a1S3Wt4BsJGZLmu4EDXJjZS648U7fcaaLXKRj2iXvEGSrJJx2xKYPgJopja2gTWe",
  "key27": "dreCGRFT9CVvuTZDwGr7P2ESLVrNTSzXkidmFnzmd1vR8v6UV5Bq9VKRT7E5ge1SsB7e3viQAhLUeCUpHcViyLX",
  "key28": "kZivyY5kgdNig3MK8gNDS2t7hBukvTejMwjUAbZHHHbCWvq3zwDA53vY6eMwbLC3eLX2EKFUyKzzYUAQijCKzV2",
  "key29": "34x3tjv2tX4hu4V591dHTZQWeorvNc1Knom2MStNA9YGYpXaty54adjfXvsUpuTKnyJ53rjgJLZhmuCzL1TRTV3A",
  "key30": "2oisDPdayemVEnoAwgBaDzkqMruTHSBTiAMXKBYujou6jC9iiiWUbq9pZdxnkDRxthi2Qwm4eQwgKn6fawMgE6is",
  "key31": "2U2sJvryFbSPELRjBfE7N2uqJtaR6kaEnqJx6QHGhdpdREJ4zDKXgqVBEgfDYJqsT8HaKp3Ynshwu4PuyAbxbytm",
  "key32": "KqgShD8igpCDbYKqf4XQz2oZhKsAVX6qz2Paa7Mr1LqSkMaQkyEjnPbQcRafT8z1UFkjPQ2CtzApVZutGkjJHqE",
  "key33": "anvzpfikSrTPJRVx2DuJwYoE1EygQZiTJq57pko1xJ6iuzQxT32PzjqG56NBknZqdJDimgAR7GnSCFh6ysR91NV",
  "key34": "2Uq5YMDrcpQDvKjEueEQ8LRPpjimY7k8Xbq9nbEMqMf96gucmfHinStQQJLc6fMTRcPqFesaguEKB9fBwkHC6XKb",
  "key35": "26M1q7ZVaSccGbEX7f9JmmskQKsdCiwfioJfaZ53vbW3DSkyKXMkbhi9jmFsFrZkYoEzJb1KjNhrSgFMi9zprUSS",
  "key36": "3eZPxLSWCBSMxhPSUxVh7zqopiyvMXbXfPHaiS3Q3g4xeSNpZMD4jUrfPeN126MfL9nW8guvseLGzUBNFeJEzNjA",
  "key37": "3jkcDMYhxQRZk3PjpA4R4AgbrSjq7XxCJogr5z8zQ5g6xv1cN3JtNt3r67gNi8ifwSiKPremG3vVZyPVyCQ23TeE",
  "key38": "2Rg8an1q6ua4vfzPQsQSQzVogdYJ5nbp8o3m3h79K6CEH3NQRKer64oUdxNabLQn3Mx8Nhzc4MiV7T1moFFo6vWr",
  "key39": "5TxiZKnh3kaGAy3MS4t6ANUbMn3jQ6KoVjssc5GL8iatsou1UqWxXYfPEB3vTGSYCGTNcu9bYTBLV81iz82WdRRV",
  "key40": "4TgHxrVbrJzRJRVwAenBvhpaFtbD9WYKQa6NXVPMPhDmoqrmAxKHJPjAwu8HU4HDp7Za7r159usfzMF8BmJaCWUZ",
  "key41": "61Ya3Kvza4H8Y4AFgvoSMuwoPhPLYekLWizwGqqcTaCJ6zXASACBsTkgjGVQuYoaWDGjBafcSmptJuB8kQv6gN1Q",
  "key42": "3LQjMEPJaaHBy6XPzqCHk7TwozoSU8og9C5eAuf9PJBi8Q9wim3vLnKApTBFF2X3RDh39iLskYPf3PdowtEz8LHf",
  "key43": "5ZNeQCPSBvbhcMrQVRkEQe8UHFxCdE87tG97ZrHSHDWJepVzMX84XeJyAHZGJkP1x1krLAUK56orpL2Cw9WgsPzf",
  "key44": "2GXUyWwu3Cw3HopRtU5Ta6zGVFoq6txAuJtC9kf2Tk8pqK1r8yDNmum2WNJvZGMRjwARpgri1gmt5hoY66iAdiCr",
  "key45": "2CDiKoP35Q7idywrCydtbEMSGNFaeBfJYKAZC67gvaHvmxEEbKu7NzqhGNsm5WHUshX3ZXnZK3FqNoZY62veuvWc",
  "key46": "cw51QksqhR7dKZcn4bJ7yPW4newZJnjnvdjt38vPzR8aBU1ukKPBeXTsvpxn2Fo45vV1VadrxqzQJVtotZ4MdLD"
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
