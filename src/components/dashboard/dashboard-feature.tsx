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
    "pZ2Mo2m8Yr3QzBg3CPSeu31ZJCUEqhX6Mb2rejPhDuWLCv4TcqRjEYfKqaxYkwZVu32T7HgxFeDGP8nA6CtGVNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkCRdHVeVAwYHR81z4fU5uGgL4Q6D7zMeRUpFnFixCfCLZ5qBbcX8Rw2RinqrFFNuYHosLyrzh9SdX4ZpqhbzpN",
  "key1": "5Aa1nF4CqgriKd6TD3zwb7cj71yXTF9AdQi25nPUnGWaMAsHFKUihFcyvBCvTNi8WYyBUWcpJEoDsjMTavcYprZv",
  "key2": "qQUKk8Zw5SWPwUtPW2QkfanJMHkW1j1oJgFm14pWaYkk4qwcLFCyUU41Qhr7on7hVL8XUiZ2mvhLLYjk4JKcSqW",
  "key3": "2CSbC6SRooK6tqWNqiSmp5TBBi2bVXMMvGgDNnudPxBK5XcxA1H8igR5Doo2irEhdqmmMANXZCAoXat1W8S71bPs",
  "key4": "5uqKfmbE4oAcpkeypSKEQ3jwEwxXmDWVVEf9WTgyP465p8NixwJuBuwDMZGWtpfpFngtizQDQTVxJBZbGi3YUitb",
  "key5": "3EvBDtH8JDLLq9wZFKdmH6HKrumspxB3VnUSPoC1wKqpzAE4e34vHWzkoick9e1w3wPCy6kbyf33aJdFMsZ74b75",
  "key6": "3yrErSG2GfisN3gu4d8FY4UGYN1f5qGH4XTxSSbVqkmPMU5Ct8bMWeNmSFMUsNXhoLGM7qzKyG8QqHnmjCn1jwJ4",
  "key7": "2Z3gJJQ3CuBR2xycs4eq1b43FoZC8A6p1TstNuX69SSQf7Ctv4LhGEUEgUmqEVVNSQ8927J6yfsY4dsjDMZjZPkG",
  "key8": "2T537ityb1s7qN6Dsnea3AwxYajrS2pTyXwZfgkum9b1pZsHkVGyjjamdAYprQN95Unudog5TreveWxF27uSGP1V",
  "key9": "WXry3iA2i4m3aTtxauEBSBeXLeeZJyZDydmpx6u7P3CXXVycW8YYhKMQqrtyTgHsdM25qV2yzMHf32axqugcyTB",
  "key10": "4K6ssv1xC7ipLBpVwHrwVEuBuQXerqy4naptSqfH9dNDZwjwmQbTWqFpfXCFSsiDYdHCrejdkxECsos7hCE3W99d",
  "key11": "5nMQimxW64ygbsFpYSLDxPLSfDxhAmyzh2ARTUGuEpUfvaTucyfGo67Up8QGAVMEqQpdUAujf8xJeixcxA4URaJm",
  "key12": "34mQBcgzW8rZngBcEgxNPxuy721eEHdSG3zmUKkaL3KfwcZNaMCmYqa7Dchbk3iAs2wcYFKBqcQ4uQU5stukUVyL",
  "key13": "Xk4hmo6TQDzVp78T7J5mB29ezcNAxobWinuDdYEZmTrJwQnfeatLwndq96aj3FtMLcNnxHNrrReiVztjy9eFB3m",
  "key14": "2CxG4XkCBNxKYwdjzbGmL1UE9hukiuniF5Ex9kQiHwim5UMV2GsezHRSP7D3FrDQcoizVp86o8mW7oKKeVevd1Sy",
  "key15": "4KAbg3VoCiv9BYq7qXYMkQRJ7FPbZUfgQX8drHuPREinXRXHPzRAYEmwGvghWDsLhBdp2FyVxedkYnXHU7AZzJNS",
  "key16": "4ew2vjZMXAqm4WkEBMPWhytf9p3qjLSt7Z2HVqCdqDx67KK1Rde9P3Zryd7M5uReJ68j6Uu5batfuGwMuvFYzt1Q",
  "key17": "hMHiMYRoFH9SvYXiabBL22Bnm2Vgza8WYhsz1tQZXdRk7ENgd646zFpMdXMimLhmamBxZBFYAoaiEYPhofiCFt6",
  "key18": "3UofsUWaCuYtbxkFVaeRbMKWJdsUiMdKnLMAVfJVRbrWKSjzVER6pEnPvSg4nrkGz6BqjXqTMc4eLuPHN5UnFGPq",
  "key19": "4sAFrrmKsio4HAHU7v5eGanvNbhUwyWs72MDfeazzxTyC7jBGSvLRZHNLgjyBXAAf1fvciaxnR1yHveyeSZipUH9",
  "key20": "21vkm4SZMuZMS6daRZB5jNxV7cKKsygjE3zx9imr5V6GAFunpa4pMnd5cavegn8uwx1YSHqQwXgpw9oDQQmeAn8T",
  "key21": "4JMysj9r1EZ5NPunhyJBvkjmSQK1WgTvdE5LTbw2t1k3BnLcgXFxBE199G9fksNGxr5ftCfLgSwWB8LwnEEq7SPs",
  "key22": "5uPe9W7ceW95wL3jikRsmnLyaEFF2kTpgRi9kXpoGCogFdjLizLyMFLTC6tuUNgKL94vKxdsB8sKjjUtv6no5egx",
  "key23": "3BiAHjYjCKtLki7t7hqgGcRiMkjgH3KWnLvQrvVedNqdNyTzCfadBTww8SSMAN921zQdEdftSpFJS72vQrq2vuXR",
  "key24": "5qFNsyKdhhW4SatxDsENibgq2s9xnK38bM3MGjg4zQJFDX5dBKuw3AngLmuXMu7z1wjVDddgiU8iQnjzR4Xhhx1k",
  "key25": "3dy1vMnka87YePRDNuM5udbFKZfx9pf6dXyVz3TfgXExJxN15TsY6FmqF9WsW7i38gVBucMXLBwCXr95Jk41ev7L",
  "key26": "4CyBiMqCnd1YDzou6SZcWpjYCr5ws17jiC26W4C4TXmme5t8jvpp8TAaGSLD4XikWRDf2WjzmBevosoK9YFpN5rs",
  "key27": "5wvfSrJFoU4n2gGpzMdixX5Vx2aUjkEP71qg5awooaPv38D4aYYkjPPxtFcCv4S9XkS9ehSmjj9aw9ANs4hWHVof",
  "key28": "4UhQrSLNd9sCeTG7iqC31yVapnGGejjdFrKKWYzA2EYjKkdPZbarz1MNuUzTK7QsruwRYSdhPv28zfndTkVgCMTG",
  "key29": "o23SeBFpdYZbfKjBuJpanL63kwsCrw5cYpJH3qTypPQ1z58kyyRXTyyhFUnCBG6nvkXEfj2JQ4BjMuCJkU2N8L6",
  "key30": "2ru7TQ2SyjHQmNd4U9CcrnMefhDXYHVocFEMKfCvZkUHk3dRYfLA4RFvDjgbYSsBcjQ1mpHTMq5S59cMWUTbdazB",
  "key31": "kaQwV2V9AA83e8sFUniHQZmmerQjUgb2PXZkQLgRZEYDZEcuoZ4jzMdZfmce9HQ4aStCyD6RXCx8Wo229PcaZPx",
  "key32": "3Ti8KcafTtAPyGGQ8hDiw6BPPCpewvTyTQtRmjTdyxqBVVFJwG5ZLBEEnUoY3Rok4W9XDofumjK367etNcr9aUeJ",
  "key33": "4tQtr61of4JT664aZxzjBxF6geEmFvVzEYH8NLsyh8nP9ZGpNYR3KdnMZ4wa1dyJxz5LV9QacRDvB6UxPEunfWSn",
  "key34": "3taBw6PLQJ4EBvyLQQeh5PiAC6ccTV2cLSfXpKeuqhJA9pHr8MZRNCfz9JDhdzooKkRPCrTq9d295sjByxWJGYGb",
  "key35": "4Ww2qMsoDjp4UNDh6TLCSiA4QxFnqAywyVEt2LxiurM3iE285Y3nmT2suz2uC5Kzk6Ep7qDtnn6DACpgTLo9eCbL",
  "key36": "5G2DHEFC9rz8tcZoc2KDyNE4gc5x3gCYxwRwFX51AgTxMS9zjJKVhMFmw1K4vMgxCdXMiSKMg6Tk325nuG1VWo7o",
  "key37": "3bWmu16C4CdWNXkG99B9ibAn3qN6KccvKBoBrhVa2uFiZGntVCRZVQpYC159brnJN92qcrhvJ8PjKM3U3jYGcctx",
  "key38": "61wvTe3aFxY6i799PYSNHjDwK41qVCmx272ShVANN3A9F6zDqPUCsBhWjqST9J6Cq8dkMUGEgpFUfjJEXsonBRC4",
  "key39": "ofEu67ZAdbrZErgAJo5A6VeNX3J8UMWeoZvnVYAfpVob4ENRnu6chJf65hv51REU6h9HTpZP9YikczNbu9qBYBi",
  "key40": "xCYB8gCiVaXKrA2D6eTnZHUpSkkauNnH2QQyMaNxdUSgQMh52EGwW8NHiL7bce5bbytzQDS14XxzW4vJYZTKRtv",
  "key41": "3G6iRPJDiSFgqKVAMg9BEev8rcx7yyRyDHx7QXWL5fMdsVJqFLcQc6M9LHV816Z6dzkrKAs1tsa4eraxXBKyQnVG"
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
