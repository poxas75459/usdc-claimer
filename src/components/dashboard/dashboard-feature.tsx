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
    "2mwPk14Xkrv1CGiSXi5pwewEg4HAUP6Q5vFTRKiUrWAydFus2ourodxQKkas2Lrrjf7De2p1WAhCvzdtiVovDbBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4342sfz5uwzgAJawLpLmryEGDcWCBJKSfNHiAzncTqNTp69XrnVP5rXyhQnqSnMrjPeuvveHw1ttCdnJd4F1e7R",
  "key1": "4Xk3Jd19JFp8BowLvJuqniFvWsL4HLMJaDnQ88V5HPtgKzmdBmJdzUs9ioNJSMi7DFHWHcWWPHfjgGLvTvyyF4XV",
  "key2": "2zozHMGuz1p6Xpiuh3aPebWN24U1mppNJWQ3mtyy1MvUCpMhkpmQzS489ARMvSQBGKqm3gbAU9aULQbX3hgr39y3",
  "key3": "3zSrChNQeteWec61Yr6QtQM7yohdU3KtzySVZ8i6kTw7tQCtrwm4gwEMT9tvCUwygPDdRw8WjJSX9oNE2FnKiCAD",
  "key4": "4JobDmfePhidaQ7vFegqaTwkp1qqaD7hVJeazxPiAXE4w46BFKaEiNJf1wu1QKc7q8apkt7L5Yq4jxxWLuBCAQDp",
  "key5": "vLeafXpPgHKtXhPCNktxukjpXCCm6TWZ2vDgNgYaHt3dqT5Bbw7zfc8y9dmvYeWfQf2cboVTRYEA16NQGWAcpGD",
  "key6": "3vu18bCcBA9FVV7xaAXJyJFy8Hy2v2CCHhYqcHsnMy5GzajWrwTAv7cpGDBbgQta5DQiNheZR28rBz2yPYx81gsy",
  "key7": "2VDmuFGSqhLxh9An8vdYq9W2iJPctW1CGXUC4t1YXv6R4zDGfwJhbvbFWQnpZG2inMycuiEbYdZHvcaQv1P5iTLo",
  "key8": "3fDxQjuBGjoMh8zFQTi9ySHivVWg7keuHJXZmMgXc1vJMcnxGDe5zKoepHqwgd4WFjGTYL9Ub8yQAT4x3WNYU4z4",
  "key9": "3bkqRc7jyaQhCjXZoZ8jeq6uV427P2Z1FbvEGqpphK4UH3LRcjueiRE3cXPVTFt3DYqDtZc9JVM5vtYquKoMAbEP",
  "key10": "5JWQgX1aZcrFzy5GYVeTF35PLUPvMqGfcrhMWYsMfnPreXJCXDmD4csF9UWGGnTxXcJgE49nysRfWVPXzx43niS6",
  "key11": "3y1fVcVEXZCAdbb93PxRpmEiCENFjiEJSaCK4mRt8NhakgpRuvdRK17mA5dgk5FBcf6yeH5xYzSJsygRYGzm7biC",
  "key12": "5KoGv8KvfCsFvBCYuRM3g3fUXQTerypntatSnu92mY6u1KafEd2Z8ZWRp4hH9ihmYUF8w812LJuSTuFtZ7kLvSpK",
  "key13": "4mKR6wAnCpK5WLYczvgThYT2NNo5rBSPrsat8h9QmWB6U8iNiEVAZQh8jwcoFJErmqmaophkgXGAvEUvpTZHsHGu",
  "key14": "2wwLhuhyXfJMv7eQqTvExzbTw7AL9jYe7iFUp3qNy4TwSucR2caDC5xcrgWcVtN8fL8XNLPbHMuEis5fVz7ofWtq",
  "key15": "2yvJKYVZx2gfxEm7Zx2F5Quoc87B5ieb4rdFXXf4PUF7qRw519uxDkmNaQM4RrDgLCKDE8dVsHbLhh5E8i3VoEKh",
  "key16": "2JsLwTc8MGALZ6X6c6wbjun7WesSuc8Bmbbmop7GRJoHb8ASDbDvDRdWYiRo9Kh1sse5LtEMpNxN7G5YBNuyoX2i",
  "key17": "9sQmZhGs1NH5pQtBJqAJzxSjf2dfP39bpN7Cy912BAzYE16ErBT6RuMFeP6ypxei6LWExaeTc5LpRZNckBaqxjH",
  "key18": "4Hx9jFnDZMLsSJRu9JXa6WREcJBjsmsSyQgm1LdmTL92a9aauCVK9W1FWYmkqRxvXPrXHbRX5Pv1hWrDKcmeg2D4",
  "key19": "5g9fCGPLEmKY29TK1UE1KfSVCKhBqwmA6D3mXo3gmL8TC19ZntC1nbnP3tyug9WsgqvRFPyqzdCan6oDkTKN8exe",
  "key20": "4iFST2fc5s8ZxfJ7TjBphcoqTYcxfbSZ4PMQWrbBuhVLZZ63UNt1TyRTbA4qgXwMcvUSpVwzdpj9vvP4re9Eo47P",
  "key21": "5hxg1rtmiw3M8BdxQQYt4KZ73TpG8ynzMRP77X6pj2PSbv78URwm8AWiEXHk9gfywmQ7i9me2qTxZX9MJhKPfR7i",
  "key22": "3potRJnhsQkAQPHUbUdvT5XPzcqaqv518WzGvvArNrSj7DtxSayhsD3mhJi1ebrsa9sJg2vPSnhY7Ytb8EPYW7sA",
  "key23": "24YPZiNV2oC1K72xS7aAmz88sRscRstmQcJJpn67p12yD2HwMz5KUrZ7jAcoP9ehuG5ZFnWkR8RvAW4xCRZTe1n2",
  "key24": "5a4HSPanJ6Gw8Wpqwkn9zy9EeRrAaVKu6SdWFm7ZYJNVnDNLxwjb8pKBbRyod2LW85YwfGz27YNJkgEB74mesJak",
  "key25": "2CjcSFKpDhmvCSCEHW2N75eXovzsiTYFF44CtnLqsGxdbhDEofGCCHmzrzFHptY2mBhxtzjEVxq7WsVCCa1wgZks",
  "key26": "4cpdnodQQFkqDi9w2iGFkaeHCCA9WhfGAaUApSrVEoRTupiRpuMLbK5bfEi7ZdNnRJqUzMr5D4Gtf8cCNN7vhvuA",
  "key27": "4swMYENn4F4UKm1Y7BryE5Ps3fUUteKC9GzCU76E2HQ14YJE4HSN3LmTcRHb8xEfnwZS8Rzu3xrQ22YLMNao1oMm",
  "key28": "dcywrHNc1cjTvT3pLLvs6Na1pNmGHnr8EbEUUQYEEja4fauvidhmvDp4DFJYgYLEE5xPCmFLKFpNqvhcPyV2F6s",
  "key29": "2etg6GbSzasdyWCQWegbemXdPVRTzHx2nyn9pSZPBEnmZ7nk9XP2dvBLNMhRk8rXeJoxR9nXrJttexX7mNa4Ne7S",
  "key30": "4zCU7ztvETvBDfVvghPxwosk55YJ8vq9wWHF9mxzmSCwBsvqA8cs7XnDWACiCscyMKkq5C2u3gnzsv2StBBnQiHV",
  "key31": "2qXiypbyRRiVbG2PD2xfHVqAyoTAuLY9mX8yftGVnLVBTuJNkLueFprDFcmops23MJUifAiKCeo7evy6BwWgCwsb",
  "key32": "3cvRv99zQtT2BdsfT1n8qxXZes9jseSQUUB7REwFNYGSkAnordbtWKm9vuzwy7VN2zqtdeouJkDmwYN2HAQHPJ7h",
  "key33": "3iSoNg5TBLoNoMsJdgxxTVucJ38B1vbvRPs9PteH4enRhZuQwA87XdBpqg9bVqB5BVbqu7RZkZgFZzMPBsSE65mb",
  "key34": "3qt36HdW2vpUswKqUWxuaXJLziNxmjiZ5oA7dUZ8e1woVhnfGSSLghkEu1R1Gu3wnUucjujWcSmEEiM2CPExBo5P",
  "key35": "2aCFdnLcuqCHfDYS2HVN9srqEvLTZkb147pLRZCUj8pNS7Fc4gNg8e28mVZW9zsw4Y22b8eCWXyTWamyhXMLKNpL",
  "key36": "4MW4ZPrGDNThG5VYU8VkYjhsQnmMDq8yPnY4o2tfV5S9dvot4a3CN5wxGpLg3hoFH9tWixjqXt9rF2XYdMFkGviD",
  "key37": "AjRqd3JDEAz9BuiGQQhStRkXMV6586TKRNSKK4FupLq75BboiNUbDHwWHCPyqcbcY6X2j6xxneTct3wUFqpy4wt",
  "key38": "2ET9TR4qiRx5ku4PPvi14z2zLYkcFpV3TpKnLcFq68JP9UDic2Gbbc6d3G7KefdkVkmFJtofqoXKCDpdBME4neJt",
  "key39": "3uStPo5jhujf7qG7GGEjPVfEM6yx7WFrmGb3VDTWFQqQ3nBHJCz9L3tF8fJPGEXPC2dX9eNi1mzZMkNqjWvhwD8M",
  "key40": "3U1kbWRxKAaFo9SED56QpDs15LDeUTonxXuaMzScdNNTvZZtuFW4aVLXKxvqKXVaWvEntKCPR6pqi7nvoZEMXbEX",
  "key41": "2A3FWjXnMh7iCeCRwMXccZEhqL9ZzpFD7ESHtgvCfd5BWBRWHCUWnwS9wrYCLbrLMsRR68iJGecsbWjYFM6czm7U",
  "key42": "N9T4E6EHStAkoRXdnack8vUecUhRJmajX2pXnXR2vXhWwhCVPgM6fp1cQFFqzAinefP3dNS6bxt1kDnrFKhG6eA",
  "key43": "2Hu1zGN5szGqwXGGvSMcetsSMXnE9Q7WzccLL2DxaVNohayHZHWfa8ig9hRm4amxBJV8GSto2Js91KvZvCn3CoLv",
  "key44": "5y7smzDprR49bC6t46HbwWy4rJtvP5iC2KJfY8MN5hykY52PPNjmKNSin2c1DzcasiYxezWzJFUbRpFBUqvWEH49",
  "key45": "Ko1xgcsocCG53YuAKJeY42ssLcGhdt3sYChm6k2x2mN5RHWaX8hqSxBuXSodjQGmxrVPMjUW2c6o5XRJezFggKv"
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
